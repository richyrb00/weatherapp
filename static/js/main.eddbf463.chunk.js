(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{153:function(e,t,a){},154:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(42),c=a.n(r),l=(a(55),a(43)),i=a(44),s=a(45),u=a(48),m=a(49),d=a(9),h=a.n(d),p=(a(57),a(46)),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState(Object(l.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),h.a.setApiKey("".concat("AIzaSyCekYDAIOFLpQR8pmK8R-PUTMB-aiZiwjI")),h.a.setLanguage("en"),h.a.enableDebug(),h.a.fromAddress(n.state.location_input).then((function(e){var t=e.results[0].geometry.location,a=t.lat,o=t.lng;n.setState({lat:a}),n.setState({lng:o}),n.setState({location_name:e.results[0].address_components[0].long_name}),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(o,"&appid=").concat("09c906ad5b581c12798064ee70b700bb","&units=metric")).then((function(e){return e.json()})).then((function(e){n.setState({data:e}),n.setState({weather:e.current.weather[0]}),n.setState({location_input_show:!1}),n.setState({search_count:n.state.search_count+1})})).catch(console.log)}),(function(e){console.error(e)}))},n.getHourlyTemp=function(){var e,t=n.state.data.hourly,a=[];for(e in t)a.push(t[e].temp);return a},n.state={current_hour:(new Date).getHours(),search_count:0,data:[],weather:[],lat:"",lng:"",location_name:"",location_input:"",location_input_show:!0},n}return Object(s.a)(a,[{key:"getHoursCount",value:function(e){var t=new Date,a=new Date;t.setTime(t.getTime()+60*e*60*1e3);for(var n=[];a<=t;)n.push(a.getHours()),a.setTime(a.getTime()+36e5);return n}},{key:"render",value:function(){var e=this.state,t=(e.data,e.location_name),a=void 0===t?void 0:t,n=e.weather,r=void 0===n?void 0:n,c=(e.location_input,this.state.data),l=(c.main,c.clouds,c.coord,c.name,c.sys,c.wind,c.current),i=c.hourly,s={labels:this.getHoursCount(48),datasets:[{label:"Temperature",fill:!1,lineTension:.1,backgroundColor:"#9b2c2c",borderColor:"#9b2c2c",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#9b2c2c",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#c53030",pointHoverBorderColor:"#c53030",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:this.getHourlyTemp(i)}]};return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"h-screen w-screen z-50 flex content-center items-center align-center justify-center fixed bg-white ".concat(this.state.location_input_show?null:"hidden")},o.a.createElement("div",{className:"w-full md:w-6/12 lg:w-3/12 mx-6"},o.a.createElement("h2",{className:"text-2xl mb-6"},"Enter Location"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",name:"location_input",value:this.state.location_input,onChange:this.handleChange,className:"text-black bg-gray-200 focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"})))),o.a.createElement("header",null,o.a.createElement("div",{className:"bg-blue-900 py-16"},a?o.a.createElement("h1",{className:"text-white text-3xl font-bold mb-2"},a):null,r.description?o.a.createElement("p",{className:"text-white text-lg"},r.description):null,o.a.createElement("div",{className:"m-auto mt-6 mb-0 w-full px-6 flex content-center items-center align-center justify-center"},r.icon?o.a.createElement("img",{src:"images/".concat(r.icon,".png"),alt:r.description,className:"weather-icon text-center rounded-full bg-white"}):null,l?o.a.createElement("div",null,o.a.createElement("span",{className:"ml-6 text-5xl text-white font-bold"},Math.floor(l.temp),"\u2103")):null))),o.a.createElement("main",{className:"flex items-center justify-center"},o.a.createElement("div",{className:"w-fill p-6 md:w-3/6 lg:w-3/6 relative"},o.a.createElement(p.a,{data:s}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(153);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports=a(154)},55:function(e,t,a){},57:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.eddbf463.chunk.js.map