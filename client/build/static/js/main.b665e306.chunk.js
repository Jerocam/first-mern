(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(2),i=n.n(c),l=n(16),a=n.n(l),s=(n(22),n(3)),o=n(5),u=n(7),j=(n(23),n(6)),d=n.n(j);var b=function(){var e=Object(c.useState)([{title:"",genre:"",year:""}]),t=Object(u.a)(e,2),n=t[0],i=t[1],l=Object(c.useState)({title:"",genre:"",year:""}),a=Object(u.a)(l,2),j=a[0],b=a[1];function m(e){var t=e.target,n=t.name,r=t.value;b((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,r))}))}return Object(c.useEffect)((function(){fetch("/movies").then((function(e){if(e.ok)return e.json()})).then((function(e){return i(e)}))})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:"Jerocam MERN Application"}),Object(r.jsx)("h2",{children:"Add Movie"}),Object(r.jsxs)("form",{name:"Form",children:[Object(r.jsxs)("label",{children:["Title ",Object(r.jsx)("input",{onChange:m,name:"title",value:j.title})]}),Object(r.jsxs)("label",{children:["Genre ",Object(r.jsx)("input",{onChange:m,name:"genre",value:j.genre,className:"rt"})]}),Object(r.jsxs)("label",{children:["Year ",Object(r.jsx)("input",{onChange:m,name:"year",value:j.year,className:"rt"})]}),Object(r.jsx)("button",{onClick:function(e){e.preventDefault();var t=document.forms.Form.title.value,n=document.forms.Form.genre.value,r=document.forms.Form.year.value;if(null==t||""===t||null==n||""===n||null==r||""===r)return alert("Please Fill All Required Field"),!1;if(isNaN(r))alert("Error, Please enter only number");else{alert("New Movie Added!");var c={title:j.title,genre:j.genre,year:j.year};d.a.post("/newmovie",c)}},children:"Add Movie"})]}),Object(r.jsx)("div",{className:"grid-container",children:n.map((function(e,t){return Object(r.jsxs)("div",{className:"grid-item",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsx)("p",{children:e.genre}),Object(r.jsx)("p",{children:e.year}),Object(r.jsx)("button",{onClick:function(){return t=e._id,d.a.delete("/delete/"+t),void alert("movie deleted");var t},className:"btnDel",children:"Delete"})]},t)}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),r(e),c(e),i(e),l(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),m()}},[[41,1,2]]]);
//# sourceMappingURL=main.b665e306.chunk.js.map