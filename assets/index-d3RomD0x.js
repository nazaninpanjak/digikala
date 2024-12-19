(function () {
  const _ = document.createElement("link").relList;
  if (_ && _.supports && _.supports("modulepreload")) return;
  for (const X of document.querySelectorAll('link[rel="modulepreload"]')) q(X);
  new MutationObserver((X) => {
    for (const j of X)
      if (j.type === "childList")
        for (const V of j.addedNodes)
          V.tagName === "LINK" && V.rel === "modulepreload" && q(V);
  }).observe(document, { childList: !0, subtree: !0 });
  function $(X) {
    const j = {};
    return (
      X.integrity && (j.integrity = X.integrity),
      X.referrerPolicy && (j.referrerPolicy = X.referrerPolicy),
      X.crossOrigin === "use-credentials"
        ? (j.credentials = "include")
        : X.crossOrigin === "anonymous"
        ? (j.credentials = "omit")
        : (j.credentials = "same-origin"),
      j
    );
  }
  function q(X) {
    if (X.ep) return;
    X.ep = !0;
    const j = $(X);
    fetch(X.href, j);
  }
})();
(function () {
  function O(i) {
    return (
      i !== null &&
      typeof i == "object" &&
      "constructor" in i &&
      i.constructor === Object
    );
  }
  function _(i, e) {
    i === void 0 && (i = {}),
      e === void 0 && (e = {}),
      Object.keys(e).forEach((t) => {
        i[t] === void 0
          ? (i[t] = e[t])
          : O(e[t]) && O(i[t]) && Object.keys(e[t]).length > 0 && _(i[t], e[t]);
      });
  }
  const $ = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function q() {
    const i = typeof document < "u" ? document : {};
    return _(i, $), i;
  }
  const X = {
    document: $,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (i) =>
      typeof setTimeout > "u" ? (i(), null) : setTimeout(i, 0),
    cancelAnimationFrame(i) {
      typeof setTimeout < "u" && clearTimeout(i);
    },
  };
  function j() {
    const i = typeof window < "u" ? window : {};
    return _(i, X), i;
  }
  function V(i) {
    return (
      i === void 0 && (i = ""),
      i
        .trim()
        .split(" ")
        .filter((e) => !!e.trim())
    );
  }
  function te(i, e) {
    return e === void 0 && (e = 0), setTimeout(i, e);
  }
  function W() {
    return Date.now();
  }
  function Pe(i, e) {
    e === void 0 && (e = "x");
    const t = j();
    let s, r, a;
    const p = (function (o) {
      const n = j();
      let c;
      return (
        n.getComputedStyle && (c = n.getComputedStyle(o, null)),
        !c && o.currentStyle && (c = o.currentStyle),
        c || (c = o.style),
        c
      );
    })(i);
    return (
      t.WebKitCSSMatrix
        ? ((r = p.transform || p.webkitTransform),
          r.split(",").length > 6 &&
            (r = r
              .split(", ")
              .map((o) => o.replace(",", "."))
              .join(", ")),
          (a = new t.WebKitCSSMatrix(r === "none" ? "" : r)))
        : ((a =
            p.MozTransform ||
            p.OTransform ||
            p.MsTransform ||
            p.msTransform ||
            p.transform ||
            p
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (s = a.toString().split(","))),
      e === "x" &&
        (r = t.WebKitCSSMatrix
          ? a.m41
          : s.length === 16
          ? parseFloat(s[12])
          : parseFloat(s[4])),
      e === "y" &&
        (r = t.WebKitCSSMatrix
          ? a.m42
          : s.length === 16
          ? parseFloat(s[13])
          : parseFloat(s[5])),
      r || 0
    );
  }
  function ce(i) {
    return (
      typeof i == "object" &&
      i !== null &&
      i.constructor &&
      Object.prototype.toString.call(i).slice(8, -1) === "Object"
    );
  }
  function U() {
    const i = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      e = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < arguments.length; s += 1) {
      const r = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (
        r != null &&
        ((t = r),
        !(typeof window < "u" && window.HTMLElement !== void 0
          ? t instanceof HTMLElement
          : t && (t.nodeType === 1 || t.nodeType === 11)))
      ) {
        const a = Object.keys(Object(r)).filter((p) => e.indexOf(p) < 0);
        for (let p = 0, o = a.length; p < o; p += 1) {
          const n = a[p],
            c = Object.getOwnPropertyDescriptor(r, n);
          c !== void 0 &&
            c.enumerable &&
            (ce(i[n]) && ce(r[n])
              ? r[n].__swiper__
                ? (i[n] = r[n])
                : U(i[n], r[n])
              : !ce(i[n]) && ce(r[n])
              ? ((i[n] = {}), r[n].__swiper__ ? (i[n] = r[n]) : U(i[n], r[n]))
              : (i[n] = r[n]));
        }
      }
    }
    var t;
    return i;
  }
  function pe(i, e, t) {
    i.style.setProperty(e, t);
  }
  function Xe(i) {
    let { swiper: e, targetPosition: t, side: s } = i;
    const r = j(),
      a = -e.translate;
    let p,
      o = null;
    const n = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      r.cancelAnimationFrame(e.cssModeFrameID);
    const c = t > a ? "next" : "prev",
      u = (d, m) => (c === "next" && d >= m) || (c === "prev" && d <= m),
      l = () => {
        (p = new Date().getTime()), o === null && (o = p);
        const d = Math.max(Math.min((p - o) / n, 1), 0),
          m = 0.5 - Math.cos(d * Math.PI) / 2;
        let g = a + m * (t - a);
        if ((u(g, t) && (g = t), e.wrapperEl.scrollTo({ [s]: g }), u(g, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: g });
            }),
            void r.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = r.requestAnimationFrame(l);
      };
    l();
  }
  function re(i) {
    return (
      i.querySelector(".swiper-slide-transform") ||
      (i.shadowRoot && i.shadowRoot.querySelector(".swiper-slide-transform")) ||
      i
    );
  }
  function F(i, e) {
    e === void 0 && (e = "");
    const t = [...i.children];
    return (
      i instanceof HTMLSlotElement && t.push(...i.assignedElements()),
      e ? t.filter((s) => s.matches(e)) : t
    );
  }
  function ve(i) {
    try {
      return void console.warn(i);
    } catch {}
  }
  function K(i, e) {
    e === void 0 && (e = []);
    const t = document.createElement(i);
    return t.classList.add(...(Array.isArray(e) ? e : V(e))), t;
  }
  function we(i) {
    const e = j(),
      t = q(),
      s = i.getBoundingClientRect(),
      r = t.body,
      a = i.clientTop || r.clientTop || 0,
      p = i.clientLeft || r.clientLeft || 0,
      o = i === e ? e.scrollY : i.scrollTop,
      n = i === e ? e.scrollX : i.scrollLeft;
    return { top: s.top + o - a, left: s.left + n - p };
  }
  function ae(i, e) {
    return j().getComputedStyle(i, null).getPropertyValue(e);
  }
  function ue(i) {
    let e,
      t = i;
    if (t) {
      for (e = 0; (t = t.previousSibling) !== null; )
        t.nodeType === 1 && (e += 1);
      return e;
    }
  }
  function ne(i, e) {
    const t = [];
    let s = i.parentElement;
    for (; s; )
      e ? s.matches(e) && t.push(s) : t.push(s), (s = s.parentElement);
    return t;
  }
  function me(i, e) {
    e &&
      i.addEventListener("transitionend", function t(s) {
        s.target === i &&
          (e.call(i, s), i.removeEventListener("transitionend", t));
      });
  }
  function Le(i, e, t) {
    const s = j();
    return t
      ? i[e === "width" ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            s
              .getComputedStyle(i, null)
              .getPropertyValue(e === "width" ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            s
              .getComputedStyle(i, null)
              .getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")
          )
      : i.offsetWidth;
  }
  function N(i) {
    return (Array.isArray(i) ? i : [i]).filter((e) => !!e);
  }
  function be(i) {
    return (e) =>
      Math.abs(e) > 0 &&
      i.browser &&
      i.browser.need3dFix &&
      Math.abs(e) % 90 == 0
        ? e + 0.001
        : e;
  }
  let ze, ke, $e;
  function Ye() {
    return (
      ze ||
        (ze = (function () {
          const i = j(),
            e = q();
          return {
            smoothScroll:
              e.documentElement &&
              e.documentElement.style &&
              "scrollBehavior" in e.documentElement.style,
            touch: !!(
              "ontouchstart" in i ||
              (i.DocumentTouch && e instanceof i.DocumentTouch)
            ),
          };
        })()),
      ze
    );
  }
  function Fe(i) {
    return (
      i === void 0 && (i = {}),
      ke ||
        (ke = (function (e) {
          let { userAgent: t } = e === void 0 ? {} : e;
          const s = Ye(),
            r = j(),
            a = r.navigator.platform,
            p = t || r.navigator.userAgent,
            o = { ios: !1, android: !1 },
            n = r.screen.width,
            c = r.screen.height,
            u = p.match(/(Android);?[\s\/]+([\d.]+)?/);
          let l = p.match(/(iPad).*OS\s([\d_]+)/);
          const d = p.match(/(iPod)(.*OS\s([\d_]+))?/),
            m = !l && p.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            g = a === "Win32";
          let w = a === "MacIntel";
          return (
            !l &&
              w &&
              s.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${n}x${c}`) >= 0 &&
              ((l = p.match(/(Version)\/([\d.]+)/)),
              l || (l = [0, 1, "13_0_0"]),
              (w = !1)),
            u && !g && ((o.os = "android"), (o.android = !0)),
            (l || m || d) && ((o.os = "ios"), (o.ios = !0)),
            o
          );
        })(i)),
      ke
    );
  }
  function ct() {
    return (
      $e ||
        ($e = (function () {
          const i = j(),
            e = Fe();
          let t = !1;
          function s() {
            const p = i.navigator.userAgent.toLowerCase();
            return (
              p.indexOf("safari") >= 0 &&
              p.indexOf("chrome") < 0 &&
              p.indexOf("android") < 0
            );
          }
          if (s()) {
            const p = String(i.navigator.userAgent);
            if (p.includes("Version/")) {
              const [o, n] = p
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((c) => Number(c));
              t = o < 16 || (o === 16 && n < 2);
            }
          }
          const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              i.navigator.userAgent
            ),
            a = s();
          return {
            isSafari: t || a,
            needPerspectiveFix: t,
            need3dFix: a || (r && e.ios),
            isWebView: r,
          };
        })()),
      $e
    );
  }
  var pt = {
    on(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      const r = t ? "unshift" : "push";
      return (
        i.split(" ").forEach((a) => {
          s.eventsListeners[a] || (s.eventsListeners[a] = []),
            s.eventsListeners[a][r](e);
        }),
        s
      );
    },
    once(i, e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed || typeof e != "function") return s;
      function r() {
        s.off(i, r), r.__emitterProxy && delete r.__emitterProxy;
        for (var a = arguments.length, p = new Array(a), o = 0; o < a; o++)
          p[o] = arguments[o];
        e.apply(s, p);
      }
      return (r.__emitterProxy = e), s.on(i, r, t);
    },
    onAny(i, e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed || typeof i != "function") return t;
      const s = e ? "unshift" : "push";
      return (
        t.eventsAnyListeners.indexOf(i) < 0 && t.eventsAnyListeners[s](i), t
      );
    },
    offAny(i) {
      const e = this;
      if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
      const t = e.eventsAnyListeners.indexOf(i);
      return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
    },
    off(i, e) {
      const t = this;
      return (
        !t.eventsListeners ||
          t.destroyed ||
          (t.eventsListeners &&
            i.split(" ").forEach((s) => {
              e === void 0
                ? (t.eventsListeners[s] = [])
                : t.eventsListeners[s] &&
                  t.eventsListeners[s].forEach((r, a) => {
                    (r === e || (r.__emitterProxy && r.__emitterProxy === e)) &&
                      t.eventsListeners[s].splice(a, 1);
                  });
            })),
        t
      );
    },
    emit() {
      const i = this;
      if (!i.eventsListeners || i.destroyed || !i.eventsListeners) return i;
      let e, t, s;
      for (var r = arguments.length, a = new Array(r), p = 0; p < r; p++)
        a[p] = arguments[p];
      return (
        typeof a[0] == "string" || Array.isArray(a[0])
          ? ((e = a[0]), (t = a.slice(1, a.length)), (s = i))
          : ((e = a[0].events), (t = a[0].data), (s = a[0].context || i)),
        t.unshift(s),
        (Array.isArray(e) ? e : e.split(" ")).forEach((o) => {
          i.eventsAnyListeners &&
            i.eventsAnyListeners.length &&
            i.eventsAnyListeners.forEach((n) => {
              n.apply(s, [o, ...t]);
            }),
            i.eventsListeners &&
              i.eventsListeners[o] &&
              i.eventsListeners[o].forEach((n) => {
                n.apply(s, t);
              });
        }),
        i
      );
    },
  };
  const Ve = (i, e, t) => {
      e && !i.classList.contains(t)
        ? i.classList.add(t)
        : !e && i.classList.contains(t) && i.classList.remove(t);
    },
    Ie = (i, e, t) => {
      e && !i.classList.contains(t)
        ? i.classList.add(t)
        : !e && i.classList.contains(t) && i.classList.remove(t);
    },
    ye = (i, e) => {
      if (!i || i.destroyed || !i.params) return;
      const t = e.closest(
        i.isElement ? "swiper-slide" : `.${i.params.slideClass}`
      );
      if (t) {
        let s = t.querySelector(`.${i.params.lazyPreloaderClass}`);
        !s &&
          i.isElement &&
          (t.shadowRoot
            ? (s = t.shadowRoot.querySelector(
                `.${i.params.lazyPreloaderClass}`
              ))
            : requestAnimationFrame(() => {
                t.shadowRoot &&
                  ((s = t.shadowRoot.querySelector(
                    `.${i.params.lazyPreloaderClass}`
                  )),
                  s && s.remove());
              })),
          s && s.remove();
      }
    },
    Ae = (i, e) => {
      if (!i.slides[e]) return;
      const t = i.slides[e].querySelector('[loading="lazy"]');
      t && t.removeAttribute("loading");
    },
    Oe = (i) => {
      if (!i || i.destroyed || !i.params) return;
      let e = i.params.lazyPreloadPrevNext;
      const t = i.slides.length;
      if (!t || !e || e < 0) return;
      e = Math.min(e, t);
      const s =
          i.params.slidesPerView === "auto"
            ? i.slidesPerViewDynamic()
            : Math.ceil(i.params.slidesPerView),
        r = i.activeIndex;
      if (i.params.grid && i.params.grid.rows > 1) {
        const p = r,
          o = [p - e];
        return (
          o.push(...Array.from({ length: e }).map((n, c) => p + s + c)),
          void i.slides.forEach((n, c) => {
            o.includes(n.column) && Ae(i, c);
          })
        );
      }
      const a = r + s - 1;
      if (i.params.rewind || i.params.loop)
        for (let p = r - e; p <= a + e; p += 1) {
          const o = ((p % t) + t) % t;
          (o < r || o > a) && Ae(i, o);
        }
      else
        for (let p = Math.max(r - e, 0); p <= Math.min(a + e, t - 1); p += 1)
          p !== r && (p > a || p < r) && Ae(i, p);
    };
  var ut = {
      updateSize: function () {
        const i = this;
        let e, t;
        const s = i.el;
        (e =
          i.params.width !== void 0 && i.params.width !== null
            ? i.params.width
            : s.clientWidth),
          (t =
            i.params.height !== void 0 && i.params.height !== null
              ? i.params.height
              : s.clientHeight),
          (e === 0 && i.isHorizontal()) ||
            (t === 0 && i.isVertical()) ||
            ((e =
              e -
              parseInt(ae(s, "padding-left") || 0, 10) -
              parseInt(ae(s, "padding-right") || 0, 10)),
            (t =
              t -
              parseInt(ae(s, "padding-top") || 0, 10) -
              parseInt(ae(s, "padding-bottom") || 0, 10)),
            Number.isNaN(e) && (e = 0),
            Number.isNaN(t) && (t = 0),
            Object.assign(i, {
              width: e,
              height: t,
              size: i.isHorizontal() ? e : t,
            }));
      },
      updateSlides: function () {
        const i = this;
        function e(b, v) {
          return parseFloat(b.getPropertyValue(i.getDirectionLabel(v)) || 0);
        }
        const t = i.params,
          {
            wrapperEl: s,
            slidesEl: r,
            size: a,
            rtlTranslate: p,
            wrongRTL: o,
          } = i,
          n = i.virtual && t.virtual.enabled,
          c = n ? i.virtual.slides.length : i.slides.length,
          u = F(r, `.${i.params.slideClass}, swiper-slide`),
          l = n ? i.virtual.slides.length : u.length;
        let d = [];
        const m = [],
          g = [];
        let w = t.slidesOffsetBefore;
        typeof w == "function" && (w = t.slidesOffsetBefore.call(i));
        let h = t.slidesOffsetAfter;
        typeof h == "function" && (h = t.slidesOffsetAfter.call(i));
        const f = i.snapGrid.length,
          y = i.slidesGrid.length;
        let T = t.spaceBetween,
          S = -w,
          M = 0,
          I = 0;
        if (a === void 0) return;
        typeof T == "string" && T.indexOf("%") >= 0
          ? (T = (parseFloat(T.replace("%", "")) / 100) * a)
          : typeof T == "string" && (T = parseFloat(T)),
          (i.virtualSize = -T),
          u.forEach((b) => {
            p ? (b.style.marginLeft = "") : (b.style.marginRight = ""),
              (b.style.marginBottom = ""),
              (b.style.marginTop = "");
          }),
          t.centeredSlides &&
            t.cssMode &&
            (pe(s, "--swiper-centered-offset-before", ""),
            pe(s, "--swiper-centered-offset-after", ""));
        const k = t.grid && t.grid.rows > 1 && i.grid;
        let L;
        k ? i.grid.initSlides(u) : i.grid && i.grid.unsetSlides();
        const z =
          t.slidesPerView === "auto" &&
          t.breakpoints &&
          Object.keys(t.breakpoints).filter(
            (b) => t.breakpoints[b].slidesPerView !== void 0
          ).length > 0;
        for (let b = 0; b < l; b += 1) {
          let v;
          if (
            ((L = 0),
            u[b] && (v = u[b]),
            k && i.grid.updateSlide(b, v, u),
            !u[b] || ae(v, "display") !== "none")
          ) {
            if (t.slidesPerView === "auto") {
              z && (u[b].style[i.getDirectionLabel("width")] = "");
              const x = getComputedStyle(v),
                E = v.style.transform,
                P = v.style.webkitTransform;
              if (
                (E && (v.style.transform = "none"),
                P && (v.style.webkitTransform = "none"),
                t.roundLengths)
              )
                L = i.isHorizontal() ? Le(v, "width", !0) : Le(v, "height", !0);
              else {
                const C = e(x, "width"),
                  D = e(x, "padding-left"),
                  A = e(x, "padding-right"),
                  B = e(x, "margin-left"),
                  H = e(x, "margin-right"),
                  Q = x.getPropertyValue("box-sizing");
                if (Q && Q === "border-box") L = C + B + H;
                else {
                  const { clientWidth: G, offsetWidth: R } = v;
                  L = C + D + A + B + H + (R - G);
                }
              }
              E && (v.style.transform = E),
                P && (v.style.webkitTransform = P),
                t.roundLengths && (L = Math.floor(L));
            } else
              (L = (a - (t.slidesPerView - 1) * T) / t.slidesPerView),
                t.roundLengths && (L = Math.floor(L)),
                u[b] && (u[b].style[i.getDirectionLabel("width")] = `${L}px`);
            u[b] && (u[b].swiperSlideSize = L),
              g.push(L),
              t.centeredSlides
                ? ((S = S + L / 2 + M / 2 + T),
                  M === 0 && b !== 0 && (S = S - a / 2 - T),
                  b === 0 && (S = S - a / 2 - T),
                  Math.abs(S) < 0.001 && (S = 0),
                  t.roundLengths && (S = Math.floor(S)),
                  I % t.slidesPerGroup == 0 && d.push(S),
                  m.push(S))
                : (t.roundLengths && (S = Math.floor(S)),
                  (I - Math.min(i.params.slidesPerGroupSkip, I)) %
                    i.params.slidesPerGroup ==
                    0 && d.push(S),
                  m.push(S),
                  (S = S + L + T)),
              (i.virtualSize += L + T),
              (M = L),
              (I += 1);
          }
        }
        if (
          ((i.virtualSize = Math.max(i.virtualSize, a) + h),
          p &&
            o &&
            (t.effect === "slide" || t.effect === "coverflow") &&
            (s.style.width = `${i.virtualSize + T}px`),
          t.setWrapperSize &&
            (s.style[i.getDirectionLabel("width")] = `${i.virtualSize + T}px`),
          k && i.grid.updateWrapperSize(L, d),
          !t.centeredSlides)
        ) {
          const b = [];
          for (let v = 0; v < d.length; v += 1) {
            let x = d[v];
            t.roundLengths && (x = Math.floor(x)),
              d[v] <= i.virtualSize - a && b.push(x);
          }
          (d = b),
            Math.floor(i.virtualSize - a) - Math.floor(d[d.length - 1]) > 1 &&
              d.push(i.virtualSize - a);
        }
        if (n && t.loop) {
          const b = g[0] + T;
          if (t.slidesPerGroup > 1) {
            const v = Math.ceil(
                (i.virtual.slidesBefore + i.virtual.slidesAfter) /
                  t.slidesPerGroup
              ),
              x = b * t.slidesPerGroup;
            for (let E = 0; E < v; E += 1) d.push(d[d.length - 1] + x);
          }
          for (
            let v = 0;
            v < i.virtual.slidesBefore + i.virtual.slidesAfter;
            v += 1
          )
            t.slidesPerGroup === 1 && d.push(d[d.length - 1] + b),
              m.push(m[m.length - 1] + b),
              (i.virtualSize += b);
        }
        if ((d.length === 0 && (d = [0]), T !== 0)) {
          const b =
            i.isHorizontal() && p
              ? "marginLeft"
              : i.getDirectionLabel("marginRight");
          u.filter(
            (v, x) => !(t.cssMode && !t.loop) || x !== u.length - 1
          ).forEach((v) => {
            v.style[b] = `${T}px`;
          });
        }
        if (t.centeredSlides && t.centeredSlidesBounds) {
          let b = 0;
          g.forEach((x) => {
            b += x + (T || 0);
          }),
            (b -= T);
          const v = b > a ? b - a : 0;
          d = d.map((x) => (x <= 0 ? -w : x > v ? v + h : x));
        }
        if (t.centerInsufficientSlides) {
          let b = 0;
          g.forEach((x) => {
            b += x + (T || 0);
          }),
            (b -= T);
          const v = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
          if (b + v < a) {
            const x = (a - b - v) / 2;
            d.forEach((E, P) => {
              d[P] = E - x;
            }),
              m.forEach((E, P) => {
                m[P] = E + x;
              });
          }
        }
        if (
          (Object.assign(i, {
            slides: u,
            snapGrid: d,
            slidesGrid: m,
            slidesSizesGrid: g,
          }),
          t.centeredSlides && t.cssMode && !t.centeredSlidesBounds)
        ) {
          pe(s, "--swiper-centered-offset-before", -d[0] + "px"),
            pe(
              s,
              "--swiper-centered-offset-after",
              i.size / 2 - g[g.length - 1] / 2 + "px"
            );
          const b = -i.snapGrid[0],
            v = -i.slidesGrid[0];
          (i.snapGrid = i.snapGrid.map((x) => x + b)),
            (i.slidesGrid = i.slidesGrid.map((x) => x + v));
        }
        if (
          (l !== c && i.emit("slidesLengthChange"),
          d.length !== f &&
            (i.params.watchOverflow && i.checkOverflow(),
            i.emit("snapGridLengthChange")),
          m.length !== y && i.emit("slidesGridLengthChange"),
          t.watchSlidesProgress && i.updateSlidesOffset(),
          i.emit("slidesUpdated"),
          !(n || t.cssMode || (t.effect !== "slide" && t.effect !== "fade")))
        ) {
          const b = `${t.containerModifierClass}backface-hidden`,
            v = i.el.classList.contains(b);
          l <= t.maxBackfaceHiddenSlides
            ? v || i.el.classList.add(b)
            : v && i.el.classList.remove(b);
        }
      },
      updateAutoHeight: function (i) {
        const e = this,
          t = [],
          s = e.virtual && e.params.virtual.enabled;
        let r,
          a = 0;
        typeof i == "number"
          ? e.setTransition(i)
          : i === !0 && e.setTransition(e.params.speed);
        const p = (o) => (s ? e.slides[e.getSlideIndexByData(o)] : e.slides[o]);
        if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
          if (e.params.centeredSlides)
            (e.visibleSlides || []).forEach((o) => {
              t.push(o);
            });
          else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
              const o = e.activeIndex + r;
              if (o > e.slides.length && !s) break;
              t.push(p(o));
            }
        else t.push(p(e.activeIndex));
        for (r = 0; r < t.length; r += 1)
          if (t[r] !== void 0) {
            const o = t[r].offsetHeight;
            a = o > a ? o : a;
          }
        (a || a === 0) && (e.wrapperEl.style.height = `${a}px`);
      },
      updateSlidesOffset: function () {
        const i = this,
          e = i.slides,
          t = i.isElement
            ? i.isHorizontal()
              ? i.wrapperEl.offsetLeft
              : i.wrapperEl.offsetTop
            : 0;
        for (let s = 0; s < e.length; s += 1)
          e[s].swiperSlideOffset =
            (i.isHorizontal() ? e[s].offsetLeft : e[s].offsetTop) -
            t -
            i.cssOverflowAdjustment();
      },
      updateSlidesProgress: function (i) {
        i === void 0 && (i = (this && this.translate) || 0);
        const e = this,
          t = e.params,
          { slides: s, rtlTranslate: r, snapGrid: a } = e;
        if (s.length === 0) return;
        s[0].swiperSlideOffset === void 0 && e.updateSlidesOffset();
        let p = -i;
        r && (p = i), (e.visibleSlidesIndexes = []), (e.visibleSlides = []);
        let o = t.spaceBetween;
        typeof o == "string" && o.indexOf("%") >= 0
          ? (o = (parseFloat(o.replace("%", "")) / 100) * e.size)
          : typeof o == "string" && (o = parseFloat(o));
        for (let n = 0; n < s.length; n += 1) {
          const c = s[n];
          let u = c.swiperSlideOffset;
          t.cssMode && t.centeredSlides && (u -= s[0].swiperSlideOffset);
          const l =
              (p + (t.centeredSlides ? e.minTranslate() : 0) - u) /
              (c.swiperSlideSize + o),
            d =
              (p - a[0] + (t.centeredSlides ? e.minTranslate() : 0) - u) /
              (c.swiperSlideSize + o),
            m = -(p - u),
            g = m + e.slidesSizesGrid[n],
            w = m >= 0 && m <= e.size - e.slidesSizesGrid[n],
            h =
              (m >= 0 && m < e.size - 1) ||
              (g > 1 && g <= e.size) ||
              (m <= 0 && g >= e.size);
          h && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(n)),
            Ve(c, h, t.slideVisibleClass),
            Ve(c, w, t.slideFullyVisibleClass),
            (c.progress = r ? -l : l),
            (c.originalProgress = r ? -d : d);
        }
      },
      updateProgress: function (i) {
        const e = this;
        if (i === void 0) {
          const u = e.rtlTranslate ? -1 : 1;
          i = (e && e.translate && e.translate * u) || 0;
        }
        const t = e.params,
          s = e.maxTranslate() - e.minTranslate();
        let { progress: r, isBeginning: a, isEnd: p, progressLoop: o } = e;
        const n = a,
          c = p;
        if (s === 0) (r = 0), (a = !0), (p = !0);
        else {
          r = (i - e.minTranslate()) / s;
          const u = Math.abs(i - e.minTranslate()) < 1,
            l = Math.abs(i - e.maxTranslate()) < 1;
          (a = u || r <= 0), (p = l || r >= 1), u && (r = 0), l && (r = 1);
        }
        if (t.loop) {
          const u = e.getSlideIndexByData(0),
            l = e.getSlideIndexByData(e.slides.length - 1),
            d = e.slidesGrid[u],
            m = e.slidesGrid[l],
            g = e.slidesGrid[e.slidesGrid.length - 1],
            w = Math.abs(i);
          (o = w >= d ? (w - d) / g : (w + g - m) / g), o > 1 && (o -= 1);
        }
        Object.assign(e, {
          progress: r,
          progressLoop: o,
          isBeginning: a,
          isEnd: p,
        }),
          (t.watchSlidesProgress || (t.centeredSlides && t.autoHeight)) &&
            e.updateSlidesProgress(i),
          a && !n && e.emit("reachBeginning toEdge"),
          p && !c && e.emit("reachEnd toEdge"),
          ((n && !a) || (c && !p)) && e.emit("fromEdge"),
          e.emit("progress", r);
      },
      updateSlidesClasses: function () {
        const i = this,
          { slides: e, params: t, slidesEl: s, activeIndex: r } = i,
          a = i.virtual && t.virtual.enabled,
          p = i.grid && t.grid && t.grid.rows > 1,
          o = (l) => F(s, `.${t.slideClass}${l}, swiper-slide${l}`)[0];
        let n, c, u;
        if (a)
          if (t.loop) {
            let l = r - i.virtual.slidesBefore;
            l < 0 && (l = i.virtual.slides.length + l),
              l >= i.virtual.slides.length && (l -= i.virtual.slides.length),
              (n = o(`[data-swiper-slide-index="${l}"]`));
          } else n = o(`[data-swiper-slide-index="${r}"]`);
        else
          p
            ? ((n = e.filter((l) => l.column === r)[0]),
              (u = e.filter((l) => l.column === r + 1)[0]),
              (c = e.filter((l) => l.column === r - 1)[0]))
            : (n = e[r]);
        n &&
          (p ||
            ((u = (function (l, d) {
              const m = [];
              for (; l.nextElementSibling; ) {
                const g = l.nextElementSibling;
                d ? g.matches(d) && m.push(g) : m.push(g), (l = g);
              }
              return m;
            })(n, `.${t.slideClass}, swiper-slide`)[0]),
            t.loop && !u && (u = e[0]),
            (c = (function (l, d) {
              const m = [];
              for (; l.previousElementSibling; ) {
                const g = l.previousElementSibling;
                d ? g.matches(d) && m.push(g) : m.push(g), (l = g);
              }
              return m;
            })(n, `.${t.slideClass}, swiper-slide`)[0]),
            t.loop && !c === 0 && (c = e[e.length - 1]))),
          e.forEach((l) => {
            Ie(l, l === n, t.slideActiveClass),
              Ie(l, l === u, t.slideNextClass),
              Ie(l, l === c, t.slidePrevClass);
          }),
          i.emitSlidesClasses();
      },
      updateActiveIndex: function (i) {
        const e = this,
          t = e.rtlTranslate ? e.translate : -e.translate,
          {
            snapGrid: s,
            params: r,
            activeIndex: a,
            realIndex: p,
            snapIndex: o,
          } = e;
        let n,
          c = i;
        const u = (m) => {
          let g = m - e.virtual.slidesBefore;
          return (
            g < 0 && (g = e.virtual.slides.length + g),
            g >= e.virtual.slides.length && (g -= e.virtual.slides.length),
            g
          );
        };
        if (
          (c === void 0 &&
            (c = (function (m) {
              const { slidesGrid: g, params: w } = m,
                h = m.rtlTranslate ? m.translate : -m.translate;
              let f;
              for (let y = 0; y < g.length; y += 1)
                g[y + 1] !== void 0
                  ? h >= g[y] && h < g[y + 1] - (g[y + 1] - g[y]) / 2
                    ? (f = y)
                    : h >= g[y] && h < g[y + 1] && (f = y + 1)
                  : h >= g[y] && (f = y);
              return (
                w.normalizeSlideIndex && (f < 0 || f === void 0) && (f = 0), f
              );
            })(e)),
          s.indexOf(t) >= 0)
        )
          n = s.indexOf(t);
        else {
          const m = Math.min(r.slidesPerGroupSkip, c);
          n = m + Math.floor((c - m) / r.slidesPerGroup);
        }
        if ((n >= s.length && (n = s.length - 1), c === a && !e.params.loop))
          return void (
            n !== o && ((e.snapIndex = n), e.emit("snapIndexChange"))
          );
        if (c === a && e.params.loop && e.virtual && e.params.virtual.enabled)
          return void (e.realIndex = u(c));
        const l = e.grid && r.grid && r.grid.rows > 1;
        let d;
        if (e.virtual && r.virtual.enabled && r.loop) d = u(c);
        else if (l) {
          const m = e.slides.filter((w) => w.column === c)[0];
          let g = parseInt(m.getAttribute("data-swiper-slide-index"), 10);
          Number.isNaN(g) && (g = Math.max(e.slides.indexOf(m), 0)),
            (d = Math.floor(g / r.grid.rows));
        } else if (e.slides[c]) {
          const m = e.slides[c].getAttribute("data-swiper-slide-index");
          d = m ? parseInt(m, 10) : c;
        } else d = c;
        Object.assign(e, {
          previousSnapIndex: o,
          snapIndex: n,
          previousRealIndex: p,
          realIndex: d,
          previousIndex: a,
          activeIndex: c,
        }),
          e.initialized && Oe(e),
          e.emit("activeIndexChange"),
          e.emit("snapIndexChange"),
          (e.initialized || e.params.runCallbacksOnInit) &&
            (p !== d && e.emit("realIndexChange"), e.emit("slideChange"));
      },
      updateClickedSlide: function (i, e) {
        const t = this,
          s = t.params;
        let r = i.closest(`.${s.slideClass}, swiper-slide`);
        !r &&
          t.isElement &&
          e &&
          e.length > 1 &&
          e.includes(i) &&
          [...e.slice(e.indexOf(i) + 1, e.length)].forEach((o) => {
            !r &&
              o.matches &&
              o.matches(`.${s.slideClass}, swiper-slide`) &&
              (r = o);
          });
        let a,
          p = !1;
        if (r) {
          for (let o = 0; o < t.slides.length; o += 1)
            if (t.slides[o] === r) {
              (p = !0), (a = o);
              break;
            }
        }
        if (!r || !p)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = r),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                r.getAttribute("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = a),
          s.slideToClickedSlide &&
            t.clickedIndex !== void 0 &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    },
    mt = {
      getTranslate: function (i) {
        i === void 0 && (i = this.isHorizontal() ? "x" : "y");
        const { params: e, rtlTranslate: t, translate: s, wrapperEl: r } = this;
        if (e.virtualTranslate) return t ? -s : s;
        if (e.cssMode) return s;
        let a = Pe(r, i);
        return (a += this.cssOverflowAdjustment()), t && (a = -a), a || 0;
      },
      setTranslate: function (i, e) {
        const t = this,
          { rtlTranslate: s, params: r, wrapperEl: a, progress: p } = t;
        let o,
          n = 0,
          c = 0;
        t.isHorizontal() ? (n = s ? -i : i) : (c = i),
          r.roundLengths && ((n = Math.floor(n)), (c = Math.floor(c))),
          (t.previousTranslate = t.translate),
          (t.translate = t.isHorizontal() ? n : c),
          r.cssMode
            ? (a[t.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                t.isHorizontal() ? -n : -c)
            : r.virtualTranslate ||
              (t.isHorizontal()
                ? (n -= t.cssOverflowAdjustment())
                : (c -= t.cssOverflowAdjustment()),
              (a.style.transform = `translate3d(${n}px, ${c}px, 0px)`));
        const u = t.maxTranslate() - t.minTranslate();
        (o = u === 0 ? 0 : (i - t.minTranslate()) / u),
          o !== p && t.updateProgress(i),
          t.emit("setTranslate", t.translate, e);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (i, e, t, s, r) {
        i === void 0 && (i = 0),
          e === void 0 && (e = this.params.speed),
          t === void 0 && (t = !0),
          s === void 0 && (s = !0);
        const a = this,
          { params: p, wrapperEl: o } = a;
        if (a.animating && p.preventInteractionOnTransition) return !1;
        const n = a.minTranslate(),
          c = a.maxTranslate();
        let u;
        if (
          ((u = s && i > n ? n : s && i < c ? c : i),
          a.updateProgress(u),
          p.cssMode)
        ) {
          const l = a.isHorizontal();
          if (e === 0) o[l ? "scrollLeft" : "scrollTop"] = -u;
          else {
            if (!a.support.smoothScroll)
              return (
                Xe({ swiper: a, targetPosition: -u, side: l ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [l ? "left" : "top"]: -u, behavior: "smooth" });
          }
          return !0;
        }
        return (
          e === 0
            ? (a.setTransition(0),
              a.setTranslate(u),
              t &&
                (a.emit("beforeTransitionStart", e, r),
                a.emit("transitionEnd")))
            : (a.setTransition(e),
              a.setTranslate(u),
              t &&
                (a.emit("beforeTransitionStart", e, r),
                a.emit("transitionStart")),
              a.animating ||
                ((a.animating = !0),
                a.onTranslateToWrapperTransitionEnd ||
                  (a.onTranslateToWrapperTransitionEnd = function (l) {
                    a &&
                      !a.destroyed &&
                      l.target === this &&
                      (a.wrapperEl.removeEventListener(
                        "transitionend",
                        a.onTranslateToWrapperTransitionEnd
                      ),
                      (a.onTranslateToWrapperTransitionEnd = null),
                      delete a.onTranslateToWrapperTransitionEnd,
                      (a.animating = !1),
                      t && a.emit("transitionEnd"));
                  }),
                a.wrapperEl.addEventListener(
                  "transitionend",
                  a.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
  function We(i) {
    let { swiper: e, runCallbacks: t, direction: s, step: r } = i;
    const { activeIndex: a, previousIndex: p } = e;
    let o = s;
    if (
      (o || (o = a > p ? "next" : a < p ? "prev" : "reset"),
      e.emit(`transition${r}`),
      t && a !== p)
    ) {
      if (o === "reset") return void e.emit(`slideResetTransition${r}`);
      e.emit(`slideChangeTransition${r}`),
        o === "next"
          ? e.emit(`slideNextTransition${r}`)
          : e.emit(`slidePrevTransition${r}`);
    }
  }
  var ht = {
      slideTo: function (i, e, t, s, r) {
        i === void 0 && (i = 0),
          t === void 0 && (t = !0),
          typeof i == "string" && (i = parseInt(i, 10));
        const a = this;
        let p = i;
        p < 0 && (p = 0);
        const {
          params: o,
          snapGrid: n,
          slidesGrid: c,
          previousIndex: u,
          activeIndex: l,
          rtlTranslate: d,
          wrapperEl: m,
          enabled: g,
        } = a;
        if (
          (!g && !s && !r) ||
          a.destroyed ||
          (a.animating && o.preventInteractionOnTransition)
        )
          return !1;
        e === void 0 && (e = a.params.speed);
        const w = Math.min(a.params.slidesPerGroupSkip, p);
        let h = w + Math.floor((p - w) / a.params.slidesPerGroup);
        h >= n.length && (h = n.length - 1);
        const f = -n[h];
        if (o.normalizeSlideIndex)
          for (let S = 0; S < c.length; S += 1) {
            const M = -Math.floor(100 * f),
              I = Math.floor(100 * c[S]),
              k = Math.floor(100 * c[S + 1]);
            c[S + 1] !== void 0
              ? M >= I && M < k - (k - I) / 2
                ? (p = S)
                : M >= I && M < k && (p = S + 1)
              : M >= I && (p = S);
          }
        if (
          a.initialized &&
          p !== l &&
          ((!a.allowSlideNext &&
            (d
              ? f > a.translate && f > a.minTranslate()
              : f < a.translate && f < a.minTranslate())) ||
            (!a.allowSlidePrev &&
              f > a.translate &&
              f > a.maxTranslate() &&
              (l || 0) !== p))
        )
          return !1;
        let y;
        p !== (u || 0) && t && a.emit("beforeSlideChangeStart"),
          a.updateProgress(f),
          (y = p > l ? "next" : p < l ? "prev" : "reset");
        const T = a.virtual && a.params.virtual.enabled;
        if (
          !(T && r) &&
          ((d && -f === a.translate) || (!d && f === a.translate))
        )
          return (
            a.updateActiveIndex(p),
            o.autoHeight && a.updateAutoHeight(),
            a.updateSlidesClasses(),
            o.effect !== "slide" && a.setTranslate(f),
            y !== "reset" && (a.transitionStart(t, y), a.transitionEnd(t, y)),
            !1
          );
        if (o.cssMode) {
          const S = a.isHorizontal(),
            M = d ? f : -f;
          if (e === 0)
            T &&
              ((a.wrapperEl.style.scrollSnapType = "none"),
              (a._immediateVirtual = !0)),
              T && !a._cssModeVirtualInitialSet && a.params.initialSlide > 0
                ? ((a._cssModeVirtualInitialSet = !0),
                  requestAnimationFrame(() => {
                    m[S ? "scrollLeft" : "scrollTop"] = M;
                  }))
                : (m[S ? "scrollLeft" : "scrollTop"] = M),
              T &&
                requestAnimationFrame(() => {
                  (a.wrapperEl.style.scrollSnapType = ""),
                    (a._immediateVirtual = !1);
                });
          else {
            if (!a.support.smoothScroll)
              return (
                Xe({ swiper: a, targetPosition: M, side: S ? "left" : "top" }),
                !0
              );
            m.scrollTo({ [S ? "left" : "top"]: M, behavior: "smooth" });
          }
          return !0;
        }
        return (
          a.setTransition(e),
          a.setTranslate(f),
          a.updateActiveIndex(p),
          a.updateSlidesClasses(),
          a.emit("beforeTransitionStart", e, s),
          a.transitionStart(t, y),
          e === 0
            ? a.transitionEnd(t, y)
            : a.animating ||
              ((a.animating = !0),
              a.onSlideToWrapperTransitionEnd ||
                (a.onSlideToWrapperTransitionEnd = function (S) {
                  a &&
                    !a.destroyed &&
                    S.target === this &&
                    (a.wrapperEl.removeEventListener(
                      "transitionend",
                      a.onSlideToWrapperTransitionEnd
                    ),
                    (a.onSlideToWrapperTransitionEnd = null),
                    delete a.onSlideToWrapperTransitionEnd,
                    a.transitionEnd(t, y));
                }),
              a.wrapperEl.addEventListener(
                "transitionend",
                a.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (i, e, t, s) {
        i === void 0 && (i = 0),
          t === void 0 && (t = !0),
          typeof i == "string" && (i = parseInt(i, 10));
        const r = this;
        if (r.destroyed) return;
        e === void 0 && (e = r.params.speed);
        const a = r.grid && r.params.grid && r.params.grid.rows > 1;
        let p = i;
        if (r.params.loop)
          if (r.virtual && r.params.virtual.enabled)
            p += r.virtual.slidesBefore;
          else {
            let o;
            if (a) {
              const d = p * r.params.grid.rows;
              o = r.slides.filter(
                (m) => 1 * m.getAttribute("data-swiper-slide-index") === d
              )[0].column;
            } else o = r.getSlideIndexByData(p);
            const n = a
                ? Math.ceil(r.slides.length / r.params.grid.rows)
                : r.slides.length,
              { centeredSlides: c } = r.params;
            let u = r.params.slidesPerView;
            u === "auto"
              ? (u = r.slidesPerViewDynamic())
              : ((u = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
                c && u % 2 == 0 && (u += 1));
            let l = n - o < u;
            if (
              (c && (l = l || o < Math.ceil(u / 2)),
              s && c && r.params.slidesPerView !== "auto" && !a && (l = !1),
              l)
            ) {
              const d = c
                ? o < r.activeIndex
                  ? "prev"
                  : "next"
                : o - r.activeIndex - 1 < r.params.slidesPerView
                ? "next"
                : "prev";
              r.loopFix({
                direction: d,
                slideTo: !0,
                activeSlideIndex: d === "next" ? o + 1 : o - n + 1,
                slideRealIndex: d === "next" ? r.realIndex : void 0,
              });
            }
            if (a) {
              const d = p * r.params.grid.rows;
              p = r.slides.filter(
                (m) => 1 * m.getAttribute("data-swiper-slide-index") === d
              )[0].column;
            } else p = r.getSlideIndexByData(p);
          }
        return (
          requestAnimationFrame(() => {
            r.slideTo(p, e, t, s);
          }),
          r
        );
      },
      slideNext: function (i, e, t) {
        e === void 0 && (e = !0);
        const s = this,
          { enabled: r, params: a, animating: p } = s;
        if (!r || s.destroyed) return s;
        i === void 0 && (i = s.params.speed);
        let o = a.slidesPerGroup;
        a.slidesPerView === "auto" &&
          a.slidesPerGroup === 1 &&
          a.slidesPerGroupAuto &&
          (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
        const n = s.activeIndex < a.slidesPerGroupSkip ? 1 : o,
          c = s.virtual && a.virtual.enabled;
        if (a.loop) {
          if (p && !c && a.loopPreventsSliding) return !1;
          if (
            (s.loopFix({ direction: "next" }),
            (s._clientLeft = s.wrapperEl.clientLeft),
            s.activeIndex === s.slides.length - 1 && a.cssMode)
          )
            return (
              requestAnimationFrame(() => {
                s.slideTo(s.activeIndex + n, i, e, t);
              }),
              !0
            );
        }
        return a.rewind && s.isEnd
          ? s.slideTo(0, i, e, t)
          : s.slideTo(s.activeIndex + n, i, e, t);
      },
      slidePrev: function (i, e, t) {
        e === void 0 && (e = !0);
        const s = this,
          {
            params: r,
            snapGrid: a,
            slidesGrid: p,
            rtlTranslate: o,
            enabled: n,
            animating: c,
          } = s;
        if (!n || s.destroyed) return s;
        i === void 0 && (i = s.params.speed);
        const u = s.virtual && r.virtual.enabled;
        if (r.loop) {
          if (c && !u && r.loopPreventsSliding) return !1;
          s.loopFix({ direction: "prev" }),
            (s._clientLeft = s.wrapperEl.clientLeft);
        }
        function l(h) {
          return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
        }
        const d = l(o ? s.translate : -s.translate),
          m = a.map((h) => l(h));
        let g = a[m.indexOf(d) - 1];
        if (g === void 0 && r.cssMode) {
          let h;
          a.forEach((f, y) => {
            d >= f && (h = y);
          }),
            h !== void 0 && (g = a[h > 0 ? h - 1 : h]);
        }
        let w = 0;
        if (
          (g !== void 0 &&
            ((w = p.indexOf(g)),
            w < 0 && (w = s.activeIndex - 1),
            r.slidesPerView === "auto" &&
              r.slidesPerGroup === 1 &&
              r.slidesPerGroupAuto &&
              ((w = w - s.slidesPerViewDynamic("previous", !0) + 1),
              (w = Math.max(w, 0)))),
          r.rewind && s.isBeginning)
        ) {
          const h =
            s.params.virtual && s.params.virtual.enabled && s.virtual
              ? s.virtual.slides.length - 1
              : s.slides.length - 1;
          return s.slideTo(h, i, e, t);
        }
        return r.loop && s.activeIndex === 0 && r.cssMode
          ? (requestAnimationFrame(() => {
              s.slideTo(w, i, e, t);
            }),
            !0)
          : s.slideTo(w, i, e, t);
      },
      slideReset: function (i, e, t) {
        e === void 0 && (e = !0);
        const s = this;
        if (!s.destroyed)
          return (
            i === void 0 && (i = s.params.speed),
            s.slideTo(s.activeIndex, i, e, t)
          );
      },
      slideToClosest: function (i, e, t, s) {
        e === void 0 && (e = !0), s === void 0 && (s = 0.5);
        const r = this;
        if (r.destroyed) return;
        i === void 0 && (i = r.params.speed);
        let a = r.activeIndex;
        const p = Math.min(r.params.slidesPerGroupSkip, a),
          o = p + Math.floor((a - p) / r.params.slidesPerGroup),
          n = r.rtlTranslate ? r.translate : -r.translate;
        if (n >= r.snapGrid[o]) {
          const c = r.snapGrid[o];
          n - c > (r.snapGrid[o + 1] - c) * s && (a += r.params.slidesPerGroup);
        } else {
          const c = r.snapGrid[o - 1];
          n - c <= (r.snapGrid[o] - c) * s && (a -= r.params.slidesPerGroup);
        }
        return (
          (a = Math.max(a, 0)),
          (a = Math.min(a, r.slidesGrid.length - 1)),
          r.slideTo(a, i, e, t)
        );
      },
      slideToClickedSlide: function () {
        const i = this;
        if (i.destroyed) return;
        const { params: e, slidesEl: t } = i,
          s =
            e.slidesPerView === "auto"
              ? i.slidesPerViewDynamic()
              : e.slidesPerView;
        let r,
          a = i.clickedIndex;
        const p = i.isElement ? "swiper-slide" : `.${e.slideClass}`;
        if (e.loop) {
          if (i.animating) return;
          (r = parseInt(
            i.clickedSlide.getAttribute("data-swiper-slide-index"),
            10
          )),
            e.centeredSlides
              ? a < i.loopedSlides - s / 2 ||
                a > i.slides.length - i.loopedSlides + s / 2
                ? (i.loopFix(),
                  (a = i.getSlideIndex(
                    F(t, `${p}[data-swiper-slide-index="${r}"]`)[0]
                  )),
                  te(() => {
                    i.slideTo(a);
                  }))
                : i.slideTo(a)
              : a > i.slides.length - s
              ? (i.loopFix(),
                (a = i.getSlideIndex(
                  F(t, `${p}[data-swiper-slide-index="${r}"]`)[0]
                )),
                te(() => {
                  i.slideTo(a);
                }))
              : i.slideTo(a);
        } else i.slideTo(a);
      },
    },
    ft = {
      loopCreate: function (i) {
        const e = this,
          { params: t, slidesEl: s } = e;
        if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
        const r = () => {
            F(s, `.${t.slideClass}, swiper-slide`).forEach((u, l) => {
              u.setAttribute("data-swiper-slide-index", l);
            });
          },
          a = e.grid && t.grid && t.grid.rows > 1,
          p = t.slidesPerGroup * (a ? t.grid.rows : 1),
          o = e.slides.length % p != 0,
          n = a && e.slides.length % t.grid.rows != 0,
          c = (u) => {
            for (let l = 0; l < u; l += 1) {
              const d = e.isElement
                ? K("swiper-slide", [t.slideBlankClass])
                : K("div", [t.slideClass, t.slideBlankClass]);
              e.slidesEl.append(d);
            }
          };
        o
          ? (t.loopAddBlankSlides
              ? (c(p - (e.slides.length % p)),
                e.recalcSlides(),
                e.updateSlides())
              : ve(
                  "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                ),
            r())
          : (n &&
              (t.loopAddBlankSlides
                ? (c(t.grid.rows - (e.slides.length % t.grid.rows)),
                  e.recalcSlides(),
                  e.updateSlides())
                : ve(
                    "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
                  )),
            r()),
          e.loopFix({
            slideRealIndex: i,
            direction: t.centeredSlides ? void 0 : "next",
          });
      },
      loopFix: function (i) {
        let {
          slideRealIndex: e,
          slideTo: t = !0,
          direction: s,
          setTranslate: r,
          activeSlideIndex: a,
          byController: p,
          byMousewheel: o,
        } = i === void 0 ? {} : i;
        const n = this;
        if (!n.params.loop) return;
        n.emit("beforeLoopFix");
        const {
            slides: c,
            allowSlidePrev: u,
            allowSlideNext: l,
            slidesEl: d,
            params: m,
          } = n,
          { centeredSlides: g } = m;
        if (
          ((n.allowSlidePrev = !0),
          (n.allowSlideNext = !0),
          n.virtual && m.virtual.enabled)
        )
          return (
            t &&
              (m.centeredSlides || n.snapIndex !== 0
                ? m.centeredSlides && n.snapIndex < m.slidesPerView
                  ? n.slideTo(n.virtual.slides.length + n.snapIndex, 0, !1, !0)
                  : n.snapIndex === n.snapGrid.length - 1 &&
                    n.slideTo(n.virtual.slidesBefore, 0, !1, !0)
                : n.slideTo(n.virtual.slides.length, 0, !1, !0)),
            (n.allowSlidePrev = u),
            (n.allowSlideNext = l),
            void n.emit("loopFix")
          );
        let w = m.slidesPerView;
        w === "auto"
          ? (w = n.slidesPerViewDynamic())
          : ((w = Math.ceil(parseFloat(m.slidesPerView, 10))),
            g && w % 2 == 0 && (w += 1));
        const h = m.slidesPerGroupAuto ? w : m.slidesPerGroup;
        let f = h;
        f % h != 0 && (f += h - (f % h)),
          (f += m.loopAdditionalSlides),
          (n.loopedSlides = f);
        const y = n.grid && m.grid && m.grid.rows > 1;
        c.length < w + f
          ? ve(
              "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
            )
          : y &&
            m.grid.fill === "row" &&
            ve(
              "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
            );
        const T = [],
          S = [];
        let M = n.activeIndex;
        a === void 0
          ? (a = n.getSlideIndex(
              c.filter((x) => x.classList.contains(m.slideActiveClass))[0]
            ))
          : (M = a);
        const I = s === "next" || !s,
          k = s === "prev" || !s;
        let L = 0,
          z = 0;
        const b = y ? Math.ceil(c.length / m.grid.rows) : c.length,
          v = (y ? c[a].column : a) + (g && r === void 0 ? -w / 2 + 0.5 : 0);
        if (v < f) {
          L = Math.max(f - v, h);
          for (let x = 0; x < f - v; x += 1) {
            const E = x - Math.floor(x / b) * b;
            if (y) {
              const P = b - E - 1;
              for (let C = c.length - 1; C >= 0; C -= 1)
                c[C].column === P && T.push(C);
            } else T.push(b - E - 1);
          }
        } else if (v + w > b - f) {
          z = Math.max(v - (b - 2 * f), h);
          for (let x = 0; x < z; x += 1) {
            const E = x - Math.floor(x / b) * b;
            y
              ? c.forEach((P, C) => {
                  P.column === E && S.push(C);
                })
              : S.push(E);
          }
        }
        if (
          ((n.__preventObserver__ = !0),
          requestAnimationFrame(() => {
            n.__preventObserver__ = !1;
          }),
          k &&
            T.forEach((x) => {
              (c[x].swiperLoopMoveDOM = !0),
                d.prepend(c[x]),
                (c[x].swiperLoopMoveDOM = !1);
            }),
          I &&
            S.forEach((x) => {
              (c[x].swiperLoopMoveDOM = !0),
                d.append(c[x]),
                (c[x].swiperLoopMoveDOM = !1);
            }),
          n.recalcSlides(),
          m.slidesPerView === "auto"
            ? n.updateSlides()
            : y &&
              ((T.length > 0 && k) || (S.length > 0 && I)) &&
              n.slides.forEach((x, E) => {
                n.grid.updateSlide(E, x, n.slides);
              }),
          m.watchSlidesProgress && n.updateSlidesOffset(),
          t)
        ) {
          if (T.length > 0 && k) {
            if (e === void 0) {
              const x = n.slidesGrid[M],
                E = n.slidesGrid[M + L] - x;
              o
                ? n.setTranslate(n.translate - E)
                : (n.slideTo(M + Math.ceil(L), 0, !1, !0),
                  r &&
                    ((n.touchEventsData.startTranslate =
                      n.touchEventsData.startTranslate - E),
                    (n.touchEventsData.currentTranslate =
                      n.touchEventsData.currentTranslate - E)));
            } else if (r) {
              const x = y ? T.length / m.grid.rows : T.length;
              n.slideTo(n.activeIndex + x, 0, !1, !0),
                (n.touchEventsData.currentTranslate = n.translate);
            }
          } else if (S.length > 0 && I)
            if (e === void 0) {
              const x = n.slidesGrid[M],
                E = n.slidesGrid[M - z] - x;
              o
                ? n.setTranslate(n.translate - E)
                : (n.slideTo(M - z, 0, !1, !0),
                  r &&
                    ((n.touchEventsData.startTranslate =
                      n.touchEventsData.startTranslate - E),
                    (n.touchEventsData.currentTranslate =
                      n.touchEventsData.currentTranslate - E)));
            } else {
              const x = y ? S.length / m.grid.rows : S.length;
              n.slideTo(n.activeIndex - x, 0, !1, !0);
            }
        }
        if (
          ((n.allowSlidePrev = u),
          (n.allowSlideNext = l),
          n.controller && n.controller.control && !p)
        ) {
          const x = {
            slideRealIndex: e,
            direction: s,
            setTranslate: r,
            activeSlideIndex: a,
            byController: !0,
          };
          Array.isArray(n.controller.control)
            ? n.controller.control.forEach((E) => {
                !E.destroyed &&
                  E.params.loop &&
                  E.loopFix({
                    ...x,
                    slideTo: E.params.slidesPerView === m.slidesPerView && t,
                  });
              })
            : n.controller.control instanceof n.constructor &&
              n.controller.control.params.loop &&
              n.controller.control.loopFix({
                ...x,
                slideTo:
                  n.controller.control.params.slidesPerView ===
                    m.slidesPerView && t,
              });
        }
        n.emit("loopFix");
      },
      loopDestroy: function () {
        const i = this,
          { params: e, slidesEl: t } = i;
        if (!e.loop || (i.virtual && i.params.virtual.enabled)) return;
        i.recalcSlides();
        const s = [];
        i.slides.forEach((r) => {
          const a =
            r.swiperSlideIndex === void 0
              ? 1 * r.getAttribute("data-swiper-slide-index")
              : r.swiperSlideIndex;
          s[a] = r;
        }),
          i.slides.forEach((r) => {
            r.removeAttribute("data-swiper-slide-index");
          }),
          s.forEach((r) => {
            t.append(r);
          }),
          i.recalcSlides(),
          i.slideTo(i.realIndex, 0);
      },
    };
  function Ue(i, e, t) {
    const s = j(),
      { params: r } = i,
      a = r.edgeSwipeDetection,
      p = r.edgeSwipeThreshold;
    return (
      !a ||
      !(t <= p || t >= s.innerWidth - p) ||
      (a === "prevent" && (e.preventDefault(), !0))
    );
  }
  function gt(i) {
    const e = this,
      t = q();
    let s = i;
    s.originalEvent && (s = s.originalEvent);
    const r = e.touchEventsData;
    if (s.type === "pointerdown") {
      if (r.pointerId !== null && r.pointerId !== s.pointerId) return;
      r.pointerId = s.pointerId;
    } else
      s.type === "touchstart" &&
        s.targetTouches.length === 1 &&
        (r.touchId = s.targetTouches[0].identifier);
    if (s.type === "touchstart") return void Ue(e, s, s.targetTouches[0].pageX);
    const { params: a, touches: p, enabled: o } = e;
    if (
      !o ||
      (!a.simulateTouch && s.pointerType === "mouse") ||
      (e.animating && a.preventInteractionOnTransition)
    )
      return;
    !e.animating && a.cssMode && a.loop && e.loopFix();
    let n = s.target;
    if (
      (a.touchEventsTarget === "wrapper" &&
        !(function (f, y) {
          const T = y.contains(f);
          return !T && y instanceof HTMLSlotElement
            ? [...y.assignedElements()].includes(f)
            : T;
        })(n, e.wrapperEl)) ||
      ("which" in s && s.which === 3) ||
      ("button" in s && s.button > 0) ||
      (r.isTouched && r.isMoved)
    )
      return;
    const c = !!a.noSwipingClass && a.noSwipingClass !== "",
      u = s.composedPath ? s.composedPath() : s.path;
    c && s.target && s.target.shadowRoot && u && (n = u[0]);
    const l = a.noSwipingSelector
        ? a.noSwipingSelector
        : `.${a.noSwipingClass}`,
      d = !(!s.target || !s.target.shadowRoot);
    if (
      a.noSwiping &&
      (d
        ? (function (f, y) {
            return (
              y === void 0 && (y = this),
              (function T(S) {
                if (!S || S === q() || S === j()) return null;
                S.assignedSlot && (S = S.assignedSlot);
                const M = S.closest(f);
                return M || S.getRootNode ? M || T(S.getRootNode().host) : null;
              })(y)
            );
          })(l, n)
        : n.closest(l))
    )
      return void (e.allowClick = !0);
    if (a.swipeHandler && !n.closest(a.swipeHandler)) return;
    (p.currentX = s.pageX), (p.currentY = s.pageY);
    const m = p.currentX,
      g = p.currentY;
    if (!Ue(e, s, m)) return;
    Object.assign(r, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (p.startX = m),
      (p.startY = g),
      (r.touchStartTime = W()),
      (e.allowClick = !0),
      e.updateSize(),
      (e.swipeDirection = void 0),
      a.threshold > 0 && (r.allowThresholdMove = !1);
    let w = !0;
    n.matches(r.focusableElements) &&
      ((w = !1), n.nodeName === "SELECT" && (r.isTouched = !1)),
      t.activeElement &&
        t.activeElement.matches(r.focusableElements) &&
        t.activeElement !== n &&
        (s.pointerType === "mouse" ||
          (s.pointerType !== "mouse" && !n.matches(r.focusableElements))) &&
        t.activeElement.blur();
    const h = w && e.allowTouchMove && a.touchStartPreventDefault;
    (!a.touchStartForcePreventDefault && !h) ||
      n.isContentEditable ||
      s.preventDefault(),
      a.freeMode &&
        a.freeMode.enabled &&
        e.freeMode &&
        e.animating &&
        !a.cssMode &&
        e.freeMode.onTouchStart(),
      e.emit("touchStart", s);
  }
  function vt(i) {
    const e = q(),
      t = this,
      s = t.touchEventsData,
      { params: r, touches: a, rtlTranslate: p, enabled: o } = t;
    if (!o || (!r.simulateTouch && i.pointerType === "mouse")) return;
    let n,
      c = i;
    if (
      (c.originalEvent && (c = c.originalEvent),
      c.type === "pointermove" &&
        (s.touchId !== null || c.pointerId !== s.pointerId))
    )
      return;
    if (c.type === "touchmove") {
      if (
        ((n = [...c.changedTouches].filter(
          (M) => M.identifier === s.touchId
        )[0]),
        !n || n.identifier !== s.touchId)
      )
        return;
    } else n = c;
    if (!s.isTouched)
      return void (
        s.startMoving &&
        s.isScrolling &&
        t.emit("touchMoveOpposite", c)
      );
    const u = n.pageX,
      l = n.pageY;
    if (c.preventedByNestedSwiper) return (a.startX = u), void (a.startY = l);
    if (!t.allowTouchMove)
      return (
        c.target.matches(s.focusableElements) || (t.allowClick = !1),
        void (
          s.isTouched &&
          (Object.assign(a, { startX: u, startY: l, currentX: u, currentY: l }),
          (s.touchStartTime = W()))
        )
      );
    if (r.touchReleaseOnEdges && !r.loop) {
      if (t.isVertical()) {
        if (
          (l < a.startY && t.translate <= t.maxTranslate()) ||
          (l > a.startY && t.translate >= t.minTranslate())
        )
          return (s.isTouched = !1), void (s.isMoved = !1);
      } else if (
        (u < a.startX && t.translate <= t.maxTranslate()) ||
        (u > a.startX && t.translate >= t.minTranslate())
      )
        return;
    }
    if (
      (e.activeElement &&
        e.activeElement.matches(s.focusableElements) &&
        e.activeElement !== c.target &&
        c.pointerType !== "mouse" &&
        e.activeElement.blur(),
      e.activeElement &&
        c.target === e.activeElement &&
        c.target.matches(s.focusableElements))
    )
      return (s.isMoved = !0), void (t.allowClick = !1);
    s.allowTouchCallbacks && t.emit("touchMove", c),
      (a.previousX = a.currentX),
      (a.previousY = a.currentY),
      (a.currentX = u),
      (a.currentY = l);
    const d = a.currentX - a.startX,
      m = a.currentY - a.startY;
    if (t.params.threshold && Math.sqrt(d ** 2 + m ** 2) < t.params.threshold)
      return;
    if (s.isScrolling === void 0) {
      let M;
      (t.isHorizontal() && a.currentY === a.startY) ||
      (t.isVertical() && a.currentX === a.startX)
        ? (s.isScrolling = !1)
        : d * d + m * m >= 25 &&
          ((M = (180 * Math.atan2(Math.abs(m), Math.abs(d))) / Math.PI),
          (s.isScrolling = t.isHorizontal()
            ? M > r.touchAngle
            : 90 - M > r.touchAngle));
    }
    if (
      (s.isScrolling && t.emit("touchMoveOpposite", c),
      s.startMoving === void 0 &&
        ((a.currentX === a.startX && a.currentY === a.startY) ||
          (s.startMoving = !0)),
      s.isScrolling ||
        (c.type === "touchmove" && s.preventTouchMoveFromPointerMove))
    )
      return void (s.isTouched = !1);
    if (!s.startMoving) return;
    (t.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation();
    let g = t.isHorizontal() ? d : m,
      w = t.isHorizontal()
        ? a.currentX - a.previousX
        : a.currentY - a.previousY;
    r.oneWayMovement &&
      ((g = Math.abs(g) * (p ? 1 : -1)), (w = Math.abs(w) * (p ? 1 : -1))),
      (a.diff = g),
      (g *= r.touchRatio),
      p && ((g = -g), (w = -w));
    const h = t.touchesDirection;
    (t.swipeDirection = g > 0 ? "prev" : "next"),
      (t.touchesDirection = w > 0 ? "prev" : "next");
    const f = t.params.loop && !r.cssMode,
      y =
        (t.touchesDirection === "next" && t.allowSlideNext) ||
        (t.touchesDirection === "prev" && t.allowSlidePrev);
    if (!s.isMoved) {
      if (
        (f && y && t.loopFix({ direction: t.swipeDirection }),
        (s.startTranslate = t.getTranslate()),
        t.setTransition(0),
        t.animating)
      ) {
        const M = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
          detail: { bySwiperTouchMove: !0 },
        });
        t.wrapperEl.dispatchEvent(M);
      }
      (s.allowMomentumBounce = !1),
        !r.grabCursor ||
          (t.allowSlideNext !== !0 && t.allowSlidePrev !== !0) ||
          t.setGrabCursor(!0),
        t.emit("sliderFirstMove", c);
    }
    if (
      (new Date().getTime(),
      s.isMoved &&
        s.allowThresholdMove &&
        h !== t.touchesDirection &&
        f &&
        y &&
        Math.abs(g) >= 1)
    )
      return (
        Object.assign(a, {
          startX: u,
          startY: l,
          currentX: u,
          currentY: l,
          startTranslate: s.currentTranslate,
        }),
        (s.loopSwapReset = !0),
        void (s.startTranslate = s.currentTranslate)
      );
    t.emit("sliderMove", c),
      (s.isMoved = !0),
      (s.currentTranslate = g + s.startTranslate);
    let T = !0,
      S = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (S = 0),
      g > 0
        ? (f &&
            y &&
            s.allowThresholdMove &&
            s.currentTranslate >
              (r.centeredSlides
                ? t.minTranslate() -
                  t.slidesSizesGrid[t.activeIndex + 1] -
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.activeIndex + 1] +
                      t.params.spaceBetween
                    : 0) -
                  t.params.spaceBetween
                : t.minTranslate()) &&
            t.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          s.currentTranslate > t.minTranslate() &&
            ((T = !1),
            r.resistance &&
              (s.currentTranslate =
                t.minTranslate() -
                1 +
                (-t.minTranslate() + s.startTranslate + g) ** S)))
        : g < 0 &&
          (f &&
            y &&
            s.allowThresholdMove &&
            s.currentTranslate <
              (r.centeredSlides
                ? t.maxTranslate() +
                  t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                  t.params.spaceBetween +
                  (r.slidesPerView !== "auto" &&
                  t.slides.length - r.slidesPerView >= 2
                    ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] +
                      t.params.spaceBetween
                    : 0)
                : t.maxTranslate()) &&
            t.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                t.slides.length -
                (r.slidesPerView === "auto"
                  ? t.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(r.slidesPerView, 10))),
            }),
          s.currentTranslate < t.maxTranslate() &&
            ((T = !1),
            r.resistance &&
              (s.currentTranslate =
                t.maxTranslate() +
                1 -
                (t.maxTranslate() - s.startTranslate - g) ** S))),
      T && (c.preventedByNestedSwiper = !0),
      !t.allowSlideNext &&
        t.swipeDirection === "next" &&
        s.currentTranslate < s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      !t.allowSlidePrev &&
        t.swipeDirection === "prev" &&
        s.currentTranslate > s.startTranslate &&
        (s.currentTranslate = s.startTranslate),
      t.allowSlidePrev ||
        t.allowSlideNext ||
        (s.currentTranslate = s.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(g) > r.threshold || s.allowThresholdMove))
        return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove)
        return (
          (s.allowThresholdMove = !0),
          (a.startX = a.currentX),
          (a.startY = a.currentY),
          (s.currentTranslate = s.startTranslate),
          void (a.diff = t.isHorizontal()
            ? a.currentX - a.startX
            : a.currentY - a.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && t.freeMode) ||
        r.watchSlidesProgress) &&
        (t.updateActiveIndex(), t.updateSlidesClasses()),
      r.freeMode &&
        r.freeMode.enabled &&
        t.freeMode &&
        t.freeMode.onTouchMove(),
      t.updateProgress(s.currentTranslate),
      t.setTranslate(s.currentTranslate));
  }
  function wt(i) {
    const e = this,
      t = e.touchEventsData;
    let s,
      r = i;
    if (
      (r.originalEvent && (r = r.originalEvent),
      r.type === "touchend" || r.type === "touchcancel")
    ) {
      if (
        ((s = [...r.changedTouches].filter(
          (S) => S.identifier === t.touchId
        )[0]),
        !s || s.identifier !== t.touchId)
      )
        return;
    } else {
      if (t.touchId !== null || r.pointerId !== t.pointerId) return;
      s = r;
    }
    if (
      ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
        r.type
      ) &&
      !(
        ["pointercancel", "contextmenu"].includes(r.type) &&
        (e.browser.isSafari || e.browser.isWebView)
      )
    )
      return;
    (t.pointerId = null), (t.touchId = null);
    const {
      params: a,
      touches: p,
      rtlTranslate: o,
      slidesGrid: n,
      enabled: c,
    } = e;
    if (!c || (!a.simulateTouch && r.pointerType === "mouse")) return;
    if (
      (t.allowTouchCallbacks && e.emit("touchEnd", r),
      (t.allowTouchCallbacks = !1),
      !t.isTouched)
    )
      return (
        t.isMoved && a.grabCursor && e.setGrabCursor(!1),
        (t.isMoved = !1),
        void (t.startMoving = !1)
      );
    a.grabCursor &&
      t.isMoved &&
      t.isTouched &&
      (e.allowSlideNext === !0 || e.allowSlidePrev === !0) &&
      e.setGrabCursor(!1);
    const u = W(),
      l = u - t.touchStartTime;
    if (e.allowClick) {
      const S = r.path || (r.composedPath && r.composedPath());
      e.updateClickedSlide((S && S[0]) || r.target, S),
        e.emit("tap click", r),
        l < 300 &&
          u - t.lastClickTime < 300 &&
          e.emit("doubleTap doubleClick", r);
    }
    if (
      ((t.lastClickTime = W()),
      te(() => {
        e.destroyed || (e.allowClick = !0);
      }),
      !t.isTouched ||
        !t.isMoved ||
        !e.swipeDirection ||
        (p.diff === 0 && !t.loopSwapReset) ||
        (t.currentTranslate === t.startTranslate && !t.loopSwapReset))
    )
      return (t.isTouched = !1), (t.isMoved = !1), void (t.startMoving = !1);
    let d;
    if (
      ((t.isTouched = !1),
      (t.isMoved = !1),
      (t.startMoving = !1),
      (d = a.followFinger
        ? o
          ? e.translate
          : -e.translate
        : -t.currentTranslate),
      a.cssMode)
    )
      return;
    if (a.freeMode && a.freeMode.enabled)
      return void e.freeMode.onTouchEnd({ currentPos: d });
    const m = d >= -e.maxTranslate() && !e.params.loop;
    let g = 0,
      w = e.slidesSizesGrid[0];
    for (
      let S = 0;
      S < n.length;
      S += S < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const M = S < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      n[S + M] !== void 0
        ? (m || (d >= n[S] && d < n[S + M])) && ((g = S), (w = n[S + M] - n[S]))
        : (m || d >= n[S]) &&
          ((g = S), (w = n[n.length - 1] - n[n.length - 2]));
    }
    let h = null,
      f = null;
    a.rewind &&
      (e.isBeginning
        ? (f =
            a.virtual && a.virtual.enabled && e.virtual
              ? e.virtual.slides.length - 1
              : e.slides.length - 1)
        : e.isEnd && (h = 0));
    const y = (d - n[g]) / w,
      T = g < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (l > a.longSwipesMs) {
      if (!a.longSwipes) return void e.slideTo(e.activeIndex);
      e.swipeDirection === "next" &&
        (y >= a.longSwipesRatio
          ? e.slideTo(a.rewind && e.isEnd ? h : g + T)
          : e.slideTo(g)),
        e.swipeDirection === "prev" &&
          (y > 1 - a.longSwipesRatio
            ? e.slideTo(g + T)
            : f !== null && y < 0 && Math.abs(y) > a.longSwipesRatio
            ? e.slideTo(f)
            : e.slideTo(g));
    } else {
      if (!a.shortSwipes) return void e.slideTo(e.activeIndex);
      e.navigation &&
      (r.target === e.navigation.nextEl || r.target === e.navigation.prevEl)
        ? r.target === e.navigation.nextEl
          ? e.slideTo(g + T)
          : e.slideTo(g)
        : (e.swipeDirection === "next" && e.slideTo(h !== null ? h : g + T),
          e.swipeDirection === "prev" && e.slideTo(f !== null ? f : g));
    }
  }
  function Ke() {
    const i = this,
      { params: e, el: t } = i;
    if (t && t.offsetWidth === 0) return;
    e.breakpoints && i.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: r, snapGrid: a } = i,
      p = i.virtual && i.params.virtual.enabled;
    (i.allowSlideNext = !0),
      (i.allowSlidePrev = !0),
      i.updateSize(),
      i.updateSlides(),
      i.updateSlidesClasses();
    const o = p && e.loop;
    !(e.slidesPerView === "auto" || e.slidesPerView > 1) ||
    !i.isEnd ||
    i.isBeginning ||
    i.params.centeredSlides ||
    o
      ? i.params.loop && !p
        ? i.slideToLoop(i.realIndex, 0, !1, !0)
        : i.slideTo(i.activeIndex, 0, !1, !0)
      : i.slideTo(i.slides.length - 1, 0, !1, !0),
      i.autoplay &&
        i.autoplay.running &&
        i.autoplay.paused &&
        (clearTimeout(i.autoplay.resizeTimeout),
        (i.autoplay.resizeTimeout = setTimeout(() => {
          i.autoplay &&
            i.autoplay.running &&
            i.autoplay.paused &&
            i.autoplay.resume();
        }, 500))),
      (i.allowSlidePrev = r),
      (i.allowSlideNext = s),
      i.params.watchOverflow && a !== i.snapGrid && i.checkOverflow();
  }
  function bt(i) {
    const e = this;
    e.enabled &&
      (e.allowClick ||
        (e.params.preventClicks && i.preventDefault(),
        e.params.preventClicksPropagation &&
          e.animating &&
          (i.stopPropagation(), i.stopImmediatePropagation())));
  }
  function yt() {
    const i = this,
      { wrapperEl: e, rtlTranslate: t, enabled: s } = i;
    if (!s) return;
    let r;
    (i.previousTranslate = i.translate),
      i.isHorizontal()
        ? (i.translate = -e.scrollLeft)
        : (i.translate = -e.scrollTop),
      i.translate === 0 && (i.translate = 0),
      i.updateActiveIndex(),
      i.updateSlidesClasses();
    const a = i.maxTranslate() - i.minTranslate();
    (r = a === 0 ? 0 : (i.translate - i.minTranslate()) / a),
      r !== i.progress && i.updateProgress(t ? -i.translate : i.translate),
      i.emit("setTranslate", i.translate, !1);
  }
  function xt(i) {
    const e = this;
    ye(e, i.target),
      e.params.cssMode ||
        (e.params.slidesPerView !== "auto" && !e.params.autoHeight) ||
        e.update();
  }
  function St() {
    const i = this;
    i.documentTouchHandlerProceeded ||
      ((i.documentTouchHandlerProceeded = !0),
      i.params.touchReleaseOnEdges && (i.el.style.touchAction = "auto"));
  }
  const Ze = (i, e) => {
      const t = q(),
        { params: s, el: r, wrapperEl: a, device: p } = i,
        o = !!s.nested,
        n = e === "on" ? "addEventListener" : "removeEventListener",
        c = e;
      r &&
        typeof r != "string" &&
        (t[n]("touchstart", i.onDocumentTouchStart, {
          passive: !1,
          capture: o,
        }),
        r[n]("touchstart", i.onTouchStart, { passive: !1 }),
        r[n]("pointerdown", i.onTouchStart, { passive: !1 }),
        t[n]("touchmove", i.onTouchMove, { passive: !1, capture: o }),
        t[n]("pointermove", i.onTouchMove, { passive: !1, capture: o }),
        t[n]("touchend", i.onTouchEnd, { passive: !0 }),
        t[n]("pointerup", i.onTouchEnd, { passive: !0 }),
        t[n]("pointercancel", i.onTouchEnd, { passive: !0 }),
        t[n]("touchcancel", i.onTouchEnd, { passive: !0 }),
        t[n]("pointerout", i.onTouchEnd, { passive: !0 }),
        t[n]("pointerleave", i.onTouchEnd, { passive: !0 }),
        t[n]("contextmenu", i.onTouchEnd, { passive: !0 }),
        (s.preventClicks || s.preventClicksPropagation) &&
          r[n]("click", i.onClick, !0),
        s.cssMode && a[n]("scroll", i.onScroll),
        s.updateOnWindowResize
          ? i[c](
              p.ios || p.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Ke,
              !0
            )
          : i[c]("observerUpdate", Ke, !0),
        r[n]("load", i.onLoad, { capture: !0 }));
    },
    Qe = (i, e) => i.grid && e.grid && e.grid.rows > 1;
  var De = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function Et(i, e) {
    return function (t) {
      t === void 0 && (t = {});
      const s = Object.keys(t)[0],
        r = t[s];
      typeof r == "object" && r !== null
        ? (i[s] === !0 && (i[s] = { enabled: !0 }),
          s === "navigation" &&
            i[s] &&
            i[s].enabled &&
            !i[s].prevEl &&
            !i[s].nextEl &&
            (i[s].auto = !0),
          ["pagination", "scrollbar"].indexOf(s) >= 0 &&
            i[s] &&
            i[s].enabled &&
            !i[s].el &&
            (i[s].auto = !0),
          s in i &&
            "enabled" in r &&
            (typeof i[s] != "object" ||
              "enabled" in i[s] ||
              (i[s].enabled = !0),
            i[s] || (i[s] = { enabled: !1 })),
          U(e, t))
        : U(e, t);
    };
  }
  const _e = {
      eventsEmitter: pt,
      update: ut,
      translate: mt,
      transition: {
        setTransition: function (i, e) {
          const t = this;
          t.params.cssMode ||
            ((t.wrapperEl.style.transitionDuration = `${i}ms`),
            (t.wrapperEl.style.transitionDelay = i === 0 ? "0ms" : "")),
            t.emit("setTransition", i, e);
        },
        transitionStart: function (i, e) {
          i === void 0 && (i = !0);
          const t = this,
            { params: s } = t;
          s.cssMode ||
            (s.autoHeight && t.updateAutoHeight(),
            We({ swiper: t, runCallbacks: i, direction: e, step: "Start" }));
        },
        transitionEnd: function (i, e) {
          i === void 0 && (i = !0);
          const t = this,
            { params: s } = t;
          (t.animating = !1),
            s.cssMode ||
              (t.setTransition(0),
              We({ swiper: t, runCallbacks: i, direction: e, step: "End" }));
        },
      },
      slide: ht,
      loop: ft,
      grabCursor: {
        setGrabCursor: function (i) {
          const e = this;
          if (
            !e.params.simulateTouch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode
          )
            return;
          const t =
            e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
          e.isElement && (e.__preventObserver__ = !0),
            (t.style.cursor = "move"),
            (t.style.cursor = i ? "grabbing" : "grab"),
            e.isElement &&
              requestAnimationFrame(() => {
                e.__preventObserver__ = !1;
              });
        },
        unsetGrabCursor: function () {
          const i = this;
          (i.params.watchOverflow && i.isLocked) ||
            i.params.cssMode ||
            (i.isElement && (i.__preventObserver__ = !0),
            (i[
              i.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
            ].style.cursor = ""),
            i.isElement &&
              requestAnimationFrame(() => {
                i.__preventObserver__ = !1;
              }));
        },
      },
      events: {
        attachEvents: function () {
          const i = this,
            { params: e } = i;
          (i.onTouchStart = gt.bind(i)),
            (i.onTouchMove = vt.bind(i)),
            (i.onTouchEnd = wt.bind(i)),
            (i.onDocumentTouchStart = St.bind(i)),
            e.cssMode && (i.onScroll = yt.bind(i)),
            (i.onClick = bt.bind(i)),
            (i.onLoad = xt.bind(i)),
            Ze(i, "on");
        },
        detachEvents: function () {
          Ze(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const i = this,
            { realIndex: e, initialized: t, params: s, el: r } = i,
            a = s.breakpoints;
          if (!a || (a && Object.keys(a).length === 0)) return;
          const p = i.getBreakpoint(a, i.params.breakpointsBase, i.el);
          if (!p || i.currentBreakpoint === p) return;
          const o = (p in a ? a[p] : void 0) || i.originalParams,
            n = Qe(i, s),
            c = Qe(i, o),
            u = i.params.grabCursor,
            l = o.grabCursor,
            d = s.enabled;
          n && !c
            ? (r.classList.remove(
                `${s.containerModifierClass}grid`,
                `${s.containerModifierClass}grid-column`
              ),
              i.emitContainerClasses())
            : !n &&
              c &&
              (r.classList.add(`${s.containerModifierClass}grid`),
              ((o.grid.fill && o.grid.fill === "column") ||
                (!o.grid.fill && s.grid.fill === "column")) &&
                r.classList.add(`${s.containerModifierClass}grid-column`),
              i.emitContainerClasses()),
            u && !l ? i.unsetGrabCursor() : !u && l && i.setGrabCursor(),
            ["navigation", "pagination", "scrollbar"].forEach((y) => {
              if (o[y] === void 0) return;
              const T = s[y] && s[y].enabled,
                S = o[y] && o[y].enabled;
              T && !S && i[y].disable(), !T && S && i[y].enable();
            });
          const m = o.direction && o.direction !== s.direction,
            g = s.loop && (o.slidesPerView !== s.slidesPerView || m),
            w = s.loop;
          m && t && i.changeDirection(), U(i.params, o);
          const h = i.params.enabled,
            f = i.params.loop;
          Object.assign(i, {
            allowTouchMove: i.params.allowTouchMove,
            allowSlideNext: i.params.allowSlideNext,
            allowSlidePrev: i.params.allowSlidePrev,
          }),
            d && !h ? i.disable() : !d && h && i.enable(),
            (i.currentBreakpoint = p),
            i.emit("_beforeBreakpoint", o),
            t &&
              (g
                ? (i.loopDestroy(), i.loopCreate(e), i.updateSlides())
                : !w && f
                ? (i.loopCreate(e), i.updateSlides())
                : w && !f && i.loopDestroy()),
            i.emit("breakpoint", o);
        },
        getBreakpoint: function (i, e, t) {
          if ((e === void 0 && (e = "window"), !i || (e === "container" && !t)))
            return;
          let s = !1;
          const r = j(),
            a = e === "window" ? r.innerHeight : t.clientHeight,
            p = Object.keys(i).map((o) => {
              if (typeof o == "string" && o.indexOf("@") === 0) {
                const n = parseFloat(o.substr(1));
                return { value: a * n, point: o };
              }
              return { value: o, point: o };
            });
          p.sort((o, n) => parseInt(o.value, 10) - parseInt(n.value, 10));
          for (let o = 0; o < p.length; o += 1) {
            const { point: n, value: c } = p[o];
            e === "window"
              ? r.matchMedia(`(min-width: ${c}px)`).matches && (s = n)
              : c <= t.clientWidth && (s = n);
          }
          return s || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const i = this,
            { isLocked: e, params: t } = i,
            { slidesOffsetBefore: s } = t;
          if (s) {
            const r = i.slides.length - 1,
              a = i.slidesGrid[r] + i.slidesSizesGrid[r] + 2 * s;
            i.isLocked = i.size > a;
          } else i.isLocked = i.snapGrid.length === 1;
          t.allowSlideNext === !0 && (i.allowSlideNext = !i.isLocked),
            t.allowSlidePrev === !0 && (i.allowSlidePrev = !i.isLocked),
            e && e !== i.isLocked && (i.isEnd = !1),
            e !== i.isLocked && i.emit(i.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const i = this,
            { classNames: e, params: t, rtl: s, el: r, device: a } = i,
            p = (function (o, n) {
              const c = [];
              return (
                o.forEach((u) => {
                  typeof u == "object"
                    ? Object.keys(u).forEach((l) => {
                        u[l] && c.push(n + l);
                      })
                    : typeof u == "string" && c.push(n + u);
                }),
                c
              );
            })(
              [
                "initialized",
                t.direction,
                { "free-mode": i.params.freeMode && t.freeMode.enabled },
                { autoheight: t.autoHeight },
                { rtl: s },
                { grid: t.grid && t.grid.rows > 1 },
                {
                  "grid-column":
                    t.grid && t.grid.rows > 1 && t.grid.fill === "column",
                },
                { android: a.android },
                { ios: a.ios },
                { "css-mode": t.cssMode },
                { centered: t.cssMode && t.centeredSlides },
                { "watch-progress": t.watchSlidesProgress },
              ],
              t.containerModifierClass
            );
          e.push(...p), r.classList.add(...e), i.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: i, classNames: e } = this;
          i &&
            typeof i != "string" &&
            (i.classList.remove(...e), this.emitContainerClasses());
        },
      },
    },
    Ge = {};
  class Z {
    constructor() {
      let e, t;
      for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
        r[a] = arguments[a];
      r.length === 1 &&
      r[0].constructor &&
      Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
        ? (t = r[0])
        : ([e, t] = r),
        t || (t = {}),
        (t = U({}, t)),
        e && !t.el && (t.el = e);
      const p = q();
      if (
        t.el &&
        typeof t.el == "string" &&
        p.querySelectorAll(t.el).length > 1
      ) {
        const u = [];
        return (
          p.querySelectorAll(t.el).forEach((l) => {
            const d = U({}, t, { el: l });
            u.push(new Z(d));
          }),
          u
        );
      }
      const o = this;
      (o.__swiper__ = !0),
        (o.support = Ye()),
        (o.device = Fe({ userAgent: t.userAgent })),
        (o.browser = ct()),
        (o.eventsListeners = {}),
        (o.eventsAnyListeners = []),
        (o.modules = [...o.__modules__]),
        t.modules && Array.isArray(t.modules) && o.modules.push(...t.modules);
      const n = {};
      o.modules.forEach((u) => {
        u({
          params: t,
          swiper: o,
          extendParams: Et(t, n),
          on: o.on.bind(o),
          once: o.once.bind(o),
          off: o.off.bind(o),
          emit: o.emit.bind(o),
        });
      });
      const c = U({}, De, n);
      return (
        (o.params = U({}, c, Ge, t)),
        (o.originalParams = U({}, o.params)),
        (o.passedParams = U({}, t)),
        o.params &&
          o.params.on &&
          Object.keys(o.params.on).forEach((u) => {
            o.on(u, o.params.on[u]);
          }),
        o.params && o.params.onAny && o.onAny(o.params.onAny),
        Object.assign(o, {
          enabled: o.params.enabled,
          el: e,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => o.params.direction === "horizontal",
          isVertical: () => o.params.direction === "vertical",
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          cssOverflowAdjustment() {
            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
          },
          allowSlideNext: o.params.allowSlideNext,
          allowSlidePrev: o.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: o.params.focusableElements,
            lastClickTime: 0,
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            pointerId: null,
            touchId: null,
          },
          allowClick: !0,
          allowTouchMove: o.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        o.emit("_swiper"),
        o.params.init && o.init(),
        o
      );
    }
    getDirectionLabel(e) {
      return this.isHorizontal()
        ? e
        : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom",
          }[e];
    }
    getSlideIndex(e) {
      const { slidesEl: t, params: s } = this,
        r = ue(F(t, `.${s.slideClass}, swiper-slide`)[0]);
      return ue(e) - r;
    }
    getSlideIndexByData(e) {
      return this.getSlideIndex(
        this.slides.filter(
          (t) => 1 * t.getAttribute("data-swiper-slide-index") === e
        )[0]
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = F(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const r = s.minTranslate(),
        a = (s.maxTranslate() - r) * e + r;
      s.translateTo(a, t === void 0 ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (s) =>
            s.indexOf("swiper") === 0 ||
            s.indexOf(e.params.containerModifierClass) === 0
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (s) =>
                s.indexOf("swiper-slide") === 0 ||
                s.indexOf(t.params.slideClass) === 0
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const r = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: r }), e.emit("_slideClass", s, r);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e, t) {
      e === void 0 && (e = "current"), t === void 0 && (t = !1);
      const {
        params: s,
        slides: r,
        slidesGrid: a,
        slidesSizesGrid: p,
        size: o,
        activeIndex: n,
      } = this;
      let c = 1;
      if (typeof s.slidesPerView == "number") return s.slidesPerView;
      if (s.centeredSlides) {
        let u,
          l = r[n] ? Math.ceil(r[n].swiperSlideSize) : 0;
        for (let d = n + 1; d < r.length; d += 1)
          r[d] &&
            !u &&
            ((l += Math.ceil(r[d].swiperSlideSize)),
            (c += 1),
            l > o && (u = !0));
        for (let d = n - 1; d >= 0; d -= 1)
          r[d] &&
            !u &&
            ((l += r[d].swiperSlideSize), (c += 1), l > o && (u = !0));
      } else if (e === "current")
        for (let u = n + 1; u < r.length; u += 1)
          (t ? a[u] + p[u] - a[n] < o : a[u] - a[n] < o) && (c += 1);
      else for (let u = n - 1; u >= 0; u -= 1) a[n] - a[u] < o && (c += 1);
      return c;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function r() {
        const p = e.rtlTranslate ? -1 * e.translate : e.translate,
          o = Math.min(Math.max(p, e.maxTranslate()), e.minTranslate());
        e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let a;
      if (
        (s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((p) => {
          p.complete && ye(e, p);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        s.freeMode && s.freeMode.enabled && !s.cssMode)
      )
        r(), s.autoHeight && e.updateAutoHeight();
      else {
        if (
          (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
          e.isEnd &&
          !s.centeredSlides
        ) {
          const p =
            e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
          a = e.slideTo(p.length - 1, 0, !1, !0);
        } else a = e.slideTo(e.activeIndex, 0, !1, !0);
        a || r();
      }
      s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t) {
      t === void 0 && (t = !0);
      const s = this,
        r = s.params.direction;
      return (
        e || (e = r === "horizontal" ? "vertical" : "horizontal"),
        e === r ||
          (e !== "horizontal" && e !== "vertical") ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((a) => {
            e === "vertical" ? (a.style.width = "") : (a.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && e === "rtl") ||
        (!t.rtl && e === "ltr") ||
        ((t.rtl = e === "rtl"),
        (t.rtlTranslate = t.params.direction === "horizontal" && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if ((typeof s == "string" && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t),
        s.parentNode &&
          s.parentNode.host &&
          s.parentNode.host.nodeName ===
            t.params.swiperElementNodeName.toUpperCase() &&
          (t.isElement = !0);
      const r = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let a =
        s && s.shadowRoot && s.shadowRoot.querySelector
          ? s.shadowRoot.querySelector(r())
          : F(s, r())[0];
      return (
        !a &&
          t.params.createElements &&
          ((a = K("div", t.params.wrapperClass)),
          s.append(a),
          F(s, `.${t.params.slideClass}`).forEach((p) => {
            a.append(p);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: a,
          slidesEl:
            t.isElement && !s.parentNode.host.slideSlots
              ? s.parentNode.host
              : a,
          hostEl: t.isElement ? s.parentNode.host : s,
          mounted: !0,
          rtl: s.dir.toLowerCase() === "rtl" || ae(s, "direction") === "rtl",
          rtlTranslate:
            t.params.direction === "horizontal" &&
            (s.dir.toLowerCase() === "rtl" || ae(s, "direction") === "rtl"),
          wrongRTL: ae(a, "display") === "-webkit-box",
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized || t.mount(e) === !1) return t;
      t.emit("beforeInit"),
        t.params.breakpoints && t.setBreakpoint(),
        t.addClasses(),
        t.updateSize(),
        t.updateSlides(),
        t.params.watchOverflow && t.checkOverflow(),
        t.params.grabCursor && t.enabled && t.setGrabCursor(),
        t.params.loop && t.virtual && t.params.virtual.enabled
          ? t.slideTo(
              t.params.initialSlide + t.virtual.slidesBefore,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            )
          : t.slideTo(
              t.params.initialSlide,
              0,
              t.params.runCallbacksOnInit,
              !1,
              !0
            ),
        t.params.loop && t.loopCreate(),
        t.attachEvents();
      const s = [...t.el.querySelectorAll('[loading="lazy"]')];
      return (
        t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),
        s.forEach((r) => {
          r.complete
            ? ye(t, r)
            : r.addEventListener("load", (a) => {
                ye(t, a.target);
              });
        }),
        Oe(t),
        (t.initialized = !0),
        Oe(t),
        t.emit("init"),
        t.emit("afterInit"),
        t
      );
    }
    destroy(e, t) {
      e === void 0 && (e = !0), t === void 0 && (t = !0);
      const s = this,
        { params: r, el: a, wrapperEl: p, slides: o } = s;
      return (
        s.params === void 0 ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          r.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            a && typeof a != "string" && a.removeAttribute("style"),
            p && p.removeAttribute("style"),
            o &&
              o.length &&
              o.forEach((n) => {
                n.classList.remove(
                  r.slideVisibleClass,
                  r.slideFullyVisibleClass,
                  r.slideActiveClass,
                  r.slideNextClass,
                  r.slidePrevClass
                ),
                  n.removeAttribute("style"),
                  n.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((n) => {
            s.off(n);
          }),
          e !== !1 &&
            (s.el && typeof s.el != "string" && (s.el.swiper = null),
            (function (n) {
              const c = n;
              Object.keys(c).forEach((u) => {
                try {
                  c[u] = null;
                } catch {}
                try {
                  delete c[u];
                } catch {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      U(Ge, e);
    }
    static get extendedDefaults() {
      return Ge;
    }
    static get defaults() {
      return De;
    }
    static installModule(e) {
      Z.prototype.__modules__ || (Z.prototype.__modules__ = []);
      const t = Z.prototype.__modules__;
      typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((t) => Z.installModule(t)), Z)
        : (Z.installModule(e), Z);
    }
  }
  function Be(i, e, t, s) {
    return (
      i.params.createElements &&
        Object.keys(s).forEach((r) => {
          if (!t[r] && t.auto === !0) {
            let a = F(i.el, `.${s[r]}`)[0];
            a || ((a = K("div", s[r])), (a.className = s[r]), i.el.append(a)),
              (t[r] = a),
              (e[r] = a);
          }
        }),
      t
    );
  }
  function se(i) {
    return (
      i === void 0 && (i = ""),
      `.${i
        .trim()
        .replace(/([\.:!+\/])/g, "\\$1")
        .replace(/ /g, ".")}`
    );
  }
  function Tt(i) {
    const e = this,
      { params: t, slidesEl: s } = e;
    t.loop && e.loopDestroy();
    const r = (a) => {
      if (typeof a == "string") {
        const p = document.createElement("div");
        (p.innerHTML = a), s.append(p.children[0]), (p.innerHTML = "");
      } else s.append(a);
    };
    if (typeof i == "object" && "length" in i)
      for (let a = 0; a < i.length; a += 1) i[a] && r(i[a]);
    else r(i);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (t.observer && !e.isElement) || e.update();
  }
  function Mt(i) {
    const e = this,
      { params: t, activeIndex: s, slidesEl: r } = e;
    t.loop && e.loopDestroy();
    let a = s + 1;
    const p = (o) => {
      if (typeof o == "string") {
        const n = document.createElement("div");
        (n.innerHTML = o), r.prepend(n.children[0]), (n.innerHTML = "");
      } else r.prepend(o);
    };
    if (typeof i == "object" && "length" in i) {
      for (let o = 0; o < i.length; o += 1) i[o] && p(i[o]);
      a = s + i.length;
    } else p(i);
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (t.observer && !e.isElement) || e.update(),
      e.slideTo(a, 0, !1);
  }
  function Ct(i, e) {
    const t = this,
      { params: s, activeIndex: r, slidesEl: a } = t;
    let p = r;
    s.loop && ((p -= t.loopedSlides), t.loopDestroy(), t.recalcSlides());
    const o = t.slides.length;
    if (i <= 0) return void t.prependSlide(e);
    if (i >= o) return void t.appendSlide(e);
    let n = p > i ? p + 1 : p;
    const c = [];
    for (let u = o - 1; u >= i; u -= 1) {
      const l = t.slides[u];
      l.remove(), c.unshift(l);
    }
    if (typeof e == "object" && "length" in e) {
      for (let u = 0; u < e.length; u += 1) e[u] && a.append(e[u]);
      n = p > i ? p + e.length : p;
    } else a.append(e);
    for (let u = 0; u < c.length; u += 1) a.append(c[u]);
    t.recalcSlides(),
      s.loop && t.loopCreate(),
      (s.observer && !t.isElement) || t.update(),
      s.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
  }
  function Pt(i) {
    const e = this,
      { params: t, activeIndex: s } = e;
    let r = s;
    t.loop && ((r -= e.loopedSlides), e.loopDestroy());
    let a,
      p = r;
    if (typeof i == "object" && "length" in i) {
      for (let o = 0; o < i.length; o += 1)
        (a = i[o]), e.slides[a] && e.slides[a].remove(), a < p && (p -= 1);
      p = Math.max(p, 0);
    } else
      (a = i),
        e.slides[a] && e.slides[a].remove(),
        a < p && (p -= 1),
        (p = Math.max(p, 0));
    e.recalcSlides(),
      t.loop && e.loopCreate(),
      (t.observer && !e.isElement) || e.update(),
      t.loop ? e.slideTo(p + e.loopedSlides, 0, !1) : e.slideTo(p, 0, !1);
  }
  function Lt() {
    const i = this,
      e = [];
    for (let t = 0; t < i.slides.length; t += 1) e.push(t);
    i.removeSlide(e);
  }
  function le(i) {
    const {
      effect: e,
      swiper: t,
      on: s,
      setTranslate: r,
      setTransition: a,
      overwriteParams: p,
      perspective: o,
      recreateShadows: n,
      getEffectParams: c,
    } = i;
    let u;
    s("beforeInit", () => {
      if (t.params.effect !== e) return;
      t.classNames.push(`${t.params.containerModifierClass}${e}`),
        o && o() && t.classNames.push(`${t.params.containerModifierClass}3d`);
      const l = p ? p() : {};
      Object.assign(t.params, l), Object.assign(t.originalParams, l);
    }),
      s("setTranslate", () => {
        t.params.effect === e && r();
      }),
      s("setTransition", (l, d) => {
        t.params.effect === e && a(d);
      }),
      s("transitionEnd", () => {
        if (t.params.effect === e && n) {
          if (!c || !c().slideShadows) return;
          t.slides.forEach((l) => {
            l.querySelectorAll(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            ).forEach((d) => d.remove());
          }),
            n();
        }
      }),
      s("virtualUpdate", () => {
        t.params.effect === e &&
          (t.slides.length || (u = !0),
          requestAnimationFrame(() => {
            u && t.slides && t.slides.length && (r(), (u = !1));
          }));
      });
  }
  function he(i, e) {
    const t = re(e);
    return (
      t !== e &&
        ((t.style.backfaceVisibility = "hidden"),
        (t.style["-webkit-backface-visibility"] = "hidden")),
      t
    );
  }
  function xe(i) {
    let { swiper: e, duration: t, transformElements: s, allSlides: r } = i;
    const { activeIndex: a } = e;
    if (e.params.virtualTranslate && t !== 0) {
      let p,
        o = !1;
      (p = r
        ? s
        : s.filter((n) => {
            const c = n.classList.contains("swiper-slide-transform")
              ? ((u) =>
                  u.parentElement
                    ? u.parentElement
                    : e.slides.filter(
                        (l) => l.shadowRoot && l.shadowRoot === u.parentNode
                      )[0])(n)
              : n;
            return e.getSlideIndex(c) === a;
          })),
        p.forEach((n) => {
          me(n, () => {
            if (o || !e || e.destroyed) return;
            (o = !0), (e.animating = !1);
            const c = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0,
            });
            e.wrapperEl.dispatchEvent(c);
          });
        });
    }
  }
  function oe(i, e, t) {
    const s = `swiper-slide-shadow${t ? `-${t}` : ""}${
        i ? ` swiper-slide-shadow-${i}` : ""
      }`,
      r = re(e);
    let a = r.querySelector(`.${s.split(" ").join(".")}`);
    return a || ((a = K("div", s.split(" "))), r.append(a)), a;
  }
  Object.keys(_e).forEach((i) => {
    Object.keys(_e[i]).forEach((e) => {
      Z.prototype[e] = _e[i][e];
    });
  }),
    Z.use([
      function (i) {
        let { swiper: e, on: t, emit: s } = i;
        const r = j();
        let a = null,
          p = null;
        const o = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          n = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && r.ResizeObserver !== void 0
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((a = new ResizeObserver((c) => {
                p = r.requestAnimationFrame(() => {
                  const { width: u, height: l } = e;
                  let d = u,
                    m = l;
                  c.forEach((g) => {
                    let { contentBoxSize: w, contentRect: h, target: f } = g;
                    (f && f !== e.el) ||
                      ((d = h ? h.width : (w[0] || w).inlineSize),
                      (m = h ? h.height : (w[0] || w).blockSize));
                  }),
                    (d === u && m === l) || o();
                });
              })),
              a.observe(e.el))
            : (r.addEventListener("resize", o),
              r.addEventListener("orientationchange", n));
        }),
          t("destroy", () => {
            p && r.cancelAnimationFrame(p),
              a && a.unobserve && e.el && (a.unobserve(e.el), (a = null)),
              r.removeEventListener("resize", o),
              r.removeEventListener("orientationchange", n);
          });
      },
      function (i) {
        let { swiper: e, extendParams: t, on: s, emit: r } = i;
        const a = [],
          p = j(),
          o = function (n, c) {
            c === void 0 && (c = {});
            const u = new (p.MutationObserver || p.WebkitMutationObserver)(
              (l) => {
                if (e.__preventObserver__) return;
                if (l.length === 1) return void r("observerUpdate", l[0]);
                const d = function () {
                  r("observerUpdate", l[0]);
                };
                p.requestAnimationFrame
                  ? p.requestAnimationFrame(d)
                  : p.setTimeout(d, 0);
              }
            );
            u.observe(n, {
              attributes: c.attributes === void 0 || c.attributes,
              childList: e.isElement || (c.childList === void 0 || c).childList,
              characterData: c.characterData === void 0 || c.characterData,
            }),
              a.push(u);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const n = ne(e.hostEl);
                for (let c = 0; c < n.length; c += 1) o(n[c]);
              }
              o(e.hostEl, { childList: e.params.observeSlideChildren }),
                o(e.wrapperEl, { attributes: !1 });
            }
          }),
          s("destroy", () => {
            a.forEach((n) => {
              n.disconnect();
            }),
              a.splice(0, a.length);
          });
      },
    ]);
  const zt = [
    function (i) {
      let e,
        { swiper: t, extendParams: s, on: r, emit: a } = i;
      s({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      });
      const p = q();
      t.virtual = {
        cache: {},
        from: void 0,
        to: void 0,
        slides: [],
        offset: 0,
        slidesGrid: [],
      };
      const o = p.createElement("div");
      function n(u, l) {
        const d = t.params.virtual;
        if (d.cache && t.virtual.cache[l]) return t.virtual.cache[l];
        let m;
        return (
          d.renderSlide
            ? ((m = d.renderSlide.call(t, u, l)),
              typeof m == "string" && ((o.innerHTML = m), (m = o.children[0])))
            : (m = t.isElement
                ? K("swiper-slide")
                : K("div", t.params.slideClass)),
          m.setAttribute("data-swiper-slide-index", l),
          d.renderSlide || (m.innerHTML = u),
          d.cache && (t.virtual.cache[l] = m),
          m
        );
      }
      function c(u, l) {
        const {
          slidesPerView: d,
          slidesPerGroup: m,
          centeredSlides: g,
          loop: w,
          initialSlide: h,
        } = t.params;
        if (l && !w && h > 0) return;
        const { addSlidesBefore: f, addSlidesAfter: y } = t.params.virtual,
          { from: T, to: S, slides: M, slidesGrid: I, offset: k } = t.virtual;
        t.params.cssMode || t.updateActiveIndex();
        const L = t.activeIndex || 0;
        let z, b, v;
        (z = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top"),
          g
            ? ((b = Math.floor(d / 2) + m + y), (v = Math.floor(d / 2) + m + f))
            : ((b = d + (m - 1) + y), (v = (w ? d : m) + f));
        let x = L - v,
          E = L + b;
        w || ((x = Math.max(x, 0)), (E = Math.min(E, M.length - 1)));
        let P = (t.slidesGrid[x] || 0) - (t.slidesGrid[0] || 0);
        function C() {
          t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            a("virtualUpdate");
        }
        if (
          (w && L >= v
            ? ((x -= v), g || (P += t.slidesGrid[0]))
            : w && L < v && ((x = -v), g && (P += t.slidesGrid[0])),
          Object.assign(t.virtual, {
            from: x,
            to: E,
            offset: P,
            slidesGrid: t.slidesGrid,
            slidesBefore: v,
            slidesAfter: b,
          }),
          T === x && S === E && !u)
        )
          return (
            t.slidesGrid !== I &&
              P !== k &&
              t.slides.forEach((G) => {
                G.style[z] = P - Math.abs(t.cssOverflowAdjustment()) + "px";
              }),
            t.updateProgress(),
            void a("virtualUpdate")
          );
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: P,
              from: x,
              to: E,
              slides: (function () {
                const G = [];
                for (let R = x; R <= E; R += 1) G.push(M[R]);
                return G;
              })(),
            }),
            void (t.params.virtual.renderExternalUpdate
              ? C()
              : a("virtualUpdate"))
          );
        const D = [],
          A = [],
          B = (G) => {
            let R = G;
            return (
              G < 0 ? (R = M.length + G) : R >= M.length && (R -= M.length), R
            );
          };
        if (u)
          t.slides
            .filter((G) => G.matches(`.${t.params.slideClass}, swiper-slide`))
            .forEach((G) => {
              G.remove();
            });
        else
          for (let G = T; G <= S; G += 1)
            if (G < x || G > E) {
              const R = B(G);
              t.slides
                .filter((J) =>
                  J.matches(
                    `.${t.params.slideClass}[data-swiper-slide-index="${R}"], swiper-slide[data-swiper-slide-index="${R}"]`
                  )
                )
                .forEach((J) => {
                  J.remove();
                });
            }
        const H = w ? -M.length : 0,
          Q = w ? 2 * M.length : M.length;
        for (let G = H; G < Q; G += 1)
          if (G >= x && G <= E) {
            const R = B(G);
            S === void 0 || u
              ? A.push(R)
              : (G > S && A.push(R), G < T && D.push(R));
          }
        if (
          (A.forEach((G) => {
            t.slidesEl.append(n(M[G], G));
          }),
          w)
        )
          for (let G = D.length - 1; G >= 0; G -= 1) {
            const R = D[G];
            t.slidesEl.prepend(n(M[R], R));
          }
        else
          D.sort((G, R) => R - G),
            D.forEach((G) => {
              t.slidesEl.prepend(n(M[G], G));
            });
        F(t.slidesEl, ".swiper-slide, swiper-slide").forEach((G) => {
          G.style[z] = P - Math.abs(t.cssOverflowAdjustment()) + "px";
        }),
          C();
      }
      r("beforeInit", () => {
        if (!t.params.virtual.enabled) return;
        let u;
        if (t.passedParams.virtual.slides === void 0) {
          const l = [...t.slidesEl.children].filter((d) =>
            d.matches(`.${t.params.slideClass}, swiper-slide`)
          );
          l &&
            l.length &&
            ((t.virtual.slides = [...l]),
            (u = !0),
            l.forEach((d, m) => {
              d.setAttribute("data-swiper-slide-index", m),
                (t.virtual.cache[m] = d),
                d.remove();
            }));
        }
        u || (t.virtual.slides = t.params.virtual.slides),
          t.classNames.push(`${t.params.containerModifierClass}virtual`),
          (t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0),
          c(!1, !0);
      }),
        r("setTranslate", () => {
          t.params.virtual.enabled &&
            (t.params.cssMode && !t._immediateVirtual
              ? (clearTimeout(e),
                (e = setTimeout(() => {
                  c();
                }, 100)))
              : c());
        }),
        r("init update resize", () => {
          t.params.virtual.enabled &&
            t.params.cssMode &&
            pe(t.wrapperEl, "--swiper-virtual-size", `${t.virtualSize}px`);
        }),
        Object.assign(t.virtual, {
          appendSlide: function (u) {
            if (typeof u == "object" && "length" in u)
              for (let l = 0; l < u.length; l += 1)
                u[l] && t.virtual.slides.push(u[l]);
            else t.virtual.slides.push(u);
            c(!0);
          },
          prependSlide: function (u) {
            const l = t.activeIndex;
            let d = l + 1,
              m = 1;
            if (Array.isArray(u)) {
              for (let g = 0; g < u.length; g += 1)
                u[g] && t.virtual.slides.unshift(u[g]);
              (d = l + u.length), (m = u.length);
            } else t.virtual.slides.unshift(u);
            if (t.params.virtual.cache) {
              const g = t.virtual.cache,
                w = {};
              Object.keys(g).forEach((h) => {
                const f = g[h],
                  y = f.getAttribute("data-swiper-slide-index");
                y &&
                  f.setAttribute(
                    "data-swiper-slide-index",
                    parseInt(y, 10) + m
                  ),
                  (w[parseInt(h, 10) + m] = f);
              }),
                (t.virtual.cache = w);
            }
            c(!0), t.slideTo(d, 0);
          },
          removeSlide: function (u) {
            if (u == null) return;
            let l = t.activeIndex;
            if (Array.isArray(u))
              for (let d = u.length - 1; d >= 0; d -= 1)
                t.params.virtual.cache &&
                  (delete t.virtual.cache[u[d]],
                  Object.keys(t.virtual.cache).forEach((m) => {
                    m > u &&
                      ((t.virtual.cache[m - 1] = t.virtual.cache[m]),
                      t.virtual.cache[m - 1].setAttribute(
                        "data-swiper-slide-index",
                        m - 1
                      ),
                      delete t.virtual.cache[m]);
                  })),
                  t.virtual.slides.splice(u[d], 1),
                  u[d] < l && (l -= 1),
                  (l = Math.max(l, 0));
            else
              t.params.virtual.cache &&
                (delete t.virtual.cache[u],
                Object.keys(t.virtual.cache).forEach((d) => {
                  d > u &&
                    ((t.virtual.cache[d - 1] = t.virtual.cache[d]),
                    t.virtual.cache[d - 1].setAttribute(
                      "data-swiper-slide-index",
                      d - 1
                    ),
                    delete t.virtual.cache[d]);
                })),
                t.virtual.slides.splice(u, 1),
                u < l && (l -= 1),
                (l = Math.max(l, 0));
            c(!0), t.slideTo(l, 0);
          },
          removeAllSlides: function () {
            (t.virtual.slides = []),
              t.params.virtual.cache && (t.virtual.cache = {}),
              c(!0),
              t.slideTo(0, 0);
          },
          update: c,
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      const a = q(),
        p = j();
      function o(u) {
        if (!e.enabled) return;
        const { rtlTranslate: l } = e;
        let d = u;
        d.originalEvent && (d = d.originalEvent);
        const m = d.keyCode || d.charCode,
          g = e.params.keyboard.pageUpDown,
          w = g && m === 33,
          h = g && m === 34,
          f = m === 37,
          y = m === 39,
          T = m === 38,
          S = m === 40;
        if (
          (!e.allowSlideNext &&
            ((e.isHorizontal() && y) || (e.isVertical() && S) || h)) ||
          (!e.allowSlidePrev &&
            ((e.isHorizontal() && f) || (e.isVertical() && T) || w))
        )
          return !1;
        if (
          !(
            d.shiftKey ||
            d.altKey ||
            d.ctrlKey ||
            d.metaKey ||
            (a.activeElement &&
              a.activeElement.nodeName &&
              (a.activeElement.nodeName.toLowerCase() === "input" ||
                a.activeElement.nodeName.toLowerCase() === "textarea"))
          )
        ) {
          if (
            e.params.keyboard.onlyInViewport &&
            (w || h || f || y || T || S)
          ) {
            let M = !1;
            if (
              ne(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 &&
              ne(e.el, `.${e.params.slideActiveClass}`).length === 0
            )
              return;
            const I = e.el,
              k = I.clientWidth,
              L = I.clientHeight,
              z = p.innerWidth,
              b = p.innerHeight,
              v = we(I);
            l && (v.left -= I.scrollLeft);
            const x = [
              [v.left, v.top],
              [v.left + k, v.top],
              [v.left, v.top + L],
              [v.left + k, v.top + L],
            ];
            for (let E = 0; E < x.length; E += 1) {
              const P = x[E];
              if (P[0] >= 0 && P[0] <= z && P[1] >= 0 && P[1] <= b) {
                if (P[0] === 0 && P[1] === 0) continue;
                M = !0;
              }
            }
            if (!M) return;
          }
          e.isHorizontal()
            ? ((w || h || f || y) &&
                (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
              (((h || y) && !l) || ((w || f) && l)) && e.slideNext(),
              (((w || f) && !l) || ((h || y) && l)) && e.slidePrev())
            : ((w || h || T || S) &&
                (d.preventDefault ? d.preventDefault() : (d.returnValue = !1)),
              (h || S) && e.slideNext(),
              (w || T) && e.slidePrev()),
            r("keyPress", m);
        }
      }
      function n() {
        e.keyboard.enabled ||
          (a.addEventListener("keydown", o), (e.keyboard.enabled = !0));
      }
      function c() {
        e.keyboard.enabled &&
          (a.removeEventListener("keydown", o), (e.keyboard.enabled = !1));
      }
      (e.keyboard = { enabled: !1 }),
        t({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        s("init", () => {
          e.params.keyboard.enabled && n();
        }),
        s("destroy", () => {
          e.keyboard.enabled && c();
        }),
        Object.assign(e.keyboard, { enable: n, disable: c });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      const a = j();
      let p;
      t({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: "container",
          thresholdDelta: null,
          thresholdTime: null,
          noMousewheelClass: "swiper-no-mousewheel",
        },
      }),
        (e.mousewheel = { enabled: !1 });
      let o,
        n = W();
      const c = [];
      function u() {
        e.enabled && (e.mouseEntered = !0);
      }
      function l() {
        e.enabled && (e.mouseEntered = !1);
      }
      function d(f) {
        return (
          !(
            e.params.mousewheel.thresholdDelta &&
            f.delta < e.params.mousewheel.thresholdDelta
          ) &&
          !(
            e.params.mousewheel.thresholdTime &&
            W() - n < e.params.mousewheel.thresholdTime
          ) &&
          ((f.delta >= 6 && W() - n < 60) ||
            (f.direction < 0
              ? (e.isEnd && !e.params.loop) ||
                e.animating ||
                (e.slideNext(), r("scroll", f.raw))
              : (e.isBeginning && !e.params.loop) ||
                e.animating ||
                (e.slidePrev(), r("scroll", f.raw)),
            (n = new a.Date().getTime()),
            !1))
        );
      }
      function m(f) {
        let y = f,
          T = !0;
        if (
          !e.enabled ||
          f.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)
        )
          return;
        const S = e.params.mousewheel;
        e.params.cssMode && y.preventDefault();
        let M = e.el;
        e.params.mousewheel.eventsTarget !== "container" &&
          (M = document.querySelector(e.params.mousewheel.eventsTarget));
        const I = M && M.contains(y.target);
        if (!e.mouseEntered && !I && !S.releaseOnEdges) return !0;
        y.originalEvent && (y = y.originalEvent);
        let k = 0;
        const L = e.rtlTranslate ? -1 : 1,
          z = (function (v) {
            let x = 0,
              E = 0,
              P = 0,
              C = 0;
            return (
              "detail" in v && (E = v.detail),
              "wheelDelta" in v && (E = -v.wheelDelta / 120),
              "wheelDeltaY" in v && (E = -v.wheelDeltaY / 120),
              "wheelDeltaX" in v && (x = -v.wheelDeltaX / 120),
              "axis" in v && v.axis === v.HORIZONTAL_AXIS && ((x = E), (E = 0)),
              (P = 10 * x),
              (C = 10 * E),
              "deltaY" in v && (C = v.deltaY),
              "deltaX" in v && (P = v.deltaX),
              v.shiftKey && !P && ((P = C), (C = 0)),
              (P || C) &&
                v.deltaMode &&
                (v.deltaMode === 1
                  ? ((P *= 40), (C *= 40))
                  : ((P *= 800), (C *= 800))),
              P && !x && (x = P < 1 ? -1 : 1),
              C && !E && (E = C < 1 ? -1 : 1),
              { spinX: x, spinY: E, pixelX: P, pixelY: C }
            );
          })(y);
        if (S.forceToAxis)
          if (e.isHorizontal()) {
            if (!(Math.abs(z.pixelX) > Math.abs(z.pixelY))) return !0;
            k = -z.pixelX * L;
          } else {
            if (!(Math.abs(z.pixelY) > Math.abs(z.pixelX))) return !0;
            k = -z.pixelY;
          }
        else
          k =
            Math.abs(z.pixelX) > Math.abs(z.pixelY) ? -z.pixelX * L : -z.pixelY;
        if (k === 0) return !0;
        S.invert && (k = -k);
        let b = e.getTranslate() + k * S.sensitivity;
        if (
          (b >= e.minTranslate() && (b = e.minTranslate()),
          b <= e.maxTranslate() && (b = e.maxTranslate()),
          (T =
            !!e.params.loop ||
            !(b === e.minTranslate() || b === e.maxTranslate())),
          T && e.params.nested && y.stopPropagation(),
          e.params.freeMode && e.params.freeMode.enabled)
        ) {
          const v = { time: W(), delta: Math.abs(k), direction: Math.sign(k) },
            x =
              o &&
              v.time < o.time + 500 &&
              v.delta <= o.delta &&
              v.direction === o.direction;
          if (!x) {
            o = void 0;
            let E = e.getTranslate() + k * S.sensitivity;
            const P = e.isBeginning,
              C = e.isEnd;
            if (
              (E >= e.minTranslate() && (E = e.minTranslate()),
              E <= e.maxTranslate() && (E = e.maxTranslate()),
              e.setTransition(0),
              e.setTranslate(E),
              e.updateProgress(),
              e.updateActiveIndex(),
              e.updateSlidesClasses(),
              ((!P && e.isBeginning) || (!C && e.isEnd)) &&
                e.updateSlidesClasses(),
              e.params.loop &&
                e.loopFix({
                  direction: v.direction < 0 ? "next" : "prev",
                  byMousewheel: !0,
                }),
              e.params.freeMode.sticky)
            ) {
              clearTimeout(p), (p = void 0), c.length >= 15 && c.shift();
              const D = c.length ? c[c.length - 1] : void 0,
                A = c[0];
              if (
                (c.push(v),
                D && (v.delta > D.delta || v.direction !== D.direction))
              )
                c.splice(0);
              else if (
                c.length >= 15 &&
                v.time - A.time < 500 &&
                A.delta - v.delta >= 1 &&
                v.delta <= 6
              ) {
                const B = k > 0 ? 0.8 : 0.2;
                (o = v),
                  c.splice(0),
                  (p = te(() => {
                    !e.destroyed &&
                      e.params &&
                      e.slideToClosest(e.params.speed, !0, void 0, B);
                  }, 0));
              }
              p ||
                (p = te(() => {
                  e.destroyed ||
                    !e.params ||
                    ((o = v),
                    c.splice(0),
                    e.slideToClosest(e.params.speed, !0, void 0, 0.5));
                }, 500));
            }
            if (
              (x || r("scroll", y),
              e.params.autoplay &&
                e.params.autoplayDisableOnInteraction &&
                e.autoplay.stop(),
              S.releaseOnEdges &&
                (E === e.minTranslate() || E === e.maxTranslate()))
            )
              return !0;
          }
        } else {
          const v = {
            time: W(),
            delta: Math.abs(k),
            direction: Math.sign(k),
            raw: f,
          };
          c.length >= 2 && c.shift();
          const x = c.length ? c[c.length - 1] : void 0;
          if (
            (c.push(v),
            x
              ? (v.direction !== x.direction ||
                  v.delta > x.delta ||
                  v.time > x.time + 150) &&
                d(v)
              : d(v),
            (function (E) {
              const P = e.params.mousewheel;
              if (E.direction < 0) {
                if (e.isEnd && !e.params.loop && P.releaseOnEdges) return !0;
              } else if (e.isBeginning && !e.params.loop && P.releaseOnEdges)
                return !0;
              return !1;
            })(v))
          )
            return !0;
        }
        return y.preventDefault ? y.preventDefault() : (y.returnValue = !1), !1;
      }
      function g(f) {
        let y = e.el;
        e.params.mousewheel.eventsTarget !== "container" &&
          (y = document.querySelector(e.params.mousewheel.eventsTarget)),
          y[f]("mouseenter", u),
          y[f]("mouseleave", l),
          y[f]("wheel", m);
      }
      function w() {
        return e.params.cssMode
          ? (e.wrapperEl.removeEventListener("wheel", m), !0)
          : !e.mousewheel.enabled &&
              (g("addEventListener"), (e.mousewheel.enabled = !0), !0);
      }
      function h() {
        return e.params.cssMode
          ? (e.wrapperEl.addEventListener(event, m), !0)
          : !!e.mousewheel.enabled &&
              (g("removeEventListener"), (e.mousewheel.enabled = !1), !0);
      }
      s("init", () => {
        !e.params.mousewheel.enabled && e.params.cssMode && h(),
          e.params.mousewheel.enabled && w();
      }),
        s("destroy", () => {
          e.params.cssMode && w(), e.mousewheel.enabled && h();
        }),
        Object.assign(e.mousewheel, { enable: w, disable: h });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      function a(m) {
        let g;
        return m &&
          typeof m == "string" &&
          e.isElement &&
          ((g = e.el.querySelector(m) || e.hostEl.querySelector(m)), g)
          ? g
          : (m &&
              (typeof m == "string" && (g = [...document.querySelectorAll(m)]),
              e.params.uniqueNavElements &&
              typeof m == "string" &&
              g &&
              g.length > 1 &&
              e.el.querySelectorAll(m).length === 1
                ? (g = e.el.querySelector(m))
                : g && g.length === 1 && (g = g[0])),
            m && !g ? m : g);
      }
      function p(m, g) {
        const w = e.params.navigation;
        (m = N(m)).forEach((h) => {
          h &&
            (h.classList[g ? "add" : "remove"](...w.disabledClass.split(" ")),
            h.tagName === "BUTTON" && (h.disabled = g),
            e.params.watchOverflow &&
              e.enabled &&
              h.classList[e.isLocked ? "add" : "remove"](w.lockClass));
        });
      }
      function o() {
        const { nextEl: m, prevEl: g } = e.navigation;
        if (e.params.loop) return p(g, !1), void p(m, !1);
        p(g, e.isBeginning && !e.params.rewind),
          p(m, e.isEnd && !e.params.rewind);
      }
      function n(m) {
        m.preventDefault(),
          (!e.isBeginning || e.params.loop || e.params.rewind) &&
            (e.slidePrev(), r("navigationPrev"));
      }
      function c(m) {
        m.preventDefault(),
          (!e.isEnd || e.params.loop || e.params.rewind) &&
            (e.slideNext(), r("navigationNext"));
      }
      function u() {
        const m = e.params.navigation;
        if (
          ((e.params.navigation = Be(
            e,
            e.originalParams.navigation,
            e.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !m.nextEl && !m.prevEl)
        )
          return;
        let g = a(m.nextEl),
          w = a(m.prevEl);
        Object.assign(e.navigation, { nextEl: g, prevEl: w }),
          (g = N(g)),
          (w = N(w));
        const h = (f, y) => {
          f && f.addEventListener("click", y === "next" ? c : n),
            !e.enabled && f && f.classList.add(...m.lockClass.split(" "));
        };
        g.forEach((f) => h(f, "next")), w.forEach((f) => h(f, "prev"));
      }
      function l() {
        let { nextEl: m, prevEl: g } = e.navigation;
        (m = N(m)), (g = N(g));
        const w = (h, f) => {
          h.removeEventListener("click", f === "next" ? c : n),
            h.classList.remove(...e.params.navigation.disabledClass.split(" "));
        };
        m.forEach((h) => w(h, "next")), g.forEach((h) => w(h, "prev"));
      }
      t({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
          navigationDisabledClass: "swiper-navigation-disabled",
        },
      }),
        (e.navigation = { nextEl: null, prevEl: null }),
        s("init", () => {
          e.params.navigation.enabled === !1 ? d() : (u(), o());
        }),
        s("toEdge fromEdge lock unlock", () => {
          o();
        }),
        s("destroy", () => {
          l();
        }),
        s("enable disable", () => {
          let { nextEl: m, prevEl: g } = e.navigation;
          (m = N(m)),
            (g = N(g)),
            e.enabled
              ? o()
              : [...m, ...g]
                  .filter((w) => !!w)
                  .forEach((w) =>
                    w.classList.add(e.params.navigation.lockClass)
                  );
        }),
        s("click", (m, g) => {
          let { nextEl: w, prevEl: h } = e.navigation;
          (w = N(w)), (h = N(h));
          const f = g.target;
          let y = h.includes(f) || w.includes(f);
          if (e.isElement && !y) {
            const T = g.path || (g.composedPath && g.composedPath());
            T && (y = T.find((S) => w.includes(S) || h.includes(S)));
          }
          if (e.params.navigation.hideOnClick && !y) {
            if (
              e.pagination &&
              e.params.pagination &&
              e.params.pagination.clickable &&
              (e.pagination.el === f || e.pagination.el.contains(f))
            )
              return;
            let T;
            w.length
              ? (T = w[0].classList.contains(e.params.navigation.hiddenClass))
              : h.length &&
                (T = h[0].classList.contains(e.params.navigation.hiddenClass)),
              r(T === !0 ? "navigationShow" : "navigationHide"),
              [...w, ...h]
                .filter((S) => !!S)
                .forEach((S) =>
                  S.classList.toggle(e.params.navigation.hiddenClass)
                );
          }
        });
      const d = () => {
        e.el.classList.add(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          l();
      };
      Object.assign(e.navigation, {
        enable: () => {
          e.el.classList.remove(
            ...e.params.navigation.navigationDisabledClass.split(" ")
          ),
            u(),
            o();
        },
        disable: d,
        update: o,
        init: u,
        destroy: l,
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      const a = "swiper-pagination";
      let p;
      t({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (h) => h,
          formatFractionTotal: (h) => h,
          bulletClass: `${a}-bullet`,
          bulletActiveClass: `${a}-bullet-active`,
          modifierClass: `${a}-`,
          currentClass: `${a}-current`,
          totalClass: `${a}-total`,
          hiddenClass: `${a}-hidden`,
          progressbarFillClass: `${a}-progressbar-fill`,
          progressbarOppositeClass: `${a}-progressbar-opposite`,
          clickableClass: `${a}-clickable`,
          lockClass: `${a}-lock`,
          horizontalClass: `${a}-horizontal`,
          verticalClass: `${a}-vertical`,
          paginationDisabledClass: `${a}-disabled`,
        },
      }),
        (e.pagination = { el: null, bullets: [] });
      let o = 0;
      function n() {
        return (
          !e.params.pagination.el ||
          !e.pagination.el ||
          (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
        );
      }
      function c(h, f) {
        const { bulletActiveClass: y } = e.params.pagination;
        h &&
          (h = h[(f === "prev" ? "previous" : "next") + "ElementSibling"]) &&
          (h.classList.add(`${y}-${f}`),
          (h = h[(f === "prev" ? "previous" : "next") + "ElementSibling"]) &&
            h.classList.add(`${y}-${f}-${f}`));
      }
      function u(h) {
        const f = h.target.closest(se(e.params.pagination.bulletClass));
        if (!f) return;
        h.preventDefault();
        const y = ue(f) * e.params.slidesPerGroup;
        if (e.params.loop) {
          if (e.realIndex === y) return;
          const I =
            ((T = e.realIndex),
            (S = y),
            (M = e.slides.length),
            (S %= M) == 1 + (T %= M)
              ? "next"
              : S === T - 1
              ? "previous"
              : void 0);
          I === "next"
            ? e.slideNext()
            : I === "previous"
            ? e.slidePrev()
            : e.slideToLoop(y);
        } else e.slideTo(y);
        var T, S, M;
      }
      function l() {
        const h = e.rtl,
          f = e.params.pagination;
        if (n()) return;
        let y,
          T,
          S = e.pagination.el;
        S = N(S);
        const M =
            e.virtual && e.params.virtual.enabled
              ? e.virtual.slides.length
              : e.slides.length,
          I = e.params.loop
            ? Math.ceil(M / e.params.slidesPerGroup)
            : e.snapGrid.length;
        if (
          (e.params.loop
            ? ((T = e.previousRealIndex || 0),
              (y =
                e.params.slidesPerGroup > 1
                  ? Math.floor(e.realIndex / e.params.slidesPerGroup)
                  : e.realIndex))
            : e.snapIndex !== void 0
            ? ((y = e.snapIndex), (T = e.previousSnapIndex))
            : ((T = e.previousIndex || 0), (y = e.activeIndex || 0)),
          f.type === "bullets" &&
            e.pagination.bullets &&
            e.pagination.bullets.length > 0)
        ) {
          const k = e.pagination.bullets;
          let L, z, b;
          if (
            (f.dynamicBullets &&
              ((p = Le(k[0], e.isHorizontal() ? "width" : "height", !0)),
              S.forEach((v) => {
                v.style[e.isHorizontal() ? "width" : "height"] =
                  p * (f.dynamicMainBullets + 4) + "px";
              }),
              f.dynamicMainBullets > 1 &&
                T !== void 0 &&
                ((o += y - (T || 0)),
                o > f.dynamicMainBullets - 1
                  ? (o = f.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (L = Math.max(y - o, 0)),
              (z = L + (Math.min(k.length, f.dynamicMainBullets) - 1)),
              (b = (z + L) / 2)),
            k.forEach((v) => {
              const x = [
                ...[
                  "",
                  "-next",
                  "-next-next",
                  "-prev",
                  "-prev-prev",
                  "-main",
                ].map((E) => `${f.bulletActiveClass}${E}`),
              ]
                .map((E) =>
                  typeof E == "string" && E.includes(" ") ? E.split(" ") : E
                )
                .flat();
              v.classList.remove(...x);
            }),
            S.length > 1)
          )
            k.forEach((v) => {
              const x = ue(v);
              x === y
                ? v.classList.add(...f.bulletActiveClass.split(" "))
                : e.isElement && v.setAttribute("part", "bullet"),
                f.dynamicBullets &&
                  (x >= L &&
                    x <= z &&
                    v.classList.add(
                      ...`${f.bulletActiveClass}-main`.split(" ")
                    ),
                  x === L && c(v, "prev"),
                  x === z && c(v, "next"));
            });
          else {
            const v = k[y];
            if (
              (v && v.classList.add(...f.bulletActiveClass.split(" ")),
              e.isElement &&
                k.forEach((x, E) => {
                  x.setAttribute("part", E === y ? "bullet-active" : "bullet");
                }),
              f.dynamicBullets)
            ) {
              const x = k[L],
                E = k[z];
              for (let P = L; P <= z; P += 1)
                k[P] &&
                  k[P].classList.add(
                    ...`${f.bulletActiveClass}-main`.split(" ")
                  );
              c(x, "prev"), c(E, "next");
            }
          }
          if (f.dynamicBullets) {
            const v = Math.min(k.length, f.dynamicMainBullets + 4),
              x = (p * v - p) / 2 - b * p,
              E = h ? "right" : "left";
            k.forEach((P) => {
              P.style[e.isHorizontal() ? E : "top"] = `${x}px`;
            });
          }
        }
        S.forEach((k, L) => {
          if (
            (f.type === "fraction" &&
              (k.querySelectorAll(se(f.currentClass)).forEach((z) => {
                z.textContent = f.formatFractionCurrent(y + 1);
              }),
              k.querySelectorAll(se(f.totalClass)).forEach((z) => {
                z.textContent = f.formatFractionTotal(I);
              })),
            f.type === "progressbar")
          ) {
            let z;
            z = f.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const b = (y + 1) / I;
            let v = 1,
              x = 1;
            z === "horizontal" ? (v = b) : (x = b),
              k.querySelectorAll(se(f.progressbarFillClass)).forEach((E) => {
                (E.style.transform = `translate3d(0,0,0) scaleX(${v}) scaleY(${x})`),
                  (E.style.transitionDuration = `${e.params.speed}ms`);
              });
          }
          f.type === "custom" && f.renderCustom
            ? ((k.innerHTML = f.renderCustom(e, y + 1, I)),
              L === 0 && r("paginationRender", k))
            : (L === 0 && r("paginationRender", k), r("paginationUpdate", k)),
            e.params.watchOverflow &&
              e.enabled &&
              k.classList[e.isLocked ? "add" : "remove"](f.lockClass);
        });
      }
      function d() {
        const h = e.params.pagination;
        if (n()) return;
        const f =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.grid && e.params.grid.rows > 1
            ? e.slides.length / Math.ceil(e.params.grid.rows)
            : e.slides.length;
        let y = e.pagination.el;
        y = N(y);
        let T = "";
        if (h.type === "bullets") {
          let S = e.params.loop
            ? Math.ceil(f / e.params.slidesPerGroup)
            : e.snapGrid.length;
          e.params.freeMode && e.params.freeMode.enabled && S > f && (S = f);
          for (let M = 0; M < S; M += 1)
            h.renderBullet
              ? (T += h.renderBullet.call(e, M, h.bulletClass))
              : (T += `<${h.bulletElement} ${
                  e.isElement ? 'part="bullet"' : ""
                } class="${h.bulletClass}"></${h.bulletElement}>`);
        }
        h.type === "fraction" &&
          (T = h.renderFraction
            ? h.renderFraction.call(e, h.currentClass, h.totalClass)
            : `<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),
          h.type === "progressbar" &&
            (T = h.renderProgressbar
              ? h.renderProgressbar.call(e, h.progressbarFillClass)
              : `<span class="${h.progressbarFillClass}"></span>`),
          (e.pagination.bullets = []),
          y.forEach((S) => {
            h.type !== "custom" && (S.innerHTML = T || ""),
              h.type === "bullets" &&
                e.pagination.bullets.push(
                  ...S.querySelectorAll(se(h.bulletClass))
                );
          }),
          h.type !== "custom" && r("paginationRender", y[0]);
      }
      function m() {
        e.params.pagination = Be(
          e,
          e.originalParams.pagination,
          e.params.pagination,
          { el: "swiper-pagination" }
        );
        const h = e.params.pagination;
        if (!h.el) return;
        let f;
        typeof h.el == "string" &&
          e.isElement &&
          (f = e.el.querySelector(h.el)),
          f ||
            typeof h.el != "string" ||
            (f = [...document.querySelectorAll(h.el)]),
          f || (f = h.el),
          f &&
            f.length !== 0 &&
            (e.params.uniqueNavElements &&
              typeof h.el == "string" &&
              Array.isArray(f) &&
              f.length > 1 &&
              ((f = [...e.el.querySelectorAll(h.el)]),
              f.length > 1 &&
                (f = f.filter((y) => ne(y, ".swiper")[0] === e.el)[0])),
            Array.isArray(f) && f.length === 1 && (f = f[0]),
            Object.assign(e.pagination, { el: f }),
            (f = N(f)),
            f.forEach((y) => {
              h.type === "bullets" &&
                h.clickable &&
                y.classList.add(...(h.clickableClass || "").split(" ")),
                y.classList.add(h.modifierClass + h.type),
                y.classList.add(
                  e.isHorizontal() ? h.horizontalClass : h.verticalClass
                ),
                h.type === "bullets" &&
                  h.dynamicBullets &&
                  (y.classList.add(`${h.modifierClass}${h.type}-dynamic`),
                  (o = 0),
                  h.dynamicMainBullets < 1 && (h.dynamicMainBullets = 1)),
                h.type === "progressbar" &&
                  h.progressbarOpposite &&
                  y.classList.add(h.progressbarOppositeClass),
                h.clickable && y.addEventListener("click", u),
                e.enabled || y.classList.add(h.lockClass);
            }));
      }
      function g() {
        const h = e.params.pagination;
        if (n()) return;
        let f = e.pagination.el;
        f &&
          ((f = N(f)),
          f.forEach((y) => {
            y.classList.remove(h.hiddenClass),
              y.classList.remove(h.modifierClass + h.type),
              y.classList.remove(
                e.isHorizontal() ? h.horizontalClass : h.verticalClass
              ),
              h.clickable &&
                (y.classList.remove(...(h.clickableClass || "").split(" ")),
                y.removeEventListener("click", u));
          })),
          e.pagination.bullets &&
            e.pagination.bullets.forEach((y) =>
              y.classList.remove(...h.bulletActiveClass.split(" "))
            );
      }
      s("changeDirection", () => {
        if (!e.pagination || !e.pagination.el) return;
        const h = e.params.pagination;
        let { el: f } = e.pagination;
        (f = N(f)),
          f.forEach((y) => {
            y.classList.remove(h.horizontalClass, h.verticalClass),
              y.classList.add(
                e.isHorizontal() ? h.horizontalClass : h.verticalClass
              );
          });
      }),
        s("init", () => {
          e.params.pagination.enabled === !1 ? w() : (m(), d(), l());
        }),
        s("activeIndexChange", () => {
          e.snapIndex === void 0 && l();
        }),
        s("snapIndexChange", () => {
          l();
        }),
        s("snapGridLengthChange", () => {
          d(), l();
        }),
        s("destroy", () => {
          g();
        }),
        s("enable disable", () => {
          let { el: h } = e.pagination;
          h &&
            ((h = N(h)),
            h.forEach((f) =>
              f.classList[e.enabled ? "remove" : "add"](
                e.params.pagination.lockClass
              )
            ));
        }),
        s("lock unlock", () => {
          l();
        }),
        s("click", (h, f) => {
          const y = f.target,
            T = N(e.pagination.el);
          if (
            e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            T &&
            T.length > 0 &&
            !y.classList.contains(e.params.pagination.bulletClass)
          ) {
            if (
              e.navigation &&
              ((e.navigation.nextEl && y === e.navigation.nextEl) ||
                (e.navigation.prevEl && y === e.navigation.prevEl))
            )
              return;
            const S = T[0].classList.contains(e.params.pagination.hiddenClass);
            r(S === !0 ? "paginationShow" : "paginationHide"),
              T.forEach((M) =>
                M.classList.toggle(e.params.pagination.hiddenClass)
              );
          }
        });
      const w = () => {
        e.el.classList.add(e.params.pagination.paginationDisabledClass);
        let { el: h } = e.pagination;
        h &&
          ((h = N(h)),
          h.forEach((f) =>
            f.classList.add(e.params.pagination.paginationDisabledClass)
          )),
          g();
      };
      Object.assign(e.pagination, {
        enable: () => {
          e.el.classList.remove(e.params.pagination.paginationDisabledClass);
          let { el: h } = e.pagination;
          h &&
            ((h = N(h)),
            h.forEach((f) =>
              f.classList.remove(e.params.pagination.paginationDisabledClass)
            )),
            m(),
            d(),
            l();
        },
        disable: w,
        render: d,
        update: l,
        init: m,
        destroy: g,
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      const a = q();
      let p,
        o,
        n,
        c,
        u = !1,
        l = null,
        d = null;
      function m() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: L, rtlTranslate: z } = e,
          { dragEl: b, el: v } = L,
          x = e.params.scrollbar,
          E = e.params.loop ? e.progressLoop : e.progress;
        let P = o,
          C = (n - o) * E;
        z
          ? ((C = -C),
            C > 0 ? ((P = o - C), (C = 0)) : -C + o > n && (P = n + C))
          : C < 0
          ? ((P = o + C), (C = 0))
          : C + o > n && (P = n - C),
          e.isHorizontal()
            ? ((b.style.transform = `translate3d(${C}px, 0, 0)`),
              (b.style.width = `${P}px`))
            : ((b.style.transform = `translate3d(0px, ${C}px, 0)`),
              (b.style.height = `${P}px`)),
          x.hide &&
            (clearTimeout(l),
            (v.style.opacity = 1),
            (l = setTimeout(() => {
              (v.style.opacity = 0), (v.style.transitionDuration = "400ms");
            }, 1e3)));
      }
      function g() {
        if (!e.params.scrollbar.el || !e.scrollbar.el) return;
        const { scrollbar: L } = e,
          { dragEl: z, el: b } = L;
        (z.style.width = ""),
          (z.style.height = ""),
          (n = e.isHorizontal() ? b.offsetWidth : b.offsetHeight),
          (c =
            e.size /
            (e.virtualSize +
              e.params.slidesOffsetBefore -
              (e.params.centeredSlides ? e.snapGrid[0] : 0))),
          (o =
            e.params.scrollbar.dragSize === "auto"
              ? n * c
              : parseInt(e.params.scrollbar.dragSize, 10)),
          e.isHorizontal()
            ? (z.style.width = `${o}px`)
            : (z.style.height = `${o}px`),
          (b.style.display = c >= 1 ? "none" : ""),
          e.params.scrollbar.hide && (b.style.opacity = 0),
          e.params.watchOverflow &&
            e.enabled &&
            L.el.classList[e.isLocked ? "add" : "remove"](
              e.params.scrollbar.lockClass
            );
      }
      function w(L) {
        return e.isHorizontal() ? L.clientX : L.clientY;
      }
      function h(L) {
        const { scrollbar: z, rtlTranslate: b } = e,
          { el: v } = z;
        let x;
        (x =
          (w(L) -
            we(v)[e.isHorizontal() ? "left" : "top"] -
            (p !== null ? p : o / 2)) /
          (n - o)),
          (x = Math.max(Math.min(x, 1), 0)),
          b && (x = 1 - x);
        const E = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * x;
        e.updateProgress(E),
          e.setTranslate(E),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
      }
      function f(L) {
        const z = e.params.scrollbar,
          { scrollbar: b, wrapperEl: v } = e,
          { el: x, dragEl: E } = b;
        (u = !0),
          (p =
            L.target === E
              ? w(L) -
                L.target.getBoundingClientRect()[
                  e.isHorizontal() ? "left" : "top"
                ]
              : null),
          L.preventDefault(),
          L.stopPropagation(),
          (v.style.transitionDuration = "100ms"),
          (E.style.transitionDuration = "100ms"),
          h(L),
          clearTimeout(d),
          (x.style.transitionDuration = "0ms"),
          z.hide && (x.style.opacity = 1),
          e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"),
          r("scrollbarDragStart", L);
      }
      function y(L) {
        const { scrollbar: z, wrapperEl: b } = e,
          { el: v, dragEl: x } = z;
        u &&
          (L.preventDefault && L.cancelable
            ? L.preventDefault()
            : (L.returnValue = !1),
          h(L),
          (b.style.transitionDuration = "0ms"),
          (v.style.transitionDuration = "0ms"),
          (x.style.transitionDuration = "0ms"),
          r("scrollbarDragMove", L));
      }
      function T(L) {
        const z = e.params.scrollbar,
          { scrollbar: b, wrapperEl: v } = e,
          { el: x } = b;
        u &&
          ((u = !1),
          e.params.cssMode &&
            ((e.wrapperEl.style["scroll-snap-type"] = ""),
            (v.style.transitionDuration = "")),
          z.hide &&
            (clearTimeout(d),
            (d = te(() => {
              (x.style.opacity = 0), (x.style.transitionDuration = "400ms");
            }, 1e3))),
          r("scrollbarDragEnd", L),
          z.snapOnRelease && e.slideToClosest());
      }
      function S(L) {
        const { scrollbar: z, params: b } = e,
          v = z.el;
        if (!v) return;
        const x = v,
          E = !!b.passiveListeners && { passive: !1, capture: !1 },
          P = !!b.passiveListeners && { passive: !0, capture: !1 };
        if (!x) return;
        const C = L === "on" ? "addEventListener" : "removeEventListener";
        x[C]("pointerdown", f, E),
          a[C]("pointermove", y, E),
          a[C]("pointerup", T, P);
      }
      function M() {
        const { scrollbar: L, el: z } = e;
        e.params.scrollbar = Be(
          e,
          e.originalParams.scrollbar,
          e.params.scrollbar,
          { el: "swiper-scrollbar" }
        );
        const b = e.params.scrollbar;
        if (!b.el) return;
        let v, x;
        if (
          (typeof b.el == "string" &&
            e.isElement &&
            (v = e.el.querySelector(b.el)),
          v || typeof b.el != "string")
        )
          v || (v = b.el);
        else if (((v = a.querySelectorAll(b.el)), !v.length)) return;
        e.params.uniqueNavElements &&
          typeof b.el == "string" &&
          v.length > 1 &&
          z.querySelectorAll(b.el).length === 1 &&
          (v = z.querySelector(b.el)),
          v.length > 0 && (v = v[0]),
          v.classList.add(
            e.isHorizontal() ? b.horizontalClass : b.verticalClass
          ),
          v &&
            ((x = v.querySelector(se(e.params.scrollbar.dragClass))),
            x || ((x = K("div", e.params.scrollbar.dragClass)), v.append(x))),
          Object.assign(L, { el: v, dragEl: x }),
          b.draggable && e.params.scrollbar.el && e.scrollbar.el && S("on"),
          v &&
            v.classList[e.enabled ? "remove" : "add"](
              ...V(e.params.scrollbar.lockClass)
            );
      }
      function I() {
        const L = e.params.scrollbar,
          z = e.scrollbar.el;
        z &&
          z.classList.remove(
            ...V(e.isHorizontal() ? L.horizontalClass : L.verticalClass)
          ),
          e.params.scrollbar.el && e.scrollbar.el && S("off");
      }
      t({
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: "swiper-scrollbar-lock",
          dragClass: "swiper-scrollbar-drag",
          scrollbarDisabledClass: "swiper-scrollbar-disabled",
          horizontalClass: "swiper-scrollbar-horizontal",
          verticalClass: "swiper-scrollbar-vertical",
        },
      }),
        (e.scrollbar = { el: null, dragEl: null }),
        s("changeDirection", () => {
          if (!e.scrollbar || !e.scrollbar.el) return;
          const L = e.params.scrollbar;
          let { el: z } = e.scrollbar;
          (z = N(z)),
            z.forEach((b) => {
              b.classList.remove(L.horizontalClass, L.verticalClass),
                b.classList.add(
                  e.isHorizontal() ? L.horizontalClass : L.verticalClass
                );
            });
        }),
        s("init", () => {
          e.params.scrollbar.enabled === !1 ? k() : (M(), g(), m());
        }),
        s("update resize observerUpdate lock unlock changeDirection", () => {
          g();
        }),
        s("setTranslate", () => {
          m();
        }),
        s("setTransition", (L, z) => {
          (function (b) {
            e.params.scrollbar.el &&
              e.scrollbar.el &&
              (e.scrollbar.dragEl.style.transitionDuration = `${b}ms`);
          })(z);
        }),
        s("enable disable", () => {
          const { el: L } = e.scrollbar;
          L &&
            L.classList[e.enabled ? "remove" : "add"](
              ...V(e.params.scrollbar.lockClass)
            );
        }),
        s("destroy", () => {
          I();
        });
      const k = () => {
        e.el.classList.add(...V(e.params.scrollbar.scrollbarDisabledClass)),
          e.scrollbar.el &&
            e.scrollbar.el.classList.add(
              ...V(e.params.scrollbar.scrollbarDisabledClass)
            ),
          I();
      };
      Object.assign(e.scrollbar, {
        enable: () => {
          e.el.classList.remove(
            ...V(e.params.scrollbar.scrollbarDisabledClass)
          ),
            e.scrollbar.el &&
              e.scrollbar.el.classList.remove(
                ...V(e.params.scrollbar.scrollbarDisabledClass)
              ),
            M(),
            g(),
            m();
        },
        disable: k,
        updateSize: g,
        setTranslate: m,
        init: M,
        destroy: I,
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({ parallax: { enabled: !1 } });
      const r =
          "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]",
        a = (o, n) => {
          const { rtl: c } = e,
            u = c ? -1 : 1,
            l = o.getAttribute("data-swiper-parallax") || "0";
          let d = o.getAttribute("data-swiper-parallax-x"),
            m = o.getAttribute("data-swiper-parallax-y");
          const g = o.getAttribute("data-swiper-parallax-scale"),
            w = o.getAttribute("data-swiper-parallax-opacity"),
            h = o.getAttribute("data-swiper-parallax-rotate");
          if (
            (d || m
              ? ((d = d || "0"), (m = m || "0"))
              : e.isHorizontal()
              ? ((d = l), (m = "0"))
              : ((m = l), (d = "0")),
            (d =
              d.indexOf("%") >= 0
                ? parseInt(d, 10) * n * u + "%"
                : d * n * u + "px"),
            (m =
              m.indexOf("%") >= 0 ? parseInt(m, 10) * n + "%" : m * n + "px"),
            w != null)
          ) {
            const y = w - (w - 1) * (1 - Math.abs(n));
            o.style.opacity = y;
          }
          let f = `translate3d(${d}, ${m}, 0px)`;
          g != null && (f += ` scale(${g - (g - 1) * (1 - Math.abs(n))})`),
            h && h != null && (f += ` rotate(${h * n * -1}deg)`),
            (o.style.transform = f);
        },
        p = () => {
          const {
              el: o,
              slides: n,
              progress: c,
              snapGrid: u,
              isElement: l,
            } = e,
            d = F(o, r);
          e.isElement && d.push(...F(e.hostEl, r)),
            d.forEach((m) => {
              a(m, c);
            }),
            n.forEach((m, g) => {
              let w = m.progress;
              e.params.slidesPerGroup > 1 &&
                e.params.slidesPerView !== "auto" &&
                (w += Math.ceil(g / 2) - c * (u.length - 1)),
                (w = Math.min(Math.max(w, -1), 1)),
                m
                  .querySelectorAll(`${r}, [data-swiper-parallax-rotate]`)
                  .forEach((h) => {
                    a(h, w);
                  });
            });
        };
      s("beforeInit", () => {
        e.params.parallax.enabled &&
          ((e.params.watchSlidesProgress = !0),
          (e.originalParams.watchSlidesProgress = !0));
      }),
        s("init", () => {
          e.params.parallax.enabled && p();
        }),
        s("setTranslate", () => {
          e.params.parallax.enabled && p();
        }),
        s("setTransition", (o, n) => {
          e.params.parallax.enabled &&
            (function (c) {
              c === void 0 && (c = e.params.speed);
              const { el: u, hostEl: l } = e,
                d = [...u.querySelectorAll(r)];
              e.isElement && d.push(...l.querySelectorAll(r)),
                d.forEach((m) => {
                  let g =
                    parseInt(
                      m.getAttribute("data-swiper-parallax-duration"),
                      10
                    ) || c;
                  c === 0 && (g = 0), (m.style.transitionDuration = `${g}ms`);
                });
            })(n);
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s, emit: r } = i;
      const a = j();
      t({
        zoom: {
          enabled: !1,
          limitToOriginalSize: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      }),
        (e.zoom = { enabled: !1 });
      let p,
        o,
        n = 1,
        c = !1;
      const u = [],
        l = {
          originX: 0,
          originY: 0,
          slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          imageEl: void 0,
          imageWrapEl: void 0,
          maxRatio: 3,
        },
        d = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        m = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let g,
        w = 1;
      function h() {
        if (u.length < 2) return 1;
        const C = u[0].pageX,
          D = u[0].pageY,
          A = u[1].pageX,
          B = u[1].pageY;
        return Math.sqrt((A - C) ** 2 + (B - D) ** 2);
      }
      function f() {
        const C = e.params.zoom,
          D = l.imageWrapEl.getAttribute("data-swiper-zoom") || C.maxRatio;
        if (C.limitToOriginalSize && l.imageEl && l.imageEl.naturalWidth) {
          const A = l.imageEl.naturalWidth / l.imageEl.offsetWidth;
          return Math.min(A, D);
        }
        return D;
      }
      function y(C) {
        const D = e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
        return (
          !!C.target.matches(D) ||
          e.slides.filter((A) => A.contains(C.target)).length > 0
        );
      }
      function T(C) {
        if ((C.pointerType === "mouse" && u.splice(0, u.length), !y(C))) return;
        const D = e.params.zoom;
        if (((p = !1), (o = !1), u.push(C), !(u.length < 2))) {
          if (((p = !0), (l.scaleStart = h()), !l.slideEl)) {
            (l.slideEl = C.target.closest(
              `.${e.params.slideClass}, swiper-slide`
            )),
              l.slideEl || (l.slideEl = e.slides[e.activeIndex]);
            let A = l.slideEl.querySelector(`.${D.containerClass}`);
            if (
              (A &&
                (A = A.querySelectorAll(
                  "picture, img, svg, canvas, .swiper-zoom-target"
                )[0]),
              (l.imageEl = A),
              (l.imageWrapEl = A
                ? ne(l.imageEl, `.${D.containerClass}`)[0]
                : void 0),
              !l.imageWrapEl)
            )
              return void (l.imageEl = void 0);
            l.maxRatio = f();
          }
          if (l.imageEl) {
            const [A, B] = (function () {
              if (u.length < 2) return { x: null, y: null };
              const H = l.imageEl.getBoundingClientRect();
              return [
                (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - H.x - a.scrollX) /
                  n,
                (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - H.y - a.scrollY) /
                  n,
              ];
            })();
            (l.originX = A),
              (l.originY = B),
              (l.imageEl.style.transitionDuration = "0ms");
          }
          c = !0;
        }
      }
      function S(C) {
        if (!y(C)) return;
        const D = e.params.zoom,
          A = e.zoom,
          B = u.findIndex((H) => H.pointerId === C.pointerId);
        B >= 0 && (u[B] = C),
          u.length < 2 ||
            ((o = !0),
            (l.scaleMove = h()),
            l.imageEl &&
              ((A.scale = (l.scaleMove / l.scaleStart) * n),
              A.scale > l.maxRatio &&
                (A.scale = l.maxRatio - 1 + (A.scale - l.maxRatio + 1) ** 0.5),
              A.scale < D.minRatio &&
                (A.scale = D.minRatio + 1 - (D.minRatio - A.scale + 1) ** 0.5),
              (l.imageEl.style.transform = `translate3d(0,0,0) scale(${A.scale})`)));
      }
      function M(C) {
        if (!y(C) || (C.pointerType === "mouse" && C.type === "pointerout"))
          return;
        const D = e.params.zoom,
          A = e.zoom,
          B = u.findIndex((H) => H.pointerId === C.pointerId);
        B >= 0 && u.splice(B, 1),
          p &&
            o &&
            ((p = !1),
            (o = !1),
            l.imageEl &&
              ((A.scale = Math.max(Math.min(A.scale, l.maxRatio), D.minRatio)),
              (l.imageEl.style.transitionDuration = `${e.params.speed}ms`),
              (l.imageEl.style.transform = `translate3d(0,0,0) scale(${A.scale})`),
              (n = A.scale),
              (c = !1),
              A.scale > 1 && l.slideEl
                ? l.slideEl.classList.add(`${D.zoomedSlideClass}`)
                : A.scale <= 1 &&
                  l.slideEl &&
                  l.slideEl.classList.remove(`${D.zoomedSlideClass}`),
              A.scale === 1 &&
                ((l.originX = 0), (l.originY = 0), (l.slideEl = void 0))));
      }
      function I() {
        e.touchEventsData.preventTouchMoveFromPointerMove = !1;
      }
      function k(C) {
        if (
          !y(C) ||
          !(function (R) {
            const J = `.${e.params.zoom.containerClass}`;
            return (
              !!R.target.matches(J) ||
              [...e.hostEl.querySelectorAll(J)].filter((ee) =>
                ee.contains(R.target)
              ).length > 0
            );
          })(C)
        )
          return;
        const D = e.zoom;
        if (!l.imageEl || !d.isTouched || !l.slideEl) return;
        d.isMoved ||
          ((d.width = l.imageEl.offsetWidth || l.imageEl.clientWidth),
          (d.height = l.imageEl.offsetHeight || l.imageEl.clientHeight),
          (d.startX = Pe(l.imageWrapEl, "x") || 0),
          (d.startY = Pe(l.imageWrapEl, "y") || 0),
          (l.slideWidth = l.slideEl.offsetWidth),
          (l.slideHeight = l.slideEl.offsetHeight),
          (l.imageWrapEl.style.transitionDuration = "0ms"));
        const A = d.width * D.scale,
          B = d.height * D.scale;
        if (
          ((d.minX = Math.min(l.slideWidth / 2 - A / 2, 0)),
          (d.maxX = -d.minX),
          (d.minY = Math.min(l.slideHeight / 2 - B / 2, 0)),
          (d.maxY = -d.minY),
          (d.touchesCurrent.x = u.length > 0 ? u[0].pageX : C.pageX),
          (d.touchesCurrent.y = u.length > 0 ? u[0].pageY : C.pageY),
          Math.max(
            Math.abs(d.touchesCurrent.x - d.touchesStart.x),
            Math.abs(d.touchesCurrent.y - d.touchesStart.y)
          ) > 5 && (e.allowClick = !1),
          !d.isMoved &&
            !c &&
            ((e.isHorizontal() &&
              ((Math.floor(d.minX) === Math.floor(d.startX) &&
                d.touchesCurrent.x < d.touchesStart.x) ||
                (Math.floor(d.maxX) === Math.floor(d.startX) &&
                  d.touchesCurrent.x > d.touchesStart.x))) ||
              (!e.isHorizontal() &&
                ((Math.floor(d.minY) === Math.floor(d.startY) &&
                  d.touchesCurrent.y < d.touchesStart.y) ||
                  (Math.floor(d.maxY) === Math.floor(d.startY) &&
                    d.touchesCurrent.y > d.touchesStart.y)))))
        )
          return (d.isTouched = !1), void I();
        C.cancelable && C.preventDefault(),
          C.stopPropagation(),
          clearTimeout(g),
          (e.touchEventsData.preventTouchMoveFromPointerMove = !0),
          (g = setTimeout(() => {
            e.destroyed || I();
          })),
          (d.isMoved = !0);
        const H = (D.scale - n) / (l.maxRatio - e.params.zoom.minRatio),
          { originX: Q, originY: G } = l;
        (d.currentX =
          d.touchesCurrent.x -
          d.touchesStart.x +
          d.startX +
          H * (d.width - 2 * Q)),
          (d.currentY =
            d.touchesCurrent.y -
            d.touchesStart.y +
            d.startY +
            H * (d.height - 2 * G)),
          d.currentX < d.minX &&
            (d.currentX = d.minX + 1 - (d.minX - d.currentX + 1) ** 0.8),
          d.currentX > d.maxX &&
            (d.currentX = d.maxX - 1 + (d.currentX - d.maxX + 1) ** 0.8),
          d.currentY < d.minY &&
            (d.currentY = d.minY + 1 - (d.minY - d.currentY + 1) ** 0.8),
          d.currentY > d.maxY &&
            (d.currentY = d.maxY - 1 + (d.currentY - d.maxY + 1) ** 0.8),
          m.prevPositionX || (m.prevPositionX = d.touchesCurrent.x),
          m.prevPositionY || (m.prevPositionY = d.touchesCurrent.y),
          m.prevTime || (m.prevTime = Date.now()),
          (m.x =
            (d.touchesCurrent.x - m.prevPositionX) /
            (Date.now() - m.prevTime) /
            2),
          (m.y =
            (d.touchesCurrent.y - m.prevPositionY) /
            (Date.now() - m.prevTime) /
            2),
          Math.abs(d.touchesCurrent.x - m.prevPositionX) < 2 && (m.x = 0),
          Math.abs(d.touchesCurrent.y - m.prevPositionY) < 2 && (m.y = 0),
          (m.prevPositionX = d.touchesCurrent.x),
          (m.prevPositionY = d.touchesCurrent.y),
          (m.prevTime = Date.now()),
          (l.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
      }
      function L() {
        const C = e.zoom;
        l.slideEl &&
          e.activeIndex !== e.slides.indexOf(l.slideEl) &&
          (l.imageEl &&
            (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          l.imageWrapEl &&
            (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          l.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`),
          (C.scale = 1),
          (n = 1),
          (l.slideEl = void 0),
          (l.imageEl = void 0),
          (l.imageWrapEl = void 0),
          (l.originX = 0),
          (l.originY = 0));
      }
      function z(C) {
        const D = e.zoom,
          A = e.params.zoom;
        if (!l.slideEl) {
          C &&
            C.target &&
            (l.slideEl = C.target.closest(
              `.${e.params.slideClass}, swiper-slide`
            )),
            l.slideEl ||
              (e.params.virtual && e.params.virtual.enabled && e.virtual
                ? (l.slideEl = F(
                    e.slidesEl,
                    `.${e.params.slideActiveClass}`
                  )[0])
                : (l.slideEl = e.slides[e.activeIndex]));
          let ge = l.slideEl.querySelector(`.${A.containerClass}`);
          ge &&
            (ge = ge.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (l.imageEl = ge),
            (l.imageWrapEl = ge
              ? ne(l.imageEl, `.${A.containerClass}`)[0]
              : void 0);
        }
        if (!l.imageEl || !l.imageWrapEl) return;
        let B, H, Q, G, R, J, ee, ie, Te, nt, lt, ot, Me, Ce, je, Ne, qe, Re;
        e.params.cssMode &&
          ((e.wrapperEl.style.overflow = "hidden"),
          (e.wrapperEl.style.touchAction = "none")),
          l.slideEl.classList.add(`${A.zoomedSlideClass}`),
          d.touchesStart.x === void 0 && C
            ? ((B = C.pageX), (H = C.pageY))
            : ((B = d.touchesStart.x), (H = d.touchesStart.y));
        const fe = typeof C == "number" ? C : null;
        n === 1 &&
          fe &&
          ((B = void 0),
          (H = void 0),
          (d.touchesStart.x = void 0),
          (d.touchesStart.y = void 0));
        const dt = f();
        (D.scale = fe || dt),
          (n = fe || dt),
          !C || (n === 1 && fe)
            ? ((ee = 0), (ie = 0))
            : ((qe = l.slideEl.offsetWidth),
              (Re = l.slideEl.offsetHeight),
              (Q = we(l.slideEl).left + a.scrollX),
              (G = we(l.slideEl).top + a.scrollY),
              (R = Q + qe / 2 - B),
              (J = G + Re / 2 - H),
              (Te = l.imageEl.offsetWidth || l.imageEl.clientWidth),
              (nt = l.imageEl.offsetHeight || l.imageEl.clientHeight),
              (lt = Te * D.scale),
              (ot = nt * D.scale),
              (Me = Math.min(qe / 2 - lt / 2, 0)),
              (Ce = Math.min(Re / 2 - ot / 2, 0)),
              (je = -Me),
              (Ne = -Ce),
              (ee = R * D.scale),
              (ie = J * D.scale),
              ee < Me && (ee = Me),
              ee > je && (ee = je),
              ie < Ce && (ie = Ce),
              ie > Ne && (ie = Ne)),
          fe && D.scale === 1 && ((l.originX = 0), (l.originY = 0)),
          (l.imageWrapEl.style.transitionDuration = "300ms"),
          (l.imageWrapEl.style.transform = `translate3d(${ee}px, ${ie}px,0)`),
          (l.imageEl.style.transitionDuration = "300ms"),
          (l.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`);
      }
      function b() {
        const C = e.zoom,
          D = e.params.zoom;
        if (!l.slideEl) {
          e.params.virtual && e.params.virtual.enabled && e.virtual
            ? (l.slideEl = F(e.slidesEl, `.${e.params.slideActiveClass}`)[0])
            : (l.slideEl = e.slides[e.activeIndex]);
          let A = l.slideEl.querySelector(`.${D.containerClass}`);
          A &&
            (A = A.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
            (l.imageEl = A),
            (l.imageWrapEl = A
              ? ne(l.imageEl, `.${D.containerClass}`)[0]
              : void 0);
        }
        l.imageEl &&
          l.imageWrapEl &&
          (e.params.cssMode &&
            ((e.wrapperEl.style.overflow = ""),
            (e.wrapperEl.style.touchAction = "")),
          (C.scale = 1),
          (n = 1),
          (d.touchesStart.x = void 0),
          (d.touchesStart.y = void 0),
          (l.imageWrapEl.style.transitionDuration = "300ms"),
          (l.imageWrapEl.style.transform = "translate3d(0,0,0)"),
          (l.imageEl.style.transitionDuration = "300ms"),
          (l.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
          l.slideEl.classList.remove(`${D.zoomedSlideClass}`),
          (l.slideEl = void 0),
          (l.originX = 0),
          (l.originY = 0));
      }
      function v(C) {
        const D = e.zoom;
        D.scale && D.scale !== 1 ? b() : z(C);
      }
      function x() {
        return {
          passiveListener: !!e.params.passiveListeners && {
            passive: !0,
            capture: !1,
          },
          activeListenerWithCapture: !e.params.passiveListeners || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function E() {
        const C = e.zoom;
        if (C.enabled) return;
        C.enabled = !0;
        const { passiveListener: D, activeListenerWithCapture: A } = x();
        e.wrapperEl.addEventListener("pointerdown", T, D),
          e.wrapperEl.addEventListener("pointermove", S, A),
          ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
            e.wrapperEl.addEventListener(B, M, D);
          }),
          e.wrapperEl.addEventListener("pointermove", k, A);
      }
      function P() {
        const C = e.zoom;
        if (!C.enabled) return;
        C.enabled = !1;
        const { passiveListener: D, activeListenerWithCapture: A } = x();
        e.wrapperEl.removeEventListener("pointerdown", T, D),
          e.wrapperEl.removeEventListener("pointermove", S, A),
          ["pointerup", "pointercancel", "pointerout"].forEach((B) => {
            e.wrapperEl.removeEventListener(B, M, D);
          }),
          e.wrapperEl.removeEventListener("pointermove", k, A);
      }
      Object.defineProperty(e.zoom, "scale", {
        get: () => w,
        set(C) {
          if (w !== C) {
            const D = l.imageEl,
              A = l.slideEl;
            r("zoomChange", C, D, A);
          }
          w = C;
        },
      }),
        s("init", () => {
          e.params.zoom.enabled && E();
        }),
        s("destroy", () => {
          P();
        }),
        s("touchStart", (C, D) => {
          e.zoom.enabled &&
            (function (A) {
              const B = e.device;
              if (!l.imageEl || d.isTouched) return;
              B.android && A.cancelable && A.preventDefault(),
                (d.isTouched = !0);
              const H = u.length > 0 ? u[0] : A;
              (d.touchesStart.x = H.pageX), (d.touchesStart.y = H.pageY);
            })(D);
        }),
        s("touchEnd", (C, D) => {
          e.zoom.enabled &&
            (function () {
              const A = e.zoom;
              if (!l.imageEl) return;
              if (!d.isTouched || !d.isMoved)
                return (d.isTouched = !1), void (d.isMoved = !1);
              (d.isTouched = !1), (d.isMoved = !1);
              let B = 300,
                H = 300;
              const Q = m.x * B,
                G = d.currentX + Q,
                R = m.y * H,
                J = d.currentY + R;
              m.x !== 0 && (B = Math.abs((G - d.currentX) / m.x)),
                m.y !== 0 && (H = Math.abs((J - d.currentY) / m.y));
              const ee = Math.max(B, H);
              (d.currentX = G), (d.currentY = J);
              const ie = d.width * A.scale,
                Te = d.height * A.scale;
              (d.minX = Math.min(l.slideWidth / 2 - ie / 2, 0)),
                (d.maxX = -d.minX),
                (d.minY = Math.min(l.slideHeight / 2 - Te / 2, 0)),
                (d.maxY = -d.minY),
                (d.currentX = Math.max(Math.min(d.currentX, d.maxX), d.minX)),
                (d.currentY = Math.max(Math.min(d.currentY, d.maxY), d.minY)),
                (l.imageWrapEl.style.transitionDuration = `${ee}ms`),
                (l.imageWrapEl.style.transform = `translate3d(${d.currentX}px, ${d.currentY}px,0)`);
            })();
        }),
        s("doubleTap", (C, D) => {
          !e.animating &&
            e.params.zoom.enabled &&
            e.zoom.enabled &&
            e.params.zoom.toggle &&
            v(D);
        }),
        s("transitionEnd", () => {
          e.zoom.enabled && e.params.zoom.enabled && L();
        }),
        s("slideChange", () => {
          e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && L();
        }),
        Object.assign(e.zoom, {
          enable: E,
          disable: P,
          in: z,
          out: b,
          toggle: v,
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      function r(p, o) {
        const n = (function () {
          let l, d, m;
          return (g, w) => {
            for (d = -1, l = g.length; l - d > 1; )
              (m = (l + d) >> 1), g[m] <= w ? (d = m) : (l = m);
            return l;
          };
        })();
        let c, u;
        return (
          (this.x = p),
          (this.y = o),
          (this.lastIndex = p.length - 1),
          (this.interpolate = function (l) {
            return l
              ? ((u = n(this.x, l)),
                (c = u - 1),
                ((l - this.x[c]) * (this.y[u] - this.y[c])) /
                  (this.x[u] - this.x[c]) +
                  this.y[c])
              : 0;
          }),
          this
        );
      }
      function a() {
        e.controller.control &&
          e.controller.spline &&
          ((e.controller.spline = void 0), delete e.controller.spline);
      }
      t({ controller: { control: void 0, inverse: !1, by: "slide" } }),
        (e.controller = { control: void 0 }),
        s("beforeInit", () => {
          typeof window < "u" &&
          (typeof e.params.controller.control == "string" ||
            e.params.controller.control instanceof HTMLElement)
            ? (typeof e.params.controller.control == "string"
                ? [...document.querySelectorAll(e.params.controller.control)]
                : [e.params.controller.control]
              ).forEach((p) => {
                if (
                  (e.controller.control || (e.controller.control = []),
                  p && p.swiper)
                )
                  e.controller.control.push(p.swiper);
                else if (p) {
                  const o = `${e.params.eventsPrefix}init`,
                    n = (c) => {
                      e.controller.control.push(c.detail[0]),
                        e.update(),
                        p.removeEventListener(o, n);
                    };
                  p.addEventListener(o, n);
                }
              })
            : (e.controller.control = e.params.controller.control);
        }),
        s("update", () => {
          a();
        }),
        s("resize", () => {
          a();
        }),
        s("observerUpdate", () => {
          a();
        }),
        s("setTranslate", (p, o, n) => {
          e.controller.control &&
            !e.controller.control.destroyed &&
            e.controller.setTranslate(o, n);
        }),
        s("setTransition", (p, o, n) => {
          e.controller.control &&
            !e.controller.control.destroyed &&
            e.controller.setTransition(o, n);
        }),
        Object.assign(e.controller, {
          setTranslate: function (p, o) {
            const n = e.controller.control;
            let c, u;
            const l = e.constructor;
            function d(m) {
              if (m.destroyed) return;
              const g = e.rtlTranslate ? -e.translate : e.translate;
              e.params.controller.by === "slide" &&
                ((function (w) {
                  e.controller.spline = e.params.loop
                    ? new r(e.slidesGrid, w.slidesGrid)
                    : new r(e.snapGrid, w.snapGrid);
                })(m),
                (u = -e.controller.spline.interpolate(-g))),
                (u && e.params.controller.by !== "container") ||
                  ((c =
                    (m.maxTranslate() - m.minTranslate()) /
                    (e.maxTranslate() - e.minTranslate())),
                  (!Number.isNaN(c) && Number.isFinite(c)) || (c = 1),
                  (u = (g - e.minTranslate()) * c + m.minTranslate())),
                e.params.controller.inverse && (u = m.maxTranslate() - u),
                m.updateProgress(u),
                m.setTranslate(u, e),
                m.updateActiveIndex(),
                m.updateSlidesClasses();
            }
            if (Array.isArray(n))
              for (let m = 0; m < n.length; m += 1)
                n[m] !== o && n[m] instanceof l && d(n[m]);
            else n instanceof l && o !== n && d(n);
          },
          setTransition: function (p, o) {
            const n = e.constructor,
              c = e.controller.control;
            let u;
            function l(d) {
              d.destroyed ||
                (d.setTransition(p, e),
                p !== 0 &&
                  (d.transitionStart(),
                  d.params.autoHeight &&
                    te(() => {
                      d.updateAutoHeight();
                    }),
                  me(d.wrapperEl, () => {
                    c && d.transitionEnd();
                  })));
            }
            if (Array.isArray(c))
              for (u = 0; u < c.length; u += 1)
                c[u] !== o && c[u] instanceof n && l(c[u]);
            else c instanceof n && o !== c && l(c);
          },
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        a11y: {
          enabled: !0,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          slideLabelMessage: "{{index}} / {{slidesLength}}",
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          containerRole: null,
          itemRoleDescriptionMessage: null,
          slideRole: "group",
          id: null,
          scrollOnFocus: !0,
        },
      }),
        (e.a11y = { clicked: !1 });
      let r,
        a,
        p = null,
        o = new Date().getTime();
      function n(b) {
        const v = p;
        v.length !== 0 && ((v.innerHTML = ""), (v.innerHTML = b));
      }
      function c(b) {
        (b = N(b)).forEach((v) => {
          v.setAttribute("tabIndex", "0");
        });
      }
      function u(b) {
        (b = N(b)).forEach((v) => {
          v.setAttribute("tabIndex", "-1");
        });
      }
      function l(b, v) {
        (b = N(b)).forEach((x) => {
          x.setAttribute("role", v);
        });
      }
      function d(b, v) {
        (b = N(b)).forEach((x) => {
          x.setAttribute("aria-roledescription", v);
        });
      }
      function m(b, v) {
        (b = N(b)).forEach((x) => {
          x.setAttribute("aria-label", v);
        });
      }
      function g(b) {
        (b = N(b)).forEach((v) => {
          v.setAttribute("aria-disabled", !0);
        });
      }
      function w(b) {
        (b = N(b)).forEach((v) => {
          v.setAttribute("aria-disabled", !1);
        });
      }
      function h(b) {
        if (b.keyCode !== 13 && b.keyCode !== 32) return;
        const v = e.params.a11y,
          x = b.target;
        if (
          !e.pagination ||
          !e.pagination.el ||
          (x !== e.pagination.el && !e.pagination.el.contains(b.target)) ||
          b.target.matches(se(e.params.pagination.bulletClass))
        ) {
          if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
            const E = N(e.navigation.prevEl);
            N(e.navigation.nextEl).includes(x) &&
              ((e.isEnd && !e.params.loop) || e.slideNext(),
              e.isEnd ? n(v.lastSlideMessage) : n(v.nextSlideMessage)),
              E.includes(x) &&
                ((e.isBeginning && !e.params.loop) || e.slidePrev(),
                e.isBeginning ? n(v.firstSlideMessage) : n(v.prevSlideMessage));
          }
          e.pagination &&
            x.matches(se(e.params.pagination.bulletClass)) &&
            x.click();
        }
      }
      function f() {
        return (
          e.pagination && e.pagination.bullets && e.pagination.bullets.length
        );
      }
      function y() {
        return f() && e.params.pagination.clickable;
      }
      const T = (b, v, x) => {
          c(b),
            b.tagName !== "BUTTON" &&
              (l(b, "button"), b.addEventListener("keydown", h)),
            m(b, x),
            (function (E, P) {
              (E = N(E)).forEach((C) => {
                C.setAttribute("aria-controls", P);
              });
            })(b, v);
        },
        S = (b) => {
          a && a !== b.target && !a.contains(b.target) && (r = !0),
            (e.a11y.clicked = !0);
        },
        M = () => {
          (r = !1),
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                e.destroyed || (e.a11y.clicked = !1);
              });
            });
        },
        I = (b) => {
          o = new Date().getTime();
        },
        k = (b) => {
          if (
            e.a11y.clicked ||
            !e.params.a11y.scrollOnFocus ||
            new Date().getTime() - o < 100
          )
            return;
          const v = b.target.closest(`.${e.params.slideClass}, swiper-slide`);
          if (!v || !e.slides.includes(v)) return;
          a = v;
          const x = e.slides.indexOf(v) === e.activeIndex,
            E =
              e.params.watchSlidesProgress &&
              e.visibleSlides &&
              e.visibleSlides.includes(v);
          x ||
            E ||
            (b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents) ||
            (e.isHorizontal() ? (e.el.scrollLeft = 0) : (e.el.scrollTop = 0),
            requestAnimationFrame(() => {
              r ||
                (e.params.loop
                  ? e.slideToLoop(
                      parseInt(v.getAttribute("data-swiper-slide-index")),
                      0
                    )
                  : e.slideTo(e.slides.indexOf(v), 0),
                (r = !1));
            }));
        },
        L = () => {
          const b = e.params.a11y;
          b.itemRoleDescriptionMessage &&
            d(e.slides, b.itemRoleDescriptionMessage),
            b.slideRole && l(e.slides, b.slideRole);
          const v = e.slides.length;
          b.slideLabelMessage &&
            e.slides.forEach((x, E) => {
              const P = e.params.loop
                ? parseInt(x.getAttribute("data-swiper-slide-index"), 10)
                : E;
              m(
                x,
                b.slideLabelMessage
                  .replace(/\{\{index\}\}/, P + 1)
                  .replace(/\{\{slidesLength\}\}/, v)
              );
            });
        },
        z = () => {
          const b = e.params.a11y;
          e.el.append(p);
          const v = e.el;
          b.containerRoleDescriptionMessage &&
            d(v, b.containerRoleDescriptionMessage),
            b.containerMessage && m(v, b.containerMessage),
            b.containerRole && l(v, b.containerRole);
          const x = e.wrapperEl,
            E =
              b.id ||
              x.getAttribute("id") ||
              `swiper-wrapper-${
                ((P = 16),
                P === void 0 && (P = 16),
                "x"
                  .repeat(P)
                  .replace(/x/g, () =>
                    Math.round(16 * Math.random()).toString(16)
                  ))
              }`;
          var P;
          const C =
            e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
          var D;
          (D = E),
            N(x).forEach((H) => {
              H.setAttribute("id", D);
            }),
            (function (H, Q) {
              (H = N(H)).forEach((G) => {
                G.setAttribute("aria-live", Q);
              });
            })(x, C),
            L();
          let { nextEl: A, prevEl: B } = e.navigation ? e.navigation : {};
          (A = N(A)),
            (B = N(B)),
            A && A.forEach((H) => T(H, E, b.nextSlideMessage)),
            B && B.forEach((H) => T(H, E, b.prevSlideMessage)),
            y() &&
              N(e.pagination.el).forEach((H) => {
                H.addEventListener("keydown", h);
              }),
            q().addEventListener("visibilitychange", I),
            e.el.addEventListener("focus", k, !0),
            e.el.addEventListener("focus", k, !0),
            e.el.addEventListener("pointerdown", S, !0),
            e.el.addEventListener("pointerup", M, !0);
        };
      s("beforeInit", () => {
        (p = K("span", e.params.a11y.notificationClass)),
          p.setAttribute("aria-live", "assertive"),
          p.setAttribute("aria-atomic", "true");
      }),
        s("afterInit", () => {
          e.params.a11y.enabled && z();
        }),
        s(
          "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
          () => {
            e.params.a11y.enabled && L();
          }
        ),
        s("fromEdge toEdge afterInit lock unlock", () => {
          e.params.a11y.enabled &&
            (function () {
              if (e.params.loop || e.params.rewind || !e.navigation) return;
              const { nextEl: b, prevEl: v } = e.navigation;
              v && (e.isBeginning ? (g(v), u(v)) : (w(v), c(v))),
                b && (e.isEnd ? (g(b), u(b)) : (w(b), c(b)));
            })();
        }),
        s("paginationUpdate", () => {
          e.params.a11y.enabled &&
            (function () {
              const b = e.params.a11y;
              f() &&
                e.pagination.bullets.forEach((v) => {
                  e.params.pagination.clickable &&
                    (c(v),
                    e.params.pagination.renderBullet ||
                      (l(v, "button"),
                      m(
                        v,
                        b.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          ue(v) + 1
                        )
                      ))),
                    v.matches(se(e.params.pagination.bulletActiveClass))
                      ? v.setAttribute("aria-current", "true")
                      : v.removeAttribute("aria-current");
                });
            })();
        }),
        s("destroy", () => {
          e.params.a11y.enabled &&
            (function () {
              p && p.remove();
              let { nextEl: b, prevEl: v } = e.navigation ? e.navigation : {};
              (b = N(b)),
                (v = N(v)),
                b && b.forEach((x) => x.removeEventListener("keydown", h)),
                v && v.forEach((x) => x.removeEventListener("keydown", h)),
                y() &&
                  N(e.pagination.el).forEach((x) => {
                    x.removeEventListener("keydown", h);
                  }),
                q().removeEventListener("visibilitychange", I),
                e.el &&
                  typeof e.el != "string" &&
                  (e.el.removeEventListener("focus", k, !0),
                  e.el.removeEventListener("pointerdown", S, !0),
                  e.el.removeEventListener("pointerup", M, !0));
            })();
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        history: {
          enabled: !1,
          root: "",
          replaceState: !1,
          key: "slides",
          keepQuery: !1,
        },
      });
      let r = !1,
        a = {};
      const p = (l) =>
          l
            .toString()
            .replace(/\s+/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
        o = (l) => {
          const d = j();
          let m;
          m = l ? new URL(l) : d.location;
          const g = m.pathname
              .slice(1)
              .split("/")
              .filter((h) => h !== ""),
            w = g.length;
          return { key: g[w - 2], value: g[w - 1] };
        },
        n = (l, d) => {
          const m = j();
          if (!r || !e.params.history.enabled) return;
          let g;
          g = e.params.url ? new URL(e.params.url) : m.location;
          const w =
            e.virtual && e.params.virtual.enabled
              ? e.slidesEl.querySelector(`[data-swiper-slide-index="${d}"]`)
              : e.slides[d];
          let h = p(w.getAttribute("data-history"));
          if (e.params.history.root.length > 0) {
            let y = e.params.history.root;
            y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)),
              (h = `${y}/${l ? `${l}/` : ""}${h}`);
          } else g.pathname.includes(l) || (h = `${l ? `${l}/` : ""}${h}`);
          e.params.history.keepQuery && (h += g.search);
          const f = m.history.state;
          (f && f.value === h) ||
            (e.params.history.replaceState
              ? m.history.replaceState({ value: h }, null, h)
              : m.history.pushState({ value: h }, null, h));
        },
        c = (l, d, m) => {
          if (d)
            for (let g = 0, w = e.slides.length; g < w; g += 1) {
              const h = e.slides[g];
              if (p(h.getAttribute("data-history")) === d) {
                const f = e.getSlideIndex(h);
                e.slideTo(f, l, m);
              }
            }
          else e.slideTo(0, l, m);
        },
        u = () => {
          (a = o(e.params.url)), c(e.params.speed, a.value, !1);
        };
      s("init", () => {
        e.params.history.enabled &&
          (() => {
            const l = j();
            if (e.params.history) {
              if (!l.history || !l.history.pushState)
                return (
                  (e.params.history.enabled = !1),
                  void (e.params.hashNavigation.enabled = !0)
                );
              (r = !0),
                (a = o(e.params.url)),
                (a.key || a.value) &&
                  c(0, a.value, e.params.runCallbacksOnInit),
                e.params.history.replaceState ||
                  l.addEventListener("popstate", u);
            }
          })();
      }),
        s("destroy", () => {
          e.params.history.enabled &&
            (() => {
              const l = j();
              e.params.history.replaceState ||
                l.removeEventListener("popstate", u);
            })();
        }),
        s("transitionEnd _freeModeNoMomentumRelease", () => {
          r && n(e.params.history.key, e.activeIndex);
        }),
        s("slideChange", () => {
          r && e.params.cssMode && n(e.params.history.key, e.activeIndex);
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, emit: s, on: r } = i,
        a = !1;
      const p = q(),
        o = j();
      t({
        hashNavigation: {
          enabled: !1,
          replaceState: !1,
          watchState: !1,
          getSlideIndex(u, l) {
            if (e.virtual && e.params.virtual.enabled) {
              const d = e.slides.filter(
                (m) => m.getAttribute("data-hash") === l
              )[0];
              return d
                ? parseInt(d.getAttribute("data-swiper-slide-index"), 10)
                : 0;
            }
            return e.getSlideIndex(
              F(
                e.slidesEl,
                `.${e.params.slideClass}[data-hash="${l}"], swiper-slide[data-hash="${l}"]`
              )[0]
            );
          },
        },
      });
      const n = () => {
          s("hashChange");
          const u = p.location.hash.replace("#", ""),
            l =
              e.virtual && e.params.virtual.enabled
                ? e.slidesEl.querySelector(
                    `[data-swiper-slide-index="${e.activeIndex}"]`
                  )
                : e.slides[e.activeIndex];
          if (u !== (l ? l.getAttribute("data-hash") : "")) {
            const d = e.params.hashNavigation.getSlideIndex(e, u);
            if (d === void 0 || Number.isNaN(d)) return;
            e.slideTo(d);
          }
        },
        c = () => {
          if (!a || !e.params.hashNavigation.enabled) return;
          const u =
              e.virtual && e.params.virtual.enabled
                ? e.slidesEl.querySelector(
                    `[data-swiper-slide-index="${e.activeIndex}"]`
                  )
                : e.slides[e.activeIndex],
            l = u
              ? u.getAttribute("data-hash") || u.getAttribute("data-history")
              : "";
          e.params.hashNavigation.replaceState &&
          o.history &&
          o.history.replaceState
            ? (o.history.replaceState(null, null, `#${l}` || ""), s("hashSet"))
            : ((p.location.hash = l || ""), s("hashSet"));
        };
      r("init", () => {
        e.params.hashNavigation.enabled &&
          (() => {
            if (
              !e.params.hashNavigation.enabled ||
              (e.params.history && e.params.history.enabled)
            )
              return;
            a = !0;
            const u = p.location.hash.replace("#", "");
            if (u) {
              const d = e.params.hashNavigation.getSlideIndex(e, u);
              e.slideTo(d || 0, 0, e.params.runCallbacksOnInit, !0);
            }
            e.params.hashNavigation.watchState &&
              o.addEventListener("hashchange", n);
          })();
      }),
        r("destroy", () => {
          e.params.hashNavigation.enabled &&
            e.params.hashNavigation.watchState &&
            o.removeEventListener("hashchange", n);
        }),
        r("transitionEnd _freeModeNoMomentumRelease", () => {
          a && c();
        }),
        r("slideChange", () => {
          a && e.params.cssMode && c();
        });
    },
    function (i) {
      let e,
        t,
        { swiper: s, extendParams: r, on: a, emit: p, params: o } = i;
      (s.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        r({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        });
      let n,
        c,
        u,
        l,
        d,
        m,
        g,
        w,
        h = o && o.autoplay ? o.autoplay.delay : 3e3,
        f = o && o.autoplay ? o.autoplay.delay : 3e3,
        y = new Date().getTime();
      function T(E) {
        s &&
          !s.destroyed &&
          s.wrapperEl &&
          E.target === s.wrapperEl &&
          (s.wrapperEl.removeEventListener("transitionend", T),
          w || (E.detail && E.detail.bySwiperTouchMove) || z());
      }
      const S = () => {
          if (s.destroyed || !s.autoplay.running) return;
          s.autoplay.paused ? (c = !0) : c && ((f = n), (c = !1));
          const E = s.autoplay.paused ? n : y + f - new Date().getTime();
          (s.autoplay.timeLeft = E),
            p("autoplayTimeLeft", E, E / h),
            (t = requestAnimationFrame(() => {
              S();
            }));
        },
        M = (E) => {
          if (s.destroyed || !s.autoplay.running) return;
          cancelAnimationFrame(t), S();
          let P = E === void 0 ? s.params.autoplay.delay : E;
          (h = s.params.autoplay.delay), (f = s.params.autoplay.delay);
          const C = (() => {
            let B;
            if (
              ((B =
                s.virtual && s.params.virtual.enabled
                  ? s.slides.filter((H) =>
                      H.classList.contains("swiper-slide-active")
                    )[0]
                  : s.slides[s.activeIndex]),
              !!B)
            )
              return parseInt(B.getAttribute("data-swiper-autoplay"), 10);
          })();
          !Number.isNaN(C) &&
            C > 0 &&
            E === void 0 &&
            ((P = C), (h = C), (f = C)),
            (n = P);
          const D = s.params.speed,
            A = () => {
              s &&
                !s.destroyed &&
                (s.params.autoplay.reverseDirection
                  ? !s.isBeginning || s.params.loop || s.params.rewind
                    ? (s.slidePrev(D, !0, !0), p("autoplay"))
                    : s.params.autoplay.stopOnLastSlide ||
                      (s.slideTo(s.slides.length - 1, D, !0, !0), p("autoplay"))
                  : !s.isEnd || s.params.loop || s.params.rewind
                  ? (s.slideNext(D, !0, !0), p("autoplay"))
                  : s.params.autoplay.stopOnLastSlide ||
                    (s.slideTo(0, D, !0, !0), p("autoplay")),
                s.params.cssMode &&
                  ((y = new Date().getTime()),
                  requestAnimationFrame(() => {
                    M();
                  })));
            };
          return (
            P > 0
              ? (clearTimeout(e),
                (e = setTimeout(() => {
                  A();
                }, P)))
              : requestAnimationFrame(() => {
                  A();
                }),
            P
          );
        },
        I = () => {
          (y = new Date().getTime()),
            (s.autoplay.running = !0),
            M(),
            p("autoplayStart");
        },
        k = () => {
          (s.autoplay.running = !1),
            clearTimeout(e),
            cancelAnimationFrame(t),
            p("autoplayStop");
        },
        L = (E, P) => {
          if (s.destroyed || !s.autoplay.running) return;
          clearTimeout(e), E || (g = !0);
          const C = () => {
            p("autoplayPause"),
              s.params.autoplay.waitForTransition
                ? s.wrapperEl.addEventListener("transitionend", T)
                : z();
          };
          if (((s.autoplay.paused = !0), P))
            return m && (n = s.params.autoplay.delay), (m = !1), void C();
          (n = (n || s.params.autoplay.delay) - (new Date().getTime() - y)),
            (s.isEnd && n < 0 && !s.params.loop) || (n < 0 && (n = 0), C());
        },
        z = () => {
          (s.isEnd && n < 0 && !s.params.loop) ||
            s.destroyed ||
            !s.autoplay.running ||
            ((y = new Date().getTime()),
            g ? ((g = !1), M(n)) : M(),
            (s.autoplay.paused = !1),
            p("autoplayResume"));
        },
        b = () => {
          if (s.destroyed || !s.autoplay.running) return;
          const E = q();
          E.visibilityState === "hidden" && ((g = !0), L(!0)),
            E.visibilityState === "visible" && z();
        },
        v = (E) => {
          E.pointerType === "mouse" &&
            ((g = !0), (w = !0), s.animating || s.autoplay.paused || L(!0));
        },
        x = (E) => {
          E.pointerType === "mouse" && ((w = !1), s.autoplay.paused && z());
        };
      a("init", () => {
        s.params.autoplay.enabled &&
          (s.params.autoplay.pauseOnMouseEnter &&
            (s.el.addEventListener("pointerenter", v),
            s.el.addEventListener("pointerleave", x)),
          q().addEventListener("visibilitychange", b),
          I());
      }),
        a("destroy", () => {
          s.el &&
            typeof s.el != "string" &&
            (s.el.removeEventListener("pointerenter", v),
            s.el.removeEventListener("pointerleave", x)),
            q().removeEventListener("visibilitychange", b),
            s.autoplay.running && k();
        }),
        a("_freeModeStaticRelease", () => {
          (l || g) && z();
        }),
        a("_freeModeNoMomentumRelease", () => {
          s.params.autoplay.disableOnInteraction ? k() : L(!0, !0);
        }),
        a("beforeTransitionStart", (E, P, C) => {
          !s.destroyed &&
            s.autoplay.running &&
            (C || !s.params.autoplay.disableOnInteraction ? L(!0, !0) : k());
        }),
        a("sliderFirstMove", () => {
          !s.destroyed &&
            s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction
              ? k()
              : ((u = !0),
                (l = !1),
                (g = !1),
                (d = setTimeout(() => {
                  (g = !0), (l = !0), L(!0);
                }, 200))));
        }),
        a("touchEnd", () => {
          if (!s.destroyed && s.autoplay.running && u) {
            if (
              (clearTimeout(d),
              clearTimeout(e),
              s.params.autoplay.disableOnInteraction)
            )
              return (l = !1), void (u = !1);
            l && s.params.cssMode && z(), (l = !1), (u = !1);
          }
        }),
        a("slideChange", () => {
          !s.destroyed && s.autoplay.running && (m = !0);
        }),
        Object.assign(s.autoplay, { start: I, stop: k, pause: L, resume: z });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: "swiper-slide-thumb-active",
          thumbsContainerClass: "swiper-thumbs",
        },
      });
      let r = !1,
        a = !1;
      function p() {
        const c = e.thumbs.swiper;
        if (!c || c.destroyed) return;
        const u = c.clickedIndex,
          l = c.clickedSlide;
        if (
          (l && l.classList.contains(e.params.thumbs.slideThumbActiveClass)) ||
          u == null
        )
          return;
        let d;
        (d = c.params.loop
          ? parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10)
          : u),
          e.params.loop ? e.slideToLoop(d) : e.slideTo(d);
      }
      function o() {
        const { thumbs: c } = e.params;
        if (r) return !1;
        r = !0;
        const u = e.constructor;
        if (c.swiper instanceof u)
          (e.thumbs.swiper = c.swiper),
            Object.assign(e.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(e.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            e.thumbs.swiper.update();
        else if (ce(c.swiper)) {
          const l = Object.assign({}, c.swiper);
          Object.assign(l, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (e.thumbs.swiper = new u(l)),
            (a = !0);
        }
        return (
          e.thumbs.swiper.el.classList.add(
            e.params.thumbs.thumbsContainerClass
          ),
          e.thumbs.swiper.on("tap", p),
          !0
        );
      }
      function n(c) {
        const u = e.thumbs.swiper;
        if (!u || u.destroyed) return;
        const l =
          u.params.slidesPerView === "auto"
            ? u.slidesPerViewDynamic()
            : u.params.slidesPerView;
        let d = 1;
        const m = e.params.thumbs.slideThumbActiveClass;
        if (
          (e.params.slidesPerView > 1 &&
            !e.params.centeredSlides &&
            (d = e.params.slidesPerView),
          e.params.thumbs.multipleActiveThumbs || (d = 1),
          (d = Math.floor(d)),
          u.slides.forEach((h) => h.classList.remove(m)),
          u.params.loop || (u.params.virtual && u.params.virtual.enabled))
        )
          for (let h = 0; h < d; h += 1)
            F(
              u.slidesEl,
              `[data-swiper-slide-index="${e.realIndex + h}"]`
            ).forEach((f) => {
              f.classList.add(m);
            });
        else
          for (let h = 0; h < d; h += 1)
            u.slides[e.realIndex + h] &&
              u.slides[e.realIndex + h].classList.add(m);
        const g = e.params.thumbs.autoScrollOffset,
          w = g && !u.params.loop;
        if (e.realIndex !== u.realIndex || w) {
          const h = u.activeIndex;
          let f, y;
          if (u.params.loop) {
            const T = u.slides.filter(
              (S) =>
                S.getAttribute("data-swiper-slide-index") === `${e.realIndex}`
            )[0];
            (f = u.slides.indexOf(T)),
              (y = e.activeIndex > e.previousIndex ? "next" : "prev");
          } else (f = e.realIndex), (y = f > e.previousIndex ? "next" : "prev");
          w && (f += y === "next" ? g : -1 * g),
            u.visibleSlidesIndexes &&
              u.visibleSlidesIndexes.indexOf(f) < 0 &&
              (u.params.centeredSlides
                ? (f =
                    f > h
                      ? f - Math.floor(l / 2) + 1
                      : f + Math.floor(l / 2) - 1)
                : f > h && u.params.slidesPerGroup,
              u.slideTo(f, c ? 0 : void 0));
        }
      }
      (e.thumbs = { swiper: null }),
        s("beforeInit", () => {
          const { thumbs: c } = e.params;
          if (c && c.swiper)
            if (
              typeof c.swiper == "string" ||
              c.swiper instanceof HTMLElement
            ) {
              const u = q(),
                l = () => {
                  const m =
                    typeof c.swiper == "string"
                      ? u.querySelector(c.swiper)
                      : c.swiper;
                  if (m && m.swiper) (c.swiper = m.swiper), o(), n(!0);
                  else if (m) {
                    const g = `${e.params.eventsPrefix}init`,
                      w = (h) => {
                        (c.swiper = h.detail[0]),
                          m.removeEventListener(g, w),
                          o(),
                          n(!0),
                          c.swiper.update(),
                          e.update();
                      };
                    m.addEventListener(g, w);
                  }
                  return m;
                },
                d = () => {
                  e.destroyed || l() || requestAnimationFrame(d);
                };
              requestAnimationFrame(d);
            } else o(), n(!0);
        }),
        s("slideChange update resize observerUpdate", () => {
          n();
        }),
        s("setTransition", (c, u) => {
          const l = e.thumbs.swiper;
          l && !l.destroyed && l.setTransition(u);
        }),
        s("beforeDestroy", () => {
          const c = e.thumbs.swiper;
          c && !c.destroyed && a && c.destroy();
        }),
        Object.assign(e.thumbs, { init: o, update: n });
    },
    function (i) {
      let { swiper: e, extendParams: t, emit: s, once: r } = i;
      t({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(e, {
          freeMode: {
            onTouchStart: function () {
              if (e.params.cssMode) return;
              const a = e.getTranslate();
              e.setTranslate(a),
                e.setTransition(0),
                (e.touchEventsData.velocities.length = 0),
                e.freeMode.onTouchEnd({
                  currentPos: e.rtl ? e.translate : -e.translate,
                });
            },
            onTouchMove: function () {
              if (e.params.cssMode) return;
              const { touchEventsData: a, touches: p } = e;
              a.velocities.length === 0 &&
                a.velocities.push({
                  position: p[e.isHorizontal() ? "startX" : "startY"],
                  time: a.touchStartTime,
                }),
                a.velocities.push({
                  position: p[e.isHorizontal() ? "currentX" : "currentY"],
                  time: W(),
                });
            },
            onTouchEnd: function (a) {
              let { currentPos: p } = a;
              if (e.params.cssMode) return;
              const {
                  params: o,
                  wrapperEl: n,
                  rtlTranslate: c,
                  snapGrid: u,
                  touchEventsData: l,
                } = e,
                d = W() - l.touchStartTime;
              if (p < -e.minTranslate()) e.slideTo(e.activeIndex);
              else if (p > -e.maxTranslate())
                e.slides.length < u.length
                  ? e.slideTo(u.length - 1)
                  : e.slideTo(e.slides.length - 1);
              else {
                if (o.freeMode.momentum) {
                  if (l.velocities.length > 1) {
                    const S = l.velocities.pop(),
                      M = l.velocities.pop(),
                      I = S.position - M.position,
                      k = S.time - M.time;
                    (e.velocity = I / k),
                      (e.velocity /= 2),
                      Math.abs(e.velocity) < o.freeMode.minimumVelocity &&
                        (e.velocity = 0),
                      (k > 150 || W() - S.time > 300) && (e.velocity = 0);
                  } else e.velocity = 0;
                  (e.velocity *= o.freeMode.momentumVelocityRatio),
                    (l.velocities.length = 0);
                  let m = 1e3 * o.freeMode.momentumRatio;
                  const g = e.velocity * m;
                  let w = e.translate + g;
                  c && (w = -w);
                  let h,
                    f = !1;
                  const y =
                    20 * Math.abs(e.velocity) * o.freeMode.momentumBounceRatio;
                  let T;
                  if (w < e.maxTranslate())
                    o.freeMode.momentumBounce
                      ? (w + e.maxTranslate() < -y &&
                          (w = e.maxTranslate() - y),
                        (h = e.maxTranslate()),
                        (f = !0),
                        (l.allowMomentumBounce = !0))
                      : (w = e.maxTranslate()),
                      o.loop && o.centeredSlides && (T = !0);
                  else if (w > e.minTranslate())
                    o.freeMode.momentumBounce
                      ? (w - e.minTranslate() > y && (w = e.minTranslate() + y),
                        (h = e.minTranslate()),
                        (f = !0),
                        (l.allowMomentumBounce = !0))
                      : (w = e.minTranslate()),
                      o.loop && o.centeredSlides && (T = !0);
                  else if (o.freeMode.sticky) {
                    let S;
                    for (let M = 0; M < u.length; M += 1)
                      if (u[M] > -w) {
                        S = M;
                        break;
                      }
                    (w =
                      Math.abs(u[S] - w) < Math.abs(u[S - 1] - w) ||
                      e.swipeDirection === "next"
                        ? u[S]
                        : u[S - 1]),
                      (w = -w);
                  }
                  if (
                    (T &&
                      r("transitionEnd", () => {
                        e.loopFix();
                      }),
                    e.velocity !== 0)
                  ) {
                    if (
                      ((m = Math.abs(
                        c
                          ? (-w - e.translate) / e.velocity
                          : (w - e.translate) / e.velocity
                      )),
                      o.freeMode.sticky)
                    ) {
                      const S = Math.abs((c ? -w : w) - e.translate),
                        M = e.slidesSizesGrid[e.activeIndex];
                      m =
                        S < M
                          ? o.speed
                          : S < 2 * M
                          ? 1.5 * o.speed
                          : 2.5 * o.speed;
                    }
                  } else if (o.freeMode.sticky) return void e.slideToClosest();
                  o.freeMode.momentumBounce && f
                    ? (e.updateProgress(h),
                      e.setTransition(m),
                      e.setTranslate(w),
                      e.transitionStart(!0, e.swipeDirection),
                      (e.animating = !0),
                      me(n, () => {
                        e &&
                          !e.destroyed &&
                          l.allowMomentumBounce &&
                          (s("momentumBounce"),
                          e.setTransition(o.speed),
                          setTimeout(() => {
                            e.setTranslate(h),
                              me(n, () => {
                                e && !e.destroyed && e.transitionEnd();
                              });
                          }, 0));
                      }))
                    : e.velocity
                    ? (s("_freeModeNoMomentumRelease"),
                      e.updateProgress(w),
                      e.setTransition(m),
                      e.setTranslate(w),
                      e.transitionStart(!0, e.swipeDirection),
                      e.animating ||
                        ((e.animating = !0),
                        me(n, () => {
                          e && !e.destroyed && e.transitionEnd();
                        })))
                    : e.updateProgress(w),
                    e.updateActiveIndex(),
                    e.updateSlidesClasses();
                } else {
                  if (o.freeMode.sticky) return void e.slideToClosest();
                  o.freeMode && s("_freeModeNoMomentumRelease");
                }
                (!o.freeMode.momentum || d >= o.longSwipesMs) &&
                  (s("_freeModeStaticRelease"),
                  e.updateProgress(),
                  e.updateActiveIndex(),
                  e.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (i) {
      let e,
        t,
        s,
        r,
        { swiper: a, extendParams: p, on: o } = i;
      p({ grid: { rows: 1, fill: "column" } });
      const n = () => {
        let c = a.params.spaceBetween;
        return (
          typeof c == "string" && c.indexOf("%") >= 0
            ? (c = (parseFloat(c.replace("%", "")) / 100) * a.size)
            : typeof c == "string" && (c = parseFloat(c)),
          c
        );
      };
      o("init", () => {
        r = a.params.grid && a.params.grid.rows > 1;
      }),
        o("update", () => {
          const { params: c, el: u } = a,
            l = c.grid && c.grid.rows > 1;
          r && !l
            ? (u.classList.remove(
                `${c.containerModifierClass}grid`,
                `${c.containerModifierClass}grid-column`
              ),
              (s = 1),
              a.emitContainerClasses())
            : !r &&
              l &&
              (u.classList.add(`${c.containerModifierClass}grid`),
              c.grid.fill === "column" &&
                u.classList.add(`${c.containerModifierClass}grid-column`),
              a.emitContainerClasses()),
            (r = l);
        }),
        (a.grid = {
          initSlides: (c) => {
            const { slidesPerView: u } = a.params,
              { rows: l, fill: d } = a.params.grid,
              m =
                a.virtual && a.params.virtual.enabled
                  ? a.virtual.slides.length
                  : c.length;
            (s = Math.floor(m / l)),
              (e = Math.floor(m / l) === m / l ? m : Math.ceil(m / l) * l),
              u !== "auto" && d === "row" && (e = Math.max(e, u * l)),
              (t = e / l);
          },
          unsetSlides: () => {
            a.slides &&
              a.slides.forEach((c) => {
                c.swiperSlideGridSet &&
                  ((c.style.height = ""),
                  (c.style[a.getDirectionLabel("margin-top")] = ""));
              });
          },
          updateSlide: (c, u, l) => {
            const { slidesPerGroup: d } = a.params,
              m = n(),
              { rows: g, fill: w } = a.params.grid,
              h =
                a.virtual && a.params.virtual.enabled
                  ? a.virtual.slides.length
                  : l.length;
            let f, y, T;
            if (w === "row" && d > 1) {
              const S = Math.floor(c / (d * g)),
                M = c - g * d * S,
                I = S === 0 ? d : Math.min(Math.ceil((h - S * g * d) / g), d);
              (T = Math.floor(M / I)),
                (y = M - T * I + S * d),
                (f = y + (T * e) / g),
                (u.style.order = f);
            } else
              w === "column"
                ? ((y = Math.floor(c / g)),
                  (T = c - y * g),
                  (y > s || (y === s && T === g - 1)) &&
                    ((T += 1), T >= g && ((T = 0), (y += 1))))
                : ((T = Math.floor(c / t)), (y = c - T * t));
            (u.row = T),
              (u.column = y),
              (u.style.height = `calc((100% - ${(g - 1) * m}px) / ${g})`),
              (u.style[a.getDirectionLabel("margin-top")] =
                T !== 0 ? m && `${m}px` : ""),
              (u.swiperSlideGridSet = !0);
          },
          updateWrapperSize: (c, u) => {
            const { centeredSlides: l, roundLengths: d } = a.params,
              m = n(),
              { rows: g } = a.params.grid;
            if (
              ((a.virtualSize = (c + m) * e),
              (a.virtualSize = Math.ceil(a.virtualSize / g) - m),
              a.params.cssMode ||
                (a.wrapperEl.style[a.getDirectionLabel("width")] = `${
                  a.virtualSize + m
                }px`),
              l)
            ) {
              const w = [];
              for (let h = 0; h < u.length; h += 1) {
                let f = u[h];
                d && (f = Math.floor(f)),
                  u[h] < a.virtualSize + u[0] && w.push(f);
              }
              u.splice(0, u.length), u.push(...w);
            }
          },
        });
    },
    function (i) {
      let { swiper: e } = i;
      Object.assign(e, {
        appendSlide: Tt.bind(e),
        prependSlide: Mt.bind(e),
        addSlide: Ct.bind(e),
        removeSlide: Pt.bind(e),
        removeAllSlides: Lt.bind(e),
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({ fadeEffect: { crossFade: !1 } }),
        le({
          effect: "fade",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: r } = e;
            e.params.fadeEffect;
            for (let a = 0; a < r.length; a += 1) {
              const p = e.slides[a];
              let o = -p.swiperSlideOffset;
              e.params.virtualTranslate || (o -= e.translate);
              let n = 0;
              e.isHorizontal() || ((n = o), (o = 0));
              const c = e.params.fadeEffect.crossFade
                  ? Math.max(1 - Math.abs(p.progress), 0)
                  : 1 + Math.min(Math.max(p.progress, -1), 0),
                u = he(0, p);
              (u.style.opacity = c),
                (u.style.transform = `translate3d(${o}px, ${n}px, 0px)`);
            }
          },
          setTransition: (r) => {
            const a = e.slides.map((p) => re(p));
            a.forEach((p) => {
              p.style.transitionDuration = `${r}ms`;
            }),
              xe({
                swiper: e,
                duration: r,
                transformElements: a,
                allSlides: !0,
              });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const r = (a, p, o) => {
        let n = o
            ? a.querySelector(".swiper-slide-shadow-left")
            : a.querySelector(".swiper-slide-shadow-top"),
          c = o
            ? a.querySelector(".swiper-slide-shadow-right")
            : a.querySelector(".swiper-slide-shadow-bottom");
        n ||
          ((n = K(
            "div",
            (
              "swiper-slide-shadow-cube swiper-slide-shadow-" +
              (o ? "left" : "top")
            ).split(" ")
          )),
          a.append(n)),
          c ||
            ((c = K(
              "div",
              (
                "swiper-slide-shadow-cube swiper-slide-shadow-" +
                (o ? "right" : "bottom")
              ).split(" ")
            )),
            a.append(c)),
          n && (n.style.opacity = Math.max(-p, 0)),
          c && (c.style.opacity = Math.max(p, 0));
      };
      le({
        effect: "cube",
        swiper: e,
        on: s,
        setTranslate: () => {
          const {
              el: a,
              wrapperEl: p,
              slides: o,
              width: n,
              height: c,
              rtlTranslate: u,
              size: l,
              browser: d,
            } = e,
            m = be(e),
            g = e.params.cubeEffect,
            w = e.isHorizontal(),
            h = e.virtual && e.params.virtual.enabled;
          let f,
            y = 0;
          g.shadow &&
            (w
              ? ((f = e.wrapperEl.querySelector(".swiper-cube-shadow")),
                f ||
                  ((f = K("div", "swiper-cube-shadow")), e.wrapperEl.append(f)),
                (f.style.height = `${n}px`))
              : ((f = a.querySelector(".swiper-cube-shadow")),
                f || ((f = K("div", "swiper-cube-shadow")), a.append(f))));
          for (let S = 0; S < o.length; S += 1) {
            const M = o[S];
            let I = S;
            h && (I = parseInt(M.getAttribute("data-swiper-slide-index"), 10));
            let k = 90 * I,
              L = Math.floor(k / 360);
            u && ((k = -k), (L = Math.floor(-k / 360)));
            const z = Math.max(Math.min(M.progress, 1), -1);
            let b = 0,
              v = 0,
              x = 0;
            I % 4 == 0
              ? ((b = 4 * -L * l), (x = 0))
              : (I - 1) % 4 == 0
              ? ((b = 0), (x = 4 * -L * l))
              : (I - 2) % 4 == 0
              ? ((b = l + 4 * L * l), (x = l))
              : (I - 3) % 4 == 0 && ((b = -l), (x = 3 * l + 4 * l * L)),
              u && (b = -b),
              w || ((v = b), (b = 0));
            const E = `rotateX(${m(w ? 0 : -k)}deg) rotateY(${m(
              w ? k : 0
            )}deg) translate3d(${b}px, ${v}px, ${x}px)`;
            z <= 1 &&
              z > -1 &&
              ((y = 90 * I + 90 * z), u && (y = 90 * -I - 90 * z)),
              (M.style.transform = E),
              g.slideShadows && r(M, z, w);
          }
          if (
            ((p.style.transformOrigin = `50% 50% -${l / 2}px`),
            (p.style["-webkit-transform-origin"] = `50% 50% -${l / 2}px`),
            g.shadow)
          )
            if (w)
              f.style.transform = `translate3d(0px, ${
                n / 2 + g.shadowOffset
              }px, ${-n / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${
                g.shadowScale
              })`;
            else {
              const S = Math.abs(y) - 90 * Math.floor(Math.abs(y) / 90),
                M =
                  1.5 -
                  (Math.sin((2 * S * Math.PI) / 360) / 2 +
                    Math.cos((2 * S * Math.PI) / 360) / 2),
                I = g.shadowScale,
                k = g.shadowScale / M,
                L = g.shadowOffset;
              f.style.transform = `scale3d(${I}, 1, ${k}) translate3d(0px, ${
                c / 2 + L
              }px, ${-c / 2 / k}px) rotateX(-89.99deg)`;
            }
          const T =
            (d.isSafari || d.isWebView) && d.needPerspectiveFix ? -l / 2 : 0;
          (p.style.transform = `translate3d(0px,0,${T}px) rotateX(${m(
            e.isHorizontal() ? 0 : y
          )}deg) rotateY(${m(e.isHorizontal() ? -y : 0)}deg)`),
            p.style.setProperty("--swiper-cube-translate-z", `${T}px`);
        },
        setTransition: (a) => {
          const { el: p, slides: o } = e;
          if (
            (o.forEach((n) => {
              (n.style.transitionDuration = `${a}ms`),
                n
                  .querySelectorAll(
                    ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                  )
                  .forEach((c) => {
                    c.style.transitionDuration = `${a}ms`;
                  });
            }),
            e.params.cubeEffect.shadow && !e.isHorizontal())
          ) {
            const n = p.querySelector(".swiper-cube-shadow");
            n && (n.style.transitionDuration = `${a}ms`);
          }
        },
        recreateShadows: () => {
          const a = e.isHorizontal();
          e.slides.forEach((p) => {
            const o = Math.max(Math.min(p.progress, 1), -1);
            r(p, o, a);
          });
        },
        getEffectParams: () => e.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({ flipEffect: { slideShadows: !0, limitRotation: !0 } });
      const r = (a, p) => {
        let o = e.isHorizontal()
            ? a.querySelector(".swiper-slide-shadow-left")
            : a.querySelector(".swiper-slide-shadow-top"),
          n = e.isHorizontal()
            ? a.querySelector(".swiper-slide-shadow-right")
            : a.querySelector(".swiper-slide-shadow-bottom");
        o || (o = oe("flip", a, e.isHorizontal() ? "left" : "top")),
          n || (n = oe("flip", a, e.isHorizontal() ? "right" : "bottom")),
          o && (o.style.opacity = Math.max(-p, 0)),
          n && (n.style.opacity = Math.max(p, 0));
      };
      le({
        effect: "flip",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: a, rtlTranslate: p } = e,
            o = e.params.flipEffect,
            n = be(e);
          for (let c = 0; c < a.length; c += 1) {
            const u = a[c];
            let l = u.progress;
            e.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(u.progress, 1), -1));
            const d = u.swiperSlideOffset;
            let m = -180 * l,
              g = 0,
              w = e.params.cssMode ? -d - e.translate : -d,
              h = 0;
            e.isHorizontal()
              ? p && (m = -m)
              : ((h = w), (w = 0), (g = -m), (m = 0)),
              (u.style.zIndex = -Math.abs(Math.round(l)) + a.length),
              o.slideShadows && r(u, l);
            const f = `translate3d(${w}px, ${h}px, 0px) rotateX(${n(
              g
            )}deg) rotateY(${n(m)}deg)`;
            he(0, u).style.transform = f;
          }
        },
        setTransition: (a) => {
          const p = e.slides.map((o) => re(o));
          p.forEach((o) => {
            (o.style.transitionDuration = `${a}ms`),
              o
                .querySelectorAll(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .forEach((n) => {
                  n.style.transitionDuration = `${a}ms`;
                });
          }),
            xe({ swiper: e, duration: a, transformElements: p });
        },
        recreateShadows: () => {
          e.params.flipEffect,
            e.slides.forEach((a) => {
              let p = a.progress;
              e.params.flipEffect.limitRotation &&
                (p = Math.max(Math.min(a.progress, 1), -1)),
                r(a, p);
            });
        },
        getEffectParams: () => e.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
        },
      }),
        le({
          effect: "coverflow",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { width: r, height: a, slides: p, slidesSizesGrid: o } = e,
              n = e.params.coverflowEffect,
              c = e.isHorizontal(),
              u = e.translate,
              l = c ? r / 2 - u : a / 2 - u,
              d = c ? n.rotate : -n.rotate,
              m = n.depth,
              g = be(e);
            for (let w = 0, h = p.length; w < h; w += 1) {
              const f = p[w],
                y = o[w],
                T = (l - f.swiperSlideOffset - y / 2) / y,
                S =
                  typeof n.modifier == "function"
                    ? n.modifier(T)
                    : T * n.modifier;
              let M = c ? d * S : 0,
                I = c ? 0 : d * S,
                k = -m * Math.abs(S),
                L = n.stretch;
              typeof L == "string" &&
                L.indexOf("%") !== -1 &&
                (L = (parseFloat(n.stretch) / 100) * y);
              let z = c ? 0 : L * S,
                b = c ? L * S : 0,
                v = 1 - (1 - n.scale) * Math.abs(S);
              Math.abs(b) < 0.001 && (b = 0),
                Math.abs(z) < 0.001 && (z = 0),
                Math.abs(k) < 0.001 && (k = 0),
                Math.abs(M) < 0.001 && (M = 0),
                Math.abs(I) < 0.001 && (I = 0),
                Math.abs(v) < 0.001 && (v = 0);
              const x = `translate3d(${b}px,${z}px,${k}px)  rotateX(${g(
                I
              )}deg) rotateY(${g(M)}deg) scale(${v})`;
              if (
                ((he(0, f).style.transform = x),
                (f.style.zIndex = 1 - Math.abs(Math.round(S))),
                n.slideShadows)
              ) {
                let E = c
                    ? f.querySelector(".swiper-slide-shadow-left")
                    : f.querySelector(".swiper-slide-shadow-top"),
                  P = c
                    ? f.querySelector(".swiper-slide-shadow-right")
                    : f.querySelector(".swiper-slide-shadow-bottom");
                E || (E = oe("coverflow", f, c ? "left" : "top")),
                  P || (P = oe("coverflow", f, c ? "right" : "bottom")),
                  E && (E.style.opacity = S > 0 ? S : 0),
                  P && (P.style.opacity = -S > 0 ? -S : 0);
              }
            }
          },
          setTransition: (r) => {
            e.slides
              .map((a) => re(a))
              .forEach((a) => {
                (a.style.transitionDuration = `${r}ms`),
                  a
                    .querySelectorAll(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .forEach((p) => {
                      p.style.transitionDuration = `${r}ms`;
                    });
              });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        creativeEffect: {
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const r = (a) => (typeof a == "string" ? a : `${a}px`);
      le({
        effect: "creative",
        swiper: e,
        on: s,
        setTranslate: () => {
          const { slides: a, wrapperEl: p, slidesSizesGrid: o } = e,
            n = e.params.creativeEffect,
            { progressMultiplier: c } = n,
            u = e.params.centeredSlides,
            l = be(e);
          if (u) {
            const d = o[0] / 2 - e.params.slidesOffsetBefore || 0;
            p.style.transform = `translateX(calc(50% - ${d}px))`;
          }
          for (let d = 0; d < a.length; d += 1) {
            const m = a[d],
              g = m.progress,
              w = Math.min(
                Math.max(m.progress, -n.limitProgress),
                n.limitProgress
              );
            let h = w;
            u ||
              (h = Math.min(
                Math.max(m.originalProgress, -n.limitProgress),
                n.limitProgress
              ));
            const f = m.swiperSlideOffset,
              y = [e.params.cssMode ? -f - e.translate : -f, 0, 0],
              T = [0, 0, 0];
            let S = !1;
            e.isHorizontal() || ((y[1] = y[0]), (y[0] = 0));
            let M = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            w < 0
              ? ((M = n.next), (S = !0))
              : w > 0 && ((M = n.prev), (S = !0)),
              y.forEach((x, E) => {
                y[E] = `calc(${x}px + (${r(M.translate[E])} * ${Math.abs(
                  w * c
                )}))`;
              }),
              T.forEach((x, E) => {
                let P = M.rotate[E] * Math.abs(w * c);
                T[E] = P;
              }),
              (m.style.zIndex = -Math.abs(Math.round(g)) + a.length);
            const I = y.join(", "),
              k = `rotateX(${l(T[0])}deg) rotateY(${l(T[1])}deg) rotateZ(${l(
                T[2]
              )}deg)`,
              L =
                h < 0
                  ? `scale(${1 + (1 - M.scale) * h * c})`
                  : `scale(${1 - (1 - M.scale) * h * c})`,
              z =
                h < 0
                  ? 1 + (1 - M.opacity) * h * c
                  : 1 - (1 - M.opacity) * h * c,
              b = `translate3d(${I}) ${k} ${L}`;
            if ((S && M.shadow) || !S) {
              let x = m.querySelector(".swiper-slide-shadow");
              if ((!x && M.shadow && (x = oe("creative", m)), x)) {
                const E = n.shadowPerProgress ? w * (1 / n.limitProgress) : w;
                x.style.opacity = Math.min(Math.max(Math.abs(E), 0), 1);
              }
            }
            const v = he(0, m);
            (v.style.transform = b),
              (v.style.opacity = z),
              M.origin && (v.style.transformOrigin = M.origin);
          }
        },
        setTransition: (a) => {
          const p = e.slides.map((o) => re(o));
          p.forEach((o) => {
            (o.style.transitionDuration = `${a}ms`),
              o.querySelectorAll(".swiper-slide-shadow").forEach((n) => {
                n.style.transitionDuration = `${a}ms`;
              });
          }),
            xe({ swiper: e, duration: a, transformElements: p, allSlides: !0 });
        },
        perspective: () => e.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !e.params.cssMode,
        }),
      });
    },
    function (i) {
      let { swiper: e, extendParams: t, on: s } = i;
      t({
        cardsEffect: {
          slideShadows: !0,
          rotate: !0,
          perSlideRotate: 2,
          perSlideOffset: 8,
        },
      }),
        le({
          effect: "cards",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: r, activeIndex: a, rtlTranslate: p } = e,
              o = e.params.cardsEffect,
              { startTranslate: n, isTouched: c } = e.touchEventsData,
              u = p ? -e.translate : e.translate;
            for (let l = 0; l < r.length; l += 1) {
              const d = r[l],
                m = d.progress,
                g = Math.min(Math.max(m, -4), 4);
              let w = d.swiperSlideOffset;
              e.params.centeredSlides &&
                !e.params.cssMode &&
                (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides &&
                  e.params.cssMode &&
                  (w -= r[0].swiperSlideOffset);
              let h = e.params.cssMode ? -w - e.translate : -w,
                f = 0;
              const y = -100 * Math.abs(g);
              let T = 1,
                S = -o.perSlideRotate * g,
                M = o.perSlideOffset - 0.75 * Math.abs(g);
              const I =
                  e.virtual && e.params.virtual.enabled
                    ? e.virtual.from + l
                    : l,
                k =
                  (I === a || I === a - 1) &&
                  g > 0 &&
                  g < 1 &&
                  (c || e.params.cssMode) &&
                  u < n,
                L =
                  (I === a || I === a + 1) &&
                  g < 0 &&
                  g > -1 &&
                  (c || e.params.cssMode) &&
                  u > n;
              if (k || L) {
                const v = (1 - Math.abs((Math.abs(g) - 0.5) / 0.5)) ** 0.5;
                (S += -28 * g * v),
                  (T += -0.5 * v),
                  (M += 96 * v),
                  (f = -25 * v * Math.abs(g) + "%");
              }
              if (
                ((h =
                  g < 0
                    ? `calc(${h}px ${p ? "-" : "+"} (${M * Math.abs(g)}%))`
                    : g > 0
                    ? `calc(${h}px ${p ? "-" : "+"} (-${M * Math.abs(g)}%))`
                    : `${h}px`),
                !e.isHorizontal())
              ) {
                const v = f;
                (f = h), (h = v);
              }
              const z = g < 0 ? "" + (1 + (1 - T) * g) : "" + (1 - (1 - T) * g),
                b = `
        translate3d(${h}, ${f}, ${y}px)
        rotateZ(${o.rotate ? (p ? -S : S) : 0}deg)
        scale(${z})
      `;
              if (o.slideShadows) {
                let v = d.querySelector(".swiper-slide-shadow");
                v || (v = oe("cards", d)),
                  v &&
                    (v.style.opacity = Math.min(
                      Math.max((Math.abs(g) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              (d.style.zIndex = -Math.abs(Math.round(m)) + r.length),
                (he(0, d).style.transform = b);
            }
          },
          setTransition: (r) => {
            const a = e.slides.map((p) => re(p));
            a.forEach((p) => {
              (p.style.transitionDuration = `${r}ms`),
                p.querySelectorAll(".swiper-slide-shadow").forEach((o) => {
                  o.style.transitionDuration = `${r}ms`;
                });
            }),
              xe({ swiper: e, duration: r, transformElements: a });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
    },
  ];
  Z.use(zt);
  const Se = [
    "eventsPrefix",
    "injectStyles",
    "injectStylesUrls",
    "modules",
    "init",
    "_direction",
    "oneWayMovement",
    "swiperElementNodeName",
    "touchEventsTarget",
    "initialSlide",
    "_speed",
    "cssMode",
    "updateOnWindowResize",
    "resizeObserver",
    "nested",
    "focusableElements",
    "_enabled",
    "_width",
    "_height",
    "preventInteractionOnTransition",
    "userAgent",
    "url",
    "_edgeSwipeDetection",
    "_edgeSwipeThreshold",
    "_freeMode",
    "_autoHeight",
    "setWrapperSize",
    "virtualTranslate",
    "_effect",
    "breakpoints",
    "breakpointsBase",
    "_spaceBetween",
    "_slidesPerView",
    "maxBackfaceHiddenSlides",
    "_grid",
    "_slidesPerGroup",
    "_slidesPerGroupSkip",
    "_slidesPerGroupAuto",
    "_centeredSlides",
    "_centeredSlidesBounds",
    "_slidesOffsetBefore",
    "_slidesOffsetAfter",
    "normalizeSlideIndex",
    "_centerInsufficientSlides",
    "_watchOverflow",
    "roundLengths",
    "touchRatio",
    "touchAngle",
    "simulateTouch",
    "_shortSwipes",
    "_longSwipes",
    "longSwipesRatio",
    "longSwipesMs",
    "_followFinger",
    "allowTouchMove",
    "_threshold",
    "touchMoveStopPropagation",
    "touchStartPreventDefault",
    "touchStartForcePreventDefault",
    "touchReleaseOnEdges",
    "uniqueNavElements",
    "_resistance",
    "_resistanceRatio",
    "_watchSlidesProgress",
    "_grabCursor",
    "preventClicks",
    "preventClicksPropagation",
    "_slideToClickedSlide",
    "_loop",
    "loopAdditionalSlides",
    "loopAddBlankSlides",
    "loopPreventsSliding",
    "_rewind",
    "_allowSlidePrev",
    "_allowSlideNext",
    "_swipeHandler",
    "_noSwiping",
    "noSwipingClass",
    "noSwipingSelector",
    "passiveListeners",
    "containerModifierClass",
    "slideClass",
    "slideActiveClass",
    "slideVisibleClass",
    "slideFullyVisibleClass",
    "slideNextClass",
    "slidePrevClass",
    "slideBlankClass",
    "wrapperClass",
    "lazyPreloaderClass",
    "lazyPreloadPrevNext",
    "runCallbacksOnInit",
    "observer",
    "observeParents",
    "observeSlideChildren",
    "a11y",
    "_autoplay",
    "_controller",
    "coverflowEffect",
    "cubeEffect",
    "fadeEffect",
    "flipEffect",
    "creativeEffect",
    "cardsEffect",
    "hashNavigation",
    "history",
    "keyboard",
    "mousewheel",
    "_navigation",
    "_pagination",
    "parallax",
    "_scrollbar",
    "_thumbs",
    "virtual",
    "zoom",
    "control",
  ];
  function de(i) {
    return (
      typeof i == "object" &&
      i !== null &&
      i.constructor &&
      Object.prototype.toString.call(i).slice(8, -1) === "Object" &&
      !i.__swiper__
    );
  }
  function He(i, e) {
    const t = ["__proto__", "constructor", "prototype"];
    Object.keys(e)
      .filter((s) => t.indexOf(s) < 0)
      .forEach((s) => {
        i[s] === void 0
          ? (i[s] = e[s])
          : de(e[s]) && de(i[s]) && Object.keys(e[s]).length > 0
          ? e[s].__swiper__
            ? (i[s] = e[s])
            : He(i[s], e[s])
          : (i[s] = e[s]);
      });
  }
  function Ee(i) {
    return (
      i === void 0 && (i = ""),
      i.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""))
    );
  }
  const Je = (i) => {
      if (parseFloat(i) === Number(i)) return Number(i);
      if (i === "true" || i === "") return !0;
      if (i === "false") return !1;
      if (i === "null") return null;
      if (i !== "undefined") {
        if (
          typeof i == "string" &&
          i.includes("{") &&
          i.includes("}") &&
          i.includes('"')
        ) {
          let e;
          try {
            e = JSON.parse(i);
          } catch {
            e = i;
          }
          return e;
        }
        return i;
      }
    },
    et = [
      "a11y",
      "autoplay",
      "controller",
      "cards-effect",
      "coverflow-effect",
      "creative-effect",
      "cube-effect",
      "fade-effect",
      "flip-effect",
      "free-mode",
      "grid",
      "hash-navigation",
      "history",
      "keyboard",
      "mousewheel",
      "navigation",
      "pagination",
      "parallax",
      "scrollbar",
      "thumbs",
      "virtual",
      "zoom",
    ];
  function tt(i, e, t) {
    const s = {},
      r = {};
    He(s, De);
    const a = [...Se, "on"],
      p = a.map((n) => n.replace(/_/, ""));
    a.forEach((n) => {
      (n = n.replace("_", "")), i[n] !== void 0 && (r[n] = i[n]);
    });
    const o = [...i.attributes];
    return (
      typeof e == "string" &&
        t !== void 0 &&
        o.push({ name: e, value: de(t) ? { ...t } : t }),
      o.forEach((n) => {
        const c = et.filter((u) => n.name.indexOf(`${u}-`) === 0)[0];
        if (c) {
          const u = Ee(c),
            l = Ee(n.name.split(`${c}-`)[1]);
          r[u] === void 0 && (r[u] = {}),
            r[u] === !0 && (r[u] = { enabled: !0 }),
            (r[u][l] = Je(n.value));
        } else {
          const u = Ee(n.name);
          if (!p.includes(u)) return;
          const l = Je(n.value);
          r[u] && et.includes(n.name) && !de(l)
            ? (r[u].constructor !== Object && (r[u] = {}), (r[u].enabled = !!l))
            : (r[u] = l);
        }
      }),
      He(s, r),
      s.navigation
        ? (s.navigation = {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
            ...(s.navigation !== !0 ? s.navigation : {}),
          })
        : s.navigation === !1 && delete s.navigation,
      s.scrollbar
        ? (s.scrollbar = {
            el: ".swiper-scrollbar",
            ...(s.scrollbar !== !0 ? s.scrollbar : {}),
          })
        : s.scrollbar === !1 && delete s.scrollbar,
      s.pagination
        ? (s.pagination = {
            el: ".swiper-pagination",
            ...(s.pagination !== !0 ? s.pagination : {}),
          })
        : s.pagination === !1 && delete s.pagination,
      { params: s, passedParams: r }
    );
  }
  const kt =
      ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}",
    st =
      typeof window > "u" || typeof HTMLElement > "u" ? class {} : HTMLElement,
    it = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `,
    at = (i, e) => {
      if (typeof CSSStyleSheet < "u" && i.adoptedStyleSheets) {
        const t = new CSSStyleSheet();
        t.replaceSync(e), (i.adoptedStyleSheets = [t]);
      } else {
        const t = document.createElement("style");
        (t.rel = "stylesheet"), (t.textContent = e), i.appendChild(t);
      }
    };
  class rt extends st {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    static get nextButtonSvg() {
      return it;
    }
    static get prevButtonSvg() {
      return it.replace(
        "/></svg>",
        ' transform-origin="center" transform="rotate(180)"/></svg>'
      );
    }
    cssStyles() {
      return [
        kt,
        ...(this.injectStyles && Array.isArray(this.injectStyles)
          ? this.injectStyles
          : []),
      ].join(`
`);
    }
    cssLinks() {
      return this.injectStylesUrls || [];
    }
    calcSlideSlots() {
      const e = this.slideSlots || 0,
        t = [...this.querySelectorAll("[slot^=slide-]")].map((s) =>
          parseInt(s.getAttribute("slot").split("slide-")[1], 10)
        );
      if (
        ((this.slideSlots = t.length ? Math.max(...t) + 1 : 0), this.rendered)
      ) {
        if (this.slideSlots > e)
          for (let s = e; s < this.slideSlots; s += 1) {
            const r = document.createElement("swiper-slide");
            r.setAttribute("part", `slide slide-${s + 1}`);
            const a = document.createElement("slot");
            a.setAttribute("name", `slide-${s + 1}`),
              r.appendChild(a),
              this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r);
          }
        else if (this.slideSlots < e) {
          const s = this.swiper.slides;
          for (let r = s.length - 1; r >= 0; r -= 1)
            r > this.slideSlots && s[r].remove();
        }
      }
    }
    render() {
      if (this.rendered) return;
      this.calcSlideSlots();
      let e = this.cssStyles();
      this.slideSlots > 0 &&
        (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")),
        e.length && at(this.shadowRoot, e),
        this.cssLinks().forEach((r) => {
          if (this.shadowRoot.querySelector(`link[href="${r}"]`)) return;
          const a = document.createElement("link");
          (a.rel = "stylesheet"), (a.href = r), this.shadowRoot.appendChild(a);
        });
      const t = document.createElement("div");
      var s;
      t.classList.add("swiper"),
        (t.part = "container"),
        (t.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({ length: this.slideSlots })
          .map(
            (r, a) => `
        <swiper-slide part="slide slide-${a}">
          <slot name="slide-${a}"></slot>
        </swiper-slide>
        `
          )
          .join("")}
      </div>
      <slot name="container-end"></slot>
      ${
        ((s = this.passedParams),
        s === void 0 && (s = {}),
        s.navigation &&
        s.navigation.nextEl === void 0 &&
        s.navigation.prevEl === void 0
          ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      `
          : "")
      }
      ${
        (function (r) {
          return (
            r === void 0 && (r = {}), r.pagination && r.pagination.el === void 0
          );
        })(this.passedParams)
          ? `
        <div part="pagination" class="swiper-pagination"></div>
      `
          : ""
      }
      ${
        (function (r) {
          return (
            r === void 0 && (r = {}), r.scrollbar && r.scrollbar.el === void 0
          );
        })(this.passedParams)
          ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      `
          : ""
      }
    `),
        this.shadowRoot.appendChild(t),
        (this.rendered = !0);
    }
    initialize() {
      var e = this;
      if (this.initialized) return;
      this.initialized = !0;
      const { params: t, passedParams: s } = tt(this);
      (this.swiperParams = t),
        (this.passedParams = s),
        delete this.swiperParams.init,
        this.render(),
        (this.swiper = new Z(this.shadowRoot.querySelector(".swiper"), {
          ...(t.virtual ? {} : { observer: !0 }),
          ...t,
          touchEventsTarget: "container",
          onAny: function (r) {
            r === "observerUpdate" && e.calcSlideSlots();
            const a = t.eventsPrefix
              ? `${t.eventsPrefix}${r.toLowerCase()}`
              : r.toLowerCase();
            for (
              var p = arguments.length, o = new Array(p > 1 ? p - 1 : 0), n = 1;
              n < p;
              n++
            )
              o[n - 1] = arguments[n];
            const c = new CustomEvent(a, {
              detail: o,
              bubbles: r !== "hashChange",
              cancelable: !0,
            });
            e.dispatchEvent(c);
          },
        }));
    }
    connectedCallback() {
      (this.initialized &&
        this.nested &&
        this.closest("swiper-slide") &&
        this.closest("swiper-slide").swiperLoopMoveDOM) ||
        (this.init !== !1 &&
          this.getAttribute("init") !== "false" &&
          this.initialize());
    }
    disconnectedCallback() {
      (this.nested &&
        this.closest("swiper-slide") &&
        this.closest("swiper-slide").swiperLoopMoveDOM) ||
        (this.swiper && this.swiper.destroy && this.swiper.destroy(),
        (this.initialized = !1));
    }
    updateSwiperOnPropChange(e, t) {
      const { params: s, passedParams: r } = tt(this, e, t);
      (this.passedParams = r),
        (this.swiperParams = s),
        (this.swiper && this.swiper.params[e] === t) ||
          (function (a) {
            let {
              swiper: p,
              slides: o,
              passedParams: n,
              changedParams: c,
              nextEl: u,
              prevEl: l,
              scrollbarEl: d,
              paginationEl: m,
            } = a;
            const g = c.filter(
                (P) =>
                  P !== "children" && P !== "direction" && P !== "wrapperClass"
              ),
              {
                params: w,
                pagination: h,
                navigation: f,
                scrollbar: y,
                virtual: T,
                thumbs: S,
              } = p;
            let M, I, k, L, z, b, v, x;
            c.includes("thumbs") &&
              n.thumbs &&
              n.thumbs.swiper &&
              !n.thumbs.swiper.destroyed &&
              w.thumbs &&
              (!w.thumbs.swiper || w.thumbs.swiper.destroyed) &&
              (M = !0),
              c.includes("controller") &&
                n.controller &&
                n.controller.control &&
                w.controller &&
                !w.controller.control &&
                (I = !0),
              c.includes("pagination") &&
                n.pagination &&
                (n.pagination.el || m) &&
                (w.pagination || w.pagination === !1) &&
                h &&
                !h.el &&
                (k = !0),
              c.includes("scrollbar") &&
                n.scrollbar &&
                (n.scrollbar.el || d) &&
                (w.scrollbar || w.scrollbar === !1) &&
                y &&
                !y.el &&
                (L = !0),
              c.includes("navigation") &&
                n.navigation &&
                (n.navigation.prevEl || l) &&
                (n.navigation.nextEl || u) &&
                (w.navigation || w.navigation === !1) &&
                f &&
                !f.prevEl &&
                !f.nextEl &&
                (z = !0);
            const E = (P) => {
              p[P] &&
                (p[P].destroy(),
                P === "navigation"
                  ? (p.isElement &&
                      (p[P].prevEl.remove(), p[P].nextEl.remove()),
                    (w[P].prevEl = void 0),
                    (w[P].nextEl = void 0),
                    (p[P].prevEl = void 0),
                    (p[P].nextEl = void 0))
                  : (p.isElement && p[P].el.remove(),
                    (w[P].el = void 0),
                    (p[P].el = void 0)));
            };
            c.includes("loop") &&
              p.isElement &&
              (w.loop && !n.loop
                ? (b = !0)
                : !w.loop && n.loop
                ? (v = !0)
                : (x = !0)),
              g.forEach((P) => {
                if (de(w[P]) && de(n[P]))
                  Object.assign(w[P], n[P]),
                    (P !== "navigation" &&
                      P !== "pagination" &&
                      P !== "scrollbar") ||
                      !("enabled" in n[P]) ||
                      n[P].enabled ||
                      E(P);
                else {
                  const C = n[P];
                  (C !== !0 && C !== !1) ||
                  (P !== "navigation" &&
                    P !== "pagination" &&
                    P !== "scrollbar")
                    ? (w[P] = n[P])
                    : C === !1 && E(P);
                }
              }),
              g.includes("controller") &&
                !I &&
                p.controller &&
                p.controller.control &&
                w.controller &&
                w.controller.control &&
                (p.controller.control = w.controller.control),
              c.includes("children") && o && T && w.virtual.enabled
                ? ((T.slides = o), T.update(!0))
                : c.includes("virtual") &&
                  T &&
                  w.virtual.enabled &&
                  (o && (T.slides = o), T.update(!0)),
              c.includes("children") && o && w.loop && (x = !0),
              M && S.init() && S.update(!0),
              I && (p.controller.control = w.controller.control),
              k &&
                (!p.isElement ||
                  (m && typeof m != "string") ||
                  ((m = document.createElement("div")),
                  m.classList.add("swiper-pagination"),
                  m.part.add("pagination"),
                  p.el.appendChild(m)),
                m && (w.pagination.el = m),
                h.init(),
                h.render(),
                h.update()),
              L &&
                (!p.isElement ||
                  (d && typeof d != "string") ||
                  ((d = document.createElement("div")),
                  d.classList.add("swiper-scrollbar"),
                  d.part.add("scrollbar"),
                  p.el.appendChild(d)),
                d && (w.scrollbar.el = d),
                y.init(),
                y.updateSize(),
                y.setTranslate()),
              z &&
                (p.isElement &&
                  ((u && typeof u != "string") ||
                    ((u = document.createElement("div")),
                    u.classList.add("swiper-button-next"),
                    (u.innerHTML = p.hostEl.constructor.nextButtonSvg),
                    u.part.add("button-next"),
                    p.el.appendChild(u)),
                  (l && typeof l != "string") ||
                    ((l = document.createElement("div")),
                    l.classList.add("swiper-button-prev"),
                    (l.innerHTML = p.hostEl.constructor.prevButtonSvg),
                    l.part.add("button-prev"),
                    p.el.appendChild(l))),
                u && (w.navigation.nextEl = u),
                l && (w.navigation.prevEl = l),
                f.init(),
                f.update()),
              c.includes("allowSlideNext") &&
                (p.allowSlideNext = n.allowSlideNext),
              c.includes("allowSlidePrev") &&
                (p.allowSlidePrev = n.allowSlidePrev),
              c.includes("direction") && p.changeDirection(n.direction, !1),
              (b || x) && p.loopDestroy(),
              (v || x) && p.loopCreate(),
              p.update();
          })({
            swiper: this.swiper,
            passedParams: this.passedParams,
            changedParams: [Ee(e)],
            ...(e === "navigation" && r[e]
              ? { prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }
              : {}),
            ...(e === "pagination" && r[e]
              ? { paginationEl: ".swiper-pagination" }
              : {}),
            ...(e === "scrollbar" && r[e]
              ? { scrollbarEl: ".swiper-scrollbar" }
              : {}),
          });
    }
    attributeChangedCallback(e, t, s) {
      this.initialized &&
        (t === "true" && s === null && (s = !1),
        this.updateSwiperOnPropChange(e, s));
    }
    static get observedAttributes() {
      return Se.filter((e) => e.includes("_")).map((e) =>
        e
          .replace(/[A-Z]/g, (t) => `-${t}`)
          .replace("_", "")
          .toLowerCase()
      );
    }
  }
  Se.forEach((i) => {
    i !== "init" &&
      ((i = i.replace("_", "")),
      Object.defineProperty(rt.prototype, i, {
        configurable: !0,
        get() {
          return (this.passedParams || {})[i];
        },
        set(e) {
          this.passedParams || (this.passedParams = {}),
            (this.passedParams[i] = e),
            this.initialized && this.updateSwiperOnPropChange(i, e);
        },
      }));
  });
  class $t extends st {
    constructor() {
      super(), this.attachShadow({ mode: "open" });
    }
    render() {
      const e =
        this.lazy ||
        this.getAttribute("lazy") === "" ||
        this.getAttribute("lazy") === "true";
      if (
        (at(
          this.shadowRoot,
          "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}"
        ),
        this.shadowRoot.appendChild(document.createElement("slot")),
        e)
      ) {
        const t = document.createElement("div");
        t.classList.add("swiper-lazy-preloader"),
          t.part.add("preloader"),
          this.shadowRoot.appendChild(t);
      }
    }
    initialize() {
      this.render();
    }
    connectedCallback() {
      this.initialize();
    }
  }
  typeof window < "u" &&
    (window.SwiperElementRegisterParams = (i) => {
      Se.push(...i);
    }),
    typeof window < "u" &&
      (window.customElements.get("swiper-container") ||
        window.customElements.define("swiper-container", rt),
      window.customElements.get("swiper-slide") ||
        window.customElements.define("swiper-slide", $t));
})();
const It = "https://digi-api.vercel.app",
  Y = async (O) => {
    try {
      return await (await fetch(`${It}${O}`)).json();
    } catch (_) {
      console.log(_.message);
    }
  },
  At = async () => {
    try {
      const _ = (await Y("/icons")).map(
        ($) => `<a href="#"
        class="w-[20%] lg:w-[10%] md:w-[18%] h-fit p-[20px] flex justify-between items-center flex-col gap-y-2">
        <img width="52px" height="52px" src="${$.src}" alt="${$.alt}">
        <div class="h-[40px] text-[12px] text-center">${$.text}</div>
    </a>`
      );
      document.querySelector(".iconItems").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Ot = async () => {
    try {
      const _ = (await Y("/storySlider")).map(
        (
          $
        ) => `<swiper-slide class="w-full p-[10px] flex flex-col justify-center items-center gap-[10px]">
                    <div class="p-[2.5px]  bg-gradient-to-r from-[#e03d96] to-[#7d4c9e] w-fit rounded-full">
                        <div class="w-[74px] h-[74px] bg-white p-[3px] rounded-full">
                            <img class="rounded-full" src="${$.src}" alt="${$.alt}">
                        </div>
                    </div>
                    <div class="text-[12px] text-black/70 text-center line-clamp-2">${$.text}</div>
                </swiper-slide>`
      );
      document.querySelector(".storySlider").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Dt = async () => {
    try {
      const _ = (await Y("/categorizeShopping")).map(
        (
          $
        ) => `<div class="w-[25%] lg:w-[20%] xl:w-[12.5%] flex flex-col justify-between
       items-center gap-[10px]">
          <img class="w-[60px] lg:w-[80px] xl:w-[90px] h-[60px] lg:h-[80px] xl:h-[90px] " src="${$.src}" alt="${$.alt}">
          <div class="text-[14px] w-[80%] h-[50px] text-center ">${$.text}</div>
        </div>`
      );
      document.querySelector(".categorizeShoppingItems").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  _t = async () => {
    try {
      const _ = (await Y("/clientTaste")).map(
          (
            q
          ) => `<div class="w-full md:w-1/2 lg:w-1/4 p-[20px] flex flex-col gap-3">
                <div class="flex flex-col gap-y-2">
                    <div class="">${q.category}</div>
                    <div class="text-[12px] text-black/70">بر اساس سلیقه شما</div>
                </div>
                <div class="flex flex-wrap">
                    <img class="w-1/2 p-1" src="${q.src1}" alt="">
                    <img class="w-1/2 p-1" src="${q.src2}" alt="">
                    <img class="w-1/2 p-1" src="${q.src3}" alt="">
                    <img class="w-1/2 p-1" src="${q.src4}" alt="">
                </div>
                <div class="w-full text-blue flex gap-1 justify-center items-center">
                    مشاهده همه
                    <img src="./Images/SVG/blueLeft-falsh.svg" alt="blueLeft-falsh">
                </div>
            </div>`
        ),
        $ = document.querySelector(".clientTasteItems");
      $
        ? ($.innerHTML = _.join(""))
        : console.error("Element with class 'clientTasteItems' not found.");
    } catch (O) {
      console.log(O.message);
    }
  },
  Gt = async () => {
    try {
      const _ = (await Y("/clientTaste2")).map(
          (
            q
          ) => `<div class="w-full md:w-1/2 lg:w-1/4 p-[20px] flex flex-col gap-3">
                <div class="flex flex-col gap-y-2">
                    <div class="">${q.category}</div>
                    <div class="text-[12px] text-black/70">بر اساس سلیقه شما</div>
                </div>
                <div class="flex flex-wrap">
                    <img class="w-1/2 p-1" src="${q.src1}" alt="">
                    <img class="w-1/2 p-1" src="${q.src2}" alt="">
                    <img class="w-1/2 p-1" src="${q.src3}" alt="">
                    <img class="w-1/2 p-1" src="${q.src4}" alt="">
                </div>
                <div class="w-full text-blue flex gap-1 justify-center items-center">
                    مشاهده همه
                    <img src="./Images/SVG/blueLeft-falsh.svg" alt="blueLeft-falsh">
                </div>
            </div>`
        ),
        $ = document.querySelector(".clientTasteItems2");
      $
        ? ($.innerHTML = _.join(""))
        : console.error("Element with class 'clientTaste2Items' not found.");
    } catch (O) {
      console.log(O.message);
    }
  },
  Bt = async () => {
    try {
      const _ = (await Y("/mostPopularBrands")).map(
        ($) =>
          `<swiper-slide class="flex justify-center items-center"><img class="w-[150px] h-[120px] py-[10px] px-[20px] object-contain" src="${$.src}" alt="${$.alt}"></swiper-slide>`
      );
      document.querySelector(".popularBrandsSwiper").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Ht = async () => {
    try {
      const _ = (await Y("/partnerShip")).map(
        (
          $
        ) => `<div class="w-[48%] lg:w-[24%] overflow-hidden flex justify-center items-center ">
        <img class="rounded-[20px]" src="${$.src}" alt="${$.alt}">
      </div>`
      );
      document.querySelector(".partnerShip").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  jt = async () => {
    try {
      const _ = (await Y("/partnerShip2")).map(
        ($) => `<div class="w-full lg:w-[48%]">
        <img class="rounded-[20px] m-auto" src="${$.src}" alt="${$.alt}">
      </div>`
      );
      document.querySelector(".partnerShip2").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Nt = async () => {
    try {
      const _ = (await Y("/partnerShip3")).map(
        ($) => `<div class="w-full lg:w-[48%]">
        <img class="rounded-[20px] m-auto" src="${$.src}" alt="${$.alt}">
      </div>`
      );
      document.querySelector(".partnerShip3").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  qt = async () => {
    try {
      const _ = (await Y("/partnerShip4")).map(
        ($) => `<img src="${$.src}" alt="${$.alt}">`
      );
      document.querySelector(".partnerShip4").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Rt = async () => {
    try {
      const _ = (await Y("/selectedOffer")).map(
        (
          $
        ) => `<div class="w-[50%] lg:w-[20%] 2xl:w-[16.5%] p-3 border-r-[1px] border-b-[1px]">
          <div class="w-full flex justify-center items-center"><img width="150px" height="150px" src="${$.src}"
              alt="${$.alt}"></div>
          <div class="flex justify-between items-center w-[85%] m-auto">
            <div class="bg-[#D2334A] px-2 py-[2px] rounded-2xl text-white">
              ${$.offPercent}
            </div>
            <div class="flex items-center">
              <div class="">${$.price}</div>
              <img src="./Images/SVG/toman.svg" alt="toman">
            </div>
          </div>
          <div class="w-[85%] m-auto line-through text-black/20 text-left ml-[20px]">${$.purePrice}</div>
        </div>`
      );
      document.querySelector(".SelectedOfferProducts").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Xt = async () => {
    try {
      const _ = (await Y("/readingBlog")).map(
        (
          $
        ) => `<div class="w-full lg:w-[24%] border-solid border-[0.5px] border-black/20 rounded-lg overflow-hidden mt-3">
        <img src="${$.src}" alt="${$.alt}">
        <div class="text-[12px] p-3 h-[60px] flex justify-center items-center">${$.text}</div>
      </div>`
      );
      document.querySelector(".readingBlogItem").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Yt = async () => {
    try {
      const _ = (await Y("/mostSell")).map(
        ($) => `<swiper-slide>
                    <div class="flex justify-between items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${$.src}" alt="${$.alt}">
                        <div class="font-bold text-[30px] text-blue">${$.count}</div>
                        <div class="text-[14px] text-black/70">${$.text}</div>
                    </div>
                    <span class='w-[70%] h-[.5px] bg-black/20 block m-auto'></span>
                    <div class="flex justify-center items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${$.src2}" alt="${$.src2}">
                        <div class="font-bold text-[30px] text-blue">${$.count2}</div>
                        <div class="text-[14px] text-black/70">${$.text2}</div>
                    </div>
                    <span class='w-[70%] h-[.5px] bg-black/20 block m-auto'></span>
                    <div class="flex justify-center items-center gap-x-3 p-[15px]">
                        <img width="80px" height="80px" src="${$.src3}" alt="${$.alt3}">
                        <div class="font-bold text-[30px] text-blue">${$.count3}</div>
                        <div class="text-[14px] text-black/70">${$.text3}</div>
                    </div>

                </swiper-slide>`
      );
      document.querySelector(".mostSellItem").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Ft = () => {
    let O = new Date("Dec 13, 2024 00:00:00").getTime(),
      _ = new Date().getTime(),
      $ = O - _,
      q = 1e3,
      X = q * 60,
      j = X * 60;
    const V = Math.floor($ / j),
      te = Math.floor(($ % j) / X),
      W = Math.floor(($ % X) / q);
    (document.querySelector(".header__Banner__CountDown__hour").textContent =
      V.toString()),
      (document.querySelector(
        ".header__Banner__CountDown__minute"
      ).textContent = te.toString()),
      (document.querySelector(
        ".header__Banner__CountDown__second"
      ).textContent = W.toString());
  },
  Vt = async () => {
    try {
      const _ = (await Y("/mainSlider")).map(
        ($) =>
          `<swiper-slide><img class="rounded-[20px] lg:rounded-none" src="${$.src}" alt=""></swiper-slide>`
      );
      document.querySelector(".mainSlider").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Wt = async () => {
    try {
      const _ = (await Y("/superMarket")).map(
        (
          $
        ) => `<div class="relative w-[74px] h-[74px] bg-white rounded-full flex justify-center items-center">
                    <img width="58px" height="58px" class="rounded-full" src="${$.src}" alt="${$.alt}">
                    <div class="absolute bg-[#D32F2F] bottom-0 right-0 w-[35px] h-[20px] rounded-[20px] flex justify-center items-center text-white text-[13px] leading-[20px]">${$.offPercent}</div>
                </div>`
      );
      document.querySelector(".superMarket").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Ut = () => {
    const O = document.querySelector(".goToTopBTN"),
      _ = document.querySelector(".goToTopBTN2");
    O &&
      O.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }),
      _ &&
        _.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
  },
  Kt = async () => {
    try {
      const _ = (await Y("/features")).map(
        ($) => `<div class="w-[20%] flex flex-col justify-center items-center">
                <img src="${$.src}" alt="${$.alt}">
                <div class="text-black/70 text-[13px]">${$.text}</div>
            </div>`
      );
      document.querySelector(".features").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Zt = async () => {
    try {
      const _ = (await Y("/withDigikala")).map(
        ($) => `<a class="text-[#82858B]" href="${$.href}">
          ${$.text}
        </a>`
      );
      document.querySelector(".withDigikala").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Qt = async () => {
    try {
      const _ = (await Y("/customer")).map(
        ($) => `<a class="text-[#82858B]" href="${$.href}">
          ${$.text}
        </a>`
      );
      document.querySelector(".customer").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  Jt = async () => {
    try {
      const _ = (await Y("/guide")).map(
        ($) => `<a class="text-[#82858B]" href="${$.href}">
          ${$.text}
        </a>`
      );
      document.querySelector(".guide").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  },
  es = async () => {
    try {
      const _ = (await Y("/amazingSlider")).map(
        ($) => `<swiper-slide class="bg-white flex flex-col items-center">
        <img width="170px" height="170px" class="p-[10px]" src="${$.src}" alt="${$.alt}">
        <div class="h-[40px] leading-[20px] text-[12px] text-black/70 line-clamp-2 m-[10px]">${$.text}</div>
        <div class="w-full flex justify-between items-center px-[10px]">
          <div class="w-fit px-1 text-white text-[13px] bg-[#D32F2F] rounded-[30px]">${$.offPercent}</div>
          <div class="flex items-center">
            <div class="text-[15px]">${$.price}</div>
            <img src="./Images/SVG/toman.svg" alt="toman">
          </div>
        </div>
        <div class="w-full text-end line-through text-black/40 pl-[20px]">${$.purePrice}</div>
      </swiper-slide>
      `
      );
      document.querySelector(".amazingSlider").innerHTML = _.join("");
    } catch (O) {
      console.log(O.message);
    }
  };
At();
Ot();
Dt();
_t();
Gt();
Bt();
Ht();
jt();
Nt();
qt();
Rt();
Xt();
Yt();
setInterval(() => {
  Ft();
}, 1e3);
Vt();
Wt();
Ut();
Kt();
Zt();
Qt();
Jt();
es();
