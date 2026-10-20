---
id: realtime_api_recording
title: On-Demand Recording
sidebar_label: On-Demand Recording
description: Start and stop recording of your live streams at any time using the nanoStream Real-Time API. Each recording session creates a separate file.
---

## Overview

On-Demand Recording lets you control exactly when a live stream is recorded. Instead of recording the entire broadcast, you choose when to start and stop. Each recording session produces its own file.

This is useful when you only need to capture specific moments — a key segment of a live event, a compliance-relevant interaction, or a highlight clip.

:::tip How is this different from auto-recording?
With [Live Processing Recording](/docs/cloud/live_processing#recording), every incoming stream is recorded automatically. On-Demand Recording gives you manual control — you decide when recording starts and stops, and you can run multiple recording sessions on the same stream.
:::

## How It Works

1. **Start streaming** — Set up and start your live stream as usual.
2. **Start recording** — Send a REST call to begin recording. You provide a filename for the recording.
3. **Stop recording** — Send another REST call to stop. The recorded file is saved.
4. **Repeat** — You can start and stop multiple recording sessions on the same stream. Each session gets its own file.

```
Stream is live
    │
    ├──▶ POST /rec/start  →  Recording begins (session 1)
    │
    ├──▶ POST /rec/stop   →  Recording ends, file saved
    │
    ├──▶ POST /rec/start  →  Recording begins (session 2)
    │
    └──▶ POST /rec/stop   →  Recording ends, file saved
```

You can also check which recording sessions are currently active on a stream.

## Prerequisites

- A **nanoStream Cloud** account with a valid **bintu API key**
- A live stream that is currently ingesting
- The **Real-Time API** enabled for your organisation

## Getting Started

### Step 1: Start your live stream

Set up and start a live stream using the [nanoStream Cloud Dashboard](/docs/dashboard/start_streaming) or any supported encoder. Make sure the stream is live before starting a recording.

### Step 2: Start a recording

Send a request to the Real-Time API with your **stream name** and a **filename** for the recording.

```bash
curl -X POST https://realtime-api.nanocosmos.de/stream/{streamname}/rec/start \
  -H "X-BINTU-APIKEY: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "filename": "my-recording-001" }'
```

The API confirms that recording has started.

### Step 3: Stop the recording

When you are done, stop the recording session.

```bash
curl -X POST https://realtime-api.nanocosmos.de/stream/{streamname}/rec/stop \
  -H "X-BINTU-APIKEY: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{ "filename": "my-recording-001" }'
```

The recorded file is saved and can be accessed later.

### Step 4: Check active recordings (optional)

To see which recording sessions are currently running on a stream:

```bash
curl -X GET https://realtime-api.nanocosmos.de/stream/{streamname}/rec \
  -H "X-BINTU-APIKEY: YOUR_API_KEY"
```

This returns a list of all active recording sessions.

## Authentication

All requests require your **bintu API key** in the `X-BINTU-APIKEY` header. This is the same API key you use with other nanoStream Cloud APIs.

## API Reference

For full endpoint details, request/response schemas, and error codes, see the **Real-Time API Reference**:

👉 [Real-Time API Reference](https://real-time-api.nanostream.cloud/docs)

:::info Business Feature
On-Demand Recording requires a business upgrade. Please reach out to our sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::
