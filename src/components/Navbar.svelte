<script>
    import { navigating } from '$app/stores';
    
    let isMenuOpen = false;
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

    // Close menu when navigation starts
    $: if ($navigating) {
        isMenuOpen = false;
    }
</script>

<nav class="bg-white/90 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
    <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-20">
            <a href="/" class="nav-logo flex items-center space-x-2">
                <img src="/img/logo.jpeg" alt="VSN Logo" class="w-10 h-10 rounded-full object-cover" />
                <span class="text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300">VSN</span>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <div class="nav-links flex items-center space-x-8">
                    <a href="/" class="nav-link text-gray-700 hover:text-green-600 transition-colors duration-300">Home</a>
                    <a href="/gallery" class="nav-link text-gray-700 hover:text-green-600 transition-colors duration-300">Gallery</a>
                    <a href="/aboutus" class="nav-link text-gray-700 hover:text-green-600 transition-colors duration-300">About</a>
                    <a href="/volunteer" class="nav-link text-gray-700 hover:text-green-600 transition-colors duration-300">Contact</a>
                </div>
                <a href="/donate" 
                   class="nav-cta bg-green-500 text-white px-6 py-2.5 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105">
                    Donate
                </a>
            </div>
            
            <!-- Mobile Menu Button -->
            <button 
                class="nav-toggle md:hidden text-gray-700 hover:text-green-600 transition-colors duration-300 z-50"
                on:click={toggleMenu}
            >
                <div class="hamburger-menu relative w-6 h-6">
                    <span class="hamburger-line absolute w-6 h-0.5 bg-current transform transition-all duration-300 {isMenuOpen ? 'rotate-45 top-3' : 'top-1'}"></span>
                    <span class="hamburger-line absolute w-6 h-0.5 bg-current transform transition-all duration-300 top-3 {isMenuOpen ? 'opacity-0' : 'opacity-100'}"></span>
                    <span class="hamburger-line absolute w-6 h-0.5 bg-current transform transition-all duration-300 {isMenuOpen ? '-rotate-45 top-3' : 'top-5'}"></span>
                </div>
            </button>
        </div>
    </div>
</nav>

<!-- Full Screen Mobile Menu -->
{#if isMenuOpen}
<div class="mobile-menu fixed inset-0 bg-white/90 backdrop-blur-lg z-40 md:hidden">
    <div class="container mx-auto px-4 h-screen flex flex-col items-center justify-center">
        <div class="mobile-nav-links space-y-8 text-center">
            {#each ['Home', 'Gallery', 'About', 'Contact'] as link}
                <div>
                    <a 
                        href={link === 'Home' ? '/' : link === 'About' ? '/aboutus' : `/${link.toLowerCase()}`}
                        class="mobile-nav-link block text-3xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-300"
                        on:click={() => isMenuOpen = false}
                    >
                        {link}
                    </a>
                </div>
            {/each}
            <div>
                <a 
                    href="/donate" 
                    class="mobile-nav-cta inline-block bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition-all duration-300 transform hover:scale-105 text-2xl mt-8"
                    on:click={() => isMenuOpen = false}
                >
                    Donate
                </a>
            </div>
        </div>
    </div>
</div>
{/if}

<!-- Add padding to account for fixed navbar -->
<div class="h-20"></div>

<style>
    .hamburger-menu {
        cursor: pointer;
    }
</style>
  