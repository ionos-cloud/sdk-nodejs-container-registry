# RepositoriesApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**registriesRepositoriesDelete**](RepositoriesApi.md#registriesrepositoriesdelete) | **DELETE** /registries/{registryId}/repositories/{repositoryName} | Delete repository |
| [**registriesRepositoriesFindByName**](RepositoriesApi.md#registriesrepositoriesfindbyname) | **GET** /registries/{registryId}/repositories/{repositoryName} | Retrieve Repository |
| [**registriesRepositoriesGet**](RepositoriesApi.md#registriesrepositoriesget) | **GET** /registries/{registryId}/repositories | Retrieve all Repositories |


## registriesRepositoriesDelete

> registriesRepositoriesDelete(registryId, repositoryName)

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
    repositoryName: my-service
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **repositoryName** | **string** | The name of the repository | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## registriesRepositoriesFindByName

> <RepositoryRead> registriesRepositoriesFindByName(registryId, repositoryName)

Retrieve Repository

Returns the Repository by Name.

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
// Retrieve Repository
api_instance
  .registriesRepositoriesFindByName({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    repositoryName: my-service
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The ID (UUID) of the Registry. | [default to undefined] |
| **repositoryName** | **string** | The Name of the Repository that should be retrieved. | [default to undefined] |

### Return type

[**RepositoryRead**](../models/RepositoryRead.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesRepositoriesGet

> <RepositoryReadList> registriesRepositoriesGet(registryId, opts)

Retrieve all Repositories

This endpoint enables retrieving all Repositories using pagination and optional filters. 

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
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve all Repositories
api_instance
  .registriesRepositoriesGet({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    offset: 0,
    limit: 100,
    filterName: filterName_example,
    filterVulnerabilitySeverity: filterVulnerabilitySeverity_example,
    orderBy: orderBy_example, 
    maxResults: 2,
    filters: filterMap
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The ID (UUID) of the Registry. | [default to undefined] |
| **offset** | **number** | The first element (of the total list of elements) to include in the response. Use together with limit for pagination. | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return. Use together with offset for pagination. | [optional][default to 100] |
| **filterName** | **string** | Filter resources by name. | [optional][default to undefined] |
| **filterVulnerabilitySeverity** | **string** | Filter resources by vulnerability severity. | [optional][default to undefined] |
| **orderBy** | **&#39;-lastPush&#39; | &#39;-lastPull&#39; | &#39;-artifactCount&#39; | &#39;-pullCount&#39; | &#39;-pushCount&#39; | &#39;name&#39; | &#39;lastPush&#39; | &#39;lastPull&#39; | &#39;artifactCount&#39; | &#39;pullCount&#39; | &#39;pushCount&#39;** | The field to order the results by. If not provided, the results will be ordered by the default field. | [optional][default to &#39;-lastPush&#39;] |

### Return type

[**RepositoryReadList**](../models/RepositoryReadList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

