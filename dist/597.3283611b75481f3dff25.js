"use strict";(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[597],{597:(e,t,n)=>{n.r(t);var r=n(271),a=n.n(r),i=n(650),o=n.n(i);function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,i=[],o=!0,l=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);o=!0);}catch(e){l=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=n(113);const f=function(e){var t=(0,r.useRef)(null);return(0,r.useEffect)((function(){(0,c.mountApp)(t.current,e)})),a().createElement("div",{ref:t})},s=function(){var e=u((0,r.useState)(!1),2),t=e[0],n=e[1],i=u((0,r.useState)(!1),2),o=i[0],l=i[1],c=function(){n(!t)};return a().createElement("div",null,t&&a().createElement(f,{isOpen:t,handleSubmit:function(){c(),l(!0)}}),a().createElement("div",{style:{padding:"20px",fontSize:"50px",display:"flex",justifyContent:"center"}},"This is an example of Microfrontend"),a().createElement("p",{style:{display:"flex",justifyContent:"center",fontSize:25}},"This is a container App"),a().createElement("div",{style:{paddingTop:"20vh",display:"flex",alignItems:"center",justifyContent:"center"}},a().createElement("button",{onClick:c},o?"authenticated":"not authenticated")))};o().render(a().createElement(s,null),document.getElementById("root"))}}]);