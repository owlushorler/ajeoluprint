(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{3686:function(e,t,n){Promise.resolve().then(n.bind(n,3446))},3446:function(e,t,n){"use strict";n.r(t);var o=n(7437),c=n(2265),i=n(3418),r=n.n(i);t.default=e=>{let{text:t}=e,[n,i]=(0,c.useState)(!1),a=async()=>{try{await r()(t),i(!0),setTimeout(()=>i(!1),2e3)}catch(e){console.error("Failed to copy text to clipboard",e)}};return(0,o.jsx)("div",{children:(0,o.jsx)("div",{onClick:a,children:(0,o.jsx)("img",{className:"m-4 h-4",src:"https://i.ibb.co/cwRxWTv/copy.png",alt:"copy"})})})}},3418:function(e){function t(){return new DOMException("The request is not allowed","NotAllowedError")}async function n(e){if(!navigator.clipboard)throw t();return navigator.clipboard.writeText(e)}async function o(e){let n=document.createElement("span");n.textContent=e,n.style.whiteSpace="pre",n.style.webkitUserSelect="auto",n.style.userSelect="all",document.body.appendChild(n);let o=window.getSelection(),c=window.document.createRange();o.removeAllRanges(),c.selectNode(n),o.addRange(c);let i=!1;try{i=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(n)}if(!i)throw t()}async function c(e){try{await n(e)}catch(n){try{await o(e)}catch(e){throw e||n||t()}}}e.exports=c}},function(e){e.O(0,[971,582,744],function(){return e(e.s=3686)}),_N_E=e.O()}]);