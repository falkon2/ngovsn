import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../../chunks/AdSense.js";
const css = {
  code: ".about-card{backface-visibility:hidden}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import { browser } from '$app/environment';\\n    import Navbar from '../../components/Navbar.svelte';\\n    import Footer from '../../components/Footer.svelte';\\n    import AdSense from '../../components/AdSense.svelte';\\n\\n    let gsap;\\n    let ScrollTrigger;\\n\\n    onMount(async () => {\\n        if (browser) {\\n            gsap = (await import('gsap')).default;\\n            ScrollTrigger = (await import('gsap/ScrollTrigger')).default;\\n            gsap.registerPlugin(ScrollTrigger);\\n\\n            // Animate hero section\\n            gsap.from('.hero-content', {\\n                y: 100,\\n                opacity: 0,\\n                duration: 1,\\n                ease: 'power3.out'\\n            });\\n\\n            // Animate cards\\n            gsap.from('.about-card', {\\n                scrollTrigger: {\\n                    trigger: '.about-cards',\\n                    start: 'top center+=100',\\n                    toggleActions: 'play none none reverse'\\n                },\\n                y: 50,\\n                opacity: 0,\\n                duration: 0.8,\\n                stagger: 0.2,\\n                ease: 'back.out(1.2)'\\n            });\\n\\n            // Animate team members\\n            gsap.from('.team-member', {\\n                scrollTrigger: {\\n                    trigger: '.team-section',\\n                    start: 'top center+=100',\\n                    toggleActions: 'play none none reverse'\\n                },\\n                y: 30,\\n                opacity: 0,\\n                duration: 0.6,\\n                stagger: 0.15,\\n                ease: 'power2.out'\\n            });\\n        }\\n    });\\n\\n    const teamMembers = [\\n        {\\n            name: 'Sarah Johnson',\\n            role: 'Founder & Director',\\n            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',\\n            bio: 'Passionate about animal welfare with 10+ years of experience in animal rescue.'\\n        },\\n        {\\n            name: 'Michael Chen',\\n            role: 'Head of Operations',\\n            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',\\n            bio: 'Coordinates rescue missions and manages our volunteer network.'\\n        },\\n        {\\n            name: 'Emily Rodriguez',\\n            role: 'Veterinary Director',\\n            image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',\\n            bio: 'Ensures the highest standard of medical care for our rescued animals.'\\n        }\\n    ];\\n<\/script>\\n\\n<Navbar />\\n\\n<div class=\\"min-h-screen bg-gray-50\\">\\n    <!-- Hero Section -->\\n    <div class=\\"relative h-[60vh] bg-cover bg-center\\" style=\\"background-image: url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80');\\">\\n        <div class=\\"absolute inset-0 bg-black/50 backdrop-blur-sm\\"></div>\\n        <div class=\\"hero-content relative h-full flex items-center justify-center text-center text-white px-4\\">\\n            <div>\\n                <h1 class=\\"text-5xl md:text-6xl font-bold mb-6\\">Our Story</h1>\\n                <p class=\\"text-xl md:text-2xl max-w-3xl mx-auto text-gray-200\\">\\n                    Dedicated to giving every stray animal a second chance at happiness.\\n                </p>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <!-- Mission & Values Section -->\\n    <div class=\\"py-20 px-4\\">\\n        <div class=\\"container mx-auto max-w-7xl\\">\\n            <div class=\\"about-cards grid grid-cols-1 md:grid-cols-3 gap-8\\">\\n                <div class=\\"about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300\\">\\n                    <div class=\\"text-green-500 mb-6\\">\\n                        <svg class=\\"w-12 h-12\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n                            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\\" />\\n                        </svg>\\n                    </div>\\n                    <h3 class=\\"text-2xl font-bold mb-4\\">Our Mission</h3>\\n                    <p class=\\"text-gray-600\\">To create a world where every stray animal finds love, care, and a forever home through community-driven initiatives and sustainable solutions.</p>\\n                </div>\\n\\n                <div class=\\"about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300\\">\\n                    <div class=\\"text-green-500 mb-6\\">\\n                        <svg class=\\"w-12 h-12\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n                            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4\\" />\\n                        </svg>\\n                    </div>\\n                    <h3 class=\\"text-2xl font-bold mb-4\\">Our Impact</h3>\\n                    <p class=\\"text-gray-600\\">Since 2020, we've fed over 500 animals, built a network of 100+ volunteers, and served 50+ communities across the region.</p>\\n                </div>\\n\\n                <div class=\\"about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300\\">\\n                    <div class=\\"text-green-500 mb-6\\">\\n                        <svg class=\\"w-12 h-12\\" fill=\\"none\\" stroke=\\"currentColor\\" viewBox=\\"0 0 24 24\\">\\n                            <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z\\" />\\n                        </svg>\\n                    </div>\\n                    <h3 class=\\"text-2xl font-bold mb-4\\">Our Community</h3>\\n                    <p class=\\"text-gray-600\\">A passionate network of animal lovers, veterinarians, and volunteers working together to make a difference in animals' lives.</p>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <!-- Team Section -->\\n\\n</div>\\n\\n<!-- AdSense Ad -->\\n<AdSense />\\n\\n<Footer />\\n\\n<style>\\n    :global(.about-card) {\\n        backface-visibility: hidden;\\n    }\\n</style>"],"names":[],"mappings":"AA2IY,WAAa,CACjB,mBAAmB,CAAE,MACzB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="min-h-screen bg-gray-50" data-svelte-h="svelte-ffzuh4"> <div class="relative h-[60vh] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;q=80');"><div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> <div class="hero-content relative h-full flex items-center justify-center text-center text-white px-4"><div><h1 class="text-5xl md:text-6xl font-bold mb-6">Our Story</h1> <p class="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">Dedicated to giving every stray animal a second chance at happiness.</p></div></div></div>  <div class="py-20 px-4"><div class="container mx-auto max-w-7xl"><div class="about-cards grid grid-cols-1 md:grid-cols-3 gap-8"><div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"><div class="text-green-500 mb-6"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg></div> <h3 class="text-2xl font-bold mb-4">Our Mission</h3> <p class="text-gray-600">To create a world where every stray animal finds love, care, and a forever home through community-driven initiatives and sustainable solutions.</p></div> <div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"><div class="text-green-500 mb-6"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div> <h3 class="text-2xl font-bold mb-4">Our Impact</h3> <p class="text-gray-600">Since 2020, we&#39;ve fed over 500 animals, built a network of 100+ volunteers, and served 50+ communities across the region.</p></div> <div class="about-card bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300"><div class="text-green-500 mb-6"><svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg></div> <h3 class="text-2xl font-bold mb-4">Our Community</h3> <p class="text-gray-600">A passionate network of animal lovers, veterinarians, and volunteers working together to make a difference in animals&#39; lives.</p></div></div></div></div> </div>  ${validate_component(AdSense, "AdSense").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
