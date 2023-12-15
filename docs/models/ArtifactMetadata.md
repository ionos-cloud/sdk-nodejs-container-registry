# ArtifactMetadata

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **createdDate** | **string** | The ISO 8601 creation timestamp. | [optional] [default to undefined] |
| **createdBy** | **string** | Unique name of the identity that created the resource. | [optional] [default to undefined] |
| **createdByUserId** | **string** |  | [optional] [default to undefined] |
| **lastModifiedDate** | **string** | The ISO 8601 modified timestamp. | [optional] [default to undefined] |
| **lastModifiedBy** | **string** | Unique name of the identity that last modified the resource. | [optional] [default to undefined] |
| **lastModifiedByUserId** | **string** |  | [optional] [default to undefined] |
| **resourceURN** | **string** | Unique name of the resource. | [optional] [default to undefined] |
| **lastPushedAt** | **string** | The date and time the artifact was last pushed | [default to undefined] |
| **lastPulledAt** | **string** | The date and time the artifact was last pulled | [optional] [default to undefined] |
| **lastScannedAt** | **string** | The date and time the artifact was last scanned | [optional] [default to undefined] |
| **pushCount** | **number** | The number of times the artifact was pushed | [default to undefined] |
| **pullCount** | **number** | The number of times the artifact was pulled | [default to undefined] |
| **vulnMaxSeverity** | **string** | The maximum vulnerability severity of the artifact, if any | [optional] [default to undefined] |
| **vulnTotalScore** | **number** | The total CVSS score of all vulnerabilities of the artifact | [optional] [default to undefined] |
| **vulnTotalCount** | **number** | The total number of vulnerabilities of the artifact | [optional] [default to undefined] |
| **vulnFixableCount** | **number** | The number of fixable vulnerabilities of the artifact | [optional] [default to undefined] |


