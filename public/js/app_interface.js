/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/interface/autoptimize.js":
/*!***********************************************!*\
  !*** ./resources/js/interface/autoptimize.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__exports;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_1__exports;var __WEBPACK_LOCAL_MODULE_2__, __WEBPACK_LOCAL_MODULE_2__factory, __WEBPACK_LOCAL_MODULE_2__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license | WordPress 2019-05-16 */
!function (a, b) {
  "object" == ( false ? 0 : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "1.12.4",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return e.call(this);
    },
    get: function get(a) {
      return null != a ? a < 0 ? this[a + this.length] : this[a] : e.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a) {
      return n.each(this, a);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (a < 0 ? b : 0);
      return this.pushStack(c >= 0 && c < b ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor();
    },
    push: g,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); h < i; h++) {
      if (null != (e = arguments[h])) for (d in e) {
        a = g[d], c = e[d], "__proto__" !== d && g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray || function (a) {
      return "array" === n.type(a);
    },
    isWindow: function isWindow(a) {
      return null != a && a == a.window;
    },
    isNumeric: function isNumeric(a) {
      var b = a && a.toString();
      return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    isPlainObject: function isPlainObject(a) {
      var b;
      if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;

      try {
        if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (c) {
        return !1;
      }

      if (!l.ownFirst) for (b in a) {
        return k.call(a, b);
      }

      for (b in a) {
        ;
      }

      return void 0 === b || k.call(a, b);
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? i[j.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(b) {
      b && n.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b);
      })(b);
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b) {
      var c,
          d = 0;

      if (s(a)) {
        for (c = a.length; d < c; d++) {
          if (!1 === b.call(a[d], d, a[d])) break;
        }
      } else for (d in a) {
        if (!1 === b.call(a[d], d, a[d])) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      var d;

      if (b) {
        if (h) return h.call(b, a, c);

        for (d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0; c < d; c++) {
          if (c in b && b[c] === a) return c;
        }
      }

      return -1;
    },
    merge: function merge(a, b) {
      var c = +b.length,
          d = 0,
          e = a.length;

      while (d < c) {
        a[e++] = b[d++];
      }

      if (c !== c) while (void 0 !== b[d]) {
        a[e++] = b[d++];
      }
      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; f < g; f++) {
        (d = !b(a[f], f)) !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];
      if (s(a)) for (d = a.length; g < d; g++) {
        null != (e = b(a[g], g, c)) && h.push(e);
      } else for (g in a) {
        null != (e = b(a[g], g, c)) && h.push(e);
      }
      return f.apply([], h);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, d, f;
      if ("string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a)) return c = e.call(arguments, 2), d = function d() {
        return a.apply(b || this, c.concat(e.call(arguments)));
      }, d.guid = a.guid = a.guid || n.guid++, d;
    },
    now: function now() {
      return +new Date();
    },
    support: l
  }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);
    return "function" !== c && !n.isWindow(a) && ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a);
  }

  var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = fa(),
        z = fa(),
        A = fa(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; c < d; c++) {
        if (a[c] === b) return c;
      }

      return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = {
      ID: new RegExp("^#(" + M + ")"),
      CLASS: new RegExp("^\\.(" + M + ")"),
      TAG: new RegExp("^(" + M + "|[*])"),
      ATTR: new RegExp("^" + N),
      PSEUDO: new RegExp("^" + O),
      CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
      bool: new RegExp("^(?:" + K + ")$", "i"),
      needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
    },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;
      return d !== d || c ? b : d < 0 ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };

    try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (xa) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;

          while (a[c++] = b[d++]) {
            ;
          }

          a.length = c - 1;
        }
      };
    }

    function ea(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;
      if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;

      if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;
            if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
          if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }

        if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";

            while (h--) {
              r[h] = l + " " + pa(r[h]);
            }

            s = r.join(","), w = _.test(a) && na(b.parentNode) || b;
          }
          if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }

      return i(a.replace(Q, "$1"), b, d, e);
    }

    function fa() {
      var a = [];

      function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }

      return b;
    }

    function ga(a) {
      return a[u] = !0, a;
    }

    function ha(a) {
      var b = n.createElement("div");

      try {
        return !!a(b);
      } catch (xa) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }

    function ia(a, b) {
      var c = a.split("|"),
          e = c.length;

      while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }

    function ja(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) return d;
      if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }
      return a ? 1 : -1;
    }

    function ka(a) {
      return function (b) {
        return "input" === b.nodeName.toLowerCase() && b.type === a;
      };
    }

    function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a;
      };
    }

    function ma(a) {
      return ga(function (b) {
        return b = +b, ga(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;

          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }

    function na(a) {
      return a && void 0 !== a.getElementsByTagName && a;
    }

    c = ea.support = {}, f = ea.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName;
    }, m = ea.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ha(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ha(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ha(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if (void 0 !== b.getElementById && p) {
          var c = b.getElementById(a);
          return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);
        return function (a) {
          var c = void 0 !== a.getAttributeNode && a.getAttributeNode("id");
          return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return void 0 !== b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);

        if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }

          return d;
        }

        return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        if (void 0 !== b.getElementsByClassName && p) return b.getElementsByClassName(a);
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ha(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ha(function (a) {
        var b = n.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ha(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }
        return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d || (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;
        var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];
        if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
        if (e === f) return ja(a, b);
        c = a;

        while (c = c.parentNode) {
          g.unshift(c);
        }

        c = b;

        while (c = c.parentNode) {
          h.unshift(c);
        }

        while (g[d] === h[d]) {
          d++;
        }

        return d ? ja(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, ea.matches = function (a, b) {
      return ea(a, null, null, b);
    }, ea.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);
        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (xa) {}
      return ea(b, n, null, [a]).length > 0;
    }, ea.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, ea.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, ea.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, ea.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;

      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }

        while (e--) {
          a.splice(d[e], 1);
        }
      }

      return k = null, a;
    }, e = ea.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;

      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;

          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }

      return c;
    }, d = ea.selectors = {
      cacheLength: 50,
      createPseudo: ga,
      match: W,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        },
        CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ea.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ea.error(a[0]), a;
        },
        PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];
          return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        }
      },
      filter: {
        TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();
          return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        },
        CLASS: function CLASS(a) {
          var b = y[a + " "];
          return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || void 0 !== a.getAttribute && a.getAttribute("class") || "");
          });
        },
        ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = ea.attr(d, a);
            return null == e ? "!=" === b : !b || (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b && (e === c || e.slice(0, c.length + 1) === c + "-"));
          };
        },
        CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;

            if (q) {
              if (f) {
                while (p) {
                  m = b;

                  while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }

                  o = p = "only" === a && !o && "nextSibling";
                }

                return !0;
              }

              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];

                while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];
                    break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), !1 === t) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }

              return (t -= e) === d || t % d == 0 && t / d >= 0;
            }
          };
        },
        PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ea.error("unsupported pseudo: " + a);
          return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ga(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;

            while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        }
      },
      pseudos: {
        not: ga(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));
          return d[u] ? ga(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;

            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }),
        has: ga(function (a) {
          return function (b) {
            return ea(a, b).length > 0;
          };
        }),
        contains: ga(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }),
        lang: ga(function (a) {
          return V.test(a || "") || ea.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;

            do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return (c = c.toLowerCase()) === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);

            return !1;
          };
        }),
        target: function target(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id;
        },
        root: function root(a) {
          return a === o;
        },
        focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        },
        enabled: function enabled(a) {
          return !1 === a.disabled;
        },
        disabled: function disabled(a) {
          return !0 === a.disabled;
        },
        checked: function checked(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected;
        },
        selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, !0 === a.selected;
        },
        empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }

          return !0;
        },
        parent: function parent(a) {
          return !d.pseudos.empty(a);
        },
        header: function header(a) {
          return Y.test(a.nodeName);
        },
        input: function input(a) {
          return X.test(a.nodeName);
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b;
        },
        text: function text(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        },
        first: ma(function () {
          return [0];
        }),
        last: ma(function (a, b) {
          return [b - 1];
        }),
        eq: ma(function (a, b, c) {
          return [c < 0 ? c + b : c];
        }),
        even: ma(function (a, b) {
          for (var c = 0; c < b; c += 2) {
            a.push(c);
          }

          return a;
        }),
        odd: ma(function (a, b) {
          for (var c = 1; c < b; c += 2) {
            a.push(c);
          }

          return a;
        }),
        lt: ma(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; --d >= 0;) {
            a.push(d);
          }

          return a;
        }),
        gt: ma(function (a, b, c) {
          for (var d = c < 0 ? c + b : c; ++d < b;) {
            a.push(d);
          }

          return a;
        })
      }
    }, d.pseudos.nth = d.pseudos.eq;

    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = ka(b);
    }

    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = la(b);
    }

    function oa() {}

    oa.prototype = d.filters = d.pseudos, d.setFilters = new oa(), g = ea.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];
      if (k) return b ? 0 : k.slice(0);
      h = a, i = [], j = d.preFilter;

      while (h) {
        c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(Q, " ")
        }), h = h.slice(c.length));

        for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length));
        }

        if (!c) break;
      }

      return b ? h.length : h ? ea.error(a) : z(a, i).slice(0);
    };

    function pa(a) {
      for (var b = 0, c = a.length, d = ""; b < c; b++) {
        d += a[b].value;
      }

      return d;
    }

    function qa(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];

        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
            if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }

    function ra(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;

        while (e--) {
          if (!a[e](b, c, d)) return !1;
        }

        return !0;
      } : a[0];
    }

    function sa(a, b, c) {
      for (var d = 0, e = b.length; d < e; d++) {
        ea(a, b[d], c);
      }

      return c;
    }

    function ta(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; h < i; h++) {
        (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
      }

      return g;
    }

    function ua(a, b, c, d, e, f) {
      return d && !d[u] && (d = ua(d)), e && !e[u] && (e = ua(e, f)), ga(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || sa(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ta(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;

        if (c && c(q, r, h, i), d) {
          j = ta(r, n), d(j, [], h, i), k = j.length;

          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }

        if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;

              while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }

              e(null, r = [], j, i);
            }

            k = r.length;

            while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ta(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }

    function va(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = qa(function (a) {
        return a === b;
      }, h, !0), l = qa(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
        return b = null, e;
      }]; i < f; i++) {
        if (c = d.relative[a[i].type]) m = [qa(ra(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; e < f; e++) {
              if (d.relative[a[e].type]) break;
            }

            return ua(i > 1 && ra(m), i > 1 && pa(a.slice(0, i - 1).concat({
              value: " " === a[i - 2].type ? "*" : ""
            })).replace(Q, "$1"), c, i < e && va(a.slice(i, e)), e < f && va(a = a.slice(e)), e < f && pa(a));
          }

          m.push(c);
        }
      }

      return ra(m);
    }

    function wa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;

        for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);

            while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);
                break;
              }
            }

            k && (w = y);
          }

          c && ((l = !q && l) && r--, _f && t.push(l));
        }

        if (r += s, c && s !== r) {
          o = 0;

          while (q = b[o++]) {
            q(t, u, g, h);
          }

          if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }
            u = ta(u);
          }

          H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ea.uniqueSort(i);
        }

        return k && (w = y, j = v), t;
      };

      return c ? ga(f) : f;
    }

    return h = ea.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];

      if (!f) {
        b || (b = g(a)), c = b.length;

        while (c--) {
          f = va(b[c]), f[u] ? d.push(f) : e.push(f);
        }

        f = A(a, wa(e, d)), f.selector = a;
      }

      return f;
    }, i = ea.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);

      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (!(b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0])) return e;
          n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }

        i = W.needsContext.test(a) ? 0 : j.length;

        while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;

          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && na(b.parentNode) || b))) {
            if (j.splice(i, 1), !(a = f.length && pa(j))) return H.apply(e, f), e;
            break;
          }
        }
      }

      return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && na(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ha(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ha(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ia("type|href|height|width", function (a, b, c) {
      if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ha(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ia("value", function (a, b, c) {
      if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue;
    }), ha(function (a) {
      return null == a.getAttribute("disabled");
    }) || ia(K, function (a, b, c) {
      var d;
      if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), ea;
  }(a);

  n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;

  var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;

    while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;
        d.push(a);
      }
    }

    return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }

    return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;

  function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return n.inArray(a, b) > -1 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = [],
          d = this,
          e = d.length;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; b < e; b++) {
          if (n.contains(d[b], this)) return !0;
        }
      }));

      for (b = 0; b < e; b++) {
        n.find(a, d[b], c);
      }

      return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c;
    },
    filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    },
    is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    }
  });
  var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (n.fn.init = function (a, b, c) {
    var e, f;
    if (!a) return this;

    if (c = c || A, "string" == typeof a) {
      if (!(e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a)) || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);

      if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }
        return this;
      }

      if ((f = d.getElementById(e[2])) && f.parentNode) {
        if (f.id !== e[2]) return A.find(a);
        this.length = 1, this[0] = f;
      }

      return this.context = d, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  }).prototype = n.fn, A = n(d);
  var C = /^(?:parents|prev(?:Until|All))/,
      D = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.fn.extend({
    has: function has(a) {
      var b,
          c = n(a, this),
          d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) {
          if (n.contains(this, c[b])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; d < e; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function E(a, b) {
    do {
      a = a[b];
    } while (a && 1 !== a.nodeType);

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return u(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    },
    next: function next(a) {
      return E(a, "nextSibling");
    },
    prev: function prev(a) {
      return E(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return v(a.firstChild);
    },
    contents: function contents(a) {
      return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (D[a] || (e = n.uniqueSort(e)), C.test(a) && (e = e.reverse())), this.pushStack(e);
    };
  });
  var F = /\S+/g;

  function G(a) {
    var b = {};
    return n.each(a.match(F) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? G(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();

        while (++h < f.length) {
          !1 === f[h].apply(c[0], c[1]) && a.stopOnFalse && (h = f.length, c = !1);
        }
      }

      a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = {
      add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function b(c) {
          n.each(c, function (c, d) {
            n.isFunction(d) ? a.unique && j.has(d) || f.push(d) : d && d.length && "string" !== n.type(d) && b(d);
          });
        }(arguments), c && !b && i()), this;
      },
      remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), c <= h && h--;
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      },
      empty: function empty() {
        return f && (f = []), this;
      },
      disable: function disable() {
        return e = g = [], f = c = "", this;
      },
      disabled: function disabled() {
        return !f;
      },
      lock: function lock() {
        return e = !0, c || j.disable(), this;
      },
      locked: function locked() {
        return !!e;
      },
      fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      },
      fire: function fire() {
        return j.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!d;
      }
    };

    return j;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); b < d; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var H;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (!0 === a ? --n.readyWait : n.isReady) || (n.isReady = !0, !0 !== a && --n.readyWait > 0 || (H.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    }
  });

  function I() {
    d.addEventListener ? (d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J)) : (d.detachEvent("onreadystatechange", J), a.detachEvent("onload", J));
  }

  function J() {
    (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (I(), n.ready());
  }

  n.ready.promise = function (b) {
    if (!H) if (H = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);else if (d.addEventListener) d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J);else {
      d.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
      var c = !1;

      try {
        c = null == a.frameElement && d.documentElement;
      } catch (e) {}

      c && c.doScroll && function b() {
        if (!n.isReady) {
          try {
            c.doScroll("left");
          } catch (e) {
            return a.setTimeout(b, 50);
          }

          I(), n.ready();
        }
      }();
    }
    return H.promise(b);
  }, n.ready.promise();
  var K;

  for (K in n(l)) {
    break;
  }

  l.ownFirst = "0" === K, l.inlineBlockNeedsLayout = !1, n(function () {
    var a, b, c, e;
    (c = d.getElementsByTagName("body")[0]) && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e));
  }), function () {
    var a = d.createElement("div");
    l.deleteExpando = !0;

    try {
      delete a.test;
    } catch (b) {
      l.deleteExpando = !1;
    }

    a = null;
  }();

  var L = function L(a) {
    var b = n.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
    return (1 === c || 9 === c) && (!b || !0 !== b && a.getAttribute("classid") === b);
  },
      M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      N = /([A-Z])/g;

  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(N, "-$1").toLowerCase();

      if ("string" == typeof (c = a.getAttribute(d))) {
        try {
          c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : M.test(c) ? n.parseJSON(c) : c);
        } catch (e) {}

        n.data(a, b, c);
      } else c = void 0;
    }

    return c;
  }

  function P(a) {
    var b;

    for (b in a) {
      if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    }

    return !0;
  }

  function Q(a, b, d, e) {
    if (L(a)) {
      var f,
          g,
          h = n.expando,
          i = a.nodeType,
          j = i ? n.cache : a,
          k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
        toJSON: n.noop
      }), "object" != _typeof(b) && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? null == (f = g[b]) && (f = g[n.camelCase(b)]) : f = g, f;
    }
  }

  function R(a, b, c) {
    if (L(a)) {
      var d,
          e,
          f = a.nodeType,
          g = f ? n.cache : a,
          h = f ? a[n.expando] : n.expando;

      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;

          while (e--) {
            delete d[b[e]];
          }

          if (c ? !P(d) : !n.isEmptyObject(d)) return;
        }

        (c || (delete g[h].data, P(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0);
      }
    }
  }

  n.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function hasData(a) {
      return !!(a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando]) && !P(a);
    },
    data: function data(a, b, c) {
      return Q(a, b, c);
    },
    removeData: function removeData(a, b) {
      return R(a, b);
    },
    _data: function _data(a, b, c) {
      return Q(a, b, c, !0);
    },
    _removeData: function _removeData(a, b) {
      return R(a, b, !0);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), O(f, d, e[d])));
          }

          n._data(f, "parsedAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        n.data(this, a);
      }) : arguments.length > 1 ? this.each(function () {
        n.data(this, a, b);
      }) : f ? O(f, a, n.data(f, a)) : void 0;
    },
    removeData: function removeData(a) {
      return this.each(function () {
        n.removeData(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      if (a) return b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || [];
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return n._data(a, c) || n._data(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          n._removeData(a, b + "queue"), n._removeData(a, c);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        (c = n._data(f[g], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  }), function () {
    var a;

    l.shrinkWrapBlocks = function () {
      if (null != a) return a;
      a = !1;
      var b, c, e;
      return (c = d.getElementsByTagName("body")[0]) && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), void 0 !== b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0;
    };
  }();

  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };

  function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));

    if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;

      do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }

    return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }

  var X = function X(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        X(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; h < i; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      Y = /^(?:checkbox|radio)$/i,
      Z = /<([\w:-]+)/,
      $ = /^$|\/(?:java|ecma)script/i,
      _ = /^\s+/,
      aa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

  function ba(a) {
    var b = aa.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  !function () {
    var a = d.createElement("div"),
        b = d.createDocumentFragment(),
        c = d.createElement("input");
    a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando);
  }();
  var ca = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    area: [1, "<map>", "</map>"],
    param: [1, "<object>", "</object>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
  };
  ca.optgroup = ca.option, ca.tbody = ca.tfoot = ca.colgroup = ca.caption = ca.thead, ca.th = ca.td;

  function da(a, b) {
    var c,
        d,
        e = 0,
        f = void 0 !== a.getElementsByTagName ? a.getElementsByTagName(b || "*") : void 0 !== a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
    if (!f) for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) {
      !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, da(d, b));
    }
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f;
  }

  function ea(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      n._data(c, "globalEval", !b || n._data(b[d], "globalEval"));
    }
  }

  var fa = /<|&#?\w+;/,
      ga = /<tbody/i;

  function ha(a) {
    Y.test(a.type) && (a.defaultChecked = a.checked);
  }

  function ia(a, b, c, d, e) {
    for (var f, g, h, i, j, k, m, o = a.length, p = ba(b), q = [], r = 0; r < o; r++) {
      if ((g = a[r]) || 0 === g) if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);else if (fa.test(g)) {
        i = i || p.appendChild(b.createElement("div")), j = (Z.exec(g) || ["", ""])[1].toLowerCase(), m = ca[j] || ca._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];

        while (f--) {
          i = i.lastChild;
        }

        if (!l.leadingWhitespace && _.test(g) && q.push(b.createTextNode(_.exec(g)[0])), !l.tbody) {
          g = "table" !== j || ga.test(g) ? "<table>" !== m[1] || ga.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;

          while (f--) {
            n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k);
          }
        }

        n.merge(q, i.childNodes), i.textContent = "";

        while (i.firstChild) {
          i.removeChild(i.firstChild);
        }

        i = p.lastChild;
      } else q.push(b.createTextNode(g));
    }

    i && p.removeChild(i), l.appendChecked || n.grep(da(q, "input"), ha), r = 0;

    while (g = q[r++]) {
      if (d && n.inArray(g, d) > -1) e && e.push(g);else if (h = n.contains(g.ownerDocument, g), i = da(p.appendChild(g), "script"), h && ea(i), c) {
        f = 0;

        while (g = i[f++]) {
          $.test(g.type || "") && c.push(g);
        }
      }
    }

    return i = null, p;
  }

  !function () {
    var b,
        c,
        e = d.createElement("div");

    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = !1 === e.attributes[c].expando);
    }

    e = null;
  }();
  var ja = /^(?:input|select|textarea)$/i,
      ka = /^key/,
      la = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      ma = /^(?:focusinfocus|focusoutblur)$/,
      na = /^([^.]*)(?:\.(.+)|)/;

  function oa() {
    return !0;
  }

  function pa() {
    return !1;
  }

  function qa() {
    try {
      return d.activeElement;
    } catch (a) {}
  }

  function ra(a, b, c, d, e, f) {
    var g, h;

    if ("object" == _typeof(b)) {
      "string" != typeof c && (d = d || c, c = void 0);

      for (h in b) {
        ra(a, h, c, d, b[h], f);
      }

      return a;
    }

    if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), !1 === e) e = pa;else if (!e) return a;
    return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n._data(a);

      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
          return void 0 === n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments);
        }, k.elem = a), b = (b || "").match(F) || [""], h = b.length;

        while (h--) {
          f = na.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && !1 !== j.setup.call(a, d, p, k) || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
        }

        a = null;
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = n.hasData(a) && n._data(a);

      if (r && (k = r.events)) {
        b = (b || "").match(F) || [""], j = b.length;

        while (j--) {
          if (h = na.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;

            while (f--) {
              g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            }

            i && !m.length && (l.teardown && !1 !== l.teardown.call(a, p, r.handle) || n.removeEvent(a, o, r.handle), delete k[o]);
          } else for (o in k) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"));
      }
    },
    trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];

      if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ma.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || !1 !== l.trigger.apply(e, c))) {
        if (!f && !l.noBubble && !n.isWindow(e)) {
          for (j = l.delegateType || q, ma.test(j + q) || (i = i.parentNode); i; i = i.parentNode) {
            p.push(i), m = i;
          }

          m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a);
        }

        o = 0;

        while ((i = p[o++]) && !b.isPropagationStopped()) {
          b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), (g = h && i[h]) && g.apply && L(i) && (b.result = g.apply(i, c), !1 === b.result && b.preventDefault());
        }

        if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), c)) && L(e) && h && e[q] && !n.isWindow(e)) {
          m = e[h], m && (e[h] = null), n.event.triggered = q;

          try {
            e[q]();
          } catch (s) {}

          n.event.triggered = void 0, m && (e[h] = m);
        }

        return b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (n._data(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || !1 !== k.preDispatch.call(this, a)) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, void 0 !== (d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i)) && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i != this; i = i.parentNode || this) {
        if (1 === i.nodeType && (!0 !== i.disabled || "click" !== a.type)) {
          for (d = [], c = 0; c < h; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];
      h || (this.fixHooks[f] = h = la.test(f) ? this.mouseHooks : ka.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;

      while (b--) {
        c = e[b], a[c] = g[c];
      }

      return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button,
            h = b.fromElement;
        return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          if (this !== qa() && this.focus) try {
            return this.focus(), !1;
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          if (this === qa() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          if (n.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0
      });
      n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = d.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  } : function (a, b, c) {
    var d = "on" + b;
    a.detachEvent && (void 0 === a[d] && (a[d] = null), a.detachEvent(d, c));
  }, n.Event = function (a, b) {
    if (!(this instanceof n.Event)) return new n.Event(a, b);
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && !1 === a.returnValue ? oa : pa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), this[n.expando] = !0;
  }, n.Event.prototype = {
    constructor: n.Event,
    isDefaultPrevented: pa,
    isPropagationStopped: pa,
    isImmediatePropagationStopped: pa,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = oa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = oa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = oa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), l.submit || (n.event.special.submit = {
    setup: function setup() {
      if (n.nodeName(this, "form")) return !1;
      n.event.add(this, "click._submit keypress._submit", function (a) {
        var b = a.target,
            c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
        c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function (a) {
          a._submitBubble = !0;
        }), n._data(c, "submit", !0));
      });
    },
    postDispatch: function postDispatch(a) {
      a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a));
    },
    teardown: function teardown() {
      if (n.nodeName(this, "form")) return !1;
      n.event.remove(this, "._submit");
    }
  }), l.change || (n.event.special.change = {
    setup: function setup() {
      if (ja.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function (a) {
        "checked" === a.originalEvent.propertyName && (this._justChanged = !0);
      }), n.event.add(this, "click._change", function (a) {
        this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a);
      })), !1;
      n.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        ja.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a);
        }), n._data(b, "change", !0));
      });
    },
    handle: function handle(a) {
      var b = a.target;
      if (this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type) return a.handleObj.handler.apply(this, arguments);
    },
    teardown: function teardown() {
      return n.event.remove(this, "._change"), !ja.test(this.nodeName);
    }
  }), l.focusin || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = n._data(d, b);

        e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = n._data(d, b) - 1;
        e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d) {
      return ra(this, a, b, c, d);
    },
    one: function one(a, b, c, d) {
      return ra(this, a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return !1 !== b && "function" != typeof b || (c = b, b = void 0), !1 === c && (c = pa), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      if (c) return n.event.trigger(a, b, c, !0);
    }
  });
  var sa = / jQuery\d+="(?:null|\d+)"/g,
      ta = new RegExp("<(?:" + aa + ")[\\s/>]", "i"),
      ua = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      va = /<script|<style|<link/i,
      wa = /checked\s*(?:[^=]|=\s*.checked.)/i,
      xa = /^true\/(.*)/,
      ya = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      za = ba(d),
      Aa = za.appendChild(d.createElement("div"));

  function Ba(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function Ca(a) {
    return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a;
  }

  function Da(a) {
    var b = xa.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function Ea(a, b) {
    if (1 === b.nodeType && n.hasData(a)) {
      var c,
          d,
          e,
          f = n._data(a),
          g = n._data(b, f),
          h = f.events;

      if (h) {
        delete g.handle, g.events = {};

        for (c in h) {
          for (d = 0, e = h[c].length; d < e; d++) {
            n.event.add(b, c, h[c][d]);
          }
        }
      }

      g.data && (g.data = n.extend({}, g.data));
    }
  }

  function Fa(a, b) {
    var c, d, e;

    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
        e = n._data(b);

        for (d in e.events) {
          n.removeEvent(b, d, e.handle);
        }

        b.removeAttribute(n.expando);
      }

      "script" === c && b.text !== a.text ? (Ca(b).text = a.text, Da(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Y.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
  }

  function Ga(a, b, c, d) {
    b = f.apply([], b);
    var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);
    if (r || o > 1 && "string" == typeof q && !l.checkClone && wa.test(q)) return a.each(function (e) {
      var f = a.eq(e);
      r && (b[0] = q.call(this, e, f.html())), Ga(f, b, c, d);
    });

    if (o && (k = ia(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
      for (i = n.map(da(k, "script"), Ca), h = i.length; m < o; m++) {
        g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, da(g, "script"))), c.call(a[m], g, m);
      }

      if (h) for (j = i[i.length - 1].ownerDocument, n.map(i, Da), m = 0; m < h; m++) {
        g = i[m], $.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(ya, "")));
      }
      k = e = null;
    }

    return a;
  }

  function Ha(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(da(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && ea(da(d, "script")), d.parentNode.removeChild(d));
    }

    return a;
  }

  n.extend({
    htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ua, "<$1></$2>");
    },
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i = n.contains(a.ownerDocument, a);
      if (l.html5Clone || n.isXMLDoc(a) || !ta.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Aa.innerHTML = a.outerHTML, Aa.removeChild(f = Aa.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (d = da(f), h = da(a), g = 0; null != (e = h[g]); ++g) {
        d[g] && Fa(e, d[g]);
      }
      if (b) if (c) for (h = h || da(a), d = d || da(f), g = 0; null != (e = h[g]); g++) {
        Ea(e, d[g]);
      } else Ea(a, f);
      return d = da(f, "script"), d.length > 0 && ea(d, !i && da(a, "script")), d = h = e = null, f;
    },
    cleanData: function cleanData(a, b) {
      for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++) {
        if ((b || L(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) for (e in g.events) {
            m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
          }
          j[f] && (delete j[f], k || void 0 === d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f));
        }
      }
    }
  }), n.fn.extend({
    domManip: Ga,
    detach: function detach(a) {
      return Ha(this, a, !0);
    },
    remove: function remove(a) {
      return Ha(this, a);
    },
    text: function text(a) {
      return X(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a));
      }, null, a, arguments.length);
    },
    append: function append() {
      return Ga(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          Ba(this, a).appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return Ga(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = Ba(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return Ga(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return Ga(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && n.cleanData(da(a, !1));

        while (a.firstChild) {
          a.removeChild(a.firstChild);
        }

        a.options && n.nodeName(a, "select") && (a.options.length = 0);
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return X(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(sa, "") : void 0;

        if ("string" == typeof a && !va.test(a) && (l.htmlSerialize || !ta.test(a)) && (l.leadingWhitespace || !_.test(a)) && !ca[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);

          try {
            for (; c < d; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(da(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = [];
      return Ga(this, arguments, function (b) {
        var c = this.parentNode;
        n.inArray(this, a) < 0 && (n.cleanData(da(this)), c && c.replaceChild(b, this));
      }, a);
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = 0, e = [], f = n(a), h = f.length - 1; d <= h; d++) {
        c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
      }

      return this.pushStack(e);
    };
  });
  var Ia,
      Ja = {
    HTML: "block",
    BODY: "block"
  };

  function Ka(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");
    return c.detach(), d;
  }

  function La(a) {
    var b = d,
        c = Ja[a];
    return c || (c = Ka(a, b), "none" !== c && c || (Ia = (Ia || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ia[0].contentWindow || Ia[0].contentDocument).document, b.write(), b.close(), c = Ka(a, b), Ia.detach()), Ja[a] = c), c;
  }

  var Ma = /^margin/,
      Na = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Oa = function Oa(a, b, c, d) {
    var e,
        f,
        g = {};

    for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }

    e = c.apply(a, d || []);

    for (f in b) {
      a.style[f] = g[f];
    }

    return e;
  },
      Pa = d.documentElement;

  !function () {
    var b,
        c,
        e,
        f,
        g,
        h,
        i = d.createElement("div"),
        j = d.createElement("div");

    function k() {
      var k,
          l,
          m = d.documentElement;
      m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
        width: "4px"
      }).width, j.style.marginRight = "50%", c = "4px" === (l || {
        marginRight: "4px"
      }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", (f = 0 === k[0].offsetHeight) && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i);
    }

    j.style && (j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
      reliableHiddenOffsets: function reliableHiddenOffsets() {
        return null == b && k(), f;
      },
      boxSizingReliable: function boxSizingReliable() {
        return null == b && k(), e;
      },
      pixelMarginRight: function pixelMarginRight() {
        return null == b && k(), c;
      },
      pixelPosition: function pixelPosition() {
        return null == b && k(), b;
      },
      reliableMarginRight: function reliableMarginRight() {
        return null == b && k(), g;
      },
      reliableMarginLeft: function reliableMarginLeft() {
        return null == b && k(), h;
      }
    }));
  }();
  var Qa,
      Ra,
      Sa = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Qa = function Qa(b) {
    var c = b.ownerDocument.defaultView;
    return c && c.opener || (c = a), c.getComputedStyle(b);
  }, Ra = function Ra(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Qa(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Na.test(g) && Ma.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "";
  }) : Pa.currentStyle && (Qa = function Qa(a) {
    return a.currentStyle;
  }, Ra = function Ra(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;
    return c = c || Qa(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Na.test(g) && !Sa.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto";
  });

  function Ta(a, b) {
    return {
      get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      }
    };
  }

  var Ua = /alpha\([^)]*\)/i,
      Va = /opacity\s*=\s*([^)]*)/i,
      Wa = /^(none|table(?!-c[ea]).+)/,
      Xa = new RegExp("^(" + S + ")(.*)$", "i"),
      Ya = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      Za = {
    letterSpacing: "0",
    fontWeight: "400"
  },
      $a = ["Webkit", "O", "Moz", "ms"],
      _a = d.createElement("div").style;

  function ab(a) {
    if (a in _a) return a;
    var b = a.charAt(0).toUpperCase() + a.slice(1),
        c = $a.length;

    while (c--) {
      if ((a = $a[c] + b) in _a) return a;
    }
  }

  function bb(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; g < h; g++) {
      d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = n._data(d, "olddisplay", La(d.nodeName)))) : (e = V(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
    }

    for (g = 0; g < h; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }

    return a;
  }

  function cb(a, b, c) {
    var d = Xa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }

  function db(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; f < 4; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }

    return g;
  }

  function eb(a, b, c) {
    var d = !0,
        e = "width" === b ? a.offsetWidth : a.offsetHeight,
        f = Qa(a),
        g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);

    if (e <= 0 || null == e) {
      if (e = Ra(a, b, f), (e < 0 || null == e) && (e = a.style[b]), Na.test(e)) return e;
      d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
    }

    return e + db(a, b, c || (g ? "border" : "content"), d, f) + "px";
  }

  n.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = Ra(a, "opacity");
            return "" === c ? "1" : c;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": l.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;
        if (b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c;
        } catch (j) {}
      }
    },
    css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);
      return b = n.cssProps[h] || (n.cssProps[h] = ab(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ra(a, b, d)), "normal" === f && b in Za && (f = Za[b]), "" === c || c ? (e = parseFloat(f), !0 === c || isFinite(e) ? e || 0 : f) : f;
    }
  }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = {
      get: function get(a, c, d) {
        if (c) return Wa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Oa(a, Ya, function () {
          return eb(a, b, d);
        }) : eb(a, b, d);
      },
      set: function set(a, c, d) {
        var e = d && Qa(a);
        return cb(a, c, d ? db(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
      }
    };
  }), l.opacity || (n.cssHooks.opacity = {
    get: function get(a, b) {
      return Va.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
          f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Ua, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ua.test(f) ? f.replace(Ua, e) : f + " " + e);
    }
  }), n.cssHooks.marginRight = Ta(l.reliableMarginRight, function (a, b) {
    if (b) return Oa(a, {
      display: "inline-block"
    }, Ra, [a, "marginRight"]);
  }), n.cssHooks.marginLeft = Ta(l.reliableMarginLeft, function (a, b) {
    if (b) return (parseFloat(Ra(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Oa(a, {
      marginLeft: 0
    }, function () {
      return a.getBoundingClientRect().left;
    }) : 0)) + "px";
  }), n.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    n.cssHooks[a + b] = {
      expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; d < 4; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }

        return e;
      }
    }, Ma.test(a) || (n.cssHooks[a + b].set = cb);
  }), n.fn.extend({
    css: function css(a, b) {
      return X(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;

        if (n.isArray(b)) {
          for (d = Qa(a), e = b.length; g < e; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }

          return f;
        }

        return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    },
    show: function show() {
      return bb(this, !0);
    },
    hide: function hide() {
      return bb(this);
    },
    toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    }
  });

  function fb(a, b, c, d, e) {
    return new fb.prototype.init(a, b, c, d, e);
  }

  n.Tween = fb, fb.prototype = {
    constructor: fb,
    init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    },
    cur: function cur() {
      var a = fb.propHooks[this.prop];
      return a && a.get ? a.get(this) : fb.propHooks._default.get(this);
    },
    run: function run(a) {
      var b,
          c = fb.propHooks[this.prop];
      return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : fb.propHooks._default.set(this), this;
    }
  }, fb.prototype.init.prototype = fb.prototype, fb.propHooks = {
    _default: {
      get: function get(a) {
        var b;
        return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      },
      set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      }
    }
  }, fb.propHooks.scrollTop = fb.propHooks.scrollLeft = {
    set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    }
  }, n.easing = {
    linear: function linear(a) {
      return a;
    },
    swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    },
    _default: "swing"
  }, n.fx = fb.prototype.init, n.fx.step = {};
  var gb,
      hb,
      ib = /^(?:toggle|show|hide)$/,
      jb = /queueHooks$/;

  function kb() {
    return a.setTimeout(function () {
      gb = void 0;
    }), gb = n.now();
  }

  function lb(a, b) {
    var c,
        d = {
      height: a
    },
        e = 0;

    for (b = b ? 1 : 0; e < 4; e += 2 - b) {
      c = U[e], d["margin" + c] = d["padding" + c] = a;
    }

    return b && (d.opacity = d.width = a), d;
  }

  function mb(a, b, c) {
    for (var d, e = (pb.tweeners[b] || []).concat(pb.tweeners["*"]), f = 0, g = e.length; f < g; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }

  function nb(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        m = this,
        o = {},
        p = a.style,
        q = a.nodeType && V(a),
        r = n._data(a, "fxshow");

    c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, m.always(function () {
      m.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), "inline" === (k = "none" === j ? n._data(a, "olddisplay") || La(a.nodeName) : j) && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== La(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function () {
      p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2];
    }));

    for (d in b) {
      if (e = b[d], ib.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
          if ("show" !== e || !r || void 0 === r[d]) continue;
          q = !0;
        }

        o[d] = r && r[d] || n.style(a, d);
      } else j = void 0;
    }

    if (n.isEmptyObject(o)) "inline" === ("none" === j ? La(a.nodeName) : j) && (p.display = j);else {
      r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function () {
        n(a).hide();
      }), m.done(function () {
        var b;

        n._removeData(a, "fxshow");

        for (b in o) {
          n.style(a, b, o[b]);
        }
      });

      for (d in o) {
        g = mb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }

  function ob(a, b) {
    var c, d, e, f, g;

    for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (g = n.cssHooks[d]) && "expand" in g) {
        f = g.expand(f), delete a[d];

        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }

  function pb(a, b, c) {
    var d,
        e,
        f = 0,
        g = pb.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;

      for (var b = gb || kb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; g < i; g++) {
        j.tweens[g].run(f);
      }

      return h.notifyWith(a, [j, f, c]), f < 1 && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({
      elem: a,
      props: n.extend({}, b),
      opts: n.extend(!0, {
        specialEasing: {},
        easing: n.easing._default
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: gb || kb(),
      duration: c.duration,
      tweens: [],
      createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d), d;
      },
      stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;
        if (e) return this;

        for (e = !0; c < d; c++) {
          j.tweens[c].run(1);
        }

        return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      }
    }),
        k = j.props;

    for (ob(k, j.opts.specialEasing); f < g; f++) {
      if (d = pb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }

    return n.map(k, mb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }

  n.Animation = n.extend(pb, {
    tweeners: {
      "*": [function (a, b) {
        var c = this.createTween(a, b);
        return W(c.elem, a, T.exec(b), c), c;
      }]
    },
    tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(F);

      for (var c, d = 0, e = a.length; d < e; d++) {
        c = a[d], pb.tweeners[c] = pb.tweeners[c] || [], pb.tweeners[c].unshift(b);
      }
    },
    prefilters: [nb],
    prefilter: function prefilter(a, b) {
      b ? pb.prefilters.unshift(a) : pb.prefilters.push(a);
    }
  }), n.speed = function (a, b, c) {
    var d = a && "object" == _typeof(a) ? n.extend({}, a) : {
      complete: c || !c && b || n.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !n.isFunction(b) && b
    };
    return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && !0 !== d.queue || (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = pb(this, n.extend({}, a), f);
        (e || n._data(this, "finish")) && b.stop(!0);
      };

      return g.finish = g, e || !1 === f.queue ? this.each(g) : this.queue(f.queue, g);
    },
    stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;
        delete a.stop, b(c);
      };

      return "string" != typeof a && (c = b, b = a, a = void 0), b && !1 !== a && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = n._data(this);

        if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && jb.test(e) && d(g[e]);
        }

        for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }

        !b && c || n.dequeue(this, a);
      });
    },
    finish: function finish(a) {
      return !1 !== a && (a = a || "fx"), this.each(function () {
        var b,
            c = n._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;

        for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }

        for (b = 0; b < g; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }

        delete c.finish;
      });
    }
  }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];

    n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(lb(b, !0), a, d, e);
    };
  }), n.each({
    slideDown: lb("show"),
    slideUp: lb("hide"),
    slideToggle: lb("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = n.timers,
        c = 0;

    for (gb = n.now(); c < b.length; c++) {
      (a = b[c])() || b[c] !== a || b.splice(c--, 1);
    }

    b.length || n.fx.stop(), gb = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    hb || (hb = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(hb), hb = null;
  }, n.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);

      d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a,
        b = d.createElement("input"),
        c = d.createElement("div"),
        e = d.createElement("select"),
        f = e.appendChild(d.createElement("option"));
    c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value;
  }();
  var qb = /\r/g,
      rb = /[\x20\t\r\n\f]+/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), (b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()]) && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(qb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a)).replace(rb, " ");
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || e < 0, g = f ? null : [], h = f ? e + 1 : d.length, i = e < 0 ? h : f ? e : 0; i < h; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
              d.selected = c = !0;
            } catch (h) {
              d.scrollHeight;
            } else d.selected = !1;
          }

          return c || (a.selectedIndex = -1), e;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        if (n.isArray(b)) return a.checked = n.inArray(n(a).val(), b) > -1;
      }
    }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });
  var sb,
      tb,
      ub = n.expr.attrHandle,
      vb = /^(?:checked|selected)$/i,
      wb = l.getSetAttribute,
      xb = l.input;
  n.fn.extend({
    attr: function attr(a, b) {
      return X(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return void 0 === a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(F);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d);
      }
    }
  }), tb = {
    set: function set(a, b, c) {
      return !1 === b ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ub[b] || n.find.attr;
    xb && wb || !vb.test(b) ? ub[b] = function (a, b, d) {
      var e, f;
      return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e;
    } : ub[b] = function (a, b, c) {
      if (!c) return a[n.camelCase("default-" + b)] ? b.toLowerCase() : null;
    };
  }), xb && wb || (n.attrHooks.value = {
    set: function set(a, b, c) {
      if (!n.nodeName(a, "input")) return sb && sb.set(a, b, c);
      a.defaultValue = b;
    }
  }), wb || (sb = {
    set: function set(a, b, c) {
      var d = a.getAttributeNode(c);
      if (d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c)) return b;
    }
  }, ub.id = ub.name = ub.coords = function (a, b, c) {
    var d;
    if (!c) return (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null;
  }, n.valHooks.button = {
    get: function get(a, b) {
      var c = a.getAttributeNode(b);
      if (c && c.specified) return c.value;
    },
    set: sb.set
  }, n.attrHooks.contenteditable = {
    set: function set(a, b, c) {
      sb.set(a, "" !== b && b, c);
    }
  }, n.each(["width", "height"], function (a, b) {
    n.attrHooks[b] = {
      set: function set(a, c) {
        if ("" === c) return a.setAttribute(b, "auto"), c;
      }
    };
  })), l.style || (n.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText || void 0;
    },
    set: function set(a, b) {
      return a.style.cssText = b + "";
    }
  });
  var yb = /^(?:input|select|textarea|button|object)$/i,
      zb = /^(?:a|area)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return X(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return a = n.propFix[a] || a, this.each(function () {
        try {
          this[a] = void 0, delete this[a];
        } catch (b) {}
      });
    }
  }), n.extend({
    prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var b = n.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }), l.hrefNormalized || n.each(["href", "src"], function (a, b) {
    n.propHooks[b] = {
      get: function get(a) {
        return a.getAttribute(b, 4);
      }
    };
  }), l.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
    },
    set: function set(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  }), l.enctype || (n.propFix.enctype = "encoding");
  var Ab = /[\t\r\n\f]/g;

  function Bb(a) {
    return n.attr(a, "class") || "";
  }

  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, Bb(this)));
      });

      if ("string" == typeof a && a) {
        b = a.match(F) || [];

        while (c = this[i++]) {
          if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
            g = 0;

            while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, Bb(this)));
      });
      if (!arguments.length) return this.attr("class", "");

      if ("string" == typeof a && a) {
        b = a.match(F) || [];

        while (c = this[i++]) {
          if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) {
            g = 0;

            while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }

            h = n.trim(d), e !== h && n.attr(c, "class", h);
          }
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, Bb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;

        if ("string" === c) {
          d = 0, e = n(this), f = a.match(F) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else void 0 !== a && "boolean" !== c || (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || !1 === a ? "" : n._data(this, "__className__") || ""));
      });
    },
    hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;
      b = " " + a + " ";

      while (c = this[d++]) {
        if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    }
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  });
  var Cb = a.location,
      Db = n.now(),
      Eb = /\?/,
      Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  n.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c,
        d = null,
        e = n.trim(b + "");
    return e && !n.trim(e.replace(Fb, function (a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "");
    })) ? Function("return " + e)() : n.error("Invalid JSON: " + b);
  }, n.parseXML = function (b) {
    var c, d;
    if (!b || "string" != typeof b) return null;

    try {
      a.DOMParser ? (d = new a.DOMParser(), c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b));
    } catch (e) {
      c = void 0;
    }

    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c;
  };
  var Gb = /#.*$/,
      Hb = /([?&])_=[^&]*/,
      Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Kb = /^(?:GET|HEAD)$/,
      Lb = /^\/\//,
      Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Nb = {},
      Ob = {},
      Pb = "*/".concat("*"),
      Qb = Cb.href,
      Rb = Mb.exec(Qb.toLowerCase()) || [];

  function Sb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(F) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Tb(a, b, c, d) {
    var e = {},
        f = a === Ob;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Ub(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    }

    return c && n.extend(!0, a, c), a;
  }

  function Vb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (e) for (g in h) {
      if (h[g] && h[g].test(e)) {
        i.unshift(g);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break;
        }

        d || (d = g);
      }

      f = f || d;
    }
    if (f) return f !== i[0] && i.unshift(f), c[f];
  }

  function Wb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (!(g = j[i + " " + f] || j["* " + f])) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            !0 === g ? g = j[e] : !0 !== j[e] && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (!0 !== g) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Qb,
      type: "GET",
      isLocal: Jb.test(Rb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Pb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a);
    },
    ajaxPrefilter: Sb(Nb),
    ajaxTransport: Sb(Ob),
    ajax: function ajax(b, c) {
      "object" == _typeof(b) && (c = b, b = void 0), c = c || {};
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = n.ajaxSetup({}, c),
          m = l.context || l,
          o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
          p = n.Deferred(),
          q = n.Callbacks("once memory"),
          r = l.statusCode || {},
          s = {},
          t = {},
          u = 0,
          v = "canceled",
          w = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === u) {
            if (!k) {
              k = {};

              while (b = Ib.exec(g)) {
                k[b[1].toLowerCase()] = b[2];
              }
            }

            b = k[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === u ? g : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return u || (a = t[c] = t[c] || a, s[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return u || (l.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (u < 2) for (b in a) {
            r[b] = [r[b], a[b]];
          } else w.always(a[w.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || v;
          return j && j.abort(b), x(0, b), this;
        }
      };
      if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(F) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
      i = n.event && l.global, i && 0 == n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && !1 !== l.contentType || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]);

      for (e in l.headers) {
        w.setRequestHeader(e, l.headers[e]);
      }

      if (l.beforeSend && (!1 === l.beforeSend.call(m, w, l) || 2 === u)) return w.abort();
      v = "abort";

      for (e in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        w[e](l[e]);
      }

      if (j = Tb(Ob, l, c, w)) {
        if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
        l.async && l.timeout > 0 && (h = a.setTimeout(function () {
          w.abort("timeout");
        }, l.timeout));

        try {
          u = 1, j.send(s, x);
        } catch (y) {
          if (!(u < 2)) throw y;
          x(-1, y);
        }
      } else x(-1, "No Transport");

      function x(b, c, d, e) {
        var k,
            s,
            t,
            v,
            x,
            y = c;
        2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && b < 300 || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), (x = w.getResponseHeader("etag")) && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", b < 0 && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")));
      }

      return w;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      cache: !0,
      async: !1,
      global: !1,
      "throws": !0
    });
  }, n.fn.extend({
    wrapAll: function wrapAll(a) {
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = n.isFunction(a);
      return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    }
  });

  function Xb(a) {
    return a.style && a.style.display || n.css(a, "display");
  }

  function Yb(a) {
    if (!n.contains(a.ownerDocument || d, a)) return !0;

    while (a && 1 === a.nodeType) {
      if ("none" === Xb(a) || "hidden" === a.type) return !0;
      a = a.parentNode;
    }

    return !1;
  }

  n.expr.filters.hidden = function (a) {
    return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a);
  }, n.expr.filters.visible = function (a) {
    return !n.expr.filters.hidden(a);
  };
  var Zb = /%20/g,
      $b = /\[\]$/,
      _b = /\r?\n/g,
      ac = /^(?:submit|button|image|reset|file)$/i,
      bc = /^(?:input|select|textarea|keygen)/i;

  function cc(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == _typeof(e) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      cc(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      cc(c, a[c], b, e);
    }
    return d.join("&").replace(Zb, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Y.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(_b, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(_b, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc();
  } : gc;
  var dc = 0,
      ec = {},
      fc = n.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent("onunload", function () {
    for (var a in ec) {
      ec[a](void 0, !0);
    }
  }), l.cors = !!fc && "withCredentials" in fc, (fc = l.ajax = !!fc) && n.ajaxTransport(function (b) {
    if (!b.crossDomain || l.cors) {
      var _c;

      return {
        send: function send(d, e) {
          var f,
              g = b.xhr(),
              h = ++dc;
          if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (f in b.xhrFields) {
            g[f] = b.xhrFields[f];
          }
          b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");

          for (f in d) {
            void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
          }

          g.send(b.hasContent && b.data || null), _c = function c(a, d) {
            var f, i, j;
            if (_c && (d || 4 === g.readyState)) if (delete ec[h], _c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();else {
              j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);

              try {
                i = g.statusText;
              } catch (k) {
                i = "";
              }

              f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404;
            }
            j && e(f, i, j, g.getAllResponseHeaders());
          }, b.async ? 4 === g.readyState ? a.setTimeout(_c) : g.onreadystatechange = ec[h] = _c : _c();
        },
        abort: function abort() {
          _c && _c(void 0, !0);
        }
      };
    }
  });

  function gc() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function hc() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b,
          c = d.head || n("head")[0] || d.documentElement;
      return {
        send: function send(e, f) {
          b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"));
          }, c.insertBefore(b, c.firstChild);
        },
        abort: function abort() {
          b && b.onload(void 0, !0);
        }
      };
    }
  });
  var ic = [],
      jc = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = ic.pop() || n.expando + "_" + Db++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = !1 !== b.jsonp && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data");
    if (h || "jsonp" === b.dataTypes[0]) return e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : !1 !== b.jsonp && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script";
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || d;
    var e = x.exec(a),
        f = !c && [];
    return e ? [b.createElement(e[1])] : (e = ia([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };
  var kc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && kc) return kc.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e || "GET",
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(this, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };

  function lc(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow);
  }

  n.offset = {
    setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    }
  }, n.fn.extend({
    offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });
      var b,
          c,
          d = {
        top: 0,
        left: 0
      },
          e = this[0],
          f = e && e.ownerDocument;
      if (f) return b = f.documentElement, n.contains(b, e) ? (void 0 !== e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d;
    },
    position: function position() {
      if (this[0]) {
        var a,
            b,
            c = {
          top: 0,
          left: 0
        },
            d = this[0];
        return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - n.css(d, "marginTop", !0),
          left: b.left - c.left - n.css(d, "marginLeft", !0)
        };
      }
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;

        while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }

        return a || Pa;
      });
    }
  }), n.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, b) {
    var c = /Y/.test(b);

    n.fn[a] = function (d) {
      return X(this, function (a, d, e) {
        var f = lc(a);
        if (void 0 === e) return f ? b in f ? f[b] : f.document.documentElement[d] : a[d];
        f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e;
      }, a, d, arguments.length, null);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ta(l.pixelPosition, function (a, c) {
      if (c) return c = Ra(a, b), Na.test(c) ? n(a).position()[b] + "px" : c;
    });
  }), n.each({
    Height: "height",
    Width: "width"
  }, function (a, b) {
    n.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (!0 === d || !0 === e ? "margin" : "border");
        return X(this, function (b, c, d) {
          var e;
          return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  }), n.fn.size = function () {
    return this.length;
  }, n.fn.andSelf = n.fn.addBack,  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_0__ = (function () {
    return n;
  }).apply(__WEBPACK_LOCAL_MODULE_0__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__exports));
  var mc = a.jQuery,
      nc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n;
  }, b || (a.jQuery = a.$ = n), n;
});
jQuery.noConflict();
/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */

"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function (a, b, c) {
  function d(c) {
    var d = b.console;
    f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()));
  }

  function e(b, c, e, f) {
    if (Object.defineProperty) try {
      return void Object.defineProperty(b, c, {
        configurable: !0,
        enumerable: !0,
        get: function get() {
          return d(f), e;
        },
        set: function set(a) {
          d(f), e = a;
        }
      });
    } catch (g) {}
    a._definePropertyBroken = !0, b[c] = e;
  }

  a.migrateVersion = "1.4.1";
  var f = {};
  a.migrateWarnings = [], b.console && b.console.log, a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function () {
    f = {}, a.migrateWarnings.length = 0;
  }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");

  var g = a("<input/>", {
    size: 1
  }).attr("size") && a.attrFn,
      h = a.attr,
      i = a.attrHooks.value && a.attrHooks.value.get || function () {
    return null;
  },
      j = a.attrHooks.value && a.attrHooks.value.set || function () {
    return c;
  },
      k = /^(?:input|button)$/i,
      l = /^[238]$/,
      m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      n = /^(?:checked|selected)$/i;

  e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function (b, e, f, i) {
    var j = e.toLowerCase(),
        o = b && b.nodeType;
    return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
      get: function get(b, d) {
        var e,
            f = a.prop(b, d);
        return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c;
      },
      set: function set(b, c, d) {
        var e;
        return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d;
      }
    }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f));
  }, a.attrHooks.value = {
    get: function get(a, b) {
      var c = (a.nodeName || "").toLowerCase();
      return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null);
    },
    set: function set(a, b) {
      var c = (a.nodeName || "").toLowerCase();
      return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void (a.value = b));
    }
  };
  var o,
      p,
      q = a.fn.init,
      r = a.find,
      s = a.parseJSON,
      t = /^\s*</,
      u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
  a.fn.init = function (b, e, f) {
    var g, h;
    return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h);
  }, a.fn.init.prototype = a.fn, a.find = function (a) {
    var b = Array.prototype.slice.call(arguments);
    if ("string" == typeof a && u.test(a)) try {
      document.querySelector(a);
    } catch (c) {
      a = a.replace(v, function (a, b, c, d) {
        return "[" + b + c + '"' + d + '"]';
      });

      try {
        document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a;
      } catch (e) {
        d("Attribute selector with '#' was not fixed: " + b[0]);
      }
    }
    return r.apply(this, b);
  };
  var x;

  for (x in r) {
    Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
  }

  a.parseJSON = function (a) {
    return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null);
  }, a.uaMatch = function (a) {
    a = a.toLowerCase();
    var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
    return {
      browser: b[1] || "",
      version: b[2] || "0"
    };
  }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function () {
    function b(a, c) {
      return new b.fn.init(a, c);
    }

    a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function (d, e) {
      var f = a.fn.init.call(this, d, e, c);
      return f instanceof b ? f : b(f);
    }, b.fn.init.prototype = b.fn;
    var c = b(document);
    return d("jQuery.sub() is deprecated"), b;
  }, a.fn.size = function () {
    return d("jQuery.fn.size() is deprecated; use the .length property"), this.length;
  };
  var y = !1;
  a.swap && a.each(["height", "width", "reliableMarginRight"], function (b, c) {
    var d = a.cssHooks[c] && a.cssHooks[c].get;
    d && (a.cssHooks[c].get = function () {
      var a;
      return y = !0, a = d.apply(this, arguments), y = !1, a;
    });
  }), a.swap = function (a, b, c, e) {
    var f,
        g,
        h = {};
    y || d("jQuery.swap() is undocumented and deprecated");

    for (g in b) {
      h[g] = a.style[g], a.style[g] = b[g];
    }

    f = c.apply(a, e || []);

    for (g in b) {
      a.style[g] = h[g];
    }

    return f;
  }, a.ajaxSetup({
    converters: {
      "text json": a.parseJSON
    }
  });
  var z = a.fn.data;

  a.fn.data = function (b) {
    var e,
        f,
        g = this[0];
    return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f);
  };

  var A = /\/(java|ecma)script/i;
  a.clean || (a.clean = function (b, c, e, f) {
    c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
    var g,
        h,
        i,
        j,
        k = [];
    if (a.merge(k, a.buildFragment(b, c).childNodes), e) for (i = function i(a) {
      return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0;
    }, g = 0; null != (h = k[g]); g++) {
      a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
    }
    return k;
  });

  var B = a.event.add,
      C = a.event.remove,
      D = a.event.trigger,
      E = a.fn.toggle,
      F = a.fn.live,
      G = a.fn.die,
      H = a.fn.load,
      I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
      J = new RegExp("\\b(?:" + I + ")\\b"),
      K = /(?:^|\s)hover(\.\S+|)\b/,
      L = function L(b) {
    return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"));
  };

  a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function (a, b, c, e, f) {
    a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f);
  }, a.event.remove = function (a, b, c, d, e) {
    C.call(this, a, L(b) || "", c, d, e);
  }, a.each(["load", "unload", "error"], function (b, c) {
    a.fn[c] = function () {
      var a = Array.prototype.slice.call(arguments, 0);
      return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this));
    };
  }), a.fn.toggle = function (b, c) {
    if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
    d("jQuery.fn.toggle(handler, handler...) is deprecated");

    var e = arguments,
        f = b.guid || a.guid++,
        g = 0,
        h = function h(c) {
      var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
      return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1;
    };

    for (h.guid = f; g < e.length;) {
      e[g++].guid = f;
    }

    return this.click(h);
  }, a.fn.live = function (b, c, e) {
    return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this);
  }, a.fn.die = function (b, c) {
    return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this);
  }, a.event.trigger = function (a, b, c, e) {
    return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e);
  }, a.each(I.split("|"), function (b, c) {
    a.event.special[c] = {
      setup: function setup() {
        var b = this;
        return b !== document && (a.event.add(document, c + "." + a.guid, function () {
          a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0);
        }), a._data(this, c, a.guid++)), !1;
      },
      teardown: function teardown() {
        return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1;
      }
    };
  }), a.event.special.ready = {
    setup: function setup() {
      this === document && d("'ready' event is deprecated");
    }
  };
  var M = a.fn.andSelf || a.fn.addBack,
      N = a.fn.find;

  if (a.fn.andSelf = function () {
    return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments);
  }, a.fn.find = function (a) {
    var b = N.apply(this, arguments);
    return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b;
  }, a.Callbacks) {
    var O = a.Deferred,
        P = [["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"], ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"], ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]];

    a.Deferred = function (b) {
      var c = O(),
          e = c.promise();
      return c.pipe = e.pipe = function () {
        var b = arguments;
        return d("deferred.pipe() is deprecated"), a.Deferred(function (d) {
          a.each(P, function (f, g) {
            var h = a.isFunction(b[f]) && b[f];
            c[g[1]](function () {
              var b = h && h.apply(this, arguments);
              b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments);
            });
          }), b = null;
        }).promise();
      }, c.isResolved = function () {
        return d("deferred.isResolved is deprecated"), "resolved" === c.state();
      }, c.isRejected = function () {
        return d("deferred.isRejected is deprecated"), "rejected" === c.state();
      }, b && b.call(c, c), c;
    };
  }
}(jQuery, window);

var Bunyad_Tests = function () {
  "use strict";

  var _supportsFn = window.CSS && window.CSS.supports && window.CSS.supports.bind(window.CSS) || window.supportsCSS;

  var _agent = window.navigator.userAgent;
  return {
    vars: !!_supportsFn && (_supportsFn('--f:0') || _supportsFn('--f', 0)),
    ie: /MSIE|Trident/.test(_agent),
    srcset: 'srcset' in document.createElement('img')
  };
}();

var Bunyad_Theme = function ($) {
  "use strict";

  var has_touch = false,
      mega_menus_init = false,
      responsive_menu = false,
      search_active = false,
      sticky_bar_active = false;
  var self = {
    has_sticky_nav: false,
    init: function init() {
      $('.tsi-pinterest, .tsi-pinterest-p').attr('data-pin-custom', '1');
      $('.woocommerce-ordering .drop li a').on('click', function (e) {
        var form = $(this).closest('form');
        form.find('[name=orderby]').val($(this).parent().data('value'));
        form.submit();
        e.preventDefault();
      });
      $('.woocommerce .related > h2, .woocommerce .upsells > h2').addClass('block-head-legacy').wrapInner('<span class="title" />');
      $('.featured-vid, .post-content').fitVids();
      $('.back-to-top').on('click', function () {
        $('html, body').animate({
          scrollTop: 0
        }, 800);
        return false;
      });
      $('.go-back').on('click', function () {
        window.history.back();
        return false;
      });
      $('.posts-ticker ul').each(function () {
        if (!$(this).find('li.active').length) {
          $(this).find('li:first').addClass('active');
        }

        var ticker = $(this);
        window.setInterval(function () {
          var active = ticker.find('li.active');
          active.fadeOut(function () {
            var next = active.next();

            if (!next.length) {
              next = ticker.find('li:first');
            }

            next.addClass('active').fadeIn();
            active.removeClass('active');
          });
        }, 8000);
      });

      if (navigator.platform.toLowerCase().indexOf('win') !== -1) {
        $('html').addClass('is-win');
      }

      if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        var logo = $('.logo-image');

        if ($('.logo-image').length) {
          $('<img />').on('load', function () {
            if (logo.prop('currentSrc') !== logo.prop('src')) {
              logo.prop('width', $(this)[0].naturalWidth).prop('height', $(this)[0].naturalHeight);
            }
          }).attr('src', logo.attr('src'));
        }
      }

      var header = $('.main-head.top-below .inner'),
          bg = header.css('background-image');

      if ($(window).width() > 940 && bg && bg != 'none') {
        var parallax = $('<div class="parallax" />').css('background-image', bg);
        header.append(parallax);
        header.css('background-image', 'none');
        var bottom = parallax.offset().top + parallax.outerHeight(),
            top = parallax.offset().top;
        $(window).on('scroll', function () {
          var scroll = $(window).scrollTop();

          if (scroll > bottom) {
            return;
          }

          var distance = scroll * 0.4;
          requestAnimationFrame(function () {
            parallax.css('transform', 'translate3d(0,' + distance + 'px, 0)');
          });
        });
      }

      $('.service.twitter, .post-share .twitter, .social-share .tsi-twitter').on('click', function (e) {
        e.stopPropagation();
      });
      this.masonry();
      this.lazy_load();
      this.search();
      this.sliders();
      this.responsive_nav();
      this.mega_menus();
      this.sticky_bar();
      this.sticky_sidebar();
      this.lightbox();
      this.likes();
      this.single();
      this.pin_it();
    },
    responsive_nav: function responsive_nav() {
      $(window).on('touchstart', function () {
        has_touch = true;
        $('body').addClass('touch');
      });
      this.init_responsive_nav();
      this.touch_nav();
      var that = this;
      $(window).on('resize orientationchange', function () {
        that.init_responsive_nav();
      });
    },
    init_responsive_nav: function init_responsive_nav() {
      if ($(window).width() > 940 || responsive_menu) {
        return;
      }

      responsive_menu = true;
      var menu_contain = $('.mobile-menu-container');

      if (!menu_contain.find('.mobile-menu').children().length) {
        var mobile_menu = menu_contain.find('.mobile-menu'),
            main_menu = $('.navigation .menu');
        var menu = main_menu.children().clone();

        if (!main_menu.length) {
          return;
        }

        menu.find('.mega-menu .sub-cats').each(function () {
          var container = $(this).closest('.menu-item');
          container.append($(this).find('.sub-nav'));
          container.find('.sub-nav').replaceWith(function () {
            return $('<ul />', {
              html: $(this).html()
            });
          });
          $(this).remove();
        });
        mobile_menu.append(menu);
      }

      $('body').addClass('nav-off-canvas');
      $('.mobile-menu li > a').each(function () {
        if ($(this).parent().children('ul').length) {
          $('<span class="chevron"><i class="tsi tsi-chevron-down"></i></span>').appendTo($(this));
        }
      });
      $('.mobile-menu li .chevron').click(function () {
        $(this).closest('li').find('ul').first().parent().toggleClass('active item-active');
        return false;
      });
      $('.top-bar .mobile-nav, .main-head .mobile-nav').on('click', function () {
        $('.mobile-menu').addClass('active');
        $('body').toggleClass('off-canvas-active');
        $('html').toggleClass('hide-scroll');
      });
      $('.off-canvas .close').click(function () {
        $('body').toggleClass('off-canvas-active');
      });
    },
    touch_nav: function touch_nav() {
      var targets = $('.menu:not(.mobile-menu) a'),
          open_class = 'item-active',
          child_tag = 'ul, .mega-menu';
      targets.each(function () {
        var $this = $(this),
            $parent = $this.parent('li'),
            $siblings = $parent.siblings().find('a');
        $this.click(function (e) {
          if (!has_touch) {
            return;
          }

          var $this = $(this);
          e.stopPropagation();
          $siblings.parent('li').removeClass(open_class);

          if (!$this.parent().hasClass(open_class) && $this.next(child_tag).length > 0 && !$this.parents('.mega-menu.links').length) {
            e.preventDefault();
            $this.parent().addClass(open_class);
          }
        });
      });
      $(document).click(function (e) {
        if (!$(e.target).is('.menu') && !$(e.target).parents('.menu').length) {
          targets.parent('li').removeClass(open_class);
        }
      });
    },
    search: function search() {
      $('.main-head.has-search-overlay .search-link').on('click', function () {
        var overlay = $(this).parent().find('.search-box-overlay');
        search_active = true;

        if (overlay.hasClass('active')) {
          search_active = false;
        }

        overlay.toggleClass('active');
        return false;
      });
      var search_active_alt = false;
      $('.search-alt .top-bar .search-submit').on('click', function () {
        if (!search_active_alt) {
          $(this).closest('form').find('.search-field').addClass('active').focus();
          search_active_alt = true;
          return false;
        }
      });
      $(document).on('click', function (e) {
        if (search_active && !$(e.target).parents('.search-box-overlay').length) {
          $('.main-head.has-search-overlay .search-link').click();
        }

        if (search_active_alt && !$(e.target).parents('.top-bar').length) {
          search_active_alt = false;
          $('.main-head.search-alt .search-submit').closest('form').find('.search-field').removeClass('active');
        }
      }); // $('.main-head.has-search-modal .search-link').magnificPopup({ items: { src: '.search-modal-wrap', type: 'inline' }, removalDelay: 400, focus: 'input', closeBtnInside: false, closeOnBgClick: false, mainClass: 'search-modal', midClick: true, fixedContentPos: true, autoFocusLast: false });
    },
    mega_menus: function mega_menus() {
      this.init_mega_menus();
      $(window).on('resize orientationchange', function () {
        self.init_mega_menus();
      });
    },
    init_mega_menus: function init_mega_menus() {
      if ($(window).width() < 940 || mega_menus_init) {
        return;
      }

      mega_menus_init = true;
      $('.mega-menu .show-next, .mega-menu .show-prev').on('click', function () {
        var current = $(this).parents('.mega-menu').find('.posts.active'),
            action = $(this).hasClass('show-prev') ? 'slickPrev' : 'slickNext';
        current.slick(action);
        return false;
      });
    },
    sticky_bar: function sticky_bar() {
      var nav,
          top_bar = $('.top-bar-content'),
          is_smart = false,
          is_sticky = false,
          is_static = false,
          prev_scroll = 0,
          cur_scroll = 0,
          extra_top = 0,
          nav_top,
          hide_at,
          head = $('.main-head'),
          head_height;
      var calc_head_size = writeRaf(function () {
        if (sticky_bar_active) {
          return;
        }

        var new_height = head.css('min-height', 0).height();
        head.css('min-height', new_height);
        head_height = new_height;
      });

      var set_size = function set_size(skip_calc) {
        if (skip_calc && head_height) {
          return;
        }

        calc_head_size();
      };

      $(window).on('load resize', calc_head_size);

      var init = function init() {
        is_static = false;

        var check_smart = function check_smart() {
          if ($(window).width() < 940) {
            is_smart = true;
          } else {
            is_smart = false;
          }

          if (nav && nav.data('sticky-bar') == 'smart') {
            is_smart = true;
          }
        };

        if ($('.admin-bar').length) {
          extra_top = $('#wpadminbar').height();
        }

        if (head.is('.nav-below, .top-below')) {
          nav = head.hasClass('nav-below') ? $('.navigation.below') : top_bar;

          if (nav.length) {
            nav_top = nav.offset().top - extra_top;
            hide_at = nav_top + 1;
          }
        } else if (head.is('.simple') || head.is('.compact') && $(window).width() >= 940) {
          nav = head.find('.inner').first();
          check_smart();
          nav_top = head.offset().top + head.height() / 2 - extra_top;
          hide_at = nav_top + 200;

          if (is_smart) {
            var parallax = $('.single-creative .featured');

            if (parallax.length) {
              hide_at = nav_top;
              nav_top += parallax.height();
            }
          }
        } else if (top_bar.length) {
          nav = top_bar;
          check_smart();

          if (!is_smart && top_bar.data('sticky-bar')) {
            top_bar.addClass('sticky-bar');
            is_static = true;
          }

          var pos_ele = $('.top-bar');
          nav_top = pos_ele.offset().top - extra_top, hide_at = nav_top + 1;
        }

        check_smart();

        if (is_smart && !sticky_bar_active) {
          prev_scroll = 0;
        }
      };

      init();

      if (!nav) {
        return;
      }

      if (!nav.data('sticky-bar')) {
        return;
      }

      self.has_sticky_nav = true;

      if (nav.find('.sticky-logo').length) {
        nav.addClass('has-logo');
      }

      var remove_sticky = function remove_sticky() {
        if (is_sticky) {
          sticky_bar_active = 0;
          nav.removeClass('sticky-bar');
          set_size(true);
          $(document).trigger('sticky-bar-hide');
        }
      };

      var sticky_writes = writeRaf(function () {
        if (cur_scroll > nav_top) {
          if (is_smart && (!prev_scroll || cur_scroll > prev_scroll)) {
            remove_sticky();
          } else {
            sticky_bar_active = 1;

            if (!is_smart || cur_scroll < prev_scroll - 4) {
              if (!nav.hasClass('sticky-bar')) {
                nav.addClass('sticky-bar no-transition');
                setTimeout(function () {
                  nav.removeClass('no-transition');
                }, 100);
                $(document).trigger('sticky-bar-show');
              }
            }
          }

          prev_scroll = cur_scroll;
        } else {
          if (cur_scroll <= hide_at) {
            prev_scroll = 0;
            remove_sticky();
          }
        }
      });

      var sticky = function sticky() {
        if (!nav.data('sticky-bar') || is_static) {
          return;
        }

        cur_scroll = $(window).scrollTop();
        is_sticky = nav.hasClass('sticky-bar');
        sticky_writes();
      };

      sticky();
      $(window).on('scroll', function () {
        sticky();
      });
      $(window).on('resize orientationchange', function () {
        init();
        sticky();
      });
    },
    sticky_sidebar: function sticky_sidebar() {
      $('.main .sidebar').each(function () {
        if ($(this).hasClass('wpb_content_element')) {
          var parent = $(this).closest('.wpb_column'),
              classes = 'sidebar';

          if ($(this).hasClass('sticky-col')) {
            classes += ' sticky-col';
          }

          parent.addClass(classes);
          $(this).removeClass(classes);
        }
      });
      var sticky = $('.main .sticky-col, .main .sidebar[data-sticky=1]');

      if (!sticky.length) {
        return;
      }

      var add = 20;

      if ($('.admin-bar').length) {
        add += 32;
      }

      if (self.has_sticky_nav) {
        add += 50;
      }

      sticky.each(function () {
        var parent_col = $(this);

        if (!parent_col.find('.theiaStickySidebar').length) {
          parent_col.find('.wpb_wrapper').first().addClass('theiaStickySidebar');
        }

        parent_col.theiaStickySidebar({
          minWidth: 940,
          updateSidebarHeight: false,
          additionalMarginTop: add
        });
      });
      $(window).on('load', function () {
        setTimeout(function () {
          $(window).trigger('resize.TSS');
        }, 2500);
      });
    },
    single: function single() {
      if (!$('body').hasClass('single-post')) {
        return;
      }

      $('.post-share-b .show-more').on('click', function () {
        $(this).parent().addClass('all');
        return false;
      });
      Bunyad_Share_Float.init();
      var creative = $('.single-creative .featured');

      if (creative.length && creative.data('parallax')) {
        if ($(window).width() < 940) {
          creative.removeClass('parallax');
          return;
        }

        creative.addClass('parallax');

        self._parallax.call(creative);
      }

      $(window).on('resize', this.post_navigation);
      this.post_navigation();
    },
    post_navigation: function post_navigation() {
      var initialized = false,
          post_nav = $('.post-nav');

      if (!post_nav.length || $(window).width() < 1300) {
        post_nav.removeClass('post-nav-float').addClass('post-nav-inline');
        return;
      }

      if (initialized) {
        return;
      }

      initialized = true;
      post_nav.addClass('post-nav-float');
      post_nav = post_nav.find('.post');

      if ($('.has-share-float').length) {
        post_nav.addClass('ss-overlap');
      }

      var ele = $('.the-post .post-content'),
          scroll,
          offset,
          win_height,
          show_at,
          hide_at;

      var calc = function calc() {
        offset = ele.offset();
        win_height = $(window).height();
        show_at = offset.top + win_height / 2 + 56;
        hide_at = $('.main-footer').offset().top + win_height / 3;
      };

      calc();

      self._wait_load(calc, {
        'ready': true
      });

      $(window).on('resize.TSS', calc);
      $(window).on('scroll', function () {
        if ($(window).width() < 940) {
          return;
        }

        scroll = $(window).scrollTop() + win_height;
        requestAnimationFrame(function () {
          if (scroll > show_at && scroll < hide_at) {
            if (!post_nav.hasClass('active')) {
              post_nav.addClass('active');
            }
          } else {
            post_nav.removeClass('active');
          }
        });
      });
    },
    _wait_load: function _wait_load(cb, options) {
      options = $.extend({
        'fonts': true,
        'ready': false
      }, options);
      var sel = options.fonts ? '.wf-loading, .ld' : '.ld';

      if ($('html').is(sel) || options.ready && document.readyState !== 'complete') {
        setTimeout(self._wait_load.bind(null, cb, options), 30);
      } else {
        cb();
      }
    },
    _parallax: function _parallax(opts) {
      var container = $(this).find('.wp-post-image');
      var options = {
        speed: 0.4,
        noIos: false
      };
      $.extend(options, opts);

      var render = function render() {
        var target = container;

        if (container.is('img')) {
          var img = container,
              src = img.prop('src');

          if (img.prop('currentSrc')) {
            src = img.prop('currentSrc');
          }

          options.imgSrc = src;
          target = container.parent().parent();
        }

        target.jarallax(options);
      };

      if (container.is('img') && !container.is('[class*=lazyload]')) {
        render();
      }

      container.on('lazyloaded', render);
    },
    sliders: function sliders() {
      if (window.jarallax) {
        var Jarallax = window.jarallax.constructor;
        var orig = Jarallax.prototype.onScroll;

        Jarallax.prototype.onScroll = function (force) {
          if (!force) {
            var ele = $(this.options.elementInViewport);

            if (ele && ele.data('active-only') && !ele.is('.slick-active, .active')) {
              return;
            }
          }

          orig.apply(this, arguments);
        };
      }

      var add_parallax = function add_parallax(slider, parallax_one) {
        var do_parallax = function do_parallax() {
          if ($(window).width() < 940) {
            slider.removeClass('parallax');
            return;
          }

          slider.addClass('parallax');
          var slides = slider.find('.slick-slide');
          slides.each(function () {
            if (parallax_one) {
              $(this).data('active-only', true);
            }

            var opts = {
              elementInViewport: parallax_one ? $(this) : $(this).closest('.slick-slider')
            };

            self._parallax.call(this, opts);
          });
        };

        $(window).on('resize', do_parallax);
        do_parallax();
      };

      $('.feat-grid.static .slides[data-parallax=1]').addClass('parallax').find('.item').each(self._parallax);
      var setup = {};

      setup.main_slider = function (slider) {
        slider.slick({
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: slider.data('autoplay') ? true : false,
          autoplaySpeed: slider.data('speed'),
          arrows: true,
          prevArrow: '<a href="#" class="prev-arrow"><i class="tsi tsi-angle-left"></i></a>',
          nextArrow: '<a href="#" class="next-arrow"><i class="tsi tsi-angle-right"></i></a>',
          touchThreshold: 50,
          dots: false,
          infinite: true,
          responsive: [{
            breakpoint: 940,
            settings: {
              slidesToShow: 1,
              centerMode: false,
              variableWidth: false
            }
          }]
        });
        slider.on('setPosition', function () {
          if ($(window).width() < 940) {
            return;
          }

          var center = $(this).find('.slick-active.slick-center'),
              pos = center.offset(),
              right = pos.left + center.width();
          $(this).find('.prev-arrow').css('left', pos.left + 'px');
          $(this).find('.next-arrow').css('left', right + 'px');
        });
        slider.find('[data-slick-index=0]').addClass('active');
        slider.on('beforeChange', function (e, slick, prev, current) {
          $(this).find('.active').removeClass('active');
          var ele = $(this);
          requestAnimationFrame(function () {
            ele.find('[data-slick-index=' + current + ']').addClass('active');
          }, 1);
        });
      };

      setup.beauty_slider = function (slider, vars) {
        slider.slick($.extend(vars, {
          arrows: true,
          dots: true,
          infinite: true,
          cssEase: 'ease-in'
        }));
      };

      setup.fashion_slider = function (slider, vars) {
        slider.on('init', function (e, slick) {
          self._wait_load(function () {
            $(slick.$slides[0]).addClass('active');
          });
        });
        slider.slick($.extend(vars, {
          arrows: true,
          infinite: true,
          cssEase: 'cubic-bezier(0.4, 0.03, 0, 0.83)',
          speed: 700
        }));
        slider.on('beforeChange', function (e, slick, prev, current) {
          var ele = $(this);
          requestAnimationFrame(function () {
            ele.find('.active').removeClass('active');
            ele.find('[data-slick-index=' + current + ']').addClass('active');
          });
        });
      };

      setup.trendy_slider = function (slider, vars) {
        slider.slick($.extend(vars, {
          arrows: true,
          slidesToShow: 2,
          infinite: true,
          cssEase: 'ease',
          speed: 300,
          autoplay: slider.data('autoplay') ? true : false,
          autoplaySpeed: slider.data('speed'),
          responsive: [{
            breakpoint: 940,
            settings: {
              slidesToShow: 1
            }
          }]
        }));
      };

      setup.large_slider = function (slider, vars) {
        slider.slick($.extend(vars, {
          arrows: true,
          infinite: true,
          cssEase: 'ease',
          speed: 350
        }));
      };

      setup.grid_slider = function (slider, vars) {
        slider.slick($.extend(vars, {
          arrows: true,
          infinite: true,
          cssEase: 'ease',
          speed: 300
        }));
      };

      setup.carousel_slider = function (slider, vars) {
        slider.slick($.extend(vars, {
          arrows: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          cssEase: 'ease-out',
          speed: 500,
          responsive: [{
            breakpoint: 940,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        }));
      };

      setup.bold_slider = function (slider, vars) {
        slider.on('init', function (e, slick) {
          self._wait_load(function () {
            $(slick.$slides[0]).addClass('active');
          });
        });
        slider.slick($.extend(vars, {
          arrows: true,
          infinite: true,
          cssEase: 'ease-in-out',
          speed: 500
        }));
        var nav = slider.parent().find('.post-thumb');
        slider.on('beforeChange', function (e, slick, prev, current) {
          nav.eq(current).click();
          var ele = $(this);
          ele.find('.active').removeClass('active');
          requestAnimationFrame(function () {
            ele.find('[data-slick-index=' + current + ']').addClass('active');
          });
        });
        nav.first().addClass('active');
        nav.on('click', function () {
          var index = $(this).index();
          $(this).addClass('active').siblings().removeClass('active');
          slider.slick('slickGoTo', index);
          return false;
        });
      };

      setup.feat_grid = function (slider, vars) {
        var scroll_num = slider.data('scroll-num') || 1,
            scroll_num_md = slider.data('scroll-num-md');

        if (!scroll_num_md) {
          scroll_num_md = Math.min(2, Math.max(1, scroll_num - 1));
        }

        slider.slick($.extend(vars, {
          arrows: true,
          infinite: true,
          cssEase: 'ease-out',
          speed: 500,
          slidesToShow: scroll_num,
          slidesToScroll: scroll_num_md,
          responsive: [{
            breakpoint: 940,
            settings: {
              slidesToShow: scroll_num_md,
              slidesToScroll: scroll_num_md
            }
          }, {
            breakpoint: 540,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
        }));
      };

      $('.common-slider .slides').each(function () {
        var slider = $(this);
        slider.one('init', function () {
          $(this).addClass('loaded');
        });
        var vars = {
          prevArrow: '<a href="#" class="prev-arrow"><i class="tsi tsi-angle-left"></i></a>',
          nextArrow: '<a href="#" class="next-arrow"><i class="tsi tsi-angle-right"></i></a>',
          autoplay: slider.data('autoplay') ? true : false,
          autoplaySpeed: slider.data('speed'),
          fade: slider.data('animation') == 'fade' ? true : false
        };
        var parallax = slider.data('parallax') || 0,
            parallax_one,
            slider_type = slider.data('slider');

        if (vars.autoplay) {
          slider.on('init afterChange', function (e, slick) {
            var ele = $(this),
                current = ele.find('[data-slick-index="' + slick.currentSlide + '"]');
            var img = current.find('.wp-post-image').first();

            if (!img.length) {
              return;
            }

            var loaded = img.hasClass('lazyloaded') || img.is('img:not(.lazyload)') && img.prop('complete');

            if (!loaded) {
              img.on('lazyloaded load', function (e) {
                slick.slickPlay();
              });
              slick.slickPause();
            }
          });
        }

        switch (slider_type) {
          case 'trendy':
            setup.trendy_slider(slider, vars);
            break;

          case 'beauty':
            setup.beauty_slider(slider, vars);
            break;

          case 'large':
            setup.large_slider(slider, vars);
            break;

          case 'grid':
            setup.grid_slider(slider, vars);
            break;

          case 'carousel':
            setup.carousel_slider(slider, vars);
            break;

          case 'bold':
            setup.bold_slider(slider, vars);
            break;

          case 'feat-grid':
            setup.feat_grid(slider, vars);
            break;

          default:
            var fn = setup[slider_type + '_slider'];

            if (typeof fn === 'function') {
              fn(slider, vars);
            } else {
              setup.main_slider(slider);
            }

            break;
        }

        if (parallax) {
          if (parallax_one) {
            slider.on('beforeChange', function (e, slick, prev, current) {
              $(this).find('.active').removeClass('active');
              var slide = $(this).find('[data-slick-index=' + current + ']');
              slide.addClass('active');
              slide.jarallax('onScroll');
            });
          }

          add_parallax(slider, parallax_one);
        }
      });
      this.post_gallery_slider();
      $(document).on('ajax-pagination', this.post_gallery_slider);
      var carousel_init = false;

      var setup_carousel = function setup_carousel(check_visible) {
        var carousel = $('.posts-carousel .posts, .posts-carousel-b .posts').one('init', function () {
          $(this).addClass('loaded');
          var posts = $(this),
              image = posts.find('.wp-post-image').first();

          var compute = function compute() {
            if (image && image.height() > 0) {
              posts.parent().find('.slick-arrow').css('top', image.height() / 2 + 'px');
            }
          };

          posts.imagesLoaded(compute);
          posts.on('lazyloaded', compute);
        });

        if (check_visible === true && !isInViewport($(carousel).get(0))) {
          return;
        }

        carousel_init = true;
        carousel.each(function () {
          $(this).slick({
            infinite: true,
            slidesToShow: $(this).data('slides') || 4,
            prevArrow: '<a class="prev-post"><i class="tsi tsi-angle-left"></i></a>',
            nextArrow: '<a class="next-post"><i class="tsi tsi-angle-right"></i></a>',
            appendArrows: $(this).parent().find('.navigate'),
            slidesToScroll: $(this).data('slides') || 4,
            responsive: [{
              breakpoint: 940,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }, {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            }, {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }]
          });
        });
      };

      var delay_setup = function delay_setup(cb) {
        if (!carousel_init) {
          requestAnimationFrame(cb || setup_carousel);
        }
      };

      $(window).on('load', function () {
        delay_setup(setup_carousel.bind(this, true));
      }).on('touchstart.ts-cs scroll.ts-cs', function () {
        $(this).off('.ts-cs');
        delay_setup();
      });
      setTimeout(delay_setup, 15000);
      $('.widget-slider .slides').each(function () {
        $(this).slick({
          prevArrow: '<a href="#" class="prev-arrow"><i class="tsi tsi-angle-left"></i></a>',
          nextArrow: '<a href="#" class="next-arrow"><i class="tsi tsi-angle-right"></i></a>',
          autoplay: $(this).data('autoplay') ? true : false,
          autoplaySpeed: 6000,
          infinite: true
        });
      });
      $('.common-slider, .widget-slider').on('click', '.slick-arrow', function (e) {
        e.preventDefault();
      });
      objectFitImages($('img:not([data-src]), img.lazyloaded'));
      $(document).on('lazyloaded', function (e) {
        if ($(e.target).is('img')) {
          objectFitImages(e.target);
        }
      });
    },
    post_gallery_slider: function post_gallery_slider(e) {
      $('.gallery-slider:not(.slick-initialized)').each(function () {
        var slider = $(this);

        var init = function init() {
          var vars = {
            infinite: true,
            slidesToShow: 1,
            prevArrow: '<a href="#" class="prev-arrow"><i class="tsi tsi-angle-left"></i></a>',
            nextArrow: '<a href="#" class="next-arrow"><i class="tsi tsi-angle-right"></i></a>',
            slidesToScroll: 1,
            adaptiveHeight: true
          };
          var parent = slider.closest('.single-creative .featured'),
              parallax;

          if (parent.length) {
            parent.addClass('has-gallery');
            slider.addClass('gallery-slider-lg');
            vars = $.extend(vars, {
              variableWidth: true,
              centerMode: true,
              adaptiveHeight: false,
              responsive: [{
                breakpoint: 940,
                settings: {
                  centerMode: false,
                  variableWidth: false
                }
              }]
            });
          }

          slider.slick(vars);
          !parallax || add_parallax(slider);
        };

        if (e) {
          slider.imagesLoaded(init);
        } else {
          init();
        }
      });
    },
    likes: function likes() {
      if (typeof Sphere_Plugin == 'undefined') {
        return;
      }

      $('.likes-count').on('click', function () {
        var like = $(this);

        if (like.hasClass('voted')) {
          return false;
        }

        $.post(Sphere_Plugin.ajaxurl, {
          action: 'sphere_likes',
          id: $(this).data('id')
        }, function (data) {
          if (data === Object(data)) {
            like.addClass('voted animate').find('.number').html(data.count);
          }
        }, 'json');
        return false;
      });
    },
    lightbox: function lightbox() {
      if (!$.fn.magnificPopup || !$('body').hasClass('has-lb') || !$('body').hasClass('has-lb-s') && $(window).width() < 768) {
        return;
      }

      var filter_images = function filter_images() {
        if (!$(this).attr('href')) {
          return false;
        }

        return $(this).attr('href').match(/\.(jpe?g|webp|png|bmp|gif)($|\?.+?)/);
      };

      var mfp_init = {
        type: 'image',
        tLoading: '',
        mainClass: 'mfp-fade mfp-img-mobile',
        removalDelay: 300,
        callbacks: {
          afterClose: function afterClose() {
            if (this._lastFocusedEl) {
              $(this._lastFocusedEl).addClass('blur');
            }
          }
        }
      };
      var gal_selectors = '.gallery-slider, .post-content .gallery, .post-content .blocks-gallery-item, .post-content .tiled-gallery';
      $(gal_selectors).find('a').has('img').filter(filter_images).addClass('lightbox-gallery-img');
      $('.woocommerce a[data-rel^="prettyPhoto"], a.zoom').addClass('lightbox-gallery-img');
      gal_selectors += ', .woocommerce .images';
      $(gal_selectors).magnificPopup($.extend({}, mfp_init, {
        delegate: '.lightbox-gallery-img',
        gallery: {
          enabled: true
        },
        image: {
          titleSrc: function titleSrc(item) {
            var image = item.el.find('img'),
                caption = item.el.find('.caption').html();
            return caption || image.attr('title') || ' ';
          }
        }
      }));
      var selector = $('.post-content, .main .featured, .single-creative .featured').find('a:not(.lightbox-gallery-img)').has('img, .img');
      selector.add('.post-content, .main .featured, .lightbox-img').filter(filter_images).magnificPopup(mfp_init);
    },
    pin_it: function pin_it() {
      var button = $('body .pinit-btn'),
          the_button = button.prop('outerHTML'),
          index = 1;

      if (has_touch || !the_button) {
        return;
      }

      var show_on = button.data('show-on').split(',');

      var get_image = function get_image(ele) {
        if (!ele.is('img')) {
          ele = ele.find('img').first();
        }

        return ele;
      };

      var setup = function setup() {
        var selectors = [];

        if (show_on.indexOf('single') !== -1) {
          selectors.push('.post-content img, .single-cover .featured, .single:not(.layout-creative) .featured .image-link');
        }

        if (show_on.indexOf('listing') !== -1) {
          selectors.push('.posts-container .post-header .image-link, .posts-container .post-thumb .image-link');
        }

        selectors = selectors.join(', ');
        $(selectors).on('mouseenter', function () {
          var img = get_image($(this)),
              wrap = img.parent();

          if (img.hasClass('nopin') || img.width() < 200 || img.height < 200) {
            return;
          }

          var pos = img.position(),
              media = img.prop('src'),
              url,
              desc,
              button;

          if ($('body').hasClass('single')) {
            url = window.location.href;
          } else {
            if (wrap.hasClass('image-link')) {
              url = wrap.prop('href');
            } else {
              url = img.closest('.post').find('.post-title-alt a, .post-title a').prop('href');
            }

            desc = img.prop('title');
          }

          if (!url) {
            return;
          }

          if (!img.data('pinit-id')) {
            button = $(the_button).appendTo(wrap);

            if (!desc) {
              desc = button.data('heading');
            }

            var url_format = button.prop('href').replace('%media%', encodeURIComponent(media)).replace('%url%', encodeURIComponent(url)).replace('%desc%', encodeURIComponent(desc));
            button.prop('href', url_format);
            button.on('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              window.open($(this).prop('href'), '_blank');
            });
            index++;
            img.attr('data-pinit-id', index);
            button.attr('data-pinit-id', index);
          } else {
            button = wrap.find('a[data-pinit-id=' + img.data('pinit-id') + ']');
          }

          button.addClass('show').css({
            top: pos.top + parseInt(img.css('marginTop')) + parseInt(img.css('paddingTop')),
            left: pos.left + parseInt(img.css('marginLeft')) + parseInt(img.css('paddingLeft'))
          });
        }).on('mouseleave', function (e) {
          var ele = get_image($(this)).parent();

          if ($(e.relatedTarget).hasClass('pinit-btn')) {
            return;
          }

          ele.find('.pinit-btn').removeClass('show');
        });
      };

      setup();
      $(document).on('ajax-pagination', setup);
    },
    lazy_load: function lazy_load() {
      var setRatio = function setRatio(target) {
        target = $(target);
        var ratio = target.data('ratio');

        if (ratio > 0) {
          var container = target.parent(),
              style = container.prop('style');

          if (container.hasClass('media-ratio') && (!Bunyad_Tests.vars || !style.getPropertyValue('--a-ratio'))) {
            container.css('padding-bottom', 100 / ratio + '%');
          }
        }
      };

      var bgLoad = function bgLoad(target, cb) {
        target = $(target);
        var attrs = {};

        if (Bunyad_Tests.srcset && target.data('bgset') && target.data('sizes')) {
          attrs.sizes = target.data('sizes');
          attrs.srcset = target.data('bgset');
        } else {
          attrs.src = target.data('bgsrc');
        }

        setRatio(target);
        var img = document.createElement('img');

        img.onload = function () {
          var bg = "url('" + (img.currentSrc || img.src) + "')";
          var ele = target[0].style;

          if (ele.backgroundImage !== bg) {
            ele.backgroundImage = bg;
          }

          !cb || cb();
          img.onload = null;
          img.onerror = null;
          img = null;
        };

        img.onerror = img.onload;

        for (var i in attrs) {
          img.setAttribute(i, attrs[i]);
        }

        if (img && img.complete && img.naturalWidth > 0 && img.onload) {
          img.onload();
        }
      };

      var type = $('body').prop('className').match(/lazy-([^\s]+)/);

      var loadBgImages = function loadBgImages() {
        var target = this;
        bgLoad(this, function () {
          $(target).trigger('lazyloaded');
        });
      };

      $('.img.bg-cover:not(.lazyload)').each(loadBgImages);

      if (!type || !window.lazySizes) {
        $('.img.bg-cover').each(loadBgImages);
        return;
      }

      type = type[1];
      addEventListener('lazybeforeunveil', function (e) {
        var target = e.target;

        if (!target.getAttribute('data-bgsrc')) {
          return;
        }

        e.detail.firesLoad = true;
        bgLoad(target, function () {
          e.detail.firesLoad = false;
          window.lazySizes.fire(target, '_lazyloaded', {}, true, true);
        });
      });
      var timer;

      var loaded = function loaded() {
        clearTimeout(timer);
        timer = setTimeout(function () {
          $(window).trigger('resize.TSS');
        }, 50);
      };

      $(document).on('lazyloaded', '.main', function (e) {
        loaded();
      });
      window.lazySizes.init();

      if (type != 'smart' || $(window).width() < 1380) {
        return;
      }

      var is_loaded = false;

      var defer_load = function defer_load() {
        if (is_loaded) {
          return;
        }

        $('.lazyload').each(function () {
          lazySizes.loader.unveil($(this).get(0));
        });
        is_loaded = true;
      };

      var events = 'scroll.ll';
      $(window).on(events, function () {
        defer_load();
        $(this).off(events);
      });

      self._wait_load(defer_load, {
        ready: true
      });
    },
    masonry: function masonry(reload, posts, grid) {
      if ($.fn.masonry && $('.posts-dynamic').hasClass('masonry')) {
        var grid = grid || $('.posts-dynamic.masonry .posts-wrap');

        if (!grid.length) {
          return;
        }

        grid.on('layoutComplete', function () {
          requestAnimationFrame(function () {
            $(window).trigger('resize.TSS');
          });
        });

        if (reload && posts) {
          var posts = grid.find(posts).css({
            opacity: 0
          });
          grid.each(function () {
            var block = $(this);
            block.imagesLoaded(function () {
              posts.css({
                opacity: 1
              });
              block.masonry('appended', posts, true);
            });
          });
        } else {
          var reinit = writeRaf(function () {
            $(this).masonry('layout');
          });
          grid.each(function () {
            $(this).masonry();
            $(this).on('lazyloaded', reinit.bind(this));
            $(this).imagesLoaded(reinit.bind(this));
          });
        }
      }
    }
  };

  function writeRaf(fn, options) {
    var running, args, that;

    var run = function run() {
      running = false;
      fn.apply(that, args);
    };

    if (!options) {
      options = {};
    }

    return function () {
      args = arguments;
      that = options.that || this;

      if (!running) {
        running = true;
        requestAnimationFrame(run);
      }
    };
  }

  function isInViewport(element) {
    if (typeof element !== 'undefined') {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var windowWidth = window.innerWidth || document.documentElement.clientWidth;
      var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
      var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
      return vertInView && horInView;
    }
  }

  return self;
}(jQuery);

var Bunyad_Share_Float = function ($) {
  "use strict";

  var intersects = function intersects(el1, el2) {
    var rect1 = el1.getBoundingClientRect();
    var rect2 = el2.getBoundingClientRect();
    return !(rect1.top > rect2.bottom || rect1.right < rect2.left || rect1.bottom < rect2.top || rect1.left > rect2.right);
  };

  var start_at = 0;
  return {
    init: function init() {
      if (!$('.post-share-float').length) {
        return;
      }

      $(window).on('resize load resize.TSS', function () {
        this.init_calc();
        this.sticky();
        this.visibility();
      }.bind(this));
    },
    init_calc: function init_calc() {
      if (!$('body').hasClass('no-sidebar') && !$('.the-post-modern').length) {
        var featured = $('.the-post-header .featured, .single-creative .featured, .single-cover .featured, .single-magazine .featured');

        if (featured.length) {
          start_at = featured.position().top;
        } else {
          var post_header = $('.the-post-header');
          start_at = post_header.length ? post_header.position().top : 0;
        }
      }
    },
    sticky: function sticky() {
      var add = 20;
      add += $('.admin-bar').length ? 32 : 0;
      add += Bunyad_Theme.has_sticky_nav ? 50 : 0;
      var width = $(window).width();
      $('.post-share-float').each(function () {
        var post_foot = $('.the-post-foot').outerHeight(true) + 50;
        $(this).css('height', $('.the-post .post-content').height() + (width > 1500 ? post_foot : 0) + 'px');
        $(this).theiaStickySidebar({
          minWidth: 768,
          updateSidebarHeight: false,
          defaultPosition: 'absolute',
          additionalMarginTop: add
        });
      });
    },
    visibility: function visibility() {
      if ($(window).width() < 768) {
        return false;
      }

      var intersect_sels = ['.the-post-modern .alignfull', '.the-post-modern .alignwide', '.the-post-modern .gallery:not(.aligncenter)', '.the-post-modern .wp-block-gallery:not(.aligncenter)', '.the-post-modern figure.alignnone', '.the-post-modern img.alignnone'];
      var observe = [],
          share_ele = $('.post-share-float');
      $(intersect_sels.join(',')).each(function () {
        observe.push(this);
      });
      $(window).on('scroll', function () {
        var is_hidden = false,
            ele = share_ele.find('.theiaStickySidebar').get(0);

        if ($(window).scrollTop() < start_at) {
          is_hidden = true;
        } else {
          for (var i in observe) {
            if (intersects(ele, observe[i])) {
              is_hidden = true;
              break;
            }
          }
        }

        is_hidden ? share_ele.addClass('is-hidden') : share_ele.removeClass('is-hidden');
      });
    }
  };
}(jQuery);

window.lazySizesConfig = {
  init: false
};

var Bunyad_Pagination = function ($) {
  "use strict";

  var processing = false,
      cache = [];
  var self = {
    init: function init() {
      $('.main').on('click', '.main-pagination .load-button, .block .main-pagination.number a', this.ajax_pagination);
    },
    ajax_pagination: function ajax_pagination(e) {
      if (processing) {
        return false;
      }

      var type = 'more';

      if ($(this).closest('.main-pagination').hasClass('number')) {
        type = 'number';
      }

      var ele = $(this),
          block = ele.closest('.block'),
          post_id = ele.closest('.page-content, .post-content').data('id'),
          page = ele.data('page') + 1,
          is_block = true;

      if (!block.length) {
        is_block = false;
        block = ele.closest('.main-content');
      }

      var params = {
        '_bunyad_act': 'block',
        'page_id': post_id,
        'paged': page,
        'block_id': block.data('id')
      };

      switch (type) {
        case 'more':
          ele.addClass('loading').find('.tsi').addClass('tsi-spin');
          var process = self.process_load_more;
          break;

        case 'number':
          block.find('.block-content').addClass('loading');
          var permalink = ele.attr('href').match(/\/page\/(\d+)\//);

          if (permalink !== null) {
            params.paged = permalink[1];
          } else {
            var src = ele.attr('href').match(/(\?|&)paged?=(\d+)/);
            params.paged = src ? src[2] : 1;
          }

          block.css('height', block.height());

          var process = function process(data) {
            cache[params.paged] = data;
            var content = $(data),
                block_content = block.find('.block-content');
            block_content.removeClass('fade-in-down-lg').html($(data).find('.block-content').html());
            block.css('height', 'auto');
            block_content.addClass('fade-in-down-lg').removeClass('loading');
            $('html, body').animate({
              scrollTop: block.offset().top - 50
            }, 200);
            $(document).trigger('ajax-pagination');
          };

          if (cache[params.paged]) {
            processing = false;
            process(cache[params.paged]);
            return false;
          }

          break;
      }

      if (is_block) {
        var ajax_url = Bunyad.custom_ajax_url;
        ajax_url += ajax_url.indexOf('?') !== -1 ? '&' : '?';
        processing = $.get(ajax_url + $.param(params), function (data) {
          process(data, block, ele);
        }).always(function () {
          processing = false;
        });
      } else {
        var ajax_url = $(this).attr('href');
        processing = $.get(ajax_url, function (data) {
          data = $(data).find('.main-content').get(0);
          process(data, block, ele);
        }).always(function () {
          processing = false;
        });
      }

      return false;
    },
    process_load_more: function process_load_more(data, block, ele) {
      var content = $(data),
          wrap = block.find('.posts-container'),
          posts;

      if (content.find('.posts-container').hasClass('mixed')) {
        posts = content.find('.posts-dynamic').children().addClass('fade-in-up-lg');
        wrap.append(posts);
      } else {
        var container = block.find('.posts-wrap').length ? '.posts-wrap' : '.posts-container';
        posts = content.find(container).children().addClass('fade-in-up-lg');
        block.find(container).append(posts);
      }

      if (wrap.hasClass('masonry')) {
        Bunyad_Theme.masonry(true, posts, wrap.find('.posts-wrap'));
      }

      $(document).trigger('ajax-pagination');
      block.find('.main-pagination').replaceWith(content.find('.main-pagination'));
      ele.removeClass('loading').find('.tsi').removeClass('tsi-spin');
    }
  };
  return self;
}(jQuery);

jQuery(function ($) {
  "use strict";

  var init = function init() {
    Bunyad_Theme.init(); // Bunyad_Pagination.init();
  };

  var rp_support = function rp_support() {
    var relList = document.createElement('link').relList;
    return !!(relList && relList.supports && relList.supports('preload'));
  };

  if (window.ts_ld && !rp_support() && !window.ld_skip && window.loadCSS) {
    var link = $('link[as=style]');

    if (link.length) {
      link = link[0];

      var css_load = function css_load(target) {
        if (target.prop('media') == 'all') {
          init();
          setTimeout(function () {
            $('html').removeClass('ld');
          }, 50);
          return;
        }

        setTimeout(css_load.bind(null, target), 20);
      };

      css_load($(link));
    }
  } else {
    init();
  }
});
jQuery(function ($) {
  $('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<div class="vertical-buttons"><input type="button" value="+" class="plus" /><input type="button" value="-" class="minus" /></div>');
  $(document).on('click', '.plus, .minus', function () {
    var $qty = $(this).closest('.quantity').find('.qty'),
        currentVal = parseFloat($qty.val()),
        max = parseFloat($qty.attr('max')),
        min = parseFloat($qty.attr('min')),
        step = $qty.attr('step');
    if (!currentVal || currentVal === '' || currentVal === 'NaN') currentVal = 0;
    if (max === '' || max === 'NaN') max = '';
    if (min === '' || min === 'NaN') min = 0;
    if (step === 'any' || step === '' || step === undefined || parseFloat(step) === 'NaN') step = 1;

    if ($(this).is('.plus')) {
      if (max && (max == currentVal || currentVal > max)) {
        $qty.val(max);
      } else {
        $qty.val(currentVal + parseFloat(step));
      }
    } else {
      if (min && (min == currentVal || currentVal < min)) {
        $qty.val(min);
      } else if (currentVal > 0) {
        $qty.val(currentVal - parseFloat(step));
      }
    }

    $qty.trigger('change');
  });
});
/*! lazysizes - v4.0.0-rc2 */

!function (a, b) {
  var c = b(a, a.document);
  a.lazySizes = c, "object" == ( false ? 0 : _typeof(module)) && module.exports && (module.exports = c);
}(window, function (a, b) {
  "use strict";

  if (b.getElementsByClassName) {
    var c,
        d,
        e = b.documentElement,
        f = a.Date,
        g = a.HTMLPictureElement,
        h = "addEventListener",
        i = "getAttribute",
        j = a[h],
        k = a.setTimeout,
        l = a.requestAnimationFrame || k,
        m = a.requestIdleCallback,
        n = /^picture$/i,
        o = ["load", "error", "lazyincluded", "_lazyloaded"],
        p = {},
        q = Array.prototype.forEach,
        r = function r(a, b) {
      return p[b] || (p[b] = new RegExp("(\\s|^)" + b + "(\\s|$)")), p[b].test(a[i]("class") || "") && p[b];
    },
        s = function s(a, b) {
      r(a, b) || a.setAttribute("class", (a[i]("class") || "").trim() + " " + b);
    },
        t = function t(a, b) {
      var c;
      (c = r(a, b)) && a.setAttribute("class", (a[i]("class") || "").replace(c, " "));
    },
        u = function u(a, b, c) {
      var d = c ? h : "removeEventListener";
      c && u(a, b), o.forEach(function (c) {
        a[d](c, b);
      });
    },
        v = function v(a, d, e, f, g) {
      var h = b.createEvent("CustomEvent");
      return e || (e = {}), e.instance = c, h.initCustomEvent(d, !f, !g, e), a.dispatchEvent(h), h;
    },
        w = function w(b, c) {
      var e;
      !g && (e = a.picturefill || d.pf) ? e({
        reevaluate: !0,
        elements: [b]
      }) : c && c.src && (b.src = c.src);
    },
        x = function x(a, b) {
      return (getComputedStyle(a, null) || {})[b];
    },
        y = function y(a, b, c) {
      for (c = c || a.offsetWidth; c < d.minSize && b && !a._lazysizesWidth;) {
        c = b.offsetWidth, b = b.parentNode;
      }

      return c;
    },
        z = function () {
      var a,
          c,
          d = [],
          e = [],
          f = d,
          g = function g() {
        var b = f;

        for (f = d.length ? e : d, a = !0, c = !1; b.length;) {
          b.shift()();
        }

        a = !1;
      },
          h = function h(d, e) {
        a && !e ? d.apply(this, arguments) : (f.push(d), c || (c = !0, (b.hidden ? k : l)(g)));
      };

      return h._lsFlush = g, h;
    }(),
        A = function A(a, b) {
      return b ? function () {
        z(a);
      } : function () {
        var b = this,
            c = arguments;
        z(function () {
          a.apply(b, c);
        });
      };
    },
        B = function B(a) {
      var b,
          c = 0,
          d = 125,
          e = 666,
          g = e,
          h = function h() {
        b = !1, c = f.now(), a();
      },
          i = m ? function () {
        m(h, {
          timeout: g
        }), g !== e && (g = e);
      } : A(function () {
        k(h);
      }, !0);

      return function (a) {
        var e;
        (a = a === !0) && (g = 44), b || (b = !0, e = d - (f.now() - c), 0 > e && (e = 0), a || 9 > e && m ? i() : k(i, e));
      };
    },
        C = function C(a) {
      var b,
          c,
          d = 99,
          e = function e() {
        b = null, a();
      },
          g = function g() {
        var a = f.now() - c;
        d > a ? k(g, d - a) : (m || e)(e);
      };

      return function () {
        c = f.now(), b || (b = k(g, d));
      };
    },
        D = function () {
      var g,
          l,
          m,
          o,
          p,
          y,
          D,
          F,
          G,
          H,
          I,
          J,
          K,
          L,
          M = /^img$/i,
          N = /^iframe$/i,
          O = "onscroll" in a && !/glebot/.test(navigator.userAgent),
          P = 0,
          Q = 0,
          R = 0,
          S = -1,
          T = function T(a) {
        R--, a && a.target && u(a.target, T), (!a || 0 > R || !a.target) && (R = 0);
      },
          U = function U(a, c) {
        var d,
            f = a,
            g = "hidden" == x(b.body, "visibility") || "hidden" != x(a, "visibility");

        for (F -= c, I += c, G -= c, H += c; g && (f = f.offsetParent) && f != b.body && f != e;) {
          g = (x(f, "opacity") || 1) > 0, g && "visible" != x(f, "overflow") && (d = f.getBoundingClientRect(), g = H > d.left && G < d.right && I > d.top - 1 && F < d.bottom + 1);
        }

        return g;
      },
          V = function V() {
        var a,
            f,
            h,
            j,
            k,
            m,
            n,
            p,
            q,
            r = c.elements;

        if ((o = d.loadMode) && 8 > R && (a = r.length)) {
          f = 0, S++, null == K && ("expand" in d || (d.expand = e.clientHeight > 500 && e.clientWidth > 500 ? 500 : 370), J = d.expand, K = J * d.expFactor), K > Q && 1 > R && S > 2 && o > 2 && !b.hidden ? (Q = K, S = 0) : Q = o > 1 && S > 1 && 6 > R ? J : P;

          for (; a > f; f++) {
            if (r[f] && !r[f]._lazyRace) if (O) {
              if ((p = r[f][i]("data-expand")) && (m = 1 * p) || (m = Q), q !== m && (y = innerWidth + m * L, D = innerHeight + m, n = -1 * m, q = m), h = r[f].getBoundingClientRect(), (I = h.bottom) >= n && (F = h.top) <= D && (H = h.right) >= n * L && (G = h.left) <= y && (I || H || G || F) && (d.loadHidden || "hidden" != x(r[f], "visibility")) && (l && 3 > R && !p && (3 > o || 4 > S) || U(r[f], m))) {
                if (ba(r[f]), k = !0, R > 9) break;
              } else !k && l && !j && 4 > R && 4 > S && o > 2 && (g[0] || d.preloadAfterLoad) && (g[0] || !p && (I || H || G || F || "auto" != r[f][i](d.sizesAttr))) && (j = g[0] || r[f]);
            } else ba(r[f]);
          }

          j && !k && ba(j);
        }
      },
          W = B(V),
          X = function X(a) {
        s(a.target, d.loadedClass), t(a.target, d.loadingClass), u(a.target, Z), v(a.target, "lazyloaded");
      },
          Y = A(X),
          Z = function Z(a) {
        Y({
          target: a.target
        });
      },
          $ = function $(a, b) {
        try {
          a.contentWindow.location.replace(b);
        } catch (c) {
          a.src = b;
        }
      },
          _ = function _(a) {
        var b,
            c = a[i](d.srcsetAttr);
        (b = d.customMedia[a[i]("data-media") || a[i]("media")]) && a.setAttribute("media", b), c && a.setAttribute("srcset", c);
      },
          aa = A(function (a, b, c, e, f) {
        var g, h, j, l, o, p;
        (o = v(a, "lazybeforeunveil", b)).defaultPrevented || (e && (c ? s(a, d.autosizesClass) : a.setAttribute("sizes", e)), h = a[i](d.srcsetAttr), g = a[i](d.srcAttr), f && (j = a.parentNode, l = j && n.test(j.nodeName || "")), p = b.firesLoad || "src" in a && (h || g || l), o = {
          target: a
        }, p && (u(a, T, !0), clearTimeout(m), m = k(T, 2500), s(a, d.loadingClass), u(a, Z, !0)), l && q.call(j.getElementsByTagName("source"), _), h ? a.setAttribute("srcset", h) : g && !l && (N.test(a.nodeName) ? $(a, g) : a.src = g), f && (h || l) && w(a, {
          src: g
        })), a._lazyRace && delete a._lazyRace, t(a, d.lazyClass), z(function () {
          (!p || a.complete && a.naturalWidth > 1) && (p ? T(o) : R--, X(o));
        }, !0);
      }),
          ba = function ba(a) {
        var b,
            c = M.test(a.nodeName),
            e = c && (a[i](d.sizesAttr) || a[i]("sizes")),
            f = "auto" == e;
        (!f && l || !c || !a[i]("src") && !a.srcset || a.complete || r(a, d.errorClass)) && (b = v(a, "lazyunveilread").detail, f && E.updateElem(a, !0, a.offsetWidth), a._lazyRace = !0, R++, aa(a, b, f, e, c));
      },
          ca = function ca() {
        if (!l) {
          if (f.now() - p < 999) return void k(ca, 999);
          var a = C(function () {
            d.loadMode = 3, W();
          });
          l = !0, d.loadMode = 3, W(), j("scroll", function () {
            3 == d.loadMode && (d.loadMode = 2), a();
          }, !0);
        }
      };

      return {
        _: function _() {
          p = f.now(), c.elements = b.getElementsByClassName(d.lazyClass), g = b.getElementsByClassName(d.lazyClass + " " + d.preloadClass), L = d.hFac, j("scroll", W, !0), j("resize", W, !0), a.MutationObserver ? new MutationObserver(W).observe(e, {
            childList: !0,
            subtree: !0,
            attributes: !0
          }) : (e[h]("DOMNodeInserted", W, !0), e[h]("DOMAttrModified", W, !0), setInterval(W, 999)), j("hashchange", W, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function (a) {
            b[h](a, W, !0);
          }), /d$|^c/.test(b.readyState) ? ca() : (j("load", ca), b[h]("DOMContentLoaded", W), k(ca, 2e4)), c.elements.length ? (V(), z._lsFlush()) : W();
        },
        checkElems: W,
        unveil: ba
      };
    }(),
        E = function () {
      var a,
          c = A(function (a, b, c, d) {
        var e, f, g;
        if (a._lazysizesWidth = d, d += "px", a.setAttribute("sizes", d), n.test(b.nodeName || "")) for (e = b.getElementsByTagName("source"), f = 0, g = e.length; g > f; f++) {
          e[f].setAttribute("sizes", d);
        }
        c.detail.dataAttr || w(a, c.detail);
      }),
          e = function e(a, b, d) {
        var e,
            f = a.parentNode;
        f && (d = y(a, f, d), e = v(a, "lazybeforesizes", {
          width: d,
          dataAttr: !!b
        }), e.defaultPrevented || (d = e.detail.width, d && d !== a._lazysizesWidth && c(a, f, e, d)));
      },
          f = function f() {
        var b,
            c = a.length;
        if (c) for (b = 0; c > b; b++) {
          e(a[b]);
        }
      },
          g = C(f);

      return {
        _: function _() {
          a = b.getElementsByClassName(d.autosizesClass), j("resize", g);
        },
        checkElems: g,
        updateElem: e
      };
    }(),
        F = function F() {
      F.i || (F.i = !0, E._(), D._());
    };

    return function () {
      var b,
          c = {
        lazyClass: "lazyload",
        loadedClass: "lazyloaded",
        loadingClass: "lazyloading",
        preloadClass: "lazypreload",
        errorClass: "lazyerror",
        autosizesClass: "lazyautosizes",
        srcAttr: "data-src",
        srcsetAttr: "data-srcset",
        sizesAttr: "data-sizes",
        minSize: 40,
        customMedia: {},
        init: !0,
        expFactor: 1.5,
        hFac: .8,
        loadMode: 2,
        loadHidden: !0
      };
      d = a.lazySizesConfig || a.lazysizesConfig || {};

      for (b in c) {
        b in d || (d[b] = c[b]);
      }

      a.lazySizesConfig = d, k(function () {
        d.init && F();
      });
    }(), c = {
      cfg: d,
      autoSizer: E,
      loader: D,
      init: F,
      uP: w,
      aC: s,
      rC: t,
      hC: r,
      fire: v,
      gW: y,
      rAF: z
    };
  }
});
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */

!function (a) {
   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  var b,
      c,
      d,
      e,
      f,
      g,
      h = "Close",
      i = "BeforeClose",
      j = "AfterClose",
      k = "BeforeAppend",
      l = "MarkupParse",
      m = "Open",
      n = "Change",
      o = "mfp",
      p = "." + o,
      q = "mfp-ready",
      r = "mfp-removing",
      s = "mfp-prevent-close",
      t = function t() {},
      u = !!window.jQuery,
      v = a(window),
      w = function w(a, c) {
    b.ev.on(o + a + p, c);
  },
      x = function x(b, c, d, e) {
    var f = document.createElement("div");
    return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f;
  },
      y = function y(c, d) {
    b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
  },
      z = function z(c) {
    return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn;
  },
      A = function A() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  },
      B = function B() {
    var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a.transition) return !0;

    for (; b.length;) {
      if (b.pop() + "Transition" in a) return !0;
    }

    return !1;
  };

  t.prototype = {
    constructor: t,
    init: function init() {
      var c = navigator.appVersion;
      b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
    },
    open: function open(c) {
      var e;

      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g,
            h = c.items;

        for (e = 0; e < h.length; e++) {
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break;
          }
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;

      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close();
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close();
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;

      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b);
      }

      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type);
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close();
      }), v.on("resize" + p, function () {
        b.updateSize();
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
          n = {};

      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();

        o && (n.marginRight = o);
      }

      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c;
    },
    close: function close() {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close();
      }, b.st.removalDelay)) : b._close());
    },
    _close: function _close() {
      y(h);
      var c = r + " " + q + " ";

      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e);
      }

      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
    },
    updateSize: function updateSize(a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
            d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d;
      } else b.wH = a || v.height();

      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function updateItemHTML() {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;

      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0;
      }

      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange");
    },
    appendContent: function appendContent(a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content);
    },
    parseEl: function parseEl(c) {
      var d,
          e = b.items[c];

      if (e.tagName ? e = {
        el: a(e)
      } : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) {
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        }

        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"));
      }

      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c];
    },
    addGroup: function addGroup(a, c) {
      var d = function d(_d) {
        _d.mfpEl = this, b._openClick(_d, a, c);
      };

      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)));
    },
    _openClick: function _openClick(c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;

      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0;
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function updateStatus(a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation();
        }), b.container.addClass("mfp-s-" + a), c = a;
      }
    },
    _checkIfClose: function _checkIfClose(c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
            e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;

        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;

        return !1;
      }
    },
    _addClassToMFP: function _addClassToMFP(a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function _removeClassFromMFP(a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function _hasScrollBar(a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function _setFocus() {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function _onFocusIn(c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function _parseMarkup(b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (c, d) {
        if (void 0 === d || d === !1) return !0;

        if (e = c.split("_"), e.length > 1) {
          var f = b.find(p + "-" + e[0]);

          if (f.length > 0) {
            var g = e[1];
            "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d);
          }
        } else b.find(p + "-" + c).html(d);
      });
    },
    _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a);
      }

      return b.scrollbarSize;
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function open(b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b);
    },
    close: function close() {
      return a.magnificPopup.instance && a.magnificPopup.instance.close();
    },
    registerModule: function registerModule(b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) {
      if ("open" === c) {
        var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f);
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    } else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d;
  };

  var C,
      D,
      E,
      F = "inline",
      G = function G() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };

  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function initInline() {
        b.types.push(F), w(h + "." + F, function () {
          G();
        });
      },
      getInline: function getInline(c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
              f = a(c.src);

          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");

          return c.inlineElement = f, f;
        }

        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      }
    }
  });

  var H,
      I = "ajax",
      J = function J() {
    H && a(document.body).removeClass(H);
  },
      K = function K() {
    J(), b.req && b.req.abort();
  };

  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function initAjax() {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
      },
      getAjax: function getAjax(c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function success(d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q);
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
          },
          error: function error() {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src));
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), "";
      }
    }
  });

  var L,
      M = function M(c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;

    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || "";
    }

    return "";
  };

  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function initImage() {
        var c = b.st.image,
            d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p);
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function resizeImage() {
        var a = b.currItem;

        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function _onImageHasSize(a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1));
      },
      findImageSize: function findImageSize(a) {
        var c = 0,
            d = a.img[0],
            e = function e(f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
          }, f);
        };

        e(1);
      },
      getImage: function getImage(c, d) {
        var e = 0,
            f = function f() {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()));
        },
            g = function g() {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0);
        },
            h = b.st.image,
            i = d.find(".mfp-img");

        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1);
        }

        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d);
      }
    }
  });

  var N,
      O = function O() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };

  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function opener(a) {
        return a.is("img") ? a : a.find("img");
      }
    },
    proto: {
      initZoom: function initZoom() {
        var a,
            c = b.st.zoom,
            d = ".zoom";

        if (c.enabled && b.supportsTransition) {
          var e,
              f,
              g = c.duration,
              j = function j(a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
              position: "fixed",
              zIndex: 9999,
              left: 0,
              top: 0,
              "-webkit-backface-visibility": "hidden"
            },
                f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b;
          },
              k = function k() {
            b.content.css("visibility", "visible");
          };

          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded");
                  }, 16);
                }, g);
              }, 16);
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a);
              }

              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset());
              }, 16);
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null);
          });
        }
      },
      _allowZoom: function _allowZoom() {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function _getItemToZoom() {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function _getOffset(c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
            f = parseInt(d.css("padding-top"), 10),
            g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h;
      }
    }
  });

  var P = "iframe",
      Q = "//about:blank",
      R = function R(a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"));
    }
  };

  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function initIframe() {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0));
        }), w(h + "." + P, function () {
          R();
        });
      },
      getIframe: function getIframe(c, d) {
        var e = c.src,
            f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d;
      }
    }
  });

  var S = function S(a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a;
  },
      T = function T(a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
  };

  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function initGallery() {
        var c = b.st.gallery,
            e = ".mfp-gallery";
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0;
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
          });
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
                e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
            e.click(function () {
              b.prev();
            }), f.click(function () {
              b.next();
            }), b.container.append(e.add(f));
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null;
          }, 16);
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null;
        })) : !1;
      },
      next: function next() {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML();
      },
      prev: function prev() {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML();
      },
      goTo: function goTo(a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML();
      },
      preloadNearbyImages: function preloadNearbyImages() {
        var a,
            c = b.st.gallery.preload,
            d = Math.min(c[0], b.items.length),
            e = Math.min(c[1], b.items.length);

        for (a = 1; a <= (b.direction ? e : d); a++) {
          b._preloadItem(b.index + a);
        }

        for (a = 1; a <= (b.direction ? d : e); a++) {
          b._preloadItem(b.index - a);
        }
      },
      _preloadItem: function _preloadItem(c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0;
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d);
          }).attr("src", d.src)), d.preloaded = !0;
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function replaceSrc(a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1
    },
    proto: {
      initRetina: function initRetina() {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
              c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({
              "max-width": b.img[0].naturalWidth / c,
              width: "100%"
            });
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c);
          }));
        }
      }
    }
  }), A();
});

(function ($) {
  $.fn.fitVids = function (options) {
    var settings = {
      customSelector: null,
      ignore: null
    }; // if (!document.getElementById("fit-vids-style")) {
    //     var head = document.head || document.getElementsByTagName("head")[0];
    //     var css = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}";
    //     var div = document.createElement("div");
    //     div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + "</style>";
    //     head.appendChild(div.childNodes[1])
    // }

    if (options) $.extend(settings, options);
    return this.each(function () {
      var selectors = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
      if (settings.customSelector) selectors.push(settings.customSelector);
      var ignoreList = ".fitvidsignore";
      if (settings.ignore) ignoreList = ignoreList + ", " + settings.ignore;
      var $allVideos = $(this).find(selectors.join(","));
      $allVideos = $allVideos.not("object object");
      $allVideos = $allVideos.not(ignoreList);
      $allVideos.each(function () {
        var $this = $(this);
        if ($this.parents(ignoreList).length > 0) return;
        if (this.tagName.toLowerCase() === "embed" && $this.parent("object").length || $this.parent(".fluid-width-video-wrapper").length) return;

        if (!$this.css("height") && !$this.css("width") && (isNaN($this.attr("height")) || isNaN($this.attr("width")))) {
          $this.attr("height", 9);
          $this.attr("width", 16);
        }

        var height = this.tagName.toLowerCase() === "object" || $this.attr("height") && !isNaN(parseInt($this.attr("height"), 10)) ? parseInt($this.attr("height"), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr("width"), 10)) ? parseInt($this.attr("width"), 10) : $this.width(),
            aspectRatio = height / width;

        if (!$this.attr("id")) {
          var videoID = "fitvid" + Math.floor(Math.random() * 999999);
          $this.attr("id", videoID);
        }

        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", aspectRatio * 100 + "%");
        $this.removeAttr("height").removeAttr("width");
      });
    });
  };
})(window.jQuery || window.Zepto);
/*! This file is auto-generated */

/*!
 * imagesLoaded PACKAGED v3.2.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */


(function () {
  "use strict";

  function e() {}

  function t(e, t) {
    for (var n = e.length; n--;) {
      if (e[n].listener === t) return n;
    }

    return -1;
  }

  function n(e) {
    return function () {
      return this[e].apply(this, arguments);
    };
  }

  var i = e.prototype,
      r = this,
      s = r.EventEmitter;
  i.getListeners = function (e) {
    var t,
        n,
        i = this._getEvents();

    if ("object" == _typeof(e)) {
      t = {};

      for (n in i) {
        i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
      }
    } else t = i[e] || (i[e] = []);

    return t;
  }, i.flattenListeners = function (e) {
    var t,
        n = [];

    for (t = 0; t < e.length; t += 1) {
      n.push(e[t].listener);
    }

    return n;
  }, i.getListenersAsObject = function (e) {
    var t,
        n = this.getListeners(e);
    return n instanceof Array && (t = {}, t[e] = n), t || n;
  }, i.addListener = function (e, n) {
    var i,
        r = this.getListenersAsObject(e),
        s = "object" == _typeof(n);

    for (i in r) {
      r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(s ? n : {
        listener: n,
        once: !1
      });
    }

    return this;
  }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
    return this.addListener(e, {
      listener: t,
      once: !0
    });
  }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
    return this.getListeners(e), this;
  }, i.defineEvents = function (e) {
    for (var t = 0; t < e.length; t += 1) {
      this.defineEvent(e[t]);
    }

    return this;
  }, i.removeListener = function (e, n) {
    var i,
        r,
        s = this.getListenersAsObject(e);

    for (r in s) {
      s.hasOwnProperty(r) && (i = t(s[r], n), -1 !== i && s[r].splice(i, 1));
    }

    return this;
  }, i.off = n("removeListener"), i.addListeners = function (e, t) {
    return this.manipulateListeners(!1, e, t);
  }, i.removeListeners = function (e, t) {
    return this.manipulateListeners(!0, e, t);
  }, i.manipulateListeners = function (e, t, n) {
    var i,
        r,
        s = e ? this.removeListener : this.addListener,
        o = e ? this.removeListeners : this.addListeners;
    if ("object" != _typeof(t) || t instanceof RegExp) for (i = n.length; i--;) {
      s.call(this, t, n[i]);
    } else for (i in t) {
      t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? s.call(this, i, r) : o.call(this, i, r));
    }
    return this;
  }, i.removeEvent = function (e) {
    var t,
        n = _typeof(e),
        i = this._getEvents();

    if ("string" === n) delete i[e];else if ("object" === n) for (t in i) {
      i.hasOwnProperty(t) && e.test(t) && delete i[t];
    } else delete this._events;
    return this;
  }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
    var n,
        i,
        r,
        s,
        o = this.getListenersAsObject(e);

    for (r in o) {
      if (o.hasOwnProperty(r)) for (i = o[r].length; i--;) {
        n = o[r][i], n.once === !0 && this.removeListener(e, n.listener), s = n.listener.apply(this, t || []), s === this._getOnceReturnValue() && this.removeListener(e, n.listener);
      }
    }

    return this;
  }, i.trigger = n("emitEvent"), i.emit = function (e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(e, t);
  }, i.setOnceReturnValue = function (e) {
    return this._onceReturnValue = e, this;
  }, i._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0;
  }, i._getEvents = function () {
    return this._events || (this._events = {});
  }, e.noConflict = function () {
    return r.EventEmitter = s, e;
  },  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_LOCAL_MODULE_1__ = (function () {
    return e;
  }).apply(__WEBPACK_LOCAL_MODULE_1__exports = {}, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_LOCAL_MODULE_1__ === undefined && (__WEBPACK_LOCAL_MODULE_1__ = __WEBPACK_LOCAL_MODULE_1__exports)) : 0;
}).call(this), function (e) {
  function t(t) {
    var n = e.event;
    return n.target = n.target || n.srcElement || t, n;
  }

  var n = document.documentElement,
      i = function i() {};

  n.addEventListener ? i = function i(e, t, n) {
    e.addEventListener(t, n, !1);
  } : n.attachEvent && (i = function i(e, n, _i) {
    e[n + _i] = _i.handleEvent ? function () {
      var n = t(e);

      _i.handleEvent.call(_i, n);
    } : function () {
      var n = t(e);

      _i.call(e, n);
    }, e.attachEvent("on" + n, e[n + _i]);
  });

  var r = function r() {};

  n.removeEventListener ? r = function r(e, t, n) {
    e.removeEventListener(t, n, !1);
  } : n.detachEvent && (r = function r(e, t, n) {
    e.detachEvent("on" + t, e[t + n]);

    try {
      delete e[t + n];
    } catch (i) {
      e[t + n] = void 0;
    }
  });
  var s = {
    bind: i,
    unbind: r
  };
   true ? !(__WEBPACK_LOCAL_MODULE_2__factory = (s), (typeof __WEBPACK_LOCAL_MODULE_2__factory === 'function' ? ((__WEBPACK_LOCAL_MODULE_2__module = { id: "eventie/eventie", exports: {}, loaded: false }), (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory.call(__WEBPACK_LOCAL_MODULE_2__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_2__module.exports, __WEBPACK_LOCAL_MODULE_2__module)), (__WEBPACK_LOCAL_MODULE_2__module.loaded = true), __WEBPACK_LOCAL_MODULE_2__ === undefined && (__WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__module.exports)) : __WEBPACK_LOCAL_MODULE_2__ = __WEBPACK_LOCAL_MODULE_2__factory)) : 0;
}(this), function (e, t) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_1__, __WEBPACK_LOCAL_MODULE_2__], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n, i) {
    return t(e, n, i);
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(window, function (e, t, n) {
  function i(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function r(e) {
    return "[object Array]" == f.call(e);
  }

  function s(e) {
    var t = [];
    if (r(e)) t = e;else if ("number" == typeof e.length) for (var n = 0; n < e.length; n++) {
      t.push(e[n]);
    } else t.push(e);
    return t;
  }

  function o(e, t, n) {
    if (!(this instanceof o)) return new o(e, t, n);
    "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = s(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), u && (this.jqDeferred = new u.Deferred());
    var r = this;
    setTimeout(function () {
      r.check();
    });
  }

  function h(e) {
    this.img = e;
  }

  function a(e, t) {
    this.url = e, this.element = t, this.img = new Image();
  }

  var u = e.jQuery,
      c = e.console,
      f = Object.prototype.toString;
  o.prototype = new t(), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [];

    for (var e = 0; e < this.elements.length; e++) {
      var t = this.elements[e];
      this.addElementImages(t);
    }
  }, o.prototype.addElementImages = function (e) {
    "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
    var t = e.nodeType;

    if (t && d[t]) {
      for (var n = e.querySelectorAll("img"), i = 0; i < n.length; i++) {
        var r = n[i];
        this.addImage(r);
      }

      if ("string" == typeof this.options.background) {
        var s = e.querySelectorAll(this.options.background);

        for (i = 0; i < s.length; i++) {
          var o = s[i];
          this.addElementBackgroundImages(o);
        }
      }
    }
  };
  var d = {
    1: !0,
    9: !0,
    11: !0
  };

  o.prototype.addElementBackgroundImages = function (e) {
    for (var t = m(e), n = /url\(['"]*([^'"\)]+)['"]*\)/gi, i = n.exec(t.backgroundImage); null !== i;) {
      var r = i && i[1];
      r && this.addBackground(r, e), i = n.exec(t.backgroundImage);
    }
  };

  var m = e.getComputedStyle || function (e) {
    return e.currentStyle;
  };

  return o.prototype.addImage = function (e) {
    var t = new h(e);
    this.images.push(t);
  }, o.prototype.addBackground = function (e, t) {
    var n = new a(e, t);
    this.images.push(n);
  }, o.prototype.check = function () {
    function e(e, n, i) {
      setTimeout(function () {
        t.progress(e, n, i);
      });
    }

    var t = this;
    if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete();

    for (var n = 0; n < this.images.length; n++) {
      var i = this.images[n];
      i.once("progress", e), i.check();
    }
  }, o.prototype.progress = function (e, t, n) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e, t), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && c && c.log("progress: " + n, e, t);
  }, o.prototype.complete = function () {
    var e = this.hasAnyBroken ? "fail" : "done";

    if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
      var t = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[t](this);
    }
  }, h.prototype = new t(), h.prototype.check = function () {
    var e = this.getIsImageComplete();
    return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), n.bind(this.proxyImage, "load", this), n.bind(this.proxyImage, "error", this), n.bind(this.img, "load", this), n.bind(this.img, "error", this), void (this.proxyImage.src = this.img.src));
  }, h.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth;
  }, h.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("progress", this, this.img, t);
  }, h.prototype.handleEvent = function (e) {
    var t = "on" + e.type;
    this[t] && this[t](e);
  }, h.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents();
  }, h.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents();
  }, h.prototype.unbindEvents = function () {
    n.unbind(this.proxyImage, "load", this), n.unbind(this.proxyImage, "error", this), n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
  }, a.prototype = new h(), a.prototype.check = function () {
    n.bind(this.img, "load", this), n.bind(this.img, "error", this), this.img.src = this.url;
    var e = this.getIsImageComplete();
    e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
  }, a.prototype.unbindEvents = function () {
    n.unbind(this.img, "load", this), n.unbind(this.img, "error", this);
  }, a.prototype.confirm = function (e, t) {
    this.isLoaded = e, this.emit("progress", this, this.element, t);
  }, o.makeJQueryPlugin = function (t) {
    t = t || e.jQuery, t && (u = t, u.fn.imagesLoaded = function (e, t) {
      var n = new o(this, e, t);
      return n.jqDeferred.promise(u(this));
    });
  }, o.makeJQueryPlugin(), o;
});
/*! npm.im/object-fit-images 3.2.4 */

var objectFitImages = function () {
  "use strict";

  function t(t, e) {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E";
  }

  function e(t) {
    if (t.srcset && !p && window.picturefill) {
      var e = window.picturefill._;
      t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
        reselect: !0
      }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
        reselect: !0
      })), t.currentSrc = t[e.ns].curSrc || t.src;
    }
  }

  function i(t) {
    for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));) {
      r[e[1]] = e[2];
    }

    return r;
  }

  function r(e, i, r) {
    var n = t(i || 1, r || 0);
    b.call(e, "src") !== n && h.call(e, "src", n);
  }

  function n(t, e) {
    t.naturalWidth ? e(t) : setTimeout(n, 100, t, e);
  }

  function c(t) {
    var c = i(t),
        o = t[l];

    if (c["object-fit"] = c["object-fit"] || "fill", !o.img) {
      if ("fill" === c["object-fit"]) return;
      if (!o.skipTest && f && !c["object-position"]) return;
    }

    if (!o.img) {
      o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");

      try {
        s(t);
      } catch (t) {
        window.console && console.warn("https://bit.ly/ofi-old-browser");
      }
    }

    e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () {
      o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto";
    }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) {
      r(t, e.naturalWidth, e.naturalHeight);
    });
  }

  function s(t) {
    var e = {
      get: function get(e) {
        return t[l].img[e ? e : "src"];
      },
      set: function set(e, i) {
        return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e;
      }
    };
    Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", {
      get: function get() {
        return e.get("currentSrc");
      }
    }), Object.defineProperty(t, "srcset", {
      get: function get() {
        return e.get("srcset");
      },
      set: function set(t) {
        return e.set(t, "srcset");
      }
    });
  }

  function o() {
    function t(t, e) {
      return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t;
    }

    d || (HTMLImageElement.prototype.getAttribute = function (e) {
      return b.call(t(this, e), e);
    }, HTMLImageElement.prototype.setAttribute = function (e, i) {
      return h.call(t(this, e), e, String(i));
    });
  }

  function a(t, e) {
    var i = !y && !t;
    if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1;
    "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);

    for (var r = 0; r < t.length; r++) {
      t[r][l] = t[r][l] || {
        skipTest: e.skipTest
      }, c(t[r]);
    }

    i && (document.body.addEventListener("load", function (t) {
      "IMG" === t.target.tagName && a(t.target, {
        skipTest: e.skipTest
      });
    }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, {
      skipTest: e.skipTest
    }));
  }

  var l = "bfred-it:object-fit-images",
      u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
      g = "undefined" == typeof Image ? {
    style: {
      "object-position": 1
    }
  } : new Image(),
      f = ("object-fit" in g.style),
      d = ("object-position" in g.style),
      m = ("background-size" in g.style),
      p = "string" == typeof g.currentSrc,
      b = g.getAttribute,
      h = g.setAttribute,
      y = !1;
  return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a;
}();
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */


!function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      var a = o(t, e);
      a || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), i(document).on("scroll." + t.namespace, function (t, e) {
        return function (a) {
          var n = o(t, e);
          n && i(this).unbind(a);
        };
      }(t, e)), i(window).on("resize." + t.namespace, function (t, e) {
        return function (a) {
          var n = o(t, e);
          n && i(this).unbind(a);
        };
      }(t, e)));
    }

    function o(t, e) {
      return t.initialized === !0 || !(i("body").width() < t.minWidth) && (a(t, e), !0);
    }

    function a(t, e) {
      t.initialized = !0;
      var o = i("#theia-sticky-sidebar-stylesheet-" + t.namespace);
      0 === o.length, e.each(function () {
        function e() {
          a.fixedScrollTop = 0, a.sidebar.css({
            "min-height": "1px"
          }), a.stickySidebar.css({
            position: "static",
            width: "",
            transform: "none"
          });
        }

        function o(t) {
          var e = t.height();
          return t.children().each(function () {
            e = Math.max(e, i(this).height());
          }), e;
        }

        var a = {};

        if (a.sidebar = i(this), a.options = t || {}, a.container = i(a.options.containerSelector), 0 == a.container.length && (a.container = a.sidebar.parent()), a.sidebar.parents().css("-webkit-transform", "none"), a.sidebar.css({
          position: a.options.defaultPosition,
          overflow: "visible",
          "-webkit-box-sizing": "border-box",
          "-moz-box-sizing": "border-box",
          "box-sizing": "border-box"
        }), a.stickySidebar = a.sidebar.find(".theiaStickySidebar"), 0 == a.stickySidebar.length) {
          var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
          a.sidebar.find("script").filter(function (i, t) {
            return 0 === t.type.length || t.type.match(s);
          }).remove(), a.stickySidebar = i("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()), a.sidebar.append(a.stickySidebar);
        }

        a.marginBottom = parseInt(a.sidebar.css("margin-bottom")), a.paddingTop = parseInt(a.sidebar.css("padding-top")), a.paddingBottom = parseInt(a.sidebar.css("padding-bottom"));
        var r = a.stickySidebar.offset().top,
            d = a.stickySidebar.outerHeight();
        a.stickySidebar.css("padding-top", 1), a.stickySidebar.css("padding-bottom", 1), r -= a.stickySidebar.offset().top, d = a.stickySidebar.outerHeight() - d - r, 0 == r ? (a.stickySidebar.css("padding-top", 0), a.stickySidebarPaddingTop = 0) : a.stickySidebarPaddingTop = 1, 0 == d ? (a.stickySidebar.css("padding-bottom", 0), a.stickySidebarPaddingBottom = 0) : a.stickySidebarPaddingBottom = 1, a.previousScrollTop = null, a.fixedScrollTop = 0, e(), a.onScroll = function (a) {
          if (a.stickySidebar.is(":visible")) {
            if (i("body").width() < a.options.minWidth) return void e();

            if (a.options.disableOnResponsiveLayouts) {
              var s = a.sidebar.outerWidth("none" == a.sidebar.css("float"));
              if (s + 50 > a.container.width()) return void e();
            }

            var r = i(document).scrollTop(),
                d = "static";

            if (r >= a.sidebar.offset().top + (a.paddingTop - a.options.additionalMarginTop)) {
              var c,
                  p = a.paddingTop + t.additionalMarginTop,
                  b = a.paddingBottom + a.marginBottom + t.additionalMarginBottom,
                  l = a.sidebar.offset().top,
                  f = a.sidebar.offset().top + o(a.container),
                  h = 0 + t.additionalMarginTop,
                  g = a.stickySidebar.outerHeight() + p + b < i(window).height();
              c = g ? h + a.stickySidebar.outerHeight() : i(window).height() - a.marginBottom - a.paddingBottom - t.additionalMarginBottom;
              var u = l - r + a.paddingTop,
                  S = f - r - a.paddingBottom - a.marginBottom,
                  y = a.stickySidebar.offset().top - r,
                  m = a.previousScrollTop - r;
              "fixed" == a.stickySidebar.css("position") && "modern" == a.options.sidebarBehavior && (y += m), "stick-to-top" == a.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == a.options.sidebarBehavior && (y = c - a.stickySidebar.outerHeight()), y = m > 0 ? Math.min(y, h) : Math.max(y, c - a.stickySidebar.outerHeight()), y = Math.max(y, u), y = Math.min(y, S - a.stickySidebar.outerHeight());
              var k = a.container.height() == a.stickySidebar.outerHeight();
              d = (k || y != h) && (k || y != c - a.stickySidebar.outerHeight()) ? r + y - a.sidebar.offset().top - a.paddingTop <= t.additionalMarginTop ? "static" : "absolute" : "fixed";
            }

            if ("fixed" == d) {
              var v = i(document).scrollLeft();
              a.stickySidebar.css({
                position: "fixed",
                width: n(a.stickySidebar) + "px",
                transform: "translateY(" + y + "px)",
                left: a.sidebar.offset().left + parseInt(a.sidebar.css("padding-left")) - v + "px",
                top: "0px"
              });
            } else if ("absolute" == d) {
              var x = {};
              "absolute" != a.stickySidebar.css("position") && (x.position = "absolute", x.transform = "translateY(" + (r + y - a.sidebar.offset().top - a.stickySidebarPaddingTop - a.stickySidebarPaddingBottom) + "px)", x.top = "0px"), x.width = n(a.stickySidebar) + "px", x.left = "", a.stickySidebar.css(x);
            } else "static" == d && e();

            "static" != d && 1 == a.options.updateSidebarHeight && a.sidebar.css({
              "min-height": a.stickySidebar.outerHeight() + a.stickySidebar.offset().top - a.sidebar.offset().top + a.paddingBottom
            }), a.previousScrollTop = r;
          }
        }, a.onScroll(a), i(document).on("scroll." + a.options.namespace, function (i) {
          return function () {
            i.onScroll(i);
          };
        }(a)), i(window).on("resize." + a.options.namespace, function (i) {
          return function () {
            i.stickySidebar.css({
              position: "static"
            }), i.onScroll(i);
          };
        }(a)), "undefined" != typeof ResizeSensor && new ResizeSensor(a.stickySidebar[0], function (i) {
          return function () {
            i.onScroll(i);
          };
        }(a));
      });
    }

    function n(i) {
      var t;

      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}

      return "undefined" == typeof t && (t = i.width()), t;
    }

    var s = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS"
    };
    return t = i.extend(s, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, e(t, this), this;
  };
}(jQuery);
!function (a) {
  "use strict";

   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_FACTORY__ = (a),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(function (a) {
  "use strict";

  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f,
          e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function customPaging(a, b) {
          return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (b + 1) + "</button>";
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.hidden = "hidden", e.paused = !1, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, f, d), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0), e.checkResponsive(!0);
    }

    var b = 0;
    return c;
  }(), b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b);
    }), e.$slidesCache = e.$slides, e.reinit();
  }, b.prototype.animateHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({
        height: b
      }, a.options.speed);
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {},
        e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
      left: b
    }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
      top: b
    }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
      animStart: e.currentLeft
    }).animate({
      animStart: b
    }, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function step(a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
      },
      complete: function complete() {
        c && c.call();
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call();
    }, e.options.speed));
  }, b.prototype.asNavFor = function (b) {
    var c = this,
        d = c.options.asNavFor;
    d && null !== d && (d = a(d).not(c.$slider)), null !== d && "object" == _typeof(d) && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0);
    });
  }, b.prototype.applyTransition = function (a) {
    var b = this,
        c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer), a.slideCount > a.options.slidesToShow && a.paused !== !0 && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer);
  }, b.prototype.autoPlayIterator = function () {
    var a = this;
    a.options.infinite === !1 ? 1 === a.direction ? (a.currentSlide + 1 === a.slideCount - 1 && (a.direction = 0), a.slideHandler(a.currentSlide + a.options.slidesToScroll)) : (a.currentSlide - 1 === 0 && (a.direction = 1), a.slideHandler(a.currentSlide - a.options.slidesToScroll)) : a.slideHandler(a.currentSlide + a.options.slidesToScroll);
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }));
  }, b.prototype.buildDots = function () {
    var c,
        d,
        b = this;

    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (d = '<ul class="' + b.options.dotsClass + '">', c = 0; c <= b.getDotCount(); c += 1) {
        d += "<li>" + b.options.customPaging.call(this, b, c) + "</li>";
      }

      d += "</ul>", b.$dots = a(d).appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
  }, b.prototype.buildRows = function () {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        a = this;

    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");

        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");

          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k));
          }

          i.appendChild(j);
        }

        e.appendChild(i);
      }

      a.$slider.html(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      });
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e,
        f,
        g,
        d = this,
        h = !1,
        i = d.$slider.width(),
        j = window.innerWidth || a(window).width();

    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;

      for (e in d.breakpoints) {
        d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      }

      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f,
        g,
        h,
        d = this,
        e = a(b.target);

    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case "previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;

      case "next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;

      case "index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;

      default:
        return;
    }
  }, b.prototype.checkNavigable = function (a) {
    var c,
        d,
        b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
      if (a < c[e]) {
        a = d;
        break;
      }

      d = c[e];
    }
    return a;
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide), b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).off("mouseenter.slick", a.proxy(b.setPaused, b, !0)).off("mouseleave.slick", a.proxy(b.setPaused, b, !1))), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.$list.off("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.cleanUpRows = function () {
    var b,
        a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.html(b));
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"));
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
  }, b.prototype.disableTransition = function (a) {
    var b = this,
        c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({
      zIndex: c.options.zIndex
    }), c.$slides.eq(a).animate({
      opacity: 1
    }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call();
    }, c.options.speed));
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }));
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide;
  }, b.prototype.getDotCount = function () {
    var a = this,
        b = 0,
        c = 0,
        d = 0;
    if (a.options.infinite === !0) for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    } else if (a.options.centerMode === !0) d = a.slideCount;else for (; b < a.slideCount;) {
      ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }
    return d - 1;
  }, b.prototype.getLeft = function (a) {
    var c,
        d,
        f,
        b = this,
        e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a];
  }, b.prototype.getNavigableIndexes = function () {
    var e,
        a = this,
        b = 0,
        c = 0,
        d = [];

    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
      d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    }

    return d;
  }, b.prototype.getSlick = function () {
    return this;
  }, b.prototype.getSlideCount = function () {
    var c,
        d,
        e,
        b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({
      data: {
        message: "index",
        index: parseInt(a)
      }
    }, b);
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA();
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.on("click.slick", {
      message: "previous"
    }, a.changeSlide), a.$nextArrow.on("click.slick", {
      message: "next"
    }, a.changeSlide));
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
      message: "index"
    }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.options.autoplay === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.setPaused, b, !0)).on("mouseleave.slick", a.proxy(b.setPaused, b, !1));
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.$list.on("mouseenter.slick", a.proxy(b.setPaused, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.setPaused, b, !1)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show(), a.options.autoplay === !0 && a.autoPlay();
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
      data: {
        message: "previous"
      }
    }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
      data: {
        message: "next"
      }
    }));
  }, b.prototype.lazyLoad = function () {
    function g(b) {
      a("img[data-lazy]", b).each(function () {
        var b = a(this),
            c = a(this).attr("data-lazy"),
            d = document.createElement("img");
        d.onload = function () {
          b.animate({
            opacity: 0
          }, 100, function () {
            b.attr("src", c).animate({
              opacity: 1
            }, 200, function () {
              b.removeAttr("data-lazy").removeClass("slick-loading");
            });
          });
        }, d.src = c;
      });
    }

    var c,
        d,
        e,
        f,
        b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = e + b.options.slidesToShow, b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({
      opacity: 1
    }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "next"
      }
    });
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition();
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0;
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.paused = !1, a.autoPlay();
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay === !0 && b.paused === !1 && b.autoPlay(), b.options.accessibility === !0 && b.initADA();
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({
      data: {
        message: "previous"
      }
    });
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault();
  }, b.prototype.progressiveLazyLoad = function () {
    var c,
        d,
        b = this;
    c = a("img[data-lazy]", b.$slider).length, c > 0 && (d = a("img[data-lazy]", b.$slider).first(), d.attr("src", null), d.attr("src", d.attr("data-lazy")).removeClass("slick-loading").load(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad(), b.options.adaptiveHeight === !0 && b.setPosition();
    }).error(function () {
      d.removeAttr("data-lazy"), b.progressiveLazyLoad();
    }));
  }, b.prototype.refresh = function (b) {
    var d,
        e,
        c = this;
    e = c.slideCount - c.options.slidesToShow, c.options.infinite || (c.slideCount <= c.options.slidesToShow ? c.currentSlide = 0 : c.currentSlide > e && (c.currentSlide = e)), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {
      currentSlide: d
    }), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1);
  }, b.prototype.registerBreakpoints = function () {
    var c,
        d,
        e,
        b = this,
        f = b.options.responsive || null;

    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";

      for (c in f) {
        if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
          for (; e >= 0;) {
            b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
          }

          b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
        }
      }

      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a;
      });
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses(0), b.setPosition(), b.$slider.trigger("reInit", [b]), b.options.autoplay === !0 && b.focusHandler();
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
    }, 50));
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
  }, b.prototype.setCSS = function (a) {
    var d,
        e,
        b = this,
        c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
      padding: "0px " + a.options.centerPadding
    }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
      padding: a.options.centerPadding + " 0px"
    })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
  }, b.prototype.setFade = function () {
    var c,
        b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({
        position: "relative",
        left: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      });
    }), b.$slides.eq(b.currentSlide).css({
      zIndex: b.options.zIndex - 1,
      opacity: 1
    });
  }, b.prototype.setHeight = function () {
    var a = this;

    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b);
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function (b, c, d) {
    var f,
        g,
        e = this;
    if ("responsive" === b && "array" === a.type(c)) for (g in c) {
      if ("array" !== a.type(e.options.responsive)) e.options.responsive = [c[g]];else {
        for (f = e.options.responsive.length - 1; f >= 0;) {
          e.options.responsive[f].breakpoint === c[g].breakpoint && e.options.responsive.splice(f, 1), f--;
        }

        e.options.responsive.push(c[g]);
      }
    } else e.options[b] = c;
    d === !0 && (e.unload(), e.reinit());
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
  }, b.prototype.setProps = function () {
    var a = this,
        b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
  }, b.prototype.setSlideClasses = function (a) {
    var c,
        d,
        e,
        f,
        b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
  }, b.prototype.setupInfinite = function () {
    var c,
        d,
        e,
        b = this;

    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
        d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      }

      for (c = 0; e > c; c += 1) {
        d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      }

      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "");
      });
    }
  }, b.prototype.setPaused = function (a) {
    var b = this;
    b.options.autoplay === !0 && b.options.pauseOnHover === !0 && (b.paused = a, a ? b.autoPlayClear() : b.autoPlay());
  }, b.prototype.selectHandler = function (b) {
    var c = this,
        d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
        e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
  }, b.prototype.slideHandler = function (a, b, c) {
    var d,
        e,
        f,
        g,
        h = null,
        i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d);
    }) : i.postSlide(d))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e);
    })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e);
    }) : i.postSlide(e))));
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
  }, b.prototype.swipeDirection = function () {
    var a,
        b,
        c,
        d,
        e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "left" : "right" : "vertical";
  }, b.prototype.swipeEnd = function (a) {
    var c,
        b = this;
    if (b.dragging = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) switch (b.swipeDirection()) {
      case "left":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.slideHandler(c), b.currentDirection = 0, b.touchObject = {}, b.$slider.trigger("swipe", [b, "left"]);
        break;

      case "right":
        c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.slideHandler(c), b.currentDirection = 1, b.touchObject = {}, b.$slider.trigger("swipe", [b, "right"]);
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case "start":
        b.swipeStart(a);
        break;

      case "move":
        b.swipeMove(a);
        break;

      case "end":
        b.swipeEnd(a);
    }
  }, b.prototype.swipeMove = function (a) {
    var d,
        e,
        f,
        g,
        h,
        b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
  }, b.prototype.swipeStart = function (a) {
    var c,
        b = this;
    return 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy();
  }, b.prototype.updateArrows = function () {
    var b,
        a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
  }, b.prototype.visibility = function () {
    var a = this;
    document[a.hidden] ? (a.paused = !0, a.autoPlayClear()) : a.options.autoplay === !0 && (a.paused = !1, a.autoPlay());
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + b.instanceUid + c
      });
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      });
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
  }, b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    });
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.on("focus.slick blur.slick", "*", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.isPlay && (d.is(":focus") ? (b.autoPlayClear(), b.paused = !0) : (b.paused = !1, b.autoPlay()));
      }, 0);
    });
  }, a.fn.slick = function () {
    var f,
        g,
        a = this,
        c = arguments[0],
        d = Array.prototype.slice.call(arguments, 1),
        e = a.length;

    for (f = 0; e > f; f++) {
      if ("object" == _typeof(c) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
    }

    return a;
  };
});
/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.5
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */

!function (n) {
  var o = {};

  function i(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
  }

  i.m = n, i.c = o, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (t, e) {
    if (1 & e && (t = i(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) {
      i.d(n, o, function (e) {
        return t[e];
      }.bind(null, o));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 10);
}([,, function (e, t) {
  e.exports = function (e) {
    "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", function () {
      "interactive" === document.readyState && e.call();
    }) : document.addEventListener && document.addEventListener("DOMContentLoaded", e);
  };
}, function (n, e, t) {
  (function (e) {
    var t = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
    n.exports = t;
  }).call(this, t(4));
}, function (e, t) {
  function n(e) {
    return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  var o = function () {
    return this;
  }();

  try {
    o = o || new Function("return this")();
  } catch (e) {
    "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window);
  }

  e.exports = o;
},,,,,, function (e, t, n) {
  e.exports = n(11);
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var o = n(2),
      i = n.n(o),
      a = n(3),
      r = n(12);

  function l(e) {
    return (l = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  var s,
      c,
      u = a.window.jarallax;
  a.window.jarallax = r["default"], a.window.jarallax.noConflict = function () {
    return a.window.jarallax = u, this;
  }, void 0 !== a.jQuery && ((s = function s() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) {
      t[n] = arguments[n];
    }

    Array.prototype.unshift.call(t, this);
    var o = r["default"].apply(a.window, t);
    return "object" !== l(o) ? o : this;
  }).constructor = r["default"].constructor, c = a.jQuery.fn.jarallax, a.jQuery.fn.jarallax = s, a.jQuery.fn.jarallax.noConflict = function () {
    return a.jQuery.fn.jarallax = c, this;
  }), i()(function () {
    Object(r["default"])(document.querySelectorAll("[data-jarallax]"));
  });
}, function (e, t, n) {
  "use strict";

  n.r(t);
  var o = n(2),
      i = n.n(o),
      b = n(3);

  function c(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
      var n = [],
          o = !0,
          i = !1,
          a = void 0;

      try {
        for (var r, l = e[Symbol.iterator](); !(o = (r = l.next()).done) && (n.push(r.value), !t || n.length !== t); o = !0) {
          ;
        }
      } catch (e) {
        i = !0, a = e;
      } finally {
        try {
          o || null == l["return"] || l["return"]();
        } finally {
          if (i) throw a;
        }
      }

      return n;
    }(e, t) || function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return a(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t);
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function a(e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, o = new Array(t); n < t; n++) {
      o[n] = e[n];
    }

    return o;
  }

  function u(e) {
    return (u = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e);
    })(e);
  }

  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }

  var l,
      h,
      p = b.window.navigator,
      d = -1 < p.userAgent.indexOf("MSIE ") || -1 < p.userAgent.indexOf("Trident/") || -1 < p.userAgent.indexOf("Edge/"),
      s = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(p.userAgent),
      m = function () {
    for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1) {
      if (t && void 0 !== t.style[e[n]]) return e[n];
    }

    return !1;
  }();

  function f() {
    h = s ? (!l && document.body && ((l = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(l)), (l ? l.clientHeight : 0) || b.window.innerHeight || document.documentElement.clientHeight) : b.window.innerHeight || document.documentElement.clientHeight;
  }

  f(), b.window.addEventListener("resize", f), b.window.addEventListener("orientationchange", f), b.window.addEventListener("load", f), i()(function () {
    f();
  });
  var g = [];

  function y() {
    g.length && (g.forEach(function (e, t) {
      var n = e.instance,
          o = e.oldData,
          i = n.$item.getBoundingClientRect(),
          a = {
        width: i.width,
        height: i.height,
        top: i.top,
        bottom: i.bottom,
        wndW: b.window.innerWidth,
        wndH: h
      },
          r = !o || o.wndW !== a.wndW || o.wndH !== a.wndH || o.width !== a.width || o.height !== a.height,
          l = r || !o || o.top !== a.top || o.bottom !== a.bottom;
      g[t].oldData = a, r && n.onResize(), l && n.onScroll();
    }), b.window.requestAnimationFrame(y));
  }

  function v(e, t) {
    ("object" === ("undefined" == typeof HTMLElement ? "undefined" : u(HTMLElement)) ? e instanceof HTMLElement : e && "object" === u(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);

    for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(2 < a ? a - 2 : 0), l = 2; l < a; l++) {
      r[l - 2] = arguments[l];
    }

    for (; i < o; i += 1) {
      if ("object" === u(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new w(e[i], t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)), void 0 !== n) return n;
    }

    return e;
  }

  var x = 0,
      w = function () {
    function s(e, t) {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, s);
      var n = this;
      n.instanceID = x, x += 1, n.$item = e, n.defaults = {
        type: "scroll",
        speed: .5,
        imgSrc: null,
        imgElement: ".jarallax-img",
        imgSize: "cover",
        imgPosition: "50% 50%",
        imgRepeat: "no-repeat",
        keepImg: !1,
        elementInViewport: null,
        zIndex: -100,
        disableParallax: !1,
        disableVideo: !1,
        videoSrc: null,
        videoStartTime: 0,
        videoEndTime: 0,
        videoVolume: 0,
        videoLoop: !0,
        videoPlayOnlyVisible: !0,
        videoLazyLoading: !0,
        onScroll: null,
        onInit: null,
        onDestroy: null,
        onCoverImage: null
      };
      var o,
          i,
          a = n.$item.dataset || {},
          r = {};
      Object.keys(a).forEach(function (e) {
        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
        t && void 0 !== n.defaults[t] && (r[t] = a[e]);
      }), n.options = n.extend({}, n.defaults, r, t), n.pureOptions = n.extend({}, n.options), Object.keys(n.options).forEach(function (e) {
        "true" === n.options[e] ? n.options[e] = !0 : "false" === n.options[e] && (n.options[e] = !1);
      }), n.options.speed = Math.min(2, Math.max(-1, parseFloat(n.options.speed))), "string" == typeof n.options.disableParallax && (n.options.disableParallax = new RegExp(n.options.disableParallax)), n.options.disableParallax instanceof RegExp && (o = n.options.disableParallax, n.options.disableParallax = function () {
        return o.test(p.userAgent);
      }), "function" != typeof n.options.disableParallax && (n.options.disableParallax = function () {
        return !1;
      }), "string" == typeof n.options.disableVideo && (n.options.disableVideo = new RegExp(n.options.disableVideo)), n.options.disableVideo instanceof RegExp && (i = n.options.disableVideo, n.options.disableVideo = function () {
        return i.test(p.userAgent);
      }), "function" != typeof n.options.disableVideo && (n.options.disableVideo = function () {
        return !1;
      });
      var l = n.options.elementInViewport;
      l && "object" === u(l) && void 0 !== l.length && (l = c(l, 1)[0]), l instanceof Element || (l = null), n.options.elementInViewport = l, n.image = {
        src: n.options.imgSrc || null,
        $container: null,
        useImgTag: !1,
        position: /iPad|iPhone|iPod|Android/.test(p.userAgent) ? "absolute" : "fixed"
      }, n.initImg() && n.canInitParallax() && n.init();
    }

    var e, t, n;
    return e = s, (t = [{
      key: "css",
      value: function value(t, n) {
        return "string" == typeof n ? b.window.getComputedStyle(t).getPropertyValue(n) : (n.transform && m && (n[m] = n.transform), Object.keys(n).forEach(function (e) {
          t.style[e] = n[e];
        }), t);
      }
    }, {
      key: "extend",
      value: function value(n) {
        for (var e = arguments.length, o = new Array(1 < e ? e - 1 : 0), t = 1; t < e; t++) {
          o[t - 1] = arguments[t];
        }

        return n = n || {}, Object.keys(o).forEach(function (t) {
          o[t] && Object.keys(o[t]).forEach(function (e) {
            n[e] = o[t][e];
          });
        }), n;
      }
    }, {
      key: "getWindowData",
      value: function value() {
        return {
          width: b.window.innerWidth || document.documentElement.clientWidth,
          height: h,
          y: document.documentElement.scrollTop
        };
      }
    }, {
      key: "initImg",
      value: function value() {
        var e = this,
            t = e.options.imgElement;
        return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image()).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !!e.image.$item || (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !(!e.image.bgImage || "none" === e.image.bgImage));
      }
    }, {
      key: "canInitParallax",
      value: function value() {
        return m && !this.options.disableParallax();
      }
    }, {
      key: "init",
      value: function value() {
        var e,
            t,
            n,
            o = this,
            i = {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden"
        },
            a = {
          pointerEvents: "none",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          willChange: "transform,opacity"
        };
        o.options.keepImg || ((e = o.$item.getAttribute("style")) && o.$item.setAttribute("data-jarallax-original-styles", e), !o.image.useImgTag || (t = o.image.$item.getAttribute("style")) && o.image.$item.setAttribute("data-jarallax-original-styles", t)), "static" === o.css(o.$item, "position") && o.css(o.$item, {
          position: "relative"
        }), "auto" === o.css(o.$item, "z-index") && o.css(o.$item, {
          zIndex: 0
        }), o.image.$container = document.createElement("div"), o.css(o.image.$container, i), o.css(o.image.$container, {
          "z-index": o.options.zIndex
        }), d && o.css(o.image.$container, {
          opacity: .9999
        }), o.image.$container.setAttribute("id", "jarallax-container-".concat(o.instanceID)), o.$item.appendChild(o.image.$container), o.image.useImgTag ? a = o.extend({
          "object-fit": o.options.imgSize,
          "object-position": o.options.imgPosition,
          "font-family": "object-fit: ".concat(o.options.imgSize, "; object-position: ").concat(o.options.imgPosition, ";"),
          "max-width": "none"
        }, i, a) : (o.image.$item = document.createElement("div"), o.image.src && (a = o.extend({
          "background-position": o.options.imgPosition,
          "background-size": o.options.imgSize,
          "background-repeat": o.options.imgRepeat,
          "background-image": o.image.bgImage || 'url("'.concat(o.image.src, '")')
        }, i, a))), "opacity" !== o.options.type && "scale" !== o.options.type && "scale-opacity" !== o.options.type && 1 !== o.options.speed || (o.image.position = "absolute"), "fixed" === o.image.position && (n = function (e) {
          for (var t = []; null !== e.parentElement;) {
            1 === (e = e.parentElement).nodeType && t.push(e);
          }

          return t;
        }(o.$item).filter(function (e) {
          var t = b.window.getComputedStyle(e),
              n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
          return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"]);
        }), o.image.position = n.length ? "absolute" : "fixed"), a.position = o.image.position, o.css(o.image.$item, a), o.image.$container.appendChild(o.image.$item), o.onResize(), o.onScroll(!0), o.options.onInit && o.options.onInit.call(o), "none" !== o.css(o.$item, "background-image") && o.css(o.$item, {
          "background-image": "none"
        }), o.addToParallaxList();
      }
    }, {
      key: "addToParallaxList",
      value: function value() {
        g.push({
          instance: this
        }), 1 === g.length && b.window.requestAnimationFrame(y);
      }
    }, {
      key: "removeFromParallaxList",
      value: function value() {
        var n = this;
        g.forEach(function (e, t) {
          e.instance.instanceID === n.instanceID && g.splice(t, 1);
        });
      }
    }, {
      key: "destroy",
      value: function value() {
        var e = this;
        e.removeFromParallaxList();
        var t,
            n = e.$item.getAttribute("data-jarallax-original-styles");
        e.$item.removeAttribute("data-jarallax-original-styles"), n ? e.$item.setAttribute("style", n) : e.$item.removeAttribute("style"), e.image.useImgTag && (t = e.image.$item.getAttribute("data-jarallax-original-styles"), e.image.$item.removeAttribute("data-jarallax-original-styles"), t ? e.image.$item.setAttribute("style", n) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)), e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax;
      }
    }, {
      key: "clipContainer",
      value: function value() {
        var e, t, n, o, i;
        "fixed" === this.image.position && (n = (t = (e = this).image.$container.getBoundingClientRect()).width, o = t.height, e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles)), i = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n            clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }"), e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i);
      }
    }, {
      key: "coverImage",
      value: function value() {
        var e = this,
            t = e.image.$container.getBoundingClientRect(),
            n = t.height,
            o = e.options.speed,
            i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
            a = 0,
            r = n,
            l = 0;
        return i && (o < 0 ? (a = o * Math.max(n, h), h < n && (a -= o * (n - h))) : a = o * (n + h), 1 < o ? r = Math.abs(a - h) : o < 0 ? r = a / o + Math.abs(a) : r += (h - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (h - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
          height: "".concat(r, "px"),
          marginTop: "".concat(l, "px"),
          left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
          width: "".concat(t.width, "px")
        }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
          image: {
            height: r,
            marginTop: l
          },
          container: t
        };
      }
    }, {
      key: "isVisible",
      value: function value() {
        return this.isElementInViewport || !1;
      }
    }, {
      key: "onScroll",
      value: function value(e) {
        var t,
            n,
            o,
            i,
            a,
            r,
            l,
            s,
            c,
            u,
            p = this,
            d = p.$item.getBoundingClientRect(),
            m = d.top,
            f = d.height,
            g = {},
            y = d;
        p.options.elementInViewport && (y = p.options.elementInViewport.getBoundingClientRect()), p.isElementInViewport = 0 <= y.bottom && 0 <= y.right && y.top <= h && y.left <= b.window.innerWidth, (e || p.isElementInViewport) && (t = Math.max(0, m), n = Math.max(0, f + m), o = Math.max(0, -m), i = Math.max(0, m + f - h), a = Math.max(0, f - (m + f - h)), r = Math.max(0, -m + h - f), l = 1 - (h - m) / (h + f) * 2, s = 1, f < h ? s = 1 - (o || i) / f : n <= h ? s = n / h : a <= h && (s = a / h), "opacity" !== p.options.type && "scale-opacity" !== p.options.type && "scroll-opacity" !== p.options.type || (g.transform = "translate3d(0,0,0)", g.opacity = s), "scale" !== p.options.type && "scale-opacity" !== p.options.type || (c = 1, p.options.speed < 0 ? c -= p.options.speed * s : c += p.options.speed * (1 - s), g.transform = "scale(".concat(c, ") translate3d(0,0,0)")), "scroll" !== p.options.type && "scroll-opacity" !== p.options.type || (u = p.parallaxScrollDistance * l, "absolute" === p.image.position && (u -= m), g.transform = "translate3d(0,".concat(u, "px,0)")), p.css(p.image.$item, g), p.options.onScroll && p.options.onScroll.call(p, {
          section: d,
          beforeTop: t,
          beforeTopEnd: n,
          afterTop: o,
          beforeBottom: i,
          beforeBottomEnd: a,
          afterBottom: r,
          visiblePercent: s,
          fromViewportCenter: l
        }));
      }
    }, {
      key: "onResize",
      value: function value() {
        this.coverImage(), this.clipContainer();
      }
    }]) && r(e.prototype, t), n && r(e, n), s;
  }();

  v.constructor = w, t["default"] = v;
}]);
/*! This file is auto-generated */

!function (c, d) {
  "use strict";

  var e = !1,
      n = !1;
  if (d.querySelector) if (c.addEventListener) e = !0;
  if (c.wp = c.wp || {}, !c.wp.receiveEmbedMessage) if (c.wp.receiveEmbedMessage = function (e) {
    var t = e.data;
    if (t) if (t.secret || t.message || t.value) if (!/[^a-zA-Z0-9]/.test(t.secret)) {
      for (var r, a, i, s = d.querySelectorAll('iframe[data-secret="' + t.secret + '"]'), n = d.querySelectorAll('blockquote[data-secret="' + t.secret + '"]'), o = 0; o < n.length; o++) {
        n[o].style.display = "none";
      }

      for (o = 0; o < s.length; o++) {
        if (r = s[o], e.source === r.contentWindow) {
          if (r.removeAttribute("style"), "height" === t.message) {
            if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;else if (~~i < 200) i = 200;
            r.height = i;
          }

          if ("link" === t.message) if (a = d.createElement("a"), i = d.createElement("a"), a.href = r.getAttribute("src"), i.href = t.value, i.host === a.host) if (d.activeElement === r) c.top.location.href = t.value;
        }
      }
    }
  }, e) c.addEventListener("message", c.wp.receiveEmbedMessage, !1), d.addEventListener("DOMContentLoaded", t, !1), c.addEventListener("load", t, !1);

  function t() {
    if (!n) {
      n = !0;

      for (var e, t, r = -1 !== navigator.appVersion.indexOf("MSIE 10"), a = !!navigator.userAgent.match(/Trident.*rv:11\./), i = d.querySelectorAll("iframe.wp-embedded-content"), s = 0; s < i.length; s++) {
        if (!(e = i[s]).getAttribute("data-secret")) t = Math.random().toString(36).substr(2, 10), e.src += "#?secret=" + t, e.setAttribute("data-secret", t);
        if (r || a) (t = e.cloneNode(!0)).removeAttribute("security"), e.parentNode.replaceChild(t, e);
      }
    }
  }
}(window, document);
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2020 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

document.documentElement.className += " js_active ", document.documentElement.className += "ontouchstart" in document.documentElement ? " vc_mobile " : " vc_desktop ", function () {
  for (var prefix = ["-webkit-", "-moz-", "-ms-", "-o-", ""], i = 0; i < prefix.length; i++) {
    prefix[i] + "transform" in document.documentElement.style && (document.documentElement.className += " vc_transform ");
  }
}(), function () {
  "function" != typeof window.vc_js && (window.vc_js = function () {
    "use strict";

    vc_toggleBehaviour(), vc_tabsBehaviour(), vc_accordionBehaviour(), vc_teaserGrid(), vc_carouselBehaviour(), vc_slidersBehaviour(), vc_prettyPhoto(), vc_pinterest(), vc_progress_bar(), vc_plugin_flexslider(), vc_gridBehaviour(), vc_rowBehaviour(), vc_prepareHoverBox(), vc_googleMapsPointer(), vc_ttaActivation(), jQuery(document).trigger("vc_js"), window.setTimeout(vc_waypoints, 500);
  }), "function" != typeof window.vc_plugin_flexslider && (window.vc_plugin_flexslider = function ($parent) {
    ($parent ? $parent.find(".wpb_flexslider") : jQuery(".wpb_flexslider")).each(function () {
      var this_element = jQuery(this),
          sliderTimeout = 1e3 * parseInt(this_element.attr("data-interval"), 10),
          sliderFx = this_element.attr("data-flex_fx"),
          slideshow = !0;
      0 == sliderTimeout && (slideshow = !1), this_element.is(":visible") && this_element.flexslider({
        animation: sliderFx,
        slideshow: slideshow,
        slideshowSpeed: sliderTimeout,
        sliderSpeed: 800,
        smoothHeight: !0
      });
    });
  }), "function" != typeof window.vc_googleplus && (window.vc_googleplus = function () {
    0 < jQuery(".wpb_googleplus").length && function () {
      var po = document.createElement("script");
      po.type = "text/javascript", po.async = !0, po.src = "https://apis.google.com/js/plusone.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(po, s);
    }();
  }), "function" != typeof window.vc_pinterest && (window.vc_pinterest = function () {
    0 < jQuery(".wpb_pinterest").length && function () {
      var po = document.createElement("script");
      po.type = "text/javascript", po.async = !0, po.src = "https://assets.pinterest.com/js/pinit.js";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(po, s);
    }();
  }), "function" != typeof window.vc_progress_bar && (window.vc_progress_bar = function () {
    void 0 !== jQuery.fn.vcwaypoint && jQuery(".vc_progress_bar").each(function () {
      var $el = jQuery(this);
      $el.vcwaypoint(function () {
        $el.find(".vc_single_bar").each(function (index) {
          var bar = jQuery(this).find(".vc_bar"),
              val = bar.data("percentage-value");
          setTimeout(function () {
            bar.css({
              width: val + "%"
            });
          }, 200 * index);
        });
      }, {
        offset: "85%"
      });
    });
  }), "function" != typeof window.vc_waypoints && (window.vc_waypoints = function () {
    void 0 !== jQuery.fn.vcwaypoint && jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").each(function () {
      var $el = jQuery(this);
      $el.vcwaypoint(function () {
        $el.addClass("wpb_start_animation animated");
      }, {
        offset: "85%"
      });
    });
  }), "function" != typeof window.vc_toggleBehaviour && (window.vc_toggleBehaviour = function ($el) {
    function event(e) {
      e && e.preventDefault && e.preventDefault();
      var element = jQuery(this).closest(".vc_toggle"),
          content = element.find(".vc_toggle_content");
      element.hasClass("vc_toggle_active") ? content.slideUp({
        duration: 300,
        complete: function complete() {
          element.removeClass("vc_toggle_active");
        }
      }) : content.slideDown({
        duration: 300,
        complete: function complete() {
          element.addClass("vc_toggle_active");
        }
      });
    }

    $el ? $el.hasClass("vc_toggle_title") ? $el.unbind("click").on("click", event) : $el.find(".vc_toggle_title").off("click").on("click", event) : jQuery(".vc_toggle_title").off("click").on("click", event);
  }), "function" != typeof window.vc_tabsBehaviour && (window.vc_tabsBehaviour = function ($tab) {
    if (jQuery.ui) {
      var $call = $tab || jQuery(".wpb_tabs, .wpb_tour"),
          ver = jQuery.ui && jQuery.ui.version ? jQuery.ui.version.split(".") : "1.10",
          old_version = 1 === parseInt(ver[0], 10) && parseInt(ver[1], 10) < 9;
      $call.each(function (index) {
        var $tabs,
            interval = jQuery(this).attr("data-interval"),
            tabs_array = [];
        if ($tabs = jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({
          show: function show(event, ui) {
            wpb_prepare_tab_content(event, ui);
          },
          activate: function activate(event, ui) {
            wpb_prepare_tab_content(event, ui);
          }
        }), interval && 0 < interval) try {
          $tabs.tabs("rotate", 1e3 * interval);
        } catch (err) {
          window.console && window.console.warn && console.warn("tabs behaviours error", err);
        }
        jQuery(this).find(".wpb_tab").each(function () {
          tabs_array.push(this.id);
        }), jQuery(this).find(".wpb_tabs_nav li").on("click", function (e) {
          return e && e.preventDefault && e.preventDefault(), old_version ? $tabs.tabs("select", jQuery("a", this).attr("href")) : $tabs.tabs("option", "active", jQuery(this).index()), !1;
        }), jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").on("click", function (e) {
          var index, length;
          e && e.preventDefault && e.preventDefault(), old_version ? (index = $tabs.tabs("option", "selected"), jQuery(this).parent().hasClass("wpb_next_slide") ? index++ : index--, index < 0 ? index = $tabs.tabs("length") - 1 : index >= $tabs.tabs("length") && (index = 0), $tabs.tabs("select", index)) : (index = $tabs.tabs("option", "active"), length = $tabs.find(".wpb_tab").length, index = jQuery(this).parent().hasClass("wpb_next_slide") ? length <= index + 1 ? 0 : index + 1 : index - 1 < 0 ? length - 1 : index - 1, $tabs.tabs("option", "active", index));
        });
      });
    }
  }), "function" != typeof window.vc_accordionBehaviour && (window.vc_accordionBehaviour = function () {
    jQuery(".wpb_accordion").each(function (index) {
      var $tabs,
          active_tab,
          collapsible,
          $this = jQuery(this);
      $this.attr("data-interval"), collapsible = !1 === (active_tab = !isNaN(jQuery(this).data("active-tab")) && 0 < parseInt($this.data("active-tab"), 10) && parseInt($this.data("active-tab"), 10) - 1) || "yes" === $this.data("collapsible"), $tabs = $this.find(".wpb_accordion_wrapper").accordion({
        header: "> div > h3",
        autoHeight: !1,
        heightStyle: "content",
        active: active_tab,
        collapsible: collapsible,
        navigation: !0,
        activate: vc_accordionActivate,
        change: function change(event, ui) {
          void 0 !== jQuery.fn.isotope && ui.newContent.find(".isotope").isotope("layout"), vc_carouselBehaviour(ui.newPanel);
        }
      }), !0 === $this.data("vcDisableKeydown") && ($tabs.data("uiAccordion")._keydown = function () {});
    });
  }), "function" != typeof window.vc_teaserGrid && (window.vc_teaserGrid = function () {
    var layout_modes = {
      fitrows: "fitRows",
      masonry: "masonry"
    };
    jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function () {
      var $container = jQuery(this),
          $thumbs = $container.find(".wpb_thumbnails"),
          layout_mode = $thumbs.attr("data-layout-mode");
      $thumbs.isotope({
        itemSelector: ".isotope-item",
        layoutMode: void 0 === layout_modes[layout_mode] ? "fitRows" : layout_modes[layout_mode]
      }), $container.find(".categories_filter a").data("isotope", $thumbs).on("click", function (e) {
        e && e.preventDefault && e.preventDefault();
        var $thumbs = jQuery(this).data("isotope");
        jQuery(this).parent().parent().find(".active").removeClass("active"), jQuery(this).parent().addClass("active"), $thumbs.isotope({
          filter: jQuery(this).attr("data-filter")
        });
      }), jQuery(window).bind("load resize", function () {
        $thumbs.isotope("layout");
      });
    });
  }), "function" != typeof window.vc_carouselBehaviour && (window.vc_carouselBehaviour = function ($parent) {
    ($parent ? $parent.find(".wpb_carousel") : jQuery(".wpb_carousel")).each(function () {
      var $this = jQuery(this);

      if (!0 !== $this.data("carousel_enabled") && $this.is(":visible")) {
        $this.data("carousel_enabled", !0);
        getColumnsCount(jQuery(this));
        jQuery(this).hasClass("columns_count_1") && 0;
        var carousel_li = jQuery(this).find(".wpb_thumbnails-fluid li");
        carousel_li.css({
          "margin-right": carousel_li.css("margin-left"),
          "margin-left": 0
        });
        var fluid_ul = jQuery(this).find("ul.wpb_thumbnails-fluid");
        fluid_ul.width(fluid_ul.width() + 300), jQuery(window).on("resize", function () {
          screen_size != (screen_size = getSizeName()) && window.setTimeout(function () {
            location.reload();
          }, 20);
        });
      }
    });
  }), "function" != typeof window.vc_slidersBehaviour && (window.vc_slidersBehaviour = function () {
    jQuery(".wpb_gallery_slides").each(function (index) {
      var $imagesGrid,
          this_element = jQuery(this);

      if (this_element.hasClass("wpb_slider_nivo")) {
        var sliderTimeout = 1e3 * this_element.attr("data-interval");
        0 === sliderTimeout && (sliderTimeout = 9999999999), this_element.find(".nivoSlider").nivoSlider({
          effect: "boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",
          slices: 15,
          boxCols: 8,
          boxRows: 4,
          animSpeed: 800,
          pauseTime: sliderTimeout,
          startSlide: 0,
          directionNav: !0,
          directionNavHide: !0,
          controlNav: !0,
          keyboardNav: !1,
          pauseOnHover: !0,
          manualAdvance: !1,
          prevText: "Prev",
          nextText: "Next"
        });
      } else this_element.hasClass("wpb_image_grid") && (jQuery.fn.imagesLoaded ? $imagesGrid = this_element.find(".wpb_image_grid_ul").imagesLoaded(function () {
        $imagesGrid.isotope({
          itemSelector: ".isotope-item",
          layoutMode: "fitRows"
        });
      }) : this_element.find(".wpb_image_grid_ul").isotope({
        itemSelector: ".isotope-item",
        layoutMode: "fitRows"
      }));
    });
  }), "function" != typeof window.vc_prettyPhoto && (window.vc_prettyPhoto = function () {
    try {
      jQuery && jQuery.fn && jQuery.fn.prettyPhoto && jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({
        animationSpeed: "normal",
        hook: "data-rel",
        padding: 15,
        opacity: .7,
        showTitle: !0,
        allowresize: !0,
        counter_separator_label: "/",
        hideflash: !1,
        deeplinking: !1,
        modal: !1,
        callback: function callback() {
          -1 < location.href.indexOf("#!prettyPhoto") && (location.hash = "");
        },
        social_tools: ""
      });
    } catch (err) {
      window.console && window.console.warn && window.console.warn("vc_prettyPhoto initialize error", err);
    }
  }), "function" != typeof window.vc_google_fonts && (window.vc_google_fonts = function () {
    return window.console && window.console.warn && window.console.warn("function vc_google_fonts is deprecated, no need to use it"), !1;
  }), window.vcParallaxSkroll = !1, "function" != typeof window.vc_rowBehaviour && (window.vc_rowBehaviour = function () {
    var vcSkrollrOptions,
        callSkrollInit,
        $ = window.jQuery;

    function fullWidthRow() {
      var $elements = $('[data-vc-full-width="true"]');
      $.each($elements, function (key, item) {
        var $el = $(this);
        $el.addClass("vc_hidden");
        var $el_full = $el.next(".vc_row-full-width");

        if ($el_full.length || ($el_full = $el.parent().next(".vc_row-full-width")), $el_full.length) {
          var padding,
              paddingRight,
              el_margin_left = parseInt($el.css("margin-left"), 10),
              el_margin_right = parseInt($el.css("margin-right"), 10),
              offset = 0 - $el_full.offset().left - el_margin_left,
              width = $(window).width();
          if ("rtl" === $el.css("direction") && (offset -= $el_full.width(), offset += width, offset += el_margin_left, offset += el_margin_right), $el.css({
            position: "relative",
            left: offset,
            "box-sizing": "border-box",
            width: width
          }), !$el.data("vcStretchContent")) "rtl" === $el.css("direction") ? ((padding = offset) < 0 && (padding = 0), (paddingRight = offset) < 0 && (paddingRight = 0)) : ((padding = -1 * offset) < 0 && (padding = 0), (paddingRight = width - padding - $el_full.width() + el_margin_left + el_margin_right) < 0 && (paddingRight = 0)), $el.css({
            "padding-left": padding + "px",
            "padding-right": paddingRight + "px"
          });
          $el.attr("data-vc-full-width-init", "true"), $el.removeClass("vc_hidden"), $(document).trigger("vc-full-width-row-single", {
            el: $el,
            offset: offset,
            marginLeft: el_margin_left,
            marginRight: el_margin_right,
            elFull: $el_full,
            width: width
          });
        }
      }), $(document).trigger("vc-full-width-row", $elements);
    }

    function fullHeightRow() {
      var windowHeight,
          offsetTop,
          fullHeight,
          $element = $(".vc_row-o-full-height:first");
      $element.length && (windowHeight = $(window).height(), (offsetTop = $element.offset().top) < windowHeight && (fullHeight = 100 - offsetTop / (windowHeight / 100), $element.css("min-height", fullHeight + "vh")));
      $(document).trigger("vc-full-height-row", $element);
    }

    $(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour", fullWidthRow).on("resize.vcRowBehaviour", fullHeightRow), fullWidthRow(), fullHeightRow(), (0 < window.navigator.userAgent.indexOf("MSIE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $(".vc_row-o-full-height").each(function () {
      "flex" === $(this).css("display") && $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
    }), vc_initVideoBackgrounds(), callSkrollInit = !1, window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(), $(".vc_parallax-inner").remove(), $("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"), $("[data-vc-parallax]").each(function () {
      var skrollrSize, skrollrStart, $parallaxElement, parallaxImage, youtubeId;
      callSkrollInit = !0, "on" === $(this).data("vcParallaxOFade") && $(this).children().attr("data-5p-top-bottom", "opacity:0;").attr("data-30p-top-bottom", "opacity:1;"), skrollrSize = 100 * $(this).data("vcParallax"), ($parallaxElement = $("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize + "%"), parallaxImage = $(this).data("vcParallaxImage"), (youtubeId = vcExtractYoutubeId(parallaxImage)) ? insertYoutubeVideoAsBackground($parallaxElement, youtubeId) : void 0 !== parallaxImage && $parallaxElement.css("background-image", "url(" + parallaxImage + ")"), skrollrStart = -(skrollrSize - 100), $parallaxElement.attr("data-bottom-top", "top: " + skrollrStart + "%;").attr("data-top-bottom", "top: 0%;");
    }), callSkrollInit && window.skrollr && (vcSkrollrOptions = {
      forceHeight: !1,
      smoothScrolling: !1,
      mobileCheck: function mobileCheck() {
        return !1;
      }
    }, window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions), window.vcParallaxSkroll);
  }), "function" != typeof window.vc_gridBehaviour && (window.vc_gridBehaviour = function () {
    jQuery.fn.vcGrid && jQuery("[data-vc-grid]").vcGrid();
  }), "function" != typeof window.getColumnsCount && (window.getColumnsCount = function (el) {
    for (var find = !1, i = 1; !1 === find;) {
      if (el.hasClass("columns_count_" + i)) return find = !0, i;
      i++;
    }
  });
  var screen_size = getSizeName();

  function getSizeName() {
    var screen_w = jQuery(window).width();
    return 1170 < screen_w ? "desktop_wide" : 960 < screen_w && screen_w < 1169 ? "desktop" : 768 < screen_w && screen_w < 959 ? "tablet" : 300 < screen_w && screen_w < 767 ? "mobile" : screen_w < 300 ? "mobile_portrait" : "";
  }

  "function" != typeof window.wpb_prepare_tab_content && (window.wpb_prepare_tab_content = function (event, ui) {
    var $ui_panel,
        $google_maps,
        panel = ui.panel || ui.newPanel,
        $pie_charts = panel.find(".vc_pie_chart:not(.vc_ready)"),
        $round_charts = panel.find(".vc_round-chart"),
        $line_charts = panel.find(".vc_line-chart"),
        $carousel = panel.find('[data-ride="vc_carousel"]');

    if (vc_carouselBehaviour(), vc_plugin_flexslider(panel), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
      var grid = jQuery(this).data("vcGrid");
      grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
    }), panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
      var grid = jQuery(this).data("vcGrid");
      grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
    }), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
      reload: !1
    }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
      reload: !1
    }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), $ui_panel = panel.find(".isotope, .wpb_image_grid_ul"), $google_maps = panel.find(".wpb_gmaps_widget"), 0 < $ui_panel.length && $ui_panel.isotope("layout"), $google_maps.length && !$google_maps.is(".map_ready")) {
      var $frame = $google_maps.find("iframe");
      $frame.attr("src", $frame.attr("src")), $google_maps.addClass("map_ready");
    }

    panel.parents(".isotope").length && panel.parents(".isotope").each(function () {
      jQuery(this).isotope("layout");
    });
  }), "function" != typeof window.vc_ttaActivation && (window.vc_ttaActivation = function () {
    jQuery("[data-vc-accordion]").on("show.vc.accordion", function (e) {
      var $ = window.jQuery,
          ui = {};
      ui.newPanel = $(this).data("vc.accordion").getTarget(), window.wpb_prepare_tab_content(e, ui);
    });
  }), "function" != typeof window.vc_accordionActivate && (window.vc_accordionActivate = function (event, ui) {
    if (ui.newPanel.length && ui.newHeader.length) {
      var $pie_charts = ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),
          $round_charts = ui.newPanel.find(".vc_round-chart"),
          $line_charts = ui.newPanel.find(".vc_line-chart"),
          $carousel = ui.newPanel.find('[data-ride="vc_carousel"]');
      void 0 !== jQuery.fn.isotope && ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"), ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length && ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function () {
        var grid = jQuery(this).data("vcGrid");
        grid && grid.gridBuilder && grid.gridBuilder.setMasonry && grid.gridBuilder.setMasonry();
      }), vc_carouselBehaviour(ui.newPanel), vc_plugin_flexslider(ui.newPanel), $pie_charts.length && jQuery.fn.vcChat && $pie_charts.vcChat(), $round_charts.length && jQuery.fn.vcRoundChart && $round_charts.vcRoundChart({
        reload: !1
      }), $line_charts.length && jQuery.fn.vcLineChart && $line_charts.vcLineChart({
        reload: !1
      }), $carousel.length && jQuery.fn.carousel && $carousel.carousel("resizeAction"), ui.newPanel.parents(".isotope").length && ui.newPanel.parents(".isotope").each(function () {
        jQuery(this).isotope("layout");
      });
    }
  }), "function" != typeof window.initVideoBackgrounds && (window.initVideoBackgrounds = function () {
    return window.console && window.console.warn && window.console.warn("this function is deprecated use vc_initVideoBackgrounds"), vc_initVideoBackgrounds();
  }), "function" != typeof window.vc_initVideoBackgrounds && (window.vc_initVideoBackgrounds = function () {
    jQuery("[data-vc-video-bg]").each(function () {
      var youtubeUrl,
          youtubeId,
          $element = jQuery(this);
      $element.data("vcVideoBg") ? (youtubeUrl = $element.data("vcVideoBg"), (youtubeId = vcExtractYoutubeId(youtubeUrl)) && ($element.find(".vc_video-bg").remove(), insertYoutubeVideoAsBackground($element, youtubeId)), jQuery(window).on("grid:items:added", function (event, $grid) {
        $element.has($grid).length && vcResizeVideoBackground($element);
      })) : $element.find(".vc_video-bg").remove();
    });
  }), "function" != typeof window.insertYoutubeVideoAsBackground && (window.insertYoutubeVideoAsBackground = function ($element, youtubeId, counter) {
    if ("undefined" == typeof YT || void 0 === YT.Player) return 100 < (counter = void 0 === counter ? 0 : counter) ? void console.warn("Too many attempts to load YouTube api") : void setTimeout(function () {
      insertYoutubeVideoAsBackground($element, youtubeId, counter++);
    }, 100);
    var $container = $element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");
    new YT.Player($container[0], {
      width: "100%",
      height: "100%",
      videoId: youtubeId,
      playerVars: {
        playlist: youtubeId,
        iv_load_policy: 3,
        enablejsapi: 1,
        disablekb: 1,
        autoplay: 1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        loop: 1,
        wmode: "transparent"
      },
      events: {
        onReady: function onReady(event) {
          event.target.mute().setLoop(!0);
        }
      }
    }), vcResizeVideoBackground($element), jQuery(window).bind("resize", function () {
      vcResizeVideoBackground($element);
    });
  }), "function" != typeof window.vcResizeVideoBackground && (window.vcResizeVideoBackground = function ($element) {
    var iframeW,
        iframeH,
        marginLeft,
        marginTop,
        containerW = $element.innerWidth(),
        containerH = $element.innerHeight();
    containerW / containerH < 16 / 9 ? (iframeW = containerH * (16 / 9), iframeH = containerH, marginLeft = -Math.round((iframeW - containerW) / 2) + "px", marginTop = -Math.round((iframeH - containerH) / 2) + "px") : (iframeH = (iframeW = containerW) * (9 / 16), marginTop = -Math.round((iframeH - containerH) / 2) + "px", marginLeft = -Math.round((iframeW - containerW) / 2) + "px"), iframeW += "px", iframeH += "px", $element.find(".vc_video-bg iframe").css({
      maxWidth: "1000%",
      marginLeft: marginLeft,
      marginTop: marginTop,
      width: iframeW,
      height: iframeH
    });
  }), "function" != typeof window.vcExtractYoutubeId && (window.vcExtractYoutubeId = function (url) {
    if (void 0 === url) return !1;
    var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
    return null !== id && id[1];
  }), "function" != typeof window.vc_googleMapsPointer && (window.vc_googleMapsPointer = function () {
    var $ = window.jQuery,
        $wpbGmapsWidget = $(".wpb_gmaps_widget");
    $wpbGmapsWidget.on("click", function () {
      $("iframe", this).css("pointer-events", "auto");
    }), $wpbGmapsWidget.on("mouseleave", function () {
      $("iframe", this).css("pointer-events", "none");
    }), $(".wpb_gmaps_widget iframe").css("pointer-events", "none");
  }), "function" != typeof window.vc_setHoverBoxPerspective && (window.vc_setHoverBoxPerspective = function (hoverBox) {
    hoverBox.each(function () {
      var $this = jQuery(this),
          perspective = 4 * $this.width() + "px";
      $this.css("perspective", perspective);
    });
  }), "function" != typeof window.vc_setHoverBoxHeight && (window.vc_setHoverBoxHeight = function (hoverBox) {
    hoverBox.each(function () {
      var $this = jQuery(this),
          hoverBoxInner = $this.find(".vc-hoverbox-inner");
      hoverBoxInner.css("min-height", 0);
      var frontHeight = $this.find(".vc-hoverbox-front-inner").outerHeight(),
          backHeight = $this.find(".vc-hoverbox-back-inner").outerHeight(),
          hoverBoxHeight = backHeight < frontHeight ? frontHeight : backHeight;
      hoverBoxHeight < 250 && (hoverBoxHeight = 250), hoverBoxInner.css("min-height", hoverBoxHeight + "px");
    });
  }), "function" != typeof window.vc_prepareHoverBox && (window.vc_prepareHoverBox = function () {
    var hoverBox = jQuery(".vc-hoverbox");
    vc_setHoverBoxHeight(hoverBox), vc_setHoverBoxPerspective(hoverBox);
  }), jQuery(document).ready(window.vc_prepareHoverBox), jQuery(window).resize(window.vc_prepareHoverBox), jQuery(document).ready(function ($) {
    window.vc_js();
  });
}(window.jQuery);

/***/ }),

/***/ "./resources/js/interface/js_jquery.js":
/*!*********************************************!*\
  !*** ./resources/js/interface/js_jquery.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function (a, b) {
  function cy(a) {
    return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1;
  }

  function cu(a) {
    if (!cj[a]) {
      var b = c.body,
          d = f("<" + a + ">").appendTo(b),
          e = d.css("display");
      d.remove();

      if (e === "none" || e === "") {
        ck || (ck = c.createElement("iframe"), ck.frameBorder = ck.width = ck.height = 0), b.appendChild(ck);
        if (!cl || !ck.createElement) cl = (ck.contentWindow || ck.contentDocument).document, cl.write((f.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), cl.close();
        d = cl.createElement(a), cl.body.appendChild(d), e = f.css(d, "display"), b.removeChild(ck);
      }

      cj[a] = e;
    }

    return cj[a];
  }

  function ct(a, b) {
    var c = {};
    f.each(cp.concat.apply([], cp.slice(0, b)), function () {
      c[this] = a;
    });
    return c;
  }

  function cs() {
    cq = b;
  }

  function cr() {
    setTimeout(cs, 0);
    return cq = f.now();
  }

  function ci() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }

  function ch() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }

  function cb(a, c) {
    a.dataFilter && (c = a.dataFilter(c, a.dataType));
    var d = a.dataTypes,
        e = {},
        g,
        h,
        i = d.length,
        j,
        k = d[0],
        l,
        m,
        n,
        o,
        p;

    for (g = 1; g < i; g++) {
      if (g === 1) for (h in a.converters) {
        typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
      }
      l = k, k = d[g];
      if (k === "*") k = l;else if (l !== "*" && l !== k) {
        m = l + " " + k, n = e[m] || e["* " + k];

        if (!n) {
          p = b;

          for (o in e) {
            j = o.split(" ");

            if (j[0] === l || j[0] === "*") {
              p = e[j[1] + " " + k];

              if (p) {
                o = e[o], o === !0 ? n = p : p === !0 && (n = o);
                break;
              }
            }
          }
        }

        !n && !p && f.error("No conversion from " + m.replace(" ", " to ")), n !== !0 && (c = n ? n(c) : p(o(c)));
      }
    }

    return c;
  }

  function ca(a, c, d) {
    var e = a.contents,
        f = a.dataTypes,
        g = a.responseFields,
        h,
        i,
        j,
        k;

    for (i in g) {
      i in d && (c[g[i]] = d[i]);
    }

    while (f[0] === "*") {
      f.shift(), h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
    }

    if (h) for (i in e) {
      if (e[i] && e[i].test(h)) {
        f.unshift(i);
        break;
      }
    }
    if (f[0] in d) j = f[0];else {
      for (i in d) {
        if (!f[0] || a.converters[i + " " + f[0]]) {
          j = i;
          break;
        }

        k || (k = i);
      }

      j = j || k;
    }

    if (j) {
      j !== f[0] && f.unshift(j);
      return d[j];
    }
  }

  function b_(a, b, c, d) {
    if (f.isArray(b)) f.each(b, function (b, e) {
      c || bD.test(a) ? d(a, e) : b_(a + "[" + (_typeof(e) == "object" ? b : "") + "]", e, c, d);
    });else if (!c && f.type(b) === "object") for (var e in b) {
      b_(a + "[" + e + "]", b[e], c, d);
    } else d(a, b);
  }

  function b$(a, c) {
    var d,
        e,
        g = f.ajaxSettings.flatOptions || {};

    for (d in c) {
      c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d]);
    }

    e && f.extend(!0, a, e);
  }

  function bZ(a, c, d, e, f, g) {
    f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
    var h = a[f],
        i = 0,
        j = h ? h.length : 0,
        k = a === bS,
        l;

    for (; i < j && (k || !l); i++) {
      l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l, g)));
    }

    (k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
    return l;
  }

  function bY(a) {
    return function (b, c) {
      typeof b != "string" && (c = b, b = "*");

      if (f.isFunction(c)) {
        var d = b.toLowerCase().split(bO),
            e = 0,
            g = d.length,
            h,
            i,
            j;

        for (; e < g; e++) {
          h = d[e], j = /^\+/.test(h), j && (h = h.substr(1) || "*"), i = a[h] = a[h] || [], i[j ? "unshift" : "push"](c);
        }
      }
    };
  }

  function bB(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
        e = b === "width" ? 1 : 0,
        g = 4;

    if (d > 0) {
      if (c !== "border") for (; e < g; e += 2) {
        c || (d -= parseFloat(f.css(a, "padding" + bx[e])) || 0), c === "margin" ? d += parseFloat(f.css(a, c + bx[e])) || 0 : d -= parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0;
      }
      return d + "px";
    }

    d = by(a, b);
    if (d < 0 || d == null) d = a.style[b];
    if (bt.test(d)) return d;
    d = parseFloat(d) || 0;
    if (c) for (; e < g; e += 2) {
      d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !== "padding" && (d += parseFloat(f.css(a, "border" + bx[e] + "Width")) || 0), c === "margin" && (d += parseFloat(f.css(a, c + bx[e])) || 0);
    }
    return d + "px";
  }

  function bo(a) {
    var b = c.createElement("div");
    bh.appendChild(b), b.innerHTML = a.outerHTML;
    return b.firstChild;
  }

  function bn(a) {
    var b = (a.nodeName || "").toLowerCase();
    b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName != "undefined" && f.grep(a.getElementsByTagName("input"), bm);
  }

  function bm(a) {
    if (a.type === "checkbox" || a.type === "radio") a.defaultChecked = a.checked;
  }

  function bl(a) {
    return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName("*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll("*") : [];
  }

  function bk(a, b) {
    var c;
    b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML : c !== "input" || a.type !== "checkbox" && a.type !== "radio" ? c === "option" ? b.selected = a.defaultSelected : c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue : c === "script" && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(f.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached"));
  }

  function bj(a, b) {
    if (b.nodeType === 1 && !!f.hasData(a)) {
      var c,
          d,
          e,
          g = f._data(a),
          h = f._data(b, g),
          i = g.events;

      if (i) {
        delete h.handle, h.events = {};

        for (c in i) {
          for (d = 0, e = i[c].length; d < e; d++) {
            f.event.add(b, c, i[c][d]);
          }
        }
      }

      h.data && (h.data = f.extend({}, h.data));
    }
  }

  function bi(a, b) {
    return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function U(a) {
    var b = V.split("|"),
        c = a.createDocumentFragment();
    if (c.createElement) while (b.length) {
      c.createElement(b.pop());
    }
    return c;
  }

  function T(a, b, c) {
    b = b || 0;
    if (f.isFunction(b)) return f.grep(a, function (a, d) {
      var e = !!b.call(a, d, a);
      return e === c;
    });
    if (b.nodeType) return f.grep(a, function (a, d) {
      return a === b === c;
    });

    if (typeof b == "string") {
      var d = f.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (O.test(b)) return f.filter(b, d, !c);
      b = f.filter(b, d);
    }

    return f.grep(a, function (a, d) {
      return f.inArray(a, b) >= 0 === c;
    });
  }

  function S(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }

  function K() {
    return !0;
  }

  function J() {
    return !1;
  }

  function n(a, b, c) {
    var d = b + "defer",
        e = b + "queue",
        g = b + "mark",
        h = f._data(a, d);

    h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(a, g)) && setTimeout(function () {
      !f._data(a, e) && !f._data(a, g) && (f.removeData(a, d, !0), h.fire());
    }, 0);
  }

  function m(a) {
    for (var b in a) {
      if (b === "data" && f.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }

    return !0;
  }

  function l(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(k, "-$1").toLowerCase();
      d = a.getAttribute(e);

      if (typeof d == "string") {
        try {
          d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNumeric(d) ? +d : j.test(d) ? f.parseJSON(d) : d;
        } catch (g) {}

        f.data(a, c, d);
      } else d = b;
    }

    return d;
  }

  function h(a) {
    var b = g[a] = {},
        c,
        d;
    a = a.split(/\s+/);

    for (c = 0, d = a.length; c < d; c++) {
      b[a[c]] = !0;
    }

    return b;
  }

  var c = a.document,
      d = a.navigator,
      e = a.location,
      f = function () {
    function J() {
      if (!e.isReady) {
        try {
          c.documentElement.doScroll("left");
        } catch (a) {
          setTimeout(J, 1);
          return;
        }

        e.ready();
      }
    }

    var e = function e(a, b) {
      return new e.fn.init(a, b, h);
    },
        f = a.jQuery,
        g = a.$,
        h,
        i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        j = /\S/,
        k = /^\s+/,
        l = /\s+$/,
        m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        n = /^[\],:{}\s]*$/,
        o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        p = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        q = /(?:^|:|,)(?:\s*\[)+/g,
        r = /(webkit)[ \/]([\w.]+)/,
        s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        t = /(msie) ([\w.]+)/,
        u = /(mozilla)(?:.*? rv:([\w.]+))?/,
        v = /-([a-z]|[0-9])/ig,
        w = /^-ms-/,
        x = function x(a, b) {
      return (b + "").toUpperCase();
    },
        y = d.userAgent,
        z,
        A,
        _B2,
        C = Object.prototype.toString,
        D = Object.prototype.hasOwnProperty,
        E = Array.prototype.push,
        F = Array.prototype.slice,
        G = String.prototype.trim,
        H = Array.prototype.indexOf,
        I = {};

    e.fn = e.prototype = {
      constructor: e,
      init: function init(a, d, f) {
        var g, h, j, k;
        if (!a) return this;

        if (a.nodeType) {
          this.context = this[0] = a, this.length = 1;
          return this;
        }

        if (a === "body" && !d && c.body) {
          this.context = c, this[0] = c.body, this.selector = a, this.length = 1;
          return this;
        }

        if (typeof a == "string") {
          a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];

          if (g && (g[1] || !d)) {
            if (g[1]) {
              d = d instanceof e ? d[0] : d, k = d ? d.ownerDocument || d : c, j = m.exec(a), j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])], e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]), a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
              return e.merge(this, a);
            }

            h = c.getElementById(g[2]);

            if (h && h.parentNode) {
              if (h.id !== g[2]) return f.find(a);
              this.length = 1, this[0] = h;
            }

            this.context = c, this.selector = a;
            return this;
          }

          return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a);
        }

        if (e.isFunction(a)) return f.ready(a);
        a.selector !== b && (this.selector = a.selector, this.context = a.context);
        return e.makeArray(a, this);
      },
      selector: "",
      jquery: "1.7.2",
      length: 0,
      size: function size() {
        return this.length;
      },
      toArray: function toArray() {
        return F.call(this, 0);
      },
      get: function get(a) {
        return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a];
      },
      pushStack: function pushStack(a, b, c) {
        var d = this.constructor();
        e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d.prevObject = this, d.context = this.context, b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
        return d;
      },
      each: function each(a, b) {
        return e.each(this, a, b);
      },
      ready: function ready(a) {
        e.bindReady(), A.add(a);
        return this;
      },
      eq: function eq(a) {
        a = +a;
        return a === -1 ? this.slice(a) : this.slice(a, a + 1);
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      slice: function slice() {
        return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","));
      },
      map: function map(a) {
        return this.pushStack(e.map(this, function (b, c) {
          return a.call(b, c, b);
        }));
      },
      end: function end() {
        return this.prevObject || this.constructor(null);
      },
      push: E,
      sort: [].sort,
      splice: [].splice
    }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend = function () {
      var a,
          c,
          d,
          f,
          g,
          h,
          i = arguments[0] || {},
          j = 1,
          k = arguments.length,
          l = !1;
      typeof i == "boolean" && (l = i, i = arguments[1] || {}, j = 2), _typeof(i) != "object" && !e.isFunction(i) && (i = {}), k === j && (i = this, --j);

      for (; j < k; j++) {
        if ((a = arguments[j]) != null) for (c in a) {
          d = i[c], f = a[c];
          if (i === f) continue;
          l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1, h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {}, i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f);
        }
      }

      return i;
    }, e.extend({
      noConflict: function noConflict(b) {
        a.$ === e && (a.$ = g), b && a.jQuery === e && (a.jQuery = f);
        return e;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function holdReady(a) {
        a ? e.readyWait++ : e.ready(!0);
      },
      ready: function ready(a) {
        if (a === !0 && ! --e.readyWait || a !== !0 && !e.isReady) {
          if (!c.body) return setTimeout(e.ready, 1);
          e.isReady = !0;
          if (a !== !0 && --e.readyWait > 0) return;
          A.fireWith(c, [e]), e.fn.trigger && e(c).trigger("ready").off("ready");
        }
      },
      bindReady: function bindReady() {
        if (!A) {
          A = e.Callbacks("once memory");
          if (c.readyState === "complete") return setTimeout(e.ready, 1);
          if (c.addEventListener) c.addEventListener("DOMContentLoaded", _B2, !1), a.addEventListener("load", e.ready, !1);else if (c.attachEvent) {
            c.attachEvent("onreadystatechange", _B2), a.attachEvent("onload", e.ready);
            var b = !1;

            try {
              b = a.frameElement == null;
            } catch (d) {}

            c.documentElement.doScroll && b && J();
          }
        }
      },
      isFunction: function isFunction(a) {
        return e.type(a) === "function";
      },
      isArray: Array.isArray || function (a) {
        return e.type(a) === "array";
      },
      isWindow: function isWindow(a) {
        return a != null && a == a.window;
      },
      isNumeric: function isNumeric(a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function type(a) {
        return a == null ? String(a) : I[C.call(a)] || "object";
      },
      isPlainObject: function isPlainObject(a) {
        if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a)) return !1;

        try {
          if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf")) return !1;
        } catch (c) {
          return !1;
        }

        var d;

        for (d in a) {
          ;
        }

        return d === b || D.call(a, d);
      },
      isEmptyObject: function isEmptyObject(a) {
        for (var b in a) {
          return !1;
        }

        return !0;
      },
      error: function error(a) {
        throw new Error(a);
      },
      parseJSON: function parseJSON(b) {
        if (typeof b != "string" || !b) return null;
        b = e.trim(b);
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
        if (n.test(b.replace(o, "@").replace(p, "]").replace(q, ""))) return new Function("return " + b)();
        e.error("Invalid JSON: " + b);
      },
      parseXML: function parseXML(c) {
        if (typeof c != "string" || !c) return null;
        var d, f;

        try {
          a.DOMParser ? (f = new DOMParser(), d = f.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c));
        } catch (g) {
          d = b;
        }

        (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && e.error("Invalid XML: " + c);
        return d;
      },
      noop: function noop() {},
      globalEval: function globalEval(b) {
        b && j.test(b) && (a.execScript || function (b) {
          a.eval.call(a, b);
        })(b);
      },
      camelCase: function camelCase(a) {
        return a.replace(w, "ms-").replace(v, x);
      },
      nodeName: function nodeName(a, b) {
        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase();
      },
      each: function each(a, c, d) {
        var f,
            g = 0,
            h = a.length,
            i = h === b || e.isFunction(a);

        if (d) {
          if (i) {
            for (f in a) {
              if (c.apply(a[f], d) === !1) break;
            }
          } else for (; g < h;) {
            if (c.apply(a[g++], d) === !1) break;
          }
        } else if (i) {
          for (f in a) {
            if (c.call(a[f], f, a[f]) === !1) break;
          }
        } else for (; g < h;) {
          if (c.call(a[g], g, a[g++]) === !1) break;
        }

        return a;
      },
      trim: G ? function (a) {
        return a == null ? "" : G.call(a);
      } : function (a) {
        return a == null ? "" : (a + "").replace(k, "").replace(l, "");
      },
      makeArray: function makeArray(a, b) {
        var c = b || [];

        if (a != null) {
          var d = e.type(a);
          a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a);
        }

        return c;
      },
      inArray: function inArray(a, b, c) {
        var d;

        if (b) {
          if (H) return H.call(b, a, c);
          d = b.length, c = c ? c < 0 ? Math.max(0, d + c) : c : 0;

          for (; c < d; c++) {
            if (c in b && b[c] === a) return c;
          }
        }

        return -1;
      },
      merge: function merge(a, c) {
        var d = a.length,
            e = 0;
        if (typeof c.length == "number") for (var f = c.length; e < f; e++) {
          a[d++] = c[e];
        } else while (c[e] !== b) {
          a[d++] = c[e++];
        }
        a.length = d;
        return a;
      },
      grep: function grep(a, b, c) {
        var d = [],
            e;
        c = !!c;

        for (var f = 0, g = a.length; f < g; f++) {
          e = !!b(a[f], f), c !== e && d.push(a[f]);
        }

        return d;
      },
      map: function map(a, c, d) {
        var f,
            g,
            h = [],
            i = 0,
            j = a.length,
            k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
        if (k) for (; i < j; i++) {
          f = c(a[i], i, d), f != null && (h[h.length] = f);
        } else for (g in a) {
          f = c(a[g], g, d), f != null && (h[h.length] = f);
        }
        return h.concat.apply([], h);
      },
      guid: 1,
      proxy: function proxy(a, c) {
        if (typeof c == "string") {
          var d = a[c];
          c = a, a = d;
        }

        if (!e.isFunction(a)) return b;

        var f = F.call(arguments, 2),
            g = function g() {
          return a.apply(c, f.concat(F.call(arguments)));
        };

        g.guid = a.guid = a.guid || g.guid || e.guid++;
        return g;
      },
      access: function access(a, c, d, f, g, h, i) {
        var j,
            k = d == null,
            l = 0,
            m = a.length;

        if (d && _typeof(d) == "object") {
          for (l in d) {
            e.access(a, c, l, d[l], 1, h, f);
          }

          g = 1;
        } else if (f !== b) {
          j = i === b && e.isFunction(f), k && (j ? (j = c, c = function c(a, b, _c) {
            return j.call(e(a), _c);
          }) : (c.call(a, f), c = null));
          if (c) for (; l < m; l++) {
            c(a[l], d, j ? f.call(a[l], l, c(a[l], d)) : f, i);
          }
          g = 1;
        }

        return g ? a : k ? c.call(a) : m ? c(a[0], d) : h;
      },
      now: function now() {
        return new Date().getTime();
      },
      uaMatch: function uaMatch(a) {
        a = a.toLowerCase();
        var b = r.exec(a) || s.exec(a) || t.exec(a) || a.indexOf("compatible") < 0 && u.exec(a) || [];
        return {
          browser: b[1] || "",
          version: b[2] || "0"
        };
      },
      sub: function sub() {
        function a(b, c) {
          return new a.fn.init(b, c);
        }

        e.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function (d, f) {
          f && f instanceof e && !(f instanceof a) && (f = a(f));
          return e.fn.init.call(this, d, f, b);
        }, a.fn.init.prototype = a.fn;
        var b = a(c);
        return a;
      },
      browser: {}
    }), e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
      I["[object " + b + "]"] = b.toLowerCase();
    }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !0, e.browser.version = z.version), e.browser.webkit && (e.browser.safari = !0), j.test("Â ") && (k = /^[\s\xA0]+/, l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? _B2 = function B() {
      c.removeEventListener("DOMContentLoaded", _B2, !1), e.ready();
    } : c.attachEvent && (_B2 = function _B() {
      c.readyState === "complete" && (c.detachEvent("onreadystatechange", _B2), e.ready());
    });
    return e;
  }(),
      g = {};

  f.Callbacks = function (a) {
    a = a ? g[a] || h(a) : {};

    var c = [],
        d = [],
        e,
        i,
        j,
        k,
        l,
        m,
        n = function n(b) {
      var d, e, g, h, i;

      for (d = 0, e = b.length; d < e; d++) {
        g = b[d], h = f.type(g), h === "array" ? n(g) : h === "function" && (!a.unique || !p.has(g)) && c.push(g);
      }
    },
        o = function o(b, f) {
      f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m = k || 0, k = 0, l = c.length;

      for (; c && m < l; m++) {
        if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
          e = !0;
          break;
        }
      }

      j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] : d && d.length && (e = d.shift(), p.fireWith(e[0], e[1])));
    },
        p = {
      add: function add() {
        if (c) {
          var a = c.length;
          n(arguments), j ? l = c.length : e && e !== !0 && (k = a, o(e[0], e[1]));
        }

        return this;
      },
      remove: function remove() {
        if (c) {
          var b = arguments,
              d = 0,
              e = b.length;

          for (; d < e; d++) {
            for (var f = 0; f < c.length; f++) {
              if (b[d] === c[f]) {
                j && f <= l && (l--, f <= m && m--), c.splice(f--, 1);
                if (a.unique) break;
              }
            }
          }
        }

        return this;
      },
      has: function has(a) {
        if (c) {
          var b = 0,
              d = c.length;

          for (; b < d; b++) {
            if (a === c[b]) return !0;
          }
        }

        return !1;
      },
      empty: function empty() {
        c = [];
        return this;
      },
      disable: function disable() {
        c = d = e = b;
        return this;
      },
      disabled: function disabled() {
        return !c;
      },
      lock: function lock() {
        d = b, (!e || e === !0) && p.disable();
        return this;
      },
      locked: function locked() {
        return !d;
      },
      fireWith: function fireWith(b, c) {
        d && (j ? a.once || d.push([b, c]) : (!a.once || !e) && o(b, c));
        return this;
      },
      fire: function fire() {
        p.fireWith(this, arguments);
        return this;
      },
      fired: function fired() {
        return !!i;
      }
    };

    return p;
  };

  var i = [].slice;
  f.extend({
    Deferred: function Deferred(a) {
      var b = f.Callbacks("once memory"),
          c = f.Callbacks("once memory"),
          d = f.Callbacks("memory"),
          e = "pending",
          g = {
        resolve: b,
        reject: c,
        notify: d
      },
          h = {
        done: b.add,
        fail: c.add,
        progress: d.add,
        state: function state() {
          return e;
        },
        isResolved: b.fired,
        isRejected: c.fired,
        then: function then(a, b, c) {
          i.done(a).fail(b).progress(c);
          return this;
        },
        always: function always() {
          i.done.apply(i, arguments).fail.apply(i, arguments);
          return this;
        },
        pipe: function pipe(a, b, c) {
          return f.Deferred(function (d) {
            f.each({
              done: [a, "resolve"],
              fail: [b, "reject"],
              progress: [c, "notify"]
            }, function (a, b) {
              var c = b[0],
                  e = b[1],
                  g;
              f.isFunction(c) ? i[a](function () {
                g = c.apply(this, arguments), g && f.isFunction(g.promise) ? g.promise().then(d.resolve, d.reject, d.notify) : d[e + "With"](this === i ? d : this, [g]);
              }) : i[a](d[e]);
            });
          }).promise();
        },
        promise: function promise(a) {
          if (a == null) a = h;else for (var b in h) {
            a[b] = h[b];
          }
          return a;
        }
      },
          i = h.promise({}),
          j;

      for (j in g) {
        i[j] = g[j].fire, i[j + "With"] = g[j].fireWith;
      }

      i.done(function () {
        e = "resolved";
      }, c.disable, d.lock).fail(function () {
        e = "rejected";
      }, b.disable, d.lock), a && a.call(i, i);
      return i;
    },
    when: function when(a) {
      function m(a) {
        return function (b) {
          e[a] = arguments.length > 1 ? i.call(arguments, 0) : b, j.notifyWith(k, e);
        };
      }

      function l(a) {
        return function (c) {
          b[a] = arguments.length > 1 ? i.call(arguments, 0) : c, --g || j.resolveWith(j, b);
        };
      }

      var b = i.call(arguments, 0),
          c = 0,
          d = b.length,
          e = Array(d),
          g = d,
          h = d,
          j = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred(),
          k = j.promise();

      if (d > 1) {
        for (; c < d; c++) {
          b[c] && b[c].promise && f.isFunction(b[c].promise) ? b[c].promise().then(l(c), j.reject, m(c)) : --g;
        }

        g || j.resolveWith(j, b);
      } else j !== a && j.resolveWith(j, d ? [a] : []);

      return k;
    }
  }), f.support = function () {
    var b,
        d,
        e,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p = c.createElement("div"),
        q = c.documentElement;
    p.setAttribute("className", "t"), p.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", d = p.getElementsByTagName("*"), e = p.getElementsByTagName("a")[0];
    if (!d || !d.length || !e) return {};
    g = c.createElement("select"), h = g.appendChild(c.createElement("option")), i = p.getElementsByTagName("input")[0], b = {
      leadingWhitespace: p.firstChild.nodeType === 3,
      tbody: !p.getElementsByTagName("tbody").length,
      htmlSerialize: !!p.getElementsByTagName("link").length,
      style: /top/.test(e.getAttribute("style")),
      hrefNormalized: e.getAttribute("href") === "/a",
      opacity: /^0.55/.test(e.style.opacity),
      cssFloat: !!e.style.cssFloat,
      checkOn: i.value === "on",
      optSelected: h.selected,
      getSetAttribute: p.className !== "t",
      enctype: !!c.createElement("form").enctype,
      html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
      submitBubbles: !0,
      changeBubbles: !0,
      focusinBubbles: !1,
      deleteExpando: !0,
      noCloneEvent: !0,
      inlineBlockNeedsLayout: !1,
      shrinkWrapBlocks: !1,
      reliableMarginRight: !0,
      pixelMargin: !0
    }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat", i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked, g.disabled = !0, b.optDisabled = !h.disabled;

    try {
      delete p.test;
    } catch (r) {
      b.deleteExpando = !1;
    }

    !p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", function () {
      b.noCloneEvent = !1;
    }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement("input"), i.value = "t", i.setAttribute("type", "radio"), b.radioValue = i.value === "t", i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), p.appendChild(i), j = c.createDocumentFragment(), j.appendChild(p.lastChild), b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = i.checked, j.removeChild(i), j.appendChild(p);
    if (p.attachEvent) for (n in {
      submit: 1,
      change: 1,
      focusin: 1
    }) {
      m = "on" + n, o = m in p, o || (p.setAttribute(m, "return;"), o = typeof p[m] == "function"), b[n + "Bubbles"] = o;
    }
    j.removeChild(p), j = g = h = p = i = null, f(function () {
      var d,
          e,
          g,
          h,
          i,
          j,
          l,
          m,
          n,
          q,
          r,
          s,
          t,
          u = c.getElementsByTagName("body")[0];
      !u || (m = 1, t = "padding:0;margin:0;border:", r = "position:absolute;top:0;left:0;width:1px;height:1px;", s = t + "0;visibility:hidden;", n = "style='" + r + t + "5px solid #000;", q = "<div " + n + "display:block;'><div style='" + t + "0;display:block;overflow:hidden;'></div></div>" + "<table " + n + "' cellpadding='0' cellspacing='0'>" + "<tr><td></td></tr></table>", d = c.createElement("div"), d.style.cssText = s + "width:0;height:0;position:static;top:0;margin-top:" + m + "px", u.insertBefore(d, u.firstChild), p = c.createElement("div"), d.appendChild(p), p.innerHTML = "<table><tr><td style='" + t + "0;display:none'></td><td>t</td></tr></table>", k = p.getElementsByTagName("td"), o = k[0].offsetHeight === 0, k[0].style.display = "", k[1].style.display = "none", b.reliableHiddenOffsets = o && k[0].offsetHeight === 0, a.getComputedStyle && (p.innerHTML = "", l = c.createElement("div"), l.style.width = "0", l.style.marginRight = "0", p.style.width = "2px", p.appendChild(l), b.reliableMarginRight = (parseInt((a.getComputedStyle(l, null) || {
        marginRight: 0
      }).marginRight, 10) || 0) === 0), typeof p.style.zoom != "undefined" && (p.innerHTML = "", p.style.width = p.style.padding = "1px", p.style.border = 0, p.style.overflow = "hidden", p.style.display = "inline", p.style.zoom = 1, b.inlineBlockNeedsLayout = p.offsetWidth === 3, p.style.display = "block", p.style.overflow = "visible", p.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = p.offsetWidth !== 3), p.style.cssText = r + s, p.innerHTML = q, e = p.firstChild, g = e.firstChild, i = e.nextSibling.firstChild.firstChild, j = {
        doesNotAddBorder: g.offsetTop !== 5,
        doesAddBorderForTableAndCells: i.offsetTop === 5
      }, g.style.position = "fixed", g.style.top = "20px", j.fixedPosition = g.offsetTop === 20 || g.offsetTop === 15, g.style.position = g.style.top = "", e.style.overflow = "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible = g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset = u.offsetTop !== m, a.getComputedStyle && (p.style.marginTop = "1%", b.pixelMargin = (a.getComputedStyle(p, null) || {
        marginTop: 0
      }).marginTop !== "1%"), typeof d.style.zoom != "undefined" && (d.style.zoom = 1), u.removeChild(d), l = p = d = null, f.extend(b, j));
    });
    return b;
  }();
  var j = /^(?:\{.*\}|\[.*\])$/,
      k = /([A-Z])/g;
  f.extend({
    cache: {},
    uuid: 0,
    expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0
    },
    hasData: function hasData(a) {
      a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
      return !!a && !m(a);
    },
    data: function data(a, c, d, e) {
      if (!!f.acceptData(a)) {
        var g,
            h,
            i,
            j = f.expando,
            k = typeof c == "string",
            l = a.nodeType,
            m = l ? f.cache : a,
            n = l ? a[j] : a[j] && j,
            o = c === "events";
        if ((!n || !m[n] || !o && !e && !m[n].data) && k && d === b) return;
        n || (l ? a[j] = n = ++f.uuid : n = j), m[n] || (m[n] = {}, l || (m[n].toJSON = f.noop));
        if (_typeof(c) == "object" || typeof c == "function") e ? m[n] = f.extend(m[n], c) : m[n].data = f.extend(m[n].data, c);
        g = h = m[n], e || (h.data || (h.data = {}), h = h.data), d !== b && (h[f.camelCase(c)] = d);
        if (o && !h[c]) return g.events;
        k ? (i = h[c], i == null && (i = h[f.camelCase(c)])) : i = h;
        return i;
      }
    },
    removeData: function removeData(a, b, c) {
      if (!!f.acceptData(a)) {
        var d,
            e,
            g,
            h = f.expando,
            i = a.nodeType,
            j = i ? f.cache : a,
            k = i ? a[h] : h;
        if (!j[k]) return;

        if (b) {
          d = c ? j[k] : j[k].data;

          if (d) {
            f.isArray(b) || (b in d ? b = [b] : (b = f.camelCase(b), b in d ? b = [b] : b = b.split(" ")));

            for (e = 0, g = b.length; e < g; e++) {
              delete d[b[e]];
            }

            if (!(c ? m : f.isEmptyObject)(d)) return;
          }
        }

        if (!c) {
          delete j[k].data;
          if (!m(j[k])) return;
        }

        f.support.deleteExpando || !j.setInterval ? delete j[k] : j[k] = null, i && (f.support.deleteExpando ? delete a[h] : a.removeAttribute ? a.removeAttribute(h) : a[h] = null);
      }
    },
    _data: function _data(a, b, c) {
      return f.data(a, b, c, !0);
    },
    acceptData: function acceptData(a) {
      if (a.nodeName) {
        var b = f.noData[a.nodeName.toLowerCase()];
        if (b) return b !== !0 && a.getAttribute("classid") === b;
      }

      return !0;
    }
  }), f.fn.extend({
    data: function data(a, c) {
      var d,
          e,
          g,
          h,
          i,
          j = this[0],
          k = 0,
          m = null;

      if (a === b) {
        if (this.length) {
          m = f.data(j);

          if (j.nodeType === 1 && !f._data(j, "parsedAttrs")) {
            g = j.attributes;

            for (i = g.length; k < i; k++) {
              h = g[k].name, h.indexOf("data-") === 0 && (h = f.camelCase(h.substring(5)), l(j, h, m[h]));
            }

            f._data(j, "parsedAttrs", !0);
          }
        }

        return m;
      }

      if (_typeof(a) == "object") return this.each(function () {
        f.data(this, a);
      });
      d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!";
      return f.access(this, function (c) {
        if (c === b) {
          m = this.triggerHandler("getData" + e, [d[0]]), m === b && j && (m = f.data(j, a), m = l(j, a, m));
          return m === b && d[1] ? this.data(d[0]) : m;
        }

        d[1] = c, this.each(function () {
          var b = f(this);
          b.triggerHandler("setData" + e, d), f.data(this, a, c), b.triggerHandler("changeData" + e, d);
        });
      }, null, c, arguments.length > 1, null, !1);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        f.removeData(this, a);
      });
    }
  }), f.extend({
    _mark: function _mark(a, b) {
      a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(a, b) || 0) + 1));
    },
    _unmark: function _unmark(a, b, c) {
      a !== !0 && (c = b, b = a, a = !1);

      if (b) {
        c = c || "fx";
        var d = c + "mark",
            e = a ? 0 : (f._data(b, d) || 1) - 1;
        e ? f._data(b, d, e) : (f.removeData(b, d, !0), n(b, c, "mark"));
      }
    },
    queue: function queue(a, b, c) {
      var d;

      if (a) {
        b = (b || "fx") + "queue", d = f._data(a, b), c && (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(c)) : d.push(c));
        return d || [];
      }
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";
      var c = f.queue(a, b),
          d = c.shift(),
          e = {};
      d === "inprogress" && (d = c.shift()), d && (b === "fx" && c.unshift("inprogress"), f._data(a, b + ".run", e), d.call(a, function () {
        f.dequeue(a, b);
      }, e)), c.length || (f.removeData(a, b + "queue " + b + ".run", !0), n(a, b, "queue"));
    }
  }), f.fn.extend({
    queue: function queue(a, c) {
      var d = 2;
      typeof a != "string" && (c = a, a = "fx", d--);
      if (arguments.length < d) return f.queue(this[0], a);
      return c === b ? this : this.each(function () {
        var b = f.queue(this, a, c);
        a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        f.dequeue(this, a);
      });
    },
    delay: function delay(a, b) {
      a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
      return this.queue(b, function (b, c) {
        var d = setTimeout(b, a);

        c.stop = function () {
          clearTimeout(d);
        };
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, c) {
      function m() {
        --h || d.resolveWith(e, [e]);
      }

      typeof a != "string" && (c = a, a = b), a = a || "fx";
      var d = f.Deferred(),
          e = this,
          g = e.length,
          h = 1,
          i = a + "defer",
          j = a + "queue",
          k = a + "mark",
          l;

      while (g--) {
        if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f.Callbacks("once memory"), !0)) h++, l.add(m);
      }

      m();
      return d.promise(c);
    }
  });
  var o = /[\n\t\r]/g,
      p = /\s+/,
      q = /\r/g,
      r = /^(?:button|input)$/i,
      s = /^(?:button|input|object|select|textarea)$/i,
      t = /^a(?:rea)?$/i,
      u = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      v = f.support.getSetAttribute,
      w,
      x,
      y;
  f.fn.extend({
    attr: function attr(a, b) {
      return f.access(this, f.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        f.removeAttr(this, a);
      });
    },
    prop: function prop(a, b) {
      return f.access(this, f.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      a = f.propFix[a] || a;
      return this.each(function () {
        try {
          this[a] = b, delete this[a];
        } catch (c) {}
      });
    },
    addClass: function addClass(a) {
      var b, c, d, e, g, h, i;
      if (f.isFunction(a)) return this.each(function (b) {
        f(this).addClass(a.call(this, b, this.className));
      });

      if (a && typeof a == "string") {
        b = a.split(p);

        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1) if (!e.className && b.length === 1) e.className = a;else {
            g = " " + e.className + " ";

            for (h = 0, i = b.length; h < i; h++) {
              ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
            }

            e.className = f.trim(g);
          }
        }
      }

      return this;
    },
    removeClass: function removeClass(a) {
      var c, d, e, g, h, i, j;
      if (f.isFunction(a)) return this.each(function (b) {
        f(this).removeClass(a.call(this, b, this.className));
      });

      if (a && typeof a == "string" || a === b) {
        c = (a || "").split(p);

        for (d = 0, e = this.length; d < e; d++) {
          g = this[d];
          if (g.nodeType === 1 && g.className) if (a) {
            h = (" " + g.className + " ").replace(o, " ");

            for (i = 0, j = c.length; i < j; i++) {
              h = h.replace(" " + c[i] + " ", " ");
            }

            g.className = f.trim(h);
          } else g.className = "";
        }
      }

      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a),
          d = typeof b == "boolean";

      if (f.isFunction(a)) return this.each(function (c) {
        f(this).toggleClass(a.call(this, c, this.className, b), b);
      });
      return this.each(function () {
        if (c === "string") {
          var e,
              g = 0,
              h = f(this),
              i = b,
              j = a.split(p);

          while (e = j[g++]) {
            i = d ? i : !h.hasClass(e), h[i ? "addClass" : "removeClass"](e);
          }
        } else if (c === "undefined" || c === "boolean") this.className && f._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || "";
      });
    },
    hasClass: function hasClass(a) {
      var b = " " + a + " ",
          c = 0,
          d = this.length;

      for (; c < d; c++) {
        if (this[c].nodeType === 1 && (" " + this[c].className + " ").replace(o, " ").indexOf(b) > -1) return !0;
      }

      return !1;
    },
    val: function val(a) {
      var c,
          d,
          e,
          g = this[0];
      {
        if (!!arguments.length) {
          e = f.isFunction(a);
          return this.each(function (d) {
            var g = f(this),
                h;

            if (this.nodeType === 1) {
              e ? h = a.call(this, d, g.val()) : h = a, h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                return a == null ? "" : a + "";
              })), c = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()];
              if (!c || !("set" in c) || c.set(this, h, "value") === b) this.value = h;
            }
          });
        }

        if (g) {
          c = f.valHooks[g.type] || f.valHooks[g.nodeName.toLowerCase()];
          if (c && "get" in c && (d = c.get(g, "value")) !== b) return d;
          d = g.value;
          return typeof d == "string" ? d.replace(q, "") : d == null ? "" : d;
        }
      }
    }
  }), f.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = a.attributes.value;
          return !b || b.specified ? a.value : a.text;
        }
      },
      select: {
        get: function get(a) {
          var b,
              c,
              d,
              e,
              g = a.selectedIndex,
              h = [],
              i = a.options,
              j = a.type === "select-one";
          if (g < 0) return null;
          c = j ? g : 0, d = j ? g + 1 : i.length;

          for (; c < d; c++) {
            e = i[c];

            if (e.selected && (f.support.optDisabled ? !e.disabled : e.getAttribute("disabled") === null) && (!e.parentNode.disabled || !f.nodeName(e.parentNode, "optgroup"))) {
              b = f(e).val();
              if (j) return b;
              h.push(b);
            }
          }

          if (j && !h.length && i.length) return f(i[g]).val();
          return h;
        },
        set: function set(a, b) {
          var c = f.makeArray(b);
          f(a).find("option").each(function () {
            this.selected = f.inArray(f(this).val(), c) >= 0;
          }), c.length || (a.selectedIndex = -1);
          return c;
        }
      }
    },
    attrFn: {
      val: !0,
      css: !0,
      html: !0,
      text: !0,
      data: !0,
      width: !0,
      height: !0,
      offset: !0
    },
    attr: function attr(a, c, d, e) {
      var g,
          h,
          i,
          j = a.nodeType;

      if (!!a && j !== 3 && j !== 8 && j !== 2) {
        if (e && c in f.attrFn) return f(a)[c](d);
        if (typeof a.getAttribute == "undefined") return f.prop(a, c, d);
        i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(), h = f.attrHooks[c] || (u.test(c) ? x : w));

        if (d !== b) {
          if (d === null) {
            f.removeAttr(a, c);
            return;
          }

          if (h && "set" in h && i && (g = h.set(a, d, c)) !== b) return g;
          a.setAttribute(c, "" + d);
          return d;
        }

        if (h && "get" in h && i && (g = h.get(a, c)) !== null) return g;
        g = a.getAttribute(c);
        return g === null ? b : g;
      }
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e,
          g,
          h,
          i = 0;

      if (b && a.nodeType === 1) {
        d = b.toLowerCase().split(p), g = d.length;

        for (; i < g; i++) {
          e = d[i], e && (c = f.propFix[e] || e, h = u.test(e), h || f.attr(a, e, ""), a.removeAttribute(v ? e : c), h && c in a && (a[c] = !1));
        }
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (r.test(a.nodeName) && a.parentNode) f.error("type property can't be changed");else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
            var c = a.value;
            a.setAttribute("type", b), c && (a.value = c);
            return b;
          }
        }
      },
      value: {
        get: function get(a, b) {
          if (w && f.nodeName(a, "button")) return w.get(a, b);
          return b in a ? a.value : null;
        },
        set: function set(a, b, c) {
          if (w && f.nodeName(a, "button")) return w.set(a, b, c);
          a.value = b;
        }
      }
    },
    propFix: {
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
    prop: function prop(a, c, d) {
      var e,
          g,
          h,
          i = a.nodeType;

      if (!!a && i !== 3 && i !== 8 && i !== 2) {
        h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[c] || c, g = f.propHooks[c]);
        return d !== b ? g && "set" in g && (e = g.set(a, d, c)) !== b ? e : a[c] = d : g && "get" in g && (e = g.get(a, c)) !== null ? e : a[c];
      }
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          var c = a.getAttributeNode("tabindex");
          return c && c.specified ? parseInt(c.value, 10) : s.test(a.nodeName) || t.test(a.nodeName) && a.href ? 0 : b;
        }
      }
    }
  }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
    get: function get(a, c) {
      var d,
          e = f.prop(a, c);
      return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b;
    },
    set: function set(a, b, c) {
      var d;
      b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase()));
      return c;
    }
  }, v || (y = {
    name: !0,
    id: !0,
    coords: !0
  }, w = f.valHooks.button = {
    get: function get(a, c) {
      var d;
      d = a.getAttributeNode(c);
      return d && (y[c] ? d.nodeValue !== "" : d.specified) ? d.nodeValue : b;
    },
    set: function set(a, b, d) {
      var e = a.getAttributeNode(d);
      e || (e = c.createAttribute(d), a.setAttributeNode(e));
      return e.nodeValue = b + "";
    }
  }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"], function (a, b) {
    f.attrHooks[b] = f.extend(f.attrHooks[b], {
      set: function set(a, c) {
        if (c === "") {
          a.setAttribute(b, "auto");
          return c;
        }
      }
    });
  }), f.attrHooks.contenteditable = {
    get: w.get,
    set: function set(a, b, c) {
      b === "" && (b = "false"), w.set(a, b, c);
    }
  }), f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
    f.attrHooks[c] = f.extend(f.attrHooks[c], {
      get: function get(a) {
        var d = a.getAttribute(c, 2);
        return d === null ? b : d;
      }
    });
  }), f.support.style || (f.attrHooks.style = {
    get: function get(a) {
      return a.style.cssText.toLowerCase() || b;
    },
    set: function set(a, b) {
      return a.style.cssText = "" + b;
    }
  }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
    get: function get(a) {
      var b = a.parentNode;
      b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
      return null;
    }
  })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support.checkOn || f.each(["radio", "checkbox"], function () {
    f.valHooks[this] = {
      get: function get(a) {
        return a.getAttribute("value") === null ? "on" : a.value;
      }
    };
  }), f.each(["radio", "checkbox"], function () {
    f.valHooks[this] = f.extend(f.valHooks[this], {
      set: function set(a, b) {
        if (f.isArray(b)) return a.checked = f.inArray(f(a).val(), b) >= 0;
      }
    });
  });

  var z = /^(?:textarea|input|select)$/i,
      A = /^([^\.]*)?(?:\.(.+))?$/,
      B = /(?:^|\s)hover(\.\S+)?\b/,
      C = /^key/,
      D = /^(?:mouse|contextmenu)|click/,
      E = /^(?:focusinfocus|focusoutblur)$/,
      F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
      G = function G(a) {
    var b = F.exec(a);
    b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)"));
    return b;
  },
      H = function H(a, b) {
    var c = a.attributes || {};
    return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value));
  },
      I = function I(a) {
    return f.event.special.hover ? a : a.replace(B, "mouseenter$1 mouseleave$1");
  };

  f.event = {
    add: function add(a, c, d, e, g) {
      var h, _i, j, k, l, m, n, o, p, q, r, s;

      if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(h = f._data(a)))) {
        d.handler && (p = d, d = p.handler, g = p.selector), d.guid || (d.guid = f.guid++), j = h.events, j || (h.events = j = {}), _i = h.handle, _i || (h.handle = _i = function i(a) {
          return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.dispatch.apply(_i.elem, arguments) : b;
        }, _i.elem = a), c = f.trim(I(c)).split(" ");

        for (k = 0; k < c.length; k++) {
          l = A.exec(c[k]) || [], m = l[1], n = (l[2] || "").split(".").sort(), s = f.event.special[m] || {}, m = (g ? s.delegateType : s.bindType) || m, s = f.event.special[m] || {}, o = f.extend({
            type: m,
            origType: l[1],
            data: e,
            handler: d,
            guid: d.guid,
            selector: g,
            quick: g && G(g),
            namespace: n.join(".")
          }, p), r = j[m];

          if (!r) {
            r = j[m] = [], r.delegateCount = 0;
            if (!s.setup || s.setup.call(a, e, n, _i) === !1) a.addEventListener ? a.addEventListener(m, _i, !1) : a.attachEvent && a.attachEvent("on" + m, _i);
          }

          s.add && (s.add.call(a, o), o.handler.guid || (o.handler.guid = d.guid)), g ? r.splice(r.delegateCount++, 0, o) : r.push(o), f.event.global[m] = !0;
        }

        a = null;
      }
    },
    global: {},
    remove: function remove(a, b, c, d, e) {
      var g = f.hasData(a) && f._data(a),
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s;

      if (!!g && !!(o = g.events)) {
        b = f.trim(I(b || "")).split(" ");

        for (h = 0; h < b.length; h++) {
          i = A.exec(b[h]) || [], j = k = i[1], l = i[2];

          if (!j) {
            for (j in o) {
              f.event.remove(a, j + b[h], c, d, !0);
            }

            continue;
          }

          p = f.event.special[j] || {}, j = (d ? p.delegateType : p.bindType) || j, r = o[j] || [], m = r.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null;

          for (n = 0; n < r.length; n++) {
            s = r[n], (e || k === s.origType) && (!c || c.guid === s.guid) && (!l || l.test(s.namespace)) && (!d || d === s.selector || d === "**" && s.selector) && (r.splice(n--, 1), s.selector && r.delegateCount--, p.remove && p.remove.call(a, s));
          }

          r.length === 0 && m !== r.length && ((!p.teardown || p.teardown.call(a, l) === !1) && f.removeEvent(a, j, g.handle), delete o[j]);
        }

        f.isEmptyObject(o) && (q = g.handle, q && (q.elem = null), f.removeData(a, ["events", "handle"], !0));
      }
    },
    customEvent: {
      getData: !0,
      setData: !0,
      changeData: !0
    },
    trigger: function trigger(c, d, e, g) {
      if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
        var h = c.type || c,
            i = [],
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s;
        if (E.test(h + f.event.triggered)) return;
        h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0), h.indexOf(".") >= 0 && (i = h.split("."), h = i.shift(), i.sort());
        if ((!e || f.event.customEvent[h]) && !f.event.global[h]) return;
        c = _typeof(c) == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !0, c.exclusive = k, c.namespace = i.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, o = h.indexOf(":") < 0 ? "on" + h : "";

        if (!e) {
          j = f.cache;

          for (l in j) {
            j[l].events && j[l].events[h] && f.event.trigger(c, d, j[l].handle.elem, !0);
          }

          return;
        }

        c.result = b, c.target || (c.target = e), d = d != null ? f.makeArray(d) : [], d.unshift(c), p = f.event.special[h] || {};
        if (p.trigger && p.trigger.apply(e, d) === !1) return;
        r = [[e, p.bindType || h]];

        if (!g && !p.noBubble && !f.isWindow(e)) {
          s = p.delegateType || h, m = E.test(s + h) ? e : e.parentNode, n = null;

          for (; m; m = m.parentNode) {
            r.push([m, s]), n = m;
          }

          n && n === e.ownerDocument && r.push([n.defaultView || n.parentWindow || a, s]);
        }

        for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
          m = r[l][0], c.type = r[l][1], q = (f._data(m, "events") || {})[c.type] && f._data(m, "handle"), q && q.apply(m, d), q = o && m[o], q && f.acceptData(m) && q.apply(m, d) === !1 && c.preventDefault();
        }

        c.type = h, !g && !c.isDefaultPrevented() && (!p._default || p._default.apply(e.ownerDocument, d) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e) && o && e[h] && (h !== "focus" && h !== "blur" || c.target.offsetWidth !== 0) && !f.isWindow(e) && (n = e[o], n && (e[o] = null), f.event.triggered = h, e[h](), f.event.triggered = b, n && (e[o] = n));
        return c.result;
      }
    },
    dispatch: function dispatch(c) {
      c = f.event.fix(c || a.event);
      var d = (f._data(this, "events") || {})[c.type] || [],
          e = d.delegateCount,
          g = [].slice.call(arguments, 0),
          h = !c.exclusive && !c.namespace,
          i = f.event.special[c.type] || {},
          j = [],
          k,
          l,
          m,
          n,
          o,
          p,
          q,
          r,
          s,
          t,
          u;
      g[0] = c, c.delegateTarget = this;

      if (!i.preDispatch || i.preDispatch.call(this, c) !== !1) {
        if (e && (!c.button || c.type !== "click")) {
          n = f(this), n.context = this.ownerDocument || this;

          for (m = c.target; m != this; m = m.parentNode || this) {
            if (m.disabled !== !0) {
              p = {}, r = [], n[0] = m;

              for (k = 0; k < e; k++) {
                s = d[k], t = s.selector, p[t] === b && (p[t] = s.quick ? H(m, s.quick) : n.is(t)), p[t] && r.push(s);
              }

              r.length && j.push({
                elem: m,
                matches: r
              });
            }
          }
        }

        d.length > e && j.push({
          elem: this,
          matches: d.slice(e)
        });

        for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
          q = j[k], c.currentTarget = q.elem;

          for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
            s = q.matches[l];
            if (h || !c.namespace && !s.namespace || c.namespace_re && c.namespace_re.test(s.namespace)) c.data = s.data, c.handleObj = s, o = ((f.event.special[s.origType] || {}).handle || s.handler).apply(q.elem, g), o !== b && (c.result = o, o === !1 && (c.preventDefault(), c.stopPropagation()));
          }
        }

        i.postDispatch && i.postDispatch.call(this, c);
        return c.result;
      }
    },
    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        a.which == null && (a.which = b.charCode != null ? b.charCode : b.keyCode);
        return a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, d) {
        var e,
            f,
            g,
            h = d.button,
            i = d.fromElement;
        a.pageX == null && d.clientX != null && (e = a.target.ownerDocument || c, f = e.documentElement, g = e.body, a.pageX = d.clientX + (f && f.scrollLeft || g && g.scrollLeft || 0) - (f && f.clientLeft || g && g.clientLeft || 0), a.pageY = d.clientY + (f && f.scrollTop || g && g.scrollTop || 0) - (f && f.clientTop || g && g.clientTop || 0)), !a.relatedTarget && i && (a.relatedTarget = i === a.target ? d.toElement : i), !a.which && h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0);
        return a;
      }
    },
    fix: function fix(a) {
      if (a[f.expando]) return a;
      var d,
          e,
          g = a,
          h = f.event.fixHooks[a.type] || {},
          i = h.props ? this.props.concat(h.props) : this.props;
      a = f.Event(g);

      for (d = i.length; d;) {
        e = i[--d], a[e] = g[e];
      }

      a.target || (a.target = g.srcElement || c), a.target.nodeType === 3 && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey);
      return h.filter ? h.filter(a, g) : a;
    },
    special: {
      ready: {
        setup: f.bindReady
      },
      load: {
        noBubble: !0
      },
      focus: {
        delegateType: "focusin"
      },
      blur: {
        delegateType: "focusout"
      },
      beforeunload: {
        setup: function setup(a, b, c) {
          f.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function teardown(a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = f.extend(new f.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? f.event.trigger(e, null, b) : f.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  } : function (a, b, c) {
    a.detachEvent && a.detachEvent("on" + b, c);
  }, f.Event = function (a, b) {
    if (!(this instanceof f.Event)) return new f.Event(a, b);
    a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? K : J) : this.type = a, b && f.extend(this, b), this.timeStamp = a && a.timeStamp || f.now(), this[f.expando] = !0;
  }, f.Event.prototype = {
    preventDefault: function preventDefault() {
      this.isDefaultPrevented = K;
      var a = this.originalEvent;
      !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
    },
    stopPropagation: function stopPropagation() {
      this.isPropagationStopped = K;
      var a = this.originalEvent;
      !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      this.isImmediatePropagationStopped = K, this.stopPropagation();
    },
    isDefaultPrevented: J,
    isPropagationStopped: J,
    isImmediatePropagationStopped: J
  }, f.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  }, function (a, b) {
    f.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c = this,
            d = a.relatedTarget,
            e = a.handleObj,
            g = e.selector,
            h;
        if (!d || d !== c && !f.contains(c, d)) a.type = e.origType, h = e.handler.apply(this, arguments), a.type = b;
        return h;
      }
    };
  }), f.support.submitBubbles || (f.event.special.submit = {
    setup: function setup() {
      if (f.nodeName(this, "form")) return !1;
      f.event.add(this, "click._submit keypress._submit", function (a) {
        var c = a.target,
            d = f.nodeName(c, "input") || f.nodeName(c, "button") ? c.form : b;
        d && !d._submit_attached && (f.event.add(d, "submit._submit", function (a) {
          a._submit_bubble = !0;
        }), d._submit_attached = !0);
      });
    },
    postDispatch: function postDispatch(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && f.event.simulate("submit", this.parentNode, a, !0));
    },
    teardown: function teardown() {
      if (f.nodeName(this, "form")) return !1;
      f.event.remove(this, "._submit");
    }
  }), f.support.changeBubbles || (f.event.special.change = {
    setup: function setup() {
      if (z.test(this.nodeName)) {
        if (this.type === "checkbox" || this.type === "radio") f.event.add(this, "propertychange._change", function (a) {
          a.originalEvent.propertyName === "checked" && (this._just_changed = !0);
        }), f.event.add(this, "click._change", function (a) {
          this._just_changed && !a.isTrigger && (this._just_changed = !1, f.event.simulate("change", this, a, !0));
        });
        return !1;
      }

      f.event.add(this, "beforeactivate._change", function (a) {
        var b = a.target;
        z.test(b.nodeName) && !b._change_attached && (f.event.add(b, "change._change", function (a) {
          this.parentNode && !a.isSimulated && !a.isTrigger && f.event.simulate("change", this.parentNode, a, !0);
        }), b._change_attached = !0);
      });
    },
    handle: function handle(a) {
      var b = a.target;
      if (this !== b || a.isSimulated || a.isTrigger || b.type !== "radio" && b.type !== "checkbox") return a.handleObj.handler.apply(this, arguments);
    },
    teardown: function teardown() {
      f.event.remove(this, "._change");
      return z.test(this.nodeName);
    }
  }), f.support.focusinBubbles || f.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var d = 0,
        e = function e(a) {
      f.event.simulate(b, a.target, f.event.fix(a), !0);
    };

    f.event.special[b] = {
      setup: function setup() {
        d++ === 0 && c.addEventListener(a, e, !0);
      },
      teardown: function teardown() {
        --d === 0 && c.removeEventListener(a, e, !0);
      }
    };
  }), f.fn.extend({
    on: function on(a, c, d, e, g) {
      var h, i;

      if (_typeof(a) == "object") {
        typeof c != "string" && (d = d || c, c = b);

        for (i in a) {
          this.on(i, c, d, a[i], g);
        }

        return this;
      }

      d == null && e == null ? (e = c, d = c = b) : e == null && (typeof c == "string" ? (e = d, d = b) : (e = d, d = c, c = b));
      if (e === !1) e = J;else if (!e) return this;
      g === 1 && (h = e, e = function e(a) {
        f().off(a);
        return h.apply(this, arguments);
      }, e.guid = h.guid || (h.guid = f.guid++));
      return this.each(function () {
        f.event.add(this, a, e, d, c);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, c, d) {
      if (a && a.preventDefault && a.handleObj) {
        var e = a.handleObj;
        f(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler);
        return this;
      }

      if (_typeof(a) == "object") {
        for (var g in a) {
          this.off(g, c, a[g]);
        }

        return this;
      }

      if (c === !1 || typeof c == "function") d = c, c = b;
      d === !1 && (d = J);
      return this.each(function () {
        f.event.remove(this, a, d, c);
      });
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    live: function live(a, b, c) {
      f(this.context).on(a, this.selector, b, c);
      return this;
    },
    die: function die(a, b) {
      f(this.context).off(a, this.selector || "**", b);
      return this;
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return arguments.length == 1 ? this.off(a, "**") : this.off(b, a, c);
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        f.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      if (this[0]) return f.event.trigger(a, b, this[0], !0);
    },
    toggle: function toggle(a) {
      var b = arguments,
          c = a.guid || f.guid++,
          d = 0,
          e = function e(c) {
        var e = (f._data(this, "lastToggle" + a.guid) || 0) % d;
        f._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault();
        return b[e].apply(this, arguments) || !1;
      };

      e.guid = c;

      while (d < b.length) {
        b[d++].guid = c;
      }

      return this.click(e);
    },
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    }
  }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    f.fn[b] = function (a, c) {
      c == null && (c = a, a = null);
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event.fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event.fixHooks[b] = f.event.mouseHooks);
  }), function () {
    function x(a, b, c, e, f, g) {
      for (var h = 0, i = e.length; h < i; h++) {
        var j = e[h];

        if (j) {
          var k = !1;
          j = j[a];

          while (j) {
            if (j[d] === c) {
              k = e[j.sizset];
              break;
            }

            if (j.nodeType === 1) {
              g || (j[d] = c, j.sizset = h);

              if (typeof b != "string") {
                if (j === b) {
                  k = !0;
                  break;
                }
              } else if (_m2.filter(b, [j]).length > 0) {
                k = j;
                break;
              }
            }

            j = j[a];
          }

          e[h] = k;
        }
      }
    }

    function w(a, b, c, e, f, g) {
      for (var h = 0, i = e.length; h < i; h++) {
        var j = e[h];

        if (j) {
          var k = !1;
          j = j[a];

          while (j) {
            if (j[d] === c) {
              k = e[j.sizset];
              break;
            }

            j.nodeType === 1 && !g && (j[d] = c, j.sizset = h);

            if (j.nodeName.toLowerCase() === b) {
              k = j;
              break;
            }

            j = j[a];
          }

          e[h] = k;
        }
      }
    }

    var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        d = "sizcache" + (Math.random() + "").replace(".", ""),
        e = 0,
        g = Object.prototype.toString,
        h = !1,
        i = !0,
        j = /\\/g,
        k = /\r\n/g,
        l = /\W/;
    [0, 0].sort(function () {
      i = !1;
      return 0;
    });

    var _m2 = function m(b, d, e, f) {
      e = e || [], d = d || c;
      var h = d;
      if (d.nodeType !== 1 && d.nodeType !== 9) return [];
      if (!b || typeof b != "string") return e;

      var i,
          j,
          k,
          l,
          n,
          q,
          r,
          t,
          u = !0,
          v = _m2.isXML(d),
          w = [],
          x = b;

      do {
        a.exec(""), i = a.exec(x);

        if (i) {
          x = i[3], w.push(i[1]);

          if (i[2]) {
            l = i[3];
            break;
          }
        }
      } while (i);

      if (w.length > 1 && p.exec(b)) {
        if (w.length === 2 && o.relative[w[0]]) j = y(w[0] + w[1], d, f);else {
          j = o.relative[w[0]] ? [d] : _m2(w.shift(), d);

          while (w.length) {
            b = w.shift(), o.relative[b] && (b += w.shift()), j = y(b, j, f);
          }
        }
      } else {
        !f && w.length > 1 && d.nodeType === 9 && !v && o.match.ID.test(w[0]) && !o.match.ID.test(w[w.length - 1]) && (n = _m2.find(w.shift(), d, v), d = n.expr ? _m2.filter(n.expr, n.set)[0] : n.set[0]);

        if (d) {
          n = f ? {
            expr: w.pop(),
            set: s(f)
          } : _m2.find(w.pop(), w.length === 1 && (w[0] === "~" || w[0] === "+") && d.parentNode ? d.parentNode : d, v), j = n.expr ? _m2.filter(n.expr, n.set) : n.set, w.length > 0 ? k = s(j) : u = !1;

          while (w.length) {
            q = w.pop(), r = q, o.relative[q] ? r = w.pop() : q = "", r == null && (r = d), o.relative[q](k, r, v);
          }
        } else k = w = [];
      }
      k || (k = j), k || _m2.error(q || b);
      if (g.call(k) === "[object Array]") {
        if (!u) e.push.apply(e, k);else if (d && d.nodeType === 1) for (t = 0; k[t] != null; t++) {
          k[t] && (k[t] === !0 || k[t].nodeType === 1 && _m2.contains(d, k[t])) && e.push(j[t]);
        } else for (t = 0; k[t] != null; t++) {
          k[t] && k[t].nodeType === 1 && e.push(j[t]);
        }
      } else s(k, e);
      l && (_m2(l, h, e, f), _m2.uniqueSort(e));
      return e;
    };

    _m2.uniqueSort = function (a) {
      if (u) {
        h = i, a.sort(u);
        if (h) for (var b = 1; b < a.length; b++) {
          a[b] === a[b - 1] && a.splice(b--, 1);
        }
      }

      return a;
    }, _m2.matches = function (a, b) {
      return _m2(a, null, null, b);
    }, _m2.matchesSelector = function (a, b) {
      return _m2(b, null, null, [a]).length > 0;
    }, _m2.find = function (a, b, c) {
      var d, e, f, g, h, i;
      if (!a) return [];

      for (e = 0, f = o.order.length; e < f; e++) {
        h = o.order[e];

        if (g = o.leftMatch[h].exec(a)) {
          i = g[1], g.splice(1, 1);

          if (i.substr(i.length - 1) !== "\\") {
            g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c);

            if (d != null) {
              a = a.replace(o.match[h], "");
              break;
            }
          }
        }
      }

      d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
      return {
        set: d,
        expr: a
      };
    }, _m2.filter = function (a, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          n,
          p,
          q = a,
          r = [],
          s = c,
          t = c && c[0] && _m2.isXML(c[0]);

      while (a && c.length) {
        for (h in o.filter) {
          if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
            k = o.filter[h], l = f[1], g = !1, f.splice(1, 1);
            if (l.substr(l.length - 1) === "\\") continue;
            s === r && (r = []);

            if (o.preFilter[h]) {
              f = o.preFilter[h](f, s, d, r, e, t);
              if (!f) g = i = !0;else if (f === !0) continue;
            }

            if (f) for (n = 0; (j = s[n]) != null; n++) {
              j && (i = k(j, f, n, s), p = e ^ i, d && i != null ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
            }

            if (i !== b) {
              d || (s = r), a = a.replace(o.match[h], "");
              if (!g) return [];
              break;
            }
          }
        }

        if (a === q) if (g == null) _m2.error(a);else break;
        q = a;
      }

      return s;
    }, _m2.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    };

    var n = _m2.getText = function (a) {
      var b,
          c,
          d = a.nodeType,
          e = "";

      if (d) {
        if (d === 1 || d === 9 || d === 11) {
          if (typeof a.textContent == "string") return a.textContent;
          if (typeof a.innerText == "string") return a.innerText.replace(k, "");

          for (a = a.firstChild; a; a = a.nextSibling) {
            e += n(a);
          }
        } else if (d === 3 || d === 4) return a.nodeValue;
      } else for (b = 0; c = a[b]; b++) {
        c.nodeType !== 8 && (e += n(c));
      }

      return e;
    },
        o = _m2.selectors = {
      order: ["ID", "NAME", "TAG"],
      match: {
        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
      },
      leftMatch: {},
      attrMap: {
        "class": "className",
        "for": "htmlFor"
      },
      attrHandle: {
        href: function href(a) {
          return a.getAttribute("href");
        },
        type: function type(a) {
          return a.getAttribute("type");
        }
      },
      relative: {
        "+": function _(a, b) {
          var c = typeof b == "string",
              d = c && !l.test(b),
              e = c && !d;
          d && (b = b.toLowerCase());

          for (var f = 0, g = a.length, h; f < g; f++) {
            if (h = a[f]) {
              while ((h = h.previousSibling) && h.nodeType !== 1) {
                ;
              }

              a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b;
            }
          }

          e && _m2.filter(b, a, !0);
        },
        ">": function _(a, b) {
          var c,
              d = typeof b == "string",
              e = 0,
              f = a.length;

          if (d && !l.test(b)) {
            b = b.toLowerCase();

            for (; e < f; e++) {
              c = a[e];

              if (c) {
                var g = c.parentNode;
                a[e] = g.nodeName.toLowerCase() === b ? g : !1;
              }
            }
          } else {
            for (; e < f; e++) {
              c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
            }

            d && _m2.filter(b, a, !0);
          }
        },
        "": function _(a, b, c) {
          var d,
              f = e++,
              g = x;
          typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("parentNode", b, f, a, d, c);
        },
        "~": function _(a, b, c) {
          var d,
              f = e++,
              g = x;
          typeof b == "string" && !l.test(b) && (b = b.toLowerCase(), d = b, g = w), g("previousSibling", b, f, a, d, c);
        }
      },
      find: {
        ID: function ID(a, b, c) {
          if (typeof b.getElementById != "undefined" && !c) {
            var d = b.getElementById(a[1]);
            return d && d.parentNode ? [d] : [];
          }
        },
        NAME: function NAME(a, b) {
          if (typeof b.getElementsByName != "undefined") {
            var c = [],
                d = b.getElementsByName(a[1]);

            for (var e = 0, f = d.length; e < f; e++) {
              d[e].getAttribute("name") === a[1] && c.push(d[e]);
            }

            return c.length === 0 ? null : c;
          }
        },
        TAG: function TAG(a, b) {
          if (typeof b.getElementsByTagName != "undefined") return b.getElementsByTagName(a[1]);
        }
      },
      preFilter: {
        CLASS: function CLASS(a, b, c, d, e, f) {
          a = " " + a[1].replace(j, "") + " ";
          if (f) return a;

          for (var g = 0, h; (h = b[g]) != null; g++) {
            h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
          }

          return !1;
        },
        ID: function ID(a) {
          return a[1].replace(j, "");
        },
        TAG: function TAG(a, b) {
          return a[1].replace(j, "").toLowerCase();
        },
        CHILD: function CHILD(a) {
          if (a[1] === "nth") {
            a[2] || _m2.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
            a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0;
          } else a[2] && _m2.error(a[0]);

          a[0] = e++;
          return a;
        },
        ATTR: function ATTR(a, b, c, d, e, f) {
          var g = a[1] = a[1].replace(j, "");
          !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), a[2] === "~=" && (a[4] = " " + a[4] + " ");
          return a;
        },
        PSEUDO: function PSEUDO(b, c, d, e, f) {
          if (b[1] === "not") {
            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3])) b[3] = _m2(b[3], null, null, c);else {
              var g = _m2.filter(b[3], c, d, !0 ^ f);

              d || e.push.apply(e, g);
              return !1;
            }
          } else if (o.match.POS.test(b[0]) || o.match.CHILD.test(b[0])) return !0;
          return b;
        },
        POS: function POS(a) {
          a.unshift(!0);
          return a;
        }
      },
      filters: {
        enabled: function enabled(a) {
          return a.disabled === !1 && a.type !== "hidden";
        },
        disabled: function disabled(a) {
          return a.disabled === !0;
        },
        checked: function checked(a) {
          return a.checked === !0;
        },
        selected: function selected(a) {
          a.parentNode && a.parentNode.selectedIndex;
          return a.selected === !0;
        },
        parent: function parent(a) {
          return !!a.firstChild;
        },
        empty: function empty(a) {
          return !a.firstChild;
        },
        has: function has(a, b, c) {
          return !!_m2(c[3], a).length;
        },
        header: function header(a) {
          return /h\d/i.test(a.nodeName);
        },
        text: function text(a) {
          var b = a.getAttribute("type"),
              c = a.type;
          return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null);
        },
        radio: function radio(a) {
          return a.nodeName.toLowerCase() === "input" && "radio" === a.type;
        },
        checkbox: function checkbox(a) {
          return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type;
        },
        file: function file(a) {
          return a.nodeName.toLowerCase() === "input" && "file" === a.type;
        },
        password: function password(a) {
          return a.nodeName.toLowerCase() === "input" && "password" === a.type;
        },
        submit: function submit(a) {
          var b = a.nodeName.toLowerCase();
          return (b === "input" || b === "button") && "submit" === a.type;
        },
        image: function image(a) {
          return a.nodeName.toLowerCase() === "input" && "image" === a.type;
        },
        reset: function reset(a) {
          var b = a.nodeName.toLowerCase();
          return (b === "input" || b === "button") && "reset" === a.type;
        },
        button: function button(a) {
          var b = a.nodeName.toLowerCase();
          return b === "input" && "button" === a.type || b === "button";
        },
        input: function input(a) {
          return /input|select|textarea|button/i.test(a.nodeName);
        },
        focus: function focus(a) {
          return a === a.ownerDocument.activeElement;
        }
      },
      setFilters: {
        first: function first(a, b) {
          return b === 0;
        },
        last: function last(a, b, c, d) {
          return b === d.length - 1;
        },
        even: function even(a, b) {
          return b % 2 === 0;
        },
        odd: function odd(a, b) {
          return b % 2 === 1;
        },
        lt: function lt(a, b, c) {
          return b < c[3] - 0;
        },
        gt: function gt(a, b, c) {
          return b > c[3] - 0;
        },
        nth: function nth(a, b, c) {
          return c[3] - 0 === b;
        },
        eq: function eq(a, b, c) {
          return c[3] - 0 === b;
        }
      },
      filter: {
        PSEUDO: function PSEUDO(a, b, c, d) {
          var e = b[1],
              f = o.filters[e];
          if (f) return f(a, c, b, d);
          if (e === "contains") return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;

          if (e === "not") {
            var g = b[3];

            for (var h = 0, i = g.length; h < i; h++) {
              if (g[h] === a) return !1;
            }

            return !0;
          }

          _m2.error(e);
        },
        CHILD: function CHILD(a, b) {
          var c,
              e,
              f,
              g,
              h,
              i,
              j,
              k = b[1],
              l = a;

          switch (k) {
            case "only":
            case "first":
              while (l = l.previousSibling) {
                if (l.nodeType === 1) return !1;
              }

              if (k === "first") return !0;
              l = a;

            case "last":
              while (l = l.nextSibling) {
                if (l.nodeType === 1) return !1;
              }

              return !0;

            case "nth":
              c = b[2], e = b[3];
              if (c === 1 && e === 0) return !0;
              f = b[0], g = a.parentNode;

              if (g && (g[d] !== f || !a.nodeIndex)) {
                i = 0;

                for (l = g.firstChild; l; l = l.nextSibling) {
                  l.nodeType === 1 && (l.nodeIndex = ++i);
                }

                g[d] = f;
              }

              j = a.nodeIndex - e;
              return c === 0 ? j === 0 : j % c === 0 && j / c >= 0;
          }
        },
        ID: function ID(a, b) {
          return a.nodeType === 1 && a.getAttribute("id") === b;
        },
        TAG: function TAG(a, b) {
          return b === "*" && a.nodeType === 1 || !!a.nodeName && a.nodeName.toLowerCase() === b;
        },
        CLASS: function CLASS(a, b) {
          return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1;
        },
        ATTR: function ATTR(a, b) {
          var c = b[1],
              d = _m2.attr ? _m2.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c),
              e = d + "",
              f = b[2],
              g = b[4];
          return d == null ? f === "!=" : !f && _m2.attr ? d != null : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1;
        },
        POS: function POS(a, b, c, d) {
          var e = b[2],
              f = o.setFilters[e];
          if (f) return f(a, c, b, d);
        }
      }
    },
        p = o.match.POS,
        q = function q(a, b) {
      return "\\" + (b - 0 + 1);
    };

    for (var r in o.match) {
      o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
    }

    o.match.globalPOS = p;

    var s = function s(a, b) {
      a = Array.prototype.slice.call(a, 0);

      if (b) {
        b.push.apply(b, a);
        return b;
      }

      return a;
    };

    try {
      Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType;
    } catch (t) {
      s = function s(a, b) {
        var c = 0,
            d = b || [];
        if (g.call(a) === "[object Array]") Array.prototype.push.apply(d, a);else if (typeof a.length == "number") for (var e = a.length; c < e; c++) {
          d.push(a[c]);
        } else for (; a[c]; c++) {
          d.push(a[c]);
        }
        return d;
      };
    }

    var u, v;
    c.documentElement.compareDocumentPosition ? u = function u(a, b) {
      if (a === b) {
        h = !0;
        return 0;
      }

      if (!a.compareDocumentPosition || !b.compareDocumentPosition) return a.compareDocumentPosition ? -1 : 1;
      return a.compareDocumentPosition(b) & 4 ? -1 : 1;
    } : (u = function u(a, b) {
      if (a === b) {
        h = !0;
        return 0;
      }

      if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
      var c,
          d,
          e = [],
          f = [],
          g = a.parentNode,
          i = b.parentNode,
          j = g;
      if (g === i) return v(a, b);
      if (!g) return -1;
      if (!i) return 1;

      while (j) {
        e.unshift(j), j = j.parentNode;
      }

      j = i;

      while (j) {
        f.unshift(j), j = j.parentNode;
      }

      c = e.length, d = f.length;

      for (var k = 0; k < c && k < d; k++) {
        if (e[k] !== f[k]) return v(e[k], f[k]);
      }

      return k === c ? v(a, f[k], -1) : v(e[k], b, 1);
    }, v = function v(a, b, c) {
      if (a === b) return c;
      var d = a.nextSibling;

      while (d) {
        if (d === b) return -1;
        d = d.nextSibling;
      }

      return 1;
    }), function () {
      var a = c.createElement("div"),
          d = "script" + new Date().getTime(),
          e = c.documentElement;
      a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a, e.firstChild), c.getElementById(d) && (o.find.ID = function (a, c, d) {
        if (typeof c.getElementById != "undefined" && !d) {
          var e = c.getElementById(a[1]);
          return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : [];
        }
      }, o.filter.ID = function (a, b) {
        var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
        return a.nodeType === 1 && c && c.nodeValue === b;
      }), e.removeChild(a), e = a = null;
    }(), function () {
      var a = c.createElement("div");
      a.appendChild(c.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function (a, b) {
        var c = b.getElementsByTagName(a[1]);

        if (a[1] === "*") {
          var d = [];

          for (var e = 0; c[e]; e++) {
            c[e].nodeType === 1 && d.push(c[e]);
          }

          c = d;
        }

        return c;
      }), a.innerHTML = "<a href='#'></a>", a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (o.attrHandle.href = function (a) {
        return a.getAttribute("href", 2);
      }), a = null;
    }(), c.querySelectorAll && function () {
      var a = _m2,
          b = c.createElement("div"),
          d = "__sizzle__";
      b.innerHTML = "<p class='TEST'></p>";

      if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
        _m2 = function _m(b, e, f, g) {
          e = e || c;

          if (!g && !_m2.isXML(e)) {
            var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);

            if (h && (e.nodeType === 1 || e.nodeType === 9)) {
              if (h[1]) return s(e.getElementsByTagName(b), f);
              if (h[2] && o.find.CLASS && e.getElementsByClassName) return s(e.getElementsByClassName(h[2]), f);
            }

            if (e.nodeType === 9) {
              if (b === "body" && e.body) return s([e.body], f);

              if (h && h[3]) {
                var i = e.getElementById(h[3]);
                if (!i || !i.parentNode) return s([], f);
                if (i.id === h[3]) return s([i], f);
              }

              try {
                return s(e.querySelectorAll(b), f);
              } catch (j) {}
            } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
              var k = e,
                  l = e.getAttribute("id"),
                  n = l || d,
                  p = e.parentNode,
                  q = /^\s*[+~]/.test(b);
              l ? n = n.replace(/'/g, "\\$&") : e.setAttribute("id", n), q && p && (e = e.parentNode);

              try {
                if (!q || p) return s(e.querySelectorAll("[id='" + n + "'] " + b), f);
              } catch (r) {} finally {
                l || k.removeAttribute("id");
              }
            }
          }

          return a(b, e, f, g);
        };

        for (var e in a) {
          _m2[e] = a[e];
        }

        b = null;
      }
    }(), function () {
      var a = c.documentElement,
          b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;

      if (b) {
        var d = !b.call(c.createElement("div"), "div"),
            e = !1;

        try {
          b.call(c.documentElement, "[test!='']:sizzle");
        } catch (f) {
          e = !0;
        }

        _m2.matchesSelector = function (a, c) {
          c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
          if (!_m2.isXML(a)) try {
            if (e || !o.match.PSEUDO.test(c) && !/!=/.test(c)) {
              var f = b.call(a, c);
              if (f || !d || a.document && a.document.nodeType !== 11) return f;
            }
          } catch (g) {}
          return _m2(c, null, null, [a]).length > 0;
        };
      }
    }(), function () {
      var a = c.createElement("div");
      a.innerHTML = "<div class='test e'></div><div class='test'></div>";

      if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
        a.lastChild.className = "e";
        if (a.getElementsByClassName("e").length === 1) return;
        o.order.splice(1, 0, "CLASS"), o.find.CLASS = function (a, b, c) {
          if (typeof b.getElementsByClassName != "undefined" && !c) return b.getElementsByClassName(a[1]);
        }, a = null;
      }
    }(), c.documentElement.contains ? _m2.contains = function (a, b) {
      return a !== b && (a.contains ? a.contains(b) : !0);
    } : c.documentElement.compareDocumentPosition ? _m2.contains = function (a, b) {
      return !!(a.compareDocumentPosition(b) & 16);
    } : _m2.contains = function () {
      return !1;
    }, _m2.isXML = function (a) {
      var b = (a ? a.ownerDocument || a : 0).documentElement;
      return b ? b.nodeName !== "HTML" : !1;
    };

    var y = function y(a, b, c) {
      var d,
          e = [],
          f = "",
          g = b.nodeType ? [b] : b;

      while (d = o.match.PSEUDO.exec(a)) {
        f += d[0], a = a.replace(o.match.PSEUDO, "");
      }

      a = o.relative[a] ? a + "*" : a;

      for (var h = 0, i = g.length; h < i; h++) {
        _m2(a, g[h], e, c);
      }

      return _m2.filter(f, e);
    };

    _m2.attr = f.attr, _m2.selectors.attrMap = {}, f.find = _m2, f.expr = _m2.selectors, f.expr[":"] = f.expr.filters, f.unique = _m2.uniqueSort, f.text = _m2.getText, f.isXMLDoc = _m2.isXML, f.contains = _m2.contains;
  }();
  var L = /Until$/,
      M = /^(?:parents|prevUntil|prevAll)/,
      N = /,/,
      O = /^.[^:#\[\.,]*$/,
      P = Array.prototype.slice,
      Q = f.expr.match.globalPOS,
      R = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  f.fn.extend({
    find: function find(a) {
      var b = this,
          c,
          d;
      if (typeof a != "string") return f(a).filter(function () {
        for (c = 0, d = b.length; c < d; c++) {
          if (f.contains(b[c], this)) return !0;
        }
      });
      var e = this.pushStack("", "find", a),
          g,
          h,
          i;

      for (c = 0, d = this.length; c < d; c++) {
        g = e.length, f.find(a, this[c], e);
        if (c > 0) for (h = g; h < e.length; h++) {
          for (i = 0; i < g; i++) {
            if (e[i] === e[h]) {
              e.splice(h--, 1);
              break;
            }
          }
        }
      }

      return e;
    },
    has: function has(a) {
      var b = f(a);
      return this.filter(function () {
        for (var a = 0, c = b.length; a < c; a++) {
          if (f.contains(this, b[a])) return !0;
        }
      });
    },
    not: function not(a) {
      return this.pushStack(T(this, a, !1), "not", a);
    },
    filter: function filter(a) {
      return this.pushStack(T(this, a, !0), "filter", a);
    },
    is: function is(a) {
      return !!a && (typeof a == "string" ? Q.test(a) ? f(a, this.context).index(this[0]) >= 0 : f.filter(a, this).length > 0 : this.filter(a).length > 0);
    },
    closest: function closest(a, b) {
      var c = [],
          d,
          e,
          g = this[0];

      if (f.isArray(a)) {
        var h = 1;

        while (g && g.ownerDocument && g !== b) {
          for (d = 0; d < a.length; d++) {
            f(g).is(a[d]) && c.push({
              selector: a[d],
              elem: g,
              level: h
            });
          }

          g = g.parentNode, h++;
        }

        return c;
      }

      var i = Q.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;

      for (d = 0, e = this.length; d < e; d++) {
        g = this[d];

        while (g) {
          if (i ? i.index(g) > -1 : f.find.matchesSelector(g, a)) {
            c.push(g);
            break;
          }

          g = g.parentNode;
          if (!g || !g.ownerDocument || g === b || g.nodeType === 11) break;
        }
      }

      c = c.length > 1 ? f.unique(c) : c;
      return this.pushStack(c, "closest", a);
    },
    index: function index(a) {
      if (!a) return this[0] && this[0].parentNode ? this.prevAll().length : -1;
      if (typeof a == "string") return f.inArray(this[0], f(a));
      return f.inArray(a.jquery ? a[0] : a, this);
    },
    add: function add(a, b) {
      var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a),
          d = f.merge(this.get(), c);
      return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(d));
    },
    andSelf: function andSelf() {
      return this.add(this.prevObject);
    }
  }), f.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && b.nodeType !== 11 ? b : null;
    },
    parents: function parents(a) {
      return f.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return f.dir(a, "parentNode", c);
    },
    next: function next(a) {
      return f.nth(a, 2, "nextSibling");
    },
    prev: function prev(a) {
      return f.nth(a, 2, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return f.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return f.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return f.dir(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return f.dir(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return f.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return f.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes);
    }
  }, function (a, b) {
    f.fn[a] = function (c, d) {
      var e = f.map(this, b, c);
      L.test(a) || (d = c), d && typeof d == "string" && (e = f.filter(d, e)), e = this.length > 1 && !R[a] ? f.unique(e) : e, (this.length > 1 || N.test(d)) && M.test(a) && (e = e.reverse());
      return this.pushStack(e, a, P.call(arguments).join(","));
    };
  }), f.extend({
    filter: function filter(a, b, c) {
      c && (a = ":not(" + a + ")");
      return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b);
    },
    dir: function dir(a, c, d) {
      var e = [],
          g = a[c];

      while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d))) {
        g.nodeType === 1 && e.push(g), g = g[c];
      }

      return e;
    },
    nth: function nth(a, b, c, d) {
      b = b || 1;
      var e = 0;

      for (; a; a = a[c]) {
        if (a.nodeType === 1 && ++e === b) break;
      }

      return a;
    },
    sibling: function sibling(a, b) {
      var c = [];

      for (; a; a = a.nextSibling) {
        a.nodeType === 1 && a !== b && c.push(a);
      }

      return c;
    }
  });
  var V = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      W = / jQuery\d+="(?:\d+|null)"/g,
      X = /^\s+/,
      Y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
      Z = /<([\w:]+)/,
      $ = /<tbody/i,
      _ = /<|&#?\w+;/,
      ba = /<(?:script|style)/i,
      bb = /<(?:script|object|embed|option|style)/i,
      bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
      bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
      be = /\/(java|ecma)script/i,
      bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
      bg = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    legend: [1, "<fieldset>", "</fieldset>"],
    thead: [1, "<table>", "</table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    area: [1, "<map>", "</map>"],
    _default: [0, "", ""]
  },
      bh = U(c);
  bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption = bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [1, "div<div>", "</div>"]), f.fn.extend({
    text: function text(a) {
      return f.access(this, function (a) {
        return a === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
      }, null, a, arguments.length);
    },
    wrapAll: function wrapAll(a) {
      if (f.isFunction(a)) return this.each(function (b) {
        f(this).wrapAll(a.call(this, b));
      });

      if (this[0]) {
        var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
          var a = this;

          while (a.firstChild && a.firstChild.nodeType === 1) {
            a = a.firstChild;
          }

          return a;
        }).append(this);
      }

      return this;
    },
    wrapInner: function wrapInner(a) {
      if (f.isFunction(a)) return this.each(function (b) {
        f(this).wrapInner(a.call(this, b));
      });
      return this.each(function () {
        var b = f(this),
            c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a);
      });
    },
    wrap: function wrap(a) {
      var b = f.isFunction(a);
      return this.each(function (c) {
        f(this).wrapAll(b ? a.call(this, c) : a);
      });
    },
    unwrap: function unwrap() {
      return this.parent().each(function () {
        f.nodeName(this, "body") || f(this).replaceWith(this.childNodes);
      }).end();
    },
    append: function append() {
      return this.domManip(arguments, !0, function (a) {
        this.nodeType === 1 && this.appendChild(a);
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, !0, function (a) {
        this.nodeType === 1 && this.insertBefore(a, this.firstChild);
      });
    },
    before: function before() {
      if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
        this.parentNode.insertBefore(a, this);
      });

      if (arguments.length) {
        var a = f.clean(arguments);
        a.push.apply(a, this.toArray());
        return this.pushStack(a, "before", arguments);
      }
    },
    after: function after() {
      if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function (a) {
        this.parentNode.insertBefore(a, this.nextSibling);
      });

      if (arguments.length) {
        var a = this.pushStack(this, "after", arguments);
        a.push.apply(a, f.clean(arguments));
        return a;
      }
    },
    remove: function remove(a, b) {
      for (var c = 0, d; (d = this[c]) != null; c++) {
        if (!a || f.filter(a, [d]).length) !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")), f.cleanData([d])), d.parentNode && d.parentNode.removeChild(d);
      }

      return this;
    },
    empty: function empty() {
      for (var a = 0, b; (b = this[a]) != null; a++) {
        b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));

        while (b.firstChild) {
          b.removeChild(b.firstChild);
        }
      }

      return this;
    },
    clone: function clone(a, b) {
      a = a == null ? !1 : a, b = b == null ? a : b;
      return this.map(function () {
        return f.clone(this, a, b);
      });
    },
    html: function html(a) {
      return f.access(this, function (a) {
        var c = this[0] || {},
            d = 0,
            e = this.length;
        if (a === b) return c.nodeType === 1 ? c.innerHTML.replace(W, "") : null;

        if (typeof a == "string" && !ba.test(a) && (f.support.leadingWhitespace || !X.test(a)) && !bg[(Z.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(Y, "<$1></$2>");

          try {
            for (; d < e; d++) {
              c = this[d] || {}, c.nodeType === 1 && (f.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
            }

            c = 0;
          } catch (g) {}
        }

        c && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith(a) {
      if (this[0] && this[0].parentNode) {
        if (f.isFunction(a)) return this.each(function (b) {
          var c = f(this),
              d = c.html();
          c.replaceWith(a.call(this, b, d));
        });
        typeof a != "string" && (a = f(a).detach());
        return this.each(function () {
          var b = this.nextSibling,
              c = this.parentNode;
          f(this).remove(), b ? f(b).before(a) : f(c).append(a);
        });
      }

      return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this;
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, c, d) {
      var e,
          g,
          h,
          i,
          j = a[0],
          k = [];
      if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bd.test(j)) return this.each(function () {
        f(this).domManip(a, c, d, !0);
      });
      if (f.isFunction(j)) return this.each(function (e) {
        var g = f(this);
        a[0] = j.call(this, e, c ? g.html() : b), g.domManip(a, c, d);
      });

      if (this[0]) {
        i = j && j.parentNode, f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
          fragment: i
        } : e = f.buildFragment(a, this, k), h = e.fragment, h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;

        if (g) {
          c = c && f.nodeName(g, "tr");

          for (var l = 0, m = this.length, n = m - 1; l < m; l++) {
            d.call(c ? bi(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h);
          }
        }

        k.length && f.each(k, function (a, b) {
          b.src ? f.ajax({
            type: "GET",
            global: !1,
            url: b.src,
            async: !1,
            dataType: "script"
          }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(bf, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b);
        });
      }

      return this;
    }
  }), f.buildFragment = function (a, b, d) {
    var e,
        g,
        h,
        i,
        j = a[0];
    b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment || (i = c), a.length === 1 && typeof j == "string" && j.length < 512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support.checkClone || !bd.test(j)) && (f.support.html5Clone || !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !== 1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
    return {
      fragment: e,
      cacheable: g
    };
  }, f.fragments = {}, f.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    f.fn[a] = function (c) {
      var d = [],
          e = f(c),
          g = this.length === 1 && this[0].parentNode;

      if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
        e[b](this[0]);
        return this;
      }

      for (var h = 0, i = e.length; h < i; h++) {
        var j = (h > 0 ? this.clone(!0) : this).get();
        f(e[h])[b](j), d = d.concat(j);
      }

      return this.pushStack(d, a, e.selector);
    };
  }), f.extend({
    clone: function clone(a, b, c) {
      var d,
          e,
          g,
          h = f.support.html5Clone || f.isXMLDoc(a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : bo(a);

      if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
        bk(a, h), d = bl(a), e = bl(h);

        for (g = 0; d[g]; ++g) {
          e[g] && bk(d[g], e[g]);
        }
      }

      if (b) {
        bj(a, h);

        if (c) {
          d = bl(a), e = bl(h);

          for (g = 0; d[g]; ++g) {
            bj(d[g], e[g]);
          }
        }
      }

      d = e = null;
      return h;
    },
    clean: function clean(a, b, d, e) {
      var g,
          h,
          i,
          j = [];
      b = b || c, typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);

      for (var k = 0, l; (l = a[k]) != null; k++) {
        typeof l == "number" && (l += "");
        if (!l) continue;
        if (typeof l == "string") if (!_.test(l)) l = b.createTextNode(l);else {
          l = l.replace(Y, "<$1></$2>");
          var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
              n = bg[m] || bg._default,
              o = n[0],
              p = b.createElement("div"),
              q = bh.childNodes,
              r;
          b === c ? bh.appendChild(p) : U(b).appendChild(p), p.innerHTML = n[1] + l + n[2];

          while (o--) {
            p = p.lastChild;
          }

          if (!f.support.tbody) {
            var s = $.test(l),
                t = m === "table" && !s ? p.firstChild && p.firstChild.childNodes : n[1] === "<table>" && !s ? p.childNodes : [];

            for (i = t.length - 1; i >= 0; --i) {
              f.nodeName(t[i], "tbody") && !t[i].childNodes.length && t[i].parentNode.removeChild(t[i]);
            }
          }

          !f.support.leadingWhitespace && X.test(l) && p.insertBefore(b.createTextNode(X.exec(l)[0]), p.firstChild), l = p.childNodes, p && (p.parentNode.removeChild(p), q.length > 0 && (r = q[q.length - 1], r && r.parentNode && r.parentNode.removeChild(r)));
        }
        var u;
        if (!f.support.appendChecked) if (l[0] && typeof (u = l.length) == "number") for (i = 0; i < u; i++) {
          bn(l[i]);
        } else bn(l);
        l.nodeType ? j.push(l) : j = f.merge(j, l);
      }

      if (d) {
        g = function g(a) {
          return !a.type || be.test(a.type);
        };

        for (k = 0; j[k]; k++) {
          h = j[k];
          if (e && f.nodeName(h, "script") && (!h.type || be.test(h.type))) e.push(h.parentNode ? h.parentNode.removeChild(h) : h);else {
            if (h.nodeType === 1) {
              var v = f.grep(h.getElementsByTagName("script"), g);
              j.splice.apply(j, [k + 1, 0].concat(v));
            }

            d.appendChild(h);
          }
        }
      }

      return j;
    },
    cleanData: function cleanData(a) {
      var b,
          c,
          d = f.cache,
          e = f.event.special,
          g = f.support.deleteExpando;

      for (var h = 0, i; (i = a[h]) != null; h++) {
        if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) continue;
        c = i[f.expando];

        if (c) {
          b = d[c];

          if (b && b.events) {
            for (var j in b.events) {
              e[j] ? f.event.remove(i, j) : f.removeEvent(i, j, b.handle);
            }

            b.handle && (b.handle.elem = null);
          }

          g ? delete i[f.expando] : i.removeAttribute && i.removeAttribute(f.expando), delete d[c];
        }
      }
    }
  });
  var bp = /alpha\([^)]*\)/i,
      bq = /opacity=([^)]*)/,
      br = /([A-Z]|^ms)/g,
      bs = /^[\-+]?(?:\d*\.)?\d+$/i,
      bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
      bu = /^([\-+])=([\-+.\de]+)/,
      bv = /^margin/,
      bw = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      bx = ["Top", "Right", "Bottom", "Left"],
      by,
      bz,
      bA;
  f.fn.css = function (a, c) {
    return f.access(this, function (a, c, d) {
      return d !== b ? f.style(a, c, d) : f.css(a, c);
    }, a, c, arguments.length > 1);
  }, f.extend({
    cssHooks: {
      opacity: {
        get: function get(a, b) {
          if (b) {
            var c = by(a, "opacity");
            return c === "" ? "1" : c;
          }

          return a.style.opacity;
        }
      }
    },
    cssNumber: {
      fillOpacity: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function style(a, c, d, e) {
      if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
        var g,
            h,
            i = f.camelCase(c),
            j = a.style,
            k = f.cssHooks[i];
        c = f.cssProps[i] || i;

        if (d === b) {
          if (k && "get" in k && (g = k.get(a, !1, e)) !== b) return g;
          return j[c];
        }

        h = _typeof(d), h === "string" && (g = bu.exec(d)) && (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(a, c)), h = "number");
        if (d == null || h === "number" && isNaN(d)) return;
        h === "number" && !f.cssNumber[i] && (d += "px");
        if (!k || !("set" in k) || (d = k.set(a, d)) !== b) try {
          j[c] = d;
        } catch (l) {}
      }
    },
    css: function css(a, c, d) {
      var e, g;
      c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[c] || c, c === "cssFloat" && (c = "float");
      if (g && "get" in g && (e = g.get(a, !0, d)) !== b) return e;
      if (by) return by(a, c);
    },
    swap: function swap(a, b, c) {
      var d = {},
          e,
          f;

      for (f in b) {
        d[f] = a.style[f], a.style[f] = b[f];
      }

      e = c.call(a);

      for (f in b) {
        a.style[f] = d[f];
      }

      return e;
    }
  }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle && (bz = function bz(a, b) {
    var c,
        d,
        e,
        g,
        h = a.style;
    b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument.documentElement, a) && (c = f.style(a, b))), !f.support.pixelMargin && e && bv.test(b) && bt.test(c) && (g = h.width, h.width = c, c = e.width, h.width = g);
    return c;
  }), c.documentElement.currentStyle && (bA = function bA(a, b) {
    var c,
        d,
        e,
        f = a.currentStyle && a.currentStyle[b],
        g = a.style;
    f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = b === "fontSize" ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d));
    return f === "" ? "auto" : f;
  }), by = bz || bA, f.each(["height", "width"], function (a, b) {
    f.cssHooks[b] = {
      get: function get(a, c, d) {
        if (c) return a.offsetWidth !== 0 ? bB(a, b, d) : f.swap(a, bw, function () {
          return bB(a, b, d);
        });
      },
      set: function set(a, b) {
        return bs.test(b) ? b + "px" : b;
      }
    };
  }), f.support.opacity || (f.cssHooks.opacity = {
    get: function get(a, b) {
      return bq.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "";
    },
    set: function set(a, b) {
      var c = a.style,
          d = a.currentStyle,
          e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
          g = d && d.filter || c.filter || "";
      c.zoom = 1;

      if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
        c.removeAttribute("filter");
        if (d && !d.filter) return;
      }

      c.filter = bp.test(g) ? g.replace(bp, e) : g + " " + e;
    }
  }), f(function () {
    f.support.reliableMarginRight || (f.cssHooks.marginRight = {
      get: function get(a, b) {
        return f.swap(a, {
          display: "inline-block"
        }, function () {
          return b ? by(a, "margin-right") : a.style.marginRight;
        });
      }
    });
  }), f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
    var b = a.offsetWidth,
        c = a.offsetHeight;
    return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style && a.style.display || f.css(a, "display")) === "none";
  }, f.expr.filters.visible = function (a) {
    return !f.expr.filters.hidden(a);
  }), f.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (a, b) {
    f.cssHooks[a + b] = {
      expand: function expand(c) {
        var d,
            e = typeof c == "string" ? c.split(" ") : [c],
            f = {};

        for (d = 0; d < 4; d++) {
          f[a + bx[d] + b] = e[d] || e[d - 2] || e[0];
        }

        return f;
      }
    };
  });
  var bC = /%20/g,
      bD = /\[\]$/,
      bE = /\r?\n/g,
      bF = /#.*$/,
      bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
      bH = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
      bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
      bJ = /^(?:GET|HEAD)$/,
      bK = /^\/\//,
      bL = /\?/,
      bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      bN = /^(?:select|textarea)/i,
      bO = /\s+/,
      bP = /([?&])_=[^&]*/,
      bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
      bR = f.fn.load,
      bS = {},
      bT = {},
      bU,
      bV,
      bW = ["*/"] + ["*"];

  try {
    bU = e.href;
  } catch (bX) {
    bU = c.createElement("a"), bU.href = "", bU = bU.href;
  }

  bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
    load: function load(a, c, d) {
      if (typeof a != "string" && bR) return bR.apply(this, arguments);
      if (!this.length) return this;
      var e = a.indexOf(" ");

      if (e >= 0) {
        var g = a.slice(e, a.length);
        a = a.slice(0, e);
      }

      var h = "GET";
      c && (f.isFunction(c) ? (d = c, c = b) : _typeof(c) == "object" && (c = f.param(c, f.ajaxSettings.traditional), h = "POST"));
      var i = this;
      f.ajax({
        url: a,
        type: h,
        dataType: "html",
        data: c,
        complete: function complete(a, b, c) {
          c = a.responseText, a.isResolved() && (a.done(function (a) {
            c = a;
          }), i.html(g ? f("<div>").append(c.replace(bM, "")).find(g) : c)), d && i.each(d, [c, b, a]);
        }
      });
      return this;
    },
    serialize: function serialize() {
      return f.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        return this.elements ? f.makeArray(this.elements) : this;
      }).filter(function () {
        return this.name && !this.disabled && (this.checked || bN.test(this.nodeName) || bH.test(this.type));
      }).map(function (a, b) {
        var c = f(this).val();
        return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
          return {
            name: b.name,
            value: a.replace(bE, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(bE, "\r\n")
        };
      }).get();
    }
  }), f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
    f.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), f.each(["get", "post"], function (a, c) {
    f[c] = function (a, d, e, g) {
      f.isFunction(d) && (g = g || e, e = d, d = b);
      return f.ajax({
        type: c,
        url: a,
        data: d,
        success: e,
        dataType: g
      });
    };
  }), f.extend({
    getScript: function getScript(a, c) {
      return f.get(a, b, c, "script");
    },
    getJSON: function getJSON(a, b, c) {
      return f.get(a, b, c, "json");
    },
    ajaxSetup: function ajaxSetup(a, b) {
      b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings), b$(a, b);
      return a;
    },
    ajaxSettings: {
      url: bU,
      isLocal: bI.test(bV[1]),
      global: !0,
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      processData: !0,
      async: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": bW
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText"
      },
      converters: {
        "* text": a.String,
        "text html": !0,
        "text json": f.parseJSON,
        "text xml": f.parseXML
      },
      flatOptions: {
        context: !0,
        url: !0
      }
    },
    ajaxPrefilter: bY(bS),
    ajaxTransport: bY(bT),
    ajax: function ajax(a, c) {
      function w(a, c, l, m) {
        if (s !== 2) {
          s = 2, q && clearTimeout(q), p = b, n = m || "", v.readyState = a > 0 ? 4 : 0;
          var o,
              r,
              u,
              w = c,
              x = l ? ca(d, v, l) : b,
              y,
              z;

          if (a >= 200 && a < 300 || a === 304) {
            if (d.ifModified) {
              if (y = v.getResponseHeader("Last-Modified")) f.lastModified[k] = y;
              if (z = v.getResponseHeader("Etag")) f.etag[k] = z;
            }

            if (a === 304) w = "notmodified", o = !0;else try {
              r = cb(d, x), w = "success", o = !0;
            } catch (A) {
              w = "parsererror", u = A;
            }
          } else {
            u = w;
            if (!w || a) w = "error", a < 0 && (a = 0);
          }

          v.status = a, v.statusText = "" + (c || w), o ? h.resolveWith(e, [r, w, v]) : h.rejectWith(e, [v, w, u]), v.statusCode(j), j = b, t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]), i.fireWith(e, [v, w]), t && (g.trigger("ajaxComplete", [v, d]), --f.active || f.event.trigger("ajaxStop"));
        }
      }

      _typeof(a) == "object" && (c = a, a = b), c = c || {};
      var d = f.ajaxSetup({}, c),
          e = d.context || d,
          g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event,
          h = f.Deferred(),
          i = f.Callbacks("once memory"),
          j = d.statusCode || {},
          k,
          l = {},
          m = {},
          n,
          o,
          p,
          q,
          r,
          s = 0,
          t,
          u,
          v = {
        readyState: 0,
        setRequestHeader: function setRequestHeader(a, b) {
          if (!s) {
            var c = a.toLowerCase();
            a = m[c] = m[c] || a, l[a] = b;
          }

          return this;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return s === 2 ? n : null;
        },
        getResponseHeader: function getResponseHeader(a) {
          var c;

          if (s === 2) {
            if (!o) {
              o = {};

              while (c = bG.exec(n)) {
                o[c[1].toLowerCase()] = c[2];
              }
            }

            c = o[a.toLowerCase()];
          }

          return c === b ? null : c;
        },
        overrideMimeType: function overrideMimeType(a) {
          s || (d.mimeType = a);
          return this;
        },
        abort: function abort(a) {
          a = a || "abort", p && p.abort(a), w(0, a);
          return this;
        }
      };
      h.promise(v), v.success = v.done, v.error = v.fail, v.complete = i.add, v.statusCode = function (a) {
        if (a) {
          var b;
          if (s < 2) for (b in a) {
            j[b] = [j[b], a[b]];
          } else b = a[v.status], v.then(b, b);
        }

        return this;
      }, d.url = ((a || d.url) + "").replace(bF, "").replace(bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bO), d.crossDomain == null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !(!r || r[1] == bV[1] && r[2] == bV[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bV[3] || (bV[1] === "http:" ? 80 : 443)))), d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)), bZ(bS, d, c, v);
      if (s === 2) return !1;
      t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !bJ.test(d.type), t && f.active++ === 0 && f.event.trigger("ajaxStart");

      if (!d.hasContent) {
        d.data && (d.url += (bL.test(d.url) ? "&" : "?") + d.data, delete d.data), k = d.url;

        if (d.cache === !1) {
          var x = f.now(),
              y = d.url.replace(bP, "$1_=" + x);
          d.url = y + (y === d.url ? (bL.test(d.url) ? "&" : "?") + "_=" + x : "");
        }
      }

      (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType), d.ifModified && (k = k || d.url, f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]), f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])), v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", " + bW + "; q=0.01" : "") : d.accepts["*"]);

      for (u in d.headers) {
        v.setRequestHeader(u, d.headers[u]);
      }

      if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
        v.abort();
        return !1;
      }

      for (u in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[u](d[u]);
      }

      p = bZ(bT, d, c, v);
      if (!p) w(-1, "No Transport");else {
        v.readyState = 1, t && g.trigger("ajaxSend", [v, d]), d.async && d.timeout > 0 && (q = setTimeout(function () {
          v.abort("timeout");
        }, d.timeout));

        try {
          s = 1, p.send(l, w);
        } catch (z) {
          if (s < 2) w(-1, z);else throw z;
        }
      }
      return v;
    },
    param: function param(a, c) {
      var d = [],
          e = function e(a, b) {
        b = f.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
      };

      c === b && (c = f.ajaxSettings.traditional);
      if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) f.each(a, function () {
        e(this.name, this.value);
      });else for (var g in a) {
        b_(g, a[g], c, e);
      }
      return d.join("&").replace(bC, "+");
    }
  }), f.extend({
    active: 0,
    lastModified: {},
    etag: {}
  });
  var cc = f.now(),
      cd = /(\=)\?(&|$)|\?\?/i;
  f.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      return f.expando + "_" + cc++;
    }
  }), f.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e = typeof b.data == "string" && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);

    if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(b.url) || e && cd.test(b.data))) {
      var g,
          h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
          i = a[h],
          j = b.url,
          k = b.data,
          l = "$1" + h + "$2";
      b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j && (e && (k = k.replace(cd, l)), b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))), b.url = j, b.data = k, a[h] = function (a) {
        g = [a];
      }, d.always(function () {
        a[h] = i, g && f.isFunction(i) && a[h](g[0]);
      }), b.converters["script json"] = function () {
        g || f.error(h + " was not called");
        return g[0];
      }, b.dataTypes[0] = "json";
      return "script";
    }
  }), f.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /javascript|ecmascript/
    },
    converters: {
      "text script": function textScript(a) {
        f.globalEval(a);
        return a;
      }
    }
  }), f.ajaxPrefilter("script", function (a) {
    a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
  }), f.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var d,
          e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
      return {
        send: function send(f, g) {
          d = c.createElement("script"), d.async = "async", a.scriptCharset && (d.charset = a.scriptCharset), d.src = a.url, d.onload = d.onreadystatechange = function (a, c) {
            if (c || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, e && d.parentNode && e.removeChild(d), d = b, c || g(200, "success");
          }, e.insertBefore(d, e.firstChild);
        },
        abort: function abort() {
          d && d.onload(0, 1);
        }
      };
    }
  });
  var ce = a.ActiveXObject ? function () {
    for (var a in cg) {
      cg[a](0, 1);
    }
  } : !1,
      cf = 0,
      cg;
  f.ajaxSettings.xhr = a.ActiveXObject ? function () {
    return !this.isLocal && ch() || ci();
  } : ch, function (a) {
    f.extend(f.support, {
      ajax: !!a,
      cors: !!a && "withCredentials" in a
    });
  }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function (c) {
    if (!c.crossDomain || f.support.cors) {
      var _d;

      return {
        send: function send(e, g) {
          var h = c.xhr(),
              i,
              j;
          c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
          if (c.xhrFields) for (j in c.xhrFields) {
            h[j] = c.xhrFields[j];
          }
          c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");

          try {
            for (j in e) {
              h.setRequestHeader(j, e[j]);
            }
          } catch (k) {}

          h.send(c.hasContent && c.data || null), _d = function d(a, e) {
            var j, k, l, m, n;

            try {
              if (_d && (e || h.readyState === 4)) {
                _d = b, i && (h.onreadystatechange = f.noop, ce && delete cg[i]);
                if (e) h.readyState !== 4 && h.abort();else {
                  j = h.status, l = h.getAllResponseHeaders(), m = {}, n = h.responseXML, n && n.documentElement && (m.xml = n);

                  try {
                    m.text = h.responseText;
                  } catch (a) {}

                  try {
                    k = h.statusText;
                  } catch (o) {
                    k = "";
                  }

                  !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204);
                }
              }
            } catch (p) {
              e || g(-1, p);
            }

            m && g(j, k, m, l);
          }, !c.async || h.readyState === 4 ? _d() : (i = ++cf, ce && (cg || (cg = {}, f(a).unload(ce)), cg[i] = _d), h.onreadystatechange = _d);
        },
        abort: function abort() {
          _d && _d(0, 1);
        }
      };
    }
  });
  var cj = {},
      ck,
      cl,
      cm = /^(?:toggle|show|hide)$/,
      cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
      co,
      cp = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]],
      cq;
  f.fn.extend({
    show: function show(a, b, c) {
      var d, e;
      if (a || a === 0) return this.animate(ct("show", 3), a, b, c);

      for (var g = 0, h = this.length; g < h; g++) {
        d = this[g], d.style && (e = d.style.display, !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""), (e === "" && f.css(d, "display") === "none" || !f.contains(d.ownerDocument.documentElement, d)) && f._data(d, "olddisplay", cu(d.nodeName)));
      }

      for (g = 0; g < h; g++) {
        d = this[g];

        if (d.style) {
          e = d.style.display;
          if (e === "" || e === "none") d.style.display = f._data(d, "olddisplay") || "";
        }
      }

      return this;
    },
    hide: function hide(a, b, c) {
      if (a || a === 0) return this.animate(ct("hide", 3), a, b, c);
      var d,
          e,
          g = 0,
          h = this.length;

      for (; g < h; g++) {
        d = this[g], d.style && (e = f.css(d, "display"), e !== "none" && !f._data(d, "olddisplay") && f._data(d, "olddisplay", e));
      }

      for (g = 0; g < h; g++) {
        this[g].style && (this[g].style.display = "none");
      }

      return this;
    },
    _toggle: f.fn.toggle,
    toggle: function toggle(a, b, c) {
      var d = typeof a == "boolean";
      f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
        var b = d ? a : f(this).is(":hidden");
        f(this)[b ? "show" : "hide"]();
      }) : this.animate(ct("toggle", 3), a, b, c);
      return this;
    },
    fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(":hidden").css("opacity", 0).show().end().animate({
        opacity: b
      }, a, c, d);
    },
    animate: function animate(a, b, c, d) {
      function g() {
        e.queue === !1 && f._mark(this);
        var b = f.extend({}, e),
            c = this.nodeType === 1,
            d = c && f(this).is(":hidden"),
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q;
        b.animatedProperties = {};

        for (i in a) {
          g = f.camelCase(i), i !== g && (a[g] = a[i], delete a[i]);

          if ((k = f.cssHooks[g]) && "expand" in k) {
            l = k.expand(a[g]), delete a[g];

            for (i in l) {
              i in a || (a[i] = l[i]);
            }
          }
        }

        for (g in a) {
          h = a[g], f.isArray(h) ? (b.animatedProperties[g] = h[1], h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
          if (h === "hide" && d || h === "show" && !d) return b.complete.call(this);
          c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (!f.support.inlineBlockNeedsLayout || cu(this.nodeName) === "inline" ? this.style.display = "inline-block" : this.style.zoom = 1));
        }

        b.overflow != null && (this.style.overflow = "hidden");

        for (i in a) {
          j = new f.fx(this, b, i), h = a[i], cm.test(h) ? (q = f._data(this, "toggle" + i) || (h === "toggle" ? d ? "show" : "hide" : 0), q ? (f._data(this, "toggle" + i, q === "show" ? "hide" : "show"), j[q]()) : j[h]()) : (m = cn.exec(h), n = j.cur(), m ? (o = parseFloat(m[2]), p = m[3] || (f.cssNumber[i] ? "" : "px"), p !== "px" && (f.style(this, i, (o || 1) + p), n = (o || 1) / j.cur() * n, f.style(this, i, n + p)), m[1] && (o = (m[1] === "-=" ? -1 : 1) * o + n), j.custom(n, o, p)) : j.custom(n, h, ""));
        }

        return !0;
      }

      var e = f.speed(b, c, d);
      if (f.isEmptyObject(a)) return this.each(e.complete, [!1]);
      a = f.extend({}, a);
      return e.queue === !1 ? this.each(g) : this.queue(e.queue, g);
    },
    stop: function stop(a, c, d) {
      typeof a != "string" && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []);
      return this.each(function () {
        function h(a, b, c) {
          var e = b[c];
          f.removeData(a, c, !0), e.stop(d);
        }

        var b,
            c = !1,
            e = f.timers,
            g = f._data(this);

        d || f._unmark(!0, this);
        if (a == null) for (b in g) {
          g[b] && g[b].stop && b.indexOf(".run") === b.length - 4 && h(this, g, b);
        } else g[b = a + ".run"] && g[b].stop && h(this, g, b);

        for (b = e.length; b--;) {
          e[b].elem === this && (a == null || e[b].queue === a) && (d ? e[b](!0) : e[b].saveState(), c = !0, e.splice(b, 1));
        }

        (!d || !c) && f.dequeue(this, a);
      });
    }
  }), f.each({
    slideDown: ct("show", 1),
    slideUp: ct("hide", 1),
    slideToggle: ct("toggle", 1),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (a, b) {
    f.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), f.extend({
    speed: function speed(a, b, c) {
      var d = a && _typeof(a) == "object" ? f.extend({}, a) : {
        complete: c || !c && b || f.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !f.isFunction(b) && b
      };
      d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default;
      if (d.queue == null || d.queue === !0) d.queue = "fx";
      d.old = d.complete, d.complete = function (a) {
        f.isFunction(d.old) && d.old.call(this), d.queue ? f.dequeue(this, d.queue) : a !== !1 && f._unmark(this);
      };
      return d;
    },
    easing: {
      linear: function linear(a) {
        return a;
      },
      swing: function swing(a) {
        return -Math.cos(a * Math.PI) / 2 + .5;
      }
    },
    timers: [],
    fx: function fx(a, b, c) {
      this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {};
    }
  }), f.fx.prototype = {
    update: function update() {
      this.options.step && this.options.step.call(this.elem, this.now, this), (f.fx.step[this.prop] || f.fx.step._default)(this);
    },
    cur: function cur() {
      if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) return this.elem[this.prop];
      var a,
          b = f.css(this.elem, this.prop);
      return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a;
    },
    custom: function custom(a, c, d) {
      function h(a) {
        return e.step(a);
      }

      var e = this,
          g = f.fx;
      this.startTime = cq || cr(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (f.cssNumber[this.prop] ? "" : "px"), h.queue = this.options.queue, h.elem = this.elem, h.saveState = function () {
        f._data(e.elem, "fxshow" + e.prop) === b && (e.options.hide ? f._data(e.elem, "fxshow" + e.prop, e.start) : e.options.show && f._data(e.elem, "fxshow" + e.prop, e.end));
      }, h() && f.timers.push(h) && !co && (co = setInterval(g.tick, g.interval));
    },
    show: function show() {
      var a = f._data(this.elem, "fxshow" + this.prop);

      this.options.orig[this.prop] = a || f.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()), f(this.elem).show();
    },
    hide: function hide() {
      this.options.orig[this.prop] = f._data(this.elem, "fxshow" + this.prop) || f.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0);
    },
    step: function step(a) {
      var b,
          c,
          d,
          e = cq || cr(),
          g = !0,
          h = this.elem,
          i = this.options;

      if (a || e >= i.duration + this.startTime) {
        this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;

        for (b in i.animatedProperties) {
          i.animatedProperties[b] !== !0 && (g = !1);
        }

        if (g) {
          i.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
            h.style["overflow" + b] = i.overflow[a];
          }), i.hide && f(h).hide();
          if (i.hide || i.show) for (b in i.animatedProperties) {
            f.style(h, b, i.orig[b]), f.removeData(h, "fxshow" + b, !0), f.removeData(h, "toggle" + b, !0);
          }
          d = i.complete, d && (i.complete = !1, d.call(h));
        }

        return !1;
      }

      i.duration == Infinity ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = f.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update();
      return !0;
    }
  }, f.extend(f.fx, {
    tick: function tick() {
      var a,
          b = f.timers,
          c = 0;

      for (; c < b.length; c++) {
        a = b[c], !a() && b[c] === a && b.splice(c--, 1);
      }

      b.length || f.fx.stop();
    },
    interval: 13,
    stop: function stop() {
      clearInterval(co), co = null;
    },
    speeds: {
      slow: 600,
      fast: 200,
      _default: 400
    },
    step: {
      opacity: function opacity(a) {
        f.style(a.elem, "opacity", a.now);
      },
      _default: function _default(a) {
        a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now;
      }
    }
  }), f.each(cp.concat.apply([], cp), function (a, b) {
    b.indexOf("margin") && (f.fx.step[b] = function (a) {
      f.style(a.elem, b, Math.max(0, a.now) + a.unit);
    });
  }), f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
    return f.grep(f.timers, function (b) {
      return a === b.elem;
    }).length;
  });
  var cv,
      cw = /^t(?:able|d|h)$/i,
      cx = /^(?:body|html)$/i;
  "getBoundingClientRect" in c.documentElement ? cv = function cv(a, b, c, d) {
    try {
      d = a.getBoundingClientRect();
    } catch (e) {}

    if (!d || !f.contains(c, a)) return d ? {
      top: d.top,
      left: d.left
    } : {
      top: 0,
      left: 0
    };
    var g = b.body,
        h = cy(b),
        i = c.clientTop || g.clientTop || 0,
        j = c.clientLeft || g.clientLeft || 0,
        k = h.pageYOffset || f.support.boxModel && c.scrollTop || g.scrollTop,
        l = h.pageXOffset || f.support.boxModel && c.scrollLeft || g.scrollLeft,
        m = d.top + k - i,
        n = d.left + l - j;
    return {
      top: m,
      left: n
    };
  } : cv = function cv(a, b, c) {
    var d,
        e = a.offsetParent,
        g = a,
        h = b.body,
        i = b.defaultView,
        j = i ? i.getComputedStyle(a, null) : a.currentStyle,
        k = a.offsetTop,
        l = a.offsetLeft;

    while ((a = a.parentNode) && a !== h && a !== c) {
      if (f.support.fixedPosition && j.position === "fixed") break;
      d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -= a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop, l += a.offsetLeft, f.support.doesNotAddBorder && (!f.support.doesAddBorderForTableAndCells || !cw.test(a.nodeName)) && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), g = e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible && d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) || 0, l += parseFloat(d.borderLeftWidth) || 0), j = d;
    }

    if (j.position === "relative" || j.position === "static") k += h.offsetTop, l += h.offsetLeft;
    f.support.fixedPosition && j.position === "fixed" && (k += Math.max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft, h.scrollLeft));
    return {
      top: k,
      left: l
    };
  }, f.fn.offset = function (a) {
    if (arguments.length) return a === b ? this : this.each(function (b) {
      f.offset.setOffset(this, a, b);
    });
    var c = this[0],
        d = c && c.ownerDocument;
    if (!d) return null;
    if (c === d.body) return f.offset.bodyOffset(c);
    return cv(c, d, d.documentElement);
  }, f.offset = {
    bodyOffset: function bodyOffset(a) {
      var b = a.offsetTop,
          c = a.offsetLeft;
      f.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0, c += parseFloat(f.css(a, "marginLeft")) || 0);
      return {
        top: b,
        left: c
      };
    },
    setOffset: function setOffset(a, b, c) {
      var d = f.css(a, "position");
      d === "static" && (a.style.position = "relative");
      var e = f(a),
          g = e.offset(),
          h = f.css(a, "top"),
          i = f.css(a, "left"),
          j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1,
          k = {},
          l = {},
          m,
          n;
      j ? (l = e.position(), m = l.top, n = l.left) : (m = parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(b) && (b = b.call(a, c, g)), b.top != null && (k.top = b.top - g.top + m), b.left != null && (k.left = b.left - g.left + n), "using" in b ? b.using.call(a, k) : e.css(k);
    }
  }, f.fn.extend({
    position: function position() {
      if (!this[0]) return null;
      var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = cx.test(b[0].nodeName) ? {
        top: 0,
        left: 0
      } : b.offset();
      c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -= parseFloat(f.css(a, "marginLeft")) || 0, d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
      return {
        top: c.top - d.top,
        left: c.left - d.left
      };
    },
    offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent || c.body;

        while (a && !cx.test(a.nodeName) && f.css(a, "position") === "static") {
          a = a.offsetParent;
        }

        return a;
      });
    }
  }), f.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (a, c) {
    var d = /Y/.test(c);

    f.fn[a] = function (e) {
      return f.access(this, function (a, e, g) {
        var h = cy(a);
        if (g === b) return h ? c in h ? h[c] : f.support.boxModel && h.document.documentElement[e] || h.document.body[e] : a[e];
        h ? h.scrollTo(d ? f(h).scrollLeft() : g, d ? g : f(h).scrollTop()) : a[e] = g;
      }, a, e, arguments.length, null);
    };
  }), f.each({
    Height: "height",
    Width: "width"
  }, function (a, c) {
    var d = "client" + a,
        e = "scroll" + a,
        g = "offset" + a;
    f.fn["inner" + a] = function () {
      var a = this[0];
      return a ? a.style ? parseFloat(f.css(a, c, "padding")) : this[c]() : null;
    }, f.fn["outer" + a] = function (a) {
      var b = this[0];
      return b ? b.style ? parseFloat(f.css(b, c, a ? "margin" : "border")) : this[c]() : null;
    }, f.fn[c] = function (a) {
      return f.access(this, function (a, c, h) {
        var i, j, k, l;

        if (f.isWindow(a)) {
          i = a.document, j = i.documentElement[d];
          return f.support.boxModel && j || i.body && i.body[d] || j;
        }

        if (a.nodeType === 9) {
          i = a.documentElement;
          if (i[d] >= i[e]) return i[d];
          return Math.max(a.body[e], i[e], a.body[g], i[g]);
        }

        if (h === b) {
          k = f.css(a, c), l = parseFloat(k);
          return f.isNumeric(l) ? l : k;
        }

        f(a).css(c, h);
      }, c, a, arguments.length, null);
    };
  }), a.jQuery = a.$ = f,  true && __webpack_require__.amdO.jQuery && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return f;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
})(window);

;
/**/

/* Source and licensing information for the line(s) below can be found at https://www.indiatoday.in/misc/drupal.js. */

var Drupal = Drupal || {
  settings: {},
  behaviors: {},
  locale: {}
};
jQuery.noConflict();

(function ($) {
  var jquery_init = $.fn.init;

  $.fn.init = function (selector, context, rootjQuery) {
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');

      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) throw 'Syntax error, unrecognized expression: ' + selector;
      }
    }

    ;
    return jquery_init.call(this, selector, context, rootjQuery);
  };

  $.fn.init.prototype = jquery_init.prototype;

  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || Drupal.settings;
    $.each(Drupal.behaviors, function () {
      if ($.isFunction(this.attach)) this.attach(context, settings);
    });
  };

  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || Drupal.settings;
    trigger = trigger || 'unload';
    $.each(Drupal.behaviors, function () {
      if ($.isFunction(this.detach)) this.detach(context, settings, trigger);
    });
  };

  Drupal.checkPlain = function (str) {
    var character,
        regex,
        replace = {
      '&': '&amp;',
      '"': '&quot;',
      '<': '&lt;',
      '>': '&gt;'
    };
    str = String(str);

    for (character in replace) {
      if (replace.hasOwnProperty(character)) {
        regex = new RegExp(character, 'g');
        str = str.replace(regex, replace[character]);
      }
    }

    ;
    return str;
  };

  Drupal.formatString = function (str, args) {
    for (var key in args) {
      switch (key.charAt(0)) {
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
          break;

        case '!':
          break;

        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }

      ;
      str = str.replace(key, args[key]);
    }

    ;
    return str;
  };

  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';
    if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) str = Drupal.locale.strings[options.context][str];
    if (args) str = Drupal.formatString(str, args);
    return str;
  };

  Drupal.formatPlural = function (count, singular, plural, args, options) {
    var args = args || {};
    args['@count'] = count;
    var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : args['@count'] == 1 ? 0 : 1;

    if (index == 0) {
      return Drupal.t(singular, args, options);
    } else if (index == 1) {
      return Drupal.t(plural, args, options);
    } else {
      args['@count[' + index + ']'] = args['@count'];
      delete args['@count'];
      return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
    }
  };

  Drupal.absoluteUrl = function (url) {
    var urlParsingNode = document.createElement('a');

    try {
      url = decodeURIComponent(url);
    } catch (e) {}

    ;
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.cloneNode(false).href;
  };

  Drupal.urlIsLocal = function (url) {
    var absoluteUrl = Drupal.absoluteUrl(url),
        protocol = location.protocol;
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) protocol = 'https:';
    var baseUrl = protocol + '//' + location.host + Drupal.settings.basePath.slice(0, -1);

    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {}

    ;

    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {}

    ;
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
  };

  Drupal.theme = function (func) {
    var args = Array.prototype.slice.apply(arguments, [1]);
    return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
  };

  Drupal.freezeHeight = function () {
    Drupal.unfreezeHeight();
    $('<div id="freeze-height"></div>').css({
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '1px',
      height: $('body').css('height')
    }).appendTo('body');
  };

  Drupal.unfreezeHeight = function () {
    $('#freeze-height').remove();
  };

  Drupal.encodePath = function (item, uri) {
    uri = uri || location.href;
    return encodeURIComponent(item).replace(/%2F/g, '/');
  };

  Drupal.getSelection = function (element) {
    if (typeof element.selectionStart != 'number' && document.selection) {
      var range1 = document.selection.createRange(),
          range2 = range1.duplicate();
      range2.moveToElementText(element);
      range2.setEndPoint('EndToEnd', range1);
      var start = range2.text.length - range1.text.length,
          end = start + range1.text.length;
      return {
        start: start,
        end: end
      };
    }

    ;
    return {
      start: element.selectionStart,
      end: element.selectionEnd
    };
  };

  Drupal.ajaxError = function (xmlhttp, uri, customMessage) {
    var statusCode, statusText, pathText, responseText, readyStateText, message;

    if (xmlhttp.status) {
      statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") + "\n" + Drupal.t("HTTP Result Code: !status", {
        '!status': xmlhttp.status
      });
    } else statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");

    statusCode += "\n" + Drupal.t("Debugging information follows.");
    pathText = "\n" + Drupal.t("Path: !uri", {
      '!uri': uri
    });
    statusText = '';

    try {
      statusText = "\n" + Drupal.t("StatusText: !statusText", {
        '!statusText': $.trim(xmlhttp.statusText)
      });
    } catch (e) {}

    ;
    responseText = '';

    try {
      responseText = "\n" + Drupal.t("ResponseText: !responseText", {
        '!responseText': $.trim(xmlhttp.responseText)
      });
    } catch (e) {}

    ;
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, "");
    responseText = responseText.replace(/[\n]+\s+/g, "\n");
    readyStateText = xmlhttp.status == 0 ? "\n" + Drupal.t("ReadyState: !readyState", {
      '!readyState': xmlhttp.readyState
    }) : "";
    customMessage = customMessage ? "\n" + Drupal.t("CustomMessage: !customMessage", {
      '!customMessage': customMessage
    }) : "";
    message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
    return message;
  };

  $('html').addClass('js');
  document.cookie = 'has_js=1; path=/';
  $(function () {
    if (jQuery.support.positionFixed === undefined) {
      var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
      jQuery.support.positionFixed = el[0].offsetTop === 10;
      el.remove();
    }
  });
  $(function () {
    Drupal.attachBehaviors(document, Drupal.settings);
  });
  Drupal.theme.prototype = {
    placeholder: function placeholder(str) {
      return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
    }
  };
})(jQuery);

;
/* Source and licensing information for the above line(s) can be found at https://www.indiatoday.in/misc/drupal.js. */

/***/ }),

/***/ "./resources/js/interface/my_custom.js":
/*!*********************************************!*\
  !*** ./resources/js/interface/my_custom.js ***!
  \*********************************************/
/***/ (() => {

jQuery(document).on('click', '.main-pagination .load-button', function () {
  var load = jQuery(this);

  if (!load.hasClass('loading')) {
    load.addClass('loading').find('.tsi').addClass('tsi-spin');
    var page = jQuery(this).attr('data-page');

    if (!!page) {
      var url = '/latest-pagination?page=' + page;
      jQuery.get(url, function (data, status) {
        if (status === 'success') {
          if (!!data) {
            var html = typeof data['html'] !== 'undefined' ? data['html'] : '';
            load.closest('.main-content').find('.block-content').find('.posts-wrap').append(html);
            var next_page = typeof data['next_page'] !== 'undefined' ? data['next_page'] : false;

            if (next_page) {
              page++;
              load.attr('data-page', page);
            } else {
              load.hide();
            }
          } else {
            load.hide();
          }
        }

        load.removeClass('loading').find('.tsi').removeClass('tsi-spin');
      });
    }
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./resources/js/app_interface.js ***!
  \***************************************/
__webpack_require__(/*! ./interface/js_jquery */ "./resources/js/interface/js_jquery.js");

__webpack_require__(/*! ./interface/autoptimize */ "./resources/js/interface/autoptimize.js");

__webpack_require__(/*! ./interface/my_custom */ "./resources/js/interface/my_custom.js");
})();

/******/ })()
;