---
id: Dashboard_Overview
title: Overview
sidebar_label: Overview
---

The nanoStream Cloud Dashboard is a web-based tool implemented and designed to provide users with an intuitive and comprehensive overview of their streaming activities. It serves as a centralized hub to monitor and manage the users live video streaming workflow.

The intended audience of the nanoStream Cloud Dashboard includes streaming professionals, broadcasters, content creators, and anyone involved in managing live video streaming services. It caters to both technical and non-technical users, offering a user-friendly interface with visualizations and clear introductions to start a live stream, monitor the settings and generate source codes to get the nanoPlayer work on any webpage.

## Key features

1. **Compact organization overview**: The dashboard provides a concise and comprehensive overview of your organization's streaming activities, giving you a clear understanding of your streaming infrastructure and workflows at a glance.
2. **Intuitive stream creation**: Creating and customizing new streams is made easy and intuitive through the dashboard's user-friendly interface. You can quickly set up and configure your streams according to your specific requirements.
3. **Adaptive bitrate transcoding**: The dashboard allows you to create transcoded streams with adaptive bitrate support. This ensures that your streams can dynamically adjust their quality based on viewers' network conditions, delivering optimal playback experience across various devices and network connections.
4. **Secured stream playback**: You can create secured streams with jwt-token-based security for playback. This feature enables you to protect your streams and control access to them, ensuring that only authorized users can view your content.
5. **Stream overview and playback**: The dashboard provides a convenient stream overview, allowing you to monitor your streams and watch their playback immediately. This real-time access enables you to verify the quality of your streams and ensure they are functioning as expected.
6. **Easy playout steps**: From ingest to playout, the dashboard simplifies the streaming workflow by providing easy-to-follow steps. You can seamlessly manage the entire process, from capturing your content to broadcasting it to your audience.
7. **Embeddable code snippets**: The dashboard offers code snippets that you can easily embed on your own web pages. This allows you to integrate your streams into your website or application effortlessly, providing a seamless viewing experience for your audience.

## Authentication

To authenticate on the nanoStream Cloud Dashboard, you can either sign in with your existing account or sign up for a new account.

