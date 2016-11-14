webpackJsonp([3],{122:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e){return function(t,n){return Promise.all([(0,c.default)((0,p.default)("topics:getAllTopics")).then(function(e){return e.json()}),(0,c.default)((0,p.default)("topics:getTopicsOfUser",e)).then(function(e){return e.json()})]).catch(function(){return[{status:"fail",result:{msg:"Network Unavailable!"}},null]}).then(function(e){var n=u(e,2),r=n[0],l=n[1];if("fail"===r.status)return void v.default.error((0,p.default)("topics:getAllTopics"),r.result.msg);if("fail"===l.status)return void v.default.error((0,p.default)("topics:getTopicsOfUser"),l.result.msg);var a=new Set(l.result.map(function(e){return e.topic_name}));t({type:f.CLIENT_TOPICS.LOAD_TOPIC_LIST,result:r.result.sort(function(e,t){return t.count-e.count}).map(function(e){return i({},e,{isSubscribed:a.has(e.topic_name)})})})})}}function a(e){return function(t,n){return(0,c.default)((0,p.default)("topics:getTopicsOfUser",e)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(n){return"fail"===n.status?void v.default.error((0,p.default)("topics:getTopicsOfUser",e),n.result.msg):void t({type:f.CLIENT_TOPICS.LOAD_USER_TOPICS,status:n.status,result:n.result})})}}function o(e,t){return function(n,r){return(0,c.default)((0,p.default)("topics:getAllEventsOfTopic",e,t)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(r){return"fail"===r.status?void v.default.error((0,p.default)("topics:getAllEventsOfTopic",e,t),r.result.msg):void n({type:f.CLIENT_TOPICS.LOAD_EVENT_LIST,status:r.status,result:{topic:e,eventsList:r.result.sort(function(e,t){return t.likes-e.likes})}})})}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){var n=[],r=!0,l=!1,a=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(l)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.loadAllTopics=l,t.getTopicsOfUser=a,t.loadAllEventsOfTopics=o;var s=n(62),c=r(s),f=n(30),d=n(61),p=r(d),m=n(56),v=r(m)},161:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:p.CLIENT_EVENTS.UPDATE_EVENT_FIELDS,event:e}}function o(e,t){return function(n,r){return(0,d.default)((0,v.default)("events:getSingleEvent",e,t)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(r){return"fail"===r.status?void h.default.error((0,v.default)("events:getSingleEvent",e,t),r.result.msg):void n({type:p.CLIENT_EVENTS.LOAD_SINGLE_EVENT,status:r.status,result:r.result})})}}function i(e){return function(t,n){return(0,d.default)((0,v.default)("events:getComments",e)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(n){return"fail"===n.status?void h.default.error((0,v.default)("events:getComments",e),n.result.msg):void t({type:p.CLIENT_EVENTS.LOAD_COMENTS,status:n.status,result:n.result.sort(function(e,t){return e.timestamp-t.timestamp})})})}}function u(e,t,n){return function(r,l){var a=new FormData;return a.append("content",n),a.append("eid",t),a.append("uid",e),(0,d.default)((0,v.default)("events:createComments"),{method:"post",body:a}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(e){return"fail"===e.status?void h.default.error((0,v.default)("events:createComments"),e.result.msg):void r(i(t))})}}function s(e,t){return function(n,r){var l=new FormData;return l.append("uid",e),l.append("eid",t),(0,d.default)((0,v.default)("events:deleteEvent"),{method:"post",body:l}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(t){return"fail"===t.status?void h.default.error((0,v.default)("events:deleteEvent"),t.result.msg):void E.hashHistory.push({pathname:"/client/profile/posts",query:{uid:e}})})}}function c(e,t,n){return function(r,l){var a=new FormData;return a.append("eid",t),a.append("uid",e),a.append("content",n.content),a.append("title",n.title),a.append("description",n.description),a.append("topics",n.topics),a.append("url",n.url),a.append("event_type",n.event_type),(0,d.default)((0,v.default)("events:editEvent"),{method:"post",body:a}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(e){return"fail"===e.status?void h.default.error((0,v.default)("events:editEvent"),e.result.msg):void E.hashHistory.push({pathname:"/client/blog/view",query:{eid:e.result.eid}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAllTopics=void 0,t.updateEventFields=a,t.loadSingleEvent=o,t.loadComments=i,t.makeComments=u,t.deleteEvent=s,t.updateEventContent=c;var f=n(62),d=l(f),p=n(30),m=n(61),v=l(m),y=n(56),h=l(y),E=n(29),b=n(122),g=r(b);t.loadAllTopics=g.loadAllTopics},559:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{}}function s(e){return{actions:(0,m.bindActionCreators)(y,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),d=l(f),p=n(23),m=n(18),v=n(161),y=r(v),h=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"full-height"},d.default.createElement("div",{className:"fix-top-row-wrapper",style:{paddingTop:"80px"}},d.default.createElement("div",{className:"fix-top-row",style:{height:"80px",background:"#0272A2"}},d.default.createElement("h1",{className:"fc-white capitalize",style:{fontSize:"30px",lineHeight:"80px",marginLeft:"5%"}},"Post")),d.default.createElement("div",{className:"full-height"},this.props.children)))}}]),t}(f.Component);h.propTypes={children:d.default.PropTypes.oneOfType([d.default.PropTypes.string,d.default.PropTypes.element]),location:d.default.PropTypes.object,actions:d.default.PropTypes.object},t.default=(0,p.connect)(u,s)(h)},560:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return f[t.type]?f[t.type](e,t):e}Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(42),u=r(i),s=n(30),c=u.default.fromJS({event:{eid:-1,content:null,islike:!1,likes:0,url:null,title:null,uid:0,description:null,user_name:null,event_type:"blog",topics:[]},topicsList:[],comments:[]}),f=(o={},l(o,s.CLIENT_EVENTS.LOAD_SINGLE_EVENT,function(e,t){return e.update("event",function(e){return e.merge(u.default.fromJS(t.result))})}),l(o,s.CLIENT_EVENTS.LOAD_COMENTS,function(e,t){return e.set("comments",u.default.fromJS(t.result))}),l(o,s.CLIENT_EVENTS.SWITCH_LIKE,function(e,t){return parseInt(t.eid)!==parseInt(e.get("event").get("eid"))?e:e.update("event",function(e){return e.merge(u.default.fromJS({islike:t.isLike,likes:e.get("likes")+(t.isLike?1:-1)}))})}),l(o,s.CLIENT_EVENTS.UPDATE_EVENT_FIELDS,function(e,t){return"string"==typeof t.event?e.update("event",function(e){return e.merge(c.get("event"))}):e.update("event",function(e){return e.merge(u.default.fromJS(t.event))})}),l(o,s.CLIENT_TOPICS.LOAD_TOPIC_LIST,function(e,t){return e.set("topicsList",t.result.map(function(e){return e.topic_name}))}),o);t.default=a},562:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{myInfo:e.clientGeneral.userInfo.toJS(),persistentStore:e.persistentStore.toJS(),store:e.clientEvent.toJS()}}function s(e){return{globalActions:(0,I.bindActionCreators)(D,e),actions:(0,I.bindActionCreators)(A,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=(n(46),n(45)),f=l(c),d=(n(44),n(40)),p=l(d),m=(n(38),n(33)),v=l(m),y=(n(37),n(31)),h=l(y),E=(n(51),n(87)),b=l(E),g=(n(100),n(88)),_=l(g),T=(n(156),n(120)),k=l(T),S=(n(72),n(71)),w=l(S),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),N=n(1),P=l(N),C=n(29),j=n(23),I=n(18),L=n(161),A=r(L),x=n(73),D=r(x),M=n(104),V=w.default.Item,U=k.default.Option,q=_.default.Button,F=_.default.Group,J=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchLike=(0,M.throttle)(n.switchLike,5e3).bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleDelete=n.handleDelete.bind(n),n}return i(t,e),O(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query.eid,t=this.props.persistentStore.userId;this.props.actions.loadAllTopics(t),e>0?this.props.actions.loadSingleEvent(e,t):(this.props.actions.updateEventFields("Reset"),this.props.actions.updateEventFields({uid:t,user_name:this.props.myInfo.userName}))}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.query.eid,n=e.location.query.eid;if(t!=n)if(n>0){var r=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(n,r)}else this.props.actions.updateEventFields("Reset");n<=0&&e.store.event.user_name!==e.myInfo.userName&&this.props.actions.updateEventFields({uid:e.persistentStore.userId,user_name:e.myInfo.userName})}},{key:"switchLike",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"like",n=this.props.persistentStore.userId;this.props.globalActions.switchLike(n,e,t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(e,n){e||t.props.actions.updateEventContent(t.props.persistentStore.userId,t.props.store.event.eid,n)})}},{key:"handleDelete",value:function(){this.props.actions.deleteEvent(this.props.persistentStore.userId,this.props.store.event.eid)}},{key:"render",value:function(){var e=this.props.store,t=e.event,n=e.topicsList,r=this.props.form,l=r.getFieldDecorator,a=r.getFieldValue;return P.default.createElement("div",{className:"full-height",style:{background:"#ECECEC",padding:"0 5%",overflow:"auto"}},P.default.createElement(w.default,{onSubmit:this.handleSubmit,className:"login-form"},P.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},P.default.createElement("div",{className:"fs14"},P.default.createElement(v.default,{type:"flex",align:"bottom"},P.default.createElement(h.default,{span:24},P.default.createElement("div",{className:"captialize fc-dark"},P.default.createElement(V,null,l("title",{initialValue:t.title,rules:[{required:!0,message:"Please input your title!"}]})(P.default.createElement(b.default,{addonBefore:P.default.createElement("h4",null,"Title"),placeholder:"Write your title..."})))))),P.default.createElement("div",{className:"fs12 margB15"},P.default.createElement(C.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:t.uid}}},"@ "+t.user_name)),P.default.createElement("h4",null,"Description :"),P.default.createElement(V,null,l("description",{initialValue:t.description,rules:[{required:!0,message:"Please input your title!"}]})(P.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Write your description..."}))),P.default.createElement("h4",null,"Topics :"),P.default.createElement(V,null,l("topics",{initialValue:t.topics,rules:[]})(P.default.createElement(k.default,{multiple:!0,style:{width:"100%"},placeholder:"Please select"},n.map(function(e){return P.default.createElement(U,{key:e,value:e},e)}))))),P.default.createElement(v.default,null,P.default.createElement(h.default,{span:12},P.default.createElement(V,null,l("event_type",{initialValue:t.event_type,rules:[]})(P.default.createElement(F,{size:"large"},P.default.createElement(q,{value:"blog"},"Blog"),P.default.createElement(q,{value:"picture"},"Image"))))),P.default.createElement(h.default,{span:12},P.default.createElement(V,{className:"text-right"},P.default.createElement(p.default,{onClick:this.handleDelete,style:{marginRight:"20px"}},"Delete"),P.default.createElement(p.default,{type:"primary",htmlType:"submit"},"Submit"))))),P.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"},title:"picture"===a("event_type")?"URL":"Content"},"picture"===a("event_type")?P.default.createElement("div",null,P.default.createElement(V,null,l("url",{initialValue:t.url,rules:[{required:!0,message:"Please input your title!"}]})(P.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Specify the url of picture..."}))),P.default.createElement("div",null,P.default.createElement("img",{alt:"URL Invalid!",width:"100%",src:a("url")}))):P.default.createElement("div",null,P.default.createElement(V,null,l("content",{initialValue:t.content,rules:[{required:!0,message:"Please input your title!"}]})(P.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Write your content..."})))))))}}]),t}(N.Component);J.propTypes={children:P.default.PropTypes.oneOfType([P.default.PropTypes.string,P.default.PropTypes.element]),form:P.default.PropTypes.object,myInfo:P.default.PropTypes.object,location:P.default.PropTypes.object,store:P.default.PropTypes.object,persistentStore:P.default.PropTypes.object,globalActions:P.default.PropTypes.object,actions:P.default.PropTypes.object},t.default=(0,j.connect)(u,s)(w.default.create()(J))},564:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{persistentStore:e.persistentStore.toJS(),comments:e.clientEvent.get("comments").toJS(),event:e.clientEvent.get("event").toJS()}}function s(e){return{globalActions:(0,k.bindActionCreators)(N,e),actions:(0,k.bindActionCreators)(w,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=(n(46),n(45)),f=l(c),d=(n(38),n(33)),p=l(d),m=(n(86),n(32)),v=l(m),y=(n(37),n(31)),h=l(y),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=n(1),g=l(b),_=n(29),T=n(23),k=n(18),S=n(161),w=r(S),O=n(73),N=r(O),P=n(2),C=l(P),j=n(104),I=n(102),L=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchLike=(0,j.throttle)(n.switchLike,5e3).bind(n),n.makeComment=n.makeComment.bind(n),n}return i(t,e),E(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query.eid;if(e>0){var t=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(e,t),this.props.actions.loadComments(e)}}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.query.eid,n=e.location.query.eid;if(t!=n){var r=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(n,r),this.props.actions.loadComments(n)}}},{key:"switchLike",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"like",n=this.props.persistentStore.userId;n>0&&this.props.globalActions.switchLike(n,e,t)}},{key:"makeComment",value:function(e){var t=this.props.persistentStore.userId,n=this.props.event.eid;this.props.actions.makeComments(t,n,e)}},{key:"render",value:function(){var e=this.props.event,t=this.props.comments,n=parseInt(this.props.persistentStore.userId),r=n===parseInt(e.uid),l=0===n;return g.default.createElement("div",{className:"full-height",style:{background:"#ECECEC",padding:"0 5%",overflow:"auto"}},g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("div",{className:"fs14 margB15"},g.default.createElement(p.default,{type:"flex",align:"middle"},g.default.createElement(h.default,{span:20},g.default.createElement("h2",{className:"captialize fc-dark"},e.title)),g.default.createElement(h.default,{span:2},r?g.default.createElement("div",{className:"fs16 pointer"},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/blog/edit",query:{eid:e.eid}}},g.default.createElement(v.default,{type:"edit"})," Edit")):null),g.default.createElement(h.default,{span:2},e.islike?g.default.createElement("div",{className:"fc-blue fs16 pointer"},g.default.createElement(v.default,{type:"like",onClick:this.switchLike.bind(null,e.eid,"cancel_like")})," ",e.likes||0):g.default.createElement("div",{className:"fs16 pointer"},g.default.createElement(v.default,{type:"like",onClick:this.switchLike.bind(null,e.eid,"like")})," ",e.likes))),g.default.createElement("div",{className:"fs12 margB15"},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:e.uid}}},"@ "+e.user_name)),g.default.createElement("p",null,e.description))),"picture"===e.event_type?g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("img",{alt:"example",width:"100%",src:e.url})):g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("p",{className:"fs20"},e.content)),g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},t.map(function(e){return g.default.createElement("div",{key:e.timestamp,className:"margB30"},g.default.createElement(p.default,{type:"flex",align:"middle"},g.default.createElement(h.default,{span:2,style:{fontSize:"25px"}},g.default.createElement(v.default,{type:"aliwangwang"})),g.default.createElement(h.default,{span:22},g.default.createElement("p",{className:"fs16"},e.content),g.default.createElement("div",null,g.default.createElement("b",{className:"inline-mid fs14",style:{minWidth:"400px"}},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:e.uid}}},"@ "+e.user_name)),g.default.createElement("p",{className:"inline-mid"},(0,C.default)(e.timestamp).fromNow())))))}),l?null:g.default.createElement(I.Comment,{onSubmit:this.makeComment})))}}]),t}(b.Component);L.propTypes={children:g.default.PropTypes.oneOfType([g.default.PropTypes.string,g.default.PropTypes.element]),location:g.default.PropTypes.object,event:g.default.PropTypes.object,comments:g.default.PropTypes.array,persistentStore:g.default.PropTypes.object,globalActions:g.default.PropTypes.object,actions:g.default.PropTypes.object},t.default=(0,T.connect)(u,s)(L)}});
//# sourceMappingURL=3.blog.chunk.2de347a7edadb5596db0.js.map