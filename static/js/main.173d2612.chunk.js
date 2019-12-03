(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){e.exports=a(380)},179:function(e,t){},181:function(e,t){},213:function(e,t){},214:function(e,t){},283:function(e,t){},373:function(e,t,a){},377:function(e,t,a){},378:function(e,t,a){},379:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(157),l=a.n(r),c=a(35),i=a(36),s=a(38),u=a(37),m=a(39),d=function(e){return e.children},p=a(158),h=a.n(p),v=(a(373),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(){}},{key:"calculateStats",value:function(e){for(var t={not_considered:0,complete:0,under_review:0,work_underway:0},a=0;a<e.length;++a)"Complete"===e[a].status?t.complete++:"Not under consideration"===e[a].status?t.not_considered++:"Reviewing"===e[a].status.trim()?t.under_review++:"Work underway"===e[a].status&&t.work_underway++;return t}},{key:"render",value:function(){var e=this.calculateStats(this.props.data);return o.a.createElement("div",{className:"summary-box"},o.a.createElement("div",{className:"stat-box"},o.a.createElement("div",{className:"stat"},o.a.createElement("p",{className:"big-num new"},e.complete),o.a.createElement("p",{className:"label"},"Complete")),o.a.createElement("div",{className:"stat"},o.a.createElement("p",{className:"big-num being-held"},e.under_review),o.a.createElement("p",{className:"label"},"Under ",o.a.createElement("br",null)," review")),o.a.createElement("div",{className:"stat"},o.a.createElement("p",{className:"big-num under-control"},e.work_underway),o.a.createElement("p",{className:"label"},"Work ",o.a.createElement("br",null)," Underway")),o.a.createElement("div",{className:"stat"},o.a.createElement("p",{className:"big-num out"},e.not_considered),o.a.createElement("p",{className:"label"},"Not under ",o.a.createElement("br",null)," consideration"))))}}]),t}(n.Component)),w=a(91),f=a(159),E=(a(376),a(377),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"rowIncludes",value:function(e,t){if("all"===e.value)return!0;var a=e.pivotId||e.id;return void 0===t[a]||String(t[a].toLowerCase()).includes(e.value.toLowerCase())}},{key:"render",value:function(){var e;return o.a.createElement(f.a,(e={className:"-highlight",columns:[{Header:"Responsible",accessor:"who_implements",filterMethod:this.rowIncludes,Filter:function(e){return o.a.createElement("select",{onChange:function(t){return e.onChange(t.target.value)},style:{width:"100%"},value:e?e.value:"all"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"BC Lotteries Corporation"},"BCLC"),o.a.createElement("option",{value:"Casino industry"},"Casinos"),o.a.createElement("option",{value:"Ottawa"},"Feds"),o.a.createElement("option",{value:"Province"},"Province"))},width:100},{Header:"Recommendation",accessor:"recommendation_full",filterMethod:this.rowIncludes,width:300},{Header:"Target",accessor:"target",filterMethod:this.rowIncludes},{Header:"Status",accessor:"status",filterMethod:this.rowIncludes,Filter:function(e){return o.a.createElement("select",{onChange:function(t){return e.onChange(t.target.value)},style:{width:"100%"},value:e?e.value:"all"},o.a.createElement("option",{value:"all"},"All"),o.a.createElement("option",{value:"Complete"},"Complete"),o.a.createElement("option",{value:"Work Underway"},"Underway"),o.a.createElement("option",{value:"Reviewing"},"Under Review"),o.a.createElement("option",{value:"Not under consideration"},"Rejected"))}}],data:this.props.data,defaultPageSize:5,filterable:!0,filterAll:!0,showPageSizeOptions:!1,showPaginationBottom:!0,showPaginationTop:!0},Object(w.a)(e,"showPaginationBottom",!1),Object(w.a)(e,"SubComponent",function(e){return o.a.createElement("div",{className:"sub-row"},o.a.createElement("h3",null,"Recommendation for ".concat(e.original.target.toLowerCase())),o.a.createElement("p",null,e.original.recommendation_full),o.a.createElement("p",{className:"source"},"Source report: ".concat(e.original.source_short.split(":")[0])))}),e))}}]),t}(n.Component)),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;h.a.init({key:this.props.sheet,callback:function(t,a){t.map(function(e){return e.recommendation_short=e.recommendation_full.split(".")[0],e}),e.setState({data:t})},simpleSheet:!0})}},{key:"render",value:function(){return o.a.createElement(d,null,o.a.createElement(v,{data:this.state.data}),o.a.createElement(E,{data:this.state.data}))}}]),t}(n.Component),g=(a(378),"https://docs.google.com/spreadsheets/d/12Py1FVF-tCdkhbNM9pYKayKR1lHQStNAF78soVVy10o/edit?usp=sharing");var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Anti-money laundering recommendations"),o.a.createElement(b,{sheet:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(379);l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[160,1,2]]]);
//# sourceMappingURL=main.173d2612.chunk.js.map