---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---
## Overview

This section provides a straightforward guide to initiate your journey with Webcaster. The provided snippet exemplifies the elementary steps to set up and start a live stream using Webcaster.

:::info Before starting
To get started with the **nanoStream Dashboard**, sign in with your existing *nanoStream account*.  
If you don’t have an account yet, you can [sign up](https://dashboard.nanostream.cloud/signup), or get in touch with our sales team via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by email at sales(at)nanocosmos.net.

*Need help accessing an existing organization or unsure how to proceed?* <br/>
👉  Check the [Authentication section](../dashboard/getting_started#authentication) for step-by-step guidance on creating an account, logging in, and requesting access from your system administrator.
:::


## Prerequisites
- Download the nanoStream Webcaster package from [github.com/nanocosmos/webcaster](https://github.com/nanocosmos/webcaster/)
- Include the Webcaster JavaScript file in your project
- [Create a new stream](../dashboard/start_streaming)
:::tip
Basic understanding of TypeScript or JavaScript is advantageous.
:::

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
