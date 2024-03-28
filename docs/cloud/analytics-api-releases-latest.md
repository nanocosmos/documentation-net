---
id: analytics-api-releases-latest
title: API Release - Latest
sidebar_label: Latest
---

## 2.25 - Successful playback start / failure service & SRT metrics monitoring API route

:::info Release Version Differentiation
With the introduction of version 2.25 we made versioning of our API and the Analytics Dashboard independant from each other. This release contained no changes for the Analytics Dashboard service and as a consequence this service remains at version 2.24 for now.
:::

### API

- added API route for SRT ingest metrics monitoring `/api/v2/monitoring/ingest/srt/timeseries`:
   - bitrate (combined video/audio)
   - round trip time
   - packets lost
   - packets dropped