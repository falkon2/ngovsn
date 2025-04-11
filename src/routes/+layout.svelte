<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { trackPageView } from '$lib/analytics';

	let currentPath = '';
	let isScrolled = false;
	let isLoading = false;

	// Handle scroll effect for navbar
	function handleScroll() {
		isScrolled = window.scrollY > 20;
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleScroll);
			handleScroll(); // Check initial scroll position
		}

		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('scroll', handleScroll);
			}
		};
	});

	// Track page changes
	$: if ($page && $page.url.pathname !== currentPath && currentPath !== '') {
		currentPath = $page.url.pathname;
		trackPageView(currentPath);
	}

	// Handle loading state
	$: if ($page) {
		isLoading = $page.status === 'loading';
	}
</script>

{#if isLoading}
	<div class="loading-bar">
		<div class="loading-progress"></div>
	</div>
{/if}

<div class="app" class:scrolled={isScrolled}>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.loading-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 3px;
		background-color: #e5e7eb;
		z-index: 1000;
	}

	.loading-progress {
		height: 100%;
		width: 100%;
		background-color: #10b981;
		animation: loading 1s ease-in-out infinite;
	}

	@keyframes loading {
		0% {
			width: 0%;
			left: 0;
		}
		50% {
			width: 100%;
			left: 0;
		}
		100% {
			width: 0%;
			left: 100%;
		}
	}
</style>
