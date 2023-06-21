---
id: nanoplayer_iframe
title: iframe Embeds 
sidebar_label: iframe Embeds
---

## Creating a custom iframe


### How to embed the player into an iframe element?

For most use cases the implementation of the player directly into the page is the best option. We recommend embedding the player within an iframe element only when the use case requires it.

### Creating the embedded page including the player on your side

Please check examples on how to add the player at the [Getting started](./nanoplayer_getting_started/) section.

### Embedding the player page in an iframe on a second page on the distribution side

:::tip Important 
 The `allowfullscreen` attribute is required if the page wants to support fullscreen video.
:::

```html
    <iframe id="ifvideo" width="640" height="480" scrolling="no" frameborder="0" allowfullscreen=""
    src="//yourdomain.com/playerpage.html">
    </iframe>
```

:::info Ready-for-use iframe
If you are looking for a ready-for-use iframe hosted in the nanoStream Cloud please reach out to our dedicated support team via the [support form](https://www.nanocosmos.de/support) or by sending an email to support(at)nanocosmos.de for details.
:::