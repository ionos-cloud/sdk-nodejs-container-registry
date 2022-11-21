/* tslint:disable */
/* eslint-disable */
/**
 * Container Registry service
 * Container Registry service enables IONOS clients to manage docker and OCI compliant registries for use by their managed Kubernetes clusters. Use a Container Registry to ensure you have a privately accessed registry to efficiently support image pulls.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@cloud.ionos.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ApiResourceMetadata } from './api-resource-metadata';
import { RegistryProperties } from './registry-properties';

/**
 * 
 * @export
 * @interface RegistryResponse
 */
export interface RegistryResponse {

    /**
     * 
     * @type {string}
     * @memberof RegistryResponse
     */
    href?: string;

    /**
     * 
     * @type {string}
     * @memberof RegistryResponse
     */
    id?: string;

    /**
     * 
     * @type {ApiResourceMetadata}
     * @memberof RegistryResponse
     */
    metadata: ApiResourceMetadata | null;

    /**
     * 
     * @type {RegistryProperties}
     * @memberof RegistryResponse
     */
    properties: RegistryProperties | null;

    /**
     * 
     * @type {string}
     * @memberof RegistryResponse
     */
    type?: string;
}


