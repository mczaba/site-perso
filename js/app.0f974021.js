(function(e){function t(t){for(var n,r,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},a={app:0},i=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"010e":function(e,t,o){e.exports=o.p+"img/photoperso.982a4483.jpg"},"049a":function(e,t,o){},"0757":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"about":"A propos","portfolio":"Projets","skills":"CV"},"en":{"about":"About","portfolio":"Projects","skills":"Resume"}}'),delete e.options._Ctor}},"0775":function(e,t,o){"use strict";o("de83")},"0c79":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"Calculator":{"intro":"Une application de calculatrice avec possibilité de stocker les calculs sur un notepad.","description":"Application de calculatrice avec support pour les parentheses et tout type d\'opérations. Permet également de stocker les calculs souhaités dans un notepad à coté."},"Tic Tac Toe":{"intro":"Un jeu de morpion jouable dans le navigateur contre un autre joueur ou contre un ordinateur","description":"Choisissez le nom des 2 joueurs et si le 2eme joueur est humain pour lancer la partie. L\'ordinateur ne peut pas perdre la partie et est codé avec l\'algorithme minimax."},"To do list":{"intro":"Une application de gestion de tâches.","description":"Permet la création de plusieurs projets et de tâches rattachées à des projets. Un onglet permet de voir toutes les tâches quelques soit le projet, et les autres onglets toutes les tâches rattachées à un certain projet. Une tâche contient une dâte butoir, une importance et une description. Permet de trier les tâches par date ou ordre d\'importance."},"WeatherApp":{"intro":"Une application météo faite avec vueJS et l\'API OpenWeatherMap.","description":"Vous pouvez rechercher la ville que vous souhaitez et avoir la météo des 5 prochains jours par tranche de 3 heures. Permet de choisir entre un thème de couleur clair ou sombre."},"Bulgneville":{"intro":"Le site web de l\'étude notaire de bulgnéville.","description":"Site web professionnel avec un CMS permettant de poster des articles ou annonces immobilières. L\'utilisateur peut consulter les articles, annonces immobilières et informations sur l\'étude, envoyer des messages à l\'étude directement via le site, et utiliser un calculateur de frais de notaire ou d\'échéance de prêt immobilier."},"Hesperides":{"intro":"Application web pour un syndic de copropriété.","description":"Une application permettant de consulter et éditer une base de donnée sur les propriétaires, lots et locataires d\'une copropriété. Permet également de poster des documents (factures/devis) au format pdf et de modifier leur statut (traité ou à traiter). \\n\\nSystème d\'authentication complet avec 4 types de permissions (consultation de la DB, modification de la DB, poster des documents, consulter les documents). \\n\\nVous pouvez vous connecter avec les logs admin // admin et consulter la liste des comptes pour vous connecter avec d\'autres permissions. (le mot de passe est toujours le même que le login) \\n\\nNB: Le système de documents ne fonctionne pas sur cette version vitrine à cause des limitations d\'heroku."},"YoutubeTogether":{"intro":"Application web permettant de regarder des vidéos youtube en synchronisé avec ses amis.","description":"Créez ou rejoignez un salon en utilisant son nom et un pseudo avec lequel vous connecter. \\n\\nL\'hôte du salon peut décider si lui seul ou tout le monde peut interagir avec la vidéo. L\'hôte peut changer les droits à tout moment. Les personnes pouvant interragir avec la vidéo peuvent mettre en pause, changer le timer ou changer la vidéo. \\n\\nChaque salon dispose de son propre chat.\\n\\nL\'utilisateur peut rejoindre directement un salon ou voir la liste de tous les salons actuellement en ligne."}},"en":{"Calculator":{"intro":"Calculator app with a notepad to store some calculus.","description":"Calculator app which supports parentheses and all types of operators."},"Tic Tac Toe":{"intro":"A tic tac toe game playable in the browser against either a friend or the computer.","description":"Choose the name of both players and choose to play against the computer or another player then start the game. The computer is coded with the minimax algorithm and is unbeatable."},"To do list":{"intro":"A to do app.","description":"You can create multiple projects and multiple tasks binded to projects. One tab displays all of your tasks regardless of projects and the other tabs displays all tasks binded to a single projects. Tasks contains a description, a due date and an importance. You can sort tasks by due date or importance."},"WeatherApp":{"intro":"A weather app made with vueJS and the OpenWeatherMap API.","description":"You can search for the city you want and get the weather every 3 hours for the next 5 days. Features a dark and light color scheme that you can freely switch."},"Bulgneville":{"intro":"Bulgneville\'s notary office website.","description":"Professionnal website with a CMS that let you post articles and real estate announces. The user can view articles, real estate announces, and the office appointments and informations about the office, send messages to the office directly from the website, and use a calculator for notary costs and real estate loan."},"Hesperides":{"intro":"Web app made for a co-ownership buildings.","description":"An app made for consulting and editing a database about owners, tenants, and appartement. Also features posting and consulting pdf document and editing their status to either \'to do\' or \'done\'. \\n\\nComplete authentication system with 4 types of authorizations (editing accounts, editing the database, posting documents and consulting documents). \\n\\nLogin using the credentials admin // admin to view the list of other accounts with different authorizations you can log on. (password is always equal to login)\\n\\nNB: Due to limitations on heroku hosting, the document features is not working on this showcase version."},"YoutubeTogether":{"intro":"Web App made for watching youtube videos in sync with your friends.","description":"Join or create a room using a room name and a nickname you want to log with.\\n\\nThe room host can decide if everyone or only he can interract with the video. He can change the room rights anytime. People can interract with the video by setting it on pause, changing the timer or changing the video.\\n\\n Every room has its own chat.\\n\\nThe user can directly join a room or see a list of all rooms currently online."}}}'),delete e.options._Ctor}},"0d3b":function(e,t,o){e.exports=o.p+"img/tic-tac-toe.2345cef3.png"},"0ff5":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"title":"Développeur web full-stack"},"en":{"title":"Full-stack web developper"}}'),delete e.options._Ctor}},"103f":function(e,t,o){"use strict";o("d80c")},1243:function(e,t,o){"use strict";o("274a")},"12ec":function(e,t,o){},"13ba":function(e,t,o){e.exports=o.p+"img/weather.19375038.png"},"274a":function(e,t,o){},"2a3b":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"paragraphs":{"first":"Anciennement professeur de mathématiques j\'ai toujours eu un goût prononcé pour la programmation et la résolution de problèmes. J\'ai donc décidé de quitter l\'éducation pour poursuivre une carrière à plein temps dans le développement web.","second":"Je suis developpeur full-stack autodidacte et j\'aime créer des applications et sites web de toutes sortes. J\'apprécie particulièrement les technologies VueJS et Express.","third":"N\'hésitez pas à me contacter si vous avez un projet à me proposer ou que mes projets (j\'en ajoute régulièrement) vous intéressent."}},"en":{"paragraphs":{"first":"I\'m a former maths teacher who always had a taste for solving problems and computer programming. This is why I decided to quit education to pursue a full time career in web development.","second":"I\'m a self-taught full stack developer and I like to create websites and apps of all kinds. I like using VueJS and Express.","third":"Don\'t hesitate to contact me if you have a project you would like me to work on, or if my projects (adding more regularly) interests you."}}}'),delete e.options._Ctor}},"390c":function(e,t,o){"use strict";var n=o("0757"),a=o.n(n);t["default"]=a.a},"49f8":function(e,t,o){var n={"./en.json":"edd4","./fr.json":"f693"};function a(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="49f8"},"52d9":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("navbar"),o("transition",{attrs:{name:e.transition},on:{"before-enter":e.beforeEnter,"after-leave":e.afterLeave}},[o("router-view",{attrs:{id:"view"}})],1)],1)},i=[],r=(o("1276"),o("ac1f"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("nav",{attrs:{id:"navbar"}},[e._m(0),e.mobileView?e._e():o("div",{staticClass:"navigation"},[o("router-link",{staticClass:"link",attrs:{to:"/about","active-class":"active"}},[e._v(e._s(e.$t("about")))]),o("router-link",{staticClass:"link",attrs:{to:"/projects","active-class":"active"}},[e._v(e._s(e.$t("portfolio")))]),o("a",{attrs:{href:e.resumeLink,target:"_blank"}},[e._v(e._s(e.$t("skills")))])],1),o("langage-picker")],1),e.mobileView?o("nav",{attrs:{id:"mobileNav"}},[o("router-link",{staticClass:"link-bottom",attrs:{to:"/about","active-class":"active-bottom"}},[o("i",{staticClass:"fas fa-align-justify"}),o("span",[e._v(" "+e._s(e.$t("about"))+" ")])]),o("router-link",{staticClass:"link-bottom",attrs:{to:"/projects","active-class":"active-bottom"}},[o("i",{staticClass:"fas fa-desktop"}),o("span",[e._v(" "+e._s(e.$t("portfolio"))+" ")])]),o("a",{attrs:{href:e.resumeLink,target:"_blank"}},[o("i",{staticClass:"far fa-address-card"}),o("span",[e._v(" "+e._s(e.$t("skills"))+" ")])])],1):e._e()])}),s=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"contact"}},[o("a",{attrs:{href:"https://github.com/mczaba"}},[o("i",{staticClass:"fab fa-github"})]),o("a",{attrs:{href:"mailto:martin.czabadaj@gmail.com"}},[o("i",{staticClass:"fas fa-envelope"})])])}],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticClass:"langagePicker"},[o("span",{class:{activeLangage:"fr"===e.$i18n.locale},on:{click:e.goFR}},[e._v("FR")]),e._v(" | "),o("span",{class:{activeLangage:"en"===e.$i18n.locale},on:{click:e.goEN}},[e._v("EN")])])},u=[],l={name:"langagePicker",methods:{goFR:function(){this.$root.$i18n.locale="fr"},goEN:function(){this.$root.$i18n.locale="en"}}},p=l,d=(o("103f"),o("2877")),f=Object(d["a"])(p,c,u,!1,null,"134d593e",null),h=f.exports,m={name:"navbar",data:function(){return{windowWidth:window.innerWidth}},computed:{mobileView:function(){return this.windowWidth<600},resumeLink:function(){return"fr"===this.$root.$i18n.locale?"".concat("/","CV-FR.pdf"):"".concat("/","CV-EN.pdf")}},components:{langagePicker:h},mounted:function(){var e=this;window.addEventListener("resize",(function(){e.windowWidth=window.innerWidth}))}},g=m,v=(o("0775"),o("390c")),b=Object(d["a"])(g,r,s,!1,null,"4ca7d0e0",null);"function"===typeof v["default"]&&Object(v["default"])(b);var _=b.exports,w={name:"App",data:function(){return{transition:"slideRight"}},components:{navbar:_},methods:{beforeEnter:function(){"slideRight"===this.transition&&(document.documentElement.style.overflow="hidden",window.scrollTo(0,0))},afterLeave:function(){"slideRight"===this.transition&&(document.documentElement.style.overflow="visible")}},watch:{$route:function(e,t){var o=e.path.split("/")[e.path.split("/").length-1],n=t.path.split("/")[t.path.split("/").length-1];"about"===o&&"projects"===n?this.transition="slideRight":"projects"===o&&"about"===n&&(this.transition="slideLeft")}}},y=w,j=(o("5c0b"),Object(d["a"])(y,a,i,!1,null,null,null)),k=j.exports,C=o("8c4f"),S=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("header-comp"),o("div",{staticClass:"description"},[o("p",[e._v(" "+e._s(e.$t("paragraphs.first"))+" ")]),o("p",[e._v(" "+e._s(e.$t("paragraphs.second"))+" ")]),o("p",[e._v(" "+e._s(e.$t("paragraphs.third"))+" ")])])],1)},x=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("img",{attrs:{src:o("010e"),alt:""}}),n("div",[n("h2",[e._v("Martin Czabadaj")]),n("p",[e._v(e._s(e.$t("title")))])]),n("div",{staticClass:"tagsContainer"},e._l(e.tags,(function(t){return n("span",{key:t,staticClass:"tag"},[e._v(e._s(t))])})),0)])},T=[],O={name:"Header",data:function(){return{tags:["Javascript","TypeScript","HTML","CSS","VueJS","NuxtJS","React","NodeJS","Express","MySQL"]}}},$=O,E=(o("867b"),o("c0dd")),z=Object(d["a"])($,L,T,!1,null,"7f9d7b88",null);"function"===typeof E["default"]&&Object(E["default"])(z);var P=z.exports,A={name:"About",components:{headerComp:P}},J=A,N=(o("8746"),o("5cd3")),V=Object(d["a"])(J,S,x,!1,null,"0adfe7c2",null);"function"===typeof N["default"]&&Object(N["default"])(V);var M=V.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"portfolio"},[o("div",{staticClass:"cardsContainer"},e._l(e.projects,(function(t){return o("project-card",{key:t.title,attrs:{project:t}},[t.warning?o("template",{slot:"warning"},[o("p",{staticClass:"warning"},[e._v(" "+e._s(e.$t(t.title+".warning"))+" ")])]):e._e(),o("template",{slot:"intro"},[o("p",[e._v(e._s(e.$t(t.title+".intro")))])]),o("p",[e._v(e._s(e.$t(t.title+".description")))])],2)})),1)])},U=[],W=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"card"},[o("img",{attrs:{src:e.imageURL(),alt:""}}),o("div",{staticClass:"header"},[o("h2",[e._v(e._s(e.project.title))]),o("p",[o("b",[e._v("Techs : ")]),e._v(e._s(e.project.techs))])]),o("div",{staticClass:"text"},[e._t("intro"),e._t("default"),e.project.warning?e._t("warning"):e._e()],2),o("div",{staticClass:"links"},[o("a",{attrs:{href:e.project.liveLink,target:"_blank"}},[e._v(e._s(e.$t("liveLink")))]),e.project.code?o("a",{attrs:{href:e.project.code,target:"_blank"}},[e._v(e._s(e.$t("code")))]):e._e()])])},R=[],H={name:"projectCard",props:["project"],methods:{imageURL:function(){return o("cc1f")("./".concat(this.project.imgSrc))}}},Y=H,D=(o("1243"),o("bb59")),B=Object(d["a"])(Y,W,R,!1,null,"73195db0",null);"function"===typeof D["default"]&&Object(D["default"])(B);var F=B.exports,I={name:"Projects",data:function(){return{projects:[{title:"YoutubeTogether",techs:"Typescript, Nuxt, Express, Socket.io",imgSrc:"YoutubeTogether.png",liveLink:"https://youtube-together-v2.herokuapp.com",code:"https://github.com/mczaba/YoutubeTogetherV2"},{title:"Hesperides",techs:"Nuxt, Express, mySQL, Sequelize, Vuetify",imgSrc:"hesperides.png",liveLink:"https://hesperides-cz.herokuapp.com/",code:"https://github.com/mczaba/hesperides"},{title:"Bulgneville",techs:"Nuxt, Express, mySQL, Sequelize",imgSrc:"bulgneville.png",liveLink:"https://etude-cuny-morel.com"},{title:"WeatherApp",techs:"VueJS",imgSrc:"weather.png",liveLink:"https://weather-app-mc.herokuapp.com/",code:"https://github.com/mczaba/weatherApp"},{title:"Calculator",techs:"HTML, CSS, JavaScript",imgSrc:"calculator.png",liveLink:"https://mczaba.github.io/calculator/",code:"https://github.com/mczaba/calculator"},{title:"Tic Tac Toe",techs:"HTML, CSS, JavaScript",imgSrc:"tic-tac-toe.png",liveLink:"https://mczaba.github.io/tic-tac-toe/",code:"https://github.com/mczaba/tic-tac-toe"},{title:"To do list",techs:"HTML, CSS, JavaScript, Webpack",imgSrc:"todo.png",liveLink:"https://mczaba.github.io/to-do-list/",code:"https://github.com/mczaba/to-do-list"}]}},components:{ProjectCard:F}},Q=I,Z=(o("8497"),o("84c0")),G=Object(d["a"])(Q,q,U,!1,null,"dddc9476",null);"function"===typeof Z["default"]&&Object(Z["default"])(G);var K=G.exports,X=[{path:"/about",component:M},{path:"/projects",component:K},{path:"*",redirect:"/about"}],ee=o("2f62");n["a"].use(ee["a"]);var te=new ee["a"].Store({state:{langage:"fr"},getters:{langage:function(e){return e.langage}},mutations:{setLangage:function(e,t){e.langage=t}}}),oe=(o("159b"),o("d3b7"),o("ddb0"),o("466d"),o("a925"));function ne(){var e=o("49f8"),t={};return e.keys().forEach((function(o){var n=o.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];t[a]=e(o)}})),t}n["a"].use(oe["a"]);var ae=new oe["a"]({locale:"fr",fallbackLocale:"fr",messages:ne()});n["a"].config.productionTip=!1,n["a"].use(C["a"]);var ie=new C["a"]({routes:X,mode:"hash"});new n["a"]({router:ie,store:te,i18n:ae,render:function(e){return e(k)}}).$mount("#app");t["default"]=ie},"58a3":function(e,t,o){e.exports=o.p+"img/calculator.25be8c3f.png"},"5c0b":function(e,t,o){"use strict";o("049a")},"5cd3":function(e,t,o){"use strict";var n=o("2a3b"),a=o.n(n);t["default"]=a.a},"69b7":function(e,t,o){e.exports=o.p+"img/YoutubeTogether.3e0b332d.png"},8497:function(e,t,o){"use strict";o("ea42")},"84c0":function(e,t,o){"use strict";var n=o("0c79"),a=o.n(n);t["default"]=a.a},"867b":function(e,t,o){"use strict";o("52d9")},8746:function(e,t,o){"use strict";o("12ec")},"902d":function(e,t,o){e.exports=o.p+"img/hesperides.0bce644d.png"},"975f":function(e,t,o){e.exports=o.p+"img/bulgneville.efceeb7a.png"},bb59:function(e,t,o){"use strict";var n=o("f7e4"),a=o.n(n);t["default"]=a.a},c0dd:function(e,t,o){"use strict";var n=o("0ff5"),a=o.n(n);t["default"]=a.a},c0e5:function(e,t,o){e.exports=o.p+"img/todo.4500eeca.png"},cc1f:function(e,t,o){var n={"./YoutubeTogether.png":"69b7","./bulgneville.png":"975f","./calculator.png":"58a3","./hesperides.png":"902d","./tic-tac-toe.png":"0d3b","./todo.png":"c0e5","./weather.png":"13ba"};function a(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="cc1f"},d80c:function(e,t,o){},de83:function(e,t,o){},ea42:function(e,t,o){},edd4:function(e){e.exports=JSON.parse('{"nav":{"home":"Home","portfolio":"Porfolio","skills":"skills"}}')},f693:function(e){e.exports=JSON.parse('{"nav":{"home":"Accueil","portfolio":"Projets","skills":"Compétences"}}')},f7e4:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fr":{"liveLink":"Voir ce projet","code":"Voir le code"},"en":{"liveLink":"View this project","code":"View code"}}'),delete e.options._Ctor}}});
//# sourceMappingURL=app.0f974021.js.map