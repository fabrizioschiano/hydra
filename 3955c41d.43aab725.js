(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{163:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(230)),i={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},c={id:"tutorials/basic/running_your_app/multi-run",title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/docs/tutorials/basic/running_your_app/2_multirun.md",permalink:"/docs/next/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/running_your_app/2_multirun.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1590802749,sidebar_label:"Multi-run",sidebar:"Docs",previous:{title:"Putting it all together",permalink:"/docs/next/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/next/tutorials/basic/running_your_app/working_directory"}},s=[{value:"Sweeper",id:"sweeper",children:[]},{value:"Launcher",id:"launcher",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Sometimes you want to run a parameter sweep.\nA parameter sweep is a method of evaluating a function (or a program) with a pre-determined set of parameters.\nThe examples below will clarify what this means."),Object(o.b)("p",null,"To run a parameter sweep, use the ",Object(o.b)("inlineCode",{parentName:"p"},"--multirun")," (",Object(o.b)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep."),Object(o.b)("p",null,"To run your program with the 3 different schemas in schema config group:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"$ python my_app.py -m schema=warehouse,support,school\n")),Object(o.b)("p",null,"Here is sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"})," $ python my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),Object(o.b)("h3",{id:"sweeper"},"Sweeper"),Object(o.b)("p",null,"The sweeping logic is implemented by a simple sweeper that is built into Hydra.\nAdditional sweepers are available as plugins.\nFor example, the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/plugins/ax_sweeper"}),"Ax Sweeper")," can automatically find the best parameter combination!"),Object(o.b)("h3",{id:"launcher"},"Launcher"),Object(o.b)("p",null,"A Launcher is what runs your job, Hydra comes with a simple launcher that runs the jobs locally and serially.\nHowever, other launchers are available as plugins. For example - The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/plugins/joblib_launcher"}),"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."),Object(o.b)("p",null,"There are plans to add additional Launchers, such as a Launcher that launches your application code on AWS."))}l.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=n,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?a.a.createElement(d,c(c({ref:t},u),{},{components:r})):a.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);