---
id: alerting        
title: Alerting Feature
sidebar_label: Alerting
---

## Introduction
The general purpose of stream alerts is providing more transparent insights about the current live stream performances, estimated causes and possible solutions. Alerts offer mutliple capabilities to take immediate action and therefore improve the streaming experience for your audience.

## Getting started
Stream alerting is activated by default and does not need any action from your side. To be sure if this feature is already available to you, check your nanostream Cloud dashboard's version number. This feature is enabled for dashboard version `3.X.X.X` or higher. To access this feature just visit the alert tab within the dashboard, where the alerts of your current running live streams will be shown (in case the performance of your live streams is generating alerts on different occassions).

## Alert Codes
In the table below you can find all stream alert codes.

| Code | Type | Description |
| ---- | ---- | ----------- |
| **21000 - 21999** | **General Alerts**            | |
| 21001         | Offline                   | The ingest stream is offline, but is expected to ingest. |
| **22000 - 22999** | **Stability Alerts**          | |
| 22001         | Continous Restarts        |  The ingest stream starts and stops countinously. |
| **23000 - 23999** | **Performance Alerts**        | |
| 23001         | Suboptimal Performance    | The ingest streaming does not work optimally, applications that rely on ultra low latency may be affected. |
| 23002         | Poor Performance          | The ingest streaming does not work properly, please restart the stream. |
| **24000 - 24999** | **Infrastructure Alerts**     | |
| 24100         | Duplicated Ingests        | Duplicated ingests have been found. |
| 24101         | Multiple Infrastractures  | Duplicated ingests have been found on a different infrastructure. |
| 24102         | Multiple Locations        | Duplicated ingests have been found at different locations. |
| 24103         | Multiple IPs              | Duplicated ingests have been found with different IPs. |

## Advices

Advices can be seen as low priority alerts and shall inform you about better stream configurations.

| Code | Description |
| ---- | ----------- |
| 01001 | The ingest stream has a high bitrate. Viewers with poor connection might can not playback the stream smoothly. Consider to use adaptive bitrate streams. |