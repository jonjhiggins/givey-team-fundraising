"use strict";function giveyCurrencyFilter(a){return function(b){var c=Math.round(100*b/100)/100;return a("currency")(c,"£").slice(0,-3)}}angular.module("giveyTeamFundraisingApp",["ngRoute","angular-inview"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main",title:"Home"}).otherwise({redirectTo:"/"})}]),function(){var a=function(a,b,c,d,e,f){var g=this,h=function(){$("body").addClass("state--error"),g.error="Sorry, we are having trouble connecting to Givey"},i=function(){return e.requestTeam().then(function(a){return g.team=a,g.team.backgroundStyle={"background-image":"url("+a.background+")"},b.siteName=a.teamName,a})},j=function(a){return f.requestTeamMembers(a).then(function(a){return g.teamMembers=a,a},h)},k=function(a){return e.getTeamTotal(a).then(function(a){g.team.teamTotal=a.teamTotal,g.team.teamTotalFormatted=a.teamTotalFormatted;var b=Math.max(g.team.teamTarget-a.teamTotal,0);return g.team.chart=[{value:a.teamTotal,color:g.team.chartColor,label:a.teamTotalFormatted+" raised"},{value:b,color:"#EFEFEF",label:d("giveyCurrency")(b,"£")+" to go"}],a.teamTotal})},l=function(a){return e.getTeamPercentage(a,g.team.teamTarget).then(function(a){return g.team.teamPercentage=a.teamPercentageFormatted,a})};i().then(j).then(k).then(l),g.inView={setProperty:function(a,b){this[b]=a},animate:function(a,b){a&&$(b.inViewTarget).removeClass("in-view").addClass("animated").addClass("fadeIn")}}};angular.module("giveyTeamFundraisingApp").controller("MainCtrl",["$scope","$rootScope","$q","$filter","TeamService","TeamMemberService",a])}(),function(){function a(a,b,c){var d={},e=[],f=0;return d.requestTeamMembers=function(a){e=[],f=a.teamMembersTarget;var c=new GiveyApp,g=b.defer(),h=function(a){return c.find("business",a.giveyBusiness).then(i,l)},i=function(a){return a.get("confirmedEmployees")},j=function(a){return $.each(a,d.processTeamMember)},k=function(){return g.resolve(e)},l=function(a){return g.reject(a)};return h(a).then(j,l).then(k,l),g.promise},d.processTeamMember=function(a,b){var d=b.get("fullName"),g=b.get("giveyTag"),h=b.get("personalMessage"),i=b.get("avatarUrl"),j=i.replace("/upload/","/upload/w_300,c_limit/"),k=b.get("voiceTotal"),l=c("giveyCurrency")(k,"£"),m=(k/f*100).toFixed(0)+"%",n="https://www.givey.com/"+g;e.push({fullName:d,description:h,image:i,imageThumb:j,total:k,totalFormatted:l,percentage:m,cta:{href:n}})},d}angular.module("giveyTeamFundraisingApp").factory("TeamMemberService",["$http","$q","$filter",a])}(),function(){function a(a,b,c,d){var e={},f={giveyBusiness:"neteffekt",teamName:"A Givey Team",teamDescription:"Raising funds for a charity",teamCta:{text:"Donate"},teamTarget:1e6,background:"//res.cloudinary.com/jon-higgins-ltd/image/upload/v1416496792/team-background_rw4rfq.jpg",chartColor:"#F7464A",progressTitle:"So far we've raised...",teamMembersTitle:"Our team",teamMembersTarget:15e4};return e.requestTeam=function(){var a,e=b.defer(),g={giveyBusiness:d.search().giveyBusiness,teamName:d.search().teamName};return a=f,a.giveyBusiness=g.giveyBusiness?g.giveyBusiness:a.giveyBusiness,a.teamName=g.teamName?g.teamName:a.teamName,a.teamCta.href="https://givey.com/"+a.giveyBusiness,a.teamTargetFormatted=c("giveyCurrency")(a.teamTarget,"£"),e.resolve(a),e.promise},e.getTeamTotal=function(a){var d=0,e=0,f=b.defer();return angular.forEach(a,function(a){d+=a.total},d),e=c("giveyCurrency")(d,"£"),f.resolve({teamTotal:d,teamTotalFormatted:e}),f.promise},e.getTeamPercentage=function(a,c){var d=Math.round(a/c*100,2),e=d+"%",f=b.defer();return f.resolve({teamPercentage:d,teamPercentageFormatted:e}),f.promise},e}angular.module("giveyTeamFundraisingApp").factory("TeamService",["$http","$q","$filter","$location",a])}(),angular.module("giveyTeamFundraisingApp").filter("giveyCurrency",["$filter",giveyCurrencyFilter]),function(){function a(){var a=function(a,b){var c,d,e,f=b[0].getContext("2d"),g=new Chart(f);a.$watch("data",function(c){d=c,h(a,b,g)}),a.$watch("inViewStatus",function(c){e=c,h(a,b,g)});var h=function(a,b,f){d&&e&&(c&&c.destroy(),c=f[a.type](a.data,{responsive:!0,tooltipTemplate:"<%if (label){%><%=label%><%}%>"}),d=!1)}};return{restrict:"A",scope:{data:"=chartData",inViewStatus:"=inViewStatus",type:"@chartType"},link:a}}angular.module("giveyTeamFundraisingApp").directive("chart",a)}(),function(){var a=function(){var a=function(a,b){var c,d,e="count-up"+Math.floor(9999*Math.random());b.prop("id",e),a.$watch("total",function(a){c=a,f()}),a.$watch("inViewStatus",function(a){d=a,f()});var f=function(){if(c&&d){var a=new countUp(e,0,c/100,0,1.5);b.addClass("count-up--currency"),a.start(),c=!1}}};return{restrict:"A",scope:{total:"=total",inViewStatus:"=inViewStatus"},link:a}};angular.module("giveyTeamFundraisingApp").directive("countUp",a)}();