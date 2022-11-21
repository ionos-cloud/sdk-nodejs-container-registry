# RegistriesApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**registriesDelete**](RegistriesApi.md#registriesdelete) | **DELETE** /registries/{registryId} | Delete registry |
| [**registriesFindById**](RegistriesApi.md#registriesfindbyid) | **GET** /registries/{registryId} | Get a registry |
| [**registriesGet**](RegistriesApi.md#registriesget) | **GET** /registries | List all container registries |
| [**registriesPatch**](RegistriesApi.md#registriespatch) | **PATCH** /registries/{registryId} | Update the properties of a registry |
| [**registriesPost**](RegistriesApi.md#registriespost) | **POST** /registries | Create container registry |
| [**registriesPut**](RegistriesApi.md#registriesput) | **PUT** /registries/{registryId} | Create or replace a container registry |


## registriesDelete

> registriesDelete(registryId)

Delete registry

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
// Delete registry
api_instance
  .registriesDelete({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesFindById

> <RegistryResponse> registriesFindById(registryId)

Get a registry

Get all information for a specific container registry

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
// Get a registry
api_instance
  .registriesFindById({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |

### Return type

[**RegistryResponse**](../models/RegistryResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesGet

> <RegistriesResponse> registriesGet(opts)

List all container registries

List all managed container registries for your account

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List all container registries
api_instance
  .registriesGet({
    filterName: my-registry,
    limit: limit_example,
    paginationToken: eyJ2IjoibWV0YS5rOHMuaW8vdjEiLCJydiI6MTYzMjQ0OTk2ODAsInN0YXJ0IjoiM2RmYTc3YjctZGIwNS00MjMwLThmMjAtOGU3NjJlOTUxOTUzXHUwMDAwIn0
    orderBy: "<property_name>"
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
| **filterName** | **string** | The registry name to search for | [optional][default to undefined] |
| **limit** | **string** | The maximum number of elements to return (used together with pagination.token for pagination) | [optional][default to &#39;100&#39;] |
| **paginationToken** | **string** | An opaque token used to iterate the set of results (used together with limit for pagination) | [optional][default to undefined] |

### Return type

[**RegistriesResponse**](../models/RegistriesResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesPatch

> <RegistryResponse> registriesPatch(registryId, patchRegistryInput)

Update the properties of a registry

Update the properties of a registry - \"garbageCollectionSchedule\" time and days of the week for runs

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
// Update the properties of a registry
api_instance
  .registriesPatch({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    patchRegistryInput: patchRegistryInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **patchRegistryInput** | [**PatchRegistryInput**](../models/PatchRegistryInput.md) |  |  |

### Return type

[**RegistryResponse**](../models/RegistryResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registriesPost

> <PostRegistryOutput> registriesPost(postRegistryInput)

Create container registry

Create a registry to hold container images or OCI compliant artifacts - \"name\" must have passed validation - \"location\" must be one of the available location IDs - \"garbageCollectionSchedule\" time and days of the week for runs

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
// Create container registry
api_instance
  .registriesPost({
    postRegistryInput: postRegistryInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **postRegistryInput** | [**PostRegistryInput**](../models/PostRegistryInput.md) |  |  |

### Return type

[**PostRegistryOutput**](../models/PostRegistryOutput.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registriesPut

> <PutRegistryOutput> registriesPut(registryId, putRegistryInput)

Create or replace a container registry

Create/replace a registry to hold container images or OCI compliant artifacts  **On create** - \"name\" must have passed validation - \"location\" must be one of the available location IDs  **On update** - \"name\" cannot be changed - \"location\" cannot be changed  **On create or update** - \"garbageCollectionSchedule\": time and days of the week for runs 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.RegistriesApi(config);
// Create or replace a container registry
api_instance
  .registriesPut({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    putRegistryInput: putRegistryInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **putRegistryInput** | [**PutRegistryInput**](../models/PutRegistryInput.md) |  |  |

### Return type

[**PutRegistryOutput**](../models/PutRegistryOutput.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

