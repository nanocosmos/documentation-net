---
id: live_captions_retrieve
title: Retrieve Live Captions in Your Playback System
sidebar_label: Retrieve Captions
---

Implement the following steps to **connect, authenticate, and display live captions** provided by our transcription service in your web player or application.

:::tip Further information
Before integrating Live Captions, we recommend reviewing the main **Live Captions** documentation for background, concepts, and configuration details:
- **[Overview](/docs/cloud/live_captions#overview)**; What Live Captions are and typical use cases
- **[How It Works](/docs/cloud/live_captions#how-it-works)**
- **[ASR Engines and Languages](/docs/cloud/live_captions#asr-engines-and-langauges)**: Available engines, supported languages, and translation options
- **[Managing Live Captions](/docs/cloud/live_captions#managing-live-captions)**: How to configure captions via Dashboard or API
- **[Live Captions in the Dashboard](/docs/dashboard/live_captions)**: Screenshots and workflows that break down the configuration and management in the dashboard in detail. 

These sections explain prerequisites, security requirements, language setup, and stream configuration needed before retrieving and displaying live captions in your player.
:::


## Choose your integration method

<article className="margin-vert--lg">
  <Columns className="list_ZO3j">
    <Card className="col col--6 margin-horiz--md" href="#embed-player-with-captions">
      <Card.Header title="Quick start: Embed player with captions" />
      <Card.Body>This method allows you to embed a player with captions directly into your web page or application by using an `<iframe>` element. It doesn't require any additional changes to your page, everything is configurable via URL query parameters.</Card.Body>
    </Card>
    <Card className="col col--6 margin-horiz--md" href="#custom-integration">
      <Card.Header title="Build a custom integration" />
      <Card.Body>This method allows you to integrate live captions into your web player or application by using the <b>nanoStream Messenger</b> JavaScript library. It provides a flexible way to customize the caption display and integrate it with your existing player.</Card.Body>
    </Card>
  </Columns>
</article>

## Embed player with captions

To embed a player with Live Captions into your website or application, nanoStream provides a ready-to-use **iframe-based player**, which you can use as a starting point before reaching for your own custom implementation. Live Captions are enabled by passing specific parameters in the player URL.

You can either **assemble these parameters manually** (for API-driven or custom workflows) or **retrieve them directly from the Dashboard**, where all required values and ready-to-use code snippets are available.

| Manual / API-based Setup | Dashboard-assisted Setup |
|--------------------------|--------------------------|
**This approach is recommended if you**:<br/>- Generate streams dynamically via API<br/>- Build your own embedding logic<br/>In this case, you manually assemble the iframe URL using the parameters described below. | **The Dashboard provides full visual access to all required information**:<br/>- Create and configure streams<br/>- Enable and preview Live Captions<br/>- Switch caption languages<br/>- Generate secure tokens<br/>- Copy ready-to-use iframe and HTML snippets<br/>This allows you to embed Live Captions without manually constructing any parameters. |

:::tip Live Captions in the nanoStream Dashboard
You can find a detailed guide on how to enable, edit, and monitor live captions in the nanoStream dashboard here: [Live Captions](/docs/dashboard/live_captions)
:::

### Required URL + Parameters

The base embed URL is: \
`https://bintu-nmessenger.nanostream.cloud/client/embed/nanoplayer.html`

The following table explains all parameters needed to enable live captions, including their purpose and example values:

| Parameter | Description | Example |
|----------|-------------|---------|
| `group.apiurl` | Base API URL of your bintu instance | `https://bintu.nanocosmos.de` |
| `group.id` | Stream ID or stream name of the video stream | `XXXXX-YYYYY` |
| `caption.channel` | Caption channel identifier, assembled as `STREAMNAME-SOURCE_LANG-TARGET_LANG` | `XXXXX-YYYYY-en-en` |
| `caption.token` | JWT token that authorizes access to the captions stream. **Required for secure streams only.** | `eyJhbGciOiJIUzI1NiIsInR5cCI6...` |
| `group.security.jwtoken` | JWT token for secure video playback. **Required for secure streams only.** | `eyJhbGciOiJIUzI1NiIsInR5cCI6...` |

For **secure streams**, the **same JWT token is used** for both video playback (`group.security.jwtoken`) and captions delivery (`caption.token`). All restrictions configured in the token (stream name, stream group, domain, expiration time, etc.) apply to both. For **non-secure streams**, these parameters can be omitted.

:::danger Security best practice (secure streams)
When using secure playback, generate JWTs server-side and use short-lived tokens.
Avoid hard-coding long-lived tokens in public code or your playback system.
:::

:::tip Creating and Managing Security Tokens
Security tokens can be generated either programmatically or directly in the Dashboard. In the Dashboard, each stream provides **inline token creation dialogs**, allowing you to quickly generate and apply secure tokens without leaving the UI.

You can access the inline token creation dialog in the dashboard under the Live Captions Player: [`dashboard.nanostream.cloud/stream/YOUR-STREAM-ID/live-captions`](https://dashboard.nanostream.cloud/stream/YOUR-STREAM-ID//live-captions)

![Screenshot: Secure Token Creation Dialog in Live Captions Overview](../assets/dashboard/secure-token-dialog-live-captions.png)
*Screenshot: Secure Token Creation Dialog in Live Captions Overview*

Find more information about the security token and how to generate it here: [Secure Playback & Secure Token](../dashboard/secure_playback)
:::

### Caption Channel Format

The `caption.channel` parameter defines which caption stream the player should load.
It uniquely identifies the captions by combining the **stream name/stream ID** with the selected **source** and **target languages**.

The format is: `STREAMNAME-SOURCE_LANGUAGE-TARGET_LANGUAGE`

| Element | Description | Example |
|--------|-------------|---------|
| `STREAMNAME-SOURCE` | Stream name or stream ID used for ingestion and playback | `XXXXX-YYYYY` |
| `SOURCE_LANGUAGE` | Unique ID of the language spoken in the incoming audio | English: `en` |
| `TARGET_LANGUAGE` | Unique ID of the language displayed as captions | German: `de` |

**Resulting caption channel:** `XXXXX-YYYYY-en-de`

:::warning Multiple Caption Channels
If multiple target languages are configured for the stream, each language has its own caption channel.  
Each caption language is addressed using its own `caption.channel` value.
:::

:::info Language codes
Language identifiers must follow the supported ASR language codes (e.g. `en`, `en-US`, `de`, `fr`, `es-419`).  
Make sure the selected source and target languages exactly match the configuration of your Live Captions setup. \
A complete list of supported languages and their IDs is available here: [Supported Languages](/docs/cloud/live_captions#supported-languages)
:::

### iframe-based Live Captions Player

The code snippet below demonstrates how to embed the live captions into your web page or application using an `<iframe>` element:

```html
<iframe
  src="https://bintu-nmessenger.nanostream.cloud/client/embed/nanoplayer.html?group.id=<STREAM_ID_OR_NAME>&caption.channel=<CAPTION_CHANNEL>&caption.token=<SECURITY_TOKEN>&group.security.jwtoken=<SECURITY_TOKEN>"
  width="100%"
  height="720"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Replace `<STREAM_ID_OR_NAME>`, `<CAPTION_CHANNEL>`, and `<SECURITY_TOKEN>` with your actual values.

<details>

<summary>Example with real data of a demo stream</summary>

:::warning
The token included in the example expires on 2026-12-08.
:::

```html
<iframe
  src="https://bintu-nmessenger.nanostream.cloud/client/embed/nanoplayer.html?group.id=nNCcf-ZexY6&caption.channel=nNCcf-ZexY6-de-de&caption.token=eyJhbGciOiJFZERTQSIsImtpZCI6Im5hbm9feDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzcGxheSIsImV4cCI6MTc5NjczMDg0MSwiaWF0IjoxNzY1MTk4NDkzLCJpc3MiOiJuYW5vY29zbW9zIiwibmJmIjoxNzY1MTk4NDkzLCJzdHJlYW1zIjpbIm5OQ2NmLVpleFk2Il0sInN1YiI6IjU4ODYyNTFjLTJmM2UtNGQ3YS1hYWQ4LWQ3YWU1ZDBhNTdhMCJ9._EFR028lTwF2wt1F46LU4byJiWNb3qmuDJkS9Z_Yf2lEn0a9lUWXytZR05P3tbg_wtohyu9N9clTRxT8tYxqDA&group.security.jwtoken=eyJhbGciOiJFZERTQSIsImtpZCI6Im5hbm9feDI1NTE5IiwidHlwIjoiSldUIn0.eyJhdWQiOiJzcGxheSIsImV4cCI6MTc5NjczMDg0MSwiaWF0IjoxNzY1MTk4NDkzLCJpc3MiOiJuYW5vY29zbW9zIiwibmJmIjoxNzY1MTk4NDkzLCJzdHJlYW1zIjpbIm5OQ2NmLVpleFk2Il0sInN1YiI6IjU4ODYyNTFjLTJmM2UtNGQ3YS1hYWQ4LWQ3YWU1ZDBhNTdhMCJ9._EFR028lTwF2wt1F46LU4byJiWNb3qmuDJkS9Z_Yf2lEn0a9lUWXytZR05P3tbg_wtohyu9N9clTRxT8tYxqDA"
  width="100%"
  height="720"
  frameborder="0"
  allowfullscreen>
</iframe>
```

</details>

### iframe for Non-Secure Streams

For **non-secure streams**, you can omit the token parameters. Only `group.id` and `caption.channel` are required:

```html
<iframe
  src="https://bintu-nmessenger.nanostream.cloud/client/embed/nanoplayer.html?group.id=<STREAM_ID_OR_NAME>&caption.channel=<CAPTION_CHANNEL>"
  width="100%"
  height="720"
  frameborder="0"
  allowfullscreen>
</iframe>
```

Replace `<STREAM_ID_OR_NAME>` and `<CAPTION_CHANNEL>` with your actual values.

### Overview in the Dashboard

You can access **Live Captions** playout URLs and code snippets in several dashboard locations:

- **Stream Overview:** [dashboard.nanostream.cloud/stream/YOUR-STREAM-ID](https://dashboard.nanostream.cloud/stream/YOUR-STREAM-ID)
- **New Stream Instructions:** [dashboard.nanostream.cloud/stream/new/YOUR-STREAM-ID](https://dashboard.nanostream.cloud/stream/new/YOUR-STREAM-ID)
- **Playout Overview:** [dashboard.nanostream.cloud/playout/YOUR-STREAM-ID](https://dashboard.nanostream.cloud/playout/YOUR-STREAM-ID)
- **Webcaster Overview:** [dashboard.nanostream.cloud/webcaster/YOUR-STREAM-ID](https://dashboard.nanostream.cloud/webcaster/YOUR-STREAM-ID)

In all these areas (except **New Stream Instructions**), you’ll find a dedicated **Live Captions tab**, which includes:

- **Live Captions Player**.
- **Language selector** below the player to switch between enabled target languages.
- Current **engine**, **source language**, and **target language(s)**.
- Options to **add**, **edit**, or **remove** captions.
- **Secure Playback Token** with decoded informations.
- **Captions Playout** URLs for each target language.

![Screenshot: Live Captions Overview Tab](../assets/dashboard/live-captions-tab.png)
*Screenshot: Live Captions Overview Tab*

### What happens automatically

Once you've created or copied your `iframe` URL with the parameters above and integrated it into your web page or application, you're ready to enjoy live captions! The captions will automatically appear over your video stream, no additional code or configuration is needed:

- [x] Connection to caption server is established
- [x] Captions appear as text overlay at the bottom of the video
- [x] Captions update in real-time as transcription happens
- [x] Reconnection is handled automatically if connection drops

## Custom integration

This section provides instructions for integrating live captions into your **custom player or application**.

To integrate the captions, we'll use the **nanoStream Messenger** JavaScript library, which establishes a WebSocket connection to the caption service and automatically delivers transcription results to a target HTML element that acts as your caption overlay.

### 1. Load the Caption Library

Include the [nanoStream Messenger](https://bintu-nmessenger.nanostream.cloud/nmessenger.js) JavaScript library in your HTML page or application:

```html
<script src="https://bintu-nmessenger.nanostream.cloud/client/nmessenger.js"></script>
```

:::warning Initialization order
Make sure the script tag loads **before** you try to access `NanoMessenger` in your code. The safest approach is to initialize the client inside a `DOMContentLoaded` event listener in a separate script tag:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Your caption initialization code here
  const messenger = new NanoMessenger(/* ... */);
});
```
:::

This library handles:
- Establishing the WebSocket connection
- Receiving the caption messages
- Writing text into the configured overlay element and
- automatic reconnection

### 2. Create a Caption Overlay

Add a container element (e.g. `<div>`) that will receive and display the live captions:

```html
<div id="caption-text" class="overlay-text"></div>
```

This element will act as the **target container** for all incoming live captions.

#### 2.1 Optional styling
You can freely style the caption overlay to match your UI design. \
The example below positions the captions at the bottom of the player with a semi-transparent background:

```html
<style>
  .overlay-text {
    position: absolute;
    left: 0; right: 0; bottom: 5%;
    margin: 0 auto;
    padding: 0.5rem 0.75rem;
    max-width: 80%;
    font-family: system-ui, sans-serif;
    font-size: 1rem;
    line-height: 1.4;
    text-align: center;
    background: rgba(0,0,0,0.55);
    color: #fff;
    border-radius: 6px;
    pointer-events: none;
    z-index: 9999;
  }
</style>
```

:::tip Good to know
- `position: absolute`: Allows the overlay to float above the video
- `pointer-events: none`: prevents captions from blocking player controls
- `z-index: 9999`: ensures the captions stay above the player UI
:::

### 3. Initialize the Messenger Client
After loading the library and defining the overlay element, create a new `NanoMessenger` instance and connect it with your caption channel and secure token:

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Step 1: Create the messenger client
  const messenger = new NanoMessenger(
    "bintu-nmessenger.nanostream.cloud", // server
    443,                                                 // port
    { overlayDiv: "caption-text" }                       // options
  );

  // Step 2: Connect to your caption channel
  // For secure streams, pass your JWT token.
  // For non-secure streams, pass null.
  const captionToken = "your-caption-token"; // or null for non-secure streams

  messenger.connect(
    captionToken,              // authentication token (JWT or null)
    null,                      // user (optional)
    "your-caption-channel",    // caption channel ID
    () => {                    // on success callback
      console.log("Captions connected");
    },
    (error) => {               // on error callback
      console.error("Caption connection failed:", error);
    }
  );
});
```

#### Parameter Reference (Messenger Client)

The following table explains all values used when initializing the NanoMessenger client and connecting to the caption channel.

| Parameter / Option | Where used | Description | Example |
|--------------------|------------|-------------|---------|
| Server | `new NanoMessenger(server, port, options)` | Hostname of the caption delivery service | `bintu-nmessenger.autodevops-prod.nanostream.cloud` |
| Port | `new NanoMessenger(server, port, options)` | Secure WebSocket port (always HTTPS/WSS) | `443` |
| overlayDiv | `options.overlayDiv` | ID of the HTML element that will receive and display the captions, as initialized [here](#2-create-a-caption-overlay). **Make sure they match**. | `"caption-text"` |
| your-caption-token | `messenger.connect(token, ...)` | JWT token authorizing access to the caption stream. **Required for secure streams.** Pass `null` for non-secure streams. | `eyJhbGciOiJIUzI1NiIsInR5cCI6...` |
| user | `messenger.connect(token, ...)` | Optional user identifier (not required for captions) | `null` |
| your-caption-channel | `messenger.connect(token, ...)` | Caption channel identifier (`STREAMNAME-SOURCE_LANG-TARGET_LANG`) | `XXXXX-YYYYY-en-en` |

:::warning Matching IDs
The overlay element must already exist in the DOM before the `NanoMessenger` client is initialized.
If the ID does not match, captions will be received but not displayed.
:::

:::danger Security best practice (secure streams)
When using secure playback, generate JWTs server-side and use short-lived tokens.
Avoid hard-coding long-lived tokens in public code or your playback system.
:::

### 4. Display Captions
Once connected, the Messenger library automatically writes incoming captions into the target element.

When a caption like `"Hello world"` arrives, your HTML will automatically update:

```html
<div id="caption-text">Hello world</div>
```

No additional code needed &mdash; the library manages everything.

### What happens automatically

With the above integration steps completed, you're ready to receive the live captions from your stream: 

- [x] Connection to caption server is established
- [x] Captions appear in the specified target element
- [x] Captions update in real-time as transcription happens
- [x] Reconnection is handled automatically if connection drops

### Use the Reference Implementation (Optional)

If you prefer a ready-to-use solution:

- Use the iframe caption player provided as a reference implementation or embed the example HTML snippet in your system.
- If you want a custom UI, you can still use the same Messenger library &mdash; just style the overlay `<div>` as you like.

That’s it &mdash; load the library, create an overlay, initialize Messenger with channel and token (or `null` for non-secure streams), and captions will appear.

The `receive-captions.html` example below demonstrates how to use the reference implementation. It uses the same URL query parameters as the iframe caption player described in the [Embed player with captions](#embed-player-with-captions) section.

 :::tip
 For a complete end-to-end example, see this [interactive CodePen](https://codepen.io/pen?template=jEqXyrN) that integrates our [nanoStream H5Live Player (nanoPlayer)](../nanoplayer/nanoplayer_introduction) with live stream captions delivered via NanoMessenger.
 :::

<details>
<summary>See receive-captions.html</summary>

 ```html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Your player</title>
    <link rel="stylesheet" href="https://bintu-nmessenger.nanostream.cloud/client/nmessenger.css" />
    <style>
      html,
      body {
        height: 100%;
        margin: 0;
        font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      }
      #playerDiv {
        width: 100vw;
        height: 100vh;
        position: relative;
        background: #000;
      }
      /* Messenger target div */
      #captionText {
        display: inline-block;
        padding: 10px 16px;
        border-radius: 12px;
        background: rgba(0, 0, 0, 0.55);
        color: #fff;
        font-size: 20px;
        font-weight: 500;
        line-height: 1.4;
        max-width: 80%;
        word-break: break-word;
        -webkit-backdrop-filter: blur(6px);
        backdrop-filter: blur(6px);
      }
    </style>
  </head>
  <body>
    <div id="playerDiv">
      <!-- nmessenger writes messages here -->
      <div class="overlayText">
        <div id="captionText" aria-live="polite" role="log"></div>
      </div>
    </div>
    <script src="https://bintu-nmessenger.nanostream.cloud/client/nmessenger.js"></script>
    <script>
      function nmessengerMain(options = {}) {
        const CAPTION_SERVER = "bintu-nmessenger.autodevops-prod.nanostream.cloud";
        const CAPTION_PORT = 443;
        const params = new URLSearchParams(window.location.search);
        const channel = params.get("caption.channel");
        if (!channel) {
          console.info("caption.channel not specified. Not initializing caption.");
          return;
        }
        const token = params.get("caption.token");
        messenger = new NanoMessenger(CAPTION_SERVER, CAPTION_PORT, options);
        messenger.connect(
          token,
          null,
          channel,
          () => {
            console.info("connect success");
            messenger.receiveMessage({ user: "system", text: "<receiving messages>" });
          },
          (err) => {
            console.error("Error:", err);
            messenger.receiveMessage({ user: "system", text: "Connection error" });
          }
        );
      }
      document.addEventListener("DOMContentLoaded", function () {
        const captionOptions = {
          overlayDiv: "captionText",
        };
        nmessengerMain(captionOptions);
      });
    </script>
  </body>
</html>
```

</details>

## Troubleshooting

### Captions not appearing

If captions do not appear in the player or custom overlay, check the following:

1. **Is the caption channel correct?**
   - Verify that `caption.channel` (iframe) or `your-caption-channel` (custom integration) exactly matches the configured channel ID
   - Format must be: `STREAMNAME-SOURCE_LANGUAGE-TARGET_LANGUAGE`
   - Channel values are case-sensitive
   :::tip Learn more
   Learn more how the Caption Channel is assembled here: [Caption Channel Format](#caption-channel-format).
   :::
2. **Is the token valid? (secure streams only)**
   - If you are using **non-secure streams**, tokens are not required — you can skip this step
   - JWT tokens expire &mdash; check if your token is still valid
   - Tokens are case-sensitive
   - In case of [Embed player method](#embed-player-with-captions): check if the token is passed in both `caption.token` and `group.security.jwtoken` (and are matching)
   :::tip Creating and Managing Security Tokens
   Security tokens can be generated either programmatically or directly in the Dashboard. In the Dashboard, each stream provides **inline token creation dialogs**, allowing you to quickly generate and apply secure tokens without leaving the UI.
   
   You can access the inline token creation dialog in the dashboard under the Live Captions Player: [`dashboard.nanostream.cloud/stream/YOUR-STREAM-ID/live-captions`](https://dashboard.nanostream.cloud/stream/YOUR-STREAM-ID//live-captions)
   
   ![Screenshot: Secure Token Creation Dialog in Live Captions Overview](../assets/dashboard/secure-token-dialog-live-captions.png)
   *Screenshot: Secure Token Creation Dialog in Live Captions Overview*
   
   Find more information about the security token and how to generate it here: [Secure Playback & Secure Token](../dashboard/secure_playback)
   :::

3. **Is the overlay element present?**
   - For custom integration: Verify the element with ID `caption-text` (or your custom ID) exists in your HTML (Read more about the creation [here](#2-create-a-caption-overlay).)

4. **Check browser console**
   - Open browser developer tools (F12) and check for error messages

---

### Connection keeps dropping

The automatically reconnect feature is enabled by default, you don't need to do anything.
If captions disconnect frequently:

1. **Check network connectivity** - Test your internet connection
2. **Verify server availability** - Contact support if the issue persists

---

### "NanoMessenger is not defined" error

**For custom integration only:**

This means you're trying to use the library before it has loaded. Make sure you initialize inside `DOMContentLoaded`:

```javascript
// ✅ Correct
document.addEventListener("DOMContentLoaded", function() {
  const messenger = new NanoMessenger(...);
});

// ❌ Incorrect - runs before library loads
const messenger = new NanoMessenger(...);
```

## Getting Help

If you encounter issues:

1. Check the [troubleshooting](#troubleshooting) section above
2. Verify all parameters (channel ID, tokens, stream ID) for the [Embed Player](#required-url--parameters) or the [Messenger Client](#parameter-reference-messenger-client)
3. Check browser console for error messages
4. Contact our support team:
   - [Support contact form](https://www.nanocosmos.net/support/)
   - Include: error messages, browser console logs, and your configuration

:::tip Need assistance?
We're here to support you throughout your Live Captions integration.
If you would like to discuss your Live Captions requirements, pricing, or custom solutions, feel free to contact our sales team via [nanocosmos.net/contact](https://www.nanocosmos.net/contact) or by email at sales(at)nanocosmos.net.

We're happy to assist you in finding the best configuration for your workflow.
:::




