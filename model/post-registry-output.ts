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
 * @interface PostRegistryOutput
 */
export interface PostRegistryOutput {

    /**
     * 
     * @type {string}
     * @memberof PostRegistryOutput
     */
    href?: string;

    /**
     * 
     * @type {string}
     * @memberof PostRegistryOutput
     */
    id?: string;

    /**
     * 
     * @type {ApiResourceMetadata}
     * @memberof PostRegistryOutput
     */
    metadata: ApiResourceMetadata | null;

    /**
     * 
     * @type {RegistryProperties}
     * @memberof PostRegistryOutput
     */
    properties: RegistryProperties | null;

    /**
     * 
     * @type {string}
     * @memberof PostRegistryOutput
     */
    type?: string;
}


