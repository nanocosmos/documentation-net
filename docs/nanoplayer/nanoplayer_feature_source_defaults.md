---
id: nanoplayer_feature_source_defaults
title: Source defaults
sidebar_label: Source defaults
---

## Using source defaults with standard nanoStream Cloud

The `defaults.service` setting is **obsolete in nanoStream H5Live Player Version 5 and higher**.

Introduced in **nanoStream H5Live Player Version 4.13.0**, source defaults make the configuration easier. In prior versions the configuration via RTMP url and stream name required the definition of `h5live.server` and `h5live.rtmp.url`. If `source.defaults.service` is set, the `h5live.server` object and the `h5live.rtmp.url` in each entry can be omitted now. In this case defaults will be applied internally. Values for `h5live.server` and/or `h5live.rtmp.url` that are defined explicitly in a stream entry have priority.

Assign `'bintu'` to `defaults.service` for using the standard nanoStream Cloud.  

The source defaults support both: standard and secure stream playback.

Additionally, it is not mutually exclusive with custom server/rtmp - setting the defaults service does not overwrite explicitly defined values for `h5live.server` or `h5live.rtmp.url`. In a nutshell, in case some value is missing in i.e. `h5live.server` object, the default one is used in this place but without interfering with other parameters that were given.

### Adding the `defaults.service` to the config

At the moment the available service is `'bintu'` for using the standard nanoStream Cloud. Pass the `defaults` object with nested `'service' : 'bintu'` in the `source` and that's all you need to do:

```json
'config': {
    'source': {
        'defaults': {
            'service': 'bintu'
        },
        ...
    },
    ...
}
```

#### Config example with service defaults

```javascript {3-5} showLineNumbers
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp streamname
                            "rtmp": {
                                "streamname": "XXXXX-YYYYY"
                            }
                        }
                    }
            ]
        }
    };
```

#### Config example without service defaults

```javascript {8,11-16} showLineNumbers
var config = {
        "source": {
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "url": "rtmp://bintu-play.nanocosmos.de/play",
                                "streamname": "XXXXX-YYYYY"
                            },
                            "server": {
                                "websocket": "wss://bintu-h5live.nanocosmos.de:443/h5live/stream.mp4",
                                "hls": "https://bintu-h5live.nanocosmos.de:443/h5live/http/playlist.m3u8",
                                "progressive": "https://bintu-h5live.nanocosmos.de:443/h5live/http/stream.mp4",
                                "webtransport": "https://bintu-h5live.nanocosmos.de:443/h5live/stream/stream.mp4" // important for MOQ playback
                            }
                        }
                    }
            ]
        }
    };
```

#### Using source defaults in combination with custom server or RTMP urls

Of course it is possible. The service works like a simplified backup for your configuration.
Default service fills up gaps for params that were not given, however, it doesn't overwrite already passed values of your i.e. server or rtmp.

#### Config example using service defaults and custom RTMP urls

```javascript {11} showLineNumbers
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "url": "rtmp://[your_path]",
                                "streamname": "XXXXX-YYYYY"
                            }
                        }
                    }
            ]
        }
    };
```

#### Config example using service defaults and custom server urls

```javascript {3-5,13-18} showLineNumbers
var config = {
        "source": {
            "defaults": {
                "service": "bintu"
            },
            "entries": [
                    {
                        "h5live": {
                             // your rtmp stream
                            "rtmp": {
                                "streamname": "XXXXX-YYYYY"
                             },
                            "server": {
                                "websocket": "wss://[your_path]",
                                "hls": "https://[your_path]",
                                "progressive": "https:/[your_path]",
                                "webtransport": "https:/[your_path]" // important for MOQ playback
                            }
                        }
                    }
            ]
        }
    };
```

## Applying a custom h5live server domain

Please find more information [here](./nanoplayer_feature_domain_configuration)

:::tip More about the player configuration
Please check examples on how to configure the player at the [Getting started](./nanoplayer_getting_started) section.
:::
