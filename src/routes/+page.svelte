<script lang="ts">
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ResourceTable from '$lib/components/ResourceTable.svelte';
	import type { AzureResource } from '$lib/types/resource';
	// Importing resource data from a JSON file.
	import resourcesData from '$lib/data/resources.json';

	// Reactive variables to store filtered resources and the current search term.
	let filteredResources: AzureResource[] = [];
	let searchTerm: string = '';

	/**
	 * Handles the search event dispatched from the SearchBar component.
	 * Filters the resources based on the search term.
	 * @param event CustomEvent containing the search term string.
	 */
	function handleSearch(event: CustomEvent<string>) {
		searchTerm = event.detail.toLowerCase(); // Convert search term to lowercase for case-insensitive search.

		// If the search term is empty or just whitespace, clear the filtered results.
		if (searchTerm.trim() === '') {
			filteredResources = [];
			return;
		}

		// Filter the resourcesData array.
		// The filter condition checks if the resource_type includes the search term.
		filteredResources = (resourcesData as AzureResource[]).filter((resource: AzureResource) =>
			resource.resource_type.toLowerCase().includes(searchTerm)
		);
	}
</script>

<svelte:head>
	<!-- Sets the title of the HTML page. -->
	<title>Azure Resource Move Support Search</title>
	<!-- Meta description for SEO purposes. -->
	<meta
		name="description"
		content="Search Azure resource types and their move support capabilities"
	/>
	<!--
		Links to Font Awesome CSS for icons.
		Bulma itself does not provide icons but integrates seamlessly with icon libraries like Font Awesome.
	-->
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
	/>
</svelte:head>

<!-- Hero section for the page header, providing a prominent title and subtitle. -->
<div class="hero-body">
	<div class="container has-text-centered">
		<h3 class="title is-3">
			<!-- Bulma's 'icon' class correctly sizes and aligns the Font Awesome icon. -->
			<span class="icon is-large">
				<i class="fab fa-microsoft"></i>
				<!-- Microsoft icon from Font Awesome. -->
			</span>
			Azure Resource Search
		</h3>
	</div>
</div>

<!-- Main content section of the page. -->
<section class="section">
	<div class="container">
		<!-- Columns layout for centering the search bar and controlling its width. -->
		<div class="columns is-centered">
			<div class="column is-8">
				<!-- SearchBar component, listening for the 'search' event. -->
				<SearchBar on:search={handleSearch} />
			</div>
		</div>

		<!-- Margin top utility class for spacing. -->
		<div class="mt-3">
			<!-- ResourceTable component, passing filtered resources and search term as props. -->
			<ResourceTable resources={filteredResources} {searchTerm} />
		</div>

		<!-- Conditional rendering for search results notification. -->
		{#if filteredResources.length > 0}
			<div class="mt-3">
				<!-- Bulma 'notification' for displaying success message. -->
				<div class="notification is-success is-info">
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
