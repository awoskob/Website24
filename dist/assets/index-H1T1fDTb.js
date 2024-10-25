(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Wu(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Uc={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Gu,function(e,t){var n=[],r=Object.getPrototypeOf,a=n.slice,c=n.flat?function(s){return n.flat.call(s)}:function(s){return n.concat.apply([],s)},u=n.push,h=n.indexOf,d={},_=d.toString,g=d.hasOwnProperty,x=g.toString,S=x.call(Object),E={},b=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},v=function(o){return o!=null&&o===o.window},p=e.document,I={type:!0,src:!0,nonce:!0,noModule:!0};function P(s,o,f){f=f||p;var m,M,y=f.createElement("script");if(y.text=s,o)for(m in I)M=o[m]||o.getAttribute&&o.getAttribute(m),M&&y.setAttribute(m,M);f.head.appendChild(y).parentNode.removeChild(y)}function N(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?d[_.call(s)]||"object":typeof s}var Z="3.7.1",F=/HTML$/i,l=function(s,o){return new l.fn.init(s,o)};l.fn=l.prototype={jquery:Z,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var o=l.merge(this.constructor(),s);return o.prevObject=this,o},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(o,f){return s.call(o,f,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,o){return o%2}))},eq:function(s){var o=this.length,f=+s+(s<0?o:0);return this.pushStack(f>=0&&f<o?[this[f]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var s,o,f,m,M,y,T=arguments[0]||{},O=1,U=arguments.length,H=!1;for(typeof T=="boolean"&&(H=T,T=arguments[O]||{},O++),typeof T!="object"&&!b(T)&&(T={}),O===U&&(T=this,O--);O<U;O++)if((s=arguments[O])!=null)for(o in s)m=s[o],!(o==="__proto__"||T===m)&&(H&&m&&(l.isPlainObject(m)||(M=Array.isArray(m)))?(f=T[o],M&&!Array.isArray(f)?y=[]:!M&&!l.isPlainObject(f)?y={}:y=f,M=!1,T[o]=l.extend(H,y,m)):m!==void 0&&(T[o]=m));return T},l.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var o,f;return!s||_.call(s)!=="[object Object]"?!1:(o=r(s),o?(f=g.call(o,"constructor")&&o.constructor,typeof f=="function"&&x.call(f)===S):!0)},isEmptyObject:function(s){var o;for(o in s)return!1;return!0},globalEval:function(s,o,f){P(s,{nonce:o&&o.nonce},f)},each:function(s,o){var f,m=0;if(q(s))for(f=s.length;m<f&&o.call(s[m],m,s[m])!==!1;m++);else for(m in s)if(o.call(s[m],m,s[m])===!1)break;return s},text:function(s){var o,f="",m=0,M=s.nodeType;if(!M)for(;o=s[m++];)f+=l.text(o);return M===1||M===11?s.textContent:M===9?s.documentElement.textContent:M===3||M===4?s.nodeValue:f},makeArray:function(s,o){var f=o||[];return s!=null&&(q(Object(s))?l.merge(f,typeof s=="string"?[s]:s):u.call(f,s)),f},inArray:function(s,o,f){return o==null?-1:h.call(o,s,f)},isXMLDoc:function(s){var o=s&&s.namespaceURI,f=s&&(s.ownerDocument||s).documentElement;return!F.test(o||f&&f.nodeName||"HTML")},merge:function(s,o){for(var f=+o.length,m=0,M=s.length;m<f;m++)s[M++]=o[m];return s.length=M,s},grep:function(s,o,f){for(var m,M=[],y=0,T=s.length,O=!f;y<T;y++)m=!o(s[y],y),m!==O&&M.push(s[y]);return M},map:function(s,o,f){var m,M,y=0,T=[];if(q(s))for(m=s.length;y<m;y++)M=o(s[y],y,f),M!=null&&T.push(M);else for(y in s)M=o(s[y],y,f),M!=null&&T.push(M);return c(T)},guid:1,support:E}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,o){d["[object "+o+"]"]=o.toLowerCase()});function q(s){var o=!!s&&"length"in s&&s.length,f=N(s);return b(s)||v(s)?!1:f==="array"||o===0||typeof o=="number"&&o>0&&o-1 in s}function le(s,o){return s.nodeName&&s.nodeName.toLowerCase()===o.toLowerCase()}var A=n.pop,R=n.sort,ae=n.splice,W="[\\x20\\t\\r\\n\\f]",re=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g");l.contains=function(s,o){var f=o&&o.parentNode;return s===f||!!(f&&f.nodeType===1&&(s.contains?s.contains(f):s.compareDocumentPosition&&s.compareDocumentPosition(f)&16))};var me=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function te(s,o){return o?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(me,te)};var de=p,ie=u;(function(){var s,o,f,m,M,y=ie,T,O,U,H,ne,fe=l.expando,J=0,_e=0,st=ss(),Ct=ss(),pt=ss(),un=ss(),rn=function(D,z){return D===z&&(M=!0),0},Yn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Kn="(?:\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",At="\\["+W+"*("+Kn+")(?:"+W+"*([*^$|!~]?=)"+W+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Kn+"))|)"+W+"*\\]",Fi=":("+Kn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+At+")*)|.*)\\)|)",It=new RegExp(W+"+","g"),Kt=new RegExp("^"+W+"*,"+W+"*"),Fr=new RegExp("^"+W+"*([>+~]|"+W+")"+W+"*"),ha=new RegExp(W+"|>"),$n=new RegExp(Fi),Br=new RegExp("^"+Kn+"$"),Zn={ID:new RegExp("^#("+Kn+")"),CLASS:new RegExp("^\\.("+Kn+")"),TAG:new RegExp("^("+Kn+"|[*])"),ATTR:new RegExp("^"+At),PSEUDO:new RegExp("^"+Fi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),bool:new RegExp("^(?:"+Yn+")$","i"),needsContext:new RegExp("^"+W+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)","i")},Ei=/^(?:input|select|textarea|button)$/i,Ti=/^h\d$/i,Nn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,da=/[+~]/,si=new RegExp("\\\\[\\da-fA-F]{1,6}"+W+"?|\\\\([^\\r\\n\\f])","g"),ai=function(D,z){var Q="0x"+D.slice(1)-65536;return z||(Q<0?String.fromCharCode(Q+65536):String.fromCharCode(Q>>10|55296,Q&1023|56320))},Ou=function(){bi()},Fu=os(function(D){return D.disabled===!0&&le(D,"fieldset")},{dir:"parentNode",next:"legend"});function Bu(){try{return T.activeElement}catch{}}try{y.apply(n=a.call(de.childNodes),de.childNodes),n[de.childNodes.length].nodeType}catch{y={apply:function(z,Q){ie.apply(z,a.call(Q))},call:function(z){ie.apply(z,a.call(arguments,1))}}}function Ot(D,z,Q,ee){var ue,ye,Le,He,Ie,yt,nt,lt=z&&z.ownerDocument,St=z?z.nodeType:9;if(Q=Q||[],typeof D!="string"||!D||St!==1&&St!==9&&St!==11)return Q;if(!ee&&(bi(z),z=z||T,U)){if(St!==11&&(Ie=Nn.exec(D)))if(ue=Ie[1]){if(St===9)if(Le=z.getElementById(ue)){if(Le.id===ue)return y.call(Q,Le),Q}else return Q;else if(lt&&(Le=lt.getElementById(ue))&&Ot.contains(z,Le)&&Le.id===ue)return y.call(Q,Le),Q}else{if(Ie[2])return y.apply(Q,z.getElementsByTagName(D)),Q;if((ue=Ie[3])&&z.getElementsByClassName)return y.apply(Q,z.getElementsByClassName(ue)),Q}if(!un[D+" "]&&(!H||!H.test(D))){if(nt=D,lt=z,St===1&&(ha.test(D)||Fr.test(D))){for(lt=da.test(D)&&pa(z.parentNode)||z,(lt!=z||!E.scope)&&((He=z.getAttribute("id"))?He=l.escapeSelector(He):z.setAttribute("id",He=fe)),yt=zr(D),ye=yt.length;ye--;)yt[ye]=(He?"#"+He:":scope")+" "+as(yt[ye]);nt=yt.join(",")}try{return y.apply(Q,lt.querySelectorAll(nt)),Q}catch{un(D,!0)}finally{He===fe&&z.removeAttribute("id")}}}return vl(D.replace(re,"$1"),z,Q,ee)}function ss(){var D=[];function z(Q,ee){return D.push(Q+" ")>o.cacheLength&&delete z[D.shift()],z[Q+" "]=ee}return z}function Vn(D){return D[fe]=!0,D}function Ji(D){var z=T.createElement("fieldset");try{return!!D(z)}catch{return!1}finally{z.parentNode&&z.parentNode.removeChild(z),z=null}}function zu(D){return function(z){return le(z,"input")&&z.type===D}}function ku(D){return function(z){return(le(z,"input")||le(z,"button"))&&z.type===D}}function gl(D){return function(z){return"form"in z?z.parentNode&&z.disabled===!1?"label"in z?"label"in z.parentNode?z.parentNode.disabled===D:z.disabled===D:z.isDisabled===D||z.isDisabled!==!D&&Fu(z)===D:z.disabled===D:"label"in z?z.disabled===D:!1}}function Bi(D){return Vn(function(z){return z=+z,Vn(function(Q,ee){for(var ue,ye=D([],Q.length,z),Le=ye.length;Le--;)Q[ue=ye[Le]]&&(Q[ue]=!(ee[ue]=Q[ue]))})})}function pa(D){return D&&typeof D.getElementsByTagName<"u"&&D}function bi(D){var z,Q=D?D.ownerDocument||D:de;return Q==T||Q.nodeType!==9||!Q.documentElement||(T=Q,O=T.documentElement,U=!l.isXMLDoc(T),ne=O.matches||O.webkitMatchesSelector||O.msMatchesSelector,O.msMatchesSelector&&de!=T&&(z=T.defaultView)&&z.top!==z&&z.addEventListener("unload",Ou),E.getById=Ji(function(ee){return O.appendChild(ee).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),E.disconnectedMatch=Ji(function(ee){return ne.call(ee,"*")}),E.scope=Ji(function(){return T.querySelectorAll(":scope")}),E.cssHas=Ji(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),E.getById?(o.filter.ID=function(ee){var ue=ee.replace(si,ai);return function(ye){return ye.getAttribute("id")===ue}},o.find.ID=function(ee,ue){if(typeof ue.getElementById<"u"&&U){var ye=ue.getElementById(ee);return ye?[ye]:[]}}):(o.filter.ID=function(ee){var ue=ee.replace(si,ai);return function(ye){var Le=typeof ye.getAttributeNode<"u"&&ye.getAttributeNode("id");return Le&&Le.value===ue}},o.find.ID=function(ee,ue){if(typeof ue.getElementById<"u"&&U){var ye,Le,He,Ie=ue.getElementById(ee);if(Ie){if(ye=Ie.getAttributeNode("id"),ye&&ye.value===ee)return[Ie];for(He=ue.getElementsByName(ee),Le=0;Ie=He[Le++];)if(ye=Ie.getAttributeNode("id"),ye&&ye.value===ee)return[Ie]}return[]}}),o.find.TAG=function(ee,ue){return typeof ue.getElementsByTagName<"u"?ue.getElementsByTagName(ee):ue.querySelectorAll(ee)},o.find.CLASS=function(ee,ue){if(typeof ue.getElementsByClassName<"u"&&U)return ue.getElementsByClassName(ee)},H=[],Ji(function(ee){var ue;O.appendChild(ee).innerHTML="<a id='"+fe+"' href='' disabled='disabled'></a><select id='"+fe+"-\r\\' disabled='disabled'><option selected=''></option></select>",ee.querySelectorAll("[selected]").length||H.push("\\["+W+"*(?:value|"+Yn+")"),ee.querySelectorAll("[id~="+fe+"-]").length||H.push("~="),ee.querySelectorAll("a#"+fe+"+*").length||H.push(".#.+[+~]"),ee.querySelectorAll(":checked").length||H.push(":checked"),ue=T.createElement("input"),ue.setAttribute("type","hidden"),ee.appendChild(ue).setAttribute("name","D"),O.appendChild(ee).disabled=!0,ee.querySelectorAll(":disabled").length!==2&&H.push(":enabled",":disabled"),ue=T.createElement("input"),ue.setAttribute("name",""),ee.appendChild(ue),ee.querySelectorAll("[name='']").length||H.push("\\["+W+"*name"+W+"*="+W+`*(?:''|"")`)}),E.cssHas||H.push(":has"),H=H.length&&new RegExp(H.join("|")),rn=function(ee,ue){if(ee===ue)return M=!0,0;var ye=!ee.compareDocumentPosition-!ue.compareDocumentPosition;return ye||(ye=(ee.ownerDocument||ee)==(ue.ownerDocument||ue)?ee.compareDocumentPosition(ue):1,ye&1||!E.sortDetached&&ue.compareDocumentPosition(ee)===ye?ee===T||ee.ownerDocument==de&&Ot.contains(de,ee)?-1:ue===T||ue.ownerDocument==de&&Ot.contains(de,ue)?1:m?h.call(m,ee)-h.call(m,ue):0:ye&4?-1:1)}),T}Ot.matches=function(D,z){return Ot(D,null,null,z)},Ot.matchesSelector=function(D,z){if(bi(D),U&&!un[z+" "]&&(!H||!H.test(z)))try{var Q=ne.call(D,z);if(Q||E.disconnectedMatch||D.document&&D.document.nodeType!==11)return Q}catch{un(z,!0)}return Ot(z,T,null,[D]).length>0},Ot.contains=function(D,z){return(D.ownerDocument||D)!=T&&bi(D),l.contains(D,z)},Ot.attr=function(D,z){(D.ownerDocument||D)!=T&&bi(D);var Q=o.attrHandle[z.toLowerCase()],ee=Q&&g.call(o.attrHandle,z.toLowerCase())?Q(D,z,!U):void 0;return ee!==void 0?ee:D.getAttribute(z)},Ot.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},l.uniqueSort=function(D){var z,Q=[],ee=0,ue=0;if(M=!E.sortStable,m=!E.sortStable&&a.call(D,0),R.call(D,rn),M){for(;z=D[ue++];)z===D[ue]&&(ee=Q.push(ue));for(;ee--;)ae.call(D,Q[ee],1)}return m=null,D},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:Vn,match:Zn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(si,ai),D[3]=(D[3]||D[4]||D[5]||"").replace(si,ai),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||Ot.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&Ot.error(D[0]),D},PSEUDO:function(D){var z,Q=!D[6]&&D[2];return Zn.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":Q&&$n.test(Q)&&(z=zr(Q,!0))&&(z=Q.indexOf(")",Q.length-z)-Q.length)&&(D[0]=D[0].slice(0,z),D[2]=Q.slice(0,z)),D.slice(0,3))}},filter:{TAG:function(D){var z=D.replace(si,ai).toLowerCase();return D==="*"?function(){return!0}:function(Q){return le(Q,z)}},CLASS:function(D){var z=st[D+" "];return z||(z=new RegExp("(^|"+W+")"+D+"("+W+"|$)"))&&st(D,function(Q){return z.test(typeof Q.className=="string"&&Q.className||typeof Q.getAttribute<"u"&&Q.getAttribute("class")||"")})},ATTR:function(D,z,Q){return function(ee){var ue=Ot.attr(ee,D);return ue==null?z==="!=":z?(ue+="",z==="="?ue===Q:z==="!="?ue!==Q:z==="^="?Q&&ue.indexOf(Q)===0:z==="*="?Q&&ue.indexOf(Q)>-1:z==="$="?Q&&ue.slice(-Q.length)===Q:z==="~="?(" "+ue.replace(It," ")+" ").indexOf(Q)>-1:z==="|="?ue===Q||ue.slice(0,Q.length+1)===Q+"-":!1):!0}},CHILD:function(D,z,Q,ee,ue){var ye=D.slice(0,3)!=="nth",Le=D.slice(-4)!=="last",He=z==="of-type";return ee===1&&ue===0?function(Ie){return!!Ie.parentNode}:function(Ie,yt,nt){var lt,St,Qe,Vt,An,mn=ye!==Le?"nextSibling":"previousSibling",Un=Ie.parentNode,Qn=He&&Ie.nodeName.toLowerCase(),er=!nt&&!He,yn=!1;if(Un){if(ye){for(;mn;){for(Qe=Ie;Qe=Qe[mn];)if(He?le(Qe,Qn):Qe.nodeType===1)return!1;An=mn=D==="only"&&!An&&"nextSibling"}return!0}if(An=[Le?Un.firstChild:Un.lastChild],Le&&er){for(St=Un[fe]||(Un[fe]={}),lt=St[D]||[],Vt=lt[0]===J&&lt[1],yn=Vt&&lt[2],Qe=Vt&&Un.childNodes[Vt];Qe=++Vt&&Qe&&Qe[mn]||(yn=Vt=0)||An.pop();)if(Qe.nodeType===1&&++yn&&Qe===Ie){St[D]=[J,Vt,yn];break}}else if(er&&(St=Ie[fe]||(Ie[fe]={}),lt=St[D]||[],Vt=lt[0]===J&&lt[1],yn=Vt),yn===!1)for(;(Qe=++Vt&&Qe&&Qe[mn]||(yn=Vt=0)||An.pop())&&!((He?le(Qe,Qn):Qe.nodeType===1)&&++yn&&(er&&(St=Qe[fe]||(Qe[fe]={}),St[D]=[J,yn]),Qe===Ie)););return yn-=ue,yn===ee||yn%ee===0&&yn/ee>=0}}},PSEUDO:function(D,z){var Q,ee=o.pseudos[D]||o.setFilters[D.toLowerCase()]||Ot.error("unsupported pseudo: "+D);return ee[fe]?ee(z):ee.length>1?(Q=[D,D,"",z],o.setFilters.hasOwnProperty(D.toLowerCase())?Vn(function(ue,ye){for(var Le,He=ee(ue,z),Ie=He.length;Ie--;)Le=h.call(ue,He[Ie]),ue[Le]=!(ye[Le]=He[Ie])}):function(ue){return ee(ue,0,Q)}):ee}},pseudos:{not:Vn(function(D){var z=[],Q=[],ee=va(D.replace(re,"$1"));return ee[fe]?Vn(function(ue,ye,Le,He){for(var Ie,yt=ee(ue,null,He,[]),nt=ue.length;nt--;)(Ie=yt[nt])&&(ue[nt]=!(ye[nt]=Ie))}):function(ue,ye,Le){return z[0]=ue,ee(z,null,Le,Q),z[0]=null,!Q.pop()}}),has:Vn(function(D){return function(z){return Ot(D,z).length>0}}),contains:Vn(function(D){return D=D.replace(si,ai),function(z){return(z.textContent||l.text(z)).indexOf(D)>-1}}),lang:Vn(function(D){return Br.test(D||"")||Ot.error("unsupported lang: "+D),D=D.replace(si,ai).toLowerCase(),function(z){var Q;do if(Q=U?z.lang:z.getAttribute("xml:lang")||z.getAttribute("lang"))return Q=Q.toLowerCase(),Q===D||Q.indexOf(D+"-")===0;while((z=z.parentNode)&&z.nodeType===1);return!1}}),target:function(D){var z=e.location&&e.location.hash;return z&&z.slice(1)===D.id},root:function(D){return D===O},focus:function(D){return D===Bu()&&T.hasFocus()&&!!(D.type||D.href||~D.tabIndex)},enabled:gl(!1),disabled:gl(!0),checked:function(D){return le(D,"input")&&!!D.checked||le(D,"option")&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!o.pseudos.empty(D)},header:function(D){return Ti.test(D.nodeName)},input:function(D){return Ei.test(D.nodeName)},button:function(D){return le(D,"input")&&D.type==="button"||le(D,"button")},text:function(D){var z;return le(D,"input")&&D.type==="text"&&((z=D.getAttribute("type"))==null||z.toLowerCase()==="text")},first:Bi(function(){return[0]}),last:Bi(function(D,z){return[z-1]}),eq:Bi(function(D,z,Q){return[Q<0?Q+z:Q]}),even:Bi(function(D,z){for(var Q=0;Q<z;Q+=2)D.push(Q);return D}),odd:Bi(function(D,z){for(var Q=1;Q<z;Q+=2)D.push(Q);return D}),lt:Bi(function(D,z,Q){var ee;for(Q<0?ee=Q+z:Q>z?ee=z:ee=Q;--ee>=0;)D.push(ee);return D}),gt:Bi(function(D,z,Q){for(var ee=Q<0?Q+z:Q;++ee<z;)D.push(ee);return D})}},o.pseudos.nth=o.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[s]=zu(s);for(s in{submit:!0,reset:!0})o.pseudos[s]=ku(s);function _l(){}_l.prototype=o.filters=o.pseudos,o.setFilters=new _l;function zr(D,z){var Q,ee,ue,ye,Le,He,Ie,yt=Ct[D+" "];if(yt)return z?0:yt.slice(0);for(Le=D,He=[],Ie=o.preFilter;Le;){(!Q||(ee=Kt.exec(Le)))&&(ee&&(Le=Le.slice(ee[0].length)||Le),He.push(ue=[])),Q=!1,(ee=Fr.exec(Le))&&(Q=ee.shift(),ue.push({value:Q,type:ee[0].replace(re," ")}),Le=Le.slice(Q.length));for(ye in o.filter)(ee=Zn[ye].exec(Le))&&(!Ie[ye]||(ee=Ie[ye](ee)))&&(Q=ee.shift(),ue.push({value:Q,type:ye,matches:ee}),Le=Le.slice(Q.length));if(!Q)break}return z?Le.length:Le?Ot.error(D):Ct(D,He).slice(0)}function as(D){for(var z=0,Q=D.length,ee="";z<Q;z++)ee+=D[z].value;return ee}function os(D,z,Q){var ee=z.dir,ue=z.next,ye=ue||ee,Le=Q&&ye==="parentNode",He=_e++;return z.first?function(Ie,yt,nt){for(;Ie=Ie[ee];)if(Ie.nodeType===1||Le)return D(Ie,yt,nt);return!1}:function(Ie,yt,nt){var lt,St,Qe=[J,He];if(nt){for(;Ie=Ie[ee];)if((Ie.nodeType===1||Le)&&D(Ie,yt,nt))return!0}else for(;Ie=Ie[ee];)if(Ie.nodeType===1||Le)if(St=Ie[fe]||(Ie[fe]={}),ue&&le(Ie,ue))Ie=Ie[ee]||Ie;else{if((lt=St[ye])&&lt[0]===J&&lt[1]===He)return Qe[2]=lt[2];if(St[ye]=Qe,Qe[2]=D(Ie,yt,nt))return!0}return!1}}function ma(D){return D.length>1?function(z,Q,ee){for(var ue=D.length;ue--;)if(!D[ue](z,Q,ee))return!1;return!0}:D[0]}function Hu(D,z,Q){for(var ee=0,ue=z.length;ee<ue;ee++)Ot(D,z[ee],Q);return Q}function ls(D,z,Q,ee,ue){for(var ye,Le=[],He=0,Ie=D.length,yt=z!=null;He<Ie;He++)(ye=D[He])&&(!Q||Q(ye,ee,ue))&&(Le.push(ye),yt&&z.push(He));return Le}function ga(D,z,Q,ee,ue,ye){return ee&&!ee[fe]&&(ee=ga(ee)),ue&&!ue[fe]&&(ue=ga(ue,ye)),Vn(function(Le,He,Ie,yt){var nt,lt,St,Qe,Vt=[],An=[],mn=He.length,Un=Le||Hu(z||"*",Ie.nodeType?[Ie]:Ie,[]),Qn=D&&(Le||!z)?ls(Un,Vt,D,Ie,yt):Un;if(Q?(Qe=ue||(Le?D:mn||ee)?[]:He,Q(Qn,Qe,Ie,yt)):Qe=Qn,ee)for(nt=ls(Qe,An),ee(nt,[],Ie,yt),lt=nt.length;lt--;)(St=nt[lt])&&(Qe[An[lt]]=!(Qn[An[lt]]=St));if(Le){if(ue||D){if(ue){for(nt=[],lt=Qe.length;lt--;)(St=Qe[lt])&&nt.push(Qn[lt]=St);ue(null,Qe=[],nt,yt)}for(lt=Qe.length;lt--;)(St=Qe[lt])&&(nt=ue?h.call(Le,St):Vt[lt])>-1&&(Le[nt]=!(He[nt]=St))}}else Qe=ls(Qe===He?Qe.splice(mn,Qe.length):Qe),ue?ue(null,He,Qe,yt):y.apply(He,Qe)})}function _a(D){for(var z,Q,ee,ue=D.length,ye=o.relative[D[0].type],Le=ye||o.relative[" "],He=ye?1:0,Ie=os(function(lt){return lt===z},Le,!0),yt=os(function(lt){return h.call(z,lt)>-1},Le,!0),nt=[function(lt,St,Qe){var Vt=!ye&&(Qe||St!=f)||((z=St).nodeType?Ie(lt,St,Qe):yt(lt,St,Qe));return z=null,Vt}];He<ue;He++)if(Q=o.relative[D[He].type])nt=[os(ma(nt),Q)];else{if(Q=o.filter[D[He].type].apply(null,D[He].matches),Q[fe]){for(ee=++He;ee<ue&&!o.relative[D[ee].type];ee++);return ga(He>1&&ma(nt),He>1&&as(D.slice(0,He-1).concat({value:D[He-2].type===" "?"*":""})).replace(re,"$1"),Q,He<ee&&_a(D.slice(He,ee)),ee<ue&&_a(D=D.slice(ee)),ee<ue&&as(D))}nt.push(Q)}return ma(nt)}function Vu(D,z){var Q=z.length>0,ee=D.length>0,ue=function(ye,Le,He,Ie,yt){var nt,lt,St,Qe=0,Vt="0",An=ye&&[],mn=[],Un=f,Qn=ye||ee&&o.find.TAG("*",yt),er=J+=Un==null?1:Math.random()||.1,yn=Qn.length;for(yt&&(f=Le==T||Le||yt);Vt!==yn&&(nt=Qn[Vt])!=null;Vt++){if(ee&&nt){for(lt=0,!Le&&nt.ownerDocument!=T&&(bi(nt),He=!U);St=D[lt++];)if(St(nt,Le||T,He)){y.call(Ie,nt);break}yt&&(J=er)}Q&&((nt=!St&&nt)&&Qe--,ye&&An.push(nt))}if(Qe+=Vt,Q&&Vt!==Qe){for(lt=0;St=z[lt++];)St(An,mn,Le,He);if(ye){if(Qe>0)for(;Vt--;)An[Vt]||mn[Vt]||(mn[Vt]=A.call(Ie));mn=ls(mn)}y.apply(Ie,mn),yt&&!ye&&mn.length>0&&Qe+z.length>1&&l.uniqueSort(Ie)}return yt&&(J=er,f=Un),An};return Q?Vn(ue):ue}function va(D,z){var Q,ee=[],ue=[],ye=pt[D+" "];if(!ye){for(z||(z=zr(D)),Q=z.length;Q--;)ye=_a(z[Q]),ye[fe]?ee.push(ye):ue.push(ye);ye=pt(D,Vu(ue,ee)),ye.selector=D}return ye}function vl(D,z,Q,ee){var ue,ye,Le,He,Ie,yt=typeof D=="function"&&D,nt=!ee&&zr(D=yt.selector||D);if(Q=Q||[],nt.length===1){if(ye=nt[0]=nt[0].slice(0),ye.length>2&&(Le=ye[0]).type==="ID"&&z.nodeType===9&&U&&o.relative[ye[1].type]){if(z=(o.find.ID(Le.matches[0].replace(si,ai),z)||[])[0],z)yt&&(z=z.parentNode);else return Q;D=D.slice(ye.shift().value.length)}for(ue=Zn.needsContext.test(D)?0:ye.length;ue--&&(Le=ye[ue],!o.relative[He=Le.type]);)if((Ie=o.find[He])&&(ee=Ie(Le.matches[0].replace(si,ai),da.test(ye[0].type)&&pa(z.parentNode)||z))){if(ye.splice(ue,1),D=ee.length&&as(ye),!D)return y.apply(Q,ee),Q;break}}return(yt||va(D,nt))(ee,z,!U,Q,!z||da.test(D)&&pa(z.parentNode)||z),Q}E.sortStable=fe.split("").sort(rn).join("")===fe,bi(),E.sortDetached=Ji(function(D){return D.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Ot,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Ot.compile=va,Ot.select=vl,Ot.setDocument=bi,Ot.tokenize=zr,Ot.escape=l.escapeSelector,Ot.getText=l.text,Ot.isXML=l.isXMLDoc,Ot.selectors=l.expr,Ot.support=l.support,Ot.uniqueSort=l.uniqueSort})();var Se=function(s,o,f){for(var m=[],M=f!==void 0;(s=s[o])&&s.nodeType!==9;)if(s.nodeType===1){if(M&&l(s).is(f))break;m.push(s)}return m},Pe=function(s,o){for(var f=[];s;s=s.nextSibling)s.nodeType===1&&s!==o&&f.push(s);return f},Ue=l.expr.match.needsContext,at=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function vt(s,o,f){return b(o)?l.grep(s,function(m,M){return!!o.call(m,M,m)!==f}):o.nodeType?l.grep(s,function(m){return m===o!==f}):typeof o!="string"?l.grep(s,function(m){return h.call(o,m)>-1!==f}):l.filter(o,s,f)}l.filter=function(s,o,f){var m=o[0];return f&&(s=":not("+s+")"),o.length===1&&m.nodeType===1?l.find.matchesSelector(m,s)?[m]:[]:l.find.matches(s,l.grep(o,function(M){return M.nodeType===1}))},l.fn.extend({find:function(s){var o,f,m=this.length,M=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(o=0;o<m;o++)if(l.contains(M[o],this))return!0}));for(f=this.pushStack([]),o=0;o<m;o++)l.find(s,M[o],f);return m>1?l.uniqueSort(f):f},filter:function(s){return this.pushStack(vt(this,s||[],!1))},not:function(s){return this.pushStack(vt(this,s||[],!0))},is:function(s){return!!vt(this,typeof s=="string"&&Ue.test(s)?l(s):s||[],!1).length}});var ce,ve=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Be=l.fn.init=function(s,o,f){var m,M;if(!s)return this;if(f=f||ce,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?m=[null,s,null]:m=ve.exec(s),m&&(m[1]||!o))if(m[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(m[1],o&&o.nodeType?o.ownerDocument||o:p,!0)),at.test(m[1])&&l.isPlainObject(o))for(m in o)b(this[m])?this[m](o[m]):this.attr(m,o[m]);return this}else return M=p.getElementById(m[2]),M&&(this[0]=M,this.length=1),this;else return!o||o.jquery?(o||f).find(s):this.constructor(o).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(b(s))return f.ready!==void 0?f.ready(s):s(l)}return l.makeArray(s,this)};Be.prototype=l.fn,ce=l(p);var Ne=/^(?:parents|prev(?:Until|All))/,tt={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var o=l(s,this),f=o.length;return this.filter(function(){for(var m=0;m<f;m++)if(l.contains(this,o[m]))return!0})},closest:function(s,o){var f,m=0,M=this.length,y=[],T=typeof s!="string"&&l(s);if(!Ue.test(s)){for(;m<M;m++)for(f=this[m];f&&f!==o;f=f.parentNode)if(f.nodeType<11&&(T?T.index(f)>-1:f.nodeType===1&&l.find.matchesSelector(f,s))){y.push(f);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?h.call(l(s),this[0]):h.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,o))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function je(s,o){for(;(s=s[o])&&s.nodeType!==1;);return s}l.each({parent:function(s){var o=s.parentNode;return o&&o.nodeType!==11?o:null},parents:function(s){return Se(s,"parentNode")},parentsUntil:function(s,o,f){return Se(s,"parentNode",f)},next:function(s){return je(s,"nextSibling")},prev:function(s){return je(s,"previousSibling")},nextAll:function(s){return Se(s,"nextSibling")},prevAll:function(s){return Se(s,"previousSibling")},nextUntil:function(s,o,f){return Se(s,"nextSibling",f)},prevUntil:function(s,o,f){return Se(s,"previousSibling",f)},siblings:function(s){return Pe((s.parentNode||{}).firstChild,s)},children:function(s){return Pe(s.firstChild)},contents:function(s){return s.contentDocument!=null&&r(s.contentDocument)?s.contentDocument:(le(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,o){l.fn[s]=function(f,m){var M=l.map(this,o,f);return s.slice(-5)!=="Until"&&(m=f),m&&typeof m=="string"&&(M=l.filter(m,M)),this.length>1&&(tt[s]||l.uniqueSort(M),Ne.test(s)&&M.reverse()),this.pushStack(M)}});var it=/[^\x20\t\r\n\f]+/g;function Rt(s){var o={};return l.each(s.match(it)||[],function(f,m){o[m]=!0}),o}l.Callbacks=function(s){s=typeof s=="string"?Rt(s):l.extend({},s);var o,f,m,M,y=[],T=[],O=-1,U=function(){for(M=M||s.once,m=o=!0;T.length;O=-1)for(f=T.shift();++O<y.length;)y[O].apply(f[0],f[1])===!1&&s.stopOnFalse&&(O=y.length,f=!1);s.memory||(f=!1),o=!1,M&&(f?y=[]:y="")},H={add:function(){return y&&(f&&!o&&(O=y.length-1,T.push(f)),function ne(fe){l.each(fe,function(J,_e){b(_e)?(!s.unique||!H.has(_e))&&y.push(_e):_e&&_e.length&&N(_e)!=="string"&&ne(_e)})}(arguments),f&&!o&&U()),this},remove:function(){return l.each(arguments,function(ne,fe){for(var J;(J=l.inArray(fe,y,J))>-1;)y.splice(J,1),J<=O&&O--}),this},has:function(ne){return ne?l.inArray(ne,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return M=T=[],y=f="",this},disabled:function(){return!y},lock:function(){return M=T=[],!f&&!o&&(y=f=""),this},locked:function(){return!!M},fireWith:function(ne,fe){return M||(fe=fe||[],fe=[ne,fe.slice?fe.slice():fe],T.push(fe),o||U()),this},fire:function(){return H.fireWith(this,arguments),this},fired:function(){return!!m}};return H};function ct(s){return s}function B(s){throw s}function en(s,o,f,m){var M;try{s&&b(M=s.promise)?M.call(s).done(o).fail(f):s&&b(M=s.then)?M.call(s,o,f):o.apply(void 0,[s].slice(m))}catch(y){f.apply(void 0,[y])}}l.extend({Deferred:function(s){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],f="pending",m={state:function(){return f},always:function(){return M.done(arguments).fail(arguments),this},catch:function(y){return m.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(T){l.each(o,function(O,U){var H=b(y[U[4]])&&y[U[4]];M[U[1]](function(){var ne=H&&H.apply(this,arguments);ne&&b(ne.promise)?ne.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[U[0]+"With"](this,H?[ne]:arguments)})}),y=null}).promise()},then:function(y,T,O){var U=0;function H(ne,fe,J,_e){return function(){var st=this,Ct=arguments,pt=function(){var rn,Yn;if(!(ne<U)){if(rn=J.apply(st,Ct),rn===fe.promise())throw new TypeError("Thenable self-resolution");Yn=rn&&(typeof rn=="object"||typeof rn=="function")&&rn.then,b(Yn)?_e?Yn.call(rn,H(U,fe,ct,_e),H(U,fe,B,_e)):(U++,Yn.call(rn,H(U,fe,ct,_e),H(U,fe,B,_e),H(U,fe,ct,fe.notifyWith))):(J!==ct&&(st=void 0,Ct=[rn]),(_e||fe.resolveWith)(st,Ct))}},un=_e?pt:function(){try{pt()}catch(rn){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(rn,un.error),ne+1>=U&&(J!==B&&(st=void 0,Ct=[rn]),fe.rejectWith(st,Ct))}};ne?un():(l.Deferred.getErrorHook?un.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(un.error=l.Deferred.getStackHook()),e.setTimeout(un))}}return l.Deferred(function(ne){o[0][3].add(H(0,ne,b(O)?O:ct,ne.notifyWith)),o[1][3].add(H(0,ne,b(y)?y:ct)),o[2][3].add(H(0,ne,b(T)?T:B))}).promise()},promise:function(y){return y!=null?l.extend(y,m):m}},M={};return l.each(o,function(y,T){var O=T[2],U=T[5];m[T[1]]=O.add,U&&O.add(function(){f=U},o[3-y][2].disable,o[3-y][3].disable,o[0][2].lock,o[0][3].lock),O.add(T[3].fire),M[T[0]]=function(){return M[T[0]+"With"](this===M?void 0:this,arguments),this},M[T[0]+"With"]=O.fireWith}),m.promise(M),s&&s.call(M,M),M},when:function(s){var o=arguments.length,f=o,m=Array(f),M=a.call(arguments),y=l.Deferred(),T=function(O){return function(U){m[O]=this,M[O]=arguments.length>1?a.call(arguments):U,--o||y.resolveWith(m,M)}};if(o<=1&&(en(s,y.done(T(f)).resolve,y.reject,!o),y.state()==="pending"||b(M[f]&&M[f].then)))return y.then();for(;f--;)en(M[f],T(f),y.reject);return y.promise()}});var ht=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,o){e.console&&e.console.warn&&s&&ht.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,o)},l.readyException=function(s){e.setTimeout(function(){throw s})};var qe=l.Deferred();l.fn.ready=function(s){return qe.then(s).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&qe.resolveWith(p,[l]))}}),l.ready.then=qe.then;function Ye(){p.removeEventListener("DOMContentLoaded",Ye),e.removeEventListener("load",Ye),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?e.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",Ye),e.addEventListener("load",Ye));var dt=function(s,o,f,m,M,y,T){var O=0,U=s.length,H=f==null;if(N(f)==="object"){M=!0;for(O in f)dt(s,o,O,f[O],!0,y,T)}else if(m!==void 0&&(M=!0,b(m)||(T=!0),H&&(T?(o.call(s,m),o=null):(H=o,o=function(ne,fe,J){return H.call(l(ne),J)})),o))for(;O<U;O++)o(s[O],f,T?m:m.call(s[O],O,o(s[O],f)));return M?s:H?o.call(s):U?o(s[0],f):y},Ke=/^-ms-/,L=/-([a-z])/g;function w(s,o){return o.toUpperCase()}function Y(s){return s.replace(Ke,"ms-").replace(L,w)}var he=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function ge(){this.expando=l.expando+ge.uid++}ge.uid=1,ge.prototype={cache:function(s){var o=s[this.expando];return o||(o={},he(s)&&(s.nodeType?s[this.expando]=o:Object.defineProperty(s,this.expando,{value:o,configurable:!0}))),o},set:function(s,o,f){var m,M=this.cache(s);if(typeof o=="string")M[Y(o)]=f;else for(m in o)M[Y(m)]=o[m];return M},get:function(s,o){return o===void 0?this.cache(s):s[this.expando]&&s[this.expando][Y(o)]},access:function(s,o,f){return o===void 0||o&&typeof o=="string"&&f===void 0?this.get(s,o):(this.set(s,o,f),f!==void 0?f:o)},remove:function(s,o){var f,m=s[this.expando];if(m!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(Y):(o=Y(o),o=o in m?[o]:o.match(it)||[]),f=o.length;f--;)delete m[o[f]];(o===void 0||l.isEmptyObject(m))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var o=s[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var X=new ge,we=new ge,Te=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Oe=/[A-Z]/g;function Tt(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Te.test(s)?JSON.parse(s):s}function xe(s,o,f){var m;if(f===void 0&&s.nodeType===1)if(m="data-"+o.replace(Oe,"-$&").toLowerCase(),f=s.getAttribute(m),typeof f=="string"){try{f=Tt(f)}catch{}we.set(s,o,f)}else f=void 0;return f}l.extend({hasData:function(s){return we.hasData(s)||X.hasData(s)},data:function(s,o,f){return we.access(s,o,f)},removeData:function(s,o){we.remove(s,o)},_data:function(s,o,f){return X.access(s,o,f)},_removeData:function(s,o){X.remove(s,o)}}),l.fn.extend({data:function(s,o){var f,m,M,y=this[0],T=y&&y.attributes;if(s===void 0){if(this.length&&(M=we.get(y),y.nodeType===1&&!X.get(y,"hasDataAttrs"))){for(f=T.length;f--;)T[f]&&(m=T[f].name,m.indexOf("data-")===0&&(m=Y(m.slice(5)),xe(y,m,M[m])));X.set(y,"hasDataAttrs",!0)}return M}return typeof s=="object"?this.each(function(){we.set(this,s)}):dt(this,function(O){var U;if(y&&O===void 0)return U=we.get(y,s),U!==void 0||(U=xe(y,s),U!==void 0)?U:void 0;this.each(function(){we.set(this,s,O)})},null,o,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){we.remove(this,s)})}}),l.extend({queue:function(s,o,f){var m;if(s)return o=(o||"fx")+"queue",m=X.get(s,o),f&&(!m||Array.isArray(f)?m=X.access(s,o,l.makeArray(f)):m.push(f)),m||[]},dequeue:function(s,o){o=o||"fx";var f=l.queue(s,o),m=f.length,M=f.shift(),y=l._queueHooks(s,o),T=function(){l.dequeue(s,o)};M==="inprogress"&&(M=f.shift(),m--),M&&(o==="fx"&&f.unshift("inprogress"),delete y.stop,M.call(s,T,y)),!m&&y&&y.empty.fire()},_queueHooks:function(s,o){var f=o+"queueHooks";return X.get(s,f)||X.access(s,f,{empty:l.Callbacks("once memory").add(function(){X.remove(s,[o+"queue",f])})})}}),l.fn.extend({queue:function(s,o){var f=2;return typeof s!="string"&&(o=s,s="fx",f--),arguments.length<f?l.queue(this[0],s):o===void 0?this:this.each(function(){var m=l.queue(this,s,o);l._queueHooks(this,s),s==="fx"&&m[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,o){var f,m=1,M=l.Deferred(),y=this,T=this.length,O=function(){--m||M.resolveWith(y,[y])};for(typeof s!="string"&&(o=s,s=void 0),s=s||"fx";T--;)f=X.get(y[T],s+"queueHooks"),f&&f.empty&&(m++,f.empty.add(O));return O(),M.promise(o)}});var Fe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,$e=new RegExp("^(?:([+-])=|)("+Fe+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Ce=p.documentElement,ut=function(s){return l.contains(s.ownerDocument,s)},rt={composed:!0};Ce.getRootNode&&(ut=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(rt)===s.ownerDocument});var Pt=function(s,o){return s=o||s,s.style.display==="none"||s.style.display===""&&ut(s)&&l.css(s,"display")==="none"};function k(s,o,f,m){var M,y,T=20,O=m?function(){return m.cur()}:function(){return l.css(s,o,"")},U=O(),H=f&&f[3]||(l.cssNumber[o]?"":"px"),ne=s.nodeType&&(l.cssNumber[o]||H!=="px"&&+U)&&$e.exec(l.css(s,o));if(ne&&ne[3]!==H){for(U=U/2,H=H||ne[3],ne=+U||1;T--;)l.style(s,o,ne+H),(1-y)*(1-(y=O()/U||.5))<=0&&(T=0),ne=ne/y;ne=ne*2,l.style(s,o,ne+H),f=f||[]}return f&&(ne=+ne||+U||0,M=f[1]?ne+(f[1]+1)*f[2]:+f[2],m&&(m.unit=H,m.start=ne,m.end=M)),M}var Re={};function se(s){var o,f=s.ownerDocument,m=s.nodeName,M=Re[m];return M||(o=f.body.appendChild(f.createElement(m)),M=l.css(o,"display"),o.parentNode.removeChild(o),M==="none"&&(M="block"),Re[m]=M,M)}function pe(s,o){for(var f,m,M=[],y=0,T=s.length;y<T;y++)m=s[y],m.style&&(f=m.style.display,o?(f==="none"&&(M[y]=X.get(m,"display")||null,M[y]||(m.style.display="")),m.style.display===""&&Pt(m)&&(M[y]=se(m))):f!=="none"&&(M[y]="none",X.set(m,"display",f)));for(y=0;y<T;y++)M[y]!=null&&(s[y].style.display=M[y]);return s}l.fn.extend({show:function(){return pe(this,!0)},hide:function(){return pe(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){Pt(this)?l(this).show():l(this).hide()})}});var Ee=/^(?:checkbox|radio)$/i,De=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,xt=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=p.createDocumentFragment(),o=s.appendChild(p.createElement("div")),f=p.createElement("input");f.setAttribute("type","radio"),f.setAttribute("checked","checked"),f.setAttribute("name","t"),o.appendChild(f),E.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",E.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",E.option=!!o.lastChild})();var bt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};bt.tbody=bt.tfoot=bt.colgroup=bt.caption=bt.thead,bt.th=bt.td,E.option||(bt.optgroup=bt.option=[1,"<select multiple='multiple'>","</select>"]);function Ut(s,o){var f;return typeof s.getElementsByTagName<"u"?f=s.getElementsByTagName(o||"*"):typeof s.querySelectorAll<"u"?f=s.querySelectorAll(o||"*"):f=[],o===void 0||o&&le(s,o)?l.merge([s],f):f}function Mt(s,o){for(var f=0,m=s.length;f<m;f++)X.set(s[f],"globalEval",!o||X.get(o[f],"globalEval"))}var tn=/<|&#?\w+;/;function oe(s,o,f,m,M){for(var y,T,O,U,H,ne,fe=o.createDocumentFragment(),J=[],_e=0,st=s.length;_e<st;_e++)if(y=s[_e],y||y===0)if(N(y)==="object")l.merge(J,y.nodeType?[y]:y);else if(!tn.test(y))J.push(o.createTextNode(y));else{for(T=T||fe.appendChild(o.createElement("div")),O=(De.exec(y)||["",""])[1].toLowerCase(),U=bt[O]||bt._default,T.innerHTML=U[1]+l.htmlPrefilter(y)+U[2],ne=U[0];ne--;)T=T.lastChild;l.merge(J,T.childNodes),T=fe.firstChild,T.textContent=""}for(fe.textContent="",_e=0;y=J[_e++];){if(m&&l.inArray(y,m)>-1){M&&M.push(y);continue}if(H=ut(y),T=Ut(fe.appendChild(y),"script"),H&&Mt(T),f)for(ne=0;y=T[ne++];)xt.test(y.type||"")&&f.push(y)}return fe}var Xe=/^([^.]*)(?:\.(.+)|)/;function Ze(){return!0}function ft(){return!1}function Ht(s,o,f,m,M,y){var T,O;if(typeof o=="object"){typeof f!="string"&&(m=m||f,f=void 0);for(O in o)Ht(s,O,f,m,o[O],y);return s}if(m==null&&M==null?(M=f,m=f=void 0):M==null&&(typeof f=="string"?(M=m,m=void 0):(M=m,m=f,f=void 0)),M===!1)M=ft;else if(!M)return s;return y===1&&(T=M,M=function(U){return l().off(U),T.apply(this,arguments)},M.guid=T.guid||(T.guid=l.guid++)),s.each(function(){l.event.add(this,o,M,m,f)})}l.event={global:{},add:function(s,o,f,m,M){var y,T,O,U,H,ne,fe,J,_e,st,Ct,pt=X.get(s);if(he(s))for(f.handler&&(y=f,f=y.handler,M=y.selector),M&&l.find.matchesSelector(Ce,M),f.guid||(f.guid=l.guid++),(U=pt.events)||(U=pt.events=Object.create(null)),(T=pt.handle)||(T=pt.handle=function(un){return typeof l<"u"&&l.event.triggered!==un.type?l.event.dispatch.apply(s,arguments):void 0}),o=(o||"").match(it)||[""],H=o.length;H--;)O=Xe.exec(o[H])||[],_e=Ct=O[1],st=(O[2]||"").split(".").sort(),_e&&(fe=l.event.special[_e]||{},_e=(M?fe.delegateType:fe.bindType)||_e,fe=l.event.special[_e]||{},ne=l.extend({type:_e,origType:Ct,data:m,handler:f,guid:f.guid,selector:M,needsContext:M&&l.expr.match.needsContext.test(M),namespace:st.join(".")},y),(J=U[_e])||(J=U[_e]=[],J.delegateCount=0,(!fe.setup||fe.setup.call(s,m,st,T)===!1)&&s.addEventListener&&s.addEventListener(_e,T)),fe.add&&(fe.add.call(s,ne),ne.handler.guid||(ne.handler.guid=f.guid)),M?J.splice(J.delegateCount++,0,ne):J.push(ne),l.event.global[_e]=!0)},remove:function(s,o,f,m,M){var y,T,O,U,H,ne,fe,J,_e,st,Ct,pt=X.hasData(s)&&X.get(s);if(!(!pt||!(U=pt.events))){for(o=(o||"").match(it)||[""],H=o.length;H--;){if(O=Xe.exec(o[H])||[],_e=Ct=O[1],st=(O[2]||"").split(".").sort(),!_e){for(_e in U)l.event.remove(s,_e+o[H],f,m,!0);continue}for(fe=l.event.special[_e]||{},_e=(m?fe.delegateType:fe.bindType)||_e,J=U[_e]||[],O=O[2]&&new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=y=J.length;y--;)ne=J[y],(M||Ct===ne.origType)&&(!f||f.guid===ne.guid)&&(!O||O.test(ne.namespace))&&(!m||m===ne.selector||m==="**"&&ne.selector)&&(J.splice(y,1),ne.selector&&J.delegateCount--,fe.remove&&fe.remove.call(s,ne));T&&!J.length&&((!fe.teardown||fe.teardown.call(s,st,pt.handle)===!1)&&l.removeEvent(s,_e,pt.handle),delete U[_e])}l.isEmptyObject(U)&&X.remove(s,"handle events")}},dispatch:function(s){var o,f,m,M,y,T,O=new Array(arguments.length),U=l.event.fix(s),H=(X.get(this,"events")||Object.create(null))[U.type]||[],ne=l.event.special[U.type]||{};for(O[0]=U,o=1;o<arguments.length;o++)O[o]=arguments[o];if(U.delegateTarget=this,!(ne.preDispatch&&ne.preDispatch.call(this,U)===!1)){for(T=l.event.handlers.call(this,U,H),o=0;(M=T[o++])&&!U.isPropagationStopped();)for(U.currentTarget=M.elem,f=0;(y=M.handlers[f++])&&!U.isImmediatePropagationStopped();)(!U.rnamespace||y.namespace===!1||U.rnamespace.test(y.namespace))&&(U.handleObj=y,U.data=y.data,m=((l.event.special[y.origType]||{}).handle||y.handler).apply(M.elem,O),m!==void 0&&(U.result=m)===!1&&(U.preventDefault(),U.stopPropagation()));return ne.postDispatch&&ne.postDispatch.call(this,U),U.result}},handlers:function(s,o){var f,m,M,y,T,O=[],U=o.delegateCount,H=s.target;if(U&&H.nodeType&&!(s.type==="click"&&s.button>=1)){for(;H!==this;H=H.parentNode||this)if(H.nodeType===1&&!(s.type==="click"&&H.disabled===!0)){for(y=[],T={},f=0;f<U;f++)m=o[f],M=m.selector+" ",T[M]===void 0&&(T[M]=m.needsContext?l(M,this).index(H)>-1:l.find(M,this,null,[H]).length),T[M]&&y.push(m);y.length&&O.push({elem:H,handlers:y})}}return H=this,U<o.length&&O.push({elem:H,handlers:o.slice(U)}),O},addProp:function(s,o){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:b(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(f){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:f})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var o=this||s;return Ee.test(o.type)&&o.click&&le(o,"input")&&wt(o,"click",!0),!1},trigger:function(s){var o=this||s;return Ee.test(o.type)&&o.click&&le(o,"input")&&wt(o,"click"),!0},_default:function(s){var o=s.target;return Ee.test(o.type)&&o.click&&le(o,"input")&&X.get(o,"click")||le(o,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function wt(s,o,f){if(!f){X.get(s,o)===void 0&&l.event.add(s,o,Ze);return}X.set(s,o,!1),l.event.add(s,o,{namespace:!1,handler:function(m){var M,y=X.get(this,o);if(m.isTrigger&1&&this[o]){if(y)(l.event.special[o]||{}).delegateType&&m.stopPropagation();else if(y=a.call(arguments),X.set(this,o,y),this[o](),M=X.get(this,o),X.set(this,o,!1),y!==M)return m.stopImmediatePropagation(),m.preventDefault(),M}else y&&(X.set(this,o,l.event.trigger(y[0],y.slice(1),this)),m.stopPropagation(),m.isImmediatePropagationStopped=Ze)}})}l.removeEvent=function(s,o,f){s.removeEventListener&&s.removeEventListener(o,f)},l.Event=function(s,o){if(!(this instanceof l.Event))return new l.Event(s,o);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ze:ft,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,o&&l.extend(this,o),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:ft,isPropagationStopped:ft,isImmediatePropagationStopped:ft,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ze,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ze,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ze,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,o){function f(m){if(p.documentMode){var M=X.get(this,"handle"),y=l.event.fix(m);y.type=m.type==="focusin"?"focus":"blur",y.isSimulated=!0,M(m),y.target===y.currentTarget&&M(y)}else l.event.simulate(o,m.target,l.event.fix(m))}l.event.special[s]={setup:function(){var m;if(wt(this,s,!0),p.documentMode)m=X.get(this,o),m||this.addEventListener(o,f),X.set(this,o,(m||0)+1);else return!1},trigger:function(){return wt(this,s),!0},teardown:function(){var m;if(p.documentMode)m=X.get(this,o)-1,m?X.set(this,o,m):(this.removeEventListener(o,f),X.remove(this,o));else return!1},_default:function(m){return X.get(m.target,s)},delegateType:o},l.event.special[o]={setup:function(){var m=this.ownerDocument||this.document||this,M=p.documentMode?this:m,y=X.get(M,o);y||(p.documentMode?this.addEventListener(o,f):m.addEventListener(s,f,!0)),X.set(M,o,(y||0)+1)},teardown:function(){var m=this.ownerDocument||this.document||this,M=p.documentMode?this:m,y=X.get(M,o)-1;y?X.set(M,o,y):(p.documentMode?this.removeEventListener(o,f):m.removeEventListener(s,f,!0),X.remove(M,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,o){l.event.special[s]={delegateType:o,bindType:o,handle:function(f){var m,M=this,y=f.relatedTarget,T=f.handleObj;return(!y||y!==M&&!l.contains(M,y))&&(f.type=T.origType,m=T.handler.apply(this,arguments),f.type=o),m}}}),l.fn.extend({on:function(s,o,f,m){return Ht(this,s,o,f,m)},one:function(s,o,f,m){return Ht(this,s,o,f,m,1)},off:function(s,o,f){var m,M;if(s&&s.preventDefault&&s.handleObj)return m=s.handleObj,l(s.delegateTarget).off(m.namespace?m.origType+"."+m.namespace:m.origType,m.selector,m.handler),this;if(typeof s=="object"){for(M in s)this.off(M,o,s[M]);return this}return(o===!1||typeof o=="function")&&(f=o,o=void 0),f===!1&&(f=ft),this.each(function(){l.event.remove(this,s,f,o)})}});var Zt=/<script|<style|<link/i,Ft=/checked\s*(?:[^=]|=\s*.checked.)/i,Gt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Yt(s,o){return le(s,"table")&&le(o.nodeType!==11?o:o.firstChild,"tr")&&l(s).children("tbody")[0]||s}function dn(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function nn(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function vn(s,o){var f,m,M,y,T,O,U;if(o.nodeType===1){if(X.hasData(s)&&(y=X.get(s),U=y.events,U)){X.remove(o,"handle events");for(M in U)for(f=0,m=U[M].length;f<m;f++)l.event.add(o,M,U[M][f])}we.hasData(s)&&(T=we.access(s),O=l.extend({},T),we.set(o,O))}}function yi(s,o){var f=o.nodeName.toLowerCase();f==="input"&&Ee.test(s.type)?o.checked=s.checked:(f==="input"||f==="textarea")&&(o.defaultValue=s.defaultValue)}function qt(s,o,f,m){o=c(o);var M,y,T,O,U,H,ne=0,fe=s.length,J=fe-1,_e=o[0],st=b(_e);if(st||fe>1&&typeof _e=="string"&&!E.checkClone&&Ft.test(_e))return s.each(function(Ct){var pt=s.eq(Ct);st&&(o[0]=_e.call(this,Ct,pt.html())),qt(pt,o,f,m)});if(fe&&(M=oe(o,s[0].ownerDocument,!1,s,m),y=M.firstChild,M.childNodes.length===1&&(M=y),y||m)){for(T=l.map(Ut(M,"script"),dn),O=T.length;ne<fe;ne++)U=M,ne!==J&&(U=l.clone(U,!0,!0),O&&l.merge(T,Ut(U,"script"))),f.call(s[ne],U,ne);if(O)for(H=T[T.length-1].ownerDocument,l.map(T,nn),ne=0;ne<O;ne++)U=T[ne],xt.test(U.type||"")&&!X.access(U,"globalEval")&&l.contains(H,U)&&(U.src&&(U.type||"").toLowerCase()!=="module"?l._evalUrl&&!U.noModule&&l._evalUrl(U.src,{nonce:U.nonce||U.getAttribute("nonce")},H):P(U.textContent.replace(Gt,""),U,H))}return s}function C(s,o,f){for(var m,M=o?l.filter(o,s):s,y=0;(m=M[y])!=null;y++)!f&&m.nodeType===1&&l.cleanData(Ut(m)),m.parentNode&&(f&&ut(m)&&Mt(Ut(m,"script")),m.parentNode.removeChild(m));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,o,f){var m,M,y,T,O=s.cloneNode(!0),U=ut(s);if(!E.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(T=Ut(O),y=Ut(s),m=0,M=y.length;m<M;m++)yi(y[m],T[m]);if(o)if(f)for(y=y||Ut(s),T=T||Ut(O),m=0,M=y.length;m<M;m++)vn(y[m],T[m]);else vn(s,O);return T=Ut(O,"script"),T.length>0&&Mt(T,!U&&Ut(s,"script")),O},cleanData:function(s){for(var o,f,m,M=l.event.special,y=0;(f=s[y])!==void 0;y++)if(he(f)){if(o=f[X.expando]){if(o.events)for(m in o.events)M[m]?l.event.remove(f,m):l.removeEvent(f,m,o.handle);f[X.expando]=void 0}f[we.expando]&&(f[we.expando]=void 0)}}}),l.fn.extend({detach:function(s){return C(this,s,!0)},remove:function(s){return C(this,s)},text:function(s){return dt(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,s,arguments.length)},append:function(){return qt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Yt(this,s);o.appendChild(s)}})},prepend:function(){return qt(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Yt(this,s);o.insertBefore(s,o.firstChild)}})},before:function(){return qt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return qt(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,o=0;(s=this[o])!=null;o++)s.nodeType===1&&(l.cleanData(Ut(s,!1)),s.textContent="");return this},clone:function(s,o){return s=s??!1,o=o??s,this.map(function(){return l.clone(this,s,o)})},html:function(s){return dt(this,function(o){var f=this[0]||{},m=0,M=this.length;if(o===void 0&&f.nodeType===1)return f.innerHTML;if(typeof o=="string"&&!Zt.test(o)&&!bt[(De.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;m<M;m++)f=this[m]||{},f.nodeType===1&&(l.cleanData(Ut(f,!1)),f.innerHTML=o);f=0}catch{}}f&&this.empty().append(o)},null,s,arguments.length)},replaceWith:function(){var s=[];return qt(this,arguments,function(o){var f=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(Ut(this)),f&&f.replaceChild(o,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,o){l.fn[s]=function(f){for(var m,M=[],y=l(f),T=y.length-1,O=0;O<=T;O++)m=O===T?this:this.clone(!0),l(y[O])[o](m),u.apply(M,m.get());return this.pushStack(M)}});var V=new RegExp("^("+Fe+")(?!px)[a-z%]+$","i"),$=/^--/,K=function(s){var o=s.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(s)},G=function(s,o,f){var m,M,y={};for(M in o)y[M]=s.style[M],s.style[M]=o[M];m=f.call(s);for(M in o)s.style[M]=y[M];return m},Me=new RegExp(We.join("|"),"i");(function(){function s(){if(H){U.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",H.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ce.appendChild(U).appendChild(H);var ne=e.getComputedStyle(H);f=ne.top!=="1%",O=o(ne.marginLeft)===12,H.style.right="60%",y=o(ne.right)===36,m=o(ne.width)===36,H.style.position="absolute",M=o(H.offsetWidth/3)===12,Ce.removeChild(U),H=null}}function o(ne){return Math.round(parseFloat(ne))}var f,m,M,y,T,O,U=p.createElement("div"),H=p.createElement("div");H.style&&(H.style.backgroundClip="content-box",H.cloneNode(!0).style.backgroundClip="",E.clearCloneStyle=H.style.backgroundClip==="content-box",l.extend(E,{boxSizingReliable:function(){return s(),m},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),f},reliableMarginLeft:function(){return s(),O},scrollboxSize:function(){return s(),M},reliableTrDimensions:function(){var ne,fe,J,_e;return T==null&&(ne=p.createElement("table"),fe=p.createElement("tr"),J=p.createElement("div"),ne.style.cssText="position:absolute;left:-11111px;border-collapse:separate",fe.style.cssText="box-sizing:content-box;border:1px solid",fe.style.height="1px",J.style.height="9px",J.style.display="block",Ce.appendChild(ne).appendChild(fe).appendChild(J),_e=e.getComputedStyle(fe),T=parseInt(_e.height,10)+parseInt(_e.borderTopWidth,10)+parseInt(_e.borderBottomWidth,10)===fe.offsetHeight,Ce.removeChild(ne)),T}}))})();function be(s,o,f){var m,M,y,T,O=$.test(o),U=s.style;return f=f||K(s),f&&(T=f.getPropertyValue(o)||f[o],O&&T&&(T=T.replace(re,"$1")||void 0),T===""&&!ut(s)&&(T=l.style(s,o)),!E.pixelBoxStyles()&&V.test(T)&&Me.test(o)&&(m=U.width,M=U.minWidth,y=U.maxWidth,U.minWidth=U.maxWidth=U.width=T,T=f.width,U.width=m,U.minWidth=M,U.maxWidth=y)),T!==void 0?T+"":T}function ze(s,o){return{get:function(){if(s()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var ke=["Webkit","Moz","ms"],Je=p.createElement("div").style,et={};function Ge(s){for(var o=s[0].toUpperCase()+s.slice(1),f=ke.length;f--;)if(s=ke[f]+o,s in Je)return s}function Dt(s){var o=l.cssProps[s]||et[s];return o||(s in Je?s:et[s]=Ge(s)||s)}var kt=/^(none|table(?!-c[ea]).+)/,jt={position:"absolute",visibility:"hidden",display:"block"},pn={letterSpacing:"0",fontWeight:"400"};function Lt(s,o,f){var m=$e.exec(o);return m?Math.max(0,m[2]-(f||0))+(m[3]||"px"):o}function Ve(s,o,f,m,M,y){var T=o==="width"?1:0,O=0,U=0,H=0;if(f===(m?"border":"content"))return 0;for(;T<4;T+=2)f==="margin"&&(H+=l.css(s,f+We[T],!0,M)),m?(f==="content"&&(U-=l.css(s,"padding"+We[T],!0,M)),f!=="margin"&&(U-=l.css(s,"border"+We[T]+"Width",!0,M))):(U+=l.css(s,"padding"+We[T],!0,M),f!=="padding"?U+=l.css(s,"border"+We[T]+"Width",!0,M):O+=l.css(s,"border"+We[T]+"Width",!0,M));return!m&&y>=0&&(U+=Math.max(0,Math.ceil(s["offset"+o[0].toUpperCase()+o.slice(1)]-y-U-O-.5))||0),U+H}function Qt(s,o,f){var m=K(s),M=!E.boxSizingReliable()||f,y=M&&l.css(s,"boxSizing",!1,m)==="border-box",T=y,O=be(s,o,m),U="offset"+o[0].toUpperCase()+o.slice(1);if(V.test(O)){if(!f)return O;O="auto"}return(!E.boxSizingReliable()&&y||!E.reliableTrDimensions()&&le(s,"tr")||O==="auto"||!parseFloat(O)&&l.css(s,"display",!1,m)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,m)==="border-box",T=U in s,T&&(O=s[U])),O=parseFloat(O)||0,O+Ve(s,o,f||(y?"border":"content"),T,m,O)+"px"}l.extend({cssHooks:{opacity:{get:function(s,o){if(o){var f=be(s,"opacity");return f===""?"1":f}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,o,f,m){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var M,y,T,O=Y(o),U=$.test(o),H=s.style;if(U||(o=Dt(O)),T=l.cssHooks[o]||l.cssHooks[O],f!==void 0){if(y=typeof f,y==="string"&&(M=$e.exec(f))&&M[1]&&(f=k(s,o,M),y="number"),f==null||f!==f)return;y==="number"&&!U&&(f+=M&&M[3]||(l.cssNumber[O]?"":"px")),!E.clearCloneStyle&&f===""&&o.indexOf("background")===0&&(H[o]="inherit"),(!T||!("set"in T)||(f=T.set(s,f,m))!==void 0)&&(U?H.setProperty(o,f):H[o]=f)}else return T&&"get"in T&&(M=T.get(s,!1,m))!==void 0?M:H[o]}},css:function(s,o,f,m){var M,y,T,O=Y(o),U=$.test(o);return U||(o=Dt(O)),T=l.cssHooks[o]||l.cssHooks[O],T&&"get"in T&&(M=T.get(s,!0,f)),M===void 0&&(M=be(s,o,m)),M==="normal"&&o in pn&&(M=pn[o]),f===""||f?(y=parseFloat(M),f===!0||isFinite(y)?y||0:M):M}}),l.each(["height","width"],function(s,o){l.cssHooks[o]={get:function(f,m,M){if(m)return kt.test(l.css(f,"display"))&&(!f.getClientRects().length||!f.getBoundingClientRect().width)?G(f,jt,function(){return Qt(f,o,M)}):Qt(f,o,M)},set:function(f,m,M){var y,T=K(f),O=!E.scrollboxSize()&&T.position==="absolute",U=O||M,H=U&&l.css(f,"boxSizing",!1,T)==="border-box",ne=M?Ve(f,o,M,H,T):0;return H&&O&&(ne-=Math.ceil(f["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(T[o])-Ve(f,o,"border",!1,T)-.5)),ne&&(y=$e.exec(m))&&(y[3]||"px")!=="px"&&(f.style[o]=m,m=l.css(f,o)),Lt(f,m,ne)}}}),l.cssHooks.marginLeft=ze(E.reliableMarginLeft,function(s,o){if(o)return(parseFloat(be(s,"marginLeft"))||s.getBoundingClientRect().left-G(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,o){l.cssHooks[s+o]={expand:function(f){for(var m=0,M={},y=typeof f=="string"?f.split(" "):[f];m<4;m++)M[s+We[m]+o]=y[m]||y[m-2]||y[0];return M}},s!=="margin"&&(l.cssHooks[s+o].set=Lt)}),l.fn.extend({css:function(s,o){return dt(this,function(f,m,M){var y,T,O={},U=0;if(Array.isArray(m)){for(y=K(f),T=m.length;U<T;U++)O[m[U]]=l.css(f,m[U],!1,y);return O}return M!==void 0?l.style(f,m,M):l.css(f,m)},s,o,arguments.length>1)}});function ot(s,o,f,m,M){return new ot.prototype.init(s,o,f,m,M)}l.Tween=ot,ot.prototype={constructor:ot,init:function(s,o,f,m,M,y){this.elem=s,this.prop=f,this.easing=M||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=m,this.unit=y||(l.cssNumber[f]?"":"px")},cur:function(){var s=ot.propHooks[this.prop];return s&&s.get?s.get(this):ot.propHooks._default.get(this)},run:function(s){var o,f=ot.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=o=s,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),f&&f.set?f.set(this):ot.propHooks._default.set(this),this}},ot.prototype.init.prototype=ot.prototype,ot.propHooks={_default:{get:function(s){var o;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(o=l.css(s.elem,s.prop,""),!o||o==="auto"?0:o)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[Dt(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},ot.propHooks.scrollTop=ot.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=ot.prototype.init,l.fx.step={};var ln,kn,xn=/^(?:toggle|show|hide)$/,Lr=/queueHooks$/;function Wt(){kn&&(p.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Wt):e.setTimeout(Wt,l.fx.interval),l.fx.tick())}function Hn(){return e.setTimeout(function(){ln=void 0}),ln=Date.now()}function Si(s,o){var f,m=0,M={height:s};for(o=o?1:0;m<4;m+=2-o)f=We[m],M["margin"+f]=M["padding"+f]=s;return o&&(M.opacity=M.width=s),M}function Mn(s,o,f){for(var m,M=(bn.tweeners[o]||[]).concat(bn.tweeners["*"]),y=0,T=M.length;y<T;y++)if(m=M[y].call(f,o,s))return m}function Ir(s,o,f){var m,M,y,T,O,U,H,ne,fe="width"in o||"height"in o,J=this,_e={},st=s.style,Ct=s.nodeType&&Pt(s),pt=X.get(s,"fxshow");f.queue||(T=l._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,O=T.empty.fire,T.empty.fire=function(){T.unqueued||O()}),T.unqueued++,J.always(function(){J.always(function(){T.unqueued--,l.queue(s,"fx").length||T.empty.fire()})}));for(m in o)if(M=o[m],xn.test(M)){if(delete o[m],y=y||M==="toggle",M===(Ct?"hide":"show"))if(M==="show"&&pt&&pt[m]!==void 0)Ct=!0;else continue;_e[m]=pt&&pt[m]||l.style(s,m)}if(U=!l.isEmptyObject(o),!(!U&&l.isEmptyObject(_e))){fe&&s.nodeType===1&&(f.overflow=[st.overflow,st.overflowX,st.overflowY],H=pt&&pt.display,H==null&&(H=X.get(s,"display")),ne=l.css(s,"display"),ne==="none"&&(H?ne=H:(pe([s],!0),H=s.style.display||H,ne=l.css(s,"display"),pe([s]))),(ne==="inline"||ne==="inline-block"&&H!=null)&&l.css(s,"float")==="none"&&(U||(J.done(function(){st.display=H}),H==null&&(ne=st.display,H=ne==="none"?"":ne)),st.display="inline-block")),f.overflow&&(st.overflow="hidden",J.always(function(){st.overflow=f.overflow[0],st.overflowX=f.overflow[1],st.overflowY=f.overflow[2]})),U=!1;for(m in _e)U||(pt?"hidden"in pt&&(Ct=pt.hidden):pt=X.access(s,"fxshow",{display:H}),y&&(pt.hidden=!Ct),Ct&&pe([s],!0),J.done(function(){Ct||pe([s]),X.remove(s,"fxshow");for(m in _e)l.style(s,m,_e[m])})),U=Mn(Ct?pt[m]:0,m,J),m in pt||(pt[m]=U.start,Ct&&(U.end=U.start,U.start=0))}}function ra(s,o){var f,m,M,y,T;for(f in s)if(m=Y(f),M=o[m],y=s[f],Array.isArray(y)&&(M=y[1],y=s[f]=y[0]),f!==m&&(s[m]=y,delete s[f]),T=l.cssHooks[m],T&&"expand"in T){y=T.expand(y),delete s[m];for(f in y)f in s||(s[f]=y[f],o[f]=M)}else o[m]=M}function bn(s,o,f){var m,M,y=0,T=bn.prefilters.length,O=l.Deferred().always(function(){delete U.elem}),U=function(){if(M)return!1;for(var fe=ln||Hn(),J=Math.max(0,H.startTime+H.duration-fe),_e=J/H.duration||0,st=1-_e,Ct=0,pt=H.tweens.length;Ct<pt;Ct++)H.tweens[Ct].run(st);return O.notifyWith(s,[H,st,J]),st<1&&pt?J:(pt||O.notifyWith(s,[H,1,0]),O.resolveWith(s,[H]),!1)},H=O.promise({elem:s,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},f),originalProperties:o,originalOptions:f,startTime:ln||Hn(),duration:f.duration,tweens:[],createTween:function(fe,J){var _e=l.Tween(s,H.opts,fe,J,H.opts.specialEasing[fe]||H.opts.easing);return H.tweens.push(_e),_e},stop:function(fe){var J=0,_e=fe?H.tweens.length:0;if(M)return this;for(M=!0;J<_e;J++)H.tweens[J].run(1);return fe?(O.notifyWith(s,[H,1,0]),O.resolveWith(s,[H,fe])):O.rejectWith(s,[H,fe]),this}}),ne=H.props;for(ra(ne,H.opts.specialEasing);y<T;y++)if(m=bn.prefilters[y].call(H,s,ne,H.opts),m)return b(m.stop)&&(l._queueHooks(H.elem,H.opts.queue).stop=m.stop.bind(m)),m;return l.map(ne,Mn,H),b(H.opts.start)&&H.opts.start.call(s,H),H.progress(H.opts.progress).done(H.opts.done,H.opts.complete).fail(H.opts.fail).always(H.opts.always),l.fx.timer(l.extend(U,{elem:s,anim:H,queue:H.opts.queue})),H}l.Animation=l.extend(bn,{tweeners:{"*":[function(s,o){var f=this.createTween(s,o);return k(f.elem,s,$e.exec(o),f),f}]},tweener:function(s,o){b(s)?(o=s,s=["*"]):s=s.match(it);for(var f,m=0,M=s.length;m<M;m++)f=s[m],bn.tweeners[f]=bn.tweeners[f]||[],bn.tweeners[f].unshift(o)},prefilters:[Ir],prefilter:function(s,o){o?bn.prefilters.unshift(s):bn.prefilters.push(s)}}),l.speed=function(s,o,f){var m=s&&typeof s=="object"?l.extend({},s):{complete:f||!f&&o||b(s)&&s,duration:s,easing:f&&o||o&&!b(o)&&o};return l.fx.off?m.duration=0:typeof m.duration!="number"&&(m.duration in l.fx.speeds?m.duration=l.fx.speeds[m.duration]:m.duration=l.fx.speeds._default),(m.queue==null||m.queue===!0)&&(m.queue="fx"),m.old=m.complete,m.complete=function(){b(m.old)&&m.old.call(this),m.queue&&l.dequeue(this,m.queue)},m},l.fn.extend({fadeTo:function(s,o,f,m){return this.filter(Pt).css("opacity",0).show().end().animate({opacity:o},s,f,m)},animate:function(s,o,f,m){var M=l.isEmptyObject(s),y=l.speed(o,f,m),T=function(){var O=bn(this,l.extend({},s),y);(M||X.get(this,"finish"))&&O.stop(!0)};return T.finish=T,M||y.queue===!1?this.each(T):this.queue(y.queue,T)},stop:function(s,o,f){var m=function(M){var y=M.stop;delete M.stop,y(f)};return typeof s!="string"&&(f=o,o=s,s=void 0),o&&this.queue(s||"fx",[]),this.each(function(){var M=!0,y=s!=null&&s+"queueHooks",T=l.timers,O=X.get(this);if(y)O[y]&&O[y].stop&&m(O[y]);else for(y in O)O[y]&&O[y].stop&&Lr.test(y)&&m(O[y]);for(y=T.length;y--;)T[y].elem===this&&(s==null||T[y].queue===s)&&(T[y].anim.stop(f),M=!1,T.splice(y,1));(M||!f)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var o,f=X.get(this),m=f[s+"queue"],M=f[s+"queueHooks"],y=l.timers,T=m?m.length:0;for(f.finish=!0,l.queue(this,s,[]),M&&M.stop&&M.stop.call(this,!0),o=y.length;o--;)y[o].elem===this&&y[o].queue===s&&(y[o].anim.stop(!0),y.splice(o,1));for(o=0;o<T;o++)m[o]&&m[o].finish&&m[o].finish.call(this);delete f.finish})}}),l.each(["toggle","show","hide"],function(s,o){var f=l.fn[o];l.fn[o]=function(m,M,y){return m==null||typeof m=="boolean"?f.apply(this,arguments):this.animate(Si(o,!0),m,M,y)}}),l.each({slideDown:Si("show"),slideUp:Si("hide"),slideToggle:Si("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,o){l.fn[s]=function(f,m,M){return this.animate(o,f,m,M)}}),l.timers=[],l.fx.tick=function(){var s,o=0,f=l.timers;for(ln=Date.now();o<f.length;o++)s=f[o],!s()&&f[o]===s&&f.splice(o--,1);f.length||l.fx.stop(),ln=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){kn||(kn=!0,Wt())},l.fx.stop=function(){kn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,o){return s=l.fx&&l.fx.speeds[s]||s,o=o||"fx",this.queue(o,function(f,m){var M=e.setTimeout(f,s);m.stop=function(){e.clearTimeout(M)}})},function(){var s=p.createElement("input"),o=p.createElement("select"),f=o.appendChild(p.createElement("option"));s.type="checkbox",E.checkOn=s.value!=="",E.optSelected=f.selected,s=p.createElement("input"),s.value="t",s.type="radio",E.radioValue=s.value==="t"}();var al,Nr=l.expr.attrHandle;l.fn.extend({attr:function(s,o){return dt(this,l.attr,s,o,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,o,f){var m,M,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,o,f);if((y!==1||!l.isXMLDoc(s))&&(M=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?al:void 0)),f!==void 0){if(f===null){l.removeAttr(s,o);return}return M&&"set"in M&&(m=M.set(s,f,o))!==void 0?m:(s.setAttribute(o,f+""),f)}return M&&"get"in M&&(m=M.get(s,o))!==null?m:(m=l.find.attr(s,o),m??void 0)}},attrHooks:{type:{set:function(s,o){if(!E.radioValue&&o==="radio"&&le(s,"input")){var f=s.value;return s.setAttribute("type",o),f&&(s.value=f),o}}}},removeAttr:function(s,o){var f,m=0,M=o&&o.match(it);if(M&&s.nodeType===1)for(;f=M[m++];)s.removeAttribute(f)}}),al={set:function(s,o,f){return o===!1?l.removeAttr(s,f):s.setAttribute(f,f),f}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,o){var f=Nr[o]||l.find.attr;Nr[o]=function(m,M,y){var T,O,U=M.toLowerCase();return y||(O=Nr[U],Nr[U]=T,T=f(m,M,y)!=null?U:null,Nr[U]=O),T}});var _u=/^(?:input|select|textarea|button)$/i,vu=/^(?:a|area)$/i;l.fn.extend({prop:function(s,o){return dt(this,l.prop,s,o,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,o,f){var m,M,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(o=l.propFix[o]||o,M=l.propHooks[o]),f!==void 0?M&&"set"in M&&(m=M.set(s,f,o))!==void 0?m:s[o]=f:M&&"get"in M&&(m=M.get(s,o))!==null?m:s[o]},propHooks:{tabIndex:{get:function(s){var o=l.find.attr(s,"tabindex");return o?parseInt(o,10):_u.test(s.nodeName)||vu.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),E.optSelected||(l.propHooks.selected={get:function(s){var o=s.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(s){var o=s.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Ui(s){var o=s.match(it)||[];return o.join(" ")}function Oi(s){return s.getAttribute&&s.getAttribute("class")||""}function sa(s){return Array.isArray(s)?s:typeof s=="string"?s.match(it)||[]:[]}l.fn.extend({addClass:function(s){var o,f,m,M,y,T;return b(s)?this.each(function(O){l(this).addClass(s.call(this,O,Oi(this)))}):(o=sa(s),o.length?this.each(function(){if(m=Oi(this),f=this.nodeType===1&&" "+Ui(m)+" ",f){for(y=0;y<o.length;y++)M=o[y],f.indexOf(" "+M+" ")<0&&(f+=M+" ");T=Ui(f),m!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var o,f,m,M,y,T;return b(s)?this.each(function(O){l(this).removeClass(s.call(this,O,Oi(this)))}):arguments.length?(o=sa(s),o.length?this.each(function(){if(m=Oi(this),f=this.nodeType===1&&" "+Ui(m)+" ",f){for(y=0;y<o.length;y++)for(M=o[y];f.indexOf(" "+M+" ")>-1;)f=f.replace(" "+M+" "," ");T=Ui(f),m!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,o){var f,m,M,y,T=typeof s,O=T==="string"||Array.isArray(s);return b(s)?this.each(function(U){l(this).toggleClass(s.call(this,U,Oi(this),o),o)}):typeof o=="boolean"&&O?o?this.addClass(s):this.removeClass(s):(f=sa(s),this.each(function(){if(O)for(y=l(this),M=0;M<f.length;M++)m=f[M],y.hasClass(m)?y.removeClass(m):y.addClass(m);else(s===void 0||T==="boolean")&&(m=Oi(this),m&&X.set(this,"__className__",m),this.setAttribute&&this.setAttribute("class",m||s===!1?"":X.get(this,"__className__")||""))}))},hasClass:function(s){var o,f,m=0;for(o=" "+s+" ";f=this[m++];)if(f.nodeType===1&&(" "+Ui(Oi(f))+" ").indexOf(o)>-1)return!0;return!1}});var xu=/\r/g;l.fn.extend({val:function(s){var o,f,m,M=this[0];return arguments.length?(m=b(s),this.each(function(y){var T;this.nodeType===1&&(m?T=s.call(this,y,l(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(O){return O==null?"":O+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,T,"value")===void 0)&&(this.value=T))})):M?(o=l.valHooks[M.type]||l.valHooks[M.nodeName.toLowerCase()],o&&"get"in o&&(f=o.get(M,"value"))!==void 0?f:(f=M.value,typeof f=="string"?f.replace(xu,""):f??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var o=l.find.attr(s,"value");return o??Ui(l.text(s))}},select:{get:function(s){var o,f,m,M=s.options,y=s.selectedIndex,T=s.type==="select-one",O=T?null:[],U=T?y+1:M.length;for(y<0?m=U:m=T?y:0;m<U;m++)if(f=M[m],(f.selected||m===y)&&!f.disabled&&(!f.parentNode.disabled||!le(f.parentNode,"optgroup"))){if(o=l(f).val(),T)return o;O.push(o)}return O},set:function(s,o){for(var f,m,M=s.options,y=l.makeArray(o),T=M.length;T--;)m=M[T],(m.selected=l.inArray(l.valHooks.option.get(m),y)>-1)&&(f=!0);return f||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,o){if(Array.isArray(o))return s.checked=l.inArray(l(s).val(),o)>-1}},E.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Ur=e.location,ol={guid:Date.now()},aa=/\?/;l.parseXML=function(s){var o,f;if(!s||typeof s!="string")return null;try{o=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return f=o&&o.getElementsByTagName("parsererror")[0],(!o||f)&&l.error("Invalid XML: "+(f?l.map(f.childNodes,function(m){return m.textContent}).join(`
`):s)),o};var ll=/^(?:focusinfocus|focusoutblur)$/,cl=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,o,f,m){var M,y,T,O,U,H,ne,fe,J=[f||p],_e=g.call(s,"type")?s.type:s,st=g.call(s,"namespace")?s.namespace.split("."):[];if(y=fe=T=f=f||p,!(f.nodeType===3||f.nodeType===8)&&!ll.test(_e+l.event.triggered)&&(_e.indexOf(".")>-1&&(st=_e.split("."),_e=st.shift(),st.sort()),U=_e.indexOf(":")<0&&"on"+_e,s=s[l.expando]?s:new l.Event(_e,typeof s=="object"&&s),s.isTrigger=m?2:3,s.namespace=st.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=f),o=o==null?[s]:l.makeArray(o,[s]),ne=l.event.special[_e]||{},!(!m&&ne.trigger&&ne.trigger.apply(f,o)===!1))){if(!m&&!ne.noBubble&&!v(f)){for(O=ne.delegateType||_e,ll.test(O+_e)||(y=y.parentNode);y;y=y.parentNode)J.push(y),T=y;T===(f.ownerDocument||p)&&J.push(T.defaultView||T.parentWindow||e)}for(M=0;(y=J[M++])&&!s.isPropagationStopped();)fe=y,s.type=M>1?O:ne.bindType||_e,H=(X.get(y,"events")||Object.create(null))[s.type]&&X.get(y,"handle"),H&&H.apply(y,o),H=U&&y[U],H&&H.apply&&he(y)&&(s.result=H.apply(y,o),s.result===!1&&s.preventDefault());return s.type=_e,!m&&!s.isDefaultPrevented()&&(!ne._default||ne._default.apply(J.pop(),o)===!1)&&he(f)&&U&&b(f[_e])&&!v(f)&&(T=f[U],T&&(f[U]=null),l.event.triggered=_e,s.isPropagationStopped()&&fe.addEventListener(_e,cl),f[_e](),s.isPropagationStopped()&&fe.removeEventListener(_e,cl),l.event.triggered=void 0,T&&(f[U]=T)),s.result}},simulate:function(s,o,f){var m=l.extend(new l.Event,f,{type:s,isSimulated:!0});l.event.trigger(m,null,o)}}),l.fn.extend({trigger:function(s,o){return this.each(function(){l.event.trigger(s,o,this)})},triggerHandler:function(s,o){var f=this[0];if(f)return l.event.trigger(s,o,f,!0)}});var Mu=/\[\]$/,ul=/\r?\n/g,yu=/^(?:submit|button|image|reset|file)$/i,Su=/^(?:input|select|textarea|keygen)/i;function oa(s,o,f,m){var M;if(Array.isArray(o))l.each(o,function(y,T){f||Mu.test(s)?m(s,T):oa(s+"["+(typeof T=="object"&&T!=null?y:"")+"]",T,f,m)});else if(!f&&N(o)==="object")for(M in o)oa(s+"["+M+"]",o[M],f,m);else m(s,o)}l.param=function(s,o){var f,m=[],M=function(y,T){var O=b(T)?T():T;m[m.length]=encodeURIComponent(y)+"="+encodeURIComponent(O??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){M(this.name,this.value)});else for(f in s)oa(f,s[f],o,M);return m.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&Su.test(this.nodeName)&&!yu.test(s)&&(this.checked||!Ee.test(s))}).map(function(s,o){var f=l(this).val();return f==null?null:Array.isArray(f)?l.map(f,function(m){return{name:o.name,value:m.replace(ul,`\r
`)}}):{name:o.name,value:f.replace(ul,`\r
`)}}).get()}});var Eu=/%20/g,Tu=/#.*$/,bu=/([?&])_=[^&]*/,Au=/^(.*?):[ \t]*([^\r\n]*)$/mg,wu=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cu=/^(?:GET|HEAD)$/,Ru=/^\/\//,fl={},la={},hl="*/".concat("*"),ca=p.createElement("a");ca.href=Ur.href;function dl(s){return function(o,f){typeof o!="string"&&(f=o,o="*");var m,M=0,y=o.toLowerCase().match(it)||[];if(b(f))for(;m=y[M++];)m[0]==="+"?(m=m.slice(1)||"*",(s[m]=s[m]||[]).unshift(f)):(s[m]=s[m]||[]).push(f)}}function pl(s,o,f,m){var M={},y=s===la;function T(O){var U;return M[O]=!0,l.each(s[O]||[],function(H,ne){var fe=ne(o,f,m);if(typeof fe=="string"&&!y&&!M[fe])return o.dataTypes.unshift(fe),T(fe),!1;if(y)return!(U=fe)}),U}return T(o.dataTypes[0])||!M["*"]&&T("*")}function ua(s,o){var f,m,M=l.ajaxSettings.flatOptions||{};for(f in o)o[f]!==void 0&&((M[f]?s:m||(m={}))[f]=o[f]);return m&&l.extend(!0,s,m),s}function Pu(s,o,f){for(var m,M,y,T,O=s.contents,U=s.dataTypes;U[0]==="*";)U.shift(),m===void 0&&(m=s.mimeType||o.getResponseHeader("Content-Type"));if(m){for(M in O)if(O[M]&&O[M].test(m)){U.unshift(M);break}}if(U[0]in f)y=U[0];else{for(M in f){if(!U[0]||s.converters[M+" "+U[0]]){y=M;break}T||(T=M)}y=y||T}if(y)return y!==U[0]&&U.unshift(y),f[y]}function Du(s,o,f,m){var M,y,T,O,U,H={},ne=s.dataTypes.slice();if(ne[1])for(T in s.converters)H[T.toLowerCase()]=s.converters[T];for(y=ne.shift();y;)if(s.responseFields[y]&&(f[s.responseFields[y]]=o),!U&&m&&s.dataFilter&&(o=s.dataFilter(o,s.dataType)),U=y,y=ne.shift(),y){if(y==="*")y=U;else if(U!=="*"&&U!==y){if(T=H[U+" "+y]||H["* "+y],!T){for(M in H)if(O=M.split(" "),O[1]===y&&(T=H[U+" "+O[0]]||H["* "+O[0]],T)){T===!0?T=H[M]:H[M]!==!0&&(y=O[0],ne.unshift(O[1]));break}}if(T!==!0)if(T&&s.throws)o=T(o);else try{o=T(o)}catch(fe){return{state:"parsererror",error:T?fe:"No conversion from "+U+" to "+y}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ur.href,type:"GET",isLocal:wu.test(Ur.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":hl,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,o){return o?ua(ua(s,l.ajaxSettings),o):ua(l.ajaxSettings,s)},ajaxPrefilter:dl(fl),ajaxTransport:dl(la),ajax:function(s,o){typeof s=="object"&&(o=s,s=void 0),o=o||{};var f,m,M,y,T,O,U,H,ne,fe,J=l.ajaxSetup({},o),_e=J.context||J,st=J.context&&(_e.nodeType||_e.jquery)?l(_e):l.event,Ct=l.Deferred(),pt=l.Callbacks("once memory"),un=J.statusCode||{},rn={},Yn={},Kn="canceled",At={readyState:0,getResponseHeader:function(It){var Kt;if(U){if(!y)for(y={};Kt=Au.exec(M);)y[Kt[1].toLowerCase()+" "]=(y[Kt[1].toLowerCase()+" "]||[]).concat(Kt[2]);Kt=y[It.toLowerCase()+" "]}return Kt==null?null:Kt.join(", ")},getAllResponseHeaders:function(){return U?M:null},setRequestHeader:function(It,Kt){return U==null&&(It=Yn[It.toLowerCase()]=Yn[It.toLowerCase()]||It,rn[It]=Kt),this},overrideMimeType:function(It){return U==null&&(J.mimeType=It),this},statusCode:function(It){var Kt;if(It)if(U)At.always(It[At.status]);else for(Kt in It)un[Kt]=[un[Kt],It[Kt]];return this},abort:function(It){var Kt=It||Kn;return f&&f.abort(Kt),Fi(0,Kt),this}};if(Ct.promise(At),J.url=((s||J.url||Ur.href)+"").replace(Ru,Ur.protocol+"//"),J.type=o.method||o.type||J.method||J.type,J.dataTypes=(J.dataType||"*").toLowerCase().match(it)||[""],J.crossDomain==null){O=p.createElement("a");try{O.href=J.url,O.href=O.href,J.crossDomain=ca.protocol+"//"+ca.host!=O.protocol+"//"+O.host}catch{J.crossDomain=!0}}if(J.data&&J.processData&&typeof J.data!="string"&&(J.data=l.param(J.data,J.traditional)),pl(fl,J,o,At),U)return At;H=l.event&&J.global,H&&l.active++===0&&l.event.trigger("ajaxStart"),J.type=J.type.toUpperCase(),J.hasContent=!Cu.test(J.type),m=J.url.replace(Tu,""),J.hasContent?J.data&&J.processData&&(J.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(J.data=J.data.replace(Eu,"+")):(fe=J.url.slice(m.length),J.data&&(J.processData||typeof J.data=="string")&&(m+=(aa.test(m)?"&":"?")+J.data,delete J.data),J.cache===!1&&(m=m.replace(bu,"$1"),fe=(aa.test(m)?"&":"?")+"_="+ol.guid+++fe),J.url=m+fe),J.ifModified&&(l.lastModified[m]&&At.setRequestHeader("If-Modified-Since",l.lastModified[m]),l.etag[m]&&At.setRequestHeader("If-None-Match",l.etag[m])),(J.data&&J.hasContent&&J.contentType!==!1||o.contentType)&&At.setRequestHeader("Content-Type",J.contentType),At.setRequestHeader("Accept",J.dataTypes[0]&&J.accepts[J.dataTypes[0]]?J.accepts[J.dataTypes[0]]+(J.dataTypes[0]!=="*"?", "+hl+"; q=0.01":""):J.accepts["*"]);for(ne in J.headers)At.setRequestHeader(ne,J.headers[ne]);if(J.beforeSend&&(J.beforeSend.call(_e,At,J)===!1||U))return At.abort();if(Kn="abort",pt.add(J.complete),At.done(J.success),At.fail(J.error),f=pl(la,J,o,At),!f)Fi(-1,"No Transport");else{if(At.readyState=1,H&&st.trigger("ajaxSend",[At,J]),U)return At;J.async&&J.timeout>0&&(T=e.setTimeout(function(){At.abort("timeout")},J.timeout));try{U=!1,f.send(rn,Fi)}catch(It){if(U)throw It;Fi(-1,It)}}function Fi(It,Kt,Fr,ha){var $n,Br,Zn,Ei,Ti,Nn=Kt;U||(U=!0,T&&e.clearTimeout(T),f=void 0,M=ha||"",At.readyState=It>0?4:0,$n=It>=200&&It<300||It===304,Fr&&(Ei=Pu(J,At,Fr)),!$n&&l.inArray("script",J.dataTypes)>-1&&l.inArray("json",J.dataTypes)<0&&(J.converters["text script"]=function(){}),Ei=Du(J,Ei,At,$n),$n?(J.ifModified&&(Ti=At.getResponseHeader("Last-Modified"),Ti&&(l.lastModified[m]=Ti),Ti=At.getResponseHeader("etag"),Ti&&(l.etag[m]=Ti)),It===204||J.type==="HEAD"?Nn="nocontent":It===304?Nn="notmodified":(Nn=Ei.state,Br=Ei.data,Zn=Ei.error,$n=!Zn)):(Zn=Nn,(It||!Nn)&&(Nn="error",It<0&&(It=0))),At.status=It,At.statusText=(Kt||Nn)+"",$n?Ct.resolveWith(_e,[Br,Nn,At]):Ct.rejectWith(_e,[At,Nn,Zn]),At.statusCode(un),un=void 0,H&&st.trigger($n?"ajaxSuccess":"ajaxError",[At,J,$n?Br:Zn]),pt.fireWith(_e,[At,Nn]),H&&(st.trigger("ajaxComplete",[At,J]),--l.active||l.event.trigger("ajaxStop")))}return At},getJSON:function(s,o,f){return l.get(s,o,f,"json")},getScript:function(s,o){return l.get(s,void 0,o,"script")}}),l.each(["get","post"],function(s,o){l[o]=function(f,m,M,y){return b(m)&&(y=y||M,M=m,m=void 0),l.ajax(l.extend({url:f,type:o,dataType:y,data:m,success:M},l.isPlainObject(f)&&f))}}),l.ajaxPrefilter(function(s){var o;for(o in s.headers)o.toLowerCase()==="content-type"&&(s.contentType=s.headers[o]||"")}),l._evalUrl=function(s,o,f){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(m){l.globalEval(m,o,f)}})},l.fn.extend({wrapAll:function(s){var o;return this[0]&&(b(s)&&(s=s.call(this[0])),o=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var f=this;f.firstElementChild;)f=f.firstElementChild;return f}).append(this)),this},wrapInner:function(s){return b(s)?this.each(function(o){l(this).wrapInner(s.call(this,o))}):this.each(function(){var o=l(this),f=o.contents();f.length?f.wrapAll(s):o.append(s)})},wrap:function(s){var o=b(s);return this.each(function(f){l(this).wrapAll(o?s.call(this,f):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Lu={0:200,1223:204},Or=l.ajaxSettings.xhr();E.cors=!!Or&&"withCredentials"in Or,E.ajax=Or=!!Or,l.ajaxTransport(function(s){var o,f;if(E.cors||Or&&!s.crossDomain)return{send:function(m,M){var y,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)T[y]=s.xhrFields[y];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!m["X-Requested-With"]&&(m["X-Requested-With"]="XMLHttpRequest");for(y in m)T.setRequestHeader(y,m[y]);o=function(O){return function(){o&&(o=f=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,O==="abort"?T.abort():O==="error"?typeof T.status!="number"?M(0,"error"):M(T.status,T.statusText):M(Lu[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=o(),f=T.onerror=T.ontimeout=o("error"),T.onabort!==void 0?T.onabort=f:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){o&&f()})},o=o("abort");try{T.send(s.hasContent&&s.data||null)}catch(O){if(o)throw O}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var o,f;return{send:function(m,M){o=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",f=function(y){o.remove(),f=null,y&&M(y.type==="error"?404:200,y.type)}),p.head.appendChild(o[0])},abort:function(){f&&f()}}}});var ml=[],fa=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ml.pop()||l.expando+"_"+ol.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,o,f){var m,M,y,T=s.jsonp!==!1&&(fa.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&fa.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return m=s.jsonpCallback=b(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(fa,"$1"+m):s.jsonp!==!1&&(s.url+=(aa.test(s.url)?"&":"?")+s.jsonp+"="+m),s.converters["script json"]=function(){return y||l.error(m+" was not called"),y[0]},s.dataTypes[0]="json",M=e[m],e[m]=function(){y=arguments},f.always(function(){M===void 0?l(e).removeProp(m):e[m]=M,s[m]&&(s.jsonpCallback=o.jsonpCallback,ml.push(m)),y&&b(M)&&M(y[0]),y=M=void 0}),"script"}),E.createHTMLDocument=function(){var s=p.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2}(),l.parseHTML=function(s,o,f){if(typeof s!="string")return[];typeof o=="boolean"&&(f=o,o=!1);var m,M,y;return o||(E.createHTMLDocument?(o=p.implementation.createHTMLDocument(""),m=o.createElement("base"),m.href=p.location.href,o.head.appendChild(m)):o=p),M=at.exec(s),y=!f&&[],M?[o.createElement(M[1])]:(M=oe([s],o,y),y&&y.length&&l(y).remove(),l.merge([],M.childNodes))},l.fn.load=function(s,o,f){var m,M,y,T=this,O=s.indexOf(" ");return O>-1&&(m=Ui(s.slice(O)),s=s.slice(0,O)),b(o)?(f=o,o=void 0):o&&typeof o=="object"&&(M="POST"),T.length>0&&l.ajax({url:s,type:M||"GET",dataType:"html",data:o}).done(function(U){y=arguments,T.html(m?l("<div>").append(l.parseHTML(U)).find(m):U)}).always(f&&function(U,H){T.each(function(){f.apply(this,y||[U.responseText,H,U])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(o){return s===o.elem}).length},l.offset={setOffset:function(s,o,f){var m,M,y,T,O,U,H,ne=l.css(s,"position"),fe=l(s),J={};ne==="static"&&(s.style.position="relative"),O=fe.offset(),y=l.css(s,"top"),U=l.css(s,"left"),H=(ne==="absolute"||ne==="fixed")&&(y+U).indexOf("auto")>-1,H?(m=fe.position(),T=m.top,M=m.left):(T=parseFloat(y)||0,M=parseFloat(U)||0),b(o)&&(o=o.call(s,f,l.extend({},O))),o.top!=null&&(J.top=o.top-O.top+T),o.left!=null&&(J.left=o.left-O.left+M),"using"in o?o.using.call(s,J):fe.css(J)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(M){l.offset.setOffset(this,s,M)});var o,f,m=this[0];if(m)return m.getClientRects().length?(o=m.getBoundingClientRect(),f=m.ownerDocument.defaultView,{top:o.top+f.pageYOffset,left:o.left+f.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,o,f,m=this[0],M={top:0,left:0};if(l.css(m,"position")==="fixed")o=m.getBoundingClientRect();else{for(o=this.offset(),f=m.ownerDocument,s=m.offsetParent||f.documentElement;s&&(s===f.body||s===f.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==m&&s.nodeType===1&&(M=l(s).offset(),M.top+=l.css(s,"borderTopWidth",!0),M.left+=l.css(s,"borderLeftWidth",!0))}return{top:o.top-M.top-l.css(m,"marginTop",!0),left:o.left-M.left-l.css(m,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Ce})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,o){var f=o==="pageYOffset";l.fn[s]=function(m){return dt(this,function(M,y,T){var O;if(v(M)?O=M:M.nodeType===9&&(O=M.defaultView),T===void 0)return O?O[o]:M[y];O?O.scrollTo(f?O.pageXOffset:T,f?T:O.pageYOffset):M[y]=T},s,m,arguments.length)}}),l.each(["top","left"],function(s,o){l.cssHooks[o]=ze(E.pixelPosition,function(f,m){if(m)return m=be(f,o),V.test(m)?l(f).position()[o]+"px":m})}),l.each({Height:"height",Width:"width"},function(s,o){l.each({padding:"inner"+s,content:o,"":"outer"+s},function(f,m){l.fn[m]=function(M,y){var T=arguments.length&&(f||typeof M!="boolean"),O=f||(M===!0||y===!0?"margin":"border");return dt(this,function(U,H,ne){var fe;return v(U)?m.indexOf("outer")===0?U["inner"+s]:U.document.documentElement["client"+s]:U.nodeType===9?(fe=U.documentElement,Math.max(U.body["scroll"+s],fe["scroll"+s],U.body["offset"+s],fe["offset"+s],fe["client"+s])):ne===void 0?l.css(U,H,O):l.style(U,H,ne,O)},o,T?M:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,o){l.fn[o]=function(f){return this.on(o,f)}}),l.fn.extend({bind:function(s,o,f){return this.on(s,null,o,f)},unbind:function(s,o){return this.off(s,null,o)},delegate:function(s,o,f,m){return this.on(o,s,f,m)},undelegate:function(s,o,f){return arguments.length===1?this.off(s,"**"):this.off(o,s||"**",f)},hover:function(s,o){return this.on("mouseenter",s).on("mouseleave",o||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,o){l.fn[o]=function(f,m){return arguments.length>0?this.on(o,null,f,m):this.trigger(o)}});var Iu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,o){var f,m,M;if(typeof o=="string"&&(f=s[o],o=s,s=f),!!b(s))return m=a.call(arguments,2),M=function(){return s.apply(o||this,m.concat(a.call(arguments)))},M.guid=s.guid=s.guid||l.guid++,M},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=le,l.isFunction=b,l.isWindow=v,l.camelCase=Y,l.type=N,l.now=Date.now,l.isNumeric=function(s){var o=l.type(s);return(o==="number"||o==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Iu,"$1")};var Nu=e.jQuery,Uu=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=Uu),s&&e.jQuery===l&&(e.jQuery=Nu),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Uc);var Xu=Uc.exports;const Cn=Wu(Xu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="169",ju=0,xl=1,qu=2,Oc=1,Yu=2,di=3,vi=0,Pn=1,pi=2,_i=0,vr=1,Ml=2,yl=3,Sl=4,Ku=5,qi=100,$u=101,Zu=102,Qu=103,Ju=104,ef=200,tf=201,nf=202,rf=203,no=204,io=205,sf=206,af=207,of=208,lf=209,cf=210,uf=211,ff=212,hf=213,df=214,ro=0,so=1,ao=2,yr=3,oo=4,lo=5,co=6,uo=7,qo=0,pf=1,mf=2,Ii=0,gf=1,_f=2,vf=3,xf=4,Mf=5,yf=6,Sf=7,Fc=300,Sr=301,Er=302,fo=303,ho=304,Qs=306,Ws=1e3,$i=1001,po=1002,Bn=1003,Ef=1004,cs=1005,fn=1006,xa=1007,Zi=1008,xi=1009,Bc=1010,zc=1011,Qr=1012,Yo=1013,Qi=1014,mi=1015,wr=1016,Ko=1017,$o=1018,Tr=1020,kc=35902,Hc=1021,Vc=1022,qn=1023,Gc=1024,Wc=1025,xr=1026,br=1027,Xc=1028,Zo=1029,jc=1030,Qo=1031,Jo=1033,Us=33776,Os=33777,Fs=33778,Bs=33779,mo=35840,go=35841,_o=35842,vo=35843,xo=36196,Mo=37492,yo=37496,So=37808,Eo=37809,To=37810,bo=37811,Ao=37812,wo=37813,Co=37814,Ro=37815,Po=37816,Do=37817,Lo=37818,Io=37819,No=37820,Uo=37821,zs=36492,Oo=36494,Fo=36495,qc=36283,Bo=36284,zo=36285,ko=36286,Tf=3200,bf=3201,el=0,Af=1,Li="",En="srgb",Ni="srgb-linear",tl="display-p3",Js="display-p3-linear",Xs="linear",Xt="srgb",js="rec709",qs="p3",tr=7680,El=519,wf=512,Cf=513,Rf=514,Yc=515,Pf=516,Df=517,Lf=518,If=519,Tl=35044,bl="300 es",gi=2e3,Ys=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ma=Math.PI/180,Ho=180/Math.PI;function es(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function Rn(i,e,t){return Math.max(e,Math.min(t,i))}function Nf(i,e){return(i%e+e)%e}function ya(i,e,t){return(1-t)*i+t*e}function kr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,t=0){Et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*n-c*r+e.x,this.y=a*r+c*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,r,a,c,u,h,d){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,h,d)}set(e,t,n,r,a,c,u,h,d){const _=this.elements;return _[0]=e,_[1]=r,_[2]=u,_[3]=t,_[4]=a,_[5]=h,_[6]=n,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[3],h=n[6],d=n[1],_=n[4],g=n[7],x=n[2],S=n[5],E=n[8],b=r[0],v=r[3],p=r[6],I=r[1],P=r[4],N=r[7],Z=r[2],F=r[5],l=r[8];return a[0]=c*b+u*I+h*Z,a[3]=c*v+u*P+h*F,a[6]=c*p+u*N+h*l,a[1]=d*b+_*I+g*Z,a[4]=d*v+_*P+g*F,a[7]=d*p+_*N+g*l,a[2]=x*b+S*I+E*Z,a[5]=x*v+S*P+E*F,a[8]=x*p+S*N+E*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],_=e[8];return t*c*_-t*u*d-n*a*_+n*u*h+r*a*d-r*c*h}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],_=e[8],g=_*c-u*d,x=u*h-_*a,S=d*a-c*h,E=t*g+n*x+r*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=g*b,e[1]=(r*d-_*n)*b,e[2]=(u*n-r*c)*b,e[3]=x*b,e[4]=(_*t-r*h)*b,e[5]=(r*a-u*t)*b,e[6]=S*b,e[7]=(n*h-d*t)*b,e[8]=(c*t-n*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,c,u){const h=Math.cos(a),d=Math.sin(a);return this.set(n*h,n*d,-n*(h*c+d*u)+c+e,-r*d,r*h,-r*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Sa.makeScale(e,t)),this}rotate(e){return this.premultiply(Sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sa=new gt;function Kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Jr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uf(){const i=Jr("canvas");return i.style.display="block",i}const Al={};function ks(i){i in Al||(Al[i]=!0,console.warn(i))}function Of(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}function Ff(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wl=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cl=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hr={[Ni]:{transfer:Xs,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[En]:{transfer:Xt,primaries:js,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Js]:{transfer:Xs,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(wl)},[tl]:{transfer:Xt,primaries:qs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Cl),fromReference:i=>i.applyMatrix3(wl).convertLinearToSRGB()}},zf=new Set([Ni,Js]),Nt={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Hr[e].toReference,r=Hr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Hr[i].primaries},getTransfer:function(i){return i===Li?Xs:Hr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Hr[e].luminanceCoefficients)}};function Mr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let nr;class kf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{nr===void 0&&(nr=Jr("canvas")),nr.width=e.width,nr.height=e.height;const n=nr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=nr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=Mr(a[c]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mr(t[n]/255)*255):t[n]=Mr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hf=0;class $c{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,u=r.length;c<u;c++)r[c].isDataTexture?a.push(Ta(r[c].image)):a.push(Ta(r[c]))}else a=Ta(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function Ta(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?kf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vf=0;class sn extends Cr{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=$i,r=$i,a=fn,c=Zi,u=qn,h=xi,d=sn.DEFAULT_ANISOTROPY,_=Li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=es(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Fc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Fc;sn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*n+c[8]*r+c[12]*a,this.y=c[1]*t+c[5]*n+c[9]*r+c[13]*a,this.z=c[2]*t+c[6]*n+c[10]*r+c[14]*a,this.w=c[3]*t+c[7]*n+c[11]*r+c[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const h=e.elements,d=h[0],_=h[4],g=h[8],x=h[1],S=h[5],E=h[9],b=h[2],v=h[6],p=h[10];if(Math.abs(_-x)<.01&&Math.abs(g-b)<.01&&Math.abs(E-v)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+b)<.1&&Math.abs(E+v)<.1&&Math.abs(d+S+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(d+1)/2,N=(S+1)/2,Z=(p+1)/2,F=(_+x)/4,l=(g+b)/4,q=(E+v)/4;return P>N&&P>Z?P<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(P),r=F/n,a=l/n):N>Z?N<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(N),n=F/r,a=q/r):Z<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(Z),n=l/a,r=q/a),this.set(n,r,a,t),this}let I=Math.sqrt((v-E)*(v-E)+(g-b)*(g-b)+(x-_)*(x-_));return Math.abs(I)<.001&&(I=1),this.x=(v-E)/I,this.y=(g-b)/I,this.z=(x-_)/I,this.w=Math.acos((d+S+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gf extends Cr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new sn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const c=n.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends Gf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Zc extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wf extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,c,u){let h=n[r+0],d=n[r+1],_=n[r+2],g=n[r+3];const x=a[c+0],S=a[c+1],E=a[c+2],b=a[c+3];if(u===0){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(u===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=b;return}if(g!==b||h!==x||d!==S||_!==E){let v=1-u;const p=h*x+d*S+_*E+g*b,I=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){const Z=Math.sqrt(P),F=Math.atan2(Z,p*I);v=Math.sin(v*F)/Z,u=Math.sin(u*F)/Z}const N=u*I;if(h=h*v+x*N,d=d*v+S*N,_=_*v+E*N,g=g*v+b*N,v===1-u){const Z=1/Math.sqrt(h*h+d*d+_*_+g*g);h*=Z,d*=Z,_*=Z,g*=Z}}e[t]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,r,a,c){const u=n[r],h=n[r+1],d=n[r+2],_=n[r+3],g=a[c],x=a[c+1],S=a[c+2],E=a[c+3];return e[t]=u*E+_*g+h*S-d*x,e[t+1]=h*E+_*x+d*g-u*S,e[t+2]=d*E+_*S+u*x-h*g,e[t+3]=_*E-u*g-h*x-d*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(n/2),_=u(r/2),g=u(a/2),x=h(n/2),S=h(r/2),E=h(a/2);switch(c){case"XYZ":this._x=x*_*g+d*S*E,this._y=d*S*g-x*_*E,this._z=d*_*E+x*S*g,this._w=d*_*g-x*S*E;break;case"YXZ":this._x=x*_*g+d*S*E,this._y=d*S*g-x*_*E,this._z=d*_*E-x*S*g,this._w=d*_*g+x*S*E;break;case"ZXY":this._x=x*_*g-d*S*E,this._y=d*S*g+x*_*E,this._z=d*_*E+x*S*g,this._w=d*_*g-x*S*E;break;case"ZYX":this._x=x*_*g-d*S*E,this._y=d*S*g+x*_*E,this._z=d*_*E-x*S*g,this._w=d*_*g+x*S*E;break;case"YZX":this._x=x*_*g+d*S*E,this._y=d*S*g+x*_*E,this._z=d*_*E-x*S*g,this._w=d*_*g-x*S*E;break;case"XZY":this._x=x*_*g-d*S*E,this._y=d*S*g-x*_*E,this._z=d*_*E+x*S*g,this._w=d*_*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],c=t[1],u=t[5],h=t[9],d=t[2],_=t[6],g=t[10],x=n+u+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(a-d)*S,this._z=(c-r)*S}else if(n>u&&n>g){const S=2*Math.sqrt(1+n-u-g);this._w=(_-h)/S,this._x=.25*S,this._y=(r+c)/S,this._z=(a+d)/S}else if(u>g){const S=2*Math.sqrt(1+u-n-g);this._w=(a-d)/S,this._x=(r+c)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+g-n-u);this._w=(c-r)/S,this._x=(a+d)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,c=e._w,u=t._x,h=t._y,d=t._z,_=t._w;return this._x=n*_+c*u+r*d-a*h,this._y=r*_+c*h+a*u-n*d,this._z=a*_+c*d+n*h-r*u,this._w=c*_-n*u-r*h-a*d,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,c=this._w;let u=c*e._w+n*e._x+r*e._y+a*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=c,this._x=n,this._y=r,this._z=a,this;const h=1-u*u;if(h<=Number.EPSILON){const S=1-t;return this._w=S*c+t*this._w,this._x=S*n+t*this._x,this._y=S*r+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const d=Math.sqrt(h),_=Math.atan2(d,u),g=Math.sin((1-t)*_)/d,x=Math.sin(t*_)/d;return this._w=c*g+this._w*x,this._x=n*g+this._x*x,this._y=r*g+this._y*x,this._z=a*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,c=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*c,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*c,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*c,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*r-u*n),_=2*(u*t-a*r),g=2*(a*n-c*t);return this.x=t+h*d+c*g-u*_,this.y=n+h*_+u*d-a*g,this.z=r+h*g+a*_-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,c=t.x,u=t.y,h=t.z;return this.x=r*h-a*u,this.y=a*c-n*h,this.z=n*u-r*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ba.copy(this).projectOnVector(e),this.sub(ba)}reflect(e){return this.sub(ba.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ba=new j,Rl=new Rr;class ts{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Gn):Gn.fromBufferAttribute(a,c),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),us.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(e.matrixWorld),this.union(us)}const r=e.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),fs.subVectors(this.max,Vr),ir.subVectors(e.a,Vr),rr.subVectors(e.b,Vr),sr.subVectors(e.c,Vr),Ai.subVectors(rr,ir),wi.subVectors(sr,rr),zi.subVectors(ir,sr);let t=[0,-Ai.z,Ai.y,0,-wi.z,wi.y,0,-zi.z,zi.y,Ai.z,0,-Ai.x,wi.z,0,-wi.x,zi.z,0,-zi.x,-Ai.y,Ai.x,0,-wi.y,wi.x,0,-zi.y,zi.x,0];return!Aa(t,ir,rr,sr,fs)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,ir,rr,sr,fs))?!1:(hs.crossVectors(Ai,wi),t=[hs.x,hs.y,hs.z],Aa(t,ir,rr,sr,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new j,new j,new j,new j,new j,new j,new j,new j],Gn=new j,us=new ts,ir=new j,rr=new j,sr=new j,Ai=new j,wi=new j,zi=new j,Vr=new j,fs=new j,hs=new j,ki=new j;function Aa(i,e,t,n,r){for(let a=0,c=i.length-3;a<=c;a+=3){ki.fromArray(i,a);const u=r.x*Math.abs(ki.x)+r.y*Math.abs(ki.y)+r.z*Math.abs(ki.z),h=e.dot(ki),d=t.dot(ki),_=n.dot(ki);if(Math.max(-Math.max(h,d,_),Math.min(h,d,_))>u)return!1}return!0}const Xf=new ts,Gr=new j,wa=new j;class ns{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Xf.setFromPoints(e).getCenter(n);let r=0;for(let a=0,c=e.length;a<c;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(wa)),this.expandByPoint(Gr.copy(e.center).sub(wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new j,Ca=new j,ds=new j,Ci=new j,Ra=new j,ps=new j,Pa=new j;class ea{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ca.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Ca);const a=e.distanceTo(t)*.5,c=-this.direction.dot(ds),u=Ci.dot(this.direction),h=-Ci.dot(ds),d=Ci.lengthSq(),_=Math.abs(1-c*c);let g,x,S,E;if(_>0)if(g=c*h-u,x=c*u-h,E=a*_,g>=0)if(x>=-E)if(x<=E){const b=1/_;g*=b,x*=b,S=g*(g+c*x+2*u)+x*(c*g+x+2*h)+d}else x=a,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+d;else x=-a,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+d;else x<=-E?(g=Math.max(0,-(-c*a+u)),x=g>0?-a:Math.min(Math.max(-a,-h),a),S=-g*g+x*(x+2*h)+d):x<=E?(g=0,x=Math.min(Math.max(-a,-h),a),S=x*(x+2*h)+d):(g=Math.max(0,-(c*a+u)),x=g>0?a:Math.min(Math.max(-a,-h),a),S=-g*g+x*(x+2*h)+d);else x=c>0?-a:a,g=Math.max(0,-(c*x+u)),S=-g*g+x*(x+2*h)+d;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ca).addScaledVector(ds,x),S}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),r=li.dot(li)-n*n,a=e.radius*e.radius;if(r>a)return null;const c=Math.sqrt(a-r),u=n-c,h=n+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,c,u,h;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return d>=0?(n=(e.min.x-x.x)*d,r=(e.max.x-x.x)*d):(n=(e.max.x-x.x)*d,r=(e.min.x-x.x)*d),_>=0?(a=(e.min.y-x.y)*_,c=(e.max.y-x.y)*_):(a=(e.max.y-x.y)*_,c=(e.min.y-x.y)*_),n>c||a>r||((a>n||isNaN(n))&&(n=a),(c<r||isNaN(r))&&(r=c),g>=0?(u=(e.min.z-x.z)*g,h=(e.max.z-x.z)*g):(u=(e.max.z-x.z)*g,h=(e.min.z-x.z)*g),n>h||u>r)||((u>n||n!==n)&&(n=u),(h<r||r!==r)&&(r=h),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,r,a){Ra.subVectors(t,e),ps.subVectors(n,e),Pa.crossVectors(Ra,ps);let c=this.direction.dot(Pa),u;if(c>0){if(r)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Ci.subVectors(this.origin,e);const h=u*this.direction.dot(ps.crossVectors(Ci,ps));if(h<0)return null;const d=u*this.direction.dot(Ra.cross(Ci));if(d<0||h+d>c)return null;const _=-u*Ci.dot(Pa);return _<0?null:this.at(_/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,n,r,a,c,u,h,d,_,g,x,S,E,b,v){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,c,u,h,d,_,g,x,S,E,b,v)}set(e,t,n,r,a,c,u,h,d,_,g,x,S,E,b,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=a,p[5]=c,p[9]=u,p[13]=h,p[2]=d,p[6]=_,p[10]=g,p[14]=x,p[3]=S,p[7]=E,p[11]=b,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/ar.setFromMatrixColumn(e,0).length(),a=1/ar.setFromMatrixColumn(e,1).length(),c=1/ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*c,t[9]=n[9]*c,t[10]=n[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,c=Math.cos(n),u=Math.sin(n),h=Math.cos(r),d=Math.sin(r),_=Math.cos(a),g=Math.sin(a);if(e.order==="XYZ"){const x=c*_,S=c*g,E=u*_,b=u*g;t[0]=h*_,t[4]=-h*g,t[8]=d,t[1]=S+E*d,t[5]=x-b*d,t[9]=-u*h,t[2]=b-x*d,t[6]=E+S*d,t[10]=c*h}else if(e.order==="YXZ"){const x=h*_,S=h*g,E=d*_,b=d*g;t[0]=x+b*u,t[4]=E*u-S,t[8]=c*d,t[1]=c*g,t[5]=c*_,t[9]=-u,t[2]=S*u-E,t[6]=b+x*u,t[10]=c*h}else if(e.order==="ZXY"){const x=h*_,S=h*g,E=d*_,b=d*g;t[0]=x-b*u,t[4]=-c*g,t[8]=E+S*u,t[1]=S+E*u,t[5]=c*_,t[9]=b-x*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const x=c*_,S=c*g,E=u*_,b=u*g;t[0]=h*_,t[4]=E*d-S,t[8]=x*d+b,t[1]=h*g,t[5]=b*d+x,t[9]=S*d-E,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const x=c*h,S=c*d,E=u*h,b=u*d;t[0]=h*_,t[4]=b-x*g,t[8]=E*g+S,t[1]=g,t[5]=c*_,t[9]=-u*_,t[2]=-d*_,t[6]=S*g+E,t[10]=x-b*g}else if(e.order==="XZY"){const x=c*h,S=c*d,E=u*h,b=u*d;t[0]=h*_,t[4]=-g,t[8]=d*_,t[1]=x*g+b,t[5]=c*_,t[9]=S*g-E,t[2]=E*g-S,t[6]=u*_,t[10]=b*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,qf)}lookAt(e,t,n){const r=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Ri.crossVectors(n,Dn),Ri.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Ri.crossVectors(n,Dn)),Ri.normalize(),ms.crossVectors(Dn,Ri),r[0]=Ri.x,r[4]=ms.x,r[8]=Dn.x,r[1]=Ri.y,r[5]=ms.y,r[9]=Dn.y,r[2]=Ri.z,r[6]=ms.z,r[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,c=n[0],u=n[4],h=n[8],d=n[12],_=n[1],g=n[5],x=n[9],S=n[13],E=n[2],b=n[6],v=n[10],p=n[14],I=n[3],P=n[7],N=n[11],Z=n[15],F=r[0],l=r[4],q=r[8],le=r[12],A=r[1],R=r[5],ae=r[9],W=r[13],re=r[2],me=r[6],te=r[10],de=r[14],ie=r[3],Se=r[7],Pe=r[11],Ue=r[15];return a[0]=c*F+u*A+h*re+d*ie,a[4]=c*l+u*R+h*me+d*Se,a[8]=c*q+u*ae+h*te+d*Pe,a[12]=c*le+u*W+h*de+d*Ue,a[1]=_*F+g*A+x*re+S*ie,a[5]=_*l+g*R+x*me+S*Se,a[9]=_*q+g*ae+x*te+S*Pe,a[13]=_*le+g*W+x*de+S*Ue,a[2]=E*F+b*A+v*re+p*ie,a[6]=E*l+b*R+v*me+p*Se,a[10]=E*q+b*ae+v*te+p*Pe,a[14]=E*le+b*W+v*de+p*Ue,a[3]=I*F+P*A+N*re+Z*ie,a[7]=I*l+P*R+N*me+Z*Se,a[11]=I*q+P*ae+N*te+Z*Pe,a[15]=I*le+P*W+N*de+Z*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],c=e[1],u=e[5],h=e[9],d=e[13],_=e[2],g=e[6],x=e[10],S=e[14],E=e[3],b=e[7],v=e[11],p=e[15];return E*(+a*h*g-r*d*g-a*u*x+n*d*x+r*u*S-n*h*S)+b*(+t*h*S-t*d*x+a*c*x-r*c*S+r*d*_-a*h*_)+v*(+t*d*g-t*u*S-a*c*g+n*c*S+a*u*_-n*d*_)+p*(-r*u*_-t*h*g+t*u*x+r*c*g-n*c*x+n*h*_)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],c=e[4],u=e[5],h=e[6],d=e[7],_=e[8],g=e[9],x=e[10],S=e[11],E=e[12],b=e[13],v=e[14],p=e[15],I=g*v*d-b*x*d+b*h*S-u*v*S-g*h*p+u*x*p,P=E*x*d-_*v*d-E*h*S+c*v*S+_*h*p-c*x*p,N=_*b*d-E*g*d+E*u*S-c*b*S-_*u*p+c*g*p,Z=E*g*h-_*b*h-E*u*x+c*b*x+_*u*v-c*g*v,F=t*I+n*P+r*N+a*Z;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/F;return e[0]=I*l,e[1]=(b*x*a-g*v*a-b*r*S+n*v*S+g*r*p-n*x*p)*l,e[2]=(u*v*a-b*h*a+b*r*d-n*v*d-u*r*p+n*h*p)*l,e[3]=(g*h*a-u*x*a-g*r*d+n*x*d+u*r*S-n*h*S)*l,e[4]=P*l,e[5]=(_*v*a-E*x*a+E*r*S-t*v*S-_*r*p+t*x*p)*l,e[6]=(E*h*a-c*v*a-E*r*d+t*v*d+c*r*p-t*h*p)*l,e[7]=(c*x*a-_*h*a+_*r*d-t*x*d-c*r*S+t*h*S)*l,e[8]=N*l,e[9]=(E*g*a-_*b*a-E*n*S+t*b*S+_*n*p-t*g*p)*l,e[10]=(c*b*a-E*u*a+E*n*d-t*b*d-c*n*p+t*u*p)*l,e[11]=(_*u*a-c*g*a-_*n*d+t*g*d+c*n*S-t*u*S)*l,e[12]=Z*l,e[13]=(_*b*r-E*g*r+E*n*x-t*b*x-_*n*v+t*g*v)*l,e[14]=(E*u*r-c*b*r-E*n*h+t*b*h+c*n*v-t*u*v)*l,e[15]=(c*g*r-_*u*r+_*n*h-t*g*h-c*n*x+t*u*x)*l,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,c=e.x,u=e.y,h=e.z,d=a*c,_=a*u;return this.set(d*c+n,d*u-r*h,d*h+r*u,0,d*u+r*h,_*u+n,_*h-r*c,0,d*h-r*u,_*h+r*c,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,c){return this.set(1,n,a,0,e,1,c,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,c=t._y,u=t._z,h=t._w,d=a+a,_=c+c,g=u+u,x=a*d,S=a*_,E=a*g,b=c*_,v=c*g,p=u*g,I=h*d,P=h*_,N=h*g,Z=n.x,F=n.y,l=n.z;return r[0]=(1-(b+p))*Z,r[1]=(S+N)*Z,r[2]=(E-P)*Z,r[3]=0,r[4]=(S-N)*F,r[5]=(1-(x+p))*F,r[6]=(v+I)*F,r[7]=0,r[8]=(E+P)*l,r[9]=(v-I)*l,r[10]=(1-(x+b))*l,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=ar.set(r[0],r[1],r[2]).length();const c=ar.set(r[4],r[5],r[6]).length(),u=ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const d=1/a,_=1/c,g=1/u;return Wn.elements[0]*=d,Wn.elements[1]*=d,Wn.elements[2]*=d,Wn.elements[4]*=_,Wn.elements[5]*=_,Wn.elements[6]*=_,Wn.elements[8]*=g,Wn.elements[9]*=g,Wn.elements[10]*=g,t.setFromRotationMatrix(Wn),n.x=a,n.y=c,n.z=u,this}makePerspective(e,t,n,r,a,c,u=gi){const h=this.elements,d=2*a/(t-e),_=2*a/(n-r),g=(t+e)/(t-e),x=(n+r)/(n-r);let S,E;if(u===gi)S=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Ys)S=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,r,a,c,u=gi){const h=this.elements,d=1/(t-e),_=1/(n-r),g=1/(c-a),x=(t+e)*d,S=(n+r)*_;let E,b;if(u===gi)E=(c+a)*g,b=-2*g;else if(u===Ys)E=a*g,b=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=b,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ar=new j,Wn=new zt,jf=new j(0,0,0),qf=new j(1,1,1),Ri=new j,ms=new j,Dn=new j,Pl=new zt,Dl=new Rr;class ni{constructor(e=0,t=0,n=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],c=r[4],u=r[8],h=r[1],d=r[5],_=r[9],g=r[2],x=r[6],S=r[10];switch(t){case"XYZ":this._y=Math.asin(Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(x,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Rn(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Rn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-Rn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,d),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dl.setFromEuler(this),this.setFromQuaternion(Dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class nl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yf=0;const Ll=new j,or=new Rr,ci=new zt,gs=new j,Wr=new j,Kf=new j,$f=new Rr,Il=new j(1,0,0),Nl=new j(0,1,0),Ul=new j(0,0,1),Ol={type:"added"},Zf={type:"removed"},lr={type:"childadded",child:null},Da={type:"childremoved",child:null};class $t extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new j,t=new ni,n=new Rr,r=new j(1,1,1);function a(){n.setFromEuler(t,!1)}function c(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new gt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.multiply(or),this}rotateOnWorldAxis(e,t){return or.setFromAxisAngle(e,t),this.quaternion.premultiply(or),this}rotateX(e){return this.rotateOnAxis(Il,e)}rotateY(e){return this.rotateOnAxis(Nl,e)}rotateZ(e){return this.rotateOnAxis(Ul,e)}translateOnAxis(e,t){return Ll.copy(e).applyQuaternion(this.quaternion),this.position.add(Ll.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Il,e)}translateY(e){return this.translateOnAxis(Nl,e)}translateZ(e){return this.translateOnAxis(Ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Wr,gs,this.up):ci.lookAt(gs,Wr,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),or.setFromRotationMatrix(ci),this.quaternion.premultiply(or.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ol),lr.child=e,this.dispatchEvent(lr),lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),Da.child=e,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ol),lr.child=e,this.dispatchEvent(lr),lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const c=this.children[n].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,$f,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,_=h.length;d<_;d++){const g=h[d];a(e.shapes,g)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(a(e.materials,this.material[h]));r.material=u}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let u=0;u<this.children.length;u++)r.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];r.animations.push(a(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),_=c(e.images),g=c(e.shapes),x=c(e.skeletons),S=c(e.animations),E=c(e.nodes);u.length>0&&(n.geometries=u),h.length>0&&(n.materials=h),d.length>0&&(n.textures=d),_.length>0&&(n.images=_),g.length>0&&(n.shapes=g),x.length>0&&(n.skeletons=x),S.length>0&&(n.animations=S),E.length>0&&(n.nodes=E)}return n.object=r,n;function c(u){const h=[];for(const d in u){const _=u[d];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}$t.DEFAULT_UP=new j(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new j,ui=new j,La=new j,fi=new j,cr=new j,ur=new j,Fl=new j,Ia=new j,Na=new j,Ua=new j,Oa=new Bt,Fa=new Bt,Ba=new Bt;class jn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xn.subVectors(e,t),r.cross(Xn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Xn.subVectors(r,t),ui.subVectors(n,t),La.subVectors(e,t);const c=Xn.dot(Xn),u=Xn.dot(ui),h=Xn.dot(La),d=ui.dot(ui),_=ui.dot(La),g=c*d-u*u;if(g===0)return a.set(0,0,0),null;const x=1/g,S=(d*h-u*_)*x,E=(c*_-u*h)*x;return a.set(1-S-E,E,S)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,r,a,c,u,h){return this.getBarycoord(e,t,n,r,fi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,fi.x),h.addScaledVector(c,fi.y),h.addScaledVector(u,fi.z),h)}static getInterpolatedAttribute(e,t,n,r,a,c){return Oa.setScalar(0),Fa.setScalar(0),Ba.setScalar(0),Oa.fromBufferAttribute(e,t),Fa.fromBufferAttribute(e,n),Ba.fromBufferAttribute(e,r),c.setScalar(0),c.addScaledVector(Oa,a.x),c.addScaledVector(Fa,a.y),c.addScaledVector(Ba,a.z),c}static isFrontFacing(e,t,n,r){return Xn.subVectors(n,t),ui.subVectors(e,t),Xn.cross(ui).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Xn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return jn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let c,u;cr.subVectors(r,n),ur.subVectors(a,n),Ia.subVectors(e,n);const h=cr.dot(Ia),d=ur.dot(Ia);if(h<=0&&d<=0)return t.copy(n);Na.subVectors(e,r);const _=cr.dot(Na),g=ur.dot(Na);if(_>=0&&g<=_)return t.copy(r);const x=h*g-_*d;if(x<=0&&h>=0&&_<=0)return c=h/(h-_),t.copy(n).addScaledVector(cr,c);Ua.subVectors(e,a);const S=cr.dot(Ua),E=ur.dot(Ua);if(E>=0&&S<=E)return t.copy(a);const b=S*d-h*E;if(b<=0&&d>=0&&E<=0)return u=d/(d-E),t.copy(n).addScaledVector(ur,u);const v=_*E-S*g;if(v<=0&&g-_>=0&&S-E>=0)return Fl.subVectors(a,r),u=(g-_)/(g-_+(S-E)),t.copy(r).addScaledVector(Fl,u);const p=1/(v+b+x);return c=b*p,u=x*p,t.copy(n).addScaledVector(cr,c).addScaledVector(ur,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Qc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},_s={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class _t{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Nt.workingColorSpace){if(e=Nf(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,c=2*n-a;this.r=za(c,a,e+1/3),this.g=za(c,a,e),this.b=za(c,a,e-1/3)}return Nt.toWorkingColorSpace(this,r),this}setStyle(e,t=En){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=r[1],u=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=Qc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Nt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Rn(_n.r*255,0,255))*65536+Math.round(Rn(_n.g*255,0,255))*256+Math.round(Rn(_n.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(_n.copy(this),t);const n=_n.r,r=_n.g,a=_n.b,c=Math.max(n,r,a),u=Math.min(n,r,a);let h,d;const _=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=_<=.5?g/(c+u):g/(2-c-u),c){case n:h=(r-a)/g+(r<a?6:0);break;case r:h=(a-n)/g+2;break;case a:h=(n-r)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=_,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=En){Nt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,n=_n.g,r=_n.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(_s);const n=ya(Pi.h,_s.h,t),r=ya(Pi.s,_s.s,t),a=ya(Pi.l,_s.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new _t;_t.NAMES=Qc;let Qf=0;class ii extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=vr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=El,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=tr,this.stencilZFail=tr,this.stencilZPass=tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(n.blending=this.blending),this.side!==vi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==qi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==El&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const c=[];for(const u in a){const h=a[u];delete h.metadata,c.push(h)}return c}if(t){const a=r(e.textures),c=r(e.images);a.length>0&&(n.textures=a),c.length>0&&(n.images=c)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yi extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new j,vs=new Et;class ti{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),r=wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=wn(t,this.array),n=wn(n,this.array),r=wn(r,this.array),a=wn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}}class Jc extends ti{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends ti{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class hn extends ti{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jf=0;const On=new zt,ka=new $t,fr=new j,Ln=new ts,Xr=new ts,cn=new j;class zn extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?eu:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new gt().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return On.makeRotationFromQuaternion(e),this.applyMatrix4(On),this}rotateX(e){return On.makeRotationX(e),this.applyMatrix4(On),this}rotateY(e){return On.makeRotationY(e),this.applyMatrix4(On),this}rotateZ(e){return On.makeRotationZ(e),this.applyMatrix4(On),this}translate(e,t,n){return On.makeTranslation(e,t,n),this.applyMatrix4(On),this}scale(e,t,n){return On.makeScale(e,t,n),this.applyMatrix4(On),this}lookAt(e){return ka.lookAt(e),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];Ln.setFromBufferAttribute(a),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Xr.setFromBufferAttribute(u),this.morphTargetsRelative?(cn.addVectors(Ln.min,Xr.min),Ln.expandByPoint(cn),cn.addVectors(Ln.max,Xr.max),Ln.expandByPoint(cn)):(Ln.expandByPoint(Xr.min),Ln.expandByPoint(Xr.max))}Ln.getCenter(n);let r=0;for(let a=0,c=e.count;a<c;a++)cn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(cn));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],h=this.morphTargetsRelative;for(let d=0,_=u.count;d<_;d++)cn.fromBufferAttribute(u,d),h&&(fr.fromBufferAttribute(e,d),cn.add(fr)),r=Math.max(r,n.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ti(new Float32Array(4*n.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let q=0;q<n.count;q++)u[q]=new j,h[q]=new j;const d=new j,_=new j,g=new j,x=new Et,S=new Et,E=new Et,b=new j,v=new j;function p(q,le,A){d.fromBufferAttribute(n,q),_.fromBufferAttribute(n,le),g.fromBufferAttribute(n,A),x.fromBufferAttribute(a,q),S.fromBufferAttribute(a,le),E.fromBufferAttribute(a,A),_.sub(d),g.sub(d),S.sub(x),E.sub(x);const R=1/(S.x*E.y-E.x*S.y);isFinite(R)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(R),v.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(R),u[q].add(b),u[le].add(b),u[A].add(b),h[q].add(v),h[le].add(v),h[A].add(v))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let q=0,le=I.length;q<le;++q){const A=I[q],R=A.start,ae=A.count;for(let W=R,re=R+ae;W<re;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const P=new j,N=new j,Z=new j,F=new j;function l(q){Z.fromBufferAttribute(r,q),F.copy(Z);const le=u[q];P.copy(le),P.sub(Z.multiplyScalar(Z.dot(le))).normalize(),N.crossVectors(F,le);const R=N.dot(h[q])<0?-1:1;c.setXYZW(q,P.x,P.y,P.z,R)}for(let q=0,le=I.length;q<le;++q){const A=I[q],R=A.start,ae=A.count;for(let W=R,re=R+ae;W<re;W+=3)l(e.getX(W+0)),l(e.getX(W+1)),l(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ti(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,S=n.count;x<S;x++)n.setXYZ(x,0,0,0);const r=new j,a=new j,c=new j,u=new j,h=new j,d=new j,_=new j,g=new j;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),b=e.getX(x+1),v=e.getX(x+2);r.fromBufferAttribute(t,E),a.fromBufferAttribute(t,b),c.fromBufferAttribute(t,v),_.subVectors(c,a),g.subVectors(r,a),_.cross(g),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,v),u.add(_),h.add(_),d.add(_),n.setXYZ(E,u.x,u.y,u.z),n.setXYZ(b,h.x,h.y,h.z),n.setXYZ(v,d.x,d.y,d.z)}else for(let x=0,S=t.count;x<S;x+=3)r.fromBufferAttribute(t,x+0),a.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),_.subVectors(c,a),g.subVectors(r,a),_.cross(g),n.setXYZ(x+0,_.x,_.y,_.z),n.setXYZ(x+1,_.x,_.y,_.z),n.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(u,h){const d=u.array,_=u.itemSize,g=u.normalized,x=new d.constructor(h.length*_);let S=0,E=0;for(let b=0,v=h.length;b<v;b++){u.isInterleavedBufferAttribute?S=h[b]*u.data.stride+u.offset:S=h[b]*_;for(let p=0;p<_;p++)x[E++]=d[S++]}return new ti(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,n=this.index.array,r=this.attributes;for(const u in r){const h=r[u],d=e(h,n);t.setAttribute(u,d)}const a=this.morphAttributes;for(const u in a){const h=[],d=a[u];for(let _=0,g=d.length;_<g;_++){const x=d[_],S=e(x,n);h.push(S)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const d=n[h];e.data.attributes[h]=d.toJSON(e.data)}const r={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],_=[];for(let g=0,x=d.length;g<x;g++){const S=d[g];_.push(S.toJSON(e.data))}_.length>0&&(r[h]=_,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const d in r){const _=r[d];this.setAttribute(d,_.clone(t))}const a=e.morphAttributes;for(const d in a){const _=[],g=a[d];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(t));this.morphAttributes[d]=_}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new zt,Hi=new ea,xs=new ns,zl=new j,Ms=new j,ys=new j,Ss=new j,Ha=new j,Es=new j,kl=new j,Ts=new j;class Tn extends $t{constructor(e=new zn,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,c=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const u=this.morphTargetInfluences;if(a&&u){Es.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const _=u[h],g=a[h];_!==0&&(Ha.fromBufferAttribute(g,e),c?Es.addScaledVector(Ha,_):Es.addScaledVector(Ha.sub(t),_))}t.add(Es)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(a),Hi.copy(e.ray).recast(e.near),!(xs.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(xs,zl)===null||Hi.origin.distanceToSquared(zl)>(e.far-e.near)**2))&&(Bl.copy(a).invert(),Hi.copy(e.ray).applyMatrix4(Bl),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,c=this.material,u=a.index,h=a.attributes.position,d=a.attributes.uv,_=a.attributes.uv1,g=a.attributes.normal,x=a.groups,S=a.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,b=x.length;E<b;E++){const v=x[E],p=c[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(u.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,Z=P;N<Z;N+=3){const F=u.getX(N),l=u.getX(N+1),q=u.getX(N+2);r=bs(this,p,e,n,d,_,g,F,l,q),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const E=Math.max(0,S.start),b=Math.min(u.count,S.start+S.count);for(let v=E,p=b;v<p;v+=3){const I=u.getX(v),P=u.getX(v+1),N=u.getX(v+2);r=bs(this,c,e,n,d,_,g,I,P,N),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,b=x.length;E<b;E++){const v=x[E],p=c[v.materialIndex],I=Math.max(v.start,S.start),P=Math.min(h.count,Math.min(v.start+v.count,S.start+S.count));for(let N=I,Z=P;N<Z;N+=3){const F=N,l=N+1,q=N+2;r=bs(this,p,e,n,d,_,g,F,l,q),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=v.materialIndex,t.push(r))}}else{const E=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let v=E,p=b;v<p;v+=3){const I=v,P=v+1,N=v+2;r=bs(this,c,e,n,d,_,g,I,P,N),r&&(r.faceIndex=Math.floor(v/3),t.push(r))}}}}function eh(i,e,t,n,r,a,c,u){let h;if(e.side===Pn?h=n.intersectTriangle(c,a,r,!0,u):h=n.intersectTriangle(r,a,c,e.side===vi,u),h===null)return null;Ts.copy(u),Ts.applyMatrix4(i.matrixWorld);const d=t.ray.origin.distanceTo(Ts);return d<t.near||d>t.far?null:{distance:d,point:Ts.clone(),object:i}}function bs(i,e,t,n,r,a,c,u,h,d){i.getVertexPosition(u,Ms),i.getVertexPosition(h,ys),i.getVertexPosition(d,Ss);const _=eh(i,e,t,n,Ms,ys,Ss,kl);if(_){const g=new j;jn.getBarycoord(kl,Ms,ys,Ss,g),r&&(_.uv=jn.getInterpolatedAttribute(r,u,h,d,g,new Et)),a&&(_.uv1=jn.getInterpolatedAttribute(a,u,h,d,g,new Et)),c&&(_.normal=jn.getInterpolatedAttribute(c,u,h,d,g,new j),_.normal.dot(n.direction)>0&&_.normal.multiplyScalar(-1));const x={a:u,b:h,c:d,normal:new j,materialIndex:0};jn.getNormal(Ms,ys,Ss,x.normal),_.face=x,_.barycoord=g}return _}class is extends zn{constructor(e=1,t=1,n=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:c};const u=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],_=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,n,t,e,c,a,0),E("z","y","x",1,-1,n,t,-e,c,a,1),E("x","z","y",1,1,e,n,t,r,c,2),E("x","z","y",1,-1,e,n,-t,r,c,3),E("x","y","z",1,-1,e,t,n,r,a,4),E("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(h),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(g,2));function E(b,v,p,I,P,N,Z,F,l,q,le){const A=N/l,R=Z/q,ae=N/2,W=Z/2,re=F/2,me=l+1,te=q+1;let de=0,ie=0;const Se=new j;for(let Pe=0;Pe<te;Pe++){const Ue=Pe*R-W;for(let at=0;at<me;at++){const vt=at*A-ae;Se[b]=vt*I,Se[v]=Ue*P,Se[p]=re,d.push(Se.x,Se.y,Se.z),Se[b]=0,Se[v]=0,Se[p]=F>0?1:-1,_.push(Se.x,Se.y,Se.z),g.push(at/l),g.push(1-Pe/q),de+=1}}for(let Pe=0;Pe<q;Pe++)for(let Ue=0;Ue<l;Ue++){const at=x+Ue+me*Pe,vt=x+Ue+me*(Pe+1),ce=x+(Ue+1)+me*(Pe+1),ve=x+(Ue+1)+me*Pe;h.push(at,vt,ve),h.push(vt,ce,ve),ie+=6}u.addGroup(S,ie,le),S+=ie,x+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ar(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Sn(i){const e={};for(let t=0;t<i.length;t++){const n=Ar(i[t]);for(const r in n)e[r]=n[r]}return e}function th(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Nt.workingColorSpace}const nu={clone:Ar,merge:Sn};var nh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ih=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nh,this.fragmentShader=ih,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?t.uniforms[r]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[r]={type:"m4",value:c.toArray()}:t.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class iu extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new j,Hl=new Et,Vl=new Et;class In extends iu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(Ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,Hl,Vl),t.subVectors(Vl,Hl)}setViewOffset(e,t,n,r,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ma*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*r/h,t-=c.offsetY*n/d,r*=c.width/h,n*=c.height/d}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const hr=-90,dr=1;class rh extends $t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(hr,dr,e,t);r.layers=this.layers,this.add(r);const a=new In(hr,dr,e,t);a.layers=this.layers,this.add(a);const c=new In(hr,dr,e,t);c.layers=this.layers,this.add(c);const u=new In(hr,dr,e,t);u.layers=this.layers,this.add(u);const h=new In(hr,dr,e,t);h.layers=this.layers,this.add(h);const d=new In(hr,dr,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,c,u,h]=t;for(const d of t)this.remove(d);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,h,d,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,c),e.setRenderTarget(n,2,r),e.render(t,u),e.setRenderTarget(n,3,r),e.render(t,h),e.setRenderTarget(n,4,r),e.render(t,d),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),e.render(t,_),e.setRenderTarget(g,x,S),e.xr.enabled=E,n.texture.needsPMREMUpdate=!0}}class ru extends sn{constructor(e,t,n,r,a,c,u,h,d,_){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,n,r,a,c,u,h,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sh extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ru(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new is(5,5,5),a=new ri({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:_i});a.uniforms.tEquirect.value=t;const c=new Tn(r,a),u=t.minFilter;return t.minFilter===Zi&&(t.minFilter=fn),new rh(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,n,r);e.setRenderTarget(a)}}const Va=new j,ah=new j,oh=new gt;class Xi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Va.subVectors(n,t).cross(ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Va),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||oh.getNormalMatrix(e),r=this.coplanarPoint(Va).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new ns,As=new j;class il{constructor(e=new Xi,t=new Xi,n=new Xi,r=new Xi,a=new Xi,c=new Xi){this.planes=[e,t,n,r,a,c]}set(e,t,n,r,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(r),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){const n=this.planes,r=e.elements,a=r[0],c=r[1],u=r[2],h=r[3],d=r[4],_=r[5],g=r[6],x=r[7],S=r[8],E=r[9],b=r[10],v=r[11],p=r[12],I=r[13],P=r[14],N=r[15];if(n[0].setComponents(h-a,x-d,v-S,N-p).normalize(),n[1].setComponents(h+a,x+d,v+S,N+p).normalize(),n[2].setComponents(h+c,x+_,v+E,N+I).normalize(),n[3].setComponents(h-c,x-_,v-E,N-I).normalize(),n[4].setComponents(h-u,x-g,v-b,N-P).normalize(),t===gi)n[5].setComponents(h+u,x+g,v+b,N+P).normalize();else if(t===Ys)n[5].setComponents(u,g,b,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(e){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(As.x=r.normal.x>0?e.max.x:e.min.x,As.y=r.normal.y>0?e.max.y:e.min.y,As.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(As)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function su(){let i=null,e=!1,t=null,n=null;function r(a,c){t(a,c),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function lh(i){const e=new WeakMap;function t(u,h){const d=u.array,_=u.usage,g=d.byteLength,x=i.createBuffer();i.bindBuffer(h,x),i.bufferData(h,d,_),u.onUploadCallback();let S;if(d instanceof Float32Array)S=i.FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?S=i.HALF_FLOAT:S=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=i.SHORT;else if(d instanceof Uint32Array)S=i.UNSIGNED_INT;else if(d instanceof Int32Array)S=i.INT;else if(d instanceof Int8Array)S=i.BYTE;else if(d instanceof Uint8Array)S=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,h,d){const _=h.array,g=h.updateRanges;if(i.bindBuffer(d,u),g.length===0)i.bufferSubData(d,0,_);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],b=g[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,g[x]=b)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const b=g[S];i.bufferSubData(d,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function r(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(i.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const _=e.get(u);(!_||_.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(d.buffer,u,h),d.version=u.version}}return{get:r,remove:a,update:c}}class rs extends zn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,c=t/2,u=Math.floor(n),h=Math.floor(r),d=u+1,_=h+1,g=e/u,x=t/h,S=[],E=[],b=[],v=[];for(let p=0;p<_;p++){const I=p*x-c;for(let P=0;P<d;P++){const N=P*g-a;E.push(N,-I,0),b.push(0,0,1),v.push(P/u),v.push(1-p/h)}}for(let p=0;p<h;p++)for(let I=0;I<u;I++){const P=I+d*p,N=I+d*(p+1),Z=I+1+d*(p+1),F=I+1+d*p;S.push(P,N,F),S.push(N,Z,F)}this.setIndex(S),this.setAttribute("position",new hn(E,3)),this.setAttribute("normal",new hn(b,3)),this.setAttribute("uv",new hn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rs(e.width,e.height,e.widthSegments,e.heightSegments)}}var ch=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_h=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ih=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",kh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,jh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$h=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ed=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,td=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ad=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,od=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,wd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ld=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ud=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$d=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,np=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ip=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Np=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:ch,alphahash_pars_fragment:uh,alphamap_fragment:fh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:gh,batching_pars_vertex:_h,batching_vertex:vh,begin_vertex:xh,beginnormal_vertex:Mh,bsdfs:yh,iridescence_fragment:Sh,bumpmap_pars_fragment:Eh,clipping_planes_fragment:Th,clipping_planes_pars_fragment:bh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:wh,color_fragment:Ch,color_pars_fragment:Rh,color_pars_vertex:Ph,color_vertex:Dh,common:Lh,cube_uv_reflection_fragment:Ih,defaultnormal_vertex:Nh,displacementmap_pars_vertex:Uh,displacementmap_vertex:Oh,emissivemap_fragment:Fh,emissivemap_pars_fragment:Bh,colorspace_fragment:zh,colorspace_pars_fragment:kh,envmap_fragment:Hh,envmap_common_pars_fragment:Vh,envmap_pars_fragment:Gh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:td,envmap_vertex:Xh,fog_vertex:jh,fog_pars_vertex:qh,fog_fragment:Yh,fog_pars_fragment:Kh,gradientmap_pars_fragment:$h,lightmap_pars_fragment:Zh,lights_lambert_fragment:Qh,lights_lambert_pars_fragment:Jh,lights_pars_begin:ed,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:rd,lights_phong_pars_fragment:sd,lights_physical_fragment:ad,lights_physical_pars_fragment:od,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:ud,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:vd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:Md,morphinstance_vertex:yd,morphcolor_vertex:Sd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:bd,normal_fragment_begin:Ad,normal_fragment_maps:wd,normal_pars_fragment:Cd,normal_pars_vertex:Rd,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Ld,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Nd,iridescence_pars_fragment:Ud,opaque_fragment:Od,packing:Fd,premultiplied_alpha_fragment:Bd,project_vertex:zd,dithering_fragment:kd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:jd,shadowmask_pars_fragment:qd,skinbase_vertex:Yd,skinning_pars_vertex:Kd,skinning_vertex:$d,skinnormal_vertex:Zd,specularmap_fragment:Qd,specularmap_pars_fragment:Jd,tonemapping_fragment:ep,tonemapping_pars_fragment:tp,transmission_fragment:np,transmission_pars_fragment:ip,uv_pars_fragment:rp,uv_pars_vertex:sp,uv_vertex:ap,worldpos_vertex:op,background_vert:lp,background_frag:cp,backgroundCube_vert:up,backgroundCube_frag:fp,cube_vert:hp,cube_frag:dp,depth_vert:pp,depth_frag:mp,distanceRGBA_vert:gp,distanceRGBA_frag:_p,equirect_vert:vp,equirect_frag:xp,linedashed_vert:Mp,linedashed_frag:yp,meshbasic_vert:Sp,meshbasic_frag:Ep,meshlambert_vert:Tp,meshlambert_frag:bp,meshmatcap_vert:Ap,meshmatcap_frag:wp,meshnormal_vert:Cp,meshnormal_frag:Rp,meshphong_vert:Pp,meshphong_frag:Dp,meshphysical_vert:Lp,meshphysical_frag:Ip,meshtoon_vert:Np,meshtoon_frag:Up,points_vert:Op,points_frag:Fp,shadow_vert:Bp,shadow_frag:zp,sprite_vert:kp,sprite_frag:Hp},Ae={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},ei={basic:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new _t(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Sn([Ae.points,Ae.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Sn([Ae.common,Ae.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Sn([Ae.sprite,Ae.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:Sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:Sn([Ae.lights,Ae.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};ei.physical={uniforms:Sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const ws={r:0,b:0,g:0},Gi=new ni,Vp=new zt;function Gp(i,e,t,n,r,a,c){const u=new _t(0);let h=a===!0?0:1,d,_,g=null,x=0,S=null;function E(I){let P=I.isScene===!0?I.background:null;return P&&P.isTexture&&(P=(I.backgroundBlurriness>0?t:e).get(P)),P}function b(I){let P=!1;const N=E(I);N===null?p(u,h):N&&N.isColor&&(p(N,1),P=!0);const Z=i.xr.getEnvironmentBlendMode();Z==="additive"?n.buffers.color.setClear(0,0,0,1,c):Z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(i.autoClear||P)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(I,P){const N=E(P);N&&(N.isCubeTexture||N.mapping===Qs)?(_===void 0&&(_=new Tn(new is(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:Ar(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(Z,F,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(_)),Gi.copy(P.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),_.material.uniforms.envMap.value=N,_.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Gi)),_.material.toneMapped=Nt.getTransfer(N.colorSpace)!==Xt,(g!==N||x!==N.version||S!==i.toneMapping)&&(_.material.needsUpdate=!0,g=N,x=N.version,S=i.toneMapping),_.layers.enableAll(),I.unshift(_,_.geometry,_.material,0,0,null)):N&&N.isTexture&&(d===void 0&&(d=new Tn(new rs(2,2),new ri({name:"BackgroundMaterial",uniforms:Ar(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=N,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Nt.getTransfer(N.colorSpace)!==Xt,N.matrixAutoUpdate===!0&&N.updateMatrix(),d.material.uniforms.uvTransform.value.copy(N.matrix),(g!==N||x!==N.version||S!==i.toneMapping)&&(d.material.needsUpdate=!0,g=N,x=N.version,S=i.toneMapping),d.layers.enableAll(),I.unshift(d,d.geometry,d.material,0,0,null))}function p(I,P){I.getRGB(ws,tu(i)),n.buffers.color.setClear(ws.r,ws.g,ws.b,P,c)}return{getClearColor:function(){return u},setClearColor:function(I,P=1){u.set(I),h=P,p(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,p(u,h)},render:b,addToRenderList:v}}function Wp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=x(null);let a=r,c=!1;function u(A,R,ae,W,re){let me=!1;const te=g(W,ae,R);a!==te&&(a=te,d(a.object)),me=S(A,W,ae,re),me&&E(A,W,ae,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,N(A,R,ae,W),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return i.createVertexArray()}function d(A){return i.bindVertexArray(A)}function _(A){return i.deleteVertexArray(A)}function g(A,R,ae){const W=ae.wireframe===!0;let re=n[A.id];re===void 0&&(re={},n[A.id]=re);let me=re[R.id];me===void 0&&(me={},re[R.id]=me);let te=me[W];return te===void 0&&(te=x(h()),me[W]=te),te}function x(A){const R=[],ae=[],W=[];for(let re=0;re<t;re++)R[re]=0,ae[re]=0,W[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:ae,attributeDivisors:W,object:A,attributes:{},index:null}}function S(A,R,ae,W){const re=a.attributes,me=R.attributes;let te=0;const de=ae.getAttributes();for(const ie in de)if(de[ie].location>=0){const Pe=re[ie];let Ue=me[ie];if(Ue===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(Ue=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(Ue=A.instanceColor)),Pe===void 0||Pe.attribute!==Ue||Ue&&Pe.data!==Ue.data)return!0;te++}return a.attributesNum!==te||a.index!==W}function E(A,R,ae,W){const re={},me=R.attributes;let te=0;const de=ae.getAttributes();for(const ie in de)if(de[ie].location>=0){let Pe=me[ie];Pe===void 0&&(ie==="instanceMatrix"&&A.instanceMatrix&&(Pe=A.instanceMatrix),ie==="instanceColor"&&A.instanceColor&&(Pe=A.instanceColor));const Ue={};Ue.attribute=Pe,Pe&&Pe.data&&(Ue.data=Pe.data),re[ie]=Ue,te++}a.attributes=re,a.attributesNum=te,a.index=W}function b(){const A=a.newAttributes;for(let R=0,ae=A.length;R<ae;R++)A[R]=0}function v(A){p(A,0)}function p(A,R){const ae=a.newAttributes,W=a.enabledAttributes,re=a.attributeDivisors;ae[A]=1,W[A]===0&&(i.enableVertexAttribArray(A),W[A]=1),re[A]!==R&&(i.vertexAttribDivisor(A,R),re[A]=R)}function I(){const A=a.newAttributes,R=a.enabledAttributes;for(let ae=0,W=R.length;ae<W;ae++)R[ae]!==A[ae]&&(i.disableVertexAttribArray(ae),R[ae]=0)}function P(A,R,ae,W,re,me,te){te===!0?i.vertexAttribIPointer(A,R,ae,re,me):i.vertexAttribPointer(A,R,ae,W,re,me)}function N(A,R,ae,W){b();const re=W.attributes,me=ae.getAttributes(),te=R.defaultAttributeValues;for(const de in me){const ie=me[de];if(ie.location>=0){let Se=re[de];if(Se===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(Se=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(Se=A.instanceColor)),Se!==void 0){const Pe=Se.normalized,Ue=Se.itemSize,at=e.get(Se);if(at===void 0)continue;const vt=at.buffer,ce=at.type,ve=at.bytesPerElement,Be=ce===i.INT||ce===i.UNSIGNED_INT||Se.gpuType===Yo;if(Se.isInterleavedBufferAttribute){const Ne=Se.data,tt=Ne.stride,je=Se.offset;if(Ne.isInstancedInterleavedBuffer){for(let it=0;it<ie.locationSize;it++)p(ie.location+it,Ne.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let it=0;it<ie.locationSize;it++)v(ie.location+it);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let it=0;it<ie.locationSize;it++)P(ie.location+it,Ue/ie.locationSize,ce,Pe,tt*ve,(je+Ue/ie.locationSize*it)*ve,Be)}else{if(Se.isInstancedBufferAttribute){for(let Ne=0;Ne<ie.locationSize;Ne++)p(ie.location+Ne,Se.meshPerAttribute);A.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ne=0;Ne<ie.locationSize;Ne++)v(ie.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,vt);for(let Ne=0;Ne<ie.locationSize;Ne++)P(ie.location+Ne,Ue/ie.locationSize,ce,Pe,Ue*ve,Ue/ie.locationSize*Ne*ve,Be)}}else if(te!==void 0){const Pe=te[de];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(ie.location,Pe);break;case 3:i.vertexAttrib3fv(ie.location,Pe);break;case 4:i.vertexAttrib4fv(ie.location,Pe);break;default:i.vertexAttrib1fv(ie.location,Pe)}}}}I()}function Z(){q();for(const A in n){const R=n[A];for(const ae in R){const W=R[ae];for(const re in W)_(W[re].object),delete W[re];delete R[ae]}delete n[A]}}function F(A){if(n[A.id]===void 0)return;const R=n[A.id];for(const ae in R){const W=R[ae];for(const re in W)_(W[re].object),delete W[re];delete R[ae]}delete n[A.id]}function l(A){for(const R in n){const ae=n[R];if(ae[A.id]===void 0)continue;const W=ae[A.id];for(const re in W)_(W[re].object),delete W[re];delete ae[A.id]}}function q(){le(),c=!0,a!==r&&(a=r,d(a.object))}function le(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:u,reset:q,resetDefaultState:le,dispose:Z,releaseStatesOfGeometry:F,releaseStatesOfProgram:l,initAttributes:b,enableAttribute:v,disableUnusedAttributes:I}}function Xp(i,e,t){let n;function r(d){n=d}function a(d,_){i.drawArrays(n,d,_),t.update(_,n,1)}function c(d,_,g){g!==0&&(i.drawArraysInstanced(n,d,_,g),t.update(_,n,g))}function u(d,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,d,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];t.update(S,n,1)}function h(d,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<d.length;E++)c(d[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(n,d,0,_,0,x,0,g);let E=0;for(let b=0;b<g;b++)E+=_[b];for(let b=0;b<x.length;b++)t.update(E,n,x[b])}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function jp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(l){return!(l!==qn&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(l){const q=l===wr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(l!==xi&&n.convert(l)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&l!==mi&&!q)}function h(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const _=h(d);_!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(x===!0){const l=e.get("EXT_clip_control");l.clipControlEXT(l.LOWER_LEFT_EXT,l.ZERO_TO_ONE_EXT)}const S=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),I=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Z=E>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:N,vertexTextures:Z,maxSamples:F}}function qp(i){const e=this;let t=null,n=0,r=!1,a=!1;const c=new Xi,u=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||n!==0||r;return r=x,n=g.length,S},this.beginShadows=function(){a=!0,_(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,x){t=_(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,b=g.clipIntersection,v=g.clipShadows,p=i.get(g);if(!r||E===null||E.length===0||a&&!v)a?_(null):d();else{const I=a?0:n,P=I*4;let N=p.clippingState||null;h.value=N,N=_(E,x,P,S);for(let Z=0;Z!==P;++Z)N[Z]=t[Z];p.clippingState=N,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=I}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function _(g,x,S,E){const b=g!==null?g.length:0;let v=null;if(b!==0){if(v=h.value,E!==!0||v===null){const p=S+b*4,I=x.matrixWorldInverse;u.getNormalMatrix(I),(v===null||v.length<p)&&(v=new Float32Array(p));for(let P=0,N=S;P!==b;++P,N+=4)c.copy(g[P]).applyMatrix4(I,u),c.normal.toArray(v,N),v[N+3]=c.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,v}}function Yp(i){let e=new WeakMap;function t(c,u){return u===fo?c.mapping=Sr:u===ho&&(c.mapping=Er),c}function n(c){if(c&&c.isTexture){const u=c.mapping;if(u===fo||u===ho)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const d=new sh(h.height);return d.fromEquirectangularTexture(i,c),e.set(c,d),c.addEventListener("dispose",r),t(d.texture,c.mapping)}else return null}}return c}function r(c){const u=c.target;u.removeEventListener("dispose",r);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class ta extends iu{constructor(e=-1,t=1,n=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,c=n+e,u=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,u-=_*this.view.offsetY,h=u-_*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const _r=4,Gl=[.125,.215,.35,.446,.526,.582],Ki=20,Ga=new ta,Wl=new _t;let Wa=null,Xa=0,ja=0,qa=!1;const ji=(1+Math.sqrt(5))/2,pr=1/ji,Xl=[new j(-ji,pr,0),new j(ji,pr,0),new j(-pr,0,ji),new j(pr,0,ji),new j(0,ji,-pr),new j(0,ji,pr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wa,Xa,ja),this._renderer.xr.enabled=qa,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),qa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:wr,format:qn,colorSpace:Ni,depthBuffer:!1},r=ql(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kp(a)),this._blurMaterial=$p(a,e,t)}return r}_compileMaterial(e){const t=new Tn(this._lodPlanes[0],e);this._renderer.compile(t,Ga)}_sceneToCubeUV(e,t,n,r){const u=new In(90,1,t,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Wl),_.toneMapping=Ii,_.autoClear=!1;const S=new Yi({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),E=new Tn(new is,S);let b=!1;const v=e.background;v?v.isColor&&(S.color.copy(v),e.background=null,b=!0):(S.color.copy(Wl),b=!0);for(let p=0;p<6;p++){const I=p%3;I===0?(u.up.set(0,h[p],0),u.lookAt(d[p],0,0)):I===1?(u.up.set(0,0,h[p]),u.lookAt(0,d[p],0)):(u.up.set(0,h[p],0),u.lookAt(0,0,d[p]));const P=this._cubeSize;Cs(r,I*P,p>2?P:0,P,P),_.setRenderTarget(r),b&&_.render(E,u),_.render(e,u)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=g,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Sr||e.mapping===Er;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const a=r?this._cubemapMaterial:this._equirectMaterial,c=new Tn(this._lodPlanes[0],a),u=a.uniforms;u.envMap.value=e;const h=this._cubeSize;Cs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(c,Ga)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const c=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),u=Xl[(r-a-1)%Xl.length];this._blur(e,a-1,a,c,u)}t.autoClear=n}_blur(e,t,n,r,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,n,r,"latitudinal",a),this._halfBlur(c,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new Tn(this._lodPlanes[r],d),x=d.uniforms,S=this._sizeLods[n]-1,E=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*Ki-1),b=a/E,v=isFinite(a)?1+Math.floor(_*b):Ki;v>Ki&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ki}`);const p=[];let I=0;for(let l=0;l<Ki;++l){const q=l/b,le=Math.exp(-q*q/2);p.push(le),l===0?I+=le:l<v&&(I+=2*le)}for(let l=0;l<p.length;l++)p[l]=p[l]/I;x.envMap.value=e.texture,x.samples.value=v,x.weights.value=p,x.latitudinal.value=c==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:P}=this;x.dTheta.value=E,x.mipInt.value=P-n;const N=this._sizeLods[r],Z=3*N*(r>P-_r?r-P+_r:0),F=4*(this._cubeSize-N);Cs(t,Z,F,3*N,2*N),h.setRenderTarget(t),h.render(g,Ga)}}function Kp(i){const e=[],t=[],n=[];let r=i;const a=i-_r+1+Gl.length;for(let c=0;c<a;c++){const u=Math.pow(2,r);t.push(u);let h=1/u;c>i-_r?h=Gl[c-i+_r-1]:c===0&&(h=0),n.push(h);const d=1/(u-2),_=-d,g=1+d,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,b=3,v=2,p=1,I=new Float32Array(b*E*S),P=new Float32Array(v*E*S),N=new Float32Array(p*E*S);for(let F=0;F<S;F++){const l=F%3*2/3-1,q=F>2?0:-1,le=[l,q,0,l+2/3,q,0,l+2/3,q+1,0,l,q,0,l+2/3,q+1,0,l,q+1,0];I.set(le,b*E*F),P.set(x,v*E*F);const A=[F,F,F,F,F,F];N.set(A,p*E*F)}const Z=new zn;Z.setAttribute("position",new ti(I,b)),Z.setAttribute("uv",new ti(P,v)),Z.setAttribute("faceIndex",new ti(N,p)),e.push(Z),r>_r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ql(i,e,t){const n=new Mi(i,e,t);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cs(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function $p(i,e,t){const n=new Float32Array(Ki),r=new j(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Yl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Kl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function rl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Zp(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const h=u.mapping,d=h===fo||h===ho,_=h===Sr||h===Er;if(d||_){let g=e.get(u);const x=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new jl(i)),g=d?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const S=u.image;return d&&S&&S.height>0||_&&S&&r(S)?(t===null&&(t=new jl(i)),g=d?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",a),g.texture):null}}}return u}function r(u){let h=0;const d=6;for(let _=0;_<d;_++)u[_]!==void 0&&h++;return h===d}function a(u){const h=u.target;h.removeEventListener("dispose",a);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:c}}function Qp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ks("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Jp(i,e,t,n){const r={},a=new WeakMap;function c(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);for(const E in x.morphAttributes){const b=x.morphAttributes[E];for(let v=0,p=b.length;v<p;v++)e.remove(b[v])}x.removeEventListener("dispose",c),delete r[x.id];const S=a.get(x);S&&(e.remove(S),a.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(g,x){return r[x.id]===!0||(x.addEventListener("dispose",c),r[x.id]=!0,t.memory.geometries++),x}function h(g){const x=g.attributes;for(const E in x)e.update(x[E],i.ARRAY_BUFFER);const S=g.morphAttributes;for(const E in S){const b=S[E];for(let v=0,p=b.length;v<p;v++)e.update(b[v],i.ARRAY_BUFFER)}}function d(g){const x=[],S=g.index,E=g.attributes.position;let b=0;if(S!==null){const I=S.array;b=S.version;for(let P=0,N=I.length;P<N;P+=3){const Z=I[P+0],F=I[P+1],l=I[P+2];x.push(Z,F,F,l,l,Z)}}else if(E!==void 0){const I=E.array;b=E.version;for(let P=0,N=I.length/3-1;P<N;P+=3){const Z=P+0,F=P+1,l=P+2;x.push(Z,F,F,l,l,Z)}}else return;const v=new(Kc(x)?eu:Jc)(x,1);v.version=b;const p=a.get(g);p&&e.remove(p),a.set(g,v)}function _(g){const x=a.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&d(g)}else d(g);return a.get(g)}return{get:u,update:h,getWireframeAttribute:_}}function em(i,e,t){let n;function r(x){n=x}let a,c;function u(x){a=x.type,c=x.bytesPerElement}function h(x,S){i.drawElements(n,S,a,x*c),t.update(S,n,1)}function d(x,S,E){E!==0&&(i.drawElementsInstanced(n,S,a,x*c,E),t.update(S,n,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,S,0,a,x,0,E);let v=0;for(let p=0;p<E;p++)v+=S[p];t.update(v,n,1)}function g(x,S,E,b){if(E===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<x.length;p++)d(x[p]/c,S[p],b[p]);else{v.multiDrawElementsInstancedWEBGL(n,S,0,a,x,0,b,0,E);let p=0;for(let I=0;I<E;I++)p+=S[I];for(let I=0;I<b.length;I++)t.update(p,n,b[I])}}this.setMode=r,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function tm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,c,u){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=u*(a/3);break;case i.LINES:t.lines+=u*(a/2);break;case i.LINE_STRIP:t.lines+=u*(a-1);break;case i.LINE_LOOP:t.lines+=u*a;break;case i.POINTS:t.points+=u*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nm(i,e,t){const n=new WeakMap,r=new Bt;function a(c,u,h){const d=c.morphTargetInfluences,_=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let x=n.get(u);if(x===void 0||x.count!==g){let A=function(){q.dispose(),n.delete(u),u.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const E=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,v=u.morphAttributes.color!==void 0,p=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let N=0;E===!0&&(N=1),b===!0&&(N=2),v===!0&&(N=3);let Z=u.attributes.position.count*N,F=1;Z>e.maxTextureSize&&(F=Math.ceil(Z/e.maxTextureSize),Z=e.maxTextureSize);const l=new Float32Array(Z*F*4*g),q=new Zc(l,Z,F,g);q.type=mi,q.needsUpdate=!0;const le=N*4;for(let R=0;R<g;R++){const ae=p[R],W=I[R],re=P[R],me=Z*F*4*R;for(let te=0;te<ae.count;te++){const de=te*le;E===!0&&(r.fromBufferAttribute(ae,te),l[me+de+0]=r.x,l[me+de+1]=r.y,l[me+de+2]=r.z,l[me+de+3]=0),b===!0&&(r.fromBufferAttribute(W,te),l[me+de+4]=r.x,l[me+de+5]=r.y,l[me+de+6]=r.z,l[me+de+7]=0),v===!0&&(r.fromBufferAttribute(re,te),l[me+de+8]=r.x,l[me+de+9]=r.y,l[me+de+10]=r.z,l[me+de+11]=re.itemSize===4?r.w:1)}}x={count:g,texture:q,size:new Et(Z,F)},n.set(u,x),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let v=0;v<d.length;v++)E+=d[v];const b=u.morphTargetsRelative?1:1-E;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",d)}h.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:a}}function im(i,e,t,n){let r=new WeakMap;function a(h){const d=n.render.frame,_=h.geometry,g=e.get(h,_);if(r.get(g)!==d&&(e.update(g),r.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),r.get(h)!==d&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),r.set(h,d))),h.isSkinnedMesh){const x=h.skeleton;r.get(x)!==d&&(x.update(),r.set(x,d))}return g}function c(){r=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:c}}class au extends sn{constructor(e,t,n,r,a,c,u,h,d,_=xr){if(_!==xr&&_!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&_===xr&&(n=Qi),n===void 0&&_===br&&(n=Tr),super(null,r,a,c,u,h,_,n,d),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Bn,this.minFilter=h!==void 0?h:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ou=new sn,$l=new au(1,1),lu=new Zc,cu=new Wf,uu=new ru,Zl=[],Ql=[],Jl=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function Pr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Zl[r];if(a===void 0&&(a=new Float32Array(r),Zl[r]=a),e!==0){n.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,i[c].toArray(a,u)}return a}function an(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function on(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function na(i,e){let t=Ql[e];t===void 0&&(t=new Int32Array(e),Ql[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2fv(this.addr,e),on(t,e)}}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;i.uniform3fv(this.addr,e),on(t,e)}}function om(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4fv(this.addr,e),on(t,e)}}function lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;tc.set(n),i.uniformMatrix2fv(this.addr,!1,tc),on(t,n)}}function cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;ec.set(n),i.uniformMatrix3fv(this.addr,!1,ec),on(t,n)}}function um(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Jl.set(n),i.uniformMatrix4fv(this.addr,!1,Jl),on(t,n)}}function fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2iv(this.addr,e),on(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3iv(this.addr,e),on(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4iv(this.addr,e),on(t,e)}}function mm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;i.uniform2uiv(this.addr,e),on(t,e)}}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;i.uniform3uiv(this.addr,e),on(t,e)}}function vm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;i.uniform4uiv(this.addr,e),on(t,e)}}function xm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?($l.compareFunction=Yc,a=$l):a=ou,t.setTexture2D(e||a,r)}function Mm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cu,r)}function ym(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||uu,r)}function Sm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||lu,r)}function Em(i){switch(i){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return Sm}}function Tm(i,e){i.uniform1fv(this.addr,e)}function bm(i,e){const t=Pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Am(i,e){const t=Pr(e,this.size,3);i.uniform3fv(this.addr,t)}function wm(i,e){const t=Pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Cm(i,e){const t=Pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rm(i,e){const t=Pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pm(i,e){const t=Pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Dm(i,e){i.uniform1iv(this.addr,e)}function Lm(i,e){i.uniform2iv(this.addr,e)}function Im(i,e){i.uniform3iv(this.addr,e)}function Nm(i,e){i.uniform4iv(this.addr,e)}function Um(i,e){i.uniform1uiv(this.addr,e)}function Om(i,e){i.uniform2uiv(this.addr,e)}function Fm(i,e){i.uniform3uiv(this.addr,e)}function Bm(i,e){i.uniform4uiv(this.addr,e)}function zm(i,e,t){const n=this.cache,r=e.length,a=na(t,r);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let c=0;c!==r;++c)t.setTexture2D(e[c]||ou,a[c])}function km(i,e,t){const n=this.cache,r=e.length,a=na(t,r);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let c=0;c!==r;++c)t.setTexture3D(e[c]||cu,a[c])}function Hm(i,e,t){const n=this.cache,r=e.length,a=na(t,r);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let c=0;c!==r;++c)t.setTextureCube(e[c]||uu,a[c])}function Vm(i,e,t){const n=this.cache,r=e.length,a=na(t,r);an(n,a)||(i.uniform1iv(this.addr,a),on(n,a));for(let c=0;c!==r;++c)t.setTexture2DArray(e[c]||lu,a[c])}function Gm(i){switch(i){case 5126:return Tm;case 35664:return bm;case 35665:return Am;case 35666:return wm;case 35674:return Cm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Dm;case 35667:case 35671:return Lm;case 35668:case 35672:return Im;case 35669:case 35673:return Nm;case 5125:return Um;case 36294:return Om;case 36295:return Fm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Vm}}class Wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Em(t.type)}}class Xm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gm(t.type)}}class jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const u=r[a];u.setValue(e,t[u.id],n)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function nc(i,e){i.seq.push(e),i.map[e.id]=e}function qm(i,e,t){const n=i.name,r=n.length;for(Ya.lastIndex=0;;){const a=Ya.exec(n),c=Ya.lastIndex;let u=a[1];const h=a[2]==="]",d=a[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===r){nc(t,d===void 0?new Wm(u,i,e):new Xm(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new jm(u),nc(t,g)),t=g}}}class Hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),c=e.getUniformLocation(t,a.name);qm(a,c,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,c=t.length;a!==c;++a){const u=t[a],h=n[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const c=e[r];c.id in t&&n.push(c)}return n}}function ic(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ym=37297;let Km=0;function $m(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=r;c<a;c++){const u=c+1;n.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return n.join(`
`)}function Zm(i){const e=Nt.getPrimaries(Nt.workingColorSpace),t=Nt.getPrimaries(i);let n;switch(e===t?n="":e===qs&&t===js?n="LinearDisplayP3ToLinearSRGB":e===js&&t===qs&&(n="LinearSRGBToLinearDisplayP3"),i){case Ni:case Js:return[n,"LinearTransferOETF"];case En:case tl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function rc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const c=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+$m(i.getShaderSource(e),c)}else return r}function Qm(i,e){const t=Zm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jm(i,e){let t;switch(e){case gf:t="Linear";break;case _f:t="Reinhard";break;case vf:t="Cineon";break;case xf:t="ACESFilmic";break;case yf:t="AgX";break;case Sf:t="Neutral";break;case Mf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rs=new j;function eg(){Nt.getLuminanceCoefficients(Rs);const i=Rs.x.toFixed(4),e=Rs.y.toFixed(4),t=Rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function ng(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ig(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),c=a.name;let u=1;a.type===i.FLOAT_MAT2&&(u=2),a.type===i.FLOAT_MAT3&&(u=3),a.type===i.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:i.getAttribLocation(e,c),locationSize:u}}return t}function Yr(i){return i!==""}function sc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vo(i){return i.replace(rg,ag)}const sg=new Map;function ag(i,e){let t=mt[e];if(t===void 0){const n=sg.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vo(t)}const og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(i){return i.replace(og,lg)}function lg(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function lc(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function ug(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Sr:case Er:e="ENVMAP_TYPE_CUBE";break;case Qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Er:e="ENVMAP_MODE_REFRACTION";break}return e}function hg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case pf:e="ENVMAP_BLENDING_MIX";break;case mf:e="ENVMAP_BLENDING_ADD";break}return e}function dg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function pg(i,e,t,n){const r=i.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=cg(t),d=ug(t),_=fg(t),g=hg(t),x=dg(t),S=tg(t),E=ng(a),b=r.createProgram();let v,p,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yr).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(v=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+_:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ii?"#define TONE_MAPPING":"",t.toneMapping!==Ii?mt.tonemapping_pars_fragment:"",t.toneMapping!==Ii?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Qm("linearToOutputTexel",t.outputColorSpace),eg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),c=Vo(c),c=sc(c,t),c=ac(c,t),u=Vo(u),u=sc(u,t),u=ac(u,t),c=oc(c),u=oc(u),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,v=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const P=I+v+c,N=I+p+u,Z=ic(r,r.VERTEX_SHADER,P),F=ic(r,r.FRAGMENT_SHADER,N);r.attachShader(b,Z),r.attachShader(b,F),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function l(R){if(i.debug.checkShaderErrors){const ae=r.getProgramInfoLog(b).trim(),W=r.getShaderInfoLog(Z).trim(),re=r.getShaderInfoLog(F).trim();let me=!0,te=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(me=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,Z,F);else{const de=rc(r,Z,"vertex"),ie=rc(r,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+ae+`
`+de+`
`+ie)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(W===""||re==="")&&(te=!1);te&&(R.diagnostics={runnable:me,programLog:ae,vertexShader:{log:W,prefix:v},fragmentShader:{log:re,prefix:p}})}r.deleteShader(Z),r.deleteShader(F),q=new Hs(r,b),le=ig(r,b)}let q;this.getUniforms=function(){return q===void 0&&l(this),q};let le;this.getAttributes=function(){return le===void 0&&l(this),le};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(b,Ym)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Km++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=Z,this.fragmentShader=F,this}let mg=0;class gg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),c=this._getShaderCacheForMaterial(e);return c.has(r)===!1&&(c.add(r),r.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _g(e),t.set(e,n)),n}}class _g{constructor(e){this.id=mg++,this.code=e,this.usedTimes=0}}function vg(i,e,t,n,r,a,c){const u=new nl,h=new gg,d=new Set,_=[],g=r.logarithmicDepthBuffer,x=r.reverseDepthBuffer,S=r.vertexTextures;let E=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(A){return d.add(A),A===0?"uv":`uv${A}`}function p(A,R,ae,W,re){const me=W.fog,te=re.geometry,de=A.isMeshStandardMaterial?W.environment:null,ie=(A.isMeshStandardMaterial?t:e).get(A.envMap||de),Se=ie&&ie.mapping===Qs?ie.image.height:null,Pe=b[A.type];A.precision!==null&&(E=r.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const Ue=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,at=Ue!==void 0?Ue.length:0;let vt=0;te.morphAttributes.position!==void 0&&(vt=1),te.morphAttributes.normal!==void 0&&(vt=2),te.morphAttributes.color!==void 0&&(vt=3);let ce,ve,Be,Ne;if(Pe){const tn=ei[Pe];ce=tn.vertexShader,ve=tn.fragmentShader}else ce=A.vertexShader,ve=A.fragmentShader,h.update(A),Be=h.getVertexShaderID(A),Ne=h.getFragmentShaderID(A);const tt=i.getRenderTarget(),je=re.isInstancedMesh===!0,it=re.isBatchedMesh===!0,Rt=!!A.map,ct=!!A.matcap,B=!!ie,en=!!A.aoMap,ht=!!A.lightMap,qe=!!A.bumpMap,Ye=!!A.normalMap,dt=!!A.displacementMap,Ke=!!A.emissiveMap,L=!!A.metalnessMap,w=!!A.roughnessMap,Y=A.anisotropy>0,he=A.clearcoat>0,ge=A.dispersion>0,X=A.iridescence>0,we=A.sheen>0,Te=A.transmission>0,Oe=Y&&!!A.anisotropyMap,Tt=he&&!!A.clearcoatMap,xe=he&&!!A.clearcoatNormalMap,Fe=he&&!!A.clearcoatRoughnessMap,$e=X&&!!A.iridescenceMap,We=X&&!!A.iridescenceThicknessMap,Ce=we&&!!A.sheenColorMap,ut=we&&!!A.sheenRoughnessMap,rt=!!A.specularMap,Pt=!!A.specularColorMap,k=!!A.specularIntensityMap,Re=Te&&!!A.transmissionMap,se=Te&&!!A.thicknessMap,pe=!!A.gradientMap,Ee=!!A.alphaMap,De=A.alphaTest>0,xt=!!A.alphaHash,bt=!!A.extensions;let Ut=Ii;A.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ut=i.toneMapping);const Mt={shaderID:Pe,shaderType:A.type,shaderName:A.name,vertexShader:ce,fragmentShader:ve,defines:A.defines,customVertexShaderID:Be,customFragmentShaderID:Ne,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:it,batchingColor:it&&re._colorsTexture!==null,instancing:je,instancingColor:je&&re.instanceColor!==null,instancingMorph:je&&re.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Ni,alphaToCoverage:!!A.alphaToCoverage,map:Rt,matcap:ct,envMap:B,envMapMode:B&&ie.mapping,envMapCubeUVHeight:Se,aoMap:en,lightMap:ht,bumpMap:qe,normalMap:Ye,displacementMap:S&&dt,emissiveMap:Ke,normalMapObjectSpace:Ye&&A.normalMapType===Af,normalMapTangentSpace:Ye&&A.normalMapType===el,metalnessMap:L,roughnessMap:w,anisotropy:Y,anisotropyMap:Oe,clearcoat:he,clearcoatMap:Tt,clearcoatNormalMap:xe,clearcoatRoughnessMap:Fe,dispersion:ge,iridescence:X,iridescenceMap:$e,iridescenceThicknessMap:We,sheen:we,sheenColorMap:Ce,sheenRoughnessMap:ut,specularMap:rt,specularColorMap:Pt,specularIntensityMap:k,transmission:Te,transmissionMap:Re,thicknessMap:se,gradientMap:pe,opaque:A.transparent===!1&&A.blending===vr&&A.alphaToCoverage===!1,alphaMap:Ee,alphaTest:De,alphaHash:xt,combine:A.combine,mapUv:Rt&&v(A.map.channel),aoMapUv:en&&v(A.aoMap.channel),lightMapUv:ht&&v(A.lightMap.channel),bumpMapUv:qe&&v(A.bumpMap.channel),normalMapUv:Ye&&v(A.normalMap.channel),displacementMapUv:dt&&v(A.displacementMap.channel),emissiveMapUv:Ke&&v(A.emissiveMap.channel),metalnessMapUv:L&&v(A.metalnessMap.channel),roughnessMapUv:w&&v(A.roughnessMap.channel),anisotropyMapUv:Oe&&v(A.anisotropyMap.channel),clearcoatMapUv:Tt&&v(A.clearcoatMap.channel),clearcoatNormalMapUv:xe&&v(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(A.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&v(A.iridescenceMap.channel),iridescenceThicknessMapUv:We&&v(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&v(A.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(A.sheenRoughnessMap.channel),specularMapUv:rt&&v(A.specularMap.channel),specularColorMapUv:Pt&&v(A.specularColorMap.channel),specularIntensityMapUv:k&&v(A.specularIntensityMap.channel),transmissionMapUv:Re&&v(A.transmissionMap.channel),thicknessMapUv:se&&v(A.thicknessMap.channel),alphaMapUv:Ee&&v(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Ye||Y),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!te.attributes.uv&&(Rt||Ee),fog:!!me,useFog:A.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:x,skinning:re.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:vt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:A.dithering,shadowMapEnabled:i.shadowMap.enabled&&ae.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&A.map.isVideoTexture===!0&&Nt.getTransfer(A.map.colorSpace)===Xt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===pi,flipSided:A.side===Pn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:bt&&A.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&A.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Mt.vertexUv1s=d.has(1),Mt.vertexUv2s=d.has(2),Mt.vertexUv3s=d.has(3),d.clear(),Mt}function I(A){const R=[];if(A.shaderID?R.push(A.shaderID):(R.push(A.customVertexShaderID),R.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ae in A.defines)R.push(ae),R.push(A.defines[ae]);return A.isRawShaderMaterial===!1&&(P(R,A),N(R,A),R.push(i.outputColorSpace)),R.push(A.customProgramCacheKey),R.join()}function P(A,R){A.push(R.precision),A.push(R.outputColorSpace),A.push(R.envMapMode),A.push(R.envMapCubeUVHeight),A.push(R.mapUv),A.push(R.alphaMapUv),A.push(R.lightMapUv),A.push(R.aoMapUv),A.push(R.bumpMapUv),A.push(R.normalMapUv),A.push(R.displacementMapUv),A.push(R.emissiveMapUv),A.push(R.metalnessMapUv),A.push(R.roughnessMapUv),A.push(R.anisotropyMapUv),A.push(R.clearcoatMapUv),A.push(R.clearcoatNormalMapUv),A.push(R.clearcoatRoughnessMapUv),A.push(R.iridescenceMapUv),A.push(R.iridescenceThicknessMapUv),A.push(R.sheenColorMapUv),A.push(R.sheenRoughnessMapUv),A.push(R.specularMapUv),A.push(R.specularColorMapUv),A.push(R.specularIntensityMapUv),A.push(R.transmissionMapUv),A.push(R.thicknessMapUv),A.push(R.combine),A.push(R.fogExp2),A.push(R.sizeAttenuation),A.push(R.morphTargetsCount),A.push(R.morphAttributeCount),A.push(R.numDirLights),A.push(R.numPointLights),A.push(R.numSpotLights),A.push(R.numSpotLightMaps),A.push(R.numHemiLights),A.push(R.numRectAreaLights),A.push(R.numDirLightShadows),A.push(R.numPointLightShadows),A.push(R.numSpotLightShadows),A.push(R.numSpotLightShadowsWithMaps),A.push(R.numLightProbes),A.push(R.shadowMapType),A.push(R.toneMapping),A.push(R.numClippingPlanes),A.push(R.numClipIntersection),A.push(R.depthPacking)}function N(A,R){u.disableAll(),R.supportsVertexTextures&&u.enable(0),R.instancing&&u.enable(1),R.instancingColor&&u.enable(2),R.instancingMorph&&u.enable(3),R.matcap&&u.enable(4),R.envMap&&u.enable(5),R.normalMapObjectSpace&&u.enable(6),R.normalMapTangentSpace&&u.enable(7),R.clearcoat&&u.enable(8),R.iridescence&&u.enable(9),R.alphaTest&&u.enable(10),R.vertexColors&&u.enable(11),R.vertexAlphas&&u.enable(12),R.vertexUv1s&&u.enable(13),R.vertexUv2s&&u.enable(14),R.vertexUv3s&&u.enable(15),R.vertexTangents&&u.enable(16),R.anisotropy&&u.enable(17),R.alphaHash&&u.enable(18),R.batching&&u.enable(19),R.dispersion&&u.enable(20),R.batchingColor&&u.enable(21),A.push(u.mask),u.disableAll(),R.fog&&u.enable(0),R.useFog&&u.enable(1),R.flatShading&&u.enable(2),R.logarithmicDepthBuffer&&u.enable(3),R.reverseDepthBuffer&&u.enable(4),R.skinning&&u.enable(5),R.morphTargets&&u.enable(6),R.morphNormals&&u.enable(7),R.morphColors&&u.enable(8),R.premultipliedAlpha&&u.enable(9),R.shadowMapEnabled&&u.enable(10),R.doubleSided&&u.enable(11),R.flipSided&&u.enable(12),R.useDepthPacking&&u.enable(13),R.dithering&&u.enable(14),R.transmission&&u.enable(15),R.sheen&&u.enable(16),R.opaque&&u.enable(17),R.pointsUvs&&u.enable(18),R.decodeVideoTexture&&u.enable(19),R.alphaToCoverage&&u.enable(20),A.push(u.mask)}function Z(A){const R=b[A.type];let ae;if(R){const W=ei[R];ae=nu.clone(W.uniforms)}else ae=A.uniforms;return ae}function F(A,R){let ae;for(let W=0,re=_.length;W<re;W++){const me=_[W];if(me.cacheKey===R){ae=me,++ae.usedTimes;break}}return ae===void 0&&(ae=new pg(i,R,A,a),_.push(ae)),ae}function l(A){if(--A.usedTimes===0){const R=_.indexOf(A);_[R]=_[_.length-1],_.pop(),A.destroy()}}function q(A){h.remove(A)}function le(){h.dispose()}return{getParameters:p,getProgramCacheKey:I,getUniforms:Z,acquireProgram:F,releaseProgram:l,releaseShaderCache:q,programs:_,dispose:le}}function xg(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let u=i.get(c);return u===void 0&&(u={},i.set(c,u)),u}function n(c){i.delete(c)}function r(c,u,h){i.get(c)[u]=h}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function uc(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function c(g,x,S,E,b,v){let p=i[e];return p===void 0?(p={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:b,group:v},i[e]=p):(p.id=g.id,p.object=g,p.geometry=x,p.material=S,p.groupOrder=E,p.renderOrder=g.renderOrder,p.z=b,p.group=v),e++,p}function u(g,x,S,E,b,v){const p=c(g,x,S,E,b,v);S.transmission>0?n.push(p):S.transparent===!0?r.push(p):t.push(p)}function h(g,x,S,E,b,v){const p=c(g,x,S,E,b,v);S.transmission>0?n.unshift(p):S.transparent===!0?r.unshift(p):t.unshift(p)}function d(g,x){t.length>1&&t.sort(g||Mg),n.length>1&&n.sort(x||cc),r.length>1&&r.sort(x||cc)}function _(){for(let g=e,x=i.length;g<x;g++){const S=i[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:u,unshift:h,finish:_,sort:d}}function yg(){let i=new WeakMap;function e(n,r){const a=i.get(n);let c;return a===void 0?(c=new uc,i.set(n,[c])):r>=a.length?(c=new uc,a.push(c)):c=a[r],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new _t};break;case"SpotLight":t={position:new j,direction:new j,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function Eg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Tg=0;function bg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ag(i){const e=new Sg,t=Eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)n.probe.push(new j);const r=new j,a=new zt,c=new zt;function u(d){let _=0,g=0,x=0;for(let le=0;le<9;le++)n.probe[le].set(0,0,0);let S=0,E=0,b=0,v=0,p=0,I=0,P=0,N=0,Z=0,F=0,l=0;d.sort(bg);for(let le=0,A=d.length;le<A;le++){const R=d[le],ae=R.color,W=R.intensity,re=R.distance,me=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)_+=ae.r*W,g+=ae.g*W,x+=ae.b*W;else if(R.isLightProbe){for(let te=0;te<9;te++)n.probe[te].addScaledVector(R.sh.coefficients[te],W);l++}else if(R.isDirectionalLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const de=R.shadow,ie=t.get(R);ie.shadowIntensity=de.intensity,ie.shadowBias=de.bias,ie.shadowNormalBias=de.normalBias,ie.shadowRadius=de.radius,ie.shadowMapSize=de.mapSize,n.directionalShadow[S]=ie,n.directionalShadowMap[S]=me,n.directionalShadowMatrix[S]=R.shadow.matrix,I++}n.directional[S]=te,S++}else if(R.isSpotLight){const te=e.get(R);te.position.setFromMatrixPosition(R.matrixWorld),te.color.copy(ae).multiplyScalar(W),te.distance=re,te.coneCos=Math.cos(R.angle),te.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),te.decay=R.decay,n.spot[b]=te;const de=R.shadow;if(R.map&&(n.spotLightMap[Z]=R.map,Z++,de.updateMatrices(R),R.castShadow&&F++),n.spotLightMatrix[b]=de.matrix,R.castShadow){const ie=t.get(R);ie.shadowIntensity=de.intensity,ie.shadowBias=de.bias,ie.shadowNormalBias=de.normalBias,ie.shadowRadius=de.radius,ie.shadowMapSize=de.mapSize,n.spotShadow[b]=ie,n.spotShadowMap[b]=me,N++}b++}else if(R.isRectAreaLight){const te=e.get(R);te.color.copy(ae).multiplyScalar(W),te.halfWidth.set(R.width*.5,0,0),te.halfHeight.set(0,R.height*.5,0),n.rectArea[v]=te,v++}else if(R.isPointLight){const te=e.get(R);if(te.color.copy(R.color).multiplyScalar(R.intensity),te.distance=R.distance,te.decay=R.decay,R.castShadow){const de=R.shadow,ie=t.get(R);ie.shadowIntensity=de.intensity,ie.shadowBias=de.bias,ie.shadowNormalBias=de.normalBias,ie.shadowRadius=de.radius,ie.shadowMapSize=de.mapSize,ie.shadowCameraNear=de.camera.near,ie.shadowCameraFar=de.camera.far,n.pointShadow[E]=ie,n.pointShadowMap[E]=me,n.pointShadowMatrix[E]=R.shadow.matrix,P++}n.point[E]=te,E++}else if(R.isHemisphereLight){const te=e.get(R);te.skyColor.copy(R.color).multiplyScalar(W),te.groundColor.copy(R.groundColor).multiplyScalar(W),n.hemi[p]=te,p++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=_,n.ambient[1]=g,n.ambient[2]=x;const q=n.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==b||q.rectAreaLength!==v||q.hemiLength!==p||q.numDirectionalShadows!==I||q.numPointShadows!==P||q.numSpotShadows!==N||q.numSpotMaps!==Z||q.numLightProbes!==l)&&(n.directional.length=S,n.spot.length=b,n.rectArea.length=v,n.point.length=E,n.hemi.length=p,n.directionalShadow.length=I,n.directionalShadowMap.length=I,n.pointShadow.length=P,n.pointShadowMap.length=P,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=I,n.pointShadowMatrix.length=P,n.spotLightMatrix.length=N+Z-F,n.spotLightMap.length=Z,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=l,q.directionalLength=S,q.pointLength=E,q.spotLength=b,q.rectAreaLength=v,q.hemiLength=p,q.numDirectionalShadows=I,q.numPointShadows=P,q.numSpotShadows=N,q.numSpotMaps=Z,q.numLightProbes=l,n.version=Tg++)}function h(d,_){let g=0,x=0,S=0,E=0,b=0;const v=_.matrixWorldInverse;for(let p=0,I=d.length;p<I;p++){const P=d[p];if(P.isDirectionalLight){const N=n.directional[g];N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(v),g++}else if(P.isSpotLight){const N=n.spot[S];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),N.direction.setFromMatrixPosition(P.matrixWorld),r.setFromMatrixPosition(P.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(v),S++}else if(P.isRectAreaLight){const N=n.rectArea[E];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),c.identity(),a.copy(P.matrixWorld),a.premultiply(v),c.extractRotation(a),N.halfWidth.set(P.width*.5,0,0),N.halfHeight.set(0,P.height*.5,0),N.halfWidth.applyMatrix4(c),N.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const N=n.point[x];N.position.setFromMatrixPosition(P.matrixWorld),N.position.applyMatrix4(v),x++}else if(P.isHemisphereLight){const N=n.hemi[b];N.direction.setFromMatrixPosition(P.matrixWorld),N.direction.transformDirection(v),b++}}}return{setup:u,setupView:h,state:n}}function fc(i){const e=new Ag(i),t=[],n=[];function r(_){d.camera=_,t.length=0,n.length=0}function a(_){t.push(_)}function c(_){n.push(_)}function u(){e.setup(t)}function h(_){e.setupView(t,_)}const d={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:d,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function wg(i){let e=new WeakMap;function t(r,a=0){const c=e.get(r);let u;return c===void 0?(u=new fc(i),e.set(r,[u])):a>=c.length?(u=new fc(i),c.push(u)):u=c[a],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class Cg extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rg extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lg(i,e,t){let n=new il;const r=new Et,a=new Et,c=new Bt,u=new Cg({depthPacking:bf}),h=new Rg,d={},_=t.maxTextureSize,g={[vi]:Pn,[Pn]:vi,[pi]:pi},x=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:Pg,fragmentShader:Dg}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new zn;E.setAttribute("position",new ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Tn(E,x),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let p=this.type;this.render=function(F,l,q){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||F.length===0)return;const le=i.getRenderTarget(),A=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),ae=i.state;ae.setBlending(_i),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const W=p!==di&&this.type===di,re=p===di&&this.type!==di;for(let me=0,te=F.length;me<te;me++){const de=F[me],ie=de.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const Se=ie.getFrameExtents();if(r.multiply(Se),a.copy(ie.mapSize),(r.x>_||r.y>_)&&(r.x>_&&(a.x=Math.floor(_/Se.x),r.x=a.x*Se.x,ie.mapSize.x=a.x),r.y>_&&(a.y=Math.floor(_/Se.y),r.y=a.y*Se.y,ie.mapSize.y=a.y)),ie.map===null||W===!0||re===!0){const Ue=this.type!==di?{minFilter:Bn,magFilter:Bn}:{};ie.map!==null&&ie.map.dispose(),ie.map=new Mi(r.x,r.y,Ue),ie.map.texture.name=de.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const Pe=ie.getViewportCount();for(let Ue=0;Ue<Pe;Ue++){const at=ie.getViewport(Ue);c.set(a.x*at.x,a.y*at.y,a.x*at.z,a.y*at.w),ae.viewport(c),ie.updateMatrices(de,Ue),n=ie.getFrustum(),N(l,q,ie.camera,de,this.type)}ie.isPointLightShadow!==!0&&this.type===di&&I(ie,q),ie.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(le,A,R)};function I(F,l){const q=e.update(b);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Mi(r.x,r.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(l,null,q,x,b,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(l,null,q,S,b,null)}function P(F,l,q,le){let A=null;const R=q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(R!==void 0)A=R;else if(A=q.isPointLight===!0?h:u,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const ae=A.uuid,W=l.uuid;let re=d[ae];re===void 0&&(re={},d[ae]=re);let me=re[W];me===void 0&&(me=A.clone(),re[W]=me,l.addEventListener("dispose",Z)),A=me}if(A.visible=l.visible,A.wireframe=l.wireframe,le===di?A.side=l.shadowSide!==null?l.shadowSide:l.side:A.side=l.shadowSide!==null?l.shadowSide:g[l.side],A.alphaMap=l.alphaMap,A.alphaTest=l.alphaTest,A.map=l.map,A.clipShadows=l.clipShadows,A.clippingPlanes=l.clippingPlanes,A.clipIntersection=l.clipIntersection,A.displacementMap=l.displacementMap,A.displacementScale=l.displacementScale,A.displacementBias=l.displacementBias,A.wireframeLinewidth=l.wireframeLinewidth,A.linewidth=l.linewidth,q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=i.properties.get(A);ae.light=q}return A}function N(F,l,q,le,A){if(F.visible===!1)return;if(F.layers.test(l.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===di)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,F.matrixWorld);const W=e.update(F),re=F.material;if(Array.isArray(re)){const me=W.groups;for(let te=0,de=me.length;te<de;te++){const ie=me[te],Se=re[ie.materialIndex];if(Se&&Se.visible){const Pe=P(F,Se,le,A);F.onBeforeShadow(i,F,l,q,W,Pe,ie),i.renderBufferDirect(q,null,W,Pe,F,ie),F.onAfterShadow(i,F,l,q,W,Pe,ie)}}}else if(re.visible){const me=P(F,re,le,A);F.onBeforeShadow(i,F,l,q,W,me,null),i.renderBufferDirect(q,null,W,me,F,null),F.onAfterShadow(i,F,l,q,W,me,null)}}const ae=F.children;for(let W=0,re=ae.length;W<re;W++)N(ae[W],l,q,le,A)}function Z(F){F.target.removeEventListener("dispose",Z);for(const q in d){const le=d[q],A=F.target.uuid;A in le&&(le[A].dispose(),delete le[A])}}}const Ig={[ro]:so,[ao]:co,[oo]:uo,[yr]:lo,[so]:ro,[co]:ao,[uo]:oo,[lo]:yr};function Ng(i){function e(){let k=!1;const Re=new Bt;let se=null;const pe=new Bt(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!k&&(i.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){k=Ee},setClear:function(Ee,De,xt,bt,Ut){Ut===!0&&(Ee*=bt,De*=bt,xt*=bt),Re.set(Ee,De,xt,bt),pe.equals(Re)===!1&&(i.clearColor(Ee,De,xt,bt),pe.copy(Re))},reset:function(){k=!1,se=null,pe.set(-1,0,0,0)}}}function t(){let k=!1,Re=!1,se=null,pe=null,Ee=null;return{setReversed:function(De){Re=De},setTest:function(De){De?Be(i.DEPTH_TEST):Ne(i.DEPTH_TEST)},setMask:function(De){se!==De&&!k&&(i.depthMask(De),se=De)},setFunc:function(De){if(Re&&(De=Ig[De]),pe!==De){switch(De){case ro:i.depthFunc(i.NEVER);break;case so:i.depthFunc(i.ALWAYS);break;case ao:i.depthFunc(i.LESS);break;case yr:i.depthFunc(i.LEQUAL);break;case oo:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case uo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=De}},setLocked:function(De){k=De},setClear:function(De){Ee!==De&&(i.clearDepth(De),Ee=De)},reset:function(){k=!1,se=null,pe=null,Ee=null}}}function n(){let k=!1,Re=null,se=null,pe=null,Ee=null,De=null,xt=null,bt=null,Ut=null;return{setTest:function(Mt){k||(Mt?Be(i.STENCIL_TEST):Ne(i.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!k&&(i.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,tn,oe){(se!==Mt||pe!==tn||Ee!==oe)&&(i.stencilFunc(Mt,tn,oe),se=Mt,pe=tn,Ee=oe)},setOp:function(Mt,tn,oe){(De!==Mt||xt!==tn||bt!==oe)&&(i.stencilOp(Mt,tn,oe),De=Mt,xt=tn,bt=oe)},setLocked:function(Mt){k=Mt},setClear:function(Mt){Ut!==Mt&&(i.clearStencil(Mt),Ut=Mt)},reset:function(){k=!1,Re=null,se=null,pe=null,Ee=null,De=null,xt=null,bt=null,Ut=null}}}const r=new e,a=new t,c=new n,u=new WeakMap,h=new WeakMap;let d={},_={},g=new WeakMap,x=[],S=null,E=!1,b=null,v=null,p=null,I=null,P=null,N=null,Z=null,F=new _t(0,0,0),l=0,q=!1,le=null,A=null,R=null,ae=null,W=null;const re=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let me=!1,te=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(de)[1]),me=te>=1):de.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),me=te>=2);let ie=null,Se={};const Pe=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),at=new Bt().fromArray(Pe),vt=new Bt().fromArray(Ue);function ce(k,Re,se,pe){const Ee=new Uint8Array(4),De=i.createTexture();i.bindTexture(k,De),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xt=0;xt<se;xt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(Re+xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return De}const ve={};ve[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),c.setClear(0),Be(i.DEPTH_TEST),a.setFunc(yr),ht(!1),qe(xl),Be(i.CULL_FACE),B(_i);function Be(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function Ne(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function tt(k,Re){return _[k]!==Re?(i.bindFramebuffer(k,Re),_[k]=Re,k===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Re),k===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function je(k,Re){let se=x,pe=!1;if(k){se=g.get(Re),se===void 0&&(se=[],g.set(Re,se));const Ee=k.textures;if(se.length!==Ee.length||se[0]!==i.COLOR_ATTACHMENT0){for(let De=0,xt=Ee.length;De<xt;De++)se[De]=i.COLOR_ATTACHMENT0+De;se.length=Ee.length,pe=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,pe=!0);pe&&i.drawBuffers(se)}function it(k){return S!==k?(i.useProgram(k),S=k,!0):!1}const Rt={[qi]:i.FUNC_ADD,[$u]:i.FUNC_SUBTRACT,[Zu]:i.FUNC_REVERSE_SUBTRACT};Rt[Qu]=i.MIN,Rt[Ju]=i.MAX;const ct={[ef]:i.ZERO,[tf]:i.ONE,[nf]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[cf]:i.SRC_ALPHA_SATURATE,[of]:i.DST_COLOR,[sf]:i.DST_ALPHA,[rf]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[lf]:i.ONE_MINUS_DST_COLOR,[af]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[ff]:i.ONE_MINUS_CONSTANT_COLOR,[hf]:i.CONSTANT_ALPHA,[df]:i.ONE_MINUS_CONSTANT_ALPHA};function B(k,Re,se,pe,Ee,De,xt,bt,Ut,Mt){if(k===_i){E===!0&&(Ne(i.BLEND),E=!1);return}if(E===!1&&(Be(i.BLEND),E=!0),k!==Ku){if(k!==b||Mt!==q){if((v!==qi||P!==qi)&&(i.blendEquation(i.FUNC_ADD),v=qi,P=qi),Mt)switch(k){case vr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.ONE,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case vr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ml:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Sl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}p=null,I=null,N=null,Z=null,F.set(0,0,0),l=0,b=k,q=Mt}return}Ee=Ee||Re,De=De||se,xt=xt||pe,(Re!==v||Ee!==P)&&(i.blendEquationSeparate(Rt[Re],Rt[Ee]),v=Re,P=Ee),(se!==p||pe!==I||De!==N||xt!==Z)&&(i.blendFuncSeparate(ct[se],ct[pe],ct[De],ct[xt]),p=se,I=pe,N=De,Z=xt),(bt.equals(F)===!1||Ut!==l)&&(i.blendColor(bt.r,bt.g,bt.b,Ut),F.copy(bt),l=Ut),b=k,q=!1}function en(k,Re){k.side===pi?Ne(i.CULL_FACE):Be(i.CULL_FACE);let se=k.side===Pn;Re&&(se=!se),ht(se),k.blending===vr&&k.transparent===!1?B(_i):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);const pe=k.stencilWrite;c.setTest(pe),pe&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),dt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Be(i.SAMPLE_ALPHA_TO_COVERAGE):Ne(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(k){le!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),le=k)}function qe(k){k!==ju?(Be(i.CULL_FACE),k!==A&&(k===xl?i.cullFace(i.BACK):k===qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ne(i.CULL_FACE),A=k}function Ye(k){k!==R&&(me&&i.lineWidth(k),R=k)}function dt(k,Re,se){k?(Be(i.POLYGON_OFFSET_FILL),(ae!==Re||W!==se)&&(i.polygonOffset(Re,se),ae=Re,W=se)):Ne(i.POLYGON_OFFSET_FILL)}function Ke(k){k?Be(i.SCISSOR_TEST):Ne(i.SCISSOR_TEST)}function L(k){k===void 0&&(k=i.TEXTURE0+re-1),ie!==k&&(i.activeTexture(k),ie=k)}function w(k,Re,se){se===void 0&&(ie===null?se=i.TEXTURE0+re-1:se=ie);let pe=Se[se];pe===void 0&&(pe={type:void 0,texture:void 0},Se[se]=pe),(pe.type!==k||pe.texture!==Re)&&(ie!==se&&(i.activeTexture(se),ie=se),i.bindTexture(k,Re||ve[k]),pe.type=k,pe.texture=Re)}function Y(){const k=Se[ie];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function he(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function we(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Oe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Tt(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function We(k){at.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),at.copy(k))}function Ce(k){vt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),vt.copy(k))}function ut(k,Re){let se=h.get(Re);se===void 0&&(se=new WeakMap,h.set(Re,se));let pe=se.get(k);pe===void 0&&(pe=i.getUniformBlockIndex(Re,k.name),se.set(k,pe))}function rt(k,Re){const pe=h.get(Re).get(k);u.get(Re)!==pe&&(i.uniformBlockBinding(Re,pe,k.__bindingPointIndex),u.set(Re,pe))}function Pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ie=null,Se={},_={},g=new WeakMap,x=[],S=null,E=!1,b=null,v=null,p=null,I=null,P=null,N=null,Z=null,F=new _t(0,0,0),l=0,q=!1,le=null,A=null,R=null,ae=null,W=null,at.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),c.reset()}return{buffers:{color:r,depth:a,stencil:c},enable:Be,disable:Ne,bindFramebuffer:tt,drawBuffers:je,useProgram:it,setBlending:B,setMaterial:en,setFlipSided:ht,setCullFace:qe,setLineWidth:Ye,setPolygonOffset:dt,setScissorTest:Ke,activeTexture:L,bindTexture:w,unbindTexture:Y,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:Fe,texImage3D:$e,updateUBOMapping:ut,uniformBlockBinding:rt,texStorage2D:Tt,texStorage3D:xe,texSubImage2D:X,texSubImage3D:we,compressedTexSubImage2D:Te,compressedTexSubImage3D:Oe,scissor:We,viewport:Ce,reset:Pt}}function hc(i,e,t,n){const r=Ug(n);switch(t){case Hc:return i*e;case Gc:return i*e;case Wc:return i*e*2;case Xc:return i*e/r.components*r.byteLength;case Zo:return i*e/r.components*r.byteLength;case jc:return i*e*2/r.components*r.byteLength;case Qo:return i*e*2/r.components*r.byteLength;case Vc:return i*e*3/r.components*r.byteLength;case qn:return i*e*4/r.components*r.byteLength;case Jo:return i*e*4/r.components*r.byteLength;case Us:case Os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fs:case Bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:case vo:return Math.max(i,16)*Math.max(e,8)/4;case mo:case _o:return Math.max(i,8)*Math.max(e,8)/2;case xo:case Mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case bo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case wo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case zs:case Oo:case Fo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qc:case Bo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case zo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ug(i){switch(i){case xi:case Bc:return{byteLength:1,components:1};case Qr:case zc:case wr:return{byteLength:2,components:1};case Ko:case $o:return{byteLength:2,components:4};case Qi:case Yo:case mi:return{byteLength:4,components:1};case kc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Og(i,e,t,n,r,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Et,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,w){return S?new OffscreenCanvas(L,w):Jr("canvas")}function b(L,w,Y){let he=1;const ge=Ke(L);if((ge.width>Y||ge.height>Y)&&(he=Y/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const X=Math.floor(he*ge.width),we=Math.floor(he*ge.height);g===void 0&&(g=E(X,we));const Te=w?E(X,we):g;return Te.width=X,Te.height=we,Te.getContext("2d").drawImage(L,0,0,X,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+X+"x"+we+")."),Te}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function v(L){return L.generateMipmaps&&L.minFilter!==Bn&&L.minFilter!==fn}function p(L){i.generateMipmap(L)}function I(L,w,Y,he,ge=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let X=w;if(w===i.RED&&(Y===i.FLOAT&&(X=i.R32F),Y===i.HALF_FLOAT&&(X=i.R16F),Y===i.UNSIGNED_BYTE&&(X=i.R8)),w===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(X=i.R8UI),Y===i.UNSIGNED_SHORT&&(X=i.R16UI),Y===i.UNSIGNED_INT&&(X=i.R32UI),Y===i.BYTE&&(X=i.R8I),Y===i.SHORT&&(X=i.R16I),Y===i.INT&&(X=i.R32I)),w===i.RG&&(Y===i.FLOAT&&(X=i.RG32F),Y===i.HALF_FLOAT&&(X=i.RG16F),Y===i.UNSIGNED_BYTE&&(X=i.RG8)),w===i.RG_INTEGER&&(Y===i.UNSIGNED_BYTE&&(X=i.RG8UI),Y===i.UNSIGNED_SHORT&&(X=i.RG16UI),Y===i.UNSIGNED_INT&&(X=i.RG32UI),Y===i.BYTE&&(X=i.RG8I),Y===i.SHORT&&(X=i.RG16I),Y===i.INT&&(X=i.RG32I)),w===i.RGB_INTEGER&&(Y===i.UNSIGNED_BYTE&&(X=i.RGB8UI),Y===i.UNSIGNED_SHORT&&(X=i.RGB16UI),Y===i.UNSIGNED_INT&&(X=i.RGB32UI),Y===i.BYTE&&(X=i.RGB8I),Y===i.SHORT&&(X=i.RGB16I),Y===i.INT&&(X=i.RGB32I)),w===i.RGBA_INTEGER&&(Y===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),Y===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),Y===i.UNSIGNED_INT&&(X=i.RGBA32UI),Y===i.BYTE&&(X=i.RGBA8I),Y===i.SHORT&&(X=i.RGBA16I),Y===i.INT&&(X=i.RGBA32I)),w===i.RGB&&Y===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),w===i.RGBA){const we=ge?Xs:Nt.getTransfer(he);Y===i.FLOAT&&(X=i.RGBA32F),Y===i.HALF_FLOAT&&(X=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(X=we===Xt?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function P(L,w){let Y;return L?w===null||w===Qi||w===Tr?Y=i.DEPTH24_STENCIL8:w===mi?Y=i.DEPTH32F_STENCIL8:w===Qr&&(Y=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Qi||w===Tr?Y=i.DEPTH_COMPONENT24:w===mi?Y=i.DEPTH_COMPONENT32F:w===Qr&&(Y=i.DEPTH_COMPONENT16),Y}function N(L,w){return v(L)===!0||L.isFramebufferTexture&&L.minFilter!==Bn&&L.minFilter!==fn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function Z(L){const w=L.target;w.removeEventListener("dispose",Z),l(w),w.isVideoTexture&&_.delete(w)}function F(L){const w=L.target;w.removeEventListener("dispose",F),le(w)}function l(L){const w=n.get(L);if(w.__webglInit===void 0)return;const Y=L.source,he=x.get(Y);if(he){const ge=he[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(L),Object.keys(he).length===0&&x.delete(Y)}n.remove(L)}function q(L){const w=n.get(L);i.deleteTexture(w.__webglTexture);const Y=L.source,he=x.get(Y);delete he[w.__cacheKey],c.memory.textures--}function le(L){const w=n.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ge=0;ge<w.__webglFramebuffer[he].length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[he][ge]);else i.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)i.deleteFramebuffer(w.__webglFramebuffer[he]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=L.textures;for(let he=0,ge=Y.length;he<ge;he++){const X=n.get(Y[he]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),c.memory.textures--),n.remove(Y[he])}n.remove(L)}let A=0;function R(){A=0}function ae(){const L=A;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),A+=1,L}function W(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function re(L,w){const Y=n.get(L);if(L.isVideoTexture&&Ye(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(Y,L,w);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+w)}function me(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){vt(Y,L,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+w)}function te(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){vt(Y,L,w);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+w)}function de(L,w){const Y=n.get(L);if(L.version>0&&Y.__version!==L.version){ce(Y,L,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+w)}const ie={[Ws]:i.REPEAT,[$i]:i.CLAMP_TO_EDGE,[po]:i.MIRRORED_REPEAT},Se={[Bn]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[cs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[xa]:i.LINEAR_MIPMAP_NEAREST,[Zi]:i.LINEAR_MIPMAP_LINEAR},Pe={[wf]:i.NEVER,[If]:i.ALWAYS,[Cf]:i.LESS,[Yc]:i.LEQUAL,[Rf]:i.EQUAL,[Lf]:i.GEQUAL,[Pf]:i.GREATER,[Df]:i.NOTEQUAL};function Ue(L,w){if(w.type===mi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===fn||w.magFilter===xa||w.magFilter===cs||w.magFilter===Zi||w.minFilter===fn||w.minFilter===xa||w.minFilter===cs||w.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,ie[w.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Se[w.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Bn||w.minFilter!==cs&&w.minFilter!==Zi||w.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function at(L,w){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",Z));const he=w.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const X=W(w);if(X!==L.__cacheKey){ge[X]===void 0&&(ge[X]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ge[X].usedTimes++;const we=ge[L.__cacheKey];we!==void 0&&(ge[L.__cacheKey].usedTimes--,we.usedTimes===0&&q(w)),L.__cacheKey=X,L.__webglTexture=ge[X].texture}return Y}function vt(L,w,Y){let he=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=i.TEXTURE_3D);const ge=at(L,w),X=w.source;t.bindTexture(he,L.__webglTexture,i.TEXTURE0+Y);const we=n.get(X);if(X.version!==we.__version||ge===!0){t.activeTexture(i.TEXTURE0+Y);const Te=Nt.getPrimaries(Nt.workingColorSpace),Oe=w.colorSpace===Li?null:Nt.getPrimaries(w.colorSpace),Tt=w.colorSpace===Li||Te===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let xe=b(w.image,!1,r.maxTextureSize);xe=dt(w,xe);const Fe=a.convert(w.format,w.colorSpace),$e=a.convert(w.type);let We=I(w.internalFormat,Fe,$e,w.colorSpace,w.isVideoTexture);Ue(he,w);let Ce;const ut=w.mipmaps,rt=w.isVideoTexture!==!0,Pt=we.__version===void 0||ge===!0,k=X.dataReady,Re=N(w,xe);if(w.isDepthTexture)We=P(w.format===br,w.type),Pt&&(rt?t.texStorage2D(i.TEXTURE_2D,1,We,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,We,xe.width,xe.height,0,Fe,$e,null));else if(w.isDataTexture)if(ut.length>0){rt&&Pt&&t.texStorage2D(i.TEXTURE_2D,Re,We,ut[0].width,ut[0].height);for(let se=0,pe=ut.length;se<pe;se++)Ce=ut[se],rt?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Fe,$e,Ce.data):t.texImage2D(i.TEXTURE_2D,se,We,Ce.width,Ce.height,0,Fe,$e,Ce.data);w.generateMipmaps=!1}else rt?(Pt&&t.texStorage2D(i.TEXTURE_2D,Re,We,xe.width,xe.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe.width,xe.height,Fe,$e,xe.data)):t.texImage2D(i.TEXTURE_2D,0,We,xe.width,xe.height,0,Fe,$e,xe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,We,ut[0].width,ut[0].height,xe.depth);for(let se=0,pe=ut.length;se<pe;se++)if(Ce=ut[se],w.format!==qn)if(Fe!==null)if(rt){if(k)if(w.layerUpdates.size>0){const Ee=hc(Ce.width,Ce.height,w.format,w.type);for(const De of w.layerUpdates){const xt=Ce.data.subarray(De*Ee/Ce.data.BYTES_PER_ELEMENT,(De+1)*Ee/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,De,Ce.width,Ce.height,1,Fe,xt,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,xe.depth,Fe,Ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,We,Ce.width,Ce.height,xe.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ce.width,Ce.height,xe.depth,Fe,$e,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,We,Ce.width,Ce.height,xe.depth,0,Fe,$e,Ce.data)}else{rt&&Pt&&t.texStorage2D(i.TEXTURE_2D,Re,We,ut[0].width,ut[0].height);for(let se=0,pe=ut.length;se<pe;se++)Ce=ut[se],w.format!==qn?Fe!==null?rt?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,se,We,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ce.width,Ce.height,Fe,$e,Ce.data):t.texImage2D(i.TEXTURE_2D,se,We,Ce.width,Ce.height,0,Fe,$e,Ce.data)}else if(w.isDataArrayTexture)if(rt){if(Pt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,We,xe.width,xe.height,xe.depth),k)if(w.layerUpdates.size>0){const se=hc(xe.width,xe.height,w.format,w.type);for(const pe of w.layerUpdates){const Ee=xe.data.subarray(pe*se/xe.data.BYTES_PER_ELEMENT,(pe+1)*se/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,xe.width,xe.height,1,Fe,$e,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Fe,$e,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,xe.width,xe.height,xe.depth,0,Fe,$e,xe.data);else if(w.isData3DTexture)rt?(Pt&&t.texStorage3D(i.TEXTURE_3D,Re,We,xe.width,xe.height,xe.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Fe,$e,xe.data)):t.texImage3D(i.TEXTURE_3D,0,We,xe.width,xe.height,xe.depth,0,Fe,$e,xe.data);else if(w.isFramebufferTexture){if(Pt)if(rt)t.texStorage2D(i.TEXTURE_2D,Re,We,xe.width,xe.height);else{let se=xe.width,pe=xe.height;for(let Ee=0;Ee<Re;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,We,se,pe,0,Fe,$e,null),se>>=1,pe>>=1}}else if(ut.length>0){if(rt&&Pt){const se=Ke(ut[0]);t.texStorage2D(i.TEXTURE_2D,Re,We,se.width,se.height)}for(let se=0,pe=ut.length;se<pe;se++)Ce=ut[se],rt?k&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Fe,$e,Ce):t.texImage2D(i.TEXTURE_2D,se,We,Fe,$e,Ce);w.generateMipmaps=!1}else if(rt){if(Pt){const se=Ke(xe);t.texStorage2D(i.TEXTURE_2D,Re,We,se.width,se.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,$e,xe)}else t.texImage2D(i.TEXTURE_2D,0,We,Fe,$e,xe);v(w)&&p(he),we.__version=X.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ce(L,w,Y){if(w.image.length!==6)return;const he=at(L,w),ge=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Y);const X=n.get(ge);if(ge.version!==X.__version||he===!0){t.activeTexture(i.TEXTURE0+Y);const we=Nt.getPrimaries(Nt.workingColorSpace),Te=w.colorSpace===Li?null:Nt.getPrimaries(w.colorSpace),Oe=w.colorSpace===Li||we===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Tt=w.isCompressedTexture||w.image[0].isCompressedTexture,xe=w.image[0]&&w.image[0].isDataTexture,Fe=[];for(let pe=0;pe<6;pe++)!Tt&&!xe?Fe[pe]=b(w.image[pe],!0,r.maxCubemapSize):Fe[pe]=xe?w.image[pe].image:w.image[pe],Fe[pe]=dt(w,Fe[pe]);const $e=Fe[0],We=a.convert(w.format,w.colorSpace),Ce=a.convert(w.type),ut=I(w.internalFormat,We,Ce,w.colorSpace),rt=w.isVideoTexture!==!0,Pt=X.__version===void 0||he===!0,k=ge.dataReady;let Re=N(w,$e);Ue(i.TEXTURE_CUBE_MAP,w);let se;if(Tt){rt&&Pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ut,$e.width,$e.height);for(let pe=0;pe<6;pe++){se=Fe[pe].mipmaps;for(let Ee=0;Ee<se.length;Ee++){const De=se[Ee];w.format!==qn?We!==null?rt?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,De.width,De.height,We,De.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,ut,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,0,0,De.width,De.height,We,Ce,De.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee,ut,De.width,De.height,0,We,Ce,De.data)}}}else{if(se=w.mipmaps,rt&&Pt){se.length>0&&Re++;const pe=Ke(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,ut,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(xe){rt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe[pe].width,Fe[pe].height,We,Ce,Fe[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,Fe[pe].width,Fe[pe].height,0,We,Ce,Fe[pe].data);for(let Ee=0;Ee<se.length;Ee++){const xt=se[Ee].image[pe].image;rt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,xt.width,xt.height,We,Ce,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,ut,xt.width,xt.height,0,We,Ce,xt.data)}}else{rt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,We,Ce,Fe[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ut,We,Ce,Fe[pe]);for(let Ee=0;Ee<se.length;Ee++){const De=se[Ee];rt?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,0,0,We,Ce,De.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee+1,ut,We,Ce,De.image[pe])}}}v(w)&&p(i.TEXTURE_CUBE_MAP),X.__version=ge.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function ve(L,w,Y,he,ge,X){const we=a.convert(Y.format,Y.colorSpace),Te=a.convert(Y.type),Oe=I(Y.internalFormat,we,Te,Y.colorSpace);if(!n.get(w).__hasExternalTextures){const xe=Math.max(1,w.width>>X),Fe=Math.max(1,w.height>>X);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,X,Oe,xe,Fe,w.depth,0,we,Te,null):t.texImage2D(ge,X,Oe,xe,Fe,0,we,Te,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ge,n.get(Y).__webglTexture,0,ht(w)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ge,n.get(Y).__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(L,w,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,L),w.depthBuffer){const he=w.depthTexture,ge=he&&he.isDepthTexture?he.type:null,X=P(w.stencilBuffer,ge),we=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=ht(w);qe(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,X,w.width,w.height):Y?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,X,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,X,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,L)}else{const he=w.textures;for(let ge=0;ge<he.length;ge++){const X=he[ge],we=a.convert(X.format,X.colorSpace),Te=a.convert(X.type),Oe=I(X.internalFormat,we,Te,X.colorSpace),Tt=ht(w);Y&&qe(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,Oe,w.width,w.height):qe(w)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,Oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(L,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),re(w.depthTexture,0);const he=n.get(w.depthTexture).__webglTexture,ge=ht(w);if(w.depthTexture.format===xr)qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(w.depthTexture.format===br)qe(w)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function tt(L){const w=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=he}if(L.depthTexture&&!w.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ne(w.__webglFramebuffer,L)}else if(Y){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=i.createRenderbuffer(),Be(w.__webglDepthbuffer[he],L,!1);else{const ge=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Be(w.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(L,w,Y){const he=n.get(L);w!==void 0&&ve(he.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&tt(L)}function it(L){const w=L.texture,Y=n.get(L),he=n.get(w);L.addEventListener("dispose",F);const ge=L.textures,X=L.isWebGLCubeRenderTarget===!0,we=ge.length>1;if(we||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=w.version,c.memory.textures++),X){Y.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Te]=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)Y.__webglFramebuffer[Te][Oe]=i.createFramebuffer()}else Y.__webglFramebuffer[Te]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)Y.__webglFramebuffer[Te]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(we)for(let Te=0,Oe=ge.length;Te<Oe;Te++){const Tt=n.get(ge[Te]);Tt.__webglTexture===void 0&&(Tt.__webglTexture=i.createTexture(),c.memory.textures++)}if(L.samples>0&&qe(L)===!1){Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const Oe=ge[Te];Y.__webglColorRenderbuffer[Te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const Tt=a.convert(Oe.format,Oe.colorSpace),xe=a.convert(Oe.type),Fe=I(Oe.internalFormat,Tt,xe,Oe.colorSpace,L.isXRRenderTarget===!0),$e=ht(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Fe,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Te])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ue(i.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ve(Y.__webglFramebuffer[Te][Oe],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Oe);else ve(Y.__webglFramebuffer[Te],L,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);v(w)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let Te=0,Oe=ge.length;Te<Oe;Te++){const Tt=ge[Te],xe=n.get(Tt);t.bindTexture(i.TEXTURE_2D,xe.__webglTexture),Ue(i.TEXTURE_2D,Tt),ve(Y.__webglFramebuffer,L,Tt,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,0),v(Tt)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let Te=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Te=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),Ue(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let Oe=0;Oe<w.mipmaps.length;Oe++)ve(Y.__webglFramebuffer[Oe],L,w,i.COLOR_ATTACHMENT0,Te,Oe);else ve(Y.__webglFramebuffer,L,w,i.COLOR_ATTACHMENT0,Te,0);v(w)&&p(Te),t.unbindTexture()}L.depthBuffer&&tt(L)}function Rt(L){const w=L.textures;for(let Y=0,he=w.length;Y<he;Y++){const ge=w[Y];if(v(ge)){const X=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(ge).__webglTexture;t.bindTexture(X,we),p(X),t.unbindTexture()}}}const ct=[],B=[];function en(L){if(L.samples>0){if(qe(L)===!1){const w=L.textures,Y=L.width,he=L.height;let ge=i.COLOR_BUFFER_BIT;const X=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(L),Te=w.length>1;if(Te)for(let Oe=0;Oe<w.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Oe=0;Oe<w.length;Oe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),Te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const Tt=n.get(w[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Tt,0)}i.blitFramebuffer(0,0,Y,he,0,0,Y,he,ge,i.NEAREST),h===!0&&(ct.length=0,B.length=0,ct.push(i.COLOR_ATTACHMENT0+Oe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(X),B.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,B)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Te)for(let Oe=0;Oe<w.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,we.__webglColorRenderbuffer[Oe]);const Tt=n.get(w[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,Tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const w=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ht(L){return Math.min(r.maxSamples,L.samples)}function qe(L){const w=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(L){const w=c.render.frame;_.get(L)!==w&&(_.set(L,w),L.update())}function dt(L,w){const Y=L.colorSpace,he=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==Ni&&Y!==Li&&(Nt.getTransfer(Y)===Xt?(he!==qn||ge!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),w}function Ke(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(d.width=L.naturalWidth||L.width,d.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(d.width=L.displayWidth,d.height=L.displayHeight):(d.width=L.width,d.height=L.height),d}this.allocateTextureUnit=ae,this.resetTextureUnits=R,this.setTexture2D=re,this.setTexture2DArray=me,this.setTexture3D=te,this.setTextureCube=de,this.rebindTextures=je,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function Fg(i,e){function t(n,r=Li){let a;const c=Nt.getTransfer(r);if(n===xi)return i.UNSIGNED_BYTE;if(n===Ko)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$o)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===Qr)return i.UNSIGNED_SHORT;if(n===Yo)return i.INT;if(n===Qi)return i.UNSIGNED_INT;if(n===mi)return i.FLOAT;if(n===wr)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Vc)return i.RGB;if(n===qn)return i.RGBA;if(n===Gc)return i.LUMINANCE;if(n===Wc)return i.LUMINANCE_ALPHA;if(n===xr)return i.DEPTH_COMPONENT;if(n===br)return i.DEPTH_STENCIL;if(n===Xc)return i.RED;if(n===Zo)return i.RED_INTEGER;if(n===jc)return i.RG;if(n===Qo)return i.RG_INTEGER;if(n===Jo)return i.RGBA_INTEGER;if(n===Us||n===Os||n===Fs||n===Bs)if(c===Xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Us)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Us)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mo||n===go||n===_o||n===vo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===mo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===go)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===_o)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xo||n===Mo||n===yo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===xo||n===Mo)return c===Xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===yo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===So||n===Eo||n===To||n===bo||n===Ao||n===wo||n===Co||n===Ro||n===Po||n===Do||n===Lo||n===Io||n===No||n===Uo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===So)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===To)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Co)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ro)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Do)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Lo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Io)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Uo)return c===Xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Oo||n===Fo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===zs)return c===Xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qc||n===Bo||n===zo||n===ko)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===zs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Bo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ko)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Bg extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kr extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const b of e.hand.values()){const v=t.getJointPose(b,n),p=this._getHandJoint(d,b);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,E=.005;d.inputState.pinching&&x>S+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&x<=S-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));u!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(u.matrix.fromArray(r.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,r.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(r.linearVelocity)):u.hasLinearVelocity=!1,r.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(r.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return u!==null&&(u.visible=r!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Vg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new sn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:kg,fragmentShader:Hg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tn(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gg extends Cr{constructor(e,t){super();const n=this;let r=null,a=1,c=null,u="local-floor",h=1,d=null,_=null,g=null,x=null,S=null,E=null;const b=new Vg,v=t.getContextAttributes();let p=null,I=null;const P=[],N=[],Z=new Et;let F=null;const l=new In;l.layers.enable(1),l.viewport=new Bt;const q=new In;q.layers.enable(2),q.viewport=new Bt;const le=[l,q],A=new Bg;A.layers.enable(1),A.layers.enable(2);let R=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ve=P[ce];return ve===void 0&&(ve=new Ka,P[ce]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ce){let ve=P[ce];return ve===void 0&&(ve=new Ka,P[ce]=ve),ve.getGripSpace()},this.getHand=function(ce){let ve=P[ce];return ve===void 0&&(ve=new Ka,P[ce]=ve),ve.getHandSpace()};function W(ce){const ve=N.indexOf(ce.inputSource);if(ve===-1)return;const Be=P[ve];Be!==void 0&&(Be.update(ce.inputSource,ce.frame,d||c),Be.dispatchEvent({type:ce.type,data:ce.inputSource}))}function re(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",me);for(let ce=0;ce<P.length;ce++){const ve=N[ce];ve!==null&&(N[ce]=null,P[ce].disconnect(ve))}R=null,ae=null,b.reset(),e.setRenderTarget(p),S=null,x=null,g=null,r=null,I=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){u=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ce){d=ce},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ce){if(r=ce,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",re),r.addEventListener("inputsourceschange",me),v.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(Z),r.renderState.layers===void 0){const ve={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(r,t,ve),r.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Mi(S.framebufferWidth,S.framebufferHeight,{format:qn,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ve=null,Be=null,Ne=null;v.depth&&(Ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=v.stencil?br:xr,Be=v.stencil?Tr:Qi);const tt={colorFormat:t.RGBA8,depthFormat:Ne,scaleFactor:a};g=new XRWebGLBinding(r,t),x=g.createProjectionLayer(tt),r.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Mi(x.textureWidth,x.textureHeight,{format:qn,type:xi,depthTexture:new au(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await r.requestReferenceSpace(u),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function me(ce){for(let ve=0;ve<ce.removed.length;ve++){const Be=ce.removed[ve],Ne=N.indexOf(Be);Ne>=0&&(N[Ne]=null,P[Ne].disconnect(Be))}for(let ve=0;ve<ce.added.length;ve++){const Be=ce.added[ve];let Ne=N.indexOf(Be);if(Ne===-1){for(let je=0;je<P.length;je++)if(je>=N.length){N.push(Be),Ne=je;break}else if(N[je]===null){N[je]=Be,Ne=je;break}if(Ne===-1)break}const tt=P[Ne];tt&&tt.connect(Be)}}const te=new j,de=new j;function ie(ce,ve,Be){te.setFromMatrixPosition(ve.matrixWorld),de.setFromMatrixPosition(Be.matrixWorld);const Ne=te.distanceTo(de),tt=ve.projectionMatrix.elements,je=Be.projectionMatrix.elements,it=tt[14]/(tt[10]-1),Rt=tt[14]/(tt[10]+1),ct=(tt[9]+1)/tt[5],B=(tt[9]-1)/tt[5],en=(tt[8]-1)/tt[0],ht=(je[8]+1)/je[0],qe=it*en,Ye=it*ht,dt=Ne/(-en+ht),Ke=dt*-en;if(ve.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Ke),ce.translateZ(dt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),tt[10]===-1)ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const L=it+dt,w=Rt+dt,Y=qe-Ke,he=Ye+(Ne-Ke),ge=ct*Rt/w*L,X=B*Rt/w*L;ce.projectionMatrix.makePerspective(Y,he,ge,X,L,w),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function Se(ce,ve){ve===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ve.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(r===null)return;let ve=ce.near,Be=ce.far;b.texture!==null&&(b.depthNear>0&&(ve=b.depthNear),b.depthFar>0&&(Be=b.depthFar)),A.near=q.near=l.near=ve,A.far=q.far=l.far=Be,(R!==A.near||ae!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,ae=A.far);const Ne=ce.parent,tt=A.cameras;Se(A,Ne);for(let je=0;je<tt.length;je++)Se(tt[je],Ne);tt.length===2?ie(A,l,q):A.projectionMatrix.copy(l.projectionMatrix),Pe(ce,A,Ne)};function Pe(ce,ve,Be){Be===null?ce.matrix.copy(ve.matrixWorld):(ce.matrix.copy(Be.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ve.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Ho*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(ce){h=ce,x!==null&&(x.fixedFoveation=ce),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ce)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(A)};let Ue=null;function at(ce,ve){if(_=ve.getViewerPose(d||c),E=ve,_!==null){const Be=_.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let Ne=!1;Be.length!==A.cameras.length&&(A.cameras.length=0,Ne=!0);for(let je=0;je<Be.length;je++){const it=Be[je];let Rt=null;if(S!==null)Rt=S.getViewport(it);else{const B=g.getViewSubImage(x,it);Rt=B.viewport,je===0&&(e.setRenderTargetTextures(I,B.colorTexture,x.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(I))}let ct=le[je];ct===void 0&&(ct=new In,ct.layers.enable(je),ct.viewport=new Bt,le[je]=ct),ct.matrix.fromArray(it.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(it.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),je===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ne===!0&&A.cameras.push(ct)}const tt=r.enabledFeatures;if(tt&&tt.includes("depth-sensing")){const je=g.getDepthInformation(Be[0]);je&&je.isValid&&je.texture&&b.init(e,je,r.renderState)}}for(let Be=0;Be<P.length;Be++){const Ne=N[Be],tt=P[Be];Ne!==null&&tt!==void 0&&tt.update(Ne,ve,d||c)}Ue&&Ue(ce,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),E=null}const vt=new su;vt.setAnimationLoop(at),this.setAnimationLoop=function(ce){Ue=ce},this.dispose=function(){}}}const Wi=new ni,Wg=new zt;function Xg(i,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,tu(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function r(v,p,I,P,N){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(v,p):p.isMeshToonMaterial?(a(v,p),g(v,p)):p.isMeshPhongMaterial?(a(v,p),_(v,p)):p.isMeshStandardMaterial?(a(v,p),x(v,p),p.isMeshPhysicalMaterial&&S(v,p,N)):p.isMeshMatcapMaterial?(a(v,p),E(v,p)):p.isMeshDepthMaterial?a(v,p):p.isMeshDistanceMaterial?(a(v,p),b(v,p)):p.isMeshNormalMaterial?a(v,p):p.isLineBasicMaterial?(c(v,p),p.isLineDashedMaterial&&u(v,p)):p.isPointsMaterial?h(v,p,I,P):p.isSpriteMaterial?d(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Pn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Pn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const I=e.get(p),P=I.envMap,N=I.envMapRotation;P&&(v.envMap.value=P,Wi.copy(N),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),v.envMapRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(Wi)),v.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function c(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function u(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function h(v,p,I,P){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*I,v.scale.value=P*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function d(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function _(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function g(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function x(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function S(v,p,I){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=I.texture,v.transmissionSamplerSize.value.set(I.width,I.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function E(v,p){p.matcap&&(v.matcap.value=p.matcap)}function b(v,p){const I=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(I.matrixWorld),v.nearDistance.value=I.shadow.camera.near,v.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function jg(i,e,t,n){let r={},a={},c=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,P){const N=P.program;n.uniformBlockBinding(I,N)}function d(I,P){let N=r[I.id];N===void 0&&(E(I),N=_(I),r[I.id]=N,I.addEventListener("dispose",v));const Z=P.program;n.updateUBOMapping(I,Z);const F=e.render.frame;a[I.id]!==F&&(x(I),a[I.id]=F)}function _(I){const P=g();I.__bindingPointIndex=P;const N=i.createBuffer(),Z=I.__size,F=I.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,Z,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,N),N}function g(){for(let I=0;I<u;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const P=r[I.id],N=I.uniforms,Z=I.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let F=0,l=N.length;F<l;F++){const q=Array.isArray(N[F])?N[F]:[N[F]];for(let le=0,A=q.length;le<A;le++){const R=q[le];if(S(R,F,le,Z)===!0){const ae=R.__offset,W=Array.isArray(R.value)?R.value:[R.value];let re=0;for(let me=0;me<W.length;me++){const te=W[me],de=b(te);typeof te=="number"||typeof te=="boolean"?(R.__data[0]=te,i.bufferSubData(i.UNIFORM_BUFFER,ae+re,R.__data)):te.isMatrix3?(R.__data[0]=te.elements[0],R.__data[1]=te.elements[1],R.__data[2]=te.elements[2],R.__data[3]=0,R.__data[4]=te.elements[3],R.__data[5]=te.elements[4],R.__data[6]=te.elements[5],R.__data[7]=0,R.__data[8]=te.elements[6],R.__data[9]=te.elements[7],R.__data[10]=te.elements[8],R.__data[11]=0):(te.toArray(R.__data,re),re+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,ae,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function S(I,P,N,Z){const F=I.value,l=P+"_"+N;if(Z[l]===void 0)return typeof F=="number"||typeof F=="boolean"?Z[l]=F:Z[l]=F.clone(),!0;{const q=Z[l];if(typeof F=="number"||typeof F=="boolean"){if(q!==F)return Z[l]=F,!0}else if(q.equals(F)===!1)return q.copy(F),!0}return!1}function E(I){const P=I.uniforms;let N=0;const Z=16;for(let l=0,q=P.length;l<q;l++){const le=Array.isArray(P[l])?P[l]:[P[l]];for(let A=0,R=le.length;A<R;A++){const ae=le[A],W=Array.isArray(ae.value)?ae.value:[ae.value];for(let re=0,me=W.length;re<me;re++){const te=W[re],de=b(te),ie=N%Z,Se=ie%de.boundary,Pe=ie+Se;N+=Se,Pe!==0&&Z-Pe<de.storage&&(N+=Z-Pe),ae.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=N,N+=de.storage}}}const F=N%Z;return F>0&&(N+=Z-F),I.__size=N,I.__cache={},this}function b(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function v(I){const P=I.target;P.removeEventListener("dispose",v);const N=c.indexOf(P.__bindingPointIndex);c.splice(N,1),i.deleteBuffer(r[P.id]),delete r[P.id],delete a[P.id]}function p(){for(const I in r)i.deleteBuffer(r[I]);c=[],r={},a={}}return{bind:h,update:d,dispose:p}}class fu{constructor(e={}){const{canvas:t=Uf(),context:n=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=c;const S=new Uint32Array(4),E=new Int32Array(4);let b=null,v=null;const p=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Ii,this.toneMappingExposure=1;const P=this;let N=!1,Z=0,F=0,l=null,q=-1,le=null;const A=new Bt,R=new Bt;let ae=null;const W=new _t(0);let re=0,me=t.width,te=t.height,de=1,ie=null,Se=null;const Pe=new Bt(0,0,me,te),Ue=new Bt(0,0,me,te);let at=!1;const vt=new il;let ce=!1,ve=!1;const Be=new zt,Ne=new zt,tt=new j,je=new Bt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Rt=!1;function ct(){return l===null?de:1}let B=n;function en(C,V){return t.getContext(C,V)}try{const C={alpha:!0,depth:r,stencil:a,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",De,!1),B===null){const V="webgl2";if(B=en(V,C),B===null)throw en(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ht,qe,Ye,dt,Ke,L,w,Y,he,ge,X,we,Te,Oe,Tt,xe,Fe,$e,We,Ce,ut,rt,Pt,k;function Re(){ht=new Qp(B),ht.init(),rt=new Fg(B,ht),qe=new jp(B,ht,e,rt),Ye=new Ng(B),qe.reverseDepthBuffer&&Ye.buffers.depth.setReversed(!0),dt=new tm(B),Ke=new xg,L=new Og(B,ht,Ye,Ke,qe,rt,dt),w=new Yp(P),Y=new Zp(P),he=new lh(B),Pt=new Wp(B,he),ge=new Jp(B,he,dt,Pt),X=new im(B,ge,he,dt),We=new nm(B,qe,L),xe=new qp(Ke),we=new vg(P,w,Y,ht,qe,Pt,xe),Te=new Xg(P,Ke),Oe=new yg,Tt=new wg(ht),$e=new Gp(P,w,Y,Ye,X,x,h),Fe=new Lg(P,X,qe),k=new jg(B,dt,qe,Ye),Ce=new Xp(B,ht,dt),ut=new em(B,ht,dt),dt.programs=we.programs,P.capabilities=qe,P.extensions=ht,P.properties=Ke,P.renderLists=Oe,P.shadowMap=Fe,P.state=Ye,P.info=dt}Re();const se=new Gg(P,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(C){C!==void 0&&(de=C,this.setSize(me,te,!1))},this.getSize=function(C){return C.set(me,te)},this.setSize=function(C,V,$=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}me=C,te=V,t.width=Math.floor(C*de),t.height=Math.floor(V*de),$===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(me*de,te*de).floor()},this.setDrawingBufferSize=function(C,V,$){me=C,te=V,de=$,t.width=Math.floor(C*$),t.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(Pe)},this.setViewport=function(C,V,$,K){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,V,$,K),Ye.viewport(A.copy(Pe).multiplyScalar(de).round())},this.getScissor=function(C){return C.copy(Ue)},this.setScissor=function(C,V,$,K){C.isVector4?Ue.set(C.x,C.y,C.z,C.w):Ue.set(C,V,$,K),Ye.scissor(R.copy(Ue).multiplyScalar(de).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(C){Ye.setScissorTest(at=C)},this.setOpaqueSort=function(C){ie=C},this.setTransparentSort=function(C){Se=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(C=!0,V=!0,$=!0){let K=0;if(C){let G=!1;if(l!==null){const Me=l.texture.format;G=Me===Jo||Me===Qo||Me===Zo}if(G){const Me=l.texture.type,be=Me===xi||Me===Qi||Me===Qr||Me===Tr||Me===Ko||Me===$o,ze=$e.getClearColor(),ke=$e.getClearAlpha(),Je=ze.r,et=ze.g,Ge=ze.b;be?(S[0]=Je,S[1]=et,S[2]=Ge,S[3]=ke,B.clearBufferuiv(B.COLOR,0,S)):(E[0]=Je,E[1]=et,E[2]=Ge,E[3]=ke,B.clearBufferiv(B.COLOR,0,E))}else K|=B.COLOR_BUFFER_BIT}V&&(K|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),$&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Oe.dispose(),Tt.dispose(),Ke.dispose(),w.dispose(),Y.dispose(),X.dispose(),Pt.dispose(),k.dispose(),we.dispose(),se.dispose(),se.removeEventListener("sessionstart",Xe),se.removeEventListener("sessionend",Ze),ft.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const C=dt.autoReset,V=Fe.enabled,$=Fe.autoUpdate,K=Fe.needsUpdate,G=Fe.type;Re(),dt.autoReset=C,Fe.enabled=V,Fe.autoUpdate=$,Fe.needsUpdate=K,Fe.type=G}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function xt(C){const V=C.target;V.removeEventListener("dispose",xt),bt(V)}function bt(C){Ut(C),Ke.remove(C)}function Ut(C){const V=Ke.get(C).programs;V!==void 0&&(V.forEach(function($){we.releaseProgram($)}),C.isShaderMaterial&&we.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,K,G,Me){V===null&&(V=it);const be=G.isMesh&&G.matrixWorld.determinant()<0,ze=vn(C,V,$,K,G);Ye.setMaterial(K,be);let ke=$.index,Je=1;if(K.wireframe===!0){if(ke=ge.getWireframeAttribute($),ke===void 0)return;Je=2}const et=$.drawRange,Ge=$.attributes.position;let Dt=et.start*Je,kt=(et.start+et.count)*Je;Me!==null&&(Dt=Math.max(Dt,Me.start*Je),kt=Math.min(kt,(Me.start+Me.count)*Je)),ke!==null?(Dt=Math.max(Dt,0),kt=Math.min(kt,ke.count)):Ge!=null&&(Dt=Math.max(Dt,0),kt=Math.min(kt,Ge.count));const jt=kt-Dt;if(jt<0||jt===1/0)return;Pt.setup(G,K,ze,$,ke);let pn,Lt=Ce;if(ke!==null&&(pn=he.get(ke),Lt=ut,Lt.setIndex(pn)),G.isMesh)K.wireframe===!0?(Ye.setLineWidth(K.wireframeLinewidth*ct()),Lt.setMode(B.LINES)):Lt.setMode(B.TRIANGLES);else if(G.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),Ye.setLineWidth(Ve*ct()),G.isLineSegments?Lt.setMode(B.LINES):G.isLineLoop?Lt.setMode(B.LINE_LOOP):Lt.setMode(B.LINE_STRIP)}else G.isPoints?Lt.setMode(B.POINTS):G.isSprite&&Lt.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Lt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Lt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ve=G._multiDrawStarts,Qt=G._multiDrawCounts,ot=G._multiDrawCount,ln=ke?he.get(ke).bytesPerElement:1,kn=Ke.get(K).currentProgram.getUniforms();for(let xn=0;xn<ot;xn++)kn.setValue(B,"_gl_DrawID",xn),Lt.render(Ve[xn]/ln,Qt[xn])}else if(G.isInstancedMesh)Lt.renderInstances(Dt,jt,G.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Qt=Math.min($.instanceCount,Ve);Lt.renderInstances(Dt,jt,Qt)}else Lt.render(Dt,jt)};function Mt(C,V,$){C.transparent===!0&&C.side===pi&&C.forceSinglePass===!1?(C.side=Pn,C.needsUpdate=!0,Yt(C,V,$),C.side=vi,C.needsUpdate=!0,Yt(C,V,$),C.side=pi):Yt(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),v=Tt.get($),v.init(V),I.push(v),$.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),C!==$&&C.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const K=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const ze=Me[be];Mt(ze,$,G),K.add(ze)}else Mt(Me,$,G),K.add(Me)}),I.pop(),v=null,K},this.compileAsync=function(C,V,$=null){const K=this.compile(C,V,$);return new Promise(G=>{function Me(){if(K.forEach(function(be){Ke.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){G(C);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let tn=null;function oe(C){tn&&tn(C)}function Xe(){ft.stop()}function Ze(){ft.start()}const ft=new su;ft.setAnimationLoop(oe),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(C){tn=C,se.setAnimationLoop(C),C===null?ft.stop():ft.start()},se.addEventListener("sessionstart",Xe),se.addEventListener("sessionend",Ze),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(V),V=se.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,l),v=Tt.get(C,I.length),v.init(V),I.push(v),Ne.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),vt.setFromProjectionMatrix(Ne),ve=this.localClippingEnabled,ce=xe.init(this.clippingPlanes,ve),b=Oe.get(C,p.length),b.init(),p.push(b),se.enabled===!0&&se.isPresenting===!0){const Me=P.xr.getDepthSensingMesh();Me!==null&&Ht(Me,V,-1/0,P.sortObjects)}Ht(C,V,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(ie,Se),Rt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Rt&&$e.addToRenderList(b,C),this.info.render.frame++,ce===!0&&xe.beginShadows();const $=v.state.shadowsArray;Fe.render($,C,V),ce===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=b.opaque,G=b.transmissive;if(v.setupLights(),V.isArrayCamera){const Me=V.cameras;if(G.length>0)for(let be=0,ze=Me.length;be<ze;be++){const ke=Me[be];Zt(K,G,C,ke)}Rt&&$e.render(C);for(let be=0,ze=Me.length;be<ze;be++){const ke=Me[be];wt(b,C,ke,ke.viewport)}}else G.length>0&&Zt(K,G,C,V),Rt&&$e.render(C),wt(b,C,V);l!==null&&(L.updateMultisampleRenderTarget(l),L.updateRenderTargetMipmap(l)),C.isScene===!0&&C.onAfterRender(P,C,V),Pt.resetDefaultState(),q=-1,le=null,I.pop(),I.length>0?(v=I[I.length-1],ce===!0&&xe.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,p.pop(),p.length>0?b=p[p.length-1]:b=null};function Ht(C,V,$,K){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||vt.intersectsSprite(C)){K&&je.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ne);const be=X.update(C),ze=C.material;ze.visible&&b.push(C,be,ze,$,je.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||vt.intersectsObject(C))){const be=X.update(C),ze=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),je.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),je.copy(be.boundingSphere.center)),je.applyMatrix4(C.matrixWorld).applyMatrix4(Ne)),Array.isArray(ze)){const ke=be.groups;for(let Je=0,et=ke.length;Je<et;Je++){const Ge=ke[Je],Dt=ze[Ge.materialIndex];Dt&&Dt.visible&&b.push(C,be,Dt,$,je.z,Ge)}}else ze.visible&&b.push(C,be,ze,$,je.z,null)}}const Me=C.children;for(let be=0,ze=Me.length;be<ze;be++)Ht(Me[be],V,$,K)}function wt(C,V,$,K){const G=C.opaque,Me=C.transmissive,be=C.transparent;v.setupLightsView($),ce===!0&&xe.setGlobalState(P.clippingPlanes,$),K&&Ye.viewport(A.copy(K)),G.length>0&&Ft(G,V,$),Me.length>0&&Ft(Me,V,$),be.length>0&&Ft(be,V,$),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Zt(C,V,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[K.id]===void 0&&(v.state.transmissionRenderTarget[K.id]=new Mi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?wr:xi,minFilter:Zi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Nt.workingColorSpace}));const Me=v.state.transmissionRenderTarget[K.id],be=K.viewport||A;Me.setSize(be.z,be.w);const ze=P.getRenderTarget();P.setRenderTarget(Me),P.getClearColor(W),re=P.getClearAlpha(),re<1&&P.setClearColor(16777215,.5),P.clear(),Rt&&$e.render($);const ke=P.toneMapping;P.toneMapping=Ii;const Je=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),v.setupLightsView(K),ce===!0&&xe.setGlobalState(P.clippingPlanes,K),Ft(C,$,K),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ge=0,Dt=V.length;Ge<Dt;Ge++){const kt=V[Ge],jt=kt.object,pn=kt.geometry,Lt=kt.material,Ve=kt.group;if(Lt.side===pi&&jt.layers.test(K.layers)){const Qt=Lt.side;Lt.side=Pn,Lt.needsUpdate=!0,Gt(jt,$,K,pn,Lt,Ve),Lt.side=Qt,Lt.needsUpdate=!0,et=!0}}et===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}P.setRenderTarget(ze),P.setClearColor(W,re),Je!==void 0&&(K.viewport=Je),P.toneMapping=ke}function Ft(C,V,$){const K=V.isScene===!0?V.overrideMaterial:null;for(let G=0,Me=C.length;G<Me;G++){const be=C[G],ze=be.object,ke=be.geometry,Je=K===null?be.material:K,et=be.group;ze.layers.test($.layers)&&Gt(ze,V,$,ke,Je,et)}}function Gt(C,V,$,K,G,Me){C.onBeforeRender(P,V,$,K,G,Me),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(P,V,$,K,C,Me),G.transparent===!0&&G.side===pi&&G.forceSinglePass===!1?(G.side=Pn,G.needsUpdate=!0,P.renderBufferDirect($,V,K,G,C,Me),G.side=vi,G.needsUpdate=!0,P.renderBufferDirect($,V,K,G,C,Me),G.side=pi):P.renderBufferDirect($,V,K,G,C,Me),C.onAfterRender(P,V,$,K,G,Me)}function Yt(C,V,$){V.isScene!==!0&&(V=it);const K=Ke.get(C),G=v.state.lights,Me=v.state.shadowsArray,be=G.state.version,ze=we.getParameters(C,G.state,Me,V,$),ke=we.getProgramCacheKey(ze);let Je=K.programs;K.environment=C.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(C.isMeshStandardMaterial?Y:w).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?V.environmentRotation:C.envMapRotation,Je===void 0&&(C.addEventListener("dispose",xt),Je=new Map,K.programs=Je);let et=Je.get(ke);if(et!==void 0){if(K.currentProgram===et&&K.lightsStateVersion===be)return nn(C,ze),et}else ze.uniforms=we.getUniforms(C),C.onBeforeCompile(ze,P),et=we.acquireProgram(ze,ke),Je.set(ke,et),K.uniforms=ze.uniforms;const Ge=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=xe.uniform),nn(C,ze),K.needsLights=qt(C),K.lightsStateVersion=be,K.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=et,K.uniformsList=null,et}function dn(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Hs.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function nn(C,V){const $=Ke.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function vn(C,V,$,K,G){V.isScene!==!0&&(V=it),L.resetTextureUnits();const Me=V.fog,be=K.isMeshStandardMaterial?V.environment:null,ze=l===null?P.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:Ni,ke=(K.isMeshStandardMaterial?Y:w).get(K.envMap||be),Je=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,et=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!$.morphAttributes.position,Dt=!!$.morphAttributes.normal,kt=!!$.morphAttributes.color;let jt=Ii;K.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(jt=P.toneMapping);const pn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=pn!==void 0?pn.length:0,Ve=Ke.get(K),Qt=v.state.lights;if(ce===!0&&(ve===!0||C!==le)){const Mn=C===le&&K.id===q;xe.setState(K,C,Mn)}let ot=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Qt.state.version||Ve.outputColorSpace!==ze||G.isBatchedMesh&&Ve.batching===!1||!G.isBatchedMesh&&Ve.batching===!0||G.isBatchedMesh&&Ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ve.instancing===!1||!G.isInstancedMesh&&Ve.instancing===!0||G.isSkinnedMesh&&Ve.skinning===!1||!G.isSkinnedMesh&&Ve.skinning===!0||G.isInstancedMesh&&Ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ve.instancingMorph===!1&&G.morphTexture!==null||Ve.envMap!==ke||K.fog===!0&&Ve.fog!==Me||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==xe.numPlanes||Ve.numIntersection!==xe.numIntersection)||Ve.vertexAlphas!==Je||Ve.vertexTangents!==et||Ve.morphTargets!==Ge||Ve.morphNormals!==Dt||Ve.morphColors!==kt||Ve.toneMapping!==jt||Ve.morphTargetsCount!==Lt)&&(ot=!0):(ot=!0,Ve.__version=K.version);let ln=Ve.currentProgram;ot===!0&&(ln=Yt(K,V,G));let kn=!1,xn=!1,Lr=!1;const Wt=ln.getUniforms(),Hn=Ve.uniforms;if(Ye.useProgram(ln.program)&&(kn=!0,xn=!0,Lr=!0),K.id!==q&&(q=K.id,xn=!0),kn||le!==C){qe.reverseDepthBuffer?(Be.copy(C.projectionMatrix),Ff(Be),Bf(Be),Wt.setValue(B,"projectionMatrix",Be)):Wt.setValue(B,"projectionMatrix",C.projectionMatrix),Wt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Mn=Wt.map.cameraPosition;Mn!==void 0&&Mn.setValue(B,tt.setFromMatrixPosition(C.matrixWorld)),qe.logarithmicDepthBuffer&&Wt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Wt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),le!==C&&(le=C,xn=!0,Lr=!0)}if(G.isSkinnedMesh){Wt.setOptional(B,G,"bindMatrix"),Wt.setOptional(B,G,"bindMatrixInverse");const Mn=G.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),Wt.setValue(B,"boneTexture",Mn.boneTexture,L))}G.isBatchedMesh&&(Wt.setOptional(B,G,"batchingTexture"),Wt.setValue(B,"batchingTexture",G._matricesTexture,L),Wt.setOptional(B,G,"batchingIdTexture"),Wt.setValue(B,"batchingIdTexture",G._indirectTexture,L),Wt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Wt.setValue(B,"batchingColorTexture",G._colorsTexture,L));const Si=$.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&We.update(G,$,ln),(xn||Ve.receiveShadow!==G.receiveShadow)&&(Ve.receiveShadow=G.receiveShadow,Wt.setValue(B,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Hn.envMap.value=ke,Hn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(Hn.envMapIntensity.value=V.environmentIntensity),xn&&(Wt.setValue(B,"toneMappingExposure",P.toneMappingExposure),Ve.needsLights&&yi(Hn,Lr),Me&&K.fog===!0&&Te.refreshFogUniforms(Hn,Me),Te.refreshMaterialUniforms(Hn,K,de,te,v.state.transmissionRenderTarget[C.id]),Hs.upload(B,dn(Ve),Hn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Hs.upload(B,dn(Ve),Hn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Wt.setValue(B,"center",G.center),Wt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Wt.setValue(B,"normalMatrix",G.normalMatrix),Wt.setValue(B,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Mn=K.uniformsGroups;for(let Ir=0,ra=Mn.length;Ir<ra;Ir++){const bn=Mn[Ir];k.update(bn,ln),k.bind(bn,ln)}}return ln}function yi(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function qt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(C,V,$){Ke.get(C.texture).__webglTexture=V,Ke.get(C.depthTexture).__webglTexture=$;const K=Ke.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,V){const $=Ke.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){l=C,Z=V,F=$;let K=!0,G=null,Me=!1,be=!1;if(C){const ke=Ke.get(C);if(ke.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(ke.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(ke.__hasExternalTextures)L.rebindTextures(C,Ke.get(C.texture).__webglTexture,Ke.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(ke.__boundDepthTexture!==Ge){if(Ge!==null&&Ke.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const Je=C.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(be=!0);const et=Ke.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[V])?G=et[V][$]:G=et[V],Me=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?G=Ke.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?G=et[$]:G=et,A.copy(C.viewport),R.copy(C.scissor),ae=C.scissorTest}else A.copy(Pe).multiplyScalar(de).floor(),R.copy(Ue).multiplyScalar(de).floor(),ae=at;if(Ye.bindFramebuffer(B.FRAMEBUFFER,G)&&K&&Ye.drawBuffers(C,G),Ye.viewport(A),Ye.scissor(R),Ye.setScissorTest(ae),Me){const ke=Ke.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,$)}else if(be){const ke=Ke.get(C.texture),Je=V||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,$||0,Je)}q=-1},this.readRenderTargetPixels=function(C,V,$,K,G,Me,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(ze=ze[be]),ze){Ye.bindFramebuffer(B.FRAMEBUFFER,ze);try{const ke=C.texture,Je=ke.format,et=ke.type;if(!qe.textureFormatReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-K&&$>=0&&$<=C.height-G&&B.readPixels(V,$,K,G,rt.convert(Je),rt.convert(et),Me)}finally{const ke=l!==null?Ke.get(l).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(C,V,$,K,G,Me,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=Ke.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(ze=ze[be]),ze){const ke=C.texture,Je=ke.format,et=ke.type;if(!qe.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=C.width-K&&$>=0&&$<=C.height-G){Ye.bindFramebuffer(B.FRAMEBUFFER,ze);const Ge=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.bufferData(B.PIXEL_PACK_BUFFER,Me.byteLength,B.STREAM_READ),B.readPixels(V,$,K,G,rt.convert(Je),rt.convert(et),0);const Dt=l!==null?Ke.get(l).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,Dt);const kt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Of(B,kt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ge),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Me),B.deleteBuffer(Ge),B.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,V=null,$=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,C=arguments[1]);const K=Math.pow(2,-$),G=Math.floor(C.image.width*K),Me=Math.floor(C.image.height*K),be=V!==null?V.x:0,ze=V!==null?V.y:0;L.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,be,ze,G,Me),Ye.unbindTexture()},this.copyTextureToTexture=function(C,V,$=null,K=null,G=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1],V=arguments[2],G=arguments[3]||0,$=null);let Me,be,ze,ke,Je,et;$!==null?(Me=$.max.x-$.min.x,be=$.max.y-$.min.y,ze=$.min.x,ke=$.min.y):(Me=C.image.width,be=C.image.height,ze=0,ke=0),K!==null?(Je=K.x,et=K.y):(Je=0,et=0);const Ge=rt.convert(V.format),Dt=rt.convert(V.type);L.setTexture2D(V,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const kt=B.getParameter(B.UNPACK_ROW_LENGTH),jt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),pn=B.getParameter(B.UNPACK_SKIP_PIXELS),Lt=B.getParameter(B.UNPACK_SKIP_ROWS),Ve=B.getParameter(B.UNPACK_SKIP_IMAGES),Qt=C.isCompressedTexture?C.mipmaps[G]:C.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,Qt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ze),B.pixelStorei(B.UNPACK_SKIP_ROWS,ke),C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,G,Je,et,Me,be,Ge,Dt,Qt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,G,Je,et,Qt.width,Qt.height,Ge,Qt.data):B.texSubImage2D(B.TEXTURE_2D,G,Je,et,Me,be,Ge,Dt,Qt),B.pixelStorei(B.UNPACK_ROW_LENGTH,kt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,jt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,pn),B.pixelStorei(B.UNPACK_SKIP_ROWS,Lt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ve),G===0&&V.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$=null,K=null,G=0){C.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,K=arguments[1]||null,C=arguments[2],V=arguments[3],G=arguments[4]||0);let Me,be,ze,ke,Je,et,Ge,Dt,kt;const jt=C.isCompressedTexture?C.mipmaps[G]:C.image;$!==null?(Me=$.max.x-$.min.x,be=$.max.y-$.min.y,ze=$.max.z-$.min.z,ke=$.min.x,Je=$.min.y,et=$.min.z):(Me=jt.width,be=jt.height,ze=jt.depth,ke=0,Je=0,et=0),K!==null?(Ge=K.x,Dt=K.y,kt=K.z):(Ge=0,Dt=0,kt=0);const pn=rt.convert(V.format),Lt=rt.convert(V.type);let Ve;if(V.isData3DTexture)L.setTexture3D(V,0),Ve=B.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)L.setTexture2DArray(V,0),Ve=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,V.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,V.unpackAlignment);const Qt=B.getParameter(B.UNPACK_ROW_LENGTH),ot=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ln=B.getParameter(B.UNPACK_SKIP_PIXELS),kn=B.getParameter(B.UNPACK_SKIP_ROWS),xn=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,jt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,jt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,Je),B.pixelStorei(B.UNPACK_SKIP_IMAGES,et),C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Ve,G,Ge,Dt,kt,Me,be,ze,pn,Lt,jt.data):V.isCompressedArrayTexture?B.compressedTexSubImage3D(Ve,G,Ge,Dt,kt,Me,be,ze,pn,jt.data):B.texSubImage3D(Ve,G,Ge,Dt,kt,Me,be,ze,pn,Lt,jt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ot),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,kn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xn),G===0&&V.generateMipmaps&&B.generateMipmap(Ve),Ye.unbindTexture()},this.initRenderTarget=function(C){Ke.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ye.unbindTexture()},this.resetState=function(){Z=0,F=0,l=null,Ye.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tl?"display-p3":"srgb",t.unpackColorSpace=Nt.workingColorSpace===Js?"display-p3":"srgb"}}class Vs extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Gs extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ks=new j,$s=new j,dc=new zt,jr=new ea,Ps=new ns,$a=new j,pc=new j;class qg extends $t{constructor(e=new zn,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Ks.fromBufferAttribute(t,r-1),$s.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ks.distanceTo($s);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=a,e.ray.intersectsSphere(Ps)===!1)return;dc.copy(r).invert(),jr.copy(e.ray).applyMatrix4(dc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,_=n.index,x=n.attributes.position;if(_!==null){const S=Math.max(0,c.start),E=Math.min(_.count,c.start+c.count);for(let b=S,v=E-1;b<v;b+=d){const p=_.getX(b),I=_.getX(b+1),P=Ds(this,e,jr,h,p,I);P&&t.push(P)}if(this.isLineLoop){const b=_.getX(E-1),v=_.getX(S),p=Ds(this,e,jr,h,b,v);p&&t.push(p)}}else{const S=Math.max(0,c.start),E=Math.min(x.count,c.start+c.count);for(let b=S,v=E-1;b<v;b+=d){const p=Ds(this,e,jr,h,b,b+1);p&&t.push(p)}if(this.isLineLoop){const b=Ds(this,e,jr,h,E-1,S);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function Ds(i,e,t,n,r,a){const c=i.geometry.attributes.position;if(Ks.fromBufferAttribute(c,r),$s.fromBufferAttribute(c,a),t.distanceSqToSegment(Ks,$s,$a,pc)>n)return;$a.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo($a);if(!(h<e.near||h>e.far))return{distance:h,point:pc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const mc=new j,gc=new j;class _c extends qg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)mc.fromBufferAttribute(t,r),gc.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mc.distanceTo(gc);e.setAttribute("lineDistance",new hn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $r extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vc=new zt,Go=new ea,Ls=new ns,Is=new j;class Za extends $t{constructor(e=new zn,t=new $r){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,c=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(r),Ls.radius+=a,e.ray.intersectsSphere(Ls)===!1)return;vc.copy(r).invert(),Go.copy(e.ray).applyMatrix4(vc);const u=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=n.index,g=n.attributes.position;if(d!==null){const x=Math.max(0,c.start),S=Math.min(d.count,c.start+c.count);for(let E=x,b=S;E<b;E++){const v=d.getX(E);Is.fromBufferAttribute(g,v),xc(Is,v,h,r,e,t,this)}}else{const x=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let E=x,b=S;E<b;E++)Is.fromBufferAttribute(g,E),xc(Is,E,h,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const u=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}}function xc(i,e,t,n,r,a,c){const u=Go.distanceSqToPoint(i);if(u<t){const h=new j;Go.closestPointToPoint(i,h),h.applyMatrix4(n);const d=r.ray.origin.distanceTo(h);if(d<r.near||d>r.far)return;a.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Yg extends sn{constructor(e,t,n,r,a,c,u,h,d){super(e,t,n,r,a,c,u,h,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sl extends ii{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new _t(16777215),this.specular=new _t(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kg extends ii{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}const Zs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $g{constructor(e,t,n){const r=this;let a=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(_){u++,a===!1&&r.onStart!==void 0&&r.onStart(_,c,u),a=!0},this.itemEnd=function(_){c++,r.onProgress!==void 0&&r.onProgress(_,c,u),c===u&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(_){r.onError!==void 0&&r.onError(_)},this.resolveURL=function(_){return h?h(_):_},this.setURLModifier=function(_){return h=_,this},this.addHandler=function(_,g){return d.push(_,g),this},this.removeHandler=function(_){const g=d.indexOf(_);return g!==-1&&d.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=d.length;g<x;g+=2){const S=d[g],E=d[g+1];if(S.global&&(S.lastIndex=0),S.test(_))return E}return null}}}const hu=new $g;class Dr{constructor(e){this.manager=e!==void 0?e:hu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class Zg extends Error{constructor(e,t){super(e),this.response=t}}class du extends Dr{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Zs.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:n,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:n,onError:r});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const _=hi[e],g=d.body.getReader(),x=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),S=x?parseInt(x):0,E=S!==0;let b=0;const v=new ReadableStream({start(p){I();function I(){g.read().then(({done:P,value:N})=>{if(P)p.close();else{b+=N.byteLength;const Z=new ProgressEvent("progress",{lengthComputable:E,loaded:b,total:S});for(let F=0,l=_.length;F<l;F++){const q=_[F];q.onProgress&&q.onProgress(Z)}p.enqueue(N),I()}},P=>{p.error(P)})}}});return new Response(v)}else throw new Zg(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(_=>new DOMParser().parseFromString(_,u));case"json":return d.json();default:if(u===void 0)return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),x=g&&g[1]?g[1].toLowerCase():void 0,S=new TextDecoder(x);return d.arrayBuffer().then(E=>S.decode(E))}}}).then(d=>{Zs.add(e,d);const _=hi[e];delete hi[e];for(let g=0,x=_.length;g<x;g++){const S=_[g];S.onLoad&&S.onLoad(d)}}).catch(d=>{const _=hi[e];if(_===void 0)throw this.manager.itemError(e),d;delete hi[e];for(let g=0,x=_.length;g<x;g++){const S=_[g];S.onError&&S.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Qg extends Dr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=Zs.get(e);if(c!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c;const u=Jr("img");function h(){_(),Zs.add(e,this),t&&t(this),a.manager.itemEnd(e)}function d(g){_(),r&&r(g),a.manager.itemError(e),a.manager.itemEnd(e)}function _(){u.removeEventListener("load",h,!1),u.removeEventListener("error",d,!1)}return u.addEventListener("load",h,!1),u.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(u.crossOrigin=this.crossOrigin),a.manager.itemStart(e),u.src=e,u}}class Jg extends Dr{constructor(e){super(e)}load(e,t,n,r){const a=new sn,c=new Qg(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(u){a.image=u,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class pu extends $t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Qa=new zt,Mc=new j,yc=new j;class e_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new il,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Mc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mc),yc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yc),t.updateMatrixWorld(),Qa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new zt,qr=new j,Ja=new j;class t_ extends e_{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new Bt(2,1,1,1),new Bt(0,1,1,1),new Bt(3,1,1,1),new Bt(1,1,1,1),new Bt(3,0,1,1),new Bt(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),qr.setFromMatrixPosition(e.matrixWorld),n.position.copy(qr),Ja.copy(n.position),Ja.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ja),n.updateMatrixWorld(),r.makeTranslation(-qr.x,-qr.y,-qr.z),Sc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sc)}}class Ec extends pu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new t_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class mu extends pu{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class n_{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class gu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tc(){return performance.now()}const bc=new zt;class i_{constructor(e,t,n=0,r=1/0){this.ray=new ea(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new nl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return bc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(bc),this}intersectObject(e,t=!0,n=[]){return Wo(e,this,n,t),n.sort(Ac),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)Wo(e[r],this,n,t);return n.sort(Ac),n}}function Ac(i,e){return i.distance-e.distance}function Wo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const a=i.children;for(let c=0,u=a.length;c<u;c++)Wo(a[c],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);const r_=/^[og]\s*(.+)?/,s_=/^mtllib /,a_=/^usemtl /,o_=/^usemap /,wc=/\s+/,Cc=new j,eo=new j,Rc=new j,Pc=new j,Fn=new j,Ns=new _t;function l_(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,a){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:r||"",mtllib:Array.isArray(a)&&a.length>0?a[a.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const a=this.currentMaterial();if(a&&a.groupEnd===-1&&(a.groupEnd=this.geometry.vertices.length/3,a.groupCount=a.groupEnd-a.groupStart,a.inherited=!1),r&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),a}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,a=this.object.geometry.vertices;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,a=this.object.geometry.normals;a.push(r[e+0],r[e+1],r[e+2]),a.push(r[t+0],r[t+1],r[t+2]),a.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,a=this.object.geometry.normals;Cc.fromArray(r,e),eo.fromArray(r,t),Rc.fromArray(r,n),Fn.subVectors(Rc,eo),Pc.subVectors(Cc,eo),Fn.cross(Pc),Fn.normalize(),a.push(Fn.x,Fn.y,Fn.z),a.push(Fn.x,Fn.y,Fn.z),a.push(Fn.x,Fn.y,Fn.z)},addColor:function(e,t,n){const r=this.colors,a=this.object.geometry.colors;r[e]!==void 0&&a.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&a.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&a.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,a=this.object.geometry.uvs;a.push(r[e+0],r[e+1]),a.push(r[t+0],r[t+1]),a.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,a,c,u,h,d){const _=this.vertices.length;let g=this.parseVertexIndex(e,_),x=this.parseVertexIndex(t,_),S=this.parseVertexIndex(n,_);if(this.addVertex(g,x,S),this.addColor(g,x,S),u!==void 0&&u!==""){const E=this.normals.length;g=this.parseNormalIndex(u,E),x=this.parseNormalIndex(h,E),S=this.parseNormalIndex(d,E),this.addNormal(g,x,S)}else this.addFaceNormal(g,x,S);if(r!==void 0&&r!==""){const E=this.uvs.length;g=this.parseUVIndex(r,E),x=this.parseUVIndex(a,E),S=this.parseUVIndex(c,E),this.addUV(g,x,S),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const a=this.parseVertexIndex(e[n],t);this.addVertexPoint(a),this.addColor(a)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let a=0,c=e.length;a<c;a++)this.addVertexLine(this.parseVertexIndex(e[a],n));for(let a=0,c=t.length;a<c;a++)this.addUVLine(this.parseUVIndex(t[a],r))}};return i.startObject("",!1),i}class Zr extends Dr{constructor(e){super(e),this.materials=null}load(e,t,n,r){const a=this,c=new du(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(a.parse(u))}catch(h){r?r(h):console.error(h),a.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new l_;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let u=0,h=n.length;u<h;u++){const d=n[u].trimStart();if(d.length===0)continue;const _=d.charAt(0);if(_!=="#")if(_==="v"){const g=d.split(wc);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Ns.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),En),t.colors.push(Ns.r,Ns.g,Ns.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(_==="f"){const x=d.slice(1).trim().split(wc),S=[];for(let b=0,v=x.length;b<v;b++){const p=x[b];if(p.length>0){const I=p.split("/");S.push(I)}}const E=S[0];for(let b=1,v=S.length-1;b<v;b++){const p=S[b],I=S[b+1];t.addFace(E[0],p[0],I[0],E[1],p[1],I[1],E[2],p[2],I[2])}}else if(_==="l"){const g=d.substring(1).trim().split(" ");let x=[];const S=[];if(d.indexOf("/")===-1)x=g;else for(let E=0,b=g.length;E<b;E++){const v=g[E].split("/");v[0]!==""&&x.push(v[0]),v[1]!==""&&S.push(v[1])}t.addLineGeometry(x,S)}else if(_==="p"){const x=d.slice(1).trim().split(" ");t.addPointGeometry(x)}else if((r=r_.exec(d))!==null){const g=(" "+r[0].slice(1).trim()).slice(1);t.startObject(g)}else if(a_.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(s_.test(d))t.materialLibraries.push(d.substring(7).trim());else if(o_.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(_==="s"){if(r=d.split(" "),r.length>1){const x=r[1].trim().toLowerCase();t.object.smooth=x!=="0"&&x!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const a=new Kr;if(a.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const d=t.objects[u],_=d.geometry,g=d.materials,x=_.type==="Line",S=_.type==="Points";let E=!1;if(_.vertices.length===0)continue;const b=new zn;b.setAttribute("position",new hn(_.vertices,3)),_.normals.length>0&&b.setAttribute("normal",new hn(_.normals,3)),_.colors.length>0&&(E=!0,b.setAttribute("color",new hn(_.colors,3))),_.hasUVIndices===!0&&b.setAttribute("uv",new hn(_.uvs,2));const v=[];for(let I=0,P=g.length;I<P;I++){const N=g[I],Z=N.name+"_"+N.smooth+"_"+E;let F=t.materials[Z];if(this.materials!==null){if(F=this.materials.create(N.name),x&&F&&!(F instanceof Gs)){const l=new Gs;ii.prototype.copy.call(l,F),l.color.copy(F.color),F=l}else if(S&&F&&!(F instanceof $r)){const l=new $r({size:10,sizeAttenuation:!1});ii.prototype.copy.call(l,F),l.color.copy(F.color),l.map=F.map,F=l}}F===void 0&&(x?F=new Gs:S?F=new $r({size:1,sizeAttenuation:!1}):F=new sl,F.name=N.name,F.flatShading=!N.smooth,F.vertexColors=E,t.materials[Z]=F),v.push(F)}let p;if(v.length>1){for(let I=0,P=g.length;I<P;I++){const N=g[I];b.addGroup(N.groupStart,N.groupCount,I)}x?p=new _c(b,v):S?p=new Za(b,v):p=new Tn(b,v)}else x?p=new _c(b,v[0]):S?p=new Za(b,v[0]):p=new Tn(b,v[0]);p.name=d.name,a.add(p)}else if(t.vertices.length>0){const u=new $r({size:1,sizeAttenuation:!1}),h=new zn;h.setAttribute("position",new hn(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new hn(t.colors,3)),u.vertexColors=!0);const d=new Za(h,u);a.add(d)}return a}}const c_="/Website24/assets/AW-DX7SKf8T.obj";(function(){var e,t,n,r,a=100,c=100,u,h,d,_=!1,g,x,S,E=new Kg,b=new sl({color:new _t(2292516),transparent:!0,opacity:.5});v(),l();function v(){e=new Vs,t=document.getElementById("3dlogo"),d=new gu,d.autoStart=!1,N(),p(),P(),I(),t.appendChild(r.domElement)}document.getElementById("3dlogo").onclick=function(){path="/",window.location.href=path},document.getElementById("3dlogo").onmouseover=function(){d.start(),_=!0,Cn("html,header").css("cursor","pointer")},document.getElementById("3dlogo").onmouseout=function(){h.children[0].material=E,d.stop(),_=!1,Cn("html,header").css("cursor","default")};function p(){g=10,n=new ta(a/-g,a/g,c/g,c/-g,-10,20),n.position.set(0,0,5),n.lookAt(e.position)}function I(){r=new fu({antialias:!0,alpha:!0}),r.setSize(a,c)}function P(){var q=new mu(16777215);e.add(q)}function N(){var q=new Zr;q.load(c_,function(le,A){u=new $t,le.children[0].material=E,h=le,h.scale.x=h.scale.y=h.scale.z=20,h.translation=le.center,h.material=E,u.add(h),e.add(h)})}function Z(){h&&(h.rotation.y-=.01)}function F(){x=d.getElapsedTime()%1,S=Math.floor(x/.1),S%2==0?h.children[0].material=b:h.children[0].material=E}function l(){requestAnimationFrame(l),Z(),r.render(e,n),_==!0&&F()}})();function Xo(){return Xo=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},Xo.apply(this,arguments)}var u_={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(i){},onComplete:function(i){},preStringTyped:function(i,e){},onStringTyped:function(i,e){},onLastStringBackspaced:function(i){},onTypingPaused:function(i,e){},onTypingResumed:function(i,e){},onReset:function(i){},onStop:function(i,e){},onStart:function(i,e){},onDestroy:function(i){}},f_=new(function(){function i(){}var e=i.prototype;return e.load=function(t,n,r){if(t.el=typeof r=="string"?document.querySelector(r):r,t.options=Xo({},u_,n),t.isInput=t.el.tagName.toLowerCase()==="input",t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(d){return d.trim()}),t.stringsElement=typeof t.options.stringsElement=="string"?document.querySelector(t.options.stringsElement):t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.cssText="clip: rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;";var a=Array.prototype.slice.apply(t.stringsElement.children),c=a.length;if(c)for(var u=0;u<c;u+=1)t.strings.push(a[u].innerHTML.trim())}for(var h in t.strPos=0,t.currentElContent=this.getCurrentElContent(t),t.currentElContent&&t.currentElContent.length>0&&(t.strPos=t.currentElContent.length-1,t.strings.unshift(t.currentElContent)),t.sequence=[],t.strings)t.sequence[h]=h;t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.autoInsertCss=t.options.autoInsertCss,t.autoInsertCss&&(this.appendCursorAnimationCss(t),this.appendFadeOutAnimationCss(t))},e.getCurrentElContent=function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:t.contentType==="html"?t.el.innerHTML:t.el.textContent},e.appendCursorAnimationCss=function(t){var n="data-typed-js-cursor-css";if(t.showCursor&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `,document.body.appendChild(r)}},e.appendFadeOutAnimationCss=function(t){var n="data-typed-fadeout-js-css";if(t.fadeOut&&!document.querySelector("["+n+"]")){var r=document.createElement("style");r.setAttribute(n,"true"),r.innerHTML=`
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `,document.body.appendChild(r)}},i}()),Dc=new(function(){function i(){}var e=i.prototype;return e.typeHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var a=t.substring(n).charAt(0);if(a==="<"||a==="&"){var c;for(c=a==="<"?">":";";t.substring(n+1).charAt(0)!==c&&!(1+ ++n>t.length););n++}return n},e.backSpaceHtmlChars=function(t,n,r){if(r.contentType!=="html")return n;var a=t.substring(n).charAt(0);if(a===">"||a===";"){var c;for(c=a===">"?"<":"&";t.substring(n-1).charAt(0)!==c&&!(--n<0););n--}return n},i}()),h_=function(){function i(t,n){f_.load(this,n,t),this.begin()}var e=i.prototype;return e.toggle=function(){this.pause.status?this.start():this.stop()},e.stop=function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))},e.start=function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))},e.destroy=function(){this.reset(!1),this.options.onDestroy(this)},e.reset=function(t){t===void 0&&(t=!0),clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())},e.begin=function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.strPos===0?t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos):t.backspace(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)},e.typewrite=function(t,n){var r=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var a=this.humanizer(this.typeSpeed),c=1;this.pause.status!==!0?this.timeout=setTimeout(function(){n=Dc.typeHtmlChars(t,n,r);var u=0,h=t.substring(n);if(h.charAt(0)==="^"&&/^\^\d+/.test(h)){var d=1;d+=(h=/\d+/.exec(h)[0]).length,u=parseInt(h),r.temporaryPause=!0,r.options.onTypingPaused(r.arrayPos,r),t=t.substring(0,n)+t.substring(n+d),r.toggleBlinking(!0)}if(h.charAt(0)==="`"){for(;t.substring(n+c).charAt(0)!=="`"&&(c++,!(n+c>t.length)););var _=t.substring(0,n),g=t.substring(_.length+1,n+c),x=t.substring(n+c+1);t=_+g+x,c--}r.timeout=setTimeout(function(){r.toggleBlinking(!1),n>=t.length?r.doneTyping(t,n):r.keepTyping(t,n,c),r.temporaryPause&&(r.temporaryPause=!1,r.options.onTypingResumed(r.arrayPos,r))},u)},a):this.setPauseStatus(t,n,!0)},e.keepTyping=function(t,n,r){n===0&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this));var a=t.substring(0,n+=r);this.replaceText(a),this.typewrite(t,n)},e.doneTyping=function(t,n){var r=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),this.loop===!1||this.curLoop===this.loopCount)||(this.timeout=setTimeout(function(){r.backspace(t,n)},this.backDelay))},e.backspace=function(t,n){var r=this;if(this.pause.status!==!0){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var a=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){n=Dc.backSpaceHtmlChars(t,n,r);var c=t.substring(0,n);if(r.replaceText(c),r.smartBackspace){var u=r.strings[r.arrayPos+1];r.stopNum=u&&c===u.substring(0,n)?n:0}n>r.stopNum?(n--,r.backspace(t,n)):n<=r.stopNum&&(r.arrayPos++,r.arrayPos===r.strings.length?(r.arrayPos=0,r.options.onLastStringBackspaced(),r.shuffleStringsIfNeeded(),r.begin()):r.typewrite(r.strings[r.sequence[r.arrayPos]],n))},a)}else this.setPauseStatus(t,n,!1)},e.complete=function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0},e.setPauseStatus=function(t,n,r){this.pause.typewrite=r,this.pause.curString=t,this.pause.curStrPos=n},e.toggleBlinking=function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))},e.humanizer=function(t){return Math.round(Math.random()*t/2)+t},e.shuffleStringsIfNeeded=function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))},e.initFadeOut=function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)},e.replaceText=function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:this.contentType==="html"?this.el.innerHTML=t:this.el.textContent=t},e.bindFocusEvents=function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(n){t.stop()}),this.el.addEventListener("blur",function(n){t.el.value&&t.el.value.length!==0||t.start()}))},e.insertCursor=function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))},i}(),d_={strings:["Interactive Media","Sound Design","Game Design","Composition","Visual Art"],startDelay:1e3,loop:!0,typeSpeed:100,backSpeed:20,backDelay:1500,smartBackspace:!0};new h_(".typing",d_);const Lc=new j,p_=new Rr,Ic=new j;class mr extends $t{constructor(e=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this}}const Jn=new zt,m_=new zt;class g_{constructor(e={}){const t=this;let n,r,a,c;const u={camera:{style:""},objects:new WeakMap},h=e.element!==void 0?e.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const d=document.createElement("div");d.style.transformOrigin="0 0",d.style.pointerEvents="none",h.appendChild(d);const _=document.createElement("div");_.style.transformStyle="preserve-3d",d.appendChild(_),this.getSize=function(){return{width:n,height:r}},this.render=function(v,p){const I=p.projectionMatrix.elements[5]*c;p.view&&p.view.enabled?(d.style.transform=`translate( ${-p.view.offsetX*(n/p.view.width)}px, ${-p.view.offsetY*(r/p.view.height)}px )`,d.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):d.style.transform="",v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let P,N;p.isOrthographicCamera&&(P=-(p.right+p.left)/2,N=(p.top+p.bottom)/2);const Z=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,F=p.isOrthographicCamera?`scale( ${Z} )scale(`+I+")translate("+g(P)+"px,"+g(N)+"px)"+x(p.matrixWorldInverse):`scale( ${Z} )translateZ(`+I+"px)"+x(p.matrixWorldInverse),q=(p.isPerspectiveCamera?"perspective("+I+"px) ":"")+F+"translate("+a+"px,"+c+"px)";u.camera.style!==q&&(_.style.transform=q,u.camera.style=q),b(v,v,p)},this.setSize=function(v,p){n=v,r=p,a=n/2,c=r/2,h.style.width=v+"px",h.style.height=p+"px",d.style.width=v+"px",d.style.height=p+"px",_.style.width=v+"px",_.style.height=p+"px"};function g(v){return Math.abs(v)<1e-10?0:v}function x(v){const p=v.elements;return"matrix3d("+g(p[0])+","+g(-p[1])+","+g(p[2])+","+g(p[3])+","+g(p[4])+","+g(-p[5])+","+g(p[6])+","+g(p[7])+","+g(p[8])+","+g(-p[9])+","+g(p[10])+","+g(p[11])+","+g(p[12])+","+g(-p[13])+","+g(p[14])+","+g(p[15])+")"}function S(v){const p=v.elements;return"translate(-50%,-50%)"+("matrix3d("+g(p[0])+","+g(p[1])+","+g(p[2])+","+g(p[3])+","+g(-p[4])+","+g(-p[5])+","+g(-p[6])+","+g(-p[7])+","+g(p[8])+","+g(p[9])+","+g(p[10])+","+g(p[11])+","+g(p[12])+","+g(p[13])+","+g(p[14])+","+g(p[15])+")")}function E(v){v.isCSS3DObject&&(v.element.style.display="none");for(let p=0,I=v.children.length;p<I;p++)E(v.children[p])}function b(v,p,I,P){if(v.visible===!1){E(v);return}if(v.isCSS3DObject){const N=v.layers.test(I.layers)===!0,Z=v.element;if(Z.style.display=N===!0?"":"none",N===!0){v.onBeforeRender(t,p,I);let F;v.isCSS3DSprite?(Jn.copy(I.matrixWorldInverse),Jn.transpose(),v.rotation2D!==0&&Jn.multiply(m_.makeRotationZ(v.rotation2D)),v.matrixWorld.decompose(Lc,p_,Ic),Jn.setPosition(Lc),Jn.scale(Ic),Jn.elements[3]=0,Jn.elements[7]=0,Jn.elements[11]=0,Jn.elements[15]=1,F=S(Jn)):F=S(v.matrixWorld);const l=u.objects.get(v);if(l===void 0||l.style!==F){Z.style.transform=F;const q={style:F};u.objects.set(v,q)}Z.parentNode!==_&&_.appendChild(Z),v.onAfterRender(t,p,I)}}for(let N=0,Z=v.children.length;N<Z;N++)b(v.children[N],p,I)}}}class to extends Dr{constructor(e){super(e)}load(e,t,n,r){const a=this,c=this.path===""?n_.extractUrlBase(e):this.path,u=new du(this.manager);u.setPath(this.path),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(h){try{t(a.parse(h,c))}catch(d){r?r(d):console.error(d),a.manager.itemError(e)}},n,r)}setMaterialOptions(e){return this.materialOptions=e,this}parse(e,t){const n=e.split(`
`);let r={};const a=/\s+/,c={};for(let h=0;h<n.length;h++){let d=n[h];if(d=d.trim(),d.length===0||d.charAt(0)==="#")continue;const _=d.indexOf(" ");let g=_>=0?d.substring(0,_):d;g=g.toLowerCase();let x=_>=0?d.substring(_+1):"";if(x=x.trim(),g==="newmtl")r={name:x},c[x]=r;else if(g==="ka"||g==="kd"||g==="ks"||g==="ke"){const S=x.split(a,3);r[g]=[parseFloat(S[0]),parseFloat(S[1]),parseFloat(S[2])]}else r[g]=x}const u=new __(this.resourcePath||t,this.materialOptions);return u.setCrossOrigin(this.crossOrigin),u.setManager(this.manager),u.setMaterials(c),u}}class __{constructor(e="",t={}){this.baseUrl=e,this.options=t,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:vi,this.wrap=this.options.wrap!==void 0?this.options.wrap:Ws}setCrossOrigin(e){return this.crossOrigin=e,this}setManager(e){this.manager=e}setMaterials(e){this.materialsInfo=this.convert(e),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(e){if(!this.options)return e;const t={};for(const n in e){const r=e[n],a={};t[n]=a;for(const c in r){let u=!0,h=r[c];const d=c.toLowerCase();switch(d){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(h=[h[0]/255,h[1]/255,h[2]/255]),this.options&&this.options.ignoreZeroRGBs&&h[0]===0&&h[1]===0&&h[2]===0&&(u=!1);break}u&&(a[d]=h)}}return t}preload(){for(const e in this.materialsInfo)this.create(e)}getIndex(e){return this.nameLookup[e]}getAsArray(){let e=0;for(const t in this.materialsInfo)this.materialsArray[e]=this.create(t),this.nameLookup[t]=e,e++;return this.materialsArray}create(e){return this.materials[e]===void 0&&this.createMaterial_(e),this.materials[e]}createMaterial_(e){const t=this,n=this.materialsInfo[e],r={name:e,side:this.side};function a(u,h){return typeof h!="string"||h===""?"":/^https?:\/\//i.test(h)?h:u+h}function c(u,h){if(r[u])return;const d=t.getTextureParams(h,r),_=t.loadTexture(a(t.baseUrl,d.url));_.repeat.copy(d.scale),_.offset.copy(d.offset),_.wrapS=t.wrap,_.wrapT=t.wrap,(u==="map"||u==="emissiveMap")&&(_.colorSpace=En),r[u]=_}for(const u in n){const h=n[u];let d;if(h!=="")switch(u.toLowerCase()){case"kd":r.color=Nt.toWorkingColorSpace(new _t().fromArray(h),En);break;case"ks":r.specular=Nt.toWorkingColorSpace(new _t().fromArray(h),En);break;case"ke":r.emissive=Nt.toWorkingColorSpace(new _t().fromArray(h),En);break;case"map_kd":c("map",h);break;case"map_ks":c("specularMap",h);break;case"map_ke":c("emissiveMap",h);break;case"norm":c("normalMap",h);break;case"map_bump":case"bump":c("bumpMap",h);break;case"map_d":c("alphaMap",h),r.transparent=!0;break;case"ns":r.shininess=parseFloat(h);break;case"d":d=parseFloat(h),d<1&&(r.opacity=d,r.transparent=!0);break;case"tr":d=parseFloat(h),this.options&&this.options.invertTrProperty&&(d=1-d),d>0&&(r.opacity=1-d,r.transparent=!0);break}}return this.materials[e]=new sl(r),this.materials[e]}getTextureParams(e,t){const n={scale:new Et(1,1),offset:new Et(0,0)},r=e.split(/\s+/);let a;return a=r.indexOf("-bm"),a>=0&&(t.bumpScale=parseFloat(r[a+1]),r.splice(a,2)),a=r.indexOf("-s"),a>=0&&(n.scale.set(parseFloat(r[a+1]),parseFloat(r[a+2])),r.splice(a,4)),a=r.indexOf("-o"),a>=0&&(n.offset.set(parseFloat(r[a+1]),parseFloat(r[a+2])),r.splice(a,4)),n.url=r.join(" ").trim(),n}loadTexture(e,t,n,r,a){const c=this.manager!==void 0?this.manager:hu;let u=c.getHandler(e);u===null&&(u=new Jg(c)),u.setCrossOrigin&&u.setCrossOrigin(this.crossOrigin);const h=u.load(e,n,r,a);return t!==void 0&&(h.mapping=t),h}}class ia{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const v_=new ta(-1,1,1,-1,0,1);class x_ extends zn{constructor(){super(),this.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new hn([0,2,0,0,2,0],2))}}const M_=new x_;class y_{constructor(e){this._mesh=new Tn(M_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,v_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class S_ extends ia{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new _t}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=r}}class gr extends ia{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof ri?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=nu.clone(e.uniforms),this.material=new ri({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new y_(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const E_={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Nc extends ia{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,c,4294967295),a.buffers.stencil.setClear(u),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class T_ extends ia{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class b_{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Et);this._width=n.width,this._height=n.height,t=new Mi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wr}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gr(E_),this.copyPass.material.blending=_i,this.clock=new gu}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const c=this.passes[r];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),c.needsSwap){if(n){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Nc!==void 0&&(c instanceof Nc?n=!0:c instanceof T_&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const A_="data:model/obj;base64,IyBCbGVuZGVyIHYyLjc5IChzdWIgMCkgT0JKIEZpbGU6ICd5ZWxsb3dUVi5ibGVuZCcNCiMgd3d3LmJsZW5kZXIub3JnDQptdGxsaWIgeWVsbG93dHZzY3JlZW4ubXRsDQpvIHNjcmVlbl9TY3JlZW5fdGVsZXZpc2lvbi4wMDENCnYgMjAuNjcwNDY5IDkuNTMwOTkwIDI0LjgyODcyNA0KdiAyMC42NzA0NjkgNTcuNTQ5MzM1IDI0LjgyODczMg0KdiAxNi40NTM2NDYgNTQuMjExNjEzIDI1LjU1ODQ2NA0KdiAxNi40NTM2NDYgMTIuODY4NjcyIDI1LjU1ODQ1Ng0KdiAtMzkuOTk1NzYyIDkuNTMwOTkwIDI0LjgyODcyNA0KdiAtMzUuNzc4ODk2IDEyLjg2ODY3MiAyNS41NTg0NTYNCnYgLTQ1LjExMTQ2OSA1LjQ4MTc5NSAyMy44NDE4MjQNCnYgMjUuNzg2MjE1IDUuNDgxNzk1IDIzLjg0MTgyNA0KdiAyNS43ODYyMTUgNjEuNTk4NTMwIDIzLjg0MTgzNQ0KdiAtNDUuMTExNDY5IDYxLjU5ODUzMCAyMy44NDE4MzUNCnYgLTM5Ljk5NTc2MiA1Ny41NDkzMzUgMjQuODI4NzMyDQp2IC0zNS43Nzg4OTYgNTQuMjExNjEzIDI1LjU1ODQ2NA0KdiAxMS4yNzE2ODcgNTAuMTEwMDMxIDI2LjM2NjI2OA0KdiAxMS4yNzE2ODcgMTYuOTcwMjYxIDI2LjM2NjI2MQ0KdiAtMzAuNTk2OTc5IDE2Ljk3MDI2MSAyNi4zNjYyNjENCnYgLTMwLjU5Njk3OSA1MC4xMTAwMzEgMjYuMzY2MjY4DQp2IDUuNzk1ODAzIDQ1Ljc3NTc5NSAyNy4xMTI1NzYNCnYgNS43OTU4MDMgMjEuMzA0NTA0IDI3LjExMjU3Mg0KdiAtMjUuMTIxMDk4IDIxLjMwNDUwNCAyNy4xMTI1NzINCnYgLTI1LjEyMTA5OCA0NS43NzU3OTUgMjcuMTEyNTc2DQp2dCAwLjkyNzg0NCAwLjA3MjE1Nw0KdnQgMC45Mjc4NDQgMC45Mjc4NDQNCnZ0IDAuODY4MzY2IDAuODY4MzY2DQp2dCAwLjg2ODM2NiAwLjEzMTYzNQ0KdnQgMC4wNzIxNTcgMC4wNzIxNTcNCnZ0IDAuMTMxNjM0IDAuMTMxNjM1DQp2dCAwLjAwMDAwMCAwLjAwMDAwMA0KdnQgMS4wMDAwMDAgMC4wMDAwMDANCnZ0IDEuMDAwMDAwIDEuMDAwMDAwDQp2dCAwLjAwMDAwMCAxLjAwMDAwMA0KdnQgMC4wNzIxNTcgMC45Mjc4NDQNCnZ0IDAuMTMxNjM0IDAuODY4MzY2DQp2dCAwLjc5NTI3NSAwLjc5NTI3NQ0KdnQgMC43OTUyNzUgMC4yMDQ3MjUNCnZ0IDAuMjA0NzI1IDAuMjA0NzI1DQp2dCAwLjIwNDcyNSAwLjc5NTI3NQ0KdnQgMC43MTgwMzkgMC43MTgwMzkNCnZ0IDAuNzE4MDM5IDAuMjgxOTYxDQp2dCAwLjI4MTk2MSAwLjI4MTk2MQ0KdnQgMC4yODE5NjEgMC43MTgwMzkNCnZuIDAuMDkzMCAtMC4xMTcyIDAuOTg4Nw0Kdm4gMC4wOTMwIDAuMTE3MiAwLjk4ODcNCnZuIDAuMDgzNiAwLjEwNTUgMC45OTA5DQp2biAwLjA4MzYgLTAuMTA1NSAwLjk5MDkNCnZuIC0wLjA5MzAgLTAuMTE3MiAwLjk4ODcNCnZuIC0wLjA4MzYgLTAuMTA1NSAwLjk5MDkNCnZuIC0wLjEwOTQgLTAuMTAyNyAwLjk4ODcNCnZuIDAuMTA5NCAtMC4xMDI3IDAuOTg4Nw0Kdm4gMC4xMDk0IDAuMTAyNyAwLjk4ODcNCnZuIC0wLjEwOTQgMC4xMDI3IDAuOTg4Nw0Kdm4gLTAuMDkzMCAwLjExNzIgMC45ODg3DQp2biAtMC4wODM2IDAuMTA1NSAwLjk5MDkNCnZuIDAuMDc0OCAwLjA5NDggMC45OTI3DQp2biAwLjA3NDggLTAuMDk0OCAwLjk5MjcNCnZuIC0wLjA3NDggLTAuMDk0OCAwLjk5MjcNCnZuIC0wLjA3NDggMC4wOTQ4IDAuOTkyNw0Kdm4gMC4wNDg0IDAuMDY3MSAwLjk5NjYNCnZuIDAuMDQ4NCAtMC4wNjcxIDAuOTk2Ng0Kdm4gLTAuMDQ4NCAtMC4wNjcxIDAuOTk2Ng0Kdm4gLTAuMDQ4NCAwLjA2NzEgMC45OTY2DQp1c2VtdGwgTWF0ZXJpYWwuMDAxDQpzIDENCmYgMS8xLzEgMi8yLzIgMy8zLzMgNC80LzQNCmYgNS81LzUgMS8xLzEgNC80LzQgNi82LzYNCmYgNy83LzcgOC84LzggMS8xLzEgNS81LzUNCmYgOC84LzggOS85LzkgMi8yLzIgMS8xLzENCmYgOS85LzkgMTAvMTAvMTAgMTEvMTEvMTEgMi8yLzINCmYgMTAvMTAvMTAgNy83LzcgNS81LzUgMTEvMTEvMTENCmYgMTEvMTEvMTEgNS81LzUgNi82LzYgMTIvMTIvMTINCmYgMi8yLzIgMTEvMTEvMTEgMTIvMTIvMTIgMy8zLzMNCmYgNC80LzQgMy8zLzMgMTMvMTMvMTMgMTQvMTQvMTQNCmYgNi82LzYgNC80LzQgMTQvMTQvMTQgMTUvMTUvMTUNCmYgMTIvMTIvMTIgNi82LzYgMTUvMTUvMTUgMTYvMTYvMTYNCmYgMy8zLzMgMTIvMTIvMTIgMTYvMTYvMTYgMTMvMTMvMTMNCmYgMTQvMTQvMTQgMTMvMTMvMTMgMTcvMTcvMTcgMTgvMTgvMTgNCmYgMTUvMTUvMTUgMTQvMTQvMTQgMTgvMTgvMTggMTkvMTkvMTkNCmYgMTYvMTYvMTYgMTUvMTUvMTUgMTkvMTkvMTkgMjAvMjAvMjANCmYgMTMvMTMvMTMgMTYvMTYvMTYgMjAvMjAvMjAgMTcvMTcvMTcNCmYgMTcvMTcvMTcgMjAvMjAvMjAgMTkvMTkvMTkgMTgvMTgvMTgNCg==",w_="data:model/mtl;base64,IyBCbGVuZGVyIE1UTCBGaWxlOiAnTm9uZScNCiMgTWF0ZXJpYWwgQ291bnQ6IDINCg0KbmV3bXRsIF8yX19fRGVmYXVsdA0KTnMgMy45MjE1NjkNCkthIDAuNTg4MjAwIDAuNTg4MjAwIDAuNTg4MjAwDQpLZCAwLjU4ODIwMCAwLjU4ODIwMCAwLjU4ODIwMA0KS3MgMC45MDAwMDAgMC45MDAwMDAgMC45MDAwMDANCktlIDAuMDAwMDAwIDAuMDAwMDAwIDAuMDAwMDAwDQpOaSAxLjAwMDAwMA0KZCAxLjAwMDAwMA0KaWxsdW0gMg0KbWFwX0tkIHR4SGFtbWVyLmpwZw0KDQpuZXdtdGwgXzNfX19EZWZhdWx0DQpOcyAzLjkyMTU2OQ0KS2EgMC41ODgyMDAgMC41ODgyMDAgMC41ODgyMDANCktkIDAuNTg4MjAwIDAuNTg4MjAwIDAuNTg4MjAwDQpLcyAwLjkwMDAwMCAwLjkwMDAwMCAwLjkwMDAwMA0KS2UgMC4wMDAwMDAgMC4wMDAwMDAgMC4wMDAwMDANCk5pIDEuMDAwMDAwDQpkIDEuMDAwMDAwDQppbGx1bSAyDQptYXBfS2QgdHhIYW1tZXIuanBnDQo=";(function(){var u,h,e,A,t,n,r,me,a,c,u,h,d,_,g=[],x=[],S=0,E,b=[],v=[],p=[],I=[],P=[],N,Z,F,l,q,le,A,R,ae,W,re,me,te,de,ie=new i_,Se={x:0,y:0},Pe=[],Ue,at=[],vt,ce=[],ve,Be=3,Ne=2,tt=[],je=[],it=[],Rt=[],ct=[],B=[],en=[],ht=!0,qe,Ye=["LET'S GO!","HAVE YOU NO COURAGE?","TIME IS OF THE ESSENCE!","YOU CAN DO IT!"],dt=0,Ke=[],L=0;function w(){for(var oe=-100,Xe=.042*W,Ze=32e-5*W,ft=55e-5*re,Ht=.0135*re,wt=0,Zt=.3,Ft=0;Ft<Ne;Ft++){for(var Gt=.7,Yt=Ht,dn=-.043*W,nn=0;nn<Be;nn++)if(wt<6){var vn=dn,yi=.055*re;Gt-=nn*.7,nn==2&&(Gt=-.7);var qt=ae.children[wt];qt.position.z=oe,qt.position.y=Yt,qt.position.x=vn,qt.rotation.y=Gt,qt.rotation.x=Zt,qt.scale.x=qt.scale.z=Ze,qt.scale.y=ft,R=ce[wt],R.position.z=oe,R.position.y=Yt,R.position.x=vn,R.rotation.y=Gt,R.rotation.x=Zt,R.scale.x=R.scale.z=Ze,R.scale.y=ft;var C=at[wt];C.position.x=vn-W*.002,C.position.y=Yt+re*.045,C.position.z=oe,C.rotation.copy(qt.rotation),C.scale.x=C.scale.y=C.scale.z=.25,vt.add(C),wt+=1,dn+=Xe}Zt-=.3,Ht-=yi}}function Y(){var oe=-100,Xe=.042*W,Ze=32e-5*W,ft=55e-5*re,Ht=.0135*re,wt=.3,Zt=new Zr;Zt.load(A_,function(Ft){ae=new $t,ve=new $t;var Gt=0;Ft.traverse(function(Yt){if(Yt instanceof Tn)for(var dn=0;dn<Ne;dn++){for(var nn=.7,vn=Ht,yi=-.043*W,qt=0;qt<Be;qt++)if(Gt<12){var C=yi,V=.055*re,$;nn-=qt*.7,qt==2&&(nn=-.7);var K=new Tn(Yt.geometry,g[Gt]);K.position.z=oe,K.position.y=vn,K.position.x=C,K.rotation.y=nn,K.rotation.x=wt,K.scale.x=K.scale.z=Ze,K.scale.y=ft,K.userData.id=Gt,Gt<3?K.userData.URL="/work/groupwork":K.userData.URL="/work/solowork",ae.add(K),Gt<3?De(oe,vn,C,nn,wt,Ze,ft):xt(oe,vn,C,nn,wt,Ze,ft),$=at[Gt],$.position.x=C-W*.002,$.position.y=vn+re*.045,$.position.z=oe,$.rotation.copy(K.rotation),$.scale.x=$.scale.y=$.scale.z=.25,vt.add($),Gt+=1,yi+=Xe}wt-=.3,Ht-=V}}),Ee(),c.add(ae)})}Te(),Re();function he(){var oe=document.getElementById("HomeCard1");Ke.push(oe);var Xe=document.getElementById("HomeCard2");Ke.push(Xe);var Ze=document.getElementById("HomeCard3");Ke.push(Ze);var ft=document.getElementById("HomeCard4");Ke.push(ft)}function ge(){var oe=.2;Ue=new g_,Ue.setSize(W,re),vt=new Vs,X(oe),Ue.domElement.style.position="absolute",document.getElementById("tvlayoutcanvas").appendChild(Ue.domElement)}function X(oe){var Xe=document.getElementById("layoutfire1"),Ze=document.getElementById("layoutfire2"),ft=document.getElementById("layoutfire3"),Ht=document.getElementById("layoutfire4"),wt=document.getElementById("layoutfire5"),Zt=document.getElementById("layoutfire6"),Ft=new mr(Xe);Ft.scale.x=Ft.scale.y=Ft.scale.z=oe,vt.add(Ft),at.push(Ft);var Gt=new mr(Ze);at.push(Gt);var Yt=new mr(ft);at.push(Yt);var dn=new mr(Ht);at.push(dn);var nn=new mr(wt);at.push(nn);var vn=new mr(Zt);at.push(vn)}function we(){for(var oe=0;oe<6;oe++){h=new Vs;var Xe=oe+1,Ze=Xe.toString(),ft="layoutcanvas",Ht=ft.concat(Ze),wt=document.getElementById(Ht);wt.style.display="none",wt.width=512,wt.height=512,te=wt.getContext("2d"),de=new Yg(wt),tt[oe]=wt,je[oe]=te,it[oe]=de,me=new Mi(window.innerWidth,window.innerHeight),me.texture=de,console.log("buffertexture",me.texture),r=new b_(e,me),console.log("effecttexture",r.tDiffuse),Rt[oe]=me,ct[oe]=r,t=new Yi({map:de});var Zt=new rs(2,2);A=new Tn(Zt,t),h.add(A),B[oe]=h}}function Te(){Ut(),ge(),e=new fu({antialias:!0,alpha:!0}),n=new Et,n=e.getSize(n),E=document.getElementById("tvlayoutcanvas"),W=Cn(E).width(),re=Cn(E).height(),e.setSize(W,re),E.appendChild(e.domElement),u=new ta(-1,1,1,-1,0,1),we(),a=new In(45,W/re,1,1e3),a.position.z=50,c=new Vs,he(),Mt(),pe(),Y();for(var oe=0;oe<6;oe++)N=new S_(B[oe],u),en[oe]=N;Oe(),se(),document.addEventListener("mousemove",Tt,!1),window.addEventListener("resize",tn,!1),document.addEventListener("mousedown",$e,!1),tn()}function Oe(){for(var oe=0;oe<6;oe++)Z=new gr(void 0),F=new gr(void 0),l=new gr(void 0),q=new gr(void 0),le=new gr(void 0),le.grayscale=0,b.push(Z),v.push(F),p.push(l),I.push(q),P.push(le)}function Tt(oe){var Xe=e.domElement.getBoundingClientRect();if(Se.x=(oe.clientX-Xe.left)/(Xe.width-Xe.left)*2-1,Se.y=-((oe.clientY-Xe.top)/(Xe.bottom-Xe.top))*2+1,new j(oe.clientX/W*2-1,-(oe.clientY/re)*2+1,.5),qe!=null){var Ze=new j(Se.x,Se.y,-80);Ze.unproject(a);var ft=Ze.sub(a.position).normalize(),Ht=-a.position.z/ft.z,wt=a.position.clone().add(ft.multiplyScalar(Ht));qe.position.copy(wt)}}function xe(){for(var oe=0;oe<6;oe++)if(oe==0||oe==5){var Xe=tt[oe],Ze=x[oe];te=je[oe],te.save(),je[oe].drawImage(Ze,0,0,Xe.width,Xe.height),te.scale(1,n.width/n.height)}else{var Xe=tt[oe],Ze=x[oe];Ze.offsetWidth,Ze.offsetHeight,te=je[oe],te.save(),je[oe].drawImage(Ze,0,0,Xe.width,Xe.height),te.scale(1,n.width/n.height)}}function Fe(){for(var oe=0;oe<6;oe++)te=je[oe],te.restore(),it[oe].needsUpdate=!0}function $e(oe){ie.setFromCamera(Se,a);var Xe=ie.intersectObjects(ae.children);if(Xe.length!==0){var Ze=Xe[0].object.userData.URL;window.location.href=Ze}}function We(oe){if(ie.setFromCamera(Se,a),Pe=ie.intersectObjects(ae.children),Pe.length!==0){qe.visible=!0,Cn("html,body").css("cursor","none"),dt=dt%Ye.length;var Xe=Ye[dt];Cn("#layoutfire1").text(Xe),Cn("#layoutfire2").text(Xe),Cn("#layoutfire3").text(Xe),Cn("#layoutfire4").text(Xe),Cn("#layoutfire5").text(Xe),Cn("#layoutfire6").text(Xe),L=L%Ke.length,qe.lookAt(Pe[0].object.position);var Ze=Pe[0].object.userData.id;Ze%3==0&&(qe.rotation.y-=.5),Ze%3==2&&(qe.rotation.y+=.5),ht=!1;for(var ft=0;ft<6;ft++)ft==Ze||(x[ft]=Ke[L])}else Cn("html,body").css("cursor","default"),qe.visible=!1,Ce(),ut(),ht==!1&&(dt+=1,L+=1,ht=!0,bt())}function Ce(){for(var oe=0;oe<6;oe++)F=v[oe],l=p[oe],q=I[oe],le=P[oe],F.enabled=!1,l.enabled=!1,q.enabled=!1,le.enabled=!1}function ut(){for(var oe=0;oe<at.length;oe++)at[oe].element.hidden=!0}function rt(){ae!=null&&qe!=null&&We(event)}function Pt(){for(var oe=0;oe<6;oe++)r=ct[oe],r.swapBuffers()}function k(){for(var oe=0;oe<6;oe++)F=v[oe],l=p[oe],le=P[oe],S+=.01,F.time=S,le.time=S,l.time=S}function Re(){rt(),xe(),k(),Fe(),e.render(c,a),Ue.render(vt,a),requestAnimationFrame(Re),Pt()}function se(){for(var oe=0;oe<6;oe++)r=ct[oe],r.addPass(en[oe]),Z=b[oe],F=v[oe],l=p[oe],q=I[oe],le=P[oe],oe<3&&(r.addPass(le),r.addPass(F),r.addPass(q),r.addPass(l),r.addPass(Z)),oe>=3&&(r.addPass(le),r.addPass(F),r.addPass(q),r.addPass(l),r.addPass(Z))}function pe(){var oe=new mu(16777215);c.add(oe);var Xe=new Ec(16777215,1,2e3);Xe.position.set(-20,15,-50),c.add(Xe);var Xe=new Ec(16777215,1,200);Xe.position.set(-10,-10,10),c.add(Xe)}function Ee(){var oe=new to;oe.load(w_,function(Xe){ve=new $t,Xe.preload();var Ze=new Zr;Ze.setMaterials(Xe),Ze.load("src/models/Hammer03.obj",function(ft,Ht){qe=ft,qe.scale.x=qe.scale.y=qe.scale.z=.15,qe.position.y=-10,qe.position.z=-80,qe.lookAt(ce[1]),c.add(qe),qe.visible=!1})})}function De(oe,Xe,Ze,ft,Ht,wt,Zt){var Ft=new to;Ft.load("src/models/bluetv.mtl",function(Gt){Gt.preload();var Yt=new Zr;Yt.setMaterials(Gt),Yt.load("src/models/bluetv.obj",function(dn,nn){R=dn,R.position.z=oe,R.position.y=Xe,R.position.x=Ze,R.rotation.y=ft,R.rotation.x=Ht,R.scale.x=R.scale.z=wt,R.scale.y=Zt,ce.push(R),c.add(R)})})}function xt(oe,Xe,Ze,ft,Ht,wt,Zt){var Ft=new to;Ft.load("src/models/yellowtv.mtl",function(Gt){ve=new $t,Gt.preload();var Yt=new Zr;Yt.setMaterials(Gt),Yt.load("src/models/yellowtv.obj",function(dn,nn){R=dn,R.position.z=oe,R.position.y=Xe,R.position.x=Ze,R.rotation.y=ft,R.rotation.x=Ht,R.scale.x=R.scale.z=wt,R.scale.y=Zt,ve.add(R),ce.push(R),c.add(R)})})}function bt(){for(var oe=0;oe<6;oe++)if(oe==0){var Xe=document.getElementById("GroupWork"),Ze=new sn(Xe);Ze.minFilter=fn,Ze.magFilter=fn,new Yi({map:Ze}),x[oe]=Xe}else if(oe==3)Xe=document.getElementById("SoloWork"),Ze=new sn(Xe),Ze.minFilter=fn,Ze.magFilter=fn,new Yi({map:Ze}),x[oe]=Xe;else{var ft=oe+1,Ht=ft.toString(),wt="stock",Zt=wt.concat(Ht),Ft=document.getElementById(Zt);Ft.loop=!0,Ft.muted=!0,Ft.paused==!0&&Ft.play(),x[oe]=Ft,d=new sn(Ft),d.minFilter=fn,d.magFilter=fn,new Yi({map:d})}}function Ut(){bt()}function Mt(){for(var oe=0;oe<6;oe++)de=Rt[oe].texture,_=new Yi({map:de}),g[oe]=_}function tn(){W=Cn(E).width(),re=Cn(E).height(),ae!=null&&ce!=null&&w(),e.setSize(W,re),Ue.setSize(W,re),u.aspect=W/re,u.updateProjectionMatrix(),a.aspect=W/re,a.updateProjectionMatrix()}})();
