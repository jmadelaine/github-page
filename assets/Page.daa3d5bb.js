import{r as z,j as $,a as v,S as Se,C as _,R as M,I as Oe,w as Te,g as Ee,b as N,_ as je,c as le,d as X,e as Pe,f as fe,u as Z,h as $e,i as ve,T as G,F as Be,k as me,B as L,l as D,m as ae,A as re,n as Ce,o as Ue}from"./index-966e8661.js";const Ne=({children:e,header:n,footer:s,...l})=>{const h=z.exports.useRef(null);return $(_,{...l,children:[!!n&&v(Se.Top,{css:{zIndex:3},children:n}),v(_,{ref:h,flex:1,css:{...!n&&{paddingTop:"env(safe-area-inset-top)"},...!s&&{paddingBottom:"env(safe-area-inset-bottom)"},minBlockSize:0,zIndex:1},children:e}),!!s&&v(M,{css:{paddingBottom:"env(safe-area-inset-bottom)",zIndex:2},children:s})]})};function ze(e,n){if(e==null)return{};var s={},l=Object.keys(e),h,u;for(u=0;u<l.length;u++)h=l[u],!(n.indexOf(h)>=0)&&(s[h]=e[h]);return s}function xe(e,n){if(e==null)return{};var s=ze(e,n),l,h;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(h=0;h<u.length;h++)l=u[h],!(n.indexOf(l)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,l)||(s[l]=e[l]))}return s}var _e={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Ie=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function he(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},s=e.match(/<\/?([^\s]+?)[/\s>]/);if(s&&(n.name=s[1],(_e[s[1]]||e.charAt(e.length-2)==="/")&&(n.voidElement=!0),n.name.startsWith("!--"))){var l=e.indexOf("-->");return{type:"comment",comment:l!==-1?e.slice(4,l):""}}for(var h=new RegExp(Ie),u=null;(u=h.exec(e))!==null;)if(u[0].trim())if(u[1]){var p=u[1].trim(),o=[p,""];p.indexOf("=")>-1&&(o=p.split("=")),n.attrs[o[0]]=o[1],h.lastIndex--}else u[2]&&(n.attrs[u[2]]=u[3].trim().substring(1,u[3].length-1));return n}var Re=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,Le=/^\s*$/,De=Object.create(null);function we(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(s){var l=[];for(var h in s)l.push(h+'="'+s[h]+'"');return l.length?" "+l.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(we,"")+"</"+n.name+">";case"comment":return e+"<!--"+n.comment+"-->"}}var qe={parse:function(e,n){n||(n={}),n.components||(n.components=De);var s,l=[],h=[],u=-1,p=!1;if(e.indexOf("<")!==0){var o=e.indexOf("<");l.push({type:"text",content:o===-1?e:e.substring(0,o)})}return e.replace(Re,function(c,g){if(p){if(c!=="</"+s.name+">")return;p=!1}var y,f=c.charAt(1)!=="/",w=c.startsWith("<!--"),A=g+c.length,T=e.charAt(A);if(w){var P=he(c);return u<0?(l.push(P),l):((y=h[u]).children.push(P),l)}if(f&&(u++,(s=he(c)).type==="tag"&&n.components[s.name]&&(s.type="component",p=!0),s.voidElement||p||!T||T==="<"||s.children.push({type:"text",content:e.slice(A,e.indexOf("<",A))}),u===0&&l.push(s),(y=h[u-1])&&y.children.push(s),h[u]=s),(!f||s.voidElement)&&(u>-1&&(s.voidElement||s.name===c.slice(2,-1))&&(u--,s=u===-1?l:h[u]),!p&&T!=="<"&&T)){y=u===-1?l:h[u].children;var S=e.indexOf("<",A),E=e.slice(A,S===-1?void 0:S);Le.test(E)&&(E=" "),(S>-1&&u+y.length>=0||E!==" ")&&y.push({type:"text",content:E})}}),l},stringify:function(e){return e.reduce(function(n,s){return n+we("",s)},"")}},He="".replace,We=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,Me={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"'};function Ge(e){return He.call(e,We,Ze)}function Ze(e){return Me[e]}var Ye=["format"],Ke=["children","count","parent","i18nKey","context","tOptions","values","defaults","components","ns","i18n","t","shouldUnescape"];function ye(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter(function(h){return Object.getOwnPropertyDescriptor(e,h).enumerable})),s.push.apply(s,l)}return s}function O(e){for(var n=1;n<arguments.length;n++){var s=arguments[n]!=null?arguments[n]:{};n%2?ye(Object(s),!0).forEach(function(l){je(e,l,s[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ye(Object(s)).forEach(function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(s,l))})}return e}function de(e,n){if(!e)return!1;var s=e.props?e.props.children:e.children;return n?s.length>0:!!s}function ue(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function Xe(e){return Object.prototype.toString.call(e)!=="[object Array]"?!1:e.every(function(n){return N.isValidElement(n)})}function V(e){return Array.isArray(e)?e:[e]}function Ve(e,n){var s=O({},n);return s.props=Object.assign(e.props,n.props),s}function ke(e,n){if(!e)return"";var s="",l=V(e),h=n.transSupportBasicHtmlNodes&&n.transKeepBasicHtmlNodesFor?n.transKeepBasicHtmlNodesFor:[];return l.forEach(function(u,p){if(typeof u=="string")s+="".concat(u);else if(N.isValidElement(u)){var o=Object.keys(u.props).length,c=h.indexOf(u.type)>-1,g=u.props.children;if(!g&&c&&o===0)s+="<".concat(u.type,"/>");else if(!g&&(!c||o!==0))s+="<".concat(p,"></").concat(p,">");else if(u.props.i18nIsDynamicList)s+="<".concat(p,"></").concat(p,">");else if(c&&o===1&&typeof g=="string")s+="<".concat(u.type,">").concat(g,"</").concat(u.type,">");else{var y=ke(g,n);s+="<".concat(p,">").concat(y,"</").concat(p,">")}}else if(u===null)le("Trans: the passed in value is invalid - seems you passed in a null child.");else if(X(u)==="object"){var f=u.format,w=xe(u,Ye),A=Object.keys(w);if(A.length===1){var T=f?"".concat(A[0],", ").concat(f):A[0];s+="{{".concat(T,"}}")}else le("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",u)}else le("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",u)}),s}function Je(e,n,s,l,h,u){if(n==="")return[];var p=l.transKeepBasicHtmlNodesFor||[],o=n&&new RegExp(p.join("|")).test(n);if(!e&&!o)return[n];var c={};function g(S){var E=V(S);E.forEach(function(a){typeof a!="string"&&(de(a)?g(ue(a)):X(a)==="object"&&!N.isValidElement(a)&&Object.assign(c,a))})}g(e);var y=qe.parse("<0>".concat(n,"</0>")),f=O(O({},c),h);function w(S,E,a){var t=ue(S),d=T(t,E.children,a);return Xe(t)&&d.length===0?t:d}function A(S,E,a,t,d){S.dummy&&(S.children=E),a.push(N.cloneElement(S,O(O({},S.props),{},{key:t}),d?void 0:E))}function T(S,E,a){var t=V(S),d=V(E);return d.reduce(function(i,r,m){var k=r.children&&r.children[0]&&r.children[0].content&&s.services.interpolator.interpolate(r.children[0].content,f,s.language);if(r.type==="tag"){var b=t[parseInt(r.name,10)];!b&&a.length===1&&a[0][r.name]&&(b=a[0][r.name]),b||(b={});var x=Object.keys(r.attrs).length!==0?Ve({props:r.attrs},b):b,F=N.isValidElement(x),C=F&&de(r,!0)&&!r.voidElement,q=o&&X(x)==="object"&&x.dummy&&!F,H=X(e)==="object"&&e!==null&&Object.hasOwnProperty.call(e,r.name);if(typeof x=="string"){var Y=s.services.interpolator.interpolate(x,f,s.language);i.push(Y)}else if(de(x)||C){var se=w(x,r,a);A(x,se,i,m)}else if(q){var J=T(t,r.children,a);i.push(N.cloneElement(x,O(O({},x.props),{},{key:m}),J))}else if(Number.isNaN(parseFloat(r.name)))if(H){var j=w(x,r,a);A(x,j,i,m,r.voidElement)}else if(l.transSupportBasicHtmlNodes&&p.indexOf(r.name)>-1)if(r.voidElement)i.push(N.createElement(r.name,{key:"".concat(r.name,"-").concat(m)}));else{var U=T(t,r.children,a);i.push(N.createElement(r.name,{key:"".concat(r.name,"-").concat(m)},U))}else if(r.voidElement)i.push("<".concat(r.name," />"));else{var I=T(t,r.children,a);i.push("<".concat(r.name,">").concat(I,"</").concat(r.name,">"))}else if(X(x)==="object"&&!F){var W=r.children[0]?k:null;W&&i.push(W)}else r.children.length===1&&k?i.push(N.cloneElement(x,O(O({},x.props),{},{key:m}),k)):i.push(N.cloneElement(x,O(O({},x.props),{},{key:m})))}else if(r.type==="text"){var B=l.transWrapTextNodes,Q=u?Ge(s.services.interpolator.interpolate(r.content,f,s.language)):s.services.interpolator.interpolate(r.content,f,s.language);B?i.push(N.createElement(B,{key:"".concat(r.name,"-").concat(m)},Q)):i.push(Q)}return i},[])}var P=T([{dummy:!0,children:e||[]}],y,V(e||[]));return ue(P[0])}function Qe(e){var n=e.children,s=e.count,l=e.parent,h=e.i18nKey,u=e.context,p=e.tOptions,o=p===void 0?{}:p,c=e.values,g=e.defaults,y=e.components,f=e.ns,w=e.i18n,A=e.t,T=e.shouldUnescape,P=xe(e,Ke),S=z.exports.useContext(Oe)||{},E=S.i18n,a=S.defaultNS,t=w||E||Pe();if(!t)return Te("You will need to pass in an i18next instance by using i18nextReactModule"),n;var d=A||t.t.bind(t)||function(Y){return Y};u&&(o.context=u);var i=O(O({},Ee()),t.options&&t.options.react),r=f||d.ns||a||t.options&&t.options.defaultNS;r=typeof r=="string"?[r]:r||["translation"];var m=g||ke(n,i)||i.transEmptyNodeValue||h,k=i.hashTransKey,b=h||(k?k(m):m),x=c?o.interpolation:{interpolation:O(O({},o.interpolation),{},{prefix:"#$?",suffix:"?$#"})},F=O(O(O(O({},o),{},{count:s},c),x),{},{defaultValue:m,ns:r}),C=b?d(b,F):m,q=Je(y||n,C,t,i,F,T),H=l!==void 0?l:i.defaultTransParent;return H?N.createElement(H,P,q):q}const en=`<h3>Type guards?</h3>
<p>Type guards validate the structure of data.</p>
<p>A type guard is a function that takes an unknown value and returns a boolean that indicates if that value is compatible with a specified type.</p>
<p>If your app deals with external data, API responses, or unknown values, you'll benefit from <code>ts-guardian</code>.</p>
<h3>Why <code>ts-guardian</code>?</h3>
<ul>
<li><strong>Concise</strong> - Types can be complex, so syntax is minimal and declarative to preserve legibility.</li>
<li><strong>Composable</strong> - Types can be composed from other types, so type guards allow similar composition.</li>
<li><strong>Reliable</strong> - <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates">Type assertions</a> and <a href="https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates">type predicates</a> make assumptions that cause runtime type errors, so these are avoided.</li>
</ul>
<p><code>ts-guardian</code> uses a <em>primitive-based type</em> system to ensure accurate type validation.</p>
<h2>Overview</h2>
<p>Here's an example of using <code>ts-guardian</code> to type check an API response:</p>
<pre><code class="language-ts">import { is } from 'ts-guardian'

// Define a type guard
const isBook = is({ id: 'number', author: 'string', title: 'string' })

// Fetch a book ('response' is of type 'unknown')
const response = await fetchBook()

// Validate that 'response' is a book
if (isBook(response)) {
  // 'response' is the expected type
} else {
  // 'response' is not the expected type
}
</code></pre>
<p><em>&quot;But why not just use <code>typeof</code>?&quot;</em></p>
<p>Consider the following <code>User</code> type:</p>
<pre><code class="language-ts">type User = {
  id: number
  name: string
  email?: string
  roles?: {
    id: number
    roleType: 'member' | 'admin' | 'restricted'
  }[]
}
</code></pre>
<p>Here's the <code>ts-guardian</code> type guard for a <code>User</code>:</p>
<pre><code class="language-ts">const isUser = is({
  id: 'number',
  name: 'string',
  email: isStringOrUndefined,
  roles: isUndefined.orArrayOf({
    id: 'number',
    roleType: isLiterally('member', 'admin', 'restricted'),
  }),
})
</code></pre>
<p>and the equivalent <code>typeof</code> type guard:</p>
<pre><code class="language-ts">const isUser = u =&gt;
  typeof u === 'object' &amp;&amp;
  u !== null &amp;&amp;
  typeof u.id === 'number' &amp;&amp;
  typeof u.name === 'string' &amp;&amp;
  (typeof u.email === 'string' || u.email === undefined) &amp;&amp;
  ((Array.isArray(u.roles) &amp;&amp;
    u.roles.every(
      r =&gt;
        typeof r === 'object' &amp;&amp;
        r !== null &amp;&amp;
        typeof r.id === 'number' &amp;&amp;
        (r.roleType === 'member' || r.roleType === 'admin' || r.roleType === 'restricted')
    )) ||
    u.roles === undefined)
</code></pre>
<p><code>ts-guardian</code>'s syntax resembles the TypeScript type, is concise and easy to reason about, and implicitly types the value.</p>
<h2>Installation</h2>
<pre><code>npm i ts-guardian
</code></pre>
<h2>API</h2>
<h3>The <code>is</code> function</h3>
<pre><code class="language-ts">import { is } from 'ts-guardian'
</code></pre>
<p>Use the <code>is</code> function to create type guards. <code>is</code> takes a <strong>type definition</strong> and returns the type guard:</p>
<pre><code class="language-ts">const isString = is('string') // guard for 'string'

isString('') // true
isString(0) // false
</code></pre>
<p>A <strong>type definition</strong> can be a basic type string, an array, an object, or another type guard:</p>
<pre><code class="language-ts">const isNumber = is('number') // guard for 'number'
const isStrNumTuple = is(['string', 'number']) // guard for '[string, number]'
const hasName = is({ name: 'string' }) // guard for '{ name: string; }'
const hasAuthor = is({ author: hasName }) // guard for '{ author: { name: string; }; }'
</code></pre>
<h3>Basic types</h3>
<p>Pass a string to create guards for basic types:</p>
<pre><code class="language-ts">const isBoolean = is('boolean') // guard for 'boolean'
const isNull = is('null') // guard for 'null'
const isObject = is('object') // guard for 'object'
const isAny = is('any') // guard for 'any'
</code></pre>
<p>Complex types are constructed from basic types, so you'll be using these a lot. Here's the complete list of keys:</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Type</th>
<th>Equivalent type check</th>
</tr>
</thead>
<tbody>
<tr>
<td><code class="language-ts">'any'</code></td>
<td><code class="language-ts">any</code></td>
<td><code class="language-ts">true</code> (matches anything)</td>
</tr>
<tr>
<td><code class="language-ts">'boolean'</code></td>
<td><code class="language-ts">boolean</code></td>
<td><code class="language-ts">typeof value === 'boolean'</code></td>
</tr>
<tr>
<td><code class="language-ts">'bigint'</code></td>
<td><code class="language-ts">bigint</code></td>
<td><code class="language-ts">typeof value === 'bigint'</code></td>
</tr>
<tr>
<td><code class="language-ts">'function'</code></td>
<td><code class="language-ts">Function</code></td>
<td><code class="language-ts">typeof value === 'function'</code></td>
</tr>
<tr>
<td><code class="language-ts">'null'</code></td>
<td><code class="language-ts">null</code></td>
<td><code class="language-ts">value === null</code></td>
</tr>
<tr>
<td><code class="language-ts">'number'</code></td>
<td><code class="language-ts">number</code></td>
<td><code class="language-ts">typeof value === 'number'</code></td>
</tr>
<tr>
<td><code class="language-ts">'object'</code></td>
<td><code class="language-ts">object</code></td>
<td><code class="language-ts">typeof value === 'object'</code></td>
</tr>
<tr>
<td><code class="language-ts">'string'</code></td>
<td><code class="language-ts">string</code></td>
<td><code class="language-ts">typeof value === 'string'</code></td>
</tr>
<tr>
<td><code class="language-ts">'symbol'</code></td>
<td><code class="language-ts">symbol</code></td>
<td><code class="language-ts">typeof value === 'symbol'</code></td>
</tr>
<tr>
<td><code class="language-ts">'undefined'</code></td>
<td><code class="language-ts">undefined</code></td>
<td><code class="language-ts">value === undefined</code></td>
</tr>
<tr>
<td><code class="language-ts">'unknown'</code></td>
<td><code class="language-ts">unknown</code></td>
<td><code class="language-ts">true</code> (matches anything)</td>
</tr>
</tbody>
</table>
<blockquote>
<p>When combined with other type definitions, the <code>any</code> and <code>unknown</code> type guards take precedence. These are useful in complex types where you can specify part of the type as <code>any</code> or <code>unknown</code>, for example, an object member.</p>
</blockquote>
<blockquote>
<p>Basic type guards will return <code>false</code> for objects created with constructors. For example, <span style="white-space: nowrap;"><code class="language-ts">is('string')(new String())</code></span> returns <code>false</code>. Use <code>isInstanceOf</code> instead.</p>
</blockquote>
<blockquote>
<p>The <code>object</code> type guard matches <code>null</code> values. You probably want to use <code class="language-ts">is({})</code> instead.</p>
</blockquote>
<h3>Tuple types</h3>
<p>Pass an array to create guards for tuples:</p>
<pre><code class="language-ts">const isStrNumTuple = is(['string', 'number']) // guard for '[string, number]'

isStrNumTuple(['high']) // false
isStrNumTuple(['high', 5]) // true
</code></pre>
<p>Pass tuple guards to tuple guards to create guards for nested tuples:</p>
<pre><code class="language-ts">const isStrAndNumNumTupleTuple = is(['string', is(['number', 'number'])]) // guard for '[string, [number, number]]'
</code></pre>
<h3>Object types</h3>
<p>Pass an object to create guards for objects:</p>
<pre><code class="language-ts">const isObject = is({}) // guard for '{}'

isObject({}) // true
isObject(null) // false
</code></pre>
<p>Define a guard for each member key to create a guard for objects with specific members:</p>
<pre><code class="language-ts">const hasAge = is({ age: 'number' }) // guard for '{ age: number; }'

hasAge({ name: 'Bob' }) // false
hasAge({ name: 'Bob', age: 40 }) // true
</code></pre>
<p>Pass nested objects to create guards for nested objects:</p>
<pre><code class="language-ts">const hasAuthor = is({ author: { name: 'string' } }) // guard for '{ author: { name: string; }; }'

hasAuthor({ author: { name: 'Bob' } }) // true
</code></pre>
<h3>Union types</h3>
<p>Every type guard has an <code>or</code> method with the same signature as the <code>is</code> function. Use <code>or</code> to create union types:</p>
<pre><code class="language-ts">const isStringOrNumber = is('string').or('number') // guard for 'string | number'

isStringOrNumber('') // true
isStringOrNumber(0) // true
isStringOrNumber(true) // false
</code></pre>
<h3>Literal types</h3>
<p>Pass a <code>number</code>, <code>string</code>, or <code>boolean</code> to <code>isLiterally</code> and <code>orLiterally</code> to create literal type guards. You can also pass multiple arguments to create union literal type guards:</p>
<pre><code class="language-ts">import { isLiterally } from 'ts-guardian'

const isCool = isLiterally('cool') // guard for '&quot;cool&quot;'
const is5 = isLiterally(1) // guard for '1'
const isTrue = isLiterally(true) // guard for 'true'
const isNumberOrReset = is('number').orLiterally('reset') // guard for 'number | &quot;reset&quot;'
const isCoolOr5OrTrue = isLiterally('cool', 1, true) // guard for '&quot;cool&quot; | 1 | true'
</code></pre>
<h3>Array types</h3>
<p>Use <code>isArrayOf</code> and <code>orArrayOf</code> to create array type guards:</p>
<pre><code class="language-ts">import { is, isArrayOf } from 'ts-guardian'

const isStrArr = isArrayOf('string') // guard for 'string[]'
const isStrOrNumArr = isArrayOf(is('string').or('number')) // guard for '(string | number)[]'
const isStrArrOrNumArr = isArrayOf('string').orArrayOf('number') // guard for 'string[] | number[]'
</code></pre>
<blockquote>
<p>Note the difference between <code class="language-ts">isArrayOf(is('string').or('number'))</code> which creates a guard for <code class="language-ts">(string | number)[]</code>, and <code class="language-ts">isArrayOf('string').orArrayOf('number')</code> which creates a guard for <code class="language-ts">string[] | number[]</code>.</p>
</blockquote>
<h3>Record types</h3>
<p>Use <code>isRecordOf</code> and <code>orRecordOf</code> to create record type guards:</p>
<pre><code class="language-ts">import { is, isRecordOf } from 'ts-guardian'

const isStrRecord = isRecordOf('string') // guard for 'Record&lt;PropertyKey, string&gt;'
const isStrOrNumRecord = isRecordOf(is('string').or('number')) // guard for 'Record&lt;PropertyKey, string | number&gt;'
const isStrRecordOrNumRecord = isRecordOf('string').orRecordOf('number') // guard for 'Record&lt;PropertyKey, string&gt; | Record&lt;PropertyKey, number&gt;'
</code></pre>
<h3>Instance types</h3>
<p>Pass a constructor object to <code>isInstanceOf</code> and <code>orInstanceOf</code> to create guards for object instances:</p>
<pre><code class="language-ts">const isDate = isInstanceOf(Date) // guard for 'Date'

isDate(new Date()) // true

const isRegExpOrUndefined = is('undefined').orInstanceOf(RegExp) // guard for 'RegExp | undefined'

isRegExpOrUndefined(/./) // true
isRegExpOrUndefined(new RegExp('.')) // true
isRegExpOrUndefined(undefined) // true
</code></pre>
<p>This works with user-defined classes too:</p>
<pre><code class="language-ts">class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
}

