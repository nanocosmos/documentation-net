---
id: nanoplayer_feature_domain_configuration
title: Domain Configuration
sidebar_label: Domain Configuration
---

### Configuration of non-default streaming server, API and metrics domains

All domain settings are optional and only required for applying non-default values.

### Overview of domain settings

- `config.source.general.baseDomain` added in v5.1.0
- `config.source.general.serverDomain` added in v4.16.0
- `config.source.metrics.serverDomain` added in v4.31.0
- `config.source.group.apiurl` added in v4.18.0

### New: Configuration of non-default domains via config.source.general.baseDomain

Introduced in **nanoStream Player Version 5.1.0** the `config.source.general.baseDomain` setting allows for simpler configuration of non-default domains/FQDNs via a single value instead of setting each value individually.

**The value is expected to be a basic first plus second level domain such as `example.com`, NOT a URL and NOT a fully qualified domain name (FQDN).**

When it is set, the player derives the following values from it:
- `config.source.general.serverDomain`
- `config.source.metrics.serverDomain`
- `config.source.group.apiurl`

Example:

```javascript {3-8} showLineNumbers
var config = {
        "source": {
            ...
            "general": {
                "baseDomain": "example.com"
            },
            ...
        },
        ...
    };
```
will result in  

config.source.general.serverDomain: 'play.example.com'  
config.source.metrics.serverDomain: 'telemetry.example.com'  
config.source.group.apiurl: 'https://api.example.com'  

The exception is 'nanocosmos.de' which will result in the standard default values.

Combining the baseDomain setting with the lower level serverDomain or apiurl settings is not recommended.
In this case the lower level setting will take precedence over the baseDomain setting for the particular setting.
Example: 
config.source.general.baseDomain: 'example.com' combined with config.source.general.serverDomain: 'play.custom.com' will result in  

config.source.general.serverDomain: 'play.custom.com'  
config.source.metrics.serverDomain: 'telemetry.example.com'  
config.source.group.apiurl: 'https://api.example.com'  

### Configuration of a non-default streaming server domain via config.source.general.serverDomain

Introduced in **nanoStream H5Live Player Version 4.16.0** the general server domain makes the `source.defaults` and `bintu.streamid` configuration more flexible. These configurations use standard geo-load-balanced domains by default. Because the general server domain has the highest priority, it will override (modify) all streaming server domains. To use it, it is necessary to add `config.source.general.serverDomain` with its value, e.g. `bintu-play-eu.nanocosmos.de`. Please find the list here: [nanoStream Cloud Public Standard and geo-loadbalanced URLs](../cloud/support#geo-region-override).
This requires a fully qualified domain name (FQDN).

```javascript {3-8} showLineNumbers
var config = {
        "source": {
            ...
            "general": {
                "serverDomain": "bintu-play-eu.nanocosmos.de"
            },
            ...
        },
        ...
    };
```

### Configuration of a non-default metrics server domain via config.source.metrics.serverDomain

Introduced in **nanoStream H5Live Player Version 4.31.0** the metrics server domain allows to apply non-default values for the player metrics endpoint.
This requires a fully qualified domain name (FQDN).

```javascript {3-8} showLineNumbers
var config = {
        ...
        "metrics": {
            ...
            "serverDomain": "telemetry.example.com",
            ...
        },
        ...
    };
```

:::tip More about the player configuration
Please check examples on how to configure the player at the [Getting started](./nanoplayer_getting_started) section.
:::
