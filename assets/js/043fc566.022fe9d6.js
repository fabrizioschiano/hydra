"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3584],{3905:function(e,n,a){a.d(n,{Zo:function(){return m},kt:function(){return u}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),s=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,h=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?t.createElement(h,p(p({ref:n},m),{},{components:a})):t.createElement(h,p({ref:n},m))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<i;s++)p[s]=a[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8172:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),p=["components"],o={id:"ax_sweeper",title:"Ax Sweeper plugin",sidebar_label:"Ax Sweeper plugin"},l=void 0,s={unversionedId:"plugins/ax_sweeper",id:"version-1.0/plugins/ax_sweeper",isDocsHomePage:!1,title:"Ax Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.0/plugins/ax_sweeper.md",sourceDirName:"plugins",slug:"/plugins/ax_sweeper",permalink:"/docs/1.0/plugins/ax_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/plugins/ax_sweeper.md",tags:[],version:"1.0",lastUpdatedBy:"Jasha10",lastUpdatedAt:1641881010,formattedLastUpdatedAt:"1/11/2022",frontMatter:{id:"ax_sweeper",title:"Ax Sweeper plugin",sidebar_label:"Ax Sweeper plugin"},sidebar:"version-1.0/docs",previous:{title:"Submitit Launcher plugin",permalink:"/docs/1.0/plugins/submitit_launcher"},next:{title:"Nevergrad Sweeper plugin",permalink:"/docs/1.0/plugins/nevergrad_sweeper"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],d={toc:m};function c(e){var n=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://img.shields.io/pypi/v/hydra-ax-sweeper"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-ax-sweeper",alt:"PyPI"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-ax-sweeper",alt:"PyPI - License"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-ax-sweeper",alt:"PyPI - Python Version"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-ax-sweeper"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-ax-sweeper.svg",alt:"PyPI - Downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ax_sweeper/example"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/plugins/hydra_ax_sweeper"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Plugin%20source-informational",alt:"Plugin source"}))),(0,i.kt)("p",null,"This plugin provides a mechanism for Hydra applications to use the ",(0,i.kt)("a",{parentName:"p",href:"https://ax.dev/"},"Adaptive Experimentation Platform, aka Ax"),". Ax can optimize any experiment - machine learning experiments, A/B tests, and simulations. "),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-ax-sweeper --upgrade\n")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once installed, add ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/sweeper=ax")," to your command line. Alternatively, override ",(0,i.kt)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/sweeper: ax\n")),(0,i.kt)("p",null,"We include an example of how to use this plugin. The file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/blob/master/plugins/hydra_ax_sweeper/example/banana.py"},(0,i.kt)("inlineCode",{parentName:"a"},"example/banana.py"))," implements the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rosenbrock_function"},"Rosenbrock function (aka Banana function)"),". The return value of the function should be the value that we want to optimize."),(0,i.kt)("p",null,"To compute the best parameters for the Banana function, clone the code and run the following command in the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper")," directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python example/banana.py -m 'banana.x=int(interval(-5, 5))' 'banana.y=interval(-5, 10.1)'\n")),(0,i.kt)("p",null,"The output of a run looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[HYDRA] AxSweeper is optimizing the following parameters:\nbanana.x: range=[-5, 5], type = int\nbanana.y: range=[-5.0, 10.1], type = float\nax.modelbridge.dispatch_utils: Using Bayesian Optimization generation strategy: GenerationStrategy(name='Sobol+GPEI', steps=[Sobol for 5 arms, GPEI for subsequent arms], generated 0 arm(s) so far). Iterations after 5 will take longer to generate due to model-fitting.\nAxSweeper is launching 5 jobs\n[HYDRA] Launching 5 jobs locally\n[HYDRA]   #0 : banana.x=4 banana.y=-1.484\n[__main__][INFO] - Banana_Function(x=4, y=-1.484)=30581.473\n[HYDRA]   #1 : banana.x=3 banana.y=-3.653\n[__main__][INFO] - Banana_Function(x=3, y=-3.653)=16014.261\n[HYDRA]   #2 : banana.x=0 banana.y=9.409\n[__main__][INFO] - Banana_Function(x=0, y=9.409)=8855.340\n[HYDRA]   #3 : banana.x=-4 banana.y=2.059\n[__main__][INFO] - Banana_Function(x=-4, y=2.059)=19459.063\n[HYDRA]   #4 : banana.x=-3 banana.y=-1.338\n[__main__][INFO] - Banana_Function(x=-3, y=-1.338)=10704.497\n[HYDRA] New best value: 8855.340, best parameters: {'banana.x': 0, 'banana.y': 9.409}\n")),(0,i.kt)("p",null,"In this example, we set the range of ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," parameter as an integer in the interval ",(0,i.kt)("inlineCode",{parentName:"p"},"[-5, 5]")," and the range of ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," parameter as a float in the interval ",(0,i.kt)("inlineCode",{parentName:"p"},"[-5, 10.1]"),". Note that in the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),", we used ",(0,i.kt)("inlineCode",{parentName:"p"},"int(interval(...))")," and hence only integers are sampled. In the case of ",(0,i.kt)("inlineCode",{parentName:"p"},"y"),", we used ",(0,i.kt)("inlineCode",{parentName:"p"},"interval(...)")," which refers to a floating-point interval. Other supported formats are fixed parameters (e.g.",(0,i.kt)("inlineCode",{parentName:"p"}," banana.x=5.0"),"), choice parameters (eg ",(0,i.kt)("inlineCode",{parentName:"p"},"banana.x=choice(1,2,3)"),") and range (eg ",(0,i.kt)("inlineCode",{parentName:"p"},"banana.x=range(1, 10)"),"). Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"interval"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"choice")," etc. are functions provided by Hydra, and you can read more about them ",(0,i.kt)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/"},"here"),". An important thing to remember is, use ",(0,i.kt)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#interval-sweep"},(0,i.kt)("inlineCode",{parentName:"a"},"interval"))," when we want Ax to sample values from an interval. ",(0,i.kt)("a",{parentName:"p",href:"https://ax.dev/api/ax.html#ax.RangeParameter"},(0,i.kt)("inlineCode",{parentName:"a"},"RangeParameter"))," in Ax is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"interval")," in Hydra. Remember to use ",(0,i.kt)("inlineCode",{parentName:"p"},"int(interval(...))")," if you want to sample only integer points from the interval. ",(0,i.kt)("a",{parentName:"p",href:"https://hydra.cc/docs/next/advanced/override_grammar/extended/#range-sweep"},(0,i.kt)("inlineCode",{parentName:"a"},"range"))," can be used as an alternate way of specifying choice parameters. For example ",(0,i.kt)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=choice(1, 2, 3, 4)")," is equivalent to ",(0,i.kt)("inlineCode",{parentName:"p"},"python example/banana.py -m banana.x=range(1, 5)"),"."),(0,i.kt)("p",null,"The values of the ",(0,i.kt)("inlineCode",{parentName:"p"},"x")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," parameters can also be set using the config file ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/hydra_ax_sweeper/example/conf/config.yaml"),". For instance, the configuration corresponding to the commandline arguments is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"banana.x:\n type: range\n bounds: [-5, 5]\n\nbanana.y:\n type: range\n bounds: [-5, 10.1]\n")),(0,i.kt)("p",null,"In general, the plugin supports setting all the Ax supported ",(0,i.kt)("a",{parentName:"p",href:"https://ax.dev/api/core.html?highlight=range#module-ax.core.parameter"},"Parameters")," in the config. According to the ",(0,i.kt)("a",{parentName:"p",href:"https://ax.dev/api/service.html#ax.service.ax_client.AxClient.create_experiment"},"Ax documentation"),", the required elements in the config are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," - Name of the parameter. It is of type string."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," - Type of the parameter. It can take the following values: ",(0,i.kt)("inlineCode",{parentName:"li"},"range"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fixed"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"choice"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bounds")," - Required only for the ",(0,i.kt)("inlineCode",{parentName:"li"},"range")," parameters. It should be a list of two values, with the lower bound first."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"values")," - Required only for the ",(0,i.kt)("inlineCode",{parentName:"li"},"choice")," parameters. It should be a list of values."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," - Required only for the ",(0,i.kt)("inlineCode",{parentName:"li"},"fixed")," parameters. It should be a single value. ")),(0,i.kt)("p",null,"Note that if you want to sample integers in the range ",(0,i.kt)("inlineCode",{parentName:"p"},"-5")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",(0,i.kt)("inlineCode",{parentName:"p"},"int(interval(-5, 5))")," (in the command line) or ",(0,i.kt)("inlineCode",{parentName:"p"},"[-5, 5]")," (in config). If you want to sample floats in range ",(0,i.kt)("inlineCode",{parentName:"p"},"-5")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),", you need to specify the range as ",(0,i.kt)("inlineCode",{parentName:"p"},"interval(-5, 5)")," (in the command line) or ",(0,i.kt)("inlineCode",{parentName:"p"},"[-5.0, 5.0]")," (in config)."),(0,i.kt)("p",null,"The parameters for the optimization process can also be set in the config file. Specifying the Ax config is optional. You can discover the Ax Sweeper parameters with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app.py hydra/sweeper=ax --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,"your_app.py":!0,"hydra/sweeper":"ax","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_ax_sweeper.ax_sweeper.AxSweeper\nmax_batch_size: null\nax_config:\n  max_trials: 10\n  early_stop:\n    minimize: true\n    max_epochs_without_improvement: 10\n    epsilon: 1.0e-05\n  experiment:\n    name: null\n    objective_name: objective\n    minimize: true\n    parameter_constraints: null\n    outcome_constraints: null\n    status_quo: null\n  client:\n    verbose_logging: false\n    random_seed: null\n  params: {}\n")))}c.isMDXComponent=!0}}]);