(this.webpackJsonpchatersbox=this.webpackJsonpchatersbox||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n.n(c),a=n(15),i=n.n(a),s=(n(24),n(13)),o=n.n(s),u=n(16),j=n(10),l=(n(26),n(9)),b=(n(33),n(28),n(31),n(18)),d=n(19),h=n(4);l.a.initializeApp({apiKey:"AIzaSyBW8ovdClN4bgqeuQQGKq9ayfGwRq4h6Wg",authDomain:"chill-b95ef.firebaseapp.com",projectId:"chill-b95ef",storageBucket:"chill-b95ef.appspot.com",messagingSenderId:"974757780890",appId:"1:974757780890:web:f7d8a69e928b79e481ae23",measurementId:"G-QHX7F3C9YB"});var p=l.a.auth(),f=l.a.firestore();l.a.analytics();function O(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"sign-in",onClick:function(){var e=new l.a.auth.GoogleAuthProvider;p.signInWithPopup(e)},children:"Sign in with Google"}),Object(h.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function g(){return p.currentUser&&Object(h.jsx)("button",{className:"sign-out",onClick:function(){return p.signOut()},children:"Sign Out"})}function m(){var e=Object(c.useRef)(),t=f.collection("messages"),n=t.orderBy("createdAt"),r=Object(d.a)(n,{idField:"id"}),a=Object(j.a)(r,1)[0],i=Object(c.useState)(""),s=Object(j.a)(i,2),b=s[0],O=s[1],g=function(){var n=Object(u.a)(o.a.mark((function n(c){var r,a,i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),r=p.currentUser,a=r.uid,i=r.photoURL,n.next=4,t.add({text:b,createdAt:l.a.firestore.FieldValue.serverTimestamp(),uid:a,photoURL:i});case 4:O(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("main",{children:[a&&a.map((function(e){return Object(h.jsx)(x,{message:e},e.id)})),Object(h.jsx)("span",{ref:e})]}),Object(h.jsxs)("form",{onSubmit:g,children:[Object(h.jsx)("input",{value:b,onChange:function(e){return O(e.target.value)},placeholder:"say something nice"}),Object(h.jsx)("button",{type:"submit",disabled:!b,children:"\ud83d\udd4a\ufe0f"})]})]})}function x(e){var t=e.message,n=t.text,c=t.uid,r=t.photoURL,a=c===p.currentUser.uid?"sent":"received";return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"message ".concat(a),children:[Object(h.jsx)("img",{src:r||"https://api.adorable.io/avatars/23/abott@adorable.png"}),Object(h.jsx)("p",{children:n})]})})}var v=function(){var e=Object(b.a)(p),t=Object(j.a)(e,1)[0];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(h.jsx)(g,{})]}),Object(h.jsx)("section",{children:t?Object(h.jsx)(m,{}):Object(h.jsx)(O,{})})]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.ddf98b6f.chunk.js.map