"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7478],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return u}});var a=n(7462),r=n(7294),o=n(6742),i=n(2263),l=n(907);function s(e){return r.createElement(o.Z,(0,a.Z)({},e,{to:(t=e.to,s=(0,l.zu)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example";return r.createElement(s,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},6133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return f}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(3899),l=["components"],s={id:"defaults",title:"Defaults List"},u=void 0,c={unversionedId:"tutorials/structured_config/defaults",id:"version-1.1/tutorials/structured_config/defaults",isDocsHomePage:!1,title:"Defaults List",description:"You can define a defaults list in your primary Structured Config just like you can in your primary config.yaml file.",source:"@site/versioned_docs/version-1.1/tutorials/structured_config/4_defaults.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/defaults",permalink:"/docs/tutorials/structured_config/defaults",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/tutorials/structured_config/4_defaults.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1641881010,formattedLastUpdatedAt:"1/11/2022",sidebarPosition:4,frontMatter:{id:"defaults",title:"Defaults List"},sidebar:"version-1.1/docs",previous:{title:"Config Groups",permalink:"/docs/tutorials/structured_config/config_groups"},next:{title:"Structured Config schema",permalink:"/docs/tutorials/structured_config/schema"}},d=[{value:"A Note about composition order",id:"a-note-about-composition-order",children:[]},{value:"Requiring users to specify a default list value",id:"requiring-users-to-specify-a-default-list-value",children:[]}],p={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.T,{to:"examples/tutorials/structured_configs/4_defaults/my_app.py",mdxType:"ExampleGithubLink"}),(0,o.kt)("p",null,"You can define a defaults list in your primary Structured Config just like you can in your primary ",(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," file.\nThe example below extends the previous example by adding a defaults list that will load ",(0,o.kt)("inlineCode",{parentName:"p"},"db=mysql")," by default."),(0,o.kt)("div",{class:"alert alert--info",role:"alert"},"NOTE: You can still place your defaults list in your primary (YAML) config file (Example in next page)."),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{11-14,19,25}","{11-14,19,25}":!0},'from omegaconf import MISSING, OmegaConf\n\n@dataclass\nclass MySQLConfig:\n    ...\n\n@dataclass\nclass PostGreSQLConfig:\n    ...\n\ndefaults = [\n    # Load the config "mysql" from the config group "db"\n    {"db": "mysql"}\n]\n\n@dataclass\nclass Config:\n    # this is unfortunately verbose due to @dataclass limitations\n    defaults: List[Any] = field(default_factory=lambda: defaults)\n\n    # Hydra will populate this field based on the defaults list\n    db: Any = MISSING\n\ncs = ConfigStore.instance()\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\ncs.store(name="config", node=Config)\n\n\n@hydra.main(config_path=None, config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\n\nif __name__ == "__main__":\n    my_app()\n')),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"my_app.py")," loads the mysql config option by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py\ndb:\n  driver: mysql\n  ...\n")),(0,o.kt)("p",null,"You can override the default option via the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"$ python my_app.py db=postgresql\ndb:\n  driver: postgresql\n  ...\n")),(0,o.kt)("h3",{id:"a-note-about-composition-order"},"A Note about composition order"),(0,o.kt)("p",null,"The default composition order in Hydra is that values defined in a config are merged into values introduced from configs in the Defaults List - or in other words - overriding them.\nThis behavior can be unintuitive when your primary config is a Structured Config, like in the example above.\nFor example, if the primary config is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{6}","{6}":!0},'@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda:  [\n        "debug/activate",\n        # If you do not specify _self_, it will be appended to the end of the defaults list by default.\n        "_self_"\n    ])\n\n    debug: bool = False\n')),(0,o.kt)("p",null,"And ",(0,o.kt)("inlineCode",{parentName:"p"},"debug/activate.yaml")," is overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),", the composition order would be such that debug ends up being ",(0,o.kt)("inlineCode",{parentName:"p"},"False"),".",(0,o.kt)("br",{parentName:"p"}),"\n","To get ",(0,o.kt)("inlineCode",{parentName:"p"},"debug/activate.yaml")," to override this config, explicitly specify ",(0,o.kt)("inlineCode",{parentName:"p"},"_self_")," before ",(0,o.kt)("inlineCode",{parentName:"p"},"debug/activate.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"{4}","{4}":!0},'@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda:  [\n        "_self_",\n        "debug/activate",\n    ])\n\n    debug: bool = False\n')),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/advanced/defaults_list#composition-order"},"Compositon Order")," for more information."),(0,o.kt)("h3",{id:"requiring-users-to-specify-a-default-list-value"},"Requiring users to specify a default list value"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"db")," as ",(0,o.kt)("inlineCode",{parentName:"p"},"MISSING")," to require the user to specify a value on the command line."),(0,o.kt)("div",{className:"row"},(0,o.kt)("div",{className:"col col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="Defaults list with a missing db"',title:'"Defaults',list:!0,with:!0,a:!0,missing:!0,'db"':!0},'defaults = [\n    {"db": MISSING}\n]\n\n\n'))),(0,o.kt)("div",{className:"col  col--6"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"$ python my_app.py\nYou must specify 'db', e.g, db=<OPTION>\nAvailable options:\n        mysql\n        postgresql\n")))))}f.isMDXComponent=!0}}]);