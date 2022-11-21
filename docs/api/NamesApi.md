# NamesApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**namesCheckUsage**](NamesApi.md#namescheckusage) | **HEAD** /names/{name} | Get container registry name availability |


## namesCheckUsage

> namesCheckUsage(name)

Get container registry name availability

Validate that the name is suitable to use for a new registry: - it uses only the characters \"a-z\", \"0-9\", or \"-\" - and starts with a letter and ends with a letter or number - and is between 3 to 63 characters in length - and is available

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.NamesApi(config);
// Get container registry name availability
api_instance
  .namesCheckUsage({
    name: name_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **string** | The desired registry name | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

