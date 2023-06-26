---
id: guardian
title: nanoStream Guardian
sidebar_label: nanoStream Guardian
---

## What is nanoStream Guardian?

nanoStream Guardian is a new service integrated into nanoStream Cloud, which allows you to **block specific IP addresses, referrers, and even entire CIDR masks from accessing your streams**.

:::tip what is a CIDR mask?
A CIDR mask is a notation that allows to affect a range of IP adresses. For example blocking the following mask: 255.255.255.0 /24 would block all 256 IP adresses starting with 255.255.255
:::

By including nanoStream Guardian in your workflow, you can effectively **prevent unauthorized access and illegal replication of your streams, ensuring that only legitimate viewers can watch your content**.

:::caution
Blocking an IP address is effective for 24 hours* and will affect all your organization's playouts new connections from the given IP address after a delay of max. 6 minutes. Blocking a referrer will prevent the given web domain from playing your streams *until you unblock it.
:::

## What do you need to use nanoStream Guardian?

:::info Before starting
To begin, please sign in using your nanoStream Cloud/Bintu account credentials. <br/>
If you have not created an account yet, you can [sign up](https://dashboard.nanostream.cloud/auth?signup) or reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de.
:::

## How to use nanoStream Guardian

### nanoStream Cloud Analytics Dashboard

Via the Analytics Dashboard, you can easily access the data you need to quickly observe any suspicious activities and take action.

nanoStream Guardian is included in the Analytics Dashboard in the Guardian and the Breakdown tab.

- [Analytics Dashboard](https://metrics.nanocosmos.de/)

- [In-depth information on using nanoStream Guardian with the Analytics Dashboard](./analytics-guardian)

### nanoStream Guardian API

If you require additional control over the service (e.g: for automatization or blocking a high number of IPs) or simply want to integrate the service into your programmers existing workflow, you are also able to use the nanoStream Guardian API.

Manipulating CIDR-masks is yet only available via the API. 

- API Entry point: https://guardian.nanostream.cloud/

- API documentation: https://guardian.nanostream.cloud/docs


### API Examples

#### Block an IP for 24 hours

```shell
curl --location 'https://guardian.nanostream.cloud/ip' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "ip": "103.13.113.1",
    "type": "deny",
    "tag": "Blocking malicious user IP"
}'
```

#### Block a Referer

```shell
curl --location 'https://guardian.nanostream.cloud/referer' \
--header 'Content-Type: application/json' \
--header 'X-BINTU-APIKEY: BINTU_API_KEY' \
--data '{
    "domain": "all-good-streams.com",
    "info": "Domain that replicates 3 streams on 24/02",
    "type": "deny"
}'
```

:::info Questions?
For business related questions reach out to our dedicated sales team via the [contact form](https://www.nanocosmos.de/contact) or by sending an email to sales(at)nanocosmos.de. <br/>
**For technical questions you can use our [support form](https://www.nanocosmos.de/support).**
:::