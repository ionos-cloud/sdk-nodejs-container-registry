# CHANGELOG

## 1.1.0
### Changes
- Rename `name` ro `repositoryName` in registriesRepositoriesDelete
### Features:
Added support for **Container Registry Vulnerability Scanning**:
- New APIs added: `artifacts-api.ts` and `vulnerabilities-api.ts`
- Added new methods to `repositories-api.ts`: `registriesRepositoriesFindByName` and `registriesRepositoriesGet`

## SDK NodeJS Container Registry v1.0.0

### Overview
This is the first release of the SDK NodeJS Container Registry. The IONOS Container Registry SDK for NodeJs provides you with access to the Container Registry API. Container Registry service enables IONOS clients to manage docker and OCI compliant registries for use by their manage Kubernetes clusters. Use a Container Registry to ensure you have a privately accessed registry to efficiently support image pulls.
