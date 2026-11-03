---
slug: /analytics/dashboard-releases/latest
id: analytics-dashboard-releases-latest
title: Latest Dashboard Release
sidebar_label: Latest
---

# Changelog

## 2.34.0 - MoQ playback statistics

### **MoQ**
   -  added a new [**MoQ**](./analytics-dashboard-moq.md) page (`/moq`) below **H5Live**. It shows the playback metrics of the [Media over QUIC (MoQ)](../nanoplayer/nanoplayer_feature_moq.md) player with the following widgets
      -  playback count per OS and per browser (zoom + CSV export)
      -  playtime per OS and per browser (zoom + CSV export)
      -  average and median playing time in seconds (zoom + CSV export)
      -  play buffering ratio in percent (zoom + CSV export)
      -  player loading count per country (zoom + CSV export)
      -  used player versions (zoom + CSV export)
      -  average and median player latency in seconds (zoom + CSV export)
      -  median play startup time in seconds (zoom + CSV export)
      -  status/error codes (zoom + CSV export)
      -  stop reasons (zoom + CSV export)

### **H5Live**
   -  the H5Live page no longer includes playbacks via [Media over QUIC (MoQ)](../nanoplayer/nanoplayer_feature_moq.md); these playbacks are now shown on the [**MoQ**](./analytics-dashboard-moq.md) page
   -  in the [Analytics API](./analytics-api-documentation.md#moq-metrics), the `/v2/h5live/*` routes exclude MoQ playbacks, and the `/v2/moq/*` routes report them separately
