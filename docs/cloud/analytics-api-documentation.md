---
slug: /analytics/api-docs
id: analytics-api-docs
title: Analytics API Docs
sidebar_label: Documentation
---

## Technical Developer Documentation

For API route specifications please refer to our <a className="badge-inText" href="https://metrics.nanocosmos.de/api/doc/v2/">technical API documentation. ⚙️</a>

## General Details

### Rate Limit

This API limits the number of requests to **1 request per second** but allows a temporary **burst rate of up to 30 requests per second** to be processed immediately without delay. If the rate limit is exceeded, you will receive a 502 (Bad Gateway) or 504 (Gateway Timeout) HTTP error code from Nginx.

## API Categories

### Usage Metrics

These routes provide a detailed overview of your organisation's traffic volume in a specified time frame.

### H5Live Metrics
 
H5Live metrics routes offer a wide spectrum of information about everything connected to the H5Live player. 

### Webcaster Metrics

To get more information about the [nanoStream Webcaster](https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_introduction) usage in practice and it's benefits regarding additional meta data for ingest metrics, consider taking a look at these routes.

### Viewer Metrics

Viewer metrics let you analyze the experience of your audiences.

### Monitoring

Being able to monitor your live streams is a great idea to observe live performances and be always up-to-date about your streaming .

### Alerting

The alerting routes provide an overview of either your current and historical alerts, recommended actions and their potential causes. For more details about Alerting, please refer to our [Stream Health Monitoring Guide](https://docs.nanocosmos.de/docs/analytics/monitoring).

### Successful Playback Start Ratio

This ratio determines the relation between all occuring playback initializations that **DO NOT** terminate with an error **within the first 30 seconds** after the playback starts and the total number of playback initializations. Terminations after pausing or subsequently restarting the playback are not taken into account.

<div className="inline-math-center">SPSR = (100 - failed playback starts) * 100 / all playbacks</div>
<br/>
<br/>

:::info
- **SPSR** = "Successful Playback Start Ratio"
- **PSE** = "Playback Start Error"
:::

#### How To Use



#### General Details

The services of nanoStream Analytics determine the **SPSR** and **PSE** based on the player metrics data for every minute with a **5 minute delay** to the current minute.
Either the calculated **ratios and errors** are based on your **organisation**, **stream**, **tag** or **country** of choice and offer different **breakdown terms**:

- Stream & Country (depends on the route)
- Browser
- Browser Version
- Referrer
- OS
- OS Version
- Player Version
- City
- IP
- Initial ABR Profile
- Media Playback API
- Fast Start

#### API Details

Basically the API routes are divided in 2 groups: 
- [SPSR API Routes](https://metrics.nanocosmos.de/api/doc/v2/#tag/Playback-start-success)
- [PSE API Routes](https://metrics.nanocosmos.de/api/doc/v2/#tag/Playback-start-errors)

**SPSR** returns 3 metric values:
- Total count of errors
- Total count of playback starts
- Proportion in percent of playback starts to sum of playback starts from all buckets

**PSE** returns a break down of:
- The found error codes & error messages (usually error code and message is 1:1 linked) occurred at playback start (refers to total count of errors of the SPSR metric)


#### Example Use Case

<u>Problem</u>:

A high number of errors can be observed since yesterday morning.<br/>
The assumption is made that this was caused by the h5live player version upgrade.<br/>
Problem is particularly present in brazil and needs validation whether this affects a large number of clients.<br/>
The **SPSR** & **PSE** API routes can possibly reveal more insights about this incident.

<u>How to investigate</u>:

1. Get an overview of the SPSR with a timeseries with selected time interval 'hour':<br/>
`/api/v2/playback/start/success/ratio/timeseries?from=2024-04-09T00%3A00&to=2024-04-11T00%3A00&interval=hour` 
2. The response shows a **slight SPSR drop** for 2 consecutive hours
3. Take this time range and check if a certain country is responsible for the drop:<br/> 
`/api/v2/playback/start/success/ratio/world?from=2024-04-10T19%3A00&to=2024-04-10T21%3A00`
4. Found some countries with quite **low SPSR** but for the most, the playback start count / proportion is not quite high, compared to the playback start count of all countries, so they affect the **average SPSR** not significantly
5. To get a better view of the data repeat the request with the added URL parameter `&format=csv`
6. The generated .csv file can be used in Excel to obtain a compact table which offers the option of quick sorting of the countries (for example for playback starts)
7. In this case Brazil shows an **inconspicuous SPSR**, means the customer **assertion can't be confirmed**, maybe they refer rather to errors after the 30 seconds after playback start, which is not considered in the SPSR metrics
8. To get an idea why the SPSR is low for the selected time range, breakdown the data for a country with both qualities low SPSR and a fairly high count of playback starts / proportion: as an example Armenia would fulfill both criteria
9. Get the IP breakdown of the error codes for Armenia:<br/>
`/api/v2/playback/start/errors/countries/ip?from=2024-04-10T19%3A00&to=2024-04-10T21%3A00&countries=AM`
10. The response exhibits that almost all errors were generated by one IP, which means it is **not a general problem**

### Filtering

The filtering section lets you discover your available filter options to refine your requests, so you can get the information that is needed.
