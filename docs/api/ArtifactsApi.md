# ArtifactsApi

All URIs are relative to *https://api.ionos.com/containerregistries*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**registriesArtifactsGet**](ArtifactsApi.md#registriesartifactsget) | **GET** /registries/{registryId}/artifacts | Retrieve all Artifacts by Registry |
| [**registriesRepositoriesArtifactsFindByDigest**](ArtifactsApi.md#registriesrepositoriesartifactsfindbydigest) | **GET** /registries/{registryId}/repositories/{repositoryName}/artifacts/{digest} | Retrieve Artifact |
| [**registriesRepositoriesArtifactsGet**](ArtifactsApi.md#registriesrepositoriesartifactsget) | **GET** /registries/{registryId}/repositories/{repositoryName}/artifacts | Retrieve all Artifacts by Repository |
| [**registriesRepositoriesArtifactsVulnerabilitiesGet**](ArtifactsApi.md#registriesrepositoriesartifactsvulnerabilitiesget) | **GET** /registries/{registryId}/repositories/{repositoryName}/artifacts/{digest}/vulnerabilities | Retrieve all Vulnerabilities |


## registriesArtifactsGet

> <RegistryArtifactsReadList> registriesArtifactsGet(registryId, opts)

Retrieve all Artifacts by Registry

This endpoint enables retrieving all Artifacts using pagination and optional filters. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ArtifactsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve all Artifacts by Registry
api_instance
  .registriesArtifactsGet({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    offset: 0,
    limit: 100,
    filterVulnerabilityId: filterVulnerabilityId_example,
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
| **filterVulnerabilityId** | **string** | Filter resources by vulnerabilityId. | [optional][default to undefined] |
| **orderBy** | **&#39;-pullCount&#39; | &#39;-pushCount&#39; | &#39;-lastPush&#39; | &#39;-lastPull&#39; | &#39;-lastScan&#39; | &#39;-vulnTotalCount&#39; | &#39;-vulnFixableCount&#39; | &#39;pullCount&#39; | &#39;pushCount&#39; | &#39;lastPush&#39; | &#39;lastPull&#39; | &#39;lastScan&#39; | &#39;vulnTotalCount&#39; | &#39;vulnFixableCount&#39;** | The field to order the results by. If not provided, the results will be ordered by the default field. | [optional][default to &#39;-pullCount&#39;] |

### Return type

[**RegistryArtifactsReadList**](../models/RegistryArtifactsReadList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesRepositoriesArtifactsFindByDigest

> <ArtifactRead> registriesRepositoriesArtifactsFindByDigest(registryId, repositoryName, digest)

Retrieve Artifact

Returns the Artifact by Digest.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ArtifactsApi(config);
// Retrieve Artifact
api_instance
  .registriesRepositoriesArtifactsFindByDigest({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    repositoryName: my-service,
    digest: sha256:12345678901234567890123456789012
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **registryId** | [**string**](../models/.md) | The ID (UUID) of the Registry. | [default to undefined] |
| **repositoryName** | **string** | The Name of the Repository. | [default to undefined] |
| **digest** | **string** | The Digest of the Artifact that should be retrieved. | [default to undefined] |

### Return type

[**ArtifactRead**](../models/ArtifactRead.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesRepositoriesArtifactsGet

> <ArtifactReadList> registriesRepositoriesArtifactsGet(registryId, repositoryName, opts)

Retrieve all Artifacts by Repository

This endpoint enables retrieving all Artifacts using pagination and optional filters. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ArtifactsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve all Artifacts by Repository
api_instance
  .registriesRepositoriesArtifactsGet({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    repositoryName: my-service,
    offset: 0,
    limit: 100,
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
| **repositoryName** | **string** | The Name of the Repository. | [default to undefined] |
| **offset** | **number** | The first element (of the total list of elements) to include in the response. Use together with limit for pagination. | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return. Use together with offset for pagination. | [optional][default to 100] |
| **orderBy** | **&#39;-lastPush&#39; | &#39;-lastPull&#39; | &#39;-lastScan&#39; | &#39;-pullCount&#39; | &#39;-pushCount&#39; | &#39;-vulnMaxSeverity&#39; | &#39;-vulnTotalScore&#39; | &#39;-vulnTotalCount&#39; | &#39;-vulnFixableCount&#39; | &#39;lastPush&#39; | &#39;lastPull&#39; | &#39;lastScan&#39; | &#39;pullCount&#39; | &#39;pushCount&#39; | &#39;vulnMaxSeverity&#39; | &#39;vulnTotalScore&#39; | &#39;vulnTotalCount&#39; | &#39;vulnFixableCount&#39;** | The field to order the results by. If not provided, the results will be ordered by the default field. | [optional][default to &#39;-lastPush&#39;] |

### Return type

[**ArtifactReadList**](../models/ArtifactReadList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## registriesRepositoriesArtifactsVulnerabilitiesGet

> <ArtifactVulnerabilityReadList> registriesRepositoriesArtifactsVulnerabilitiesGet(registryId, repositoryName, digest, opts)

Retrieve all Vulnerabilities

This endpoint enables retrieving all Vulnerabilities using pagination and optional filters. 

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-container-registry');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.ArtifactsApi(config);
var filterMap = new Map()
filterMap.set("<property_name>", "<property_value>")
// Retrieve all Vulnerabilities
api_instance
  .registriesRepositoriesArtifactsVulnerabilitiesGet({
    registryId: 1e41a73c-59d0-5507-86dd-fa2fc2501cfd,
    repositoryName: my-service,
    digest: sha256:12345678901234567890123456789012,
    offset: 0,
    limit: 100,
    filterSeverity: filterSeverity_example,
    filterFixable: true,
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
| **repositoryName** | **string** | The Name of the Repository. | [default to undefined] |
| **digest** | **string** | The Digest of the Artifact. | [default to undefined] |
| **offset** | **number** | The first element (of the total list of elements) to include in the response. Use together with limit for pagination. | [optional][default to 0] |
| **limit** | **number** | The maximum number of elements to return. Use together with offset for pagination. | [optional][default to 100] |
| **filterSeverity** | **string** | Filter resources by vulnerability severity. | [optional][default to undefined] |
| **filterFixable** | **boolean** | Filter resources by fixable (i.e. remediation action is available) | [optional][default to undefined] |
| **orderBy** | **&#39;-score&#39; | &#39;-severity&#39; | &#39;-publishedAt&#39; | &#39;-updatedAt&#39; | &#39;-fixable&#39; | &#39;score&#39; | &#39;severity&#39; | &#39;publishedAt&#39; | &#39;updatedAt&#39; | &#39;fixable&#39;** | The field to order the results by. If not provided, the results will be ordered by the default field. | [optional][default to &#39;-score&#39;] |

### Return type

[**ArtifactVulnerabilityReadList**](../models/ArtifactVulnerabilityReadList.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

