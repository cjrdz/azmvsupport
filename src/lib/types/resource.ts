export interface AzureResource {
	resource_type: string;
	resource_group_move: 'Yes' | 'No';
	subscription_move: 'Yes' | 'No';
	region_move: 'Yes' | 'No';
	resource_category: string;
	scraped_at: string;
	source_url: string;
	last_modified: string;
}
