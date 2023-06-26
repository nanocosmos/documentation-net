---
id: nanostream_webrtc_set_mediastream
title: External Streams / Mixing
sidebar_label: External Streams / Mixing
---

Since Webcaster version 5.11.0 you can use sources based on HTML5 canvas or other stream sources to enable user-generated live sources, separate to live camera or device screens.

To use this feature, a new API call was added, [setMediaStream()](./nanostream_webrtc_api#rtcusersetmediastreamconfig).
It works without using video and audio sources from [startPreview()](./nanostream_webrtc_api#rtcuserstartpreviewconfig).


:::note camera, microphone or screen share sources
If you simply intent to utilize a combination of camera, microphone or screen share sources:
Use the [startPreview()](./nanostream_webrtc_api#rtcuserstartpreviewconfig) call.
:::

## Use cases

- Mixing of different video sources into one stream
    - PIP (picture in picture)
- Mixing of different audio sources together
- Preprocessing of video and audio in the browser
- Video overlays, eg. rendering animations, drawings, watermarks and logos
- HTML5 canvas as a live source

## General workflow

1. Acquire different video/image and/or audio sources
2. Mix the sources together into one MediaStream
    - **Video**: in a canvas, write your render loop where you mix the sources together via HTML canvas drawing
    - **Audio**: with the WebAudio API
3. Pass the resulting stream to the webcaster API

## Restrictions

When utilizing this API call, application developers are responsible for the externally created stream.

- **Maintaining the provided framerate** is critical for end to end latency of the webcast.
- **Tab throttling**. When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like `setInterval`, will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event)
- **Video dimensions (width & height)** must not change during a webcast.
- Under certain circumstances the browsers encoder will **adapt the video resolution**, for example when **CPU overusage** is being detected.

## Resources
- Access [audio and video devices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- Capture a screen [share or an application window](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)
- Creating a [MediaStream from a HTML canvas](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream)
- Create [MediaStreams with the WebAudio API](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode)

## Samples & Documentation

### Online Samples

:::info Before starting
To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key [here](https://dashboard.nanostream.cloud/organisation). <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

Please see the online samples (replace XXX with your bintu API key):

- **Webcast External Mixing Sample**: https://webrtc.nanocosmos.de/release/webcast_external_mixing_sample.html?bintu.apikey=XXX
- **Webcast External Stream**: https://webrtc.nanocosmos.de/release/webcast_external_stream.html?bintu.apikey=XXX

### Usage Sample

#### HTML canvas as video source

```js
// pass an MediaStream to the API
// rtcUser: instance of RtcUser

var canvasWidth = 1280;
var canvasHeight = 720;
var framerate = 30;

// access your HTML canvas (<canvas id="my-canvas"/> element)
var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

// create a MediaStream from the canvas
var canvasStream = canvas.captureStream(framerate);

// optionally, add an AudioStreamTrack
var myAudioTrack = ...;
canvasStream.addTrack(myAudioTrack);
     *
// your render loop, the loop calls itself 30 (framerate) times per second
// as an example, we simply draw the string "Hello World"
function renderLoop() {
    context.font = '50px serif';
    context.fillText('Hello world', 50, 90);
    setTimeout(loop, 1000 / framerate); // drawing at 30fps
 };
     *
var config = {
    stream: canvasStream,
    width: canvasWidth,
    height: canvasHeight,
    framerate: framerate
};

// start the render loop
renderLoop();

rtcUser.setMediaStream(config);
```