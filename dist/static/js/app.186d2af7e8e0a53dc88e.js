webpackJsonp([2],{121:function(t,e,n){"use strict";var a=n(209),o=n.n(a),r=n(212),s=n.n(r),i=n(13),c=n(241),u=n(242),l=n(245),f=n(248),d=n(251);i.default.component("backend-layout",u.a),i.default.component("default-layout",l.a),i.default.component("none-layout",f.a);i.default.prototype.$appInfo={ip:"todo:ip",debug:!1,env:"production"},e.a={name:"app",data:function(){return{user:null,drawer:!1,year:(new Date).getFullYear()}},components:{LocalesChanger:d.a},methods:{login:function(){alert("todo:login")},logout:function(){var t=this;return s()(o.a.mark(function e(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},e,t)}))()}},created:function(){var t=this;c.a.forEach(function(e){t.$on(e.name,e.callback)}),window.getApp=this},computed:{layout:function(){return(this.$route.meta.layout||"default")+"-layout"}}}},139:function(t,e,n){"use strict";e.a={}},140:function(t,e,n){"use strict";e.a={}},141:function(t,e,n){"use strict";e.a={}},142:function(t,e,n){"use strict";e.a={name:"LocalesChanger",data:function(){return{langs:[{code:"en_us",text:"English (US)"},{code:"es_es",text:"Español (ES)"}]}},methods:{langChanged:function(){this.$toastr.success(this.$t("Language changed",[this.$i18n.locale]))}}}},192:function(t,e,n){"use strict";e.a={data:function(){return{title:"My laboratory..."}}}},193:function(t,e,n){"use strict";function a(t){n(368)}var o=n(194),r=n(374),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-cb464d1c",null);e.a=c.exports},194:function(t,e,n){"use strict";var a=n(369);e.a={data:function(){return{title:"Let's see what this is",text:"Waiting..."}},methods:{jesusSalutes:function(){alert("Jesus says Hi yo!"+a.a.randomString()),alert("YOUR_SENDGRID_APIKEY_PROD>"),alert("production")},testGlobalEvent:function(){window.getApp.$emit("APP_TEST_EVENT")},handleFullScreen:function(){a.a.toggleFullScreen(),a.a.jesusTest()},kebab:function(){this.$toastr.success(a.a.kebab("SomethingToKebab"),"",{timeOut:0,extendedTimeOut:0}),this.$toastr.error(a.a.kebab("something to kebab")),this.$toastr.error(a.a.kebab("somethingtokebab"))}},created:function(){console.info(this.$route.params)},mounted:function(){var t=this;setTimeout(function(){t.text="Mounted"},3e3),this.$toastr.success("Esto marcha :-)","Title",{timeOut:5e3})}}},195:function(t,e,n){"use strict";var a=n(193);e.a={data:function(){return{title:"Component1 in subfolder"}},components:{Jesus:a.a}}},196:function(t,e,n){"use strict";var a=n(379);e.a={data:function(){return{info:null,loading:!0,errored:!1}},mounted:function(){var t=this;a.a.getAll().then(function(e){t.info=e.data}).catch(function(e){console.log(e),t.errored=!0}).finally(function(){return t.loading=!1})}}},203:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(13),o=n(206),r=n(255),s=n.n(r),i=n(360),c=(n.n(i),n(361)),u=(n.n(c),n(362)),l=n(402),f=(n(404),n(405),n(406)),d=(n(411),n(417),n(421));n.n(d);a.default.prototype.$vuetify.rtl=!1,a.default.config.productionTip=!1,a.default.use(s.a),new a.default({el:"#app",router:u.a,store:l.a,i18n:f.a,template:"<App/>",components:{App:o.a}})},206:function(t,e,n){"use strict";function a(t){n(207)}var o=n(121),r=n(254),s=n(19),i=a,c=s(o.a,r.a,!1,i,null,null);e.a=c.exports},207:function(t,e){},241:function(t,e,n){"use strict";e.a=[{name:"APP_TEST_EVENT",callback:function(t){var e=this;this.$toastr.info("APP_TEST_EVENT","Yay! Event emitted!",{timeOut:3e3,progressBar:!0,onHidden:function(){e.$router.push("/component1")}})}}]},242:function(t,e,n){"use strict";function a(t){n(243)}var o=n(139),r=n(244),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-2b31cd32",null);e.a=c.exports},243:function(t,e){},244:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"backend"}},[n("header",[t._v(" backend-layout.vue ")]),t._v(" "),t._t("default")],2)},o=[],r={render:a,staticRenderFns:o};e.a=r},245:function(t,e,n){"use strict";function a(t){n(246)}var o=n(140),r=n(247),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-ebb79c9c",null);e.a=c.exports},246:function(t,e){},247:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"default"}},[n("header",[t._v(" frontend-(default)-layout.vue ")]),t._v(" "),t._t("default")],2)},o=[],r={render:a,staticRenderFns:o};e.a=r},248:function(t,e,n){"use strict";function a(t){n(249)}var o=n(141),r=n(250),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-60282018",null);e.a=c.exports},249:function(t,e){},250:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"none"}},[t._t("default")],2)},o=[],r={render:a,staticRenderFns:o};e.a=r},251:function(t,e,n){"use strict";function a(t){n(252)}var o=n(142),r=n(253),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-e510750c",null);e.a=c.exports},252:function(t,e){},253:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"locale-changer"},[n("b-form-select",{staticClass:"mb-1",on:{change:t.langChanged},model:{value:t.$i18n.locale,callback:function(e){t.$set(t.$i18n,"locale",e)},expression:"$i18n.locale"}},[n("template",{slot:"first"},t._l(t.langs,function(e,a){return n("option",{key:"Lang"+a,domProps:{value:e.code,selected:t.$i18n.locale==e.code}},[t._v(t._s(e.text))])}),0)],2)],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},254:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},["none"!=this.$route.meta.layout?n("v-navigation-drawer",{attrs:{fixed:"",app:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{on:{click:t.login}},[n("v-list-tile-action",[n("v-icon",[t._v("home")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[t._v("Home")])],1)],1),t._v(" "),n("v-list-tile",{on:{click:t.login}},[n("v-list-tile-action",[n("v-icon",[t._v("contact_mail")])],1),t._v(" "),n("v-list-tile-content",[n("v-list-tile-title",[n("LocalesChanger")],1)],1)],1)],1)],1):t._e(),t._v(" "),"none"!=this.$route.meta.layout?n("v-toolbar",{staticClass:"black--text",attrs:{color:"elevation-0 default",fixed:"",app:""}},[n("v-toolbar-side-icon",{staticClass:"black--text",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-toolbar-title",{attrs:{to:"/"}},[t._v("Application")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-toolbar-items",[n("v-btn",{staticClass:"info--text",attrs:{flat:"",to:"/jesus"}},[t._v(t._s(t.$t("hello",["Jesús"])))]),t._v(" "),n("v-btn",{staticClass:"success--text",attrs:{flat:"",to:"/component1"}},[t._v("component 1")]),t._v(" "),n("v-btn",{staticClass:"warning--text",attrs:{flat:"",to:"/apitest"}},[t._v("Api test")])],1)],1):t._e(),t._v(" "),n("v-content",[n("v-container",{attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-start":""}},[n("router-view")],1)],1)],1),t._v(" "),n("v-footer",{attrs:{color:"default",app:""}},[t._v("\r\n       "),n("span",{},[t._v("© "+t._s(t.year))])])],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},360:function(t,e){},361:function(t,e){},362:function(t,e,n){"use strict";var a=n(13),o=n(363),r=n(364),s=n(400),i=n.n(s),c=n(401);n.n(c);a.default.use(o.a);var u=new o.a({base:"/",mode:"hash",linkActiveClass:"active",routes:r.a});u.beforeEach(function(t,e,n){i.a.start(),n()}),u.afterEach(function(t,e){i.a.done()}),e.a=u},364:function(t,e,n){"use strict";var a=n(365),o=n(193),r=n(375),s=n(378);e.a=[{path:"*",meta:{public:!0},redirect:{path:"/404"}},{path:"/404",meta:{public:!0,layout:"none"},name:"NotFound",component:function(){return n.e(0).then(n.bind(null,424))}},{path:"/403",meta:{public:!0,layout:"none"},name:"AccessDenied",component:function(){return n.e(0).then(n.bind(null,425))}},{path:"/500",meta:{public:!0,layout:"none"},name:"ServerError",component:function(){return n.e(0).then(n.bind(null,426))}},{path:"/",name:"Hello",meta:{public:!0},component:a.a},{path:"/jesus/:id?",name:"jesus",meta:{layout:"backend",public:!1},component:o.a},{path:"/component1",name:"component1",meta:{public:!0},component:r.a},{path:"/apitest",name:"apitest",meta:{layout:"backend",public:!1},component:s.a}]},365:function(t,e,n){"use strict";function a(t){n(366)}var o=n(192),r=n(367),s=n(19),i=a,c=s(o.a,r.a,!1,i,null,null);e.a=c.exports},366:function(t,e){},367:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("h2",[t._v("Welcome to Reymad")])])},o=[],r={render:a,staticRenderFns:o};e.a=r},368:function(t,e){},369:function(t,e,n){"use strict";function a(t){return t=t||"",""+t.substr(0,1).toUpperCase()+t.slice(1)}function o(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,e="",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=0;a<t;a++)e+=n.charAt(Math.floor(Math.random()*n.length));return e}var r,s=n(370),i=n.n(s),c=function(){console.log("Util::jesusTest > It works!")},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return t[Math.floor(Math.random()*t.length)]},l=function(t){return(t||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},f=function(){var t=window.document,e=t.documentElement,n=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen,a=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen;t.fullscreenElement||t.mozFullScreenElement||t.webkitFullscreenElement||t.msFullscreenElement?a.call(t):n.call(e)};e.a=(r={randomElement:u,toggleFullScreen:f,kebab:l,randomString:o},i()(r,"randomString",o),i()(r,"capitalize",a),i()(r,"jesusTest",c),r)},374:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"jesus"},[n("h1",[t._v(t._s(t.title))]),t._v(" "),n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.jesusSalutes(e)}}},[t._v("Jesús component works!")]),t._v(" "),n("p",[t._v(t._s(t._f("truncate")(t._f("toUSD")(t._f("toUpper")(t.text)),5)))]),t._v(" "),n("br"),t._v(" "),n("b-button",{attrs:{variant:"outline-primary"},on:{click:t.testGlobalEvent}},[t._v(" Test Global event")]),t._v(" "),n("br"),t._v(" "),n("b-button",{attrs:{variant:"outline-success"},on:{click:t.handleFullScreen}},[t._v(" toggle full screen")]),t._v(" "),n("br"),t._v(" "),n("b-button",{attrs:{variant:"outline-warning"},on:{click:t.kebab}},[t._v(" Kebab something and change... ")]),t._v(" "),n("div",[n("p",[t._v("Pluralization: ")]),t._v(" "),n("p",[t._v(t._s(t.$tc("apple",10,{count:10})))]),t._v(" "),n("p",[t._v(t._s(t.$tc("car",1)))]),t._v(" "),n("p",[t._v(t._s(t.$tc("test | tests",1)))]),t._v(" "),n("p",[t._v(t._s(t.$tc("This is a {count} | This are a {count} | This are a lot of {count}",12,{count:12})))])])],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},375:function(t,e,n){"use strict";function a(t){n(376)}var o=n(195),r=n(377),s=n(19),i=a,c=s(o.a,r.a,!1,i,"data-v-2fe93438",null);e.a=c.exports},376:function(t,e){},377:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"comp1"},[n("h1",[t._v(t._s(t.title))])]),t._v(" "),n("Jesus")],1)},o=[],r={render:a,staticRenderFns:o};e.a=r},378:function(t,e,n){"use strict";var a=n(196),o=n(399),r=n(19),s=r(a.a,o.a,!1,null,null,null);e.a=s.exports},379:function(t,e,n){"use strict";var a=n(380),o=n.n(a);e.a={getAll:function(){return o.a.get("https://api.coindesk.com/v1/bpi/currentprice.json")},get:function(t){return o.a.get(RESOURCE_NAME+"/"+t)},create:function(t){return o.a.post(RESOURCE_NAME,t)},update:function(t,e){return o.a.put(RESOURCE_NAME+"/"+t,e)},delete:function(t){return o.a.delete(RESOURCE_NAME+"/"+t)}}},399:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"api"},[n("h1",[t._v("Bitcoin Price Index")]),t._v(" "),t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):n("section",[t.loading?n("div",[t._v("Loading...")]):t._l(t.info.bpi,function(e){return n("div",{key:e.code,staticClass:"currency"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-title",[n("div",[n("span",{staticClass:"grey--text"},[t._v(t._s(e.description)+":")]),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(e.symbol)}}),t._v(t._s(t._f("currencydecimal")(e.rate_float))+" "),n("br"),t._v(" "),t.info?n("span",{staticClass:"text-primary"},[t._v("Timestamp: "+t._s(t.info.time.updated)+" ")]):t._e(),t._v(" "),n("br")])])],1)],1)],1)],1)})],2)])},o=[],r={render:a,staticRenderFns:o};e.a=r},401:function(t,e){},402:function(t,e,n){"use strict";var a=n(13),o=n(403);a.default.use(o.a),e.a=new o.a.Store({state:{},mutations:{},actions:{}})},404:function(t,e,n){"use strict";var a=n(13);a.default.filter("toUpper",function(t){return t.toUpperCase()}),a.default.filter("capitalize",function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),a.default.filter("toLower",function(t){return t.toLowerCase()}),a.default.filter("trim",function(t){return t.trim()}),a.default.filter("toUSD",function(t){return"$"+t}),a.default.filter("truncate",function(t,e){return t.length>e?t.substr(0,e)+"...":t}),a.default.filter("currencydecimal",function(t){return t.toFixed(2)})},405:function(t,e,n){"use strict";n(13).default.mixin({data:function(){return{test:{title:"Soy el title"}}}})},406:function(t,e,n){"use strict";var a=n(13),o=n(407);a.default.use(o.a),e.a=new o.a({locale:Object({NODE_ENV:"production",IS_DEBUG:!1,SENDGRID_API_KEY:"YOUR_SENDGRID_APIKEY_PROD>"}).VUE_APP_I18N_LOCALE||"en_us",fallbackLocale:Object({NODE_ENV:"production",IS_DEBUG:!1,SENDGRID_API_KEY:"YOUR_SENDGRID_APIKEY_PROD>"}).VUE_APP_I18N_FALLBACK_LOCALE||"en_us",messages:function(){var t=n(408),e={};return t.keys().forEach(function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var o=a[1];e[o]=t(n)}}),e}()})},408:function(t,e,n){function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./en_us.json":409,"./es_es.json":410};a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id=408},409:function(t,e){t.exports={en_us:"English (US)",hello:"Hello {0} i18n in SFC!",welcome:"Welcome!","yes-button":"Yes","no-button":"No!","Language changed":"Language changed to '({0})'",apple:"no apples | one apple | {count} apples",car:"Car | Cars","test | tests":"Tests | Tests","This is a {count} | This are a {count} | This are a lot of {count}":"This is a {count} | This are a {count} | This are a lot of {count}"}},410:function(t,e){t.exports={es_es:"Español (ES)",hello:"Hola {0} i18n en SFC!",welcome:"Bienvenido!","yes-button":"Si","no-button":"No!","Language changed":"Idioma cambiado a '({0})'",apple:"No hay manzanas | Dos manzanas | {count} manzanas",car:"Coche | Coches","test | tests":"Prueba | Pruebas","This is a {count} | This are a {count} | This are a lot of {count}":"Esto es una {count} | Estos son unos {count} | Estos son un montón de {count}"}},411:function(t,e,n){"use strict";var a=n(13),o=n(412),r=n.n(o),s=n(414);n.n(s);window.toastr=n(415),a.default.use(r.a,{prventDuplicates:!0,timeout:3e3,extendedTimeOut:6e3,progressBar:!0,rtl:!0,escapeHtml:!0,positionClass:"toast-bottom-left"})},414:function(t,e){},417:function(t,e,n){"use strict";var a=n(13),o=n(418),r=n.n(o),s=n(419),i=(n.n(s),n(420));n.n(i);a.default.use(r.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FF69B4",custom:"#ffffff"},customProperties:!0,iconfont:"md",rtl:!1})},419:function(t,e){},420:function(t,e){},421:function(t,e){}},[203]);
//# sourceMappingURL=app.186d2af7e8e0a53dc88e.js.map