> [Click here](https://dashboard.nanostream.cloud/auth) to authenticate.

### Sign In

1. Enter the email address associated with your existing nanoStream Cloud Dashboard account.
2. Enter your password in the provided password field. Make sure to type it accurately, as passwords are case-sensitive.
3. If the entered credentials are correct, you will be successfully logged in to your nanoStream Cloud Dashboard account. You can now access and manage your streaming workflows.

![Screenshot: Authentication Login](../assets/cloud-frontend/cf-signin.png)
*Screenshot: Authentication Login*

### Sign Up

1. Fill in the required information, including your email address, company name, and a password of your choice.
2. Double-check the entered information for accuracy, ensuring that your email address is valid.
3. If all the information is successfully validated, your account will be created, and you will be logged in automatically. You can now log in to the dashboard and begin managing your streaming workflows using the dashboard's features.

![Screenshot: Authentication Sign Up](../assets/cloud-frontend/cf-signup.png)
*Screenshot: Authentication Sign Up*

If you can see the trial flag in the header, it means that you are currently in trial mode with certain limitations. To unlock the full features and capabilities, we encourage you to get in touch with us or use the „Upgrade to Premium" Button.

![Screenhot: Trial Flag and Upgrade to Premium](../assets/cloud-frontend/cf-trial.jpg)
*Screenhot: Trial Flag and Upgrade to Premium*

:::info Contact Us
[Click here](https://www.nanocosmos.de/contact) for this and enjoy the complete benefits of our service.
:::

## Dashboard

The Dashboard page of the nanoStream Cloud Dashboard provides a summary of your streaming activities. It includes the count of all streams, ended streams, created streams, live streams, and deleted streams. Additionally, it displays the details of your latest 5 streams. 

Furthermore, it displays the number of alerts, provides an insight into the health status of your live streams, and aggregates the total usage of your streaming traffic. This consolidated view ensures you're always informed and can make data-driven decisions regarding your streams.


> [Click here](https://dashboard.nanostream.cloud/) to see the dashboard.

![Screenshot: Dashboard Overview](../assets/cloud-frontend/cf-dashboard.png)
*Screenshot: Dashboard Overview*

## All Streams

The "All Streams" section provides a comprehensive list of your streams, displaying their state (created, live, ended), stream ID, stream name, whether they are part of a stream group, and their last update timestamp. Additionally, the presence of tags allows for easier stream identification.


> [Click here](https://dashboard.nanostream.cloud/stream) to see all streams of your organisation.

![Screenshot: All Streams Overview](../assets/cloud-frontend/cf-all-streams.jpg)
*Screenshot: All Streams Overview*

If a stream belongs to a stream group, you have the option to collapse the row and view the individual streams within the group, such as passthrough, first transcode, and second transcode.

![Screenhot: Collapsed Streamgroup](../assets/cloud-frontend/cf-streamgroup.jpg)
*Screenhot: Collapsed Streamgroup*

To streamline your search, you can utilize various filters such as selecting a date range to view specific streams, filtering streams by tags, or filtering by state.

![Screenshot: Filter](../assets/cloud-frontend/cf-filter.png)
*Screenshot: Filter*

These features enable you to efficiently manage and navigate through your streams, providing a clear and organized overview of your streaming content within the nanoStream Cloud Dashboard.

## Search for a stream

To locate a specific stream within the platform, follow these steps:

1. Click on the search icon, accessible from every dialog you are in, located in the top right corner of the app bar.
2. Enter the precise stream name or stream ID into the search bar. It's essential to input this information accurately and in a case-sensitive manner.
3. Execute the search.

:::caution Please note
Accuracy is crucial. Even a slight deviation, typo, or missing character in your input can result in a "not found" outcome. Ensure you've entered the details correctly to obtain the desired results.
:::

## Stream Creation

:::tip Detailed Instructions
For a detailed introduction to the creation of streams and the features explained in depth, as well as more related content, visit the [Start Streaming Page](Dashboard_Start_Streaming).
:::

The nanoStream Cloud Dashboard offers a straightforward process for creating a new stream with various customization options. 

> [Click here ](https://dashboard.nanostream.cloud/stream/create)to create a stream.

Here's a quick breakdown how you can do it:

1. Access the nanoStream Cloud Dashboard and navigate to the stream creation section.
2. You have the option to add stream tags. You can either manually enter tags or choose from your existing ones, making it easier to categorize and identify your streams.
3. For enhanced streaming quality, you have the option to configure transcoding profiles. You can define up to three profiles that enable Adaptive Bitrate (ABR) streaming. These profiles provide multiple quality versions of the stream, ensuring optimal playback across different network conditions.
4. The dashboard also offers the addition of features like `timecode` and `thumbnails`.
5. After customizing your stream with tags, transcoding profiles, and any additional features, click on create  and create the new stream.

![Screenshot: Create Stream](../assets/cloud-frontend/cf-create.jpg)
*Screenshot: Create Stream*

By following these steps, you can create a new stream using the nanoStream Cloud Dashboard, assign tags for easy identification, configure transcoding profiles for Adaptive Bitrate streaming, and optionally activate advanced features like timecodes and live processing.

In order to send a live stream to the nanoStream Cloud, you will require a Live Encoder. This can be accomplished using industry-standard software like OBS, dedicated hardware encoders, or even a web page equipped with the [nanoStream Webcaster.](https://docs.nanocosmos.de/docs/webrtc/nanostream_webrtc_introduction)

## Instructions to start a stream

To initiate a stream using the nanoStream Cloud Dashboard, you can access the "Instructions to start a stream" page either after creating a stream or through the regular stream overview page. This page provides you with all the information required to begin streaming, including the necessary steps and details for a seamless setup.

On this page, you'll find all the essential information required to begin your stream. The information is presented in three sections:

1. **Start the Ingest**: Here, you'll find the ingest details, including the RTMP stream name and RTMP URL. To easily copy these details, simply click on the copy icon provided at the end of the row.
2. **Access the Web Playout**: In this section, you'll discover the live playout URL. Clicking on it will also reveal a code snippet. This code snippet contains everything you need to embed the H5Live Player with your stream onto your web page.
> Additionally, the dashboard offers the `secure` option (if enabled) to generate a playback token. During your logged-in session, you have a jwt token that is valid for the whole organisation and lets you watch every stream. Alternatively, you can create a new stream JWT token with an expiration date. This token can be valid for the entire organization, specific stream groups, or individual stream names. You can specify options such as "not before" date, client IP, domain, user ID, or a single tag for added security and control. Contact us [here](https://www.nanocosmos.de/contact) to enable the `secure` feature for you!
3. **Stream Overvie**w: This section provides a link to the stream's overview page. By clicking on the URL, you can access the complete stream overview, which includes various other relevant details.

![Screenshot: Easy Instructions to the live stream](../assets/cloud-frontend/cf-instructions.jpg)
*Screenshot: Easy Instructions to the live stream*

By following these instructions, you can start your stream smoothly, access playout options, generate playback tokens with specific configurations, and embed the nanoStream H5Live Player on your webpage using the provided code snippets or iFrame tag.

## Stream Overview

The stream overview provides a comprehensive view of your streams and their associated details. This section serves as a central hub where you can access important information about your stream.

![Screenshot: Stream Overview](../assets/cloud-frontend/cf-overview.jpg)
*Screenshot: Stream Overview*

1. **Detailed Stream View**
   - View the unique stream ID, its current state (live, created, ended), date of creation, its association with a stream group, and the number of associated playouts. Determine if the stream is secure.
2. **Stream Group Details**:
   - Understand your stream group with its ID and the last update timestamp. You have the option to activate the time code interval and thumbnails. If activated, the chosen intervals are displayed.
3. **Adaptive Bitrate (ABR) Stream Overview**:
   - Navigate between tabs for a comprehensive view of individual streams within a stream group.
   - Details include each stream's ABR profile quality, ID, tags, push URL, and name. You can edit the tags and push URL for each profile. Additionally, profiles can be [added](./Dashboard_ABR_Transcoding#transform-a-non-transcoding-stream-into-an-abr-stream), [edited](./Dashboard_ABR_Transcoding#edit-profiles), or [removed](Dashboard_ABR_Transcoding#delete-profiles).
4. **Thumbnails**:
   - If activated, view the thumbnail of your stream generated based on the chosen interval during activation.
5. **Ingest Section**:
   - Access the RTMP ingest stream name and URL for easy integration with your streaming source.
6. **Secure JWT Token Creation** (if enabled):
   - Generate secure JWT tokens for enhanced stream access control when this feature is activated.
7. **H5Live Playout**:
   - View the live playout URL, enabling real-time streaming for viewers. For embedding the nanoStream H5Live Player on a website, an iframe embed URL is available for integration.
8. **Codes for Nanoplayer Integration**:
   - Use the provided code snippets, such as the iframe embed tag or the HTML nanoStream H5Live code, to embed the nanoStream H5Live Player effortlessly on your website.
9. **RTMP Playout Stream**:
   - Retrieve the RTMP playout stream name and URL for broader distribution or integration into other platforms.
10. **Stream Management (Delete, Lock)**:
      - Manage your streams effectively with options to delete, lock, or unlock them for ingest purposes.

   
## nanoPlayer

The nanoPlayer in the Cloud Dashboard plays all your streams and lets you access important player settings and statistics:

![Screenshot: nanoPlayer](../assets/cloud-frontend/cf-player.jpg)
*Screenshot: nanoPlayer*

1. **Playing Stream with ID**:
   - Identify and play a specific stream by referencing its unique stream ID.
2. **Stream State and Information**:
   - Quickly assess the state of the stream (live, created, ended).
   - View the player version, date of creation, and whether the stream supports adaptive bitrate (ABR).
1. **nanoPlayer**
4. **Player Settings and Statistics**:
   - The player interface is divided into two sections: player settings and player statistics.
       - **Player Statistics**:
         - Monitor the state of the player, latency, framerate, and bitrate.
      - **Player Settings**:
         - Adjust stream quality based on the available profiles you have set up.
         - Choose between automatic or manual quality selection.
         - Fine-tune latency control with options such as classic, balanced adaptive, and fast adaptive.
5. **Playout URLs and Embedding Options**:
   - Access playout URLs to view the stream directly.
   - Utilize the iframe embed URL to seamlessly integrate the nanoPlayer into any webpage.
6. **Code Snippets for NanoPlayer Integration**:
   - Simplify the integration process by using provided code snippets, such as an iframe embed tag or a nanoStream H5Live code snippet, to seamlessly embed the nanoPlayer onto your webpage.

## Metrics

The nanoStream Cloud Dashboard seamlessly integrates with our Analytics API. This connection allows users to harness detailed insights and statistical data, offering a more comprehensive view of their streaming activities directly from the dashboard. Leveraging these analytics can greatly enhance the management and understanding of your streaming operations.

> [Click here](https://dashboard.nanostream.cloud/metrics) to check your traffic.

:::tip Learn More
Visit our dedicated [metrics documentation](./Dashboard_Metrics) for a detailed understanding of alerts and how to use them in the nanoStream Cloud Dashboard.
:::

![Screenshot: Metrics Overview](../assets/cloud-frontend/cf-metrics.jpg)
*Screenshot: Metrics Overview*

## Alerts and Advices

The Alerts and Advices page in the nanoStream Cloud Dashboard offers an in-depth perspective on the performance and potential issues of your streams. By monitoring real-time feedback, you can gain transparent insights into the current live stream performance, identify potential causes, and explore suggested solutions.

> [Click here](https://dashboard.nanostream.cloud/alerts) to explore them.

Alerting focuses on real-time notifications about performance, stability, and technical challenges, guiding you toward immediate remedies for a better streaming experience. Metrics, on the other hand, provide a detailed analysis of stream data, helping you understand usage patterns, viewer engagement, and other valuable metrics.

:::tip Learn More
Visit our dedicated [alerts documentation](./Dashboard_Alerting) for a detailed understanding of alerts and how to use them in the nanoStream Cloud Dashboard.
:::

![Screenshot: Alerts and Advices Overview](../assets/cloud-frontend/cf-alerts-page.png)
*Screenshot: Alerts and Advices Overview*

## Organisation Area

- **Organisation Overview**: Provides essential information about your organization, including the organization name, access to a pre-filled support form, and an overview of enabled features within the nanoStream Cloud. Also: Organisation Hash, Player Metrics, Support Level.
- **API Access**: API Key and Player Key: Important credentials for API access. Remember to keep them private and secure.
- **Manage Users**: Invite new users and gain an overview of existing users associated with your organization. Additionally, you have the ability to delete user accounts when necessary.

![orga.jpeg](../assets/cloud-frontend/cf-orga.jpg)
*Screenshot: Organisation Overview*

> [Click here](https://dashboard.nanostream.cloud/organisation) to see the organisation area.

## Help Center, About

The Help Center page offers comprehensive support for implementing various functionalities within the nanoStream Cloud. It includes rich documentation to find answers to your questions, a section to explore useful resources related to different topics in the nanoStream Cloud, a dedicated "Getting Started" guide, and a convenient "Get Support" button to contact the support team for further assistance.

> [Click here](https://dashboard.nanostream.cloud/support) to visit the Help Center.

![Screenshot: Help Center](../assets/cloud-frontend/cf-help.png)
*Screenshot: Help Center*

On the About page are various informations provided such as access to social media channels, appearance customization options (light mode, dark mode, system preference), and the ability to view the current version of the platform.

> [Click here](https://dashboard.nanostream.cloud/about) to learn more about nanoStream Cloud.

![Screenshot: About](../assets/cloud-frontend/cf-about.png)
*Screenshot: About*

