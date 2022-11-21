# RepositoriesApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**registriesRepositoriesDelete**](RepositoriesApi.md#registriesrepositoriesdelete) | **DELETE** /registries/{registryId}/repositories/{name} | Delete repository |


## registriesRepositoriesDelete

> registriesRepositoriesDelete(registryId, name)

Delete repository

Delete all repository contents    The registry V2 API allows manifests and blobs to be deleted individually but it is not possible to remove an entire repository.   This operation is provided for convenience

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RepositoriesApi(config);
// Delete repository
api_instance
  .registriesRepositoriesDelete({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    name: ubuntu
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **name** | **string** | The name of the repository | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

