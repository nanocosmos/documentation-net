---
id: live_captions_api_guide
title: Live Captions API-First Guide
sidebar_label: Live Captions API Guide
description: API-first walkthrough for the captions-workflow live-captioning flow, including authentication, stream creation, caption configuration, live status, and transcript downloads.
---

This guide walks through the complete **Live Captions customer journey** using the **bintu REST API**: from signing in and creating streams to enabling real-time captions, checking live status, and downloading transcripts from the CDN.

:::info API Entry Point & Reference
- **API Base URL:** `https://bintu.nanocosmos.de`
- **Full API Reference:** [doc.pages.nanocosmos.de/bintuapi-docs](https://doc.pages.nanocosmos.de/bintuapi-docs)
- **Dashboard:** [dashboard.nanostream.cloud](https://dashboard.nanostream.cloud)
:::

The only step that is not an API call is pointing your RTMP encoder at the ingest URL returned in step 2.

## Summary

1. **Sign in:** [Validate Credentials](#1-sign-in) (`POST /user/validate`) to get your token and API key.
2. **Create or load a stream:** [Create Stream](#2-create-or-load-a-stream) (`POST /stream`) or [Stream Info](#2-create-or-load-a-stream) (`GET /stream/{id}`). Returns `ingest.rtmp` (Server and Stream key for your encoder).
3. **Configure live captions:** [Create Stream Options](#3-configure-live-captions) (`POST /stream/{id}/options`) with `sourceLanguage` and `targetLanguages`.
4. **Go live:** Poll [Stream Info](#4-go-live) (`GET /stream/{id}`) and watch `state`.
5. **Replay and transcript downloads:** Fetch recorded replay and caption files directly from the CDN via [Transcript Downloads](#5-replay-and-transcript-downloads).

---

## 1. Sign in

### Roles allowed to access this resource

|<span className="role role-admin">nanoAdmin</span>|<span className="role role-user">nanoUser</span>|<span className="role role-readonly">nanoReadOnly</span>|
|:---:|:---:|:---:|
| ✓ | ✓ | ✓ |

Authenticate with **Validate Credentials (Login)** (`POST /user/validate`) using the user's email and password. The response contains a JWT `token` and, for <span className="role role-admin">nanoAdmin</span> users, the organization's `apiKey`. Follow up with **Organisation Info** (`GET /organisation`) to verify the key and load the organization profile.

Forgotten passwords are handled by **Reset Password** (`POST /user/password`). It always returns `200` and never reveals whether the email exists, so build your UI around a generic confirmation message.

```bash title="Sign in request"
curl -X POST https://bintu.nanocosmos.de/user/validate \
  -H "content-type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "yourPassword"
  }'
```

---

## 2. Create or load a stream

### Roles allowed to access this resource

| Operation | <span className="role role-admin">nanoAdmin</span> | <span className="role role-user">nanoUser</span> | <span className="role role-readonly">nanoReadOnly</span> |
| --- | :---: | :---: | :---: |
| Create Stream | ✓ | ✓ | ✗ |
| Stream Info / Validate Stream | ✓ | ✓ | ✓ |

Create a new stream with **Create Stream** (`POST /stream`). To enable a post-event replay, include `processing` entries for recording when creating the stream, or add them later with **Set live processing** (`POST /stream/{id}/processing`). Availability of recording and replay depends on your package.

To resume work on an existing stream, look it up with **Stream Info** (`GET /stream/{id}`), or check whether a given stream name is already taken with **Validate Stream** (`POST /stream/validate`) before creating a new one.

Both calls return an `ingest.rtmp` object. This is what connects an encoder to the stream:

```yaml
ingest:
  rtmp:
    url: rtmp://bintu-vtrans.nanocosmos.de/live
    streamname: XXXXX-12345
```

Configure your encoder (OBS, Osprey Talon, etc.) with `ingest.rtmp.url` as the **Server** and `ingest.rtmp.streamname` as the **Stream key**. No further API call is needed to start pushing. The same response's `playout` object (`hls`, `web`, `h5live`) provides ready-to-use playback URLs for watching the stream without building a separate player.

```bash title="Create stream request"
curl -X POST https://bintu.nanocosmos.de/stream \
  -H "x-bintu-apikey: YOUR_BINTU_API_KEY" \
  -H "content-type: application/json" \
  -d '{
    "type": "low-latency",
    "tags": ["live-event"]
  }'
```

---

## 3. Configure live captions

### Roles allowed to access this resource

|<span className="role role-admin">nanoAdmin</span>|<span className="role role-user">nanoUser</span>|<span className="role role-readonly">nanoReadOnly</span>|
|:---:|:---:|:---:|
| ✓ | ✓ | ✗ |

All four caption stream option operations (create, modify, delete, and read back options) share this same permission restriction.

:::warning Permissions & Requirements
Live captioning must be enabled for your organization by nanocosmos. If it is not enabled for your organization, these endpoints return `403` (`LiveCaptioningNotEnabled`).
:::

This is the core of the captioning integration. Stream options control the live captioning setup:

* **Create stream options** (`POST /stream/{id}/options`): turns captions on for the first time.
* **Modify stream options** (`PUT /stream/{id}/options`): changes the language configuration on a stream that already has a captions option group. Do this **before** the stream starts ingesting, since changes only take effect on the next session.
* **Delete stream options** (`DELETE /stream/{id}/options?group={group}`): turns captions off.
* **Get stream options** (`GET /stream/{id}/options`): reads back the current configuration, e.g. to render an "active caption settings" summary in your UI.

```bash title="Enable Live Captions (POST /stream/{id}/options)"
curl -X POST https://bintu.nanocosmos.de/stream/YOUR_STREAM_ID/options \
  -H "x-bintu-apikey: YOUR_BINTU_API_KEY" \
  -H "content-type: application/json" \
  -d '{
    "name": "captions",
    "options": {
      "engine": "deepgram",
      "sourceLanguage": "en",
      "targetLanguages": ["en", "de"]
    }
  }'
```

---

## 4. Go live

### Roles allowed to access this resource

| Operation | <span className="role role-admin">nanoAdmin</span> | <span className="role role-user">nanoUser</span> | <span className="role role-readonly">nanoReadOnly</span> |
| --- | :---: | :---: | :---: |
| Stream Info (poll) | ✓ | ✓ | ✓ |
| Stop Stream | ✓ | ✗ | ✗ |

Once the encoder is pushing to the `ingest.rtmp` target from step 2, poll **Stream Info** (`GET /stream/{id}`) and watch the `state` field to detect when it starts (`live`) or stops (`created` / `ended`). There is no push notification for this, and no separate "go live" call to make.

A stream ends when the encoder disconnects; it can also be stopped from the API with **Stop Stream** (`PUT /stream/{id}/stop`). To watch the stream with captions rendered, use the nanoStream web player.

:::note Polling Best Practice
Poll authenticated with a valid `X-BINTU-APIKEY` or bearer token. Depending on the stream security configuration, anonymous requests can be rejected with `403`. Back off your polling interval on repeated failures rather than retrying at a fixed rate.
:::

---

## 5. Replay and transcript downloads

:::info Public CDN Access (No Authentication / Roles Required)
Replay files (`.m3u8`) and transcript files (`.vtt`, `.srt`, `.txt`) are static assets served directly from the **VOD CDN host** (`bintu-vod-eu-02-ak-amd.nanocosmos.de`), bypassing the bintu REST API. Because no authentication headers or API keys are required to fetch these files, Role-Based Access Control (RBAC) permissions do not apply to CDN downloads.
:::

Once recording is enabled on a stream (step 2), the resulting replay and caption files are served directly from the CDN:

```
https://bintu-vod-eu-02-ak-amd.nanocosmos.de/replay/{orgHash}/{streamName}/{streamName}.m3u8
https://bintu-vod-eu-02-ak-amd.nanocosmos.de/transcript/{orgHash}/{streamName}/production/{streamName}.{langPair}.{format}
```

### URL Parameter Breakdown

* **`{orgHash}`:** The first `-`-delimited segment of the stream name (e.g., for a stream name like `XXXXX-12345`, `orgHash` is `XXXXX`).
* **`{streamName}`:** The full stream name (e.g., `XXXXX-12345`).
* **`{langPair}`:** `{sourceLanguage}-{targetLanguage}`, dash-joined. A stream with `sourceLanguage: en` and `targetLanguages: ["en", "de"]` produces one transcript file per pair, including the source-to-source pair: `en-en` (the plain transcript) and `en-de` (the translation). A bare language code on its own does not exist.
* **`{format}`:** `vtt`, `srt`, or `txt`. All three formats exist side by side for every language pair. No separate lookup is needed.

### Example CDN Transcript Download URLs

For a stream named `XXXXX-12345` with `en` source and `de` translation:

- **WebVTT format:**  
  `https://bintu-vod-eu-02-ak-amd.nanocosmos.de/transcript/XXXXX/XXXXX-12345/production/XXXXX-12345.en-de.vtt`
- **SubRip (SRT) format:**  
  `https://bintu-vod-eu-02-ak-amd.nanocosmos.de/transcript/XXXXX/XXXXX-12345/production/XXXXX-12345.en-de.srt`
- **Plain Text (TXT) format:**  
  `https://bintu-vod-eu-02-ak-amd.nanocosmos.de/transcript/XXXXX/XXXXX-12345/production/XXXXX-12345.en-de.txt`

:::info Availability & Environment
- Files become available **1 to 2 minutes** after the recorded stream ends. A `404` means the recording is not ready yet, or the stream name or language pair does not match.
- `production` in the path is a fixed literal for production streams.
- This format applies to stable recordings (transcript-storage v0.9.3+).
:::

---

## Reference Implementation

A complete, guided implementation of every step in this walkthrough is live at **[captions-workflow](https://web.pages.gitlab.nanocosmos.cloud/captions-workflow/)**: sign in, create or load a stream, configure live captions, monitor the live state, and download the replay/transcript once the stream ends — the full five-station journey described above, running against the real bintu API.

Each station in the app includes a "Show code" panel with the exact API call for that step in TypeScript, cURL, JavaScript, Python, Go, and PHP, pre-filled with your current session's real values (API key, stream name, selected languages) so you can copy a call that already matches what you configured in the UI.
