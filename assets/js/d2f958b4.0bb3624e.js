"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2019],{9785:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=i(4848),s=i(8453);const r={sidebar_position:3},a="Trek Refined Requirements",o={id:"requirements/refined-requirements",title:"Trek Refined Requirements",description:"A PDF verison of this documentation is available here.",source:"@site/docs/requirements/refined-requirements.md",sourceDirName:"requirements",slug:"/requirements/refined-requirements",permalink:"/trekkers-docs-public/docs/requirements/refined-requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/requirements/refined-requirements.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Initial Requirements",permalink:"/trekkers-docs-public/docs/requirements/initial-requirements"},next:{title:"Release Notes",permalink:"/trekkers-docs-public/docs/category/release-notes"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Definitions",id:"definitions",level:2},{value:"High-Level Goals",id:"high-level-goals",level:3},{value:"Impact on Different People and Stakeholders",id:"impact-on-different-people-and-stakeholders",level:3},{value:"In Scope",id:"in-scope",level:3},{value:"Out of Scope",id:"out-of-scope",level:3},{value:"Constraints",id:"constraints",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Requirement Categories",id:"requirement-categories",level:3},{value:"Requirements",id:"requirements",level:3}];function c(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"trek-refined-requirements",children:"Trek Refined Requirements"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["A PDF verison of this documentation is available ",(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(1313).A+"",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"This document serves as the Requirements Documentation for the Trek project, developed by Group 4: Trekkers, as part of CPSC 455 at the University of British Columbia. Following the Terms of Reference, this document provides a detailed outline of the functional and non-functional requirements necessary to build Trek, a personalized trip-planning web application."}),"\n",(0,t.jsx)(n.p,{children:"Trek aims to leverage the latest advancements in ML/AI technologies to offer a seamless and intuitive trip-planning experience. This document captures the specific needs and expectations of the end-users, as well as the technical specifications required to meet these needs. The requirements detailed herein will guide the development process, ensuring that all aspects of the project align with the envisioned goals and deliverables."}),"\n",(0,t.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,t.jsx)(n.p,{children:"This document serves for the following objectives:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Define clear and comprehensive functional requirements that describe the behavior and interactions of Trek."}),"\n",(0,t.jsx)(n.li,{children:"Specify non-functional requirements that address performance, usability, reliability, and other critical quality attributes."}),"\n",(0,t.jsx)(n.li,{children:"Provide a foundation for the development, testing, and deployment phases, ensuring all stakeholders have a shared understanding of the project scope and objectives."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"definitions",children:"Definitions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Functional Requirements"}),": These requirements define specific behavior or functions of the system. They describe what the system should do, such as features, operations, and interactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Non-Functional Requirements"}),": These requirements specify criteria that judge the operation of a system, rather than specific behaviors. They include performance, usability, reliability, and security requirements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"MVP (Minimum Viable Product)"}),": Essential features that must be implemented for the system to be functional and deliverable."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Standard"}),": Features that add significant value to the product but are not critical for the initial release. These are implemented after the MVP is completed."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Stretch"}),": Additional features that would be nice to have but are not essential. These are considered only if time and resources permit after completing MVP and Standard requirements."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"high-level-goals",children:"High-Level Goals"}),"\n",(0,t.jsx)(n.p,{children:"The high-level goals of the Trek project are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User-Centric Design"}),": Create an intuitive and user-friendly interface that simplifies the trip-planning process."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Personalization"}),": Utilize ML/AI technologies to offer personalized trip recommendations and itineraries based on user preferences and behaviors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Scalability"}),": Ensure the application can handle a growing number of users and data without compromising performance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Reliability"}),": Develop a robust and reliable system that users can depend on for accurate and up-to-date information."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration"}),": Seamlessly integrate with external APIs (e.g., Tripadvisor, weather services) to provide comprehensive travel information."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"impact-on-different-people-and-stakeholders",children:"Impact on Different People and Stakeholders"}),"\n",(0,t.jsx)(n.p,{children:"The development and deployment of Trek will have varying impacts on different groups of people and stakeholders:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"End-Users"}),": Travelers looking for an easy and efficient way to plan their trips will benefit from a personalized, all-in-one trip-planning tool. They will experience increased convenience and satisfaction from using Trek to organize their travel plans."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Development Team"}),": Members of Group 4: Trekkers will gain hands-on experience in software development, ML/AI integration, and project management, enhancing their technical skills and teamwork capabilities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Future Developers"}),": Clear documentation and a scalable design will make it easier for future developers to understand, maintain, and enhance the application, promoting long-term sustainability."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Instructors and Teaching Assistants"}),": Ian McLean, Firas Moosvi, and Teaching Assistants will have the opportunity to guide and mentor the team, ensuring the project meets educational objectives and providing valuable feedback."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Broader Academic Community"}),": The project serves as a practical example of applying theoretical knowledge to real-world problems, contributing to the academic discourse on software development and ML/AI applications."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"By addressing the needs and expectations of these stakeholders, Trek aims to deliver a meaningful and impactful solution that stands out in the realm of trip-planning applications."}),"\n",(0,t.jsx)(n.h3,{id:"in-scope",children:"In Scope"}),"\n",(0,t.jsx)(n.p,{children:"The following functionalities and features are within the scope of the Trek project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Profile Management"}),": Users can create, view, edit, and delete their profiles, which include personal information and travel preferences."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Trip Planning Interface"}),": Users can create, modify, and manage trip itineraries, including destinations, accommodations, and activities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Personalized Recommendations"}),": Leveraging ML/AI technologies to provide users with personalized travel recommendations based on their preferences and past behaviors."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interactive Map"}),": Display trip details and routes on an interactive map to aid in visualization and transportation planning."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Budget Management"}),": Tools for users to manage their trip budgets, including cost estimations for transportation, lodging, and activities."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chatbot Assistance (stretch)"}),": An integrated chatbot to help users with trip planning tasks, providing suggestions and making changes based on user input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration with External APIs"}),": Using APIs from services like Tripadvisor for destination ratings, weather information, and other travel-related data."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Feedback"}),": Collect and manage user feedback to improve the application\u2019s functionality and user experience."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"out-of-scope",children:"Out of Scope"}),"\n",(0,t.jsx)(n.p,{children:"The following functionalities are not included in the scope of the Trek project:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Administrative Interfaces"}),": There will be no dedicated interfaces for system administrators to manage the application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Advanced User Analytics"}),": Comprehensive analytics and reporting features for tracking user behavior and application usage beyond basic metrics."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Scale Deployment"}),": Deployment and maintenance of the application in a live, production environment able to handle 150+ concurrent users or other conditions beyond the scope of the course project."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Third-Party Advertising"}),": Integration of third-party advertising or monetization features."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Budget"}),": The project budget is limited to $100, affecting the use of paid APIs and cloud services."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Timeline"}),": The project must be completed within the timeframe of the CPSC 455 course, with specific deadlines for deliverables and presentations."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Technical Expertise"}),": The team\u2019s skills and experience will influence the choice of technologies and the complexity of implemented features."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Academic Requirements"}),": The project must meet the academic standards and requirements set by the course instructors and teaching assistants."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Integration & API Access"}),": Access to external APIs such as OpenAI and Google\u2019s APIs is crucial for personalization and other functionalities. Each team member will contribute $20 towards this, totaling $100."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Development Tools"}),": Tools and platforms such as React, Node.js, Express, MongoDB, and Auth0 will be utilized for building the application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Collaboration"}),": Effective collaboration and communication among team members are essential for the project\u2019s success. This includes regular meetings, use of Slack for communication, and adherence to the development roadmap."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Feedback and Testing"}),": Input from TAs, instructors, and classmates during bi-weekly reviews and beta testing will be vital for refining and improving the application."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Documentation"}),": Thorough documentation of the project\u2019s progress, technical design, and user feedback will be maintained to ensure clarity and facilitate future development."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"requirement-categories",children:"Requirement Categories"}),"\n",(0,t.jsx)(n.p,{children:"The refined requirements can be organized into the following categories:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"User Profile Management"}),"\n",(0,t.jsx)(n.li,{children:"Trip Planning Interface"}),"\n",(0,t.jsx)(n.li,{children:"Budget Management"}),"\n",(0,t.jsx)(n.li,{children:"Personalized Recommendations"}),"\n",(0,t.jsx)(n.li,{children:"Virtual Travel Agent (Stretch)"}),"\n",(0,t.jsx)(n.li,{children:"Performance and Scalability"}),"\n",(0,t.jsx)(n.li,{children:"Security"}),"\n",(0,t.jsx)(n.li,{children:"Usability"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"The up-to-date requirements for Trek are available under the Trek Requirements Spreadsheet (or the Status Page)."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1313:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/Trek-Requirements-66b33ce42017b343413ec2c9f13bf8f2.pdf"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);