(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=n(6),u=n(3),m=n(4),i=n(7),s=n(5),f=n(8),h=function(e){var t=e.fn;return r.a.createElement("button",{onClick:t},"Rand your React name")},d=function(e){var t=e.name;return r.a.createElement("h1",{className:"name"},t)},b=function(){return r.a.createElement("div",{className:"picture"})},p=(n(15),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"Your Bee name"},n.alphabet="abcdefghijklmnopqrstuvwxyz",n.randName=function(){for(var e=Object(l.a)(n.alphabet),t="",a=Math.floor(5*Math.random()+1),r=0;r<=a;r++){t+=e[Math.floor(Math.random()*e.length)]}n.setState({name:"bee"+t})},n}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(d,{name:this.state.name}),r.a.createElement(h,{fn:this.randName}))}}]),t}(r.a.Component));o.a.render(r.a.createElement(p,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.aa7bdb15.chunk.js.map