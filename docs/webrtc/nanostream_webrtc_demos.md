---
id: nanostream_webrtc_demos
title: Browser demos
sidebar_label: Browser Demos
---

## Webcaster Demos Overview

Below you can find links to our Webcaster demo applications.
These samples are designed to showcase the broad capabilities of our Webcaster technology, providing you with practical experience and insight into its features. Explore our sample code to see how nanoStream Webcaster can enhance your webcasting projects.

To fully utilize these samples, please ensure you have a bintu account.<br/> [Create a stream in the nanoStream Cloud Dashboard](../cloud-frontend-v3/Dashboard_Start_Streaming), then create a stream and append the stream name to the sample pages' URLs using the `streamName` URL parameter.

**Please Note Before starting:**

:::info[Bintu Account]
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
    If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales@nanocosmos.de.
:::

:::info[Live Transcoding]
Currently, the nanoStream Webcaster does not support [live transcoding](../cloud-frontend-v3/Dashboard_ABR_Transcoding).
:::


<article class="margin-top--lg">
    <section class="row list_ZO3j">
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="./nanostream_webrtc_demos#webcaster-samples">
                <h2 class="text--truncate cardTitle_dwRT" title="Installation">Webcaster Samples</h2>
                <p class="text--truncate cardDescription_mCBT">
                    Find browser demos and examples how to implement the webcaster on your webpage.
                </p>
            </a></article>
        <article class="col col--6 margin-bottom--lg">
            <a class="card padding--lg cardContainer_Uewx" href="../cloud-frontend-v3/Dashboard_Start_Streaming#option-1-use-the-nanostream-webcaster">
                <h2 class="text--truncate cardTitle_dwRT" title="Configuration">Dashboard Integration</h2>
                <p class="text--truncate cardDescription_mCBT">
                    Use the Webcaster directly in the Cloud Dashboard.
                </p>
            </a></article>
    </section>
</article>

## Webcaster Samples

Append your stream name to one of the following samples:

- Main Sample: https://nanocosmos.github.io/webcaster/samples/index.html?streamName=[stream-name]
- Minimal Sample: https://nanocosmos.github.io/webcaster/samples/minimal/index.html?streamName=[stream-name]
- Screen Share: https://nanocosmos.github.io/webcaster/samples/screenshare/index.html?streamName=[stream-name]

### Usage

The `main sample` showcases the lifecyle of the Webcaster, you can perform the following actions there:

- append your bintu stream name to one of the URLs
- configure stream properties in the editor `WebcasterApiV6.Config`
- click `Create New Instance` to create a new Webcaster instance with your configuration
- click `startPreview` to preview the MediaStream that will be streamed to our CDN 
- click `startBroadcast` to start the ingest
- click `stopBroadcast` to stop the ingest
- click `recover` to restart the webcast with the same configuration
- click `dispose` to destroy the Webcaster instance
- click `setMuted` to mute the ingest

### Configuration

All samples can be configured by the following URL query parameters:

- streamName
- ingestUrl
- serverUrl
- maxAudioBitrateBps
- transcodeAudioBitrateBps
- maxVideoBitrateBps
- maxEncodingFramerate

