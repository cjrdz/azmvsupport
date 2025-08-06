<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// Create a dispatcher to send custom events to the parent component.
	const dispatch = createEventDispatcher<{
		search: string; // Defines the type of the 'search' event payload.
	}>();

	// Reactive variable to bind to the input field's value.
	let searchTerm = '';

	/**
	 * Dispatches the 'search' event with the current search term.
	 */
	function handleSearch() {
		dispatch('search', searchTerm);
	}

	/**
	 * Handles the 'keydown' event on the input field.
	 * Triggers a search if the 'Enter' key is pressed.
	 * @param event KeyboardEvent object.
	 */
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}
</script>

<!--
	Bulma 'field' and 'has-addons' classes for grouping the input and button.
	'has-addons' ensures the input and button stick together.
-->
<div class="field has-addons">
	<!--
		'control' wraps the input. 'is-expanded' makes the input take up
		the available space within the field, contributing to responsiveness.
	-->
	<div class="control is-expanded">
		<input
			class="input is-medium is-info"
			type="text"
			placeholder="Search for Azure resource type..."
			bind:value={searchTerm}
			on:keydown={handleKeydown}
		/>
	</div>
	<!-- 'control' wraps the button. -->
	<div class="control">
		<button class="button is-info is-medium" on:click={handleSearch}>
			<!-- Bulma 'icon' class for proper icon sizing and alignment within the button. -->
			<span class="icon">
				<i class="fas fa-search"></i>
				<!-- Search icon from Font Awesome. -->
			</span>
			<span>Search</span>
		</button>
	</div>
</div>
