(function(e){function t(t){for(var o,r,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},i=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"010e":function(e,t,n){e.exports=n.p+"img/photoperso.982a4483.jpg"},"0757":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"about":"A propos","portfolio":"Projets","skills":"CV"},"en":{"about":"About","portfolio":"Projects","skills":"Resume"}}'),delete e.options._Ctor}},"0775":function(e,t,n){"use strict";var o=n("2ede"),a=n.n(o);a.a},"0c79":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"snake":{"intro":"Un jeu snake jouable dans le navigateur fait en javascript et avec webpack pour me familiariser avec webpack.","description":"Vous pouvez jouer en cliquant sur les boutons ou avec les flèches du clavier. La touche entrée permet de commencer ou de mettre le jeu en pause Une image se révèle en fond au fur et à mesure de l\'avancement."},"tic tac toe":{"intro":"Un jeu de morpion jouable dans le navigateur contre un autre joueur ou contre un ordinateur","description":"Choisissez le nom des 2 joueurs et si le 2eme joueur est humain pour lancer la partie. L\'ordinateur ne peut pas perdre la partie et est codé avec l\'algorithme minimax."},"weatherApp":{"intro":"Une application météo faite avec vueJS et l\'API OpenWeatherMap.","description":"Vous pouvez rechercher la ville que vous souhaitez et avoir la météo des 5 prochains jours par tranche de 3 heures. Permet de choisir entre un thème de couleur clair ou sombre."},"youtubeTogether":{"intro":"Une application que j\'ai faite pendant le confinement pour regarder des vidéos youtube avec ses amis en synchronisé. Fait avec vueJS, express et socket.io.","description":"Vous pouvez rejoindre un salon pour pouvoir regarder une vidéo youtube en synchronisé avec toutes les autres personnes du salon. Permet de mettre la vidéo en pause, de changer le timer, et d\'utiliser le chat avec toutes les personnes du salon."},"Bulgneville":{"intro":"Le site web de l\'étude notaire de bulgnéville.","description":"Site web professionnel avec un CMS permettant de poster des articles ou annonces immobilières. L\'utilisateur peut consulter les articles, annonces immobilières et informations sur l\'étude, envoyer des messages à l\'étude directement via le site, et utiliser un calculateur de frais de notaire ou d\'échéance de prêt immobilier"},"Hesperides":{"intro":"Application web pour un syndic de copropriété","description":"Une application permettant de consulter et éditer une base de donnée sur les propriétaires, lots et locataires d\'une copropriété. Permet également de poster des documents (factures/devis) au format pdf et de modifier leur statut (traité ou à traiter). \\n\\nSystème d\'authentication complet avec 4 types de permissions (consultation de la DB, modification de la DB, poster des documents, consulter les documents). \\n\\nVous pouvez vous connecter avec les logs admin // admin et consulter la liste des comptes pour vous connecter avec d\'autres permissions. (le mot de passe est toujours le même que le login) \\n\\nNB: Le système de documents ne fonctionne pas sur cette version vitrine à cause des limitations d\'heroku."}},"en":{"snake":{"intro":"A snake game playable in the browser I made with javascript and wepback to get more experience with webpack.","description":"You can play either by clicking the buttons (for mobile users) or using your keyboard. The enter key start or pause the game. The background reveals itself as the snake gets bigger."},"tic tac toe":{"intro":"A tic tac toe game playable in the browser against either a friend or the computer","description":"Choose the name of both players and choose to play against the computer or another player then start the game. The computer is coded with the minimax algorithm and is unbeatable"},"weatherApp":{"intro":"A weather app made with vueJS and the OpenWeatherMap API.","description":"You can search for the city you want and get the weather every 3 hours for the next 5 days. Features a dark and light color scheme that you can freely switch"},"youtubeTogether":{"intro":"An app I made during the COVID quarantine so I could watch youtube videos in sync with my friends. Made with vueJS, express and socket.io","description":"You can join a room to be able to watch a video in sync with everyone in the room. Features pausing, searching for a timer, and a chat."},"Bulgneville":{"intro":"Bulgneville\'s notary office website.","description":"Professionnal website with a CMS that let you post articles and real estate announces. The user can view articles, real estate announces, and the office appointments and informations about the office, send messages to the office directly from the website, and use a calculator for notary costs and real estate loan"},"Hesperides":{"intro":"Web app made for a co-ownership buildings","description":"An app made for consulting and editing a database about owners, tenants, and appartement. Also features posting and consulting pdf document and editing their status to either \'to do\' or \'done\'. \\n\\nComplete authentication system with 4 types of authorizations (editing accounts, editing the database, posting documents and consulting documents). \\n\\nLogin using the credentials admin // admin to view the list of other accounts with different authorizations you can log on. (password is always equal to login)\\n\\nNB: Due to limitations on heroku hosting, the document features is not working on this showcase version."}}}'),delete e.options._Ctor}},"0d3b":function(e,t,n){e.exports=n.p+"img/tic-tac-toe.2345cef3.png"},"0ff5":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"title":"Développeur web full-stack"},"en":{"title":"Full-stack web developper"}}'),delete e.options._Ctor}},"103f":function(e,t,n){"use strict";var o=n("3d4c"),a=n.n(o);a.a},1307:function(e,t,n){e.exports=n.p+"img/trader.f7c03410.png"},"13ba":function(e,t,n){e.exports=n.p+"img/weather.19375038.png"},"2a3b":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"paragraphs":{"first":"Anciennement professeur de mathématiques j\'ai toujours eu un goût prononcé pour la programmation et la résolution de problèmes. J\'ai donc décidé de quitter l\'éducation pour poursuivre une carrière à plein temps dans le développement web.","second":"Je suis developpeur full-stack autodidacte et j\'aime créer des applications et sites web de toutes sortes. J\'apprécie particulièrement les technologies VueJS et Express.","third":"N\'hésitez pas à me contacter si vous avez un projet à me proposer ou que mes projets (j\'en ajoute régulièrement) vous intéressent."}},"en":{"paragraphs":{"first":"I\'m a former maths teacher who always had a taste for solving problems and computer programming. This is why I decided to quit education to pursue a full time career in web developpement.","second":"I\'m a self-taught full stack developper and I like to create websites and apps of all kinds. I like using VueJS and Express.","third":"Don\'t hesitate to contact me if you have a project you would like me to work on, or if my projects (adding more regularly) interests you."}}}'),delete e.options._Ctor}},"2ede":function(e,t,n){},"352e":function(e,t,n){e.exports=n.p+"img/snake.b6375c1f.png"},"390c":function(e,t,n){"use strict";var o=n("0757"),a=n.n(o);t["default"]=a.a},"3d4c":function(e,t,n){},"49f8":function(e,t,n){var o={"./en.json":"edd4","./fr.json":"f693"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="49f8"},"54a6":function(e,t,n){e.exports=n.p+"img/youtubeTogether.0b80ca9f.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("navbar"),n("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeEnter,"after-leave":e.afterLeave}},[n("router-view",{attrs:{id:"view"}})],1)],1)},i=[],r=(n("ac1f"),n("1276"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{attrs:{id:"navbar"}},[e._m(0),e.mobileView?e._e():n("div",{staticClass:"navigation"},[n("router-link",{staticClass:"link",attrs:{to:"/about","active-class":"active"}},[e._v(e._s(e.$t("about")))]),n("router-link",{staticClass:"link",attrs:{to:"/projects","active-class":"active"}},[e._v(e._s(e.$t("portfolio")))]),n("a",{attrs:{href:e.resumeLink,target:"_blank"}},[e._v(e._s(e.$t("skills")))])],1),n("langage-picker")],1),e.mobileView?n("nav",{attrs:{id:"mobileNav"}},[n("router-link",{staticClass:"link-bottom",attrs:{to:"/about","active-class":"active-bottom"}},[n("i",{staticClass:"fas fa-align-justify"}),n("span",[e._v(" "+e._s(e.$t("about"))+" ")])]),n("router-link",{staticClass:"link-bottom",attrs:{to:"/projects","active-class":"active-bottom"}},[n("i",{staticClass:"fas fa-desktop"}),n("span",[e._v(" "+e._s(e.$t("portfolio"))+" ")])]),n("a",{attrs:{href:e.resumeLink,target:"_blank"}},[n("i",{staticClass:"far fa-address-card"}),n("span",[e._v(" "+e._s(e.$t("skills"))+" ")])])],1):e._e()])}),s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"contact"}},[n("a",{attrs:{href:"https://github.com/mczaba"}},[n("i",{staticClass:"fab fa-github"})]),n("a",{attrs:{href:"mailto:martin.czabadaj@gmail.com"}},[n("i",{staticClass:"fas fa-envelope"})])])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"langagePicker"},[n("span",{class:{activeLangage:"fr"===e.$i18n.locale},on:{click:e.goFR}},[e._v("FR")]),e._v(" | "),n("span",{class:{activeLangage:"en"===e.$i18n.locale},on:{click:e.goEN}},[e._v("EN")])])},u=[],l={name:"langagePicker",methods:{goFR:function(){this.$root.$i18n.locale="fr"},goEN:function(){this.$root.$i18n.locale="en"}}},p=l,d=(n("103f"),n("2877")),f=Object(d["a"])(p,c,u,!1,null,"134d593e",null),h=f.exports,m={name:"navbar",data:function(){return{windowWidth:window.innerWidth}},computed:{mobileView:function(){return this.windowWidth<600},resumeLink:function(){return"fr"===this.$root.$i18n.locale?"".concat("/","CV-FR.pdf"):"".concat("/","CV-EN.pdf")}},components:{langagePicker:h},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))}},v=m,g=(n("0775"),n("390c")),b=Object(d["a"])(v,r,s,!1,null,"4ca7d0e0",null);"function"===typeof g["default"]&&Object(g["default"])(b);var _=b.exports,w={name:"App",data:function(){return{transition:"slideRight"}},components:{navbar:_},methods:{beforeEnter:function(){"slideRight"===this.transition&&(document.documentElement.style.overflow="hidden",window.scrollTo(0,0))},afterLeave:function(){"slideRight"===this.transition&&(document.documentElement.style.overflow="visible")}},watch:{$route:function(e,t){var n=e.path.split("/")[e.path.split("/").length-1],o=t.path.split("/")[t.path.split("/").length-1];"about"===n&&"projects"===o?this.transition="slideRight":"projects"===n&&"about"===o&&(this.transition="slideLeft")}}},k=w,y=(n("5c0b"),Object(d["a"])(k,a,i,!1,null,null,null)),j=y.exports,C=n("8c4f"),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("header-comp"),n("div",{staticClass:"description"},[n("p",[e._v(" "+e._s(e.$t("paragraphs.first"))+" ")]),n("p",[e._v(" "+e._s(e.$t("paragraphs.second"))+" ")]),n("p",[e._v(" "+e._s(e.$t("paragraphs.third"))+" ")])])],1)},S=[],O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"header"},[o("img",{attrs:{src:n("010e"),alt:""}}),o("div",[o("h2",[e._v("Martin Czabadaj")]),o("p",[e._v(e._s(e.$t("title")))])]),o("div",{staticClass:"tagsContainer"},e._l(e.tags,(function(t){return o("span",{key:t,staticClass:"tag"},[e._v(e._s(t))])})),0)])},L=[],$={name:"Header",data:function(){return{tags:["VueJS","NodeJS","NuxtJS","Javascript","HTML","CSS","Express","MongoDB","MySQL"]}}},z=$,E=(n("e6ea"),n("c0dd")),V=Object(d["a"])(z,O,L,!1,null,"2025e134",null);"function"===typeof E["default"]&&Object(E["default"])(V);var P=V.exports,A={name:"About",components:{headerComp:P}},J=A,T=(n("b036"),n("5cd3")),N=Object(d["a"])(J,x,S,!1,null,"028859e4",null);"function"===typeof T["default"]&&Object(T["default"])(N);var M=N.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"portfolio"},[n("div",{staticClass:"cardsContainer"},e._l(e.projects,(function(t){return n("project-card",{key:t.title,attrs:{project:t}},[t.warning?n("template",{slot:"warning"},[n("p",{staticClass:"warning"},[e._v(" "+e._s(e.$t(t.title+".warning"))+" ")])]):e._e(),n("template",{slot:"intro"},[n("p",[e._v(e._s(e.$t(t.title+".intro")))])]),n("p",[e._v(e._s(e.$t(t.title+".description")))])],2)})),1)])},U=[],D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("img",{attrs:{src:e.imageURL(),alt:""}}),n("div",{staticClass:"text"},[n("h2",[e._v(e._s(e.project.title))]),n("p",[n("b",[e._v("Techs : ")]),e._v(e._s(e.project.techs))]),e._t("intro"),e._t("default"),e.project.warning?e._t("warning"):e._e()],2),n("div",{staticClass:"links"},[n("a",{attrs:{href:e.project.liveLink,target:"_blank"}},[e._v(e._s(e.$t("liveLink")))]),e.project.frontCode?n("a",{attrs:{href:e.project.frontCode,target:"_blank"}},[e._v(e._s(e.$t("front")))]):e._e(),e.project.backCode?n("a",{attrs:{href:e.project.backCode,target:"_blank"}},[e._v(e._s(e.$t("back")))]):e._e()])])},I=[],R={name:"projectCard",props:["project"],methods:{imageURL:function(){return n("cc1f")("./".concat(this.project.imgSrc))}}},F=R,B=(n("713f"),n("bb59")),W=Object(d["a"])(F,D,I,!1,null,"524bb342",null);"function"===typeof B["default"]&&Object(B["default"])(W);var H=W.exports,Q={name:"Projects",data:function(){return{projects:[{title:"snake",techs:"html, css, javascript, webpack",imgSrc:"snake.png",liveLink:"https://mczaba.github.io/Snake/",frontCode:"https://github.com/mczaba/Snake",backCode:null},{title:"tic tac toe",techs:"html, css, javascript",imgSrc:"tic-tac-toe.png",liveLink:"https://mczaba.github.io/tic-tac-toe/",frontCode:"https://github.com/mczaba/tic-tac-toe",backCode:null},{title:"weatherApp",techs:"VueJS",imgSrc:"weather.png",liveLink:"https://weather-app-mc.herokuapp.com/",frontCode:"https://github.com/mczaba/weatherApp",backCode:null},{title:"youtubeTogether",techs:"VueJS, express, websockets",imgSrc:"youtubeTogether.png",liveLink:"https://youtube-together.herokuapp.com/",frontCode:"https://github.com/mczaba/youtube-together",backCode:"https://github.com/mczaba/youtube-together-api"},{title:"Bulgneville",techs:"Nuxt, express, mySQL, Sequelize",imgSrc:"bulgneville.png",liveLink:"https://etude-cuny-morel.com"},{title:"Hesperides",techs:"Nuxt, express, mySQL, Sequelize, Vuetify",imgSrc:"hesperides.png",liveLink:"https://hesperides-cz.herokuapp.com/"}]}},components:{ProjectCard:H}},Y=Q,Z=(n("ac73"),n("84c0")),G=Object(d["a"])(Y,q,U,!1,null,"83f33508",null);"function"===typeof Z["default"]&&Object(Z["default"])(G);var K=G.exports,X=[{path:"/about",component:M},{path:"/projects",component:K},{path:"*",redirect:"/about"}],ee=n("2f62");o["a"].use(ee["a"]);var te=new ee["a"].Store({state:{langage:"fr"},getters:{langage:function(e){return e.langage}},mutations:{setLangage:function(e,t){e.langage=t}}}),ne=(n("4160"),n("d3b7"),n("466d"),n("159b"),n("ddb0"),n("a925"));function oe(){var e=n("49f8"),t={};return e.keys().forEach((function(n){var o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){var a=o[1];t[a]=e(n)}})),t}o["a"].use(ne["a"]);var ae=new ne["a"]({locale:"fr",fallbackLocale:"fr",messages:oe()});o["a"].config.productionTip=!1,o["a"].use(C["a"]);var ie=new C["a"]({routes:X,mode:"hash"});new o["a"]({router:ie,store:te,i18n:ae,render:function(e){return e(j)}}).$mount("#app");t["default"]=ie},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),a=n.n(o);a.a},"5cd3":function(e,t,n){"use strict";var o=n("2a3b"),a=n.n(o);t["default"]=a.a},"6ba8":function(e,t,n){},"6c61":function(e,t,n){},"713f":function(e,t,n){"use strict";var o=n("8050"),a=n.n(o);a.a},8050:function(e,t,n){},"84c0":function(e,t,n){"use strict";var o=n("0c79"),a=n.n(o);t["default"]=a.a},"902d":function(e,t,n){e.exports=n.p+"img/hesperides.0bce644d.png"},"975f":function(e,t,n){e.exports=n.p+"img/bulgneville.efceeb7a.png"},"9c0c":function(e,t,n){},ac73:function(e,t,n){"use strict";var o=n("6ba8"),a=n.n(o);a.a},b036:function(e,t,n){"use strict";var o=n("b75e"),a=n.n(o);a.a},b75e:function(e,t,n){},bb59:function(e,t,n){"use strict";var o=n("f7e4"),a=n.n(o);t["default"]=a.a},c0dd:function(e,t,n){"use strict";var o=n("0ff5"),a=n.n(o);t["default"]=a.a},cc1f:function(e,t,n){var o={"./bulgneville.png":"975f","./hesperides.png":"902d","./snake.png":"352e","./tic-tac-toe.png":"0d3b","./trader.png":"1307","./weather.png":"13ba","./youtubeTogether.png":"54a6"};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=i,e.exports=a,a.id="cc1f"},e6ea:function(e,t,n){"use strict";var o=n("6c61"),a=n.n(o);a.a},edd4:function(e){e.exports=JSON.parse('{"nav":{"home":"Home","portfolio":"Porfolio","skills":"skills"}}')},f693:function(e){e.exports=JSON.parse('{"nav":{"home":"Accueil","portfolio":"Projets","skills":"Compétences"}}')},f7e4:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"liveLink":"Voir ce projet","front":"Voir le code client","back":"Voir le code serveur"},"en":{"liveLink":"View this project","front":"View front end code","back":"View back end code"}}'),delete e.options._Ctor}}});
//# sourceMappingURL=app.829ea5f0.js.map