# LocationsApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**locationsGet**](LocationsApi.md#locationsget) | **GET** /locations | Get container registry locations |


## locationsGet

> <LocationsResponse> locationsGet

Get container registry locations

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.LocationsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Get container registry locations
api_instance
  .locationsGet()
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**LocationsResponse**](../models/LocationsResponse.md)

### Authorization

basicAuth, tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

