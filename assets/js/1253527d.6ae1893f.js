"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[770],{4374:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"project-workflow","metadata":{"permalink":"/trekkers-docs-public/blog/project-workflow","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-06-16-project-workflow.mdx","source":"@site/blog/2024-06-16-project-workflow.mdx","title":"A Deep Dive into Trekkers Project Workflow","description":"Our primary organizational goal at Trekkers is to develop software using the best industry practices we learn from workshops, lab assignments, and our project experiences. When building Trek, we aimed to adopt Agile values and principles effectively in our project workflow.","date":"2024-06-16T00:00:00.000Z","tags":[{"label":"project","permalink":"/trekkers-docs-public/blog/tags/project"},{"label":"workflow","permalink":"/trekkers-docs-public/blog/tags/workflow"},{"label":"project managment","permalink":"/trekkers-docs-public/blog/tags/project-managment"},{"label":"agile","permalink":"/trekkers-docs-public/blog/tags/agile"}],"readingTime":5.61,"hasTruncateMarker":false,"authors":[{"name":"Matthew Kang","title":"Developer","url":"https://www.linkedin.com/in/kang-matt/","imageURL":"/trekkers-docs-public/img/matthewkang.jpeg","key":"matthew"}],"frontMatter":{"slug":"project-workflow","title":"A Deep Dive into Trekkers Project Workflow","authors":["matthew"],"tags":["project","workflow","project managment","agile"]},"unlisted":false,"nextItem":{"title":"Work In Progress 2","permalink":"/trekkers-docs-public/blog/wip-2"}},"content":"Our primary organizational goal at **Trekkers** is to develop software using the best industry practices we learn from workshops, lab assignments, and our project experiences. When building Trek, we aimed to adopt Agile values and principles effectively in our project workflow.\\n\\nThe CPSC 455 course, titled _\\"Applied Industry Practices,\\"_ emphasizes industry practices. However, being Agile is not about merely adopting the most popular industry practices but about embracing practices that support our principles and values. Simply following the most popular \\"Agile\\" practices doesn\'t make us an Agile development team. We strive to be more than just another shop that claims to be Agile.\\n\\n> ***[Manifesto for Agile Software Development:](https://agilemanifesto.org/)***\\n> - **Individuals and interactions** over processes and tools\\n> - **Working software** over comprehensive documentation\\n> - **Customer collaboration** over contract negotiation\\n> - **Responding to change** over following a plan\\n\\n\\nIn our development journey, we have chosen to follow Agile principles because they align with our commitment to continuous improvement, collaboration, and delivering value to our users. Our adaptation of Scrum reflects our dedication to these principles, the **[Trekkers Code](/docs/terms-of-reference#trekkers-code-code-of-conduct)**, and our desire to create an effective and efficient workflow that supports our project goals.\\n\\n## Our Version of Scrum\\n\\nOur version of Scrum aims to be as Agile as possible while meeting all project requirements and learning objectives.\\n\\n### Weekly Sprint Schedule\\n\\nIndividual (non-Trekkers) Course Assignments and Deadlines are _italicized_\\n\\n| Day | Schedule |\\n|-----------------|-------------|\\n| **Sunday** | **Start of Sprint Meeting @ 10:00 AM**<br />**Bi-weekly Formal Scrum due @ 10:00 pm** |\\n| **Monday** | _Bi-Weekly Individual Assignments Due @ 10:00 PM_ |\\n| **Tuesday** |             |\\n| **Wednesday** |             |\\n| **Thursday** | **Mid-Sprint Check-in Meeting @ 5:00 PM**<br />Planning for next sprint or WIP Progress presentation. |\\n| **Friday** | _Bi-Weekly Individual Workshop Survey Due on 11:59 PM_ |\\n| **Saturday** | **End of Sprint (Push @ 10:00 AM)**<br />**Sprint Review:** Read other members\' scrum reports. |\\n\\n* Our sprint begins on **Sunday @ 10:00 AM** and ends on **Saturday @ 10:00 AM**.\\n* During the _**Start of Sprint Meeting**_ we review our scrum report (Sprint Review) on what we have accomplished in the past sprint, and formalize new sprint goals.\\n* During the _**Mid-Sprint Check-in Meeting**_ (happens during Labs), we do a brief check-in on the progress of our sprints.\\n  * Based on our progress, we do some planning for what we should do on the next sprint\\n  * On weeks where there are **Workshop Presentations**, we do planning for presentations, writing documentations, etc.\\n* **Every Saturday @ 10:00 AM** is the **End of Sprint**. Everything should be pushed by then.\\n  * By noon, every completed issues that have not been closed yet should be closed.\\n  * By noon, everyone should complete a very brief scrum report. We use these weekly internal scrum reports for bi-weekly external (submittable) scrum reports.\\n\\n### Meeting Agenda Template\\n\\nOur Scrum meetings are structured on agile principles of communication, interaction, and collaboration. We have structured a meeting agenda **flexible** template that lets us stay focused on reviewing sprints and internal demos, while letting us plan for our next sprint.\\n\\nOur meeting agenda template exists as a GitHub issues template (screenshots below).\\n\\n![Issue Template](/img/project-workflow/issue-template.png)\\n![Issue Template 2](/img/project-workflow/issue-template-2.png)\\n\\n### GitHub Issues for Project Management\\n\\nWe decided **not** to use GitHub Projects because we couldn\'t adjust the visibility settings of the project board. We wanted to create a collaborative environment where team members could actively update their progress without it being publicly visible to other classmates.\\n\\nInstead, we are using GitHub Issues as our main platform for project management. Our belief is that with effective scrum meetings, the utilization of GitHub Issues can facilitate clear communication and tracking of tasks and promote Agility. Here\'s how we leverage GitHub Issues in our workflow:\\n\\n#### Creating Issues\\n\\nMostly after each scrum meeting, every task, bug, or feature is logged as an issue. This ensures that all work items are tracked and nothing is missed.\\nIssues are tagged with appropriate labels (e.g., frontend, backend, bug, documentation) to categorize and prioritize them effectively.\\n\\n#### Assigning Issues\\n\\nDuring the scrum meetings, each issue is assigned to a specific team member based on their expertise and current workload.\\nWe use GitHub\'s assignee feature to make sure responsibilities are clear.\\n\\n#### Tracking Progress:\\n\\nIssues are updated regularly with comments and status updates. We use Discord as our primary platform for communication, including discussions of issues. Our Discord consists of channels for each type of work (frontend, backend, documentation, etc). We associate branches with issues using GitHub\'s branch linking feature, which makes peer-review easier.\\n\\n#### Sprint Planning and Closing Issues\\n\\nAt the start of each sprint, we create, review, and prioritize issues. High-priority tasks are marked with the \\"PRIORITY\\" tag. During the End of Sprint, we review all closed issues. We use the scrum meeting agenda (as an issue), where we link the closed issues for discussions.\\n\\n\\n## Continuous Integration and Deployment\\n\\nTo ensure the quality and stability of our software, we have set up continuous integration and deployment (CI/CD) pipelines:\\n\\n### Automated Testing\\n\\nEvery push to the repository\'s \\"progress\\" branch triggers automated tests. This helps us catch issues early in the development cycle.\\nWe aim to maintain a high code coverage to ensure the robustness of our application.\\n\\n### Code Reviews\\n\\nAll code changes are submitted through pull requests (PRs). PRs must pass automated tests and be reviewed by at least one other team member before being merged. This practice helps us maintain code quality and fosters knowledge sharing within the team.\\n\\n### Continuous Deployment\\n\\nOnce a PR is approved and merged, our CI/CD pipeline automatically deploys the latest code to our private staging environment.\\nWe perform final checks in the staging environment before promoting changes to the released demo environment along with release notes published on our website.\\n\\n## Our Workflow is Evolving\\n\\nBy adhering to Agile principles and customizing our workflow to fit our team\'s needs, we strive to deliver high-quality software efficiently. Our structured yet flexible approach to Scrum, combined with the effective use of GitHub Issues and CI/CD pipelines, enables us to stay organized, collaborative, and adaptive. We continuously seek to improve our processes and deliver value through iterative development and frequent feedback during scrum meetings and workshop design reviews.\\n\\nOur workflow is constantly evolving as we learn and adapt. We are committed to refining our practices, incorporating new insights, and staying responsive to the changing needs of our project and team. This continuous evolution helps us stay agile and ensures that we can meet our goals effectively.\\n\\nWe hope that our detailed project workflow provides insight into how we manage our development process and can serve as our own reference for our future development journeys."},{"id":"wip-2","metadata":{"permalink":"/trekkers-docs-public/blog/wip-2","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-06-08-wip-2.mdx","source":"@site/blog/2024-06-08-wip-2.mdx","title":"Work In Progress 2","description":"All members of Trekkers are thrilled to share our second work-in-progress update and introduce the first pre-release (v0.1.0) of Trek.","date":"2024-06-08T00:00:00.000Z","tags":[{"label":"WIP","permalink":"/trekkers-docs-public/blog/tags/wip"}],"readingTime":1.74,"hasTruncateMarker":false,"authors":[{"name":"William Xiao","title":"Developer","url":"https://wyfx.ca/","imageURL":"https://wyfx.ca/misc/WX.jpg","key":"william"},{"name":"Justin Lieu","title":"Developer","url":"https://www.linkedin.com/in/justin-lieu/","imageURL":"/trekkers-docs-public/img/justin.jpg","key":"justin"},{"name":"Matthew Kang","title":"Developer","url":"https://www.linkedin.com/in/kang-matt/","imageURL":"/trekkers-docs-public/img/matthewkang.jpeg","key":"matthew"},{"name":"Jacob Zhu","title":"Developer","url":"https://www.linkedin.com/in/jacob-zhu-a70512212","imageURL":"/trekkers-docs-public/img/jacob.jpg","key":"jacob"},{"name":"Kevin Xu","title":"Developer","url":"https://www.linkedin.com/in/kevin-yg-xu/","imageURL":"/trekkers-docs-public/img/kevin.JPG","key":"kevin"}],"frontMatter":{"slug":"wip-2","title":"Work In Progress 2","authors":["william","justin","matthew","jacob","kevin"],"tags":["WIP"]},"unlisted":false,"prevItem":{"title":"A Deep Dive into Trekkers Project Workflow","permalink":"/trekkers-docs-public/blog/project-workflow"}},"content":"All members of Trekkers are thrilled to share our second work-in-progress update and introduce the first pre-release (v0.1.0) of Trek.\\n\\nIn **Progress 2**, we have finalized our app structure, including the high-level React component structure, and developed front-end interfaces for the main features of our minimal viable product (MVP).\\n\\n### High-Level Overview\\n\\nThe pages of our web application are categorized into three main groups:\\n- **Main Pages**: Landing Page, Public Profile Page, etc.\\n- **Trip App Pages**: Overview, Details, Analytics Pages\\n- **Settings Pages**: User Profile/Account Settings Page\\n\\nEach of these pages consists of various sub-components. For Progress 2, we have developed some of these core pages and their sub-components that define our MVP.\\n\\n## Tech Stack\\n\\n### TypeScript\\nWe chose React with TypeScript for this phase. TypeScript offers type safety, is an industry standard, and all Trekkers members have experience working with it.\\n\\n### Tailwind CSS\\nWe integrated Tailwind CSS for easier and faster development of styled components. Justin Lieu has led the team in implementing Tailwind during the development process.\\n\\n### Mantine UI\\nWe also utilized Mantine, a popular React UI Component library. After comparing MUI, Chakra, and Mantine, we chose Mantine for its diverse components and ease of customization.\\n\\n## Key Pages and Features\\n\\n### Landing Page\\n\\n![Landing Page 1](/img/wip-2/landing-page-1.png)\\n![Landing Page 2](/img/wip-2/landing-page-2.png)\\n![Responsive 2](/img/wip-2/responsive-2.png)\\n![Profile Dropdown](/img/wip-2/profile-dropdown.png)\\n\\nOur landing page provides a brief description of the application, includes short card components related to travel, and features a newsletter signup.\\n\\n### Profile Page\\n\\n![Profile Page](/img/wip-2/profile-page.png)\\n![Small Trip Cards](/img/wip-2/small-trip-cards.png)\\n![Large Trip Cards](/img/wip-2/large-trip-cards.png)\\n\\nAs mentioned in Progress 1, the profile page displays all trips associated with a user, allowing them to browse through their trips conveniently.\\n\\n### Trip Planning Page\\n\\nThe Trip Planning page is one of the main features of our application, consisting of four subpages: Overview, Details, Map, and Timeline.\\n\\n![Map](/img/wip-2/map.png)\\n![To-do List](/img/wip-2/to-do-list.png)\\n![Trip Details](/img/wip-2/trip-details.png)\\n\\n\\n### Settings Page\\n\\n![Account Settings](/img/wip-2/account-settings.png)\\n![Responsive 1](/img/wip-2/responsive-1.png)\\n![Profile Settings](/img/wip-2/profile-settings.png)\\n\\nThe Settings page includes Account Settings and Public Profile Settings, enabling users to manage their profiles and account preferences.\\n\\nStay tuned for more updates as we continue to refine and enhance Trek!"}]}}')}}]);