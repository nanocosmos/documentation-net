---
id: analytics-api-releases-latest
title: API Release - Latest
sidebar_label: Latest
---

## 2.24 - Alerting service & Error response improvement

### Analytics Dashboard

-  use toasts for error messages
-  improved troubleshooting fine time range slider to automatically keep the maximal selected time range duration at 12 hours

### API

-  added timestamp as a human readable date string (in addition to the existing UNIX seconds timestamp) to all API route responses containing a timestamp (property name: `timestampAsString`)
-  added additional fields to detected alerts/advices via `/api/v2/alerting/ingest/`:
   -  **id** : every alert/advice has now an unique id, that stays the same until the alert/advice will no longer be detected
   -  **firstDetection** : the minute the alert/advice has been detected for the first time
   -  **elapsedTime** : minute of the current detection cycle minus `firstDetection` timestamp in seconds
   -  **countryName** : replaced the existing property `country`
   -  **countryCode** : 2 letter country code
-  improved error responses: (find error codes [here](https://dev.nanocosmos.de/redmine/issues/40724#note-1), will be part of the documentation later)
   -  now each error has a certain error code (starting with `10` followed by a 4 digit error code)
   -  **error.message**: general error message
   -  **error.errorCode**: 6 digit long error code
   -  **error.userInfo**: more specific details to the error
   -  **error.summary**: short summary of the error
-  added API route for H5Live playback counts broken down by:
   -  **browser** `/api/v2/h5live/views/browser`
   -  **operation system** `/api/v2/h5live/views/os`