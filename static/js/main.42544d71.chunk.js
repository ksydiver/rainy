(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},21:function(e,t,a){e.exports=a(43)},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(6),o=a.n(i),s=a(13),m=a(14),u=a(19),d=a(15),p=a(20),h=a(1),f=(a(42),a(16)),E=a.n(f),k=a(17),b=a.n(k),g=a(7),P=a.n(g),v=(a(12),Object(h.platform)()),w=function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(h.Panel,{id:t},r.a.createElement(h.PanelHeader,{left:r.a.createElement(h.HeaderButton,{onClick:a,"data-to":"persik"},v===h.IOS?r.a.createElement(E.a,null):r.a.createElement(b.a,null))},"\u041f\u043e\u0433\u043e\u0434\u0430"),n&&r.a.createElement(h.Group,{title:"User Data Fetched with VK Connect"},r.a.createElement(h.ListItem,{before:n.photo_200?r.a.createElement(h.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name)),r.a.createElement("img",{className:"Persik",src:P.a,alt:"Persik The Cat"})),r.a.createElement("img",{className:"Persik",src:P.a,alt:"Persik The Cat"}),r.a.createElement(h.Group,{title:"Navigation Example"},r.a.createElement(h.Div,null,r.a.createElement(h.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))},O=a(18),y=a.n(O),C=a(10),U=a.n(C),j=Object(h.platform)(),I=function(e){return r.a.createElement(h.Panel,{id:e.id},r.a.createElement(h.PanelHeader,{left:r.a.createElement(h.HeaderButton,{onClick:e.go,"data-to":"home"},j===h.IOS?r.a.createElement(y.a,null):r.a.createElement(U.a,null))},"\u0412\u044b\u0431\u0435\u0440\u0438 \u0433\u043e\u0440\u043e\u0434"),r.a.createElement("img",{className:"Persik",src:P.a,alt:"Persik The Cat"}))},S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"home",fetchedUser:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(h.View,{activePanel:this.state.activePanel},r.a.createElement(w,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(I,{id:"persik",go:this.go}))}}]),t}(r.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(S,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[21,1,2]]]);
//# sourceMappingURL=main.42544d71.chunk.js.map