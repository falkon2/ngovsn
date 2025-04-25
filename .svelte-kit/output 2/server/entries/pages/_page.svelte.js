import "clsx";
import { K as fallback, M as attr_style, J as escape_html, N as bind_props, C as pop, z as push, O as stringify, P as attr } from "../../chunks/index.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../chunks/AdSense.js";
import "../../chunks/animations.js";
function Hero($$payload, $$props) {
  push();
  let title = fallback($$props["title"], "");
  let subtitle = fallback($$props["subtitle"], "");
  let backgroundImage = fallback($$props["backgroundImage"], "");
  $$payload.out += `<section class="hero relative min-h-screen bg-cover bg-center bg-fixed"${attr_style(`background-image: url('${stringify(backgroundImage)}');`)}><div class="absolute inset-0 bg-black/40"></div> <div class="absolute inset-0 backdrop-blur-[2px]"></div> <div class="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4 max-w-6xl mx-auto"><h1 class="hero-title text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white tracking-tight leading-tight">${escape_html(title)}</h1> <p class="hero-subtitle text-xl md:text-2xl mb-8 text-white/90 max-w-3xl leading-relaxed">${escape_html(subtitle)}</p> <div class="hero-buttons flex gap-6"><a href="/donate" class="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">Donate Now</a> <a href="/volunteer" class="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/30">Volunteer</a></div></div></section>`;
  bind_props($$props, { title, subtitle, backgroundImage });
  pop();
}
function Card($$payload, $$props) {
  let title = fallback($$props["title"], "");
  let description = fallback($$props["description"], "");
  let image = fallback($$props["image"], "");
  $$payload.out += `<div class="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">`;
  if (image) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="relative overflow-hidden"><img${attr("src", image)}${attr("alt", title)} class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"> <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="p-6"><h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-600 transition-colors duration-300">${escape_html(title)}</h3> <p class="text-gray-600 leading-relaxed">${escape_html(description)}</p> <a href="#" class="inline-block mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">Learn More →</a></div></div>`;
  bind_props($$props, { title, description, image });
}
function _page($$payload, $$props) {
  push();
  $$payload.out += `<main class="min-h-screen overflow-x-hidden">`;
  Navbar($$payload);
  $$payload.out += `<!----> <section class="hero-section w-full">`;
  Hero($$payload, {
    title: "Voice of Strays and Nature",
    subtitle: "Giving a Voice to the Voiceless – Empowering stray animals with care, compassion, and community support.",
    backgroundImage: "/img/heroBg.jpg"
  });
  $$payload.out += `<!----></section> <section class="mission-section py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.2"><div class="container mx-auto px-4 text-center max-w-7xl"><h2 class="text-4xl font-bold mb-6 text-gray-800 reveal-text svelte-rwqrzw">Our Mission</h2> <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Voice of Strays and Nature is dedicated to transforming the lives of stray animals by empowering communities through sustainable care initiatives, compassionate rescue operations, and active community engagement.</p></div></section> <section class="initiatives-section py-16 bg-white/60 backdrop-blur-md w-full"><div class="container mx-auto px-4 max-w-7xl"><h2 class="text-4xl font-bold mb-12 text-center text-gray-800 reveal-text svelte-rwqrzw">Our Initiatives</h2> <div class="grid gap-8 grid-cols-1 md:grid-cols-3"><div class="initiative-card">`;
  Card($$payload, {
    title: "Rescue Initiatives",
    description: "Discover our rescue operations that give stray animals a new lease on life through medical care, rehabilitation, and finding forever homes.",
    image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42"
  });
  $$payload.out += `<!----></div> <div class="initiative-card">`;
  Card($$payload, {
    title: "Community Outreach",
    description: "Learn how we engage communities to create sustainable change for stray animals through education, awareness, and local partnerships.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c"
  });
  $$payload.out += `<!----></div> <div class="initiative-card">`;
  Card($$payload, {
    title: "Volunteer Programs",
    description: "Join our team of passionate volunteers making a difference every day through hands-on care, fundraising, and community events.",
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e"
  });
  $$payload.out += `<!----></div></div></div></section> <section class="py-16 bg-white/80 backdrop-blur-md w-full" data-parallax="0.1"><div class="container mx-auto px-4 max-w-7xl"><div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"><div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">200+</h3> <p class="text-gray-600">Animals Fed</p></div> <div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">100+</h3> <p class="text-gray-600">Volunteers</p></div> <div class="p-6"><h3 class="stat-number text-5xl font-bold text-green-600 mb-2">50+</h3> <p class="text-gray-600">Communities Reached</p></div></div></div></section> `;
  AdSense($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
