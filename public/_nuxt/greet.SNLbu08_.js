import{l as K,h as z,s as q,m as I,q as $,v as M,x as U,y as W,z as V,u as S,A as J,k as G,B,C as Z,D as Q,f as X,E as Y,G as tt,r as R,o as C,c as F,a as O,H as et,g as P,t as st,p as rt,e as nt}from"./entry.qYQKh60x.js";import{_ as H}from"./_plugin-vue_export-helper.x3n3nnut.js";const at=r=>r==="defer"||r===!1;function it(...r){var b;const n=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(n);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=W(),o=()=>null,l=()=>a.isHydrating?a.payload.data[s]:a.static.data[s];t.server=t.server??!0,t.default=t.default??o,t.getCachedData=t.getCachedData??l,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??K.deep,t.dedupe=t.dedupe??"cancel";const c=()=>![null,void 0].includes(t.getCachedData(s));if(!a._asyncData[s]||!t.immediate){(b=a.payload._errors)[s]??(b[s]=null);const d=t.deep?z:q;a._asyncData[s]={data:d(t.getCachedData(s)??t.default()),pending:z(!c()),error:I(a.payload._errors,s),status:z("idle")}}const i={...a._asyncData[s]};i.refresh=i.execute=(d={})=>{if(a._asyncDataPromises[s]){if(at(d.dedupe??t.dedupe))return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if((d._initial||a.isHydrating&&d._initial!==!1)&&c())return Promise.resolve(t.getCachedData(s));i.pending.value=!0,i.status.value="pending";const g=new Promise((h,y)=>{try{h(e(a))}catch(D){y(D)}}).then(h=>{if(g.cancelled)return a._asyncDataPromises[s];let y=h;t.transform&&(y=t.transform(h)),t.pick&&(y=ot(y,t.pick)),a.payload.data[s]=y,i.data.value=y,i.error.value=null,i.status.value="success"}).catch(h=>{if(g.cancelled)return a._asyncDataPromises[s];i.error.value=V(h),i.data.value=S(t.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),p=t.server!==!1&&a.payload.serverRendered;{const d=J();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const h=d._nuxtOnBeforeMountCbs;d&&($(()=>{h.forEach(y=>{y()}),h.splice(0,h.length)}),M(()=>h.splice(0,h.length)))}p&&a.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&U(t.watch,()=>i.refresh());const g=a.hook("app:data:refresh",async h=>{(!h||h.includes(s))&&await i.refresh()});d&&M(g)}const u=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(u,i),u}function ot(r,n){const s={};for(const e of n)s[e]=r[e];return s}const j=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function ct(r,n){n?n={...j,...n}:n=j;const s=N(n);return s.dispatch(r),s.toString()}const ut=Object.freeze(["prototype","__proto__","constructor"]);function N(r){let n="",s=new Map;const e=t=>{n+=t};return{toString(){return n},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let o="";const l=a.length;l<10?o="unknown:["+a+"]":o=a.slice(8,l-1),o=o.toLowerCase();let c=null;if((c=s.get(t))===void 0)s.set(t,s.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):r.ignoreUnknown||this.unkown(t,o);else{let i=Object.keys(t);r.unorderedObjects&&(i=i.sort());let f=[];r.respectType!==!1&&!E(t)&&(f=ut),r.excludeKeys&&(i=i.filter(u=>!r.excludeKeys(u)),f=f.filter(u=>!r.excludeKeys(u))),e("object:"+(i.length+f.length)+":");const p=u=>{this.dispatch(u),e(":"),r.excludeValues||this.dispatch(t[u]),e(",")};for(const u of i)p(u);for(const u of f)p(u)}},array(t,a){if(a=a===void 0?r.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,l=t.map(c=>{const i=N(r);i.dispatch(c);for(const[f,p]of i.getContext())o.set(f,p);return i.toString()});return s=o,l.sort(),this.array(l,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),E(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,r.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const T="[native code] }",lt=T.length;function E(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-lt)===T}class w{constructor(n,s){n=this.words=n||[],this.sigBytes=s===void 0?n.length*4:s}toString(n){return(n||ft).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<n.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=n.words[s>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new w([...this.words])}}const ft={stringify(r){const n=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;n.push((e>>>4).toString(16),(e&15).toString(16))}return n.join("")}},ht={stringify(r){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,a=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,l=t<<16|a<<8|o;for(let c=0;c<4&&e*8+c*6<r.sigBytes*8;c++)s.push(n.charAt(l>>>6*(3-c)&63))}return s.join("")}},dt={parse(r){const n=r.length,s=[];for(let e=0;e<n;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new w(s,n)}},pt={parse(r){return dt.parse(unescape(encodeURIComponent(r)))}};class yt{constructor(){this._data=new w,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new w,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=pt.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,s){}_process(n){let s,e=this._data.sigBytes/(this.blockSize*4);n?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new w(s,a)}}class gt extends yt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const L=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],_t=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class mt extends gt{constructor(){super(...arguments),this._hash=new w([...L])}reset(){super.reset(),this._hash=new w([...L])}_doProcessBlock(n,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],l=e[3],c=e[4],i=e[5],f=e[6],p=e[7];for(let u=0;u<64;u++){if(u<16)x[u]=n[s+u]|0;else{const v=x[u-15],_=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,k=x[u-2],m=(k<<15|k>>>17)^(k<<13|k>>>19)^k>>>10;x[u]=_+x[u-7]+m+x[u-16]}const b=c&i^~c&f,d=t&a^t&o^a&o,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),h=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),y=p+h+b+_t[u]+x[u],D=g+d;p=f,f=i,i=c,c=l+y|0,l=o,o=a,a=t,t=y+D|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+l|0,e[4]=e[4]+c|0,e[5]=e[5]+i|0,e[6]=e[6]+f|0,e[7]=e[7]+p|0}finalize(n){super.finalize(n);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function wt(r){return new mt().finalize(r).toString(ht)}function bt(r,n={}){const s=typeof r=="string"?r:ct(r,n);return wt(s).slice(0,10)}function vt(r,n,s){const[e={},t]=typeof n=="string"?[{},n]:[n,s],a=G(()=>{let m=r;return typeof m=="function"&&(m=m()),B(m)}),o=e.key||bt([t,typeof a.value=="string"?a.value:"",...Bt(e)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const l=o===t?"$f"+o:o;if(!e.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:i,default:f,transform:p,pick:u,watch:b,immediate:d,getCachedData:g,deep:h,...y}=e,D=Z({...Q,...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),v={server:c,lazy:i,default:f,transform:p,pick:u,immediate:d,getCachedData:g,deep:h,watch:b===!1?[]:[D,a,...b||[]]};let _;return it(l,()=>{var A;(A=_==null?void 0:_.abort)==null||A.call(_),_=typeof AbortController<"u"?new AbortController:{};const m=B(e.timeout);return m&&setTimeout(()=>_.abort(),m),(e.$fetch||globalThis.$fetch)(a.value,{signal:_.signal,...D})},v)}function xt(r,n,s){const[e,t]=typeof n=="string"?[{},n]:[n,s];return vt(r,{...e,lazy:!0},t)}function Bt(r){var s;const n=[((s=B(r.method))==null?void 0:s.toUpperCase())||"GET",B(r.baseURL)];for(const e of[r.params||r.query]){const t=B(e);if(!t)continue;const a={};for(const[o,l]of Object.entries(t))a[B(o)]=B(l);n.push(a)}return n}const Dt=r=>(rt("data-v-016ec026"),r=r(),nt(),r),kt={class:"fetch-example-box w-50"},St=Dt(()=>O("div",{class:"fetch-example-box__header border-b-4 border-blue-600 mb-4 text-center"},[O("h4",{class:"text-h4 font-weight-bold py-4"},"Nuxt 3 Fetch Data From API")],-1)),Ct={class:"d-flex flex-row justify-center align-center mb-10 text-h6"},zt={key:0},Ot={class:"ml-2 font-weight-bold"},Ft={key:2,"data-testid":"message-value"},Pt=X({__name:"FetchExample",async setup(r){let n,s;const e=Y(),t=z(e.query.greeting??"from This Dot Labs!"),{data:a,pending:o,error:l}=([n,s]=tt(()=>xt(()=>`https://api.starter.dev/.netlify/functions/server/hello?greeting=${t.value}`,{watch:[t]},"$bRWMiDoZqc")),n=await n,s(),n);return U(()=>e.query.greeting,()=>{t.value=e.query.greeting??"from This Dot Labs!"}),(c,i)=>{const f=R("v-progress-circular"),p=R("v-alert");return C(),F("div",kt,[St,O("div",Ct,[S(l)?et("",!0):(C(),F("p",zt,"Message:")),O("div",Ot,[S(o)?(C(),P(f,{key:0,indeterminate:""})):S(l)?(C(),P(p,{key:1,type:"error",title:"Error",text:S(l).message,variant:"tonal"},null,8,["text"])):(C(),F("p",Ft,st(S(a)),1))])])])}}}),At=H(Pt,[["__scopeId","data-v-016ec026"]]),Mt={};function Rt(r,n){const s=At;return C(),P(s)}const Ut=H(Mt,[["render",Rt]]);export{Ut as default};
