<script>
    import { onMount } from 'svelte';
    import Navbar from '../components/Navbar.svelte';
    import Hero from '../components/Hero.svelte';
    import Card from '../components/Card.svelte';
    import Footer from '../components/Footer.svelte';
    import AdSense from '../components/AdSense.svelte';
    import { initAnimations } from '../lib/animations.js';
    
    onMount(() => {
        initAnimations({ excludeNavbar: true });
    });
</script>


<main class="min-h-screen overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />

    <!-- Hero Section -->
    <section class="hero-section w-full">
        <Hero 
            title="Voice of Strays and Nature" 
            subtitle="Giving a Voice to the Voiceless – Empowering stray animals with care, compassion, and community support." 
            backgroundImage="/img/heroBg.jpg" 
        />
    </section>

    <!-- Mission Statement -->
    <section class="mission-section py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.2">
        <div class="container mx-auto px-4 text-center max-w-7xl">
            <h2 class="text-4xl font-bold mb-6 text-gray-800 reveal-text">Our Mission</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.
            </p>
        </div>
    </section>

    <!-- Initiatives Cards Section -->
    <section class="initiatives-section py-16 bg-white/60 backdrop-blur-md w-full">
        <div class="container mx-auto px-4 max-w-7xl">
            <h2 class="text-4xl font-bold mb-12 text-center text-gray-800 reveal-text">Our Initiatives</h2>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-3">
                <div class="initiative-card">
                    <a href="/gallery" class="block">
                        <Card 
                            title="Feeding Initiatives" 
                            description="Discover our feeding operations that provide nourishment and care to stray animals through community-driven feeding programs." 
                            image="/img/img11.jpeg" 
                        />
                    </a>
                </div>
                <div class="initiative-card">
                    <a href="/aboutus" class="block">
                        <Card 
                            title="Community Outreach" 
                            description="Learn how we engage communities to create sustainable change for stray animals through education, awareness, and local partnerships." 
                            image="/img/img17.jpeg" 
                        />
                    </a>
                </div>
                <div class="initiative-card">
                    <a href="/volunteer" class="block">
                        <Card 
                            title="Volunteer Programs" 
                            description="Join our team of passionate volunteers making a difference every day through hands-on care, fundraising, and community events." 
                            image="/img/group4.jpeg" 
                        />
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.1">
        <div class="container mx-auto px-4 max-w-7xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="p-6">
                    <h3 class="stat-number text-5xl font-bold text-green-600 mb-2">200+</h3>
                    <p class="text-gray-600">Animals Fed</p>
                </div>
                <div class="p-6">
                    <h3 class="stat-number text-5xl font-bold text-green-600 mb-2">100+</h3>
                    <p class="text-gray-600">Volunteers</p>
                </div>
                <div class="p-6">
                    <h3 class="stat-number text-5xl font-bold text-green-600 mb-2">50+</h3>
                    <p class="text-gray-600">Communities Reached</p>
                </div>
            </div>
        </div>
    </section>

    <!-- AdSense Ad -->
    <AdSense />

    <!-- Footer -->
    <Footer />
</main>

<style>
    .reveal-text {
        opacity: 0.01;
        transform: translateY(20px);
    }
</style>
  