import _extends from '@babel/runtime/helpers/extends';

var E = {};
  E.ALIGN_AUTO = 0;
  E.ALIGN_FLEX_START = 1;
  E.ALIGN_CENTER = 2;
  E.ALIGN_FLEX_END = 3;
  E.ALIGN_STRETCH = 4;
  E.ALIGN_BASELINE = 5;
  E.ALIGN_SPACE_BETWEEN = 6;
  E.ALIGN_SPACE_AROUND = 7;
  E.DIMENSION_WIDTH = 0;
  E.DIMENSION_HEIGHT = 1;
  E.DIRECTION_INHERIT = 0;
  E.DIRECTION_LTR = 1;
  E.DIRECTION_RTL = 2;
  E.DISPLAY_FLEX = 0;
  E.DISPLAY_NONE = 1;
  E.EDGE_LEFT = 0;
  E.EDGE_TOP = 1;
  E.EDGE_RIGHT = 2;
  E.EDGE_BOTTOM = 3;
  E.EDGE_START = 4;
  E.EDGE_END = 5;
  E.EDGE_HORIZONTAL = 6;
  E.EDGE_VERTICAL = 7;
  E.EDGE_ALL = 8;
  E.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS = 0;
  E.EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE = 1;
  E.EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN = 2;
  E.FLEX_DIRECTION_COLUMN = 0;
  E.FLEX_DIRECTION_COLUMN_REVERSE = 1;
  E.FLEX_DIRECTION_ROW = 2;
  E.FLEX_DIRECTION_ROW_REVERSE = 3;
  E.GUTTER_COLUMN = 0;
  E.GUTTER_ROW = 1;
  E.GUTTER_ALL = 2;
  E.JUSTIFY_FLEX_START = 0;
  E.JUSTIFY_CENTER = 1;
  E.JUSTIFY_FLEX_END = 2;
  E.JUSTIFY_SPACE_BETWEEN = 3;
  E.JUSTIFY_SPACE_AROUND = 4;
  E.JUSTIFY_SPACE_EVENLY = 5;
  E.LOG_LEVEL_ERROR = 0;
  E.LOG_LEVEL_WARN = 1;
  E.LOG_LEVEL_INFO = 2;
  E.LOG_LEVEL_DEBUG = 3;
  E.LOG_LEVEL_VERBOSE = 4;
  E.LOG_LEVEL_FATAL = 5;
  E.MEASURE_MODE_UNDEFINED = 0;
  E.MEASURE_MODE_EXACTLY = 1;
  E.MEASURE_MODE_AT_MOST = 2;
  E.NODE_TYPE_DEFAULT = 0;
  E.NODE_TYPE_TEXT = 1;
  E.OVERFLOW_VISIBLE = 0;
  E.OVERFLOW_HIDDEN = 1;
  E.OVERFLOW_SCROLL = 2;
  E.POSITION_TYPE_STATIC = 0;
  E.POSITION_TYPE_RELATIVE = 1;
  E.POSITION_TYPE_ABSOLUTE = 2;
  E.PRINT_OPTIONS_LAYOUT = 1;
  E.PRINT_OPTIONS_STYLE = 2;
  E.PRINT_OPTIONS_CHILDREN = 4;
  E.UNIT_UNDEFINED = 0;
  E.UNIT_POINT = 1;
  E.UNIT_PERCENT = 2;
  E.UNIT_AUTO = 3;
  E.WRAP_NO_WRAP = 0;
  E.WRAP_WRAP = 1;
  E.WRAP_WRAP_REVERSE = 2;
var rE = E;
var AE = function AE(E) {
  function a(E, a, _) {
    var s = E[a];
    E[a] = function () {
      for (var _len = arguments.length, E = new Array(_len), _key = 0; _key < _len; _key++) {
        E[_key] = arguments[_key];
      }
      return _.call.apply(_, [this, s].concat(E));
    };
  }
  var _loop = function _loop() {
    var _s;
    var _ = _arr[_i];
    var s = (_s = {}, _s[rE.UNIT_POINT] = E.Node.prototype[_], _s[rE.UNIT_PERCENT] = E.Node.prototype[_ + "Percent"], _s[rE.UNIT_AUTO] = E.Node.prototype[_ + "Auto"], _s);
    a(E.Node.prototype, _, function (E) {
      var _s$t, _s$t2;
      for (var _len2 = arguments.length, a = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        a[_key2 - 1] = arguments[_key2];
      }
      var e = a.pop();
      var t, N;
      if ("auto" === e) t = rE.UNIT_AUTO, N = void 0;else if ("object" == typeof e) t = e.unit, N = e.valueOf();else if (t = "string" == typeof e && e.endsWith("%") ? rE.UNIT_PERCENT : rE.UNIT_POINT, N = parseFloat(e), !Number.isNaN(e) && Number.isNaN(N)) throw new Error("Invalid value " + e + " for " + _);
      if (!s[t]) throw new Error("Failed to execute \"" + _ + "\": Unsupported unit '" + e + "'");
      return void 0 !== N ? (_s$t = s[t]).call.apply(_s$t, [this].concat(a, [N])) : (_s$t2 = s[t]).call.apply(_s$t2, [this].concat(a));
    });
  };
  for (var _i = 0, _arr = ["setPosition", "setMargin", "setFlexBasis", "setWidth", "setHeight", "setMinWidth", "setMinHeight", "setMaxWidth", "setMaxHeight", "setPadding"]; _i < _arr.length; _i++) {
    _loop();
  }
  return a(E.Node.prototype, "setMeasureFunc", function (a, _) {
    return _ ? a.call(this, (s = _, E.MeasureCallback.implement({
      measure: function measure() {
        var _s2 = s.apply(void 0, arguments),
          a = _s2.width,
          _ = _s2.height;
        return {
          width: a != null ? a : NaN,
          height: _ != null ? _ : NaN
        };
      }
    }))) : this.unsetMeasureFunc();
    var s;
  }), a(E.Node.prototype, "setDirtiedFunc", function (a, _) {
    var s;
    a.call(this, (s = _, E.DirtiedCallback.implement({
      dirtied: s
    })));
  }), a(E.Config.prototype, "free", function () {
    E.Config.destroy(this);
  }), a(E.Node, "create", function (a, _) {
    return _ ? E.Node.createWithConfig(_) : E.Node.createDefault();
  }), a(E.Node.prototype, "free", function () {
    E.Node.destroy(this);
  }), a(E.Node.prototype, "freeRecursive", function () {
    for (var _E2 = 0, _a = this.getChildCount(); _E2 < _a; ++_E2) this.getChild(0).freeRecursive();
    this.free();
  }), a(E.Node.prototype, "calculateLayout", function (E, a, _, s) {
    if (a === void 0) {
      a = NaN;
    }
    if (_ === void 0) {
      _ = NaN;
    }
    if (s === void 0) {
      s = rE.DIRECTION_LTR;
    }
    return E.call(this, a, _, s);
  }), _extends({
    Config: E.Config,
    Node: E.Node
  }, rE);
};