const steve = new Person('Steve')

const isPerson = isInstanceOf(Person) // guard for 'Person'

isPerson(steve) // true
</code></pre>
<h3>Intersection types</h3>
<p>Every type guard has an <code>and</code> method with the same signature as <code>or</code>. Use <code>and</code> to create intersection type guards:</p>
<pre><code class="language-ts">const hasXOrY = is({ x: 'any' }).or({ y: 'any' }) // guard for '{ x: any; } | { y: any; }'
const hasXAndY = is({ x: 'any' }).and({ y: 'any' }) // guard for '{ x: any; } &amp; { y: any; }'

hasXOrY({ x: '' }) // true
hasXOrY({ y: '' }) // true
hasXOrY({ x: '', y: '' }) // true
hasXAndY({ x: '' }) // false
hasXAndY({ y: '' }) // false
hasXAndY({ x: '', y: '' }) // true
</code></pre>
<h3>User-defined types</h3>
<p>Consider the following type and its guard:</p>
<pre><code class="language-ts">type Book = { title: string; author: string }

const isBook = is({ title: 'string', author: 'string' })
</code></pre>
<p>If <code>isBook</code> returns <code>true</code> for a value, that value will be typed as the primitive-based type:</p>
<pre><code class="language-ts">{
  title: string
  author: string
}
</code></pre>
<p>Ideally, we want to type the value as <code>Book</code>, while avoiding type assertions and user-defined type predicates.</p>
<p>One way is with a parse function that utilizes TypeScript's implicit casting:</p>
<pre><code class="language-ts">const parseBook = (input: unknown): Book | undefined =&gt; (isBook(input) ? input : undefined)
</code></pre>
<p>TypeScript will complain if the type predicate returned from <code>isBook</code> is not compatible with the <code>Book</code> type.</p>
<p>This function is type-safe, but defining these functions over and over is tedious. Instead, you can use <code>parserFor</code>:</p>
<pre><code class="language-ts">import { parserFor } from 'ts-guardian'

