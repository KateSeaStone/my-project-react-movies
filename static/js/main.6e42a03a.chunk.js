(this["webpackJsonpmy-project-react-movies"]=this["webpackJsonpmy-project-react-movies"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(4),o=n.n(r),i=(n(18),n(3)),s=n(5),u=(n(19),n(20),n(21),n(1)),l=function(e){var t=e.children;return Object(u.jsx)("div",{className:"Container",children:t})},j=(n(23),function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==r.trim()?t(r):s.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441!")},children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",value:r,onChange:function(e){o(e.currentTarget.value)},autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}),b=n(7),d=n.n(b),h=n(8),m=function(){var e=Object(h.a)(d.a.mark((function e(t,n){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(n,"&key=").concat("22003167-822d2c3fa2b59190c92d4d864","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=m,O=(n(25),n(26),function(e){var t=e.id,n=e.original,c=e.preview,a=e.showModal;return Object(u.jsx)("li",{className:"ImageGalleryItem",children:Object(u.jsx)("img",{src:c,alt:c,className:"ImageGalleryItem-image",onClick:function(){return a(n)}})},t)}),p=(n(27),document.body),g=function(e){var t=e.largeImageURL,n=e.onClose;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return Object(r.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:t,alt:t,onClick:n})})}),p)},x=(n(28),function(e){var t=e.handleClick;return Object(u.jsx)("button",{className:"loadMoreBtn",type:"button",onClick:t,children:"Load more"})}),v=n(9),S=n(10),w=n(13),y=n(12),C=n(11),k=n.n(C),F=(n(49),function(e){Object(w.a)(n,e);var t=Object(y.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(S.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(k.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:4e3})})}}]),n}(a.a.Component)),N=F,L=function(e){var t=e.images,n=e.handleButtonClick,a=e.isLoading,r=Object(c.useState)(!1),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),d=b[0],h=b[1],m=function(e){l(!0),h(e)};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("ul",{className:"ImageGallery",children:t.map((function(e,t){return Object(u.jsx)(O,{id:"".concat(t,"_").concat(e.id),preview:e.webformatURL,original:e.largeImageURL,showModal:m},"".concat(t,"_").concat(e.id))}))}),a&&Object(u.jsx)(N,{}),!a&&Object(u.jsx)(x,{handleClick:n}),s&&Object(u.jsx)(g,{largeImageURL:d,onClose:function(){l(!1)}})]})},I=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),o=Object(i.a)(r,2),b=o[0],d=o[1],h=Object(c.useState)(1),m=Object(i.a)(h,2),O=m[0],p=m[1],g=Object(c.useState)(""),x=Object(i.a)(g,2),v=x[0],S=x[1],w=Object(c.useState)(!1),y=Object(i.a)(w,2),C=y[0],k=y[1],F=Object(c.useState)(!1),N=Object(i.a)(F,2),I=N[0],E=N[1];Object(c.useEffect)((function(){""!==v&&f(v,O).then((function(e){a(n.concat(e.hits)),k(!1),O>0&&e.hits.length>0&&E(!0)})).catch((function(e){return d({error:e})}))}),[v,O]),Object(c.useEffect)((function(){I&&(window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),E(!1))}),[I]);return Object(u.jsxs)(l,{children:[b&&Object(u.jsx)("h2",{children:"Opps! Something went wrong!"}),Object(u.jsx)(j,{onSubmit:function(e){e===v&&1===O||(a([]),d(null),p(1),S(e),k(!0))}}),n.length>0&&Object(u.jsx)(L,{images:n,handleButtonClick:function(){p(O+1),k(!0)},isLoading:C}),Object(u.jsx)(s.a,{position:"top-center",autoClose:4e3})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root")),E()}},[[50,1,2]]]);
//# sourceMappingURL=main.6e42a03a.chunk.js.map