<script>
    import { onMount } from 'svelte';
    import { fadeIn } from '$lib/animations';
    import Navbar from '../../components/Navbar.svelte';
    import Footer from '../../components/Footer.svelte';
    import AdSense from '../../components/AdSense.svelte';

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
    });
</script>

<Navbar />

<div class="gallery-content min-h-screen bg-gray-50">
    <div class="max-w-[2000px] mx-auto p-4">
        <div class="gallery-grid">
            {#each galleryItems as item}
                <div class="gallery-item {item.size}">
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
                </div>
            {/each}
        </div>
    </div>
</div>

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
  