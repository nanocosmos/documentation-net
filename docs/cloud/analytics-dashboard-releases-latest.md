---
slug: /analytics/dasgboard-releases/latest
id: analytics-dashboard-releases-latest
title: Latest Dashboard Release
sidebar_label: Latest
---

# Latest Analytics Dashboard Release Notes

## 2.27 - Alerting Adjustments & Authentication Improvement

- Adjustments to Troubleshooting/Alerting Section:
    - fixed an issue when switching between a Stream Time Ratio - alert and a Continuous Restart - alert and no data was shown in the charts   
    - general ingest stream information in the alert table now supports multiple ingest connection details to provide more insights of stream behavior 
    - new details "country name" and "connection ID" are available for alerts
    - new performance intervals were added to the graph for "Stream Time Ratio" alerts, supporting issues with ratios constantly above 1
    - improved "Stream Time Ratio" graph annotations, which now indicate whether the alert ended due to stream termination or stream recovery

- Improvements regarding Login process:
    - users do not need to re-authenticate via login credentials each time the Analytics Dashboard tab is closed anymore
    - (e.g.: opening the Analytics Dashboard within a new tab while authentication took place recently, no extra manual login is required) 