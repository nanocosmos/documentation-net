---
id: nanostream_webrtc_device_selection
title: Device Selection
sidebar_label: Device Selection
---

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

## Example

```html
<h2>MediaDevices:</h2>
<div id="devices"></div>
```

### Showing a dropdown menu

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

### Setting selected MediaDevice IDs programmatically 

A typical configuration may look like below.

Notice the `audioDeviceId` and `videoDeviceId` fields. They are both optional i.e nullable (e.g empty string).

They are supposed to take any Device-ID string value which you would get from the devices list above (`MediaDeviceInfo#deviceId` property).  

```js
let initConfig = {
    inputCfg: {
        mediaStreamCfg: {
            audioDeviceId: '',
            videoDeviceId: '',
            maxFramerate: 30,
            resolution: [1280, 720],
            audioConstraints: {
                autoGainControl: true,
                channelCount: 1,
                echoCancellation: true,
                noiseSuppression: true
            },
        },
        broadcastCfg: {
            transcodeAudioBitrateBps: HelperUtils.kbps(TRANSCO_AUDIO_RATE_KBPS),
            maxAudioBitrateBps: HelperUtils.kbps(AUDIO_RATE_KBPS),
            maxVideoBitrateBps: HelperUtils.kbps(VIDEO_RATE_KBPS),
            maxEncodingFramerate: 30,
        }
    },
    previewVideoElId: 'preview',
};
```

## Using MediaStream injection vs Device selection

TBC
