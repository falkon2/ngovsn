import "clsx";
import { C as pop, z as push } from "../../../chunks/index.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../../chunks/AdSense.js";
function _page($$payload, $$props) {
  push();
  Navbar($$payload);
  $$payload.out += `<!----> <main class="volunteer-page svelte-1kqjv2h"><div class="volunteer-content svelte-1kqjv2h"><h1 class="svelte-1kqjv2h">Join Our Volunteer Team</h1> <p class="subtitle svelte-1kqjv2h">Make a difference in the lives of stray animals</p> <div class="typeform-container svelte-1kqjv2h"><div data-tf-widget="01JRAJ9VWFJTQQDCMYKRN69ADC" data-tf-opacity="100" data-tf-iframe-props="title=Volunteer Application" data-tf-transitive-search-params="" data-tf-medium="snippet" style="width:100%;height:500px;"></div> <script src="//embed.typeform.com/next/embed.js"><\/script></div></div></main> `;
  AdSense($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
