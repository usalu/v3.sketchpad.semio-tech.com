import { g as ot } from "./_commonjsHelpers-CE1G-McA.js";
function st(c, a) {
  for (var v = 0; v < a.length; v++) {
    const y = a[v];
    if (typeof y != "string" && !Array.isArray(y)) {
      for (const p in y) if (p !== "default" && !(p in c)) {
        const _ = Object.getOwnPropertyDescriptor(y, p);
        _ && Object.defineProperty(c, p, _.get ? _ : { enumerable: true, get: () => y[p] });
      }
    }
  }
  return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }));
}
var O = { exports: {} }, d = {};
var z;
function it() {
  if (z) return d;
  z = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function v(y, p, _) {
    var T = null;
    if (_ !== void 0 && (T = "" + _), p.key !== void 0 && (T = "" + p.key), "key" in p) {
      _ = {};
      for (var C in p) C !== "key" && (_[C] = p[C]);
    } else _ = p;
    return p = _.ref, { $$typeof: c, type: y, key: T, ref: p !== void 0 ? p : null, props: _ };
  }
  return d.Fragment = a, d.jsx = v, d.jsxs = v, d;
}
var J;
function ft() {
  return J || (J = 1, O.exports = it()), O.exports;
}
var _t = ft(), H = { exports: {} }, n = {};
var G;
function ct() {
  if (G) return n;
  G = 1;
  var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.portal"), v = /* @__PURE__ */ Symbol.for("react.fragment"), y = /* @__PURE__ */ Symbol.for("react.strict_mode"), p = /* @__PURE__ */ Symbol.for("react.profiler"), _ = /* @__PURE__ */ Symbol.for("react.consumer"), T = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), Q = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.memo"), $ = /* @__PURE__ */ Symbol.for("react.lazy"), F = /* @__PURE__ */ Symbol.for("react.activity"), Y = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != "object" ? null : (t = Y && t[Y] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var k = { isMounted: function() {
    return false;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, N = Object.assign, I = {};
  function R(t, e, u) {
    this.props = t, this.context = e, this.refs = I, this.updater = u || k;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(t, e) {
    if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, t, e, "setState");
  }, R.prototype.forceUpdate = function(t) {
    this.updater.enqueueForceUpdate(this, t, "forceUpdate");
  };
  function q() {
  }
  q.prototype = R.prototype;
  function S(t, e, u) {
    this.props = t, this.context = e, this.refs = I, this.updater = u || k;
  }
  var j = S.prototype = new q();
  j.constructor = S, N(j, R.prototype), j.isPureReactComponent = true;
  var D = Array.isArray;
  function P() {
  }
  var i = { H: null, A: null, T: null, S: null }, L = Object.prototype.hasOwnProperty;
  function h(t, e, u) {
    var r = u.ref;
    return { $$typeof: c, type: t, key: e, ref: r !== void 0 ? r : null, props: u };
  }
  function V(t, e) {
    return h(t.type, e, t.props);
  }
  function g(t) {
    return typeof t == "object" && t !== null && t.$$typeof === c;
  }
  function tt(t) {
    var e = { "=": "=0", ":": "=2" };
    return "$" + t.replace(/[=:]/g, function(u) {
      return e[u];
    });
  }
  var b = /\/+/g;
  function w(t, e) {
    return typeof t == "object" && t !== null && t.key != null ? tt("" + t.key) : e.toString(36);
  }
  function et(t) {
    switch (t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw t.reason;
      default:
        switch (typeof t.status == "string" ? t.then(P, P) : (t.status = "pending", t.then(function(e) {
          t.status === "pending" && (t.status = "fulfilled", t.value = e);
        }, function(e) {
          t.status === "pending" && (t.status = "rejected", t.reason = e);
        })), t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw t.reason;
        }
    }
    throw t;
  }
  function m(t, e, u, r, o) {
    var s = typeof t;
    (s === "undefined" || s === "boolean") && (t = null);
    var f = false;
    if (t === null) f = true;
    else switch (s) {
      case "bigint":
      case "string":
      case "number":
        f = true;
        break;
      case "object":
        switch (t.$$typeof) {
          case c:
          case a:
            f = true;
            break;
          case $:
            return f = t._init, m(f(t._payload), e, u, r, o);
        }
    }
    if (f) return o = o(t), f = r === "" ? "." + w(t, 0) : r, D(o) ? (u = "", f != null && (u = f.replace(b, "$&/") + "/"), m(o, e, u, "", function(ut) {
      return ut;
    })) : o != null && (g(o) && (o = V(o, u + (o.key == null || t && t.key === o.key ? "" : ("" + o.key).replace(b, "$&/") + "/") + f)), e.push(o)), 1;
    f = 0;
    var E = r === "" ? "." : r + ":";
    if (D(t)) for (var l = 0; l < t.length; l++) r = t[l], s = E + w(r, l), f += m(r, e, u, s, o);
    else if (l = K(t), typeof l == "function") for (t = l.call(t), l = 0; !(r = t.next()).done; ) r = r.value, s = E + w(r, l++), f += m(r, e, u, s, o);
    else if (s === "object") {
      if (typeof t.then == "function") return m(et(t), e, u, r, o);
      throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
    }
    return f;
  }
  function x(t, e, u) {
    if (t == null) return t;
    var r = [], o = 0;
    return m(t, r, "", "", function(s) {
      return e.call(u, s, o++);
    }), r;
  }
  function nt(t) {
    if (t._status === -1) {
      var e = t._result;
      e = e(), e.then(function(u) {
        (t._status === 0 || t._status === -1) && (t._status = 1, t._result = u);
      }, function(u) {
        (t._status === 0 || t._status === -1) && (t._status = 2, t._result = u);
      }), t._status === -1 && (t._status = 0, t._result = e);
    }
    if (t._status === 1) return t._result.default;
    throw t._result;
  }
  var U = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, rt = { map: x, forEach: function(t, e, u) {
    x(t, function() {
      e.apply(this, arguments);
    }, u);
  }, count: function(t) {
    var e = 0;
    return x(t, function() {
      e++;
    }), e;
  }, toArray: function(t) {
    return x(t, function(e) {
      return e;
    }) || [];
  }, only: function(t) {
    if (!g(t)) throw Error("React.Children.only expected to receive a single React element child.");
    return t;
  } };
  return n.Activity = F, n.Children = rt, n.Component = R, n.Fragment = v, n.Profiler = p, n.PureComponent = S, n.StrictMode = y, n.Suspense = Q, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i, n.__COMPILER_RUNTIME = { __proto__: null, c: function(t) {
    return i.H.useMemoCache(t);
  } }, n.cache = function(t) {
    return function() {
      return t.apply(null, arguments);
    };
  }, n.cacheSignal = function() {
    return null;
  }, n.cloneElement = function(t, e, u) {
    if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
    var r = N({}, t.props), o = t.key;
    if (e != null) for (s in e.key !== void 0 && (o = "" + e.key), e) !L.call(e, s) || s === "key" || s === "__self" || s === "__source" || s === "ref" && e.ref === void 0 || (r[s] = e[s]);
    var s = arguments.length - 2;
    if (s === 1) r.children = u;
    else if (1 < s) {
      for (var f = Array(s), E = 0; E < s; E++) f[E] = arguments[E + 2];
      r.children = f;
    }
    return h(t.type, o, r);
  }, n.createContext = function(t) {
    return t = { $$typeof: T, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = t, t.Consumer = { $$typeof: _, _context: t }, t;
  }, n.createElement = function(t, e, u) {
    var r, o = {}, s = null;
    if (e != null) for (r in e.key !== void 0 && (s = "" + e.key), e) L.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (o[r] = e[r]);
    var f = arguments.length - 2;
    if (f === 1) o.children = u;
    else if (1 < f) {
      for (var E = Array(f), l = 0; l < f; l++) E[l] = arguments[l + 2];
      o.children = E;
    }
    if (t && t.defaultProps) for (r in f = t.defaultProps, f) o[r] === void 0 && (o[r] = f[r]);
    return h(t, s, o);
  }, n.createRef = function() {
    return { current: null };
  }, n.forwardRef = function(t) {
    return { $$typeof: C, render: t };
  }, n.isValidElement = g, n.lazy = function(t) {
    return { $$typeof: $, _payload: { _status: -1, _result: t }, _init: nt };
  }, n.memo = function(t, e) {
    return { $$typeof: Z, type: t, compare: e === void 0 ? null : e };
  }, n.startTransition = function(t) {
    var e = i.T, u = {};
    i.T = u;
    try {
      var r = t(), o = i.S;
      o !== null && o(u, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then(P, U);
    } catch (s) {
      U(s);
    } finally {
      e !== null && u.types !== null && (e.types = u.types), i.T = e;
    }
  }, n.unstable_useCacheRefresh = function() {
    return i.H.useCacheRefresh();
  }, n.use = function(t) {
    return i.H.use(t);
  }, n.useActionState = function(t, e, u) {
    return i.H.useActionState(t, e, u);
  }, n.useCallback = function(t, e) {
    return i.H.useCallback(t, e);
  }, n.useContext = function(t) {
    return i.H.useContext(t);
  }, n.useDebugValue = function() {
  }, n.useDeferredValue = function(t, e) {
    return i.H.useDeferredValue(t, e);
  }, n.useEffect = function(t, e) {
    return i.H.useEffect(t, e);
  }, n.useEffectEvent = function(t) {
    return i.H.useEffectEvent(t);
  }, n.useId = function() {
    return i.H.useId();
  }, n.useImperativeHandle = function(t, e, u) {
    return i.H.useImperativeHandle(t, e, u);
  }, n.useInsertionEffect = function(t, e) {
    return i.H.useInsertionEffect(t, e);
  }, n.useLayoutEffect = function(t, e) {
    return i.H.useLayoutEffect(t, e);
  }, n.useMemo = function(t, e) {
    return i.H.useMemo(t, e);
  }, n.useOptimistic = function(t, e) {
    return i.H.useOptimistic(t, e);
  }, n.useReducer = function(t, e, u) {
    return i.H.useReducer(t, e, u);
  }, n.useRef = function(t) {
    return i.H.useRef(t);
  }, n.useState = function(t) {
    return i.H.useState(t);
  }, n.useSyncExternalStore = function(t, e, u) {
    return i.H.useSyncExternalStore(t, e, u);
  }, n.useTransition = function() {
    return i.H.useTransition();
  }, n.version = "19.2.3", n;
}
var X;
function pt() {
  return X || (X = 1, H.exports = ct()), H.exports;
}
var B = pt();
const A = ot(B), Et = st({ __proto__: null, default: A }, [B]), M = {}, W = A.createContext(M);
function at(c) {
  const a = A.useContext(W);
  return A.useMemo(function() {
    return typeof c == "function" ? c(a) : { ...a, ...c };
  }, [a, c]);
}
function yt(c) {
  let a;
  return c.disableParentContext ? a = typeof c.components == "function" ? c.components(M) : c.components || M : a = at(c.components), A.createElement(W.Provider, { value: a }, c.children);
}
export {
  yt as M,
  A as R,
  B as a,
  Et as b,
  _t as j,
  pt as r,
  at as u
};
