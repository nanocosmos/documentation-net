---
slug: /user_roles
id: userroles
title: Role-Based Access Control (RBAC)
sidebar_label: Role-Based Access Control (RBAC)
---

## Concept and Benefits

1. **Enhanced Security**:
   - **Ensuring Appropriate Permissions**: RBAC ensures that users and API access tokens are granted only the permissions needed for their tasks, minimizing potential security risks. This improves your account security and protects your organization's operations.

2. **Easy to Administer**:
   - **Simplified User Management**: RBAC allows administrators to assign roles to users rather than managing individual permissions. By assigning predefined roles based on job functions, tasks, or responsibilities, administrators can easily grant access to resources by simply choosing the appropriate role for a user.
   - **Centralized Permission Management**: By managing permissions at the role level, rather than at the individual user level, RBAC reduces the number of decisions and changes an administrator must make. This centralized approach minimizes errors and inconsistencies in access controls.

3. **Improved Visibility/Overview of User Permissions**:
   - **Clear Permission Structures**: RBAC provides a clear structure of roles and their associated permissions. This makes it easier for administrators to understand who has access to what resources and why, facilitating audits and compliance checks.
   - **Simplified Reporting and Auditing**: Since roles aggregate multiple permissions, generating reports on user access becomes more straightforward. This visibility is crucial for maintaining security, identifying potential issues, and demonstrating compliance with regulations.

## User Roles in nanoStream Cloud

:::caution Bintu API v1.23.0.0
With the `Bintu API v1.23.0.0` we introduced a role-based access control system in Q3/2024.
:::

:::info
With the introduction of user roles, all users maintain their previous permission level which is equivalent to the <span className="role role-admin">nanoAdmin</span> role. Therefore NO immediate action is required to be taken by organizations.
:::

:::info
To learn more about user management using the dashboard, [click here](../cloud-frontend-v3/Dashboard_User_Roles.md).
:::

Three predefined roles are available to manage user permissions within an organization: <span className="role role-admin">nanoAdmin</span>, <span className="role role-user">nanoUser</span> and <span className="role role-readonly">nanoReadOnly</span>. Each role grants specific access rights tailored to different needs.

| User Role | Responsibility | Access Level | Permissions |
|---|---|---|---|
| <span className="role role-admin">nanoAdmin</span> | The Administrator  | Highest  | Has full control over all functions within the organization, including managing user roles and issuing new tokens to disable existing ones. **Is the *only* role with access to user management and the API Key.** |
| <span className="role role-user">nanoUser</span>    | The Operator  | High  | Can perform all tasks related to stream management and operations, expect for changes that could disrupt operations, such as deleting or stopping streams or changing critical settings. |
| <span className="role role-readonly">nanoReadOnly</span>| The Observer  | Low  | Has read-only access to basic information such as stream configuration, stream states, metrics and alerts. |

## Getting started

:::info
With the introduction of user roles, all users maintain their previous permission level which is equivalent to the <span className="role role-admin">nanoAdmin</span> role. Therefore NO immediate action is required to be taken by organizations.
:::

Steps to apply user roles for your organization:
1. Assess required permissions and role for each user
2. Apply user role changes via [Dashboard](../cloud-frontend-v3/Dashboard_User_Roles.md) or [Bintu API]()
3. Evaluate the current usage of API Keys and the possible replacement with user-bound and expiring API tokens

## High-level Permission Overview

| Capability | nanoAdmin | nanoUser | nanoReadOnly |
|---|---|---|---|
| Get API Key | ✓ |  |  |
| Get Player Key | ✓ | ✓ | ✓ |
|  |  |  |  |
| Edit Custom Webhook | ✓ |  |  |
|  |  |  |  |
| Get Users | ✓ | ✓ |  |
| Create User | ✓ |  |  |
| Invite User | ✓ |  |  |
| Edit User | ✓ |  |  |
| Reset User Tokens | ✓ |  |  |
| Delete User | ✓ |  |  |
|  |  |  |  |
| Get Streams | ✓ | ✓ | ✓ |
| Create Stream | ✓ | ✓ |  |
| Stop stream | ✓ |  |  |
| Lock stream | ✓ |  |  |
| Unlock stream | ✓ |  |  |
| Delete stream | ✓ |  |  |
|  |  |  |  |
| Get Tags | ✓ | ✓ | ✓ |
| Create Tag | ✓ | ✓ |  |
| Edit Tag | ✓ | ✓ |  |
| Delete Tag | ✓ |  |  |
|  |  |  |  |
| Create Playback Token | ✓ | ✓ |  |
| Get Metrics and Alerts | ✓ | ✓ | ✓ |
