---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.35.1 - WebRTC v6 troubleshooting

### Troubleshooting

-  WebRTC troubleshooting now recognizes **Webcaster v6**: v6 publish sessions appear in the **publish list** and are covered by error detection, so v6 broadcasts are no longer missing from the **Troubleshooting** page
-  a normal end of a broadcast (`BROADCAST_STOPPED`) is no longer treated as a publish error, so cleanly stopped streams no longer show up as failed publishes
-  WebRTC **bitrate** values are no longer re-scaled on read: the underlying field is already in kBit/s, so publish bitrates are reported at the correct magnitude
