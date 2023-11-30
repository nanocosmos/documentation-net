---
id: nanostream_webrtc_device_selection
title: Device Selection
sidebar_label: Device Selection
---

## Device Enumeration & Pre-selection Filtering API

The browsers native WebRTC API gives you the possibility to present all currently attached audio and video devices available for input recording and streaming ingest.

The nanoStream Webcaster Client API exports the following utility functions —among others—  under the namespace `DeviceUtils`:


### — `getAvailableMediaDevices`:

This function wraps the native WebRTC API for convenience. You also retrieve an equivalent list by directly using the platform support. See [MediaDeviceInfo](https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo) interface.


```ts
async function getAvailableMediaDevices(): Promise<MediaDeviceInfo[]>
```

### — `filterDevices`:

A convenience function to filter out specific kinds of devices. By default "input" only, since you only can select these for your streaming application obviously.

```ts
function filterDevices(
    devices: MediaDeviceInfo[],
    deviceKinds: MediaDeviceKind[] = ['audioinput', 'videoinput'],
    groupId?: string,
    deviceId?: string
): MediaDeviceInfo[]
```

## Device Permissions

Please notice that the device obtained by the native enumeration interface from the platform —either directly via the Media Stream Web API or indirectly via the preceding utilities— only include devices which the user have granted permissions in the current context, via the browsers interactive user prompt, or via general page presets. For example, a browser may reject device permissions for a specific page, type of page, and either 'audio' or 'video' input types, and store these as user preferences.


:::info
See the standard [MediaDevices: getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia), for default way to query/prompt for device usage. 

Also see the more generic permissions related novel standard: [Permissions API](https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API) 
:::


## Examples

### 1) Showing a dropdown menu

```html
<h2>MediaDevices:</h2>
<div id="devices"></div>
```

This example shows how to use the information gathered from devices API, and render it as a basic select menu. 


:::note

Derived to your existing applications UX, or UI frameworks and methodology in use,
this may (potentially heavily) differ, but generally the same concepts from basic HTML and vanilla Javascript
should apply.

:::



```js
DeviceUtils.getAvailableMediaDevices().then(devices => {

    const videoDevices = DeviceUtils.filterDevices(devices, ['videoinput']);
    const audioDevices = DeviceUtils.filterDevices(devices, ['audioinput']);

    console.debug('Available devices:', devices);

    const devicesDiv = document.querySelector('#devices')

    const videoDevicesSelect = createDevicesDropdown(videoDevices);
    const audioDevicesSelect = createDevicesDropdown(audioDevices);

    const videoDevicesLabel = document.createElement('label');
    videoDevicesLabel.innerText = 'video devices: ';
    const audioDevicesLabel = document.createElement('label');
    audioDevicesLabel.innerText = 'audio devices: ';

    devicesDiv.appendChild(videoDevicesLabel);
    devicesDiv.appendChild(videoDevicesSelect);
    devicesDiv.appendChild(document.createElement('br'));
    devicesDiv.appendChild(audioDevicesLabel);
    devicesDiv.appendChild(audioDevicesSelect);
});

function createDevicesDropdown(devices) {
    // Create a select element
    const selectElement = document.createElement('select');

    devices.forEach(device => {
        const optionElement = document.createElement('option');
        optionElement.value = device.deviceId;
        optionElement.textContent = `${device.label || 'Unknown Device'} - id: ${device.deviceId}` ;
        selectElement.appendChild(optionElement);
    });

    return selectElement;
}
```

### 2) Setting selected MediaDevice IDs programmatically 

A typical configuration may look like below.

Notice the `audioDeviceId` and `videoDeviceId` fields. They are both optional i.e. nullable (e.g. empty string).

These can be set to any Device-ID string value which you would get from the devices list above (`MediaDeviceInfo#deviceId` property).

```js
let initConfig = {
    inputCfg: {
        mediaStreamCfg: {
            audioDeviceId: '<audio-input-device-ID>',
            videoDeviceId: '<video-input-device-ID>',
            maxFramerate: 30,
            resolution: [1280, 720],
        },
        broadcastCfg: {
            maxAudioBitrateBps: 128000,
            maxVideoBitrateBps: 8000000,
        }
    },
    previewVideoElId: 'preview',
};
```

## On Using MediaStream injection vs Device selection

TBC
