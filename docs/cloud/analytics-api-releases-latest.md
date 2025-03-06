---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Release
sidebar_label: Latest
---

# Latest Analytics API Release Notes

## 2.29 - Alerting data adaptation

- added additional API routes for successful playback start ratio (**SPSR**) to get TOP 100 for streams:
   -  `/api/v2/playback/start/success/ratio/streams/top100` (ascending order)
   -  `/api/v2/playback/start/errors/streams/top100` (descending order)
- changed behavior of alerting API routes `/api/v2/alerting/ingest` / `/api/v2/alerting/ingest/custom`
  - reduced detection time range from 15 to 5 minutes to make detection more responsive
  - new fields:
     - `alerts/advices -> name` - each single alert/advice now has a name like `DUPLICATED_INGEST`
     - `alerts/advices -> servers` - all hosts found for alert detection
     - `alerts/advices -> highestStreamElapsedTime` - highest elapsed time found for the stream in the detection time range - gives an indication of how long the stream has been running when the alert was detected
  - `streamDetails` has been replaced by `connectionsDetails`: `streamDetails` only contained a summary of the most frequent values for all ingest connections, whereas `connectionsDetails` lists each ingest connection that occurred in the alert detection time range
  - `CONTINUOUS_RESTARTS` with code 22001 is now code 22000
  - new alert: `CONTINUOUS_RESTARTS_POOR_PERFORMANCE` (code: 22001), this alert indicates continuous restarts where the stream time ratio reflects a poor performance