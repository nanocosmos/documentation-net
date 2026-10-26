---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.36.0 - MoQ playback statistics

### MoQ Playback Metrics

-  added API routes for [Media over QUIC (MoQ)](../nanoplayer/nanoplayer_feature_moq.md) playback statistics ([API reference](https://api.nanostream.cloud/docs/analytics/v2/#tag/MoQ-metrics)):
   -  `/v2/moq/views/os` (GET) -> MoQ views by operating system
   -  `/v2/moq/views/browser` (GET) -> MoQ views by browser
   -  `/v2/moq/playtime/os` (GET) -> MoQ playing time by operating system
   -  `/v2/moq/playtime/browser` (GET) -> MoQ playing time by browser
   -  `/v2/moq/playtime/timeseries` (GET) -> average / median MoQ playing time timeseries
   -  `/v2/moq/playtime/streams/timeseries` (GET) -> MoQ playing time timeseries for a single stream
   -  `/v2/moq/latency/timeseries` (GET) -> average / median MoQ latency timeseries
   -  `/v2/moq/latency/streams/timeseries` (GET) -> MoQ latency timeseries for a single stream
   -  `/v2/moq/startuptime/timeseries` (GET) -> MoQ startup time timeseries
   -  `/v2/moq/startuptime/streams/timeseries` (GET) -> MoQ startup time timeseries for a single stream
   -  `/v2/moq/bufferingratio/timeseries` (GET) -> MoQ buffering ratio timeseries
   -  `/v2/moq/bufferingratio/streams/timeseries` (GET) -> MoQ buffering ratio timeseries for a single stream
   -  `/v2/moq/errorcodes/timeseries` (GET) -> MoQ error codes timeseries
   -  `/v2/moq/stopReasons/timeseries` (GET) -> MoQ stop reasons timeseries

### H5Live Metrics

-  **H5Live metrics no longer include MoQ playbacks.** The H5Live Player reports both playback paths, WebSocket/MSE and MoQ. Until now, the `/v2/h5live/*` routes counted both together. From this release, `/v2/h5live/*` covers WebSocket/MSE playbacks only, and MoQ playbacks are reported separately under `/v2/moq/*`
