---
id: nanostream_webrtc_demos
title: Browser demos
sidebar_label: Browser Demos
---

## Webcaster Demos Overview

TBD
 
 
    // full sample https://webrtc.pages.nanocosmos.de/webcaster-api/samples/index.html?streamName=yPleE-K5KUK


    // minimal https://webrtc.pages.nanocosmos.de/webcaster-api/samples/minimal/index.html?streamName=yPleE-K5KUK
        


https://webrtc.pages.nanocosmos.de/webcaster-api/samples/minimal/index.html?streamName=yPleE-K5KUK
        



:::info 
The H5Live Player shows the low latency live stream coming from nanoStream Cloud. You can share the URL to test low latency live playback on any HTML5 browser.
:::


     https://dashboard.nanostream.cloud/playout/yPleE-K5KUK
     
     
-----


## Try our sample page

:::info Before starting
To begin, please sign in to your nanoStream Cloud/Bintu account and copy your API key [here](https://dashboard.nanostream.cloud/organisation). <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email  [sales@nanocosmos.net](mailto:sales@nanocosmos.net)

.
:::

### Sample page

Click [here](https://webrtc.pages.nanocosmos.de/webcaster-api/samples?bintu.apikey=YOURAPIKEY) to use our sample web page with all broadcast features for further testing. 

 - Open the page in a WebRTC-compatible browser (Chrome or Firefox) and  add your bintu stream name to the browser URL.


```

https://webrtc.pages.nanocosmos.de/webcaster-api/samples/index.html?streamName=yPleE-K5KUK

```
TODO: re-write steps

/// [Screenshot: nanoStream Webcaster Sample Page Set Up]

 - select  MediaDevices  // authorize devices  
 
 - create new instance 
 
 - startPreview
 
 - startBroadcast
 
 - dispose
 
 - describe recover
  
 - describe setMuted
 
 - stopBroadcast

// ![Screenshot: nanoStream Webcaster Broadcast Settings]

 - The live stream is sent to nanoStream Cloud and can be played with the H5Live player.

 - To start playback clicking on side iframe if autostart failed

[Screenshot: nanoStream Webcaster Play H5Live Stream Button]


[Screenshot: nanoStream Webcaster Live Broadcast]

:::info
Click [here](./nanostream_webrtc_getting_started) for more information on  how to embed the H5LivePlayer on your own webpage.
:::

Broadcast configuration

// TBD


[Screenshot: nanoStream Webcaster Broadcast Settings]

