<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  onMount(() => {
    if (browser) {
      // Load AdSense script
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8035401165804944';
      script.async = true;
      script.crossOrigin = 'anonymous';
      document.head.appendChild(script);
    }
  });
</script>

<!-- AdSense Ad Unit -->
<div class="ad-container my-8 mx-auto max-w-4xl">
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-8035401165804944"
       data-ad-slot="5012000553"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
</div>

<style>
  .ad-container {
    min-height: 90px; /* Minimum height for ad units */
    background-color: #f3f4f6; /* Light gray background while ad loads */
    border-radius: 0.5rem;
    padding: 1rem;
  }
</style> 