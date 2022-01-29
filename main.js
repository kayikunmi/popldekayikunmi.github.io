/*! For license information please see main.4aeaffae.js.LICENSE.txt */
!function() {
    var e = {
        694: function(e, t) {
            var a;
            !function() {
                "use strict";
                var n = {}.hasOwnProperty;
                function r() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        if (a) {
                            var s = typeof a;
                            if ("string" === s || "number" === s)
                                e.push(a);
                            else if (Array.isArray(a)) {
                                if (a.length) {
                                    var o = r.apply(null, a);
                                    o && e.push(o)
                                }
                            } else if ("object" === s)
                                if (a.toString === Object.prototype.toString)
                                    for (var i in a)
                                        n.call(a, i) && a[i] && e.push(i);
                                else
                                    e.push(a.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (r.default = r,
                e.exports = r) : void 0 === (a = function() {
                    return r
                }
                .apply(t, [])) || (e.exports = a)
            }()
        },
        725: function(e) {
            "use strict";
            var t = Object.getOwnPropertySymbols
              , a = Object.prototype.hasOwnProperty
              , n = Object.prototype.propertyIsEnumerable;
            function r(e) {
                if (null === e || void 0 === e)
                    throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign)
                        return !1;
                    var e = new String("abc");
                    if (e[5] = "de",
                    "5" === Object.getOwnPropertyNames(e)[0])
                        return !1;
                    for (var t = {}, a = 0; a < 10; a++)
                        t["_" + String.fromCharCode(a)] = a;
                    if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                        return t[e]
                    }
                    )).join(""))
                        return !1;
                    var n = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        n[e] = e
                    }
                    )),
                    "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
                } catch (r) {
                    return !1
                }
            }() ? Object.assign : function(e, s) {
                for (var o, i, l = r(e), u = 1; u < arguments.length; u++) {
                    for (var c in o = Object(arguments[u]))
                        a.call(o, c) && (l[c] = o[c]);
                    if (t) {
                        i = t(o);
                        for (var d = 0; d < i.length; d++)
                            n.call(o, i[d]) && (l[i[d]] = o[i[d]])
                    }
                }
                return l
            }
        },
        888: function(e, t, a) {
            "use strict";
            var n = a(47);
            function r() {}
            function s() {}
            s.resetWarningCache = r,
            e.exports = function() {
                function e(e, t, a, r, s, o) {
                    if (o !== n) {
                        var i = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw i.name = "Invariant Violation",
                        i
                    }
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var a = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: s,
                    resetWarningCache: r
                };
                return a.PropTypes = a,
                a
            }
        },
        7: function(e, t, a) {
            e.exports = a(888)()
        },
        47: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        463: function(e, t, a) {
            "use strict";
            var n = a(791)
              , r = a(725)
              , s = a(296);
            function o(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++)
                    t += "&args[]=" + encodeURIComponent(arguments[a]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            if (!n)
                throw Error(o(227));
            var i = new Set
              , l = {};
            function u(e, t) {
                c(e, t),
                c(e + "Capture", t)
            }
            function c(e, t) {
                for (l[e] = t,
                e = 0; e < t.length; e++)
                    i.add(t[e])
            }
            var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement)
              , f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
              , p = Object.prototype.hasOwnProperty
              , m = {}
              , h = {};
            function y(e, t, a, n, r, s, o) {
                this.acceptsBooleans = 2 === t || 3 === t || 4 === t,
                this.attributeName = n,
                this.attributeNamespace = r,
                this.mustUseProperty = a,
                this.propertyName = e,
                this.type = t,
                this.sanitizeURL = s,
                this.removeEmptyString = o
            }
            var g = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                g[e] = new y(e,0,!1,e,null,!1,!1)
            }
            )),
            [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function(e) {
                var t = e[0];
                g[t] = new y(t,1,!1,e[1],null,!1,!1)
            }
            )),
            ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                g[e] = new y(e,2,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                g[e] = new y(e,2,!1,e,null,!1,!1)
            }
            )),
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                g[e] = new y(e,3,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                g[e] = new y(e,3,!0,e,null,!1,!1)
            }
            )),
            ["capture", "download"].forEach((function(e) {
                g[e] = new y(e,4,!1,e,null,!1,!1)
            }
            )),
            ["cols", "rows", "size", "span"].forEach((function(e) {
                g[e] = new y(e,6,!1,e,null,!1,!1)
            }
            )),
            ["rowSpan", "start"].forEach((function(e) {
                g[e] = new y(e,5,!1,e.toLowerCase(),null,!1,!1)
            }
            ));
            var b = /[\-:]([a-z])/g;
            function v(e) {
                return e[1].toUpperCase()
            }
            function k(e, t, a, n) {
                var r = g.hasOwnProperty(t) ? g[t] : null;
                (null !== r ? 0 === r.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, a, n) {
                    if (null === t || "undefined" === typeof t || function(e, t, a, n) {
                        if (null !== a && 0 === a.type)
                            return !1;
                        switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !n && (null !== a ? !a.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                        }
                    }(e, t, a, n))
                        return !0;
                    if (n)
                        return !1;
                    if (null !== a)
                        switch (a.type) {
                        case 3:
                            return !t;
                        case 4:
                            return !1 === t;
                        case 5:
                            return isNaN(t);
                        case 6:
                            return isNaN(t) || 1 > t
                        }
                    return !1
                }(t, a, r, n) && (a = null),
                n || null === r ? function(e) {
                    return !!p.call(h, e) || !p.call(m, e) && (f.test(e) ? h[e] = !0 : (m[e] = !0,
                    !1))
                }(t) && (null === a ? e.removeAttribute(t) : e.setAttribute(t, "" + a)) : r.mustUseProperty ? e[r.propertyName] = null === a ? 3 !== r.type && "" : a : (t = r.attributeName,
                n = r.attributeNamespace,
                null === a ? e.removeAttribute(t) : (a = 3 === (r = r.type) || 4 === r && !0 === a ? "" : "" + a,
                n ? e.setAttributeNS(n, t, a) : e.setAttribute(t, a))))
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                var t = e.replace(b, v);
                g[t] = new y(t,1,!1,e,null,!1,!1)
            }
            )),
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                var t = e.replace(b, v);
                g[t] = new y(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
            }
            )),
            ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                var t = e.replace(b, v);
                g[t] = new y(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
            }
            )),
            ["tabIndex", "crossOrigin"].forEach((function(e) {
                g[e] = new y(e,1,!1,e.toLowerCase(),null,!1,!1)
            }
            )),
            g.xlinkHref = new y("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
            ["src", "href", "action", "formAction"].forEach((function(e) {
                g[e] = new y(e,1,!1,e.toLowerCase(),null,!0,!0)
            }
            ));
            var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              , x = 60103
              , z = 60106
              , j = 60107
              , S = 60108
              , E = 60114
              , C = 60109
              , T = 60110
              , _ = 60112
              , P = 60113
              , O = 60120
              , N = 60115
              , L = 60116
              , D = 60121
              , R = 60128
              , M = 60129
              , F = 60130
              , I = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var A = Symbol.for;
                x = A("react.element"),
                z = A("react.portal"),
                j = A("react.fragment"),
                S = A("react.strict_mode"),
                E = A("react.profiler"),
                C = A("react.provider"),
                T = A("react.context"),
                _ = A("react.forward_ref"),
                P = A("react.suspense"),
                O = A("react.suspense_list"),
                N = A("react.memo"),
                L = A("react.lazy"),
                D = A("react.block"),
                A("react.scope"),
                R = A("react.opaque.id"),
                M = A("react.debug_trace_mode"),
                F = A("react.offscreen"),
                I = A("react.legacy_hidden")
            }
            var q, U = "function" === typeof Symbol && Symbol.iterator;
            function H(e) {
                return null === e || "object" !== typeof e ? null : "function" === typeof (e = U && e[U] || e["@@iterator"]) ? e : null
            }
            function V(e) {
                if (void 0 === q)
                    try {
                        throw Error()
                    } catch (a) {
                        var t = a.stack.trim().match(/\n( *(at )?)/);
                        q = t && t[1] || ""
                    }
                return "\n" + q + e
            }
            var B = !1;
            function W(e, t) {
                if (!e || B)
                    return "";
                B = !0;
                var a = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (t)
                        if (t = function() {
                            throw Error()
                        }
                        ,
                        Object.defineProperty(t.prototype, "props", {
                            set: function() {
                                throw Error()
                            }
                        }),
                        "object" === typeof Reflect && Reflect.construct) {
                            try {
                                Reflect.construct(t, [])
                            } catch (l) {
                                var n = l
                            }
                            Reflect.construct(e, [], t)
                        } else {
                            try {
                                t.call()
                            } catch (l) {
                                n = l
                            }
                            e.call(t.prototype)
                        }
                    else {
                        try {
                            throw Error()
                        } catch (l) {
                            n = l
                        }
                        e()
                    }
                } catch (l) {
                    if (l && n && "string" === typeof l.stack) {
                        for (var r = l.stack.split("\n"), s = n.stack.split("\n"), o = r.length - 1, i = s.length - 1; 1 <= o && 0 <= i && r[o] !== s[i]; )
                            i--;
                        for (; 1 <= o && 0 <= i; o--,
                        i--)
                            if (r[o] !== s[i]) {
                                if (1 !== o || 1 !== i)
                                    do {
                                        if (o--,
                                        0 > --i || r[o] !== s[i])
                                            return "\n" + r[o].replace(" at new ", " at ")
                                    } while (1 <= o && 0 <= i);
                                break
                            }
                    }
                } finally {
                    B = !1,
                    Error.prepareStackTrace = a
                }
                return (e = e ? e.displayName || e.name : "") ? V(e) : ""
            }
            function $(e) {
                switch (e.tag) {
                case 5:
                    return V(e.type);
                case 16:
                    return V("Lazy");
                case 13:
                    return V("Suspense");
                case 19:
                    return V("SuspenseList");
                case 0:
                case 2:
                case 15:
                    return e = W(e.type, !1);
                case 11:
                    return e = W(e.type.render, !1);
                case 22:
                    return e = W(e.type._render, !1);
                case 1:
                    return e = W(e.type, !0);
                default:
                    return ""
                }
            }
            function Q(e) {
                if (null == e)
                    return null;
                if ("function" === typeof e)
                    return e.displayName || e.name || null;
                if ("string" === typeof e)
                    return e;
                switch (e) {
                case j:
                    return "Fragment";
                case z:
                    return "Portal";
                case E:
                    return "Profiler";
                case S:
                    return "StrictMode";
                case P:
                    return "Suspense";
                case O:
                    return "SuspenseList"
                }
                if ("object" === typeof e)
                    switch (e.$$typeof) {
                    case T:
                        return (e.displayName || "Context") + ".Consumer";
                    case C:
                        return (e._context.displayName || "Context") + ".Provider";
                    case _:
                        var t = e.render;
                        return t = t.displayName || t.name || "",
                        e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                    case N:
                        return Q(e.type);
                    case D:
                        return Q(e._render);
                    case L:
                        t = e._payload,
                        e = e._init;
                        try {
                            return Q(e(t))
                        } catch (a) {}
                    }
                return null
            }
            function Y(e) {
                switch (typeof e) {
                case "boolean":
                case "number":
                case "object":
                case "string":
                case "undefined":
                    return e;
                default:
                    return ""
                }
            }
            function K(e) {
                var t = e.type;
                return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
            }
            function G(e) {
                e._valueTracker || (e._valueTracker = function(e) {
                    var t = K(e) ? "checked" : "value"
                      , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
                      , n = "" + e[t];
                    if (!e.hasOwnProperty(t) && "undefined" !== typeof a && "function" === typeof a.get && "function" === typeof a.set) {
                        var r = a.get
                          , s = a.set;
                        return Object.defineProperty(e, t, {
                            configurable: !0,
                            get: function() {
                                return r.call(this)
                            },
                            set: function(e) {
                                n = "" + e,
                                s.call(this, e)
                            }
                        }),
                        Object.defineProperty(e, t, {
                            enumerable: a.enumerable
                        }),
                        {
                            getValue: function() {
                                return n
                            },
                            setValue: function(e) {
                                n = "" + e
                            },
                            stopTracking: function() {
                                e._valueTracker = null,
                                delete e[t]
                            }
                        }
                    }
                }(e))
            }
            function X(e) {
                if (!e)
                    return !1;
                var t = e._valueTracker;
                if (!t)
                    return !0;
                var a = t.getValue()
                  , n = "";
                return e && (n = K(e) ? e.checked ? "true" : "false" : e.value),
                (e = n) !== a && (t.setValue(e),
                !0)
            }
            function J(e) {
                if ("undefined" === typeof (e = e || ("undefined" !== typeof document ? document : void 0)))
                    return null;
                try {
                    return e.activeElement || e.body
                } catch (t) {
                    return e.body
                }
            }
            function Z(e, t) {
                var a = t.checked;
                return r({}, t, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != a ? a : e._wrapperState.initialChecked
                })
            }
            function ee(e, t) {
                var a = null == t.defaultValue ? "" : t.defaultValue
                  , n = null != t.checked ? t.checked : t.defaultChecked;
                a = Y(null != t.value ? t.value : a),
                e._wrapperState = {
                    initialChecked: n,
                    initialValue: a,
                    controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                }
            }
            function te(e, t) {
                null != (t = t.checked) && k(e, "checked", t, !1)
            }
            function ae(e, t) {
                te(e, t);
                var a = Y(t.value)
                  , n = t.type;
                if (null != a)
                    "number" === n ? (0 === a && "" === e.value || e.value != a) && (e.value = "" + a) : e.value !== "" + a && (e.value = "" + a);
                else if ("submit" === n || "reset" === n)
                    return void e.removeAttribute("value");
                t.hasOwnProperty("value") ? re(e, t.type, a) : t.hasOwnProperty("defaultValue") && re(e, t.type, Y(t.defaultValue)),
                null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
            }
            function ne(e, t, a) {
                if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                    var n = t.type;
                    if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value))
                        return;
                    t = "" + e._wrapperState.initialValue,
                    a || t === e.value || (e.value = t),
                    e.defaultValue = t
                }
                "" !== (a = e.name) && (e.name = ""),
                e.defaultChecked = !!e._wrapperState.initialChecked,
                "" !== a && (e.name = a)
            }
            function re(e, t, a) {
                "number" === t && J(e.ownerDocument) === e || (null == a ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + a && (e.defaultValue = "" + a))
            }
            function se(e, t) {
                return e = r({
                    children: void 0
                }, t),
                (t = function(e) {
                    var t = "";
                    return n.Children.forEach(e, (function(e) {
                        null != e && (t += e)
                    }
                    )),
                    t
                }(t.children)) && (e.children = t),
                e
            }
            function oe(e, t, a, n) {
                if (e = e.options,
                t) {
                    t = {};
                    for (var r = 0; r < a.length; r++)
                        t["$" + a[r]] = !0;
                    for (a = 0; a < e.length; a++)
                        r = t.hasOwnProperty("$" + e[a].value),
                        e[a].selected !== r && (e[a].selected = r),
                        r && n && (e[a].defaultSelected = !0)
                } else {
                    for (a = "" + Y(a),
                    t = null,
                    r = 0; r < e.length; r++) {
                        if (e[r].value === a)
                            return e[r].selected = !0,
                            void (n && (e[r].defaultSelected = !0));
                        null !== t || e[r].disabled || (t = e[r])
                    }
                    null !== t && (t.selected = !0)
                }
            }
            function ie(e, t) {
                if (null != t.dangerouslySetInnerHTML)
                    throw Error(o(91));
                return r({}, t, {
                    value: void 0,
                    defaultValue: void 0,
                    children: "" + e._wrapperState.initialValue
                })
            }
            function le(e, t) {
                var a = t.value;
                if (null == a) {
                    if (a = t.children,
                    t = t.defaultValue,
                    null != a) {
                        if (null != t)
                            throw Error(o(92));
                        if (Array.isArray(a)) {
                            if (!(1 >= a.length))
                                throw Error(o(93));
                            a = a[0]
                        }
                        t = a
                    }
                    null == t && (t = ""),
                    a = t
                }
                e._wrapperState = {
                    initialValue: Y(a)
                }
            }
            function ue(e, t) {
                var a = Y(t.value)
                  , n = Y(t.defaultValue);
                null != a && ((a = "" + a) !== e.value && (e.value = a),
                null == t.defaultValue && e.defaultValue !== a && (e.defaultValue = a)),
                null != n && (e.defaultValue = "" + n)
            }
            function ce(e) {
                var t = e.textContent;
                t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
            }
            var de = "http://www.w3.org/1999/xhtml"
              , fe = "http://www.w3.org/2000/svg";
            function pe(e) {
                switch (e) {
                case "svg":
                    return "http://www.w3.org/2000/svg";
                case "math":
                    return "http://www.w3.org/1998/Math/MathML";
                default:
                    return "http://www.w3.org/1999/xhtml"
                }
            }
            function me(e, t) {
                return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
            }
            var he, ye, ge = (ye = function(e, t) {
                if (e.namespaceURI !== fe || "innerHTML"in e)
                    e.innerHTML = t;
                else {
                    for ((he = he || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild; e.firstChild; )
                        e.removeChild(e.firstChild);
                    for (; t.firstChild; )
                        e.appendChild(t.firstChild)
                }
            }
            ,
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, a, n) {
                MSApp.execUnsafeLocalFunction((function() {
                    return ye(e, t)
                }
                ))
            }
            : ye);
            function be(e, t) {
                if (t) {
                    var a = e.firstChild;
                    if (a && a === e.lastChild && 3 === a.nodeType)
                        return void (a.nodeValue = t)
                }
                e.textContent = t
            }
            var ve = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }
              , ke = ["Webkit", "ms", "Moz", "O"];
            function we(e, t, a) {
                return null == t || "boolean" === typeof t || "" === t ? "" : a || "number" !== typeof t || 0 === t || ve.hasOwnProperty(e) && ve[e] ? ("" + t).trim() : t + "px"
            }
            function xe(e, t) {
                for (var a in e = e.style,
                t)
                    if (t.hasOwnProperty(a)) {
                        var n = 0 === a.indexOf("--")
                          , r = we(a, t[a], n);
                        "float" === a && (a = "cssFloat"),
                        n ? e.setProperty(a, r) : e[a] = r
                    }
            }
            Object.keys(ve).forEach((function(e) {
                ke.forEach((function(t) {
                    t = t + e.charAt(0).toUpperCase() + e.substring(1),
                    ve[t] = ve[e]
                }
                ))
            }
            ));
            var ze = r({
                menuitem: !0
            }, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });
            function je(e, t) {
                if (t) {
                    if (ze[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
                        throw Error(o(137, e));
                    if (null != t.dangerouslySetInnerHTML) {
                        if (null != t.children)
                            throw Error(o(60));
                        if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html"in t.dangerouslySetInnerHTML))
                            throw Error(o(61))
                    }
                    if (null != t.style && "object" !== typeof t.style)
                        throw Error(o(62))
                }
            }
            function Se(e, t) {
                if (-1 === e.indexOf("-"))
                    return "string" === typeof t.is;
                switch (e) {
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0
                }
            }
            function Ee(e) {
                return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement),
                3 === e.nodeType ? e.parentNode : e
            }
            var Ce = null
              , Te = null
              , _e = null;
            function Pe(e) {
                if (e = nr(e)) {
                    if ("function" !== typeof Ce)
                        throw Error(o(280));
                    var t = e.stateNode;
                    t && (t = sr(t),
                    Ce(e.stateNode, e.type, t))
                }
            }
            function Oe(e) {
                Te ? _e ? _e.push(e) : _e = [e] : Te = e
            }
            function Ne() {
                if (Te) {
                    var e = Te
                      , t = _e;
                    if (_e = Te = null,
                    Pe(e),
                    t)
                        for (e = 0; e < t.length; e++)
                            Pe(t[e])
                }
            }
            function Le(e, t) {
                return e(t)
            }
            function De(e, t, a, n, r) {
                return e(t, a, n, r)
            }
            function Re() {}
            var Me = Le
              , Fe = !1
              , Ie = !1;
            function Ae() {
                null === Te && null === _e || (Re(),
                Ne())
            }
            function qe(e, t) {
                var a = e.stateNode;
                if (null === a)
                    return null;
                var n = sr(a);
                if (null === n)
                    return null;
                a = n[t];
                e: switch (t) {
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)),
                    e = !n;
                    break e;
                default:
                    e = !1
                }
                if (e)
                    return null;
                if (a && "function" !== typeof a)
                    throw Error(o(231, t, typeof a));
                return a
            }
            var Ue = !1;
            if (d)
                try {
                    var He = {};
                    Object.defineProperty(He, "passive", {
                        get: function() {
                            Ue = !0
                        }
                    }),
                    window.addEventListener("test", He, He),
                    window.removeEventListener("test", He, He)
                } catch (ye) {
                    Ue = !1
                }
            function Ve(e, t, a, n, r, s, o, i, l) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(a, u)
                } catch (c) {
                    this.onError(c)
                }
            }
            var Be = !1
              , We = null
              , $e = !1
              , Qe = null
              , Ye = {
                onError: function(e) {
                    Be = !0,
                    We = e
                }
            };
            function Ke(e, t, a, n, r, s, o, i, l) {
                Be = !1,
                We = null,
                Ve.apply(Ye, arguments)
            }
            function Ge(e) {
                var t = e
                  , a = e;
                if (e.alternate)
                    for (; t.return; )
                        t = t.return;
                else {
                    e = t;
                    do {
                        0 !== (1026 & (t = e).flags) && (a = t.return),
                        e = t.return
                    } while (e)
                }
                return 3 === t.tag ? a : null
            }
            function Xe(e) {
                if (13 === e.tag) {
                    var t = e.memoizedState;
                    if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)),
                    null !== t)
                        return t.dehydrated
                }
                return null
            }
            function Je(e) {
                if (Ge(e) !== e)
                    throw Error(o(188))
            }
            function Ze(e) {
                if (e = function(e) {
                    var t = e.alternate;
                    if (!t) {
                        if (null === (t = Ge(e)))
                            throw Error(o(188));
                        return t !== e ? null : e
                    }
                    for (var a = e, n = t; ; ) {
                        var r = a.return;
                        if (null === r)
                            break;
                        var s = r.alternate;
                        if (null === s) {
                            if (null !== (n = r.return)) {
                                a = n;
                                continue
                            }
                            break
                        }
                        if (r.child === s.child) {
                            for (s = r.child; s; ) {
                                if (s === a)
                                    return Je(r),
                                    e;
                                if (s === n)
                                    return Je(r),
                                    t;
                                s = s.sibling
                            }
                            throw Error(o(188))
                        }
                        if (a.return !== n.return)
                            a = r,
                            n = s;
                        else {
                            for (var i = !1, l = r.child; l; ) {
                                if (l === a) {
                                    i = !0,
                                    a = r,
                                    n = s;
                                    break
                                }
                                if (l === n) {
                                    i = !0,
                                    n = r,
                                    a = s;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!i) {
                                for (l = s.child; l; ) {
                                    if (l === a) {
                                        i = !0,
                                        a = s,
                                        n = r;
                                        break
                                    }
                                    if (l === n) {
                                        i = !0,
                                        n = s,
                                        a = r;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!i)
                                    throw Error(o(189))
                            }
                        }
                        if (a.alternate !== n)
                            throw Error(o(190))
                    }
                    if (3 !== a.tag)
                        throw Error(o(188));
                    return a.stateNode.current === a ? e : t
                }(e),
                !e)
                    return null;
                for (var t = e; ; ) {
                    if (5 === t.tag || 6 === t.tag)
                        return t;
                    if (t.child)
                        t.child.return = t,
                        t = t.child;
                    else {
                        if (t === e)
                            break;
                        for (; !t.sibling; ) {
                            if (!t.return || t.return === e)
                                return null;
                            t = t.return
                        }
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                }
                return null
            }
            function et(e, t) {
                for (var a = e.alternate; null !== t; ) {
                    if (t === e || t === a)
                        return !0;
                    t = t.return
                }
                return !1
            }
            var tt, at, nt, rt, st = !1, ot = [], it = null, lt = null, ut = null, ct = new Map, dt = new Map, ft = [], pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
            function mt(e, t, a, n, r) {
                return {
                    blockedOn: e,
                    domEventName: t,
                    eventSystemFlags: 16 | a,
                    nativeEvent: r,
                    targetContainers: [n]
                }
            }
            function ht(e, t) {
                switch (e) {
                case "focusin":
                case "focusout":
                    it = null;
                    break;
                case "dragenter":
                case "dragleave":
                    lt = null;
                    break;
                case "mouseover":
                case "mouseout":
                    ut = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ct.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    dt.delete(t.pointerId)
                }
            }
            function yt(e, t, a, n, r, s) {
                return null === e || e.nativeEvent !== s ? (e = mt(t, a, n, r, s),
                null !== t && (null !== (t = nr(t)) && at(t)),
                e) : (e.eventSystemFlags |= n,
                t = e.targetContainers,
                null !== r && -1 === t.indexOf(r) && t.push(r),
                e)
            }
            function gt(e) {
                var t = ar(e.target);
                if (null !== t) {
                    var a = Ge(t);
                    if (null !== a)
                        if (13 === (t = a.tag)) {
                            if (null !== (t = Xe(a)))
                                return e.blockedOn = t,
                                void rt(e.lanePriority, (function() {
                                    s.unstable_runWithPriority(e.priority, (function() {
                                        nt(a)
                                    }
                                    ))
                                }
                                ))
                        } else if (3 === t && a.stateNode.hydrate)
                            return void (e.blockedOn = 3 === a.tag ? a.stateNode.containerInfo : null)
                }
                e.blockedOn = null
            }
            function bt(e) {
                if (null !== e.blockedOn)
                    return !1;
                for (var t = e.targetContainers; 0 < t.length; ) {
                    var a = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                    if (null !== a)
                        return null !== (t = nr(a)) && at(t),
                        e.blockedOn = a,
                        !1;
                    t.shift()
                }
                return !0
            }
            function vt(e, t, a) {
                bt(e) && a.delete(t)
            }
            function kt() {
                for (st = !1; 0 < ot.length; ) {
                    var e = ot[0];
                    if (null !== e.blockedOn) {
                        null !== (e = nr(e.blockedOn)) && tt(e);
                        break
                    }
                    for (var t = e.targetContainers; 0 < t.length; ) {
                        var a = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== a) {
                            e.blockedOn = a;
                            break
                        }
                        t.shift()
                    }
                    null === e.blockedOn && ot.shift()
                }
                null !== it && bt(it) && (it = null),
                null !== lt && bt(lt) && (lt = null),
                null !== ut && bt(ut) && (ut = null),
                ct.forEach(vt),
                dt.forEach(vt)
            }
            function wt(e, t) {
                e.blockedOn === t && (e.blockedOn = null,
                st || (st = !0,
                s.unstable_scheduleCallback(s.unstable_NormalPriority, kt)))
            }
            function xt(e) {
                function t(t) {
                    return wt(t, e)
                }
                if (0 < ot.length) {
                    wt(ot[0], e);
                    for (var a = 1; a < ot.length; a++) {
                        var n = ot[a];
                        n.blockedOn === e && (n.blockedOn = null)
                    }
                }
                for (null !== it && wt(it, e),
                null !== lt && wt(lt, e),
                null !== ut && wt(ut, e),
                ct.forEach(t),
                dt.forEach(t),
                a = 0; a < ft.length; a++)
                    (n = ft[a]).blockedOn === e && (n.blockedOn = null);
                for (; 0 < ft.length && null === (a = ft[0]).blockedOn; )
                    gt(a),
                    null === a.blockedOn && ft.shift()
            }
            function zt(e, t) {
                var a = {};
                return a[e.toLowerCase()] = t.toLowerCase(),
                a["Webkit" + e] = "webkit" + t,
                a["Moz" + e] = "moz" + t,
                a
            }
            var jt = {
                animationend: zt("Animation", "AnimationEnd"),
                animationiteration: zt("Animation", "AnimationIteration"),
                animationstart: zt("Animation", "AnimationStart"),
                transitionend: zt("Transition", "TransitionEnd")
            }
              , St = {}
              , Et = {};
            function Ct(e) {
                if (St[e])
                    return St[e];
                if (!jt[e])
                    return e;
                var t, a = jt[e];
                for (t in a)
                    if (a.hasOwnProperty(t) && t in Et)
                        return St[e] = a[t];
                return e
            }
            d && (Et = document.createElement("div").style,
            "AnimationEvent"in window || (delete jt.animationend.animation,
            delete jt.animationiteration.animation,
            delete jt.animationstart.animation),
            "TransitionEvent"in window || delete jt.transitionend.transition);
            var Tt = Ct("animationend")
              , _t = Ct("animationiteration")
              , Pt = Ct("animationstart")
              , Ot = Ct("transitionend")
              , Nt = new Map
              , Lt = new Map
              , Dt = ["abort", "abort", Tt, "animationEnd", _t, "animationIteration", Pt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ot, "transitionEnd", "waiting", "waiting"];
            function Rt(e, t) {
                for (var a = 0; a < e.length; a += 2) {
                    var n = e[a]
                      , r = e[a + 1];
                    r = "on" + (r[0].toUpperCase() + r.slice(1)),
                    Lt.set(n, t),
                    Nt.set(n, r),
                    u(r, [n])
                }
            }
            (0,
            s.unstable_now)();
            var Mt = 8;
            function Ft(e) {
                if (0 !== (1 & e))
                    return Mt = 15,
                    1;
                if (0 !== (2 & e))
                    return Mt = 14,
                    2;
                if (0 !== (4 & e))
                    return Mt = 13,
                    4;
                var t = 24 & e;
                return 0 !== t ? (Mt = 12,
                t) : 0 !== (32 & e) ? (Mt = 11,
                32) : 0 !== (t = 192 & e) ? (Mt = 10,
                t) : 0 !== (256 & e) ? (Mt = 9,
                256) : 0 !== (t = 3584 & e) ? (Mt = 8,
                t) : 0 !== (4096 & e) ? (Mt = 7,
                4096) : 0 !== (t = 4186112 & e) ? (Mt = 6,
                t) : 0 !== (t = 62914560 & e) ? (Mt = 5,
                t) : 67108864 & e ? (Mt = 4,
                67108864) : 0 !== (134217728 & e) ? (Mt = 3,
                134217728) : 0 !== (t = 805306368 & e) ? (Mt = 2,
                t) : 0 !== (1073741824 & e) ? (Mt = 1,
                1073741824) : (Mt = 8,
                e)
            }
            function It(e, t) {
                var a = e.pendingLanes;
                if (0 === a)
                    return Mt = 0;
                var n = 0
                  , r = 0
                  , s = e.expiredLanes
                  , o = e.suspendedLanes
                  , i = e.pingedLanes;
                if (0 !== s)
                    n = s,
                    r = Mt = 15;
                else if (0 !== (s = 134217727 & a)) {
                    var l = s & ~o;
                    0 !== l ? (n = Ft(l),
                    r = Mt) : 0 !== (i &= s) && (n = Ft(i),
                    r = Mt)
                } else
                    0 !== (s = a & ~o) ? (n = Ft(s),
                    r = Mt) : 0 !== i && (n = Ft(i),
                    r = Mt);
                if (0 === n)
                    return 0;
                if (n = a & ((0 > (n = 31 - Bt(n)) ? 0 : 1 << n) << 1) - 1,
                0 !== t && t !== n && 0 === (t & o)) {
                    if (Ft(t),
                    r <= Mt)
                        return t;
                    Mt = r
                }
                if (0 !== (t = e.entangledLanes))
                    for (e = e.entanglements,
                    t &= n; 0 < t; )
                        r = 1 << (a = 31 - Bt(t)),
                        n |= e[a],
                        t &= ~r;
                return n
            }
            function At(e) {
                return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
            }
            function qt(e, t) {
                switch (e) {
                case 15:
                    return 1;
                case 14:
                    return 2;
                case 12:
                    return 0 === (e = Ut(24 & ~t)) ? qt(10, t) : e;
                case 10:
                    return 0 === (e = Ut(192 & ~t)) ? qt(8, t) : e;
                case 8:
                    return 0 === (e = Ut(3584 & ~t)) && (0 === (e = Ut(4186112 & ~t)) && (e = 512)),
                    e;
                case 2:
                    return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456),
                    t
                }
                throw Error(o(358, e))
            }
            function Ut(e) {
                return e & -e
            }
            function Ht(e) {
                for (var t = [], a = 0; 31 > a; a++)
                    t.push(e);
                return t
            }
            function Vt(e, t, a) {
                e.pendingLanes |= t;
                var n = t - 1;
                e.suspendedLanes &= n,
                e.pingedLanes &= n,
                (e = e.eventTimes)[t = 31 - Bt(t)] = a
            }
            var Bt = Math.clz32 ? Math.clz32 : function(e) {
                return 0 === e ? 32 : 31 - (Wt(e) / $t | 0) | 0
            }
              , Wt = Math.log
              , $t = Math.LN2;
            var Qt = s.unstable_UserBlockingPriority
              , Yt = s.unstable_runWithPriority
              , Kt = !0;
            function Gt(e, t, a, n) {
                Fe || Re();
                var r = Jt
                  , s = Fe;
                Fe = !0;
                try {
                    De(r, e, t, a, n)
                } finally {
                    (Fe = s) || Ae()
                }
            }
            function Xt(e, t, a, n) {
                Yt(Qt, Jt.bind(null, e, t, a, n))
            }
            function Jt(e, t, a, n) {
                var r;
                if (Kt)
                    if ((r = 0 === (4 & t)) && 0 < ot.length && -1 < pt.indexOf(e))
                        e = mt(null, e, t, a, n),
                        ot.push(e);
                    else {
                        var s = Zt(e, t, a, n);
                        if (null === s)
                            r && ht(e, n);
                        else {
                            if (r) {
                                if (-1 < pt.indexOf(e))
                                    return e = mt(s, e, t, a, n),
                                    void ot.push(e);
                                if (function(e, t, a, n, r) {
                                    switch (t) {
                                    case "focusin":
                                        return it = yt(it, e, t, a, n, r),
                                        !0;
                                    case "dragenter":
                                        return lt = yt(lt, e, t, a, n, r),
                                        !0;
                                    case "mouseover":
                                        return ut = yt(ut, e, t, a, n, r),
                                        !0;
                                    case "pointerover":
                                        var s = r.pointerId;
                                        return ct.set(s, yt(ct.get(s) || null, e, t, a, n, r)),
                                        !0;
                                    case "gotpointercapture":
                                        return s = r.pointerId,
                                        dt.set(s, yt(dt.get(s) || null, e, t, a, n, r)),
                                        !0
                                    }
                                    return !1
                                }(s, e, t, a, n))
                                    return;
                                ht(e, n)
                            }
                            Rn(e, t, n, null, a)
                        }
                    }
            }
            function Zt(e, t, a, n) {
                var r = Ee(n);
                if (null !== (r = ar(r))) {
                    var s = Ge(r);
                    if (null === s)
                        r = null;
                    else {
                        var o = s.tag;
                        if (13 === o) {
                            if (null !== (r = Xe(s)))
                                return r;
                            r = null
                        } else if (3 === o) {
                            if (s.stateNode.hydrate)
                                return 3 === s.tag ? s.stateNode.containerInfo : null;
                            r = null
                        } else
                            s !== r && (r = null)
                    }
                }
                return Rn(e, t, n, r, a),
                null
            }
            var ea = null
              , ta = null
              , aa = null;
            function na() {
                if (aa)
                    return aa;
                var e, t, a = ta, n = a.length, r = "value"in ea ? ea.value : ea.textContent, s = r.length;
                for (e = 0; e < n && a[e] === r[e]; e++)
                    ;
                var o = n - e;
                for (t = 1; t <= o && a[n - t] === r[s - t]; t++)
                    ;
                return aa = r.slice(e, 1 < t ? 1 - t : void 0)
            }
            function ra(e) {
                var t = e.keyCode;
                return "charCode"in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t,
                10 === e && (e = 13),
                32 <= e || 13 === e ? e : 0
            }
            function sa() {
                return !0
            }
            function oa() {
                return !1
            }
            function ia(e) {
                function t(t, a, n, r, s) {
                    for (var o in this._reactName = t,
                    this._targetInst = n,
                    this.type = a,
                    this.nativeEvent = r,
                    this.target = s,
                    this.currentTarget = null,
                    e)
                        e.hasOwnProperty(o) && (t = e[o],
                        this[o] = t ? t(r) : r[o]);
                    return this.isDefaultPrevented = (null != r.defaultPrevented ? r.defaultPrevented : !1 === r.returnValue) ? sa : oa,
                    this.isPropagationStopped = oa,
                    this
                }
                return r(t.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1),
                        this.isDefaultPrevented = sa)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0),
                        this.isPropagationStopped = sa)
                    },
                    persist: function() {},
                    isPersistent: sa
                }),
                t
            }
            var la, ua, ca, da = {
                eventPhase: 0,
                bubbles: 0,
                cancelable: 0,
                timeStamp: function(e) {
                    return e.timeStamp || Date.now()
                },
                defaultPrevented: 0,
                isTrusted: 0
            }, fa = ia(da), pa = r({}, da, {
                view: 0,
                detail: 0
            }), ma = ia(pa), ha = r({}, pa, {
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                pageX: 0,
                pageY: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                getModifierState: Ca,
                button: 0,
                buttons: 0,
                relatedTarget: function(e) {
                    return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                },
                movementX: function(e) {
                    return "movementX"in e ? e.movementX : (e !== ca && (ca && "mousemove" === e.type ? (la = e.screenX - ca.screenX,
                    ua = e.screenY - ca.screenY) : ua = la = 0,
                    ca = e),
                    la)
                },
                movementY: function(e) {
                    return "movementY"in e ? e.movementY : ua
                }
            }), ya = ia(ha), ga = ia(r({}, ha, {
                dataTransfer: 0
            })), ba = ia(r({}, pa, {
                relatedTarget: 0
            })), va = ia(r({}, da, {
                animationName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            })), ka = r({}, da, {
                clipboardData: function(e) {
                    return "clipboardData"in e ? e.clipboardData : window.clipboardData
                }
            }), wa = ia(ka), xa = ia(r({}, da, {
                data: 0
            })), za = {
                Esc: "Escape",
                Spacebar: " ",
                Left: "ArrowLeft",
                Up: "ArrowUp",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Del: "Delete",
                Win: "OS",
                Menu: "ContextMenu",
                Apps: "ContextMenu",
                Scroll: "ScrollLock",
                MozPrintableKey: "Unidentified"
            }, ja = {
                8: "Backspace",
                9: "Tab",
                12: "Clear",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                19: "Pause",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                45: "Insert",
                46: "Delete",
                112: "F1",
                113: "F2",
                114: "F3",
                115: "F4",
                116: "F5",
                117: "F6",
                118: "F7",
                119: "F8",
                120: "F9",
                121: "F10",
                122: "F11",
                123: "F12",
                144: "NumLock",
                145: "ScrollLock",
                224: "Meta"
            }, Sa = {
                Alt: "altKey",
                Control: "ctrlKey",
                Meta: "metaKey",
                Shift: "shiftKey"
            };
            function Ea(e) {
                var t = this.nativeEvent;
                return t.getModifierState ? t.getModifierState(e) : !!(e = Sa[e]) && !!t[e]
            }
            function Ca() {
                return Ea
            }
            var Ta = r({}, pa, {
                key: function(e) {
                    if (e.key) {
                        var t = za[e.key] || e.key;
                        if ("Unidentified" !== t)
                            return t
                    }
                    return "keypress" === e.type ? 13 === (e = ra(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? ja[e.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Ca,
                charCode: function(e) {
                    return "keypress" === e.type ? ra(e) : 0
                },
                keyCode: function(e) {
                    return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                },
                which: function(e) {
                    return "keypress" === e.type ? ra(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                }
            })
              , _a = ia(Ta)
              , Pa = ia(r({}, ha, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            }))
              , Oa = ia(r({}, pa, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Ca
            }))
              , Na = ia(r({}, da, {
                propertyName: 0,
                elapsedTime: 0,
                pseudoElement: 0
            }))
              , La = r({}, ha, {
                deltaX: function(e) {
                    return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
                },
                deltaY: function(e) {
                    return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
                },
                deltaZ: 0,
                deltaMode: 0
            })
              , Da = ia(La)
              , Ra = [9, 13, 27, 32]
              , Ma = d && "CompositionEvent"in window
              , Fa = null;
            d && "documentMode"in document && (Fa = document.documentMode);
            var Ia = d && "TextEvent"in window && !Fa
              , Aa = d && (!Ma || Fa && 8 < Fa && 11 >= Fa)
              , qa = String.fromCharCode(32)
              , Ua = !1;
            function Ha(e, t) {
                switch (e) {
                case "keyup":
                    return -1 !== Ra.indexOf(t.keyCode);
                case "keydown":
                    return 229 !== t.keyCode;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1
                }
            }
            function Va(e) {
                return "object" === typeof (e = e.detail) && "data"in e ? e.data : null
            }
            var Ba = !1;
            var Wa = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };
            function $a(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return "input" === t ? !!Wa[e.type] : "textarea" === t
            }
            function Qa(e, t, a, n) {
                Oe(n),
                0 < (t = Fn(t, "onChange")).length && (a = new fa("onChange","change",null,a,n),
                e.push({
                    event: a,
                    listeners: t
                }))
            }
            var Ya = null
              , Ka = null;
            function Ga(e) {
                _n(e, 0)
            }
            function Xa(e) {
                if (X(rr(e)))
                    return e
            }
            function Ja(e, t) {
                if ("change" === e)
                    return t
            }
            var Za = !1;
            if (d) {
                var en;
                if (d) {
                    var tn = "oninput"in document;
                    if (!tn) {
                        var an = document.createElement("div");
                        an.setAttribute("oninput", "return;"),
                        tn = "function" === typeof an.oninput
                    }
                    en = tn
                } else
                    en = !1;
                Za = en && (!document.documentMode || 9 < document.documentMode)
            }
            function nn() {
                Ya && (Ya.detachEvent("onpropertychange", rn),
                Ka = Ya = null)
            }
            function rn(e) {
                if ("value" === e.propertyName && Xa(Ka)) {
                    var t = [];
                    if (Qa(t, Ka, e, Ee(e)),
                    e = Ga,
                    Fe)
                        e(t);
                    else {
                        Fe = !0;
                        try {
                            Le(e, t)
                        } finally {
                            Fe = !1,
                            Ae()
                        }
                    }
                }
            }
            function sn(e, t, a) {
                "focusin" === e ? (nn(),
                Ka = a,
                (Ya = t).attachEvent("onpropertychange", rn)) : "focusout" === e && nn()
            }
            function on(e) {
                if ("selectionchange" === e || "keyup" === e || "keydown" === e)
                    return Xa(Ka)
            }
            function ln(e, t) {
                if ("click" === e)
                    return Xa(t)
            }
            function un(e, t) {
                if ("input" === e || "change" === e)
                    return Xa(t)
            }
            var cn = "function" === typeof Object.is ? Object.is : function(e, t) {
                return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
            }
              , dn = Object.prototype.hasOwnProperty;
            function fn(e, t) {
                if (cn(e, t))
                    return !0;
                if ("object" !== typeof e || null === e || "object" !== typeof t || null === t)
                    return !1;
                var a = Object.keys(e)
                  , n = Object.keys(t);
                if (a.length !== n.length)
                    return !1;
                for (n = 0; n < a.length; n++)
                    if (!dn.call(t, a[n]) || !cn(e[a[n]], t[a[n]]))
                        return !1;
                return !0
            }
            function pn(e) {
                for (; e && e.firstChild; )
                    e = e.firstChild;
                return e
            }
            function mn(e, t) {
                var a, n = pn(e);
                for (e = 0; n; ) {
                    if (3 === n.nodeType) {
                        if (a = e + n.textContent.length,
                        e <= t && a >= t)
                            return {
                                node: n,
                                offset: t - e
                            };
                        e = a
                    }
                    e: {
                        for (; n; ) {
                            if (n.nextSibling) {
                                n = n.nextSibling;
                                break e
                            }
                            n = n.parentNode
                        }
                        n = void 0
                    }
                    n = pn(n)
                }
            }
            function hn(e, t) {
                return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? hn(e, t.parentNode) : "contains"in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
            }
            function yn() {
                for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
                    try {
                        var a = "string" === typeof t.contentWindow.location.href
                    } catch (n) {
                        a = !1
                    }
                    if (!a)
                        break;
                    t = J((e = t.contentWindow).document)
                }
                return t
            }
            function gn(e) {
                var t = e && e.nodeName && e.nodeName.toLowerCase();
                return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
            }
            var bn = d && "documentMode"in document && 11 >= document.documentMode
              , vn = null
              , kn = null
              , wn = null
              , xn = !1;
            function zn(e, t, a) {
                var n = a.window === a ? a.document : 9 === a.nodeType ? a : a.ownerDocument;
                xn || null == vn || vn !== J(n) || ("selectionStart"in (n = vn) && gn(n) ? n = {
                    start: n.selectionStart,
                    end: n.selectionEnd
                } : n = {
                    anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: n.anchorOffset,
                    focusNode: n.focusNode,
                    focusOffset: n.focusOffset
                },
                wn && fn(wn, n) || (wn = n,
                0 < (n = Fn(kn, "onSelect")).length && (t = new fa("onSelect","select",null,t,a),
                e.push({
                    event: t,
                    listeners: n
                }),
                t.target = vn)))
            }
            Rt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),
            Rt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
            Rt(Dt, 2);
            for (var jn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Sn = 0; Sn < jn.length; Sn++)
                Lt.set(jn[Sn], 0);
            c("onMouseEnter", ["mouseout", "mouseover"]),
            c("onMouseLeave", ["mouseout", "mouseover"]),
            c("onPointerEnter", ["pointerout", "pointerover"]),
            c("onPointerLeave", ["pointerout", "pointerover"]),
            u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
            u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
            u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
            u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
            u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
            u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
              , Cn = new Set("cancel close invalid load scroll toggle".split(" ").concat(En));
            function Tn(e, t, a) {
                var n = e.type || "unknown-event";
                e.currentTarget = a,
                function(e, t, a, n, r, s, i, l, u) {
                    if (Ke.apply(this, arguments),
                    Be) {
                        if (!Be)
                            throw Error(o(198));
                        var c = We;
                        Be = !1,
                        We = null,
                        $e || ($e = !0,
                        Qe = c)
                    }
                }(n, t, void 0, e),
                e.currentTarget = null
            }
            function _n(e, t) {
                t = 0 !== (4 & t);
                for (var a = 0; a < e.length; a++) {
                    var n = e[a]
                      , r = n.event;
                    n = n.listeners;
                    e: {
                        var s = void 0;
                        if (t)
                            for (var o = n.length - 1; 0 <= o; o--) {
                                var i = n[o]
                                  , l = i.instance
                                  , u = i.currentTarget;
                                if (i = i.listener,
                                l !== s && r.isPropagationStopped())
                                    break e;
                                Tn(r, i, u),
                                s = l
                            }
                        else
                            for (o = 0; o < n.length; o++) {
                                if (l = (i = n[o]).instance,
                                u = i.currentTarget,
                                i = i.listener,
                                l !== s && r.isPropagationStopped())
                                    break e;
                                Tn(r, i, u),
                                s = l
                            }
                    }
                }
                if ($e)
                    throw e = Qe,
                    $e = !1,
                    Qe = null,
                    e
            }
            function Pn(e, t) {
                var a = or(t)
                  , n = e + "__bubble";
                a.has(n) || (Dn(t, e, 2, !1),
                a.add(n))
            }
            var On = "_reactListening" + Math.random().toString(36).slice(2);
            function Nn(e) {
                e[On] || (e[On] = !0,
                i.forEach((function(t) {
                    Cn.has(t) || Ln(t, !1, e, null),
                    Ln(t, !0, e, null)
                }
                )))
            }
            function Ln(e, t, a, n) {
                var r = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0
                  , s = a;
                if ("selectionchange" === e && 9 !== a.nodeType && (s = a.ownerDocument),
                null !== n && !t && Cn.has(e)) {
                    if ("scroll" !== e)
                        return;
                    r |= 2,
                    s = n
                }
                var o = or(s)
                  , i = e + "__" + (t ? "capture" : "bubble");
                o.has(i) || (t && (r |= 4),
                Dn(s, e, r, t),
                o.add(i))
            }
            function Dn(e, t, a, n) {
                var r = Lt.get(t);
                switch (void 0 === r ? 2 : r) {
                case 0:
                    r = Gt;
                    break;
                case 1:
                    r = Xt;
                    break;
                default:
                    r = Jt
                }
                a = r.bind(null, t, a, e),
                r = void 0,
                !Ue || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (r = !0),
                n ? void 0 !== r ? e.addEventListener(t, a, {
                    capture: !0,
                    passive: r
                }) : e.addEventListener(t, a, !0) : void 0 !== r ? e.addEventListener(t, a, {
                    passive: r
                }) : e.addEventListener(t, a, !1)
            }
            function Rn(e, t, a, n, r) {
                var s = n;
                if (0 === (1 & t) && 0 === (2 & t) && null !== n)
                    e: for (; ; ) {
                        if (null === n)
                            return;
                        var o = n.tag;
                        if (3 === o || 4 === o) {
                            var i = n.stateNode.containerInfo;
                            if (i === r || 8 === i.nodeType && i.parentNode === r)
                                break;
                            if (4 === o)
                                for (o = n.return; null !== o; ) {
                                    var l = o.tag;
                                    if ((3 === l || 4 === l) && ((l = o.stateNode.containerInfo) === r || 8 === l.nodeType && l.parentNode === r))
                                        return;
                                    o = o.return
                                }
                            for (; null !== i; ) {
                                if (null === (o = ar(i)))
                                    return;
                                if (5 === (l = o.tag) || 6 === l) {
                                    n = s = o;
                                    continue e
                                }
                                i = i.parentNode
                            }
                        }
                        n = n.return
                    }
                !function(e, t, a) {
                    if (Ie)
                        return e(t, a);
                    Ie = !0;
                    try {
                        Me(e, t, a)
                    } finally {
                        Ie = !1,
                        Ae()
                    }
                }((function() {
                    var n = s
                      , r = Ee(a)
                      , o = [];
                    e: {
                        var i = Nt.get(e);
                        if (void 0 !== i) {
                            var l = fa
                              , u = e;
                            switch (e) {
                            case "keypress":
                                if (0 === ra(a))
                                    break e;
                            case "keydown":
                            case "keyup":
                                l = _a;
                                break;
                            case "focusin":
                                u = "focus",
                                l = ba;
                                break;
                            case "focusout":
                                u = "blur",
                                l = ba;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                l = ba;
                                break;
                            case "click":
                                if (2 === a.button)
                                    break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                l = ya;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                l = ga;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                l = Oa;
                                break;
                            case Tt:
                            case _t:
                            case Pt:
                                l = va;
                                break;
                            case Ot:
                                l = Na;
                                break;
                            case "scroll":
                                l = ma;
                                break;
                            case "wheel":
                                l = Da;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                l = wa;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                l = Pa
                            }
                            var c = 0 !== (4 & t)
                              , d = !c && "scroll" === e
                              , f = c ? null !== i ? i + "Capture" : null : i;
                            c = [];
                            for (var p, m = n; null !== m; ) {
                                var h = (p = m).stateNode;
                                if (5 === p.tag && null !== h && (p = h,
                                null !== f && (null != (h = qe(m, f)) && c.push(Mn(m, h, p)))),
                                d)
                                    break;
                                m = m.return
                            }
                            0 < c.length && (i = new l(i,u,null,a,r),
                            o.push({
                                event: i,
                                listeners: c
                            }))
                        }
                    }
                    if (0 === (7 & t)) {
                        if (l = "mouseout" === e || "pointerout" === e,
                        (!(i = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(u = a.relatedTarget || a.fromElement) || !ar(u) && !u[er]) && (l || i) && (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window,
                        l ? (l = n,
                        null !== (u = (u = a.relatedTarget || a.toElement) ? ar(u) : null) && (u !== (d = Ge(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null,
                        u = n),
                        l !== u)) {
                            if (c = ya,
                            h = "onMouseLeave",
                            f = "onMouseEnter",
                            m = "mouse",
                            "pointerout" !== e && "pointerover" !== e || (c = Pa,
                            h = "onPointerLeave",
                            f = "onPointerEnter",
                            m = "pointer"),
                            d = null == l ? i : rr(l),
                            p = null == u ? i : rr(u),
                            (i = new c(h,m + "leave",l,a,r)).target = d,
                            i.relatedTarget = p,
                            h = null,
                            ar(r) === n && ((c = new c(f,m + "enter",u,a,r)).target = p,
                            c.relatedTarget = d,
                            h = c),
                            d = h,
                            l && u)
                                e: {
                                    for (f = u,
                                    m = 0,
                                    p = c = l; p; p = In(p))
                                        m++;
                                    for (p = 0,
                                    h = f; h; h = In(h))
                                        p++;
                                    for (; 0 < m - p; )
                                        c = In(c),
                                        m--;
                                    for (; 0 < p - m; )
                                        f = In(f),
                                        p--;
                                    for (; m--; ) {
                                        if (c === f || null !== f && c === f.alternate)
                                            break e;
                                        c = In(c),
                                        f = In(f)
                                    }
                                    c = null
                                }
                            else
                                c = null;
                            null !== l && An(o, i, l, c, !1),
                            null !== u && null !== d && An(o, d, u, c, !0)
                        }
                        if ("select" === (l = (i = n ? rr(n) : window).nodeName && i.nodeName.toLowerCase()) || "input" === l && "file" === i.type)
                            var y = Ja;
                        else if ($a(i))
                            if (Za)
                                y = un;
                            else {
                                y = on;
                                var g = sn
                            }
                        else
                            (l = i.nodeName) && "input" === l.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (y = ln);
                        switch (y && (y = y(e, n)) ? Qa(o, y, a, r) : (g && g(e, i, n),
                        "focusout" === e && (g = i._wrapperState) && g.controlled && "number" === i.type && re(i, "number", i.value)),
                        g = n ? rr(n) : window,
                        e) {
                        case "focusin":
                            ($a(g) || "true" === g.contentEditable) && (vn = g,
                            kn = n,
                            wn = null);
                            break;
                        case "focusout":
                            wn = kn = vn = null;
                            break;
                        case "mousedown":
                            xn = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            xn = !1,
                            zn(o, a, r);
                            break;
                        case "selectionchange":
                            if (bn)
                                break;
                        case "keydown":
                        case "keyup":
                            zn(o, a, r)
                        }
                        var b;
                        if (Ma)
                            e: {
                                switch (e) {
                                case "compositionstart":
                                    var v = "onCompositionStart";
                                    break e;
                                case "compositionend":
                                    v = "onCompositionEnd";
                                    break e;
                                case "compositionupdate":
                                    v = "onCompositionUpdate";
                                    break e
                                }
                                v = void 0
                            }
                        else
                            Ba ? Ha(e, a) && (v = "onCompositionEnd") : "keydown" === e && 229 === a.keyCode && (v = "onCompositionStart");
                        v && (Aa && "ko" !== a.locale && (Ba || "onCompositionStart" !== v ? "onCompositionEnd" === v && Ba && (b = na()) : (ta = "value"in (ea = r) ? ea.value : ea.textContent,
                        Ba = !0)),
                        0 < (g = Fn(n, v)).length && (v = new xa(v,e,null,a,r),
                        o.push({
                            event: v,
                            listeners: g
                        }),
                        b ? v.data = b : null !== (b = Va(a)) && (v.data = b))),
                        (b = Ia ? function(e, t) {
                            switch (e) {
                            case "compositionend":
                                return Va(t);
                            case "keypress":
                                return 32 !== t.which ? null : (Ua = !0,
                                qa);
                            case "textInput":
                                return (e = t.data) === qa && Ua ? null : e;
                            default:
                                return null
                            }
                        }(e, a) : function(e, t) {
                            if (Ba)
                                return "compositionend" === e || !Ma && Ha(e, t) ? (e = na(),
                                aa = ta = ea = null,
                                Ba = !1,
                                e) : null;
                            switch (e) {
                            case "paste":
                            default:
                                return null;
                            case "keypress":
                                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                    if (t.char && 1 < t.char.length)
                                        return t.char;
                                    if (t.which)
                                        return String.fromCharCode(t.which)
                                }
                                return null;
                            case "compositionend":
                                return Aa && "ko" !== t.locale ? null : t.data
                            }
                        }(e, a)) && (0 < (n = Fn(n, "onBeforeInput")).length && (r = new xa("onBeforeInput","beforeinput",null,a,r),
                        o.push({
                            event: r,
                            listeners: n
                        }),
                        r.data = b))
                    }
                    _n(o, t)
                }
                ))
            }
            function Mn(e, t, a) {
                return {
                    instance: e,
                    listener: t,
                    currentTarget: a
                }
            }
            function Fn(e, t) {
                for (var a = t + "Capture", n = []; null !== e; ) {
                    var r = e
                      , s = r.stateNode;
                    5 === r.tag && null !== s && (r = s,
                    null != (s = qe(e, a)) && n.unshift(Mn(e, s, r)),
                    null != (s = qe(e, t)) && n.push(Mn(e, s, r))),
                    e = e.return
                }
                return n
            }
            function In(e) {
                if (null === e)
                    return null;
                do {
                    e = e.return
                } while (e && 5 !== e.tag);
                return e || null
            }
            function An(e, t, a, n, r) {
                for (var s = t._reactName, o = []; null !== a && a !== n; ) {
                    var i = a
                      , l = i.alternate
                      , u = i.stateNode;
                    if (null !== l && l === n)
                        break;
                    5 === i.tag && null !== u && (i = u,
                    r ? null != (l = qe(a, s)) && o.unshift(Mn(a, l, i)) : r || null != (l = qe(a, s)) && o.push(Mn(a, l, i))),
                    a = a.return
                }
                0 !== o.length && e.push({
                    event: t,
                    listeners: o
                })
            }
            function qn() {}
            var Un = null
              , Hn = null;
            function Vn(e, t) {
                switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    return !!t.autoFocus
                }
                return !1
            }
            function Bn(e, t) {
                return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
            }
            var Wn = "function" === typeof setTimeout ? setTimeout : void 0
              , $n = "function" === typeof clearTimeout ? clearTimeout : void 0;
            function Qn(e) {
                1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
            }
            function Yn(e) {
                for (; null != e; e = e.nextSibling) {
                    var t = e.nodeType;
                    if (1 === t || 3 === t)
                        break
                }
                return e
            }
            function Kn(e) {
                e = e.previousSibling;
                for (var t = 0; e; ) {
                    if (8 === e.nodeType) {
                        var a = e.data;
                        if ("$" === a || "$!" === a || "$?" === a) {
                            if (0 === t)
                                return e;
                            t--
                        } else
                            "/$" === a && t++
                    }
                    e = e.previousSibling
                }
                return null
            }
            var Gn = 0;
            var Xn = Math.random().toString(36).slice(2)
              , Jn = "__reactFiber$" + Xn
              , Zn = "__reactProps$" + Xn
              , er = "__reactContainer$" + Xn
              , tr = "__reactEvents$" + Xn;
            function ar(e) {
                var t = e[Jn];
                if (t)
                    return t;
                for (var a = e.parentNode; a; ) {
                    if (t = a[er] || a[Jn]) {
                        if (a = t.alternate,
                        null !== t.child || null !== a && null !== a.child)
                            for (e = Kn(e); null !== e; ) {
                                if (a = e[Jn])
                                    return a;
                                e = Kn(e)
                            }
                        return t
                    }
                    a = (e = a).parentNode
                }
                return null
            }
            function nr(e) {
                return !(e = e[Jn] || e[er]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
            }
            function rr(e) {
                if (5 === e.tag || 6 === e.tag)
                    return e.stateNode;
                throw Error(o(33))
            }
            function sr(e) {
                return e[Zn] || null
            }
            function or(e) {
                var t = e[tr];
                return void 0 === t && (t = e[tr] = new Set),
                t
            }
            var ir = []
              , lr = -1;
            function ur(e) {
                return {
                    current: e
                }
            }
            function cr(e) {
                0 > lr || (e.current = ir[lr],
                ir[lr] = null,
                lr--)
            }
            function dr(e, t) {
                lr++,
                ir[lr] = e.current,
                e.current = t
            }
            var fr = {}
              , pr = ur(fr)
              , mr = ur(!1)
              , hr = fr;
            function yr(e, t) {
                var a = e.type.contextTypes;
                if (!a)
                    return fr;
                var n = e.stateNode;
                if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
                    return n.__reactInternalMemoizedMaskedChildContext;
                var r, s = {};
                for (r in a)
                    s[r] = t[r];
                return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t,
                e.__reactInternalMemoizedMaskedChildContext = s),
                s
            }
            function gr(e) {
                return null !== (e = e.childContextTypes) && void 0 !== e
            }
            function br() {
                cr(mr),
                cr(pr)
            }
            function vr(e, t, a) {
                if (pr.current !== fr)
                    throw Error(o(168));
                dr(pr, t),
                dr(mr, a)
            }
            function kr(e, t, a) {
                var n = e.stateNode;
                if (e = t.childContextTypes,
                "function" !== typeof n.getChildContext)
                    return a;
                for (var s in n = n.getChildContext())
                    if (!(s in e))
                        throw Error(o(108, Q(t) || "Unknown", s));
                return r({}, a, n)
            }
            function wr(e) {
                return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fr,
                hr = pr.current,
                dr(pr, e),
                dr(mr, mr.current),
                !0
            }
            function xr(e, t, a) {
                var n = e.stateNode;
                if (!n)
                    throw Error(o(169));
                a ? (e = kr(e, t, hr),
                n.__reactInternalMemoizedMergedChildContext = e,
                cr(mr),
                cr(pr),
                dr(pr, e)) : cr(mr),
                dr(mr, a)
            }
            var zr = null
              , jr = null
              , Sr = s.unstable_runWithPriority
              , Er = s.unstable_scheduleCallback
              , Cr = s.unstable_cancelCallback
              , Tr = s.unstable_shouldYield
              , _r = s.unstable_requestPaint
              , Pr = s.unstable_now
              , Or = s.unstable_getCurrentPriorityLevel
              , Nr = s.unstable_ImmediatePriority
              , Lr = s.unstable_UserBlockingPriority
              , Dr = s.unstable_NormalPriority
              , Rr = s.unstable_LowPriority
              , Mr = s.unstable_IdlePriority
              , Fr = {}
              , Ir = void 0 !== _r ? _r : function() {}
              , Ar = null
              , qr = null
              , Ur = !1
              , Hr = Pr()
              , Vr = 1e4 > Hr ? Pr : function() {
                return Pr() - Hr
            }
            ;
            function Br() {
                switch (Or()) {
                case Nr:
                    return 99;
                case Lr:
                    return 98;
                case Dr:
                    return 97;
                case Rr:
                    return 96;
                case Mr:
                    return 95;
                default:
                    throw Error(o(332))
                }
            }
            function Wr(e) {
                switch (e) {
                case 99:
                    return Nr;
                case 98:
                    return Lr;
                case 97:
                    return Dr;
                case 96:
                    return Rr;
                case 95:
                    return Mr;
                default:
                    throw Error(o(332))
                }
            }
            function $r(e, t) {
                return e = Wr(e),
                Sr(e, t)
            }
            function Qr(e, t, a) {
                return e = Wr(e),
                Er(e, t, a)
            }
            function Yr() {
                if (null !== qr) {
                    var e = qr;
                    qr = null,
                    Cr(e)
                }
                Kr()
            }
            function Kr() {
                if (!Ur && null !== Ar) {
                    Ur = !0;
                    var e = 0;
                    try {
                        var t = Ar;
                        $r(99, (function() {
                            for (; e < t.length; e++) {
                                var a = t[e];
                                do {
                                    a = a(!0)
                                } while (null !== a)
                            }
                        }
                        )),
                        Ar = null
                    } catch (a) {
                        throw null !== Ar && (Ar = Ar.slice(e + 1)),
                        Er(Nr, Yr),
                        a
                    } finally {
                        Ur = !1
                    }
                }
            }
            var Gr = w.ReactCurrentBatchConfig;
            function Xr(e, t) {
                if (e && e.defaultProps) {
                    for (var a in t = r({}, t),
                    e = e.defaultProps)
                        void 0 === t[a] && (t[a] = e[a]);
                    return t
                }
                return t
            }
            var Jr = ur(null)
              , Zr = null
              , es = null
              , ts = null;
            function as() {
                ts = es = Zr = null
            }
            function ns(e) {
                var t = Jr.current;
                cr(Jr),
                e.type._context._currentValue = t
            }
            function rs(e, t) {
                for (; null !== e; ) {
                    var a = e.alternate;
                    if ((e.childLanes & t) === t) {
                        if (null === a || (a.childLanes & t) === t)
                            break;
                        a.childLanes |= t
                    } else
                        e.childLanes |= t,
                        null !== a && (a.childLanes |= t);
                    e = e.return
                }
            }
            function ss(e, t) {
                Zr = e,
                ts = es = null,
                null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Fo = !0),
                e.firstContext = null)
            }
            function os(e, t) {
                if (ts !== e && !1 !== t && 0 !== t)
                    if ("number" === typeof t && 1073741823 !== t || (ts = e,
                    t = 1073741823),
                    t = {
                        context: e,
                        observedBits: t,
                        next: null
                    },
                    null === es) {
                        if (null === Zr)
                            throw Error(o(308));
                        es = t,
                        Zr.dependencies = {
                            lanes: 0,
                            firstContext: t,
                            responders: null
                        }
                    } else
                        es = es.next = t;
                return e._currentValue
            }
            var is = !1;
            function ls(e) {
                e.updateQueue = {
                    baseState: e.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {
                        pending: null
                    },
                    effects: null
                }
            }
            function us(e, t) {
                e = e.updateQueue,
                t.updateQueue === e && (t.updateQueue = {
                    baseState: e.baseState,
                    firstBaseUpdate: e.firstBaseUpdate,
                    lastBaseUpdate: e.lastBaseUpdate,
                    shared: e.shared,
                    effects: e.effects
                })
            }
            function cs(e, t) {
                return {
                    eventTime: e,
                    lane: t,
                    tag: 0,
                    payload: null,
                    callback: null,
                    next: null
                }
            }
            function ds(e, t) {
                if (null !== (e = e.updateQueue)) {
                    var a = (e = e.shared).pending;
                    null === a ? t.next = t : (t.next = a.next,
                    a.next = t),
                    e.pending = t
                }
            }
            function fs(e, t) {
                var a = e.updateQueue
                  , n = e.alternate;
                if (null !== n && a === (n = n.updateQueue)) {
                    var r = null
                      , s = null;
                    if (null !== (a = a.firstBaseUpdate)) {
                        do {
                            var o = {
                                eventTime: a.eventTime,
                                lane: a.lane,
                                tag: a.tag,
                                payload: a.payload,
                                callback: a.callback,
                                next: null
                            };
                            null === s ? r = s = o : s = s.next = o,
                            a = a.next
                        } while (null !== a);
                        null === s ? r = s = t : s = s.next = t
                    } else
                        r = s = t;
                    return a = {
                        baseState: n.baseState,
                        firstBaseUpdate: r,
                        lastBaseUpdate: s,
                        shared: n.shared,
                        effects: n.effects
                    },
                    void (e.updateQueue = a)
                }
                null === (e = a.lastBaseUpdate) ? a.firstBaseUpdate = t : e.next = t,
                a.lastBaseUpdate = t
            }
            function ps(e, t, a, n) {
                var s = e.updateQueue;
                is = !1;
                var o = s.firstBaseUpdate
                  , i = s.lastBaseUpdate
                  , l = s.shared.pending;
                if (null !== l) {
                    s.shared.pending = null;
                    var u = l
                      , c = u.next;
                    u.next = null,
                    null === i ? o = c : i.next = c,
                    i = u;
                    var d = e.alternate;
                    if (null !== d) {
                        var f = (d = d.updateQueue).lastBaseUpdate;
                        f !== i && (null === f ? d.firstBaseUpdate = c : f.next = c,
                        d.lastBaseUpdate = u)
                    }
                }
                if (null !== o) {
                    for (f = s.baseState,
                    i = 0,
                    d = c = u = null; ; ) {
                        l = o.lane;
                        var p = o.eventTime;
                        if ((n & l) === l) {
                            null !== d && (d = d.next = {
                                eventTime: p,
                                lane: 0,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            });
                            e: {
                                var m = e
                                  , h = o;
                                switch (l = t,
                                p = a,
                                h.tag) {
                                case 1:
                                    if ("function" === typeof (m = h.payload)) {
                                        f = m.call(p, f, l);
                                        break e
                                    }
                                    f = m;
                                    break e;
                                case 3:
                                    m.flags = -4097 & m.flags | 64;
                                case 0:
                                    if (null === (l = "function" === typeof (m = h.payload) ? m.call(p, f, l) : m) || void 0 === l)
                                        break e;
                                    f = r({}, f, l);
                                    break e;
                                case 2:
                                    is = !0
                                }
                            }
                            null !== o.callback && (e.flags |= 32,
                            null === (l = s.effects) ? s.effects = [o] : l.push(o))
                        } else
                            p = {
                                eventTime: p,
                                lane: l,
                                tag: o.tag,
                                payload: o.payload,
                                callback: o.callback,
                                next: null
                            },
                            null === d ? (c = d = p,
                            u = f) : d = d.next = p,
                            i |= l;
                        if (null === (o = o.next)) {
                            if (null === (l = s.shared.pending))
                                break;
                            o = l.next,
                            l.next = null,
                            s.lastBaseUpdate = l,
                            s.shared.pending = null
                        }
                    }
                    null === d && (u = f),
                    s.baseState = u,
                    s.firstBaseUpdate = c,
                    s.lastBaseUpdate = d,
                    Ui |= i,
                    e.lanes = i,
                    e.memoizedState = f
                }
            }
            function ms(e, t, a) {
                if (e = t.effects,
                t.effects = null,
                null !== e)
                    for (t = 0; t < e.length; t++) {
                        var n = e[t]
                          , r = n.callback;
                        if (null !== r) {
                            if (n.callback = null,
                            n = a,
                            "function" !== typeof r)
                                throw Error(o(191, r));
                            r.call(n)
                        }
                    }
            }
            var hs = (new n.Component).refs;
            function ys(e, t, a, n) {
                a = null === (a = a(n, t = e.memoizedState)) || void 0 === a ? t : r({}, t, a),
                e.memoizedState = a,
                0 === e.lanes && (e.updateQueue.baseState = a)
            }
            var gs = {
                isMounted: function(e) {
                    return !!(e = e._reactInternals) && Ge(e) === e
                },
                enqueueSetState: function(e, t, a) {
                    e = e._reactInternals;
                    var n = fl()
                      , r = pl(e)
                      , s = cs(n, r);
                    s.payload = t,
                    void 0 !== a && null !== a && (s.callback = a),
                    ds(e, s),
                    ml(e, r, n)
                },
                enqueueReplaceState: function(e, t, a) {
                    e = e._reactInternals;
                    var n = fl()
                      , r = pl(e)
                      , s = cs(n, r);
                    s.tag = 1,
                    s.payload = t,
                    void 0 !== a && null !== a && (s.callback = a),
                    ds(e, s),
                    ml(e, r, n)
                },
                enqueueForceUpdate: function(e, t) {
                    e = e._reactInternals;
                    var a = fl()
                      , n = pl(e)
                      , r = cs(a, n);
                    r.tag = 2,
                    void 0 !== t && null !== t && (r.callback = t),
                    ds(e, r),
                    ml(e, n, a)
                }
            };
            function bs(e, t, a, n, r, s, o) {
                return "function" === typeof (e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, s, o) : !t.prototype || !t.prototype.isPureReactComponent || (!fn(a, n) || !fn(r, s))
            }
            function vs(e, t, a) {
                var n = !1
                  , r = fr
                  , s = t.contextType;
                return "object" === typeof s && null !== s ? s = os(s) : (r = gr(t) ? hr : pr.current,
                s = (n = null !== (n = t.contextTypes) && void 0 !== n) ? yr(e, r) : fr),
                t = new t(a,s),
                e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null,
                t.updater = gs,
                e.stateNode = t,
                t._reactInternals = e,
                n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r,
                e.__reactInternalMemoizedMaskedChildContext = s),
                t
            }
            function ks(e, t, a, n) {
                e = t.state,
                "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(a, n),
                "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(a, n),
                t.state !== e && gs.enqueueReplaceState(t, t.state, null)
            }
            function ws(e, t, a, n) {
                var r = e.stateNode;
                r.props = a,
                r.state = e.memoizedState,
                r.refs = hs,
                ls(e);
                var s = t.contextType;
                "object" === typeof s && null !== s ? r.context = os(s) : (s = gr(t) ? hr : pr.current,
                r.context = yr(e, s)),
                ps(e, a, r, n),
                r.state = e.memoizedState,
                "function" === typeof (s = t.getDerivedStateFromProps) && (ys(e, t, s, a),
                r.state = e.memoizedState),
                "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state,
                "function" === typeof r.componentWillMount && r.componentWillMount(),
                "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(),
                t !== r.state && gs.enqueueReplaceState(r, r.state, null),
                ps(e, a, r, n),
                r.state = e.memoizedState),
                "function" === typeof r.componentDidMount && (e.flags |= 4)
            }
            var xs = Array.isArray;
            function zs(e, t, a) {
                if (null !== (e = a.ref) && "function" !== typeof e && "object" !== typeof e) {
                    if (a._owner) {
                        if (a = a._owner) {
                            if (1 !== a.tag)
                                throw Error(o(309));
                            var n = a.stateNode
                        }
                        if (!n)
                            throw Error(o(147, e));
                        var r = "" + e;
                        return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r ? t.ref : (t = function(e) {
                            var t = n.refs;
                            t === hs && (t = n.refs = {}),
                            null === e ? delete t[r] : t[r] = e
                        }
                        ,
                        t._stringRef = r,
                        t)
                    }
                    if ("string" !== typeof e)
                        throw Error(o(284));
                    if (!a._owner)
                        throw Error(o(290, e))
                }
                return e
            }
            function js(e, t) {
                if ("textarea" !== e.type)
                    throw Error(o(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
            }
            function Ss(e) {
                function t(t, a) {
                    if (e) {
                        var n = t.lastEffect;
                        null !== n ? (n.nextEffect = a,
                        t.lastEffect = a) : t.firstEffect = t.lastEffect = a,
                        a.nextEffect = null,
                        a.flags = 8
                    }
                }
                function a(a, n) {
                    if (!e)
                        return null;
                    for (; null !== n; )
                        t(a, n),
                        n = n.sibling;
                    return null
                }
                function n(e, t) {
                    for (e = new Map; null !== t; )
                        null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                        t = t.sibling;
                    return e
                }
                function r(e, t) {
                    return (e = $l(e, t)).index = 0,
                    e.sibling = null,
                    e
                }
                function s(t, a, n) {
                    return t.index = n,
                    e ? null !== (n = t.alternate) ? (n = n.index) < a ? (t.flags = 2,
                    a) : n : (t.flags = 2,
                    a) : a
                }
                function i(t) {
                    return e && null === t.alternate && (t.flags = 2),
                    t
                }
                function l(e, t, a, n) {
                    return null === t || 6 !== t.tag ? ((t = Gl(a, e.mode, n)).return = e,
                    t) : ((t = r(t, a)).return = e,
                    t)
                }
                function u(e, t, a, n) {
                    return null !== t && t.elementType === a.type ? ((n = r(t, a.props)).ref = zs(e, t, a),
                    n.return = e,
                    n) : ((n = Ql(a.type, a.key, a.props, null, e.mode, n)).ref = zs(e, t, a),
                    n.return = e,
                    n)
                }
                function c(e, t, a, n) {
                    return null === t || 4 !== t.tag || t.stateNode.containerInfo !== a.containerInfo || t.stateNode.implementation !== a.implementation ? ((t = Xl(a, e.mode, n)).return = e,
                    t) : ((t = r(t, a.children || [])).return = e,
                    t)
                }
                function d(e, t, a, n, s) {
                    return null === t || 7 !== t.tag ? ((t = Yl(a, e.mode, n, s)).return = e,
                    t) : ((t = r(t, a)).return = e,
                    t)
                }
                function f(e, t, a) {
                    if ("string" === typeof t || "number" === typeof t)
                        return (t = Gl("" + t, e.mode, a)).return = e,
                        t;
                    if ("object" === typeof t && null !== t) {
                        switch (t.$$typeof) {
                        case x:
                            return (a = Ql(t.type, t.key, t.props, null, e.mode, a)).ref = zs(e, null, t),
                            a.return = e,
                            a;
                        case z:
                            return (t = Xl(t, e.mode, a)).return = e,
                            t
                        }
                        if (xs(t) || H(t))
                            return (t = Yl(t, e.mode, a, null)).return = e,
                            t;
                        js(e, t)
                    }
                    return null
                }
                function p(e, t, a, n) {
                    var r = null !== t ? t.key : null;
                    if ("string" === typeof a || "number" === typeof a)
                        return null !== r ? null : l(e, t, "" + a, n);
                    if ("object" === typeof a && null !== a) {
                        switch (a.$$typeof) {
                        case x:
                            return a.key === r ? a.type === j ? d(e, t, a.props.children, n, r) : u(e, t, a, n) : null;
                        case z:
                            return a.key === r ? c(e, t, a, n) : null
                        }
                        if (xs(a) || H(a))
                            return null !== r ? null : d(e, t, a, n, null);
                        js(e, a)
                    }
                    return null
                }
                function m(e, t, a, n, r) {
                    if ("string" === typeof n || "number" === typeof n)
                        return l(t, e = e.get(a) || null, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                        case x:
                            return e = e.get(null === n.key ? a : n.key) || null,
                            n.type === j ? d(t, e, n.props.children, r, n.key) : u(t, e, n, r);
                        case z:
                            return c(t, e = e.get(null === n.key ? a : n.key) || null, n, r)
                        }
                        if (xs(n) || H(n))
                            return d(t, e = e.get(a) || null, n, r, null);
                        js(t, n)
                    }
                    return null
                }
                function h(r, o, i, l) {
                    for (var u = null, c = null, d = o, h = o = 0, y = null; null !== d && h < i.length; h++) {
                        d.index > h ? (y = d,
                        d = null) : y = d.sibling;
                        var g = p(r, d, i[h], l);
                        if (null === g) {
                            null === d && (d = y);
                            break
                        }
                        e && d && null === g.alternate && t(r, d),
                        o = s(g, o, h),
                        null === c ? u = g : c.sibling = g,
                        c = g,
                        d = y
                    }
                    if (h === i.length)
                        return a(r, d),
                        u;
                    if (null === d) {
                        for (; h < i.length; h++)
                            null !== (d = f(r, i[h], l)) && (o = s(d, o, h),
                            null === c ? u = d : c.sibling = d,
                            c = d);
                        return u
                    }
                    for (d = n(r, d); h < i.length; h++)
                        null !== (y = m(d, r, h, i[h], l)) && (e && null !== y.alternate && d.delete(null === y.key ? h : y.key),
                        o = s(y, o, h),
                        null === c ? u = y : c.sibling = y,
                        c = y);
                    return e && d.forEach((function(e) {
                        return t(r, e)
                    }
                    )),
                    u
                }
                function y(r, i, l, u) {
                    var c = H(l);
                    if ("function" !== typeof c)
                        throw Error(o(150));
                    if (null == (l = c.call(l)))
                        throw Error(o(151));
                    for (var d = c = null, h = i, y = i = 0, g = null, b = l.next(); null !== h && !b.done; y++,
                    b = l.next()) {
                        h.index > y ? (g = h,
                        h = null) : g = h.sibling;
                        var v = p(r, h, b.value, u);
                        if (null === v) {
                            null === h && (h = g);
                            break
                        }
                        e && h && null === v.alternate && t(r, h),
                        i = s(v, i, y),
                        null === d ? c = v : d.sibling = v,
                        d = v,
                        h = g
                    }
                    if (b.done)
                        return a(r, h),
                        c;
                    if (null === h) {
                        for (; !b.done; y++,
                        b = l.next())
                            null !== (b = f(r, b.value, u)) && (i = s(b, i, y),
                            null === d ? c = b : d.sibling = b,
                            d = b);
                        return c
                    }
                    for (h = n(r, h); !b.done; y++,
                    b = l.next())
                        null !== (b = m(h, r, y, b.value, u)) && (e && null !== b.alternate && h.delete(null === b.key ? y : b.key),
                        i = s(b, i, y),
                        null === d ? c = b : d.sibling = b,
                        d = b);
                    return e && h.forEach((function(e) {
                        return t(r, e)
                    }
                    )),
                    c
                }
                return function(e, n, s, l) {
                    var u = "object" === typeof s && null !== s && s.type === j && null === s.key;
                    u && (s = s.props.children);
                    var c = "object" === typeof s && null !== s;
                    if (c)
                        switch (s.$$typeof) {
                        case x:
                            e: {
                                for (c = s.key,
                                u = n; null !== u; ) {
                                    if (u.key === c) {
                                        if (7 === u.tag) {
                                            if (s.type === j) {
                                                a(e, u.sibling),
                                                (n = r(u, s.props.children)).return = e,
                                                e = n;
                                                break e
                                            }
                                        } else if (u.elementType === s.type) {
                                            a(e, u.sibling),
                                            (n = r(u, s.props)).ref = zs(e, u, s),
                                            n.return = e,
                                            e = n;
                                            break e
                                        }
                                        a(e, u);
                                        break
                                    }
                                    t(e, u),
                                    u = u.sibling
                                }
                                s.type === j ? ((n = Yl(s.props.children, e.mode, l, s.key)).return = e,
                                e = n) : ((l = Ql(s.type, s.key, s.props, null, e.mode, l)).ref = zs(e, n, s),
                                l.return = e,
                                e = l)
                            }
                            return i(e);
                        case z:
                            e: {
                                for (u = s.key; null !== n; ) {
                                    if (n.key === u) {
                                        if (4 === n.tag && n.stateNode.containerInfo === s.containerInfo && n.stateNode.implementation === s.implementation) {
                                            a(e, n.sibling),
                                            (n = r(n, s.children || [])).return = e,
                                            e = n;
                                            break e
                                        }
                                        a(e, n);
                                        break
                                    }
                                    t(e, n),
                                    n = n.sibling
                                }
                                (n = Xl(s, e.mode, l)).return = e,
                                e = n
                            }
                            return i(e)
                        }
                    if ("string" === typeof s || "number" === typeof s)
                        return s = "" + s,
                        null !== n && 6 === n.tag ? (a(e, n.sibling),
                        (n = r(n, s)).return = e,
                        e = n) : (a(e, n),
                        (n = Gl(s, e.mode, l)).return = e,
                        e = n),
                        i(e);
                    if (xs(s))
                        return h(e, n, s, l);
                    if (H(s))
                        return y(e, n, s, l);
                    if (c && js(e, s),
                    "undefined" === typeof s && !u)
                        switch (e.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(o(152, Q(e.type) || "Component"))
                        }
                    return a(e, n)
                }
            }
            var Es = Ss(!0)
              , Cs = Ss(!1)
              , Ts = {}
              , _s = ur(Ts)
              , Ps = ur(Ts)
              , Os = ur(Ts);
            function Ns(e) {
                if (e === Ts)
                    throw Error(o(174));
                return e
            }
            function Ls(e, t) {
                switch (dr(Os, t),
                dr(Ps, e),
                dr(_s, Ts),
                e = t.nodeType) {
                case 9:
                case 11:
                    t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
                    break;
                default:
                    t = me(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                }
                cr(_s),
                dr(_s, t)
            }
            function Ds() {
                cr(_s),
                cr(Ps),
                cr(Os)
            }
            function Rs(e) {
                Ns(Os.current);
                var t = Ns(_s.current)
                  , a = me(t, e.type);
                t !== a && (dr(Ps, e),
                dr(_s, a))
            }
            function Ms(e) {
                Ps.current === e && (cr(_s),
                cr(Ps))
            }
            var Fs = ur(0);
            function Is(e) {
                for (var t = e; null !== t; ) {
                    if (13 === t.tag) {
                        var a = t.memoizedState;
                        if (null !== a && (null === (a = a.dehydrated) || "$?" === a.data || "$!" === a.data))
                            return t
                    } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                        if (0 !== (64 & t.flags))
                            return t
                    } else if (null !== t.child) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === e)
                        break;
                    for (; null === t.sibling; ) {
                        if (null === t.return || t.return === e)
                            return null;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
                return null
            }
            var As = null
              , qs = null
              , Us = !1;
            function Hs(e, t) {
                var a = Bl(5, null, null, 0);
                a.elementType = "DELETED",
                a.type = "DELETED",
                a.stateNode = t,
                a.return = e,
                a.flags = 8,
                null !== e.lastEffect ? (e.lastEffect.nextEffect = a,
                e.lastEffect = a) : e.firstEffect = e.lastEffect = a
            }
            function Vs(e, t) {
                switch (e.tag) {
                case 5:
                    var a = e.type;
                    return null !== (t = 1 !== t.nodeType || a.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t,
                    !0);
                case 6:
                    return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t,
                    !0);
                default:
                    return !1
                }
            }
            function Bs(e) {
                if (Us) {
                    var t = qs;
                    if (t) {
                        var a = t;
                        if (!Vs(e, t)) {
                            if (!(t = Yn(a.nextSibling)) || !Vs(e, t))
                                return e.flags = -1025 & e.flags | 2,
                                Us = !1,
                                void (As = e);
                            Hs(As, a)
                        }
                        As = e,
                        qs = Yn(t.firstChild)
                    } else
                        e.flags = -1025 & e.flags | 2,
                        Us = !1,
                        As = e
                }
            }
            function Ws(e) {
                for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
                    e = e.return;
                As = e
            }
            function $s(e) {
                if (e !== As)
                    return !1;
                if (!Us)
                    return Ws(e),
                    Us = !0,
                    !1;
                var t = e.type;
                if (5 !== e.tag || "head" !== t && "body" !== t && !Bn(t, e.memoizedProps))
                    for (t = qs; t; )
                        Hs(e, t),
                        t = Yn(t.nextSibling);
                if (Ws(e),
                13 === e.tag) {
                    if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
                        throw Error(o(317));
                    e: {
                        for (e = e.nextSibling,
                        t = 0; e; ) {
                            if (8 === e.nodeType) {
                                var a = e.data;
                                if ("/$" === a) {
                                    if (0 === t) {
                                        qs = Yn(e.nextSibling);
                                        break e
                                    }
                                    t--
                                } else
                                    "$" !== a && "$!" !== a && "$?" !== a || t++
                            }
                            e = e.nextSibling
                        }
                        qs = null
                    }
                } else
                    qs = As ? Yn(e.stateNode.nextSibling) : null;
                return !0
            }
            function Qs() {
                qs = As = null,
                Us = !1
            }
            var Ys = [];
            function Ks() {
                for (var e = 0; e < Ys.length; e++)
                    Ys[e]._workInProgressVersionPrimary = null;
                Ys.length = 0
            }
            var Gs = w.ReactCurrentDispatcher
              , Xs = w.ReactCurrentBatchConfig
              , Js = 0
              , Zs = null
              , eo = null
              , to = null
              , ao = !1
              , no = !1;
            function ro() {
                throw Error(o(321))
            }
            function so(e, t) {
                if (null === t)
                    return !1;
                for (var a = 0; a < t.length && a < e.length; a++)
                    if (!cn(e[a], t[a]))
                        return !1;
                return !0
            }
            function oo(e, t, a, n, r, s) {
                if (Js = s,
                Zs = t,
                t.memoizedState = null,
                t.updateQueue = null,
                t.lanes = 0,
                Gs.current = null === e || null === e.memoizedState ? Lo : Do,
                e = a(n, r),
                no) {
                    s = 0;
                    do {
                        if (no = !1,
                        !(25 > s))
                            throw Error(o(301));
                        s += 1,
                        to = eo = null,
                        t.updateQueue = null,
                        Gs.current = Ro,
                        e = a(n, r)
                    } while (no)
                }
                if (Gs.current = No,
                t = null !== eo && null !== eo.next,
                Js = 0,
                to = eo = Zs = null,
                ao = !1,
                t)
                    throw Error(o(300));
                return e
            }
            function io() {
                var e = {
                    memoizedState: null,
                    baseState: null,
                    baseQueue: null,
                    queue: null,
                    next: null
                };
                return null === to ? Zs.memoizedState = to = e : to = to.next = e,
                to
            }
            function lo() {
                if (null === eo) {
                    var e = Zs.alternate;
                    e = null !== e ? e.memoizedState : null
                } else
                    e = eo.next;
                var t = null === to ? Zs.memoizedState : to.next;
                if (null !== t)
                    to = t,
                    eo = e;
                else {
                    if (null === e)
                        throw Error(o(310));
                    e = {
                        memoizedState: (eo = e).memoizedState,
                        baseState: eo.baseState,
                        baseQueue: eo.baseQueue,
                        queue: eo.queue,
                        next: null
                    },
                    null === to ? Zs.memoizedState = to = e : to = to.next = e
                }
                return to
            }
            function uo(e, t) {
                return "function" === typeof t ? t(e) : t
            }
            function co(e) {
                var t = lo()
                  , a = t.queue;
                if (null === a)
                    throw Error(o(311));
                a.lastRenderedReducer = e;
                var n = eo
                  , r = n.baseQueue
                  , s = a.pending;
                if (null !== s) {
                    if (null !== r) {
                        var i = r.next;
                        r.next = s.next,
                        s.next = i
                    }
                    n.baseQueue = r = s,
                    a.pending = null
                }
                if (null !== r) {
                    r = r.next,
                    n = n.baseState;
                    var l = i = s = null
                      , u = r;
                    do {
                        var c = u.lane;
                        if ((Js & c) === c)
                            null !== l && (l = l.next = {
                                lane: 0,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            }),
                            n = u.eagerReducer === e ? u.eagerState : e(n, u.action);
                        else {
                            var d = {
                                lane: c,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === l ? (i = l = d,
                            s = n) : l = l.next = d,
                            Zs.lanes |= c,
                            Ui |= c
                        }
                        u = u.next
                    } while (null !== u && u !== r);
                    null === l ? s = n : l.next = i,
                    cn(n, t.memoizedState) || (Fo = !0),
                    t.memoizedState = n,
                    t.baseState = s,
                    t.baseQueue = l,
                    a.lastRenderedState = n
                }
                return [t.memoizedState, a.dispatch]
            }
            function fo(e) {
                var t = lo()
                  , a = t.queue;
                if (null === a)
                    throw Error(o(311));
                a.lastRenderedReducer = e;
                var n = a.dispatch
                  , r = a.pending
                  , s = t.memoizedState;
                if (null !== r) {
                    a.pending = null;
                    var i = r = r.next;
                    do {
                        s = e(s, i.action),
                        i = i.next
                    } while (i !== r);
                    cn(s, t.memoizedState) || (Fo = !0),
                    t.memoizedState = s,
                    null === t.baseQueue && (t.baseState = s),
                    a.lastRenderedState = s
                }
                return [s, n]
            }
            function po(e, t, a) {
                var n = t._getVersion;
                n = n(t._source);
                var r = t._workInProgressVersionPrimary;
                if (null !== r ? e = r === n : (e = e.mutableReadLanes,
                (e = (Js & e) === e) && (t._workInProgressVersionPrimary = n,
                Ys.push(t))),
                e)
                    return a(t._source);
                throw Ys.push(t),
                Error(o(350))
            }
            function mo(e, t, a, n) {
                var r = Li;
                if (null === r)
                    throw Error(o(349));
                var s = t._getVersion
                  , i = s(t._source)
                  , l = Gs.current
                  , u = l.useState((function() {
                    return po(r, t, a)
                }
                ))
                  , c = u[1]
                  , d = u[0];
                u = to;
                var f = e.memoizedState
                  , p = f.refs
                  , m = p.getSnapshot
                  , h = f.source;
                f = f.subscribe;
                var y = Zs;
                return e.memoizedState = {
                    refs: p,
                    source: t,
                    subscribe: n
                },
                l.useEffect((function() {
                    p.getSnapshot = a,
                    p.setSnapshot = c;
                    var e = s(t._source);
                    if (!cn(i, e)) {
                        e = a(t._source),
                        cn(d, e) || (c(e),
                        e = pl(y),
                        r.mutableReadLanes |= e & r.pendingLanes),
                        e = r.mutableReadLanes,
                        r.entangledLanes |= e;
                        for (var n = r.entanglements, o = e; 0 < o; ) {
                            var l = 31 - Bt(o)
                              , u = 1 << l;
                            n[l] |= e,
                            o &= ~u
                        }
                    }
                }
                ), [a, t, n]),
                l.useEffect((function() {
                    return n(t._source, (function() {
                        var e = p.getSnapshot
                          , a = p.setSnapshot;
                        try {
                            a(e(t._source));
                            var n = pl(y);
                            r.mutableReadLanes |= n & r.pendingLanes
                        } catch (s) {
                            a((function() {
                                throw s
                            }
                            ))
                        }
                    }
                    ))
                }
                ), [t, n]),
                cn(m, a) && cn(h, t) && cn(f, n) || ((e = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: uo,
                    lastRenderedState: d
                }).dispatch = c = Oo.bind(null, Zs, e),
                u.queue = e,
                u.baseQueue = null,
                d = po(r, t, a),
                u.memoizedState = u.baseState = d),
                d
            }
            function ho(e, t, a) {
                return mo(lo(), e, t, a)
            }
            function yo(e) {
                var t = io();
                return "function" === typeof e && (e = e()),
                t.memoizedState = t.baseState = e,
                e = (e = t.queue = {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: uo,
                    lastRenderedState: e
                }).dispatch = Oo.bind(null, Zs, e),
                [t.memoizedState, e]
            }
            function go(e, t, a, n) {
                return e = {
                    tag: e,
                    create: t,
                    destroy: a,
                    deps: n,
                    next: null
                },
                null === (t = Zs.updateQueue) ? (t = {
                    lastEffect: null
                },
                Zs.updateQueue = t,
                t.lastEffect = e.next = e) : null === (a = t.lastEffect) ? t.lastEffect = e.next = e : (n = a.next,
                a.next = e,
                e.next = n,
                t.lastEffect = e),
                e
            }
            function bo(e) {
                return e = {
                    current: e
                },
                io().memoizedState = e
            }
            function vo() {
                return lo().memoizedState
            }
            function ko(e, t, a, n) {
                var r = io();
                Zs.flags |= e,
                r.memoizedState = go(1 | t, a, void 0, void 0 === n ? null : n)
            }
            function wo(e, t, a, n) {
                var r = lo();
                n = void 0 === n ? null : n;
                var s = void 0;
                if (null !== eo) {
                    var o = eo.memoizedState;
                    if (s = o.destroy,
                    null !== n && so(n, o.deps))
                        return void go(t, a, s, n)
                }
                Zs.flags |= e,
                r.memoizedState = go(1 | t, a, s, n)
            }
            function xo(e, t) {
                return ko(516, 4, e, t)
            }
            function zo(e, t) {
                return wo(516, 4, e, t)
            }
            function jo(e, t) {
                return wo(4, 2, e, t)
            }
            function So(e, t) {
                return "function" === typeof t ? (e = e(),
                t(e),
                function() {
                    t(null)
                }
                ) : null !== t && void 0 !== t ? (e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
                ) : void 0
            }
            function Eo(e, t, a) {
                return a = null !== a && void 0 !== a ? a.concat([e]) : null,
                wo(4, 2, So.bind(null, t, e), a)
            }
            function Co() {}
            function To(e, t) {
                var a = lo();
                t = void 0 === t ? null : t;
                var n = a.memoizedState;
                return null !== n && null !== t && so(t, n[1]) ? n[0] : (a.memoizedState = [e, t],
                e)
            }
            function _o(e, t) {
                var a = lo();
                t = void 0 === t ? null : t;
                var n = a.memoizedState;
                return null !== n && null !== t && so(t, n[1]) ? n[0] : (e = e(),
                a.memoizedState = [e, t],
                e)
            }
            function Po(e, t) {
                var a = Br();
                $r(98 > a ? 98 : a, (function() {
                    e(!0)
                }
                )),
                $r(97 < a ? 97 : a, (function() {
                    var a = Xs.transition;
                    Xs.transition = 1;
                    try {
                        e(!1),
                        t()
                    } finally {
                        Xs.transition = a
                    }
                }
                ))
            }
            function Oo(e, t, a) {
                var n = fl()
                  , r = pl(e)
                  , s = {
                    lane: r,
                    action: a,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }
                  , o = t.pending;
                if (null === o ? s.next = s : (s.next = o.next,
                o.next = s),
                t.pending = s,
                o = e.alternate,
                e === Zs || null !== o && o === Zs)
                    no = ao = !0;
                else {
                    if (0 === e.lanes && (null === o || 0 === o.lanes) && null !== (o = t.lastRenderedReducer))
                        try {
                            var i = t.lastRenderedState
                              , l = o(i, a);
                            if (s.eagerReducer = o,
                            s.eagerState = l,
                            cn(l, i))
                                return
                        } catch (u) {}
                    ml(e, r, n)
                }
            }
            var No = {
                readContext: os,
                useCallback: ro,
                useContext: ro,
                useEffect: ro,
                useImperativeHandle: ro,
                useLayoutEffect: ro,
                useMemo: ro,
                useReducer: ro,
                useRef: ro,
                useState: ro,
                useDebugValue: ro,
                useDeferredValue: ro,
                useTransition: ro,
                useMutableSource: ro,
                useOpaqueIdentifier: ro,
                unstable_isNewReconciler: !1
            }
              , Lo = {
                readContext: os,
                useCallback: function(e, t) {
                    return io().memoizedState = [e, void 0 === t ? null : t],
                    e
                },
                useContext: os,
                useEffect: xo,
                useImperativeHandle: function(e, t, a) {
                    return a = null !== a && void 0 !== a ? a.concat([e]) : null,
                    ko(4, 2, So.bind(null, t, e), a)
                },
                useLayoutEffect: function(e, t) {
                    return ko(4, 2, e, t)
                },
                useMemo: function(e, t) {
                    var a = io();
                    return t = void 0 === t ? null : t,
                    e = e(),
                    a.memoizedState = [e, t],
                    e
                },
                useReducer: function(e, t, a) {
                    var n = io();
                    return t = void 0 !== a ? a(t) : t,
                    n.memoizedState = n.baseState = t,
                    e = (e = n.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: e,
                        lastRenderedState: t
                    }).dispatch = Oo.bind(null, Zs, e),
                    [n.memoizedState, e]
                },
                useRef: bo,
                useState: yo,
                useDebugValue: Co,
                useDeferredValue: function(e) {
                    var t = yo(e)
                      , a = t[0]
                      , n = t[1];
                    return xo((function() {
                        var t = Xs.transition;
                        Xs.transition = 1;
                        try {
                            n(e)
                        } finally {
                            Xs.transition = t
                        }
                    }
                    ), [e]),
                    a
                },
                useTransition: function() {
                    var e = yo(!1)
                      , t = e[0];
                    return bo(e = Po.bind(null, e[1])),
                    [e, t]
                },
                useMutableSource: function(e, t, a) {
                    var n = io();
                    return n.memoizedState = {
                        refs: {
                            getSnapshot: t,
                            setSnapshot: null
                        },
                        source: e,
                        subscribe: a
                    },
                    mo(n, e, t, a)
                },
                useOpaqueIdentifier: function() {
                    if (Us) {
                        var e = !1
                          , t = function(e) {
                            return {
                                $$typeof: R,
                                toString: e,
                                valueOf: e
                            }
                        }((function() {
                            throw e || (e = !0,
                            a("r:" + (Gn++).toString(36))),
                            Error(o(355))
                        }
                        ))
                          , a = yo(t)[1];
                        return 0 === (2 & Zs.mode) && (Zs.flags |= 516,
                        go(5, (function() {
                            a("r:" + (Gn++).toString(36))
                        }
                        ), void 0, null)),
                        t
                    }
                    return yo(t = "r:" + (Gn++).toString(36)),
                    t
                },
                unstable_isNewReconciler: !1
            }
              , Do = {
                readContext: os,
                useCallback: To,
                useContext: os,
                useEffect: zo,
                useImperativeHandle: Eo,
                useLayoutEffect: jo,
                useMemo: _o,
                useReducer: co,
                useRef: vo,
                useState: function() {
                    return co(uo)
                },
                useDebugValue: Co,
                useDeferredValue: function(e) {
                    var t = co(uo)
                      , a = t[0]
                      , n = t[1];
                    return zo((function() {
                        var t = Xs.transition;
                        Xs.transition = 1;
                        try {
                            n(e)
                        } finally {
                            Xs.transition = t
                        }
                    }
                    ), [e]),
                    a
                },
                useTransition: function() {
                    var e = co(uo)[0];
                    return [vo().current, e]
                },
                useMutableSource: ho,
                useOpaqueIdentifier: function() {
                    return co(uo)[0]
                },
                unstable_isNewReconciler: !1
            }
              , Ro = {
                readContext: os,
                useCallback: To,
                useContext: os,
                useEffect: zo,
                useImperativeHandle: Eo,
                useLayoutEffect: jo,
                useMemo: _o,
                useReducer: fo,
                useRef: vo,
                useState: function() {
                    return fo(uo)
                },
                useDebugValue: Co,
                useDeferredValue: function(e) {
                    var t = fo(uo)
                      , a = t[0]
                      , n = t[1];
                    return zo((function() {
                        var t = Xs.transition;
                        Xs.transition = 1;
                        try {
                            n(e)
                        } finally {
                            Xs.transition = t
                        }
                    }
                    ), [e]),
                    a
                },
                useTransition: function() {
                    var e = fo(uo)[0];
                    return [vo().current, e]
                },
                useMutableSource: ho,
                useOpaqueIdentifier: function() {
                    return fo(uo)[0]
                },
                unstable_isNewReconciler: !1
            }
              , Mo = w.ReactCurrentOwner
              , Fo = !1;
            function Io(e, t, a, n) {
                t.child = null === e ? Cs(t, null, a, n) : Es(t, e.child, a, n)
            }
            function Ao(e, t, a, n, r) {
                a = a.render;
                var s = t.ref;
                return ss(t, r),
                n = oo(e, t, a, n, s, r),
                null === e || Fo ? (t.flags |= 1,
                Io(e, t, n, r),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~r,
                si(e, t, r))
            }
            function qo(e, t, a, n, r, s) {
                if (null === e) {
                    var o = a.type;
                    return "function" !== typeof o || Wl(o) || void 0 !== o.defaultProps || null !== a.compare || void 0 !== a.defaultProps ? ((e = Ql(a.type, null, n, t, t.mode, s)).ref = t.ref,
                    e.return = t,
                    t.child = e) : (t.tag = 15,
                    t.type = o,
                    Uo(e, t, o, n, r, s))
                }
                return o = e.child,
                0 === (r & s) && (r = o.memoizedProps,
                (a = null !== (a = a.compare) ? a : fn)(r, n) && e.ref === t.ref) ? si(e, t, s) : (t.flags |= 1,
                (e = $l(o, n)).ref = t.ref,
                e.return = t,
                t.child = e)
            }
            function Uo(e, t, a, n, r, s) {
                if (null !== e && fn(e.memoizedProps, n) && e.ref === t.ref) {
                    if (Fo = !1,
                    0 === (s & r))
                        return t.lanes = e.lanes,
                        si(e, t, s);
                    0 !== (16384 & e.flags) && (Fo = !0)
                }
                return Bo(e, t, a, n, s)
            }
            function Ho(e, t, a) {
                var n = t.pendingProps
                  , r = n.children
                  , s = null !== e ? e.memoizedState : null;
                if ("hidden" === n.mode || "unstable-defer-without-hiding" === n.mode)
                    if (0 === (4 & t.mode))
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        xl(t, a);
                    else {
                        if (0 === (1073741824 & a))
                            return e = null !== s ? s.baseLanes | a : a,
                            t.lanes = t.childLanes = 1073741824,
                            t.memoizedState = {
                                baseLanes: e
                            },
                            xl(t, e),
                            null;
                        t.memoizedState = {
                            baseLanes: 0
                        },
                        xl(t, null !== s ? s.baseLanes : a)
                    }
                else
                    null !== s ? (n = s.baseLanes | a,
                    t.memoizedState = null) : n = a,
                    xl(t, n);
                return Io(e, t, r, a),
                t.child
            }
            function Vo(e, t) {
                var a = t.ref;
                (null === e && null !== a || null !== e && e.ref !== a) && (t.flags |= 128)
            }
            function Bo(e, t, a, n, r) {
                var s = gr(a) ? hr : pr.current;
                return s = yr(t, s),
                ss(t, r),
                a = oo(e, t, a, n, s, r),
                null === e || Fo ? (t.flags |= 1,
                Io(e, t, a, r),
                t.child) : (t.updateQueue = e.updateQueue,
                t.flags &= -517,
                e.lanes &= ~r,
                si(e, t, r))
            }
            function Wo(e, t, a, n, r) {
                if (gr(a)) {
                    var s = !0;
                    wr(t)
                } else
                    s = !1;
                if (ss(t, r),
                null === t.stateNode)
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    vs(t, a, n),
                    ws(t, a, n, r),
                    n = !0;
                else if (null === e) {
                    var o = t.stateNode
                      , i = t.memoizedProps;
                    o.props = i;
                    var l = o.context
                      , u = a.contextType;
                    "object" === typeof u && null !== u ? u = os(u) : u = yr(t, u = gr(a) ? hr : pr.current);
                    var c = a.getDerivedStateFromProps
                      , d = "function" === typeof c || "function" === typeof o.getSnapshotBeforeUpdate;
                    d || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== n || l !== u) && ks(t, o, n, u),
                    is = !1;
                    var f = t.memoizedState;
                    o.state = f,
                    ps(t, n, o, r),
                    l = t.memoizedState,
                    i !== n || f !== l || mr.current || is ? ("function" === typeof c && (ys(t, a, c, n),
                    l = t.memoizedState),
                    (i = is || bs(t, a, i, n, f, l, u)) ? (d || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || ("function" === typeof o.componentWillMount && o.componentWillMount(),
                    "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount()),
                    "function" === typeof o.componentDidMount && (t.flags |= 4)) : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                    t.memoizedProps = n,
                    t.memoizedState = l),
                    o.props = n,
                    o.state = l,
                    o.context = u,
                    n = i) : ("function" === typeof o.componentDidMount && (t.flags |= 4),
                    n = !1)
                } else {
                    o = t.stateNode,
                    us(e, t),
                    i = t.memoizedProps,
                    u = t.type === t.elementType ? i : Xr(t.type, i),
                    o.props = u,
                    d = t.pendingProps,
                    f = o.context,
                    "object" === typeof (l = a.contextType) && null !== l ? l = os(l) : l = yr(t, l = gr(a) ? hr : pr.current);
                    var p = a.getDerivedStateFromProps;
                    (c = "function" === typeof p || "function" === typeof o.getSnapshotBeforeUpdate) || "function" !== typeof o.UNSAFE_componentWillReceiveProps && "function" !== typeof o.componentWillReceiveProps || (i !== d || f !== l) && ks(t, o, n, l),
                    is = !1,
                    f = t.memoizedState,
                    o.state = f,
                    ps(t, n, o, r);
                    var m = t.memoizedState;
                    i !== d || f !== m || mr.current || is ? ("function" === typeof p && (ys(t, a, p, n),
                    m = t.memoizedState),
                    (u = is || bs(t, a, u, n, f, m, l)) ? (c || "function" !== typeof o.UNSAFE_componentWillUpdate && "function" !== typeof o.componentWillUpdate || ("function" === typeof o.componentWillUpdate && o.componentWillUpdate(n, m, l),
                    "function" === typeof o.UNSAFE_componentWillUpdate && o.UNSAFE_componentWillUpdate(n, m, l)),
                    "function" === typeof o.componentDidUpdate && (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 256),
                    t.memoizedProps = n,
                    t.memoizedState = m),
                    o.props = n,
                    o.state = m,
                    o.context = l,
                    n = u) : ("function" !== typeof o.componentDidUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate || i === e.memoizedProps && f === e.memoizedState || (t.flags |= 256),
                    n = !1)
                }
                return $o(e, t, a, n, s, r)
            }
            function $o(e, t, a, n, r, s) {
                Vo(e, t);
                var o = 0 !== (64 & t.flags);
                if (!n && !o)
                    return r && xr(t, a, !1),
                    si(e, t, s);
                n = t.stateNode,
                Mo.current = t;
                var i = o && "function" !== typeof a.getDerivedStateFromError ? null : n.render();
                return t.flags |= 1,
                null !== e && o ? (t.child = Es(t, e.child, null, s),
                t.child = Es(t, null, i, s)) : Io(e, t, i, s),
                t.memoizedState = n.state,
                r && xr(t, a, !0),
                t.child
            }
            function Qo(e) {
                var t = e.stateNode;
                t.pendingContext ? vr(0, t.pendingContext, t.pendingContext !== t.context) : t.context && vr(0, t.context, !1),
                Ls(e, t.containerInfo)
            }
            var Yo, Ko, Go, Xo = {
                dehydrated: null,
                retryLane: 0
            };
            function Jo(e, t, a) {
                var n, r = t.pendingProps, s = Fs.current, o = !1;
                return (n = 0 !== (64 & t.flags)) || (n = (null === e || null !== e.memoizedState) && 0 !== (2 & s)),
                n ? (o = !0,
                t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === r.fallback || !0 === r.unstable_avoidThisFallback || (s |= 1),
                dr(Fs, 1 & s),
                null === e ? (void 0 !== r.fallback && Bs(t),
                e = r.children,
                s = r.fallback,
                o ? (e = Zo(t, e, s, a),
                t.child.memoizedState = {
                    baseLanes: a
                },
                t.memoizedState = Xo,
                e) : "number" === typeof r.unstable_expectedLoadTime ? (e = Zo(t, e, s, a),
                t.child.memoizedState = {
                    baseLanes: a
                },
                t.memoizedState = Xo,
                t.lanes = 33554432,
                e) : ((a = Kl({
                    mode: "visible",
                    children: e
                }, t.mode, a, null)).return = t,
                t.child = a)) : (e.memoizedState,
                o ? (r = ti(e, t, r.children, r.fallback, a),
                o = t.child,
                s = e.child.memoizedState,
                o.memoizedState = null === s ? {
                    baseLanes: a
                } : {
                    baseLanes: s.baseLanes | a
                },
                o.childLanes = e.childLanes & ~a,
                t.memoizedState = Xo,
                r) : (a = ei(e, t, r.children, a),
                t.memoizedState = null,
                a))
            }
            function Zo(e, t, a, n) {
                var r = e.mode
                  , s = e.child;
                return t = {
                    mode: "hidden",
                    children: t
                },
                0 === (2 & r) && null !== s ? (s.childLanes = 0,
                s.pendingProps = t) : s = Kl(t, r, 0, null),
                a = Yl(a, r, n, null),
                s.return = e,
                a.return = e,
                s.sibling = a,
                e.child = s,
                a
            }
            function ei(e, t, a, n) {
                var r = e.child;
                return e = r.sibling,
                a = $l(r, {
                    mode: "visible",
                    children: a
                }),
                0 === (2 & t.mode) && (a.lanes = n),
                a.return = t,
                a.sibling = null,
                null !== e && (e.nextEffect = null,
                e.flags = 8,
                t.firstEffect = t.lastEffect = e),
                t.child = a
            }
            function ti(e, t, a, n, r) {
                var s = t.mode
                  , o = e.child;
                e = o.sibling;
                var i = {
                    mode: "hidden",
                    children: a
                };
                return 0 === (2 & s) && t.child !== o ? ((a = t.child).childLanes = 0,
                a.pendingProps = i,
                null !== (o = a.lastEffect) ? (t.firstEffect = a.firstEffect,
                t.lastEffect = o,
                o.nextEffect = null) : t.firstEffect = t.lastEffect = null) : a = $l(o, i),
                null !== e ? n = $l(e, n) : (n = Yl(n, s, r, null)).flags |= 2,
                n.return = t,
                a.return = t,
                a.sibling = n,
                t.child = a,
                n
            }
            function ai(e, t) {
                e.lanes |= t;
                var a = e.alternate;
                null !== a && (a.lanes |= t),
                rs(e.return, t)
            }
            function ni(e, t, a, n, r, s) {
                var o = e.memoizedState;
                null === o ? e.memoizedState = {
                    isBackwards: t,
                    rendering: null,
                    renderingStartTime: 0,
                    last: n,
                    tail: a,
                    tailMode: r,
                    lastEffect: s
                } : (o.isBackwards = t,
                o.rendering = null,
                o.renderingStartTime = 0,
                o.last = n,
                o.tail = a,
                o.tailMode = r,
                o.lastEffect = s)
            }
            function ri(e, t, a) {
                var n = t.pendingProps
                  , r = n.revealOrder
                  , s = n.tail;
                if (Io(e, t, n.children, a),
                0 !== (2 & (n = Fs.current)))
                    n = 1 & n | 2,
                    t.flags |= 64;
                else {
                    if (null !== e && 0 !== (64 & e.flags))
                        e: for (e = t.child; null !== e; ) {
                            if (13 === e.tag)
                                null !== e.memoizedState && ai(e, a);
                            else if (19 === e.tag)
                                ai(e, a);
                            else if (null !== e.child) {
                                e.child.return = e,
                                e = e.child;
                                continue
                            }
                            if (e === t)
                                break e;
                            for (; null === e.sibling; ) {
                                if (null === e.return || e.return === t)
                                    break e;
                                e = e.return
                            }
                            e.sibling.return = e.return,
                            e = e.sibling
                        }
                    n &= 1
                }
                if (dr(Fs, n),
                0 === (2 & t.mode))
                    t.memoizedState = null;
                else
                    switch (r) {
                    case "forwards":
                        for (a = t.child,
                        r = null; null !== a; )
                            null !== (e = a.alternate) && null === Is(e) && (r = a),
                            a = a.sibling;
                        null === (a = r) ? (r = t.child,
                        t.child = null) : (r = a.sibling,
                        a.sibling = null),
                        ni(t, !1, r, a, s, t.lastEffect);
                        break;
                    case "backwards":
                        for (a = null,
                        r = t.child,
                        t.child = null; null !== r; ) {
                            if (null !== (e = r.alternate) && null === Is(e)) {
                                t.child = r;
                                break
                            }
                            e = r.sibling,
                            r.sibling = a,
                            a = r,
                            r = e
                        }
                        ni(t, !0, a, null, s, t.lastEffect);
                        break;
                    case "together":
                        ni(t, !1, null, null, void 0, t.lastEffect);
                        break;
                    default:
                        t.memoizedState = null
                    }
                return t.child
            }
            function si(e, t, a) {
                if (null !== e && (t.dependencies = e.dependencies),
                Ui |= t.lanes,
                0 !== (a & t.childLanes)) {
                    if (null !== e && t.child !== e.child)
                        throw Error(o(153));
                    if (null !== t.child) {
                        for (a = $l(e = t.child, e.pendingProps),
                        t.child = a,
                        a.return = t; null !== e.sibling; )
                            e = e.sibling,
                            (a = a.sibling = $l(e, e.pendingProps)).return = t;
                        a.sibling = null
                    }
                    return t.child
                }
                return null
            }
            function oi(e, t) {
                if (!Us)
                    switch (e.tailMode) {
                    case "hidden":
                        t = e.tail;
                        for (var a = null; null !== t; )
                            null !== t.alternate && (a = t),
                            t = t.sibling;
                        null === a ? e.tail = null : a.sibling = null;
                        break;
                    case "collapsed":
                        a = e.tail;
                        for (var n = null; null !== a; )
                            null !== a.alternate && (n = a),
                            a = a.sibling;
                        null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
                    }
            }
            function ii(e, t, a) {
                var n = t.pendingProps;
                switch (t.tag) {
                case 2:
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return null;
                case 1:
                case 17:
                    return gr(t.type) && br(),
                    null;
                case 3:
                    return Ds(),
                    cr(mr),
                    cr(pr),
                    Ks(),
                    (n = t.stateNode).pendingContext && (n.context = n.pendingContext,
                    n.pendingContext = null),
                    null !== e && null !== e.child || ($s(t) ? t.flags |= 4 : n.hydrate || (t.flags |= 256)),
                    null;
                case 5:
                    Ms(t);
                    var s = Ns(Os.current);
                    if (a = t.type,
                    null !== e && null != t.stateNode)
                        Ko(e, t, a, n),
                        e.ref !== t.ref && (t.flags |= 128);
                    else {
                        if (!n) {
                            if (null === t.stateNode)
                                throw Error(o(166));
                            return null
                        }
                        if (e = Ns(_s.current),
                        $s(t)) {
                            n = t.stateNode,
                            a = t.type;
                            var i = t.memoizedProps;
                            switch (n[Jn] = t,
                            n[Zn] = i,
                            a) {
                            case "dialog":
                                Pn("cancel", n),
                                Pn("close", n);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Pn("load", n);
                                break;
                            case "video":
                            case "audio":
                                for (e = 0; e < En.length; e++)
                                    Pn(En[e], n);
                                break;
                            case "source":
                                Pn("error", n);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Pn("error", n),
                                Pn("load", n);
                                break;
                            case "details":
                                Pn("toggle", n);
                                break;
                            case "input":
                                ee(n, i),
                                Pn("invalid", n);
                                break;
                            case "select":
                                n._wrapperState = {
                                    wasMultiple: !!i.multiple
                                },
                                Pn("invalid", n);
                                break;
                            case "textarea":
                                le(n, i),
                                Pn("invalid", n)
                            }
                            for (var u in je(a, i),
                            e = null,
                            i)
                                i.hasOwnProperty(u) && (s = i[u],
                                "children" === u ? "string" === typeof s ? n.textContent !== s && (e = ["children", s]) : "number" === typeof s && n.textContent !== "" + s && (e = ["children", "" + s]) : l.hasOwnProperty(u) && null != s && "onScroll" === u && Pn("scroll", n));
                            switch (a) {
                            case "input":
                                G(n),
                                ne(n, i, !0);
                                break;
                            case "textarea":
                                G(n),
                                ce(n);
                                break;
                            case "select":
                            case "option":
                                break;
                            default:
                                "function" === typeof i.onClick && (n.onclick = qn)
                            }
                            n = e,
                            t.updateQueue = n,
                            null !== n && (t.flags |= 4)
                        } else {
                            switch (u = 9 === s.nodeType ? s : s.ownerDocument,
                            e === de && (e = pe(a)),
                            e === de ? "script" === a ? ((e = u.createElement("div")).innerHTML = "<script><\/script>",
                            e = e.removeChild(e.firstChild)) : "string" === typeof n.is ? e = u.createElement(a, {
                                is: n.is
                            }) : (e = u.createElement(a),
                            "select" === a && (u = e,
                            n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : e = u.createElementNS(e, a),
                            e[Jn] = t,
                            e[Zn] = n,
                            Yo(e, t),
                            t.stateNode = e,
                            u = Se(a, n),
                            a) {
                            case "dialog":
                                Pn("cancel", e),
                                Pn("close", e),
                                s = n;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                Pn("load", e),
                                s = n;
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < En.length; s++)
                                    Pn(En[s], e);
                                s = n;
                                break;
                            case "source":
                                Pn("error", e),
                                s = n;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                Pn("error", e),
                                Pn("load", e),
                                s = n;
                                break;
                            case "details":
                                Pn("toggle", e),
                                s = n;
                                break;
                            case "input":
                                ee(e, n),
                                s = Z(e, n),
                                Pn("invalid", e);
                                break;
                            case "option":
                                s = se(e, n);
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!n.multiple
                                },
                                s = r({}, n, {
                                    value: void 0
                                }),
                                Pn("invalid", e);
                                break;
                            case "textarea":
                                le(e, n),
                                s = ie(e, n),
                                Pn("invalid", e);
                                break;
                            default:
                                s = n
                            }
                            je(a, s);
                            var c = s;
                            for (i in c)
                                if (c.hasOwnProperty(i)) {
                                    var d = c[i];
                                    "style" === i ? xe(e, d) : "dangerouslySetInnerHTML" === i ? null != (d = d ? d.__html : void 0) && ge(e, d) : "children" === i ? "string" === typeof d ? ("textarea" !== a || "" !== d) && be(e, d) : "number" === typeof d && be(e, "" + d) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (l.hasOwnProperty(i) ? null != d && "onScroll" === i && Pn("scroll", e) : null != d && k(e, i, d, u))
                                }
                            switch (a) {
                            case "input":
                                G(e),
                                ne(e, n, !1);
                                break;
                            case "textarea":
                                G(e),
                                ce(e);
                                break;
                            case "option":
                                null != n.value && e.setAttribute("value", "" + Y(n.value));
                                break;
                            case "select":
                                e.multiple = !!n.multiple,
                                null != (i = n.value) ? oe(e, !!n.multiple, i, !1) : null != n.defaultValue && oe(e, !!n.multiple, n.defaultValue, !0);
                                break;
                            default:
                                "function" === typeof s.onClick && (e.onclick = qn)
                            }
                            Vn(a, n) && (t.flags |= 4)
                        }
                        null !== t.ref && (t.flags |= 128)
                    }
                    return null;
                case 6:
                    if (e && null != t.stateNode)
                        Go(0, t, e.memoizedProps, n);
                    else {
                        if ("string" !== typeof n && null === t.stateNode)
                            throw Error(o(166));
                        a = Ns(Os.current),
                        Ns(_s.current),
                        $s(t) ? (n = t.stateNode,
                        a = t.memoizedProps,
                        n[Jn] = t,
                        n.nodeValue !== a && (t.flags |= 4)) : ((n = (9 === a.nodeType ? a : a.ownerDocument).createTextNode(n))[Jn] = t,
                        t.stateNode = n)
                    }
                    return null;
                case 13:
                    return cr(Fs),
                    n = t.memoizedState,
                    0 !== (64 & t.flags) ? (t.lanes = a,
                    t) : (n = null !== n,
                    a = !1,
                    null === e ? void 0 !== t.memoizedProps.fallback && $s(t) : a = null !== e.memoizedState,
                    n && !a && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Fs.current) ? 0 === Ii && (Ii = 3) : (0 !== Ii && 3 !== Ii || (Ii = 4),
                    null === Li || 0 === (134217727 & Ui) && 0 === (134217727 & Hi) || bl(Li, Ri))),
                    (n || a) && (t.flags |= 4),
                    null);
                case 4:
                    return Ds(),
                    null === e && Nn(t.stateNode.containerInfo),
                    null;
                case 10:
                    return ns(t),
                    null;
                case 19:
                    if (cr(Fs),
                    null === (n = t.memoizedState))
                        return null;
                    if (i = 0 !== (64 & t.flags),
                    null === (u = n.rendering))
                        if (i)
                            oi(n, !1);
                        else {
                            if (0 !== Ii || null !== e && 0 !== (64 & e.flags))
                                for (e = t.child; null !== e; ) {
                                    if (null !== (u = Is(e))) {
                                        for (t.flags |= 64,
                                        oi(n, !1),
                                        null !== (i = u.updateQueue) && (t.updateQueue = i,
                                        t.flags |= 4),
                                        null === n.lastEffect && (t.firstEffect = null),
                                        t.lastEffect = n.lastEffect,
                                        n = a,
                                        a = t.child; null !== a; )
                                            e = n,
                                            (i = a).flags &= 2,
                                            i.nextEffect = null,
                                            i.firstEffect = null,
                                            i.lastEffect = null,
                                            null === (u = i.alternate) ? (i.childLanes = 0,
                                            i.lanes = e,
                                            i.child = null,
                                            i.memoizedProps = null,
                                            i.memoizedState = null,
                                            i.updateQueue = null,
                                            i.dependencies = null,
                                            i.stateNode = null) : (i.childLanes = u.childLanes,
                                            i.lanes = u.lanes,
                                            i.child = u.child,
                                            i.memoizedProps = u.memoizedProps,
                                            i.memoizedState = u.memoizedState,
                                            i.updateQueue = u.updateQueue,
                                            i.type = u.type,
                                            e = u.dependencies,
                                            i.dependencies = null === e ? null : {
                                                lanes: e.lanes,
                                                firstContext: e.firstContext
                                            }),
                                            a = a.sibling;
                                        return dr(Fs, 1 & Fs.current | 2),
                                        t.child
                                    }
                                    e = e.sibling
                                }
                            null !== n.tail && Vr() > $i && (t.flags |= 64,
                            i = !0,
                            oi(n, !1),
                            t.lanes = 33554432)
                        }
                    else {
                        if (!i)
                            if (null !== (e = Is(u))) {
                                if (t.flags |= 64,
                                i = !0,
                                null !== (a = e.updateQueue) && (t.updateQueue = a,
                                t.flags |= 4),
                                oi(n, !0),
                                null === n.tail && "hidden" === n.tailMode && !u.alternate && !Us)
                                    return null !== (t = t.lastEffect = n.lastEffect) && (t.nextEffect = null),
                                    null
                            } else
                                2 * Vr() - n.renderingStartTime > $i && 1073741824 !== a && (t.flags |= 64,
                                i = !0,
                                oi(n, !1),
                                t.lanes = 33554432);
                        n.isBackwards ? (u.sibling = t.child,
                        t.child = u) : (null !== (a = n.last) ? a.sibling = u : t.child = u,
                        n.last = u)
                    }
                    return null !== n.tail ? (a = n.tail,
                    n.rendering = a,
                    n.tail = a.sibling,
                    n.lastEffect = t.lastEffect,
                    n.renderingStartTime = Vr(),
                    a.sibling = null,
                    t = Fs.current,
                    dr(Fs, i ? 1 & t | 2 : 1 & t),
                    a) : null;
                case 23:
                case 24:
                    return zl(),
                    null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== n.mode && (t.flags |= 4),
                    null
                }
                throw Error(o(156, t.tag))
            }
            function li(e) {
                switch (e.tag) {
                case 1:
                    gr(e.type) && br();
                    var t = e.flags;
                    return 4096 & t ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 3:
                    if (Ds(),
                    cr(mr),
                    cr(pr),
                    Ks(),
                    0 !== (64 & (t = e.flags)))
                        throw Error(o(285));
                    return e.flags = -4097 & t | 64,
                    e;
                case 5:
                    return Ms(e),
                    null;
                case 13:
                    return cr(Fs),
                    4096 & (t = e.flags) ? (e.flags = -4097 & t | 64,
                    e) : null;
                case 19:
                    return cr(Fs),
                    null;
                case 4:
                    return Ds(),
                    null;
                case 10:
                    return ns(e),
                    null;
                case 23:
                case 24:
                    return zl(),
                    null;
                default:
                    return null
                }
            }
            function ui(e, t) {
                try {
                    var a = ""
                      , n = t;
                    do {
                        a += $(n),
                        n = n.return
                    } while (n);
                    var r = a
                } catch (s) {
                    r = "\nError generating stack: " + s.message + "\n" + s.stack
                }
                return {
                    value: e,
                    source: t,
                    stack: r
                }
            }
            function ci(e, t) {
                try {
                    console.error(t.value)
                } catch (a) {
                    setTimeout((function() {
                        throw a
                    }
                    ))
                }
            }
            Yo = function(e, t) {
                for (var a = t.child; null !== a; ) {
                    if (5 === a.tag || 6 === a.tag)
                        e.appendChild(a.stateNode);
                    else if (4 !== a.tag && null !== a.child) {
                        a.child.return = a,
                        a = a.child;
                        continue
                    }
                    if (a === t)
                        break;
                    for (; null === a.sibling; ) {
                        if (null === a.return || a.return === t)
                            return;
                        a = a.return
                    }
                    a.sibling.return = a.return,
                    a = a.sibling
                }
            }
            ,
            Ko = function(e, t, a, n) {
                var s = e.memoizedProps;
                if (s !== n) {
                    e = t.stateNode,
                    Ns(_s.current);
                    var o, i = null;
                    switch (a) {
                    case "input":
                        s = Z(e, s),
                        n = Z(e, n),
                        i = [];
                        break;
                    case "option":
                        s = se(e, s),
                        n = se(e, n),
                        i = [];
                        break;
                    case "select":
                        s = r({}, s, {
                            value: void 0
                        }),
                        n = r({}, n, {
                            value: void 0
                        }),
                        i = [];
                        break;
                    case "textarea":
                        s = ie(e, s),
                        n = ie(e, n),
                        i = [];
                        break;
                    default:
                        "function" !== typeof s.onClick && "function" === typeof n.onClick && (e.onclick = qn)
                    }
                    for (d in je(a, n),
                    a = null,
                    s)
                        if (!n.hasOwnProperty(d) && s.hasOwnProperty(d) && null != s[d])
                            if ("style" === d) {
                                var u = s[d];
                                for (o in u)
                                    u.hasOwnProperty(o) && (a || (a = {}),
                                    a[o] = "")
                            } else
                                "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (l.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
                    for (d in n) {
                        var c = n[d];
                        if (u = null != s ? s[d] : void 0,
                        n.hasOwnProperty(d) && c !== u && (null != c || null != u))
                            if ("style" === d)
                                if (u) {
                                    for (o in u)
                                        !u.hasOwnProperty(o) || c && c.hasOwnProperty(o) || (a || (a = {}),
                                        a[o] = "");
                                    for (o in c)
                                        c.hasOwnProperty(o) && u[o] !== c[o] && (a || (a = {}),
                                        a[o] = c[o])
                                } else
                                    a || (i || (i = []),
                                    i.push(d, a)),
                                    a = c;
                            else
                                "dangerouslySetInnerHTML" === d ? (c = c ? c.__html : void 0,
                                u = u ? u.__html : void 0,
                                null != c && u !== c && (i = i || []).push(d, c)) : "children" === d ? "string" !== typeof c && "number" !== typeof c || (i = i || []).push(d, "" + c) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (l.hasOwnProperty(d) ? (null != c && "onScroll" === d && Pn("scroll", e),
                                i || u === c || (i = [])) : "object" === typeof c && null !== c && c.$$typeof === R ? c.toString() : (i = i || []).push(d, c))
                    }
                    a && (i = i || []).push("style", a);
                    var d = i;
                    (t.updateQueue = d) && (t.flags |= 4)
                }
            }
            ,
            Go = function(e, t, a, n) {
                a !== n && (t.flags |= 4)
            }
            ;
            var di = "function" === typeof WeakMap ? WeakMap : Map;
            function fi(e, t, a) {
                (a = cs(-1, a)).tag = 3,
                a.payload = {
                    element: null
                };
                var n = t.value;
                return a.callback = function() {
                    Gi || (Gi = !0,
                    Xi = n),
                    ci(0, t)
                }
                ,
                a
            }
            function pi(e, t, a) {
                (a = cs(-1, a)).tag = 3;
                var n = e.type.getDerivedStateFromError;
                if ("function" === typeof n) {
                    var r = t.value;
                    a.payload = function() {
                        return ci(0, t),
                        n(r)
                    }
                }
                var s = e.stateNode;
                return null !== s && "function" === typeof s.componentDidCatch && (a.callback = function() {
                    "function" !== typeof n && (null === Ji ? Ji = new Set([this]) : Ji.add(this),
                    ci(0, t));
                    var e = t.stack;
                    this.componentDidCatch(t.value, {
                        componentStack: null !== e ? e : ""
                    })
                }
                ),
                a
            }
            var mi = "function" === typeof WeakSet ? WeakSet : Set;
            function hi(e) {
                var t = e.ref;
                if (null !== t)
                    if ("function" === typeof t)
                        try {
                            t(null)
                        } catch (a) {
                            ql(e, a)
                        }
                    else
                        t.current = null
            }
            function yi(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                case 5:
                case 6:
                case 4:
                case 17:
                    return;
                case 1:
                    if (256 & t.flags && null !== e) {
                        var a = e.memoizedProps
                          , n = e.memoizedState;
                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? a : Xr(t.type, a), n),
                        e.__reactInternalSnapshotBeforeUpdate = t
                    }
                    return;
                case 3:
                    return void (256 & t.flags && Qn(t.stateNode.containerInfo))
                }
                throw Error(o(163))
            }
            function gi(e, t, a) {
                switch (a.tag) {
                case 0:
                case 11:
                case 15:
                case 22:
                    if (null !== (t = null !== (t = a.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            if (3 === (3 & e.tag)) {
                                var n = e.create;
                                e.destroy = n()
                            }
                            e = e.next
                        } while (e !== t)
                    }
                    if (null !== (t = null !== (t = a.updateQueue) ? t.lastEffect : null)) {
                        e = t = t.next;
                        do {
                            var r = e;
                            n = r.next,
                            0 !== (4 & (r = r.tag)) && 0 !== (1 & r) && (Fl(a, e),
                            Ml(a, e)),
                            e = n
                        } while (e !== t)
                    }
                    return;
                case 1:
                    return e = a.stateNode,
                    4 & a.flags && (null === t ? e.componentDidMount() : (n = a.elementType === a.type ? t.memoizedProps : Xr(a.type, t.memoizedProps),
                    e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))),
                    void (null !== (t = a.updateQueue) && ms(a, t, e));
                case 3:
                    if (null !== (t = a.updateQueue)) {
                        if (e = null,
                        null !== a.child)
                            switch (a.child.tag) {
                            case 5:
                            case 1:
                                e = a.child.stateNode
                            }
                        ms(a, t, e)
                    }
                    return;
                case 5:
                    return e = a.stateNode,
                    void (null === t && 4 & a.flags && Vn(a.type, a.memoizedProps) && e.focus());
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 20:
                case 21:
                case 23:
                case 24:
                    return;
                case 13:
                    return void (null === a.memoizedState && (a = a.alternate,
                    null !== a && (a = a.memoizedState,
                    null !== a && (a = a.dehydrated,
                    null !== a && xt(a)))))
                }
                throw Error(o(163))
            }
            function bi(e, t) {
                for (var a = e; ; ) {
                    if (5 === a.tag) {
                        var n = a.stateNode;
                        if (t)
                            "function" === typeof (n = n.style).setProperty ? n.setProperty("display", "none", "important") : n.display = "none";
                        else {
                            n = a.stateNode;
                            var r = a.memoizedProps.style;
                            r = void 0 !== r && null !== r && r.hasOwnProperty("display") ? r.display : null,
                            n.style.display = we("display", r)
                        }
                    } else if (6 === a.tag)
                        a.stateNode.nodeValue = t ? "" : a.memoizedProps;
                    else if ((23 !== a.tag && 24 !== a.tag || null === a.memoizedState || a === e) && null !== a.child) {
                        a.child.return = a,
                        a = a.child;
                        continue
                    }
                    if (a === e)
                        break;
                    for (; null === a.sibling; ) {
                        if (null === a.return || a.return === e)
                            return;
                        a = a.return
                    }
                    a.sibling.return = a.return,
                    a = a.sibling
                }
            }
            function vi(e, t) {
                if (jr && "function" === typeof jr.onCommitFiberUnmount)
                    try {
                        jr.onCommitFiberUnmount(zr, t)
                    } catch (s) {}
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                        var a = e = e.next;
                        do {
                            var n = a
                              , r = n.destroy;
                            if (n = n.tag,
                            void 0 !== r)
                                if (0 !== (4 & n))
                                    Fl(t, a);
                                else {
                                    n = t;
                                    try {
                                        r()
                                    } catch (s) {
                                        ql(n, s)
                                    }
                                }
                            a = a.next
                        } while (a !== e)
                    }
                    break;
                case 1:
                    if (hi(t),
                    "function" === typeof (e = t.stateNode).componentWillUnmount)
                        try {
                            e.props = t.memoizedProps,
                            e.state = t.memoizedState,
                            e.componentWillUnmount()
                        } catch (s) {
                            ql(t, s)
                        }
                    break;
                case 5:
                    hi(t);
                    break;
                case 4:
                    Si(e, t)
                }
            }
            function ki(e) {
                e.alternate = null,
                e.child = null,
                e.dependencies = null,
                e.firstEffect = null,
                e.lastEffect = null,
                e.memoizedProps = null,
                e.memoizedState = null,
                e.pendingProps = null,
                e.return = null,
                e.updateQueue = null
            }
            function wi(e) {
                return 5 === e.tag || 3 === e.tag || 4 === e.tag
            }
            function xi(e) {
                e: {
                    for (var t = e.return; null !== t; ) {
                        if (wi(t))
                            break e;
                        t = t.return
                    }
                    throw Error(o(160))
                }
                var a = t;
                switch (t = a.stateNode,
                a.tag) {
                case 5:
                    var n = !1;
                    break;
                case 3:
                case 4:
                    t = t.containerInfo,
                    n = !0;
                    break;
                default:
                    throw Error(o(161))
                }
                16 & a.flags && (be(t, ""),
                a.flags &= -17);
                e: t: for (a = e; ; ) {
                    for (; null === a.sibling; ) {
                        if (null === a.return || wi(a.return)) {
                            a = null;
                            break e
                        }
                        a = a.return
                    }
                    for (a.sibling.return = a.return,
                    a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
                        if (2 & a.flags)
                            continue t;
                        if (null === a.child || 4 === a.tag)
                            continue t;
                        a.child.return = a,
                        a = a.child
                    }
                    if (!(2 & a.flags)) {
                        a = a.stateNode;
                        break e
                    }
                }
                n ? zi(e, a, t) : ji(e, a, t)
            }
            function zi(e, t, a) {
                var n = e.tag
                  , r = 5 === n || 6 === n;
                if (r)
                    e = r ? e.stateNode : e.stateNode.instance,
                    t ? 8 === a.nodeType ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (8 === a.nodeType ? (t = a.parentNode).insertBefore(e, a) : (t = a).appendChild(e),
                    null !== (a = a._reactRootContainer) && void 0 !== a || null !== t.onclick || (t.onclick = qn));
                else if (4 !== n && null !== (e = e.child))
                    for (zi(e, t, a),
                    e = e.sibling; null !== e; )
                        zi(e, t, a),
                        e = e.sibling
            }
            function ji(e, t, a) {
                var n = e.tag
                  , r = 5 === n || 6 === n;
                if (r)
                    e = r ? e.stateNode : e.stateNode.instance,
                    t ? a.insertBefore(e, t) : a.appendChild(e);
                else if (4 !== n && null !== (e = e.child))
                    for (ji(e, t, a),
                    e = e.sibling; null !== e; )
                        ji(e, t, a),
                        e = e.sibling
            }
            function Si(e, t) {
                for (var a, n, r = t, s = !1; ; ) {
                    if (!s) {
                        s = r.return;
                        e: for (; ; ) {
                            if (null === s)
                                throw Error(o(160));
                            switch (a = s.stateNode,
                            s.tag) {
                            case 5:
                                n = !1;
                                break e;
                            case 3:
                            case 4:
                                a = a.containerInfo,
                                n = !0;
                                break e
                            }
                            s = s.return
                        }
                        s = !0
                    }
                    if (5 === r.tag || 6 === r.tag) {
                        e: for (var i = e, l = r, u = l; ; )
                            if (vi(i, u),
                            null !== u.child && 4 !== u.tag)
                                u.child.return = u,
                                u = u.child;
                            else {
                                if (u === l)
                                    break e;
                                for (; null === u.sibling; ) {
                                    if (null === u.return || u.return === l)
                                        break e;
                                    u = u.return
                                }
                                u.sibling.return = u.return,
                                u = u.sibling
                            }
                        n ? (i = a,
                        l = r.stateNode,
                        8 === i.nodeType ? i.parentNode.removeChild(l) : i.removeChild(l)) : a.removeChild(r.stateNode)
                    } else if (4 === r.tag) {
                        if (null !== r.child) {
                            a = r.stateNode.containerInfo,
                            n = !0,
                            r.child.return = r,
                            r = r.child;
                            continue
                        }
                    } else if (vi(e, r),
                    null !== r.child) {
                        r.child.return = r,
                        r = r.child;
                        continue
                    }
                    if (r === t)
                        break;
                    for (; null === r.sibling; ) {
                        if (null === r.return || r.return === t)
                            return;
                        4 === (r = r.return).tag && (s = !1)
                    }
                    r.sibling.return = r.return,
                    r = r.sibling
                }
            }
            function Ei(e, t) {
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                case 22:
                    var a = t.updateQueue;
                    if (null !== (a = null !== a ? a.lastEffect : null)) {
                        var n = a = a.next;
                        do {
                            3 === (3 & n.tag) && (e = n.destroy,
                            n.destroy = void 0,
                            void 0 !== e && e()),
                            n = n.next
                        } while (n !== a)
                    }
                    return;
                case 1:
                case 12:
                case 17:
                    return;
                case 5:
                    if (null != (a = t.stateNode)) {
                        n = t.memoizedProps;
                        var r = null !== e ? e.memoizedProps : n;
                        e = t.type;
                        var s = t.updateQueue;
                        if (t.updateQueue = null,
                        null !== s) {
                            for (a[Zn] = n,
                            "input" === e && "radio" === n.type && null != n.name && te(a, n),
                            Se(e, r),
                            t = Se(e, n),
                            r = 0; r < s.length; r += 2) {
                                var i = s[r]
                                  , l = s[r + 1];
                                "style" === i ? xe(a, l) : "dangerouslySetInnerHTML" === i ? ge(a, l) : "children" === i ? be(a, l) : k(a, i, l, t)
                            }
                            switch (e) {
                            case "input":
                                ae(a, n);
                                break;
                            case "textarea":
                                ue(a, n);
                                break;
                            case "select":
                                e = a._wrapperState.wasMultiple,
                                a._wrapperState.wasMultiple = !!n.multiple,
                                null != (s = n.value) ? oe(a, !!n.multiple, s, !1) : e !== !!n.multiple && (null != n.defaultValue ? oe(a, !!n.multiple, n.defaultValue, !0) : oe(a, !!n.multiple, n.multiple ? [] : "", !1))
                            }
                        }
                    }
                    return;
                case 6:
                    if (null === t.stateNode)
                        throw Error(o(162));
                    return void (t.stateNode.nodeValue = t.memoizedProps);
                case 3:
                    return void ((a = t.stateNode).hydrate && (a.hydrate = !1,
                    xt(a.containerInfo)));
                case 13:
                    return null !== t.memoizedState && (Wi = Vr(),
                    bi(t.child, !0)),
                    void Ci(t);
                case 19:
                    return void Ci(t);
                case 23:
                case 24:
                    return void bi(t, null !== t.memoizedState)
                }
                throw Error(o(163))
            }
            function Ci(e) {
                var t = e.updateQueue;
                if (null !== t) {
                    e.updateQueue = null;
                    var a = e.stateNode;
                    null === a && (a = e.stateNode = new mi),
                    t.forEach((function(t) {
                        var n = Hl.bind(null, e, t);
                        a.has(t) || (a.add(t),
                        t.then(n, n))
                    }
                    ))
                }
            }
            function Ti(e, t) {
                return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
            }
            var _i = Math.ceil
              , Pi = w.ReactCurrentDispatcher
              , Oi = w.ReactCurrentOwner
              , Ni = 0
              , Li = null
              , Di = null
              , Ri = 0
              , Mi = 0
              , Fi = ur(0)
              , Ii = 0
              , Ai = null
              , qi = 0
              , Ui = 0
              , Hi = 0
              , Vi = 0
              , Bi = null
              , Wi = 0
              , $i = 1 / 0;
            function Qi() {
                $i = Vr() + 500
            }
            var Yi, Ki = null, Gi = !1, Xi = null, Ji = null, Zi = !1, el = null, tl = 90, al = [], nl = [], rl = null, sl = 0, ol = null, il = -1, ll = 0, ul = 0, cl = null, dl = !1;
            function fl() {
                return 0 !== (48 & Ni) ? Vr() : -1 !== il ? il : il = Vr()
            }
            function pl(e) {
                if (0 === (2 & (e = e.mode)))
                    return 1;
                if (0 === (4 & e))
                    return 99 === Br() ? 1 : 2;
                if (0 === ll && (ll = qi),
                0 !== Gr.transition) {
                    0 !== ul && (ul = null !== Bi ? Bi.pendingLanes : 0),
                    e = ll;
                    var t = 4186112 & ~ul;
                    return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)),
                    t
                }
                return e = Br(),
                0 !== (4 & Ni) && 98 === e ? e = qt(12, ll) : e = qt(e = function(e) {
                    switch (e) {
                    case 99:
                        return 15;
                    case 98:
                        return 10;
                    case 97:
                    case 96:
                        return 8;
                    case 95:
                        return 2;
                    default:
                        return 0
                    }
                }(e), ll),
                e
            }
            function ml(e, t, a) {
                if (50 < sl)
                    throw sl = 0,
                    ol = null,
                    Error(o(185));
                if (null === (e = hl(e, t)))
                    return null;
                Vt(e, t, a),
                e === Li && (Hi |= t,
                4 === Ii && bl(e, Ri));
                var n = Br();
                1 === t ? 0 !== (8 & Ni) && 0 === (48 & Ni) ? vl(e) : (yl(e, a),
                0 === Ni && (Qi(),
                Yr())) : (0 === (4 & Ni) || 98 !== n && 99 !== n || (null === rl ? rl = new Set([e]) : rl.add(e)),
                yl(e, a)),
                Bi = e
            }
            function hl(e, t) {
                e.lanes |= t;
                var a = e.alternate;
                for (null !== a && (a.lanes |= t),
                a = e,
                e = e.return; null !== e; )
                    e.childLanes |= t,
                    null !== (a = e.alternate) && (a.childLanes |= t),
                    a = e,
                    e = e.return;
                return 3 === a.tag ? a.stateNode : null
            }
            function yl(e, t) {
                for (var a = e.callbackNode, n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
                    var l = 31 - Bt(i)
                      , u = 1 << l
                      , c = s[l];
                    if (-1 === c) {
                        if (0 === (u & n) || 0 !== (u & r)) {
                            c = t,
                            Ft(u);
                            var d = Mt;
                            s[l] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1
                        }
                    } else
                        c <= t && (e.expiredLanes |= u);
                    i &= ~u
                }
                if (n = It(e, e === Li ? Ri : 0),
                t = Mt,
                0 === n)
                    null !== a && (a !== Fr && Cr(a),
                    e.callbackNode = null,
                    e.callbackPriority = 0);
                else {
                    if (null !== a) {
                        if (e.callbackPriority === t)
                            return;
                        a !== Fr && Cr(a)
                    }
                    15 === t ? (a = vl.bind(null, e),
                    null === Ar ? (Ar = [a],
                    qr = Er(Nr, Kr)) : Ar.push(a),
                    a = Fr) : 14 === t ? a = Qr(99, vl.bind(null, e)) : (a = function(e) {
                        switch (e) {
                        case 15:
                        case 14:
                            return 99;
                        case 13:
                        case 12:
                        case 11:
                        case 10:
                            return 98;
                        case 9:
                        case 8:
                        case 7:
                        case 6:
                        case 4:
                        case 5:
                            return 97;
                        case 3:
                        case 2:
                        case 1:
                            return 95;
                        case 0:
                            return 90;
                        default:
                            throw Error(o(358, e))
                        }
                    }(t),
                    a = Qr(a, gl.bind(null, e))),
                    e.callbackPriority = t,
                    e.callbackNode = a
                }
            }
            function gl(e) {
                if (il = -1,
                ul = ll = 0,
                0 !== (48 & Ni))
                    throw Error(o(327));
                var t = e.callbackNode;
                if (Rl() && e.callbackNode !== t)
                    return null;
                var a = It(e, e === Li ? Ri : 0);
                if (0 === a)
                    return null;
                var n = a
                  , r = Ni;
                Ni |= 16;
                var s = El();
                for (Li === e && Ri === n || (Qi(),
                jl(e, n)); ; )
                    try {
                        _l();
                        break
                    } catch (l) {
                        Sl(e, l)
                    }
                if (as(),
                Pi.current = s,
                Ni = r,
                null !== Di ? n = 0 : (Li = null,
                Ri = 0,
                n = Ii),
                0 !== (qi & Hi))
                    jl(e, 0);
                else if (0 !== n) {
                    if (2 === n && (Ni |= 64,
                    e.hydrate && (e.hydrate = !1,
                    Qn(e.containerInfo)),
                    0 !== (a = At(e)) && (n = Cl(e, a))),
                    1 === n)
                        throw t = Ai,
                        jl(e, 0),
                        bl(e, a),
                        yl(e, Vr()),
                        t;
                    switch (e.finishedWork = e.current.alternate,
                    e.finishedLanes = a,
                    n) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 2:
                    case 5:
                        Nl(e);
                        break;
                    case 3:
                        if (bl(e, a),
                        (62914560 & a) === a && 10 < (n = Wi + 500 - Vr())) {
                            if (0 !== It(e, 0))
                                break;
                            if (((r = e.suspendedLanes) & a) !== a) {
                                fl(),
                                e.pingedLanes |= e.suspendedLanes & r;
                                break
                            }
                            e.timeoutHandle = Wn(Nl.bind(null, e), n);
                            break
                        }
                        Nl(e);
                        break;
                    case 4:
                        if (bl(e, a),
                        (4186112 & a) === a)
                            break;
                        for (n = e.eventTimes,
                        r = -1; 0 < a; ) {
                            var i = 31 - Bt(a);
                            s = 1 << i,
                            (i = n[i]) > r && (r = i),
                            a &= ~s
                        }
                        if (a = r,
                        10 < (a = (120 > (a = Vr() - a) ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * _i(a / 1960)) - a)) {
                            e.timeoutHandle = Wn(Nl.bind(null, e), a);
                            break
                        }
                        Nl(e);
                        break;
                    default:
                        throw Error(o(329))
                    }
                }
                return yl(e, Vr()),
                e.callbackNode === t ? gl.bind(null, e) : null
            }
            function bl(e, t) {
                for (t &= ~Vi,
                t &= ~Hi,
                e.suspendedLanes |= t,
                e.pingedLanes &= ~t,
                e = e.expirationTimes; 0 < t; ) {
                    var a = 31 - Bt(t)
                      , n = 1 << a;
                    e[a] = -1,
                    t &= ~n
                }
            }
            function vl(e) {
                if (0 !== (48 & Ni))
                    throw Error(o(327));
                if (Rl(),
                e === Li && 0 !== (e.expiredLanes & Ri)) {
                    var t = Ri
                      , a = Cl(e, t);
                    0 !== (qi & Hi) && (a = Cl(e, t = It(e, t)))
                } else
                    a = Cl(e, t = It(e, 0));
                if (0 !== e.tag && 2 === a && (Ni |= 64,
                e.hydrate && (e.hydrate = !1,
                Qn(e.containerInfo)),
                0 !== (t = At(e)) && (a = Cl(e, t))),
                1 === a)
                    throw a = Ai,
                    jl(e, 0),
                    bl(e, t),
                    yl(e, Vr()),
                    a;
                return e.finishedWork = e.current.alternate,
                e.finishedLanes = t,
                Nl(e),
                yl(e, Vr()),
                null
            }
            function kl(e, t) {
                var a = Ni;
                Ni |= 1;
                try {
                    return e(t)
                } finally {
                    0 === (Ni = a) && (Qi(),
                    Yr())
                }
            }
            function wl(e, t) {
                var a = Ni;
                Ni &= -2,
                Ni |= 8;
                try {
                    return e(t)
                } finally {
                    0 === (Ni = a) && (Qi(),
                    Yr())
                }
            }
            function xl(e, t) {
                dr(Fi, Mi),
                Mi |= t,
                qi |= t
            }
            function zl() {
                Mi = Fi.current,
                cr(Fi)
            }
            function jl(e, t) {
                e.finishedWork = null,
                e.finishedLanes = 0;
                var a = e.timeoutHandle;
                if (-1 !== a && (e.timeoutHandle = -1,
                $n(a)),
                null !== Di)
                    for (a = Di.return; null !== a; ) {
                        var n = a;
                        switch (n.tag) {
                        case 1:
                            null !== (n = n.type.childContextTypes) && void 0 !== n && br();
                            break;
                        case 3:
                            Ds(),
                            cr(mr),
                            cr(pr),
                            Ks();
                            break;
                        case 5:
                            Ms(n);
                            break;
                        case 4:
                            Ds();
                            break;
                        case 13:
                        case 19:
                            cr(Fs);
                            break;
                        case 10:
                            ns(n);
                            break;
                        case 23:
                        case 24:
                            zl()
                        }
                        a = a.return
                    }
                Li = e,
                Di = $l(e.current, null),
                Ri = Mi = qi = t,
                Ii = 0,
                Ai = null,
                Vi = Hi = Ui = 0
            }
            function Sl(e, t) {
                for (; ; ) {
                    var a = Di;
                    try {
                        if (as(),
                        Gs.current = No,
                        ao) {
                            for (var n = Zs.memoizedState; null !== n; ) {
                                var r = n.queue;
                                null !== r && (r.pending = null),
                                n = n.next
                            }
                            ao = !1
                        }
                        if (Js = 0,
                        to = eo = Zs = null,
                        no = !1,
                        Oi.current = null,
                        null === a || null === a.return) {
                            Ii = 1,
                            Ai = t,
                            Di = null;
                            break
                        }
                        e: {
                            var s = e
                              , o = a.return
                              , i = a
                              , l = t;
                            if (t = Ri,
                            i.flags |= 2048,
                            i.firstEffect = i.lastEffect = null,
                            null !== l && "object" === typeof l && "function" === typeof l.then) {
                                var u = l;
                                if (0 === (2 & i.mode)) {
                                    var c = i.alternate;
                                    c ? (i.updateQueue = c.updateQueue,
                                    i.memoizedState = c.memoizedState,
                                    i.lanes = c.lanes) : (i.updateQueue = null,
                                    i.memoizedState = null)
                                }
                                var d = 0 !== (1 & Fs.current)
                                  , f = o;
                                do {
                                    var p;
                                    if (p = 13 === f.tag) {
                                        var m = f.memoizedState;
                                        if (null !== m)
                                            p = null !== m.dehydrated;
                                        else {
                                            var h = f.memoizedProps;
                                            p = void 0 !== h.fallback && (!0 !== h.unstable_avoidThisFallback || !d)
                                        }
                                    }
                                    if (p) {
                                        var y = f.updateQueue;
                                        if (null === y) {
                                            var g = new Set;
                                            g.add(u),
                                            f.updateQueue = g
                                        } else
                                            y.add(u);
                                        if (0 === (2 & f.mode)) {
                                            if (f.flags |= 64,
                                            i.flags |= 16384,
                                            i.flags &= -2981,
                                            1 === i.tag)
                                                if (null === i.alternate)
                                                    i.tag = 17;
                                                else {
                                                    var b = cs(-1, 1);
                                                    b.tag = 2,
                                                    ds(i, b)
                                                }
                                            i.lanes |= 1;
                                            break e
                                        }
                                        l = void 0,
                                        i = t;
                                        var v = s.pingCache;
                                        if (null === v ? (v = s.pingCache = new di,
                                        l = new Set,
                                        v.set(u, l)) : void 0 === (l = v.get(u)) && (l = new Set,
                                        v.set(u, l)),
                                        !l.has(i)) {
                                            l.add(i);
                                            var k = Ul.bind(null, s, u, i);
                                            u.then(k, k)
                                        }
                                        f.flags |= 4096,
                                        f.lanes = t;
                                        break e
                                    }
                                    f = f.return
                                } while (null !== f);
                                l = Error((Q(i.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Ii && (Ii = 2),
                            l = ui(l, i),
                            f = o;
                            do {
                                switch (f.tag) {
                                case 3:
                                    s = l,
                                    f.flags |= 4096,
                                    t &= -t,
                                    f.lanes |= t,
                                    fs(f, fi(0, s, t));
                                    break e;
                                case 1:
                                    s = l;
                                    var w = f.type
                                      , x = f.stateNode;
                                    if (0 === (64 & f.flags) && ("function" === typeof w.getDerivedStateFromError || null !== x && "function" === typeof x.componentDidCatch && (null === Ji || !Ji.has(x)))) {
                                        f.flags |= 4096,
                                        t &= -t,
                                        f.lanes |= t,
                                        fs(f, pi(f, s, t));
                                        break e
                                    }
                                }
                                f = f.return
                            } while (null !== f)
                        }
                        Ol(a)
                    } catch (z) {
                        t = z,
                        Di === a && null !== a && (Di = a = a.return);
                        continue
                    }
                    break
                }
            }
            function El() {
                var e = Pi.current;
                return Pi.current = No,
                null === e ? No : e
            }
            function Cl(e, t) {
                var a = Ni;
                Ni |= 16;
                var n = El();
                for (Li === e && Ri === t || jl(e, t); ; )
                    try {
                        Tl();
                        break
                    } catch (r) {
                        Sl(e, r)
                    }
                if (as(),
                Ni = a,
                Pi.current = n,
                null !== Di)
                    throw Error(o(261));
                return Li = null,
                Ri = 0,
                Ii
            }
            function Tl() {
                for (; null !== Di; )
                    Pl(Di)
            }
            function _l() {
                for (; null !== Di && !Tr(); )
                    Pl(Di)
            }
            function Pl(e) {
                var t = Yi(e.alternate, e, Mi);
                e.memoizedProps = e.pendingProps,
                null === t ? Ol(e) : Di = t,
                Oi.current = null
            }
            function Ol(e) {
                var t = e;
                do {
                    var a = t.alternate;
                    if (e = t.return,
                    0 === (2048 & t.flags)) {
                        if (null !== (a = ii(a, t, Mi)))
                            return void (Di = a);
                        if (24 !== (a = t).tag && 23 !== a.tag || null === a.memoizedState || 0 !== (1073741824 & Mi) || 0 === (4 & a.mode)) {
                            for (var n = 0, r = a.child; null !== r; )
                                n |= r.lanes | r.childLanes,
                                r = r.sibling;
                            a.childLanes = n
                        }
                        null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                        null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect),
                        e.lastEffect = t.lastEffect),
                        1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t,
                        e.lastEffect = t))
                    } else {
                        if (null !== (a = li(t)))
                            return a.flags &= 2047,
                            void (Di = a);
                        null !== e && (e.firstEffect = e.lastEffect = null,
                        e.flags |= 2048)
                    }
                    if (null !== (t = t.sibling))
                        return void (Di = t);
                    Di = t = e
                } while (null !== t);
                0 === Ii && (Ii = 5)
            }
            function Nl(e) {
                var t = Br();
                return $r(99, Ll.bind(null, e, t)),
                null
            }
            function Ll(e, t) {
                do {
                    Rl()
                } while (null !== el);
                if (0 !== (48 & Ni))
                    throw Error(o(327));
                var a = e.finishedWork;
                if (null === a)
                    return null;
                if (e.finishedWork = null,
                e.finishedLanes = 0,
                a === e.current)
                    throw Error(o(177));
                e.callbackNode = null;
                var n = a.lanes | a.childLanes
                  , r = n
                  , s = e.pendingLanes & ~r;
                e.pendingLanes = r,
                e.suspendedLanes = 0,
                e.pingedLanes = 0,
                e.expiredLanes &= r,
                e.mutableReadLanes &= r,
                e.entangledLanes &= r,
                r = e.entanglements;
                for (var i = e.eventTimes, l = e.expirationTimes; 0 < s; ) {
                    var u = 31 - Bt(s)
                      , c = 1 << u;
                    r[u] = 0,
                    i[u] = -1,
                    l[u] = -1,
                    s &= ~c
                }
                if (null !== rl && 0 === (24 & n) && rl.has(e) && rl.delete(e),
                e === Li && (Di = Li = null,
                Ri = 0),
                1 < a.flags ? null !== a.lastEffect ? (a.lastEffect.nextEffect = a,
                n = a.firstEffect) : n = a : n = a.firstEffect,
                null !== n) {
                    if (r = Ni,
                    Ni |= 32,
                    Oi.current = null,
                    Un = Kt,
                    gn(i = yn())) {
                        if ("selectionStart"in i)
                            l = {
                                start: i.selectionStart,
                                end: i.selectionEnd
                            };
                        else
                            e: if (l = (l = i.ownerDocument) && l.defaultView || window,
                            (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount) {
                                l = c.anchorNode,
                                s = c.anchorOffset,
                                u = c.focusNode,
                                c = c.focusOffset;
                                try {
                                    l.nodeType,
                                    u.nodeType
                                } catch (E) {
                                    l = null;
                                    break e
                                }
                                var d = 0
                                  , f = -1
                                  , p = -1
                                  , m = 0
                                  , h = 0
                                  , y = i
                                  , g = null;
                                t: for (; ; ) {
                                    for (var b; y !== l || 0 !== s && 3 !== y.nodeType || (f = d + s),
                                    y !== u || 0 !== c && 3 !== y.nodeType || (p = d + c),
                                    3 === y.nodeType && (d += y.nodeValue.length),
                                    null !== (b = y.firstChild); )
                                        g = y,
                                        y = b;
                                    for (; ; ) {
                                        if (y === i)
                                            break t;
                                        if (g === l && ++m === s && (f = d),
                                        g === u && ++h === c && (p = d),
                                        null !== (b = y.nextSibling))
                                            break;
                                        g = (y = g).parentNode
                                    }
                                    y = b
                                }
                                l = -1 === f || -1 === p ? null : {
                                    start: f,
                                    end: p
                                }
                            } else
                                l = null;
                        l = l || {
                            start: 0,
                            end: 0
                        }
                    } else
                        l = null;
                    Hn = {
                        focusedElem: i,
                        selectionRange: l
                    },
                    Kt = !1,
                    cl = null,
                    dl = !1,
                    Ki = n;
                    do {
                        try {
                            Dl()
                        } catch (E) {
                            if (null === Ki)
                                throw Error(o(330));
                            ql(Ki, E),
                            Ki = Ki.nextEffect
                        }
                    } while (null !== Ki);
                    cl = null,
                    Ki = n;
                    do {
                        try {
                            for (i = e; null !== Ki; ) {
                                var v = Ki.flags;
                                if (16 & v && be(Ki.stateNode, ""),
                                128 & v) {
                                    var k = Ki.alternate;
                                    if (null !== k) {
                                        var w = k.ref;
                                        null !== w && ("function" === typeof w ? w(null) : w.current = null)
                                    }
                                }
                                switch (1038 & v) {
                                case 2:
                                    xi(Ki),
                                    Ki.flags &= -3;
                                    break;
                                case 6:
                                    xi(Ki),
                                    Ki.flags &= -3,
                                    Ei(Ki.alternate, Ki);
                                    break;
                                case 1024:
                                    Ki.flags &= -1025;
                                    break;
                                case 1028:
                                    Ki.flags &= -1025,
                                    Ei(Ki.alternate, Ki);
                                    break;
                                case 4:
                                    Ei(Ki.alternate, Ki);
                                    break;
                                case 8:
                                    Si(i, l = Ki);
                                    var x = l.alternate;
                                    ki(l),
                                    null !== x && ki(x)
                                }
                                Ki = Ki.nextEffect
                            }
                        } catch (E) {
                            if (null === Ki)
                                throw Error(o(330));
                            ql(Ki, E),
                            Ki = Ki.nextEffect
                        }
                    } while (null !== Ki);
                    if (w = Hn,
                    k = yn(),
                    v = w.focusedElem,
                    i = w.selectionRange,
                    k !== v && v && v.ownerDocument && hn(v.ownerDocument.documentElement, v)) {
                        null !== i && gn(v) && (k = i.start,
                        void 0 === (w = i.end) && (w = k),
                        "selectionStart"in v ? (v.selectionStart = k,
                        v.selectionEnd = Math.min(w, v.value.length)) : (w = (k = v.ownerDocument || document) && k.defaultView || window).getSelection && (w = w.getSelection(),
                        l = v.textContent.length,
                        x = Math.min(i.start, l),
                        i = void 0 === i.end ? x : Math.min(i.end, l),
                        !w.extend && x > i && (l = i,
                        i = x,
                        x = l),
                        l = mn(v, x),
                        s = mn(v, i),
                        l && s && (1 !== w.rangeCount || w.anchorNode !== l.node || w.anchorOffset !== l.offset || w.focusNode !== s.node || w.focusOffset !== s.offset) && ((k = k.createRange()).setStart(l.node, l.offset),
                        w.removeAllRanges(),
                        x > i ? (w.addRange(k),
                        w.extend(s.node, s.offset)) : (k.setEnd(s.node, s.offset),
                        w.addRange(k))))),
                        k = [];
                        for (w = v; w = w.parentNode; )
                            1 === w.nodeType && k.push({
                                element: w,
                                left: w.scrollLeft,
                                top: w.scrollTop
                            });
                        for ("function" === typeof v.focus && v.focus(),
                        v = 0; v < k.length; v++)
                            (w = k[v]).element.scrollLeft = w.left,
                            w.element.scrollTop = w.top
                    }
                    Kt = !!Un,
                    Hn = Un = null,
                    e.current = a,
                    Ki = n;
                    do {
                        try {
                            for (v = e; null !== Ki; ) {
                                var z = Ki.flags;
                                if (36 & z && gi(v, Ki.alternate, Ki),
                                128 & z) {
                                    k = void 0;
                                    var j = Ki.ref;
                                    if (null !== j) {
                                        var S = Ki.stateNode;
                                        Ki.tag,
                                        k = S,
                                        "function" === typeof j ? j(k) : j.current = k
                                    }
                                }
                                Ki = Ki.nextEffect
                            }
                        } catch (E) {
                            if (null === Ki)
                                throw Error(o(330));
                            ql(Ki, E),
                            Ki = Ki.nextEffect
                        }
                    } while (null !== Ki);
                    Ki = null,
                    Ir(),
                    Ni = r
                } else
                    e.current = a;
                if (Zi)
                    Zi = !1,
                    el = e,
                    tl = t;
                else
                    for (Ki = n; null !== Ki; )
                        t = Ki.nextEffect,
                        Ki.nextEffect = null,
                        8 & Ki.flags && ((z = Ki).sibling = null,
                        z.stateNode = null),
                        Ki = t;
                if (0 === (n = e.pendingLanes) && (Ji = null),
                1 === n ? e === ol ? sl++ : (sl = 0,
                ol = e) : sl = 0,
                a = a.stateNode,
                jr && "function" === typeof jr.onCommitFiberRoot)
                    try {
                        jr.onCommitFiberRoot(zr, a, void 0, 64 === (64 & a.current.flags))
                    } catch (E) {}
                if (yl(e, Vr()),
                Gi)
                    throw Gi = !1,
                    e = Xi,
                    Xi = null,
                    e;
                return 0 !== (8 & Ni) || Yr(),
                null
            }
            function Dl() {
                for (; null !== Ki; ) {
                    var e = Ki.alternate;
                    dl || null === cl || (0 !== (8 & Ki.flags) ? et(Ki, cl) && (dl = !0) : 13 === Ki.tag && Ti(e, Ki) && et(Ki, cl) && (dl = !0));
                    var t = Ki.flags;
                    0 !== (256 & t) && yi(e, Ki),
                    0 === (512 & t) || Zi || (Zi = !0,
                    Qr(97, (function() {
                        return Rl(),
                        null
                    }
                    ))),
                    Ki = Ki.nextEffect
                }
            }
            function Rl() {
                if (90 !== tl) {
                    var e = 97 < tl ? 97 : tl;
                    return tl = 90,
                    $r(e, Il)
                }
                return !1
            }
            function Ml(e, t) {
                al.push(t, e),
                Zi || (Zi = !0,
                Qr(97, (function() {
                    return Rl(),
                    null
                }
                )))
            }
            function Fl(e, t) {
                nl.push(t, e),
                Zi || (Zi = !0,
                Qr(97, (function() {
                    return Rl(),
                    null
                }
                )))
            }
            function Il() {
                if (null === el)
                    return !1;
                var e = el;
                if (el = null,
                0 !== (48 & Ni))
                    throw Error(o(331));
                var t = Ni;
                Ni |= 32;
                var a = nl;
                nl = [];
                for (var n = 0; n < a.length; n += 2) {
                    var r = a[n]
                      , s = a[n + 1]
                      , i = r.destroy;
                    if (r.destroy = void 0,
                    "function" === typeof i)
                        try {
                            i()
                        } catch (u) {
                            if (null === s)
                                throw Error(o(330));
                            ql(s, u)
                        }
                }
                for (a = al,
                al = [],
                n = 0; n < a.length; n += 2) {
                    r = a[n],
                    s = a[n + 1];
                    try {
                        var l = r.create;
                        r.destroy = l()
                    } catch (u) {
                        if (null === s)
                            throw Error(o(330));
                        ql(s, u)
                    }
                }
                for (l = e.current.firstEffect; null !== l; )
                    e = l.nextEffect,
                    l.nextEffect = null,
                    8 & l.flags && (l.sibling = null,
                    l.stateNode = null),
                    l = e;
                return Ni = t,
                Yr(),
                !0
            }
            function Al(e, t, a) {
                ds(e, t = fi(0, t = ui(a, t), 1)),
                t = fl(),
                null !== (e = hl(e, 1)) && (Vt(e, 1, t),
                yl(e, t))
            }
            function ql(e, t) {
                if (3 === e.tag)
                    Al(e, e, t);
                else
                    for (var a = e.return; null !== a; ) {
                        if (3 === a.tag) {
                            Al(a, e, t);
                            break
                        }
                        if (1 === a.tag) {
                            var n = a.stateNode;
                            if ("function" === typeof a.type.getDerivedStateFromError || "function" === typeof n.componentDidCatch && (null === Ji || !Ji.has(n))) {
                                var r = pi(a, e = ui(t, e), 1);
                                if (ds(a, r),
                                r = fl(),
                                null !== (a = hl(a, 1)))
                                    Vt(a, 1, r),
                                    yl(a, r);
                                else if ("function" === typeof n.componentDidCatch && (null === Ji || !Ji.has(n)))
                                    try {
                                        n.componentDidCatch(t, e)
                                    } catch (s) {}
                                break
                            }
                        }
                        a = a.return
                    }
            }
            function Ul(e, t, a) {
                var n = e.pingCache;
                null !== n && n.delete(t),
                t = fl(),
                e.pingedLanes |= e.suspendedLanes & a,
                Li === e && (Ri & a) === a && (4 === Ii || 3 === Ii && (62914560 & Ri) === Ri && 500 > Vr() - Wi ? jl(e, 0) : Vi |= a),
                yl(e, t)
            }
            function Hl(e, t) {
                var a = e.stateNode;
                null !== a && a.delete(t),
                0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Br() ? 1 : 2 : (0 === ll && (ll = qi),
                0 === (t = Ut(62914560 & ~ll)) && (t = 4194304))),
                a = fl(),
                null !== (e = hl(e, t)) && (Vt(e, t, a),
                yl(e, a))
            }
            function Vl(e, t, a, n) {
                this.tag = e,
                this.key = a,
                this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
                this.index = 0,
                this.ref = null,
                this.pendingProps = t,
                this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
                this.mode = n,
                this.flags = 0,
                this.lastEffect = this.firstEffect = this.nextEffect = null,
                this.childLanes = this.lanes = 0,
                this.alternate = null
            }
            function Bl(e, t, a, n) {
                return new Vl(e,t,a,n)
            }
            function Wl(e) {
                return !(!(e = e.prototype) || !e.isReactComponent)
            }
            function $l(e, t) {
                var a = e.alternate;
                return null === a ? ((a = Bl(e.tag, t, e.key, e.mode)).elementType = e.elementType,
                a.type = e.type,
                a.stateNode = e.stateNode,
                a.alternate = e,
                e.alternate = a) : (a.pendingProps = t,
                a.type = e.type,
                a.flags = 0,
                a.nextEffect = null,
                a.firstEffect = null,
                a.lastEffect = null),
                a.childLanes = e.childLanes,
                a.lanes = e.lanes,
                a.child = e.child,
                a.memoizedProps = e.memoizedProps,
                a.memoizedState = e.memoizedState,
                a.updateQueue = e.updateQueue,
                t = e.dependencies,
                a.dependencies = null === t ? null : {
                    lanes: t.lanes,
                    firstContext: t.firstContext
                },
                a.sibling = e.sibling,
                a.index = e.index,
                a.ref = e.ref,
                a
            }
            function Ql(e, t, a, n, r, s) {
                var i = 2;
                if (n = e,
                "function" === typeof e)
                    Wl(e) && (i = 1);
                else if ("string" === typeof e)
                    i = 5;
                else
                    e: switch (e) {
                    case j:
                        return Yl(a.children, r, s, t);
                    case M:
                        i = 8,
                        r |= 16;
                        break;
                    case S:
                        i = 8,
                        r |= 1;
                        break;
                    case E:
                        return (e = Bl(12, a, t, 8 | r)).elementType = E,
                        e.type = E,
                        e.lanes = s,
                        e;
                    case P:
                        return (e = Bl(13, a, t, r)).type = P,
                        e.elementType = P,
                        e.lanes = s,
                        e;
                    case O:
                        return (e = Bl(19, a, t, r)).elementType = O,
                        e.lanes = s,
                        e;
                    case F:
                        return Kl(a, r, s, t);
                    case I:
                        return (e = Bl(24, a, t, r)).elementType = I,
                        e.lanes = s,
                        e;
                    default:
                        if ("object" === typeof e && null !== e)
                            switch (e.$$typeof) {
                            case C:
                                i = 10;
                                break e;
                            case T:
                                i = 9;
                                break e;
                            case _:
                                i = 11;
                                break e;
                            case N:
                                i = 14;
                                break e;
                            case L:
                                i = 16,
                                n = null;
                                break e;
                            case D:
                                i = 22;
                                break e
                            }
                        throw Error(o(130, null == e ? e : typeof e, ""))
                    }
                return (t = Bl(i, a, t, r)).elementType = e,
                t.type = n,
                t.lanes = s,
                t
            }
            function Yl(e, t, a, n) {
                return (e = Bl(7, e, n, t)).lanes = a,
                e
            }
            function Kl(e, t, a, n) {
                return (e = Bl(23, e, n, t)).elementType = F,
                e.lanes = a,
                e
            }
            function Gl(e, t, a) {
                return (e = Bl(6, e, null, t)).lanes = a,
                e
            }
            function Xl(e, t, a) {
                return (t = Bl(4, null !== e.children ? e.children : [], e.key, t)).lanes = a,
                t.stateNode = {
                    containerInfo: e.containerInfo,
                    pendingChildren: null,
                    implementation: e.implementation
                },
                t
            }
            function Jl(e, t, a) {
                this.tag = t,
                this.containerInfo = e,
                this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
                this.timeoutHandle = -1,
                this.pendingContext = this.context = null,
                this.hydrate = a,
                this.callbackNode = null,
                this.callbackPriority = 0,
                this.eventTimes = Ht(0),
                this.expirationTimes = Ht(-1),
                this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
                this.entanglements = Ht(0),
                this.mutableSourceEagerHydrationData = null
            }
            function Zl(e, t, a) {
                var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: z,
                    key: null == n ? null : "" + n,
                    children: e,
                    containerInfo: t,
                    implementation: a
                }
            }
            function eu(e, t, a, n) {
                var r = t.current
                  , s = fl()
                  , i = pl(r);
                e: if (a) {
                    t: {
                        if (Ge(a = a._reactInternals) !== a || 1 !== a.tag)
                            throw Error(o(170));
                        var l = a;
                        do {
                            switch (l.tag) {
                            case 3:
                                l = l.stateNode.context;
                                break t;
                            case 1:
                                if (gr(l.type)) {
                                    l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                    break t
                                }
                            }
                            l = l.return
                        } while (null !== l);
                        throw Error(o(171))
                    }
                    if (1 === a.tag) {
                        var u = a.type;
                        if (gr(u)) {
                            a = kr(a, u, l);
                            break e
                        }
                    }
                    a = l
                } else
                    a = fr;
                return null === t.context ? t.context = a : t.pendingContext = a,
                (t = cs(s, i)).payload = {
                    element: e
                },
                null !== (n = void 0 === n ? null : n) && (t.callback = n),
                ds(r, t),
                ml(r, i, s),
                i
            }
            function tu(e) {
                return (e = e.current).child ? (e.child.tag,
                e.child.stateNode) : null
            }
            function au(e, t) {
                if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                    var a = e.retryLane;
                    e.retryLane = 0 !== a && a < t ? a : t
                }
            }
            function nu(e, t) {
                au(e, t),
                (e = e.alternate) && au(e, t)
            }
            function ru(e, t, a) {
                var n = null != a && null != a.hydrationOptions && a.hydrationOptions.mutableSources || null;
                if (a = new Jl(e,t,null != a && !0 === a.hydrate),
                t = Bl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0),
                a.current = t,
                t.stateNode = a,
                ls(t),
                e[er] = a.current,
                Nn(8 === e.nodeType ? e.parentNode : e),
                n)
                    for (e = 0; e < n.length; e++) {
                        var r = (t = n[e])._getVersion;
                        r = r(t._source),
                        null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [t, r] : a.mutableSourceEagerHydrationData.push(t, r)
                    }
                this._internalRoot = a
            }
            function su(e) {
                return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
            }
            function ou(e, t, a, n, r) {
                var s = a._reactRootContainer;
                if (s) {
                    var o = s._internalRoot;
                    if ("function" === typeof r) {
                        var i = r;
                        r = function() {
                            var e = tu(o);
                            i.call(e)
                        }
                    }
                    eu(t, o, e, r)
                } else {
                    if (s = a._reactRootContainer = function(e, t) {
                        if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))),
                        !t)
                            for (var a; a = e.lastChild; )
                                e.removeChild(a);
                        return new ru(e,0,t ? {
                            hydrate: !0
                        } : void 0)
                    }(a, n),
                    o = s._internalRoot,
                    "function" === typeof r) {
                        var l = r;
                        r = function() {
                            var e = tu(o);
                            l.call(e)
                        }
                    }
                    wl((function() {
                        eu(t, o, e, r)
                    }
                    ))
                }
                return tu(o)
            }
            function iu(e, t) {
                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!su(t))
                    throw Error(o(200));
                return Zl(e, t, null, a)
            }
            Yi = function(e, t, a) {
                var n = t.lanes;
                if (null !== e)
                    if (e.memoizedProps !== t.pendingProps || mr.current)
                        Fo = !0;
                    else {
                        if (0 === (a & n)) {
                            switch (Fo = !1,
                            t.tag) {
                            case 3:
                                Qo(t),
                                Qs();
                                break;
                            case 5:
                                Rs(t);
                                break;
                            case 1:
                                gr(t.type) && wr(t);
                                break;
                            case 4:
                                Ls(t, t.stateNode.containerInfo);
                                break;
                            case 10:
                                n = t.memoizedProps.value;
                                var r = t.type._context;
                                dr(Jr, r._currentValue),
                                r._currentValue = n;
                                break;
                            case 13:
                                if (null !== t.memoizedState)
                                    return 0 !== (a & t.child.childLanes) ? Jo(e, t, a) : (dr(Fs, 1 & Fs.current),
                                    null !== (t = si(e, t, a)) ? t.sibling : null);
                                dr(Fs, 1 & Fs.current);
                                break;
                            case 19:
                                if (n = 0 !== (a & t.childLanes),
                                0 !== (64 & e.flags)) {
                                    if (n)
                                        return ri(e, t, a);
                                    t.flags |= 64
                                }
                                if (null !== (r = t.memoizedState) && (r.rendering = null,
                                r.tail = null,
                                r.lastEffect = null),
                                dr(Fs, Fs.current),
                                n)
                                    break;
                                return null;
                            case 23:
                            case 24:
                                return t.lanes = 0,
                                Ho(e, t, a)
                            }
                            return si(e, t, a)
                        }
                        Fo = 0 !== (16384 & e.flags)
                    }
                else
                    Fo = !1;
                switch (t.lanes = 0,
                t.tag) {
                case 2:
                    if (n = t.type,
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    e = t.pendingProps,
                    r = yr(t, pr.current),
                    ss(t, a),
                    r = oo(null, t, n, e, r, a),
                    t.flags |= 1,
                    "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof) {
                        if (t.tag = 1,
                        t.memoizedState = null,
                        t.updateQueue = null,
                        gr(n)) {
                            var s = !0;
                            wr(t)
                        } else
                            s = !1;
                        t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null,
                        ls(t);
                        var i = n.getDerivedStateFromProps;
                        "function" === typeof i && ys(t, n, i, e),
                        r.updater = gs,
                        t.stateNode = r,
                        r._reactInternals = t,
                        ws(t, n, e, a),
                        t = $o(null, t, n, !0, s, a)
                    } else
                        t.tag = 0,
                        Io(null, t, r, a),
                        t = t.child;
                    return t;
                case 16:
                    r = t.elementType;
                    e: {
                        switch (null !== e && (e.alternate = null,
                        t.alternate = null,
                        t.flags |= 2),
                        e = t.pendingProps,
                        r = (s = r._init)(r._payload),
                        t.type = r,
                        s = t.tag = function(e) {
                            if ("function" === typeof e)
                                return Wl(e) ? 1 : 0;
                            if (void 0 !== e && null !== e) {
                                if ((e = e.$$typeof) === _)
                                    return 11;
                                if (e === N)
                                    return 14
                            }
                            return 2
                        }(r),
                        e = Xr(r, e),
                        s) {
                        case 0:
                            t = Bo(null, t, r, e, a);
                            break e;
                        case 1:
                            t = Wo(null, t, r, e, a);
                            break e;
                        case 11:
                            t = Ao(null, t, r, e, a);
                            break e;
                        case 14:
                            t = qo(null, t, r, Xr(r.type, e), n, a);
                            break e
                        }
                        throw Error(o(306, r, ""))
                    }
                    return t;
                case 0:
                    return n = t.type,
                    r = t.pendingProps,
                    Bo(e, t, n, r = t.elementType === n ? r : Xr(n, r), a);
                case 1:
                    return n = t.type,
                    r = t.pendingProps,
                    Wo(e, t, n, r = t.elementType === n ? r : Xr(n, r), a);
                case 3:
                    if (Qo(t),
                    n = t.updateQueue,
                    null === e || null === n)
                        throw Error(o(282));
                    if (n = t.pendingProps,
                    r = null !== (r = t.memoizedState) ? r.element : null,
                    us(e, t),
                    ps(t, n, null, a),
                    (n = t.memoizedState.element) === r)
                        Qs(),
                        t = si(e, t, a);
                    else {
                        if ((s = (r = t.stateNode).hydrate) && (qs = Yn(t.stateNode.containerInfo.firstChild),
                        As = t,
                        s = Us = !0),
                        s) {
                            if (null != (e = r.mutableSourceEagerHydrationData))
                                for (r = 0; r < e.length; r += 2)
                                    (s = e[r])._workInProgressVersionPrimary = e[r + 1],
                                    Ys.push(s);
                            for (a = Cs(t, null, n, a),
                            t.child = a; a; )
                                a.flags = -3 & a.flags | 1024,
                                a = a.sibling
                        } else
                            Io(e, t, n, a),
                            Qs();
                        t = t.child
                    }
                    return t;
                case 5:
                    return Rs(t),
                    null === e && Bs(t),
                    n = t.type,
                    r = t.pendingProps,
                    s = null !== e ? e.memoizedProps : null,
                    i = r.children,
                    Bn(n, r) ? i = null : null !== s && Bn(n, s) && (t.flags |= 16),
                    Vo(e, t),
                    Io(e, t, i, a),
                    t.child;
                case 6:
                    return null === e && Bs(t),
                    null;
                case 13:
                    return Jo(e, t, a);
                case 4:
                    return Ls(t, t.stateNode.containerInfo),
                    n = t.pendingProps,
                    null === e ? t.child = Es(t, null, n, a) : Io(e, t, n, a),
                    t.child;
                case 11:
                    return n = t.type,
                    r = t.pendingProps,
                    Ao(e, t, n, r = t.elementType === n ? r : Xr(n, r), a);
                case 7:
                    return Io(e, t, t.pendingProps, a),
                    t.child;
                case 8:
                case 12:
                    return Io(e, t, t.pendingProps.children, a),
                    t.child;
                case 10:
                    e: {
                        n = t.type._context,
                        r = t.pendingProps,
                        i = t.memoizedProps,
                        s = r.value;
                        var l = t.type._context;
                        if (dr(Jr, l._currentValue),
                        l._currentValue = s,
                        null !== i)
                            if (l = i.value,
                            0 === (s = cn(l, s) ? 0 : 0 | ("function" === typeof n._calculateChangedBits ? n._calculateChangedBits(l, s) : 1073741823))) {
                                if (i.children === r.children && !mr.current) {
                                    t = si(e, t, a);
                                    break e
                                }
                            } else
                                for (null !== (l = t.child) && (l.return = t); null !== l; ) {
                                    var u = l.dependencies;
                                    if (null !== u) {
                                        i = l.child;
                                        for (var c = u.firstContext; null !== c; ) {
                                            if (c.context === n && 0 !== (c.observedBits & s)) {
                                                1 === l.tag && ((c = cs(-1, a & -a)).tag = 2,
                                                ds(l, c)),
                                                l.lanes |= a,
                                                null !== (c = l.alternate) && (c.lanes |= a),
                                                rs(l.return, a),
                                                u.lanes |= a;
                                                break
                                            }
                                            c = c.next
                                        }
                                    } else
                                        i = 10 === l.tag && l.type === t.type ? null : l.child;
                                    if (null !== i)
                                        i.return = l;
                                    else
                                        for (i = l; null !== i; ) {
                                            if (i === t) {
                                                i = null;
                                                break
                                            }
                                            if (null !== (l = i.sibling)) {
                                                l.return = i.return,
                                                i = l;
                                                break
                                            }
                                            i = i.return
                                        }
                                    l = i
                                }
                        Io(e, t, r.children, a),
                        t = t.child
                    }
                    return t;
                case 9:
                    return r = t.type,
                    n = (s = t.pendingProps).children,
                    ss(t, a),
                    n = n(r = os(r, s.unstable_observedBits)),
                    t.flags |= 1,
                    Io(e, t, n, a),
                    t.child;
                case 14:
                    return s = Xr(r = t.type, t.pendingProps),
                    qo(e, t, r, s = Xr(r.type, s), n, a);
                case 15:
                    return Uo(e, t, t.type, t.pendingProps, n, a);
                case 17:
                    return n = t.type,
                    r = t.pendingProps,
                    r = t.elementType === n ? r : Xr(n, r),
                    null !== e && (e.alternate = null,
                    t.alternate = null,
                    t.flags |= 2),
                    t.tag = 1,
                    gr(n) ? (e = !0,
                    wr(t)) : e = !1,
                    ss(t, a),
                    vs(t, n, r),
                    ws(t, n, r, a),
                    $o(null, t, n, !0, e, a);
                case 19:
                    return ri(e, t, a);
                case 23:
                case 24:
                    return Ho(e, t, a)
                }
                throw Error(o(156, t.tag))
            }
            ,
            ru.prototype.render = function(e) {
                eu(e, this._internalRoot, null, null)
            }
            ,
            ru.prototype.unmount = function() {
                var e = this._internalRoot
                  , t = e.containerInfo;
                eu(null, e, null, (function() {
                    t[er] = null
                }
                ))
            }
            ,
            tt = function(e) {
                13 === e.tag && (ml(e, 4, fl()),
                nu(e, 4))
            }
            ,
            at = function(e) {
                13 === e.tag && (ml(e, 67108864, fl()),
                nu(e, 67108864))
            }
            ,
            nt = function(e) {
                if (13 === e.tag) {
                    var t = fl()
                      , a = pl(e);
                    ml(e, a, t),
                    nu(e, a)
                }
            }
            ,
            rt = function(e, t) {
                return t()
            }
            ,
            Ce = function(e, t, a) {
                switch (t) {
                case "input":
                    if (ae(e, a),
                    t = a.name,
                    "radio" === a.type && null != t) {
                        for (a = e; a.parentNode; )
                            a = a.parentNode;
                        for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                        t = 0; t < a.length; t++) {
                            var n = a[t];
                            if (n !== e && n.form === e.form) {
                                var r = sr(n);
                                if (!r)
                                    throw Error(o(90));
                                X(n),
                                ae(n, r)
                            }
                        }
                    }
                    break;
                case "textarea":
                    ue(e, a);
                    break;
                case "select":
                    null != (t = a.value) && oe(e, !!a.multiple, t, !1)
                }
            }
            ,
            Le = kl,
            De = function(e, t, a, n, r) {
                var s = Ni;
                Ni |= 4;
                try {
                    return $r(98, e.bind(null, t, a, n, r))
                } finally {
                    0 === (Ni = s) && (Qi(),
                    Yr())
                }
            }
            ,
            Re = function() {
                0 === (49 & Ni) && (function() {
                    if (null !== rl) {
                        var e = rl;
                        rl = null,
                        e.forEach((function(e) {
                            e.expiredLanes |= 24 & e.pendingLanes,
                            yl(e, Vr())
                        }
                        ))
                    }
                    Yr()
                }(),
                Rl())
            }
            ,
            Me = function(e, t) {
                var a = Ni;
                Ni |= 2;
                try {
                    return e(t)
                } finally {
                    0 === (Ni = a) && (Qi(),
                    Yr())
                }
            }
            ;
            var lu = {
                Events: [nr, rr, sr, Oe, Ne, Rl, {
                    current: !1
                }]
            }
              , uu = {
                findFiberByHostInstance: ar,
                bundleType: 0,
                version: "17.0.2",
                rendererPackageName: "react-dom"
            }
              , cu = {
                bundleType: uu.bundleType,
                version: uu.version,
                rendererPackageName: uu.rendererPackageName,
                rendererConfig: uu.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: w.ReactCurrentDispatcher,
                findHostInstanceByFiber: function(e) {
                    return null === (e = Ze(e)) ? null : e.stateNode
                },
                findFiberByHostInstance: uu.findFiberByHostInstance || function() {
                    return null
                }
                ,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null
            };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!du.isDisabled && du.supportsFiber)
                    try {
                        zr = du.inject(cu),
                        jr = du
                    } catch (ye) {}
            }
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu,
            t.createPortal = iu,
            t.findDOMNode = function(e) {
                if (null == e)
                    return null;
                if (1 === e.nodeType)
                    return e;
                var t = e._reactInternals;
                if (void 0 === t) {
                    if ("function" === typeof e.render)
                        throw Error(o(188));
                    throw Error(o(268, Object.keys(e)))
                }
                return e = null === (e = Ze(t)) ? null : e.stateNode
            }
            ,
            t.flushSync = function(e, t) {
                var a = Ni;
                if (0 !== (48 & a))
                    return e(t);
                Ni |= 1;
                try {
                    if (e)
                        return $r(99, e.bind(null, t))
                } finally {
                    Ni = a,
                    Yr()
                }
            }
            ,
            t.hydrate = function(e, t, a) {
                if (!su(t))
                    throw Error(o(200));
                return ou(null, e, t, !0, a)
            }
            ,
            t.render = function(e, t, a) {
                if (!su(t))
                    throw Error(o(200));
                return ou(null, e, t, !1, a)
            }
            ,
            t.unmountComponentAtNode = function(e) {
                if (!su(e))
                    throw Error(o(40));
                return !!e._reactRootContainer && (wl((function() {
                    ou(null, null, e, !1, (function() {
                        e._reactRootContainer = null,
                        e[er] = null
                    }
                    ))
                }
                )),
                !0)
            }
            ,
            t.unstable_batchedUpdates = kl,
            t.unstable_createPortal = function(e, t) {
                return iu(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }
            ,
            t.unstable_renderSubtreeIntoContainer = function(e, t, a, n) {
                if (!su(a))
                    throw Error(o(200));
                if (null == e || void 0 === e._reactInternals)
                    throw Error(o(38));
                return ou(e, t, a, !1, n)
            }
            ,
            t.version = "17.0.2"
        },
        164: function(e, t, a) {
            "use strict";
            !function e() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)
                    try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
            }(),
            e.exports = a(463)
        },
        374: function(e, t, a) {
            "use strict";
            a(725);
            var n = a(791)
              , r = 60103;
            if (t.Fragment = 60107,
            "function" === typeof Symbol && Symbol.for) {
                var s = Symbol.for;
                r = s("react.element"),
                t.Fragment = s("react.fragment")
            }
            var o = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
              , i = Object.prototype.hasOwnProperty
              , l = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function u(e, t, a) {
                var n, s = {}, u = null, c = null;
                for (n in void 0 !== a && (u = "" + a),
                void 0 !== t.key && (u = "" + t.key),
                void 0 !== t.ref && (c = t.ref),
                t)
                    i.call(t, n) && !l.hasOwnProperty(n) && (s[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps)
                        void 0 === s[n] && (s[n] = t[n]);
                return {
                    $$typeof: r,
                    type: e,
                    key: u,
                    ref: c,
                    props: s,
                    _owner: o.current
                }
            }
            t.jsx = u,
            t.jsxs = u
        },
        117: function(e, t, a) {
            "use strict";
            var n = a(725)
              , r = 60103
              , s = 60106;
            t.Fragment = 60107,
            t.StrictMode = 60108,
            t.Profiler = 60114;
            var o = 60109
              , i = 60110
              , l = 60112;
            t.Suspense = 60113;
            var u = 60115
              , c = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var d = Symbol.for;
                r = d("react.element"),
                s = d("react.portal"),
                t.Fragment = d("react.fragment"),
                t.StrictMode = d("react.strict_mode"),
                t.Profiler = d("react.profiler"),
                o = d("react.provider"),
                i = d("react.context"),
                l = d("react.forward_ref"),
                t.Suspense = d("react.suspense"),
                u = d("react.memo"),
                c = d("react.lazy")
            }
            var f = "function" === typeof Symbol && Symbol.iterator;
            function p(e) {
                for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, a = 1; a < arguments.length; a++)
                    t += "&args[]=" + encodeURIComponent(arguments[a]);
                return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var m = {
                isMounted: function() {
                    return !1
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }
              , h = {};
            function y(e, t, a) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = a || m
            }
            function g() {}
            function b(e, t, a) {
                this.props = e,
                this.context = t,
                this.refs = h,
                this.updater = a || m
            }
            y.prototype.isReactComponent = {},
            y.prototype.setState = function(e, t) {
                if ("object" !== typeof e && "function" !== typeof e && null != e)
                    throw Error(p(85));
                this.updater.enqueueSetState(this, e, t, "setState")
            }
            ,
            y.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }
            ,
            g.prototype = y.prototype;
            var v = b.prototype = new g;
            v.constructor = b,
            n(v, y.prototype),
            v.isPureReactComponent = !0;
            var k = {
                current: null
            }
              , w = Object.prototype.hasOwnProperty
              , x = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function z(e, t, a) {
                var n, s = {}, o = null, i = null;
                if (null != t)
                    for (n in void 0 !== t.ref && (i = t.ref),
                    void 0 !== t.key && (o = "" + t.key),
                    t)
                        w.call(t, n) && !x.hasOwnProperty(n) && (s[n] = t[n]);
                var l = arguments.length - 2;
                if (1 === l)
                    s.children = a;
                else if (1 < l) {
                    for (var u = Array(l), c = 0; c < l; c++)
                        u[c] = arguments[c + 2];
                    s.children = u
                }
                if (e && e.defaultProps)
                    for (n in l = e.defaultProps)
                        void 0 === s[n] && (s[n] = l[n]);
                return {
                    $$typeof: r,
                    type: e,
                    key: o,
                    ref: i,
                    props: s,
                    _owner: k.current
                }
            }
            function j(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }
            var S = /\/+/g;
            function E(e, t) {
                return "object" === typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }
                    ))
                }("" + e.key) : t.toString(36)
            }
            function C(e, t, a, n, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var l = !1;
                if (null === e)
                    l = !0;
                else
                    switch (i) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                        case r:
                        case s:
                            l = !0
                        }
                    }
                if (l)
                    return o = o(l = e),
                    e = "" === n ? "." + E(l, 0) : n,
                    Array.isArray(o) ? (a = "",
                    null != e && (a = e.replace(S, "$&/") + "/"),
                    C(o, t, a, "", (function(e) {
                        return e
                    }
                    ))) : null != o && (j(o) && (o = function(e, t) {
                        return {
                            $$typeof: r,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(o, a + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(S, "$&/") + "/") + e)),
                    t.push(o)),
                    1;
                if (l = 0,
                n = "" === n ? "." : n + ":",
                Array.isArray(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = n + E(i = e[u], u);
                        l += C(i, t, a, c, o)
                    }
                else if (c = function(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof (e = f && e[f] || e["@@iterator"]) ? e : null
                }(e),
                "function" === typeof c)
                    for (e = c.call(e),
                    u = 0; !(i = e.next()).done; )
                        l += C(i = i.value, t, a, c = n + E(i, u++), o);
                else if ("object" === i)
                    throw t = "" + e,
                    Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                return l
            }
            function T(e, t, a) {
                if (null == e)
                    return e;
                var n = []
                  , r = 0;
                return C(e, n, "", "", (function(e) {
                    return t.call(a, e, r++)
                }
                )),
                n
            }
            function _(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    t = t(),
                    e._status = 0,
                    e._result = t,
                    t.then((function(t) {
                        0 === e._status && (t = t.default,
                        e._status = 1,
                        e._result = t)
                    }
                    ), (function(t) {
                        0 === e._status && (e._status = 2,
                        e._result = t)
                    }
                    ))
                }
                if (1 === e._status)
                    return e._result;
                throw e._result
            }
            var P = {
                current: null
            };
            function O() {
                var e = P.current;
                if (null === e)
                    throw Error(p(321));
                return e
            }
            var N = {
                ReactCurrentDispatcher: P,
                ReactCurrentBatchConfig: {
                    transition: 0
                },
                ReactCurrentOwner: k,
                IsSomeRendererActing: {
                    current: !1
                },
                assign: n
            };
            t.Children = {
                map: T,
                forEach: function(e, t, a) {
                    T(e, (function() {
                        t.apply(this, arguments)
                    }
                    ), a)
                },
                count: function(e) {
                    var t = 0;
                    return T(e, (function() {
                        t++
                    }
                    )),
                    t
                },
                toArray: function(e) {
                    return T(e, (function(e) {
                        return e
                    }
                    )) || []
                },
                only: function(e) {
                    if (!j(e))
                        throw Error(p(143));
                    return e
                }
            },
            t.Component = y,
            t.PureComponent = b,
            t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N,
            t.cloneElement = function(e, t, a) {
                if (null === e || void 0 === e)
                    throw Error(p(267, e));
                var s = n({}, e.props)
                  , o = e.key
                  , i = e.ref
                  , l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (i = t.ref,
                    l = k.current),
                    void 0 !== t.key && (o = "" + t.key),
                    e.type && e.type.defaultProps)
                        var u = e.type.defaultProps;
                    for (c in t)
                        w.call(t, c) && !x.hasOwnProperty(c) && (s[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c)
                    s.children = a;
                else if (1 < c) {
                    u = Array(c);
                    for (var d = 0; d < c; d++)
                        u[d] = arguments[d + 2];
                    s.children = u
                }
                return {
                    $$typeof: r,
                    type: e.type,
                    key: o,
                    ref: i,
                    props: s,
                    _owner: l
                }
            }
            ,
            t.createContext = function(e, t) {
                return void 0 === t && (t = null),
                (e = {
                    $$typeof: i,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: o,
                    _context: e
                },
                e.Consumer = e
            }
            ,
            t.createElement = z,
            t.createFactory = function(e) {
                var t = z.bind(null, e);
                return t.type = e,
                t
            }
            ,
            t.createRef = function() {
                return {
                    current: null
                }
            }
            ,
            t.forwardRef = function(e) {
                return {
                    $$typeof: l,
                    render: e
                }
            }
            ,
            t.isValidElement = j,
            t.lazy = function(e) {
                return {
                    $$typeof: c,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: _
                }
            }
            ,
            t.memo = function(e, t) {
                return {
                    $$typeof: u,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }
            ,
            t.useCallback = function(e, t) {
                return O().useCallback(e, t)
            }
            ,
            t.useContext = function(e, t) {
                return O().useContext(e, t)
            }
            ,
            t.useDebugValue = function() {}
            ,
            t.useEffect = function(e, t) {
                return O().useEffect(e, t)
            }
            ,
            t.useImperativeHandle = function(e, t, a) {
                return O().useImperativeHandle(e, t, a)
            }
            ,
            t.useLayoutEffect = function(e, t) {
                return O().useLayoutEffect(e, t)
            }
            ,
            t.useMemo = function(e, t) {
                return O().useMemo(e, t)
            }
            ,
            t.useReducer = function(e, t, a) {
                return O().useReducer(e, t, a)
            }
            ,
            t.useRef = function(e) {
                return O().useRef(e)
            }
            ,
            t.useState = function(e) {
                return O().useState(e)
            }
            ,
            t.version = "17.0.2"
        },
        791: function(e, t, a) {
            "use strict";
            e.exports = a(117)
        },
        184: function(e, t, a) {
            "use strict";
            e.exports = a(374)
        },
        813: function(e, t) {
            "use strict";
            var a, n, r, s;
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var o = performance;
                t.unstable_now = function() {
                    return o.now()
                }
            } else {
                var i = Date
                  , l = i.now();
                t.unstable_now = function() {
                    return i.now() - l
                }
            }
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var u = null
                  , c = null
                  , d = function e() {
                    if (null !== u)
                        try {
                            var a = t.unstable_now();
                            u(!0, a),
                            u = null
                        } catch (n) {
                            throw setTimeout(e, 0),
                            n
                        }
                };
                a = function(e) {
                    null !== u ? setTimeout(a, 0, e) : (u = e,
                    setTimeout(d, 0))
                }
                ,
                n = function(e, t) {
                    c = setTimeout(e, t)
                }
                ,
                r = function() {
                    clearTimeout(c)
                }
                ,
                t.unstable_shouldYield = function() {
                    return !1
                }
                ,
                s = t.unstable_forceFrameRate = function() {}
            } else {
                var f = window.setTimeout
                  , p = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var m = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),
                    "function" !== typeof m && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var h = !1
                  , y = null
                  , g = -1
                  , b = 5
                  , v = 0;
                t.unstable_shouldYield = function() {
                    return t.unstable_now() >= v
                }
                ,
                s = function() {}
                ,
                t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < e ? Math.floor(1e3 / e) : 5
                }
                ;
                var k = new MessageChannel
                  , w = k.port2;
                k.port1.onmessage = function() {
                    if (null !== y) {
                        var e = t.unstable_now();
                        v = e + b;
                        try {
                            y(!0, e) ? w.postMessage(null) : (h = !1,
                            y = null)
                        } catch (a) {
                            throw w.postMessage(null),
                            a
                        }
                    } else
                        h = !1
                }
                ,
                a = function(e) {
                    y = e,
                    h || (h = !0,
                    w.postMessage(null))
                }
                ,
                n = function(e, a) {
                    g = f((function() {
                        e(t.unstable_now())
                    }
                    ), a)
                }
                ,
                r = function() {
                    p(g),
                    g = -1
                }
            }
            function x(e, t) {
                var a = e.length;
                e.push(t);
                e: for (; ; ) {
                    var n = a - 1 >>> 1
                      , r = e[n];
                    if (!(void 0 !== r && 0 < S(r, t)))
                        break e;
                    e[n] = t,
                    e[a] = r,
                    a = n
                }
            }
            function z(e) {
                return void 0 === (e = e[0]) ? null : e
            }
            function j(e) {
                var t = e[0];
                if (void 0 !== t) {
                    var a = e.pop();
                    if (a !== t) {
                        e[0] = a;
                        e: for (var n = 0, r = e.length; n < r; ) {
                            var s = 2 * (n + 1) - 1
                              , o = e[s]
                              , i = s + 1
                              , l = e[i];
                            if (void 0 !== o && 0 > S(o, a))
                                void 0 !== l && 0 > S(l, o) ? (e[n] = l,
                                e[i] = a,
                                n = i) : (e[n] = o,
                                e[s] = a,
                                n = s);
                            else {
                                if (!(void 0 !== l && 0 > S(l, a)))
                                    break e;
                                e[n] = l,
                                e[i] = a,
                                n = i
                            }
                        }
                    }
                    return t
                }
                return null
            }
            function S(e, t) {
                var a = e.sortIndex - t.sortIndex;
                return 0 !== a ? a : e.id - t.id
            }
            var E = []
              , C = []
              , T = 1
              , _ = null
              , P = 3
              , O = !1
              , N = !1
              , L = !1;
            function D(e) {
                for (var t = z(C); null !== t; ) {
                    if (null === t.callback)
                        j(C);
                    else {
                        if (!(t.startTime <= e))
                            break;
                        j(C),
                        t.sortIndex = t.expirationTime,
                        x(E, t)
                    }
                    t = z(C)
                }
            }
            function R(e) {
                if (L = !1,
                D(e),
                !N)
                    if (null !== z(E))
                        N = !0,
                        a(M);
                    else {
                        var t = z(C);
                        null !== t && n(R, t.startTime - e)
                    }
            }
            function M(e, a) {
                N = !1,
                L && (L = !1,
                r()),
                O = !0;
                var s = P;
                try {
                    for (D(a),
                    _ = z(E); null !== _ && (!(_.expirationTime > a) || e && !t.unstable_shouldYield()); ) {
                        var o = _.callback;
                        if ("function" === typeof o) {
                            _.callback = null,
                            P = _.priorityLevel;
                            var i = o(_.expirationTime <= a);
                            a = t.unstable_now(),
                            "function" === typeof i ? _.callback = i : _ === z(E) && j(E),
                            D(a)
                        } else
                            j(E);
                        _ = z(E)
                    }
                    if (null !== _)
                        var l = !0;
                    else {
                        var u = z(C);
                        null !== u && n(R, u.startTime - a),
                        l = !1
                    }
                    return l
                } finally {
                    _ = null,
                    P = s,
                    O = !1
                }
            }
            var F = s;
            t.unstable_IdlePriority = 5,
            t.unstable_ImmediatePriority = 1,
            t.unstable_LowPriority = 4,
            t.unstable_NormalPriority = 3,
            t.unstable_Profiling = null,
            t.unstable_UserBlockingPriority = 2,
            t.unstable_cancelCallback = function(e) {
                e.callback = null
            }
            ,
            t.unstable_continueExecution = function() {
                N || O || (N = !0,
                a(M))
            }
            ,
            t.unstable_getCurrentPriorityLevel = function() {
                return P
            }
            ,
            t.unstable_getFirstCallbackNode = function() {
                return z(E)
            }
            ,
            t.unstable_next = function(e) {
                switch (P) {
                case 1:
                case 2:
                case 3:
                    var t = 3;
                    break;
                default:
                    t = P
                }
                var a = P;
                P = t;
                try {
                    return e()
                } finally {
                    P = a
                }
            }
            ,
            t.unstable_pauseExecution = function() {}
            ,
            t.unstable_requestPaint = F,
            t.unstable_runWithPriority = function(e, t) {
                switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
                }
                var a = P;
                P = e;
                try {
                    return t()
                } finally {
                    P = a
                }
            }
            ,
            t.unstable_scheduleCallback = function(e, s, o) {
                var i = t.unstable_now();
                switch ("object" === typeof o && null !== o ? o = "number" === typeof (o = o.delay) && 0 < o ? i + o : i : o = i,
                e) {
                case 1:
                    var l = -1;
                    break;
                case 2:
                    l = 250;
                    break;
                case 5:
                    l = 1073741823;
                    break;
                case 4:
                    l = 1e4;
                    break;
                default:
                    l = 5e3
                }
                return e = {
                    id: T++,
                    callback: s,
                    priorityLevel: e,
                    startTime: o,
                    expirationTime: l = o + l,
                    sortIndex: -1
                },
                o > i ? (e.sortIndex = o,
                x(C, e),
                null === z(E) && e === z(C) && (L ? r() : L = !0,
                n(R, o - i))) : (e.sortIndex = l,
                x(E, e),
                N || O || (N = !0,
                a(M))),
                e
            }
            ,
            t.unstable_wrapCallback = function(e) {
                var t = P;
                return function() {
                    var a = P;
                    P = t;
                    try {
                        return e.apply(this, arguments)
                    } finally {
                        P = a
                    }
                }
            }
        },
        296: function(e, t, a) {
            "use strict";
            e.exports = a(813)
        }
    }
      , t = {};
    function a(n) {
        var r = t[n];
        if (void 0 !== r)
            return r.exports;
        var s = t[n] = {
            exports: {}
        };
        return e[n](s, s.exports, a),
        s.exports
    }
    a.m = e,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, {
            a: t
        }),
        t
    }
    ,
    a.d = function(e, t) {
        for (var n in t)
            a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    a.f = {},
    a.e = function(e) {
        return Promise.all(Object.keys(a.f).reduce((function(t, n) {
            return a.f[n](e, t),
            t
        }
        ), []))
    }
    ,
    a.u = function(e) {
        return "static/js/" + e + ".e01666d6.chunk.js"
    }
    ,
    a.miniCssF = function(e) {}
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        var e = {}
          , t = "wordle:";
        a.l = function(n, r, s, o) {
            if (e[n])
                e[n].push(r);
            else {
                var i, l;
                if (void 0 !== s)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == n || d.getAttribute("data-webpack") == t + s) {
                            i = d;
                            break
                        }
                    }
                i || (l = !0,
                (i = document.createElement("script")).charset = "utf-8",
                i.timeout = 120,
                a.nc && i.setAttribute("nonce", a.nc),
                i.setAttribute("data-webpack", t + s),
                i.src = n),
                e[n] = [r];
                var f = function(t, a) {
                    i.onerror = i.onload = null,
                    clearTimeout(p);
                    var r = e[n];
                    if (delete e[n],
                    i.parentNode && i.parentNode.removeChild(i),
                    r && r.forEach((function(e) {
                        return e(a)
                    }
                    )),
                    t)
                        return t(a)
                }
                  , p = setTimeout(f.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
                i.onerror = f.bind(null, i.onerror),
                i.onload = f.bind(null, i.onload),
                l && document.head.appendChild(i)
            }
        }
    }(),
    a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.p = "/",
    function() {
        var e = {
            179: 0
        };
        a.f.j = function(t, n) {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r)
                    n.push(r[2]);
                else {
                    var s = new Promise((function(a, n) {
                        r = e[t] = [a, n]
                    }
                    ));
                    n.push(r[2] = s);
                    var o = a.p + a.u(t)
                      , i = new Error;
                    a.l(o, (function(n) {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0),
                        r)) {
                            var s = n && ("load" === n.type ? "missing" : n.type)
                              , o = n && n.target && n.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + s + ": " + o + ")",
                            i.name = "ChunkLoadError",
                            i.type = s,
                            i.request = o,
                            r[1](i)
                        }
                    }
                    ), "chunk-" + t, t)
                }
        }
        ;
        var t = function(t, n) {
            var r, s, o = n[0], i = n[1], l = n[2], u = 0;
            if (o.some((function(t) {
                return 0 !== e[t]
            }
            ))) {
                for (r in i)
                    a.o(i, r) && (a.m[r] = i[r]);
                if (l)
                    l(a)
            }
            for (t && t(n); u < o.length; u++)
                s = o[u],
                a.o(e, s) && e[s] && e[s][0](),
                e[s] = 0
        }
          , n = self.webpackChunkwordle = self.webpackChunkwordle || [];
        n.forEach(t.bind(null, 0)),
        n.push = t.bind(null, n.push.bind(n))
    }(),
    function() {
        "use strict";
        var e = a(791)
          , t = a(164);
        function n(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function r(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return n(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === a && e.constructor && (a = e.constructor.name),
                "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? n(e, t) : void 0
            }
        }
        function s(e) {
            return function(e) {
                if (Array.isArray(e))
                    return n(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                    return Array.from(e)
            }(e) || r(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function o(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                var a = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != a) {
                    var n, r, s = [], o = !0, i = !1;
                    try {
                        for (a = a.call(e); !(o = (n = a.next()).done) && (s.push(n.value),
                        !t || s.length !== t); o = !0)
                            ;
                    } catch (l) {
                        i = !0,
                        r = l
                    } finally {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    return s
                }
            }(e, t) || r(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        var i = function(t) {
            return e.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true"
            }, t), e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            }))
        };
        var l = function(t) {
            return e.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true"
            }, t), e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        };
        var u = function(t) {
            return e.createElement("svg", Object.assign({
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "aria-hidden": "true"
            }, t), e.createElement("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            }))
        };
        var c, d;
        function f() {
            return f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = arguments[t];
                    for (var n in a)
                        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                }
                return e
            }
            ,
            f.apply(this, arguments)
        }
        function p(e, t) {
            if (null == e)
                return {};
            var a, n, r = {}, s = Object.keys(e);
            for (n = 0; n < s.length; n++)
                a = s[n],
                t.indexOf(a) >= 0 || (r[a] = e[a]);
            return r
        }
        function m(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function h(e, t) {
            var a;
            if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (a = function(e, t) {
                    if (e) {
                        if ("string" === typeof e)
                            return m(e, t);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === a && e.constructor && (a = e.constructor.name),
                        "Map" === a || "Set" === a ? Array.from(e) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? m(e, t) : void 0
                    }
                }(e)) || t && e && "number" === typeof e.length) {
                    a && (e = a);
                    var n = 0;
                    return function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            return (a = e[Symbol.iterator]()).next.bind(a)
        }
        function y(e, t) {
            if (e in t) {
                for (var a = t[e], n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
                    r[s - 2] = arguments[s];
                return "function" === typeof a ? a.apply(void 0, r) : a
            }
            var o = new Error('Tried to handle "' + e + '" but there is no handler defined. Only defined handlers are: ' + Object.keys(t).map((function(e) {
                return '"' + e + '"'
            }
            )).join(", ") + ".");
            throw Error.captureStackTrace && Error.captureStackTrace(o, y),
            o
        }
        function g(e) {
            var t = e.props
              , a = e.slot
              , n = e.defaultTag
              , r = e.features
              , s = e.visible
              , o = void 0 === s || s
              , i = e.name;
            if (o)
                return b(t, a, n, i);
            var l = null != r ? r : c.None;
            if (l & c.Static) {
                var u = t.static
                  , m = void 0 !== u && u
                  , h = p(t, ["static"]);
                if (m)
                    return b(h, a, n, i)
            }
            if (l & c.RenderStrategy) {
                var g, v = t.unmount, k = void 0 === v || v, w = p(t, ["unmount"]);
                return y(k ? d.Unmount : d.Hidden, ((g = {})[d.Unmount] = function() {
                    return null
                }
                ,
                g[d.Hidden] = function() {
                    return b(f({}, w, {
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }), a, n, i)
                }
                ,
                g))
            }
            return b(t, a, n, i)
        }
        function b(t, a, n, r) {
            var s;
            void 0 === a && (a = {});
            var o = k(t, ["unmount", "static"])
              , i = o.as
              , l = void 0 === i ? n : i
              , u = o.children
              , c = o.refName
              , d = void 0 === c ? "ref" : c
              , f = p(o, ["as", "children", "refName"])
              , m = void 0 !== t.ref ? ((s = {})[d] = t.ref,
            s) : {}
              , y = "function" === typeof u ? u(a) : u;
            if (f.className && "function" === typeof f.className && (f.className = f.className(a)),
            l === e.Fragment && Object.keys(f).length > 0) {
                if (!(0,
                e.isValidElement)(y) || Array.isArray(y) && y.length > 1)
                    throw new Error(['Passing props on "Fragment"!', "", "The current component <" + r + ' /> is rendering a "Fragment".', "However we need to passthrough the following props:", Object.keys(f).map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n"), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((function(e) {
                        return "  - " + e
                    }
                    )).join("\n")].join("\n"));
                return (0,
                e.cloneElement)(y, Object.assign({}, function(e, t, a) {
                    for (var n, r = Object.assign({}, e), s = function() {
                        var a, s = n.value;
                        void 0 !== e[s] && void 0 !== t[s] && Object.assign(r, ((a = {})[s] = function(a) {
                            a.defaultPrevented || e[s](a),
                            a.defaultPrevented || t[s](a)
                        }
                        ,
                        a))
                    }, o = h(a); !(n = o()).done; )
                        s();
                    return r
                }(function(e) {
                    var t = Object.assign({}, e);
                    for (var a in t)
                        void 0 === t[a] && delete t[a];
                    return t
                }(k(f, ["ref"])), y.props, ["onClick"]), m))
            }
            return (0,
            e.createElement)(l, Object.assign({}, k(f, ["ref"]), l !== e.Fragment && m), y)
        }
        function v(t) {
            var a;
            return Object.assign((0,
            e.forwardRef)(t), {
                displayName: null != (a = t.displayName) ? a : t.name
            })
        }
        function k(e, t) {
            void 0 === t && (t = []);
            for (var a, n = Object.assign({}, e), r = h(t); !(a = r()).done; ) {
                var s = a.value;
                s in n && delete n[s]
            }
            return n
        }
        !function(e) {
            e[e.None = 0] = "None",
            e[e.RenderStrategy = 1] = "RenderStrategy",
            e[e.Static = 2] = "Static"
        }(c || (c = {})),
        function(e) {
            e[e.Unmount = 0] = "Unmount",
            e[e.Hidden = 1] = "Hidden"
        }(d || (d = {}));
        var w = "undefined" !== typeof window ? e.useLayoutEffect : e.useEffect
          , x = {
            serverHandoffComplete: !1
        };
        function z() {
            var t = (0,
            e.useState)(x.serverHandoffComplete)
              , a = t[0]
              , n = t[1];
            return (0,
            e.useEffect)((function() {
                !0 !== a && n(!0)
            }
            ), [a]),
            (0,
            e.useEffect)((function() {
                !1 === x.serverHandoffComplete && (x.serverHandoffComplete = !0)
            }
            ), []),
            a
        }
        var j = 0;
        function S() {
            return ++j
        }
        function E() {
            var t = z()
              , a = (0,
            e.useState)(t ? S : null)
              , n = a[0]
              , r = a[1];
            return w((function() {
                null === n && r(S())
            }
            ), [n]),
            null != n ? "" + n : void 0
        }
        function C() {
            var t = (0,
            e.useRef)(!1);
            return (0,
            e.useEffect)((function() {
                return t.current = !0,
                function() {
                    t.current = !1
                }
            }
            ), []),
            t
        }
        var T, _, P = (0,
        e.createContext)(null);
        function O() {
            return (0,
            e.useContext)(P)
        }
        function N(t) {
            var a = t.value
              , n = t.children;
            return e.createElement(P.Provider, {
                value: a
            }, n)
        }
        function L() {
            var e = []
              , t = {
                requestAnimationFrame: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }((function() {
                    var e = requestAnimationFrame.apply(void 0, arguments);
                    t.add((function() {
                        return cancelAnimationFrame(e)
                    }
                    ))
                }
                )),
                nextFrame: function() {
                    for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++)
                        a[n] = arguments[n];
                    t.requestAnimationFrame((function() {
                        t.requestAnimationFrame.apply(t, a)
                    }
                    ))
                },
                setTimeout: function(e) {
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t.toString = function() {
                        return e.toString()
                    }
                    ,
                    t
                }((function() {
                    var e = setTimeout.apply(void 0, arguments);
                    t.add((function() {
                        return clearTimeout(e)
                    }
                    ))
                }
                )),
                add: function(t) {
                    e.push(t)
                },
                dispose: function() {
                    for (var t, a = h(e.splice(0)); !(t = a()).done; ) {
                        var n = t.value;
                        n()
                    }
                }
            };
            return t
        }
        function D(e) {
            for (var t, a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
                n[r - 1] = arguments[r];
            e && n.length > 0 && (t = e.classList).add.apply(t, n)
        }
        function R(e) {
            for (var t, a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), r = 1; r < a; r++)
                n[r - 1] = arguments[r];
            e && n.length > 0 && (t = e.classList).remove.apply(t, n)
        }
        function M(e, t, a, n, r, s) {
            var o = L()
              , i = void 0 !== s ? function(e) {
                var t = {
                    called: !1
                };
                return function() {
                    if (!t.called)
                        return t.called = !0,
                        e.apply(void 0, arguments)
                }
            }(s) : function() {}
            ;
            return R.apply(void 0, [e].concat(r)),
            D.apply(void 0, [e].concat(t, a)),
            o.nextFrame((function() {
                R.apply(void 0, [e].concat(a)),
                D.apply(void 0, [e].concat(n)),
                o.add(function(e, t) {
                    var a = L();
                    if (!e)
                        return a.dispose;
                    var n = getComputedStyle(e)
                      , r = [n.transitionDuration, n.transitionDelay].map((function(e) {
                        var t = e.split(",").filter(Boolean).map((function(e) {
                            return e.includes("ms") ? parseFloat(e) : 1e3 * parseFloat(e)
                        }
                        )).sort((function(e, t) {
                            return t - e
                        }
                        ))[0];
                        return void 0 === t ? 0 : t
                    }
                    ))
                      , s = r[0]
                      , o = r[1];
                    return 0 !== s ? a.setTimeout((function() {
                        t(_.Finished)
                    }
                    ), s + o) : t(_.Finished),
                    a.add((function() {
                        return t(_.Cancelled)
                    }
                    )),
                    a.dispose
                }(e, (function(a) {
                    return R.apply(void 0, [e].concat(n, t)),
                    D.apply(void 0, [e].concat(r)),
                    i(a)
                }
                )))
            }
            )),
            o.add((function() {
                return R.apply(void 0, [e].concat(t, a, n, r))
            }
            )),
            o.add((function() {
                return i(_.Cancelled)
            }
            )),
            o.dispose
        }
        function F(t) {
            return void 0 === t && (t = ""),
            (0,
            e.useMemo)((function() {
                return t.split(" ").filter((function(e) {
                    return e.trim().length > 1
                }
                ))
            }
            ), [t])
        }
        P.displayName = "OpenClosedContext",
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(T || (T = {})),
        function(e) {
            e.Finished = "finished",
            e.Cancelled = "cancelled"
        }(_ || (_ = {}));
        var I, A = (0,
        e.createContext)(null);
        A.displayName = "TransitionContext",
        function(e) {
            e.Visible = "visible",
            e.Hidden = "hidden"
        }(I || (I = {}));
        var q = (0,
        e.createContext)(null);
        function U(e) {
            return "children"in e ? U(e.children) : e.current.filter((function(e) {
                return e.state === I.Visible
            }
            )).length > 0
        }
        function H(t) {
            var a = (0,
            e.useRef)(t)
              , n = (0,
            e.useRef)([])
              , r = C();
            (0,
            e.useEffect)((function() {
                a.current = t
            }
            ), [t]);
            var s = (0,
            e.useCallback)((function(e, t) {
                var s;
                void 0 === t && (t = d.Hidden);
                var o = n.current.findIndex((function(t) {
                    return t.id === e
                }
                ));
                -1 !== o && (y(t, ((s = {})[d.Unmount] = function() {
                    n.current.splice(o, 1)
                }
                ,
                s[d.Hidden] = function() {
                    n.current[o].state = I.Hidden
                }
                ,
                s)),
                !U(n) && r.current && (null == a.current || a.current()))
            }
            ), [a, r, n])
              , o = (0,
            e.useCallback)((function(e) {
                var t = n.current.find((function(t) {
                    return t.id === e
                }
                ));
                return t ? t.state !== I.Visible && (t.state = I.Visible) : n.current.push({
                    id: e,
                    state: I.Visible
                }),
                function() {
                    return s(e, d.Unmount)
                }
            }
            ), [n, s]);
            return (0,
            e.useMemo)((function() {
                return {
                    children: n,
                    register: o,
                    unregister: s
                }
            }
            ), [o, s, n])
        }
        function V() {}
        q.displayName = "NestingContext";
        var B = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
        function W(e) {
            for (var t, a = {}, n = h(B); !(t = n()).done; ) {
                var r, s = t.value;
                a[s] = null != (r = e[s]) ? r : V
            }
            return a
        }
        var $ = c.RenderStrategy;
        function Q(t) {
            var a, n = t.beforeEnter, r = t.afterEnter, s = t.beforeLeave, o = t.afterLeave, i = t.enter, l = t.enterFrom, u = t.enterTo, c = t.entered, m = t.leave, h = t.leaveFrom, b = t.leaveTo, v = p(t, ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave", "enter", "enterFrom", "enterTo", "entered", "leave", "leaveFrom", "leaveTo"]), k = (0,
            e.useRef)(null), x = (0,
            e.useState)(I.Visible), j = x[0], S = x[1], C = v.unmount ? d.Unmount : d.Hidden, P = function() {
                var t = (0,
                e.useContext)(A);
                if (null === t)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return t
            }(), O = P.show, L = P.appear, D = P.initial, R = function() {
                var t = (0,
                e.useContext)(q);
                if (null === t)
                    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
                return t
            }(), V = R.register, B = R.unregister, Q = E(), Y = (0,
            e.useRef)(!1), K = H((function() {
                Y.current || (S(I.Hidden),
                B(Q),
                ne.current.afterLeave())
            }
            ));
            w((function() {
                if (Q)
                    return V(Q)
            }
            ), [V, Q]),
            w((function() {
                var e;
                C === d.Hidden && Q && (O && j !== I.Visible ? S(I.Visible) : y(j, ((e = {})[I.Hidden] = function() {
                    return B(Q)
                }
                ,
                e[I.Visible] = function() {
                    return V(Q)
                }
                ,
                e)))
            }
            ), [j, Q, V, B, O, C]);
            var G = F(i)
              , X = F(l)
              , J = F(u)
              , Z = F(c)
              , ee = F(m)
              , te = F(h)
              , ae = F(b)
              , ne = function(t) {
                var a = (0,
                e.useRef)(W(t));
                return (0,
                e.useEffect)((function() {
                    a.current = W(t)
                }
                ), [t]),
                a
            }({
                beforeEnter: n,
                afterEnter: r,
                beforeLeave: s,
                afterLeave: o
            })
              , re = z();
            (0,
            e.useEffect)((function() {
                if (re && j === I.Visible && null === k.current)
                    throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
            }
            ), [k, j, re]);
            var se = D && !L;
            w((function() {
                var e = k.current;
                if (e && !se)
                    return Y.current = !0,
                    O && ne.current.beforeEnter(),
                    O || ne.current.beforeLeave(),
                    O ? M(e, G, X, J, Z, (function(e) {
                        Y.current = !1,
                        e === _.Finished && ne.current.afterEnter()
                    }
                    )) : M(e, ee, te, ae, Z, (function(e) {
                        Y.current = !1,
                        e === _.Finished && (U(K) || (S(I.Hidden),
                        B(Q),
                        ne.current.afterLeave()))
                    }
                    ))
            }
            ), [ne, Q, Y, B, K, k, se, O, G, X, J, ee, te, ae]);
            var oe = {
                ref: k
            }
              , ie = v;
            return e.createElement(q.Provider, {
                value: K
            }, e.createElement(N, {
                value: y(j, (a = {},
                a[I.Visible] = T.Open,
                a[I.Hidden] = T.Closed,
                a))
            }, g({
                props: f({}, ie, oe),
                defaultTag: "div",
                features: $,
                visible: j === I.Visible,
                name: "Transition.Child"
            })))
        }
        function Y(t) {
            var a, n = t.show, r = t.appear, s = void 0 !== r && r, o = t.unmount, i = p(t, ["show", "appear", "unmount"]), l = O();
            void 0 === n && null !== l && (n = y(l, ((a = {})[T.Open] = !0,
            a[T.Closed] = !1,
            a)));
            if (![!0, !1].includes(n))
                throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
            var u = (0,
            e.useState)(n ? I.Visible : I.Hidden)
              , c = u[0]
              , d = u[1]
              , m = H((function() {
                d(I.Hidden)
            }
            ))
              , h = function() {
                var t = (0,
                e.useRef)(!0);
                return (0,
                e.useEffect)((function() {
                    t.current = !1
                }
                ), []),
                t.current
            }()
              , b = (0,
            e.useMemo)((function() {
                return {
                    show: n,
                    appear: s || !h,
                    initial: h
                }
            }
            ), [n, s, h]);
            (0,
            e.useEffect)((function() {
                n ? d(I.Visible) : U(m) || d(I.Hidden)
            }
            ), [n, m]);
            var v = {
                unmount: o
            };
            return e.createElement(q.Provider, {
                value: m
            }, e.createElement(A.Provider, {
                value: b
            }, g({
                props: f({}, v, {
                    as: e.Fragment,
                    children: e.createElement(Q, Object.assign({}, v, i))
                }),
                defaultTag: e.Fragment,
                features: $,
                visible: c === I.Visible,
                name: "Transition"
            })))
        }
        Y.Child = function(t) {
            var a = null !== (0,
            e.useContext)(A)
              , n = null !== O();
            return !a && n ? e.createElement(Y, Object.assign({}, t)) : e.createElement(Q, Object.assign({}, t))
        }
        ,
        Y.Root = Y;
        var K, G = a(694), X = a.n(G), J = a(184), Z = function(t) {
            var a = t.isOpen
              , n = t.message
              , r = t.variant
              , s = void 0 === r ? "warning" : r
              , o = X()("fixed top-20 left-1/2 transform -translate-x-1/2 max-w-sm w-full shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden", {
                "bg-rose-200": "warning" === s,
                "bg-green-200 z-20": "success" === s
            });
            return (0,
            J.jsx)(Y, {
                show: a,
                as: e.Fragment,
                enter: "ease-out duration-300 transition",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "transition ease-in duration-100",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0,
                J.jsx)("div", {
                    className: o,
                    children: (0,
                    J.jsx)("div", {
                        className: "p-4",
                        children: (0,
                        J.jsx)("p", {
                            className: "text-sm text-center font-medium text-gray-900",
                            children: n
                        })
                    })
                })
            })
        }, ee = ["movie", "hadid", "bella", "malik", "kylie", "stormi", "kanye", "drake", "adele", "swift", "album", "photo", "blind", "items", "rhobh", "dixie", "kelly", "jonas", "arrow", "suits", "skins", "oprah", "obama", "janet", "harry", "nicki", "cardi", "angus", "ellen", "olsen", "reese", "raven", "milie", "jaden", "twins", "gaten", "insta", "tweet", "snaps", "dwayne", "laroi", "quavo", "drake", "travis", "kravis", "ciara", "polog", "kenan", "watch", "radio", "music", "fonda", "hawke", "alvin", "alien", "media"], 
        ae = function() {
            var e = new Date("January 28, 2022 00:00:00").valueOf()
              , t = Date.now()
              , a = 864e5
              , n = Math.floor((t - e) / a);
            n < 0 && (n += ee.length);
            var r = (n + 1) * a + e;
            return {
                solution: ee[n % ee.length].toUpperCase(),
                solutionIndex: n,
                tomorrow: r
            }
        }(), ne = ae.solution, re = ae.solutionIndex, se = ae.tomorrow, oe = function(e) {
            var t = ne.split("")
              , a = e.split("")
              , n = t.map((function(e) {
                return !1
            }
            ))
              , r = Array.from(Array(e.length));
            return a.forEach((function(e, a) {
                if (e === t[a])
                    return r[a] = "correct",
                    void (n[a] = !0)
            }
            )),
            a.forEach((function(e, a) {
                if (!r[a]) {
                    if (t.includes(e)) {
                        var s = t.findIndex((function(t, a) {
                            return t === e && !n[a]
                        }
                        ));
                        return s > -1 ? (r[a] = "present",
                        void (n[s] = !0)) : void (r[a] = "absent")
                    }
                    r[a] = "absent"
                }
            }
            )),
            r
        }, ie = function(e) {
            var t = e.value
              , a = e.status
              , n = X()("w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded", {
                "bg-white border-slate-200": !a,
                "border-black": t && !a,
                "bg-slate-400 text-white border-slate-400": "absent" === a,
                "bg-green-500 text-white border-green-500": "correct" === a,
                "bg-yellow-500 text-white border-yellow-500": "present" === a,
                "cell-animation": !!t
            });
            return (0,
            J.jsx)("div", {
                className: n,
                children: t
            })
        }, le = function(e) {
            var t = e.guess
              , a = oe(t);
            return (0,
            J.jsx)("div", {
                className: "flex justify-center mb-1",
                children: t.split("").map((function(e, t) {
                    return (0,
                    J.jsx)(ie, {
                        value: e,
                        status: a[t]
                    }, t)
                }
                ))
            })
        }, ue = function(e) {
            var t = e.guess.split("")
              , a = Array.from(Array(5 - t.length));
            return (0,
            J.jsxs)("div", {
                className: "flex justify-center mb-1",
                children: [t.map((function(e, t) {
                    return (0,
                    J.jsx)(ie, {
                        value: e
                    }, t)
                }
                )), a.map((function(e, t) {
                    return (0,
                    J.jsx)(ie, {}, t)
                }
                ))]
            })
        }, ce = function() {
            var e = Array.from(Array(5));
            return (0,
            J.jsx)("div", {
                className: "flex justify-center mb-1",
                children: e.map((function(e, t) {
                    return (0,
                    J.jsx)(ie, {}, t)
                }
                ))
            })
        }, de = function(e) {
            var t = e.guesses
              , a = e.currentGuess
              , n = t.length < 5 ? Array.from(Array(5 - t.length)) : [];
            return (0,
            J.jsxs)("div", {
                className: "pb-6",
                children: [t.map((function(e, t) {
                    return (0,
                    J.jsx)(le, {
                        guess: e
                    }, t)
                }
                )), t.length < 6 && (0,
                J.jsx)(ue, {
                    guess: a
                }), n.map((function(e, t) {
                    return (0,
                    J.jsx)(ce, {}, t)
                }
                ))]
            })
        }, fe = function(e) {
            var t = e.children
              , a = e.status
              , n = e.width
              , r = void 0 === n ? 40 : n
              , s = e.value
              , o = e.onClick
              , i = X()("flex items-center justify-center rounded mx-0.5 text-xs font-bold cursor-pointer select-none", {
                "bg-slate-200 hover:bg-slate-300 active:bg-slate-400": !a,
                "bg-slate-400 text-white": "absent" === a,
                "bg-green-500 hover:bg-green-600 active:bg-green-700 text-white": "correct" === a,
                "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white": "present" === a
            });
            return (0,
            J.jsx)("button", {
                style: {
                    width: "".concat(r, "px"),
                    height: "58px"
                },
                className: i,
                onClick: function(e) {
                    o(s),
                    e.currentTarget.blur()
                },
                children: t || s
            })
        }, pe = function(t) {
            var a = t.onChar
              , n = t.onDelete
              , r = t.onEnter
              , s = function(e) {
                var t = {};
                return e.forEach((function(e) {
                    e.split("").forEach((function(e, a) {
                        return ne.includes(e) ? e === ne[a] ? t[e] = "correct" : "correct" !== t[e] ? t[e] = "present" : void 0 : t[e] = "absent"
                    }
                    ))
                }
                )),
                t
            }(t.guesses)
              , o = function(e) {
                "ENTER" === e ? r() : "DELETE" === e ? n() : a(e)
            };
            return (0,
            e.useEffect)((function() {
                var e = function(e) {
                    if ("Enter" === e.code)
                        r();
                    else if ("Backspace" === e.code)
                        n();
                    else {
                        var t = e.key.toUpperCase();
                        1 === t.length && t >= "A" && t <= "Z" && a(t)
                    }
                };
                return window.addEventListener("keyup", e),
                function() {
                    window.removeEventListener("keyup", e)
                }
            }
            ), [r, n, a]),
            (0,
            J.jsxs)("div", {
                children: [(0,
                J.jsxs)("div", {
                    className: "flex justify-center mb-1",
                    children: [(0,
                    J.jsx)(fe, {
                        value: "Q",
                        onClick: o,
                        status: s.Q
                    }), (0,
                    J.jsx)(fe, {
                        value: "W",
                        onClick: o,
                        status: s.W
                    }), (0,
                    J.jsx)(fe, {
                        value: "E",
                        onClick: o,
                        status: s.E
                    }), (0,
                    J.jsx)(fe, {
                        value: "R",
                        onClick: o,
                        status: s.R
                    }), (0,
                    J.jsx)(fe, {
                        value: "T",
                        onClick: o,
                        status: s.T
                    }), (0,
                    J.jsx)(fe, {
                        value: "Y",
                        onClick: o,
                        status: s.Y
                    }), (0,
                    J.jsx)(fe, {
                        value: "U",
                        onClick: o,
                        status: s.U
                    }), (0,
                    J.jsx)(fe, {
                        value: "I",
                        onClick: o,
                        status: s.I
                    }), (0,
                    J.jsx)(fe, {
                        value: "O",
                        onClick: o,
                        status: s.O
                    }), (0,
                    J.jsx)(fe, {
                        value: "P",
                        onClick: o,
                        status: s.P
                    })]
                }), (0,
                J.jsxs)("div", {
                    className: "flex justify-center mb-1",
                    children: [(0,
                    J.jsx)(fe, {
                        value: "A",
                        onClick: o,
                        status: s.A
                    }), (0,
                    J.jsx)(fe, {
                        value: "S",
                        onClick: o,
                        status: s.S
                    }), (0,
                    J.jsx)(fe, {
                        value: "D",
                        onClick: o,
                        status: s.D
                    }), (0,
                    J.jsx)(fe, {
                        value: "F",
                        onClick: o,
                        status: s.F
                    }), (0,
                    J.jsx)(fe, {
                        value: "G",
                        onClick: o,
                        status: s.G
                    }), (0,
                    J.jsx)(fe, {
                        value: "H",
                        onClick: o,
                        status: s.H
                    }), (0,
                    J.jsx)(fe, {
                        value: "J",
                        onClick: o,
                        status: s.J
                    }), (0,
                    J.jsx)(fe, {
                        value: "K",
                        onClick: o,
                        status: s.K
                    }), (0,
                    J.jsx)(fe, {
                        value: "L",
                        onClick: o,
                        status: s.L
                    })]
                }), (0,
                J.jsxs)("div", {
                    className: "flex justify-center",
                    children: [(0,
                    J.jsx)(fe, {
                        width: 65.4,
                        value: "ENTER",
                        onClick: o,
                        children: "Enter"
                    }), (0,
                    J.jsx)(fe, {
                        value: "Z",
                        onClick: o,
                        status: s.Z
                    }), (0,
                    J.jsx)(fe, {
                        value: "X",
                        onClick: o,
                        status: s.X
                    }), (0,
                    J.jsx)(fe, {
                        value: "C",
                        onClick: o,
                        status: s.C
                    }), (0,
                    J.jsx)(fe, {
                        value: "V",
                        onClick: o,
                        status: s.V
                    }), (0,
                    J.jsx)(fe, {
                        value: "B",
                        onClick: o,
                        status: s.B
                    }), (0,
                    J.jsx)(fe, {
                        value: "N",
                        onClick: o,
                        status: s.N
                    }), (0,
                    J.jsx)(fe, {
                        value: "M",
                        onClick: o,
                        status: s.M
                    }), (0,
                    J.jsx)(fe, {
                        width: 65.4,
                        value: "DELETE",
                        onClick: o,
                        children: "Delete"
                    })]
                })]
            })
        };
        function me() {
            for (var t = arguments.length, a = new Array(t), n = 0; n < t; n++)
                a[n] = arguments[n];
            var r = (0,
            e.useRef)(a);
            return (0,
            e.useEffect)((function() {
                r.current = a
            }
            ), [a]),
            (0,
            e.useCallback)((function(e) {
                for (var t, a = h(r.current); !(t = a()).done; ) {
                    var n = t.value;
                    null != n && ("function" === typeof n ? n(e) : n.current = e)
                }
            }
            ), [r])
        }
        function he(e) {
            for (var t, a, n = e.parentElement, r = null; n && !(n instanceof HTMLFieldSetElement); )
                n instanceof HTMLLegendElement && (r = n),
                n = n.parentElement;
            var s = null != (t = "" === (null == (a = n) ? void 0 : a.getAttribute("disabled"))) && t;
            return (!s || !function(e) {
                if (!e)
                    return !1;
                var t = e.previousElementSibling;
                for (; null !== t; ) {
                    if (t instanceof HTMLLegendElement)
                        return !1;
                    t = t.previousElementSibling
                }
                return !0
            }(r)) && s
        }
        function ye(t, a, n) {
            var r = (0,
            e.useRef)(a);
            r.current = a,
            (0,
            e.useEffect)((function() {
                function e(e) {
                    r.current.call(window, e)
                }
                return window.addEventListener(t, e, n),
                function() {
                    return window.removeEventListener(t, e, n)
                }
            }
            ), [t, n])
        }
        !function(e) {
            e.Space = " ",
            e.Enter = "Enter",
            e.Escape = "Escape",
            e.Backspace = "Backspace",
            e.ArrowLeft = "ArrowLeft",
            e.ArrowUp = "ArrowUp",
            e.ArrowRight = "ArrowRight",
            e.ArrowDown = "ArrowDown",
            e.Home = "Home",
            e.End = "End",
            e.PageUp = "PageUp",
            e.PageDown = "PageDown",
            e.Tab = "Tab"
        }(K || (K = {}));
        var ge, be, ve, ke, we, xe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((function(e) {
            return e + ":not([tabindex='-1'])"
        }
        )).join(",");
        function ze(e) {
            null == e || e.focus({
                preventScroll: !0
            })
        }
        function je(e, t) {
            var a = Array.isArray(e) ? e.slice().sort((function(e, t) {
                var a = e.compareDocumentPosition(t);
                return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
            }
            )) : function(e) {
                return void 0 === e && (e = document.body),
                null == e ? [] : Array.from(e.querySelectorAll(xe))
            }(e)
              , n = document.activeElement
              , r = function() {
                if (t & (ge.First | ge.Next))
                    return ve.Next;
                if (t & (ge.Previous | ge.Last))
                    return ve.Previous;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }()
              , s = function() {
                if (t & ge.First)
                    return 0;
                if (t & ge.Previous)
                    return Math.max(0, a.indexOf(n)) - 1;
                if (t & ge.Next)
                    return Math.max(0, a.indexOf(n)) + 1;
                if (t & ge.Last)
                    return a.length - 1;
                throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
            }()
              , o = t & ge.NoScroll ? {
                preventScroll: !0
            } : {}
              , i = 0
              , l = a.length
              , u = void 0;
            do {
                var c;
                if (i >= l || i + l <= 0)
                    return be.Error;
                var d = s + i;
                if (t & ge.WrapAround)
                    d = (d + l) % l;
                else {
                    if (d < 0)
                        return be.Underflow;
                    if (d >= l)
                        return be.Overflow
                }
                null == (c = u = a[d]) || c.focus(o),
                i += r
            } while (u !== document.activeElement);
            return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"),
            be.Success
        }
        function Se(t, a, n) {
            void 0 === a && (a = we.All);
            var r = void 0 === n ? {} : n
              , s = r.initialFocus
              , o = r.containers
              , i = (0,
            e.useRef)("undefined" !== typeof window ? document.activeElement : null)
              , l = (0,
            e.useRef)(null)
              , u = C()
              , c = Boolean(a & we.RestoreFocus)
              , d = Boolean(a & we.InitialFocus);
            (0,
            e.useEffect)((function() {
                c && (i.current = document.activeElement)
            }
            ), [c]),
            (0,
            e.useEffect)((function() {
                if (c)
                    return function() {
                        ze(i.current),
                        i.current = null
                    }
            }
            ), [c]),
            (0,
            e.useEffect)((function() {
                if (d && t.current) {
                    var e = document.activeElement;
                    if (null == s ? void 0 : s.current) {
                        if ((null == s ? void 0 : s.current) === e)
                            return void (l.current = e)
                    } else if (t.current.contains(e))
                        return void (l.current = e);
                    (null == s ? void 0 : s.current) ? ze(s.current) : je(t.current, ge.First) === be.Error && console.warn("There are no focusable elements inside the <FocusTrap />"),
                    l.current = document.activeElement
                }
            }
            ), [t, s, d]),
            ye("keydown", (function(e) {
                a & we.TabLock && t.current && e.key === K.Tab && (e.preventDefault(),
                je(t.current, (e.shiftKey ? ge.Previous : ge.Next) | ge.WrapAround) === be.Success && (l.current = document.activeElement))
            }
            )),
            ye("focus", (function(e) {
                if (a & we.FocusLock) {
                    var n = new Set(null == o ? void 0 : o.current);
                    if (n.add(t),
                    n.size) {
                        var r = l.current;
                        if (r && u.current) {
                            var s = e.target;
                            s && s instanceof HTMLElement ? !function(e, t) {
                                for (var a, n = h(e); !(a = n()).done; ) {
                                    var r;
                                    if (null == (r = a.value.current) ? void 0 : r.contains(t))
                                        return !0
                                }
                                return !1
                            }(n, s) ? (e.preventDefault(),
                            e.stopPropagation(),
                            ze(r)) : (l.current = s,
                            ze(s)) : ze(l.current)
                        }
                    }
                }
            }
            ), !0)
        }
        !function(e) {
            e[e.First = 1] = "First",
            e[e.Previous = 2] = "Previous",
            e[e.Next = 4] = "Next",
            e[e.Last = 8] = "Last",
            e[e.WrapAround = 16] = "WrapAround",
            e[e.NoScroll = 32] = "NoScroll"
        }(ge || (ge = {})),
        function(e) {
            e[e.Error = 0] = "Error",
            e[e.Overflow = 1] = "Overflow",
            e[e.Success = 2] = "Success",
            e[e.Underflow = 3] = "Underflow"
        }(be || (be = {})),
        function(e) {
            e[e.Previous = -1] = "Previous",
            e[e.Next = 1] = "Next"
        }(ve || (ve = {})),
        function(e) {
            e[e.Strict = 0] = "Strict",
            e[e.Loose = 1] = "Loose"
        }(ke || (ke = {})),
        function(e) {
            e[e.None = 1] = "None",
            e[e.InitialFocus = 2] = "InitialFocus",
            e[e.TabLock = 4] = "TabLock",
            e[e.FocusLock = 8] = "FocusLock",
            e[e.RestoreFocus = 16] = "RestoreFocus",
            e[e.All = 30] = "All"
        }(we || (we = {}));
        var Ee = new Set
          , Ce = new Map;
        function Te(e) {
            e.setAttribute("aria-hidden", "true"),
            e.inert = !0
        }
        function _e(e) {
            var t = Ce.get(e);
            t && (null === t["aria-hidden"] ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]),
            e.inert = t.inert)
        }
        var Pe = (0,
        e.createContext)(!1);
        function Oe(t) {
            return e.createElement(Pe.Provider, {
                value: t.force
            }, t.children)
        }
        function Ne() {
            var t = (0,
            e.useContext)(Pe)
              , a = (0,
            e.useContext)(Me)
              , n = (0,
            e.useState)((function() {
                if (!t && null !== a)
                    return null;
                if ("undefined" === typeof window)
                    return null;
                var e = document.getElementById("headlessui-portal-root");
                if (e)
                    return e;
                var n = document.createElement("div");
                return n.setAttribute("id", "headlessui-portal-root"),
                document.body.appendChild(n)
            }
            ))
              , r = n[0]
              , s = n[1];
            return (0,
            e.useEffect)((function() {
                null !== r && (document.body.contains(r) || document.body.appendChild(r))
            }
            ), [r]),
            (0,
            e.useEffect)((function() {
                t || null !== a && s(a.current)
            }
            ), [a, s, t]),
            r
        }
        var Le = e.Fragment;
        function De(a) {
            var n = a
              , r = Ne()
              , s = (0,
            e.useState)((function() {
                return "undefined" === typeof window ? null : document.createElement("div")
            }
            ))[0]
              , o = z();
            return w((function() {
                if (r && s)
                    return r.appendChild(s),
                    function() {
                        var e;
                        r && (s && (r.removeChild(s),
                        r.childNodes.length <= 0 && (null == (e = r.parentElement) || e.removeChild(r))))
                    }
            }
            ), [r, s]),
            o && r && s ? (0,
            t.createPortal)(g({
                props: n,
                defaultTag: Le,
                name: "Portal"
            }), s) : null
        }
        var Re = e.Fragment
          , Me = (0,
        e.createContext)(null);
        De.Group = function(t) {
            var a = t.target
              , n = p(t, ["target"]);
            return e.createElement(Me.Provider, {
                value: a
            }, g({
                props: n,
                defaultTag: Re,
                name: "Popover.Group"
            }))
        }
        ;
        var Fe = (0,
        e.createContext)(null);
        function Ie() {
            var t = (0,
            e.useContext)(Fe);
            if (null === t) {
                var a = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
                throw Error.captureStackTrace && Error.captureStackTrace(a, Ie),
                a
            }
            return t
        }
        var Ae, qe, Ue, He, Ve = (0,
        e.createContext)((function() {}
        ));
        function Be(t) {
            var a = t.children
              , n = t.onUpdate
              , r = t.type
              , s = t.element
              , o = (0,
            e.useContext)(Ve)
              , i = (0,
            e.useCallback)((function() {
                for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
                    t[a] = arguments[a];
                null == n || n.apply(void 0, t),
                o.apply(void 0, t)
            }
            ), [o, n]);
            return w((function() {
                return i(Ae.Add, r, s),
                function() {
                    return i(Ae.Remove, r, s)
                }
            }
            ), [i, r, s]),
            e.createElement(Ve.Provider, {
                value: i
            }, a)
        }
        Ve.displayName = "StackContext",
        function(e) {
            e[e.Add = 0] = "Add",
            e[e.Remove = 1] = "Remove"
        }(Ae || (Ae = {})),
        function(e) {
            e[e.Open = 0] = "Open",
            e[e.Closed = 1] = "Closed"
        }(Ue || (Ue = {})),
        function(e) {
            e[e.SetTitleId = 0] = "SetTitleId"
        }(He || (He = {}));
        var We = ((qe = {})[He.SetTitleId] = function(e, t) {
            return e.titleId === t.id ? e : f({}, e, {
                titleId: t.id
            })
        }
        ,
        qe)
          , $e = (0,
        e.createContext)(null);
        function Qe(t) {
            var a = (0,
            e.useContext)($e);
            if (null === a) {
                var n = new Error("<" + t + " /> is missing a parent <" + Je.displayName + " /> component.");
                throw Error.captureStackTrace && Error.captureStackTrace(n, Qe),
                n
            }
            return a
        }
        function Ye(e, t) {
            return y(t.type, We, e, t)
        }
        $e.displayName = "DialogContext";
        var Ke = c.RenderStrategy | c.Static
          , Ge = v((function(t, a) {
            var n, r = t.open, s = t.onClose, o = t.initialFocus, i = p(t, ["open", "onClose", "initialFocus"]), l = (0,
            e.useState)(0), u = l[0], c = l[1], d = O();
            void 0 === r && null !== d && (r = y(d, ((n = {})[T.Open] = !0,
            n[T.Closed] = !1,
            n)));
            var m = (0,
            e.useRef)(new Set)
              , b = (0,
            e.useRef)(null)
              , v = me(b, a)
              , k = t.hasOwnProperty("open") || null !== d
              , x = t.hasOwnProperty("onClose");
            if (!k && !x)
                throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
            if (!k)
                throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
            if (!x)
                throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
            if ("boolean" !== typeof r)
                throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: " + r);
            if ("function" !== typeof s)
                throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: " + s);
            var j = r ? Ue.Open : Ue.Closed
              , S = null !== d ? d === T.Open : j === Ue.Open
              , C = (0,
            e.useReducer)(Ye, {
                titleId: null,
                descriptionId: null
            })
              , _ = C[0]
              , P = C[1]
              , N = (0,
            e.useCallback)((function() {
                return s(!1)
            }
            ), [s])
              , L = (0,
            e.useCallback)((function(e) {
                return P({
                    type: He.SetTitleId,
                    id: e
                })
            }
            ), [P])
              , D = z() && j === Ue.Open
              , R = u > 1
              , M = null !== (0,
            e.useContext)($e);
            Se(b, D ? y(R ? "parent" : "leaf", {
                parent: we.RestoreFocus,
                leaf: we.All
            }) : we.None, {
                initialFocus: o,
                containers: m
            }),
            function(e, t) {
                void 0 === t && (t = !0),
                w((function() {
                    if (t && e.current) {
                        var a = e.current;
                        Ee.add(a);
                        for (var n, r = h(Ce.keys()); !(n = r()).done; ) {
                            var s = n.value;
                            s.contains(a) && (_e(s),
                            Ce.delete(s))
                        }
                        return document.querySelectorAll("body > *").forEach((function(e) {
                            if (e instanceof HTMLElement) {
                                for (var t, a = h(Ee); !(t = a()).done; ) {
                                    var n = t.value;
                                    if (e.contains(n))
                                        return
                                }
                                1 === Ee.size && (Ce.set(e, {
                                    "aria-hidden": e.getAttribute("aria-hidden"),
                                    inert: e.inert
                                }),
                                Te(e))
                            }
                        }
                        )),
                        function() {
                            if (Ee.delete(a),
                            Ee.size > 0)
                                document.querySelectorAll("body > *").forEach((function(e) {
                                    if (e instanceof HTMLElement && !Ce.has(e)) {
                                        for (var t, a = h(Ee); !(t = a()).done; ) {
                                            var n = t.value;
                                            if (e.contains(n))
                                                return
                                        }
                                        Ce.set(e, {
                                            "aria-hidden": e.getAttribute("aria-hidden"),
                                            inert: e.inert
                                        }),
                                        Te(e)
                                    }
                                }
                                ));
                            else
                                for (var e, t = h(Ce.keys()); !(e = t()).done; ) {
                                    var n = e.value;
                                    _e(n),
                                    Ce.delete(n)
                                }
                        }
                    }
                }
                ), [t])
            }(b, !!R && D),
            ye("mousedown", (function(e) {
                var t, a = e.target;
                j === Ue.Open && (R || (null == (t = b.current) ? void 0 : t.contains(a)) || N())
            }
            )),
            ye("keydown", (function(e) {
                e.key === K.Escape && j === Ue.Open && (R || (e.preventDefault(),
                e.stopPropagation(),
                N()))
            }
            )),
            (0,
            e.useEffect)((function() {
                if (j === Ue.Open && !M) {
                    var e = document.documentElement.style.overflow
                      , t = document.documentElement.style.paddingRight
                      , a = window.innerWidth - document.documentElement.clientWidth;
                    return document.documentElement.style.overflow = "hidden",
                    document.documentElement.style.paddingRight = a + "px",
                    function() {
                        document.documentElement.style.overflow = e,
                        document.documentElement.style.paddingRight = t
                    }
                }
            }
            ), [j, M]),
            (0,
            e.useEffect)((function() {
                if (j === Ue.Open && b.current) {
                    var e = new IntersectionObserver((function(e) {
                        for (var t, a = h(e); !(t = a()).done; ) {
                            var n = t.value;
                            0 === n.boundingClientRect.x && 0 === n.boundingClientRect.y && 0 === n.boundingClientRect.width && 0 === n.boundingClientRect.height && N()
                        }
                    }
                    ));
                    return e.observe(b.current),
                    function() {
                        return e.disconnect()
                    }
                }
            }
            ), [j, b, N]);
            var F = function() {
                var t = (0,
                e.useState)([])
                  , a = t[0]
                  , n = t[1];
                return [a.length > 0 ? a.join(" ") : void 0, (0,
                e.useMemo)((function() {
                    return function(t) {
                        var a = (0,
                        e.useCallback)((function(e) {
                            return n((function(t) {
                                return [].concat(t, [e])
                            }
                            )),
                            function() {
                                return n((function(t) {
                                    var a = t.slice()
                                      , n = a.indexOf(e);
                                    return -1 !== n && a.splice(n, 1),
                                    a
                                }
                                ))
                            }
                        }
                        ), [])
                          , r = (0,
                        e.useMemo)((function() {
                            return {
                                register: a,
                                slot: t.slot,
                                name: t.name,
                                props: t.props
                            }
                        }
                        ), [a, t.slot, t.name, t.props]);
                        return e.createElement(Fe.Provider, {
                            value: r
                        }, t.children)
                    }
                }
                ), [n])]
            }()
              , I = F[0]
              , A = F[1]
              , q = "headlessui-dialog-" + E()
              , U = (0,
            e.useMemo)((function() {
                return [{
                    dialogState: j,
                    close: N,
                    setTitleId: L
                }, _]
            }
            ), [j, _, N, L])
              , H = (0,
            e.useMemo)((function() {
                return {
                    open: j === Ue.Open
                }
            }
            ), [j])
              , V = {
                ref: v,
                id: q,
                role: "dialog",
                "aria-modal": j === Ue.Open || void 0,
                "aria-labelledby": _.titleId,
                "aria-describedby": I,
                onClick: function(e) {
                    e.stopPropagation()
                }
            }
              , B = i;
            return e.createElement(Be, {
                type: "Dialog",
                element: b,
                onUpdate: (0,
                e.useCallback)((function(e, t, a) {
                    var n;
                    "Dialog" === t && y(e, ((n = {})[Ae.Add] = function() {
                        m.current.add(a),
                        c((function(e) {
                            return e + 1
                        }
                        ))
                    }
                    ,
                    n[Ae.Remove] = function() {
                        m.current.add(a),
                        c((function(e) {
                            return e - 1
                        }
                        ))
                    }
                    ,
                    n))
                }
                ), [])
            }, e.createElement(Oe, {
                force: !0
            }, e.createElement(De, null, e.createElement($e.Provider, {
                value: U
            }, e.createElement(De.Group, {
                target: b
            }, e.createElement(Oe, {
                force: !1
            }, e.createElement(A, {
                slot: H,
                name: "Dialog.Description"
            }, g({
                props: f({}, B, V),
                slot: H,
                defaultTag: "div",
                features: Ke,
                visible: S,
                name: "Dialog"
            }))))))))
        }
        ))
          , Xe = v((function t(a, n) {
            var r = Qe([Je.displayName, t.name].join("."))[0]
              , s = r.dialogState
              , o = r.close
              , i = me(n)
              , l = "headlessui-dialog-overlay-" + E()
              , u = (0,
            e.useCallback)((function(e) {
                if (e.target === e.currentTarget) {
                    if (he(e.currentTarget))
                        return e.preventDefault();
                    e.preventDefault(),
                    e.stopPropagation(),
                    o()
                }
            }
            ), [o])
              , c = (0,
            e.useMemo)((function() {
                return {
                    open: s === Ue.Open
                }
            }
            ), [s]);
            return g({
                props: f({}, a, {
                    ref: i,
                    id: l,
                    "aria-hidden": !0,
                    onClick: u
                }),
                slot: c,
                defaultTag: "div",
                name: "Dialog.Overlay"
            })
        }
        ));
        var Je = Object.assign(Ge, {
            Overlay: Xe,
            Title: function t(a) {
                var n = Qe([Je.displayName, t.name].join("."))[0]
                  , r = n.dialogState
                  , s = n.setTitleId
                  , o = "headlessui-dialog-title-" + E();
                (0,
                e.useEffect)((function() {
                    return s(o),
                    function() {
                        return s(null)
                    }
                }
                ), [o, s]);
                var i = (0,
                e.useMemo)((function() {
                    return {
                        open: r === Ue.Open
                    }
                }
                ), [r]);
                return g({
                    props: f({}, a, {
                        id: o
                    }),
                    slot: i,
                    defaultTag: "h2",
                    name: "Dialog.Title"
                })
            },
            Description: function(e) {
                var t = Ie()
                  , a = "headlessui-description-" + E();
                w((function() {
                    return t.register(a)
                }
                ), [a, t.register]);
                var n = e
                  , r = f({}, t.props, {
                    id: a
                });
                return g({
                    props: f({}, n, r),
                    slot: t.slot || {},
                    defaultTag: "p",
                    name: t.name || "Description"
                })
            }
        })
          , Ze = function(t) {
            var a = t.title
              , n = t.children
              , r = t.isOpen
              , s = t.handleClose;
            return (0,
            J.jsx)(Y.Root, {
                show: r,
                as: e.Fragment,
                children: (0,
                J.jsx)(Je, {
                    as: "div",
                    className: "fixed z-10 inset-0 overflow-y-auto",
                    onClose: s,
                    children: (0,
                    J.jsxs)("div", {
                        className: "flex items-center justify-center min-h-screen py-10 px-4 text-center sm:block sm:p-0",
                        children: [(0,
                        J.jsx)(Y.Child, {
                            as: e.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: (0,
                            J.jsx)(Je.Overlay, {
                                className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }), (0,
                        J.jsx)("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "\u200b"
                        }), (0,
                        J.jsx)(Y.Child, {
                            as: e.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            enterTo: "opacity-100 translate-y-0 sm:scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                            leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                            children: (0,
                            J.jsxs)("div", {
                                className: "inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6",
                                children: [(0,
                                J.jsx)("div", {
                                    className: "absolute right-4 top-4",
                                    children: (0,
                                    J.jsx)(u, {
                                        className: "h-6 w-6 cursor-pointer",
                                        onClick: function() {
                                            return s()
                                        }
                                    })
                                }), (0,
                                J.jsx)("div", {
                                    children: (0,
                                    J.jsxs)("div", {
                                        className: "text-center",
                                        children: [(0,
                                        J.jsx)(Je.Title, {
                                            as: "h3",
                                            className: "text-lg leading-6 font-medium text-gray-900",
                                            children: a
                                        }), (0,
                                        J.jsx)("div", {
                                            className: "mt-2",
                                            children: n
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                })
            })
        }
          , et = function(e) {
            var t = e.isOpen
              , a = e.handleClose;
            return (0,
            J.jsx)(Ze, {
                title: "About",
                isOpen: t,
                handleClose: a,
                children: (0,
                J.jsxs)("p", {
                    className: "text-sm text-gray-500",
                    children: ["This is a Taylor Swift-themed clone of the game Wordle created by the super talented ", (0,
                    J.jsx)("a", {
                        href: "https://www.hannahmariepark.com/",
                        className: "underline font-bold",
                        children: "Hannah Park"
                    }), " and slightly modified by Holy Swift Podcast -", " ", (0,
                    J.jsx)("a", {
                        href: "https://github.com/hannahcode/wordle",
                        className: "underline font-bold",
                        children: "check out Hannah's code"
                    }), " ", "or", " ", (0,
                    J.jsx)("a", {
                        href: "https://www.powerlanguage.co.uk/wordle/",
                        className: "underline font-bold",
                        children: "play the original here."
                    })]
                })
            })
        }
          , tt = function(e) {
            var t = e.isOpen
              , a = e.handleClose;
            return (0,
            J.jsxs)(Ze, {
                title: "How to play",
                isOpen: t,
                handleClose: a,
                children: [(0,
                J.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: "Guess the POPDLE in 6 tries. After each guess, the color of the tiles will change to show how close your guess was to the word."
                }), (0,
                J.jsxs)("div", {
                    className: "flex justify-center mb-1 mt-4",
                    children: [(0,
                    J.jsx)(ie, {
                        value: "S",
                        status: "correct"
                    }), (0,
                    J.jsx)(ie, {
                        value: "W"
                    }), (0,
                    J.jsx)(ie, {
                        value: "I"
                    }), (0,
                    J.jsx)(ie, {
                        value: "F"
                    }), (0,
                    J.jsx)(ie, {
                        value: "T"
                    })]
                }), (0,
                J.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: "The letter S is in the word and in the correct spot."
                }), (0,
                J.jsxs)("div", {
                    className: "flex justify-center mb-1 mt-4",
                    children: [(0,
                    J.jsx)(ie, {
                        value: "S"
                    }), (0,
                    J.jsx)(ie, {
                        value: "N"
                    }), (0,
                    J.jsx)(ie, {
                        value: "A",
                        status: "present"
                    }), (0,
                    J.jsx)(ie, {
                        value: "K"
                    }), (0,
                    J.jsx)(ie, {
                        value: "E"
                    })]
                }), (0,
                J.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: "The letter A is in the word but in the wrong spot."
                }), (0,
                J.jsxs)("div", {
                    className: "flex justify-center mb-1 mt-4",
                    children: [(0,
                    J.jsx)(ie, {
                        value: "A"
                    }), (0,
                    J.jsx)(ie, {
                        value: "L"
                    }), (0,
                    J.jsx)(ie, {
                        value: "B"
                    }), (0,
                    J.jsx)(ie, {
                        value: "U",
                        status: "absent"
                    }), (0,
                    J.jsx)(ie, {
                        value: "M"
                    })]
                }), (0,
                J.jsx)("p", {
                    className: "text-sm text-gray-500",
                    children: "The letter U is not in the word in any spot."
                })]
            })
        }
          , at = a(7);
        function nt(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function rt(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value"in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        function st(e, t, a) {
            return t && rt(e.prototype, t),
            a && rt(e, a),
            e
        }
        function ot(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            t && lt(e, t)
        }
        function it(e) {
            return it = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            ,
            it(e)
        }
        function lt(e, t) {
            return lt = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            ,
            lt(e, t)
        }
        function ut(e, t) {
            return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(e) : t
        }
        function ct(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var a, n = it(e);
                if (t) {
                    var r = it(this).constructor;
                    a = Reflect.construct(n, arguments, r)
                } else
                    a = n.apply(this, arguments);
                return ut(this, a)
            }
        }
        function dt(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ft(e)
            }(e) || function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" === typeof e)
                    return ft(e, t);
                var a = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === a && e.constructor && (a = e.constructor.name);
                if ("Map" === a || "Set" === a)
                    return Array.from(e);
                if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                    return ft(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ft(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var a = 0, n = new Array(t); a < t; a++)
                n[a] = e[a];
            return n
        }
        function pt(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
              , a = String(e);
            if (0 === t)
                return a;
            var n = a.match(/(.*?)([0-9]+)(.*)/)
              , r = n ? n[1] : ""
              , s = n ? n[3] : ""
              , o = n ? n[2] : a
              , i = o.length >= t ? o : (dt(Array(t)).map((function() {
                return "0"
            }
            )).join("") + o).slice(-1 * t);
            return "".concat(r).concat(i).concat(s)
        }
        var mt = {
            daysInHours: !1,
            zeroPadTime: 2
        };
        function ht(e, t) {
            var a = e.days
              , n = e.hours
              , r = e.minutes
              , s = e.seconds
              , o = Object.assign(Object.assign({}, mt), t)
              , i = o.daysInHours
              , l = o.zeroPadTime
              , u = o.zeroPadDays
              , c = void 0 === u ? l : u
              , d = Math.min(2, l)
              , f = i ? pt(n + 24 * a, l) : pt(n, d);
            return {
                days: i ? "" : pt(a, c),
                hours: f,
                minutes: pt(r, d),
                seconds: pt(s, d)
            }
        }
        var yt = function(t) {
            ot(n, t);
            var a = ct(n);
            function n() {
                var e;
                return nt(this, n),
                (e = a.apply(this, arguments)).state = {
                    count: e.props.count || 3
                },
                e.startCountdown = function() {
                    e.interval = window.setInterval((function() {
                        0 === e.state.count - 1 ? (e.stopCountdown(),
                        e.props.onComplete && e.props.onComplete()) : e.setState((function(e) {
                            return {
                                count: e.count - 1
                            }
                        }
                        ))
                    }
                    ), 1e3)
                }
                ,
                e.stopCountdown = function() {
                    clearInterval(e.interval)
                }
                ,
                e.addTime = function(t) {
                    e.stopCountdown(),
                    e.setState((function(e) {
                        return {
                            count: e.count + t
                        }
                    }
                    ), e.startCountdown)
                }
                ,
                e
            }
            return st(n, [{
                key: "componentDidMount",
                value: function() {
                    this.startCountdown()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    clearInterval(this.interval)
                }
            }, {
                key: "render",
                value: function() {
                    return this.props.children ? (0,
                    e.cloneElement)(this.props.children, {
                        count: this.state.count
                    }) : null
                }
            }]),
            n
        }(e.Component);
        yt.propTypes = {
            count: at.number,
            children: at.element,
            onComplete: at.func
        };
        var gt = function(t) {
            ot(n, t);
            var a = ct(n);
            function n(t) {
                var r;
                if (nt(this, n),
                (r = a.call(this, t)).mounted = !1,
                r.initialTimestamp = r.calcOffsetStartTimestamp(),
                r.offsetStartTimestamp = r.props.autoStart ? 0 : r.initialTimestamp,
                r.offsetTime = 0,
                r.legacyMode = !1,
                r.legacyCountdownRef = (0,
                e.createRef)(),
                r.tick = function() {
                    var e = r.calcTimeDelta()
                      , t = e.completed && !r.props.overtime ? void 0 : r.props.onTick;
                    r.setTimeDeltaState(e, void 0, t)
                }
                ,
                r.start = function() {
                    if (!r.isStarted()) {
                        var e = r.offsetStartTimestamp;
                        r.offsetStartTimestamp = 0,
                        r.offsetTime += e ? r.calcOffsetStartTimestamp() - e : 0;
                        var t = r.calcTimeDelta();
                        r.setTimeDeltaState(t, "STARTED", r.props.onStart),
                        r.props.controlled || t.completed && !r.props.overtime || (r.clearTimer(),
                        r.interval = window.setInterval(r.tick, r.props.intervalDelay))
                    }
                }
                ,
                r.pause = function() {
                    r.isPaused() || (r.clearTimer(),
                    r.offsetStartTimestamp = r.calcOffsetStartTimestamp(),
                    r.setTimeDeltaState(r.state.timeDelta, "PAUSED", r.props.onPause))
                }
                ,
                r.stop = function() {
                    r.isStopped() || (r.clearTimer(),
                    r.offsetStartTimestamp = r.calcOffsetStartTimestamp(),
                    r.offsetTime = r.offsetStartTimestamp - r.initialTimestamp,
                    r.setTimeDeltaState(r.calcTimeDelta(), "STOPPED", r.props.onStop))
                }
                ,
                r.isStarted = function() {
                    return r.isStatus("STARTED")
                }
                ,
                r.isPaused = function() {
                    return r.isStatus("PAUSED")
                }
                ,
                r.isStopped = function() {
                    return r.isStatus("STOPPED")
                }
                ,
                r.isCompleted = function() {
                    return r.isStatus("COMPLETED")
                }
                ,
                r.handleOnComplete = function(e) {
                    r.props.onComplete && r.props.onComplete(e)
                }
                ,
                t.date) {
                    var s = r.calcTimeDelta();
                    r.state = {
                        timeDelta: s,
                        status: s.completed ? "COMPLETED" : "STOPPED"
                    }
                } else
                    r.legacyMode = !0;
                return r
            }
            return st(n, [{
                key: "componentDidMount",
                value: function() {
                    this.legacyMode || (this.mounted = !0,
                    this.props.onMount && this.props.onMount(this.calcTimeDelta()),
                    this.props.autoStart && this.start())
                }
            }, {
                key: "componentDidUpdate",
                value: function(e) {
                    this.legacyMode || this.props.date !== e.date && (this.initialTimestamp = this.calcOffsetStartTimestamp(),
                    this.offsetStartTimestamp = this.initialTimestamp,
                    this.offsetTime = 0,
                    this.setTimeDeltaState(this.calcTimeDelta()))
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.legacyMode || (this.mounted = !1,
                    this.clearTimer())
                }
            }, {
                key: "calcTimeDelta",
                value: function() {
                    var e = this.props
                      , t = e.date
                      , a = e.now
                      , n = e.precision
                      , r = e.controlled
                      , s = e.overtime;
                    return function(e) {
                        var t, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = a.now, r = void 0 === n ? Date.now : n, s = a.precision, o = void 0 === s ? 0 : s, i = a.controlled, l = a.offsetTime, u = void 0 === l ? 0 : l, c = a.overtime;
                        t = "string" === typeof e ? new Date(e).getTime() : e instanceof Date ? e.getTime() : e,
                        i || (t += u);
                        var d = i ? t : t - r()
                          , f = Math.min(20, Math.max(0, o))
                          , p = Math.round(1e3 * parseFloat(((c ? d : Math.max(0, d)) / 1e3).toFixed(f)))
                          , m = Math.abs(p) / 1e3;
                        return {
                            total: p,
                            days: Math.floor(m / 86400),
                            hours: Math.floor(m / 3600 % 24),
                            minutes: Math.floor(m / 60 % 60),
                            seconds: Math.floor(m % 60),
                            milliseconds: Number((m % 1 * 1e3).toFixed()),
                            completed: p <= 0
                        }
                    }(t, {
                        now: a,
                        precision: n,
                        controlled: r,
                        offsetTime: this.offsetTime,
                        overtime: s
                    })
                }
            }, {
                key: "calcOffsetStartTimestamp",
                value: function() {
                    return Date.now()
                }
            }, {
                key: "addTime",
                value: function(e) {
                    this.legacyCountdownRef.current.addTime(e)
                }
            }, {
                key: "clearTimer",
                value: function() {
                    window.clearInterval(this.interval)
                }
            }, {
                key: "isStatus",
                value: function(e) {
                    return this.state.status === e
                }
            }, {
                key: "setTimeDeltaState",
                value: function(e, t, a) {
                    var n = this;
                    if (this.mounted) {
                        var r;
                        !this.state.timeDelta.completed && e.completed && (this.props.overtime || this.clearTimer(),
                        r = this.handleOnComplete);
                        return this.setState((function(a) {
                            var r = t || a.status;
                            return e.completed && !n.props.overtime ? r = "COMPLETED" : t || "COMPLETED" !== r || (r = "STOPPED"),
                            {
                                timeDelta: e,
                                status: r
                            }
                        }
                        ), (function() {
                            a && a(n.state.timeDelta),
                            r && r(n.state.timeDelta)
                        }
                        ))
                    }
                }
            }, {
                key: "getApi",
                value: function() {
                    return this.api = this.api || {
                        start: this.start,
                        pause: this.pause,
                        stop: this.stop,
                        isStarted: this.isStarted,
                        isPaused: this.isPaused,
                        isStopped: this.isStopped,
                        isCompleted: this.isCompleted
                    }
                }
            }, {
                key: "getRenderProps",
                value: function() {
                    var e = this.props
                      , t = e.daysInHours
                      , a = e.zeroPadTime
                      , n = e.zeroPadDays
                      , r = this.state.timeDelta;
                    return Object.assign(Object.assign({}, r), {
                        api: this.getApi(),
                        props: this.props,
                        formatted: ht(r, {
                            daysInHours: t,
                            zeroPadTime: a,
                            zeroPadDays: n
                        })
                    })
                }
            }, {
                key: "render",
                value: function() {
                    if (this.legacyMode) {
                        var t = this.props
                          , a = t.count
                          , n = t.children
                          , r = t.onComplete;
                        return (0,
                        e.createElement)(yt, {
                            ref: this.legacyCountdownRef,
                            count: a,
                            onComplete: r
                        }, n)
                    }
                    var s = this.props
                      , o = s.className
                      , i = s.overtime
                      , l = s.children
                      , u = s.renderer
                      , c = this.getRenderProps();
                    if (u)
                        return u(c);
                    if (l && this.state.timeDelta.completed && !i)
                        return (0,
                        e.cloneElement)(l, {
                            countdown: c
                        });
                    var d = c.formatted
                      , f = d.days
                      , p = d.hours
                      , m = d.minutes
                      , h = d.seconds;
                    return (0,
                    e.createElement)("span", {
                        className: o
                    }, c.total < 0 ? "-" : "", f, f ? ":" : "", p, ":", m, ":", h)
                }
            }]),
            n
        }(e.Component);
        gt.defaultProps = Object.assign(Object.assign({}, mt), {
            controlled: !1,
            intervalDelay: 1e3,
            precision: 0,
            autoStart: !0
        }),
        gt.propTypes = {
            date: (0,
            at.oneOfType)([(0,
            at.instanceOf)(Date), at.string, at.number]),
            daysInHours: at.bool,
            zeroPadTime: at.number,
            zeroPadDays: at.number,
            controlled: at.bool,
            intervalDelay: at.number,
            precision: at.number,
            autoStart: at.bool,
            overtime: at.bool,
            className: at.string,
            children: at.element,
            renderer: at.func,
            now: at.func,
            onMount: at.func,
            onStart: at.func,
            onPause: at.func,
            onStop: at.func,
            onTick: at.func,
            onComplete: at.func
        };
        var bt = gt
          , vt = function(e) {
            var t = e.label
              , a = e.value;
            return (0,
            J.jsxs)("div", {
                className: "items-center justify-center m-1 w-1/4",
                children: [(0,
                J.jsx)("div", {
                    className: "text-3xl font-bold",
                    children: a
                }), (0,
                J.jsx)("div", {
                    className: "text-xs",
                    children: t
                })]
            })
        }
          , kt = function(e) {
            var t = e.gameStats;
            return (0,
            J.jsxs)("div", {
                className: "flex justify-center my-2",
                children: [(0,
                J.jsx)(vt, {
                    label: "Total tries",
                    value: t.totalGames
                }), (0,
                J.jsx)(vt, {
                    label: "Success rate",
                    value: "".concat(t.successRate, "%")
                }), (0,
                J.jsx)(vt, {
                    label: "Current streak",
                    value: t.currentStreak
                }), (0,
                J.jsx)(vt, {
                    label: "Best streak",
                    value: t.bestStreak
                })]
            })
        }
          , wt = function(e) {
            var t = e.index
              , a = e.size
              , n = e.label;
            return (0,
            J.jsxs)("div", {
                className: "flex justify-left m-1",
                children: [(0,
                J.jsx)("div", {
                    className: "items-center justify-center w-2",
                    children: t + 1
                }), (0,
                J.jsx)("div", {
                    className: "rounded-full w-full ml-2",
                    children: (0,
                    J.jsx)("div", {
                        style: {
                            width: "".concat(5 + a, "%")
                        },
                        className: "bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 rounded-l-full",
                        children: n
                    })
                })]
            })
        }
          , xt = function(e) {
            var t = e.gameStats.winDistribution
              , a = Math.max.apply(Math, s(t));
            return (0,
            J.jsx)("div", {
                className: "columns-1 justify-left m-2 text-sm",
                children: t.map((function(e, t) {
                    return (0,
                    J.jsx)(wt, {
                        index: t,
                        size: e / a * 90,
                        label: String(e)
                    }, t)
                }
                ))
            })
        }
          , zt = function(e) {
            return e.map((function(e) {
                var t = oe(e);
                return e.split("").map((function(e, a) {
                    switch (t[a]) {
                    case "correct":
                        return "\ud83d\udfe9";
                    case "present":
                        return "\ud83d\udfe8";
                    default:
                        return "\u2b1c"
                    }
                }
                )).join("")
            }
            )).join("\n")
        }
          , jt = function(e) {
            var t = e.isOpen
              , a = e.handleClose
              , n = e.guesses
              , r = e.gameStats
              , s = e.isGameLost
              , o = e.isGameWon
              , i = e.handleShare;
            return r.totalGames <= 0 ? (0,
            J.jsx)(Ze, {
                title: "Statistics",
                isOpen: t,
                handleClose: a,
                children: (0,
                J.jsx)(kt, {
                    gameStats: r
                })
            }) : (0,
            J.jsxs)(Ze, {
                title: "Statistics",
                isOpen: t,
                handleClose: a,
                children: [(0,
                J.jsx)(kt, {
                    gameStats: r
                }), (0,
                J.jsx)("h4", {
                    className: "text-lg leading-6 font-medium text-gray-900",
                    children: "Guess Distribution"
                }), (0,
                J.jsx)(xt, {
                    gameStats: r
                }), (s || o) && (0,
                J.jsxs)("div", {
                    className: "mt-5 sm:mt-6 columns-2",
                    children: [(0,
                    J.jsxs)("div", {
                        children: [(0,
                        J.jsx)("h5", {
                            children: "New word in"
                        }), (0,
                        J.jsx)(bt, {
                            className: "text-lg font-medium text-gray-900",
                            date: se,
                            daysInHours: !0
                        })]
                    }), (0,
                    J.jsx)("button", {
                        type: "button",
                        className: "mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm",
                        onClick: function() {
                            !function(e, t) {
                                navigator.clipboard.writeText("Popdle ".concat(re, " ").concat(t ? "X" : e.length, "/6\n\n") + zt(e))
                            }(n, s),
                            i()
                        },
                        children: "Share"
                    })]
                })]
            })
        }
          , St = ["Great Job!", "Awesome", "Well done!"];
        function Et(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a,
            e
        }
        function Ct(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        var Tt = "gameState"
          , _t = "gameStats"
          , Pt = function(e, t) {
            var a = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ct(Object(a), !0).forEach((function(t) {
                        Et(e, t, a[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Ct(Object(a)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                    }
                    ))
                }
                return e
            }({}, e);
            return a.totalGames += 1,
            t > 5 ? (a.currentStreak = 0,
            a.gamesFailed += 1) : (a.winDistribution[t] += 1,
            a.currentStreak += 1,
            a.bestStreak < a.currentStreak && (a.bestStreak = a.currentStreak)),
            a.successRate = Lt(a),
            function(e) {
                localStorage.setItem(_t, JSON.stringify(e))
            }(a),
            a
        }
          , Ot = {
            winDistribution: [0, 0, 0, 0, 0, 0],
            gamesFailed: 0,
            currentStreak: 0,
            bestStreak: 0,
            totalGames: 0,
            successRate: 0
        }
          , Nt = function() {
            return function() {
                var e = localStorage.getItem(_t);
                return e ? JSON.parse(e) : null
            }() || Ot
        }
          , Lt = function(e) {
            var t = e.totalGames
              , a = e.gamesFailed;
            return Math.round(100 * (t - a) / Math.max(t, 1))
        }
          , Dt = 2e3;
        var Rt = function() {
            var t = o((0,
            e.useState)(""), 2)
              , a = t[0]
              , n = t[1]
              , r = o((0,
            e.useState)(!1), 2)
              , u = r[0]
              , c = r[1]
              , d = o((0,
            e.useState)(!1), 2)
              , f = d[0]
              , p = d[1]
              , m = o((0,
            e.useState)(!1), 2)
              , h = m[0]
              , y = m[1]
              , g = o((0,
            e.useState)(!1), 2)
              , b = g[0]
              , v = g[1]
              , k = o((0,
            e.useState)(!1), 2)
              , w = k[0]
              , x = k[1]
              , z = o((0,
            e.useState)(!1), 2)
              , j = z[0]
              , S = z[1]
              , E = o((0,
            e.useState)(!1), 2)
              , C = E[0]
              , T = E[1]
              , _ = o((0,
            e.useState)(""), 2)
              , P = _[0]
              , O = _[1]
              , N = (0,
            e.useState)((function() {
                var e = function() {
                    var e = localStorage.getItem(Tt);
                    return e ? JSON.parse(e) : null
                }();
                if ((null === e || void 0 === e ? void 0 : e.solution) !== ne)
                    return [];
                var t = e.guesses.includes(ne);
                return t && c(!0),
                6 !== e.guesses.length || t || T(!0),
                e.guesses
            }
            ))
              , L = o(N, 2)
              , D = L[0]
              , R = L[1]
              , M = o((0,
            e.useState)((function() {
                return Nt()
            }
            )), 2)
              , F = M[0]
              , I = M[1];
            return (0,
            e.useEffect)((function() {
                var e;
                e = {
                    guesses: D,
                    solution: ne
                },
                localStorage.setItem(Tt, JSON.stringify(e))
            }
            ), [D]),
            (0,
            e.useEffect)((function() {
                u && (O(St[Math.floor(Math.random() * St.length)]),
                setTimeout((function() {
                    O(""),
                    x(!0)
                }
                ), Dt)),
                C && setTimeout((function() {
                    x(!0)
                }
                ), Dt)
            }
            ), [u, C]),
            (0,
            J.jsxs)(J.Fragment, {
                children: [(0,
                J.jsxs)("div", {
                    className: "w-full top-0 py-3 px-3 text-center text-white bg-violet-900",
                    children: ["Brought to you by ", (0,
                    J.jsx)("a", {
                        className: "underline font-bold",
                        href: "https://www.instagram.com/internetgirlspod/",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Internet Girls Podcast"
                    }), ". Listen today on ", (0,
                    J.jsx)("a", {
                        className: "underline font-bold",
                        href: "https://podcasts.apple.com/us/podcast/internet-girls/id1535755952",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Apple Podcasts"
                    }), " and ", (0,
                    J.jsx)("a", {
                        className: "underline font-bold",
                        href: "https://open.spotify.com/show/4f3u7WbAa9dFjTwAFZftoW?si=98784291d07b4de8",
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Spotify"
                    }), "!"]
                }), (0,
                J.jsxs)("div", {
                    className: "py-8 max-w-7xl mx-auto sm:px-6 lg:px-8",
                    children: [(0,
                    J.jsxs)("div", {
                        className: "flex w-80 mx-auto items-center mb-8",
                        children: [(0,
                        J.jsx)("h1", {
                            className: "text-xl grow font-bold",
                            children: "Popdle"
                        }), (0,
                        J.jsx)(l, {
                            className: "h-6 w-6 cursor-pointer",
                            onClick: function() {
                                return p(!0)
                            }
                        }), (0,
                        J.jsx)(i, {
                            className: "h-6 w-6 cursor-pointer",
                            onClick: function() {
                                return x(!0)
                            }
                        })]
                    }), (0,
                    J.jsx)(de, {
                        guesses: D,
                        currentGuess: a
                    }), (0,
                    J.jsx)(pe, {
                        onChar: function(e) {
                            a.length < 5 && D.length < 6 && !u && n("".concat(a).concat(e))
                        },
                        onDelete: function() {
                            n(a.slice(0, -1))
                        },
                        onEnter: function() {
                            if (!u && !C) {
                                if (5 !== a.length)
                                    return v(!0),
                                    setTimeout((function() {
                                        v(!1)
                                    }
                                    ), Dt);
                                if (e = a,
                                !ee.includes(e.toLowerCase()) && !te.includes(e.toLowerCase()))
                                    return S(!0),
                                    setTimeout((function() {
                                        S(!1)
                                    }
                                    ), Dt);
                                var e, t = function(e) {
                                    return ne === e
                                }(a);
                                if (5 === a.length && D.length < 6 && !u) {
                                    if (R([].concat(s(D), [a])),
                                    n(""),
                                    t)
                                        return I(Pt(F, D.length)),
                                        c(!0);
                                    5 === D.length && (I(Pt(F, D.length + 1)),
                                    T(!0))
                                }
                            }
                        },
                        guesses: D
                    }), (0,
                    J.jsx)(tt, {
                        isOpen: f,
                        handleClose: function() {
                            return p(!1)
                        }
                    }), (0,
                    J.jsx)(jt, {
                        isOpen: w,
                        handleClose: function() {
                            return x(!1)
                        },
                        guesses: D,
                        gameStats: F,
                        isGameLost: C,
                        isGameWon: u,
                        handleShare: function() {
                            return O("Game copied to clipboard"),
                            setTimeout((function() {
                                return O("")
                            }
                            ), Dt)
                        }
                    }), (0,
                    J.jsx)(et, {
                        isOpen: h,
                        handleClose: function() {
                            return y(!1)
                        }
                    }), (0,
                    J.jsx)("button", {
                        type: "button",
                        className: "mx-auto mt-8 flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 select-none",
                        onClick: function() {
                            return y(!0)
                        },
                        children: "About this game"
                    }), (0,
                    J.jsx)(Z, {
                        message: "Not enough letters",
                        isOpen: b
                    }), (0,
                    J.jsx)(Z, {
                        message: "Word not found",
                        isOpen: j
                    }), (0,
                    J.jsx)(Z, {
                        message: "The word was ".concat(ne),
                        isOpen: C
                    }), (0,
                    J.jsx)(Z, {
                        message: P,
                        isOpen: "" !== P,
                        variant: "success"
                    })]
                })]
            })
        }
          , Mt = function(e) {
            e && e instanceof Function && a.e(787).then(a.bind(a, 787)).then((function(t) {
                var a = t.getCLS
                  , n = t.getFID
                  , r = t.getFCP
                  , s = t.getLCP
                  , o = t.getTTFB;
                a(e),
                n(e),
                r(e),
                s(e),
                o(e)
            }
            ))
        };
        t.render((0,
        J.jsx)(e.StrictMode, {
            children: (0,
            J.jsx)(Rt, {})
        }), document.getElementById("root")),
        Mt()
    }()
}();
//# sourceMappingURL=main.4aeaffae.js.map
