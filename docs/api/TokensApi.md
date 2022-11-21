# TokensApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**registriesTokensDelete**](TokensApi.md#registriestokensdelete) | **DELETE** /registries/{registryId}/tokens/{tokenId} | Delete token |
| [**registriesTokensFindById**](TokensApi.md#registriestokensfindbyid) | **GET** /registries/{registryId}/tokens/{tokenId} | Get token information |
| [**registriesTokensGet**](TokensApi.md#registriestokensget) | **GET** /registries/{registryId}/tokens | List all tokens for the container registry |
| [**registriesTokensPatch**](TokensApi.md#registriestokenspatch) | **PATCH** /registries/{registryId}/tokens/{tokenId} | Update token |
| [**registriesTokensPost**](TokensApi.md#registriestokenspost) | **POST** /registries/{registryId}/tokens | Create token |
| [**registriesTokensPut**](TokensApi.md#registriestokensput) | **PUT** /registries/{registryId}/tokens/{tokenId} | Create or replace token |


## registriesTokensDelete

> registriesTokensDelete(registryId, tokenId)

Delete token

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
// Delete token
api_instance
  .registriesTokensDelete({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    tokenId: 38400000-8cf0-11bd-b23e-10b96e4ef00d
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **tokenId** | [**string**](../models/.md) | The unique ID of the token | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesTokensFindById

> <TokenResponse> registriesTokensFindById(registryId, tokenId)

Get token information

Gets all information for a specific token used to access a container registry

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
// Get token information
api_instance
  .registriesTokensFindById({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    tokenId: 38400000-8cf0-11bd-b23e-10b96e4ef00d
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **tokenId** | [**string**](../models/.md) | The unique ID of the token | [default to undefined] |

### Return type

[**TokenResponse**](../models/TokenResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesTokensGet

> <TokensResponse> registriesTokensGet(registryId, opts)

List all tokens for the container registry

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// List all tokens for the container registry
api_instance
  .registriesTokensGet({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    offset: offset_example,
    limit: limit_example, 
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
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **offset** | **string** | The first element (from the complete list of the elements) to include in the response (used together with limit for pagination) | [optional][default to &#39;0&#39;] |
| **limit** | **string** | The maximum number of elements to return (used together with offset for pagination) | [optional][default to &#39;100&#39;] |

### Return type

[**TokensResponse**](../models/TokensResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesTokensPatch

> <TokenResponse> registriesTokensPatch(registryId, tokenId, patchTokenInput)

Update token

Update token properties, for example: - change status to \'enabled\' or \'disabled\' - change expiry date

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
// Update token
api_instance
  .registriesTokensPatch({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    tokenId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    patchTokenInput: patchTokenInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **tokenId** | [**string**](../models/.md) | The unique ID of the token | [default to undefined] |
| **patchTokenInput** | [**PatchTokenInput**](../models/PatchTokenInput.md) |  |  |

### Return type

[**TokenResponse**](../models/TokenResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registriesTokensPost

> <PostTokenOutput> registriesTokensPost(registryId, postTokenInput)

Create token

Create a token - password is only available once in the POST response

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
// Create token
api_instance
  .registriesTokensPost({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    postTokenInput: postTokenInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **postTokenInput** | [**PostTokenInput**](../models/PostTokenInput.md) |  |  |

### Return type

[**PostTokenOutput**](../models/PostTokenOutput.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## registriesTokensPut

> <PutTokenOutput> registriesTokensPut(registryId, tokenId, putTokenInput)

Create or replace token

Create/replace a token - password is only available once in the create response - \"name\" cannot be changed

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.TokensApi(config);
// Create or replace token
api_instance
  .registriesTokensPut({
    registryId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    tokenId: tokenId_example,
    putTokenInput: putTokenInput_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The unique ID of the registry | [default to undefined] |
| **tokenId** | **string** | The unique ID of the token | [default to undefined] |
| **putTokenInput** | [**PutTokenInput**](../models/PutTokenInput.md) |  |  |

### Return type

[**PutTokenOutput**](../models/PutTokenOutput.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

