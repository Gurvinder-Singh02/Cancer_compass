"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{7543:(C,v,g)=>{g.d(v,{c:()=>c});var m=g(1308),u=g(7864),i=g(1911);const c=(s,n)=>{let t,e;const a=(l,y,f)=>{if(typeof document>"u")return;const w=document.elementFromPoint(l,y);w&&n(w)?w!==t&&(h(),r(w,f)):h()},r=(l,y)=>{t=l,e||(e=t);const f=t;(0,m.c)(()=>f.classList.add("ion-activated")),y()},h=(l=!1)=>{if(!t)return;const y=t;(0,m.c)(()=>y.classList.remove("ion-activated")),l&&e!==t&&t.click(),t=void 0};return(0,i.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>a(l.currentX,l.currentY,u.a),onMove:l=>a(l.currentX,l.currentY,u.b),onEnd:()=>{h(!0),(0,u.h)(),e=void 0}})}},2225:(C,v,g)=>{g.d(v,{g:()=>m});const m=(n,t,e,a,r)=>i(n[1],t[1],e[1],a[1],r).map(h=>u(n[0],t[0],e[0],a[0],h)),u=(n,t,e,a,r)=>r*(3*t*Math.pow(r-1,2)+r*(-3*e*r+3*e+a*r))-n*Math.pow(r-1,3),i=(n,t,e,a,r)=>s((a-=r)-3*(e-=r)+3*(t-=r)-(n-=r),3*e-6*t+3*n,3*t-3*n,n).filter(l=>l>=0&&l<=1),s=(n,t,e,a)=>{if(0===n)return((n,t,e)=>{const a=t*t-4*n*e;return a<0?[]:[(-t+Math.sqrt(a))/(2*n),(-t-Math.sqrt(a))/(2*n)]})(t,e,a);const r=(3*(e/=n)-(t/=n)*t)/3,h=(2*t*t*t-9*t*e+27*(a/=n))/27;if(0===r)return[Math.pow(-h,1/3)];if(0===h)return[Math.sqrt(-r),-Math.sqrt(-r)];const l=Math.pow(h/2,2)+Math.pow(r/3,3);if(0===l)return[Math.pow(h/2,.5)-t/3];if(l>0)return[Math.pow(-h/2+Math.sqrt(l),1/3)-Math.pow(h/2+Math.sqrt(l),1/3)-t/3];const y=Math.sqrt(Math.pow(-r/3,3)),f=Math.acos(-h/(2*Math.sqrt(Math.pow(-r/3,3)))),w=2*Math.pow(y,1/3);return[w*Math.cos(f/3)-t/3,w*Math.cos((f+2*Math.PI)/3)-t/3,w*Math.cos((f+4*Math.PI)/3)-t/3]}},5062:(C,v,g)=>{g.d(v,{i:()=>m});const m=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5106:(C,v,g)=>{g.r(v),g.d(v,{startFocusVisible:()=>c});const m="ion-focused",i=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=s=>{let n=[],t=!0;const e=s?s.shadowRoot:document,a=s||document.body,r=b=>{n.forEach(d=>d.classList.remove(m)),b.forEach(d=>d.classList.add(m)),n=b},h=()=>{t=!1,r([])},l=b=>{t=i.includes(b.key),t||r([])},y=b=>{if(t&&void 0!==b.composedPath){const d=b.composedPath().filter(p=>!!p.classList&&p.classList.contains("ion-focusable"));r(d)}},f=()=>{e.activeElement===a&&r([])};return e.addEventListener("keydown",l),e.addEventListener("focusin",y),e.addEventListener("focusout",f),e.addEventListener("touchstart",h),e.addEventListener("mousedown",h),{destroy:()=>{e.removeEventListener("keydown",l),e.removeEventListener("focusin",y),e.removeEventListener("focusout",f),e.removeEventListener("touchstart",h),e.removeEventListener("mousedown",h)},setFocus:r}}},7040:(C,v,g)=>{g.d(v,{C:()=>s,a:()=>i,d:()=>c});var m=g(5861),u=g(5730);const i=function(){var n=(0,m.Z)(function*(t,e,a,r,h,l){var y;if(t)return t.attachViewToDom(e,a,h,r);if(!(l||"string"==typeof a||a instanceof HTMLElement))throw new Error("framework delegate is missing");const f="string"==typeof a?null===(y=e.ownerDocument)||void 0===y?void 0:y.createElement(a):a;return r&&r.forEach(w=>f.classList.add(w)),h&&Object.assign(f,h),e.appendChild(f),yield new Promise(w=>(0,u.c)(f,w)),f});return function(e,a,r,h,l,y){return n.apply(this,arguments)}}(),c=(n,t)=>{if(t){if(n)return n.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()},s=()=>{let n,t;return{attachViewToDom:function(){var r=(0,m.Z)(function*(h,l,y={},f=[]){var w,b;if(n=h,l){const p="string"==typeof l?null===(w=n.ownerDocument)||void 0===w?void 0:w.createElement(l):l;f.forEach(o=>p.classList.add(o)),Object.assign(p,y),n.appendChild(p),yield new Promise(o=>(0,u.c)(p,o))}else if(n.children.length>0&&!n.children[0].classList.contains("ion-delegate-host")){const o=null===(b=n.ownerDocument)||void 0===b?void 0:b.createElement("div");o.classList.add("ion-delegate-host"),f.forEach(_=>o.classList.add(_)),o.append(...n.children),n.appendChild(o)}const d=document.querySelector("ion-app")||document.body;return t=document.createComment("ionic teleport"),n.parentNode.insertBefore(t,n),d.appendChild(n),n});return function(l,y){return r.apply(this,arguments)}}(),removeViewFromDom:()=>(n&&t&&(t.parentNode.insertBefore(n,t),t.remove()),Promise.resolve())}}},7864:(C,v,g)=>{g.d(v,{a:()=>c,b:()=>s,c:()=>i,d:()=>t,h:()=>n});const m={getEngine(){var e;const a=window;return a.TapticEngine||(null===(e=a.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Haptics"))&&a.Capacitor.Plugins.Haptics},available(){var e;const a=window;return!!this.getEngine()&&("web"!==(null===(e=a.Capacitor)||void 0===e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate)},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const a=this.getEngine();if(!a)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;a.impact({style:r})},notification(e){const a=this.getEngine();if(!a)return;const r=this.isCapacitor()?e.style.toUpperCase():e.style;a.notification({style:r})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();!e||(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},u=()=>m.available(),i=()=>{u()&&m.selection()},c=()=>{u()&&m.selectionStart()},s=()=>{u()&&m.selectionChanged()},n=()=>{u()&&m.selectionEnd()},t=e=>{u()&&m.impact(e)}},6642:(C,v,g)=>{g.d(v,{I:()=>s,a:()=>r,b:()=>n,c:()=>y,d:()=>w,f:()=>h,g:()=>a,i:()=>e,p:()=>f,r:()=>b,s:()=>l});var m=g(5861),u=g(5730),i=g(4147);const s="ion-content",n=".ion-content-scroll-host",t=`${s}, ${n}`,e=d=>"ION-CONTENT"===d.tagName,a=function(){var d=(0,m.Z)(function*(p){return e(p)?(yield new Promise(o=>(0,u.c)(p,o)),p.getScrollElement()):p});return function(o){return d.apply(this,arguments)}}(),r=d=>d.querySelector(n)||d.querySelector(t),h=d=>d.closest(t),l=(d,p)=>e(d)?d.scrollToTop(p):Promise.resolve(d.scrollTo({top:0,left:0,behavior:p>0?"smooth":"auto"})),y=(d,p,o,_)=>e(d)?d.scrollByPoint(p,o,_):Promise.resolve(d.scrollBy({top:o,left:p,behavior:_>0?"smooth":"auto"})),f=d=>(0,i.a)(d,s),w=d=>{if(e(d)){const o=d.scrollY;return d.scrollY=!1,o}return d.style.setProperty("overflow","hidden"),!0},b=(d,p)=>{e(d)?d.scrollY=p:d.style.removeProperty("overflow")}},2357:(C,v,g)=>{g.d(v,{a:()=>m,b:()=>l,c:()=>t,d:()=>y,e:()=>k,f:()=>n,g:()=>f,h:()=>i,i:()=>u,j:()=>o,k:()=>_,l:()=>e,m:()=>r,n:()=>w,o:()=>a,p:()=>s,q:()=>c,r:()=>p,s:()=>E,t:()=>h,u:()=>b,v:()=>d});const m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Back</title><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Arrow Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Back</title><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Down</title><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Caret Up</title><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Checkmark</title><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Back</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Down</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Chevron Forward</title><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close Circle</title><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Close</title><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipse</title><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Ellipsis Horizontal</title><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Menu</title><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Remove</title><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Three</title><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Reorder Two</title><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",k="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><title>Search</title><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},8439:(C,v,g)=>{g.d(v,{s:()=>m});const m=e=>{try{if(e instanceof t)return e.value;if(!c()||"string"!=typeof e||""===e)return e;const a=document.createDocumentFragment(),r=document.createElement("div");a.appendChild(r),r.innerHTML=e,n.forEach(f=>{const w=a.querySelectorAll(f);for(let b=w.length-1;b>=0;b--){const d=w[b];d.parentNode?d.parentNode.removeChild(d):a.removeChild(d);const p=i(d);for(let o=0;o<p.length;o++)u(p[o])}});const h=i(a);for(let f=0;f<h.length;f++)u(h[f]);const l=document.createElement("div");l.appendChild(a);const y=l.querySelector("div");return null!==y?y.innerHTML:l.innerHTML}catch(a){return console.error(a),""}},u=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let r=e.attributes.length-1;r>=0;r--){const h=e.attributes.item(r),l=h.name;if(!s.includes(l.toLowerCase())){e.removeAttribute(l);continue}const y=h.value;null!=y&&y.toLowerCase().includes("javascript:")&&e.removeAttribute(l)}const a=i(e);for(let r=0;r<a.length;r++)u(a[r])},i=e=>null!=e.children?e.children:e.childNodes,c=()=>{var e;const a=window,r=null===(e=null==a?void 0:a.Ionic)||void 0===e?void 0:e.config;return!r||(r.get?r.get("sanitizerEnabled",!0):!0===r.sanitizerEnabled||void 0===r.sanitizerEnabled)},s=["class","id","href","src","name","slot"],n=["script","style","iframe","meta","link","object","embed"];class t{constructor(a){this.value=a}}},1316:(C,v,g)=>{g.r(v),g.d(v,{KEYBOARD_DID_CLOSE:()=>u,KEYBOARD_DID_OPEN:()=>m,copyVisualViewport:()=>p,keyboardDidClose:()=>f,keyboardDidOpen:()=>l,keyboardDidResize:()=>y,resetKeyboardAssist:()=>t,setKeyboardClose:()=>h,setKeyboardOpen:()=>r,startKeyboardAssist:()=>e,trackViewportChanges:()=>d});const m="ionKeyboardDidShow",u="ionKeyboardDidHide";let c={},s={},n=!1;const t=()=>{c={},s={},n=!1},e=o=>{a(o),o.visualViewport&&(s=p(o.visualViewport),o.visualViewport.onresize=()=>{d(o),l()||y(o)?r(o):f(o)&&h(o)})},a=o=>{o.addEventListener("keyboardDidShow",_=>r(o,_)),o.addEventListener("keyboardDidHide",()=>h(o))},r=(o,_)=>{w(o,_),n=!0},h=o=>{b(o),n=!1},l=()=>!n&&c.width===s.width&&(c.height-s.height)*s.scale>150,y=o=>n&&!f(o),f=o=>n&&s.height===o.innerHeight,w=(o,_)=>{const k=new CustomEvent(m,{detail:{keyboardHeight:_?_.keyboardHeight:o.innerHeight-s.height}});o.dispatchEvent(k)},b=o=>{const _=new CustomEvent(u);o.dispatchEvent(_)},d=o=>{c=Object.assign({},s),s=p(o.visualViewport)},p=o=>({width:Math.round(o.width),height:Math.round(o.height),offsetTop:o.offsetTop,offsetLeft:o.offsetLeft,pageTop:o.pageTop,pageLeft:o.pageLeft,scale:o.scale})},9852:(C,v,g)=>{g.d(v,{c:()=>u});var m=g(3457);const u=i=>{let c,s,n;const t=()=>{c=()=>{n=!0,i&&i(!0)},s=()=>{n=!1,i&&i(!1)},null==m.w||m.w.addEventListener("keyboardWillShow",c),null==m.w||m.w.addEventListener("keyboardWillHide",s)};return t(),{init:t,destroy:()=>{null==m.w||m.w.removeEventListener("keyboardWillShow",c),null==m.w||m.w.removeEventListener("keyboardWillHide",s),c=s=void 0},isKeyboardVisible:()=>n}}},7741:(C,v,g)=>{g.d(v,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(i,c,s)=>{const n=i*c/s-i+"ms",t=2*Math.PI*c/s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(i,c,s)=>{const n=c/s,t=i*n-i+"ms",e=2*Math.PI*n;return{r:5,style:{top:9*Math.sin(e)+"px",left:9*Math.cos(e)+"px","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(i,c)=>({r:6,style:{left:9-9*c+"px","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(i,c,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":i*c/s-i+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(i,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*c+(c<s/2?180:-180)}deg)`,"animation-delay":i*c/s-i+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(i,c,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":i*c/s-i+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(i,c,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":i*c/s-i+"ms"}})}}},1959:(C,v,g)=>{g.r(v),g.d(v,{createSwipeBackGesture:()=>s});var m=g(5730),u=g(5062),i=g(1911);g(4349);const s=(n,t,e,a,r)=>{const h=n.ownerDocument.defaultView,l=(0,u.i)(n),f=o=>l?-o.deltaX:o.deltaX;return(0,i.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:o=>(o=>{const{startX:E}=o;return l?E>=h.innerWidth-50:E<=50})(o)&&t(),onStart:e,onMove:o=>{const E=f(o)/h.innerWidth;a(E)},onEnd:o=>{const _=f(o),E=h.innerWidth,k=_/E,T=(o=>l?-o.velocityX:o.velocityX)(o),M=T>=0&&(T>.2||_>E/2),B=(M?1-k:k)*E;let x=0;if(B>5){const A=B/Math.abs(T);x=Math.min(A,540)}r(M,k<=0?.01:(0,m.l)(0,k,.9999),x)}})}},5830:(C,v,g)=>{g.d(v,{s:()=>u});var m=g(8256);let u=(()=>{class i{constructor(){this.items=[{id:1,name:"Breast Cancer",description:" A disease in which breast calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Breast size .",description2:"Breast Cancer is a multifactorial disease characterized by uncontrolled growth of the breast cells. In other terms, the normal cells keep on dividing instead of dying after completion of their specific lifetime (termed as cancer cells) and form tumour that invade the nearby tissues and organs. Breast cancer is a multifactorial disease. It develops in response to many biological and molecular changes in the body, such as environmental, genetic, and hormonal changes",description3:"Breast cancer is the formation lump, which is an extra mass of cells or tissues. These lumps may be observed/felt as a hard mass bulging out or within the skin may or may not accompanied with pain, swellings or redness.",img:"assets/Category-main/Breast-Cancer/raw main.png",bgimg:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/raw main.png')",bgimg2:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg2.jpg')",bgimg3:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/Breast-Cancer/bg3.jpg')",survivalrate:90,stages:4,types:8,I_factors:"Intrinsic factors (risk factors that cannot be changed)",factors_details1:["Age: it is the most noticed and studied risk factor. The chances of having breast cancer increase with an increase in age among women, especially around menopause While low Among women below 45 years old. There are certain types of breast cancers that occur more frequently than other for instance, ER-positive breast cancer occurs more frequently in all women, especially the age group between 40 to 59 A study has correlated the oestrogen receptor overexpression with increase in age prominently up to 50 years of age(approximately near or after menopause)","Gender: Breast cancer is highly prevalent in females due higher response of hormones involved in breast development.Only 1% of male suffers from sporadic cancer and<1% experience inherited breast cancer","Genetic: Breast cancer can also be inherited from the parents.BRCA1 and BRCA2 genes are known to repair damaged DNA.They are also known as tumor- suppressing genes.Any mutation in these genes leads to abnormal cell growth that causes breast cancer among women.The change in coding sequence may result in hereditary syndromes called HBC - SS(Hereditary Breast Cancer Site Speci\ufb01c) or HBOC(Hereditary Breast Ovarian Cancer) syndrome which manifests as breast cancer","Early menarche and late menopause, both are risk factors for breast cancer. The chances of breast cancer raise by 3% with each year of delay in menopause while 5% in the case of early menarche","Women who give birth at an early age more than once reduce the risk of breast malignancy by 30% whereas nulliparous women elevate the risk of breast cancer. Moreover, the first pregnancy after 30 years of age may increase the chances while in giving birth in the early 20 reduces the chances of breast cancer development","Lactation: Lactation protects against breast cancer effectively. The reports studying correlation between childbirth and lactation periods suggests that longer lactation periods may reduce the risk of breast cancer development by 50%. Lengthier the lactation duration more will be the safety","Family history: The first-grade generation (Those who are first diagnosed with breast neoplasm) pose a risk for blood relatives such as mothers and sisters. This happens when a mutated copy of BRCA1 and BRCA2 has been inherited from the mother. The chances two folds increase when there are more than two members suffering breast cancer in the first-grade generation.","Environment: Many natural factors are concluded as possible risk factors. One of the most important intrinsic risk factors is ultraviolet radiation. Exposure to ionizing radiations induce the DNA damage and result in mutated genes enhancing the risk of cancer development "],E_factors:"Extrinsic factors (risk factors that can be changed)",E_factors_Details:{Lifestyle:"Physically inactivity i.e. not exercising results in significant weight gain. It can further result in obesity which is associated with elevated levels of estrogen in females, particularly after menopause. An increase in insulin and related growth factors due to obesity may initiate uncontrolled cell growth. It was reported that women exercising 3-5 times a week reduces the risk by 20-30%",Diet:["Alcohol consumption: Alcohol consumption has been linked to many other diseases since a long time. Estrogen and related hormones gets elevated in the blood and further stimulates the estrogen-related pathways. According to a meta-analysis, consuming 34-55 grams of alcohol per day increases the chances of breast cancer by 32% and an additional 7.1% if 10 grams of more alcohol is consumed per day","Combination of high fat and processed food with flavouring agents and preservatives (infused chemicals to enhance the flavour and shelf life of food, respectively) is harmful to menopausal women as it can increase the chances of neoplastic transformation of mammary cells without an increase in hormones. The consumption of red meat is also considered a risk factor for premenopausal women for positive breast cancer"],"Hormonal factors":"The most commonly used contraceptive pills are basically the combinations pills containing natural female estrogen and progesterone hormones which restrict the phase of ovulation and penetration of sperm. Some other hormones in form of contraceptive pill such as progestin, an artificial progesterone hormone are also being used for birth control. The Nurses\u2019 Health Study (2010) analysed that those females of age between 24 to 43 years had slightly increased risk of breast cancer risk, especially the females taking the \u2019Triphasic Pill\u2019- the pills containing three combinations of progestin and estrogen hormone concentrations. Breast cancer significantly increases among females taking estrogen and progesterone hormones or contraceptive pills at early age as of 15 years There are some controversial statements regarding hormone replacement therapy suggesting that it is used to treat the decreased production of hormones after menopause. In some cases, the HRT proves to be an efficient method but, in some cases, it may counter breast cancer or increases the risk. Based on the duration and type of HRT therapy (estrogen-progesterone HRT or Oestrogen- HRT) the chances of breast cancer vary"},types_details:["Angiosarcoma","Ductal carcinoma in situ (DCIS)","Inflammatory breast cancer","Invasive lobular carcinoma","Lobular carcinoma in situ (LCIS)","Male breast cancer","Paget&#39;s disease of the breast","Recurrent / relapsing breast","cancer"],type_img:"assets/Category-main/Breast-Cancer/types_.png",stages_details:["Non-invasive (in situ) cancer","Cancer is 2 cm or smaller and has not spread to the lymph nodes","Cancer is larger than 2 cm and has not spread to the lymph nodes","Cancer has spread to the lymph nodes","Cancer has spread to other parts of the body"],symptoms:["A lump or thickening in the breast or underarm area","A change in the size or shape of the breast","Nipple discharge or inversion","Skin changes, such as redness, dimpling, or puckering","Pain or tenderness in the breast","Swelling in the breast or armpit","A rash around the nipple","Changes in the texture or appearance of the skin on the breast"],symptoms_img:"assets/Category-main/Breast-Cancer/aware_group.png",treatments:{define:"Breast cancer treatments may vary depending on the stage of the cancer and other factors such as age, general health status of the patient. Here are some common treatment opti",options:["Surgery: Surgery is the most common treatment for breast cancer. The type of surgery depends on the stage of the cancer. In some cases, a lumpectomy (removing only the tumor and some surrounding tissue) is performed, while in other cases a mastectomy (removing the entire breast) may be needed.","Radiation therapy: Radiation therapy involves using high-energy beams to destroy cancer cells. It may be used after surgery to kill any remaining cancer cells or in combination with chemotherapy.","Chemotherapy: Chemotherapy uses drugs to kill cancer cells throughout the body. It can be administered orally or intravenously.","Hormonal therapy: Hormonal therapy is used to treat hormone receptor-positive breast cancers. This type of cancer grows in response to estrogen or progesterone hormones. Hormonal therapy either lowers the level of these hormones in the body or blocks their effect on breast cancer cells.","Targeted therapy: Targeted therapy is a newer type of treatment that targets specific genes, proteins, or tissues that contribute to the growth of cancer cells. Herceptin is an example of a targeted therapy drug used to treat breast cancer."],note:"It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation."},treatments_img:"assets/Category-main/Breast-Cancer/treatment.png"},{id:2,name:"Cervical Cancer",description:"A disease in which cells of the cervix undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Cervix size .",img:"assets/Category-main/cervical-cancer/raw main.png",bgimg:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/cervical-cancer/raw main.png')",survivalrate:90,stages:4,types:8,I_factors:"Intrinsic factors (risk factors that cannot be changed)",factors_details1:["Age: it is the most noticed and studied risk factor. The chances of having breast cancer increase with an increase in age among women, especially around menopause While low Among women below 45 years old. There are certain types of breast cancers that occur more frequently than other for instance, ER-positive breast cancer occurs more frequently in all women, especially the age group between 40 to 59 A study has correlated the oestrogen receptor overexpression with increase in age prominently up to 50 years of age(approximately near or after menopause)","Gender: Breast cancer is highly prevalent in females due higher response of hormones involved in breast development.Only 1% of male suffers from sporadic cancer and<1% experience inherited breast cancer","Genetic: Breast cancer can also be inherited from the parents.BRCA1 and BRCA2 genes are known to repair damaged DNA.They are also known as tumor- suppressing genes.Any mutation in these genes leads to abnormal cell growth that causes breast cancer among women.The change in coding sequence may result in hereditary syndromes called HBC - SS(Hereditary Breast Cancer Site Speci\ufb01c) or HBOC(Hereditary Breast Ovarian Cancer) syndrome which manifests as breast cancer","Early menarche and late menopause, both are risk factors for breast cancer. The chances of breast cancer raise by 3% with each year of delay in menopause while 5% in the case of early menarche","Women who give birth at an early age more than once reduce the risk of breast malignancy by 30% whereas nulliparous women elevate the risk of breast cancer. Moreover, the first pregnancy after 30 years of age may increase the chances while in giving birth in the early 20 reduces the chances of breast cancer development","Lactation: Lactation protects against breast cancer effectively. The reports studying correlation between childbirth and lactation periods suggests that longer lactation periods may reduce the risk of breast cancer development by 50%. Lengthier the lactation duration more will be the safety","Family history: The first-grade generation (Those who are first diagnosed with breast neoplasm) pose a risk for blood relatives such as mothers and sisters. This happens when a mutated copy of BRCA1 and BRCA2 has been inherited from the mother. The chances two folds increase when there are more than two members suffering breast cancer in the first-grade generation.","Environment: Many natural factors are concluded as possible risk factors. One of the most important intrinsic risk factors is ultraviolet radiation. Exposure to ionizing radiations induce the DNA damage and result in mutated genes enhancing the risk of cancer development "],E_factors:"Extrinsic factors (risk factors that can be changed)",E_factors_Details:{Lifestyle:"Physically inactivity i.e. not exercising results in significant weight gain. It can further result in obesity which is associated with elevated levels of estrogen in females, particularly after menopause. An increase in insulin and related growth factors due to obesity may initiate uncontrolled cell growth. It was reported that women exercising 3-5 times a week reduces the risk by 20-30%",Diet:["Alcohol consumption: Alcohol consumption has been linked to many other diseases since a long time. Estrogen and related hormones gets elevated in the blood and further stimulates the estrogen-related pathways. According to a meta-analysis, consuming 34-55 grams of alcohol per day increases the chances of breast cancer by 32% and an additional 7.1% if 10 grams of more alcohol is consumed per day","Combination of high fat and processed food with flavouring agents and preservatives (infused chemicals to enhance the flavour and shelf life of food, respectively) is harmful to menopausal women as it can increase the chances of neoplastic transformation of mammary cells without an increase in hormones. The consumption of red meat is also considered a risk factor for premenopausal women for positive breast cancer"],"Hormonal factors":"The most commonly used contraceptive pills are basically the combinations pills containing natural female estrogen and progesterone hormones which restrict the phase of ovulation and penetration of sperm. Some other hormones in form of contraceptive pill such as progestin, an artificial progesterone hormone are also being used for birth control. The Nurses\u2019 Health Study (2010) analysed that those females of age between 24 to 43 years had slightly increased risk of breast cancer risk, especially the females taking the \u2019Triphasic Pill\u2019- the pills containing three combinations of progestin and estrogen hormone concentrations. Breast cancer significantly increases among females taking estrogen and progesterone hormones or contraceptive pills at early age as of 15 years There are some controversial statements regarding hormone replacement therapy suggesting that it is used to treat the decreased production of hormones after menopause. In some cases, the HRT proves to be an efficient method but, in some cases, it may counter breast cancer or increases the risk. Based on the duration and type of HRT therapy (estrogen-progesterone HRT or Oestrogen- HRT) the chances of breast cancer vary"},types_details:["Angiosarcoma","Ductal carcinoma in situ (DCIS)","Inflammatory breast cancer","Invasive lobular carcinoma","Lobular carcinoma in situ (LCIS)","Male breast cancer","Paget&#39;s disease of the breast","Recurrent / relapsing breast","cancer"],type_img:"assets/Category-main/Breast-Cancer/types_.png",stages_details:["Non-invasive (in situ) cancer","Cancer is 2 cm or smaller and has not spread to the lymph nodes","Cancer is larger than 2 cm and has not spread to the lymph nodes","Cancer has spread to the lymph nodes","Cancer has spread to other parts of the body"],symptoms:["A lump or thickening in the breast or underarm area","A change in the size or shape of the breast","Nipple discharge or inversion","Skin changes, such as redness, dimpling, or puckering","Pain or tenderness in the breast","Swelling in the breast or armpit","A rash around the nipple","Changes in the texture or appearance of the skin on the breast"],symptoms_img:"assets/Category-main/Breast-Cancer/aware_group.png",treatments:{define:"Breast cancer treatments may vary depending on the stage of the cancer and other factors such as age, general health status of the patient. Here are some common treatment opti",options:["Surgery: Surgery is the most common treatment for breast cancer. The type of surgery depends on the stage of the cancer. In some cases, a lumpectomy (removing only the tumor and some surrounding tissue) is performed, while in other cases a mastectomy (removing the entire breast) may be needed.","Radiation therapy: Radiation therapy involves using high-energy beams to destroy cancer cells. It may be used after surgery to kill any remaining cancer cells or in combination with chemotherapy.","Chemotherapy: Chemotherapy uses drugs to kill cancer cells throughout the body. It can be administered orally or intravenously.","Hormonal therapy: Hormonal therapy is used to treat hormone receptor-positive breast cancers. This type of cancer grows in response to estrogen or progesterone hormones. Hormonal therapy either lowers the level of these hormones in the body or blocks their effect on breast cancer cells.","Targeted therapy: Targeted therapy is a newer type of treatment that targets specific genes, proteins, or tissues that contribute to the growth of cancer cells. Herceptin is an example of a targeted therapy drug used to treat breast cancer."],note:"It is important to discuss your treatment options with your doctor or oncologist to determine the best course of action for your specific situation."},treatments_img:"assets/Category-main/Breast-Cancer/treatment.png"},{id:3,name:"Colon Cancer",description:"A disease in which colon calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Colon size .",img:"assets/Category-main/colan-cancer/raw main.png",bgimg:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/colan-cancer/raw main.png')",survivalrate:90,stages:4,types:8},{id:4,name:"Lung Cancer",description:"A disease in which lung calls undergo abnormal growth resulting in formation of a lump known as tumor fllow by change in Lung size .",img:"assets/Category-main/lung-cancer/raw main.png",bgimg:"linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #262626 100%),url('assets/Category-main/lung-cancer/raw main.png')",survivalrate:90,stages:4,types:8}]}getItem(s){return this.items.find(t=>t.id==s)}}return i.\u0275fac=function(s){return new(s||i)},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);