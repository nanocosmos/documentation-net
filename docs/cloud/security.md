---
id: security
title: nanoStream Cloud Security
sidebar_label: nanoStream Cloud Security
---

<iframe width="100%" height="360" src="https://www.youtube.com/embed/M_chQzdc5m0" frameborder="0" allowfullscreen></iframe>

##### *Click `PLAY` button to start*

nanoStream Cloud ensures security on several levels:

- **Reliability**: our system works 24/7 on a global scale with automatic failover 
- **Security**: encrypted streaming is possible
- **Authorization**: web hooks and secure tokens can be used to authorize clients

## Encrypted streaming

- nanoStream H5Live Player and Webcaster by default work over transport level security (HTTPS), based on industry standards.

- RTMP can be encrypted with SSL. You can use rtmps over port 1937 instead 1935.

:::tip example
+ **Standard non-encrypted ingest (RTMP)**: rtmp://bintu-stream.nanocosmos.de:1935/live/STREAM 
+ **Encrypted ingest (RTMPS)**: rtmps://bintu-stream.nanocosmos.de:1937/live/STREAM
:::

## Client authorization

- RTMP Ingest can be authorized with [web hooks](bintu_custom_webhooks) with our bintu REST API.

- nanoStream H5Live Player clients can be authorized with nanoPlayer [secure tokens](../nanoplayer/nanoplayer_token_security)

:::info Questions?
For business related questions reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de. <br/>
**For technical questions you can use our [support form](https://www.nanocosmos.de/support).**
:::
