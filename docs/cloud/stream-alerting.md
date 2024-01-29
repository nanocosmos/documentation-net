---
id: alerting        
title: Alerts and Advices
sidebar_label: Alerts and Advices
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
Starting from version `3.7.1.0` onwards, beside the Analytics Dashboard, the nanoStream Cloud Dashboard provides a seamless way to access alerts, ensuring a streamlined experience for your organization.
:::

### How to use

#### Analytics API

Our Analytics API provides 2 different alerting routes:

> [Click here](https://metrics-dev.nanocosmos.de/api/doc/v2/#tag/Alerting) to dive into the alerting routes and visit our nanoStream Analytics API developer documentation.

- **[`GET` Ingest stream alerts/advices](https://metrics-dev.nanocosmos.de/api/doc/v2/#tag/Alerting/paths/~1api~1v2~1alerting~1ingest/get)**: Returns all detected alerts and advices for all live ingest streams in the last 15 minutes.
- **[`POST` Custom ingest stream alerts/advices](https://metrics-dev.nanocosmos.de/api/doc/v2/#tag/Alerting/paths/~1api~1v2~1alerting~1ingest~1custom/post)**: Returns all detected alerts and advices for all live ingest streams in the last 15 minutes. Additionally, through this API route, it is possible to pass ingest streams that should either be excluded from detection or define ingest streams for which an alert should be triggered if they are detected as offline.

#### nanostream Cloud Dashboard

> You can view **Alerts and Advices** of your organization directly on the [nanoStream Cloud Dashboard](https://dashboard.nanostream.cloud/alerts).

:::info Analytics Enhancement from Version `3.7.1.0`
With the release of version `3.7.1.0`, the [nanoStream Cloud Dashboard](https://dashboard.nanostream.cloud/) has enhanced its user interface in addition to the [Analytics Dashboard](https://metrics.nanocosmos.de). <br/>
For a detailed guide and additional insights in regards of the **Alerts and Advices** feature, please refer to the cloud [dashboard's documentation page](../cloud-frontend-v3/Dashboard_Alerting). This resource offers explanations to ensure you make the most out of the features available.
:::


![Screenshot: Alerts and Advices](../assets/cloud-frontend/cf-critical-alerts.png)
*Screenshot: Alerts and Advices*

<!-- <article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="https://dashboard.nanostream.cloud/alerts">
                <h2 class="text--truncate cardTitle_dwRT" title="Playground">Dashboard</h2>
                <p class="text--truncate cardDescription_mCBT">
                  The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities.
                </p>
            </a></article>
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="../cloud-frontend-v3/Dashboard_Alerting">
                <h2 class="text--truncate cardTitle_dwRT" title="TypeScript Support">Dashboard Docs</h2>
                <p class="text--truncate cardDescription_mCBT">
                    The dashboard docs offer explanations to ensure you make the most out of the features available.
                </p>
            </a></article>
    </section>
</article> -->

## Severity Levels

Alerts are categorized in multiple **severity levels**, that should help to prioritize them:

| Severity | Priority | Estimated Impact |
|----------|----------|------------------|
| <span className="badge badge-criticalAlert">Critical</span>   | highest   | These stream alerts have the highest priority and might also have to biggest impact on the streaming experience in a fundamental way. You should engage these issues first.|
| <span className="badge badge-moderateAlert">Moderate</span>   | high      | Such notifications can be considered as urgent. If there are no other critical alerts, try solving these next. |
| <span className="badge badge-minorAlert">Minor</span>         | low       | The corresponding issue might partially affecting the stream quality. |
| <span className="badge badge-adviceAlert">Advices</span>      | info      | This can be seen as a general info about unused streaming potential. Please consider reading the advice message or refer to the [advice codes in the table below.](#advices)|

Lastly we fire an **<u>Advice</u>** for non-ABR streams with a higher bitrate than 4 MBit on every RTMP stat event. If you encounter such an advice, please consider using transcoding profiles ([Activating ABR](../cloud-frontend-v3/Dashboard_ABR_Transcoding)) to insure a better streaming experience for clients located in lower bandwith regions.

## Alert Definitions

:::caution time range of relevant data
The used **analysis algorithm** for this alerting feature is based on the stream quality and performance logs of the **previous 15 minutes**.
The analysis for live stream alerts is executed every minute. The considered time ranges for the calculation are:  
- end of time range: `start of current minute`
- start of time range: `end - 15 minutes`
:::

To fire up alerts we make use of 4 RTMP stats events for each minute. 60 events are collected in total for the given maximum range of 15 minutes. These events contain information regarding the **stream time ratio**, which is used to identify potential ingest stream performance/quality issues in order to classify them and raise corresponding alerts. This specific stat can be examined in detail using the [troubleshooting](./troubleshooting.mdx#stream-time-ratio) feature on the [Analytics Dashboard](https://metrics.nanocosmos.de/troubleshooting).

Each alert is part of an specific **alert category** and owns a unique alert code.

### General Alerts

General alerts include basic issues related to unexpected ingest behavior.

- [**General** alert codes](#21000---21999) are ranging from **21000** to **21999**

### Stability Alerts

Stream issues that may appear as a consequence of irregular communication problems with the nanoStream Cloud can be identified through stability alerts. Therefore the stream restart attempts are getting analysed. Meeting the condition of having at least **6 restarts** within the 15 minute range fires a **Continous Restarts Alert**.

- [**Stability** alert codes](#22000---22999) are ranging from **22000** to **22999**

### Performance Alerts

Either bandwidth issues or insufficient encoder/computing performances of the ingest source can be observed by fired performance alerts. 

- [**Performance** alert codes](#23000---23999) are ranging from **23000** to **23999**

#### Stream Time Ratio
<details>
    <summary>Classification by Stream Time Ratio (STR) Metric</summary>
    <div>
        <div>
            <div className="add-margin-bottom">
                <span>
                    Pre-filtering:
                    <br></br>
                    If the average of all <a href="./troubleshooting#stream-time-ratio">stream time ratio (STR)</a> values is <a className="inline-math text-normal">&le; 0.9</a>, the stream has potential performance issues. Further classifications follow by matching the given conditions in one of these cases below for at least 5 stream time ratio values. If one case is true, a performance alert is created for this particular stream.
                </span>
            </div>
            <details>
                <summary>
                    Suboptimal Performance &nbsp; (<a href="./troubleshooting#stream-time-ratio">Troubleshooting Example</a>)
                </summary>
                <div className="inline-math">
                    0.93 &ge; (5 STR values) > 0.86
                </div>
            </details>
            <details>
                <summary>
                    Poor Performance &nbsp; (<a href="./troubleshooting#stream-time-ratio">Troubleshooting Example</a>)
                </summary>
                <div className="inline-math">
                    0.86 &ge; (5 STR values)
                </div>
            </details>
        </div>
    </div>
</details>

### Infrastructure Alerts

Infrastructure alerts represent issues that may be invisble from the outside of our infrastructure and even if there are no direct impairments stream performance/quality wise, these issues can lead to critical problems. Alerts of this category serve especially as early notification system, so taking action is immediately possible. Occuring problems with the underlying **<u>Infrastructure</u>** of the corresponding stream are detected by analysing just the passthrough (non-transcoding) streams. Finding multiple references on different server instances fires a **Duplicated Ingest Alert**. Depending on the passthrough ingest location or source, the specific alert varies slightly.

- [**Infrastructure** alert codes](#24000---24999) are ranging from **24000** to **24999**

## Steps to solve alerted issues

:::tip Guideline to handle alerts
These guidelines can be used to get an idea about **what** the problem is, **why** it is appearing and **how** to encounter any kind of alert code in general.
:::

**1.** Open up the corresponding stream playback within the dashboard and look out for anomalies, like continous buffering, stuttering, visual interferences or connection issues.<br/><br/>
**2.** Execute a hard restart of the ingest connection / encoder source to force application to restart the ingest process.<br/><br/>
**3.** Use the direct link to the [Troubleshooting Page](https://metrics.nanocosmos.de/troubleshooting) right below the alert to investigate the ingest stream, while looking for anomalies within the stream duration, like performance drops or occurred errors. Using the provided direct link of the alert is automatically filling the necessary data and you can begin to troubleshoot right away. If you do not know what to look for, please consider taking a look at [these examples](./troubleshooting.mdx#stream-time-ratio).<br/><br/>
**4.** If the alert persists, please use the support link of the corresponding alert below to submit a ticket with the necessary details. 

## Alert Codes

### [21000 - 21999]<span className="analytics-alertHeading-general" />

| Code | Type | Description | Recommended Action |
| ---- | ---- | ----------- | ------------------ |
| 21001 | Offline | The ingest stream is offline, but is expected to ingest. | Restart the stream. |

-----

### [22000 - 22999]<span className="analytics-alertHeading-stability" />

| Code | Type | Description | Recommended Action | 
| ---- | ---- | ----------- | ------------------ |
| 22001 | Continous Restarts | The ingest stream starts and stops continuously. | Restart the stream. |

-----

### [23000 - 23999]<span className="analytics-alertHeading-performance" />

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

### [24000 - 24999]<span className="analytics-alertHeading-infrastructure" />

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

## Advice Codes

Advices can be seen as low priority alerts and shall inform you about possible improvements of the stream configuration.

| Code | Description | Recommended Action |
| ---- | ----------- | ------------------ |
| 29001 | The ingest stream has a high bitrate. Viewers with poor connection might not be able to playback the stream smoothly. | Consider to use adaptive bitrate streams with different transcoding profiles. |
