<script lang="ts">
	import type { AzureResource } from '$lib/types/resource';

	export let resources: AzureResource[] = [];
	export let searchTerm: string = '';

	function getStatusClass(status: string): string {
		return status === 'Yes' ? 'has-text-success' : 'has-text-danger';
	}

	function getStatusIcon(status: string): string {
		return status === 'Yes' ? 'fas fa-check' : 'fas fa-times';
	}

	function formatDate(dateString: string): string {
		return new Date(dateString).toLocaleDateString();
	}
</script>

{#if resources.length > 0}
	<div class="box">
		<div class="table-container">
			<table class="table is-fullwidth is-striped is-hoverable">
				<thead>
					<tr>
						<th>Resource Type</th>
						<th>Resource Group Move</th>
						<th>Subscription Move</th>
						<th>Region Move</th>
						<th>Category</th>
						<th>Last Modified</th>
					</tr>
				</thead>
				<tbody>
					{#each resources as resource (resource.resource_type)}
						<tr>
							<td>
								<strong>{resource.resource_type}</strong>
							</td>
							<td>
								<span class="icon-text {getStatusClass(resource.resource_group_move)}">
									<span class="icon">
										<i class={getStatusIcon(resource.resource_group_move)}></i>
									</span>
									<span>{resource.resource_group_move}</span>
								</span>
							</td>
							<td>
								<span class="icon-text {getStatusClass(resource.subscription_move)}">
									<span class="icon">
										<i class={getStatusIcon(resource.subscription_move)}></i>
									</span>
									<span>{resource.subscription_move}</span>
								</span>
							</td>
							<td>
								<span class="icon-text {getStatusClass(resource.region_move)}">
									<span class="icon">
										<i class={getStatusIcon(resource.region_move)}></i>
									</span>
									<span>{resource.region_move}</span>
								</span>
							</td>
							<td>
								<span class="tag is-primary">{resource.resource_category}</span>
							</td>
							<td>
								{formatDate(resource.last_modified)}
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
{:else if searchTerm}
	<div class="notification is-warning">
		<p>No results found for "<strong>{searchTerm}</strong>"</p>
		<p>Try searching for: domainservices, diagnosticsettings, tenants, etc.</p>
	</div>
{:else}
	<div class="notification is-info">
		<p>Enter a resource type in the search bar to view Azure resource move support information.</p>
	</div>
{/if}
