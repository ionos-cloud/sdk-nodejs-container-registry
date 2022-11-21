[![[ CI ] Container Registry / Node](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-container-registry-node.yml/badge.svg)](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-container-registry-node.yml)
[![Npm Version](https://img.shields.io/node/v/@ionos-cloud/sdk-nodejs-container-registry)](https://www.npmjs.com/package/@ionos-cloud/sdk-nodejs-container-registry) 
[![Gitter](https://img.shields.io/gitter/room/ionos-cloud/sdk-general)](https://gitter.im/ionos-cloud/sdk-general)

# Node API Client For IONOS Cloud Container Registry

# Overview
The IONOS Container Registry SDK for Java provides you with access to the Container Registry API. Container Registry service enables IONOS clients to manage docker and OCI compliant registries for use by their manage Kubernetes clusters. Use a Container Registry to ensure you have a privately accessed registry to efficiently support image pulls.

> ⚠️ **Note:** Container registry is currently in the **Early Access (EA)** phase. We recommend keeping usage and testing to non-production critical applications. Please contact your sales representative or support for more information.

## Getting Started

An IONOS account is required for access to the Cloud API; credentials from your registration are used to authenticate against the IONOS Cloud API.

## Installation

Install the following dependencies:

```shell
npm i --save @ionos-cloud/sdk-nodejs-container-registry
```

## Usage
Import the SDK using:

```javascript
const sdk = require('@ionos-cloud/sdk-nodejs-container-registry')
```

Or, if the import is done from an ES module, use:

```javascript
import * as sdk from '@ionos-cloud/sdk-nodejs-container-registry';
```

Usage example:
```javascript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const registriesApi = new sdk.RegistriesApi(config);

registriesApi.registriesGet().then((response) => console.log(response));
```

### Authentication

The username and password or the authentication token can be manually specified when initializing the SDK client:

```typescript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const registriesApi = new sdk.RegistriesApi(config);
```

Environment variables can also be used; the SDK uses the following variables:

* IONOS\_USERNAME - to specify the username used to login
* IONOS\_PASSWORD - to specify the password
* IONOS\_TOKEN - if an authentication token is being used

In this case, the client configuration must be initialized using `fromEnv()`:

```javascript
registriesApi = new sdk.RegistriesApi(sdk.Configuration.fromEnv());
```

**Warning**: Make sure to follow the Information Security Best Practices when using credentials within your code or storing them in a file.

## Feature Reference

The IONOS Cloud SDK for Nodejs Container Registry aims to offer access to all resources in the IONOS Container Registry API, and has additional features to make integration easier:

* Authentication for API calls
* Asynchronous request handling

## FAQ

1. How can I open a bug report/feature request?

Bug reports and feature requests can be opened in the Issues repository: [https://github.com/ionos-cloud/sdk-nodejs-container-registry/issues/new/choose](https://github.com/ionos-cloud/sdk-nodejs-container-registry/issues/new/choose)

2. Can I contribute to the NodeJS Container Registry SDK?

Our SDKs are automatically generated using OpenAPI Generator and don’t support manual changes. If you require changes, please open an issue and we will try to address it.
