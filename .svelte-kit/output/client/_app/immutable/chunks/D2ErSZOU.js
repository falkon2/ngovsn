function k(){}function x(t,n){for(const e in n)t[e]=n[e];return t}function w(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(w)}function M(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let a;function S(t,n){return t===n?!0:(a||(a=document.createElement("a")),a.href=n,t===a.href)}function U(t){return Object.keys(t).length===0}function j(t,...n){if(t==null){for(const o of n)o(void 0);return k}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function A(t,n,e){t.$$.on_destroy.push(j(n,e))}function B(t,n,e,o){if(t){const s=p(t,n,e,o);return t[0](s)}}function p(t,n,e,o){return t[1]&&o?x(e.ctx.slice(),t[1](o(n))):e.ctx}function C(t,n,e,o){return t[2],n.dirty}function D(t,n,e,o,s,m){if(s){const y=p(n,e,o,m);t.p(y,s)}}function G(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let l;function i(t){l=t}function b(){if(!l)throw new Error("Function called outside component initialization");return l}function H(t){b().$$.on_mount.push(t)}function I(t){b().$$.after_update.push(t)}const u=[],h=[];let r=[];const d=[],g=Promise.resolve();let _=!1;function q(){_||(_=!0,g.then(O))}function J(){return q(),g}function v(t){r.push(t)}const f=new Set;let c=0;function O(){if(c!==0)return;const t=l;do{try{for(;c<u.length;){const n=u[c];c++,i(n),z(n.$$)}}catch(n){throw u.length=0,c=0,n}for(i(null),u.length=0,c=0;h.length;)h.pop()();for(let n=0;n<r.length;n+=1){const e=r[n];f.has(e)||(f.add(e),e())}r.length=0}while(u.length);for(;d.length;)d.pop()();_=!1,f.clear(),i(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}function K(t){const n=[],e=[];r.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),r=n}export{S as a,v as b,A as c,I as d,h as e,B as f,G as g,C as h,M as i,U as j,l as k,F as l,O as m,k as n,H as o,i as p,K as q,E as r,P as s,J as t,D as u,w as v,u as w,q as x};
