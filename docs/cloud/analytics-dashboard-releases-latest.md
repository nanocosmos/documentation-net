---
slug: /analytics/dashboard-releases/latest
id: analytics-dashboard-releases-latest
title: Latest Dashboard Release
sidebar_label: Latest
---

# Changelog

## 2.33.0 - Expired Token Revocation & Buffering Ratio 

-  **Guardian — Token Revocation**
   -  expired playback tokens can now be revoked for a 24-hour grace period after expiration, so operators can still terminate ongoing playback sessions running on a technically-expired token
   -  the Expired label is decoupled from the Revoke action: the label appears as soon as the token's `exp` is in the past, but the Revoke button stays available during the grace period

-  **H5Live**
   -  the Buffering Ratio widget no longer fills future timestamps with zero values; the chart now ends at the last bucket with real data
   -  buckets with no active streams are shown as a gap ("nothing to measure") instead of 0% ("measured, no buffering"); empty ranges show *No data available*
