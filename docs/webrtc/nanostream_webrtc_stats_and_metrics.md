---
id: nanostream_webrtc_stats_and_metrics
title: Stats and Metrics
sidebar_label: Stats and Metrics
---

The Webcaster API offers two Quality of Service reporting mechanisms for monitoring the performance of your webcasts:

- [Client-side emitted metrics](#client-side-emitted-metrics)
- [Sending Metrics to Our Backend](#sending-metrics-to-our-backend)

### Client-side emitted metrics

You can receive client-side metrics on an interval,
Note: Metrics indicating an error would be output regardless of the interval.
For a comprehensive list of metrics, please refer to the [Webcaster API docs](./nanostream_webrtc_api.md).

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  streamName: '<STREAM-NAME-1>'
});

webcaster.onMetrics = (metrics) => {
    console.log(metrics);

    // Check if the metric contains error information
    if (metrics.errorMessage) {
        console.log(metrics.errorMessage, metrics.errorCode);
    }
};

await webcaster.setup();

// Will also start emitting metrics at an interval
await webcaster.startBroadcast();
```

### Ingest Quality Indicators

Detecting and addressing poor network conditions is crucial for ensuring a good end-to-end user experience. Specific statistics indicate the current upstream quality:

There are specific stats that indicate the current upstream quality:

- **RTT (Round Trip Time)** - The current time in milliseconds that data takes from the client to the webcaster server and back.
- **Packet loss** - The percentage of packets lost during the past 10 seconds.
- **Send Delay** (Chromium-based browsers only) - The delay before video frames are sent to the server.

These statistics enable you to display  **traffic lights** to your webcasters, indicating the current ingest quality and network conditions from your customers' browsers to our webcast servers.

### Traffic Light Recommendations

We have gathered recommendations for indicating poor streaming conditions to end users based on our analysis:

#### Round Trip Time

- An RTT of 150 milliseconds or less is considered acceptable and may result in a good playback experience.
- Above 150 and below 250 milliseconds, viewer experience may degrade slightly.
- Above 250 milliseconds, users should check their network for improvements.

#### Packet Loss

- Packet loss of less than 5% generally results in a good playback experience.
- Packet loss exceeding 10%, especially for streams with higher bitrates (2Mb and above), can degrade viewer experience.
- Beyond 10% packet loss, streams can become chunky, and users should take action.

#### Sample of a simple traffic light implementation:

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
  streamName: '<STREAM-NAME-1>'
});

webcaster.onMetrics = (metrics) => {
    console.log(metrics);

    const rtcstats = metrics.rtcstats;
    const connectionRtt = rtcstats.connection.rtt.value;
    const packetLoss = rtcstats.connection.packetLoss.value;

    if (!connectionRtt || !packetLoss) {
        return // values can be undefined
    };

    // thresholds
    let quality = 'good';
    const packetLossLowerBound = 5;
    const packetLossUpperBound = 10;
    const rttLowerBound = 150;
    const rttUpperBound = 250;

    if (packetLoss < packetLossLowerBound && connectionRtt < rttLowerBound) {
        quality = 'good';
    }

    if ((packetLoss > packetLossLowerBound && packetLoss < packetLossUpperBound)
        || (connectionRtt > rttLowerBound && connectionRtt < rttUpperBound)) {
        quality = 'medium';
    }

    if (packetLoss > packetLossUpperBound || connectionRtt > rttUpperBound) {
        quality = 'bad';
    }

    console.log('roundTripTime: ', connectionRtt);
    console.log('packetLoss: ', packetLoss);
    console.log('quality: ', quality);
};

await webcaster.setup()

await webcaster.startBroadcast()
```

## Sending Metrics to Our Backend

Sending metrics to our backend is useful for analyzing webcast ingest quality and tracking client-side issues. It also provides valuable information in the Analytics Dashboard. Refer to the [nanoStream Cloud](../cloud/analytics#webcaster) for details on enabling client metrics for your organization.

### Metrics Configuration

To configure sending metrics from clients, set your accountId and accountKey in the constructor's config object.

```js
const webcaster = new window.WebcasterApiV6.Webcaster({
    streamName: '<STREAM-NAME-1>',
    metrics: {
        accountId: 'myAccountId',
        accountKey: 'myAccountKey'
    }
});

await webcaster.setup()
await webcaster.startBroadcast()
```