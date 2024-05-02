---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest Releases
sidebar_label: Latest
---

## API

### 2.25 - Successful playback service & SRT metrics monitoring API route

:::info Release Version Differentiation
With the introduction of version 2.25 we made versioning of our API and the Analytics Dashboard independant from each other. This release contained no changes for the Analytics Dashboard service and as a consequence this service remains at version 2.24 for now.
:::

- added API route for SRT ingest metrics monitoring `/api/v2/monitoring/ingest/srt/timeseries`:
   - bitrate (combined video/audio)
   - round trip time
   - packets lost
   - packets dropped

## Analytics Dashboard

### 2.24 - Alerting service & Error response improvement

-  use toasts for error messages
-  improved troubleshooting fine time range slider to automatically keep the maximal selected time range duration at 12 hours