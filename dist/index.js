"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
// src/index.ts
var src_exports = {};
__export(src_exports, {
    PromiseButton: function() {
        return PromiseButton;
    },
    cn: function() {
        return cn;
    }
});
module.exports = __toCommonJS(src_exports);
// src/components/PromiseButton.tsx
var import_react = require("react");
var import_framer_motion = require("framer-motion");
var import_lucide_react = require("lucide-react");
// src/utils/cn.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
// src/components/PromiseButton.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var PromiseButton = function(param) {
    var onClickPromise = param.onClickPromise, _param_label = param.label, label = _param_label === void 0 ? "Submit" : _param_label, _param_confirm = param.confirm, confirm = _param_confirm === void 0 ? false : _param_confirm, className = param.className, _param_disabled = param.disabled, disabled = _param_disabled === void 0 ? false : _param_disabled, loadingComponent = param.loadingComponent, successComponent = param.successComponent, errorComponent = param.errorComponent, confirmComponent = param.confirmComponent, _param_backgroundColor = param.backgroundColor, backgroundColor = _param_backgroundColor === void 0 ? "default" : _param_backgroundColor, _param_loadingBackgroundColor = param.loadingBackgroundColor, loadingBackgroundColor = _param_loadingBackgroundColor === void 0 ? "loading-default" : _param_loadingBackgroundColor, _param_successBackgroundColor = param.successBackgroundColor, successBackgroundColor = _param_successBackgroundColor === void 0 ? "success-default" : _param_successBackgroundColor, _param_errorBackgroundColor = param.errorBackgroundColor, errorBackgroundColor = _param_errorBackgroundColor === void 0 ? "error-default" : _param_errorBackgroundColor;
    var _ref = _sliced_to_array((0, import_react.useState)("idle"), 2), status = _ref[0], setStatus = _ref[1];
    var handleClick = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        setStatus("loading");
                        _state.label = 1;
                    case 1:
                        _state.trys.push([
                            1,
                            4,
                            ,
                            5
                        ]);
                        if (!(status !== "loading")) return [
                            3,
                            3
                        ];
                        return [
                            4,
                            onClickPromise()
                        ];
                    case 2:
                        _state.sent();
                        _state.label = 3;
                    case 3:
                        setStatus("success");
                        setTimeout(function() {
                            return setStatus("idle");
                        }, 4e3);
                        return [
                            3,
                            5
                        ];
                    case 4:
                        error = _state.sent();
                        console.error(error);
                        setStatus("error");
                        setTimeout(function() {
                            return setStatus("idle");
                        }, 4e3);
                        return [
                            3,
                            5
                        ];
                    case 5:
                        return [
                            2
                        ];
                }
            });
        });
        return function handleClick() {
            return _ref.apply(this, arguments);
        };
    }();
    var handleConfirm = function() {
        if (confirm && status === "idle") {
            setStatus("confirming");
        }
    };
    var handleCancel = function() {
        setStatus("idle");
    };
    var getBackgroundColor = function() {
        switch(status){
            case "loading":
                return loadingBackgroundColor;
            case "success":
                return successBackgroundColor;
            case "error":
                return errorBackgroundColor;
            case "confirming":
                return "bg-transparent";
            default:
                return backgroundColor;
        }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_framer_motion.motion.button, {
        onClick: !confirm ? handleClick : handleConfirm,
        disabled: disabled || status === "loading",
        className: cn("\n        relative overflow-hidden\n        p-2\n        rounded-md\n        font-medium text-white\n        ".concat(getBackgroundColor(), "\n        transition-colors duration-300 ease-in-out\n        disabled:opacity-50 disabled:cursor-not-allowed\n        h-10\n      "), status !== "confirming" && status !== "idle" && "w-10", className),
        initial: false,
        animate: {
            scale: status === "loading" ? 0.95 : 1
        },
        children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion.motion.div, {
                className: "absolute inset-0 flex items-center justify-center",
                initial: {
                    x: "-100%"
                },
                animate: {
                    x: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 15
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "w-full h-full ".concat(getBackgroundColor(), " absolute inset-0")
                })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "relative z-10 min-w-[2rem] h-6 flex items-center justify-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_framer_motion.AnimatePresence, {
                    mode: "wait",
                    children: [
                        status === "idle" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion.motion.span, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "transition-opacity duration-200",
                            children: label
                        }, "idle"),
                        status === "confirming" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion.motion.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "flex space-x-2",
                            children: confirmComponent || /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                                children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                        onClick: handleClick,
                                        className: "p-2 rounded-md ".concat(successBackgroundColor),
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, {
                                            size: 16
                                        })
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                        onClick: handleCancel,
                                        className: "p-2 rounded-md ".concat(errorBackgroundColor),
                                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {
                                            size: 16
                                        })
                                    })
                                ]
                            })
                        }, "confirming"),
                        status !== "idle" && status !== "confirming" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_framer_motion.motion.div, {
                            initial: {
                                y: 20,
                                opacity: 0
                            },
                            animate: {
                                y: 0,
                                opacity: 1
                            },
                            exit: {
                                y: -20,
                                opacity: 0
                            },
                            transition: {
                                type: "spring",
                                stiffness: 150,
                                damping: 10
                            },
                            className: "absolute w-24 h-full flex items-center justify-center",
                            children: [
                                status === "loading" && (loadingComponent || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Loader2, {
                                    className: "animate-spin w-6 h-6",
                                    size: 24
                                })),
                                status === "success" && (successComponent || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Check, {
                                    size: 24
                                })),
                                status === "error" && (errorComponent || /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {
                                    size: 24
                                }))
                            ]
                        }, status)
                    ]
                })
            })
        ]
    });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    PromiseButton: PromiseButton,
    cn: cn
});
