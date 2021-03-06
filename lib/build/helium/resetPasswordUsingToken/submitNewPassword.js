"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _core = require("@emotion/core");

var _styleContext = _interopRequireDefault(
    require("supertokens-auth-react/lib/build/recipe/emailpassword/components/styles/styleContext")
);

var _library = require("supertokens-auth-react/lib/build/recipe/emailpassword/components/library");

var _FormBase = _interopRequireDefault(
    require("supertokens-auth-react/lib/build/recipe/emailpassword/components/library/FormBase")
);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();
    _getRequireWildcardCache = function _getRequireWildcardCache() {
        return cache;
    };
    return cache;
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || (_typeof(obj) !== "object" && typeof obj !== "function")) {
        return { default: obj };
    }
    var cache = _getRequireWildcardCache();
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj["default"] = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
          };
    return _getPrototypeOf(o);
}

/*
 * Component.
 */
var SubmitNewPasswordTheme = /*#__PURE__*/ (function(_PureComponent) {
    _inherits(SubmitNewPasswordTheme, _PureComponent);

    var _super = _createSuper(SubmitNewPasswordTheme);

    /*
     * Constructor.
     */
    function SubmitNewPasswordTheme(props) {
        var _this;

        _classCallCheck(this, SubmitNewPasswordTheme);

        _this = _super.call(this, props);

        _this.onSuccess = function() {
            _this.setState(function(oldState) {
                return _objectSpread(
                    _objectSpread({}, oldState),
                    {},
                    {
                        hasNewPassword: true
                    }
                );
            });

            if (_this.props.onSuccess !== undefined) {
                _this.props.onSuccess();
            }
        };

        _this.state = {
            hasNewPassword: false
        };
        return _this;
    }

    _createClass(SubmitNewPasswordTheme, [
        {
            key: "render",

            /*
             * Render.
             */
            value: function render() {
                var styles = this.context;
                var _this$props = this.props,
                    callAPI = _this$props.callAPI,
                    onSignInClicked = _this$props.onSignInClicked,
                    formFields = _this$props.formFields;
                var hasNewPassword = this.state.hasNewPassword;

                if (hasNewPassword === true) {
                    return (0, _core.jsx)(
                        "div",
                        {
                            className: "container",
                            css: styles.container
                        },
                        (0, _core.jsx)(
                            "div",
                            {
                                className: "row",
                                css: styles.row
                            },
                            (0, _core.jsx)(
                                "div",
                                {
                                    className: "headerTitle",
                                    css: styles.headerTitle
                                },
                                "Success!"
                            ),
                            (0, _core.jsx)(
                                _library.FormRow,
                                {
                                    key: "form-button"
                                },
                                (0, _core.jsx)(
                                    React.Fragment,
                                    null,
                                    (0, _core.jsx)(
                                        "div",
                                        {
                                            className: "primaryText successMessageSubmitNewPassword",
                                            css: [styles.primaryText, styles.successMessageSubmitNewPassword]
                                        },
                                        "Your password has been updated successfully"
                                    ),
                                    (0, _core.jsx)(_library.Button, {
                                        disabled: false,
                                        isLoading: false,
                                        type: "button",
                                        onClick: onSignInClicked,
                                        label: "SIGN IN"
                                    })
                                )
                            )
                        )
                    );
                } // Otherwise, dispaly reset password form.

                return (0, _core.jsx)(_FormBase["default"], {
                    formFields: formFields,
                    buttonLabel: "Change password",
                    onSuccess: this.onSuccess,
                    callAPI: callAPI,
                    showLabels: false,
                    validateOnBlur: true,
                    header: (0, _core.jsx)(
                        React.Fragment,
                        null,
                        (0, _core.jsx)(
                            "div",
                            {
                                className: "headerTitle",
                                css: styles.headerTitle
                            },
                            "Change your password"
                        ),
                        (0, _core.jsx)(
                            "div",
                            {
                                className: "headerSubtitle",
                                css: styles.headerSubTitle
                            },
                            (0, _core.jsx)(
                                "div",
                                {
                                    className: "secondaryText",
                                    css: styles.secondaryText
                                },
                                "Enter a new password below to change your password"
                            )
                        )
                    )
                });
            }
        }
    ]);

    return SubmitNewPasswordTheme;
})(React.PureComponent);

exports["default"] = SubmitNewPasswordTheme;
SubmitNewPasswordTheme.contextType = _styleContext["default"];
