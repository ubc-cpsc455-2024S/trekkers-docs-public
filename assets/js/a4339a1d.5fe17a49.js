"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8403],{9519:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=n(4848),r=n(8453);const i={slug:"project-workflow",title:"A Deep Dive into Trekkers Project Workflow",authors:["matthew"],tags:["project","workflow","project managment","agile"]},o=void 0,a={permalink:"/trekkers-docs-public/blog/project-workflow",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-06-16-project-workflow.mdx",source:"@site/blog/2024-06-16-project-workflow.mdx",title:"A Deep Dive into Trekkers Project Workflow",description:"Our primary organizational goal at Trekkers is to develop software using the best industry practices we learn from workshops, lab assignments, and our project experiences. When building Trek, we aimed to adopt Agile values and principles effectively in our project workflow.",date:"2024-06-16T00:00:00.000Z",tags:[{label:"project",permalink:"/trekkers-docs-public/blog/tags/project"},{label:"workflow",permalink:"/trekkers-docs-public/blog/tags/workflow"},{label:"project managment",permalink:"/trekkers-docs-public/blog/tags/project-managment"},{label:"agile",permalink:"/trekkers-docs-public/blog/tags/agile"}],readingTime:5.61,hasTruncateMarker:!1,authors:[{name:"Matthew Kang",title:"Developer",url:"https://www.linkedin.com/in/kang-matt/",imageURL:"/trekkers-docs-public/img/matthewkang.jpeg",key:"matthew"}],frontMatter:{slug:"project-workflow",title:"A Deep Dive into Trekkers Project Workflow",authors:["matthew"],tags:["project","workflow","project managment","agile"]},unlisted:!1,nextItem:{title:"Work In Progress 2",permalink:"/trekkers-docs-public/blog/wip-2"}},l={authorsImageUrls:[void 0]},d=[{value:"Our Version of Scrum",id:"our-version-of-scrum",level:2},{value:"Weekly Sprint Schedule",id:"weekly-sprint-schedule",level:3},{value:"Meeting Agenda Template",id:"meeting-agenda-template",level:3},{value:"GitHub Issues for Project Management",id:"github-issues-for-project-management",level:3},{value:"Creating Issues",id:"creating-issues",level:4},{value:"Assigning Issues",id:"assigning-issues",level:4},{value:"Tracking Progress:",id:"tracking-progress",level:4},{value:"Sprint Planning and Closing Issues",id:"sprint-planning-and-closing-issues",level:4},{value:"Continuous Integration and Deployment",id:"continuous-integration-and-deployment",level:2},{value:"Automated Testing",id:"automated-testing",level:3},{value:"Code Reviews",id:"code-reviews",level:3},{value:"Continuous Deployment",id:"continuous-deployment",level:3},{value:"Our Workflow is Evolving",id:"our-workflow-is-evolving",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Our primary organizational goal at ",(0,t.jsx)(s.strong,{children:"Trekkers"})," is to develop software using the best industry practices we learn from workshops, lab assignments, and our project experiences. When building Trek, we aimed to adopt Agile values and principles effectively in our project workflow."]}),"\n",(0,t.jsxs)(s.p,{children:["The CPSC 455 course, titled ",(0,t.jsx)(s.em,{children:'"Applied Industry Practices,"'}),' emphasizes industry practices. However, being Agile is not about merely adopting the most popular industry practices but about embracing practices that support our principles and values. Simply following the most popular "Agile" practices doesn\'t make us an Agile development team. We strive to be more than just another shop that claims to be Agile.']}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"https://agilemanifesto.org/",children:"Manifesto for Agile Software Development:"})})})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Individuals and interactions"})," over processes and tools"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Working software"})," over comprehensive documentation"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Customer collaboration"})," over contract negotiation"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Responding to change"})," over following a plan"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["In our development journey, we have chosen to follow Agile principles because they align with our commitment to continuous improvement, collaboration, and delivering value to our users. Our adaptation of Scrum reflects our dedication to these principles, the ",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.a,{href:"/docs/terms-of-reference#trekkers-code-code-of-conduct",children:"Trekkers Code"})}),", and our desire to create an effective and efficient workflow that supports our project goals."]}),"\n",(0,t.jsx)(s.h2,{id:"our-version-of-scrum",children:"Our Version of Scrum"}),"\n",(0,t.jsx)(s.p,{children:"Our version of Scrum aims to be as Agile as possible while meeting all project requirements and learning objectives."}),"\n",(0,t.jsx)(s.h3,{id:"weekly-sprint-schedule",children:"Weekly Sprint Schedule"}),"\n",(0,t.jsxs)(s.p,{children:["Individual (non-Trekkers) Course Assignments and Deadlines are ",(0,t.jsx)(s.em,{children:"italicized"})]}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Day"}),(0,t.jsx)(s.th,{children:"Schedule"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Sunday"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Start of Sprint Meeting @ 10:00 AM"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Bi-weekly Formal Scrum due @ 10:00 pm"})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Monday"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Bi-Weekly Individual Assignments Due @ 10:00 PM"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Tuesday"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Wednesday"})}),(0,t.jsx)(s.td,{})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Thursday"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Mid-Sprint Check-in Meeting @ 5:00 PM"}),(0,t.jsx)("br",{}),"Planning for next sprint or WIP Progress presentation."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Friday"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Bi-Weekly Individual Workshop Survey Due on 11:59 PM"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"Saturday"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"End of Sprint (Push @ 10:00 AM)"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.strong,{children:"Sprint Review:"})," Read other members' scrum reports."]})]})]})]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Our sprint begins on ",(0,t.jsx)(s.strong,{children:"Sunday @ 10:00 AM"})," and ends on ",(0,t.jsx)(s.strong,{children:"Saturday @ 10:00 AM"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["During the ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Start of Sprint Meeting"})})," we review our scrum report (Sprint Review) on what we have accomplished in the past sprint, and formalize new sprint goals."]}),"\n",(0,t.jsxs)(s.li,{children:["During the ",(0,t.jsx)(s.em,{children:(0,t.jsx)(s.strong,{children:"Mid-Sprint Check-in Meeting"})})," (happens during Labs), we do a brief check-in on the progress of our sprints.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Based on our progress, we do some planning for what we should do on the next sprint"}),"\n",(0,t.jsxs)(s.li,{children:["On weeks where there are ",(0,t.jsx)(s.strong,{children:"Workshop Presentations"}),", we do planning for presentations, writing documentations, etc."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Every Saturday @ 10:00 AM"})," is the ",(0,t.jsx)(s.strong,{children:"End of Sprint"}),". Everything should be pushed by then.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"By noon, every completed issues that have not been closed yet should be closed."}),"\n",(0,t.jsx)(s.li,{children:"By noon, everyone should complete a very brief scrum report. We use these weekly internal scrum reports for bi-weekly external (submittable) scrum reports."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"meeting-agenda-template",children:"Meeting Agenda Template"}),"\n",(0,t.jsxs)(s.p,{children:["Our Scrum meetings are structured on agile principles of communication, interaction, and collaboration. We have structured a meeting agenda ",(0,t.jsx)(s.strong,{children:"flexible"})," template that lets us stay focused on reviewing sprints and internal demos, while letting us plan for our next sprint."]}),"\n",(0,t.jsx)(s.p,{children:"Our meeting agenda template exists as a GitHub issues template (screenshots below)."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"Issue Template",src:n(8047).A+"",width:"650",height:"91"}),"\n",(0,t.jsx)(s.img,{alt:"Issue Template 2",src:n(994).A+"",width:"655",height:"708"})]}),"\n",(0,t.jsx)(s.h3,{id:"github-issues-for-project-management",children:"GitHub Issues for Project Management"}),"\n",(0,t.jsxs)(s.p,{children:["We decided ",(0,t.jsx)(s.strong,{children:"not"})," to use GitHub Projects because we couldn't adjust the visibility settings of the project board. We wanted to create a collaborative environment where team members could actively update their progress without it being publicly visible to other classmates."]}),"\n",(0,t.jsx)(s.p,{children:"Instead, we are using GitHub Issues as our main platform for project management. Our belief is that with effective scrum meetings, the utilization of GitHub Issues can facilitate clear communication and tracking of tasks and promote Agility. Here's how we leverage GitHub Issues in our workflow:"}),"\n",(0,t.jsx)(s.h4,{id:"creating-issues",children:"Creating Issues"}),"\n",(0,t.jsx)(s.p,{children:"Mostly after each scrum meeting, every task, bug, or feature is logged as an issue. This ensures that all work items are tracked and nothing is missed.\nIssues are tagged with appropriate labels (e.g., frontend, backend, bug, documentation) to categorize and prioritize them effectively."}),"\n",(0,t.jsx)(s.h4,{id:"assigning-issues",children:"Assigning Issues"}),"\n",(0,t.jsx)(s.p,{children:"During the scrum meetings, each issue is assigned to a specific team member based on their expertise and current workload.\nWe use GitHub's assignee feature to make sure responsibilities are clear."}),"\n",(0,t.jsx)(s.h4,{id:"tracking-progress",children:"Tracking Progress:"}),"\n",(0,t.jsx)(s.p,{children:"Issues are updated regularly with comments and status updates. We use Discord as our primary platform for communication, including discussions of issues. Our Discord consists of channels for each type of work (frontend, backend, documentation, etc). We associate branches with issues using GitHub's branch linking feature, which makes peer-review easier."}),"\n",(0,t.jsx)(s.h4,{id:"sprint-planning-and-closing-issues",children:"Sprint Planning and Closing Issues"}),"\n",(0,t.jsx)(s.p,{children:'At the start of each sprint, we create, review, and prioritize issues. High-priority tasks are marked with the "PRIORITY" tag. During the End of Sprint, we review all closed issues. We use the scrum meeting agenda (as an issue), where we link the closed issues for discussions.'}),"\n",(0,t.jsx)(s.h2,{id:"continuous-integration-and-deployment",children:"Continuous Integration and Deployment"}),"\n",(0,t.jsx)(s.p,{children:"To ensure the quality and stability of our software, we have set up continuous integration and deployment (CI/CD) pipelines:"}),"\n",(0,t.jsx)(s.h3,{id:"automated-testing",children:"Automated Testing"}),"\n",(0,t.jsx)(s.p,{children:'Every push to the repository\'s "progress" branch triggers automated tests. This helps us catch issues early in the development cycle.\nWe aim to maintain a high code coverage to ensure the robustness of our application.'}),"\n",(0,t.jsx)(s.h3,{id:"code-reviews",children:"Code Reviews"}),"\n",(0,t.jsx)(s.p,{children:"All code changes are submitted through pull requests (PRs). PRs must pass automated tests and be reviewed by at least one other team member before being merged. This practice helps us maintain code quality and fosters knowledge sharing within the team."}),"\n",(0,t.jsx)(s.h3,{id:"continuous-deployment",children:"Continuous Deployment"}),"\n",(0,t.jsx)(s.p,{children:"Once a PR is approved and merged, our CI/CD pipeline automatically deploys the latest code to our private staging environment.\nWe perform final checks in the staging environment before promoting changes to the released demo environment along with release notes published on our website."}),"\n",(0,t.jsx)(s.h2,{id:"our-workflow-is-evolving",children:"Our Workflow is Evolving"}),"\n",(0,t.jsx)(s.p,{children:"By adhering to Agile principles and customizing our workflow to fit our team's needs, we strive to deliver high-quality software efficiently. Our structured yet flexible approach to Scrum, combined with the effective use of GitHub Issues and CI/CD pipelines, enables us to stay organized, collaborative, and adaptive. We continuously seek to improve our processes and deliver value through iterative development and frequent feedback during scrum meetings and workshop design reviews."}),"\n",(0,t.jsx)(s.p,{children:"Our workflow is constantly evolving as we learn and adapt. We are committed to refining our practices, incorporating new insights, and staying responsive to the changing needs of our project and team. This continuous evolution helps us stay agile and ensures that we can meet our goals effectively."}),"\n",(0,t.jsx)(s.p,{children:"We hope that our detailed project workflow provides insight into how we manage our development process and can serve as our own reference for our future development journeys."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},994:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/issue-template-2-4f79f808f05c72f94e7197ad6b37f8d3.png"},8047:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/issue-template-531d9cc97eed20dd7b8984fea8cf372b.png"},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(6540);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);