(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),l=n.n(c),s=(n(13),n(3)),u=n(4),i=n(6),o=n(5),m=n(7),p=(n(14),function(e){return r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",value:e.value,onChange:e.change,placeholder:"City name..."}),r.a.createElement("button",null,"Search"))}),h=(n(15),function(e){var t=e.weather,n=t.date,a=t.icon,c=t.city,l=t.sunrise,s=t.sunset,u=t.temp,i=t.pressure,o=t.wind,m=t.err,p=null;if(!m&&c){var h=new Date(1e3*l).toLocaleTimeString(),f=new Date(1e3*s).toLocaleTimeString();p=r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"content-info"},r.a.createElement("p",null,r.a.createElement("strong",null,n)),r.a.createElement("p",{className:"content-city"},r.a.createElement("strong",null,c))),r.a.createElement("div",{className:"content-weather"},r.a.createElement("img",{src:"https://openweathermap.org/img/w/".concat(a,".png"),alt:"weather-img"}),r.a.createElement("span",{className:"content-temp"},r.a.createElement("strong",null,u,"\xb0C")),r.a.createElement("span",null,"Sunrise time: ",r.a.createElement("strong",null,h)),r.a.createElement("span",null,"Sunset time: ",r.a.createElement("strong",null,f)),r.a.createElement("span",null,"Pressure: ",r.a.createElement("strong",null,i," hPa")),r.a.createElement("span",null,"Wind: ",r.a.createElement("strong",null,o," m/s"))))}return r.a.createElement(r.a.Fragment,null,m?"Sorry, we do not have ".concat(c," in the database..."):p)}),f=(n(16),"f262281ecaf37255968f7b381035a318"),E=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",date:"",city:"",icon:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:!1},n.handleInputChange=function(e){n.setState({value:e.target.value})},n.handleCitySubmint=function(e){if(e.preventDefault(),""!==n.state.value){var t="https://api.openweathermap.org/data/2.5/weather?q=".concat(n.state.value,"&APPID=").concat(f,"&units=metric");fetch(t).then((function(e){if(e.ok)return e;throw Error("Oops... something went wrong")})).then((function(e){return e.json()})).then((function(e){var t=(new Date).toLocaleString();n.setState((function(n){return{date:t,city:n.value,icon:e.weather[0].icon,sunrise:e.sys.sunrise,sunset:e.sys.sunset,temp:Math.floor(e.main.temp),pressure:e.main.pressure,wind:e.wind.speed,err:!1}}))})).catch((function(e){n.setState((function(e){return{err:!0,city:e.value}}))}))}},n}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Weather App"),r.a.createElement(p,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmint}),r.a.createElement(h,{weather:this.state}))}}]),t}(a.Component);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.41c6bec8.chunk.js.map