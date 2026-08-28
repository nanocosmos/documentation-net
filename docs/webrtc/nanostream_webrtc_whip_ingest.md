---
id: nanostream_webrtc_whip_ingest
title: WHIP Ingest Guide
sidebar_label: WHIP Ingest
---


## What is WHIP?

The *WebRTC-HTTP Ingest Protocol* (WHIP) is a simple HTTP-based protocol that allows ingestion of media content into a broadcasting ingestion endpoint.

It defines how to use standard HTTP mechanisms like POST requests, authentication headers, and response codes for establishing a WebRTC connection to ingest audio/video.

:::note WHIP Overview
### How WHIP Works

- The client (encoder/camera) sends an HTTP POST request to the WHIP endpoint with the SDP offer in the body.
- The WHIP endpoint responds with a 201 Created status and the SDP answer in the body.
- This establishes the WebRTC connection for media ingestion.
- The WHIP endpoint can provide ICE server configuration via Link headers in responses.

### Benefits of WHIP

- Uses widely adopted HTTP protocol rather than proprietary protocols.
- Leverages standard HTTP security, load balancing, and so on.
- Simplifies integration of encoders/cameras with WebRTC platforms.
:::

## WHIP Ingest on nanoStream Cloud

### Features

Our WebRTC-HTTP servers support the following features:

- Create broadcast streams via WebRTC
- Push broadcast to nanoStream Cloud upstream via RTMP protocol
- Toggle/switch client side video tracks (inputs) at runtime
- Control upstream quality at runtime

The current implementation of WHIP follows the mandatory parts from [specifications](https://datatracker.ietf.org/doc/draft-ietf-wish-whip/),
 - Endpoint provides service to create resource and delete resource. 
 - Bearer token authorization isn't required in the current implementation.
 - Requires Input sources to have H.264 codec for video, and Opus for audio. 
 - The client should append configuration options as query parameters for the target ingest to set up the broadcast stream.
 The parameters `stream_name` and `stream_url` are **mandatory**.


We provide a WHIP endpoint at:

```
 https://bintu-webrtc.nanocosmos.de/p/webrtc
```

The request to create resource will then look like the form:

```
POST https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<example-stream>&stream_url=rtmp://bintu-stream.nanocosmos.de:1935/live
[sdp body]
```

### Custom Publish Parameters

You can append your own arguments to the stream name, for example `?passcode=abc&tenant=42`. The Bintu service passes these arguments unchanged to your configured publish webhook — see [Custom Data With Query Parameters](../cloud/bintu_custom_webhooks#custom-data-with-query-parameters).

Because the stream name is itself a query parameter of the WHIP request, the arguments have to arrive **URL-encoded** at the WHIP endpoint:

```
https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=XXXXX-YYYYY%3Fpasscode%3Dabc%26tenant%3D42&stream_url=rtmp://bintu-stream.nanocosmos.de/live
```

The Webcaster SDK publishes through this same WHIP endpoint, so the arguments have to be encoded there as well.

:::caution The Webcaster SDK does not encode for you
The SDK passes `streamName` on unchanged, so encode the arguments yourself before you set it:

```js
streamName: 'XXXXX-YYYYY' + encodeURIComponent('?passcode=abc&tenant=42')
```

Unencoded arguments become separate query parameters of the WHIP request and never reach your webhook.
:::



### WHIP Ingest Quick Guide
:::tip WHIP Ingest Setup


1. **Prepare for streaming**

    Obtain Stream Name
    - Sign in to your nanoStream Cloud dashboard
    - Create a new stream or choose an existing created or Ended stream
    - Alternatively, get your API key and prepare stream with [bintu API](../cloud/bintu_api) 

2. **Configure Encoder ingest URL**

    In your encoder software or device, select the WHIP ingest protocol.
     - Use the WHIP ingest URL format: 
     
```
    https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<STREAM NAME>&stream_url=<STREAM URL>

```

Full request path will have the form:

```

    https://bintu-webrtc.nanocosmos.de/p/webrtc?stream_name=<string>&stream_url=rtmp://bintu-stream.nanocosmos.de/live

```
    
3. **Encoder Settings**

    Use H.264 video codec, and Opus audio codec. 
    Configure video resolution and audio quality options according to preferences
    
    _Recommended settings_: 
     - W×H: 1280×720 resolution
     - FR: 25 fps
     - Bitrate: 2 Mbps 
     - Keyframe Interval: 2 second, or GoP size of _FR_×2 
       - (i.e. in OBS > Settings > Output (Advanced) > Streaming > Encoder Setting > Keyframe Interval)



4. **Start Stream**
    
   - Start streaming from your encoder
   - Your stream will be ingested into nanoStream Cloud via WHIP
   - The stream will broadcast over RTMP from:

```

rtmp://bintu-stream.nanocosmos.de/live/STREAM-NAME

```
:::
