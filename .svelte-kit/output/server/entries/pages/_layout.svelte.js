import { c as create_ssr_component, d as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { a as analytics } from "../../chunks/firebase.js";
import { logEvent } from "firebase/analytics";
const safeLogEvent = (eventName, eventParams) => {
  try {
    if (analytics) {
      console.log(`Logging event: ${eventName}`, eventParams);
      logEvent(analytics, eventName, eventParams);
    } else {
      console.warn(`Analytics not initialized, couldn't log event: ${eventName}`);
    }
  } catch (error) {
    console.error(`Error logging event ${eventName}:`, error);
  }
};
const trackPageView = (pageName) => {
  const params = {
    page_title: pageName,
    page_location: window.location.href,
    page_path: window.location.pathname
  };
  safeLogEvent("page_view", params);
};
const css = {
  code: ".app.svelte-telkp3{display:flex;flex-direction:column;min-height:100vh}main.svelte-telkp3{flex:1;display:flex;flex-direction:column}.loading-bar.svelte-telkp3{position:fixed;top:0;left:0;width:100%;height:3px;background-color:#e5e7eb;z-index:1000}.loading-progress.svelte-telkp3{height:100%;width:100%;background-color:#10b981;animation:svelte-telkp3-loading 1s ease-in-out infinite}@keyframes svelte-telkp3-loading{0%{width:0%;left:0}50%{width:100%;left:0}100%{width:0%;left:100%}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\n\\timport '../app.css';\\n\\timport { page } from '$app/stores';\\n\\timport { onMount } from 'svelte';\\n\\timport { trackPageView } from '$lib/analytics';\\n\\n\\tlet currentPath = '';\\n\\tlet isScrolled = false;\\n\\tlet isLoading = false;\\n\\n\\t// Handle scroll effect for navbar\\n\\tfunction handleScroll() {\\n\\t\\tisScrolled = window.scrollY > 20;\\n\\t}\\n\\n\\tonMount(() => {\\n\\t\\tif (typeof window !== 'undefined') {\\n\\t\\t\\twindow.addEventListener('scroll', handleScroll);\\n\\t\\t\\thandleScroll(); // Check initial scroll position\\n\\t\\t}\\n\\n\\t\\treturn () => {\\n\\t\\t\\tif (typeof window !== 'undefined') {\\n\\t\\t\\t\\twindow.removeEventListener('scroll', handleScroll);\\n\\t\\t\\t}\\n\\t\\t};\\n\\t});\\n\\n\\t// Track page changes\\n\\t$: if ($page && $page.url.pathname !== currentPath && currentPath !== '') {\\n\\t\\tcurrentPath = $page.url.pathname;\\n\\t\\ttrackPageView(currentPath);\\n\\t}\\n\\n\\t// Handle loading state\\n\\t$: if ($page) {\\n\\t\\tisLoading = $page.status === 'loading';\\n\\t}\\n<\/script>\\n\\n{#if isLoading}\\n\\t<div class=\\"loading-bar\\">\\n\\t\\t<div class=\\"loading-progress\\"></div>\\n\\t</div>\\n{/if}\\n\\n<div class=\\"app\\" class:scrolled={isScrolled}>\\n\\t<main>\\n\\t\\t<slot />\\n\\t</main>\\n</div>\\n\\n<style>\\n\\t.app {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tmin-height: 100vh;\\n\\t}\\n\\n\\tmain {\\n\\t\\tflex: 1;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t.loading-bar {\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\twidth: 100%;\\n\\t\\theight: 3px;\\n\\t\\tbackground-color: #e5e7eb;\\n\\t\\tz-index: 1000;\\n\\t}\\n\\n\\t.loading-progress {\\n\\t\\theight: 100%;\\n\\t\\twidth: 100%;\\n\\t\\tbackground-color: #10b981;\\n\\t\\tanimation: loading 1s ease-in-out infinite;\\n\\t}\\n\\n\\t@keyframes loading {\\n\\t\\t0% {\\n\\t\\t\\twidth: 0%;\\n\\t\\t\\tleft: 0;\\n\\t\\t}\\n\\t\\t50% {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\tleft: 0;\\n\\t\\t}\\n\\t\\t100% {\\n\\t\\t\\twidth: 0%;\\n\\t\\t\\tleft: 100%;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAqDC,kBAAK,CACJ,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,UAAU,CAAE,KACb,CAEA,kBAAK,CACJ,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MACjB,CAEA,0BAAa,CACZ,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IACV,CAEA,+BAAkB,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,OAAO,CACzB,SAAS,CAAE,qBAAO,CAAC,EAAE,CAAC,WAAW,CAAC,QACnC,CAEA,WAAW,qBAAQ,CAClB,EAAG,CACF,KAAK,CAAE,EAAE,CACT,IAAI,CAAE,CACP,CACA,GAAI,CACH,KAAK,CAAE,IAAI,CACX,IAAI,CAAE,CACP,CACA,IAAK,CACJ,KAAK,CAAE,EAAE,CACT,IAAI,CAAE,IACP,CACD"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentPath = "";
  let isLoading = false;
  $$result.css.add(css);
  {
    if ($page && $page.url.pathname !== currentPath && currentPath !== "") {
      currentPath = $page.url.pathname;
      trackPageView(currentPath);
    }
  }
  {
    if ($page) {
      isLoading = $page.status === "loading";
    }
  }
  $$unsubscribe_page();
  return `${isLoading ? `<div class="loading-bar svelte-telkp3" data-svelte-h="svelte-l94pk8"><div class="loading-progress svelte-telkp3"></div></div>` : ``} <div class="${["app svelte-telkp3", ""].join(" ").trim()}"><main class="svelte-telkp3">${slots.default ? slots.default({}) : ``}</main> </div>`;
});
export {
  Layout as default
};
