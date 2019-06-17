webpackJsonp([2],{139:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(72),a=(r(55),i(r(140))),o=i(r(141)),u=r(142);function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.combineReducers)(Object.assign({},a.default,{categoryFilter:u.categoryFilterReducer})),c=(0,n.compose)(n.applyMiddleware.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o.default)),function(e){return e});t.default=(0,n.createStore)(l,{},c)},140:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=r(55),o=r(70);t.default=n({},a.UMS.reducers,a.Forms.reducers,a.Search.reducers,a.Publications.reducers,a.Members.reducers,{visibilityFilter:o.visibilityFilterReducer})},141:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(121);t.default=n.middlewares},142:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.categoryFilterReducer=void 0;var n=r(143);t.categoryFilterReducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case"RECEIVE_FETCH_DATA":return"getContents"===t.requestId&&t.data&&t.data.length&&("talks"===t.data[0].type||"speakers"===t.data[0].type||"abstracts"===t.data[0].type)?(0,n.transformContentsToCategoryFilter)(t.data):e;default:return e}}},143:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.transformContentsToCategoryFilter=function(e){if(!e&&!e.length)return[];var t=[];return e.filter(function(t){return t.type===e[0].type}).forEach(function(e){e&&e.data&&e.data.attributes&&e.data.attributes.categories_list&&e.data.attributes.categories_list.forEach(function(e){e.category_txt&&!t.includes(e.category_txt)&&t.push(e.category_txt)})}),t.sort()},t.truncateString=function(e,t){if(e&&e.length<=t)return e;var r=e.substring(0,t+1),n=/[\s,.]$/.test(r)?t:r.lastIndexOf(" ");return r.substring(0,n)+"..."}},2938:function(e,t,r){r(204),e.exports=r(2939)},2939:function(e,t,r){"use strict";var n=c(r(0)),a=c(r(24)),o=r(17),u=r(55),i=c(r(2940)),l=c(r(2941));function c(e){return e&&e.__esModule?e:{default:e}}var s=r(139).default,d=u.Core.initApolloClient(!0,s);window.UMS_CONFIG&&u.UMS.setConfig(window.UMS_CONFIG),u.UMS.getUserInfo()(s.dispatch);var f=document.getElementById("app-user-services");f&&a.default.render(n.default.createElement(u.Provider,{store:s,client:d},n.default.createElement(o.Router,{history:o.hashHistory},n.default.createElement(u.UMS.Route,{path:"/dashboard",component:i.default}),n.default.createElement(u.UMS.BaseRoutes,null))),f);var p=document.getElementById("app-user-nav");if(p&&a.default.render(n.default.createElement(u.Provider,{store:s,client:d},n.default.createElement(u.UMS.Components.UserNavMenu,{rootPath:"/user"})),p),u.Core.getConfig().CMUI_ENABLED){var y=document.getElementById("editButton");y&&a.default.render(n.default.createElement(u.Core.Provider,{store:s,client:d},n.default.createElement(u.Core.Components.ContentPageWrapper,{viewDOM:y.innerHTML,rootPath:"/user/#/dashboard",eventKey:3,path:y.getAttribute("data-path"),isPublic:y.getAttribute("data-is-public")})),y)}var m=document.getElementById("private-file-container");m&&a.default.render(n.default.createElement(u.Core.Provider,{store:s,client:d},n.default.createElement(l.default,{fileSrc:m.getAttribute("data-src")})),m)},2940:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(0)),o=(c(r(1)),r(117)),u=r(17),i=r(55),l=r(35);function c(e){return e&&e.__esModule?e:{default:e}}var s=i.Core.Components.Dashboard,d=i.Core.Dashboard.ContentManagementDashboard,f=i.UMS.Dashboard,p=f.AdminSiteConfigDashboard,y=f.AdminUserDashboard,m=f.UserAccountDashboard,b=i.Forms.Dashboard,v=b.AdminCaseManagementDashboard,h=b.FormBuilderDashboard,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=i.Core.getConfig();return a.default.createElement(s,{id:"forms-user-dashboard",className:"clearfix",defaultActiveKey:2.1,rootPath:"dashboard"},a.default.createElement(s.Menus,{id:"user-dashboard-menu"},a.default.createElement(m.Menu,{eventKey:2}),e.CMUI_ENABLED&&a.default.createElement(d.Menu,{eventKey:3}),e.FORM_ENABLED&&a.default.createElement(h.Menu,{eventKey:4}),e.FORM_ENABLED&&a.default.createElement(v.Menu,{eventKey:5}),a.default.createElement(p.Menu,{eventKey:6}),a.default.createElement(y.Menu,{eventKey:7})),a.default.createElement(s.Contents,{id:"user-dashboard-content"},a.default.createElement(m.Content,{eventKey:2}),e.CMUI_ENABLED&&a.default.createElement(d.Content,{eventKey:3}),e.FORM_ENABLED&&a.default.createElement(h.Content,{eventKey:4,caseManagementKey:5}),e.FORM_ENABLED&&a.default.createElement(v.Content,{eventKey:5,formBuilderKey:4}),a.default.createElement(p.Content,{eventKey:6}),a.default.createElement(y.Content,{eventKey:7})))}}]),t}();t.default=(0,u.withRouter)((0,o.connect)(function(e){return{isAdmin:(0,l.isAdminSelector)(e)}})(g))},2941:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=c(r(0)),o=r(3),u=r(35),i=r(117),l=c(r(1));function c(e){return e&&e.__esModule?e:{default:e}}var s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.loggedIn,r=e.fileSrc;return a.default.createElement("div",{className:"container",style:{padding:"60px"}},t?a.default.createElement("div",null,a.default.createElement("iframe",{src:"//docs.google.com/gview?embedded=true&url="+r,width:"100%",height:"800px"}),a.default.createElement("a",{href:r},"Download")):a.default.createElement("p",null,"Sorry, you don't have permission to access this page."))}}]),t}();s.propTypes={loggedIn:l.default.bool,fileSrc:l.default.string},t.default=(0,o.injectIntl)((0,i.connect)(function(e){return{loggedIn:(0,u.loggedinSelector)(e)}},{})(s))}},[2938]);