:::info[Config Interface]
For explanation of the configuration options, please see the definition of the [Config interface](https://nanocosmos.github.io/webcaster/docs/interfaces/config_types.Config.html).
:::

#### Main Sample

The *main sample* can be pre-configured through the `webcasterconfig` URL query parameter.<br/>
Please see this example link:

   [https://nanocosmos.github.io/webcaster/samples/index.html?webcasterconfig=eyJpbnB1dENmZyI6eyJtZWRpYVN0cmVhbUNmZyI6eyJtYXhGcmFtZXJhdGUiOjMwLCJyZXNvbHV0aW9uIjpbNjQwLDQ4MF0sImF1ZGlvQ29uc3RyYWludHMiOnsiYXV0b0dhaW5Db250cm9sIjp0cnVlLCJjaGFubmVsQ291bnQiOjIsImVjaG9DYW5jZWxsYXRpb24iOnRydWUsIm5vaXNlU3VwcHJlc3Npb24iOnRydWV9fSwiYnJvYWRjYXN0Q2ZnIjp7InRyYW5zY29kZUF1ZGlvQml0cmF0ZUJwcyI6MTI4MDAwLCJtYXhBdWRpb0JpdHJhdGVCcHMiOjEyODAwMCwibWF4VmlkZW9CaXRyYXRlQnBzIjo1MDAwMDAsIm1heEVuY29kaW5nRnJhbWVyYXRlIjozMH19LCJwcmV2aWV3VmlkZW9FbElkIjoicHJldmlldyIsInN0cmVhbU5hbWUiOiJbU1RSRUFNLU5BTUVdIiwic2VydmVyVXJsIjoiaHR0cHM6Ly9iaW50dS13ZWJydGMubmFub2Nvc21vcy5kZS9wL3dlYnJ0YyJ9](https://nanocosmos.github.io/webcaster/samples/index.html?webcasterconfig=eyJpbnB1dENmZyI6eyJtZWRpYVN0cmVhbUNmZyI6eyJtYXhGcmFtZXJhdGUiOjMwLCJyZXNvbHV0aW9uIjpbNjQwLDQ4MF0sImF1ZGlvQ29uc3RyYWludHMiOnsiYXV0b0dhaW5Db250cm9sIjp0cnVlLCJjaGFubmVsQ291bnQiOjIsImVjaG9DYW5jZWxsYXRpb24iOnRydWUsIm5vaXNlU3VwcHJlc3Npb24iOnRydWV9fSwiYnJvYWRjYXN0Q2ZnIjp7InRyYW5zY29kZUF1ZGlvQml0cmF0ZUJwcyI6MTI4MDAwLCJtYXhBdWRpb0JpdHJhdGVCcHMiOjEyODAwMCwibWF4VmlkZW9CaXRyYXRlQnBzIjo1MDAwMDAsIm1heEVuY29kaW5nRnJhbWVyYXRlIjozMH19LCJwcmV2aWV3VmlkZW9FbElkIjoicHJldmlldyIsInN0cmVhbU5hbWUiOiJbU1RSRUFNLU5BTUVdIiwic2VydmVyVXJsIjoiaHR0cHM6Ly9iaW50dS13ZWJydGMubmFub2Nvc21vcy5kZS9wL3dlYnJ0YyJ9)
   
   - In this example `webcasterconfig` encodes the following payload:
 
 ```json
{"inputCfg":{"mediaStreamCfg":{"maxFramerate":30,"resolution":[640,480],"audioConstraints":{"autoGainControl":true,"channelCount":2,"echoCancellation":true,"noiseSuppression":true}},"broadcastCfg":{"transcodeAudioBitrateBps":128000,"maxAudioBitrateBps":128000,"maxVideoBitrateBps":500000,"maxEncodingFramerate":30}},"previewVideoElId":"preview","streamName":"[STREAM-NAME]","serverUrl":"https://bintu-webrtc.nanocosmos.de/p/webrtc"}
 ```
 

Configuration can be changed in the JSON editor under the **WebcasterApiV6.Config** section.<br/>
Changes to this config will be reflected into the location bar of the browser.

This means:
- you can change the settings, like resolution, bitrates, streamName etc
- you can then:
  - reload the window and changes will be persisted
  - or share your config by copying the URL from the location bar

### Playback

You can play back your Webcaster ingests with our **H5Live Player**.

The main sample from preceding includes a side-by-side player for your convenience when testing.
To create a shareable player link, append the stream name to our player demo URL:
- Player URL: https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=[stream-name]



:::info[Embedding]
Click [here](../nanoplayer/nanoplayer_getting_started) for more information on  how to **embed the H5Live Player** on your own webpage.
:::

:::info[Secure Playback]
Also note that for secure playback, you need to create your own playback tokens.
Find information about secure playback tokens [here](../nanoplayer/nanoplayer_token_security).
:::


