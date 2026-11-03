---
id: chroma_key_troubleshooting
title: "Chroma Key: Troubleshooting & FAQ"
sidebar_label: Troubleshooting & FAQ
description: Fixes for common chroma key problems such as leftover green, holes, halos, spill and outputs that don't update, plus answers to frequent questions.
---

# Troubleshooting & FAQ

## Key quality

| What you see | Likely cause | Fix |
|---|---|---|
| **Patches of green or blue stay in the background** | Similarity is too low | Raise **Similarity** in small steps (about 0.005–0.01). Check that the key colour matches the real screen colour (use **Pick Color** or **Autotune**). Check the screen lighting. |
| **Holes or see-through areas in the presenter** | Similarity is too high, so parts of the skin or clothing match the key colour | Lower **Similarity** step by step. Make sure the presenter isn't wearing anything in the key colour. |
| **Jagged, hard edges** | Blend is too low | Raise **Blend** slightly, in small steps. |
| **A see-through halo around the presenter** | Blend is too high | Lower **Blend** in small steps. |
| **Green or blue tint on skin, hair and edges** | Spill: screen light reflecting onto the presenter | Turn on **Despill**, set the type to match the screen, and raise **Mix**, or start from **Green kit** / **Blue kit**. On set, move the presenter further from the screen and add a rim light. |
| **Skin looks pink or magenta** | Despill is too strong | Lower **Mix** in small steps. A little green on the edges looks better than magenta skin. |
| **Edges flicker during movement** | Similarity is right at the border, so edge pixels switch between visible and removed | Move Similarity clearly up or down, and raise Blend slightly. |

## Stream not updating after Apply

**What you see:** you clicked **Apply Now**, but the live output still shows the old background, overlay or settings.

**Why:** a running ingest can keep using its previous configuration until it restarts.

**Fix:**

1. Check the output's card: **● Needs Apply** means the change hasn't been saved yet. **Apply** saves the key settings and every output's background and overlay, whichever output is on-air.
2. Check that **Stop & unlock after Apply** is on (it is by default), then apply again. Or click **Bounce**.
3. If the output still doesn't update, stop and restart the broadcast in your encoder.

Stop & unlock and Bounce restart the ingest and briefly interrupt the stream. Key, despill, EQ and overlay position changes don't need a restart: in Live mode they apply in real time.

## Player shows a black screen

- Look at the signal strip on the ingest card. **Waiting for signal** (red) means nothing is arriving: check that your encoder uses the **Server** and **Stream Key** from the ingest card. **Where do I publish? →** takes you there.
- Check the server in your encoder: it must be `rtmp://bintu-studio.nanocosmos.de/live`. Another RTMP server can accept your stream without starting the chroma key, so the outputs stay black even though the ingest is live.
- Make sure your encoder publishes to the ingest, not to an output. An output's **Output name** isn't a publish target.
- Check that playback isn't paused (click **Start playback**).
- In **Live**, click **Ingest**. If the raw feed doesn't play, the problem is the encoder or ingest, not the chroma key.

## FAQ

### My output shows the wrong background. How do I change it?

You can do this yourself:

1. Upload the correct file in **Backgrounds** (MP4, PNG or JPG, at your camera's resolution).
2. In **Stream Setup**, load your setup if it isn't open, and choose the new file in that output's **Background** field. Each output has its own background, so make sure you change the right one.
3. Click **Apply Now** (the card shows **● Needs Apply** until you do). If the old background is still showing, see [Stream not updating after Apply](#stream-not-updating-after-apply).

If you contact support, include the ingest stream ID and the filename you expect.

### My background looks stretched, zoomed or has black bars

The background's resolution or aspect ratio doesn't match your camera. Export it at the same size as your source (1920×1080 or 1280×720, 16:9), upload it again and re-apply.

### My MP4 background was rejected, or shows a ⚠ warning

The uploader checks each MP4's average bitrate. Files above **8 Mbps** get a ⚠ warning, and files above **15 Mbps** are rejected. All outputs share one processing job, so a heavy background can take every output offline. Re-encode the file as H.264 at 3–5 Mbps (no more than 8 Mbps), at 720p or 1080p, and upload it again. See [Prepare MP4 backgrounds](chroma_key_getting_started#prepare-mp4-backgrounds) for the recommended settings.

### All my outputs went offline or started stuttering after I changed a background

A background with a very high bitrate can overload the processing job that renders **all** your outputs. Check whether the background has a ⚠ or ✕ badge in **Backgrounds**, or an amber or red border on its Background field. If it does, switch that output back to a lighter background, re-encode the heavy file (see [Prepare MP4 backgrounds](chroma_key_getting_started#prepare-mp4-backgrounds)) and apply again.

### I uploaded a file but it isn't in the background list

- **Format:** only MP4, PNG and JPG are accepted. MOV, MKV and GIF won't appear.
- **Bitrate:** MP4s above 15 Mbps are rejected and not uploaded. See the question above.
- **Refresh:** click **Refresh** in the file list, or reopen the dropdown.
- **Upload finished:** the file must be listed in **Backgrounds**, with its size, before you can assign it.

### Can each output have a different background or logo?

Yes. Each output has its own background, overlay, tags and transcodes. Overlays are all-or-none: every output needs an overlay for overlays to appear, but each can be a different PNG. See [Outputs & Branding](chroma_key_outputs).

### What format and resolution should backgrounds be?

- **Moving backgrounds:** MP4, ideally a short, seamless loop at about 3–5 Mbps
- **Stills:** PNG or JPG
- **Overlays:** PNG with transparency
- **Resolution:** the same as your camera, 1920×1080 or 1280×720 (16:9)

### Can I use a live stream as a background?

Yes. Type the stream name or stream ID of another nanoStream stream in the **Background** field. That stream must be live.

### Can I reuse a setup instead of configuring everything again?

Yes. In **Stream Setup**, choose **Reuse existing setup**, paste the ingest stream ID (or its Dashboard URL) and click **Load Existing Setup**. The key settings, targets, backgrounds and overlays are restored. See [Reuse an existing setup](chroma_key_getting_started#reuse-an-existing-setup).

### How do I know my key is good enough to go live?

Look for clean edges, no colour tint on the presenter, a background with no leftover screen colour, and a natural look. Have the presenter move around, and check the edges against a bright, contrasting background. See [Check your key](chroma_key_tuning#check-your-key).

## Still stuck?

Contact [nanocosmos support](../cloud/support). Include your ingest stream ID, which output is affected, and a screenshot of the problem.
