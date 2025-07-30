<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ResourceTable from '$lib/components/ResourceTable.svelte';
	import type { AzureResource } from '$lib/types/resource';
	import resourcesData from '$lib/data/resources.json';

	let filteredResources: AzureResource[] = [];
	let searchTerm: string = '';

	function handleSearch(event: CustomEvent<string>) {
		searchTerm = event.detail.toLowerCase();

		if (searchTerm.trim() === '') {
			filteredResources = [];
			return;
		}

		filteredResources = (resourcesData as AzureResource[]).filter((resource: AzureResource) =>
			resource.resource_type.toLowerCase().includes(searchTerm)
		);
	}
</script>

<svelte:head>
	<title>Azure Resource Move Support Search</title>
	<meta
		name="description"
		content="Search Azure resource types and their move support capabilities"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>

<div class="hero is-info is-small">
	<div class="hero-body">
		<div class="container has-text-centered">
			<h1 class="title is-1">
				<span class="icon is-large">
					<i class="fab fa-microsoft"></i>
				</span>
				Azure Resource Search
			</h1>
			<h2 class="subtitle is-3">Find Azure resource move support information</h2>
		</div>
	</div>
</div>

<section class="section">
	<div class="container">
		<div class="columns is-centered">
			<div class="column is-8">
				<SearchBar on:search={handleSearch} />
			</div>
		</div>

		<div class="mt-5">
			<ResourceTable resources={filteredResources} {searchTerm} />
		</div>

		{#if filteredResources.length > 0}
			<div class="mt-4">
				<div class="notification is-success is-light">
					<p>
						<strong
							>Found {filteredResources.length} result{filteredResources.length === 1
								? ''
								: 's'}</strong
						>
						for "{searchTerm}"
					</p>
				</div>
			</div>
		{/if}
	</div>
</section>

<footer class="footer">
	<div class="content has-text-centered">
		<p>
			<strong>Azure Resource Search</strong> - Built with SvelteKit and Bulma CSS
		</p>
		<p>
			Data source: <a
				href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/move-support-resources"
				target="_blank"
				rel="noopener">Microsoft Azure Documentation</a
			> 
		</p>
		<p>
			Scraped with Scrapy:
			<a
				href="https://www.scrapy.org"
				target="_blank"
				rel="noopener">Scrapy</a
			>
		</p>
	</div>
</footer>
