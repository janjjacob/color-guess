(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),o=(a(13),a(1)),l=(a(15),function(){return"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)});var u=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),u=Object(o.a)(r,2),i=u[0],m=u[1],d=Object(n.useState)(null),g=Object(o.a)(d,2),b=g[0],v=g[1],f=Object(n.useState)(0),E=Object(o.a)(f,2),h=E[0],j=E[1],O=Object(n.useState)(0),N=Object(o.a)(O,2),S=N[0],p=N[1],w=function(){var e=l();s(e),m([e,l(),l()].sort(function(){return Math.random()-.5}))};return Object(n.useEffect)(function(){w()},[]),c.a.createElement("div",{className:"game"},c.a.createElement("div",null,c.a.createElement("div",{className:"title-text"},"Guess the Color!"),c.a.createElement("div",{className:"to-guess",style:{background:a}}),c.a.createElement("div",{style:{height:5}}),i.map(function(e){return c.a.createElement("button",{onClick:function(){return t=e,j(h+1),void(t===a?(v(!0),p(S+1),w()):v(!1));var t}},e)}),c.a.createElement("div",{className:"guesses-stats"},"Total Guesses: ",h),c.a.createElement("div",{className:"guesses-stats"},"Correct Guesses: ",S),null===b&&c.a.createElement("div",{className:"start-text",style:{color:a}},"What Color is This?"),!1===b&&c.a.createElement("div",{className:"wrong"},"Wrong, Try Again!"),!0===b&&c.a.createElement("div",{className:"right"},"Right, Good Job!")))},i=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null))),i()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.dc8a111b.chunk.js.map