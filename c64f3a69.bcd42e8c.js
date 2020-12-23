(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{196:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(2),a=t(7),o=(t(0),t(243)),i={id:"config_file",title:"Configuration file",sidebar_label:"Configuration file"},c={unversionedId:"tutorial/config_file",id:"version-0.11/tutorial/config_file",isDocsHomePage:!1,title:"Configuration file",description:"It can get tedious to type all those command line arguments every time.",source:"@site/versioned_docs/version-0.11/tutorial/2_config_file.md",slug:"/tutorial/config_file",permalink:"/docs/0.11/tutorial/config_file",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/tutorial/2_config_file.md",version:"0.11",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1608712138,sidebar_label:"Configuration file",sidebar:"version-0.11/docs",previous:{title:"Simple command line application",permalink:"/docs/0.11/tutorial/simple_cli"},next:{title:"Config groups",permalink:"/docs/0.11/tutorial/config_groups"}},l=[{value:"Strict mode",id:"strict-mode",children:[]}],p={rightToc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It can get tedious to type all those command line arguments every time.\nFix it by creating a configuration file:"),Object(o.b)("p",null,"Configuration file: ",Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),Object(o.b)("p",null,"Specify the config file by passing a ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," parameter to the ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator.\nThe location of the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," is relative to your Python file."),Object(o.b)("p",null,"Python file: ",Object(o.b)("inlineCode",{parentName:"p"},"my_app.py")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    print(OmegaConf.to_yaml(cfg))\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(o.b)("p",null,"You can override values in the loaded config from the command line:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),Object(o.b)("h3",{id:"strict-mode"},"Strict mode"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Strict mode")," is useful for catching mistakes in both the command line overrides and in the code early.\nStrict mode is on by default when you specify a configuration file for the ",Object(o.b)("inlineCode",{parentName:"p"},"config_path")," argument in ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main")," decorator.\nIt can be turned on or off via the ",Object(o.b)("inlineCode",{parentName:"p"},"strict")," argument in your ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," decorator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"@hydra.main(config_path='config.yaml')\ndef my_app(cfg):\n    driver = cfg.db.driver # Okay\n    user = cfg.db.user # Okay\n    password = cfg.db.password # Not okay, there is no password field in db!\n                               # This will result in a KeyError\n")),Object(o.b)("p",null,"Strict mode will also catch command line override mistakes:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"$ python my_app.py db.port=3306\nTraceback (most recent call last):\n...\nKeyError: 'Accessing unknown key in a struct : db.port\n")),Object(o.b)("p",null,"With strict mode off, accessing unknown keys in the config is permitted and both the above override and the example\nbelow would run."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"@hydra.main(config_path='config.yaml', strict=False)\ndef my_app(cfg):\n    cfg.db.port = 3306 # Okay\n")))}s.isMDXComponent=!0},243:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return t?a.a.createElement(m,c(c({ref:n},p),{},{components:t})):a.a.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);