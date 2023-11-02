---
id: nanostream_webrtc_device_selection
title: Device Selection
sidebar_label: Device Selection
---

## Device Enumeration & Pre-selection filtering API

The browsers native WebRTC API gives you the possibility to present all currently attached audio and video devices to be used for input recording and streaming ingest.

The top-level API exports under namespace `DeviceUtils` (among others):

* getAvailableMediaDevices:

This function wraps the native WebRTC API for convenience. You also retrieve an equivalent list by directly using the platform support. See https://developer.mozilla.org/en-US/docs/Web/API/MediaDeviceInfo

```ts
async function getAvailableMediaDevices(): Promise<MediaDeviceInfo[]>
```

* filterDevices:

A convenience function to filter out specific kinds of devices. By default "input" only, since we only can select these for our streaming application obviously.

```ts
function filterDevices(
    devices: MediaDeviceInfo[],
    deviceKinds: MediaDeviceKind[] = ['audioinput', 'videoinput'],
    groupId?:string,
    deviceId?: string
): MediaDeviceInfo[]
```

## Device Permissions

Please notice that the device obtained by native enumeration interface from the platform (directly or indirectly via above utilities) are only the ones which have been granted permissions accordingly for the respective domain/page via the browsers interactive user prompt or general page presets (for example a browser may be configured to never grant device permissions for a specific page, type of page, or either input type).

See on standard `getUserMedia`, default way to query/prompt for device usage: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia .

Also see the more generic permissions related novel standard API: https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API 

## Examples

### 1) Showing a dropdown menu

```html
<h2>MediaDevices:</h2>
<div id="devices"></div>
```

This is an example of how to use the devices API information gathered,
and render it to a basic select menu. 

Derived to your existing applications UX, or specific UI frameworks and methodology used,
this may (potentially heavily) differ, but should anyway be applicable as we go from basic HTML web concepts.

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

Notice the `audioDeviceId` and `videoDeviceId` fields. They are both optional i.e nullable (e.g empty string).

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
