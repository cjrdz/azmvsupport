<script lang="ts">
	import 'bulma/css/bulma.css';
</script>

<div class="container">
	<slot />
</div>

<style>
	:global(html) {
		background-color: black;
	}

	.container {
		max-width: 1200px;
		padding: 2rem 1rem;
	}
</style>
