---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---

:::info Before starting
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::


## Overview

This section provides a straightforward guide to initiate your journey with Webcaster. The provided snippet exemplifies the elementary steps to set up and start a live stream using Webcaster.

## Prerequisites
- [Download](https://github.com/nanocosmos/webcaster/) and include the Webcaster JavaScript file in your project.
- Create a new stream. Read about stream creation via the nanoStream Cloud dashboard [here](../cloud-frontend-v3/Dashboard_Start_Streaming).
- Basic understanding of TypeScript or JavaScript is advantageous.

## Implementation

1. **Include Webcaster**: Ensure the Webcaster JavaScript file is downloaded and included in your project.

2. **Configure Webcaster**: Create a configuration object with essential properties, notably the bintu stream name.

   - Find the Webcaster Client API docs [here](../webrtc/nanostream_webrtc_api).

3. **Instantiate Webcaster**: Initialize a `Webcaster` instance with your configuration.

4. **Setup and Begin Streaming**:

    - Execute the [`setup`](https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#setup) method to configure your client.
    - Employ [`startPreview`](https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#startPreview) to initiate video preview.
    - Utilize [`startBroadcast`](https://nanocosmos.github.io/webcaster/docs/classes/webcaster.Webcaster.html#startBroadcast) to commence your live stream.

### Code Snippet

```typescript
import { Config as WebcasterConfig, Webcaster } from '../../dist/nanostream.webcaster';

const config: WebcasterConfig = {
    streamName: 'my-nanostream-name'
};

const client = new Webcaster(config);

client.setup().then(fullCfg => {
    console.log(fullCfg);

    client.startPreview('myPreviewElId');
    client.startBroadcast();
});
```

## Next Steps

With the fundamental streaming setup complete, you are encouraged to delve into more sophisticated functionalities like stream control, metrics integration, and personalization. For comprehensive information, refer to the detailed feature sections in the Webcaster SDK documentation.
