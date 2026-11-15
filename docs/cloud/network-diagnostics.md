---
id: network-diagnostics
title: Network Diagnostics
sidebar_label: Network Diagnostics
description: A comprehensive guide for diagnosing connectivity issues with nanocosmos ingest and playback servers.
---

Network connectivity is essential for stable ingest and low-latency playback.
This guide provides the recommended diagnostic steps, clean examples, and helpful explanations so you can quickly identify issues and provide complete information to support.

## TL;DR (Quick Commands)

If you suspect network issues, run the following commands in your terminal:

```shell title="network_diagnostics-mtr.sh"
mtr -r bintu-stream.nanocosmos.de
mtr -r bintu-play.nanocosmos.de
```

if `mtr` is not installed, please run:

```shell title="network_diagnostics-ping.sh"
ping bintu-stream.nanocosmos.de
ping bintu-play.nanocosmos.de
```

These commands reveal routing quality, latency, packet loss, and potential bottlenecks.

:::info Why This Matters
Sharing these results with our support team helps us quickly determine where the issue originates:
- Local network (LAN / WiFi)
- ISP routing
- Regional network paths
- Global internet peering
- Geographic load balancing
:::

## Essential Tool Overview

| Tool | Purpose | Notes |
|------|---------|-------|
| `ping` | Tests reachability and latency | Installed on all systems |
| `traceroute` / `tracert` | Shows network hops and routing path | Windows uses `tracert` |
| `mtr`| Combines ping + traceroute with live stats | Best tool for diagnostics |
| `dig` | Tests DNS resolution | Useful for geo-loadbalanced hosts |

### ping

The `ping` command is the simplest way to verify whether a server is reachable and how long it takes for a packet to travel from your device to the destination and back. Behind the scenes, `ping` sends small ICMP "echo request" packets and waits for an "echo reply". This **round-trip time (RTT)** reveals the basic health of a network connection. If packets do not return, arrive late, or show inconsistent timing, this typically indicates issues in your local network, your router, or your ISP’s routing.

Because `ping` is preinstalled on almost all operating systems (Linux, macOS, Windows), it is usually the first tool you should run when troubleshooting connectivity.

**Example Input**

```shell
ping google.com
```

To test connectivity to nanocosmos services, replace it with **any nanocosmos host**:

```shell
ping bintu-stream.nanocosmos.de
```

**Example Output for google.com**
```js 
PING google.com (216.58.217.110): 56 data bytes
64 bytes from 216.58.217.110: icmp_seq=0 ttl=54 time=14.8 ms
64 bytes from 216.58.217.110: icmp_seq=1 ttl=54 time=16.6 ms
64 bytes from 216.58.217.110: icmp_seq=2 ttl=54 time=16.5 ms
```

When you stop the command with **CTRL+C**, a summary appears:

```js
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3007ms
rtt min/avg/max/mdev = 33.890/40.175/53.280/7.679 ms
```

This summary is particularly important. It condenses all measurements into four values:

- **min**: the fastest packet response
- **avg**: the average round-trip time
- **max**: the slowest measured value
- **mdev**: a measure of how much the results vary (jitter)

A stable connection will show low variation between min/avg/max and a very small mdev value. WiFi networks or congested links often show a larger spread, which reflects inconsistency.

**What the results tell you** \
A healthy ping result shows **0% packet loss** and relatively stable RTT values.
If you already see packet loss here, the issue is almost always local, either your WiFi signal, router performance, firewall rules, or your ISP’s upstream connection. Even a tiny amount of loss (1–2%) can cause visible problems in live streaming.

If latency fluctuates significantly (for example, min 20 ms, max 120 ms), your connection may suffer from jitter or temporary congestion. This can lead to ingest instability or buffer fluctuations during playback.

:::tip Practical tip
Start with `ping`. If the host is not reachable or packet loss appears here, further tools like `mtr` or `traceroute` will confirm where the issue originates.
:::

### traceroute

`traceroute` reveals every network hop between your device and the destination server.
It shows **how traffic is routed**, how long each hop takes, and where latency or packet loss begins. While `ping` only measures the round-trip time, `traceroute` helps identify *where* in the network a problem occurs.

On Windows, the command is called `tracert`, but the output follows the same logic.

Behind the scenes, `traceroute` sends packets with increasing TTL (Time To Live). Each router on the path decreases the TTL by one When it reaches zero, the router returns an ICMP "time exceeded" message. By increasing the TTL step by step, `traceroute` discovers each hop on the route.

This makes it ideal to diagnose:
- routing loops
- sudden latency increases
- problematic network segments
- issues at an ISP handover

**Example Input**

```shell
traceroute google.com
```

To diagnose routing to **any nanocosmos service**:

```shell
traceroute bintu-stream.nanocosmos.de
```

**Example Output for google.com**
```js 
traceroute to google.com (74.125.53.100), 30 hops max, 40 byte packets
1 207.192.75.2 (207.192.75.2) 0.414 ms 0.428 ms 0.509 ms
2 vlan804.tbr2.mmu.nac.net (209.123.10.13) 0.287 ms 0.324 ms 0.397 ms
3 0.e1-1.tbr2.tl9.nac.net (209.123.10.78) 1.331 ms 1.402 ms 1.477 ms
4 209.85.250.144 (209.85.250.144) 86.025 ms 86.151 ms 86.136 ms
5 64.233.174.131 (...) 80.877 ms ...
6 216.239.48.32 (...) 81.267 ms ...
7 216.239.48.137 (...) 77.478 ms ...
```