const parseBook = parserFor&lt;Book&gt;(isBook)
</code></pre>
<p>The <code>parserFor</code> function takes a guard and a type argument, and returns the parser function. <code>parserFor</code> is also type-safe, and TypeScript will complain if you try to create a parser for a user-defined type that isn't compatible with the supplied type guard.</p>
<pre><code class="language-ts">const book = { title: 'Odyssey', author: 'Homer' }
const film = { title: 'Psycho', director: 'Alfred Hitchcock' }

parseBook(book) // returns book as type 'Book'
parseBook(film) // returns undefined
</code></pre>
<h3>Safe assertion</h3>
<p>Use the <code>assertThat</code> function to throw an error if a value does not pass a type guard:</p>
<pre><code class="language-ts">import { is, assertThat } from 'ts-guardian'

const value = getSomeUnknownValue()

// Throws an error if type of value is not 'string'
// Error message: Type of 'value' does not match type guard.
assertThat(value, is('string'))

// Otherwise, type of value is 'string'
value.toUpperCase()
</code></pre>
<p>You can optionally pass an error message to <code>assertThat</code>:</p>
<pre><code class="language-ts">assertThat(value, isUser, \`\${String(value)} is not a user!\`)
</code></pre>
<h3>Convenience guards</h3>
<p>There are some guards you'll use frequently, so they're exported for convenience:</p>
<table>
<thead>
<tr>
<th>Guard</th>
<th>Type</th>
<th>Equivalent to</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>isBoolean</code></td>
<td><code class="language-ts">boolean</code></td>
<td><code class="language-ts">is('boolean')</code></td>
</tr>
<tr>
<td><code>isBooleanOrNull</code></td>
<td><code class="language-ts">boolean | null</code></td>
<td><code class="language-ts">is('boolean').or('null')</code></td>
</tr>
<tr>
<td><code>isBooleanOrUndefined</code></td>
<td><code class="language-ts">boolean | undefined</code></td>
<td><code class="language-ts">is('boolean').or('undefined')</code></td>
</tr>
<tr>
<td><code>isBigint</code></td>
<td><code class="language-ts">bigint</code></td>
<td><code class="language-ts">is('bigint')</code></td>
</tr>
<tr>
<td><code>isBigintOrNull</code></td>
<td><code class="language-ts">bigint | null</code></td>
<td><code class="language-ts">is('bigint').or('null')</code></td>
</tr>
<tr>
<td><code>isBigintOrUndefined</code></td>
<td><code class="language-ts">bigint | undefined</code></td>
<td><code class="language-ts">is('bigint').or('undefined')</code></td>
</tr>
<tr>
<td><code>isFunction</code></td>
<td><code class="language-ts">Function</code></td>
<td><code class="language-ts">is('function')</code></td>
</tr>
<tr>
<td><code>isFunctionOrNull</code></td>
<td><code class="language-ts">Function | null</code></td>
<td><code class="language-ts">is('function').or('null')</code></td>
</tr>
<tr>
<td><code>isFunctionOrUndefined</code></td>
<td><code class="language-ts">Function | undefined</code></td>
<td><code class="language-ts">is('function').or('undefined')</code></td>
</tr>
<tr>
<td><code>isNull</code></td>
<td><code class="language-ts">null</code></td>
<td><code class="language-ts">is('null')</code></td>
</tr>
<tr>
<td><code>isNullOrUndefined</code></td>
<td><code class="language-ts">null | undefined</code></td>
<td><code class="language-ts">is('null').or('undefined')</code></td>
</tr>
<tr>
<td><code>isNumber</code></td>
<td><code class="language-ts">number</code></td>
<td><code class="language-ts">is('number')</code></td>
</tr>
<tr>
<td><code>isNumberOrNull</code></td>
<td><code class="language-ts">number | null</code></td>
<td><code class="language-ts">is('number').or('null')</code></td>
</tr>
<tr>
<td><code>isNumberOrUndefined</code></td>
<td><code class="language-ts">number | undefined</code></td>
<td><code class="language-ts">is('number').or('undefined')</code></td>
</tr>
<tr>
<td><code>isString</code></td>
<td><code class="language-ts">string</code></td>
<td><code class="language-ts">is('string')</code></td>
</tr>
<tr>
<td><code>isStringOrNull</code></td>
<td><code class="language-ts">string | null</code></td>
<td><code class="language-ts">is('string').or('null')</code></td>
</tr>
<tr>
<td><code>isStringOrUndefined</code></td>
<td><code class="language-ts">string | undefined</code></td>
<td><code class="language-ts">is('string').or('undefined')</code></td>
</tr>
<tr>
<td><code>isSymbol</code></td>
<td><code class="language-ts">symbol</code></td>
<td><code class="language-ts">is('symbol')</code></td>
</tr>
<tr>
<td><code>isSymbolOrNull</code></td>
<td><code class="language-ts">symbol | null</code></td>
<td><code class="language-ts">is('symbol').or('null')</code></td>
</tr>
<tr>
<td><code>isSymbolOrUndefined</code></td>
<td><code class="language-ts">symbol | undefined</code></td>
<td><code class="language-ts">is('symbol').or('undefined')</code></td>
</tr>
<tr>
<td><code>isUndefined</code></td>
<td><code class="language-ts">undefined</code></td>
<td><code class="language-ts">is('undefined')</code></td>
</tr>
</tbody>
</table>
<h2>Primitive-based type guards</h2>
<h3>User-defined type guards \u{1F44E}</h3>
<p>With TypeScript's <a href="https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards">user-defined type guards</a>, we could create an <code>isUser</code> function to confirm the data is of type <code>User</code>. It would probably look something like this:</p>
<pre><code class="language-ts">// Returns user-defined type guard \`input is User\`
const isUser = (input: unknown): input is User =&gt; {
  const u = input as User
  return (
    typeof u === 'object' &amp;&amp;
    u !== null &amp;&amp;
    typeof u.id === 'number' &amp;&amp;
    typeof u.name === 'string' &amp;&amp;
    (typeof u.email === 'string' || u.email === undefined) &amp;&amp;
    ((Array.isArray(u.roles) &amp;&amp;
      u.roles.every(
        r =&gt;
          typeof r === 'object' &amp;&amp;
          r !== null &amp;&amp;
          typeof r.id === 'number' &amp;&amp;
          (r.roleType === 'member' || r.roleType === 'admin' || r.roleType === 'restricted')
      )) ||
      u.roles === undefined)
  )
}
</code></pre>
<p>Hard to read and harder to reason about, but it works!</p>
<p>But what if we did this instead:</p>
<pre><code class="language-ts">const isUser = (input: unknown): input is User =&gt; {
  return typeof input === 'object'
}
</code></pre>
<p>Clearly this function is not enough to confirm that <code>input</code> is of type <code>User</code>, but TypeScript doesn't complain at all, because <em>type predicates are type assertions.</em></p>
<p>We're relying on the skills of the developer to create an error-free type guard, with any mistakes resulting in runtime type errors.</p>
<p>So how do we <em>guarantee</em> that a value is compatible with a user-defined type?</p>
<h3>Primitive-based type guards \u{1F44D}</h3>
<p>We make <em>no assumptions</em> that the value is a user-defined type.</p>
<p>Instead, we define a <strong>primitive-based type</strong> of what a <code>User</code> object looks like, and let TypeScript determine if this primitive-based type is compatible with the <code>User</code> type:</p>
<blockquote>
<p>A primitive-based type is a type constructed from only primitive types (<code>string</code>, <code>number</code>, <code>undefined</code>, <code>any</code>, etc...).</p>
</blockquote>
<pre><code class="language-ts">import { is, isStringOrUndefined, isUndefined, isLiterally } from 'ts-guardian'

const isUser = is({
  id: 'number',
  name: 'string',
  email: isStringOrUndefined,
  roles: isUndefined.orArrayOf({
    id: 'number',
    roleType: isLiterally('member', 'admin', 'restricted'),
  }),
})
</code></pre>
<p>Not only is this more concise, but instead of <code>isUser</code> returning the type predicate <code>input is User</code>, it now returns a primitive-based type predicate, generated from our type checking, so we know it's accurate.</p>
<p>In this case, the type predicate looks like:</p>
<pre><code class="language-ts">// Type predicate for our primitive-based type
input is {
    id: number;
    name: string | undefined;
    email: string | undefined;
    roles: {
        id: number;
        roleType: 'member' | 'admin' | 'restricted';
    }[] | undefined;
}
</code></pre>
<p>It's now up to TypeScript to tell us if this type is compatible with the <code>User</code> type:</p>
<pre><code class="language-ts">const response = getUserFromApi()
// TypeScript complains if the primitive-based type predicate returned by \`isUser\` is not compatible with the 'User' type
const user: User | undefined = isUser(response) ? response : undefined
</code></pre>
<p>If the type predicate from <code>isUser</code> is not compatible with the <code>User</code> type, then we get a TypeScript compiler error. \u{1F389}</p>
`;var Ae={exports:{}};(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var s=function(l){var h=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,u=0,p={},o={manual:l.Prism&&l.Prism.manual,disableWorkerMessageHandler:l.Prism&&l.Prism.disableWorkerMessageHandler,util:{encode:function a(t){return t instanceof c?new c(t.type,a(t.content),t.alias):Array.isArray(t)?t.map(a):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++u}),a.__id},clone:function a(t,d){d=d||{};var i,r;switch(o.util.type(t)){case"Object":if(r=o.util.objId(t),d[r])return d[r];i={},d[r]=i;for(var m in t)t.hasOwnProperty(m)&&(i[m]=a(t[m],d));return i;case"Array":return r=o.util.objId(t),d[r]?d[r]:(i=[],d[r]=i,t.forEach(function(k,b){i[b]=a(k,d)}),i);default:return t}},getLanguage:function(a){for(;a;){var t=h.exec(a.className);if(t)return t[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,t){a.className=a.className.replace(RegExp(h,"gi"),""),a.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(i){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(a){var t=document.getElementsByTagName("script");for(var d in t)if(t[d].src==a)return t[d]}return null}},isActive:function(a,t,d){for(var i="no-"+t;a;){var r=a.classList;if(r.contains(t))return!0;if(r.contains(i))return!1;a=a.parentElement}return!!d}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(a,t){var d=o.util.clone(o.languages[a]);for(var i in t)d[i]=t[i];return d},insertBefore:function(a,t,d,i){i=i||o.languages;var r=i[a],m={};for(var k in r)if(r.hasOwnProperty(k)){if(k==t)for(var b in d)d.hasOwnProperty(b)&&(m[b]=d[b]);d.hasOwnProperty(k)||(m[k]=r[k])}var x=i[a];return i[a]=m,o.languages.DFS(o.languages,function(F,C){C===x&&F!=a&&(this[F]=m)}),m},DFS:function a(t,d,i,r){r=r||{};var m=o.util.objId;for(var k in t)if(t.hasOwnProperty(k)){d.call(t,k,t[k],i||k);var b=t[k],x=o.util.type(b);x==="Object"&&!r[m(b)]?(r[m(b)]=!0,a(b,d,null,r)):x==="Array"&&!r[m(b)]&&(r[m(b)]=!0,a(b,d,k,r))}}},plugins:{},highlightAll:function(a,t){o.highlightAllUnder(document,a,t)},highlightAllUnder:function(a,t,d){var i={callback:d,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var r=0,m;m=i.elements[r++];)o.highlightElement(m,t===!0,i.callback)},highlightElement:function(a,t,d){var i=o.util.getLanguage(a),r=o.languages[i];o.util.setLanguage(a,i);var m=a.parentElement;m&&m.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(m,i);var k=a.textContent,b={element:a,language:i,grammar:r,code:k};function x(C){b.highlightedCode=C,o.hooks.run("before-insert",b),b.element.innerHTML=b.highlightedCode,o.hooks.run("after-highlight",b),o.hooks.run("complete",b),d&&d.call(b.element)}if(o.hooks.run("before-sanity-check",b),m=b.element.parentElement,m&&m.nodeName.toLowerCase()==="pre"&&!m.hasAttribute("tabindex")&&m.setAttribute("tabindex","0"),!b.code){o.hooks.run("complete",b),d&&d.call(b.element);return}if(o.hooks.run("before-highlight",b),!b.grammar){x(o.util.encode(b.code));return}if(t&&l.Worker){var F=new Worker(o.filename);F.onmessage=function(C){x(C.data)},F.postMessage(JSON.stringify({language:b.language,code:b.code,immediateClose:!0}))}else x(o.highlight(b.code,b.grammar,b.language))},highlight:function(a,t,d){var i={code:a,grammar:t,language:d};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),c.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(a,t){var d=t.rest;if(d){for(var i in d)t[i]=d[i];delete t.rest}var r=new f;return w(r,r.head,a),y(a,r,t,r.head,0),T(r)},hooks:{all:{},add:function(a,t){var d=o.hooks.all;d[a]=d[a]||[],d[a].push(t)},run:function(a,t){var d=o.hooks.all[a];if(!(!d||!d.length))for(var i=0,r;r=d[i++];)r(t)}},Token:c};l.Prism=o;function c(a,t,d,i){this.type=a,this.content=t,this.alias=d,this.length=(i||"").length|0}c.stringify=function a(t,d){if(typeof t=="string")return t;if(Array.isArray(t)){var i="";return t.forEach(function(x){i+=a(x,d)}),i}var r={type:t.type,content:a(t.content,d),tag:"span",classes:["token",t.type],attributes:{},language:d},m=t.alias;m&&(Array.isArray(m)?Array.prototype.push.apply(r.classes,m):r.classes.push(m)),o.hooks.run("wrap",r);var k="";for(var b in r.attributes)k+=" "+b+'="'+(r.attributes[b]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+k+">"+r.content+"</"+r.tag+">"};function g(a,t,d,i){a.lastIndex=t;var r=a.exec(d);if(r&&i&&r[1]){var m=r[1].length;r.index+=m,r[0]=r[0].slice(m)}return r}function y(a,t,d,i,r,m){for(var k in d)if(!(!d.hasOwnProperty(k)||!d[k])){var b=d[k];b=Array.isArray(b)?b:[b];for(var x=0;x<b.length;++x){if(m&&m.cause==k+","+x)return;var F=b[x],C=F.inside,q=!!F.lookbehind,H=!!F.greedy,Y=F.alias;if(H&&!F.pattern.global){var se=F.pattern.toString().match(/[imsuy]*$/)[0];F.pattern=RegExp(F.pattern.source,se+"g")}for(var J=F.pattern||F,j=i.next,U=r;j!==t.tail&&!(m&&U>=m.reach);U+=j.value.length,j=j.next){var I=j.value;if(t.length>a.length)return;if(!(I instanceof c)){var W=1,B;if(H){if(B=g(J,U,a,q),!B||B.index>=a.length)break;var ee=B.index,Q=B.index+B[0].length,R=U;for(R+=j.value.length;ee>=R;)j=j.next,R+=j.value.length;if(R-=j.value.length,U=R,j.value instanceof c)continue;for(var K=j;K!==t.tail&&(R<Q||typeof K.value=="string");K=K.next)W++,R+=K.value.length;W--,I=a.slice(U,R),B.index-=U}else if(B=g(J,0,I,q),!B)continue;var ee=B.index,ne=B[0],oe=I.slice(0,ee),ge=I.slice(ee+ne.length),ie=U+I.length;m&&ie>m.reach&&(m.reach=ie);var te=j.prev;oe&&(te=w(t,te,oe),U+=oe.length),A(t,te,W);var Fe=new c(k,C?o.tokenize(ne,C):ne,Y,ne);if(j=w(t,te,Fe),ge&&w(t,j,ge),W>1){var ce={cause:k+","+x,reach:ie};y(a,t,d,j.prev,U,ce),m&&ce.reach>m.reach&&(m.reach=ce.reach)}}}}}}function f(){var a={value:null,prev:null,next:null},t={value:null,prev:a,next:null};a.next=t,this.head=a,this.tail=t,this.length=0}function w(a,t,d){var i=t.next,r={value:d,prev:t,next:i};return t.next=r,i.prev=r,a.length++,r}function A(a,t,d){for(var i=t.next,r=0;r<d&&i!==a.tail;r++)i=i.next;t.next=i,i.prev=t,a.length-=r}function T(a){for(var t=[],d=a.head.next;d!==a.tail;)t.push(d.value),d=d.next;return t}if(!l.document)return l.addEventListener&&(o.disableWorkerMessageHandler||l.addEventListener("message",function(a){var t=JSON.parse(a.data),d=t.language,i=t.code,r=t.immediateClose;l.postMessage(o.highlight(i,o.languages[d],d)),r&&l.close()},!1)),o;var P=o.util.currentScript();P&&(o.filename=P.src,P.hasAttribute("data-manual")&&(o.manual=!0));function S(){o.manual||o.highlightAll()}if(!o.manual){var E=document.readyState;E==="loading"||E==="interactive"&&P&&P.defer?document.addEventListener("DOMContentLoaded",S):window.requestAnimationFrame?window.requestAnimationFrame(S):window.setTimeout(S,16)}return o}(n);e.exports&&(e.exports=s),typeof fe<"u"&&(fe.Prism=s)})(Ae);const pe=Ae.exports;Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(n,s){var l={};l["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[s]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var h={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};h["language-"+s]={pattern:/[\s\S]+/,inside:Prism.languages[s]};var u={};u[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:h},Prism.languages.insertBefore("markup","cdata",u)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,n){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:Prism.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var s=e.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(Prism);(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism);(function(e){var n=e.util.clone(e.languages.javascript),s=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,l=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,h=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function u(c,g){return c=c.replace(/<S>/g,function(){return s}).replace(/<BRACES>/g,function(){return l}).replace(/<SPREAD>/g,function(){return h}),RegExp(c,g)}h=u(h).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=u(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:u(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:u(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var p=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(p).join(""):""},o=function(c){for(var g=[],y=0;y<c.length;y++){var f=c[y],w=!1;if(typeof f!="string"&&(f.type==="tag"&&f.content[0]&&f.content[0].type==="tag"?f.content[0].content[0].content==="</"?g.length>0&&g[g.length-1].tagName===p(f.content[0].content[1])&&g.pop():f.content[f.content.length-1].content==="/>"||g.push({tagName:p(f.content[0].content[1]),openedBraces:0}):g.length>0&&f.type==="punctuation"&&f.content==="{"?g[g.length-1].openedBraces++:g.length>0&&g[g.length-1].openedBraces>0&&f.type==="punctuation"&&f.content==="}"?g[g.length-1].openedBraces--:w=!0),(w||typeof f=="string")&&g.length>0&&g[g.length-1].openedBraces===0){var A=p(f);y<c.length-1&&(typeof c[y+1]=="string"||c[y+1].type==="plain-text")&&(A+=p(c[y+1]),c.splice(y+1,1)),y>0&&(typeof c[y-1]=="string"||c[y-1].type==="plain-text")&&(A=p(c[y-1])+A,c.splice(y-1,1),y--),c[y]=new e.Token("plain-text",A,null,A)}f.content&&typeof f.content!="string"&&o(f.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||o(c.tokens)})})(Prism);(function(e){var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var s=e.languages.tsx.tag;s.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+s.pattern.source+")",s.pattern.flags),s.lookbehind=!0})(Prism);(function(){if(typeof Prism>"u"||typeof document>"u")return;var e="line-numbers",n=/\n(?!$)/g,s=Prism.plugins.lineNumbers={getLine:function(p,o){if(!(p.tagName!=="PRE"||!p.classList.contains(e))){var c=p.querySelector(".line-numbers-rows");if(!!c){var g=parseInt(p.getAttribute("data-start"),10)||1,y=g+(c.children.length-1);o<g&&(o=g),o>y&&(o=y);var f=o-g;return c.children[f]}}},resize:function(p){l([p])},assumeViewportIndependence:!0};function l(p){if(p=p.filter(function(c){var g=h(c),y=g["white-space"];return y==="pre-wrap"||y==="pre-line"}),p.length!=0){var o=p.map(function(c){var g=c.querySelector("code"),y=c.querySelector(".line-numbers-rows");if(!(!g||!y)){var f=c.querySelector(".line-numbers-sizer"),w=g.textContent.split(n);f||(f=document.createElement("span"),f.className="line-numbers-sizer",g.appendChild(f)),f.innerHTML="0",f.style.display="block";var A=f.getBoundingClientRect().height;return f.innerHTML="",{element:c,lines:w,lineHeights:[],oneLinerHeight:A,sizer:f}}}).filter(Boolean);o.forEach(function(c){var g=c.sizer,y=c.lines,f=c.lineHeights,w=c.oneLinerHeight;f[y.length-1]=void 0,y.forEach(function(A,T){if(A&&A.length>1){var P=g.appendChild(document.createElement("span"));P.style.display="block",P.textContent=A}else f[T]=w})}),o.forEach(function(c){for(var g=c.sizer,y=c.lineHeights,f=0,w=0;w<y.length;w++)y[w]===void 0&&(y[w]=g.children[f++].getBoundingClientRect().height)}),o.forEach(function(c){var g=c.sizer,y=c.element.querySelector(".line-numbers-rows");g.style.display="none",g.innerHTML="",c.lineHeights.forEach(function(f,w){y.children[w].style.height=f+"px"})})}}function h(p){return p?window.getComputedStyle?getComputedStyle(p):p.currentStyle||null:null}var u=void 0;window.addEventListener("resize",function(){s.assumeViewportIndependence&&u===window.innerWidth||(u=window.innerWidth,l(Array.prototype.slice.call(document.querySelectorAll("pre."+e))))}),Prism.hooks.add("complete",function(p){if(!!p.code){var o=p.element,c=o.parentNode;if(!(!c||!/pre/i.test(c.nodeName))&&!o.querySelector(".line-numbers-rows")&&!!Prism.util.isActive(o,e)){o.classList.remove(e),c.classList.add(e);var g=p.code.match(n),y=g?g.length+1:1,f,w=new Array(y+1).join("<span></span>");f=document.createElement("span"),f.setAttribute("aria-hidden","true"),f.className="line-numbers-rows",f.innerHTML=w,c.hasAttribute("data-start")&&(c.style.counterReset="linenumber "+(parseInt(c.getAttribute("data-start"),10)-1)),p.element.appendChild(f),l([c]),Prism.hooks.run("line-numbers",p)}}}),Prism.hooks.add("line-numbers",function(p){p.plugins=p.plugins||{},p.plugins.lineNumbers=!0})})();pe.manual=!0;const nn=e=>pe.highlight(e,pe.languages.typescript,"typescript"),tn=e=>e.replaceAll("&gt;",">").replaceAll("&lt;","<").replaceAll("&quot;",'"').replaceAll("&amp;","&"),rn=()=>{const{theme:e,isDarkMode:n}=Z();let s=tn(en),l=0,h=Array.from(s.matchAll(/<code class="language-(.+?)">([\S\s]+?)<\/code>/g)),u="";for(const p of h){const[o,c,g]=p,y=p.index;if(y!==void 0)switch(u+=s.slice(l,y),l=y+o.length,c){case"typescript":case"ts":{u+=o.replace(g,nn(g));break}default:{u+=o;break}}}return u+=s.slice(l),v(_,{align:"center",css:{padding:"1rem"},children:v(_,{dangerouslySetInnerHTML:{__html:u},gap:"1.5rem",css:{maxWidth:"min(720px,100%)",lineHeight:"1.25rem",fontSize:"0.9375rem",color:e.colors.text(n?.75:.875),"& *":{fontSize:"inherit",color:"inherit"},"& h1":{fontSize:"2.5rem",fontWeight:700,color:e.colors.text()},"& h2":{color:e.colors.text(),fontSize:"1.875rem",fontWeight:700,padding:"1rem 2rem",borderBottom:`1px solid ${e.colors.text(.375)}`,paddingTop:"2rem",marginLeft:"-2rem",marginRight:"-2rem","&::first-of-type":{paddingTop:0}},"& h3":{color:e.colors.text(.875),fontSize:"1.375rem",fontWeight:500,padding:"0.5rem 0",paddingTop:"1.5rem","&::first-of-type":{paddingTop:0}},"& h4":{fontSize:"1rem",fontWeight:500,color:e.colors.text(.875)},"& blockquote":{backgroundColor:e.colors.warning(.03125),fontSize:"0.875rem",color:e.colors.text(.625),padding:"0.5rem 1rem",borderLeft:`1px solid ${e.colors.warning()}`,borderRadius:"0 0.5rem 0.5rem 0"},"& code":{color:"#fff",fontFamily:'"Share Tech Mono", monospace'},"& ul":{marginLeft:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem"},"& code:not(.language-ts)":{color:e.colors.primary()},"& code .token.keyword":{color:"#c792ea"},"& code .token.string":{color:"#c3e88d"},"& code .token.number":{color:"#f07178"},"& code .token.function":{color:"#82aaff"},"& code .token.operator":{color:"#89ddff"},"& code .token.punctuation":{color:"#ffd700"},"& code .token.comment":{color:"#fff",opacity:.25},"& code .token.comment *":{color:"#fff !important"},"& code .token.regex-delimiter,.token.regex-source":{color:"#89ddff"},"& code .token.class-name":{color:"#ffcb6b"},"& code .token.builtin":{color:"#ffcb6b"},"& pre":{padding:"1rem 2rem",backgroundColor:e.colors.background.dark(1),border:`1px solid ${e.colors.background.dark(2)}`,borderRadius:"0.5rem",overflowX:"auto",marginLeft:"-2rem",marginRight:"-2rem",fontSize:"inherit"},"& table":{borderSpacing:"0px"},"& thead th":{borderBottom:`1px solid ${e.colors.text(.25)}`,backgroundColor:e.colors.text(.25),padding:"0.25rem"},"& tbody td":{borderBottom:`1px solid ${e.colors.text(.125)}`,padding:"0.25rem",borderLeft:`1px solid ${e.colors.text(.125)}`,borderRight:`1px solid ${e.colors.text(.125)}`},"& .heading-anchor":{position:"absolute",left:0,textDecoration:"none",transition:"opacity 160ms",opacity:.5,"&:hover":{opacity:1}},"& h3 .heading-anchor":{transform:"translateX(-150%)"}}})})},an=()=>{const{t:e}=$e("tsGuardian"),{theme:n,bp:s,isDarkMode:l}=Z(),[h,u]=z.exports.useState("'Hello, World.'"),[p,o]=z.exports.useState("is('string')"),[c,g]=z.exports.useState(!0),y=!ve("sm"),f=z.exports.useCallback(()=>{try{g(Function(`return window.TSG.${p}(${h})`)())}catch{g(!1)}},[p,h]);return z.exports.useEffect(()=>{setTimeout(f,2e3)},[]),z.exports.useEffect(f,[f]),v(M,{distribute:"center",css:{background:n.colors.background(1),borderTop:`1px solid ${n.colors.text(.125)}`,borderBottom:`1px solid ${n.colors.text(.125)}`},children:$(_,{flex:1,distribute:"center",gap:n.space.lg,css:s({padding:[n.space.md,n.space.xl],maxWidth:"80rem"}),children:[v(G,{element:"h2",variant:"heading",align:"center",children:e("live_example_heading")}),$(Be,{direction:y?"col":"row",gap:n.space.xl,css:s({paddingBottom:[n.space.md,n.space.xl]}),children:[$(_,{flex:1,children:[v(me,{css:{flex:1,resize:"none",background:n.colors.background(l?.33:2),borderRadius:n.radius.md,padding:n.space.md,fontFamily:'"Share Tech Mono", monospace',borderWidth:"1px",borderStyle:"solid",borderColor:n.colors.text(.125),"&:focus":{borderColor:n.colors.text(.5)},paddingTop:"1.75rem"},value:h,onChange:w=>u(w.currentTarget.value),rows:3,spellCheck:!1}),v(G,{css:{position:"absolute",top:0,left:0,pointerEvents:"none",fontSize:"0.75rem",color:n.colors.text(.625),padding:"0.5rem 1rem",textTransform:"uppercase"},children:e("live_example_value_textbox_label")}),$(M,{css:{pointerEvents:"none","& > *":{pointerEvents:"auto"},position:"absolute",top:0,right:0,padding:"0.375rem 1rem",fontSize:"0.875rem",color:n.colors.primary()},gap:"0.5rem",children:[v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>u("'Hello, World.'"),children:e("live_example_preset_string")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>u("99"),children:e("live_example_preset_number")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>u("[1,2,3]"),children:e("live_example_preset_array")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>u("{ foo: 'bar', baz: 1 }"),children:e("live_example_preset_object")})]})]}),v(ae,{css:{alignSelf:"center",blockSize:"4rem",inlineSize:"4rem"},children:v(sn,{isSuccess:c})}),$(_,{flex:1,children:[v(me,{css:{flex:1,resize:"none",background:n.colors.background(l?.33:2),borderRadius:n.radius.md,padding:n.space.md,fontFamily:'"Share Tech Mono", monospace',borderWidth:"1px",borderStyle:"solid",borderColor:n.colors.text(.125),"&:focus":{borderColor:n.colors.text(.5)},paddingTop:"1.75rem"},value:p,onChange:w=>o(w.currentTarget.value),rows:3,spellCheck:!1}),v(G,{css:{position:"absolute",top:0,left:0,pointerEvents:"none",fontSize:"0.75rem",color:n.colors.text(.625),padding:"0.5rem 1rem",textTransform:"uppercase"},children:e("live_example_type_guard_textbox_label")}),$(M,{css:{pointerEvents:"none","& > *":{pointerEvents:"auto"},position:"absolute",top:0,right:0,padding:"0.375rem 1rem",fontSize:"0.875rem",color:n.colors.primary()},gap:"0.5rem",children:[v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>o("is('string')"),children:e("live_example_preset_string")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>o("is('number')"),children:e("live_example_preset_number")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>o("isArrayOf('number')"),children:e("live_example_preset_array")}),v(L,{css:{"&:hover":{color:D(n.colors.primary())}},onClick:()=>o("is({ foo: 'string', baz: 'number' })"),children:e("live_example_preset_object")})]})]})]})]})})},sn=({isSuccess:e})=>{const{theme:n}=Z(),s="4rem",l=.4375,h=2*Math.PI*l,u={cx:"0.5",cy:"0.5",r:String(l),fill:"none",stroke:e?n.colors.primary():n.colors.danger(),strokeWidth:String((1-l-.5)*2)};return $(ae,{css:{width:s,height:s},children:[$("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",viewBox:"0 0 1 1",children:[v("circle",{...u,strokeOpacity:"0.33",css:{width:s,height:s,transition:"stroke 333ms linear"}}),v("circle",{...u,strokeLinecap:"round",css:{transformOrigin:"50% 50%",transform:"rotate(-90deg)",transition:"stroke-dashoffset 333ms ease-in-out, stroke 333ms linear",strokeDashoffset:e?0:`${h}px`,strokeDasharray:`${h}px`}})]}),v(ae,{css:{position:"absolute",top:"50%",left:"50%",fontSize:"1.5rem",transform:`translate(-50%,-50%) scale(${e?1:0})`,transitionDuration:e?"333ms":"50ms",transitionTimingFunction:"cubic-bezier(0,.55,.45,1)",transitionProperty:"top, transform, opacity",transitionDelay:e?"50ms":"0ms"},children:"\u{1F973}"}),v(ae,{css:{position:"absolute",top:"50%",left:"50%",fontSize:"1.5rem",transform:`translate(-50%,-50%) scale(${e?0:1})`,transitionDuration:e?"50ms":"333ms",transitionTimingFunction:"cubic-bezier(0,.55,.45,1)",transitionProperty:"top, transform, opacity",transitionDelay:e?"0ms":"50ms"},children:"\u{1F974}"})]})},on=["isInstanceOf(RegExp)","isInstanceOf(Date)","is(['string', 'number'])","is(['number', isStringOrUndefined])","isArrayOf(isStringOrNumber)","isArrayOf(is('string').or('number'))","isArrayOf('string').orArrayOf('number')","isUndefined.orArrayOf('boolean')","isArrayOf('boolean')","isArrayOf('null')","isArrayOf('number')","isArrayOf('string')","is('boolean')","is('bigint')","is('null')","is('number')","is('string')","is('symbol')","is('undefined')","is('boolean').or('undefined')","is('null').or('undefined')","is('number').or('bigint')","is('string').or('number')","isBoolean","isNull","isNumber","isString","isUndefined","isBooleanOrNull","isNumberOrNull","isStringOrNull","isBooleanOrUndefined","isNumberOrUndefined","isStringOrUndefined","isSymbolOrUndefined","isNullOrUndefined","isLiterally('sm', 'md', 'lg')","isInstanceOf(Date)","isInstanceOf(RegExp)","isInstanceOf(Buffer)"],cn=(e,n)=>Array(n).fill(void 0).map(()=>Array(16).fill(void 0).map(()=>e[Math.floor(Math.random()*(e.length-1))])),ln=()=>{const{theme:e,isDarkMode:n}=Z(),s=ve("lg"),l=e.colors.background(n?0:2),h=z.exports.useMemo(()=>cn(on,8),[]),u=z.exports.useMemo(()=>{const p=[e.colors.primary(),e.colors.text(.375),e.colors.text(.75)];return h.map(o=>o.map(()=>p[Math.floor(Math.random()*p.length)]))},[h,e.colors]);return $(re,{css:{pointerEvents:"none",userSelect:"none",overflow:"hidden"},children:[v(re,{css:{fontFamily:'"Share Tech Mono", monospace',opacity:n?s?.3:.15:s?.4:.3,top:"-0.25rem"},children:h.map((p,o)=>v(G,{css:{whiteSpace:"nowrap"},children:p.map((c,g)=>v("span",{css:{color:u[o][g]},children:c},g))},o))}),v(re,{css:{background:`linear-gradient(90deg, ${l} 0%, ${l} 33%, transparent 66%, ${l} 87.5%, ${l} 100%)`}}),v(re,{css:{background:`linear-gradient(0deg, ${l} 0%, transparent 12.5%, transparent 87.5%, ${l} 100%)`}})]})},dn=()=>{const e=Ce("tsGuardian"),{theme:n}=Z();return v(M,{distribute:"center",children:$(M,{align:"center",flex:1,distribute:"between",css:{maxWidth:"80rem",padding:n.space("xl","lg")},children:[v(ln,{}),$(_,{gap:n.space.xs,children:[v(G,{element:"h1",size:"xxl",weight:"bold",children:e("title")}),v(G,{children:v(Qe,{i18nKey:"tsGuardian:subtitle",components:{highlight:v("span",{css:{color:n.colors.primary()}})}})})]}),$(M,{css:{alignSelf:"start"},gap:n.space.md,children:[v(be,{icon:"gitHub",to:"https://github.com/jmadelaine/ts-guardian"}),v(be,{icon:"npm",to:"https://www.npmjs.com/package/ts-guardian"})]})]})})},be=({icon:e,to:n,...s})=>{const{theme:l}=Z();return v("a",{css:{color:l.colors.text(),"&:hover":{color:l.colors.primary()}},target:"_blank",rel:"noreferrer",href:n,...s,children:v(Ue,{icon:e})})},gn=()=>(z.exports.useEffect(()=>{un()},[]),$(Ne,{children:[v(dn,{}),$(_,{gap:"3rem",children:[v(an,{}),v(rn,{})]})]})),un=()=>{const e=document.createElement("script");e.innerText="var exports = {};",document.head.appendChild(e);const n=document.createElement("script");n.type="module",n.innerText=`
  import * as TSG from 'https://unpkg.com/ts-guardian/lib/index.js';
  window.TSG = exports;
  `,document.head.appendChild(n)};export{gn as default};
