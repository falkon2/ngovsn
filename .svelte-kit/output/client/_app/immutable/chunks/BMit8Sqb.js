var xi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps=function(n){const e=[];let s=0;for(let o=0;o<n.length;o++){let h=n.charCodeAt(o);h<128?e[s++]=h:h<2048?(e[s++]=h>>6|192,e[s++]=h&63|128):(h&64512)===55296&&o+1<n.length&&(n.charCodeAt(o+1)&64512)===56320?(h=65536+((h&1023)<<10)+(n.charCodeAt(++o)&1023),e[s++]=h>>18|240,e[s++]=h>>12&63|128,e[s++]=h>>6&63|128,e[s++]=h&63|128):(e[s++]=h>>12|224,e[s++]=h>>6&63|128,e[s++]=h&63|128)}return e},Vr=function(n){const e=[];let s=0,o=0;for(;s<n.length;){const h=n[s++];if(h<128)e[o++]=String.fromCharCode(h);else if(h>191&&h<224){const c=n[s++];e[o++]=String.fromCharCode((h&31)<<6|c&63)}else if(h>239&&h<365){const c=n[s++],d=n[s++],v=n[s++],I=((h&7)<<18|(c&63)<<12|(d&63)<<6|v&63)-65536;e[o++]=String.fromCharCode(55296+(I>>10)),e[o++]=String.fromCharCode(56320+(I&1023))}else{const c=n[s++],d=n[s++];e[o++]=String.fromCharCode((h&15)<<12|(c&63)<<6|d&63)}}return e.join("")},gs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let h=0;h<n.length;h+=3){const c=n[h],d=h+1<n.length,v=d?n[h+1]:0,I=h+2<n.length,T=I?n[h+2]:0,C=c>>2,k=(c&3)<<4|v>>4;let A=(v&15)<<2|T>>6,O=T&63;I||(O=64,d||(A=64)),o.push(s[C],s[k],s[A],s[O])}return o.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ps(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let h=0;h<n.length;){const c=s[n.charAt(h++)],v=h<n.length?s[n.charAt(h)]:0;++h;const T=h<n.length?s[n.charAt(h)]:64;++h;const k=h<n.length?s[n.charAt(h)]:64;if(++h,c==null||v==null||T==null||k==null)throw new Hr;const A=c<<2|v>>4;if(o.push(A),T!==64){const O=v<<4&240|T>>2;if(o.push(O),k!==64){const b=T<<6&192|k;o.push(b)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const zr=function(n){const e=ps(n);return gs.encodeByteArray(e,!0)},Ie=function(n){return zr(n).replace(/\./g,"")},Gr=function(n){try{return gs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=()=>Kr().__FIREBASE_DEFAULTS__,Wr=()=>{if(typeof process>"u"||typeof xi>"u")return;const n=xi.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xr=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Gr(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return qr()||Wr()||Xr()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Yr=n=>{var e,s;return(s=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||s===void 0?void 0:s[n]},ys=n=>{const e=Yr(n);if(!e)return;const s=e.lastIndexOf(":");if(s<=0||s+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const o=parseInt(e.substring(s+1),10);return e[0]==="["?[e.substring(1,s-1),o]:[e.substring(0,s),o]},vs=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}wrapCallback(e){return(s,o)=>{s?this.reject(s):this.resolve(o),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(s):e(s,o))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const s={alg:"none",type:"JWT"},o=e||"demo-project",h=n.iat||0,c=n.sub||n.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const d=Object.assign({iss:`https://securetoken.google.com/${o}`,aud:o,iat:h,exp:h+3600,auth_time:h,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ie(JSON.stringify(s)),Ie(JSON.stringify(d)),""].join(".")}function ws(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Tn(){try{return typeof indexedDB=="object"}catch{return!1}}function En(){return new Promise((n,e)=>{try{let s=!0;const o="validate-browser-context-for-indexeddb-analytics-module",h=self.indexedDB.open(o);h.onsuccess=()=>{h.result.close(),s||self.indexedDB.deleteDatabase(o),n(!0)},h.onupgradeneeded=()=>{s=!1},h.onerror=()=>{var c;e(((c=h.error)===null||c===void 0?void 0:c.message)||"")}}catch(s){e(s)}})}function Is(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr="FirebaseError";class pt extends Error{constructor(e,s,o){super(s),this.code=e,this.customData=o,this.name=Zr,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ce.prototype.create)}}class Ce{constructor(e,s,o){this.service=e,this.serviceName=s,this.errors=o}create(e,...s){const o=s[0]||{},h=`${this.service}/${e}`,c=this.errors[e],d=c?Qr(c,o):"Error",v=`${this.serviceName}: ${d} (${h}).`;return new pt(h,v,o)}}function Qr(n,e){return n.replace(to,(s,o)=>{const h=e[o];return h!=null?String(h):`<${o}?>`})}const to=/\{\$([^}]+)}/g;function Te(n,e){if(n===e)return!0;const s=Object.keys(n),o=Object.keys(e);for(const h of s){if(!o.includes(h))return!1;const c=n[h],d=e[h];if(Fi(c)&&Fi(d)){if(!Te(c,d))return!1}else if(c!==d)return!1}for(const h of o)if(!s.includes(h))return!1;return!0}function Fi(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=1e3,no=2,io=4*60*60*1e3,so=.5;function ji(n,e=eo,s=no){const o=e*Math.pow(s,n),h=Math.round(so*o*(Math.random()-.5)*2);return Math.min(io,o+h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(n){return n&&n._delegate?n._delegate:n}class rt{constructor(e,s,o){this.name=e,this.instanceFactory=s,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,s){this.name=e,this.container=s,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const s=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(s)){const o=new Jr;if(this.instancesDeferred.set(s,o),this.isInitialized(s)||this.shouldAutoInitialize())try{const h=this.getOrInitializeService({instanceIdentifier:s});h&&o.resolve(h)}catch{}}return this.instancesDeferred.get(s).promise}getImmediate(e){var s;const o=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),h=(s=e==null?void 0:e.optional)!==null&&s!==void 0?s:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(c){if(h)return null;throw c}else{if(h)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ao(e))try{this.getOrInitializeService({instanceIdentifier:At})}catch{}for(const[s,o]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(s);try{const c=this.getOrInitializeService({instanceIdentifier:h});o.resolve(c)}catch{}}}}clearInstance(e=At){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(s=>"INTERNAL"in s).map(s=>s.INTERNAL.delete()),...e.filter(s=>"_delete"in s).map(s=>s._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=At){return this.instances.has(e)}getOptions(e=At){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:s={}}=e,o=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const h=this.getOrInitializeService({instanceIdentifier:o,options:s});for(const[c,d]of this.instancesDeferred.entries()){const v=this.normalizeInstanceIdentifier(c);o===v&&d.resolve(h)}return h}onInit(e,s){var o;const h=this.normalizeInstanceIdentifier(s),c=(o=this.onInitCallbacks.get(h))!==null&&o!==void 0?o:new Set;c.add(e),this.onInitCallbacks.set(h,c);const d=this.instances.get(h);return d&&e(d,h),()=>{c.delete(e)}}invokeOnInitCallbacks(e,s){const o=this.onInitCallbacks.get(s);if(o)for(const h of o)try{h(e,s)}catch{}}getOrInitializeService({instanceIdentifier:e,options:s={}}){let o=this.instances.get(e);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:oo(e),options:s}),this.instances.set(e,o),this.instancesOptions.set(e,s),this.invokeOnInitCallbacks(o,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,o)}catch{}return o||null}normalizeInstanceIdentifier(e=At){return this.component?this.component.multipleInstances?e:At:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oo(n){return n===At?void 0:n}function ao(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const s=this.getProvider(e.name);if(s.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);s.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const s=new ro(e,this);return this.providers.set(e,s),s}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var P;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(P||(P={}));const lo={debug:P.DEBUG,verbose:P.VERBOSE,info:P.INFO,warn:P.WARN,error:P.ERROR,silent:P.SILENT},co=P.INFO,uo={[P.DEBUG]:"log",[P.VERBOSE]:"log",[P.INFO]:"info",[P.WARN]:"warn",[P.ERROR]:"error"},fo=(n,e,...s)=>{if(e<n.logLevel)return;const o=new Date().toISOString(),h=uo[e];if(h)console[h](`[${o}]  ${n.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class bn{constructor(e){this.name=e,this._logLevel=co,this._logHandler=fo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in P))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lo[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,P.DEBUG,...e),this._logHandler(this,P.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,P.VERBOSE,...e),this._logHandler(this,P.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,P.INFO,...e),this._logHandler(this,P.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,P.WARN,...e),this._logHandler(this,P.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,P.ERROR,...e),this._logHandler(this,P.ERROR,...e)}}const po=(n,e)=>e.some(s=>n instanceof s);let Bi,Ui;function go(){return Bi||(Bi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mo(){return Ui||(Ui=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ts=new WeakMap,pn=new WeakMap,Es=new WeakMap,rn=new WeakMap,Sn=new WeakMap;function yo(n){const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("success",c),n.removeEventListener("error",d)},c=()=>{s(_t(n.result)),h()},d=()=>{o(n.error),h()};n.addEventListener("success",c),n.addEventListener("error",d)});return e.then(s=>{s instanceof IDBCursor&&Ts.set(s,n)}).catch(()=>{}),Sn.set(e,n),e}function vo(n){if(pn.has(n))return;const e=new Promise((s,o)=>{const h=()=>{n.removeEventListener("complete",c),n.removeEventListener("error",d),n.removeEventListener("abort",d)},c=()=>{s(),h()},d=()=>{o(n.error||new DOMException("AbortError","AbortError")),h()};n.addEventListener("complete",c),n.addEventListener("error",d),n.addEventListener("abort",d)});pn.set(n,e)}let gn={get(n,e,s){if(n instanceof IDBTransaction){if(e==="done")return pn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Es.get(n);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return _t(n[e])},set(n,e,s){return n[e]=s,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _o(n){gn=n(gn)}function wo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const o=n.call(on(this),e,...s);return Es.set(o,e.sort?e.sort():[e]),_t(o)}:mo().includes(n)?function(...e){return n.apply(on(this),e),_t(Ts.get(this))}:function(...e){return _t(n.apply(on(this),e))}}function Io(n){return typeof n=="function"?wo(n):(n instanceof IDBTransaction&&vo(n),po(n,go())?new Proxy(n,gn):n)}function _t(n){if(n instanceof IDBRequest)return yo(n);if(rn.has(n))return rn.get(n);const e=Io(n);return e!==n&&(rn.set(n,e),Sn.set(e,n)),e}const on=n=>Sn.get(n);function As(n,e,{blocked:s,upgrade:o,blocking:h,terminated:c}={}){const d=indexedDB.open(n,e),v=_t(d);return o&&d.addEventListener("upgradeneeded",I=>{o(_t(d.result),I.oldVersion,I.newVersion,_t(d.transaction),I)}),s&&d.addEventListener("blocked",I=>s(I.oldVersion,I.newVersion,I)),v.then(I=>{c&&I.addEventListener("close",()=>c()),h&&I.addEventListener("versionchange",T=>h(T.oldVersion,T.newVersion,T))}).catch(()=>{}),v}const To=["get","getKey","getAll","getAllKeys","count"],Eo=["put","add","delete","clear"],an=new Map;function $i(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(an.get(e))return an.get(e);const s=e.replace(/FromIndex$/,""),o=e!==s,h=Eo.includes(s);if(!(s in(o?IDBIndex:IDBObjectStore).prototype)||!(h||To.includes(s)))return;const c=async function(d,...v){const I=this.transaction(d,h?"readwrite":"readonly");let T=I.store;return o&&(T=T.index(v.shift())),(await Promise.all([T[s](...v),h&&I.done]))[0]};return an.set(e,c),c}_o(n=>({...n,get:(e,s,o)=>$i(e,s)||n.get(e,s,o),has:(e,s)=>!!$i(e,s)||n.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(bo(s)){const o=s.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(s=>s).join(" ")}}function bo(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mn="@firebase/app",Vi="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new bn("@firebase/app"),So="@firebase/app-compat",Ro="@firebase/analytics-compat",Do="@firebase/analytics",Co="@firebase/app-check-compat",ko="@firebase/app-check",Po="@firebase/auth",Oo="@firebase/auth-compat",No="@firebase/database",Lo="@firebase/data-connect",Mo="@firebase/database-compat",xo="@firebase/functions",Fo="@firebase/functions-compat",jo="@firebase/installations",Bo="@firebase/installations-compat",Uo="@firebase/messaging",$o="@firebase/messaging-compat",Vo="@firebase/performance",Ho="@firebase/performance-compat",zo="@firebase/remote-config",Go="@firebase/remote-config-compat",Ko="@firebase/storage",qo="@firebase/storage-compat",Wo="@firebase/firestore",Xo="@firebase/vertexai-preview",Yo="@firebase/firestore-compat",Jo="firebase",Zo="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]",Qo={[mn]:"fire-core",[So]:"fire-core-compat",[Do]:"fire-analytics",[Ro]:"fire-analytics-compat",[ko]:"fire-app-check",[Co]:"fire-app-check-compat",[Po]:"fire-auth",[Oo]:"fire-auth-compat",[No]:"fire-rtdb",[Lo]:"fire-data-connect",[Mo]:"fire-rtdb-compat",[xo]:"fire-fn",[Fo]:"fire-fn-compat",[jo]:"fire-iid",[Bo]:"fire-iid-compat",[Uo]:"fire-fcm",[$o]:"fire-fcm-compat",[Vo]:"fire-perf",[Ho]:"fire-perf-compat",[zo]:"fire-rc",[Go]:"fire-rc-compat",[Ko]:"fire-gcs",[qo]:"fire-gcs-compat",[Wo]:"fire-fst",[Yo]:"fire-fst-compat",[Xo]:"fire-vertex","fire-js":"fire-js",[Jo]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,ta=new Map,vn=new Map;function Hi(n,e){try{n.container.addComponent(e)}catch(s){ft.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,s)}}function dt(n){const e=n.name;if(vn.has(e))return ft.debug(`There were multiple attempts to register component ${e}.`),!1;vn.set(e,n);for(const s of Ee.values())Hi(s,n);for(const s of ta.values())Hi(s,n);return!0}function Lt(n,e){const s=n.container.getProvider("heartbeat").getImmediate({optional:!0});return s&&s.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Ce("app","Firebase",ea);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,s,o){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},s),this._name=s.name,this._automaticDataCollectionEnabled=s.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=Zo;function Ss(n,e={}){let s=n;typeof e!="object"&&(e={name:e});const o=Object.assign({name:yn,automaticDataCollectionEnabled:!1},e),h=o.name;if(typeof h!="string"||!h)throw wt.create("bad-app-name",{appName:String(h)});if(s||(s=vs()),!s)throw wt.create("no-options");const c=Ee.get(h);if(c){if(Te(s,c.options)&&Te(o,c.config))return c;throw wt.create("duplicate-app",{appName:h})}const d=new ho(h);for(const I of vn.values())d.addComponent(I);const v=new na(s,o,d);return Ee.set(h,v),v}function Rn(n=yn){const e=Ee.get(n);if(!e&&n===yn&&vs())return Ss();if(!e)throw wt.create("no-app",{appName:n});return e}function tt(n,e,s){var o;let h=(o=Qo[n])!==null&&o!==void 0?o:n;s&&(h+=`-${s}`);const c=h.match(/\s|\//),d=e.match(/\s|\//);if(c||d){const v=[`Unable to register library "${h}" with version "${e}":`];c&&v.push(`library name "${h}" contains illegal characters (whitespace or "/")`),c&&d&&v.push("and"),d&&v.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ft.warn(v.join(" "));return}dt(new rt(`${h}-version`,()=>({library:h,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia="firebase-heartbeat-database",sa=1,ee="firebase-heartbeat-store";let hn=null;function Rs(){return hn||(hn=As(ia,sa,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ee)}catch(s){console.warn(s)}}}}).catch(n=>{throw wt.create("idb-open",{originalErrorMessage:n.message})})),hn}async function ra(n){try{const s=(await Rs()).transaction(ee),o=await s.objectStore(ee).get(Ds(n));return await s.done,o}catch(e){if(e instanceof pt)ft.warn(e.message);else{const s=wt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ft.warn(s.message)}}}async function zi(n,e){try{const o=(await Rs()).transaction(ee,"readwrite");await o.objectStore(ee).put(e,Ds(n)),await o.done}catch(s){if(s instanceof pt)ft.warn(s.message);else{const o=wt.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ft.warn(o.message)}}}function Ds(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=1024,aa=30*24*60*60*1e3;class ha{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new ca(s),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var e,s;try{const h=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Gi();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)===null||s===void 0?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(d=>d.date===c)?void 0:(this._heartbeatsCache.heartbeats.push({date:c,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(d=>{const v=new Date(d.date).valueOf();return Date.now()-v<=aa}),this._storage.overwrite(this._heartbeatsCache))}catch(o){ft.warn(o)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=Gi(),{heartbeatsToSend:o,unsentEntries:h}=la(this._heartbeatsCache.heartbeats),c=Ie(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=s,h.length>0?(this._heartbeatsCache.heartbeats=h,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(s){return ft.warn(s),""}}}function Gi(){return new Date().toISOString().substring(0,10)}function la(n,e=oa){const s=[];let o=n.slice();for(const h of n){const c=s.find(d=>d.agent===h.agent);if(c){if(c.dates.push(h.date),Ki(s)>e){c.dates.pop();break}}else if(s.push({agent:h.agent,dates:[h.date]}),Ki(s)>e){s.pop();break}o=o.slice(1)}return{heartbeatsToSend:s,unsentEntries:o}}class ca{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Tn()?En().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await ra(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return zi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var s;if(await this._canUseIndexedDBPromise){const h=await this.read();return zi(this.app,{lastSentHeartbeatDate:(s=e.lastSentHeartbeatDate)!==null&&s!==void 0?s:h.lastSentHeartbeatDate,heartbeats:[...h.heartbeats,...e.heartbeats]})}else return}}function Ki(n){return Ie(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ua(n){dt(new rt("platform-logger",e=>new Ao(e),"PRIVATE")),dt(new rt("heartbeat",e=>new ha(e),"PRIVATE")),tt(mn,Vi,n),tt(mn,Vi,"esm2017"),tt("fire-js","")}ua("");var fa="firebase",da="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */tt(fa,da,"app");var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,l){function f(){}f.prototype=l.prototype,m.D=l.prototype,m.prototype=new f,m.prototype.constructor=m,m.C=function(p,g,_){for(var u=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)u[lt-2]=arguments[lt];return l.prototype[g].apply(p,u)}}function s(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(o,s),o.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function h(m,l,f){f||(f=0);var p=Array(16);if(typeof l=="string")for(var g=0;16>g;++g)p[g]=l.charCodeAt(f++)|l.charCodeAt(f++)<<8|l.charCodeAt(f++)<<16|l.charCodeAt(f++)<<24;else for(g=0;16>g;++g)p[g]=l[f++]|l[f++]<<8|l[f++]<<16|l[f++]<<24;l=m.g[0],f=m.g[1],g=m.g[2];var _=m.g[3],u=l+(_^f&(g^_))+p[0]+3614090360&4294967295;l=f+(u<<7&4294967295|u>>>25),u=_+(g^l&(f^g))+p[1]+3905402710&4294967295,_=l+(u<<12&4294967295|u>>>20),u=g+(f^_&(l^f))+p[2]+606105819&4294967295,g=_+(u<<17&4294967295|u>>>15),u=f+(l^g&(_^l))+p[3]+3250441966&4294967295,f=g+(u<<22&4294967295|u>>>10),u=l+(_^f&(g^_))+p[4]+4118548399&4294967295,l=f+(u<<7&4294967295|u>>>25),u=_+(g^l&(f^g))+p[5]+1200080426&4294967295,_=l+(u<<12&4294967295|u>>>20),u=g+(f^_&(l^f))+p[6]+2821735955&4294967295,g=_+(u<<17&4294967295|u>>>15),u=f+(l^g&(_^l))+p[7]+4249261313&4294967295,f=g+(u<<22&4294967295|u>>>10),u=l+(_^f&(g^_))+p[8]+1770035416&4294967295,l=f+(u<<7&4294967295|u>>>25),u=_+(g^l&(f^g))+p[9]+2336552879&4294967295,_=l+(u<<12&4294967295|u>>>20),u=g+(f^_&(l^f))+p[10]+4294925233&4294967295,g=_+(u<<17&4294967295|u>>>15),u=f+(l^g&(_^l))+p[11]+2304563134&4294967295,f=g+(u<<22&4294967295|u>>>10),u=l+(_^f&(g^_))+p[12]+1804603682&4294967295,l=f+(u<<7&4294967295|u>>>25),u=_+(g^l&(f^g))+p[13]+4254626195&4294967295,_=l+(u<<12&4294967295|u>>>20),u=g+(f^_&(l^f))+p[14]+2792965006&4294967295,g=_+(u<<17&4294967295|u>>>15),u=f+(l^g&(_^l))+p[15]+1236535329&4294967295,f=g+(u<<22&4294967295|u>>>10),u=l+(g^_&(f^g))+p[1]+4129170786&4294967295,l=f+(u<<5&4294967295|u>>>27),u=_+(f^g&(l^f))+p[6]+3225465664&4294967295,_=l+(u<<9&4294967295|u>>>23),u=g+(l^f&(_^l))+p[11]+643717713&4294967295,g=_+(u<<14&4294967295|u>>>18),u=f+(_^l&(g^_))+p[0]+3921069994&4294967295,f=g+(u<<20&4294967295|u>>>12),u=l+(g^_&(f^g))+p[5]+3593408605&4294967295,l=f+(u<<5&4294967295|u>>>27),u=_+(f^g&(l^f))+p[10]+38016083&4294967295,_=l+(u<<9&4294967295|u>>>23),u=g+(l^f&(_^l))+p[15]+3634488961&4294967295,g=_+(u<<14&4294967295|u>>>18),u=f+(_^l&(g^_))+p[4]+3889429448&4294967295,f=g+(u<<20&4294967295|u>>>12),u=l+(g^_&(f^g))+p[9]+568446438&4294967295,l=f+(u<<5&4294967295|u>>>27),u=_+(f^g&(l^f))+p[14]+3275163606&4294967295,_=l+(u<<9&4294967295|u>>>23),u=g+(l^f&(_^l))+p[3]+4107603335&4294967295,g=_+(u<<14&4294967295|u>>>18),u=f+(_^l&(g^_))+p[8]+1163531501&4294967295,f=g+(u<<20&4294967295|u>>>12),u=l+(g^_&(f^g))+p[13]+2850285829&4294967295,l=f+(u<<5&4294967295|u>>>27),u=_+(f^g&(l^f))+p[2]+4243563512&4294967295,_=l+(u<<9&4294967295|u>>>23),u=g+(l^f&(_^l))+p[7]+1735328473&4294967295,g=_+(u<<14&4294967295|u>>>18),u=f+(_^l&(g^_))+p[12]+2368359562&4294967295,f=g+(u<<20&4294967295|u>>>12),u=l+(f^g^_)+p[5]+4294588738&4294967295,l=f+(u<<4&4294967295|u>>>28),u=_+(l^f^g)+p[8]+2272392833&4294967295,_=l+(u<<11&4294967295|u>>>21),u=g+(_^l^f)+p[11]+1839030562&4294967295,g=_+(u<<16&4294967295|u>>>16),u=f+(g^_^l)+p[14]+4259657740&4294967295,f=g+(u<<23&4294967295|u>>>9),u=l+(f^g^_)+p[1]+2763975236&4294967295,l=f+(u<<4&4294967295|u>>>28),u=_+(l^f^g)+p[4]+1272893353&4294967295,_=l+(u<<11&4294967295|u>>>21),u=g+(_^l^f)+p[7]+4139469664&4294967295,g=_+(u<<16&4294967295|u>>>16),u=f+(g^_^l)+p[10]+3200236656&4294967295,f=g+(u<<23&4294967295|u>>>9),u=l+(f^g^_)+p[13]+681279174&4294967295,l=f+(u<<4&4294967295|u>>>28),u=_+(l^f^g)+p[0]+3936430074&4294967295,_=l+(u<<11&4294967295|u>>>21),u=g+(_^l^f)+p[3]+3572445317&4294967295,g=_+(u<<16&4294967295|u>>>16),u=f+(g^_^l)+p[6]+76029189&4294967295,f=g+(u<<23&4294967295|u>>>9),u=l+(f^g^_)+p[9]+3654602809&4294967295,l=f+(u<<4&4294967295|u>>>28),u=_+(l^f^g)+p[12]+3873151461&4294967295,_=l+(u<<11&4294967295|u>>>21),u=g+(_^l^f)+p[15]+530742520&4294967295,g=_+(u<<16&4294967295|u>>>16),u=f+(g^_^l)+p[2]+3299628645&4294967295,f=g+(u<<23&4294967295|u>>>9),u=l+(g^(f|~_))+p[0]+4096336452&4294967295,l=f+(u<<6&4294967295|u>>>26),u=_+(f^(l|~g))+p[7]+1126891415&4294967295,_=l+(u<<10&4294967295|u>>>22),u=g+(l^(_|~f))+p[14]+2878612391&4294967295,g=_+(u<<15&4294967295|u>>>17),u=f+(_^(g|~l))+p[5]+4237533241&4294967295,f=g+(u<<21&4294967295|u>>>11),u=l+(g^(f|~_))+p[12]+1700485571&4294967295,l=f+(u<<6&4294967295|u>>>26),u=_+(f^(l|~g))+p[3]+2399980690&4294967295,_=l+(u<<10&4294967295|u>>>22),u=g+(l^(_|~f))+p[10]+4293915773&4294967295,g=_+(u<<15&4294967295|u>>>17),u=f+(_^(g|~l))+p[1]+2240044497&4294967295,f=g+(u<<21&4294967295|u>>>11),u=l+(g^(f|~_))+p[8]+1873313359&4294967295,l=f+(u<<6&4294967295|u>>>26),u=_+(f^(l|~g))+p[15]+4264355552&4294967295,_=l+(u<<10&4294967295|u>>>22),u=g+(l^(_|~f))+p[6]+2734768916&4294967295,g=_+(u<<15&4294967295|u>>>17),u=f+(_^(g|~l))+p[13]+1309151649&4294967295,f=g+(u<<21&4294967295|u>>>11),u=l+(g^(f|~_))+p[4]+4149444226&4294967295,l=f+(u<<6&4294967295|u>>>26),u=_+(f^(l|~g))+p[11]+3174756917&4294967295,_=l+(u<<10&4294967295|u>>>22),u=g+(l^(_|~f))+p[2]+718787259&4294967295,g=_+(u<<15&4294967295|u>>>17),u=f+(_^(g|~l))+p[9]+3951481745&4294967295,m.g[0]=m.g[0]+l&4294967295,m.g[1]=m.g[1]+(g+(u<<21&4294967295|u>>>11))&4294967295,m.g[2]=m.g[2]+g&4294967295,m.g[3]=m.g[3]+_&4294967295}o.prototype.u=function(m,l){l===void 0&&(l=m.length);for(var f=l-this.blockSize,p=this.B,g=this.h,_=0;_<l;){if(g==0)for(;_<=f;)h(this,m,_),_+=this.blockSize;if(typeof m=="string"){for(;_<l;)if(p[g++]=m.charCodeAt(_++),g==this.blockSize){h(this,p),g=0;break}}else for(;_<l;)if(p[g++]=m[_++],g==this.blockSize){h(this,p),g=0;break}}this.h=g,this.o+=l},o.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var l=1;l<m.length-8;++l)m[l]=0;var f=8*this.o;for(l=m.length-8;l<m.length;++l)m[l]=f&255,f/=256;for(this.u(m),m=Array(16),l=f=0;4>l;++l)for(var p=0;32>p;p+=8)m[f++]=this.g[l]>>>p&255;return m};function c(m,l){var f=v;return Object.prototype.hasOwnProperty.call(f,m)?f[m]:f[m]=l(m)}function d(m,l){this.h=l;for(var f=[],p=!0,g=m.length-1;0<=g;g--){var _=m[g]|0;p&&_==l||(f[g]=_,p=!1)}this.g=f}var v={};function I(m){return-128<=m&&128>m?c(m,function(l){return new d([l|0],0>l?-1:0)}):new d([m|0],0>m?-1:0)}function T(m){if(isNaN(m)||!isFinite(m))return k;if(0>m)return R(T(-m));for(var l=[],f=1,p=0;m>=f;p++)l[p]=m/f|0,f*=4294967296;return new d(l,0)}function C(m,l){if(m.length==0)throw Error("number format error: empty string");if(l=l||10,2>l||36<l)throw Error("radix out of range: "+l);if(m.charAt(0)=="-")return R(C(m.substring(1),l));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=T(Math.pow(l,8)),p=k,g=0;g<m.length;g+=8){var _=Math.min(8,m.length-g),u=parseInt(m.substring(g,g+_),l);8>_?(_=T(Math.pow(l,_)),p=p.j(_).add(T(u))):(p=p.j(f),p=p.add(T(u)))}return p}var k=I(0),A=I(1),O=I(16777216);n=d.prototype,n.m=function(){if(M(this))return-R(this).m();for(var m=0,l=1,f=0;f<this.g.length;f++){var p=this.i(f);m+=(0<=p?p:4294967296+p)*l,l*=4294967296}return m},n.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(b(this))return"0";if(M(this))return"-"+R(this).toString(m);for(var l=T(Math.pow(m,6)),f=this,p="";;){var g=F(f,l).g;f=et(f,g.j(l));var _=((0<f.g.length?f.g[0]:f.h)>>>0).toString(m);if(f=g,b(f))return _+p;for(;6>_.length;)_="0"+_;p=_+p}},n.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function b(m){if(m.h!=0)return!1;for(var l=0;l<m.g.length;l++)if(m.g[l]!=0)return!1;return!0}function M(m){return m.h==-1}n.l=function(m){return m=et(this,m),M(m)?-1:b(m)?0:1};function R(m){for(var l=m.g.length,f=[],p=0;p<l;p++)f[p]=~m.g[p];return new d(f,~m.h).add(A)}n.abs=function(){return M(this)?R(this):this},n.add=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0,g=0;g<=l;g++){var _=p+(this.i(g)&65535)+(m.i(g)&65535),u=(_>>>16)+(this.i(g)>>>16)+(m.i(g)>>>16);p=u>>>16,_&=65535,u&=65535,f[g]=u<<16|_}return new d(f,f[f.length-1]&-2147483648?-1:0)};function et(m,l){return m.add(R(l))}n.j=function(m){if(b(this)||b(m))return k;if(M(this))return M(m)?R(this).j(R(m)):R(R(this).j(m));if(M(m))return R(this.j(R(m)));if(0>this.l(O)&&0>m.l(O))return T(this.m()*m.m());for(var l=this.g.length+m.g.length,f=[],p=0;p<2*l;p++)f[p]=0;for(p=0;p<this.g.length;p++)for(var g=0;g<m.g.length;g++){var _=this.i(p)>>>16,u=this.i(p)&65535,lt=m.i(g)>>>16,Mt=m.i(g)&65535;f[2*p+2*g]+=u*Mt,Z(f,2*p+2*g),f[2*p+2*g+1]+=_*Mt,Z(f,2*p+2*g+1),f[2*p+2*g+1]+=u*lt,Z(f,2*p+2*g+1),f[2*p+2*g+2]+=_*lt,Z(f,2*p+2*g+2)}for(p=0;p<l;p++)f[p]=f[2*p+1]<<16|f[2*p];for(p=l;p<2*l;p++)f[p]=0;return new d(f,0)};function Z(m,l){for(;(m[l]&65535)!=m[l];)m[l+1]+=m[l]>>>16,m[l]&=65535,l++}function j(m,l){this.g=m,this.h=l}function F(m,l){if(b(l))throw Error("division by zero");if(b(m))return new j(k,k);if(M(m))return l=F(R(m),l),new j(R(l.g),R(l.h));if(M(l))return l=F(m,R(l)),new j(R(l.g),l.h);if(30<m.g.length){if(M(m)||M(l))throw Error("slowDivide_ only works with positive integers.");for(var f=A,p=l;0>=p.l(m);)f=ht(f),p=ht(p);var g=q(f,1),_=q(p,1);for(p=q(p,2),f=q(f,2);!b(p);){var u=_.add(p);0>=u.l(m)&&(g=g.add(f),_=u),p=q(p,1),f=q(f,1)}return l=et(m,g.j(l)),new j(g,l)}for(g=k;0<=m.l(l);){for(f=Math.max(1,Math.floor(m.m()/l.m())),p=Math.ceil(Math.log(f)/Math.LN2),p=48>=p?1:Math.pow(2,p-48),_=T(f),u=_.j(l);M(u)||0<u.l(m);)f-=p,_=T(f),u=_.j(l);b(_)&&(_=A),g=g.add(_),m=et(m,u)}return new j(g,m)}n.A=function(m){return F(this,m).h},n.and=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)&m.i(p);return new d(f,this.h&m.h)},n.or=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)|m.i(p);return new d(f,this.h|m.h)},n.xor=function(m){for(var l=Math.max(this.g.length,m.g.length),f=[],p=0;p<l;p++)f[p]=this.i(p)^m.i(p);return new d(f,this.h^m.h)};function ht(m){for(var l=m.g.length+1,f=[],p=0;p<l;p++)f[p]=m.i(p)<<1|m.i(p-1)>>>31;return new d(f,m.h)}function q(m,l){var f=l>>5;l%=32;for(var p=m.g.length-f,g=[],_=0;_<p;_++)g[_]=0<l?m.i(_+f)>>>l|m.i(_+f+1)<<32-l:m.i(_+f);return new d(g,m.h)}o.prototype.digest=o.prototype.v,o.prototype.reset=o.prototype.s,o.prototype.update=o.prototype.u,d.prototype.add=d.prototype.add,d.prototype.multiply=d.prototype.j,d.prototype.modulo=d.prototype.A,d.prototype.compare=d.prototype.l,d.prototype.toNumber=d.prototype.m,d.prototype.toString=d.prototype.toString,d.prototype.getBits=d.prototype.i,d.fromNumber=T,d.fromString=C,Cs=d}).apply(typeof qi<"u"?qi:typeof self<"u"?self:typeof window<"u"?window:{});var _e=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(t,i,r){return t==Array.prototype||t==Object.prototype||(t[i]=r.value),t};function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof _e=="object"&&_e];for(var i=0;i<t.length;++i){var r=t[i];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var o=s(this);function h(t,i){if(i)t:{var r=o;t=t.split(".");for(var a=0;a<t.length-1;a++){var y=t[a];if(!(y in r))break t;r=r[y]}t=t[t.length-1],a=r[t],i=i(a),i!=a&&i!=null&&e(r,t,{configurable:!0,writable:!0,value:i})}}function c(t,i){t instanceof String&&(t+="");var r=0,a=!1,y={next:function(){if(!a&&r<t.length){var w=r++;return{value:i(w,t[w]),done:!1}}return a=!0,{done:!0,value:void 0}}};return y[Symbol.iterator]=function(){return y},y}h("Array.prototype.values",function(t){return t||function(){return c(this,function(i,r){return r})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var d=d||{},v=this||self;function I(t){var i=typeof t;return i=i!="object"?i:t?Array.isArray(t)?"array":i:"null",i=="array"||i=="object"&&typeof t.length=="number"}function T(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function C(t,i,r){return t.call.apply(t.bind,arguments)}function k(t,i,r){if(!t)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var y=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(y,a),t.apply(i,y)}}return function(){return t.apply(i,arguments)}}function A(t,i,r){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?C:k,A.apply(null,arguments)}function O(t,i){var r=Array.prototype.slice.call(arguments,1);return function(){var a=r.slice();return a.push.apply(a,arguments),t.apply(this,a)}}function b(t,i){function r(){}r.prototype=i.prototype,t.aa=i.prototype,t.prototype=new r,t.prototype.constructor=t,t.Qb=function(a,y,w){for(var E=Array(arguments.length-2),N=2;N<arguments.length;N++)E[N-2]=arguments[N];return i.prototype[y].apply(a,E)}}function M(t){const i=t.length;if(0<i){const r=Array(i);for(let a=0;a<i;a++)r[a]=t[a];return r}return[]}function R(t,i){for(let r=1;r<arguments.length;r++){const a=arguments[r];if(I(a)){const y=t.length||0,w=a.length||0;t.length=y+w;for(let E=0;E<w;E++)t[y+E]=a[E]}else t.push(a)}}class et{constructor(i,r){this.i=i,this.j=r,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function Z(t){return/^[\s\xa0]*$/.test(t)}function j(){var t=v.navigator;return t&&(t=t.userAgent)?t:""}function F(t){return F[" "](t),t}F[" "]=function(){};var ht=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function q(t,i,r){for(const a in t)i.call(r,t[a],a,t)}function m(t,i){for(const r in t)i.call(void 0,t[r],r,t)}function l(t){const i={};for(const r in t)i[r]=t[r];return i}const f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function p(t,i){let r,a;for(let y=1;y<arguments.length;y++){a=arguments[y];for(r in a)t[r]=a[r];for(let w=0;w<f.length;w++)r=f[w],Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}}function g(t){var i=1;t=t.split(":");const r=[];for(;0<i&&t.length;)r.push(t.shift()),i--;return t.length&&r.push(t.join(":")),r}function _(t){v.setTimeout(()=>{throw t},0)}function u(){var t=Oe;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class lt{constructor(){this.h=this.g=null}add(i,r){const a=Mt.get();a.set(i,r),this.h?this.h.next=a:this.g=a,this.h=a}}var Mt=new et(()=>new rr,t=>t.reset());class rr{constructor(){this.next=this.g=this.h=null}set(i,r){this.h=i,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let xt,Ft=!1,Oe=new lt,jn=()=>{const t=v.Promise.resolve(void 0);xt=()=>{t.then(or)}};var or=()=>{for(var t;t=u();){try{t.h.call(t.g)}catch(r){_(r)}var i=Mt;i.j(t),100>i.h&&(i.h++,t.next=i.g,i.g=t)}Ft=!1};function gt(){this.s=this.s,this.C=this.C}gt.prototype.s=!1,gt.prototype.ma=function(){this.s||(this.s=!0,this.N())},gt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function U(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}U.prototype.h=function(){this.defaultPrevented=!0};var ar=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};v.addEventListener("test",r,i),v.removeEventListener("test",r,i)}catch{}return t}();function jt(t,i){if(U.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var r=this.type=t.type,a=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget){if(ht){t:{try{F(i.nodeName);var y=!0;break t}catch{}y=!1}y||(i=null)}}else r=="mouseover"?i=t.fromElement:r=="mouseout"&&(i=t.toElement);this.relatedTarget=i,a?(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&jt.aa.h.call(this)}}b(jt,U);var hr={2:"touch",3:"pen",4:"mouse"};jt.prototype.h=function(){jt.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ie="closure_listenable_"+(1e6*Math.random()|0),lr=0;function cr(t,i,r,a,y){this.listener=t,this.proxy=null,this.src=i,this.type=r,this.capture=!!a,this.ha=y,this.key=++lr,this.da=this.fa=!1}function se(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function re(t){this.src=t,this.g={},this.h=0}re.prototype.add=function(t,i,r,a,y){var w=t.toString();t=this.g[w],t||(t=this.g[w]=[],this.h++);var E=Le(t,i,a,y);return-1<E?(i=t[E],r||(i.fa=!1)):(i=new cr(i,this.src,w,!!a,y),i.fa=r,t.push(i)),i};function Ne(t,i){var r=i.type;if(r in t.g){var a=t.g[r],y=Array.prototype.indexOf.call(a,i,void 0),w;(w=0<=y)&&Array.prototype.splice.call(a,y,1),w&&(se(i),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Le(t,i,r,a){for(var y=0;y<t.length;++y){var w=t[y];if(!w.da&&w.listener==i&&w.capture==!!r&&w.ha==a)return y}return-1}var Me="closure_lm_"+(1e6*Math.random()|0),xe={};function Bn(t,i,r,a,y){if(Array.isArray(i)){for(var w=0;w<i.length;w++)Bn(t,i[w],r,a,y);return null}return r=Vn(r),t&&t[ie]?t.K(i,r,T(a)?!!a.capture:!1,y):ur(t,i,r,!1,a,y)}function ur(t,i,r,a,y,w){if(!i)throw Error("Invalid event type");var E=T(y)?!!y.capture:!!y,N=je(t);if(N||(t[Me]=N=new re(t)),r=N.add(i,r,a,E,w),r.proxy)return r;if(a=fr(),r.proxy=a,a.src=t,a.listener=r,t.addEventListener)ar||(y=E),y===void 0&&(y=!1),t.addEventListener(i.toString(),a,y);else if(t.attachEvent)t.attachEvent($n(i.toString()),a);else if(t.addListener&&t.removeListener)t.addListener(a);else throw Error("addEventListener and attachEvent are unavailable.");return r}function fr(){function t(r){return i.call(t.src,t.listener,r)}const i=dr;return t}function Un(t,i,r,a,y){if(Array.isArray(i))for(var w=0;w<i.length;w++)Un(t,i[w],r,a,y);else a=T(a)?!!a.capture:!!a,r=Vn(r),t&&t[ie]?(t=t.i,i=String(i).toString(),i in t.g&&(w=t.g[i],r=Le(w,r,a,y),-1<r&&(se(w[r]),Array.prototype.splice.call(w,r,1),w.length==0&&(delete t.g[i],t.h--)))):t&&(t=je(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Le(i,r,a,y)),(r=-1<t?i[t]:null)&&Fe(r))}function Fe(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[ie])Ne(i.i,t);else{var r=t.type,a=t.proxy;i.removeEventListener?i.removeEventListener(r,a,t.capture):i.detachEvent?i.detachEvent($n(r),a):i.addListener&&i.removeListener&&i.removeListener(a),(r=je(i))?(Ne(r,t),r.h==0&&(r.src=null,i[Me]=null)):se(t)}}}function $n(t){return t in xe?xe[t]:xe[t]="on"+t}function dr(t,i){if(t.da)t=!0;else{i=new jt(i,this);var r=t.listener,a=t.ha||t.src;t.fa&&Fe(t),t=r.call(a,i)}return t}function je(t){return t=t[Me],t instanceof re?t:null}var Be="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vn(t){return typeof t=="function"?t:(t[Be]||(t[Be]=function(i){return t.handleEvent(i)}),t[Be])}function $(){gt.call(this),this.i=new re(this),this.M=this,this.F=null}b($,gt),$.prototype[ie]=!0,$.prototype.removeEventListener=function(t,i,r,a){Un(this,t,i,r,a)};function z(t,i){var r,a=t.F;if(a)for(r=[];a;a=a.F)r.push(a);if(t=t.M,a=i.type||i,typeof i=="string")i=new U(i,t);else if(i instanceof U)i.target=i.target||t;else{var y=i;i=new U(a,t),p(i,y)}if(y=!0,r)for(var w=r.length-1;0<=w;w--){var E=i.g=r[w];y=oe(E,a,!0,i)&&y}if(E=i.g=t,y=oe(E,a,!0,i)&&y,y=oe(E,a,!1,i)&&y,r)for(w=0;w<r.length;w++)E=i.g=r[w],y=oe(E,a,!1,i)&&y}$.prototype.N=function(){if($.aa.N.call(this),this.i){var t=this.i,i;for(i in t.g){for(var r=t.g[i],a=0;a<r.length;a++)se(r[a]);delete t.g[i],t.h--}}this.F=null},$.prototype.K=function(t,i,r,a){return this.i.add(String(t),i,!1,r,a)},$.prototype.L=function(t,i,r,a){return this.i.add(String(t),i,!0,r,a)};function oe(t,i,r,a){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();for(var y=!0,w=0;w<i.length;++w){var E=i[w];if(E&&!E.da&&E.capture==r){var N=E.listener,B=E.ha||E.src;E.fa&&Ne(t.i,E),y=N.call(B,a)!==!1&&y}}return y&&!a.defaultPrevented}function Hn(t,i,r){if(typeof t=="function")r&&(t=A(t,r));else if(t&&typeof t.handleEvent=="function")t=A(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(i)?-1:v.setTimeout(t,i||0)}function zn(t){t.g=Hn(()=>{t.g=null,t.i&&(t.i=!1,zn(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class pr extends gt{constructor(i,r){super(),this.m=i,this.l=r,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:zn(this)}N(){super.N(),this.g&&(v.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Bt(t){gt.call(this),this.h=t,this.g={}}b(Bt,gt);var Gn=[];function Kn(t){q(t.g,function(i,r){this.g.hasOwnProperty(r)&&Fe(i)},t),t.g={}}Bt.prototype.N=function(){Bt.aa.N.call(this),Kn(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ue=v.JSON.stringify,gr=v.JSON.parse,mr=class{stringify(t){return v.JSON.stringify(t,void 0)}parse(t){return v.JSON.parse(t,void 0)}};function $e(){}$e.prototype.h=null;function qn(t){return t.h||(t.h=t.i())}function yr(){}var Ut={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ve(){U.call(this,"d")}b(Ve,U);function He(){U.call(this,"c")}b(He,U);var Dt={},Wn=null;function ze(){return Wn=Wn||new $}Dt.La="serverreachability";function Xn(t){U.call(this,Dt.La,t)}b(Xn,U);function $t(t){const i=ze();z(i,new Xn(i))}Dt.STAT_EVENT="statevent";function Yn(t,i){U.call(this,Dt.STAT_EVENT,t),this.stat=i}b(Yn,U);function G(t){const i=ze();z(i,new Yn(i,t))}Dt.Ma="timingevent";function Jn(t,i){U.call(this,Dt.Ma,t),this.size=i}b(Jn,U);function Vt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return v.setTimeout(function(){t()},i)}function Ht(){this.g=!0}Ht.prototype.xa=function(){this.g=!1};function vr(t,i,r,a,y,w){t.info(function(){if(t.g)if(w)for(var E="",N=w.split("&"),B=0;B<N.length;B++){var D=N[B].split("=");if(1<D.length){var V=D[0];D=D[1];var H=V.split("_");E=2<=H.length&&H[1]=="type"?E+(V+"="+D+"&"):E+(V+"=redacted&")}}else E=null;else E=w;return"XMLHTTP REQ ("+a+") [attempt "+y+"]: "+i+`
`+r+`
`+E})}function _r(t,i,r,a,y,w,E){t.info(function(){return"XMLHTTP RESP ("+a+") [ attempt "+y+"]: "+i+`
`+r+`
`+w+" "+E})}function Ct(t,i,r,a){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+Ir(t,r)+(a?" "+a:"")})}function wr(t,i){t.info(function(){return"TIMEOUT: "+i})}Ht.prototype.info=function(){};function Ir(t,i){if(!t.g)return i;if(!i)return null;try{var r=JSON.parse(i);if(r){for(t=0;t<r.length;t++)if(Array.isArray(r[t])){var a=r[t];if(!(2>a.length)){var y=a[1];if(Array.isArray(y)&&!(1>y.length)){var w=y[0];if(w!="noop"&&w!="stop"&&w!="close")for(var E=1;E<y.length;E++)y[E]=""}}}}return Ue(r)}catch{return i}}var Ge={NO_ERROR:0,TIMEOUT:8},Tr={},Ke;function ae(){}b(ae,$e),ae.prototype.g=function(){return new XMLHttpRequest},ae.prototype.i=function(){return{}},Ke=new ae;function mt(t,i,r,a){this.j=t,this.i=i,this.l=r,this.R=a||1,this.U=new Bt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Zn}function Zn(){this.i=null,this.g="",this.h=!1}var Qn={},qe={};function We(t,i,r){t.L=1,t.v=ue(ct(i)),t.m=r,t.P=!0,ti(t,null)}function ti(t,i){t.F=Date.now(),he(t),t.A=ct(t.v);var r=t.A,a=t.R;Array.isArray(a)||(a=[String(a)]),pi(r.i,"t",a),t.C=0,r=t.j.J,t.h=new Zn,t.g=Oi(t.j,r?i:null,!t.m),0<t.O&&(t.M=new pr(A(t.Y,t,t.g),t.O)),i=t.U,r=t.g,a=t.ca;var y="readystatechange";Array.isArray(y)||(y&&(Gn[0]=y.toString()),y=Gn);for(var w=0;w<y.length;w++){var E=Bn(r,y[w],a||i.handleEvent,!1,i.h||i);if(!E)break;i.g[E.key]=E}i=t.H?l(t.H):{},t.m?(t.u||(t.u="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,i)):(t.u="GET",t.g.ea(t.A,t.u,null,i)),$t(),vr(t.i,t.u,t.A,t.l,t.R,t.m)}mt.prototype.ca=function(t){t=t.target;const i=this.M;i&&ut(t)==3?i.j():this.Y(t)},mt.prototype.Y=function(t){try{if(t==this.g)t:{const H=ut(this.g);var i=this.g.Ba();const Ot=this.g.Z();if(!(3>H)&&(H!=3||this.g&&(this.h.h||this.g.oa()||Ii(this.g)))){this.J||H!=4||i==7||(i==8||0>=Ot?$t(3):$t(2)),Xe(this);var r=this.g.Z();this.X=r;e:if(ei(this)){var a=Ii(this.g);t="";var y=a.length,w=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){It(this),zt(this);var E="";break e}this.h.i=new v.TextDecoder}for(i=0;i<y;i++)this.h.h=!0,t+=this.h.i.decode(a[i],{stream:!(w&&i==y-1)});a.length=0,this.h.g+=t,this.C=0,E=this.h.g}else E=this.g.oa();if(this.o=r==200,_r(this.i,this.u,this.A,this.l,this.R,H,r),this.o){if(this.T&&!this.K){e:{if(this.g){var N,B=this.g;if((N=B.g?B.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(N)){var D=N;break e}}D=null}if(r=D)Ct(this.i,this.l,r,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ye(this,r);else{this.o=!1,this.s=3,G(12),It(this),zt(this);break t}}if(this.P){r=!0;let nt;for(;!this.J&&this.C<E.length;)if(nt=Er(this,E),nt==qe){H==4&&(this.s=4,G(14),r=!1),Ct(this.i,this.l,null,"[Incomplete Response]");break}else if(nt==Qn){this.s=4,G(15),Ct(this.i,this.l,E,"[Invalid Chunk]"),r=!1;break}else Ct(this.i,this.l,nt,null),Ye(this,nt);if(ei(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),H!=4||E.length!=0||this.h.h||(this.s=1,G(16),r=!1),this.o=this.o&&r,!r)Ct(this.i,this.l,E,"[Invalid Chunked Response]"),It(this),zt(this);else if(0<E.length&&!this.W){this.W=!0;var V=this.j;V.g==this&&V.ba&&!V.M&&(V.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),nn(V),V.M=!0,G(11))}}else Ct(this.i,this.l,E,null),Ye(this,E);H==4&&It(this),this.o&&!this.J&&(H==4?Di(this.j,this):(this.o=!1,he(this)))}else Ur(this.g),r==400&&0<E.indexOf("Unknown SID")?(this.s=3,G(12)):(this.s=0,G(13)),It(this),zt(this)}}}catch{}finally{}};function ei(t){return t.g?t.u=="GET"&&t.L!=2&&t.j.Ca:!1}function Er(t,i){var r=t.C,a=i.indexOf(`
`,r);return a==-1?qe:(r=Number(i.substring(r,a)),isNaN(r)?Qn:(a+=1,a+r>i.length?qe:(i=i.slice(a,a+r),t.C=a+r,i)))}mt.prototype.cancel=function(){this.J=!0,It(this)};function he(t){t.S=Date.now()+t.I,ni(t,t.I)}function ni(t,i){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Vt(A(t.ba,t),i)}function Xe(t){t.B&&(v.clearTimeout(t.B),t.B=null)}mt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(wr(this.i,this.A),this.L!=2&&($t(),G(17)),It(this),this.s=2,zt(this)):ni(this,this.S-t)};function zt(t){t.j.G==0||t.J||Di(t.j,t)}function It(t){Xe(t);var i=t.M;i&&typeof i.ma=="function"&&i.ma(),t.M=null,Kn(t.U),t.g&&(i=t.g,t.g=null,i.abort(),i.ma())}function Ye(t,i){try{var r=t.j;if(r.G!=0&&(r.g==t||Je(r.h,t))){if(!t.K&&Je(r.h,t)&&r.G==3){try{var a=r.Da.g.parse(i)}catch{a=null}if(Array.isArray(a)&&a.length==3){var y=a;if(y[0]==0){t:if(!r.u){if(r.g)if(r.g.F+3e3<t.F)ye(r),ge(r);else break t;en(r),G(18)}}else r.za=y[1],0<r.za-r.T&&37500>y[2]&&r.F&&r.v==0&&!r.C&&(r.C=Vt(A(r.Za,r),6e3));if(1>=ri(r.h)&&r.ca){try{r.ca()}catch{}r.ca=void 0}}else Et(r,11)}else if((t.K||r.g==t)&&ye(r),!Z(i))for(y=r.Da.g.parse(i),i=0;i<y.length;i++){let D=y[i];if(r.T=D[0],D=D[1],r.G==2)if(D[0]=="c"){r.K=D[1],r.ia=D[2];const V=D[3];V!=null&&(r.la=V,r.j.info("VER="+r.la));const H=D[4];H!=null&&(r.Aa=H,r.j.info("SVER="+r.Aa));const Ot=D[5];Ot!=null&&typeof Ot=="number"&&0<Ot&&(a=1.5*Ot,r.L=a,r.j.info("backChannelRequestTimeoutMs_="+a)),a=r;const nt=t.g;if(nt){const ve=nt.g?nt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ve){var w=a.h;w.g||ve.indexOf("spdy")==-1&&ve.indexOf("quic")==-1&&ve.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Ze(w,w.h),w.h=null))}if(a.D){const sn=nt.g?nt.g.getResponseHeader("X-HTTP-Session-Id"):null;sn&&(a.ya=sn,L(a.I,a.D,sn))}}r.G=3,r.l&&r.l.ua(),r.ba&&(r.R=Date.now()-t.F,r.j.info("Handshake RTT: "+r.R+"ms")),a=r;var E=t;if(a.qa=Pi(a,a.J?a.ia:null,a.W),E.K){oi(a.h,E);var N=E,B=a.L;B&&(N.I=B),N.B&&(Xe(N),he(N)),a.g=E}else Si(a);0<r.i.length&&me(r)}else D[0]!="stop"&&D[0]!="close"||Et(r,7);else r.G==3&&(D[0]=="stop"||D[0]=="close"?D[0]=="stop"?Et(r,7):tn(r):D[0]!="noop"&&r.l&&r.l.ta(D),r.v=0)}}$t(4)}catch{}}var Ar=class{constructor(t,i){this.g=t,this.map=i}};function ii(t){this.l=t||10,v.PerformanceNavigationTiming?(t=v.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(v.chrome&&v.chrome.loadTimes&&v.chrome.loadTimes()&&v.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function si(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ri(t){return t.h?1:t.g?t.g.size:0}function Je(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function Ze(t,i){t.g?t.g.add(i):t.h=i}function oi(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}ii.prototype.cancel=function(){if(this.i=ai(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ai(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const r of t.g.values())i=i.concat(r.D);return i}return M(t.i)}function br(t){if(t.V&&typeof t.V=="function")return t.V();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(I(t)){for(var i=[],r=t.length,a=0;a<r;a++)i.push(t[a]);return i}i=[],r=0;for(a in t)i[r++]=t[a];return i}function Sr(t){if(t.na&&typeof t.na=="function")return t.na();if(!t.V||typeof t.V!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(I(t)||typeof t=="string"){var i=[];t=t.length;for(var r=0;r<t;r++)i.push(r);return i}i=[],r=0;for(const a in t)i[r++]=a;return i}}}function hi(t,i){if(t.forEach&&typeof t.forEach=="function")t.forEach(i,void 0);else if(I(t)||typeof t=="string")Array.prototype.forEach.call(t,i,void 0);else for(var r=Sr(t),a=br(t),y=a.length,w=0;w<y;w++)i.call(void 0,a[w],r&&r[w],t)}var li=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Rr(t,i){if(t){t=t.split("&");for(var r=0;r<t.length;r++){var a=t[r].indexOf("="),y=null;if(0<=a){var w=t[r].substring(0,a);y=t[r].substring(a+1)}else w=t[r];i(w,y?decodeURIComponent(y.replace(/\+/g," ")):"")}}}function Tt(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof Tt){this.h=t.h,le(this,t.j),this.o=t.o,this.g=t.g,ce(this,t.s),this.l=t.l;var i=t.i,r=new qt;r.i=i.i,i.g&&(r.g=new Map(i.g),r.h=i.h),ci(this,r),this.m=t.m}else t&&(i=String(t).match(li))?(this.h=!1,le(this,i[1]||"",!0),this.o=Gt(i[2]||""),this.g=Gt(i[3]||"",!0),ce(this,i[4]),this.l=Gt(i[5]||"",!0),ci(this,i[6]||"",!0),this.m=Gt(i[7]||"")):(this.h=!1,this.i=new qt(null,this.h))}Tt.prototype.toString=function(){var t=[],i=this.j;i&&t.push(Kt(i,ui,!0),":");var r=this.g;return(r||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Kt(i,ui,!0),"@"),t.push(encodeURIComponent(String(r)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.s,r!=null&&t.push(":",String(r))),(r=this.l)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Kt(r,r.charAt(0)=="/"?kr:Cr,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Kt(r,Or)),t.join("")};function ct(t){return new Tt(t)}function le(t,i,r){t.j=r?Gt(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function ce(t,i){if(i){if(i=Number(i),isNaN(i)||0>i)throw Error("Bad port number "+i);t.s=i}else t.s=null}function ci(t,i,r){i instanceof qt?(t.i=i,Nr(t.i,t.h)):(r||(i=Kt(i,Pr)),t.i=new qt(i,t.h))}function L(t,i,r){t.i.set(i,r)}function ue(t){return L(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gt(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kt(t,i,r){return typeof t=="string"?(t=encodeURI(t).replace(i,Dr),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Dr(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ui=/[#\/\?@]/g,Cr=/[#\?:]/g,kr=/[#\?]/g,Pr=/[#\?@]/g,Or=/#/g;function qt(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function yt(t){t.g||(t.g=new Map,t.h=0,t.i&&Rr(t.i,function(i,r){t.add(decodeURIComponent(i.replace(/\+/g," ")),r)}))}n=qt.prototype,n.add=function(t,i){yt(this),this.i=null,t=kt(this,t);var r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(i),this.h+=1,this};function fi(t,i){yt(t),i=kt(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function di(t,i){return yt(t),i=kt(t,i),t.g.has(i)}n.forEach=function(t,i){yt(this),this.g.forEach(function(r,a){r.forEach(function(y){t.call(i,y,a,this)},this)},this)},n.na=function(){yt(this);const t=Array.from(this.g.values()),i=Array.from(this.g.keys()),r=[];for(let a=0;a<i.length;a++){const y=t[a];for(let w=0;w<y.length;w++)r.push(i[a])}return r},n.V=function(t){yt(this);let i=[];if(typeof t=="string")di(this,t)&&(i=i.concat(this.g.get(kt(this,t))));else{t=Array.from(this.g.values());for(let r=0;r<t.length;r++)i=i.concat(t[r])}return i},n.set=function(t,i){return yt(this),this.i=null,t=kt(this,t),di(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},n.get=function(t,i){return t?(t=this.V(t),0<t.length?String(t[0]):i):i};function pi(t,i,r){fi(t,i),0<r.length&&(t.i=null,t.g.set(kt(t,i),M(r)),t.h+=r.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(var r=0;r<i.length;r++){var a=i[r];const w=encodeURIComponent(String(a)),E=this.V(a);for(a=0;a<E.length;a++){var y=w;E[a]!==""&&(y+="="+encodeURIComponent(String(E[a]))),t.push(y)}}return this.i=t.join("&")};function kt(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function Nr(t,i){i&&!t.j&&(yt(t),t.i=null,t.g.forEach(function(r,a){var y=a.toLowerCase();a!=y&&(fi(this,a),pi(this,y,r))},t)),t.j=i}function Lr(t,i){const r=new Ht;if(v.Image){const a=new Image;a.onload=O(vt,r,"TestLoadImage: loaded",!0,i,a),a.onerror=O(vt,r,"TestLoadImage: error",!1,i,a),a.onabort=O(vt,r,"TestLoadImage: abort",!1,i,a),a.ontimeout=O(vt,r,"TestLoadImage: timeout",!1,i,a),v.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=t}else i(!1)}function Mr(t,i){const r=new Ht,a=new AbortController,y=setTimeout(()=>{a.abort(),vt(r,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:a.signal}).then(w=>{clearTimeout(y),w.ok?vt(r,"TestPingServer: ok",!0,i):vt(r,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(y),vt(r,"TestPingServer: error",!1,i)})}function vt(t,i,r,a,y){try{y&&(y.onload=null,y.onerror=null,y.onabort=null,y.ontimeout=null),a(r)}catch{}}function xr(){this.g=new mr}function Fr(t,i,r){const a=r||"";try{hi(t,function(y,w){let E=y;T(y)&&(E=Ue(y)),i.push(a+w+"="+encodeURIComponent(E))})}catch(y){throw i.push(a+"type="+encodeURIComponent("_badmap")),y}}function fe(t){this.l=t.Ub||null,this.j=t.eb||!1}b(fe,$e),fe.prototype.g=function(){return new de(this.l,this.j)},fe.prototype.i=function(t){return function(){return t}}({});function de(t,i){$.call(this),this.D=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(de,$),n=de.prototype,n.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=i,this.readyState=1,Xt(this)},n.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const i={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(i.body=t),(this.D||v).fetch(new Request(this.A,i)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Wt(this)),this.readyState=0},n.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Xt(this)),this.g&&(this.readyState=3,Xt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof v.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gi(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))};function gi(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}n.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.v.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?Wt(this):Xt(this),this.readyState==3&&gi(this)}},n.Ra=function(t){this.g&&(this.response=this.responseText=t,Wt(this))},n.Qa=function(t){this.g&&(this.response=t,Wt(this))},n.ga=function(){this.g&&Wt(this)};function Wt(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Xt(t)}n.setRequestHeader=function(t,i){this.u.append(t,i)},n.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var r=i.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=i.next();return t.join(`\r
`)};function Xt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(de.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function mi(t){let i="";return q(t,function(r,a){i+=a,i+=":",i+=r,i+=`\r
`}),i}function Qe(t,i,r){t:{for(a in r){var a=!1;break t}a=!0}a||(r=mi(r),typeof t=="string"?r!=null&&encodeURIComponent(String(r)):L(t,i,r))}function x(t){$.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(x,$);var jr=/^https?$/i,Br=["POST","PUT"];n=x.prototype,n.Ha=function(t){this.J=t},n.ea=function(t,i,r,a){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ke.g(),this.v=this.o?qn(this.o):qn(Ke),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(w){yi(this,w);return}if(t=r||"",r=new Map(this.headers),a)if(Object.getPrototypeOf(a)===Object.prototype)for(var y in a)r.set(y,a[y]);else if(typeof a.keys=="function"&&typeof a.get=="function")for(const w of a.keys())r.set(w,a.get(w));else throw Error("Unknown input type for opt_headers: "+String(a));a=Array.from(r.keys()).find(w=>w.toLowerCase()=="content-type"),y=v.FormData&&t instanceof v.FormData,!(0<=Array.prototype.indexOf.call(Br,i,void 0))||a||y||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,E]of r)this.g.setRequestHeader(w,E);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wi(this),this.u=!0,this.g.send(t),this.u=!1}catch(w){yi(this,w)}};function yi(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.m=5,vi(t),pe(t)}function vi(t){t.A||(t.A=!0,z(t,"complete"),z(t,"error"))}n.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),pe(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pe(this,!0)),x.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?_i(this):this.bb())},n.bb=function(){_i(this)};function _i(t){if(t.h&&typeof d<"u"&&(!t.v[1]||ut(t)!=4||t.Z()!=2)){if(t.u&&ut(t)==4)Hn(t.Ea,0,t);else if(z(t,"readystatechange"),ut(t)==4){t.h=!1;try{const E=t.Z();t:switch(E){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var r;if(!(r=i)){var a;if(a=E===0){var y=String(t.D).match(li)[1]||null;!y&&v.self&&v.self.location&&(y=v.self.location.protocol.slice(0,-1)),a=!jr.test(y?y.toLowerCase():"")}r=a}if(r)z(t,"complete"),z(t,"success");else{t.m=6;try{var w=2<ut(t)?t.g.statusText:""}catch{w=""}t.l=w+" ["+t.Z()+"]",vi(t)}}finally{pe(t)}}}}function pe(t,i){if(t.g){wi(t);const r=t.g,a=t.v[0]?()=>{}:null;t.g=null,t.v=null,i||z(t,"ready");try{r.onreadystatechange=a}catch{}}}function wi(t){t.I&&(v.clearTimeout(t.I),t.I=null)}n.isActive=function(){return!!this.g};function ut(t){return t.g?t.g.readyState:0}n.Z=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),gr(i)}};function Ii(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Ur(t){const i={};t=(t.g&&2<=ut(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let a=0;a<t.length;a++){if(Z(t[a]))continue;var r=g(t[a]);const y=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const w=i[y]||[];i[y]=w,w.push(r)}m(i,function(a){return a.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yt(t,i,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||i}function Ti(t){this.Aa=0,this.i=[],this.j=new Ht,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yt("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yt("baseRetryDelayMs",5e3,t),this.cb=Yt("retryDelaySeedMs",1e4,t),this.Wa=Yt("forwardChannelMaxRetries",2,t),this.wa=Yt("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ii(t&&t.concurrentRequestLimit),this.Da=new xr,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ti.prototype,n.la=8,n.G=1,n.connect=function(t,i,r,a){G(0),this.W=t,this.H=i||{},r&&a!==void 0&&(this.H.OSID=r,this.H.OAID=a),this.F=this.X,this.I=Pi(this,null,this.W),me(this)};function tn(t){if(Ei(t),t.G==3){var i=t.U++,r=ct(t.I);if(L(r,"SID",t.K),L(r,"RID",i),L(r,"TYPE","terminate"),Jt(t,r),i=new mt(t,t.j,i),i.L=2,i.v=ue(ct(r)),r=!1,v.navigator&&v.navigator.sendBeacon)try{r=v.navigator.sendBeacon(i.v.toString(),"")}catch{}!r&&v.Image&&(new Image().src=i.v,r=!0),r||(i.g=Oi(i.j,null),i.g.ea(i.v)),i.F=Date.now(),he(i)}ki(t)}function ge(t){t.g&&(nn(t),t.g.cancel(),t.g=null)}function Ei(t){ge(t),t.u&&(v.clearTimeout(t.u),t.u=null),ye(t),t.h.cancel(),t.s&&(typeof t.s=="number"&&v.clearTimeout(t.s),t.s=null)}function me(t){if(!si(t.h)&&!t.s){t.s=!0;var i=t.Ga;xt||jn(),Ft||(xt(),Ft=!0),Oe.add(i,t),t.B=0}}function $r(t,i){return ri(t.h)>=t.h.j-(t.s?1:0)?!1:t.s?(t.i=i.D.concat(t.i),!0):t.G==1||t.G==2||t.B>=(t.Va?0:t.Wa)?!1:(t.s=Vt(A(t.Ga,t,i),Ci(t,t.B)),t.B++,!0)}n.Ga=function(t){if(this.s)if(this.s=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const y=new mt(this,this.j,t);let w=this.o;if(this.S&&(w?(w=l(w),p(w,this.S)):w=this.S),this.m!==null||this.O||(y.H=w,w=null),this.P)t:{for(var i=0,r=0;r<this.i.length;r++){e:{var a=this.i[r];if("__data__"in a.map&&(a=a.map.__data__,typeof a=="string")){a=a.length;break e}a=void 0}if(a===void 0)break;if(i+=a,4096<i){i=r;break t}if(i===4096||r===this.i.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=bi(this,y,i),r=ct(this.I),L(r,"RID",t),L(r,"CVER",22),this.D&&L(r,"X-HTTP-Session-Id",this.D),Jt(this,r),w&&(this.O?i="headers="+encodeURIComponent(String(mi(w)))+"&"+i:this.m&&Qe(r,this.m,w)),Ze(this.h,y),this.Ua&&L(r,"TYPE","init"),this.P?(L(r,"$req",i),L(r,"SID","null"),y.T=!0,We(y,r,null)):We(y,r,i),this.G=2}}else this.G==3&&(t?Ai(this,t):this.i.length==0||si(this.h)||Ai(this))};function Ai(t,i){var r;i?r=i.l:r=t.U++;const a=ct(t.I);L(a,"SID",t.K),L(a,"RID",r),L(a,"AID",t.T),Jt(t,a),t.m&&t.o&&Qe(a,t.m,t.o),r=new mt(t,t.j,r,t.B+1),t.m===null&&(r.H=t.o),i&&(t.i=i.D.concat(t.i)),i=bi(t,r,1e3),r.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),Ze(t.h,r),We(r,a,i)}function Jt(t,i){t.H&&q(t.H,function(r,a){L(i,a,r)}),t.l&&hi({},function(r,a){L(i,a,r)})}function bi(t,i,r){r=Math.min(t.i.length,r);var a=t.l?A(t.l.Na,t.l,t):null;t:{var y=t.i;let w=-1;for(;;){const E=["count="+r];w==-1?0<r?(w=y[0].g,E.push("ofs="+w)):w=0:E.push("ofs="+w);let N=!0;for(let B=0;B<r;B++){let D=y[B].g;const V=y[B].map;if(D-=w,0>D)w=Math.max(0,y[B].g-100),N=!1;else try{Fr(V,E,"req"+D+"_")}catch{a&&a(V)}}if(N){a=E.join("&");break t}}}return t=t.i.splice(0,r),i.D=t,a}function Si(t){if(!t.g&&!t.u){t.Y=1;var i=t.Fa;xt||jn(),Ft||(xt(),Ft=!0),Oe.add(i,t),t.v=0}}function en(t){return t.g||t.u||3<=t.v?!1:(t.Y++,t.u=Vt(A(t.Fa,t),Ci(t,t.v)),t.v++,!0)}n.Fa=function(){if(this.u=null,Ri(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Vt(A(this.ab,this),t)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,G(10),ge(this),Ri(this))};function nn(t){t.A!=null&&(v.clearTimeout(t.A),t.A=null)}function Ri(t){t.g=new mt(t,t.j,"rpc",t.Y),t.m===null&&(t.g.H=t.o),t.g.O=0;var i=ct(t.qa);L(i,"RID","rpc"),L(i,"SID",t.K),L(i,"AID",t.T),L(i,"CI",t.F?"0":"1"),!t.F&&t.ja&&L(i,"TO",t.ja),L(i,"TYPE","xmlhttp"),Jt(t,i),t.m&&t.o&&Qe(i,t.m,t.o),t.L&&(t.g.I=t.L);var r=t.g;t=t.ia,r.L=1,r.v=ue(ct(i)),r.m=null,r.P=!0,ti(r,t)}n.Za=function(){this.C!=null&&(this.C=null,ge(this),en(this),G(19))};function ye(t){t.C!=null&&(v.clearTimeout(t.C),t.C=null)}function Di(t,i){var r=null;if(t.g==i){ye(t),nn(t),t.g=null;var a=2}else if(Je(t.h,i))r=i.D,oi(t.h,i),a=1;else return;if(t.G!=0){if(i.o)if(a==1){r=i.m?i.m.length:0,i=Date.now()-i.F;var y=t.B;a=ze(),z(a,new Jn(a,r)),me(t)}else Si(t);else if(y=i.s,y==3||y==0&&0<i.X||!(a==1&&$r(t,i)||a==2&&en(t)))switch(r&&0<r.length&&(i=t.h,i.i=i.i.concat(r)),y){case 1:Et(t,5);break;case 4:Et(t,10);break;case 3:Et(t,6);break;default:Et(t,2)}}}function Ci(t,i){let r=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(r*=2),r*i}function Et(t,i){if(t.j.info("Error code "+i),i==2){var r=A(t.fb,t),a=t.Xa;const y=!a;a=new Tt(a||"//www.google.com/images/cleardot.gif"),v.location&&v.location.protocol=="http"||le(a,"https"),ue(a),y?Lr(a.toString(),r):Mr(a.toString(),r)}else G(2);t.G=0,t.l&&t.l.sa(i),ki(t),Ei(t)}n.fb=function(t){t?(this.j.info("Successfully pinged google.com"),G(2)):(this.j.info("Failed to ping google.com"),G(1))};function ki(t){if(t.G=0,t.ka=[],t.l){const i=ai(t.h);(i.length!=0||t.i.length!=0)&&(R(t.ka,i),R(t.ka,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.ra()}}function Pi(t,i,r){var a=r instanceof Tt?ct(r):new Tt(r);if(a.g!="")i&&(a.g=i+"."+a.g),ce(a,a.s);else{var y=v.location;a=y.protocol,i=i?i+"."+y.hostname:y.hostname,y=+y.port;var w=new Tt(null);a&&le(w,a),i&&(w.g=i),y&&ce(w,y),r&&(w.l=r),a=w}return r=t.D,i=t.ya,r&&i&&L(a,r,i),L(a,"VER",t.la),Jt(t,a),a}function Oi(t,i,r){if(i&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Ca&&!t.pa?new x(new fe({eb:r})):new x(t.pa),i.Ha(t.J),i}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ni(){}n=Ni.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Q(t,i){$.call(this),this.g=new Ti(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.va&&(t?t["X-WebChannel-Client-Profile"]=i.va:t={"X-WebChannel-Client-Profile":i.va}),this.g.S=t,(t=i&&i.Sb)&&!Z(t)&&(this.g.m=t),this.v=i&&i.supportsCrossDomainXhr||!1,this.u=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!Z(i)&&(this.g.D=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Pt(this)}b(Q,$),Q.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){tn(this.g)},Q.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.u&&(r={},r.__data__=Ue(t),t=r);i.i.push(new Ar(i.Ya++,t)),i.G==3&&me(i)},Q.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,Q.aa.N.call(this)};function Li(t){Ve.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const r in i){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}b(Li,Ve);function Mi(){He.call(this),this.status=1}b(Mi,He);function Pt(t){this.g=t}b(Pt,Ni),Pt.prototype.ua=function(){z(this.g,"a")},Pt.prototype.ta=function(t){z(this.g,new Li(t))},Pt.prototype.sa=function(t){z(this.g,new Mi)},Pt.prototype.ra=function(){z(this.g,"b")},Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,Ge.NO_ERROR=0,Ge.TIMEOUT=8,Ge.HTTP_ERROR=6,Tr.COMPLETE="complete",yr.EventType=Ut,Ut.OPEN="a",Ut.CLOSE="b",Ut.ERROR="c",Ut.MESSAGE="d",$.prototype.listen=$.prototype.K,x.prototype.listenOnce=x.prototype.L,x.prototype.getLastError=x.prototype.Ka,x.prototype.getLastErrorCode=x.prototype.Ba,x.prototype.getStatus=x.prototype.Z,x.prototype.getResponseJson=x.prototype.Oa,x.prototype.getResponseText=x.prototype.oa,x.prototype.send=x.prototype.ea,x.prototype.setWithCredentials=x.prototype.Ha}).apply(typeof _e<"u"?_e:typeof self<"u"?self:typeof window<"u"?window:{});const Wi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}K.UNAUTHENTICATED=new K(null),K.GOOGLE_CREDENTIALS=new K("google-credentials-uid"),K.FIRST_PARTY=new K("first-party-uid"),K.MOCK_USER=new K("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new bn("@firebase/firestore");function it(n,...e){if(Nt.logLevel<=P.DEBUG){const s=e.map(Dn);Nt.debug(`Firestore (${ne}): ${n}`,...s)}}function ks(n,...e){if(Nt.logLevel<=P.ERROR){const s=e.map(Dn);Nt.error(`Firestore (${ne}): ${n}`,...s)}}function pa(n,...e){if(Nt.logLevel<=P.WARN){const s=e.map(Dn);Nt.warn(`Firestore (${ne}): ${n}`,...s)}}function Dn(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(s){return JSON.stringify(s)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(n="Unexpected state"){const e=`FIRESTORE (${ne}) INTERNAL ASSERTION FAILED: `+n;throw ks(e),new Error(e)}function Zt(n,e){n||Cn()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class X extends pt{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ga{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(K.UNAUTHENTICATED))}shutdown(){}}class ma{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,s){this.changeListener=s,e.enqueueRetryable(()=>s(this.token.user))}shutdown(){this.changeListener=null}}class ya{constructor(e){this.t=e,this.currentUser=K.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Zt(this.o===void 0);let o=this.i;const h=I=>this.i!==o?(o=this.i,s(I)):Promise.resolve();let c=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Qt,e.enqueueRetryable(()=>h(this.currentUser))};const d=()=>{const I=c;e.enqueueRetryable(async()=>{await I.promise,await h(this.currentUser)})},v=I=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=I,this.o&&(this.auth.addAuthTokenListener(this.o),d())};this.t.onInit(I=>v(I)),setTimeout(()=>{if(!this.auth){const I=this.t.getImmediate({optional:!0});I?v(I):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Qt)}},0),d()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(o=>this.i!==e?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(Zt(typeof o.accessToken=="string"),new Ps(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Zt(e===null||typeof e=="string"),new K(e)}}class va{constructor(e,s,o){this.l=e,this.h=s,this.P=o,this.type="FirstParty",this.user=K.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class _a{constructor(e,s,o){this.l=e,this.h=s,this.P=o}getToken(){return Promise.resolve(new va(this.l,this.h,this.P))}start(e,s){e.enqueueRetryable(()=>s(K.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ia{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,s){Zt(this.o===void 0);const o=c=>{c.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const d=c.token!==this.R;return this.R=c.token,it("FirebaseAppCheckTokenProvider",`Received ${d?"new":"existing"} token.`),d?s(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>o(c))};const h=c=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(c=>h(c)),setTimeout(()=>{if(!this.appCheck){const c=this.A.getImmediate({optional:!0});c?h(c):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Zt(typeof s.token=="string"),this.R=s.token,new wa(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Ta(n){return n.name==="IndexedDbTransactionError"}class Ae{constructor(e,s){this.projectId=e,this.database=s||"(default)"}static empty(){return new Ae("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ae&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xi,S;(S=Xi||(Xi={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Cs([4294967295,4294967295],0);function ln(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,s,o=1e3,h=1.5,c=6e4){this.ui=e,this.timerId=s,this.ko=o,this.qo=h,this.Qo=c,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const s=Math.floor(this.Ko+this.zo()),o=Math.max(0,Date.now()-this.Uo),h=Math.max(0,s-o);h>0&&it("ExponentialBackoff",`Backing off for ${h} ms (base delay: ${this.Ko} ms, delay with jitter: ${s} ms, last attempt: ${o} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,h,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,s,o,h,c){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=o,this.op=h,this.removalCallback=c,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(d=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,o,h,c){const d=Date.now()+o,v=new kn(e,s,d,h,c);return v.start(o),v}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(W.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Yi,Ji;(Ji=Yi||(Yi={})).ea="default",Ji.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Map;function ba(n,e,s,o){if(e===!0&&o===!0)throw new X(W.INVALID_ARGUMENT,`${n} and ${s} cannot be used together.`)}function Sa(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(o){return o.constructor?o.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Cn()}function Ra(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new X(W.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const s=Sa(n);throw new X(W.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${s}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){var s,o;if(e.host===void 0){if(e.ssl!==void 0)throw new X(W.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(s=e.ssl)===null||s===void 0||s;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(W.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ba("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Aa((o=e.experimentalLongPollingOptions)!==null&&o!==void 0?o:{}),function(c){if(c.timeoutSeconds!==void 0){if(isNaN(c.timeoutSeconds))throw new X(W.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (must not be NaN)`);if(c.timeoutSeconds<5)throw new X(W.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (minimum allowed value is 5)`);if(c.timeoutSeconds>30)throw new X(W.INVALID_ARGUMENT,`invalid long polling timeout: ${c.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(o,h){return o.timeoutSeconds===h.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Os{constructor(e,s,o,h){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=o,this._app=h,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qi({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new X(W.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new X(W.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qi(e),e.credentials!==void 0&&(this._authCredentials=function(o){if(!o)return new ga;switch(o.type){case"firstParty":return new _a(o.sessionIndex||"0",o.iamToken||null,o.authTokenFactory||null);case"provider":return o.client;default:throw new X(W.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const o=Zi.get(s);o&&(it("ComponentProvider","Removing Datastore"),Zi.delete(s),o.terminate())}(this),Promise.resolve()}}function Da(n,e,s,o={}){var h;const c=(n=Ra(n,Os))._getSettings(),d=`${e}:${s}`;if(c.host!=="firestore.googleapis.com"&&c.host!==d&&pa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},c),{host:d,ssl:!1})),o.mockUserToken){let v,I;if(typeof o.mockUserToken=="string")v=o.mockUserToken,I=K.MOCK_USER;else{v=_s(o.mockUserToken,(h=n._app)===null||h===void 0?void 0:h.options.projectId);const T=o.mockUserToken.sub||o.mockUserToken.user_id;if(!T)throw new X(W.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new K(T)}n._authCredentials=new ma(new Ps(v,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Ea(this,"async_queue_retry"),this.Vu=()=>{const o=ln();o&&it("AsyncQueue","Visibility state changed to "+o.visibilityState),this.t_.jo()},this.mu=e;const s=ln();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const s=ln();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const s=new Qt;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ta(e))throw e;it("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const s=this.mu.then(()=>(this.du=!0,e().catch(o=>{this.Eu=o,this.du=!1;const h=function(d){let v=d.message||"";return d.stack&&(v=d.stack.includes(d.message)?d.stack:d.message+`
`+d.stack),v}(o);throw ks("INTERNAL UNHANDLED ERROR: ",h),o}).then(o=>(this.du=!1,o))));return this.mu=s,s}enqueueAfterDelay(e,s,o){this.fu(),this.Ru.indexOf(e)>-1&&(s=0);const h=kn.createAndSchedule(this,e,s,o,c=>this.yu(c));return this.Tu.push(h),h}fu(){this.Eu&&Cn()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const s of this.Tu)if(s.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((s,o)=>s.targetTimeMs-o.targetTimeMs);for(const s of this.Tu)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const s=this.Tu.indexOf(e);this.Tu.splice(s,1)}}class Ca extends Os{constructor(e,s,o,h){super(e,s,o,h),this.type="firestore",this._queue=new ts,this._persistenceKey=(h==null?void 0:h.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ts(e),this._firestoreClient=void 0,await e}}}function ka(n,e){const s=typeof n=="object"?n:Rn(),o=typeof n=="string"?n:"(default)",h=Lt(s,"firestore").getImmediate({identifier:o});if(!h._initialized){const c=ys("firestore");c&&Da(h,...c)}return h}(function(e,s=!0){(function(h){ne=h})(bs),dt(new rt("firestore",(o,{instanceIdentifier:h,options:c})=>{const d=o.getProvider("app").getImmediate(),v=new Ca(new ya(o.getProvider("auth-internal")),new Ia(o.getProvider("app-check-internal")),function(T,C){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new X(W.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ae(T.options.projectId,C)}(d,h),d);return c=Object.assign({useFetchStreams:s},c),v._setSettings(c),v},"PUBLIC").setMultipleInstances(!0)),tt(Wi,"4.7.3",e),tt(Wi,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns="firebasestorage.googleapis.com",Pa="storageBucket",Oa=2*60*1e3,Na=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends pt{constructor(e,s,o=0){super(cn(e),`Firebase Storage: ${s} (${cn(e)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,at.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return cn(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ot;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ot||(ot={}));function cn(n){return"storage/"+n}function La(){const n="An unknown error occurred, please check the error payload for server response.";return new at(ot.UNKNOWN,n)}function Ma(){return new at(ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function xa(){return new at(ot.CANCELED,"User canceled the upload/download.")}function Fa(n){return new at(ot.INVALID_URL,"Invalid URL '"+n+"'.")}function ja(n){return new at(ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function es(n){return new at(ot.INVALID_ARGUMENT,n)}function Ls(){return new at(ot.APP_DELETED,"The Firebase app was deleted.")}function Ba(n){return new at(ot.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,s){this.bucket=e,this.path_=s}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,s){let o;try{o=st.makeFromUrl(e,s)}catch{return new st(e,"")}if(o.path==="")return o;throw ja(e)}static makeFromUrl(e,s){let o=null;const h="([A-Za-z0-9.\\-_]+)";function c(F){F.path.charAt(F.path.length-1)==="/"&&(F.path_=F.path_.slice(0,-1))}const d="(/(.*))?$",v=new RegExp("^gs://"+h+d,"i"),I={bucket:1,path:3};function T(F){F.path_=decodeURIComponent(F.path)}const C="v[A-Za-z0-9_]+",k=s.replace(/[.]/g,"\\."),A="(/([^?#]*).*)?$",O=new RegExp(`^https?://${k}/${C}/b/${h}/o${A}`,"i"),b={bucket:1,path:3},M=s===Ns?"(?:storage.googleapis.com|storage.cloud.google.com)":s,R="([^?#]*)",et=new RegExp(`^https?://${M}/${h}/${R}`,"i"),j=[{regex:v,indices:I,postModify:c},{regex:O,indices:b,postModify:T},{regex:et,indices:{bucket:1,path:2},postModify:T}];for(let F=0;F<j.length;F++){const ht=j[F],q=ht.regex.exec(e);if(q){const m=q[ht.indices.bucket];let l=q[ht.indices.path];l||(l=""),o=new st(m,l),ht.postModify(o);break}}if(o==null)throw Fa(e);return o}}class Ua{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(n,e,s){let o=1,h=null,c=null,d=!1,v=0;function I(){return v===2}let T=!1;function C(...R){T||(T=!0,e.apply(null,R))}function k(R){h=setTimeout(()=>{h=null,n(O,I())},R)}function A(){c&&clearTimeout(c)}function O(R,...et){if(T){A();return}if(R){A(),C.call(null,R,...et);return}if(I()||d){A(),C.call(null,R,...et);return}o<64&&(o*=2);let j;v===1?(v=2,j=0):j=(o+Math.random())*1e3,k(j)}let b=!1;function M(R){b||(b=!0,A(),!T&&(h!==null?(R||(v=2),clearTimeout(h),k(0)):R||(v=1)))}return k(0),c=setTimeout(()=>{d=!0,M(!0)},s),M}function Va(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){return n!==void 0}function ns(n,e,s,o){if(o<e)throw es(`Invalid value for '${n}'. Expected ${e} or greater.`);if(o>s)throw es(`Invalid value for '${n}'. Expected ${s} or less.`)}function za(n){const e=encodeURIComponent;let s="?";for(const o in n)if(n.hasOwnProperty(o)){const h=e(o)+"="+e(n[o]);s=s+h+"&"}return s=s.slice(0,-1),s}var be;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(be||(be={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ga(n,e){const s=n>=500&&n<600,h=[408,429].indexOf(n)!==-1,c=e.indexOf(n)!==-1;return s||h||c}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,s,o,h,c,d,v,I,T,C,k,A=!0){this.url_=e,this.method_=s,this.headers_=o,this.body_=h,this.successCodes_=c,this.additionalRetryCodes_=d,this.callback_=v,this.errorCallback_=I,this.timeout_=T,this.progressCallback_=C,this.connectionFactory_=k,this.retry=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,b)=>{this.resolve_=O,this.reject_=b,this.start_()})}start_(){const e=(o,h)=>{if(h){o(!1,new we(!1,null,!0));return}const c=this.connectionFactory_();this.pendingConnection_=c;const d=v=>{const I=v.loaded,T=v.lengthComputable?v.total:-1;this.progressCallback_!==null&&this.progressCallback_(I,T)};this.progressCallback_!==null&&c.addUploadProgressListener(d),c.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&c.removeUploadProgressListener(d),this.pendingConnection_=null;const v=c.getErrorCode()===be.NO_ERROR,I=c.getStatus();if(!v||Ga(I,this.additionalRetryCodes_)&&this.retry){const C=c.getErrorCode()===be.ABORT;o(!1,new we(!1,null,C));return}const T=this.successCodes_.indexOf(I)!==-1;o(!0,new we(T,c))})},s=(o,h)=>{const c=this.resolve_,d=this.reject_,v=h.connection;if(h.wasSuccessCode)try{const I=this.callback_(v,v.getResponse());Ha(I)?c(I):c()}catch(I){d(I)}else if(v!==null){const I=La();I.serverResponse=v.getErrorText(),this.errorCallback_?d(this.errorCallback_(v,I)):d(I)}else if(h.canceled){const I=this.appDelete_?Ls():xa();d(I)}else{const I=Ma();d(I)}};this.canceled_?s(!1,new we(!1,null,!0)):this.backoffId_=$a(e,s,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Va(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class we{constructor(e,s,o){this.wasSuccessCode=e,this.connection=s,this.canceled=!!o}}function qa(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Wa(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Xa(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Ya(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Ja(n,e,s,o,h,c,d=!0){const v=za(n.urlParams),I=n.url+v,T=Object.assign({},n.headers);return Xa(T,e),qa(T,s),Wa(T,c),Ya(T,o),new Ka(I,n.method,T,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,h,d)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Qa(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,s){this._service=e,s instanceof st?this._location=s:this._location=st.makeFromUrl(s,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,s){return new Se(e,s)}get root(){const e=new st(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qa(this._location.path)}get storage(){return this._service}get parent(){const e=Za(this._location.path);if(e===null)return null;const s=new st(this._location.bucket,e);return new Se(this._service,s)}_throwIfRoot(e){if(this._location.path==="")throw Ba(e)}}function is(n,e){const s=e==null?void 0:e[Pa];return s==null?null:st.makeFromBucketSpec(s,n)}function th(n,e,s,o={}){n.host=`${e}:${s}`,n._protocol="http";const{mockUserToken:h}=o;h&&(n._overrideAuthToken=typeof h=="string"?h:_s(h,n.app.options.projectId))}class eh{constructor(e,s,o,h,c){this.app=e,this._authProvider=s,this._appCheckProvider=o,this._url=h,this._firebaseVersion=c,this._bucket=null,this._host=Ns,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Oa,this._maxUploadRetryTime=Na,this._requests=new Set,h!=null?this._bucket=st.makeFromBucketSpec(h,this._host):this._bucket=is(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=st.makeFromBucketSpec(this._url,e):this._bucket=is(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ns("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ns("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const s=await e.getToken();if(s!==null)return s.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Se(this,e)}_makeRequest(e,s,o,h,c=!0){if(this._deleted)return new Ua(Ls());{const d=Ja(e,this._appId,o,h,s,this._firebaseVersion,c);return this._requests.add(d),d.getPromise().then(()=>this._requests.delete(d),()=>this._requests.delete(d)),d}}async makeRequestWithTokens(e,s){const[o,h]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,s,o,h).getPromise()}}const ss="@firebase/storage",rs="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="storage";function nh(n=Rn(),e){n=An(n);const o=Lt(n,Ms).getImmediate({identifier:e}),h=ys("storage");return h&&ih(o,...h),o}function ih(n,e,s,o={}){th(n,e,s,o)}function sh(n,{instanceIdentifier:e}){const s=n.getProvider("app").getImmediate(),o=n.getProvider("auth-internal"),h=n.getProvider("app-check-internal");return new eh(s,o,h,e,bs)}function rh(){dt(new rt(Ms,sh,"PUBLIC").setMultipleInstances(!0)),tt(ss,rs,""),tt(ss,rs,"esm2017")}rh();const xs="@firebase/installations",Pn="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fs=1e4,js=`w:${Pn}`,Bs="FIS_v2",oh="https://firebaseinstallations.googleapis.com/v1",ah=60*60*1e3,hh="installations",lh="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ch={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},St=new Ce(hh,lh,ch);function Us(n){return n instanceof pt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s({projectId:n}){return`${oh}/projects/${n}/installations`}function Vs(n){return{token:n.token,requestStatus:2,expiresIn:fh(n.expiresIn),creationTime:Date.now()}}async function Hs(n,e){const o=(await e.json()).error;return St.create("request-failed",{requestName:n,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function zs({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function uh(n,{refreshToken:e}){const s=zs(n);return s.append("Authorization",dh(e)),s}async function Gs(n){const e=await n();return e.status>=500&&e.status<600?n():e}function fh(n){return Number(n.replace("s","000"))}function dh(n){return`${Bs} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ph({appConfig:n,heartbeatServiceProvider:e},{fid:s}){const o=$s(n),h=zs(n),c=e.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&h.append("x-firebase-client",T)}const d={fid:s,authVersion:Bs,appId:n.appId,sdkVersion:js},v={method:"POST",headers:h,body:JSON.stringify(d)},I=await Gs(()=>fetch(o,v));if(I.ok){const T=await I.json();return{fid:T.fid||s,registrationStatus:2,refreshToken:T.refreshToken,authToken:Vs(T.authToken)}}else throw await Hs("Create Installation",I)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gh(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=/^[cdef][\w-]{21}$/,_n="";function yh(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const s=vh(n);return mh.test(s)?s:_n}catch{return _n}}function vh(n){return gh(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs=new Map;function Ws(n,e){const s=ke(n);Xs(s,e),_h(s,e)}function Xs(n,e){const s=qs.get(n);if(s)for(const o of s)o(e)}function _h(n,e){const s=wh();s&&s.postMessage({key:n,fid:e}),Ih()}let bt=null;function wh(){return!bt&&"BroadcastChannel"in self&&(bt=new BroadcastChannel("[Firebase] FID Change"),bt.onmessage=n=>{Xs(n.data.key,n.data.fid)}),bt}function Ih(){qs.size===0&&bt&&(bt.close(),bt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="firebase-installations-database",Eh=1,Rt="firebase-installations-store";let un=null;function On(){return un||(un=As(Th,Eh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rt)}}})),un}async function Re(n,e){const s=ke(n),h=(await On()).transaction(Rt,"readwrite"),c=h.objectStore(Rt),d=await c.get(s);return await c.put(e,s),await h.done,(!d||d.fid!==e.fid)&&Ws(n,e.fid),e}async function Ys(n){const e=ke(n),o=(await On()).transaction(Rt,"readwrite");await o.objectStore(Rt).delete(e),await o.done}async function Pe(n,e){const s=ke(n),h=(await On()).transaction(Rt,"readwrite"),c=h.objectStore(Rt),d=await c.get(s),v=e(d);return v===void 0?await c.delete(s):await c.put(v,s),await h.done,v&&(!d||d.fid!==v.fid)&&Ws(n,v.fid),v}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(n){let e;const s=await Pe(n.appConfig,o=>{const h=Ah(o),c=bh(n,h);return e=c.registrationPromise,c.installationEntry});return s.fid===_n?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function Ah(n){const e=n||{fid:yh(),registrationStatus:0};return Js(e)}function bh(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const h=Promise.reject(St.create("app-offline"));return{installationEntry:e,registrationPromise:h}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},o=Sh(n,s);return{installationEntry:s,registrationPromise:o}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Rh(n)}:{installationEntry:e}}async function Sh(n,e){try{const s=await ph(n,e);return Re(n.appConfig,s)}catch(s){throw Us(s)&&s.customData.serverCode===409?await Ys(n.appConfig):await Re(n.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function Rh(n){let e=await os(n.appConfig);for(;e.registrationStatus===1;)await Ks(100),e=await os(n.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:o}=await Nn(n);return o||s}return e}function os(n){return Pe(n,e=>{if(!e)throw St.create("installation-not-found");return Js(e)})}function Js(n){return Dh(n)?{fid:n.fid,registrationStatus:0}:n}function Dh(n){return n.registrationStatus===1&&n.registrationTime+Fs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch({appConfig:n,heartbeatServiceProvider:e},s){const o=kh(n,s),h=uh(n,s),c=e.getImmediate({optional:!0});if(c){const T=await c.getHeartbeatsHeader();T&&h.append("x-firebase-client",T)}const d={installation:{sdkVersion:js,appId:n.appId}},v={method:"POST",headers:h,body:JSON.stringify(d)},I=await Gs(()=>fetch(o,v));if(I.ok){const T=await I.json();return Vs(T)}else throw await Hs("Generate Auth Token",I)}function kh(n,{fid:e}){return`${$s(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(n,e=!1){let s;const o=await Pe(n.appConfig,c=>{if(!Zs(c))throw St.create("not-registered");const d=c.authToken;if(!e&&Nh(d))return c;if(d.requestStatus===1)return s=Ph(n,e),c;{if(!navigator.onLine)throw St.create("app-offline");const v=Mh(c);return s=Oh(n,v),v}});return s?await s:o.authToken}async function Ph(n,e){let s=await as(n.appConfig);for(;s.authToken.requestStatus===1;)await Ks(100),s=await as(n.appConfig);const o=s.authToken;return o.requestStatus===0?Ln(n,e):o}function as(n){return Pe(n,e=>{if(!Zs(e))throw St.create("not-registered");const s=e.authToken;return xh(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Oh(n,e){try{const s=await Ch(n,e),o=Object.assign(Object.assign({},e),{authToken:s});return await Re(n.appConfig,o),s}catch(s){if(Us(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Ys(n.appConfig);else{const o=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Re(n.appConfig,o)}throw s}}function Zs(n){return n!==void 0&&n.registrationStatus===2}function Nh(n){return n.requestStatus===2&&!Lh(n)}function Lh(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+ah}function Mh(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function xh(n){return n.requestStatus===1&&n.requestTime+Fs<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fh(n){const e=n,{installationEntry:s,registrationPromise:o}=await Nn(e);return o?o.catch(console.error):Ln(e).catch(console.error),s.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jh(n,e=!1){const s=n;return await Bh(s),(await Ln(s,e)).token}async function Bh(n){const{registrationPromise:e}=await Nn(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n){if(!n||!n.options)throw fn("App Configuration");if(!n.name)throw fn("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!n.options[s])throw fn(s);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function fn(n){return St.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="installations",$h="installations-internal",Vh=n=>{const e=n.getProvider("app").getImmediate(),s=Uh(e),o=Lt(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Hh=n=>{const e=n.getProvider("app").getImmediate(),s=Lt(e,Qs).getImmediate();return{getId:()=>Fh(s),getToken:h=>jh(s,h)}};function zh(){dt(new rt(Qs,Vh,"PUBLIC")),dt(new rt($h,Hh,"PRIVATE"))}zh();tt(xs,Pn);tt(xs,Pn,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="analytics",Gh="firebase_id",Kh="origin",qh=60*1e3,Wh="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Mn="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y=new bn("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},J=new Ce("analytics","Analytics",Xh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n){if(!n.startsWith(Mn)){const e=J.create("invalid-gtag-resource",{gtagURL:n});return Y.warn(e.message),""}return n}function tr(n){return Promise.all(n.map(e=>e.catch(s=>s)))}function Jh(n,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(n,e)),s}function Zh(n,e){const s=Jh("firebase-js-sdk-policy",{createScriptURL:Yh}),o=document.createElement("script"),h=`${Mn}?l=${n}&id=${e}`;o.src=s?s==null?void 0:s.createScriptURL(h):h,o.async=!0,document.head.appendChild(o)}function Qh(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function tl(n,e,s,o,h,c){const d=o[h];try{if(d)await e[d];else{const I=(await tr(s)).find(T=>T.measurementId===h);I&&await e[I.appId]}}catch(v){Y.error(v)}n("config",h,c)}async function el(n,e,s,o,h){try{let c=[];if(h&&h.send_to){let d=h.send_to;Array.isArray(d)||(d=[d]);const v=await tr(s);for(const I of d){const T=v.find(k=>k.measurementId===I),C=T&&e[T.appId];if(C)c.push(C);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),n("event",o,h||{})}catch(c){Y.error(c)}}function nl(n,e,s,o){async function h(c,...d){try{if(c==="event"){const[v,I]=d;await el(n,e,s,v,I)}else if(c==="config"){const[v,I]=d;await tl(n,e,s,o,v,I)}else if(c==="consent"){const[v,I]=d;n("consent",v,I)}else if(c==="get"){const[v,I,T]=d;n("get",v,I,T)}else if(c==="set"){const[v]=d;n("set",v)}else n(c,...d)}catch(v){Y.error(v)}}return h}function il(n,e,s,o,h){let c=function(...d){window[o].push(arguments)};return window[h]&&typeof window[h]=="function"&&(c=window[h]),window[h]=nl(c,n,e,s),{gtagCore:c,wrappedGtag:window[h]}}function sl(n){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(Mn)&&s.src.includes(n))return s;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=30,ol=1e3;class al{constructor(e={},s=ol){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const er=new al;function hl(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ll(n){var e;const{appId:s,apiKey:o}=n,h={method:"GET",headers:hl(o)},c=Wh.replace("{app-id}",s),d=await fetch(c,h);if(d.status!==200&&d.status!==304){let v="";try{const I=await d.json();!((e=I.error)===null||e===void 0)&&e.message&&(v=I.error.message)}catch{}throw J.create("config-fetch-failed",{httpStatus:d.status,responseMessage:v})}return d.json()}async function cl(n,e=er,s){const{appId:o,apiKey:h,measurementId:c}=n.options;if(!o)throw J.create("no-app-id");if(!h){if(c)return{measurementId:c,appId:o};throw J.create("no-api-key")}const d=e.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},v=new dl;return setTimeout(async()=>{v.abort()},qh),nr({appId:o,apiKey:h,measurementId:c},d,v,e)}async function nr(n,{throttleEndTimeMillis:e,backoffCount:s},o,h=er){var c;const{appId:d,measurementId:v}=n;try{await ul(o,e)}catch(I){if(v)return Y.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${v} provided in the "measurementId" field in the local Firebase config. [${I==null?void 0:I.message}]`),{appId:d,measurementId:v};throw I}try{const I=await ll(n);return h.deleteThrottleMetadata(d),I}catch(I){const T=I;if(!fl(T)){if(h.deleteThrottleMetadata(d),v)return Y.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${v} provided in the "measurementId" field in the local Firebase config. [${T==null?void 0:T.message}]`),{appId:d,measurementId:v};throw I}const C=Number((c=T==null?void 0:T.customData)===null||c===void 0?void 0:c.httpStatus)===503?ji(s,h.intervalMillis,rl):ji(s,h.intervalMillis),k={throttleEndTimeMillis:Date.now()+C,backoffCount:s+1};return h.setThrottleMetadata(d,k),Y.debug(`Calling attemptFetch again in ${C} millis`),nr(n,k,o,h)}}function ul(n,e){return new Promise((s,o)=>{const h=Math.max(e-Date.now(),0),c=setTimeout(s,h);n.addEventListener(()=>{clearTimeout(c),o(J.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function fl(n){if(!(n instanceof pt)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class dl{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function pl(n,e,s,o,h){if(h&&h.global){n("event",s,o);return}else{const c=await e,d=Object.assign(Object.assign({},o),{send_to:c});n("event",s,d)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gl(){if(Tn())try{await En()}catch(n){return Y.warn(J.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Y.warn(J.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ml(n,e,s,o,h,c,d){var v;const I=cl(n);I.then(O=>{s[O.measurementId]=O.appId,n.options.measurementId&&O.measurementId!==n.options.measurementId&&Y.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${O.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(O=>Y.error(O)),e.push(I);const T=gl().then(O=>{if(O)return o.getId()}),[C,k]=await Promise.all([I,T]);sl(c)||Zh(c,C.measurementId),h("js",new Date);const A=(v=d==null?void 0:d.config)!==null&&v!==void 0?v:{};return A[Kh]="firebase",A.update=!0,k!=null&&(A[Gh]=k),h("config",C.measurementId,A),C.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e){this.app=e}_delete(){return delete te[this.app.options.appId],Promise.resolve()}}let te={},hs=[];const ls={};let dn="dataLayer",vl="gtag",cs,ir,us=!1;function _l(){const n=[];if(ws()&&n.push("This is a browser extension environment."),Is()||n.push("Cookies are not available."),n.length>0){const e=n.map((o,h)=>`(${h+1}) ${o}`).join(" "),s=J.create("invalid-analytics-context",{errorInfo:e});Y.warn(s.message)}}function wl(n,e,s){_l();const o=n.options.appId;if(!o)throw J.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Y.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw J.create("no-api-key");if(te[o]!=null)throw J.create("already-exists",{id:o});if(!us){Qh(dn);const{wrappedGtag:c,gtagCore:d}=il(te,hs,ls,dn,vl);ir=c,cs=d,us=!0}return te[o]=ml(n,hs,ls,e,cs,dn,s),new yl(n)}function Il(n=Rn()){n=An(n);const e=Lt(n,De);return e.isInitialized()?e.getImmediate():Tl(n)}function Tl(n,e={}){const s=Lt(n,De);if(s.isInitialized()){const h=s.getImmediate();if(Te(e,s.getOptions()))return h;throw J.create("already-initialized")}return s.initialize({options:e})}async function El(){if(ws()||!Is()||!Tn())return!1;try{return await En()}catch{return!1}}function sr(n,e,s,o){n=An(n),pl(ir,te[n.app.options.appId],e,s,o).catch(h=>Y.error(h))}const fs="@firebase/analytics",ds="0.10.8";function Al(){dt(new rt(De,(e,{options:s})=>{const o=e.getProvider("app").getImmediate(),h=e.getProvider("installations-internal").getImmediate();return wl(o,h,s)},"PUBLIC")),dt(new rt("analytics-internal",n,"PRIVATE")),tt(fs,ds),tt(fs,ds,"esm2017");function n(e){try{const s=e.getProvider(De).getImmediate();return{logEvent:(o,h,c)=>sr(s,o,h,c)}}catch(s){throw J.create("interop-component-reg-failed",{reason:s})}}}Al();const wn={apiKey:"AIzaSyDPWsekBVRrH_ehi-rWpR6mg5ctoeio1u0",authDomain:"voiceofstraysandnature.firebaseapp.com",projectId:"voiceofstraysandnature",storageBucket:"voiceofstraysandnature.firebasestorage.app",messagingSenderId:"726443990023",appId:"1:726443990023:web:b0632315e4d9ecd9b55ea2",measurementId:"G-CTGF41GG3Z"},xn=Ss(wn);console.log("Firebase app initialized with config:",{projectId:wn.projectId,measurementId:wn.measurementId});let In=null;const bl=async()=>{try{await El()?(In=Il(xn),console.log("Firebase Analytics initialized successfully")):console.warn("Firebase Analytics is not supported in this environment")}catch(n){console.error("Failed to initialize Firebase Analytics:",n)}};bl();ka(xn);nh(xn);const Fn=(n,e)=>{try{In?(console.log(`Logging event: ${n}`,e),sr(In,n,e)):console.warn(`Analytics not initialized, couldn't log event: ${n}`)}catch(s){console.error(`Error logging event ${n}:`,s)}},Sl=n=>{const e={page_title:n,page_location:window.location.href,page_path:window.location.pathname};Fn("page_view",e)},Rl=(n,e)=>{Fn("donation",{amount:n,method:e,currency:"INR"})},Dl=n=>{Fn("social_media_click",{platform:n})};export{Rl as a,Dl as b,Sl as t};
