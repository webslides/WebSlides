/*
 * Thanks fontastic.me (Font Awesome 4.4 as SVG Icons).
 * Do you want to use other icons?
 * Go to https://fontastic.me > Create account > Select icons > Customize > Publish (SVG Sprite) > Paste .js here
 */

/*
Important!
/css/svg-icons.css is required. 
*/

(function(a,b,c,d){function e(b,c){if(c){var d=c.getAttribute('viewBox'),e=a.createDocumentFragment(),f=c.cloneNode(true);if(d)b.setAttribute('viewBox',d);while(f.childNodes.length)e.appendChild(f.childNodes[0]);b.appendChild(e);}}function f(){var b=this,c=a.createElement('x'),d=b.s;c.innerHTML=b.responseText;b.onload=function(){d.splice(0).map(function(a){e(a[0],c.querySelector('#'+a[1].replace(/(\W)/g,'\\$1')));});};b.onload();}function g(){var a;while((a=b[0])){var e=a.parentNode,h=a.getAttribute('xlink:href').split('#')[1],i='https://file.myfontastic.com/bLfXNBF36ByeujCbT5PohZ/sprites/1477146123.svg';e.removeChild(a);var j=d[i]=d[i]||new XMLHttpRequest();if(!j.s){j.s=[];j.open('GET',i);j.onload=f;j.send();}j.s.push([e,h]);if(j.readyState===4)j.onload();}c(g);}g();})(document,document.getElementsByTagName('use'),window.requestAnimationFrame||window.setTimeout,{});