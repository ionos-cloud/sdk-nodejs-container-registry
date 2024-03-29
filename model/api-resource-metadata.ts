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
 * @interface ApiResourceMetadata
 */
export interface ApiResourceMetadata {

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    createdBy: string;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    createdByUserId: string;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    createdDate: string;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    lastModifiedBy?: string;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    lastModifiedByUserId?: string;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    lastModifiedDate?: string | null;

    /**
     * 
     * @type {string}
     * @memberof ApiResourceMetadata
     */
    state: string;
}


