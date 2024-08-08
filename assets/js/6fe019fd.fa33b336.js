"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2404],{2319:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=t(4848),i=t(8453);const s={slug:"local-deployment-experiment",title:"Local Deployment and a Glimpse Into Trek's CI/CD System",authors:["william"],tags:["project","workflow","ci/cd"]},r=void 0,a={permalink:"/trekkers-docs-public/blog/local-deployment-experiment",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-06-local-deployment.mdx",source:"@site/blog/2024-07-06-local-deployment.mdx",title:"Local Deployment and a Glimpse Into Trek's CI/CD System",description:"One of our goals as the Trekkers was always to be able to have a",date:"2024-07-06T00:00:00.000Z",tags:[{label:"project",permalink:"/trekkers-docs-public/blog/tags/project"},{label:"workflow",permalink:"/trekkers-docs-public/blog/tags/workflow"},{label:"ci/cd",permalink:"/trekkers-docs-public/blog/tags/ci-cd"}],readingTime:6.495,hasTruncateMarker:!1,authors:[{name:"William Xiao",title:"Developer",url:"https://wyfx.ca/",imageURL:"https://wyfx.ca/misc/WX.jpg",key:"william"}],frontMatter:{slug:"local-deployment-experiment",title:"Local Deployment and a Glimpse Into Trek's CI/CD System",authors:["william"],tags:["project","workflow","ci/cd"]},unlisted:!1,prevItem:{title:"Choosing the Best Geographic Information System (GIS) for Trek",permalink:"/trekkers-docs-public/blog/trek-gis-study"},nextItem:{title:"Work In Progress 3",permalink:"/trekkers-docs-public/blog/wip-3"}},l={authorsImageUrls:[void 0]},d=[{value:"My Site",id:"my-site",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Security",id:"security",level:3},{value:"Performance",id:"performance",level:3},{value:"Maintainability",id:"maintainability",level:3},{value:"Deployment",id:"deployment",level:2},{value:"The Future",id:"the-future",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["One of our goals as the Trekkers was always to be able to have a\n",(0,o.jsx)(n.strong,{children:"cost-effective"})," but ",(0,o.jsx)(n.strong,{children:"performant"})," deployment of Trek. As someone who\nself-hosts their own server for their ",(0,o.jsx)(n.a,{href:"https://wyfx.ca",children:"personal site"}),", I\nthought it would be quite suiting to see if our current needs for deployment and\nCI/CD could be met through repurposing part of self-hosted solution."]}),"\n",(0,o.jsx)(n.h2,{id:"my-site",children:"My Site"}),"\n",(0,o.jsxs)(n.p,{children:["As a little bit of background, my personal site (",(0,o.jsx)(n.a,{href:"https://wyfx.ca",children:"https://wyfx.ca"}),") was originally\nstarted as just a way for me to take the Raspberry Pi I had sitting at home and\nmake it something useful."]}),"\n",(0,o.jsx)(n.p,{children:"The site was developed under Vite, and deployed under a Docker container running\nnginx. Whenever I have a new version of the site, I build a new version of the\nDocker container, then manually restart the container."}),"\n",(0,o.jsx)(n.p,{children:"At Trek, one of our priorities is always knowing about the status of our\nproduct. Hence, with some of my knowledge on the team, we aimed to leverage that\nknowledge to develop our own self-hosted solution for development purposes."}),"\n",(0,o.jsx)(n.h2,{id:"considerations",children:"Considerations"}),"\n",(0,o.jsxs)(n.p,{children:["On the implementation side, moving from a simple statically hosted website to an\nintegrated solution with our GitHub workflow would not be easy. Our goals for\nTrek's deployment solution would be something that is ",(0,o.jsx)(n.strong,{children:"integrated with\nGitHub"}),", ",(0,o.jsx)(n.strong,{children:"performant"})," enough to run on my Raspberry Pi, and ",(0,o.jsx)(n.strong,{children:"automatic"}),".\nThis solution would be key for our CI/CD process and would ensure that we'd able\nto quickly iterate on new updates to our codebase."]}),"\n",(0,o.jsx)(n.h3,{id:"security",children:"Security"}),"\n",(0,o.jsx)(n.p,{children:"Security was especially important to me as we needed a solution that would not\nexpose my self-hosted server to too much risk, but would still be able to\nautomatically integrate with GitHub. My home server did not have a publicly\nexposed SSH port, yet without one we would not be able to upload files to the\nserver. However, as my main account on the server was an administrator, I did\nnot want any possible SSH solutions to have full access to the administrator\naccount."}),"\n",(0,o.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,o.jsx)(n.p,{children:'The second primary consideration with our design was performance. This includes\nboth the "visible" parts of the site (like API and frontend), but also the build\nprocess from a successful push to GitHub. While we would not have to worry about\na large amount of users on the development site, we still wanted a solution that\nwould be performant enough for us to evaluate how the site would behave for\nproduction deployment in the future. The limited compute power of the Raspberry\nPi also means that this deployment needs to be as lean as possible.'}),"\n",(0,o.jsx)(n.h3,{id:"maintainability",children:"Maintainability"}),"\n",(0,o.jsx)(n.p,{children:"The last key consideration was maintainability. The development of Trek moves\nquickly, so our system should be able to adapt to those changes quickly. Without\na maintainable system, the system could quickly become obsolete - sacrificing\nvaluable developer time."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"With all of our considerations in mind, we started the design of the CI/CD system."}),"\n",(0,o.jsx)(n.h2,{id:"deployment",children:"Deployment"}),"\n",(0,o.jsxs)(n.p,{children:["Since I was most familiar with a Docker container setup like my home server, my\ninitial thoughts were to create another container running on the server at the\nsame time as my personal site. So the first challenge was coming up with a\ndeployment that would allow both Docker containers to run at the same time while redirecting\nto different domains.\nMy solution to this issue was to use\n",(0,o.jsx)(n.a,{href:"https://github.com/nginx-proxy/nginx-proxy",children:"nginx-proxy"}),". ",(0,o.jsx)(n.code,{children:"nginx-proxy"}),"\nessentially acts as a reverse proxy that routes to Docker containers by\nsubdomain. Now, I can start my own website's container with an environment\nvariable ",(0,o.jsx)(n.code,{children:"VIRTUAL_HOST=wyfx.ca"}),", while having Trek on a subdomain like\n",(0,o.jsx)(n.code,{children:"SUBDOMAIN.wyfx.ca"}),". To handle HTTPS, I extended my original LetsEncrypt\ncertificates using\n",(0,o.jsx)(n.a,{href:"https://github.com/nginx-proxy/acme-companion",children:"acme-companion"}),", which will\nautomatically generate a new HTTPS certificate for each of my subdomains by\nspecifying ",(0,o.jsx)(n.code,{children:"LETSENCRYPT_HOST=SUBDOMAIN.wyfx.ca"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The largest decision to make was how to get updates from our GitHub repository.\nAs I didn't want to expose a public SSH port on my home server, I initially\nthought about a solution that wouldn't directly connect the GitHub repository to\nthe server. Instead, the server could poll for changes on GitHub, and when\nchanges are detected, the following would occur:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Pull the changes from GitHub"}),"\n",(0,o.jsx)(n.li,{children:"Build a new container"}),"\n",(0,o.jsx)(n.li,{children:"Restart the running container"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"However, we did not end up going with this idea for a few reasons:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Unless we polled at a very fast rate, there was still going to be a delay\nbefore we could even detect a change from GitHub"}),"\n",(0,o.jsx)(n.li,{children:"There were concerns with performance from the fact that the Raspberry Pi would\nhave to do all the building"}),"\n",(0,o.jsx)(n.li,{children:"We would have to create our own scripts to make the polling + building\npossible, which would each cost us maintenance time"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The solution we ended up using for the frontend was to create a nginx Docker\ncontainer that is also running a SSH server. Then, to update the frontend, we\ncould write a GitHub Action to build the frontend, then SSH into the Docker\ncontainer and replace the static files in the container. This solution was much\nsimpler, which would make it easier to maintain. It also does not involve\nconstantly rebuilding the Docker container, as we would be making local updates\nto its filesystem instead. In addition, having the publicly exposed SSH port be\ninto a container would gave me some more comfort that any attacks would not be\nable to immediately access my entire server (though\n",(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-21626",children:"such"}),"\n",(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-23651",children:"attacks"}),"\n",(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-23652",children:"are"}),"\n",(0,o.jsx)(n.a,{href:"https://nvd.nist.gov/vuln/detail/CVE-2024-23653",children:"possible"}),")."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"The frontend workflow",src:t(3219).A+"",width:"943",height:"281"})}),"\n",(0,o.jsxs)(n.p,{children:["Our GitHub action to build and upload the frontend is included ",(0,o.jsx)(n.a,{href:"#appendix-github-action",children:"in the\nAppendix"}),". It builds our frontend using ",(0,o.jsx)(n.code,{children:"npm"}),", and then\nuploads it via SCP to the Docker container using\n",(0,o.jsx)(n.a,{href:"https://github.com/appleboy/scp-action/",children:"appleboy/scp-action"}),". This ended up\nlooking like the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'name: Deploy Frontend Dev\non:\n  push:\n    branches:\n      - "project_[0-9]-dev"\njobs:\n  deploy:\n    name: Deploy FE Dev\n    runs-on: ubuntu-latest\n    concurrency: deploy-group    # optional: ensure only one action runs at a time\n    \n    steps:\n      - name: Checkout\n        uses: actions/checkout@v4\n\n      - name: Build FE\n        run: |\n         cd frontend\n         npm install\n         npm run build\n  \n      - name: Upload to server\n        uses: appleboy/scp-action@v0.1.7\n        with:\n          host: REDACTED\n          username: REDACTED\n          password: REDACTED\n          port: REDACTED\n          source: "frontend/dist/*"\n          target: REDACTED\n          overwrite: true\n          strip_components: 2\n'})}),"\n",(0,o.jsxs)(n.p,{children:["For the backend deployment, we built off of the frontend deployment. Our backend\ndeployment uses ",(0,o.jsx)(n.a,{href:"https://www.npmjs.com/package/tsc-watch",children:"tsc-watch"})," to start up\nour backend server, and then monitor for file changes. Then, a GitHub action is\ntriggered whenever a push has been made to our dev branches, uploading the files\nvia SCP. ",(0,o.jsx)(n.code,{children:"tsc-watch"})," is built to automatically detect those changes and rebuild\nthe backend dynamically as its files change. To support the communication\nbetween our frontend and backend, the backend runs under the same nginx server\nas the frontend. Requests to our API endpoints (e.g. /api/v1/users) would then\nbe forwarded to the backend server, allowing us to remain under the same\nsubdomain and avoid spawning too many Docker containers for the server to\nhandle. To make this happen, our ",(0,o.jsx)(n.code,{children:"nginx.conf"})," includes the following:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"server {\n    location /socket.io {\n      proxy_set_header Host $host;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_pass REDACTED;\n    }\n    location / {\n      root   REDACTED;\n      index  index.html;\n      try_files $uri $uri/ /index.html;\n    }\n    location /api {\n      proxy_set_header Host $host;\n      proxy_set_header X-Real-IP $remote_addr;\n      proxy_pass REDACTED;\n    }\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n      root   /usr/share/nginx/html;\n    }\n  }\n"})}),"\n",(0,o.jsxs)(n.p,{children:["By overwriting what happens with the ",(0,o.jsx)(n.code,{children:"location /api"})," line configuration, we are\nable to redirect requests to go to the backend server rather than still going to\nthe frontend."]}),"\n",(0,o.jsx)(n.h2,{id:"the-future",children:"The Future"}),"\n",(0,o.jsx)(n.p,{children:"As Trek continues to develop, our CI/CD system will have to evolve too. One of\nour upcoming goals for a future sprint is to integrate testing frameworks into\nboth our frontend and backend. When our backend develops more, we might also\nfind that the self-hosted server won't be powerful enough. However, with our\nmaintainable and reproducible system, we are well-equipped to handle these\nfuture challenges with ease."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},3219:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/upload-frontend-493e9a095082de2326216e6ec666db4c.png"},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);