<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{
		search: string;
	}>();

	let searchTerm = '';

	function handleSearch() {
		dispatch('search', searchTerm);
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			handleSearch();
		}
	}
</script>

<div class="field has-addons">
	<div class="control is-expanded">
		<input
			class="input is-large"
			type="text"
			placeholder="Search for Azure resource type..."
			bind:value={searchTerm}
			on:keydown={handleKeydown}
		/>
	</div>
	<div class="control">
		<button class="button is-info is-large" on:click={handleSearch}>
			<span class="icon">
				<i class="fas fa-search"></i>
			</span>
			<span>Search</span>
		</button>
	</div>
</div>
