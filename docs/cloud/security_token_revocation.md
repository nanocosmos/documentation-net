---
id: security_token_revocation
title: Token Revocation
sidebar_label: Token Revocation
---

# Token Revocation

Token revocation allows you to immediately invalidate a specific JWT across the entire delivery network. Active sessions using the revoked token are forcibly disconnected, and any future playback attempts with that token are blocked.

This is especially useful when a token has been identified in the [Token Guardian View](/docs/cloud/security_token_guardian_view) as being used on an unauthorized site — you can cut off access immediately rather than waiting for the token to expire.

## Revocable vs. Non-Revocable Tokens {#comparison}

Not all tokens can be revoked. Revocation must be opted into at token creation time:

| | Revocable Token | Non-Revocable Token |
|---|---|---|
| **Created with** | `"revocable": true` | Default (no `revocable` flag) |
| **Max expiration** | **24 hours** | 365 days |
| **Default expiration** | 24 hours | 24 hours |
| **Can be revoked** | Yes | No |

The shorter maximum expiration for revocable tokens is a deliberate design choice — tokens that can be revoked are intended for short-lived, high-security use cases. The 24-hour maximum may change in the future.

In general we recommend an expiration of 24 hours or less. Use shorter tokens for high-security use cases; longer non-revocable tokens can be acceptable for test pages and environments with lower security requirements. See [Token Best Practices](./security_token_best_practices#keep-tokens-short-lived).

## Creating Revocable Tokens {#creating}

Use the same Token Service endpoint, adding `"revocable": true` to the request body:

[Token API Reference](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Create%20a%20token%20for%20the%20H5Live%20Playback%20service)

**Endpoint:**
```
POST https://token.nanostream.cloud/api/v1/splay
```

**Authentication:** Include your Bintu token via the `X-BINTU-TOKEN` header (or the organization API key via `X-BINTU-APIKEY`). Bintu tokens are recommended — see [Protect your credentials](/docs/cloud/security_token_best_practices#best-practices).

**Single stream example:**
```bash
curl -X POST https://token.nanostream.cloud/api/v1/splay \
  -H "Content-Type: application/json" \
  -H "X-BINTU-TOKEN: YOUR_BINTU_TOKEN" \
  -d '{
    "streams": ["8sKpm-x49nB"],
    "revocable": true,
    "exp": 1738159400
  }'
```

**Multiple streams:**
```json
{
  "streams": ["8sKpm-x49nB", "8sKpm-y50nC"],
  "revocable": true
}
```

**Organization-wide:**
```json
{
  "orgawide": true,
  "revocable": true,
  "exp": 1738159400
}
```

**Stream group:**
```json
{
  "groupid": "xxxxxxxx-zzzz-yyy-aaaa-aaabbbcccddd",
  "revocable": true
}
```

All other optional parameters (`exp`, `nbf`, `domain`, `ip`, `user`, `tag`, `cust`) work the same as with non-revocable tokens.

**Response (200 Success):**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
}
```

## Revoking a Token {#revoking}

Once a token is identified as compromised or misused, revoke it with a single API call:

**Endpoint:**
```
POST https://token.nanostream.cloud/api/v1/splay/revoke
```

**Request:**
```bash
curl -X POST https://token.nanostream.cloud/api/v1/splay/revoke \
  -H "Content-Type: application/json" \
  -H "X-BINTU-TOKEN: YOUR_BINTU_TOKEN" \
  -d '{
    "token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
  }'
```

**Response (Success):**
```
HTTP 204 No Content
```

No response body is returned on success. The revocation is propagated to edge servers as quickly as possible.

## Error Responses {#errors}

| Error Code | Message | Cause |
|---|---|---|
| `2011` | "The token is not allowed for revocation" | The token was not created with `revocable: true` |
| `2012` | "The provided token doesent belong to your organisation" | The token belongs to a different organization |
| `2004` | "Malformed JWT" | The token string is invalid or corrupted |

## Impact of Revocation {#impact}

When a token is revoked:

- **Active playback sessions** using the token are forcibly disconnected.
- **Future playback attempts** with the token are blocked immediately across all edge servers.
- The revocation is **permanent** for the lifetime of that token — it cannot be un-revoked.

## When to Use Revocable Tokens {#when-to-use}

Revocable tokens are recommended for scenarios where you need the ability to respond rapidly:

- **High-value live events** (betting, premium content, ticketed streams) where piracy risk is highest
- **Per-user tokens** where you want to cut off a specific user's access if misuse is detected
- **Short-lived interactive sessions** where fast revocation provides an additional safety net

For long-running or low-risk scenarios where tokens naturally expire within acceptable timeframes, standard (non-revocable) short-lived tokens may be sufficient.

## Additional Resources {#resources}

- [nanoStream Cloud Security Overview](/docs/cloud/security)
- [Token Best Practices](/docs/cloud/security_token_best_practices)
- [Token Guardian View](/docs/cloud/security_token_guardian_view)
- [JWT Secure Playback API](/docs/nanoplayer/nanoplayer_security_jwt)
- [Token API Reference](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Revoke%20a%20token%20for%20the%20H5Live%20Playback%20service)
