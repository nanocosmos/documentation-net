---
id: start_streaming
title: Start Streaming
sidebar_label: Start Streaming
---

:::tip Before starting
To begin, please sign in using your nanoStream account credentials. <br/>
If you have not created an account yet, you can [dashboard.nanostream.cloud/signup](https://dashboard.nanostream.cloud/signup) or reach out to our dedicated sales team via the [nanocosmos.de/contact](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.net. <br/>
*If you are unsure how to create an account or need access to an existing organization, please refer to the [Authentication section](#authentication). There, you will find instructions on signing up, logging in, or requesting an invitation from your system administrator.*
:::

## How to Start Streaming

nanoStream offers two ways to start streaming:
1. **Using nanoStream Webcaster** 
2. **Using an external live encoder**

Regardless of the method, you first need to create a stream.

## Create Stream

Navigate to [dashboard.nanostream.cloud/stream/create](https://dashboard.nanostream.cloud/stream/create).

### Tag(s)

In the **Tag(s)** section you can add tag(s) to identify your stream more easily in the future. 

1. Type your tag into the text field and press **Enter** to add it.  
2. As you type (from the 3rd character), suggestions based on previously used tags will appear underneath the textfield. By clicking on a suggestion it will be added to the taglist.
3. Click **Show all tags** to see your most recently used tags and select from them.  


### Transcoding Profile(s)

During the stream creation process live transcoding is already enabled by default. You have the option to add transcoding profiles and configure them according to your requirements. The default selection is pre-filled, but you can choose different settings. Ensure that the bitrate of each Transcoding Profile is lower than the ingest/passthrough bitrate or the profile above.

:::tip Adaptive Bitrate (ABR) and Live Transcoding
To learn more about Adaptive Bitrate (ABR) and Live Transcoding, you can have a look here:
- [What is Adaptive Bitrate Playback?](./abr_transcoding.md)
- [What is Live Transcoding?](./abr_transcoding.md)
:::

:::info Modifying Transcoding Profiles After Stream Creation
As your streaming requirements evolve, you may find the need to revise your transcoding profiles. Learn more about this here:
- [Modifying Transcoding Profiles After Stream Creation](./abr_transcoding.md)
- [Transform a Non-Transcoding Stream into an ABR Stream](./abr_transcoding.md)
- [Integrating Additional Profiles to Your Streamgroup](./abr_transcoding.md)
- [Edit profiles](./abr_transcoding.md) or [Delete profiles](./abr_transcoding.md)
:::


### Live Processing

Live Processing lets you enhance your stream with additional automated features. You can either apply the same settings, by clicking on **Sync settings across profiles**, to all transcoding profiles (if using multiple) or configure them individually. <br/> Applying uniform settings is useful for **Live Replay**, while separate settings allow tailored configurations for different stream qualities.

:::info Enabling `live processing` features
If you wish to utilize this feature, you would need to activate them and ensure that the corresponding pricing and payment options are set up. 
Contact us via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) to find the perfect solution for you!
:::

- **Thumbnails** – Set the interval (10–3600 seconds) for capturing thumbnails. Lower values update previews more frequently.
- **Motion Clips** – Define the clip duration (1–60 seconds) and the interval (10–3600 seconds) between clips. Shorter clips highlight key moments, while lower intervals ensure more frequent updates.
- **Recording** – Specify the recording duration in seconds. Leaving the text field empty records the entire session.
- **Replay** – Set the duration for the replay segment (minimum 1 second). A shorter duration provides quick highlights, while leaving the field empty records the full session.

:::tip Learn more about Live Processing features
- [What is Live Processing?](../cloud/live_processing)
- [Example Use Cases: Possible solutions for various use cases](../cloud/live_processing#example-use-cases)
- [Updating processes after stream creation](./live_processing.md)
:::

### Timecode

:::info Enabling `timecode` feature
If you wish to utilize this feature, you would need to activate them and ensure that the corresponding pricing and payment options are set up. 
Contact us via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) to find the perfect solution for you!
:::

By clicking on **Add timecode** you can enable this feature. It allows precise synchronization or indexing of video content. You can set the time injection interval between 500 ms and 3600000 ms (1 hour), while we recommend: 1000-5000 ms. The default is 2000ms. 

## Start Streaming

After clicking on **Create New Stream**, you will be redirected to the easy instructions page. This page provides you with all the information required to start and share a stream, including the necessary steps and details for a seamless setup.
You can also access this page later via **Stream Overview → Get Instructions**.

:::info Please note
All these informations are also available in the detailed **Stream Overview**.
:::

Under the Header of the page, you can see three buttons:
- **Stream Overview**: Takes you to the detailed stream overview page with additional stream information.
- **Start nanoStream Webcaster**: Redirects you to the Webcaster page where you can begin the ingest process immediately.
- **Watch Stream**: Directs you to the playout page where you can watch your live stream.

:::tip Learn more about nanoStream Webcaster
- [Ingesting with the nanoStream Webcaster](#ingesting-with-the-nanostream-webcaster)
- [Stats and Metrics: Monitor Your Webcast's Performance](../webrtc/nanostream_webrtc_stats_and_metrics.md)
:::

### Easy Instructions to your live stream

1. **Start the Ingest**: This section displays the **RTMP stream name** and **RTMP URL** needed to begin your stream. To copy the details easily, click on the copy icon next to the information.
2. **Access the Web Playout**: Here you will find the **live playout URL** for streaming your content.

:::info
Additionally, the dashboard offers the `secure` option (if enabled) to generate a playback token. You can specify options such as an expiration date, not-before-date, client IP, domain, user ID, or a single tag for added security and control. <br/> Contact us via [nanocosmos.de/contact](https://www.nanocosmos.de/contact) to enable the `secure` feature for your organisation.
:::

3.  **Code Snippets**: We provide two types of code snippets to embed the H5Live Player with your stream on your website: **iFrame Code Snippet**, **HTML Code Snippet**. *Simply copy and paste the appropriate code into your webpage to integrate the player.*
4. **Stream Overview**: This section provides a link to the full stream overview page. Clicking the URL will take you to the detailed overview with more relevant details about the stream.

## Ingesting with the nanoStream Webcaster

The Webcaster interface is designed with simplicity and efficiency in mind, offering key elements that make live streaming easy.

The Webcaster interface, shown in the screenshot, is divided into three main sections: 
- **Top left**: The webcaster itself,
- **Top right**: Real-time statistics *and*
- **Bottom**: The stream details.

In the top right section, you can identify the version of the Webcaster API in use.

### Toolbar

The Toolbar, located below the webcaster, acts as your command center, providing quick access to essential functions (from left to right):

- **Camera On/Off**: Toggle your camera.
- **Audio On/Off**: Control your audio input.
- **Start/Stop Streaming**: Initiate or conclude your live stream.
- **Settings**: Access detailed customization options.
- **Playout Link**: Quickly retrieve the link to share your live stream.

### Settings

Tailor your streaming experience with the nanoStream Webcaster settings, accessible when you are not actively streaming.

1. **Video Source**: Choose between video feed from your camera or screen sharing. If you opt for screen sharing, a dedicated dialog will appear upon application of changes, allowing you to select the specific screen. Should you wish to switch to a different window, revisit the settings, click on screenshare again, and apply changes.

2. **Video Quality**: Adjust the maximum video bitrate, resolution, and framerate according to your preferences. Fine-tune these settings to achieve the desired balance between video quality and bandwidth efficiency.

3. **Audio Configuration**: Select your preferred audio input device and set the maximum bitrate to ensure optimal audio quality during your stream.

### Webcaster Statistics

The statistics section provides crucial information, including *Packet Loss* (Packetloss) and *Round-Trip Time* (RTT). Packet Loss is a vital metric for checking stream health, while RTT offers insights into stream performance and responsiveness.


## Ingesting with a separate live encoder software or hardware

1. Configure your preferred live encoder software or hardware, such as OBS or Wirecast, according to the setup instructions.
2. Obtain the necessary **RTMP stream details (stream name and URL)** from the **Ingest** section on the **Stream Overivew** or **[Easy Instructions to your live stream](#easy-instructions-to-your-live-stream)**.
3. Enter the **RTMP stream details** into your live encoder settings.
4. Start the live stream from your encoder to begin sending the video feed to nanoStream Cloud.

:::info Additional Resources
- Read more about [how to use OBS for Low Latency Live Encoding to nanoStream Cloud](https://www.nanocosmos.de/blog/2019/03/how-to-use-obs-for-low-latency-live-encoding-to-nanostream-cloud/).
- Find also [instructions how to use Wirecast with nanoStream Cloud](https://www.nanocosmos.de/blog/2020/12/how-to-use-wirecast-with-nanostream-cloud-for-ultra-low-latency-live-streaming/) in our blog.
:::
