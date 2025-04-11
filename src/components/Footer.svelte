<script>
    import { trackSocialMedia } from '$lib/analytics';
</script>

<footer class="bg-gray-900 text-gray-300 py-12">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <!-- Organization Info -->
            <div class="space-y-4">
                <h2 class="text-2xl font-bold text-white">Voice of Strays and Nature</h2>
                <p class="text-gray-400 leading-relaxed">
                    Empowering stray animals through care, compassion, and community support.
                </p>
                <div class="flex space-x-4">
                    <button 
                        class="text-gray-400 hover:text-white transition-colors duration-300" 
                        on:click={() => trackSocialMedia('facebook')}
                        aria-label="Visit our Facebook page"
                    >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </button>
                    <button 
                        class="text-gray-400 hover:text-white transition-colors duration-300" 
                        on:click={() => trackSocialMedia('twitter')}
                        aria-label="Visit our Twitter page"
                    >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                    </button>
                    <button 
                        class="text-gray-400 hover:text-white transition-colors duration-300" 
                        on:click={() => trackSocialMedia('instagram')}
                        aria-label="Visit our Instagram page"
                    >
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 3.01.367 3.01 2.72v18.56c0 2.354 2.766 2.588 4.043 2.648 1.28.06 1.686.072 4.947.072 3.26 0 3.667-.012 4.947-.072 1.28-.06 4.043-.294 4.043-2.648V2.72c0-2.353-2.766-2.588-4.043-2.648C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.585-.07 4.85c-.055 1.17-.25 1.805-.415 2.227-.224.562-.479.96-.896 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.013-4.859-.07-1.171-.055-1.816-.25-2.236-.415-.569-.224-.96-.479-1.379-.896-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.413-2.235-.057-1.274-.07-1.649-.07-4.844 0-3.196.013-3.586.07-4.861.055-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.413 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- Quick Links -->
            <div>
                <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
                <ul class="space-y-2">
                    <li><a href="/aboutus" class="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
                    <li><a href="/gallery" class="text-gray-400 hover:text-white transition-colors duration-300">Our Projects</a></li>
                    <li><a href="/volunteer" class="text-gray-400 hover:text-white transition-colors duration-300">Volunteer</a></li>
                    <li><a href="/donate" class="text-gray-400 hover:text-white transition-colors duration-300">Donate</a></li>
                </ul>
            </div>
            
            <!-- Contact Info -->
            <div>
                <h3 class="text-lg font-semibold text-white mb-4">Contact Us</h3>
                <ul class="space-y-2">
                    <li class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <span class="text-gray-400">vsnghy.org@gmail.com</span>
                    </li>
                    <li class="flex items-center space-x-2">
                        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                        <span class="text-gray-400">+919365582550</span>
                    </li>
                </ul>
            </div>
            
            <!-- Newsletter -->
            <div>
                <h3 class="text-lg font-semibold text-white mb-4">Stay Updated</h3>
                <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates and news.</p>
                <form class="flex">
                    <input 
                        type="email" 
                        placeholder="Your email" 
                        class="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500" 
                        aria-label="Email for newsletter"
                    />
                    <button 
                        type="submit" 
                        class="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors duration-300"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p class="mb-2">© {new Date().getFullYear()} Voice of Strays and Nature. All rights reserved.</p>
            <p class="text-sm flex items-center justify-center gap-2">
                Made with <span class="text-red-500">❤️</span> by 
                <a href="https://github.com/falkon2" 
                   class="text-gray-400 hover:text-white transition-colors duration-300 underline">
                    @Zahin Tapadar
                </a>
            </p>
        </div>
    </div>
</footer>
  