<script lang="ts">
	import type { AzureResource } from '$lib/types/resource';

	// Exported props for the component.
	export let resources: AzureResource[] = [];
	export let searchTerm: string = '';

	/**
	 * Returns the appropriate Bulma text color class based on the status.
	 * Used for 'Yes' (success/green) or other (danger/red) statuses.
	 * @param status The status string ('Yes' or 'No').
	 * @returns Bulma text color class.
	 */
	function getStatusClass(status: string): string {
		return status === 'Yes' ? 'has-text-success' : 'has-text-danger';
	}

	/**
	 * Returns the appropriate Font Awesome icon class based on the status.
	 * Used for 'Yes' (check mark) or other (times/cross) statuses.
	 * @param status The status string ('Yes' or 'No').
	 * @returns Font Awesome icon class.
	 */
	function getStatusIcon(status: string): string {
		return status === 'Yes' ? 'fas fa-check' : 'fas fa-times';
	}

	/**
	 * Formats a date string into a localized date string.
	 * @param dateString The date string to format.
	 * @returns Formatted date string.
	 */
	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString();
	}
</script>

<!-- Conditional rendering: displays table if resources are found. -->
{#if resources.length > 0}
	<!-- Bulma 'box' component for a nice container around the table. -->
	<!-- <div class="box"> -->
	<!--
			Bulma's 'table-container' class is essential for responsiveness.
			It makes the table horizontally scrollable on smaller screens
			if the content exceeds the viewport width, preventing overflow issues.
		-->
	<div class="table-container is-fluid">
		<!--
				Bulma 'table' classes:
				- 'is-fullwidth': Makes the table take 100% of its parent's width.
				- 'is-striped': Adds alternating row background colors.
				- 'is-hoverable': Adds a hover effect to table rows.
			-->
		<table class="table is-fullwidth is-striped is-hoverable table is-bordered">
			<thead>
				<tr>
					<th class="is-link"><b>Resource Type</b></th>
					<th class="is-link"><b>RG Move</b></th>
					<th class="is-link"><b>Sub Move</b></th>
					<th class="is-link"><b>Region Move</b></th>
					<th class="is-link"><b>Last update</b></th>
				</tr>
			</thead>
			<tbody>
				<!-- Loop through each resource to create a table row. -->
				{#each resources as resource (resource.resource_type)}
					<tr>
						<td class="is-dark">
							<strong>{resource.resource_type}</strong>
						</td>
						<td class="is-dark">
							<!--
									'icon-text' combines an icon and text on the same line.
									'icon' class ensures proper spacing and alignment for the Font Awesome icon.
								-->
							<span class="icon-text {getStatusClass(resource.resource_group_move)}">
								<span class="icon">
									<i class={getStatusIcon(resource.resource_group_move)}></i>
								</span>
								<span>{resource.resource_group_move}</span>
							</span>
						</td>
						<td class="is-dark">
							<span class="icon-text {getStatusClass(resource.subscription_move)}">
								<span class="icon">
									<i class={getStatusIcon(resource.subscription_move)}></i>
								</span>
								<span>{resource.subscription_move}</span>
							</span>
						</td>
						<td class="is-dark">
							<span class="icon-text {getStatusClass(resource.region_move)}">
								<span class="icon">
									<i class={getStatusIcon(resource.region_move)}></i>
								</span>
								<span>{resource.region_move}</span>
							</span>
						</td>
						<td class="is-dark">
							{formatDate(resource.last_modified)}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!-- </div> -->
	<!-- Conditional rendering: displays warning if no results found for a search term. -->
{:else if searchTerm}
	<div class="notification is-warning">
		<p>No results found for "<strong>{searchTerm}</strong>"</p>
		<p>Try searching for: domainservices, diagnosticsettings, tenants, etc.</p>
	</div>
	<!-- Conditional rendering: displays info message when no search term is entered. -->
{:else}
	<div class="notification is-info">
		<p>Enter a resource type in the search bar to view Azure resource move support information.</p>
	</div>
{/if}
