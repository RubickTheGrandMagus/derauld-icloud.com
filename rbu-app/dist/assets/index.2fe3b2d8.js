import{S as R,i as $,s as k,e as v,t as g,a as T,c as b,b as E,d as y,f as l,g as V,h as A,j as h,k as c,n as P,l as D,m as G,R as J,o as Q,p as W,q as X,r as Y,u as Z,v as ee}from"./vendor.d8cb9d47.js";const te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}};te();function re(p){let t,o,r,e,s,a,x,L,q,u,f,i,_,d,m,S,F,w,H,j;return{c(){t=v("h1"),o=g("Hello world!"),r=T(),e=v("p"),s=g("Visit the "),a=v("a"),x=g("Svelte tutorial"),L=g(" to learn how to build Svelte apps."),q=T(),u=v("p"),f=g("This template is pre-configured with svlete-spa-router for routing."),i=v("br"),_=g(`
    Visit the `),d=v("a"),m=g("documentation for the router"),S=g(" to learn more."),F=T(),w=v("p"),H=v("a"),j=g("Lorem ipsum"),this.h()},l(n){t=b(n,"H1",{class:!0});var N=E(t);o=y(N,"Hello world!"),N.forEach(l),r=V(n),e=b(n,"P",{});var O=E(e);s=y(O,"Visit the "),a=b(O,"A",{href:!0});var C=E(a);x=y(C,"Svelte tutorial"),C.forEach(l),L=y(O," to learn how to build Svelte apps."),O.forEach(l),q=V(n),u=b(n,"P",{});var I=E(u);f=y(I,"This template is pre-configured with svlete-spa-router for routing."),i=b(I,"BR",{}),_=y(I,`
    Visit the `),d=b(I,"A",{href:!0});var M=E(d);m=y(M,"documentation for the router"),M.forEach(l),S=y(I," to learn more."),I.forEach(l),F=V(n),w=b(n,"P",{});var U=E(w);H=b(U,"A",{href:!0});var B=E(H);j=y(B,"Lorem ipsum"),B.forEach(l),U.forEach(l),this.h()},h(){A(t,"class","svelte-v2gg4g"),A(a,"href","https://svelte.dev/tutorial"),A(d,"href","https://github.com/ItalyPaleAle/svelte-spa-router"),A(H,"href","#/lorem/2")},m(n,N){h(n,t,N),c(t,o),h(n,r,N),h(n,e,N),c(e,s),c(e,a),c(a,x),c(e,L),h(n,q,N),h(n,u,N),c(u,f),c(u,i),c(u,_),c(u,d),c(d,m),c(u,S),h(n,F,N),h(n,w,N),c(w,H),c(H,j)},p:P,i:P,o:P,d(n){n&&l(t),n&&l(r),n&&l(e),n&&l(q),n&&l(u),n&&l(F),n&&l(w)}}}class ie extends R{constructor(t){super();$(this,t,null,re,k,{})}}function K(p,t,o){const r=p.slice();return r[2]=t[o],r}function z(p){let t,o;return{c(){t=v("p"),o=g(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consequatur dicta, explicabo delectus, cupiditate, rem illo repellat aperiam saepe id minus ipsa. Illum libero consectetur fuga neque officia, adipisci commodi.Porro eius harum sed architecto maxime, molestiae cum ad dignissimos eum, nihil eligendi? Non quo, modi officia doloribus distinctio pariatur sed? Veniam facere beatae ipsam reprehenderit suscipit! Sequi, distinctio debitis.
    `)},l(r){t=b(r,"P",{});var e=E(t);o=y(e,`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed consequatur dicta, explicabo delectus, cupiditate, rem illo repellat aperiam saepe id minus ipsa. Illum libero consectetur fuga neque officia, adipisci commodi.Porro eius harum sed architecto maxime, molestiae cum ad dignissimos eum, nihil eligendi? Non quo, modi officia doloribus distinctio pariatur sed? Veniam facere beatae ipsam reprehenderit suscipit! Sequi, distinctio debitis.
    `),e.forEach(l)},m(r,e){h(r,t,e),c(t,o)},d(r){r&&l(t)}}}function oe(p){let t,o,r,e,s,a,x,L,q,u=Array(p[0]),f=[];for(let i=0;i<u.length;i+=1)f[i]=z(K(p,u,i));return{c(){t=v("h1"),o=g("Lorem ipsum"),r=T(),e=v("p"),s=g("Tip: try changing the number in the URL's fragment, e.g. "),a=v("code"),x=g("#/lorem/4"),L=T();for(let i=0;i<f.length;i+=1)f[i].c();q=D(),this.h()},l(i){t=b(i,"H1",{class:!0});var _=E(t);o=y(_,"Lorem ipsum"),_.forEach(l),r=V(i),e=b(i,"P",{});var d=E(e);s=y(d,"Tip: try changing the number in the URL's fragment, e.g. "),a=b(d,"CODE",{});var m=E(a);x=y(m,"#/lorem/4"),m.forEach(l),d.forEach(l),L=V(i);for(let S=0;S<f.length;S+=1)f[S].l(i);q=D(),this.h()},h(){A(t,"class","svelte-51ycyf")},m(i,_){h(i,t,_),c(t,o),h(i,r,_),h(i,e,_),c(e,s),c(e,a),c(a,x),h(i,L,_);for(let d=0;d<f.length;d+=1)f[d].m(i,_);h(i,q,_)},p(i,[_]){if(_&1){const d=u.length;u=Array(i[0]);let m;for(m=d;m<u.length;m+=1)K(i,u,m),f[m]||(f[m]=z(),f[m].c(),f[m].m(q.parentNode,q));for(m=u.length;m<d;m+=1)f[m].d(1);f.length=u.length}},i:P,o:P,d(i){i&&l(t),i&&l(r),i&&l(e),i&&l(L),G(f,i),i&&l(q)}}}function se(p,t,o){let{params:r={}}=t,e=1;return p.$$set=s=>{"params"in s&&o(1,r=s.params)},p.$$.update=()=>{p.$$.dirty&3&&(o(0,e=1),r&&r.repeat&&(o(0,e=parseInt(r.repeat,10)),e<1&&o(0,e=1)))},[e,r]}class le extends R{constructor(t){super();$(this,t,se,oe,k,{params:1})}}function ae(p){let t,o,r,e,s;return{c(){t=v("h1"),o=g("Not Found"),r=T(),e=v("p"),s=g("This route doesn't exist."),this.h()},l(a){t=b(a,"H1",{class:!0});var x=E(t);o=y(x,"Not Found"),x.forEach(l),r=V(a),e=b(a,"P",{});var L=E(e);s=y(L,"This route doesn't exist."),L.forEach(l),this.h()},h(){A(t,"class","svelte-r5e5ng")},m(a,x){h(a,t,x),c(t,o),h(a,r,x),h(a,e,x),c(e,s)},p:P,i:P,o:P,d(a){a&&l(t),a&&l(r),a&&l(e)}}}class ne extends R{constructor(t){super();$(this,t,null,ae,k,{})}}var ce={"/":ie,"/lorem/:repeat":le,"*":ne};function ue(p){let t,o,r;return o=new J({props:{routes:ce}}),{c(){t=v("main"),Q(o.$$.fragment),this.h()},l(e){t=b(e,"MAIN",{class:!0});var s=E(t);W(o.$$.fragment,s),s.forEach(l),this.h()},h(){A(t,"class","svelte-1h6otfa")},m(e,s){h(e,t,s),X(o,t,null),r=!0},p:P,i(e){r||(Y(o.$$.fragment,e),r=!0)},o(e){Z(o.$$.fragment,e),r=!1},d(e){e&&l(t),ee(o)}}}class me extends R{constructor(t){super();$(this,t,null,ue,k,{})}}new me({target:document.body});
