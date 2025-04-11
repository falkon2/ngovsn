import { c as create_ssr_component, v as validate_component, g as each, f as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/animations.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../../chunks/AdSense.js";
const css = {
  code: ".gallery-grid.svelte-1ecjnii{display:grid;grid-template-columns:repeat(6, 1fr);grid-auto-rows:300px;gap:1px;background-color:#e5e7eb}.gallery-item.svelte-1ecjnii{position:relative;overflow:hidden;cursor:pointer;background-color:#fff}.gallery-item.large.svelte-1ecjnii{grid-column:span 4;grid-row:span 2}.gallery-item.medium.svelte-1ecjnii{grid-column:span 2;grid-row:span 2}.gallery-item.small.svelte-1ecjnii{grid-column:span 2;grid-row:span 1}@media(max-width: 1024px){.gallery-grid.svelte-1ecjnii{grid-template-columns:repeat(4, 1fr)}.gallery-item.large.svelte-1ecjnii{grid-column:span 4}.gallery-item.medium.svelte-1ecjnii{grid-column:span 2}.gallery-item.small.svelte-1ecjnii{grid-column:span 2}}@media(max-width: 640px){.gallery-grid.svelte-1ecjnii{grid-template-columns:repeat(2, 1fr)}.gallery-item.large.svelte-1ecjnii,.gallery-item.medium.svelte-1ecjnii{grid-column:span 2}.gallery-item.small.svelte-1ecjnii{grid-column:span 1}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import { fadeIn } from '$lib/animations';\\n    import Navbar from '../../components/Navbar.svelte';\\n    import Footer from '../../components/Footer.svelte';\\n    import AdSense from '../../components/AdSense.svelte';\\n\\n    const galleryItems = [\\n        {\\n            title: \\"Group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/maingroup.jpeg\\",\\n            size: \\"large\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img9.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"banner\\",\\n            category: \\"BANNER\\",\\n            image: \\"/img/banner1.jpeg\\",\\n            size: \\"large\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img1.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img2.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img3.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img4.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img5.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img7.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img8.jpeg\\",\\n            size: \\"large\\"\\n        },\\n\\n\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img11.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img12.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img13.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img14.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img15.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img16.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img17.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img18.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img19.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img20.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img21.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"feeding\\",\\n            category: \\"FEEDING\\",\\n            image: \\"/img/img22.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group1.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group2.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group3.jpeg\\",\\n            size: \\"medium\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group4.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group5.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group6.jpeg\\",\\n            size: \\"small\\"\\n        },\\n        {\\n            title: \\"group\\",\\n            category: \\"GROUP\\",\\n            image: \\"/img/group7.jpeg\\",\\n            size: \\"large\\"\\n        },\\n\\n        \\n        \\n        \\n        \\n        \\n        \\n        \\n    ];\\n\\n    onMount(() => {\\n        fadeIn('.gallery-content');\\n    });\\n<\/script>\\n\\n<Navbar />\\n\\n<div class=\\"gallery-content min-h-screen bg-gray-50\\">\\n    <div class=\\"max-w-[2000px] mx-auto p-4\\">\\n        <div class=\\"gallery-grid\\">\\n            {#each galleryItems as item}\\n                <div class=\\"gallery-item {item.size}\\">\\n                    <div class=\\"relative overflow-hidden w-full h-full\\">\\n                        <img \\n                            src={item.image} \\n                            alt={item.title}\\n                            class=\\"w-full h-full object-cover\\"\\n                        />\\n                        <div class=\\"absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300\\">\\n                            <div class=\\"absolute bottom-0 left-0 p-6\\">\\n                                <span class=\\"text-sm text-gray-300 mb-2 block\\">{item.category}</span>\\n                                <h2 class=\\"text-2xl font-bold text-white\\">{item.title}</h2>\\n                            </div>\\n                        </div>\\n                    </div>\\n                </div>\\n            {/each}\\n        </div>\\n    </div>\\n</div>\\n\\n<!-- AdSense Ad -->\\n<AdSense />\\n\\n<Footer />\\n\\n<style>\\n    .gallery-grid {\\n        display: grid;\\n        grid-template-columns: repeat(6, 1fr);\\n        grid-auto-rows: 300px;\\n        gap: 1px;\\n        background-color: #e5e7eb;\\n    }\\n\\n    .gallery-item {\\n        position: relative;\\n        overflow: hidden;\\n        cursor: pointer;\\n        background-color: #fff;\\n    }\\n\\n    .gallery-item.large {\\n        grid-column: span 4;\\n        grid-row: span 2;\\n    }\\n\\n    .gallery-item.medium {\\n        grid-column: span 2;\\n        grid-row: span 2;\\n    }\\n\\n    .gallery-item.small {\\n        grid-column: span 2;\\n        grid-row: span 1;\\n    }\\n\\n    @media (max-width: 1024px) {\\n        .gallery-grid {\\n            grid-template-columns: repeat(4, 1fr);\\n        }\\n\\n        .gallery-item.large {\\n            grid-column: span 4;\\n        }\\n\\n        .gallery-item.medium {\\n            grid-column: span 2;\\n        }\\n\\n        .gallery-item.small {\\n            grid-column: span 2;\\n        }\\n    }\\n\\n    @media (max-width: 640px) {\\n        .gallery-grid {\\n            grid-template-columns: repeat(2, 1fr);\\n        }\\n\\n        .gallery-item.large,\\n        .gallery-item.medium {\\n            grid-column: span 2;\\n        }\\n\\n        .gallery-item.small {\\n            grid-column: span 1;\\n        }\\n    }\\n</style>\\n  "],"names":[],"mappings":"AAwOI,4BAAc,CACV,OAAO,CAAE,IAAI,CACb,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CAAC,CACrC,cAAc,CAAE,KAAK,CACrB,GAAG,CAAE,GAAG,CACR,gBAAgB,CAAE,OACtB,CAEA,4BAAc,CACV,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MAAM,CAChB,MAAM,CAAE,OAAO,CACf,gBAAgB,CAAE,IACtB,CAEA,aAAa,qBAAO,CAChB,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,QAAQ,CAAE,IAAI,CAAC,CACnB,CAEA,aAAa,sBAAQ,CACjB,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,QAAQ,CAAE,IAAI,CAAC,CACnB,CAEA,aAAa,qBAAO,CAChB,WAAW,CAAE,IAAI,CAAC,CAAC,CACnB,QAAQ,CAAE,IAAI,CAAC,CACnB,CAEA,MAAO,YAAY,MAAM,CAAE,CACvB,4BAAc,CACV,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACxC,CAEA,aAAa,qBAAO,CAChB,WAAW,CAAE,IAAI,CAAC,CACtB,CAEA,aAAa,sBAAQ,CACjB,WAAW,CAAE,IAAI,CAAC,CACtB,CAEA,aAAa,qBAAO,CAChB,WAAW,CAAE,IAAI,CAAC,CACtB,CACJ,CAEA,MAAO,YAAY,KAAK,CAAE,CACtB,4BAAc,CACV,qBAAqB,CAAE,OAAO,CAAC,CAAC,CAAC,GAAG,CACxC,CAEA,aAAa,qBAAM,CACnB,aAAa,sBAAQ,CACjB,WAAW,CAAE,IAAI,CAAC,CACtB,CAEA,aAAa,qBAAO,CAChB,WAAW,CAAE,IAAI,CAAC,CACtB,CACJ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
    }
  ];
  $$result.css.add(css);
  return `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <div class="gallery-content min-h-screen bg-gray-50"><div class="max-w-[2000px] mx-auto p-4"><div class="gallery-grid svelte-1ecjnii">${each(galleryItems, (item) => {
    return `<div class="${"gallery-item " + escape(item.size, true) + " svelte-1ecjnii"}"><div class="relative overflow-hidden w-full h-full"><img${add_attribute("src", item.image, 0)}${add_attribute("alt", item.title, 0)} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300"><div class="absolute bottom-0 left-0 p-6"><span class="text-sm text-gray-300 mb-2 block">${escape(item.category)}</span> <h2 class="text-2xl font-bold text-white">${escape(item.title)}</h2></div> </div></div> </div>`;
  })}</div></div></div>  ${validate_component(AdSense, "AdSense").$$render($$result, {}, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
