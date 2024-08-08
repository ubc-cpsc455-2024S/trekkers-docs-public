"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[424],{8480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const o={slug:"trek-gis-study",title:"Choosing the Best Geographic Information System (GIS) for Trek",authors:["matthew"],tags:["project","maps","POI","GIS","geocoding","routing"]},r=void 0,a={permalink:"/trekkers-docs-public/blog/trek-gis-study",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-10-gis-study.md",source:"@site/blog/2024-07-10-gis-study.md",title:"Choosing the Best Geographic Information System (GIS) for Trek",description:"This blogpost is a modified version of an internal Trek document. You can view the internal document",date:"2024-07-10T00:00:00.000Z",tags:[{label:"project",permalink:"/trekkers-docs-public/blog/tags/project"},{label:"maps",permalink:"/trekkers-docs-public/blog/tags/maps"},{label:"POI",permalink:"/trekkers-docs-public/blog/tags/poi"},{label:"GIS",permalink:"/trekkers-docs-public/blog/tags/gis"},{label:"geocoding",permalink:"/trekkers-docs-public/blog/tags/geocoding"},{label:"routing",permalink:"/trekkers-docs-public/blog/tags/routing"}],readingTime:4.595,hasTruncateMarker:!1,authors:[{name:"Matthew Kang",title:"Developer",url:"https://www.linkedin.com/in/kang-matt/",imageURL:"/trekkers-docs-public/img/matthewkang.jpeg",key:"matthew"}],frontMatter:{slug:"trek-gis-study",title:"Choosing the Best Geographic Information System (GIS) for Trek",authors:["matthew"],tags:["project","maps","POI","GIS","geocoding","routing"]},unlisted:!1,prevItem:{title:"Trek's File Storage System with Amazon S3",permalink:"/trekkers-docs-public/blog/s3-integration"},nextItem:{title:"Local Deployment and a Glimpse Into Trek's CI/CD System",permalink:"/trekkers-docs-public/blog/local-deployment-experiment"}},d={authorsImageUrls:[void 0]},l=[{value:"What is a GIS?",id:"what-is-a-gis",level:2},{value:"What makes a GIS Good (for Trek)?",id:"what-makes-a-gis-good-for-trek",level:2},{value:"Comparison of GIS API Integrations",id:"comparison-of-gis-api-integrations",level:2},{value:"Summary",id:"summary",level:3},{value:"POI Data: Image, Description, and Reviews Data",id:"poi-data-image-description-and-reviews-data",level:3}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["This blogpost is a modified version of an internal Trek document. You can view the internal document\n",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(13).A+"",children:"here"}),"."]})}),"\n",(0,i.jsxs)(t.p,{children:["Integrating ",(0,i.jsx)(t.strong,{children:"Google Maps"})," was our original plan at Trek until we realized that the cost of integrating Google Maps would be outside our budget, as well as the budget of anyone deploying Trek."]}),"\n",(0,i.jsx)(t.p,{children:"Although Google provides its customers with a $200 credit for the use of their APIs, including the Google Maps Platform APIs, once customers exceed the $200 limit, they are faced with potentially thousands of dollars in billing statements."}),"\n",(0,i.jsx)(t.p,{children:"The truth is, Google holds a monopoly over high-quality geographical information, especially their Places API, which provides the best up-to-date Points of Interest (POI) data. Using Google would be the best move if we could afford to lose the money. Unfortunately, we are not one of those companies that can lose money for a decade before making a profit."}),"\n",(0,i.jsx)(t.p,{children:"Furthermore, Google does not allow its customers to cache or store any of its data (with the exception of place IDs), which means that every time we want to display a place name for the user, we have to call Google's API\u2014something we cannot afford."}),"\n",(0,i.jsx)(t.p,{children:"This blog post goes through the GIS alternatives to Google Maps that we have explored in the process of designing and building Trek."}),"\n",(0,i.jsx)(t.h2,{id:"what-is-a-gis",children:"What is a GIS?"}),"\n",(0,i.jsx)(t.p,{children:"A Geographic Information System (GIS) is a powerful tool that allows users to visualize, analyze, and interpret spatial and geographic data. In the context of Trek, a GIS is essential for enhancing the user experience by providing detailed and interactive maps, route planning, and information on places of interest. It integrates various data sources to create a comprehensive view of the trip and the world."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"A Geographic Information System (GIS) for Trek should offer the following features or services:"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Maps -"})," Various visual dynamic maps imagery. Displays maps for \u2018Map View\u2019 and location markers, \u2018Pins\u2019 within the map, and geographic information (longitude and latitude) to provide context when searching for places."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Routes -"})," Provides routing information in \u2018driving\u2019, \u2018transiting\u2019, \u2018cycling\u2019, or \u2018walking\u2019. Find best routes from place to place in different transportation methods."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Places of Interest (POI) -"})," Provides information on places and ability to search for places. Gathers and provides place information including place ID (identifiers), name, location, description, address, photo, and reviews."]}),"\n",(0,i.jsx)(t.h2,{id:"what-makes-a-gis-good-for-trek",children:"What makes a GIS Good (for Trek)?"}),"\n",(0,i.jsx)(t.p,{children:"GIS can be used in many different applications and use cases. The goal of GIS in Trek is to help meet its functional and non-functional requirements,\nincluding scalability and future-oriented design. The goal is to explore different GIS options Trek can integrate, while considering the following:"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Compliance \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cAre we complying with GIS\u2019 Terms of Service? Are we stealing data and potentially committing academic misconduct?\u201d"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"UI/UX \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cDoes the UI Look Good?\u201d"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Usability \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cDoes it provide good usability with sufficient information of places and provide quality search and personalization?\u201d"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Sustainability \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cWill the system be financially sustainable with the integration costs? Can costs be lowered by caching or storing data?\u201d"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Maintainability \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cIs the information easily manageable and does not require frequent extensive maintenance on Trek\u2019s end?\u201d"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Dependency \u2014"})," ",(0,i.jsx)(t.em,{children:"\u201cCan we manage our own information without relying on the GIS?  Are we able to migrate from this GIS to another system easily\u201d"})]}),"\n",(0,i.jsx)(t.h2,{id:"comparison-of-gis-api-integrations",children:"Comparison of GIS API Integrations"}),"\n",(0,i.jsx)(t.p,{children:"Some GIS services do not provide all three packages (Maps, Routing, POI). Some GIS services do not allow caching or storage of data. Some GIS services are outside our budget."}),"\n",(0,i.jsx)(t.h3,{id:"summary",children:"Summary"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"API"}),(0,i.jsx)(t.th,{children:"Maps & Routing"}),(0,i.jsx)(t.th,{children:"Places of Interests"}),(0,i.jsx)(t.th,{children:"Caching & Storing"}),(0,i.jsx)(t.th,{children:"Pricing"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Google Maps Platform"}),(0,i.jsx)(t.td,{children:"Best"}),(0,i.jsx)(t.td,{children:"Photos, Reviews"}),(0,i.jsx)(t.td,{children:"Restrictive"}),(0,i.jsx)(t.td,{children:"High"}),(0,i.jsx)(t.td,{children:"Best up-to-date POI information"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FourSquare"}),(0,i.jsx)(t.td,{children:"N/A (POI only)"}),(0,i.jsx)(t.td,{children:"Photos, Reviews"}),(0,i.jsx)(t.td,{children:"Restrictive"}),(0,i.jsx)(t.td,{children:"Medium"}),(0,i.jsx)(t.td,{children:"Provides decent POI and places \u2018personalization\u2019; best for tourist POI"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mapbox"}),(0,i.jsx)(t.td,{children:"Good"}),(0,i.jsx)(t.td,{children:"Integrates FourSquare"}),(0,i.jsx)(t.td,{children:"Restrictive (non-enterprise)"}),(0,i.jsx)(t.td,{children:"Medium/Low"}),(0,i.jsx)(t.td,{children:"Alternative to Google Maps. Good UI. OSM-based. Second most popular"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"LocationIQ"}),(0,i.jsx)(t.td,{children:"No transit routing"}),(0,i.jsx)(t.td,{children:"Only GeoCoding"}),(0,i.jsx)(t.td,{children:"Allowed"}),(0,i.jsx)(t.td,{children:"Low"}),(0,i.jsx)(t.td,{children:"Fully OSM Data packaged as API. Comes with only Geocoding data (no POI)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MapTiler"}),(0,i.jsx)(t.td,{children:"Good"}),(0,i.jsx)(t.td,{children:"Basic"}),(0,i.jsx)(t.td,{children:"Client-side"}),(0,i.jsx)(t.td,{children:"Low"}),(0,i.jsx)(t.td,{})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HERE"}),(0,i.jsx)(t.td,{children:"Good"}),(0,i.jsx)(t.td,{children:"Basic"}),(0,i.jsx)(t.td,{children:"30 days or Response Header"}),(0,i.jsx)(t.td,{children:"Low"}),(0,i.jsx)(t.td,{children:"No permanent storage of location IDs"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"MapQuest"}),(0,i.jsx)(t.td,{children:"No transit routing"}),(0,i.jsx)(t.td,{children:"Basic"}),(0,i.jsx)(t.td,{children:"Restrictive (non-paid)"}),(0,i.jsx)(t.td,{children:"Low"}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"poi-data-image-description-and-reviews-data",children:"POI Data: Image, Description, and Reviews Data"}),"\n",(0,i.jsx)(t.p,{children:"Apart from Google Maps Platform and ForeSquare, OSM-based GIS APIs only provide basic POI data. Some GIS APIs do not provide contact information or opening hours. We can integrate the following technologies to provide end-users with these data:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Image"})," \u2013 For landmarks, well-known businesses (e.g. McDonalds), and attractions, use Wikipedia API to fetch images that are shareable for commercial purposes."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Description"})," \u2013 For landmarks, well-known businesses (e.g. McDonalds), and attractions, use AI generated descriptions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact, Hours, and Reviews"})," \u2013 Use TripAdvisor or Yelp API to link review data, open hours, and contact information. Only load review data if the user clicks on it to limit unnecessary API calls. Yelp allows caching up to 24 hours but has no free tier."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"In-House User-Contributed POI Data System"})," \u2013 Support an in-house user-contributed POI Data system, where users can upload images, description, and reviews to a place."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},13:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/files/Trek-Geographic-Information-System-f322afbecf2fe7577b463c2abb7b07d3.pdf"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);