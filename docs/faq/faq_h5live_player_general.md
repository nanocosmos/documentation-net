---
id: faq_h5live_player_general
title: General Questions
sidebar_label: General
---

## Questions Overivew

- [What is H5Live and how can it guarantee ultra-low latency live streaming and playback?](#what-is-h5live-and-how-can-it-guarantee-ultra-low-latency-live-streaming-and-playback)
- [Which browsers/platforms does the nanoStream H5Live Player support?](#which-browsersplatforms-does-the-nanostream-h5live-player-support)
- [How can I check browser support?](#how-can-i-check-browser-support)
- [Is H5Live supported in native apps in a Webview on iOS and Android?](#is-h5live-supported-in-native-apps-in-a-webview-on-ios-and-android)
- [Is there an API documentation available?](#is-there-an-api-documentation-available)

## What is H5Live and how can it guarantee ultra-low latency live streaming and playback?

To respond to our customers’ needs for ultra-low latency use cases, the nanocosmos team invented the plugin-free nanoStream H5Live stream delivery and playback technology.

nanoStream H5Live is a client-server delivery and playback solution based on HTML5 technologies, including HLS on iOS, enabling ultra-low latency browser-based playout, plugin-free on all web browsers.

:::tip
See the separate [H5Live section  in our docs](../nanoplayer/nanoplayer_introduction), and our [blog posts](https://www.nanocosmos.de/blog/?s=h5live).
:::

## Which browsers/platforms does the nanoStream H5Live Player support?

### Browser support

The low-latency nanoStream h5Live Player runs on all full-featured HTML5 browsers including

- Safari 10 and higher on iOS, iPadOS and macOS
- Chrome 54 and higher on desktop and mobile
- Firefox 48 and higher
- MS Edge (all versions)
- Internet Explorer 11 (starting Windows 8.1)

For Internet Explorer 11 on Windows 7, H5Live player contains a Flash player fallback for RTMP.

### Browser emulations

Browser emulation might not be supported. Using the player in a browser emulation mode could lead to unexpected behaviour due to mismatching conditions.
It is highly recommended to use real devices for testing and display.

### Issues on specific systems

Generally nanoStream H5live player support in a certain browser depends on the
availability of the involved technologies, codecs and formats.
For Windows, macOS and Android:

- HTML5 Video
- Web Sockets
- Media Source Extensions
- Support for fMP4, H.264 Video, AAC Audio

On iOS, nanoStream H5Live uses a unique version of HLS which works plugin-free on all Safari versions starting iOS 10.

On some Android-based mobile devices, the default browser is a stripped-down version not featuring all HTML5 elements.
For example, the Samsung Internet browser is rather based on Chromium than Chrome.
This results in differences regarding the support of certain technologies, codecs and formats. Read more [here](https://www.chromium.org/audio-video).

The Samsung Internet Android browser is one example, where the HTML5 Media Source Extension is missing or disabled, one of the key HTML5 technologies.

We have been able to confirm that the MSE feature can be enabled through `internet://flags`. <br/>
In version 6.4, while the default was 'disabled'. <br/>
In version 7(.2) this flag has been removed while the default seems to be 'disabled' still. We are ongoing monitoring Samsung Internet progress.

The nanoPlayer setup call is returning a specific error message in case that the
browser does not support one of the required technologies.

```js
player.setup(config).then(function (config) {
    console.log("setup success");
}, function (error) {
    alert(error.message);
});
```

:::warning Setup Error
*This browser does not fully support HTML5 and H5Live.
Supported are: Chrome >=54 (Windows, macOS, Android), Firefox >=48 (Windows, macOS, Android),
Microsoft Edge (Windows), Microsoft Internet Explorer 11 (at least Windows 8),
Safari (macOS & at least iOS 10).*
:::

## How can I check browser support?

You can check the static capabilities array of the NanoPlayers class `NanoPlayer.capabilities`. If the array has values, the player is supported. Values can be `h5live`, `flash` and `native`.

## Is H5Live supported in native apps in a Webview on iOS and Android?

H5Live Player works on native browsers like Safari on iOS and Chrome on Android.
For native apps, you can use WebView components in-app, which both operating systems support.
Example for iOS can be found [here](https://developer.apple.com/documentation/webkit/wkwebview/).
The operating systems need to support both H264 video and AAC audio formats for playback, which most platforms do.

## Is there an API documentation available?

Yes, you can find it [here](../nanoplayer/nanoplayer_api).