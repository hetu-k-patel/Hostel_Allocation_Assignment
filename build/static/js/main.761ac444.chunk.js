(this.webpackJsonphostel_room_allocation=this.webpackJsonphostel_room_allocation||[]).push([[0],{53:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var s=c(33),o=c.n(s),a=c(17),r=c(10),i=c(16),n=c(4),l=c(34),d=c.n(l),j=c(24),b={signInFlow:"popup",signInSuccessUrl:"/gender",signInOptions:[j.a.auth.GoogleAuthProvider.PROVIDER_ID,j.a.auth.FacebookAuthProvider.PROVIDER_ID]};j.a.initializeApp({apiKey:"AIzaSyD5NeSnIciq54j68Sz80R2abJQdkX-JilQ",authDomain:"hostel-allocation-assign-12a49.firebaseapp.com",projectId:"hostel-allocation-assign-12a49",storageBucket:"hostel-allocation-assign-12a49.appspot.com",messagingSenderId:"728687487079",appId:"1:728687487079:web:698ea8a19dad6afecc4cc2",measurementId:"G-M068D6CRKR"});var h=j.a.auth(),u=(c(53),c(2)),O=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(n.useState)({}),a=Object(i.a)(o,2),l=a[0],j=a[1];return Object(n.useEffect)((function(){var e=h.onAuthStateChanged((function(e){if(e){if(localStorage.getItem("user"))JSON.parse(localStorage.getItem("user")).uid!==e.uid&&localStorage.setItem("user",JSON.stringify(l));else j({displayName:e.displayName,email:e.email,photoURL:e.photoURL,display:e.displayName,uid:e.uid}),localStorage.setItem("user",JSON.stringify({displayName:e.displayName,email:e.email,photoURL:e.photoURL,uid:e.uid}));s(!!e)}else j({})}));return function(){return e()}}),[]),c?Object(u.jsx)("div",{children:Object(u.jsx)(r.Redirect,{to:"/gender"})}):Object(u.jsxs)("div",{className:"login",children:[Object(u.jsx)("h1",{children:"Hostel Application"}),Object(u.jsx)("p",{children:"Please Sign In:"}),Object(u.jsx)(d.a,{uiConfig:b,firebaseAuth:h})]})},x=(c(59),c(18)),g=(c(60),function(){JSON.parse(localStorage.getItem("user"));var e=Object(r.useHistory)(),t=function(t){var c=JSON.parse(localStorage.getItem("user")),s=Object(x.a)(Object(x.a)({},c),{},{gender:t.target.dataset.gender});localStorage.setItem("user",JSON.stringify(s)),e.push("/hostel")};return Object(u.jsxs)("section",{className:"genderSection",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:"Choose your Gender"})}),Object(u.jsxs)("div",{className:"card-wrapper",children:[Object(u.jsxs)("div",{className:"card girl-card","data-gender":"girl",onClick:t,children:[Object(u.jsx)("div",{className:"icon"}),Object(u.jsx)("div",{className:"text",children:Object(u.jsx)("h2",{children:"Girls Hostels"})})]}),Object(u.jsxs)("div",{className:"card boy-card","data-gender":"boy",onClick:t,children:[Object(u.jsx)("div",{className:"icon"}),Object(u.jsx)("div",{className:"text",children:Object(u.jsx)("h2",{children:"Boys Hostels"})})]})]})]})}),m=(c(61),function(){var e=JSON.parse(localStorage.getItem("user")),t=Object(n.useState)(!0),c=Object(i.a)(t,2),s=c[0],o=c[1],a=Object(n.useState)({}),l=Object(i.a)(a,2),d=l[0],j=l[1],b=Object(r.useHistory)();Object(n.useEffect)((function(){e&&(o("boy"===e.gender),j(e))}),[]);var h=function(e){var t=Object(x.a)(Object(x.a)({},d),{},{hostel:e.target.dataset.hostel});localStorage.setItem("user",JSON.stringify(t)),b.push("/floor")};return Object(u.jsxs)("section",{className:"hostelSection",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:"Choose your Hostel"})}),Object(u.jsxs)("div",{className:"card-wrapper",children:[Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"1",onClick:h,children:Object(u.jsx)("h2",{children:s?"B1":"G1"})}),Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"2",onClick:h,children:Object(u.jsx)("h2",{children:s?"B2":"G2"})}),Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"3",onClick:h,children:Object(u.jsx)("h2",{children:s?"B3":"G3"})}),Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"4",onClick:h,children:Object(u.jsx)("h2",{children:s?"B4":"G4"})}),Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"5",onClick:h,children:Object(u.jsx)("h2",{children:s?"B5":"G5"})}),Object(u.jsx)("div",{className:s?"card boy-card":"card girl-card","data-hostel":"6",onClick:h,children:Object(u.jsx)("h2",{children:s?"B6":"G6"})})]})]})}),p=c(29),S=(c(62),function(e){var t=e.user,c=e.handleClose,s=Object(r.useHistory)();return Object(u.jsx)("div",{className:"popup-box",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("span",{className:"close-icon",onClick:c,children:"x"}),Object(u.jsx)("h1",{children:"Success"}),Object(u.jsx)("h3",{children:"Your room is has been booked successfully."}),Object(u.jsx)("h4",{children:"Your room details are as follows:"}),Object(u.jsxs)("p",{children:["Hostel No."," ",Object(u.jsx)("span",{children:"boy"===t.gender?"B"+t.hostel:"G"+t.hostel})]}),Object(u.jsxs)("p",{children:["Floor No. ",Object(u.jsx)("span",{children:t.floor})]}),Object(u.jsxs)("p",{children:["Room No. ",Object(u.jsx)("span",{children:t.room})]}),Object(u.jsx)("button",{onClick:function(){return s.push("/home")},children:"Go to Home"})]})})}),v=(c(63),[1,2,3,4,5,6,7,8,9,10]),A=function(){var e=JSON.parse(localStorage.getItem("user")),t=Object(n.useState)({}),c=Object(i.a)(t,2),s=c[0],o=c[1],a=Object(n.useState)(1),r=Object(i.a)(a,2),l=r[0],d=r[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),h=b[0],O=b[1],g=Object(n.useState)(!1),m=Object(i.a)(g,2),p=m[0],A=m[1],f=function(){A(!p)},I=function(e){document.querySelectorAll(".card").forEach((function(e){e.classList.remove("book-card"),e.removeAttribute("id")})),e.target.classList.toggle("book-card"),e.target.id="selectedRoom",O(!0)};return Object(n.useEffect)((function(){o(e)}),[]),Object(u.jsxs)("section",{className:"floorSection",children:[Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("h1",{children:"Choose your Floor"})}),Object(u.jsx)("div",{className:"floorSelect",children:Object(u.jsx)("select",{id:"floor",value:l,onChange:function(e){return d(e.target.value)},children:v.map((function(e,t){return Object(u.jsxs)("option",{value:t+1,children:[t+1," Floor"]},"floor"+t)}))})}),Object(u.jsx)("div",{className:"card-wrapper",children:v.map((function(e,t){return Object(u.jsx)("h2",{className:"card",onClick:I,children:t+1},"room"+t)}))}),Object(u.jsx)("div",{className:"bookButton",children:h&&Object(u.jsx)("button",{onClick:function(e){var t=document.getElementById("selectedRoom").textContent,c=Object(x.a)(Object(x.a)({},s),{},{room:t,floor:l,isAllSet:!0});o(c),localStorage.setItem("user",JSON.stringify(c)),f()},children:"Book Room"})}),p&&Object(u.jsx)(S,{user:s,handleClose:f})]})},f=function(){var e=JSON.parse(localStorage.getItem("user")),t=Object(r.useHistory)();return e?Object(u.jsx)("section",{className:"homeSection",children:Object(u.jsxs)("div",{className:"box",children:[Object(u.jsx)("h1",{children:"Success"}),Object(u.jsx)("h3",{children:"Your room is has been booked successfully."}),Object(u.jsx)("h4",{children:"Your room details are as follows:"}),Object(u.jsxs)("p",{children:["Hostel No."," ",Object(u.jsx)("span",{children:"boy"===e.gender?"B"+e.hostel:"G"+e.hostel})]}),Object(u.jsxs)("p",{children:["Floor No. ",Object(u.jsx)("span",{children:e.floor})]}),Object(u.jsxs)("p",{children:["Room No. ",Object(u.jsx)("span",{children:e.room})]})]})}):(t.push("/login"),null)},I=(c(64),function(e){var t=e.user;Object(r.useHistory)();return Object(u.jsxs)("header",{children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:"profile",children:Object(u.jsx)("img",{src:t?t.photoURL:"https://image.flaticon.com/icons/png/512/147/147144.png",alt:""})}),Object(u.jsx)("div",{className:"logoutButton",children:t?Object(u.jsx)("button",{onClick:function(){localStorage.removeItem("user"),h.signOut().then((function(){return window.location.href="/login"}))},children:"Logout"}):null})]})]})}),G=JSON.parse(localStorage.getItem("user")),N=function(){return Object(u.jsxs)(a.a,{children:[Object(u.jsx)(I,{user:G}),Object(u.jsxs)(r.Switch,{children:[Object(u.jsx)(r.Route,{path:"/",exact:!0,component:function(){return G?Object(u.jsx)(p.Redirect,{to:"/home"}):Object(u.jsx)(p.Redirect,{to:"/login"})}}),Object(u.jsx)(r.Route,{path:"/login",component:O}),Object(u.jsx)(r.Route,{path:"/home",component:f}),Object(u.jsx)(r.Route,{path:"/gender",component:g}),Object(u.jsx)(r.Route,{path:"/hostel",component:m}),Object(u.jsx)(r.Route,{path:"/floor",component:A})]})]})};o.a.render(Object(u.jsx)(N,{}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.761ac444.chunk.js.map