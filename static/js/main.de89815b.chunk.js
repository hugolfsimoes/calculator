(this.webpackJsonpcalculadora=this.webpackJsonpcalculadora||[]).push([[0],[,function(_,e,t){"use strict";t.d(e,"a",(function(){return s}));t(2),t(19);var a=t(0);function s(_){var e="button ";return e+=_.operation?"operation":"",e+=_.double?"double":"",e+=_.triple?"triple":"",Object(a.jsx)("button",{onClick:function(e){return _.click(_.label)},className:e,children:_.label})}},,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(10),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(3),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(13),_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(12),react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__),_Components_Button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(1),_Components_Display__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(11),_Calculator_css__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(22),_Calculator_css__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_10__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__),initialState={displayValue:"0",clearDisplay:!1,operation:null,values:[0,0],current:0},Calculator=function(_Component){Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(Calculator,_Component);var _super=Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_6__.a)(Calculator);function Calculator(_){var e;return Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.a)(this,Calculator),(e=_super.call(this,_)).state=Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState),e.clearMemory=e.clearMemory.bind(Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.setOperation=e.setOperation.bind(Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e.addDigit=e.addDigit.bind(Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(e)),e}return Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,[{key:"clearMemory",value:function(){this.setState(Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},initialState))}},{key:"setOperation",value:function setOperation(operation){if(0===this.state.current)this.setState({operation:operation,current:1,clearDisplay:!0});else{var equals="="===operation,currentOperation=this.state.operation,values=Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);try{values[0]=eval("".concat(values[0]," ").concat(currentOperation," ").concat(values[1]))}catch(error){values[0]=this.state.values[0]}values[1]=0,this.setState({displayValue:values[0],operation:equals?null:operation,current:equals?0:1,clearDisplay:!equals,values:values})}}},{key:"addDigit",value:function(_){if("."!==_||!this.state.displayValue.includes(".")){var e=("0"===this.state.displayValue||this.state.clearDisplay?"":this.state.displayValue)+_;if(this.setState({displayValue:e,clearDisplay:!1}),"."!==_){var t=this.state.current,a=+e,s=Object(_home_hugolfsimoes_udemy_curso_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.a)(this.state.values);s[t]=a,this.setState({values:s})}}}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Display__WEBPACK_IMPORTED_MODULE_9__.a,{value:this.state.displayValue}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"AC",click:this.clearMemory,triple:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"/",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"7",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"8",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"9",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"*",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"4",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"5",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"6",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"-",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"1",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"2",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"3",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"+",click:this.setOperation,operation:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"0",click:this.addDigit,double:!0}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:".",click:this.addDigit}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_Components_Button__WEBPACK_IMPORTED_MODULE_8__.a,{label:"=",click:this.setOperation,operation:!0})]})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_7__.Component)},,,function(_,e,t){"use strict";t.d(e,"a",(function(){return s}));t(2),t(21);var a=t(0);function s(_){return Object(a.jsx)("div",{className:"display",children:_.value})}},,,,,,,function(_,e,t){},function(_,e,t){},,function(_,e,t){},function(_,e,t){},function(_,e,t){"use strict";t.r(e);var a=t(2),s=t.n(a),r=t(7),o=t.n(r),l=(t(18),t(8)),c=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(e){var t=e.getCLS,a=e.getFID,s=e.getFCP,r=e.getLCP,o=e.getTTFB;t(_),a(_),s(_),r(_),o(_)}))},u=t(0);o.a.render(Object(u.jsxs)(s.a.StrictMode,{children:[Object(u.jsx)("h1",{children:"Calculator"}),Object(u.jsx)(l.a,{})]}),document.getElementById("root")),c()}],[[23,1,2]]]);
//# sourceMappingURL=main.de89815b.chunk.js.map