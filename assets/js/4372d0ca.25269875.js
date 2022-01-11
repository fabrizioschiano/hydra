"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2747],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,g=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5251:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"changes_to_package_header",title:"Changes to Package Header"},c=void 0,s={unversionedId:"upgrades/1.0_to_1.1/changes_to_package_header",id:"version-1.1/upgrades/1.0_to_1.1/changes_to_package_header",isDocsHomePage:!1,title:"Changes to Package Header",description:"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.",source:"@site/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_package_header.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/changes_to_package_header",permalink:"/docs/upgrades/1.0_to_1.1/changes_to_package_header",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/upgrades/1.0_to_1.1/changes_to_package_header.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1641881010,formattedLastUpdatedAt:"1/11/2022",frontMatter:{id:"changes_to_package_header",title:"Changes to Package Header"},sidebar:"version-1.1/docs",previous:{title:"Defaults List interpolation",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_interpolation"},next:{title:"Automatic schema-matching",permalink:"/docs/upgrades/1.0_to_1.1/automatic_schema_matching"}},d=[{value:"Migration",id:"migration",children:[]},{value:"Compatibility with both Hydra 1.0 and 1.1",id:"compatibility-with-both-hydra-10-and-11",children:[]}],p={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hydra 1.0 introduced the package header and required everyone to specify it in their configs.\nThis was done to facilitate a transition from a model where the packages are global\nto a model where - by default - package are derived from the config group."),(0,o.kt)("p",null,"e.g: Change of the default package for ",(0,o.kt)("inlineCode",{parentName:"p"},"server/db/mysql.yaml")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"_global_")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"server.db"),"."),(0,o.kt)("p",null,"Hydra 1.1 completes this transition. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a package header is not specified, the config will have the default package as described above."),(0,o.kt)("li",{parentName:"ul"},"_","group","_"," and ","_","name","_"," in package header are deprecated (You can still use a literal package header).")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Another important change in Hydra 1.1 is the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/upgrades/1.0_to_1.1/default_composition_order"},"Changes to default composition order"),"."))),(0,o.kt)("h3",{id:"migration"},"Migration"),(0,o.kt)("p",null,"If your header is ",(0,o.kt)("inlineCode",{parentName:"p"},"# @package _group_"),", remove the header."),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"host: localhost\n\n")))),(0,o.kt)("p",null,"If your header is using ",(0,o.kt)("inlineCode",{parentName:"p"},"_group_")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"_name_")," to specify a package other than the default package,\nSpecify the literal package:"),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_._name_\nhost: localhost\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db.mysql\nhost: localhost\n")))),(0,o.kt)("h3",{id:"compatibility-with-both-hydra-10-and-11"},"Compatibility with both Hydra 1.0 and 1.1"),(0,o.kt)("p",null,"If your configs should be compatible with both Hydra 1.0 and Hydra 1.1, use literal package headers."),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.0"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.0"':!0},"# @package _group_\nhost: localhost\n"))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml in Hydra 1.1"',title:'"db/mysql.yaml',in:!0,Hydra:!0,'1.1"':!0},"# @package db\nhost: localhost\n")))))}m.isMDXComponent=!0}}]);