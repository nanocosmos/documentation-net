---
id: nanostream_webrtc_reconnect
title: Automatic Reconnection
sidebar_label: Automatic Reconnection
---


Webcaster API includes an automatic reconnection feature, designed to resume broadcasting after unintentional disconnections. This functionality is essential for maintaining a high-quality viewer experience during network instability or changes.

Upon activation, this feature initiates a reconnection attempt under these circumstances:

Network Alteration:
- On mobile platforms, such as during transitions from Wi-Fi to cellular data
- When moving across different Wi-Fi networks
- Short-term disruptions in the broadcaster's internet connection
- Sudden network-related complications

## Configuration

Initiating automatic reconnection involves including the **reconnect** option within the Webcaster configuration object.

- **reconnect: true**: This setting activates automatic reconnection with predetermined configurations.

- **Custom Configuration**:
  - **reconnect.minDelaySec**: Minimum amount of seconds to wait before attempting a reconnect after connection loss. Minimum value: 1.
  - **reconnect.maxDelaySec**: Maximum amount of seconds to wait before attempting a reconnect after connection loss. Minimum value: 1.
  - **reconnect.maxRetries**: Maximum amount of reconnect attempts. Minimum value: 1.

:::caution Recommended Configuration
For effective reconnection execution, it is advised to set the total reconnection delay to exceed 1 minute. This strategy accommodates DNS record Time-To-Live (TTL) adjustments.
:::


```javascript
const webcaster = new window.WebcasterApiV6.Webcaster({
    reconnect: {
      minDelaySec: 2,
      maxDelaySec: 15,
      maxRetries: 10
    }
    streamName: '<STREAM-NAME-1>'
});

await webcaster.setup()
await webcaster.startBroadcast()
```
