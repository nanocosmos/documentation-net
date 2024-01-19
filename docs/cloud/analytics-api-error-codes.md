---
id: analytics-api-error-codes
title: Error Codes
sidebar_label: Error Code Definitions
---

In this table we provide an overview and description about all possible error codes of the Analytics API.  

| Error Code | Error Message | HTTP Code | 
|------------|---------------|-----------| 
| E1001_ENDPOINT_NOT_FOUND | The requested URL was not found on this server | 404 | 
| E1002_PARAM_REQUIRED | Parameter is required | 400 | 
| E1003_WRONG_DATA_TYPE | Wrong data type | 400 | 
| E1004_INVALID_VALUE | Invalid value | 400 | 
| E1005_TOO_MANY_PARAMS | Too many parameters | 400 | 
| E1006_INVALID_REQ_BODY | Error while JSON/URL request body parsing | 400 | 
| E1007_MISSING_PROPS_REQ_BODY | The request body has missing properties | 422 | 
| E1008_GENERAL_REQ_BODY_ISSUES | Found issues with the request body | 403 | 
| E1009_INVALID_HEADER | The given header is invalid | 403 | 
| E2001_USER_NOT_FOUND | User not found | 404 | 
| E2002_INVALID_USER_CREDENTIALS | Invalid user credentials | 401 | 
| E2011_ORGA_NOT_FOUND | Organization not found | 404 | 
| E2012_ORGA_IS_NOT_ENABLED | Organization is not enabled | 403 | 
| E2021_API_KEY_NOT_FOUND | API key not found or invalid | 404 | 
| E3001_STREAM_NOT_FOUND | Stream not found | 404 | 
| E3002_TAG_NOT_FOUND | Tag not found | 404 | 
| E3003_COUNTRY_NOT_FOUND | Country/region not found | 404 | 
| E4001_INTERNAL_ERROR | DefaultErrorMsg | 500 | 
| E4002_TAG_STREAM_INTERSECTION_ISSUE | The intersection of multiple sets of streams, which are tagged with the respective tag, has resulted in an empty set of streams. Please use less or other tags for filtering. | 404 | 
| E4011_REDIS_GENERAL_ISSUE | DefaultErrorMsg | 500 | | E4012_REDIS_KEY_ISSUE | DefaultErrorMsg | 500 | | E5001_ES_TIMEOUT | Data request ran into timeout | 500 | 
| E5002_ES_GENERAL_ISSUE | DefaultErrorMsg | 500 | 
| E5003_ES_SHARD_ERROR | DefaultErrorMsg | 500 | 
| E5010_AUX_ERROR | DefaultErrorMsg | 500 | 
| E5011_AUX_HTTP_ERROR | DefaultErrorMsg | 500 | 
| E5020_BINTU_ERROR | DefaultErrorMsg | 500 | 
| E5021_BINTU_HTTP_ERROR | DefaultErrorMsg | 500 | 
| E5030_CTS_ERROR | DefaultErrorMsg | 500 | 
| E5031_CTS_HTTP_ERROR | DefaultErrorMsg | 500 | 
| E6001_ACCESS_DENIED | Access denied | 403 | 
| E6002_ACCESS_LVL_TOO_LOW | Access denied: User access level is too low | 403 | 
| E6003_ACCESS_FOR_FE_ONLY | Access denied: Only FE requests are allowed | 403 | 
| E6011_JWT_ERROR | Invalid JWT token | 401 | 
| E6012_JWT_MISSING | JWT token has not been set for the request. Please add to the request header field 'x-access-token' your JWT token. | 401 |