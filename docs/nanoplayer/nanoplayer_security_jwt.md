---
id: nanoplayer_security_jwt
title: Secure playback with JSON Web Token (JWT)
---

Since **nanoStream H5Live Player Version 4.18.0** it is possible to use JSON Web Token (JWT) for a secure playback for all use cases. It can be applied with the `entries` configuration and with the `group` configuration. Contrary to the STS secure configuration, there can be single JWT token for all streams within the stream group. It is now easier than ever to use live transcoding and ABR with ultra-low-latency live streaming.

## Latest additions

### IP restriction: multiple addresses and CIDR ranges

Token IP restriction now accepts up to **10 entries** per token. Each entry can be either a single IPv4 address or an IPv4 CIDR range, and you can mix both kinds.
see [IP address restriction](#ip-address-restriction)

## How to create a JSON Web Token for secure playback in the Cloud Dashboard

Since version 3 of the nanoStream Cloud Dashboard it is supported to create JSON Web Token for secure playback.  
Dashboard URL: https://dashboard.nanostream.cloud 

There are 2 locations in the dashboard where tokens can be created 
* via the `Secure Playback Token` item in the sidebar 
* via the `Create new token` button in the stream overview 

## How to create JSON Web Token for secure playback via API

[Token API Reference](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Create%20a%20token%20for%20the%20H5Live%20Playback%20service)

### Request URL and method
* URL : `https://token.nanostream.cloud/api/v1/splay` 
* Method: `POST`

### HTTP request header 
* `content-type` : `application/json` 
* Authentication via bintu token (recommended) or API key
  * `X-BINTU-TOKEN` : Your bintu token. Temporary, session-based, and role-scoped. Recommended for production use.
  * `X-BINTU-APIKEY` : Your organization API key. Permanent and grants the highest level of access. Can be obtained from the nanoStream Cloud dashboard.
  
### HTTP request body 
* Format: JSON object containing the following fields 

#### **Stream group id, stream names or entire organisation** 

* There are 3 options available for identifying the streams included in the token 
* One of the options must be included 

* a) Create token for an entire stream group 
  * Key: `groupid` 
  * Value: string, bintu streamgroup id 
  * Example: `"groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd"` 

* b) Create token for one or more stream names 
  * Key: `streams` 
  * Value: array, containing one or more stream names 
  * Example: `"streams": ["XXXXX-YYYY1","XXXXX-YYYY2","XXXXX-YYYY3"]`

* c) Create token for all streams of your organisation 
  * Key: `orgawide` 
  * Value: boolean, true 
  * Example: `"orgawide": true` 

#### **Time range restrictions** 

* Start time 
  * The parameter nbf stands for NotBefore and is the time in the future when the token becomes valid. It is not possible to use the token before this time is reached. 
  * optional 
  * Key: `nbf` 
  * Value: number, UNIX timestamp in seconds 
  * Example: `"nbf": 1686900000` 

* End time 
  * optional 
  * The parameter exp stands for expiration and is the time at which the token looses its validity. After the expiration, the token can no longer be used. 
  * Key: `exp` 
  * Value: number, UNIX timestamp in seconds 
  * Example: `"exp": 1686903652` 
  * see [Playback Token Expiration](#playback-token-expiration)

#### **Disconnect after expiration**

* Enforce disconnect of active playback sessions when the token expires
  * optional
  * Key: `forceDisconnect` 
  * Value: boolean, default: false 
  * Example: `"forceDisconnect": true` 
  * see [Playback Token Expiration](#playback-token-expiration)

#### **Revocability**

* Option to make token revocable
  * optional
  * Key: `revocable` 
  * Value: boolean, default: false 
  * Implication: if enabled, the maximum token expiration time is limited to 24 hours
  * Example: `"revocable": true` 

#### **Web application domain name/referer restriction** 

* Web application domain 
  * optional 
  * Key: `domain` 
  * Value: string, domain name 
  * Example: `"domain": "example.domain.com"`
  
#### **IP address restriction** 
  
* IP address
  * optional 
  * Key: `ip`
  * Value: i) string, single IP address or CIDR
  * Examples: `"ip": "123.45.67.89"`, `"ip": "198.51.100.0/24"`  
  * Value: ii) array of strings, up to 10 IP addresses or CIDRs
  * Example: `"ip": ["123.45.67.89","198.51.100.0/24"]` 

#### **Tag** 

* Tag 
  * optional 
  * Key: `tag`
  * Value: string, tag 
  * Example: `"tag": "table 7"` 
  
#### **User identifier** 

* User 
  * optional 
  * Key: `user`
  * Value: string, user id, name or alias 
  * Example: `"user": "aaa-bbb-ccc-ddd"` 

#### **Example of a complete request body JSON object**

```
{
  "groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd",
  "exp": 1686903652,
  "domain": "example.domain.com",
  "ip": "123.45.67.89",
  "tag": "table 7",
  "user": "aaa-bbb-ccc-ddd",
  "revocable": true,
  "forceDisconnect": false
}
```

### HTTP response 

* Content type: `application/json; charset=utf-8` 

#### HTTP response codes

* `200`: success 
  * example body: `{"success": true,"data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}` 
* `400`: parameter required 
  * example body: `{"success": false,"errorCode": 1000,"message": "Parameter required: ..."}` 
* `403`: forbidden 
  * example body: `{"success": false,"errorCode": 1001,"message": "Provided APIKey is not valid"}`

