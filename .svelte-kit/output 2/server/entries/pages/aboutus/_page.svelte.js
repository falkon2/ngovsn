import "clsx";
import { C as pop, z as push } from "../../../chunks/index.js";
import "../../../chunks/animations.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../../chunks/AdSense.js";
function _page($$payload, $$props) {
  push();
  Navbar($$payload);
  $$payload.out += `<!----> <div class="about-content min-h-screen bg-gray-50 py-16"><div class="container mx-auto px-4"><h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">About Us</h1> <div class="max-w-4xl mx-auto"><div class="bg-white rounded-lg shadow-lg p-8 mb-8"><h2 class="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2> <p class="text-gray-600 mb-6">We are dedicated to improving the lives of stray animals through rescue, 
                    rehabilitation, and community engagement. Our mission is to create a world 
                    where every animal has a safe home and proper care.</p></div> <div class="bg-white rounded-lg shadow-lg p-8 mb-8"><h2 class="text-2xl font-bold text-gray-800 mb-4">Our Story</h2> <p class="text-gray-600 mb-6">Founded in 2020, Voice of Strays and Nature began as a small group of 
                    passionate animal lovers determined to make a difference. Today, we've grown 
                    into a community-driven organization with hundreds of volunteers and successful 
                    rescue stories.</p></div> <div class="bg-white rounded-lg shadow-lg p-8"><h2 class="text-2xl font-bold text-gray-800 mb-4">Our Impact</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"><div class="p-4"><h3 class="text-4xl font-bold text-green-600 mb-2">500+</h3> <p class="text-gray-600">Animals Rescued</p></div> <div class="p-4"><h3 class="text-4xl font-bold text-green-600 mb-2">1000+</h3> <p class="text-gray-600">Volunteers</p></div> <div class="p-4"><h3 class="text-4xl font-bold text-green-600 mb-2">50+</h3> <p class="text-gray-600">Communities Served</p></div></div></div></div></div></div> `;
  AdSense($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
