(this["webpackJsonpmy-amazon"]=this["webpackJsonpmy-amazon"]||[]).push([[0],{55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},73:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},94:function(e,t,c){"use strict";c.r(t);var a=c(2),s=c(3),n=c.n(s),i=c(44),r=c.n(i),o=(c(55),c(45)),j=c(7),d=(c(56),c(57),c(15)),l=Object(s.createContext)(),u=function(e){var t=e.reducer,c=e.initialState,n=e.children;return Object(a.jsx)(l.Provider,{value:Object(s.useReducer)(t,c),children:n})},b=function(){return Object(s.useContext)(l)},m=c(33),h=m.a.initializeApp({apiKey:"AIzaSyBgnV4igKtbEEACJA5LqXA6ClnQ5S1pr54",authDomain:"my-f4f2f.firebaseapp.com",databaseURL:"https://my-f4f2f.firebaseio.com",projectId:"my-f4f2f",storageBucket:"my-f4f2f.appspot.com",messagingSenderId:"59344382928",appId:"1:59344382928:web:cb13f6d25537e2702467d5",measurementId:"G-ZX6M4YJ329"}).firestore(),O=m.a.auth(),p=function(){var e=b(),t=Object(j.a)(e,2),c=t[0],s=c.basket,n=c.user;t[1];return Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"amazon-logo"})}),Object(a.jsxs)("div",{className:"header__search",children:[Object(a.jsx)("input",{className:"header__searchInput",type:"text"}),Object(a.jsx)("i",{className:"fa fa-search header__searchIcon"})]}),Object(a.jsxs)("div",{className:"header__nav",children:[Object(a.jsx)(d.b,{to:"/login",children:Object(a.jsxs)("div",{onClick:function(){n&&O.signOut()},className:"header__option",children:[Object(a.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",n?n.email:"Guest"]}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:n?"Sign Out":"Sign In"})]})}),Object(a.jsx)(d.b,{to:"/orders",children:Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(a.jsxs)("div",{className:"header__option",children:[Object(a.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(a.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(a.jsx)(d.b,{to:"/checkout",children:Object(a.jsxs)("div",{className:"header__optionBasket",children:[Object(a.jsx)("i",{className:"fa fa-shopping-cart"}),Object(a.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===s||void 0===s?void 0:s.length})]})})]})]})},x=(c(65),c(66),function(e){var t=e.id,c=e.title,s=e.price,n=e.rating,i=e.image,r=b(),o=Object(j.a)(r,2),d=(o[0].basket,o[1]);return Object(a.jsxs)("div",{className:"product",children:[Object(a.jsxs)("div",{className:"product__info",children:[Object(a.jsx)("div",{className:"product__title",children:c}),Object(a.jsxs)("div",{className:"product__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:s})]}),Object(a.jsx)("div",{className:"product__rating",children:Array(n).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"},t)}))})]}),Object(a.jsx)("img",{src:i,alt:"watch"}),Object(a.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:c,image:i,price:s,rating:n}})},children:"Add to Basket"})]})}),_=function(){return Object(a.jsx)("div",{className:"home",children:Object(a.jsxs)("div",{className:"home__container",children:[Object(a.jsx)("img",{className:"home__image",src:"https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/deals/trafficdrivers/Q4_2020_HolidayDeals_TrafficDrivers_Desktop_Hero_v1_1500x600._CB417563015_.jpg",alt:"background"}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(x,{id:"1",title:"Apple Watch Series 6",price:369.99,rating:5,image:"https://m.media-amazon.com/images/I/71yOGVLGWpL._AC_UY218_.jpg"}),Object(a.jsx)(x,{id:"2",title:"Apple Watch Series 5",price:329.99,rating:4,image:"https://m.media-amazon.com/images/I/71HtGqb9vXL._AC_UY218_.jpg"})]}),Object(a.jsxs)("div",{className:"home__row",children:[Object(a.jsx)(x,{id:"3",title:"Samsung Gear S2",price:299.99,rating:5,image:"https://m.media-amazon.com/images/I/91WHbZPYOUL._AC_UY218_.jpg"}),Object(a.jsx)(x,{id:"4",title:"Samsung Gear S3",price:299.99,rating:3,image:"https://m.media-amazon.com/images/I/712kkMxQ2hL._AC_UY218_.jpg"}),Object(a.jsx)(x,{id:"5",title:"Samsung Galaxy",price:299.99,rating:5,image:"https://m.media-amazon.com/images/I/61P033bD5gL._AC_UY218_.jpg"})]}),Object(a.jsx)("div",{className:"home__row",children:Object(a.jsx)(x,{id:"6",title:"Casio Protrek",price:499.99,rating:5,image:"https://m.media-amazon.com/images/I/81r9t+oQWzL._AC_UL320_.jpg"})})]})})},f=c(9),g=(c(67),c(68),c(22)),v=c.n(g),N=c(34),y=c(17),k=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},S=function(e,t){switch(t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(N.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(N.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Can't remove product id: ".concat(t.id," as it's not in basket")),Object(y.a)(Object(y.a)({},e),{},{basket:a});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});default:return e}},A=function(){var e=Object(f.f)(),t=b(),c=Object(j.a)(t,2),s=c[0].basket;c[1];return Object(a.jsxs)("div",{className:"subtotal",children:[Object(a.jsx)(v.a,{renderText:function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Subtotal(",s.length," items):",Object(a.jsxs)("strong",{children:[" ",e]})]}),Object(a.jsxs)("small",{className:"subtotal__gift",children:[Object(a.jsx)("input",{type:"checkbox"}),"This order contains a gift"]})]})},decimalScale:2,value:k(s),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{onClick:function(t){return e.push("/payment")},children:"Proceed to Checkout"})]})},C=(c(70),function(e){var t=e.id,c=e.image,s=e.title,n=e.price,i=e.rating,r=e.hideButton,o=b(),d=Object(j.a)(o,2),l=(d[0].basket,d[1]);return Object(a.jsxs)("div",{className:"checkoutProduct",children:[Object(a.jsx)("img",{className:"checkoutProduct__image",src:c,alt:""}),Object(a.jsxs)("div",{className:"checkoutProduct__info",children:[Object(a.jsx)("div",{className:"checkoutProduct__title",children:s}),Object(a.jsxs)("div",{className:"checkoutProduct__price",children:[Object(a.jsx)("small",{children:"$"}),Object(a.jsx)("strong",{children:n})]}),Object(a.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(a.jsx)("p",{children:"\u2b50"},t)}))}),!r&&Object(a.jsx)("button",{onClick:function(){l({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})}),E=function(){var e=b(),t=Object(j.a)(e,1)[0],c=t.basket,s=t.user;return Object(a.jsxs)("div",{className:"checkout",children:[Object(a.jsxs)("div",{className:"checkout__left",children:[Object(a.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2020/1207KBD/KBHP-Showcase_1500x300.jpg",alt:"checkout ad"}),Object(a.jsx)("div",{}),Object(a.jsxs)("h3",{children:["Hello, ",s?s.email:"Guest"]}),Object(a.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),c.map((function(e,t){return Object(a.jsx)(C,{id:e.id,title:e.title,rating:e.rating,price:e.price,image:e.image},t)}))]}),Object(a.jsx)("div",{className:"checkout__right",children:Object(a.jsx)(A,{})})]})},w=(c(71),function(){var e=Object(f.f)(),t=Object(s.useState)(""),c=Object(j.a)(t,2),n=c[0],i=c[1],r=Object(s.useState)(""),o=Object(j.a)(r,2),l=o[0],u=o[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(d.b,{to:"/",children:Object(a.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})}),Object(a.jsxs)("div",{className:"login__container",children:[Object(a.jsx)("h1",{children:"Sign In"}),Object(a.jsxs)("form",{children:[Object(a.jsx)("h5",{children:"E-mail"}),Object(a.jsx)("input",{type:"email",onChange:function(e){return i(e.target.value)},value:n}),Object(a.jsx)("h5",{children:"Password"}),Object(a.jsx)("input",{type:"password",onChange:function(e){return u(e.target.value)},value:l}),Object(a.jsx)("button",{className:"login__signInButton",onClick:function(t){t.preventDefault(),O.signInWithEmailAndPassword(n,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",children:"Sign In"})]}),Object(a.jsx)("p",{children:"By signing-in you agree to MY-Amazon CLONE Conditions of Use & Sale. Please see our Privacy Notice,our Cookies Notice and our Interest-Based Ads Notice."}),Object(a.jsx)("button",{className:"login__registerButton",onClick:function(t){t.preventDefault(),O.createUserWithEmailAndPassword(n,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},children:"Create your Amazon account"})]})]})}),T=c(24),I=c.n(T),B=c(32),P=(c(73),c(20)),z=c(47),L=c.n(z).a.create({baseURL:"https://us-central1-my-f4f2f.cloudfunctions.net/api"}),Y=function(){var e=b(),t=Object(j.a)(e,2),c=t[0],n=c.basket,i=c.user,r=t[1],o=Object(f.f)(),l=Object(P.useStripe)(),u=Object(P.useElements)(),m=Object(s.useState)(!1),O=Object(j.a)(m,2),p=O[0],x=O[1],_=Object(s.useState)(!1),g=Object(j.a)(_,2),N=g[0],y=g[1],S=Object(s.useState)(null),A=Object(j.a)(S,2),E=A[0],w=A[1],T=Object(s.useState)(!0),z=Object(j.a)(T,2),Y=z[0],D=z[1],M=Object(s.useState)(!0),U=Object(j.a)(M,2),G=U[0],R=U[1];Object(s.useEffect)((function(){(function(){var e=Object(B.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"post",url:"/payments/create?total=".concat(100*k(n))});case 2:t=e.sent,R(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n]);var H=function(){var e=Object(B.a)(I.a.mark((function e(t){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.next=4,l.confirmCardPayment(G,{payment_method:{card:u.getElement(P.CardElement)}}).then((function(e){var t=e.paymentIntent;h.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.id).set({basket:n,amount:t.amount,created:t.created}),x(!0),w(null),y(!1),r({type:"EMPTY_BASKET"}),o.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{className:"payment",children:Object(a.jsxs)("div",{className:"payment__container",children:[Object(a.jsxs)("h1",{children:["Checkout (",Object(a.jsxs)(d.b,{to:"/checkout",children:[null===n||void 0===n?void 0:n.length," items"]}),")"]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Delivery Address:"})}),Object(a.jsxs)("div",{className:"payment__address",children:[Object(a.jsx)("p",{children:null===i||void 0===i?void 0:i.email}),Object(a.jsx)("p",{children:"123 React Lane"}),Object(a.jsx)("p",{children:"Los Angeles, CA "})]})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Review items and delivery"})}),Object(a.jsx)("div",{className:"payment__items",children:n.map((function(e,t){return Object(a.jsx)(C,{id:e.id,title:e.title,rating:e.rating,price:e.price,image:e.image},t)}))})]}),Object(a.jsxs)("div",{className:"payment__section",children:[Object(a.jsx)("div",{className:"payment__title",children:Object(a.jsx)("h3",{children:"Payment Method"})}),Object(a.jsx)("div",{className:"payment__details",children:Object(a.jsxs)("form",{onSubmit:H,children:[Object(a.jsx)(P.CardElement,{onChange:function(e){D(e.empty),w(e.error?e.error.message:"")}}),Object(a.jsxs)("div",{className:"payment__priceContainer",children:[Object(a.jsx)(v.a,{renderText:function(e){return Object(a.jsxs)("h3",{children:["Order Total: ",e]})},decimalScale:2,value:k(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(a.jsx)("button",{disabled:N||Y||p,children:Object(a.jsx)("span",{children:N?Object(a.jsx)("p",{children:"Processing"}):"Buy now"})})]}),E&&Object(a.jsx)("div",{children:E})]})})]})]})})},D=c(48),M=(c(91),c(92),c(49)),U=c.n(M),G=function(e){var t,c=e.order;return Object(a.jsxs)("div",{className:"order",children:[Object(a.jsx)("h2",{children:"Order"}),Object(a.jsx)("p",{children:U.a.unix(c.data.created).format("MMMM Do YYYY, h:mma")}),Object(a.jsx)("p",{className:"order__id",children:Object(a.jsx)("small",{children:c.id})}),null===(t=c.data.basket)||void 0===t?void 0:t.map((function(e,t){return Object(a.jsx)(C,{id:e.id,title:e.title,rating:e.rating,price:e.price,image:e.image,hideButton:!0},t)})),Object(a.jsx)(v.a,{renderText:function(e){return Object(a.jsxs)("h3",{className:"order__total",children:["Order Total: ",e]})},decimalScale:2,value:c.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"$"})]})},R=function(){var e=b(),t=Object(j.a)(e,2),c=t[0],n=(c.basket,c.user),i=(t[1],Object(s.useState)([])),r=Object(j.a)(i,2),o=r[0],d=r[1];return Object(s.useEffect)((function(){n?h.collection("users").doc(null===n||void 0===n?void 0:n.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return d(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):d([])}),[n]),Object(a.jsxs)("div",{className:"orders",children:[Object(a.jsx)("h1",{children:"Your orders"}),Object(a.jsx)("div",{className:"orders__order",children:null===o||void 0===o?void 0:o.map((function(e,t){return Object(a.jsx)(G,{order:e},t)}))})]})},H=Object(D.a)("pk_test_51Hz44jIuu30IjyLc2pHNtl7J5VheWKZz1rSjJGAgMzJBlq6UeiEUfXq2DCCVItYekIaBAV4an7oJ0plejw9exH1u00GAuFj96b");var K=function(){var e=b(),t=Object(j.a)(e,2);Object(o.a)(t[0]);var c=t[1];return Object(s.useEffect)((function(){O.onAuthStateChanged((function(e){c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(a.jsx)(d.a,{children:Object(a.jsx)("div",{className:"app",children:Object(a.jsxs)(f.c,{children:[Object(a.jsxs)(f.a,{path:"/orders",children:[Object(a.jsx)(p,{}),Object(a.jsx)(R,{})]}),Object(a.jsx)(f.a,{path:"/login",children:Object(a.jsx)(w,{})}),Object(a.jsxs)(f.a,{path:"/checkout",children:[Object(a.jsx)(p,{}),Object(a.jsx)(E,{})]}),Object(a.jsxs)(f.a,{path:"/payment",children:[Object(a.jsx)(p,{}),Object(a.jsx)(P.Elements,{stripe:H,children:Object(a.jsx)(Y,{})})]}),Object(a.jsxs)(f.a,{path:"/",children:[Object(a.jsx)(p,{}),Object(a.jsx)(_,{})]})]})})})};r.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(u,{initialState:{basket:[]},reducer:S,children:Object(a.jsx)(K,{})})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.9cb3b65b.chunk.js.map