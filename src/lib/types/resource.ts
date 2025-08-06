/**
 * Represents an Azure resource with its movement capabilities and methods
 *
 * This interface defines the structure for tracking whether Azure resources
 * can be moved between different scopes (resource groups, subscriptions, regions)
 * and provides guidance on how to perform these movements.
 */
export interface AzureResource {
	/** Resource provider name (e.g., "Microsoft.Compute", "Microsoft.Storage", "Microsoft.Sql") */
	resource_provider: string;

	/** The specific type of Azure resource (e.g., "Virtual Machine", "Storage Account", "SQL Database") */
	resource_type: string;

	// Movement Capability Flags - indicate whether movement is supported
	/** Whether this resource can be moved between resource groups within the same subscription */
	resource_group_move: 'Yes' | 'No';

	/** Whether this resource can be moved between different Azure subscriptions */
	subscription_move: 'Yes' | 'No';

	/** Whether this resource can be moved between different Azure regions */
	region_move: 'Yes' | 'No';
}
