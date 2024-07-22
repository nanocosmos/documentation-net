---
slug: /user_roles
id: userroles
title: User Roles
sidebar_label: User Roles
---

## Security Risks

API keys grant access to your organization's resources, including sensitive data and critical functionalities. While essential for developers and integrations, sharing a single key across your organization creates a major security risk. It's like opening Pandora's box – a single compromised key can expose your entire system to potential hazards:

1. **Unauthorized Access**: Sharing an all-access API key increases the risk of unintended users, either accidentally or intentionally, gaining access to sensitive data and functionalities.

2. **Misconfiguration Mayhem**: If multiple developers share the same API key, they might accidentally expose it during development or testing, creating security vulnerabilities that attackers can easily exploit.

3. **Lack of Transparency and Accountability**: Using a single API key makes it difficult to identify which team member was responsible for a specific API request, complicating issue resolution and accountability.


## Role-Based Access Control (RBAC)

:::info BintuAPI v1.23.0.0
With the `BintuAPI v1.23.0.0` we introduced a robust role-based access control system to improve your account security and protect your organization's operations. This system ensures that each user only possesses the permissions necessary for their tasks, minimizing potential risks.
:::

Three predefined roles are available to manage user permissions within an organization: <span className="role role-admin">nanoAdmin</span>, <span className="role role-user">nanoUser</span>, and <span className="role role-readonly">nanoReadOnly</span>. Each role grants specific access rights tailored to different needs.

| Role | Access Level  | Permissions | 
|---|---|---|
| <span className="role role-admin">nanoAdmin</span> | Highest       | Has full control over all functions within the organization, including managing user roles and issuing new tokens to disable existing ones. **Is the *only* role with access to the APIKey.** |
| <span className="role role-user">nanoUser</span>    | Intermediate  | Can perform tasks within the organization but can't take actions that could disrupt operations, such as deleting or stopping streams or changing important settings. |                
| <span className="role role-readonly">nanoReadOnly</span>| Limited       | Has read-only access to basic information and can't view sensitive data or make changes to the organization or stream settings. |



