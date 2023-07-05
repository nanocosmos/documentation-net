---
id: faq_h5live_player_adjust_style
title: Adjust/Styling Questions
sidebar_label: Adjust/Style
---

## Questions Overview

- [How to make the player responsive and preserve the aspect ratio?](#how-to-make-the-player-responsive-and-preserve-the-aspect-ratio)
- [How to embed the player into an iframe element?](#how-to-embed-the-player-into-an-iframe-element)
- [Can I use a raw player without built-in controls, animations and styles?](#can-i-use-a-raw-player-without-built-in-controls-animations-and-styles)
- [Can I customize the inline controls?](#can-i-customize-the-inline-controls)
- [How to adjust the playout orientation when the broadcast on an iOS device get's rotated?](#how-to-adjust-the-playout-orientation-when-the-broadcast-on-an-ios-device-gets-rotated)
- [Can I style the player as audio player?](#can-i-style-the-player-as-audio-player)
- [Can I play video only or audio only streams?](#can-i-play-video-only-or-audio-only-streams)
- [Can I use an own external video element?](#can-i-use-an-own-external-video-element)
- [Can I update the source?](#can-i-update-the-source)
- [Is a fullscreen functionality available?](#is-a-fullscreen-functionality-available)
- [Can I use a poster as placeholder for the video?](#can-i-use-a-poster-as-placeholder-for-the-video)
- [Can I change the background color of the player?](#can-i-change-the-background-color-of-the-player)
- [Is there a simple code snippet available?](#is-there-a-simple-code-snippet-available)
- [Can I use the player within a mobile webview?](#can-i-use-the-player-within-a-mobile-webview)
- [Can I have multiple player instances in one page?](#can-i-have-multiple-player-instances-in-one-page)
- [How to adjust volume?](#how-to-adjust-volume)

## How to make the player responsive and preserve the aspect ratio?

The following example is for a **16:9 ratio**, which can be changed to work for all other aspect ratios.

#### 1. Player configuration

Set the `style.width` and `style.height` properties inside the player config to `auto` to  keep the size of the parent container.

```js
// player config 
var config = {
    "style": {
        "width": "auto",
        "height": "auto"
    },
    ...
}
```

#### 2. Player DIV CSS

Set a percentage value for `padding-bottom` to maintain the aspect ratio of the players `<div>` element. <br/>
For a 16:9 aspect ratio: **(9 / 16 = 0.5625) = 56.25%**

```html
<body>
    <div id="playerDiv" style="padding-bottom: 56.25%"></div>
</body>
```

#### Other aspect ratios

| Aspect ratio | padding-bottom |
| ------------ | -------------- |
| 1:1          | 100%           |
| 16:9         | 56.25%         |
| 4:3          | 75%            |


## How to embed the player into an iframe element?

For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it.

#### 1. Creating the embedded page including the player on your side

Please find information and examples on how to add the player to a webpage [here](https://docs.nanocosmos.de/docs/nanoplayer/nanoplayer_getting_started/).

#### 2. Embedding the player page in an iframe on a second page on the distribution side

**Important:** The `allowfullscreen` attribute is required if the page wants to support fullscreen video.

```html
<iframe 
    id="ifvideo" 
    width="640" 
    height="480" 
    scrolling="no" 
    frameborder="0" 
    allowfullscreen="" 
    src="//yourdomain.com/playerpage.html">
</iframe>
```

## Can I use a raw player without built-in controls, animations and styles?

Yes, by passing the config property `config.style.view = false`.

The view is the top level UI layer containing all built-in controls, animations and styles including automatic video scaling.
Disabling the view will disable these features as well which is why this is recommended for experienced users only.

If you want to disable certain parts of the view (eg. controls) keep the `config.style.view` enabled and disable the specific property

Example to disable inline controls:

```js
"style": {
    "view": true // default,
    "controls": false
}
```

You can find more information regarding config properties in our API docs [here](../nanoplayer/nanoplayer_api/#NanoPlayer..config).

:::info Important
If you create custom controls or other overlay elements make sure to set the `z-index` value > 1 to ensure they are positioned on top of the video layer.
:::

## Can I customize the inline controls?

Yes, of course. To adjust the inline controls please follow our customization guideline [here](../nanoplayer/nanoplayer_feature_customization/#built-in-controls-animations-and-styles)

In case you would like to disable them, it is enough to pass false in `config.style.controls`.

```js
config.style.controls = false;
```

:::info Important
If you create custom controls or other overlay elements make sure to set the `z-index` value > 10 to ensure they are positioned on top of the video layer.
:::

## How to adjust the playout orientation when the broadcast on an iOS device get's rotated?

:::caution Note
The iPhone and iPad send the stream with the initial orientation of the device. Meaning, if you rotate the device the stream is rotated which is a technical restriction that we can not change.
:::

In order to have live rotation on the player side, we send rotation **metadata** to the player to adjust the playback to the rotation.
To receive metadata on the player side simply enable it within your player config:

```js
"playback": {
    "metadata": true
},
```

## Can I style the player as audio player?

Yes, you can style the player as audio player by passing

```js
config.style.audioPlayer = true;
```

## Can I play video only or audio only streams?

Yes.

## Can I use an own external video element?

Yes, by passing the `id` attribute of an existing html5 video element through the config property `playback.videoId`. The video will be inserted into the players container and existing styles will be overwritten and restored after a destroy.

:::caution Important
Since introducing player version **4.4** with seamless stream switching on iOS & iPadOS, **2** video elements are needed internally. So for special use cases where existing video tags need to be used for playback an `array` of maximal two element Ids can be provided via the `playback.videoId` config property (**NOT mandatory**)

- if 0 Ids are provided 2 video elements will be created internally
- if 1 Id is provided the other video element will be created internally

You can find more information regarding the `playback.videoId` and other config properties in our [API docs](../nanoplayer/nanoplayer_api/#NanoPlayer..config).
:::

## Can I update the source?

Yes, by executing the player’s function `updateSource` with an updated `config.source` object.

## Is a fullscreen functionality available?

Yes. Fullscreen is available over the public [fullscreen API](../nanoplayer/nanoplayer_feature_fullscreen_api) or over the bottom right fullscreen button in the built-in H5live player control bar.

## Can I use a poster as placeholder for the video?

Since the **nanoStream H5Live Player Version 4.9.1** it is possible.
Poster images, which are displayed while the video element is loading, are supported and can be added in the `config.style.poster`. The string has to be a relative or absolute path to a valid image source like `"./assets/poster.png"` or image URL.

#### Example

```js
"style": {
    "poster": "https://[yourdomain]/assets/niceimage.png"
}
```

However, if you prefer to use other version of H5Live Player, you cannot set poster in this way. Alternatively, you can use a workaround by passing the id of an existing video tag with poster through the config (`config.playback.videoId`). This video element would be used by the player instead of creating a new one. See [here](../nanoplayer/nanoplayer_api/#NanoPlayer..config).

Another possibility can be that you grab the video element from the DOM after successful setup and then modify the poster attribute.

```js
var video = document.querySelector("#playerDiv video");
video.poster = ....;
```

## Can I change the background color of the player?

To change the background color of the player set the backgroundColor parameter in `config.style.backgroundColor` to the desired color. By default it is set to black.

#### Code example with changed background color

```js
"style": {
    "backgroundColor": 'white'
}
```

However, if you prefer to use older version of **nanoStream H5Live Player**, then there is no way to configure the background-color of the video element, but you can have workarounds. You can select the video in the resolve function of the promise (see the sample) and then change the color or you can create a global CSS rule for video elements. Please see the following examples.

#### Code example with change in the resolve function of the promise

```js
var player; 
  var config = {
    "source": {
        "bintu": {
            "apiurl": "https://bintu.nanocosmos.de",
            "streamid": "236af21e-fbf3-4ba3-889c-343ef3f0e7ca"
        }
    },
   "playback": {
      "autoplay": true,
      "automute": true,
      "muted": false
  },
  "style": {
      "controls": true,
      "width": "auto",
      "height": "auto",    
      }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer("playerDiv");
    player.setup(config).then(function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
        var video = document.querySelector('#playerDiv video');
        video.style.backgroundColor = '#123456';
    }, function (error) {
        alert(error.message);
    });
});
```

#### Code example with changed global CSS rule

```html
<style>
    video {
        background-color: #123456;
    }
</style>
```

## Is there a simple code snippet available?

Yes. Please check out the [Getting started](../nanoplayer/nanoplayer_getting_started) topic in the documentation.

## Can I use the player within a mobile webview?

Yes. Some mobile webviews require configuration flags to be set on the app level
to allow, e.g. inline playback or playback without user interaction (autoplay).

:::info Examples
**iOS**: allowsInlineMediaPlayback, mediaTypesRequiringUserActionForPlayback <br/>
**Android**: setMediaPlaybackRequiresUserGesture
:::

Please check the documentation of the webview component.

## Can I have multiple player instances in one page?

Yes. Please check out the nanoplayer-multi sample in the player package.

## How to adjust volume?

Adjusting volume differs depending on the operational system.

#### 1. iOS

Due to Apple policy, setting the volume internally is not possible at the moment. See [here](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/Device-SpecificConsiderations/Device-SpecificConsiderations.html#volume-control-in-javascript/) for more informations.

#### 2. Others

Set the volume with player method `'setVolume'` and pass a float value between 0.0 and 1.0.

#### Code example with set volume to 50%

```js
player.setVolume(0.5)
```