var rr,
  er = (rr = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0, function (r) {
    if (r === void 0) {
      r = {};
    }
    var e, a, i;
    e || (e = void 0 !== r ? r : {}), e.ready = new Promise(function (r, e) {
      a = r, i = e;
    });
    var n = Object.assign({}, e),
      t = "";
    "undefined" != typeof document && document.currentScript && (t = document.currentScript.src), rr && (t = rr), t = 0 !== t.indexOf("blob:") ? t.substr(0, t.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
    var f,
      o = e.print || console.log.bind(console),
      c = e.printErr || console.warn.bind(console);
    function u() {}
    function b(r) {
      this.exports = function (r) {
        for (var e, a = new Uint8Array(123), i = 25; i >= 0; --i) a[48 + i] = 52 + i, a[65 + i] = i, a[97 + i] = 26 + i;
        function n(r, e, i) {
          for (var n, t, f = 0, o = e, c = i.length, u = e + (3 * c >> 2) - ("=" == i[c - 2]) - ("=" == i[c - 1]); f < c; f += 4) n = a[i.charCodeAt(f + 1)], t = a[i.charCodeAt(f + 2)], r[o++] = a[i.charCodeAt(f)] << 2 | n >> 4, o < u && (r[o++] = n << 4 | t >> 2), o < u && (r[o++] = t << 6 | a[i.charCodeAt(f + 3)]);
        }
        a[43] = 62, a[47] = 63;
        var t = new ArrayBuffer(16),
          f = new Int32Array(t),
          o = new Float32Array(t),
          c = new Float64Array(t);
        function u(r) {
          return f[r];
        }
        function b(r, e) {
          f[r] = e;
        }
        function s() {
          return c[0];
        }
        function A(r) {
          c[0] = r;
        }
        function k() {
          throw new Error("abort");
        }
        function l(r) {
          o[2] = r;
        }
        function d() {
          return o[2];
        }
        return function (r) {
          var a = r.a,
            i = a.a,
            t = i.buffer;
          i.grow = function (r) {
            r |= 0;
            var a = 0 | ia(),
              n = a + r | 0;
            if (a < n && n < 65536) {
              var u = new ArrayBuffer(w(n, 65536));
              new Int8Array(u).set(f), f = new Int8Array(u), o = new Int16Array(u), c = new Int32Array(u), v = new Uint8Array(u), h = new Uint16Array(u), p = new Uint32Array(u), m = new Float32Array(u), N = new Float64Array(u), t = u, i.buffer = t, e = v;
            }
            return a;
          };
          var f = new Int8Array(t),
            o = new Int16Array(t),
            c = new Int32Array(t),
            v = new Uint8Array(t),
            h = new Uint16Array(t),
            p = new Uint32Array(t),
            m = new Float32Array(t),
            N = new Float64Array(t),
            w = Math.imul,
            y = Math.fround,
            E = Math.abs,
            G = Math.clz32,
            R = Math.min,
            g = Math.max,
            Z = a.b,
            W = a.c,
            V = a.d,
            B = a.e,
            T = a.f,
            I = a.g,
            X = a.h,
            O = a.i,
            L = a.j,
            _ = a.k,
            F = a.l,
            C = a.m,
            S = a.n,
            P = a.o,
            Y = a.p,
            U = a.q,
            M = a.r,
            H = a.s,
            Q = a.t,
            z = a.u,
            j = a.v,
            D = a.w,
            x = a.x,
            J = a.y,
            K = a.z,
            q = a.A,
            $ = a.B,
            rr = a.C,
            er = a.D,
            ar = 73632,
            ir = 0;
          function nr(r, e, a, i, n, t, o, u, s, A, l, h, p, N) {
            var w,
              G = y(0),
              R = y(0),
              g = 0,
              Z = 0,
              W = 0,
              V = y(0),
              B = y(0),
              T = y(0),
              X = 0,
              O = 0,
              L = 0,
              _ = y(0),
              F = y(0),
              C = y(0),
              S = 0,
              P = y(0),
              Y = 0,
              U = y(0),
              M = y(0),
              H = 0,
              Q = 0,
              z = 0,
              j = 0,
              D = 0,
              x = y(0),
              J = 0,
              K = y(0),
              q = 0,
              $ = 0,
              rr = 0,
              er = 0,
              ir = y(0),
              nr = 0,
              tr = 0,
              fr = 0,
              cr = 0,
              br = y(0),
              lr = 0,
              dr = 0,
              vr = 0,
              hr = y(0),
              Nr = y(0),
              yr = 0,
              Er = y(0),
              Gr = y(0),
              Zr = y(0),
              _r = 0,
              Cr = 0,
              Sr = y(0),
              Pr = 0,
              Yr = y(0),
              Hr = y(0),
              jr = y(0),
              xr = y(0),
              Kr = 0,
              qr = 0,
              $r = 0,
              re = 0,
              ee = 0,
              ae = 0,
              ie = 0,
              ne = 0,
              te = 0,
              fe = y(0),
              oe = y(0);
            ar = w = ar - 384 | 0;
            r: {
              e: {
                a: {
                  if (!n || e == e) {
                    if (!t || a == a) {
                      if (c[(g = (s ? 0 : 4) + l | 0) >> 2] = c[g >> 2] + 1, Pr = (0 | i) <= 1 ? 1 : i, J = (g = 3 & c[r + 24 >> 2]) || Pr, f[r + 300 | 0] = 252 & v[r + 300 | 0] | 3 & J, g = r + 252 | 0, i = (1 != (0 | J)) << 3, B = Mr(r, lr = 2 == (0 | J) ? 3 : 2, o), m[g + i >> 2] = B, Z = g, g = (1 == (0 | J)) << 3, F = Ur(r, lr, o), m[Z + g >> 2] = F, _ = Mr(r, 0, o), m[r + 256 >> 2] = _, V = Ur(r, 0, o), m[r + 264 >> 2] = V, te = (W = r + 268 | 0) + i | 0, fe = zr(r, lr), m[te >> 2] = fe, te = g + W | 0, fe = Qr(r, lr), m[te >> 2] = fe, G = zr(r, 0), m[r + 272 >> 2] = G, T = Qr(r, 0), m[r + 280 >> 2] = T, te = (Z = i) + (i = r + 284 | 0) | 0, fe = Br(r, lr, o), m[te >> 2] = fe, te = i + g | 0, fe = Tr(r, lr, o), m[te >> 2] = fe, R = Br(r, 0, o), m[r + 288 >> 2] = R, P = Tr(r, 0, o), m[r + 296 >> 2] = P, B = y(B + F), F = y(_ + V), i = c[r + 8 >> 2]) {
                        if (_ = y(y(y(m[r + 284 >> 2] + m[r + 292 >> 2]) + m[r + 268 >> 2]) + m[r + 276 >> 2]), a = y(t ? a - F : NaN), G = y(y(R + P) + G), (e = R = y(n ? e - B : NaN)) == e && (e = (e = y(R - _)) == e ? Re(e, y(0)) : y(0)), B = y(G + T), G = a, a == a && (G = (G = y(a - B)) == G ? Re(G, y(0)) : y(0)), !(1 != (0 | n) | 1 != (0 | t))) {
                          e = (i = (e = ur(r, 2, R, o)) != e) | (G = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != G ? i ? G : e : Re(e, G), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, a, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                          break r;
                        }
                        16 & v[r + 4 | 0] ? aa[0 | i](w + 24 | 0, r, e, n, G, t, 0) : aa[0 | i](w + 24 | 0, r, e, n, G, t), c[l + 20 >> 2] = c[l + 20 >> 2] + 1, c[24 + (i = (N << 2) + l | 0) >> 2] = c[i + 24 >> 2] + 1, e = y(_ + m[w + 24 >> 2]), e = (i = (e = ur(r, 2, n ? 2 == (0 | n) ? e : R : e, o)) != e) | (G = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != G ? i ? G : e : Re(e, G), m[r + 516 >> 2] = e, e = y(B + m[w + 28 >> 2]), e = (i = (e = ur(r, 0, t ? 2 == (0 | t) ? e : a : e, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      if ((0 | (i = c[r + 556 >> 2])) == (0 | (N = c[r + 560 >> 2]))) {
                        F = y(a - F), e = (i = (e = ur(r, 2, y(-3 & n ? e - B : y(y(m[r + 284 >> 2] + m[r + 292 >> 2]) + m[r + 268 >> 2]) + m[r + 276 >> 2]), o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, -3 & t ? F : y(y(y(R + P) + G) + T), u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      if (!(s || (R = y(e - B), G = y(a - F), !(2 == (0 | n) & R <= y(0) | !(!(G <= y(0)) | 2 != (0 | t)) & G == G) & (1 != (0 | n) | 1 != (0 | t))))) {
                        e = (i = (e = ur(r, 2, R == R ? 2 == (0 | n) && R < y(0) ? y(0) : R : y(0), o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[r + 516 >> 2] = e, e = (i = (e = ur(r, 0, G != G || 2 == (0 | t) && G < y(0) ? y(0) : G, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                        break r;
                      }
                      for (er = (z = N - i | 0) >> 2; g = c[i >> 2], c[g + 552 >> 2] != (0 | r) && (W = c[r + 568 >> 2], g = Ir(c[W >> 2], v[W + 8 | 0], g, r, O, 0), c[i >> 2] = g, c[g + 552 >> 2] = r), O = O + 1 | 0, (0 | N) != (0 | (i = i + 4 | 0)););
                      f[r + 300 | 0] = 251 & v[r + 300 | 0], O = 3, i = (yr = c[r + 24 >> 2]) >>> 2 & 3;
                      i: {
                        n: {
                          t: {
                            if (2 == (0 | J)) {
                              N = 0;
                              f: switch (i - 2 | 0) {
                                case 0:
                                  break i;
                                case 1:
                                  break f;
                                default:
                                  break t;
                              }
                              O = 2;
                              break i;
                            }
                            if (O = 2, N = 0, i >>> 0 > 1) break n;
                          }
                          N = O;
                        }
                        O = i;
                      }
                      Yr = y(e - B), ir = y(y(Br(r, O, o) + zr(r, O)) + y(Tr(r, O, o) + Qr(r, O))), P = y(Br(r, N, o) + zr(r, N)), K = y(P + y(Tr(r, N, o) + Qr(r, N))), V = kr(r, 0, Yr, (q = O >>> 0 > 1) ? ir : K, o), U = kr(r, 1, Hr = y(a - F), q ? K : ir, u), M = q ? U : V, F = q ? V : U, nr = c[r + 560 >> 2], g = c[r + 556 >> 2];
                      i: if (1 == (0 | (Y = q ? n : t))) {
                        if ((0 | g) == (0 | nr)) break a;
                        for (i = 0, W = g;;) {
                          Z = i;
                          n: if (Dr(i = c[W >> 2])) {
                            if (X = 0, Z) break i;
                            if (!(Z = c[i + 552 >> 2])) break i;
                            t: {
                              if (!((a = m[i + 32 >> 2]) == a || (G = y(0), (a = m[i + 28 >> 2]) > y(0))) || (G = a, a == a)) {
                                if (y(E(G)) < y(9999999747378752e-20)) break i;
                                if (!Z) {
                                  a = y(0);
                                  break t;
                                }
                              }
                              if ((a = m[i + 36 >> 2]) != a) {
                                if (f[i + 4 | 0] < 0) {
                                  a = y(1);
                                  break t;
                                }
                                if (a = y(0), !((e = m[i + 28 >> 2]) < y(0))) break t;
                                a = y(-e);
                              }
                              if (a != a) break n;
                            }
                            if (y(E(a)) < y(9999999747378752e-20)) break i;
                          } else i = Z;
                          if (X = i, (0 | nr) == (0 | (W = W + 4 | 0))) break;
                        }
                      }
                      if ((0 | g) == (0 | nr)) break a;
                      for (j = (0 | J) <= 1 ? 1 : J, tr = (fr = V != V) | 1 != (0 | n), cr = U == U, dr = V == V, G = y(0);;) {
                        sr(L = c[g >> 2]);
                        i: if (4194304 & (W = c[L + 24 >> 2])) {
                          if (mr(L, 0), W = 1 | (i = v[L + 4 | 0]), f[L + 4 | 0] = W, !(4 & i)) break i;
                          f[L + 4 | 0] = 251 & W;
                        } else if (s && (Fr(L, (i = 3 & W) || j, F, M, V), W = c[L + 24 >> 2]), 131072 != (196608 & W)) {
                          if ((0 | X) != (0 | L)) {
                            Z = (vr = c[r + 24 >> 2]) >>> 2 & 3;
                            n: {
                              t: if (2 == (0 | J)) {
                                i = 3;
                                f: switch (Z - 2 | 0) {
                                  case 0:
                                    break n;
                                  case 1:
                                    break f;
                                  default:
                                    break t;
                                }
                                i = 2;
                                break n;
                              }
                              i = Z;
                            }
                            R = ($ = i >>> 0 > 1) ? V : U, a = y(0), e = m[L + 40 >> 2];
                            n: {
                              t: {
                                f: if (2139156720 != (0 | (Z = c[L + 40 >> 2]))) {
                                  if (2140081935 == (0 | Z)) break t;
                                  S = 4276;
                                  o: {
                                    if (2141891242 != (0 | Z)) {
                                      if (e == e) break o;
                                      S = 4268;
                                    }
                                    a = m[S >> 2];
                                    c: {
                                      u: switch (0 | (Z = c[S + 4 >> 2])) {
                                        case 0:
                                        case 3:
                                          break u;
                                        default:
                                          break c;
                                      }
                                      if (e = y(NaN), !(m[L + 28 >> 2] > y(0))) break n;
                                      Z = (S = f[L + 4 | 0] < 0) ? 3 : 1, b(2, D = S ? 2143289344 : 0), a = d();
                                    }
                                    switch (e = y(NaN), Z - 1 | 0) {
                                      case 0:
                                        break t;
                                      case 1:
                                        break f;
                                      default:
                                        break n;
                                    }
                                  }
                                  if (b(2, 536870912 + (-1073741825 & Z) | 0), a = d(), !(1073741824 & Z)) break t;
                                }
                                e = y(y(R * a) * y(.009999999776482582));
                                break n;
                              }
                              e = a;
                            }
                            a = m[L + 572 >> 2], Z = 0;
                            n: {
                              switch (0 | (Q = c[L + 576 >> 2])) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (1 != (0 | Q) | (B = m[L + 572 >> 2]) != B) Z = 1, 2 != (0 | Q) | B != B || (Z = 0, a < y(0) || (Z = dr));else {
                                if (a < y(0)) break n;
                                Z = 1;
                              }
                            }
                            B = m[L + 580 >> 2], S = 0;
                            n: {
                              switch (0 | (H = c[L + 584 >> 2])) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (1 != (0 | H) | (T = m[L + 580 >> 2]) != T) S = 1, 2 != (0 | H) | T != T || (S = 0, B < y(0) || (S = cr));else {
                                if (B < y(0)) break n;
                                S = 1;
                              }
                            }
                            n: {
                              t: if (e != e | R != R) {
                                if (Z & $) {
                                  switch (R = y(y(Br(L, 2, V) + zr(L, 2)) + y(Tr(L, 2, V) + Qr(L, 2))), e = y(NaN), Q - 1 | 0) {
                                    case 1:
                                      a = y(y(V * a) * y(.009999999776482582));
                                    case 0:
                                      if (R <= (e = a)) break t;
                                  }
                                  if (!(e == e | R == R)) {
                                    a = e;
                                    break t;
                                  }
                                  if (e < R) {
                                    a = R;
                                    break t;
                                  }
                                  a = e != e ? R : e;
                                } else if ($ | 1 ^ S) {
                                  if (c[w + 360 >> 2] = 2143289344, c[w + 24 >> 2] = 2143289344, D = 0, c[w + 356 >> 2] = 0, c[w + 352 >> 2] = 0, T = y(Mr(L, 2, V) + Ur(L, 2, V)), _ = Mr(L, 0, V), C = Ur(L, 0, V), R = y(NaN), rr = 0, e = y(NaN), Z) {
                                    f: {
                                      o: switch (Q - 1 | 0) {
                                        case 0:
                                          e = a;
                                          break f;
                                        case 1:
                                          break o;
                                        default:
                                          break f;
                                      }
                                      e = y(y(V * a) * y(.009999999776482582));
                                    }
                                    c[w + 356 >> 2] = 1, e = y(T + e), m[w + 24 >> 2] = e, rr = 1;
                                  }
                                  if (_ = y(_ + C), S) {
                                    a = y(NaN);
                                    f: {
                                      o: switch (H - 1 | 0) {
                                        case 0:
                                          a = B;
                                          break f;
                                        case 1:
                                          break o;
                                        default:
                                          break f;
                                      }
                                      a = y(y(U * B) * y(.009999999776482582));
                                    }
                                    c[w + 352 >> 2] = 1, R = y(_ + a), m[w + 360 >> 2] = R, D = 1;
                                  }
                                  Q = i >>> 0 < 2;
                                  f: {
                                    o: {
                                      c: {
                                        if (!(!$ & 2097152 == (0 | (H = 3145728 & vr)))) {
                                          if (fr | 2097152 == (0 | H)) break o;
                                          if (e != e) break c;
                                          break o;
                                        }
                                        if (fr | e == e) break f;
                                      }
                                      rr = 2, c[w + 356 >> 2] = 2, m[w + 24 >> 2] = V, e = V;
                                    }
                                    o: {
                                      if (!(!Q & 2097152 == (0 | H))) {
                                        if (2097152 == (0 | H) | U != U) break f;
                                        if (R != R) break o;
                                        break f;
                                      }
                                      if (R == R | U != U) break f;
                                    }
                                    D = 2, c[w + 352 >> 2] = 2, m[w + 360 >> 2] = U, R = U;
                                  }
                                  f: if (!(H = (a = m[L + 224 >> 2]) != a)) {
                                    if ($ | 1 != (0 | rr)) {
                                      if (Q | 1 != (0 | D)) break f;
                                      c[w + 356 >> 2] = 1, m[w + 24 >> 2] = y(y(R - _) * a) + T;
                                    } else c[w + 352 >> 2] = 1, m[w + 360 >> 2] = _ + y(y(e - T) / a);
                                    D = 1, rr = 1;
                                  }
                                  5 == (0 | (W = (W = W >>> 13 & 7) || vr >>> 10 & 7)) | 1 == (0 | rr) | $ | Z | tr | 4 != (0 | W) || (c[w + 356 >> 2] = 1, m[w + 24 >> 2] = V, H || (D = 1, c[w + 352 >> 2] = 1, m[w + 360 >> 2] = y(V - T) / a)), Q | 1 != (0 | t) | U != U | S | 4 != (0 | W) | 1 == (0 | D) || (c[w + 352 >> 2] = 1, m[w + 360 >> 2] = U, H || (c[w + 356 >> 2] = 1, m[w + 24 >> 2] = y(U - _) * a)), Vr(L, 2, V, V, w + 356 | 0, w + 24 | 0), Vr(L, 0, U, V, w + 352 | 0, w + 360 | 0), or(L, m[w + 24 >> 2], m[w + 360 >> 2], J, c[w + 356 >> 2], c[w + 352 >> 2], V, U, 0, 5, A, l, h, p), a = (W = (e = m[516 + (L + (c[4252 + (i << 2) >> 2] << 2) | 0) >> 2]) != e) | (a = y(y(Br(L, i, V) + zr(L, i)) + y(Tr(L, i, V) + Qr(L, i)))) != a ? W ? a : e : Re(e, a);
                                } else {
                                  switch (e = y(y(Br(L, 0, V) + zr(L, 0)) + y(Tr(L, 0, V) + Qr(L, 0))), a = y(NaN), H - 1 | 0) {
                                    case 1:
                                      B = y(y(U * B) * y(.009999999776482582));
                                    case 0:
                                      if (e <= (a = B)) break t;
                                  }
                                  if (a != a & e != e) break t;
                                  if (e > a) {
                                    a = e;
                                    break t;
                                  }
                                  a = a != a ? e : a;
                                }
                              } else {
                                if (a = m[L + 308 >> 2], (!v[c[L + 568 >> 2] + 20 | 0] | c[L + 304 >> 2] == (0 | p)) & a == a) break n;
                                if (!((a = y(y(Br(L, i, V) + zr(L, i)) + y(Tr(L, i, V) + Qr(L, i)))) <= e) & e < a) break t;
                                a = e;
                              }
                              m[L + 308 >> 2] = a;
                            }
                            c[L + 304 >> 2] = p;
                          } else c[X + 308 >> 2] = 0, c[X + 304 >> 2] = p, a = y(0);
                          G = y(G + y(a + y(Mr(L, O, V) + Ur(L, O, V))));
                        }
                        if ((0 | nr) == (0 | (g = g + 4 | 0))) break;
                      }
                      break e;
                    }
                    c[w >> 2] = 3023, Xr(r, w), De(), k();
                  }
                  c[w + 16 >> 2] = 3105, Xr(r, w + 16 | 0), De(), k();
                }
                G = y(0);
              }
              e = y(G + y(0)), Er = q ? u : o, hr = q ? o : u, z >>> 0 >= 5 && (e = y(y(pr(r, O, M) * y(er - 1 >>> 0)) + e)), i = e > F, nr = 786432 & yr, cr = 2 == (0 | Y) && nr && i ? 1 : Y, qr = (fr = 1 == (0 | (L = q ? t : n))) & (1 ^ s), q = O >>> 0 < 2, $r = -3 & L, vr = r + 208 | 0, H = 4220 + (t = N << 2) | 0, re = fr & !nr, ee = 1 != (0 | L) | s, $ = 4220 + (g = O << 2) | 0, dr = g + 4252 | 0, ae = (rr = M == M) << 1, Q = t + 4252 | 0, ie = !Y | !i, yr = w + 52 | 0, jr = pr(r, N, M), W = 0, i = 0, D = 0;
              e: {
                for (;;) {
                  if (S = i, Rr(w + 24 | 0, 0, 44), (0 | (i = c[r + 560 >> 2])) != (0 | (t = c[r + 556 >> 2]))) {
                    if ((0 | (i = i - t | 0)) < 0) break e;
                    g = pe(w + 360 | 0, i >> 2, 0, yr), i = c[w + 44 >> 2], t = c[w + 48 >> 2] - i | 0, t = wr(c[w + 364 >> 2] - t | 0, i, t), i = c[w + 44 >> 2], c[w + 364 >> 2] = i, c[w + 44 >> 2] = t, Z = c[w + 368 >> 2], X = c[w + 372 >> 2], t = c[w + 48 >> 2], c[w + 368 >> 2] = t, Y = c[w + 52 >> 2], c[w + 48 >> 2] = Z, c[w + 52 >> 2] = X, c[w + 372 >> 2] = Y, c[g >> 2] = i, (0 | i) != (0 | t) && (c[w + 368 >> 2] = t + (3 + (i - t | 0) & -4)), i && gr(i);
                  }
                  t = (X = c[r + 24 >> 2]) >>> 2 & 3;
                  a: {
                    i: if (2 == (0 | ((i = 3 & X) || Pr))) {
                      i = 3;
                      n: switch (t - 2 | 0) {
                        case 0:
                          break a;
                        case 1:
                          break n;
                        default:
                          break i;
                      }
                      i = 2;
                      break a;
                    }
                    i = t;
                  }
                  G = pr(r, i, V);
                  a: if (!((g = W) >>> 0 >= (Z = c[r + 560 >> 2]) - (t = c[r + 556 >> 2]) >> 2 >>> 0)) for (Y = 786432 & X, a = y(0);;) {
                    if (Z - t >> 2 >>> 0 <= g >>> 0) break e;
                    if (X = c[(g << 2) + t >> 2], !(4194304 & (z = c[X + 24 >> 2]) | 131072 == (196608 & z))) {
                      if (c[X + 548 >> 2] = S, e = Mr(X, i, V), R = Ur(X, i, V), t = c[w + 24 >> 2], B = (0 | g) == (0 | W) ? y(0) : G, e = y(e + R), T = ur(X, i, R = m[X + 308 >> 2], hr), t && !(!(y(B + y(e + y(a + T))) > F) | !Y)) break a;
                      if (c[w + 24 >> 2] = t + 1, B = y(B + y(e + T)), m[w + 28 >> 2] = B + m[w + 28 >> 2], Dr(X)) {
                        i: if (c[X + 552 >> 2]) {
                          if ((e = m[X + 32 >> 2]) != e && (e = (e = m[X + 28 >> 2]) > y(0) ? e : y(0)), m[w + 32 >> 2] = e + m[w + 32 >> 2], (e = m[X + 36 >> 2]) == e) break i;
                          if (f[X + 4 | 0] < 0) {
                            e = y(1);
                            break i;
                          }
                          if (e = y(0), !((T = m[X + 28 >> 2]) < y(0))) break i;
                          e = y(-T);
                        } else e = y(0), m[w + 32 >> 2] = m[w + 32 >> 2] + y(0);
                        m[w + 36 >> 2] = m[w + 36 >> 2] - y(e * R);
                      }
                      if ((0 | (t = c[w + 48 >> 2])) == c[w + 52 >> 2]) {
                        if ((Z = 1 + (z = (t = t - c[w + 44 >> 2] | 0) >> 2) | 0) >>> 0 >= 1073741824) break e;
                        j = t >>> 1 | 0, z = pe(w + 360 | 0, t >>> 0 >= 2147483644 ? 1073741823 : Z >>> 0 < j >>> 0 ? j : Z, z, yr), c[c[w + 368 >> 2] >> 2] = X, c[w + 368 >> 2] = c[w + 368 >> 2] + 4, t = c[w + 44 >> 2], Z = c[w + 48 >> 2] - t | 0, Z = wr(c[w + 364 >> 2] - Z | 0, t, Z), t = c[w + 44 >> 2], c[w + 364 >> 2] = t, c[w + 44 >> 2] = Z, X = c[w + 368 >> 2], j = c[w + 372 >> 2], Z = c[w + 48 >> 2], c[w + 368 >> 2] = Z, tr = c[w + 52 >> 2], c[w + 48 >> 2] = X, c[w + 52 >> 2] = j, c[w + 372 >> 2] = tr, c[z >> 2] = t, (0 | t) != (0 | Z) && (c[w + 368 >> 2] = Z + (3 + (t - Z | 0) & -4)), t && gr(t);
                      } else c[t >> 2] = X, c[w + 48 >> 2] = t + 4;
                      t = c[r + 556 >> 2], Z = c[r + 560 >> 2], a = y(a + B);
                    }
                    if (!((g = g + 1 | 0) >>> 0 < Z - t >> 2 >>> 0)) break;
                  }
                  !((C = m[w + 32 >> 2]) > y(0)) | !(C < y(1)) || (c[w + 32 >> 2] = 1065353216, C = y(1)), !((x = m[w + 36 >> 2]) > y(0)) | !(x < y(1)) || (c[w + 36 >> 2] = 1065353216, x = y(1)), c[w + 40 >> 2] = g, _ = m[w + 28 >> 2], Y = c[w + 24 >> 2], D && gr(D), B = m[w + 56 >> 2], z = c[w + 48 >> 2], D = c[w + 44 >> 2];
                  a: {
                    i: {
                      n: {
                        if (1 != (0 | cr)) {
                          a = y(0), e = m[vr >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[vr >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (e == e) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], e = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              e = y(y(a * o) * y(.009999999776482582));
                              break t;
                            }
                            e = a;
                          }
                          a = y(0), G = m[r + 216 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 216 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (G == G) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], G = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              G = y(y(a * o) * y(.009999999776482582));
                              break t;
                            }
                            G = a;
                          }
                          a = y(0), R = m[r + 212 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 212 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (R == R) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], T = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              T = y(y(a * u) * y(.009999999776482582));
                              break t;
                            }
                            T = a;
                          }
                          a = y(0), R = m[r + 220 >> 2];
                          t: {
                            f: {
                              o: if (2139156720 != (0 | (i = c[r + 220 >> 2]))) {
                                if (2140081935 == (0 | i)) break f;
                                t = 4276;
                                c: {
                                  if (2141891242 != (0 | i)) {
                                    if (R == R) break c;
                                    t = 4268;
                                  }
                                  switch (a = m[t >> 2], R = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                                    case 0:
                                      break f;
                                    case 1:
                                      break o;
                                    default:
                                      break t;
                                  }
                                }
                                if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break f;
                              }
                              R = y(y(a * u) * y(.009999999776482582));
                              break t;
                            }
                            R = a;
                          }
                          if ((a = y(((i = O >>> 0 > 1) ? e : T) - ir)) == a & a > _) break n;
                          if ((a = y((i ? G : R) - ir)) == a & a < _) break n;
                          if (!v[c[r + 568 >> 2] + 11 | 0]) {
                            if (a = _, !c[r + 552 >> 2] | C == y(0)) break i;
                            t: {
                              if ((e = m[r + 32 >> 2]) != e) {
                                if (!((a = m[r + 28 >> 2]) > y(0))) break t;
                              } else a = e;
                              if (a != a) {
                                a = F;
                                break i;
                              }
                              e = m[r + 32 >> 2];
                            }
                            if (e != e && (a = _, !((e = m[r + 28 >> 2]) > y(0)))) break i;
                            if (a = F, e != y(0)) break i;
                            a = _;
                            break i;
                          }
                        }
                        a = F;
                      }
                      if (a == a) {
                        B = y(a - _);
                        break a;
                      }
                    }
                    _ < y(0) && (B = y(-_));
                  }
                  if (F = a, !qr) {
                    if ((0 | D) != (0 | z)) {
                      for (R = y(0), t = D;;) {
                        a = ur(i = c[t >> 2], O, _ = m[i + 308 >> 2], hr);
                        a: if (B < y(0)) {
                          if ((X = c[i + 552 >> 2]) ? (G = m[i + 36 >> 2]) != G && (f[i + 4 | 0] < 0 ? G = y(1) : (G = y(0), (e = m[i + 28 >> 2]) < y(0) && (G = y(-e)))) : G = y(0), !((e = y(a * y(-G))) > y(0) | e < y(0))) break a;
                          if ((G = y(y(y(B / x) * e) + a)) != G | (e = (Z = (e = ur(i, O, G, F)) != e) | (T = y(y(Br(i, O, V) + zr(i, O)) + y(Tr(i, O, V) + Qr(i, O)))) != T ? Z ? T : e : Re(e, T)) != e | e == G) break a;
                          e = y(e - a), X ? (a = m[i + 36 >> 2]) != a && (f[i + 4 | 0] < 0 ? a = y(1) : (a = y(0), (G = m[i + 28 >> 2]) < y(0) && (a = y(-G)))) : a = y(0), R = y(R + e), x = y(y(a * _) + x);
                        } else !(B > y(0)) | !c[i + 552 >> 2] || ((G = m[i + 32 >> 2]) == G || (G = m[i + 28 >> 2]) > y(0)) && G < y(0) | G > y(0) && ((T = y(y(y(B / C) * G) + a)) != T | (e = (Z = (e = ur(i, O, T, F)) != e) | (_ = y(y(Br(i, O, V) + zr(i, O)) + y(Tr(i, O, V) + Qr(i, O)))) != _ ? Z ? _ : e : Re(e, _)) != e | e == T || (C = y(C - G), R = y(R + y(e - a))));
                        if ((0 | z) == (0 | (t = t + 4 | 0))) break;
                      }
                      for (_ = y(B - R), Gr = y(_ / x), Zr = y(_ / C), Cr = !(j = fr & (!(12 & v[r + 26 | 0]) | ie)), tr = c[Q >> 2], T = y(0), Z = D;;) {
                        a = ur(t = c[Z >> 2], O, m[t + 308 >> 2], hr);
                        a: {
                          if (_ < y(0)) {
                            if (c[t + 552 >> 2] ? (e = m[t + 36 >> 2]) != e && (f[t + 4 | 0] < 0 ? e = y(1) : (e = y(0), (G = m[t + 28 >> 2]) < y(0) && (e = y(-G)))) : e = y(0), G = a, (e = y(a * y(-e))) == y(0)) break a;
                            e = x == y(0) ? y(a + e) : y(y(Gr * e) + a);
                          } else {
                            if (G = a, !(_ > y(0)) | !c[t + 552 >> 2]) break a;
                            if ((e = m[t + 32 >> 2]) != e && !((e = m[t + 28 >> 2]) > y(0))) break a;
                            if (!(e < y(0) | e > y(0))) break a;
                            e = y(y(Zr * e) + a);
                          }
                          G = (i = (e = ur(t, O, e, F)) != e) | (G = y(y(Br(t, O, V) + zr(t, O)) + y(Tr(t, O, V) + Qr(t, O)))) != G ? i ? G : e : Re(e, G);
                        }
                        if (e = Mr(t, O, V), R = Ur(t, O, V), C = Mr(t, N, V), Sr = Ur(t, N, V), R = y(e + R), xr = y(G + R), m[w + 352 >> 2] = xr, c[w + 344 >> 2] = 1, C = y(C + Sr), (e = m[t + 224 >> 2]) != e) {
                          e = m[572 + (X = t + (tr << 3) | 0) >> 2];
                          a: {
                            i: {
                              n: {
                                t: {
                                  f: {
                                    o: {
                                      c: {
                                        u: {
                                          if (rr) {
                                            R = m[X + 572 >> 2];
                                            b: {
                                              s: {
                                                A: {
                                                  switch (0 | (i = c[X + 576 >> 2])) {
                                                    case 0:
                                                    case 3:
                                                      break A;
                                                  }
                                                  if (!(1 != (0 | i) | e != e)) {
                                                    if (!(j & R < y(0))) break b;
                                                    break s;
                                                  }
                                                  if (!(Cr | !(R < y(0)) | 2 != (0 | i) | e != e)) break s;
                                                  break b;
                                                }
                                                if (!j) break b;
                                              }
                                              if ((X = c[t + 24 >> 2] >>> 13 & 7) || (X = c[r + 24 >> 2] >>> 10 & 7), 4 == (0 | X) && (ve(w + 24 | 0, t, N), 3 != c[w + 28 >> 2] && (de(w + 360 | 0, t, N), 3 != c[w + 364 >> 2]))) break u;
                                            }
                                            e = R;
                                          } else R = m[X + 572 >> 2], i = c[X + 576 >> 2];
                                          switch (0 | i) {
                                            case 0:
                                            case 3:
                                              break o;
                                            default:
                                              break c;
                                          }
                                        }
                                        c[w + 348 >> 2] = 1;
                                        break i;
                                      }
                                      if (!(1 != (0 | i) | e != e)) {
                                        if ((e = R) < y(0)) break o;
                                        break n;
                                      }
                                      if (2 != (0 | i) | e != e) break f;
                                      if (M == M && !(R < y(0))) break t;
                                    }
                                    c[w + 348 >> 2] = ae;
                                    break i;
                                  }
                                  e = y(NaN);
                                  f: switch (i - 1 | 0) {
                                    case 1:
                                      break t;
                                    case 0:
                                      break f;
                                    default:
                                      break n;
                                  }
                                  e = R;
                                  break n;
                                }
                                e = y(y(M * R) * y(.009999999776482582));
                              }
                              e = y(C + e), m[w + 356 >> 2] = e, c[w + 348 >> 2] = (fr | 2 != (0 | i)) & e == e;
                              break a;
                            }
                            m[w + 356 >> 2] = M;
                          }
                          e = R;
                        } else c[w + 348 >> 2] = 1, R = y(xr - R), m[w + 356 >> 2] = C + y(q ? R * e : R / e), R = m[572 + (X = t + (tr << 3) | 0) >> 2], i = c[X + 576 >> 2], e = m[X + 572 >> 2];
                        Vr(t, O, F, V, w + 344 | 0, w + 352 | 0), Vr(t, N, M, V, w + 348 | 0, w + 356 | 0);
                        a: {
                          i: {
                            n: {
                              switch (0 | i) {
                                case 0:
                                case 3:
                                  break n;
                              }
                              if (!(1 != (0 | i) | e != e)) {
                                if (R < y(0)) break n;
                                break i;
                              }
                              if (2 != (0 | i) | e != e) break i;
                              if (!(R < y(0)) && (X = 0, rr)) break a;
                            }
                            if (X = 0, (i = c[t + 24 >> 2] >>> 13 & 7) || (i = c[r + 24 >> 2] >>> 10 & 7), 4 != (0 | i)) break a;
                            if (ve(w + 24 | 0, t, N), 3 == c[w + 28 >> 2]) break a;
                            de(w + 360 | 0, t, N), X = 3 != c[w + 364 >> 2];
                            break a;
                          }
                          X = 0;
                        }
                        e = m[w + 352 >> 2], R = m[w + 356 >> 2], C = (i = O >>> 0 > 1) ? e : R, e = i ? R : e, _r = c[w + 344 >> 2], Kr = c[w + 348 >> 2], ne = i ? _r : Kr, _r = i ? Kr : _r, i = (1 ^ X) & s, or(t, C, e, 3 & v[r + 300 | 0], ne, _r, V, U, i, i ? 4 : 7, A, l, h, p), T = y(T + y(G - a));
                        a: {
                          if (4 & (i = v[r + 300 | 0])) X = 251 & i;else if (X = 251 & i, i = 0, !(4 & v[t + 300 | 0])) break a;
                          i = 4;
                        }
                        if (f[r + 300 | 0] = i | X, (0 | z) == (0 | (Z = Z + 4 | 0))) break;
                      }
                    } else T = y(0);
                    B = y(B - T);
                  }
                  i = v[r + 300 | 0], f[r + 300 | 0] = 251 & i | (B < y(0) ? 4 : 4 & i), R = y(Br(r, O, o) + zr(r, O)), Gr = y(Tr(r, O, o) + Qr(r, O)), _ = pr(r, O, o);
                  a: if (!(B > y(0)) | 2 != (0 | cr)) T = B;else {
                    T = y(0), a = y(0);
                    i: {
                      n: {
                        i = vr + (c[dr >> 2] << 2) | 0, e = m[i >> 2];
                        t: {
                          if (!(t = 2139156720 == (0 | (i = c[i >> 2])))) {
                            if (Z = 2140081935 == (0 | i)) break n;
                            if ((X = 2141891242 == (0 | i)) | e != e) break a;
                            if (Z) break n;
                            if (X) break a;
                            if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break t;
                          }
                          a = y(y(hr * a) * y(.009999999776482582));
                        }
                        if (a != a) break a;
                        a = y(0);
                        t: if (!t) {
                          if (2140081935 == (0 | i)) break n;
                          t = 4276;
                          f: {
                            if (2141891242 != (0 | i)) {
                              if (e == e) break f;
                              t = 4268;
                            }
                            switch (a = m[t >> 2], G = y(NaN), c[t + 4 >> 2] - 1 | 0) {
                              case 0:
                                break n;
                              case 1:
                                break t;
                              default:
                                break i;
                            }
                          }
                          if (b(2, 536870912 + (-1073741825 & i) | 0), a = d(), !(1073741824 & i)) break n;
                        }
                        G = y(y(hr * a) * y(.009999999776482582));
                        break i;
                      }
                      G = a;
                    }
                    if ((e = y(y(y(G - R) - Gr) - y(F - B))) != e) break a;
                    T = Re(e, y(0));
                  }
                  a: {
                    if (!(X = g >>> 0 <= W >>> 0)) {
                      for (z = c[r + 556 >> 2], j = (i = c[r + 560 >> 2] - z >> 2) >>> 0 < W >>> 0 ? W : i, Z = 0, i = W;;) {
                        if ((0 | i) == (0 | j)) break e;
                        if (t = c[z + (i << 2) >> 2], 131072 != (196608 & c[t + 24 >> 2]) && (ve(tr = w + 24 | 0, t, O), Cr = c[w + 28 >> 2], de(tr, t, O), Z = ((3 == (0 | Cr)) + Z | 0) + (3 == c[w + 28 >> 2]) | 0), (0 | g) == (0 | (i = i + 1 | 0))) break;
                      }
                      if (C = y(0), a = _, Z) break a;
                    }
                    C = y(0), Z = 0, a = _;
                    i: switch ((c[r + 24 >> 2] >>> 4 & 7) - 1 | 0) {
                      case 0:
                        C = y(T * y(.5));
                        break a;
                      case 1:
                        C = T;
                        break a;
                      case 2:
                        if (Y >>> 0 < 2) break a;
                        a = y(_ + y((fe = y(0), oe = Re(T, y(0)), ((te = T != T) ? fe : oe) / y(Y - 1 >>> 0))));
                        break a;
                      case 4:
                        C = y(T / y(Y + 1 >>> 0)), a = y(_ + C);
                        break a;
                      case 3:
                        break i;
                      default:
                        break a;
                    }
                    C = y(y(T * y(.5)) / y(Y >>> 0)), a = y(y(C + C) + _);
                  }
                  if (e = y(R + C), B = y(0), Y = Jr(r), X) a = y(0);else {
                    for (z = g - 1 | 0, Zr = y(T / y(0 | Z)), R = y(0), G = y(0), i = W;;) {
                      if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= i >>> 0) break e;
                      Ar(w + 24 | 0, Z = (t = c[t + (i << 2) >> 2]) + 228 | 0, 320), a = y(a - ((0 | i) == (0 | z) ? _ : y(0)));
                      a: if (!(4194304 & (j = c[t + 24 >> 2]))) {
                        i: {
                          if (131072 == (196608 & j)) {
                            if (!se(t, O)) break i;
                            if (!s) break a;
                            T = Lr(t, O, F), x = zr(r, O), Sr = Mr(t, O, V), m[Z + (c[$ >> 2] << 2) >> 2] = Sr + y(T + x);
                            break a;
                          }
                          if (ve(w + 360 | 0, t, O), e = y(e + (3 == c[w + 364 >> 2] ? Zr : y(-0))), s && (j = Z, Z = c[$ >> 2] << 2, m[j + Z >> 2] = e + m[Z + (w + 24 | 0) >> 2]), de(w + 360 | 0, t, O), e = y(e + (3 == c[w + 364 >> 2] ? Zr : y(-0))), !ee) {
                            e = y(e + y(y(a + y(Mr(t, O, V) + Ur(t, O, V))) + m[w + 104 >> 2])), B = M;
                            break a;
                          }
                          if (e = y(e + y(a + y(m[(Z = t + 516 | 0) + (c[dr >> 2] << 2) >> 2] + y(Mr(t, O, V) + Ur(t, O, V))))), Y) {
                            if (T = Wr(t), x = Mr(t, 0, V), T = y(T + x), x = y(y(m[t + 520 >> 2] + y(Mr(t, 0, V) + Ur(t, 0, V))) - T), R = (t = R != R) | T != T ? t ? T : R : Re(R, T), !((t = G != G) | x != x)) {
                              G = Re(G, x);
                              break a;
                            }
                            G = t ? x : G;
                            break a;
                          }
                          if (!((T = y(m[Z + (c[Q >> 2] << 2) >> 2] + y(Mr(t, N, V) + Ur(t, N, V)))) != T | (t = B != B))) {
                            B = Re(B, T);
                            break a;
                          }
                          B = t ? T : B;
                          break a;
                        }
                        s && (t = c[$ >> 2] << 2, T = m[t + (w + 24 | 0) >> 2], te = t + Z | 0, fe = y(C + y(T + zr(r, O))), m[te >> 2] = fe);
                      }
                      if ((0 | g) == (0 | (i = i + 1 | 0))) break;
                    }
                    a = y(G + R);
                  }
                  if (R = Y ? a : B, T = M, $r || (a = (i = (a = ur(r, N, y(K + R), Er)) != a) | (G = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != G ? i ? G : a : Re(a, G), T = y(a - K)), a = (i = (a = ur(r, N, y(K + (re ? M : R)), Er)) != a) | (G = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != G ? i ? G : a : Re(a, G), G = y(a - K), !(X | !s)) for (;;) {
                    if (i = c[r + 556 >> 2], c[r + 560 >> 2] - i >> 2 >>> 0 <= W >>> 0) break e;
                    i = c[i + (W << 2) >> 2];
                    a: if (!(4194304 & (t = c[i + 24 >> 2]))) if (131072 != (196608 & t)) {
                      (t = t >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7);
                      i: {
                        n: {
                          if (5 != (0 | t)) {
                            if (4 == (0 | t) && (ve(w + 24 | 0, i, N), t = 4, 3 != c[w + 28 >> 2])) {
                              if (de(w + 360 | 0, i, N), Z = c[Q >> 2], 3 == c[w + 364 >> 2]) break n;
                              R = m[572 + (Z = i + (Z << 3) | 0) >> 2];
                              t: {
                                switch (0 | (t = c[Z + 576 >> 2])) {
                                  case 0:
                                  case 3:
                                    break t;
                                }
                                if (!(1 != (0 | t) | (B = m[Z + 572 >> 2]) != B)) {
                                  if (a = P, R < y(0)) break t;
                                  break i;
                                }
                                if (a = P, rr & !(R < y(0)) | 2 != (0 | t) | B != B) break i;
                              }
                              R = m[516 + (i + (c[dr >> 2] << 2) | 0) >> 2], a = (a = m[i + 224 >> 2]) == a ? y(y(Mr(i, N, V) + Ur(i, N, V)) + y(q ? R * a : R / a)) : G, m[w + 360 >> 2] = a, te = w, fe = y(R + y(Mr(i, O, V) + Ur(i, O, V))), m[te + 24 >> 2] = fe, c[w + 356 >> 2] = 1, c[w + 352 >> 2] = 1, Vr(i, O, F, V, w + 356 | 0, w + 24 | 0), Vr(i, N, M, V, w + 352 | 0, w + 360 | 0), R = m[w + 360 >> 2], B = m[w + 24 >> 2], a = (t = O >>> 0 > 1) ? R : B, or(i, R = t ? B : R, a, J, !((t = 0 != (0 | nr) & 512 != (896 & c[r + 24 >> 2])) & q | R != R), (q | !t) & a == a, V, U, 1, 2, A, l, h, p), a = P;
                              break i;
                            }
                          } else t = 8 & c[r + 24 >> 2] ? 5 : 1;
                          Z = c[Q >> 2];
                        }
                        if (a = m[516 + ((Z << 2) + i | 0) >> 2], R = Mr(i, N, V), B = Ur(i, N, V), ve(w + 24 | 0, i, N), R = y(T - y(a + y(R + B))), 3 != c[w + 28 >> 2] || (de(w + 360 | 0, i, N), 3 != c[w + 364 >> 2])) {
                          if (de(w + 24 | 0, i, N), a = P, 3 != c[w + 28 >> 2]) if (ve(w + 24 | 0, i, N), 3 != c[w + 28 >> 2]) {
                            switch (t - 1 | 0) {
                              case 1:
                                a = y(P + y(R * y(.5)));
                                break i;
                              case 0:
                                break i;
                            }
                            a = y(P + R);
                          } else a = y(P + (fe = y(0), oe = Re(R, y(0)), (te = R != R) ? fe : oe));
                        } else a = y(R * y(.5)), a = y(P + (fe = y(0), oe = Re(a, y(0)), (te = a != a) ? fe : oe));
                      }
                      i = i + (c[H >> 2] << 2) | 0, m[i + 228 >> 2] = a + y(br + m[i + 228 >> 2]);
                    } else {
                      if (t = c[H >> 2], se(i, N) && (a = y(y(Lr(i, N, M) + zr(r, N)) + Mr(i, N, V)), m[228 + (i + (t << 2) | 0) >> 2] = a, a == a)) break a;
                      te = i + (t << 2) | 0, fe = y(zr(r, N) + Mr(i, N, V)), m[te + 228 >> 2] = fe;
                    }
                    if ((0 | (W = W + 1 | 0)) == (0 | g)) break;
                  }
                  if (a = y((S ? jr : y(0)) + G), Nr = (i = Nr != Nr) | (e = y(Gr + e)) != e ? i ? e : Nr : Re(Nr, e), br = y(br + a), i = S + 1 | 0, W = g, !(g >>> 0 < er >>> 0)) break;
                }
                a: if (s && (nr || Jr(r))) {
                  R = y(0);
                  i: {
                    n: if (M == M) {
                      e = y(M - br);
                      t: switch ((c[r + 24 >> 2] >>> 7 & 7) - 2 | 0) {
                        case 0:
                          P = y(P + y(e * y(.5)));
                          break n;
                        case 2:
                          if (!(M > br)) break n;
                          R = y(e / y(i >>> 0));
                          break n;
                        case 5:
                          if (M > br) {
                            if (P = y(P + y(e / y(i << 1 >>> 0))), i >>> 0 < 2) break n;
                            R = y(e / y(i >>> 0));
                            break i;
                          }
                          P = y(P + y(e * y(.5)));
                          break n;
                        case 4:
                          if (!(M > br) | i >>> 0 < 2) break n;
                          R = y(e / y(S >>> 0));
                          break i;
                        case 1:
                          break t;
                        default:
                          break n;
                      }
                      P = y(P + e);
                    }
                    if (!i) break a;
                  }
                  for (Z = 0, i = 0, t = 0;;) {
                    if (B = y(0), a = y(0), e = y(0), G = y(0), g = i, i >>> 0 < er >>> 0) {
                      i: {
                        for (;;) {
                          if (t = c[r + 556 >> 2], c[r + 560 >> 2] - t >> 2 >>> 0 <= g >>> 0) break e;
                          if (W = c[t + (g << 2) >> 2], !(4194304 & (X = c[W + 24 >> 2]) | 131072 == (196608 & X))) {
                            if (t = g, c[W + 548 >> 2] != (0 | Z)) break i;
                            (e = m[516 + (W + (c[Q >> 2] << 2) | 0) >> 2]) >= y(0) && (a = (t = a != a) | (e = y(e + y(Mr(W, N, V) + Ur(W, N, V)))) != e ? t ? e : a : Re(a, e)), (t = X >>> 13 & 7) || (t = c[r + 24 >> 2] >>> 10 & 7), !(8 & v[r + 24 | 0]) | 5 != (0 | t) || (e = Wr(W), T = Mr(W, 0, V), e = y(e + T), T = y(y(m[W + 520 >> 2] + y(Mr(W, 0, V) + Ur(W, 0, V))) - e), t = a != a, G = (W = G != G) | e != e ? W ? e : G : Re(G, e), B = (W = B != B) | T != T ? W ? T : B : Re(B, T), a = t | (e = y(G + B)) != e ? t ? e : a : Re(a, e));
                          }
                          if ((0 | er) == (0 | (g = g + 1 | 0))) break;
                        }
                        t = er;
                      }
                      e = a;
                    }
                    if (T = y(P + (Z ? jr : y(0))), a = y(R + e), P = y(T + a), i >>> 0 < t >>> 0) for (_ = y(T + G);;) {
                      if (g = c[r + 556 >> 2], c[r + 560 >> 2] - g >> 2 >>> 0 <= i >>> 0) break e;
                      W = c[g + (i << 2) >> 2];
                      i: if (!(4194304 & (g = c[W + 24 >> 2]) | 131072 == (196608 & g))) {
                        (g = g >>> 13 & 7) || (g = c[r + 24 >> 2] >>> 10 & 7);
                        n: {
                          t: switch (g - 1 | 0) {
                            case 4:
                              if (8 & v[r + 24 | 0]) break n;
                            case 0:
                              e = Mr(W, N, V), m[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e;
                              break i;
                            case 2:
                              e = Ur(W, N, V), m[(g = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = y(P - e) - m[288 + (g + (c[Q >> 2] << 2) | 0) >> 2];
                              break i;
                            case 1:
                              m[(g = W + 228 | 0) + (c[H >> 2] << 2) >> 2] = T + y(y(a - m[288 + (g + (c[Q >> 2] << 2) | 0) >> 2]) * y(.5));
                              break i;
                            case 3:
                              break t;
                            default:
                              break i;
                          }
                          e = Mr(W, N, V), m[228 + (W + (c[H >> 2] << 2) | 0) >> 2] = T + e, X = W + (c[Q >> 2] << 3) | 0, e = m[(g = X) + 572 >> 2];
                          t: {
                            switch (0 | (g = c[g + 576 >> 2])) {
                              case 0:
                              case 3:
                                break t;
                            }
                            if (!(1 != (0 | g) | (G = m[X + 572 >> 2]) != G)) {
                              if (e < y(0)) break t;
                              break i;
                            }
                            if (rr & !(e < y(0)) | 2 != (0 | g) | G != G) break i;
                          }
                          O >>> 0 >= 2 ? (B = a, e = m[W + 516 >> 2], G = y(e + y(Mr(W, O, V) + Ur(W, O, V)))) : (B = y(m[W + 520 >> 2] + y(Mr(W, N, V) + Ur(W, N, V))), e = m[W + 516 >> 2], G = a);
                          t: {
                            f: {
                              if (!(G != G | e != e)) {
                                if (y(E(y(G - e))) < y(9999999747378752e-20)) break f;
                                break t;
                              }
                              if (G == G | e == e) break t;
                            }
                            if (!((g = (e = m[W + 520 >> 2]) != e) | B != B)) {
                              if (!(y(E(y(B - e))) < y(9999999747378752e-20))) break t;
                              break i;
                            }
                            if (B != B && g) break i;
                          }
                          or(W, G, B, J, 1, 1, V, U, 1, 3, A, l, h, p);
                          break i;
                        }
                        te = W, fe = y(y(_ - Wr(W)) + Lr(W, 0, M)), m[te + 232 >> 2] = fe;
                      }
                      if ((0 | t) == (0 | (i = i + 1 | 0))) break;
                    }
                    if (g = (0 | Z) != (0 | S), Z = Z + 1 | 0, i = t, !g) break;
                  }
                }
                Z = r + 516 | 0, e = (i = (e = ur(r, 2, Yr, o)) != e) | (a = y(y(Br(r, 2, o) + zr(r, 2)) + y(Tr(r, 2, o) + Qr(r, 2)))) != a ? i ? a : e : Re(e, a), m[Z >> 2] = e, e = (i = (e = ur(r, 0, Hr, u)) != e) | (a = y(y(Br(r, 0, o) + zr(r, 0)) + y(Tr(r, 0, o) + Qr(r, 0)))) != a ? i ? a : e : Re(e, a), m[r + 520 >> 2] = e;
                a: {
                  i: if (cr && 2 == (0 | (i = c[r + 24 >> 2] >>> 20 & 3)) | 2 != (0 | cr)) {
                    if (2 != (0 | cr) | 2 != (0 | i)) break a;
                    e = (i = (e = (i = (a = y(ir + F)) != a) | (e = ur(r, O, Nr, hr)) != e ? i ? e : a : ge(a, e)) != e) | ir != ir ? i ? ir : e : Re(e, ir);
                  } else {
                    if (!((i = (e = ur(r, O, Nr, hr)) != e) | (a = y(y(Br(r, O, o) + zr(r, O)) + y(Tr(r, O, o) + Qr(r, O)))) != a)) {
                      e = Re(e, a);
                      break i;
                    }
                    e = i ? a : e;
                  }
                  m[Z + (c[dr >> 2] << 2) >> 2] = e;
                }
                a: {
                  i: if (L && (t = 2 != (0 | L)) | 2 == (0 | (i = c[r + 24 >> 2] >>> 20 & 3))) {
                    if (t | 2 != (0 | i)) break a;
                    e = (i = (e = (i = (a = y(K + M)) != a) | (e = ur(r, N, y(K + br), Er)) != e ? i ? e : a : ge(a, e)) != e) | K != K ? i ? K : e : Re(e, K);
                  } else {
                    if (!((i = (e = ur(r, N, y(K + br), Er)) != e) | (a = y(y(Br(r, N, o) + zr(r, N)) + y(Tr(r, N, o) + Qr(r, N)))) != a)) {
                      e = Re(e, a);
                      break i;
                    }
                    e = i ? a : e;
                  }
                  m[Z + (c[Q >> 2] << 2) >> 2] = e;
                }
                if (s) {
                  if (i = c[r + 560 >> 2], W = c[r + 556 >> 2], 524288 == (786432 & c[r + 24 >> 2])) {
                    for (t = er >>> 0 <= 1 ? 1 : er, s = i - W >> 2, i = 0; g = 0, g = i >>> 0 < s >>> 0 ? c[(i << 2) + W >> 2] : g, 131072 != (196608 & c[g + 24 >> 2]) && (X = (g = g + 228 | 0) + (c[H >> 2] << 2) | 0, S = c[Q >> 2] << 2, m[X >> 2] = y(m[S + Z >> 2] - m[X >> 2]) - m[288 + (g + S | 0) >> 2]), (0 | t) != (0 | (i = i + 1 | 0)););
                    W = c[r + 556 >> 2], i = c[r + 560 >> 2];
                  }
                  if ((0 | i) != (0 | W)) for (S = 0 != (0 | (O >>> 0 > 1 ? cr : n));;) {
                    s = c[W >> 2];
                    a: if (131072 == (4390912 & c[s + 24 >> 2])) {
                      a = V, F = U, v[c[r + 568 >> 2] + 21 | 0] && (F = m[r + 520 >> 2], a = m[r + 516 >> 2]), n = c[r + 24 >> 2] >>> 2 & 3;
                      i: {
                        n: {
                          if (2 == (0 | J)) {
                            t = 0, g = 3;
                            t: switch (n - 2 | 0) {
                              case 0:
                                break i;
                              case 1:
                                break t;
                              default:
                                break n;
                            }
                            g = 2;
                            break i;
                          }
                          if (t = 0, !(n >>> 0 <= 1)) {
                            g = n;
                            break i;
                          }
                        }
                        g = n, t = lr;
                      }
                      u = y(Mr(s, 2, a) + Ur(s, 2, a)), R = Mr(s, 0, a), B = Ur(s, 0, a), e = m[s + 572 >> 2];
                      i: {
                        n: {
                          switch (0 | (n = c[s + 576 >> 2])) {
                            case 0:
                            case 3:
                              break n;
                          }
                          t: {
                            if (!(1 != (0 | n) | (o = m[s + 572 >> 2]) != o)) {
                              if (G = e, !(e < y(0))) break t;
                              break n;
                            }
                            f: {
                              if (2 != (0 | n) | o != o) {
                                G = y(NaN);
                                o: switch (n - 1 | 0) {
                                  case 1:
                                    break f;
                                  case 0:
                                    break o;
                                  default:
                                    break t;
                                }
                                G = e;
                                break t;
                              }
                              if (a != a | e < y(0)) break n;
                            }
                            G = y(y(a * e) * y(.009999999776482582));
                          }
                          G = y(u + G);
                          break i;
                        }
                        G = y(NaN), se(s, 2) && be(s, 2) && (G = (n = (e = ur(s, 2, y(y(m[r + 516 >> 2] - y(zr(r, 2) + Qr(r, 2))) - y(Lr(s, 2, a) + Or(s, 2, a))), a)) != e) | (o = y(y(Br(s, 2, a) + zr(s, 2)) + y(Tr(s, 2, a) + Qr(s, 2)))) != o ? n ? o : e : Re(e, o));
                      }
                      B = y(R + B);
                      i: {
                        n: {
                          t: {
                            f: {
                              o: {
                                c: {
                                  u: {
                                    X = G != G, o = m[s + 580 >> 2];
                                    b: {
                                      s: {
                                        switch (0 | (n = c[s + 584 >> 2])) {
                                          case 0:
                                          case 3:
                                            break s;
                                        }
                                        A: {
                                          if (!(1 != (0 | n) | (e = m[s + 580 >> 2]) != e)) {
                                            if (!((e = o) < y(0))) break A;
                                            break s;
                                          }
                                          k: {
                                            if (2 != (0 | n) | e != e) {
                                              e = y(NaN);
                                              l: switch (n - 1 | 0) {
                                                case 1:
                                                  break k;
                                                case 0:
                                                  break l;
                                                default:
                                                  break A;
                                              }
                                              e = o;
                                              break A;
                                            }
                                            if (F != F | o < y(0)) break s;
                                          }
                                          e = y(y(F * o) * y(.009999999776482582));
                                        }
                                        e = y(B + e);
                                        break b;
                                      }
                                      if (!se(s, 0) || !be(s, 0)) {
                                        if (e = y(NaN), G == G) break u;
                                        break t;
                                      }
                                      e = (n = (e = ur(s, 0, y(y(m[r + 520 >> 2] - y(zr(r, 0) + Qr(r, 0))) - y(Lr(s, 0, F) + Or(s, 0, F))), F)) != e) | (o = y(y(Br(s, 0, a) + zr(s, 0)) + y(Tr(s, 0, a) + Qr(s, 0)))) != o ? n ? o : e : Re(e, o);
                                    }
                                    if ((0 | X) == (e != e | 0)) break o;
                                    if ((R = m[s + 224 >> 2]) != R) break o;
                                    if (G != G) {
                                      G = y(y(y(e - B) * R) + u);
                                      break o;
                                    }
                                    if (e == e) break o;
                                    break c;
                                  }
                                  if ((R = m[s + 224 >> 2]) != R) break f;
                                }
                                e = y(B + y(y(G - u) / R));
                              }
                              if (G != G) break t;
                              if (e == e) break i;
                            }
                            n = 0;
                            break n;
                          }
                          n = 1;
                        }
                        X = a > y(0), Y = n & S & g >>> 0 < 2, n ^= 1, or(s, o = Y && X ? a : G, e, J, Y && X ? 2 : n, e == e, o, e, 0, 6, A, l, h, p), G = y(m[s + 516 >> 2] + Ue(s, 2, a)), e = y(m[s + 520 >> 2] + Ue(s, 0, a));
                      }
                      or(s, G, e, J, 1, 1, G, e, 1, 1, A, l, h, p), u = (n = g >>> 0 < 2) ? a : F, X = c[r + 568 >> 2], o = v[X + 22 | 0] ? u : a;
                      i: {
                        if (!be(s, g) || se(s, g)) {
                          if (se(s, g) | 16 != (112 & c[r + 24 >> 2])) {
                            if (se(s, g) | 32 != (112 & c[r + 24 >> 2])) {
                              if (!v[X + 21 | 0]) break i;
                              if (!se(s, g)) break i;
                              e = m[Z + (c[4252 + (g << 2) >> 2] << 2) >> 2], e = y(y(Lr(s, g, e) + zr(r, g)) + Mr(s, g, e));
                            } else n = c[4252 + (g << 2) >> 2] << 2, e = y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]);
                          } else n = c[4252 + (g << 2) >> 2] << 2, e = y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) * y(.5));
                        } else Y = c[4252 + (g << 2) >> 2] << 2, e = y(y(y(y(m[Y + Z >> 2] - m[516 + (s + Y | 0) >> 2]) - Qr(r, g)) - Ur(s, g, o)) - Or(s, g, n ? F : a));
                        m[228 + (s + (c[4220 + (g << 2) >> 2] << 2) | 0) >> 2] = e;
                      }
                      i: if (!be(s, t) || se(s, t)) {
                        if (se(s, t) || ((n = c[s + 24 >> 2] >>> 13 & 7) || (n = c[r + 24 >> 2] >>> 10 & 7), 2 != (0 | n))) {
                          n: if (!se(s, t)) {
                            g = c[s + 24 >> 2] >>> 13 & 7, n = c[r + 24 >> 2];
                            t: {
                              if (!(5 != (0 | (g = g || n >>> 10 & 7)) | 8 & n)) {
                                if (524288 == (786432 & n)) break t;
                                break n;
                              }
                              if ((524288 == (786432 & n) | 0) == (3 == (0 | g) | 0)) break n;
                            }
                            n = c[4252 + (t << 2) >> 2] << 2, e = y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]);
                            break i;
                          }
                          if (!v[X + 21 | 0]) break a;
                          if (!se(s, t)) break a;
                          e = m[Z + (c[4252 + (t << 2) >> 2] << 2) >> 2], e = y(y(Lr(s, t, e) + zr(r, t)) + Mr(s, t, e));
                        } else n = c[4252 + (t << 2) >> 2] << 2, e = y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) * y(.5));
                      } else n = c[4252 + (t << 2) >> 2] << 2, e = y(y(y(y(m[n + Z >> 2] - m[516 + (n + s | 0) >> 2]) - Qr(r, t)) - Ur(s, t, o)) - Or(s, t, u));
                      m[228 + (s + (c[4220 + (t << 2) >> 2] << 2) | 0) >> 2] = e;
                    }
                    if ((0 | (W = W + 4 | 0)) == (0 | i)) break;
                  }
                  if (1 & (N | O)) for (t = 1 & N, s = 1 & O, A = er >>> 0 <= 1 ? 1 : er, l = 4236 + (N << 2) | 0, h = 4236 + (O << 2) | 0, p = c[r + 556 >> 2], N = c[r + 560 >> 2] - p >> 2, i = 0;;) {
                    if ((0 | i) == (0 | N)) break e;
                    if (r = c[p + (i << 2) >> 2], 64 & v[r + 26 | 0] || (s && (n = r + 228 | 0, g = c[dr >> 2] << 2, m[n + (c[h >> 2] << 2) >> 2] = y(m[g + Z >> 2] - m[288 + (n + g | 0) >> 2]) - m[n + (c[$ >> 2] << 2) >> 2]), t && (r = r + 228 | 0, n = c[Q >> 2] << 2, m[r + (c[l >> 2] << 2) >> 2] = y(m[n + Z >> 2] - m[288 + (r + n | 0) >> 2]) - m[r + (c[H >> 2] << 2) >> 2])), (0 | A) == (0 | (i = i + 1 | 0))) break;
                  }
                }
                if (!D) break r;
                gr(D);
                break r;
              }
              I(), k();
            }
            ar = w + 384 | 0;
          }
          function tr() {
            var r = 0,
              e = 0;
            T(6952, 6953, 6954, 0, 4284, 17, 4287, 0, 4287, 0, 2528, 4289, 18), r = ye(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6952, 2873, 6, 4304, 4328, 19, 0 | r, 1), T(6956, 6957, 6958, 6952, 4284, 20, 4284, 21, 4284, 22, 2e3, 4289, 23), r = ye(4), c[r >> 2] = 24, Z(6956, 2358, 2, 4336, 4344, 25, 0 | r, 0), V(6952, 1397, 2, 4348, 4356, 26, 27), V(6952, 2978, 3, 4436, 4448, 28, 29), T(6976, 6977, 6978, 0, 4284, 30, 4287, 0, 4287, 0, 2544, 4289, 31), r = ye(8), c[r >> 2] = 8, c[r + 4 >> 2] = 1, Z(6976, 3244, 2, 4456, 4344, 32, 0 | r, 1), T(6979, 6980, 6981, 6976, 4284, 33, 4284, 34, 4284, 35, 2023, 4289, 36), r = ye(4), c[r >> 2] = 37, Z(6979, 2358, 2, 4464, 4344, 38, 0 | r, 0), V(6976, 1397, 2, 4472, 4356, 39, 40), V(6976, 2978, 3, 4436, 4448, 28, 41), T(6982, 6983, 6984, 0, 4284, 42, 4287, 0, 4287, 0, 2812, 4289, 43), Y(6982, 1, 4520, 4284, 44, 45), V(6982, 2866, 1, 4520, 4284, 44, 45), V(6982, 1128, 2, 4524, 4344, 46, 47), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 48, Z(6982, 3185, 4, 4544, 4560, 49, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 50, Z(6982, 1980, 3, 4568, 4580, 51, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 52, Z(6982, 1951, 3, 4588, 4600, 53, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 54, Z(6982, 1799, 3, 4588, 4600, 53, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 55, Z(6982, 3215, 3, 4608, 4448, 56, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 57, Z(6982, 1925, 2, 4620, 4356, 58, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 59, Z(6982, 1784, 2, 4620, 4356, 58, 0 | r, 0), F(6985, 1270, 4628, 60, 4289, 61), Be(1731, 0), Be(1611, 8), Be(2144, 16), Be(2454, 24), Be(2560, 32), Be(1617, 40), _(6985), F(6955, 2849, 4628, 62, 4289, 63), Ve(2560, 0), Ve(1617, 8), _(6955), F(6986, 2860, 4628, 64, 4289, 65), r = ye(4), c[r >> 2] = 8, e = ye(4), c[e >> 2] = 8, O(6986, 2854, 7018, 4630, 66, 0 | r, 7018, 4634, 67, 0 | e), r = ye(4), c[r >> 2] = 0, e = ye(4), c[e >> 2] = 0, O(6986, 1606, 7011, 4356, 68, 0 | r, 7011, 4600, 69, 0 | e), _(6986), T(6987, 6988, 6989, 0, 4284, 70, 4287, 0, 4287, 0, 2973, 4289, 71), Y(6987, 1, 4640, 4284, 72, 73), V(6987, 1592, 1, 4640, 4284, 72, 73), V(6987, 2802, 2, 4644, 4356, 74, 75), V(6987, 1128, 2, 4652, 4344, 76, 77), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 78, Z(6987, 1752, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 80, Z(6987, 2956, 3, 4660, 4600, 81, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 82, Z(6987, 2881, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 84, Z(6987, 2334, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 86, Z(6987, 1484, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 87, Z(6987, 1355, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 88, Z(6987, 1817, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 89, Z(6987, 2823, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 90, Z(6987, 2378, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 91, Z(6987, 2163, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 92, Z(6987, 1319, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 93, Z(6987, 2412, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 94, Z(6987, 1503, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 95, Z(6987, 2235, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 96, Z(6987, 1219, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 97, Z(6987, 1136, 3, 4672, 4600, 83, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 98, Z(6987, 1158, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 100, Z(6987, 1845, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 101, Z(6987, 1464, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 102, Z(6987, 2218, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 103, Z(6987, 1195, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 104, Z(6987, 2500, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 105, Z(6987, 2590, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 106, Z(6987, 1539, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 107, Z(6987, 2249, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 108, Z(6987, 1650, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 109, Z(6987, 1427, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 110, Z(6987, 2204, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 111, Z(6987, 2608, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 112, Z(6987, 1555, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 113, Z(6987, 1670, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 114, Z(6987, 1444, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 115, Z(6987, 2566, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 116, Z(6987, 1520, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 117, Z(6987, 1624, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 118, Z(6987, 1407, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 119, Z(6987, 2304, 3, 4712, 4634, 99, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 120, Z(6987, 2092, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 121, Z(6987, 2718, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 122, Z(6987, 1574, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 123, Z(6987, 2187, 4, 4688, 4704, 85, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 124, Z(6987, 2897, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 126, Z(6987, 2346, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 128, Z(6987, 1371, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 129, Z(6987, 1831, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 130, Z(6987, 2836, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 131, Z(6987, 2395, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 132, Z(6987, 2175, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 133, Z(6987, 1337, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 134, Z(6987, 2422, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 135, Z(6987, 1858, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 137, Z(6987, 1207, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 139, Z(6987, 2514, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 140, Z(6987, 2599, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 141, Z(6987, 1660, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 142, Z(6987, 2620, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 143, Z(6987, 1683, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 144, Z(6987, 2578, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 145, Z(6987, 1637, 2, 4744, 4356, 136, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 146, Z(6987, 2319, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 147, Z(6987, 2102, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 149, Z(6987, 1231, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 150, Z(6987, 1147, 2, 4724, 4356, 125, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 151, Z(6987, 2729, 3, 4732, 4448, 127, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 152, Z(6987, 2194, 3, 4780, 4792, 153, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 154, Z(6987, 2985, 4, 4800, 4560, 155, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 156, Z(6987, 3006, 3, 4816, 4600, 157, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 158, Z(6987, 1292, 2, 4828, 4356, 159, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 160, Z(6987, 1387, 2, 4836, 4356, 161, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 162, Z(6987, 2997, 3, 4844, 4448, 163, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 164, Z(6987, 2913, 2, 4856, 4356, 165, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 166, Z(6987, 2933, 3, 4864, 4600, 167, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 168, Z(6987, 3308, 3, 4876, 4600, 169, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 170, Z(6987, 3306, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 171, Z(6987, 3325, 3, 4888, 4600, 172, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 173, Z(6987, 3323, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 174, Z(6987, 1118, 2, 4652, 4344, 79, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 175, Z(6987, 1110, 2, 4900, 4356, 176, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 177, Z(6987, 1243, 5, 4912, 4932, 178, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 179, Z(6987, 1736, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 180, Z(6987, 1714, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 181, Z(6987, 2148, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 182, Z(6987, 2461, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 183, Z(6987, 2632, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 184, Z(6987, 1696, 2, 4752, 4630, 138, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 185, Z(6987, 1259, 2, 4940, 4356, 186, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 187, Z(6987, 2432, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 188, Z(6987, 2112, 3, 4760, 4772, 148, 0 | r, 0), r = ye(8), c[r + 4 >> 2] = 0, c[r >> 2] = 189, Z(6987, 2740, 3, 4760, 4772, 148, 0 | r, 0);
          }
          function fr(r, e, a, i, n, t, u) {
            var b,
              s,
              A,
              k = 0,
              l = 0,
              d = 0,
              h = 0,
              p = 0,
              m = 0,
              y = 0,
              E = 0,
              G = 0,
              R = 0,
              g = 0,
              Z = 0,
              W = 0,
              V = 0,
              B = 0,
              T = 0,
              I = 0;
            ar = b = ar - 80 | 0, c[b + 76 >> 2] = e, A = b + 55 | 0, s = b + 56 | 0;
            r: {
              e: {
                a: {
                  i: {
                    n: for (;;) {
                      if (d = e, (2147483647 ^ E) < (0 | k)) break i;
                      E = k + E | 0;
                      t: {
                        f: {
                          o: {
                            if (l = v[0 | (k = d)]) for (;;) {
                              c: {
                                u: if (e = 255 & l) {
                                  if (37 != (0 | e)) break c;
                                  for (l = k;;) {
                                    if (37 != v[l + 1 | 0]) {
                                      e = l;
                                      break u;
                                    }
                                    if (k = k + 1 | 0, h = v[l + 2 | 0], l = e = l + 2 | 0, 37 != (0 | h)) break;
                                  }
                                } else e = k;
                                if ((0 | (k = k - d | 0)) > (0 | (B = 2147483647 ^ E))) break i;
                                if (r && Pr(r, d, k), k) continue n;
                                c[b + 76 >> 2] = e, k = e + 1 | 0, R = -1, !xe(l = f[e + 1 | 0]) | 36 != v[e + 2 | 0] || (R = l - 48 | 0, Z = 1, k = e + 3 | 0), c[b + 76 >> 2] = k, y = 0;
                                u: if ((e = (l = f[0 | k]) - 32 | 0) >>> 0 > 31) h = k;else if (h = k, 75913 & (e = 1 << e)) for (;;) {
                                  if (h = k + 1 | 0, c[b + 76 >> 2] = h, y |= e, (e = (l = f[k + 1 | 0]) - 32 | 0) >>> 0 >= 32) break u;
                                  if (k = h, !(75913 & (e = 1 << e))) break;
                                }
                                u: if (42 != (0 | l)) {
                                  if ((0 | (G = he(b + 76 | 0))) < 0) break i;
                                  l = c[b + 76 >> 2];
                                } else {
                                  if (!xe(e = f[h + 1 | 0]) | 36 != v[h + 2 | 0]) {
                                    if (Z) break o;
                                    if (l = h + 1 | 0, !r) {
                                      c[b + 76 >> 2] = l, Z = 0, G = 0;
                                      break u;
                                    }
                                    e = c[a >> 2], c[a >> 2] = e + 4, Z = 0, G = c[e >> 2];
                                  } else c[((e << 2) + n | 0) - 192 >> 2] = 10, l = h + 3 | 0, Z = 1, G = c[((f[h + 1 | 0] << 3) + i | 0) - 384 >> 2];
                                  if (c[b + 76 >> 2] = l, (0 | G) >= 0) break u;
                                  G = 0 - G | 0, y |= 8192;
                                }
                                if (k = 0, m = -1, 46 == v[0 | l]) {
                                  if (42 != v[l + 1 | 0]) c[b + 76 >> 2] = l + 1, m = he(b + 76 | 0), e = c[b + 76 >> 2], g = 1;else {
                                    if (!xe(e = f[l + 2 | 0]) | 36 != v[l + 3 | 0]) {
                                      if (Z) break o;
                                      e = l + 2 | 0, m = 0, r && (l = c[a >> 2], c[a >> 2] = l + 4, m = c[l >> 2]);
                                    } else c[((e << 2) + n | 0) - 192 >> 2] = 10, e = l + 4 | 0, m = c[((f[l + 2 | 0] << 3) + i | 0) - 384 >> 2];
                                    c[b + 76 >> 2] = e, g = (-1 ^ m) >>> 31 | 0;
                                  }
                                } else e = l, g = 0;
                                for (;;) {
                                  if (p = k, h = 28, W = e, (k = f[0 | e]) - 123 >>> 0 < 4294967238) break a;
                                  if (e = W + 1 | 0, !((k = v[4895 + (k + w(p, 58) | 0) | 0]) - 1 >>> 0 < 8)) break;
                                }
                                c[b + 76 >> 2] = e;
                                u: {
                                  b: {
                                    if (27 != (0 | k)) {
                                      if (!k) break a;
                                      if ((0 | R) >= 0) {
                                        c[(R << 2) + n >> 2] = k, l = c[4 + (k = (R << 3) + i | 0) >> 2], c[b + 64 >> 2] = c[k >> 2], c[b + 68 >> 2] = l;
                                        break b;
                                      }
                                      if (!r) break t;
                                      yr(b - -64 | 0, k, a, u);
                                      break u;
                                    }
                                    if ((0 | R) >= 0) break a;
                                  }
                                  if (k = 0, !r) continue n;
                                }
                                l = -65537 & y, y = 8192 & y ? l : y, R = 0, V = 1166, h = s;
                                u: {
                                  b: {
                                    s: {
                                      A: {
                                        k: {
                                          l: {
                                            d: {
                                              v: {
                                                h: {
                                                  p: {
                                                    m: {
                                                      N: {
                                                        w: {
                                                          y: {
                                                            E: {
                                                              switch (k = f[0 | W], (k = p && 3 == (15 & k) ? -33 & k : k) - 88 | 0) {
                                                                case 11:
                                                                  break u;
                                                                case 9:
                                                                case 13:
                                                                case 14:
                                                                case 15:
                                                                  break b;
                                                                case 27:
                                                                  break d;
                                                                case 12:
                                                                case 17:
                                                                  break p;
                                                                case 23:
                                                                  break m;
                                                                case 0:
                                                                case 32:
                                                                  break N;
                                                                case 24:
                                                                  break w;
                                                                case 22:
                                                                  break y;
                                                                case 29:
                                                                  break E;
                                                                case 1:
                                                                case 2:
                                                                case 3:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                case 7:
                                                                case 8:
                                                                case 10:
                                                                case 16:
                                                                case 18:
                                                                case 19:
                                                                case 20:
                                                                case 21:
                                                                case 25:
                                                                case 26:
                                                                case 28:
                                                                case 30:
                                                                case 31:
                                                                  break f;
                                                              }
                                                              switch (k - 65 | 0) {
                                                                case 0:
                                                                case 4:
                                                                case 5:
                                                                case 6:
                                                                  break b;
                                                                case 2:
                                                                  break k;
                                                                case 1:
                                                                case 3:
                                                                  break f;
                                                              }
                                                              if (83 == (0 | k)) break l;
                                                              break f;
                                                            }
                                                            l = c[b + 64 >> 2], p = c[b + 68 >> 2], k = 1166;
                                                            break h;
                                                          }
                                                          k = 0;
                                                          y: switch (255 & p) {
                                                            case 0:
                                                            case 1:
                                                            case 6:
                                                              c[c[b + 64 >> 2] >> 2] = E;
                                                              continue n;
                                                            case 2:
                                                              d = c[b + 64 >> 2], c[d >> 2] = E, c[d + 4 >> 2] = E >> 31;
                                                              continue n;
                                                            case 3:
                                                              o[c[b + 64 >> 2] >> 1] = E;
                                                              continue n;
                                                            case 4:
                                                              f[c[b + 64 >> 2]] = E;
                                                              continue n;
                                                            case 7:
                                                              break y;
                                                            default:
                                                              continue n;
                                                          }
                                                          d = c[b + 64 >> 2], c[d >> 2] = E, c[d + 4 >> 2] = E >> 31;
                                                          continue n;
                                                        }
                                                        m = m >>> 0 <= 8 ? 8 : m, y |= 8, k = 120;
                                                      }
                                                      if (d = s, (l = c[b + 64 >> 2]) | (p = c[b + 68 >> 2])) for (T = 32 & k; f[0 | (d = d - 1 | 0)] = T | v[5424 + (15 & l) | 0], I = !p & l >>> 0 > 15 | 0 != (0 | p), W = p, p = p >>> 4 | 0, l = (15 & W) << 28 | l >>> 4, I;);
                                                      if (!(8 & y) | !(c[b + 64 >> 2] | c[b + 68 >> 2])) break v;
                                                      V = 1166 + (k >>> 4 | 0) | 0, R = 2;
                                                      break v;
                                                    }
                                                    if (k = s, p = d = c[b + 68 >> 2], d | (l = c[b + 64 >> 2])) for (; f[0 | (k = k - 1 | 0)] = 7 & l | 48, W = !p & l >>> 0 > 7 | 0 != (0 | p), p = (d = p) >>> 3 | 0, l = (7 & d) << 29 | l >>> 3, W;);
                                                    if (d = k, !(8 & y)) break v;
                                                    m = (0 | (k = s - d | 0)) < (0 | m) ? m : k + 1 | 0;
                                                    break v;
                                                  }
                                                  l = c[b + 64 >> 2], p = k = c[b + 68 >> 2], (0 | k) < 0 ? (p = d = 0 - (p + (0 != (0 | l)) | 0) | 0, l = 0 - l | 0, c[b + 64 >> 2] = l, c[b + 68 >> 2] = d, R = 1, k = 1166) : 2048 & y ? (R = 1, k = 1167) : k = (R = 1 & y) ? 1168 : 1166;
                                                }
                                                V = k, d = re(l, p, s);
                                              }
                                              if ((0 | m) < 0 && g) break i;
                                              if (y = g ? -65537 & y : y, !(0 != ((k = c[b + 64 >> 2]) | (l = c[b + 68 >> 2])) | m)) {
                                                d = s, m = 0;
                                                break f;
                                              }
                                              m = (0 | (k = !(k | l) + (s - d | 0) | 0)) < (0 | m) ? m : k;
                                              break f;
                                            }
                                            y = 0, h = 0 != (0 | (p = g = m >>> 0 >= 2147483647 ? 2147483647 : m));
                                            d: {
                                              v: {
                                                h: {
                                                  p: {
                                                    m: if (!(!(3 & (k = d = (k = c[b + 64 >> 2]) || 4208)) | !p)) for (;;) {
                                                      if (!(y = v[0 | k])) break p;
                                                      if (h = 0 != (0 | (p = p - 1 | 0)), !(3 & (k = k + 1 | 0))) break m;
                                                      if (!p) break;
                                                    }
                                                    if (!h) break v;
                                                    m: {
                                                      if (!(!v[0 | k] | p >>> 0 < 4)) for (;;) {
                                                        if ((-1 ^ (h = c[k >> 2])) & h - 16843009 & -2139062144) break m;
                                                        if (k = k + 4 | 0, !((p = p - 4 | 0) >>> 0 > 3)) break;
                                                      }
                                                      if (!p) break v;
                                                    }
                                                    h = 0;
                                                    break h;
                                                  }
                                                  h = 1;
                                                }
                                                for (;;) if (h) {
                                                  if (!y) break d;
                                                  if (k = k + 1 | 0, !(p = p - 1 | 0)) break v;
                                                  h = 0;
                                                } else y = v[0 | k], h = 1;
                                              }
                                              k = 0;
                                            }
                                            if (h = (k = k ? k - d | 0 : g) + d | 0, (0 | m) >= 0) {
                                              y = l, m = k;
                                              break f;
                                            }
                                            if (y = l, m = k, v[0 | h]) break i;
                                            break f;
                                          }
                                          if (m) {
                                            l = c[b + 64 >> 2];
                                            break A;
                                          }
                                          k = 0, le(r, 32, G, 0, y);
                                          break s;
                                        }
                                        c[b + 12 >> 2] = 0, c[b + 8 >> 2] = c[b + 64 >> 2], l = b + 8 | 0, c[b + 64 >> 2] = l, m = -1;
                                      }
                                      k = 0;
                                      A: {
                                        for (;;) {
                                          if (!(d = c[l >> 2])) break A;
                                          if (!((h = (0 | (d = We(b + 4 | 0, d))) < 0) | d >>> 0 > m - k >>> 0)) {
                                            if (l = l + 4 | 0, m >>> 0 > (k = k + d | 0) >>> 0) continue;
                                            break A;
                                          }
                                          break;
                                        }
                                        if (h) break e;
                                      }
                                      if (h = 61, (0 | k) < 0) break a;
                                      if (le(r, 32, G, k, y), k) for (h = 0, l = c[b + 64 >> 2];;) {
                                        if (!(d = c[l >> 2])) break s;
                                        if ((h = (d = We(b + 4 | 0, d)) + h | 0) >>> 0 > k >>> 0) break s;
                                        if (Pr(r, b + 4 | 0, d), l = l + 4 | 0, !(k >>> 0 > h >>> 0)) break;
                                      } else k = 0;
                                    }
                                    le(r, 32, G, k, 8192 ^ y), k = (0 | k) < (0 | G) ? G : k;
                                    continue n;
                                  }
                                  if ((0 | m) < 0 && g) break i;
                                  if (h = 61, (0 | (k = 0 | aa[0 | t](r, N[b + 64 >> 3], G, m, y, k))) >= 0) continue n;
                                  break a;
                                }
                                f[b + 55 | 0] = c[b + 64 >> 2], m = 1, d = A, y = l;
                                break f;
                              }
                              l = v[k + 1 | 0], k = k + 1 | 0;
                            }
                            if (r) break r;
                            if (!Z) break t;
                            for (k = 1;;) {
                              if (r = c[(k << 2) + n >> 2]) {
                                if (yr((k << 3) + i | 0, r, a, u), E = 1, 10 != (0 | (k = k + 1 | 0))) continue;
                                break r;
                              }
                              break;
                            }
                            if (E = 1, k >>> 0 >= 10) break r;
                            for (;;) {
                              if (c[(k << 2) + n >> 2]) break o;
                              if (10 == (0 | (k = k + 1 | 0))) break;
                            }
                            break r;
                          }
                          h = 28;
                          break a;
                        }
                        if ((0 | (m = (0 | m) > (0 | (p = h - d | 0)) ? m : p)) > (2147483647 ^ R)) break i;
                        if (h = 61, (0 | B) < (0 | (k = (0 | (l = m + R | 0)) < (0 | G) ? G : l))) break a;
                        le(r, 32, k, l, y), Pr(r, V, R), le(r, 48, k, l, 65536 ^ y), le(r, 48, m, p, 0), Pr(r, d, p), le(r, 32, k, l, 8192 ^ y);
                        continue;
                      }
                      break;
                    }
                    E = 0;
                    break r;
                  }
                  h = 61;
                }
                c[1761] = h;
              }
              E = -1;
            }
            return ar = b + 80 | 0, E;
          }
          function or(r, e, a, i, n, t, o, u, b, s, A, k, l, d) {
            var h,
              N = y(0),
              G = 0,
              R = 0,
              g = 0,
              Z = y(0),
              W = 0,
              V = 0,
              B = y(0);
            (c[r + 312 >> 2] != (0 | d) && 4 & v[r + 4 | 0] || (W = 0, c[r + 316 >> 2] != (0 | i))) && (c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 320 >> 2] = 0, W = 1), h = l + 1 | 0;
            r: {
              e: {
                a: {
                  i: if (c[r + 8 >> 2]) {
                    if (Z = Mr(r, 2, o), B = Ur(r, 2, o), N = y(Mr(r, 0, o) + Ur(r, 0, o)), l = r + 524 | 0, Z = y(Z + B), lr(n, e, t, a, c[r + 532 >> 2], m[l >> 2], c[r + 536 >> 2], m[r + 528 >> 2], m[r + 540 >> 2], m[r + 544 >> 2], Z, N, A)) break a;
                    if (!(R = c[r + 320 >> 2])) break i;
                    for (G = r + 324 | 0;;) {
                      if (l = G + w(g, 24) | 0, lr(n, e, t, a, c[l + 8 >> 2], m[l >> 2], c[l + 12 >> 2], m[l + 4 >> 2], m[l + 16 >> 2], m[l + 20 >> 2], Z, N, A)) break a;
                      if ((0 | R) == (0 | (g = g + 1 | 0))) break;
                    }
                  } else {
                    if (b) {
                      n: {
                        if (!((N = m[(l = r + 524 | 0) >> 2]) != N | e != e)) {
                          if (y(E(y(N - e))) < y(9999999747378752e-20)) break n;
                          break i;
                        }
                        if (N == N | e == e) break i;
                      }
                      G = c[r + 532 >> 2] == (0 | n) && c[r + 536 >> 2] == (0 | t) ? l : 0, (l = (N = m[r + 528 >> 2]) != N) | (R = a != a) ? l &= R : l = y(E(y(N - a))) < y(9999999747378752e-20), l = l ? G : 0;
                      break a;
                    }
                    if (!(V = c[r + 320 >> 2])) break i;
                    for (R = r + 324 | 0;;) {
                      G = w(g, 24);
                      n: {
                        t: {
                          if (!((N = m[(l = G + R | 0) >> 2]) != N | e != e)) {
                            if (y(E(y(N - e))) < y(9999999747378752e-20)) break t;
                            break n;
                          }
                          if (N == N | e == e) break n;
                        }
                        t: {
                          if (!((N = m[4 + (G = R + G | 0) >> 2]) != N | a != a)) {
                            if (y(E(y(N - a))) < y(9999999747378752e-20)) break t;
                            break n;
                          }
                          if (N == N | a == a) break n;
                        }
                        if (c[G + 8 >> 2] == (0 | n) && c[G + 12 >> 2] == (0 | t)) break a;
                      }
                      if ((0 | V) == (0 | (g = g + 1 | 0))) break;
                    }
                  }
                  nr(r, e, a, i, n, t, o, u, b, A, k, h, d, s), c[r + 316 >> 2] = i;
                  break e;
                }
                if (!(!l | W)) {
                  m[r + 516 >> 2] = m[l + 16 >> 2], m[r + 520 >> 2] = m[l + 20 >> 2], c[(i = (b ? 12 : 16) + k | 0) >> 2] = c[i >> 2] + 1, i = 0;
                  break r;
                }
                if (nr(r, e, a, i, n, t, o, u, b, A, k, h, d, s), c[r + 316 >> 2] = i, i = 1, l) break r;
              }
              (i = (l = c[r + 320 >> 2]) + 1 | 0) >>> 0 > p[k + 8 >> 2] && (c[k + 8 >> 2] = i), 8 == (0 | l) && (c[r + 320 >> 2] = 0, l = 0), b ? i = r + 524 | 0 : (c[r + 320 >> 2] = l + 1, i = 324 + (w(l, 24) + r | 0) | 0), c[i + 12 >> 2] = t, c[i + 8 >> 2] = n, m[i + 4 >> 2] = a, m[i >> 2] = e, m[i + 16 >> 2] = m[r + 516 >> 2], m[i + 20 >> 2] = m[r + 520 >> 2], i = 1;
            }
            return b && (n = c[r + 520 >> 2], c[r + 244 >> 2] = c[r + 516 >> 2], c[r + 248 >> 2] = n, t = 1 | (n = v[r + 4 | 0]), f[r + 4 | 0] = t, 4 & n && (f[r + 4 | 0] = 251 & t)), c[r + 312 >> 2] = d, i;
          }
          function cr(r) {
            var e = 0,
              a = 0,
              i = 0,
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              u = 0,
              b = 0,
              s = 0,
              A = 0;
            o = 8;
            r: if (!((r |= 0) >>> 0 > 4294967239)) {
              e: {
                for (;;) {
                  if (o = o >>> 0 <= 8 ? 8 : o, t = e = c[1731], n = c[1730], (r = r >>> 0 <= 8 ? 8 : r + 3 & -4) >>> 0 <= 127 ? f = (r >>> 3 | 0) - 1 | 0 : (f = 110 + ((r >>> 29 - (i = G(r)) ^ 4) - (i << 2) | 0) | 0, r >>> 0 <= 4095 || (f = (i = 71 + ((r >>> 30 - i ^ 2) - (i << 1) | 0) | 0) >>> 0 >= 63 ? 63 : i)), a = 31 & f, (63 & f) >>> 0 >= 32 ? (i = 0, e = e >>> a | 0) : (i = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | n >>> a), e | i) {
                    for (;;) {
                      if (n = i, e | i ? (u = 1 + (a = i - 1 | 0) | 0, t = a, a = 63 - (i = 32 == (0 | (i = G(i ^ (t = -1 != (0 | (a = e - 1 | 0)) ? u : t)))) ? G(e ^ a) + 32 | 0 : i) | 0, ir = 0 - (i >>> 0 > 63) | 0) : (ir = 0, a = 64), a = 31 & (t = a), (63 & t) >>> 0 >= 32 ? (i = 0, e = n >>> a | 0) : (i = n >>> a | 0, e = ((1 << a) - 1 & n) << 32 - a | e >>> a), u = e, (0 | (e = c[5896 + (a = (f = t + f | 0) << 4) >> 2])) == (0 | (t = a + 5888 | 0))) b = c[1731], n = 31 & (e = t = 63 & f), e >>> 0 >= 32 ? (e = 0, a = -1 >>> n | 0) : a = (e = -1 >>> n | 0) | (1 << n) - 1 << 32 - n, a &= -2, n = 31 & t, t >>> 0 >= 32 ? (e = a << n, a = 0) : (e = (1 << n) - 1 & a >>> 32 - n | e << n, a <<= n), s = a, n = e, e = 31 & (a = t = 0 - f & 63), a >>> 0 >= 32 ? (e = -1 << e, a = 0) : e = (a = -1 << e) | (1 << e) - 1 & -1 >>> 32 - e, A = -2 & a, a = 31 & t, t >>> 0 >= 32 ? (t = 0, e = e >>> a | 0) : (t = e >>> a | 0, e = ((1 << a) - 1 & e) << 32 - a | A >>> a), e |= s, ir = n | t, c[1730] = c[1730] & e, c[1731] = ir & b, e = 1 ^ u;else {
                        if (n = Nr(e, o, r)) break r;
                        n = c[e + 4 >> 2], c[n + 8 >> 2] = c[e + 8 >> 2], c[c[e + 8 >> 2] + 4 >> 2] = n, c[e + 8 >> 2] = t, n = a + 5892 | 0, c[e + 4 >> 2] = c[n >> 2], c[n >> 2] = e, c[c[e + 4 >> 2] + 8 >> 2] = e, f = f + 1 | 0, e = (1 & i) << 31 | u >>> 1, i = i >>> 1 | 0;
                      }
                      if (!(e | i)) break;
                    }
                    t = c[1731], n = c[1730];
                  }
                  a: {
                    if (n | t) {
                      a = 63 - (32 == (0 | (i = G(t))) ? G(n) + 32 | 0 : i) | 0, i = c[5896 + (e = a << 4) >> 2];
                      i: if (!(!t & n >>> 0 < 1073741824) && (f = 99, (0 | (e = e + 5888 | 0)) != (0 | i))) {
                        for (;;) {
                          if (!f) break i;
                          if (n = Nr(i, o, r)) break r;
                          if (f = f - 1 | 0, (0 | e) == (0 | (i = c[i + 8 >> 2]))) break;
                        }
                        i = e;
                      }
                      if (vr(r + 48 | 0)) break a;
                      if (!i) break e;
                      if ((0 | (e = 5888 + (a << 4) | 0)) == (0 | i)) break e;
                      for (;;) {
                        if (n = Nr(i, o, r)) break r;
                        if ((0 | e) == (0 | (i = c[i + 8 >> 2]))) break;
                      }
                      break e;
                    }
                    if (!vr(r + 48 | 0)) break e;
                  }
                  if (n = 0, o - 1 & o) break r;
                  if (!(r >>> 0 <= 4294967239)) break;
                }
                break r;
              }
              n = 0;
            }
            return 0 | n;
          }
          function ur(r, e, a, i) {
            var n = y(0),
              t = y(0),
              f = 0,
              o = y(0);
            r: {
              e: {
                a: {
                  i: {
                    n: {
                      t: {
                        if (e >>> 0 <= 1) {
                          t = m[r + 212 >> 2];
                          f: if (2139156720 != (0 | (e = c[r + 212 >> 2]))) {
                            if (2140081935 == (0 | e)) break t;
                            f = 4276;
                            o: {
                              if (2141891242 != (0 | e)) {
                                if (t == t) break o;
                                f = 4268;
                              }
                              switch (n = m[f >> 2], t = y(NaN), c[f + 4 >> 2] - 1 | 0) {
                                case 0:
                                  break t;
                                case 1:
                                  break f;
                                default:
                                  break n;
                              }
                            }
                            if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break t;
                          }
                          t = y(y(n * i) * y(.009999999776482582));
                          break n;
                        }
                        t = m[r + 208 >> 2];
                        f: {
                          o: {
                            c: if (2139156720 != (0 | (e = c[r + 208 >> 2]))) {
                              if (2140081935 == (0 | e)) break o;
                              f = 4276;
                              u: {
                                if (2141891242 != (0 | e)) {
                                  if (t == t) break u;
                                  f = 4268;
                                }
                                switch (n = m[f >> 2], t = y(NaN), c[f + 4 >> 2] - 1 | 0) {
                                  case 0:
                                    break o;
                                  case 1:
                                    break c;
                                  default:
                                    break f;
                                }
                              }
                              if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break o;
                            }
                            t = y(y(n * i) * y(.009999999776482582));
                            break f;
                          }
                          t = n;
                        }
                        n = y(0), o = m[r + 216 >> 2];
                        f: if (2139156720 != (0 | (r = c[r + 216 >> 2]))) {
                          if (2140081935 == (0 | r)) break a;
                          e = 4276;
                          o: {
                            if (2141891242 != (0 | r)) {
                              if (o == o) break o;
                              e = 4268;
                            }
                            switch (n = m[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                              case 1:
                                break f;
                              case 0:
                                break i;
                              default:
                                break e;
                            }
                          }
                          if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break i;
                        }
                        n = y(y(n * i) * y(.009999999776482582));
                        break i;
                      }
                      t = n;
                    }
                    n = y(0), o = m[r + 220 >> 2];
                    n: if (2139156720 != (0 | (r = c[r + 220 >> 2]))) {
                      if (2140081935 == (0 | r)) break a;
                      e = 4276;
                      t: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break t;
                          e = 4268;
                        }
                        switch (n = m[e >> 2], c[e + 4 >> 2] - 1 | 0) {
                          case 1:
                            break n;
                          case 0:
                            break i;
                          default:
                            break e;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break i;
                    }
                    n = y(y(n * i) * y(.009999999776482582));
                  }
                  if (!(n >= y(0))) break e;
                }
                if (a > n) break r;
              }
              if (!(t >= y(0))) return a;
              n = a < t ? t : a;
            }
            return n;
          }
          function br(r, e) {
            var a = 0,
              i = 0;
            for (c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, o[r + 4 >> 1] = 1, c[r >> 2] = 0, c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, c[r + 24 >> 2] = 0, c[r + 36 >> 2] = 2143289344, c[r + 40 >> 2] = 2141891242, c[r + 28 >> 2] = 2143289344, c[r + 32 >> 2] = 2143289344, i = Rr(r + 44 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 80 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 116 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, i = Rr(r + 152 | 0, 0, 36); c[i + (a << 2) >> 2] = 2143289344, 9 != (0 | (a = a + 1 | 0)););
            for (a = 0, c[r + 196 >> 2] = 0, c[(i = r + 188 | 0) >> 2] = 0, c[i + 4 >> 2] = 0; c[i + (a << 2) >> 2] = 2143289344, 3 != (0 | (a = a + 1 | 0)););
            for (c[r + 24 >> 2] = 4224, c[r + 224 >> 2] = 2143289344, c[r + 216 >> 2] = 2143289344, c[r + 220 >> 2] = 2143289344, c[r + 208 >> 2] = 2143289344, c[r + 212 >> 2] = 2143289344, c[r + 200 >> 2] = 2141891242, c[r + 204 >> 2] = 2141891242, Rr(r + 228 | 0, 0, 288), c[r + 244 >> 2] = 2143289344, c[r + 248 >> 2] = 2143289344, Rr(r + 252 | 0, 0, 49), c[r + 308 >> 2] = 2143289344, i = r + 516 | 0, a = r + 324 | 0; c[a + 16 >> 2] = -1082130432, c[a + 20 >> 2] = -1082130432, c[a + 8 >> 2] = 0, c[a + 12 >> 2] = 0, c[a >> 2] = -1082130432, c[a + 4 >> 2] = -1082130432, (0 | i) != (0 | (a = a + 24 | 0)););
            return c[r + 548 >> 2] = 0, c[r + 552 >> 2] = 0, c[r + 516 >> 2] = 2143289344, c[r + 520 >> 2] = 2143289344, c[r + 572 >> 2] = 2143289344, c[r + 576 >> 2] = 0, c[r + 568 >> 2] = e, c[r + 540 >> 2] = -1082130432, c[r + 544 >> 2] = -1082130432, c[r + 532 >> 2] = 0, c[r + 536 >> 2] = 0, c[r + 524 >> 2] = -1082130432, c[r + 528 >> 2] = -1082130432, c[r + 556 >> 2] = 0, c[r + 560 >> 2] = 0, c[r + 564 >> 2] = 0, c[r + 580 >> 2] = 2143289344, c[r + 584 >> 2] = 0, v[e + 10 | 0] && (c[r + 24 >> 2] = 4616, f[r + 4 | 0] = 128 | v[r + 4 | 0]), r;
          }
          function sr(r) {
            var e,
              a,
              i,
              n,
              t,
              f = 0,
              o = 0,
              u = y(0),
              s = y(0),
              A = y(0),
              k = 0,
              l = 0,
              v = 0,
              h = 0;
            for (c[8 + (e = ar - 16 | 0) >> 2] = 0, c[e + 12 >> 2] = 1, a = r + 200 | 0, i = r + 572 | 0, n = r + 208 | 0, t = r + 216 | 0, r = 0;;) {
              h = r, v = c[(e + 8 | 0) + (r << 2) >> 2], u = m[(r = t + (k = v << 2) | 0) >> 2];
              r: {
                e: {
                  a: {
                    i: {
                      n: {
                        if (!(!((l = 2139156720 == (0 | (f = c[r >> 2]))) | 2140081935 == (0 | f) | 2141891242 == (0 | f)) & u != u)) {
                          s = m[(r = k + n | 0) >> 2];
                          t: {
                            f: {
                              if (2139156720 != (0 | (o = c[r >> 2]))) {
                                if (A = y(NaN), r = 3, 2141891242 == (0 | o)) break t;
                                if (2140081935 != (0 | o)) break f;
                                A = y(0), r = 1;
                                break t;
                              }
                              A = y(0), r = 2;
                              break t;
                            }
                            r = 0, s == s && (b(2, 536870912 + (-1073741825 & o) | 0), A = d(), r = 1073741824 & o ? 2 : 1);
                          }
                          o = r;
                          t: {
                            f: {
                              if (!l) {
                                if (s = y(NaN), r = 3, 2141891242 == (0 | f)) break t;
                                if (2140081935 != (0 | f)) break f;
                                s = y(0), r = 1;
                                break t;
                              }
                              s = y(0), r = 2;
                              break t;
                            }
                            r = 0, u == u && (b(2, 536870912 + (-1073741825 & f) | 0), s = d(), r = 1073741824 & f ? 2 : 1);
                          }
                          if (!((0 | o) != (0 | r) | !(!r | s != s & A != A | y(E(y(s - A))) < y(9999999747378752e-20)))) {
                            if (r = 0, l) break n;
                            if (2140081935 == (0 | f)) break e;
                            if (2141891242 == (0 | f)) break a;
                            if (u != u) break i;
                            r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                            break r;
                          }
                        }
                        if (r = 0, u = m[(f = k + a | 0) >> 2], 2139156720 != (0 | (f = c[f >> 2]))) {
                          if (2140081935 == (0 | f)) break e;
                          if (2141891242 == (0 | f)) break a;
                          if (u != u) break i;
                          r = 536870912 + (-1073741825 & f) | 0, f = 1073741824 & f ? 2 : 1;
                          break r;
                        }
                      }
                      f = 2;
                      break r;
                    }
                    r = 2143289344, f = 0;
                    break r;
                  }
                  r = 2143289344, f = 3;
                  break r;
                }
                f = 1;
              }
              if (c[4 + (o = (v << 3) + i | 0) >> 2] = f, c[o >> 2] = r, r = 1, 1 & h) break;
            }
          }
          function Ar(r, e, a) {
            var i,
              n = 0,
              t = 0;
            if (a >>> 0 >= 512) return J(0 | r, 0 | e, 0 | a), r;
            i = r + a | 0;
            r: if (3 & (r ^ e)) {
              if (i >>> 0 < 4) a = r;else if ((n = i - 4 | 0) >>> 0 < r >>> 0) a = r;else for (a = r; f[0 | a] = v[0 | e], f[a + 1 | 0] = v[e + 1 | 0], f[a + 2 | 0] = v[e + 2 | 0], f[a + 3 | 0] = v[e + 3 | 0], e = e + 4 | 0, n >>> 0 >= (a = a + 4 | 0) >>> 0;);
            } else {
              e: if (3 & r) {
                if (a) for (a = r;;) {
                  if (f[0 | a] = v[0 | e], e = e + 1 | 0, !(3 & (a = a + 1 | 0))) break e;
                  if (!(a >>> 0 < i >>> 0)) break;
                } else a = r;
              } else a = r;
              if (!((n = -4 & i) >>> 0 < 64 || (t = n + -64 | 0) >>> 0 < a >>> 0)) for (; c[a >> 2] = c[e >> 2], c[a + 4 >> 2] = c[e + 4 >> 2], c[a + 8 >> 2] = c[e + 8 >> 2], c[a + 12 >> 2] = c[e + 12 >> 2], c[a + 16 >> 2] = c[e + 16 >> 2], c[a + 20 >> 2] = c[e + 20 >> 2], c[a + 24 >> 2] = c[e + 24 >> 2], c[a + 28 >> 2] = c[e + 28 >> 2], c[a + 32 >> 2] = c[e + 32 >> 2], c[a + 36 >> 2] = c[e + 36 >> 2], c[a + 40 >> 2] = c[e + 40 >> 2], c[a + 44 >> 2] = c[e + 44 >> 2], c[a + 48 >> 2] = c[e + 48 >> 2], c[a + 52 >> 2] = c[e + 52 >> 2], c[a + 56 >> 2] = c[e + 56 >> 2], c[a + 60 >> 2] = c[e + 60 >> 2], e = e - -64 | 0, t >>> 0 >= (a = a - -64 | 0) >>> 0;);
              if (a >>> 0 >= n >>> 0) break r;
              for (; c[a >> 2] = c[e >> 2], e = e + 4 | 0, n >>> 0 > (a = a + 4 | 0) >>> 0;);
            }
            if (a >>> 0 < i >>> 0) for (; f[0 | a] = v[0 | e], e = e + 1 | 0, (0 | i) != (0 | (a = a + 1 | 0)););
            return r;
          }
          function kr(r, e, a, i, n) {
            var t,
              f = y(0),
              o = 0,
              u = y(0),
              s = y(0),
              A = 0,
              k = y(0),
              l = y(0);
            if (!(t = (u = y(a - i)) != u)) {
              a = y(0), f = m[208 + (o = (e << 2) + r | 0) >> 2];
              r: {
                e: {
                  a: {
                    i: if (2139156720 != (0 | (o = c[o + 208 >> 2]))) {
                      if (2140081935 == (0 | o)) break e;
                      A = 4276;
                      n: {
                        if (2141891242 != (0 | o)) {
                          if (f == f) break n;
                          A = 4268;
                        }
                        switch (a = m[A >> 2], c[A + 4 >> 2] - 1 | 0) {
                          case 0:
                            break a;
                          case 1:
                            break i;
                          default:
                            break r;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & o) | 0), a = d(), !(1073741824 & o)) break a;
                    }
                    a = y(y(a * n) * y(.009999999776482582));
                  }
                  if (a != a) break r;
                }
                s = y(a - i);
              }
              a = y(0), f = m[216 + (r = (e << 2) + r | 0) >> 2];
              r: {
                e: {
                  a: {
                    i: if (2139156720 != (0 | (e = c[r + 216 >> 2]))) {
                      if (2140081935 == (0 | e)) break e;
                      r = 4276;
                      n: {
                        if (2141891242 != (0 | e)) {
                          if (f == f) break n;
                          r = 4268;
                        }
                        switch (a = m[r >> 2], f = y(34028234663852886e22), c[r + 4 >> 2] - 1 | 0) {
                          case 0:
                            break a;
                          case 1:
                            break i;
                          default:
                            break r;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & e) | 0), a = d(), !(1073741824 & e)) break a;
                    }
                    a = y(y(a * n) * y(.009999999776482582));
                  }
                  if (a != a) {
                    f = y(34028234663852886e22);
                    break r;
                  }
                }
                f = y(a - i);
              }
              if (k = u, l = ge(u, f), !((r = (a = f != f | t ? k : l) != a) | s != s)) return Re(a, s);
              u = r ? s : a;
            }
            return u;
          }
          function lr(r, e, a, i, n, t, f, o, c, u, b, s, A) {
            var k = y(0),
              l = y(0),
              d = 0,
              v = 0,
              h = y(0),
              p = y(0),
              N = y(0),
              w = 0,
              G = 0;
            if (c < y(0) | u < y(0)) r = 0;else {
              h = t, p = e, N = i, l = o, A && (l = o, (k = m[A + 16 >> 2]) != y(0) && (p = jr(+e, w = +k, 0, 0), N = jr(+i, w, 0, 0), h = jr(+t, w, 0, 0), l = jr(+o, w, 0, 0))), k = l, A = 0, (0 | r) == (0 | n) && ((G = h != h) | (A = p != p) ? A &= G : A = y(E(y(h - p))) < y(9999999747378752e-20)), G = A, (0 | a) == (0 | f) && ((d = k != k) | (A = N != N) ? d &= A : d = y(E(y(k - N))) < y(9999999747378752e-20)), v = 1, A = 1;
              r: if (!G) {
                e = y(e - b);
                e: if (1 != (0 | r)) {
                  if (!((r = 2 != (0 | r)) | n)) {
                    if (!(e >= c)) break e;
                    break r;
                  }
                  if (A = 0, !(e < t) | r | 2 != (0 | n) | e != e | t != t | c != c) break r;
                  if (A = 1, e >= c) break r;
                }
                A = (n = e != e) | (r = c != c) ? r & n : y(E(y(e - c))) < y(9999999747378752e-20);
              }
              r: if (!d) {
                e = y(i - s);
                e: if (1 != (0 | a)) {
                  if (!((r = 2 != (0 | a)) | f)) {
                    if (!(e >= u)) break e;
                    break r;
                  }
                  if (v = 0, !(e < o) | r | 2 != (0 | f) | e != e | o != o | u != u) break r;
                  if (v = 1, e >= u) break r;
                }
                v = (a = e != e) | (r = u != u) ? r & a : y(E(y(e - u))) < y(9999999747378752e-20);
              }
              r = A & v;
            }
            return r;
          }
          function dr(r) {
            var e,
              a,
              i = 0,
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              c = 0;
            if (A(+r), o = 0 | u(1), t = 0 | u(0), 2047 == (0 | (f = o >>> 20 & 2047))) return (r *= 1) / r;
            if (!(i = t << 1) & 2145386496 == (0 | (c = o << 1 | t >>> 31)) | c >>> 0 < 2145386496) return !i & 2145386496 == (0 | c) ? 0 * r : r;
            if (f) i = 1048575 & o | 1048576;else {
              if (f = 0, n = t << 12, (0 | (i = o << 12 | t >>> 20)) > 0 | (0 | i) >= 0) for (; f = f - 1 | 0, i = i << 1 | n >>> 31, n <<= 1, (0 | i) > 0 | (0 | i) >= 0;);
              n = 31 & (i = 1 - f | 0), (63 & i) >>> 0 >= 32 ? (i = t << n, t = 0) : (i = (1 << n) - 1 & t >>> 32 - n | o << n, t <<= n);
            }
            if (n = t, (0 | f) > 1023) {
              for (;;) {
                if (!((0 | (t = i + -1048576 | 0)) < 0 || (i = t) | n)) return 0 * r;
                if (i = i << 1 | n >>> 31, n <<= 1, !((0 | (f = f - 1 | 0)) > 1023)) break;
              }
              f = 1023;
            }
            if (!((0 | (t = i + -1048576 | 0)) < 0 || (i = t) | n)) return 0 * r;
            if (1048575 == (0 | i) | i >>> 0 < 1048575) for (; f = f - 1 | 0, t = i >>> 0 < 524288, c = i << 1 | n >>> 31, n <<= 1, i = c, t;);
            return a = -2147483648 & o, c = i + -1048576 | f << 20, o = i, e = n, n = 31 & (t = 1 - f | 0), (63 & t) >>> 0 >= 32 ? (i = 0, t = o >>> n | 0) : (i = o >>> n | 0, t = ((1 << n) - 1 & o) << 32 - n | e >>> n), b(0, 0 | ((n = (0 | f) > 0) ? e : t)), b(1, (n ? c : i) | a), +s();
          }
          function vr(r) {
            var e = 0,
              a = 0,
              i = 0,
              n = 0,
              t = 0;
            if ((a = (i = c[1396]) + (e = r + 7 & -8) | 0) >>> 0 <= i >>> 0 && e || a >>> 0 > ia() << 16 >>> 0 && !(0 | x(0 | a)) ? (c[1761] = 48, i = -1) : c[1396] = a, -1 != (0 | i)) {
              c[12 + (a = (e = r + i | 0) - 16 | 0) >> 2] = 16, c[a >> 2] = 16;
              r: {
                e: {
                  if ((0 | (t = (r = c[1728]) ? c[r + 8 >> 2] : 0)) == (0 | i)) {
                    if (n = i - (-2 & c[i - 4 >> 2]) | 0, t = c[n - 4 >> 2], c[r + 8 >> 2] = e, e = -16, !(1 & f[((r = n - (-2 & t) | 0) + c[r >> 2] | 0) - 4 | 0])) break e;
                    e = c[r + 4 >> 2], c[e + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = e, a = a - r | 0, c[r >> 2] = a;
                    break r;
                  }
                  c[i + 12 >> 2] = 16, c[i >> 2] = 16, c[i + 8 >> 2] = e, c[i + 4 >> 2] = r, c[1728] = i, e = 16;
                }
                a = a - (r = e + i | 0) | 0, c[r >> 2] = a;
              }
              c[((-4 & a) + r | 0) - 4 >> 2] = 1 | a, (e = c[r >> 2] - 8 | 0) >>> 0 <= 127 ? a = (e >>> 3 | 0) - 1 | 0 : (a = 110 + ((e >>> 29 - (n = G(e)) ^ 4) - (n << 2) | 0) | 0, e >>> 0 <= 4095 || (a = (a = 71 + ((e >>> 30 - n ^ 2) - (n << 1) | 0) | 0) >>> 0 >= 63 ? 63 : a)), e = a << 4, c[r + 4 >> 2] = e + 5888, e = e + 5896 | 0, c[r + 8 >> 2] = c[e >> 2], c[e >> 2] = r, c[c[r + 8 >> 2] + 4 >> 2] = r, e = c[1730], n = c[1731], r = 31 & a, (63 & a) >>> 0 >= 32 ? (a = 1 << r, t = 0) : a = (t = 1 << r) - 1 & 1 >>> 32 - r, c[1730] = t | e, c[1731] = a | n;
            }
            return -1 != (0 | i);
          }
          function hr(r, e, a) {
            var i = 0,
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              c = 0,
              u = 0,
              b = 0,
              s = 0;
            r: {
              e: {
                a: {
                  i: {
                    n: {
                      t: {
                        f: {
                          o: {
                            c: {
                              u: {
                                if (e) {
                                  if (!a) break u;
                                  break c;
                                }
                                ir = 0, r = (r >>> 0) / (a >>> 0) | 0;
                                break r;
                              }
                              if (!r) break o;
                              break f;
                            }
                            if (!(a - 1 & a)) break t;
                            f = 0 - (t = (G(a) + 33 | 0) - G(e) | 0) | 0;
                            break i;
                          }
                          ir = 0, r = (e >>> 0) / 0 | 0;
                          break r;
                        }
                        if ((i = 32 - G(e) | 0) >>> 0 < 31) break n;
                        break a;
                      }
                      if (1 == (0 | a)) break e;
                      a = 31 & (t = a ? 31 - G(a - 1 ^ a) | 0 : 32), (63 & t) >>> 0 >= 32 ? r = e >>> a | 0 : (i = e >>> a | 0, r = ((1 << a) - 1 & e) << 32 - a | r >>> a), ir = i;
                      break r;
                    }
                    t = i + 1 | 0, f = 63 - i | 0;
                  }
                  if (n = 31 & (i = 63 & t), i >>> 0 >= 32 ? (i = 0, o = e >>> n | 0) : (i = e >>> n | 0, o = ((1 << n) - 1 & e) << 32 - n | r >>> n), n = 31 & (f &= 63), f >>> 0 >= 32 ? (e = r << n, r = 0) : (e = (1 << n) - 1 & r >>> 32 - n | e << n, r <<= n), t) for (s = -1 == (0 | (f = a - 1 | 0)) ? -1 : 0; c = i << 1 | o >>> 31, o = (i = o << 1 | e >>> 31) - (u = a & (n = s - (c + (i >>> 0 > f >>> 0) | 0) >> 31)) | 0, i = c - (i >>> 0 < u >>> 0) | 0, e = e << 1 | r >>> 31, r = b | r << 1, b = 1 & n, t = t - 1 | 0;);
                  ir = e << 1 | r >>> 31, r = b | r << 1;
                  break r;
                }
                r = 0, e = 0;
              }
              ir = e;
            }
            return r;
          }
          function pr(r, e, a) {
            var i = y(0),
              n = y(0);
            r: {
              e: {
                a: {
                  if (2 == (-2 & e)) {
                    if (2139156720 == (0 | (e = c[r + 188 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (i = m[r + 188 >> 2]) == i) break a;
                    if (2139156720 == (0 | (e = c[r + 196 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (i = m[r + 196 >> 2]) == i) break a;
                    break e;
                  }
                  if (!(2139156720 == (0 | (e = c[r + 192 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (i = m[r + 192 >> 2]) == i || (i = m[r + 196 >> 2], 2139156720 == (0 | (e = c[r + 196 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) || i == i))) break e;
                }
                i = y(0);
                a: {
                  i: if (2139156720 != (0 | e)) {
                    if (2140081935 == (0 | e)) break r;
                    r = 4276;
                    n: {
                      if (2141891242 != (0 | e)) {
                        if (b(2, e), (i = d()) == i) break n;
                        r = 4268;
                      }
                      switch (i = m[r >> 2], n = y(NaN), c[r + 4 >> 2] - 1 | 0) {
                        case 0:
                          break r;
                        case 1:
                          break i;
                        default:
                          break a;
                      }
                    }
                    if (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), !(1073741824 & e)) break r;
                  }
                  n = y(y(i * a) * y(.009999999776482582));
                }
                return n;
              }
              i = y(0);
            }
            return i;
          }
          function mr(r, e) {
            var a,
              i,
              n = 0,
              t = 0,
              o = 0,
              u = 0;
            for (ar = n = ar - 320 | 0, a = Rr(n, 0, 288), c[(n = a) + 16 >> 2] = 2143289344, c[n + 20 >> 2] = 2143289344, Rr(n + 24 | 0, 0, 49), c[n + 80 >> 2] = 2143289344, o = n + 288 | 0, t = n + 96 | 0; c[(n = t) + 16 >> 2] = -1082130432, c[n + 20 >> 2] = -1082130432, c[n + 8 >> 2] = 0, c[n + 12 >> 2] = 0, c[n >> 2] = -1082130432, c[n + 4 >> 2] = -1082130432, (0 | o) != (0 | (t = n + 24 | 0)););
            if (c[a + 312 >> 2] = -1082130432, c[a + 316 >> 2] = -1082130432, c[a + 304 >> 2] = 0, c[a + 308 >> 2] = 0, c[a + 296 >> 2] = -1082130432, c[a + 300 >> 2] = -1082130432, c[a + 288 >> 2] = 2143289344, c[a + 292 >> 2] = 2143289344, Ar(r + 228 | 0, a, 320), c[r + 244 >> 2] = 0, c[r + 248 >> 2] = 0, f[r + 4 | 0] = 1 | v[r + 4 | 0], (0 | (t = c[r + 556 >> 2])) != (0 | (i = c[r + 560 >> 2]))) for (; n = c[t >> 2], c[n + 552 >> 2] != (0 | r) && (o = c[r + 568 >> 2], n = Ir(c[o >> 2], v[o + 8 | 0], n, r, u, e), c[t >> 2] = n, c[n + 552 >> 2] = r, n = c[t >> 2]), mr(n, e), u = u + 1 | 0, (0 | i) != (0 | (t = t + 4 | 0)););
            ar = a + 320 | 0;
          }
          function Nr(r, e, a) {
            var i = 0,
              n = 0,
              t = 0,
              f = 0;
            return (n = ((i = r + 4 | 0) + e | 0) - 1 & 0 - e) + a >>> 0 <= ((e = c[r >> 2]) + r | 0) - 4 >>> 0 ? (t = c[r + 4 >> 2], c[t + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = t, (0 | i) != (0 | n) && (n = n - i | 0, t = r - (-2 & c[r - 4 >> 2]) | 0, i = n + c[t >> 2] | 0, c[t >> 2] = i, c[(t + (-4 & i) | 0) - 4 >> 2] = i, e = e - n | 0, c[(r = r + n | 0) >> 2] = e), a + 24 >>> 0 <= e >>> 0 ? (e = (e - a | 0) - 8 | 0, c[(i = 8 + (r + a | 0) | 0) >> 2] = e, c[(i + (-4 & e) | 0) - 4 >> 2] = 1 | e, (n = c[i >> 2] - 8 | 0) >>> 0 <= 127 ? e = (n >>> 3 | 0) - 1 | 0 : (e = 110 + ((n >>> 29 - (t = G(n)) ^ 4) - (t << 2) | 0) | 0, n >>> 0 <= 4095 || (e = (e = 71 + ((n >>> 30 - t ^ 2) - (t << 1) | 0) | 0) >>> 0 >= 63 ? 63 : e)), n = e << 4, c[i + 4 >> 2] = n + 5888, n = n + 5896 | 0, c[i + 8 >> 2] = c[n >> 2], c[n >> 2] = i, c[c[i + 8 >> 2] + 4 >> 2] = i, n = c[1730], t = c[1731], i = 31 & e, (63 & e) >>> 0 >= 32 ? (e = 1 << i, i = 0) : (e = (f = 1 << i) - 1 & 1 >>> 32 - i, i = f), c[1730] = i | n, c[1731] = e | t, e = a + 8 | 0, c[r >> 2] = e, c[((-4 & e) + r | 0) - 4 >> 2] = e) : c[(r + e | 0) - 4 >> 2] = e, r = r + 4 | 0) : r = 0, r;
          }
          function wr(r, e, a) {
            var i = 0,
              n = 0;
            r: if ((0 | r) != (0 | e)) {
              if (e - (n = r + a | 0) >>> 0 <= 0 - (a << 1) >>> 0) return Ar(r, e, a);
              if (i = 3 & (r ^ e), r >>> 0 < e >>> 0) {
                if (i) i = r;else {
                  if (3 & r) for (i = r;;) {
                    if (!a) break r;
                    if (f[0 | i] = v[0 | e], e = e + 1 | 0, a = a - 1 | 0, !(3 & (i = i + 1 | 0))) break;
                  } else i = r;
                  if (!(a >>> 0 <= 3)) for (; c[i >> 2] = c[e >> 2], e = e + 4 | 0, i = i + 4 | 0, (a = a - 4 | 0) >>> 0 > 3;);
                }
                if (a) for (; f[0 | i] = v[0 | e], i = i + 1 | 0, e = e + 1 | 0, a = a - 1 | 0;);
              } else {
                if (!i) {
                  if (3 & n) for (;;) {
                    if (!a) break r;
                    if (f[0 | (i = (a = a - 1 | 0) + r | 0)] = v[e + a | 0], !(3 & i)) break;
                  }
                  if (!(a >>> 0 <= 3)) for (; c[(a = a - 4 | 0) + r >> 2] = c[e + a >> 2], a >>> 0 > 3;);
                }
                if (!a) break r;
                for (; f[(a = a - 1 | 0) + r | 0] = v[e + a | 0], a;);
              }
            }
            return r;
          }
          function yr(r, e, a, i) {
            switch (e - 9 | 0) {
              case 0:
                return e = c[a >> 2], c[a >> 2] = e + 4, void (c[r >> 2] = c[e >> 2]);
              case 6:
                return e = c[a >> 2], c[a >> 2] = e + 4, e = o[e >> 1], c[r >> 2] = e, void (c[r + 4 >> 2] = e >> 31);
              case 7:
                return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = h[e >> 1], void (c[r + 4 >> 2] = 0);
              case 8:
                return e = c[a >> 2], c[a >> 2] = e + 4, e = f[0 | e], c[r >> 2] = e, void (c[r + 4 >> 2] = e >> 31);
              case 9:
                return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = v[0 | e], void (c[r + 4 >> 2] = 0);
              case 16:
                return e = c[a >> 2] + 7 & -8, c[a >> 2] = e + 8, void (N[r >> 3] = N[e >> 3]);
              case 17:
                aa[0 | i](r, a);
              default:
                return;
              case 1:
              case 4:
              case 14:
                return e = c[a >> 2], c[a >> 2] = e + 4, e = c[e >> 2], c[r >> 2] = e, void (c[r + 4 >> 2] = e >> 31);
              case 2:
              case 5:
              case 11:
              case 15:
                return e = c[a >> 2], c[a >> 2] = e + 4, c[r >> 2] = c[e >> 2], void (c[r + 4 >> 2] = 0);
              case 3:
              case 10:
              case 12:
              case 13:
            }
            e = c[a >> 2] + 7 & -8, c[a >> 2] = e + 8, a = c[e + 4 >> 2], c[r >> 2] = c[e >> 2], c[r + 4 >> 2] = a;
          }
          function Er(r, e, a, i) {
            var n = 0,
              t = 0,
              f = 0,
              o = 0,
              u = 0,
              b = 0,
              s = 0,
              A = 0,
              k = 0,
              l = 0,
              d = 0,
              h = y(0),
              p = y(0),
              N = y(0),
              w = 0,
              G = y(0);
            if (0 != e && (h = m[r + 248 >> 2], p = m[r + 244 >> 2], N = m[r + 232 >> 2], w = r, G = jr(A = +m[r + 228 >> 2], e, 0, n = (f = 8 & v[r + 4 | 0]) >>> 3 | 0), m[w + 228 >> 2] = G, w = r, G = jr(k = +N, e, 0, n), m[w + 232 >> 2] = G, n = (u = dr((l = +p) * e)) != u, t = (b = dr((d = +h) * e)) != b, a = A + a, o = n | (o = E(u) < 1e-4) ? n | !o : !(E(u + -1) < 1e-4), w = r, G = y(jr(a + l, e, o & (n = 0 != (0 | f)), n & !o) - jr(a, e, 0, n)), m[w + 244 >> 2] = G, i = k + i, t = t | (f = E(b) < 1e-4) ? t | !f : !(E(b + -1) < 1e-4), w = r, G = y(jr(i + d, e, n & t, n & !t) - jr(i, e, 0, n)), m[w + 248 >> 2] = G, (0 | (n = c[r + 560 >> 2])) != (0 | (t = c[r + 556 >> 2])))) for (t = (n = n - t >> 2) >>> 0 <= 1 ? 1 : n; n = c[r + 556 >> 2], Er(n = c[r + 560 >> 2] - n >> 2 >>> 0 > s >>> 0 ? c[n + (s << 2) >> 2] : 0, e, a, i), (0 | t) != (0 | (s = s + 1 | 0)););
          }
          function Gr() {
            er(7004, 3018), rr(7005, 2479, 1, 1, 0), B(7006, 2139, 1, -128, 127), B(7007, 2132, 1, -128, 127), B(7008, 2130, 1, 0, 255), B(7009, 1286, 2, -32768, 32767), B(7010, 1277, 2, 0, 65535), B(7011, 1315, 4, -2147483648, 2147483647), B(7012, 1306, 4, 0, -1), B(7013, 2658, 4, -2147483648, 2147483647), B(7014, 2649, 4, 0, -1), Me(7015, 1776, -2147483648, 2147483647), Me(7016, 1775, 0, -1), S(7017, 1769, 4), S(7018, 2966, 8), P(7019, 2676), P(7020, 3835), L(7021, 4, 2663), L(7022, 2, 2688), L(7023, 4, 2703), $(7024, 2484), W(7025, 0, 3766), W(7026, 0, 3868), W(7027, 1, 3796), W(7028, 2, 3398), W(7029, 3, 3429), W(7030, 4, 3469), W(7031, 5, 3498), W(7032, 4, 3905), W(7033, 5, 3935), W(7026, 0, 3600), W(7027, 1, 3567), W(7028, 2, 3666), W(7029, 3, 3632), W(7030, 4, 3733), W(7031, 5, 3699), W(7034, 6, 3536), W(7035, 7, 3974);
          }
          function Rr(r, e, a) {
            var i = 0,
              n = 0,
              t = 0,
              o = 0;
            if (a && (f[0 | r] = e, f[(i = r + a | 0) - 1 | 0] = e, !(a >>> 0 < 3 || (f[r + 2 | 0] = e, f[r + 1 | 0] = e, f[i - 3 | 0] = e, f[i - 2 | 0] = e, a >>> 0 < 7 || (f[r + 3 | 0] = e, f[i - 4 | 0] = e, a >>> 0 < 9 || (n = (i = 0 - r & 3) + r | 0, e = w(255 & e, 16843009), c[n >> 2] = e, c[(a = (i = a - i & -4) + n | 0) - 4 >> 2] = e, i >>> 0 < 9 || (c[n + 8 >> 2] = e, c[n + 4 >> 2] = e, c[a - 8 >> 2] = e, c[a - 12 >> 2] = e, i >>> 0 < 25 || (c[n + 24 >> 2] = e, c[n + 20 >> 2] = e, c[n + 16 >> 2] = e, c[n + 12 >> 2] = e, c[a - 16 >> 2] = e, c[a - 20 >> 2] = e, c[a - 24 >> 2] = e, c[a - 28 >> 2] = e, (a = i - (o = 4 & n | 24) | 0) >>> 0 < 32)))))))) for (i = Ae(e, 0, 1, 1), t = ir, e = n + o | 0; c[e + 24 >> 2] = i, c[e + 28 >> 2] = t, c[e + 16 >> 2] = i, c[e + 20 >> 2] = t, c[e + 8 >> 2] = i, c[e + 12 >> 2] = t, c[e >> 2] = i, c[e + 4 >> 2] = t, e = e + 32 | 0, (a = a - 32 | 0) >>> 0 > 31;);
            return r;
          }
          function gr(r) {
            var e = 0,
              a = 0,
              i = 0,
              n = 0,
              t = 0;
            (r |= 0) && (a = n = c[(e = r - 4 | 0) >> 2], i = e, (0 | (r = -2 & (t = c[r - 8 >> 2]))) != (0 | t) && (a = c[4 + (i = e - r | 0) >> 2], c[a + 8 >> 2] = c[i + 8 >> 2], c[c[i + 8 >> 2] + 4 >> 2] = a, a = r + n | 0), (0 | (e = c[(r = e + n | 0) >> 2])) != c[(r + e | 0) - 4 >> 2] && (n = c[r + 4 >> 2], c[n + 8 >> 2] = c[r + 8 >> 2], c[c[r + 8 >> 2] + 4 >> 2] = n, a = e + a | 0), c[i >> 2] = a, c[((-4 & a) + i | 0) - 4 >> 2] = 1 | a, (e = c[i >> 2] - 8 | 0) >>> 0 <= 127 ? r = (e >>> 3 | 0) - 1 | 0 : (r = 110 + ((e >>> 29 - (a = G(e)) ^ 4) - (a << 2) | 0) | 0, e >>> 0 <= 4095 || (r = (r = 71 + ((e >>> 30 - a ^ 2) - (a << 1) | 0) | 0) >>> 0 >= 63 ? 63 : r)), e = r << 4, c[i + 4 >> 2] = e + 5888, e = e + 5896 | 0, c[i + 8 >> 2] = c[e >> 2], c[e >> 2] = i, c[c[i + 8 >> 2] + 4 >> 2] = i, e = c[1730], a = c[1731], i = 31 & r, (63 & r) >>> 0 >= 32 ? (r = 1 << i, n = 0) : r = (n = 1 << i) - 1 & 1 >>> 32 - i, c[1730] = n | e, c[1731] = r | a);
          }
          function Zr(r, e, a, i, n) {
            var t,
              f = 0,
              o = 0;
            if (ar = t = ar - 208 | 0, c[t + 204 >> 2] = a, Rr(a = t + 160 | 0, 0, 40), c[t + 200 >> 2] = c[t + 204 >> 2], (0 | fr(0, e, t + 200 | 0, t + 80 | 0, a, i, n)) < 0) n = -1;else {
              c[r + 76 >> 2], f = c[r >> 2], c[r + 72 >> 2] <= 0 && (c[r >> 2] = -33 & f);
              r: {
                e: {
                  if (c[r + 48 >> 2]) {
                    if (c[r + 16 >> 2]) break e;
                  } else c[r + 48 >> 2] = 80, c[r + 28 >> 2] = 0, c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, o = c[r + 44 >> 2], c[r + 44 >> 2] = t;
                  if (a = -1, me(r)) break r;
                }
                a = fr(r, e, t + 200 | 0, t + 80 | 0, t + 160 | 0, i, n);
              }
              o && (aa[c[r + 36 >> 2]](r, 0, 0), c[r + 48 >> 2] = 0, c[r + 44 >> 2] = o, c[r + 28 >> 2] = 0, e = c[r + 20 >> 2], c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, a = e ? a : -1), e = r, r = c[r >> 2], c[e >> 2] = r | 32 & f, n = 32 & r ? -1 : a;
            }
            return ar = t + 208 | 0, n;
          }
          function Wr(r) {
            var e,
              a = 0,
              i = y(0),
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              u = y(0),
              b = 0;
            ar = e = ar - 16 | 0;
            r: {
              if (a = c[r + 12 >> 2]) {
                if (u = m[r + 520 >> 2], i = m[r + 516 >> 2], (i = 32 & v[r + 4 | 0] ? y(aa[0 | a](r, i, u, 0)) : y(aa[0 | a](r, i, u))) == i) break r;
                c[e >> 2] = 3340, Xr(r, e), De(), k();
              }
              e: {
                a: {
                  if ((0 | (f = c[r + 556 >> 2])) != (0 | (a = c[r + 560 >> 2]))) {
                    for (b = (a = a - f >> 2) >>> 0 <= 1 ? 1 : a;;) {
                      if (t = c[(o << 2) + f >> 2], !c[t + 548 >> 2]) {
                        if (131072 != (196608 & (a = c[t + 24 >> 2]))) {
                          if ((a = a >>> 13 & 7) || (a = c[r + 24 >> 2] >>> 10 & 7), 2 & v[t + 4 | 0] | (8 & v[r + 24 | 0] ? 5 == (0 | a) : 0)) break a;
                          n = n || t;
                        }
                        if ((0 | b) != (0 | (o = o + 1 | 0))) continue;
                      }
                      break;
                    }
                    if (n) break e;
                  }
                  i = m[r + 520 >> 2];
                  break r;
                }
                n = t;
              }
              i = y(Wr(n) + m[n + 232 >> 2]);
            }
            return ar = e + 16 | 0, i;
          }
          function Vr(r, e, a, i, n, t) {
            var f = 0,
              o = y(0),
              u = 0,
              s = y(0);
            f = (c[4252 + (e << 2) >> 2] << 2) + r | 0, o = m[f + 216 >> 2];
            r: {
              e: {
                a: if (2139156720 != (0 | (f = c[f + 216 >> 2]))) {
                  if (2140081935 == (0 | f)) break e;
                  u = 4276;
                  i: {
                    if (2141891242 != (0 | f)) {
                      if (o == o) break i;
                      u = 4268;
                    }
                    switch (s = m[u >> 2], o = y(NaN), c[u + 4 >> 2] - 1 | 0) {
                      case 0:
                        break e;
                      case 1:
                        break a;
                      default:
                        break r;
                    }
                  }
                  if (b(2, 536870912 + (-1073741825 & f) | 0), s = d(), !(1073741824 & f)) break e;
                }
                o = y(y(s * a) * y(.009999999776482582));
                break r;
              }
              o = s;
            }
            i = y(o + y(Mr(r, e, i) + Ur(r, e, i)));
            r: {
              e: {
                a: switch (c[n >> 2]) {
                  case 1:
                  case 2:
                    a = m[t >> 2], i = i != i || a < i ? a : i;
                    break e;
                  case 0:
                    break a;
                  default:
                    break r;
                }
                if (i != i) break r;
                c[n >> 2] = 2;
              }
              m[t >> 2] = i;
            }
          }
          function Br(r, e, a) {
            var i,
              n = y(0),
              t = y(0),
              f = y(0);
            r = r + 116 | 0, i = c[4220 + (e << 2) >> 2];
            r: {
              e: {
                a: {
                  i: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 4, i, 2140081935)))) {
                    if (2140081935 == (0 | e)) break r;
                    r = 4276;
                    n: {
                      if (2141891242 != (0 | e)) {
                        if (b(2, e), (n = d()) == n) break n;
                        r = 4268;
                      }
                      switch (n = m[r >> 2], t = y(NaN), c[r + 4 >> 2] - 1 | 0) {
                        case 0:
                          break a;
                        case 1:
                          break i;
                        default:
                          break e;
                      }
                    }
                    if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break a;
                  }
                  n = y(y(n * a) * y(.009999999776482582));
                }
                if (n >= y(0)) return n;
                if (t = n, n < y(0)) break r;
              }
              f = t == t ? t : y(0);
            }
            return f;
          }
          function Tr(r, e, a) {
            var i,
              n = y(0),
              t = y(0),
              f = y(0);
            r = r + 116 | 0, i = c[4236 + (e << 2) >> 2];
            r: {
              e: {
                a: {
                  i: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 5, i, 2140081935)))) {
                    if (2140081935 == (0 | e)) break r;
                    r = 4276;
                    n: {
                      if (2141891242 != (0 | e)) {
                        if (b(2, e), (n = d()) == n) break n;
                        r = 4268;
                      }
                      switch (n = m[r >> 2], t = y(NaN), c[r + 4 >> 2] - 1 | 0) {
                        case 0:
                          break a;
                        case 1:
                          break i;
                        default:
                          break e;
                      }
                    }
                    if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break a;
                  }
                  n = y(y(n * a) * y(.009999999776482582));
                }
                if (n >= y(0)) return n;
                if (t = n, n < y(0)) break r;
              }
              f = t == t ? t : y(0);
            }
            return f;
          }
          function Ir(r, e, a, i, n, t) {
            var f = 0;
            r: {
              if (!r || !(t = 255 & e ? 0 | aa[0 | r](a, i, n, t) : 0 | aa[0 | r](a, i, n))) {
                if (e = Ar(t = ye(588), a, 552), c[e + 564 >> 2] = 0, c[e + 556 >> 2] = 0, c[e + 560 >> 2] = 0, (0 | (n = c[a + 556 >> 2])) != (0 | (i = c[a + 560 >> 2]))) {
                  if ((0 | (f = i - n | 0)) < 0) break r;
                  for (r = ye(f), c[e + 556 >> 2] = r, c[e + 564 >> 2] = r + f; c[r >> 2] = c[n >> 2], r = r + 4 | 0, (0 | i) != (0 | (n = n + 4 | 0)););
                  c[e + 560 >> 2] = r;
                }
                r = c[a + 572 >> 2], c[e + 568 >> 2] = c[a + 568 >> 2], c[e + 572 >> 2] = r, c[e + 584 >> 2] = c[a + 584 >> 2], r = c[a + 580 >> 2], c[e + 576 >> 2] = c[a + 576 >> 2], c[e + 580 >> 2] = r, c[e + 552 >> 2] = 0;
              }
              return t;
            }
            I(), k();
          }
          function Xr(r, e) {
            var a,
              i = 0,
              n = 0;
            ar = a = ar - 16 | 0, c[a + 12 >> 2] = e;
            r: {
              if (r) {
                if (e = c[a + 12 >> 2], i = c[r + 568 >> 2]) {
                  if (n = c[i + 4 >> 2], v[i + 9 | 0]) {
                    aa[0 | n](i, r, 5, 0, 4215, e);
                    break r;
                  }
                  aa[0 | n](i, r, 5, 4215, e);
                  break r;
                }
              } else e = c[a + 12 >> 2];
              if (v[6936]) {
                if (i = c[1733], n = c[i + 4 >> 2], v[i + 9 | 0]) {
                  aa[0 | n](i, r, 5, 0, 4215, e);
                  break r;
                }
              } else i = ye(28), o[i + 20 >> 1] = 0, c[i + 16 >> 2] = 1065353216, o[i + 10 >> 1] = 0, o[i + 12 >> 1] = 0, c[i >> 2] = 0, c[i + 24 >> 2] = 0, f[i + 9 | 0] = 0, n = 1, c[i + 4 >> 2] = 1, f[i + 22 | 0] = 0, c[1733] = i, f[6936] = 1, c[1732] = c[1732] + 1;
              aa[0 | n](i, r, 5, 4215, e);
            }
            ar = a + 16 | 0;
          }
          function Or(r, e, a) {
            var i,
              n = y(0),
              t = y(0);
            r = r + 80 | 0, i = c[4236 + (e << 2) >> 2];
            r: {
              e: {
                a: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 5, i, 2140081935)))) {
                  if (2140081935 == (0 | e)) break r;
                  r = 4276;
                  i: {
                    if (2141891242 != (0 | e)) {
                      if (b(2, e), (n = d()) == n) break i;
                      r = 4268;
                    }
                    switch (n = m[r >> 2], t = y(NaN), c[r + 4 >> 2] - 1 | 0) {
                      case 0:
                        break r;
                      case 1:
                        break a;
                      default:
                        break e;
                    }
                  }
                  if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break r;
                }
                t = y(y(n * a) * y(.009999999776482582));
              }
              return t;
            }
            return n;
          }
          function Lr(r, e, a) {
            var i,
              n = y(0),
              t = y(0);
            r = r + 80 | 0, i = c[4220 + (e << 2) >> 2];
            r: {
              e: {
                a: if (2139156720 != (0 | (e = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 4, i, 2140081935)))) {
                  if (2140081935 == (0 | e)) break r;
                  r = 4276;
                  i: {
                    if (2141891242 != (0 | e)) {
                      if (b(2, e), (n = d()) == n) break i;
                      r = 4268;
                    }
                    switch (n = m[r >> 2], t = y(NaN), c[r + 4 >> 2] - 1 | 0) {
                      case 0:
                        break r;
                      case 1:
                        break a;
                      default:
                        break e;
                    }
                  }
                  if (b(2, 536870912 + (-1073741825 & e) | 0), n = d(), !(1073741824 & e)) break r;
                }
                t = y(y(n * a) * y(.009999999776482582));
              }
              return t;
            }
            return n;
          }
          function _r(r, e, a, i) {
            var n = y(0);
            return n = m[(e = (e << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | n == n || (n = m[(e = (a << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | n == n || 2139156720 == (0 | (e = c[r + 24 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (n = m[r + 24 >> 2]) == n || (n = m[r + 32 >> 2], (2139156720 == (0 | (r = c[r + 32 >> 2])) | 2140081935 == (0 | r) | 2141891242 == (0 | r) || (e = i, n == n)) && (e = r))), e;
          }
          function Fr(r, e, a, i, n) {
            var t,
              f = 0,
              o = 0,
              u = y(0);
            f = 2, o = c[r + 24 >> 2] >>> 2 & 3;
            r: {
              e: {
                a: {
                  if (!(!c[r + 552 >> 2] | 2 != (0 | e))) {
                    e = 0, f = 3;
                    i: switch (o - 2 | 0) {
                      case 0:
                        break r;
                      case 1:
                        break i;
                      default:
                        break a;
                    }
                    f = 2;
                    break r;
                  }
                  if (e = 0, o >>> 0 > 1) break e;
                }
                e = f;
              }
              f = o;
            }
            a = _e(r, f, a), i = _e(r, e, i), u = Mr(r, f, n), m[(o = r + 228 | 0) + (c[4220 + (t = f << 2) >> 2] << 2) >> 2] = a + u, u = Ur(r, f, n), m[o + (c[t + 4236 >> 2] << 2) >> 2] = a + u, a = Mr(r, e, n), m[o + (c[4220 + (f = e << 2) >> 2] << 2) >> 2] = i + a, a = Ur(r, e, n), m[o + (c[f + 4236 >> 2] << 2) >> 2] = i + a;
          }
          function Cr(r) {
            var e = 0,
              a = 0,
              i = 0,
              n = 0;
            if (r |= 0) {
              if (e = c[r >> 2], (a = c[e + 552 >> 2]) && (ee(a, e), c[e + 552 >> 2] = 0), (0 | (i = c[e + 560 >> 2])) != (0 | (a = c[e + 556 >> 2]))) for (n = (i = i - a >> 2) >>> 0 <= 1 ? 1 : i, i = 0; c[c[a + (i << 2) >> 2] + 552 >> 2] = 0, (0 | n) != (0 | (i = i + 1 | 0)););
              c[e + 560 >> 2] = a, Sr(e + 556 | 0), (a = c[e + 556 >> 2]) && (c[e + 560 >> 2] = a, gr(a)), gr(e), e = c[r + 8 >> 2], c[r + 8 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), e = c[r + 4 >> 2], c[r + 4 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), gr(r);
            }
          }
          function Sr(r) {
            var e,
              a = 0,
              i = 0,
              n = 0,
              t = 0;
            ar = e = ar - 32 | 0, a = c[r >> 2], (i = c[r + 4 >> 2] - a >> 2) >>> 0 >= c[r + 8 >> 2] - a >> 2 >>> 0 || (i = pe(e + 8 | 0, i, i, r + 8 | 0), a = c[r >> 2], n = c[r + 4 >> 2] - a | 0, n = wr(c[i + 4 >> 2] - n | 0, a, n), a = c[r >> 2], c[r >> 2] = n, c[i + 4 >> 2] = a, n = c[r + 4 >> 2], c[r + 4 >> 2] = c[i + 8 >> 2], c[i + 8 >> 2] = n, t = c[r + 8 >> 2], c[r + 8 >> 2] = c[i + 12 >> 2], c[i >> 2] = a, c[i + 12 >> 2] = t, (0 | a) != (0 | n) && (c[i + 8 >> 2] = n + (3 + (a - n | 0) & -4)), a && gr(a)), ar = e + 32 | 0;
          }
          function Pr(r, e, a) {
            var i = 0,
              n = 0,
              t = 0;
            if (!(32 & v[0 | r])) r: {
              i = e;
              e: {
                if (!(r = c[(e = r) + 16 >> 2])) {
                  if (me(e)) break e;
                  r = c[e + 16 >> 2];
                }
                if (r - (t = c[e + 20 >> 2]) >>> 0 < a >>> 0) {
                  aa[c[e + 36 >> 2]](e, i, a);
                  break r;
                }
                a: if (!(c[e + 80 >> 2] < 0)) {
                  for (r = a;;) {
                    if (n = r, !r) break a;
                    if (10 == v[i + (r = n - 1 | 0) | 0]) break;
                  }
                  if (aa[c[e + 36 >> 2]](e, i, n) >>> 0 < n >>> 0) break e;
                  i = i + n | 0, a = a - n | 0, t = c[e + 20 >> 2];
                }
                Ar(t, i, a), c[e + 20 >> 2] = c[e + 20 >> 2] + a;
              }
            }
          }
          function Yr(r, e, a) {
            var i,
              n = 0,
              t = 0;
            ar = i = ar - 16 | 0, n = r + 24 | 0, aa[0 | e](i + 8 | 0, n), t = c[i + 12 >> 2];
            r: if ((c[c[i + 8 >> 2] >> 2] & 7 << t) >> t != (0 | a)) for (aa[0 | e](i + 8 | 0, n), n = e = c[i + 8 >> 2], t = c[e >> 2], e = c[i + 12 >> 2], c[n >> 2] = t & (7 << e ^ -1) | (7 & a) << e;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
            ar = i + 16 | 0;
          }
          function Ur(r, e, a) {
            var i,
              n = y(0);
            r = r + 44 | 0, i = c[4236 + (e << 2) >> 2];
            r: {
              if (2139156720 != (0 | (r = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 5, i, 2140081935)))) {
                if (2140081935 == (0 | r) | 2141891242 == (0 | r)) break r;
                if (b(2, r), (n = d()) != n) return y(NaN);
                if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break r;
              }
              n = y(y(n * a) * y(.009999999776482582));
            }
            return n;
          }
          function Mr(r, e, a) {
            var i,
              n = y(0);
            r = r + 44 | 0, i = c[4220 + (e << 2) >> 2];
            r: {
              if (2139156720 != (0 | (r = 2 != (-2 & e) ? Hr(r, i, 2140081935) : _r(r, 4, i, 2140081935)))) {
                if (2140081935 == (0 | r) | 2141891242 == (0 | r)) break r;
                if (b(2, r), (n = d()) != n) return y(NaN);
                if (b(2, 536870912 + (-1073741825 & r) | 0), n = d(), !(1073741824 & r)) break r;
              }
              n = y(y(n * a) * y(.009999999776482582));
            }
            return n;
          }
          function Hr(r, e, a) {
            var i = y(0);
            return i = m[(e = (e << 2) + r | 0) >> 2], 2139156720 == (0 | (e = c[e >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | i == i || 2139156720 == (0 | (e = c[r + 28 >> 2])) | 2140081935 == (0 | e) | 2141891242 == (0 | e) | (i = m[r + 28 >> 2]) == i || (i = m[r + 32 >> 2], (2139156720 == (0 | (r = c[r + 32 >> 2])) | 2140081935 == (0 | r) | 2141891242 == (0 | r) || (e = a, i == i)) && (e = r)), e;
          }
          function Qr(r, e) {
            var a,
              i = y(0);
            return r = r + 152 | 0, a = c[4236 + (e << 2) >> 2], r = 2 != (-2 & e) ? Hr(r, a, 2140081935) : _r(r, 5, a, 2140081935), i = y(0), 2139156720 != (0 | r) && (i = y(0), 2140081935 != (0 | r) && (2141891242 == (0 | r) || (b(2, r), (i = d()) != i) ? i = y(NaN) : (b(2, 536870912 + (-1073741825 & r) | 0), i = d()))), Re(i, y(0));
          }
          function zr(r, e) {
            var a,
              i = y(0);
            return r = r + 152 | 0, a = c[4220 + (e << 2) >> 2], r = 2 != (-2 & e) ? Hr(r, a, 2140081935) : _r(r, 4, a, 2140081935), i = y(0), 2139156720 != (0 | r) && (i = y(0), 2140081935 != (0 | r) && (2141891242 == (0 | r) || (b(2, r), (i = d()) != i) ? i = y(NaN) : (b(2, 536870912 + (-1073741825 & r) | 0), i = d()))), Re(i, y(0));
          }
          function jr(r, e, a, i) {
            var n,
              t = 0,
              f = 0;
            r: if ((n = (t = (t = dr(r *= e)) < 0 ? t + 1 : t) != t) | !(E(t) < 1e-4)) {
              if (t == t) {
                if (r -= t, E(t + -1) < 1e-4) {
                  r += 1;
                  break r;
                }
              } else r -= t;
              a ? r += 1 : i || (f = 0, n || (f = 1, t > .5 || (f = E(t + -.5) < 1e-4 ? 1 : 0)), r += f);
            } else r -= t;
            return y(r != r | e != e ? NaN : r / e);
          }
          function Dr(r) {
            var e = y(0),
              a = 0,
              i = y(0);
            a = 0;
            r: if (131072 != (196608 & c[r + 24 >> 2])) {
              if (c[r + 552 >> 2]) {
                if (((e = m[r + 32 >> 2]) == e || (e = m[r + 28 >> 2]) > y(0)) && (a = 1, e != y(0))) break r;
                (e = m[r + 36 >> 2]) != e && (f[r + 4 | 0] < 0 ? e = y(1) : (e = y(0), (i = m[r + 28 >> 2]) < y(0) && (e = y(-i))));
              }
              a = e != y(0);
            }
            return a;
          }
          function xr(r, e) {
            var a = y(0);
            r: {
              if (2139156720 != (0 | e)) {
                if (2140081935 != (0 | e)) {
                  if (2141891242 != (0 | e)) break r;
                  return c[r >> 2] = 2143289344, void (c[r + 4 >> 2] = 3);
                }
                return c[r >> 2] = 0, void (c[r + 4 >> 2] = 1);
              }
              return c[r >> 2] = 0, void (c[r + 4 >> 2] = 2);
            }
            if (b(2, e), (a = d()) != a) return c[r >> 2] = 2143289344, void (c[r + 4 >> 2] = 0);
            c[r + 4 >> 2] = 1073741824 & e ? 2 : 1, c[r >> 2] = 536870912 + (-1073741825 & e);
          }
          function Jr(r) {
            var e = 0,
              a = 0,
              i = 0;
            r: if (8 & (a = c[r + 24 >> 2]) && (e = 1, 5120 != (7168 & a) && (e = 0, (0 | (i = c[r + 560 >> 2])) != (0 | (a = c[r + 556 >> 2]))))) for (i = (r = i - a >> 2) >>> 0 <= 1 ? 1 : r, r = 0;;) {
              if (e = 131072 != (196608 & (e = c[c[a + (r << 2) >> 2] + 24 >> 2])) & 40960 == (57344 & e)) break r;
              if ((0 | i) == (0 | (r = r + 1 | 0))) break;
            }
            return e;
          }
          function Kr(r) {
            var e = 0,
              a = y(0);
            return e = 2143289344, y(E(r)) == y(1 / 0) | r != r || (e = 2139156720, r < y(10842021724855044e-35) & r > y(-10842021724855044e-35) | r == y(0) || (b(2, -2147483648 & (l(r), u(2)) | 1602224127), a = d(), e = 1073741824 | (l(r > y(0xffffff0000000000) || r < y(-0xffffff0000000000) ? a : r), u(2) - 536870912))), e;
          }
          function qr(r) {
            var e = 0,
              a = y(0);
            return e = 2143289344, y(E(r)) == y(1 / 0) | r != r || (e = 2140081935, r < y(10842021724855044e-35) & r > y(-10842021724855044e-35) | r == y(0) || (b(2, -2147483648 & (l(r), u(2)) | 1610612735), a = d(), e = 0 | (l(r > y(0x1fffffe0000000000) || r < y(-0x1fffffe0000000000) ? a : r), u(2) - 536870912))), e;
          }
          function $r(r, e) {
            return e ? e = Te(c[e >> 2]) : (v[6936] ? e = c[1733] : (e = ye(28), o[e + 20 >> 1] = 0, c[e + 16 >> 2] = 1065353216, o[e + 10 >> 1] = 0, o[e + 12 >> 1] = 0, c[e >> 2] = 0, c[e + 24 >> 2] = 0, f[e + 9 | 0] = 0, c[e + 4 >> 2] = 1, f[e + 22 | 0] = 0, c[1733] = e, f[6936] = 1, c[1732] = c[1732] + 1), e = Te(e)), c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, c[r >> 2] = e, c[e >> 2] = r, r;
          }
          function re(r, e, a) {
            var i = 0,
              n = 0,
              t = 0;
            if (e) for (; r = Ae(i = hr(r, e, 10), n = ir, 246, 0) + r | 0, f[0 | (a = a - 1 | 0)] = 48 | r, t = e >>> 0 > 9, r = i, e = n, t;);else i = r;
            if (i) for (; r = (i >>> 0) / 10 | 0, f[0 | (a = a - 1 | 0)] = w(r, 246) + i | 48, e = i >>> 0 > 9, i = r, e;);
            return a;
          }
          function ee(r, e) {
            var a = 0,
              i = 0;
            r: {
              e: if ((0 | (a = c[r + 556 >> 2])) != (0 | (i = c[r + 560 >> 2]))) {
                for (;;) {
                  if (c[a >> 2] == (0 | e)) break e;
                  if ((0 | i) == (0 | (a = a + 4 | 0))) break;
                }
                break r;
              }
              if ((0 | a) != (0 | i)) return wr(a, e = a + 4 | 0, i - e | 0), c[r + 560 >> 2] = i - 4, 1;
            }
            return 0;
          }
          function ae(r, e) {
            var a,
              i,
              n = 0;
            if (A(+r), a = 0 | u(1), i = 0 | u(0), 2047 != (0 | (n = a >>> 20 & 2047))) {
              if (!n) return 0 == r ? n = 0 : (r = ae(0x10000000000000000 * r, e), n = c[e >> 2] + -64 | 0), c[e >> 2] = n, r;
              c[e >> 2] = n - 1022, b(0, 0 | i), b(1, -2146435073 & a | 1071644672), r = +s();
            }
            return r;
          }
          function ie(r, e, a) {
            var i = 0;
            r: if (c[184 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[184 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function ne(r, e, a) {
            var i = 0;
            r: if (c[192 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[192 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function te(r, e, a) {
            var i = 0;
            r: if (c[176 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[176 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function fe(r, e) {
            var a = 0,
              i = 0,
              n = 0;
            r: if (c[16 + (a = r + 24 | 0) >> 2] != (0 | e)) for (i = 0 | aa[9](a), n = e, c[i + 16 >> 2] = n;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function oe(r, e, a) {
            var i = 0;
            r: if (c[56 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[56 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function ce(r, e, a) {
            var i = 0;
            r: if (c[92 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[92 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function ue(r, e, a) {
            var i = 0;
            r: if (c[20 + ((i = r + 24 | 0) + (e << 2) | 0) >> 2] != (0 | a)) for (c[20 + ((e << 2) + i | 0) >> 2] = a;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }
          function be(r, e) {
            var a,
              i = y(0);
            return r = r + 80 | 0, a = c[4236 + (e << 2) >> 2], 2139156720 == (0 | (r = 2 != (-2 & e) ? Hr(r, a, 2143289344) : _r(r, 5, a, 2143289344))) | 2140081935 == (0 | r) | 2141891242 == (0 | r) ? r = 1 : (b(2, r), r = (i = d()) == i), r;
          }
          function se(r, e) {
            var a,
              i = y(0);
            return r = r + 80 | 0, a = c[4220 + (e << 2) >> 2], 2139156720 == (0 | (r = 2 != (-2 & e) ? Hr(r, a, 2143289344) : _r(r, 4, a, 2143289344))) | 2140081935 == (0 | r) | 2141891242 == (0 | r) ? r = 1 : (b(2, r), r = (i = d()) == i), r;
          }
          function Ae(r, e, a, i) {
            var n,
              t,
              f,
              o,
              c = 0,
              u = 0;
            return o = w(c = a >>> 16 | 0, u = r >>> 16 | 0), c = (65535 & (u = ((f = w(n = 65535 & a, t = 65535 & r)) >>> 16 | 0) + w(u, n) | 0)) + w(c, t) | 0, ir = (w(e, a) + o | 0) + w(r, i) + (u >>> 16) + (c >>> 16) | 0, 65535 & f | c << 16;
          }
          function ke(r, e) {
            var a,
              i,
              n = 0;
            ar = a = ar - 16 | 0, i = -17 & (n = v[r + 4 | 0]), f[r + 4 | 0] = i;
            r: {
              if (e) {
                if (c[r + 560 >> 2] != c[r + 556 >> 2]) break r;
                n = 8 | i;
              } else n &= 231;
              return c[r + 8 >> 2] = e, f[r + 4 | 0] = n, void (ar = a + 16 | 0);
            }
            c[a >> 2] = 4059, Xr(r, a), De(), k();
          }
          function le(r, e, a, i, n) {
            var t;
            if (ar = t = ar - 256 | 0, !(73728 & n | (0 | a) <= (0 | i))) {
              if (Rr(t, 255 & e, (a = (i = a - i | 0) >>> 0 < 256) ? i : 256), !a) for (; Pr(r, t, 256), (i = i - 256 | 0) >>> 0 > 255;);
              Pr(r, t, i);
            }
            ar = t + 256 | 0;
          }
          function de(r, e, a) {
            var i = 0,
              n = y(0);
            2 == (-2 & a) && (n = m[(i = e - -64 | 0) >> 2], 2139156720 == (0 | (i = c[i >> 2])) | 2140081935 == (0 | i) | 2141891242 == (0 | i) | n == n) || (i = c[44 + ((c[4236 + (a << 2) >> 2] << 2) + e | 0) >> 2]), xr(r, i);
          }
          function ve(r, e, a) {
            var i = 0,
              n = y(0);
            2 == (-2 & a) && 2139156720 == (0 | (i = c[e + 60 >> 2])) | 2140081935 == (0 | i) | 2141891242 == (0 | i) | (n = m[e + 60 >> 2]) == n || (i = c[44 + ((c[4220 + (a << 2) >> 2] << 2) + e | 0) >> 2]), xr(r, i);
          }
          function he(r) {
            var e = 0,
              a = 0,
              i = 0;
            for (i = c[r >> 2]; xe(a = f[0 | i]);) i = i + 1 | 0, c[r >> 2] = i, e = e >>> 0 <= 214748364 ? (0 | (a = a - 48 | 0)) > (2147483647 ^ (e = w(e, 10))) ? -1 : a + e | 0 : -1;
            return e;
          }
          function pe(r, e, a, i) {
            var n = 0;
            c[r + 12 >> 2] = 0, c[r + 16 >> 2] = i;
            r: {
              if (e) {
                if (e >>> 0 >= 1073741824) break r;
                n = ye(e << 2);
              }
              return c[r >> 2] = n, a = (a << 2) + n | 0, c[r + 8 >> 2] = a, c[r + 12 >> 2] = (e << 2) + n, c[r + 4 >> 2] = a, r;
            }
            ea(), k();
          }
          function me(r) {
            var e = 0;
            return e = c[r + 72 >> 2], c[r + 72 >> 2] = e - 1 | e, 8 & (e = c[r >> 2]) ? (c[r >> 2] = 32 | e, -1) : (c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, e = c[r + 44 >> 2], c[r + 28 >> 2] = e, c[r + 20 >> 2] = e, c[r + 16 >> 2] = e + c[r + 48 >> 2], 0);
          }
          function Ne(r, e, a, i) {
            e |= 0, a |= 0, i |= 0;
            var n = 0;
            n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](e, a, i);
          }
          function we(r, e, a) {
            e |= 0, a |= 0;
            var i = 0;
            return i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), 0 | aa[0 | i](e, a);
          }
          function ye(r) {
            var e = 0;
            r = r || 1;
            r: {
              for (;;) {
                if (e = cr(r)) break r;
                if (!(e = c[2022])) break;
                aa[0 | e]();
              }
              I(), k();
            }
            return e;
          }
          function Ee(r, e, a) {
            e |= 0, a |= 0;
            var i = 0;
            i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](e, a);
          }
          function Ge(r, e) {
            e |= 0;
            var a = 0;
            return a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), 0 | aa[0 | a](e);
          }
          function Re(r, e) {
            return (2147483647 & (l(r), u(2))) >>> 0 <= 2139095040 ? (2147483647 & (l(e), u(2))) >>> 0 > 2139095040 ? r : y(g(r, e)) : e;
          }
          function ge(r, e) {
            return (2147483647 & (l(r), u(2))) >>> 0 <= 2139095040 ? (2147483647 & (l(e), u(2))) >>> 0 > 2139095040 ? r : y(R(r, e)) : e;
          }
          function Ze(r, e) {
            var a;
            return r |= 0, e |= 0, ar = a = ar - 16 | 0, c[a + 8 >> 2] = e, r = 0 | aa[0 | r](a + 8 | 0), X(c[a + 8 >> 2]), ar = a + 16 | 0, 0 | r;
          }
          function We(r, e) {
            return r ? (57216 == (-128 & e) | e >>> 0 <= 127 ? (f[0 | r] = e, r = 1) : (c[1761] = 25, r = -1), r) : 0;
          }
          function Ve(r, e) {
            var a, i;
            a = ye(4), c[a >> 2] = e, i = ye(4), c[i >> 2] = e, O(6955, 0 | r, 7018, 4630, 192, 0 | a, 7018, 4634, 193, 0 | i);
          }
          function Be(r, e) {
            var a, i;
            a = ye(4), c[a >> 2] = e, i = ye(4), c[i >> 2] = e, O(6985, 0 | r, 7018, 4630, 190, 0 | a, 7018, 4634, 191, 0 | i);
          }
          function Te(r) {
            var e, a;
            return ar = e = ar - 16 | 0, a = br(ye(588), r), r || (c[e >> 2] = 2759, Xr(0, e), De(), k()), ar = e + 16 | 0, a;
          }
          function Ie(r, e) {
            var a = 0;
            1 & f[6964] ? a = c[1740] : (a = 0 | C(1, 4400), f[6964] = 1, c[1740] = a), z(0 | a, 0 | r, 0 | e, 0);
          }
          function Xe(r, e) {
            e |= 0;
            var a = 0;
            a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), aa[0 | a](e);
          }
          function Oe(r) {
            return c[(r |= 0) >> 2] = 4508, v[r + 4 | 0] && Ie(c[r + 8 >> 2], 1758), X(c[r + 8 >> 2]), 0 | r;
          }
          function Le(r) {
            return c[(r |= 0) >> 2] = 4388, v[r + 4 | 0] && Ie(c[r + 8 >> 2], 1758), X(c[r + 8 >> 2]), 0 | r;
          }
          function _e(r, e, a) {
            return se(r, e) ? Lr(r, e, a) : ((a = Or(r, e, a)) == a && (a = y(-a)), a);
          }
          function Fe(r) {
            var e = 0;
            (r |= 0) && ((e = c[r >> 2]) && gr(e), c[1732] = c[1732] - 1, gr(r));
          }
          function Ce(r, e, a) {
            e |= 0, a = +a, N[c[(r |= 0) >> 2] + e >> 3] = a;
          }
          function Se(r, e) {
            return e |= 0, +N[c[(r |= 0) >> 2] + e >> 3];
          }
          function Pe(r) {
            (r |= 0) && aa[c[c[r >> 2] + 4 >> 2]](r);
          }
          function Ye(r) {
            return r ? (c[1761] = r, -1) : 0;
          }
          function Ue(r, e, a) {
            return y(Mr(r, e, a) + Ur(r, e, a));
          }
          function Me(r, e, a, i) {
            D(0 | r, 0 | e, 8, 0, 0 | a, -1, 0 | i);
          }
          function He(r, e) {
            e |= 0, aa[c[(r |= 0) >> 2]](e);
          }
          function Qe(r, e, a) {
            return Zr(r, e, a, 2, 3);
          }
          function ze(r) {
            return 0 | aa[0 | (r |= 0)]();
          }
          function je(r, e) {
            e |= 0, aa[0 | (r |= 0)](e);
          }
          function De() {
            aa[c[1470]](), ea(), k();
          }
          function xe(r) {
            return r - 48 >>> 0 < 10;
          }
          function Je(r) {
            (r |= 0) && gr(r);
          }
          function Ke(r) {
            return 0 | r;
          }
          function qe(r) {
            f[4 + (r |= 0) | 0] = 1;
          }
          function $e(r) {
            k();
          }
          function ra() {
            ea(), k();
          }
          function ea() {
            I(), k();
          }
          n(e = v, 1024, "T25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zc2hvdWxkIG1hbnVhbGx5IG1hcmsgdGhlbXNlbHZlcyBhcyBkaXJ0eQBpc0RpcnR5AG1hcmtEaXJ0eQBkZXN0cm95AHNldERpc3BsYXkAZ2V0RGlzcGxheQBzZXRGbGV4AC0rICAgMFgweAAtMFgrMFggMFgtMHgrMHggMHgAc2V0RmxleEdyb3cAZ2V0RmxleEdyb3cAc2V0T3ZlcmZsb3cAZ2V0T3ZlcmZsb3cAY2FsY3VsYXRlTGF5b3V0AGdldENvbXB1dGVkTGF5b3V0AHVuc2lnbmVkIHNob3J0AGdldENoaWxkQ291bnQAdW5zaWduZWQgaW50AHNldEp1c3RpZnlDb250ZW50AGdldEp1c3RpZnlDb250ZW50AHNldEFsaWduQ29udGVudABnZXRBbGlnbkNvbnRlbnQAZ2V0UGFyZW50AGltcGxlbWVudABzZXRNYXhIZWlnaHRQZXJjZW50AHNldEhlaWdodFBlcmNlbnQAc2V0TWluSGVpZ2h0UGVyY2VudABzZXRGbGV4QmFzaXNQZXJjZW50AHNldFBvc2l0aW9uUGVyY2VudABzZXRNYXJnaW5QZXJjZW50AHNldE1heFdpZHRoUGVyY2VudABzZXRXaWR0aFBlcmNlbnQAc2V0TWluV2lkdGhQZXJjZW50AHNldFBhZGRpbmdQZXJjZW50AGNyZWF0ZURlZmF1bHQAdW5pdAByaWdodABoZWlnaHQAc2V0TWF4SGVpZ2h0AGdldE1heEhlaWdodABzZXRIZWlnaHQAZ2V0SGVpZ2h0AHNldE1pbkhlaWdodABnZXRNaW5IZWlnaHQAZ2V0Q29tcHV0ZWRIZWlnaHQAZ2V0Q29tcHV0ZWRSaWdodABsZWZ0AGdldENvbXB1dGVkTGVmdAByZXNldABfX2Rlc3RydWN0AGZsb2F0AHVpbnQ2NF90AHVzZVdlYkRlZmF1bHRzAHNldFVzZVdlYkRlZmF1bHRzAHNldEFsaWduSXRlbXMAZ2V0QWxpZ25JdGVtcwBzZXRGbGV4QmFzaXMAZ2V0RmxleEJhc2lzAENhbm5vdCBnZXQgbGF5b3V0IHByb3BlcnRpZXMgb2YgbXVsdGktZWRnZSBzaG9ydGhhbmRzAHVzZUxlZ2FjeVN0cmV0Y2hCZWhhdmlvdXIAc2V0VXNlTGVnYWN5U3RyZXRjaEJlaGF2aW91cgBzZXRQb2ludFNjYWxlRmFjdG9yAE1lYXN1cmVDYWxsYmFja1dyYXBwZXIARGlydGllZENhbGxiYWNrV3JhcHBlcgBDYW5ub3QgcmVzZXQgYSBub2RlIHN0aWxsIGF0dGFjaGVkIHRvIGEgb3duZXIAc2V0Qm9yZGVyAGdldEJvcmRlcgBnZXRDb21wdXRlZEJvcmRlcgB1bnNpZ25lZCBjaGFyAHRvcABnZXRDb21wdXRlZFRvcABzZXRGbGV4V3JhcABnZXRGbGV4V3JhcABzZXRHYXAAZ2V0R2FwACVwAHNldEhlaWdodEF1dG8Ac2V0RmxleEJhc2lzQXV0bwBzZXRNYXJnaW5BdXRvAHNldFdpZHRoQXV0bwBTY2FsZSBmYWN0b3Igc2hvdWxkIG5vdCBiZSBsZXNzIHRoYW4gemVybwBzZXRBc3BlY3RSYXRpbwBnZXRBc3BlY3RSYXRpbwBzZXRQb3NpdGlvbgBnZXRQb3NpdGlvbgBub3RpZnlPbkRlc3RydWN0aW9uAHNldEZsZXhEaXJlY3Rpb24AZ2V0RmxleERpcmVjdGlvbgBzZXRNYXJnaW4AZ2V0TWFyZ2luAGdldENvbXB1dGVkTWFyZ2luAG5hbgBib3R0b20AZ2V0Q29tcHV0ZWRCb3R0b20AYm9vbABlbXNjcmlwdGVuOjp2YWwAc2V0RmxleFNocmluawBnZXRGbGV4U2hyaW5rAE1lYXN1cmVDYWxsYmFjawBEaXJ0aWVkQ2FsbGJhY2sAd2lkdGgAc2V0TWF4V2lkdGgAZ2V0TWF4V2lkdGgAc2V0V2lkdGgAZ2V0V2lkdGgAc2V0TWluV2lkdGgAZ2V0TWluV2lkdGgAZ2V0Q29tcHV0ZWRXaWR0aAB1bnNpZ25lZCBsb25nAHN0ZDo6d3N0cmluZwBzdGQ6OnN0cmluZwBzdGQ6OnUxNnN0cmluZwBzdGQ6OnUzMnN0cmluZwBzZXRQYWRkaW5nAGdldFBhZGRpbmcAZ2V0Q29tcHV0ZWRQYWRkaW5nAFRyaWVkIHRvIGNvbnN0cnVjdCBZR05vZGUgd2l0aCBudWxsIGNvbmZpZwBjcmVhdGVXaXRoQ29uZmlnAGluZgBzZXRBbGlnblNlbGYAZ2V0QWxpZ25TZWxmAFNpemUAdmFsdWUAVmFsdWUAY3JlYXRlAG1lYXN1cmUAc2V0UG9zaXRpb25UeXBlAGdldFBvc2l0aW9uVHlwZQBpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAY29weVN0eWxlAGRvdWJsZQBOb2RlAGV4dGVuZABpbnNlcnRDaGlsZABnZXRDaGlsZAByZW1vdmVDaGlsZAB2b2lkAGF2YWlsYWJsZUhlaWdodCBpcyBpbmRlZmluaXRlIHNvIGhlaWdodE1lYXN1cmVNb2RlIG11c3QgYmUgWUdNZWFzdXJlTW9kZVVuZGVmaW5lZABhdmFpbGFibGVXaWR0aCBpcyBpbmRlZmluaXRlIHNvIHdpZHRoTWVhc3VyZU1vZGUgbXVzdCBiZSBZR01lYXN1cmVNb2RlVW5kZWZpbmVkAHNldEV4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGlzRXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAZGlydGllZABDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZAB1bnNldE1lYXN1cmVGdW5jAHVuc2V0RGlydGllZEZ1bmMARXhwZWN0IGN1c3RvbSBiYXNlbGluZSBmdW5jdGlvbiB0byBub3QgcmV0dXJuIE5hTgBOQU4ASU5GAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4Ac3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AQ2hpbGQgYWxyZWFkeSBoYXMgYSBvd25lciwgaXQgbXVzdCBiZSByZW1vdmVkIGZpcnN0LgBDYW5ub3Qgc2V0IG1lYXN1cmUgZnVuY3Rpb246IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAENhbm5vdCBhZGQgY2hpbGQ6IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAChudWxsKQAlcwoAAAEAAAADAAAAAAAAAAIAAAADAAAAAQAAAAIAAAAAAAAAAQAAAAE="), n(e, 4270, "wH8AAAAAAADAfwMAAABpaQB2AHZp"), n(e, 4304, "KxsAACkbAABpGwAAYxsAAGkbAABjGwAAaWlpZmlmaQBcGwAALBsAAHZpaQAtGwAAcBsAAGlpaQ=="), n(e, 4368, "wwAAAMQAAADF"), n(e, 4388, "wwAAAMYAAADHAAAAXBs="), n(e, 4416, "KxsAAGkbAABjGwAAaRsAAGMbAABwGwAAaxsAAHAbAABpaWlpAAAAAFwbAABBGwAAXBsAAEMbAABEGwAAcBs="), n(e, 4488, "yAAAAMkAAADK"), n(e, 4508, "yAAAAMsAAADHAAAARxsAAFwbAABHGw=="), n(e, 4544, "XBsAAEcbAABjGwAAXRsAAHZpaWlpAAAAXBsAAEcbAABpGwAAdmlpZgAAAABcGwAARxsAAF0bAAB2aWlpAAAAAF0bAABIGwAAYxsAAF0bAABHGwAAaQBkaWkAdmlpZAAATBsAAEwbAABHGwAAXBsAAEwbAABcGwAATBsAAEsbAABcGwAATBsAAGMbAAAAAAAAXBsAAEwbAABjGwAAahsAAHZpaWlkAAAAXBsAAEwbAABqGwAAYxsAAE0bAABKGwAATRsAAGMbAABKGwAATRsAAGobAABNGwAAahsAAE0bAABjGwAAZGlpaQAAAABpGwAATBsAAGMbAABmaWlpAAAAAFwbAABMGwAATBsAAGQbAABcGwAATBsAAEwbAABkGwAATRsAAEwbAABMGwAATBsAAEwbAABkGwAAXRsAAEwbAABcGwAATBsAAF0bAABcGwAATBsAACkbAABcGwAATBsAAEEbAABdGwAATRsAAAAAAABcGwAATBsAAGobAABqGwAAYxsAAHZpaWRkaQAASRsAAE0b"), n(e, 4960, "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk="), n(e, 5041, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO"), n(e, 5099, "DA=="), n(e, 5111, "EwAAAAATAAAAAAkMAAAAAAAMAAAM"), n(e, 5157, "EA=="), n(e, 5169, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ"), n(e, 5215, "Eg=="), n(e, 5227, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa"), n(e, 5282, "GgAAABoaGgAAAAAAAAk="), n(e, 5331, "FA=="), n(e, 5343, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU"), n(e, 5389, "Fg=="), n(e, 5401, "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG"), n(e, 5476, "0Q=="), n(e, 5516, "//////////8="), n(e, 5584, "oB8BAAAAAAAF"), n(e, 5604, "zA=="), n(e, 5628, "zQAAAM4AAACEGw=="), n(e, 5652, "Ag=="), n(e, 5668, "//////////8="), n(e, 5736, "BQ=="), n(e, 5748, "zw=="), n(e, 5772, "zQAAANAAAACYGwAAAAQ="), n(e, 5796, "AQ=="), n(e, 5812, "/////wo="), n(e, 5880, "0g==");
          var aa = function (r) {
            return r.set = function (r, e) {
              this[r] = e;
            }, r.get = function (r) {
              return this[r];
            }, r;
          }([null, function (r, e, a, i, n) {
            return i |= 0, n |= 0, (a |= 0) && 5 != (0 | a) ? 0 | Qe(5736, i, n) : 0 | Qe(5592, i, n);
          }, function (r, e, a, i, n, t) {
            r |= 0, e = +e, a |= 0, i |= 0, n |= 0, t |= 0;
            var o,
              b = 0,
              s = 0,
              k = 0,
              l = 0,
              d = 0,
              h = 0,
              p = 0,
              m = 0,
              N = 0,
              y = 0,
              G = 0,
              R = 0,
              g = 0,
              Z = 0,
              W = 0,
              V = 0,
              B = 0,
              T = 0;
            ar = o = ar - 560 | 0, c[o + 44 >> 2] = 0, A(+e), b = 0 | u(1), u(0), (0 | b) < 0 ? (R = 1, B = 1176, A(+(e = -e)), b = 0 | u(1), u(0)) : 2048 & n ? (R = 1, B = 1179) : (B = (R = 1 & n) ? 1182 : 1177, T = !R);
            r: if (2146435072 != (2146435072 & b)) {
              Z = o + 16 | 0;
              e: {
                a: {
                  i: {
                    if (e = ae(e, o + 44 | 0), 0 != (e += e)) {
                      if (b = c[o + 44 >> 2], c[o + 44 >> 2] = b - 1, 97 != (0 | (W = 32 | t))) break i;
                      break e;
                    }
                    if (97 == (0 | (W = 32 | t))) break e;
                    d = c[o + 44 >> 2], h = (0 | i) < 0 ? 6 : i;
                    break a;
                  }
                  d = b - 29 | 0, c[o + 44 >> 2] = d, e *= 268435456, h = (0 | i) < 0 ? 6 : i;
                }
                for (s = y = (o + 48 | 0) + ((0 | d) >= 0 ? 288 : 0) | 0; i = e < 4294967296 & e >= 0 ? ~~e >>> 0 : 0, c[s >> 2] = i, s = s + 4 | 0, 0 != (e = 1e9 * (e - +(i >>> 0))););
                if ((0 | d) <= 0) i = d, b = s, k = y;else for (k = y, i = d;;) {
                  if (m = (0 | i) >= 29 ? 29 : i, !(k >>> 0 > (b = s - 4 | 0) >>> 0)) {
                    for (i = 0; l = c[b >> 2], V = i, i = 31 & m, (63 & m) >>> 0 >= 32 ? (p = l << i, i = 0) : (p = (1 << i) - 1 & l >>> 32 - i, i = l << i), l = p + N | 0, l = Ae(i = hr(V = V + i | 0, i >>> 0 > V >>> 0 ? l + 1 | 0 : l, 1e9), ir, -1e9, 0) + V | 0, c[b >> 2] = l, k >>> 0 <= (b = b - 4 | 0) >>> 0;);
                    i && (c[(k = k - 4 | 0) >> 2] = i);
                  }
                  for (; k >>> 0 < (b = s) >>> 0 && !c[(s = b - 4 | 0) >> 2];);
                  if (i = c[o + 44 >> 2] - m | 0, c[o + 44 >> 2] = i, s = b, !((0 | i) > 0)) break;
                }
                if ((0 | i) < 0) for (g = 1 + ((h + 25 >>> 0) / 9 | 0) | 0, N = 102 == (0 | W);;) {
                  if (p = (0 | (i = 0 - i | 0)) >= 9 ? 9 : i, b >>> 0 <= k >>> 0) s = c[k >> 2];else {
                    for (m = 1e9 >>> p | 0, l = -1 << p ^ -1, i = 0, s = k; V = i, i = c[s >> 2], c[s >> 2] = V + (i >>> p | 0), i = w(m, i & l), (s = s + 4 | 0) >>> 0 < b >>> 0;);
                    s = c[k >> 2], i && (c[b >> 2] = i, b = b + 4 | 0);
                  }
                  if (i = p + c[o + 44 >> 2] | 0, c[o + 44 >> 2] = i, k = (!s << 2) + k | 0, b = b - (s = N ? y : k) >> 2 > (0 | g) ? s + (g << 2) | 0 : b, !((0 | i) < 0)) break;
                }
                if (i = 0, !(b >>> 0 <= k >>> 0 || (i = w(y - k >> 2, 9), s = 10, (l = c[k >> 2]) >>> 0 < 10))) for (; i = i + 1 | 0, l >>> 0 >= (s = w(s, 10)) >>> 0;);
                if ((0 | (s = (h - (102 != (0 | W) ? i : 0) | 0) - (103 == (0 | W) & 0 != (0 | h)) | 0)) < (w(b - y >> 2, 9) - 9 | 0)) {
                  if (d = ((((0 | d) < 0 ? 4 : 292) + o | 0) + ((l = (0 | (m = s + 9216 | 0)) / 9 | 0) << 2) | 0) - 4048 | 0, s = 10, (0 | (p = m + w(l, -9) | 0)) <= 7) for (; s = w(s, 10), 8 != (0 | (p = p + 1 | 0)););
                  if (!((0 | (m = c[d >> 2])) == (0 | (N = w(g = (m >>> 0) / (s >>> 0) | 0, s))) & (0 | (l = d + 4 | 0)) == (0 | b)) && (m = m - N | 0, !(1 & g) && (e = 9007199254740992, !(1 & f[d - 4 | 0]) | 1e9 != (0 | s) | k >>> 0 >= d >>> 0) || (e = 9007199254740994), G = (0 | b) == (0 | l) ? 1 : 1.5, G = (l = s >>> 1 | 0) >>> 0 > m >>> 0 ? .5 : (0 | l) == (0 | m) ? G : 1.5, 45 != v[0 | B] | T || (G = -G, e = -e), c[d >> 2] = N, e + G != e)) {
                    if (i = s + N | 0, c[d >> 2] = i, i >>> 0 >= 1e9) for (; c[d >> 2] = 0, (d = d - 4 | 0) >>> 0 < k >>> 0 && (c[(k = k - 4 | 0) >> 2] = 0), i = c[d >> 2] + 1 | 0, c[d >> 2] = i, i >>> 0 > 999999999;);
                    if (i = w(y - k >> 2, 9), s = 10, !((l = c[k >> 2]) >>> 0 < 10)) for (; i = i + 1 | 0, l >>> 0 >= (s = w(s, 10)) >>> 0;);
                  }
                  b = b >>> 0 > (s = d + 4 | 0) >>> 0 ? s : b;
                }
                for (; l = b, !(m = b >>> 0 <= k >>> 0) && !c[(b = l - 4 | 0) >> 2];);
                if (103 == (0 | W)) {
                  if (h = ((b = (0 | (s = h || 1)) > (0 | i) & (0 | i) > -5) ? -1 ^ i : -1) + s | 0, t = (b ? -1 : -2) + t | 0, !(d = 8 & n)) {
                    if (b = -9, !m && (d = c[l - 4 >> 2]) && (p = 10, b = 0, !((d >>> 0) % 10 | 0))) {
                      for (; s = b, b = b + 1 | 0, !((d >>> 0) % ((p = w(p, 10)) >>> 0) | 0););
                      b = -1 ^ s;
                    }
                    s = w(l - y >> 2, 9), 70 != (-33 & t) ? (d = 0, h = (0 | (b = (0 | (b = ((i + s | 0) + b | 0) - 9 | 0)) > 0 ? b : 0)) > (0 | h) ? h : b) : (d = 0, h = (0 | (b = (0 | (b = (b + s | 0) - 9 | 0)) > 0 ? b : 0)) > (0 | h) ? h : b);
                  }
                } else d = 8 & n;
                if (p = -1, (0 | ((m = d | h) ? 2147483645 : 2147483646)) < (0 | h)) break r;
                if (N = 1 + ((0 != (0 | m)) + h | 0) | 0, 70 != (0 | (s = -33 & t))) {
                  if ((Z - (b = re(((b = i >> 31) ^ i) - b | 0, 0, Z)) | 0) <= 1) for (; f[0 | (b = b - 1 | 0)] = 48, (Z - b | 0) < 2;);
                  if (f[0 | (g = b - 2 | 0)] = t, f[b - 1 | 0] = (0 | i) < 0 ? 45 : 43, (0 | (b = Z - g | 0)) > (2147483647 ^ N)) break r;
                } else {
                  if ((2147483647 ^ N) < (0 | i)) break r;
                  b = (0 | i) > 0 ? i : 0;
                }
                if ((0 | (i = b + N | 0)) > (2147483647 ^ R)) break r;
                le(r, 32, a, N = i + R | 0, n), Pr(r, B, R), le(r, 48, a, N, 65536 ^ n);
                a: {
                  i: {
                    n: {
                      if (70 == (0 | s)) {
                        for (i = 8 | (t = o + 16 | 0), d = 9 | t, k = s = k >>> 0 > y >>> 0 ? y : k;;) {
                          b = re(c[k >> 2], 0, d);
                          t: if ((0 | s) == (0 | k)) (0 | b) == (0 | d) && (f[o + 24 | 0] = 48, b = i);else {
                            if (o + 16 >>> 0 >= b >>> 0) break t;
                            for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                          }
                          if (Pr(r, b, d - b | 0), !(y >>> 0 >= (k = k + 4 | 0) >>> 0)) break;
                        }
                        if (m && Pr(r, 4206, 1), (0 | h) <= 0 | k >>> 0 >= l >>> 0) break n;
                        for (;;) {
                          if ((b = re(c[k >> 2], 0, d)) >>> 0 > o + 16 >>> 0) for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                          if (Pr(r, b, (0 | h) >= 9 ? 9 : h), b = h - 9 | 0, l >>> 0 <= (k = k + 4 | 0) >>> 0) break i;
                          if (i = (0 | h) > 9, h = b, !i) break;
                        }
                        break i;
                      }
                      t: if (!((0 | h) < 0)) for (y = k >>> 0 < l >>> 0 ? l : k + 4 | 0, i = 8 | (t = o + 16 | 0), l = 9 | t, s = k;;) {
                        (0 | l) == (0 | (b = re(c[s >> 2], 0, l))) && (f[o + 24 | 0] = 48, b = i);
                        f: if ((0 | s) == (0 | k)) Pr(r, b, 1), b = b + 1 | 0, d | h && Pr(r, 4206, 1);else {
                          if (o + 16 >>> 0 >= b >>> 0) break f;
                          for (; f[0 | (b = b - 1 | 0)] = 48, o + 16 >>> 0 < b >>> 0;);
                        }
                        if (Pr(r, b, (0 | (t = l - b | 0)) > (0 | h) ? h : t), h = h - t | 0, y >>> 0 <= (s = s + 4 | 0) >>> 0) break t;
                        if (!((0 | h) >= 0)) break;
                      }
                      le(r, 48, h + 18 | 0, 18, 0), Pr(r, g, Z - g | 0);
                      break a;
                    }
                    b = h;
                  }
                  le(r, 48, b + 9 | 0, 9, 0);
                }
                le(r, 32, a, N, 8192 ^ n), p = (0 | a) < (0 | N) ? N : a;
                break r;
              }
              if (d = (t << 26 >> 31 & 9) + B | 0, !(i >>> 0 > 11)) {
                for (b = 12 - i | 0, G = 16; G *= 16, b = b - 1 | 0;);
                e = 45 != v[0 | d] ? e + G - G : -(G + (-e - G));
              }
              for (y = 2 | R, k = 32 & t, (0 | Z) == (0 | (b = re(((b = (s = c[o + 44 >> 2]) >> 31) ^ s) - b | 0, 0, Z))) && (f[o + 15 | 0] = 48, b = o + 15 | 0), f[0 | (h = b - 2 | 0)] = t + 15, f[b - 1 | 0] = (0 | s) < 0 ? 45 : 43, b = 8 & n, s = o + 16 | 0; t = s, l = E(e) < 2147483648 ? ~~e : -2147483648, f[0 | s] = k | v[l + 5424 | 0], !(b | (0 | i) > 0) & 0 == (e = 16 * (e - +(0 | l))) | 1 != ((s = t + 1 | 0) - (o + 16 | 0) | 0) || (f[t + 1 | 0] = 46, s = t + 2 | 0), 0 != e;);
              p = -1, (2147483645 - (t = (b = Z - h | 0) + y | 0) | 0) < (0 | i) || (le(r, 32, a, t = (i = !i || ((k = s - (o + 16 | 0) | 0) - 2 | 0) >= (0 | i) ? k = s - (o + 16 | 0) | 0 : i + 2 | 0) + t | 0, n), Pr(r, d, y), le(r, 48, a, t, 65536 ^ n), Pr(r, o + 16 | 0, k), le(r, 48, i - k | 0, 0, 0), Pr(r, h, b), le(r, 32, a, t, 8192 ^ n), p = (0 | a) < (0 | t) ? t : a);
            } else le(r, 32, a, b = R + 3 | 0, -65537 & n), Pr(r, B, R), i = 32 & t, Pr(r, e != e ? i ? 2450 : 3390 : i ? 2819 : 3394, 3), le(r, 32, a, b, 8192 ^ n), p = (0 | a) < (0 | b) ? b : a;
            return ar = o + 560 | 0, 0 | p;
          }, function (r, e) {
            r |= 0;
            var a,
              i,
              n,
              t,
              f,
              o = 0,
              u = 0,
              A = 0,
              k = 0,
              l = 0,
              d = 0,
              v = 0,
              h = 0,
              p = 0,
              m = 0,
              w = 0;
            o = e |= 0, e = c[e >> 2] + 7 & -8, c[o >> 2] = e + 16, n = r, d = c[e >> 2], u = c[e + 4 >> 2], i = r = c[e + 12 >> 2], ar = a = ar - 32 | 0, l = r &= 2147483647;
            r: if ((0 | (A = r - 1006698496 | 0)) == (0 | (r = r - 1140785152 | 0)) & (e = o = c[e + 8 >> 2]) >>> 0 < e >>> 0 | r >>> 0 > A >>> 0) {
              if (e = (r = o) << 4 | u >>> 28, r = o = i << 4 | r >>> 28, 134217728 == (0 | (u &= 268435455)) & 0 != (0 | d) | u >>> 0 > 134217728) {
                r = r + 1073741824 | 0, r = (e = e + 1 | 0) ? r : r + 1 | 0;
                break r;
              }
              if (r = r + 1073741824 | 0, d | 134217728 != (0 | u)) break r;
              r = (e = (u = 1 & e) + e | 0) >>> 0 < u >>> 0 ? r + 1 | 0 : r;
            } else (!e & 2147418112 == (0 | l) ? !(u | d) : l >>> 0 < 2147418112) ? (e = 0, r = 2146435072, l >>> 0 > 1140785151 || (r = 0, (m = l >>> 16 | 0) >>> 0 < 15249 || (e = d, r = u, l = A = 65535 & i | 65536, p = o, k = o, 64 & (v = m - 15233 | 0) ? (o = e, e = 31 & (A = v + -64 | 0), (63 & A) >>> 0 >= 32 ? (r = o << e, k = 0) : (r = (1 << e) - 1 & o >>> 32 - e | r << e, k = o << e), A = r, e = 0, r = 0) : v && (h = k, k = 31 & v, (63 & v) >>> 0 >= 32 ? (o = h << k, k = 0) : (o = (1 << k) - 1 & h >>> 32 - k | A << k, k = h << k), A = o, w = k, h = e, k = 31 & (o = 64 - v | 0), (63 & o) >>> 0 >= 32 ? (o = 0, e = r >>> k | 0) : (o = r >>> k | 0, e = ((1 << k) - 1 & r) << 32 - k | h >>> k), k = w | e, A |= o, e = 31 & v, (63 & v) >>> 0 >= 32 ? (o = h << e, e = 0) : (o = (1 << e) - 1 & h >>> 32 - e | r << e, e = h << e), r = o), c[a + 16 >> 2] = e, c[a + 20 >> 2] = r, c[a + 24 >> 2] = k, c[a + 28 >> 2] = A, 64 & (e = 15361 - m | 0) ? (u = p, r = 31 & (e = e + -64 | 0), (63 & e) >>> 0 >= 32 ? (o = 0, d = l >>> r | 0) : (o = l >>> r | 0, d = ((1 << r) - 1 & l) << 32 - r | u >>> r), u = o, p = 0, l = 0) : e && (A = p, o = 31 & (r = 64 - e | 0), (63 & r) >>> 0 >= 32 ? (r = A << o, k = 0) : (r = (1 << o) - 1 & A >>> 32 - o | l << o, k = A << o), A = d, d = 31 & e, (63 & e) >>> 0 >= 32 ? (o = 0, A = u >>> d | 0) : (o = u >>> d | 0, A = ((1 << d) - 1 & u) << 32 - d | A >>> d), d = k | A, u = r | o, A = p, o = 31 & e, (63 & e) >>> 0 >= 32 ? (r = 0, p = l >>> o | 0) : (r = l >>> o | 0, p = ((1 << o) - 1 & l) << 32 - o | A >>> o), l = r), c[a >> 2] = d, c[a + 4 >> 2] = u, c[a + 8 >> 2] = p, c[a + 12 >> 2] = l, e = c[a + 8 >> 2], r = c[a + 12 >> 2] << 4 | e >>> 28, e <<= 4, o = c[a >> 2], e |= (l = c[a + 4 >> 2]) >>> 28, 134217728 == (0 | (u = 268435455 & l)) & 0 != (0 | (o |= 0 != (c[a + 16 >> 2] | c[a + 24 >> 2] | c[a + 20 >> 2] | c[a + 28 >> 2]))) | u >>> 0 > 134217728 ? r = (e = e + 1 | 0) ? r : r + 1 | 0 : o | 134217728 != (0 | u) || (r = (o = e) >>> 0 > (e = e + (1 & e) | 0) >>> 0 ? r + 1 | 0 : r)))) : (e = (r = o) << 4 | u >>> 28, r = 524287 & (o = i << 4 | r >>> 28) | 2146959360);
            ar = a + 32 | 0, b(0, 0 | e), b(1, -2147483648 & i | r), t = n, f = +s(), N[t >> 3] = f;
          }, Ke, function (r, e) {
            e |= 0, c[4 + (r |= 0) >> 2] = 7, c[r >> 2] = e;
          }, function (r, e) {
            e |= 0, c[4 + (r |= 0) >> 2] = 10, c[r >> 2] = e;
          }, function (r, e) {
            e |= 0, c[4 + (r |= 0) >> 2] = 13, c[r >> 2] = e;
          }, Ke, Ke, Ke, Ke, Ke, Ke, function (r, e, a, i, n, t) {
            var f;
            r |= 0, e |= 0, a = y(a), i |= 0, n = y(n), t |= 0, ar = f = ar - 16 | 0, e = c[c[e >> 2] + 4 >> 2], aa[c[c[e >> 2] + 8 >> 2]](f, e, a, i, n, t), m[r >> 2] = N[f >> 3], m[r + 4 >> 2] = N[f + 8 >> 3], ar = f + 16 | 0;
          }, function (r) {
            r = c[c[(r |= 0) >> 2] + 8 >> 2], aa[c[c[r >> 2] + 8 >> 2]](r);
          }, tr, function (r) {
            return 6952;
          }, Pe, function (r, e, a, i, n, t) {
            r |= 0, e |= 0, a = y(a), i |= 0, n = y(n), t |= 0;
            var f,
              o = 0;
            return ar = f = ar - 16 | 0, o = c[r >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (o = c[o + c[e >> 2] >> 2]), aa[0 | o](f, e, a, i, n, t), r = ye(16), e = c[f + 12 >> 2], c[r + 8 >> 2] = c[f + 8 >> 2], c[r + 12 >> 2] = e, e = c[f + 4 >> 2], c[r >> 2] = c[f >> 2], c[r + 4 >> 2] = e, ar = f + 16 | 0, 0 | r;
          }, function (r) {
            return 6956;
          }, Ke, Ke, Pe, qe, He, Ze, function (r) {
            var e;
            return r |= 0, e = ye(12), f[e + 4 | 0] = 0, c[e + 8 >> 2] = c[r >> 2], c[r >> 2] = 0, c[e >> 2] = 4368, 0 | e;
          }, function (r, e, a) {
            r |= 0, a |= 0;
            var i,
              n,
              t = 0,
              o = 0;
            if (ar = i = ar - 32 | 0, (n = c[(e |= 0) >> 2]) >>> 0 < 2147483632) {
              r: {
                if (n >>> 0 >= 11) o = ye(t = 1 + (15 | n) | 0), c[i + 16 >> 2] = -2147483648 | t, c[i + 8 >> 2] = o, c[i + 12 >> 2] = n, t = n + o | 0;else if (f[i + 19 | 0] = n, t = (o = i + 8 | 0) + n | 0, !n) break r;
                Ar(o, e + 4 | 0, n);
              }
              return f[0 | t] = 0, c[i >> 2] = a, aa[0 | r](i + 24 | 0, i + 8 | 0, i), M(c[i + 24 >> 2]), r = c[i + 24 >> 2], X(0 | r), X(c[i >> 2]), f[i + 19 | 0] < 0 && gr(c[i + 8 >> 2]), ar = i + 32 | 0, 0 | r;
            }
            I(), k();
          }, function (r, e, a) {
            var i, n;
            a |= 0, i = r |= 0, n = 0 | U(0 | (f[11 + (e |= 0) | 0] < 0 ? c[e >> 2] : e), 6956, c[a >> 2]), c[i >> 2] = n;
          }, function (r) {
            return 6976;
          }, Pe, Xe, function (r) {
            return 6979;
          }, Ke, Ke, Pe, qe, He, Ze, function (r) {
            var e;
            return r |= 0, e = ye(12), f[e + 4 | 0] = 0, c[e + 8 >> 2] = c[r >> 2], c[r >> 2] = 0, c[e >> 2] = 4488, 0 | e;
          }, function (r, e, a) {
            var i, n;
            a |= 0, i = r |= 0, n = 0 | U(0 | (f[11 + (e |= 0) | 0] < 0 ? c[e >> 2] : e), 6979, c[a >> 2]), c[i >> 2] = n;
          }, function (r) {
            return 6982;
          }, Fe, ze, function () {
            var r, e;
            return e = ye(4), r = ye(28), o[r + 20 >> 1] = 0, c[r + 16 >> 2] = 1065353216, o[r + 10 >> 1] = 0, o[r + 12 >> 1] = 0, c[r >> 2] = 0, c[r + 24 >> 2] = 0, f[r + 9 | 0] = 0, c[r + 4 >> 2] = 1, f[r + 22 | 0] = 0, c[1732] = c[1732] + 1, c[e >> 2] = r, 0 | e;
          }, je, Fe, function (r, e, a) {
            e |= 0, a |= 0, f[20 + (c[(r |= 0) >> 2] + e | 0) | 0] = a;
          }, Ne, function (r, e) {
            r |= 0, e = y(e);
            var a,
              i = 0,
              n = 0;
            ar = a = ar - 16 | 0, r = c[r >> 2], e >= y(0) || (c[a >> 2] = 2262, ar = i = ar - 16 | 0, c[i + 12 >> 2] = a, r || (v[6936] ? r = c[1733] : (r = ye(28), o[r + 20 >> 1] = 0, c[r + 16 >> 2] = 1065353216, o[r + 10 >> 1] = 0, o[r + 12 >> 1] = 0, c[r >> 2] = 0, c[r + 24 >> 2] = 0, f[r + 9 | 0] = 0, c[r + 4 >> 2] = 1, f[r + 22 | 0] = 0, c[1733] = r, f[6936] = 1, c[1732] = c[1732] + 1)), n = c[r + 4 >> 2], v[r + 9 | 0] ? aa[0 | n](r, 0, 5, 0, 4215, a) : aa[0 | n](r, 0, 5, 4215, a), ar = i + 16 | 0, De(), k()), m[r + 16 >> 2] = e == y(0) ? y(0) : e, ar = a + 16 | 0;
          }, function (r, e, a) {
            r |= 0, e |= 0, a = y(a);
            var i = 0;
            i = c[r >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](e, a);
          }, function (r, e) {
            e |= 0, f[c[(r |= 0) >> 2] + 11 | 0] = e;
          }, Ee, function (r, e) {
            e |= 0, f[c[(r |= 0) >> 2] + 10 | 0] = e;
          }, function (r, e) {
            return e |= 0, v[20 + (c[(r |= 0) >> 2] + e | 0) | 0];
          }, we, function (r) {
            return v[c[(r |= 0) >> 2] + 11 | 0];
          }, Ge, function (r) {
            return v[c[(r |= 0) >> 2] + 10 | 0];
          }, function () {
            return 0 | Rr(ye(48), 0, 48);
          }, Je, function () {
            var r;
            return r = ye(16), c[r >> 2] = 0, c[r + 4 >> 2] = 0, c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, 0 | r;
          }, Je, function () {
            var r;
            return r = ye(16), c[r + 8 >> 2] = 0, c[r + 12 >> 2] = 0, c[r >> 2] = 0, 0 | r;
          }, Je, Se, Ce, function (r, e) {
            return e |= 0, c[c[(r |= 0) >> 2] + e >> 2];
          }, function (r, e, a) {
            e |= 0, a |= 0, c[c[(r |= 0) >> 2] + e >> 2] = a;
          }, function (r) {
            return 6987;
          }, Cr, ze, function () {
            return 0 | $r(ye(12), 0);
          }, function (r, e) {
            return e |= 0, 0 | aa[0 | (r |= 0)](e);
          }, function (r) {
            return r |= 0, 0 | $r(ye(12), r);
          }, je, Cr, function (r) {
            var e,
              a = 0,
              i = 0,
              n = 0;
            ar = e = ar - 624 | 0, a = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = 0, a && aa[c[c[a >> 2] + 4 >> 2]](a), a = c[r + 8 >> 2], c[r + 8 >> 2] = 0, a && aa[c[c[a >> 2] + 4 >> 2]](a);
            r: {
              if (r = c[r >> 2], c[r + 560 >> 2] == c[r + 556 >> 2]) {
                if (c[r + 552 >> 2]) break r;
                return Sr(r + 556 | 0), n = f[r + 4 | 0], a = br(e + 32 | 0, c[r + 568 >> 2]), i = c[a + 4 >> 2], c[r >> 2] = c[a >> 2], c[r + 4 >> 2] = i, i = c[a + 20 >> 2], c[r + 16 >> 2] = c[a + 16 >> 2], c[r + 20 >> 2] = i, i = c[a + 12 >> 2], c[r + 8 >> 2] = c[a + 8 >> 2], c[r + 12 >> 2] = i, Ar(r + 24 | 0, a + 24 | 0, 204), Ar(r + 228 | 0, a + 228 | 0, 328), (i = c[r + 556 >> 2]) && (c[r + 560 >> 2] = i, gr(i)), c[r + 556 >> 2] = c[a + 556 >> 2], c[r + 560 >> 2] = c[a + 560 >> 2], c[r + 564 >> 2] = c[a + 564 >> 2], c[r + 584 >> 2] = c[a + 584 >> 2], i = c[a + 580 >> 2], c[r + 576 >> 2] = c[a + 576 >> 2], c[r + 580 >> 2] = i, i = c[a + 572 >> 2], c[r + 568 >> 2] = c[a + 568 >> 2], c[r + 572 >> 2] = i, (0 | n) < 0 && (f[r + 4 | 0] = 128 | v[r + 4 | 0], c[r + 24 >> 2] = -909 & c[r + 24 >> 2] | 520), void (ar = e + 624 | 0);
              }
              c[e + 16 >> 2] = 3252, Xr(r, e + 16 | 0), De(), k();
            }
            c[e >> 2] = 2046, Xr(r, e), De(), k();
          }, Xe, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = y(0),
              n = 0,
              t = 0,
              o = y(0),
              u = 0,
              s = 0,
              A = 0,
              k = y(0);
            r: {
              s = c[e >> 2], e = c[r >> 2];
              e: if (!(8388607 & (c[s + 24 >> 2] ^ c[e + 24 >> 2]))) {
                k = m[s + 40 >> 2], n = c[s + 40 >> 2], i = m[e + 40 >> 2];
                a: {
                  i: {
                    if (2139156720 != (0 | (a = c[e + 40 >> 2]))) {
                      if (o = y(NaN), r = 3, 2141891242 == (0 | a)) break a;
                      if (2140081935 != (0 | a)) break i;
                      o = y(0), r = 1;
                      break a;
                    }
                    r = 2;
                    break a;
                  }
                  r = 0, i == i && (b(2, 536870912 + (-1073741825 & a) | 0), o = d(), r = 1073741824 & a ? 2 : 1);
                }
                a: {
                  i: {
                    if (2139156720 != (0 | n)) {
                      if (i = y(NaN), a = 3, 2141891242 == (0 | n)) break a;
                      if (2140081935 != (0 | n)) break i;
                      i = y(0), a = 1;
                      break a;
                    }
                    i = y(0), a = 2;
                    break a;
                  }
                  a = 0, k == k && (b(2, 536870912 + (-1073741825 & n) | 0), i = d(), a = 1073741824 & n ? 2 : 1);
                }
                if (!((0 | a) != (0 | r) | !(!r | o != o & i != i | y(E(y(o - i))) < y(9999999747378752e-20))) && (t = s + 44 | 0, c[(a = e + 44 | 0) >> 2] == c[t >> 2])) {
                  r = 0;
                  a: {
                    for (;;) {
                      if (n = r, 9 == (0 | (r = r + 1 | 0))) break a;
                      if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break;
                    }
                    if (n >>> 0 < 8) break e;
                  }
                  if (t = s + 80 | 0, c[(a = e + 80 | 0) >> 2] == c[t >> 2]) {
                    r = 0;
                    a: {
                      for (;;) {
                        if (n = r, 9 == (0 | (r = r + 1 | 0))) break a;
                        if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break;
                      }
                      if (n >>> 0 < 8) break e;
                    }
                    if (t = s + 116 | 0, c[(a = e + 116 | 0) >> 2] == c[t >> 2]) {
                      r = 0;
                      a: {
                        for (;;) {
                          if (n = r, 9 == (0 | (r = r + 1 | 0))) break a;
                          if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break;
                        }
                        if (n >>> 0 < 8) break e;
                      }
                      if (t = s + 152 | 0, c[(a = e + 152 | 0) >> 2] == c[t >> 2]) {
                        r = 0;
                        a: {
                          for (;;) {
                            if (n = r, 9 == (0 | (r = r + 1 | 0))) break a;
                            if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break;
                          }
                          if (n >>> 0 < 8) break e;
                        }
                        if (t = s + 188 | 0, c[(a = e + 188 | 0) >> 2] == c[t >> 2]) {
                          r = 0;
                          a: {
                            for (;;) {
                              if (n = r, 3 == (0 | (r = r + 1 | 0))) break a;
                              if (c[(u = r << 2) + a >> 2] != c[t + u >> 2]) break;
                            }
                            if (n >>> 0 < 2) break e;
                          }
                          for (u = s + 200 | 0, A = e + 200 | 0, r = 0, n = 1; a = c[(r <<= 2) + u >> 2], t = c[r + A >> 2], n && (n = 0, r = 1, (0 | a) == (0 | t)););
                          if ((0 | a) == (0 | t)) {
                            for (u = s + 208 | 0, A = e + 208 | 0, r = 0, n = 1; a = c[(r <<= 2) + u >> 2], t = c[r + A >> 2], n && (n = 0, r = 1, (0 | a) == (0 | t)););
                            if ((0 | a) == (0 | t)) {
                              for (u = s + 216 | 0, A = e + 216 | 0, r = 0, n = 1; a = c[(r <<= 2) + u >> 2], t = c[r + A >> 2], n && (n = 0, r = 1, (0 | a) == (0 | t)););
                              if ((0 | a) == (0 | t) && !((0 | (r = (o = m[s + 28 >> 2]) != o)) == ((i = m[e + 28 >> 2]) == i | 0) | !(r | i != i) & i != o || ((i = m[e + 32 >> 2]) == i | 0) == ((o = m[s + 32 >> 2]) != o | 0) | i == i & i != o || (0 | (r = (o = m[s + 36 >> 2]) != o)) == ((i = m[e + 36 >> 2]) == i | 0) | !r & i != o)) {
                                if (r = 0, (i = m[e + 224 >> 2]) != i && (r = 1, (o = m[s + 224 >> 2]) != o)) break r;
                                if ((o = i) == (i = m[s + 224 >> 2]) | i != i & r) break r;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              for (Ar(e + 24 | 0, s + 24 | 0, 204);;) {
                if (4 & (r = v[e + 4 | 0])) break r;
                if (f[e + 4 | 0] = 4 | r, (r = c[e + 20 >> 2]) && aa[0 | r](e), c[e + 308 >> 2] = 2143289344, !(e = c[e + 552 >> 2])) break;
              }
            }
          }, Ee, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 16 & 3) != (0 | e)) for (c[r + 24 >> 2] = -196609 & a | e << 16 & 196608;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, Ee, function (r, e, a) {
            e |= 0, a = +a, oe(c[(r |= 0) >> 2], e, qr(y(a)));
          }, function (r, e, a, i) {
            e |= 0, a |= 0, i = +i;
            var n = 0;
            n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](e, a, i);
          }, function (r, e, a) {
            e |= 0, a = +a, oe(c[(r |= 0) >> 2], e, Kr(y(a)));
          }, function (r, e) {
            e |= 0, Yr(c[(r |= 0) >> 2], 5, e);
          }, function (r, e) {
            e |= 0, Yr(c[(r |= 0) >> 2], 6, e);
          }, function (r, e) {
            e |= 0, Yr(c[(r |= 0) >> 2], 7, e);
          }, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 2 & 3) != (0 | e)) for (c[r + 24 >> 2] = -13 & a | e << 2 & 12;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 18 & 3) != (0 | e)) for (c[r + 24 >> 2] = -786433 & a | e << 18 & 786432;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 4 & 7) != (0 | e)) for (c[r + 24 >> 2] = -113 & a | e << 4 & 112;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e, a) {
            e |= 0, a = +a, ue(c[(r |= 0) >> 2], e, qr(y(a)));
          }, function (r, e, a) {
            e |= 0, a = +a, ue(c[(r |= 0) >> 2], e, Kr(y(a)));
          }, function (r, e) {
            e |= 0, ue(c[(r |= 0) >> 2], e, 2141891242);
          }, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 20 & 3) != (0 | e)) for (c[r + 24 >> 2] = -3145729 & a | e << 20 & 3145728;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((a = c[r + 24 >> 2]) >>> 22 & 1) != (0 | e)) for (c[r + 24 >> 2] = -4194305 & a | e << 22 & 4194304;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            r |= 0, e = +e;
            var a = 0,
              i = y(0),
              n = y(0);
            r: if (i = y(e), r = c[r >> 2], !(i == (n = m[r + 28 >> 2]) | i != i & n != n)) for (m[r + 28 >> 2] = i;;) {
              if (4 & (a = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e, a) {
            e |= 0, a = +a;
            var i = 0;
            i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](e, a);
          }, function (r, e) {
            e = +e, fe(c[(r |= 0) >> 2], qr(y(e)));
          }, function (r, e) {
            e = +e, fe(c[(r |= 0) >> 2], Kr(y(e)));
          }, function (r) {
            fe(c[(r |= 0) >> 2], 2141891242);
          }, function (r, e) {
            r |= 0, e = +e;
            var a = 0,
              i = y(0),
              n = y(0);
            r: if (i = y(e), r = c[r >> 2], !(i == (n = m[r + 32 >> 2]) | i != i & n != n)) for (m[r + 32 >> 2] = i;;) {
              if (4 & (a = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            r |= 0, e = +e;
            var a = 0,
              i = y(0),
              n = y(0);
            r: if (i = y(e), r = c[r >> 2], !(i == (n = m[r + 36 >> 2]) | i != i & n != n)) for (m[r + 36 >> 2] = i;;) {
              if (4 & (a = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e) {
            e = +e, te(c[(r |= 0) >> 2], 0, qr(y(e)));
          }, function (r, e) {
            e = +e, te(c[(r |= 0) >> 2], 0, Kr(y(e)));
          }, function (r) {
            te(c[(r |= 0) >> 2], 0, 2141891242);
          }, function (r, e) {
            e = +e, te(c[(r |= 0) >> 2], 1, qr(y(e)));
          }, function (r, e) {
            e = +e, te(c[(r |= 0) >> 2], 1, Kr(y(e)));
          }, function (r) {
            te(c[(r |= 0) >> 2], 1, 2141891242);
          }, function (r, e) {
            e = +e, ie(c[(r |= 0) >> 2], 0, qr(y(e)));
          }, function (r, e) {
            e = +e, ie(c[(r |= 0) >> 2], 0, Kr(y(e)));
          }, function (r, e) {
            e = +e, ie(c[(r |= 0) >> 2], 1, qr(y(e)));
          }, function (r, e) {
            e = +e, ie(c[(r |= 0) >> 2], 1, Kr(y(e)));
          }, function (r, e) {
            e = +e, ne(c[(r |= 0) >> 2], 0, qr(y(e)));
          }, function (r, e) {
            e = +e, ne(c[(r |= 0) >> 2], 0, Kr(y(e)));
          }, function (r, e) {
            e = +e, ne(c[(r |= 0) >> 2], 1, qr(y(e)));
          }, function (r, e) {
            e = +e, ne(c[(r |= 0) >> 2], 1, Kr(y(e)));
          }, function (r, e) {
            r |= 0, e = +e;
            var a = 0,
              i = y(0),
              n = y(0);
            r: if (i = y(e), r = c[r >> 2], !(i == (n = m[r + 224 >> 2]) | i != i & n != n)) for (m[r + 224 >> 2] = i;;) {
              if (4 & (a = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e, a) {
            e |= 0, a = +a;
            var i = 0;
            r: if (r = c[(r |= 0) >> 2], (0 | c[152 + (e = r + (e << 2) | 0) >> 2]) != (0 | (i = qr(y(a))))) for (c[e + 152 >> 2] = i;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r, e, a) {
            e |= 0, a = +a, ce(c[(r |= 0) >> 2], e, qr(y(a)));
          }, function (r, e, a) {
            e |= 0, a = +a, ce(c[(r |= 0) >> 2], e, Kr(y(a)));
          }, function (r, e, a) {
            e |= 0, a = +a;
            var i = 0;
            r: if (r = c[(r |= 0) >> 2], (0 | c[188 + (e = r + (e << 2) | 0) >> 2]) != (0 | (i = qr(y(a))))) for (c[e + 188 >> 2] = i;;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, function (r) {
            return 3 & h[c[(r |= 0) >> 2] + 26 >> 1];
          }, Ge, function (r, e, a) {
            r |= 0, e |= 0, a |= 0;
            var i = 0,
              n = 0,
              t = y(0);
            i = 2, e = c[e >> 2] + (a << 2) | 0, t = m[e + 80 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 80 >> 2]))) {
                  if (n = NaN, 2141891242 == (0 | e)) {
                    i = 3;
                    break r;
                  }
                  if (2140081935 != (0 | e)) break e;
                  n = 0, i = 1;
                  break r;
                }
                break r;
              }
              t == t ? (i = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), n = +d()) : i = 0;
            }
            N[r + 8 >> 3] = n, c[r >> 2] = i;
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i,
              n = 0;
            return ar = i = ar - 16 | 0, n = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (n = c[n + c[e >> 2] >> 2]), aa[0 | n](i, e, a), r = ye(16), e = c[i + 12 >> 2], c[r + 8 >> 2] = c[i + 8 >> 2], c[r + 12 >> 2] = e, e = c[i + 4 >> 2], c[r >> 2] = c[i >> 2], c[r + 4 >> 2] = e, ar = i + 16 | 0, 0 | r;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 7 & 7;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 10 & 7;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 13 & 7;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 2 & 3;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 18 & 3;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 4 & 7;
          }, function (r, e, a) {
            r |= 0, e |= 0, a |= 0;
            var i = 0,
              n = 0,
              t = y(0);
            i = 2, e = c[e >> 2] + (a << 2) | 0, t = m[e + 44 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 44 >> 2]))) {
                  if (n = NaN, 2141891242 == (0 | e)) {
                    i = 3;
                    break r;
                  }
                  if (2140081935 != (0 | e)) break e;
                  n = 0, i = 1;
                  break r;
                }
                break r;
              }
              t == t ? (i = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), n = +d()) : i = 0;
            }
            N[r + 8 >> 3] = n, c[r >> 2] = i;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = y(0),
              n = y(0);
            i = y(NaN), e = c[e >> 2], n = m[e + 40 >> 2], a = 3, 2141891242 != (0 | (e = c[e + 40 >> 2])) && (2140081935 != (0 | e) ? 2139156720 != (0 | e) ? (a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = d(), a = 1073741824 & e ? 2 : 1)) : (i = y(0), a = 2) : (i = y(0), a = 1)), c[r >> 2] = a, N[r + 8 >> 3] = i;
          }, function (r, e) {
            e |= 0;
            var a,
              i = 0;
            return ar = a = ar - 16 | 0, i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](a, e), r = ye(16), e = c[a + 12 >> 2], c[r + 8 >> 2] = c[a + 8 >> 2], c[r + 12 >> 2] = e, e = c[a + 4 >> 2], c[r >> 2] = c[a >> 2], c[r + 4 >> 2] = e, ar = a + 16 | 0, 0 | r;
          }, function (r) {
            r |= 0;
            var e = y(0);
            return +((e = m[c[r >> 2] + 32 >> 2]) == e ? e : y(0));
          }, function (r, e) {
            e |= 0;
            var a = 0;
            return a = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (a = c[a + c[e >> 2] >> 2]), +aa[0 | a](e);
          }, function (r) {
            r |= 0;
            var e = y(0);
            return r = c[r >> 2], (e = m[r + 36 >> 2]) != e && (e = v[c[r + 568 >> 2] + 10 | 0] ? y(1) : y(0)), +e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 200 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 200 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 204 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 204 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 208 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 208 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 212 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 212 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 216 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 216 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = 0,
              n = y(0);
            e = c[e >> 2], n = m[e + 220 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 220 >> 2]))) {
                  if (i = NaN, a = 3, 2141891242 == (0 | e)) break r;
                  if (2140081935 != (0 | e)) break e;
                  i = 0, a = 1;
                  break r;
                }
                a = 2;
                break r;
              }
              a = 0, n == n && (b(2, 536870912 + (-1073741825 & e) | 0), i = +d(), a = 1073741824 & e ? 2 : 1);
            }
            e = a, N[r + 8 >> 3] = i, c[r >> 2] = e;
          }, function (r) {
            r |= 0;
            var e = y(0);
            return +((e = m[c[r >> 2] + 224 >> 2]) != e ? y(NaN) : e);
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = 0,
              i = y(0);
            r = c[r >> 2] + (e << 2) | 0, i = m[r + 152 >> 2];
            r: {
              if (!(2139156720 == (0 | (r = c[r + 152 >> 2])) | 2140081935 == (0 | r))) {
                if (a = NaN, 2141891242 == (0 | r) | i != i) break r;
                if (2139156720 != (0 | r)) return b(2, 536870912 + (-1073741825 & r) | 0), +d();
              }
              a = 0;
            }
            return +a;
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i = 0;
            return i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), +aa[0 | i](e, a);
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 20 & 3;
          }, function (r) {
            return c[c[(r |= 0) >> 2] + 24 >> 2] >>> 22 & 1;
          }, function (r, e, a) {
            r |= 0, e |= 0, a |= 0;
            var i = 0,
              n = 0,
              t = y(0);
            i = 2, e = c[e >> 2] + (a << 2) | 0, t = m[e + 116 >> 2];
            r: {
              e: {
                if (2139156720 != (0 | (e = c[e + 116 >> 2]))) {
                  if (n = NaN, 2141891242 == (0 | e)) {
                    i = 3;
                    break r;
                  }
                  if (2140081935 != (0 | e)) break e;
                  n = 0, i = 1;
                  break r;
                }
                break r;
              }
              t == t ? (i = 1073741824 & e ? 2 : 1, b(2, 536870912 + (-1073741825 & e) | 0), n = +d()) : i = 0;
            }
            N[r + 8 >> 3] = n, c[r >> 2] = i;
          }, function (r, e) {
            r |= 0, e |= 0;
            var a = y(0),
              i = y(0);
            r = c[r >> 2] + (e << 2) | 0, i = m[r + 188 >> 2];
            r: {
              if (!(2139156720 == (0 | (r = c[r + 188 >> 2])) | 2140081935 == (0 | r))) {
                if (a = y(NaN), 2141891242 == (0 | r) | i != i) break r;
                if (2139156720 != (0 | r)) return y((b(2, 536870912 + (-1073741825 & r) | 0), d()));
              }
              a = y(0);
            }
            return y(a);
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i = 0;
            return i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), y(y(aa[0 | i](e, a)));
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i,
              n = 0,
              t = 0,
              o = 0,
              u = 0,
              b = 0,
              s = 0,
              A = 0,
              l = 0,
              d = 0;
            ar = i = ar - 80 | 0, r = c[(r |= 0) >> 2];
            r: {
              e: {
                if (b = c[e >> 2], !c[b + 552 >> 2]) {
                  if (c[r + 8 >> 2]) break e;
                  u = (e = c[r + 556 >> 2]) + (a << 2) | 0;
                  a: if ((n = c[r + 560 >> 2]) >>> 0 < (o = c[(t = r + 564 | 0) >> 2]) >>> 0) {
                    if ((0 | n) == (0 | u)) {
                      c[u >> 2] = b, c[r + 560 >> 2] = u + 4;
                      break a;
                    }
                    if (a = n, n >>> 0 > (e = n - 4 | 0) >>> 0) for (; c[a >> 2] = c[e >> 2], a = a + 4 | 0, n >>> 0 > (e = e + 4 | 0) >>> 0;);
                    c[r + 560 >> 2] = a, (0 | (e = u + 4 | 0)) != (0 | n) && wr(n - (-4 & (e = n - e | 0)) | 0, u, e), c[u >> 2] = b;
                  } else {
                    if ((n = 1 + (n - e >> 2) | 0) >>> 0 >= 1073741824) break r;
                    if (o = (e = o - e | 0) >>> 1 | 0, t = pe(i + 32 | 0, e >>> 0 >= 2147483644 ? 1073741823 : n >>> 0 < o >>> 0 ? o : n, a, t), (0 | (a = c[t + 8 >> 2])) == c[t + 12 >> 2]) if ((e = c[t + 4 >> 2]) >>> 0 > (n = c[t >> 2]) >>> 0) a = wr(s = (n = (1 + (e - n >> 2) | 0) / -2 << 2) + e | 0, o = e, e = a - e | 0) + e | 0, c[t + 8 >> 2] = a, c[t + 4 >> 2] = n + c[t + 4 >> 2];else {
                      if (o = pe(i + 56 | 0, e = (0 | a) == (0 | n) ? 1 : a - n >> 1, e >>> 2 | 0, c[t + 16 >> 2]), n = c[o + 8 >> 2], (0 | (e = c[t + 4 >> 2])) != (0 | (a = c[t + 8 >> 2]))) {
                        for (a = (a - e | 0) + n | 0; c[n >> 2] = c[e >> 2], e = e + 4 | 0, (0 | (n = n + 4 | 0)) != (0 | a););
                        e = c[t + 8 >> 2], n = c[t + 4 >> 2];
                      } else a = n, n = e;
                      s = c[t >> 2], c[t >> 2] = c[o >> 2], c[o >> 2] = s, c[t + 4 >> 2] = c[o + 4 >> 2], c[o + 4 >> 2] = n, c[t + 8 >> 2] = a, c[o + 8 >> 2] = e, A = c[t + 12 >> 2], c[t + 12 >> 2] = c[o + 12 >> 2], c[o + 12 >> 2] = A, (0 | e) != (0 | n) && (c[o + 8 >> 2] = (3 + (n - e | 0) & -4) + e), s && (gr(s), a = c[t + 8 >> 2]);
                    }
                    c[a >> 2] = b, c[t + 8 >> 2] = c[t + 8 >> 2] + 4, a = u - (e = c[r + 556 >> 2]) | 0, l = t, d = wr(c[t + 4 >> 2] - a | 0, e, a), c[l + 4 >> 2] = d, n = c[r + 560 >> 2] - u | 0, u = wr(c[t + 8 >> 2], u, n), e = c[r + 556 >> 2], c[r + 556 >> 2] = c[t + 4 >> 2], c[t + 4 >> 2] = e, a = c[r + 560 >> 2], c[r + 560 >> 2] = n + u, c[t + 8 >> 2] = a, n = c[r + 564 >> 2], c[r + 564 >> 2] = c[t + 12 >> 2], c[t >> 2] = e, c[t + 12 >> 2] = n, (0 | e) != (0 | a) && (c[t + 8 >> 2] = a + (3 + (e - a | 0) & -4)), e && gr(e);
                  }
                  for (c[b + 552 >> 2] = r; !(4 & (e = v[r + 4 | 0])) && (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, r = c[r + 552 >> 2]););
                  return void (ar = i + 80 | 0);
                }
                c[i + 16 >> 2] = 4006, Xr(r, i + 16 | 0), De(), k();
              }
              c[i >> 2] = 4139, Xr(r, i), De(), k();
            }
            I(), k();
          }, Ne, function (r, e) {
            e |= 0;
            var a,
              i = 0,
              n = 0,
              t = 0;
            ar = a = ar - 320 | 0, r = c[(r |= 0) >> 2];
            r: if (c[r + 560 >> 2] != c[r + 556 >> 2] && (n = c[e >> 2], e = c[n + 552 >> 2], ee(r, n))) {
              if ((0 | r) == (0 | e)) {
                for (i = Rr(a, 0, 288), c[(e = i) + 16 >> 2] = 2143289344, c[e + 20 >> 2] = 2143289344, Rr(e + 24 | 0, 0, 49), c[e + 80 >> 2] = 2143289344, t = e + 288 | 0, e = e + 96 | 0; c[e + 16 >> 2] = -1082130432, c[e + 20 >> 2] = -1082130432, c[e + 8 >> 2] = 0, c[e + 12 >> 2] = 0, c[e >> 2] = -1082130432, c[e + 4 >> 2] = -1082130432, (0 | t) != (0 | (e = e + 24 | 0)););
                c[i + 312 >> 2] = -1082130432, c[i + 316 >> 2] = -1082130432, c[i + 304 >> 2] = 0, c[i + 308 >> 2] = 0, c[i + 296 >> 2] = -1082130432, c[i + 300 >> 2] = -1082130432, c[i + 288 >> 2] = 2143289344, c[i + 292 >> 2] = 2143289344, Ar(n + 228 | 0, i, 320), c[n + 552 >> 2] = 0;
              }
              for (;;) {
                if (4 & (e = v[r + 4 | 0])) break r;
                if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
              }
            }
            ar = a + 320 | 0;
          }, Ee, function (r) {
            return r = c[(r |= 0) >> 2], c[r + 560 >> 2] - c[r + 556 >> 2] >> 2;
          }, Ge, function (r) {
            return (r = c[c[(r |= 0) >> 2] + 552 >> 2]) ? c[r >> 2] : 0;
          }, Ge, function (r, e) {
            e |= 0;
            var a,
              i = 0;
            return a = c[(r |= 0) >> 2], r = c[a + 556 >> 2], c[a + 560 >> 2] - r >> 2 >>> 0 <= e >>> 0 || (r = c[r + (e << 2) >> 2]) && (i = c[r >> 2]), 0 | i;
          }, we, function (r) {
            return (2 & v[c[(r |= 0) >> 2] + 4 | 0]) >>> 1 | 0;
          }, Ge, function (r, e) {
            e |= 0;
            var a = 0;
            r: if (r = c[(r |= 0) >> 2], ((2 & (a = v[r + 4 | 0])) >>> 1 | 0) != (0 | e)) for (f[r + 4 | 0] = 253 & a | (e ? 2 : 0);;) {
              if (4 & (e = v[r + 4 | 0])) break r;
              if (f[r + 4 | 0] = 4 | e, (e = c[r + 20 >> 2]) && aa[0 | e](r), c[r + 308 >> 2] = 2143289344, !(r = c[r + 552 >> 2])) break;
            }
          }, Ee, function (r, e) {
            var a;
            e |= 0, a = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = e, a && aa[c[c[a >> 2] + 4 >> 2]](a), ke(c[r >> 2], 14);
          }, Ee, function (r) {
            var e;
            e = c[4 + (r |= 0) >> 2], c[r + 4 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), ke(c[r >> 2], 0);
          }, function (r, e) {
            var a;
            e |= 0, a = c[8 + (r |= 0) >> 2], c[r + 8 >> 2] = e, a && aa[c[c[a >> 2] + 4 >> 2]](a), c[c[r >> 2] + 20 >> 2] = 15;
          }, Ee, function (r) {
            var e;
            e = c[8 + (r |= 0) >> 2], c[r + 8 >> 2] = 0, e && aa[c[c[e >> 2] + 4 >> 2]](e), c[c[r >> 2] + 20 >> 2] = 0;
          }, function (r) {
            var e,
              a = 0;
            if (ar = e = ar - 16 | 0, r = c[(r |= 0) >> 2], c[r + 8 >> 2]) {
              for (; !(4 & (a = v[r + 4 | 0])) && (f[r + 4 | 0] = 4 | a, (a = c[r + 20 >> 2]) && aa[0 | a](r), c[r + 308 >> 2] = 2143289344, r = c[r + 552 >> 2]););
              ar = e + 16 | 0;
            } else c[e >> 2] = 1024, Xr(r, e), De(), k();
          }, function (r) {
            return (4 & v[c[(r |= 0) >> 2] + 4 | 0]) >>> 2 | 0;
          }, Ge, function (r, e, a, i) {
            r |= 0, e = +e, a = +a, i |= 0;
            var n,
              t,
              f = y(0),
              o = y(0),
              u = y(0),
              s = 0,
              A = y(0),
              k = 0,
              l = y(0);
            ar = t = ar + -64 | 0, n = c[r >> 2], Rr(t + 8 | 0, 0, 56), c[1735] = c[1735] + 1, sr(n), u = y(e), o = m[n + 572 >> 2];
            r: {
              e: {
                switch (0 | (r = c[n + 576 >> 2])) {
                  case 0:
                  case 3:
                    break e;
                }
                a: {
                  if (!(1 != (0 | r) | (f = m[n + 572 >> 2]) != f)) {
                    if (!((f = o) < y(0))) break a;
                    break e;
                  }
                  i: {
                    if (2 != (0 | r) | f != f) {
                      f = y(NaN);
                      n: switch (r - 1 | 0) {
                        case 1:
                          break i;
                        case 0:
                          break n;
                        default:
                          break a;
                      }
                      f = o;
                      break a;
                    }
                    if (u != u | o < y(0)) break e;
                  }
                  f = y(y(o * u) * y(.009999999776482582));
                }
                l = y(f + y(Mr(n, 2, u) + Ur(n, 2, u))), k = 1;
                break r;
              }
              f = y(0), o = m[n + 216 >> 2];
              e: {
                a: {
                  i: {
                    n: if (2139156720 != (0 | (r = c[n + 216 >> 2]))) {
                      if (2140081935 == (0 | r)) break e;
                      k = 4276;
                      t: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break t;
                          k = 4268;
                        }
                        switch (f = m[k >> 2], c[k + 4 >> 2] - 1 | 0) {
                          case 0:
                            break i;
                          case 1:
                            break n;
                          default:
                            break a;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break i;
                    }
                    f = y(y(f * u) * y(.009999999776482582));
                  }
                  if (f == f) {
                    f = y(0);
                    i: if (2139156720 != (0 | r)) {
                      if (2140081935 == (0 | r)) break e;
                      s = 4276;
                      n: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break n;
                          s = 4268;
                        }
                        switch (f = m[s >> 2], l = y(NaN), k = 2, c[s + 4 >> 2] - 1 | 0) {
                          case 1:
                            break i;
                          case 0:
                            break e;
                          default:
                            break r;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break e;
                    }
                    l = y(y(f * u) * y(.009999999776482582)), k = 2;
                    break r;
                  }
                }
                k = u == u, l = u;
                break r;
              }
              k = 2, l = f;
            }
            A = y(a), o = m[n + 580 >> 2];
            r: {
              e: {
                switch (0 | (r = c[n + 584 >> 2])) {
                  case 0:
                  case 3:
                    break e;
                }
                a: {
                  if (!(1 != (0 | r) | (f = m[n + 580 >> 2]) != f)) {
                    if (!((f = o) < y(0))) break a;
                    break e;
                  }
                  i: {
                    if (2 != (0 | r) | f != f) {
                      f = y(NaN);
                      n: switch (r - 1 | 0) {
                        case 1:
                          break i;
                        case 0:
                          break n;
                        default:
                          break a;
                      }
                      f = o;
                      break a;
                    }
                    if (A != A | o < y(0)) break e;
                  }
                  f = y(y(o * A) * y(.009999999776482582));
                }
                o = y(f + y(Mr(n, 0, u) + Ur(n, 0, u))), r = 1;
                break r;
              }
              f = y(0), o = m[n + 220 >> 2];
              e: {
                a: {
                  i: {
                    n: if (2139156720 != (0 | (r = c[n + 220 >> 2]))) {
                      if (2140081935 == (0 | r)) break e;
                      s = 4276;
                      t: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break t;
                          s = 4268;
                        }
                        switch (f = m[s >> 2], c[s + 4 >> 2] - 1 | 0) {
                          case 0:
                            break i;
                          case 1:
                            break n;
                          default:
                            break a;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break i;
                    }
                    f = y(y(f * A) * y(.009999999776482582));
                  }
                  if (f == f) {
                    f = y(0);
                    i: if (2139156720 != (0 | r)) {
                      if (2140081935 == (0 | r)) break e;
                      s = 4276;
                      n: {
                        if (2141891242 != (0 | r)) {
                          if (o == o) break n;
                          s = 4268;
                        }
                        switch (f = m[s >> 2], o = y(NaN), r = 2, c[s + 4 >> 2] - 1 | 0) {
                          case 0:
                            break e;
                          case 1:
                            break i;
                          default:
                            break r;
                        }
                      }
                      if (b(2, 536870912 + (-1073741825 & r) | 0), f = d(), !(1073741824 & r)) break e;
                    }
                    o = y(y(f * A) * y(.009999999776482582)), r = 2;
                    break r;
                  }
                }
                r = A == A, o = A;
                break r;
              }
              r = 2, o = f;
            }
            or(n, l, o, i, k, r, u, A, 1, 0, c[n + 568 >> 2], t + 8 | 0, 0, c[1735]) && (Fr(n, 3 & v[n + 300 | 0], u, A, u), Er(n, +m[c[n + 568 >> 2] + 16 >> 2], 0, 0)), ar = t - -64 | 0;
          }, function (r, e, a, i, n) {
            e |= 0, a = +a, i = +i, n |= 0;
            var t = 0;
            t = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (t = c[t + c[e >> 2] >> 2]), aa[0 | t](e, a, i, n);
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 228 >> 2];
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 236 >> 2];
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 232 >> 2];
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 240 >> 2];
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 244 >> 2];
          }, function (r) {
            return +m[c[(r |= 0) >> 2] + 248 >> 2];
          }, function (r, e) {
            r |= 0, e = c[(e |= 0) >> 2], N[r >> 3] = m[e + 228 >> 2], N[r + 8 >> 3] = m[e + 236 >> 2], N[r + 16 >> 3] = m[e + 232 >> 2], N[r + 24 >> 3] = m[e + 240 >> 2], N[r + 32 >> 3] = m[e + 244 >> 2], N[r + 40 >> 3] = m[e + 248 >> 2];
          }, function (r, e) {
            e |= 0;
            var a,
              i = 0;
            return ar = a = ar - 48 | 0, i = c[(r |= 0) >> 2], e = ((r = c[r + 4 >> 2]) >> 1) + e | 0, 1 & r && (i = c[i + c[e >> 2] >> 2]), aa[0 | i](a, e), r = Ar(ye(48), a, 48), ar = a + 48 | 0, 0 | r;
          }, function (r, e) {
            var a;
            if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
              ar = a + 16 | 0;
              r: {
                switch (e - 4 | 0) {
                  case 0:
                    if (e = r + 260 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 252 | 0;
                    break r;
                  case 1:
                    if (e = r + 252 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 260 | 0;
                    break r;
                }
                e = 252 + (r + (e << 2) | 0) | 0;
              }
              return +m[e >> 2];
            }
            c[a >> 2] = 1871, Xr(r, a), De(), k();
          }, function (r, e) {
            var a;
            if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
              ar = a + 16 | 0;
              r: {
                switch (e - 4 | 0) {
                  case 0:
                    if (e = r + 276 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 268 | 0;
                    break r;
                  case 1:
                    if (e = r + 268 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 276 | 0;
                    break r;
                }
                e = 268 + (r + (e << 2) | 0) | 0;
              }
              return +m[e >> 2];
            }
            c[a >> 2] = 1871, Xr(r, a), De(), k();
          }, function (r, e) {
            var a;
            if (e |= 0, ar = a = ar - 16 | 0, r = c[(r |= 0) >> 2], (0 | e) < 6) {
              ar = a + 16 | 0;
              r: {
                switch (e - 4 | 0) {
                  case 0:
                    if (e = r + 292 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 284 | 0;
                    break r;
                  case 1:
                    if (e = r + 284 | 0, 2 == (3 & v[r + 300 | 0])) break r;
                    e = r + 292 | 0;
                    break r;
                }
                e = 284 + (r + (e << 2) | 0) | 0;
              }
              return +m[e >> 2];
            }
            c[a >> 2] = 1871, Xr(r, a), De(), k();
          }, Se, Ce, Se, Ce, Gr, Le, function (r) {
            gr(Le(r |= 0));
          }, function (r, e, a, i, n, t) {
            var o, u, b;
            r |= 0, e |= 0, a = y(a), i |= 0, n = y(n), t |= 0, ar = o = ar - 48 | 0, b = c[e + 8 >> 2], 1 & f[6972] ? e = c[1742] : (e = 0 | C(5, 4416), f[6972] = 1, c[1742] = e), c[o + 40 >> 2] = t, m[o + 32 >> 2] = n, c[o + 24 >> 2] = i, m[o + 16 >> 2] = a, e = (u = +Q(0 | e, 0 | b, 2873, o + 12 | 0, o + 16 | 0)) < 4294967296 & u >= 0 ? ~~u >>> 0 : 0, i = c[o + 12 >> 2], t = c[e + 4 >> 2], c[r >> 2] = c[e >> 2], c[r + 4 >> 2] = t, t = c[e + 12 >> 2], c[r + 8 >> 2] = c[e + 8 >> 2], c[r + 12 >> 2] = t, H(0 | i), ar = o + 48 | 0;
          }, $e, ra, Oe, function (r) {
            gr(Oe(r |= 0));
          }, function (r) {
            Ie(c[8 + (r |= 0) >> 2], 3244);
          }, $e, function (r) {
            return 0 | q(c[60 + (r |= 0) >> 2]);
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i,
              n = 0,
              t = 0,
              f = 0,
              o = 0,
              u = 0,
              b = 0;
            ar = i = ar - 32 | 0, n = c[28 + (r |= 0) >> 2], c[i + 16 >> 2] = n, t = c[r + 20 >> 2], c[i + 28 >> 2] = a, c[i + 24 >> 2] = e, e = t - n | 0, c[i + 20 >> 2] = e, t = e + a | 0, u = 2, e = i + 16 | 0;
            r: {
              for (;;) {
                e: {
                  a: {
                    i: {
                      if (!Ye(0 | K(c[r + 60 >> 2], 0 | e, 0 | u, i + 12 | 0))) {
                        if ((0 | (f = c[i + 12 >> 2])) == (0 | t)) break i;
                        if ((0 | f) >= 0) break a;
                        break e;
                      }
                      if (-1 != (0 | t)) break e;
                    }
                    e = c[r + 44 >> 2], c[r + 28 >> 2] = e, c[r + 20 >> 2] = e, c[r + 16 >> 2] = e + c[r + 48 >> 2], r = a;
                    break r;
                  }
                  o = f - ((b = (o = c[e + 4 >> 2]) >>> 0 < f >>> 0) ? o : 0) | 0, c[(n = (b << 3) + e | 0) >> 2] = o + c[n >> 2], c[(e = (b ? 12 : 4) + e | 0) >> 2] = c[e >> 2] - o, t = t - f | 0, u = u - b | 0, e = n;
                  continue;
                }
                break;
              }
              c[r + 28 >> 2] = 0, c[r + 16 >> 2] = 0, c[r + 20 >> 2] = 0, c[r >> 2] = 32 | c[r >> 2], r = 0, 2 != (0 | u) && (r = a - c[e + 4 >> 2] | 0);
            }
            return ar = i + 32 | 0, 0 | r;
          }, function (r, e, a, i) {
            var n;
            return e |= 0, a |= 0, i |= 0, ar = n = ar - 16 | 0, r = Ye(0 | j(c[60 + (r |= 0) >> 2], 0 | e, 0 | a, 255 & i, n + 8 | 0)), ar = n + 16 | 0, ir = r ? -1 : c[n + 12 >> 2], 0 | (r ? -1 : c[n + 8 >> 2]);
          }, function (r) {
            return 0;
          }, function (r, e, a, i) {
            return ir = 0, 0;
          }, function (r, e, a) {
            e |= 0, a |= 0;
            var i,
              n,
              t = 0,
              o = 0,
              u = 0;
            return i = c[84 + (r |= 0) >> 2], o = c[i >> 2], t = c[i + 4 >> 2], n = c[r + 28 >> 2], (u = t >>> 0 < (u = c[r + 20 >> 2] - n | 0) >>> 0 ? t : u) && (Ar(o, n, u), o = u + c[i >> 2] | 0, c[i >> 2] = o, t = c[i + 4 >> 2] - u | 0, c[i + 4 >> 2] = t), (t = a >>> 0 > t >>> 0 ? t : a) && (Ar(o, e, t), o = t + c[i >> 2] | 0, c[i >> 2] = o, c[i + 4 >> 2] = c[i + 4 >> 2] - t), f[0 | o] = 0, e = c[r + 44 >> 2], c[r + 28 >> 2] = e, c[r + 20 >> 2] = e, 0 | a;
          }, ra]);
          function ia() {
            return t.byteLength / 65536 | 0;
          }
          return {
            E: function E() {
              for (var r = 0, e = 0, a = 0; a = 5888 + (e = r << 4) | 0, c[e + 5892 >> 2] = a, c[e + 5896 >> 2] = a, 64 != (0 | (r = r + 1 | 0)););
              vr(48), c[1736] = 16, c[1737] = 0, tr(), c[1737] = c[1748], c[1748] = 6944, c[1749] = 194, c[1750] = 0, Gr(), c[1750] = c[1748], c[1748] = 6996;
            },
            F: function F(r) {
              r |= 0;
              var e,
                a,
                i = 0,
                n = 0,
                t = 0;
              ar = e = ar - 96 | 0, c[e >> 2] = r, ar = n = ar - 16 | 0, c[n + 12 >> 2] = e, ar = r = ar - 144 | 0, r = Ar(r, 5440, 144), i = a = e + 16 | 0, c[r + 44 >> 2] = i, c[r + 20 >> 2] = i, t = (t = -2 - i | 0) >>> 0 >= 2147483647 ? 2147483647 : t, c[r + 48 >> 2] = t, i = i + t | 0, c[r + 28 >> 2] = i, c[r + 16 >> 2] = i, Zr(r, 2201, e, 0, 0), t && (i = c[r + 20 >> 2], f[i - ((0 | i) == c[r + 16 >> 2]) | 0] = 0), ar = r + 144 | 0, ar = n + 16 | 0;
              r: {
                if (3 & (r = a)) for (;;) {
                  if (!v[0 | r]) break r;
                  if (!(3 & (r = r + 1 | 0))) break;
                }
                for (; i = r, r = r + 4 | 0, !((-1 ^ (n = c[i >> 2])) & n - 16843009 & -2139062144););
                for (; i = (r = i) + 1 | 0, v[0 | r];);
              }
              return r = (i = cr(r = 1 + (r - a | 0) | 0)) ? Ar(i, a, r) : 0, ar = e + 96 | 0, 0 | r;
            },
            G: function G() {
              var r = 0;
              if (r = c[1748]) for (; aa[c[r >> 2]](), r = c[r + 4 >> 2];);
            },
            H: cr,
            I: aa,
            J: gr,
            K: function K(r, e, a, i, n) {
              return e |= 0, a |= 0, i |= 0, n |= 0, 0 | aa[0 | (r |= 0)](e, a, i, n);
            }
          };
        }(r);
      }(r);
    }
    Object.assign(e, n), n = null, e.wasmBinary && (f = e.wasmBinary), e.noExitRuntime;
    var s = Error;
    f = [], "object" != typeof {} && X("no native wasm support detected");
    var A,
      k,
      l,
      d,
      v,
      h,
      p,
      m,
      N,
      w = !1;
    function y(r, e, a) {
      a = e + a;
      for (var i = ""; !(e >= a);) {
        var n = r[e++];
        if (!n) break;
        if (128 & n) {
          var t = 63 & r[e++];
          if (192 == (224 & n)) i += String.fromCharCode((31 & n) << 6 | t);else {
            var f = 63 & r[e++];
            65536 > (n = 224 == (240 & n) ? (15 & n) << 12 | t << 6 | f : (7 & n) << 18 | t << 12 | f << 6 | 63 & r[e++]) ? i += String.fromCharCode(n) : (n -= 65536, i += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n));
          }
        } else i += String.fromCharCode(n);
      }
      return i;
    }
    function E() {
      var r = A.buffer;
      e.HEAP8 = k = new Int8Array(r), e.HEAP16 = d = new Int16Array(r), e.HEAP32 = h = new Int32Array(r), e.HEAPU8 = l = new Uint8Array(r), e.HEAPU16 = v = new Uint16Array(r), e.HEAPU32 = p = new Uint32Array(r), e.HEAPF32 = m = new Float32Array(r), e.HEAPF64 = N = new Float64Array(r);
    }
    var G = e.INITIAL_MEMORY || 16777216;
    65536 <= G || X("INITIAL_MEMORY should be larger than STACK_SIZE, was " + G + "! (STACK_SIZE=65536)"), A = e.wasmMemory ? e.wasmMemory : new function () {
      this.buffer = new ArrayBuffer(G / 65536 * 65536);
    }(), E(), G = A.buffer.byteLength;
    var R,
      g = [],
      Z = [],
      W = [];
    function V() {
      var r = e.preRun.shift();
      g.unshift(r);
    }
    var B,
      T = 0,
      I = null;
    function X(r) {
      throw e.onAbort && e.onAbort(r), c(r = "Aborted(" + r + ")"), w = !0, r = new s(r + ". Build with -sASSERTIONS for more info."), i(r), r;
    }
    function O(r) {
      return r.startsWith("data:application/octet-stream;base64,");
    }
    if (!O(B = "yoga-asm.wasm")) {
      var L = B;
      B = e.locateFile ? e.locateFile(L, t) : t + L;
    }
    function _(r) {
      for (; 0 < r.length;) r.shift()(e);
    }
    function F(r) {
      if (void 0 === r) return "_unknown";
      var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
      return 48 <= e && 57 >= e ? "_" + r : r;
    }
    function C(r, e) {
      return r = F(r), function () {
        return e.apply(this, arguments);
      };
    }
    var S = [{}, {
        value: void 0
      }, {
        value: null
      }, {
        value: !0
      }, {
        value: !1
      }],
      P = [];
    function Y(r) {
      var e = Error,
        a = C(r, function (e) {
          this.name = r, this.message = e, void 0 !== (e = Error(e).stack) && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
        });
      return a.prototype = Object.create(e.prototype), a.prototype.constructor = a, a.prototype.toString = function () {
        return void 0 === this.message ? this.name : this.name + ": " + this.message;
      }, a;
    }
    var U = void 0;
    function M(r) {
      throw new U(r);
    }
    var H = function H(r) {
        return r || M("Cannot use deleted val. handle = " + r), S[r].value;
      },
      Q = function Q(r) {
        switch (r) {
          case void 0:
            return 1;
          case null:
            return 2;
          case !0:
            return 3;
          case !1:
            return 4;
          default:
            var e = P.length ? P.pop() : S.length;
            return S[e] = {
              fa: 1,
              value: r
            }, e;
        }
      },
      z = void 0,
      j = void 0;
    function _D(r) {
      for (var e = ""; l[r];) e += j[l[r++]];
      return e;
    }
    var x = [];
    function J() {
      for (; x.length;) {
        var r = x.pop();
        r.L.Z = !1, r.delete();
      }
    }
    var K = void 0,
      _q = {};
    function $(r, e) {
      for (void 0 === e && M("ptr should not be undefined"); r.P;) e = r.aa(e), r = r.P;
      return e;
    }
    var er = {};
    function ar(r) {
      var e = _D(r = ee(r));
      return ne(r), e;
    }
    function ir(r, e) {
      var a = er[r];
      return void 0 === a && M(e + " has unknown type " + ar(r)), a;
    }
    function nr() {}
    var tr = !1;
    function fr(r) {
      --r.count.value, 0 === r.count.value && (r.S ? r.T.V(r.S) : r.O.M.V(r.N));
    }
    function or(r, e, a) {
      return e === a ? r : void 0 === a.P || null === (r = or(r, e, a.P)) ? null : a.ma(r);
    }
    var cr = {},
      ur = void 0;
    function br(r) {
      throw new ur(r);
    }
    function sr(r, e) {
      return e.O && e.N || br("makeClassHandle requires ptr and ptrType"), !!e.T != !!e.S && br("Both smartPtrType and smartPtr must be specified"), e.count = {
        value: 1
      }, Ar(Object.create(r, {
        L: {
          value: e
        }
      }));
    }
    function Ar(r) {
      return "undefined" == typeof FinalizationRegistry ? (Ar = function Ar(r) {
        return r;
      }, r) : (tr = new FinalizationRegistry(function (r) {
        fr(r.L);
      }), nr = function nr(r) {
        tr.unregister(r);
      }, (Ar = function Ar(r) {
        var e = r.L;
        return e.S && tr.register(r, {
          L: e
        }, r), r;
      })(r));
    }
    var kr = {};
    function lr(r) {
      for (; r.length;) {
        var e = r.pop();
        r.pop()(e);
      }
    }
    function dr(r) {
      return this.fromWireType(h[r >> 2]);
    }
    var vr = {},
      hr = {};
    function pr(r, e, a) {
      function i(e) {
        (e = a(e)).length !== r.length && br("Mismatched type converter count");
        for (var i = 0; i < r.length; ++i) Nr(r[i], e[i]);
      }
      r.forEach(function (r) {
        hr[r] = e;
      });
      var n = Array(e.length),
        t = [],
        f = 0;
      e.forEach(function (r, e) {
        er.hasOwnProperty(r) ? n[e] = er[r] : (t.push(r), vr.hasOwnProperty(r) || (vr[r] = []), vr[r].push(function () {
          n[e] = er[r], ++f === t.length && i(n);
        }));
      }), 0 === t.length && i(n);
    }
    function mr(r) {
      switch (r) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + r);
      }
    }
    function Nr(r, e, a) {
      if (a === void 0) {
        a = {};
      }
      if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var i = e.name;
      if (r || M('type "' + i + '" must have a positive integer typeid pointer'), er.hasOwnProperty(r)) {
        if (a.ta) return;
        M("Cannot register type '" + i + "' twice");
      }
      er[r] = e, delete hr[r], vr.hasOwnProperty(r) && (e = vr[r], delete vr[r], e.forEach(function (r) {
        return r();
      }));
    }
    function wr(r) {
      M(r.L.O.M.name + " instance already deleted");
    }
    function yr() {}
    function Er(r, e, a) {
      if (void 0 === r[e].R) {
        var i = r[e];
        r[e] = function () {
          return r[e].R.hasOwnProperty(arguments.length) || M("Function '" + a + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + r[e].R + ")!"), r[e].R[arguments.length].apply(this, arguments);
        }, r[e].R = [], r[e].R[i.Y] = i;
      }
    }
    function Gr(r, e, a, i, n, t, f, o) {
      this.name = r, this.constructor = e, this.W = a, this.V = i, this.P = n, this.oa = t, this.aa = f, this.ma = o, this.ia = [];
    }
    function Rr(r, e, a) {
      for (; e !== a;) e.aa || M("Expected null or instance of " + a.name + ", got an instance of " + e.name), r = e.aa(r), e = e.P;
      return r;
    }
    function gr(r, e) {
      return null === e ? (this.da && M("null is not a valid " + this.name), 0) : (e.L || M('Cannot pass "' + _r(e) + '" as a ' + this.name), e.L.N || M("Cannot pass deleted object as a pointer of type " + this.name), Rr(e.L.N, e.L.O.M, this.M));
    }
    function Zr(r, e) {
      if (null === e) {
        if (this.da && M("null is not a valid " + this.name), this.ca) {
          var a = this.ea();
          return null !== r && r.push(this.V, a), a;
        }
        return 0;
      }
      if (e.L || M('Cannot pass "' + _r(e) + '" as a ' + this.name), e.L.N || M("Cannot pass deleted object as a pointer of type " + this.name), !this.ba && e.L.O.ba && M("Cannot convert argument of type " + (e.L.T ? e.L.T.name : e.L.O.name) + " to parameter type " + this.name), a = Rr(e.L.N, e.L.O.M, this.M), this.ca) switch (void 0 === e.L.S && M("Passing raw pointer to smart pointer is illegal"), this.Aa) {
        case 0:
          e.L.T === this ? a = e.L.S : M("Cannot convert argument of type " + (e.L.T ? e.L.T.name : e.L.O.name) + " to parameter type " + this.name);
          break;
        case 1:
          a = e.L.S;
          break;
        case 2:
          if (e.L.T === this) a = e.L.S;else {
            var i = e.clone();
            a = this.wa(a, Q(function () {
              i.delete();
            })), null !== r && r.push(this.V, a);
          }
          break;
        default:
          M("Unsupporting sharing policy");
      }
      return a;
    }
    function Wr(r, e) {
      return null === e ? (this.da && M("null is not a valid " + this.name), 0) : (e.L || M('Cannot pass "' + _r(e) + '" as a ' + this.name), e.L.N || M("Cannot pass deleted object as a pointer of type " + this.name), e.L.O.ba && M("Cannot convert argument of type " + e.L.O.name + " to parameter type " + this.name), Rr(e.L.N, e.L.O.M, this.M));
    }
    function Vr(r, e, a, i) {
      this.name = r, this.M = e, this.da = a, this.ba = i, this.ca = !1, this.V = this.wa = this.ea = this.ja = this.Aa = this.va = void 0, void 0 !== e.P ? this.toWireType = Zr : (this.toWireType = i ? gr : Wr, this.U = null);
    }
    function Br(r, a) {
      var i = (r = _D(r)).includes("j") ? function (r, a) {
        var i = [];
        return function () {
          if (i.length = 0, Object.assign(i, arguments), r.includes("j")) {
            var n = e["dynCall_" + r];
            n = i && i.length ? n.apply(null, [a].concat(i)) : n.call(null, a);
          } else n = R.get(a).apply(null, i);
          return n;
        };
      }(r, a) : R.get(a);
      return "function" != typeof i && M("unknown function pointer with signature " + r + ": " + a), i;
    }
    var Tr = void 0;
    function Ir(r, e) {
      var a = [],
        i = {};
      throw e.forEach(function r(e) {
        i[e] || er[e] || (hr[e] ? hr[e].forEach(r) : (a.push(e), i[e] = !0));
      }), new Tr(r + ": " + a.map(ar).join([", "]));
    }
    function Xr(r, e, a, i, n) {
      var t = e.length;
      2 > t && M("argTypes array size mismatch! Must at least get return value and 'this' types!");
      var f = null !== e[1] && null !== a,
        o = !1;
      for (a = 1; a < e.length; ++a) if (null !== e[a] && void 0 === e[a].U) {
        o = !0;
        break;
      }
      var c = "void" !== e[0].name,
        u = t - 2,
        b = Array(u),
        s = [],
        A = [];
      return function () {
        if (arguments.length !== u && M("function " + r + " called with " + arguments.length + " arguments, expected " + u + " args!"), A.length = 0, s.length = f ? 2 : 1, s[0] = n, f) {
          var a = e[1].toWireType(A, this);
          s[1] = a;
        }
        for (var t = 0; t < u; ++t) b[t] = e[t + 2].toWireType(A, arguments[t]), s.push(b[t]);
        if (t = i.apply(null, s), o) lr(A);else for (var k = f ? 1 : 2; k < e.length; k++) {
          var l = 1 === k ? a : b[k - 2];
          null !== e[k].U && e[k].U(l);
        }
        return c ? e[0].fromWireType(t) : void 0;
      };
    }
    function Or(r, e) {
      for (var a = [], i = 0; i < r; i++) a.push(p[e + 4 * i >> 2]);
      return a;
    }
    function Lr(r) {
      4 < r && 0 == --S[r].fa && (S[r] = void 0, P.push(r));
    }
    function _r(r) {
      if (null === r) return "null";
      var e = typeof r;
      return "object" === e || "array" === e || "function" === e ? r.toString() : "" + r;
    }
    function Fr(r, e) {
      switch (e) {
        case 2:
          return function (r) {
            return this.fromWireType(m[r >> 2]);
          };
        case 3:
          return function (r) {
            return this.fromWireType(N[r >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + r);
      }
    }
    function Cr(r, e, a) {
      switch (e) {
        case 0:
          return a ? function (r) {
            return k[r];
          } : function (r) {
            return l[r];
          };
        case 1:
          return a ? function (r) {
            return d[r >> 1];
          } : function (r) {
            return v[r >> 1];
          };
        case 2:
          return a ? function (r) {
            return h[r >> 2];
          } : function (r) {
            return p[r >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + r);
      }
    }
    function Sr(r, e) {
      for (var a = "", i = 0; !(i >= e / 2); ++i) {
        var n = d[r + 2 * i >> 1];
        if (0 == n) break;
        a += String.fromCharCode(n);
      }
      return a;
    }
    function Pr(r, e, a) {
      if (void 0 === a && (a = 2147483647), 2 > a) return 0;
      var i = e;
      a = (a -= 2) < 2 * r.length ? a / 2 : r.length;
      for (var n = 0; n < a; ++n) d[e >> 1] = r.charCodeAt(n), e += 2;
      return d[e >> 1] = 0, e - i;
    }
    function Yr(r) {
      return 2 * r.length;
    }
    function Ur(r, e) {
      for (var a = 0, i = ""; !(a >= e / 4);) {
        var n = h[r + 4 * a >> 2];
        if (0 == n) break;
        ++a, 65536 <= n ? (n -= 65536, i += String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)) : i += String.fromCharCode(n);
      }
      return i;
    }
    function Mr(r, e, a) {
      if (void 0 === a && (a = 2147483647), 4 > a) return 0;
      var i = e;
      a = i + a - 4;
      for (var n = 0; n < r.length; ++n) {
        var t = r.charCodeAt(n);
        if (55296 <= t && 57343 >= t && (t = 65536 + ((1023 & t) << 10) | 1023 & r.charCodeAt(++n)), h[e >> 2] = t, (e += 4) + 4 > a) break;
      }
      return h[e >> 2] = 0, e - i;
    }
    function Hr(r) {
      for (var e = 0, a = 0; a < r.length; ++a) {
        var i = r.charCodeAt(a);
        55296 <= i && 57343 >= i && ++a, e += 4;
      }
      return e;
    }
    var Qr = {};
    function zr(r) {
      var e = Qr[r];
      return void 0 === e ? _D(r) : e;
    }
    var jr = [],
      Dr = [],
      xr = [null, [], []];
    U = e.BindingError = Y("BindingError"), e.count_emval_handles = function () {
      for (var r = 0, e = 5; e < S.length; ++e) void 0 !== S[e] && ++r;
      return r;
    }, e.get_first_emval = function () {
      for (var r = 5; r < S.length; ++r) if (void 0 !== S[r]) return S[r];
      return null;
    }, z = e.PureVirtualError = Y("PureVirtualError");
    for (var Jr = Array(256), Kr = 0; 256 > Kr; ++Kr) Jr[Kr] = String.fromCharCode(Kr);
    j = Jr, e.getInheritedInstanceCount = function () {
      return Object.keys(_q).length;
    }, e.getLiveInheritedInstances = function () {
      var r,
        e = [];
      for (r in _q) _q.hasOwnProperty(r) && e.push(_q[r]);
      return e;
    }, e.flushPendingDeletes = J, e.setDelayFunction = function (r) {
      K = r, x.length && K && K(J);
    }, ur = e.InternalError = Y("InternalError"), yr.prototype.isAliasOf = function (r) {
      if (!(this instanceof yr && r instanceof yr)) return !1;
      var e = this.L.O.M,
        a = this.L.N,
        i = r.L.O.M;
      for (r = r.L.N; e.P;) a = e.aa(a), e = e.P;
      for (; i.P;) r = i.aa(r), i = i.P;
      return e === i && a === r;
    }, yr.prototype.clone = function () {
      if (this.L.N || wr(this), this.L.$) return this.L.count.value += 1, this;
      var r = Ar,
        e = Object,
        a = e.create,
        i = Object.getPrototypeOf(this),
        n = this.L;
      return (r = r(a.call(e, i, {
        L: {
          value: {
            count: n.count,
            Z: n.Z,
            $: n.$,
            N: n.N,
            O: n.O,
            S: n.S,
            T: n.T
          }
        }
      }))).L.count.value += 1, r.L.Z = !1, r;
    }, yr.prototype.delete = function () {
      this.L.N || wr(this), this.L.Z && !this.L.$ && M("Object already scheduled for deletion"), nr(this), fr(this.L), this.L.$ || (this.L.S = void 0, this.L.N = void 0);
    }, yr.prototype.isDeleted = function () {
      return !this.L.N;
    }, yr.prototype.deleteLater = function () {
      return this.L.N || wr(this), this.L.Z && !this.L.$ && M("Object already scheduled for deletion"), x.push(this), 1 === x.length && K && K(J), this.L.Z = !0, this;
    }, Vr.prototype.pa = function (r) {
      return this.ja && (r = this.ja(r)), r;
    }, Vr.prototype.ga = function (r) {
      this.V && this.V(r);
    }, Vr.prototype.argPackAdvance = 8, Vr.prototype.readValueFromPointer = dr, Vr.prototype.deleteObject = function (r) {
      null !== r && r.delete();
    }, Vr.prototype.fromWireType = function (r) {
      function e() {
        return this.ca ? sr(this.M.W, {
          O: this.va,
          N: a,
          T: this,
          S: r
        }) : sr(this.M.W, {
          O: this,
          N: r
        });
      }
      var a = this.pa(r);
      if (!a) return this.ga(r), null;
      var i = function (r, e) {
        return e = $(r, e), _q[e];
      }(this.M, a);
      if (void 0 !== i) return 0 === i.L.count.value ? (i.L.N = a, i.L.S = r, i.clone()) : (i = i.clone(), this.ga(r), i);
      if (i = this.M.oa(a), !(i = cr[i])) return e.call(this);
      i = this.ba ? i.ka : i.pointerType;
      var n = or(a, this.M, i.M);
      return null === n ? e.call(this) : this.ca ? sr(i.M.W, {
        O: i,
        N: n,
        T: this,
        S: r
      }) : sr(i.M.W, {
        O: i,
        N: n
      });
    }, Tr = e.UnboundTypeError = Y("UnboundTypeError");
    var qr = "function" == typeof atob ? atob : function (r) {
        var e = "",
          a = 0;
        r = r.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do {
          var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
            t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++)),
            f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r.charAt(a++));
          i = i << 2 | n >> 4, n = (15 & n) << 4 | t >> 2;
          var o = (3 & t) << 6 | f;
          e += String.fromCharCode(i), 64 !== t && (e += String.fromCharCode(n)), 64 !== f && (e += String.fromCharCode(o));
        } while (a < r.length);
        return e;
      },
      $r = {
        q: function q(r, e, a) {
          r = _D(r), e = ir(e, "wrapper"), a = H(a);
          var i = [].slice,
            n = e.M,
            t = n.W,
            f = n.P.W,
            o = n.P.constructor;
          for (var c in r = C(r, function () {
            n.P.ia.forEach(function (r) {
              if (this[r] === f[r]) throw new z("Pure virtual function " + r + " must be implemented in JavaScript");
            }.bind(this)), Object.defineProperty(this, "__parent", {
              value: t
            }), this.__construct.apply(this, i.call(arguments));
          }), t.__construct = function () {
            this === t && M("Pass correct 'this' to __construct");
            var r = o.implement.apply(void 0, [this].concat(i.call(arguments)));
            nr(r);
            var e = r.L;
            r.notifyOnDestruction(), e.$ = !0, Object.defineProperties(this, {
              L: {
                value: e
              }
            }), Ar(this), r = e.N, r = $(n, r), _q.hasOwnProperty(r) ? M("Tried to register registered instance: " + r) : _q[r] = this;
          }, t.__destruct = function () {
            this === t && M("Pass correct 'this' to __destruct"), nr(this);
            var r = this.L.N;
            r = $(n, r), _q.hasOwnProperty(r) ? delete _q[r] : M("Tried to unregister unregistered instance: " + r);
          }, r.prototype = Object.create(t), a) r.prototype[c] = a[c];
          return Q(r);
        },
        k: function k(r) {
          var e = kr[r];
          delete kr[r];
          var a = e.ea,
            i = e.V,
            n = e.ha;
          pr([r], n.map(function (r) {
            return r.sa;
          }).concat(n.map(function (r) {
            return r.ya;
          })), function (r) {
            var t = {};
            return n.forEach(function (e, a) {
              var i = r[a],
                f = e.qa,
                o = e.ra,
                c = r[a + n.length],
                u = e.xa,
                b = e.za;
              t[e.na] = {
                read: function read(r) {
                  return i.fromWireType(f(o, r));
                },
                write: function write(r, e) {
                  var a = [];
                  u(b, r, c.toWireType(a, e)), lr(a);
                }
              };
            }), [{
              name: e.name,
              fromWireType: function fromWireType(r) {
                var e,
                  a = {};
                for (e in t) a[e] = t[e].read(r);
                return i(r), a;
              },
              toWireType: function toWireType(r, e) {
                for (var n in t) if (!(n in e)) throw new TypeError('Missing field:  "' + n + '"');
                var f = a();
                for (n in t) t[n].write(f, e[n]);
                return null !== r && r.push(i, f), f;
              },
              argPackAdvance: 8,
              readValueFromPointer: dr,
              U: i
            }];
          });
        },
        w: function w() {},
        C: function C(r, e, a, i, n) {
          var t = mr(a);
          Nr(r, {
            name: e = _D(e),
            fromWireType: function fromWireType(r) {
              return !!r;
            },
            toWireType: function toWireType(r, e) {
              return e ? i : n;
            },
            argPackAdvance: 8,
            readValueFromPointer: function readValueFromPointer(r) {
              if (1 === a) var i = k;else if (2 === a) i = d;else {
                if (4 !== a) throw new TypeError("Unknown boolean type size: " + e);
                i = h;
              }
              return this.fromWireType(i[r >> t]);
            },
            U: null
          });
        },
        f: function f(r, a, i, n, t, _f, o, c, u, b, s, A, k) {
          s = _D(s), _f = Br(t, _f), c && (c = Br(o, c)), b && (b = Br(u, b)), k = Br(A, k);
          var l = F(s);
          !function (r, a) {
            e.hasOwnProperty(r) ? (M("Cannot register public name '" + r + "' twice"), Er(e, r, r), e.hasOwnProperty(void 0) && M("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"), e[r].R[void 0] = a) : e[r] = a;
          }(l, function () {
            Ir("Cannot construct " + s + " due to unbound types", [n]);
          }), pr([r, a, i], n ? [n] : [], function (a) {
            if (a = a[0], n) var i = a.M,
              t = i.W;else t = yr.prototype;
            a = C(l, function () {
              if (Object.getPrototypeOf(this) !== o) throw new U("Use 'new' to construct " + s);
              if (void 0 === u.X) throw new U(s + " has no accessible constructor");
              var r = u.X[arguments.length];
              if (void 0 === r) throw new U("Tried to invoke ctor of " + s + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(u.X).toString() + ") parameters instead!");
              return r.apply(this, arguments);
            });
            var o = Object.create(t, {
              constructor: {
                value: a
              }
            });
            a.prototype = o;
            var u = new Gr(s, a, o, k, i, _f, c, b);
            i = new Vr(s, u, !0, !1), t = new Vr(s + "*", u, !1, !1);
            var A = new Vr(s + " const*", u, !1, !0);
            return cr[r] = {
              pointerType: t,
              ka: A
            }, function (r, a) {
              e.hasOwnProperty(r) || br("Replacing nonexistant public symbol"), e[r] = a, e[r].Y = void 0;
            }(l, a), [i, t, A];
          });
        },
        d: function d(r, e, a, i, n, t, f) {
          var o = Or(a, i);
          e = _D(e), t = Br(n, t), pr([], [r], function (r) {
            function i() {
              Ir("Cannot call " + n + " due to unbound types", o);
            }
            var n = (r = r[0]).name + "." + e;
            e.startsWith("@@") && (e = Symbol[e.substring(2)]);
            var c = r.M.constructor;
            return void 0 === c[e] ? (i.Y = a - 1, c[e] = i) : (Er(c, e, n), c[e].R[a - 1] = i), pr([], o, function (r) {
              return r = Xr(n, [r[0], null].concat(r.slice(1)), null, t, f), void 0 === c[e].R ? (r.Y = a - 1, c[e] = r) : c[e].R[a - 1] = r, [];
            }), [];
          });
        },
        p: function p(r, e, a, i, n, t) {
          0 < e || X();
          var f = Or(e, a);
          n = Br(i, n), pr([], [r], function (r) {
            var a = "constructor " + (r = r[0]).name;
            if (void 0 === r.M.X && (r.M.X = []), void 0 !== r.M.X[e - 1]) throw new U("Cannot register multiple constructors with identical number of parameters (" + (e - 1) + ") for class '" + r.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
            return r.M.X[e - 1] = function () {
              Ir("Cannot construct " + r.name + " due to unbound types", f);
            }, pr([], f, function (i) {
              return i.splice(1, 0, null), r.M.X[e - 1] = Xr(a, i, null, n, t), [];
            }), [];
          });
        },
        b: function b(r, e, a, i, n, t, f, o) {
          var c = Or(a, i);
          e = _D(e), t = Br(n, t), pr([], [r], function (r) {
            function i() {
              Ir("Cannot call " + n + " due to unbound types", c);
            }
            var n = (r = r[0]).name + "." + e;
            e.startsWith("@@") && (e = Symbol[e.substring(2)]), o && r.M.ia.push(e);
            var u = r.M.W,
              b = u[e];
            return void 0 === b || void 0 === b.R && b.className !== r.name && b.Y === a - 2 ? (i.Y = a - 2, i.className = r.name, u[e] = i) : (Er(u, e, n), u[e].R[a - 2] = i), pr([], c, function (i) {
              return i = Xr(n, i, r, t, f), void 0 === u[e].R ? (i.Y = a - 2, u[e] = i) : u[e].R[a - 2] = i, [];
            }), [];
          });
        },
        B: function B(r, e) {
          Nr(r, {
            name: e = _D(e),
            fromWireType: function fromWireType(r) {
              var e = H(r);
              return Lr(r), e;
            },
            toWireType: function toWireType(r, e) {
              return Q(e);
            },
            argPackAdvance: 8,
            readValueFromPointer: dr,
            U: null
          });
        },
        n: function n(r, e, a) {
          a = mr(a), Nr(r, {
            name: e = _D(e),
            fromWireType: function fromWireType(r) {
              return r;
            },
            toWireType: function toWireType(r, e) {
              return e;
            },
            argPackAdvance: 8,
            readValueFromPointer: Fr(e, a),
            U: null
          });
        },
        e: function e(r, _e2, a, i, n) {
          _e2 = _D(_e2), -1 === n && (n = 4294967295), n = mr(a);
          var t = function t(r) {
            return r;
          };
          if (0 === i) {
            var f = 32 - 8 * a;
            t = function t(r) {
              return r << f >>> f;
            };
          }
          a = _e2.includes("unsigned") ? function (r, e) {
            return e >>> 0;
          } : function (r, e) {
            return e;
          }, Nr(r, {
            name: _e2,
            fromWireType: t,
            toWireType: a,
            argPackAdvance: 8,
            readValueFromPointer: Cr(_e2, n, 0 !== i),
            U: null
          });
        },
        c: function c(r, e, a) {
          function i(r) {
            r >>= 2;
            var e = p;
            return new n(e.buffer, e[r + 1], e[r]);
          }
          var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
          Nr(r, {
            name: a = _D(a),
            fromWireType: i,
            argPackAdvance: 8,
            readValueFromPointer: i
          }, {
            ta: !0
          });
        },
        o: function o(r, e) {
          var a = "std::string" === (e = _D(e));
          Nr(r, {
            name: e,
            fromWireType: function fromWireType(r) {
              var e = p[r >> 2],
                i = r + 4;
              if (a) for (var n = i, t = 0; t <= e; ++t) {
                var f = i + t;
                if (t == e || 0 == l[f]) {
                  if (n = n ? y(l, n, f - n) : "", void 0 === o) var o = n;else o += String.fromCharCode(0), o += n;
                  n = f + 1;
                }
              } else {
                for (o = Array(e), t = 0; t < e; ++t) o[t] = String.fromCharCode(l[i + t]);
                o = o.join("");
              }
              return ne(r), o;
            },
            toWireType: function toWireType(r, e) {
              e instanceof ArrayBuffer && (e = new Uint8Array(e));
              var i,
                n = "string" == typeof e;
              if (n || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Int8Array || M("Cannot pass non-string to std::string"), a && n) {
                var t = 0;
                for (i = 0; i < e.length; ++i) {
                  var f = e.charCodeAt(i);
                  127 >= f ? t++ : 2047 >= f ? t += 2 : 55296 <= f && 57343 >= f ? (t += 4, ++i) : t += 3;
                }
                i = t;
              } else i = e.length;
              if (f = (t = ie(4 + i + 1)) + 4, p[t >> 2] = i, a && n) {
                if (n = f, f = i + 1, i = l, 0 < f) {
                  f = n + f - 1;
                  for (var o = 0; o < e.length; ++o) {
                    var c = e.charCodeAt(o);
                    if (55296 <= c && 57343 >= c && (c = 65536 + ((1023 & c) << 10) | 1023 & e.charCodeAt(++o)), 127 >= c) {
                      if (n >= f) break;
                      i[n++] = c;
                    } else {
                      if (2047 >= c) {
                        if (n + 1 >= f) break;
                        i[n++] = 192 | c >> 6;
                      } else {
                        if (65535 >= c) {
                          if (n + 2 >= f) break;
                          i[n++] = 224 | c >> 12;
                        } else {
                          if (n + 3 >= f) break;
                          i[n++] = 240 | c >> 18, i[n++] = 128 | c >> 12 & 63;
                        }
                        i[n++] = 128 | c >> 6 & 63;
                      }
                      i[n++] = 128 | 63 & c;
                    }
                  }
                  i[n] = 0;
                }
              } else if (n) for (n = 0; n < i; ++n) 255 < (o = e.charCodeAt(n)) && (ne(f), M("String has UTF-16 code units that do not fit in 8 bits")), l[f + n] = o;else for (n = 0; n < i; ++n) l[f + n] = e[n];
              return null !== r && r.push(ne, t), t;
            },
            argPackAdvance: 8,
            readValueFromPointer: dr,
            U: function U(r) {
              ne(r);
            }
          });
        },
        j: function j(r, e, a) {
          if (a = _D(a), 2 === e) var i = Sr,
            n = Pr,
            t = Yr,
            f = function f() {
              return v;
            },
            o = 1;else 4 === e && (i = Ur, n = Mr, t = Hr, f = function f() {
            return p;
          }, o = 2);
          Nr(r, {
            name: a,
            fromWireType: function fromWireType(r) {
              for (var a, n = p[r >> 2], t = f(), c = r + 4, u = 0; u <= n; ++u) {
                var b = r + 4 + u * e;
                u != n && 0 != t[b >> o] || (c = i(c, b - c), void 0 === a ? a = c : (a += String.fromCharCode(0), a += c), c = b + e);
              }
              return ne(r), a;
            },
            toWireType: function toWireType(r, i) {
              "string" != typeof i && M("Cannot pass non-string to C++ string type " + a);
              var f = t(i),
                c = ie(4 + f + e);
              return p[c >> 2] = f >> o, n(i, c + 4, f + e), null !== r && r.push(ne, c), c;
            },
            argPackAdvance: 8,
            readValueFromPointer: dr,
            U: function U(r) {
              ne(r);
            }
          });
        },
        l: function l(r, e, a, i, n, t) {
          kr[r] = {
            name: _D(e),
            ea: Br(a, i),
            V: Br(n, t),
            ha: []
          };
        },
        i: function i(r, e, a, _i, n, t, f, o, c, u) {
          kr[r].ha.push({
            na: _D(e),
            sa: a,
            qa: Br(_i, n),
            ra: t,
            ya: f,
            xa: Br(o, c),
            za: u
          });
        },
        D: function D(r, e) {
          Nr(r, {
            ua: !0,
            name: e = _D(e),
            argPackAdvance: 0,
            fromWireType: function fromWireType() {},
            toWireType: function toWireType() {}
          });
        },
        t: function t(r, e, a, i, n) {
          r = jr[r], e = H(e), a = zr(a);
          var t = [];
          return p[i >> 2] = Q(t), r(e, a, t, n);
        },
        u: function u(r, e, a, i) {
          (r = jr[r])(e = H(e), a = zr(a), null, i);
        },
        h: Lr,
        m: function m(r, e) {
          var a = function (r, e) {
              for (var a = Array(r), i = 0; i < r; ++i) a[i] = ir(p[e + 4 * i >> 2], "parameter " + i);
              return a;
            }(r, e),
            i = a[0];
          e = i.name + "_$" + a.slice(1).map(function (r) {
            return r.name;
          }).join("_") + "$";
          var n = Dr[e];
          if (void 0 !== n) return n;
          var t = Array(r - 1);
          return n = function (r) {
            var e = jr.length;
            return jr.push(r), e;
          }(function (e, n, f, o) {
            for (var c = 0, u = 0; u < r - 1; ++u) t[u] = a[u + 1].readValueFromPointer(o + c), c += a[u + 1].argPackAdvance;
            for (e = e[n].apply(e, t), u = 0; u < r - 1; ++u) a[u + 1].la && a[u + 1].la(t[u]);
            if (!i.ua) return i.toWireType(f, e);
          }), Dr[e] = n;
        },
        r: function r(_r2) {
          4 < _r2 && (S[_r2].fa += 1);
        },
        s: function s(r) {
          lr(H(r)), Lr(r);
        },
        g: function g() {
          X("");
        },
        y: function y(r, e, a) {
          l.copyWithin(r, e, e + a);
        },
        x: function x(r) {
          var e = l.length;
          if (2147483648 < (r >>>= 0)) return !1;
          for (var a = 1; 4 >= a; a *= 2) {
            var i = e * (1 + .2 / a);
            i = Math.min(i, r + 100663296);
            var n = Math,
              t = n.min;
            i = Math.max(r, i), i += (65536 - i % 65536) % 65536;
            r: {
              var f = A.buffer;
              try {
                A.grow(t.call(n, 2147483648, i) - f.byteLength + 65535 >>> 16), E();
                var o = 1;
                break r;
              } catch (r) {}
              o = void 0;
            }
            if (o) return !0;
          }
          return !1;
        },
        A: function A() {
          return 52;
        },
        v: function v() {
          return 70;
        },
        z: function z(r, e, a, i) {
          for (var n = 0, t = 0; t < a; t++) {
            var f = p[e >> 2],
              u = p[e + 4 >> 2];
            e += 8;
            for (var b = 0; b < u; b++) {
              var s = l[f + b],
                A = xr[r];
              0 === s || 10 === s ? ((1 === r ? o : c)(y(A, 0)), A.length = 0) : A.push(s);
            }
            n += u;
          }
          return p[i >> 2] = n, 0;
        },
        a: A
      },
      re = function () {
        function r(r) {
          e.asm = r.exports, R = e.asm.I, Z.unshift(e.asm.E), T--, e.monitorRunDependencies && e.monitorRunDependencies(T), 0 == T && I && (r = I, I = null, r());
        }
        var a = {
          a: $r
        };
        if (T++, e.monitorRunDependencies && e.monitorRunDependencies(T), e.instantiateWasm) try {
          return e.instantiateWasm(a, r);
        } catch (r) {
          c("Module.instantiateWasm callback failed with error: " + r), i(r);
        }
        return a = function (r) {
          var e = B;
          try {
            try {
              if (e == B && f) new Uint8Array(f);else {
                if (O(e)) {
                  try {
                    var a = qr(e.slice(37)),
                      i = new Uint8Array(a.length);
                    for (e = 0; e < a.length; ++e) i[e] = a.charCodeAt(e);
                    var n = i;
                  } catch (r) {
                    throw Error("Converting base64 string to bytes failed.");
                  }
                  var t = n;
                } else t = void 0;
                if (!t) throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
              }
            } catch (r) {
              X(r);
            }
            var o = new u(),
              s = new b(r);
          } catch (e) {
            throw r = e.toString(), c("failed to compile wasm module: " + r), (r.includes("imported Memory") || r.includes("memory import")) && c("Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."), e;
          }
          return [s, o];
        }(a), r(a[0]), e.asm;
      }(),
      ee = e.___getTypeName = re.F;
    e.__embind_initialize_bindings = re.G;
    var ae,
      ie = re.H,
      ne = re.J;
    function te() {
      function r() {
        if (!ae && (ae = !0, e.calledRun = !0, !w)) {
          if (_(Z), a(e), e.onRuntimeInitialized && e.onRuntimeInitialized(), e.postRun) for ("function" == typeof e.postRun && (e.postRun = [e.postRun]); e.postRun.length;) {
            var r = e.postRun.shift();
            W.unshift(r);
          }
          _(W);
        }
      }
      if (!(0 < T)) {
        if (e.preRun) for ("function" == typeof e.preRun && (e.preRun = [e.preRun]); e.preRun.length;) V();
        _(g), 0 < T || (e.setStatus ? (e.setStatus("Running..."), setTimeout(function () {
          setTimeout(function () {
            e.setStatus("");
          }, 1), r();
        }, 1)) : r());
      }
    }
    if (e.dynCall_jiji = re.K, I = function r() {
      ae || te(), ae || (I = r);
    }, e.preInit) for ("function" == typeof e.preInit && (e.preInit = [e.preInit]); 0 < e.preInit.length;) e.preInit.pop()();
    return te(), r;
  });
function ar() {
  return AE(er());
}

// eslint-disable-next-line import/no-unresolved
var index = ar();

export { index as default };
