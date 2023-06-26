---
id: nanostream_webrtc_demos
title: Browser demos
sidebar_label: Browser Demos
---

## Webcaster Demos Overview

1. Easy and quick demo for simple tests: https://www.nanocosmos.de/webcaster 
2. Complete webcaster application: https://webcaster.nanocosmos.de
3. Webcaster-Berlin: https://webcaster-berlin.nanocosmos.de
4. Developer Samples, see documentation [getting started](./nanostream_webrtc_getting_started).

Find further info below.

## Easy and quick demo for simple tests

:::note nanocosmos.de/webcaster
Click [here](https://www.nanocosmos.de/webcaster) to try the nanoStream Webcaster demo.
:::

1. On the right-hand side of the page you see the nanoStream Webcaster broadcast from your camera.

![Screenshot: nanoStream Webcaster Demo Ready](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/3.png?resize=360%2C361&ssl=1)

2. Click on the image for a webcam preview.

![Screenshot: nanoStream Webcaster Preview](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/4.png?resize=360%2C384&ssl=1)

3. Click on the orange button to start the broadcast. You will need to provide your email first.

![Screenshot: nanoStream Webcaster E-Mail Authentication](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/5.png?resize=360%2C394&ssl=1)

4. Your broadcast will then start: the live stream is sent to nanoStream Cloud and a new window from nanoStream H5Live Player will appear right below with your live stream.

![Screenshot: nanoStream Webcaster Broadcast Started](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/6.png?resize=360%2C388&ssl=1)
![Screenshot: nanoStream Webcaster H5Live Player](https://i2.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/7.png?resize=360%2C392&ssl=1)

:::info 
The H5Live Player shows the low latency live stream coming from nanoStream Cloud. You can share the URL to test low latency live playback on any HTML5 browser.
:::
-----

## Try our sample page

:::info Before starting
To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key [here](https://dashboard.nanostream.cloud/organisation). <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

### Sample page

Click [here](https://webrtc.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY) to use our sample web page with all broadcast features for further testing. 

1. Open the page in a WebRTC-compatible browser (Chrome or Firefox) and  add your bintu API key to the browser URL.

```
https://webrtc.nanocosmos.de/release/webcast.html?bintu.apikey=YOURAPIKEY
```
![Screenshot: nanoStream Webcaster Sample Page Set Up](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/8.png?resize=800%2C444&ssl=1)

2. You will see a preview of your camera image or screen in the `Local Video` window.

3. If you want to choose another camera or microphone, select `options`.

4. You are then ready to start your broadcast. Simply click on `broadcast` to start the live stream.

![Screenshot: nanoStream Webcaster Broadcast Settings](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/9.png?resize=360%2C79&ssl=1)

5. The live stream is sent to nanoStream Cloud and can be played with the H5Live player.
  To start playback click on `play h5live stream`  below the Broadcast Settings.

![Screenshot: nanoStream Webcaster Play H5Live Stream Button](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/10.png?resize=240%2C59&ssl=1)

6. The player will open in a new web page. You share this web page and open on all HTML5 browsers to play the live stream in ultra-low-latency.
  The player page also shows a Javascript code snippet to embed on your own web page.


[![Screenshot: nanoStream Webcaster Live Broadcast](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/h5live-2.png?resize=300%2C279&ssl=1)](https://i1.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/h5live-2.png?ssl=1)

> Click [here](nanostream_webrtc_getting_started.md) for more information on  how to embed the H5LivePlayer on your own webpage.

7. Broadcast configuration

The nanoStream Webcaster broadcast configuration is automatically set to `H264 video` with `500 kbits/s`. Audio is sent with the `Opus audio codec` and will be transcoded automatically to `AAC` for live distribution with nanoStream Cloud.

[![Screenshot: nanoStream Webcaster Broadcast Settings](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/Screenshot-2018-03-28-11.20.21.png?resize=640%2C804&ssl=1)](https://i0.wp.com/www.nanocosmos.de/blog/wp-content/uploads/2018/03/Screenshot-2018-03-28-11.20.21.png?resize=640%2C804&ssl=1)


