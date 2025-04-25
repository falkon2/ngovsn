<script>
    import { onMount, onDestroy } from 'svelte';
    import { fadeIn } from '$lib/animations';
    import { beforeNavigate } from '$app/navigation';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

    // State for custom image modal
    let showModal = false;
    let currentImage = '';
    let currentTitle = '';
    let currentCategory = '';

    // Function to open the modal with the selected image
    function openModal(image, title, category) {
        currentImage = image;
        currentTitle = title;
        currentCategory = category;
        showModal = true;
        // Prevent scrolling when modal is open
        if (typeof document !== 'undefined') {
            document.body.style.overflow = 'hidden';
        }
    }

    // Function to close the modal
    function closeModal() {
        showModal = false;
        // Restore scrolling
        if (typeof document !== 'undefined') {
            document.body.style.overflow = '';
        }
    }

    // Handle keyboard events for modal
    function handleKeydown(event) {
        if (showModal && event.key === 'Escape') {
            closeModal();
        }
    }

    const galleryItems = [
        {
            title: "Group",
            category: "GROUP",
            image: "/img/maingroup.jpeg",
            size: "large"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img9.jpeg",
            size: "medium"
        },
        {
            title: "banner",
            category: "BANNER",
            image: "/img/banner1.jpeg",
            size: "large"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img1.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img2.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img3.jpeg",
            size: "medium"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img4.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img5.jpeg",
            size: "medium"
        },

        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img7.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img8.jpeg",
            size: "large"
        },


        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img11.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img12.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img13.jpeg",
            size: "medium"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img14.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img15.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img16.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img17.jpeg",
            size: "medium"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img18.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img19.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img20.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img21.jpeg",
            size: "small"
        },
        {
            title: "feeding",
            category: "FEEDING",
            image: "/img/img22.jpeg",
            size: "small"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group1.jpeg",
            size: "medium"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group2.jpeg",
            size: "medium"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group3.jpeg",
            size: "medium"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group4.jpeg",
            size: "small"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group5.jpeg",
            size: "small"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group6.jpeg",
            size: "small"
        },
        {
            title: "group",
            category: "GROUP",
            image: "/img/group7.jpeg",
            size: "large"
        },

        
        
        
        
        
        
        
    ];

    onMount(() => {
        fadeIn('.gallery-content');
        
        // Add keyboard event listener for modal
        if (typeof window !== 'undefined') {
            window.addEventListener('keydown', handleKeydown);
        }
    });

    // Clean up event listeners when component is destroyed
    onDestroy(() => {
        if (typeof window !== 'undefined') {
            window.removeEventListener('keydown', handleKeydown);
            
            // Reset body styles
            document.body.style.overflow = '';
        }
    });
    
    // Close modal when navigating away
    beforeNavigate(() => {
        closeModal();
    });
</script>

<Navbar />

<div class="gallery-content min-h-screen bg-gray-50">
    <div class="max-w-[2000px] mx-auto p-4">
        <div class="gallery-grid">
            {#each galleryItems as item, index}
                <button 
                    class="gallery-item {item.size} border-0 p-0 bg-transparent"
                    on:click={() => openModal(item.image, item.title, item.category)}
                >
                    <div class="relative overflow-hidden w-full h-full">
                        <img 
                            src={item.image} 
                            alt={item.title}
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300">
                            <div class="absolute bottom-0 left-0 p-6">
                                <span class="text-sm text-gray-300 mb-2 block">{item.category}</span>
                                <h2 class="text-2xl font-bold text-white">{item.title}</h2>
                            </div>
                        </div>
                    </div>
                </button>
            {/each}
        </div>
    </div>
</div>

<!-- Custom Image Modal -->
{#if showModal}
<div 
    class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" 
    on:click={closeModal}
    on:keydown={(e) => e.key === 'Escape' && closeModal()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
>
    <div 
        class="relative max-w-7xl max-h-[90vh] w-full mx-4" 
        on:click|stopPropagation={() => {}}
        on:keydown|stopPropagation={() => {}}
        role="document"
    >
        <button 
            class="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all z-10"
            on:click={closeModal}
            aria-label="Close modal"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        
        <div class="bg-transparent rounded-lg overflow-hidden">
            <img 
                src={currentImage} 
                alt={currentTitle} 
                class="max-h-[80vh] max-w-full mx-auto object-contain"
            />
            <div class="p-4 bg-black/70 text-white">
                <span class="text-sm text-gray-300 mb-1 block">{currentCategory}</span>
                <h2 id="modal-title" class="text-xl font-bold">{currentTitle}</h2>
            </div>
        </div>
    </div>
</div>
{/if}

<!-- AdSense Ad -->
<AdSense />

<Footer />

<style>
    .gallery-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-auto-rows: 300px;
        gap: 1px;
        background-color: #e5e7eb;
    }

    .gallery-item {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        background-color: #fff;
        text-align: left;
        display: block;
    }

    .gallery-item.large {
        grid-column: span 4;
        grid-row: span 2;
    }

    .gallery-item.medium {
        grid-column: span 2;
        grid-row: span 2;
    }

    .gallery-item.small {
        grid-column: span 2;
        grid-row: span 1;
    }

    @media (max-width: 1024px) {
        .gallery-grid {
            grid-template-columns: repeat(4, 1fr);
        }

        .gallery-item.large {
            grid-column: span 4;
        }

        .gallery-item.medium {
            grid-column: span 2;
        }

        .gallery-item.small {
            grid-column: span 2;
        }
    }

    @media (max-width: 640px) {
        .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .gallery-item.large,
        .gallery-item.medium {
            grid-column: span 2;
        }

        .gallery-item.small {
            grid-column: span 1;
        }
    }
</style>
  