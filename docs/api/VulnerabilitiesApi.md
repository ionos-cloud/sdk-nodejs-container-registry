# VulnerabilitiesApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**vulnerabilitiesFindByID**](VulnerabilitiesApi.md#vulnerabilitiesfindbyid) | **GET** /vulnerabilities/{vulnerabilityId} | Retrieve Vulnerability |


## vulnerabilitiesFindByID

> <VulnerabilityRead> vulnerabilitiesFindByID(vulnerabilityId)

Retrieve Vulnerability

Returns the Vulnerability by ID.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.VulnerabilitiesApi(config);
// Retrieve Vulnerability
api_instance
  .vulnerabilitiesFindByID({
    vulnerabilityId: CVE-2019-1234
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **vulnerabilityId** | **string** | The ID of the Vulnerability that should be retrieved. | [default to undefined] |

### Return type

[**VulnerabilityRead**](../models/VulnerabilityRead.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

