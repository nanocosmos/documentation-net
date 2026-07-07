---
slug: /analytics/dashboard-releases/history
id: analytics-dashboard-releases-history
title: Dashboard Release - History
sidebar_label: History
---

# Changelog

## 2.33.0 - Expired Token Revocation

-  **Guardian — Token Revocation**
   -  expired playback tokens can now be revoked for a 24-hour grace period after expiration, so operators can still terminate ongoing playback sessions running on a technically-expired token
   -  the Expired label is decoupled from the Revoke action: the label appears as soon as the token's `exp` is in the past, but the Revoke button stays available during the grace period

-  **H5Live**
   -  the Buffering Ratio widget no longer fills future timestamps with zero values; the chart now ends at the last bucket with real data
   -  buckets with no active streams are shown as a gap ("nothing to measure") instead of 0% ("measured, no buffering"); empty ranges show *No data available*

## 2.32.0 - Live Captions & Inactive Ingest Alerts

-  added **Live Captions** analytics page (`/liveCaptions`) with the following widgets
-  uptime usage (timeseries + CSV export)
-  uptime per source language (zoom + CSV export)
-  uptime per target language (zoom + CSV export)
-  uptime usage per stream name (zoom + CSV export)

-  added **Inactive Ingest** alert to the Troubleshooting section
-  new dedicated widget shows the timeline of inactive ingest occurrences with legend visibility toggling

-  worldmap ABR switch metric improvements
   -  ABR profile switch now displays the correct quality levels where a stream switched into
   -  simplified worldmap's ABR switches hover tooltip to display aggregated total counts

## 2.31.0 - Guardian View & Token Revocation

-  added playback token revocation to Guardian View for misuse detection
   -  the JWT Misuse table now displays a **"revoked"** status column, showing at a glance whether each token has been revoked
   -  clicking on a table row opens a detail modal with a dedicated **"Playback Token Revocation"** panel, showing the current revocation status and a **"Revoke"** button to immediately revoke the token
   -  the IP Misuse detail modal now also lists associated playback tokens with their revocation status and the ability to revoke them directly
   -  expired tokens are clearly indicated as **"Expired"** and cannot be revoked
-  renamed "Concurrency" to "Max Concurrency" in the JWT misuse table and descriptions for clarity

## 2.30.0 - Webcaster v6 Support & JWT Misuse Table & H5Live StopReasons/ErrorCodes Update

-  added misuse analysis via JWT to Guardian View
-  webcaster widgets now support webcaster version 5 and version 6 metrics
   -  included buttons on UI to switch between version 5 and version 6 on the 'Status/Error Codes' widget on the Webcaster tab
   -  added 'BROADCAST_STOPPED' for v6 as a new stop reason category for 'Stop reasons' widget

## 2.29 Cloud Optimizations

- internal system optimizations

## 2.28 - Alert manager UI

-  added `max frame delay` metric to troubleshooting :arrow_right: ingest
-  added an error notification via Toast for issues that occur while parsing app states from a URL

## 2.27 - Alerting Adjustments & Authentication Improvement

-  Adjustments to Troubleshooting/Alerting Section:

   -  fixed an issue when switching between a Stream Time Ratio - alert and a Continuous Restart - alert and no data was shown in the charts
   -  general ingest stream information in the alert table now supports multiple ingest connection details to provide more insights of stream behavior
   -  new details "country name" and "connection ID" are available for alerts
   -  new performance intervals were added to the graph for "Stream Time Ratio" alerts, supporting issues with ratios constantly above 1
   -  improved "Stream Time Ratio" graph annotations, which now indicate whether the alert ended due to stream termination or stream recovery

-  Improvements regarding Login process:
   -  users do not need to re-authenticate via login credentials each time the Analytics Dashboard tab is closed anymore
   -  (e.g.: opening the Analytics Dashboard within a new tab while authentication took place recently, no extra manual login is required)

## 2.26 - Alert Guiding / Publishes finding

-  added new alert guide feature for troubleshooting, which provides a way to find more details about past & current alerts for ingest specific issues
   -  Troubleshooting ingest section has now 2 tabs (publishes / alerts)
   -  it is now possible to redirect to any alert directly from the Cloud Dashboard and see detailed information about occurrences, possible causes and issue solving recommendations
-  adjusted and improved troubleshooting publishes determination in to provide a significant performance boost for search and analysis

## 2.25 - Public world map API routes

-  improved world map interface
-  added support for world map to use with mobile devices
-  added widgets for playtime break downs on the h5live view
   -  H5Live playtime per browser
   -  H5Live playtime per os

## 2.24 - Alerting service & Error response improvement

:::info Release Version Differentiation
With the introduction of version 2.25 we made versioning of our API and the Analytics Dashboard independant from each other. This release contained no changes for the Analytics Dashboard service and as a consequence this service remains at version 2.24 for now.
:::

-  use toasts for error messages
-  improved troubleshooting fine time range slider to automatically keep the maximal selected time range duration at 12 hours

**NOTE: Changelog for previous versions can be found in the [API changelog](/analytics/api-releases/history)**