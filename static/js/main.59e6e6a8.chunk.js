(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(3),r=a.n(s),o=(a(13),a(1)),l=(a(15),function(){return"#"+(1048575*Math.random()*1e6).toString(16).slice(0,6)});var u=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(o.a)(s,2),u=r[0],i=r[1],m=Object(n.useState)(null),d=Object(o.a)(m,2),g=d[0],b=d[1],v=Object(n.useState)(0),f=Object(o.a)(v,2),E=f[0],R=f[1],h=Object(n.useState)(0),j=Object(o.a)(h,2),O=j[0],N=j[1],S=function(){var e=l();c(e),i([e,l(),l()].sort(function(){return Math.random()-.5}))};return Object(n.useEffect)(function(){S()},[]),n.React.createElement("div",{className:"game"},n.React.createElement("div",null,n.React.createElement("div",{className:"title-text"},"Guess the Color!"),n.React.createElement("div",{className:"to-guess",style:{background:a}}),n.React.createElement("div",{style:{height:5}}),u.map(function(e){return n.React.createElement("button",{onClick:function(){return t=e,R(E+1),void(t===a?(b(!0),N(O+1),S()):b(!1));var t}},e)}),n.React.createElement("div",{className:"guesses-stats"},"Total Guesses: ",E),n.React.createElement("div",{className:"guesses-stats"},"Correct Guesses: ",O),null===g&&n.React.createElement("div",{className:"start-text",style:{color:a}},"What Color is This?"),!1===g&&n.React.createElement("div",{className:"wrong"},"Wrong, Try Again!"),!0===g&&n.React.createElement("div",{className:"right"},"Right, Good Job!")))},i=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null))),i()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.59e6e6a8.chunk.js.map