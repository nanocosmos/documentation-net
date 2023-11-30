---
id: nanostream_webrtc_audio_video_only
title: Audio-Only / Video-Only
sidebar_label: Audio-Only / Video-Only
---

In addition to streaming both, audio and video, you can stream Audio-Only and Video-Only with the nanoStream Webcaster.<br/>

Audio-Only or Video-Only streaming is enabled by setting `audioVideoOnly` property of the `mediaStreamCfg` to either `video` or `audio` in the configuration object passed to the constructor of the API.<br/>

## Audio-Only Streaming

:::tip audio-only streaming
To start Audio-Only streaming, we pass `audio` in `mediaStreamCfg.audioVideoOnly` .
:::

```javascript
const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStreamCfg: {
            audioVideoOnly: 'audio'
        }
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```

## Video-Only Streaming

:::tip video-only streaming
To start Video-Only streaming, we pass `video` in `mediaStreamCfg.audioVideoOnly` .
:::

```javascript
const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStreamCfg: {
            audioVideoOnly: 'video'
        }
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```