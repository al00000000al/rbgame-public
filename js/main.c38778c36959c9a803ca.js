(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+PwJ":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("pTa+");function a(){Object(i.a)(),e(".category-btn").removeClass("active"),e("#exchangeCategory").addClass("active")}}).call(this,n("EVdn"))},"05Sm":function(e,t,n){"use strict";(function(e){function i(){/iPhone|iPod/.test(navigator.platform)&&(e(".header").css("margin-top","50px"),e(".menu").css("margin-bottom","20px"),e("body").append("<div style='background:#fff;position:fixed;top:0;width:100%;height:50px;z-index:3;'></div>"));let t=/iPhone/.test(navigator.userAgent)&&!window.MSStream,n=window.screen.width/window.screen.height;t&&"0.462"===n.toFixed(3)&&e("body").append("<div style='background:#fff;position:fixed;bottom:0;width:100%;height:30px;z-index:3;'></div>")}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},"0n5W":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("iRHI");function a(e){Object(i.a)(e.response[0].sign)}},"1kD+":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("fb6q"),a=n("yUHS"),o=n("MMnf");function s(){let t=parseInt(e("#sellPrice").val()),n=e("#sellSlave"),s=n.text(),r="sell"+window.Card.user_id+t;e.when(n.text("Продажа")).then((function(){e.when(Object(i.b)(r)).then((function(e){n.text(s),Object(i.a)("users.sell",{pow:e.pow,pow_hash:e.pow_hash,user_id:window.Card.user_id,price:t},(function(){Object(a.c)(),Object(o.a)()}))}))}))}}).call(this,n("EVdn"))},"40tA":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("We0c"),a=n("Qnyu");function o(){window.State.isMastersPage&&(!window.User.slaves||window.User.slaves.length<i.e)&&a.a.show("Как стать боярином?",!1,"Владейте "+i.e+" рабами и будьте свободными!")}},"4FA/":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("We0c"),a=n("yUHS");function o(t){e(".usercard").fadeIn(i.d),e(".usercard-back").fadeIn(i.d);let n=t.response[0];switch(e("#userCardAvatar").attr("src",n.photo_100).off("click").on("click",(function(){openVK(n.id)})),e("#userCardName").text(window.Users[n.id].name).off("click").on("click",(function(){openVK(n.id)})),e("#userCardStatus").text(window.Card.slaves_count>=i.e&&0===window.Card.owner_id?"Боярин":"Раб"),e("#userCardProfit").text("+"+window.Card.profit_per_hour.toLocaleString()+"/чаc"),e("#sellPrice").val(""),e(".friends").hide(),window.Card.type){case"market":Object(a.a)(n);break;case"slaves":Object(a.b)()}}}).call(this,n("EVdn"))},"7PPj":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return L}));var i=n("wF54"),a=n("aID/"),o=n("gFxh"),s=n("AQsa"),r=n("d+BO"),c=n("yUHS"),d=n("XjdO"),u=n("o+IS"),l=n("40tA"),w=n("tpcv"),f=n("+PwJ"),h=n("QtQV"),p=n("YXLc"),v=n("eyMk"),b=n("sBLP"),m=n("Eski"),_=n("1kD+"),g=n("QUp/"),k=n("uNXP"),C=n("x1ye"),x=n("e3VF"),S=n("NOIA"),E=n("Zikq"),O=n("8OfH"),P=n("tPbt"),U=n("MvrJ"),y=n("AX0R"),j=n("QjBP"),V=n("hFvm"),F=n("eQKb"),A=n("Qnyu");function L(){e("#buyOut").on("click",i.a),e("#refresh_page").on("click",a.a),e(".shareBtn").on("click",o.a),e(".buyDonate").on("click",s.a),e(".inviteLink").on("click",r.a),e("#topSlaves").on("click",d.a),e("#topMasters").on("click",u.a),e(".statBtn").on("click",l.a),e("#marketCategory").on("click",w.a),e("#exchangeCategory").on("click",f.a),e("#friendsCategory").on("click",h.a),e(".master-btn").on("click",p.a),e(".buy-btn").on("click",v.a),e("#slaveUpgrade").on("click",v.a),e("#sellYourSlaves").on("click",b.a),e("#marketUpdate").on("click",m.a),e("#sellSlave").on("click",_.a),e("#cancelSellSlave").on("click",g.a),e("#btnShieldActivate").on("click",k.a),e("#btnGetBonus").on("click",C.a),e("#searchSlaves").on("input",x.a),e("#slavesFilter").on("click",S.a),e("#exchangeFilters").on("click",E.a),e("#filterPrice").on("click",O.a),e("#filterPriceExchange").on("click",P.a),e("#filterProfit").on("click",U.a),e("#filterProfitExchange").on("click",y.a),e("#acceptFilters").on("click",j.a),e("#acceptFiltersExchange").on("click",V.a),e(".usercard-back").on("click",c.c),e(".popup-button").on("click",A.a.close),e(".popup-back").on("click",A.a.close),e(".menu-button").on("click",(function(){Object(F.a)(e(this))}))}}).call(this,n("EVdn"))},"8OfH":function(e,t,n){"use strict";(function(e){function i(){e("#filterPrice").removeClass("active"),e("#filterPrice").addClass("active"),e("#filterProfit").removeClass("active"),window.State.sortPrice=!0,window.State.filterPrice?(window.State.filterPrice=!1,e("#filterPrice").html('Цена на рынке <span class="icon-down"></span>')):(window.State.filterPrice=!0,e("#filterPrice").html('Цена на рынке <span class="icon-up"></span>'))}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},AQsa:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("z4yC");function o(){Object(i.a)("game.getDonateLink",{},(function(e){Object(a.a)(e.link)}))}},AX0R:function(e,t,n){"use strict";(function(e){function i(){e("#filterProfitExchange").removeClass("active"),e("#filterProfitExchange").addClass("active"),e("#filterPriceExchange").removeClass("active"),window.State.sortPriceExchange=!1,window.State.filterProfitExchange?(window.State.filterProfitExchange=!1,e("#filterProfitExchange").html('Доход/час <span class="icon-down"></span>')):(window.State.filterProfitExchange=!0,e("#filterProfitExchange").html('Доход/час <span class="icon-up"></span>'))}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},CaNs:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("1QEB"),a=n.n(i);function o(){e(".app_title").text("Покупка"),e(".buyDonate").show(),e(".statBtn").hide(),e(".slave-item").remove(),e(".market-list").html("").addClass("friends-list"),e("#marketUpdate").hide(),e("#exchangeFilters").hide(),e("#sellYourSlaves").hide(),e("#inviteFriendsBtn").show(),e("#inviteFriendsCard").show(),e("#noFriends").show(),e("#acceptFiltersExchange").hide(),e(".search-filters").hide(),window.State.isExchange=!1,window.State.isFriends=!0,window.Market=[],a.a.send("VKWebAppCallAPIMethod",{method:"friends.getAppUsers",request_id:"friends",params:{v:"5.130",access_token:window.User.access_token}})}}).call(this,n("EVdn"))},Eski:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("fb6q"),a=n("VZz0"),o=n("yv5w");function s(){let t=e("#marketUpdate"),n=t.text();e.when(t.text("Обновление списка")).then((function(){e.when(Object(i.b)("refreshRandom")).then((function(e){t.text(n),Object(i.a)("market.refreshRandom",{pow:e.pow,pow_hash:e.pow_hash},(function(){Object(a.a)(window.User.balance-20),Object(o.a)()}))}))}))}}).call(this,n("EVdn"))},LIia:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return s}));var i=n("M0uz");function a(e){return`<div class="slave-item slave${e.user_id}" onclick="window.userCardShow(${e.user_id}, 'slaves');">\n                    <div class="slave-info">\n                        <img src="${window.Users[e.user_id].photo}" alt="ava" class="avatar-small">\n                        <div class="slave-info-text">\n                            <div class="title${e.is_on_market?"-gray":""}">${window.Users[e.user_id].name}</div>\n                            <div class="income${e.is_on_market?"-gray":""}">+${e.profit_per_hour.toLocaleString()}/час</div>\n                        </div>\n                    </div>\n                    <div class="slave-operations">\n                        <div class="slave-money">\n                            <div class="${e.is_on_market?"time":"slave-upgrade-icon"}"></div>\n                            <div class="income${e.is_on_market?"-gray":""}">\n                            +${e.is_on_market?e.price_exchange.toLocaleString():Object(i.c)(e.profit_per_hour).toLocaleString()+"/час"}</div>\n                        </div>\n                    </div>\n                </div>`}function o(e,t){return`<div class="slave-item">\n                <div class="slave-info">\n                    <div class="slave-position">${t}</div>\n                    <img src="${window.Users[e.user_id].photo}" alt="ava" class="avatar-small" onclick="window.openVK(${e.user_id});">\n                    <div class="slave-info-text">\n                        <div class="title" onclick="window.openVK(${e.user_id});">${window.Users[e.user_id].name}</div>\n                        <div class="income">${e.balance.toLocaleString()}<i class="money-icon money-icon-stat"></i>  ${e.slaves_count} ${Object(i.a)(e.slaves_count,["раб","раба","рабов"])}</div>\n                    </div>\n                </div>\n            </div>`}function s(e){return`<div class="slave-item slave${e.user_id}" onclick="window.userCardShow(${e.user_id});">\n                <div class="slave-info">\n                    <img src="${window.Users[e.user_id].photo}" alt="ava" class="avatar-small">\n                    <div class="slave-info-text">\n                        <div class="title">${window.Users[e.user_id].name}</div>\n                        <div class="income">+${window.State.isExchange?e.profit_per_hour.toLocaleString():Object(i.c)(e.profit_per_hour).toLocaleString()}/час</div>\n                    </div>\n                </div>\n                <div class="slave-operations">\n                    <div class="slave-money">\n                        <div class="money-icon-big"></div>\n                        <div class="income">${e.price.toLocaleString()}</div>\n                    </div>\n                </div>\n            </div>`}},M0uz:function(e,t,n){"use strict";function i(e,t){return t[e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2]}function a(e){return Math.round(1.5*e)}function o(e,t){return e.substring(0,1)+". "+t}n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o}))},MMnf:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("fb6q"),a=n("VZz0"),o=n("mdQ4");function s(){e(".app_title").text("Я твой раб"),e(".buyDonate").show(),e(".statBtn").hide(),e(".search-filters").hide(),e("#slavesFilter").show(),e("#acceptFilters").hide();let t=window.State.sortPrice?"price_exchange":"profit_per_hour",n=window.State.sortPrice?window.State.filterPrice?"DESC":"ASC":window.State.filterProfit?"DESC":"ASC";Object(i.a)("game.start",{ref:window.Ref,sort:t,order:n},(function(t){if(Object(a.a)(t.balance),e(".inviteLink").text(t.ref),e("#slavesCounter").text("Мои рабы ("+t.slaves_count+"):"),e("#buyOut").text("Выкупиться ("+t.buy_out.toLocaleString()+")"),e("#slavesIncome").text("+"+t.slaves_per_hour.toLocaleString()+"/час"),window.User.ref=t.ref,window.User.balance=t.balance,window.User.buyOut=t.buy_out,window.User.shieldTo=t.shield_to,window.User.shieldCount=t.shield_count,window.User.isShieldActive=t.is_shield_active,window.User.slavesCount=t.slaves_count,window.User.DIFFICULTY_HASH=t.hash_difficulty,e("#btnShieldActivate").text("Активировать ("+window.User.shieldCount+")"),e("#shieldTitle").text(window.User.isShieldActive?"Щит (активен):":"Щит (не активен):"),e("#shieldTimer").text(t.shield_to),t.owner_id>0||t.slaves.length>0){let e=[];t.owner_id>0?(window.User.owner_id=parseInt(t.owner_id),window.Users[t.owner_id]||e.push(t.owner_id)):window.User.owner_id=0,t.slaves.length>0&&(window.User.slaves=[],window.User.slaves.push(t.slaves),t.slaves.forEach((function(t){window.Users[t.user_id]||e.push(t.user_id)}))),Object(o.d)(e,"slaves")}}))}}).call(this,n("EVdn"))},MvrJ:function(e,t,n){"use strict";(function(e){function i(){e("#filterProfit").removeClass("active"),e("#filterProfit").addClass("active"),e("#filterPrice").removeClass("active"),window.State.sortPrice=!1,window.State.filterProfit?(window.State.filterProfit=!1,e("#filterProfit").html('Доход/час <span class="icon-down"></span>')):(window.State.filterProfit=!0,e("#filterProfit").html('Доход/час <span class="icon-up"></span>'))}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},NOIA:function(e,t,n){"use strict";(function(e){function i(){e(".search-filters").show(),e("#slavesFilter").hide(),e("#acceptFilters").show()}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},"QUp/":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("fb6q"),a=n("yUHS"),o=n("MMnf");function s(){let t=e("#sellSlave"),n=t.text(),s="cancelSell"+window.Card.user_id;e.when(t.text("Отменяем")).then((function(){e.when(Object(i.b)(s)).then((function(e){t.text(n),Object(i.a)("users.cancelSell",{pow:e.pow,pow_hash:e.pow_hash,user_id:window.Card.user_id},(function(){Object(a.c)(),Object(o.a)()}))}))}))}}).call(this,n("EVdn"))},QjBP:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("MMnf");function a(){Object(i.a)()}},Qnyu:function(e,t,n){"use strict";(function(e){let n={close:function(){return e(".popup").fadeOut(100),e(".popup-back").fadeOut(100),!1},show:function(t,n=!1,i="",a=!1){this.setText(t,i,a);let o=e(".popup");return o.removeClass("popup-error"),n&&o.addClass("popup-error"),o.fadeIn(100),e(".popup-back").fadeIn(100),!1},setText:function(t,n="",i=!1){return i?(e(".popup-text").html(t),e(".popup-text-small").html(n)):(e(".popup-text").text(t),e(".popup-text-small").html(n)),!1}};t.a=n}).call(this,n("EVdn"))},QtQV:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("CaNs");function a(){Object(i.a)(),e(".category-btn").removeClass("active"),e("#friendsCategory").addClass("active")}}).call(this,n("EVdn"))},VZz0:function(e,t,n){"use strict";(function(e){function i(t){e("#userBalance").html(t.toLocaleString()+'<i class="money-icon"></i>')}function a(){e(".username").text(window.User.name).off("click").on("click",(function(){openVK(window.User.user_id)})),e(".your-avatar").attr("src",window.User.photo).off("click").on("click",(function(){openVK(window.User.user_id)}))}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}))}).call(this,n("EVdn"))},We0c:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return r})),n.d(t,"f",(function(){return c}));let i,a;i="https://rb-api-prod.trainzland.ru/method/",a=7812366;const o=1,s=100,r=100,c=203889646},XjdO:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("so3W");function a(){Object(i.a)(),e(".category-btn").removeClass("active"),e("#topSlaves").addClass("active")}}).call(this,n("EVdn"))},YXLc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n("yUHS"),a=n("Qnyu"),o=n("We0c");function s(){Object(i.c)(),a.a.show("Как купить боярина?",!1,"Владейте "+o.e+" рабами и будьте свободными!")}},Z9XL:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("mdQ4");function o(){window.State.isMastersPage=!0,e(".app_title").text("Рейтинг"),e(".buyDonate").hide(),e(".statBtn").show(),e(".stat-list").html(""),e(".slave-item").remove(),window.Top=[],Object(i.a)("top.masters",{},(function(t){e(".stat-position").text(null!=t.position?t.position:"Вы не боярин"),Object(a.c)(t.masters)}))}}).call(this,n("EVdn"))},Zikq:function(e,t,n){"use strict";(function(e){function i(){e(".search-filters").show(),e("#slavesFilterExchange").hide(),e("#acceptFiltersExchange").show(),e("#exchangeFilters").hide()}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},"aID/":function(e,t,n){"use strict";function i(){window.location.hash="#u",window.location.reload()}n.d(t,"a",(function(){return i}))},"d+BO":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("1QEB"),a=n.n(i);function o(){a.a.send("VKWebAppCopyText",{text:e(".inviteLink").first().text()})}}).call(this,n("EVdn"))},e3VF:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("LIia");function a(){let t=e("#searchSlaves").val();if(window.User.slaves)if(e("#noSlaves").hide(),e("#slavesHelp").show(),e(".slave-item").remove(),t.length>0){let o=(n=window.User.slaves[0],a=(a=t).toLowerCase(),Object.values(n).filter((function(e){if(-1!==(e.fullname+"").indexOf(a))return e})));o?o.forEach((function(t){e(".slaves-list").append(Object(i.a)(t))})):(e("#noSlaves").show(),e("#slavesHelp").hide())}else window.User.slaves[0].forEach((function(t){e(".slaves-list").append(Object(i.a)(t))}));else e("#noSlaves").show(),e("#slavesHelp").hide();var n,a}}).call(this,n("EVdn"))},e6Wu:function(e,t,n){"use strict";n.r(t),function(e){n("SYky");var t=n("1QEB"),i=n.n(t),a=n("05Sm"),o=(n("fC69"),n("We0c")),s=n("yUHS"),r=n("z4yC"),c=n("7PPj"),d=(n("hZTp"),n("mdQ4"));window.userCardShow=s.d,window.openLink=r.a,window.openVK=r.b,i.a.send("VKWebAppInit"),e((function(){Object(a.a)(),window.Ref=window.location.hash.substring(1),i.a.send("VKWebAppSetLocation",{location:""}),window.queryParams=new URL(document.location).searchParams.toString(),i.a.send("VKWebAppGetUserInfo"),i.a.send("VKWebAppGetAuthToken",{app_id:o.c,scope:"friends"}),"u"!==window.Ref&&i.a.send("VKWebAppJoinGroup",{group_id:o.f}),Object(c.a)()})),Object(d.a)(i.a)}.call(this,n("EVdn"))},eQKb:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("MMnf"),a=n("so3W"),o=n("yv5w");function s(t){e(".menu-button").removeClass("menu-button-active"),t.addClass("menu-button-active");let n=t.data("to");if(n!==window.State.currentPage)switch(window.State.currentPage=n,e(".page").hide(),e("#"+n).show(),window.State.currentPage){case"profile":Object(i.a)();break;case"stat":Object(a.a)();break;case"market":Object(o.a)()}}}).call(this,n("EVdn"))},eyMk:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("1QEB"),a=n.n(i),o=n("iRHI");function s(){let t=e(".buy-btn");window.State.isFriends&&"profile"!==window.State.currentPage?a.a.send("VKWebAppCallAPIMethod",{method:"friends.areFriends",request_id:"areFriends",params:{user_ids:t.data("id"),need_sign:1,v:"5.130",access_token:window.User.access_token}}):Object(o.a)()}}).call(this,n("EVdn"))},fC69:function(e,t){window.queryParams="",window.Ref="",window.User={user_id:0,name:"",photo:"",access_token:"",DIFFICULTY_HASH:4},window.Users={},window.Top=[],window.Market=[],window.Card={},window.State={currentPage:"profile",isExchange:!1,isFriends:!1,isMastersPage:!1,filterPrice:!0,filterPriceExchange:!0,filterProfit:!0,filterProfitExchange:!0,sortPrice:!0,sortPriceExchange:!0}},fb6q:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var i=n("We0c"),a=n("Qnyu"),o=n("yUHS"),s=n("WLfg");function r(t,n={},s){e(".loader-wrap").fadeIn(i.d),e.post(i.a+t+"?"+window.queryParams+"&v="+i.b,n,(function(t){e(".loader-wrap").fadeOut(i.d),e(".technical-works").hide(),t.error?(a.a.show(t.error,!0),Object(o.c)()):s(t.response)}),"json").fail((function(){e(".loader-wrap").fadeOut(i.d),e(".technical-works").show()}))}function c(e){let t=!1,n=0,i=Math.round((new Date).getTime()/1e3),a="";for(;!t;)a=s(i+":"+e+":"+n),a.substring(0,window.User.DIFFICULTY_HASH)==="0".repeat(window.User.DIFFICULTY_HASH)?t=!0:n++;if(t)return{pow_hash:a,pow:i+":"+e+":"+n}}}).call(this,n("EVdn"))},gFxh:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("1QEB"),a=n.n(i);function o(){a.a.send("VKWebAppShare",{link:e(".inviteLink").first().text()})}}).call(this,n("EVdn"))},hFvm:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("pTa+");function a(){Object(i.a)()}},hZTp:function(e,t,n){},i11l:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("LIia"),a=n("M0uz");function o(t){t.response.forEach((function(e){window.Users[e.id]={photo:e.photo_100,name:Object(a.b)(e.first_name,e.last_name),fullname:e.first_name.toLowerCase()+" "+e.last_name.toLowerCase()}})),window.User.owner_id&&(e("#owner-photo").attr("src",window.Users[window.User.owner_id].photo).off("click").on("click",(function(){openVK(window.User.owner_id)})),e("#owner-name").text(window.Users[window.User.owner_id].name).off("click").on("click",(function(){openVK(window.User.owner_id)})),e("#owner").show()),window.User.slaves?(e("#noSlaves").hide(),e("#slavesHelp").show(),e(".slave-item").remove(),window.User.slaves[0].forEach((function(t,n){window.User.slaves[0][n].fullname=window.Users[t.user_id].fullname,e(".slaves-list").append(Object(i.a)(t))}))):(e("#noSlaves").show(),e("#slavesHelp").hide())}}).call(this,n("EVdn"))},iRHI:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var i=n("fb6q"),a=n("VZz0"),o=n("yUHS"),s=n("We0c"),r=n("MMnf");function c(t=""){let n,c,d,u="profile"===window.State.currentPage;u?(n=e("#slaveUpgrade"),c=e("#userCardPrice"),d=c.text()):(n=e(".buy-btn"),d=n.text());let l="buy"+n.data("id"),w="market";window.State.isFriends?w="friends":window.State.isExchange&&(w="exchange"),u&&(w="slaves"),e.when(u?c.text(""):n.text("Покупка")).then((function(){e.when(Object(i.b)(l)).then((function(l){u?c.text(d):n.text(d),Object(i.a)("users.buySlave",{pow:l.pow,pow_hash:l.pow_hash,user_id:n.data("id"),section:w,friend_sign:t},(function(){window.State.isExchange&&!u?Object(a.a)(window.User.balance-window.Card.priceExchange):Object(a.a)(window.User.balance-window.Card.price),Object(o.c)(),u?Object(r.a)():e(".slave"+n.data("id")).fadeOut(s.d)}))}))}))}}).call(this,n("EVdn"))},mdQ4:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return v}));var i=n("1QEB"),a=n.n(i),o=n("nJOA"),s=n("MMnf"),r=n("Qnyu"),c=n("i11l"),d=n("wvD/"),u=n("otp/"),l=n("4FA/"),w=n("0n5W");function f(e,t){a.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:t,params:{user_ids:e.join(","),fields:"photo_100",v:"5.130",access_token:window.User.access_token}})}function h(t){if(t.length>0){let e=[];window.Top.push(t),t.forEach((function(t){window.Users[t.user_id]||e.push(t.user_id)})),f(e,"top")}else e(".stat-list").html('<div class="text-nothing">Пока никого нет</div>')}function p(t){if(t.length>0){let e=[];window.Market.push(t),t.forEach((function(t){window.Users[t.user_id]||e.push(t.user_id)})),f(e,"market")}else window.State.isFriends||e(".market-list").html('<div class="text-nothing">Пока никого нет</div>')}function v(e){e.subscribe((function(e){let t;switch(e.detail.data&&(t=e.detail.data),e.detail.type){case"VKWebAppGetUserInfoResult":Object(o.a)(t);break;case"VKWebAppAccessTokenReceived":window.User.access_token=t.access_token,Object(s.a)();break;case"VKWebAppCallAPIMethodFailed":case"VKWebAppAccessTokenFailed":r.a.show("Не удалось получить доступ к информации, чтобы продолжить игру.",!0);break;case"VKWebAppCallAPIMethodResult":switch(t.request_id){case"slaves":Object(c.a)(t);break;case"top":case"market":Object(d.a)(t);break;case"friends":Object(u.a)(t);break;case"usercard":Object(l.a)(t);break;case"areFriends":Object(w.a)(t)}}}))}}).call(this,n("EVdn"))},nJOA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("M0uz"),a=n("VZz0");function o(e){window.User.user_id=e.id,window.User.name=Object(i.b)(e.first_name,e.last_name),window.User.fullname=e.first_name.toLowerCase()+" "+e.last_name.toLowerCase(),window.User.photo=e.photo_100,Object(a.b)()}},"o+IS":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("Z9XL");function a(){Object(i.a)(),e(".category-btn").removeClass("active"),e("#topMasters").addClass("active")}}).call(this,n("EVdn"))},"otp/":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("mdQ4");function o(e){let t=e.response.join(",");Object(i.a)("users.get",{user_ids:t,type:"friends"},(function(e){Object(a.b)(e.users)}))}},"pTa+":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("mdQ4");function o(){e(".app_title").text("Покупка"),e(".buyDonate").show(),e(".statBtn").hide(),e(".slave-item").remove(),e(".market-list").html("").removeClass("friends-list"),e("#marketUpdate").hide(),e("#exchangeFilters").show(),e("#sellYourSlaves").show(),e("#inviteFriendsBtn").hide(),e("#inviteFriendsCard").hide(),e("#noFriends").hide(),e("#acceptFiltersExchange").hide(),e(".search-filters").hide(),window.State.isExchange=!0,window.State.isFriends=!1,window.Market=[];let t=window.State.sortPriceExchange?"price_exchange":"profit_per_hour",n=window.State.sortPriceExchange?window.State.filterPriceExchange?"DESC":"ASC":window.State.filterProfitExchange?"DESC":"ASC";Object(i.a)("market.exchange",{sort:t,order:n},(function(e){Object(a.b)(e.users)}))}}).call(this,n("EVdn"))},sBLP:function(e,t,n){"use strict";(function(e){function i(){e(".profile-btn").trigger("click"),window.scrollTo(0,window.screen.availHeight/2)}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},so3W:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("mdQ4");function o(){window.State.isMastersPage=!1,e(".app_title").text("Рейтинг"),e(".buyDonate").hide(),e(".statBtn").show(),e(".stat-list").html(""),e(".slave-item").remove(),e(".category-btn").removeClass("active"),e("#topSlaves").addClass("active"),window.Top=[],Object(i.a)("top.users",{},(function(t){e(".stat-position").text(null!=t.position?t.position:"Вы не раб"),Object(a.c)(t.users)}))}}).call(this,n("EVdn"))},tPbt:function(e,t,n){"use strict";(function(e){function i(){e("#filterPriceExchange").removeClass("active"),e("#filterPriceExchange").addClass("active"),e("#filterProfitExchange").removeClass("active"),window.State.sortPriceExchange=!0,window.State.filterPriceExchange?(window.State.filterPriceExchange=!1,e("#filterPriceExchange").html('Цена<span class="icon-down"></span>')):(window.State.filterPriceExchange=!0,e("#filterPriceExchange").html('Цена<span class="icon-up"></span>'))}n.d(t,"a",(function(){return i}))}).call(this,n("EVdn"))},tpcv:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("yv5w");function a(){Object(i.a)(),e(".category-btn").removeClass("active"),e("#marketCategory").addClass("active")}}).call(this,n("EVdn"))},uNXP:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a}));var i=n("fb6q");function a(){let t=e("#btnShieldActivate");e.when(t.text("Активируем")).then((function(){e.when(Object(i.b)("activateShield")).then((function(n){t.text("Активировать ("+window.User.shieldCount+")"),Object(i.a)("users.shieldActivate",{pow:n.pow,pow_hash:n.pow_hash},(function(n){n.link?openLink(n.link):(window.User.shieldCount--,window.User.shieldCount<0&&(window.User.shieldCount=0),window.User.shieldTo=n.shieldTo,t.text("Активировать ("+window.User.shieldCount+")"),e("#shieldTitle").text("Щит (активен):"),e("#shieldTimer").text(n.shield_to))}))}))}))}}).call(this,n("EVdn"))},wF54:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var i=n("fb6q"),a=n("We0c"),o=n("VZz0");function s(){let t="buyOut"+window.User.owner_id;e.when(e("#buyOut").text("Выкупаемся")).then((function(){e.when(Object(i.b)(t)).then((function(t){Object(i.a)("users.buyOut",{pow:t.pow,pow_hash:t.pow_hash},(function(){Object(o.a)(window.User.balance-window.User.buyOut),e("#owner").fadeOut(a.d)}))}))}))}}).call(this,n("EVdn"))},"wvD/":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("LIia"),a=n("M0uz");function o(t){t.response.forEach((function(e){window.Users[e.id]={photo:e.photo_100,name:Object(a.b)(e.first_name,e.last_name),fullname:e.first_name.toLowerCase()+" "+e.last_name.toLowerCase()}})),"market"===t.request_id?window.Market[0].length>0&&(e(".slave-item").remove(),window.Market[0].forEach((function(t){e(".market-list").append(Object(i.b)(t))}))):window.Top[0].length>0&&(e(".slave-item").remove(),window.Top[0].forEach((function(t,n){e(".stat-list").append(Object(i.c)(t,n+1))})))}}).call(this,n("EVdn"))},x1ye:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("Qnyu");function a(){i.a.show("Бонус будет доступен в следующем обновлении",!1)}},yUHS:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return l}));var i=n("pl9+"),a=n("We0c"),o=n("mdQ4"),s=n("M0uz"),r=n("fb6q");function c(t,n=""){window.Card={},window.Card.type=""!==n?n:"market",Object(r.a)("users.get",{user_id:t,type:window.Card.type},(function(n){if(window.Card.slaves_count=n.user.slaves_count,window.Card.price=n.user.price,window.Card.priceExchange=n.user.price_exchange,window.Card.user_id=n.user.user_id,window.Card.isOnMarket=n.user.is_on_market,window.Card.owner_id=n.user.owner_id,"slaves"===window.Card.type){window.State.isExchange=!1,Card.balance=n.user.balance,e("#slaveUpgrade").data("id",window.Card.user_id),window.Card.position=n.positions[0].length>0?n.positions[0][0].position:n.positions[1][0].position;let t=[];n.stat.forEach((function(e){t.push([parseInt(e.price),parseInt(e.count)])})),window.Card.stat=t}window.Card.profit_per_hour=window.State.isExchange?n.user.profit_per_hour:Object(s.c)(n.user.profit_per_hour),window.Card.profit_per_hour_now=n.user.profit_per_hour,Object(o.d)([t],"usercard")}))}function d(){e(".market").hide(),e(".slaves").show(),i.a.load((function(){let e=new i.a.api.visualization.DataTable;e.addColumn("number","цена"),e.addColumn("number","количество"),e.addRows(window.Card.stat);new i.a.api.visualization.LineChart(document.getElementById("slavechart")).draw(e,{legend:"none",hAxis:{gridlines:{},title:"Цена"},vAxis:{gridlines:{},title:"Количество"},backgroundColor:"#fff",colors:["#000"],interpolateNulls:!0,lineWidth:1,title:"",colorAxis:{colors:["#000","#000"]}})}),{packages:["corechart","line"]}),e("#userCardBalance").text(window.Card.balance.toLocaleString()),e("#userCardProfitText").text("+"+window.Card.profit_per_hour_now.toLocaleString()+"/чаc"),e("#userCardRate").text(window.Card.slaves_count>=a.e&&0===window.Card.owner_id?"Боярин":"Раб"),e("#userCardPosition").text(parseInt(window.Card.position)+" место"),e("#userCardPrice").text(window.Card.price.toLocaleString()),e("#userCardProfitCard").text("+"+window.Card.profit_per_hour.toLocaleString()+"/чаc"),window.Card.isOnMarket?(e("#sellSlave").hide(),e("#cancelSellSlave").show()):(e("#sellSlave").show(),e("#cancelSellSlave").hide())}function u(t){e(".market").show(),e(".slaves").hide();let n=e(".buy-btn");window.Card.slaves_count>=a.e&&window.User.slavesCount<a.e?(n.hide(),e(".master-btn").show()):(n.show().html("Купить ("+(window.State.isExchange?window.Card.priceExchange.toLocaleString():window.Card.price.toLocaleString())+'<i class="money-icon"></i>)').data("id",t.id),window.State.isExchange&&n.data("type","exchange"),e(".master-btn").hide())}function l(){e(".usercard-back").fadeOut(a.d),e(".usercard").fadeOut(a.d)}}).call(this,n("EVdn"))},yv5w:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o}));var i=n("fb6q"),a=n("mdQ4");function o(){e(".app_title").text("Покупка"),e(".buyDonate").show(),e(".statBtn").hide(),e(".slave-item").remove(),e(".category-btn").removeClass("active"),e("#marketCategory").addClass("active"),e(".market-list").html("").removeClass("friends-list"),e("#marketUpdate").show(),e("#exchangeFilters").hide(),e("#sellYourSlaves").hide(),e("#inviteFriendsBtn").hide(),e("#inviteFriendsCard").hide(),e("#noFriends").hide(),e("#acceptFiltersExchange").hide(),e(".search-filters").hide(),window.State.isExchange=!1,window.State.isFriends=!1,window.Market=[],Object(i.a)("market.random",{},(function(e){Object(a.b)(e.users)}))}}).call(this,n("EVdn"))},z4yC:function(e,t,n){"use strict";function i(e){a(e>0?"https://vk.com/id"+e:"https://vk.com/club"+e)}function a(e){if(/iPhone|iPod/.test(navigator.platform)){let t=document.createElement("a");document.body.appendChild(t),t.style="display: none",t.href=e,t.click(),document.body.removeChild(t)}else window.open(e,"_blank")}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}))}},[["e6Wu",1,2]]]);