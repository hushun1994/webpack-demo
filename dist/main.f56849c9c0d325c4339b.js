!(function (e) {
  function n(n) {
    for (var t, o, u = n[0], c = n[1], i = 0, l = []; i < u.length; i++)
      (o = u[i]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && l.push(r[o][0]),
        (r[o] = 0);
    for (t in c) Object.prototype.hasOwnProperty.call(c, t) && (e[t] = c[t]);
    for (a && a(n); l.length; ) l.shift()();
  }
  var t = {},
    r = { 0: 0 };
  function o(n) {
    if (t[n]) return t[n].exports;
    var r = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function (e) {
    var n = [],
      t = r[e];
    if (0 !== t)
      if (t) n.push(t[2]);
      else {
        var u = new Promise(function (n, o) {
          t = r[e] = [n, o];
        });
        n.push((t[2] = u));
        var c,
          i = document.createElement("script");
        (i.charset = "utf-8"),
          (i.timeout = 120),
          o.nc && i.setAttribute("nonce", o.nc),
          (i.src = (function (e) {
            return (
              o.p +
              "" +
              ({}[e] || e) +
              "." +
              { 1: "79682b6e84e61b9c3bd7" }[e] +
              ".js"
            );
          })(e));
        var a = new Error();
        c = function (n) {
          (i.onerror = i.onload = null), clearTimeout(l);
          var t = r[e];
          if (0 !== t) {
            if (t) {
              var o = n && ("load" === n.type ? "missing" : n.type),
                u = n && n.target && n.target.src;
              (a.message =
                "Loading chunk " + e + " failed.\n(" + o + ": " + u + ")"),
                (a.name = "ChunkLoadError"),
                (a.type = o),
                (a.request = u),
                t[1](a);
            }
            r[e] = void 0;
          }
        };
        var l = setTimeout(function () {
          c({ type: "timeout", target: i });
        }, 12e4);
        (i.onerror = i.onload = c), document.head.appendChild(i);
      }
    return Promise.all(n);
  }),
    (o.m = e),
    (o.c = t),
    (o.d = function (e, n, t) {
      o.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: t });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, n) {
      if ((1 & n && (e = o(e)), 8 & n)) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            t,
            r,
            function (n) {
              return e[n];
            }.bind(null, r)
          );
      return t;
    }),
    (o.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(n, "a", n), n;
    }),
    (o.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (o.p = ""),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var u = (window.webpackJsonp = window.webpackJsonp || []),
    c = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var i = 0; i < u.length; i++) n(u[i]);
  var a = c;
  o((o.s = 4));
})([
  function (e, n, t) {},
  function (e, n, t) {},
  function (e, n, t) {},
  function (e, n, t) {},
  function (e, n, t) {
    "use strict";
    t.r(n);
    t(0), t(1), t(2), t(3);
    var r = t.p + "20dfa4ee148883a711814848a9a648c9.jpeg";
    console.log("hushun");
    const o = document.querySelector(".content .box1"),
      u = document.querySelector(".content .box2"),
      c = document.createElement("button");
    (c.innerText = "懒加载"),
      (c.onclick = () => {
        t.e(1)
          .then(t.bind(null, 5))
          .then(
            (e) => {
              console.log(e.default),
                (u.innerHTML = `\n        <img src="${e.default}">\n      `);
            },
            () => {
              console.log("模块加载失败");
            }
          );
      }),
      document.body.appendChild(c),
      (o.innerHTML = `\n  <img src="${r}">\n`);
  },
]);
