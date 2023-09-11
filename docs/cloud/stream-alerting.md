---
id: alerting        
title: Alerting Feature
sidebar_label: Alerts
---

## Introduction
The general purpose of stream alerts is providing more transparent insights about the current live stream performances, estimated causes and possible solutions. Alerts offer mutliple capabilities to take immediate action and therefore improve the streaming experience for your audience.

:::info Focus on Ingest 
The current version supports ingest related quality and performance issues of the first mile, meaning from your ingest point via your ISP to our nearest ingest server.   
:::

### Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.

:::tip Good to know
Alerts are effortlessly activated for all organizations by default.
Starting from version `3.7.x.x` onwards, beside the Metrics Dashboard, the nanoStream Cloud Dashboard provides a seamless way to access alerts, ensuring a streamlined experience for your organization.
:::

### Details of the Ingest Stream Analysis

**<u>Important Note:</u>** The used **analysis algorithm** for this alerting feature is based on the stream quality and performance logs of the **previous 15 minutes**.

The analysis for live stream alerts is executed every minute. The considered time ranges for the calculation are:  
- end: `start of current minute`
- start: `end - 15 minutes`

The algorithm makes use of 4 RTMP stats events for each minute. For the maximum of the 15 minute interval up to 60 events are collected in total. These events contain information regarding the stream time ratio, which is used to identify potential ingest stream performance/quality issues in order to classify them and raise corresponding alerts.

At first we separate (re)started ingest stream events and continous events. Every stream is checked regarding the average of all stream time ratio values < 0.9. Meeting the condition of case 1 and/or case 2 in at least **5** stream time ratio values, fires **<u>Performance Alerts</u>**, like:
- Case 1: `stream time ratio < 0.93 && > 0.86` **(Suboptimal Performance)**
- Case 2: `stream time ratio <= 0.86` **(Poor Performance)**

After this the amount of occured restart events is analysed. Meeting the condition of having at least **6 restarts** within the 15 minute range is considered as **<u>Stability Issue</u>** and therefore fires a **Continous Restarts Alert**.

Issues regarding the underlying **<u>Infrastructure</u>** of the corresponding stream are detected by analysing just the passthrough (non-transcoding) streams. Finding multiple references on different server instances fires a **Duplicated Ingest Alert**. Depending on the passthrough ingest location or source, the specific alert varies slightly.

Lastly we fire an **<u>Advice</u>** for non-ABR streams with a higher bitrate than 4 MBit on every RTMP stat event. If you encounter such an advice, please consider using transcoding profiles ([activating ABR](../cloud-frontend/How_to_Use_Transcoding.md)) to insure a better streaming experience for clients located in lower bandwith regions.

## Alert Categories and Severity Levels

