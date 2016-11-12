webpackJsonp([4],{122:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(){return function(e,t){return(0,i.default)((0,c.default)("topics:getAllTopics")).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(t){return"fail"===t.status?void d.default.error((0,c.default)("topics:getAllTopics"),t.result.msg):void e({type:u.CLIENT_TOPICS.LOAD_TOPIC_LIST,status:t.status,result:t.result.sort(function(e,t){return t.count-e.count})})})}}function a(e,t){return function(n,r){return(0,i.default)((0,c.default)("topics:getAllEventsOfTopic",e,t)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(r){return"fail"===r.status?void d.default.error((0,c.default)("topics:getAllEventsOfTopic",e,t),r.result.msg):void n({type:u.CLIENT_TOPICS.LOAD_EVENT_LIST,status:r.status,result:{topic:e,eventsList:r.result.sort(function(e,t){return t.likes-e.likes})}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAllTopics=l,t.loadAllEventsOfTopics=a;var o=n(62),i=r(o),u=n(30),s=n(61),c=r(s),f=n(56),d=r(f)},164:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return{type:p.CLIENT_EVENTS.UPDATE_EVENT_FIELDS,event:e}}function o(e,t){return function(n,r){return(0,d.default)((0,v.default)("events:getSingleEvent",e,t)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(r){return"fail"===r.status?void h.default.error((0,v.default)("events:getSingleEvent",e,t),r.result.msg):void n({type:p.CLIENT_EVENTS.LOAD_SINGLE_EVENT,status:r.status,result:r.result})})}}function i(e){return function(t,n){return(0,d.default)((0,v.default)("events:getComments",e)).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(n){return"fail"===n.status?void h.default.error((0,v.default)("events:getComments",e),n.result.msg):void t({type:p.CLIENT_EVENTS.LOAD_COMENTS,status:n.status,result:n.result.sort(function(e,t){return e.timestamp-t.timestamp})})})}}function u(e,t,n){return function(r,l){var a=new FormData;return a.append("content",n),a.append("eid",t),a.append("uid",e),(0,d.default)((0,v.default)("events:createComments"),{method:"post",body:a}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(e){return"fail"===e.status?void h.default.error((0,v.default)("events:createComments"),e.result.msg):void r(i(t))})}}function s(e,t){return function(n,r){var l=new FormData;return l.append("uid",e),l.append("eid",t),(0,d.default)((0,v.default)("events:deleteEvent"),{method:"post",body:l}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(t){return"fail"===t.status?void h.default.error((0,v.default)("events:deleteEvent"),t.result.msg):void E.hashHistory.push({pathname:"/client/profile/posts",query:{uid:e}})})}}function c(e,t,n){return function(r,l){var a=new FormData;return a.append("eid",t),a.append("uid",e),a.append("content",n.content),a.append("title",n.title),a.append("description",n.description),a.append("topics",n.topics),a.append("url",n.url),a.append("event_type",n.event_type),(0,d.default)((0,v.default)("events:editEvent"),{method:"post",body:a}).then(function(e){return e.json()}).catch(function(){return{status:"fail",result:{msg:"Network Unavailable!"}}}).then(function(e){return"fail"===e.status?void h.default.error((0,v.default)("events:editEvent"),e.result.msg):void E.hashHistory.push({pathname:"/client/blog/view",query:{eid:e.result.eid}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.loadAllTopics=void 0,t.updateEventFields=a,t.loadSingleEvent=o,t.loadComments=i,t.makeComments=u,t.deleteEvent=s,t.updateEventContent=c;var f=n(62),d=l(f),p=n(30),m=n(61),v=l(m),y=n(56),h=l(y),E=n(29),b=n(122),g=r(b);t.loadAllTopics=g.loadAllTopics},561:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{}}function s(e){return{actions:(0,m.bindActionCreators)(y,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(1),d=l(f),p=n(23),m=n(18),v=n(164),y=r(v),h=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"render",value:function(){return d.default.createElement("div",{className:"full-height"},d.default.createElement("div",{className:"fix-top-row-wrapper",style:{paddingTop:"80px"}},d.default.createElement("div",{className:"fix-top-row",style:{height:"80px",background:"#0272A2"}},d.default.createElement("h1",{className:"fc-white capitalize",style:{fontSize:"30px",lineHeight:"80px",marginLeft:"5%"}},"Post")),d.default.createElement("div",{className:"full-height"},this.props.children)))}}]),t}(f.Component);h.propTypes={children:d.default.PropTypes.oneOfType([d.default.PropTypes.string,d.default.PropTypes.element]),location:d.default.PropTypes.object,actions:d.default.PropTypes.object},t.default=(0,p.connect)(u,s)(h)},562:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return f[t.type]?f[t.type](e,t):e}Object.defineProperty(t,"__esModule",{value:!0});var o,i=n(42),u=r(i),s=n(30),c=u.default.fromJS({event:{eid:-1,content:null,islike:!1,likes:0,url:null,title:null,uid:0,description:null,user_name:null,event_type:"blog",topics:[]},topicsList:[],comments:[]}),f=(o={},l(o,s.CLIENT_EVENTS.LOAD_SINGLE_EVENT,function(e,t){return e.update("event",function(e){return e.merge(u.default.fromJS(t.result))})}),l(o,s.CLIENT_EVENTS.LOAD_COMENTS,function(e,t){return e.set("comments",u.default.fromJS(t.result))}),l(o,s.CLIENT_EVENTS.SWITCH_LIKE,function(e,t){return parseInt(t.eid)!==parseInt(e.get("event").get("eid"))?e:e.update("event",function(e){return e.merge(u.default.fromJS({islike:t.isLike,likes:e.get("likes")+(t.isLike?1:-1)}))})}),l(o,s.CLIENT_EVENTS.UPDATE_EVENT_FIELDS,function(e,t){return"string"==typeof t.event?e.update("event",function(e){return e.merge(c.get("event"))}):e.update("event",function(e){return e.merge(u.default.fromJS(t.event))})}),l(o,s.CLIENT_TOPICS.LOAD_TOPIC_LIST,function(e,t){return e.set("topicsList",t.result.map(function(e){return e.topic_name}))}),o);t.default=a},564:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{myInfo:e.clientGeneral.userInfo.toJS(),persistentStore:e.persistentStore.toJS(),store:e.clientEvent.toJS()}}function s(e){return{globalActions:(0,I.bindActionCreators)(D,e),actions:(0,I.bindActionCreators)(A,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=(n(45),n(44)),f=l(c),d=(n(46),n(43)),p=l(d),m=(n(38),n(34)),v=l(m),y=(n(37),n(32)),h=l(y),E=(n(51),n(87)),b=l(E),g=(n(101),n(88)),_=l(g),T=(n(159),n(120)),k=l(T),S=(n(73),n(72)),w=l(S),N=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),P=n(1),O=l(P),C=n(29),j=n(23),I=n(18),L=n(164),A=r(L),x=n(90),D=r(x),M=n(104),V=w.default.Item,q=k.default.Option,F=_.default.Button,J=_.default.Group,U=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchLike=(0,M.throttle)(n.switchLike,5e3).bind(n),n.handleSubmit=n.handleSubmit.bind(n),n.handleDelete=n.handleDelete.bind(n),n}return i(t,e),N(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query.eid,t=this.props.persistentStore.userId;this.props.actions.loadAllTopics(),e>0?this.props.actions.loadSingleEvent(e,t):(this.props.actions.updateEventFields("Reset"),this.props.actions.updateEventFields({uid:t,user_name:this.props.myInfo.userName}))}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.query.eid,n=e.location.query.eid;if(t!=n)if(n>0){var r=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(n,r)}else this.props.actions.updateEventFields("Reset");n<=0&&e.store.event.user_name!==e.myInfo.userName&&this.props.actions.updateEventFields({uid:e.persistentStore.userId,user_name:e.myInfo.userName})}},{key:"switchLike",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"like",n=this.props.persistentStore.userId;this.props.globalActions.switchLike(n,e,t)}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault(),this.props.form.validateFields(function(e,n){e||(console.log(n),t.props.actions.updateEventContent(t.props.persistentStore.userId,t.props.store.event.eid,n))})}},{key:"handleDelete",value:function(){this.props.actions.deleteEvent(this.props.persistentStore.userId,this.props.store.event.eid)}},{key:"render",value:function(){var e=this.props.store,t=e.event,n=e.topicsList,r=this.props.form,l=r.getFieldDecorator,a=r.getFieldValue;return O.default.createElement("div",{className:"full-height",style:{background:"#ECECEC",padding:"0 5%",overflow:"auto"}},O.default.createElement(w.default,{onSubmit:this.handleSubmit,className:"login-form"},O.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},O.default.createElement("div",{className:"fs14"},O.default.createElement(v.default,{type:"flex",align:"bottom"},O.default.createElement(h.default,{span:24},O.default.createElement("div",{className:"captialize fc-dark"},O.default.createElement(V,null,l("title",{initialValue:t.title,rules:[{required:!0,message:"Please input your title!"}]})(O.default.createElement(b.default,{addonBefore:O.default.createElement("h4",null,"Title"),placeholder:"Write your title..."})))))),O.default.createElement("div",{className:"fs12 margB15"},O.default.createElement(C.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:t.uid}}},"@ "+t.user_name)),O.default.createElement("h4",null,"Description :"),O.default.createElement(V,null,l("description",{initialValue:t.description,rules:[{required:!0,message:"Please input your title!"}]})(O.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Write your description..."}))),O.default.createElement("h4",null,"Topics :"),O.default.createElement(V,null,l("topics",{initialValue:t.topics,rules:[]})(O.default.createElement(k.default,{multiple:!0,style:{width:"100%"},placeholder:"Please select"},n.map(function(e){return O.default.createElement(q,{key:e,value:e},e)}))))),O.default.createElement(v.default,null,O.default.createElement(h.default,{span:12},O.default.createElement(V,null,l("event_type",{initialValue:t.event_type,rules:[]})(O.default.createElement(J,{size:"large"},O.default.createElement(F,{value:"blog"},"Blog"),O.default.createElement(F,{value:"picture"},"Image"))))),O.default.createElement(h.default,{span:12},O.default.createElement(V,{className:"text-right"},O.default.createElement(p.default,{onClick:this.handleDelete,style:{marginRight:"20px"}},"Delete"),O.default.createElement(p.default,{type:"primary",htmlType:"submit"},"Submit"))))),O.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"},title:"picture"===a("event_type")?"URL":"Content"},"picture"===a("event_type")?O.default.createElement("div",null,O.default.createElement(V,null,l("url",{initialValue:t.url,rules:[{required:!0,message:"Please input your title!"}]})(O.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Specify the url of picture..."}))),O.default.createElement("div",null,O.default.createElement("img",{alt:"URL Invalid!",width:"100%",src:a("url")}))):O.default.createElement("div",null,O.default.createElement(V,null,l("content",{initialValue:t.content,rules:[{required:!0,message:"Please input your title!"}]})(O.default.createElement(b.default,{type:"textarea",rows:4,placeholder:"Write your content..."})))))))}}]),t}(P.Component);U.propTypes={children:O.default.PropTypes.oneOfType([O.default.PropTypes.string,O.default.PropTypes.element]),form:O.default.PropTypes.object,myInfo:O.default.PropTypes.object,location:O.default.PropTypes.object,store:O.default.PropTypes.object,persistentStore:O.default.PropTypes.object,globalActions:O.default.PropTypes.object,actions:O.default.PropTypes.object},t.default=(0,j.connect)(u,s)(w.default.create()(U))},566:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return{persistentStore:e.persistentStore.toJS(),comments:e.clientEvent.get("comments").toJS(),event:e.clientEvent.get("event").toJS()}}function s(e){return{globalActions:(0,k.bindActionCreators)(P,e),actions:(0,k.bindActionCreators)(w,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=(n(45),n(44)),f=l(c),d=(n(38),n(34)),p=l(d),m=(n(86),n(33)),v=l(m),y=(n(37),n(32)),h=l(y),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),b=n(1),g=l(b),_=n(29),T=n(23),k=n(18),S=n(164),w=r(S),N=n(90),P=r(N),O=n(2),C=l(O),j=n(104),I=n(102),L=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.switchLike=(0,j.throttle)(n.switchLike,5e3).bind(n),n.makeComment=n.makeComment.bind(n),n}return i(t,e),E(t,[{key:"componentWillMount",value:function(){var e=this.props.location.query.eid;if(e>0){var t=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(e,t),this.props.actions.loadComments(e)}}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.location.query.eid,n=e.location.query.eid;if(t!=n){var r=this.props.persistentStore.userId;this.props.actions.loadSingleEvent(n,r),this.props.actions.loadComments(n)}}},{key:"switchLike",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"like",n=this.props.persistentStore.userId;n>0&&this.props.globalActions.switchLike(n,e,t)}},{key:"makeComment",value:function(e){var t=this.props.persistentStore.userId,n=this.props.event.eid;this.props.actions.makeComments(t,n,e)}},{key:"render",value:function(){var e=this.props.event,t=this.props.comments,n=parseInt(this.props.persistentStore.userId),r=n===parseInt(e.uid),l=0===n;return g.default.createElement("div",{className:"full-height",style:{background:"#ECECEC",padding:"0 5%",overflow:"auto"}},g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("div",{className:"fs14 margB15"},g.default.createElement(p.default,{type:"flex",align:"middle"},g.default.createElement(h.default,{span:20},g.default.createElement("h2",{className:"captialize fc-dark"},e.title)),g.default.createElement(h.default,{span:2},r?g.default.createElement("div",{className:"fs16 pointer"},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/blog/edit",query:{eid:e.eid}}},g.default.createElement(v.default,{type:"edit"})," Edit")):null),g.default.createElement(h.default,{span:2},e.islike?g.default.createElement("div",{className:"fc-blue fs16 pointer"},g.default.createElement(v.default,{type:"like",onClick:this.switchLike.bind(null,e.eid,"cancel_like")})," ",e.likes||0):g.default.createElement("div",{className:"fs16 pointer"},g.default.createElement(v.default,{type:"like",onClick:this.switchLike.bind(null,e.eid,"like")})," ",e.likes))),g.default.createElement("div",{className:"fs12 margB15"},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:e.uid}}},"@ "+e.user_name)),g.default.createElement("p",null,e.description))),"picture"===e.event_type?g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("img",{alt:"example",width:"100%",src:e.url})):g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},g.default.createElement("p",{className:"fs20"},e.content)),g.default.createElement(f.default,{bordered:!0,style:{margin:"30px 0"}},t.map(function(e){return g.default.createElement("div",{key:e.timestamp,className:"margB30"},g.default.createElement(p.default,{type:"flex",align:"middle"},g.default.createElement(h.default,{span:2,style:{fontSize:"25px"}},g.default.createElement(v.default,{type:"aliwangwang"})),g.default.createElement(h.default,{span:22},g.default.createElement("p",{className:"fs16"},e.content),g.default.createElement("div",null,g.default.createElement("b",{className:"inline-mid fs14",style:{minWidth:"400px"}},g.default.createElement(_.Link,{className:"fc-dark",to:{pathname:"/client/profile/info",query:{uid:e.uid}}},"@ "+e.user_name)),g.default.createElement("p",{className:"inline-mid"},(0,C.default)(e.timestamp).fromNow())))))}),l?null:g.default.createElement(I.Comment,{onSubmit:this.makeComment})))}}]),t}(b.Component);L.propTypes={children:g.default.PropTypes.oneOfType([g.default.PropTypes.string,g.default.PropTypes.element]),location:g.default.PropTypes.object,event:g.default.PropTypes.object,comments:g.default.PropTypes.array,persistentStore:g.default.PropTypes.object,globalActions:g.default.PropTypes.object,actions:g.default.PropTypes.object},t.default=(0,T.connect)(u,s)(L)}});
//# sourceMappingURL=4.blog.chunk.f787ee165f8391cbf493.js.map