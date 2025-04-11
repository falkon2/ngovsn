<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

    let gsap;
    let ScrollTrigger;

    onMount(async () => {
        if (browser) {
            gsap = (await import('gsap')).default;
            ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            // Animate hero section
            gsap.from('.hero-content', {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Animate cards
            gsap.from('.about-card', {
                scrollTrigger: {
                    trigger: '.about-cards',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.2)'
            });

            // Animate team members
            gsap.from('.team-member', {
                scrollTrigger: {
                    trigger: '.team-section',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'power2.out'
            });
        }
    });

    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Founder & Director',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
            bio: 'Passionate about animal welfare with 10+ years of experience in animal rescue.'
        },
        {
            name: 'Michael Chen',
            role: 'Head of Operations',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
            bio: 'Coordinates rescue missions and manages our volunteer network.'
        },
        {
            name: 'Emily Rodriguez',
            role: 'Veterinary Director',
            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
            bio: 'Ensures the highest standard of medical care for our rescued animals.'
        }
    ];
</script>

<Navbar />

<div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative h-[60vh] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80');">
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div class="hero-content relative h-full flex items-center justify-center text-center text-white px-4">
            <div>
                <h1 class="text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
                <p class="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                    Dedicated to giving every stray animal a second chance at happiness.
                </p>
            </div>
        </div>
    </div>

    <!-- Mission & Values Section -->
    <div class="py-20 px-4">
        <div class="container mx-auto max-w-7xl">
            <div class="about-cards grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-green-500 mb-6">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
                    <p class="text-gray-600">To create a world where every stray animal finds love, care, and a forever home through community-driven initiatives and sustainable solutions.</p>
                </div>

                <div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-green-500 mb-6">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Our Impact</h3>
                    <p class="text-gray-600">Since 2020, we've fed over 500 animals, built a network of 100+ volunteers, and served 50+ communities across the region.</p>
                </div>

                <div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="text-green-500 mb-6">
                        <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Our Community</h3>
                    <p class="text-gray-600">A passionate network of animal lovers, veterinarians, and volunteers working together to make a difference in animals' lives.</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Team Section -->

</div>

<!-- AdSense Ad -->
<AdSense />

<Footer />

<style>
    :global(.about-card) {
        backface-visibility: hidden;
    }
</style>