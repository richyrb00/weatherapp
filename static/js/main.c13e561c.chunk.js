(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{164:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(55),l=a.n(r),c=(a(63),a(5)),i=a(6),s=a(7),m=a(8),u=(a(64),a(65),a(16),a(159),a(33)),p=a(1),h=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).showLocationCard=function(e){if(e)return o.a.createElement("div",{className:"card flex flex-row content-center justify-center p-2 bg-white rounded-lg shadow-2xl m-6 items-center"},o.a.createElement("div",{className:"prod-title flex-grow text-left mx-6"},o.a.createElement("p",{className:"text-2xl uppercase text-gray-900 font-bold align-middle"},e.name,", ",e.sys.country)),o.a.createElement("div",{className:"prod-geo flex-grow text-right"},o.a.createElement("p",{className:"uppercase text-sm text-gray-400 align-middle"},"[",e.coord.lat,",",e.coord.lon,"]")),o.a.createElement("div",{className:"prod-img text-right w-24"},e.weather[0].icon?o.a.createElement("img",{src:"/weatherapp/images/".concat(e.weather[0].icon,".png"),alt:e.weather[0].description,className:"w-2/4 mx-auto align-middle"}):null),o.a.createElement("div",{className:"prod-info text-right mx-6"},o.a.createElement("p",{className:"font-bold text-xl align-middle"},Math.round(10*(e.main.temp-273.15))/10,"\u2103")),o.a.createElement("div",{className:"prod-cta text-right mx-6"},o.a.createElement("a",{href:"/weatherapp/#/location/".concat(e.coord.lat,"/").concat(e.coord.lon),className:"px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none align-middle"},"View")))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.data.length?(console.log("data on results",this.props.data),o.a.createElement(n.Fragment,null,o.a.createElement("div",null,o.a.createElement("div",{className:"container mx-auto"},o.a.createElement("h2",{className:"text-2xl mb-6"},"Results: ",this.props.data.length),o.a.createElement("ul",{className:"flex flex-col mb-4"},this.props.data.map((function(t,a){return o.a.createElement("li",{className:"w-full",key:a},e.showLocationCard(t))}))))))):null}}]),a}(n.Component),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return console.log("home props",this.props.locationResults),o.a.createElement(n.Fragment,null,o.a.createElement(h,{data:this.props.locationResults}),o.a.createElement("div",{className:"container mx-auto"},o.a.createElement("div",null,"Homepage")))}}]),a}(n.Component),g=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={weatherData:[],location_name:""},n}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this,t=this.props.match.params,a=t.lat,n=t.lon;fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&appid=").concat("09c906ad5b581c12798064ee70b700bb")).then((function(e){return e.json()})).then((function(t){console.log("data location",t),e.setState({location_name:t.name})})).catch(console.log),fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(a,"&lon=").concat(n,"&appid=").concat("09c906ad5b581c12798064ee70b700bb")).then((function(e){return e.json()})).then((function(t){e.setState({weatherData:t})})).catch(console.log)}},{key:"render",value:function(){return console.log("weatherData",this.state.weatherData),console.log("location",this.state.location_name),o.a.createElement(n.Fragment,null,o.a.createElement(h,{data:this.props.locationResults}),0==this.props.locationResults?o.a.createElement("div",{className:"container mx-auto"},o.a.createElement("div",{className:"flex"},o.a.createElement("div",{className:"w-2/6 px-6"},o.a.createElement("div",{className:"bg-gray-200 p-6 rounded-md"},o.a.createElement("h1",{ariaLabel:"Weather in ".concat(this.state.location_name)},this.state.location_name))),o.a.createElement("div",{className:"w-4/6 px-6"},o.a.createElement("div",{className:"p-6"},o.a.createElement("span",null,"Main"))))):null)}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"flex bg-white border-b border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center"},o.a.createElement("div",{className:"container relative mx-auto px-6"},o.a.createElement("div",{className:"w-full lg:px-6 xl:w-3/4 xl:px-12 mx-auto"},o.a.createElement("div",{className:"relative"},o.a.createElement("form",{onSubmit:this.props.handleSearch},o.a.createElement("span",{className:"algolia-autocomplete"},o.a.createElement("input",{id:"locationsearch",className:"transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input",onChange:this.props.handleSearchChange,type:"text",placeholder:"Search Location",spellCheck:"false",role:"search","aria-expanded":"false","aria-label":"search input","aria-owns":"algolia-autocomplete-listbox-0",dir:"auto"})),o.a.createElement("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center"},o.a.createElement("svg",{className:"fill-current pointer-events-none text-gray-600 w-4 h-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},o.a.createElement("path",{d:"M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}))))))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).location_input=function(e){return n.state.location_input},n.handleSearchChange=function(e){n.setState({location_input:e.target.value})},n.handleSearch=function(e){e.preventDefault();var t=n.state.location_input;fetch("https://api.openweathermap.org/data/2.5/find?q=".concat(t,"&type=like&sort=population&cnt=30&appid=").concat("09c906ad5b581c12798064ee70b700bb")).then((function(e){return e.json()})).then((function(e){n.setState({location_results:e.list})})).catch(console.log)},n.state={data:[],weather:[],location_results:[],location_input:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.location_results;return console.log("app lr",e),"",o.a.createElement("div",null,o.a.createElement(f,{handleSearchChange:this.handleSearchChange.bind(this),handleSearch:this.handleSearch.bind(this),location_input:this.location_input.bind(this)}),o.a.createElement("div",{className:"mt-24"},o.a.createElement(u.a,{basename:"".concat("/weatherapp")},o.a.createElement(p.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(d,Object.assign({},t,{locationResults:e}))}}),o.a.createElement(p.a,{path:"/location/:lat/:lon",render:function(t){return o.a.createElement(g,Object.assign({},t,{locationResults:e}))}}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(164);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},58:function(e,t,a){e.exports=a(165)},63:function(e,t,a){},64:function(e,t,a){}},[[58,1,2]]]);
//# sourceMappingURL=main.c13e561c.chunk.js.map