(this.webpackJsonpcarlos_portfolio=this.webpackJsonpcarlos_portfolio||[]).push([[0],{103:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(48),a(49),a(3)),i=a(13),s=a(16),m=a(5),u=a(6),p=a(8),h=a(7),E=a(9),d=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement(o.Grid,{className:"landing-grid"},l.a.createElement(o.Cell,{col:12},l.a.createElement("img",{src:"https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/69236045_10157557289179222_2992100129378402304_o.jpg?_nc_cat=104&_nc_ohc=r5a_niGyG9wAQmpq34hAb463_-8N5lrucbr1SPE0yXXJt9dulrol4M5bQ&_nc_ht=scontent-lax3-1.xx&oh=9f97736417483e667d96bf11f5db8188&oe=5E9984F5",alt:"avatar",className:"avatar-img"}),l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{style:{textAlign:"center"}},"Full Stack Web Developer"),l.a.createElement("hr",null),l.a.createElement("p",null,"React |  Python | Javascript"),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"https://www.linkedin.com/in/carloshehe/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),l.a.createElement("a",{href:"https://github.com/cahehe/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})))))))}}]),t}(n.Component),b=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"About Page"))}}]),t}(n.Component),f=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"contact-body "},l.a.createElement(o.Grid,{className:"contact-grid"},l.a.createElement(o.Cell,{col:6},l.a.createElement("h2",null,"Carlos He He"),l.a.createElement("img",{src:"https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/52764677_10157102469344222_3223153495704076288_o.jpg?_nc_cat=100&_nc_ohc=wnP-acNd5vEAQnjIhdX17HczHK6rqC-quypBWFxs1u_hrWAwTCk-4HfwQ&_nc_ht=scontent-lax3-1.xx&oh=035050ddd683cf26ff9ca94b458b91fc&oe=5EA06E66",alt:"avatar",style:{height:"250px"}}),l.a.createElement("p",{style:{width:"75%",margin:"auto",paddingTop:"1em"}},"Feel free to contact me for any inquiries or if you simply want to talk about technology! I'm always open to meeting new people.")),l.a.createElement(o.Cell,{col:6},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("hr",null),l.a.createElement("div",{className:"contact-list"},l.a.createElement(o.List,null,l.a.createElement(o.ListItem,null,l.a.createElement(o.ListItemContent,{style:{fontSize:"30 px",fontFamily:"Anton"}},l.a.createElement("i",{className:"fa fa-phone-square","aria-hidden":"true"}),"(646)-546-7506")),l.a.createElement(o.ListItem,null,l.a.createElement(o.ListItemContent,{style:{fontSize:"30 px",fontFamily:"Anton"}},l.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}),"carlos.hehe@wsu.edu")))))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={activeTab:0},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"toggleCategories",value:function(){if(0===this.state.activeTab)return l.a.createElement("div",{className:"projects-grid"},l.a.createElement("p",null,"This page is still a work in progress. Please check back soon!"))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"category-tabs"},l.a.createElement(o.Tabs,{activeTab:this.state.activeTab,onChange:function(t){return e.setState({activeTab:t})},ripple:!0},l.a.createElement(o.Tab,null,"React")),l.a.createElement(o.Grid,null,l.a.createElement(o.Cell,{col:12},l.a.createElement("div",{className:"content"},this.toggleCategories()))))}}]),t}(n.Component),g=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(o.Grid,null,l.a.createElement(o.Cell,{col:4},l.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),l.a.createElement(o.Cell,{col:8},l.a.createElement("h4",{style:{marginTop:"0px"}},this.props.schoolName),l.a.createElement("p",null,this.props.schoolDescription)))}}]),t}(n.Component),j=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(o.Grid,null,l.a.createElement(o.Cell,{col:4},l.a.createElement("p",{style:{font:"20px bold"}},this.props.companyName),l.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),l.a.createElement(o.Cell,{col:8},l.a.createElement("h4",{style:{marginTop:"0px",font:"1px"}},this.props.jobName),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",{style:{listStyleType:"circle",color:"white"}},this.props.jobDescription),l.a.createElement("li",{style:{listStyleType:"circle",color:"white"}},this.props.jobDescription2),l.a.createElement("li",{style:{listStyleType:"circle",color:"white"}},this.props.jobDescription3))))}}]),t}(n.Component),v=(n.Component,function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={empirical3:123},e}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(o.Grid,null,l.a.createElement(o.Cell,{col:4},l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("img",{src:"https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/48362990_100283491029651_6827803278177206272_o.jpg?_nc_cat=111&_nc_ohc=aPFSvnmloHAAQlG06mDarkkkIlY-6QfS0XO127smSvSeTGYJrmEgxsfdQ&_nc_ht=scontent-lax3-2.xx&oh=608e958121a368124dc52571db0a3c6b&oe=5EAD15B8",alt:"avatar",style:{height:"200px"}})),l.a.createElement("h2",{style:{paddingTop:"2em"}},"Carlos He He"),l.a.createElement("hr",{style:{borderTop:"2.5px solid #FF7F50",width:"100%"}}),l.a.createElement("p",null,"Passionate student looking for an internship or entry-level position."),l.a.createElement("hr",{style:{borderTop:"2.5px solid #FF7F50",width:"100%"}}),l.a.createElement("h5",null,"Address"),l.a.createElement("p",null,"305 NE Spaulding Apt 2, Pullman WA 99163"),l.a.createElement("h5",null,"Phone"),l.a.createElement("p",null,"(646)-546-7506"),l.a.createElement("h5",null,"Email"),l.a.createElement("p",null,"carlos.hehe@wsu.edu"),l.a.createElement("h5",null,"Web"),l.a.createElement("a",{href:"carloshehe.com",target:"_blank",rel:"noopener noreferrer"},"carloshehe.com")),l.a.createElement(o.Cell,{className:"resume-right-col",col:8},l.a.createElement("h2",null,"Education"),l.a.createElement(g,{startYear:2017,endYear:2020,schoolName:"WSU",schoolDescription:"Masters of Science in Computer Science"}),l.a.createElement(g,{startYear:2012,endYear:2016,schoolName:"Queens College",schoolDescription:"Bachelors of Arts in Accounting"}),l.a.createElement("hr",{style:{borderTop:"2px solid #FAEBD7"}}),l.a.createElement("h2",null,"Experience"),l.a.createElement(j,{companyName:"Empirical Wealth Management",startYear:"May 2019",endYear:"August 2019",jobName:"Technology Intern",jobDescription:"Set up SQL databases on Microsoft Azure.",jobDescription2:"Facilitated data transfer between Tamarac and Salesforce by automating the process via Python scripts and task schedulers.",jobDescription3:"Increased company efficiency by suggesting new software to executives."}),l.a.createElement(j,{companyName:"AIG",startYear:2009,endYear:2012,jobName:"Tax Assistant",jobDescription:"Prepare Forms 5471 and other related forms based on entities filling requirements using CorpTax and Taxstream during tax compliance season.",jobDescription2:"Contributed to corporate taxation team to update quarterly financials and discrete items",jobDescription3:"Increase productivity by utilizing the capabilities of the CorpTax system to import financial statements"}),l.a.createElement("hr",{style:{borderTop:"2px solid #FAEBD7"}}),l.a.createElement("h2",null,"Skills"),l.a.createElement("div",{className:"skills"},l.a.createElement("ul",null,l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"ReactJS"),l.a.createElement("li",null,"Python"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"CSS")),l.a.createElement("ul",{style:{marginLeft:"220px"}},l.a.createElement("li",null,"SQL"),l.a.createElement("li",null,"C"),l.a.createElement("li",null,"C++"),l.a.createElement("li",null,"Java"))))))}}]),t}(n.Component)),x=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Testing"))}}]),t}(n.Component),C=function(){return l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/",component:d}),l.a.createElement(s.a,{path:"/aboutme",component:b}),l.a.createElement(s.a,{path:"/contact",component:f}),l.a.createElement(s.a,{path:"/projects",component:y}),l.a.createElement(s.a,{path:"/resume",component:v}),l.a.createElement(s.a,{path:"/test",component:x}))};var O=function(){return l.a.createElement("div",{className:"demo-big-content"},l.a.createElement(o.Layout,null,l.a.createElement(o.Header,{className:"header-color",title:l.a.createElement(i.b,{style:{textDecoration:"none",color:"white"},to:"/"},"Carlos He He's Portfolio"),scroll:!0},l.a.createElement(o.Navigation,null,l.a.createElement(i.b,{to:"/resume"},"Resume"),l.a.createElement(i.b,{to:"/contact"},"Contact"),l.a.createElement(i.b,{to:"/projects"},"Projects"))),l.a.createElement(o.Drawer,{title:l.a.createElement(i.b,{style:{textDecoration:"none",color:"black"},to:"/"},"Carlos He He's Portfolio"),scroll:!0},l.a.createElement(o.Navigation,null,l.a.createElement(i.b,{to:"/resume"},"Resume"),l.a.createElement(i.b,{to:"/contact"},"Contact"),l.a.createElement(i.b,{to:"/projects"},"Projects"))),l.a.createElement(o.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(C,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(101),a(102);c.a.render(l.a.createElement(i.a,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},43:function(e,t,a){e.exports=a(103)},48:function(e,t,a){},49:function(e,t,a){}},[[43,1,2]]]);
//# sourceMappingURL=main.6d938a99.chunk.js.map