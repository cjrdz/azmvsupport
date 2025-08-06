<script lang="ts">
	// Import Bulma CSS for styling the entire application.
	import 'bulma/css/bulma.css';
</script>

<!--
	The main container for the application content.
	Bulma's 'container' class provides a responsive fixed-width container
	that automatically adjusts its width based on the viewport size,
	ensuring content is centered and readable on various screen sizes.
-->
<div class="container">
	<!--
		The <slot /> element is a Svelte feature that allows content
		to be injected into this layout from other components (e.g., +page.svelte).
	-->
	<slot />
</div>

<style>
	/* Global styles applied to the HTML body. */
	:global(html) {
		background-color: rgba(
			18,
			19,
			29,
			0.915
		); /* Sets a slate gray background for the entire page. */
	}

	/* Styles specific to the .container class. */
	.container {
		max-width: 1200px; /* Limits the maximum width of the container for large screens. */
		padding: 2rem 1rem; /* Adds padding around the content, responsive for different screens. */
	}
</style>
