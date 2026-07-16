---
slug: /analytics/api-releases/latest
id: analytics-api-releases-latest
title: Latest API Releases
sidebar_label: Latest
---

# Changelog

## 2.35.0 - Faster usage queries

### World Map

-  fixed an issue where a country with no traffic (e.g. US) could appear as a zero-value row in the Playout + Ingest view's Top 10 table; entries with a total of 0 are now filtered out at the API level

### Usage History

-  the usage history timeseries no longer returns periods that are not yet fully aggregated, so an incomplete most-recent month is no longer reported as if it were a complete one

### Usage & World Map Performance

-  usage and world map byte-usage queries are now served from pre-aggregated hourly data wherever it is safely available, reducing query latency for wide time ranges (no change to the available time range or to result values)

