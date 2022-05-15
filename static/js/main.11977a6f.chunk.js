(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),o=a.n(n),l=(a(13),a(4)),i=(a(14),a(0));function r(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link",href:"/about",children:e.aboutText})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link disabled",href:"/",children:"Disabled"})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Default switch checkbox input"})]})})]})]})})}function d(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"text-".concat("light"===e.mode?"dark":"light"," container"),children:[Object(i.jsx)("h1",{children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",id:"myBox",placeholder:"Enter text here",rows:"8",value:s,onChange:function(e){console.log("OnChange"),n(e.target.value)},style:{backgroundColor:"light"===e.mode?"#fff":"grey",color:"light"===e.mode?"black":"#fff"}})}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toUpperCase();n(t),e.showalert("changes to upper case","success")},children:"Covert to Uppercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.toLowerCase();n(t),e.showalert("changes to lower case","success")},children:"Covert to Lowercase"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var t=s.split(" "),a=" ";t.forEach((function(e){a+=e.charAt(0).toUpperCase()+e.slice(1)+" "})),n(a),e.showalert("changed first letter to Capital","success")},children:"Make First Letter Capital"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=s.replace(/\s+/g," ").trim();n(e)},children:"Remove Extra Spaces"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=prompt("enter the string you wanna search :");!0===s.includes(e,0)?alert("the string "+e+" is present.."):alert("the string "+e+" is not present..")},children:"Search the string"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){var e=document.getElementById("myBox");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy the string"}),Object(i.jsx)("button",{className:"btn btn-primary mx-1",onClick:function(){n("")},children:"clear"}),Object(i.jsxs)("div",{className:"container my-2",children:[Object(i.jsxs)("p",{children:["Now of Words ",s.split(" ").length," and no of characters ",s.length]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").length," of read..."]})]})]})})}r.defaultProps={title:"Stranger"};var h=function(e){return e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:e.alert.type})," ",e.alert.msg]})};function b(){var e=Object(c.useState)({color:"white",backgroundColor:"black"}),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)("Enable light mode"),o=Object(l.a)(n,2),r=o[0],d=o[1];return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Accordion Item #1"})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body ",style:a,children:[Object(i.jsx)("strong",{children:"This is the first item's accordion body."})," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:"Accordion Item #2"})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the second item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",type:"button",style:a,"data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:"Accordion Item #3"})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsxs)("div",{className:"accordion-body",style:a,children:[Object(i.jsx)("strong",{children:"This is the third item's accordion body."})," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",Object(i.jsx)("code",{children:".accordion-body"}),", though the transition does limit overflow."]})})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"button",onClick:function(){console.log("toggle"),"white"===a.color?(s({color:"black",backgroundColor:"white"}),d("Enable dark Mode")):(s({color:"white",backgroundColor:"black"}),d("Enable Light Mode"))},className:"btn btn-primary",children:r})})]})}var j=a(8),u=a(2);var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),o=Object(l.a)(n,2),m=o[0],p=o[1],g=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),2e3)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(r,{title:"Textutils",aboutText:"about",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="rgb(0 75 124)",g("Dark mode enabled","success")):(s("light"),document.body.style.backgroundColor="#fff",g("Light mode enabled","success"))}}),Object(i.jsx)(h,{alert:m}),Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(j.a,{children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"/",element:Object(i.jsx)(d,{heading:"Enter text to analyze",mode:a,showalert:g})}),Object(i.jsx)(u.a,{path:"/about",element:Object(i.jsx)(b,{})})]})})})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),n(e),o(e)}))};o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.11977a6f.chunk.js.map