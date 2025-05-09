---
id: srt_ingest
title: nanoStream Cloud SRT Ingest Guide
sidebar_label: SRT Ingest
---

## What is SRT

The Secure Reliable Transport (SRT) protocol is a user-level protocol designed for low-latency live video streaming and generic bulk data transfer over the internet. It is built on top of UDP and provides reliability and security features optimized for real-time data transmission.

## SRT Setup Guide

The SRT setup will require creating a new stream or making use of an existing stream in your organization account for publishing and viewing. In this workflow, SRT streaming protocol will be used for ingest while playing back with H5Live player or RTMP protocol. *SRT playback* is not supported at the moment.

## Ingest

### Supported Formats and Codecs

|                   |                                                        |
|-------------------|--------------------------------------------------------|
| **Stream format** | MPEG-TS                                                |
| **Track count**   | Single channel of video and/or single channel of audio |
| **Video codec**   | H.264                                                  |
| **Audio codec**   | AAC                                                    |

### Server Domains and Port

| Global domain (preferred) | bintu-srt.nanocosmos.de    |
|---------------------------|----------------------------|
| **Asia domain**           | bintu-srt-as.nanocosmos.de |
| **Europe domain**         | bintu-srt-eu.nanocosmos.de |
| **North America domain**  | bintu-srt-us.nanocosmos.de |
| **South America domain**  | bintu-srt-sa.nanocosmos.de |
| **Port number**           | 5000                       |

### SRT Stream Id

SRT stream id format definition: `prefix:streamname[:postfix]`
- prefix: `push` for ingest or publish action
- streamname: existing Bintu stream name in the form `XXXXX-YYYYY`
- suffix: `record` to enable VOD recording of a live stream (optional)

### Stream Id limitations

 - The SRT protocol specification limits the Stream Id length to 512 characters.
 - Allowed character set in SRT Stream Ids: `a-z`,`A-Z`,`0-9`,`?`,`&`,`=`,`-`,`_`,`,` plus delimiter `:`. 
 - Colon delimiter `:` is permited on the stream id, **not** on stream name **nor** stream name parameters. 
 - Percent sign `%` is only allowed in the context of URL encoding.

#### Stream Id examples

Replace `XXXXX-YYYYY` with an existing Bintu stream name.

Basic push: `push:XXXXX-YYYYY`

Push with vod recording: `push:XXXXX-YYYYY:record`

Push with stream name parameters: `push:XXXXX-YYYYY?param1=one&param2=two`

Push with stream name parameters and VOD recording: `push:XXXXX-YYYYY?param1=one&param2=two:record`

:::tip note
Some streaming applications where the SRT stream id needs to be configured as part of a URL, for example _OBS Studio_, may require the stream name parameters to use URL encoding.
The URL encoding can be applied to the entire Stream Id or stream name parameters only.
The URL encoded parts will be decoded accordingly on the server side.

**See the following examples**:

Push with URL encoded stream id: <br/>
`push%3AXXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo`

Push with URL encoded stream name parameters: <br/>
`push:XXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo`

Push with URL encoded stream name parameters and VOD recording:<br/>
`push:XXXXX-YYYYY%3Fparam1%3Done%26param2%3Dtwo:record`
:::

### Ingest Parameters

|                           |                                                                                                                                               |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| **SRT mode**              | caller                                                                                                                                        |
| **SRT transmission type** | live                                                                                                                                          |
| **SRT latency**           | Default is **500ms**. Higher values can be used to maintain more buffer and will help to reduce packet drop in lossy transmission situations. |
| **SRT timeout**           | Recommended is **1 second**. Higher values can solve connect issues in case of longer routing distances or high round trip times (RTT).       |
| **SRT stream id**         | See [Above](#srt-stream-id).                                                                                                                  |

### Example of Setup using OBS Studio

OBS Studio is able to support SRT streaming in versions 25.0 or newer and has the flexibility of fine tuning capabilities.
You can refer more here: [SRT Protocol Streaming Guide](https://obsproject.com/de/kb/srt-protocol-streaming-guide#stream-with-srt. "OBS SRT Protocol Streaming Guide")

:::info note
OBS expects timeout and latency values in microseconds, that is, seconds ⨉ 1000000.
:::

### Ingest Address

#### Global Ingest Domain (Recommended)

Setup server with:
```http
srt://bintu-srt.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY
```

![Screenshot: OBS Server Setup](../assets/cloud/obs-srt.png)
*Screenshot: OBS Server Setup*

#### For Europe Domain

Setup server with:
```http
srt://bintu-srt-eu.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY
```

![Screenshot: OBS Server Setup For Europe Domain](../assets/cloud/obs-srt-eu.png)
*Screenshot: OBS Server Setup For Europe Domain*

#### For North America Domain

Setup server with:
```http
srt://bintu-srt-us.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY
```

![Screenshot: OBS Server Setup For North America Domain](../assets/cloud/obs-srt-us.png)
*Screenshot: OBS Server Setup For North America Domain*

#### For South America Domain

Setup server with:
```http
srt://bintu-srt-sa.nanocosmos.de:5000?mode=caller&latency=500000&timeout=1000000&transtype=live&streamid=push:XXXXX-YYYYY
```

![Screenshot: OBS Server Setup For South America Domain](../assets/cloud/obs-srt-sa.png)
*Screenshot: OBS Server Setup For South America Domain*


Whereby `XXXXX-YYYYY` is an existing Bintu stream name in your organization account and `latency`, and`timeout` values provided in **microseconds**.

### Stream Transcoding and ABR

If your organization account has transcoding feature enabled you may set up ABR with SRT. Just use the pass-through stream name for SRT ingest.

## Playback

SRT playback is not supported at the moment.
Playback is possible using the H5live Player or through RTMP protocol.

### Using H5Live Player

For a single bit-rate stream, the ingested stream can be played out with the following playback URL: 

```http
https://demo.nanocosmos.de/nanoplayer/release/nanoplayer.html?entry.rtmp.streamname=XXXXX-YYYYY
```

Whereby `XXXXX-YYYYY` is the Bintu stream name previously set up for SRT ingest.

For ABR playback, you can setup a stream group on the latest dashboard v3.
Find more information following the video guide in the link: 

:::tip usage of streamgroups
- [Dashboard: Set up streamgroups](../dashboard/start_streaming).
- [nanoPlayer: Streamgroup configuration](../nanoplayer/nanoplayer_feature_stream_group_configuration).

*If you are on a secure Bintu organization account, you will find information on playback with secure parameters [click here](../nanoplayer/nanoplayer_token_security).*
:::

### Using RTMP

Following, an example using RTMP protocol playback with _ffplay_ from the _ffmpeg_ project on the command line:

```sh
ffplay rtmp://bintu-play.nanocosmos.de/play/XXXXX-YYYYY
```
Whereby `XXXXX-YYYYY` is the Bintu stream name that was configured in the SRT ingest.
