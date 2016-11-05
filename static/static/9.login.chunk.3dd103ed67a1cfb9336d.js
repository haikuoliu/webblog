webpackJsonp([9],{

/***/ 477:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _style = __webpack_require__(79);
	
	var _row = __webpack_require__(78);
	
	var _row2 = _interopRequireDefault(_row);
	
	var _style2 = __webpack_require__(76);
	
	var _col = __webpack_require__(75);
	
	var _col2 = _interopRequireDefault(_col);
	
	var _style3 = __webpack_require__(74);
	
	var _card = __webpack_require__(73);
	
	var _card2 = _interopRequireDefault(_card);
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(34);
	
	var _redux = __webpack_require__(14);
	
	var _action = __webpack_require__(45);
	
	var PersistentActions = _interopRequireWildcard(_action);
	
	var _reactRouter = __webpack_require__(21);
	
	var _reactCssModules = __webpack_require__(89);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _style4 = __webpack_require__(838);
	
	var _style5 = _interopRequireDefault(_style4);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var LoginApp = function (_Component) {
	  _inherits(LoginApp, _Component);
	
	  function LoginApp(props) {
	    _classCallCheck(this, LoginApp);
	
	    var _this = _possibleConstructorReturn(this, (LoginApp.__proto__ || Object.getPrototypeOf(LoginApp)).call(this, props));
	
	    _this.login = _this.login.bind(_this);
	    return _this;
	  }
	
	  _createClass(LoginApp, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.props.persistentActions.persistentClear();
	    }
	  }, {
	    key: 'login',
	    value: function login(type) {
	      if (type === 'client') {
	        this.props.persistentActions.persistentSet('userId', 2);
	        this.props.router.push('/client/feed');
	      } else {
	        // type === 'ads'
	        this.props.persistentActions.persistentSet('sponsorId', 1);
	        this.props.router.push('/ads');
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: 'absolute-center-container', style: { height: '98vh', width: '100%' } },
	          _react2.default.createElement(
	            'div',
	            { className: 'absolute-center', style: { width: '100%', height: '40%' } },
	            _react2.default.createElement(
	              _row2.default,
	              { style: { height: '100%' } },
	              _react2.default.createElement(
	                _col2.default,
	                { span: 8, offset: 3, className: 'full-height pointer' },
	                _react2.default.createElement(
	                  _card2.default,
	                  {
	                    className: 'full',
	                    style: { height: '95%' },
	                    bodyStyle: { padding: 0, height: '100%' },
	                    onClick: this.login.bind(null, 'client')
	                  },
	                  _react2.default.createElement('div', { styleName: 'custom-image1' }),
	                  _react2.default.createElement(
	                    'div',
	                    { styleName: 'custom-card' },
	                    _react2.default.createElement(
	                      'h1',
	                      { style: { color: '#2db7f5' } },
	                      'Client'
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'fs16' },
	                      'www.instagram.com'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                _col2.default,
	                { span: 8, offset: 1, className: 'full-height pointer' },
	                _react2.default.createElement(
	                  _card2.default,
	                  {
	                    className: 'full',
	                    style: { height: '95%' },
	                    bodyStyle: { padding: 0, height: '100%' },
	                    onClick: this.login.bind(null, 'ads')
	                  },
	                  _react2.default.createElement('div', { styleName: 'custom-image2' }),
	                  _react2.default.createElement(
	                    'div',
	                    { styleName: 'custom-card' },
	                    _react2.default.createElement(
	                      'h1',
	                      null,
	                      _react2.default.createElement(
	                        _reactRouter.Link,
	                        { to: '/ads' },
	                        'Ads'
	                      )
	                    ),
	                    _react2.default.createElement(
	                      'p',
	                      { className: 'fs16' },
	                      'www.instagram.com'
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return LoginApp;
	}(_react.Component);
	
	LoginApp.propTypes = {
	  router: _react2.default.PropTypes.object,
	  // state: React.PropTypes.object,
	  persistentActions: _react2.default.PropTypes.object
	};
	
	function mapState(state) {
	  // eslint-disable-line
	  return {
	    // state: state.blog.BlogContent
	  };
	}
	
	function mapDispatch(dispatch) {
	  return {
	    persistentActions: (0, _redux.bindActionCreators)(PersistentActions, dispatch)
	  };
	}
	
	exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)((0, _reactCssModules2.default)(LoginApp, _style5.default));

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".style__custom-image1___2bcAJ{\r\n  background: url(" + __webpack_require__(846) + ");\r\n}\r\n.style__custom-image2___3s5KK{\r\n  background: url(" + __webpack_require__(845) + ");\r\n}\r\n.style__custom-image1___2bcAJ,\r\n.style__custom-image2___3s5KK {\r\n  height: 70%;\r\n  overflow: hidden;\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n\r\n\r\n.style__custom-card___26oF5 {\r\n  height:30%;\r\n  padding: 10px 16px;\r\n}\r\n.style__custom-card___26oF5 p {\r\n  color: #999;\r\n}\r\n", ""]);
	
	// exports
	exports.locals = {
		"custom-image1": "style__custom-image1___2bcAJ",
		"custom-image2": "style__custom-image2___3s5KK",
		"custom-card": "style__custom-card___26oF5"
	};

/***/ },

/***/ 838:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(550);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(20)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./style.hcss", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./style.hcss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 845:
/***/ function(module, exports) {


/***/ },

/***/ 846:
/***/ function(module, exports) {


/***/ }

});
//# sourceMappingURL=9.login.chunk.3dd103ed67a1cfb9336d.js.map