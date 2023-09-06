---
id: alerting        
title: Alerting Feature
sidebar_label: Alerts
---

## Introduction
The general purpose of stream alerts is providing more transparent insights about the current live stream performances, estimated causes and possible solutions. Alerts offer mutliple capabilities to take immediate action and therefore improve the streaming experience for your audience.

:::info Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::


:::tip Good to know
Alerts are effortlessly activated for all organizations by default.
Starting from version `3.x.x.x` onwards, beside the Metrics Dashboard, the nanoStream Cloud Dashboard provides a seamless way to access alerts, ensuring a streamlined experience for your organization.
These notifications are conveniently accessible in either of these two locations: <br/>
- [Metrics Dashboard](https://metrics.nanocosmos.de/)
- [nanoStream Cloud Dashboard](https://dashboard.nanostream.cloud/alerts)
:::

## General

There are four primary alert groupings:

- **General Alerts** `21000 - 21999`
- **Stability Alerts** `22000 - 22999`
- **Performance Alerts** `23000 - 23999`
- **Infrastructure Alerts** `24000 - 24999`

Alerts also have various severity levels, categorized as:

- Critical
- Moderate
- Minor
- Advices

## How to use 

## Steps to solve this

1. Do this
2. Do that
3. Go to trouble shooting
4. Create ticket with info x,y,z

## Alert Codes

### `21000 - 21999` General Alerts

| Code | Type | Description |
| ---- | ---- | ----------- |
| 21001         | Offline                   | The ingest stream is offline, but is expected to ingest. |

### `22000 - 22999` Stability Alerts

| Code | Type | Description |
| ---- | ---- | ----------- |
| 22001         | Continous Restarts        | The ingest stream starts and stops continuously. |

### `23000 - 23999` Performance Alerts

| Code | Type | Description |
| ---- | ---- | ----------- |
| 23001         | Suboptimal Performance    | The ingest streaming is not optimal; ultra-low latency reliant apps may be affected. |
| 23002         | Poor Performance          | The ingest streaming is malfunctioning; please restart the stream. |

### `24000 - 24999` Infrastructure Alerts

| Code | Type | Description |
| ---- | ---- | ----------- |
| 24100         | Duplicated Ingests        | Duplicated ingests detected. |
| 24101         | Multiple Infrastructures  | Duplicated ingests found on varying infrastructures. |
| 24102         | Multiple Locations        | Duplicated ingests found across different locations. |
| 24103         | Multiple IPs              | Duplicated ingests have different IP addresses. |

## Advices

Advices can be seen as low priority alerts and shall inform you about better stream configurations.

| Code | Description |
| ---- | ----------- |
| 01001 | The ingest stream has a high bitrate. Viewers with poor connection might can not playback the stream smoothly. Consider to use adaptive bitrate streams. |