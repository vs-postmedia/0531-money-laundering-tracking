(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{159:function(e,t,a){e.exports=a(379)},178:function(e,t){},180:function(e,t){},212:function(e,t){},213:function(e,t){},282:function(e,t){},372:function(e,t,a){},375:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(156),l=a.n(o),c=a(35),i=a(36),s=a(38),u=a(37),m=a(39),d=function(e){return e.children},p=a(157),h=a.n(p),v=(a(372),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"calculateStats",value:function(e){for(var t={not_considered:0,complete:0,under_review:0,work_underway:0},a=0;a<e.length;++a)"Complete"===e[a].status?t.complete++:"Not under consideration"===e[a].status?t.not_considered++:"Reviewing"===e[a].status?t.under_review++:t.work_underway++;return t}},{key:"render",value:function(){var e=this.calculateStats(this.props.data);return r.a.createElement("div",{className:"summary-box"},r.a.createElement("h2",null,"Progress"),r.a.createElement("div",{className:"stat-box"},r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"big-num new"},e.complete),r.a.createElement("p",{className:"label"},"Complete")),r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"big-num being-held"},e.under_review),r.a.createElement("p",{className:"label"},"Under ",r.a.createElement("br",null)," review")),r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"big-num under-control"},e.work_underway),r.a.createElement("p",{className:"label"},"Work ",r.a.createElement("br",null)," Underway")),r.a.createElement("div",{className:"stat"},r.a.createElement("p",{className:"big-num out"},e.not_considered),r.a.createElement("p",{className:"label"},"Not under ",r.a.createElement("br",null)," consideration"))))}}]),t}(n.Component)),f=a(158),w=(a(375),a(376),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"rowIncludes",value:function(e,t){if("all"===e.value)return!0;var a=e.pivotId||e.id;return void 0===t[a]||String(t[a].toLowerCase()).includes(e.value.toLowerCase())}},{key:"render",value:function(){this.props.data.map(function(e){return e.recommendation_short=e.recommendation_full.split(".")[0]});return r.a.createElement(f.a,{className:"-highlight",columns:[{Header:"Responsible party",accessor:"who_implements",filterMethod:this.rowIncludes,Filter:function(e){return r.a.createElement("select",{onChange:function(t){return e.onChange(t.target.value)},style:{width:"100%"},value:e?e.value:"all"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"BC Lotteries Corporation"},"BCLC"),r.a.createElement("option",{value:"Casinos"},"Casinos"),r.a.createElement("option",{value:"Federal government"},"Feds"),r.a.createElement("option",{value:"BC government"},"Province"))},width:100},{Header:"Recommendation",accessor:"recommendation_short",filterMethod:this.rowIncludes,width:350},{Header:"Focus",accessor:"target",filterMethod:this.rowIncludes},{Header:"Status",accessor:"status",filterMethod:this.rowIncludes,Filter:function(e){return r.a.createElement("select",{onChange:function(t){return e.onChange(t.target.value)},style:{width:"100%"},value:e?e.value:"all"},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"Complete"},"Complete"),r.a.createElement("option",{value:"Work Underway"},"Underway"),r.a.createElement("option",{value:"Reviewing"},"Under Review"),r.a.createElement("option",{value:"Not under consideration"},"Rejected"))}}],data:this.props.data,defaultPageSize:10,filterable:!0,filterAll:!0,SubComponent:function(e){return r.a.createElement("div",{className:"sub-row"},r.a.createElement("h3",null,"Full recommendation"),r.a.createElement("p",null,e.original.recommendation_full),r.a.createElement("p",{className:"source"},"Source report: ".concat(e.original.source.split(":")[0])))}})}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.init({key:this.props.sheet,callback:function(t,a){t.map(function(e){e.recommendation_short=e.recommendation_full.split(".")[0]}),e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(v,{data:this.state.data}),r.a.createElement(w,{data:this.state.data}))}}]),t}(n.Component),b=(a(377),"https://docs.google.com/spreadsheets/d/12Py1FVF-tCdkhbNM9pYKayKR1lHQStNAF78soVVy10o/edit?usp=sharing");var g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Anti-money laundering recommendations"),r.a.createElement(E,{sheet:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(378);l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[159,1,2]]]);
//# sourceMappingURL=main.d3bad2d5.chunk.js.map