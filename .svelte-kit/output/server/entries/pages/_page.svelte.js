import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../chunks/AdSense.js";
import "../../chunks/animations.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subtitle = "" } = $$props;
  let { backgroundImage = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0) $$bindings.subtitle(subtitle);
  if ($$props.backgroundImage === void 0 && $$bindings.backgroundImage && backgroundImage !== void 0) $$bindings.backgroundImage(backgroundImage);
  return `<section class="hero relative min-h-screen bg-cover bg-center bg-fixed" style="${"background-image: url('" + escape(backgroundImage, true) + "');"}"><div class="absolute inset-0 bg-black/40"></div>  <div class="absolute inset-0 backdrop-blur-[2px]"></div> <div class="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 max-w-6xl mx-auto"><h1 class="hero-title text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-tight">${escape(title)}</h1> <p class="hero-subtitle text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">${escape(subtitle)}</p> <div class="hero-buttons flex gap-6" data-svelte-h="svelte-11alph"><a href="/donate" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Donate Now</a> <a href="/volunteer" class="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30">Volunteer</a></div></div></section>`;
});
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { image = "" } = $$props;
  let { link = "#" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0) $$bindings.link(link);
  return `<div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">${image ? `<div class="relative overflow-hidden"><img${add_attribute("src", image, 0)}${add_attribute("alt", title, 0)} class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div>` : ``} <div class="p-6"><h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">${escape(title)}</h3> <p class="text-gray-600 leading-relaxed">${escape(description)}</p> <a${add_attribute("href", link, 0)} class="inline-block mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300" aria-label="${"Learn more about " + escape(title, true)}">Learn More →</a></div></div>`;
});
const css = {
  code: ".reveal-text.svelte-rwqrzw{opacity:0.01;transform:translateY(20px)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { onMount } from 'svelte';\\n    import Navbar from '../components/Navbar.svelte';\\n    import Hero from '../components/Hero.svelte';\\n    import Card from '../components/Card.svelte';\\n    import Footer from '../components/Footer.svelte';\\n    import AdSense from '../components/AdSense.svelte';\\n    import { initAnimations } from '../lib/animations.js';\\n    \\n    onMount(() => {\\n        initAnimations({ excludeNavbar: true });\\n    });\\n<\/script>\\n\\n\\n<main class=\\"min-h-screen overflow-x-hidden\\">\\n    <!-- Navbar -->\\n    <Navbar />\\n\\n    <!-- Hero Section -->\\n    <section class=\\"hero-section w-full\\">\\n        <Hero \\n            title=\\"Voice of Strays and Nature\\" \\n            subtitle=\\"Giving a Voice to the Voiceless – Empowering stray animals with care, compassion, and community support.\\" \\n            backgroundImage=\\"/img/heroBg.jpg\\" \\n        />\\n    </section>\\n\\n    <!-- Mission Statement -->\\n    <section class=\\"mission-section py-16 bg-white/80 backdrop-blur-md w-full\\" data-parallax=\\"0.2\\">\\n        <div class=\\"container mx-auto px-4 text-center max-w-7xl\\">\\n            <h2 class=\\"text-4xl font-bold mb-6 text-gray-800 reveal-text\\">Our Mission</h2>\\n            <p class=\\"text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed\\">\\n                Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.\\n            </p>\\n        </div>\\n    </section>\\n\\n    <!-- Initiatives Cards Section -->\\n    <section class=\\"initiatives-section py-16 bg-white/60 backdrop-blur-md w-full\\">\\n        <div class=\\"container mx-auto px-4 max-w-7xl\\">\\n            <h2 class=\\"text-4xl font-bold mb-12 text-center text-gray-800 reveal-text\\">Our Initiatives</h2>\\n            <div class=\\"grid gap-8 grid-cols-1 md:grid-cols-3\\">\\n                <div class=\\"initiative-card\\">\\n                    <a href=\\"/gallery\\" class=\\"block\\">\\n                        <Card \\n                            title=\\"Feeding Initiatives\\" \\n                            description=\\"Discover our feeding operations that provide nourishment and care to stray animals through community-driven feeding programs.\\" \\n                            image=\\"/img/img11.jpeg\\" \\n                        />\\n                    </a>\\n                </div>\\n                <div class=\\"initiative-card\\">\\n                    <a href=\\"/aboutus\\" class=\\"block\\">\\n                        <Card \\n                            title=\\"Community Outreach\\" \\n                            description=\\"Learn how we engage communities to create sustainable change for stray animals through education, awareness, and local partnerships.\\" \\n                            image=\\"/img/img17.jpeg\\" \\n                        />\\n                    </a>\\n                </div>\\n                <div class=\\"initiative-card\\">\\n                    <a href=\\"/volunteer\\" class=\\"block\\">\\n                        <Card \\n                            title=\\"Volunteer Programs\\" \\n                            description=\\"Join our team of passionate volunteers making a difference every day through hands-on care, fundraising, and community events.\\" \\n                            image=\\"/img/group4.jpeg\\" \\n                        />\\n                    </a>\\n                </div>\\n            </div>\\n        </div>\\n    </section>\\n\\n    <!-- Impact Stats Section -->\\n    <section class=\\"py-16 bg-white/80 backdrop-blur-md w-full\\" data-parallax=\\"0.1\\">\\n        <div class=\\"container mx-auto px-4 max-w-7xl\\">\\n            <div class=\\"grid grid-cols-1 md:grid-cols-3 gap-8 text-center\\">\\n                <div class=\\"p-6\\">\\n                    <h3 class=\\"stat-number text-5xl font-bold text-green-600 mb-2\\">200+</h3>\\n                    <p class=\\"text-gray-600\\">Animals Fed</p>\\n                </div>\\n                <div class=\\"p-6\\">\\n                    <h3 class=\\"stat-number text-5xl font-bold text-green-600 mb-2\\">100+</h3>\\n                    <p class=\\"text-gray-600\\">Volunteers</p>\\n                </div>\\n                <div class=\\"p-6\\">\\n                    <h3 class=\\"stat-number text-5xl font-bold text-green-600 mb-2\\">50+</h3>\\n                    <p class=\\"text-gray-600\\">Communities Reached</p>\\n                </div>\\n            </div>\\n        </div>\\n    </section>\\n\\n    <!-- AdSense Ad -->\\n    <AdSense />\\n\\n    <!-- Footer -->\\n    <Footer />\\n</main>\\n\\n<style>\\n    .reveal-text {\\n        opacity: 0.01;\\n        transform: translateY(20px);\\n    }\\n</style>\\n  "],"names":[],"mappings":"AAsGI,0BAAa,CACT,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,WAAW,IAAI,CAC9B"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="min-h-screen overflow-x-hidden"> ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}  <section class="hero-section w-full">${validate_component(Hero, "Hero").$$render(
    $$result,
    {
      title: "Voice of Strays and Nature",
      subtitle: "Giving a Voice to the Voiceless – Empowering stray animals with care, compassion, and community support.",
      backgroundImage: "/img/heroBg.jpg"
    },
    {},
    {}
  )}</section>  <section class="mission-section py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.2" data-svelte-h="svelte-16esbek"><div class="container mx-auto px-4 text-center max-w-7xl"><h2 class="text-4xl font-bold mb-6 text-gray-800 reveal-text svelte-rwqrzw">Our Mission</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.</p></div></section>  <section class="initiatives-section py-16 bg-white/60 backdrop-blur-md w-full"><div class="container mx-auto px-4 max-w-7xl"><h2 class="text-4xl font-bold mb-12 text-center text-gray-800 reveal-text svelte-rwqrzw" data-svelte-h="svelte-asjmq8">Our Initiatives</h2> <div class="grid gap-8 grid-cols-1 md:grid-cols-3"><div class="initiative-card"><a href="/gallery" class="block">${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Feeding Initiatives",
      description: "Discover our feeding operations that provide nourishment and care to stray animals through community-driven feeding programs.",
      image: "/img/img11.jpeg"
    },
    {},
    {}
  )}</a></div> <div class="initiative-card"><a href="/aboutus" class="block">${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Community Outreach",
      description: "Learn how we engage communities to create sustainable change for stray animals through education, awareness, and local partnerships.",
      image: "/img/img17.jpeg"
    },
    {},
    {}
  )}</a></div> <div class="initiative-card"><a href="/volunteer" class="block">${validate_component(Card, "Card").$$render(
    $$result,
    {
      title: "Volunteer Programs",
      description: "Join our team of passionate volunteers making a difference every day through hands-on care, fundraising, and community events.",
      image: "/img/group4.jpeg"
    },
    {},
    {}
  )}</a></div></div></div></section>  <section class="py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.1" data-svelte-h="svelte-1oi6n8j"><div class="container mx-auto px-4 max-w-7xl"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"><div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">200+</h3> <p class="text-gray-600">Animals Fed</p></div> <div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">100+</h3> <p class="text-gray-600">Volunteers</p></div> <div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">50+</h3> <p class="text-gray-600">Communities Reached</p></div></div></div></section>  ${validate_component(AdSense, "AdSense").$$render($$result, {}, {}, {})}  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </main>`;
});
export {
  Page as default
};
