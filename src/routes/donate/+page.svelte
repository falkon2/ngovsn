<script>
    import { onMount } from 'svelte';
    import { fadeIn } from '$lib/animations';
    import { trackPageView, trackDonation } from '$lib/analytics';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

    onMount(() => {
        fadeIn('.donate-content');
        trackPageView('donate');
        
        // Test event to verify analytics is working
        console.log('Sending test analytics event');
        trackDonation(0, 'test');
    });
</script>

<Navbar />

<div class="donate-content min-h-screen bg-gray-50 py-16">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Support Our Cause</h1>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Your support helps us provide care, shelter, and love to stray animals in need.</p>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8">
                <div class="text-center mb-8">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">How to Donate</h2>
                    <p class="text-gray-600 mb-6">
                        We are currently updating our online donation system. In the meantime, you can support us through the following methods:
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="p-6 rounded-xl border-2 border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">UPI Transfer</h3>
                        <p class="text-gray-600 mb-4">Scan the QR code or use our UPI ID to make a donation:</p>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <div class="flex flex-col items-center space-y-4">
                                <img src="/img/upi.jpeg" alt="UPI QR Code" class="w-48 h-48 object-contain rounded-lg" />
                                <div class="text-center">
                                    <p class="text-gray-700 mb-2"><strong>UPI ID:</strong> deepmili.djm@oksbi</p>
                                    <p class="text-gray-700"><strong>Account Name:</strong> Voice of Strays and Nature</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 rounded-xl border-2 border-gray-200">
                        <h3 class="text-xl font-bold text-gray-800 mb-3">Contact Us</h3>
                        <p class="text-gray-600 mb-4">For other donation methods or assistance:</p>
                        <div class="space-y-3">
                            <p class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                                vsnghy.org@gmail.com
                            </p>
                            <p class="flex items-center text-gray-700">
                                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                </svg>
                                +919365582550
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Impact Information -->
            <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center">
                    <div class="text-4xl font-bold text-green-500 mb-2">200+</div>
                    <div class="text-gray-600">Animals Fed</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-green-500 mb-2">100+</div>
                    <div class="text-gray-600">Volunteers</div>
                </div>
                <div class="text-center">
                    <div class="text-4xl font-bold text-green-500 mb-2">50+</div>
                    <div class="text-gray-600">Communities Served</div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- AdSense Ad -->
<AdSense />

<Footer />

<style>
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }
</style>