## Playback Token Expiration

After a playback token expires, it **cannot be used for any new authorization actions**.

### Effects of Expiration

Once expired, the token can no longer be used to:

* **Establish new sessions, connections** (e.g., starting playback or reconnecting)
* **Switch streams on an existing connection** (e.g., changing streams or quality renditions)

Whether **existing sessions remain active or are terminated** depends on the `forceDisconnect` claim in the token.

### Active Session Termination Policy

With `forceDisconnect` enabled

* All active sessions associated with the token are **terminated after expiration**.
* Any ongoing playback is **forcefully disconnected**.

With `forceDisconnect` disabled (default)

* **Existing sessions remain active** even after the token expires.
* Only **new operations requiring authorization** (such as new connections or stream switches) are rejected.

## How to verify JSON Web Token for secure playback via API

[Token API Reference](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Validate%20a%20token%20for%20the%20H5Live%20Playback%20service)

### Request URL and method 

* URL : `https://token.nanostream.cloud/api/v1/splay/verify` 
* Method: `POST`

### HTTP request header 

* `content-type` : `application/json`
  
### HTTP request body 

* Format: JSON object containing the following fields 
* Token 
  * Key: `token` 
  * Value: string, JSON Web Token
* Example body: `{"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}`

### HTTP response 

* Content type: `application/json; charset=utf-8`

#### HTTP response codes 

* `200`: success, valid token
  * example body: `{"success": true, "data": {"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}}`
* `403`: error, invalid token
  * example body: `{"success": false, "errorCode": 1002,"message": "jwt expired"}`

## How to revoke a JSON Web Token for secure playback via API

[Token API Reference](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Revoke%20a%20token%20for%20the%20H5Live%20Playback%20service)

### Request URL and method 

* URL : `https://token.nanostream.cloud/api/v1/splay/revoke` 
* Method: `POST`

### HTTP request header 
* `content-type` : `application/json` 
* Authentication via bintu token (recommended) or API key
  * `X-BINTU-TOKEN` : Your bintu token. Temporary, session-based, and role-scoped. Recommended for production use.
  * `X-BINTU-APIKEY` : Your organization API key. Permanent and grants the highest level of access. Can be obtained from the nanoStream Cloud dashboard.
  
### HTTP request body 

* Format: JSON object containing the following fields 
* Token 
  * Key: `token` 
  * Value: string, JSON Web Token
* Example body: `{"token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Im5hbm9jb3Ntb3MifQ..."}`

### HTTP response 

* Content type: `application/json; charset=utf-8`

#### HTTP response codes 

* `204`: success, token was revoked
  * no response body
* `400`: error, bad request
  * example body: `{"success": false, "errorCode": 2011, "message": "The token is not allowed for revocation"}`
* `403`: error, forbidden
  * example body: `{"success": false, "errorCode": 1001, "message": "Provided APIKey is not valid"}`

## How to integrate secure H5Live player configuration with JWT

**Adding the secure `stream group` to the config**

While passing the `group` object with nested `'id' : 'your_stream_group_id'` in the `source`, in case of a secure stream group, add `security` with JSON Web Token (JWT) `'jwtoken' : 'your_token'`.

#### JSON representation with stream group
```js
'config': {
    'source': {
        'group': {
            'id': 'xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd', // your stream group id
            'security': {
                'jwtoken': 'xxx' // your JSON Web Token
            },
        },
        ...
    },
    ...
}
```

#### Config example with stream group configuration

```js
var config = {
    "source": {
        "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id
            "security": {
                "jwtoken": "xxx" // your JSON Web Token
            },
        },
        ...
    },
    ...
};
```

#### Config example with entries configuration

```js
var config = {
    "source": {
        "entries": [
            {
                "h5live": {
                    "rtmp": {
                        "url": "rtmp://bintu-splay.nanocosmos.de/splay",
                        "streamname": 'XXXXX-YYYYY' // your streamname
                    },
                    "server": {
                        "websocket": "wss://bintu-h5live-secure.nanocosmos.de/h5live/authstream",
                        "hls": "https://bintu-h5live-secure.nanocosmos.de/h5live/authhttp/playlist.m3u8"
                    },
                    "security": {
                        "jwtoken": "xxx" // your JSON Web Token
                    }                    
                }                
            }
        ]
        ...
    },
    ...
};
```

Here are example code snippets to test the H5Live player with secure tokens.

:::note
Refer to the detailed example code in [Embedding H5Live player on your own web page](./nanoplayer_getting_started) and modify the relevant sections to include playback security.
:::

### On a web page

```html
<div id="playerDiv"></div>
<script src="https://demo.nanocosmos.de/nanoplayer/api/release/nanoplayer.5.min.js"></script>
<script>
var player;
var config = {
    "source": {
       "group": {
            "id": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd", // your stream group id
            "security": {
                "jwtoken": "xxx" // your JSON Web Token
            },
        },
    },
    "playback": {
        "autoplay": true,
        "automute": true,
        "muted": true
    },
    "style": {
        "displayMutedAutoplay": true
    }
};
document.addEventListener('DOMContentLoaded', function () {
    player = new NanoPlayer("playerDiv");
    player.setup(config).then(function (config) {
        console.log("setup success");
        console.log("config: " + JSON.stringify(config, undefined, 4));
    }, function (error) {
        alert(error.message);
    });
});
</script>
```