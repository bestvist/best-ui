(function(t){function e(e){for(var a,i,s=e[0],c=e[1],r=e[2],u=0,d=[];u<s.length;u++)i=s[u],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);h&&h(e);while(d.length)d.shift()();return l.push.apply(l,r||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(l.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={index:0},o={index:0},l=[];function s(t){return c.p+"js/"+({}[t]||t)+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-042a":1,"chunk-30fc":1,"chunk-3204":1,"chunk-3e25":1,"chunk-59ba":1,"chunk-6fb1":1,"chunk-a600":1,"chunk-b219":1,"chunk-e4f1":1,"chunk-f298":1,"chunk-fbd5":1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({}[t]||t)+".css",i=c.p+a,o=document.getElementsByTagName("link"),l=0;l<o.length;l++){var s=o[l],r=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(r===a||r===i))return e()}var u=document.getElementsByTagName("style");for(l=0;l<u.length;l++){s=u[l],r=s.getAttribute("data-href");if(r===a||r===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.request=a,n(o)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){i[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var l=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=l);var r,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(t),r=function(e){d.onerror=d.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,l=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");l.type=a,l.request=i,n[1](l)}o[t]=void 0}};var h=setTimeout(function(){r({type:"timeout",target:d})},12e4);d.onerror=d.onload=r,u.appendChild(d)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/best-ui/docs-dist/",c.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var h=u;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("fc11")},"07f2":function(t,e,n){},4291:function(t,e,n){t.exports=n.p+"img/logo.svg"},"66b8":function(t,e,n){},"6a80":function(t,e){(function(t){var e='<svg><symbol id="icon-check-circle" viewBox="0 0 1024 1024"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-close-circle" viewBox="0 0 1024 1024"><path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 0.3L512 465.6l-99.3-118.4-66.1-0.3c-4.4 0-8 3.5-8 8 0 1.9 0.7 3.7 1.9 5.2l130.1 155L340.5 670c-1.2 1.5-1.9 3.3-1.9 5.2 0 4.4 3.6 8 8 8l66.1-0.3L512 564.4l99.3 118.4 66 0.3c4.4 0 8-3.5 8-8 0-1.9-0.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"  ></path><path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-left-circle" viewBox="0 0 1024 1024"><path d="M603.3 327.5l-246 178c-4.4 3.2-4.4 9.7 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-down-circle" viewBox="0 0 1024 1024"><path d="M690 405h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 563.6 406.8 418.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3 0.1-12.7-6.4-12.7z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-right-circle" viewBox="0 0 1024 1024"><path d="M666.7 505.5l-246-178c-5.3-3.8-12.7-0.1-12.7 6.5v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-up-circle" viewBox="0 0 1024 1024"><path d="M518.5 360.3c-3.2-4.4-9.7-4.4-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-warning-circle" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path><path d="M512 688m-48 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0Z"  ></path><path d="M488 576h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"  ></path></symbol><symbol id="icon-sync" viewBox="0 0 1024 1024"><path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27c40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8c-0.1 4.5 3.5 8.2 8 8.2h60c4.4 0 7.9-3.5 8-7.8zM924 512h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4S687 811.7 646 829c-42.4 17.9-87.4 27-133.9 27s-91.5-9.1-133.9-27c-40.9-17.3-77.7-42.1-109.3-73.8-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47c5.3-4.1 3.5-12.5-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-0.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8 0.1-4.5-3.5-8.2-8-8.2z"  ></path></symbol><symbol id="icon-undo" viewBox="0 0 1024 1024"><path d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-0.3 13 6.3 12.9l167-0.8c5.2 0 9-4.9 7.7-9.9L369.8 727c-1.6-6.5-10-8.3-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-7.5 7.5-15.3 14.5-23.4 21.2-3.4 2.8-3.9 7.7-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9z"  ></path></symbol><symbol id="icon-redo" viewBox="0 0 1024 1024"><path d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2-29.4-29.4-52.5-63.6-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5c-16.1 38.1-39.2 72.3-68.6 101.7-9.3 9.3-19.1 18-29.3 26L668.2 724c-4.1-5.3-12.5-3.5-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 0.8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"  ></path></symbol><symbol id="icon-reload" viewBox="0 0 1024 1024"><path d="M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-0.7-8.9-4.9-10.3l-56.7-19.5c-4.1-1.4-8.6 0.7-10.1 4.8-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4-31.6 31.6-68.4 56.4-109.3 73.8-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27-40.9-17.3-77.7-42.1-109.3-73.8-31.6-31.6-56.4-68.4-73.7-109.4-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27 40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l0.8-180.9c-0.1-6.6-7.8-10.3-13-6.2z"  ></path></symbol><symbol id="icon-eye" viewBox="0 0 1024 1024"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3-7.7 16.2-7.7 35.2 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766z"  ></path><path d="M508 336c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176z m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M765.7 486.8L314.9 134.7c-5.3-4.1-12.9-0.4-12.9 6.3v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1c16.4-12.8 16.4-37.6 0-50.4z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8c-16.4 12.8-16.4 37.5 0 50.3l450.8 352.1c5.3 4.1 12.9 0.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"  ></path></symbol><symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3c-3.8 5.3-0.1 12.7 6.5 12.7h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"  ></path></symbol><symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3 0.1-12.7-6.4-12.7z"  ></path></symbol><symbol id="icon-check-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m193.5 301.7l-210.6 292c-12.7 17.7-39 17.7-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"  ></path></symbol><symbol id="icon-left-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178c-4.4-3.2-4.4-9.7 0-12.9l246-178c5.3-3.8 12.7-0.1 12.7 6.5v46.8z"  ></path></symbol><symbol id="icon-down-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m184.5 353.7l-178 246c-3.2 4.4-9.7 4.4-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7H381c10.2 0 19.9 4.9 25.9 13.2L512 563.6l105.2-145.4c6-8.3 15.6-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.5 12.7z"  ></path></symbol><symbol id="icon-minus-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48z"  ></path></symbol><symbol id="icon-close-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m165.4 618.2l-66-0.3L512 563.4l-99.3 118.4-66.1 0.3c-4.4 0-8-3.5-8-8 0-1.9 0.7-3.7 1.9-5.2l130.1-155L340.5 359c-1.2-1.5-1.9-3.3-1.9-5.2 0-4.4 3.6-8 8-8l66.1 0.3L512 464.6l99.3-118.4 66-0.3c4.4 0 8 3.5 8 8 0 1.9-0.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"  ></path></symbol><symbol id="icon-info-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272z m-32-344c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"  ></path></symbol><symbol id="icon-up-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m178 555h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4 406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3 0.1 12.7-6.4 12.7z"  ></path></symbol><symbol id="icon-right-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"  ></path></symbol><symbol id="icon-plus-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48z"  ></path></symbol><symbol id="icon-question-circle-fill" viewBox="0 0 1024 1024"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m62.9-219.5c-18.5 7.1-30.9 25.1-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9 12.9-18.6 30.9-32.8 52.1-40.9 34-13.1 56-41.6 56-72.7 0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5z"  ></path></symbol><symbol id="icon-heart-fill" viewBox="0 0 1024 1024"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"  ></path></symbol></svg>',n=function(){var t=document.getElementsByTagName("script");return t[t.length-1]}(),a=n.getAttribute("data-injectcss"),i=function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{var n=function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()};document.addEventListener("DOMContentLoaded",n,!1)}else document.attachEvent&&a(t,e);function a(t,e){var n=t.document,a=!1,i=function(){a||(a=!0,e())},o=function t(){try{n.documentElement.doScroll("left")}catch(e){return void setTimeout(t,50)}i()};o(),n.onreadystatechange=function(){"complete"==n.readyState&&(n.onreadystatechange=null,i())}}},o=function(t,e){e.parentNode.insertBefore(t,e)},l=function(t,e){e.firstChild?o(t,e.firstChild):e.appendChild(t)};function s(){var t,n;t=document.createElement("div"),t.innerHTML=e,e=null,n=t.getElementsByTagName("svg")[0],n&&(n.setAttribute("aria-hidden","true"),n.style.position="absolute",n.style.width=0,n.style.height=0,n.style.overflow="hidden",l(n,document.body))}if(a&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(t){console&&console.log(t)}}i(s)})(window)},abe9:function(t,e,n){"use strict";var a=n("07f2"),i=n.n(a);i.a},b20f:function(t,e,n){},fc11:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b-layout",{staticClass:"container"},[a("b-header",[a("img",{staticStyle:{"vertical-align":"middle"},attrs:{height:"30",src:n("4291")}}),t._v(" Best UI")]),a("b-layout",{attrs:{horizontal:""}},[a("b-slider",{attrs:{id:"nav",width:"200px"}},[a("b-list",t._l(t.nav,function(e,n){return a("b-list-item",{key:n,attrs:{to:e.path}},[t._v(t._s(e.meta.title))])}))],1),a("b-content",[a("router-view")],1)],1),a("b-footer",[a("a",{attrs:{href:"https://github.com/bestvist/best-ui",target:"_blank"}},[t._v("GitHub")])])],1)],1)},o=[],l={data:function(){return{nav:[]}},mounted:function(){this.nav=this.$router.options.routes}},s=l,c=(n("abe9"),n("2877")),r=Object(c["a"])(s,i,o,!1,null,null,null);r.options.__file="App.vue";var u=r.exports,d=n("8c4f"),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v("Best UI")]),n("p",[t._v("vue组件框架")]),n("pre",[t._v("    "),n("code",[t._v("\n      Install\n      npm install best-ui --save \n      Quick Start\n      import Vue from 'vue';\n      import BestUI from 'best-ui';\n      import 'best-ui/dist/bestui.css';\n\n      Vue.use(BestUI);\n\n      TODO\n      要做的事：\n\n      基础\n      Layout 布局\n      Color 色彩\n      Icon 图标\n      Input 输入框\n      Button 按钮\n      Checkbox 多选框\n      Radio 单选框\n      Select 选择器\n      Switch 开关\n      DatePicker 日期选择\n      ColorPicker 颜色选择\n      Time 相对时间\n      Card 卡片\n      Table 表格\n      Tag 标签\n      Progress 进度条\n      Tree 树形\n      Pagination 分页\n      NavMenu 导航\n      TextScroll 文字滚动\n      ZoomPicture 图片放大\n      Steps 步骤条\n      Alert 警告\n      Tooltip 提示\n      Popover 弹出框\n      Carousel 走马灯\n      Collapse 折叠板\n      Timeline 时间轴\n      服务组件\n      Loading 加载\n      Message 消息\n      Notification 通知\n      Dialog 对话框\n      LICENSE\n      MIT\n    ")]),t._v("\n  ")])])}],m={name:"docs-home"},f=m,b=Object(c["a"])(f,h,p,!1,null,null,null);b.options.__file="Home.vue";var v=b.exports;a["a"].use(d["a"]);var g=[{path:"/",meta:{title:"Home 主页"},component:v},{path:"/layout",meta:{title:"Layout 布局"},component:function(){return n.e("chunk-e4f1").then(n.bind(null,"2259"))}},{path:"/grid",meta:{title:"Grid 栅格"},component:function(){return n.e("chunk-6fb1").then(n.bind(null,"36ea"))}},{path:"/color",meta:{title:"Color 色彩"},component:function(){return n.e("chunk-fbd5").then(n.bind(null,"b096"))}},{path:"/icon",meta:{title:"Icon 图标"},component:function(){return n.e("chunk-59ba").then(n.bind(null,"f90a"))}},{path:"/button",meta:{title:"Button 图标"},component:function(){return n.e("chunk-3204").then(n.bind(null,"70e6"))}},{path:"/input",meta:{title:"Input 输入框"},component:function(){return n.e("chunk-f298").then(n.bind(null,"0389"))}},{path:"/checkbox",meta:{title:"Checkbox 复选框"},component:function(){return n.e("chunk-a600").then(n.bind(null,"491c"))}},{path:"/radio",meta:{title:"Radio 单选框"},component:function(){return n.e("chunk-3e25").then(n.bind(null,"0f6a"))}},{path:"/switch",meta:{title:"Switch 转换框"},component:function(){return n.e("chunk-b219").then(n.bind(null,"43a7"))}},{path:"/card",meta:{title:"Card 卡片"},component:function(){return n.e("b7a4").then(n.bind(null,"b7a4"))}},{path:"/tag",meta:{title:"Tag 标签"},component:function(){return n.e("chunk-30fc").then(n.bind(null,"412c"))}},{path:"/list",meta:{title:"List 列表"},component:function(){return n.e("chunk-042a").then(n.bind(null,"995f"))}}],_=new d["a"]({mode:"history",base:"/best-ui/docs-dist/",routes:g}),y=n("2f62");a["a"].use(y["a"]);var C,x,B=new y["a"].Store({state:{},mutations:{},actions:{}}),k=(n("66b8"),n("c93e")),w=(n("7f7f"),n("ac6a"),n("b20f"),n("a322")),S={name:"BButton",componentName:"BButton",props:{color:String,textColor:String,icon:String,size:String,type:String,round:Boolean,circle:Boolean,flat:Boolean,full:Boolean,disabled:Boolean,loading:Boolean,href:String,nativeType:String},computed:{className:function(){var t;return t={},Object(w["a"])(t,"b-button--".concat(this.type),this.type),Object(w["a"])(t,"b-button--".concat(this.size),this.size),Object(w["a"])(t,"is-disabled",this.disabled),Object(w["a"])(t,"is-loading",this.loading),Object(w["a"])(t,"is-round",this.round),Object(w["a"])(t,"is-circle",this.circle),Object(w["a"])(t,"is-flat",this.flat),Object(w["a"])(t,"is-full",this.full),t}},methods:{handleClick:function(t){this.$emit("click",t)}},render:function(t){var e=this.href?"a":"button";return t(e,{attrs:{type:this.nativeType,disabled:this.disabled||this.loading},staticClass:"b-button",class:this.className,style:{"background-color":this.color,color:this.textColor},on:{click:this.handleClick}},this.$slots.default)}},$=S,z=Object(c["a"])($,C,x,!1,null,null,null);z.options.__file="button.vue";var N=z.exports;N.install=function(t){t.component(N.name,N)};var O=N,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-card"},[t.$slots.header||t.title?n("div",{staticClass:"b-card__header"},[t._t("header"),t.$slots.header?t._e():[t._v(t._s(t.title))]],2):t._e(),t._t("default")],2)},E=[],M={name:"BCard",componentName:"BCard",props:{title:String}},j=M,T=Object(c["a"])(j,L,E,!1,null,null,null);T.options.__file="card.vue";var I=T.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-card__content"},[t._t("default")],2)},P=[],H={name:"BCardContent",componentName:"BCardContent"},R=H,A=Object(c["a"])(R,V,P,!1,null,null,null);A.options.__file="card-content.vue";var D=A.exports;D.install=function(t){t.component(D.name,D)};var F=D,U=[I,F];I.install=function(t){U.forEach(function(e){t.component(e.name,e)})};var q=I,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"b-checkbox",class:t.className,attrs:{role:"checkbox"},on:{click:t.handleClick}},[n("span",{staticClass:"b-checkbox__inner",class:t.classNameInner}),n("input",{staticClass:"b-checkbox__input",attrs:{type:"checkbox","aria-hidden":"true",name:t.name,disabled:t.disabled},domProps:{value:t.label,checked:t.currentValue},on:{change:t.handleChange}}),t.$slots.default||t.label?n("span",{staticClass:"b-checkbox__label"},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.label))]],2):t._e()])},J=[],Z={name:"BCheckbox",componentName:"BCheckbox",model:{prop:"checked",event:"change"},props:{label:String,name:String,checked:Boolean,disabled:Boolean,intermediate:Boolean},data:function(){return{currentValue:!1}},computed:{className:function(){return{"is-disabled":this.disabled}},classNameInner:function(){return{"is-checked":this.currentValue,"is-disabled":this.disabled,"is-intermediate":this.intermediate&&!this.currentValue}}},methods:{handleClick:function(t){/input/i.test(t.target.tagName)&&!this.disabled&&(this.currentValue=!this.currentValue,this.$emit("click",t))},handleChange:function(t){this.$emit("change",this.currentValue,t)}},created:function(){this.currentValue=this.checked}},Q=Z,K=Object(c["a"])(Q,G,J,!1,null,null,null);K.options.__file="checkbox.vue";var W=K.exports;W.install=function(t){t.component(W.name,W)};var X=W,Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-col",class:t.className,style:t.style},[t._t("default")],2)},tt=[],et=(n("c5f6"),{name:"BCol",componentName:"BCol",props:{span:{type:Number,default:24},offset:{type:Number,default:0},push:{type:Number,default:0},pull:{type:Number,default:0}},computed:{gutter:function(){var t=this.$parent;while(t&&"BRow"!==t.$options.componentName)t=t.$parent;return t?t.gutter:0},style:function(){var t="".concat(this.gutter/2,"px");return{paddingLeft:t,paddingRight:t}},className:function(){var t=this,e=[];return["span","offset","push","pull"].forEach(function(n){t[n]&&("span"===n?e.push("b-col-".concat(t.span)):e.push("b-col-".concat(n,"-").concat(t[n])))}),e.join(" ")}}}),nt=et,at=Object(c["a"])(nt,Y,tt,!1,null,null,null);at.options.__file="col.vue";var it=at.exports;it.install=function(t){t.component(it.name,it)};var ot=it,lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"b-content"},[t._t("default")],2)},st=[],ct={name:"BContent"},rt=ct,ut=Object(c["a"])(rt,lt,st,!1,null,null,null);ut.options.__file="content.vue";var dt=ut.exports;dt.install=function(t){t.component(dt.name,dt)};var ht=dt,pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"b-footer",style:{height:t.height}},[t._t("default")],2)},mt=[],ft={name:"BFooter",props:{height:String}},bt=ft,vt=Object(c["a"])(bt,pt,mt,!1,null,null,null);vt.options.__file="footer.vue";var gt=vt.exports;gt.install=function(t){t.component(gt.name,gt)};var _t=gt,yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"b-header",style:{height:t.height}},[t._t("default")],2)},Ct=[],xt={name:"BHeader",props:{height:String}},Bt=xt,kt=Object(c["a"])(Bt,yt,Ct,!1,null,null,null);kt.options.__file="header.vue";var wt=kt.exports;wt.install=function(t){t.component(wt.name,wt)};var St=wt,$t=(n("6a80"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{staticClass:"b-icon",attrs:{"aria-hidden":"true"}},[n("use",{attrs:{"xlink:href":t.iconName}})])}),zt=[],Nt={name:"BIcon",componentName:"BIcon",props:{name:String},computed:{iconName:function(){return"#icon-".concat(this.name)}}},Ot=Nt,Lt=Object(c["a"])(Ot,$t,zt,!1,null,null,null);Lt.options.__file="icon.vue";var Et=Lt.exports;Et.install=function(t){t.component(Et.name,Et)};var Mt=Et,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-input",class:t.className},["textarea"!==t.type?[t.prefix?n("span",{ref:"prefix",staticClass:"b-input__prefix"},[t._v(t._s(t.prefix))]):t._e(),n("input",t._b({ref:"input",staticClass:"b-input__inner",attrs:{name:t.name,minlength:t.min,maxlength:t.max,disabled:t.disabled,readonly:t.readonly,step:t.step,autofocus:t.autofocus,autocomplete:t.autocomplete,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition}},"input",t.$attrs,!1)),t.suffix?n("span",{ref:"suffix",staticClass:"b-input__suffix"},[t._v(t._s(t.suffix))]):t._e()]:n("textarea",t._b({staticClass:"b-textarea__inner",class:t.classNameTextarea,style:{height:t.height},attrs:{name:t.name,minlength:t.min,maxlength:t.max,disabled:t.disabled,readonly:t.readonly,step:t.step,autofocus:t.autofocus,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange,compositionstart:t.handleComposition,compositionupdate:t.handleComposition,compositionend:t.handleComposition}},"textarea",t.$attrs,!1)),t.errorMsg?n("span",{staticClass:"b-input__error-msg",domProps:{innerHTML:t._s(t.errorMsg)}}):t._e()],2)},Tt=[];function It(t){var e=/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi;return e.test(t)}var Vt={name:"BInput",componentName:"BInput",props:{type:{type:String,default:"input"},value:[String,Number],name:String,min:Number,max:Number,placeholder:String,disabled:Boolean,readonly:Boolean,resize:{type:Boolean,default:!1},step:[String,Number],autofocus:Boolean,height:String,autocomplete:{type:String,default:"off"},prefix:String,suffix:String,prefixIcon:String,suffixIcon:String,errorMsg:String},data:function(){return{currentValue:void 0===this.value||null===this.value?"":this.value,isOnComposition:!1}},computed:{className:function(){return{"is-error":this.errorMsg}},classNameTextarea:function(){return{"is-resize":this.resize}}},methods:{handleInput:function(t){var e=t.target.value;this.isOnComposition||this.$emit("input",e)},handleFocus:function(t){this.$emit("focus",t)},handleBlur:function(t){this.$emit("blur",t)},handleChange:function(t){this.$emit("change",t.target.value)},handleComposition:function(t){if("compositionend"===t.type)this.isOnComposition=!1,this.handleInput(t);else{var e=t.target.value,n=e[e.length-1]||"";this.isOnComposition=!It(n)}},computeOffset:function(t,e){var n=this.$refs[e]&&this.$refs[e].getBoundingClientRect(),a=n?"".concat(n.right-n.left+10,"px"):null;"prefix"===e?t.style.paddingLeft=a:t.style.paddingRight=a},updateOffset:function(){var t=this.$refs["input"];t&&(this.computeOffset(t,"prefix"),this.computeOffset(t,"suffix"))}},mounted:function(){this.updateOffset()},updated:function(){var t=this;this.$nextTick(function(){t.updateOffset()})}},Pt=Vt,Ht=Object(c["a"])(Pt,jt,Tt,!1,null,null,null);Ht.options.__file="input.vue";var Rt=Ht.exports;Rt.install=function(t){t.component(Rt.name,Rt)};var At=Rt,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"b-layout",class:{"is-horizontal":t.horizontal}},[t._t("default")],2)},Ft=[],Ut={name:"BLayout",props:{horizontal:Boolean}},qt=Ut,Gt=Object(c["a"])(qt,Dt,Ft,!1,null,null,null);Gt.options.__file="layout.vue";var Jt=Gt.exports,Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"b-slider",style:{width:t.width}},[t._t("default")],2)},Qt=[],Kt={name:"BSlider",props:{width:String}},Wt=Kt,Xt=Object(c["a"])(Wt,Zt,Qt,!1,null,null,null);Xt.options.__file="slider.vue";var Yt=Xt.exports;Yt.install=function(t){t.component(Yt.name,Yt)};var te=Yt,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-row",style:t.style},[t._t("default")],2)},ne=[],ae={name:"BRow",componentName:"BRow",props:{gutter:Number},computed:{style:function(){var t="-".concat(this.gutter/2,"px");return{marginLeft:t,marginRight:t}}}},ie=ae,oe=Object(c["a"])(ie,ee,ne,!1,null,null,null);oe.options.__file="row.vue";var le=oe.exports;le.install=function(t){t.component(le.name,le)};var se=le,ce=[Jt,St,ht,te,_t,se,ot];Jt.install=function(t){ce.forEach(function(e){t.component(e.name,e)})};var re=Jt,ue=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"b-list",class:t.className},[t._t("default")],2)},de=[],he={name:"BList",componentName:"BList",computed:{nested:function(){var t=this.$parent.$parent;return t&&"BListItem"===t.$options.componentName},className:function(){return{"is-nested":this.nested}}}},pe=he,me=Object(c["a"])(pe,ue,de,!1,null,null,null);me.options.__file="list.vue";var fe=me.exports,be=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"b-list-item"},[t.to?n("router-link",{staticClass:"b-list-item__inner",class:t.className,style:t.style,attrs:{to:t.to}},[t._t("default")],2):n("a",{staticClass:"b-list-item__inner",class:t.className,style:t.style,on:{click:t.handleClick}},[t._t("default")],2),n("b-collapse-transition",[t.open?t._t("children"):t._e()],2)],1)},ve=[],ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"b-collapse"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter,"before-leave":t.beforeLeave,leave:t.leave,"after-leave":t.afterLeave}},[t._t("default")],2)},_e=[];n("a481");function ye(t){return t?Number(t.replace("px","")):0}var Ce={name:"BCollapseTransition",methods:{beforeEnter:function(t){t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.paddingTop="0",t.style.paddingBottom="0",t.style.height="0"},enter:function(t){t.style.display="block",t.style.overflow="hidden",t.style.height=t.scrollHeight+ye(t.dataset.oldPaddingTop)+ye(t.dataset.oldPaddingBottom)+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},afterEnter:function(t){t.style.display="",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom},beforeLeave:function(t){t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.display="block",0!==t.scrollHeight&&(t.style.height=t.scrollHeight+"px"),t.style.overflow="hidden"},leave:function(t){0!==t.scrollHeight&&(t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave:function(t){t.style.display="none",t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}},xe=Ce,Be=Object(c["a"])(xe,ge,_e,!1,null,null,null);Be.options.__file="collapse-transition.vue";var ke=Be.exports,we=[ke];ke.install=function(t){we.forEach(function(e){t.component(e.name,e)})};var Se=ke,$e={name:"BListItem",componentName:"BListItem",components:{BCollapseTransition:Se},props:{to:[String,Object],default:""},data:function(){return{open:!1}},computed:{tabIndex:function(){var t=1,e=this.$parent&&this.$parent.$parent&&this.$parent.$parent.$parent;while(e&&"BListItem"===e.$options.componentName)t++,e=e.$parent&&e.$parent.$parent&&e.$parent.$parent.$parent;return t},nested:function(){return this.$slots.children},style:function(){return{paddingLeft:10*this.tabIndex+"px"}},className:function(){return{"is-open":this.open}}},methods:{handleClick:function(t){this.$emit("click",t),this.itemClick()},itemClick:function(){this.open=this.nested&&!this.open,this.$router.push({path:this.to})}}},ze=$e,Ne=Object(c["a"])(ze,be,ve,!1,null,null,null);Ne.options.__file="list-item.vue";var Oe=Ne.exports;Oe.install=function(t){t.component(Oe.name,Oe)};var Le=Oe,Ee=[fe,Le];fe.install=function(t){Ee.forEach(function(e){t.component(e.name,e)})};var Me=fe,je=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"b-radio",class:t.className,attrs:{role:"radio"},on:{click:t.handleClick}},[n("span",{staticClass:"b-radio__inner",class:t.classNameInner}),n("input",{staticClass:"b-radio__input",attrs:{type:"radio","aria-hidden":"true",name:t.name,disabled:t.disabled},domProps:{value:t.label,checked:t.value===t.label},on:{change:t.handleChange}}),n("span",{staticClass:"b-radio__label"},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.label))]],2)])},Te=[],Ie={name:"BRadio",componentName:"BRadio",model:{event:"change"},props:{label:String,value:{},name:String,checked:Boolean,disabled:Boolean},data:function(){return{}},computed:{className:function(){return{"is-disabled":this.disabled}},classNameInner:function(){return{"is-checked":this.value===this.label,"is-disabled":this.disabled}}},methods:{handleClick:function(t){var e=this;/input/i.test(t.target.tagName)&&!this.disabled&&this.$nextTick(function(){e.$emit("click",t)})},handleChange:function(t){this.$emit("change",this.label,t)}}},Ve=Ie,Pe=Object(c["a"])(Ve,je,Te,!1,null,null,null);Pe.options.__file="radio.vue";var He=Pe.exports;He.install=function(t){t.component(He.name,He)};var Re=He,Ae=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("label",{staticClass:"b-switch",class:t.className,attrs:{role:"checkbox"},on:{click:t.handleClick}},[n("span",{staticClass:"b-switch__inner",class:t.classNameInner}),n("input",{staticClass:"b-switch__input",attrs:{type:"checkbox","aria-hidden":"true",name:t.name,disabled:t.disabled},domProps:{value:t.label,checked:t.currentValue},on:{change:t.handleChange}}),t.$slots.default||t.label?n("span",{staticClass:"b-switch__label"},[t._t("default"),t.$slots.default?t._e():[t._v(t._s(t.label))]],2):t._e()])},De=[],Fe={name:"BSwitch",componentName:"BSwitch",model:{prop:"checked",event:"change"},props:{label:String,name:String,checked:Boolean,disabled:Boolean},data:function(){return{currentValue:!1}},computed:{className:function(){return{"is-disabled":this.disabled}},classNameInner:function(){return{"is-on":this.currentValue,"is-disabled":this.disabled}}},methods:{handleClick:function(t){/input/i.test(t.target.tagName)&&!this.disabled&&(this.currentValue=!this.currentValue,this.$emit("click",t))},handleChange:function(t){this.$emit("change",this.currentValue,t)}},created:function(){this.currentValue=this.checked}},Ue=Fe,qe=Object(c["a"])(Ue,Ae,De,!1,null,null,null);qe.options.__file="switch.vue";var Ge=qe.exports;Ge.install=function(t){t.component(Ge.name,Ge)};var Je=Ge,Ze=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"b-tag",class:t.className},[t._t("default"),t.deletable?n("b-icon",{staticClass:"b-tag__delete",attrs:{name:"close-circle-fill"},on:{click:t.handleClose}}):t._e()],2)},Qe=[],Ke={name:"BTag",componentName:"BTag",components:{bIcon:Mt},props:{type:String,size:String,deletable:Boolean},computed:{className:function(){var t;return t={},Object(w["a"])(t,"b-tag--".concat(this.type||"default"),!0),Object(w["a"])(t,"b-tag--".concat(this.size),this.size),t}},methods:{handleClose:function(){this.$emit("delete")}}},We=Ke,Xe=Object(c["a"])(We,Ze,Qe,!1,null,null,null);Xe.options.__file="tag.vue";var Ye=Xe.exports;Ye.install=function(t){t.component(Ye.name,Ye)};var tn=Ye,en=[O,q,F,X,ot,ht,_t,St,Mt,At,re,Me,Le,Re,se,te,Je,tn,Se],nn=function(t){en.forEach(function(e){t.component(e.name,e)})};"undefined"!==typeof window&&window.Vue&&nn(window.Vue);var an=Object(k["a"])({version:Object({NODE_ENV:"production",BASE_URL:"/best-ui/docs-dist/"}).VERSION,install:nn},en),on=an;a["a"].config.productionTip=!1,a["a"].use(on),new a["a"]({router:_,store:B,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=index.js.map