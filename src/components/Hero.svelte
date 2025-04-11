<script>
    import { onMount } from 'svelte';
    import { fadeIn } from '../lib/animations';
    
    export let title = '';
    export let subtitle = '';
    export let backgroundImage = '';
    
    onMount(() => {
        fadeIn('.hero', { duration: 1.5 });
    });
</script>

<section class="hero relative min-h-screen bg-cover bg-center bg-fixed" style="background-image: url('{backgroundImage}');">
    <div class="absolute inset-0 bg-black/40"></div>
    
    <!-- Glassmorphism overlay -->
    <div class="absolute inset-0 backdrop-blur-[2px]"></div>
    
    <div class="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 max-w-6xl mx-auto">
        <h1 class="hero-title text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-tight">
            {title}
        </h1>
        <p class="hero-subtitle text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">
            {subtitle}
        </p>
        <div class="hero-buttons flex gap-6">
            <a href="/donate" 
               class="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Donate Now
            </a>
            <a href="/volunteer" 
               class="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30">
                Volunteer
            </a>
        </div>
    </div>
</section>
  