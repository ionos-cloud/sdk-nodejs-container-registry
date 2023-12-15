/* tslint:disable */
/* eslint-disable */
/**
 * Container Registry service
 * ## Overview Container Registry service enables IONOS clients to manage docker and OCI compliant registries for use by their managed Kubernetes clusters. Use a Container Registry to ensure you have a privately accessed registry to efficiently support image pulls. ## Changelog ### 1.1.0  - Added new endpoints for Repositories  - Added new endpoints for Artifacts  - Added new endpoints for Vulnerabilities  - Added registry vulnerabilityScanning feature 
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support@cloud.ionos.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ArtifactMetadataAllOf
 */
export interface ArtifactMetadataAllOf {

    /**
     * The date and time the artifact was last pushed
     * @type {string}
     * @memberof ArtifactMetadataAllOf
     */
    lastPushedAt: string;

    /**
     * The date and time the artifact was last pulled
     * @type {string}
     * @memberof ArtifactMetadataAllOf
     */
    lastPulledAt?: string;

    /**
     * The date and time the artifact was last scanned
     * @type {string}
     * @memberof ArtifactMetadataAllOf
     */
    lastScannedAt?: string;

    /**
     * The number of times the artifact was pushed
     * @type {number}
     * @memberof ArtifactMetadataAllOf
     */
    pushCount: number;

    /**
     * The number of times the artifact was pulled
     * @type {number}
     * @memberof ArtifactMetadataAllOf
     */
    pullCount: number;

    /**
     * The maximum vulnerability severity of the artifact, if any
     * @type {string}
     * @memberof ArtifactMetadataAllOf
     */
    vulnMaxSeverity?: string;

    /**
     * The total CVSS score of all vulnerabilities of the artifact
     * @type {number}
     * @memberof ArtifactMetadataAllOf
     */
    vulnTotalScore?: number;

    /**
     * The total number of vulnerabilities of the artifact
     * @type {number}
     * @memberof ArtifactMetadataAllOf
     */
    vulnTotalCount?: number;

    /**
     * The number of fixable vulnerabilities of the artifact
     * @type {number}
     * @memberof ArtifactMetadataAllOf
     */
    vulnFixableCount?: number;
}


