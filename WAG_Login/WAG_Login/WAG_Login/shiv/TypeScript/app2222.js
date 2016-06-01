function isOnScreen(c) { var u, q; u = window.screen.width; q = window.screen.height - 100; $doc = $(document); c = $(c).offset(); var v = c.left - $doc.scrollLeft() + 222, f = c.top - $doc.scrollTop() + 285; return !(0 > c.left || v > u || 0 > c.top || f > q) }
!function (c, u) { "object" == typeof module && "object" == typeof module.exports ? module.exports = c.document ? u(c, !0) : function (c) { if (!c.document) throw Error("jQuery requires a window with a document"); return u(c) } : u(c) }("undefined" != typeof window ? window : this, function (c, u) {
    function q(b, d) { b = d || b; return "none" === f.css(b, "display") || !f.contains(b.ownerDocument, b) } function v(b, d) { return d.toUpperCase() } function f(b, d) { return new f.fn.a(b, d) } function r(b) {
        var d = b.length, e = f.type(b); return "function" === e || f.isWindow(b) ?
        !1 : 1 === b.nodeType && d ? !0 : "array" === e || 0 === d || "number" == typeof d && 0 < d && d - 1 in b
    } function g(b, d, e) { if (f.isFunction(d)) return f.grep(b, function (b, I) { return !!d.call(b, I, b) !== e }); if (d.nodeType) return f.grep(b, function (b) { return b === d !== e }); if ("string" == typeof d) { if (Hb.test(d)) return f.filter(d, b, e); d = f.filter(d, b) } return f.grep(b, function (b) { return 0 <= f.inArray(b, d) !== e }) } function z(b, d) { do b = b[d]; while (b && 1 !== b.nodeType); return b } function n(b) {
        var d = fb[b] = {}; f.each(b.match(ma) || [], function (b, e) { d[e] = !0 });
        return d
    } function l() { H.addEventListener ? (H.removeEventListener("DOMContentLoaded", h, !1), c.removeEventListener("load", h, !1)) : (H.detachEvent("onreadystatechange", h), c.detachEvent("onload", h)) } function h() { if (H.addEventListener || "load" === event.type || "complete" === H.readyState) l(), f.ready() } function E(b, d, e) {
        if (void 0 === e && 1 === b.nodeType) if (e = "data-" + d.replace(Ib, "-$1").toLowerCase(), e = b.getAttribute(e), "string" == typeof e) {
            try {
                e = "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : +e + "" === e ? +e : Jb.test(e) ? f.parseJSON(e) :
                e
            } catch (c) { } f.data(b, d, e)
        } else e = void 0; return e
    } function p(b) { for (var d in b) if (("data" !== d || !f.isEmptyObject(b[d])) && "toJSON" !== d) return !1; return !0 } function B(b, d, e, c) {
        if (f.acceptData(b)) {
            var k = f.expando, w = b.nodeType, g = w ? f.cache : b, x = w ? b[k] : b[k] && k; if (x && g[x] && (c || g[x].data) || void 0 !== e || "string" != typeof d) return x || (x = w ? b[k] = R.pop() || f.guid++ : k), g[x] || (g[x] = w ? {} : { toJSON: f.noop }), ("object" == typeof d || "function" == typeof d) && (c ? g[x] = f.extend(g[x], d) : g[x].data = f.extend(g[x].data, d)), b = g[x], c || (b.data ||
            (b.data = {}), b = b.data), void 0 !== e && (b[f.camelCase(d)] = e), "string" == typeof d ? (e = b[d], null == e && (e = b[f.camelCase(d)])) : e = b, e
        }
    } function A(b, d, e) {
        if (f.acceptData(b)) {
            var c, k, w = b.nodeType, g = w ? f.cache : b, x = w ? b[f.expando] : f.expando; if (g[x]) {
                if (d && (c = e ? g[x] : g[x].data)) { f.isArray(d) ? d = d.concat(f.map(d, f.camelCase)) : d in c ? d = [d] : (d = f.camelCase(d), d = d in c ? [d] : d.split(" ")); for (k = d.length; k--;) delete c[d[k]]; if (e ? !p(c) : !f.isEmptyObject(c)) return } if (!e && (delete g[x].data, !p(g[x]))) return; w ? f.cleanData([b], !0) : F.deleteExpando ||
                g != g.window ? delete g[x] : g[x] = null
            }
        }
    } function D() { return !0 } function C() { return !1 } function y() { try { return H.activeElement } catch (b) { } } function b(b) { var d = gb.split("|"); b = b.createDocumentFragment(); if (b.createElement) for (; d.length;) d.pop(); return b } function e(b, d) {
        var c, k, w = 0, g = typeof b.getElementsByTagName !== la ? b.getElementsByTagName(d || "*") : typeof b.querySelectorAll !== la ? b.querySelectorAll(d || "*") : void 0; if (!g) for (g = [], c = b.childNodes || b; null != (k = c[w]) ; w++) !d || f.nodeName(k, d) ? g.push(k) : f.merge(g, e(k,
        d)); return void 0 === d || d && f.nodeName(b, d) ? f.merge([b], g) : g
    } function d(b) { Ua.test(b.type) && (b.defaultChecked = b.checked) } function k(b, d) { return f.nodeName(b, "table") && f.nodeName(11 !== d.nodeType ? d : d.firstChild, "tr") ? b.getElementsByTagName("tbody")[0] || b.appendChild(b.ownerDocument.createElement("tbody")) : b } function w(b) { b.type = (null !== f.find.attr(b, "type")) + "/" + b.type; return b } function x(b) { var d = Kb.exec(b.type); d ? b.type = d[1] : b.removeAttribute("type"); return b } function J(b, d) {
        for (var e, c = 0; null != (e =
        b[c]) ; c++) f._data(e, "globalEval", !d || f._data(d[c], "globalEval"))
    } function t(b, d) { if (1 === d.nodeType && f.hasData(b)) { var e, c, k; c = f._data(b); var w = f._data(d, c), g = c.events; if (g) for (e in delete w.handle, w.events = {}, g) for (c = 0, k = g[e].length; k > c; c++) f.event.add(d, e, g[e][c]); w.data && (w.data = f.extend({}, w.data)) } } function K(b, d) { var e, k = f(d.createElement(b)).appendTo(d.body), w = c.getDefaultComputedStyle && (e = c.getDefaultComputedStyle(k[0])) ? e.display : f.css(k[0], "display"); k.detach(); return w } function M(b) {
        var d =
        H, e = hb[b]; e || (e = K(b, d), "none" !== e && e || (Ha = (Ha || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(d.documentElement), d = (Ha[0].contentWindow || Ha[0].contentDocument).document, d.write(), d.close(), e = K(b, d), Ha.detach()), hb[b] = e); return e
    } function L(b, d) { return { get: function () { var e = b(); if (null != e) { if (!e) return (this.get = d).apply(this, arguments); delete this.get } } } } function ea(b, d) {
        if (d in b) return d; for (var e = d.charAt(0).toUpperCase() + d.slice(1), c = d, k = ib.length; k--;) if (d = ib[k] + e, d in b) return d;
        return c
    } function S(b, d) { for (var e, c, k, w = [], g = 0, x = b.length; x > g; g++) c = b[g], c.style && (w[g] = f._data(c, "olddisplay"), e = c.style.display, d ? (w[g] || "none" !== e || (c.style.display = ""), "" === c.style.display && q(c) && (w[g] = f._data(c, "olddisplay", M(c.nodeName)))) : (k = q(c), (e && "none" !== e || !k) && f._data(c, "olddisplay", k ? e : f.css(c, "display")))); for (g = 0; x > g; g++) c = b[g], c.style && (d && "none" !== c.style.display && "" !== c.style.display || (c.style.display = d ? w[g] || "" : "none")); return b } function ba(b, d, e) {
        return (b = Lb.exec(d)) ? Math.max(0,
        b[1] - (e || 0)) + (b[2] || "px") : d
    } function Q(b, d, e, c, k) { d = e === (c ? "border" : "content") ? 4 : "width" === d ? 1 : 0; for (var g = 0; 4 > d; d += 2) "margin" === e && (g += f.css(b, e + xa[d], !0, k)), c ? ("content" === e && (g -= f.css(b, "padding" + xa[d], !0, k)), "margin" !== e && (g -= f.css(b, "border" + xa[d] + "Width", !0, k))) : (g += f.css(b, "padding" + xa[d], !0, k), "padding" !== e && (g += f.css(b, "border" + xa[d] + "Width", !0, k))); return g } function ga(b, d, e) {
        var c = !0, k = "width" === d ? b.offsetWidth : b.offsetHeight, g = ya(b), w = F.boxSizing && "border-box" === f.css(b, "boxSizing", !1,
        g); if (0 >= k || null == k) { k = oa(b, d, g); (0 > k || null == k) && (k = b.style[d]); if (La.test(k)) return k; c = w && (F.boxSizingReliable() || k === b.style[d]); k = parseFloat(k) || 0 } return k + Q(b, d, e || (w ? "border" : "content"), c, g) + "px"
    } function O(b, d, e, c, k) { return new O.prototype.ee(b, d, e, c, k) } function ja() { setTimeout(function () { Da = void 0 }); return Da = f.now() } function U(b, d) { var e, c = { height: b }, k = 0; for (d = d ? 1 : 0; 4 > k; k += 2 - d) e = xa[k], c["margin" + e] = c["padding" + e] = b; d && (c.opacity = c.width = b); return c } function da(b, d, e) {
        for (var c, k = (Ia[d] ||
        []).concat(Ia["*"]), f = 0, g = k.length; g > f; f++) if (c = k[f].call(e, d, b)) return c
    } function Z(b, d) { var e, c, k, g, w; for (e in b) if (c = f.camelCase(e), k = d[c], g = b[e], f.isArray(g) && (k = g[1], g = b[e] = g[0]), e !== c && (b[c] = g, delete b[e]), (w = f.cssHooks[c]) && "expand" in w) for (e in g = w.expand(g), delete b[c], g) e in b || (b[e] = g[e], d[e] = k); else d[c] = k } function ta(b, d, e) {
        function c() {
            if (k) return !1; for (var d = Da || ja(), d = Math.max(0, t.startTime + t.duration - d), e = 1 - (d / t.duration || 0), f = 0, g = t.tweens.length; g > f; f++) t.tweens[f].run(e); x.notifyWith(b,
            [t, e, d]); if (1 > e && g) return d; x.resolveWith(b, [t]); return !1
        } var k, g = 0, w = Ma.length, x = f.Deferred().always(function () { delete c.elem }), t = x.promise({
            elem: b, props: f.extend({}, d), opts: f.extend(!0, { specialEasing: {} }, e), originalProperties: d, originalOptions: e, startTime: Da || ja(), duration: e.duration, tweens: [], createTween: function (d, e) { var c = f.Tween(b, t.opts, d, e, t.opts.specialEasing[d] || t.opts.easing); t.tweens.push(c); return c }, stop: function (d) {
                var e = 0, c = d ? t.tweens.length : 0; if (k) return this; for (k = !0; c > e; e++) t.tweens[e].run(1);
                d ? x.resolveWith(b, [t, d]) : x.rejectWith(b, [t, d]); return this
            }
        }); e = t.props; for (Z(e, t.opts.specialEasing) ; w > g; g++) if (d = Ma[g].call(t, b, e, t.opts)) return d; f.map(e, da, t); f.isFunction(t.opts.start) && t.opts.start.call(b, t); f.fx.timer(f.extend(c, { elem: b, anim: t, queue: t.opts.queue })); return t.progress(t.opts.progress).done(t.opts.done, t.opts.complete).fail(t.opts.fail).always(t.opts.always)
    } function N(b) {
        return function (d, e) {
            "string" != typeof d && (e = d, d = "*"); var c, k = 0, g = d.toLowerCase().match(ma) || []; if (f.isFunction(e)) for (; c =
            g[k++];) "+" === c.charAt(0) ? (c = c.slice(1) || "*", (b[c] = b[c] || []).unshift(e)) : (b[c] = b[c] || []).push(e)
        }
    } function V(b, d, e, c) { function k(x) { var t; g[x] = !0; f.each(b[x] || [], function (b, I) { var f = I(d, e, c); return "string" != typeof f || w || g[f] ? w ? !(t = f) : void 0 : (d.dataTypes.unshift(f), k(f), !1) }); return t } var g = {}, w = b === Va; return k(d.dataTypes[0]) || !g["*"] && k("*") } function aa(b, d) { var e, c, k = f.ajaxSettings.flatOptions || {}; for (c in d) void 0 !== d[c] && ((k[c] ? b : e || (e = {}))[c] = d[c]); e && f.extend(!0, b, e); return b } function qa(b,
    d, e, c) { var k; if (f.isArray(d)) f.each(d, function (d, k) { e || Mb.test(b) ? c(b, k) : qa(b + "[" + ("object" == typeof k ? d : "") + "]", k, e, c) }); else if (e || "object" !== f.type(d)) c(b, d); else for (k in d) qa(b + "[" + k + "]", d[k], e, c) } function pa() { try { return new c.XMLHttpRequest } catch (b) { } } function ua(b) { return f.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1 } var R = [], W = R.slice, ka = R.concat, P = R.push, Ea = R.indexOf, ra = {}, sa = ra.toString, ha = ra.hasOwnProperty, F = {}, Ga = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, Nb = /^-ms-/, Ja = /-([\da-z])/gi;
    f.fn = f.prototype = {
        jquery: "1.11.2", constructor: f, selector: "", length: 0, toArray: function () { return W.call(this) }, get: function (b) { return null != b ? 0 > b ? this[b + this.length] : this[b] : W.call(this) }, pushStack: function (b) { b = f.merge(this.constructor(), b); b.prevObject = this; b.context = this.context; return b }, each: function (b, d) { return f.each(this, b, d) }, map: function (b) { return this.pushStack(f.map(this, function (d, e) { return b.call(d, e, d) })) }, slice: function () { return this.pushStack(W.apply(this, arguments)) }, first: function () { return this.eq(0) },
        last: function () { return this.eq(-1) }, eq: function (b) { var d = this.length; b = +b + (0 > b ? d : 0); return this.pushStack(0 <= b && d > b ? [this[b]] : []) }, end: function () { return this.prevObject || this.constructor(null) }, push: P, sort: R.sort, splice: R.splice
    }; f.extend = f.fn.extend = function () {
        var b, d, e, c, k, g = arguments[0] || {}, w = 1, x = arguments.length, t = !1; "boolean" == typeof g && (t = g, g = arguments[w] || {}, w++); "object" == typeof g || f.isFunction(g) || (g = {}); w === x && (g = this, w--); for (; x > w; w++) if (null != (k = arguments[w])) for (c in k) b = g[c], e = k[c],
        g !== e && (t && e && (f.isPlainObject(e) || (d = f.isArray(e))) ? (d ? (d = !1, b = b && f.isArray(b) ? b : []) : b = b && f.isPlainObject(b) ? b : {}, g[c] = f.extend(t, b, e)) : void 0 !== e && (g[c] = e)); return g
    }; f.extend({
        expando: "jQuery" + ("1.11.2" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (b) { throw Error(b); }, noop: function () { }, isFunction: function (b) { return "function" === f.type(b) }, isArray: Array.isArray || function (b) { return "array" === f.type(b) }, isWindow: function (b) { return null != b && b == b.window }, isNumeric: function (b) {
            return !f.isArray(b) &&
            0 <= b - parseFloat(b) + 1
        }, isEmptyObject: function (b) { for (var d in b) return !1; return !0 }, isPlainObject: function (b) { var d; if (!b || "object" !== f.type(b) || b.nodeType || f.isWindow(b)) return !1; try { if (b.constructor && !ha.call(b, "constructor") && !ha.call(b.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } if (F.ownLast) for (d in b) return ha.call(b, d); for (d in b); return void 0 === d || ha.call(b, d) }, type: function (b) { return null == b ? b + "" : "object" == typeof b || "function" == typeof b ? ra[sa.call(b)] || "object" : typeof b },
        globalEval: function (b) { b && f.trim(b) && (c.execScript || function (b) { c.eval.call(c, b) })(b) }, camelCase: function (b) { return b.replace(Nb, "ms-").replace(Ja, v) }, nodeName: function (b, d) { return b.nodeName && b.nodeName.toLowerCase() === d.toLowerCase() }, each: function (b, d, e) { var c, k = 0, f = b.length; c = r(b); if (e) if (c) for (; f > k && (c = d.apply(b[k], e), !1 !== c) ; k++); else for (k in b) { if (c = d.apply(b[k], e), !1 === c) break } else if (c) for (; f > k && (c = d.call(b[k], k, b[k]), !1 !== c) ; k++); else for (k in b) if (c = d.call(b[k], k, b[k]), !1 === c) break; return b },
        trim: function (b) { return null == b ? "" : (b + "").replace(Ga, "") }, makeArray: function (b, d) { var e = d || []; null != b && (r(Object(b)) ? f.merge(e, "string" == typeof b ? [b] : b) : P.call(e, b)); return e }, inArray: function (b, d, e) { var c; if (d) { if (Ea) return Ea.call(d, b, e); c = d.length; for (e = e ? 0 > e ? Math.max(0, c + e) : e : 0; c > e; e++) if (e in d && d[e] === b) return e } return -1 }, merge: function (b, d) { for (var e = +d.length, c = 0, k = b.length; e > c;) b[k++] = d[c++]; if (e !== e) for (; void 0 !== d[c];) b[k++] = d[c++]; b.length = k; return b }, grep: function (b, d, e) {
            for (var c = [],
            k = 0, f = b.length, g = !e; f > k; k++) e = !d(b[k], k), e !== g && c.push(b[k]); return c
        }, map: function (b, d, e) { var c, k = 0, f = b.length, g = []; if (r(b)) for (; f > k; k++) c = d(b[k], k, e), null != c && g.push(c); else for (k in b) c = d(b[k], k, e), null != c && g.push(c); return ka.apply([], g) }, guid: 1, proxy: function (b, d) { var e, c; "string" == typeof d && (c = b[d], d = b, b = c); if (f.isFunction(b)) return e = W.call(arguments, 2), c = function () { return b.apply(d || this, e.concat(W.call(arguments))) }, c.guid = b.guid = b.guid || f.guid++, c }, now: function () { return +new Date }, support: F
    });
    f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (b, d) { ra["[object " + d + "]"] = d.toLowerCase() }); var Aa = function (b) {
        function d() { ja() } function e(b, d, c) { b = "0x" + d - 65536; return b !== b || c ? d : 0 > b ? String.fromCharCode(b + 65536) : String.fromCharCode(b >> 10 | 55296, 1023 & b | 56320) } function c(b, d) { for (var e = 0, k = b.length; k > e; e++) if (b[e] === d) return e; return -1 } function k(b, d) { b === d && (ea = !0); return 0 } function f(b, d, e, c) {
            var k, I, g, w, x; (d ? d.ownerDocument || d : V) !== S && ja(d); d = d || S; e = e ||
            []; w = d.nodeType; if ("string" != typeof b || !b || 1 !== w && 9 !== w && 11 !== w) return e; if (!c && da) {
                if (11 !== w && (k = Da.exec(b))) if (g = k[1]) if (9 === w) { I = d.getElementById(g); if (!I || !I.parentNode) return e; if (I.id === g) return e.push(I), e } else { if (d.ownerDocument && (I = d.ownerDocument.getElementById(g)) && ta(d, I) && I.id === g) return e.push(I), e } else { if (k[2]) return X.apply(e, d.getElementsByTagName(b)), e; if ((g = k[3]) && v.getElementsByClassName) return X.apply(e, d.getElementsByClassName(g)), e } if (v.qsa && (!Z || !Z.test(b))) {
                    I = k = H; g = d; x = 1 !==
                    w && b; if (1 === w && "object" !== d.nodeName.toLowerCase()) { w = M(b); (k = d.getAttribute("id")) ? I = k.replace(Fa, "\\$&") : d.setAttribute("id", I); I = "[id='" + I + "'] "; for (g = w.length; g--;) w[g] = I + K(w[g]); g = Ja.test(b) && J(d.parentNode) || d; x = w.join(",") } if (x) try { return X.apply(e, g.querySelectorAll(x)), e } catch (t) { } finally { k || d.removeAttribute("id") }
                }
            } return ba(b.replace(Ga, "$1"), d, e, c)
        } function g() { function b(e, c) { d.push(e + " ") > z.cacheLength && delete b[d.shift()]; return b[e + " "] = c } var d = []; return b } function w(b) { b[H] = !0; return b }
        function x(b) { var d = S.createElement("div"); try { return !!b(d) } catch (e) { return !1 } finally { d.parentNode && d.parentNode.removeChild(d) } } function t(b, d) { for (var e = b.split("|"), c = b.length; c--;) z.attrHandle[e[c]] = d } function h(b, d) { var e = d && b, c = e && 1 === b.nodeType && 1 === d.nodeType && (~d.sourceIndex || sa) - (~b.sourceIndex || sa); if (c) return c; if (e) for (; e = e.nextSibling;) if (e === d) return -1; return b ? 1 : -1 } function p(b) { return function (d) { return "input" === d.nodeName.toLowerCase() && d.type === b } } function l(b) {
            return function (d) {
                var e =
                d.nodeName.toLowerCase(); return ("input" === e || "button" === e) && d.type === b
            }
        } function n(b) { return w(function (d) { d = +d; return w(function (e, c) { for (var k, f = b([], e.length, d), I = f.length; I--;) e[k = f[I]] && (e[k] = !(c[k] = e[k])) }) }) } function J(b) { return b && "undefined" != typeof b.getElementsByTagName && b } function A() { } function K(b) { for (var d = 0, e = b.length, c = ""; e > d; d++) c += b[d].value; return c } function q(b, d, e) {
            var c = d.dir, k = e && "parentNode" === c, f = qa++; return d.first ? function (d, e, f) {
                for (; d = d[c];) if (1 === d.nodeType || k) return b(d,
                e, f)
            } : function (d, e, I) { var g, w, x = [aa, f]; if (I) for (; d = d[c];) { if ((1 === d.nodeType || k) && b(d, e, I)) return !0 } else for (; d = d[c];) if (1 === d.nodeType || k) { w = d[H] || (d[H] = {}); if ((g = w[c]) && g[0] === aa && g[1] === f) return x[2] = g[2]; w[c] = x; if (x[2] = b(d, e, I)) return !0 } }
        } function r(b) { return 1 < b.length ? function (d, e, c) { for (var k = b.length; k--;) if (!b[k](d, e, c)) return !1; return !0 } : b[0] } function y(b, d, e, c, k) { for (var f, I = [], g = 0, w = b.length, x = null != d; w > g; g++) !(f = b[g]) || e && !e(f, c, k) || (I.push(f), x && d.push(g)); return I } function B(b, d, e,
        k, I, g) {
            k && !k[H] && (k = B(k)); I && !I[H] && (I = B(I, g)); return w(function (g, w, x, t) {
                var h, T, p = [], l = [], ia = w.length, n; if (!(n = g)) { n = d || "*"; for (var J = x.nodeType ? [x] : x, A = [], K = 0, q = J.length; q > K; K++) f(n, J[K], A); n = A } n = !b || !g && d ? n : y(n, p, b, x, t); J = e ? I || (g ? b : ia || k) ? [] : w : n; e && e(n, J, x, t); if (k) for (h = y(J, l), k(h, [], x, t), x = h.length; x--;) (T = h[x]) && (J[l[x]] = !(n[l[x]] = T)); if (g) { if (I || b) { if (I) { h = []; for (x = J.length; x--;) (T = J[x]) && h.push(n[x] = T); I(null, J = [], h, t) } for (x = J.length; x--;) (T = J[x]) && -1 < (h = I ? c(g, T) : p[x]) && (g[h] = !(w[h] = T)) } } else J =
                y(J === w ? J.splice(ia, J.length) : J), I ? I(null, w, J, t) : X.apply(w, J)
            })
        } function D(b) {
            var d, e, k, f = b.length, I = z.relative[b[0].type]; e = I || z.relative[" "]; for (var g = I ? 1 : 0, w = q(function (b) { return b === d }, e, !0), x = q(function (b) { return -1 < c(d, b) }, e, !0), t = [function (b, e, c) { b = !I && (c || e !== O) || ((d = e).nodeType ? w(b, e, c) : x(b, e, c)); d = null; return b }]; f > g; g++) if (e = z.relative[b[g].type]) t = [q(r(t), e)]; else {
                e = z.filter[b[g].type].apply(null, b[g].matches); if (e[H]) {
                    for (k = ++g; f > k && !z.relative[b[k].type]; k++); return B(1 < g && r(t), 1 < g &&
                    K(b.slice(0, g - 1).concat({ value: " " === b[g - 2].type ? "*" : "" })).replace(Ga, "$1"), e, k > g && D(b.slice(g, k)), f > k && D(b = b.slice(k)), f > k && K(b))
                } t.push(e)
            } return r(t)
        } function C(b, d) {
            function e(I, g, w, x, t) {
                var h, T, p, l = 0, ia = "0", n = I && [], J = [], A = O, K = I || k && z.find.TAG("*", t), q = aa += null == A ? 1 : Math.random() || .1, r = K.length; for (t && (O = g !== S && g) ; ia !== r && null != (h = K[ia]) ; ia++) { if (k && h) { for (T = 0; p = b[T++];) if (p(h, g, w)) { x.push(h); break } t && (aa = q) } c && ((h = !p && h) && l--, I && n.push(h)) } l += ia; if (c && ia !== l) {
                    for (T = 0; p = d[T++];) p(n, J, g, w); if (I) {
                        if (0 <
                        l) for (; ia--;) n[ia] || J[ia] || (J[ia] = ha.call(x)); J = y(J)
                    } X.apply(x, J); t && !I && 0 < J.length && 1 < l + d.length && f.uniqueSort(x)
                } t && (aa = q, O = A); return n
            } var c = 0 < d.length, k = 0 < b.length; return c ? w(e) : e
        } var E, v, z, u, Q, M, ga, ba, O, L, ea, ja, S, U, da, Z, F, N, ta, H = "sizzle" + 1 * new Date, V = b.document, aa = 0, qa = 0, ua = g(), P = g(), pa = g(), sa = -2147483648, W = {}.hasOwnProperty, R = [], ha = R.pop, ka = R.push, X = R.push, la = R.slice, ra = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"), Aa = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        ra + "))|)[\\x20\\t\\r\\n\\f]*\\]", ma = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + Aa + ")*)|.*)\\)|)", Ea = RegExp("[\\x20\\t\\r\\n\\f]+", "g"), Ga = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"), Na = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/, va = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/, wa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"), xa = new RegExp(ma), ya = new RegExp("^" +
        ra + "$"), oa = {
            ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/, CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/, TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"), ATTR: new RegExp("^" + Aa), PSEUDO: new RegExp("^" + ma), CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i, bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
            needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
        }, Ba = /^(?:input|select|textarea|button)$/i, Ca = /^h\d$/i, na = /^[^{]+\{\s*\[native \w/, Da = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Ja = /[+~]/, Fa = /'|\\/g, za = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"); try { X.apply(R = la.call(V.childNodes), V.childNodes), R[V.childNodes.length].nodeType } catch (tc) {
            X = {
                apply: R.length ? function (b, d) { ka.apply(b, la.call(d)) } :
                function (b, d) { for (var e = b.length, c = 0; b[e++] = d[c++];); b.length = e - 1 }
            }
        } v = f.support = {}; Q = f.isXML = function (b) { return (b = b && (b.ownerDocument || b).documentElement) ? "HTML" !== b.nodeName : !1 }; ja = f.setDocument = function (b) {
            var f = b ? b.ownerDocument || b : V; if (f === S || 9 !== f.nodeType || !f.documentElement) return S; S = f; U = f.documentElement; (b = f.defaultView) && b !== b.top && (b.addEventListener ? b.addEventListener("unload", d, !1) : b.attachEvent && b.attachEvent("onunload", d)); da = !Q(f); v.attributes = x(function (b) { b.className = "i"; return !b.getAttribute("className") });
            v.getElementsByTagName = x(function (b) { b.appendChild(f.createComment("")); return !b.getElementsByTagName("*").length }); v.getElementsByClassName = na.test(f.getElementsByClassName); v.getById = x(function (b) { U.appendChild(b).id = H; return !f.getElementsByName || !f.getElementsByName(H).length }); v.getById ? (z.find.ID = function (b, d) { if ("undefined" != typeof d.getElementById && da) { var e = d.getElementById(b); return e && e.parentNode ? [e] : [] } }, z.filter.ID = function (b) {
                var d = b.replace(za, e); return function (b) {
                    return b.getAttribute("id") ===
                    d
                }
            }) : (delete z.find.ID, z.filter.ID = function (b) { var d = b.replace(za, e); return function (b) { return (b = "undefined" != typeof b.getAttributeNode && b.getAttributeNode("id")) && b.value === d } }); z.find.TAG = v.getElementsByTagName ? function (b, d) { return "undefined" != typeof d.getElementsByTagName ? d.getElementsByTagName(b) : v.qsa ? d.querySelectorAll(b) : void 0 } : function (b, d) { var e, c = [], k = 0, f = d.getElementsByTagName(b); if ("*" === b) { for (; e = f[k++];) 1 === e.nodeType && c.push(e); return c } return f }; z.find.CLASS = v.getElementsByClassName &&
            function (b, d) { return da ? d.getElementsByClassName(b) : void 0 }; F = []; Z = []; if (v.qsa = na.test(f.querySelectorAll)) x(function (b) {
                U.appendChild(b).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\f]' msallowcapture=''><option selected=''></option></select>"; b.querySelectorAll("[msallowcapture^='']").length && Z.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"); b.querySelectorAll("[selected]").length || Z.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                b.querySelectorAll("[id~=" + H + "-]").length || Z.push("~="); b.querySelectorAll(":checked").length || Z.push(":checked"); b.querySelectorAll("a#" + H + "+*").length || Z.push(".#.+[+~]")
            }), x(function (b) { var d = f.createElement("input"); d.setAttribute("type", "hidden"); b.appendChild(d).setAttribute("name", "D"); b.querySelectorAll("[name=d]").length && Z.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="); b.querySelectorAll(":enabled").length || Z.push(":enabled", ":disabled"); Z.push(",.*:") }); (v.matchesSelector = na.test(N = U.matches ||
            U.webkitMatchesSelector || U.mozMatchesSelector || U.oMatchesSelector || U.msMatchesSelector)) && x(function (b) { v.disconnectedMatch = N.call(b, "div"); N.call(b, "[s!='']:x"); F.push("!=", ma) }); Z = Z.length && new RegExp(Z.join("|")); F = F.length && new RegExp(F.join("|")); ta = (b = na.test(U.compareDocumentPosition)) || na.test(U.contains) ? function (b, d) { var e = 9 === b.nodeType ? b.documentElement : b, c = d && d.parentNode; return b === c || !(!c || 1 !== c.nodeType || !(e.contains ? e.contains(c) : b.compareDocumentPosition && 16 & b.compareDocumentPosition(c))) } :
            function (b, d) { if (d) for (; d = d.parentNode;) if (d === b) return !0; return !1 }; k = b ? function (b, d) { if (b === d) return ea = !0, 0; var e = !b.compareDocumentPosition - !d.compareDocumentPosition; if (e) return e; e = (b.ownerDocument || b) === (d.ownerDocument || d) ? b.compareDocumentPosition(d) : 1; return 1 & e || !v.sortDetached && d.compareDocumentPosition(b) === e ? b === f || b.ownerDocument === V && ta(V, b) ? -1 : d === f || d.ownerDocument === V && ta(V, d) ? 1 : L ? c(L, b) - c(L, d) : 0 : 4 & e ? -1 : 1 } : function (b, d) {
                if (b === d) return ea = !0, 0; var e, k = 0; e = b.parentNode; var I = d.parentNode,
                g = [b], w = [d]; if (!e || !I) return b === f ? -1 : d === f ? 1 : e ? -1 : I ? 1 : L ? c(L, b) - c(L, d) : 0; if (e === I) return h(b, d); for (e = b; e = e.parentNode;) g.unshift(e); for (e = d; e = e.parentNode;) w.unshift(e); for (; g[k] === w[k];) k++; return k ? h(g[k], w[k]) : g[k] === V ? -1 : w[k] === V ? 1 : 0
            }; return f
        }; f.matches = function (b, d) { return f(b, null, null, d) }; f.matchesSelector = function (b, d) {
            (b.ownerDocument || b) !== S && ja(b); d = d.replace(wa, "='$1']"); if (!(!v.matchesSelector || !da || F && F.test(d) || Z && Z.test(d))) try {
                var e = N.call(b, d); if (e || v.disconnectedMatch || b.document &&
                11 !== b.document.nodeType) return e
            } catch (c) { } return 0 < f(d, S, null, [b]).length
        }; f.contains = function (b, d) { (b.ownerDocument || b) !== S && ja(b); return ta(b, d) }; f.attr = function (b, d) { (b.ownerDocument || b) !== S && ja(b); var e = z.attrHandle[d.toLowerCase()], e = e && W.call(z.attrHandle, d.toLowerCase()) ? e(b, d, !da) : void 0; return void 0 !== e ? e : v.attributes || !da ? b.getAttribute(d) : (e = b.getAttributeNode(d)) && e.specified ? e.value : null }; f.error = function (b) { throw Error("Syntax error, unrecognized expression: " + b); }; f.uniqueSort = function (b) {
            var d,
            e = [], c = 0, f = 0; ea = !v.detectDuplicates; L = !v.sortStable && b.slice(0); b.sort(k); if (ea) { for (; d = b[f++];) d === b[f] && (c = e.push(f)); for (; c--;) b.splice(e[c], 1) } L = null; return b
        }; u = f.getText = function (b) { var d, e = "", c = 0; if (d = b.nodeType) if (1 === d || 9 === d || 11 === d) { if ("string" == typeof b.textContent) return b.textContent; for (b = b.firstChild; b; b = b.nextSibling) e += u(b) } else { if (3 === d || 4 === d) return b.nodeValue } else for (; d = b[c++];) e += u(d); return e }; z = f.selectors = {
            cacheLength: 50, createPseudo: w, match: oa, attrHandle: {}, find: {}, relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" }
            }, preFilter: {
                ATTR: function (b) { b[1] = b[1].replace(za, e); b[3] = (b[3] || b[4] || b[5] || "").replace(za, e); "~=" === b[2] && (b[3] = " " + b[3] + " "); return b.slice(0, 4) }, CHILD: function (b) { b[1] = b[1].toLowerCase(); "nth" === b[1].slice(0, 3) ? (b[3] || f.error(b[0]), b[4] = +(b[4] ? b[5] + (b[6] || 1) : 2 * ("even" === b[3] || "odd" === b[3])), b[5] = +(b[7] + b[8] || "odd" === b[3])) : b[3] && f.error(b[0]); return b }, PSEUDO: function (b) {
                    var d, e = !b[6] && b[2]; if (oa.CHILD.test(b[0])) return null;
                    b[3] ? b[2] = b[4] || b[5] || "" : e && xa.test(e) && (d = M(e, !0)) && (d = e.indexOf(")", e.length - d) - e.length) && (b[0] = b[0].slice(0, d), b[2] = e.slice(0, d)); return b.slice(0, 3)
                }
            }, filter: {
                TAG: function (b) { var d = b.replace(za, e).toLowerCase(); return "*" === b ? function () { return !0 } : function (b) { return b.nodeName && b.nodeName.toLowerCase() === d } }, CLASS: function (b) {
                    var d = ua[b + " "]; return d || (d = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + b + "([\\x20\\t\\r\\n\\f]|$)"), ua(b, function (b) {
                        return d.test("string" == typeof b.className && b.className || "undefined" !=
                        typeof b.getAttribute && b.getAttribute("class") || "")
                    }))
                }, ATTR: function (b, d, e) { return function (c) { c = f.attr(c, b); if (null == c) return "!=" === d; if (!d) return !0; c += ""; return "=" === d ? c === e : "!=" === d ? c !== e : "^=" === d ? e && 0 === c.indexOf(e) : "*=" === d ? e && -1 < c.indexOf(e) : "$=" === d ? e && c.slice(-e.length) === e : "~=" === d ? -1 < (" " + c.replace(Ea, " ") + " ").indexOf(e) : "|=" === d ? c === e || c.slice(0, e.length + 1) === e + "-" : !1 } }, CHILD: function (b, d, e, c, k) {
                    var f = "nth" !== b.slice(0, 3), I = "last" !== b.slice(-4), g = "of-type" === d; return 1 === c && 0 === k ? function (b) { return !!b.parentNode } :
                    function (d, e, w) {
                        var x, t, h, T, p; e = f !== I ? "nextSibling" : "previousSibling"; var l = d.parentNode, ia = g && d.nodeName.toLowerCase(); w = !w && !g; if (l) {
                            if (f) { for (; e;) { for (t = d; t = t[e];) if (g ? t.nodeName.toLowerCase() === ia : 1 === t.nodeType) return !1; p = e = "only" === b && !p && "nextSibling" } return !0 } p = [I ? l.firstChild : l.lastChild]; if (I && w) for (w = l[H] || (l[H] = {}), x = w[b] || [], T = x[0] === aa && x[1], h = x[0] === aa && x[2], t = T && l.childNodes[T]; t = ++T && t && t[e] || (h = T = 0) || p.pop() ;) { if (1 === t.nodeType && ++h && t === d) { w[b] = [aa, T, h]; break } } else if (w && (x = (d[H] ||
                            (d[H] = {}))[b]) && x[0] === aa) h = x[1]; else for (; (t = ++T && t && t[e] || (h = T = 0) || p.pop()) && ((g ? t.nodeName.toLowerCase() !== ia : 1 !== t.nodeType) || !++h || (w && ((t[H] || (t[H] = {}))[b] = [aa, h]), t !== d)) ;); h -= k; return h === c || 0 === h % c && 0 <= h / c
                        }
                    }
                }, PSEUDO: function (b, d) {
                    var e, k = z.pseudos[b] || z.setFilters[b.toLowerCase()] || f.error("unsupported pseudo: " + b); return k[H] ? k(d) : 1 < k.length ? (e = [b, b, "", d], z.setFilters.hasOwnProperty(b.toLowerCase()) ? w(function (b, e) { for (var f, I = k(b, d), g = I.length; g--;) f = c(b, I[g]), b[f] = !(e[f] = I[g]) }) : function (b) {
                        return k(b,
                        0, e)
                    }) : k
                }
            }, pseudos: {
                not: w(function (b) { var d = [], e = [], c = ga(b.replace(Ga, "$1")); return c[H] ? w(function (b, d, e, k) { var f; e = c(b, null, k, []); for (k = b.length; k--;) (f = e[k]) && (b[k] = !(d[k] = f)) }) : function (b, k, f) { d[0] = b; c(d, null, f, e); d[0] = null; return !e.pop() } }), has: w(function (b) { return function (d) { return 0 < f(b, d).length } }), contains: w(function (b) { b = b.replace(za, e); return function (d) { return -1 < (d.textContent || d.innerText || u(d)).indexOf(b) } }), lang: w(function (b) {
                    ya.test(b || "") || f.error("unsupported lang: " + b); b = b.replace(za,
                    e).toLowerCase(); return function (d) { var e; do if (e = da ? d.lang : d.getAttribute("xml:lang") || d.getAttribute("lang")) return e = e.toLowerCase(), e === b || 0 === e.indexOf(b + "-"); while ((d = d.parentNode) && 1 === d.nodeType); return !1 }
                }), target: function (d) { var e = b.location && b.location.hash; return e && e.slice(1) === d.id }, oh: function (b) { return b === U }, focus: function (b) { return b === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(b.type || b.href || ~b.tabIndex) }, nh: function (b) { return !1 === b.disabled }, disabled: function (b) {
                    return !0 ===
                    b.disabled
                }, checked: function (b) { var d = b.nodeName.toLowerCase(); return "input" === d && !!b.checked || "option" === d && !!b.selected }, selected: function (b) { b.parentNode && b.parentNode.selectedIndex; return !0 === b.selected }, empty: function (b) { for (b = b.firstChild; b; b = b.nextSibling) if (6 > b.nodeType) return !1; return !0 }, parent: function (b) { return !z.pseudos.empty(b) }, header: function (b) { return Ca.test(b.nodeName) }, input: function (b) { return Ba.test(b.nodeName) }, button: function (b) {
                    var d = b.nodeName.toLowerCase(); return "input" ===
                    d && "button" === b.type || "button" === d
                }, text: function (b) { var d; return "input" === b.nodeName.toLowerCase() && "text" === b.type && (null == (d = b.getAttribute("type")) || "text" === d.toLowerCase()) }, first: n(function () { return [0] }), last: n(function (b, d) { return [d - 1] }), eq: n(function (b, d, e) { return [0 > e ? e + d : e] }), even: n(function (b, d) { for (var e = 0; d > e; e += 2) b.push(e); return b }), odd: n(function (b, d) { for (var e = 1; d > e; e += 2) b.push(e); return b }), lt: n(function (b, d, e) { for (d = 0 > e ? e + d : e; 0 <= --d;) b.push(d); return b }), gt: n(function (b, d, e) {
                    for (e =
                    0 > e ? e + d : e; ++e < d;) b.push(e); return b
                })
            }
        }; z.pseudos.a = z.pseudos.eq; for (E in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) z.pseudos[E] = p(E); for (E in { submit: !0, reset: !0 }) z.pseudos[E] = l(E); A.prototype = z.filters = z.pseudos; z.setFilters = new A; M = f.tokenize = function (b, d) {
            var e, c, k, I, g, w, x; if (g = P[b + " "]) return d ? 0 : g.slice(0); g = b; w = []; for (x = z.preFilter; g;) {
                if (!e || (c = Na.exec(g))) c && (g = g.slice(c[0].length) || g), w.push(k = []); e = !1; if (c = va.exec(g)) e = c.shift(), k.push({ value: e, type: c[0].replace(Ga, " ") }), g = g.slice(e.length);
                for (I in z.filter) !(c = oa[I].exec(g)) || x[I] && !(c = x[I](c)) || (e = c.shift(), k.push({ value: e, type: I, matches: c }), g = g.slice(e.length)); if (!e) break
            } return d ? g.length : g ? f.error(b) : P(b, w).slice(0)
        }; ga = f.compile = function (b, d) { var e, c = [], k = [], f = pa[b + " "]; if (!f) { d || (d = M(b)); for (e = d.length; e--;) f = D(d[e]), f[H] ? c.push(f) : k.push(f); f = pa(b, C(k, c)); f.selector = b } return f }; ba = f.select = function (b, d, c, k) {
            var f, g, I, w, x, t = "function" == typeof b && b, h = !k && M(b = t.selector || b); c = c || []; if (1 === h.length) {
                g = h[0] = h[0].slice(0); if (2 < g.length &&
                "ID" === (I = g[0]).type && v.getById && 9 === d.nodeType && da && z.relative[g[1].type]) { d = (z.find.ID(I.matches[0].replace(za, e), d) || [])[0]; if (!d) return c; t && (d = d.parentNode); b = b.slice(g.shift().value.length) } for (f = oa.needsContext.test(b) ? 0 : g.length; f--;) { I = g[f]; if (z.relative[w = I.type]) break; if ((x = z.find[w]) && (k = x(I.matches[0].replace(za, e), Ja.test(g[0].type) && J(d.parentNode) || d))) { g.splice(f, 1); b = k.length && K(g); if (!b) return X.apply(c, k), c; break } }
            } (t || ga(b, h))(k, d, !da, c, Ja.test(b) && J(d.parentNode) || d); return c
        };
        v.sortStable = H.split("").sort(k).join("") === H; v.detectDuplicates = !!ea; ja(); v.sortDetached = x(function (b) { return 1 & b.compareDocumentPosition(S.createElement("div")) }); x(function (b) { b.innerHTML = "<a href='#'></a>"; return "#" === b.firstChild.getAttribute("href") }) || t("type|href|height|width", function (b, d, e) { return e ? void 0 : b.getAttribute(d, "type" === d.toLowerCase() ? 1 : 2) }); v.attributes && x(function (b) { b.innerHTML = "<input/>"; b.firstChild.setAttribute("value", ""); return "" === b.firstChild.getAttribute("value") }) ||
        t("value", function (b, d, e) { return e || "input" !== b.nodeName.toLowerCase() ? void 0 : b.defaultValue }); x(function (b) { return null == b.getAttribute("disabled") }) || t("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", function (b, d, e) { var c; return e ? void 0 : !0 === b[d] ? d.toLowerCase() : (c = b.getAttributeNode(d)) && c.specified ? c.value : null }); return f
    }(c); f.find = Aa; f.expr = Aa.selectors; f.expr[":"] = f.expr.pseudos; f.unique = Aa.uniqueSort; f.text = Aa.getText;
    f.isXMLDoc = Aa.isXML; f.contains = Aa.contains; var Na = f.expr.match.needsContext, jb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Hb = /^.[^:#\[\.,]*$/; f.filter = function (b, d, e) { var c = d[0]; e && (b = ":not(" + b + ")"); return 1 === d.length && 1 === c.nodeType ? f.find.matchesSelector(c, b) ? [c] : [] : f.find.matches(b, f.grep(d, function (b) { return 1 === b.nodeType })) }; f.fn.extend({
        find: function (b) {
            var d, e = [], c = this, k = c.length; if ("string" != typeof b) return this.pushStack(f(b).filter(function () { for (d = 0; k > d; d++) if (f.contains(c[d], this)) return !0 })); for (d =
            0; k > d; d++) f.find(b, c[d], e); e = this.pushStack(1 < k ? f.unique(e) : e); e.selector = this.selector ? this.selector + " " + b : b; return e
        }, filter: function (b) { return this.pushStack(g(this, b || [], !1)) }, not: function (b) { return this.pushStack(g(this, b || [], !0)) }, is: function (b) { return !!g(this, "string" == typeof b && Na.test(b) ? f(b) : b || [], !1).length }
    }); var Ka, H = c.document, Pb = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/; (f.fn.a = function (b, d) {
        var e, c; if (!b) return this; if ("string" == typeof b) {
            e = "<" === b.charAt(0) && ">" === b.charAt(b.length - 1) &&
            3 <= b.length ? [null, b, null] : Pb.exec(b); if (!e || !e[1] && d) return !d || d.jquery ? (d || Ka).find(b) : this.constructor(d).find(b); if (e[1]) { d = d instanceof f ? d[0] : d; f.merge(this, f.parseHTML(e[1], d && d.nodeType ? d.ownerDocument || d : H, !0)); if (jb.test(e[1]) && f.isPlainObject(d)) for (e in d) f.isFunction(this[e]) ? this[e](d[e]) : this.attr(e, d[e]); return this } if ((c = H.getElementById(e[2])) && c.parentNode) { if (c.id !== e[2]) return Ka.find(b); this.length = 1; this[0] = c } this.context = H; this.selector = b; return this
        } if (b.nodeType) return this.context =
        this[0] = b, this.length = 1, this; if (f.isFunction(b)) return "undefined" != typeof Ka.ready ? Ka.ready(b) : b(f); void 0 !== b.selector && (this.selector = b.selector, this.context = b.context); return f.makeArray(b, this)
    }).prototype = f.fn; Ka = f(H); var Qb = /^(?:parents|prev(?:Until|All))/, Rb = { children: !0, contents: !0, next: !0, prev: !0 }; f.extend({
        dir: function (b, d, e) { var c = []; for (b = b[d]; b && 9 !== b.nodeType && (void 0 === e || 1 !== b.nodeType || !f(b).is(e)) ;) 1 === b.nodeType && c.push(b), b = b[d]; return c }, sibling: function (b, d) {
            for (var e = []; b; b =
            b.nextSibling) 1 === b.nodeType && b !== d && e.push(b); return e
        }
    }); f.fn.extend({
        has: function (b) { var d, e = f(b, this), c = e.length; return this.filter(function () { for (d = 0; c > d; d++) if (f.contains(this, e[d])) return !0 }) }, closest: function (b, d) { for (var e, c = 0, k = this.length, g = [], w = Na.test(b) || "string" != typeof b ? f(b, d || this.context) : 0; k > c; c++) for (e = this[c]; e && e !== d; e = e.parentNode) if (11 > e.nodeType && (w ? -1 < w.index(e) : 1 === e.nodeType && f.find.matchesSelector(e, b))) { g.push(e); break } return this.pushStack(1 < g.length ? f.unique(g) : g) },
        index: function (b) { return b ? "string" == typeof b ? f.inArray(this[0], f(b)) : f.inArray(b.jquery ? b[0] : b, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function (b, d) { return this.pushStack(f.unique(f.merge(this.get(), f(b, d)))) }, addBack: function (b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }
    }); f.each({
        parent: function (b) { return (b = b.parentNode) && 11 !== b.nodeType ? b : null }, parents: function (b) { return f.dir(b, "parentNode") }, parentsUntil: function (b, d, e) {
            return f.dir(b,
            "parentNode", e)
        }, next: function (b) { return z(b, "nextSibling") }, prev: function (b) { return z(b, "previousSibling") }, nextAll: function (b) { return f.dir(b, "nextSibling") }, prevAll: function (b) { return f.dir(b, "previousSibling") }, nextUntil: function (b, d, e) { return f.dir(b, "nextSibling", e) }, prevUntil: function (b, d, e) { return f.dir(b, "previousSibling", e) }, siblings: function (b) { return f.sibling((b.parentNode || {}).firstChild, b) }, children: function (b) { return f.sibling(b.firstChild) }, contents: function (b) {
            return f.nodeName(b,
            "iframe") ? b.contentDocument || b.contentWindow.document : f.merge([], b.childNodes)
        }
    }, function (b, d) { f.fn[b] = function (e, c) { var k = f.map(this, d, e); "Until" !== b.slice(-5) && (c = e); c && "string" == typeof c && (k = f.filter(c, k)); 1 < this.length && (Rb[b] || (k = f.unique(k)), Qb.test(b) && (k = k.reverse())); return this.pushStack(k) } }); var ma = /\S+/g, fb = {}; f.Callbacks = function (b) {
        function d(f) {
            c = b.memory && f; k = !0; w = x || 0; x = 0; g = t.length; for (e = !0; t && g > w; w++) if (!1 === t[w].apply(f[0], f[1]) && b.stopOnFalse) { c = !1; break } e = !1; t && (h ? h.length &&
            d(h.shift()) : c ? t = [] : p.disable())
        } b = "string" == typeof b ? fb[b] || n(b) : f.extend({}, b); var e, c, k, g, w, x, t = [], h = !b.once && [], p = {
            add: function () { if (t) { var k = t.length; !function Ob(d) { f.each(d, function (d, e) { var c = f.type(e); "function" === c ? b.unique && p.has(e) || t.push(e) : e && e.length && "string" !== c && Ob(e) }) }(arguments); e ? g = t.length : c && (x = k, d(c)) } return this }, remove: function () { t && f.each(arguments, function (b, d) { for (var c; -1 < (c = f.inArray(d, t, c)) ;) t.splice(c, 1), e && (g >= c && g--, w >= c && w--) }); return this }, has: function (b) {
                return b ?
                -1 < f.inArray(b, t) : !(!t || !t.length)
            }, empty: function () { t = []; g = 0; return this }, disable: function () { t = h = c = void 0; return this }, disabled: function () { return !t }, lock: function () { h = void 0; c || p.disable(); return this }, locked: function () { return !h }, fireWith: function (b, c) { !t || k && !h || (c = c || [], c = [b, c.slice ? c.slice() : c], e ? h.push(c) : d(c)); return this }, fire: function () { p.fireWith(this, arguments); return this }, fired: function () { return !!k }
        }; return p
    }; f.extend({
        Deferred: function (b) {
            var d = [["resolve", "done", f.Callbacks("once memory"),
            "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]], e = "pending", c = {
                state: function () { return e }, always: function () { k.done(arguments).fail(arguments); return this }, then: function () {
                    var b = arguments; return f.Deferred(function (e) {
                        f.each(d, function (d, g) {
                            var w = f.isFunction(b[d]) && b[d]; k[g[1]](function () {
                                var b = w && w.apply(this, arguments); b && f.isFunction(b.promise) ? b.promise().done(e.resolve).fail(e.reject).progress(e.notify) : e[g[0] + "With"](this === c ?
                                e.promise() : this, w ? [b] : arguments)
                            })
                        }); b = null
                    }).promise()
                }, promise: function (b) { return null != b ? f.extend(b, c) : c }
            }, k = {}; c.pipe = c.then; f.each(d, function (b, f) { var g = f[2], w = f[3]; c[f[1]] = g.add; w && g.add(function () { e = w }, d[1 ^ b][2].disable, d[2][2].lock); k[f[0]] = function () { k[f[0] + "With"](this === k ? c : this, arguments); return this }; k[f[0] + "With"] = g.fireWith }); c.promise(k); b && b.call(k, k); return k
        }, when: function (b) {
            function d(b, c, k) {
                return function (d) {
                    c[b] = this; k[b] = 1 < arguments.length ? W.call(arguments) : d; k === e ? h.notifyWith(c,
                    k) : --t || h.resolveWith(c, k)
                }
            } var e, c, k, g = 0, w = W.call(arguments), x = w.length, t = 1 !== x || b && f.isFunction(b.promise) ? x : 0, h = 1 === t ? b : f.Deferred(); if (1 < x) for (e = Array(x), c = Array(x), k = Array(x) ; x > g; g++) w[g] && f.isFunction(w[g].promise) ? w[g].promise().done(d(g, k, w)).fail(h.reject).progress(d(g, c, e)) : --t; t || h.resolveWith(k, w); return h.promise()
        }
    }); var Oa; f.fn.ready = function (b) { f.ready.promise().done(b); return this }; f.extend({
        isReady: !1, readyWait: 1, holdReady: function (b) { b ? f.readyWait++ : f.ready(!0) }, ready: function (b) {
            if (!0 ===
            b ? !--f.readyWait : !f.isReady) { if (!H.body) return setTimeout(f.ready); f.isReady = !0; !0 !== b && 0 < --f.readyWait || (Oa.resolveWith(H, [f]), f.fn.triggerHandler && (f(H).triggerHandler("ready"), f(H).off("ready"))) }
        }
    }); f.ready.promise = function (b) {
        if (!Oa) if (Oa = f.Deferred(), "complete" === H.readyState) setTimeout(f.ready); else if (H.addEventListener) H.addEventListener("DOMContentLoaded", h, !1), c.addEventListener("load", h, !1); else {
            H.attachEvent("onreadystatechange", h); c.attachEvent("onload", h); var d = !1; try {
                d = null == c.frameElement &&
                H.documentElement
            } catch (e) { } d && d.doScroll && !function Gb() { if (!f.isReady) { try { d.doScroll("left") } catch (b) { return setTimeout(Gb, 50) } l(); f.ready() } }()
        } return Oa.promise(b)
    }; var kb, la = "undefined"; for (kb in f(F)) break; F.ownLast = "0" !== kb; F.inlineBlockNeedsLayout = !1; f(function () {
        var b, d, e; (d = H.getElementsByTagName("body")[0]) && d.style && (b = H.createElement("div"), e = H.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", d.appendChild(e).appendChild(b), typeof b.style.zoom !==
        la && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", (F.inlineBlockNeedsLayout = b = 3 === b.offsetWidth) && (d.style.zoom = 1)), d.removeChild(e))
    }); !function () { var b = H.createElement("div"); if (null == F.deleteExpando) { F.deleteExpando = !0; try { delete b.test } catch (d) { F.deleteExpando = !1 } } }(); f.acceptData = function (b) { var d = f.noData[(b.nodeName + " ").toLowerCase()], e = +b.nodeType || 1; return 1 !== e && 9 !== e ? !1 : !d || !0 !== d && b.getAttribute("classid") === d }; var Jb = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ib = /([A-Z])/g; f.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (b) { b = b.nodeType ? f.cache[b[f.expando]] : b[f.expando]; return !!b && !p(b) }, data: function (b, d, e) { return B(b, d, e) }, removeData: function (b, d) { return A(b, d) }, _data: function (b, d, e) { return B(b, d, e, !0) }, _removeData: function (b, d) { return A(b, d, !0) } }); f.fn.extend({
        data: function (b, d) {
            var e, c, k, g = this[0], w = g && g.attributes; if (void 0 === b) {
                if (this.length && (k = f.data(g), 1 === g.nodeType &&
                !f._data(g, "parsedAttrs"))) { for (e = w.length; e--;) w[e] && (c = w[e].name, 0 === c.indexOf("data-") && (c = f.camelCase(c.slice(5)), E(g, c, k[c]))); f._data(g, "parsedAttrs", !0) } return k
            } return "object" == typeof b ? this.each(function () { f.data(this, b) }) : 1 < arguments.length ? this.each(function () { f.data(this, b, d) }) : g ? E(g, b, f.data(g, b)) : void 0
        }, removeData: function (b) { return this.each(function () { f.removeData(this, b) }) }
    }); f.extend({
        queue: function (b, d, e) {
            var c; if (b) return d = (d || "fx") + "queue", c = f._data(b, d), e && (!c || f.isArray(e) ?
            c = f._data(b, d, f.makeArray(e)) : c.push(e)), c || []
        }, dequeue: function (b, d) { function e() { f.dequeue(b, d) } d = d || "fx"; var c = f.queue(b, d), k = c.length, g = c.shift(), w = f._queueHooks(b, d); "inprogress" === g && (g = c.shift(), k--); g && ("fx" === d && c.unshift("inprogress"), delete w.stop, g.call(b, e, w)); !k && w && w.empty.fire() }, _queueHooks: function (b, d) { var e = d + "queueHooks"; return f._data(b, e) || f._data(b, e, { empty: f.Callbacks("once memory").add(function () { f._removeData(b, d + "queue"); f._removeData(b, e) }) }) }
    }); f.fn.extend({
        queue: function (b,
        d) { var e = 2; "string" != typeof b && (d = b, b = "fx", e--); return arguments.length < e ? f.queue(this[0], b) : void 0 === d ? this : this.each(function () { var e = f.queue(this, b, d); f._queueHooks(this, b); "fx" === b && "inprogress" !== e[0] && f.dequeue(this, b) }) }, dequeue: function (b) { return this.each(function () { f.dequeue(this, b) }) }, clearQueue: function (b) { return this.queue(b || "fx", []) }, promise: function (b, d) {
            function e() { --k || g.resolveWith(w, [w]) } var c, k = 1, g = f.Deferred(), w = this, x = this.length; "string" != typeof b && (d = b, b = void 0); for (b = b ||
            "fx"; x--;) (c = f._data(w[x], b + "queueHooks")) && c.empty && (k++, c.empty.add(e)); e(); return g.promise(d)
        }
    }); var Pa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, xa = ["Top", "Right", "Bottom", "Left"], Ba = f.access = function (b, d, e, c, k, g, w) {
        var x = 0, t = b.length, h = null == e; if ("object" === f.type(e)) for (x in k = !0, e) f.access(b, d, x, e[x], !0, g, w); else if (void 0 !== c && (k = !0, f.isFunction(c) || (w = !0), h && (w ? (d.call(b, c), d = null) : (h = d, d = function (b, d, e) { return h.call(f(b), e) })), d)) for (; t > x; x++) d(b[x], e, w ? c : c.call(b[x], x, d(b[x], e)));
        return k ? b : h ? d.call(b) : t ? d(b[0], e) : g
    }, Ua = /^(?:checkbox|radio)$/i; !function () {
        var b = H.createElement("input"), d = H.createElement("div"), e = H.createDocumentFragment(); d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; F.leadingWhitespace = 3 === d.firstChild.nodeType; F.tbody = !d.getElementsByTagName("tbody").length; F.htmlSerialize = !!d.getElementsByTagName("link").length; F.html5Clone = "<:nav></:nav>" !== H.createElement("nav").cloneNode(!0).outerHTML; b.type = "checkbox"; b.checked = !0;
        e.appendChild(b); F.appendChecked = b.checked; d.innerHTML = "<textarea>x</textarea>"; F.noCloneChecked = !!d.cloneNode(!0).lastChild.defaultValue; e.appendChild(d); d.innerHTML = "<input type='radio' checked='checked' name='t'/>"; F.checkClone = d.cloneNode(!0).cloneNode(!0).lastChild.checked; F.noCloneEvent = !0; d.attachEvent && (d.attachEvent("onclick", function () { F.noCloneEvent = !1 }), d.cloneNode(!0).click()); if (null == F.deleteExpando) { F.deleteExpando = !0; try { delete d.test } catch (c) { F.deleteExpando = !1 } }
    }(); !function () {
        var b,
        d, e = H.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) d = "on" + b, (F[b + "Bubbles"] = d in c) || (e.setAttribute(d, "t"), F[b + "Bubbles"] = !1 === e.attributes[d].expando)
    }(); var Wa = /^(?:input|select|textarea)$/i, Sb = /^key/, Tb = /^(?:mouse|pointer|contextmenu)|click/, lb = /^(?:focusinfocus|focusoutblur)$/, mb = /^([^.]*)(?:\.(.+)|)$/; f.event = {
        global: {}, add: function (b, d, e, c, k) {
            var g, w, x, t, h, p, l, n, J; if (x = f._data(b)) {
                e.handler && (t = e, e = t.handler, k = t.selector); e.guid || (e.guid = f.guid++); (w = x.events) || (w = x.events =
                {}); (h = x.handle) || (h = x.handle = function (b) { return typeof f === la || b && f.event.triggered === b.type ? void 0 : f.event.dispatch.apply(h.elem, arguments) }, h.elem = b); d = (d || "").match(ma) || [""]; for (x = d.length; x--;) g = mb.exec(d[x]) || [], n = p = g[1], J = (g[2] || "").split(".").sort(), n && (g = f.event.special[n] || {}, n = (k ? g.delegateType : g.bindType) || n, g = f.event.special[n] || {}, p = f.extend({ type: n, origType: p, data: c, handler: e, guid: e.guid, selector: k, needsContext: k && f.expr.match.needsContext.test(k), namespace: J.join(".") }, t), (l = w[n]) ||
                (l = w[n] = [], l.delegateCount = 0, g.setup && !1 !== g.setup.call(b, c, J, h) || (b.addEventListener ? b.addEventListener(n, h, !1) : b.attachEvent && b.attachEvent("on" + n, h))), g.add && (g.add.call(b, p), p.handler.guid || (p.handler.guid = e.guid)), k ? l.splice(l.delegateCount++, 0, p) : l.push(p), f.event.global[n] = !0); b = null
            }
        }, remove: function (b, d, e, c, k) {
            var g, w, x, t, h, p, l, n, J, A, K, q = f.hasData(b) && f._data(b); if (q && (p = q.events)) {
                d = (d || "").match(ma) || [""]; for (h = d.length; h--;) if (x = mb.exec(d[h]) || [], J = K = x[1], A = (x[2] || "").split(".").sort(),
                J) { l = f.event.special[J] || {}; J = (c ? l.delegateType : l.bindType) || J; n = p[J] || []; x = x[2] && new RegExp("(^|\\.)" + A.join("\\.(?:.*\\.|)") + "(\\.|$)"); for (t = g = n.length; g--;) w = n[g], !k && K !== w.origType || e && e.guid !== w.guid || x && !x.test(w.namespace) || c && c !== w.selector && ("**" !== c || !w.selector) || (n.splice(g, 1), w.selector && n.delegateCount--, l.remove && l.remove.call(b, w)); t && !n.length && (l.teardown && !1 !== l.teardown.call(b, A, q.handle) || f.removeEvent(b, J, q.handle), delete p[J]) } else for (J in p) f.event.remove(b, J + d[h], e, c, !0);
                f.isEmptyObject(p) && (delete q.handle, f._removeData(b, "events"))
            }
        }, trigger: function (b, d, e, k) {
            var g, w, x, t, h, p, l = [e || H], n = ha.call(b, "type") ? b.type : b; h = ha.call(b, "namespace") ? b.namespace.split(".") : []; x = g = e = e || H; if (3 !== e.nodeType && 8 !== e.nodeType && !lb.test(n + f.event.triggered) && (0 <= n.indexOf(".") && (h = n.split("."), n = h.shift(), h.sort()), w = 0 > n.indexOf(":") && "on" + n, b = b[f.expando] ? b : new f.Event(n, "object" == typeof b && b), b.isTrigger = k ? 2 : 3, b.namespace = h.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" +
            h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), d = null == d ? [b] : f.makeArray(d, [b]), h = f.event.special[n] || {}, k || !h.trigger || !1 !== h.trigger.apply(e, d))) {
                if (!k && !h.noBubble && !f.isWindow(e)) { t = h.delegateType || n; for (lb.test(t + n) || (x = x.parentNode) ; x; x = x.parentNode) l.push(x), g = x; g === (e.ownerDocument || H) && l.push(g.defaultView || g.parentWindow || c) } for (p = 0; (x = l[p++]) && !b.isPropagationStopped() ;) b.type = 1 < p ? t : h.bindType || n, (g = (f._data(x, "events") || {})[b.type] && f._data(x, "handle")) &&
                g.apply(x, d), (g = w && x[w]) && g.apply && f.acceptData(x) && (b.result = g.apply(x, d), !1 === b.result && b.preventDefault()); b.type = n; if (!(k || b.isDefaultPrevented() || h._default && !1 !== h._default.apply(l.pop(), d)) && f.acceptData(e) && w && e[n] && !f.isWindow(e)) { (g = e[w]) && (e[w] = null); f.event.triggered = n; try { e[n]() } catch (J) { } f.event.triggered = void 0; g && (e[w] = g) } return b.result
            }
        }, dispatch: function (b) {
            b = f.event.fix(b); var d, e, c, k, g = [], w = W.call(arguments); d = (f._data(this, "events") || {})[b.type] || []; var x = f.event.special[b.type] ||
            {}; w[0] = b; b.delegateTarget = this; if (!x.preDispatch || !1 !== x.preDispatch.call(this, b)) {
                g = f.event.handlers.call(this, b, d); for (d = 0; (c = g[d++]) && !b.isPropagationStopped() ;) for (b.currentTarget = c.elem, k = 0; (e = c.handlers[k++]) && !b.isImmediatePropagationStopped() ;) if (!b.namespace_re || b.namespace_re.test(e.namespace)) b.handleObj = e, b.data = e.data, e = ((f.event.special[e.origType] || {}).handle || e.handler).apply(c.elem, w), void 0 !== e && !1 === (b.result = e) && (b.preventDefault(), b.stopPropagation()); x.postDispatch && x.postDispatch.call(this,
                b); return b.result
            }
        }, handlers: function (b, d) { var e, c, k, g, w = [], x = d.delegateCount, t = b.target; if (x && t.nodeType && (!b.button || "click" !== b.type)) for (; t != this; t = t.parentNode || this) if (1 === t.nodeType && (!0 !== t.disabled || "click" !== b.type)) { k = []; for (g = 0; x > g; g++) c = d[g], e = c.selector + " ", void 0 === k[e] && (k[e] = c.needsContext ? 0 <= f(e, this).index(t) : f.find(e, this, null, [t]).length), k[e] && k.push(c); k.length && w.push({ elem: t, handlers: k }) } x < d.length && w.push({ elem: this, handlers: d.slice(x) }); return w }, fix: function (b) {
            if (b[f.expando]) return b;
            var d, e, c; d = b.type; var k = b, g = this.fixHooks[d]; g || (this.fixHooks[d] = g = Tb.test(d) ? this.mouseHooks : Sb.test(d) ? this.keyHooks : {}); c = g.props ? this.props.concat(g.props) : this.props; b = new f.Event(k); for (d = c.length; d--;) e = c[d], b[e] = k[e]; b.target || (b.target = k.srcElement || H); 3 === b.target.nodeType && (b.target = b.target.parentNode); b.metaKey = !!b.metaKey; return g.filter ? g.filter(b, k) : b
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {}, keyHooks: { props: ["char", "charCode", "key", "keyCode"], filter: function (b, d) { null == b.which && (b.which = null != d.charCode ? d.charCode : d.keyCode); return b } }, mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (b, d) {
                var e, c, k = d.button, f = d.fromElement; null == b.pageX && null != d.clientX && (e = b.target.ownerDocument || H, c = e.documentElement, e = e.body, b.pageX = d.clientX + (c && c.scrollLeft || e && e.scrollLeft || 0) - (c && c.clientLeft ||
                e && e.clientLeft || 0), b.pageY = d.clientY + (c && c.scrollTop || e && e.scrollTop || 0) - (c && c.clientTop || e && e.clientTop || 0)); !b.relatedTarget && f && (b.relatedTarget = f === b.target ? d.toElement : f); b.which || void 0 === k || (b.which = 1 & k ? 1 : 2 & k ? 3 : 4 & k ? 2 : 0); return b
            }
        }, special: {
            load: { noBubble: !0 }, focus: { trigger: function () { if (this !== y() && this.focus) try { return this.focus(), !1 } catch (b) { } }, delegateType: "focusin" }, blur: { trigger: function () { if (this === y() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: {
                trigger: function () {
                    if (f.nodeName(this,
                    "input") && "checkbox" === this.type && this.click) return this.click(), !1
                }, _default: function (b) { return f.nodeName(b.target, "a") }
            }, beforeunload: { postDispatch: function (b) { void 0 !== b.result && b.originalEvent && (b.originalEvent.returnValue = b.result) } }
        }, simulate: function (b, d, e, c) { b = f.extend(new f.Event, e, { type: b, isSimulated: !0, originalEvent: {} }); c ? f.event.trigger(b, null, d) : f.event.dispatch.call(d, b); b.isDefaultPrevented() && e.preventDefault() }
    }; f.removeEvent = H.removeEventListener ? function (b, d, e) {
        b.removeEventListener &&
        b.removeEventListener(d, e, !1)
    } : function (b, d, e) { d = "on" + d; b.detachEvent && (typeof b[d] === la && (b[d] = null), b.detachEvent(d, e)) }; f.Event = function (b, d) { if (!(this instanceof f.Event)) return new f.Event(b, d); b && b.type ? (this.originalEvent = b, this.type = b.type, this.isDefaultPrevented = b.defaultPrevented || void 0 === b.defaultPrevented && !1 === b.returnValue ? D : C) : this.type = b; d && f.extend(this, d); this.timeStamp = b && b.timeStamp || f.now(); this[f.expando] = !0 }; f.Event.prototype = {
        isDefaultPrevented: C, isPropagationStopped: C, isImmediatePropagationStopped: C,
        preventDefault: function () { var b = this.originalEvent; this.isDefaultPrevented = D; b && (b.preventDefault ? b.preventDefault() : b.returnValue = !1) }, stopPropagation: function () { var b = this.originalEvent; this.isPropagationStopped = D; b && (b.stopPropagation && b.stopPropagation(), b.cancelBubble = !0) }, stopImmediatePropagation: function () { var b = this.originalEvent; this.isImmediatePropagationStopped = D; b && b.stopImmediatePropagation && b.stopImmediatePropagation(); this.stopPropagation() }
    }; f.each({
        mouseenter: "mouseover", mouseleave: "mouseout",
        pointerenter: "pointerover", pointerleave: "pointerout"
    }, function (b, d) { f.event.special[b] = { delegateType: d, bindType: d, handle: function (b) { var e, c = b.relatedTarget, k = b.handleObj; if (!c || c !== this && !f.contains(this, c)) b.type = k.origType, e = k.handler.apply(this, arguments), b.type = d; return e } } }); F.submitBubbles || (f.event.special.submit = {
        setup: function () {
            if (f.nodeName(this, "form")) return !1; f.event.add(this, "click._submit keypress._submit", function (b) {
                b = b.target; (b = f.nodeName(b, "input") || f.nodeName(b, "button") ? b.form :
                void 0) && !f._data(b, "submitBubbles") && (f.event.add(b, "submit._submit", function (b) { b._submit_bubble = !0 }), f._data(b, "submitBubbles", !0))
            })
        }, postDispatch: function (b) { b._submit_bubble && (delete b._submit_bubble, this.parentNode && !b.isTrigger && f.event.simulate("submit", this.parentNode, b, !0)) }, teardown: function () { if (f.nodeName(this, "form")) return !1; f.event.remove(this, "._submit") }
    }); F.changeBubbles || (f.event.special.change = {
        setup: function () {
            if (Wa.test(this.nodeName)) {
                if ("checkbox" === this.type || "radio" ===
                this.type) f.event.add(this, "propertychange._change", function (b) { "checked" === b.originalEvent.propertyName && (this._just_changed = !0) }), f.event.add(this, "click._change", function (b) { this._just_changed && !b.isTrigger && (this._just_changed = !1); f.event.simulate("change", this, b, !0) }); return !1
            } f.event.add(this, "beforeactivate._change", function (b) {
                b = b.target; Wa.test(b.nodeName) && !f._data(b, "changeBubbles") && (f.event.add(b, "change._change", function (b) {
                    !this.parentNode || b.isSimulated || b.isTrigger || f.event.simulate("change",
                    this.parentNode, b, !0)
                }), f._data(b, "changeBubbles", !0))
            })
        }, handle: function (b) { var d = b.target; return this !== d || b.isSimulated || b.isTrigger || "radio" !== d.type && "checkbox" !== d.type ? b.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function () { f.event.remove(this, "._change"); return !Wa.test(this.nodeName) }
    }); F.focusinBubbles || f.each({ focus: "focusin", blur: "focusout" }, function (b, d) {
        function e(b) { f.event.simulate(d, b.target, f.event.fix(b), !0) } f.event.special[d] = {
            setup: function () {
                var c = this.ownerDocument ||
                this, k = f._data(c, d); k || c.addEventListener(b, e, !0); f._data(c, d, (k || 0) + 1)
            }, teardown: function () { var c = this.ownerDocument || this, k = f._data(c, d) - 1; k ? f._data(c, d, k) : (c.removeEventListener(b, e, !0), f._removeData(c, d)) }
        }
    }); f.fn.extend({
        on: function (b, d, e, c, k) {
            var g, w; if ("object" == typeof b) { "string" != typeof d && (e = e || d, d = void 0); for (g in b) this.on(g, d, e, b[g], k); return this } null == e && null == c ? (c = d, e = d = void 0) : null == c && ("string" == typeof d ? (c = e, e = void 0) : (c = e, e = d, d = void 0)); if (!1 === c) c = C; else if (!c) return this; 1 ===
            k && (w = c, c = function (b) { f().off(b); return w.apply(this, arguments) }, c.guid = w.guid || (w.guid = f.guid++)); return this.each(function () { f.event.add(this, b, c, e, d) })
        }, one: function (b, d, e, c) { return this.on(b, d, e, c, 1) }, off: function (b, d, e) {
            var c; if (b && b.preventDefault && b.handleObj) return c = b.handleObj, f(b.delegateTarget).off(c.namespace ? c.origType + "." + c.namespace : c.origType, c.selector, c.handler), this; if ("object" == typeof b) { for (c in b) this.off(c, d, b[c]); return this } if (!1 === d || "function" == typeof d) e = d, d = void 0; !1 ===
            e && (e = C); return this.each(function () { f.event.remove(this, b, e, d) })
        }, trigger: function (b, d) { return this.each(function () { f.event.trigger(b, d, this) }) }, triggerHandler: function (b, d) { var e = this[0]; return e ? f.event.trigger(b, d, e, !0) : void 0 }
    }); var gb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Ub = / jQuery\d+="(?:null|\d+)"/g, nb = new RegExp("<(?:" + gb + ")[\\s/>]", "i"), Xa = /^\s+/, ob = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    pb = /<([\w:]+)/, qb = /<tbody/i, Vb = /<|&#?\w+;/, Wb = /<(?:script|style|link)/i, Xb = /checked\s*(?:[^=]|=\s*.checked.)/i, rb = /^$|\/(?:java|ecma)script/i, Kb = /^true\/(.*)/, Yb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, X = {
        option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3,
        "<table><tbody><tr>", "</tr></tbody></table>"], _default: F.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, Za = b(H).appendChild(H.createElement("div")); X.optgroup = X.option; X.tbody = X.tfoot = X.colgroup = X.caption = X.thead; X.th = X.td; f.extend({
        clone: function (b, d, c) {
            var k, g, h, p, l, n = f.contains(b.ownerDocument, b); F.html5Clone || f.isXMLDoc(b) || !nb.test("<" + b.nodeName + ">") ? h = b.cloneNode(!0) : (Za.innerHTML = b.outerHTML, Za.removeChild(h = Za.firstChild)); if (!(F.noCloneEvent && F.noCloneChecked || 1 !== b.nodeType && 11 !== b.nodeType ||
            f.isXMLDoc(b))) for (k = e(h), l = e(b), p = 0; null != (g = l[p]) ; ++p) if (k[p]) {
                var A = k[p], K = void 0, q = void 0, r = void 0; if (1 === A.nodeType) {
                    K = A.nodeName.toLowerCase(); if (!F.noCloneEvent && A[f.expando]) { r = f._data(A); for (q in r.events) f.removeEvent(A, q, r.handle); A.removeAttribute(f.expando) } "script" === K && A.text !== g.text ? (w(A).text = g.text, x(A)) : "object" === K ? (A.parentNode && (A.outerHTML = g.outerHTML), F.html5Clone && g.innerHTML && !f.trim(A.innerHTML) && (A.innerHTML = g.innerHTML)) : "input" === K && Ua.test(g.type) ? (A.defaultChecked =
                    A.checked = g.checked, A.value !== g.value && (A.value = g.value)) : "option" === K ? A.defaultSelected = A.selected = g.defaultSelected : ("input" === K || "textarea" === K) && (A.defaultValue = g.defaultValue)
                }
            } if (d) if (c) for (l = l || e(b), k = k || e(h), p = 0; null != (g = l[p]) ; p++) t(g, k[p]); else t(b, h); k = e(h, "script"); 0 < k.length && J(k, !n && e(b, "script")); return h
        }, buildFragment: function (c, k, g, w) {
            for (var x, t, h, p, l, n, A = c.length, K = b(k), q = [], r = 0; A > r; r++) if ((t = c[r]) || 0 === t) if ("object" === f.type(t)) f.merge(q, t.nodeType ? [t] : t); else if (Vb.test(t)) {
                h =
                h || K.appendChild(k.createElement("div")); p = (pb.exec(t) || ["", ""])[1].toLowerCase(); n = X[p] || X._default; h.innerHTML = n[1] + t.replace(ob, "<$1></$2>") + n[2]; for (x = n[0]; x--;) h = h.lastChild; !F.leadingWhitespace && Xa.test(t) && q.push(k.createTextNode(Xa.exec(t)[0])); if (!F.tbody) for (x = (t = "table" !== p || qb.test(t) ? "<table>" !== n[1] || qb.test(t) ? 0 : h : h.firstChild) && t.childNodes.length; x--;) f.nodeName(l = t.childNodes[x], "tbody") && !l.childNodes.length && t.removeChild(l); f.merge(q, h.childNodes); for (h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                h = K.lastChild
            } else q.push(k.createTextNode(t)); h && K.removeChild(h); F.appendChecked || f.grep(e(q, "input"), d); for (r = 0; t = q[r++];) if (!w || -1 === f.inArray(t, w)) if (c = f.contains(t.ownerDocument, t), h = e(K.appendChild(t), "script"), c && J(h), g) for (x = 0; t = h[x++];) rb.test(t.type || "") && g.push(t); return K
        }, cleanData: function (b, d) {
            for (var e, c, k, g, w = 0, x = f.expando, t = f.cache, h = F.deleteExpando, p = f.event.special; null != (e = b[w]) ; w++) if (d || f.acceptData(e)) if (g = (k = e[x]) && t[k]) {
                if (g.events) for (c in g.events) p[c] ? f.event.remove(e,
                c) : f.removeEvent(e, c, g.handle); t[k] && (delete t[k], h ? delete e[x] : typeof e.removeAttribute !== la ? e.removeAttribute(x) : e[x] = null, R.push(k))
            }
        }
    }); f.fn.extend({
        text: function (b) { return Ba(this, function (b) { return void 0 === b ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || H).createTextNode(b)) }, null, b, arguments.length) }, append: function () { return this.domManip(arguments, function (b) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || k(this, b).appendChild(b) }) }, prepend: function () {
            return this.domManip(arguments,
            function (b) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var d = k(this, b); d.insertBefore(b, d.firstChild) } })
        }, before: function () { return this.domManip(arguments, function (b) { this.parentNode && this.parentNode.insertBefore(b, this) }) }, after: function () { return this.domManip(arguments, function (b) { this.parentNode && this.parentNode.insertBefore(b, this.nextSibling) }) }, remove: function (b, d) {
            for (var c, k = b ? f.filter(b, this) : this, g = 0; null != (c = k[g]) ; g++) d || 1 !== c.nodeType || f.cleanData(e(c)), c.parentNode &&
            (d && f.contains(c.ownerDocument, c) && J(e(c, "script")), c.parentNode.removeChild(c)); return this
        }, empty: function () { for (var b, d = 0; null != (b = this[d]) ; d++) { for (1 === b.nodeType && f.cleanData(e(b, !1)) ; b.firstChild;) b.removeChild(b.firstChild); b.options && f.nodeName(b, "select") && (b.options.length = 0) } return this }, clone: function (b, d) { b = null == b ? !1 : b; d = null == d ? b : d; return this.map(function () { return f.clone(this, b, d) }) }, html: function (b) {
            return Ba(this, function (b) {
                var d = this[0] || {}, c = 0, k = this.length; if (void 0 === b) return 1 ===
                d.nodeType ? d.innerHTML.replace(Ub, "") : void 0; if (!("string" != typeof b || Wb.test(b) || !F.htmlSerialize && nb.test(b) || !F.leadingWhitespace && Xa.test(b) || X[(pb.exec(b) || ["", ""])[1].toLowerCase()])) { b = b.replace(ob, "<$1></$2>"); try { for (; k > c; c++) d = this[c] || {}, 1 === d.nodeType && (f.cleanData(e(d, !1)), d.innerHTML = b); d = 0 } catch (g) { } } d && this.empty().append(b)
            }, null, b, arguments.length)
        }, replaceWith: function () {
            var b = arguments[0]; this.domManip(arguments, function (d) {
                b = this.parentNode; f.cleanData(e(this)); b && b.replaceChild(d,
                this)
            }); return b && (b.length || b.nodeType) ? this : this.remove()
        }, detach: function (b) { return this.remove(b, !0) }, domManip: function (b, d) {
            b = ka.apply([], b); var c, k, g, t, h = 0, p = this.length, l = this, n = p - 1, J = b[0], A = f.isFunction(J); if (A || 1 < p && "string" == typeof J && !F.checkClone && Xb.test(J)) return this.each(function (e) { var c = l.eq(e); A && (b[0] = J.call(this, e, c.html())); c.domManip(b, d) }); if (p && (t = f.buildFragment(b, this[0].ownerDocument, !1, this), c = t.firstChild, 1 === t.childNodes.length && (t = c), c)) {
                g = f.map(e(t, "script"), w); for (k =
                g.length; p > h; h++) c = t, h !== n && (c = f.clone(c, !0, !0), k && f.merge(g, e(c, "script"))), d.call(this[h], c, h); if (k) for (t = g[g.length - 1].ownerDocument, f.map(g, x), h = 0; k > h; h++) c = g[h], rb.test(c.type || "") && !f._data(c, "globalEval") && f.contains(t, c) && (c.src ? f._evalUrl && f._evalUrl(c.src) : f.globalEval((c.text || c.textContent || c.innerHTML || "").replace(Yb, ""))); t = c = null
            } return this
        }
    }); f.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (b, d) {
        f.fn[b] = function (b) {
            for (var e =
            0, c = [], k = f(b), g = k.length - 1; g >= e; e++) b = e === g ? this : this.clone(!0), f(k[e])[d](b), P.apply(c, b.get()); return this.pushStack(c)
        }
    }); var Ha, hb = {}; !function () {
        var b; F.shrinkWrapBlocks = function () {
            if (null != b) return b; b = !1; var d, e, c; if ((e = H.getElementsByTagName("body")[0]) && e.style) return d = H.createElement("div"), c = H.createElement("div"), c.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(c).appendChild(d), typeof d.style.zoom !== la && (d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            d.appendChild(H.createElement("div")).style.width = "5px", b = 3 !== d.offsetWidth), e.removeChild(c), b
        }
    }(); var ya, oa, sb = /^margin/, La = new RegExp("^(" + Pa + ")(?!px)[a-z%]+$", "i"), Zb = /^(top|right|bottom|left)$/; c.getComputedStyle ? (ya = function (b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : c.getComputedStyle(b, null) }, oa = function (b, d, e) {
        var c, k, g = b.style; k = (e = e || ya(b)) ? e.getPropertyValue(d) || e[d] : void 0; e && ("" !== k || f.contains(b.ownerDocument, b) || (k = f.style(b, d)),
        La.test(k) && sb.test(d) && (b = g.width, d = g.minWidth, c = g.maxWidth, g.minWidth = g.maxWidth = g.width = k, k = e.width, g.width = b, g.minWidth = d, g.maxWidth = c)); return void 0 === k ? k : k + ""
    }) : H.documentElement.currentStyle && (ya = function (b) { return b.currentStyle }, oa = function (b, d, e) {
        var c, k, f, g = b.style; f = (e = e || ya(b)) ? e[d] : void 0; null == f && g && g[d] && (f = g[d]); La.test(f) && !Zb.test(d) && (e = g.left, (k = (c = b.runtimeStyle) && c.left) && (c.left = b.currentStyle.left), g.left = "fontSize" === d ? "1em" : f, f = g.pixelLeft + "px", g.left = e, k && (c.left = k));
        return void 0 === f ? f : f + "" || "auto"
    }); !function () {
        function b() {
            var d, e, f, t; if ((e = H.getElementsByTagName("body")[0]) && e.style) {
                d = H.createElement("div"); f = H.createElement("div"); f.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"; e.appendChild(f).appendChild(d); d.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"; k = g = !1; x = !0; c.getComputedStyle &&
                (k = "1%" !== (c.getComputedStyle(d, null) || {}).top, g = "4px" === (c.getComputedStyle(d, null) || { width: "4px" }).width, t = d.appendChild(H.createElement("div")), t.style.cssText = d.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", d.style.width = "1px", x = !parseFloat((c.getComputedStyle(t, null) || {}).marginRight), d.removeChild(t)); d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"; t =
                d.getElementsByTagName("td"); t[0].style.cssText = "margin:0;border:0;padding:0;display:none"; if (w = 0 === t[0].offsetHeight) t[0].style.display = "", t[1].style.display = "none", w = 0 === t[0].offsetHeight; e.removeChild(f)
            }
        } var d, e, k, g, w, x; d = H.createElement("div"); d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"; if (e = (e = d.getElementsByTagName("a")[0]) && e.style) e.cssText = "float:left;opacity:.5", F.opacity = "0.5" === e.opacity, F.cssFloat = !!e.cssFloat, d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "", F.clearCloneStyle = "content-box" === d.style.backgroundClip, F.boxSizing = "" === e.boxSizing || "" === e.MozBoxSizing || "" === e.WebkitBoxSizing, f.extend(F, { reliableHiddenOffsets: function () { null == w && b(); return w }, boxSizingReliable: function () { null == g && b(); return g }, pixelPosition: function () { null == k && b(); return k }, reliableMarginRight: function () { null == x && b(); return x } })
    }(); f.swap = function (b, d, e, c) {
        var k, f = {}; for (k in d) f[k] = b.style[k], b.style[k] = d[k]; e = e.apply(b, c || []); for (k in d) b.style[k] =
        f[k]; return e
    }; var $a = /alpha\([^)]*\)/i, $b = /opacity\s*=\s*([^)]*)/, ac = /^(none|table(?!-c[ea]).+)/, Lb = new RegExp("^(" + Pa + ")(.*)$", "i"), bc = new RegExp("^([+-])=(" + Pa + ")", "i"), cc = { position: "absolute", visibility: "hidden", display: "block" }, tb = { letterSpacing: "0", fontWeight: "400" }, ib = ["Webkit", "O", "Moz", "ms"]; f.extend({
        cssHooks: { opacity: { get: function (b, d) { if (d) { var e = oa(b, "opacity"); return "" === e ? "1" : e } } } }, cssNumber: {
            columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0,
            order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0
        }, cssProps: { "float": F.cssFloat ? "cssFloat" : "styleFloat" }, style: function (b, d, e, c) {
            if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
                var k, g, w, x = f.camelCase(d), t = b.style; d = f.cssProps[x] || (f.cssProps[x] = ea(t, x)); w = f.cssHooks[d] || f.cssHooks[x]; if (void 0 === e) return w && "get" in w && void 0 !== (k = w.get(b, !1, c)) ? k : t[d]; g = typeof e; "string" === g && (k = bc.exec(e)) && (e = (k[1] + 1) * k[2] + parseFloat(f.css(b, d)), g = "number"); if (null != e && e === e && ("number" !== g || f.cssNumber[x] || (e += "px"),
                F.clearCloneStyle || "" !== e || 0 !== d.indexOf("background") || (t[d] = "inherit"), !(w && "set" in w && void 0 === (e = w.set(b, e, c))))) try { t[d] = e } catch (h) { }
            }
        }, css: function (b, d, e, c) { var k, g; g = f.camelCase(d); d = f.cssProps[g] || (f.cssProps[g] = ea(b.style, g)); (g = f.cssHooks[d] || f.cssHooks[g]) && "get" in g && (k = g.get(b, !0, e)); void 0 === k && (k = oa(b, d, c)); "normal" === k && d in tb && (k = tb[d]); return "" === e || e ? (b = parseFloat(k), !0 === e || f.isNumeric(b) ? b || 0 : k) : k }
    }); f.each(["height", "width"], function (b, d) {
        f.cssHooks[d] = {
            get: function (b, e, c) {
                return e ?
                ac.test(f.css(b, "display")) && 0 === b.offsetWidth ? f.swap(b, cc, function () { return ga(b, d, c) }) : ga(b, d, c) : void 0
            }, set: function (b, e, c) { var k = c && ya(b); return ba(0, e, c ? Q(b, d, c, F.boxSizing && "border-box" === f.css(b, "boxSizing", !1, k), k) : 0) }
        }
    }); F.opacity || (f.cssHooks.opacity = {
        get: function (b, d) { return $b.test((d && b.currentStyle ? b.currentStyle.filter : b.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : d ? "1" : "" }, set: function (b, d) {
            var e = b.style, c = b.currentStyle, k = f.isNumeric(d) ? "alpha(opacity=" + 100 * d + ")" : "", g = c && c.filter ||
            e.filter || ""; e.zoom = 1; if ((1 <= d || "" === d) && "" === f.trim(g.replace($a, "")) && e.removeAttribute && (e.removeAttribute("filter"), "" === d || c && !c.filter)) return; e.filter = $a.test(g) ? g.replace($a, k) : g + " " + k
        }
    }); f.cssHooks.marginRight = L(F.reliableMarginRight, function (b, d) { return d ? f.swap(b, { display: "inline-block" }, oa, [b, "marginRight"]) : void 0 }); f.each({ margin: "", padding: "", border: "Width" }, function (b, d) {
        f.cssHooks[b + d] = {
            expand: function (e) {
                var c = 0, k = {}; for (e = "string" == typeof e ? e.split(" ") : [e]; 4 > c; c++) k[b + xa[c] + d] =
                e[c] || e[c - 2] || e[0]; return k
            }
        }; sb.test(b) || (f.cssHooks[b + d].set = ba)
    }); f.fn.extend({ css: function (b, d) { return Ba(this, function (b, d, e) { var c, k = {}, g = 0; if (f.isArray(d)) { e = ya(b); for (c = d.length; c > g; g++) k[d[g]] = f.css(b, d[g], !1, e); return k } return void 0 !== e ? f.style(b, d, e) : f.css(b, d) }, b, d, 1 < arguments.length) }, show: function () { return S(this, !0) }, hide: function () { return S(this) }, toggle: function (b) { return "boolean" == typeof b ? b ? this.show() : this.hide() : this.each(function () { q(this) ? f(this).show() : f(this).hide() }) } });
    f.Tween = O; O.prototype = {
        constructor: O, ee: function (b, d, e, c, k, g) { this.elem = b; this.prop = e; this.easing = k || "swing"; this.options = d; this.start = this.now = this.cur(); this.end = c; this.unit = g || (f.cssNumber[e] ? "" : "px") }, cur: function () { var b = O.propHooks[this.prop]; return b && b.get ? b.get(this) : O.propHooks._default.get(this) }, run: function (b) {
            var d, e = O.propHooks[this.prop]; this.options.duration ? this.pos = d = f.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration) : this.pos = d = b; this.now = (this.end - this.start) *
            d + this.start; this.options.step && this.options.step.call(this.elem, this.now, this); e && e.set ? e.set(this) : O.propHooks._default.set(this); return this
        }
    }; O.prototype.ee.prototype = O.prototype; O.propHooks = {
        _default: {
            get: function (b) { return null == b.elem[b.prop] || b.elem.style && null != b.elem.style[b.prop] ? (b = f.css(b.elem, b.prop, "")) && "auto" !== b ? b : 0 : b.elem[b.prop] }, set: function (b) {
                f.fx.step[b.prop] ? f.fx.step[b.prop](b) : b.elem.style && (null != b.elem.style[f.cssProps[b.prop]] || f.cssHooks[b.prop]) ? f.style(b.elem, b.prop,
                b.now + b.unit) : b.elem[b.prop] = b.now
            }
        }
    }; O.propHooks.scrollTop = O.propHooks.scrollLeft = { set: function (b) { b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now) } }; f.easing = { linear: function (b) { return b }, swing: function (b) { return .5 - Math.cos(b * Math.PI) / 2 } }; f.fx = O.prototype.ee; f.fx.step = {}; var Da, Qa, dc = /^(?:toggle|show|hide)$/, ub = new RegExp("^(?:([+-])=|)(" + Pa + ")([a-z%]*)$", "i"), ec = /queueHooks$/, Ma = [function (b, d, e) {
        var c, k, g, w, x, t, h = this, p = {}, l = b.style, n = b.nodeType && q(b), J = f._data(b, "fxshow"); e.queue || (w =
        f._queueHooks(b, "fx"), null == w.unqueued && (w.unqueued = 0, x = w.empty.fire, w.empty.fire = function () { w.unqueued || x() }), w.unqueued++, h.always(function () { h.always(function () { w.unqueued--; f.queue(b, "fx").length || w.empty.fire() }) })); 1 === b.nodeType && ("height" in d || "width" in d) && (e.overflow = [l.overflow, l.overflowX, l.overflowY], t = f.css(b, "display"), k = "none" === t ? f._data(b, "olddisplay") || M(b.nodeName) : t, "inline" === k && "none" === f.css(b, "float") && (F.inlineBlockNeedsLayout && "inline" !== M(b.nodeName) ? l.zoom = 1 : l.display =
        "inline-block")); e.overflow && (l.overflow = "hidden", F.shrinkWrapBlocks() || h.always(function () { l.overflow = e.overflow[0]; l.overflowX = e.overflow[1]; l.overflowY = e.overflow[2] })); for (c in d) if (k = d[c], dc.exec(k)) { delete d[c]; g = g || "toggle" === k; if (k === (n ? "hide" : "show")) { if ("show" !== k || !J || void 0 === J[c]) continue; n = !0 } p[c] = J && J[c] || f.style(b, c) } else t = void 0; if (f.isEmptyObject(p)) "inline" === ("none" === t ? M(b.nodeName) : t) && (l.display = t); else for (c in J ? "hidden" in J && (n = J.hidden) : J = f._data(b, "fxshow", {}), g && (J.hidden =
        !n), n ? f(b).show() : h.done(function () { f(b).hide() }), h.done(function () { var d; f._removeData(b, "fxshow"); for (d in p) f.style(b, d, p[d]) }), p) d = da(n ? J[c] : 0, c, h), c in J || (J[c] = d.start, n && (d.end = d.start, d.start = "width" === c || "height" === c ? 1 : 0))
    }], Ia = {
        "*": [function (b, d) {
            var e = this.createTween(b, d), c = e.cur(), k = ub.exec(d), g = k && k[3] || (f.cssNumber[b] ? "" : "px"), w = (f.cssNumber[b] || "px" !== g && +c) && ub.exec(f.css(e.elem, b)), x = 1, t = 20; if (w && w[3] !== g) {
                g = g || w[3]; k = k || []; w = +c || 1; do x = x || ".5", w /= x, f.style(e.elem, b, w + g); while (x !==
                (x = e.cur() / c) && 1 !== x && --t)
            } k && (w = e.start = +w || +c || 0, e.unit = g, e.end = k[1] ? w + (k[1] + 1) * k[2] : +k[2]); return e
        }]
    }; f.Animation = f.extend(ta, { tweener: function (b, d) { f.isFunction(b) ? (d = b, b = ["*"]) : b = b.split(" "); for (var e, c = 0, k = b.length; k > c; c++) e = b[c], Ia[e] = Ia[e] || [], Ia[e].unshift(d) }, prefilter: function (b, d) { d ? Ma.unshift(b) : Ma.push(b) } }); f.speed = function (b, d, e) {
        var c = b && "object" == typeof b ? f.extend({}, b) : { complete: e || !e && d || f.isFunction(b) && b, duration: b, easing: e && d || d && !f.isFunction(d) && d }; c.duration = f.fx.off ? 0 :
        "number" == typeof c.duration ? c.duration : c.duration in f.fx.speeds ? f.fx.speeds[c.duration] : f.fx.speeds._default; null != c.queue && !0 !== c.queue || (c.queue = "fx"); c.old = c.complete; c.complete = function () { f.isFunction(c.old) && c.old.call(this); c.queue && f.dequeue(this, c.queue) }; return c
    }; f.fn.extend({
        fadeTo: function (b, d, e, c) { return this.filter(q).css("opacity", 0).show().end().animate({ opacity: d }, b, e, c) }, animate: function (b, d, e, c) {
            function k() { var d = ta(this, f.extend({}, b), w); (g || f._data(this, "finish")) && d.stop(!0) }
            var g = f.isEmptyObject(b), w = f.speed(d, e, c); k.finish = k; return g || !1 === w.queue ? this.each(k) : this.queue(w.queue, k)
        }, stop: function (b, d, e) {
            function c(b) { var d = b.stop; delete b.stop; d(e) } "string" != typeof b && (e = d, d = b, b = void 0); d && !1 !== b && this.queue(b || "fx", []); return this.each(function () {
                var d = !0, k = null != b && b + "queueHooks", g = f.timers, w = f._data(this); if (k) w[k] && w[k].stop && c(w[k]); else for (k in w) w[k] && w[k].stop && ec.test(k) && c(w[k]); for (k = g.length; k--;) g[k].elem !== this || null != b && g[k].queue !== b || (g[k].anim.stop(e),
                d = !1, g.splice(k, 1)); !d && e || f.dequeue(this, b)
            })
        }, finish: function (b) { !1 !== b && (b = b || "fx"); return this.each(function () { var d, e = f._data(this), c = e[b + "queue"]; d = e[b + "queueHooks"]; var k = f.timers, g = c ? c.length : 0; e.finish = !0; f.queue(this, b, []); d && d.stop && d.stop.call(this, !0); for (d = k.length; d--;) k[d].elem === this && k[d].queue === b && (k[d].anim.stop(!0), k.splice(d, 1)); for (d = 0; g > d; d++) c[d] && c[d].finish && c[d].finish.call(this); delete e.finish }) }
    }); f.each(["toggle", "show", "hide"], function (b, d) {
        var e = f.fn[d]; f.fn[d] =
        function (b, c, k) { return null == b || "boolean" == typeof b ? e.apply(this, arguments) : this.animate(U(d, !0), b, c, k) }
    }); f.each({ slideDown: U("show"), slideUp: U("hide"), slideToggle: U("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (b, d) { f.fn[b] = function (b, e, c) { return this.animate(d, b, e, c) } }); f.timers = []; f.fx.a = function () { var b, d = f.timers, e = 0; for (Da = f.now() ; e < d.length; e++) b = d[e], b() || d[e] !== b || d.splice(e--, 1); d.length || f.fx.stop(); Da = void 0 }; f.fx.timer = function (b) {
        f.timers.push(b);
        b() ? f.fx.start() : f.timers.pop()
    }; f.fx.interval = 13; f.fx.start = function () { Qa || (Qa = setInterval(f.fx.a, f.fx.interval)) }; f.fx.stop = function () { clearInterval(Qa); Qa = null }; f.fx.speeds = { slow: 600, fast: 200, _default: 400 }; f.fn.delay = function (b, d) { b = f.fx ? f.fx.speeds[b] || b : b; return this.queue(d || "fx", function (d, e) { var c = setTimeout(d, b); e.stop = function () { clearTimeout(c) } }) }; !function () {
        var b, d, e, c, k; d = H.createElement("div"); d.setAttribute("className", "t"); d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        c = d.getElementsByTagName("a")[0]; e = H.createElement("select"); k = e.appendChild(H.createElement("option")); b = d.getElementsByTagName("input")[0]; c.style.cssText = "top:1px"; F.getSetAttribute = "t" !== d.className; F.style = /top/.test(c.getAttribute("style")); F.hrefNormalized = "/a" === c.getAttribute("href"); F.checkOn = !!b.value; F.optSelected = k.selected; F.enctype = !!H.createElement("form").enctype; e.disabled = !0; F.optDisabled = !k.disabled; b = H.createElement("input"); b.setAttribute("value", ""); F.input = "" === b.getAttribute("value");
        b.value = "t"; b.setAttribute("type", "radio"); F.radioValue = "t" === b.value
    }(); var fc = /\r/g; f.fn.extend({
        val: function (b) {
            var d, e, c, k = this[0]; if (arguments.length) return c = f.isFunction(b), this.each(function (e) { 1 === this.nodeType && (e = c ? b.call(this, e, f(this).val()) : b, null == e ? e = "" : "number" == typeof e ? e += "" : f.isArray(e) && (e = f.map(e, function (b) { return null == b ? "" : b + "" })), (d = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()]) && "set" in d && void 0 !== d.set(this, e, "value") || (this.value = e)) }); if (k) {
                if ((d = f.valHooks[k.type] ||
                f.valHooks[k.nodeName.toLowerCase()]) && "get" in d && void 0 !== (e = d.get(k, "value"))) return e; e = k.value; return "string" == typeof e ? e.replace(fc, "") : null == e ? "" : e
            }
        }
    }); f.extend({
        valHooks: {
            option: { get: function (b) { var d = f.find.attr(b, "value"); return null != d ? d : f.trim(f.text(b)) } }, select: {
                get: function (b) {
                    for (var d, e = b.options, c = b.selectedIndex, k = (b = "select-one" === b.type || 0 > c) ? null : [], g = b ? c + 1 : e.length, w = 0 > c ? g : b ? c : 0; g > w; w++) if (d = e[w], !(!d.selected && w !== c || (F.optDisabled ? d.disabled : null !== d.getAttribute("disabled")) ||
                    d.parentNode.disabled && f.nodeName(d.parentNode, "optgroup"))) { d = f(d).val(); if (b) return d; k.push(d) } return k
                }, set: function (b, d) { for (var e, c, k = b.options, g = f.makeArray(d), w = k.length; w--;) if (c = k[w], 0 <= f.inArray(f.valHooks.option.get(c), g)) try { c.selected = e = !0 } catch (x) { c.scrollHeight } else c.selected = !1; e || (b.selectedIndex = -1); return k }
            }
        }
    }); f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = { set: function (b, d) { return f.isArray(d) ? b.checked = 0 <= f.inArray(f(b).val(), d) : void 0 } }; F.checkOn || (f.valHooks[this].get =
        function (b) { return null === b.getAttribute("value") ? "on" : b.value })
    }); var Fa, vb, va = f.expr.attrHandle, ab = /^(?:checked|selected)$/i, Ca = F.getSetAttribute, Ra = F.input; f.fn.extend({ attr: function (b, d) { return Ba(this, f.attr, b, d, 1 < arguments.length) }, removeAttr: function (b) { return this.each(function () { f.removeAttr(this, b) }) } }); f.extend({
        attr: function (b, d, e) {
            var c, k, g = b.nodeType; if (b && 3 !== g && 8 !== g && 2 !== g) {
                if (typeof b.getAttribute === la) return f.prop(b, d, e); 1 === g && f.isXMLDoc(b) || (d = d.toLowerCase(), c = f.attrHooks[d] ||
                (f.expr.match.bool.test(d) ? vb : Fa)); if (void 0 === e) { if (c && "get" in c && null !== (k = c.get(b, d))) return k; k = f.find.attr(b, d); return null == k ? void 0 : k } if (null !== e) { if (c && "set" in c && void 0 !== (k = c.set(b, e, d))) return k; b.setAttribute(d, e + ""); return e } f.removeAttr(b, d)
            }
        }, removeAttr: function (b, d) { var e, c, k = 0, g = d && d.match(ma); if (g && 1 === b.nodeType) for (; e = g[k++];) c = f.propFix[e] || e, f.expr.match.bool.test(e) ? Ra && Ca || !ab.test(e) ? b[c] = !1 : b[f.camelCase("default-" + e)] = b[c] = !1 : f.attr(b, e, ""), b.removeAttribute(Ca ? e : c) }, attrHooks: {
            type: {
                set: function (b,
                d) { if (!F.radioValue && "radio" === d && f.nodeName(b, "input")) { var e = b.value; b.setAttribute("type", d); e && (b.value = e); return d } }
            }
        }
    }); vb = { set: function (b, d, e) { !1 === d ? f.removeAttr(b, e) : Ra && Ca || !ab.test(e) ? b.setAttribute(!Ca && f.propFix[e] || e, e) : b[f.camelCase("default-" + e)] = b[e] = !0; return e } }; f.each(f.expr.match.bool.source.match(/\w+/g), function (b, d) {
        var e = va[d] || f.find.attr; va[d] = Ra && Ca || !ab.test(d) ? function (b, d, c) { var k, g; c || (g = va[d], va[d] = k, k = null != e(b, d, c) ? d.toLowerCase() : null, va[d] = g); return k } : function (b,
        d, e) { return e ? void 0 : b[f.camelCase("default-" + d)] ? d.toLowerCase() : null }
    }); Ra && Ca || (f.attrHooks.value = { set: function (b, d, e) { if (!f.nodeName(b, "input")) return Fa && Fa.set(b, d, e); b.defaultValue = d } }); Ca || (Fa = { set: function (b, d, e) { var c = b.getAttributeNode(e); c || b.setAttributeNode(c = b.ownerDocument.createAttribute(e)); c.value = d += ""; return "value" === e || d === b.getAttribute(e) ? d : void 0 } }, va.id = va.name = va.coords = function (b, d, e) { var c; return e ? void 0 : (c = b.getAttributeNode(d)) && "" !== c.value ? c.value : null }, f.valHooks.button =
    { get: function (b, d) { var e = b.getAttributeNode(d); return e && e.specified ? e.value : void 0 }, set: Fa.set }, f.attrHooks.contenteditable = { set: function (b, d, e) { Fa.set(b, "" === d ? !1 : d, e) } }, f.each(["width", "height"], function (b, d) { f.attrHooks[d] = { set: function (b, e) { if ("" === e) return b.setAttribute(d, "auto"), e } } })); F.style || (f.attrHooks.style = { get: function (b) { return b.style.cssText || void 0 }, set: function (b, d) { return b.style.cssText = d + "" } }); var gc = /^(?:input|select|textarea|button|object)$/i, hc = /^(?:a|area)$/i; f.fn.extend({
        prop: function (b,
        d) { return Ba(this, f.prop, b, d, 1 < arguments.length) }, removeProp: function (b) { b = f.propFix[b] || b; return this.each(function () { try { this[b] = void 0, delete this[b] } catch (d) { } }) }
    }); f.extend({
        propFix: { "for": "htmlFor", "class": "className" }, prop: function (b, d, e) { var c, k, g; g = b.nodeType; if (b && 3 !== g && 8 !== g && 2 !== g) { if (g = 1 !== g || !f.isXMLDoc(b)) d = f.propFix[d] || d, k = f.propHooks[d]; return void 0 !== e ? k && "set" in k && void 0 !== (c = k.set(b, e, d)) ? c : b[d] = e : k && "get" in k && null !== (c = k.get(b, d)) ? c : b[d] } }, propHooks: {
            tabIndex: {
                get: function (b) {
                    var d =
                    f.find.attr(b, "tabindex"); return d ? parseInt(d, 10) : gc.test(b.nodeName) || hc.test(b.nodeName) && b.href ? 0 : -1
                }
            }
        }
    }); F.hrefNormalized || f.each(["href", "src"], function (b, d) { f.propHooks[d] = { get: function (b) { return b.getAttribute(d, 4) } } }); F.optSelected || (f.propHooks.selected = { get: function (b) { if (b = b.parentNode) b.selectedIndex, b.parentNode && b.parentNode.selectedIndex; return null } }); f.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function () {
        f.propFix[this.toLowerCase()] =
        this
    }); F.enctype || (f.propFix.enctype = "encoding"); var bb = /[\t\r\n\f]/g; f.fn.extend({
        addClass: function (b) { var d, e, c, k, g, w = 0, x = this.length; d = "string" == typeof b && b; if (f.isFunction(b)) return this.each(function (d) { f(this).addClass(b.call(this, d, this.className)) }); if (d) for (d = (b || "").match(ma) || []; x > w; w++) if (e = this[w], c = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bb, " ") : " ")) { for (g = 0; k = d[g++];) 0 > c.indexOf(" " + k + " ") && (c += k + " "); c = f.trim(c); e.className !== c && (e.className = c) } return this }, removeClass: function (b) {
            var d,
            e, c, k, g, w = 0, x = this.length; d = 0 === arguments.length || "string" == typeof b && b; if (f.isFunction(b)) return this.each(function (d) { f(this).removeClass(b.call(this, d, this.className)) }); if (d) for (d = (b || "").match(ma) || []; x > w; w++) if (e = this[w], c = 1 === e.nodeType && (e.className ? (" " + e.className + " ").replace(bb, " ") : "")) { for (g = 0; k = d[g++];) for (; 0 <= c.indexOf(" " + k + " ") ;) c = c.replace(" " + k + " ", " "); c = b ? f.trim(c) : ""; e.className !== c && (e.className = c) } return this
        }, toggleClass: function (b, d) {
            var e = typeof b; return "boolean" == typeof d &&
            "string" === e ? d ? this.addClass(b) : this.removeClass(b) : f.isFunction(b) ? this.each(function (e) { f(this).toggleClass(b.call(this, e, this.className, d), d) }) : this.each(function () { if ("string" === e) for (var d, c = 0, k = f(this), g = b.match(ma) || []; d = g[c++];) k.hasClass(d) ? k.removeClass(d) : k.addClass(d); else if (e === la || "boolean" === e) this.className && f._data(this, "__className__", this.className), this.className = this.className || !1 === b ? "" : f._data(this, "__className__") || "" })
        }, hasClass: function (b) {
            b = " " + b + " "; for (var d = 0, e = this.length; e >
            d; d++) if (1 === this[d].nodeType && 0 <= (" " + this[d].className + " ").replace(bb, " ").indexOf(b)) return !0; return !1
        }
    }); f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (b, d) { f.fn[d] = function (b, e) { return 0 < arguments.length ? this.on(d, null, b, e) : this.trigger(d) } }); f.fn.extend({
        hover: function (b, d) {
            return this.mouseenter(b).mouseleave(d ||
            b)
        }, bind: function (b, d, e) { return this.on(b, null, d, e) }, unbind: function (b, d) { return this.off(b, null, d) }, delegate: function (b, d, e, c) { return this.on(d, b, e, c) }, undelegate: function (b, d, e) { return 1 === arguments.length ? this.off(b, "**") : this.off(d, b || "**", e) }
    }); var cb = f.now(), db = /\?/, ic = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; f.parseJSON = function (b) {
        if (c.JSON && c.JSON.parse) return c.JSON.parse(b + ""); var d, e = null, k = f.trim(b +
        ""); return k && !f.trim(k.replace(ic, function (b, c, k, g) { d && c && (e = 0); if (0 === e) return b; d = k || c; e += !g - !k; return "" })) ? Function("return " + k)() : f.error("Invalid JSON: " + b)
    }; f.parseXML = function (b) { var d, e; if (!b || "string" != typeof b) return null; try { c.DOMParser ? (e = new DOMParser, d = e.parseFromString(b, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(b)) } catch (k) { d = void 0 } d && d.documentElement && !d.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + b); return d }; var na,
    wa, jc = /#.*$/, wb = /([?&])_=[^&]*/, kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, lc = /^(?:GET|HEAD)$/, mc = /^\/\//, xb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, yb = {}, Va = {}, zb = "*/".concat("*"); try { wa = location.href } catch (I) { wa = H.createElement("a"), wa.href = "", wa = wa.href } na = xb.exec(wa.toLowerCase()) || []; f.extend({
        active: 0, lastModified: {}, etag: {}, ajaxSettings: {
            url: wa, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(na[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: { "*": zb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML }, flatOptions: { url: !0, context: !0 }
        }, ajaxSetup: function (b, d) { return d ? aa(aa(b, f.ajaxSettings), d) : aa(f.ajaxSettings, b) }, ajaxPrefilter: N(yb), ajaxTransport: N(Va), ajax: function (b,
        d) {
            function e(b, d, c, k) {
                var p, r, y, D; D = d; if (2 !== B) {
                    B = 2; x && clearTimeout(x); h = void 0; w = k || ""; C.readyState = 0 < b ? 4 : 0; k = 200 <= b && 300 > b || 304 === b; if (c) { y = l; for (var E = C, v, z, u, Q, M = y.contents, ga = y.dataTypes; "*" === ga[0];) ga.shift(), void 0 === z && (z = y.mimeType || E.getResponseHeader("Content-Type")); if (z) for (Q in M) if (M[Q] && M[Q].test(z)) { ga.unshift(Q); break } if (ga[0] in c) u = ga[0]; else { for (Q in c) { if (!ga[0] || y.converters[Q + " " + ga[0]]) { u = Q; break } v || (v = Q) } u = u || v } u ? (u !== ga[0] && ga.unshift(u), y = c[u]) : y = void 0 }a: {
                        c = l; v = y; z = C;
                        u = k; var I, ba, O, E = {}, M = c.dataTypes.slice(); if (M[1]) for (ba in c.converters) E[ba.toLowerCase()] = c.converters[ba]; for (Q = M.shift() ; Q;) if (c.responseFields[Q] && (z[c.responseFields[Q]] = v), !O && u && c.dataFilter && (v = c.dataFilter(v, c.dataType)), O = Q, Q = M.shift()) if ("*" === Q) Q = O; else if ("*" !== O && O !== Q) {
                            ba = E[O + " " + Q] || E["* " + Q]; if (!ba) for (I in E) if (y = I.split(" "), y[1] === Q && (ba = E[O + " " + y[0]] || E["* " + y[0]])) { !0 === ba ? ba = E[I] : !0 !== E[I] && (Q = y[0], M.unshift(y[1])); break } if (!0 !== ba) if (ba && c["throws"]) v = ba(v); else try { v = ba(v) } catch (L) {
                                y =
                                { state: "parsererror", error: ba ? L : "No conversion from " + O + " to " + Q }; break a
                            }
                        } y = { state: "success", data: v }
                    } if (k) l.ifModified && ((D = C.getResponseHeader("Last-Modified")) && (f.lastModified[g] = D), (D = C.getResponseHeader("etag")) && (f.etag[g] = D)), 204 === b || "HEAD" === l.type ? D = "nocontent" : 304 === b ? D = "notmodified" : (D = y.state, p = y.data, r = y.error, k = !r); else if (r = D, b || !D) D = "error", 0 > b && (b = 0); C.status = b; C.statusText = (d || D) + ""; k ? A.resolveWith(n, [p, D, C]) : A.rejectWith(n, [C, D, r]); C.statusCode(q); q = void 0; t && J.trigger(k ? "ajaxSuccess" :
                    "ajaxError", [C, l, k ? p : r]); K.fireWith(n, [C, D]); t && (J.trigger("ajaxComplete", [C, l]), --f.active || f.event.trigger("ajaxStop"))
                }
            } "object" == typeof b && (d = b, b = void 0); d = d || {}; var c, k, g, w, x, t, h, p, l = f.ajaxSetup({}, d), n = l.context || l, J = l.context && (n.nodeType || n.jquery) ? f(n) : f.event, A = f.Deferred(), K = f.Callbacks("once memory"), q = l.statusCode || {}, r = {}, y = {}, B = 0, D = "canceled", C = {
                readyState: 0, getResponseHeader: function (b) {
                    var d; if (2 === B) { if (!p) for (p = {}; d = kc.exec(w) ;) p[d[1].toLowerCase()] = d[2]; d = p[b.toLowerCase()] } return null ==
                    d ? null : d
                }, getAllResponseHeaders: function () { return 2 === B ? w : null }, setRequestHeader: function (b, d) { var e = b.toLowerCase(); B || (b = y[e] = y[e] || b, r[b] = d); return this }, overrideMimeType: function (b) { B || (l.mimeType = b); return this }, statusCode: function (b) { var d; if (b) if (2 > B) for (d in b) q[d] = [q[d], b[d]]; else C.always(b[C.status]); return this }, abort: function (b) { b = b || D; h && h.abort(b); e(0, b); return this }
            }; A.promise(C).complete = K.add; C.success = C.done; C.error = C.fail; l.url = ((b || l.url || wa) + "").replace(jc, "").replace(mc, na[1] +
            "//"); l.type = d.method || d.type || l.method || l.type; l.dataTypes = f.trim(l.dataType || "*").toLowerCase().match(ma) || [""]; null == l.crossDomain && (c = xb.exec(l.url.toLowerCase()), l.crossDomain = !(!c || c[1] === na[1] && c[2] === na[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (na[3] || ("http:" === na[1] ? "80" : "443")))); l.data && l.processData && "string" != typeof l.data && (l.data = f.param(l.data, l.traditional)); V(yb, l, d, C); if (2 === B) return C; (t = f.event && l.global) && 0 === f.active++ && f.event.trigger("ajaxStart"); l.type = l.type.toUpperCase();
            l.hasContent = !lc.test(l.type); g = l.url; l.hasContent || (l.data && (g = l.url += (db.test(g) ? "&" : "?") + l.data, delete l.data), !1 === l.cache && (l.url = wb.test(g) ? g.replace(wb, "$1_=" + cb++) : g + (db.test(g) ? "&" : "?") + "_=" + cb++)); l.ifModified && (f.lastModified[g] && C.setRequestHeader("If-Modified-Since", f.lastModified[g]), f.etag[g] && C.setRequestHeader("If-None-Match", f.etag[g])); (l.data && l.hasContent && !1 !== l.contentType || d.contentType) && C.setRequestHeader("Content-Type", l.contentType); C.setRequestHeader("Accept", l.dataTypes[0] &&
            l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + zb + "; q=0.01" : "") : l.accepts["*"]); for (k in l.headers) C.setRequestHeader(k, l.headers[k]); if (l.beforeSend && (!1 === l.beforeSend.call(n, C, l) || 2 === B)) return C.abort(); D = "abort"; for (k in { success: 1, error: 1, complete: 1 }) C[k](l[k]); if (h = V(Va, l, d, C)) { C.readyState = 1; t && J.trigger("ajaxSend", [C, l]); l.async && 0 < l.timeout && (x = setTimeout(function () { C.abort("timeout") }, l.timeout)); try { B = 1, h.send(r, e) } catch (E) { if (!(2 > B)) throw E; e(-1, E) } } else e(-1,
            "No Transport"); return C
        }, getJSON: function (b, d, e) { return f.get(b, d, e, "json") }, getScript: function (b, d) { return f.get(b, void 0, d, "script") }
    }); f.each(["get", "post"], function (b, d) { f[d] = function (b, e, c, k) { f.isFunction(e) && (k = k || c, c = e, e = void 0); return f.ajax({ url: b, type: d, dataType: k, data: e, success: c }) } }); f._evalUrl = function (b) { return f.ajax({ url: b, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }; f.fn.extend({
        wrapAll: function (b) {
            if (f.isFunction(b)) return this.each(function (d) {
                f(this).wrapAll(b.call(this,
                d))
            }); if (this[0]) { var d = f(b, this[0].ownerDocument).eq(0).clone(!0); this[0].parentNode && d.insertBefore(this[0]); d.map(function () { for (var b = this; b.firstChild && 1 === b.firstChild.nodeType;) b = b.firstChild; return b }).append(this) } return this
        }, wrapInner: function (b) { return f.isFunction(b) ? this.each(function (d) { f(this).wrapInner(b.call(this, d)) }) : this.each(function () { var d = f(this), e = d.contents(); e.length ? e.wrapAll(b) : d.append(b) }) }, wrap: function (b) {
            var d = f.isFunction(b); return this.each(function (e) {
                f(this).wrapAll(d ?
                b.call(this, e) : b)
            })
        }, unwrap: function () { return this.parent().each(function () { f.nodeName(this, "body") || f(this).replaceWith(this.childNodes) }).end() }
    }); f.expr.filters.hidden = function (b) { return 0 >= b.offsetWidth && 0 >= b.offsetHeight || !F.reliableHiddenOffsets() && "none" === (b.style && b.style.display || f.css(b, "display")) }; f.expr.filters.visible = function (b) { return !f.expr.filters.hidden(b) }; var nc = /%20/g, Mb = /\[\]$/, Ab = /\r?\n/g, oc = /^(?:submit|button|image|reset|file)$/i, pc = /^(?:input|select|textarea|keygen)/i; f.param =
    function (b, d) { function e(b, d) { d = f.isFunction(d) ? d() : null == d ? "" : d; k[k.length] = encodeURIComponent(b) + "=" + encodeURIComponent(d) } var c, k = []; void 0 === d && (d = f.ajaxSettings && f.ajaxSettings.traditional); if (f.isArray(b) || b.jquery && !f.isPlainObject(b)) f.each(b, function () { e(this.name, this.value) }); else for (c in b) qa(c, b[c], d, e); return k.join("&").replace(nc, "+") }; f.fn.extend({
        serialize: function () { return f.param(this.serializeArray()) }, serializeArray: function () {
            return this.map(function () {
                var b = f.prop(this, "elements");
                return b ? f.makeArray(b) : this
            }).filter(function () { var b = this.type; return this.name && !f(this).is(":disabled") && pc.test(this.nodeName) && !oc.test(b) && (this.checked || !Ua.test(b)) }).map(function (b, d) { var e = f(this).val(); return null == e ? null : f.isArray(e) ? f.map(e, function (b) { return { name: d.name, value: b.replace(Ab, "\r\n") } }) : { name: d.name, value: e.replace(Ab, "\r\n") } }).get()
        }
    }); f.ajaxSettings.xhr = void 0 !== c.ActiveXObject ? function () {
        var b; if (!(b = !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) &&
        pa())) a: { try { b = new c.ActiveXObject("Microsoft.XMLHTTP"); break a } catch (d) { } b = void 0 } return b
    } : pa; var qc = 0, Sa = {}, Ta = f.ajaxSettings.xhr(); c.attachEvent && c.attachEvent("onunload", function () { for (var b in Sa) Sa[b](void 0, !0) }); F.cors = !!Ta && "withCredentials" in Ta; (Ta = F.ajax = !!Ta) && f.ajaxTransport(function (b) {
        if (!b.crossDomain || F.cors) {
            var d; return {
                send: function (e, c) {
                    var k, g = b.xhr(), w = ++qc; g.open(b.type, b.url, b.async, b.username, b.password); if (b.xhrFields) for (k in b.xhrFields) g[k] = b.xhrFields[k]; b.mimeType &&
                    g.overrideMimeType && g.overrideMimeType(b.mimeType); b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"); for (k in e) void 0 !== e[k] && g.setRequestHeader(k, e[k] + ""); g.send(b.hasContent && b.data || null); d = function (e, k) {
                        var x, t, h; if (d && (k || 4 === g.readyState)) if (delete Sa[w], d = void 0, g.onreadystatechange = f.noop, k) 4 !== g.readyState && g.abort(); else {
                            h = {}; x = g.status; "string" == typeof g.responseText && (h.text = g.responseText); try { t = g.statusText } catch (l) { t = "" } x || !b.isLocal || b.crossDomain ? 1223 ===
                            x && (x = 204) : x = h.text ? 200 : 404
                        } h && c(x, t, h, g.getAllResponseHeaders())
                    }; b.async ? 4 === g.readyState ? setTimeout(d) : g.onreadystatechange = Sa[w] = d : d()
                }, abort: function () { d && d(void 0, !0) }
            }
        }
    }); f.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (b) { f.globalEval(b); return b } } }); f.ajaxPrefilter("script", function (b) {
        void 0 === b.cache && (b.cache = !1); b.crossDomain && (b.type = "GET",
        b.global = !1)
    }); f.ajaxTransport("script", function (b) {
        if (b.crossDomain) {
            var d, e = H.head || f("head")[0] || H.documentElement; return {
                send: function (c, k) { d = H.createElement("script"); d.async = !0; b.scriptCharset && (d.charset = b.scriptCharset); d.src = b.url; d.onload = d.onreadystatechange = function (b, e) { if (e || !d.readyState || /loaded|complete/.test(d.readyState)) d.onload = d.onreadystatechange = null, d.parentNode && d.parentNode.removeChild(d), d = null, e || k(200, "success") }; e.insertBefore(d, e.firstChild) }, abort: function () {
                    d && d.onload(void 0,
                    !0)
                }
            }
        }
    }); var Bb = [], eb = /(=)\?(?=&|$)|\?\?/; f.ajaxSetup({ jsonp: "callback", jsonpCallback: function () { var b = Bb.pop() || f.expando + "_" + cb++; this[b] = !0; return b } }); f.ajaxPrefilter("json jsonp", function (b, d, e) {
        var k, g, w, x = !1 !== b.jsonp && (eb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && eb.test(b.data) && "data"); if (x || "jsonp" === b.dataTypes[0]) return k = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, x ? b[x] = b[x].replace(eb,
        "$1" + k) : !1 !== b.jsonp && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + k), b.converters["script json"] = function () { w || f.error(k + " was not called"); return w[0] }, b.dataTypes[0] = "json", g = c[k], c[k] = function () { w = arguments }, e.always(function () { c[k] = g; b[k] && (b.jsonpCallback = d.jsonpCallback, Bb.push(k)); w && f.isFunction(g) && g(w[0]); w = g = void 0 }), "script"
    }); f.parseHTML = function (b, d, e) {
        if (!b || "string" != typeof b) return null; "boolean" == typeof d && (e = d, d = !1); d = d || H; var c = jb.exec(b); e = !e && []; if (c) return [d.createElement(c[1])];
        c = f.buildFragment([b], d, e); e && e.length && f(e).remove(); return f.merge([], c.childNodes)
    }; var Cb = f.fn.load; f.fn.load = function (b, d, e) {
        if ("string" != typeof b && Cb) return Cb.apply(this, arguments); var c, k, g, w = this, x = b.indexOf(" "); 0 <= x && (c = f.trim(b.slice(x, b.length)), b = b.slice(0, x)); f.isFunction(d) ? (e = d, d = void 0) : d && "object" == typeof d && (g = "POST"); 0 < w.length && f.ajax({ url: b, type: g, dataType: "html", data: d }).done(function (b) { k = arguments; w.html(c ? f("<div>").append(f.parseHTML(b)).find(c) : b) }).complete(e && function (b,
        d) { w.each(e, k || [b.responseText, d, b]) }); return this
    }; f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (b, d) { f.fn[d] = function (b) { return this.on(d, b) } }); f.expr.filters.animated = function (b) { return f.grep(f.timers, function (d) { return b === d.elem }).length }; var Db = c.document.documentElement; f.offset = {
        setOffset: function (b, d, e) {
            var c, k, g, w = f.css(b, "position"), x = f(b), t = {}; "static" === w && (b.style.position = "relative"); g = x.offset(); k = f.css(b, "top"); c = f.css(b, "left"); ("absolute" ===
            w || "fixed" === w) && -1 < f.inArray("auto", [k, c]) ? (c = x.position(), k = c.top, c = c.left) : (k = parseFloat(k) || 0, c = parseFloat(c) || 0); f.isFunction(d) && (d = d.call(b, e, g)); null != d.top && (t.top = d.top - g.top + k); null != d.left && (t.left = d.left - g.left + c); "using" in d ? d.using.call(b, t) : x.css(t)
        }
    }; f.fn.extend({
        offset: function (b) {
            if (arguments.length) return void 0 === b ? this : this.each(function (d) { f.offset.setOffset(this, b, d) }); var d, e, c = { top: 0, left: 0 }, k = (e = this[0]) && e.ownerDocument; if (k) {
                d = k.documentElement; if (!f.contains(d, e)) return c;
                typeof e.getBoundingClientRect !== la && (c = e.getBoundingClientRect()); e = ua(k); return { top: c.top + (e.pageYOffset || d.scrollTop) - (d.clientTop || 0), left: c.left + (e.pageXOffset || d.scrollLeft) - (d.clientLeft || 0) }
            }
        }, position: function () {
            if (this[0]) {
                var b, d, e = { top: 0, left: 0 }, c = this[0]; "fixed" === f.css(c, "position") ? d = c.getBoundingClientRect() : (b = this.offsetParent(), d = this.offset(), f.nodeName(b[0], "html") || (e = b.offset()), e.top += f.css(b[0], "borderTopWidth", !0), e.left += f.css(b[0], "borderLeftWidth", !0)); return {
                    top: d.top -
                    e.top - f.css(c, "marginTop", !0), left: d.left - e.left - f.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () { return this.map(function () { for (var b = this.offsetParent || Db; b && !f.nodeName(b, "html") && "static" === f.css(b, "position") ;) b = b.offsetParent; return b || Db }) }
    }); f.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, d) {
        var e = /Y/.test(d); f.fn[b] = function (c) {
            return Ba(this, function (b, c, k) {
                var g = ua(b); if (void 0 === k) return g ? d in g ? g[d] : g.document.documentElement[c] : b[c]; g ? g.scrollTo(e ? f(g).scrollLeft() :
                k, e ? k : f(g).scrollTop()) : b[c] = k
            }, b, c, arguments.length, null)
        }
    }); f.each(["top", "left"], function (b, d) { f.cssHooks[d] = L(F.pixelPosition, function (b, e) { if (e) return e = oa(b, d), La.test(e) ? f(b).position()[d] + "px" : e }) }); f.each({ Height: "height", Width: "width" }, function (b, d) {
        f.each({ padding: "inner" + b, content: d, "": "outer" + b }, function (e, c) {
            f.fn[c] = function (c, k) {
                var g = arguments.length && (e || "boolean" != typeof c), w = e || (!0 === c || !0 === k ? "margin" : "border"); return Ba(this, function (d, e, c) {
                    return f.isWindow(d) ? d.document.documentElement["client" +
                    b] : 9 === d.nodeType ? (e = d.documentElement, Math.max(d.body["scroll" + b], e["scroll" + b], d.body["offset" + b], e["offset" + b], e["client" + b])) : void 0 === c ? f.css(d, e, w) : f.style(d, e, c, w)
                }, d, g ? c : void 0, g, null)
            }
        })
    }); f.fn.size = function () { return this.length }; f.fn.m = f.fn.addBack; "function" == typeof define && define.amd && define("jquery", [], function () { return f }); var rc = c.jQuery, sc = c.$; f.noConflict = function (b) { c.$ === f && (c.$ = sc); b && c.jQuery === f && (c.jQuery = rc); return f }; typeof u === la && (c.jQuery = c.$ = f); return f
});
define("PageElements/ElementJQ", ["require", "exports", "jquery"], function (c, u, q) { !function (c) { !function (c) { var r = function () { function c() { this.tg = document.createElement("div"); this.span = document.createElement("span"); this.p = document.createElement("p"); this.style = document.createElement("style"); this.image = document.createElement("img") } c.prototype.fb = function (c) { return q(this.tg).html("").attr("class", "").addClass(c).attr("style", "") }; return c }(); c.gb = r }(c.Oa || (c.Oa = {})) }(u.l || (u.l = {})) });
define("Error/ErrorJQ", ["require", "exports", "jquery"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c() { } c.prototype.$c = function (c) { this.Za = c }; c.prototype.Wd = function (c) { q("#notify").clearQueue(); q("#notify").html(""); q("#notify").append(c); q("#notify").css("display", "block"); this.cd() }; c.prototype.Sc = function (c) { q("#notify").clearQueue(); q("#notify").html(c); q("#notify").css("display", "block"); this.cd() }; c.prototype.cd = function () {
                window.clearTimeout(c.interval); c.interval = window.setTimeout(this.be,
                1E4)
            }; c.prototype.be = function () { q("#notify").css("display", "none"); window.clearTimeout(c.interval) }; c.prototype.U = function (c) { q(".error-" + this.Za).css("border", "2px solid red"); c = void 0 == c || "" == c ? "Action Failed" : "<div class='error-notify-block'>Action Failed </div><br/>" + c; q(this.la()).removeClass("success-notify-background"); q(this.la()).addClass("error-notify-background"); this.Sc(c) }; c.prototype.ia = function (c, f) {
                void 0 != c && -1 != c.toLowerCase().indexOf("page loaded") && q(".jq-loading").hide(); var n =
                q(document.createElement("div")); void 0 != f ? n.addClass("yellow-green-notify-background") : n.addClass("yellow-notify-background"); n.html(""); n.append(c); q(this.la()).removeClass("error-notify-background"); q(this.la()).removeClass("success-notify-background"); this.Wd(n)
            }; c.prototype.Ha = function (c) {
                q(".error-" + this.Za).css("border", "1px solid green"); q(".error-" + this.Za).removeClass("error-" + this.Za); void 0 != c && "" != c || (c = "Action Success"); q(this.la()).removeClass("error-notify-background"); q(this.la()).addClass("success-notify-background");
                this.Sc(c)
            }; c.prototype.la = function () { return q("#notify") }; c.bc = "#notify"; return c
        }(); c.A = f
    }(u.v || (u.v = {}))
});
define("Common/CommonMethodsJQ", ["require", "exports", "jquery"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c() { } c.prototype.vb = function (c) { return void 0 != c && "string" == typeof c.toLowerCase() ? this.de(this.ce(c)) : void 0 }; c.prototype.B = function (c, f) { if (void 0 != f) { f = f.toLowerCase(); var n = new RegExp(f + "[^;]+;?", "g"); q(c).each(function () { q(this).attr("style", function (c, g) { if (void 0 != g) return g.replace(n, "") }) }) } }; c.prototype.Vb = function (c, f) {
                if (void 0 != f) {
                    f = f.toLowerCase(); var n = new RegExp(f +
                    "s*:.*?;", "g"); q(c).each(function () { q(this).attr("style", function (c, g) { if (void 0 != g) return g.replace(n, "") }) })
                }
            }; c.prototype.ce = function (c) { if (void 0 != c && "string" == typeof c.toLowerCase()) { for (var f = 0, n = 0; n < c.length && !(" " == c[n] && (f = n + 1), n + 1 < c.length && " " != c[n + 1]) ; n++); f < c.length && (c = c.toString().slice(f)) } return c }; c.prototype.de = function (c) {
                if (void 0 != c && "string" == typeof c.toLowerCase()) {
                    for (var f = c.length, n = c.length - 1; -1 < n && !(" " == c[n] && (f = n), -1 < n - 1 && " " != c[n - 1]) ; n--); -1 < f && (c = c.toString().slice(0,
                    f)); return c
                }
            }; c.prototype.Wc = function (c) { void 0 != c && "string" == typeof c.toLowerCase() && (c = c.replace(/ /g, "")); return c }; c.prototype.Rd = function (c, f, n) { return void 0 != f && void 0 != n && "string" == typeof f.toLowerCase() && "string" == typeof n.toLowerCase() ? 0 < c && c < f.length ? f.substring(0, c) + n + f.substring(c, f.length) : f : void 0 }; return c
        }(); c.K = f
    }(u.C || (u.C = {}))
});
define("_Classes/UrlJQ", ["require", "exports", "../Common/CommonMethodsJQ"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c() { this.Mf = "/#" } c.prototype.we = function () { var c = document.location.hostname; void 0 != c && "" != c && (c = c.toLowerCase(), c = c.replace("www.", "")); return c }; c.prototype.Vf = function (g) { if (void 0 != g) { var f = new q.C.K, n = new c; "#" != f.vb(g) && (g = n.Tf(g), g = n.Uf(g), g = n.Sf(g, this.Mf)) } void 0 == g && (g = "/#"); return g }; c.prototype.Sf = function (c, f) {
                if (void 0 != c) {
                    var n = new q.C.K; c = n.vb(c); c = n.Wc(c);
                    0 != c.indexOf("http://") && 0 != c.indexOf("https://") && 0 != c.indexOf("//") && 0 != c.indexOf("www.") && (c = f + c)
                } return c
            }; c.prototype.Uf = function (c) { if (void 0 != c) { var f = new q.C.K; c = f.vb(c); c = f.Wc(c); 0 == c.indexOf("/") || 0 == c.indexOf("http://") || 0 == c.indexOf("https://") || 0 == c.indexOf("//") || 0 == c.indexOf("www.") || (c = "/" + c) } return c }; c.prototype.Tf = function (c) {
                if (void 0 != c) {
                    var f = new q.C.K; c = f.vb(c); c = f.Wc(c); if (0 == c.indexOf("/") || 0 == c.indexOf("http:") || 0 == c.indexOf("https:") || 0 == c.indexOf("//") || 0 == c.indexOf("www.")) {
                        if (0 ==
                        c.indexOf("http:/") || 0 == c.indexOf("https:/")) { var n; c = f.Rd(NaN, c, "/") } else if (0 == c.indexOf("http:") || 0 == c.indexOf("https:")) 0 == c.indexOf("http:") ? n = 5 : 0 == c.indexOf("https:") && (n = 6), c = f.Rd(n, c, "//"); 0 == c.indexOf("www.") && (c = "//" + c); c = this.Yf(c)
                    }
                } return c
            }; c.prototype.Yf = function (c) {
                if (void 0 != c) {
                    var f = new q.C.K; c = f.vb(c); c = f.Wc(c); if (!(0 != c.indexOf("/") && 0 != c.indexOf("http://") && 0 != c.indexOf("https://") && 0 != c.indexOf("//") && 0 != c.indexOf("www.") || 0 != c.indexOf("http://") && 0 != c.indexOf("https://") && 0 !=
                    c.indexOf("//"))) { f = ""; 0 == c.indexOf("http:") ? (f = "http://", c = c.slice(5)) : 0 == c.indexOf("https:") ? (f = "https://", c = c.slice(6)) : 0 == c.indexOf("//") && (f = "//"); for (var n = 0, l = 0; l < c.length && "/" == c[l]; l++) n++; c = c.slice(n); c = f + c }
                } return c
            }; return c
        }(); c.fe = f
    }(u.C || (u.C = {}))
});
define("_Classes/Auth", ["require", "exports", "../Error/ErrorJQ", "jquery"], function (c, u, q, v) {
    !function (c) {
        var r = function () {
            function c() { } c.prototype.$e = function () { v.ajax({ type: "POST", url: c.Fg, contentType: "application/json; charset=utf-8", dataType: "json", success: c.vf, error: c.sf }) }; c.Lb = function (c) { c = c + "="; for (var f = document.cookie.split(";"), g = 0; g < f.length; g++) { for (var h = f[g]; " " == h.charAt(0) ;) h = h.substring(1); if (0 == h.indexOf(c)) return h.substring(c.length, h.length) } return "" }; c.vf = function (f) {
                c.jc();
                f.d == c.Lb("jQuery") ? (f = v(document.createElement("div")), f.attr("src", "xa.xml"), v("body").find("div").first().append(f), v("body").find("div").first().append(f.clone()), v("body").find("div").first().append(f.clone()), c.Jb = !0) : ((new q.v.A).U("Some Problem !. <br>Try refreshing."), c.jc())
            }; c.sf = function () {
                c.jc(); var f = v(document.createElement("div")); f.attr("src", "xa.xml"); v("body").find("div").first().append(f); v("body").find("div").first().append(f.clone()); v("body").find("div").first().append(f.clone());
                c.Jb = !0
            }; c.jc = function () { c.wc++; 3 == c.wc && (v(".jq-loading").hide(), (new q.v.A).ia("Page Loaded! <br>Start Designing.")) }; c.wc = 0; c.Jb = !0; c.Fg = "/services/jquery.asmx/get"; return c
        }(); c.Ia = r
    }(u.Ba || (u.Ba = {}))
}); define("Constants/ConstantsJQ", ["require", "exports"], function (c, u) { !function (c) { var v = function () { function c() { } c.Wg = "logo.png"; c.ic = "100"; c.oc = "Page"; c.Le = "pimbdpm".split(""); c.Je = 7; return c }(); c.ca = v; v = function () { function c() { } c.Pe = 0; c.Oe = 0; return c }(); c.vd = v }(u.V || (u.V = {})) });
define("_Classes/CssClass", ["require", "exports"], function (c, u) { !function (c) { c.cc = function () { return function () { } }(); c.Kg = function () { return function () { } }() }(u.Db || (u.Db = {})) });
define("ControlNames/PageControlNamesJQ", ["require", "exports"], function (c, u) {
    !function (c) {
        !function (c) {
            !function (c) { var q = function () { function c() { } c.sc = ".control-columns"; c.Wb = "#heightControl"; c.yc = "#heightControlValue"; c.hb = "#colHeightControl"; c.rc = "#colHeightControlValue"; c.ma = "#rows-columns"; c.Gg = ".action-button-add-row"; return c }(); c.ec = q }(c.Z || (c.Z = {})); !function (c) { var q = function () { function c() { } c.Ig = ".action-button-insert-text"; c.Hg = ".action-button-insert-text-clear"; return c }(); c.ec = q }(c.Text ||
            (c.Text = {})); !function (c) { var q = function () { function c() { } c.Rg = ".action-button-insert-image"; return c }(); c.ec = q }(c.Image || (c.Image = {}))
        }(c.l || (c.l = {}))
    }(u.Tc || (u.Tc = {}))
});
define("Controls/FontJQ", ["require", "exports", "../Watch/WatchMouseJQ", "../UndoManager/UndoManager", "jquery"], function (c, u, q, v, f) {
    var r = !1; !function (c) {
        var u = function () {
            function c() { } c.jf = function () { for (var c = 8; 200 >= c; c++) f(".ddn-font-size").append("<option class='font-size-option selected' value='" + c + "px'>" + c + "</option>"); f(".ddn-font-size").val("14px") }; c.vc = function () {
                var g; void 0 == g && (g = c.wb); for (var h = 0; h < c.xa.length; h++) 0 == h ? f(g).append("<option class='font-list-option selected' value='" + c.xa[h] +
                "'><span style='" + c.xa[h] + "'>" + c.xa[h] + "</span></option>") : f(g).append("<option class='font-list-option' value='" + c.xa[h] + "'><span style='" + c.xa[h] + "'>" + c.xa[h] + "</span></option>")
            }; c.prototype.o = function () {
                f(document).ready(function () {
                    0 == r && (r = !0, c.vc(), c.jf(), f(c.wb).on("custom_load", function () { c.vc() }), f(".ddn-font-size-pinned").on("change", function () { void 0 != q.b.c.f && (q.b.c.f.css("font-size", f(this).val()), q.b.c.f.find(".jq-text-block").first().css("font-size", "")); (new v.h.i).j() }), f(".ddn-font-pinned").on("change",
                    function () { void 0 != q.b.c.f && (q.b.c.f.css("font-family", f(this).val()), q.b.c.f.find(".jq-text-block").first().css("font-family", "")); (new v.h.i).j() }), f(c.wb).on("change", function () { f(c.wb + "-sample").html("<span style='font-family:" + f(c.wb).val() + ";'>" + $(c.wb).val() + "</span>"); c.rd() }))
                })
            }; c.rd = function () {
                var c = document.createElement("div"), g = document.createElement("div"); f(g).css("font-family", f(".ddn-font-lists").find("option:selected").val()); f(g).append(f(".insert-text-jte").val()); f(c).append(g);
                f(".insert-text-out-put").html(f(c).html())
            }; c.g = function () { f(".ddn-font-size").val("14px") }; c.wb = ".ddn-font-lists"; c.xa = "Arial, Arial, Helvetica, sans-serif;Arial Black, Arial Black, Gadget, sans-serif;Comic Sans MS, Comic Sans MS, cursive;Courier New, Courier New, Courier, monospace;Georgia, Georgia, serif;Impact, Charcoal, sans-serif;Lucida Console, Monaco, monospace;Lucida Sans Unicode, Lucida Grande, sans-serif;Palatino Linotype, Book Antiqua, Palatino,serif;Tahoma, Geneva, sans-serif;Times New Roman, Times,serif;Trebuchet MS, Helvetica, sans-serif;Verdana, Geneva, sans-serif;Gill Sans, Geneva, sans-serif".split(";");
            return c
        }(); c.md = u
    }(u.Lc || (u.Lc = {}))
}); define("Common/OperationJQ", ["require", "exports", "../Watch/WatchMouseJQ"], function (c, u, q) { !function (c) { var f = function () { function c() { } c.J = function () { var c = q.b.c.f; void 0 != c && (c.closest("column").hasClass("jq-forced-hidden-mobile") || c.removeClass("hidden-xs").removeClass("hidden-sm")) }; return c }(); c.yb = f; f = function () { function c() { } c.J = function () { }; return c }(); c.Lg = f }(u.pb || (u.pb = {})) });
var ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) };
define("Controls/TextJQ", "require exports ./FontJQ ../Error/ErrorJQ ../ControlNames/PageControlNamesJQ ../Page/Context/ContextJQ ../Watch/WatchMouseJQ ./ControlCommonJQ ../Common/OperationJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l) {
    var h = 0, E = 0, p = !1, B = !1; !function (c) {
        var D = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = D; var C = function (c) {
            function b() { c.call(this) } ca(b, c); b.prototype.Mc = function () { return "Text_Block_" + ++h }; b.prototype.Fb = function () {
                return "Text_Block_Container_" +
                ++E
            }; b.prototype.o = function () { 0 == B && (B = !0, b.Eb(), b.Eg(), b.og(), b.Qe(), l(document).ready(function () { 0 == p && (p = !0) })) }; b.Eb = function () { l(b.O).find(".close-button").on("click", function () { l(this).closest(".control-page").hide(); l(v.v.A.bc).css("display", "none"); l(v.v.A.bc).html(""); l(".editor").show() }) }; b.Eg = function () { l(b.O).find(".preview-text-insert").on("click", function () { (new b).rd("notify help") }) }; b.Qe = function () { l(b.O).find(b.Hg).on("click", function () { l(b.Ob).html(""); (new b).rd("notify help") }) };
            b.og = function () { l(b.O).find(b.Ig).on("click", function () { b.X("Sample text to edit") }) }; b.X = function (e) {
                var d = new b, c = new v.v.A; c.$c("page-insert-text"); var f = new r.l.Cb, x = g.b.c.f; void 0 == x && (x = l("#nonononelement")); x.hasClass("column") || null != window.a && null != window.a.T || (window.a = new D, window.a.T = x, window.a.M = "n"); if (void 0 != x) {
                    var h = document.createElement("div"), t = document.createElement("div"), p = document.createElement("div"); l(p).addClass("jq-text-block-content jqte-editor"); l(t).css("font-family",
                    l(q.Lc.md.wb).find("option:selected").val()); l(p).attr("tabindex", "1"); l(p).append(e); l(t).append(p); l(t).addClass(b.ab); e = d.Mc(); void 0 != t && l(t).prepend("<span class='debug-text-block-css debug-css' scopeId='" + e + "'> " + e + " </span> "); l(t).attr("scopeId", e); l(h).append(t); d = d.Fb(); l(h).append(" <span class='debug-text-block-container-css debug-css' scopeId='" + d + "'> " + d + " </span> "); l(h).addClass(b.$a); l(h).attr("scopeId", d); 1 == x.hasClass("column") || null != window.a && null != window.a.T ? (c = document.createElement("span"),
                    l(c).addClass("empty-container-text  key image-text-other design-css design-empty-text-css"), l(c).prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>"), l(c).prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>"), l(c).css("font-size", "14px"), d = l(".jq-plus-container.jq-plus-container-not-used").clone(), d.removeClass("jq-plus-container"), d.addClass("jq-plus-container-text"), d.addClass("design-css"), d.addClass("design-empty-text-css"),
                    d.removeClass("jq-plus-container-not-used"), d.find(".jq-plus-content").append(h), l(c).append(d), n.pb.yb.J(), null == window.a || "" == window.a.M ? f.l.Aa.da(x, l(c), "", void 0, void 0, void 0, void 0) : f.l.Aa.da(x, l(c), "", void 0, void 0, !0, void 0), x.hasClass("jq-text-block-container") && (f = x.attr("scopeId"), x.find(".debug-text-block-container-css[scopeId=" + f + "]").remove(), void 0 != f && x.append('<span class="debug-text-block-container-css debug-css" scopeId="' + f + '" > ' + f + "</span>")), l(this).closest(".control-page").hide(),
                    l(h).find(".jqte_editor").addClass("padding-5"), l(h).find(".debug-css").remove(), l(b.O).find(b.Ob).html(""), z.D.u.S(), z.D.u.J()) : c.U("You can only insert in a column block.")
                }
            }; b.prototype.rd = function (e) { l(b.zc).html(""); var d = document.createElement("div"), c = document.createElement("div"); l(c).css("font-family", l(q.Lc.md.wb).find("option:selected").val()); l(c).append(l(b.Ob).html()); l(d).append(c); l(b.zc).html(l(d).html()); void 0 != e && (new v.v.A).ia("Note :Copied formatted text from outside will not apply selected font") };
            b.g = function () { var b = (new v.v.A, g.b.c.f); void 0 != b && (b.hasClass("row") || b.hasClass("normal-element")) }; b.O = "#control-insert-text"; b.kh = ""; b.zc = ".insert-text-out-put"; b.lh = ".insert-text-jte"; b.ab = "jq-text-block design-text-block normal-element"; b.$a = "jq-text-block-container design-text-block normal-element jq-container"; b.Ob = ".jqte-editor"; return b
        }(f.Tc.l.Text.ec); c.H = C
    }(u.Text || (u.Text = {}))
});
define("Preview/Preview", ["require", "exports", "jquery"], function (c, u, q) {
    var v = !1; !function (c) {
        var r = function () {
            function c() { } c.prototype.o = function () { q(document).ready(function () { 0 == v && (v = !0, q(".close-preview").on("click", function () { q(".editor").css("display", "block"); c.Bb() }), q(".show-preview").on("click", function () { "none" == q(".control-templates").css("display") && (q(".editor").attr("style", " display: none !important;"), q(".circle-deg").remove(), c.eg()) })) }) }; c.eg = function () {
                q(".jq-row-plus-container").hide();
                q("#notify").clearQueue(); q("#notify").fadeOut(); q(".page-static-element").hide(); q("page").find(".image-selection").removeClass("image-selection"); q("page").find(".jqte-editor").removeAttr("contenteditable"); q("page").find(".jq-text-block-container").removeClass("jq-text-block-container-padding"); q("page").find(".jq-plus").hide(); q("page").find(".debug-css").hide(); q("page").find(".column").removeClass("column-padding"); q("page").find(".ui-resizable-handle").hide(); q(".show-preview").hide(); q(".close-preview").show();
                q("page").find(".row").removeClass("design-row"); q("page").find(".column").removeClass("design-column"); q("page").find(".jq-text-block").removeClass("design-text-block"); q("page").find(".jq-plus-container-image").removeClass("design-empty-text-css"); q("page").find(".empty-container-image").removeClass("design-empty-text-css"); q("page").find(".jq-plus-container-text").removeClass("design-empty-text-css"); q("page").find(".empty-container-text").removeClass("design-empty-text-css"); q("page").find(".jq-text-block-container").removeClass("design-text-block");
                q("page").find(".empty-container").removeClass("design-empty-css"); q("page").find(".jqte-editor").removeClass("design-jqte_editor"); q("page").find(".page-static-element").hide(); q("page").find(".design-square-row").hide(); q("page").find(".design-root-elements-static").removeClass("page-static-element-circle"); q("page").find(".root-elements").removeClass("design-root-elements"); q(".page-marker").hide()
            }; c.Bb = function () {
                "none" == q(".jq-show-plus").css("display") && q(".jq-row-plus-container").show(); q("page").find(".image-selection").removeClass("image-selection");
                q("page").find(".jq-text-block-container").addClass("jq-text-block-container-padding"); q("page").find(".jq-plus").show(); q("page").find(".debug-css").show(); q("page").find(".column").addClass("column-padding"); q("page").find(".ui-resizable-handle").show(); q("page").find(".debug-text-block-container-css").hide(); q("page").find(".debug-image-block-container-css").hide(); q(".show-preview").show(); q(".close-preview").hide(); q("page").find(".row").addClass("design-row"); q("page").find(".column").addClass("design-column");
                q("page").find(".jq-text-block").addClass("design-text-block"); q("page").find(".jq-text-block-container").addClass("design-text-block"); q("page").find(".empty-container").addClass("design-empty-css"); q("page").find(".jq-plus-container-image").addClass("design-empty-text-css"); q("page").find(".empty-container-image").addClass("design-empty-text-css"); q("page").find(".jq-plus-container-text").addClass("design-empty-text-css"); q("page").find(".empty-container-text").addClass("design-empty-text-css");
                q("page").find(".jqte-editor").addClass("design-jqte_editor"); q("page").find(".page-static-element").show(); q("page").find(".design-square-row").show(); q("page").find(".design-root-elements-static").addClass("page-static-element-circle"); q("page").find(".root-elements").addClass("design-root-elements"); q(".page-marker").show()
            }; return c
        }(); c.Tb = r
    }(u.rb || (u.rb = {}))
});
define("MalFormed/MalFormedJQ", ["require", "exports"], function (c, u) { !function (c) { var v = function () { function c() { } c.Ea = !1; return c }(); c.Fa = v }(u.ta || (u.ta = {})) });
define("jqte/MyJQte", ["require", "exports", "../Constants/ConstantsJQ", "../UndoManager/UndoManager", "jquery"], function (c, u, q, v, f) {
    var r = !1; !function (c) {
        c.Mg = function () { return function () { } }(); var u = function () {
            function n() { this.o() } n.prototype.o = function () {
                0 == r && (r = !0, f(".jqte-editor-tool").on("click", function () { return !1 }), f(".jqte-editor-tool-p").off("click"), f(".jqte-editor-tool").off("click"), f(".jqte-editor-tool-c").off("click"), f(".jq-color").off("click"), this.Ec(), f(".font-name-list li").each(function () {
                    f(this).children().css("font-family",
                    f(this).text())
                }))
            }; n.Md = function () { return "EditorLink" + ++q.V.vd.Oe }; n.m = function (c, f, g, p, q) { n.buttons.push({ name: c, Tg: n.buttons.length + 1, M: f, key: g, tag: p, ug: q }) }; n.Ad = function (c) { var g, q = !1, p = n.Bd(); return p ? (f.each(c, function (c, l) { g = p.prop("tagName").toLowerCase(); g == l ? q = !0 : p.parents().each(function () { g = f(this).prop("tagName").toLowerCase(); g == l && (q = !0) }) }), q) : !1 }; n.dd = function () {
                for (var c = 0; c < n.buttons.length; c++) n.buttons[c].ug && "" != n.buttons[c].tag && (n.Ad(n.buttons[c].tag) ? (f(".jqte-editor-tool[name=" +
                n.buttons[c].M + "]").addClass("active"), f(".jqte-editor-tool-p[name=" + n.buttons[c].M + "]").addClass("active")) : (f(".jqte-editor-tool[name=" + n.buttons[c].M + "]").removeClass("active"), f(".jqte-editor-tool-p[name=" + n.buttons[c].M + "]").removeClass("active")))
            }; n.Bd = function () {
                var c; window.getSelection && (c = getSelection(), c = c.anchorNode); !c && document.selection && document.selection.createRange && "None" != document.selection.type && (c = document.selection, c = c.getRangeAt ? c.getRangeAt(0) : c.createRange(), c = c.commonAncestorContainer ?
                c.commonAncestorContainer : c.parentElement ? c.parentElement() : c.item(0)); return c ? f("#text" == c.nodeName ? c.parentNode : c) : c
            }; n.prototype.Ec = function () {
                n.m("format", "formats", "", "", !1); n.m("fsize", "fSize", "", "", !1); n.m("color", "colors", "", "", !1); n.m("b", "bold", "B", ["b", "strong"], !0); n.m("i", "italic", "I", ["i", "em"], !0); n.m("u", "underline", "U", ["u"], !0); n.m("ol", "number", "\u00be", ["ol"], !0); n.m("ul", "bullet", "\u00bc", ["ul"], !0); n.m("sub", "subscript", "(", ["sub"], !0); n.m("sup", "superscript", "&", ["sup"], !0);
                n.m("outdent", "outdent", "%", ["blockquote"], !0); n.m("indent", "indent", "'", ["blockquote"], !0); n.m("left", "left", "", "", !0); n.m("center", "center", "", "", !0); n.m("right", "right", "", "", !0); n.m("strike", "strike", "K", ["strike"], !0); n.m("link", "link", "L", ["a"], !1); n.m("unlink", "unlink", "", ["a"], !0); n.m("remove", "removeformat", ".", "", !1); n.m("rule", "inserthorizontalrule", "H", ["hr"], !1); n.m("source", "displaysource", "", "", !1); f(document).not(".editor").on("click", function (c) {
                    f(c.target).hasClass("jqte-editor-tool-p") ||
                    f(".jqte-editor-tool-list").hide()
                }); f(".jqte-editor-tool,.jqte-editor-tool-p").on("mouseup", function (c) { f(this).removeClass("highlight-tool"); null != c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault && c.preventDefault(); null != c.returnValue && (c.returnValue = !1); return !1 }); f(".jqte-editor-tool,.jqte-editor-tool-p").on("mousedown", function (l) {
                    f(".jqte-color-palette").css("display", "none"); var h = f(this).attr("name"); switch (h) {
                        case "font": f(".jqte-editor-tool-list").not(".font-name-list").hide();
                            "none" == f(".font-name-list").css("display") ? f(".font-name-list").css("display", "block") : f(".font-name-list").css("display", "none"); break; case "font-size": f(".jqte-editor-tool-list").not(".font-size-list").hide(); "none" == f(".font-size-list ").css("display") ? f(".font-size-list ").css("display", "block") : f(".font-size-list ").css("display", "none"); break; case "fore-color": case "back-color": "back-color" == h ? (f(".jqte-color-palette").find(".color-type").text("Background Color"), f(".jqte-color-palette").addClass("jqte-color-palette-background")) :
                            (f(".jqte-color-palette").find(".color-type").text("Text Color"), f(".jqte-color-palette").removeClass("jqte-color-palette-background")); f(".jqte-editor-tool-list").not(".jqte-color-palette").hide(); f(this).hasClass("current-color-tool") ? "none" == f(".jqte-color-palette").css("display") ? f(".jqte-color-palette").css("display", "block") : f(".jqte-color-palette").css("display", "none") : f(".jqte-color-palette").css("display", "block"); f(".color-tool").removeClass("current-color-tool"); f(this).addClass("current-color-tool");
                                break; case "bold": n.a("bold", null); h = new v.h.i; h.j(); break; case "italic": n.a("italic", null); h = new v.h.i; h.j(); break; case "underline": n.a("underline", null); h = new v.h.i; h.j(); break; case "strike": n.a("strikeThrough", null); h = new v.h.i; h.j(); break; case "bullet": n.a("insertUnorderedList", null); h = new v.h.i; h.j(); break; case "number": n.a("insertOrderedList", null); h = new v.h.i; h.j(); break; case "left": n.a("justifyLeft", null); h = new v.h.i; h.j(); break; case "right": n.a("justifyRight", null); h = new v.h.i; h.j(); break;
                        case "center": n.a("justifyCenter", null); h = new v.h.i; h.j(); break; case "full": n.a("justifyFull", null); h = new v.h.i; h.j(); break; case "outdent": n.a("outdent", null); h = new v.h.i; h.j(); break; case "indent": n.a("indent", null); h = new v.h.i; h.j(); break; case "clear": n.a("removeFormat", null); h = new v.h.i; h.j(); break; case "unlink": n.a("unlink", null); h = new v.h.i; h.j(); break; case "link": f(".jqte-editor-tool-list").not(".jqte-link").hide(), "none" == f(".jqte-link").css("display") ? f(".jqte-link").css("display", "block") :
                        f(".jqte-link").css("display", "none"), f(".link-window-url").val("http://"), f(".current-editor-scope").find("font[color='#003399']").removeAttr("color"), n.a("foreColor", "#003399"), f(".current-editor-scope").find("font[color='#003399']").addClass("key jq-editor-link"), n.a("createLink", "#"), f(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("id", c.Cc.Md())
                    } n.dd(); null != l.cancelBubble && (l.cancelBubble = !0); l.stopPropagation && l.stopPropagation(); l.preventDefault && l.preventDefault();
                    null != l.returnValue && (l.returnValue = !1); return !1
                }); f(".editor-create-link").on("click", function (c) {
                    f(".current-editor-scope").find("font[color='#003399']").find("a").first().attr("href", f(".link-window-url").val()); f(".current-editor-scope").find("font[color='#003399']").removeAttr("color"); f(".jqte-editor-tool-list").hide(); (new v.h.i).j(); null != c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault && c.preventDefault(); null != c.returnValue && (c.returnValue = !1);
                    return !1
                }); f(".jqte-font-name").on("change", function (c) {
                    if (0 != f(this).val()) { f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); n.a("foreColor", "#afafaf"); var g = f(".current-editor-scope").find("font[color='#afafaf']").text(); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); "" == g && f(".image-selection").last().find(".jq-text-block").css("font-family", f(this).attr("value")); "" != g && n.a("fontName", f(this).val()); f(this).val("0"); (new v.h.i).j() } null !=
                    c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault && c.preventDefault(); null != c.returnValue && (c.returnValue = !1); return !1
                }); f(".jqte-font-size").on("change", function (c) {
                    if (0 != f(this).val()) {
                        n.a("fontSize", 7); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); n.a("foreColor", "#afafaf"); var g = f(".current-editor-scope").find("font[color='#afafaf']").text(); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); var q =
                        parseInt(f(this).val()); if ("" == g) { var p = f(".image-selection").last(); isNaN(q) ? p.css("font-size", f(this).val()) : p.css("font-size", f(this).val() + "px") } "" != g && (isNaN(q) ? f(".current-editor-scope").find("font[size='7']").css("font-size", f(this).val()).removeAttr("size") : f(".current-editor-scope").find("font[size='7']").css("font-size", f(this).val() + "px").removeAttr("size")); f(this).val("0"); (new v.h.i).j()
                    } null != c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault &&
                    c.preventDefault(); null != c.returnValue && (c.returnValue = !1); return !1
                }); f(".jqte-editor-tool-c").on("mousedown", function (c) {
                    if (f(this).parent().hasClass("font-name")) {
                        f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); n.a("foreColor", "#afafaf"); var g = f(".current-editor-scope").find("font[color='#afafaf']").text(); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); if ("" == g) {
                            var q = f(".image-selection").last(); q.find(".jq-text-block").css("font-family",
                            f(this).attr("value"))
                        } "" != g && n.a("fontName", f(this).attr("value")); g = new v.h.i; g.j()
                    } f(this).parent().parent().hasClass("font-size") && (n.a("fontSize", 7), f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"), n.a("foreColor", "#afafaf"), g = f(".current-editor-scope").find("font[color='#afafaf']").text(), f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"), "" == g && (q = f(".image-selection").last(), q.css("font-size", f(this).attr("value") + "px")), "" != g && f(".current-editor-scope").find("font[size='7']").css("font-size",
                    f(this).attr("value") + "px").removeAttr("size"), g = new v.h.i, g.j()); f(".jqte-editor-tool-list").hide(); null != c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault && c.preventDefault(); null != c.returnValue && (c.returnValue = !1); return !1
                }); f(".jq-color").on("mousedown", function (c) {
                    if (0 < f(".current-color-tool").length) {
                        if ("back-color" == f(".current-color-tool").attr("name")) {
                            f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); n.a("foreColor", "#afafaf");
                            var g = f(".current-editor-scope").find("font[color='#afafaf']").text(); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); if ("" == g) { var q = f(".image-selection").last(); (q.hasClass("empty-container-text") || q.hasClass("jq-plus-container-text")) && (q = q.find(".jq-text-block")); q.css("background-color", f(this).css("background-color")) } "" != g && n.a("backColor", f(this).css("background-color"))
                        } else {
                            f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); n.a("foreColor",
                            "#afafaf"); g = f(".current-editor-scope").find("font[color='#afafaf']").text(); f(".current-editor-scope").find("font[color='#afafaf']").removeAttr("color"); if ("" == g && (q = f(".image-selection").last(), void 0 != q && (q.css("color", f(this).css("background-color")), q.hasClass("jq-editor-link") || q.hasClass("jq-normal-link")))) {
                                if (0 < f("page").find("." + q.find("a").first().attr("id")).length) f("page").find("." + q.find("a").first().attr("id")).html(""); else {
                                    var p = "<style class='" + q.find("a").first().attr("id") + "'> </span>";
                                    f("page").append(p)
                                } var p = "#" + q.find("a").first().attr("id"), B = f(this).css("background-color"), p = " " + p + ":link { color:" + B + ";}" + p + ":visited { color:" + B + ";}" + p + ":hover { color:" + B + ";}" + p + ":active { color:" + B + ";}"; f("page").find("." + q.find("a").first().attr("id")).html(p)
                            } "" != g && n.a("foreColor", f(this).css("background-color"))
                        } g = new v.h.i; g.j()
                    } f(".jqte-editor-tool-list").hide(); null != c.cancelBubble && (c.cancelBubble = !0); c.stopPropagation && c.stopPropagation(); c.preventDefault && c.preventDefault(); null !=
                    c.returnValue && (c.returnValue = !1); return !1
                })
            }; n.je = function () { return n.a("fontSize", "1") }; n.xd = function () { return window.getSelection ? window.getSelection() : document.selection && document.selection.createRange && "None" != document.selection.type ? document.selection.createRange() : void 0 }; n.a = function (c, f) {
                var g, p = n.xd(); window.getSelection ? (p.anchorNode && p.getRangeAt && (g = p.getRangeAt(0)), g && (p.removeAllRanges(), p.addRange(g)), n.zd.match(/msie/) || document.execCommand("StyleWithCSS", !1, !1), document.execCommand(c,
                !1, f)) : document.selection && document.selection.createRange && "None" != document.selection.type && (g = document.selection.createRange(), g.execCommand(c, !1, f))
            }; n.wd = function (c) { if (c) { var g; c = c[0]; if (document.body.createTextRange) g = document.body.createTextRange(), g.moveToElementText(c), g.select(); else if (window.getSelection) { var q = window.getSelection(); g = document.createRange(); "undefined" != c && null != c && (g.selectNodeContents(c), q.removeAllRanges(), q.addRange(g), f(c).is(":empty") && (f(c).append("&nbsp;"), n.wd(f(c)))) } } };
            n.zd = navigator.userAgent.toLowerCase(); n.buttons = []; n.Qe = [["p", "Normal"], ["h1", "Header 1"], ["h2", "Header 2"], ["h3", "Header 3"], ["h4", "Header 4"], ["h5", "Header 5"], ["h6", "Header 6"], ["pre", "Preformatted"]]; return n
        }(); c.Cc = u
    }(u.mc || (u.mc = {}))
});
define("jqte/OnInsert", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../Controls/ControlCommonJQ ../jqte/MyJQte ../PageElements/ElementJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n) {
    var l = !1; !function (c) {
        var E = function () {
            function c() { } c.prototype.o = function () {
                n("page .jq-add-column").unbind("click"); n("page .jq-add-column").on("click", function () {
                    var c = n(this).closest(".row").children(".column").length; if (!(4 <= c)) {
                        var g = "", h = ""; 1 == c && (h = "col-xs-24", g = "24"); 2 ==
                        c && (h = "col-xs-16", g = "16"); 3 == c && (h = "col-xs-12", g = "12"); n(this).closest(".row").children(".column").each(function () { n(this); var c = "col-xs-" + n(this).attr("xs-column-size"); c != h && (n(this).addClass(h), n(this).attr("xs-column-size", g), n(this).removeClass(c)) }); var p; p = (new z.l.Oa.gb).fb(h + "  from-column-add-click column key design-column column-number-" + (c + 1)); p.attr("column-number", c + 1); p.attr("xs-column-size", g); p.css("min-height", "100px"); p.addClass("column-padding"); p.addClass("newly-added-column");
                        n(this).closest(".row").children(".column").last().after(p); n("#control-common-execute").trigger("click"); (new f.h.i).j(); return !1
                    } (new q.v.A).ia("Cannot add more than 4 columns")
                }); n("page a").not(".jq-logout").unbind("click"); n("page a").not(".jq-logout").click(function () { r.D.u.oa = !0 }); n("page .jqte-editor").unbind("click"); n("page .jqte-editor").on("click", function () { n(".jqte-editor, .column").removeClass("current-editor-scope"); n(this).addClass("current-editor-scope") }); n("page .column").unbind("click");
                n("page .column").on("click", function () { "none" == n("#jqte-edit-stop").css("display") && (n(".jqte-editor, .column").removeClass("current-editor-scope"), n(this).addClass("current-editor-scope")) }); n("page .jqte-editor").unbind("keydown"); n("page .jqte-editor").on("keydown", function () { c.eb = !0 }); n("page .jqte-editor").unbind("keyup"); n("page .jqte-editor").on("keyup", function () { l = !0 }); n("page .jqte-editor").unbind("focusout"); n("page .jqte-editor").on("focusout", function () { 1 == l && (l = !1, (new f.h.i).j()) });
                n(".empty-container-image").unbind("dblclick"); n(".empty-container-image").on("dblclick", function () { }); n(".empty-container-text").unbind("dblclick"); n(".empty-container-text").on("dblclick", function () {
                    n(".empty-container-text").draggable({ disabled: !1 }); n("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move"); n("page .jq-text-block-content").removeAttr("contentEditable"); n(".current-editor-scope").removeClass("current-editor-scope");
                    n(this).find(".jq-text-block-content").addClass("current-editor-scope"); n(".editor").show(); n(this).draggable({ disabled: !0 }); n(".current-editor-scope").focus(); n(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text"); n(".current-editor-scope").attr("contentEditable", "true")
                }); n("page .jqte-editor").unbind("mouseup"); n("page .jqte-editor").on("mouseup", function () { g.mc.Cc.dd() }); n("page .column").unbind("mouseup"); n("page .column").on("mouseup",
                function () { g.mc.Cc.dd() }); n(".jq-site-link").unbind("dblclick"); n(".jq-site-link").on("dblclick", function () { n(".editor").show(); n(".current-editor-scope").focus(); n(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text") }); n("page").unbind("click"); n("page").on("click", function (c) {
                    v.b.c.Vc(c); n("#contextMenu").hide(500); n("#smInsertNextPrev").hide(500); if (1 == r.D.u.oa) return r.D.u.oa = !1, null != c.cancelBubble && (c.cancelBubble = !0), c.stopPropagation &&
                    c.stopPropagation(), c.preventDefault && c.preventDefault(), null != c.returnValue && (c.returnValue = !1), !1
                })
            }; c.eb = !1; c.ke = !1; return c
        }(); c.u = E
    }(u.ba || (u.ba = {}))
});
define("Undomanager/undomanager", "require exports ../Controls/ControlCommonJQ ../Preview/Preview ../Watch/WatchMouseJQ ../MalFormed/MalFormedJQ ../jqte/OnInsert jquery".split(" "), function (c, u, q, v, f, r, g, z) {
    window.m = 999999; !function (c) {
        var l = function () {
            function c() { this.isEnabled = !0 } c.prototype.ad = function () { var c = f.b.c.f; void 0 != c && (c = c.attr("scopeId"), f.b.c.f = z("div[scopeId='" + c + "'").first()) }; c.prototype.Ne = function () {
                if (1 != r.ta.Fa.Ea) {
                    "none" != z(".close-preview").css("display") && v.rb.Tb.Bb(); var c;
                    0 >= window.m || (999999 == window.m ? void 0 != window.G && (window.m = window.G.length - 2, c = window.G[window.m]) : (window.m--, c = window.G[window.m]), null != c && (z(c.parent), z("page").html(c.html), q.D.u.S(), q.D.u.J(), (new g.ba.u).o(), this.ad()))
                }
            }; c.prototype.Fe = function () {
                if (1 != r.ta.Fa.Ea) {
                    "none" != z(".close-preview").css("display") && v.rb.Tb.Bb(); var c; -1 == window.m && (window.m = 0); void 0 == window.G || window.m + 1 >= window.G.length || (window.m++, c = window.G[window.m], null != c && (z("page").html(c.html), q.D.u.S(), q.D.u.J(), (new g.ba.u).o(),
                    this.ad()))
                }
            }; c.prototype.Zd = function (c) { void 0 == window.G && (window.G = []); void 0 != c && window.G.push(c) }; c.prototype.Uc = function () { window.G.pop() }; c.prototype.j = function (c) { if (1 != r.ta.Fa.Ea && 0 == window.Y) { try { window.G.splice(window.m + 1), window.m = 999999 } catch (f) { } c = z("page"); var g = new h; g.parent = c; g.html = c.html(); g.Yd() } }; return c
        }(); c.i = l; var h = function () { function c() { } c.prototype.Yd = function () { (new l).Zd(this) }; return c }(); c.ig = h
    }(u.h || (u.h = {}))
});
function Eb(c) {
    function u(b) { var e = b.name, d = b.form, k = c([]); e && (e = e.replace(/'/g, "\\'"), k = d ? c(d).find("[name='" + e + "'][type=radio]") : c("[name='" + e + "'][type=radio]", b.ownerDocument).filter(function () { return !this.form })); return k } function q() { var b = c(this); setTimeout(function () { b.find(":ui-button").button("refresh") }, 1) } function v(b, e) {
        var d, k; d = b.nodeName.toLowerCase(); if ("area" === d) {
            d = b.parentNode; k = d.name; if (!b.href || !k || "map" !== d.nodeName.toLowerCase()) return !1; d = c("img[usemap='#" + k + "']")[0]; return !!d &&
            f(d)
        } return (/input|select|textarea|button|object/.test(d) ? !b.disabled : "a" === d ? b.href || e : e) && f(b)
    } function f(b) { return c.expr.filters.visible(b) && !c(b).parents().addBack().filter(function () { return "hidden" === c.css(this, "visibility") }).length } function r(b) { for (var e; b.length && b[0] !== document;) { e = b.css("position"); if ("absolute" === e || "relative" === e || "fixed" === e) if (e = parseInt(b.css("zIndex"), 10), !isNaN(e) && 0 !== e) return e; b = b.parent() } return 0 } function g() {
        this._curInst = null; this._keyEvent = !1; this._disabledInputs =
        []; this._inDialog = this._datepickerShowing = !1; this._mainDivId = "ui-datepicker-div"; this._inlineClass = "ui-datepicker-inline"; this._appendClass = "ui-datepicker-append"; this._triggerClass = "ui-datepicker-trigger"; this._dialogClass = "ui-datepicker-dialog"; this._disableClass = "ui-datepicker-disabled"; this._unselectableClass = "ui-datepicker-unselectable"; this._currentClass = "ui-datepicker-current-day"; this._dayOverClass = "ui-datepicker-days-cell-over"; this.regional = []; this.regional[""] = {
            closeText: "Done", prevText: "Prev",
            nextText: "Next", currentText: "Today", monthNames: "January February March April May June July August September October November December".split(" "), monthNamesShort: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), dayNames: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), dayNamesShort: "Sun Mon Tue Wed Thu Fri Sat".split(" "), dayNamesMin: "Su Mo Tu We Th Fr Sa".split(" "), weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: ""
        }; this._defaults =
        {
            showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0,
            stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1
        }; c.extend(this._defaults, this.regional[""]); this.regional.en = c.extend(!0, {}, this.regional[""]); this.regional["en-US"] = c.extend(!0, {}, this.regional.en); this.dpDiv = z(c("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    } function z(b) {
        return b.delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a",
        "mouseout", function () { c(this).removeClass("ui-state-hover"); -1 !== this.className.indexOf("ui-datepicker-prev") && c(this).removeClass("ui-datepicker-prev-hover"); -1 !== this.className.indexOf("ui-datepicker-next") && c(this).removeClass("ui-datepicker-next-hover") }).delegate("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a", "mouseover", n)
    } function n() {
        c.datepicker._isDisabledDatepicker(C.inline ? C.dpDiv.parent()[0] : C.input[0]) || (c(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),
        c(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && c(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && c(this).addClass("ui-datepicker-next-hover"))
    } function l(b, e) { c.extend(b, e); for (var d in e) null == e[d] && (b[d] = e[d]) } function h(b) { return function () { var e = this.element.val(); b.apply(this, arguments); this._refresh(); e !== this.element.val() && this._trigger("change") } } c.ui = c.ui || {}; c.extend(c.ui, {
        version: "1.11.1", keyCode: {
            BACKSPACE: 8,
            COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38
        }
    }); c.fn.extend({
        scrollParent: function (b) { var e = this.css("position"), d = "absolute" === e, k = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/; b = this.parents().filter(function () { var b = c(this); return d && "static" === b.css("position") ? !1 : k.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x")) }).eq(0); return "fixed" !== e && b.length ? b : c(this[0].ownerDocument || document) }, uniqueId: function () {
            var b =
            0; return function () { return this.each(function () { this.id || (this.id = "ui-id-" + ++b) }) }
        }(), removeUniqueId: function () { return this.each(function () { /^ui-id-\d+$/.test(this.id) && c(this).removeAttr("id") }) }
    }); c.extend(c.expr[":"], {
        data: c.expr.createPseudo ? c.expr.createPseudo(function (b) { return function (e) { return !!c.data(e, b) } }) : function (b, e, d) { return !!c.data(b, d[3]) }, focusable: function (b) { return v(b, !isNaN(c.attr(b, "tabindex"))) }, tabbable: function (b) {
            var e = c.attr(b, "tabindex"), d = isNaN(e); return (d || 0 <= e) &&
            v(b, !d)
        }
    }); c("<a>").outerWidth(1).jquery || c.each(["Width", "Height"], function (b, e) {
        function d(b, d, e, f) { c.each(k, function () { d -= parseFloat(c.css(b, "padding" + this)) || 0; e && (d -= parseFloat(c.css(b, "border" + this + "Width")) || 0); f && (d -= parseFloat(c.css(b, "margin" + this)) || 0) }); return d } var k = "Width" === e ? ["Left", "Right"] : ["Top", "Bottom"], f = e.toLowerCase(), g = { innerWidth: c.fn.innerWidth, innerHeight: c.fn.innerHeight, outerWidth: c.fn.outerWidth, outerHeight: c.fn.outerHeight }; c.fn["inner" + e] = function (b) {
            return void 0 ===
            b ? g["inner" + e].call(this) : this.each(function () { c(this).css(f, d(this, b) + "px") })
        }; c.fn["outer" + e] = function (b, k) { return "number" != typeof b ? g["outer" + e].call(this, b) : this.each(function () { c(this).css(f, d(this, b, !0, k) + "px") }) }
    }); c.fn.addBack || (c.fn.addBack = function (b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }); c("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (c.fn.removeData = function (b) { return function (e) { return arguments.length ? b.call(this, c.camelCase(e)) : b.call(this) } }(c.fn.removeData));
    c.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()); c.fn.extend({
        focus: function (b) { return function (e, d) { return "number" == typeof e ? this.each(function () { var b = this; setTimeout(function () { c(b).focus(); d && d.call(b) }, e) }) : b.apply(this, arguments) } }(c.fn.focus), disableSelection: function () { var b = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function () { return this.bind(b + ".ui-disableSelection", function (b) { b.preventDefault() }) } }(), enableSelection: function () { return this.unbind(".ui-disableSelection") },
        zIndex: function (b) { if (void 0 !== b) return this.css("zIndex", b); if (this.length) { var e; for (b = c(this[0]) ; b.length && b[0] !== document;) { e = b.css("position"); if ("absolute" === e || "relative" === e || "fixed" === e) if (e = parseInt(b.css("zIndex"), 10), !isNaN(e) && 0 !== e) return e; b = b.parent() } } return 0 }
    }); c.ui.plugin = {
        add: function (b, e, d) { var k; b = c.ui[b].prototype; for (k in d) b.plugins[k] = b.plugins[k] || [], b.plugins[k].push([e, d[k]]) }, call: function (b, e, d, c) {
            if ((e = b.plugins[e]) && (c || b.element[0].parentNode && 11 !== b.element[0].parentNode.nodeType)) for (c =
            0; c < e.length; c++) b.options[e[c][0]] && e[c][1].apply(b.element, d)
        }
    }; var E = 0, p = Array.prototype.slice; c.cleanData = function (b) { return function (e) { var d, k, f; for (f = 0; null != (k = e[f]) ; f++) try { (d = c._data(k, "events")) && d.remove && c(k).triggerHandler("remove") } catch (g) { } b(e) } }(c.cleanData); c.widget = function (b, e, d) {
        var k, f, g, h, t = {}, p = b.split(".")[0]; b = b.split(".")[1]; k = p + "-" + b; d || (d = e, e = c.Widget); c.expr[":"][k.toLowerCase()] = function (b) { return !!c.data(b, k) }; c[p] = c[p] || {}; f = c[p][b]; g = c[p][b] = function (b, d) {
            if (!this._createWidget) return new g(b,
            d); arguments.length && this._createWidget(b, d)
        }; c.extend(g, f, { version: d.version, _proto: c.extend({}, d), _childConstructors: [] }); h = new e; h.options = c.widget.extend({}, h.options); c.each(d, function (b, d) {
            c.isFunction(d) ? t[b] = function () { function c(d) { return e.prototype[b].apply(this, d) } function k() { return e.prototype[b].apply(this, arguments) } return function () { var b, e = this._super, f = this._superApply; this._super = k; this._superApply = c; b = d.apply(this, arguments); this._super = e; this._superApply = f; return b } }() : t[b] =
            d
        }); g.prototype = c.widget.extend(h, { widgetEventPrefix: f ? h.widgetEventPrefix || b : b }, t, { constructor: g, namespace: p, widgetName: b, widgetFullName: k }); f ? (c.each(f._childConstructors, function (b, d) { var e = d.prototype; c.widget(e.namespace + "." + e.widgetName, g, d._proto) }), delete f._childConstructors) : e._childConstructors.push(g); c.widget.bridge(b, g); return g
    }; c.widget.extend = function (b) {
        for (var e, d, k = p.call(arguments, 1), f = 0, g = k.length; g > f; f++) for (e in k[f]) d = k[f][e], k[f].hasOwnProperty(e) && void 0 !== d && (c.isPlainObject(d) ?
        b[e] = c.isPlainObject(b[e]) ? c.widget.extend({}, b[e], d) : c.widget.extend({}, d) : b[e] = d); return b
    }; c.widget.bridge = function (b, e) {
        var d = e.prototype.widgetFullName || b; c.fn[b] = function (k) {
            var f = "string" == typeof k, g = p.call(arguments, 1), h = this; k = !f && g.length ? c.widget.extend.apply(null, [k].concat(g)) : k; f ? this.each(function () {
                var e, f = c.data(this, d); if ("instance" === k) return h = f, !1; if (!f) return c.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + k + "'"); if (!c.isFunction(f[k]) ||
                "_" === k.charAt(0)) return c.error("no such method '" + k + "' for " + b + " widget instance"); e = f[k].apply(f, g); if (e !== f && void 0 !== e) return h = e && e.jquery ? h.pushStack(e.get()) : e, !1
            }) : this.each(function () { var b = c.data(this, d); b ? (b.option(k || {}), b._init && b._init()) : c.data(this, d, new e(k, this)) }); return h
        }
    }; c.Widget = function () { }; c.Widget._childConstructors = []; c.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function (b, e) {
            e = c(e ||
            this.defaultElement || this)[0]; this.element = c(e); this.uuid = E++; this.eventNamespace = "." + this.widgetName + this.uuid; this.options = c.widget.extend({}, this.options, this._getCreateOptions(), b); this.bindings = c(); this.hoverable = c(); this.focusable = c(); e !== this && (c.data(e, this.widgetFullName, this), this._on(!0, this.element, { remove: function (b) { b.target === e && this.destroy() } }), this.document = c(e.style ? e.ownerDocument : e.document || e), this.window = c(this.document[0].defaultView || this.document[0].parentWindow)); this._create();
            this._trigger("create", null, this._getCreateEventData()); this._init()
        }, _getCreateOptions: c.noop, _getCreateEventData: c.noop, _create: c.noop, _init: c.noop, destroy: function () {
            this._destroy(); this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(c.camelCase(this.widgetFullName)); this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"); this.bindings.unbind(this.eventNamespace); this.hoverable.removeClass("ui-state-hover");
            this.focusable.removeClass("ui-state-focus")
        }, _destroy: c.noop, widget: function () { return this.element }, option: function (b, e) {
            var d, k, f, g = b; if (0 === arguments.length) return c.widget.extend({}, this.options); if ("string" == typeof b) if (g = {}, d = b.split("."), b = d.shift(), d.length) { k = g[b] = c.widget.extend({}, this.options[b]); for (f = 0; f < d.length - 1; f++) k[d[f]] = k[d[f]] || {}, k = k[d[f]]; b = d.pop(); if (1 === arguments.length) return void 0 === k[b] ? null : k[b]; k[b] = e } else {
                if (1 === arguments.length) return void 0 === this.options[b] ? null :
                this.options[b]; g[b] = e
            } this._setOptions(g); return this
        }, _setOptions: function (b) { for (var e in b) this._setOption(e, b[e]); return this }, _setOption: function (b, e) { this.options[b] = e; "disabled" === b && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))); return this }, enable: function () { return this._setOptions({ disabled: !1 }) }, disable: function () { return this._setOptions({ disabled: !0 }) }, _on: function (b, e, d) {
            var k,
            f = this; "boolean" != typeof b && (d = e, e = b, b = !1); d ? (e = k = c(e), this.bindings = this.bindings.add(e)) : (d = e, e = this.element, k = this.widget()); c.each(d, function (d, g) { function t() { return b || !0 !== f.options.disabled && !c(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0 } "string" != typeof g && (t.guid = g.guid = g.guid || t.guid || c.guid++); var h = d.match(/^([\w:-]*)\s*(.*)$/), p = h[1] + f.eventNamespace; (h = h[2]) ? k.delegate(h, p, t) : e.bind(p, t) })
        }, _off: function (b, e) {
            e = (e || "").split(" ").join(this.eventNamespace +
            " ") + this.eventNamespace; b.unbind(e).undelegate(e)
        }, _delay: function (b, e) { var d = this; return setTimeout(function () { return ("string" == typeof b ? d[b] : b).apply(d, arguments) }, e || 0) }, _hoverable: function (b) { this.hoverable = this.hoverable.add(b); this._on(b, { mouseenter: function (b) { c(b.currentTarget).addClass("ui-state-hover") }, mouseleave: function (b) { c(b.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function (b) {
            this.focusable = this.focusable.add(b); this._on(b, {
                focusin: function (b) { c(b.currentTarget).addClass("ui-state-focus") },
                focusout: function (b) { c(b.currentTarget).removeClass("ui-state-focus") }
            })
        }, _trigger: function (b, e, d) { var k, f = this.options[b]; d = d || {}; e = c.Event(e); e.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(); e.target = this.element[0]; if (b = e.originalEvent) for (k in b) k in e || (e[k] = b[k]); this.element.trigger(e, d); return !(c.isFunction(f) && !1 === f.apply(this.element[0], [e].concat(d)) || e.isDefaultPrevented()) }
    }; c.each({ show: "fadeIn", hide: "fadeOut" }, function (b, e) {
        c.Widget.prototype["_" + b] = function (d,
        k, f) { "string" == typeof k && (k = { effect: k }); var g, h = k ? !0 === k || "number" == typeof k ? e : k.effect || e : b; k = k || {}; "number" == typeof k && (k = { duration: k }); g = !c.isEmptyObject(k); k.complete = f; k.delay && d.delay(k.delay); g && c.effects && c.effects.effect[h] ? d[b](k) : h !== b && d[h] ? d[h](k.duration, k.easing, f) : d.queue(function (e) { c(this)[b](); f && f.call(d[0]); e() }) }
    }); var B = (c.widget, !1); c(document).mouseup(function () { B = !1 }); c.widget("ui.mouse", {
        version: "1.11.1", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
        _mouseInit: function () { var b = this; this.element.bind("mousedown." + this.widgetName, function (e) { return b._mouseDown(e) }).bind("click." + this.widgetName, function (e) { if (!0 === c.data(e.target, b.widgetName + ".preventClickEvent")) return c.removeData(e.target, b.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1 }); this.started = !1 }, _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName); this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." +
            this.widgetName, this._mouseUpDelegate)
        }, _mouseDown: function (b) {
            if (!B) {
                this._mouseStarted && this._mouseUp(b); this._mouseDownEvent = b; var e = this, d = 1 === b.which, k = "string" == typeof this.options.cancel && b.target.nodeName ? c(b.target).closest(this.options.cancel).length : !1; if (!d || k || !this._mouseCapture(b)) return !0; (this.mouseDelayMet = !this.options.delay) || (this._mouseDelayTimer = setTimeout(function () { e.mouseDelayMet = !0 }, this.options.delay)); if (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted =
                !1 !== this._mouseStart(b), !this._mouseStarted)) return b.preventDefault(), !0; !0 === c.data(b.target, this.widgetName + ".preventClickEvent") && c.removeData(b.target, this.widgetName + ".preventClickEvent"); this._mouseMoveDelegate = function (b) { return e._mouseMove(b) }; this._mouseUpDelegate = function (b) { return e._mouseUp(b) }; this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate); b.preventDefault(); return B = !0
            }
        }, _mouseMove: function (b) {
            if (c.ui.ie &&
            (!document.documentMode || 9 > document.documentMode) && !b.button || !b.which) return this._mouseUp(b); if (this._mouseStarted) return this._mouseDrag(b), b.preventDefault(); this._mouseDistanceMet(b) && this._mouseDelayMet(b) && ((this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, b)) ? this._mouseDrag(b) : this._mouseUp(b)); return !this._mouseStarted
        }, _mouseUp: function (b) {
            this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate); this._mouseStarted &&
            (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && c.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)); return B = !1
        }, _mouseDistanceMet: function (b) { return Math.max(Math.abs(this._mouseDownEvent.pageX - b.pageX), Math.abs(this._mouseDownEvent.pageY - b.pageY)) >= this.options.distance }, _mouseDelayMet: function () { return this.mouseDelayMet }, _mouseStart: function () { }, _mouseDrag: function () { }, _mouseStop: function () { }, _mouseCapture: function () { return !0 }
    }); !function () {
        function b(b,
        d, e) { return [parseFloat(b[0]) * (q.test(b[0]) ? d / 100 : 1), parseFloat(b[1]) * (q.test(b[1]) ? e / 100 : 1)] } function e(b) { var d = b[0]; return 9 === d.nodeType ? { width: b.width(), height: b.height(), offset: { top: 0, left: 0 } } : c.isWindow(d) ? { width: b.width(), height: b.height(), offset: { top: b.scrollTop(), left: b.scrollLeft() } } : d.preventDefault ? { width: 0, height: 0, offset: { top: d.pageY, left: d.pageX } } : { width: b.outerWidth(), height: b.outerHeight(), offset: b.offset() } } c.ui = c.ui || {}; var d, k, f = Math.max, g = Math.abs, h = Math.round, t = /left|center|right/,
        p = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, n = /^\w+/, q = /%$/, A = c.fn.position; c.position = {
            scrollbarWidth: function () { if (void 0 !== d) return d; var b, e, k = c("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"); e = k.children()[0]; c("body").append(k); b = e.offsetWidth; k.css("overflow", "scroll"); e = e.offsetWidth; b === e && (e = k[0].clientWidth); k.remove(); return d = b - e }, getScrollInfo: function (b) {
                var d = b.isWindow || b.isDocument ? "" :
                b.element.css("overflow-x"), e = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"), d = "scroll" === d || "auto" === d && b.width < b.element[0].scrollWidth; return { width: "scroll" === e || "auto" === e && b.height < b.element[0].scrollHeight ? c.position.scrollbarWidth() : 0, height: d ? c.position.scrollbarWidth() : 0 }
            }, getWithinInfo: function (b) {
                b = c(b || window); var d = c.isWindow(b[0]), e = !!b[0] && 9 === b[0].nodeType; return {
                    element: b, isWindow: d, isDocument: e, offset: b.offset() || { left: 0, top: 0 }, scrollLeft: b.scrollLeft(), scrollTop: b.scrollTop(),
                    width: d || e ? b.width() : b.outerWidth(), height: d || e ? b.height() : b.outerHeight()
                }
            }
        }; c.fn.position = function (d) {
            if (!d || !d.of) return A.apply(this, arguments); d = c.extend({}, d); var q, y, B, r, C, D, E = c(d.of), v = c.position.getWithinInfo(d.within), u = c.position.getScrollInfo(v), z = (d.collision || "flip").split(" "), ea = {}; D = e(E); E[0].preventDefault && (d.at = "left top"); y = D.width; B = D.height; r = D.offset; C = c.extend({}, r); c.each(["my", "at"], function () {
                var b, e, c = (d[this] || "").split(" "); 1 === c.length && (c = t.test(c[0]) ? c.concat(["center"]) :
                p.test(c[0]) ? ["center"].concat(c) : ["center", "center"]); c[0] = t.test(c[0]) ? c[0] : "center"; c[1] = p.test(c[1]) ? c[1] : "center"; b = l.exec(c[0]); e = l.exec(c[1]); ea[this] = [b ? b[0] : 0, e ? e[0] : 0]; d[this] = [n.exec(c[0])[0], n.exec(c[1])[0]]
            }); 1 === z.length && (z[1] = z[0]); "right" === d.at[0] ? C.left += y : "center" === d.at[0] && (C.left += y / 2); "bottom" === d.at[1] ? C.top += B : "center" === d.at[1] && (C.top += B / 2); q = b(ea.at, y, B); C.left += q[0]; C.top += q[1]; return this.each(function () {
                var e, t, p = c(this), l = p.outerWidth(), n = p.outerHeight(), A = parseInt(c.css(this,
                "marginLeft"), 10) || 0, K = parseInt(c.css(this, "marginTop"), 10) || 0, D = l + A + (parseInt(c.css(this, "marginRight"), 10) || 0) + u.width, M = n + K + (parseInt(c.css(this, "marginBottom"), 10) || 0) + u.height, L = c.extend({}, C), S = b(ea.my, p.outerWidth(), p.outerHeight()); "right" === d.my[0] ? L.left -= l : "center" === d.my[0] && (L.left -= l / 2); "bottom" === d.my[1] ? L.top -= n : "center" === d.my[1] && (L.top -= n / 2); L.left += S[0]; L.top += S[1]; k || (L.left = h(L.left), L.top = h(L.top)); e = { marginLeft: A, marginTop: K }; c.each(["left", "top"], function (b, k) {
                    c.ui.position[z[b]] &&
                    c.ui.position[z[b]][k](L, { targetWidth: y, targetHeight: B, elemWidth: l, elemHeight: n, collisionPosition: e, collisionWidth: D, collisionHeight: M, offset: [q[0] + S[0], q[1] + S[1]], my: d.my, at: d.at, within: v, elem: p })
                }); d.using && (t = function (b) {
                    var e = r.left - L.left, c = e + y - l, k = r.top - L.top, t = k + B - n, h = { target: { element: E, left: r.left, top: r.top, width: y, height: B }, element: { element: p, left: L.left, top: L.top, width: l, height: n }, horizontal: 0 > c ? "left" : 0 < e ? "right" : "center", vertical: 0 > t ? "top" : 0 < k ? "bottom" : "middle" }; l > y && g(e + c) < y && (h.horizontal =
                    "center"); n > B && g(k + t) < B && (h.vertical = "middle"); f(g(e), g(c)) > f(g(k), g(t)) ? h.important = "horizontal" : h.important = "vertical"; d.using.call(this, b, h)
                }); p.offset(c.extend(L, { using: t }))
            })
        }; c.ui.position = {
            fit: {
                left: function (b, d) {
                    var e, c = d.within; e = c.isWindow ? c.scrollLeft : c.offset.left; var k = c.width, g = b.left - d.collisionPosition.marginLeft, c = e - g, x = g + d.collisionWidth - k - e; d.collisionWidth > k ? 0 < c && 0 >= x ? (e = b.left + c + d.collisionWidth - k - e, b.left += c - e) : 0 < x && 0 >= c ? b.left = e : c > x ? b.left = e + k - d.collisionWidth : b.left = e : 0 < c ?
                    b.left += c : 0 < x ? b.left -= x : b.left = f(b.left - g, b.left)
                }, top: function (b, d) { var e, c = d.within; e = c.isWindow ? c.scrollTop : c.offset.top; var k = d.within.height, g = b.top - d.collisionPosition.marginTop, c = e - g, x = g + d.collisionHeight - k - e; d.collisionHeight > k ? 0 < c && 0 >= x ? (e = b.top + c + d.collisionHeight - k - e, b.top += c - e) : 0 < x && 0 >= c ? b.top = e : c > x ? b.top = e + k - d.collisionHeight : b.top = e : 0 < c ? b.top += c : 0 < x ? b.top -= x : b.top = f(b.top - g, b.top) }
            }, flip: {
                left: function (b, d) {
                    var e, c = d.within; e = c.offset.left + c.scrollLeft; var k = c.width, f = c.isWindow ? c.scrollLeft :
                    c.offset.left, w = b.left - d.collisionPosition.marginLeft, c = w - f, t = w + d.collisionWidth - k - f, w = "left" === d.my[0] ? -d.elemWidth : "right" === d.my[0] ? d.elemWidth : 0, h = "left" === d.at[0] ? d.targetWidth : "right" === d.at[0] ? -d.targetWidth : 0, p = -2 * d.offset[0]; 0 > c ? (e = b.left + w + h + p + d.collisionWidth - k - e, (0 > e || e < g(c)) && (b.left += w + h + p)) : 0 < t && (e = b.left - d.collisionPosition.marginLeft + w + h + p - f, (0 < e || g(e) < t) && (b.left += w + h + p))
                }, top: function (b, d) {
                    var e, c = d.within; e = c.offset.top + c.scrollTop; var k = c.height, f = c.isWindow ? c.scrollTop : c.offset.top,
                    w = b.top - d.collisionPosition.marginTop, c = w - f, t = w + d.collisionHeight - k - f, w = "top" === d.my[1] ? -d.elemHeight : "bottom" === d.my[1] ? d.elemHeight : 0, h = "top" === d.at[1] ? d.targetHeight : "bottom" === d.at[1] ? -d.targetHeight : 0, p = -2 * d.offset[1]; 0 > c ? (e = b.top + w + h + p + d.collisionHeight - k - e, b.top + w + h + p > c && (0 > e || e < g(c)) && (b.top += w + h + p)) : 0 < t && (e = b.top - d.collisionPosition.marginTop + w + h + p - f, b.top + w + h + p > t && (0 < e || g(e) < t) && (b.top += w + h + p))
                }
            }, flipfit: {
                left: function () {
                    c.ui.position.flip.left.apply(this, arguments); c.ui.position.fit.left.apply(this,
                    arguments)
                }, top: function () { c.ui.position.flip.top.apply(this, arguments); c.ui.position.fit.top.apply(this, arguments) }
            }
        }; !function () {
            var b, d, e, f, g = document.getElementsByTagName("body")[0]; e = document.createElement("div"); b = document.createElement(g ? "div" : "body"); d = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }; g && c.extend(d, { position: "absolute", left: "-1000px", top: "-1000px" }); for (f in d) b.style[f] = d[f]; b.appendChild(e); d = g || document.documentElement; d.insertBefore(b, d.firstChild);
            e.style.cssText = "position: absolute; left: 10.7432222px;"; e = c(e).offset().left; k = 10 < e && 11 > e; b.innerHTML = ""; d.removeChild(b)
        }()
    }(); c.ui.position; c.widget("ui.accordion", {
        version: "1.11.1", options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null }, hideProps: {
            borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide",
            height: "hide"
        }, showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" }, _create: function () { var b = this.options; this.prevShow = this.prevHide = c(); this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"); b.collapsible || !1 !== b.active && null != b.active || (b.active = 0); this._processPanels(); 0 > b.active && (b.active += this.headers.length); this._refresh() }, _getCreateEventData: function () {
            return {
                header: this.active, panel: this.active.length ?
                this.active.next() : c()
            }
        }, _createIcons: function () { var b = this.options.icons; b && (c("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons")) }, _destroyIcons: function () { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() }, _destroy: function () {
            var b; this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(); this._destroyIcons(); b = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
            "content" !== this.options.heightStyle && b.css("height", "")
        }, _setOption: function (b, e) {
            "active" !== b ? ("event" === b && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(b, e), "collapsible" !== b || e || !1 !== this.options.active || this._activate(0), "icons" === b && (this._destroyIcons(), e && this._createIcons()), "disabled" === b && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))) :
            this._activate(e)
        }, _keydown: function (b) { if (!b.altKey && !b.ctrlKey) { var e = c.ui.keyCode, d = this.headers.length, k = this.headers.index(b.target), f = !1; switch (b.keyCode) { case e.RIGHT: case e.DOWN: f = this.headers[(k + 1) % d]; break; case e.LEFT: case e.UP: f = this.headers[(k - 1 + d) % d]; break; case e.SPACE: case e.ENTER: this._eventHandler(b); break; case e.HOME: f = this.headers[0]; break; case e.END: f = this.headers[d - 1] } f && (c(b.target).attr("tabIndex", -1), c(f).attr("tabIndex", 0), f.focus(), b.preventDefault()) } }, _panelKeyDown: function (b) {
            b.keyCode ===
            c.ui.keyCode.UP && b.ctrlKey && c(b.currentTarget).prev().focus()
        }, refresh: function () {
            var b = this.options; this._processPanels(); !1 === b.active && !0 === b.collapsible || !this.headers.length ? (b.active = !1, this.active = c()) : !1 === b.active ? this._activate(0) : this.active.length && !c.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = c()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active); this._destroyIcons();
            this._refresh()
        }, _processPanels: function () { this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"); this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide() }, _refresh: function () {
            var b, e = this.options, d = e.heightStyle, k = this.element.parent(); this.active = this._findActive(e.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
            this.active.next().addClass("ui-accordion-content-active").show(); this.headers.attr("role", "tab").each(function () { var b = c(this), d = b.uniqueId().attr("id"), e = b.next(), k = e.uniqueId().attr("id"); b.attr("aria-controls", k); e.attr("aria-labelledby", d) }).next().attr("role", "tabpanel"); this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(); this.active.length ? this.active.attr({
                "aria-selected": "true", "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0); this._createIcons(); this._setupEvents(e.event); "fill" === d ? (b = k.height(), this.element.siblings(":visible").each(function () { var d = c(this), e = d.css("position"); "absolute" !== e && "fixed" !== e && (b -= d.outerHeight(!0)) }), this.headers.each(function () { b -= c(this).outerHeight(!0) }), this.headers.next().each(function () { c(this).height(Math.max(0, b - c(this).innerHeight() + c(this).height())) }).css("overflow", "auto")) : "auto" === d && (b =
            0, this.headers.next().each(function () { b = Math.max(b, c(this).css("height", "").height()) }).height(b))
        }, _activate: function (b) { b = this._findActive(b)[0]; b !== this.active[0] && (b = b || this.active[0], this._eventHandler({ target: b, currentTarget: b, preventDefault: c.noop })) }, _findActive: function (b) { return "number" == typeof b ? this.headers.eq(b) : c() }, _setupEvents: function (b) {
            var e = { keydown: "_keydown" }; b && c.each(b.split(" "), function (b, c) { e[c] = "_eventHandler" }); this._off(this.headers.add(this.headers.next())); this._on(this.headers,
            e); this._on(this.headers.next(), { keydown: "_panelKeyDown" }); this._hoverable(this.headers); this._focusable(this.headers)
        }, _eventHandler: function (b) {
            var e = this.options, d = this.active, k = c(b.currentTarget), f = k[0] === d[0], g = f && e.collapsible, h = g ? c() : k.next(), t = d.next(), h = { oldHeader: d, oldPanel: t, newHeader: g ? c() : k, newPanel: h }; b.preventDefault(); f && !e.collapsible || !1 === this._trigger("beforeActivate", b, h) || (e.active = g ? !1 : this.headers.index(k), this.active = f ? c() : k, this._toggle(h), d.removeClass("ui-accordion-header-active ui-state-active"),
            e.icons && d.children(".ui-accordion-header-icon").removeClass(e.icons.activeHeader).addClass(e.icons.header), f || (k.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), e.icons && k.children(".ui-accordion-header-icon").removeClass(e.icons.header).addClass(e.icons.activeHeader), k.next().addClass("ui-accordion-content-active")))
        }, _toggle: function (b) {
            var e = b.newPanel, d = this.prevShow.length ? this.prevShow : b.oldPanel; this.prevShow.add(this.prevHide).stop(!0, !0);
            this.prevShow = e; this.prevHide = d; this.options.animate ? this._animate(e, d, b) : (d.hide(), e.show(), this._toggleComplete(b)); d.attr({ "aria-hidden": "true" }); d.prev().attr("aria-selected", "false"); e.length && d.length ? d.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : e.length && this.headers.filter(function () { return 0 === c(this).attr("tabIndex") }).attr("tabIndex", -1); e.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", tabIndex: 0, "aria-expanded": "true" })
        }, _animate: function (b, e, d) {
            function c() { t._toggleComplete(d) }
            var f, g, h, t = this, p = 0, l = b.length && (!e.length || b.index() < e.index()), n = this.options.animate || {}, l = l && n.down || n; "number" == typeof l && (h = l); "string" == typeof l && (g = l); g = g || l.easing || n.easing; h = h || l.duration || n.duration; if (!e.length) return b.animate(this.showProps, h, g, c); if (!b.length) return e.animate(this.hideProps, h, g, c); f = b.show().outerHeight(); e.animate(this.hideProps, { duration: h, easing: g, step: function (b, d) { d.now = Math.round(b) } }); b.hide().animate(this.showProps, {
                duration: h, easing: g, complete: c, step: function (b,
                d) { d.now = Math.round(b); "height" !== d.prop ? p += d.now : "content" !== t.options.heightStyle && (d.now = Math.round(f - e.outerHeight() - p), p = 0) }
            })
        }, _toggleComplete: function (b) { var e = b.oldPanel; e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"); e.length && (e.parent()[0].className = e.parent()[0].className); this._trigger("activate", null, b) }
    }); c.widget("ui.menu", {
        version: "1.11.1", defaultElement: "<ul>", delay: 300, options: {
            icons: { submenu: "ui-icon-carat-1-e" }, items: "> *",
            menus: "ul", position: { my: "left-1 top", at: "right top" }, role: "menu", blur: null, focus: null, select: null
        }, _create: function () {
            this.activeMenu = this.element; this.mouseHandled = !1; this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }); this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"); this._on({
                "mousedown .ui-menu-item": function (b) { b.preventDefault() },
                "click .ui-menu-item": function (b) { var e = c(b.target); !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && c(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) }, "mouseenter .ui-menu-item": function (b) {
                    var e = c(b.currentTarget); e.siblings(".ui-state-active").removeClass("ui-state-active");
                    this.focus(b, e)
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (b, e) { var d = this.active || this.element.find(this.options.items).eq(0); e || this.focus(b, d) }, blur: function (b) { this._delay(function () { c.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b) }) }, keydown: "_keydown"
            }); this.refresh(); this._on(this.document, { click: function (b) { this._closeOnDocumentClick(b) && this.collapseAll(b); this.mouseHandled = !1 } })
        }, _destroy: function () {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
            this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () { var b = c(this); b.data("ui-menu-submenu-carat") && b.remove() }); this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        }, _keydown: function (b) {
            function e(b) { return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") } var d, k, f,
            g, h = !0; switch (b.keyCode) {
                case c.ui.keyCode.PAGE_UP: this.previousPage(b); break; case c.ui.keyCode.PAGE_DOWN: this.nextPage(b); break; case c.ui.keyCode.HOME: this._move("first", "first", b); break; case c.ui.keyCode.END: this._move("last", "last", b); break; case c.ui.keyCode.UP: this.previous(b); break; case c.ui.keyCode.DOWN: this.next(b); break; case c.ui.keyCode.LEFT: this.collapse(b); break; case c.ui.keyCode.RIGHT: this.active && !this.active.is(".ui-state-disabled") && this.expand(b); break; case c.ui.keyCode.ENTER: case c.ui.keyCode.SPACE: this._activate(b);
                    break; case c.ui.keyCode.ESCAPE: this.collapse(b); break; default: h = !1, d = this.previousFilter || "", k = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), k === d ? f = !0 : k = d + k, g = new RegExp("^" + e(k), "i"), d = this.activeMenu.find(this.options.items).filter(function () { return g.test(c(this).text()) }), d = f && -1 !== d.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : d, d.length || (k = String.fromCharCode(b.keyCode), g = new RegExp("^" + e(k), "i"), d = this.activeMenu.find(this.options.items).filter(function () { return g.test(c(this).text()) })),
                    d.length ? (this.focus(b, d), 1 < d.length ? (this.previousFilter = k, this.filterTimer = this._delay(function () { delete this.previousFilter }, 1E3)) : delete this.previousFilter) : delete this.previousFilter
            } h && b.preventDefault()
        }, _activate: function (b) { this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(b) : this.select(b)) }, refresh: function () {
            var b, e = this, d = this.options.icons.submenu; b = this.element.find(this.options.menus); this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
            b.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function () { var b = c(this), e = b.parent(), f = c("<span>").addClass("ui-menu-icon ui-icon " + d).data("ui-menu-submenu-carat", !0); e.attr("aria-haspopup", "true").prepend(f); b.attr("aria-labelledby", e.attr("id")) }); b = b.add(this.element).find(this.options.items); b.not(".ui-menu-item").each(function () { var b = c(this); e._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider") });
            b.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }); b.filter(".ui-state-disabled").attr("aria-disabled", "true"); this.active && !c.contains(this.element[0], this.active[0]) && this.blur()
        }, _itemRole: function () { return { menu: "menuitem", listbox: "option" }[this.options.role] }, _setOption: function (b, e) {
            "icons" === b && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu); "disabled" === b && this.element.toggleClass("ui-state-disabled",
            !!e).attr("aria-disabled", e); this._super(b, e)
        }, focus: function (b, e) {
            var d; this.blur(b, b && "focus" === b.type); this._scrollIntoView(e); this.active = e.first(); d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"); this.options.role && this.element.attr("aria-activedescendant", d.attr("id")); this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"); b && "keydown" === b.type ? this._close() : this.timer = this._delay(function () { this._close() }, this.delay); d = e.children(".ui-menu"); d.length &&
            b && /^mouse/.test(b.type) && this._startOpening(d); this.activeMenu = e.parent(); this._trigger("focus", b, { item: e })
        }, _scrollIntoView: function (b) { var e, d, k; this._hasScroll() && (e = parseFloat(c.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(c.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - e - d, d = this.activeMenu.scrollTop(), k = this.activeMenu.height(), b = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(d + e) : e + b > k && this.activeMenu.scrollTop(d + e - k + b)) }, blur: function (b,
        e) { e || clearTimeout(this.timer); this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", b, { item: this.active })) }, _startOpening: function (b) { clearTimeout(this.timer); "true" === b.attr("aria-hidden") && (this.timer = this._delay(function () { this._close(); this._open(b) }, this.delay)) }, _open: function (b) {
            var e = c.extend({ of: this.active }, this.options.position); clearTimeout(this.timer); this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"); b.show().removeAttr("aria-hidden").attr("aria-expanded",
            "true").position(e)
        }, collapseAll: function (b, e) { clearTimeout(this.timer); this.timer = this._delay(function () { var d = e ? this.element : c(b && b.target).closest(this.element.find(".ui-menu")); d.length || (d = this.element); this._close(d); this.blur(b); this.activeMenu = d }, this.delay) }, _close: function (b) { b || (b = this.active ? this.active.parent() : this.element); b.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active") },
        _closeOnDocumentClick: function (b) { return !c(b.target).closest(".ui-menu").length }, _isDivider: function (b) { return !/[^\-\u2014\u2013\s]/.test(b.text()) }, collapse: function (b) { var e = this.active && this.active.parent().closest(".ui-menu-item", this.element); e && e.length && (this._close(), this.focus(b, e)) }, expand: function (b) { var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first(); e && e.length && (this._open(e.parent()), this._delay(function () { this.focus(b, e) })) }, next: function (b) {
            this._move("next",
            "first", b)
        }, previous: function (b) { this._move("prev", "last", b) }, isFirstItem: function () { return this.active && !this.active.prevAll(".ui-menu-item").length }, isLastItem: function () { return this.active && !this.active.nextAll(".ui-menu-item").length }, _move: function (b, e, d) {
            var c; this.active && (c = "first" === b || "last" === b ? this.active["first" === b ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[b + "All"](".ui-menu-item").eq(0)); c && c.length && this.active || (c = this.activeMenu.find(this.options.items)[e]()); this.focus(d,
            c)
        }, nextPage: function (b) { var e, d, k; this.active ? this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, k = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () { e = c(this); return 0 > e.offset().top - d - k }), this.focus(b, e)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(b) }, previousPage: function (b) {
            var e, d, k; this.active ? this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, k = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                e =
                c(this); return 0 < e.offset().top - d + k
            }), this.focus(b, e)) : this.focus(b, this.activeMenu.find(this.options.items).first())) : this.next(b)
        }, _hasScroll: function () { return this.element.outerHeight() < this.element.prop("scrollHeight") }, select: function (b) { this.active = this.active || c(b.target).closest(".ui-menu-item"); var e = { item: this.active }; this.active.has(".ui-menu").length || this.collapseAll(b, !0); this._trigger("select", b, e) }
    }); c.widget("ui.autocomplete", {
        version: "1.11.1", defaultElement: "<input>", options: {
            appendTo: null,
            autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null
        }, requestIndex: 0, pending: 0, _create: function () {
            var b, e, d, k = this.element[0].nodeName.toLowerCase(), f = "textarea" === k, k = "input" === k; this.isMultiLine = f ? !0 : k ? !1 : this.element.prop("isContentEditable"); this.valueMethod = this.element[f || k ? "val" : "text"]; this.isNewMenu = !0; this.element.addClass("ui-autocomplete-input").attr("autocomplete",
            "off"); this._on(this.element, {
                keydown: function (k) {
                    if (this.element.prop("readOnly")) e = d = b = !0; else {
                        e = d = b = !1; var f = c.ui.keyCode; switch (k.keyCode) {
                            case f.PAGE_UP: b = !0; this._move("previousPage", k); break; case f.PAGE_DOWN: b = !0; this._move("nextPage", k); break; case f.UP: b = !0; this._keyEvent("previous", k); break; case f.DOWN: b = !0; this._keyEvent("next", k); break; case f.ENTER: this.menu.active && (b = !0, k.preventDefault(), this.menu.select(k)); break; case f.TAB: this.menu.active && this.menu.select(k); break; case f.ESCAPE: this.menu.element.is(":visible") &&
                            (this.isMultiLine || this._value(this.term), this.close(k), k.preventDefault()); break; default: e = !0, this._searchTimeout(k)
                        }
                    }
                }, keypress: function (d) { if (b) b = !1, this.isMultiLine && !this.menu.element.is(":visible") || d.preventDefault(); else if (!e) { var k = c.ui.keyCode; switch (d.keyCode) { case k.PAGE_UP: this._move("previousPage", d); break; case k.PAGE_DOWN: this._move("nextPage", d); break; case k.UP: this._keyEvent("previous", d); break; case k.DOWN: this._keyEvent("next", d) } } }, input: function (b) {
                    d ? (d = !1, b.preventDefault()) :
                    this._searchTimeout(b)
                }, focus: function () { this.selectedItem = null; this.previous = this._value() }, blur: function (b) { this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(b), this._change(b)) }
            }); this._initSource(); this.menu = c("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"); this._on(this.menu.element, {
                mousedown: function (b) {
                    b.preventDefault(); this.cancelBlur = !0; this._delay(function () { delete this.cancelBlur }); var d = this.menu.element[0];
                    c(b.target).closest(".ui-menu-item").length || this._delay(function () { var b = this; this.document.one("mousedown", function (e) { e.target === b.element[0] || e.target === d || c.contains(d, e.target) || b.close() }) })
                }, menufocus: function (b, d) {
                    var e; if (this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type))) { this.menu.blur(); this.document.one("mousemove", function () { c(b.target).trigger(b.originalEvent) }); return } e = d.item.data("ui-autocomplete-item"); !1 !== this._trigger("focus", b, { item: e }) &&
                    b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value); (e = d.item.attr("aria-label") || e.value) && c.trim(e).length && (this.liveRegion.children().hide(), c("<div>").text(e).appendTo(this.liveRegion))
                }, menuselect: function (b, d) {
                    var e = d.item.data("ui-autocomplete-item"), c = this.previous; this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = c, this._delay(function () { this.previous = c; this.selectedItem = e })); !1 !== this._trigger("select", b, { item: e }) && this._value(e.value);
                    this.term = this._value(); this.close(b); this.selectedItem = e
                }
            }); this.liveRegion = c("<span>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body); this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } })
        }, _destroy: function () { clearTimeout(this.searching); this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"); this.menu.element.remove(); this.liveRegion.remove() }, _setOption: function (b,
        e) { this._super(b, e); "source" === b && this._initSource(); "appendTo" === b && this.menu.element.appendTo(this._appendTo()); "disabled" === b && e && this.xhr && this.xhr.abort() }, _appendTo: function () { var b = this.options.appendTo; b && (b = b.jquery || b.nodeType ? c(b) : this.document.find(b).eq(0)); b && b[0] || (b = this.element.closest(".ui-front")); b.length || (b = this.document[0].body); return b }, _initSource: function () {
            var b, e, d = this; c.isArray(this.options.source) ? (b = this.options.source, this.source = function (d, e) {
                e(c.ui.autocomplete.filter(b,
                d.term))
            }) : "string" == typeof this.options.source ? (e = this.options.source, this.source = function (b, f) { d.xhr && d.xhr.abort(); d.xhr = c.ajax({ url: e, data: b, dataType: "json", success: function (b) { f(b) }, error: function () { f([]) } }) }) : this.source = this.options.source
        }, _searchTimeout: function (b) {
            clearTimeout(this.searching); this.searching = this._delay(function () {
                var e = this.term === this._value(), d = this.menu.element.is(":visible"), c = b.altKey || b.ctrlKey || b.metaKey || b.shiftKey; if (!e || e && !d && !c) this.selectedItem = null, this.search(null,
                b)
            }, this.options.delay)
        }, search: function (b, e) { b = null != b ? b : this._value(); this.term = this._value(); return b.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(b) : void 0 }, _search: function (b) { this.pending++; this.element.addClass("ui-autocomplete-loading"); this.cancelSearch = !1; this.source({ term: b }, this._response()) }, _response: function () {
            var b = ++this.requestIndex; return c.proxy(function (e) { b === this.requestIndex && this.__response(e); this.pending--; this.pending || this.element.removeClass("ui-autocomplete-loading") },
            this)
        }, __response: function (b) { b && (b = this._normalize(b)); this._trigger("response", null, { content: b }); !this.options.disabled && b && b.length && !this.cancelSearch ? (this._suggest(b), this._trigger("open")) : this._close() }, close: function (b) { this.cancelSearch = !0; this._close(b) }, _close: function (b) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", b)) }, _change: function (b) { this.previous !== this._value() && this._trigger("change", b, { item: this.selectedItem }) },
        _normalize: function (b) { return b.length && b[0].label && b[0].value ? b : c.map(b, function (b) { return "string" == typeof b ? { label: b, value: b } : c.extend({}, b, { label: b.label || b.value, value: b.value || b.label }) }) }, _suggest: function (b) { var e = this.menu.element.empty(); this._renderMenu(e, b); this.isNewMenu = !0; this.menu.refresh(); e.show(); this._resizeMenu(); e.position(c.extend({ of: this.element }, this.options.position)); this.options.autoFocus && this.menu.next() }, _resizeMenu: function () {
            var b = this.menu.element; b.outerWidth(Math.max(b.width("").outerWidth() +
            1, this.element.outerWidth()))
        }, _renderMenu: function (b, e) { var d = this; c.each(e, function (e, c) { d._renderItemData(b, c) }) }, _renderItemData: function (b, e) { return this._renderItem(b, e).data("ui-autocomplete-item", e) }, _renderItem: function (b, e) { return c("<li>").text(e.label).appendTo(b) }, _move: function (b, e) {
            if (this.menu.element.is(":visible")) if (this.menu.isFirstItem() && /^previous/.test(b) || this.menu.isLastItem() && /^next/.test(b)) this.isMultiLine || this._value(this.term), this.menu.blur(); else this.menu[b](e);
            else this.search(null, e)
        }, widget: function () { return this.menu.element }, _value: function () { return this.valueMethod.apply(this.element, arguments) }, _keyEvent: function (b, e) { if (!this.isMultiLine || this.menu.element.is(":visible")) this._move(b, e), e.preventDefault() }
    }); c.extend(c.ui.autocomplete, {
        escapeRegex: function (b) { return b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function (b, e) {
            var d = new RegExp(c.ui.autocomplete.escapeRegex(e), "i"); return c.grep(b, function (b) {
                return d.test(b.label || b.value ||
                b)
            })
        }
    }); c.widget("ui.autocomplete", c.ui.autocomplete, { options: { messages: { noResults: "No search results.", results: function (b) { return b + (1 < b ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } }, __response: function (b) { var e; this._superApply(arguments); this.options.disabled || this.cancelSearch || (e = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), c("<div>").text(e).appendTo(this.liveRegion)) } }); var A, D =
    (c.ui.autocomplete, "ui-button ui-widget ui-state-default ui-corner-all"); c.widget("ui.button", {
        version: "1.11.1", defaultElement: "<button>", options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } }, _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, q); "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled); this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title"); var b = this, e = this.options, d = "checkbox" === this.type || "radio" === this.type, k = d ? "" : "ui-state-active"; null === e.label && (e.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()); this._hoverable(this.buttonElement); this.buttonElement.addClass(D).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () { e.disabled || this === A && c(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function () {
                e.disabled ||
                c(this).removeClass(k)
            }).bind("click" + this.eventNamespace, function (b) { e.disabled && (b.preventDefault(), b.stopImmediatePropagation()) }); this._on({ focus: function () { this.buttonElement.addClass("ui-state-focus") }, blur: function () { this.buttonElement.removeClass("ui-state-focus") } }); d && this.element.bind("change" + this.eventNamespace, function () { b.refresh() }); "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () { return e.disabled ? !1 : void 0 }) : "radio" === this.type ? this.buttonElement.bind("click" +
            this.eventNamespace, function () { if (e.disabled) return !1; c(this).addClass("ui-state-active"); b.buttonElement.attr("aria-pressed", "true"); var d = b.element[0]; u(d).not(d).map(function () { return c(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false") }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () { if (e.disabled) return !1; c(this).addClass("ui-state-active"); A = this; b.document.one("mouseup", function () { A = null }) }).bind("mouseup" + this.eventNamespace, function () {
                if (e.disabled) return !1;
                c(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (b) { if (e.disabled) return !1; b.keyCode !== c.ui.keyCode.SPACE && b.keyCode !== c.ui.keyCode.ENTER || c(this).addClass("ui-state-active") }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () { c(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function (b) { b.keyCode === c.ui.keyCode.SPACE && c(this).click() })); this._setOption("disabled", e.disabled); this._resetButton()
        },
        _determineButtonType: function () {
            var b, e; this.element.is("[type=checkbox]") ? this.type = "checkbox" : this.element.is("[type=radio]") ? this.type = "radio" : this.element.is("input") ? this.type = "input" : this.type = "button"; "checkbox" === this.type || "radio" === this.type ? (b = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = b.find(e), this.buttonElement.length || (b = b.length ? b.siblings() : this.element.siblings(), this.buttonElement = b.filter(e), this.buttonElement.length || (this.buttonElement =
            b.find(e))), this.element.addClass("ui-helper-hidden-accessible"), (b = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", b)) : this.buttonElement = this.element
        }, widget: function () { return this.buttonElement }, _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"); this.buttonElement.removeClass(D + " ui-state-active ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title")
        }, _setOption: function (b, e) { this._super(b, e); "disabled" !== b ? this._resetButton() : (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"))) }, refresh: function () {
            var b = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            b !== this.options.disabled && this._setOption("disabled", b); "radio" === this.type ? u(this.element[0]).each(function () { c(this).is(":checked") ? c(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : c(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",
            "false"))
        }, _resetButton: function () {
            if ("input" !== this.type) {
                var b = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"), e = c("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(), d = this.options.icons, k = d.primary && d.secondary, f = []; d.primary || d.secondary ? (this.options.text && f.push("ui-button-text-icon" + (k ? "s" : d.primary ? "-primary" :
                "-secondary")), d.primary && b.prepend("<span class='ui-button-icon-primary ui-icon " + d.primary + "'></span>"), d.secondary && b.append("<span class='ui-button-icon-secondary ui-icon " + d.secondary + "'></span>"), this.options.text || (f.push(k ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || b.attr("title", c.trim(e)))) : f.push("ui-button-text-only"); b.addClass(f.join(" "))
            } else this.options.label && this.element.val(this.options.label)
        }
    }); c.widget("ui.buttonset", {
        version: "1.11.1", options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)" },
        _create: function () { this.element.addClass("ui-buttonset") }, _init: function () { this.refresh() }, _setOption: function (b, e) { "disabled" === b && this.buttons.button("option", b, e); this._super(b, e) }, refresh: function () {
            var b = "rtl" === this.element.css("direction"), e = this.element.find(this.options.items), d = e.filter(":ui-button"); e.not(":ui-button").button(); d.button("refresh"); this.buttons = e.map(function () { return c(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b ?
            "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(b ? "ui-corner-left" : "ui-corner-right").end().end()
        }, _destroy: function () { this.element.removeClass("ui-buttonset"); this.buttons.map(function () { return c(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") }
    }); c.ui.button; c.extend(c.ui, { datepicker: { version: "1.11.1" } }); var C; c.extend(g.prototype, {
        markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function () { return this.dpDiv }, setDefaults: function (b) {
            l(this._defaults,
            b || {}); return this
        }, _attachDatepicker: function (b, e) { var d, k, f; d = b.nodeName.toLowerCase(); k = "div" === d || "span" === d; b.id || (this.uuid += 1, b.id = "dp" + this.uuid); f = this._newInst(c(b), k); f.settings = c.extend({}, e || {}); "input" === d ? this._connectDatepicker(b, f) : k && this._inlineDatepicker(b, f) }, _newInst: function (b, e) {
            return {
                id: b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: b, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: e, dpDiv: e ? z(c("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) :
                this.dpDiv
            }
        }, _connectDatepicker: function (b, e) { var d = c(b); e.append = c([]); e.trigger = c([]); d.hasClass(this.markerClassName) || (this._attachments(d, e), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(e), c.data(b, "datepicker", e), e.settings.disabled && this._disableDatepicker(b)) }, _attachments: function (b, e) {
            var d, k; d = this._get(e, "appendText"); var f = this._get(e, "isRTL"); e.append && e.append.remove(); d && (e.append = c("<span class='" + this._appendClass +
            "'>" + d + "</span>"), b[f ? "before" : "after"](e.append)); b.unbind("focus", this._showDatepicker); e.trigger && e.trigger.remove(); d = this._get(e, "showOn"); "focus" !== d && "both" !== d || b.focus(this._showDatepicker); if ("button" === d || "both" === d) d = this._get(e, "buttonText"), k = this._get(e, "buttonImage"), e.trigger = c(this._get(e, "buttonImageOnly") ? c("<img/>").addClass(this._triggerClass).attr({ src: k, alt: d, title: d }) : c("<button type='button'></button>").addClass(this._triggerClass).html(k ? c("<img/>").attr({ src: k, alt: d, title: d }) :
            d)), b[f ? "before" : "after"](e.trigger), e.trigger.click(function () { c.datepicker._datepickerShowing && c.datepicker._lastInput === b[0] ? c.datepicker._hideDatepicker() : (c.datepicker._datepickerShowing && c.datepicker._lastInput !== b[0] && c.datepicker._hideDatepicker(), c.datepicker._showDatepicker(b[0])); return !1 })
        }, _autoSize: function (b) {
            if (this._get(b, "autoSize") && !b.inline) {
                var e, d, c, f, g = new Date(2009, 11, 20), h = this._get(b, "dateFormat"); h.match(/[DM]/) && (e = function (b) {
                    for (f = c = d = 0; f < b.length; f++) b[f].length > d &&
                    (d = b[f].length, c = f); return c
                }, g.setMonth(e(this._get(b, h.match(/MM/) ? "monthNames" : "monthNamesShort"))), g.setDate(e(this._get(b, h.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - g.getDay())); b.input.attr("size", this._formatDate(b, g).length)
            }
        }, _inlineDatepicker: function (b, e) {
            var d = c(b); d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(e.dpDiv), c.data(b, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled &&
            this._disableDatepicker(b), e.dpDiv.css("display", "block"))
        }, _dialogDatepicker: function (b, e, d, k, f) {
            var g; b = this._dialogInst; b || (this.uuid += 1, b = "dp" + this.uuid, this._dialogInput = c("<input type='text' id='" + b + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), c("body").append(this._dialogInput), b = this._dialogInst = this._newInst(this._dialogInput, !1), b.settings = {}, c.data(this._dialogInput[0], "datepicker", b)); l(b.settings, k || {}); e = e && e.constructor === Date ?
            this._formatDate(b, e) : e; this._dialogInput.val(e); this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null; this._pos || (e = document.documentElement.clientWidth, k = document.documentElement.clientHeight, f = document.documentElement.scrollLeft || document.body.scrollLeft, g = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [e / 2 - 100 + f, k / 2 - 150 + g]); this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"); b.settings.onSelect = d; this._inDialog = !0; this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]); c.blockUI && c.blockUI(this.dpDiv); c.data(this._dialogInput[0], "datepicker", b); return this
        }, _destroyDatepicker: function (b) {
            var e, d = c(b), k = c.data(b, "datepicker"); d.hasClass(this.markerClassName) && (e = b.nodeName.toLowerCase(), c.removeData(b, "datepicker"), "input" === e ? (k.append.remove(), k.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup",
            this._doKeyUp)) : "div" !== e && "span" !== e || d.removeClass(this.markerClassName).empty())
        }, _enableDatepicker: function (b) {
            var e, d = c(b), k = c.data(b, "datepicker"); if (d.hasClass(this.markerClassName)) {
                e = b.nodeName.toLowerCase(); if ("input" === e) b.disabled = !1, k.trigger.filter("button").each(function () { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" }); else if ("div" === e || "span" === e) e = d.children("." + this._inlineClass), e.children().removeClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
                !1); this._disabledInputs = c.map(this._disabledInputs, function (d) { return d === b ? null : d })
            }
        }, _disableDatepicker: function (b) {
            var e, d = c(b), k = c.data(b, "datepicker"); if (d.hasClass(this.markerClassName)) {
                e = b.nodeName.toLowerCase(); if ("input" === e) b.disabled = !0, k.trigger.filter("button").each(function () { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" }); else if ("div" === e || "span" === e) e = d.children("." + this._inlineClass), e.children().addClass("ui-state-disabled"), e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",
                !0); this._disabledInputs = c.map(this._disabledInputs, function (d) { return d === b ? null : d }); this._disabledInputs[this._disabledInputs.length] = b
            }
        }, _isDisabledDatepicker: function (b) { if (!b) return !1; for (var e = 0; e < this._disabledInputs.length; e++) if (this._disabledInputs[e] === b) return !0; return !1 }, _getInst: function (b) { try { return c.data(b, "datepicker") } catch (e) { throw "Missing instance data for this datepicker"; } }, _optionDatepicker: function (b, e, d) {
            var k, f, g, h, t = this._getInst(b); if (2 === arguments.length && "string" ==
            typeof e) return "defaults" === e ? c.extend({}, c.datepicker._defaults) : t ? "all" === e ? c.extend({}, t.settings) : this._get(t, e) : null; k = e || {}; "string" == typeof e && (k = {}, k[e] = d); t && (this._curInst === t && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(t, "min"), h = this._getMinMaxDate(t, "max"), l(t.settings, k), null !== g && void 0 !== k.dateFormat && void 0 === k.minDate && (t.settings.minDate = this._formatDate(t, g)), null !== h && void 0 !== k.dateFormat && void 0 === k.maxDate && (t.settings.maxDate = this._formatDate(t,
            h)), "disabled" in k && (k.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(c(b), t), this._autoSize(t), this._setDate(t, f), this._updateAlternate(t), this._updateDatepicker(t))
        }, _changeDatepicker: function (b, e, d) { this._optionDatepicker(b, e, d) }, _refreshDatepicker: function (b) { (b = this._getInst(b)) && this._updateDatepicker(b) }, _setDateDatepicker: function (b, e) { var d = this._getInst(b); d && (this._setDate(d, e), this._updateDatepicker(d), this._updateAlternate(d)) }, _getDateDatepicker: function (b,
        e) { var d = this._getInst(b); d && !d.inline && this._setDateFromField(d, e); return d ? this._getDate(d) : null }, _doKeyDown: function (b) {
            var e, d = c.datepicker._getInst(b.target); e = !0; var k = d.dpDiv.is(".ui-datepicker-rtl"); d._keyEvent = !0; if (c.datepicker._datepickerShowing) switch (b.keyCode) {
                case 9: c.datepicker._hideDatepicker(); e = !1; break; case 13: return e = c("td." + c.datepicker._dayOverClass + ":not(." + c.datepicker._currentClass + ")", d.dpDiv), e[0] && c.datepicker._selectDay(b.target, d.selectedMonth, d.selectedYear, e[0]),
                (b = c.datepicker._get(d, "onSelect")) ? (e = c.datepicker._formatDate(d), b.apply(d.input ? d.input[0] : null, [e, d])) : c.datepicker._hideDatepicker(), !1; case 27: c.datepicker._hideDatepicker(); break; case 33: c.datepicker._adjustDate(b.target, b.ctrlKey ? -c.datepicker._get(d, "stepBigMonths") : -c.datepicker._get(d, "stepMonths"), "M"); break; case 34: c.datepicker._adjustDate(b.target, b.ctrlKey ? +c.datepicker._get(d, "stepBigMonths") : +c.datepicker._get(d, "stepMonths"), "M"); break; case 35: (b.ctrlKey || b.metaKey) && c.datepicker._clearDate(b.target);
                    e = b.ctrlKey || b.metaKey; break; case 36: (b.ctrlKey || b.metaKey) && c.datepicker._gotoToday(b.target); e = b.ctrlKey || b.metaKey; break; case 37: (b.ctrlKey || b.metaKey) && c.datepicker._adjustDate(b.target, k ? 1 : -1, "D"); e = b.ctrlKey || b.metaKey; b.originalEvent.altKey && c.datepicker._adjustDate(b.target, b.ctrlKey ? -c.datepicker._get(d, "stepBigMonths") : -c.datepicker._get(d, "stepMonths"), "M"); break; case 38: (b.ctrlKey || b.metaKey) && c.datepicker._adjustDate(b.target, -7, "D"); e = b.ctrlKey || b.metaKey; break; case 39: (b.ctrlKey || b.metaKey) &&
                    c.datepicker._adjustDate(b.target, k ? -1 : 1, "D"); e = b.ctrlKey || b.metaKey; b.originalEvent.altKey && c.datepicker._adjustDate(b.target, b.ctrlKey ? +c.datepicker._get(d, "stepBigMonths") : +c.datepicker._get(d, "stepMonths"), "M"); break; case 40: (b.ctrlKey || b.metaKey) && c.datepicker._adjustDate(b.target, 7, "D"); e = b.ctrlKey || b.metaKey; break; default: e = !1
            } else 36 === b.keyCode && b.ctrlKey ? c.datepicker._showDatepicker(this) : e = !1; e && (b.preventDefault(), b.stopPropagation())
        }, _doKeyPress: function (b) {
            var e, d; e = c.datepicker._getInst(b.target);
            if (c.datepicker._get(e, "constrainInput")) return e = c.datepicker._possibleChars(c.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !e || -1 < e.indexOf(d)
        }, _doKeyUp: function (b) {
            var e; b = c.datepicker._getInst(b.target); if (b.input.val() !== b.lastVal) try {
                if (e = c.datepicker.parseDate(c.datepicker._get(b, "dateFormat"), b.input ? b.input.val() : null, c.datepicker._getFormatConfig(b))) c.datepicker._setDateFromField(b), c.datepicker._updateAlternate(b),
                c.datepicker._updateDatepicker(b)
            } catch (d) { } return !0
        }, _showDatepicker: function (b) {
            b = b.target || b; "input" !== b.nodeName.toLowerCase() && (b = c("input", b.parentNode)[0]); if (!c.datepicker._isDisabledDatepicker(b) && c.datepicker._lastInput !== b) {
                var e, d, k, f; e = c.datepicker._getInst(b); c.datepicker._curInst && c.datepicker._curInst !== e && (c.datepicker._curInst.dpDiv.stop(!0, !0), e && c.datepicker._datepickerShowing && c.datepicker._hideDatepicker(c.datepicker._curInst.input[0])); d = (d = c.datepicker._get(e, "beforeShow")) ?
                d.apply(b, [b, e]) : {}; !1 !== d && (l(e.settings, d), e.lastVal = null, c.datepicker._lastInput = b, c.datepicker._setDateFromField(e), c.datepicker._inDialog && (b.value = ""), c.datepicker._pos || (c.datepicker._pos = c.datepicker._findPos(b), c.datepicker._pos[1] += b.offsetHeight), k = !1, c(b).parents().each(function () { k |= "fixed" === c(this).css("position"); return !k }), d = { left: c.datepicker._pos[0], top: c.datepicker._pos[1] }, c.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }),
                c.datepicker._updateDatepicker(e), d = c.datepicker._checkOffset(e, d, k), e.dpDiv.css({ position: c.datepicker._inDialog && c.blockUI ? "static" : k ? "fixed" : "absolute", display: "none", left: d.left + "px", top: d.top + "px" }), e.inline || (d = c.datepicker._get(e, "showAnim"), f = c.datepicker._get(e, "duration"), e.dpDiv.css("z-index", r(c(b)) + 1), c.datepicker._datepickerShowing = !0, c.effects && c.effects.effect[d] ? e.dpDiv.show(d, c.datepicker._get(e, "showOptions"), f) : e.dpDiv[d || "show"](d ? f : null), c.datepicker._shouldFocusInput(e) && e.input.focus(),
                c.datepicker._curInst = e))
            }
        }, _updateDatepicker: function (b) {
            this.maxRows = 4; C = b; b.dpDiv.empty().append(this._generateHTML(b)); this._attachHandlers(b); var e, d = this._getNumberOfMonths(b), k = d[1], f = b.dpDiv.find("." + this._dayOverClass + " a"); 0 < f.length && n.apply(f.get(0)); b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""); 1 < k && b.dpDiv.addClass("ui-datepicker-multi-" + k).css("width", 17 * k + "em"); b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"); b === c.datepicker._curInst && c.datepicker._datepickerShowing && c.datepicker._shouldFocusInput(b) && b.input.focus(); b.yearshtml && (e = b.yearshtml, setTimeout(function () { e === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml); e = b.yearshtml = null }, 0))
        }, _shouldFocusInput: function (b) { return b.input && b.input.is(":visible") && !b.input.is(":disabled") && !b.input.is(":focus") }, _checkOffset: function (b,
        e, d) {
            var k = b.dpDiv.outerWidth(), f = b.dpDiv.outerHeight(), g = b.input ? b.input.outerWidth() : 0, h = b.input ? b.input.outerHeight() : 0, t = document.documentElement.clientWidth + (d ? 0 : c(document).scrollLeft()), p = document.documentElement.clientHeight + (d ? 0 : c(document).scrollTop()); e.left -= this._get(b, "isRTL") ? k - g : 0; e.left -= d && e.left === b.input.offset().left ? c(document).scrollLeft() : 0; e.top -= d && e.top === b.input.offset().top + h ? c(document).scrollTop() : 0; e.left -= Math.min(e.left, e.left + k > t && t > k ? Math.abs(e.left + k - t) : 0); e.top -=
            Math.min(e.top, e.top + f > p && p > f ? Math.abs(f + h) : 0); return e
        }, _findPos: function (b) { for (var e = this._getInst(b), e = this._get(e, "isRTL") ; b && ("hidden" === b.type || 1 !== b.nodeType || c.expr.filters.hidden(b)) ;) b = b[e ? "previousSibling" : "nextSibling"]; b = c(b).offset(); return [b.left, b.top] }, _hideDatepicker: function (b) {
            var e, d, k = this._curInst; !k || b && k !== c.data(b, "datepicker") || !this._datepickerShowing || (b = this._get(k, "showAnim"), e = this._get(k, "duration"), d = function () { c.datepicker._tidyDialog(k) }, c.effects && (c.effects.effect[b] ||
            c.effects[b]) ? k.dpDiv.hide(b, c.datepicker._get(k, "showOptions"), e, d) : k.dpDiv["slideDown" === b ? "slideUp" : "fadeIn" === b ? "fadeOut" : "hide"](b ? e : null, d), b || d(), this._datepickerShowing = !1, (b = this._get(k, "onClose")) && b.apply(k.input ? k.input[0] : null, [k.input ? k.input.val() : "", k]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), c.blockUI && (c.unblockUI(), c("body").append(this.dpDiv))), this._inDialog = !1)
        }, _tidyDialog: function (b) { b.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
        _checkExternalClick: function (b) { if (c.datepicker._curInst) { b = c(b.target); var e = c.datepicker._getInst(b[0]); (!(b[0].id === c.datepicker._mainDivId || 0 !== b.parents("#" + c.datepicker._mainDivId).length || b.hasClass(c.datepicker.markerClassName) || b.closest("." + c.datepicker._triggerClass).length || !c.datepicker._datepickerShowing || c.datepicker._inDialog && c.blockUI) || b.hasClass(c.datepicker.markerClassName) && c.datepicker._curInst !== e) && c.datepicker._hideDatepicker() } }, _adjustDate: function (b, e, d) {
            b = c(b); var k =
            this._getInst(b[0]); this._isDisabledDatepicker(b[0]) || (this._adjustInstDate(k, e + ("M" === d ? this._get(k, "showCurrentAtPos") : 0), d), this._updateDatepicker(k))
        }, _gotoToday: function (b) {
            var e = c(b), d = this._getInst(e[0]); this._get(d, "gotoCurrent") && d.currentDay ? (d.selectedDay = d.currentDay, d.drawMonth = d.selectedMonth = d.currentMonth, d.drawYear = d.selectedYear = d.currentYear) : (b = new Date, d.selectedDay = b.getDate(), d.drawMonth = d.selectedMonth = b.getMonth(), d.drawYear = d.selectedYear = b.getFullYear()); this._notifyChange(d);
            this._adjustDate(e)
        }, _selectMonthYear: function (b, e, d) { b = c(b); var k = this._getInst(b[0]); k["selected" + ("M" === d ? "Month" : "Year")] = k["draw" + ("M" === d ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10); this._notifyChange(k); this._adjustDate(b) }, _selectDay: function (b, e, d, k) {
            var f; f = c(b); c(k).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]) || (f = this._getInst(f[0]), f.selectedDay = f.currentDay = c("a", k).html(), f.selectedMonth = f.currentMonth = e, f.selectedYear = f.currentYear = d, this._selectDate(b,
            this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
        }, _clearDate: function (b) { b = c(b); this._selectDate(b, "") }, _selectDate: function (b, e) {
            var d; d = c(b); var k = this._getInst(d[0]); e = null != e ? e : this._formatDate(k); k.input && k.input.val(e); this._updateAlternate(k); (d = this._get(k, "onSelect")) ? d.apply(k.input ? k.input[0] : null, [e, k]) : k.input && k.input.trigger("change"); k.inline ? this._updateDatepicker(k) : (this._hideDatepicker(), this._lastInput = k.input[0], "object" != typeof k.input[0] && k.input.focus(), this._lastInput =
            null)
        }, _updateAlternate: function (b) { var e, d, k, f = this._get(b, "altField"); f && (e = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), k = this.formatDate(e, d, this._getFormatConfig(b)), c(f).each(function () { c(this).val(k) })) }, noWeekends: function (b) { b = b.getDay(); return [0 < b && 6 > b, ""] }, iso8601Week: function (b) { var e = new Date(b.getTime()); e.setDate(e.getDate() + 4 - (e.getDay() || 7)); b = e.getTime(); e.setMonth(0); e.setDate(1); return Math.floor(Math.round((b - e) / 864E5) / 7) + 1 }, parseDate: function (b, e, d) {
            function k() {
                if (e.charAt(q) !==
                b.charAt(t)) throw "Unexpected literal at position " + q; q++
            } function f(b, d, k) { var g = -1; b = c.map(h(b) ? k : d, function (b, d) { return [[d, b]] }).sort(function (b, d) { return -(b[1].length - d[1].length) }); c.each(b, function (b, d) { var c = d[1]; if (e.substr(q, c.length).toLowerCase() === c.toLowerCase()) return g = d[0], q += c.length, !1 }); if (-1 !== g) return g + 1; throw "Unknown name at position " + q; } function g(b) {
                var d = h(b), d = "@" === b ? 14 : "!" === b ? 20 : "y" === b && d ? 4 : "o" === b ? 3 : 2; b = e.substring(q).match(new RegExp("^\\d{" + ("y" === b ? d : 1) + "," + d + "}"));
                if (!b) throw "Missing number at position " + q; q += b[0].length; return parseInt(b[0], 10)
            } function h(d) { (d = t + 1 < b.length && b.charAt(t + 1) === d) && t++; return d } if (null == b || null == e) throw "Invalid arguments"; e = "object" == typeof e ? e.toString() : e + ""; if ("" === e) return null; var t, p, l, n, q = 0; p = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff; p = "string" != typeof p ? p : (new Date).getFullYear() % 100 + parseInt(p, 10); l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort; var A = (d ? d.dayNames : null) || this._defaults.dayNames,
            y = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort, B = (d ? d.monthNames : null) || this._defaults.monthNames, r = d = -1, C = -1, D = -1, E = !1; for (t = 0; t < b.length; t++) if (E) "'" !== b.charAt(t) || h("'") ? k() : E = !1; else switch (b.charAt(t)) {
                case "d": C = g("d"); break; case "D": f("D", l, A); break; case "o": D = g("o"); break; case "m": r = g("m"); break; case "M": r = f("M", y, B); break; case "y": d = g("y"); break; case "@": n = new Date(g("@")); d = n.getFullYear(); r = n.getMonth() + 1; C = n.getDate(); break; case "!": n = new Date((g("!") - this._ticksTo1970) /
                1E4); d = n.getFullYear(); r = n.getMonth() + 1; C = n.getDate(); break; case "'": h("'") ? k() : E = !0; break; default: k()
            } if (q < e.length && (l = e.substr(q), !/^\s+/.test(l))) throw "Extra/unparsed characters found in date: " + l; -1 === d ? d = (new Date).getFullYear() : 100 > d && (d += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (p >= d ? 0 : -100)); if (-1 < D) for (r = 1, C = D; ;) { p = this._getDaysInMonth(d, r - 1); if (p >= C) break; r++; C -= p } n = this._daylightSavingAdjust(new Date(d, r - 1, C)); if (n.getFullYear() !== d || n.getMonth() + 1 !== r || n.getDate() !== C) throw "Invalid date";
            return n
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 864E9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function (b, e, d) {
            function c(b, d, e, k) { return g(b) ? k[d] : e[d] } function f(b, d, e) { d = "" + d; if (g(b)) for (; d.length < e;) d = "0" + d; return d } function g(d) { (d = h + 1 < b.length && b.charAt(h + 1) === d) && h++; return d }
            if (!e) return ""; var h, t = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort, p = (d ? d.dayNames : null) || this._defaults.dayNames, l = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort; d = (d ? d.monthNames : null) || this._defaults.monthNames; var n = "", q = !1; if (e) for (h = 0; h < b.length; h++) if (q) "'" !== b.charAt(h) || g("'") ? n += b.charAt(h) : q = !1; else switch (b.charAt(h)) {
                case "d": n += f("d", e.getDate(), 2); break; case "D": n += c("D", e.getDay(), t, p); break; case "o": n += f("o", Math.round(((new Date(e.getFullYear(), e.getMonth(),
                e.getDate())).getTime() - (new Date(e.getFullYear(), 0, 0)).getTime()) / 864E5), 3); break; case "m": n += f("m", e.getMonth() + 1, 2); break; case "M": n += c("M", e.getMonth(), l, d); break; case "y": n += g("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100; break; case "@": n += e.getTime(); break; case "!": n += 1E4 * e.getTime() + this._ticksTo1970; break; case "'": g("'") ? n += "'" : q = !0; break; default: n += b.charAt(h)
            } return n
        }, _possibleChars: function (b) {
            function e() { var e = d + 1 < b.length && "'" === b.charAt(d + 1); e && d++; return e } var d,
            c = "", f = !1; for (d = 0; d < b.length; d++) if (f) "'" !== b.charAt(d) || e() ? c += b.charAt(d) : f = !1; else switch (b.charAt(d)) { case "d": case "m": case "y": case "@": c += "0123456789"; break; case "D": case "M": return null; case "'": e() ? c += "'" : f = !0; break; default: c += b.charAt(d) } return c
        }, _get: function (b, e) { return void 0 !== b.settings[e] ? b.settings[e] : this._defaults[e] }, _setDateFromField: function (b, e) {
            if (b.input.val() !== b.lastVal) {
                var d = this._get(b, "dateFormat"), c = b.lastVal = b.input ? b.input.val() : null, f = this._getDefaultDate(b), g =
                f, h = this._getFormatConfig(b); try { g = this.parseDate(d, c, h) || f } catch (t) { c = e ? "" : c } b.selectedDay = g.getDate(); b.drawMonth = b.selectedMonth = g.getMonth(); b.drawYear = b.selectedYear = g.getFullYear(); b.currentDay = c ? g.getDate() : 0; b.currentMonth = c ? g.getMonth() : 0; b.currentYear = c ? g.getFullYear() : 0; this._adjustInstDate(b)
            }
        }, _getDefaultDate: function (b) { return this._restrictMinMax(b, this._determineDate(b, this._get(b, "defaultDate"), new Date)) }, _determineDate: function (b, e, d) {
            function k(d) {
                try {
                    return c.datepicker.parseDate(c.datepicker._get(b,
                    "dateFormat"), d, c.datepicker._getFormatConfig(b))
                } catch (e) { } for (var k = (d.toLowerCase().match(/^c/) ? c.datepicker._getDate(b) : null) || new Date, f = k.getFullYear(), g = k.getMonth(), k = k.getDate(), w = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = w.exec(d) ; h;) {
                    switch (h[2] || "d") {
                        case "d": case "D": k += parseInt(h[1], 10); break; case "w": case "W": k += 7 * parseInt(h[1], 10); break; case "m": case "M": g += parseInt(h[1], 10); k = Math.min(k, c.datepicker._getDaysInMonth(f, g)); break; case "y": case "Y": f += parseInt(h[1], 10), k = Math.min(k, c.datepicker._getDaysInMonth(f,
                        g))
                    } h = w.exec(d)
                } return new Date(f, g, k)
            } function f(b) { var d = new Date; d.setDate(d.getDate() + b); return d } if (e = (e = null == e || "" === e ? d : "string" == typeof e ? k(e) : "number" == typeof e ? isNaN(e) ? d : f(e) : new Date(e.getTime())) && "Invalid Date" === e.toString() ? d : e) e.setHours(0), e.setMinutes(0), e.setSeconds(0), e.setMilliseconds(0); return this._daylightSavingAdjust(e)
        }, _daylightSavingAdjust: function (b) { if (!b) return null; b.setHours(12 < b.getHours() ? b.getHours() + 2 : 0); return b }, _setDate: function (b, e, d) {
            var c = !e, f = b.selectedMonth,
            g = b.selectedYear; e = this._restrictMinMax(b, this._determineDate(b, e, new Date)); b.selectedDay = b.currentDay = e.getDate(); b.drawMonth = b.selectedMonth = b.currentMonth = e.getMonth(); b.drawYear = b.selectedYear = b.currentYear = e.getFullYear(); f === b.selectedMonth && g === b.selectedYear || d || this._notifyChange(b); this._adjustInstDate(b); b.input && b.input.val(c ? "" : this._formatDate(b))
        }, _getDate: function (b) {
            return !b.currentYear || b.input && "" === b.input.val() ? null : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth,
            b.currentDay))
        }, _attachHandlers: function (b) {
            var e = this._get(b, "stepMonths"), d = "#" + b.id.replace(/\\\\/g, "\\"); b.dpDiv.find("[data-handler]").map(function () {
                c(this).bind(this.getAttribute("data-event"), {
                    prev: function () { c.datepicker._adjustDate(d, -e, "M") }, next: function () { c.datepicker._adjustDate(d, +e, "M") }, hide: function () { c.datepicker._hideDatepicker() }, today: function () { c.datepicker._gotoToday(d) }, selectDay: function () {
                        c.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"),
                        this); return !1
                    }, selectMonth: function () { c.datepicker._selectMonthYear(d, this, "M"); return !1 }, selectYear: function () { c.datepicker._selectMonthYear(d, this, "Y"); return !1 }
                }[this.getAttribute("data-handler")])
            })
        }, _generateHTML: function (b) {
            var e, d, c, f, g, h, t, p, l, n, q, A, y, r, B, C, D, E, v, u, z, N, V, aa, qa, pa, ua, R = new Date, R = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), W = this._get(b, "isRTL"); h = this._get(b, "showButtonPanel"); c = this._get(b, "hideIfNoPrevNext"); g = this._get(b, "navigationAsDateFormat");
            var ka = this._getNumberOfMonths(b), P = this._get(b, "showCurrentAtPos"); f = this._get(b, "stepMonths"); var Ea = 1 !== ka[0] || 1 !== ka[1], ra = this._daylightSavingAdjust(b.currentDay ? new Date(b.currentYear, b.currentMonth, b.currentDay) : new Date(9999, 9, 9)), sa = this._getMinMaxDate(b, "min"), ha = this._getMinMaxDate(b, "max"), P = b.drawMonth - P, F = b.drawYear; 0 > P && (P += 12, F--); if (ha) for (e = this._daylightSavingAdjust(new Date(ha.getFullYear(), ha.getMonth() - ka[0] * ka[1] + 1, ha.getDate())), e = sa && sa > e ? sa : e; this._daylightSavingAdjust(new Date(F,
            P, 1)) > e;) P--, 0 > P && (P = 11, F--); b.drawMonth = P; b.drawYear = F; e = this._get(b, "prevText"); e = g ? this.formatDate(e, this._daylightSavingAdjust(new Date(F, P - f, 1)), this._getFormatConfig(b)) : e; e = this._canAdjustMonth(b, -1, F, P) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + e + "</span></a>" : c ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" +
            (W ? "e" : "w") + "'>" + e + "</span></a>"; d = this._get(b, "nextText"); d = g ? this.formatDate(d, this._daylightSavingAdjust(new Date(F, P + f, 1)), this._getFormatConfig(b)) : d; c = this._canAdjustMonth(b, 1, F, P) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + d + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + d + "</span></a>" : c ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + d + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" :
            "e") + "'>" + d + "</span></a>"; f = this._get(b, "currentText"); d = this._get(b, "gotoCurrent") && b.currentDay ? ra : R; f = g ? this.formatDate(f, d, this._getFormatConfig(b)) : f; g = b.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(b, "closeText") + "</button>"; h = h ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? g : "") + (this._isInRange(b, d) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
            f + "</button>" : "") + (W ? "" : g) + "</div>" : ""; g = parseInt(this._get(b, "firstDay"), 10); g = isNaN(g) ? 0 : g; f = this._get(b, "showWeek"); d = this._get(b, "dayNames"); t = this._get(b, "dayNamesMin"); p = this._get(b, "monthNames"); l = this._get(b, "monthNamesShort"); n = this._get(b, "beforeShowDay"); q = this._get(b, "showOtherMonths"); A = this._get(b, "selectOtherMonths"); y = this._getDefaultDate(b); r = ""; for (C = 0; C < ka[0]; C++) {
                D = ""; this.maxRows = 4; for (E = 0; E < ka[1]; E++) {
                    v = this._daylightSavingAdjust(new Date(F, P, b.selectedDay)); B = " ui-corner-all";
                    u = ""; if (Ea) { u += "<div class='ui-datepicker-group"; if (1 < ka[1]) switch (E) { case 0: u += " ui-datepicker-group-first"; B = " ui-corner-" + (W ? "right" : "left"); break; case ka[1] - 1: u += " ui-datepicker-group-last"; B = " ui-corner-" + (W ? "left" : "right"); break; default: u += " ui-datepicker-group-middle", B = "" } u += "'>" } u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + B + "'>" + (/all|left/.test(B) && 0 === C ? W ? c : e : "") + (/all|right/.test(B) && 0 === C ? W ? e : c : "") + this._generateMonthYearHeader(b, P, F, sa, ha, 0 < C || 0 < E, p, l) +
                    "</div><table class='ui-datepicker-calendar'><thead><tr>"; z = f ? "<th class='ui-datepicker-week-col'>" + this._get(b, "weekHeader") + "</th>" : ""; for (B = 0; 7 > B; B++) N = (B + g) % 7, z += "<th scope='col'" + (5 <= (B + g + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[N] + "'>" + t[N] + "</span></th>"; u += z + "</tr></thead><tbody>"; z = this._getDaysInMonth(F, P); F === b.selectedYear && P === b.selectedMonth && (b.selectedDay = Math.min(b.selectedDay, z)); B = (this._getFirstDayOfMonth(F, P) - g + 7) % 7; z = Math.ceil((B + z) / 7); this.maxRows = z = Ea &&
                    this.maxRows > z ? this.maxRows : z; N = this._daylightSavingAdjust(new Date(F, P, 1 - B)); for (V = 0; z > V; V++) {
                        u += "<tr>"; aa = f ? "<td class='ui-datepicker-week-col'>" + this._get(b, "calculateWeek")(N) + "</td>" : ""; for (B = 0; 7 > B; B++) qa = n ? n.apply(b.input ? b.input[0] : null, [N]) : [!0, ""], ua = (pa = N.getMonth() !== P) && !A || !qa[0] || sa && sa > N || ha && N > ha, aa += "<td class='" + (5 <= (B + g + 6) % 7 ? " ui-datepicker-week-end" : "") + (pa ? " ui-datepicker-other-month" : "") + (N.getTime() === v.getTime() && P === b.selectedMonth && b._keyEvent || y.getTime() === N.getTime() &&
                        y.getTime() === v.getTime() ? " " + this._dayOverClass : "") + (ua ? " " + this._unselectableClass + " ui-state-disabled" : "") + (pa && !q ? "" : " " + qa[1] + (N.getTime() === ra.getTime() ? " " + this._currentClass : "") + (N.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (pa && !q || !qa[2] ? "" : " title='" + qa[2].replace(/'/g, "&#39;") + "'") + (ua ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (pa && !q ? "&#xa0;" : ua ? "<span class='ui-state-default'>" + N.getDate() + "</span>" :
                        "<a class='ui-state-default" + (N.getTime() === R.getTime() ? " ui-state-highlight" : "") + (N.getTime() === ra.getTime() ? " ui-state-active" : "") + (pa ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N); u += aa + "</tr>"
                    } P++; 11 < P && (P = 0, F++); u += "</tbody></table>" + (Ea ? "</div>" + (0 < ka[0] && E === ka[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""); D += u
                } r += D
            } b._keyEvent = !1; return r + h
        }, _generateMonthYearHeader: function (b, e, d, c, f, g, h, t) {
            var p,
            l, n, q = this._get(b, "changeMonth"), A = this._get(b, "changeYear"), y = this._get(b, "showMonthAfterYear"), B = "<div class='ui-datepicker-title'>", r = ""; if (g || !q) r += "<span class='ui-datepicker-month'>" + h[e] + "</span>"; else { h = c && c.getFullYear() === d; p = f && f.getFullYear() === d; r += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>"; for (l = 0; 12 > l; l++) (!h || l >= c.getMonth()) && (!p || l <= f.getMonth()) && (r += "<option value='" + l + "'" + (l === e ? " selected='selected'" : "") + ">" + t[l] + "</option>"); r += "</select>" } y ||
            (B += r + (!g && q && A ? "" : "&#xa0;")); if (!b.yearshtml) if (b.yearshtml = "", g || !A) B += "<span class='ui-datepicker-year'>" + d + "</span>"; else {
                t = this._get(b, "yearRange").split(":"); n = (new Date).getFullYear(); h = function (b) { b = b.match(/c[+\-].*/) ? d + parseInt(b.substring(1), 10) : b.match(/[+\-].*/) ? n + parseInt(b, 10) : parseInt(b, 10); return isNaN(b) ? n : b }; e = h(t[0]); t = Math.max(e, h(t[1] || "")); e = c ? Math.max(e, c.getFullYear()) : e; t = f ? Math.min(t, f.getFullYear()) : t; for (b.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; t >=
                e; e++) b.yearshtml += "<option value='" + e + "'" + (e === d ? " selected='selected'" : "") + ">" + e + "</option>"; b.yearshtml += "</select>"; B += b.yearshtml; b.yearshtml = null
            } B += this._get(b, "yearSuffix"); y && (B += (!g && q && A ? "" : "&#xa0;") + r); return B + "</div>"
        }, _adjustInstDate: function (b, e, d) {
            var c = b.drawYear + ("Y" === d ? e : 0), f = b.drawMonth + ("M" === d ? e : 0); e = Math.min(b.selectedDay, this._getDaysInMonth(c, f)) + ("D" === d ? e : 0); c = this._restrictMinMax(b, this._daylightSavingAdjust(new Date(c, f, e))); b.selectedDay = c.getDate(); b.drawMonth = b.selectedMonth =
            c.getMonth(); b.drawYear = b.selectedYear = c.getFullYear(); "M" !== d && "Y" !== d || this._notifyChange(b)
        }, _restrictMinMax: function (b, e) { var d = this._getMinMaxDate(b, "min"), c = this._getMinMaxDate(b, "max"), d = d && d > e ? d : e; return c && d > c ? c : d }, _notifyChange: function (b) { var e = this._get(b, "onChangeMonthYear"); e && e.apply(b.input ? b.input[0] : null, [b.selectedYear, b.selectedMonth + 1, b]) }, _getNumberOfMonths: function (b) { b = this._get(b, "numberOfMonths"); return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b }, _getMinMaxDate: function (b,
        e) { return this._determineDate(b, this._get(b, e + "Date"), null) }, _getDaysInMonth: function (b, e) { return 32 - this._daylightSavingAdjust(new Date(b, e, 32)).getDate() }, _getFirstDayOfMonth: function (b, e) { return (new Date(b, e, 1)).getDay() }, _canAdjustMonth: function (b, e, d, c) { var f = this._getNumberOfMonths(b); d = this._daylightSavingAdjust(new Date(d, c + (0 > e ? e : f[0] * f[1]), 1)); 0 > e && d.setDate(this._getDaysInMonth(d.getFullYear(), d.getMonth())); return this._isInRange(b, d) }, _isInRange: function (b, e) {
            var d, c, f = this._getMinMaxDate(b,
            "min"), g = this._getMinMaxDate(b, "max"), h = null, t = null; if (d = this._get(b, "yearRange")) d = d.split(":"), c = (new Date).getFullYear(), h = parseInt(d[0], 10), t = parseInt(d[1], 10), d[0].match(/[+\-].*/) && (h += c), d[1].match(/[+\-].*/) && (t += c); return (!f || e.getTime() >= f.getTime()) && (!g || e.getTime() <= g.getTime()) && (!h || e.getFullYear() >= h) && (!t || e.getFullYear() <= t)
        }, _getFormatConfig: function (b) {
            var e = this._get(b, "shortYearCutoff"), e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10); return {
                shortYearCutoff: e,
                dayNamesShort: this._get(b, "dayNamesShort"), dayNames: this._get(b, "dayNames"), monthNamesShort: this._get(b, "monthNamesShort"), monthNames: this._get(b, "monthNames")
            }
        }, _formatDate: function (b, e, d, c) { e || (b.currentDay = b.selectedDay, b.currentMonth = b.selectedMonth, b.currentYear = b.selectedYear); e = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(c, d, e)) : this._daylightSavingAdjust(new Date(b.currentYear, b.currentMonth, b.currentDay)); return this.formatDate(this._get(b, "dateFormat"), e, this._getFormatConfig(b)) }
    });
    c.fn.datepicker = function (b) {
        if (!this.length) return this; c.datepicker.initialized || (c(document).mousedown(c.datepicker._checkExternalClick), c.datepicker.initialized = !0); 0 === c("#" + c.datepicker._mainDivId).length && c("body").append(c.datepicker.dpDiv); var e = Array.prototype.slice.call(arguments, 1); return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? c.datepicker["_" + b + "Datepicker"].apply(c.datepicker, [this[0]].concat(e)) :
        this.each(function () { "string" == typeof b ? c.datepicker["_" + b + "Datepicker"].apply(c.datepicker, [this].concat(e)) : c.datepicker._attachDatepicker(this, b) }) : c.datepicker["_" + b + "Datepicker"].apply(c.datepicker, [this[0]].concat(e))
    }; c.datepicker = new g; c.datepicker.initialized = !1; c.datepicker.uuid = (new Date).getTime(); c.datepicker.version = "1.11.1"; c.datepicker; c.widget("ui.draggable", c.ui.mouse, {
        version: "1.11.1", widgetEventPrefix: "drag", options: {
            addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1,
            containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null
        }, _create: function () {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"); this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled"); this._setHandleClassName(); this._mouseInit()
        }, _setOption: function (b, e) { this._super(b, e); "handle" === b && (this._removeHandleClassName(), this._setHandleClassName()) }, _destroy: function () { (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), this._mouseDestroy()) }, _mouseCapture: function (b) {
            var e =
            this.document[0], d = this.options; try { e.activeElement && "body" !== e.activeElement.nodeName.toLowerCase() && c(e.activeElement).blur() } catch (k) { } if (this.helper || d.disabled || 0 < c(b.target).closest(".ui-resizable-handle").length) return !1; this.handle = this._getHandle(b); if (!this.handle) return !1; c(!0 === d.iframeFix ? "iframe" : d.iframeFix).each(function () {
                c("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001",
                    zIndex: 1E3
                }).css(c(this).offset()).appendTo("body")
            }); return !0
        }, _mouseStart: function (b) {
            var e = this.options; this.helper = this._createHelper(b); this.helper.addClass("ui-draggable-dragging"); this._cacheHelperProportions(); c.ui.ddmanager && (c.ui.ddmanager.current = this); this._cacheMargins(); this.cssPosition = this.helper.css("position"); this.scrollParent = this.helper.scrollParent(!0); this.offsetParent = this.helper.offsetParent(); this.offsetParentCssPosition = this.offsetParent.css("position"); this.offset = this.positionAbs =
            this.element.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; this.offset.scroll = !1; c.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }); this.originalPosition = this.position = this._generatePosition(b, !1); this.originalPageX = b.pageX; this.originalPageY = b.pageY; e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt); this._setContainment(); if (!1 === this._trigger("start",
            b)) return this._clear(), !1; this._cacheHelperProportions(); c.ui.ddmanager && !e.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, b); this._mouseDrag(b, !0); c.ui.ddmanager && c.ui.ddmanager.dragStart(this, b); return !0
        }, _mouseDrag: function (b, e) {
            "fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()); this.position = this._generatePosition(b, !0); this.positionAbs = this._convertPositionTo("absolute"); if (!e) {
                var d = this._uiHash(); if (!1 === this._trigger("drag", b, d)) return this._mouseUp({}),
                !1; this.position = d.position
            } this.helper[0].style.left = this.position.left + "px"; this.helper[0].style.top = this.position.top + "px"; c.ui.ddmanager && c.ui.ddmanager.drag(this, b); return !1
        }, _mouseStop: function (b) {
            var e = this, d = !1; c.ui.ddmanager && !this.options.dropBehaviour && (d = c.ui.ddmanager.drop(this, b)); this.dropped && (d = this.dropped, this.dropped = !1); "invalid" === this.options.revert && !d || "valid" === this.options.revert && d || !0 === this.options.revert || c.isFunction(this.options.revert) && this.options.revert.call(this.element,
            d) ? c(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () { !1 !== e._trigger("stop", b) && e._clear() }) : !1 !== this._trigger("stop", b) && this._clear(); return !1
        }, _mouseUp: function (b) { c("div.ui-draggable-iframeFix").each(function () { this.parentNode.removeChild(this) }); c.ui.ddmanager && c.ui.ddmanager.dragStop(this, b); this.element.focus(); return c.ui.mouse.prototype._mouseUp.call(this, b) }, cancel: function () {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        }, _getHandle: function (b) { return this.options.handle ? !!c(b.target).closest(this.element.find(this.options.handle)).length : !0 }, _setHandleClassName: function () { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element; this.handleElement.addClass("ui-draggable-handle") }, _removeHandleClassName: function () { this.handleElement.removeClass("ui-draggable-handle") }, _createHelper: function (b) {
            var e = this.options; b = c.isFunction(e.helper) ? c(e.helper.apply(this.element[0],
            [b])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element; b.parents("body").length || b.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo); b[0] === this.element[0] || /(fixed|absolute)/.test(b.css("position")) || b.css("position", "absolute"); return b
        }, _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")); c.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }); "left" in b && (this.offset.click.left = b.left + this.margins.left); "right" in b && (this.offset.click.left = this.helperProportions.width -
            b.right + this.margins.left); "top" in b && (this.offset.click.top = b.top + this.margins.top); "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        }, _isRootNode: function (b) { return /(html|body)/i.test(b.tagName) || b === this.document[0] }, _getParentOffset: function () {
            var b = this.offsetParent.offset(), e = this.document[0]; "absolute" === this.cssPosition && this.scrollParent[0] !== e && c.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top +=
            this.scrollParent.scrollTop()); this._isRootNode(this.offsetParent[0]) && (b = { top: 0, left: 0 }); return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        }, _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 }; var b = this.element.position(), e = this._isRootNode(this.scrollParent[0]); return {
                top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: b.left - (parseInt(this.helper.css("left"),
                10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        }, _cacheMargins: function () { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () {
            var b, e, d; b = this.options; e = this.document[0]; this.relativeContainer =
            null; if (b.containment) if ("window" !== b.containment) if ("document" !== b.containment) if (b.containment.constructor !== Array) {
                if ("parent" === b.containment && (b.containment = this.helper[0].parentNode), e = c(b.containment), d = e[0]) b = "hidden" !== e.css("overflow"), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (b ? Math.max(d.scrollWidth, d.offsetWidth) : d.offsetWidth) - (parseInt(e.css("borderRightWidth"),
                10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (b ? Math.max(d.scrollHeight, d.offsetHeight) : d.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e
            } else this.containment = b.containment; else this.containment = [0, 0, c(e).width() - this.helperProportions.width - this.margins.left, (c(e).height() || e.body.parentNode.scrollHeight) -
            this.helperProportions.height - this.margins.top]; else this.containment = [c(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, c(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, c(window).scrollLeft() + c(window).width() - this.helperProportions.width - this.margins.left, c(window).scrollTop() + (c(window).height() || e.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]; else this.containment = null
        }, _convertPositionTo: function (b, e) {
            e || (e = this.position);
            var d = "absolute" === b ? 1 : -1, c = this._isRootNode(this.scrollParent[0]); return { top: e.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.offset.scroll.top : c ? 0 : this.offset.scroll.top) * d, left: e.left + this.offset.relative.left * d + this.offset.parent.left * d - ("fixed" === this.cssPosition ? -this.offset.scroll.left : c ? 0 : this.offset.scroll.left) * d }
        }, _generatePosition: function (b, e) {
            var d, c, f, g = this.options, h = this._isRootNode(this.scrollParent[0]); f = b.pageX; c = b.pageY; h && this.offset.scroll ||
            (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }); e && (this.containment && (this.relativeContainer ? (d = this.relativeContainer.offset(), d = [this.containment[0] + d.left, this.containment[1] + d.top, this.containment[2] + d.left, this.containment[3] + d.top]) : d = this.containment, b.pageX - this.offset.click.left < d[0] && (f = d[0] + this.offset.click.left), b.pageY - this.offset.click.top < d[1] && (c = d[1] + this.offset.click.top), b.pageX - this.offset.click.left > d[2] && (f = d[2] + this.offset.click.left),
            b.pageY - this.offset.click.top > d[3] && (c = d[3] + this.offset.click.top)), g.grid && (c = g.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / g.grid[1]) * g.grid[1] : this.originalPageY, c = d ? c - this.offset.click.top >= d[1] || c - this.offset.click.top > d[3] ? c : c - this.offset.click.top >= d[1] ? c - g.grid[1] : c + g.grid[1] : c, f = g.grid[0] ? this.originalPageX + Math.round((f - this.originalPageX) / g.grid[0]) * g.grid[0] : this.originalPageX, f = d ? f - this.offset.click.left >= d[0] || f - this.offset.click.left > d[2] ? f : f - this.offset.click.left >=
            d[0] ? f - g.grid[0] : f + g.grid[0] : f), "y" === g.axis && (f = this.originalPageX), "x" === g.axis && (c = this.originalPageY)); return { top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top), left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left) }
        }, _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(); this.helper = null; this.cancelHelperRemoval = !1; this.destroyOnClear && this.destroy()
        }, _trigger: function (b, e, d) { d = d || this._uiHash(); c.ui.plugin.call(this, b, [e, d, this], !0); "drag" === b && (this.positionAbs = this._convertPositionTo("absolute")); return c.Widget.prototype._trigger.call(this, b, e, d) }, plugins: {}, _uiHash: function () { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    });
    c.ui.plugin.add("draggable", "connectToSortable", {
        start: function (b, e, d) { var k = d.options, f = c.extend({}, e, { item: d.element }); d.sortables = []; c(k.connectToSortable).each(function () { var e = c(this).sortable("instance"); e && !e.options.disabled && (d.sortables.push({ instance: e, shouldRevert: e.options.revert }), e.refreshPositions(), e._trigger("activate", b, f)) }) }, stop: function (b, e, d) {
            var k = c.extend({}, e, { item: d.element }); c.each(d.sortables, function () {
                this.instance.isOver ? (this.instance.isOver = 0, d.cancelHelperRemoval =
                !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(b), this.instance.options.helper = this.instance.options._helper, "original" === d.options.helper && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", b, k))
            })
        }, drag: function (b, e, d) {
            var k = this; c.each(d.sortables, function () {
                var f = !1, g = this; this.instance.positionAbs = d.positionAbs; this.instance.helperProportions =
                d.helperProportions; this.instance.offset.click = d.offset.click; this.instance._intersectsWith(this.instance.containerCache) && (f = !0, c.each(d.sortables, function () { this.instance.positionAbs = d.positionAbs; this.instance.helperProportions = d.helperProportions; this.instance.offset.click = d.offset.click; this !== g && this.instance._intersectsWith(this.instance.containerCache) && c.contains(g.instance.element[0], this.instance.element[0]) && (f = !1); return f })); f ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem =
                c(k).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () { return e.helper[0] }, b.target = this.instance.currentItem[0], this.instance._mouseCapture(b, !0), this.instance._mouseStart(b, !0, !0), this.instance.offset.click.top = d.offset.click.top, this.instance.offset.click.left = d.offset.click.left, this.instance.offset.parent.left -= d.offset.parent.left - this.instance.offset.parent.left,
                this.instance.offset.parent.top -= d.offset.parent.top - this.instance.offset.parent.top, d._trigger("toSortable", b), d.dropped = this.instance.element, d.currentItem = d.element, this.instance.fromOutside = d), this.instance.currentItem && this.instance._mouseDrag(b)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", b, this.instance._uiHash(this.instance)), this.instance._mouseStop(b, !0), this.instance.options.helper = this.instance.options._helper,
                this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), d._trigger("fromSortable", b), d.dropped = !1)
            })
        }
    }); c.ui.plugin.add("draggable", "cursor", { start: function (b, e, d) { b = c("body"); d = d.options; b.css("cursor") && (d._cursor = b.css("cursor")); b.css("cursor", d.cursor) }, stop: function (b, e, d) { b = d.options; b._cursor && c("body").css("cursor", b._cursor) } }); c.ui.plugin.add("draggable", "opacity", {
        start: function (b, e, d) {
            b = c(e.helper); d = d.options; b.css("opacity") && (d._opacity = b.css("opacity"));
            b.css("opacity", d.opacity)
        }, stop: function (b, e, d) { b = d.options; b._opacity && c(e.helper).css("opacity", b._opacity) }
    }); c.ui.plugin.add("draggable", "scroll", {
        start: function (b, e, d) { d.scrollParentNotHidden || (d.scrollParentNotHidden = d.helper.scrollParent(!1)); d.scrollParentNotHidden[0] !== d.document[0] && "HTML" !== d.scrollParentNotHidden[0].tagName && (d.overflowOffset = d.scrollParentNotHidden.offset()) }, drag: function (b, e, d) {
            e = d.options; var k = !1, f = d.scrollParentNotHidden[0], g = d.document[0]; f !== g && "HTML" !== f.tagName ?
            (e.axis && "x" === e.axis || (d.overflowOffset.top + f.offsetHeight - b.pageY < e.scrollSensitivity ? f.scrollTop = k = f.scrollTop + e.scrollSpeed : b.pageY - d.overflowOffset.top < e.scrollSensitivity && (f.scrollTop = k = f.scrollTop - e.scrollSpeed)), e.axis && "y" === e.axis || (d.overflowOffset.left + f.offsetWidth - b.pageX < e.scrollSensitivity ? f.scrollLeft = k = f.scrollLeft + e.scrollSpeed : b.pageX - d.overflowOffset.left < e.scrollSensitivity && (f.scrollLeft = k = f.scrollLeft - e.scrollSpeed))) : (e.axis && "x" === e.axis || (b.pageY - c(g).scrollTop() < e.scrollSensitivity ?
            k = c(g).scrollTop(c(g).scrollTop() - e.scrollSpeed) : c(window).height() - (b.pageY - c(g).scrollTop()) < e.scrollSensitivity && (k = c(g).scrollTop(c(g).scrollTop() + e.scrollSpeed))), e.axis && "y" === e.axis || (b.pageX - c(g).scrollLeft() < e.scrollSensitivity ? k = c(g).scrollLeft(c(g).scrollLeft() - e.scrollSpeed) : c(window).width() - (b.pageX - c(g).scrollLeft()) < e.scrollSensitivity && (k = c(g).scrollLeft(c(g).scrollLeft() + e.scrollSpeed)))); !1 !== k && c.ui.ddmanager && !e.dropBehaviour && c.ui.ddmanager.prepareOffsets(d, b)
        }
    }); c.ui.plugin.add("draggable",
    "snap", {
        start: function (b, e, d) { b = d.options; d.snapElements = []; c(b.snap.constructor !== String ? b.snap.items || ":data(ui-draggable)" : b.snap).each(function () { var b = c(this), e = b.offset(); this !== d.element[0] && d.snapElements.push({ item: this, width: b.outerWidth(), height: b.outerHeight(), top: e.top, left: e.left }) }) }, drag: function (b, e, d) {
            var k, f, g, h, t, p, l, n, q, A, y = d.options, B = y.snapTolerance, r = e.offset.left, C = r + d.helperProportions.width, D = e.offset.top, E = D + d.helperProportions.height; for (q = d.snapElements.length - 1; 0 <= q; q--) t =
            d.snapElements[q].left, p = t + d.snapElements[q].width, l = d.snapElements[q].top, n = l + d.snapElements[q].height, t - B > C || r > p + B || l - B > E || D > n + B || !c.contains(d.snapElements[q].item.ownerDocument, d.snapElements[q].item) ? (d.snapElements[q].snapping && d.options.snap.release && d.options.snap.release.call(d.element, b, c.extend(d._uiHash(), { snapItem: d.snapElements[q].item })), d.snapElements[q].snapping = !1) : ("inner" !== y.snapMode && (k = Math.abs(l - E) <= B, f = Math.abs(n - D) <= B, g = Math.abs(t - C) <= B, h = Math.abs(p - r) <= B, k && (e.position.top =
            d._convertPositionTo("relative", { top: l - d.helperProportions.height, left: 0 }).top - d.margins.top), f && (e.position.top = d._convertPositionTo("relative", { top: n, left: 0 }).top - d.margins.top), g && (e.position.left = d._convertPositionTo("relative", { top: 0, left: t - d.helperProportions.width }).left - d.margins.left), h && (e.position.left = d._convertPositionTo("relative", { top: 0, left: p }).left - d.margins.left)), A = k || f || g || h, "outer" !== y.snapMode && (k = Math.abs(l - D) <= B, f = Math.abs(n - E) <= B, g = Math.abs(t - r) <= B, h = Math.abs(p - C) <= B, k && (e.position.top =
            d._convertPositionTo("relative", { top: l, left: 0 }).top - d.margins.top), f && (e.position.top = d._convertPositionTo("relative", { top: n - d.helperProportions.height, left: 0 }).top - d.margins.top), g && (e.position.left = d._convertPositionTo("relative", { top: 0, left: t }).left - d.margins.left), h && (e.position.left = d._convertPositionTo("relative", { top: 0, left: p - d.helperProportions.width }).left - d.margins.left)), !d.snapElements[q].snapping && (k || f || g || h || A) && d.options.snap.snap && d.options.snap.snap.call(d.element, b, c.extend(d._uiHash(),
            { snapItem: d.snapElements[q].item })), d.snapElements[q].snapping = k || f || g || h || A)
        }
    }); c.ui.plugin.add("draggable", "stack", { start: function (b, e, d) { var k; b = c.makeArray(c(d.options.stack)).sort(function (b, d) { return (parseInt(c(b).css("zIndex"), 10) || 0) - (parseInt(c(d).css("zIndex"), 10) || 0) }); b.length && (k = parseInt(c(b[0]).css("zIndex"), 10) || 0, c(b).each(function (b) { c(this).css("zIndex", k + b) }), this.css("zIndex", k + b.length)) } }); c.ui.plugin.add("draggable", "zIndex", {
        start: function (b, e, d) {
            b = c(e.helper); d = d.options;
            b.css("zIndex") && (d._zIndex = b.css("zIndex")); b.css("zIndex", d.zIndex)
        }, stop: function (b, e, d) { b = d.options; b._zIndex && c(e.helper).css("zIndex", b._zIndex) }
    }); c.ui.draggable; c.widget("ui.resizable", c.ui.mouse, {
        version: "1.11.1", widgetEventPrefix: "resize", options: {
            alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null,
            stop: null
        }, _num: function (b) { return parseInt(b, 10) || 0 }, _isNumber: function (b) { return !isNaN(parseInt(b, 10)) }, _hasScroll: function (b, e) { if ("hidden" === c(b).css("overflow")) return !1; var d = e && "left" === e ? "scrollLeft" : "scrollTop", k = !1; if (0 < b[d]) return !0; b[d] = 1; k = 0 < b[d]; b[d] = 0; return k }, _create: function () {
            var b, e, d, k, f, g = this, h = this.options; this.element.addClass("ui-resizable"); c.extend(this, {
                _aspectRatio: !!h.aspectRatio, aspectRatio: h.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [],
                _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
            }); this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(c("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper =
            !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static", zoom: 1,
                display: "block"
            })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()); this.handles = h.handles || (c(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"); if (this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles =
            {}, e = 0; e < b.length; e++) d = c.trim(b[e]), f = "ui-resizable-" + d, k = c("<div class='ui-resizable-handle " + f + "'></div>"), k.css({ zIndex: h.zIndex }), "se" === d && k.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(k); this._renderAxis = function (b) {
                var d, e, k; b = b || this.element; for (d in this.handles) this.handles[d].constructor === String && (this.handles[d] = this.element.children(this.handles[d]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) &&
                (e = c(this.handles[d], this.element), k = /sw|ne|nw|se|n|s/.test(d) ? e.outerHeight() : e.outerWidth(), e = ["padding", /ne|nw|n/.test(d) ? "Top" : /se|sw|s/.test(d) ? "Bottom" : /^e$/.test(d) ? "Right" : "Left"].join(""), b.css(e, k), this._proportionallyResize()), c(this.handles[d]).length
            }; this._renderAxis(this.element); this._handles = c(".ui-resizable-handle", this.element).disableSelection(); this._handles.mouseover(function () {
                g.resizing || (this.className && (k = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis =
                k && k[1] ? k[1] : "se")
            }); h.autoHide && (this._handles.hide(), c(this.element).addClass("ui-resizable-autohide").mouseenter(function () { h.disabled || (c(this).removeClass("ui-resizable-autohide"), g._handles.show()) }).mouseleave(function () { h.disabled || g.resizing || (c(this).addClass("ui-resizable-autohide"), g._handles.hide()) })); this._mouseInit()
        }, _destroy: function () {
            function b(b) { c(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() }
            this._mouseDestroy(); var e; this.elementIsWrapper && (b(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()); this.originalElement.css("resize", this.originalResizeStyle); b(this.originalElement); return this
        }, _mouseCapture: function (b) {
            var e, d, k = !1; for (e in this.handles) d = c(this.handles[e])[0], (d === b.target || c.contains(d, b.target)) && (k = !0); return !this.options.disabled &&
            k
        }, _mouseStart: function (b) {
            var e, d, k = this.options, f = this.element; this.resizing = !0; this._renderProxy(); e = this._num(this.helper.css("left")); d = this._num(this.helper.css("top")); k.containment && (e += c(k.containment).scrollLeft() || 0, d += c(k.containment).scrollTop() || 0); this.offset = this.helper.offset(); this.position = { left: e, top: d }; this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: f.width(), height: f.height() }; this.originalSize = this._helper ? { width: f.outerWidth(), height: f.outerHeight() } :
{ width: f.width(), height: f.height() }; this.sizeDiff = { width: f.outerWidth() - f.width(), height: f.outerHeight() - f.height() }; this.originalPosition = { left: e, top: d }; this.originalMousePosition = { left: b.pageX, top: b.pageY }; this.aspectRatio = "number" == typeof k.aspectRatio ? k.aspectRatio : this.originalSize.width / this.originalSize.height || 1; e = c(".ui-resizable-" + this.axis).css("cursor"); c("body").css("cursor", "auto" === e ? this.axis + "-resize" : e); f.addClass("ui-resizable-resizing"); this._propagate("start", b); return !0
        }, _mouseDrag: function (b) {
            var e,
            d = this.originalMousePosition; e = b.pageX - d.left || 0; var d = b.pageY - d.top || 0, k = this._change[this.axis]; this._updatePrevProperties(); if (!k) return !1; e = k.apply(this, [b, e, d]); this._updateVirtualBoundaries(b.shiftKey); (this._aspectRatio || b.shiftKey) && (e = this._updateRatio(e, b)); e = this._respectSize(e, b); this._updateCache(e); this._propagate("resize", b); e = this._applyChanges(); !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(); c.isEmptyObject(e) || (this._updatePrevProperties(),
            this._trigger("resize", b, this.ui()), this._applyChanges()); return !1
        }, _mouseStop: function (b) {
            this.resizing = !1; var e, d, k, f = this.options; this._helper && (e = this._proportionallyResizeElements, e = (d = e.length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : this.sizeDiff.height, d = d ? 0 : this.sizeDiff.width, d = { width: this.helper.width() - d, height: this.helper.height() - e }, e = parseInt(this.element.css("left"), 10) + (this.position.left - this.originalPosition.left) || null, k = parseInt(this.element.css("top"),
            10) + (this.position.top - this.originalPosition.top) || null, f.animate || this.element.css(c.extend(d, { top: k, left: e })), this.helper.height(this.size.height), this.helper.width(this.size.width), this._helper && !f.animate && this._proportionallyResize()); c("body").css("cursor", "auto"); this.element.removeClass("ui-resizable-resizing"); this._propagate("stop", b); this._helper && this.helper.remove(); return !1
        }, _updatePrevProperties: function () {
            this.prevPosition = { top: this.position.top, left: this.position.left }; this.prevSize =
            { width: this.size.width, height: this.size.height }
        }, _applyChanges: function () { var b = {}; this.position.top !== this.prevPosition.top && (b.top = this.position.top + "px"); this.position.left !== this.prevPosition.left && (b.left = this.position.left + "px"); this.size.width !== this.prevSize.width && (b.width = this.size.width + "px"); this.size.height !== this.prevSize.height && (b.height = this.size.height + "px"); this.helper.css(b); return b }, _updateVirtualBoundaries: function (b) {
            var e, d, c, f; f = this.options; f = {
                minWidth: this._isNumber(f.minWidth) ?
                f.minWidth : 0, maxWidth: this._isNumber(f.maxWidth) ? f.maxWidth : 1 / 0, minHeight: this._isNumber(f.minHeight) ? f.minHeight : 0, maxHeight: this._isNumber(f.maxHeight) ? f.maxHeight : 1 / 0
            }; if (this._aspectRatio || b) b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, e = f.maxHeight * this.aspectRatio, c = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), e < f.maxWidth && (f.maxWidth = e), c < f.maxHeight && (f.maxHeight = c); this._vBoundaries = f
        }, _updateCache: function (b) {
            this.offset = this.helper.offset();
            this._isNumber(b.left) && (this.position.left = b.left); this._isNumber(b.top) && (this.position.top = b.top); this._isNumber(b.height) && (this.size.height = b.height); this._isNumber(b.width) && (this.size.width = b.width)
        }, _updateRatio: function (b) {
            var e = this.position, d = this.size, c = this.axis; this._isNumber(b.height) ? b.width = b.height * this.aspectRatio : this._isNumber(b.width) && (b.height = b.width / this.aspectRatio); "sw" === c && (b.left = e.left + (d.width - b.width), b.top = null); "nw" === c && (b.top = e.top + (d.height - b.height), b.left =
            e.left + (d.width - b.width)); return b
        }, _respectSize: function (b) {
            var e = this._vBoundaries, d = this.axis, c = this._isNumber(b.width) && e.maxWidth && e.maxWidth < b.width, f = this._isNumber(b.height) && e.maxHeight && e.maxHeight < b.height, g = this._isNumber(b.width) && e.minWidth && e.minWidth > b.width, h = this._isNumber(b.height) && e.minHeight && e.minHeight > b.height, t = this.originalPosition.left + this.originalSize.width, p = this.position.top + this.size.height, l = /sw|nw|w/.test(d), d = /nw|ne|n/.test(d); g && (b.width = e.minWidth); h && (b.height =
            e.minHeight); c && (b.width = e.maxWidth); f && (b.height = e.maxHeight); g && l && (b.left = t - e.minWidth); c && l && (b.left = t - e.maxWidth); h && d && (b.top = p - e.minHeight); f && d && (b.top = p - e.maxHeight); b.width || b.height || b.left || !b.top ? b.width || b.height || b.top || !b.left || (b.left = null) : b.top = null; return b
        }, _getPaddingPlusBorderDimensions: function (b) {
            var e = 0, d = [], c = [b.css("borderTopWidth"), b.css("borderRightWidth"), b.css("borderBottomWidth"), b.css("borderLeftWidth")]; for (b = [b.css("paddingTop"), b.css("paddingRight"), b.css("paddingBottom"),
            b.css("paddingLeft")]; 4 > e; e++) d[e] = parseInt(c[e], 10) || 0, d[e] += parseInt(b[e], 10) || 0; return { height: d[0] + d[2], width: d[1] + d[3] }
        }, _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var b, e = 0, d = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) b = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(b)), b.css({
                height: d.height() - this.outerDimensions.height || 0, width: d.width() - this.outerDimensions.width ||
                0
            })
        }, _renderProxy: function () { var b = this.options; this.elementOffset = this.element.offset(); this._helper ? (this.helper = this.helper || c("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({ width: this.element.outerWidth() - 1, height: this.element.outerHeight() - 1, position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++b.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element }, _change: {
            e: function (b, e) {
                return {
                    width: this.originalSize.width +
                    e
                }
            }, w: function (b, e) { return { left: this.originalPosition.left + e, width: this.originalSize.width - e } }, n: function (b, e, d) { return { top: this.originalPosition.top + d, height: this.originalSize.height - d } }, s: function (b, e, d) { return { height: this.originalSize.height + d } }, se: function (b, e, d) { return c.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, e, d])) }, sw: function (b, e, d) { return c.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, e, d])) }, ne: function (b, e, d) {
                return c.extend(this._change.n.apply(this,
                arguments), this._change.e.apply(this, [b, e, d]))
            }, nw: function (b, e, d) { return c.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, e, d])) }
        }, _propagate: function (b, e) { c.ui.plugin.call(this, b, [e, this.ui()]); "resize" !== b && this._trigger(b, e, this.ui()) }, plugins: {}, ui: function () { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }); c.ui.plugin.add("resizable",
    "animate", {
        stop: function (b) {
            var e = c(this).resizable("instance"), d = e.options, k = e._proportionallyResizeElements, f = k.length && /textarea/i.test(k[0].nodeName), g = f && e._hasScroll(k[0], "left") ? 0 : e.sizeDiff.height, f = { width: e.size.width - (f ? 0 : e.sizeDiff.width), height: e.size.height - g }, g = parseInt(e.element.css("left"), 10) + (e.position.left - e.originalPosition.left) || null, h = parseInt(e.element.css("top"), 10) + (e.position.top - e.originalPosition.top) || null; e.element.animate(c.extend(f, h && g ? { top: h, left: g } : {}), {
                duration: d.animateDuration,
                easing: d.animateEasing, step: function () { var d = { width: parseInt(e.element.css("width"), 10), height: parseInt(e.element.css("height"), 10), top: parseInt(e.element.css("top"), 10), left: parseInt(e.element.css("left"), 10) }; k && k.length && c(k[0]).css({ width: d.width, height: d.height }); e._updateCache(d); e._propagate("resize", b) }
            })
        }
    }); c.ui.plugin.add("resizable", "containment", {
        start: function () {
            var b, e, d, k, f, g = c(this).resizable("instance"), h = g.element; d = g.options.containment; if (h = d instanceof c ? d.get(0) : /parent/.test(d) ?
            h.parent().get(0) : d) g.containerElement = c(h), /document/.test(d) || d === document ? (g.containerOffset = { left: 0, top: 0 }, g.containerPosition = { left: 0, top: 0 }, g.parentData = { element: c(document), left: 0, top: 0, width: c(document).width(), height: c(document).height() || document.body.parentNode.scrollHeight }) : (b = c(h), e = [], c(["Top", "Right", "Left", "Bottom"]).each(function (d, c) { e[d] = g._num(b.css("padding" + c)) }), g.containerOffset = b.offset(), g.containerPosition = b.position(), g.containerSize = {
                height: b.innerHeight() - e[3], width: b.innerWidth() -
                e[1]
            }, d = g.containerOffset, k = g.containerSize.height, f = g.containerSize.width, f = g._hasScroll(h, "left") ? h.scrollWidth : f, k = g._hasScroll(h) ? h.scrollHeight : k, g.parentData = { element: h, left: d.left, top: d.top, width: f, height: k })
        }, resize: function (b) {
            var e, d, k, f = c(this).resizable("instance"); e = f.options; d = f.containerOffset; k = f.position; b = f._aspectRatio || b.shiftKey; var g = { top: 0, left: 0 }, h = f.containerElement, t = !0; h[0] !== document && /static/.test(h.css("position")) && (g = d); k.left < (f._helper ? d.left : 0) && (f.size.width += f._helper ?
            f.position.left - d.left : f.position.left - g.left, b && (f.size.height = f.size.width / f.aspectRatio, t = !1), f.position.left = e.helper ? d.left : 0); k.top < (f._helper ? d.top : 0) && (f.size.height = f.size.height + (f._helper ? f.position.top - d.top : f.position.top), b && (f.size.width = f.size.height * f.aspectRatio, t = !1), f.position.top = f._helper ? d.top : 0); e = f.containerElement.get(0) === f.element.parent().get(0); k = /relative|absolute/.test(f.containerElement.css("position")); e && k ? (f.offset.left = f.parentData.left + f.position.left, f.offset.top =
            f.parentData.top + f.position.top) : (f.offset.left = f.element.offset().left, f.offset.top = f.element.offset().top); e = Math.abs(f.sizeDiff.width + (f._helper ? f.offset.left - g.left : f.offset.left - d.left)); d = Math.abs(f.sizeDiff.height + (f._helper ? f.offset.top - g.top : f.offset.top - d.top)); e + f.size.width >= f.parentData.width && (f.size.width = f.parentData.width - e, b && (f.size.height = f.size.width / f.aspectRatio, t = !1)); d + f.size.height >= f.parentData.height && (f.size.height = f.parentData.height - d, b && (f.size.width = f.size.height *
            f.aspectRatio, t = !1)); t || (f.position.left = f.prevPosition.left, f.position.top = f.prevPosition.top, f.size.width = f.prevSize.width, f.size.height = f.prevSize.height)
        }, stop: function () {
            var b = c(this).resizable("instance"), e = b.options, d = b.containerOffset, f = b.containerPosition, g = b.containerElement, h = c(b.helper), p = h.offset(), t = h.outerWidth() - b.sizeDiff.width, h = h.outerHeight() - b.sizeDiff.height; b._helper && !e.animate && /relative/.test(g.css("position")) && c(this).css({ left: p.left - f.left - d.left, width: t, height: h }); b._helper &&
            !e.animate && /static/.test(g.css("position")) && c(this).css({ left: p.left - f.left - d.left, width: t, height: h })
        }
    }); c.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            function b(b) { c(b).each(function () { var b = c(this); b.data("ui-resizable-alsoresize", { width: parseInt(b.width(), 10), height: parseInt(b.height(), 10), left: parseInt(b.css("left"), 10), top: parseInt(b.css("top"), 10) }) }) } var e = c(this).resizable("instance").options; "object" != typeof e.alsoResize || e.alsoResize.parentNode ? b(e.alsoResize) : e.alsoResize.length ?
            (e.alsoResize = e.alsoResize[0], b(e.alsoResize)) : c.each(e.alsoResize, function (d) { b(d) })
        }, resize: function (b, e) {
            function d(b, d) { c(b).each(function () { var b = c(this), f = c(this).data("ui-resizable-alsoresize"), k = {}, g = d && d.length ? d : b.parents(e.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"]; c.each(g, function (b, d) { var e = (f[d] || 0) + (t[d] || 0); e && 0 <= e && (k[d] = e || null) }); b.css(k) }) } var f = c(this).resizable("instance"), g = f.options, h = f.originalSize, p = f.originalPosition, t = {
                height: f.size.height -
                h.height || 0, width: f.size.width - h.width || 0, top: f.position.top - p.top || 0, left: f.position.left - p.left || 0
            }; "object" != typeof g.alsoResize || g.alsoResize.nodeType ? d(g.alsoResize) : c.each(g.alsoResize, function (b, e) { d(b, e) })
        }, stop: function () { c(this).removeData("resizable-alsoresize") }
    }); c.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = c(this).resizable("instance"), e = b.options, d = b.size; b.ghost = b.originalElement.clone(); b.ghost.css({
                opacity: .25, display: "block", position: "relative", height: d.height, width: d.width,
                margin: 0, left: 0, top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof e.ghost ? e.ghost : ""); b.ghost.appendTo(b.helper)
        }, resize: function () { var b = c(this).resizable("instance"); b.ghost && b.ghost.css({ position: "relative", height: b.size.height, width: b.size.width }) }, stop: function () { var b = c(this).resizable("instance"); b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0)) }
    }); c.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var b, e = c(this).resizable("instance"), d = e.options, f = e.size, g =
            e.originalSize, h = e.originalPosition, p = e.axis, t = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid, l = t[0] || 1, n = t[1] || 1, q = Math.round((f.width - g.width) / l) * l, f = Math.round((f.height - g.height) / n) * n, A = g.width + q, y = g.height + f, B = d.maxWidth && d.maxWidth < A, r = d.maxHeight && d.maxHeight < y, C = d.minWidth && d.minWidth > A, D = d.minHeight && d.minHeight > y; d.grid = t; C && (A += l); D && (y += n); B && (A -= l); r && (y -= n); /^(se|s|e)$/.test(p) ? (e.size.width = A, e.size.height = y) : /^(ne)$/.test(p) ? (e.size.width = A, e.size.height = y, e.position.top = h.top - f) :
            /^(sw)$/.test(p) ? (e.size.width = A, e.size.height = y, e.position.left = h.left - q) : ((0 >= y - n || 0 >= A - l) && (b = e._getPaddingPlusBorderDimensions(this)), 0 < y - n ? (e.size.height = y, e.position.top = h.top - f) : (y = n - b.height, e.size.height = y, e.position.top = h.top + g.height - y), 0 < A - l ? (e.size.width = A, e.position.left = h.left - q) : (A = n - b.height, e.size.width = A, e.position.left = h.left + g.width - A))
        }
    }); c.ui.resizable; c.widget("ui.dialog", {
        version: "1.11.1", options: {
            appendTo: "body", autoOpen: !0, buttons: [], closeOnEscape: !0, closeText: "Close", dialogClass: "",
            draggable: !0, hide: null, height: "auto", maxHeight: null, maxWidth: null, minHeight: 150, minWidth: 150, modal: !1, position: { my: "center", at: "center", of: window, collision: "fit", using: function (b) { var e = c(this).css(b).offset().top; 0 > e && c(this).css("top", b.top - e) } }, resizable: !0, show: null, title: null, width: 300, beforeClose: null, close: null, drag: null, dragStart: null, dragStop: null, focus: null, open: null, resize: null, resizeStart: null, resizeStop: null
        }, sizeRelatedOptions: {
            buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0,
            minWidth: !0, width: !0
        }, resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 }, _create: function () {
            this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }; this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }; this.originalTitle = this.element.attr("title"); this.options.title =
            this.options.title || this.originalTitle; this._createWrapper(); this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog); this._createTitlebar(); this._createButtonPane(); this.options.draggable && c.fn.draggable && this._makeDraggable(); this.options.resizable && c.fn.resizable && this._makeResizable(); this._isOpen = !1; this._trackFocus()
        }, _init: function () { this.options.autoOpen && this.open() }, _appendTo: function () {
            var b = this.options.appendTo; return b && (b.jquery ||
            b.nodeType) ? c(b) : this.document.find(b || "body").eq(0)
        }, _destroy: function () { var b, e = this.originalPosition; this._destroyOverlay(); this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(); this.uiDialog.stop(!0, !0).remove(); this.originalTitle && this.element.attr("title", this.originalTitle); b = e.parent.children().eq(e.index); b.length && b[0] !== this.element[0] ? b.before(this.element) : e.parent.append(this.element) }, widget: function () { return this.uiDialog },
        disable: c.noop, enable: c.noop, close: function (b) { var e, d = this; if (this._isOpen && !1 !== this._trigger("beforeClose", b)) { this._isOpen = !1; this._focusedElement = null; this._destroyOverlay(); this._untrackInstance(); if (!this.opener.filter(":focusable").focus().length) try { (e = this.document[0].activeElement) && "body" !== e.nodeName.toLowerCase() && c(e).blur() } catch (f) { } this._hide(this.uiDialog, this.options.hide, function () { d._trigger("close", b) }) } }, isOpen: function () { return this._isOpen }, moveToTop: function () { this._moveToTop() },
        _moveToTop: function (b, e) { var d = !1, f = this.uiDialog.siblings(".ui-front:visible").map(function () { return +c(this).css("z-index") }).get(), f = Math.max.apply(null, f); f >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", f + 1), d = !0); d && !e && this._trigger("focus", b); return d }, open: function () {
            var b = this; this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0, this.opener = c(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay &&
            this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () { b._focusTabbable(); b._trigger("focus") }), this._makeFocusTarget(), this._trigger("open"))
        }, _focusTabbable: function () { var b = this._focusedElement; b || (b = this.element.find("[autofocus]")); b.length || (b = this.element.find(":tabbable")); b.length || (b = this.uiDialogButtonPane.find(":tabbable")); b.length || (b = this.uiDialogTitlebarClose.filter(":tabbable")); b.length || (b = this.uiDialog); b.eq(0).focus() },
        _keepFocus: function (b) { function e() { var b = this.document[0].activeElement; this.uiDialog[0] === b || c.contains(this.uiDialog[0], b) || this._focusTabbable() } b.preventDefault(); e.call(this); this._delay(e) }, _createWrapper: function () {
            this.uiDialog = c("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()); this._on(this.uiDialog, {
                keydown: function (b) {
                    if (this.options.closeOnEscape && !b.isDefaultPrevented() &&
                    b.keyCode && b.keyCode === c.ui.keyCode.ESCAPE) b.preventDefault(), this.close(b); else if (b.keyCode === c.ui.keyCode.TAB && !b.isDefaultPrevented()) { var e = this.uiDialog.find(":tabbable"), d = e.filter(":first"), f = e.filter(":last"); b.target !== f[0] && b.target !== this.uiDialog[0] || b.shiftKey ? b.target !== d[0] && b.target !== this.uiDialog[0] || !b.shiftKey || (this._delay(function () { f.focus() }), b.preventDefault()) : (this._delay(function () { d.focus() }), b.preventDefault()) }
                }, mousedown: function (b) { this._moveToTop(b) && this._focusTabbable() }
            });
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        }, _createTitlebar: function () {
            var b; this.uiDialogTitlebar = c("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog); this._on(this.uiDialogTitlebar, { mousedown: function (b) { c(b.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus() } }); this.uiDialogTitlebarClose = c("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: { primary: "ui-icon-closethick" }, text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar); this._on(this.uiDialogTitlebarClose, { click: function (b) { b.preventDefault(); this.close(b) } }); b = c("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar); this._title(b); this.uiDialog.attr({ "aria-labelledby": b.attr("id") })
        }, _title: function (b) { this.options.title || b.html("&#160;"); b.text(this.options.title) }, _createButtonPane: function () {
            this.uiDialogButtonPane = c("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
            this.uiButtonSet = c("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane); this._createButtons()
        }, _createButtons: function () {
            var b = this, e = this.options.buttons; this.uiDialogButtonPane.remove(); this.uiButtonSet.empty(); c.isEmptyObject(e) || c.isArray(e) && !e.length ? this.uiDialog.removeClass("ui-dialog-buttons") : (c.each(e, function (d, e) {
                var f, g; e = c.isFunction(e) ? { click: e, text: d } : e; e = c.extend({ type: "button" }, e); f = e.click; e.click = function () { f.apply(b.element[0], arguments) }; g = {
                    icons: e.icons,
                    text: e.showText
                }; delete e.icons; delete e.showText; c("<button></button>", e).button(g).appendTo(b.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog))
        }, _makeDraggable: function () {
            function b(b) { return { position: b.position, offset: b.offset } } var e = this, d = this.options; this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (d, f) {
                    c(this).addClass("ui-dialog-dragging");
                    e._blockFrames(); e._trigger("dragStart", d, b(f))
                }, drag: function (d, c) { e._trigger("drag", d, b(c)) }, stop: function (f, g) { var h = g.offset.left - e.document.scrollLeft(), p = g.offset.top - e.document.scrollTop(); d.position = { my: "left top", at: "left" + (0 <= h ? "+" : "") + h + " top" + (0 <= p ? "+" : "") + p, of: e.window }; c(this).removeClass("ui-dialog-dragging"); e._unblockFrames(); e._trigger("dragStop", f, b(g)) }
            })
        }, _makeResizable: function () {
            function b(b) {
                return {
                    originalPosition: b.originalPosition, originalSize: b.originalSize, position: b.position,
                    size: b.size
                }
            } var e = this, d = this.options, f = d.resizable, g = this.uiDialog.css("position"); this.uiDialog.resizable({
                cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: d.maxWidth, maxHeight: d.maxHeight, minWidth: d.minWidth, minHeight: this._minHeight(), handles: "string" == typeof f ? f : "n,e,s,w,se,sw,ne,nw", start: function (d, f) { c(this).addClass("ui-dialog-resizing"); e._blockFrames(); e._trigger("resizeStart", d, b(f)) }, resize: function (d, c) { e._trigger("resize", d, b(c)) }, stop: function (f,
                k) { var g = e.uiDialog.offset(), h = g.left - e.document.scrollLeft(), g = g.top - e.document.scrollTop(); d.height = e.uiDialog.height(); d.width = e.uiDialog.width(); d.position = { my: "left top", at: "left" + (0 <= h ? "+" : "") + h + " top" + (0 <= g ? "+" : "") + g, of: e.window }; c(this).removeClass("ui-dialog-resizing"); e._unblockFrames(); e._trigger("resizeStop", f, b(k)) }
            }).css("position", g)
        }, _trackFocus: function () { this._on(this.widget(), { focusin: function (b) { this._makeFocusTarget(); this._focusedElement = c(b.target) } }) }, _makeFocusTarget: function () {
            this._untrackInstance();
            this._trackingInstances().unshift(this)
        }, _untrackInstance: function () { var b = this._trackingInstances(), e = c.inArray(this, b); -1 !== e && b.splice(e, 1) }, _trackingInstances: function () { var b = this.document.data("ui-dialog-instances"); b || (b = [], this.document.data("ui-dialog-instances", b)); return b }, _minHeight: function () { var b = this.options; return "auto" === b.height ? b.minHeight : Math.min(b.minHeight, b.height) }, _position: function () {
            var b = this.uiDialog.is(":visible"); b || this.uiDialog.show(); this.uiDialog.position(this.options.position);
            b || this.uiDialog.hide()
        }, _setOptions: function (b) { var e = this, d = !1, f = {}; c.each(b, function (b, c) { e._setOption(b, c); b in e.sizeRelatedOptions && (d = !0); b in e.resizableRelatedOptions && (f[b] = c) }); d && (this._size(), this._position()); this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", f) }, _setOption: function (b, e) {
            var d, c = this.uiDialog; "dialogClass" === b && c.removeClass(this.options.dialogClass).addClass(e); "disabled" !== b && (this._super(b, e), "appendTo" === b && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === b && this._createButtons(), "closeText" === b && this.uiDialogTitlebarClose.button({ label: "" + e }), "draggable" === b && ((d = c.is(":data(ui-draggable)")) && !e && c.draggable("destroy"), !d && e && this._makeDraggable()), "position" === b && this._position(), "resizable" === b && ((d = c.is(":data(ui-resizable)")) && !e && c.resizable("destroy"), d && "string" == typeof e && c.resizable("option", "handles", e), d || !1 === e || this._makeResizable()), "title" === b && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        }, _size: function () {
            var b,
            e, d, c = this.options; this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }); c.minWidth > c.width && (c.width = c.minWidth); b = this.uiDialog.css({ height: "auto", width: c.width }).outerHeight(); e = Math.max(0, c.minHeight - b); d = "number" == typeof c.maxHeight ? Math.max(0, c.maxHeight - b) : "none"; "auto" === c.height ? this.element.css({ minHeight: e, maxHeight: d, height: "auto" }) : this.element.height(Math.max(0, c.height - b)); this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight",
            this._minHeight())
        }, _blockFrames: function () { this.iframeBlocks = this.document.find("iframe").map(function () { var b = c(this); return c("<div>").css({ position: "absolute", width: b.outerWidth(), height: b.outerHeight() }).appendTo(b.parent()).offset(b.offset())[0] }) }, _unblockFrames: function () { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) }, _allowInteraction: function (b) { return c(b.target).closest(".ui-dialog").length ? !0 : !!c(b.target).closest(".ui-datepicker").length }, _createOverlay: function () {
            if (this.options.modal) {
                var b =
                !0; this._delay(function () { b = !1 }); this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function (e) { b || this._allowInteraction(e) || (e.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }); this.overlay = c("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()); this._on(this.overlay, { mousedown: "_keepFocus" }); this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        }, _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var b =
                this.document.data("ui-dialog-overlays") - 1; b ? this.document.data("ui-dialog-overlays", b) : this.document.unbind("focusin").removeData("ui-dialog-overlays"); this.overlay.remove(); this.overlay = null
            }
        }
    }); c.widget("ui.droppable", {
        version: "1.11.1", widgetEventPrefix: "drop", options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null }, _create: function () {
            var b, e = this.options, d = e.accept; this.isover = !1;
            this.isout = !0; this.accept = c.isFunction(d) ? d : function (b) { return b.is(d) }; this.proportions = function () { if (!arguments.length) return b ? b : b = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }; b = arguments[0] }; this._addToManager(e.scope); e.addClasses && this.element.addClass("ui-droppable")
        }, _addToManager: function (b) { c.ui.ddmanager.droppables[b] = c.ui.ddmanager.droppables[b] || []; c.ui.ddmanager.droppables[b].push(this) }, _splice: function (b) {
            for (var e = 0; e < b.length; e++) b[e] === this && b.splice(e,
            1)
        }, _destroy: function () { this._splice(c.ui.ddmanager.droppables[this.options.scope]); this.element.removeClass("ui-droppable ui-droppable-disabled") }, _setOption: function (b, e) { "accept" === b ? this.accept = c.isFunction(e) ? e : function (b) { return b.is(e) } : "scope" === b && (this._splice(c.ui.ddmanager.droppables[this.options.scope]), this._addToManager(e)); this._super(b, e) }, _activate: function (b) {
            var e = c.ui.ddmanager.current; this.options.activeClass && this.element.addClass(this.options.activeClass); e && this._trigger("activate",
            b, this.ui(e))
        }, _deactivate: function (b) { var e = c.ui.ddmanager.current; this.options.activeClass && this.element.removeClass(this.options.activeClass); e && this._trigger("deactivate", b, this.ui(e)) }, _over: function (b) { var e = c.ui.ddmanager.current; e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", b, this.ui(e))) }, _out: function (b) {
            var e = c.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", b, this.ui(e)))
        }, _drop: function (b, e) {
            var d = e || c.ui.ddmanager.current, f = !1; if (!d || (d.currentItem || d.element)[0] === this.element[0]) return !1; this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var e = c(this).droppable("instance"); if (e.options.greedy && !e.options.disabled &&
                e.options.scope === d.options.scope && e.accept.call(e.element[0], d.currentItem || d.element) && c.ui.intersect(d, c.extend(e, { offset: e.element.offset() }), e.options.tolerance, b)) return f = !0, !1
            }); return f ? !1 : this.accept.call(this.element[0], d.currentItem || d.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", b, this.ui(d)), this.element) : !1
        }, ui: function (b) {
            return {
                draggable: b.currentItem ||
                b.element, helper: b.helper, position: b.position, offset: b.positionAbs
            }
        }
    }); c.ui.intersect = function () {
        return function (b, e, d, c) {
            if (!e.offset) return !1; var f = (b.positionAbs || b.position.absolute).left, g = (b.positionAbs || b.position.absolute).top, h = f + b.helperProportions.width, t = g + b.helperProportions.height, p = e.offset.left, l = e.offset.top, n = p + e.proportions().width, q = l + e.proportions().height; switch (d) {
                case "fit": return f >= p && n >= h && g >= l && q >= t; case "intersect": return p < f + b.helperProportions.width / 2 && h - b.helperProportions.width /
                2 < n && l < g + b.helperProportions.height / 2 && t - b.helperProportions.height / 2 < q; case "pointer": b = c.pageY; d = e.proportions().height; if (l = b >= l && l + d > b) c = c.pageX, e = e.proportions().width, l = c >= p && p + e > c; return l; case "touch": return (g >= l && q >= g || t >= l && q >= t || l > g && t > q) && (f >= p && n >= f || h >= p && n >= h || p > f && h > n); default: return !1
            }
        }
    }(); c.ui.ddmanager = {
        current: null, droppables: { "default": [] }, prepareOffsets: function (b, e) {
            var d, f, g = c.ui.ddmanager.droppables[b.options.scope] || [], h = e ? e.type : null, p = (b.currentItem || b.element).find(":data(ui-droppable)").addBack();
            d = 0; a: for (; d < g.length; d++) if (!(g[d].options.disabled || b && !g[d].accept.call(g[d].element[0], b.currentItem || b.element))) { for (f = 0; f < p.length; f++) if (p[f] === g[d].element[0]) { g[d].proportions().height = 0; continue a } g[d].visible = "none" !== g[d].element.css("display"); g[d].visible && ("mousedown" === h && g[d]._activate.call(g[d], e), g[d].offset = g[d].element.offset(), g[d].proportions({ width: g[d].element[0].offsetWidth, height: g[d].element[0].offsetHeight })) }
        }, drop: function (b, e) {
            var d = !1; c.each((c.ui.ddmanager.droppables[b.options.scope] ||
            []).slice(), function () { this.options && (!this.options.disabled && this.visible && c.ui.intersect(b, this, this.options.tolerance, e) && (d = this._drop.call(this, e) || d), !this.options.disabled && this.visible && this.accept.call(this.element[0], b.currentItem || b.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e))) }); return d
        }, dragStart: function (b, e) { b.element.parentsUntil("body").bind("scroll.droppable", function () { b.options.refreshPositions || c.ui.ddmanager.prepareOffsets(b, e) }) }, drag: function (b, e) {
            b.options.refreshPositions &&
            c.ui.ddmanager.prepareOffsets(b, e); c.each(c.ui.ddmanager.droppables[b.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var d, f, g; g = c.ui.intersect(b, this, this.options.tolerance, e); var h = !g && this.isover ? "isout" : g && !this.isover ? "isover" : null; h && (this.options.greedy && (f = this.options.scope, g = this.element.parents(":data(ui-droppable)").filter(function () { return c(this).droppable("instance").options.scope === f }), g.length && (d = c(g[0]).droppable("instance"), d.greedyChild =
                    "isover" === h)), d && "isover" === h && (d.isover = !1, d.isout = !0, d._out.call(d, e)), this[h] = !0, this["isout" === h ? "isover" : "isout"] = !1, this["isover" === h ? "_over" : "_out"].call(this, e), d && "isout" === h && (d.isout = !1, d.isover = !0, d._over.call(d, e)))
                }
            })
        }, dragStop: function (b, e) { b.element.parentsUntil("body").unbind("scroll.droppable"); b.options.refreshPositions || c.ui.ddmanager.prepareOffsets(b, e) }
    }; var y = (c.ui.droppable, "ui-effects-"); c.effects = { effect: {} }; !function (b, e) {
        function d(b, d, e) {
            var c = n[d.type] || {}; if (null ==
            b) return e || !d.def ? null : d.def; b = c.floor ? ~~b : parseFloat(b); return isNaN(b) ? d.def : c.mod ? (b + c.mod) % c.mod : 0 > b ? 0 : c.max < b ? c.max : b
        } function c(d) { var e = p(), f = e._rgba = []; d = d.toLowerCase(); y(t, function (b, c) { var k, g = c.re.exec(d); k = g && c.parse(g); g = c.space || "rgba"; if (k) return k = e[g](k), e[l[g].cache] = k[l[g].cache], f = e._rgba = k._rgba, !1 }); return f.length ? ("0,0,0,0" === f.join() && b.extend(f, g.transparent), e) : g[d] } function f(b, d, e) { e = (e + 1) % 1; return 1 > 6 * e ? b + (d - b) * e * 6 : 1 > 2 * e ? d : 2 > 3 * e ? b + (d - b) * (2 / 3 - e) * 6 : b } var g, h = /^([\-+])=\s*(\d+\.?\d*)/,
        t = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (b) { return [b[1], b[2], b[3], b[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (b) { return [2.55 * b[1], 2.55 * b[2], 2.55 * b[3], b[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (b) { return [parseInt(b[1], 16), parseInt(b[2], 16), parseInt(b[3], 16)] } }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (b) {
                return [parseInt(b[1] +
                b[1], 16), parseInt(b[2] + b[2], 16), parseInt(b[3] + b[3], 16)]
            }
        }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (b) { return [b[1], b[2] / 100, b[3] / 100, b[4]] } }], p = b.Color = function (d, e, c, f) { return new b.Color.fn.parse(d, e, c, f) }, l = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
        n = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } }, q = p.support = {}, A = b("<p>")[0], y = b.each; A.style.cssText = "background-color:rgba(1,1,1,.5)"; q.rgba = -1 < A.style.backgroundColor.indexOf("rgba"); y(l, function (b, d) { d.cache = "_" + b; d.props.alpha = { idx: 3, type: "percent", def: 1 } }); p.fn = b.extend(p.prototype, {
            parse: function (f, h, t, w) {
                if (f === e) return this._rgba = [null, null, null, null], this; if (f.jquery || f.nodeType) f = b(f).css(h), h = e; var n = this, q = b.type(f), A = this._rgba = []; h !== e && (f = [f, h, t, w], q = "array");
                if ("string" === q) return this.parse(c(f) || g._default); if ("array" === q) return y(l.rgba.props, function (b, e) { A[e.idx] = d(f[e.idx], e) }), this; if ("object" === q) return f instanceof p ? y(l, function (b, d) { f[d.cache] && (n[d.cache] = f[d.cache].slice()) }) : y(l, function (e, c) { var k = c.cache; y(c.props, function (b, e) { if (!n[k] && c.to) { if ("alpha" === b || null == f[b]) return; n[k] = c.to(n._rgba) } n[k][e.idx] = d(f[b], e, !0) }); n[k] && 0 > b.inArray(null, n[k].slice(0, 3)) && (n[k][3] = 1, c.from && (n._rgba = c.from(n[k]))) }), this
            }, is: function (b) {
                var d = p(b),
                e = !0, c = this; y(l, function (b, f) { var k, g = d[f.cache]; g && (k = c[f.cache] || f.to && f.to(c._rgba) || [], y(f.props, function (b, d) { if (null != g[d.idx]) return e = g[d.idx] === k[d.idx] })); return e }); return e
            }, _space: function () { var b = [], d = this; y(l, function (e, c) { d[c.cache] && b.push(e) }); return b.pop() }, transition: function (b, e) {
                var c = p(b), f = c._space(), k = l[f], g = 0 === this.alpha() ? p("transparent") : this, h = g[k.cache] || k.to(g._rgba), t = h.slice(), c = c[k.cache]; y(k.props, function (b, f) {
                    var k = f.idx, g = h[k], p = c[k], w = n[f.type] || {}; null !==
                    p && (null === g ? t[k] = p : (w.mod && (p - g > w.mod / 2 ? g += w.mod : g - p > w.mod / 2 && (g -= w.mod)), t[k] = d((p - g) * e + g, f)))
                }); return this[f](t)
            }, blend: function (d) { if (1 === this._rgba[3]) return this; var e = this._rgba.slice(), c = e.pop(), f = p(d)._rgba; return p(b.map(e, function (b, d) { return (1 - c) * f[d] + c * b })) }, toRgbaString: function () { var d = "rgba(", e = b.map(this._rgba, function (b, d) { return null == b ? 2 < d ? 1 : 0 : b }); 1 === e[3] && (e.pop(), d = "rgb("); return d + e.join() + ")" }, toHslaString: function () {
                var d = "hsla(", e = b.map(this.hsla(), function (b, d) {
                    null ==
                    b && (b = 2 < d ? 1 : 0); d && 3 > d && (b = Math.round(100 * b) + "%"); return b
                }); 1 === e[3] && (e.pop(), d = "hsl("); return d + e.join() + ")"
            }, toHexString: function (d) { var e = this._rgba.slice(), c = e.pop(); d && e.push(~~(255 * c)); return "#" + b.map(e, function (b) { b = (b || 0).toString(16); return 1 === b.length ? "0" + b : b }).join("") }, toString: function () { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
        }); p.fn.parse.prototype = p.fn; l.hsla.to = function (b) {
            if (null == b[0] || null == b[1] || null == b[2]) return [null, null, null, b[3]]; var d = b[0] / 255, e = b[1] /
            255, c = b[2] / 255; b = b[3]; var f = Math.max(d, e, c), k = Math.min(d, e, c), g = f - k, h = f + k, t = .5 * h; return [Math.round(k === f ? 0 : d === f ? 60 * (e - c) / g + 360 : e === f ? 60 * (c - d) / g + 120 : 60 * (d - e) / g + 240) % 360, 0 === g ? 0 : .5 >= t ? g / h : g / (2 - h), t, null == b ? 1 : b]
        }; l.hsla.from = function (b) { if (null == b[0] || null == b[1] || null == b[2]) return [null, null, null, b[3]]; var d = b[0] / 360, e = b[1], c = b[2], e = .5 >= c ? c * (1 + e) : c + e - c * e, c = 2 * c - e; return [Math.round(255 * f(c, e, d + 1 / 3)), Math.round(255 * f(c, e, d)), Math.round(255 * f(c, e, d - 1 / 3)), b[3]] }; y(l, function (c, f) {
            var k = f.props, g = f.cache,
            t = f.to, w = f.from; p.fn[c] = function (c) { t && !this[g] && (this[g] = t(this._rgba)); if (c === e) return this[g].slice(); var f, h = b.type(c), l = "array" === h || "object" === h ? c : arguments, n = this[g].slice(); y(k, function (b, e) { var c = l["object" === h ? b : e.idx]; null == c && (c = n[e.idx]); n[e.idx] = d(c, e) }); return w ? (f = p(w(n)), f[g] = n, f) : p(n) }; y(k, function (d, e) {
                p.fn[d] || (p.fn[d] = function (f) {
                    var k; k = b.type(f); var g = "alpha" === d ? this._hsla ? "hsla" : "rgba" : c, t = this[g](), p = t[e.idx]; if ("undefined" === k) return p; "function" === k && (f = f.call(this, p),
                    k = b.type(f)); if (null == f && e.empty) return this; "string" === k && (k = h.exec(f)) && (f = p + parseFloat(k[2]) * ("+" === k[1] ? 1 : -1)); t[e.idx] = f; return this[g](t)
                })
            })
        }); p.hook = function () {
            y("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "), function (d, e) {
                b.cssHooks[e] = {
                    set: function (d, f) {
                        var g, h = ""; if ("transparent" !== f && ("string" !== b.type(f) || (g = c(f)))) {
                            f = p(g || f); if (!q.rgba && 1 !== f._rgba[3]) {
                                for (g = "backgroundColor" ===
                                e ? d.parentNode : d; ("" === h || "transparent" === h) && g && g.style;) try { h = b.css(g, "backgroundColor"), g = g.parentNode } catch (t) { } f = f.blend(h && "transparent" !== h ? h : "_default")
                            } f = f.toRgbaString()
                        } try { d.style[e] = f } catch (t) { }
                    }
                }; b.fx.step[e] = function (d) { d.colorInit || (d.start = p(d.elem, e), d.end = p(d.end), d.colorInit = !0); b.cssHooks[e].set(d.elem, d.start.transition(d.end, d.pos)) }
            })
        }; p.hook(); b.cssHooks.borderColor = { expand: function (b) { var d = {}; y(["Top", "Right", "Bottom", "Left"], function (e, c) { d["border" + c + "Color"] = b }); return d } };
        g = b.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
    }(c); !function () {
        function b(b) {
            var d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle, f = {}; if (e && e.length && e[0] && e[e[0]]) for (b = e.length; b--;) d =
            e[b], "string" == typeof e[d] && (f[c.camelCase(d)] = e[d]); else for (d in e) "string" == typeof e[d] && (f[d] = e[d]); return f
        } var e = ["add", "remove", "toggle"], d = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 }; c.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (b, d) { c.fx.step[d] = function (b) { if ("none" !== b.end && !b.setAttr || 1 === b.pos && !b.setAttr) c.style(b.elem, d, b.end), b.setAttr = !0 } }); c.fn.addBack || (c.fn.addBack =
        function (b) { return this.add(null == b ? this.prevObject : this.prevObject.filter(b)) }); c.effects.animateClass = function (f, g, h, p) {
            var t = c.speed(g, h, p); return this.queue(function () {
                var g, h = c(this), p = h.attr("class") || "", w = t.children ? h.find("*").addBack() : h, w = w.map(function () { return { el: c(this), start: b(this) } }); g = function () { c.each(e, function (b, d) { f[d] && h[d + "Class"](f[d]) }) }; g(); w = w.map(function () {
                    this.end = b(this.el[0]); var e = this.start, f = this.end, k, g, h = {}; for (k in f) g = f[k], e[k] !== g && (d[k] || (c.fx.step[k] || !isNaN(parseFloat(g))) &&
                    (h[k] = g)); this.diff = h; return this
                }); h.attr("class", p); w = w.map(function () { var b = this, d = c.Deferred(), e = c.extend({}, t, { queue: !1, complete: function () { d.resolve(b) } }); this.el.animate(this.diff, e); return d.promise() }); c.when.apply(c, w.get()).done(function () { g(); c.each(arguments, function () { var b = this.el; c.each(this.diff, function (d) { b.css(d, "") }) }); t.complete.call(h[0]) })
            })
        }; c.fn.extend({
            addClass: function (b) { return function (d, e, f, g) { return e ? c.effects.animateClass.call(this, { add: d }, e, f, g) : b.apply(this, arguments) } }(c.fn.addClass),
            removeClass: function (b) { return function (d, e, f, g) { return 1 < arguments.length ? c.effects.animateClass.call(this, { remove: d }, e, f, g) : b.apply(this, arguments) } }(c.fn.removeClass), toggleClass: function (b) { return function (d, e, f, g, h) { return "boolean" == typeof e || void 0 === e ? f ? c.effects.animateClass.call(this, e ? { add: d } : { remove: d }, f, g, h) : b.apply(this, arguments) : c.effects.animateClass.call(this, { toggle: d }, e, f, g) } }(c.fn.toggleClass), switchClass: function (b, d, e, f, g) {
                return c.effects.animateClass.call(this, { add: d, remove: b },
                e, f, g)
            }
        })
    }(); !function () {
        function b(b, e, f, g) { c.isPlainObject(b) && (e = b, b = b.effect); b = { effect: b }; null == e && (e = {}); c.isFunction(e) && (g = e, f = null, e = {}); if ("number" == typeof e || c.fx.speeds[e]) g = f, f = e, e = {}; c.isFunction(f) && (g = f, f = null); e && c.extend(b, e); f = f || e.duration; b.duration = c.fx.off ? 0 : "number" == typeof f ? f : f in c.fx.speeds ? c.fx.speeds[f] : c.fx.speeds._default; b.complete = g || e.complete; return b } function e(b) {
            return !b || "number" == typeof b || c.fx.speeds[b] ? !0 : "string" != typeof b || c.effects.effect[b] ? c.isFunction(b) ?
            !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
        } c.extend(c.effects, {
            version: "1.11.1", save: function (b, e) { for (var c = 0; c < e.length; c++) null !== e[c] && b.data(y + e[c], b[0].style[e[c]]) }, restore: function (b, e) { var c, f; for (f = 0; f < e.length; f++) null !== e[f] && (c = b.data(y + e[f]), void 0 === c && (c = ""), b.css(e[f], c)) }, setMode: function (b, e) { "toggle" === e && (e = b.is(":hidden") ? "show" : "hide"); return e }, getBaseline: function (b, e) {
                var c, f; switch (b[0]) {
                    case "top": c = 0; break; case "middle": c = .5; break; case "bottom": c = 1; break; default: c = b[0] /
                    e.height
                } switch (b[1]) { case "left": f = 0; break; case "center": f = .5; break; case "right": f = 1; break; default: f = b[1] / e.width } return { x: f, y: c }
            }, createWrapper: function (b) {
                if (b.parent().is(".ui-effects-wrapper")) return b.parent(); var e = { width: b.outerWidth(!0), height: b.outerHeight(!0), "float": b.css("float") }, f = c("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }), g = { width: b.width(), height: b.height() }, h = document.activeElement; try { h.id } catch (t) {
                    h =
                    document.body
                } b.wrap(f); (b[0] === h || c.contains(b[0], h)) && c(h).focus(); f = b.parent(); "static" === b.css("position") ? (f.css({ position: "relative" }), b.css({ position: "relative" })) : (c.extend(e, { position: b.css("position"), zIndex: b.css("z-index") }), c.each(["top", "left", "bottom", "right"], function (c, f) { e[f] = b.css(f); isNaN(parseInt(e[f], 10)) && (e[f] = "auto") }), b.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })); b.css(g); return f.css(e).show()
            }, removeWrapper: function (b) {
                var e = document.activeElement;
                b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === e || c.contains(b[0], e)) && c(e).focus()); return b
            }, setTransition: function (b, e, f, g) { g = g || {}; c.each(e, function (e, c) { var k = b.cssUnit(c); 0 < k[0] && (g[c] = k[0] * f + k[1]) }); return g }
        }); c.fn.extend({
            effect: function () {
                function d(b) { function d() { c.isFunction(g) && g.call(f[0]); c.isFunction(b) && b() } var f = c(this), g = e.complete, p = e.mode; (f.is(":hidden") ? "hide" === p : "show" === p) ? (f[p](), d()) : h.call(f[0], e, d) } var e = b.apply(this, arguments), f = e.mode, g = e.queue,
                h = c.effects.effect[e.effect]; return c.fx.off || !h ? f ? this[f](e.duration, e.complete) : this.each(function () { e.complete && e.complete.call(this) }) : !1 === g ? this.each(d) : this.queue(g || "fx", d)
            }, show: function (d) { return function (c) { if (e(c)) return d.apply(this, arguments); var f = b.apply(this, arguments); f.mode = "show"; return this.effect.call(this, f) } }(c.fn.show), hide: function (d) { return function (c) { if (e(c)) return d.apply(this, arguments); var f = b.apply(this, arguments); f.mode = "hide"; return this.effect.call(this, f) } }(c.fn.hide),
            toggle: function (d) { return function (c) { if (e(c) || "boolean" == typeof c) return d.apply(this, arguments); var f = b.apply(this, arguments); f.mode = "toggle"; return this.effect.call(this, f) } }(c.fn.toggle), cssUnit: function (b) { var e = this.css(b), f = []; c.each(["em", "px", "%", "pt"], function (b, d) { 0 < e.indexOf(d) && (f = [parseFloat(e), d]) }); return f }
        })
    }(); !function () {
        var b = {}; c.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, d) { b[d] = function (b) { return Math.pow(b, e + 2) } }); c.extend(b, {
            Sine: function (b) {
                return 1 - Math.cos(b *
                Math.PI / 2)
            }, Circ: function (b) { return 1 - Math.sqrt(1 - b * b) }, Elastic: function (b) { return 0 === b || 1 === b ? b : -Math.pow(2, 8 * (b - 1)) * Math.sin((80 * (b - 1) - 7.5) * Math.PI / 15) }, Back: function (b) { return b * b * (3 * b - 2) }, Bounce: function (b) { for (var d, c = 4; b < ((d = Math.pow(2, --c)) - 1) / 11;); return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * d - 2) / 22 - b, 2) }
        }); c.each(b, function (b, d) { c.easing["easeIn" + b] = d; c.easing["easeOut" + b] = function (b) { return 1 - d(1 - b) }; c.easing["easeInOut" + b] = function (b) { return .5 > b ? d(2 * b) / 2 : 1 - d(-2 * b + 2) / 2 } })
    }(); c.effects; c.effects.effect.blind =
    function (b, e) {
        var d, f, g, h = c(this), p = "position top bottom left right height width".split(" "), t = c.effects.setMode(h, b.mode || "hide"); d = b.direction || "up"; var l = /up|down|vertical/.test(d), n = l ? "height" : "width", q = l ? "top" : "left", A = /up|left|vertical|horizontal/.test(d), y = {}, B = "show" === t; h.parent().is(".ui-effects-wrapper") ? c.effects.save(h.parent(), p) : c.effects.save(h, p); h.show(); d = c.effects.createWrapper(h).css({ overflow: "hidden" }); f = d[n](); g = parseFloat(d.css(q)) || 0; y[n] = B ? f : 0; A || (h.css(l ? "bottom" : "right",
        0).css(l ? "top" : "left", "auto").css({ position: "absolute" }), y[q] = B ? g : f + g); B && (d.css(n, 0), A || d.css(q, g + f)); d.animate(y, { duration: b.duration, easing: b.easing, queue: !1, complete: function () { "hide" === t && h.hide(); c.effects.restore(h, p); c.effects.removeWrapper(h); e() } })
    }; c.effects.effect.bounce = function (b, e) {
        var d, f, g, h = c(this), p = "position top bottom left right height width".split(" "), t = c.effects.setMode(h, b.mode || "effect"), l = "hide" === t; d = "show" === t; var n = b.direction || "up", t = b.distance, q = b.times || 5, A = 2 * q + (d ||
        l ? 1 : 0), y = b.duration / A, B = b.easing, r = "up" === n || "down" === n ? "top" : "left", n = "up" === n || "left" === n, C = h.queue(), D = C.length; (d || l) && p.push("opacity"); c.effects.save(h, p); h.show(); c.effects.createWrapper(h); t || (t = h["top" === r ? "outerHeight" : "outerWidth"]() / 3); d && (g = { opacity: 1 }, g[r] = 0, h.css("opacity", 0).css(r, n ? 2 * -t : 2 * t).animate(g, y, B)); l && (t /= Math.pow(2, q - 1)); g = {}; for (d = g[r] = 0; q > d; d++) f = {}, f[r] = (n ? "-=" : "+=") + t, h.animate(f, y, B).animate(g, y, B), t = l ? 2 * t : t / 2; l && (f = { opacity: 0 }, f[r] = (n ? "-=" : "+=") + t, h.animate(f, y, B));
        h.queue(function () { l && h.hide(); c.effects.restore(h, p); c.effects.removeWrapper(h); e() }); 1 < D && C.splice.apply(C, [1, 0].concat(C.splice(D, A + 1))); h.dequeue()
    }; c.effects.effect.clip = function (b, e) {
        var d, f, g = c(this), h = "position top bottom left right height width".split(" "), p = "show" === c.effects.setMode(g, b.mode || "hide"), t = "vertical" === (b.direction || "vertical"), l = t ? "height" : "width", t = t ? "top" : "left", n = {}; c.effects.save(g, h); g.show(); d = c.effects.createWrapper(g).css({ overflow: "hidden" }); d = "IMG" === g[0].tagName ?
            d : g; f = d[l](); p && (d.css(l, 0), d.css(t, f / 2)); n[l] = p ? f : 0; n[t] = p ? 0 : f / 2; d.animate(n, { queue: !1, duration: b.duration, easing: b.easing, complete: function () { p || g.hide(); c.effects.restore(g, h); c.effects.removeWrapper(g); e() } })
    }; c.effects.effect.drop = function (b, e) {
        var d, f = c(this), g = "position top bottom left right opacity height width".split(" "), h = c.effects.setMode(f, b.mode || "hide"), p = "show" === h; d = b.direction || "left"; var t = "up" === d || "down" === d ? "top" : "left", l = "up" === d || "left" === d ? "pos" : "neg", n = { opacity: p ? 1 : 0 }; c.effects.save(f,
        g); f.show(); c.effects.createWrapper(f); d = b.distance || f["top" === t ? "outerHeight" : "outerWidth"](!0) / 2; p && f.css("opacity", 0).css(t, "pos" === l ? -d : d); n[t] = (p ? "pos" === l ? "+=" : "-=" : "pos" === l ? "-=" : "+=") + d; f.animate(n, { queue: !1, duration: b.duration, easing: b.easing, complete: function () { "hide" === h && f.hide(); c.effects.restore(f, g); c.effects.removeWrapper(f); e() } })
    }; c.effects.effect.explode = function (b, e) {
        function d() { D.push(this); D.length === n * q && (A.css({ visibility: "visible" }), c(D).remove(), y || A.hide(), e()) } var f, g,
        h, p, t, l, n = b.pieces ? Math.round(Math.sqrt(b.pieces)) : 3, q = n, A = c(this), y = "show" === c.effects.setMode(A, b.mode || "hide"), B = A.show().css("visibility", "hidden").offset(), r = Math.ceil(A.outerWidth() / q), C = Math.ceil(A.outerHeight() / n), D = []; for (f = 0; n > f; f++) for (p = B.top + f * C, l = f - (n - 1) / 2, g = 0; q > g; g++) h = B.left + g * r, t = g - (q - 1) / 2, A.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -g * r, top: -f * C }).parent().addClass("ui-effects-explode").css({
            position: "absolute", overflow: "hidden",
            width: r, height: C, left: h + (y ? t * r : 0), top: p + (y ? l * C : 0), opacity: y ? 0 : 1
        }).animate({ left: h + (y ? 0 : t * r), top: p + (y ? 0 : l * C), opacity: y ? 1 : 0 }, b.duration || 500, b.easing, d)
    }; c.effects.effect.fade = function (b, e) { var d = c(this), f = c.effects.setMode(d, b.mode || "toggle"); d.animate({ opacity: f }, { queue: !1, duration: b.duration, easing: b.easing, complete: e }) }; c.effects.effect.fold = function (b, e) {
        var d, f, g = c(this), h = "position top bottom left right height width".split(" "); d = c.effects.setMode(g, b.mode || "hide"); var p = "show" === d, t = "hide" ===
        d, l = b.size || 15, n = /([0-9]+)%/.exec(l), q = !!b.horizFirst, A = (f = p !== q) ? ["width", "height"] : ["height", "width"], y = b.duration / 2, B = {}, r = {}; c.effects.save(g, h); g.show(); d = c.effects.createWrapper(g).css({ overflow: "hidden" }); f = f ? [d.width(), d.height()] : [d.height(), d.width()]; n && (l = parseInt(n[1], 10) / 100 * f[t ? 0 : 1]); p && d.css(q ? { height: 0, width: l } : { height: l, width: 0 }); B[A[0]] = p ? f[0] : l; r[A[1]] = p ? f[1] : 0; d.animate(B, y, b.easing).animate(r, y, b.easing, function () {
            t && g.hide(); c.effects.restore(g, h); c.effects.removeWrapper(g);
            e()
        })
    }; c.effects.effect.highlight = function (b, e) { var d = c(this), f = ["backgroundImage", "backgroundColor", "opacity"], g = c.effects.setMode(d, b.mode || "show"), h = { backgroundColor: d.css("backgroundColor") }; "hide" === g && (h.opacity = 0); c.effects.save(d, f); d.show().css({ backgroundImage: "none", backgroundColor: b.color || "#ffff99" }).animate(h, { queue: !1, duration: b.duration, easing: b.easing, complete: function () { "hide" === g && d.hide(); c.effects.restore(d, f); e() } }) }; c.effects.effect.size = function (b, e) {
        var d, f, g, h, p, t, l = c(this),
        n = "position top bottom left right width height overflow opacity".split(" "); p = "position top bottom left right overflow opacity".split(" "); var q = ["width", "height", "overflow"], A = ["fontSize"], y = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], B = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], r = c.effects.setMode(l, b.mode || "effect"), C = b.restore || "effect" !== r, D = b.scale || "both"; t = b.origin || ["middle", "center"]; var E = l.css("position"), u = C ? n : p, v = {
            height: 0, width: 0, outerHeight: 0,
            outerWidth: 0
        }; "show" === r && l.show(); p = { height: l.height(), width: l.width(), outerHeight: l.outerHeight(), outerWidth: l.outerWidth() }; "toggle" === b.mode && "show" === r ? (l.from = b.to || v, l.to = b.from || p) : (l.from = b.from || ("show" === r ? v : p), l.to = b.to || ("hide" === r ? v : p)); g = l.from.height / p.height; h = l.from.width / p.width; d = l.to.height / p.height; f = l.to.width / p.width; if ("box" === D || "both" === D) g !== d && (u = u.concat(y), l.from = c.effects.setTransition(l, y, g, l.from), l.to = c.effects.setTransition(l, y, d, l.to)), h !== f && (u = u.concat(B), l.from =
        c.effects.setTransition(l, B, h, l.from), l.to = c.effects.setTransition(l, B, f, l.to)); "content" !== D && "both" !== D || g === d || (u = u.concat(A).concat(q), l.from = c.effects.setTransition(l, A, g, l.from), l.to = c.effects.setTransition(l, A, d, l.to)); c.effects.save(l, u); l.show(); c.effects.createWrapper(l); l.css("overflow", "hidden").css(l.from); t && (t = c.effects.getBaseline(t, p), l.from.top = (p.outerHeight - l.outerHeight()) * t.y, l.from.left = (p.outerWidth - l.outerWidth()) * t.x, l.to.top = (p.outerHeight - l.to.outerHeight) * t.y, l.to.left =
        (p.outerWidth - l.to.outerWidth) * t.x); l.css(l.from); if ("content" === D || "both" === D) y = y.concat(["marginTop", "marginBottom"]).concat(A), B = B.concat(["marginLeft", "marginRight"]), q = n.concat(y).concat(B), l.find("*[width]").each(function () {
            var e = c(this), p = e.height(), t = e.width(), l = e.outerHeight(), n = e.outerWidth(); C && c.effects.save(e, q); e.from = { height: p * g, width: t * h, outerHeight: l * g, outerWidth: n * h }; e.to = { height: p * d, width: t * f, outerHeight: p * d, outerWidth: t * f }; g !== d && (e.from = c.effects.setTransition(e, y, g, e.from), e.to =
            c.effects.setTransition(e, y, d, e.to)); h !== f && (e.from = c.effects.setTransition(e, B, h, e.from), e.to = c.effects.setTransition(e, B, f, e.to)); e.css(e.from); e.animate(e.to, b.duration, b.easing, function () { C && c.effects.restore(e, q) })
        }); l.animate(l.to, {
            queue: !1, duration: b.duration, easing: b.easing, complete: function () {
                0 === l.to.opacity && l.css("opacity", l.from.opacity); "hide" === r && l.hide(); c.effects.restore(l, u); C || ("static" === E ? l.css({ position: "relative", top: l.to.top, left: l.to.left }) : c.each(["top", "left"], function (b,
                d) { l.css(d, function (d, e) { var c = parseInt(e, 10), f = b ? l.to.left : l.to.top; return "auto" === e ? f + "px" : c + f + "px" }) })); c.effects.removeWrapper(l); e()
            }
        })
    }; c.effects.effect.scale = function (b, e) {
        var d = c(this), f = c.extend(!0, {}, b), g = c.effects.setMode(d, b.mode || "effect"), h = parseInt(b.percent, 10) || (0 === parseInt(b.percent, 10) ? 0 : "hide" === g ? 0 : 100), p = b.direction || "both", t = b.origin, l = { height: d.height(), width: d.width(), outerHeight: d.outerHeight(), outerWidth: d.outerWidth() }, n = "horizontal" !== p ? h / 100 : 1, h = "vertical" !== p ? h / 100 :
        1; f.effect = "size"; f.queue = !1; f.complete = e; "effect" !== g && (f.origin = t || ["middle", "center"], f.restore = !0); f.from = b.from || ("show" === g ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l); f.to = { height: l.height * n, width: l.width * h, outerHeight: l.outerHeight * n, outerWidth: l.outerWidth * h }; f.fade && ("show" === g && (f.from.opacity = 0, f.to.opacity = 1), "hide" === g && (f.from.opacity = 1, f.to.opacity = 0)); d.effect(f)
    }; c.effects.effect.puff = function (b, e) {
        var d = c(this), f = c.effects.setMode(d, b.mode || "hide"), g = "hide" === f, h = parseInt(b.percent,
        10) || 150, p = h / 100, t = { height: d.height(), width: d.width(), outerHeight: d.outerHeight(), outerWidth: d.outerWidth() }; c.extend(b, { effect: "scale", queue: !1, fade: !0, mode: f, complete: e, percent: g ? h : 100, from: g ? t : { height: t.height * p, width: t.width * p, outerHeight: t.outerHeight * p, outerWidth: t.outerWidth * p } }); d.effect(b)
    }; c.effects.effect.pulsate = function (b, e) {
        var d, f = c(this), g = c.effects.setMode(f, b.mode || "show"); d = "show" === g; var h = "hide" === g, g = 2 * (b.times || 5) + (d || "hide" === g ? 1 : 0), p = b.duration / g, t = 0, l = f.queue(), n = l.length;
        if (d || !f.is(":visible")) f.css("opacity", 0).show(), t = 1; for (d = 1; g > d; d++) f.animate({ opacity: t }, p, b.easing), t = 1 - t; f.animate({ opacity: t }, p, b.easing); f.queue(function () { h && f.hide(); e() }); 1 < n && l.splice.apply(l, [1, 0].concat(l.splice(n, g + 1))); f.dequeue()
    }; c.effects.effect.shake = function (b, e) {
        var d, f = c(this), g = "position top bottom left right height width".split(" "), h = c.effects.setMode(f, b.mode || "effect"), p = b.direction || "left"; d = b.distance || 20; var t = b.times || 3, l = 2 * t + 1, n = Math.round(b.duration / l), q = "up" === p ||
        "down" === p ? "top" : "left", A = "up" === p || "left" === p, p = {}, y = {}, B = {}, r = f.queue(), C = r.length; c.effects.save(f, g); f.show(); c.effects.createWrapper(f); p[q] = (A ? "-=" : "+=") + d; y[q] = (A ? "+=" : "-=") + 2 * d; B[q] = (A ? "-=" : "+=") + 2 * d; f.animate(p, n, b.easing); for (d = 1; t > d; d++) f.animate(y, n, b.easing).animate(B, n, b.easing); f.animate(y, n, b.easing).animate(p, n / 2, b.easing).queue(function () { "hide" === h && f.hide(); c.effects.restore(f, g); c.effects.removeWrapper(f); e() }); 1 < C && r.splice.apply(r, [1, 0].concat(r.splice(C, l + 1))); f.dequeue()
    };
    c.effects.effect.slide = function (b, e) {
        var d, f = c(this), g = "position top bottom left right width height".split(" "), h = c.effects.setMode(f, b.mode || "show"), p = "show" === h; d = b.direction || "left"; var t = "up" === d || "down" === d ? "top" : "left", l = "up" === d || "left" === d, n = {}; c.effects.save(f, g); f.show(); d = b.distance || f["top" === t ? "outerHeight" : "outerWidth"](!0); c.effects.createWrapper(f).css({ overflow: "hidden" }); p && f.css(t, l ? isNaN(d) ? "-" + d : -d : d); n[t] = (p ? l ? "+=" : "-=" : l ? "-=" : "+=") + d; f.animate(n, {
            queue: !1, duration: b.duration,
            easing: b.easing, complete: function () { "hide" === h && f.hide(); c.effects.restore(f, g); c.effects.removeWrapper(f); e() }
        })
    }; c.effects.effect.transfer = function (b, e) {
        var d = c(this), f = c(b.to), g = "fixed" === f.css("position"), h = c("body"), p = g ? h.scrollTop() : 0, h = g ? h.scrollLeft() : 0, t = f.offset(), f = { top: t.top - p, left: t.left - h, height: f.innerHeight(), width: f.innerWidth() }, t = d.offset(), l = c("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(b.className).css({
            top: t.top - p, left: t.left - h, height: d.innerHeight(),
            width: d.innerWidth(), position: g ? "fixed" : "absolute"
        }).animate(f, b.duration, b.easing, function () { l.remove(); e() })
    }; c.widget("ui.progressbar", {
        version: "1.11.1", options: { max: 100, value: 0, change: null, complete: null }, min: 0, _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(); this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min }); this.valueDiv = c("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this._refreshValue()
        }, _destroy: function () { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"); this.valueDiv.remove() }, value: function (b) { if (void 0 === b) return this.options.value; this.options.value = this._constrainedValue(b); this._refreshValue() }, _constrainedValue: function (b) {
            void 0 === b && (b = this.options.value); this.indeterminate = !1 === b; "number" != typeof b && (b = 0); return this.indeterminate ?
            !1 : Math.min(this.options.max, Math.max(this.min, b))
        }, _setOptions: function (b) { var e = b.value; delete b.value; this._super(b); this.options.value = this._constrainedValue(e); this._refreshValue() }, _setOption: function (b, e) { "max" === b && (e = Math.max(this.min, e)); "disabled" === b && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e); this._super(b, e) }, _percentage: function () { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) }, _refreshValue: function () {
            var b =
            this.options.value, e = this._percentage(); this.valueDiv.toggle(this.indeterminate || b > this.min).toggleClass("ui-corner-right", b === this.options.max).width(e.toFixed(0) + "%"); this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate); this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = c("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": b }), this.overlayDiv &&
            (this.overlayDiv.remove(), this.overlayDiv = null)); this.oldValue !== b && (this.oldValue = b, this._trigger("change")); b === this.options.max && this._trigger("complete")
        }
    }); c.widget("ui.selectable", c.ui.mouse, {
        version: "1.11.1", options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null }, _create: function () {
            var b, e = this; this.element.addClass("ui-selectable"); this.dragged = !1; this.refresh = function () {
                b = c(e.options.filter,
                e.element[0]); b.addClass("ui-selectee"); b.each(function () { var b = c(this), e = b.offset(); c.data(this, "selectable-item", { element: this, $element: b, left: e.left, top: e.top, right: e.left + b.outerWidth(), bottom: e.top + b.outerHeight(), startselected: !1, selected: b.hasClass("ui-selected"), selecting: b.hasClass("ui-selecting"), unselecting: b.hasClass("ui-unselecting") }) })
            }; this.refresh(); this.selectees = b.addClass("ui-selectee"); this._mouseInit(); this.helper = c("<div class='ui-selectable-helper'></div>")
        }, _destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled"); this._mouseDestroy()
        }, _mouseStart: function (b) {
            var e = this, d = this.options; this.opos = [b.pageX, b.pageY]; this.options.disabled || (this.selectees = c(d.filter, this.element[0]), this._trigger("start", b), c(d.appendTo).append(this.helper), this.helper.css({ left: b.pageX, top: b.pageY, width: 0, height: 0 }), d.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var d = c.data(this, "selectable-item"); d.startselected = !0; b.metaKey ||
                b.ctrlKey || (d.$element.removeClass("ui-selected"), d.selected = !1, d.$element.addClass("ui-unselecting"), d.unselecting = !0, e._trigger("unselecting", b, { unselecting: d.element }))
            }), c(b.target).parents().addBack().each(function () {
                var d, f = c.data(this, "selectable-item"); if (f) return d = !b.metaKey && !b.ctrlKey || !f.$element.hasClass("ui-selected"), f.$element.removeClass(d ? "ui-unselecting" : "ui-selected").addClass(d ? "ui-selecting" : "ui-unselecting"), f.unselecting = !d, f.selecting = d, (f.selected = d) ? e._trigger("selecting",
                b, { selecting: f.element }) : e._trigger("unselecting", b, { unselecting: f.element }), !1
            }))
        }, _mouseDrag: function (b) {
            this.dragged = !0; if (!this.options.disabled) {
                var e, d = this, f = this.options, g = this.opos[0], h = this.opos[1], p = b.pageX, t = b.pageY; g > p && (e = p, p = g, g = e); h > t && (e = t, t = h, h = e); this.helper.css({ left: g, top: h, width: p - g, height: t - h }); this.selectees.each(function () {
                    var e = c.data(this, "selectable-item"), l = !1; e && e.element !== d.element[0] && ("touch" === f.tolerance ? l = !(e.left > p || e.right < g || e.top > t || e.bottom < h) : "fit" === f.tolerance &&
                    (l = e.left > g && e.right < p && e.top > h && e.bottom < t), l ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, d._trigger("selecting", b, { selecting: e.element }))) : (e.selecting && ((b.metaKey || b.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"),
                    e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), d._trigger("unselecting", b, { unselecting: e.element }))), !e.selected || b.metaKey || b.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, d._trigger("unselecting", b, { unselecting: e.element }))))
                }); return !1
            }
        }, _mouseStop: function (b) {
            var e = this; this.dragged = !1; c(".ui-unselecting", this.element[0]).each(function () {
                var d = c.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting"); d.unselecting = !1; d.startselected = !1; e._trigger("unselected", b, { unselected: d.element })
            }); c(".ui-selecting", this.element[0]).each(function () { var d = c.data(this, "selectable-item"); d.$element.removeClass("ui-selecting").addClass("ui-selected"); d.selecting = !1; d.selected = !0; d.startselected = !0; e._trigger("selected", b, { selected: d.element }) }); this._trigger("stop", b); this.helper.remove(); return !1
        }
    }); c.widget("ui.selectmenu", {
        version: "1.11.1", defaultElement: "<select>",
        options: { appendTo: null, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: null, change: null, close: null, focus: null, open: null, select: null }, _create: function () { var b = this.element.uniqueId().attr("id"); this.ids = { element: b, button: b + "-button", menu: b + "-menu" }; this._drawButton(); this._drawMenu(); this.options.disabled && this.disable() }, _drawButton: function () {
            var b = this, e = this.element.attr("tabindex"); this.label = c("label[for='" + this.ids.element +
            "']").attr("for", this.ids.button); this._on(this.label, { click: function (b) { this.button.focus(); b.preventDefault() } }); this.element.hide(); this.button = c("<span>", { "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all", tabindex: e || this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true" }).insertAfter(this.element); c("<span>", { "class": "ui-icon " + this.options.icons.button }).prependTo(this.button);
            this.buttonText = c("<span>", { "class": "ui-selectmenu-text" }).appendTo(this.button); this._setText(this.buttonText, this.element.find("option:selected").text()); this._resizeButton(); this._on(this.button, this._buttonEvents); this.button.one("focusin", function () { b.menuItems || b._refreshMenu() }); this._hoverable(this.button); this._focusable(this.button)
        }, _drawMenu: function () {
            var b = this; this.menu = c("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }); this.menuWrap = c("<div>", { "class": "ui-selectmenu-menu ui-front" }).append(this.menu).appendTo(this._appendTo());
            this.menuInstance = this.menu.menu({ role: "listbox", select: function (e, d) { e.preventDefault(); b._select(d.item.data("ui-selectmenu-item"), e) }, focus: function (e, d) { var c = d.item.data("ui-selectmenu-item"); null != b.focusIndex && c.index !== b.focusIndex && (b._trigger("focus", e, { item: c }), b.isOpen || b._select(c, e)); b.focusIndex = c.index; b.button.attr("aria-activedescendant", b.menuItems.eq(c.index).attr("id")) } }).menu("instance"); this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"); this.menuInstance._off(this.menu,
            "mouseleave"); this.menuInstance._closeOnDocumentClick = function () { return !1 }; this.menuInstance._isDivider = function () { return !1 }
        }, refresh: function () { this._refreshMenu(); this._setText(this.buttonText, this._getSelectedItem().text()); this.options.width || this._resizeButton() }, _refreshMenu: function () {
            this.menu.empty(); var b; b = this.element.find("option"); b.length && (this._parseOptions(b), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"),
            b = this._getSelectedItem(), this.menuInstance.focus(null, b), this._setAria(b.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        }, open: function (b) { this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", b)) }, _position: function () {
            this.menuWrap.position(c.extend({ of: this.button },
            this.options.position))
        }, close: function (b) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this._off(this.document), this._trigger("close", b)) }, widget: function () { return this.button }, menuWidget: function () { return this.menu }, _renderMenu: function (b, e) { var d = this, f = ""; c.each(e, function (e, g) { g.optgroup !== f && (c("<li>", { "class": "ui-selectmenu-optgroup ui-menu-divider" + (g.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""), text: g.optgroup }).appendTo(b), f = g.optgroup); d._renderItemData(b, g) }) },
        _renderItemData: function (b, e) { return this._renderItem(b, e).data("ui-selectmenu-item", e) }, _renderItem: function (b, e) { var d = c("<li>"); e.disabled && d.addClass("ui-state-disabled"); this._setText(d, e.label); return d.appendTo(b) }, _setText: function (b, e) { e ? b.text(e) : b.html("&#160;") }, _move: function (b, e) {
            var d, c = ".ui-menu-item"; this.isOpen ? d = this.menuItems.eq(this.focusIndex) : (d = this.menuItems.eq(this.element[0].selectedIndex), c += ":not(.ui-state-disabled)"); d = "first" === b || "last" === b ? d["first" === b ? "prevAll" :
            "nextAll"](c).eq(-1) : d[b + "All"](c).eq(0); d.length && this.menuInstance.focus(e, d)
        }, _getSelectedItem: function () { return this.menuItems.eq(this.element[0].selectedIndex) }, _toggle: function (b) { this[this.isOpen ? "close" : "open"](b) }, _documentClick: { mousedown: function (b) { this.isOpen && (c(b.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(b)) } }, _buttonEvents: {
            mousedown: function (b) { b.preventDefault() }, click: "_toggle", keydown: function (b) {
                var e = !0; switch (b.keyCode) {
                    case c.ui.keyCode.TAB: case c.ui.keyCode.ESCAPE: this.close(b);
                        e = !1; break; case c.ui.keyCode.ENTER: this.isOpen && this._selectFocusedItem(b); break; case c.ui.keyCode.UP: b.altKey ? this._toggle(b) : this._move("prev", b); break; case c.ui.keyCode.DOWN: b.altKey ? this._toggle(b) : this._move("next", b); break; case c.ui.keyCode.SPACE: this.isOpen ? this._selectFocusedItem(b) : this._toggle(b); break; case c.ui.keyCode.LEFT: this._move("prev", b); break; case c.ui.keyCode.RIGHT: this._move("next", b); break; case c.ui.keyCode.HOME: case c.ui.keyCode.PAGE_UP: this._move("first", b); break; case c.ui.keyCode.END: case c.ui.keyCode.PAGE_DOWN: this._move("last",
                        b); break; default: this.menu.trigger(b), e = !1
                } e && b.preventDefault()
            }
        }, _selectFocusedItem: function (b) { var e = this.menuItems.eq(this.focusIndex); e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), b) }, _select: function (b, e) { var d = this.element[0].selectedIndex; this.element[0].selectedIndex = b.index; this._setText(this.buttonText, b.label); this._setAria(b); this._trigger("select", e, { item: b }); b.index !== d && this._trigger("change", e, { item: b }); this.close(e) }, _setAria: function (b) {
            b = this.menuItems.eq(b.index).attr("id");
            this.button.attr({ "aria-labelledby": b, "aria-activedescendant": b }); this.menu.attr("aria-activedescendant", b)
        }, _setOption: function (b, e) {
            "icons" === b && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button); this._super(b, e); "appendTo" === b && this.menuWrap.appendTo(this._appendTo()); "disabled" === b && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex",
            -1), this.close()) : this.button.attr("tabindex", 0)); "width" === b && this._resizeButton()
        }, _appendTo: function () { var b = this.options.appendTo; b && (b = b.jquery || b.nodeType ? c(b) : this.document.find(b).eq(0)); b && b[0] || (b = this.element.closest(".ui-front")); b.length || (b = this.document[0].body); return b }, _toggleAttr: function () {
            this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen); this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen); this.menu.attr("aria-hidden",
            !this.isOpen)
        }, _resizeButton: function () { var b = this.options.width; b || (b = this.element.show().outerWidth(), this.element.hide()); this.button.outerWidth(b) }, _resizeMenu: function () { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) }, _getCreateOptions: function () { return { disabled: this.element.prop("disabled") } }, _parseOptions: function (b) {
            var e = []; b.each(function (b, f) {
                var g = c(f), h = g.parent("optgroup"); e.push({
                    element: g, index: b, value: g.attr("value"), label: g.text(), optgroup: h.attr("label") ||
                    "", disabled: h.prop("disabled") || g.prop("disabled")
                })
            }); this.items = e
        }, _destroy: function () { this.menuWrap.remove(); this.button.remove(); this.element.show(); this.element.removeUniqueId(); this.label.attr("for", this.ids.element) }
    }); c.widget("ui.slider", c.ui.mouse, {
        version: "1.11.1", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function () {
            this._mouseSliding =
            this._keySliding = !1; this._animateOff = !0; this._handleIndex = null; this._detectOrientation(); this._mouseInit(); this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"); this._refresh(); this._setOption("disabled", this.options.disabled); this._animateOff = !1
        }, _refresh: function () { this._createRange(); this._createHandles(); this._setupEvents(); this._refreshValue() }, _createHandles: function () {
            var b, e; b = this.options; var d = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
            f = []; e = b.values && b.values.length || 1; d.length > e && (d.slice(e).remove(), d = d.slice(0, e)); for (b = d.length; e > b; b++) f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>"); this.handles = d.add(c(f.join("")).appendTo(this.element)); this.handle = this.handles.eq(0); this.handles.each(function (b) { c(this).data("ui-slider-handle-index", b) })
        }, _createRange: function () {
            var b = this.options, e = ""; b.range ? (!0 === b.range && (b.values ? b.values.length && 2 !== b.values.length ? b.values = [b.values[0],
            b.values[0]] : c.isArray(b.values) && (b.values = b.values.slice(0)) : b.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = c("<div></div>").appendTo(this.element), e = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(e + ("min" === b.range || "max" === b.range ? " ui-slider-range-" + b.range : ""))) : (this.range && this.range.remove(), this.range = null)
        }, _setupEvents: function () {
            this._off(this.handles);
            this._on(this.handles, this._handleEvents); this._hoverable(this.handles); this._focusable(this.handles)
        }, _destroy: function () { this.handles.remove(); this.range && this.range.remove(); this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"); this._mouseDestroy() }, _mouseCapture: function (b) {
            var e, d, f, g, h, p = this, t = this.options; if (t.disabled) return !1; this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }; this.elementOffset =
            this.element.offset(); e = this._normValueFromMouse({ x: b.pageX, y: b.pageY }); d = this._valueMax() - this._valueMin() + 1; this.handles.each(function (b) { var h = Math.abs(e - p.values(b)); if (d > h || d === h && (b === p._lastChangedValue || p.values(b) === t.min)) d = h, f = c(this), g = b }); if (!1 === this._start(b, g)) return !1; this._mouseSliding = !0; this._handleIndex = g; f.addClass("ui-state-active").focus(); h = f.offset(); this._clickOffset = c(b.target).parents().addBack().is(".ui-slider-handle") ? {
                left: b.pageX - h.left - f.width() / 2, top: b.pageY - h.top -
                f.height() / 2 - (parseInt(f.css("borderTopWidth"), 10) || 0) - (parseInt(f.css("borderBottomWidth"), 10) || 0) + (parseInt(f.css("marginTop"), 10) || 0)
            } : { left: 0, top: 0 }; this.handles.hasClass("ui-state-hover") || this._slide(b, g, e); return this._animateOff = !0
        }, _mouseStart: function () { return !0 }, _mouseDrag: function (b) { this._slide(b, this._handleIndex, this._normValueFromMouse({ x: b.pageX, y: b.pageY })); return !1 }, _mouseStop: function (b) {
            this.handles.removeClass("ui-state-active"); this._mouseSliding = !1; this._stop(b, this._handleIndex);
            this._change(b, this._handleIndex); this._clickOffset = this._handleIndex = null; return this._animateOff = !1
        }, _detectOrientation: function () { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function (b) {
            var e; "horizontal" === this.orientation ? (e = this.elementSize.width, b = b.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, b = b.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)); e = b / e; 1 < e && (e = 1);
            0 > e && (e = 0); "vertical" === this.orientation && (e = 1 - e); return this._trimAlignValue(this._valueMin() + e * (this._valueMax() - this._valueMin()))
        }, _start: function (b, e) { var d = { handle: this.handles[e], value: this.value() }; this.options.values && this.options.values.length && (d.value = this.values(e), d.values = this.values()); return this._trigger("start", b, d) }, _slide: function (b, e, d) {
            var c; this.options.values && this.options.values.length ? (c = this.values(e ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === e &&
            d > c || 1 === e && c > d) && (d = c), d !== this.values(e) && (c = this.values(), c[e] = d, b = this._trigger("slide", b, { handle: this.handles[e], value: d, values: c }), this.values(e ? 0 : 1), !1 !== b && this.values(e, d))) : d !== this.value() && (b = this._trigger("slide", b, { handle: this.handles[e], value: d }), !1 !== b && this.value(d))
        }, _stop: function (b, e) { var d = { handle: this.handles[e], value: this.value() }; this.options.values && this.options.values.length && (d.value = this.values(e), d.values = this.values()); this._trigger("stop", b, d) }, _change: function (b, e) {
            if (!this._keySliding &&
            !this._mouseSliding) { var d = { handle: this.handles[e], value: this.value() }; this.options.values && this.options.values.length && (d.value = this.values(e), d.values = this.values()); this._lastChangedValue = e; this._trigger("change", b, d) }
        }, value: function (b) { if (!arguments.length) return this._value(); this.options.value = this._trimAlignValue(b); this._refreshValue(); this._change(null, 0) }, values: function (b, e) {
            var d, f, g; if (1 < arguments.length) this.options.values[b] = this._trimAlignValue(e), this._refreshValue(), this._change(null,
            b); else { if (!arguments.length) return this._values(); if (!c.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(b) : this.value(); d = this.options.values; f = arguments[0]; for (g = 0; g < d.length; g += 1) d[g] = this._trimAlignValue(f[g]), this._change(null, g); this._refreshValue() }
        }, _setOption: function (b, e) {
            var d, f = 0; "range" === b && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length -
            1), this.options.values = null)); c.isArray(this.options.values) && (f = this.options.values.length); "disabled" === b && this.element.toggleClass("ui-state-disabled", !!e); this._super(b, e); switch (b) {
                case "orientation": this._detectOrientation(); this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation); this._refreshValue(); this.handles.css("horizontal" === e ? "bottom" : "left", ""); break; case "value": this._animateOff = !0; this._refreshValue(); this._change(null, 0); this._animateOff =
                !1; break; case "values": this._animateOff = !0; this._refreshValue(); for (d = 0; f > d; d += 1) this._change(null, d); this._animateOff = !1; break; case "min": case "max": this._animateOff = !0; this._refreshValue(); this._animateOff = !1; break; case "range": this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        }, _value: function () { var b = this.options.value; return b = this._trimAlignValue(b) }, _values: function (b) {
            var e, d; if (arguments.length) return e = this.options.values[b], e = this._trimAlignValue(e); if (this.options.values && this.options.values.length) {
                e =
                this.options.values.slice(); for (d = 0; d < e.length; d += 1) e[d] = this._trimAlignValue(e[d]); return e
            } return []
        }, _trimAlignValue: function (b) { if (b <= this._valueMin()) return this._valueMin(); if (b >= this._valueMax()) return this._valueMax(); var e = 0 < this.options.step ? this.options.step : 1, d = (b - this._valueMin()) % e; b = b - d; 2 * Math.abs(d) >= e && (b += 0 < d ? e : -e); return parseFloat(b.toFixed(5)) }, _valueMin: function () { return this.options.min }, _valueMax: function () { return this.options.max }, _refreshValue: function () {
            var b, e, d, f, g, h = this.options.range,
            p = this.options, t = this, l = this._animateOff ? !1 : p.animate, n = {}; this.options.values && this.options.values.length ? this.handles.each(function (d) {
                e = (t.values(d) - t._valueMin()) / (t._valueMax() - t._valueMin()) * 100; n["horizontal" === t.orientation ? "left" : "bottom"] = e + "%"; c(this).stop(1, 1)[l ? "animate" : "css"](n, p.animate); !0 === t.options.range && ("horizontal" === t.orientation ? (0 === d && t.range.stop(1, 1)[l ? "animate" : "css"]({ left: e + "%" }, p.animate), 1 === d && t.range[l ? "animate" : "css"]({ width: e - b + "%" }, { queue: !1, duration: p.animate })) :
                (0 === d && t.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: e + "%" }, p.animate), 1 === d && t.range[l ? "animate" : "css"]({ height: e - b + "%" }, { queue: !1, duration: p.animate }))); b = e
            }) : (d = this.value(), f = this._valueMin(), g = this._valueMax(), e = g !== f ? (d - f) / (g - f) * 100 : 0, n["horizontal" === this.orientation ? "left" : "bottom"] = e + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](n, p.animate), "min" === h && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: e + "%" }, p.animate), "max" === h && "horizontal" === this.orientation &&
            this.range[l ? "animate" : "css"]({ width: 100 - e + "%" }, { queue: !1, duration: p.animate }), "min" === h && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: e + "%" }, p.animate), "max" === h && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - e + "%" }, { queue: !1, duration: p.animate }))
        }, _handleEvents: {
            keydown: function (b) {
                var e, d, f, g = c(b.target).data("ui-slider-handle-index"); switch (b.keyCode) {
                    case c.ui.keyCode.HOME: case c.ui.keyCode.END: case c.ui.keyCode.PAGE_UP: case c.ui.keyCode.PAGE_DOWN: case c.ui.keyCode.UP: case c.ui.keyCode.RIGHT: case c.ui.keyCode.DOWN: case c.ui.keyCode.LEFT: if (b.preventDefault(),
                    !this._keySliding && (this._keySliding = !0, c(b.target).addClass("ui-state-active"), e = this._start(b, g), !1 === e)) return
                } f = this.options.step; e = d = this.options.values && this.options.values.length ? this.values(g) : this.value(); switch (b.keyCode) {
                    case c.ui.keyCode.HOME: d = this._valueMin(); break; case c.ui.keyCode.END: d = this._valueMax(); break; case c.ui.keyCode.PAGE_UP: d = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages); break; case c.ui.keyCode.PAGE_DOWN: d = this._trimAlignValue(e - (this._valueMax() -
                    this._valueMin()) / this.numPages); break; case c.ui.keyCode.UP: case c.ui.keyCode.RIGHT: if (e === this._valueMax()) return; d = this._trimAlignValue(e + f); break; case c.ui.keyCode.DOWN: case c.ui.keyCode.LEFT: if (e === this._valueMin()) return; d = this._trimAlignValue(e - f)
                } this._slide(b, g, d)
            }, keyup: function (b) { var e = c(b.target).data("ui-slider-handle-index"); this._keySliding && (this._keySliding = !1, this._stop(b, e), this._change(b, e), c(b.target).removeClass("ui-state-active")) }
        }
    }); c.widget("ui.sortable", c.ui.mouse, {
        version: "1.11.1",
        widgetEventPrefix: "sort", ready: !1, options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1E3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function (b, e, d) { return b >= e && e + d > b }, _isFloating: function (b) { return /left|right/.test(b.css("float")) || /inline|table-cell/.test(b.css("display")) }, _create: function () { var b = this.options; this.containerCache = {}; this.element.addClass("ui-sortable"); this.refresh(); this.floating = this.items.length ? "x" === b.axis || this._isFloating(this.items[0].item) : !1; this.offset = this.element.offset(); this._mouseInit(); this._setHandleClassName(); this.ready = !0 }, _setOption: function (b, e) {
            this._super(b, e); "handle" ===
            b && this._setHandleClassName()
        }, _setHandleClassName: function () { this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"); c.each(this.items, function () { (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle") }) }, _destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"); this._mouseDestroy(); for (var b = this.items.length - 1; 0 <= b; b--) this.items[b].item.removeData(this.widgetName +
            "-item"); return this
        }, _mouseCapture: function (b, e) {
            var d = null, f = !1, g = this; if (this.reverting || this.options.disabled || "static" === this.options.type) return !1; this._refreshItems(b); c(b.target).parents().each(function () { if (c.data(this, g.widgetName + "-item") === g) return d = c(this), !1 }); c.data(b.target, g.widgetName + "-item") === g && (d = c(b.target)); if (!d || this.options.handle && !e && (c(this.options.handle, d).find("*").addBack().each(function () { this === b.target && (f = !0) }), !f)) return !1; this.currentItem = d; this._removeCurrentsFromItems();
            return !0
        }, _mouseStart: function (b, e, d) {
            var f; e = this.options; this.currentContainer = this; this.refreshPositions(); this.helper = this._createHelper(b); this._cacheHelperProportions(); this._cacheMargins(); this.scrollParent = this.helper.scrollParent(); this.offset = this.currentItem.offset(); this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }; c.extend(this.offset, { click: { left: b.pageX - this.offset.left, top: b.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() });
            this.helper.css("position", "absolute"); this.cssPosition = this.helper.css("position"); this.originalPosition = this._generatePosition(b); this.originalPageX = b.pageX; this.originalPageY = b.pageY; e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt); this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }; this.helper[0] !== this.currentItem[0] && this.currentItem.hide(); this._createPlaceholder(); e.containment && this._setContainment(); e.cursor && "auto" !== e.cursor && (f = this.document.find("body"),
            this.storedCursor = f.css("cursor"), f.css("cursor", e.cursor), this.storedStylesheet = c("<style>*{ cursor: " + e.cursor + " !important; }</style>").appendTo(f)); e.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", e.opacity)); e.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", e.zIndex)); this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset());
            this._trigger("start", b, this._uiHash()); this._preserveHelperProportions || this._cacheHelperProportions(); if (!d) for (d = this.containers.length - 1; 0 <= d; d--) this.containers[d]._trigger("activate", b, this._uiHash(this)); c.ui.ddmanager && (c.ui.ddmanager.current = this); c.ui.ddmanager && !e.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, b); this.dragging = !0; this.helper.addClass("ui-sortable-helper"); this._mouseDrag(b); return !0
        }, _mouseDrag: function (b) {
            var e, d, f, g; e = this.options; d = !1; this.position = this._generatePosition(b);
            this.positionAbs = this._convertPositionTo("absolute"); this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs); this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - b.pageY < e.scrollSensitivity ? this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop + e.scrollSpeed : b.pageY - this.overflowOffset.top < e.scrollSensitivity && (this.scrollParent[0].scrollTop = d = this.scrollParent[0].scrollTop - e.scrollSpeed),
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - b.pageX < e.scrollSensitivity ? this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft + e.scrollSpeed : b.pageX - this.overflowOffset.left < e.scrollSensitivity && (this.scrollParent[0].scrollLeft = d = this.scrollParent[0].scrollLeft - e.scrollSpeed)) : (b.pageY - c(document).scrollTop() < e.scrollSensitivity ? d = c(document).scrollTop(c(document).scrollTop() - e.scrollSpeed) : c(window).height() - (b.pageY - c(document).scrollTop()) < e.scrollSensitivity && (d = c(document).scrollTop(c(document).scrollTop() +
            e.scrollSpeed)), b.pageX - c(document).scrollLeft() < e.scrollSensitivity ? d = c(document).scrollLeft(c(document).scrollLeft() - e.scrollSpeed) : c(window).width() - (b.pageX - c(document).scrollLeft()) < e.scrollSensitivity && (d = c(document).scrollLeft(c(document).scrollLeft() + e.scrollSpeed))), !1 !== d && c.ui.ddmanager && !e.dropBehaviour && c.ui.ddmanager.prepareOffsets(this, b)); this.positionAbs = this._convertPositionTo("absolute"); this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px");
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"); for (e = this.items.length - 1; 0 <= e; e--) if (d = this.items[e], f = d.item[0], (g = this._intersectsWithPointer(d)) && d.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[1 === g ? "next" : "prev"]()[0] !== f && !c.contains(this.placeholder[0], f) && ("semi-dynamic" === this.options.type ? !c.contains(this.element[0], f) : 1)) {
                this.direction = 1 === g ? "down" : "up"; if ("pointer" !== this.options.tolerance && !this._intersectsWithSides(d)) break;
                this._rearrange(b, d); this._trigger("change", b, this._uiHash()); break
            } this._contactContainers(b); c.ui.ddmanager && c.ui.ddmanager.drag(this, b); this._trigger("sort", b, this._uiHash()); this.lastPositionAbs = this.positionAbs; return !1
        }, _mouseStop: function (b, e) {
            if (b) {
                c.ui.ddmanager && !this.options.dropBehaviour && c.ui.ddmanager.drop(this, b); if (this.options.revert) {
                    var d = this, f = this.placeholder.offset(), g = this.options.axis, h = {}; g && "x" !== g || (h.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] ===
                    document.body ? 0 : this.offsetParent[0].scrollLeft)); g && "y" !== g || (h.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)); this.reverting = !0; c(this.helper).animate(h, parseInt(this.options.revert, 10) || 500, function () { d._clear(b) })
                } else this._clear(b, e); return !1
            }
        }, cancel: function () {
            if (this.dragging) {
                this._mouseUp({ target: null }); "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; 0 <= b; b--) this.containers[b]._trigger("deactivate", null, this._uiHash(this)), this.containers[b].containerCache.over && (this.containers[b]._trigger("out", null, this._uiHash(this)), this.containers[b].containerCache.over = 0)
            } this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), c.extend(this, {
                helper: null, dragging: !1,
                reverting: !1, _noFinalSort: null
            }), this.domPosition.prev ? c(this.domPosition.prev).after(this.currentItem) : c(this.domPosition.parent).prepend(this.currentItem)); return this
        }, serialize: function (b) { var e = this._getItemsAsjQuery(b && b.connected), d = []; b = b || {}; c(e).each(function () { var e = (c(b.item || this).attr(b.attribute || "id") || "").match(b.expression || /(.+)[\-=_](.+)/); e && d.push((b.key || e[1] + "[]") + "=" + (b.key && b.expression ? e[1] : e[2])) }); !d.length && b.key && d.push(b.key + "="); return d.join("&") }, toArray: function (b) {
            var e =
            this._getItemsAsjQuery(b && b.connected), d = []; b = b || {}; e.each(function () { d.push(c(b.item || this).attr(b.attribute || "id") || "") }); return d
        }, _intersectsWith: function (b) {
            var e = this.positionAbs.left, d = e + this.helperProportions.width, c = this.positionAbs.top, f = c + this.helperProportions.height, g = b.left, h = g + b.width, p = b.top, l = p + b.height, n = this.offset.click.top, q = this.offset.click.left, q = "y" === this.options.axis || e + q > g && h > e + q, n = ("x" === this.options.axis || c + n > p && l > c + n) && q; return "pointer" === this.options.tolerance || this.options.forcePointerForContainers ||
            "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > b[this.floating ? "width" : "height"] ? n : g < e + this.helperProportions.width / 2 && d - this.helperProportions.width / 2 < h && p < c + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < l
        }, _intersectsWithPointer: function (b) {
            var e = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, b.left, b.width), d = this._getDragVerticalDirection(), c = this._getDragHorizontalDirection(); return ("x" ===
            this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, b.top, b.height)) && e ? this.floating ? c && "right" === c || "down" === d ? 2 : 1 : d && ("down" === d ? 2 : 1) : !1
        }, _intersectsWithSides: function (b) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, b.top + b.height / 2, b.height); b = this._isOverAxis(this.positionAbs.left + this.offset.click.left, b.left + b.width / 2, b.width); var d = this._getDragVerticalDirection(), c = this._getDragHorizontalDirection(); return this.floating && c ? "right" === c && b || "left" ===
            c && !b : d && ("down" === d && e || "up" === d && !e)
        }, _getDragVerticalDirection: function () { var b = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== b && (0 < b ? "down" : "up") }, _getDragHorizontalDirection: function () { var b = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== b && (0 < b ? "right" : "left") }, refresh: function (b) { this._refreshItems(b); this._setHandleClassName(); this.refreshPositions(); return this }, _connectWith: function () { var b = this.options; return b.connectWith.constructor === String ? [b.connectWith] : b.connectWith },
        _getItemsAsjQuery: function (b) {
            function e() { h.push(this) } var d, f, g, h = [], p = [], l = this._connectWith(); if (l && b) for (b = l.length - 1; 0 <= b; b--) for (f = c(l[b]), d = f.length - 1; 0 <= d; d--) (g = c.data(f[d], this.widgetFullName)) && g !== this && !g.options.disabled && p.push([c.isFunction(g.options.items) ? g.options.items.call(g.element) : c(g.options.items, g.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), g]); p.push([c.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : c(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]); for (b = p.length - 1; 0 <= b; b--) p[b][0].each(e); return c(h)
        }, _removeCurrentsFromItems: function () { var b = this.currentItem.find(":data(" + this.widgetName + "-item)"); this.items = c.grep(this.items, function (e) { for (var d = 0; d < b.length; d++) if (b[d] === e.item[0]) return !1; return !0 }) }, _refreshItems: function (b) {
            this.items = []; this.containers = [this]; var e, d, f, g, h, p = this.items, l = [[c.isFunction(this.options.items) ?
            this.options.items.call(this.element[0], b, { item: this.currentItem }) : c(this.options.items, this.element), this]]; if ((h = this._connectWith()) && this.ready) for (e = h.length - 1; 0 <= e; e--) for (f = c(h[e]), d = f.length - 1; 0 <= d; d--) (g = c.data(f[d], this.widgetFullName)) && g !== this && !g.options.disabled && (l.push([c.isFunction(g.options.items) ? g.options.items.call(g.element[0], b, { item: this.currentItem }) : c(g.options.items, g.element), g]), this.containers.push(g)); for (e = l.length - 1; 0 <= e; e--) for (b = l[e][1], f = l[e][0], d = 0, h = f.length; h >
            d; d++) g = c(f[d]), g.data(this.widgetName + "-item", b), p.push({ item: g, instance: b, width: 0, height: 0, left: 0, top: 0 })
        }, refreshPositions: function (b) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()); var e, d, f; for (e = this.items.length - 1; 0 <= e; e--) d = this.items[e], d.instance !== this.currentContainer && this.currentContainer && d.item[0] !== this.currentItem[0] || (f = this.options.toleranceElement ? c(this.options.toleranceElement, d.item) : d.item, b || (d.width = f.outerWidth(), d.height = f.outerHeight()),
            f = f.offset(), d.left = f.left, d.top = f.top); if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (e = this.containers.length - 1; 0 <= e; e--) f = this.containers[e].element.offset(), this.containers[e].containerCache.left = f.left, this.containers[e].containerCache.top = f.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight(); return this
        }, _createPlaceholder: function (b) {
            b =
            b || this; var e, d = b.options; d.placeholder && d.placeholder.constructor !== String || (e = d.placeholder, d.placeholder = {
                element: function () {
                    var d = b.currentItem[0].nodeName.toLowerCase(), f = c("<" + d + ">", b.document[0]).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper"); "tr" === d ? b.currentItem.children().each(function () { c("<td>&#160;</td>", b.document[0]).attr("colspan", c(this).attr("colspan") || 1).appendTo(f) }) : "img" === d && f.attr("src", b.currentItem.attr("src")); e || f.css("visibility",
                    "hidden"); return f
                }, update: function (c, f) { if (!e || d.forcePlaceholderSize) f.height() || f.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10)), f.width() || f.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10)) }
            }); b.placeholder = c(d.placeholder.element.call(b.element, b.currentItem)); b.currentItem.after(b.placeholder); d.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (b) {
            var e, d, f, g, h, p, l, n, q = g = null; for (e = this.containers.length - 1; 0 <= e; e--) c.contains(this.currentItem[0], this.containers[e].element[0]) || (this._intersectsWith(this.containers[e].containerCache) ? g && c.contains(this.containers[e].element[0], g.element[0]) || (g = this.containers[e], q = e) : this.containers[e].containerCache.over && (this.containers[e]._trigger("out", b, this._uiHash(this)), this.containers[e].containerCache.over = 0)); if (g) if (1 === this.containers.length) this.containers[q].containerCache.over ||
            (this.containers[q]._trigger("over", b, this._uiHash(this)), this.containers[q].containerCache.over = 1); else {
                e = 1E4; f = null; g = (d = g.floating || this._isFloating(this.currentItem)) ? "left" : "top"; h = d ? "width" : "height"; n = d ? "clientX" : "clientY"; for (d = this.items.length - 1; 0 <= d; d--) c.contains(this.containers[q].element[0], this.items[d].item[0]) && this.items[d].item[0] !== this.currentItem[0] && (p = this.items[d].item.offset()[g], l = !1, b[n] - p > this.items[d][h] / 2 && (l = !0), Math.abs(b[n] - p) < e && (e = Math.abs(b[n] - p), f = this.items[d],
                this.direction = l ? "up" : "down")); (f || this.options.dropOnEmpty) && this.currentContainer !== this.containers[q] && (f ? this._rearrange(b, f, null, !0) : this._rearrange(b, null, this.containers[q].element, !0), this._trigger("change", b, this._uiHash()), this.containers[q]._trigger("change", b, this._uiHash(this)), this.currentContainer = this.containers[q], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[q]._trigger("over", b, this._uiHash(this)), this.containers[q].containerCache.over =
                1)
            }
        }, _createHelper: function (b) {
            var e = this.options; b = c.isFunction(e.helper) ? c(e.helper.apply(this.element[0], [b, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem; b.parents("body").length || c("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(b[0]); b[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }); b[0].style.width && !e.forceHelperSize || b.width(this.currentItem.width()); b[0].style.height && !e.forceHelperSize || b.height(this.currentItem.height()); return b
        }, _adjustOffsetFromHelper: function (b) {
            "string" == typeof b && (b = b.split(" ")); c.isArray(b) && (b = { left: +b[0], top: +b[1] || 0 }); "left" in b && (this.offset.click.left = b.left + this.margins.left); "right" in b && (this.offset.click.left = this.helperProportions.width - b.right + this.margins.left); "top" in b && (this.offset.click.top = b.top +
            this.margins.top); "bottom" in b && (this.offset.click.top = this.helperProportions.height - b.bottom + this.margins.top)
        }, _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent(); var b = this.offsetParent.offset(); "absolute" === this.cssPosition && this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) && (b.left += this.scrollParent.scrollLeft(), b.top += this.scrollParent.scrollTop()); (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() &&
            c.ui.ie) && (b = { top: 0, left: 0 }); return { top: b.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: b.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        }, _getRelativeOffset: function () { if ("relative" === this.cssPosition) { var b = this.currentItem.position(); return { top: b.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: b.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } }, _cacheMargins: function () {
            this.margins =
            { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 }
        }, _cacheHelperProportions: function () { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } }, _setContainment: function () {
            var b, e, d; e = this.options; "parent" === e.containment && (e.containment = this.helper[0].parentNode); "document" !== e.containment && "window" !== e.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top -
            this.offset.parent.top, c("document" === e.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (c("document" === e.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]); /^(document|window|parent)$/.test(e.containment) || (b = c(e.containment)[0], e = c(e.containment).offset(), d = "hidden" !== c(b).css("overflow"), this.containment = [e.left + (parseInt(c(b).css("borderLeftWidth"), 10) || 0) + (parseInt(c(b).css("paddingLeft"),
            10) || 0) - this.margins.left, e.top + (parseInt(c(b).css("borderTopWidth"), 10) || 0) + (parseInt(c(b).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (d ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(c(b).css("borderLeftWidth"), 10) || 0) - (parseInt(c(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (d ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(c(b).css("borderTopWidth"), 10) || 0) - (parseInt(c(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height -
            this.margins.top])
        }, _convertPositionTo: function (b, e) {
            e || (e = this.position); var d = "absolute" === b ? 1 : -1, f = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, g = /(html|body)/i.test(f[0].tagName); return {
                top: e.top + this.offset.relative.top * d + this.offset.parent.top * d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : g ? 0 : f.scrollTop()) * d, left: e.left + this.offset.relative.left * d + this.offset.parent.left *
                d - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : g ? 0 : f.scrollLeft()) * d
            }
        }, _generatePosition: function (b) {
            var e, d, f = this.options; d = b.pageX; e = b.pageY; var g = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && c.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, h = /(html|body)/i.test(g[0].tagName); "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
            this.originalPosition && (this.containment && (b.pageX - this.offset.click.left < this.containment[0] && (d = this.containment[0] + this.offset.click.left), b.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), b.pageX - this.offset.click.left > this.containment[2] && (d = this.containment[2] + this.offset.click.left), b.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), f.grid && (e = this.originalPageY + Math.round((e - this.originalPageY) / f.grid[1]) *
            f.grid[1], e = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - f.grid[1] : e + f.grid[1] : e, d = this.originalPageX + Math.round((d - this.originalPageX) / f.grid[0]) * f.grid[0], d = this.containment ? d - this.offset.click.left >= this.containment[0] && d - this.offset.click.left <= this.containment[2] ? d : d - this.offset.click.left >= this.containment[0] ? d - f.grid[0] : d + f.grid[0] : d)); return {
                top: e - this.offset.click.top - this.offset.relative.top -
                this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : g.scrollTop()), left: d - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : g.scrollLeft())
            }
        }, _rearrange: function (b, e, d, c) {
            d ? d[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling); var f = this.counter = this.counter ? ++this.counter : 1; this._delay(function () {
                f ===
                this.counter && this.refreshPositions(!c)
            })
        }, _clear: function (b, e) {
            function d(b, d, e) { return function (c) { e._trigger(b, c, d._uiHash(d)) } } this.reverting = !1; var c, f = []; !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem); this._noFinalSort = null; if (this.helper[0] === this.currentItem[0]) { for (c in this._storedCSS) "auto" !== this._storedCSS[c] && "static" !== this._storedCSS[c] || (this._storedCSS[c] = ""); this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") } else this.currentItem.show();
            this.fromOutside && !e && f.push(function (b) { this._trigger("receive", b, this._uiHash(this.fromOutside)) }); !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || f.push(function (b) { this._trigger("update", b, this._uiHash()) }); this === this.currentContainer || e || (f.push(function (b) { this._trigger("remove", b, this._uiHash()) }), f.push(function (b) { return function (d) { b._trigger("receive", d, this._uiHash(this)) } }.call(this,
            this.currentContainer)), f.push(function (b) { return function (d) { b._trigger("update", d, this._uiHash(this)) } }.call(this, this.currentContainer))); for (c = this.containers.length - 1; 0 <= c; c--) e || f.push(d("deactivate", this, this.containers[c])), this.containers[c].containerCache.over && (f.push(d("out", this, this.containers[c])), this.containers[c].containerCache.over = 0); this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()); this._storedOpacity && this.helper.css("opacity",
            this._storedOpacity); this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex); this.dragging = !1; if (this.cancelHelperRemoval) { if (!e) { this._trigger("beforeStop", b, this._uiHash()); for (c = 0; c < f.length; c++) f[c].call(this, b); this._trigger("stop", b, this._uiHash()) } return this.fromOutside = !1 } e || this._trigger("beforeStop", b, this._uiHash()); this.placeholder[0].parentNode.removeChild(this.placeholder[0]); this.helper[0] !== this.currentItem[0] && this.helper.remove(); this.helper =
            null; if (!e) { for (c = 0; c < f.length; c++) f[c].call(this, b); this._trigger("stop", b, this._uiHash()) } this.fromOutside = !1; return !0
        }, _trigger: function () { !1 === c.Widget.prototype._trigger.apply(this, arguments) && this.cancel() }, _uiHash: function (b) { var e = b || this; return { helper: e.helper, placeholder: e.placeholder || c([]), position: e.position, originalPosition: e.originalPosition, offset: e.positionAbs, item: e.currentItem, sender: b ? b.element : null } }
    }); c.widget("ui.spinner", {
        version: "1.11.1", defaultElement: "<input>", widgetEventPrefix: "spin",
        options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null }, _create: function () { this._setOption("max", this.options.max); this._setOption("min", this.options.min); this._setOption("step", this.options.step); "" !== this.value() && this._value(this.element.val(), !0); this._draw(); this._on(this._events); this._refresh(); this._on(this.window, { beforeunload: function () { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function () { var b = {}, e = this.element; c.each(["min", "max", "step"], function (d, c) { var f = e.attr(c); void 0 !== f && f.length && (b[c] = f) }); return b }, _events: {
            keydown: function (b) { this._start(b) && this._keydown(b) && b.preventDefault() }, keyup: "_stop", focus: function () { this.previous = this.element.val() }, blur: function (b) { this.cancelBlur ? delete this.cancelBlur : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", b)) }, mousewheel: function (b, e) {
                if (e) {
                    if (!this.spinning &&
                    !this._start(b)) return !1; this._spin((0 < e ? 1 : -1) * this.options.step, b); clearTimeout(this.mousewheelTimer); this.mousewheelTimer = this._delay(function () { this.spinning && this._stop(b) }, 100); b.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (b) {
                function e() { this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function () { this.previous = d })) } var d; d = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(); b.preventDefault(); e.call(this);
                this.cancelBlur = !0; this._delay(function () { delete this.cancelBlur; e.call(this) }); !1 !== this._start(b) && this._repeat(null, c(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (b) { if (c(b.currentTarget).hasClass("ui-state-active")) { if (!1 === this._start(b)) return !1; this._repeat(null, c(b.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, b) } }, "mouseleave .ui-spinner-button": "_stop"
        }, _draw: function () {
            var b = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete",
            "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()); this.element.attr("role", "spinbutton"); this.buttons = b.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"); this.buttons.height() > Math.ceil(.5 * b.height()) && 0 < b.height() && b.height(b.height()); this.options.disabled && this.disable()
        }, _keydown: function (b) {
            var e = this.options, d = c.ui.keyCode; switch (b.keyCode) {
                case d.UP: return this._repeat(null, 1, b), !0; case d.DOWN: return this._repeat(null, -1, b), !0; case d.PAGE_UP: return this._repeat(null,
                e.page, b), !0; case d.PAGE_DOWN: return this._repeat(null, -e.page, b), !0
            } return !1
        }, _uiSpinnerHtml: function () { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" }, _buttonHtml: function () { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>" }, _start: function (b) {
            if (!this.spinning &&
            !1 === this._trigger("start", b)) return !1; this.counter || (this.counter = 1); return this.spinning = !0
        }, _repeat: function (b, e, d) { b = b || 500; clearTimeout(this.timer); this.timer = this._delay(function () { this._repeat(40, e, d) }, b); this._spin(e * this.options.step, d) }, _spin: function (b, e) { var d = this.value() || 0; this.counter || (this.counter = 1); d = this._adjustValue(d + b * this._increment(this.counter)); this.spinning && !1 === this._trigger("spin", e, { value: d }) || (this._value(d), this.counter++) }, _increment: function (b) {
            var e = this.options.incremental;
            return e ? c.isFunction(e) ? e(b) : Math.floor(b * b * b / 5E4 - b * b / 500 + 17 * b / 200 + 1) : 1
        }, _precision: function () { var b = this._precisionOf(this.options.step); null !== this.options.min && (b = Math.max(b, this._precisionOf(this.options.min))); return b }, _precisionOf: function (b) { b = b.toString(); var e = b.indexOf("."); return -1 === e ? 0 : b.length - e - 1 }, _adjustValue: function (b) {
            var e, d = this.options; e = null !== d.min ? d.min : 0; b = e + Math.round((b - e) / d.step) * d.step; b = parseFloat(b.toFixed(this._precision())); return null !== d.max && b > d.max ? d.max : null !==
            d.min && b < d.min ? d.min : b
        }, _stop: function (b) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", b)) }, _setOption: function (b, e) {
            if ("culture" !== b && "numberFormat" !== b) "max" !== b && "min" !== b && "step" !== b || "string" != typeof e || (e = this._parse(e)), "icons" === b && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)),
            this._super(b, e), "disabled" === b && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable")); else { var d = this._parse(this.element.val()); this.options[b] = e; this.element.val(this._format(d)) }
        }, _setOptions: h(function (b) { this._super(b) }), _parse: function (b) { "string" == typeof b && "" !== b && (b = window.fa && this.options.numberFormat ? Globalize.parseFloat(b, 10, this.options.culture) : +b); return "" === b || isNaN(b) ? null : b }, _format: function (b) {
            return "" ===
            b ? "" : window.fa && this.options.numberFormat ? Globalize.format(b, this.options.numberFormat, this.options.culture) : b
        }, _refresh: function () { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) }, isValid: function () { var b = this.value(); return null === b ? !1 : b === this._adjustValue(b) }, _value: function (b, e) { var d; "" !== b && (d = this._parse(b), null !== d && (e || (d = this._adjustValue(d)), b = this._format(d))); this.element.val(b); this._refresh() }, _destroy: function () {
            this.element.removeClass("ui-spinner-input").prop("disabled",
            !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"); this.uiSpinner.replaceWith(this.element)
        }, stepUp: h(function (b) { this._stepUp(b) }), _stepUp: function (b) { this._start() && (this._spin((b || 1) * this.options.step), this._stop()) }, stepDown: h(function (b) { this._stepDown(b) }), _stepDown: function (b) { this._start() && (this._spin((b || 1) * -this.options.step), this._stop()) }, pageUp: h(function (b) { this._stepUp((b || 1) * this.options.page) }), pageDown: h(function (b) {
            this._stepDown((b ||
            1) * this.options.page)
        }), value: function (b) { if (!arguments.length) return this._parse(this.element.val()); h(this._value).call(this, b) }, widget: function () { return this.uiSpinner }
    }); c.widget("ui.tabs", {
        version: "1.11.1", delay: 300, options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () {
            var b = /#.*$/; return function (e) {
                var d, c; e = e.cloneNode(!1); d = e.href.replace(b, ""); c = location.href.replace(b,
                ""); try { d = decodeURIComponent(d) } catch (f) { } try { c = decodeURIComponent(c) } catch (f) { } return 1 < e.hash.length && d === c
            }
        }(), _create: function () {
            var b = this, e = this.options; this.running = !1; this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", e.collapsible); this._processTabs(); e.active = this._initialActive(); c.isArray(e.disabled) && (e.disabled = c.unique(e.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"), function (d) { return b.tabs.index(d) }))).sort());
            !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(e.active) : this.active = c(); this._refresh(); this.active.length && this.load(e.active)
        }, _initialActive: function () {
            var b = this.options.active, e = this.options.collapsible, d = location.hash.substring(1); null === b && (d && this.tabs.each(function (e, f) { if (c(f).attr("aria-controls") === d) return b = e, !1 }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== b && -1 !== b || (b = this.tabs.length ? 0 : !1)); !1 !== b && (b = this.tabs.index(this.tabs.eq(b)),
            -1 === b && (b = e ? !1 : 0)); !e && !1 === b && this.anchors.length && (b = 0); return b
        }, _getCreateEventData: function () { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : c() } }, _tabKeydown: function (b) {
            var e = c(this.document[0].activeElement).closest("li"), d = this.tabs.index(e), f = !0; if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                    case c.ui.keyCode.RIGHT: case c.ui.keyCode.DOWN: d++; break; case c.ui.keyCode.UP: case c.ui.keyCode.LEFT: f = !1; d--; break; case c.ui.keyCode.END: d = this.anchors.length - 1; break;
                    case c.ui.keyCode.HOME: d = 0; break; case c.ui.keyCode.SPACE: b.preventDefault(); clearTimeout(this.activating); this._activate(d); return; case c.ui.keyCode.ENTER: b.preventDefault(); clearTimeout(this.activating); this._activate(d === this.options.active ? !1 : d); return; default: return
                } b.preventDefault(); clearTimeout(this.activating); d = this._focusNextTab(d, f); b.ctrlKey || (e.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function () { this.option("active", d) }, this.delay))
            }
        },
        _panelKeydown: function (b) { !this._handlePageNav(b) && b.ctrlKey && b.keyCode === c.ui.keyCode.UP && (b.preventDefault(), this.active.focus()) }, _handlePageNav: function (b) { if (b.altKey && b.keyCode === c.ui.keyCode.PAGE_UP) return this._activate(this._focusNextTab(this.options.active - 1, !1)), !0; if (b.altKey && b.keyCode === c.ui.keyCode.PAGE_DOWN) return this._activate(this._focusNextTab(this.options.active + 1, !0)), !0 }, _findNextTab: function (b, e) {
            function d() { b > f && (b = 0); 0 > b && (b = f); return b } for (var f = this.tabs.length - 1; -1 !==
            c.inArray(d(), this.options.disabled) ;) b = e ? b + 1 : b - 1; return b
        }, _focusNextTab: function (b, e) { b = this._findNextTab(b, e); this.tabs.eq(b).focus(); return b }, _setOption: function (b, e) { "active" !== b ? "disabled" !== b ? (this._super(b, e), "collapsible" === b && (this.element.toggleClass("ui-tabs-collapsible", e), e || !1 !== this.options.active || this._activate(0)), "event" === b && this._setupEvents(e), "heightStyle" === b && this._setupHeightStyle(e)) : this._setupDisabled(e) : this._activate(e) }, _sanitizeSelector: function (b) {
            return b ? b.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,
            "\\$&") : ""
        }, refresh: function () { var b = this.options, e = this.tablist.children(":has(a[href])"); b.disabled = c.map(e.filter(".ui-state-disabled"), function (b) { return e.index(b) }); this._processTabs(); !1 !== b.active && this.anchors.length ? this.active.length && !c.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = c()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = c()); this._refresh() },
        _refresh: function () {
            this._setupDisabled(this.options.disabled); this._setupEvents(this.options.event); this._setupHeightStyle(this.options.heightStyle); this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }); this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }); this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) :
            this.tabs.eq(0).attr("tabIndex", 0)
        }, _processTabs: function () {
            var b = this; this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (b) { c(this).is(".ui-state-disabled") && b.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () { c(this).closest("li").is(".ui-state-disabled") && this.blur() }); this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }); this.anchors = this.tabs.map(function () { return c("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }); this.panels = c(); this.anchors.each(function (e, d) {
                var f, g, h = c(d).uniqueId().attr("id"), p = c(d).closest("li"), l = p.attr("aria-controls"); b._isLocal(d) ? (f = d.hash, g = f.substring(1), f = b.element.find(b._sanitizeSelector(f))) : (g = p.attr("aria-controls") || c({}).uniqueId()[0].id, f = b.element.find("#" + g), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[e - 1] || b.tablist)),
                f.attr("aria-live", "polite")); f.length && (b.panels = b.panels.add(f)); l && p.data("ui-tabs-aria-controls", l); p.attr({ "aria-controls": g, "aria-labelledby": h }); f.attr("aria-labelledby", h)
            }); this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
        }, _getList: function () { return this.tablist || this.element.find("ol,ul").eq(0) }, _createPanel: function (b) { return c("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) }, _setupDisabled: function (b) {
            c.isArray(b) &&
            (b.length ? b.length === this.anchors.length && (b = !0) : b = !1); for (var e, d = 0; e = this.tabs[d]; d++) !0 === b || -1 !== c.inArray(d, b) ? c(e).addClass("ui-state-disabled").attr("aria-disabled", "true") : c(e).removeClass("ui-state-disabled").removeAttr("aria-disabled"); this.options.disabled = b
        }, _setupEvents: function (b) {
            var e = {}; b && c.each(b.split(" "), function (b, c) { e[c] = "_eventHandler" }); this._off(this.anchors.add(this.tabs).add(this.panels)); this._on(!0, this.anchors, { click: function (b) { b.preventDefault() } }); this._on(this.anchors,
            e); this._on(this.tabs, { keydown: "_tabKeydown" }); this._on(this.panels, { keydown: "_panelKeydown" }); this._focusable(this.tabs); this._hoverable(this.tabs)
        }, _setupHeightStyle: function (b) {
            var e, d = this.element.parent(); "fill" === b ? (e = d.height(), e -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () { var b = c(this), d = b.css("position"); "absolute" !== d && "fixed" !== d && (e -= b.outerHeight(!0)) }), this.element.children().not(this.panels).each(function () { e -= c(this).outerHeight(!0) }),
            this.panels.each(function () { c(this).height(Math.max(0, e - c(this).innerHeight() + c(this).height())) }).css("overflow", "auto")) : "auto" === b && (e = 0, this.panels.each(function () { e = Math.max(e, c(this).height("").height()) }).height(e))
        }, _eventHandler: function (b) {
            var e = this.options, d = this.active, f = c(b.currentTarget).closest("li"), g = f[0] === d[0], h = g && e.collapsible, p = h ? c() : this._getPanelForTab(f), l = d.length ? this._getPanelForTab(d) : c(), d = { oldTab: d, oldPanel: l, newTab: h ? c() : f, newPanel: p }; b.preventDefault(); f.hasClass("ui-state-disabled") ||
            f.hasClass("ui-tabs-loading") || this.running || g && !e.collapsible || !1 === this._trigger("beforeActivate", b, d) || (e.active = h ? !1 : this.tabs.index(f), this.active = g ? c() : f, this.xhr && this.xhr.abort(), l.length || p.length || c.error("jQuery UI Tabs: Mismatching fragment identifier."), p.length && this.load(this.tabs.index(f), b), this._toggle(b, d))
        }, _toggle: function (b, e) {
            function d() { g.running = !1; g._trigger("activate", b, e) } function f() {
                e.newTab.closest("li").addClass("ui-tabs-active ui-state-active"); h.length && g.options.show ?
                g._show(h, g.options.show, d) : (h.show(), d())
            } var g = this, h = e.newPanel, p = e.oldPanel; this.running = !0; p.length && this.options.hide ? this._hide(p, this.options.hide, function () { e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"); f() }) : (e.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), p.hide(), f()); p.attr("aria-hidden", "true"); e.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }); h.length && p.length ? e.oldTab.attr("tabIndex", -1) : h.length && this.tabs.filter(function () {
                return 0 ===
                c(this).attr("tabIndex")
            }).attr("tabIndex", -1); h.attr("aria-hidden", "false"); e.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        }, _activate: function (b) { b = this._findActive(b); b[0] !== this.active[0] && (b.length || (b = this.active), b = b.find(".ui-tabs-anchor")[0], this._eventHandler({ target: b, currentTarget: b, preventDefault: c.noop })) }, _findActive: function (b) { return !1 === b ? c() : this.tabs.eq(b) }, _getIndex: function (b) {
            "string" == typeof b && (b = this.anchors.index(this.anchors.filter("[href$='" +
            b + "']"))); return b
        }, _destroy: function () {
            this.xhr && this.xhr.abort(); this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"); this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"); this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(); this.tablist.unbind(this.eventNamespace); this.tabs.add(this.panels).each(function () {
                c.data(this, "ui-tabs-destroy") ?
                c(this).remove() : c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }); this.tabs.each(function () {
                var b = c(this), e = b.data("ui-tabs-aria-controls"); e ? b.attr("aria-controls", e).removeData("ui-tabs-aria-controls") :
                b.removeAttr("aria-controls")
            }); this.panels.show(); "content" !== this.options.heightStyle && this.panels.css("height", "")
        }, enable: function (b) { var e = this.options.disabled; !1 !== e && (void 0 === b ? e = !1 : (b = this._getIndex(b), e = c.isArray(e) ? c.map(e, function (d) { return d !== b ? d : null }) : c.map(this.tabs, function (d, e) { return e !== b ? e : null })), this._setupDisabled(e)) }, disable: function (b) {
            var e = this.options.disabled; if (!0 !== e) {
                if (void 0 === b) e = !0; else {
                    b = this._getIndex(b); if (-1 !== c.inArray(b, e)) return; e = c.isArray(e) ? c.merge([b],
                    e).sort() : [b]
                } this._setupDisabled(e)
            }
        }, load: function (b, e) {
            b = this._getIndex(b); var d = this, f = this.tabs.eq(b), g = f.find(".ui-tabs-anchor"), h = this._getPanelForTab(f), p = { tab: f, panel: h }; this._isLocal(g[0]) || (this.xhr = c.ajax(this._ajaxSettings(g, e, p))) && "canceled" !== this.xhr.statusText && (f.addClass("ui-tabs-loading"), h.attr("aria-busy", "true"), this.xhr.success(function (b) { setTimeout(function () { h.html(b); d._trigger("load", e, p) }, 1) }).complete(function (b, e) {
                setTimeout(function () {
                    "abort" === e && d.panels.stop(!1,
                    !0); f.removeClass("ui-tabs-loading"); h.removeAttr("aria-busy"); b === d.xhr && delete d.xhr
                }, 1)
            }))
        }, _ajaxSettings: function (b, e, d) { var f = this; return { url: b.attr("href"), beforeSend: function (b, g) { return f._trigger("beforeLoad", e, c.extend({ jqXHR: b, ajaxSettings: g }, d)) } } }, _getPanelForTab: function (b) { b = c(b).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + b)) }
    }); c.widget("ui.tooltip", {
        version: "1.11.1", options: {
            content: function () { var b = c(this).attr("title") || ""; return c("<a>").text(b).html() },
            hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null
        }, _addDescribedBy: function (b, e) { var d = (b.attr("aria-describedby") || "").split(/\s+/); d.push(e); b.data("ui-tooltip-id", e).attr("aria-describedby", c.trim(d.join(" "))) }, _removeDescribedBy: function (b) {
            var e = b.data("ui-tooltip-id"), d = (b.attr("aria-describedby") || "").split(/\s+/), e = c.inArray(e, d); -1 !== e && d.splice(e, 1); b.removeData("ui-tooltip-id");
            (d = c.trim(d.join(" "))) ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
        }, _create: function () { this._on({ mouseover: "open", focusin: "open" }); this.tooltips = {}; this.parents = {}; this.options.disabled && this._disable(); this.liveRegion = c("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body) }, _setOption: function (b, e) {
            var d = this; "disabled" !== b ? (this._super(b, e), "content" === b && c.each(this.tooltips, function (b,
            e) { d._updateContent(e) })) : (this[e ? "_disable" : "_enable"](), this.options[b] = e)
        }, _disable: function () { var b = this; c.each(this.tooltips, function (e, d) { var f = c.Event("blur"); f.target = f.currentTarget = d[0]; b.close(f, !0) }); this.element.find(this.options.items).addBack().each(function () { var b = c(this); b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title") }) }, _enable: function () {
            this.element.find(this.options.items).addBack().each(function () {
                var b = c(this); b.data("ui-tooltip-title") && b.attr("title",
                b.data("ui-tooltip-title"))
            })
        }, open: function (b) {
            var e = this, d = c(b ? b.target : this.element).closest(this.options.items); d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function () {
                var b, d = c(this); d.data("ui-tooltip-open") && (b = c.Event("blur"), b.target = b.currentTarget = this, e.close(b, !0)); d.attr("title") && (d.uniqueId(), e.parents[this.id] = { element: this, title: d.attr("title") }, d.attr("title",
                ""))
            }), this._updateContent(d, b))
        }, _updateContent: function (b, e) { var d; d = this.options.content; var c = this, f = e ? e.type : null; if ("string" == typeof d) return this._open(e, b, d); (d = d.call(b[0], function (d) { b.data("ui-tooltip-open") && c._delay(function () { e && (e.type = f); this._open(e, b, d) }) })) && this._open(e, b, d) }, _open: function (b, e, d) {
            function f(b) { p.of = b; g.is(":hidden") || g.position(p) } var g, h, p = c.extend({}, this.options.position); d && (g = this._find(e), g.length ? g.find(".ui-tooltip-content").html(d) : (e.is("[title]") &&
            (b && "mouseover" === b.type ? e.attr("title", "") : e.removeAttr("title")), g = this._tooltip(e), this._addDescribedBy(e, g.attr("id")), g.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), d.clone && (d = d.clone(), d.removeAttr("id").find("[id]").removeAttr("id")), c("<div>").html(d).appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, { mousemove: f }), f(b)) : g.position(c.extend({ of: e }, this.options.position)), this.closing = this.hiding = !1, g.hide(), this._show(g,
            this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () { g.is(":visible") && (f(p.of), clearInterval(h)) }, c.fx.interval)), this._trigger("open", b, { tooltip: g }), d = { keyup: function (b) { b.keyCode === c.ui.keyCode.ESCAPE && (b = c.Event(b), b.currentTarget = e[0], this.close(b, !0)) } }, e[0] !== this.element[0] && (d.remove = function () { this._removeTooltip(g) }), b && "mouseover" !== b.type || (d.mouseleave = "close"), b && "focusin" !== b.type || (d.focusout = "close"), this._on(!0, e, d)))
        }, close: function (b) {
            var e =
            this, d = c(b ? b.currentTarget : this.element), f = this._find(d); this.closing || (clearInterval(this.delayedShow), d.data("ui-tooltip-title") && !d.attr("title") && d.attr("title", d.data("ui-tooltip-title")), this._removeDescribedBy(d), this.hiding = !0, f.stop(!0), this._hide(f, this.options.hide, function () { e._removeTooltip(c(this)); this.closing = this.hiding = !1 }), d.removeData("ui-tooltip-open"), this._off(d, "mouseleave focusout keyup"), d[0] !== this.element[0] && this._off(d, "remove"), this._off(this.document, "mousemove"), b &&
            "mouseleave" === b.type && c.each(this.parents, function (b, d) { c(d.element).attr("title", d.title); delete e.parents[b] }), this.closing = !0, this._trigger("close", b, { tooltip: f }), this.hiding || (this.closing = !1))
        }, _tooltip: function (b) { var e = c("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")), d = e.uniqueId().attr("id"); c("<div>").addClass("ui-tooltip-content").appendTo(e); e.appendTo(this.document[0].body); this.tooltips[d] = b; return e },
        _find: function (b) { return (b = b.data("ui-tooltip-id")) ? c("#" + b) : c() }, _removeTooltip: function (b) { b.remove(); delete this.tooltips[b.attr("id")] }, _destroy: function () { var b = this; c.each(this.tooltips, function (e, d) { var f = c.Event("blur"); f.target = f.currentTarget = d[0]; b.close(f, !0); c("#" + e).remove(); d.data("ui-tooltip-title") && (d.attr("title") || d.attr("title", d.data("ui-tooltip-title")), d.removeData("ui-tooltip-title")) }); this.liveRegion.remove() }
    })
}
"function" == typeof define && define.amd ? define("jqueryui", ["jquery"], Eb) : Eb(jQuery); !0;
define("SmartMenu/SmartMenuJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../Undomanager/undomanager jquery jqueryui".split(" "), function (c, u, q, v, f, r, g) {
    var z = !1, n = !1, l = 0; !function (c) {
        var E = function () {
            function c() { } c.prototype.o = function () { c.Fd() }; c.Sg = function (c, f, g) {
                if (c.hasClass("jq-image-block-image")) {
                    if ("" != f) { var h = Number(f) + 55; c.parent().closest(".key").css("height", h + "px"); c.parent().closest(".jq-image-block").css("height", Number(f) + 20 + "px") } "" != g &&
                    (h = Number(g) + 35, c.parent().closest(".key").css("width", h + "px"), c.parent().closest(".jq-image-block").css("width", Number(g) + 20 + "px"))
                } c.hasClass("jq-image-block-container") && ("" != f && (h = Number(f) - 60, c.find(".key").css("height", h + "px"), c.find(".jq-image-block").css("height", Number(f) - 30 + "px")), "" != g && (h = Number(g) - 35, c.find(".key").css("width", h + "px"), c.find(".jq-image-block").css("width", Number(g) - 15 + "px")))
            }; c.gh = function (c, f, g) {
                if (c.hasClass("jq-text-block")) {
                    if ("" != f) {
                        var h = Number(f); c.parent().closest(".key").css("height",
                        h + "px")
                    } "" != g && (h = Number(g), c.parent().closest(".key").css("width", h + "px"))
                } c.hasClass("jq-text-block-container") && ("" != f && (h = Number(f), c.find(".key").css("height", h + "px")), "" != g && (h = Number(g), c.find(".key").css("width", h + "px")))
            }; c.Fd = function () {
                g(document).ready(function () {
                    0 == z && (z = !0, g("#sm").on("click", function () { }), g(".smart-menu-width").spinner({
                        min: 0, max: 2E3, step: 1, change: function () { }, spin: function () { }, stop: function () {
                            l != g(this).val() && (n = !0); g(this).val(); l = g(this).val(); if (1 == n) {
                                n = !1; 0 ==
                                c.a && c.m(this, "width"); var f = v.b.c.f; void 0 == f || f.hasClass("row") || f.hasClass("root-elements") || (new r.h.i).j()
                            }
                        }
                    }), g(".smart-menu-height").spinner({ min: 0, max: 5E3, step: 1, change: function () { 0 == c.a && c.m(this, "height") }, slide: function () { 0 == c.a && c.m(this, "height") }, stop: function () { 0 == c.a && c.m(this, "height"); (v.b.c.f, new r.h.i).j() } }), g(".smart-menu-collapse-close").on("click", function () { g("#sm").find(".smart-menu-controls").slideUp(); g("#sm").find(".smart-menu-collapse-show").removeClass("hide"); g(this).addClass("hide") }),
                    g(".smart-menu-collapse-show").on("click", function () { g("#sm").find(".smart-menu-controls").slideDown(); g("#sm").find(".smart-menu-collapse-close").removeClass("hide"); g(this).addClass("hide") }), g(".smart-menu-controls").on("mouseenter", function () { }), g(".smart-menu-controls").on("mouseleave", function () { g(q.v.A.bc).html(""); g(q.v.A.bc).css("display", "none") }), g(".smart-menu-button-apply").on("click", function () {
                        var f = v.b.c.f, h = (new q.v.A, g(this).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value")),
                        l = g(this).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value"); void 0 != f && (f.hasClass("column") ? (c.xc(h), f.css("min-height", l + "px")) : (f.css("width", h + "px"), f.hasClass("row") || f.hasClass("column") ? f.css("min-height", l + "px") : f.css("height", l + "px")))
                    }))
                })
            }; c.m = function (f, h) {
                v.b.c.sb(); var l = v.b.c.f; l.hasClass("empty-container-text") ? l = l.find(".jq-text-block-container").first() : l.hasClass("empty-container-image") && (l = l.find(".jq-plus-container-image").first()); if (void 0 !=
                l) {
                    var n = (new q.v.A, g(f).closest(".smart-menu-controls-table").find(".smart-menu-width").spinner("value")), y = g(f).closest(".smart-menu-controls-table").find(".smart-menu-height").spinner("value"); l.hasClass("column") ? ("width" == h && c.xc(n), "height" == h && l.css("min-height", y + "px")) : ("width" == h && (l.hasClass("root-elements") || l.hasClass("row") || l.css("width", n + "px")), "height" == h && (l.hasClass("row") || l.hasClass("column") || l.hasClass("root-elements") ? l.css("min-height", y + "px") : (l.css("min-height", y + "px"),
                    l.css("height", y + "px"))))
                }
            }; c.xc = function (c) {
                var h = v.b.c.f; h.hasClass("empty-container-text") ? h = h.find(".jq-plus-container-text").first() : h.hasClass("empty-container-image") && (h = h.find(".jq-plus-container-image").first()); if (void 0 != h) {
                    var p = h.width(), l = g(h).parent().width(), n = 2 * Math.floor(1 * l / 100), l = new f.C.K; g(h).attr("style"); l.B(h, "min-width"); l.B(h, "width"); if (c > p) {
                        l = g(h).nextAll(".column"); try {
                            for (var b = h.parent().children(".column"), e = 0; e < b.length; e++) g(b[e]).attr("xs-column-size"); var d = Math.floor((c -
                            p) / n); 0 == d && (d = 1); var k = g(h).nextAll(".column").length, q = Math.floor(d / k); 0 == q && (q = 1); c = d; for (var r = 0; r < l.length && 0 < c; r++) { var E = Number(g(l[r]).attr("xs-column-size")); 1 != E && (e = E - q, 1 > e ? (c = c - q + 1, e = 1) : c -= q, g(l[r]).removeClass("col-xs-" + E), g(l[r]).addClass("col-xs-" + e), g(l[r]).attr("xs-column-size", e)) } var t = Number(h.attr("xs-column-size")), r = t + d - c; d == c && (r += c); var u = 0; h.parent().children(".column").each(function () { u += Number(g(this).attr("xs-column-size")) }); for (var z = u - t + r; 48 < z;) r--, z--; g(h).removeClass("col-xs-" +
                            t); g(h).addClass("col-xs-" + r); h.attr("xs-column-size", r)
                        } catch (L) { } l.show()
                    } else if (p > c) {
                        l = g(h).nextAll(".column"); try {
                            if (d = Math.floor((p - c) / n), 0 == d && (d = 1), q = Math.floor(d / 1), 0 == q && (q = 1), t = Number(h.attr("xs-column-size")), 1 < t && (c = q, r = t - q, 0 > r && (c = q + r, r = 1), 0 == r && (c = q - 1, r = 1), g(h).removeClass("col-xs-" + t), g(h).addClass("col-xs-" + r), h.attr("xs-column-size", r), 0 < d)) {
                                E = Number(g(l[0]).attr("xs-column-size")); e = E + c; u = 0; h.parent().children(".column").each(function () { u += Number(g(this).attr("xs-column-size")) });
                                for (z = u - Number(g(l[0]).attr("xs-column-size")) + e; 48 < z;) e--, z--; g(l[0]).removeClass("col-xs-" + E); g(l[0]).addClass("col-xs-" + e); g(l[0]).attr("xs-column-size", e)
                            }
                        } catch (L) { } l.show()
                    } g(h).nextAll(".column").show()
                }
            }; c.G = function () {
                c.a = !0; var f = v.b.c.f; f.hasClass("empty-container-text") ? f = f.find(".jq-plus-container-text").first() : f.hasClass("empty-container-image") && (f = f.find(".jq-plus-container-image").first()); if (void 0 != f) {
                    var h = f.css("height"); void 0 != h && (h.replace("%", ""), -1 < h.indexOf("%") || (h = h.replace("px",
                    ""))); f = f.css("width"); void 0 != f && (f.replace("%", ""), -1 < f.indexOf("%") || (f = f.replace("px", ""))); g(".smart-menu-height").spinner("value", h); g(".smart-menu-width").spinner("value", f); c.a = !1
                }
            }; c.g = function () { c.G() }; c.mh = ".smart-menu-icon"; c.rh = ".smart-menu"; c.a = !1; return c
        }(); c.ub = E
    }(u.Wa || (u.Wa = {}))
}); ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) };
define("Controls/ControlsJQ", "require exports ../Page/Context/ContextJQ ../_Classes/CssClass ../Constants/ConstantsJQ ../ControlNames/PageControlNamesJQ ../Error/ErrorJQ ../Watch/WatchMouseJQ ./FontJQ ./TextJQ ../SmartMenu/SmartMenuJQ ../Common/OperationJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p) {
    !function (c) {
        var A = function () { function c() { } c.prototype.Rf = function (c) { p(c).find(".required-symbol").remove(); p(c).find(".required").after("<span class='required-symbol'>*</span") }; return c }();
        c.Og = A; var D = function (c) {
            function y() { c.call(this) } ca(y, c); y.prototype.o = function () { this.We(); this.Ue(); this.Ve(); this.Fd(); this.Xe() }; y.prototype.Xe = function () { p("#btnResetAddRowControls").on("click", function () { (new y).Ge() }) }; y.prototype.Fd = function () { (new h.Wa.ub).o() }; y.prototype.Ue = function () { (new n.Lc.md).o() }; y.prototype.Ve = function () { (new l.Text.H).o() }; y.prototype.We = function () { this.Bf(); this.Z(this.Ge); this.ag(); this.ef(); this.gf(); this.df(); (new A).Rf(y.O) }; y.prototype.Bf = function () {
                p(y.O).on("cust_loaded",
                function () { z.b.c.f.hasClass("jq-Content") ? (y.Na("400"), y.La("400")) : (y.Na(f.V.ca.ic), y.La(f.V.ca.ic)) })
            }; y.Na = function (b) { p(y.O).find(y.Wb).val(b); p(y.O).find(y.yc).text(p(y.Wb).val() + " pixels") }; y.La = function (b) { p(y.O).find(y.hb).val(b); p(y.O).find(y.rc).text(p(y.hb).val() + " pixels") }; y.prototype.ag = function () { p(y.O).find(y.ma).on("change", function () { ".jq-Content" == p("#rows-columns option:selected").val() && (y.La("400"), y.Na("400")) }) }; y.prototype.Ge = function () { var b = new y; b.Ef(); b.He(); b.$f(); b.Zf() };
            y.prototype.He = function () { p(y.sc).each(function () { p(this).attr("data-set", "0"); p(this).removeClass("highlight-column") }) }; y.prototype.$f = function () { y.Na(f.V.ca.ic) }; y.prototype.Zf = function () { y.La(f.V.ca.ic) }; y.prototype.Ef = function () {
                p(y.O).find(y.ma).empty(); var b = p(".debug-row-css"), e = p(".debug-column-css"); p(y.O).find(y.ma).append("<option value='select'>-- Select --</option>"); var d = "<option value='.jq-Header'>Header</option>"; p(y.O).find(y.ma).append(d); d = "<option value='.jq-MenuBar'>MenuBar</option>";
                p(y.O).find(y.ma).append(d); d = "<option value='.jq-Content'>Body</option"; p(y.O).find(y.ma).append(d); d = "<option value='.jq-Footer'>Footer</option"; p(y.O).find(y.ma).append(d); if (0 < b.length) for (d = 0; d < b.length; d++) { var c = "<option value='" + p(b[d]).text() + "'>" + p(b[d]).text() + "</option>"; p(y.O).find(y.ma).append(c) } if (0 < e.length) for (d = 0; d < e.length; d++) b = "<option value='" + p(e[d]).text() + "'>" + p(e[d]).text() + "</option>", p(y.O).find(y.ma).append(b)
            }; y.prototype.Z = function (b) {
                p(".control-columns").on("click",
                function () {
                    "1" == p(this).attr("data-set") ? (p(this).attr("data-set", "0"), p(this).removeClass("highlight-column")) : (p(this).attr("data-set", "1"), p(this).addClass("highlight-column")); (new g.v.A).$c("page-add-row"); for (var b = p(".control-columns[data-set=1]"), d = "", c = 0, f = 0, h = 0; h < b.length; h++) f = Number(p(b[h]).attr("data-number")), 0 < h && (f -= c), c = f + c, d += 0 == h ? "col-xs-" + f : " col-xs-" + f; b = 48 - c; 0 < b && (d += " col-xs-" + b); b = new q.l.Cb; c = z.b.c.f; 0 < z.b.c.P.length && c.hasClass("column") && (c = z.b.c.P); if (void 0 != c) {
                        f = new v.Db.cc;
                        h = new v.Db.cc; h.height = p(y.O).find(y.hb).val(); c.hasClass("empty-container") && (h.height = f.height); c.attr("scopeId"); p(".removable-row").remove(); E.pb.yb.J(); c.children(".debug-column-css").hide(); c.css("padding", "0"); var l = void 0; c.hasClass("row") && (l = !0); c.hasClass("image-text-other") && (l = !1); y.Yb = b.l.Aa.Z(c, d, "", f, h, l); void 0 != y.Yb && (y.Yb.addClass("removable-row"), y.Yb.children(".column").addClass("columns-pending")); "none" != p(".jq-show-plus").css("display") && p(".jq-row-plus-container").hide();
                        p("#control-common-execute").trigger("click")
                    }
                }); p(y.O).find(y.Gg).on("click", function () { p(".removable-row").removeClass("removable-row"); void 0 != b && b() })
            }; y.prototype.ef = function () { p(y.O).find(y.sc).on("click", function () { }) }; y.prototype.gf = function () { y.Na(f.V.ca.ic); p(y.O).find(y.Wb).on("change", function () { p(y.O).find(y.yc).text(p(this).val() + " pixels") }) }; y.prototype.df = function () { y.La(f.V.ca.ic); p(y.O).find(y.hb).on("change", function () { p(y.O).find(y.rc).text(p(this).val() + " pixels") }) }; y.g = function () {
                z.b.c.f;
                p(".removable-row").removeClass("removable-row"); p(".columns-pending").removeClass("columns-pending"); (new y).He()
            }; y.O = "#control-add-row"; return y
        }(r.Tc.l.Z.ec); c.xb = D
    }(u.l || (u.l = {}))
}); ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) };
define("Controls/ImageJQ", "require exports ../Error/ErrorJQ ../ControlNames/PageControlNamesJQ ../Page/Context/ContextJQ ../Watch/WatchMouseJQ ./ControlCommonJQ ../Common/OperationJQ ../UndoManager/UndoManager jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l) {
    var h = 0, E = 0; !function (c) {
        var B = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = B; var A = function (c) {
            function p() { c.apply(this, arguments) } ca(p, c); p.prototype.o = function () { this.Gd(); this.Ed(); this.Ab() }; p.prototype.Mc = function () {
                return "Image_Block_" +
                ++h
            }; p.prototype.Fb = function () { return "Image_Block_Container_" + ++E }; p.prototype.Ed = function () { l("#control-image-bi-library").on("click", ".image-library-image", function () { l(".image-library-image").removeClass("image-library-select"); l(".image-library-image").removeClass("image-library-bi-select"); l(this).addClass("image-library-select"); l(this).addClass("image-library-bi-select") }); l(p.N).on("click", ".image-library-image", function () { l(".image-library-image").removeClass("image-library-select"); l(this).addClass("image-library-select") }) };
            p.Mb = function (c) { if (1 == /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c) && 5 <= c.length) { c = c.toLowerCase(); for (var b = ["jpeg", "jpg", "png", "gif"], e = 0; e < b.length; e++) { var d = c.substr(c.length - 5, 5).split("."); if (2 <= d.length && d[1] == b[e]) return !0 } } return !1 }; p.prototype.Ab = function () {
                l(p.N).find(".action-button-insert-image").on("click", function () { "" != l(".internet-image-url").val() ? p.ha(l(".internet-image-url").val()) : p.ha(void 0) }); l(".action-button-change-image").on("click",
                function () { var c = r.b.c.f; if (void 0 != c && c.hasClass("empty-container-image")) { var b = l(".image-library-select").attr("src"); "" != b && (c.find(".jq-plus-container-image").find("img").attr("src", b), (new n.h.i).j()) } else (new q.v.A).U("please select a image change."); l("#control-image-library").hide() })
            }; p.le = function () { l(".action-button-insert-image").hide(); l(".action-button-change-image").show(); l("#control-image-library").show(); l("#control-image-library").trigger("custom_loaded") }; p.ha = function (c) {
                var b =
                new p, e = new q.v.A; e.$c("page-insert-image"); var d = new f.l.Cb, h = r.b.c.f; h.hasClass("column") || null != window.a && null != window.a.T || (window.a = new B, window.a.T = h, window.a.M = "n"); void 0 == h && (h = l("#nnnoelement")); if (void 0 != h) {
                    var n = document.createElement("div"), A = document.createElement("div"), D = document.createElement("div"), t = document.createElement("img"); l(t).addClass("jq-image-block-image "); l(t).addClass("normal-element image-element"); l(D).addClass("jq-image-block-image-wrapper "); c = void 0 == c ? l(".image-library-select").attr("src") :
                    c; l(t).attr("src", c); l(D).append(t); l(A).append(D); l(A).addClass(p.ab); D = b.Mc(); void 0 != A && l(A).prepend("<span class='debug-image-block-css debug-css' scopeId='" + D + "'> " + D + " </span> "); l(A).attr("scopeId", D); l(n).append(A); b = b.Fb(); l(n).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + b + "'> " + b + " </span> "); l(n).addClass(p.$a); l(n).attr("scopeId", b); 1 == h.hasClass("column") || null != window.a ? (b = l(".jq-plus-container.jq-plus-container-not-used").clone(), b.removeClass("jq-plus-container-not-used"),
                    b.addClass("jq-plus-container-image"), b.addClass("design-css"), b.addClass("design-empty-text-css"), b.removeClass("jq-plus-container"), b.find(".jq-plus-element-content").addClass("jq-plus-element-content-image"), A = document.createElement("div"), b.find(".adjust-image-text-other").remove(), b.css("height", "200px"), b.css("width", "200px"), A = l(A), A.prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>"), A.prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>"),
                    A.addClass("empty-container-image image-text-other key design-css design-empty-text-css"), A.append(b), b.find(".jq-plus-content").append(n), z.pb.yb.J(), null == window.a || "" == window.a.M ? d.l.Aa.da(h, A, "", void 0, void 0, void 0, void 0) : d.l.Aa.da(h, A, "", void 0, void 0, !0, void 0), h.hasClass("jq-image-block-container") && (d = h.attr("scopeId"), h.find(".debug-image-block-container-css[scopeId=" + d + "]").remove(), void 0 != d && h.append('<span class="debug-image-block-container-css debug-css" scopeId="' + d + '" > ' + d + "</span>")),
                    l(n).find(".debug-css").remove(), e.Ha(""), l(p.N).hide(), g.D.u.S(), g.D.u.J()) : e.U("You can only insert in a column block.")
                } l(".image-library-image").removeClass("image-library-select"); l(".internet-image-url").val("")
            }; p.prototype.Gd = function () { l(".load-more-images").on("click", function () { p.jb() }); l(p.N).on("custom_loaded", function () { p.jd(); p.jb() }) }; p.Xb = function () { l(".imges-get-start").val((Number(l(".imges-get-start").val()) + 20).toString()) }; p.Ga = function () {
                if (0 == l(".imges-get-start").length) {
                    var c =
                    l(document.createElement("input")); c.addClass("imges-get-start hide"); l("body").append(c); l(".imges-get-start").val("0")
                } return l(".imges-get-start").val()
            }; p.jb = function () { var c = { start: p.Ga(), Ag: 20 }, c = JSON.stringify(c); l.ajax({ type: "POST", url: "/services/ImageService.asmx/GetImages", data: c, contentType: "application/json; charset=utf-8", dataType: "json", success: p.Qb, error: p.Pb }) }; p.jd = function () { l(".imges-get-start").val("0") }; p.Qb = function (c) {
                c = c.d; 0 < c.length && ("0" == p.Ga() && l(".image-library").html(""),
                p.Xb()); for (var b = 0; b < c.length; b++) { var e = document.createElement("div"); l(e).addClass("image-lib-container"); var d = document.createElement("img"); l(d).attr("src", c[b].Qf); l(d).addClass("image-library-image"); l(d).addClass("img-thumbnail"); l(e).append(d); l(".image-library").append(e) }
            }; p.Pb = function () { (new q.v.A).U("Some Problem !. <br>Try again latter.") }; p.g = function () { var c = (new q.v.A, r.b.c.f); void 0 != c && (c.hasClass("row") || c.hasClass("normal-element")) }; p.N = "#control-image-library"; p.ab = "jq-image-block design-image-block normal-element";
            p.$a = "jq-image-block-container design-image-block normal-element jq-container"; return p
        }(v.Tc.l.Image.ec); c.aa = A
    }(u.Image || (u.Image = {}))
});
function Fb(c) {
    function u(c) { return 10 < c.length ? (c = c.substring(1 + c.indexOf("("), c.indexOf(")")).split(","), ["#", v(Number(c[0])), v(Number(c[1])), v(Number(c[2]))].join("")) : c } function q(c) { c = v(c); return c + c + c } function v(c) { c = c.toString(16); 1 == c.length && (c = "0" + c); return c } var f = 0, r = window.navigator.userAgent, g = 0 < r.indexOf("MSIE "), z = g ? "-ie" : "", n = g ? !1 : /mozilla/.test(r.toLowerCase()) && !/webkit/.test(r.toLowerCase()), l = [], h = "ffffff 000000 eeece1 1f497d 4f81bd c0504d 9bbb59 8064a2 4bacc6 f79646".split(" "),
    E = "f2f2f2 7f7f7f ddd9c3 c6d9f0 dbe5f1 f2dcdb ebf1dd e5e0ec dbeef3 fdeada d8d8d8 595959 c4bd97 8db3e2 b8cce4 e5b9b7 d7e3bc ccc1d9 b7dde8 fbd5b5 bfbfbf 3f3f3f 938953 548dd4 95b3d7 d99694 c3d69b b2a2c7 92cddc fac08f a5a5a5 262626 494429 17365d 366092 953734 76923c 5f497a 31859b e36c09 7f7f7f 0c0c0c 1d1b10 0f243e 244061 632423 4f6128 3f3151 205867 974806".split(" "), p = "c00000 ff0000 ffc000 ffff00 92d050 00b050 00b0f0 0070c0 FF00FF 7030a0".split(" "), B = ["003366 336699 3366cc 003399 000099 0000cc 000066".split(" "),
    "006666 006699 0099cc 0066cc 0033cc 0000ff 3333ff 333399".split(" "), "669999 009999 33cccc 00ccff 0099ff 0066ff 3366ff 3333cc 666699".split(" "), "339966 00cc99 00ffcc 00ffff 33ccff 3399ff 6699ff 6666ff 6600ff 6600cc".split(" "), "339933 00cc66 00ff99 66ffcc 66ffff 66ccff 99ccff 9999ff 9966ff 9933ff 9900ff".split(" "), "006600 00cc00 00ff00 66ff99 99ffcc ccffff ccccff cc99ff cc66ff cc33ff cc00ff 9900cc".split(" "), "003300 009933 33cc33 66ff66 99ff99 ccffcc ffffff ffccff ff99ff ff66ff ff00ff cc00cc 660066".split(" "),
    "333300 009900 66ff33 99ff66 ccff99 ffffcc ffcccc ff99cc ff66cc ff33cc cc0099 993399".split(" "), "336600 669900 99ff33 ccff66 ffff99 ffcc99 ff9999 ff6699 ff3399 cc3399 990099".split(" "), "666633 99cc00 ccff33 ffff66 ffcc66 ff9966 ff6666 ff0066 d60094 993366".split(" "), "a58800 cccc00 ffff00 ffcc00 ff9933 ff6600 ff0033 cc0066 660033".split(" "), "996633 cc9900 ff9900 cc6600 ff3300 ff0000 cc0000 990033".split(" "), "663300 996600 cc3300 993300 990000 800000 993333".split(" ")]; c.widget("evol.colorpicker",
    {
        version: "3.2.1", options: { color: null, showOn: "both", hideButton: !1, displayIndicator: !0, transparentColor: !1, history: !0, defaultPalette: "theme", strings: "Theme Colors,Standard Colors,Web Colors,Theme Colors,Back to Palette,History,No history yet." }, _active: !1, _create: function () {
            var h = this; this._paletteIdx = "theme" == this.options.defaultPalette ? 1 : 2; this._id = "evo-cp" + f++; this._enabled = !0; this.options.showOn = this.options.hideButton ? "focus" : this.options.showOn; switch (this.element.get(0).tagName) {
                case "INPUT": var p =
                this.options.color, l = this.element, q = ("focus" === this.options.showOn ? "" : "evo-pointer ") + "evo-colorind" + (n ? "-ff" : z) + (this.options.hideButton ? " evo-hidden-button" : ""), b = ""; this._isPopup = !0; this._palette = null; var e = l.val(); null !== p ? p != e && l.val(p).change() : "" !== e && (p = this.options.color = e); "#0000ffff" === p ? q += " evo-transparent" : b = null !== p ? "background-color:" + p : ""; l.addClass("colorPicker " + this._id).wrap('<div style="width:' + (this.options.hideButton ? this.element.width() : this.element.width() + 32) + "px;" + (g ? "margin-bottom:-21px;" :
                "") + (n ? "padding:1px 0;" : "") + '" class="evo-cp-wrap"></div>').after('<div class="' + q + '" style="' + b + '"></div>').on("keyup onpaste", function () { var b = c(this).val(); b != h.options.color && h._setValue(b, !0) }); q = this.options.showOn; "both" !== q && "focus" !== q || l.on("focus", function () { h.showPalette() }); "both" !== q && "button" !== q || l.next().on("click", function (b) { b.stopPropagation(); h.showPalette(); return !1 }); break; default: this._isPopup = !1, this._palette = this.element.html(this._paletteHTML()).attr("aria-haspopup", "true"),
                this._bindColors()
            } if (this.options.history && (p && this._add2History(p), this.options.initialHistory)) { var p = this.options.initialHistory, d; for (d in p) this._add2History(p[d]) }
        }, _paletteHTML: function () {
            var c = this._paletteIdx = Math.abs(this._paletteIdx), f = this.options, g = f.strings.split(","), c = '<div class="evo-pop' + z + ' ui-widget ui-widget-content ui-corner-all"' + (this._isPopup ? ' style="position:fixed"' : "") + "><span>" + this["_paletteHTML" + c]() + '</span><div class="evo-more"><a href="javascript:void(0)" class="btn btn-danger white">' +
            g[1 + c] + "</a>"; f.history && (c += '<a href="javascript:void(0)" class="evo-hist btn btn-danger white" >' + g[5] + "</a>"); c += "</div>"; f.displayIndicator && (c += this._colorIndHTML(this.options.color) + this._colorIndHTML("")); return c + "</div>"
        }, _colorIndHTML: function (c) { var f = g ? "evo-colorbox-ie " : "", h = ""; c ? "#0000ffff" === c ? f += "evo-transparent" : h = "background-color:" + c : h = "display:none"; return '<div class="evo-color" style="float:left"><div style="' + h + '" class="' + f + '"></div><span>' + (c ? c : "") + "</span></div>" }, _paletteHTML1: function () {
            for (var c =
            this.options, f = c.strings.split(","), l = g ? '"><div style="width:2px;"></div></td>' : '"><span/></td>', n = '<table class="evo-palette' + z + '"><tr><th colspan="10" class="ui-widget-content">' + f[0] + "</th></tr><tr>", b = 0; 10 > b; b++) n += '<td style="background-color:#' + h[b] + l; n += "</tr>"; g || (n += '<tr><th colspan="10"></th></tr>'); n += '<tr class="top">'; for (b = 0; 10 > b; b++) n += '<td style="background-color:#' + E[b] + l; for (var e = 1; 4 > e; e++) for (n += '</tr><tr class="in">', b = 0; 10 > b; b++) n += '<td style="background-color:#' + E[10 * e + b] + l;
            n += '</tr><tr class="bottom">'; for (b = 40; 50 > b; b++) n += '<td style="background-color:#' + E[b] + l; n += '</tr><tr><th colspan="10" class="ui-widget-content">'; c.transparentColor && (n += '<div class="evo-transparent evo-tr-box"></div>'); n += f[1] + "</th></tr><tr>"; for (b = 0; 10 > b; b++) n += '<td style="background-color:#' + p[b] + l; return n + "</tr></table>"
        }, _paletteHTML2: function () {
            for (var c, f, h = g ? '"><div style="width:5px;"></div></td>' : '"><span/></td>', p = '<table class="evo-palette2' + z + '"><tr>', b = '<div class="evo-palcenter">',
            e = 0, d = B.length; d > e; e++) { var b = b + p, k = B[e]; c = 0; for (f = k.length; f > c; c++) b += '<td style="background-color:#' + k[c] + h; b += "</tr></table>" } f = ""; b = b + '<div class="evo-sep"/>' + p; for (c = 255; 10 < c; c -= 10) b += '<td style="background-color:#' + q(c) + h, c -= 10, f += '<td style="background-color:#' + q(c) + h; return b + ("</tr></table>" + p + f + "</tr></table></div>")
        }, _switchPalette: function (f) {
            if (this._enabled) {
                var g, h; h = this.options.strings.split(","); if (c(f).hasClass("evo-hist")) {
                    g = ['<table class="evo-palette"><tr><th class="ui-widget-content">',
                    h[5], "</th></tr></tr></table>", '<div class="evo-cHist">']; if (0 === l.length) g.push("<p>&nbsp;", h[6], "</p>"); else for (f = l.length - 1; -1 < f; f--) 9 === l[f].length ? g.push('<div class="evo-transparent"></div>') : g.push('<div style="background-color:', l[f], '"></div>'); g.push("</div>"); f = -this._paletteIdx; g = g.join(""); h = h[4]
                } else 0 > this._paletteIdx ? (f = -this._paletteIdx, this._palette.find(".evo-hist").show()) : f = 2 == this._paletteIdx ? 1 : 2, g = this["_paletteHTML" + f](), h = h[f + 1], this._paletteIdx = f; this._paletteIdx = f; h = this._palette.find(".evo-more").prev().html(g).end().children().eq(0).html(h);
                0 > f && h.next().hide()
            }
        }, _downOrUpPositioning: function () { for (var c = this.element, f = 0; null !== c && 100 > f;) { if ("visible" != c.css("overflow")) { var f = this._palette.offset().top + this._palette.height(), g = c.offset().top + c.height(), h = this._palette.offset().top - this._palette.height() - this.element.outerHeight(), c = c.offset().top; f > g && h > c ? this._palette.css({ bottom: this.element.outerHeight() + "px" }) : this._palette.css({ bottom: "auto" }); break } if ("HTML" == c[0].tagName) break; c = c.offsetParent(); f++ } }, showPalette: function () {
            if (this._enabled &&
            (this._active = !0, c(".colorPicker").not("." + this._id).colorpicker("hidePalette"), null === this._palette)) {
                this._palette = this.element.next().after(this._paletteHTML()).next().on("click", function (c) { c.stopPropagation(); return !1 }); this._bindColors(); var f = this; this._isPopup && (this._downOrUpPositioning(), c(document.body).on("click." + f._id, function (c) { c.target != f.element.get(0) && f.hidePalette() }).on("keyup." + f._id, function (c) { 27 === c.keyCode && f.hidePalette() })); c(this._palette).css("position", "fixed"); c(this._palette).css("bottom",
                ""); c(this._palette).css("right", ""); c(document); c(this._palette).appendTo("body"); c(this._palette).offset({ top: -1E3, left: -1E3 }); for (var g = 0; 2 > g; g++) { 0 == g && c(this._palette).offset({ top: c(this.element).offset().top + 20, left: c(this.element).offset().left - 150 }); if (isOnScreen(this._palette)) break; 1 == g && c(this._palette).offset({ top: c(this.element).offset().top - 260, left: c(this.element).offset().left - 150 }) }
            } return this
        }, hidePalette: function () {
            if (this._isPopup && this._palette) {
                c(document.body).off("click." +
                this._id); var f = this; this._palette.off("mouseover click", "td,.evo-transparent").fadeOut(function () { f._palette.remove(); f._palette = f._cTxt = null }).find(".evo-more a").off("click")
            } return this
        }, _bindColors: function () {
            var f = this, g = this.options, h = this._palette.find("div.evo-color"), p = g.history ? "td,.evo-cHist>div" : "td"; g.transparentColor && (p += ",.evo-transparent"); this._cTxt1 = h.eq(0).children().eq(0); this._cTxt2 = h.eq(1).children().eq(0); this._palette.on("click", p, function () {
                if (f._enabled) {
                    var b = c(this);
                    f._setValue(b.hasClass("evo-transparent") ? "#0000ffff" : u(b.attr("style").substring(17))); f._active = !1
                }
            }).on("mouseover", p, function () { if (f._enabled) { var b = c(this), b = b.hasClass("evo-transparent") ? "#0000ffff" : u(b.attr("style").substring(17)); f.options.displayIndicator && f._setColorInd(b, 2); f._active && f.element.trigger("mouseover.color", b) } }).find(".evo-more a").on("click", function () { f._switchPalette(this) })
        }, val: function (c) { if ("undefined" == typeof c) return this.options.color; this._setValue(c); return this },
        _setValue: function (c, f) { c = c.replace(/ /g, ""); this.options.color = c; this._isPopup ? (f || this.hidePalette(), this._setBoxColor(this.element.val(c).change().next(), c)) : this._setColorInd(c, 1); this.options.history && 0 < this._paletteIdx && this._add2History(c); this.element.trigger("change.color", c) }, _setColorInd: function (c, f) { var g = this["_cTxt" + f]; this._setBoxColor(g, c); g.next().html(c) }, _setBoxColor: function (c, f) {
            "#0000ffff" === f ? c.addClass("evo-transparent").removeAttr("style") : c.removeClass("evo-transparent").attr("style",
            "background-color:" + f)
        }, _setOption: function (c, f) { "color" == c ? this._setValue(f, !0) : this.options[c] = f }, _add2History: function (c) { for (var f = l.length, g = 0; f > g; g++) if (c == l[g]) return; 27 < f && l.shift(); l.push(c) }, clear: function () { this.hidePalette().val("") }, enable: function () { var c = this.element; this._isPopup ? c.removeAttr("disabled") : c.css({ opacity: "1", "pointer-events": "auto" }); "focus" !== this.options.showOn && this.element.next().addClass("evo-pointer"); c.removeAttr("aria-disabled"); this._enabled = !0; return this },
        disable: function () { var c = this.element; this._isPopup ? c.attr("disabled", "disabled") : (this.hidePalette(), c.css({ opacity: "0.3", "pointer-events": "none" })); "focus" !== this.options.showOn && this.element.next().removeClass("evo-pointer"); c.attr("aria-disabled", "true"); this._enabled = !1; return this }, isDisabled: function () { return !this._enabled }, destroy: function () {
            c(document.body).off("click." + this._id); this._palette && (this._palette.off("mouseover click", "td,.evo-cHist>div,.evo-transparent").find(".evo-more a").off("click"),
            this._isPopup && this._palette.remove(), this._palette = this._cTxt = null); this._isPopup && this.element.next().off("click").remove().end().off("focus").unwrap(); this.element.removeClass("colorPicker " + this.id).empty(); c.Widget.prototype.destroy.call(this)
        }
    })
} "function" == typeof define && define.amd ? define("ColorPicker", ["jquery", "jqueryui"], Fb) : Fb(jQuery); !0;
define("Controls/BorderJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager jquery jqueryui ColorPicker".split(" "), function (c, u, q, v, f, r, g) {
    var z = !1, n = 0; !function (c) {
        var h = function () {
            function c() { } c.prototype.o = function () { c.$b() }; c.$b = function () {
                g(document).ready(function () {
                    0 == z && (z = !0, g(".border-style").on("click", function () {
                        g(".border-style").parent().removeClass("border-style-selected"); g(this).parent().addClass("border-style-selected");
                        c.m(this)
                    }), g(".border-advanced-show").on("click", function () { g(".jq-border-advanced").fadeToggle(1) }), g(".control-border-thickness-radius").spinner({ min: 0, max: 5E3, step: 1, change: function () { 0 == c.a && c.m(this) }, spin: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new r.h.i).j() } }), g(".control-border-thickness").spinner({ min: 0, max: 50, step: 1, value: 0, change: function () { 0 == c.a && c.m(this) }, spin: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new r.h.i).j() } }), g(".color-picker").colorpicker(),
                    g(".color-picker").on("change", function () { 0 == c.a && c.m(this) }), g(c.Zb).on("click", function () {
                        var c = v.b.c.f; if (void 0 != c) {
                            var h = (new q.v.A, new f.C.K), l = g(this).closest(".control-border-controls").find(".control-border-thickness-left").spinner("value"), n = g(this).closest(".control-border-controls").find(".control-border-thickness-top").spinner("value"), r = g(this).closest(".control-border-controls").find(".control-border-thickness-right").spinner("value"), y = g(this).closest(".control-border-controls").find(".control-border-thickness-bottom").spinner("value"),
                            b = g(this).closest(".control-border-controls").find(".control-border-thickness-radius").spinner("value"); void 0 != b && c.css("border-radius", b + "px"); void 0 != l && (c.css("border-left-width", l + "px"), b = g(this).closest(".control-border-controls").find(".color-picker-left").val(), c.css("border-left-color", "#" + b)); void 0 != n && (c.css("border-top-width", n + "px"), b = g(this).closest(".control-border-controls").find(".color-picker-top").val(), c.css("border-top-color", "#" + b)); void 0 != r && (c.css("border-right-width", r +
                            "px"), b = g(this).closest(".control-border-controls").find(".color-picker-right").val(), c.css("border-right-color", "#" + b)); void 0 != y && (c.css("border-bottom-width", y + "px"), b = g(this).closest(".control-border-controls").find(".color-picker-bottom").val(), c.css("border-bottom-color", "#" + b)); c.css("border-style", "solid"); 0 == l && 0 == n && 0 == r && 0 == y && (h.B(c, "border-left-width"), h.B(c, "border-top-width"), h.B(c, "border-bottom-width"), h.B(c, "border-right-width"), h.B(c, "border-color"), h.B(c, "border"))
                        }
                    }))
                })
            }; c.m =
            function (h) {
                c.a = !0; try {
                    0 != n && (n = 1, v.b.c.sb()); var l = v.b.c.f; l.hasClass("empty-container-text") && (l = l.find(".jq-plus-container-text")); if (void 0 != l) {
                        new q.v.A; g(h).hasClass("control-border-thickness-all") && g(".control-border-thickness").not(".control-border-thickness-all").not(".control-border-thickness-radius").spinner("value", g(h).val()); g(h).hasClass("color-picker-left") && 0 == g(".control-border-thickness-left").spinner("value") && g(".control-border-thickness-left").spinner("value", 1); g(h).hasClass("color-picker-top") &&
                        0 == g(".control-border-thickness-top").spinner("value") && g(".control-border-thickness-top").spinner("value", 1); g(h).hasClass("color-picker-right") && 0 == g(".control-border-thickness-right").spinner("value") && g(".control-border-thickness-right").spinner("value", 1); g(h).hasClass("color-picker-bottom") && 0 == g(".control-border-thickness-bottom").spinner("value") && g(".control-border-thickness-bottom").spinner("value", 1); g(h).hasClass("color-picker-all") && 0 == g(".control-border-thickness-all").spinner("value") &&
                        (g(".control-border-thickness-left").spinner("value", 1), g(".control-border-thickness-top").spinner("value", 1), g(".control-border-thickness-right").spinner("value", 1), g(".control-border-thickness-bottom").spinner("value", 1), g(".control-border-thickness-all").spinner("value", 1)); var r = new f.C.K, u = g(".control-border-thickness-left").spinner("value"), C = g(".control-border-thickness-top").spinner("value"), y = g(".control-border-thickness-right").spinner("value"), b = g(".control-border-thickness-bottom").spinner("value"),
                        e = g(".control-border-thickness-radius").spinner("value"); void 0 != e && l.css("border-radius", e + "px"); g(h).hasClass("color-picker-all") && (g(".color-picker").val(g(h).val()), g(".color-picker").keyup()); if (void 0 != u) { l.css("border-left-width", u + "px"); var d = g(h).closest(".control-border-controls").find(".color-picker-left").val(); l.css("border-left-color", "#" + d) } void 0 != C && (l.css("border-top-width", C + "px"), d = g(h).closest(".control-border-controls").find(".color-picker-top").val(), l.css("border-top-color",
                        "#" + d)); void 0 != y && (l.css("border-right-width", y + "px"), d = g(h).closest(".control-border-controls").find(".color-picker-right").val(), l.css("border-right-color", "#" + d)); void 0 != b && (l.css("border-bottom-width", b + "px"), d = g(h).closest(".control-border-controls").find(".color-picker-bottom").val(), l.css("border-bottom-color", "#" + d)); g(".border-style-selected").find(".border-style").hasClass("border-style-solid") ? l.css("border-style", "solid") : g(".border-style-selected").find(".border-style").hasClass("border-style-dotted") ?
                        l.css("border-style", "dotted") : g(".border-style-selected").find(".border-style").hasClass("border-style-dashed") ? l.css("border-style", "dashed") : g(".border-style-selected").find(".border-style").hasClass("border-style-groove") && l.css("border-style", "groove"); 0 == u && 0 == C && 0 == y && 0 == b && (r.B(l, "border-left-width"), r.B(l, "border-top-width"), r.B(l, "border-bottom-width"), r.B(l, "border-right-width"), r.B(l, "border-color"), r.B(l, "border")); l.removeClass("image-selection")
                    }
                } catch (k) { } c.a = !1
            }; c.G = function () {
                c.a =
                !0; var f = v.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); if (void 0 != f) {
                    f.removeClass("image-selection"); var h = f.css("border-left-width"), l = f.css("border-top-width"), n = f.css("border-right-width"), q = f.css("border-bottom-width"), r = f.css("border-top-left-radius"), b = f.css("border-left-color"), e = f.css("border-top-color"), d = f.css("border-right-color"), k = f.css("border-bottom-color"); void 0 != r && (r = r.replace("px", ""), g(".control-border-thickness-radius").spinner("value", r));
                    void 0 != h && (h = h.replace("px", ""), g(".control-border-thickness-left").spinner("value", h)); void 0 != l && (l = l.replace("px", ""), g(".control-border-thickness-top").spinner("value", l)); void 0 != n && (n = n.replace("px", ""), g(".control-border-thickness-right").spinner("value", n)); void 0 != q && (q = q.replace("px", ""), g(".control-border-thickness-bottom").spinner("value", q)); h == l && h == n && h == q && g(".control-border-thickness-all").spinner("value", h); void 0 != b && (b = c.ya(b), g(".color-picker-left").val("#" + b)); void 0 != e && (e =
                    c.ya(e), g(".color-picker-top").val("#" + e)); void 0 != d && (d = c.ya(d), g(".color-picker-right").val("#" + d)); void 0 != k && (k = c.ya(k), g(".color-picker-bottom").val("#" + k)); b == e && b == d && b == k && g(".color-picker-all").val("#" + b); g(".color-picker").keyup(); "inline-block" != g(".close-preview").css("display") && "block" != g(".close-preview").css("display") && f.addClass("image-selection")
                } c.a = !1
            }; c.ya = function (c) {
                try {
                    var f = c.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(","); return (16777216 + (Number(f[0]) <<
                    16) + (Number(f[1]) << 8) + Number(f[2])).toString(16).slice(1)
                } catch (g) { return "" }
            }; c.g = function () { c.G() }; c.N = ".control-border"; c.Zb = ".action-button-border-apply"; c.a = !1; return c
        }(); c.Ka = h
    }(u.Da || (u.Da = {}))
});
define("common/commonmethodsjq", ["require", "exports", "jquery"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c() { } c.prototype.vb = function (c) { return void 0 != c && "string" == typeof c.toLowerCase() ? this.de(this.ce(c)) : void 0 }; c.prototype.B = function (c, f) { if (void 0 != f) { f = f.toLowerCase(); var n = new RegExp(f + "[^;]+;?", "g"); q(c).each(function () { q(this).attr("style", function (c, f) { if (void 0 != f) return f.replace(n, "") }) }) } }; c.prototype.Vb = function (c, f) {
                if (void 0 != f) {
                    f = f.toLowerCase(); var n = new RegExp(f +
                    "s*:.*?;", "g"); q(c).each(function () { q(this).attr("style", function (c, f) { if (void 0 != f) return f.replace(n, "") }) })
                }
            }; c.prototype.ce = function (c) { if (void 0 != c && "string" == typeof c.toLowerCase()) { for (var f = 0, n = 0; n < c.length && !(" " == c[n] && (f = n + 1), n + 1 < c.length && " " != c[n + 1]) ; n++); f < c.length && (c = c.toString().slice(f)) } return c }; c.prototype.de = function (c) {
                if (void 0 != c && "string" == typeof c.toLowerCase()) {
                    for (var f = c.length, n = c.length - 1; -1 < n && !(" " == c[n] && (f = n), -1 < n - 1 && " " != c[n - 1]) ; n--); -1 < f && (c = c.toString().slice(0,
                    f)); return c
                }
            }; c.prototype.Wc = function (c) { void 0 != c && "string" == typeof c.toLowerCase() && (c = c.replace(/ /g, "")); return c }; c.prototype.Rd = function (c, f, n) { return void 0 != f && void 0 != n && "string" == typeof f.toLowerCase() && "string" == typeof n.toLowerCase() ? 0 < c && c < f.length ? f.substring(0, c) + n + f.substring(c, f.length) : f : void 0 }; return c
        }(); c.K = f
    }(u.C || (u.C = {}))
});
define("Controls/ColorJQ", "require exports ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../common/commonmethodsjq jquery ColorPicker".split(" "), function (c, u, q, v, f, r) {
    var g = !1; !function (c) {
        var n = function () {
            function c() { } c.prototype.o = function () { c.lg() }; c.lg = function () {
                r(document).ready(function () {
                    0 == g && (g = !0, r(".remove-bi").on("click", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && ((new f.C.K).Vb(c, "background-image"), (new v.h.i).j(),
                        q.b.c.pc())
                    }), r(".remove-border").on("click", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && ((new f.C.K).B(c, "border"), (new v.h.i).j(), q.b.c.pc()) }), r(".remove-opacity").on("click", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && ((new f.C.K).B(c, "opacity"), (new v.h.i).j(), q.b.c.pc()) }), r(".remove-padding").on("click", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") &&
                        (c = c.find(".jq-plus-container-text")); void 0 != c && ((new f.C.K).B(c, "padding"), (new v.h.i).j(), q.b.c.pc())
                    }), r(".remove-margin").on("click", function () { var c = q.b.c.f; void 0 != c && ((new f.C.K).B(c, "margin"), (new v.h.i).j(), q.b.c.pc()) }), r(".remove-gradient").on("click", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); c.hasClass("empty-container-text") ? c = c.find(".jq-plus-container-text") : c.hasClass("empty-container-image") && (c = c.find(".jq-plus-container-image"));
                        if (void 0 != c) { var g = new f.C.K; g.Vb(c, "background"); g.Vb(c, "background-color"); g.Vb(c, "color"); (new v.h.i).j(); q.b.c.pc() }
                    }), r(".fb-color-picker-gradient").colorpicker(), r(".fb-color-picker").colorpicker(), r(".fb-color-picker").trigger("keyup"), r(".fb-color-picker").on("change", function () {
                        if (0 == c.a) {
                            q.b.c.sb(); var f = q.b.c.f; f.hasClass("empty-container-text") ? f = f.find(".jq-plus-container-text") : f.hasClass("empty-container-image") && (f = f.find(".jq-plus-container-image")); if (void 0 != f) {
                                if (r(this).hasClass("control-color-foreground-color")) {
                                    var g =
                                    r(this).closest(".control-color-controls").find(".control-color-foreground-color").val(), g = g.replace("#", ""); f.css("color", "#" + g); "" != g && f.each(function (c, f) {
                                        var h = r(f); if (h.hasClass("jq-editor-link") || h.hasClass("jq-normal-link")) {
                                            if (0 < r("page").find("." + h.find("a").first().attr("id")).length) r("page").find("." + h.find("a").first().attr("id")).html(""); else { var p = "<style class='" + h.find("a").first().attr("id") + "'> </span>"; r("page").append(p) } var p = "#" + h.find("a").first().attr("id"), l = "#" + g, p = " " +
                                            p + ":link { color:" + l + ";}" + p + ":visited { color:" + l + ";}" + p + ":hover { color:" + l + ";}" + p + ":active { color:" + l + ";}"; r("page").find("." + h.find("a").first().attr("id")).html(p)
                                        }
                                    })
                                } else if (r(this).hasClass("control-color-background-color")) { var p = r(this).closest(".control-color-controls").find(".control-color-background-color").val(); f.hasClass("empty-container-text"); p = p.replace("#", ""); f.css("background-color", "#" + p) } (new v.h.i).j()
                            }
                        }
                    }), r(".fb-color-picker-gradient").on("change", function () {
                        q.b.c.sb(); var c =
                        q.b.c.f; c.hasClass("empty-container-text") ? c = c.find(".jq-plus-container-text") : c.hasClass("empty-container-image") && (c = c.find(".jq-plus-container-image")); if (void 0 != c) {
                            for (var f = r(this).closest(".control-color-controls").find(".control-color-gradient-color-1").val(), g = r(this).closest(".control-color-controls").find(".control-color-gradient-color-2").val(), f = f.replace("#", ""), g = g.replace("#", ""), l = ["-webkit-linear-gradient", "-o-linear-gradient", "-moz-linear-gradient", "linear-gradient"], n = 0; n < l.length; n++) c.css("background",
                            "" + l[n] + "(#" + f + ",#" + g + ")"); (new v.h.i).j()
                        }
                    }), r(c.Zb).on("click", function () { var c = q.b.c.f; c.hasClass("empty-container-text") ? c = c.find(".jq-plus-container-text") : c.hasClass("empty-container-image") && (c = c.find(".jq-plus-container-image")); if (void 0 != c) { var f = r(this).closest(".control-color-controls").find(".control-color-foreground-color").val(); c.css("color", "#" + f); f = r(this).closest(".control-color-controls").find(".control-color-background-color").val(); c.css("background-color", "#" + f); (new v.h.i).j() } }))
                })
            };
            c.G = function () {
                c.a = !0; var f = q.b.c.f; f.hasClass("empty-container-text") ? f = f.find(".jq-plus-container-text") : f.hasClass("empty-container-image") && (f = f.find(".jq-plus-container-image")); if (void 0 != f) {
                    var g = f.css("color"); void 0 != g && (g = c.ya(g), r(".control-color-foreground-color").val("#" + g), r(".control-color-foreground-color").trigger("keyup")); g = f.css("background-color"); void 0 != g && "transparent" != g && "rgba(0, 0, 0, 0)" != g ? (g = c.ya(g), r(".control-color-background-color").val("#" + g)) : (g = "transparent", r(".control-color-background-color").val(g));
                    r(".control-color-background-color").trigger("keyup")
                } c.a = !1
            }; c.ya = function (c) { try { var f = c.replace(/^(rgb|rgba)\(/, "").replace(/\)$/, "").replace(/\s/g, "").split(","); return (16777216 + (Number(f[0]) << 16) + (Number(f[1]) << 8) + Number(f[2])).toString(16).slice(1) } catch (g) { return "" } }; c.g = function () { c.G() }; c.N = "#control-color"; c.Zb = ".action-button-color-apply"; c.a = !1; return c
        }(); c.Ma = n
    }(u.Color || (u.Color = {}))
});
define("Watch/ClipBoardJQ", ["require", "exports", "../Controls/ImageJQ"], function (c, u, q) { !function (c) { var f = function () { function c() { } c.prototype.ha = function (c) { q.Image.aa.ha(c) }; return c }(); c.me = f }(u.Hd || (u.Hd = {})) });
define("Watch/CopyPasteJQ", "require exports ./WatchMouseJQ ../Error/ErrorJQ ../Controls/ControlCommonJQ ../UndoManager/UndoManager ./ClipBoardJQ ../Common/OperationJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n) {
    var l, h = !1, E = function () { return function () { } }(); !function (c) {
        var B = function () {
            function c() { } c.Ye = function () { c.bb = new E }; c.prototype.o = function () { }; c.dh = function (f) { c.bb.data = f }; c.Mb = function (c) {
                if (1 == /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c) &&
                5 <= c.length) { c = c.toLowerCase(); for (var f = ["jpeg", "jpg", "png", "gif"], g = 0; g < f.length; g++) { var b = c.substr(c.length - 5, 5).split("."); if (2 <= b.length && b[1] == f[g]) return !0 } } return !1
            }; c.qe = function () { var c = q.b.c.f; void 0 == c && (c = n("#nononoelement")); var g = n(document.createElement("div")); z.pb.yb.J(); g.addClass("key empty-container links-container image-text-other"); c.append(g); (new r.h.i).j(); f.D.u.S(); f.D.u.J() }; c.ue = function () {
                var c = q.b.c.f; new v.v.A; if (void 0 != c) {
                    if (c.hasClass("jq-Header") || c.hasClass("jq-MenuBar") ||
                    c.hasClass("jq-Content") || c.hasClass("jq-Footer")) c.hide(); else if (c.hasClass("jq-image-block-image")) c.closest(".jq-plus-container").remove(); else if (c.hasClass("jq-text-block")) c.closest(".jq-plus-container").remove(); else {
                        if (c.hasClass("column")) {
                            var f = c.closest(".row").children(".column").length, g = "", b = ""; 2 == f && (b = "col-xs-48", g = "48"); 3 == f && (b = "col-xs-24", g = "24"); 4 == f && (b = "col-xs-16", g = "16"); c.closest(".row").children(".column").each(function () {
                                n(this); var c = "col-xs-" + n(this).attr("xs-column-size");
                                c != b && (n(this).addClass(b), n(this).attr("xs-column-size", g), n(this).removeClass(c))
                            })
                        } c.remove()
                    } (new r.h.i).j()
                }
            }; c.Jd = function () { h = !0; var c = q.b.c.f; void 0 != c && (c.removeClass("image-selection"), c.hasClass("root-elements") ? (l = n("#noelement--x"), (new v.v.A).U("You can only cut Text , Image.")) : l = c.hasClass("jq-image-block-image") ? c.closest(".jq-plus-container") : c.hasClass("jqte") ? c.closest(".jq-plus-container") : c) }; c.Id = function () {
                h = !1; var c = q.b.c.f; void 0 != c && (c.hasClass("root-elements") ? (l = n("#noelement--x"),
                (new v.v.A).Ha("You can only copy Text , Image.")) : (c.removeClass("image-selection"), f.D.u.S(), l = c.hasClass("jq-image-block-image") ? c.closest(".jq-plus-container").clone() : c.hasClass("jqte") ? c.closest(".jq-plus-container").clone() : c.clone(), f.D.u.S(), f.D.u.J()))
            }; c.Xd = function (c) {
                void 0 === c && (c = !1); var g = q.b.c.f, p = new v.v.A; 0 != n(l).length ? void 0 != g && (g.hasClass("column") || g.hasClass("image-text-other") ? (l.each(function (b, e) {
                    n(e).hasClass("image-text-other") && (n.contains(n(e)[0], g[0]) ? p.U("You can only cut and paste element in to same element.") :
                    (n(e).children(".ui-resizable-handle").css("margin", "0px"), z.pb.yb.J(), g.hasClass("column") ? 0 == c && void 0 != q.b.c.P && 0 < q.b.c.P.length ? q.b.c.P.after(n(e)) : g.append(n(e)) : g.after(n(e))))
                }), l = 1 == h ? n("#noelement--x") : l.clone(), f.D.u.S(), f.D.u.J(), (new r.h.i).j(), h = !1) : p.U("Please select a [Column] to paste.")) : p.U("Please copy/cut a element.")
            }; c.ah = function () {
                var h = q.b.c.f, p = new v.v.A; if (void 0 != h) {
                    if (h.hasClass("empty-container") || h.hasClass("column")) void 0 != c.bb.data && "" != c.bb.data && (c.Mb(c.bb.data) ?
                    (new g.Hd.me).ha(c.bb.data) : new g.Hd.me), f.D.u.S(), f.D.u.J(), (new r.h.i).j()
                } else p.U("You can only paste element to a column and empty blocks.")
            }; c.sh = c.Ye(); return c
        }(); c.ja = B
    }(u.ga || (u.ga = {}))
});
define("cssManager/cssManagerJQ", ["require", "exports"], function (c, u) {
    !function (c) {
        c.ea = function () { return function () { } }(); var u = function () {
            function c() { this.rg = "/Content/Menus/[MenuName]/[Color]/menu.css"; this.yg = "/Content/Menus/[MenuName]/[Color]/menu.js"; this.wg = "/Content/Menus/[MenuName]/[Color]/index.html"; this.lb = [{ Qc: 1, pd: "2", Color: "green", uf: "", Ce: 2 }, { Qc: 2, pd: "2", Color: "blue", uf: "", Ce: 3 }] } c.prototype.Od = function (c) {
                try {
                    this.lb[c]; var f; f = this.lb[c]; var q = this.wg.replace("[MenuName]", f.pd); return q =
                    q.replace("[Color]", f.Color)
                } catch (n) { }
            }; c.prototype.da = function (c) { try { this.lb[c]; var f; f = this.lb[c]; var q = this.rg.replace("[MenuName]", f.pd), q = q.replace("[Color]", f.Color), n = this.yg.replace("[MenuName]", f.pd), n = n.replace("[Color]", f.Color); jQuery("head").append("<link menu-id='" + f.Qc + "' rel='stylesheet' href='" + q + "'/>"); jQuery("head").append("<script menu-id='" + f.Qc + "' type='text/javascript' src='" + n + "'> \x3c/script>") } catch (l) { } }; return c
        }(); c.ld = u
    }(u.Gc || (u.Gc = {}))
});
define("Menu/MenuLinksJQ", ["require", "exports", "../Error/ErrorJQ"], function (c, u, q) {
    !function (c) {
        !function (c) {
            var r = function () {
                function c() { } c.prototype.ka = function (c) {
                    if (1 == c) return [{ name: "home", W: "#", text: "Home", R: [{ name: "SubLink Home 1", W: "/x2", text: "SubLink Home 1", R: [{ name: "SubLink Home 1.1", W: "/x1", text: "SubLink Home 1.1   ", R: [{ name: "SubLink Home 1.1.1", W: "x2", text: "SubLink Home 1.1.1", R: [] }] }] }] }, { name: "Contact", W: "/eventvideos", text: "Contact Us", R: [] }, {
                        name: "About", W: "#", text: "About Us", R: [{
                            name: "SubLink Home 1",
                            W: "/x2", text: "SubLink Home 1", R: [{ name: "SubLink Home 1.1", W: "/x1", text: "SubLink Home 1.1   ", R: [{ name: "SubLink Home 1.1.1", W: "x2", text: "SubLink Home 1.1.1", R: [] }] }]
                        }]
                    }]; if (2 == c) return [{ name: "Home", W: "/x1", text: "Home", R: [{ name: "SubLink Home 1", W: "/x2", text: "SubLink Home 1", R: [{ name: "SubLink Home 1.1", W: "/x1", text: "SubLink Home 1.1   ", R: [{ name: "SubLink Home 1.1.1", W: "x2", text: "SubLink Home 1.1.1", R: [] }] }] }] }, {
                        name: "About", W: "x1", text: "About", vg: !0, R: [{
                            name: "SubLink About 1", W: "/x2", text: "SubLink About 1",
                            R: [{ name: "SubLink About 1.1", W: "/x1", text: "SubLink About 1.1", R: [{ name: "SubLink About 1.1.1", W: "x2", text: "SubLink About 1.1.1", R: [] }] }]
                        }]
                    }]; if (3 == c) return [{ name: "Home", W: "/nopage", text: "Home", R: [{ name: "SubLink Home 1", W: "x1", text: "SubLink Home 1", R: [] }] }, { name: "About", W: "x2", text: "About", vg: !0, R: [] }, { name: "Video Samples", W: "http://www.http.com", text: "Video Samples", R: [] }, { name: "Event", W: "/eventvideos", text: "Event", R: [{ name: "Videos", W: "/eventvideos", text: "Videos", R: [] }] }]; new q.v.A
                }; return c
            }(); c.Hf =
            r
        }(c.ea || (c.ea = {}))
    }(u.l || (u.l = {}))
});
define("Menu/MenuTemplateJQ", ["require", "exports", "../_Classes/UrlJQ", "../Menu/MenuLinksJQ", "jquery"], function (c, u, q, v, f) {
    var r = !1; !function (c) {
        !function (c) {
            var g = function () {
                function c() { } c.prototype.hf = function (c) { var g = void 0; void 0 == g && (g = (new v.l.ea.Hf).ka(1)); var p; void 0 != g && 0 < g.length && (p = f("<div  id='menu-" + c + "' class='jqMenuContainer'> </div>"), c = this.te("menu", g), p.append(c), p.prepend("<div class='rotator'></div>")); return p }; c.prototype.te = function (c, g, p) {
                    void 0 === p && (p = 1); c = f("<ul class='" +
                    c + "'> </ul>"); for (var l = new q.C.fe, n = 0; n < g.length; n++) {
                        var u = l.Vf(g[n].W), v = ""; void 0 != g[n].R && 0 < g[n].R.length && (v = "has-children"); u = ' <a class="li ' + v + '" href="' + u + '"> ' + g[n].text + "</a> "; void 0 == u && (u = ""); v = g[n].name; void 0 != v && v.toString().replace(/\s+/g, ""); u = f("<li> " + u + "</li> "); c.append(u); var y; void 0 != g[n].R && 0 < g[n].R.length && (p++, y = this.te("jqSubMenuUl", g[n].R, p), p--); void 0 != y && f(u).append(y); 1 == p && 0 == r && (r = !0, u.addClass("active"), u.find(".li").first().addClass("active-link")); u.addClass("level-" +
                        p)
                    } return c
                }; return c
            }(); c.De = g
        }(c.ea || (c.ea = {}))
    }(u.l || (u.l = {}))
});
define("Controls/Menujq", "require exports ../Error/ErrorJQ ../Page/Context/ContextJQ ../Watch/WatchMouseJQ ./ControlCommonJQ ../cssManager/cssManagerJQ ../Menu/MenuTemplateJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n) {
    var l = 0, h = !1, E = !1, p = 0; !function (c) {
        var u = function () {
            function c() { } c.prototype.Fb = function () { return "Menu_Container_" + ++l }; c.prototype.o = function () { 0 == E && (E = !0, n(document).ready(function () { 0 == h && (h = !0, c.Eb(), c.ng(), c.Cg(), c.Dg()) })) }; c.Cg = function () {
                n(".control-menu-next").on("click",
                function () { var c = new g.Gc.ld; p++; if (p < c.lb.length) { var c = c.Od(p), f = n(document.createElement("iframe")); f.attr("src", c); f.addClass("menu-iframe"); n(".control-menu-styles").html(""); n(".control-menu-styles").append(f) } else p = c.lb.length - 1 })
            }; c.Dg = function () {
                n(".control-menu-prev").on("click", function () {
                    var c = new g.Gc.ld; p--; if (0 <= p) { var c = c.Od(p), f = n(document.createElement("iframe")); f.attr("src", c); f.addClass("menu-iframe"); n(".control-menu-styles").html(""); n(".control-menu-styles").append(f) } else p =
                    0
                })
            }; c.Eb = function () { n(".control-menu").find(".close-button").on("click", function () { n(this).closest(".control-page").hide(); n(q.v.A.bc).css("display", "none"); n(q.v.A.bc).html("") }) }; c.ng = function () {
                n(".control-menu").find(".control-menu-insert").on("click", function () {
                    var h = new g.Gc.ld; if (0 <= p && p < h.lb.length) {
                        var l = h.lb[p].Ce, b = (new z.l.ea.De).hf(l), e = new c, l = new v.l.Cb, d = f.b.c.f; if (void 0 != d) {
                            var k = document.createElement("div"); n(k).append(b); b = e.Fb(); n(k).attr("scopeId", b); if (1 == d.hasClass("column") ||
                            d.hasClass("empty-container")) b = document.createElement("span"), n(b).addClass("empty-container-menu key image-text-other "), n(b).css("font-size", "14px"), e = n(".jq-plus-container.jq-plus-container-not-used").clone(), e.removeClass("jq-plus-container"), e.addClass("jq-plus-container-text"), e.removeClass("jq-plus-container-not-used"), e.find(".jq-plus-content").append(k), n(b).append(e), l.l.Aa.da(d, n(b), "", void 0, void 0, !0, void 0), r.D.u.S(), r.D.u.J(); h.da(p)
                        }
                    }
                })
            }; c.Ee = function () {
                var c = new g.Gc.ld; p = 0; var c =
                c.Od(p), f = n(document.createElement("iframe")); f.attr("src", c); f.addClass("menu-iframe"); n(".control-menu-styles").html(""); n(".control-menu-styles").append(f)
            }; c.g = function () { var c = new q.v.A, g = f.b.c.f; void 0 != g && (g.hasClass("row") || g.hasClass("normal-element")) && c.ia("Help : You cannot [Text] insert here.") }; return c
        }(); c.lc = u
    }(u.ea || (u.ea = {}))
});
define("controls/JQueryUI", "require exports ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager ../Controls/TextJQ jquery jqueryui".split(" "), function (c, u, q, v, f, r, g) {
    !function (c) {
        c.Xa = function () { return function () { this.M = ""; this.wa = !1 } }(); var n = function () { return function () { } }(); c.gg = n; var l = function () {
            function h() { } h.gc = function (c, f) {
                g(c).draggable({
                    cancel: f, revert: "invalid", helper: "clone", appendTo: "body", distance: 5, start: function (c, f) {
                        h.cb = !1; g("#interface_bottom").hide();
                        g(f.helper).addClass("jq-dragging"); g("page").addClass("dragging"); h.va = 0; h.Y++; f.helper.css("z-index", "9999999999"); f.helper.css("opacity", "0.8")
                    }, stop: function (c, f) { h.cb = !0; g("#interface_bottom").show(); g(f.helper).removeClass("jq-dragging"); g("page").removeClass("dragging"); h.Y = 2; g(".image-selection-drag-original").removeClass("image-selection-drag-original"); f.helper.css("opacity", "1"); f.helper.css("z-index", "0") }, drag: function (c) { (g(c.target).hasClass("key") ? g(c.target) : g(c.target).closest(".key")).addClass("image-selection-drag-original") }
                })
            };
            h.Xf = function () {
                g(".image-element").resizable({
                    handles: "e,se,s", autoHide: !0, delay: 0, start: function (c, f) { var g = new v.C.K; g.B(f.helper.closest(".ui-wrapper"), "min-height"); g.B(f.helper.closest(".ui-wrapper"), "height"); g.B(f.helper.closest(".ui-wrapper"), "min-width"); g.B(f.helper.closest(".ui-wrapper"), "width") }, stop: function (c, f) {
                        var g = new v.C.K; g.B(f.helper.closest(".ui-wrapper"), "min-height"); g.B(f.helper.closest(".ui-wrapper"), "height"); g.B(f.helper.closest(".ui-wrapper"), "min-width"); g.B(f.helper.closest(".ui-wrapper"),
                        "width")
                    }, resize: function (f, h) { c.F.Va(h.element); (new n).helper = g(this).closest(".column") }
                })
            }; h.kg = function () { return "error" }; h.Yc = function () {
                g(".column").resizable({
                    handles: "e,s", autoHide: !0, distance: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var l = g(f.element).data("ui-resizable").axis; g(f.element).children(".ui-resizable-handle").find(".jq-square-" + l).parent().addClass("ui-resizable-handle-hover"); if ("se" == g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) f.element.height(f.element.height()),
                        h.ac = g(f.helper).css("min-height"), (new v.C.K).B(f.helper, "min-height"); g(f.helper).nextAll(".column").hide(); g(f.element).data("ui-resizable")
                    }, stop: function (c, h) {
                        g("page").removeClass("resizing"); g(h.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); g(".ui-resizable-se").removeClass("selected-resizable"); var l = h.size.height, n = h.size.width, q = h.originalSize.height, r = h.originalSize.width, y = g(h.helper).parent().width(), y = 2 * Math.floor(1 * y / 100), b = new v.C.K; g(h.helper).attr("style");
                        l != q && (b.Vb(h.helper, "height"), g(h.helper).css("min-height", l)); b.B(h.helper, "min-width"); b.B(h.helper, "width"); if (n > r) {
                            l = g(h.helper).nextAll(".column"); try {
                                for (var e = h.helper.parent().children(".column"), d = 0; d < e.length; d++) g(e[d]).attr("xs-column-size"); var k = Math.floor((n - r) / y); 0 == k && (k = 1); var w = g(h.helper).nextAll(".column").length, u = Math.floor(k / w); 0 == u && (u = 1); for (var n = k, z = 0; z < l.length && 0 < n; z++) {
                                    var t = Number(g(l[z]).attr("xs-column-size")); 1 != t && (d = t - u, 1 > d ? (n = n - u + 1, d = 1) : n -= u, g(l[z]).removeClass("col-xs-" +
                                    t), g(l[z]).addClass("col-xs-" + d), g(l[z]).attr("xs-column-size", d))
                                } var K = Number(h.helper.attr("xs-column-size")), z = K + k - n; k == n && (z += n); var M = 0; h.helper.parent().children(".column").each(function () { M += Number(g(this).attr("xs-column-size")) }); for (var L = M - K + z; 48 < L;) z--, L--; g(h.helper).removeClass("col-xs-" + K); g(h.helper).addClass("col-xs-" + z); h.helper.attr("xs-column-size", z)
                            } catch (ea) { } l.show()
                        } else if (r > n) {
                            l = g(h.helper).nextAll(".column"); try {
                                if (k = Math.floor((r - n) / y), 0 == k && (k = 1), u = Math.floor(k / 1), 0 ==
                                u && (u = 1), K = Number(h.helper.attr("xs-column-size")), 1 < K && (n = u, z = K - u, 0 > z && (n = u + z, z = 1), 0 == z && (n = u - 1, z = 1), g(h.helper).removeClass("col-xs-" + K), g(h.helper).addClass("col-xs-" + z), h.helper.attr("xs-column-size", z), 0 < k)) {
                                    t = Number(g(l[0]).attr("xs-column-size")); d = t + n; M = 0; h.helper.parent().children(".column").each(function () { M += Number(g(this).attr("xs-column-size")) }); for (L = M - Number(g(l[0]).attr("xs-column-size")) + d; 48 < L;) d--, L--; g(l[0]).removeClass("col-xs-" + t); g(l[0]).addClass("col-xs-" + d); g(l[0]).attr("xs-column-size",
                                    d)
                                }
                            } catch (ea) { } l.show()
                        } g(h.helper).nextAll(".column").show(); (new f.h.i).j()
                    }, resize: function () { }
                })
            }; h.Af = function (c, f) { "se" == g(f.element).data("ui-resizable").axis || ("s" == g(f.element).data("ui-resizable").axis ? f.helper.height(f.helper.height() + 20) : "s" == g(f.element).data("ui-resizable").axis) }; h.Qa = function (h, l) {
                var q = "e,se,s"; void 0 != l && "" != l && (q = l); g(h).resizable({
                    handles: q, minHeight: 0, minWidth: 0, delay: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var h = g(f.element).data("ui-resizable").axis;
                        g(f.element).children(".ui-resizable-handle").find(".jq-square-" + h).parent().addClass("ui-resizable-handle-hover")
                    }, stop: function (h, l) { g("page").removeClass("resizing"); g(l.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); l.size.height; l.size.width; c.F.Va(l.element); (new n).helper = g(this).closest(".column"); (new f.h.i).j() }, resize: function () { }
                })
            }; h.bg = function (h, l) {
                var n = "e,se,s"; void 0 != l && "" != l && (n = l); g(h).resizable({
                    handles: n, autoHide: !0, delay: 0, start: function (c, f) {
                        if ("se" ==
                        g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) { var h = new v.C.K; h.B(f.helper, "min-height"); h.B(f.helper, "height") }
                    }, stop: function (c, h) { var l = h.size.height; h.size.width; if (g(this).hasClass("empty-container-text") || g(this).hasClass("root-elements")) { var p = new v.C.K; p.B(g(this), "min-height"); p.B(g(this), "height"); g(this).css("min-height", l) } (new f.h.i).j() }, resize: function (f, g) { c.F.Va(g.element) }
                })
            }; h.Va = function (c) {
                try {
                    var f = g(c)[0].getBoundingClientRect(), h = g("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>"),
                    l = g(h).clone(), n = g(h).clone(), q = g(h).clone(); q.addClass("z-index-back"); var r = document.body, b = document.documentElement, e = f.top + (window.pageYOffset || b.scrollTop || r.scrollTop) - (b.clientTop || r.clientTop || 0), d = f.left + (window.pageXOffset || b.scrollLeft || r.scrollLeft) - (b.clientLeft || r.clientLeft || 0), k = g(c).css("width"), w = g(c).css("height"), u = parseFloat(k.replace("px", "")), v = parseFloat(w.replace("px", "")); h.css("left", d - 5); h.css("top", e - 5); n.css("left", d - 5); n.css("top", e + v - 5); l.css("left", d + u - 5); l.css("top",
                    e - 5); q.css("left", d + u - 5); q.css("top", e + v - 5); g(".circle-deg").remove(); g("body").append(h); g("body").append(n); g("body").append(l); g("body").append(q)
                } catch (t) { }
            }; h.Xc = function (h, l) {
                var q = "e,se,s"; void 0 != l && "" != l && (q = l); g(h).resizable({
                    handles: q, autoHide: !0, distance: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var h = g(f.element).data("ui-resizable").axis; g(f.element).children(".ui-resizable-handle").find(".jq-square-" + h).parent().addClass("ui-resizable-handle-hover"); g(f.helper).closest(".key").after("<div class='height float-right dummy-div'></div>");
                        g(".dummy-div").height(f.helper.height() + 2); if ("se" == g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) f.helper.css("height", f.helper.css("min-height")), (new v.C.K).B(f.helper, "min-height")
                    }, stop: function (h, l) {
                        g("page").removeClass("resizing"); g(".dummy-div").remove(); var p = l.size.height; l.size.width; if (g(this).hasClass("empty-container-text") || g(this).hasClass("empty-container-image") || g(this).hasClass("empty-container") || g(this).hasClass("jq-plus-container-text") ||
                        g(this).hasClass("jq-plus-container-image") || g(this).hasClass("jq-text-block-container") || g(this).hasClass("root-elements")) g(this).hasClass("jq-plus-container-image") || g(this).hasClass("empty-container-spacer"), g(this).css("height", p), g(this).css("min-height", p); c.F.Va(l.element); (new n).helper = g(this).closest(".column"); g(l.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); (new f.h.i).j()
                    }, resize: function (c, f) {
                        window.setTimeout(function () {
                            g(".dummy-div").height() < f.helper.height() &&
                            g(".dummy-div").height(g(".dummy-div").height() + 2)
                        }, 10)
                    }
                })
            }; h.Jc = function (l) {
                g(l).droppable({
                    greedy: !0, tolerance: "pointer", accept: ".bldr-draggable, .image-text-other", drop: function (l, n) {
                        if (1 != h.va) {
                            h.va = 1; try {
                                window.a = new c.Xa; window.a.T = void 0; window.a.M = ""; q.b.c.P = g("#nononononelement"); var u = l.clientX, v = l.clientY + g(document).scrollTop(); g(".nearest-element").removeClass("nearest-element"); q.b.c.f.hasClass("image-text-other") && (q.b.c.f = q.b.c.f.closest(".column")); if (q.b.c.f.hasClass("column")) {
                                    var E =
                                    q.b.c.f.find(".image-text-other"), y = [], b = []; if (0 < E.length) { E.each(function (d, c) { var e = g(c), f = parseFloat(e.attr("top")), h = parseFloat(e.attr("bottom")), e = parseFloat(e.attr("left")); v >= f && h >= v && u >= e && (y.push(e), b.push(f)) }); var e = E = 0; 0 < y.length && (E = Math.max.apply(Math, y)); 0 < b.length && (e = Math.max.apply(Math, b)); q.b.c.f.find(".image-text-other[left='" + E + "'][top='" + e + "']").addClass("nearest-element"); q.b.c.P = g(".nearest-element").first(); 0 < q.b.c.P.length && (window.a.T = q.b.c.P, window.a.M = "n") }
                                }
                            } catch (d) { } q.b.c.f =
                            g(".image-selection-drag"); if (2 <= h.Y && void 0 != h.currentTarget && !n.draggable.hasClass("control-drag-anywhere") && !n.draggable.hasClass("bldr-draggable")) h.Y++, n.draggable.css("opacity", "1"), 0 < n.draggable.find(".jq-image-block-image").length ? (n.draggable.css("position", "relative").css("left", "").css("top", ""), void 0 != q.b.c.P && 0 < q.b.c.P.length ? q.b.c.P.after(n.draggable.closest(".empty-container-image")) : h.currentTarget.closest(".key").hasClass("column") ? h.currentTarget.closest(".key").append(n.draggable.closest(".empty-container-image")) :
                            h.currentTarget.closest(".key").after(n.draggable.closest(".empty-container-image"))) : void 0 != q.b.c.P && 0 < q.b.c.P.length ? q.b.c.P.after(n.draggable.css("position", "relative").css("left", "").css("top", "")) : h.currentTarget.closest(".key").hasClass("column") ? h.currentTarget.closest(".key").append(n.draggable.css("position", "relative").css("left", "").css("top", "")) : h.currentTarget.closest(".key").after(n.draggable.css("position", "relative").css("left", "").css("top", "")), g(".image-selection").removeClass("image-selection"),
                            l.stopPropagation(), h.currentTarget = null, g(".image-text-other").each(function (b, c) { var e = g(c), f = e.offset().top + e.height(), h = e.offset().top, l = e.offset().left; e.attr("top", h); e.attr("bottom", f); e.attr("left", l) }), g(".image-selection-drag").removeClass("image-selection-drag"), g(".empty").removeClass("empty"), g("#control-common-execute").trigger("click"), (new f.h.i).j(); else if (!n.draggable.hasClass("control-drag-anywhere") && (n.draggable.css("position", "relative").css("left", "").css("top", ""), n.draggable.hasClass("bldr-draggable"))) switch (n.draggable.attr("id")) {
                                case "bldr-drgb-text": r.Text.H.X("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                    break; case "bldr-drgb-title": r.Text.H.X("<h2>Title Here.</h2>")
                            } g(".image-selection-drag").removeClass("image-selection-drag")
                        }
                    }, out: function () { h.Y++ }, over: function (c) {
                        g(".image-selection-drag").removeClass("image-selection-drag"); h.currentTarget = g(c.target); g(c.target).hasClass("key") ? "inline-block" != g(".close-preview").css("display") && "block" != g(".close-preview").css("display") && (g(c.target).addClass("image-selection-drag"), q.b.c.f = g(c.target)) : "inline-block" != g(".close-preview").css("display") &&
                        "block" != g(".close-preview").css("display") && (g(c.target).closest(".key").addClass("image-selection-drag"), q.b.c.f = g(c.target).closest(".key"))
                    }
                })
            }; h.Ic = function (c) { g(c).each(function (c, f) { try { g(f).draggable("destroy") } catch (h) { } }) }; h.Kc = function (c) { g(c).each(function (c, f) { try { var h = g(f); h.droppable("destroy"); h.removeClass("ui-droppable") } catch (l) { } }) }; h.Zc = function (c) { g(c).each(function (c, f) { try { var h = g(f); h.resizable("destroy"); g(h).find("div").remove(".ui-resizable-handle") } catch (l) { g(h).find("div").remove(".ui-resizable-handle") } }) };
            h.Y = 2; h.va = 0; h.cb = !0; h.ac = ""; return h
        }(); c.F = l
    }(u.I || (u.I = {}))
});
define("page/PageElementBaseJQ", "require exports ../PageElements/ElementJQ ../Error/ErrorJQ ../Common/CommonMethodsJQ ../_Classes/UrlJQ ../_Classes/Auth ../Constants/ConstantsJQ ../UndoManager/UndoManager ../MalFormed/MalFormedJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h) {
    var E = 5; !function (c) {
        var u, A; A = u = 0; var D = function () {
            function c(f, b, e) { this.na = "body"; this.typeName = b; this.za = e; this.ed = "jq-" + this.typeName; this.he = "jq-back-" + this.typeName; this.ge = "jq-additional-" + this.typeName } c.prototype.Ld =
            function () { return "Column_" + ++u }; c.prototype.Nd = function () { return "Row_" + ++A }; c.prototype.Nb = function () { new v.v.A }; c.prototype.Gb = function () { return "." + this.ed }; c.prototype.Oc = function () { if (void 0 == this.na || "" == this.na) this.na = "body"; return h(this.na) }; c.prototype.ka = function () { return h(this.Oc()).find(this.Gb()) }; c.prototype.Qd = function () { return 1 == this.ua() ? "body" == this.za.toString().toLowerCase() ? h(this.za) : h(this.Oc()).find(this.za) : void 0 }; c.prototype.fc = function () {
                if (1 == this.ua()) {
                    if (0 == this.ka().length) {
                        var c =
                        new q.l.Oa.gb; this.da(this.Qd(), c.fb(this.ed + " " + this.he + " " + this.ge + "  key design-row row root-elements page-element jqMargin-0 "), void 0, void 0, void 0, void 0, void 0)
                    } return this
                }
            }; c.prototype.Z = function (c, b, e, d, g, l) {
                if (1 == this.ua()) {
                    var p; 0 == this.ka().length && this.fc(void 0); if (void 0 != b && 0 < b.length) {
                        b = b.toString().split(" "); p = (new q.l.Oa.gb).fb("row key jqRootRow design-row"); for (var n = new f.C.K, t = 0; t < b.length; t++) {
                            var r = "", u = ""; if (void 0 != b[t] && "" != n.vb(b[t])) {
                                var r = b[t].toString().replace(/,/g,
                                " "), u = r.toString().replace("col-xs-", ""), v; v = new q.l.Oa.gb; var B = r + " " + e + " column key design-column column-number-" + t, A = r = ""; if ("Content" == this.typeName || h(c).hasClass("jq-Content")) A = "", 0 == t ? A = "SideBarLeft" : 1 == t ? A = "MiddleContent" : 2 == t && (A = "SideBarRight"), r = "jq-" + A + " jq-back-" + A + " jq-additional-" + A; v = v.fb(B + " " + r); B = this.Ld(); void 0 != v && v.append("<span class='debug-column-css debug-css' scopeId='" + B + "'> " + B + " </span> "); v.attr("scopeId", B); v.attr("column-number", t); v.attr("xs-column-size", u); v.css("min-height",
                                "100px"); v.addClass("column-padding"); "" != r ? v.attr("key-css", ".jq-" + r) : void 0 != c ? v.attr("key-css", h(c).attr("key-css") + " column") : v.attr("key-css", this.Gb() + " column"); void 0 != c ? p.attr("key-css", h(c).attr("key-css") + " row") : p.attr("key-css", this.Gb() + " row"); h(p).append(v); void 0 != g && this.Dc(v, g)
                            }
                        }
                    } e = this.Nd(); p.attr("scopeId", e); void 0 != d && this.Dc(p, d); void 0 == c && (c = this.ka()); h(p).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");
                    void 0 != p && (p.prepend("<div class='jq-row-plus-container jq-prev-row-container'> <span class='jq-row-plus jq-prev-row'> + </span> </div>"), p.append("<div class='jq-row-plus-container jq-next-row-container'> <span class='jq-row-plus jq-next-row'> + </span> </div>")); this.da(c, p, void 0, void 0, void 0, void 0, l); c.hasClass("key") || (c = c.closest(".key")); return !c.hasClass("empty-container-image") && !c.hasClass("empty-container-text") || p.hasClass("row") ? p : (p.wrap("<div class='table-row'></div>"), p.before("<div class='table-cell'></div>"),
                    p.addClass("table-cell"), p.parent())
                }
            }; c.prototype.Dc = function (c, b) {
                if (1 == this.ua() && void 0 != c && void 0 != b) {
                    void 0 != b.height && h(c).css("min-height", b.height + "px"); void 0 != b.width && h(c).css("width", b.width + "px"); if (void 0 != b.padding) {
                        var e = b.padding; void 0 != e.all ? h(c).css("padding", e.all + "px") : (void 0 != e.left && h(c).css("padding-left", e.left + "px"), void 0 != e.top && h(c).css("padding-top", e.top + "px"), void 0 != e.right && h(c).css("padding-right", e.right + "px"), void 0 != e.bottom && h(c).css("padding-bottom", e.bottom +
                        "px"))
                    } void 0 != b.margin && (e = b.margin, void 0 != e.all ? h(c).css("margin", e.all + "px") : (void 0 != e.left && h(c).css("margin-left", e.left + "px"), void 0 != e.top && h(c).css("margin-top", e.top + "px"), void 0 != e.right && h(c).css("margin-right", e.right + "px"), void 0 != e.bottom && h(c).css("margin-bottom", e.bottom + "px")))
                }
            }; c.prototype.da = function (c, b, e, d, f, p, q) {
                if (1 != l.ta.Fa.Ea && 1 == this.ua()) {
                    void 0 != b && b.find(".debug-css").html(""); var r = 0, t = 0; void 0 == c && (c = this.ka()); if (void 0 != d) {
                        "" != d && (d = d.toString().split(" "), void 0 !=
                        d && 1 < d.length && (r = Number(d[0]) + 1, t = Number(d[1]))); if (!(0 < h(c).find(".jqRootRow:nth-child(" + r + ")").children().eq(t).length)) { this.Nb(" Add() : [" + h(c).attr("class") + "] do not have row column [" + r + "," + t + "] to add element"); return } c = h(c).find(".jqRootRow:nth-child(" + r + ")").children().eq(t)
                    } else this.Nb("Warning : Please Add Row to  [" + h(c).attr("class") + "] "); void 0 != b && ("object" != typeof b && (r = document.createElement("span"), h(r).append(b), b = h(r)), h(b).addClass(e)); b.attr("class"); 1 == p && null != window.a &&
                    null != window.a.T && "" != window.a.M ? ("n" == window.a.M || "" == window.a.M ? h(window.a.T).after(b) : h(window.a.T).before(b), c = new n.h.i, c.j()) : 1 == f ? 2 < h("div[src='xa.xml']").length && 1 == g.Ba.Ia.Jb && h(c).prepend(b) : 2 < h("div[src='xa.xml']").length && 1 == g.Ba.Ia.Jb && (void 0 == h(c).attr("unique-id") && (E++, h(c).attr("unique-id", E)), void 0 == q ? h(c).append(b) : 1 == q ? h(c).before(b) : h(c).after(b), h(b).hasClass("jq-Any"), c = new n.h.i, c.j())
                }
            }; c.prototype.Nc = function (c, b) {
                c += 1; var e = h(this.ka()).find(".jqRootRow:nth-child(" + c +
                ")"); if (0 < h(e).length) return h(e).children().eq(b); this.Nb("[" + c + "," + b + "] column not found")
            }; c.prototype.ua = function () { try { var c = this.Pd(); if (1 == this.Sd() || 7 != z.V.ca.Je) return !1; for (var b = 0, e = 6; 0 <= e; e--) { if (this.Vd(c[b]) != z.V.ca.Le[e]) return !1; b++ } return !0 } catch (d) { return !1 } }; c.prototype.Pd = function () { return (new r.C.fe).we() }; c.prototype.Sd = function () { try { return window.self !== window.top } catch (c) { return !0 } }; c.prototype.Vd = function (c) { return String.fromCharCode(c.charCodeAt(0) + 1) }; return c
        }(); c.Sb =
        D
    }(u.l || (u.l = {}))
}); ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("page/anyjq", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f() { c.call(this, null, "Any", v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.zb = r }(u.l || (u.l = {})) });
define("common/on", ["require", "exports", "../page/anyjq", "../Watch/WatchMouseJQ", "jquery"], function (c, u, q, v, f) {
    !function (c) {
        var g = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = g; var u = function () {
            function c() { } c.J = function () { c.Ib(); c.Hb() }; c.Hb = function () { f(".empty-container").unbind("click"); f(".empty-container").on("click", function () { var c = v.b.c.f; void 0 != c && c.hasClass("empty-container") }) }; c.Ib = function () {
                f(".jq-prev-row").unbind("click"); f(".jq-prev-row").on("click", function () {
                    var c =
                    f(this).closest(".row"); (new q.l.zb("")).Z(c, "col-xs-48", "", void 0, void 0, !0); f("#control-common-execute").trigger("click")
                }); f(".jq-next-row").unbind("click"); f(".jq-next-row").on("click", function () { var c = f(this).closest(".row"); (new q.l.zb("")).Z(c, "col-xs-48", "", void 0, void 0, !1); f("#control-common-execute").trigger("click") }); f(".jq-plus-prev").unbind("click"); f(".jq-plus-prev").on("click", function (c) {
                    window.a = new g; f(this).hasClass("image-text-other") ? window.a.T = f(this) : window.a.T = f(this).closest(".image-text-other");
                    window.a.M = "p"; window.a.wa = !1; c.stopPropagation(); var h = c.pageY; f(window).scrollTop() + h >= f(window).height() - 250 && (h = c.pageY - 250); var n = c.pageX; c.pageX > f(document).width() - 200 && (n = c.pageX - 150); f("#smInsertNextPrev").css("left", n + "px"); f("#smInsertNextPrev").css("top", h + "px"); f("#smInsertNextPrev").fadeIn(500)
                }); f(".jq-plus-next").unbind("click"); f(".jq-plus-next").on("click", function (c) {
                    window.a = new g; f(this).hasClass("image-text-other") ? window.a.T = f(this) : window.a.T = f(this).closest(".image-text-other");
                    window.a.M = "n"; window.a.wa = !1; c.stopPropagation(); var h = c.pageY; f(window).scrollTop() + h >= f(window).height() - 250 && (h = c.pageY - 180); var n = c.pageX; c.pageX > f(document).width() - 200 && (n = c.pageX - 150); f("#smInsertNextPrev").css("left", n + "px"); f("#smInsertNextPrev").css("top", h + "px"); f("#smInsertNextPrev").fadeIn(500)
                })
            }; return c
        }(); c.u = u
    }(u.nb || (u.nb = {}))
});
define("JQte/OnInsert", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../Controls/ControlCommonJQ ../jqte/MyJQte ../PageElements/ElementJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n) {
    var l = !1; !function (c) {
        var u = function () {
            function c() { } c.prototype.o = function () {
                n("page .jq-add-column").unbind("click"); n("page .jq-add-column").on("click", function () {
                    var c = n(this).closest(".row").children(".column").length; if (!(4 <= c)) {
                        var g = "", h = ""; 1 == c && (h = "col-xs-24", g = "24"); 2 ==
                        c && (h = "col-xs-16", g = "16"); 3 == c && (h = "col-xs-12", g = "12"); n(this).closest(".row").children(".column").each(function () { n(this); var c = "col-xs-" + n(this).attr("xs-column-size"); c != h && (n(this).addClass(h), n(this).attr("xs-column-size", g), n(this).removeClass(c)) }); var l; l = (new z.l.Oa.gb).fb(h + "  from-column-add-click column key design-column column-number-" + (c + 1)); l.attr("column-number", c + 1); l.attr("xs-column-size", g); l.css("min-height", "100px"); l.addClass("column-padding"); l.addClass("newly-added-column");
                        n(this).closest(".row").children(".column").last().after(l); n("#control-common-execute").trigger("click"); (new f.h.i).j(); return !1
                    } (new q.v.A).ia("Cannot add more than 4 columns")
                }); n("page a").not(".jq-logout").unbind("click"); n("page a").not(".jq-logout").click(function () { r.D.u.oa = !0 }); n("page .jqte-editor").unbind("click"); n("page .jqte-editor").on("click", function () { n(".jqte-editor, .column").removeClass("current-editor-scope"); n(this).addClass("current-editor-scope") }); n("page .column").unbind("click");
                n("page .column").on("click", function () { "none" == n("#jqte-edit-stop").css("display") && (n(".jqte-editor, .column").removeClass("current-editor-scope"), n(this).addClass("current-editor-scope")) }); n("page .jqte-editor").unbind("keydown"); n("page .jqte-editor").on("keydown", function () { c.eb = !0 }); n("page .jqte-editor").unbind("keyup"); n("page .jqte-editor").on("keyup", function () { l = !0 }); n("page .jqte-editor").unbind("focusout"); n("page .jqte-editor").on("focusout", function () { 1 == l && (l = !1, (new f.h.i).j()) });
                n(".empty-container-image").unbind("dblclick"); n(".empty-container-image").on("dblclick", function () { }); n(".empty-container-text").unbind("dblclick"); n(".empty-container-text").on("dblclick", function () {
                    n(".empty-container-text").draggable({ disabled: !1 }); n("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move"); n("page .jq-text-block-content").removeAttr("contentEditable"); n(".current-editor-scope").removeClass("current-editor-scope");
                    n(this).find(".jq-text-block-content").addClass("current-editor-scope"); n(".editor").show(); n(this).draggable({ disabled: !0 }); n(".current-editor-scope").focus(); n(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text"); n(".current-editor-scope").attr("contentEditable", "true")
                }); n("page .jqte-editor").unbind("mouseup"); n("page .jqte-editor").on("mouseup", function () { g.mc.Cc.dd() }); n("page .column").unbind("mouseup"); n("page .column").on("mouseup",
                function () { g.mc.Cc.dd() }); n(".jq-site-link").unbind("dblclick"); n(".jq-site-link").on("dblclick", function () { n(".editor").show(); n(".current-editor-scope").focus(); n(".current-editor-scope").closest(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "text") }); n("page").unbind("click"); n("page").on("click", function (c) {
                    v.b.c.Vc(c); n("#contextMenu").hide(500); n("#smInsertNextPrev").hide(500); if (1 == r.D.u.oa) return r.D.u.oa = !1, null != c.cancelBubble && (c.cancelBubble = !0), c.stopPropagation &&
                    c.stopPropagation(), c.preventDefault && c.preventDefault(), null != c.returnValue && (c.returnValue = !1), !1
                })
            }; c.eb = !1; c.ke = !1; return c
        }(); c.u = u
    }(u.ba || (u.ba = {}))
});
define("controls/ControlCommonJQ", "require exports ./JQueryUI ../common/on ../JQte/OnInsert jquery".split(" "), function (c, u, q, v, f, r) {
    !function (c) {
        var u = function () {
            function c() { } c.gd = function () { r("#control-common-execute").on("click", function () { c.S(); c.J() }) }; c.J = function () {
                window.setTimeout(function () {
                    v.nb.u.J(); (new f.ba.u).o(); q.I.F.Yc(); q.I.F.Xc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image"); q.I.F.Qa(".adjust-image-text-other", "s"); q.I.F.Qa(".adjust-image-text-other-left",
                    "e"); q.I.F.gc(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", ""); r(".empty-container-text, .empty-container-image").css("z-index", "0"); r(".column").each(function () {
                        0 == r(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length ? (r(this).addClass("empty"), 0 == r(this).find(".empty-drop-element").length && r(this).append("<div class='image-text-other empty-drop-element' ></div>")) :
                        (r(this).removeClass("empty"), r(this).find(".empty-drop-element").remove())
                    }); r(".image-text-other, .empty-container-empty").each(function (c, f) { var g = r(f), p = g.offset().top + g.height(), n = g.offset().top, q = g.offset().left; g.attr("top", n); g.attr("bottom", p); g.attr("left", q) }); q.I.F.Jc(".column, .empty-container, .image-text-other"); r(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>"); r(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>"); r(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>")
                },
                10)
            }; c.S = function () { q.I.F.Kc(".column, .empty-container, .image-text-other"); q.I.F.Ic(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer"); q.I.F.Zc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left") }; c.oa = !1; return c
        }(); c.u = u
    }(u.D || (u.D = {}))
});
ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) };
define("controls/imagejq", "require exports ../Error/ErrorJQ ../ControlNames/PageControlNamesJQ ../Page/Context/ContextJQ ../Watch/WatchMouseJQ ./ControlCommonJQ ../Common/OperationJQ ../UndoManager/UndoManager jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l) {
    var h = 0, E = 0; !function (c) {
        var u = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = u; var A = function (c) {
            function p() { c.apply(this, arguments) } ca(p, c); p.prototype.o = function () { this.Gd(); this.Ed(); this.Ab() }; p.prototype.Mc = function () {
                return "Image_Block_" +
                ++h
            }; p.prototype.Fb = function () { return "Image_Block_Container_" + ++E }; p.prototype.Ed = function () { l("#control-image-bi-library").on("click", ".image-library-image", function () { l(".image-library-image").removeClass("image-library-select"); l(".image-library-image").removeClass("image-library-bi-select"); l(this).addClass("image-library-select"); l(this).addClass("image-library-bi-select") }); l(p.N).on("click", ".image-library-image", function () { l(".image-library-image").removeClass("image-library-select"); l(this).addClass("image-library-select") }) };
            p.Mb = function (c) { if (1 == /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c) && 5 <= c.length) { c = c.toLowerCase(); for (var b = ["jpeg", "jpg", "png", "gif"], e = 0; e < b.length; e++) { var d = c.substr(c.length - 5, 5).split("."); if (2 <= d.length && d[1] == b[e]) return !0 } } return !1 }; p.prototype.Ab = function () {
                l(p.N).find(".action-button-insert-image").on("click", function () { "" != l(".internet-image-url").val() ? p.ha(l(".internet-image-url").val()) : p.ha(void 0) }); l(".action-button-change-image").on("click",
                function () { var c = r.b.c.f; if (void 0 != c && c.hasClass("empty-container-image")) { var b = l(".image-library-select").attr("src"); "" != b && (c.find(".jq-plus-container-image").find("img").attr("src", b), (new n.h.i).j()) } else (new q.v.A).U("please select a image change."); l("#control-image-library").hide() })
            }; p.le = function () { l(".action-button-insert-image").hide(); l(".action-button-change-image").show(); l("#control-image-library").show(); l("#control-image-library").trigger("custom_loaded") }; p.ha = function (c) {
                var b =
                new p, e = new q.v.A; e.$c("page-insert-image"); var d = new f.l.Cb, h = r.b.c.f; h.hasClass("column") || null != window.a && null != window.a.T || (window.a = new u, window.a.T = h, window.a.M = "n"); void 0 == h && (h = l("#nnnoelement")); if (void 0 != h) {
                    var n = document.createElement("div"), v = document.createElement("div"), A = document.createElement("div"), t = document.createElement("img"); l(t).addClass("jq-image-block-image "); l(t).addClass("normal-element image-element"); l(A).addClass("jq-image-block-image-wrapper "); c = void 0 == c ? l(".image-library-select").attr("src") :
                    c; l(t).attr("src", c); l(A).append(t); l(v).append(A); l(v).addClass(p.ab); A = b.Mc(); void 0 != v && l(v).prepend("<span class='debug-image-block-css debug-css' scopeId='" + A + "'> " + A + " </span> "); l(v).attr("scopeId", A); l(n).append(v); b = b.Fb(); l(n).append(" <span class='debug-image-block-container-css debug-css' scopeId='" + b + "'> " + b + " </span> "); l(n).addClass(p.$a); l(n).attr("scopeId", b); 1 == h.hasClass("column") || null != window.a ? (b = l(".jq-plus-container.jq-plus-container-not-used").clone(), b.removeClass("jq-plus-container-not-used"),
                    b.addClass("jq-plus-container-image"), b.addClass("design-css"), b.addClass("design-empty-text-css"), b.removeClass("jq-plus-container"), b.find(".jq-plus-element-content").addClass("jq-plus-element-content-image"), v = document.createElement("div"), b.find(".adjust-image-text-other").remove(), b.css("height", "200px"), b.css("width", "200px"), v = l(v), v.prepend("<div class='adjust-image-text-other-left design-css design-adjust-image-text-other'></div>"), v.prepend("<div class='adjust-image-text-other design-css design-adjust-image-text-other'></div>"),
                    v.addClass("empty-container-image image-text-other key design-css design-empty-text-css"), v.append(b), b.find(".jq-plus-content").append(n), z.pb.yb.J(), null == window.a || "" == window.a.M ? d.l.Aa.da(h, v, "", void 0, void 0, void 0, void 0) : d.l.Aa.da(h, v, "", void 0, void 0, !0, void 0), h.hasClass("jq-image-block-container") && (d = h.attr("scopeId"), h.find(".debug-image-block-container-css[scopeId=" + d + "]").remove(), void 0 != d && h.append('<span class="debug-image-block-container-css debug-css" scopeId="' + d + '" > ' + d + "</span>")),
                    l(n).find(".debug-css").remove(), e.Ha(""), l(p.N).hide(), g.D.u.S(), g.D.u.J()) : e.U("You can only insert in a column block.")
                } l(".image-library-image").removeClass("image-library-select"); l(".internet-image-url").val("")
            }; p.prototype.Gd = function () { l(".load-more-images").on("click", function () { p.jb() }); l(p.N).on("custom_loaded", function () { p.jd(); p.jb() }) }; p.Xb = function () { l(".imges-get-start").val((Number(l(".imges-get-start").val()) + 20).toString()) }; p.Ga = function () {
                if (0 == l(".imges-get-start").length) {
                    var c =
                    l(document.createElement("input")); c.addClass("imges-get-start hide"); l("body").append(c); l(".imges-get-start").val("0")
                } return l(".imges-get-start").val()
            }; p.jb = function () { var c = { start: p.Ga(), Ag: 20 }, c = JSON.stringify(c); l.ajax({ type: "POST", url: "/services/ImageService.asmx/GetImages", data: c, contentType: "application/json; charset=utf-8", dataType: "json", success: p.Qb, error: p.Pb }) }; p.jd = function () { l(".imges-get-start").val("0") }; p.Qb = function (c) {
                c = c.d; 0 < c.length && ("0" == p.Ga() && l(".image-library").html(""),
                p.Xb()); for (var b = 0; b < c.length; b++) { var e = document.createElement("div"); l(e).addClass("image-lib-container"); var d = document.createElement("img"); l(d).attr("src", c[b].Qf); l(d).addClass("image-library-image"); l(d).addClass("img-thumbnail"); l(e).append(d); l(".image-library").append(e) }
            }; p.Pb = function () { (new q.v.A).U("Some Problem !. <br>Try again latter.") }; p.g = function () { var c = (new q.v.A, r.b.c.f); void 0 != c && (c.hasClass("row") || c.hasClass("normal-element")) }; p.N = "#control-image-library"; p.ab = "jq-image-block design-image-block normal-element";
            p.$a = "jq-image-block-container design-image-block normal-element jq-container"; return p
        }(v.Tc.l.Image.ec); c.aa = A
    }(u.Image || (u.Image = {}))
});
define("Controls/BIjq", "require exports ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../controls/imagejq jquery jqueryui".split(" "), function (c, u, q, v, f, r) {
    var g = !1; !function (c) {
        var n = function () {
            function c() { } c.prototype.o = function () {
                r(document).ready(function () {
                    0 == g && (g = !0, r(".smart-menu-bi-control").spinner({
                        min: 0, max: 2E3, step: 1, change: function () { }, spin: function () {
                            var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); if (void 0 != c) {
                                var f = r(".smart-menu-bi-height").spinner("value"),
                                g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val())
                            }
                        }, stop: function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); if (void 0 != c) { var f = r(".smart-menu-bi-height").spinner("value"), g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val()); (new v.h.i).j() } }
                    }), r(".bi-browse").on("click", function () {
                        f.Image.aa.jb();
                        r("#control-image-bi-library").show()
                    }), r(".make-100").on("click", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (r(".ddn-bi-pixel-type").val("%"), r(".smart-menu-bi-height").spinner("value", 100), r(".smart-menu-bi-width").spinner("value", 100), c.css("background-size", 100 + r(".ddn-bi-pixel-type").val() + " 100" + r(".ddn-bi-pixel-type").val()), (new v.h.i).j()) }), r(".ddn-bi-pixel-type").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") &&
                        (c = c.find(".jq-plus-container-text")); if (void 0 != c) { var f = r(".smart-menu-bi-height").spinner("value"), g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val()); (new v.h.i).j() }
                    }), r(".action-button-insert-bi-image").on("click", function () { var c = r(".image-library-bi-select").first().attr("src"); r(".bi-selected-image").val(c).change(); r(".image-library-image").removeClass("image-library-bi-select"); r("#control-image-bi-library").hide() }),
                    r(".control-bi-controls .bi-selected-image").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); 1 == r(".bi-body").is(":checked") ? (r("page").css("background-image", "url('" + r(this).val() + "')"), c = new v.h.i, c.j()) : void 0 != c && (c.css("background-image", "url('" + r(this).val() + "')"), c = new v.h.i, c.j()) }), r(".control-bi-controls .internet-bi-image-url").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text"));
                        void 0 != c && (c.css("background-image", "url(" + r(this).val() + ")"), (new v.h.i).j())
                    }), r(".control-bi-controls .ddn-bi-repeat").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-repeat", r(this).val()), (new v.h.i).j()) }), r(".control-bi-controls .ddn-bi-attachment").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-attachment",
                        r(this).val()), (new v.h.i).j())
                    }), r(".control-bi-controls .ddn-bi-position").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-position", r(this).val()), (new v.h.i).j()) }))
                })
            }; c.g = function () {
                c.a = !0; try {
                    var f = q.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); if (void 0 != f) {
                        var g = f.css("background-image").replace("url(", "").replace(")", ""); r(".bi-selected-image").val(g); var p = f.css("background-repeat");
                        r(".ddn-bi-repeat").val(p); var n = f.css("background-attachment"); r(".ddn-bi-attachment").val(n); var u = f.css("background-position"); r(".ddn-bi-position").val(u); var v = f.css("background-size"); if (void 0 != v) {
                            var z = v.split(" "); if (2 <= z.length) { var y = z[0], b = z[1]; r(".ddn-bi-pixel-type").val("px"); y = y.replace("px", ""); b = b.replace("px", ""); r(".smart-menu-bi-height").spinner("value", b); r(".smart-menu-bi-width").spinner("value", y) } else r(".smart-menu-bi-height").spinner("value", 0), r(".smart-menu-bi-width").spinner("value",
                            0)
                        }
                    }
                } catch (e) { } c.a = !1
            }; c.a = !1; return c
        }(); c.Ca = n
    }(u.pa || (u.pa = {}))
});
define("Controls/SpacerJQ", ["require", "exports", "../Watch/WatchMouseJQ", "../Page/Context/ContextJQ", "jquery"], function (c, u, q, v, f) {
    !function (c) {
        var g = function () {
            function c() { } c.od = function () {
                var c = q.b.c.f; if (void 0 != c && (1 == c.hasClass("column") || c.hasClass("empty-container-text") || c.hasClass("empty-container-image") || c.hasClass("empty-container") || null != window.a)) {
                    var g = new v.l.Cb, h = document.createElement("span"); f(h).addClass("empty-container empty-container-spacer key image-text-other design-css design-empty-css"); f(h).css("font-size",
                    "14px"); var r = f(".jq-plus-container.jq-plus-container-not-used").clone(); r.removeClass("jq-plus-container-not-used"); var p = f(document.createElement("div")); p.addClass("empty-spacer"); p.html("<center></center>"); r.find(".jq-plus-content").append(p); f(h).append(r); null == window.a || "" == window.a.M ? g.l.Aa.da(c, f(h), "", void 0, void 0, void 0, void 0) : g.l.Aa.da(c, f(h), "", void 0, void 0, !0, void 0)
                }
            }; return c
        }(); c.ud = g
    }(u.bd || (u.bd = {}))
});
define("Controls/../../SiteManager_TS/Site/SiteJQ", ["require", "exports"], function (c, u) {
    !function (c) {
        var u = function () {
            function c() { } c.prototype.o = function () { }; c.Yg = function () { (new c).xe(jQuery(".input-site-name-primary").val()); jQuery(".control-page").hide(); jQuery(".loading").hide() }; c.Xg = function () { jQuery(".loading").hide() }; c.$g = function () { (new c).rf(); jQuery(".control-page").hide(); jQuery(".loading").hide() }; c.Zg = function () { jQuery(".loading").hide() }; c.prototype.xe = function (q, g, u) {
                void 0 == g && (g =
                c.Ub); void 0 == u && (u = c.Rb); q = JSON.stringify({ Re: q }); jQuery.ajax({ type: "POST", url: "/services/pageService.asmx/getPages", data: q, contentType: "application/json; charset=utf-8", dataType: "json", success: g, error: u })
            }; c.Ub = function (c) {
                jQuery(".loading").hide(); jQuery("#nestable3").html(""); c = c.d; var f = jQuery(".jq-pages-list.hide").clone(), q = jQuery(".jq-page-item.hide").clone(), n = f.clone(); n.removeClass("hide"); jQuery("#nestable3").append(n); for (var l = 0; l < c.length; l++) {
                    var h = q.clone(); h.removeClass("hide");
                    h.attr("data-id", c[l].Qc); h.find(".jq-page-item-name").text(c[l].nc); var u = jQuery(document.createElement("a")), p = c[l].Sa, p = p.replace("?", "&"); u.attr("href", "/shiv/designer.aspx?PageName=" + p + "&SiteName=" + jQuery(".input-site-name-primary").val()); u.addClass("white-link"); u.append("Open"); u.css("float", "right"); u.addClass("btn btn-primary btn-xs"); h.find(".jq-page-item-name").append(u); n.append(h)
                } for (l = 0; l < c.length; l++) "" != c[l].Kd && (0 == jQuery(".jq-page-item[data-id='" + c[l].Kd + "']").children("ol").length &&
                (q = f.clone(), q.removeClass("hide"), jQuery(".jq-page-item[data-id='" + c[l].Kd + "']").append(q)), jQuery(".jq-page-item[data-id='" + c[l].Kd + "']").children("ol").append(jQuery(".jq-page-item[data-id='" + c[l].Qc + "']"))); jQuery("#nestable3").fh()
            }; c.Rb = function () { jQuery(".loading").hide() }; c.prototype.rf = function () { jQuery.ajax({ type: "POST", url: "/services/pageService.asmx/getSites", contentType: "application/json; charset=utf-8", dataType: "json", success: c.zf, error: c.yf }) }; c.zf = function (c) {
                jQuery(".loading").hide();
                c = c.d; jQuery(".site-manager-data").html(""); for (var f = 0; f < c.length; f++) { var q = jQuery(".site-data.hide").clone(); q.removeClass("hide"); q.find(".site-name").html(c[f].nc); var n = jQuery(document.createElement("a")); n.attr("href", "/shiv/PageManager.aspx?SiteName=" + c[f].nc); n.addClass("white-link"); n.append("Open"); q.find(".open-site").append(n); jQuery(".site-manager-data").append(q) }
            }; c.yf = function () { jQuery(".loading").hide() }; return c
        }(); c.dg = u
    }(u.Ke || (u.Ke = {}))
});
define("error/errorjq", ["require", "exports", "jquery"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c() { } c.prototype.$c = function (c) { this.Za = c }; c.prototype.Wd = function (c) { q("#notify").clearQueue(); q("#notify").html(""); q("#notify").append(c); q("#notify").css("display", "block"); this.cd() }; c.prototype.Sc = function (c) { q("#notify").clearQueue(); q("#notify").html(c); q("#notify").css("display", "block"); this.cd() }; c.prototype.cd = function () {
                window.clearTimeout(c.interval); c.interval = window.setTimeout(this.be,
                1E4)
            }; c.prototype.be = function () { q("#notify").css("display", "none"); window.clearTimeout(c.interval) }; c.prototype.U = function (c) { q(".error-" + this.Za).css("border", "2px solid red"); c = void 0 == c || "" == c ? "Action Failed" : "<div class='error-notify-block'>Action Failed </div><br/>" + c; q(this.la()).removeClass("success-notify-background"); q(this.la()).addClass("error-notify-background"); this.Sc(c) }; c.prototype.ia = function (c, f) {
                void 0 != c && -1 != c.toLowerCase().indexOf("page loaded") && q(".jq-loading").hide(); var n =
                q(document.createElement("div")); void 0 != f ? n.addClass("yellow-green-notify-background") : n.addClass("yellow-notify-background"); n.html(""); n.append(c); q(this.la()).removeClass("error-notify-background"); q(this.la()).removeClass("success-notify-background"); this.Wd(n)
            }; c.prototype.Ha = function (c) {
                q(".error-" + this.Za).css("border", "1px solid green"); q(".error-" + this.Za).removeClass("error-" + this.Za); void 0 != c && "" != c || (c = "Action Success"); q(this.la()).removeClass("error-notify-background"); q(this.la()).addClass("success-notify-background");
                this.Sc(c)
            }; c.prototype.la = function () { return q("#notify") }; c.bc = "#notify"; return c
        }(); c.A = f
    }(u.v || (u.v = {}))
});
define("Controls/LinkJQ", "require exports ../../SiteManager_TS/Site/SiteJQ ../error/errorjq ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../Controls/ControlCommonJQ ../Common/OperationJQ ../Constants/ConstantsJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l) {
    var h = !1; !function (c) {
        var p = function () {
            function c() { } c.prototype.o = function () { 0 == h && (h = !0, this.Ec()) }; c.nf = function () { (new q.Ke.dg).xe(l(".input-site-name").val(), c.Ub, c.Rb) }; c.Ub = function (f) {
                l(".jq-loading").hide(); f = f.d; l(".insert-link-links").html("");
                for (var g = 0; g < f.length; g++) { var h; h = 0 == g ? "<option selected value='" + f[g].nc + "'>" + f[g].nc.replace(".html", "") + "</option>" : "<option value='" + f[g].nc + "'>" + f[g].nc.replace(".html", "") + "</option>"; l(".insert-link-links").append(h) } l(".insert-link-name").val(l(".insert-link-links").find("option:selected").text()); f = c.fa(!0); l(".insert-link-preview").html(f)
            }; c.Rb = function () { l(".jq-loading").hide(); l(".insert-link-links").html(""); (new v.v.A).U("Something went wrong<br>Try again later!") }; c.Md = function () {
                return "NormalLink" +
                ++n.V.vd.Pe
            }; c.prototype.Ec = function () {
                l("#insert-internet-link-url").on("change", function () { c.Ja = !0; l("#insert-internet-link-name").val("Give Name"); var f; f = l("#insert-internet-link-url").val(); if (0 < f.length) for (; " " == f.charAt(0) ;) f = f.substring(1); if ("" != f) { var g = f.indexOf("https://"), h = f.indexOf("//"); 0 != f.indexOf("http://") && 0 != g && 0 != h && l(this).val("//" + l(this).val()) } else (new v.v.A).ia("Please provide External Link Url."); f = c.fa(!0, l(this).val(), l("#insert-internet-link-name").val()); l(".insert-link-preview").html(f) });
                l("#insert-internet-link-name").on("change", function () { c.Ja = !0; if ("Give Name" != l(this).val()) { var f = c.fa(!0, l("#insert-internet-link-url").val(), l(this).val()); l(".insert-link-preview").html(f); f = l("#insert-internet-link-url").val(); if (0 < f.length) for (; " " == f.charAt(0) ;) f = f.substring(1); "" == f && (new v.v.A).ia("Please provide External Link Url.") } }); l(".btn-style").on("click", function () {
                    l(".btn-style").removeClass("btn-style-selected"); l(this).addClass("btn-style-selected"); var f; f = 1 == c.Ja ? c.fa(!0, l("#insert-internet-link-url").val(),
                    l("#insert-internet-link-name").val()) : c.fa(!0); l(".insert-link-preview").html(f)
                }); l(".action-button-insert-link").on("click", function () { var h; h = 1 == c.Ja ? c.fa(!1, l("#insert-internet-link-url").val(), l("#insert-internet-link-name").val()) : c.fa(!1); var p = f.b.c.f; void 0 != p && (z.pb.yb.J(), p.append(h), (new r.h.i).j(), l("page a").not(".jq-logout").unbind("click"), l("page a").not(".jq-logout").on("click", function () { g.D.u.oa = !0 }), g.D.u.S(), g.D.u.J()); l("#control-insert-link").hide() }); l(".insert-link-name").on("change",
                function () { c.Ja = !1; c.fa(!0); l(".insert-link-preview").find("a").text(l(this).val()) }); l("#control-insert-link").on("change", ".insert-link-links", function () { c.Ja = !1; l(".insert-link-name").val(l(".insert-link-links").find("option:selected").text()); var f = c.fa(!0); l(".insert-link-preview").html(f); l("#insert-internet-link-name").val(""); l("#insert-internet-link-url").val("") })
            }; c.fa = function (f, g, h) {
                var p; 0 == f && (p = c.Md()); void 0 == g && (g = l(".insert-link-links").find("option:selected").val()); var b = l(".btn-style-selected").attr("btn-style");
                void 0 == b && (b = " btn-default "); void 0 == h && (h = l(".insert-link-name").val()); return 1 == f ? "<span style='display:inline-block;;float:none;' class='key jq-normal-link jq-site-link-container  btn " + b + "'><a contentEditable='true' target='_blank' class='jq-site-link jqte-editor' href='" + g + "?nocache=true'>" + h + "</a></span>" : "<span style='display:inline-block' class='key jq-normal-link jq-site-link-container  btn " + b + "'><a contentEditable='true' id='" + p + "' class='jq-site-link jqte-editor ' href='" + g + "?nocache=true'>" +
                h + "</a></span>"
            }; c.tb = function () { l("#control-insert-link").show(); l(".jq-loading").show(); c.nf() }; c.Te = function () { }; c.g = function () { }; return c
        }(); c.kc = p
    }(u.Sa || (u.Sa = {}))
});
define("Controls/HtmlJQ", "require exports ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../Controls/ControlCommonJQ jquery".split(" "), function (c, u, q, v, f, r) {
    var g = !1; !function (c) {
        var n = function () {
            function c() { } c.prototype.o = function () { 0 == g && (g = !0, this.Ec()) }; c.prototype.Ec = function () {
                r(".action-button-insert-html-clear").on("click", function () { r(".input-html").val("") }); r(".action-button-insert-html").on("click", function () {
                    var c = q.b.c.f; if (void 0 != c) {
                        var g = r(".input-html").val(), l = r(document.createElement("div"));
                        l.css("float", "left"); l.addClass("key empty-container design-empty-css"); l.css("height", "100px"); l.append(r.parseHTML(g, document, !0)); r(l).html(); c.append(l); (new v.h.i).j(); f.D.u.S(); f.D.u.J()
                    } r("#control-insert-html").hide()
                })
            }; c.tb = function () { r(".control-page").removeClass("control-active"); r("#control-insert-html").addClass("control-active"); r("#control-insert-html").show(); r(".input-html").val("") }; c.Te = function () { }; c.g = function () { }; return c
        }(); c.nd = n
    }(u.Pc || (u.Pc = {}))
});
define("Controls/MarginJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager jquery jqueryui".split(" "), function (c, u, q, v, f, r, g) {
    var z = !1, n = 0; !function (c) {
        var h = function () {
            function c() { } c.prototype.o = function () { c.pg() }; c.pg = function () {
                g(document).ready(function () {
                    0 == z && (z = !0, g(".margin-advanced-show").on("click", function () { g(".jq-margin-advanced").fadeToggle(1) }), g(".control-margin-margin").spinner({
                        min: -1500, max: 1500, step: 1, value: 0, change: function () {
                            0 ==
                            c.a && c.m(this)
                        }, spin: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new r.h.i).j() }
                    }))
                })
            }; c.m = function (h) {
                c.a = !0; try {
                    0 != n && (n = 1, v.b.c.sb()); var l = v.b.c.f; l.hasClass("key") || (l = l.closest(".key")); if (void 0 != l) {
                        var r = new q.v.A; if (l.hasClass("column")) r.ia("Cannot change margin for [Column] blocks"); else {
                            g(h).hasClass("control-margin-all") && g(h).closest(".control-margin-controls").find(".control-margin-margin").not(".control-margin-all").spinner("value", g(h).val()); var u = new f.C.K,
                            z = g(h).closest(".control-margin-controls").find(".control-margin-left").spinner("value"), y = g(h).closest(".control-margin-controls").find(".control-margin-top").spinner("value"), b = g(h).closest(".control-margin-controls").find(".control-margin-right").spinner("value"), e = g(h).closest(".control-margin-controls").find(".control-margin-bottom").spinner("value"); void 0 != z && l.css("margin-left", z + "px"); void 0 != y && l.css("margin-top", y + "px"); void 0 != b && l.css("margin-right", b + "px"); void 0 != e && l.css("margin-bottom",
                            e + "px"); 0 == z && 0 == y && 0 == b && 0 == e && (u.B(l, "margin-left"), u.B(l, "margin-top"), u.B(l, "margin-bottom"), u.B(l, "margin-right"), u.B(l, "margin"))
                        }
                    }
                } catch (d) { } c.a = !1
            }; c.G = function () {
                var f = v.b.c.f; f.hasClass("key") || (f = f.closest(".key")); c.a = !0; if (void 0 != f) {
                    var h = f.css("margin-left"), l = f.css("margin-top"), n = f.css("margin-right"), f = f.css("margin-bottom"); void 0 != h && (h = h.replace("px", ""), g(".control-margin-left").spinner("value", h)); void 0 != l && (l = l.replace("px", ""), g(".control-margin-top").spinner("value", l));
                    void 0 != n && (n = n.replace("px", ""), g(".control-margin-right").spinner("value", n)); void 0 != f && (f = f.replace("px", ""), g(".control-margin-bottom").spinner("value", f)); h == l && h == n && h == f && g(".control-margin-all").spinner("value", h)
                } c.a = !1
            }; c.g = function () { c.G() }; c.N = ".control-margin"; c.a = !1; return c
        }(); c.kb = h
    }(u.Ta || (u.Ta = {}))
});
define("Controls/PaddingJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager jquery jqueryui".split(" "), function (c, u, q, v, f, r, g) {
    var z = !1, n = 0; !function (c) {
        var h = function () {
            function c() { } c.prototype.o = function () { c.qg() }; c.qg = function () {
                g(document).ready(function () {
                    0 == z && (z = !0, g(".padding-advanced-show").on("click", function () { g(".jq-padding-advanced").fadeToggle(1) }), g(".control-padding-padding").spinner({
                        min: 1, max: 1500, step: 1, value: 0, change: function () {
                            0 ==
                            c.a && c.m(this)
                        }, spin: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new r.h.i).j() }
                    }))
                })
            }; c.m = function (h) {
                c.a = !0; try {
                    0 != n && (n = 1, v.b.c.sb()); var l = v.b.c.f; l.hasClass("empty-container-text") && (l = l.find(".jq-plus-container-text")); if (void 0 != l) {
                        new q.v.A; g(h).hasClass("control-padding-all") && g(".control-padding-padding").not(".control-padding-all").spinner("value", g(h).val()); var r = new f.C.K, u = g(".control-padding-left").spinner("value"), z = g(".control-padding-top").spinner("value"),
                        y = g(".control-padding-right").spinner("value"), b = g(".control-padding-bottom").spinner("value"); void 0 != u && l.css("padding-left", u + "px"); void 0 != z && l.css("padding-top", z + "px"); void 0 != y && l.css("padding-right", y + "px"); void 0 != b && l.css("padding-bottom", b + "px"); 0 == u && 0 == z && 0 == y && 0 == b && (r.B(l, "padding-left"), r.B(l, "padding-top"), r.B(l, "padding-bottom"), r.B(l, "padding-right"), r.B(l, "padding"))
                    }
                } catch (e) { } c.a = !1
            }; c.G = function () {
                var f = v.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text"));
                c.a = !0; if (void 0 != f) {
                    var h = f.css("padding-left"), l = f.css("padding-top"), n = f.css("padding-right"), f = f.css("padding-bottom"); void 0 != h && (h = h.replace("px", ""), g(".control-padding-left").spinner("value", h)); void 0 != l && (l = l.replace("px", ""), g(".control-padding-top").spinner("value", l)); void 0 != n && (n = n.replace("px", ""), g(".control-padding-right").spinner("value", n)); void 0 != f && (f = f.replace("px", ""), g(".control-padding-bottom").spinner("value", f)); h == l && h == n && h == f && g(".control-padding-all").spinner("value",
                    h)
                } c.a = !1
            }; c.g = function () { c.G() }; c.N = ".control-padding"; c.a = !1; return c
        }(); c.qb = h
    }(u.Ua || (u.Ua = {}))
});
define("Controls/FrontBackJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../UndoManager/UndoManager jquery jqueryui".split(" "), function (c, u, q, v, f, r) {
    var g = !1, z = 0; !function (c) {
        var l = function () {
            function c() { } c.prototype.o = function () { c.Bg() }; c.Bg = function () { r(document).ready(function () { 0 == g && (g = !0, r(".control-z-zindex").slider({ min: 1, max: 500, step: 1, value: 0, change: function () { 0 == c.a && c.m(this) }, spin: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new f.h.i).j() } })) }) }; c.m =
            function () { c.a = !0; try { 0 != z && (z = 1, v.b.c.sb()); var f = v.b.c.f; if (void 0 != f && (new q.v.A, f.hasClass("image-text-other"))) { var g = r(".control-z-zindex").slider("value"); f.css("z-index", g) } } catch (l) { } c.a = !1 }; c.G = function () { var f = v.b.c.f; c.a = !0; void 0 != f && f.hasClass("image-text-other") && (f = f.css("z-index"), r(".control-z-zindex").slider("value", f)); c.a = !1 }; c.g = function () { c.G() }; c.a = !1; return c
        }(); c.ib = l
    }(u.Pa || (u.Pa = {}))
});
define("Controls/OpacityJQ", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../UndoManager/UndoManager jquery jqueryui".split(" "), function (c, u, q, v, f, r) {
    var g = !1, z = 0; !function (c) {
        var l = function () {
            function c() { } c.prototype.o = function () { c.Se() }; c.Se = function () { r(document).ready(function () { 0 == g && (g = !0, r(".control-o-opacity").slider({ min: 0, max: 1, step: .1, value: 1, change: function () { 0 == c.a && c.m(this) }, slide: function () { 0 == c.a && c.m(this) }, stop: function () { 0 == c.a && c.m(this); (new f.h.i).j() } })) }) }; c.m =
            function () { c.a = !0; try { 0 != z && (z = 1, v.b.c.sb()); var f = v.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); if (void 0 != f) { var g = (new q.v.A, r(".control-o-opacity").slider("value")); f.css("opacity", g) } } catch (l) { } c.a = !1 }; c.G = function () { var f = v.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); c.a = !0; void 0 != f && (f = f.css("opacity"), r(".control-o-opacity").slider("value", f)); c.a = !1 }; c.g = function () { c.G() }; c.a = !1; return c
        }(); c.ob = l
    }(u.Opacity || (u.Opacity =
    {}))
});
define("Controls/BorderShadow", "require exports ../Error/ErrorJQ ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager jquery ColorPicker".split(" "), function (c, u, q, v, f, r, g) {
    var z = !1; !function (c) {
        var l = function () {
            function c() { } c.prototype.o = function () { c.$b() }; c.$b = function () {
                g(document).ready(function () {
                    0 == z && (z = !0, g(".b-s-remove").on("click", function () {
                        var c = new f.C.K; g(".control-b-s").spinner("value", 0); g(".b-s-color").val("000000").keyup(); var h = v.b.c.f; h.hasClass("empty-container-text") && (h =
                        h.find(".jq-plus-container-text")); c.B(h, "box-shadow"); (new r.h.i).j()
                    }), g(".b-s-glow").on("click", function () { g(".control-b-s").spinner("value", 0); g(".control-b-s-blur").spinner("value", 35); g(".b-s-color").val("0000FF").keyup(); (new r.h.i).j() }), g(".b-s-color").colorpicker(), g(".b-s-colorr").trigger("keyup"), g(".b-s-color").on("change", function () { c.m(this) }), g(".control-b-s").spinner({
                        min: -800, max: 800, step: 1, value: 1, change: function () { 0 == c.a && c.m(this) }, spin: function () { 0 == c.a && c.m(this) }, stop: function () {
                            0 ==
                            c.a && c.m(this); (new r.h.i).j()
                        }
                    }))
                })
            }; c.m = function () { c.a = !0; try { var f = v.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); if (void 0 != f) { var l = (new q.v.A, g(".control-b-s-h").spinner("value")), n = g(".control-b-s-v").spinner("value"), r = g(".control-b-s-blur").spinner("value"), u = g(".b-s-color").val(); "" == u ? u = "#000000" : (u = u.replace("#", ""), u = "#" + u); f.css("box-shadow", l + "px " + n + "px " + r + "px " + u) } } catch (z) { } c.a = !1 }; c.G = function () { v.b.c.f }; c.g = function () { c.G() }; c.jh = 0; c.a = !1; return c
        }();
        c.hd = l
    }(u.Fc || (u.Fc = {}))
});
define("ContextMenu/Contextmenujq", "require exports ../Watch/WatchMouseJQ ../Controls/ControlsJQ ../Watch/CopyPasteJQ ../Controls/ImageJQ ../Controls/BorderJQ ../Controls/ColorJQ ../Controls/TextJQ ../SmartMenu/SmartMenuJQ ../Controls/Menujq ../Controls/BIjq ../Controls/SpacerJQ ../Controls/LinkJQ ../Controls/HtmlJQ ../Controls/MarginJQ ../Controls/PaddingJQ ../Controls/FrontBackJQ ../Controls/OpacityJQ ../Controls/BorderShadow jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p, B, A, D, C, y, b, e, d) {
    var k =
    !1, w = !1; !function (c) {
        var u = function () {
            function c() { this.N = "#contextMenu" } c.prototype.o = function () { this.Ud() }; c.Hb = function () {
                d(document).on("click", function () { (new c).Hc() }); d(document).bind("contextmenu", function (b) {
                    q.b.c.Vc(b); window.setTimeout(function () {
                        try {
                            q.b.c.P = d("#nononononelement"); var c = b.clientX, e = b.clientY + d(document).scrollTop(); d(".nearest-element").removeClass("nearest-element"); var f = q.b.c.f; q.b.c.f.hasClass("image-text-other") && (f = q.b.c.f.closest(".column")); if (f.hasClass("column")) {
                                var g =
                                q.b.c.f.find(".image-text-other"), h = [], k = []; if (0 < g.length) { g.each(function (b, f) { var g = d(f), l = parseFloat(g.attr("top")), p = parseFloat(g.attr("bottom")), g = parseFloat(g.attr("left")); e >= l && p >= e && c >= g && (h.push(g), k.push(l)) }); var l = g = 0; 0 < h.length && (g = Math.max.apply(Math, h)); 0 < k.length && (l = Math.max.apply(Math, k)); f.find(".image-text-other[left='" + g + "'][top='" + l + "']").addClass("nearest-element"); q.b.c.P = d(".nearest-element").first() }
                            }
                        } catch (p) { }
                    }, 5); b.preventDefault(); var e = new c; e.Hc(); var f = b.clientY;
                    350 <= f && (f -= d("#contextMenu").height()); var g = b.clientX; g > d(document).width() - 200 && (g -= 150); d(e.N).css("left", g + "px"); d(e.N).css("top", f + "px"); d(e.N).fadeIn(500); b.cancelBubble = !1
                })
            }; c.prototype.Hc = function () {
                var b = q.b.c.f; void 0 != b && (d(".ctx-menu-add-row").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-cut").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert").parent().addClass("ctx-menu-disabled"),
                d(".ctx-menu-insert-text").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-youtube").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-html").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-css").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-menu").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-empty-space").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-link").parent().addClass("ctx-menu-disabled"),
                d(".ctx-menu-insert-object").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().addClass("ctx-menu-disabled"), b.hasClass("root-elements") && d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled"), b.hasClass("jqRootRow") && (d(".ctx-menu-cut").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")),
                b.hasClass("column") && (d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")), b.hasClass("image-text-other") && (d(".ctx-menu-cut").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"),
                d(".ctx-menu-insert").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")), b.hasClass("page") && (d(".ctx-menu-add-row").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-height-width").parent().addClass("ctx-menu-disabled")), b.hasClass("row") && d(".ctx-menu-add-row").parent().addClass("ctx-menu-disabled"))
            }; c.$a = function () {
                d(".li.ctx-menu-delete-element").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Lb() })
            }; c.Ga = function () { d(".li.ctx-menu-insert-link-container").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || f.ga.ja.qe() }) }; c.cb = function () { (new B.Sa.kc).o(); d(".ctx-menu-insert-link").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || (c.$b(), B.Sa.kc.g()) }) }; c.bb = function () {
                (new A.Pc.nd).o(); d(".ctx-menu-insert-html").on("click", function () {
                    window.a = null; d(this).parent().hasClass("ctx-menu-disabled") ||
                    c.Zb()
                })
            }; c.yc = function () {
                d(".li.smart-menu-insert-text").on("click", function () { n.Text.H.X("Sample text to edit"); n.Text.H.g() }); d(".li.ctx-menu-insert-text").on("click", function () { window.a = null; n.Text.H.X("Sample text to edit"); n.Text.H.g() }); d(".tool-normal-text").on("click", function () { n.Text.H.X(" Sample text to edit"); n.Text.H.g() }); d(".tool-heading-1").on("click", function () { n.Text.H.X("<h1> Heading1 to edit</h1>"); n.Text.H.g() }); d(".tool-heading-2").on("click", function () {
                    n.Text.H.X("<h2> Heading2 to edit</h2>");
                    n.Text.H.g()
                }); d(".tool-heading-3").on("click", function () { n.Text.H.X("<h3> Heading3 to edit</h3>"); n.Text.H.g() }); d(".tool-heading-4").on("click", function () { n.Text.H.X("<h4> Heading4 to edit</h4>"); n.Text.H.g() }); d(".tool-heading-5").on("click", function () { n.Text.H.X("<h5> Heading5 to edit</h5>"); n.Text.H.g() })
            }; c.va = function () {
                d(".control-templates").find(".close-button").on("click", function () { d(".control-page").removeClass("control-active"); c.G() }); d(".control-page").find(".close-button").on("click",
                function () { d(".control-page").removeClass("control-active"); c.G(); d(".internet-bi-image-url").val(""); d(".internet-image-url").val("") })
            }; c.G = function () { d(".jq-properties-all").hasClass("forced-hide") || d(".jq-properties-all").show() }; c.L = function () {
                d(".control-page").hide(); d(".control-page").attr("style", ""); d(".control-page").css("display", "none"); d(".control-page").removeClass("control-active"); "block" == d(".jq-properties-all").css("display") ? (d(".jq-properties-all").addClass("normal-hide"), d(".jq-properties-all").hide()) :
                d(".jq-properties-all").hasClass("forced-hide") || d(".jq-properties-all").show()
            }; c.$b = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-insert-link").addClass("control-active"); B.Sa.kc.tb() }; c.Zb = function () { c.L(); A.Pc.nd.tb() }; c.yd = function () {
                c.L(); d(".editor").show(); d(".jqte-editor, .column").removeClass("current-editor-scope"); d(this).find(".jqte-editor").addClass("current-editor-scope"); d(".control-page").removeClass("control-active"); d("#control-insert-text").addClass("control-active");
                d("#control-insert-text").show(); d("#control-insert-text").trigger("cust_loaded")
            }; c.Xb = function () { c.L(); var b = v.l.xb.O; d(".control-page").removeClass("control-active"); d(b).addClass("control-active"); d(b).show(); d(b).trigger("cust_loaded") }; c.rc = function () { (new h.ea.lc).o(); c.L(); d(".control-page").removeClass("control-active"); d(".control-menu").addClass("control-active"); d(".control-menu").show(); h.ea.lc.Ee() }; c.ha = function () {
                c.L(); var b = r.Image.aa.N; d(".control-page").removeClass("control-active");
                d(b).addClass("control-active"); d(".action-button-insert-image").show(); d(".action-button-change-image").hide(); d(b).show(); d(b).trigger("custom_loaded")
            }; c.Ib = function () { f.ga.ja.Id() }; c.Lb = function () { f.ga.ja.ue() }; c.Kb = function () { f.ga.ja.Jd() }; c.Pb = function () { f.ga.ja.Xd() }; c.Ob = function () { d(".jq-clipboard").html(""); d("#control-insert-clipboard").show() }; c.Yb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-height-width").addClass("control-active"); d("#control-height-width").show() };
            c.Ub = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-border").addClass("control-active"); d("#control-border").show() }; c.ac = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-margin").addClass("control-active"); d("#control-margin").show() }; c.tc = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-padding").addClass("control-active"); d("#control-padding").show() }; c.sc = function () {
                c.L(); d(".control-page").removeClass("control-active");
                d("#control-opacity").addClass("control-active"); d("#control-opacity").show()
            }; c.uc = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-zindex").addClass("control-active"); d("#control-zindex").show() }; c.Qb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-border-shadow").addClass("control-active"); d("#control-border-shadow").show() }; c.Wb = function () {
                c.L(); d(".control-page").removeClass("control-active"); d("#control-color").addClass("control-active");
                d("#control-color").show()
            }; c.Rb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-bi").addClass("control-active"); d("#control-bi").show() }; c.Y = function () { d(".li.ctx-menu-add-row").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Xb(), v.l.xb.g()) }) }; c.ab = function () { d(".li.ctx-menu-height-width").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Yb(), l.Wa.ub.g()) }) }; c.vc = function () {
                (new g.Da.Ka).o(); d(".li.ctx-menu-border").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Ub(), g.Da.Ka.g()) })
            }; c.zc = function () { (new D.Ta.kb).o(); d(".li.ctx-menu-margin").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.ac(), D.Ta.kb.g()) }) }; c.Bc = function () { (new C.Ua.qb).o(); d(".li.ctx-menu-padding").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.tc(), C.Ua.qb.g()) }) }; c.Ac = function () {
                (new b.Opacity.ob).o(); d(".li.ctx-menu-opacity").on("click", function () {
                    d(this).parent().hasClass("ctx-menu-disabled") ||
                    (c.sc(), b.Opacity.ob.g())
                })
            }; c.hb = function () { (new y.Pa.ib).o(); d(".li.ctx-menu-z-index").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.uc(), y.Pa.ib.g()) }) }; c.ma = function () { (new e.Fc.hd).o(); d(".li.ctx-menu-border-shadow").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Qb(), e.Fc.hd.g()) }) }; c.xa = function () { d(".li.ctx-menu-copy").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Ib() }) }; c.ya = function () {
                d(".li.ctx-menu-cut").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Kb() })
            }; c.Ja = function () { d(".li.ctx-menu-paste").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Pb() }) }; c.La = function () { d(".li.ctx-menu-paste-clipborad").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Ob() }) }; c.Na = function () {
                d(".smart-menu-insert-empty-space").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || p.bd.ud.od() }); d(".ctx-menu-insert-empty-space").on("click",
                function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || p.bd.ud.od() })
            }; c.Ab = function () { (new r.Image.aa).o(); d(".li.smart-menu-insert-image").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.ha(), r.Image.aa.g()) }); d(".li.ctx-menu-insert-image").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || (c.ha(), r.Image.aa.g()) }) }; c.fa = function () {
                (new E.pa.Ca).o(); d(".li.ctx-menu-background-image").on("click", function () {
                    d(this).parent().hasClass("ctx-menu-disabled") ||
                    (c.Rb(), E.pa.Ca.g())
                })
            }; c.xc = function () { d(".li.ctx-menu-insert-menu").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.rc(), h.ea.lc.g()) }) }; c.wc = function () { (new z.Color.Ma).o(); d(".li.ctx-menu-color").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Wb(), z.Color.Ma.g()) }) }; c.Eb = function () {
                d("#contextMenuitems").find(".li").on("mouseenter", function (b) {
                    var c = 147; b.pageX > d(document).width() - 200 && (c = -150); d(this).parent().find(".innerListContainer").first().css("left",
                    c + "px"); d(this).parent().find(".innerListContainer").first().css("display", "block")
                }); d("#contextMenuitems").find("li").on("mouseleave", function () { d(this).find(".innerListContainer").first().css("display", "none") })
            }; c.Mb = function () { d("#contextMenuitems > li").on("click", function () { }) }; c.prototype.Ud = function () {
                d(document).ready(function () {
                    0 == w && (w = !0, d(document).on("click", function () { d("#contextMenu").hide(500); d("#smInsertNextPrev").hide(500) }), 0 == k && (k = !0, c.Hb(), c.Mb(), c.Eb(), c.Ga(), c.cb(), c.bb(),
                    c.yc(), c.Y(), c.$a(), c.ab(), c.xa(), c.Ja(), c.La(), c.ya(), c.Ab(), c.Na(), c.vc(), c.zc(), c.hb(), c.ma(), c.Ac(), c.Bc(), c.wc(), c.xc(), c.fa(), c.va()))
                })
            }; return c
        }(); c.kd = u
    }(u.dc || (u.dc = {}))
});
define("controls/bijq", "require exports ../Watch/WatchMouseJQ ../UndoManager/UndoManager ../controls/imagejq jquery jqueryui".split(" "), function (c, u, q, v, f, r) {
    var g = !1; !function (c) {
        var n = function () {
            function c() { } c.prototype.o = function () {
                r(document).ready(function () {
                    0 == g && (g = !0, r(".smart-menu-bi-control").spinner({
                        min: 0, max: 2E3, step: 1, change: function () { }, spin: function () {
                            var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); if (void 0 != c) {
                                var f = r(".smart-menu-bi-height").spinner("value"),
                                g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val())
                            }
                        }, stop: function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); if (void 0 != c) { var f = r(".smart-menu-bi-height").spinner("value"), g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val()); (new v.h.i).j() } }
                    }), r(".bi-browse").on("click", function () {
                        f.Image.aa.jb();
                        r("#control-image-bi-library").show()
                    }), r(".make-100").on("click", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (r(".ddn-bi-pixel-type").val("%"), r(".smart-menu-bi-height").spinner("value", 100), r(".smart-menu-bi-width").spinner("value", 100), c.css("background-size", 100 + r(".ddn-bi-pixel-type").val() + " 100" + r(".ddn-bi-pixel-type").val()), (new v.h.i).j()) }), r(".ddn-bi-pixel-type").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") &&
                        (c = c.find(".jq-plus-container-text")); if (void 0 != c) { var f = r(".smart-menu-bi-height").spinner("value"), g = r(".smart-menu-bi-width").spinner("value"); c.css("background-size", g + r(".ddn-bi-pixel-type").val() + " " + f + r(".ddn-bi-pixel-type").val()); (new v.h.i).j() }
                    }), r(".action-button-insert-bi-image").on("click", function () { var c = r(".image-library-bi-select").first().attr("src"); r(".bi-selected-image").val(c).change(); r(".image-library-image").removeClass("image-library-bi-select"); r("#control-image-bi-library").hide() }),
                    r(".control-bi-controls .bi-selected-image").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); 1 == r(".bi-body").is(":checked") ? (r("page").css("background-image", "url('" + r(this).val() + "')"), c = new v.h.i, c.j()) : void 0 != c && (c.css("background-image", "url('" + r(this).val() + "')"), c = new v.h.i, c.j()) }), r(".control-bi-controls .internet-bi-image-url").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text"));
                        void 0 != c && (c.css("background-image", "url(" + r(this).val() + ")"), (new v.h.i).j())
                    }), r(".control-bi-controls .ddn-bi-repeat").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-repeat", r(this).val()), (new v.h.i).j()) }), r(".control-bi-controls .ddn-bi-attachment").on("change", function () {
                        var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-attachment",
                        r(this).val()), (new v.h.i).j())
                    }), r(".control-bi-controls .ddn-bi-position").on("change", function () { var c = q.b.c.f; c.hasClass("empty-container-text") && (c = c.find(".jq-plus-container-text")); void 0 != c && (c.css("background-position", r(this).val()), (new v.h.i).j()) }))
                })
            }; c.g = function () {
                c.a = !0; try {
                    var f = q.b.c.f; f.hasClass("empty-container-text") && (f = f.find(".jq-plus-container-text")); if (void 0 != f) {
                        var g = f.css("background-image").replace("url(", "").replace(")", ""); r(".bi-selected-image").val(g); var n = f.css("background-repeat");
                        r(".ddn-bi-repeat").val(n); var u = f.css("background-attachment"); r(".ddn-bi-attachment").val(u); var v = f.css("background-position"); r(".ddn-bi-position").val(v); var z = f.css("background-size"); if (void 0 != z) {
                            var C = z.split(" "); if (2 <= C.length) { var y = C[0], b = C[1]; r(".ddn-bi-pixel-type").val("px"); y = y.replace("px", ""); b = b.replace("px", ""); r(".smart-menu-bi-height").spinner("value", b); r(".smart-menu-bi-width").spinner("value", y) } else r(".smart-menu-bi-height").spinner("value", 0), r(".smart-menu-bi-width").spinner("value",
                            0)
                        }
                    }
                } catch (e) { } c.a = !1
            }; c.a = !1; return c
        }(); c.Ca = n
    }(u.pa || (u.pa = {}))
});
define("Watch/WatchMouseJQ", "require exports ../Common/CommonMethodsJQ ../Controls/ControlsJQ ../Controls/TextJQ ../Controls/ImageJQ ../Controls/FontJQ ../Controls/BorderJQ ../Controls/ColorJQ ../SmartMenu/SmartMenuJQ ../Error/ErrorJQ ../ContextMenu/Contextmenujq ../controls/bijq ../JQte/OnInsert ../MalFormed/MalFormedJQ ../Controls/ControlCommonJQ ../Controls/MarginJQ ../Controls/PaddingJQ ../Controls/FrontBackJQ ../Watch/CopyPasteJQ ../Controls/OpacityJQ jquery".split(" "), function (c, u, q, v, f, r,
g, z, n, l, h, E, p, B, A, D, C, y, b, e, d, k) {
    var w = !1; !function (c) {
        var u = function () {
            function c() { } c.sb = function () { 0 < k(".removable-row").length && (k(".removable-row").removeClass("removable-row"), k(".columns-pending").removeClass("columns-pending"), c.f = k("#nononoelement")); void 0 == c.f && (new h.v.A).ia("Please select a element.") }; c.Wf = function () {
                if (!k("page").hasClass("dragging") && !k("page").hasClass("resizing")) {
                    var b = k(event.target); b.hasClass("key") || (b = b.closest(".key")); k(".key").removeClass("control-focused");
                    b.addClass("control-focused")
                }
            }; c.Vc = function (e) {
                new q.C.K; k(".column").removeClass("newly-added-column"); if ("inline-block" != k(".close-preview").css("display") && "block" != k(".close-preview").css("display") && 1 != A.ta.Fa.Ea) {
                    void 0 != c.f && 0 == e.ctrlKey && (c.f.removeClass("image-selection"), c.f.removeClass("design-select-element-just-mark")); 0 == e.ctrlKey && k(".image-selection").removeClass("image-selection"); c.f = k(e.target); c.f = c.f.closest(".key"); 0 == c.f.hasClass("key") && (c.f = k("#noelement")); c.f.hasClass("column") ?
                    k(".selected-display-element").text("Column") : c.f.hasClass("row") ? k(".selected-display-element").text("Row") : c.f.hasClass("empty-container-text") || c.f.hasClass("jq-plus-container-text") ? k(".selected-display-element").text("Text Block") : c.f.hasClass("empty-container-image") ? k(".selected-display-element").text("Image") : c.f.hasClass("jq-normal-link") ? k(".selected-display-element").text("Link") : c.f.hasClass("page") && k(".selected-display-element").text("Page"); c.f.hasClass("empty-container-text") || c.f.hasClass("jq-plus-container-text") ||
                    (k(".empty-container-text").draggable({ disabled: !1 }), k(".editor").hide(), k("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move")); 1 == c.f.hasClass("column") ? (k(".design-page-row").hide(), c.f.parent().children(".design-page-row").show()) : 1 == c.f.hasClass("row") ? (k(".design-page-row").hide(), c.f.children(".design-page-row").show()) : 1 == c.f.hasClass("image-text-other") ? (k(".design-page-row").hide(), c.f.parent().parent().children(".design-page-row").show()) :
                    k(".design-page-row").hide(); c.f.addClass("design-select-element-just-mark"); v.l.xb.g(); var h = c.Ze(), u = c.Kb(); if (void 0 != h && "" != h) switch (h.toLowerCase()) { case "height-width": l.Wa.ub.g(); break; case "image-library": r.Image.aa.g(); break; case "color": n.Color.Ma.g(); break; case "border": z.Da.Ka.g(); break; case "insert-text": f.Text.H.g(); break; case "bi": p.pa.Ca.g(); break; case "margin": C.Ta.kb.g(); break; case "padding": y.Ua.qb.g(); break; case "zindex": b.Pa.ib.g(); break; case "opacity": d.Opacity.ob.g() } if (void 0 !=
                    u && "" != u) switch (u.toLowerCase()) { case "height-width": l.Wa.ub.g(); break; case "image-library": r.Image.aa.g(); break; case "color": n.Color.Ma.g(); break; case "border": z.Da.Ka.g(); break; case "insert-text": f.Text.H.g(); break; case "bi": p.pa.Ca.g(); break; case "margin": C.Ta.kb.g(); break; case "padding": y.Ua.qb.g(); break; case "zindex": b.Pa.ib.g(); break; case "opacity": d.Opacity.ob.g() } try { "none" != k(".jq-properties-all").css("display").toLowerCase() && (n.Color.Ma.g(), l.Wa.ub.g(), z.Da.Ka.g(), g.Lc.md.g(), p.pa.Ca.g()) } catch (w) { } void 0 ==
                    c.f || c.f.hasClass("jqte") || "inline-block" == k(".close-preview").css("display") || "block" == k(".close-preview").css("display") || (1 == e.ctrlKey && c.f.hasClass("image-selection") ? c.f.removeClass("image-selection") : c.f.addClass("image-selection"), 1 == e.ctrlKey && (c.f = k(".image-selection"))); try {
                        var x = k(c.f)[0].getBoundingClientRect(), B = k("<div class='circle-deg' style='width:14px; border-radius:50%; height:14px; border:2px solid white; position:absolute; background-color:#00A1FF;'></div>"), E = k(B).clone(), D =
                        k(B).clone(), J = k(B).clone(); J.addClass("z-index-back"); var O = document.body, ja = document.documentElement, U = x.top + (window.pageYOffset || ja.scrollTop || O.scrollTop) - (ja.clientTop || O.clientTop || 0), da = x.left + (window.pageXOffset || ja.scrollLeft || O.scrollLeft) - (ja.clientLeft || O.clientLeft || 0), Z = k(c.f).css("width"), ta = k(c.f).css("height"), N = parseFloat(Z.replace("px", "")), V = parseFloat(ta.replace("px", "")); B.css("left", da - 5); B.css("top", U - 5); D.css("left", da - 5); D.css("top", U + V - 5); E.css("left", da + N - 7); E.css("top",
                        U - 5); J.css("left", da + N - 7); J.css("top", U + V - 5); k(".circle-deg").remove(); k("body").append(B); k("body").append(D); k("body").append(E); k("body").append(J)
                    } catch (w) { }
                }
            }; c.Ze = function () { for (var b = "", c = k(".control-page"), d = 0; d < c.length; d++) if ("block" == k(c[d]).css("display")) { b = k(c[d]).attr("name"); break } return b }; c.pc = function () {
                var e = c.Kb(); if (void 0 != e && "" != e) switch (e.toLowerCase()) {
                    case "height-width": l.Wa.ub.g(); break; case "image-library": r.Image.aa.g(); break; case "color": n.Color.Ma.g(); break; case "border": z.Da.Ka.g();
                        break; case "insert-text": f.Text.H.g(); break; case "bi": p.pa.Ca.g(); break; case "margin": C.Ta.kb.g(); break; case "padding": y.Ua.qb.g(); break; case "zindex": b.Pa.ib.g(); break; case "opacity": d.Opacity.ob.g()
                }
            }; c.Kb = function () { var b = ""; return b = k(".prop-sb.ui-accordion-header-active").first().attr("name") }; c.prototype.mg = function () {
                k(document).ready(function () {
                    0 == w && (w = !0, k(".prop-sb").click(function () {
                        v.l.xb.g(); var e = c.Kb(); if (void 0 != e && "" != e) switch (e.toLowerCase()) {
                            case "height-width": l.Wa.ub.g(); break;
                            case "image-library": r.Image.aa.g(); break; case "color": n.Color.Ma.g(); break; case "border": z.Da.Ka.g(); break; case "insert-text": f.Text.H.g(); break; case "bi": p.pa.Ca.g(); break; case "margin": C.Ta.kb.g(); break; case "padding": y.Ua.qb.g(); break; case "zindex": b.Pa.ib.g(); break; case "opacity": d.Opacity.ob.g()
                        }
                    }), k(document).mousemove(function () { c.Wf() }), k("page").on("click", function (b) {
                        c.Vc(b); if (1 == D.D.u.oa) return D.D.u.oa = !1, null != b.cancelBubble && (b.cancelBubble = !0), b.stopPropagation && b.stopPropagation(),
                        b.preventDefault && b.preventDefault(), null != b.returnValue && (b.returnValue = !1), !1
                    }), k("input").on("keydown", function (b) { 8 == b.which && (B.ba.u.eb = !0) }), k("textarea").on("keydown", function (b) { 8 == b.which && (B.ba.u.eb = !0) }), k(".jqte-editor").on("keydown", function (b) { 8 == b.which && (B.ba.u.eb = !0) }), k(document).on("keydown", function (b) {
                        if (8 == b.which) {
                            if (0 == B.ba.u.eb && 0 == B.ba.u.ke) return null != b.cancelBubble && (b.cancelBubble = !0), b.stopPropagation && b.stopPropagation(), b.preventDefault && b.preventDefault(), null != b.returnValue &&
                            (b.returnValue = !1), !1; B.ba.u.eb = !1
                        } if (b.ctrlKey || b.metaKey) switch (String.fromCharCode(b.which).toLowerCase()) {
                            case "s": try { console.log("ctrl + s pressed") } catch (d) { } event.preventDefault(); k(".jq-save").click(); return !1; case "z": if (!c.f.hasClass("empty-container-text") && !c.f.hasClass("jq-plus-container-text") || 1 != c.f.length || "text" != c.f.find(".jq-text-block-content").css("cursor")) { try { console.log("ctrl + z pressed") } catch (d) { } event.preventDefault(); k(".jq-undo").click(); return !1 } break; case "y": try { console.log("ctrl + y pressed") } catch (d) { } event.preventDefault();
                                k(".jq-redo").click(); return !1
                        }
                    }), k("page").bind("copy", function () { e.ga.ja.Id() }), k("page").bind("paste", function () { c.f.hasClass("column") ? e.ga.ja.Xd(!0) : (new h.v.A).ia("Please select a [Column] to paste.") }), k("page").bind("cut", function () { e.ga.ja.Jd() }), k(window).on("beforeunload", function () { k(".control-page").hide(); k(".control-page").removeClass("control-active"); k("#control-save").addClass("control-active"); k("#control-save").show(); return "Note: Unsaved changes will be lost!" }), k(document).keyup(function (b) {
                        if (27 ===
                        b.which) return k(".empty-container-text").draggable({ disabled: !1 }), k(".empty-container-image").draggable({ disabled: !1 }), k("page .jq-text-block-content").removeAttr("contentEditable"), k("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move"), k(".editor").hide(), E.dc.kd.L(), null != b.cancelBubble && (b.cancelBubble = !0), b.stopPropagation && b.stopPropagation(), b.preventDefault && b.preventDefault(), null != b.returnValue && (b.returnValue = !1), !1
                    }))
                })
            };
            return c
        }(); c.c = u
    }(u.b || (u.b = {}))
});
define("Controls/JQueryUI", "require exports ../Watch/WatchMouseJQ ../Common/CommonMethodsJQ ../UndoManager/UndoManager ../Controls/TextJQ jquery jqueryui".split(" "), function (c, u, q, v, f, r, g) {
    !function (c) {
        c.Xa = function () { return function () { this.M = ""; this.wa = !1 } }(); var n = function () { return function () { } }(); c.gg = n; var l = function () {
            function h() { } h.gc = function (c, f) {
                g(c).draggable({
                    cancel: f, revert: "invalid", helper: "clone", appendTo: "body", distance: 5, start: function (c, f) {
                        h.cb = !1; g("#interface_bottom").hide();
                        g(f.helper).addClass("jq-dragging"); g("page").addClass("dragging"); h.va = 0; h.Y++; f.helper.css("z-index", "9999999999"); f.helper.css("opacity", "0.8")
                    }, stop: function (c, f) { h.cb = !0; g("#interface_bottom").show(); g(f.helper).removeClass("jq-dragging"); g("page").removeClass("dragging"); h.Y = 2; g(".image-selection-drag-original").removeClass("image-selection-drag-original"); f.helper.css("opacity", "1"); f.helper.css("z-index", "0") }, drag: function (c) { (g(c.target).hasClass("key") ? g(c.target) : g(c.target).closest(".key")).addClass("image-selection-drag-original") }
                })
            };
            h.Xf = function () {
                g(".image-element").resizable({
                    handles: "e,se,s", autoHide: !0, delay: 0, start: function (c, f) { var g = new v.C.K; g.B(f.helper.closest(".ui-wrapper"), "min-height"); g.B(f.helper.closest(".ui-wrapper"), "height"); g.B(f.helper.closest(".ui-wrapper"), "min-width"); g.B(f.helper.closest(".ui-wrapper"), "width") }, stop: function (c, f) {
                        var g = new v.C.K; g.B(f.helper.closest(".ui-wrapper"), "min-height"); g.B(f.helper.closest(".ui-wrapper"), "height"); g.B(f.helper.closest(".ui-wrapper"), "min-width"); g.B(f.helper.closest(".ui-wrapper"),
                        "width")
                    }, resize: function (f, h) { c.F.Va(h.element); (new n).helper = g(this).closest(".column") }
                })
            }; h.kg = function () { return "error" }; h.Yc = function () {
                g(".column").resizable({
                    handles: "e,s", autoHide: !0, distance: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var l = g(f.element).data("ui-resizable").axis; g(f.element).children(".ui-resizable-handle").find(".jq-square-" + l).parent().addClass("ui-resizable-handle-hover"); if ("se" == g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) f.element.height(f.element.height()),
                        h.ac = g(f.helper).css("min-height"), (new v.C.K).B(f.helper, "min-height"); g(f.helper).nextAll(".column").hide(); g(f.element).data("ui-resizable")
                    }, stop: function (c, h) {
                        g("page").removeClass("resizing"); g(h.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); g(".ui-resizable-se").removeClass("selected-resizable"); var l = h.size.height, n = h.size.width, q = h.originalSize.height, r = h.originalSize.width, u = g(h.helper).parent().width(), u = 2 * Math.floor(1 * u / 100), b = new v.C.K; g(h.helper).attr("style");
                        l != q && (b.Vb(h.helper, "height"), g(h.helper).css("min-height", l)); b.B(h.helper, "min-width"); b.B(h.helper, "width"); if (n > r) {
                            l = g(h.helper).nextAll(".column"); try {
                                for (var e = h.helper.parent().children(".column"), d = 0; d < e.length; d++) g(e[d]).attr("xs-column-size"); var k = Math.floor((n - r) / u); 0 == k && (k = 1); var w = g(h.helper).nextAll(".column").length, x = Math.floor(k / w); 0 == x && (x = 1); for (var n = k, z = 0; z < l.length && 0 < n; z++) {
                                    var t = Number(g(l[z]).attr("xs-column-size")); 1 != t && (d = t - x, 1 > d ? (n = n - x + 1, d = 1) : n -= x, g(l[z]).removeClass("col-xs-" +
                                    t), g(l[z]).addClass("col-xs-" + d), g(l[z]).attr("xs-column-size", d))
                                } var K = Number(h.helper.attr("xs-column-size")), z = K + k - n; k == n && (z += n); var M = 0; h.helper.parent().children(".column").each(function () { M += Number(g(this).attr("xs-column-size")) }); for (var L = M - K + z; 48 < L;) z--, L--; g(h.helper).removeClass("col-xs-" + K); g(h.helper).addClass("col-xs-" + z); h.helper.attr("xs-column-size", z)
                            } catch (ea) { } l.show()
                        } else if (r > n) {
                            l = g(h.helper).nextAll(".column"); try {
                                if (k = Math.floor((r - n) / u), 0 == k && (k = 1), x = Math.floor(k / 1), 0 ==
                                x && (x = 1), K = Number(h.helper.attr("xs-column-size")), 1 < K && (n = x, z = K - x, 0 > z && (n = x + z, z = 1), 0 == z && (n = x - 1, z = 1), g(h.helper).removeClass("col-xs-" + K), g(h.helper).addClass("col-xs-" + z), h.helper.attr("xs-column-size", z), 0 < k)) {
                                    t = Number(g(l[0]).attr("xs-column-size")); d = t + n; M = 0; h.helper.parent().children(".column").each(function () { M += Number(g(this).attr("xs-column-size")) }); for (L = M - Number(g(l[0]).attr("xs-column-size")) + d; 48 < L;) d--, L--; g(l[0]).removeClass("col-xs-" + t); g(l[0]).addClass("col-xs-" + d); g(l[0]).attr("xs-column-size",
                                    d)
                                }
                            } catch (ea) { } l.show()
                        } g(h.helper).nextAll(".column").show(); (new f.h.i).j()
                    }, resize: function () { }
                })
            }; h.Af = function (c, f) { "se" == g(f.element).data("ui-resizable").axis || ("s" == g(f.element).data("ui-resizable").axis ? f.helper.height(f.helper.height() + 20) : "s" == g(f.element).data("ui-resizable").axis) }; h.Qa = function (h, l) {
                var q = "e,se,s"; void 0 != l && "" != l && (q = l); g(h).resizable({
                    handles: q, minHeight: 0, minWidth: 0, delay: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var h = g(f.element).data("ui-resizable").axis;
                        g(f.element).children(".ui-resizable-handle").find(".jq-square-" + h).parent().addClass("ui-resizable-handle-hover")
                    }, stop: function (h, l) { g("page").removeClass("resizing"); g(l.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); l.size.height; l.size.width; c.F.Va(l.element); (new n).helper = g(this).closest(".column"); (new f.h.i).j() }, resize: function () { }
                })
            }; h.bg = function (h, l) {
                var n = "e,se,s"; void 0 != l && "" != l && (n = l); g(h).resizable({
                    handles: n, autoHide: !0, delay: 0, start: function (c, f) {
                        if ("se" ==
                        g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) { var h = new v.C.K; h.B(f.helper, "min-height"); h.B(f.helper, "height") }
                    }, stop: function (c, h) { var l = h.size.height; h.size.width; if (g(this).hasClass("empty-container-text") || g(this).hasClass("root-elements")) { var n = new v.C.K; n.B(g(this), "min-height"); n.B(g(this), "height"); g(this).css("min-height", l) } (new f.h.i).j() }, resize: function (f, g) { c.F.Va(g.element) }
                })
            }; h.Va = function (c) {
                try {
                    var f = g(c)[0].getBoundingClientRect(), h = g("<div class='circle-deg' style='width:12px; border-radius:50%; height:12px; position:absolute; background-color:#00A1FF;'></div>"),
                    l = g(h).clone(), n = g(h).clone(), q = g(h).clone(); q.addClass("z-index-back"); var r = document.body, b = document.documentElement, e = f.top + (window.pageYOffset || b.scrollTop || r.scrollTop) - (b.clientTop || r.clientTop || 0), d = f.left + (window.pageXOffset || b.scrollLeft || r.scrollLeft) - (b.clientLeft || r.clientLeft || 0), k = g(c).css("width"), u = g(c).css("height"), v = parseFloat(k.replace("px", "")), z = parseFloat(u.replace("px", "")); h.css("left", d - 5); h.css("top", e - 5); n.css("left", d - 5); n.css("top", e + z - 5); l.css("left", d + v - 5); l.css("top",
                    e - 5); q.css("left", d + v - 5); q.css("top", e + z - 5); g(".circle-deg").remove(); g("body").append(h); g("body").append(n); g("body").append(l); g("body").append(q)
                } catch (t) { }
            }; h.Xc = function (h, l) {
                var q = "e,se,s"; void 0 != l && "" != l && (q = l); g(h).resizable({
                    handles: q, autoHide: !0, distance: 0, start: function (c, f) {
                        g("page").addClass("resizing"); var h = g(f.element).data("ui-resizable").axis; g(f.element).children(".ui-resizable-handle").find(".jq-square-" + h).parent().addClass("ui-resizable-handle-hover"); g(f.helper).closest(".key").after("<div class='height float-right dummy-div'></div>");
                        g(".dummy-div").height(f.helper.height() + 2); if ("se" == g(f.element).data("ui-resizable").axis || "s" == g(f.element).data("ui-resizable").axis) f.helper.css("height", f.helper.css("min-height")), (new v.C.K).B(f.helper, "min-height")
                    }, stop: function (h, l) {
                        g("page").removeClass("resizing"); g(".dummy-div").remove(); var p = l.size.height; l.size.width; if (g(this).hasClass("empty-container-text") || g(this).hasClass("empty-container-image") || g(this).hasClass("empty-container") || g(this).hasClass("jq-plus-container-text") ||
                        g(this).hasClass("jq-plus-container-image") || g(this).hasClass("jq-text-block-container") || g(this).hasClass("root-elements")) g(this).hasClass("jq-plus-container-image") || g(this).hasClass("empty-container-spacer"), g(this).css("height", p), g(this).css("min-height", p); c.F.Va(l.element); (new n).helper = g(this).closest(".column"); g(l.element).find(".ui-resizable-handle").removeClass("ui-resizable-handle-hover"); (new f.h.i).j()
                    }, resize: function (c, f) {
                        window.setTimeout(function () {
                            g(".dummy-div").height() < f.helper.height() &&
                            g(".dummy-div").height(g(".dummy-div").height() + 2)
                        }, 10)
                    }
                })
            }; h.Jc = function (l) {
                g(l).droppable({
                    greedy: !0, tolerance: "pointer", accept: ".bldr-draggable, .image-text-other", drop: function (l, n) {
                        if (1 != h.va) {
                            h.va = 1; try {
                                window.a = new c.Xa; window.a.T = void 0; window.a.M = ""; q.b.c.P = g("#nononononelement"); var u = l.clientX, v = l.clientY + g(document).scrollTop(); g(".nearest-element").removeClass("nearest-element"); q.b.c.f.hasClass("image-text-other") && (q.b.c.f = q.b.c.f.closest(".column")); if (q.b.c.f.hasClass("column")) {
                                    var C =
                                    q.b.c.f.find(".image-text-other"), y = [], b = []; if (0 < C.length) { C.each(function (c, e) { var f = g(e), h = parseFloat(f.attr("top")), l = parseFloat(f.attr("bottom")), f = parseFloat(f.attr("left")); v >= h && l >= v && u >= f && (y.push(f), b.push(h)) }); var e = C = 0; 0 < y.length && (C = Math.max.apply(Math, y)); 0 < b.length && (e = Math.max.apply(Math, b)); q.b.c.f.find(".image-text-other[left='" + C + "'][top='" + e + "']").addClass("nearest-element"); q.b.c.P = g(".nearest-element").first(); 0 < q.b.c.P.length && (window.a.T = q.b.c.P, window.a.M = "n") }
                                }
                            } catch (d) { } q.b.c.f =
                            g(".image-selection-drag"); if (2 <= h.Y && void 0 != h.currentTarget && !n.draggable.hasClass("control-drag-anywhere") && !n.draggable.hasClass("bldr-draggable")) h.Y++, n.draggable.css("opacity", "1"), 0 < n.draggable.find(".jq-image-block-image").length ? (n.draggable.css("position", "relative").css("left", "").css("top", ""), void 0 != q.b.c.P && 0 < q.b.c.P.length ? q.b.c.P.after(n.draggable.closest(".empty-container-image")) : h.currentTarget.closest(".key").hasClass("column") ? h.currentTarget.closest(".key").append(n.draggable.closest(".empty-container-image")) :
                            h.currentTarget.closest(".key").after(n.draggable.closest(".empty-container-image"))) : void 0 != q.b.c.P && 0 < q.b.c.P.length ? q.b.c.P.after(n.draggable.css("position", "relative").css("left", "").css("top", "")) : h.currentTarget.closest(".key").hasClass("column") ? h.currentTarget.closest(".key").append(n.draggable.css("position", "relative").css("left", "").css("top", "")) : h.currentTarget.closest(".key").after(n.draggable.css("position", "relative").css("left", "").css("top", "")), g(".image-selection").removeClass("image-selection"),
                            l.stopPropagation(), h.currentTarget = null, g(".image-text-other").each(function (b, c) { var e = g(c), f = e.offset().top + e.height(), h = e.offset().top, l = e.offset().left; e.attr("top", h); e.attr("bottom", f); e.attr("left", l) }), g(".image-selection-drag").removeClass("image-selection-drag"), g(".empty").removeClass("empty"), g("#control-common-execute").trigger("click"), (new f.h.i).j(); else if (!n.draggable.hasClass("control-drag-anywhere") && (n.draggable.css("position", "relative").css("left", "").css("top", ""), n.draggable.hasClass("bldr-draggable"))) switch (n.draggable.attr("id")) {
                                case "bldr-drgb-text": r.Text.H.X("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
                                    break; case "bldr-drgb-title": r.Text.H.X("<h2>Title Here.</h2>")
                            } g(".image-selection-drag").removeClass("image-selection-drag")
                        }
                    }, out: function () { h.Y++ }, over: function (c) {
                        g(".image-selection-drag").removeClass("image-selection-drag"); h.currentTarget = g(c.target); g(c.target).hasClass("key") ? "inline-block" != g(".close-preview").css("display") && "block" != g(".close-preview").css("display") && (g(c.target).addClass("image-selection-drag"), q.b.c.f = g(c.target)) : "inline-block" != g(".close-preview").css("display") &&
                        "block" != g(".close-preview").css("display") && (g(c.target).closest(".key").addClass("image-selection-drag"), q.b.c.f = g(c.target).closest(".key"))
                    }
                })
            }; h.Ic = function (c) { g(c).each(function (c, f) { try { g(f).draggable("destroy") } catch (h) { } }) }; h.Kc = function (c) { g(c).each(function (c, f) { try { var h = g(f); h.droppable("destroy"); h.removeClass("ui-droppable") } catch (l) { } }) }; h.Zc = function (c) { g(c).each(function (c, f) { try { var h = g(f); h.resizable("destroy"); g(h).find("div").remove(".ui-resizable-handle") } catch (l) { g(h).find("div").remove(".ui-resizable-handle") } }) };
            h.Y = 2; h.va = 0; h.cb = !0; h.ac = ""; return h
        }(); c.F = l
    }(u.I || (u.I = {}))
});
define("Controls/ControlCommonJQ", "require exports ./JQueryUI ../common/on ../JQte/OnInsert jquery".split(" "), function (c, u, q, v, f, r) {
    !function (c) {
        var u = function () {
            function c() { } c.gd = function () { r("#control-common-execute").on("click", function () { c.S(); c.J() }) }; c.J = function () {
                window.setTimeout(function () {
                    v.nb.u.J(); (new f.ba.u).o(); q.I.F.Yc(); q.I.F.Xc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image"); q.I.F.Qa(".adjust-image-text-other", "s"); q.I.F.Qa(".adjust-image-text-other-left",
                    "e"); q.I.F.gc(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", ""); r(".empty-container-text, .empty-container-image").css("z-index", "0"); r(".column").each(function () {
                        0 == r(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length ? (r(this).addClass("empty"), 0 == r(this).find(".empty-drop-element").length && r(this).append("<div class='image-text-other empty-drop-element' ></div>")) :
                        (r(this).removeClass("empty"), r(this).find(".empty-drop-element").remove())
                    }); r(".image-text-other, .empty-container-empty").each(function (c, f) { var g = r(f), n = g.offset().top + g.height(), q = g.offset().top, u = g.offset().left; g.attr("top", q); g.attr("bottom", n); g.attr("left", u) }); q.I.F.Jc(".column, .empty-container, .image-text-other"); r(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>"); r(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>"); r(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>")
                },
                10)
            }; c.S = function () { q.I.F.Kc(".column, .empty-container, .image-text-other"); q.I.F.Ic(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer"); q.I.F.Zc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left") }; c.oa = !1; return c
        }(); c.u = u
    }(u.D || (u.D = {}))
});
define("UndoManager/UndoManager", "require exports ../Controls/ControlCommonJQ ../Preview/Preview ../Watch/WatchMouseJQ ../MalFormed/MalFormedJQ ../jqte/OnInsert jquery".split(" "), function (c, u, q, v, f, r, g, z) {
    window.m = 999999; !function (c) {
        var l = function () {
            function c() { this.isEnabled = !0 } c.prototype.ad = function () { var c = f.b.c.f; void 0 != c && (c = c.attr("scopeId"), f.b.c.f = z("div[scopeId='" + c + "'").first()) }; c.prototype.Ne = function () {
                if (1 != r.ta.Fa.Ea) {
                    "none" != z(".close-preview").css("display") && v.rb.Tb.Bb(); var c;
                    0 >= window.m || (999999 == window.m ? void 0 != window.G && (window.m = window.G.length - 2, c = window.G[window.m]) : (window.m--, c = window.G[window.m]), null != c && (z(c.parent), z("page").html(c.html), q.D.u.S(), q.D.u.J(), (new g.ba.u).o(), this.ad()))
                }
            }; c.prototype.Fe = function () {
                if (1 != r.ta.Fa.Ea) {
                    "none" != z(".close-preview").css("display") && v.rb.Tb.Bb(); var c; -1 == window.m && (window.m = 0); void 0 == window.G || window.m + 1 >= window.G.length || (window.m++, c = window.G[window.m], null != c && (z("page").html(c.html), q.D.u.S(), q.D.u.J(), (new g.ba.u).o(),
                    this.ad()))
                }
            }; c.prototype.Zd = function (c) { void 0 == window.G && (window.G = []); void 0 != c && window.G.push(c) }; c.prototype.Uc = function () { window.G.pop() }; c.prototype.j = function (c) { if (1 != r.ta.Fa.Ea && 0 == window.Y) { try { window.G.splice(window.m + 1), window.m = 999999 } catch (f) { } c = z("page"); var g = new h; g.parent = c; g.html = c.html(); g.Yd() } }; return c
        }(); c.i = l; var h = function () { function c() { } c.prototype.Yd = function () { (new l).Zd(this) }; return c }(); c.ig = h
    }(u.h || (u.h = {}))
});
define("Page/PageElementBaseJQ", "require exports ../PageElements/ElementJQ ../Error/ErrorJQ ../Common/CommonMethodsJQ ../_Classes/UrlJQ ../_Classes/Auth ../Constants/ConstantsJQ ../UndoManager/UndoManager ../MalFormed/MalFormedJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h) {
    var E = 5; !function (c) {
        var u, A; A = u = 0; var D = function () {
            function c(f, b, e) { this.na = "body"; this.typeName = b; this.za = e; this.ed = "jq-" + this.typeName; this.he = "jq-back-" + this.typeName; this.ge = "jq-additional-" + this.typeName } c.prototype.Ld =
            function () { return "Column_" + ++u }; c.prototype.Nd = function () { return "Row_" + ++A }; c.prototype.Nb = function () { new v.v.A }; c.prototype.Gb = function () { return "." + this.ed }; c.prototype.Oc = function () { if (void 0 == this.na || "" == this.na) this.na = "body"; return h(this.na) }; c.prototype.ka = function () { return h(this.Oc()).find(this.Gb()) }; c.prototype.Qd = function () { return 1 == this.ua() ? "body" == this.za.toString().toLowerCase() ? h(this.za) : h(this.Oc()).find(this.za) : void 0 }; c.prototype.fc = function () {
                if (1 == this.ua()) {
                    if (0 == this.ka().length) {
                        var c =
                        new q.l.Oa.gb; this.da(this.Qd(), c.fb(this.ed + " " + this.he + " " + this.ge + "  key design-row row root-elements page-element jqMargin-0 "), void 0, void 0, void 0, void 0, void 0)
                    } return this
                }
            }; c.prototype.Z = function (c, b, e, d, g, l) {
                if (1 == this.ua()) {
                    var n; 0 == this.ka().length && this.fc(void 0); if (void 0 != b && 0 < b.length) {
                        b = b.toString().split(" "); n = (new q.l.Oa.gb).fb("row key jqRootRow design-row"); for (var p = new f.C.K, t = 0; t < b.length; t++) {
                            var r = "", u = ""; if (void 0 != b[t] && "" != p.vb(b[t])) {
                                var r = b[t].toString().replace(/,/g,
                                " "), u = r.toString().replace("col-xs-", ""), v; v = new q.l.Oa.gb; var z = r + " " + e + " column key design-column column-number-" + t, A = r = ""; if ("Content" == this.typeName || h(c).hasClass("jq-Content")) A = "", 0 == t ? A = "SideBarLeft" : 1 == t ? A = "MiddleContent" : 2 == t && (A = "SideBarRight"), r = "jq-" + A + " jq-back-" + A + " jq-additional-" + A; v = v.fb(z + " " + r); z = this.Ld(); void 0 != v && v.append("<span class='debug-column-css debug-css' scopeId='" + z + "'> " + z + " </span> "); v.attr("scopeId", z); v.attr("column-number", t); v.attr("xs-column-size", u); v.css("min-height",
                                "100px"); v.addClass("column-padding"); "" != r ? v.attr("key-css", ".jq-" + r) : void 0 != c ? v.attr("key-css", h(c).attr("key-css") + " column") : v.attr("key-css", this.Gb() + " column"); void 0 != c ? n.attr("key-css", h(c).attr("key-css") + " row") : n.attr("key-css", this.Gb() + " row"); h(n).append(v); void 0 != g && this.Dc(v, g)
                            }
                        }
                    } e = this.Nd(); n.attr("scopeId", e); void 0 != d && this.Dc(n, d); void 0 == c && (c = this.ka()); h(n).prepend("<span title='Row' class=\"design-page-row \"> <span class='design-square-row'>Row</span> <span class='columns-add-text'>Columns <button class='jq-add-column btn btn-xs btn-danger'>+</button></span> </span>");
                    void 0 != n && (n.prepend("<div class='jq-row-plus-container jq-prev-row-container'> <span class='jq-row-plus jq-prev-row'> + </span> </div>"), n.append("<div class='jq-row-plus-container jq-next-row-container'> <span class='jq-row-plus jq-next-row'> + </span> </div>")); this.da(c, n, void 0, void 0, void 0, void 0, l); c.hasClass("key") || (c = c.closest(".key")); return !c.hasClass("empty-container-image") && !c.hasClass("empty-container-text") || n.hasClass("row") ? n : (n.wrap("<div class='table-row'></div>"), n.before("<div class='table-cell'></div>"),
                    n.addClass("table-cell"), n.parent())
                }
            }; c.prototype.Dc = function (c, b) {
                if (1 == this.ua() && void 0 != c && void 0 != b) {
                    void 0 != b.height && h(c).css("min-height", b.height + "px"); void 0 != b.width && h(c).css("width", b.width + "px"); if (void 0 != b.padding) {
                        var e = b.padding; void 0 != e.all ? h(c).css("padding", e.all + "px") : (void 0 != e.left && h(c).css("padding-left", e.left + "px"), void 0 != e.top && h(c).css("padding-top", e.top + "px"), void 0 != e.right && h(c).css("padding-right", e.right + "px"), void 0 != e.bottom && h(c).css("padding-bottom", e.bottom +
                        "px"))
                    } void 0 != b.margin && (e = b.margin, void 0 != e.all ? h(c).css("margin", e.all + "px") : (void 0 != e.left && h(c).css("margin-left", e.left + "px"), void 0 != e.top && h(c).css("margin-top", e.top + "px"), void 0 != e.right && h(c).css("margin-right", e.right + "px"), void 0 != e.bottom && h(c).css("margin-bottom", e.bottom + "px")))
                }
            }; c.prototype.da = function (c, b, e, d, f, p, q) {
                if (1 != l.ta.Fa.Ea && 1 == this.ua()) {
                    void 0 != b && b.find(".debug-css").html(""); var r = 0, t = 0; void 0 == c && (c = this.ka()); if (void 0 != d) {
                        "" != d && (d = d.toString().split(" "), void 0 !=
                        d && 1 < d.length && (r = Number(d[0]) + 1, t = Number(d[1]))); if (!(0 < h(c).find(".jqRootRow:nth-child(" + r + ")").children().eq(t).length)) { this.Nb(" Add() : [" + h(c).attr("class") + "] do not have row column [" + r + "," + t + "] to add element"); return } c = h(c).find(".jqRootRow:nth-child(" + r + ")").children().eq(t)
                    } else this.Nb("Warning : Please Add Row to  [" + h(c).attr("class") + "] "); void 0 != b && ("object" != typeof b && (r = document.createElement("span"), h(r).append(b), b = h(r)), h(b).addClass(e)); b.attr("class"); 1 == p && null != window.a &&
                    null != window.a.T && "" != window.a.M ? ("n" == window.a.M || "" == window.a.M ? h(window.a.T).after(b) : h(window.a.T).before(b), c = new n.h.i, c.j()) : 1 == f ? 2 < h("div[src='xa.xml']").length && 1 == g.Ba.Ia.Jb && h(c).prepend(b) : 2 < h("div[src='xa.xml']").length && 1 == g.Ba.Ia.Jb && (void 0 == h(c).attr("unique-id") && (E++, h(c).attr("unique-id", E)), void 0 == q ? h(c).append(b) : 1 == q ? h(c).before(b) : h(c).after(b), h(b).hasClass("jq-Any"), c = new n.h.i, c.j())
                }
            }; c.prototype.Nc = function (c, b) {
                c += 1; var e = h(this.ka()).find(".jqRootRow:nth-child(" + c +
                ")"); if (0 < h(e).length) return h(e).children().eq(b); this.Nb("[" + c + "," + b + "] column not found")
            }; c.prototype.ua = function () { try { var c = this.Pd(); if (1 == this.Sd() || 7 != z.V.ca.Je) return !1; for (var b = 0, e = 6; 0 <= e; e--) { if (this.Vd(c[b]) != z.V.ca.Le[e]) return !1; b++ } return !0 } catch (d) { return !1 } }; c.prototype.Pd = function () { return (new r.C.fe).we() }; c.prototype.Sd = function () { try { return window.self !== window.top } catch (c) { return !0 } }; c.prototype.Vd = function (c) { return String.fromCharCode(c.charCodeAt(0) + 1) }; return c
        }(); c.Sb =
        D
    }(u.l || (u.l = {}))
}); ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("Page/HeaderJQ", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f(n, l) { void 0 != l || (l = "Header"); c.call(this, null, l, v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.ye = r }(u.l || (u.l = {})) });
ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("Page/MenuBarJQ", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f(n, l) { void 0 != l || (l = "MenuBar"); c.call(this, null, l, v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.Be = r }(u.l || (u.l = {})) });
ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("Page/ContentJQ", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f(n, l) { void 0 != l || (l = "Content"); c.call(this, null, l, v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.oe = r }(u.l || (u.l = {})) });
ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("Page/FooterJQ", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f(n, l) { void 0 != l || (l = "Footer"); c.call(this, null, l, v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.ve = r }(u.l || (u.l = {})) });
ca = this && this.Ya || function (c, u) { function q() { this.constructor = c } for (var v in u) u.hasOwnProperty(v) && (c[v] = u[v]); c.prototype = null === u ? Object.create(u) : (q.prototype = u.prototype, new q) }; define("Page/AnyJQ", ["require", "exports", "./PageElementBaseJQ", "../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { var r = function (c) { function f() { c.call(this, null, "Any", v.V.ca.oc, null) } ca(f, c); return f }(q.l.Sb); c.zb = r }(u.l || (u.l = {})) });
define("Page/PageJQ", "require exports ./HeaderJQ ./MenuBarJQ ./ContentJQ ./FooterJQ ./AnyJQ ../Menu/MenuTemplateJQ".split(" "), function (c, u, q, v, f, r, g, z) { !function (c) { c.Pf = function () { return function () { new q.l.ye(null); new v.l.Be(null); new z.l.ea.De; new f.l.oe(null); new r.l.ve(null); this.Aa = new g.l.zb(null) } }() }(u.l || (u.l = {})) });
define("Page/Context/ContextJQ", ["require", "exports", "../PageJQ", "../../Constants/ConstantsJQ"], function (c, u, q, v) { !function (c) { c.Cb = function () { return function () { this.l = new q.l.Pf(null); this.V = new v.V.ca } }() }(u.l || (u.l = {})) });
define("ContextMenu/ContextMenuJQ", "require exports ../Watch/WatchMouseJQ ../Controls/ControlsJQ ../Watch/CopyPasteJQ ../Controls/ImageJQ ../Controls/BorderJQ ../Controls/ColorJQ ../Controls/TextJQ ../SmartMenu/SmartMenuJQ ../Controls/Menujq ../Controls/BIjq ../Controls/SpacerJQ ../Controls/LinkJQ ../Controls/HtmlJQ ../Controls/MarginJQ ../Controls/PaddingJQ ../Controls/FrontBackJQ ../Controls/OpacityJQ ../Controls/BorderShadow jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p, B, A, D, C, y, b, e, d) {
    var k =
    !1, w = !1; !function (c) {
        var u = function () {
            function c() { this.N = "#contextMenu" } c.prototype.o = function () { this.Ud() }; c.Hb = function () {
                d(document).on("click", function () { (new c).Hc() }); d(document).bind("contextmenu", function (b) {
                    q.b.c.Vc(b); window.setTimeout(function () {
                        try {
                            q.b.c.P = d("#nononononelement"); var c = b.clientX, e = b.clientY + d(document).scrollTop(); d(".nearest-element").removeClass("nearest-element"); var f = q.b.c.f; q.b.c.f.hasClass("image-text-other") && (f = q.b.c.f.closest(".column")); if (f.hasClass("column")) {
                                var g =
                                q.b.c.f.find(".image-text-other"), h = [], k = []; if (0 < g.length) { g.each(function (b, f) { var g = d(f), l = parseFloat(g.attr("top")), n = parseFloat(g.attr("bottom")), g = parseFloat(g.attr("left")); e >= l && n >= e && c >= g && (h.push(g), k.push(l)) }); var l = g = 0; 0 < h.length && (g = Math.max.apply(Math, h)); 0 < k.length && (l = Math.max.apply(Math, k)); f.find(".image-text-other[left='" + g + "'][top='" + l + "']").addClass("nearest-element"); q.b.c.P = d(".nearest-element").first() }
                            }
                        } catch (n) { }
                    }, 5); b.preventDefault(); var e = new c; e.Hc(); var f = b.clientY;
                    350 <= f && (f -= d("#contextMenu").height()); var g = b.clientX; g > d(document).width() - 200 && (g -= 150); d(e.N).css("left", g + "px"); d(e.N).css("top", f + "px"); d(e.N).fadeIn(500); b.cancelBubble = !1
                })
            }; c.prototype.Hc = function () {
                var b = q.b.c.f; void 0 != b && (d(".ctx-menu-add-row").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-cut").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert").parent().addClass("ctx-menu-disabled"),
                d(".ctx-menu-insert-text").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-youtube").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-html").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-css").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-menu").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-empty-space").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-insert-link").parent().addClass("ctx-menu-disabled"),
                d(".ctx-menu-insert-object").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().addClass("ctx-menu-disabled"), b.hasClass("root-elements") && d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled"), b.hasClass("jqRootRow") && (d(".ctx-menu-cut").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")),
                b.hasClass("column") && (d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")), b.hasClass("image-text-other") && (d(".ctx-menu-cut").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-copy").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-paste").parent().removeClass("ctx-menu-disabled"),
                d(".ctx-menu-insert").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-insert-image").parent().removeClass("ctx-menu-disabled"), d(".ctx-menu-delete-element").parent().removeClass("ctx-menu-disabled")), b.hasClass("page") && (d(".ctx-menu-add-row").parent().addClass("ctx-menu-disabled"), d(".ctx-menu-height-width").parent().addClass("ctx-menu-disabled")), b.hasClass("row") && d(".ctx-menu-add-row").parent().addClass("ctx-menu-disabled"))
            }; c.$a = function () {
                d(".li.ctx-menu-delete-element").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Lb() })
            }; c.Ga = function () { d(".li.ctx-menu-insert-link-container").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || f.ga.ja.qe() }) }; c.cb = function () { (new B.Sa.kc).o(); d(".ctx-menu-insert-link").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || (c.$b(), B.Sa.kc.g()) }) }; c.bb = function () {
                (new A.Pc.nd).o(); d(".ctx-menu-insert-html").on("click", function () {
                    window.a = null; d(this).parent().hasClass("ctx-menu-disabled") ||
                    c.Zb()
                })
            }; c.yc = function () {
                d(".li.smart-menu-insert-text").on("click", function () { n.Text.H.X("Sample text to edit"); n.Text.H.g() }); d(".li.ctx-menu-insert-text").on("click", function () { window.a = null; n.Text.H.X("Sample text to edit"); n.Text.H.g() }); d(".tool-normal-text").on("click", function () { n.Text.H.X(" Sample text to edit"); n.Text.H.g() }); d(".tool-heading-1").on("click", function () { n.Text.H.X("<h1> Heading1 to edit</h1>"); n.Text.H.g() }); d(".tool-heading-2").on("click", function () {
                    n.Text.H.X("<h2> Heading2 to edit</h2>");
                    n.Text.H.g()
                }); d(".tool-heading-3").on("click", function () { n.Text.H.X("<h3> Heading3 to edit</h3>"); n.Text.H.g() }); d(".tool-heading-4").on("click", function () { n.Text.H.X("<h4> Heading4 to edit</h4>"); n.Text.H.g() }); d(".tool-heading-5").on("click", function () { n.Text.H.X("<h5> Heading5 to edit</h5>"); n.Text.H.g() })
            }; c.va = function () {
                d(".control-templates").find(".close-button").on("click", function () { d(".control-page").removeClass("control-active"); c.G() }); d(".control-page").find(".close-button").on("click",
                function () { d(".control-page").removeClass("control-active"); c.G(); d(".internet-bi-image-url").val(""); d(".internet-image-url").val("") })
            }; c.G = function () { d(".jq-properties-all").hasClass("forced-hide") || d(".jq-properties-all").show() }; c.L = function () {
                d(".control-page").hide(); d(".control-page").attr("style", ""); d(".control-page").css("display", "none"); d(".control-page").removeClass("control-active"); "block" == d(".jq-properties-all").css("display") ? (d(".jq-properties-all").addClass("normal-hide"), d(".jq-properties-all").hide()) :
                d(".jq-properties-all").hasClass("forced-hide") || d(".jq-properties-all").show()
            }; c.$b = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-insert-link").addClass("control-active"); B.Sa.kc.tb() }; c.Zb = function () { c.L(); A.Pc.nd.tb() }; c.yd = function () {
                c.L(); d(".editor").show(); d(".jqte-editor, .column").removeClass("current-editor-scope"); d(this).find(".jqte-editor").addClass("current-editor-scope"); d(".control-page").removeClass("control-active"); d("#control-insert-text").addClass("control-active");
                d("#control-insert-text").show(); d("#control-insert-text").trigger("cust_loaded")
            }; c.Xb = function () { c.L(); var b = v.l.xb.O; d(".control-page").removeClass("control-active"); d(b).addClass("control-active"); d(b).show(); d(b).trigger("cust_loaded") }; c.rc = function () { (new h.ea.lc).o(); c.L(); d(".control-page").removeClass("control-active"); d(".control-menu").addClass("control-active"); d(".control-menu").show(); h.ea.lc.Ee() }; c.ha = function () {
                c.L(); var b = r.Image.aa.N; d(".control-page").removeClass("control-active");
                d(b).addClass("control-active"); d(".action-button-insert-image").show(); d(".action-button-change-image").hide(); d(b).show(); d(b).trigger("custom_loaded")
            }; c.Ib = function () { f.ga.ja.Id() }; c.Lb = function () { f.ga.ja.ue() }; c.Kb = function () { f.ga.ja.Jd() }; c.Pb = function () { f.ga.ja.Xd() }; c.Ob = function () { d(".jq-clipboard").html(""); d("#control-insert-clipboard").show() }; c.Yb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-height-width").addClass("control-active"); d("#control-height-width").show() };
            c.Ub = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-border").addClass("control-active"); d("#control-border").show() }; c.ac = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-margin").addClass("control-active"); d("#control-margin").show() }; c.tc = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-padding").addClass("control-active"); d("#control-padding").show() }; c.sc = function () {
                c.L(); d(".control-page").removeClass("control-active");
                d("#control-opacity").addClass("control-active"); d("#control-opacity").show()
            }; c.uc = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-zindex").addClass("control-active"); d("#control-zindex").show() }; c.Qb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-border-shadow").addClass("control-active"); d("#control-border-shadow").show() }; c.Wb = function () {
                c.L(); d(".control-page").removeClass("control-active"); d("#control-color").addClass("control-active");
                d("#control-color").show()
            }; c.Rb = function () { c.L(); d(".control-page").removeClass("control-active"); d("#control-bi").addClass("control-active"); d("#control-bi").show() }; c.Y = function () { d(".li.ctx-menu-add-row").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Xb(), v.l.xb.g()) }) }; c.ab = function () { d(".li.ctx-menu-height-width").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Yb(), l.Wa.ub.g()) }) }; c.vc = function () {
                (new g.Da.Ka).o(); d(".li.ctx-menu-border").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Ub(), g.Da.Ka.g()) })
            }; c.zc = function () { (new D.Ta.kb).o(); d(".li.ctx-menu-margin").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.ac(), D.Ta.kb.g()) }) }; c.Bc = function () { (new C.Ua.qb).o(); d(".li.ctx-menu-padding").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.tc(), C.Ua.qb.g()) }) }; c.Ac = function () {
                (new b.Opacity.ob).o(); d(".li.ctx-menu-opacity").on("click", function () {
                    d(this).parent().hasClass("ctx-menu-disabled") ||
                    (c.sc(), b.Opacity.ob.g())
                })
            }; c.hb = function () { (new y.Pa.ib).o(); d(".li.ctx-menu-z-index").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.uc(), y.Pa.ib.g()) }) }; c.ma = function () { (new e.Fc.hd).o(); d(".li.ctx-menu-border-shadow").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Qb(), e.Fc.hd.g()) }) }; c.xa = function () { d(".li.ctx-menu-copy").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Ib() }) }; c.ya = function () {
                d(".li.ctx-menu-cut").on("click",
                function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Kb() })
            }; c.Ja = function () { d(".li.ctx-menu-paste").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Pb() }) }; c.La = function () { d(".li.ctx-menu-paste-clipborad").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || c.Ob() }) }; c.Na = function () {
                d(".smart-menu-insert-empty-space").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || p.bd.ud.od() }); d(".ctx-menu-insert-empty-space").on("click",
                function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || p.bd.ud.od() })
            }; c.Ab = function () { (new r.Image.aa).o(); d(".li.smart-menu-insert-image").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.ha(), r.Image.aa.g()) }); d(".li.ctx-menu-insert-image").on("click", function () { window.a = null; d(this).parent().hasClass("ctx-menu-disabled") || (c.ha(), r.Image.aa.g()) }) }; c.fa = function () {
                (new E.pa.Ca).o(); d(".li.ctx-menu-background-image").on("click", function () {
                    d(this).parent().hasClass("ctx-menu-disabled") ||
                    (c.Rb(), E.pa.Ca.g())
                })
            }; c.xc = function () { d(".li.ctx-menu-insert-menu").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.rc(), h.ea.lc.g()) }) }; c.wc = function () { (new z.Color.Ma).o(); d(".li.ctx-menu-color").on("click", function () { d(this).parent().hasClass("ctx-menu-disabled") || (c.Wb(), z.Color.Ma.g()) }) }; c.Eb = function () {
                d("#contextMenuitems").find(".li").on("mouseenter", function (b) {
                    var c = 147; b.pageX > d(document).width() - 200 && (c = -150); d(this).parent().find(".innerListContainer").first().css("left",
                    c + "px"); d(this).parent().find(".innerListContainer").first().css("display", "block")
                }); d("#contextMenuitems").find("li").on("mouseleave", function () { d(this).find(".innerListContainer").first().css("display", "none") })
            }; c.Mb = function () { d("#contextMenuitems > li").on("click", function () { }) }; c.prototype.Ud = function () {
                d(document).ready(function () {
                    0 == w && (w = !0, d(document).on("click", function () { d("#contextMenu").hide(500); d("#smInsertNextPrev").hide(500) }), 0 == k && (k = !0, c.Hb(), c.Mb(), c.Eb(), c.Ga(), c.cb(), c.bb(),
                    c.yc(), c.Y(), c.$a(), c.ab(), c.xa(), c.Ja(), c.La(), c.ya(), c.Ab(), c.Na(), c.vc(), c.zc(), c.hb(), c.ma(), c.Ac(), c.Bc(), c.wc(), c.xc(), c.fa(), c.va()))
                })
            }; return c
        }(); c.kd = u
    }(u.dc || (u.dc = {}))
});
define("_Classes/LoadingJQ", ["require", "exports", "jquery"], function (c, u, q) {
    !function (c) {
        var f = function () {
            function c(f) { this.src = "/content/loading/colors.gif"; this.N = f; this.fc() } c.prototype.fc = function () { var c = q(".loading.clonable").clone(); c.removeClass("clonable"); c.addClass("new"); c.removeClass("hide"); c.find("img").first().attr("src", this.src); q(this.N).find(".loading.new").remove(); q(this.N).append(c) }; c.prototype.o = function () { this.tb() }; c.prototype.xf = function () {
                return 0 < q(this.N).find(".loading.new").length ?
                !0 : !1
            }; c.prototype.tb = function () { this.xf() || this.fc(); q(this.N).find(".loading.new").first().show() }; c.prototype.tf = function () { q(this.N).find(".loading.new").first().hide() }; return c
        }(); c.Ff = f
    }(u.Ae || (u.Ae = {}))
});
define("controls/controlcommonjq", "require exports ./JQueryUI ../common/on ../JQte/OnInsert jquery".split(" "), function (c, u, q, v, f, r) {
    !function (c) {
        var u = function () {
            function c() { } c.gd = function () { r("#control-common-execute").on("click", function () { c.S(); c.J() }) }; c.J = function () {
                window.setTimeout(function () {
                    v.nb.u.J(); (new f.ba.u).o(); q.I.F.Yc(); q.I.F.Xc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image"); q.I.F.Qa(".adjust-image-text-other", "s"); q.I.F.Qa(".adjust-image-text-other-left",
                    "e"); q.I.F.gc(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", ""); r(".empty-container-text, .empty-container-image").css("z-index", "0"); r(".column").each(function () {
                        0 == r(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length ? (r(this).addClass("empty"), 0 == r(this).find(".empty-drop-element").length && r(this).append("<div class='image-text-other empty-drop-element' ></div>")) :
                        (r(this).removeClass("empty"), r(this).find(".empty-drop-element").remove())
                    }); r(".image-text-other, .empty-container-empty").each(function (c, f) { var g = r(f), n = g.offset().top + g.height(), q = g.offset().top, u = g.offset().left; g.attr("top", q); g.attr("bottom", n); g.attr("left", u) }); q.I.F.Jc(".column, .empty-container, .image-text-other"); r(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>"); r(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>"); r(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>")
                },
                10)
            }; c.S = function () { q.I.F.Kc(".column, .empty-container, .image-text-other"); q.I.F.Ic(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer"); q.I.F.Zc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left") }; c.oa = !1; return c
        }(); c.u = u
    }(u.D || (u.D = {}))
});
define("Themes/EmptyLayout/EmptyLayoutJQ", "require exports ../../Page/HeaderJQ ../../Page/MenuBarJQ ../../Page/ContentJQ ../../Page/FooterJQ ../../_Classes/CssClass ../../_Classes/LoadingJQ ../../page/anyjq ../../Error/ErrorJQ ../../UndoManager/UndoManager ../../Preview/Preview ../../ContextMenu/ContextMenuJQ ../../controls/controlcommonjq jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p, B, A) {
    window.Y = !0; !function (c) {
        !function (c) {
            var u = function () {
                function b() {
                    this.N = "#control-templates"; window.Y =
                    !0; b.fd = new z.Ae.Ff(this.N); b.fd.o()
                } b.prototype.o = function () { try { this.Ra(b.Ac), this.Ra(b.xd), this.Ra(b.Ad), this.Ra(b.Bc), this.Ra(b.yd), this.Ra(b.Bd), this.Ra(b.wd), this.Ra(b.zd), this.Ra(b.je), A(".empty-layout-templates").find(".ui-resizable-handle").hide(), A(".empty-layout-templates .row").removeClass("design-row"), A(".empty-layout-templates .column").css("outline", "1px solid #282424"), A(".empty-layout-templates .root-elements").css("padding", "0"), this.Dd() } catch (c) { } window.Y = !1; (new h.h.i).j() };
                b.prototype.Dd = function () {
                    A(".empty-layout").on("click", function () { A(".empty-layout").removeClass("empty-layout-select"); A(this).addClass("empty-layout-select") }); A(".create-layout-show-button").on("click", function () {
                        E.rb.Tb.Bb(); A(".jq-row-plus-container").hide(); p.dc.kd.L(); A(".control-templates").show(); A(".control-templates").addClass("control-active"); A(".empty-layout-templates .row").removeClass("padding-root-elements"); A(".empty-layout-templates").find(".ui-resizable-handle").hide(); A(".empty-layout-templates .row").removeClass("design-row");
                        A(".empty-layout-templates .column").addClass("design-column"); A(".empty-layout-templates .root-elements").css("padding", "0")
                    }); A(".control-templates .close-button").click(function () { void 0 != A(".empty-layout-select").attr("layout-id") && "" != A(".empty-layout-select").attr("layout-id") || b.uc("0", this); A(".column").removeClass("column-layout-border-yellow"); A(".column").removeClass("column-layout-border-brown") }); A(".action-button-layout-create").on("click", function () { b.uc(void 0, this) })
                }; b.uc = function (c,
                d) {
                    void 0 == c && (c = A(".empty-layout-select").attr("layout-id")); var f = new l.v.A; if (void 0 != c) {
                        var p = void 0; switch (c) { case "0": p = b.Ac; break; case "1": p = b.Bc; break; case "2": p = b.wd; break; case "3": p = b.xd; break; case "4": p = b.yd; break; case "5": p = b.zd; break; case "6": p = b.Ad; break; case "7": p = b.Bd; break; case "8": p = b.je } if (void 0 != p) {
                            var q = new n.l.zb(""); A("page .root-elements").html(""); q.Z(A(".jq-Header"), p.header.cols, "layout-column", void 0, void 0); var r = '<span title class="page-static-element-circle design-root-elements-static"> </span>'.replace("title",
                            "title='Header'"); A(".jq-Header").prepend(r); r = new g.Db.cc; r.height = 50; q.Z(A(".jq-MenuBar"), p.ra.cols, "layout-column", void 0, r); r = '<span title class="page-static-element-circle design-root-elements-static"> </span>'.replace("title", "title='Menu Bar'"); A(".jq-MenuBar").prepend(r); r = new g.Db.cc; r.height = 500; q.Z(A(".jq-Content"), p.body.cols, "layout-column", void 0, r); r = '<span title class="page-static-element-circle design-root-elements-static"> </span>'.replace("title", "title='Body'"); A(".jq-Content").prepend(r);
                            q.Z(A(".jq-Footer"), p.qa.cols, "layout-column", void 0, void 0); r = '<span title class="page-static-element-circle design-root-elements-static"> </span>'.replace("title", "title='Footer'"); A(".jq-Footer").prepend(r); f.Ha("Layout Created"); A(d).closest(".control-page").hide(); f = new h.h.i; f.Uc(); f.Uc(); f.Uc(); f.Uc(); A(".page").show(); B.D.u.S(); B.D.u.J(); f.j()
                        } else f.U("Please try after some time.")
                    } else f.U("Please select a layout.!"); A(".jq-row-plus-container").hide()
                }; b.prototype.Ra = function (b) {
                    var c = "template-" +
                    b.sa, h = A(document.createElement("div")); h.addClass("empty-template-wrapper"); var l = A(document.createElement("div")), n = ".template-" + b.sa; l.addClass("float-left"); l.addClass("empty-layout"); l.addClass(c); l.attr("layout-id", b.sa + ""); h.append(l); A(".empty-layout-templates").append(h); var p = "T" + b.sa, c = new q.l.ye("", p + "Header"); c.za = n; c.na = ".empty-layout-templates"; h = new v.l.Be("", p + "MenuBar"); h.za = n; h.na = ".empty-layout-templates"; l = new f.l.oe("", p + "Body"); l.za = n; l.na = ".empty-layout-templates"; p = new r.l.ve("",
                    p + "Footer"); p.za = n; p.na = ".empty-layout-templates"; var n = new g.Db.cc, t = new g.Db.cc; n.height = b.header.height; t.height = b.header.height; c.Z(void 0, b.header.cols, "layout-column", n, t); try { c.Nc(1, 0).text("H") } catch (u) { } n.height = b.ra.height; t.height = b.ra.height; h.Z(void 0, b.ra.cols, "layout-column", n, t); try { h.Nc(1, 0).text("M") } catch (u) { } n.height = b.body.height; t.height = b.body.height; l.Z(void 0, b.body.cols, "layout-column", n, t); try { var y = l.Nc(1, 0); y.text("B") } catch (u) { } n.height = b.qa.height; t.height = b.qa.height;
                    p.Z(void 0, b.qa.cols, "layout-column", n, t); try { y = p.Nc(1, 0), y.text("F") } catch (u) { }
                }; b.Ac = { sa: 0, header: { height: 41, cols: "col-xs-48" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-48" }, qa: { height: 5, cols: "col-xs-48" } }; b.Bc = { sa: 1, header: { height: 41, cols: "col-xs-48" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-36" }, qa: { height: 5, cols: "col-xs-48" } }; b.wd = {
                    sa: 2, header: { height: 41, cols: "col-xs-48" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-24 col-xs-12" },
                    qa: { height: 5, cols: "col-xs-48" }
                }; b.xd = { sa: 3, header: { height: 41, cols: "col-xs-12 col-xs-36" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-48" }, qa: { height: 5, cols: "col-xs-48" } }; b.yd = { sa: 4, header: { height: 41, cols: "col-xs-12 col-xs-36" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-36" }, qa: { height: 5, cols: "col-xs-48" } }; b.zd = {
                    sa: 5, header: { height: 41, cols: "col-xs-12 col-xs-36" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-24 col-xs-12" }, qa: {
                        height: 5,
                        cols: "col-xs-48"
                    }
                }; b.Ad = { sa: 6, header: { height: 41, cols: "col-xs-12 col-xs-20 col-xs-16" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-48" }, qa: { height: 5, cols: "col-xs-48" } }; b.Bd = { sa: 7, header: { height: 41, cols: "col-xs-12 col-xs-20 col-xs-16" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-36" }, qa: { height: 5, cols: "col-xs-48" } }; b.je = {
                    sa: 8, header: { height: 41, cols: "col-xs-12 col-xs-20 col-xs-16" }, ra: { height: 5, cols: "col-xs-48" }, body: { height: 70, cols: "col-xs-12 col-xs-24 col-xs-12" },
                    qa: { height: 5, cols: "col-xs-48" }
                }; return b
            }(); c.Rc = u
        }(c.hc || (c.hc = {}))
    }(u.qc || (u.qc = {}))
});
define("Common/on", ["require", "exports", "../page/anyjq", "../Watch/WatchMouseJQ", "jquery"], function (c, u, q, v, f) {
    !function (c) {
        var g = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = g; var u = function () {
            function c() { } c.J = function () { c.Ib(); c.Hb() }; c.Hb = function () { f(".empty-container").unbind("click"); f(".empty-container").on("click", function () { var c = v.b.c.f; void 0 != c && c.hasClass("empty-container") }) }; c.Ib = function () {
                f(".jq-prev-row").unbind("click"); f(".jq-prev-row").on("click", function () {
                    var c =
                    f(this).closest(".row"); (new q.l.zb("")).Z(c, "col-xs-48", "", void 0, void 0, !0); f("#control-common-execute").trigger("click")
                }); f(".jq-next-row").unbind("click"); f(".jq-next-row").on("click", function () { var c = f(this).closest(".row"); (new q.l.zb("")).Z(c, "col-xs-48", "", void 0, void 0, !1); f("#control-common-execute").trigger("click") }); f(".jq-plus-prev").unbind("click"); f(".jq-plus-prev").on("click", function (c) {
                    window.a = new g; f(this).hasClass("image-text-other") ? window.a.T = f(this) : window.a.T = f(this).closest(".image-text-other");
                    window.a.M = "p"; window.a.wa = !1; c.stopPropagation(); var h = c.pageY; f(window).scrollTop() + h >= f(window).height() - 250 && (h = c.pageY - 250); var n = c.pageX; c.pageX > f(document).width() - 200 && (n = c.pageX - 150); f("#smInsertNextPrev").css("left", n + "px"); f("#smInsertNextPrev").css("top", h + "px"); f("#smInsertNextPrev").fadeIn(500)
                }); f(".jq-plus-next").unbind("click"); f(".jq-plus-next").on("click", function (c) {
                    window.a = new g; f(this).hasClass("image-text-other") ? window.a.T = f(this) : window.a.T = f(this).closest(".image-text-other");
                    window.a.M = "n"; window.a.wa = !1; c.stopPropagation(); var h = c.pageY; f(window).scrollTop() + h >= f(window).height() - 250 && (h = c.pageY - 180); var n = c.pageX; c.pageX > f(document).width() - 200 && (n = c.pageX - 150); f("#smInsertNextPrev").css("left", n + "px"); f("#smInsertNextPrev").css("top", h + "px"); f("#smInsertNextPrev").fadeIn(500)
                })
            }; return c
        }(); c.u = u
    }(u.nb || (u.nb = {}))
});
define("_Classes/SaveJq", ["require", "exports", "../Error/ErrorJQ", "jquery"], function (c, u, q, v) {
    !function (c) {
        var r = function () {
            function c() { } c.prototype.mf = function (f) { v.ajax({ type: "POST", url: "/services/pageService.asmx/download", data: f, contentType: "application/json; charset=utf-8", dataType: "json", success: c.qf, error: c.pf }) }; c.qf = function (c) {
                var f = new q.v.A; "" != c.d.Error && null != c.d.Error || 1 != c.d.Pg ? f.U("Unable to generate download link...") : f.Ha("Click on the download link below  <br> <a target='_blank' class='download-site-link' href='" +
                c.d.Sa + "' > click here </a>")
            }; c.pf = function () { (new q.v.A).U("Unable to generate download link...") }; c.prototype.cg = function (f) { v.ajax({ type: "POST", url: "/services/pageService.asmx/savepage", data: f, contentType: "application/json; charset=utf-8", dataType: "json", success: c.Lf, error: c.Gf }) }; c.Lf = function (c) { var f = new q.v.A; "" != c.d.Error ? f.Ha("Page saved") : f.U("Save Failed! <br> Try again later.") }; c.Gf = function () { (new q.v.A).U("Save Failed! <br> Try again later.") }; c.Vg = !1; return c
        }(); c.Ie = r
    }(u.ae || (u.ae =
    {}))
});
define("Controls/NoUi", "require exports ../UndoManager/UndoManager ../Watch/WatchMouseJQ ../Error/ErrorJQ jquery".split(" "), function (c, u, q, v, f, r) {
    !function (c) {
        var u = function () {
            function c() { } c.C = function () { var c = v.b.c.f; return void 0 != c ? c.hasClass("column") || c.hasClass("row") || c.hasClass("root-elements") ? r("#nononoelement") : c : r("#nononoelement") }; c.af = function () { var f = c.C(); f.css("float", "none"); f.closest(".column").css("text-align", "center"); 0 < f.length && (new q.h.i).j() }; c.Td = function () {
                var f = c.C();
                f.css("float", "left"); 0 < f.length && (new q.h.i).j()
            }; c.$d = function () { var f = c.C(); f.css("float", "right"); 0 < f.length && (new q.h.i).j() }; return c
        }(); c.Cd = u; u = function () {
            function c() { } c.C = function () { var c = v.b.c.f; return void 0 != c ? c.hasClass("root-elements") ? r("#nononoelement") : c : r("#nononoelement") }; c.tc = function () { var c = v.b.c.f; return void 0 != c ? c : r("#nononoelement") }; c.Td = function () {
                var g = c.C(); "none" == g.css("float") ? ((0 < g.prevAll(".key").first().length && ("right" == g.prevAll(".key").first().css("float") ||
                "left" == g.prevAll(".key").first().css("float")) || 0 == g.prevAll(".key").first().length) && new f.v.A, g.insertBefore(g.prevAll(".key").first())) : "left" == g.css("float") ? ((0 < g.prevAll(".key").first().length && ("right" == g.prevAll(".key").first().css("float") || "none" == g.prevAll(".key").first().css("float")) || 0 == g.prevAll(".key").first().length) && new f.v.A, g.insertBefore(g.prevAll(".key").first())) : ((0 < g.nextAll(".key").first().length && ("left" == g.nextAll(".key").first().css("float") || "none" == g.nextAll(".key").first().css("float")) ||
                0 == g.nextAll(".key").first().length) && new f.v.A, g.insertAfter(g.nextAll(".key").first())); 0 < g.length && (new q.h.i).j()
            }; c.$d = function () {
                var g = c.C(); "none" == g.css("float") ? ((0 < g.nextAll(".key").first().length && ("right" == g.nextAll(".key").first().css("float") || "left" == g.nextAll(".key").first().css("float")) || 0 == g.nextAll(".key").first().length) && new f.v.A, g.insertAfter(g.nextAll(".key").first())) : "left" == g.css("float") ? ((0 < g.nextAll(".key").first().length && ("right" == g.nextAll(".key").first().css("float") ||
                "none" == g.nextAll(".key").first().css("float")) || 0 == g.nextAll(".key").first().length) && new f.v.A, g.insertAfter(g.nextAll(".key").first())) : ((0 < g.prevAll(".key").first().length && ("left" == g.prevAll(".key").first().css("float") || "none" == g.prevAll(".key").first().css("float")) || 0 == g.prevAll(".key").first().length) && new f.v.A, g.insertBefore(g.prevAll(".key").first())); 0 < g.length && (new q.h.i).j()
            }; c.jg = function () {
                var f = c.tc(); f.hasClass("row") || (f = f.closest(".row")); var g = f.prevAll(".row").first(); 0 == g.length &&
                (g = f.prevAll(".key").last()); f.insertBefore(g)
            }; c.lf = function () { var f = c.tc(); f.hasClass("row") || (f = f.closest(".row")); var g = f.nextAll(".row").first(); 0 == g.length && (g = f.nextAll(".key").last()); f.insertAfter(g) }; return c
        }(); c.qd = u
    }(u.mb || (u.mb = {}))
});
define("Common/CommonEvents", "require exports ../Controls/JQueryUI ../UndoManager/UndoManager ../Themes/EmptyLayout/EmptyLayoutJQ ../_Classes/Auth ../Error/ErrorJQ ../Common/on ../_Classes/SaveJq ../MalFormed/MalFormedJQ ../Controls/NoUi ../Controls/ImageJQ jquery jqueryui".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p) {
    var B, A; !function (c) {
        var u = function () { return function () { this.M = ""; this.wa = !1 } }(); c.Xa = u; var y = function () {
            function b() { } b.Lb = function (b) {
                b = b + "="; for (var c = document.cookie.split(";"),
                f = 0; f < c.length; f++) { for (var g = c[f]; " " == g.charAt(0) ;) g = g.substring(1); if (0 == g.indexOf(b)) return g.substring(b.length, g.length) } return ""
            }; b.Jg = function () { return b.Lb("jQuery") == p("#viewstate").val() ? !0 : !1 }; b.hg = function () { for (var b = A, c = new FormData, f = 0; f < b.length; f++) c.append(b[f].name, b[f]); p.ajax({ type: "POST", url: "/Services/PageService.asmx/UploadImages", contentType: !1, processData: !1, data: c, success: function () { E.Image.aa.jd(); E.Image.aa.jb(); (new g.v.A).Ha("Images Uploaded Sucessfully.") }, error: function () { (new g.v.A).U("Images Uploaded Failed.(Please check file type or file size.)") } }) };
            b.Nf = function (c) { A = c.target.files; b.hg() }; b.prototype.o = function () {
                0 == b.Jg() && (l.ta.Fa.Ea = !1); p(document).ready(function () { p("#tabs").tabs(); p("#properties-accordion").accordion({ collapsible: !0, heightStyle: "accordion-properties-height" }) }); p(".leaf_type_btn").on("click", function () {
                    p(".leaf_type_btn").parent().removeClass("active"); p(this).parent().addClass("active"); p("#leaf_container .leaf_type").removeClass("active"); switch (p(this).parent().data("name").toString()) {
                        case "webs.bldr.modules.container.popular": p("#leaf_container .leaf_type:eq(0)").addClass("active");
                            break; case "webs.bldr.modules.container.structure": p("#leaf_container .leaf_type:eq(1)").addClass("active"); break; case "webs.bldr.modules.container.media": p("#leaf_container .leaf_type:eq(2)").addClass("active"); break; case "webs.bldr.modules.container.social": p("#leaf_container .leaf_type:eq(3)").addClass("active"); break; case "webs.bldr.modules.container.commerce": p("#leaf_container .leaf_type:eq(4)").addClass("active"); break; case "webs.bldr.dock.ads.appfeeds": p("#leaf_container .leaf_type:eq(5)").addClass("active")
                    }
                });
                p(".button-change-image").on("click", function () { E.Image.aa.le() }); p(".bldr-draggable").hasClass("event-added") || (p(".bldr-draggable").addClass("event-added"), q.I.F.gc(".bldr-draggable", "")); p(".jq-full-page").on("click", function () { p(".page-margin").css("width", "auto") }); p(".jq-small-page").on("click", function () { p(".page-margin").css("width", "980px") }); p(".show-hide-menu-btn").hide(); p(".hide-menu").show(); p(".show-menu, .hide-menu").on("click", function () {
                    p("#hideMenuHelpTop").hide(); "none" != p(".hide-menu").css("display") ?
                    (p(".hide-menu").hide(), p(".show-menu").show(), p(".top-row-container").hide(), p("rootx").css("top", "0"), p(".editor").css("top", "0"), p(".properties-sidebar-container").css("top", "0")) : (p(".hide-menu").show(), p(".show-menu").hide(), p("rootx").css("top", "43px"), p(".editor").css("top", "43px"), p(".properties-sidebar-container").css("top", "43px;"), p(".top-row-container").show())
                }); p(".hide-left-menu").show(); p(".hide-left-menu, .show-left-menu").on("click", function () {
                    p("#hideLeftMenuHelp").hide(); "none" !=
                    p(".hide-left-menu").css("display") ? (p(".hide-left-menu").hide(), p(".show-left-menu").show(), p("#property-sidebar-page-column").hide(), p("#main-page-column").addClass("col-xs-48").removeClass("col-xs-36")) : (p(".hide-left-menu").show(), p(".show-left-menu").hide(), p("#main-page-column").addClass("col-xs-36").removeClass("col-xs-48"), p("#property-sidebar-page-column").show())
                }); p(".image-file-upload").on("change", b.Nf); p(".button-align-left").on("click", function () { h.mb.Cd.Td() }); p(".button-align-right").on("click",
                function () { h.mb.Cd.$d() }); p(".button-align-center").on("click", function () { h.mb.Cd.af() }); p(".button-move-left").on("click", function () { h.mb.qd.Td(); return !1 }); p(".button-move-right").on("click", function () { h.mb.qd.$d(); return !1 }); p(".button-move-up").on("click", function () { h.mb.qd.jg() }); p(".button-move-down").on("click", function () { h.mb.qd.lf() }); p("#control-align").draggable({ revert: !1 }); p("#control-object-move").draggable({ revert: !1 }); var c = p(".input-current-location").val() + "/" + p(".input-site-id").val() +
                "/" + p(".input-site-name").val() + "/" + p(".input-page-name").val(); p(".anchor-show-live-preview").attr("href", c); p("#notify").on("click", function () { p(this).hide() }); p(".btn-help").on("click", function () { p("#site-help").slideToggle() }); p("#site-help").on("click", function () { p(this).slideUp() }); B = window.setInterval(function () { 1 == r.Ba.Ia.Jb ? (r.Ba.Ia.jc(), window.clearInterval(B), (new f.qc.hc.Rc).o(), void 0 != f.qc.hc.Rc.fd && f.qc.hc.Rc.fd.tf()) : void 0 != f.qc.hc.Rc.fd && f.qc.hc.Rc.fd.tb() }, 1E3); p(".jq-show-plus").on("click",
                function () { p(".jq-row-plus-container").show(); p(".jq-show-plus").hide(); p(".jq-hide-plus").show() }); p(".jq-hide-plus").on("click", function () { p(".jq-row-plus-container").hide(); p(".jq-hide-plus").hide(); p(".jq-show-plus").show() }); p(".button-download-site").on("click", function () { var b = new n.ae.Ie, c = { Re: p(".input-site-name").val() }, c = JSON.stringify(c); (new g.v.A).ia("Download will start in few seconds..."); b.mf(c) }); p(".jq-save").on("click", function () {
                    (new g.v.A).ia("Please Wait..."); var b = p(document.createElement("scripts")),
                    c = p(document.createElement("styles")), e = p(document.createElement("page")); p(".image-selection").removeClass("image-selection"); p(".add-to-page").each(function () { "SCRIPT" == p(this).prop("tagName") && b.append(p(this).clone()); "LINK" == p(this).prop("tagName") && c.append(p(this).clone()); "PAGE" == p(this).prop("tagName") && (e.append(p(this).clone()), e.find(".jqte-editor").removeAttr("contentEditable").removeAttr("tabindex").css("cursor", "initial"), e.prepend('<script type=" text/javascript" class="add-to-page jquery" src= "jquery/jquery-1.11.2.min.js" > \x3c/script><link rel="stylesheet" type= "text/css" class="add-to-page" href= "bootstrap/bootstrap-customzed-48.min.css" /><link class="add-to-page" type= "text/css" href= "theme/theme.css" rel= "stylesheet" type= "text/css" /><link class="add-to-page"  href= "theme/jqplus.css" rel= "stylesheet" /> <style>  @media (max-width: 980px) { .page-margin { width: auto !important; } .empty-container-text {display:inline-block; } .jq-text-block-container{max-width:100%;} .jq-text-block-container {height:auto !important;} .jq-plus-container-text{display:inline-block; height:auto !important; } }   .jq-plus-element { display:none !important; }  .jq-row-plus-container { display:none !important; }  .row { margin:0; padding:2px; clear:both; } .root-elements{ padding:0;}  .column { margin:0; padding:0; } .page-static-element { display:none !important;} .page-static-element-circle{display:none !important;} .design-adjust-image-text-other{margin:1px;} .image-text-other .adjust-image-text-other-left{ float: left; } .page-marker{display:none !important;} .design-page-row{display:none !important;}</style>')) });
                    var f = new n.ae.Ie; f.scripts = b.html(); f.qh = c.html(); f.page = '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0" /><meta http-equiv="Content-Type" content="text/html;charset=utf-8" /> </head><body>' + e.html() + "</body></html>"; var h = { Ng: f, Re: p(".input-site-name").val(), hh: p(".input-page-name").val() }, h = JSON.stringify(h); f.cg(h)
                }); p(".jq-undo").on("click", function () { (new v.h.i).Ne() }); p("#undo-redo-execute").on("click", function () { (new v.h.i).j() }); p(".jq-redo").on("click",
                function () { (new v.h.i).Fe() }); p(".properties-button").on("click", function () { "block" == p(".control-properties").css("display") ? p(".control-properties").addClass("forced-hide") : p(".control-properties").removeClass("forced-hide"); p(".control-properties").fadeToggle() }); window.a = new u; z.nb.u.J()
            }; b.bh = function (b) { p(".ui-resizable-se").removeClass("selected-resizable"); p(".ui-resizable-s").removeClass("selected-resizable"); p(b).addClass("selected-resizable") }; return b
        }(); c.cf = y
    }(u.C || (u.C = {}))
});
define("Controls/ControlMoveJQ", ["require", "exports", "jquery"], function (c, u, q) {
    var v, f = !1; !function (c) {
        var g = function () {
            function c() { } c.prototype.o = function () { this.If(); this.Kf(); this.Jf() }; c.prototype.If = function () { q(".control-move-area").on("mousedown", function () { v = q(this).closest(".control-page"); 0 == v.length && (v = q(this).closest(".control-properties")); f = !0 }) }; c.prototype.Kf = function () { q(document).on("mouseup", function () { f = !1 }) }; c.prototype.Jf = function () {
                q(document).on("mousemove", function (c) {
                    if (0 !=
                    f && !(c.clientX + 20 > q(window).width() || c.clientY + 20 > q(window).height() || 0 > c.clientY)) { var g = q(v).css("width"); void 0 != g && (g = g.replace("px", ""), g = c.clientX - (Number(g) / 2 - 10), c = c.clientY - 10, q(v).css("left", g), q(v).css("top", c + "px"), q(v).css("outline", "0")) }
                })
            }; return c
        }(); c.ff = g
    }(u.pe || (u.pe = {}))
});
define("Template/TemplateJQ", ["require", "exports", "jquery"], function (c, u, q) { var v = !1; !function (c) { var r = function () { function c() { } c.prototype.o = function () { this.sd() }; c.Of = function () { q(".jq-template").each(function () { var c = q(this).attr("template-id"); q(this).append(q(q("#" + c).html()).clone()) }) }; c.prototype.sd = function () { q(document).ready(function () { 0 == v && (v = !0, c.Of()) }) }; return c }(); c.fg = r }(u.Me || (u.Me = {})) });
define("Controls/controlcommonjq", "require exports ./JQueryUI ../common/on ../JQte/OnInsert jquery".split(" "), function (c, u, q, v, f, r) {
    !function (c) {
        var u = function () {
            function c() { } c.gd = function () { r("#control-common-execute").on("click", function () { c.S(); c.J() }) }; c.J = function () {
                window.setTimeout(function () {
                    v.nb.u.J(); (new f.ba.u).o(); q.I.F.Yc(); q.I.F.Xc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image"); q.I.F.Qa(".adjust-image-text-other", "s"); q.I.F.Qa(".adjust-image-text-other-left",
                    "e"); q.I.F.gc(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", ""); r(".empty-container-text, .empty-container-image").css("z-index", "0"); r(".column").each(function () {
                        0 == r(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length ? (r(this).addClass("empty"), 0 == r(this).find(".empty-drop-element").length && r(this).append("<div class='image-text-other empty-drop-element' ></div>")) :
                        (r(this).removeClass("empty"), r(this).find(".empty-drop-element").remove())
                    }); r(".image-text-other, .empty-container-empty").each(function (c, f) { var g = r(f), n = g.offset().top + g.height(), q = g.offset().top, u = g.offset().left; g.attr("top", q); g.attr("bottom", n); g.attr("left", u) }); q.I.F.Jc(".column, .empty-container, .image-text-other"); r(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>"); r(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>"); r(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>")
                },
                10)
            }; c.S = function () { q.I.F.Kc(".column, .empty-container, .image-text-other"); q.I.F.Ic(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer"); q.I.F.Zc(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left") }; c.oa = !1; return c
        }(); c.u = u
    }(u.D || (u.D = {}))
});
define("Document/DocumentJQ", ["require", "exports", "jquery"], function (c, u, q) { var v = !1; !function (c) { var r = function () { function c() { } c.prototype.o = function () { this.Dd() }; c.prototype.Dd = function () { q(document).ready(function () { 0 == v && (v = !0) }) }; return c }(); c.kf = r }(u.Document || (u.Document = {})) });
define("InsertTool/InsertToolJQ", ["require", "exports", "jquery"], function (c, u, q) { var v = !1; !function (c) { var r = function () { function c() { } c.prototype.o = function () { this.sd() }; c.eh = function () { }; c.prototype.sd = function () { q(document).ready(function () { 0 == v && (v = !0) }) }; return c }(); c.wf = r }(u.ze || (u.ze = {})) });
define("Page/LoadJQ", "require exports ../Controls/ControlCommonJQ ../UndoManager/UndoManager ../Error/ErrorJQ ../_Classes/Auth ../Preview/Preview ../Constants/ConstantsJQ ../InsertTool/InsertToolJQ ../jqte/OnInsert jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h) {
    !function (c) {
        var p = function () {
            function c() { } c.Df = function () {
                var c = "/services/sites/" + h(".input-site-id").val() + "/" + h(".input-site-name").val() + "/" + h(".input-page-name").val(); h.ajax({
                    url: c, type: "GET", cache: !1, success: function (c) {
                        r.Ba.Ia.jc();
                        var p = h(document.createElement("div")), u = h(document.createElement("div")); p.html(c); u.append(p.html()); if (0 < u.find("page").length) {
                            h("page").html(u.find("page").html()); try { h("page").attr("style", u.find("page").attr("style")) } catch (b) { } h(".main-page-column").css("border", "1px solid #29adef"); h("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move"); h("page .jqte-editor").attr("tabindex", "1"); z.V.vd.Pe = h("page .jq-normal-link").length +
                            10; z.V.vd.Oe = h("page .jq-editor-link").length + 10; h(".page").show(); g.rb.Tb.Bb(); h("#control-templates").hide(); (new l.ba.u).o(); q.D.u.S(); q.D.u.J(); (new n.ze.wf).sd(); (new v.h.i).j(); h(window).scrollTop()
                        } else h("#control-templates").show(); h(".jq-row-plus-container").hide(); (new f.v.A).Ha("Your page is loading. <br>Please wait...")
                    }, error: function () { r.Ba.Ia.jc(); (new f.v.A).U("Page Loading Failed ! <br> Try again latter") }
                })
            }; return c
        }(); c.Cf = p
    }(u.l || (u.l = {}))
});
define("mainJQ", "require exports ./Page/Context/ContextJQ ./Controls/ControlsJQ ./ContextMenu/ContextMenuJQ ./Watch/WatchMouseJQ ./_Classes/Auth ./Common/CommonEvents ./Preview/Preview ./jqte/MyJQte ./Controls/ControlMoveJQ ./Template/TemplateJQ ./Controls/controlcommonjq ./Document/DocumentJQ ./Page/LoadJQ jquery".split(" "), function (c, u, q, v, f, r, g, z, n, l, h, E, p, B, A, D) {
    var C = (new q.l.Cb, !1); D(document).ready(function () {
        if (0 == C) {
            C = !0; var c = D(document.createElement("div")); c.attr("src", "xa.xml"); D("body").find("div").first().append(c);
            D("body").find("div").first().append(c.clone()); D("body").find("div").first().append(c.clone()); p.D.u.gd(); D(".row").removeClass("design-row"); D(".column").removeClass("design-column"); D(".jq-loading").show(); "" != D("inpu-page-name").val() && "" != D("inpu-site-name").val() && A.l.Cf.Df(); (new B.Document.kf).o(); (new z.C.cf).o(); (new n.rb.Tb).o(); D(".jq-text-block-container").addClass("jq-text-block-container-padding"); D(".column").addClass("column-padding"); (new l.mc.Cc("")).o(); (new v.l.xb).o(); (new f.dc.kd).o();
            (new r.b.c).mg(); (new h.pe.ff).o(); (new E.Me.fg).o(); (new g.Ba.Ia).$e(); D("rootX").show()
        }
    })
});  requirejs(["mainJQ"]); 
