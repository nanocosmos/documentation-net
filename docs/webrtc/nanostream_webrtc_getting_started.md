---
id: nanostream_webrtc_getting_started
title: Getting started
sidebar_label: Getting started
---

## Overview

This section provides a straightforward guide to initiate your journey with Webcaster. The provided snippet exemplifies the elementary steps to set up and start a live stream using Webcaster.

## Prerequisites
- [Download](https://github.com/nanocosmos/webcaster/) and include the Webcaster JavaScript file in your project.
- Create a bintu stream, read about [bintu here](../cloud/cloud_getting_started).
- Basic understanding of TypeScript or JavaScript is advantageous.

## Implementation

1. **Include Webcaster**: Ensure the Webcaster JavaScript file is downloaded and included in your project.

2. **Configure Webcaster**: Create a configuration object with essential properties, notably the bintu stream name.

   - Find the Webcaster Client API docs [here](../webrtc/nanostream_webrtc_api)

3. **Instantiate Webcaster**: Initialize a `Webcaster` instance with your configuration.

4. **Setup and Begin Streaming**:

    - Execute the `setup` method to configure your client.
    - Employ `startPreview` to initiate video preview.
    - Utilize `startBroadcast` to commence your live stream.

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