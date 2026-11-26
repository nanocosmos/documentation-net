---
id: security_token_guardian_view
title: Detecting Stream Misuse with the Token Guardian View
sidebar_label: Token Guardian View
---

# Detecting Stream Misuse with the Token Guardian View

Even with strong preventive measures, monitoring is essential. The Token Guardian View aggregates usage data per playback token, enabling you to identify tokens exhibiting suspicious behavior and take targeted action.

:::info
For general Analytics Dashboard features and the Guardian UI, see the [**Analytics Guardian Guide**](/docs/analytics/dashboard/guardian). For blocking actions, see [nanoStream Guardian](/docs/cloud/guardian).
:::

## Analytics Dashboard — Key Views {#key-views}

The Analytics Dashboard at [metrics.nanostream.cloud](https://metrics.nanostream.cloud) provides real-time visibility into your streaming activity. The following views are most relevant for security monitoring:

| View | URL | Purpose |
|---|---|---|
| **Breakdown** | [metrics.nanostream.cloud/breakdown](https://metrics.nanostream.cloud/breakdown) | Traffic based analysis with one-click IP/Referrer blocking |
| **Guardian based on IPs** | [metrics.nanostream.cloud/streamGuard](https://metrics.nanostream.cloud/streamGuard?misTerm=ip) | Activity by IP based analysis with one-click IP blocking |
| **Guardian based on Tokens** | [metrics.nanostream.cloud/streamGuard?misTerm=jwtoken](https://metrics.nanostream.cloud/streamGuard?misTerm=jwtoken) | Activity by Playback Token based analysis with one-click token revocation |
| **Guardian based on User Ids** | [metrics.nanostream.cloud/streamGuard](https://metrics.nanostream.cloud/streamGuard) (User Id tab) | Activity by user ID across all playback tokens and IPs of a user, with token revocation per JTI. Requires the `user` claim in the playback token |

## Setting Up Your Analysis {#setup}

**Define the time frame:**
- Use a **1-day** window for a general health check of your traffic.
- Narrow to a **3-hour** window (or less) to isolate specific anomalies.

**Inspect token details:** Click on any row to expand the "Additional details" panel, which shows the token's payload including its scope (e.g., which domain and streams it is restricted to). Understanding the intended scope helps you judge whether observed behavior is normal.

## Key Indicators of Suspicious Activity {#indicators}

The following patterns may indicate misuse. They are starting points for investigation rather than definitive proof.

### A. Multiple IPs or Sessions per Token

When a single token is used from multiple IP addresses or generates many concurrent sessions, this may indicate that the token is being shared or used by an automated relay system.

:::note
This pattern can also be caused by legitimate token workflows — for example, if tokens are reused across sessions or if viewers are behind shared network infrastructure. Always evaluate in the context of your specific token generation workflow.
:::

### B. Data Center / Cloud Provider Traffic

Monitor the "Top Providers" column for entries that do not match expected consumer behavior. Traffic from cloud providers such as **Amazon AWS**, **Google Cloud**, **Cloudflare**, or similar hosting services is conspicuous because these are not residential ISPs. Viewers watching through a browser typically connect via consumer ISPs (e.g., Viettel, VNPT, Comcast, Deutsche Telekom).

Cloud-hosted traffic often suggests automated scripts, relay servers, or bots — though it could also originate from your own monitoring systems or business partners.

### C. Referrer Anomalies

The referrer shows the origin of the playback request:

- **Unknown domains:** Domains that are not part of your official streaming environment may indicate unauthorized embedding.
- **Missing referrers** (`N/A` or `-`): This suggests the request did not originate from a standard web browser but from a programmatic HTTP client (e.g., `curl`, server-side scripts), which is typical of relay/restreaming setups.

### D. Geographic Distribution

A single token showing activity from multiple countries within a short time window is noteworthy. This can indicate use of a proxy network or VPN to mask the origin of the access.

### E. Unusually Long Playback Duration

Tokens with exceptionally high total playback duration are conspicuous because relaying (copying) a stream requires it to be active for the entire length of the content. Long-duration tokens may warrant closer inspection, especially if combined with other indicators.

### F. High Concurrency (for User-Bound Tokens)

When tokens are bound to specific user IDs, the concurrency metric becomes very informative:

- A normal user typically has a concurrency of approximately **1**.
- A concurrency value **> 2** strongly suggests simultaneous streams, indicating account sharing or unauthorized redistribution.

Use the **User Id** tab of the Guardian to see this per user, over all of the user's playback tokens and IPs. Open a user to see their top playback tokens (JTI) and revoke them directly. See the [Analytics Guardian Guide](/docs/analytics/dashboard/guardian#guardian---user-id-breakdown) for details.

## Practical Analysis Workflow {#workflow}

1. Open the Token Guardian View and set your desired time range.
2. Look beyond the top rows (high-volume tokens for popular content are expected) — focus on tokens with unusual duration, multi-IP usage, or unexpected providers.
3. Click on suspicious rows to inspect the token payload and its scope.
4. Cross-reference with the Breakdown view for geographic and referrer details.
5. If you identify confirmed misuse, proceed to the available response options: [nanoStream Guardian](/docs/cloud/guardian) for manual blocking or [Token Revocation](/docs/cloud/security_token_revocation) to invalidate compromised tokens.

## Additional Resources {#resources}

- [nanoStream Cloud Security Overview](/docs/cloud/security)
- [Analytics Guardian Guide](/docs/analytics/dashboard/guardian)
- [nanoStream Guardian](/docs/cloud/guardian)
- [Token Revocation](/docs/cloud/security_token_revocation)
