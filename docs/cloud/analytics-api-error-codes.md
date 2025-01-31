---
slug: /analytics/api-error-codes
id: analytics-api-error-codes
title: Analytics API Error Codes
sidebar_label: Error Code Definitions
---

In this table we provide an overview about all possible error codes that you could encounter using the nanoStream Analytics API.

## Request Configuration Errors

The following error codes will be send as a response to faulty request configurations.

| Error Code | Short Name | Description | HTTP Code |
|------------|------------|-------------|-----------|
| 10**1001** | Endpoint not found | The requested URL was not found on this server. This may happen if you are trying to access a wrong/unavailable URI endpoint. Please verify, that your request will be send to `https://metrics.nanocosmos.de/api/v2/<path-of-your-desired-endpoint>`. | 404 | 
| 10**1002** | Param required | A parameter is required, but is missing in the request. The response body should contain more information about which parameter is missing. | 400 | 
| 10**1003** | Wrong data type | Your request contains a value with an unexpected data type. Make sure you define the correct data type (e.g. numbers with/without quotes). | 400 |
| 10**1004** | Invalid value | 1 or more parameters you sent, have not passed validation. This happens, if you try to filter for non-existing countries or faulty time range references. | 400 |
| 10**1005** | Too many params | The route you are trying to access does have a maximum limit of parameters. Some routes do have a limit for stream names or tags filter. Please refer to our [API documentation](https://metrics.nanocosmos.de/api/doc/v2/) to check if there are limitations to the used route. | 400 |
| 10**1006** | Invalid request body | The request body contains invalid/unexpected data or follows an unknown/falsy structure scheme. | 400 | 
| 10**1007** | Missing props request body | The request body has missing properties. Check your request body content and compare it with the route requirements at our [API documentation](https://metrics.nanocosmos.de/api/doc/v2/) | 422 | 
| 10**1008** | General request body issue | Found issues within the request body. These can be referred to format issues (e.g. stream names must be strings), issues with one or more stream names, that do not belong to your organization or issues regarding stream alert data access, while the stream was manually excluded from alert detection before.  | 403 | 
| 10**1009** | Invalid header | The given header is invalid and does follow our request scheme. Details can be found in the response statement. | 403 |
| 10**1010** | Tag stream intersection issue | The intersection of multiple sets of streams, which are tagged with the respective tag, has resulted in an empty set of streams. Please use less or other tags for filtering. | 404 | 

Learn to specify your request correctly by taking a look at our [API documentation](https://metrics.nanocosmos.de/api/doc/v2/).


## Authentication Errors

These error codes will be send as response, if the user authentication is not working properly.

| Error Code | Short Name | Description | HTTP Code |
|------------|------------|-------------|-----------|
| 10**2001** | User not found | The used user account is not known to our systems. | 404 | 
| 10**2002** | Invalid user credentials | The provided email or/and password is/are incorrect. | 401 |
| 10**2011** | Organization not found | The used organization is not known to our systems. | 404 | 
| 10**2012** | Organization is not enabled | The used organization is not enabled. Please [contact us](https://www.nanocosmos.de/contact)! We will get in touch with you shortly. | 403 | 
| 10**2021** | API key not found |The provided API key is invalid or malformed. | 404 |


## Filter Errors

If the filter options are not used as intended, the user will be notified by these error codes.

| Error Code | Short Name | Description | HTTP Code |
|------------|------------|-------------|-----------|
| 10**3001** | Stream not found | The provided stream name is not found on our servers. Please check for typos.  | 404 | 
| 10**3002** | Tag not found | The given stream tag is not found on our servers. Please check for typos and varify if this tag actually exist, using the [bintu API](https://doc.pages.nanocosmos.de/bintuapi-docs/#operation/Tag%20Collection). | 404 | 
| 10**3003** | Country not found | The provided country/region is not known on our servers. Please check for typos.  | 404 | 

## Processing Errors

Processing errors may be encountered if something unexpected is happening on server side. The causes of this can be the results of a server maintenance, hotfixes or unexpect problems with ingest clients, etc.. If you encounter such errors, please submit a support ticket or [contact us](https://www.nanocosmos.de/contact) directly.

| Error Code | Short Name | Description | HTTP Code |
|------------|------------|-------------|-----------|
| 10**4XXX** | Internal Error | Something went wrong on our servers. Please try again later. If this issue persists, please do not hesitate to [contact our support team](https://www.nanocosmos.de/contact) | 500 |

## Accessability Errors

The following error codes do occur, if you cannot access metric data due to a problem with your login token or user permissions.

| Error Code | Short Name | Description | HTTP Code |
|------------|------------|-------------|-----------|
| 10**5001** | Access denied | You got no access to the content you requested.  | 403 |
| 10**5002** | Access level too low | Access denied: The user access level is too low. Reason could be your organisation access level or individual user role. | 403 |
| 10**5003** | Access for Analytics Dashboard only | Access denied: This route does not support requests via API. Please consider using our [Analytics Dashboard](https://metrics.nanocosmos.de/api/doc/v2/) to access further utilities and details about your live streams and audience! | 403 |
| 10**5011** | X-ACCESS-TOKEN error | The provided login token is invalid or malformed. | 401 | 
| 10**5012** | X-ACCESS-TOKEN missing | JWT token has not been set for the request. Please add to the request header field 'x-access-token' your JWT token. | 401 |
