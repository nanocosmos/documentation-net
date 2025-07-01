---
id: cloud_getting_started
title: Getting started
sidebar_label: Getting started
---

## Using bintu

**bintu** is the API for **nanoStream Cloud**. You can use it via the nanoStream Cloud Dashboard or the API.

:::info Before starting
To get started with the **nanoStream Dashboard**, sign in with your existing *nanoStream account*.  
If you don’t have an account yet, you can [sign up](https://dashboard.nanostream.cloud/signup), or get in touch with our sales team via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by email at sales(at)nanocosmos.net.

*Need help accessing an existing organization or unsure how to proceed?* <br/>
👉  Check the [Authentication section](../dashboard/getting_started#authentication) for step-by-step guidance on creating an account, logging in, and requesting access from your system administrator.
:::

<article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="https://dashboard.nanostream.cloud/">
                <h2 class="text--truncate cardTitle_dwRT" title="Installation">Dashboard</h2>
                <p class="text--truncate cardDescription_mCBT">
                    The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities.
                </p>
            </a></article>
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx"href="https://doc.pages.nanocosmos.de/bintuapi-docs/">
                <h2 class="text--truncate cardTitle_dwRT" title="Configuration">Bintu API</h2>
                <p class="text--truncate cardDescription_mCBT">
                    bintu.live is a stream management platform used by nanoStream for end to end live streaming services. bintu live can be used to create, manage, group and tag live streams.
                </p>
            </a></article>
    </section>
</article>

### What you need

To create and broadcast a live stream, you need a live source.
This can be either a webcam, external camera, streaming device, or even your PC screen.
To send a live stream to nanoStream Cloud, you need a streaming software or hardware,
or just your browser which directly can be used to send a live stream to your audience.

See our introduction videos and tutorials for step-by-step instructions!

- [Videos](https://www.nanocosmos.de/blog/videos)
- [Getting started with the OBS Software](https://www.nanocosmos.de/blog/2020/01/how-to-use-obs-as-a-live-encoder-for-your-nanostream/)
- [Getting started with nanoStream Webcaster from the browser](https://www.nanocosmos.de/blog/2019/09/how-to-create-a-livestream-with-our-nanostream-webrtc-application-demo-version/)

### Create a nanoStream account (bintu)

:::tip Signing Up to nanoStream
👉 Visit the [Getting started section](../dashboard/getting_started#authentication) of the nanoStream dashboard to get guidance on [creating an account](..//dashboard/getting_started#sign-up), [logging in](../dashboard/getting_started#sign-in), and [requesting access from your system administrator](../dashboard/getting_started#invite).
:::

### Create a new live stream

<article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="../dashboard/start_streaming">
                <h2>Create a new stream</h2>
                <p>Learn how to set up and start your live stream with nanoStream.</p>
            </a>
        </article>
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="../dashboard/stream_overview">
                <h2>Stream Overview</h2>
                <p>Understand how to read stream data.</p>
            </a>
        </article>
    </section>
</article>

## Start a live stream broadcast

Once you created a stream via the dashboard, you will see stream instructions to start your stream. 

:::tip Understanding the Instructions
Learn more in the dashboard docs about the [Instructions page](../dashboard/start_streaming#start-streaming).
:::


To start a live stream broadcast, you need a live encoder software, either based on an `RTMP Live Encoder application`, or the browser-based [nanoStream Webcaster broadcaster](../webrtc/nanostream_webrtc_getting_started).

You can use 3rd part software like [OBS (Open Broadcaster)](https://obsproject.com/) or professional Live Encoders like [Elemental Live](https://www.elemental.com/products/aws-elemental-live).

:::info please note
The primary ingest protocol is RTMP.
:::

### Live Encoder Usage

Copy/paste the ingest URL to use it with your live encoder software.

If you are not sure, where you can find these informations, see the [Stream Overview](../dashboard/stream_overview) to learn more about the stream overview of the nanoStream Cloud/bintu Dashboard.

:::tip Example
rtmp://bintu-stream.nanocosmos.de/live/XXXXX-YYYYY
:::

For some live encoder software, you might need to separate the stream url and stream name, e.g.

- **RTMP URL**: `rtmp://bintu-stream.nanocosmos.de/live`
- ***Stream Name***: `XXXXX-YYYYY`

:::tip good to know
Some applications like `OBS` use the name `Stream Key` instead `Stream Name`
:::


### Configuring the camera and live encoder

Codecs: 
- `H264 video`,
- `AAC audio`

Video resolution: flexible, e.g. `640×480`, `1280×720`, `1920×1080`

Video bitrate: flexible, e.g. `500 kbits/s`, `1 MBit/s`

### Running the stream

After entering the `RTMP ingest URL` and `stream name` into your live encoder software, you can instantly start the broadcast to nanoStream Cloud / bintu.live.


### Play your live stream

Play the stream directly in your browser or by inserting the Playout URL into a player application. By using the `Web Playout URL`, you will automatically be directed to a web player page based on our unique `nanoStream H5Live` low-latency playback technology.

:::note 
The player URL is different from the Ingest URL! This is to adjust to world regional locations of our worldwide CDN with ingest and playback servers.
:::

The H5Live player is running on a sample page which also shows an embed code to copy to your own web page.

If you want to learn more about the usage of the nanoPlayer, [click here](../nanoplayer/nanoplayer_introduction) to dive into our developer documentation.


## Additional features

### Metrics

nanoStream Cloud and the unique nanoStream H5Live Player have been designed as an easy to use ultra-low-latency and light-weight live streaming platform. nanoStream Analytics follows the same philosophy. Easy to use, lightweight and focused on delivering our partners the information that makes their business more successful.

nanoStream Cloud Analytics offers a great way to monitor and analyze the performance and quality of service of your live streams. 

:::info Getting started
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

### API Access

:::tip Your API key
You can find your bintu API key on the [organisation overview page](https://dashboard.nanostream.cloud/organisation).
:::

### Secure Streaming

Secure streaming can be done on the ingest side based on rtmps or WebRTC.

For encrypted ingest with rtmps, you can use port 1937 instead 1935.

#### Example: 

**Standard non-encrypted ingest (RTMP)**: rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM
**Encrypted ingest (RTMPS)**: rtmps://bintu-stream.nanocosmos.de:1937/live/STREAM

For secure playback with the nanoStream H5Live Player you need to have your account enabled for playback security. See the h5live secure playback documentation.

[Learn more about Secure Playback & Secure Token](../dashboard/secure_playback).

## More information

- [nanoStream Cloud/Bintu Dashboard](https://dashboard.nanostream.cloud/)
- [bintu.live API documentation](https://doc.pages.nanocosmos.de/bintuapi-docs)
- [nanoStream software demos and downloads](http://www.nanocosmos.de/demo)
