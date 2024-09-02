---
slug: /user_roles
id: userroles
title: Role-Based Access Control (RBAC)
sidebar_label: Role-Based Access Control (RBAC)
---

:::info Bintu API v1.23.0.0
With the **`Bintu API v1.23.0.0`** we introduced a role-based access control system in Q3/2024.
:::

## Concept and Benefits

1. **Enhanced Security**:
   - **Ensuring Appropriate Permissions**: RBAC ensures that users and API access tokens are granted only the permissions needed for their tasks, minimizing potential security risks. This improves your account security and protects your organization's operations.

2. **Easy to Administer**:
   - **Simplified User Management**: RBAC allows administrators to assign roles to users rather than managing individual permissions. By assigning predefined roles based on job functions, tasks, or responsibilities, administrators can easily grant access to resources by simply choosing the appropriate role for a user.
   - **Centralized Permission Management**: By managing permissions at the role level, rather than at the individual user level, RBAC reduces the number of decisions and changes an administrator must make. This centralized approach minimizes errors and inconsistencies in access controls.

3. **Improved Visibility/Overview of User Permissions**:
   - **Clear Permission Structures**: RBAC provides a clear structure of roles and their associated permissions. This makes it easier for administrators to understand who has access to what resources and why, facilitating audits and compliance checks.
   - **Simplified Reporting and Auditing**: Since roles aggregate multiple permissions, generating reports on user access becomes more straightforward. This visibility is crucial for maintaining security, identifying potential issues, and demonstrating compliance with regulations.

## Getting started

:::caution User Roles Update: No Action Needed
With the **`Bintu API v1.23.0.0`** release introducing user roles, all users will retain their current permissions, now equivalent to the <span className="role role-admin">nanoAdmin</span> role. Therefore, **no immediate action is required** from organizations.
:::

Implementing Role-Based Access Control (RBAC) in your organization is a straightforward process that enhances security and simplifies user management. The following guide will walk you through the initial steps to configure user roles and manage permissions effectively.

### 1. Understanding User Roles
Before assigning roles, familiarize yourself with the [predefined roles available in nanoStream Cloud](#user-roles-in-nanostream-cloud). For a detailed overview of each role's permissions, refer to the [High-level Permission Overview](#high-level-permission-overview).

### 2. Evaluate and Assign Roles

Assess the responsibilities of each user within your organization and assign the appropriate role:

- **Identify Required Permissions**: Determine the level of access each user needs based on their job functions.
- **Assign Roles**: Use the [nanoStream Cloud Dashboard](../cloud-frontend-v3/Dashboard_User_Roles) or the [Bintu API](https://doc.pages.nanocosmos.de/bintuapi-docs) to assign roles to users.

### 3. Monitor and Enforce Access Control
It’s important to monitor user access and enforce RBAC policies consistently:

- **Review Existing API Key Usage**: Consider replacing static API keys with user-bound and expiring API tokens for enhanced security.
- **Audit Access**: Regularly review the permissions and roles assigned to users to ensure they align with current responsibilities and security requirements.

## User Roles in nanoStream Cloud

:::caution User Roles Update: No Action Needed
With the **`Bintu API v1.23.0.0`** release introducing user roles, all users will retain their current permissions, now equivalent to the <span className="role role-admin">nanoAdmin</span> role. Therefore, **no immediate action is required** from organizations.
:::

:::note
To learn more about user management using the dashboard, [click here](../cloud-frontend-v3/Dashboard_User_Roles.md).
:::

Three predefined roles are available to manage user permissions within an organization: <span className="role role-admin">nanoAdmin</span>, <span className="role role-user">nanoUser</span> and <span className="role role-readonly">nanoReadOnly</span>. Each role grants specific access rights tailored to different needs.

| User Role | Responsibility | Access Level | Permissions |
|---|---|---|---|
| <span className="role role-admin">nanoAdmin</span> | The Administrator  | Highest  | Has full control over all functions within the organization, including managing user roles and issuing new tokens to disable existing ones. **Is the *only* role with access to user management and the API Key.**  |
| <span className="role role-user">nanoUser</span>    | The Operator  | High  | Can perform all tasks related to stream management and operations, expect for changes that could disrupt operations, such as deleting or stopping streams or changing critical settings. |
| <span className="role role-readonly">nanoReadOnly</span>| The Observer  | Low  | Has read-only access to basic information such as stream configuration, stream states, metrics and alerts. |

:::info More Info
For a detailed overview of each role's permissions, refer to the [High-level Permission Overview](#high-level-permission-overview).
:::

## Bintu API Endpoints

- PUT /user/permission - [More info](https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/User/paths/~1user~1permission/put) -  Update the user role of a user of your organization
- PUT /user/tokenkey - [More info](https://doc.pages.nanocosmos.de/bintuapi-docs/#tag/User/paths/~1user~1tokenkey/put) - Renew a user `tokenkey` to invalidate previously created API tokens
- GET /permission - [More info](https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/getPermissionProfileByName) - Get the available endpoint valids for given permission (by name)
- GET /permission/list - [More info](https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/Permission%20List) - List available roles and the associated permissions for your organization
- GET /user -[More info](https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/User%20Info) - This already existing endpoint now displays the permission of the users and an internal identifier

## Token API Endpoints

- POST /bintu/token - [More info](https://doc.pages.nanocosmos.de/cloudtokenservice-api-docs/#operation/Create%20a%20token%20for%20the%20bintu%20services) - Create an API token for the Bintu services

## High-level Permission Overview

| Capability | <span className="role role-admin">nanoAdmin</span> | <span className="role role-user">nanoUser</span> | <span className="role role-readonly">nanoReadOnly</span> |
|---|---|---|---|
|**API Access** | | | |
| Get API Key | ✓ |  |  |
| Get Player Key | ✓ | ✓ | ✓ |
| Get User API Token | ✓ | ✓ | ✓ |
| **Webhook Management**   |  |  |  |
| Set Custom Webhook | ✓ |  |  |
| **User Management** |  |  |  |
| Get Users | ✓ | ✓ |  |
| Create User | ✓ |  |  |
| Invite User | ✓ |  |  |
| Edit User | ✓ |  |  |
| Reset User API Tokens | ✓ |  |  |
| Delete User | ✓ |  |  |
| **Stream Management** |  |  |  |
| Get Streams | ✓ | ✓ | ✓ |
| Create Stream | ✓ | ✓ |  |
| Stop stream | ✓ |  |  |
| Lock stream | ✓ |  |  |
| Unlock stream | ✓ |  |  |
| Delete stream | ✓ |  |  |
| **Tag Management** |  |  |  |
| Get Tags | ✓ | ✓ | ✓ |
| Create Tag | ✓ | ✓ |  |
| Edit Tag | ✓ | ✓ |  |
| Delete Tag | ✓ |  |  |
| **Playback & Monitoring** |  |  |  |
| Create Playback Token | ✓ | ✓ |  |
| Get Metrics and Alerts | ✓ | ✓ | ✓ |
