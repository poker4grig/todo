(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(33),o=n.n(r),a=(n(39),n(10)),i=n(11),j=n(13),l=n(12),h=(n(40),n(23)),u=n.n(h),d=n(0),b=function(e){var t=e.user;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.id}),Object(d.jsx)("td",{children:t.username}),Object(d.jsx)("td",{children:t.firstName}),Object(d.jsx)("td",{children:t.lastName}),Object(d.jsx)("td",{children:t.email})]})},p=function(e){var t=e.users;return Object(d.jsxs)("table",{children:[Object(d.jsx)("th",{children:"User id"}),Object(d.jsx)("th",{children:"User name"}),Object(d.jsx)("th",{children:"First name"}),Object(d.jsx)("th",{children:"Last name"}),Object(d.jsx)("th",{children:"Email"}),t.map((function(e){return Object(d.jsx)(b,{user:e})}))]})},x=n(4),O=function(e){var t=e.project,n=e.deleteProject;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.id}),Object(d.jsx)("td",{children:Object(d.jsx)(x.b,{to:"projects/".concat(t.name),children:t.name})}),Object(d.jsx)("td",{children:t.user}),Object(d.jsx)("td",{children:t.repo}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"Delete project"})})]})},f=function(e){var t=e.projects,n=e.deleteProject;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{children:[Object(d.jsx)("th",{children:"Project id"}),Object(d.jsx)("th",{children:"Project name"}),Object(d.jsx)("th",{children:"Project user"}),Object(d.jsx)("th",{children:"Project repo"}),Object(d.jsx)("th",{}),t.map((function(e){return Object(d.jsx)(O,{project:e,deleteProject:n})}))]}),Object(d.jsx)(x.b,{to:"/projects/create",children:"Crete project"})]})},m=n(2),v=function(e){var t=e.project,n=e.users;return console.log(t.user),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.user.map((function(e){return n.find((function(t){return t.id===e})).username}))}),Object(d.jsx)("td",{children:t.repo})]})},g=function(e){var t=e.projects,n=e.users,c=Object(m.g)(),s=t.filter((function(e){return e.name===c.name}));return Object(d.jsxs)("table",{children:[Object(d.jsx)("th",{children:"Project name"}),Object(d.jsx)("th",{children:"Project user"}),Object(d.jsx)("th",{children:"Project repo"}),s.map((function(e){return Object(d.jsx)(v,{project:e,users:n})}))]})},k=function(e){var t=e.todo,n=e.deleteTodo;return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.id}),Object(d.jsx)("td",{children:t.user}),Object(d.jsx)("td",{children:t.project}),Object(d.jsx)("td",{children:t.text}),Object(d.jsx)("td",{children:t.created}),Object(d.jsx)("td",{children:t.updated}),Object(d.jsx)("td",{style:{textAlign:"center"},children:String(t.isActive)}),Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){return n(t.id)},type:"button",children:"Delete todo"})})]})},y=function(e){var t=e.todos,n=e.deleteTodo;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{children:[Object(d.jsx)("th",{children:"Todo id"}),Object(d.jsx)("th",{children:"Todo user"}),Object(d.jsx)("th",{children:"Todo project"}),Object(d.jsx)("th",{children:"Todo text"}),Object(d.jsx)("th",{children:"Todo created"}),Object(d.jsx)("th",{children:"Todo updated"}),Object(d.jsx)("th",{children:"Todo is active?"}),Object(d.jsx)("th",{}),t.map((function(e){return Object(d.jsx)(k,{todo:e,deleteTodo:n})}))]}),Object(d.jsx)(x.b,{to:"/todo/create",children:"Create todo"})]})},_=n(9),C=n.n(_),S=function(e){var t=e.is_auth,n=e.logout,c=e.whoIsUser;return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{children:Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"menu-main",children:[Object(d.jsx)("li",{children:Object(d.jsx)(x.b,{className:"current",to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"})}),Object(d.jsx)("li",{children:Object(d.jsx)(x.b,{to:"/todo",children:"\u0417\u0430\u043c\u0435\u0442\u043a\u0438"})}),Object(d.jsx)("li",{children:Object(d.jsx)(x.b,{to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(d.jsx)("li",{children:Object(d.jsx)(x.b,{to:"/projects",children:"\u041f\u0440\u043e\u0435\u043a\u0442\u044b"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"})}),Object(d.jsx)("li",{children:t()?Object(d.jsxs)(x.b,{onClick:function(){n()},children:["\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ",c," | \u0412\u044b\u0439\u0442\u0438"]}):Object(d.jsx)(x.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})]})})})})},T=function(){return Object(d.jsx)("footer",{class:"footer",children:Object(d.jsx)("div",{className:"copyright",children:Object(d.jsx)("div",{className:"pull-left",style:{textAlign:"center"},children:"Copyright \xa9 "+(new Date).getFullYear()+" Todo-app command. All rights reserved."})})})},P=function(e){var t=e.location;return Object(d.jsx)("div",{children:Object(d.jsxs)("h2",{children:["\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 '",t.pathname,"' \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"]})})},w=n(15),N=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={login:"",password:""},c}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.get_token(this.state.login,this.state.password),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsx)("input",{type:"text",name:"login",placeholder:"login",value:this.state.login,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),Object(d.jsx)("input",{type:"submit",value:"Login"})]})}}]),n}(s.a.Component),F=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={name:"",user:[],repo:""},c}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleUserChange",value:function(e){if(e.target.selectedOptions){for(var t=[],n=0;n<e.target.selectedOptions.length;n++)t.push(e.target.selectedOptions.item(n).value);this.setState({user:t})}else this.setState({user:[]})}},{key:"handleSubmit",value:function(e){this.props.createProject(this.state.name,this.state.user,this.state.repo),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"login",children:"name     "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsxs)("div",{style:{margin:10},children:[Object(d.jsx)("label",{htmlFor:"login",children:"user      "}),Object(d.jsx)("select",{name:"user",multiple:!0,onChange:function(t){return e.handleUserChange(t)},children:this.props.users.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.firstName})}))})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"login",children:"repo     "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"repo",value:this.state.repo,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save"})]})}}]),n}(s.a.Component),U=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={user:[],project:[],text:"",is_active:!0},c}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(w.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){this.props.createTodo(this.state.user,this.state.project,this.state.text,this.state.is_active),e.preventDefault()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"login",children:"user     "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"user",value:this.state.user,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"login",children:"project     "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"project",value:this.state.project,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{htmlFor:"login",children:"text     "}),Object(d.jsx)("input",{type:"text",className:"form-control",name:"text",value:this.state.text,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"login",children:"is_active     "}),Object(d.jsx)("input",{type:"checkbox",className:"form-control",name:"is_active",value:this.state.is_active,onChange:function(t){return e.handleChange(t)}})]}),Object(d.jsx)("input",{type:"submit",value:"Save"})]})}}]),n}(s.a.Component),D=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(a.a)(this,n),(c=t.call(this,e)).state={users:[],projects:[],todos:[],token:"",whoIsUser:""},c}return Object(i.a)(n,[{key:"createProject",value:function(e,t,n){var c=this,s=this.get_headers(),r={name:e,user:t,repo:n};C.a.post("http://127.0.0.1:8000/api/projects/",r,{headers:s}).then((function(e){c.load_data()})).catch((function(e){console.log(e),c.setState({projects:[]})}))}},{key:"createTodo",value:function(e,t,n,c){var s=this,r=this.get_headers(),o={user:e,project:t,text:n,is_active:c};C.a.post("http://127.0.0.1:8000/api/todo/",o,{headers:r}).then((function(e){e.data.results;s.load_data()})).catch((function(e){console.log(e),s.setState({todos:[]})}))}},{key:"deleteProject",value:function(e){var t=this,n=this.get_headers();C.a.delete("http://localhost:8000/api/projects/".concat(e),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),t.setState({projects:[]})}))}},{key:"deleteTodo",value:function(e){var t=this,n=this.get_headers();console.log(n),console.log(e),C.a.delete("http://127.0.0.1:8000/api/todo/".concat(e),{headers:n}).then((function(e){t.load_data()})).catch((function(e){console.log(e),t.setState({todos:[]})}))}},{key:"set_token",value:function(e,t){var n=this;(new u.a).set("token",e),this.setState({token:e,whoIsUser:t},(function(){return n.load_data()}))}},{key:"is_auth",value:function(){return!!this.state.token}},{key:"logout",value:function(){this.set_token("")}},{key:"get_token_from_storage",value:function(){var e=this,t=(new u.a).get("token");this.setState({token:t},(function(){return e.load_data()}))}},{key:"get_token",value:function(e,t){var n=this,c={username:e,password:t};C.a.post("http://127.0.0.1:8000/api-token-auth/",c).then((function(t){n.set_token(t.data.token,e),console.log(t.data)})).catch((function(e){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c ")}))}},{key:"load_data",value:function(){var e=this,t=this.get_headers();C.a.get("http://127.0.0.1:8000/api/users/",{headers:t}).then((function(t){var n=t.data;e.setState({users:n})})).catch((function(t){console.log(t),e.setState({users:[]})})),C.a.get("http://localhost:8000/api/projects/",{headers:t}).then((function(t){var n=t.data.results;e.setState({projects:n})})).catch((function(t){console.log(t),e.setState({projects:[]})})),C.a.get("http://localhost:8000/api/todo/",{headers:t}).then((function(t){var n=t.data.results;e.setState({todos:n})})).catch((function(t){console.log(t),e.setState({todos:[]})}))}},{key:"get_headers",value:function(){var e={"Content-Type":"application/json"};return this.is_auth()&&(e.Authorization="Token "+this.state.token),e}},{key:"componentDidMount",value:function(){this.get_token_from_storage()}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)(S,{is_auth:this.is_auth.bind(this),logout:function(){e.logout()},whoIsUser:this.state.whoIsUser}),Object(d.jsx)(x.a,{children:Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{exact:!0,path:"/users",component:function(){return Object(d.jsx)(p,{users:e.state.users})}}),Object(d.jsx)(m.b,{exact:!0,path:"/projects",component:function(){return Object(d.jsx)(f,{projects:e.state.projects,deleteProject:function(t){return e.deleteProject(t)}})}}),Object(d.jsx)(m.b,{exact:!0,path:"/projects/create",component:function(){return Object(d.jsx)(F,{users:e.state.users,createProject:function(t,n,c){return e.createProject(t,n,c)}})}}),Object(d.jsx)(m.b,{exact:!0,path:"/todo/create",component:function(){return Object(d.jsx)(U,{users:e.state.users,projects:e.state.projects,createTodo:function(t,n,c,s){return e.createTodo(t,n,c,s)}})}}),Object(d.jsx)(m.b,{exact:!0,path:"/todo",component:function(){return Object(d.jsx)(y,{todos:e.state.todos,deleteTodo:function(t){return e.deleteTodo(t)}})}}),Object(d.jsx)(m.b,{path:"/projects/:name",children:Object(d.jsx)(g,{projects:this.state.projects,users:this.state.users})}),Object(d.jsx)(m.b,{exact:!0,path:"/login",component:function(){return Object(d.jsx)(N,{get_token:function(t,n){return e.get_token(t,n)}})}}),Object(d.jsx)(m.a,{from:"/project",to:"/projects"}),Object(d.jsx)(m.a,{from:"/user",to:"/users"}),Object(d.jsx)(m.b,{path:"",children:Object(d.jsx)("h1",{style:{textAlign:"center",color:"#123456"},children:'\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a "Todo"'})}),Object(d.jsx)(m.b,{component:P})," } />"]})}),Object(d.jsx)(T,{})]})}}]),n}(s.a.Component),I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root")),I()}},[[70,1,2]]]);
//# sourceMappingURL=main.27d7968d.chunk.js.map