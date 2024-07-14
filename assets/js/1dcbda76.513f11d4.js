"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9041],{7605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=t(4848),a=t(8453),s=t(1470),i=t(9365);const l={sidebar_position:4},o="Destinations",c={id:"api-docs/v1.1/destinations",title:"Destinations",description:"Proposed data:",source:"@site/docs/api-docs/v1.1/destinations.mdx",sourceDirName:"api-docs/v1.1",slug:"/api-docs/v1.1/destinations",permalink:"/trekkers-docs-public/docs/api-docs/v1.1/destinations",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api-docs/v1.1/destinations.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Trips",permalink:"/trekkers-docs-public/docs/api-docs/v1.1/trips"},next:{title:"Project Progress",permalink:"/trekkers-docs-public/docs/category/project-progress"}},d={},u=[{value:"Search for a destination",id:"search-for-a-destination",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Header",id:"header",level:4},{value:"Path",id:"path",level:4},{value:"Response Codes",id:"response-codes",level:3},{value:"Code samples for &quot;Search for a destination&quot;",id:"code-samples-for-search-for-a-destination",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"destinations",children:"Destinations"}),"\n",(0,r.jsx)(n.p,{children:"Proposed data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "name": "Vancouver, B.C.",\n    "image": "https://...",\n    "description": "Vancouver, British Columbia, is a vibrant coastal city\u2026",\n    "url": "http://localhost:3000/api/v1/destination/vancouverbc"\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"TODO"})," See standard requirement for Search for locations within cities, add location pins on map? (",(0,r.jsx)(n.a,{href:"https://developers.google.com/maps/documentation/places/web-service/search",children:"https://developers.google.com/maps/documentation/places/web-service/search"}),")"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Show city/town specific transportation options/cost"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"search-for-a-destination",children:"Search for a destination"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/v1/destination"})}),"\n",(0,r.jsx)(n.p,{children:"Find destinations within a certain radius and/or in a city."}),"\n",(0,r.jsxs)(n.p,{children:["If the ",(0,r.jsx)(n.code,{children:"city"})," URL param is specified, only search results that are in that city will be returned."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.code,{children:"lat"}),", ",(0,r.jsx)(n.code,{children:"lon"})," are specified, then the search will be within a circular radius of that location.\nNote that ",(0,r.jsx)(n.strong,{children:"both"})," lat and lon are required together (i.e. queries with only lat or only lon will be rejected)."]}),"\n",(0,r.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.h4,{id:"header",children:"Header"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.code,{children:"token"})," string"]}),(0,r.jsx)(n.td,{children:"The user access token"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"path",children:"Path"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"city"})}),(0,r.jsx)(n.td,{children:"City name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lat"})}),(0,r.jsx)(n.td,{children:"Latitude of location (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lon"})}),(0,r.jsx)(n.td,{children:"Longitude of location (optional)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"radius"})}),(0,r.jsx)(n.td,{children:"Radius to search for location by (optional for lat/lon, default 50km)"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response-codes",children:"Response Codes"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Status code"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"200"})}),(0,r.jsx)(n.td,{children:"OK"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"400"})}),(0,r.jsx)(n.td,{children:"Bad request"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"401"})}),(0,r.jsx)(n.td,{children:"Unauthorized"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"404"})}),(0,r.jsx)(n.td,{children:"Not found"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"code-samples-for-search-for-a-destination",children:'Code samples for "Search for a destination"'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="GET /api/v1/destinations?city=VancouverBC"',children:'curl -L \\\n    -H "Authorization: Bearer <YOUR-TOKEN>" \\\n    http://localhost:3000/api/v1/destinations?city=VancouverBC\n'})}),"\n",(0,r.jsxs)(s.A,{className:"response-examples",children:[(0,r.jsxs)(i.A,{value:"example",label:"Example response",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"status: 200"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "name": "Queen Elizabeth Park",\n        "image": "https://...",\n        "description": "Queen Elizabeth Park is a 130-acre municipal park located in Vancouver, British Columbia, Canada."\n    },\n    {\n        "name": "Stanley Park",\n        "image": "https://...",\n        "description": "Stanley Park is a 405-hectare public park that borders the downtown of Vanocuver in British Columbia, Canada and is almost entirely surrounded by waters of Vancouver Harbour an..."\n    }\n]\n'})})]}),(0,r.jsx)(i.A,{value:"schema",label:"Response schema",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "name": string,\n        "image": string,\n        "description": string\n    }\n]\n'})})})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="GET /api/v1/destinations?lat=49.225407&lon=-123.023471"',children:'curl -L \\\n    -H "Authorization: Bearer <YOUR-TOKEN>" \\\n    http://localhost:3000/api/v1/destinations?lat=49.225407&lon=-123.023471\n'})}),"\n",(0,r.jsx)(s.A,{className:"response-examples",children:(0,r.jsxs)(i.A,{value:"example",label:"Example response",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"status: 200"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "name": "Central Park",\n        "image": "https://...",\n        "description": "Central Park is a 90-acre municipal park located in Burnaby, British Columbia, Canada."\n    },\n    {\n        "name": "Killarney Park",\n        "image": "https://...",\n        "description": "Killarney Community Centre is a 32.5 acre municipal park located in Vancouver, British Columbia, Canada."\n    }\n]\n'})})]})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(6540),a=t(4164),s=t(3104),i=t(6347),l=t(205),o=t(7485),c=t(1682),d=t(9466);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,u]=x({queryString:t,groupId:a}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,s]),tabValues:s}}var j=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(4848);function v(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,a.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var r=t(6540);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);