(this.webpackJsonpclicky=this.webpackJsonpclicky||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),o=a(7),r=a.n(o),n=(a(13),a(1)),i=a(2),l=a(4),m=a(3),u=a(5);a(14);var h=function(e){return c.a.createElement("div",{className:"navbar-cstm"},c.a.createElement("ul",{className:"navbar-list"},c.a.createElement("li",null,c.a.createElement("h1",null,"Record Store Shopping"))))};a(15),a(16);var g=function(e){return c.a.createElement("img",{className:"image-item",onClick:e.chooseImage,src:e.source,alt:"Game Choice"})},d=[{id:1,ref:"https://centralsquarerecords.com/Photo/418461375219"},{id:2,ref:"https://images-na.ssl-images-amazon.com/images/I/61lUneegouL._SL1200_.jpg"},{id:3,ref:"https://f4.bcbits.com/img/a2337835939_10.jpg"},{id:4,ref:"https://f4.bcbits.com/img/a0886287496_10.jpg"},{id:5,ref:"https://f4.bcbits.com/img/a2749105280_10.jpg"},{id:6,ref:"https://f4.bcbits.com/img/a2174795375_10.jpg"},{id:7,ref:"https://f4.bcbits.com/img/a0278585314_10.jpg"},{id:8,ref:"https://payload.cargocollective.com/1/4/158872/9317275/real-estate-days_800.jpg"},{id:9,ref:"https://static.stereogum.com/uploads/2018/08/Microcastle-1533316321-640x640.jpg"},{id:10,ref:"https://images-na.ssl-images-amazon.com/images/I/A19QFR%2BE1wL._SL1500_.jpg"},{id:11,ref:"https://www.udiscovermusic.com/wp-content/uploads/2019/04/Tame-Impala-Currents-album-cover-web-optimised-820.jpg"},{id:12,ref:"https://f4.bcbits.com/img/a1428711167_10.jpg"}],p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={images:d,selected:[],your_score:0,high_score:0,status:"Click on an image below to earn points, but don't click any more than once."},a.shuffleList=function(){var e=a.state.images.sort((function(){return Math.random()-.5}));a.setState({images:e})},a.determineScore=function(e){a.state.selected.includes(e.id)?a.resetGame():(a.state.selected.push(e.id),a.setState({your_score:a.state.your_score+1,status:"You guessed correctly!"})),a.shuffleList()},a.resetGame=function(){var e=document.getElementById("board");a.setState({images:a.state.images,selected:[],your_score:0,status:"You guessed incorrectly and lost. Click to play again!"}),e.classList.add("shakeup"),setTimeout((function(){e.classList.remove("shakeup")}),1e3),a.newHighScore()},a.newHighScore=function(){a.state.your_score>a.state.high_score?a.setState({high_score:a.state.your_score}):a.setState({high_score:a.state.high_score})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"game"},c.a.createElement("div",{className:"score"},this.state.status,c.a.createElement("h3",null,"Your Score: ",this.state.your_score," | High Score: ",this.state.high_score)),c.a.createElement("div",{id:"board"},this.state.images.map((function(t,a){return c.a.createElement(g,{source:t.ref,chooseImage:function(){return e.determineScore(t)}})}))))}}]),t}(c.a.Component),f=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement(p,null))}}]),t}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.dc3c6d94.chunk.js.map