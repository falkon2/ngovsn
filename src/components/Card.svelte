<script>
    export let title = '';
    export let description = '';
    export let image = '';
    export let link = '#';
</script>

<div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    {#if image}
        <div class="relative overflow-hidden">
            <img 
                src={image} 
                alt={title} 
                class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    {/if}
    <div class="p-6">
        <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">{title}</h3>
        <p class="text-gray-600 leading-relaxed">{description}</p>
        <a 
            href={link} 
            class="inline-block mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300"
            aria-label="Learn more about {title}"
        >
            Learn More →
        </a>
    </div>
</div>
  