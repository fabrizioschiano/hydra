"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5198],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?t.createElement(f,a(a({ref:n},s),{},{components:r})):t.createElement(f,a({ref:n},s))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=p;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8565:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],u={id:"intro",title:"Overview",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"configure_hydra/intro",id:"version-0.11/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized, this includes:",source:"@site/versioned_docs/version-0.11/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/0.11/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/configure_hydra/Intro.md",tags:[],version:"0.11",lastUpdatedBy:"Jasha10",lastUpdatedAt:1641881010,formattedLastUpdatedAt:"1/11/2022",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-0.11/docs",previous:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"},next:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"}},s=[{value:"Runtime variables",id:"runtime-variables",children:[]}],d={toc:s};function p(e){var n=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many things in Hydra can be customized, this includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logging configuration"),(0,o.kt)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),(0,o.kt)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,o.kt)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,o.kt)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",(0,o.kt)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),(0,o.kt)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),(0,o.kt)("p",null,"You can view the Hydra config structure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/hydra/conf"},"here"),"."),(0,o.kt)("p",null,"This is a subset of the composed Hydra configuration node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),(0,o.kt)("h2",{id:"runtime-variables"},"Runtime variables"),(0,o.kt)("p",null,"The following variables are populated at runtime.\nYou can access them as config variables."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (Slurm etc) ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")))}p.isMDXComponent=!0}}]);