If a hop does not reply, you will see:

```shell
* * *
```

This does not automatically indicate a failure. Many routers intentionally ignore traceroute requests for security reasons.

:::warning Important
A hop is only suspicious if you see:
- persistent packet loss across multiple following hops or
- a sudden and lasting latency spike beginning at that hop

*Isolated `* * *` entries are normal.*
:::

### mtr

`mtr` combines the strengths of `ping` and `traceroute` into a continuous measurement tool.
It repeatedly probes every hop and builds statistical data in real time, making it the **most reliable tool** for diagnosing unstable connections, jitter, packet loss, or routing flaws.

Where `ping` gives basic reachability, and `traceroute` shows the path once, `mtr` reveals:

- how each hop behaves over time
- whether packet loss is persistent
- if latency spikes are isolated or recurring
- how stable each segment of the route is
- the overall quality of the end-to-end connection

This is especially valuable for live streaming, where jitter and intermittent loss cause visible issues such as frame drops or ingest instability.

**Example Input**

```shell
mtr --report google.com
```

To test **nanocosmos routing**:

```shell
mtr --report bintu-stream.nanocosmos.de
```

**Example Output for google.com**
```js
HOST: google.com                        Loss%   Snt     Last    Avg     Best    Wrst    StDev
    1.  256.129.75.4                    0.0%    10      0.4     0.4     0.3     0.6     0.1
    2.  vlan804.tbr2.mmu.nac.net        0.0%    10      0.3     0.4     0.3     0.7     0.1
    3.  209.85.251.9                    0.0%    10      23.1    35.9    22.6    95.2    27.6
    4.  72.14.239.127                   0.0%    10      24.2    24.8    23.7    26.1    1.0
    5.  209.85.255.190                  0.0%    10      27.0    27.3    23.9    37.9    4.2
    6.  gw-in-f100.1e100.net            0.0%    10      24.1    24.4    24.0    26.5    0.7
```

The speed of the connection is tracked until you stop it with the **CTRL+C** command.

:::info How to interpret `mtr` results
- Loss on the first hop → local LAN / WiFi / router
- Loss on hops 2–4 → ISP edge or local carrier
- Loss only on final hop → destination host rate-limiting or regional routing
- High StDev → jitter (very impactful for live streaming)
:::

:::tip `mtr` Guide
For more information regarding `mtr` consider our [diagnosing network issues with mtr](/docs/cloud/network-diagnostics-mtr) guide.
:::

### dig

nanoStream Cloud uses **geo-loadbalanced DNS**, meaning hosts resolve differently depending on your location and server availability. `dig` helps verify DNS resolution, follow CNAME chains, and confirm that the client is routed to the expected nanocosmos edge.

This is helpful for diagnosing:
- wrong region selection
- outdated DNS caches
- local DNS server issues
- incorrect host overrides (e.g., via /etc/hosts)

**Example Input**

```shell
dig bintu-play.nanocosmos.de
```

**Example Output**
```js
; <<>> DiG 9.10.6 <<>> bintu-play.nanocosmos.de
;; QUESTION SECTION:
;bintu-play.nanocosmos.de.	IN	A

;; ANSWER SECTION:
bintu-play.nanocosmos.de. 30	IN	CNAME	bintu-play.cdn.nanocosmos.de.
bintu-play.cdn.nanocosmos.de. 10 IN	CNAME	play.out-a.nanocosmos.de.
play.out-a.nanocosmos.de. 30	IN	CNAME	eu.out-a.nanocosmos.de.
eu.out-a.nanocosmos.de.	30	IN	CNAME	edge-eu-ams-vubm-t2a-01.out-a.nanocosmos.de.
edge-eu-ams-vubm-t2a-01.out-a.nanocosmos.de. 30	IN A 209.250.245.22

;; Query time: 12 msec
;; SERVER: 192.168.178.1#53(192.168.178.1)
```

## Sharing Diagnostic Results

Once you have collected your network diagnostics (`ping`, `traceroute`, `mtr`, `dig`), please share the results with our support team so we can analyze the data efficiently.

There are two recommended ways to send your results:

###  Submit Directly via Support Form
Use our official support form so your data is associated with your case: **[nanocosmos.net/support](https://www.nanocosmos.net/support)**. \
This method is ideal when you already have an ongoing issue or need fast assistance.

### Upload Your Logs to a Paste Service
If your outputs are long or include logs from multiple commands, paste them into a public paste service and send us the link:

- **[paste.ubuntu.com](https://paste.ubuntu.com)**
- **[https://gist.github.com](https://gist.github.com)**

These services make your logs easy to read, retain formatting, and prevent long messages from being truncated.

### What to Include
To help us diagnose the issue quickly, include:

- The commands you ran (e.g., `mtr -r bintu-stream.nanocosmos.de`)
- The full unmodified output
- Your approximate location (country/region)
- Timestamp of when the tests were performed

Providing cleanly formatted results greatly speeds up troubleshooting and allows us to compare routing across global regions.