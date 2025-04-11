export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","img/animalrescue.jpeg","img/banner1.jpeg","img/group1.jpeg","img/group2.jpeg","img/group3.jpeg","img/group4.jpeg","img/group5.jpeg","img/group6.jpeg","img/group7.jpeg","img/heroBg.jpg","img/img1.jpeg","img/img10.jpeg","img/img11.jpeg","img/img12.jpeg","img/img13.jpeg","img/img14.jpeg","img/img15.jpeg","img/img16.jpeg","img/img17.jpeg","img/img18.jpeg","img/img19.jpeg","img/img2.jpeg","img/img20.jpeg","img/img21.jpeg","img/img22.jpeg","img/img3.jpeg","img/img4.jpeg","img/img5.jpeg","img/img6.jpeg","img/img7.jpeg","img/img8.jpeg","img/img9.jpeg","img/logo.jpeg","img/maingroup.jpeg","img/upi.jpeg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.zooTGAhL.js",app:"_app/immutable/entry/app.Bpea72ls.js",imports:["_app/immutable/entry/start.zooTGAhL.js","_app/immutable/chunks/D5VHzihQ.js","_app/immutable/chunks/D2ErSZOU.js","_app/immutable/entry/app.Bpea72ls.js","_app/immutable/chunks/C1FmrZbK.js","_app/immutable/chunks/D2ErSZOU.js","_app/immutable/chunks/DRqlp92P.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/aboutus",
				pattern: /^\/aboutus\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/donate",
				pattern: /^\/donate\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/gallery",
				pattern: /^\/gallery\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/volunteer",
				pattern: /^\/volunteer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
