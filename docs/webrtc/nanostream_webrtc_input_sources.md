---
id: nanostream_webrtc_input_sources
title: Input sources
sidebar_label: Input sources
---

The Webcaster Client API offers versatile input options to cater to a wide range of broadcasting needs. This section of the documentation will guide you through setting up various input sources.

Sources can either be physical media devices, screen shares or virtual sources that you can create with Javascript.

The interface for creating video and audio input for the Webcaster is the [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices) interface.

We enable two workflows for the creation of input sources:
- you can create an input source by [configuring the Webcaster](#create-an-input-via-the-webcaster)
- or you can manually create different inputs, for example:
  - [camera & microphone](#manual-setup-of-camera-and-microphone)
  - [screen share](#setup-of-screen-sharing)
  - [capture from HTML canvas](#capture-from-html-canvas)

## Resources

Please find additional documentation for different topics below:

- Access [audio and video devices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- Capture a screen share [share or an application window](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia)
- Creating a [MediaStream from a HTML canvas](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream)

## Supported Browsers

1) Physical Devices

Cameras and Microphones can be used with all major browsers on desktop and mobile devices.
Here is a list of supported browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge Version 79 and later (Chromium-based version)
- Safari
- Opera

| Note: Always ensure that you're using up-to-date versions of browsers for optimal performance and security.

2) Screen Sharing

Screen Sharing is supported on Desktop browsers only.

## Create an input via the Webcaster

The Webcaster can take over the creation of input sources for you.
In that case you will simply provide a configuration in the `mediaStreamCfg` property:

~~~js
const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStreamCfg: {
            maxFramerate: 30,
            resolution: [1280, 720],
            audioConstraints: {
                autoGainControl: true,
                channelCount: 2,
                echoCancellation: true,
                noiseSuppression: true
            },
        }
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
~~~


## Manual Setup of Camera and Microphone

To access and preview the user's camera, you can use the [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) method. Here's a snippet:

~~~js
const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });

const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStream: stream,
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup();
await webcaster.startBroadcast();
~~~

## Setup of Screen Sharing

To capture a screen share, you can use the [getDisplayMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) method. Here's a snippet:

~~~js
const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: true });

const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStream: stream,
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup();
await webcaster.startBroadcast();
~~~

## Capture from HTML canvas

### General workflow:

1. Acquire different video/image and/or audio sources
2. Mix the sources together into one MediaStream
    - **Video**: in a canvas, write your render loop where you mix the sources together via HTML canvas drawing
    - **Audio**: optionally add an audio track to the mixed stream
3. Pass the resulting stream to the webcaster API

### Restrictions

When using canvas based streams, application developers are responsible for the rendering.
Please take note of the following:

- **Maintaining the provided framerate** is critical for end to end latency of the webcast.
- **Tab throttling**. When the current tab gets out of focus, most browsers will enable tab throttling. Timers, like `setInterval`, will be updated less frequently. You should check wether the tab left focus, and warn your users accordingly. E.g. with the DOM [visibilitychange event](https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event)
- Under certain circumstances the browsers encoder will **adapt the video resolution**, for example when **CPU overusage** is being detected.

### Canvas streaming sample

The following snippet demonstrates how to capture a HTML canvas and pass it to the Webcaster.

~~~js
// Rendering properties
const canvasWidth = 1280;
const canvasHeight = 720;
const framerate = 30;

// Access your HTML canvas (<canvas id="my-canvas"/> element)
const canvas = document.getElementById('my-canvas');
const context = canvas.getContext('2d');

// Create a MediaStream from the canvas
const canvasStream = canvas.captureStream(framerate);

// Optionally, add a AudioStreamTrack to our canvas stream
const myAudioStream = await navigator.mediaDevices.getUserMedia({ audio: true });
const myAudioTrack = myAudioStream.getAudioTracks()[0];
canvasStream.addTrack(myAudioTrack);

// Simple render loop. The function calls itself 30 (framerate) times per second.
// As an example, we simply draw the string "Hello World".
function renderLoop() {
    context.font = '50px serif';
    context.fillText('Hello world', 50, 90);
    setTimeout(loop, 1000 / framerate); // drawing at 30fps
};

// Start the render loop
renderLoop();

// Setup the Webcaster with our manually created stream
const webcaster = new window.WebcasterApiV6.Webcaster({
    inputCfg: {
        mediaStream: canvasStream
    },
    ingestUrl: 'rtmp://bintu-stream.nanocosmos.de:1935/live',
    serverUrl: 'https://bintu-webrtc.nanocosmos.de/p/webrtc',
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup();
await webcaster.startBroadcast();
~~~