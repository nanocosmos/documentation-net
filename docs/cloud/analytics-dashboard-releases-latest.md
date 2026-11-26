---
slug: /analytics/dashboard-releases/latest
id: analytics-dashboard-releases-latest
title: Latest Dashboard Release
sidebar_label: Latest
---

# Changelog

## 2.34.1 - Guardian **User Id** tab

### **Guardian — User Id Tab**
   -  added a **User Id** tab to the [Guardian](./analytics-dashboard-guardian.md#guardian---user-id-breakdown). The tab shows one row per user ID (`user` claim of the playback token), with the data of all playback tokens and IPs of that user. Sessions without a `user` claim do not show in this tab
   -  click a row to open the user details: **top playback tokens (JTI)** with a **Revoke** action, and the top IPs, providers, countries, referrers and browser agents. A user ID cannot be blocked; revocation stays on playback token level

### **Guardian — IP Table**
   -  the IP table shows **one row per IP**, not one row per IP and organization
