import { D as current_component, C as pop, z as push, E as store_get, F as slot, G as unsubscribe_stores } from "../../chunks/index.js";
import { n as navigating } from "../../chunks/firebase.js";
import "clsx";
import "../../chunks/client.js";
import "firebase/analytics";
function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
function LoadingBar($$payload, $$props) {
  push();
  let timeoutId;
  onDestroy(() => {
    clearTimeout(timeoutId);
  });
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let { children } = $$props;
  LoadingBar($$payload);
  $$payload.out += `<!----> `;
  if (store_get($$store_subs ??= {}, "$navigating", navigating)) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="fixed inset-0 bg-white/50 backdrop-blur-sm z-[60] flex items-center justify-center svelte-6wtc3s"><div class="loading-spinner svelte-6wtc3s"></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="page-content svelte-6wtc3s"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _layout as default
};
