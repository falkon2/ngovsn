import { Q as ensure_array_like, R as attr_class, P as attr, J as escape_html, O as stringify, C as pop, z as push } from "../../../chunks/index.js";
import "../../../chunks/animations.js";
import { N as Navbar, A as AdSense, F as Footer } from "../../../chunks/AdSense.js";
function _page($$payload, $$props) {
  push();
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
  const each_array = ensure_array_like(galleryItems);
  Navbar($$payload);
  $$payload.out += `<!----> <div class="gallery-content min-h-screen bg-gray-50"><div class="max-w-[2000px] mx-auto p-4"><div class="gallery-grid svelte-1ecjnii"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<div${attr_class(`gallery-item ${stringify(item.size)}`, "svelte-1ecjnii")}><div class="relative overflow-hidden w-full h-full"><img${attr("src", item.image)}${attr("alt", item.title)} class="w-full h-full object-cover"> <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-all duration-300"><div class="absolute bottom-0 left-0 p-6"><span class="text-sm text-gray-300 mb-2 block">${escape_html(item.category)}</span> <h2 class="text-2xl font-bold text-white">${escape_html(item.title)}</h2></div></div></div></div>`;
  }
  $$payload.out += `<!--]--></div></div></div> `;
  AdSense($$payload);
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
