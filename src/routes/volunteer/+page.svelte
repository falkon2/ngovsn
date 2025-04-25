<script>
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

    let gsap;
    let ScrollTrigger;

    // Google Form is used instead of native form

    onMount(async () => {
        if (browser) {
            gsap = (await import('gsap')).default;
            ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            // Animate hero section
            gsap.from('.hero-content', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            // Animate form section
            gsap.from('.contact-form', {
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });

            // Animate info cards
            gsap.from('.info-card', {
                scrollTrigger: {
                    trigger: '.info-section',
                    start: 'top center+=100',
                    toggleActions: 'play none none reverse'
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'back.out(1.2)'
            });
        }
    });

    // Google Form is used for volunteer registration
</script>

<Navbar />

<div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="relative h-[50vh] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&q=80');">
        <div class="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        <div class="hero-content relative h-full flex items-center justify-center text-center text-white px-4">
            <div>
                <h1 class="text-5xl md:text-6xl font-bold mb-6">Join Our Mission</h1>
                <p class="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
                    Make a difference in the lives of stray animals. Volunteer with us today.
                </p>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-16 max-w-7xl">
        <!-- Introduction Section -->
        <div class="mb-16 text-center">
            <h2 class="text-3xl font-bold mb-6">Why Volunteer With Us?</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                At Voice of Strays and Nature, we believe that every animal deserves love and care. 
                Our volunteers are the backbone of our organization, helping us provide essential services 
                to stray animals in need. Join our community of compassionate individuals making a real difference.
            </p>
        </div>

        <!-- AdSense Ad -->
        <AdSense />

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <!-- Google Form Embed -->
            <div class="contact-form bg-white rounded-2xl shadow-xl p-8">
                <h2 class="text-3xl font-bold mb-8">Get Involved</h2>
                <p class="text-gray-600 mb-6">
                    Fill out the form below to express your interest in volunteering. 
                    We'll get back to you with more information about available opportunities.
                </p>
                <div class="iframe-container overflow-hidden">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScktVhk5ZCiticLRx4P1-kf8DDBuVzidSxrygoEqt09HiWieA/viewform?embedded=true" 
                        width="100%" 
                        height="600" 
                        frameborder="0" 
                        marginheight="0" 
                        marginwidth="0"
                        class="rounded-lg"
                        title="Volunteer Registration Form"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>

            <!-- Info Section -->
            <div class="info-section space-y-8">
                <div class="info-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="flex items-start">
                        <div class="text-green-500 mr-6">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Training Provided</h3>
                            <p class="text-gray-600">We provide comprehensive training and support to ensure you're confident in your role.</p>
                        </div>
                    </div>
                </div>

                <div class="info-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="flex items-start">
                        <div class="text-green-500 mr-6">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Certificate Provided</h3>
                            <p class="text-gray-600">We Provide an official certificate for your role and taking part in our organization. This will help you in your resume and for getting into universities as well as in jobs.</p>
                        </div>
                    </div>
                </div>

                <div class="info-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
                    <div class="flex items-start">
                        <div class="text-green-500 mr-6">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-2">Join Our Community</h3>
                            <p class="text-gray-600">Connect with like-minded individuals and be part of a compassionate community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Additional Content Section -->
        <div class="mt-16">
            <h2 class="text-3xl font-bold mb-8 text-center">Volunteer Opportunities</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-xl font-bold mb-4">Animal Care</h3>
                    <p class="text-gray-600 mb-4">
                        Help with feeding, grooming, and providing basic care to rescued animals.
                        No prior experience required - we provide full training.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li>• Daily feeding schedules</li>
                        <li>• Basic grooming</li>
                        <li>• Socialization activities</li>
                    </ul>
                </div>
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-xl font-bold mb-4">Community Outreach</h3>
                    <p class="text-gray-600 mb-4">
                        Help us spread awareness and educate the community about animal welfare.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li>• Educational workshops</li>
                        <li>• Community events</li>
                        <li>• Social media management</li>
                    </ul>
                </div>
                <div class="bg-white rounded-2xl shadow-xl p-8">
                    <h3 class="text-xl font-bold mb-4">Administrative Support</h3>
                    <p class="text-gray-600 mb-4">
                        Help with the day-to-day operations of our organization.
                    </p>
                    <ul class="space-y-2 text-gray-600">
                        <li>• Data entry</li>
                        <li>• Event planning</li>
                        <li>• Fundraising support</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- AdSense Ad -->
        <AdSense />
    </div>
</div>

<!-- AdSense Ad -->
<AdSense />

<Footer />

<style>
    :global(.info-card) {
        backface-visibility: hidden;
    }
    
    .iframe-container {
        position: relative;
        overflow: hidden;
        width: 100%;
        border-radius: 0.5rem;
    }
    
    .iframe-container iframe {
        border: none;
        width: 100%;
        min-height: 600px;
    }
    
    @media (max-width: 768px) {
        .iframe-container iframe {
            min-height: 650px; /* Slightly taller on mobile */
        }
    }
</style>