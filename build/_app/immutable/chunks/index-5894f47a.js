function $(){}function rt(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function R(){return Object.create(null)}function E(t){t.forEach(U)}function G(t){return typeof t=="function"}function Tt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function kt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ct(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function At(t,e,n){t.$$.on_destroy.push(lt(e,n))}function St(t,e,n,i){if(t){const s=V(t,e,n,i);return t[0](s)}}function V(t,e,n,i){return t[1]&&i?rt(n.ctx.slice(),t[1](i(e))):n.ctx}function jt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let l=0;l<r;l+=1)u[l]=e.dirty[l]|s[l];return u}return e.dirty|s}return e.dirty}function Mt(t,e,n,i,s,u){if(s){const r=V(e,n,i,u);t.p(r,s)}}function Ct(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Ht(t){const e={};for(const n in t)e[n]=!0;return e}function Lt(t){return t??""}function Ot(t){return t&&G(t.destroy)?t.destroy:$}let C=!1;function ot(){C=!0}function ut(){C=!1}function ft(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function at(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&c.push(a)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,a=(s>0&&e[n[s]].claim_order<=o?s+1:ft(1,s,_=>e[n[_]].claim_order,o))-1;i[c]=n[a]+1;const d=a+1;n[d]=c,s=Math.max(d,s)}const u=[],r=[];let l=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)r.push(e[l]);l--}for(;l>=0;l--)r.push(e[l]);u.reverse(),r.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<r.length;c++){for(;o<u.length&&r[c].claim_order>=u[o].claim_order;)o++;const a=o<u.length?u[o]:null;t.insertBefore(r[c],a)}}function _t(t,e){if(C){for(at(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function dt(t,e,n){t.insertBefore(e,n||null)}function ht(t,e,n){C&&!n?_t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function X(t){return document.createElement(t)}function mt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Bt(){return z(" ")}function Dt(){return z("")}function Pt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Y(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:Y(t,i,e[i])}function Gt(t,e){Object.keys(e).forEach(n=>{yt(t,n,e[n])})}function yt(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:Y(t,e,n)}function pt(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,i,s=!1){Z(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),l}}for(let r=t.claim_info.last_index-1;r>=0;r--){const l=t[r];if(e(l)){const c=n(l);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function gt(t,e,n,i){return tt(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const l=s.attributes[r];n[l.name]||u.push(l.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function zt(t,e,n){return gt(t,e,n,X)}function xt(t,e){return tt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Ft(t){return xt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function It(t,e){const n=W(t,"HTML_TAG_START",0),i=W(t,"HTML_TAG_END",n);if(n===i)return new J(void 0,e);Z(t);const s=t.splice(n,i-n+1);M(s[0]),M(s[s.length-1]);const u=s.slice(1,s.length-1);for(const r of u)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(u,e)}function Rt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Wt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Jt(t,e,n){t.classList[n?"add":"remove"](e)}class wt{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=mt(n.nodeName):this.e=X(n.nodeName),this.t=n,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)dt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(M)}}class J extends wt{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)ht(this.t,this.n[n],e)}}function Kt(t,e){return new t(e)}let v;function b(t){v=t}function N(){if(!v)throw new Error("Function called outside component initialization");return v}function Qt(t){N().$$.on_mount.push(t)}function Ut(t){N().$$.after_update.push(t)}function Vt(t){N().$$.on_destroy.push(t)}function Xt(t,e){return N().$$.context.set(t,e),e}function Yt(t){return N().$$.context.get(t)}const w=[],K=[],S=[],Q=[],et=Promise.resolve();let P=!1;function nt(){P||(P=!0,et.then(it))}function Zt(){return nt(),et}function q(t){S.push(t)}const D=new Set;let x=0;function it(){if(x!==0)return;const t=v;do{try{for(;x<w.length;){const e=w[x];x++,b(e),bt(e.$$)}}catch(e){throw w.length=0,x=0,e}for(b(null),w.length=0,x=0;K.length;)K.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];D.has(n)||(D.add(n),n())}S.length=0}while(w.length);for(;Q.length;)Q.pop()();P=!1,D.clear(),b(t)}function bt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const j=new Set;let g;function te(){g={r:0,c:[],p:g}}function ee(){g.r||E(g.c),g=g.p}function st(t,e){t&&t.i&&(j.delete(t),t.i(e))}function $t(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),g.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function ne(t,e){$t(t,1,1,()=>{e.delete(t.key)})}function ie(t,e,n,i,s,u,r,l,c,o,a,d){let _=t.length,m=u.length,h=_;const H={};for(;h--;)H[t[h].key]=h;const T=[],L=new Map,O=new Map;for(h=m;h--;){const f=d(s,u,h),y=n(f);let p=r.get(y);p?i&&p.p(f,e):(p=o(y,f),p.c()),L.set(y,T[h]=p),y in H&&O.set(y,Math.abs(h-H[y]))}const F=new Set,I=new Set;function B(f){st(f,1),f.m(l,a),r.set(f.key,f),a=f.first,m--}for(;_&&m;){const f=T[m-1],y=t[_-1],p=f.key,k=y.key;f===y?(a=f.first,_--,m--):L.has(k)?!r.has(p)||F.has(p)?B(f):I.has(k)?_--:O.get(p)>O.get(k)?(I.add(p),B(f)):(F.add(k),_--):(c(y,r),_--)}for(;_--;){const f=t[_];L.has(f.key)||c(f,r)}for(;m;)B(T[m-1]);return T}function se(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],l=e[u];if(l){for(const c in r)c in l||(i[c]=1);for(const c in l)s[c]||(n[c]=l[c],s[c]=1);t[u]=l}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function re(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function le(t,e){t&&t.l(e)}function vt(t,e,n,i){const{fragment:s,after_update:u}=t.$$;s&&s.m(e,n),i||q(()=>{const r=t.$$.on_mount.map(U).filter(G);t.$$.on_destroy?t.$$.on_destroy.push(...r):E(r),t.$$.on_mount=[]}),u.forEach(q)}function Et(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Nt(t,e){t.$$.dirty[0]===-1&&(w.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function oe(t,e,n,i,s,u,r,l=[-1]){const c=v;b(t);const o=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:s,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:R(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};r&&r(o.root);let a=!1;if(o.ctx=n?n(t,e.props||{},(d,_,...m)=>{const h=m.length?m[0]:_;return o.ctx&&s(o.ctx[d],o.ctx[d]=h)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](h),a&&Nt(t,d)),_}):[],o.update(),a=!0,E(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ot();const d=pt(e.target);o.fragment&&o.fragment.l(d),d.forEach(M)}else o.fragment&&o.fragment.c();e.intro&&st(t.$$.fragment),vt(t,e.target,e.anchor,e.customElement),ut(),it()}b(c)}class ue{$destroy(){Et(this,1),this.$destroy=$}$on(e,n){if(!G(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as $,Zt as A,$ as B,kt as C,_t as D,Jt as E,At as F,St as G,Mt as H,Ct as I,jt as J,J as K,It as L,Xt as M,se as N,re as O,rt as P,ie as Q,ne as R,ue as S,Gt as T,qt as U,Ot as V,G as W,Lt as X,Pt as Y,E as Z,Yt as _,Bt as a,K as a0,Vt as a1,ht as b,Ft as c,ee as d,Dt as e,st as f,te as g,M as h,oe as i,Ut as j,X as k,zt as l,pt as m,Y as n,Qt as o,Wt as p,z as q,xt as r,Tt as s,$t as t,Rt as u,Kt as v,ce as w,le as x,vt as y,Et as z};