Alerts are categorized in multiple **severity levels**, that should help to prioritize them, such as: <span className="badge badge-criticalAlert">Critical</span>, <span className="badge badge-moderateAlert">Moderate</span>, <span className="badge badge-minorAlert">Minor</span> and <span className="badge badge-adviceAlert">Advices</span>. Each alert is part of an specific **alert category** and owns a unique alert code:
- [**General Alerts**](#-21000---21999-) ranging from **21000** to **21999**
- [**Stability Alerts**](#-22000---22999-) ranging from **22000** to **22999**
- [**Performance Alerts**](#-23000---23999-) ranging from **23000** to **23999**
- [**Infrastructure Alerts**](#-24000---24999-) ranging from **24000** to **24999**

## How to use

### Analytics API

Our Analytics API provides 2 different alerting routes ([API Docs](https://metrics-dev.nanocosmos.de/api/doc/v2/#tag/Alerting)).
- via `GET` - route you can check if alerts currently exist for any of your current live streams.
- via `POST` - route you can pass ingest streams that should either be excluded from detection or define ingest streams for which an alert should be triggered if they are detected as offline.

### nanostream Cloud Dashboard

You can view the alerting overview directly on the [nanoStream Cloud Dashboard](https://dashboard.nanostream.cloud/alerts). For a detailed guide and additional insights, please refer to the cloud [dashboard's documentation page](../cloud-frontend-v3/Dashboard_Alerting.md). This resource offers explanations to ensure you make the most out of the features available.

## Steps to solve alerted issues

**1.** Open up the corresponding stream playback within the dashboard and look out for anomalies, like continous buffering, stuttering, visual or connection issues.<br/>
**2.** Execute a hard restart of the ingest connection / encoder source to force application to restart the ingest process.<br/>
**3.** Use the link to the trouble shooting page to investigate the ingest stream, while looking for anomalies within the stream duration, like performance drops or occurred errors.<br/>
**4.** If the alert persists, please use the support link of the corresponding alert below to submit a ticket with the necessary details. 

## Alert Codes

### <span className="badge badge-heading analytics-alertHeading-general"> 21000 - 21999 &nbsp</span>

| Code | Type | Description | Recommended Action |
| ---- | ---- | ----------- | ------------------ |
| 21001 | Offline | The ingest stream is offline, but is expected to ingest. | Restart the stream. |

-----

### <span className="badge badge-heading analytics-alertHeading-stability"> 22000 - 22999 &nbsp</span>

| Code | Type | Description | Recommended Action | 
| ---- | ---- | ----------- | ------------------ |
| 22001 | Continous Restarts | The ingest stream starts and stops continuously. | Restart the stream. |

-----

### <span className="badge badge-heading analytics-alertHeading-performance"> 23000 - 23999 &nbsp</span>

<!--> Unfortunately DocoSaurus does not support table cell merging in plain markdown language. Therefore this table is written in html. <-->

<table>
    <thead>
        <tr>
        <th>Code</th>
        <th>Type</th>
        <th>Description</th>
        <th>Recommended Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>23001</td>
            <td>Suboptimal Performance</td>
            <td>The ingest streaming is not optimal; ultra-low latency reliant apps may be affected..</td>
            <td rowSpan="2">Restart the stream and do a bandwith speedtest afterwards.</td>
        </tr>
        <tr>
            <td>23002</td>
            <td>Poor Performance</td>
            <td>The ingest streaming is malfunctioning.</td>
        </tr>
    </tbody>
</table>

-----

### <span className="badge badge-heading analytics-alertHeading-infrastructure"> 24000 - 24999 &nbsp</span>

<!--> Unfortunately DocoSaurus does not support table cell merging in plain markdown language. Therefore this table is written in html. <-->

<table>
    <thead>
        <tr>
            <th>Code</th>
            <th>Type</th>
            <th>Description</th>
            <th>Recommended Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>24100</td>
            <td>Duplicated Ingests</td>
            <td>Duplicated ingests detected.</td>
            <td rowSpan="4">Stop all the ingests using the same stream name from all machines/encoders/locations and restart only 1 from the intended machine/encoder/location. Review ingest workflow.</td>
        </tr>
        <tr>
            <td>24101</td>
            <td>Multiple Infrastructures</td>
            <td>Duplicated ingests found on varying infrastructures.</td>
        </tr>
        <tr>
            <td>24102</td>
            <td>Multiple Locations</td>
            <td>Duplicated ingests found across different locations.</td>
        </tr>
        <tr>
            <td>24103</td>
            <td>Multiple IPs</td>
            <td>Duplicated ingests have different IP addresses.</td>
        </tr>
    </tbody>
</table>

## Advices

Advices can be seen as low priority alerts and shall inform you about possible improvements of the stream configuration.

| Code | Description | Recommended Action |
| ---- | ----------- | ------------------ |
| 29001 | The ingest stream has a high bitrate. Viewers with poor connection might not be able to playback the stream smoothly. | Consider to use adaptive bitrate streams with different transcoding profiles. |
