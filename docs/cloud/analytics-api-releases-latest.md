---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.36.4 - Guardian misuse breakdown by user

### Usage Details by User

-  added a misuse breakdown by the optional JWT `user` claim, independent of IP and playback token ([API reference](https://api.nanostream.cloud/docs/analytics/v2/)):
   -  `/api/v2/usage/user/details` (POST) -> usage details per user, with a token (JTI) and IP breakdown
-  sessions without a `user` claim are not part of the result

### Misuse Breakdown Endpoints - Breaking

-  `/api/v2/usage/ip/details` returns **one row per IP**, not one row per IP and organization. New fields: `topOrgas` (at most 10) and `orgaCount`. `orgaHash` shows the organization with the most documents
-  all three `/details` routes validate the input: an unknown alpha-2 code in the `countries` query parameter returns **400**, and the parameter now filters. A body filter that is not an array of strings also returns **400**

### Misuse Breakdown Accuracy

-  the results include **H5Live and MoQ** playbacks together: rankings, breakdown lists (`topIPs`, `topTokens`, …) and `concurrency` (sum of both peaks)
-  `streamCount`, `ipCount` and `tokenCount` are exact. Each route returns **up to 100 entries** instead of 20
-  ranking and metrics use the same play duration window (`>= 1 s`, `< 90 s`) and the same excluded abuse IP list. An admin request without an organization filter does not merge two organizations with the same key value

### Filters & CSV Export

-  the `countries` body filter takes an alpha-2 code or a country name. A two-letter value is always treated as a code; an unknown code returns **400**
-  the CSV export lists the body filters in its header rows, so a filtered export can be told apart from an unfiltered one
