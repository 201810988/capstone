(this.webpackJsonpcapstone=this.webpackJsonpcapstone||[]).push([[0],{24:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),a=c(17),s=c.n(a),i=c(8),r=(c(24),c(7)),l=c(0),u=null;function d(e,t){var c=Object.values(e.data[t].skins).map((function(e){return{num:e.num,name:e.name}})),n=Math.floor(Math.random()*c.length);!function(e,t,c){var n=document.querySelector("#login_back");n.src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(e,"_").concat(t,".jpg"),n.title="default"===c?e:c,n.alt=e,n.style.opacity=1}(t,c[n].num,c[n].name)}var h=function(e){Object(n.useEffect)((function(){u?fetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/".concat(u,".json")).then((function(e){return e.json()})).then((function(e){d(e,u)})):fetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion.json").then((function(e){return e.json()})).then((function(e){var t=function(e){var t=function(e){return Object.values(e.data).map((function(e){return e.name}))}(e),c=Math.floor(Math.random()*t.length);return t[c]}(e);console.log(t),u=t,fetch("https://ddragon.leagueoflegends.com/cdn/11.16.1/data/en_US/champion/".concat(u,".json")).then((function(e){return e.json()})).then((function(e){d(e,u)}))}))}),[]);var t=Object(n.useState)(""),c=Object(i.a)(t,2),o=c[0],a=c[1];return Object(l.jsx)("section",{id:"login",children:Object(l.jsx)("div",{className:"login_container",children:Object(l.jsxs)("div",{className:"login_user_signinBx",children:[Object(l.jsx)("div",{className:"login_imgBx",children:Object(l.jsx)("img",{id:"login_back",alt:""})}),Object(l.jsx)("div",{className:"login_formBx",children:Object(l.jsxs)("form",{children:[Object(l.jsx)("h2",{children:"Start"}),Object(l.jsx)("input",{type:"text",placeholder:"Username",onChange:function(e){return a(e.target.value)}}),Object(l.jsx)(r.b,{to:"/overview/".concat(o),children:Object(l.jsx)("input",{type:"submit",value:"Search",onClick:function(){e.setName(o)}})}),Object(l.jsxs)("p",{className:"login_p",children:["\uc0c1\uba85\ub300\ud559\uad50 \ucea1\uc2a4\ud1a4\ub514\uc790\uc778 2021"," ",Object(l.jsx)("a",{href:"https://github.com/YUNJUSEOK/CapstoneDesign",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})})]})})})},j=c(19),m=c.n(j),b=c(2),g=(c(37),null),f=null,p=null,O=null,v=null,x=function(e){if(console.log("\ud654\uba74 \uc804\ud658 \ubc1c\ub3d9!!"),v)if(e.matches){var t="url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/".concat(v,"_0.jpg)"),c=document.querySelector(".overview").style;c.backgroundImage="radial-gradient(transparent 1%, black 99%), ".concat(t),c.backgroundSize="cover",c.backgroundRepeat="no-repeat",c.backgroundPosition="top"}else{var n="url(https://ddragon.leagueoflegends.com/cdn/img/champion/loading/".concat(v,"_0.jpg)"),o=document.querySelector(".overview").style;o.backgroundImage="radial-gradient(transparent 1%, black 99%), ".concat(n),o.backgroundSize="cover",o.backgroundRepeat="no-repeat",o.backgroundPosition="top"}},_=window.matchMedia("(orientation: landscape)");_.addEventListener("change",x);var N=function(e,t,c,n,o,a){c?(console.log("2. \ub9ac\uadf8 \uc7ac\ud65c\uc6a9"),L(M(f)[0]),k(e,g.puuid,n,o)):fetch("https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/".concat(t,"?api_key=RGAPI-c7e0648c-c291-47e7-8374-098ba716c8dc")).then((function(e){return e.json()})).then((function(t){L(M(f=t)[0]),k(e,g.puuid,n,o)})).catch((function(e){console.error(e),a(!0)}))},k=function(e,t,c,n,o){c?(console.log("3. \uc804\uc5ed match \uc7ac\ud65c\uc6a9"),y(e,e.getMatch()[0],c,n)):fetch("https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/".concat(t,"/ids?start=0&count=100&api_key=RGAPI-c7e0648c-c291-47e7-8374-098ba716c8dc")).then((function(e){return e.json()})).then((function(t){e.setMatch(t),y(e,e.getMatch()[0],c,n)})).catch((function(e){console.error(e),o(!0)}))},y=function(e,t,c,n){c?(console.log("4. \uc804\uc5ed matchList \uc7ac\ud65c\uc6a9"),C(g.name,e.matchList[0])):fetch("https://asia.api.riotgames.com/lol/match/v5/matches/".concat(t,"?api_key=RGAPI-c7e0648c-c291-47e7-8374-098ba716c8dc")).then((function(e){return e.json()})).then((function(t){e.matchList.push(t),C(g.name,e.matchList[0])})).catch((function(e){console.error(e),n(!0)}))};function S(e){document.querySelector("#profile_icon").src="https://ddragon.leagueoflegends.com/cdn/11.16.1/img/profileicon/".concat(e,".png")}function w(e){document.querySelector(".summoner_level").textContent=e}function L(e){var t=document.querySelector(".league");t.childNodes[0].textContent=e.queueType;var c=e.tier[0]+e.tier.slice(1,e.length).toLowerCase();p?(console.log("2_1. \ud2f0\uc5b4 \uc5e0\ube14\ub7fc zip \uc7ac\ud65c\uc6a9"),p.file("Emblem_".concat(c,".png")).async("blob").then((function(e){t.childNodes[1].src=window.URL.createObjectURL(e)}),(function(e){console.log(e)}))):fetch("https://static.developer.riotgames.com/docs/lol/ranked-emblems.zip").then((function(e){return 200===e.status||0===e.status?Promise.resolve(e.blob()):Promise.reject(new Error(e.statusText))})).then(m.a.loadAsync).then((function(e){return p=e,e.file("Emblem_".concat(c,".png")).async("blob")})).then((function(e){t.childNodes[1].src=window.URL.createObjectURL(e)}),(function(e){console.log(e)})),t.childNodes[2].textContent=e.rank,t.childNodes[3].textContent=e.leaguePoints,t.childNodes[4].textContent=e.wins,t.childNodes[5].textContent=e.losses}function M(e){console.log("2_0. \ud574\ub2f9 \uc18c\ud658\uc0ac \ub9ac\uadf8 \uc815\ubcf4 \uac1c\uc218".concat(e.length));var t=e.filter((function(e){return"RANKED_SOLO_5x5"===e.queueType}));return 0===t.legth?e:t}function C(e,t){console.log("5. ".concat(e,"\uc18c\ud658\uc0ac\uc758 \ubc30\uacbd\uc744 \uc9c0\uc815\uc911.."));var c=t.info.participants.filter((function(t){return t.summonerName===e}))[0].championName;v=c,x(_)}var I=function(e){var t=Object(b.f)().name,c=Object(n.useState)(!1),o=Object(i.a)(c,2),a=o[0],s=o[1];return Object(n.useEffect)((function(){a||(O&&O===t?console.log("0. \uc774\uc804\uacfc \ub3d9\uc77c\ud55c \uc18c\ud658\uc0ac \uc815\ubcf4."):O&&O!==t?(console.log("0. \ub2e4\ub978 \uc18c\ud658\uc0ac \uc815\ubcf4 \uc694\uccad."),g=null,f=null,e.setMatch(null),e.matchList.splice(0,e.matchList.length)):console.log("0. \ucd08\uae30 \uc18c\ud658\uc0ac \uc815\ubcf4 \uc694\uccad."),function(e,t,c,n,o,a,s){c?(console.log("1. \uc11c\uba38\ub108 \uc7ac\ud65c\uc6a9"),S(g.profileIconId),w(g.summonerLevel),N(e,g.id,n,o,a)):fetch("https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/".concat(t,"?api_key=RGAPI-c7e0648c-c291-47e7-8374-098ba716c8dc")).then((function(e){return e.json()})).then((function(t){S((g=t).profileIconId),w(g.summonerLevel),N(e,g.id,n,o,a)})).catch((function(e){console.error(e),s(!0)}))}(e,t,g,f,e.getMatch(),0===e.matchList.length,s),O=t)}),[t,e,a]),a?Object(l.jsxs)("div",{id:"overview",children:["\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4!",Object(l.jsx)("img",{width:"10%",src:"https://pa1.narvii.com/6291/4f5b69927ae1d6c2002983b144237042d395b360_hq.gif"})]}):Object(l.jsxs)("div",{className:"overview",children:[Object(l.jsxs)("div",{className:"summoner",children:[Object(l.jsx)("img",{id:"profile_icon",src:"",alt:""}),Object(l.jsx)("div",{className:"summoner_name",children:t}),Object(l.jsx)("div",{className:"summoner_level"})]}),Object(l.jsxs)("div",{className:"league",children:[Object(l.jsx)("div",{className:"league_queueType"}),Object(l.jsx)("img",{className:"league_tier",src:"",alt:""}),Object(l.jsx)("div",{className:"league_rank"}),Object(l.jsx)("div",{className:"league_point"}),Object(l.jsx)("div",{className:"league_win"}),Object(l.jsx)("div",{className:"league_lose"})]})]})};c(38);var R=function(e){var t=Object(b.f)().name;return Object(l.jsxs)("div",{className:"match",children:[Object(l.jsx)("h2",{children:"Match"}),"Match...",Object(l.jsx)("div",{children:t})]})};var q=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Statistics"}),"Statistics..."]})};c(39);var U=function(e){var t=Object(n.useState)(!1),c=Object(i.a)(t,2),o=c[0],a=c[1];return Object(l.jsxs)("header",{className:"nav".concat(o?" open":""),children:[Object(l.jsx)(r.c,{exact:!0,to:"/",className:"Login",children:"Login"}),Object(l.jsx)("div",{className:"menu".concat(o?" arrow":""),onClick:function(e){a(!o)}}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/overview/".concat(e.name),children:"Overview"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/match/".concat(e.name),children:"Match"})}),Object(l.jsx)("li",{children:Object(l.jsx)(r.c,{to:"/stat",children:"Statistics"})})]})}),Object(l.jsx)("div",{className:"clearfix"})]})},E=(c(40),null),P=function(e){E=e},A=function(){return E},G=[];function z(e){return Object(l.jsx)("section",{id:"back",children:Object(l.jsxs)("div",{className:"back_container",children:[e.c1,e.c2]})})}var B=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],o=t[1];return Object(l.jsx)(r.a,{basename:"/capstone",children:Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(b.c,{children:[Object(l.jsx)(b.a,{path:"/overview/:name",children:Object(l.jsx)(z,{c1:Object(l.jsx)(U,{name:c}),c2:Object(l.jsx)(I,{setMatch:P,getMatch:A,matchList:G})})}),Object(l.jsx)(b.a,{path:"/match/:name",children:Object(l.jsx)(z,{c1:Object(l.jsx)(U,{name:c}),c2:Object(l.jsx)(R,{getMatch:A,matchList:G})})}),Object(l.jsx)(b.a,{path:"/stat",children:Object(l.jsx)(z,{c1:Object(l.jsx)(U,{name:c}),c2:Object(l.jsx)(q,{})})}),Object(l.jsx)(b.a,{path:"/",children:Object(l.jsx)(h,{setName:o})})]})})})};s.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.b08c9e76.chunk.js.map