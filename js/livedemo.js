/* livedemo 0.0.1 http://taye.mit-license.org */
document.addEventListener("DOMContentLoaded",this.liveDemo=function(c){var b=window.liveDemoSettings;b.HTMLSelector=b.HTMLSelector||"code.language-xml,code.language-html,code.language-markup,code.xml,code.html";b.CSSSelector=b.CSSSelector||"code.language-css,code.css";b.JSSelector=b.JSSelector||"code.language-javascript,code.javascript";b.HTMLFlag=b.HTMLFlag||/^\x3c!--.*enable javascript.*--\x3e/;b.CSSFlag=b.CSSFlag||/^\/\*.*enable javascript.*\*\//;b.JSFlag=b.JSFlag||/^\/\/.*enable javascript.*|^\/\*.*enable javascript.*\*\//;
b.codeElementDepth="number"===typeof b.codeElementDepth?b.codeElementDepth:2;b.insertPosition=b.insertPosition||"afterend";c=document.querySelectorAll(b.HTMLSelector);var d=document.querySelectorAll(b.CSSSelector),e=document.querySelectorAll(b.JSSelector);c=Array.prototype.filter.call(c,function(a){return b.HTMLFlag.test(a.firstChild.textContent)});c.forEach(function(a){a.removeChild(a.firstChild);"\n"===a.childNodes[0].nodeValue&&a.removeChild(a.childNodes[0]);for(var f=a,c=0;c<b.codeElementDepth;c++)f=
f.parentNode;f.insertAdjacentHTML(b.insertPosition,'<div class="live-demo">'+a.textContent+"</div>")});d=Array.prototype.filter.call(d,function(a){return b.CSSFlag.test(a.firstChild.textContent)});d.forEach(function(a){a.removeChild(a.firstChild);"\n"===a.childNodes[0].nodeValue&&a.removeChild(a.childNodes[0]);document.head.insertAdjacentHTML("beforeend","<style>"+a.textContent+"</style>")});e=Array.prototype.filter.call(e,function(a){return b.JSFlag.test(a.firstChild.textContent)});e.forEach(function(a){a.removeChild(a.firstChild);
"\n"===a.childNodes[0].nodeValue&&a.removeChild(a.childNodes[0]);try{(new Function(a.textContent))()}catch(b){console.error("livedemo failed to execute a javascript code block"),console.log({element:a,error:b})}})});this.liveDemoSettings=this.liveDemoSettings||{};
