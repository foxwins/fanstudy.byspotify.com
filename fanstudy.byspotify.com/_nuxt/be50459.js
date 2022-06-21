(window.webpackJsonp = window.webpackJsonp || []).push([
    [15], Array(20).concat([function(t, e, n) {
        "use strict";
        var o = n(304),
            r = new o.EventEmitter;
        r.setMaxListeners(50), e.a = r
    }, , function(t, e, n) {
        "use strict";
        var o = n(10),
            r = (n(23), n(142)),
            l = function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, o = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = o.length > 1 && void 0 !== o[1] ? o[1] : {}, t.abrupt("return", Object(r.a)(e, n));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }();
        e.a = l
    }, , , , , , , , , , function(t, e, n) {
        "use strict";
        var o = n(1),
            r = n(3),
            l = function() {
                function t() {
                    Object(o.a)(this, t), this.isFirst = !0, this.isMouseNeeded = !1, this.x = 1200 * Math.random(), this.y = 800 * Math.random(), this.easeX = this.x, this.easeY = this.y, this.easeMouseX = this.x, this.easeMouseY = this.y, this.easeSlowX = this.x, this.easeSlowY = this.y, this._mouseMoveHandler = this.mouseMoveHandler.bind(this), window.addEventListener("mousemove", this._mouseMoveHandler, {
                        passive: !0
                    })
                }
                return Object(r.a)(t, [{
                    key: "mouseMoveHandler",
                    value: function(t) {
                        this.x = t.clientX, this.y = t.clientY, this.isFirst && !this.isMouseNeeded && (this.easeMouseX = this.easeSlowX = this.easeX = this.x, this.easeMouseY = this.easeSlowY = this.easeY = this.y), this.isFirst = !1
                    }
                }, {
                    key: "setMouse",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.x = t, this.y = e, this.easeMouseX = this.easeSlowX = this.easeX = this.x, this.easeMouseY = this.easeSlowY = this.easeY = this.y
                    }
                }, {
                    key: "tick",
                    value: function() {
                        var t = this.x - this.easeX,
                            e = this.y - this.easeY,
                            n = this.x - this.easeMouseX,
                            o = this.y - this.easeMouseY,
                            r = this.x - this.easeSlowX,
                            l = this.y - this.easeSlowY;
                        this.easeX += t / 10, this.easeY += e / 10, this.easeMouseX += n / 6, this.easeMouseY += o / 6, this.easeSlowX += r / 20, this.easeSlowY += l / 20
                    }
                }]), t
            }();
        e.a = new l
    }, , , , , , , , , , , , , , , , , , , function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 15 14"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        d: "M12.7 7.604H1.386v-1h11.728L8.457 1.947l.707-.707 5.657 5.656-6.01 6.01-.707-.706L12.7 7.604z"
                    }
                })]))
            }
        }
    }, , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
                name: "close-button",
                data: function() {
                    return {}
                }
            },
            r = (n(475), n(7)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("button", {
                    staticClass: "fragments-close-button",
                    attrs: {
                        "aria-label": "close"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("closeClicked")
                        }
                    }
                }, [n("span"), t._v(" "), n("span")])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n(38);
        e.a = function(t) {
            return new(0, n(575).SplitText)(t, {
                type: "lines",
                linesClass: "line"
            }).lines.map((function(t) {
                return '<span class="line"><span class="inner">'.concat(t.innerHTML, "</span></span>")
            })).join("")
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(1),
            r = n(3),
            l = n(20),
            c = function() {
                function t() {
                    Object(o.a)(this, t), this.ease = 0, this.easeSlow = 0, this.scrollTop = 0, this._preventDefault = this.preventDefault.bind(this), this._onScroll = this.onScroll.bind(this), this._onNuxtScroll = this.onNuxtScroll.bind(this), this.tempScroll = 0, this.nuxt = document.getElementById("__layout"), this.doc = document.documentElement, window.addEventListener("scroll", this._onScroll, {
                        passive: !0
                    }), this.nuxt.addEventListener("scroll", this._onNuxtScroll, {
                        passive: !0
                    }), l.a.on("WINDOW:DOSCROLL", this.scrollTo.bind(this))
                }
                return Object(r.a)(t, [{
                    key: "onScroll",
                    value: function() {
                        this.isForceScrolling ? this.isForceScrolling = !1 : (window.pageYOffset || this.doc.scrollTop) - (this.doc.clientTop || 0) !== this.scrollTop && (this.scrollTop = (window.pageYOffset || this.doc.scrollTop) - (this.doc.clientTop || 0), this.scrollTop = Math.max(this.scrollTop, 0))
                    }
                }, {
                    key: "onNuxtScroll",
                    value: function() {
                        this.scrollTop = this.nuxt.scrollTop
                    }
                }, {
                    key: "scrollTo",
                    value: function(t) {
                        (window.innerWidth <= 1024 ? document.getElementById("__layout") : window).scrollTo({
                            top: window.innerHeight,
                            behavior: "smooth"
                        }), this.scrollTop = t
                    }
                }, {
                    key: "goTo",
                    value: function(t) {
                        (window.innerWidth <= 1024 ? document.getElementById("__layout") : window).scrollTo(0, t), this.scrollTop = t, this.ease = t, this.easeSlow = t, this.isForceScrolling = !0
                    }
                }, {
                    key: "changePage",
                    value: function(t) {
                        this.pageName = t
                    }
                }, {
                    key: "tick",
                    value: function() {
                        this.tempScroll = this.scrollTop, this.ease = Math.round(this.lerp(this.ease, this.scrollTop, .07)), this.easeSlow = Math.round(this.lerp(this.easeSlow, this.scrollTop, .05))
                    }
                }, {
                    key: "lerp",
                    value: function(t, e, n) {
                        return t + (e - t) * n
                    }
                }, {
                    key: "preventDefault",
                    value: function(t) {
                        (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
                    }
                }, {
                    key: "disableScroll",
                    value: function() {}
                }, {
                    key: "enableScroll",
                    value: function() {}
                }]), t
            }();
        e.a = new c
    }, , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(34),
            r = n(5),
            l = n(10),
            c = (n(27), n(26), n(139), n(23), n(194)),
            h = n.n(c),
            d = n(56),
            m = n(2),
            f = n(100),
            v = n(8),
            w = n(20),
            x = n(22);

        function y(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function O(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? y(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var k = {
                name: "editionPreview",
                data: function() {
                    return {
                        svgLink: h.a,
                        labels: {},
                        tagColor: ""
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(l.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(x.a)("query editionColoursQuery ($slug: String!, $locale: String!){\n  editionCollection(where: { slug: $slug }, locale: $locale, order: publishDate_DESC) {\n      items {\n        slug\n        backgroundColor\n        publishDate\n      }\n    }\n  }\n  ", {
                                        locale: t.$i18n.locale,
                                        slug: t.edition
                                    });
                                case 2:
                                    return n = e.sent, t.tagColor = n.editionCollection.items[0].backgroundColor, e.next = 6, Object(x.a)("query footerLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      figureLabel\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 6:
                                    o = e.sent, t.labels = o.commonCopyCollection.items[0];
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                mixins: [f.a],
                props: ["data", "edition", "editionLabel", "figure", "figureCount"],
                computed: O(O(O({}, Object(v.d)(["isSeamlessTransition", "isLoaderAnimationDone"])), Object(v.c)(["isTouch"])), {}, {
                    html: function() {
                        var t = this.data.title,
                            e = t.lastIndexOf(" "),
                            n = t.substring(0, e + 1),
                            o = t.substring(e + 1, t.length);
                        return "".concat(n, '<span style="white-space:nowrap">').concat(o, "</span>")
                    },
                    buttonLink: function() {
                        return '<span class="link" style="color:'.concat(this.data.backgroundColor, '" data-copy="copy link">\n        ').concat(h.a, '\n        <span class="toolkit">\n          <small class="toolkit-inner">Copied</small>\n        </span>\n      </span>\n      ')
                    },
                    dataObj: function() {
                        return this.$route.name === "index___".concat(this.$i18n.locale) ? {
                            "data-preview-slug": this.data.slug
                        } : {}
                    }
                }),
                methods: O(O({}, Object(v.b)(["set"])), {}, {
                    beforeShow: function(t) {
                        this.innerHTML = this.$refs.title.innerHTML, this.$refs.title.innerHTML = Object(d.a)(this.$refs.title), this.lines = [].slice.call(this.$el.querySelectorAll(".inner")), m.a.killTweensOf([this.$refs.tag, this.$refs.tagMobile, this.$refs.fig].concat(Object(o.a)(this.lines))), m.a.set([this.$refs.tag, this.$refs.fig], {
                            y: 0 === t ? 100 : -100,
                            opacity: 0
                        })
                    },
                    show: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (this.mustShow = !0, this.isLoaderAnimationDone && !this.isShowing) {
                            this.isShowing = !0, this.beforeShow(t), this.$el.style.opacity = 1;
                            var e = "0%",
                                n = this.isSeamlessTransition ? 0 : 1,
                                r = !0,
                                l = this.isSeamlessTransition ? 0 : .2,
                                c = this.isSeamlessTransition ? 0 : .5,
                                h = t + this.isSeamlessTransition ? 1 : 0,
                                d = "power3.out",
                                f = "all";
                            m.a.to([this.$refs.tag, this.$refs.tagMobile, this.$refs.fig], {
                                y: 0,
                                opacity: 1,
                                duration: n,
                                ease: d,
                                delay: h,
                                force3D: r,
                                clearProps: "opacity,y"
                            });
                            var v = 0 === t ? this.lines : Object(o.a)(this.lines).reverse();
                            m.a.to(v, {
                                y: e,
                                duration: n,
                                ease: d,
                                stagger: l,
                                delay: h,
                                force3D: r,
                                clearProps: f
                            }).then(this.afterShow.bind(this)), this.$refs.stroke && m.a.to([this.$refs.stroke, this.$refs.strokeBottom], {
                                scaleX: 1,
                                duration: 1.3,
                                ease: d,
                                delay: h,
                                stagger: c,
                                clearProps: f,
                                force3D: r
                            })
                        }
                    },
                    reset: function() {
                        this.$refs.title.innerHTML = this.innerHTML, this.isShowing = !1, m.a.set([this.$refs.tag, this.$refs.fig], {
                            y: 100,
                            opacity: 0
                        }), m.a.set(this.$refs.tagMobile, {
                            opacity: 0
                        }), this.$el.style.opacity = 0, this.$refs.stroke && m.a.set([this.$refs.stroke, this.$refs.strokeBottom], {
                            scaleX: 0
                        })
                    },
                    afterShow: function() {
                        this.$refs.title && (this.$refs.title.innerHTML = this.innerHTML), w.a.emit("MOUSELINK:RESET"), this.$route.name, "edition-slug___".concat(this.$i18n.locale)
                    },
                    onLinkClick: function() {
                        var t = this;
                        navigator.clipboard.writeText(window.location.href).then((function() {
                            t.link.classList.add("copied"), t.set({
                                property: "isLinkCopied",
                                value: !0
                            })
                        }), (function(t) {
                            alert("Async: Could not copy text: ", t)
                        }))
                    },
                    onLinkOut: function() {
                        var t = this;
                        setTimeout((function() {
                            t.link.classList.remove("copied"), t.set({
                                property: "isLinkCopied",
                                value: !1
                            })
                        }), 200)
                    }
                }),
                watch: {
                    isLoaderAnimationDone: function() {
                        this.mustShow && this.show()
                    }
                },
                mounted: function() {
                    var t = this;
                    this._onLinkClick = this.onLinkClick.bind(this), this._onLinkOut = this.onLinkOut.bind(this), this.$nextTick((function() {
                        m.a.set([t.$refs.tag, t.$refs.fig], {
                            y: 100,
                            opacity: 0
                        }), m.a.set(t.$refs.tagMobile, {
                            opacity: 0
                        }), t.$el.style.opacity = 0, t.$refs.stroke && m.a.set([t.$refs.stroke, t.$refs.strokeBottom], {
                            scaleX: 0
                        })
                    }))
                }
            },
            C = (n(500), n(7)),
            component = Object(C.a)(k, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("index" === t.$route.name ? "article" : "header", t._b({
                    tag: "component",
                    staticClass: "edition-preview",
                    class: t.edition
                }, "component", t.dataObj, !1), [n("div", {
                    ref: "stroke",
                    staticClass: "stroke"
                }), t._v(" "), n("div", {
                    staticClass: "content"
                }, [n("strong", {
                    ref: "tagMobile",
                    staticClass: "tag show-below-m",
                    style: {
                        color: t.tagColor
                    },
                    domProps: {
                        textContent: t._s(t.editionLabel[0].title)
                    }
                }), t._v(" "), "index" === t.$route.name ? n("n-link", {
                    class: t.isSeamlessTransition ? "clicked" : "",
                    attrs: {
                        "data-label": "view",
                        to: {
                            name: "ediiton-slug",
                            params: {
                                slug: t.data.slug
                            }
                        }
                    },
                    domProps: {
                        textContent: t._s(t.data.title)
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.set({
                                property: "isSeamlessTransition",
                                value: t.data
                            })
                        },
                        mouseenter: function(e) {
                            return t.set({
                                property: "currentShapeId",
                                value: t.data.position - 1
                            })
                        },
                        mouseleave: function(e) {
                            !t.isTouch && !t.isSeamlessTransition && t.set({
                                property: "currentShapeId",
                                value: -1
                            })
                        }
                    }
                }) : t._e(), t._v(" "), n("div", {
                    staticClass: "flex"
                }, [n("div", {
                    staticClass: "w-160 show-above-m"
                }, [n("strong", {
                    ref: "tag",
                    staticClass: "tag",
                    style: {
                        color: t.tagColor
                    },
                    domProps: {
                        textContent: t._s(t.editionLabel[0].title)
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "title"
                }, [n("h2", {
                    ref: "title",
                    staticClass: "h3",
                    domProps: {
                        innerHTML: t._s(t.html)
                    }
                })]), t._v(" "), n("div", {
                    ref: "fig",
                    staticClass: "w-560 fig"
                }, [n("div", {
                    staticClass: "w-160  show-above-m"
                }, [n("small", [t._v(t._s(t.labels.figureLabel))])]), t._v(" "), n("span", {
                    ref: "number",
                    staticClass: "h2 number",
                    domProps: {
                        innerHTML: t._s(t.figure < 10 ? "0" + (t.figure + 1) : "" + t.figure)
                    }
                }), t._v(" "), n("small", {
                    staticClass: "show-above-m total"
                }, [t._v("/"), n("span", {
                    domProps: {
                        innerHTML: t._s(t.figure < 10 ? "0" + t.figureCount : "" + t.figureCount)
                    }
                })])])])], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(38), n(62), n(261), n(26);
        var o = n(2),
            r = {
                name: "chapter-title",
                props: ["data", "label"],
                mixins: [n(100).a],
                computed: {
                    title: function() {
                        return this.data.title.split(" ").map((function(t) {
                            return " " === t ? "<br/>" : "<span>" + t.split("").map((function(t) {
                                return "<span>".concat(t, "</span>")
                            })).join("") + "<span>&nbsp;</span></span>"
                        })).join("")
                    }
                },
                methods: {
                    show: function() {
                        var t = "power3.out";
                        o.a.to(this.$refs.small, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: t,
                            force3D: true,
                            clearProps: "opacity,y"
                        }), o.a.to(this.letters, {
                            y: "0%",
                            duration: 1,
                            ease: t,
                            stagger: {
                                each: .1,
                                ease: "power3.out"
                            },
                            force3D: true,
                            clearProps: "all"
                        })
                    }
                },
                mounted: function() {
                    o.a.set(this.$refs.small, {
                        y: 100,
                        opacity: 0
                    }), this.letters = [].slice.call(this.$el.querySelectorAll("h1 span")), o.a.set(this.letters, {
                        y: "100%"
                    })
                }
            },
            l = (n(502), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "chapter-container"
                }, [n("div", {
                    staticClass: "flex chapter-title"
                }, [n("div", {
                    staticClass: "w-160 show-above-m"
                }, [n("small", {
                    ref: "small"
                }, [t._v(t._s(t.label))])]), t._v(" "), n("n-link", {
                    ref: "link",
                    attrs: {
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    }
                }, [n("h1", {
                    staticClass: "line",
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                })])], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(261), n(26);
        var o = n(56),
            r = n(2),
            l = n(100),
            c = n(99),
            h = {
                name: "chapter-intro",
                data: function() {
                    return {}
                },
                props: ["data", "label", "publishedLabel"],
                mixins: [l.a],
                computed: {
                    introduction: function() {
                        return "<p>".concat(this.data.introduction, "</p>")
                    },
                    date: function() {
                        var t = this.$i18n.locale;
                        return Object(c.a)(this.data.publishDate, t)
                    }
                },
                methods: {
                    show: function() {
                        var t = !0,
                            e = "power3.out";
                        r.a.to(this.$refs.small, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: e,
                            force3D: t,
                            clearProps: "opacity,y"
                        }), r.a.to(this.lines, {
                            y: "0%",
                            duration: 1,
                            ease: e,
                            stagger: .2,
                            force3D: t,
                            clearProps: "all"
                        }), r.a.to(this.$refs.stroke, {
                            scaleX: 1,
                            duration: 1.3,
                            ease: e,
                            clearProps: "all",
                            force3D: t
                        })
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$nextTick((function() {
                        t.$refs.introduction.innerHTML = Object(o.a)(t.$refs.introduction.querySelector("p")), t.lines = [].slice.call(t.$el.querySelectorAll(".inner")), r.a.set(t.$refs.small, {
                            opacity: 0,
                            y: 100
                        }), r.a.set(t.$refs.stroke, {
                            scaleX: 0
                        }), r.a.set(t.lines, {
                            y: "100%"
                        })
                    }))
                }
            },
            d = (n(504), n(7)),
            component = Object(d.a)(h, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "chapter-introduction"
                }, [n("div", {
                    ref: "stroke",
                    staticClass: "stroke"
                }), t._v(" "), n("div", {
                    staticClass: "flex chapter-2-col"
                }, [n("div", {
                    staticClass: "content flex"
                }, [n("div", {
                    staticClass: "w-160 show-above-m"
                }, [n("small", {
                    ref: "small"
                }, [t._v(t._s(t.label))])]), t._v(" "), n("n-link", {
                    ref: "link",
                    attrs: {
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    }
                }, [n("div", {
                    ref: "introduction",
                    staticClass: "body-1 w-560",
                    staticStyle: {
                        "margin-right": "48px"
                    },
                    domProps: {
                        innerHTML: t._s(t.introduction)
                    }
                })])], 1), t._v(" "), n("div", {
                    staticClass: "show-above-l content flex w-560 date-container"
                }, [n("div", {
                    staticClass: "w-160"
                }, [n("small", {
                    ref: "small"
                }, [t._v(t._s(t.publishedLabel))])]), t._v(" "), n("n-link", {
                    ref: "link",
                    attrs: {
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    }
                }, [n("h5", {
                    staticClass: "line date",
                    domProps: {
                        innerHTML: t._s(t.date)
                    }
                })])], 1), t._v(" "), n("div", {
                    staticClass: "show-below-l content flex w-560 date-container"
                }, [n("n-link", {
                    ref: "link",
                    attrs: {
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    }
                }, [n("h5", {
                    staticClass: "line date",
                    domProps: {
                        innerHTML: t._s(t.date)
                    }
                })])], 1)])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(8);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        var c = {
                name: "popin",
                methods: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(r.b)(["set"]))
            },
            h = (n(514), n(7)),
            component = Object(h.a)(c, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "popin-bg",
                    attrs: {
                        "data-popinclose": "true"
                    },
                    on: {
                        click: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.d(e, "a", (function() {
            return o
        })), n.d(e, "b", (function() {
            return r
        }));
        n(26);
        var o = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default",
                    n = new Date(t),
                    o = n.getFullYear(),
                    r = n.toLocaleString(e, {
                        month: "long"
                    }),
                    l = n.getDate();
                switch (e) {
                    case "en":
                        return "".concat(r.slice(0, 1).toUpperCase()).concat(r.slice(1, r.length).toLowerCase(), " ").concat(o);
                    case "ko-KR":
                        return "".concat(o, "년 ").concat(r, " ").concat(l, "일");
                    case "de-DE":
                        return "".concat(l, ". ").concat(r.slice(0, 1).toUpperCase()).concat(r.slice(1, r.length).toLowerCase(), " ").concat(o);
                    case "it-IT":
                        return "".concat(l, " ").concat(r, " ").concat(o);
                    case "fr-FR":
                    case "es-419":
                    case "pt-BR":
                        return "".concat(l, " ").concat(r.slice(0, 1).toUpperCase()).concat(r.slice(1, r.length).toLowerCase(), " ").concat(o);
                    default:
                        return "".concat(l, " ").concat(r, " ").concat(o)
                }
            },
            r = function(t) {
                return t.sort((function(a, b) {
                    return new Date(b.publishDate) - new Date(a.publishDate)
                }))
            }
    }, function(t, e, n) {
        "use strict";
        e.a = {
            data: function() {
                return {
                    isShown: !1,
                    threshold: .3
                }
            },
            methods: {
                intersectionCb: function(t) {
                    t[0].intersectionRatio > .1 && (this.observer.unobserve(this.$el), this.checkShow())
                },
                checkShow: function() {
                    this.isShown || this.show()
                }
            },
            beforeDestroy: function() {
                this.observer && this.observer.unobserve(this.$el)
            },
            mounted: function() {
                this.observer = new IntersectionObserver(this.intersectionCb.bind(this), {
                    threshold: this.threshold
                }), this.observer.observe(this.$el)
            }
        }
    }, , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(34),
            r = n(10),
            l = n(5),
            c = (n(139), n(23), n(2)),
            h = n(51),
            d = n.n(h),
            m = n(74),
            f = n(121),
            v = n(8),
            w = n(22),
            x = n(111);

        function y(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function O(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? y(Object(source), !0).forEach((function(e) {
                    Object(l.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var k = {
                name: "edition-content",
                data: function() {
                    return {
                        top: 0,
                        height: 0,
                        w: null,
                        isReady: !1,
                        labels: {},
                        graph: "",
                        mobileGraph: ""
                    }
                },
                props: ["data", "edition", "editionLabel", "figure", "figureCount"],
                computed: O({}, Object(v.d)(["isLoaderAnimationDone", "showPopin"])),
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(w.a)("query footerLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      actionLabel\n      insightLabel\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    return n = e.sent, t.labels = n.commonCopyCollection.items[0], e.next = 6, Object(w.a)("query insightGraphQuery($slug: String!, $locale: String!) {\n    insightCollection(where: { slug: $slug }, locale: $locale) {\n      items {\n        insightGraphsCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }", {
                                        slug: t.data.slug,
                                        locale: t.$i18n.locale
                                    });
                                case 6:
                                    return o = e.sent, t.graph = o.insightCollection.items[0].insightGraphsCollection.items[0].url, e.next = 10, Object(w.a)("query insightMobileGraphQuery($slug: String!, $locale: String!) {\n    insightCollection(where: { slug: $slug }, locale: $locale) {\n      items {\n        insightMobileGraphsCollection {\n          items {\n            url\n          }\n        }\n      }\n    }\n  }", {
                                        slug: t.data.slug,
                                        locale: t.$i18n.locale
                                    });
                                case 10:
                                    r = e.sent, t.mobileGraph = r.insightCollection.items[0].insightMobileGraphsCollection.items[0].url;
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                components: {
                    svgArrow: d.a,
                    fragmentsPreview: m.default,
                    fragmentsChapter: f.default,
                    Image: x.default
                },
                methods: O(O({}, Object(v.b)(["set"])), {}, {
                    resize: function(t, e) {
                        this.w = t, this.h = e;
                        var n = this.$el.getBoundingClientRect(),
                            o = n.top,
                            r = n.height;
                        this.top = o + this.scrollTop, this.height = r, this.start = Math.floor(o + this.scrollTop - e);
                        var l = Math.ceil(1.2 * this.w);
                        this.w < 768 && (this.start += l), this.end = Math.floor(this.start + r + e), this.w < 768 && (this.end -= l)
                    },
                    tick: function(t) {
                        var body = document.body,
                            html = document.documentElement,
                            e = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                        this.w && (window.scrollY >= e - 1500 ? this.show() : this.reset()), this.scrollTop = t
                    },
                    show: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (this.mustShow = !0, this.isLoaderAnimationDone && !this.isShown) {
                            this.isShown = !0;
                            var n = Object(o.a)(this.stagger);
                            c.a.fromTo(e >= 0 ? n : n.reverse(), {
                                y: e >= 0 ? 200 : -200
                            }, {
                                opacity: 1,
                                y: 0,
                                stagger: .2,
                                duration: .9,
                                delay: .3,
                                ease: "power3.out"
                            }), this.$refs.preview.show(e >= 0 ? 0 : .7), this.isReadyTimer = setTimeout((function() {
                                t.isReady = !0
                            }), 700)
                        }
                    },
                    reset: function() {
                        this.isShown && (this.isShown = !1, this.isReady = !1, clearTimeout(this.isReadyTimer), c.a.killTweensOf(this.stagger), c.a.set(this.stagger, {
                            opacity: 0
                        }), this.$refs.preview.reset())
                    }
                }),
                beforeDestroy: function() {
                    this.link && this.link.removeEventListener("click", this._onLinkClick)
                },
                watch: {
                    isLoaderAnimationDone: function() {}
                },
                mounted: function() {
                    this.scrollTop = 0, this.stagger = this.$refs.cta ? [this.$refs.synopsis, this.$refs.cta] : [this.$refs.synopsis], c.a.set(this.stagger, {
                        opacity: 1
                    })
                }
            },
            C = (n(510), n(7)),
            component = Object(C.a)(k, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "edition-content extra-padding-bottom ",
                    class: [t.data.slug, {
                        showPopin: t.showPopin
                    }],
                    attrs: {
                        "data-slug": t.data.slug
                    }
                }, [n("div", {
                    staticClass: "insight-top"
                }, [n("fragments-preview", {
                    ref: "preview",
                    attrs: {
                        data: t.data,
                        edition: t.edition,
                        editionLabel: t.editionLabel,
                        figure: t.figure,
                        figureCount: t.figureCount
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "flex content-container c"
                }, [n("div", {
                    staticClass: "flex"
                }, [n("div", {
                    staticClass: "w-160 hide-spacing"
                }), t._v(" "), n("img", {
                    staticClass: "show-above-m edition-graph",
                    attrs: {
                        src: t.graph
                    }
                }), t._v(" "), n("img", {
                    staticClass: "show-below-m edition-graph",
                    attrs: {
                        src: t.mobileGraph
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "w-560"
                }, [n("div", {
                    ref: "synopsis",
                    staticClass: "synopsis"
                }, [n("div", {
                    staticClass: "stroke show-above-m"
                }), t._v(" "), n("div", {
                    staticClass: "insight-copy-container"
                }, [n("div", {
                    staticClass: "w-160"
                }, [n("small", [t._v(t._s(t.labels.insightLabel))])]), t._v(" "), t._l(t.data.insight.json.content, (function(e) {
                    return n("div", {
                        key: e,
                        staticClass: "body-3",
                        staticStyle: {
                            "margin-top": "4px"
                        },
                        domProps: {
                            innerHTML: t._s(e.content[0].value)
                        }
                    })
                }))], 2)]), t._v(" "), n("div", {
                    class: "stroke-cta"
                }), t._v(" "), t.data.cta ? n("div", {
                    ref: "cta",
                    staticClass: "cta",
                    style: {
                        color: t.data.ctaColor
                    }
                }, [n("div", {
                    class: "insight-copy-container"
                }, [n("div", {
                    staticClass: "w-160"
                }, [n("small", [t._v(t._s(t.labels.actionLabel))])]), t._v(" "), n("div", [t._l(t.data.cta.json.content, (function(e) {
                    return n("div", {
                        key: e,
                        staticClass: "cta-text body-4",
                        domProps: {
                            innerHTML: t._s(e.content[0].value)
                        }
                    })
                })), t._v(" "), n("div", {
                    class: "cta-link"
                }, [t.data.link ? n("a", {
                    ref: "link",
                    class: "link-arrow button",
                    attrs: {
                        href: t.data.link,
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v(t._s(t.data.linkLabel)), n("span", {
                    staticClass: "arrow dark-arrow"
                }, [n("svg-arrow")], 1)]) : t._e()])], 2)])]) : t._e()])])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsPreview: n(74).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(34),
            r = n(5),
            l = n(10),
            c = (n(139), n(23), n(2)),
            h = n(51),
            d = n.n(h),
            m = n(74),
            f = n(8),
            v = n(22);

        function w(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function x(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? w(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var y = {
                name: "insight-content",
                data: function() {
                    return {
                        top: 0,
                        height: 0,
                        w: null,
                        isReady: !1,
                        labels: {}
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(l.a)(regeneratorRuntime.mark((function e() {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(v.a)("query footerLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      actionLabel\n      insightLabel\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, t.labels = n.commonCopyCollection.items[0];
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                props: ["data"],
                computed: x({}, Object(f.d)(["isLoaderAnimationDone", "showPopin"])),
                components: {
                    svgArrow: d.a,
                    fragmentsPreview: m.default
                },
                methods: x(x({}, Object(f.b)(["set"])), {}, {
                    resize: function(t, e) {
                        this.w = t, this.h = e;
                        var n = this.$el.getBoundingClientRect(),
                            o = n.top,
                            r = n.height;
                        this.top = o + this.scrollTop, this.height = r, this.start = Math.floor(o + this.scrollTop - e);
                        var l = Math.ceil(1.2 * this.w);
                        this.w < 768 && (this.start += l), this.end = Math.floor(this.start + r + e), this.w < 768 && (this.end -= l)
                    },
                    tick: function(t) {
                        this.w && (t >= this.start && t <= this.end ? this.show(t - this.scrollTop) : this.reset()), this.scrollTop = t
                    },
                    show: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (this.mustShow = !0, this.isLoaderAnimationDone && !this.isShown) {
                            this.isShown = !0;
                            var n = Object(o.a)(this.stagger);
                            c.a.fromTo(e >= 0 ? n : n.reverse(), {
                                y: e >= 0 ? 200 : -200
                            }, {
                                opacity: 1,
                                y: 0,
                                stagger: .2,
                                duration: .9,
                                delay: .3,
                                ease: "power3.out"
                            }), this.$refs.preview.show(e >= 0 ? 0 : .7), this.isReadyTimer = setTimeout((function() {
                                t.isReady = !0
                            }), 700)
                        }
                    },
                    reset: function() {
                        this.isShown && (this.isShown = !1, this.isReady = !1, clearTimeout(this.isReadyTimer), c.a.killTweensOf(this.stagger), c.a.set(this.stagger, {
                            opacity: 0
                        }), this.$refs.preview.reset())
                    }
                }),
                beforeDestroy: function() {
                    this.link && this.link.removeEventListener("click", this._onLinkClick)
                },
                watch: {
                    isLoaderAnimationDone: function() {}
                },
                mounted: function() {
                    this.scrollTop = 0, this.stagger = this.$refs.cta ? [this.$refs.synopsis, this.$refs.cta] : [this.$refs.synopsis], c.a.set(this.stagger, {
                        opacity: 0
                    })
                }
            },
            O = (n(538), n(7)),
            component = Object(O.a)(y, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "insight-content",
                    class: [t.data.slug, {
                        showPopin: t.showPopin
                    }],
                    attrs: {
                        "data-slug": t.data.slug
                    }
                }, [n("div", {
                    staticClass: "insight-top"
                }, [n("fragments-preview", {
                    ref: "preview",
                    attrs: {
                        data: t.data
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "flex content-container c"
                }, [n("div", {
                    staticClass: "w-560"
                }, [n("div", {
                    ref: "synopsis",
                    staticClass: "synopsis"
                }, [n("div", {
                    staticClass: "stroke show-above-m"
                }), t._v(" "), n("div", {
                    staticClass: "w-160"
                }, [n("small", [t._v(t._s(t.labels.insightLabel))])]), t._v(" "), n("div", {
                    staticClass: "body-3",
                    domProps: {
                        innerHTML: t._s(t.data.insight)
                    }
                })]), t._v(" "), t.data.cta ? n("div", {
                    ref: "cta",
                    staticClass: "cta",
                    style: {
                        color: t.data.ctaColor
                    }
                }, [n("div", {
                    staticClass: "stroke  show-above-m"
                }), t._v(" "), n("div", {
                    staticClass: "w-160"
                }, [n("small", [t._v(t._s(t.labels.actionLabel))])]), t._v(" "), n("div", [n("div", {
                    staticClass: "cta-text body-4",
                    domProps: {
                        innerHTML: t._s(t.data.cta)
                    }
                }), t._v(" "), t.data.link ? n("a", {
                    staticClass: "link-arrow  button",
                    attrs: {
                        href: t.data.link,
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v(t._s(t.data.linkLabel) + " "), n("span", {
                    staticClass: "arrow"
                }, [n("svg-arrow")], 1)]) : t._e()])]) : t._e()])])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsPreview: n(74).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(62), n(38), n(27), n(8)),
            l = n(68),
            c = n.n(l),
            h = n(99);

        function d(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function m(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? d(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : d(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var f = {
                name: "navItem",
                props: ["data", "id"],
                data: function() {
                    return {
                        x: 0,
                        width: 0,
                        isClicked: !1
                    }
                },
                computed: {
                    detectedLineBreak: function() {},
                    title: function() {
                        if ("en" === this.$i18n.locale && "Engagement" == this.data.title) return "engage-<br/>ment";
                        var t = this.data.title.split("");
                        return t.map((function(e, n) {
                            return " " === e ? "+" === t[n + 1] ? "<span>&nbsp;</span>" : "<br/>" : "-" === e ? "".concat(e, "<br/>") : "".concat(e)
                        })).join("")
                    },
                    number: function() {
                        return this.data.position < 10 ? "0" + this.data.position : this.data.position
                    },
                    date: function() {
                        var t = this.$i18n.locale;
                        return Object(h.a)(this.data.publishDate, t)
                    }
                },
                methods: m(m({}, Object(r.b)(["set"])), {}, {
                    onClicked: function() {
                        var t = this;
                        this.isClicked || (this.isClicked = !0, setTimeout((function() {
                            t.isClicked = !1
                        }), 1e3), this.$route.name === "edition-slug___".concat(this.$i18n.locale) && this.set({
                            property: "insightSelected",
                            value: this.data.slug
                        }))
                    },
                    tick: function(t) {
                        var e = 1 - 2 * ((this.x - t) / this.w);
                        c()(this.$refs.img, {
                            translateX: 10 * e + "%",
                            scale: [1.2, 1.2]
                        })
                    },
                    resize: function(t, e) {
                        this.w = t;
                        var n = this.$el.getBoundingClientRect(),
                            o = n.left,
                            r = n.width;
                        this.width = r / 2, this.x = o + r / 2
                    }
                }),
                mounted: function() {
                    this.x = 0
                }
            },
            v = (n(482), n(7)),
            component = Object(v.a)(f, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "nav-item",
                    class: [t.data.slug, {
                        selected: this.$route.params.slug === this.data.slug
                    }],
                    on: {
                        click: t.onClicked
                    }
                }, [n("div", {
                    staticClass: "inner",
                    style: {
                        color: t.data.titleColor
                    }
                }, [n("figure", [n("div", {
                    ref: "img",
                    staticClass: "img"
                }, [n("fragments-image", {
                    attrs: {
                        image: Object.assign({}, t.data.cover, {
                            slug: t.data.slug
                        }),
                        draggable: "false"
                    }
                })], 1)]), t._v(" "), n("div", {
                    staticClass: "nav-item-content"
                }, [n("div", {
                    staticClass: "nav-item-top"
                }, [n("strong", {
                    staticClass: "tag callout",
                    style: {
                        background: t.data.titleColor
                    },
                    domProps: {
                        textContent: t._s(t.date)
                    }
                })]), t._v(" "), n("div", {
                    staticStyle: {
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        "flex-direction": "column",
                        "justify-content": "flex-start"
                    }
                }, [n("h5", {
                    class: "" + t.$i18n.locale,
                    domProps: {
                        innerHTML: t._s(t.title)
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "item-border"
                })]), t._v(" "), n("nuxt-link", {
                    class: "" + t.isClicked,
                    attrs: {
                        draggable: "false",
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    },
                    domProps: {
                        textContent: t._s(t.data.title)
                    }
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsImage: n(111).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = {
                name: "vImage",
                data: function() {
                    return {
                        w: 100
                    }
                },
                props: {
                    image: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                computed: {
                    color: function() {
                        return "%231a1a1a"
                    },
                    placeholderSrc: function() {
                        return "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%20".concat(this.image.width, "%20").concat(this.image.height, "%22%3E%3Crect%20width=%22").concat(this.image.width, "%22%20height=%22").concat(this.image.height, "%22%20style=%22fill:").concat(this.color, "%22%3E%3C/rect%3E%3C/svg%3E")
                    }
                },
                methods: {
                    srcs: function() {
                        return "".concat(this.image.url)
                    },
                    resize: function() {
                        this.w = window.innerWidth
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this._resize)
                },
                mounted: function() {
                    this._resize = this.resize.bind(this), window.addEventListener("resize", this._resize), this.resize()
                }
            },
            r = n(7),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("picture", [n("source", {
                    attrs: {
                        srcset: "" + t.image.url,
                        type: "image/webp"
                    }
                }), t._v(" "), n("source", {
                    attrs: {
                        srcset: "" + t.image.url,
                        type: "image/jpeg"
                    }
                }), t._v(" "), n("img", {
                    attrs: {
                        src: t.placeholderSrc,
                        alt: t.image.title,
                        width: t.image.width,
                        height: t.image.height,
                        decoding: "async",
                        loading: "lazy"
                    }
                })])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(62);
        var o = n(2),
            r = {
                name: "gradient",
                data: function() {
                    return {}
                },
                props: ["color"],
                computed: {},
                methods: {
                    hexToRgbA: function(t) {
                        var e;
                        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) return 3 == (e = t.substring(1).split("")).length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]), [(e = "0x" + e.join("")) >> 16 & 255, e >> 8 & 255, 255 & e].join(",");
                        throw new Error("Bad Hex")
                    },
                    show: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        })
                    },
                    hide: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.out"
                        })
                    }
                },
                mounted: function() {
                    o.a.set(this.$el, {
                        opacity: 0
                    })
                }
            },
            l = (n(492), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "gradient",
                    style: {
                        background: "linear-gradient(rgba(" + this.hexToRgbA(t.color) + ", 1) 0%,rgba(" + this.hexToRgbA(t.color) + ", .7) 50%,rgba(" + this.hexToRgbA(t.color) + ", .5) 60%, rgba(" + this.hexToRgbA(t.color) + ", 0)  100%)"
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(51),
            r = {
                name: "chapter-link",
                data: function() {
                    return {}
                },
                props: ["data", "label"],
                components: {
                    svgArrow: n.n(o).a
                }
            },
            l = (n(506), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "chapter-link"
                }, [n("div", {
                    staticClass: "flex"
                }, [n("div", {
                    staticClass: "w-160 show-above-m"
                }), t._v(" "), n("n-link", {
                    ref: "link",
                    staticClass: "link-arrow button",
                    attrs: {
                        to: t.localePath({
                            name: "edition-slug",
                            params: {
                                slug: t.data.slug
                            }
                        })
                    }
                }, [t._v(t._s(t.label)), n("span", {
                    staticClass: "arrow dark-arrow"
                }, [n("svg-arrow")], 1)])], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(10),
            r = (n(23), n(75)),
            l = n(76),
            c = n(22),
            h = n(145),
            d = {
                name: "edition-hero",
                data: function() {
                    return {
                        labels: {}
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(c.a)(h.a, {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, o = n.commonCopyCollection.items[0], t.labels = o;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                props: ["data"],
                methods: {
                    show: function() {}
                },
                components: {
                    fragmentsChapterTitle: r.default,
                    fragmentsChapterIntro: l.default
                },
                mounted: function() {}
            },
            m = (n(512), n(7)),
            component = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "chapter ",
                    class: t.data.slug,
                    attrs: {
                        "data-slug": t.data.slug
                    }
                }, [n("div", {
                    ref: "content",
                    staticClass: "chapter-content"
                }, [n("div", {
                    staticClass: "c"
                }, [n("fragments-chapter-title", {
                    attrs: {
                        data: t.data
                    }
                }), t._v(" "), n("fragments-chapter-intro", {
                    attrs: {
                        data: t.data,
                        publishedLabel: t.labels.publishedLabel
                    }
                })], 1)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsChapterTitle: n(75).default,
            FragmentsChapterIntro: n(76).default
        })
    }, , , , function(t) {
        t.exports = JSON.parse('{"token":"-bCHj7ZKGW9T5BZzbyqrWkHTdBm5WLg_SBIOr_SZ0rc","httpEndpoint":"https://graphql.contentful.com/content/v1/spaces/b3sbeju897na","space":"b3sbeju897na"}')
    }, , , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(10),
            r = (n(23), n(75)),
            l = n(76),
            c = n(113),
            h = n(22),
            d = n(145),
            m = {
                name: "chapter",
                data: function() {
                    return {
                        labels: {}
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(o.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(h.a)(d.a, {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, o = n.commonCopyCollection.items[0], t.labels = o;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                props: ["data"],
                methods: {
                    show: function() {}
                },
                components: {
                    fragmentsChapterTitle: r.default,
                    fragmentsChapterIntro: l.default,
                    fragmentsChapterLink: c.default
                },
                mounted: function() {}
            },
            f = (n(508), n(7)),
            component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    staticClass: "chapter ",
                    class: t.data.slug,
                    attrs: {
                        "data-slug": t.data.slug
                    }
                }, [n("div", {
                    ref: "content",
                    staticClass: "chapter-content"
                }, [n("div", {
                    staticClass: "c"
                }, [n("fragments-chapter-title", {
                    attrs: {
                        data: t.data,
                        label: t.labels.chapterLabel
                    }
                }), t._v(" "), n("fragments-chapter-intro", {
                    attrs: {
                        data: t.data,
                        label: t.labels.introductionLabel,
                        publishedLabel: t.labels.publishedLabel
                    }
                }), t._v(" "), n("fragments-chapter-link", {
                    attrs: {
                        data: t.data,
                        label: t.labels.studyCta
                    }
                })], 1)])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsChapterTitle: n(75).default,
            FragmentsChapterIntro: n(76).default,
            FragmentsChapterLink: n(113).default
        })
    }, , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(26), n(55)),
            l = n(56),
            c = n(2),
            h = n(8),
            d = n(20),
            m = n(51),
            f = n.n(m);

        function v(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function w(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? v(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var x = {
                name: "popin",
                data: function() {
                    return {
                        isListPopin: !1,
                        isReady: !1
                    }
                },
                components: {
                    fragmentsCloseButton: r.default,
                    svgArrow: f.a,
                    "latin-america-discovers-the-most-new-music": function() {
                        return n.e(2).then(n.bind(null, 655))
                    },
                    "lines-between-genres-are-continuing-to-blur": function() {
                        return n.e(10).then(n.bind(null, 651))
                    },
                    "local-music-travels-the-world": function() {
                        return n.e(11).then(n.bind(null, 656))
                    },
                    "fans-are-coming-into-spotify-in-new-ways": function() {
                        return n.e(8).then(n.bind(null, 657))
                    },
                    "a-fan-that-saves-your-track-will-listen-to-it-3x-more": function() {
                        return n.e(0).then(n.bind(null, 658))
                    },
                    "user-playlists-lead-to-a-lot-more-than-streams": function() {
                        return n.e(4).then(n.bind(null, 659))
                    },
                    "hardcore-fans-listen-like-crazy": function() {
                        return n.e(9).then(n.bind(null, 660))
                    },
                    "update-your-profile-before-your-release-to-ride-the-wave": function() {
                        return n.e(13).then(n.bind(null, 661))
                    },
                    "don-t-stop-sharing-after-your-release-comes-out": function() {
                        return n.e(1).then(n.bind(null, 662))
                    },
                    "new-releases-give-your-other-music-a-bump": function() {
                        return n.e(3).then(n.bind(null, 663))
                    },
                    "a-release-is-never-finished": function() {
                        return n.e(6).then(n.bind(null, 664))
                    },
                    "your-genre-may-hold-the-secret-to-more-merch-sales": function() {
                        return n.e(14).then(n.bind(null, 652))
                    },
                    "you-dont-have-to-be-a-superstar-to-be-super-good-at-selling-merch": function() {
                        return n.e(5).then(n.bind(null, 665))
                    },
                    "apparently-phoenix-is-still-buying-cds": function() {
                        return n.e(7).then(n.bind(null, 653))
                    },
                    "turns-out-vinyl-s-a-young-person-s-game": function() {
                        return n.e(12).then(n.bind(null, 666))
                    }
                },
                computed: w(w({}, Object(h.c)(["insight", "isTouch"])), Object(h.d)(["slug"])),
                methods: w(w({}, Object(h.b)(["set"])), {}, {
                    setPopinList: function() {
                        this.isListPopin = !0
                    },
                    beforeShow: function() {
                        c.a.set(this.$el, {
                            y: "100%"
                        }), this.$refs.title.innerHTML = Object(l.a)(this.$refs.title), this.titleLines = [].slice.call(this.$refs.title.querySelectorAll(".inner")), this.legendLines = [].slice.call(this.$refs.legend.querySelectorAll(".inner")), this.rows = [].slice.call(this.$el.querySelectorAll(".row")), c.a.set(this.titleLines, {
                            y: "100%"
                        }), c.a.set(this.legendLines, {
                            y: "100%"
                        }), c.a.set(this.rows, {
                            scaleX: 0
                        }), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottomInner), c.a.killTweensOf(this.$refs.bottom), c.a.set(this.$refs.bottom, {
                            x: "-100%"
                        }), c.a.set(this.$refs.bottomInner, {
                            x: "100%"
                        }))
                    },
                    onCompMounted: function() {
                        this.beforeShow(), this.$nextTick(this.show.bind(this))
                    },
                    scroll: function() {
                        this.didScroll || (this.didScroll = !0, this.set({
                            property: "showPopin",
                            value: !1
                        }))
                    },
                    show: function() {
                        var t, e = this;
                        d.a.emit("MOUSELINK:RESET"), this.$el.style.pointerEvents = "auto", this.$el.style.visibility = "visible";
                        var n = window.innerWidth,
                            r = window.innerHeight;
                        n > 1024 && (this.$el.querySelector(".popin-content").style.paddingBottom = this.$refs.bottom.getBoundingClientRect().height + 40 + "px"), this.isTouch || (this.deltaY = 0, this.$refs.scroll.style.top = "0px", this.isShown = !0, this.diff = Math.ceil(r - this.$refs.scroll.clientHeight) + 4), c.a.set(this.$el, {
                            clearProps: "all"
                        }), n < 768 ? this.$el.style.height = r + "px" : n > 1024 && this.diff < 0 && (this.$el.style.height = 7 * Math.ceil(r / 7) + "px"), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottomInner), c.a.killTweensOf(this.$refs.bottom), c.a.to([this.$refs.bottom, this.$refs.bottomInner], {
                            x: "0%",
                            duration: .55,
                            delay: .5,
                            ease: "power2.out"
                        })), d.a.emit("SHAPE:EXPLODE"), this.$refs.nutrient.show(), c.a.to(this.rows, {
                            scaleX: 1,
                            duration: .55,
                            stagger: .05,
                            ease: "power2.out"
                        }), c.a.delayedCall(.4, (function() {
                            e.$refs.close && (e.$refs.close.style.opacity = 1), e.isReady = !0
                        })), c.a.fromTo(this.titleLines, {
                            y: "100%"
                        }, {
                            y: "0%",
                            duration: .55,
                            delay: .2,
                            ease: "power3.out",
                            stagger: .05,
                            force3D: !0,
                            clearProps: "all"
                        }), c.a.fromTo(this.legendLines, {
                            y: "100%"
                        }, (t = {
                            y: "0%",
                            duration: .55,
                            delay: .2,
                            ease: "power3.out",
                            stagger: .2
                        }, Object(o.a)(t, "delay", .5), Object(o.a)(t, "force3D", !0), Object(o.a)(t, "clearProps", "all"), t)), this.isTouch || (document.addEventListener("wheel", this._wheel, {
                            passive: !1
                        }), document.addEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), document.addEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        }))
                    },
                    hide: function() {
                        c.a.killTweensOf(this.rows), c.a.killTweensOf(this.titleLines), c.a.killTweensOf(this.legendLines), c.a.to(this.rows, {
                            scaleX: 0,
                            duration: .3,
                            stagger: .01,
                            delay: this.isReady ? .25 : 0,
                            ease: "power3.out"
                        }), this.$el.style.pointerEvents = "none", this.isReady = !1, d.a.emit("SHAPE:GOBACKNORMAL"), this.$refs.nutrient.hide(), this.isShown = !1, this.$refs.close && (this.$refs.close.style.opacity = 0, this.$refs.buttonClose.$el.style.opacity = 0), c.a.to(this.titleLines, {
                            y: "100%",
                            duration: .3,
                            ease: "power3.out",
                            force3D: !0
                        }), c.a.to(this.legendLines, {
                            y: "100%",
                            duration: .3,
                            ease: "power3.out",
                            force3D: !0
                        }), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottom), c.a.killTweensOf(this.$refs.bottomInner), c.a.to(this.$refs.bottom, {
                            x: "-100%",
                            duration: .3,
                            ease: "power2.out",
                            overwrite: 1
                        }), c.a.to(this.$refs.bottomInner, {
                            x: "100%",
                            duration: .3,
                            ease: "power2.out",
                            overwrite: 1
                        })), this.isTouch || (document.removeEventListener("wheel", this._wheel, {
                            passive: !1
                        }), document.removeEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), document.removeEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        }))
                    },
                    wheel: function(t) {
                        return this.diff < 0 && (this.deltaY += t.deltaY, this.deltaY < 0 && (this.deltaY = 0), this.isShown && (this.deltaY > -this.diff && (this.deltaY = -this.diff), this.$refs.scroll.style.top = -this.deltaY + "px")), t.preventDefault(), !1
                    }
                }),
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this._scroll), this.hide()
                },
                mounted: function() {
                    this.deltaY = 0, this._wheel = this.wheel.bind(this), this._scroll = this.scroll.bind(this), this.isShown = !1, this.$el.style.visibility = "hidden", this.isListPopin = !1, window.addEventListener("scroll", this._scroll)
                }
            },
            y = (n(518), n(7)),
            component = Object(y.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popin",
                    class: [{
                        isListPopin: t.isListPopin
                    }, t.insight.section.slug]
                }, [n("div", {
                    staticClass: "popin-background",
                    style: {
                        color: t.insight.section.backgroundColor
                    }
                }, [n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                })]), t._v(" "), n("div", {
                    ref: "cont",
                    staticClass: "popin-container"
                }, [n("button", {
                    ref: "close",
                    staticClass: "close-data close-popin-typo",
                    style: {
                        background: t.insight.section.backgroundColor
                    },
                    on: {
                        click: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                }, [t._v("\n      close data\n    ")]), t._v(" "), n("fragments-close-button", {
                    ref: "buttonClose",
                    class: {
                        isReady: t.isReady
                    },
                    on: {
                        closeClicked: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                }), t._v(" "), n("div", {
                    ref: "scroll",
                    staticClass: "popin-scroll"
                }, [n("div", {
                    staticClass: "popin-content"
                }, [n("strong", {
                    ref: "title",
                    staticClass: "h4 ",
                    domProps: {
                        textContent: t._s(t.insight.data)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "nutrient"
                }, [n("keep-alive", [n(t.slug, {
                    key: t.slug,
                    ref: "nutrient",
                    tag: "component",
                    class: t.insight.isDataMediumStyle ? "nutrient-list-medium" : "nutrient-list",
                    on: {
                        mounted: t.onCompMounted,
                        onListMounted: t.setPopinList
                    }
                })], 1)], 1), t._v(" "), n("div", {
                    ref: "legend",
                    staticClass: "legend line"
                }, [n("legend", {
                    staticClass: "inner nutrient-legend",
                    domProps: {
                        textContent: t._s(t.insight.dataLegend)
                    }
                })])]), t._v(" "), t.insight.link ? n("div", {
                    ref: "bottom",
                    staticClass: "bottom",
                    style: {
                        color: t.insight.section.ctaColor
                    }
                }, [n("div", {
                    ref: "bottomInner",
                    staticClass: "bottom-inner"
                }, [n("div", {
                    staticClass: "body-5",
                    domProps: {
                        innerHTML: t._s(t.insight.cta)
                    }
                }), t._v(" "), n("a", {
                    staticClass: "link-arrow  button",
                    attrs: {
                        href: t.insight.link,
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v(t._s(t.insight.linkLabel) + " "), n("span", {
                    staticClass: "arrow"
                }, [n("svg-arrow")], 1)])])]) : t._e()])], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsCloseButton: n(55).default
        })
    }, , function(t, e, n) {
        "use strict";
        var o = n(10),
            r = (n(23), n(30), n(143)),
            l = n(118),
            c = (n(423), function() {
                var t = Object(o.a)(regeneratorRuntime.mark((function t(e) {
                    var n, c = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return n = c.length > 1 && void 0 !== c[1] ? c[1] : {}, t.abrupt("return", new Promise(function() {
                                    var t = Object(o.a)(regeneratorRuntime.mark((function t(o, c) {
                                        var h, d;
                                        return regeneratorRuntime.wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    h = {
                                                        "Content-Type": "application/json",
                                                        Accept: "application/json",
                                                        Authorization: "Bearer ".concat(l.token)
                                                    }, d = l.httpEndpoint, new r.GraphQLClient(d, {
                                                        headers: h
                                                    }).request(e, n).then((function(t) {
                                                        o(t)
                                                    })).catch((function(t) {
                                                        throw c(t), t
                                                    }));
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })));
                                    return function(e, n) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 2:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })));
                return function(e) {
                    return t.apply(this, arguments)
                }
            }());
        e.a = c
    }, , function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 94 94"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        fill: "#E3463D",
                        d: "M.555 16.159h92.74v15.457H.555z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#FC483A",
                        d: "M.555.932h92.74v15.457H.555z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#D6443F",
                        d: "M.555 31.616h92.74v15.457H.555z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#B04044",
                        d: "M.555 47.072h68.009v15.457H.555z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#893D49",
                        d: "M.555 77.986h43.279v15.457H.555z"
                    }
                }), n("path", {
                    attrs: {
                        fill: "#9C3F46",
                        d: "M.555 62.529h68.009v15.457H.555z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        "use strict";
        e.a = "query chapterLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      chapterLabel\n      introductionLabel\n      studyCta\n      publishedLabel\n    }\n  }\n}"
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 20 20"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        "stroke-width": "2",
                        d: "M1.515 18.515l17-17M1.485 1.515l17 17"
                    }
                })]))
            }
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(10),
            l = (n(474), n(52), n(23), n(55)),
            c = n(110),
            h = n(2),
            d = n(8),
            m = n(1),
            f = n(3),
            v = (n(234), n(312)),
            w = n.n(v);

        function x(t, e, n) {
            return t < e ? e : t > n ? n : t
        }
        n(26), n(30), n(97), n(98);
        var y = new(function() {
                function t() {
                    Object(m.a)(this, t), this.delta = 0, this.maxScroll = 0, this.deltaTotal = 0, this.deltaEase = 0, this._onWheel = this.onWheel.bind(this)
                }
                return Object(f.a)(t, [{
                    key: "addEvents",
                    value: function() {
                        this._isTouch = this.isTouch(), this._isTouch ? (this._handleTouchStart = this.handleTouchStart.bind(this), this._handleTouchMove = this.handleTouchMove.bind(this), this._handleTouchEnd = this.handleTouchEnd.bind(this), window.addEventListener("touchstart", this._handleTouchStart, {
                            passive: !0
                        }), window.addEventListener("touchmove", this._handleTouchMove, {
                            passive: !0
                        }), window.addEventListener("touchend", this._handleTouchEnd, {
                            passive: !0
                        })) : document.body.addEventListener("wheel", this._onWheel, {
                            passive: !1,
                            capture: !0
                        })
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        this._isTouch ? (window.removeEventListener("touchstart", this._handleTouchStart, {
                            passive: !0
                        }), window.removeEventListener("touchmove", this._handleTouchMove, {
                            passive: !0
                        }), window.removeEventListener("touchend", this._handleTouchEnd, {
                            passive: !0
                        })) : document.body.removeEventListener("wheel", this._onWheel, {
                            passive: !1,
                            capture: !0
                        })
                    }
                }, {
                    key: "reset",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.delta = t, this.maxScroll = t, this.deltaTotal = t
                    }
                }, {
                    key: "isTouch",
                    value: function() {
                        try {
                            return document.createEvent("TouchEvent"), !0
                        } catch (t) {
                            return !1
                        }
                    }
                }, {
                    key: "getTouches",
                    value: function(t) {
                        return t.touches || t.originalEvent.touches
                    }
                }, {
                    key: "handleTouchStart",
                    value: function(t) {
                        var e = this.getTouches(t)[0];
                        this.xDown = e.screenX, this.yDown = e.screenY, this._isTouching = !0
                    }
                }, {
                    key: "handleTouchMove",
                    value: function(t) {
                        if (this.xDown && this.yDown) {
                            var e = t.touches[0].screenX,
                                n = t.touches[0].screenY,
                                o = this.xDown - e,
                                r = this.yDown - n;
                            Math.abs(o) > Math.abs(r) && (this.delta = o), this.xDown = e, this.yDown = n, this._isTouching = !0
                        }
                    }
                }, {
                    key: "handleTouchEnd",
                    value: function(t) {
                        this.xDown = null, this.yDown = null, this._isTouching = !1
                    }
                }, {
                    key: "onWheel",
                    value: function(t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = w()(t);
                        return this.delta = Math.abs(e.pixelY) > Math.abs(e.pixelX) ? x(e.pixelY, -60, 60) : x(e.pixelX, -60, 60), !1
                    }
                }, {
                    key: "tick",
                    value: function() {
                        var t = Math.abs(this.delta);
                        t = Math.min(this._isTouch ? 120 : 60, t), --t < 1e-4 && (t = 0), t && this._isTouch && !this._isTouching && (t = Math.pow(t, .9925)), this.delta = Math.sign(this.delta) * t;
                        var e = this.delta - this.deltaEase;
                        this._isTouch ? this.deltaEase += e / 2 : this.deltaEase += e / 10
                    }
                }]), t
            }()),
            O = n(68),
            k = n.n(O),
            C = n(32),
            j = n(22),
            _ = n(99);

        function P(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function z(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? P(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var S = n(574).InertiaPlugin;
        h.a.registerPlugin(S);
        var $ = {
                name: "insight-nav",
                data: function() {
                    return {
                        coef: 0,
                        navCards: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(j.a)("query navQuery($locale: String!) {\n  editionCollection(locale: $locale) {\n    items {\n      title\n      slug\n      cover {\n        url\n        width\n        height\n        title\n      }\n      backgroundColor\n      titleColor\n      ctaColor\n      publishDate\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, o = Object(_.b)(n.editionCollection.items), t.navCards = o;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                components: {
                    commonNavItem: c.default,
                    fragmentsCloseButton: l.default
                },
                computed: z(z(z({}, Object(d.d)(["allSections", "currentChapterSlug", "isNavOpen", "currentId"])), Object(d.c)(["currentId", "isTouch"])), {}, {
                    editions: function() {
                        return this.navCards
                    }
                }),
                methods: z(z({}, Object(d.b)(["set"])), {}, {
                    show: function() {
                        for (var t = 0; t < 5; t++) this.$refs.navItems[t] && h.a.fromTo(this.$refs.navItems[t].$el, {
                            opacity: 0,
                            x: "".concat(50 * t - 100, "%")
                        }, {
                            opacity: 1,
                            x: "0%",
                            duration: 1,
                            ease: "power3.out",
                            clearProps: "all",
                            delay: .2
                        })
                    },
                    onMouseDown: function() {
                        var t = this;
                        this.mouse.initialX = C.a.x, this.mouse.x = C.a.x, h.a.killTweensOf(this.mouse), this.isPressed = !0, this.set({
                            property: "isDragPressed",
                            value: this.isPressed
                        }), this.timer = setTimeout((function() {
                            t.$refs.navItems.forEach((function(t) {
                                t.$el.style.pointerEvents = "none"
                            }))
                        }), 200)
                    },
                    onMouseLeave: function() {
                        this.reset()
                    },
                    reset: function() {
                        this.isPressed = !1, clearTimeout(this.timer), this.$refs.navItems.forEach((function(t) {
                            t.$el.style.pointerEvents = "auto"
                        }))
                    },
                    onMouseUp: function() {
                        var t = this;
                        this.reset(), this.mouse.initialX = C.a.x, h.a.killTweensOf(this.mouse), h.a.fromTo(this.mouse, {
                            x: C.a.x
                        }, {
                            inertia: {
                                x: "auto",
                                duration: {
                                    min: .5,
                                    max: 3
                                }
                            },
                            onUpdate: function() {
                                var e = Math.floor((t.mouse.x - t.mouse.initialX) / 2);
                                t.x = x(t.x + e, -t.maxX, 0), t.mouse.initialX = t.mouse.x
                            }
                        }), this.set({
                            property: "isDragPressed",
                            value: this.isPressed
                        })
                    },
                    resize: function(t, e, n) {
                        var o = this,
                            r = Array.isArray(this.$refs.navItems) ? this.$refs.navItems.length : 12;
                        t && e && (this.w = t, this.h = e, this.ph = n), this.gutter = 30, this.listWidth = r * (220 + this.gutter), this.cardSize = 220, this.gutterOffset = 30, this.dragSpeedFactor = 1, this.w >= 600 && (this.gutter = 60), this.w >= 768 && (this.dragSpeedFactor = 2.5, this.gutter = 60, this.listWidth = 2070, this.gutterOffset = 0, this.cardSize = 295), this.w >= 1024 && (this.gutter = 60), this.w >= 1280 && (this.gutter = 60), this.easeX = this.tempEaseX = this.x = 0, h.a.set(this.$refs.list, {
                            x: 0,
                            width: this.listWidth
                        }), this.scrollerContW = this.$refs.scrollerCont.getBoundingClientRect().width, this.scrollerW = this.$refs.scroller.getBoundingClientRect().width, this.listW = this.$refs.list.scrollWidth, this.$refs.container.style.width = this.listW + "px", this.$refs.navItems.forEach((function(element) {
                            element.resize(o.w, o.h)
                        })), this.minX = 0, this.maxX = this.listW - this.scrollerContW - this.gutterOffset, this.checkPos()
                    },
                    checkPos: function() {
                        var t, e = this;
                        t = "index" === this.currentChapterSlug ? 0 : this.navCards.findIndex((function(t) {
                            return t.slug === e.currentChapterSlug
                        })), this._currentId = t;
                        var n = this._currentId > 0 ? (this.cardSize + this.gutter) * this._currentId : 0;
                        this._currentId > 0 ? n = n <= 0 ? 0 : n > 0 && n < this.maxX - this.gutter ? -n : -this.maxX : (n <= 0 && (n = 0), n > 0 && (n -= -this.maxX + this.gutter), n < -this.maxX + this.gutter && (n -= -this.maxX)), this.initialX = n, h.a.set(this.$refs.list, {
                            x: n
                        }), this.easeX = this.tempEaseX = this.x = n
                    },
                    tick: function() {
                        var t = this;
                        if (this.isNavOpen) {
                            if (y.tick(), this.isPressed) {
                                this.mouse.x = C.a.easeX;
                                var e = Math.floor((this.mouse.x - this.mouse.initialX) / 1.5);
                                this.x = x(this.x + e, -this.maxX, 0), this.velocity = this.mouse.x - this.mouse.initialX, this.mouse.initialX = this.mouse.x
                            }
                            this.wheelDelta !== y.delta && (this.x = x(this.x - y.deltaEase / this.dragSpeedFactor, -this.maxX, 0), this.wheelDelta = y.deltaEase / this.dragSpeedFactor);
                            var n = this.x / -this.maxX;
                            n <= 0 && (this.x = 0), n >= 1 && (this.x = -this.maxX), k()(this.$refs.scroller, {
                                translateX: (this.scrollerContW - this.scrollerW) * n
                            }), this.tempX !== this.x && (this.$refs.navItems.forEach((function(element) {
                                element.tick(-t.x, 1)
                            })), k()(this.$refs.list, {
                                translateX: this.x
                            }), this.tempX = this.x)
                        }
                    },
                    setColorBySlug: function(t) {
                        var e = "index" === t ? "#fc483a" : this.allSections.find((function(e) {
                            return e.slug === t
                        })).backgroundColor;
                        this.setColor(e)
                    },
                    setColor: function(t) {
                        this.$el.style.color = t
                    },
                    close: function() {
                        this.set({
                            property: "isNavOpen",
                            value: !1
                        })
                    }
                }),
                watch: {
                    isNavOpen: function(t) {
                        h.a.killTweensOf(this.mouse), t ? (y.addEvents(), this.checkPos(), this.show(), y.reset(0), this.select = this.$el.querySelector(".nav-item.selected"), this.select && this.select.addEventListener("click", this._close)) : (y.removeEvents(), this.select && this.select.removeEventListener("click", this._close))
                    },
                    currentChapterSlug: function(t) {
                        this.setColorBySlug(t)
                    }
                },
                beforeDestroy: function() {},
                mounted: function() {
                    var t = this;
                    this.$watch((function() {
                        return t.$i18n.locale
                    }), (function() {
                        t.$fetch()
                    })), this.mouse = {
                        x: 0
                    }, this.coef = 0, this._close = this.close.bind(this), this.tempX = -1, this.x = 0, this.easeX = 0, this.scale = 1, this.mouse.x = 0, this.tracker = S.track(this.mouse, "x")[0]
                }
            },
            M = (n(488), n(7)),
            component = Object(M.a)($, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("nav", {
                    staticClass: "insight-nav",
                    on: {
                        mouseup: function(e) {
                            !t.isTouch && t.onMouseUp()
                        },
                        mouseleave: function(e) {
                            !t.isTouch && t.onMouseLeave()
                        }
                    }
                }, [n("div", {
                    staticClass: "insight-nav-container c"
                }, [n("div", {
                    staticClass: "close-container"
                }, [n("fragments-close-button", {
                    class: {
                        isReady: t.isNavOpen
                    },
                    on: {
                        closeClicked: function(e) {
                            return t.set({
                                property: "isNavOpen",
                                value: !1
                            })
                        }
                    }
                })], 1), t._v(" "), n("div", {
                    staticClass: "flex"
                }, [n("div", {
                    staticClass: "inner-flex"
                }, [n("div", {
                    ref: "container",
                    staticClass: "drag-container",
                    attrs: {
                        "data-drag": "drag"
                    },
                    on: {
                        mousedown: function(e) {
                            !t.isTouch && t.onMouseDown()
                        }
                    }
                }, [n("div", {
                    key: this.$i18n.locale,
                    ref: "list",
                    staticClass: "content"
                }, t._l(t.navCards, (function(t, i) {
                    return n("common-nav-item", {
                        key: t.slug + i,
                        ref: "navItems",
                        refInFor: !0,
                        attrs: {
                            data: t
                        }
                    })
                })), 1)]), t._v(" "), n("div", {
                    ref: "scrollerCont",
                    staticClass: "scroller-container"
                }, [n("div", {
                    ref: "scroller",
                    staticClass: "scroller",
                    style: {
                        width: 100 / t.navCards.length + "%"
                    }
                })])])])])])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsCloseButton: n(55).default,
            CommonNavItem: n(110).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(16), n(17);
        var o = n(5),
            r = n(10),
            l = (n(14), n(23), n(313)),
            c = n.n(l),
            h = n(314),
            d = n.n(h),
            m = n(315),
            f = n.n(m),
            v = n(316),
            w = n.n(v),
            x = n(317),
            y = n.n(x),
            O = n(8),
            k = {
                name: "modal",
                data: function() {
                    return {
                        show: !1
                    }
                },
                methods: {
                    closeModal: function() {
                        this.show = !1, document.body.classList.remove("no-scroll")
                    },
                    openModal: function() {
                        this.show = !0, document.body.classList.add("no-scroll")
                    }
                }
            },
            C = (n(522), n(7)),
            j = Object(C.a)(k, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.show ? n("div", {
                    staticClass: "modal"
                }, [n("div", {
                    staticClass: "modal__backdrop",
                    on: {
                        click: function(e) {
                            return t.closeModal()
                        }
                    }
                }), t._v(" "), n("div", {
                    staticClass: "modal__dialog",
                    staticStyle: {
                        "min-height": "unset"
                    }
                }, [n("div", {
                    staticClass: "modal__header"
                }, [t._t("header"), t._v(" "), n("button", {
                    staticClass: "modal__close",
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: function(e) {
                            return t.closeModal()
                        }
                    }
                }, [n("span"), t._v(" "), n("span")])], 2), t._v(" "), n("div", {
                    staticClass: "modal__body"
                }, [t._t("body")], 2)])]) : t._e()])
            }), [], !1, null, "66401a02", null).exports,
            _ = n(22);

        function P(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function z(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? P(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : P(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var S = {
                name: "common-footer",
                data: function() {
                    return {
                        socialLinks: [],
                        footerLinks: [],
                        availableLocales: []
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o, r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(_.a)("query socialLinksQuery($locale: String!) {\n  footerCollection(locale: $locale) {\n    items {\n      socialLinksCollection {\n        items {\n          label\n          url\n        }\n      }\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    return n = e.sent, e.next = 5, Object(_.a)("query footerLinks($locale: String!) {\n  footerCollection(locale: $locale) {\n    items {\n      textLinksCollection {\n        items {\n          label\n          url\n        }\n      }\n      brandLabel\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 5:
                                    return o = e.sent, e.next = 8, Object(_.a)("query languagesQuery($locale: String!) {\n  footerCollection(locale: $locale) {\n    items {\n      languagesCollection {\n        items {\n          code\n          label\n          localisedLabel\n        }\n      }\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 8:
                                    r = e.sent, t.socialLinks = n.footerCollection.items[0].socialLinksCollection.items, t.footerLinks = o.footerCollection.items[0].textLinksCollection.items, t.availableLocales = r.footerCollection.items[0].languagesCollection.items;
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                components: {
                    instagram: c.a,
                    linkedin: d.a,
                    twitter: f.a,
                    youtube: w.a,
                    globe: y.a,
                    modal: j
                },
                computed: z(z({}, Object(O.d)(["common"])), {}, {
                    currentLocale: function() {
                        var code = this.$i18n.locale,
                            t = this.availableLocales.filter((function(t) {
                                return t.code === code
                            }))[0];
                        return {
                            code: code,
                            localisedLabel: t ? t.localisedLabel : "",
                            label: t ? t.label : ""
                        }
                    },
                    year: function() {
                        return (new Date).getFullYear()
                    },
                    socials: function() {
                        return this.socialLinks
                    },
                    links: function() {
                        return this.footerLinks
                    },
                    globeIcon: function() {
                        return "globe"
                    }
                }),
                methods: {},
                watch: {},
                mounted: function() {
                    var t = this;
                    this.$watch((function() {
                        return t.$i18n.locale
                    }), (function() {
                        t.$fetch()
                    }))
                }
            },
            $ = (n(524), Object(C.a)(S, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "common-footer"
                }, [n("nav", {
                    staticClass: "callout footer-container"
                }, [n("div", {
                    staticClass: "w-160"
                }), t._v(" "), n("ul", {
                    staticClass: "socials",
                    staticStyle: {
                        width: "100%"
                    }
                }, t._l(t.socials, (function(link) {
                    return n("li", {
                        key: link.url
                    }, [n("a", {
                        staticClass: "side-nav-link",
                        attrs: {
                            href: link.url,
                            rel: "noopener",
                            target: "_blank"
                        }
                    }, [n(link.label, {
                        tag: "component",
                        attrs: {
                            "aria-label": link.label
                        }
                    })], 1)])
                })), 0), t._v(" "), n("ul", {
                    staticClass: "links"
                }, [n("li", [n("button", {
                    staticClass: "lang-selector",
                    on: {
                        click: function(e) {
                            return t.$refs.languageSelectorModal.openModal()
                        }
                    }
                }, [n(t.globeIcon, {
                    tag: "component",
                    attrs: {
                        "aria-label": t.currentLocale.localisedLabel
                    }
                }), t._v("\n          " + t._s(t.currentLocale.label) + "\n        ")], 1)]), t._v(" "), t._l(t.links, (function(link) {
                    return n("li", {
                        key: link.id
                    }, [n("a", {
                        staticClass: "side-nav-link",
                        attrs: {
                            href: link.url,
                            rel: "noopener",
                            target: "_blank"
                        },
                        domProps: {
                            textContent: t._s(link.label)
                        }
                    })])
                })), t._v(" "), n("li", {
                    staticClass: "side-nav-link show-above-m"
                }, [t._v("© " + t._s(t.year) + " SPOTIFY")])], 2), t._v(" "), n("li", {
                    staticClass: "side-nav-link show-below-m",
                    staticStyle: {
                        "text-align": "center"
                    }
                }, [t._v("\n      © " + t._s(t.year) + " SPOTIFY\n    ")])]), t._v(" "), n("modal", {
                    ref: "languageSelectorModal",
                    scopedSlots: t._u([{
                        key: "header",
                        fn: function() {
                            return [n("h1", {
                                attrs: {
                                    id: "language-selector-title"
                                }
                            }, [t._v("Choose a Language")])]
                        },
                        proxy: !0
                    }, {
                        key: "body",
                        fn: function() {
                            return [n("ul", {
                                staticClass: "language-options-list"
                            }, t._l(t.availableLocales, (function(e) {
                                return n("nuxt-link", {
                                    key: e.code,
                                    staticClass: "navbar-item",
                                    attrs: {
                                        to: t.switchLocalePath(e.code)
                                    }
                                }, [n("button", {
                                    on: {
                                        click: function(e) {
                                            return t.$refs.languageSelectorModal.closeModal()
                                        }
                                    }
                                }, [n("client-only", [n("li", {
                                    staticClass: "language-option",
                                    class: t.currentLocale.code === e.code ? "active-locale" : ""
                                }, [n("h4", [t._v(t._s(e.label))]), t._v(" "), n("span", [t._v(t._s(e.localisedLabel))])])])], 1)])
                            })), 1)]
                        },
                        proxy: !0
                    }])
                })], 1)
            }), [], !1, null, null, null));
        e.default = $.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(10),
            l = (n(23), n(46), n(47), n(139), n(2)),
            c = n(51),
            h = n.n(c),
            d = (n(56), n(8)),
            m = n(22);

        function f(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function v(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var w = {
                name: "insight-content",
                data: function() {
                    return {
                        w: null,
                        preFooterCopy: {},
                        prefooterCta: "",
                        prefooterAction: "",
                        prefooterLink: "",
                        prefooterTitle: "",
                        labels: {},
                        componentUpdateKey: 0
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o, r, l;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.$nuxt.context.route, e.next = 3, Object(m.a)("query footerLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      actionLabel\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 3:
                                    return o = e.sent, e.next = 6, Object(m.a)("query preFooterQuery($locale: String!) {\n  footerCollection(locale: $locale) {\n    items {\n      prefooterTitle\n      prefooterAction\n      prefooterCta\n      prefooterEditionAction\n      prefooterEditionCta\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 6:
                                    if (r = e.sent, t.labels = o.commonCopyCollection.items[0], t.prefooterTitle = r.footerCollection.items[0].prefooterTitle, t.prefooterLink = "https://artists.spotify.com/features", t.prefooterAction = r.footerCollection.items[0].prefooterAction, t.prefooterCta = r.footerCollection.items[0].prefooterCta, t.preFooterCopy = r.footerCollection.items[0], !t.$route.path.includes("edition")) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.next = 16, Object(m.a)("query editionPrefooterQuery ($slug: String!, $locale: String!){\n    editionCollection(where: { slug: $slug }, locale: $locale) {\n      items {\n        editionPrefooterLink\n      }\n    }\n  }\n  ", {
                                        locale: t.$i18n.locale,
                                        slug: n.params.slug
                                    });
                                case 16:
                                    l = e.sent, t.prefooterLink = l.editionCollection.items[0].editionPrefooterLink, t.prefooterAction = r.footerCollection.items[0].prefooterEditionAction, t.prefooterCta = r.footerCollection.items[0].prefooterEditionCta, t.preFooterCopy = r.footerCollection.items[0];
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                computed: v(v({}, Object(d.d)(["currentLocale"])), Object(d.c)(["currentLocale"])),
                components: {
                    svgArrow: h.a
                },
                methods: {
                    resize: function(t, e) {
                        this.w = t, this.h = e;
                        var n = this.$el.getBoundingClientRect(),
                            o = n.top,
                            r = n.height;
                        this.top = o + this.scrollTop, this.height = r, this.start = Math.floor(o + this.scrollTop - e), this.end = Math.floor(this.start + r + e)
                    },
                    tick: function(t) {
                        var body = document.body,
                            html = document.documentElement,
                            e = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                        this.w && (window.scrollY >= e - 1500 ? this.show() : this.reset()), this.scrollTop = t
                    },
                    show: function() {
                        this.isShown || (this.isShown = !0, l.a.to(this.lines, {
                            y: "0%",
                            stagger: .2,
                            duration: .9,
                            delay: .3,
                            ease: "power3.out"
                        }), l.a.to(this.stagger, {
                            y: 0,
                            opacity: 1,
                            duration: .7,
                            delay: .6,
                            stagger: .1,
                            ease: "power3.out"
                        }))
                    },
                    reset: function() {
                        this.isShown && (this.isShown = !1, l.a.killTweensOf(this.lines), l.a.killTweensOf(this.stagger), l.a.set(this.lines, {
                            y: "110%"
                        }), l.a.set(this.stagger, {
                            y: 100,
                            opacity: 0
                        }))
                    }
                },
                beforeDestroy: function() {
                    this.link && this.link.removeEventListener("click", this._onLinkClick)
                },
                mounted: function() {
                    var t = this;
                    this.$watch((function() {
                        return t.$i18n.locale
                    }), (function() {
                        t.$fetch()
                    })), this.$watch((function() {
                        return t.$route.path
                    }), (function() {
                        t.$fetch()
                    }))
                }
            },
            x = (n(520), n(7)),
            component = Object(x.a)(w, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("section", {
                    key: "prefooter_section_" + t.componentUpdateKey,
                    staticClass: "pre-footer"
                }, [n("div", {
                    staticClass: "flex content-container c"
                }, [n("div", {
                    staticClass: "w-160 show-above-m"
                }), t._v(" "), n("div", {
                    staticClass: "title"
                }, [n("strong", {
                    ref: "title",
                    staticClass: "h3 inline-span",
                    domProps: {
                        innerHTML: t._s(t.prefooterTitle)
                    }
                })]), t._v(" "), n("div", {
                    staticClass: "w-560"
                }, [n("div", {
                    ref: "cta",
                    staticClass: "cta"
                }, [n("div", {
                    staticClass: "stroke  show-above-m"
                }), t._v(" "), n("div", {
                    ref: "small",
                    staticClass: "w-160"
                }, [n("small", {
                    domProps: {
                        innerHTML: t._s(t.labels.actionLabel)
                    }
                })]), t._v(" "), n("div", [n("div", {
                    ref: "text",
                    staticClass: "cta-text body-4"
                }, [n("p", {
                    domProps: {
                        innerHTML: t._s(t.prefooterAction)
                    }
                })]), t._v(" "), n("a", {
                    ref: "link",
                    staticClass: "link-arrow  button",
                    attrs: {
                        href: t.prefooterLink,
                        rel: "noopener"
                    }
                }, [t._v("\n            " + t._s(t.prefooterCta) + "\n            "), n("span", {
                    staticClass: "arrow"
                }, [n("svg-arrow")], 1)])])])])])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(34),
            r = n(5),
            l = n(10),
            c = (n(26), n(23), n(2)),
            h = n(32),
            d = n(68),
            m = n.n(d),
            f = n(8),
            v = n(20),
            w = n(22);

        function x(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function y(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? x(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : x(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var O = {
                name: "mouse",
                data: function() {
                    return {
                        type: "mouse-link",
                        isHover: !1,
                        labels: {}
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(l.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(w.a)("query mouseLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      dragAction\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, o = n.commonCopyCollection.items[0], t.labels = o;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                computed: y({}, Object(f.d)(["isDragPressed", "isLinkCopied", "isButtonGrab"])),
                components: {},
                methods: y(y({}, Object(f.b)(["set"])), {}, {
                    tick: function() {
                        h.a.tick();
                        var t = h.a.easeX,
                            e = h.a.easeY;
                        m()(this.$el, {
                            translate3d: [t, e, 0],
                            rotate: Math.abs(this.oldX - t) > Math.abs(this.oldY - e) ? this.oldX - t : this.oldY - e
                        }), this.oldX = t, this.oldY = e
                    },
                    onLinkOver: function(t) {
                        t.currentTarget.dataset.label ? this.type = "view" : t.currentTarget.dataset.drag ? this.type = "drag" : t.currentTarget.dataset.popinclose ? this.type = "popin-close" : t.currentTarget.dataset.copy ? this.type = "copy" : (t.currentTarget.dataset.select, this.type = "mouse-link"), this.isHover = !0
                    },
                    onLinkOut: function(t) {
                        this.type = "", this.isHover = !1
                    },
                    removeListeners: function() {
                        var t = this;
                        this.links && (this.links.forEach((function(link) {
                            link.removeEventListener("mouseenter", t._onLinkOver), link.removeEventListener("mouseleave", t._onLinkOut), link.removeEventListener("mouseover", t._onLinkOver), link.removeEventListener("mouseout", t._onLinkOut), link.removeEventListener("click", t._onLinkOut)
                        })), this.onLinkOut())
                    },
                    addListeners: function() {
                        var t = this;
                        this.links && this.removeListeners();
                        var e = [].slice.call(document.querySelectorAll(".insight-preview  a")),
                            n = [].slice.call(document.querySelectorAll(".link-arrow")),
                            r = [].slice.call(document.querySelectorAll(".insight-preview .link"));
                        this.links = [].concat(Object(o.a)(e), Object(o.a)(this.footerLinks), Object(o.a)(this.languageSelectorLink), [this.navContainer], Object(o.a)(this.navLinks), Object(o.a)(n), Object(o.a)(r)), document.querySelector(".popin-bg") && this.links.push(document.querySelector(".popin-bg")), document.querySelector(".select") && this.links.push(document.querySelector(".select")), document.querySelector(".popin button.fragments-close-button") && this.links.push(document.querySelector(".popin button.fragments-close-button")), this.links.forEach((function(link) {
                            link.addEventListener("mouseenter", t._onLinkOver, {
                                passive: !0
                            }), link.addEventListener("mouseleave", t._onLinkOut, {
                                passive: !0
                            }), link.addEventListener("mouseover", t._onLinkOver, {
                                passive: !0
                            }), link.addEventListener("mouseout", t._onLinkOut, {
                                passive: !0
                            }), link.dataset.copy || link.dataset.select || link.addEventListener("click", t._onLinkOut, {
                                passive: !0
                            })
                        }))
                    }
                }),
                mounted: function() {
                    var t = this;
                    this._onLinkOver = this.onLinkOver.bind(this), this._onLinkOut = this.onLinkOut.bind(this), this.footerLinks = [].slice.call(document.querySelectorAll(".common-footer a")), this.languageSelectorLink = [].slice.call(document.querySelectorAll(".common-footer button")), this.navContainer = document.querySelector(".insight-nav .drag-container"), this.navLinks = [document.querySelector(".main-header .nav-icon"), document.querySelector(".insight-nav button.fragments-close-button"), document.querySelector(".nav-bg"), document.querySelector("a.logo")];
                    var e = this.$el.querySelector(".border circle"),
                        n = e.getTotalLength();
                    e.style.strokeDashoffset = n, e.style.strokeDasharray = n, c.a.fromTo(this.$el, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: 1,
                        clearProps: "all",
                        duration: 1
                    }), h.a.setMouse(), this.oldX = this.easeX = h.a.easeX, this.oldY = this.easeY = h.a.easeY, setTimeout((function() {
                        t.addListeners()
                    }), 1e3), v.a.on("MOUSELINK:RESET", this.addListeners.bind(this))
                }
            },
            k = (n(526), n(7)),
            component = Object(k.a)(O, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "mouse",
                    class: [{
                        isHover: t.isHover,
                        isLinkCopied: t.isLinkCopied,
                        isDragPressed: t.isDragPressed,
                        isButtonGrab: t.isButtonGrab
                    }, t.type]
                }, [t._m(0), t._v(" "), n("small", {
                    staticClass: "drag-label line"
                }, [n("span", {
                    staticClass: "inner"
                }, [t._v(t._s(t.labels.dragAction))])]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), n("div", {
                    staticClass: "rotating"
                }, [n("svg", {
                    staticClass: "circle dashed",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "48",
                        "stroke-width": "1",
                        "stroke-dasharray": "1, 4",
                        fill: "none",
                        stroke: "white"
                    }
                })])]), t._v(" "), n("svg", {
                    staticClass: "circle filled",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "45",
                        "stroke-width": "1",
                        "stroke-dashArray": "4 1",
                        fill: "white",
                        stroke: "none"
                    }
                })]), t._v(" "), n("svg", {
                    staticClass: "circle border",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "48",
                        "stroke-width": "1",
                        stroke: "white",
                        fill: "none"
                    }
                })]), t._v(" "), n("svg", {
                    staticClass: "circle border-sml",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "24",
                        "stroke-width": "2",
                        stroke: "white",
                        fill: "none"
                    }
                })]), t._v(" "), n("svg", {
                    staticClass: "circle border-copy",
                    attrs: {
                        viewBox: "0 0 70 70"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "35",
                        cy: "35",
                        r: "34",
                        "stroke-width": "2",
                        stroke: "white",
                        fill: "none"
                    }
                })]), t._v(" "), t._m(3)])
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("small", {
                    staticClass: "view-label line"
                }, [n("span", {
                    staticClass: "inner"
                }, [t._v("view insight")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("small", {
                    staticClass: "view-data-label line"
                }, [n("span", {
                    staticClass: "inner"
                }, [t._v("view data")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("small", {
                    staticClass: "close-label line"
                }, [n("span", {
                    staticClass: "inner"
                }, [t._v("close")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "copy-link"
                }, [n("span", [n("small", [t._v("copy insight url")]), t._v(" "), n("small", [t._v("copied")])])])
            }], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(310),
            l = n.n(r),
            c = n(144),
            h = n.n(c),
            d = n(311),
            m = n.n(d),
            f = n(2),
            v = n(8);

        function w(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        var x = {
                name: "loader",
                data: function() {
                    return {}
                },
                components: {
                    svgLogo: m.a,
                    svgFanStudy: l.a,
                    svgGradients: h.a
                },
                methods: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? w(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(v.b)(["set"])),
                mounted: function() {
                    var t = this;
                    console.warn(this.$router), "/" === this.$route.path && setTimeout((function() {
                        t.$refs.content.style.opacity = 1, t.$refs.content.classList.add("animate"), f.a.to(t.$refs.bg, {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.out"
                        }), setTimeout((function() {
                            t.$refs.content.classList.add("hide"), f.a.to(t.$refs.bg, {
                                opacity: 0,
                                duration: 1,
                                delay: .6,
                                ease: "power3.out",
                                onComplete: function() {}
                            })
                        }), 1500)
                    }), 200)
                }
            },
            y = (n(472), n(7)),
            component = Object(y.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "loader"
                }, [n("div", {
                    ref: "bg",
                    staticClass: "loader-bg"
                }), t._v(" "), n("div", {
                    ref: "content",
                    staticClass: "loader-content"
                }, [n("div", {
                    staticClass: "study"
                }, [n("svg-fan-study", {
                    staticClass: "fan-study"
                })], 1), t._v(" "), n("svg-gradients", {
                    staticClass: "gradients"
                }), t._v(" "), n("svg-logo", {
                    staticClass: "logo"
                })], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(8);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var h = {
                name: "nav-bg",
                data: function() {
                    return {}
                },
                computed: c({}, Object(r.d)(["isNavOpen"])),
                methods: c({}, Object(r.b)(["set"]))
            },
            d = (n(490), n(7)),
            component = Object(d.a)(h, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "nav-bg",
                    attrs: {
                        "data-popinclose": "true"
                    },
                    on: {
                        click: function(e) {
                            return t.set({
                                property: "isNavOpen",
                                value: !1
                            })
                        }
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(34),
            r = n(5),
            l = (n(38), n(62), n(52), n(2)),
            c = n(112),
            h = n(8),
            d = n(20);

        function m(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function f(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? m(Object(source), !0).forEach((function(e) {
                    Object(r.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var v = {
                name: "gradient-manager",
                data: function() {
                    return {
                        isShown: !0
                    }
                },
                components: {
                    gradientBg: c.default
                },
                computed: f(f({}, Object(h.d)(["allSections", "currentChapterSlug"])), {}, {
                    colors: function() {
                        return ["#3d293d"].concat(Object(o.a)(this.allSections.map((function(t) {
                            return t.backgroundColor
                        }))))
                    }
                }),
                methods: {
                    tick: function(t) {
                        this.scrollTop !== t && (this.isReady && (this.isShown = !0), this.scrollTop = t)
                    },
                    hexToRgbA: function(t) {
                        var e;
                        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(t)) return 3 == (e = t.substring(1).split("")).length && (e = [e[0], e[0], e[1], e[1], e[2], e[2]]), [(e = "0x" + e.join("")) >> 16 & 255, e >> 8 & 255, 255 & e].join(",");
                        throw new Error("Bad Hex")
                    },
                    show: function(t) {
                        var e = "index" === t ? -1 : this.allSections.indexOf(this.allSections.find((function(e) {
                            return e.slug === t
                        })));
                        this.$refs.gradients[e + 1].show()
                    },
                    hide: function(t) {
                        var e = "index" === t ? -1 : this.allSections.indexOf(this.allSections.find((function(e) {
                            return e.slug === t
                        })));
                        this.$refs.gradients[e + 1].hide()
                    }
                },
                watch: {
                    currentChapterSlug: function(t, e) {
                        this.hide(e), this.show(t)
                    }
                },
                beforeDestroy: function() {},
                mounted: function() {
                    var t = this;
                    l.a.set(this.$el, {
                        opacity: 0
                    }), d.a.on("GLOBAL:ON_INTRO_DONE", (function() {
                        l.a.to(t.$el, {
                            opacity: 1,
                            duration: 1,
                            delay: .5,
                            clearProps: "all"
                        })
                    })), setTimeout((function() {
                        t.show(t.currentChapterSlug)
                    }), 100), setTimeout((function() {
                        t.isReady = !0
                    }), 1e3)
                }
            },
            w = (n(494), n(7)),
            component = Object(w.a)(v, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "gradient-manager",
                    class: {
                        isShown: t.isShown
                    }
                }, [n("div", {
                    staticClass: "gradient-container",
                    class: {
                        isShown: t.isShown
                    }
                }, t._l(t.colors, (function(t, i) {
                    return n("gradient-bg", {
                        key: "gradient-" + i,
                        ref: "gradients",
                        refInFor: !0,
                        staticClass: "gradient",
                        attrs: {
                            color: t
                        }
                    })
                })), 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            GradientBg: n(112).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(27), n(8)),
            l = n(68),
            c = n.n(l),
            h = n(2),
            d = n(20);

        function m(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function f(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? m(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : m(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var v = {
                name: "mainHeader",
                computed: f({}, Object(r.d)(["currentChapterSlug", "showPopin", "showBanner"])),
                data: function() {
                    return {
                        w: null,
                        isShown: !0
                    }
                },
                components: {
                    svgLogoHeader: function() {
                        return n.e(23).then(n.t.bind(null, 646, 7))
                    },
                    svgFanStudy: function() {
                        return Promise.resolve().then(n.t.bind(null, 310, 7))
                    },
                    svgLogo: function() {
                        return Promise.resolve().then(n.t.bind(null, 311, 7))
                    },
                    svgBannerArrow: function() {
                        return n.e(22).then(n.t.bind(null, 647, 7))
                    }
                },
                methods: f(f({}, Object(r.b)(["toggleNav", "hideBanner"])), {}, {
                    tick: function(t, e) {
                        var body = document.body,
                            html = document.documentElement,
                            n = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
                        c()(this.$refs.scroller, {
                            scaleX: t / (n - this.h)
                        }), this.scrollTop !== t && (this.isReady && (this.isShown = this.scrollTop > t || 0 === t), this.scrollTop = t)
                    },
                    setColor: function(t, e) {
                        this.$el.style.color = t, this.$el.style.setProperty("--hover", e)
                    },
                    resize: function(t, e) {
                        this.w = t, this.h = e
                    },
                    show: function() {
                        h.a.to(this.stagger, {
                            opacity: 1,
                            duration: 1,
                            ease: "power2.out",
                            stagger: .3,
                            clearProps: "all"
                        }), h.a.to(this.$refs.scrollerContainer, {
                            scaleX: 1,
                            duration: .75,
                            ease: "power3.out",
                            clearProps: "all"
                        })
                    }
                }),
                watch: {
                    currentChapterSlug: function(t) {
                        switch (this.currentChapterSlug) {
                            case "index":
                                this.setColor("#fc483a", "#fb643f");
                                break;
                            case "reach":
                                this.setColor("#3d293d", "#A0C3D2");
                                break;
                            case "engagement":
                                this.setColor("#3d293d", "#FFCDD2");
                                break;
                            case "release":
                                this.setColor("#3d293d", "#FFC864");
                                break;
                            case "merch":
                            case "merch-2":
                                this.setColor("#3d293d", "#C3F0C8");
                                break;
                            case "global":
                                this.setColor("#3d293d", "#FFC864")
                        }
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$watch((function() {
                        return t.$route.name
                    }), (function() {
                        t.$route.name === "index___".concat(t.$i18n.locale) ? t.setColor("#fc483a", "#fb643f") : t.setColor("#3d293d", "#3d293d")
                    })), this.$route.name === "index___".concat(this.$i18n.locale) ? this.setColor("#fc483a", "#fb643f") : this.setColor("#3d293d", "#3d293d"), this.w = window.innerWidth, this.$nextTick((function() {
                        t.stagger = [t.$el.querySelector(".link-container"), t.$el.querySelector(".button-container")], t.$el.querySelector(".end") && t.stagger.push(t.$el.querySelector(".end")), h.a.set(t.stagger, {
                            opacity: 0
                        }), h.a.set(t.$refs.scrollerContainer, {
                            scaleX: 0
                        }), d.a.on("GLOBAL:ON_INTRO_DONE", t.show.bind(t))
                    })), setTimeout((function() {
                        t.isReady = !0
                    }), 1e3)
                }
            },
            w = (n(496), n(7)),
            component = Object(w.a)(v, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("header", {
                    staticClass: "main-header isShown c",
                    class: {
                        showPopin: t.showPopin, showBanner: t.showBanner
                    }
                }, [n("div", {
                    ref: "banner",
                    staticClass: "banner"
                }, [n("div", {
                    staticClass: "banner-content"
                }), t._v(" "), n("div", {
                    staticClass: "banner-close-container"
                }, [n("button", {
                    staticClass: "close-banner",
                    attrs: {
                        "aria-label": "hide banner"
                    },
                    on: {
                        click: t.hideBanner
                    }
                }, [n("span"), t._v(" "), n("span")])])]), t._v(" "), n("div", {
                    ref: "container",
                    staticClass: "container"
                }, [n("div", {
                    ref: "content",
                    staticClass: "content"
                }, [n("div", {
                    staticClass: "link-container"
                }, [n("n-link", {
                    staticClass: "logo",
                    attrs: {
                        to: t.localePath("index"),
                        "aria-label": "spotify"
                    }
                }, [n("client-only", [t.w && t.w < 768 ? n("svg-logo-header", {
                    staticClass: "logo-header"
                }) : t._e(), t._v(" "), t.w && t.w < 768 ? n("div", {
                    staticClass: "separator"
                }) : t._e()], 1), t._v(" "), n("svg-logo", {
                    staticClass: "logo"
                })], 1)], 1), t._v(" "), n("div", {
                    staticClass: "button-container"
                }, [n("button", {
                    staticClass: "nav-icon",
                    attrs: {
                        "aria-label": "toggle navigation"
                    },
                    on: {
                        click: t.toggleNav
                    }
                }, [n("span"), t._v(" "), n("span")])]), t._v(" "), n("client-only", [t.w && t.w >= 768 ? n("div", {
                    staticClass: "end"
                }, [n("svg-fan-study", {
                    staticClass: "fan-study"
                }), t._v(" "), n("svg-logo-header", {
                    staticClass: "logo-header"
                })], 1) : t._e()])], 1), t._v(" "), n("div", {
                    ref: "scrollerContainer",
                    staticClass: "scroller-container"
                }, [n("div", {
                    ref: "scroller",
                    staticClass: "scroller"
                }), t._v(" "), n("div", {
                    staticClass: "bar"
                })])])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(2),
            l = n(8),
            c = n(20);

        function h(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function d(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var m = {
                name: "transition",
                data: function() {
                    return {
                        isReady: !1
                    }
                },
                computed: d({}, Object(l.d)(["isSeamlessTransition"])),
                methods: d(d({}, Object(l.b)(["set"])), {}, {
                    onPageMounted: function() {
                        var t = this;
                        this.isReady = !0;
                        var e = document.querySelector("[data-slug=".concat(this.isSeamlessTransition.slug, "] .insight-preview ")).getBoundingClientRect().top;
                        r.a.killTweensOf(this.$refs.container), r.a.to(this.$refs.container, {
                            y: e,
                            duration: 1.2,
                            ease: "power3.inOut",
                            force3D: !0
                        }).then((function() {
                            r.a.delayedCall(.2, (function() {
                                t.set({
                                    property: "isSeamlessTransition",
                                    value: !1
                                })
                            }))
                        }))
                    }
                }),
                beforeDestroy: function() {
                    c.a.removeListener("PAGE:MOUNTED", this._onPageMounted)
                },
                mounted: function() {
                    this.oldEl = document.querySelector("[data-preview-slug=".concat(this.isSeamlessTransition.slug, "]")), this.$refs.top.appendChild(this.oldEl.cloneNode(!0)), this.$refs.bottom.appendChild(this.oldEl.cloneNode(!0));
                    var t = this.oldEl.getBoundingClientRect().top;
                    this.$refs.top.querySelector(".tag").style.color = this.isSeamlessTransition.section.titleColor, this._onPageMounted = this.onPageMounted.bind(this), c.a.on("PAGE:MOUNTED", this._onPageMounted), r.a.fromTo(this.$refs.container, {
                        y: t,
                        opacity: 0
                    }, {
                        opacity: 1,
                        duration: .7,
                        ease: "power3.out"
                    })
                }
            },
            f = (n(498), n(7)),
            component = Object(f.a)(m, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "transition",
                    class: {
                        isReady: t.isReady
                    }
                }, [n("div", {
                    ref: "container",
                    staticClass: "container"
                }, [n("div", {
                    ref: "bottom",
                    staticClass: "bottom"
                }), t._v(" "), n("div", {
                    ref: "top",
                    staticClass: "top"
                })])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(10),
            content = (n(23), n(108)),
            l = n(114),
            c = n(77),
            h = n(2),
            d = n(8),
            m = n(20),
            f = (n(57), n(146)),
            v = n.n(f),
            w = n(22),
            x = n(190);

        function y(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function O(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? y(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : y(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var k = {
                name: "editionPage",
                data: function() {
                    return {
                        insights: [],
                        edition: "",
                        editionContent: [],
                        _currentId: -1,
                        w: null,
                        test: "default"
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.$nuxt.context.route, e.next = 3, Object(w.a)(x.a, {
                                        slug: n.params.slug,
                                        locale: t.$i18n.locale
                                    });
                                case 3:
                                    o = e.sent, t.insights = o.editionCollection.items[0].insightsCollection.items, t.editionContent = o.editionCollection.items, t.edition = n.params.slug;
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                components: {
                    editionContent: content.default,
                    insightPopinBg: c.default,
                    editionHero: l.default,
                    svgClose: v.a
                },
                computed: O(O({}, Object(d.d)(["allSections", "insightSelected", "showPopin", "slug"])), Object(d.c)(["currentId", "currentSectionId", "section"])),
                methods: O(O({}, Object(d.b)(["set"])), {}, {
                    asyncData: function(t) {
                        var e = this;
                        return Object(r.a)(regeneratorRuntime.mark((function n() {
                            var o, r;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return o = t.params, n.next = 3, Object(w.a)(x.a, {
                                            slug: o.slug,
                                            locale: e.$i18n.locale
                                        });
                                    case 3:
                                        r = n.sent, e.insights = r.editionCollection.items[0].insightsCollection.items, e.editionContent = r.editionCollection.items, e.edition = o.slug, e.set({
                                            property: "currentChapterSlug",
                                            value: o.slug
                                        });
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    transitionShowPopin: function(t, e) {
                        h.a.delayedCall(1, e)
                    },
                    transitionHidePopin: function(t, e) {
                        h.a.delayedCall(1, e), this.$refs.popin.hide()
                    },
                    performTick: function(t) {
                        var e = this,
                            n = setInterval((function() {
                                e.$refs.insights && (e.tick(t), clearInterval(n))
                            }), 50)
                    },
                    tick: function(t) {
                        var e, n = 0;
                        null === (e = this.$refs.buttonData) || void 0 === e || e.tick(), this.$refs.insights.forEach((function(element, i) {
                            element.tick(t)
                        })), this.scrollTop !== t && (this.scrollTop < t && (this.$refs.insights.forEach((function(element, i) {
                            t > element.$data.top + .7 * element.$data.height && (n = i + 1)
                        })), n = n === this.$refs.insights.length ? this.allInsights.length - 1 : n), this.scrollTop > t && (n = 0, this.$refs.insights.forEach((function(element, i) {
                            t > element.$data.top + .7 * element.$data.height && (n = i + 1)
                        })), n = n === this.$refs.insights.length ? this.allInsights.length - 1 : n), this.showPopin || this._currentId !== n && (this._currentId = n, this.set({
                            property: "currentShapeId",
                            value: n
                        }))), this.scrollTop = t
                    },
                    resize: function(t, e) {
                        var n, o = this;
                        this.canResize = !1, t && e && (this.w = t, this.h = e), null === (n = this.$refs.buttonData) || void 0 === n || n.resize(this.w, this.h);
                        var r = setInterval((function() {
                            o.$refs.insights && (o.canResize = !0, clearInterval(r))
                        }), 50);
                        !0 === this.canResize && this.$refs.insights.forEach((function(t) {
                            t.resize(o.w, o.h)
                        }))
                    },
                    show: function() {
                        h.a.fromTo(this.$el, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .7,
                            ease: "power3.out"
                        })
                    },
                    hide: function() {
                        h.a.to(this.$el, {
                            opacity: 0,
                            duration: .7,
                            ease: "power3.out"
                        })
                    }
                }),
                watch: {
                    $route: {
                        handler: "asyncData",
                        immediate: !0
                    },
                    insightSelected: function(t) {
                        var e = this;
                        t && (this.timer = clearTimeout(this.timer), this.timer = setTimeout((function() {
                            var t = (0).top;
                            (window.innerWidth <= 1024 ? document.getElementById("__layout") : window).scrollTo({
                                top: t + e.scrollTop,
                                behavior: "smooth"
                            })
                        }), 1e3))
                    }
                },
                mounted: function() {
                    var t = this,
                        e = this.$nuxt.context.route;
                    this.scrollTop = 0, this._currentId = this.currentId, this.set({
                        property: "currentShapeId",
                        value: this.currentId
                    }), this._currentSectionId = this.currentSectionId;
                    this.scrollTop = 0, this.performTick(0), this.$nextTick((function() {
                        m.a.emit("PAGE:MOUNTED"), t.set({
                            property: "currentChapterSlug",
                            value: e.params.slug
                        })
                    }))
                }
            },
            C = (n(516), n(7)),
            component = Object(C.a)(k, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "edition-page "
                }, [t._l(t.editionContent, (function(t) {
                    return n("edition-hero", {
                        key: t.slug,
                        ref: "chapters",
                        refInFor: !0,
                        attrs: {
                            data: t
                        }
                    })
                })), t._v(" "), t._l(t.insights, (function(e, o) {
                    return n("edition-content", {
                        key: e.slug,
                        ref: "insights",
                        refInFor: !0,
                        class: {
                            hide: t.showPopin
                        },
                        attrs: {
                            edition: t.edition,
                            editionLabel: t.editionContent,
                            data: e,
                            figure: o,
                            figureCount: t.insights.length
                        }
                    })
                })), t._v(" "), t.showPopin ? n("insight-popin-bg") : t._e(), t._v(" "), n("transition", {
                    attrs: {
                        name: "popin-transition",
                        duration: {
                            enter: 1e3,
                            leave: 500
                        }
                    }
                }, [t.showPopin ? n("insight-popin", {
                    key: t.slug,
                    ref: "popin"
                }) : t._e()], 1)], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            EditionHero: n(114).default,
            EditionContent: n(108).default,
            InsightPopinBg: n(77).default,
            InsightPopin: n(140).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(52);
        var o = {
                name: "custom-select",
                data: function() {
                    return {
                        isReady: !1
                    }
                },
                props: ["data", "currentItem", "label"],
                computed: {
                    array: function() {
                        var t = this,
                            e = [];
                        return this.data.forEach((function(element) {
                            element.slug !== t.currentItem && e.push(element)
                        })), e
                    },
                    currentLabel: function() {
                        var t = this;
                        return "".concat(this.data.find((function(e) {
                            return e.slug === t.currentItem
                        })).label, '<svg  viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0.5H0L5 6.5L10 0.5Z" /></svg>')
                    }
                },
                methods: {
                    hide: function() {
                        this.isReady = !1
                    },
                    close: function() {
                        var t = this;
                        this.hide(), setTimeout((function() {
                            t.$emit("close")
                        }), 500)
                    }
                },
                beforeDestroy: function() {
                    this.$el.classList.remove("isReady"), window.removeEventListener("click", this._close)
                },
                mounted: function() {
                    var t = this;
                    this._close = this.close.bind(this), setTimeout((function() {
                        window.addEventListener("click", t._close), t.isReady = !0
                    }), 100)
                }
            },
            r = (n(530), n(7)),
            component = Object(r.a)(o, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "select-list",
                    class: {
                        isReady: t.isReady
                    }
                }, [n("div", {
                    staticClass: "select-content"
                }, [n("div", {
                    staticClass: "top"
                }, [n("div", {
                    staticClass: "label  line"
                }, [n("div", {
                    staticClass: "inner"
                }, [n("label", {
                    attrs: {
                        for: "type"
                    },
                    domProps: {
                        textContent: t._s(t.label ? t.label : "Listeners of")
                    }
                }), t._v(" "), n("span", {
                    domProps: {
                        innerHTML: t._s(t.currentLabel)
                    }
                })])])]), t._v(" "), n("ul", t._l(t.array, (function(e) {
                    return n("li", {
                        key: e.slug
                    }, [n("button", {
                        domProps: {
                            textContent: t._s(e.label)
                        },
                        on: {
                            click: function(n) {
                                t.$emit("change", e.slug), t.close()
                            }
                        }
                    })])
                })), 0)])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        e.a = "query editionQuery ($slug: String!, $locale: String!){\n    editionCollection(where: { slug: $slug }, locale: $locale) {\n      items {\n        title\n        slug\n        seoDescription\n        introduction\n        backgroundColor\n        publishDate\n        titleColor\n        ctaColor\n        insightsCollection(locale: $locale) {\n          items {\n            title\n            slug\n            cta {\n              json\n            }\n            link\n            linkLabel\n            insight {\n              json\n            }\n          }\n        }\n      }\n    }\n  }\n  "
    }, , , , function(t, e) {
        t.exports = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M11.253 8.813a3.8 3.8 0 010 5.36l-3.56 3.57a3.94 3.94 0 01-5.55 0v0a3.94 3.94 0 010-5.55l2.8-2.84"/>\n  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M8.633 11.073a3.8 3.8 0 010-5.36l3.56-3.57a3.94 3.94 0 015.55 0v0a3.94 3.94 0 010 5.55l-2.8 2.83"/>\n</svg>'
    }, function(t) {
        t.exports = JSON.parse('{"token":"ce97fd9f5f1329e0d0b6b26b106533","httpEndpoint":"https://graphql.datocms.com"}')
    }, , , function(t, e, n) {
        "use strict";
        var o = n(320);
        e.a = function(t) {
            var e = t.app,
                n = e.store,
                r = e.router;
            Object(o.sync)(n, r)
        }
    }, function(t, e, n) {
        "use strict";
        n(132);
        e.a = function(t, e) {
            t.store;
            var n = 1 == window.navigator.standalone,
                o = window.matchMedia("(display-mode: standalone)").matches,
                r = -1 !== window.location.search.indexOf("standalone");
            "serviceWorker" in navigator && (n || o || r) && window.addEventListener("load", (function() {
                navigator.serviceWorker.register("/sw.js")
            }))
        }
    }, function(t, e, n) {
        "use strict";
        var o = n(11),
            r = n(321);
        o.a.use(r.a, {
            config: {
                id: "UA-129893734-2"
            }
        }), o.a.prototype.$calcCoef = function(t, e, n) {
            var o = 0;
            return n >= t && n <= e && (o = (n - t) / (e - t)), n > e && (o = 1), o
        }
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(52), n(2)),
            l = n(8);

        function c(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function h(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var d = {
                name: "custom-select",
                data: function() {
                    return {
                        currentItem: "",
                        showItem: "",
                        showList: !1
                    }
                },
                props: ["data", "label"],
                computed: h(h({}, Object(l.c)(["isTouch"])), {}, {
                    currentLabel: function() {
                        var t = this;
                        return "".concat(this.data.find((function(e) {
                            return e.slug === t.currentItem
                        })).label, '<svg  viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0.5H0L5 6.5L10 0.5Z" /></svg>')
                    }
                }),
                methods: {
                    show: function() {
                        r.a.fromTo(this.$refs.label, {
                            y: "100%"
                        }, {
                            opacity: 1,
                            y: "0%",
                            duration: .5,
                            stagger: .1,
                            ease: "power3.out",
                            delay: .3
                        })
                    },
                    hide: function() {
                        this.$refs.list && this.$refs.list.hide(), r.a.killTweensOf(this.$refs.label), r.a.to(this.$refs.label, {
                            y: "100%",
                            opacity: 1,
                            duration: .5,
                            ease: "power3.out"
                        })
                    }
                },
                beforeMount: function() {
                    this.currentItem = this.data[0].slug
                },
                mounted: function() {}
            },
            m = (n(532), n(7)),
            component = Object(m.a)(d, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "select-container nutrient-list-dropdown "
                }, [n("div", {
                    staticClass: "select",
                    attrs: {
                        "data-select": "select"
                    }
                }, [n("div", {
                    staticClass: "label line"
                }, [n("div", {
                    ref: "label",
                    staticClass: "inner"
                }, [n("label", {
                    attrs: {
                        for: "type"
                    },
                    domProps: {
                        textContent: t._s(t.label ? t.label : "Listeners of")
                    }
                }), t._v(" "), n("span", {
                    domProps: {
                        innerHTML: t._s(t.currentLabel)
                    }
                }), t._v(" "), t.isTouch ? t._e() : n("button", {
                    staticClass: "open",
                    attrs: {
                        "aria-label": "show list"
                    },
                    on: {
                        click: function(e) {
                            t.showList = !0
                        }
                    }
                })])]), t._v(" "), t.showList ? n("fragments-select-list", {
                    ref: "list",
                    attrs: {
                        data: t.data,
                        currentItem: t.currentItem,
                        label: t.label
                    },
                    on: {
                        close: function(e) {
                            t.showList = !1
                        },
                        change: function(e) {
                            t.currentItem = e, t.$emit("onChange", e)
                        }
                    }
                }) : t._e(), t._v(" "), t.isTouch ? n("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.currentItem,
                        expression: "currentItem"
                    }],
                    staticClass: "nutrient-list-dropdown",
                    attrs: {
                        name: "type",
                        id: "type"
                    },
                    on: {
                        change: [function(e) {
                            var n = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                return "_value" in t ? t._value : t.value
                            }));
                            t.currentItem = e.target.multiple ? n : n[0]
                        }, function(e) {
                            return t.$emit("onChange", t.currentItem)
                        }]
                    }
                }, t._l(t.data, (function(e) {
                    return n("option", {
                        key: e.slug,
                        domProps: {
                            value: e.slug,
                            textContent: t._s(e.label)
                        }
                    })
                })), 0) : t._e()], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsSelectList: n(189).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(2),
            r = {
                name: "list-items",
                data: function() {
                    return {}
                },
                props: ["data", "isDollars", "isPourc", "number", "isBook"],
                computed: {
                    label: function() {
                        if (this.number) {
                            var t = this.number < 10 ? "0".concat(this.number) : this.number;
                            return '<span class="nutrient-list-number">'.concat(t, "</span> ").concat(this.data.label)
                        }
                        return this.data.label
                    },
                    valueStr: function() {
                        return this.isDollars ? "$".concat(this.data.value.toFixed(2).toLocaleString("en-US")) : this.isPourc ? "".concat(this.data.value, "%") : this.data.value
                    }
                },
                methods: {
                    hide: function() {
                        this.line && (o.a.killTweensOf(this.line), o.a.to(this.line, {
                            y: "100%",
                            duration: .3,
                            ease: "power3.out"
                        }))
                    },
                    show: function(i) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        this.line = this.$el.querySelector(".list-inner"), o.a.fromTo(this.line, {
                            y: "100%"
                        }, {
                            y: "0%",
                            delay: t + .01 * i,
                            duration: .4,
                            ease: "power3.out"
                        })
                    }
                },
                mounted: function() {
                    this.line = this.$el.querySelector(".list-inner"), o.a.set(this.line, {
                        y: "100%"
                    })
                }
            },
            l = (n(528), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("li", {
                    staticClass: "list-item line"
                }, [n("span", {
                    staticClass: "list-inner"
                }, [n("span", {
                    domProps: {
                        innerHTML: t._s(t.label)
                    }
                }), n("span", {
                    class: {
                        book: t.isBook
                    },
                    domProps: {
                        textContent: t._s(t.valueStr)
                    }
                })])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(10),
            l = (n(26), n(23), n(20)),
            c = n(2),
            h = n(56),
            d = n(144),
            m = n.n(d),
            f = n(8),
            v = n(22);

        function w(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        var x = {
                name: "homeHeader",
                data: function() {
                    return {
                        labels: {}
                    }
                },
                fetch: function() {
                    var t = this;
                    return Object(r.a)(regeneratorRuntime.mark((function e() {
                        var n, o;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Object(v.a)("query homeLabelsQuery($locale: String!) {\n  commonCopyCollection(locale: $locale) {\n    items {\n      scrollCta\n    }\n  }\n}", {
                                        locale: t.$i18n.locale
                                    });
                                case 2:
                                    n = e.sent, o = n.commonCopyCollection.items[0], t.labels = o;
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                components: {
                    svgGradients: m.a
                },
                computed: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? w(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : w(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(f.d)(["isLoaderAnimationDone"])),
                methods: {
                    show: function() {
                        this.isLoaderAnimationDone && (c.a.to(this.lines, {
                            y: "0%",
                            duration: .8,
                            ease: "power3.out",
                            stagger: .1,
                            clearProps: "all"
                        }), c.a.to(this.$refs.intro, {
                            y: "0%",
                            duration: .8,
                            ease: "power3.out",
                            delay: .5,
                            opacity: 1,
                            clearProps: "all"
                        }))
                    },
                    resize: function(t, e) {
                        t < 768 && (this.$el.style.height = e + "px")
                    }
                },
                props: ["data"],
                mounted: function() {
                    var t = this;
                    this.$refs.title.innerHTML = Object(h.a)(this.$refs.title), this.lines = [].slice.call(this.$refs.title.querySelectorAll(".inner")), setTimeout((function() {
                        t.$el.classList.add("animate")
                    }), 2300), c.a.set(this.lines, {
                        y: "100%"
                    }), c.a.set(this.$refs.intro, {
                        y: "100%",
                        opacity: 0
                    }), l.a.on("GLOBAL:ON_INTRO_DONE", this.show.bind(this))
                }
            },
            y = (n(550), n(7)),
            component = Object(y.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "home-header c",
                    style: {
                        color: t.data.items[0].color
                    }
                }, [n("div", {
                    ref: "content",
                    staticClass: "flex"
                }, [n("div", {
                    staticClass: "w-160"
                }, [n("svg-gradients", {
                    staticClass: "gradients"
                })], 1), t._v(" "), n("div", {
                    staticClass: "text"
                }, [n("h1", {
                    ref: "title",
                    staticClass: "h1-home",
                    domProps: {
                        textContent: t._s(t.data.items[0].title)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "text-bottom"
                }, [n("p", {
                    ref: "intro",
                    staticClass: "body-header",
                    domProps: {
                        innerHTML: t._s(t.data.items[0].introduction)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "button-container"
                }, [n("p", {
                    staticClass: "button-scroll body-5"
                }, [n("span", {
                    staticClass: "marquee"
                }, [n("span", [t._v(t._s(t.labels.scrollCta) + "    /    ")]), n("span", [t._v(t._s(t.labels.scrollCta) + "    /    ")])])])])])])])])
            }), [], !1, null, null, null);
        e.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var content = n(468);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("fd4ff01c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(470);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("5c346d62", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(473);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("5d65ae96", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(476);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("6b807c59", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(483);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("23cba4b5", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(489);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("01962933", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(491);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("de8bcb96", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(493);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("4ff37e90", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(495);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("83003ee8", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(497);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("1eca54f5", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(499);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("07fd3d16", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(501);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("87fc545a", content, !0, {
            sourceMap: !1
        })
    }, , function(t, e, n) {
        var content = n(503);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("3f473453", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(505);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("00c3e9d3", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(507);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("0ef935bf", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(509);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("02ce7373", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(511);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("70cc84e4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(513);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("eb419abc", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(515);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("4a1007a4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(517);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("21d45d24", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(519);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("8f1ed3f0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(521);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("86343116", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(523);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("0c79a33a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(525);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("16111db5", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(527);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("0b315e12", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(529);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("6f40e713", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(531);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("1a81ac33", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(533);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("6153d87a", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(535);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("012b69c0", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(537);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("57754c30", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(539);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("50c1e730", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(541);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("230c80d4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(543);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("6eb7ce4c", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(545);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("10d1efe4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(547);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("2b592070", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(549);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("6d9158ae", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var content = n(551);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("27b9e481", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(2),
            r = {
                name: "insight-bg",
                data: function() {
                    return {}
                },
                props: ["data"],
                computed: {},
                methods: {
                    show: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        })
                    },
                    hide: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.out"
                        })
                    }
                },
                mounted: function() {
                    o.a.set(this.$el, {
                        opacity: 0
                    })
                }
            },
            l = (n(534), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "insight-bg  ",
                    style: "background: " + t.data.backgroundColor
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(8);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var h = {
                name: "buttonData",
                data: function() {
                    return {}
                },
                props: ["slug"],
                computed: c({}, Object(r.d)(["isButtonGrab", "showPopin"])),
                methods: c({}, Object(r.b)(["set"])),
                mounted: function() {}
            },
            d = (n(536), n(7)),
            component = Object(d.a)(h, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "button-data-container",
                    class: {
                        showPopin: t.showPopin, isButtonGrab: t.isButtonGrab
                    },
                    on: {
                        click: function(e) {
                            t.set({
                                property: "showPopin",
                                value: !0
                            }), t.set({
                                property: "slug",
                                value: t.slug
                            })
                        }
                    }
                }, [n("div", {
                    staticClass: "rotating"
                }, [n("svg", {
                    staticClass: "circle",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "48",
                        "stroke-width": "1",
                        stroke: "white",
                        fill: "none",
                        "stroke-dasharray": "1, 4"
                    }
                })])]), t._v(" "), t._m(0)])
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("small", [n("span", [t._v(" view data")])])
            }], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            content = n(109),
            r = n(77),
            l = n(2),
            c = n(8),
            h = n(20),
            d = n(57),
            m = n(146),
            f = n.n(m);

        function v(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function w(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? v(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var x = {
                name: "edition-slug",
                data: function() {
                    return {
                        _currentId: -1,
                        w: null
                    }
                },
                components: {
                    insightContent: content.default,
                    insightPopinBg: r.default,
                    svgClose: f.a
                },
                computed: w(w({}, Object(c.d)(["allInsights", "allSections", "insightSelected", "showPopin", "slug"])), Object(c.c)(["currentId", "currentSectionId", "section"])),
                methods: w(w({}, Object(c.b)(["set"])), {}, {
                    transitionShowPopin: function(t, e) {
                        l.a.delayedCall(1, e)
                    },
                    transitionHidePopin: function(t, e) {
                        l.a.delayedCall(1, e), this.$refs.popin.hide()
                    },
                    currentIdChanged: function(t) {
                        var e = this.allInsights[t],
                            n = this.allSections.indexOf(e.section);
                        this._currentSectionId !== n && (this._currentSectionId = n, this.set({
                            property: "currentChapterSlug",
                            value: this.allSections[n].slug
                        })), this.set({
                            property: "insightSelected",
                            value: null
                        }), this.$router.push({
                            name: "edition-slug",
                            params: {
                                slug: e.slug
                            }
                        })
                    },
                    tick: function(t) {
                        var e, n = 0;
                        null === (e = this.$refs.buttonData) || void 0 === e || e.tick(), this.$refs.insights.forEach((function(element, i) {
                            element.tick(t)
                        })), this.scrollTop !== t && (this.scrollTop < t && (this.$refs.insights.forEach((function(element, i) {
                            t > element.$data.top + .7 * element.$data.height && (n = i + 1)
                        })), n = n === this.$refs.insights.length ? this.allInsights.length - 1 : n), this.scrollTop > t && (n = 0, this.$refs.insights.forEach((function(element, i) {
                            t > element.$data.top + .7 * element.$data.height && (n = i + 1)
                        })), n = n === this.$refs.insights.length ? this.allInsights.length - 1 : n), this.showPopin || this._currentId !== n && (this._currentId = n, this.currentIdChanged(n), this.set({
                            property: "currentShapeId",
                            value: n
                        }))), this.scrollTop = t
                    },
                    resize: function(t, e) {
                        var n, o = this;
                        t && e && (this.w = t, this.h = e), null === (n = this.$refs.buttonData) || void 0 === n || n.resize(this.w, this.h), this.$refs.insights.forEach((function(t) {
                            t.resize(o.w, o.h)
                        }))
                    },
                    show: function() {
                        l.a.fromTo(this.$el, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: .7,
                            ease: "power3.out"
                        })
                    },
                    hide: function() {
                        l.a.to(this.$el, {
                            opacity: 0,
                            duration: .7,
                            ease: "power3.out"
                        })
                    }
                }),
                watch: {
                    insightSelected: function(t) {
                        var e = this;
                        t && (this.timer = clearTimeout(this.timer), this.timer = setTimeout((function() {
                            var n = e.$el.querySelector("[data-slug=".concat(t, "]")).getBoundingClientRect().top;
                            (window.innerWidth <= 1024 ? document.getElementById("__layout") : window).scrollTo({
                                top: n + e.scrollTop,
                                behavior: "smooth"
                            })
                        }), 1e3))
                    }
                },
                mounted: function() {
                    var t = this;
                    this.scrollTop = 0, this._currentId = this.currentId, this.set({
                        property: "currentShapeId",
                        value: this.currentId
                    }), this._currentSectionId = this.currentSectionId;
                    var e = this.$el.querySelector("[data-slug=".concat(this.$route.params.slug, "]")).getBoundingClientRect().top;
                    this.scrollTop = e, this.tick(e), e && d.a.goTo(e), this.$nextTick((function() {
                        h.a.emit("PAGE:MOUNTED"), t.set({
                            property: "currentChapterSlug",
                            value: t.allSections[t.currentSectionId].slug
                        })
                    }))
                }
            },
            y = (n(540), n(7)),
            component = Object(y.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "insight-page "
                }, [t._l(t.allInsights, (function(e) {
                    return n("insight-content", {
                        key: e.slug,
                        ref: "insights",
                        refInFor: !0,
                        class: {
                            hide: t.showPopin
                        },
                        attrs: {
                            data: e,
                            section: t.section
                        }
                    })
                })), t._v(" "), t.showPopin ? n("insight-popin-bg") : t._e(), t._v(" "), n("transition", {
                    attrs: {
                        name: "popin-transition",
                        duration: {
                            enter: 1e3,
                            leave: 500
                        }
                    }
                }, [t.showPopin ? n("insight-popin", {
                    key: t.slug,
                    ref: "popin"
                }) : t._e()], 1)], 2)
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            InsightContent: n(109).default,
            InsightPopinBg: n(77).default,
            InsightPopin: n(140).default
        })
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        var o = n(2),
            r = {
                name: "insight-bg",
                data: function() {
                    return {}
                },
                props: ["data"],
                computed: {},
                methods: {
                    show: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out"
                        })
                    },
                    hide: function() {
                        o.a.killTweensOf(this.$el), o.a.to(this.$el, {
                            opacity: 0,
                            duration: 1,
                            ease: "power3.out"
                        })
                    }
                },
                mounted: function() {
                    o.a.set(this.$el, {
                        opacity: 0
                    })
                }
            },
            l = (n(542), n(7)),
            component = Object(l.a)(r, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "insight-bg  ",
                    style: "background: " + t.data.backgroundColor
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(8);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function c(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var h = {
                name: "buttonData",
                data: function() {
                    return {}
                },
                props: ["slug"],
                computed: c({}, Object(r.d)(["isButtonGrab", "showPopin"])),
                methods: c({}, Object(r.b)(["set"])),
                mounted: function() {}
            },
            d = (n(544), n(7)),
            component = Object(d.a)(h, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "button-data-container",
                    class: {
                        showPopin: t.showPopin, isButtonGrab: t.isButtonGrab
                    },
                    on: {
                        click: function(e) {
                            t.set({
                                property: "showPopin",
                                value: !0
                            }), t.set({
                                property: "slug",
                                value: t.slug
                            })
                        }
                    }
                }, [n("div", {
                    staticClass: "rotating"
                }, [n("svg", {
                    staticClass: "circle",
                    attrs: {
                        viewBox: "0 0 100 100"
                    }
                }, [n("circle", {
                    attrs: {
                        cx: "50",
                        cy: "50",
                        r: "48",
                        "stroke-width": "1",
                        stroke: "white",
                        fill: "none",
                        "stroke-dasharray": "1, 4"
                    }
                })])]), t._v(" "), t._m(0)])
            }), [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("small", [n("span", [t._v(" view data")])])
            }], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = n(8);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        var c = {
                name: "popin",
                methods: function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            Object(o.a)(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({}, Object(r.b)(["set"]))
            },
            h = (n(546), n(7)),
            component = Object(h.a)(c, (function() {
                var t = this,
                    e = t.$createElement;
                return (t._self._c || e)("div", {
                    staticClass: "popin-bg",
                    attrs: {
                        "data-popinclose": "true"
                    },
                    on: {
                        click: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                })
            }), [], !1, null, null, null);
        e.default = component.exports
    }, function(t, e, n) {
        "use strict";
        n.r(e);
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(26), n(55)),
            l = n(56),
            c = n(2),
            h = n(8),
            d = n(20),
            m = n(51),
            f = n.n(m);

        function v(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function w(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? v(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var x = {
                name: "popin",
                data: function() {
                    return {
                        isListPopin: !1,
                        isReady: !1
                    }
                },
                components: {
                    fragmentsCloseButton: r.default,
                    svgArrow: f.a,
                    "latin-america-discovers-the-most-new-music": function() {
                        return n.e(2).then(n.bind(null, 655))
                    },
                    "lines-between-genres-are-continuing-to-blur": function() {
                        return n.e(10).then(n.bind(null, 651))
                    },
                    "local-music-travels-the-world": function() {
                        return n.e(11).then(n.bind(null, 656))
                    },
                    "fans-are-coming-into-spotify-in-new-ways": function() {
                        return n.e(8).then(n.bind(null, 657))
                    },
                    "a-fan-that-saves-your-track-will-listen-to-it-3x-more": function() {
                        return n.e(0).then(n.bind(null, 658))
                    },
                    "user-playlists-lead-to-a-lot-more-than-streams": function() {
                        return n.e(4).then(n.bind(null, 659))
                    },
                    "hardcore-fans-listen-like-crazy": function() {
                        return n.e(9).then(n.bind(null, 660))
                    },
                    "update-your-profile-before-your-release-to-ride-the-wave": function() {
                        return n.e(13).then(n.bind(null, 661))
                    },
                    "don-t-stop-sharing-after-your-release-comes-out": function() {
                        return n.e(1).then(n.bind(null, 662))
                    },
                    "new-releases-give-your-other-music-a-bump": function() {
                        return n.e(3).then(n.bind(null, 663))
                    },
                    "a-release-is-never-finished": function() {
                        return n.e(6).then(n.bind(null, 664))
                    },
                    "your-genre-may-hold-the-secret-to-more-merch-sales": function() {
                        return n.e(14).then(n.bind(null, 652))
                    },
                    "you-dont-have-to-be-a-superstar-to-be-super-good-at-selling-merch": function() {
                        return n.e(5).then(n.bind(null, 665))
                    },
                    "apparently-phoenix-is-still-buying-cds": function() {
                        return n.e(7).then(n.bind(null, 653))
                    },
                    "turns-out-vinyl-s-a-young-person-s-game": function() {
                        return n.e(12).then(n.bind(null, 666))
                    }
                },
                computed: w(w({}, Object(h.c)(["insight", "isTouch"])), Object(h.d)(["slug"])),
                methods: w(w({}, Object(h.b)(["set"])), {}, {
                    setPopinList: function() {
                        this.isListPopin = !0
                    },
                    beforeShow: function() {
                        c.a.set(this.$el, {
                            y: "100%"
                        }), this.$refs.title.innerHTML = Object(l.a)(this.$refs.title), this.titleLines = [].slice.call(this.$refs.title.querySelectorAll(".inner")), this.legendLines = [].slice.call(this.$refs.legend.querySelectorAll(".inner")), this.rows = [].slice.call(this.$el.querySelectorAll(".row")), c.a.set(this.titleLines, {
                            y: "100%"
                        }), c.a.set(this.legendLines, {
                            y: "100%"
                        }), c.a.set(this.rows, {
                            scaleX: 0
                        }), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottomInner), c.a.killTweensOf(this.$refs.bottom), c.a.set(this.$refs.bottom, {
                            x: "-100%"
                        }), c.a.set(this.$refs.bottomInner, {
                            x: "100%"
                        }))
                    },
                    onCompMounted: function() {
                        this.beforeShow(), this.$nextTick(this.show.bind(this))
                    },
                    scroll: function() {
                        this.didScroll || (this.didScroll = !0, this.set({
                            property: "showPopin",
                            value: !1
                        }))
                    },
                    show: function() {
                        var t, e = this;
                        d.a.emit("MOUSELINK:RESET"), this.$el.style.pointerEvents = "auto", this.$el.style.visibility = "visible";
                        var n = window.innerWidth,
                            r = window.innerHeight;
                        n > 1024 && (this.$el.querySelector(".popin-content").style.paddingBottom = this.$refs.bottom.getBoundingClientRect().height + 40 + "px"), this.isTouch || (this.deltaY = 0, this.$refs.scroll.style.top = "0px", this.isShown = !0, this.diff = Math.ceil(r - this.$refs.scroll.clientHeight) + 4), c.a.set(this.$el, {
                            clearProps: "all"
                        }), n < 768 ? this.$el.style.height = r + "px" : n > 1024 && this.diff < 0 && (this.$el.style.height = 7 * Math.ceil(r / 7) + "px"), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottomInner), c.a.killTweensOf(this.$refs.bottom), c.a.to([this.$refs.bottom, this.$refs.bottomInner], {
                            x: "0%",
                            duration: .55,
                            delay: .5,
                            ease: "power2.out"
                        })), d.a.emit("SHAPE:EXPLODE"), this.$refs.nutrient.show(), c.a.to(this.rows, {
                            scaleX: 1,
                            duration: .55,
                            stagger: .05,
                            ease: "power2.out"
                        }), c.a.delayedCall(.4, (function() {
                            e.$refs.close && (e.$refs.close.style.opacity = 1), e.isReady = !0
                        })), c.a.fromTo(this.titleLines, {
                            y: "100%"
                        }, {
                            y: "0%",
                            duration: .55,
                            delay: .2,
                            ease: "power3.out",
                            stagger: .05,
                            force3D: !0,
                            clearProps: "all"
                        }), c.a.fromTo(this.legendLines, {
                            y: "100%"
                        }, (t = {
                            y: "0%",
                            duration: .55,
                            delay: .2,
                            ease: "power3.out",
                            stagger: .2
                        }, Object(o.a)(t, "delay", .5), Object(o.a)(t, "force3D", !0), Object(o.a)(t, "clearProps", "all"), t)), this.isTouch || (document.addEventListener("wheel", this._wheel, {
                            passive: !1
                        }), document.addEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), document.addEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        }))
                    },
                    hide: function() {
                        c.a.killTweensOf(this.rows), c.a.killTweensOf(this.titleLines), c.a.killTweensOf(this.legendLines), c.a.to(this.rows, {
                            scaleX: 0,
                            duration: .3,
                            stagger: .01,
                            delay: this.isReady ? .25 : 0,
                            ease: "power3.out"
                        }), this.$el.style.pointerEvents = "none", this.isReady = !1, d.a.emit("SHAPE:GOBACKNORMAL"), this.$refs.nutrient.hide(), this.isShown = !1, this.$refs.close && (this.$refs.close.style.opacity = 0, this.$refs.buttonClose.$el.style.opacity = 0), c.a.to(this.titleLines, {
                            y: "100%",
                            duration: .3,
                            ease: "power3.out",
                            force3D: !0
                        }), c.a.to(this.legendLines, {
                            y: "100%",
                            duration: .3,
                            ease: "power3.out",
                            force3D: !0
                        }), this.$refs.bottom && (c.a.killTweensOf(this.$refs.bottom), c.a.killTweensOf(this.$refs.bottomInner), c.a.to(this.$refs.bottom, {
                            x: "-100%",
                            duration: .3,
                            ease: "power2.out",
                            overwrite: 1
                        }), c.a.to(this.$refs.bottomInner, {
                            x: "100%",
                            duration: .3,
                            ease: "power2.out",
                            overwrite: 1
                        })), this.isTouch || (document.removeEventListener("wheel", this._wheel, {
                            passive: !1
                        }), document.removeEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), document.removeEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        }))
                    },
                    wheel: function(t) {
                        return this.diff < 0 && (this.deltaY += t.deltaY, this.deltaY < 0 && (this.deltaY = 0), this.isShown && (this.deltaY > -this.diff && (this.deltaY = -this.diff), this.$refs.scroll.style.top = -this.deltaY + "px")), t.preventDefault(), !1
                    }
                }),
                beforeDestroy: function() {
                    window.removeEventListener("scroll", this._scroll), this.hide()
                },
                mounted: function() {
                    this.deltaY = 0, this._wheel = this.wheel.bind(this), this._scroll = this.scroll.bind(this), this.isShown = !1, this.$el.style.visibility = "hidden", this.isListPopin = !1, window.addEventListener("scroll", this._scroll)
                }
            },
            y = (n(548), n(7)),
            component = Object(y.a)(x, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "popin",
                    class: [{
                        isListPopin: t.isListPopin
                    }, t.insight.slug]
                }, [n("div", {
                    staticClass: "popin-background",
                    style: {
                        color: t.insight.backgroundColor
                    }
                }, [n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                }), t._v(" "), n("div", {
                    staticClass: "row"
                })]), t._v(" "), n("div", {
                    ref: "cont",
                    staticClass: "popin-container"
                }, [n("button", {
                    ref: "close",
                    staticClass: "close-data close-popin-typo",
                    style: {
                        background: t.insight.backgroundColor
                    },
                    on: {
                        click: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                }, [t._v("\n      close data\n    ")]), t._v(" "), n("fragments-close-button", {
                    ref: "buttonClose",
                    class: {
                        isReady: t.isReady
                    },
                    on: {
                        closeClicked: function(e) {
                            return t.set({
                                property: "showPopin",
                                value: !1
                            })
                        }
                    }
                }), t._v(" "), n("div", {
                    ref: "scroll",
                    staticClass: "popin-scroll"
                }, [n("div", {
                    staticClass: "popin-content"
                }, [n("strong", {
                    ref: "title",
                    staticClass: "h4 ",
                    domProps: {
                        textContent: t._s(t.insight.data)
                    }
                }), t._v(" "), n("div", {
                    staticClass: "nutrient"
                }, [n("keep-alive", [n(t.slug, {
                    key: t.slug,
                    ref: "nutrient",
                    tag: "component",
                    class: t.insight.isDataMediumStyle ? "nutrient-list-medium" : "nutrient-list",
                    on: {
                        mounted: t.onCompMounted,
                        onListMounted: t.setPopinList
                    }
                })], 1)], 1), t._v(" "), n("div", {
                    ref: "legend",
                    staticClass: "legend line"
                }, [n("legend", {
                    staticClass: "inner nutrient-legend",
                    domProps: {
                        textContent: t._s(t.insight.dataLegend)
                    }
                })])]), t._v(" "), t.insight.link ? n("div", {
                    ref: "bottom",
                    staticClass: "bottom",
                    style: {
                        color: t.insight.ctaColor
                    }
                }, [n("div", {
                    ref: "bottomInner",
                    staticClass: "bottom-inner"
                }, [n("div", {
                    staticClass: "body-5",
                    domProps: {
                        innerHTML: t._s(t.insight.cta)
                    }
                }), t._v(" "), n("a", {
                    staticClass: "link-arrow  button",
                    attrs: {
                        href: t.insight.link,
                        target: "_blank",
                        rel: "noopener"
                    }
                }, [t._v(t._s(t.insight.linkLabel) + " "), n("span", {
                    staticClass: "arrow"
                }, [n("svg-arrow")], 1)])])]) : t._e()])], 1)])
            }), [], !1, null, null, null);
        e.default = component.exports;
        installComponents(component, {
            FragmentsCloseButton: n(55).default
        })
    }, , , , , , , , , function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 160 20"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        d: "M20.471.514H0v17.982h5.472v-6.422l10.208.064 1.684-4.174H5.472V4.88h13.08l1.92-4.367zM36.097 18.496L28.841.514h-6.66l-3.629 8.99-3.627 8.992h5.614l1.356-3.596h7.184l1.356 3.596h5.662zM25.511 5.395l2.022 5.394h-4.068l2.046-5.394zM50.916 11.175L42.946.514h-5.47v17.982h5.352l-.238-10.79 7.97 10.79h5.471V.514H50.68l.237 10.66zM74.904 19.01c4.71 0 8.445-2.004 8.445-5.909 0-2.877-1.855-5.369-6.375-5.96l-3.521-.462c-.975-.128-1.57-.616-1.57-1.284 0-.874.975-1.413 2.57-1.413 1.926 0 3.187.873 3.306 2.312h5.115C82.874 2.389 79.544 0 74.57 0c-5.281 0-8.16 2.492-8.16 5.908 0 3.571 2.617 5.37 5.876 5.806l3.474.463c1.356.18 2.07.693 2.07 1.438 0 .822-.976 1.285-2.808 1.285-2.212 0-3.568-.976-3.687-2.57h-5.353c.12 4.137 3.569 6.68 8.921 6.68zM83.996.514V4.88h5.115v13.615h5.471V4.881h5.115V.514h-15.7zM110.539 19.01c5.686 0 9.159-3.263 9.159-8.606V.514h-5.352V9.89c0 2.826-1.333 4.367-3.807 4.367s-3.806-1.54-3.806-4.367V.514h-5.353v9.89c0 5.343 3.474 8.606 9.159 8.606zM130.157 18.496c6.779 0 10.943-3.416 10.943-8.991 0-5.575-4.164-8.991-10.943-8.991h-8.565v17.982h8.565zm-3.093-13.872h2.855c3.544 0 5.709 1.85 5.709 4.88 0 3.032-2.165 4.882-5.709 4.882h-2.855V4.624zM152.387 18.496v-5.651L160 .514h-5.591l-4.519 7.321-4.639-7.321h-6.186l7.851 12.33v5.652h5.471z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 208 35"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        d: "M27.856 15.513c-5.641-3.348-14.948-3.657-20.333-2.023a1.635 1.635 0 11-.951-3.129c6.181-1.877 16.46-1.516 22.954 2.34a1.64 1.64 0 01.573 2.243 1.636 1.636 0 01-2.243.57zm-.183 4.961a1.366 1.366 0 01-1.878.451c-4.702-2.889-11.875-3.726-17.44-2.04a1.363 1.363 0 01-1.702-.91 1.37 1.37 0 01.91-1.702c6.357-1.93 14.262-.995 19.663 2.324.638.398.841 1.235.447 1.877zM25.53 25.24a1.087 1.087 0 01-1.5.362c-4.108-2.511-9.282-3.08-15.374-1.686a1.089 1.089 0 01-1.305-.821 1.09 1.09 0 01.821-1.308c6.67-1.524 12.388-.87 17 1.95a1.1 1.1 0 01.358 1.503zM17.504 0C7.836 0 0 7.834 0 17.5S7.836 35 17.504 35c9.669 0 17.505-7.834 17.505-17.5C35.005 7.834 27.169 0 17.504 0zM47.62 16.155c-3.024-.72-3.56-1.227-3.56-2.288 0-1.003.947-1.678 2.349-1.678 1.361 0 2.715.512 4.129 1.569.04.032.098.045.15.036a.186.186 0 00.13-.08l1.476-2.081a.197.197 0 00-.037-.268c-1.686-1.353-3.584-2.012-5.803-2.012-3.264 0-5.544 1.959-5.544 4.758 0 3.003 1.967 4.067 5.365 4.888 2.893.667 3.381 1.223 3.381 2.223 0 1.105-.987 1.792-2.577 1.792-1.764 0-3.202-.593-4.812-1.987a.235.235 0 00-.146-.049.19.19 0 00-.134.07l-1.654 1.966a.198.198 0 00.02.276c1.874 1.67 4.178 2.556 6.661 2.556 3.516 0 5.788-1.922 5.788-4.892 0-2.515-1.5-3.905-5.182-4.799zM63.312 19.523c0 2.121-1.31 3.605-3.179 3.605-1.849 0-3.247-1.549-3.247-3.605 0-2.055 1.394-3.6 3.247-3.6 1.841-.004 3.178 1.512 3.178 3.6zm-2.553-6.35c-1.524 0-2.776.601-3.804 1.828v-1.385a.2.2 0 00-.199-.2h-2.707a.2.2 0 00-.199.2v15.379c0 .11.09.199.2.199h2.706a.2.2 0 00.2-.2v-4.847c1.031 1.158 2.28 1.723 3.803 1.723 2.833 0 5.698-2.178 5.698-6.347 0-4.168-2.865-6.35-5.698-6.35zM73.805 23.144c-1.938 0-3.401-1.556-3.401-3.625 0-2.072 1.41-3.58 3.357-3.58 1.95 0 3.426 1.557 3.426 3.625 0 2.076-1.423 3.58-3.382 3.58zm0-9.971c-3.645 0-6.502 2.807-6.502 6.391 0 3.547 2.837 6.322 6.458 6.322 3.662 0 6.527-2.8 6.527-6.37 0-3.552-2.85-6.343-6.483-6.343zM88.074 13.42h-2.979v-3.043a.2.2 0 00-.199-.199H82.19a.2.2 0 00-.199.2v3.043h-1.3c-.11 0-.195.089-.195.199v2.324c0 .11.089.199.195.199h1.3v6.017c0 2.43 1.211 3.665 3.597 3.665.971 0 1.776-.199 2.536-.63a.198.198 0 00.102-.17v-2.214a.193.193 0 00-.094-.167.197.197 0 00-.195-.008 3.382 3.382 0 01-1.589.382c-.87 0-1.256-.394-1.256-1.276v-5.6h2.98a.2.2 0 00.198-.198V13.62a.194.194 0 00-.195-.2zM98.45 13.433v-.374c0-1.101.423-1.589 1.37-1.589.565 0 1.016.114 1.524.28a.19.19 0 00.179-.028.192.192 0 00.081-.158v-2.28a.206.206 0 00-.138-.19 7.455 7.455 0 00-2.248-.326c-2.499 0-3.82 1.406-3.82 4.067v.573h-1.3a.2.2 0 00-.2.2v2.336c0 .11.09.199.2.199h1.3v9.28c0 .11.09.2.2.2h2.706a.2.2 0 00.2-.2v-9.28h2.527l3.869 9.276c-.439.975-.87 1.17-1.463 1.17-.475 0-.979-.142-1.492-.422a.196.196 0 00-.276.09l-.918 2.01a.193.193 0 00.085.256c.959.52 1.821.74 2.89.74 1.999 0 3.101-.93 4.076-3.434l4.694-12.128a.198.198 0 00-.02-.183.2.2 0 00-.163-.085h-2.816a.195.195 0 00-.187.134l-2.886 8.24-3.162-8.244a.194.194 0 00-.187-.126H98.45v-.004zM92.435 13.42h-2.707a.2.2 0 00-.199.2v11.803c0 .11.09.2.2.2h2.706a.2.2 0 00.2-.2V13.62a.2.2 0 00-.2-.2zM91.094 8.05c-1.072 0-1.942.869-1.942 1.937 0 1.073.87 1.942 1.942 1.942 1.074 0 1.94-.87 1.94-1.942a1.933 1.933 0 00-1.94-1.938zM158.291 19.198l-3.275-8.228-3.256 8.224h6.531v.004zm2.581 6.428l-2.008-4.997h-7.669l-1.987 4.997h-1.67l6.596-16.293h1.808l6.596 16.293h-1.666zM169.504 15.025a4.242 4.242 0 00-1.073-.125c-2.073 0-3.605 1.328-3.605 4.115v6.62h-1.536V13.44h1.508v2.275c.74-1.686 2.146-2.43 3.759-2.43.411 0 .74.05.947.127v1.612zM174.524 13.44h3.17v1.382h-3.17v7.363c0 1.483.69 2.198 2.072 2.198.435 0 .87-.102 1.098-.203v1.353c-.204.101-.768.231-1.508.231-1.967 0-3.195-1.202-3.195-3.425v-7.517h-2.58v-1.381h.918c1.203 0 1.715-.536 1.715-1.788V9.581h1.484v3.86h-.004zM180.815 13.44h-1.537v12.194h1.537V13.441zM183.392 21.953c.231 1.483 1.353 2.686 3.348 2.686 1.508 0 2.711-.894 2.711-2.174 0-1.125-.768-1.739-2.073-2.044l-1.967-.459c-1.788-.41-2.991-1.483-2.991-3.246 0-1.967 1.89-3.58 4.117-3.58 2.837 0 4.04 1.686 4.373 3.145l-1.357.512c-.232-1.174-1.073-2.324-3.016-2.324-1.382 0-2.609.87-2.609 2.15 0 1.048.667 1.661 1.918 1.942l1.943.434c2.02.46 3.17 1.61 3.17 3.373 0 1.816-1.536 3.604-4.243 3.604-2.991 0-4.499-1.918-4.731-3.527l1.407-.492zM195.287 13.44h3.17v1.382h-3.17v7.363c0 1.483.691 2.198 2.069 2.198.435 0 .87-.102 1.101-.203v1.353c-.203.101-.768.231-1.507.231-1.968 0-3.195-1.202-3.195-3.425v-7.517h-2.581v-1.381h.919c1.203 0 1.711-.536 1.711-1.788V9.581h1.483v3.86zM200.429 21.953c.231 1.483 1.353 2.686 3.348 2.686 1.508 0 2.711-.894 2.711-2.174 0-1.125-.768-1.739-2.068-2.044l-1.968-.459c-1.788-.41-2.991-1.483-2.991-3.246 0-1.967 1.89-3.58 4.117-3.58 2.837 0 4.04 1.686 4.373 3.145l-1.357.512c-.232-1.174-1.073-2.324-3.016-2.324-1.382 0-2.609.87-2.609 2.15 0 1.048.667 1.661 1.918 1.942l1.943.434c2.02.46 3.17 1.61 3.17 3.373 0 1.816-1.536 3.604-4.243 3.604-2.991 0-4.499-1.918-4.731-3.527l1.403-.492zM121.307 14.81v10.812h-1.536V14.81h-2.503V13.43h2.503v-1.483c0-2.58 1.585-3.938 3.629-3.938.638 0 1.102.126 1.382.256v1.382c-.231-.102-.613-.203-1.15-.203-1.227 0-2.325.638-2.325 2.58v1.406h3.402v1.381h-3.402zM130.488 24.574c2.402 0 4.499-1.865 4.499-5.034 0-3.194-2.097-5.034-4.499-5.034-2.402 0-4.499 1.84-4.499 5.034 0 3.169 2.097 5.034 4.499 5.034zm-6.06-5.034c0-3.836 2.634-6.416 6.06-6.416 3.402 0 6.06 2.58 6.06 6.416 0 3.807-2.658 6.415-6.06 6.415-3.402 0-6.06-2.608-6.06-6.415zM144.347 15.013a4.254 4.254 0 00-1.073-.126c-2.073 0-3.605 1.329-3.605 4.116v6.62h-1.536V13.428h1.508v2.275c.739-1.686 2.145-2.43 3.759-2.43.41 0 .74.05.947.126v1.613zM180.047 8.013c.715 0 1.28.536 1.28 1.28 0 .739-.561 1.275-1.28 1.275-.715 0-1.28-.536-1.28-1.276 0-.743.565-1.28 1.28-1.28zM112.708 22.997h-.496v.63h.496c.247 0 .394-.122.394-.317 0-.203-.147-.313-.394-.313zm.321.902l.54.756h-.455l-.484-.69h-.414v.69h-.378v-1.999h.89c.463 0 .768.236.768.638-.004.325-.195.524-.467.605zm-.423-1.91c-.975 0-1.711.773-1.711 1.724 0 .946.731 1.71 1.703 1.71.975 0 1.711-.772 1.711-1.723 0-.946-.732-1.71-1.703-1.71zm-.008 3.63a1.894 1.894 0 01-1.902-1.902c0-1.045.841-1.914 1.914-1.914 1.069 0 1.902.857 1.902 1.901a1.92 1.92 0 01-1.914 1.914z"
                    }
                })]))
            }
        }
    }, , function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 20"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 18"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        fill: "#fff",
                        d: "M19.615.184c-3.604-.246-11.631-.245-15.23 0C.488.45.029 2.804 0 9c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 17.55 23.971 15.196 24 9c-.029-6.185-.484-8.549-4.385-8.816zM9 13V5l8 3.993L9 13z"
                    }
                })]))
            }
        }
    }, function(t, e, n) {
        n(15), n(13), n(14), n(16), n(17);
        var o = n(58),
            r = n(59);

        function l(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }
        t.exports = {
            functional: !0,
            render: function(t, e) {
                var n = e._c,
                    data = (e._v, e.data),
                    c = e.children,
                    h = void 0 === c ? [] : c,
                    d = data.class,
                    m = data.staticClass,
                    style = data.style,
                    f = data.staticStyle,
                    v = data.attrs,
                    w = void 0 === v ? {} : v,
                    x = r(data, ["class", "staticClass", "style", "staticStyle", "attrs"]);
                return n("svg", function(t) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? l(Object(source), !0).forEach((function(e) {
                            o(t, e, source[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                        }))
                    }
                    return t
                }({
                    class: [d, m],
                    style: [style, f],
                    attrs: Object.assign({
                        viewBox: "0 0 36 36",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, w)
                }, x), h.concat([n("path", {
                    attrs: {
                        d: "M18 0C8.059 0 0 8.059 0 18s8.059 18 18 18 18-8.059 18-18S27.941 0 18 0ZM2.05 19h3.983c.092 2.506.522 4.871 1.229 7H4.158a15.885 15.885 0 0 1-2.108-7ZM19 8V2.081c2.747.436 5.162 2.655 6.799 5.919H19Zm7.651 2c.754 2.083 1.219 4.46 1.317 7H19v-7h7.651ZM17 2.081V8h-6.799C11.837 4.736 14.253 2.517 17 2.081ZM17 10v7H8.032c.098-2.54.563-4.917 1.317-7H17ZM6.034 17H2.05a15.9 15.9 0 0 1 2.107-7h3.104c-.705 2.129-1.135 4.495-1.227 7Zm1.998 2H17v7H9.349c-.754-2.083-1.219-4.459-1.317-7ZM17 28v5.919c-2.747-.437-5.163-2.655-6.799-5.919H17Zm2 5.919V28h6.8c-1.637 3.264-4.053 5.482-6.8 5.919ZM19 26v-7h8.969c-.099 2.541-.563 4.917-1.317 7H19Zm10.967-7h3.982a15.87 15.87 0 0 1-2.107 7h-3.104c.706-2.129 1.136-4.494 1.229-7Zm0-2c-.093-2.505-.523-4.871-1.229-7h3.104a15.875 15.875 0 0 1 2.107 7h-3.982Zm.512-9h-2.503c-.717-1.604-1.606-3.015-2.619-4.199A16.034 16.034 0 0 1 30.479 8ZM10.643 3.801C9.629 4.985 8.74 6.396 8.023 8H5.521a16.047 16.047 0 0 1 5.122-4.199ZM5.521 28h2.503c.716 1.604 1.605 3.015 2.619 4.198A16.031 16.031 0 0 1 5.521 28Zm19.836 4.198c1.014-1.184 1.902-2.594 2.619-4.198h2.503a16.031 16.031 0 0 1-5.122 4.198Z"
                    }
                })]))
            }
        }
    }, , , , , , , function(t, e, n) {
        "use strict";
        n(15), n(13), n(14), n(16), n(17);
        var o = n(5),
            r = (n(27), n(2)),
            l = n(57),
            c = n(1),
            h = n(3),
            d = n(147),
            m = n.n(d),
            f = n(20),
            v = new(function() {
                function t() {
                    var e = this;
                    Object(c.a)(this, t), this.dimension = m()(this._dimension), window.addEventListener("resize", (function() {
                        clearTimeout(e.timeout), e.timeout = setTimeout(e.onResize.bind(e), 50)
                    }), {
                        passive: !0
                    })
                }
                return Object(h.a)(t, [{
                    key: "onResize",
                    value: function(t) {
                        this.dimension = m()(this._dimension), f.a.emit("GLOBAL:RESIZE")
                    }
                }, {
                    key: "resetDimension",
                    value: function() {
                        this.dimension = m()(this._dimension)
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.dimension.cache = {}
                    }
                }, {
                    key: "_dimension",
                    value: function() {
                        var body = document.body,
                            html = document.documentElement,
                            t = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
                            e = {
                                width: window.innerWidth,
                                innerWidth: document.body.clientWidth,
                                height: window.innerHeight,
                                docHeight: t
                            };
                        return e.ratio = e.width / e.height, e
                    }
                }, {
                    key: "innerWidth",
                    value: function() {
                        return this.dimension().innerWidth
                    }
                }, {
                    key: "width",
                    value: function() {
                        return this.dimension().width
                    }
                }, {
                    key: "height",
                    value: function() {
                        return this.dimension().height
                    }
                }, {
                    key: "ratio",
                    value: function() {
                        return this.dimension().ratio
                    }
                }, {
                    key: "docHeight",
                    value: function() {
                        return this.dimension().docHeight
                    }
                }]), t
            }()),
            w = n(10),
            x = (n(23), n(52), n(46), n(47), n(38), n(84), n(28)),
            y = n(9),
            O = n(4),
            k = n(37),
            C = n(6),
            j = (n(30), n(0)),
            _ = function() {
                function t(canvas) {
                    Object(c.a)(this, t), this.canvas = canvas, this.vp = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                        dpr: Math.min(window.devicePixelRatio, 1)
                    }, this.renderer = new j.Db({
                        antialias: !0,
                        canvas: canvas,
                        alpha: !1,
                        stencil: !1
                    }), this.renderer.setSize(this.vp.width, this.vp.height, !1), this.renderer.setPixelRatio(this.vp.dpr), this.camera = new j.ab(45, this.vp.width / this.vp.height, .1, 1e4), this.camera.position.z = 50, this.scene = new j.mb, this.clock = new j.i, this.assets = {}, this.viewSize = this.getViewSizeAtDepth(), this.onResizes = [], this.disposed = !1, this.tick = this.tick.bind(this), this.init = this.init.bind(this), this.resize = this.resize.bind(this)
                }
                return Object(h.a)(t, [{
                    key: "addEvents",
                    value: function() {}
                }, {
                    key: "dispose",
                    value: function() {}
                }, {
                    key: "getViewSizeAtDepth",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = this.camera.fov * Math.PI / 180,
                            n = Math.abs((this.camera.position.z - t) * Math.tan(e / 2) * 2);
                        return {
                            width: n * this.camera.aspect,
                            height: n
                        }
                    }
                }, {
                    key: "init",
                    value: function() {}
                }, {
                    key: "update",
                    value: function() {}
                }, {
                    key: "render",
                    value: function() {
                        this.renderer.render(this.scene, this.camera)
                    }
                }, {
                    key: "resize",
                    value: function(t, e) {
                        this.vp.width = t, this.vp.height = e, this.vp.dpr = Math.min(window.devicePixelRatio, 1), this.renderer.setSize(this.vp.width, this.vp.height, !1), this.camera.aspect = this.vp.width / this.vp.height, this.camera.updateProjectionMatrix(), this.viewSize = this.getViewSizeAtDepth(), this.onResizes.forEach((function(t) {
                            return t()
                        }))
                    }
                }, {
                    key: "tick",
                    value: function() {
                        this.disposed || (this.update(), this.render())
                    }
                }]), t
            }(),
            P = (n(83), n(106), n(306)),
            z = "\nfloat encode(float gradient, float progress) {\n\treturn floor(gradient * 1000. * 0.9999) + floor(progress * 100.* .60) * 10. *10. * 10. - 30000.;\n}\nfloat decodeGradient(float encoded) {\n\tfloat posEncoded = encoded + 30000.;\n\treturn fract(posEncoded /1000.);\n}\nfloat decodeProgress(float encoded) {\t\n\tfloat posEncoded = encoded + 30000.;\n\n\treturn floor(posEncoded / 1000.) / 60.;\n}\n",
            S = "\nprecision highp float;\nuniform sampler2D tTargetPosition;\nuniform sampler2D tAnimation;\nuniform sampler2D tLastPosition;\nuniform vec2 uPos;\nuniform vec2 uLastPos;\nuniform mat4 uModelMatrix;\n".concat(z, " \nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec4 pos = texture2D(positionTexture, uv);\n//   vec4 anim = texture2D(tAnimation, uv);\n  vec4 target = texture2D(tTargetPosition, uv);\n  vec4 last = texture2D(tLastPosition, uv);\n  vec4 vel = texture2D(velocityTexture, uv);\n\n  \n  \n//   float progressStart = smoothstep(-10., 10., last.x) * 0.5;\n  float progressEnd =           smoothstep(-10., 10., target.x) * 0.5;\n\n  float progress = smoothstep(0., 0.5+ progressEnd, vel.a );\n\n  vec4 current = pos + vel; \n  float speed = abs(vel.x) + abs(vel.y) + abs(vel.z);\n  \n  target.xyz = (uModelMatrix * vec4(target.xyz, 1.)).xyz;\n  target.y += uPos.y;\n  target.x += uPos.x;\n\n  float dis = distance(target.xyz, current.xyz);\n  if(speed < 1. && dis < 0.2){\n\t  current = target;\n  }\n//   current = target;\n  // TODO: This may cause a flash when changing quickly\n  float gradient = mix(last.a, target.a, progress );\n  float encoded = encode(gradient, progress);\n  current.a = encoded;\n  \n  gl_FragColor = current;\n\n}\n"),
            $ = function() {
                function t() {
                    Object(c.a)(this, t)
                }
                return Object(h.a)(t, [{
                    key: "init",
                    value: function(t, e, n) {
                        this.core = t, this.width = e, this.height = n;
                        var o = new P.a(e, n, t.renderer);
                        navigator.userAgent.match(/Safari/i) && navigator.userAgent.match(/Chrome/i), o.setDataType(j.s), this.gpuCompute = o;
                        var r = o.createTexture(),
                            l = o.createTexture(),
                            c = this.createAnimationTexture(),
                            h = o.addVariable("velocityTexture", "\nprecision lowp float;\nuniform sampler2D tTargetPosition;\nuniform sampler2D tLastPosition;\nuniform sampler2D tAnimation;\nuniform bool uExplode;\nuniform vec2 uPos;\nuniform vec2 uLastPos;\nuniform float uLastPosY;\nuniform float uTimeDelta;\nuniform bool uUseLast;\nuniform bool uUseTarget;\nuniform mat4 uModelMatrix;\n\nfloat random (vec2 st) {\n\treturn fract(sin(dot(st.xy,\n\t\t\t\t\t\t vec2(12.9898,78.233)))*\n\t\t43758.5453123);\n}\nvec3 cubicBezier(vec3 p0, vec3 c0, vec3 c1, vec3 p1, float t) {\n\tfloat tn = 1.0 - t;\n\n\treturn tn * tn * tn * p0 + 3.0 * tn * tn * t * c0 + 3.0 * tn * t * t * c1 + t * t * t * p1;\n}\nvoid main(){\n  vec2 uv = gl_FragCoord.xy / resolution;\n  vec4 pos = texture2D(positionTexture, uv);\n  vec4 target = texture2D(tTargetPosition, uv);\n  vec4 last = texture2D(tLastPosition, uv);\n  vec4 anim = texture2D(tAnimation, uv);\n  vec4 vel = texture2D(velocityTexture, uv);\n  \n  if(last == vec4(0.)){\n\t  last.xyz = anim.yzw ;\n\t  last.z = -last.z;\n  }\n  if(target == vec4(0.)){\n\t  target.xyz = anim.yzw ;\n  }\n//   target.xyz *= anim.x;\n//   last = pos;\n\n\n  float progressEnd = smoothstep(-10., 10., target.x) * 0.4 + anim.x;\n\n  float progressStart = smoothstep(-10., 10., last.x) * 0.5;\n  progressEnd =           smoothstep(-10., 10., target.x) * 0.5;\n\n  if(uUseLast){\n\t  \n  \tprogressStart = smoothstep(-10., 10., last.y) * 0.5;\n  \tprogressEnd = smoothstep(-10., 10., last.y) * 0.5;\n  }\n  \n  if(uUseTarget){\n\t  \n\tprogressStart = smoothstep(-10., 10., target.y) * 0.5;\n\tprogressEnd = smoothstep(-10., 10., target.y) * 0.5;\n  }\n\n  if(uExplode){\n  \tvel.a = 0.2;\n  }\n\n  float progress = smoothstep(0., 0.5+ progressEnd, vel.a );\n\n  vec3 control = anim.yzw;\n  control = (uModelMatrix * vec4(control.xyz, 1.)).xyz;\n  control.y += uPos.y ;\n  control.x += uPos.x ;\n\n  target.xyz = (uModelMatrix * vec4(target.xyz, 1.)).xyz;\n  target.y += uPos.y;\n  target.x += uPos.x;\n  last.xyz = (uModelMatrix * vec4(last.xyz, 1.)).xyz;\n  last.y += uLastPos.y;\n  last.x += uLastPos.x;\n\n  vec3 mixed = cubicBezier(last.xyz , control, control  ,target.xyz, progress); \n  vel.xyz *= 0.3;\n  vel.xyz += (mixed.xyz - pos.xyz) * (0.01 + 0.03 * progress + smoothstep(0.8,1., vel.a)  * 0.1) * 6.;\n  vel.xyz *= 0.3;\n  vel.a = clamp(vel.a + 0.005 * 200. * uTimeDelta, 0., 1.);\n  gl_FragColor = vel;\n\n}\n", r),
                            d = o.addVariable("positionTexture", S, l);
                        this.positionVariable = d, this.velocityVariable = h, o.setVariableDependencies(h, [h, d]), o.setVariableDependencies(d, [h, d]);
                        var m = d.material.uniforms;
                        this.uniforms = m, this.uniforms.tTargetPosition = new j.yb(null), this.uniforms.tLastPosition = new j.yb(null), this.uniforms.tAnimation = new j.yb(c), this.uniforms.uPos = new j.yb(new j.zb(0, 0)), this.uniforms.uLastPos = new j.yb(new j.zb(0, 0)), this.uniforms.uTimeDelta = new j.yb(0), this.uniforms.uUseLast = new j.yb(!1), this.uniforms.uUseTarget = new j.yb(!1), this.uniforms.uModelMatrix = new j.yb, h.material.uniforms.tTargetPosition = this.uniforms.tTargetPosition, h.material.uniforms.tLastPosition = this.uniforms.tLastPosition, h.material.uniforms.tAnimation = this.uniforms.tAnimation, h.material.uniforms.uExplode = new j.yb(!1), h.material.uniforms.uPos = this.uniforms.uPos, h.material.uniforms.uLastPos = this.uniforms.uLastPos, h.material.uniforms.uTimeDelta = this.uniforms.uTimeDelta, h.material.uniforms.uUseLast = this.uniforms.uUseLast, h.material.uniforms.uModelMatrix = this.uniforms.uModelMatrix, h.material.uniforms.uUseTarget = this.uniforms.uUseTarget, this.velUniforms = h.material.uniforms;
                        var f = o.init();
                        null !== f && console.error(f)
                    }
                }, {
                    key: "setPosition",
                    value: function(t, e) {
                        this.uniforms.uLastPos.value.copy(this.uniforms.uPos.value), this.uniforms.uPos.value.set(t, e)
                    }
                }, {
                    key: "setTargetTexture",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.uniforms.tLastPosition.value = this.uniforms.tTargetPosition.value, this.uniforms.tTargetPosition.value = t, this.velUniforms.uExplode.value = e
                    }
                }, {
                    key: "createAnimationTexture",
                    value: function() {
                        for (var t = this.gpuCompute.createTexture(), e = t.image.data, i = (e.length, 0); i < this.width * this.height; i += 3) {
                            var n = 0 * Math.random(),
                                o = 20,
                                r = 50 * Math.sin(i) * Math.random();
                            r = Math.random() * o - 10;
                            var l = 50 * Math.cos(i) * Math.random();
                            l = Math.random() * o - 10;
                            var c = Math.random() * o - 10;
                            r *= 2, l *= 2, c *= 2, c += 10, r = 2 * Math.random(), l = 2 * Math.random(), c = 2 * Math.random(), e[4 * i + 0] = n + .2 * Math.random();
                            Math.random(), Math.random();
                            0;
                            var h = .5 * Math.random() + 1;
                            e[4 * i + 0] = h, e[4 * i + 1] = r + 0 * (6 * Math.random() - 3), e[4 * i + 2] = l + 0 * (6 * Math.random() - 3), e[4 * i + 3] = c + 0 * (6 * Math.random() - 3), e[4 * (i + 1) + 0] = h, e[4 * (i + 1) + 1] = r + 0 * (6 * Math.random() - 3), e[4 * (i + 1) + 2] = l + 0 * (6 * Math.random() - 3), e[4 * (i + 1) + 3] = c + 0 * (6 * Math.random() - 3), e[4 * (i + 2) + 0] = h, e[4 * (i + 2) + 1] = r + 0 * (6 * Math.random() - 3), e[4 * (i + 2) + 2] = l + 0 * (6 * Math.random() - 3), e[4 * (i + 2) + 3] = c + 0 * (6 * Math.random() - 3)
                        }
                        return t
                    }
                }, {
                    key: "render",
                    value: function(t) {
                        this.velUniforms.uTimeDelta.value = t, this.gpuCompute.compute(), this.velUniforms.uExplode.value = !1, this.velUniforms.uTimeDelta.value = 0, this.gpuCompute.compute()
                    }
                }, {
                    key: "getTexture",
                    value: function() {
                        return this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture
                    }
                }]), t
            }();

        function M(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var T = function(t) {
                Object(O.a)(n, t);
                var e = M(n);

                function n(t) {
                    var o;
                    Object(c.a)(this, n);
                    var r = new j.bb(.5, .5),
                        l = new j.kb({
                            vertexShader: "\nattribute vec3 position;\nattribute vec2 uv;\nvarying vec2 vUv;\n\tvoid main() {\n\t\tvec3 transformed = position;\n\t\ttransformed.xy += vec2(0.75, -0.75);\n\t\tgl_Position = vec4(transformed,1.);\n\t\tvUv = uv;\n\t}\n",
                            fragmentShader: "\n\tprecision highp float;\n\tvarying vec2 vUv;\n\tuniform sampler2D uMap;\n\tvoid main() {\n\t\tvec3 color = vec3(0.5);\n\t\tcolor = texture2D(uMap, vUv).rgb;\n\t\tgl_FragColor = vec4(color,1.0);\n\t}\n",
                            depthWrite: !1,
                            depthTest: !1,
                            uniforms: {
                                uMap: new j.yb(t)
                            }
                        });
                    return (o = e.call(this, r, l)).renderOrder = 1e4, o.scale.set(10, 10, 1), o
                }
                return Object(h.a)(n, [{
                    key: "setTexture",
                    value: function(t) {
                        this.material.uniforms.uMap.value = t
                    }
                }]), n
            }(j.O),
            L = n(85);

        function E(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var D = function(t) {
                Object(O.a)(n, t);
                var e = E(n);

                function n(t, o) {
                    var r;
                    return Object(c.a)(this, n), r = e.call(this), null == o && (o = Object(x.a)(r)), r.camera = t, r.obj = o, r.target = {
                        x: .5,
                        y: .5
                    }, r.current = {
                        x: .5,
                        y: .5
                    }, r.spherical = new j.rb(-r.camera.position.z, Math.PI / 2, 0), r.speed = 2, r.amplitudeX = .1, r.amplitudeY = .1, r.x = .5, r.y = .5, r.lookAtPos = new j.Ab(0, 0, 0), r
                }
                return Object(h.a)(n, [{
                    key: "addEvents",
                    value: function() {}
                }, {
                    key: "setMouse",
                    value: function(t, e) {
                        this.x = t, this.y = e, this.target.x = t, this.target.y = e
                    }
                }, {
                    key: "mix",
                    value: function(a, b, t) {
                        return a * (1 - t) + b * t
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = 1 - Math.exp(-this.speed * t),
                            o = this.mix(.5, this.target.x, e),
                            r = this.mix(.5, this.target.y, e),
                            l = Object(L.a)(this.current.x, o, n, 1e-5),
                            c = Object(L.a)(this.current.y, r, n, 1e-5);
                        this.current.x += l, this.current.y += c;
                        var h = (this.current.x - .5) * Math.PI * this.amplitudeX,
                            d = (this.current.y - .5) * Math.PI * this.amplitudeY;
                        this.spherical.phi = d + Math.PI / 2, this.spherical.theta = h, this.obj.rotation.y = h, this.obj.rotation.x = d
                    }
                }]), n
            }(j.Y),
            R = 512,
            B = 256;
        var I = "\n\tuniform mat4 modelMatrix;\n\tuniform mat4 viewMatrix;\n\tuniform mat4 projectionMatrix;\n\tattribute vec3 position;\n\tattribute vec2 uv;\n\tvarying float vColor; \n\tuniform vec2 uMouse;\n\tuniform float uMouseAmplitude;\n\tuniform float uTime;\n\tuniform float uProgress;\n\tuniform sampler2D tPosition;\n\tuniform vec2 uPos;\n\tuniform vec2 uLastPos;\n\tuniform float uBreak;\n\tuniform float uAspect;\n\t\n\tvec2 getScreenUV(vec3 transformed){\n\t\tvec4 clip = projectionMatrix * viewMatrix * vec4(transformed, 1.);\n\n\t\treturn (clip.xy / clip.w) * 0.5 +0.5;\n\t}\n\t".concat(z, "\n\t// attribute vec3 aControl0;\n\t// attribute vec3 aControl1;\n\tmat3 calcLookAtMatrix(vec3 origin, vec3 target, float roll) {\n\t\tvec3 rr = vec3(sin(roll), cos(roll), 0.0);\n\t\tvec3 ww = normalize(target - origin);\n\t\tvec3 uu = normalize(cross(ww, rr));\n\t\tvec3 vv = normalize(cross(uu, ww));\n\t  \n\t\treturn mat3(uu, vv, ww);\n\t  }\n\tvoid main() {\n\t\tvec3 transformed = position;\n\t\tvec4 pos = texture2D(tPosition, uv);\n\t\tfloat progress = decodeProgress(pos.a);\n\t\tfloat gradient = decodeGradient(pos.a);\n\n\t\tvec4 scrollPos = modelMatrix * vec4(vec3(0.), 1.);\n\t\tvec2 formPos = mix(uLastPos, uPos, progress);\n\n\t\tvec3 explodedPos = ( modelMatrix * vec4(position.xyz , 1.)).xyz ;\n\t\texplodedPos.xy += uPos;\n\n\t\t\n\t\tvec2 shapeUVs = getScreenUV(pos.xyz);\n\t\tvec2 mouse = uMouse;\n\t\tmouse.y *= uAspect;\n\n\t\tfloat di = distance(pos.xy, formPos);\n\n// smoothstep( distance(shapeUVs, (mouse) ) * 0.3, 1.,0.2 )\n\t\ttransformed.xyz = mix(pos.xyz,  explodedPos , uBreak );\n\t\t// transformed.xy += mix(vec2(0.), uPos ,uBreak );\n\t\t\n\t\tvec4 worldPos = vec4(transformed, 1.);\n\n\t\tworldPos.xyz = calcLookAtMatrix(vec3(-formPos.x, formPos.y + scrollPos.y , 0. ), vec3(0., 0.,50.), 0. ) * worldPos.xyz;\n\t\tworldPos.x = -worldPos.x;\n\t\t\n\t\tvec2 uvs = getScreenUV(worldPos.xyz);\n\n\t\tuvs.y *= uAspect;\n\n\t\tfloat ran = (position.x / 50.) * 0.04 + 0.02;\n\t\tfloat dist =smoothstep( 0.03 + ran, 0.,  distance(uvs, (mouse) ));\n\n\t\t// worldPos.z += dist * 10.;\n\t\tvec3 movement = vec3(\n\t\t\tcos(uTime + position.x + position.y),\n\t\t\tsin(uTime + position.x + position.y),0.\n\t\t);\n\t\tmovement.z = movement.x * movement.y; \n\t\tworldPos.xyz += (dist * 2. * (position * 0.02 + movement ) ) * uMouseAmplitude;\n\n\n\t\tgl_Position =  projectionMatrix * viewMatrix * worldPos;\n\tvColor = gradient;\n}\n"),
            A = function() {
                function t(e) {
                    Object(c.a)(this, t), this.core = e, this.object = new j.Y, this.rotationObject = new D(e.camera), this.currentShape = 0, this.formTextures = [], this.isActivated = !1
                }
                return Object(h.a)(t, [{
                    key: "breakShape",
                    value: function(t) {
                        this.breakingAnim && (this.breakingAnim.kill(), this.breakingAnim = null), this.breakingAnim = r.a.to(this.uniforms.uBreak, {
                            value: t ? 0 : .5,
                            duration: 1,
                            delay: t ? .3 : 0,
                            ease: "power4.out"
                        })
                    }
                }, {
                    key: "init",
                    value: function() {
                        this.gpgpu = new $(this.core, R, B), this.gpgpu.init(this.core, R, B);
                        for (var t, e, n, o = new j.e, r = [], l = [], c = 15, h = new j.Ab, i = 0; i < 131072; i++) {
                            var d = i % R / R,
                                m = Math.floor(i / R) / B,
                                f = 0,
                                v = 0,
                                w = 0;
                            switch (i % 3) {
                                case 0:
                                    t = Math.random() * c - 7.5, e = Math.random() * c - 7.5, n = Math.random() * c - 7.5, Math.random() > .5, f += -0, h.set(2 * (Math.random() - .5) * 5, 2 * (Math.random() - .5) * 5, 2 * (Math.random() - .5) * 5);
                                    break;
                                case 1:
                                    v += 0;
                                    break;
                                case 2:
                                    f += 0
                            }
                            f += t, v += e, w += n, r[3 * i] = 5 * (h.x + f), r[3 * i + 1] = 5 * (h.y + v), r[3 * i + 2] = 5 * (h.z + w) - 20, l[2 * i] = d, l[2 * i + 1] = m
                        }
                        o.setAttribute("position", new j.o(r, 3, !1)), o.setAttribute("uv", new j.o(l, 2, !1));
                        var x = this.gpgpu.getTexture(),
                            y = new j.kb({
                                fragmentShader: "\n\n\tuniform sampler2D tPosition;\n\tprecision lowp float;\n\tvarying float vColor; \n\tuniform vec3 uColorAccent;\n\tuniform vec3 uColorBrand;\n\n\tvoid main() {\n\n\t\tvec3 color = vec3(0.);\n\t\tcolor = mix(uColorAccent, uColorBrand, vColor);\n\t\tgl_FragColor = vec4(color,1.0);\n\t}\n",
                                vertexShader: I,
                                wireframe: !1,
                                side: j.m,
                                uniforms: {
                                    uTime: this.core.uTime,
                                    uMouse: this.core.uMouse,
                                    uPos: this.gpgpu.uniforms.uPos,
                                    uLastPos: this.gpgpu.uniforms.uLastPos,
                                    uProgress: new j.yb(1),
                                    tPosition: new j.yb(x),
                                    uColorAccent: this.core.uColorAccent,
                                    uColorBrand: this.core.uColorBrand,
                                    uAspect: this.core.uAspect,
                                    uBreak: new j.yb(0),
                                    uMouseAmplitude: new j.yb(1)
                                }
                            });
                        this.material = y, this.uniforms = this.material.uniforms;
                        var O = new j.O(o, y);
                        this._restingTexture = this._createRestingTexture(), this.rotationObject.add(O), this.object.add(this.rotationObject);
                        var k = new j.bb(10, 10),
                            C = new j.Q({
                                depthTest: !1,
                                depthWrite: !1
                            }),
                            _ = new j.O(k, C);
                        _.renderOrder = 1e3, _.visible = !0, O.frustumCulled = !1, this.formMesh = O, this.object.frustumCulled = !1, O.up.set(0, -1, 0), this.object.up.set(0, -1, 0), this.rotationObject.up.set(0, -1, 0);
                        var P = new T(this.core, x);
                        this.texDebugger = P, this.core.options.debug
                    }
                }, {
                    key: "update",
                    value: function(t) {
                        this.formMesh.updateMatrix(), this.formMesh.updateMatrixWorld(!0), this.gpgpu.uniforms.uModelMatrix.value = this.formMesh.matrixWorld, this.gpgpu.render(t), this.rotationObject.update(t)
                    }
                }, {
                    key: "dispose",
                    value: function() {}
                }, {
                    key: "setRestingState",
                    value: function() {
                        this.currentIndex = -1, this.gpgpu.setTargetTexture(this._restingTexture, !0)
                    }
                }, {
                    key: "activate",
                    value: function() {
                        if (this.isActivated = !0, -1 != this.currentIndex) {
                            var t = this.currentIndex;
                            this.currentIndex = -1, this.setNewForm(t)
                        }
                    }
                }, {
                    key: "setNewForm",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (this.currentIndex != t || e) {
                            if (!this.isActivated) return this.setRestingState(), void(this.currentIndex = t);
                            var n = this.formTextures[t];
                            null == n && (n = this.defaultTexture), this.gpgpu.setTargetTexture(n, !0), this.currentIndex = t
                        }
                    }
                }, {
                    key: "_createRestingTexture",
                    value: function() {
                        for (var t, e, n, data = new Float32Array(524288), o = 20, r = 0, l = !1, i = 0; i < 131072; i++) {
                            var c = 0,
                                h = 0,
                                d = 0;
                            switch (i % 3) {
                                case 0:
                                    t = Math.random() * o - 10, e = Math.random() * o - 10, n = Math.random() * o - 10 - 20, l = Math.random() > .05, l = !0, c += -.05;
                                    break;
                                case 1:
                                    h += .1;
                                    break;
                                case 2:
                                    c += .05
                            }
                            l && (c = 0, h = 0, d = 0), c += t, h += e, d += n, data[r++] = c, data[r++] = h, data[r++] = d, data[r++] = 0
                        }
                        var m = new j.k(data, R, B, j.ib, j.p, j.xb, j.lb, j.lb);
                        return m.needsUpdate = !0, m
                    }
                }, {
                    key: "_geometryToTexture",
                    value: function(t) {
                        for (var e = t.attributes.position, n = t.attributes._acolor, o = e.array, data = new Float32Array(524288), r = 0, i = 0; i < e.count; i++) data[r++] = o[3 * i], data[r++] = o[3 * i + 1], data[r++] = o[3 * i + 2], data[r++] = n ? n.array[i] : 0;
                        var l = new j.k(data, R, B, j.ib, j.p, j.xb, j.lb, j.lb);
                        return l.needsUpdate = !0, l
                    }
                }, {
                    key: "addFormGeometry",
                    value: function(t, e) {
                        var n = this._geometryToTexture(e);
                        this.formTextures[t] = n, this.currentIndex == t && (this.currentIndex = -1, this.setNewForm(t))
                    }
                }]), t
            }(),
            N = n(307),
            H = function() {
                function t(e) {
                    Object(c.a)(this, t), this.camera = e, this.target = {
                        x: 0,
                        y: 0
                    }, this.current = {
                        x: 0,
                        y: 0
                    }, this.spherical = new j.rb(this.camera.position.z, Math.PI / 2, 0), this.speed = 2, this.amplitudeX = .1, this.amplitudeY = .1, this.x = .5, this.y = .5, this.lookAtPos = new j.Ab(0, 0, 0)
                }
                return Object(h.a)(t, [{
                    key: "addEvents",
                    value: function() {}
                }, {
                    key: "setMouse",
                    value: function(t, e) {
                        this.x = t, this.y = e
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = (this.x - .5) * Math.PI * this.amplitudeX,
                            e = (this.y - .5) * Math.PI * this.amplitudeY;
                        this.spherical.phi = e + Math.PI / 2, this.spherical.theta = t, this.camera.position.setFromSpherical(this.spherical), this.camera.lookAt(this.lookAtPos)
                    }
                }]), t
            }();

        function Y(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var F = function(t) {
            Object(O.a)(n, t);
            var e = Y(n);

            function n(t) {
                var o;
                Object(c.a)(this, n), (o = e.call(this)).core = t;
                var r = new j.bb,
                    l = new j.kb({
                        fragmentShader: "\n\tprecision lowp float;\n\tvarying vec2 vUv;\n\tuniform vec3 uBrandColor;\n\tuniform vec3 uAccentColor;\n\tvoid main() {\n\t\tvec3 color = mix(uBrandColor, uAccentColor, vUv.y);\n\t\tgl_FragColor = vec4(color,1.0);\n\t}\n",
                        vertexShader: "\n\tattribute vec3 position;\n\tattribute vec2 uv;\n\tvarying vec2 vUv;\n\tvoid main() {\n\t\tvec3 transformed = position;\n\t\tvUv = uv;\n\t\tgl_Position =  vec4(transformed * 2., 1.);\n\t}\n",
                        depthTest: !1,
                        depthWrite: !1,
                        uniforms: {
                            uBrandColor: o.core.uColorBrand,
                            uAccentColor: o.core.uColorGradient
                        }
                    }),
                    h = new j.O(r, l);
                return h.frustumCulled = !1, o.frustumCulled = !1, h.renderOrder = -1e4, o.add(h), t.scene.add(Object(x.a)(o)), o
            }
            return n
        }(j.Y);

        function X(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var G = "#E11D30",
            U = "#5A405A",
            V = "#765176",
            W = [null, "Form01.gltf", "Form02.gltf", "Form03.gltf", "Form04.gltf", "Form05.gltf", "Form06.gltf", "Form07.gltf", "Form08.gltf", "Form09.gltf", "Form10.gltf", "Form11.gltf", "Form12.gltf", "Form13.gltf", "Form14.gltf", "Form15.gltf", "Form16.gltf"],
            Z = function(t) {
                Object(O.a)(n, t);
                var e = X(n);

                function n(canvas) {
                    var t, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        debug: !1,
                        formPath: "./"
                    };
                    return Object(c.a)(this, n), (t = e.call(this, canvas)).options = o, t.formController = new A(Object(x.a)(t)), t.uTime = new j.yb(0), t.uViewSize = new j.yb(new j.zb(t.viewSize.width, t.viewSize.height)), t.uMouse = new j.yb(new j.zb), t.uMouseVel = new j.yb(new j.zb), t.uColorAccent = new j.yb(new j.j(G)), t.uColorBrand = new j.yb(new j.j(V)), t.uColorGradient = new j.yb(new j.j(U)), t.uAspect = new j.yb(1), t.cameraMovement = new H(t.camera), t.scale = -1, t.currentScale = -1, t.scrollRotation = new j.Y, t.gradient = new F(Object(x.a)(t)), t.onUpdates = [], t.onSetMouse = [], t.formsToLoad = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], t.isLoading = [], t.isFormActivated = !1, t
                }
                return Object(h.a)(n, [{
                    key: "init",
                    value: function() {
                        this.formController.init(), this.scene.add(this.formController.object), this.addEvents()
                    }
                }, {
                    key: "updateScroll",
                    value: function(t) {
                        var e = this.y;
                        null == e && (e = 0), this.formController.object.position.y = t
                    }
                }, {
                    key: "setBounds2",
                    value: function(t, e, n, o) {
                        if (!this.bounds || this.bounds.x !== t || this.bounds.y !== e || this.bounds.width !== n || this.bounds.height !== o) {
                            this.bounds = {
                                x: t,
                                y: e,
                                width: n,
                                height: o
                            };
                            var r = n / 20,
                                l = o / 20,
                                c = Math.min(r, l);
                            this.y = e, this.formController.gpgpu.setPosition(t, e); - 1 == this.scale && this.formController.object.scale.setScalar(c), this.scale = c
                        }
                    }
                }, {
                    key: "setBounds",
                    value: function(t, e, n) {}
                }, {
                    key: "setColor",
                    value: function(t) {
                        this.uColorAccent.value = new j.j(t)
                    }
                }, {
                    key: "setGradientColor",
                    value: function(t) {
                        this.uColorGradient.value = new j.j(t)
                    }
                }, {
                    key: "addEvents",
                    value: function() {
                        Object(y.a)(Object(C.a)(n.prototype), "addEvents", this).call(this)
                    }
                }, {
                    key: "setForm",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; - 1 != t ? (this.formController.setNewForm(t, e), null == this.isLoading[t] && this.loadForm(t)) : this.formController.setRestingState()
                    }
                }, {
                    key: "resize",
                    value: function(t, e) {
                        Object(y.a)(Object(C.a)(n.prototype), "resize", this).call(this, t, e), this.uAspect.value = e / t, this.uViewSize.value.set(this.viewSize.width, this.viewSize.height), this.formController.uniforms.uMouseAmplitude.value = t <= 1024 ? 0 : 1
                    }
                }, {
                    key: "loadForm",
                    value: function(t) {
                        var e = this,
                            n = t > 5 ? t + 1 : t;
                        if (!(n < 1 || n > 16 || this.isLoading[t])) return this.isLoading[t] = !0, new Promise((function(o) {
                            var r = new j.K(o);
                            new N.a(r).load("".concat(e.options.formPath).concat(W[n]), (function(n) {
                                var o = n.scene.children[0];
                                e.assets["form".concat(t)] = o, e.formController.addFormGeometry(t, o.children[o.children.length - 1].geometry)
                            }))
                        }))
                    }
                }, {
                    key: "setMouse",
                    value: function(t, e, n) {
                        this.formController.uniforms.uMouseAmplitude.value = this.vp.width <= 1024 || n ? 0 : 1, this.formController.rotationObject.setMouse(t, e), this.onSetMouse.forEach((function(n) {
                            return n(t, e)
                        }));
                        var o = this.uMouse.value.x,
                            r = this.uMouse.value.y;
                        this.uMouse.value.set(t, 1 - e), this.uMouseVel.value.copy(this.uMouse.value), this.uMouseVel.value.x += -o, this.uMouseVel.value.y += -r
                    }
                }, {
                    key: "activateForm",
                    value: function() {
                        this.formController.activate()
                    }
                }, {
                    key: "update",
                    value: function(t, e) {
                        var n = this.clock.getDelta();
                        this.currentScale += Object(L.a)(this.currentScale, this.scale, .05, 1e-4), this.formController.object.scale.setScalar(this.currentScale), this.uTime.value = this.clock.elapsedTime, this.formController.update(n), this.onUpdates.forEach((function(t) {
                            return t(n)
                        }))
                    }
                }, {
                    key: "afterUpdate",
                    value: function() {
                        for (var a = 0; a < 1e3;) a++
                    }
                }]), n
            }(_);

        function Q(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var K = function(t) {
            Object(O.a)(n, t);
            var e = Q(n);

            function n(t) {
                var o;
                Object(c.a)(this, n), (o = e.call(this)).setMouse = function(t, e) {
                    o.particleMovement.setMouse(t, e)
                }, o.core = t;
                for (var r = new j.v, l = [], h = new j.zb, i = 0; i < 100; i++) {
                    var d = 1 * Math.random() - .5,
                        m = 1 * Math.random() - .5,
                        f = 25 * Math.random();
                    h.x = 2 * Math.random() - 1, h.y = 2 * Math.random() - 1;
                    var v = .2 * Math.random() + .8;
                    j.M.mapLinear(v, .8, 1, 1, .5);
                    l[12 * i] = 0 + d, l[12 * i + 1] = 0 + m, l[12 * i + 2] = f, l[12 * i + 3] = v, l[12 * i + 4] = 0 + d, l[12 * i + 5] = 0 + m, l[12 * i + 6] = f, l[12 * i + 7] = v, l[12 * i + 8] = 0 + d, l[12 * i + 9] = 0 + m, l[12 * i + 10] = f, l[12 * i + 11] = v
                }
                o.aPos = l, r.setAttribute("aPos", new j.u(new Float32Array(l), 4, !1));
                r.setAttribute("position", new j.o([-.2, 0, 0, 0, .4, 0, .2, 0, 0], 3, !1)), r.setAttribute("normal", new j.o([0, 0, 1, 0, 0, 1, 0, 0, 1], 3, !1)), r.setAttribute("aColor", new j.o([0, .5, 1], 1, !1));
                var w = new j.nb({
                    vertexShader: "\n\t\tattribute vec4 aPos;\n\t\tuniform vec2 uViewSize;\n\t\tuniform float uTime;\n\t\tuniform float uScroll;\n\t\tuniform float uGrow;\n\t\tuniform float uMove;\n\t\t#ifndef HALF_PI\n\t\t#define HALF_PI 1.5707963267948966\n\t\t#endif\n\n\t\tfloat elasticOut(float t) {\n\t\treturn sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -13.0 * t) + 1.0;\n\t\t}\n\n\t\tmat2 rotate2d(float _angle){\n\t\t\treturn mat2(cos(_angle),-sin(_angle),\n\t\t\t\t\t\tsin(_angle),cos(_angle));\n\t\t}\n\t\tmat4 rotate3D(vec3 axis, float angle) {\n\t\t\taxis = normalize(axis);\n\t\t\tfloat s = sin(angle);\n\t\t\tfloat c = cos(angle);\n\t\t\tfloat oc = 1.0 - c;\n\t\t  \n\t\t\treturn mat4(\n\t\t\t\t  oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,\n\t\t\t  oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,\n\t\t\t  oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,\n\t\t\t\t  0.0,                                0.0,                                0.0,                                1.0\n\t\t\t  );\n\t\t  }\n\t\t  float cubicOut(float t) {\n\t\t\tfloat f = t - 1.0;\n\t\t\treturn f * f * f + 1.0;\n\t\t  }\n\t\tvec4 getPosition(vec3 transformed){\n\n\t\t\tvec2 nextTransformed = rotate2d(-uTime  * aPos.w) * aPos.yz;\n\n\n\t\t\tfloat scale = aPos.z;\n\t\t\tfloat speed = aPos.w;\n\n\t\t\t// transformed *= ((nextTransformed.y+20.) / 40.) * 0.5;\n\n\t\t\tvec2 pos = aPos.xy * uViewSize.xy;\n\t\t\tvec2 scrollPos = pos;\n\t\t\tscrollPos.y += uScroll * speed;\n\t\t\tscrollPos.y = mod(scrollPos.y+ uViewSize.y/2., uViewSize.y) - uViewSize.y/2.;\n\n\n\t\t\t\n\t\t\tvec2 screenUV = scrollPos/ uViewSize.xy + 0.5;\n\t\t\tfloat depthUV = aPos.z / 25.;\n\n\t\t\tfloat start = 0.5 * (1.-screenUV.y);\n\t\t\tfloat duration = 0.5;\n\t\t\tfloat linearProgress = clamp((uGrow - start)/ duration, 0., 1.);\n\t\t\t// float growth = smoothstep( start, start + 0.3, uGrow);\n\t\t\tfloat scaleProgress = elasticOut(linearProgress);\n\n\t\t\tfloat moveProgress = cubicOut(linearProgress);\n\n\t\t\ttransformed *= screenUV.y * scaleProgress;\n\n\t\t\n\n\t\t\ttransformed = (rotate3D(normalize(vec3(pos, aPos.z)), uTime * speed + speed * 1000. + moveProgress * 1. ) * vec4(transformed,1.) ).xyz;\n\t\t\t// transformed.xy *= scale;\n\t\t\t// pos.y += uScroll * speed;\n\t\t\t// TODO: add a bit of padding.\n\t\t\t// pos.y = mod(pos.y+ uViewSize.y/2., uViewSize.y) - uViewSize.y/2.;\n\t\t\ttransformed.xy += scrollPos;\n\t\t\ttransformed.y += - 2. +  moveProgress  * 2.;\n\t\t\ttransformed.z += aPos.z;\n\t\t\t// transformed.yz += nextTransformed; \n\n\t\t\t// transformed.z += 20.;\n\t\t\treturn vec4(transformed, screenUV.y);\n\t\t}\n\t\tvarying float vDot;\n\t\tvarying float vUV;\n\t\tvoid main() {\n\t\t\tvec3 transformed = position;\n\n\t\t\tvec4 newPos =  getPosition(transformed);\n\t\t\ttransformed = newPos.xyz;\n\t\t\tgl_Position =  projectionMatrix * modelViewMatrix * vec4(transformed, 1.);\n\t\t\t// gl_Position.y = mod(gl_Position.y + 1., 1.);\n\t\t\t\n\t\t\tvec2 pos = aPos.xy * uViewSize.xy;\n\t\t\tfloat speed = aPos.w;\n\t\t\tvec3 norm = (rotate3D(normalize(vec3(pos, aPos.z)), uTime * speed + speed * 1000. ) * vec4(normal,1.) ).xyz;\n\t\t\t// norm = normalize(norm);\n\t\t\t// norm = (modelViewMatrix * vec4(norm,1.)).xyz;\n\t\t\tfloat dotted = dot(normalize(norm),  normalize(vec3(1., 0, 1.)));\n\t\t\tvDot = smoothstep(-1., 1., dotted) * 0.2;\n\t\t\tvUV = smoothstep(0.3, 0.7, newPos.a);\n\t\t}\n\t",
                    fragmentShader: "\n\tprecision lowp float;\n\t\tuniform vec3 uColor;\n\t\tvarying float vUV;\n\n\t\tuniform vec3 uColorBrand;\n\n\t\tvarying float vDot;\n\n\t\tvoid main() {\n\t\t\tvec3 color = mix(uColor, uColorBrand, vUV * 0.2);\n\t\t\tcolor = mix(color,vec3(1.), vDot);\n\t\t\tgl_FragColor = vec4(color,1.0);\n\t\t}\n\t",
                    uniforms: {
                        uViewSize: o.core.uViewSize,
                        uTime: o.core.uTime,
                        uColor: o.core.uColorAccent,
                        uGrow: new j.yb(0),
                        uMove: new j.yb(0),
                        uColorBrand: o.core.uColorBrand,
                        uScroll: new j.yb(0)
                    },
                    side: j.m,
                    depthTest: !1,
                    depthWrite: !1
                });
                o.mat = w;
                var y = new j.O(r, w);
                return y.renderOrder = -1, y.frustumCulled = !1, o.add(y), o.mesh = y, o.visible = !0, o.scroll = 0, o.targetScroll = 0, o.material = w, o.particleMovement = new D(o.core.camera, Object(x.a)(o)), o.particleMovement.amplitudeX = .05, o.particleMovement.amplitudeY = .05, o.core.onSetMouse.push(o.setMouse), setTimeout((function() {
                    o.animate()
                }), 1500), o.core.onUpdates.push(o.update.bind(Object(x.a)(o))), o
            }
            return Object(h.a)(n, [{
                key: "animate",
                value: function() {
                    r.a.fromTo(this.mat.uniforms.uGrow, {
                        value: 0
                    }, {
                        value: 1,
                        ease: "power0.out",
                        duration: 2
                    })
                }
            }, {
                key: "updateScroll",
                value: function(t) {
                    this.targetScroll = t
                }
            }, {
                key: "update",
                value: function(t) {
                    this.particleMovement.update(t);
                    var e = 1 - Math.exp(-4 * t),
                        n = Object(L.a)(this.scroll, this.targetScroll, e, 1e-5);
                    0 !== n && (this.scroll += n, this.material.uniforms.uScroll.value = this.scroll)
                }
            }]), n
        }(j.Y);

        function J(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, o = Object(C.a)(t);
                if (e) {
                    var r = Object(C.a)(this).constructor;
                    n = Reflect.construct(o, arguments, r)
                } else n = o.apply(this, arguments);
                return Object(k.a)(this, n)
            }
        }
        var tt = function(t) {
                Object(O.a)(n, t);
                var e = J(n);

                function n(t) {
                    var o;
                    Object(c.a)(this, n), (o = e.call(this)).webgl = t;
                    var r = new j.bb,
                        l = new j.Q({
                            depthTest: !1,
                            depthWrite: !1
                        }),
                        h = new j.O(r, l);
                    return h.visible = !1, h.renderOrder = -1, o.rect = null, o.sizer = new j.Y, o.sizer.add(h), o.add(o.sizer), t.scene.add(Object(x.a)(o)), o
                }
                return Object(h.a)(n, [{
                    key: "updateScroll",
                    value: function(t, e) {
                        this.position.y = t / e * this.webgl.viewSize.height
                    }
                }, {
                    key: "dispose",
                    value: function() {
                        this.webgl.scene.remove(this)
                    }
                }, {
                    key: "setRect",
                    value: function() {
                        var rect = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.rect,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            e = arguments.length > 2 ? arguments[2] : void 0;
                        if (null != rect) {
                            this.rect = rect;
                            var n = rect.width / t * this.webgl.viewSize.width,
                                o = rect.height / e * this.webgl.viewSize.height,
                                r = rect.x / t * this.webgl.viewSize.width;
                            r += -this.webgl.viewSize.width / 2 + n / 2;
                            var l = -rect.y / e * this.webgl.viewSize.height;
                            l += this.webgl.viewSize.height / 2 - o / 2, this.sizer.scale.set(n, o, 0), this.sizer.position.set(r, l, 0)
                        }
                    }
                }]), n
            }(j.Y),
            et = n(8),
            it = n(32),
            nt = n(142);

        function ot(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function at(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ot(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ot(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var st = {
                name: "scene-canvas",
                data: function() {
                    return {
                        canvasColorMap: []
                    }
                },
                computed: at(at({}, Object(et.d)(["currentShapeId", "isSeamlessTransition", "currentChapterSlug"])), Object(et.c)(["isTouch"])),
                methods: at(at({}, Object(et.b)(["set"])), {}, {
                    resize: function(t, e) {
                        this.webgl.resize(t, e), it.a.isFirst && it.a.setMouse(t / 2, e / 2, it.a.isFirst), this.w = t, this.h = e, this.isMobile = !(this.w > 1024), this.logoIntro, "index" === this.pageName && (this.needsTransition && this.setPositioner(0), this.setIndexPosition(0), this.needsTransition && (this.webgl.setForm(this.index + 1, !0), this.needsTransition = !1)), this.pageName === "edition-slug___".concat(this.$i18n.locale) && (this.needsTransition && this.setIndexPosition(l.a.scrollTop), this.setPositioner(), this.needsTransition && (this.webgl.setForm(this.index + 1, !0), this.needsTransition = !1)), this.mobileGradients && this.mobileGradients.resize(t, e)
                    },
                    getFormRect: function(t, e) {
                        var n = e.width,
                            o = e.height,
                            r = e.x,
                            l = e.y;
                        switch (t) {
                            case 0:
                                return {
                                    width: .8 * n,
                                    height: o,
                                    x: r + .1 * n,
                                    y: l
                                };
                            case 1:
                                return this.isMobile ? {
                                    width: .8 * n,
                                    height: o,
                                    x: r + .1 * n,
                                    y: l
                                } : {
                                    width: .76 * n,
                                    height: o,
                                    x: r + .165 * n,
                                    y: l
                                };
                            case 2:
                                return this.isMobile ? {
                                    width: .75 * n,
                                    height: o,
                                    x: r + .125 * n,
                                    y: l
                                } : {
                                    width: .76 * n,
                                    height: o,
                                    x: r + .165 * n,
                                    y: l
                                };
                            case 3:
                                return this.isMobile ? {
                                    width: .75 * n,
                                    height: o,
                                    x: r + .125 * n,
                                    y: l
                                } : {
                                    width: .775 * n,
                                    height: o,
                                    x: r + .152 * n,
                                    y: l
                                };
                            case 4:
                                return this.isMobile ? {
                                    width: 2.25 * n,
                                    height: o,
                                    x: r - n * (.675 + this.w / this.h * .06),
                                    y: l
                                } : {
                                    width: 2.25 * n,
                                    height: o,
                                    x: r - .625 * n,
                                    y: l
                                };
                            case 5:
                                return this.isMobile ? {
                                    width: .7 * n,
                                    height: o,
                                    x: r + .11 * n,
                                    y: l
                                } : {
                                    width: .68 * n,
                                    height: o,
                                    x: r + .2 * n,
                                    y: l
                                };
                            case 6:
                                return {
                                    width: n,
                                    height: 1.5 * o,
                                    x: r,
                                    y: l - .25 * o
                                };
                            case 7:
                                return this.isMobile ? {
                                    width: .75 * n,
                                    height: o,
                                    x: r + .115 * n,
                                    y: l
                                } : {
                                    width: .74 * n,
                                    height: o,
                                    x: r + .17 * n,
                                    y: l
                                };
                            case 8:
                            case 9:
                            case 10:
                                return {
                                    width: .74 * n,
                                    height: o,
                                    x: r + .135 * n,
                                    y: l
                                };
                            case 11:
                                return this.isMobile ? {
                                    width: .8 * n,
                                    height: o,
                                    x: r + .1 * n,
                                    y: l
                                } : {
                                    width: .74 * n,
                                    height: o,
                                    x: r + .16 * n,
                                    y: l
                                };
                            case 12:
                                return this.isMobile ? {
                                    width: .8 * n,
                                    height: o,
                                    x: r + .1 * n,
                                    y: l
                                } : {
                                    width: .85 * n,
                                    height: o,
                                    x: r + .138 * n,
                                    y: l - .1 * o
                                };
                            case 13:
                                return this.isMobile ? {
                                    width: .88 * n,
                                    height: o,
                                    x: r + .06 * n,
                                    y: l
                                } : {
                                    width: .88 * n,
                                    height: o,
                                    x: r + .11 * n,
                                    y: l
                                };
                            case 14:
                                return this.isMobile ? {
                                    width: .85 * n,
                                    height: o,
                                    x: r + .075 * n,
                                    y: l
                                } : {
                                    width: .8 * n,
                                    height: o,
                                    x: r + .15 * n,
                                    y: l - .1 * o
                                }
                        }
                        return {
                            width: n,
                            height: o,
                            x: r,
                            y: l
                        }
                    },
                    setPositioner: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.a.scrollTop;
                        if (-1 !== this.index) {
                            var e = !1;
                            t != l.a.scrollTop && (console.log("SCROLLTOP IS", t), e = !0);
                            var section = document.querySelectorAll(".insight-content")[this.index],
                                n = this.w > 1024 ? ".hover-shape" : ".hover-shape-mobile",
                                o = section.querySelector(n).getBoundingClientRect(),
                                r = o.top,
                                c = o.left,
                                h = o.width,
                                d = o.height,
                                body = this.w > 1024 ? document.body : document.querySelector("main"),
                                m = body.getBoundingClientRect().top,
                                rect = {
                                    width: h,
                                    height: d,
                                    x: c,
                                    y: e ? t + r : -m + r
                                },
                                f = this.getFormRect(this.index, rect);
                            this.positioner.setRect(f, this.w, this.h), this.webgl.setBounds2(this.positioner.sizer.position.x, this.positioner.sizer.position.y, this.positioner.sizer.scale.x, this.positioner.sizer.scale.y, this.positioner.position.y)
                        }
                    },
                    getFormIndexRect: function(t, e, n, o) {
                        var r = 0;
                        switch (t) {
                            case 0:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 3,
                                    y: n / 2 - r / 2 + o
                                };
                            case 2:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 3,
                                    y: n / 2 - r / 1.6 + o
                                };
                            case 4:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 1.5,
                                    y: n / 2 - r / 2 + o
                                };
                            case 5:
                                return {
                                    width: r = 1 * Math.min(e, .6 * n),
                                    height: r,
                                    x: .9 * e - r / 1.5,
                                    y: n / 2 - r / 2 + o
                                };
                            case 6:
                                return {
                                    width: r = 1 * Math.min(e, .7 * n),
                                    height: r,
                                    x: .9 * e - r / 1.5,
                                    y: n / 2 - r / 2.2 + o
                                };
                            case 7:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 3,
                                    y: n / 2 - r / 2 + o
                                };
                            case 8:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 2,
                                    y: n / 2 - r / 2 + o
                                };
                            case 9:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 2,
                                    y: n / 2 - r / 1.7 + o
                                };
                            case 10:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 2.5,
                                    y: n / 2 - r / 2 + o
                                };
                            case 11:
                                return {
                                    width: r = 1 * Math.min(e, .8 * n),
                                    height: r,
                                    x: .9 * e - r / 1.75,
                                    y: n / 2 - r / 2 + o
                                };
                            case 12:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 3,
                                    y: n / 2 - r / 2 + o
                                };
                            case 13:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 2.7,
                                    y: n / 2 - r / 2 + o
                                };
                            case 14:
                                return {
                                    width: r = 1 * Math.min(e, n),
                                    height: r,
                                    x: .9 * e - r / 2,
                                    y: n / 2 - r / 2.5 + o
                                }
                        }
                        return {
                            width: r = 1 * Math.min(e, n),
                            height: r,
                            x: .9 * e - r / 4,
                            y: n / 2 - r / 2 + o
                        }
                    },
                    setIndexPosition: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = 1.5 * Math.min(this.w, this.h),
                            rect = {
                                width: e,
                                height: e,
                                x: this.w - e / 4,
                                y: this.h / 2 - e / 2 + t
                            };
                        rect = this.getFormIndexRect(this.index, this.w, this.h, t), this.positioner.setRect(rect, this.w, this.h), this.webgl.setBounds2(this.positioner.sizer.position.x, this.positioner.sizer.position.y, this.positioner.sizer.scale.x, this.positioner.sizer.scale.y, this.positioner.position.y)
                    },
                    tick: function(t) {
                        var e = "index" === this.pageName;
                        this.positioner.updateScroll(e ? 0 : t, this.h), this.isTouch || this.webgl.setMouse(it.a.easeX / this.w, it.a.easeY / this.h, it.a.isFirst), this.mobileGradients && this.w <= 1024 && (this.mobileGradients.resize(this.w, this.h), this.mobileGradients.updateScroll(t, this.h), this.mobileGradients.update()), this.webgl.updateScroll(this.positioner.position.y), this.bgParticles.updateScroll(t / window.innerHeight * this.webgl.viewSize.height), this.webgl.tick()
                    },
                    animateText: function() {
                        var t = this;
                        if (null != this.homeText) {
                            var e = {
                                progress: 0
                            };
                            r.a.fromTo(e, {
                                progress: 0
                            }, {
                                progress: 1,
                                ease: "power1.out",
                                onUpdate: function() {
                                    var n;
                                    null === (n = t.homeText) || void 0 === n || n.setProgress(e.progress)
                                },
                                duration: 8
                            })
                        }
                    },
                    dissapearShape: function(t) {
                        this.webgl.setForm(-1)
                    },
                    setAccentColor: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (n) return this.webgl.setColor(t), void(this.color = t);
                        r.a.to(this, {
                            color: t,
                            duration: 1,
                            ease: "power3.out",
                            onUpdate: function() {
                                e.webgl.setColor(e.color)
                            }
                        })
                    },
                    doPageTransition: function() {
                        var t = this,
                            e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        this.homeText && (this.homeText.isScrollDisabled = !0);
                        var n = {
                            progress: 0
                        };
                        r.a.to(n, {
                            progress: 1,
                            duration: 1,
                            ease: "expo.inOut",
                            onUpdate: function() {
                                t.webgl.setBounds(-t.webgl.viewSize.width / 4 * n.progress, -t.webgl.viewSize.height / 6 * n.progress, 1 - .3 * n.progress)
                            }
                        }), this.needsTransition = e, this.webgl.formController.gpgpu.uniforms.uUseTarget.value = !1, this.webgl.formController.gpgpu.uniforms.uUseLast.value = !1, e || (this.hideShape(), this.hideShape())
                    },
                    _setFormTEMP: function(t) {
                        this.index = t, this.webgl.setForm(t + 1, this.needsTransition), this.pageName === "edition-slug___".concat(this.$i18n.locale) ? (this.setPositioner(), this.needsTransition && (this.needsTransition = !1)) : this.isPageChanged && this.setIndexPosition(0)
                    },
                    showShape: function(t) {
                        this.webgl.formController.gpgpu.uniforms.uUseTarget.value = -1 == this.index, this.webgl.formController.gpgpu.uniforms.uUseLast.value = !1, this._setFormTEMP(t);
                        Math.floor(t / 4)
                    },
                    hideShape: function(t) {
                        this.webgl.formController.gpgpu.uniforms.uUseTarget.value = !1, this.webgl.formController.gpgpu.uniforms.uUseLast.value = "index" == this.pageName, this.webgl.setForm(-1)
                    },
                    explodeShape: function() {
                        this.webgl.formController.breakShape()
                    },
                    goBackNormal: function() {
                        this.webgl.formController.breakShape(!0)
                    },
                    setBackgroundColor: function(t) {},
                    changePage: function(t) {
                        "index" === t ? (this.pageName === "edition-slug___".concat(this.$i18n.locale) && this.hideShape(), this.mobileGradients && (this.mobileGradients.dispose(), this.mobileGradients = null, this.webgl.formController.gpgpu.uniforms.uUseLast.value = !0)) : (this.webgl.formController.gpgpu.uniforms.uUseTarget.value = !1, this.webgl.formController.gpgpu.uniforms.uUseLast.value = !1), this.pageName = t, this.isPageChanged = !0
                    },
                    setGradientColor: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (n) return this.webgl.setGradientColor(t), void(this.color = t);
                        console.log("gsap animation triggered"), r.a.to(this, {
                            color: t,
                            duration: 1,
                            ease: "power3.out",
                            onUpdate: function() {
                                e.webgl.setGradientColor(e.color)
                            }
                        })
                    },
                    handleSlug: function(t, e) {
                        var n = this;
                        return Object(w.a)(regeneratorRuntime.mark((function o() {
                            return regeneratorRuntime.wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        n.canvasColorMap.find((function(o) {
                                            o.slug === t ? (console.log(o), n.setAccentColor(o.color, !1), n.setGradientColor(o.color, !1)) : t.includes("index") && (console.log(), n.setAccentColor("#fc483a", !1), n.setGradientColor("#343d53", e))
                                        }));
                                    case 1:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    wheel: function(t) {
                        return t.preventDefault(), !1
                    },
                    addEvents: function() {
                        this._wheel = this.wheel.bind(this), window.addEventListener("touch", this._wheel, {
                            passive: !1
                        }), window.addEventListener("wheel", this._wheel, {
                            passive: !1
                        }), window.addEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), window.addEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        })
                    },
                    removeEvents: function() {
                        window.removeEventListener("touch", this._wheel, {
                            passive: !1
                        }), window.removeEventListener("wheel", this._wheel, {
                            passive: !1
                        }), window.removeEventListener("mousewheel", this._wheel, {
                            passive: !1
                        }), window.removeEventListener("DOMMouseScroll", this._wheel, {
                            passive: !1
                        })
                    }
                }),
                watch: {
                    currentShapeId: function(t, e) {
                        var n = this;
                        ! function t(e) {
                            if (clearTimeout(n.shapeTimeout), n.isSeamlessTransition) n.shapeTimeout = setTimeout((function() {
                                t(e)
                            }), 100);
                            else {
                                if (-1 == e) return void(n.shapeTimeout = setTimeout((function() {
                                    n.hideShape()
                                }), 20));
                                n.shapeTimeout = setTimeout((function() {
                                    n.hideShape(e)
                                }), 20)
                            }
                        }(t)
                    },
                    currentChapterSlug: function(t, e) {
                        this.handleSlug(t)
                    }
                },
                mounted: function() {
                    var t = this,
                        e = [];
                    this.addEvents(), this.pageName = "index", this.isPageChanged = !1, Object(nt.a)("query editionAllColoursQuery ($locale: String!){\n    editionCollection(locale: $locale, order: publishDate_DESC) {\n        items {\n          slug\n          backgroundColor\n          publishDate\n        }\n      }\n    }\n    ", {
                        locale: this.$i18n.locale
                    }).then((function(t) {
                        t.editionCollection.items.map((function(t, n) {
                            e.push({
                                slug: t.slug,
                                color: t.backgroundColor
                            })
                        }))
                    })), console.log(e), this.canvasColorMap = e, this.webgl = new Z(this.$el, {
                        debug: !0,
                        formPath: "/models/"
                    }), this.webgl.init(), this.positioner = new tt(this.webgl), this.handleSlug(this.currentChapterSlug, !0), this.bgParticles = new K(this.webgl), this.webgl.scene.add(this.bgParticles), this.handleSlug(this.currentChapterSlug, !0), this.setGradientColor("#343d53", !0), this.isIntroDone = !1, this.isQuickChange = !1, this.lastIndex = -1, setTimeout((function() {
                        t.isIntroDone = !0, t.handleSlug(t.currentChapterSlug), t.set({
                            property: "isLoaderAnimationDone",
                            value: !0
                        }), t.webgl.activateForm(), t.$nextTick((function() {
                            f.a.emit("GLOBAL:ON_INTRO_DONE")
                        })), setTimeout((function() {
                            t.w > 1024 && (document.body.style.height = "auto", document.body.style.overflow = "initial"), t.removeEvents()
                        }), 1e3)
                    }), 2800);
                    var n = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15];
                    for (var i = 0; i < 14; i++) setTimeout((function() {
                        var e, o;
                        e = n, o = t.index, e.sort((function(a, b) {
                            return (a -= o) > 0 && (a += -.5), (b -= o) > 0 && (b += -.5), (a = Math.abs(a)) - (b = Math.abs(b))
                        })), t.webgl.loadForm(n.splice(0, 1)[0])
                    }), 2e3 * i);
                    this.webgl.setForm(-1), this.index = -1, this.webgl.setForm(this.currentShapeId), f.a.on("SHAPE:EXPLODE", this.explodeShape.bind(this)), f.a.on("SHAPE:GOBACKNORMAL", this.goBackNormal.bind(this))
                }
            },
            lt = (n(467), n(7));

        function ct(object, t) {
            var e = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(object, t).enumerable
                }))), e.push.apply(e, n)
            }
            return e
        }

        function ht(t) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ct(Object(source), !0).forEach((function(e) {
                    Object(o.a)(t, e, source[e])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : ct(Object(source)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                }))
            }
            return t
        }
        var pt = {
                components: {
                    sceneCanvas: Object(lt.a)(st, (function() {
                        var t = this.$createElement;
                        return (this._self._c || t)("canvas", {
                            staticClass: "scene-canvas"
                        })
                    }), [], !1, null, null, null).exports
                },
                computed: ht(ht({}, Object(et.d)(["isNavOpen", "showBanner", "isLoaderAnimationDone", "isSeamlessTransition", "currentChapterSlug", "allSections"])), Object(et.c)(["isTouch"])),
                data: function() {
                    return {
                        routeName: "",
                        componentKey: ""
                    }
                },
                mounted: function() {
                    var t = this;
                    this.$watch("$i18n.locale", (function(e, n) {
                        e !== n && (console.log("newLocale ", e), t.componentKey = e)
                    }), {
                        immediate: !0
                    }), this.pageHeight = 0, r.a.ticker.add(this.tick.bind(this)), f.a.addListener("PAGE:MOUNTED", this.onMounted.bind(this)), f.a.addListener("GLOBAL:RESIZE", this.resize.bind(this)), f.a.addListener("GLOBAL:ICON", this.changeIcon.bind(this)), this.$router.beforeEach((function(e, n, o) {
                        var r, c, h, d, m, f;
                        (null === (r = t.$refs.mouse) || void 0 === r || r.removeListeners(), t.isNavOpen && t.toggleNav(), n.name === "edition-slug___".concat(t.$root.$i18n.locale) && "index" === e.name) && (t.$refs.editionPage.hide(), null === (m = t.$refs.canvas) || void 0 === m || m.doPageTransition(!1));
                        e.name === "edition-slug___".concat(t.$root.$i18n.locale) && "index" === n.name && (null === (f = t.$refs.canvas) || void 0 === f || f.doPageTransition());
                        null === (c = t.$refs.page.$children) || void 0 === c || null === (h = c[0]) || void 0 === h || null === (d = h.hide) || void 0 === d || d.call(h), setTimeout((function() {
                            t.routeName = e.name, e.name !== n.name && l.a.goTo(0), o()
                        }), 800)
                    })), this.routeName = this.$route.name, this.$router.afterEach((function(e, n) {
                        t.$nextTick((function() {
                            t.routeName = e.name
                        }))
                    })), this.allSections.forEach((function(t) {
                        document.documentElement.style.setProperty("--".concat(t.slug), t.backgroundColor), document.documentElement.style.setProperty("--".concat(t.slug, "-cta"), t.ctaColor), document.documentElement.style.setProperty("--".concat(t.slug, "-title"), t.titleColor)
                    }))
                },
                watch: {
                    isNavOpen: function(t) {
                        t ? document.body.classList.add("no-scroll") : setTimeout((function() {
                            document.body.classList.remove("no-scroll")
                        }), 700)
                    },
                    currentChapterSlug: function(t) {
                        this.changeIcon()
                    }
                },
                methods: ht(ht({}, Object(et.b)(["toggleNav", "set"])), {}, {
                    forceRerender: function() {
                        this.this.$i18n.locale += 1
                    },
                    changeIcon: function() {
                        var t = this;
                        [document.querySelector('link[rel="shortcut icon"]'), document.querySelector('link[rel="icon shortcut"]')].forEach((function(e) {
                            e && e.setAttribute("href", "/icons/icon-".concat(t.currentChapterSlug, ".png"))
                        }))
                    },
                    tick: function() {
                        var t, e, n, o, r, c, h, d, m, f, v = l.a.scrollTop;
                        null === (t = this.$refs.page) || void 0 === t || null === (e = t.$children) || void 0 === e || null === (n = e[0]) || void 0 === n || null === (o = n.tick) || void 0 === o || o.call(n, v), null === (r = this.$refs.header) || void 0 === r || r.tick(v, this.pageHeight), null === (c = this.$refs.gradient) || void 0 === c || c.tick(v), null === (h = this.$refs.mouse) || void 0 === h || h.tick(v), null === (d = this.$refs.mainNav) || void 0 === d || d.tick(v), null === (m = this.$refs.canvas) || void 0 === m || m.tick(v), null === (f = this.$refs.prefooter) || void 0 === f || f.tick(v), this.$route.name, "index___".concat(this.$root.$i18n.locale)
                    },
                    onMounted: function() {
                        var t, e = this;
                        /iPad|iPhone|iPod/.test(navigator.userAgent) && window.document.addEventListener("touchmove", (function(t) {
                            1 !== t.scale && t.preventDefault()
                        }), {
                            passive: !1
                        }), null === (t = this.$refs.canvas) || void 0 === t || t.changePage(this.$route.name), this.$nextTick((function() {
                            var t, n, o, r, l;
                            null === (t = e.$refs.mouse) || void 0 === t || t.addListeners(), null === (n = e.$refs.page.$children) || void 0 === n || null === (o = n[0]) || void 0 === o || null === (r = o.show) || void 0 === r || r.call(o), null === (l = e.$refs.editionPage) || void 0 === l || l.show(), e.resize(), setTimeout(e.resize.bind(e), 700)
                        }))
                    },
                    resize: function() {
                        var t, e, n, o, r, l, c, h, d, m, f, w, x = v.height(),
                            y = v.width();
                        null === (t = this.$refs.page) || void 0 === t || null === (e = t.$children) || void 0 === e || null === (n = e[0]) || void 0 === n || null === (o = n.resize) || void 0 === o || o.call(n, y, x), null === (r = this.$refs.editionPage) || void 0 === r || null === (l = r.resize) || void 0 === l || l.call(r, y, x), null === (c = this.$refs.prefooter) || void 0 === c || null === (h = c.resize) || void 0 === h || h.call(c, y, x), this.isTouch && (y <= 768 ? document.documentElement.style.setProperty("--nav-height", x - y / 375 * 70 + "px") : document.documentElement.style.setProperty("--nav-height", x - y / 768 * 82 + "px")), null === (d = this.$refs.header) || void 0 === d || d.resize(y, x), null === (m = this.$refs.canvas) || void 0 === m || m.resize(y, x), this.pageHeight = this.routerouteName === "edition-slug___".concat(this.$root.$i18n.locale) ? null === (f = this.$refs.editionPage) || void 0 === f ? void 0 : f.$el.scrollHeight : this.$el.getBoundingClientRect().height, null === (w = this.$refs.mainNav) || void 0 === w || w.resize(y, x, this.pageHeight)
                    }
                })
            },
            ut = (n(469), Object(lt.a)(pt, (function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("main", {
                    class: [{
                        isNavOpen: t.isNavOpen,
                        showBanner: t.showBanner,
                        isTouch: t.isTouch,
                        "no-touch": !t.isTouch
                    }, t.$route.name]
                }, [n("scene-canvas", {
                    ref: "canvas"
                }), t._v(" "), t.isLoaderAnimationDone ? t._e() : n("common-loader"), t._v(" "), n("common-nav", {
                    ref: "mainNav"
                }), t._v(" "), n("common-nav-bg", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isTouch && t.isNavOpen,
                        expression: "!isTouch && isNavOpen"
                    }]
                }), t._v(" "), n("gradient-manager", {
                    ref: "gradient"
                }), t._v(" "), n("common-header", {
                    ref: "header"
                }), t._v(" "), n("client-only", [t.isSeamlessTransition ? n("common-transition") : t._e()], 1), t._v(" "), n("div", {
                    staticClass: "site"
                }, [n("div", {
                    staticClass: "site-container"
                }, [t.routeName === "edition-slug___" + this.$i18n.locale ? n("edition-page", {
                    ref: "editionPage"
                }) : t._e(), t._v(" "), n("nuxt", {
                    key: t.$route.fullPath,
                    ref: "page",
                    style: {
                        display: t.routeName === "edition-slug___" + this.$i18n.locale ? "none" : "block"
                    }
                })], 1), t._v(" "), n("common-pre-footer", {
                    ref: "prefooter"
                }), t._v(" "), n("common-footer")], 1), t._v(" "), n("client-only", [t.isTouch ? t._e() : n("common-mouse", {
                    key: this.$i18n.locale + "-common-mouse",
                    ref: "mouse"
                })], 1)], 1)
            }), [], !1, null, null, null));
        e.a = ut.exports;
        installComponents(ut, {
            CommonLoader: n(183).default,
            CommonNav: n(179).default,
            CommonNavBg: n(184).default,
            GradientManager: n(185).default,
            CommonHeader: n(186).default,
            CommonTransition: n(187).default,
            EditionPage: n(188).default,
            CommonPreFooter: n(181).default,
            CommonFooter: n(180).default,
            CommonMouse: n(182).default
        })
    }, , function(t, e, n) {
        "use strict";
        n(10), n(23), n(30), n(143), n(195)
    }, function(t, e, n) {
        n(328), t.exports = n(329)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        var content = n(358);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [t.i, content, ""]
        ]), content.locals && (t.exports = content.locals);
        (0, n(19).default)("3133b3f4", content, !0, {
            sourceMap: !1
        })
    }, function(t, e, n) {
        var o = n(18),
            r = n(359),
            l = n(360),
            c = n(361),
            h = n(362),
            d = n(363),
            m = n(364),
            f = n(365),
            v = n(366),
            w = n(367),
            x = o(!1),
            y = r(l),
            O = r(c),
            k = r(h),
            C = r(d),
            j = r(m),
            _ = r(f),
            P = r(v),
            z = r(w);
        x.push([t.i, 'body,html{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:100%;min-height:100%;position:relative;width:100%}body,button,html{margin:0;padding:0}button{-moz-osx-font-smoothing:inherit;-webkit-appearance:none;-webkit-font-smoothing:inherit;background:transparent;border:none;color:inherit;cursor:pointer;font:inherit;line-height:normal;outline:0;overflow:visible;text-align:center;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal;width:auto}button:disabled{opacity:.5;pointer-events:none}figure{margin:0}a{color:inherit;text-decoration:none}li,ol,ul{list-style:none;margin:0;padding:0}h1,h2,h3,h4,h5,h6,p{margin:0}*{box-sizing:border-box}img,video{display:block;height:auto;width:100%}@font-face{font-family:"Lineto Circular";src:local("Lineto Circular"),local("LinetoCircular-Bold"),url(' + y + ') format("woff2"),url(' + O + ') format("woff");font-weight:600;font-style:normal;font-display:swap}@font-face{font-family:"Lineto Circular";src:local("Lineto Circular Book"),local("LinetoCircular-Book"),url(' + k + ') format("woff2"),url(' + C + ') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Lineto Circular";src:local("Lineto Circular Medium"),local("LinetoCircular-Medium"),url(' + j + ') format("woff2"),url(' + _ + ') format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Lineto Circular";src:local("Lineto Circular Black"),local("LinetoCircular-Black"),url(' + P + ') format("woff2"),url(' + z + ') format("woff");font-weight:900;font-style:normal;font-display:swap}html{-moz-osx-font-smoothing:grayscale;-ms-text-size-adjust:100%;-webkit-font-smoothing:antialiased;-webkit-text-size-adjust:100%;font-family:"Lineto Circular",Helvetica,sans;font-size:20px;font-weight:400;letter-spacing:-.008em;line-height:1.2}@media(min-width:768px){html{font-size:20px}}@media(min-width:1025px){html{font-size:20px}}@media(min-width:1280px){html{font-size:20px}}@media(min-width:1440px){html{font-size:20px}}@media(min-width:1680px){html{font-size:1.1904761905vw}}.bold{font-weight:600}.book{font-weight:400}h1.h1-home{font-size:38px;font-weight:900;line-height:1.1;letter-spacing:-.038em;text-transform:uppercase}h1.h1-home .line+.line{margin-top:-4px}@media(min-width:768px){h1.h1-home{font-size:64px}h1.h1-home .line+.line{margin-top:-6px}}@media(min-width:1025px){h1.h1-home{font-size:90px;margin-top:-3px}h1.h1-home .line+.line{margin-top:-9px}}@media(min-width:1280px){h1.h1-home{font-size:96px;margin-top:-4px}h1.h1-home .line+.line{margin-top:-12px}}@media(min-width:1440px){h1.h1-home{font-size:124px;margin-top:-8px}h1.h1-home .line+.line{margin-top:-20px}}@media(min-width:1680px){h1.h1-home{font-size:7.8571428571vw;margin-top:-.5357142857vw}h1.h1-home .line+.line{margin-top:-1.1904761905vw}}.h1,h1{font-size:36px;font-weight:900;letter-spacing:-.078em;line-height:1;text-transform:uppercase}@media(min-width:768px){.h1,h1{font-size:108px}}@media(min-width:1025px){.h1,h1{font-size:120px}}@media(min-width:1280px){.h1,h1{font-size:144px}}@media(min-width:1440px){.h1,h1{font-size:160px}}@media(min-width:1680px){.h1,h1{font-size:10.9523809524vw}}.h2,h2{font-size:44px;font-style:normal;font-weight:900;line-height:50px;letter-spacing:-.04em;text-transform:uppercase}@media(min-width:768px){.h2,h2{letter-spacing:-.05em;font-size:90px;line-height:144px}}@media(min-width:1025px){.h2,h2{font-size:90px;line-height:144px}}@media(min-width:1280px){.h2,h2{font-size:90px;line-height:144px}}@media(min-width:1440px){.h2,h2{font-size:90px;line-height:144px}}@media(min-width:1680px){.h2,h2{font-size:6.6666666667vw;line-height:8.5714285714vw}}.h3,h3{font-size:20px;font-style:normal;font-weight:900;line-height:21px;letter-spacing:-.03em}@media(min-width:768px){.h3,h3{letter-spacing:-.019em;font-size:29px;line-height:31.6px}}@media(min-width:1025px){.h3,h3{letter-spacing:-.04em;font-size:40px;line-height:40px}}@media(min-width:1280px){.h3,h3{font-size:45px;line-height:46px}}@media(min-width:1440px){.h3,h3{font-size:51px;line-height:49px}}@media(min-width:1680px){.h3,h3{font-size:3.4523809524vw;line-height:3.2142857143vw}}.h4,h4{font-size:18px;font-style:normal;font-weight:600;line-height:20px;letter-spacing:-.018em}@media(min-width:768px){.h4,h4{font-size:24px;line-height:34px}}@media(min-width:1025px){.h4,h4{font-size:24px;line-height:34px}}@media(min-width:1280px){.h4,h4{font-size:24px;line-height:34px}}@media(min-width:1440px){.h4,h4{font-size:24px;line-height:34px}}@media(min-width:1680px){.h4,h4{font-size:1.4285714286vw;line-height:2.0238095238vw}}.h5,h5{text-transform:uppercase;font-weight:900;font-size:15px;line-height:17px;letter-spacing:-.018em}@media(min-width:768px){.h5,h5{font-size:19px;line-height:20px}}@media(min-width:1025px){.h5,h5{font-size:19px;line-height:20px}}@media(min-width:1280px){.h5,h5{font-size:19px;line-height:20px}}@media(min-width:1440px){.h5,h5{font-size:19px;line-height:20px}}@media(min-width:1680px){.h5,h5{font-size:1.130952381vw;line-height:1.1904761905vw}}.card-number{font-weight:900;font-size:40px;line-height:1;letter-spacing:-.019em}@media(min-width:768px){.card-number{font-size:46px}}@media(min-width:1025px){.card-number{font-size:46px}}@media(min-width:1280px){.card-number{font-size:46px}}@media(min-width:1440px){.card-number{font-size:46px}}@media(min-width:1680px){.card-number{font-size:2.7380952381vw}}.home-footer{font-weight:900;font-size:36px;line-height:36px;line-height:1;letter-spacing:-.02em}@media(min-width:768px){.home-footer{font-size:48px;line-height:48px;letter-spacing:-.04em}}@media(min-width:1025px){.home-footer{font-size:56px;line-height:56px}}@media(min-width:1280px){.home-footer{font-size:64px;line-height:64px}}@media(min-width:1440px){.home-footer{font-size:80px;line-height:80px}}@media(min-width:1680px){.home-footer{font-size:5.7142857143vw;line-height:5.3571428571vw}}.body-header{font-size:18px;font-weight:400;line-height:23px;letter-spacing:-.019em}@media(min-width:768px){.body-header{font-size:26px;line-height:1.2}}@media(min-width:1025px){.body-header{font-size:21px}}@media(min-width:1280px){.body-header{font-size:21px}}@media(min-width:1440px){.body-header{font-size:21px}}@media(min-width:1680px){.body-header{font-size:1.5476190476vw}}.body-1{font-size:18px;font-weight:500;line-height:23.5px;letter-spacing:-.007em}@media(min-width:768px){.body-1{font-weight:600;font-size:24px;line-height:1.2;letter-spacing:-.018em}}@media(min-width:1025px){.body-1{font-size:24px}}@media(min-width:1280px){.body-1{letter-spacing:-.019em;font-size:32px}}@media(min-width:1440px){.body-1{font-size:32px}}@media(min-width:1680px){.body-1{font-size:1.9047619048vw}}.body-2{font-size:18px;font-weight:400;line-height:23px;letter-spacing:-.019em}@media(min-width:768px){.body-2{font-size:18px;line-height:23px}}@media(min-width:1025px){.body-2{font-size:32px;line-height:34.6px}}@media(min-width:1280px){.body-2{font-size:32px;line-height:34.6px}}@media(min-width:1440px){.body-2{font-size:32px;line-height:34.6px}}@media(min-width:1680px){.body-2{font-size:1.9047619048vw;line-height:2.0595238095vw}}.body-3{font-size:24px;font-weight:500;line-height:26.6px;margin-bottom:8px;letter-spacing:-.019em}@media(min-width:768px){.body-3{font-size:24px;line-height:26.6px}}@media(min-width:1025px){.body-3{font-size:20px;line-height:22px}}@media(min-width:1280px){.body-3{font-size:24px;line-height:24.6px;margin-top:1px}}@media(min-width:1440px){.body-3{font-size:32px;line-height:34.6px;margin-top:-2px}}@media(min-width:1680px){.body-3{font-size:1.9047619048vw;line-height:2.0595238095vw;margin-top:-.119047619vw}}.body-4{font-size:20px;font-weight:400;line-height:30px;letter-spacing:-.008em}@media(min-width:768px){.body-4{font-size:18px;line-height:28px;margin-top:-2px}}@media(min-width:1025px){.body-4{font-size:18px;line-height:28px;margin-top:-2px}}@media(min-width:1280px){.body-4{font-size:20px;line-height:30px;margin-top:-3px}}@media(min-width:1440px){.body-4{font-size:20px;line-height:30px;margin-top:-3px}}@media(min-width:1680px){.body-4{font-size:1.1904761905vw;line-height:1.7857142857vw;margin-top:-.119047619vw}}.body-5{font-size:16px;font-weight:600;line-height:18px;letter-spacing:-.007em}@media(min-width:768px){.body-5{font-size:16px;line-height:18.6px}}@media(min-width:1025px){.body-5{font-size:16px;line-height:18.6px}}@media(min-width:1280px){.body-5{font-size:16px;line-height:18.6px}}@media(min-width:1440px){.body-5{font-size:16px;line-height:18.6px}}@media(min-width:1680px){.body-5{font-size:.9523809524vw;line-height:1.1071428571vw}}.nutrient-list,.nutrient-list-medium{font-size:16px;line-height:18px;letter-spacing:-.007em}@media(min-width:768px){.nutrient-list,.nutrient-list-medium{font-size:18px;line-height:18.6px}}@media(min-width:1025px){.nutrient-list,.nutrient-list-medium{font-size:18px;line-height:18.6px}}@media(min-width:1280px){.nutrient-list,.nutrient-list-medium{font-size:18px;line-height:18.6px}}@media(min-width:1440px){.nutrient-list,.nutrient-list-medium{font-size:18px;line-height:18.6px}}@media(min-width:1680px){.nutrient-list,.nutrient-list-medium{font-size:1.0714285714vw;line-height:1.1071428571vw}}.nutrient-list{font-weight:400}.nutrient-list-medium{font-weight:500}.nutrient-legend-data{font-size:10px;font-weight:600;line-height:14.4px;letter-spacing:-.024em}@media(min-width:768px){.nutrient-legend-data{letter-spacing:-.007em;font-size:18px;line-height:18.6px}}@media(min-width:1025px){.nutrient-legend-data{font-size:18px;line-height:18.6px}}@media(min-width:1280px){.nutrient-legend-data{font-size:18px;line-height:18.6px}}@media(min-width:1440px){.nutrient-legend-data{font-size:18px;line-height:18.6px}}@media(min-width:1680px){.nutrient-legend-data{font-size:1.0714285714vw;line-height:1.1071428571vw}}.nutrient-list-number{font-weight:400;letter-spacing:-.006em;text-transform:uppercase}.nutrient-list-column{font-weight:900;letter-spacing:-.024em;text-transform:uppercase}.nutrient-list-column,.nutrient-list-number{font-size:12px;line-height:14.4px;text-transform:uppercase}@media(min-width:768px){.nutrient-list-column,.nutrient-list-number{font-size:14px;line-height:14.4px}}@media(min-width:1025px){.nutrient-list-column,.nutrient-list-number{font-size:14px;line-height:14.4px}}@media(min-width:1280px){.nutrient-list-column,.nutrient-list-number{font-size:14px;line-height:14.4px}}@media(min-width:1440px){.nutrient-list-column,.nutrient-list-number{font-size:14px;line-height:14.4px}}@media(min-width:1680px){.nutrient-list-column,.nutrient-list-number{font-size:.8333333333vw;line-height:.8571428571vw}}.nutrient-list-dropdown{font-weight:400;font-size:16px;line-height:30px;letter-spacing:-.008em}@media(min-width:768px){.nutrient-list-dropdown{font-size:20px;line-height:30px}}@media(min-width:1025px){.nutrient-list-dropdown{font-size:20px;line-height:30px}}@media(min-width:1280px){.nutrient-list-dropdown{font-size:20px;line-height:30px}}@media(min-width:1440px){.nutrient-list-dropdown{font-size:20px;line-height:30px}}@media(min-width:1680px){.nutrient-list-dropdown{font-size:1.1904761905vw;line-height:1.7857142857vw}}.nutrient-legend{font-weight:400;font-size:12px;line-height:18px;letter-spacing:-.006em}@media(min-width:768px){.nutrient-legend{font-size:12px;line-height:18px}}@media(min-width:1025px){.nutrient-legend{font-size:12px;line-height:18px}}@media(min-width:1280px){.nutrient-legend{font-size:12px;line-height:18px}}@media(min-width:1440px){.nutrient-legend{font-size:12px;line-height:18px}}@media(min-width:1680px){.nutrient-legend{font-size:.7142857143vw;line-height:1.0714285714vw}}.callout,small{font-weight:500;font-size:10px;line-height:14.4px;letter-spacing:-.024em;text-transform:uppercase}@media(min-width:768px){.callout,small{font-size:10px;line-height:14.4px}}@media(min-width:1025px){.callout,small{font-size:10px;line-height:14.4px}}@media(min-width:1280px){.callout,small{font-size:10px;line-height:14.4px}}@media(min-width:1440px){.callout,small{font-size:10px;line-height:14.4px}}@media(min-width:1680px){.callout,small{font-size:.5952380952vw;line-height:.8571428571vw}}.tag{font-weight:600;font-size:10px;line-height:14.4px;letter-spacing:-.006em}@media(min-width:768px){.tag{font-size:10px;line-height:14.4px}}@media(min-width:1025px){.tag{font-size:10px;line-height:14.4px}}@media(min-width:1280px){.tag{font-size:12px;line-height:14.4px}}@media(min-width:1440px){.tag{font-size:12px;line-height:14.4px}}@media(min-width:1680px){.tag{font-size:.7142857143vw;line-height:.8571428571vw}}.side-nav-link{font-weight:600;font-size:10px;line-height:18.6px;letter-spacing:-.027em;text-transform:uppercase}@media(min-width:768px){.side-nav-link{font-size:10px;line-height:18.6px}}@media(min-width:1025px){.side-nav-link{font-size:10px;line-height:18.6px}}@media(min-width:1280px){.side-nav-link{font-size:12px;line-height:18.6px}}@media(min-width:1440px){.side-nav-link{font-size:12px;line-height:18.6px}}@media(min-width:1680px){.side-nav-link{font-size:.7142857143vw;line-height:1.1071428571vw}}.button{font-weight:600;font-size:14px;line-height:14.4px;letter-spacing:-.006em;text-transform:uppercase}@media(min-width:768px){.button{font-size:14px;line-height:14.4px}}@media(min-width:1025px){.button{font-size:14px;line-height:14.4px}}@media(min-width:1280px){.button{font-size:14px;line-height:14.4px}}@media(min-width:1440px){.button{font-size:14px;line-height:14.4px}}@media(min-width:1680px){.button{font-size:.8333333333vw;line-height:.8571428571vw}}.link-typo{font-weight:600;font-size:12px;line-height:18.6px;letter-spacing:-.007em}@media(min-width:768px){.link-typo{font-size:16px;line-height:18.6px}}@media(min-width:1025px){.link-typo{font-size:16px;line-height:18.6px}}@media(min-width:1280px){.link-typo{font-size:16px;line-height:18.6px}}@media(min-width:1440px){.link-typo{font-size:16px;line-height:18.6px}}@media(min-width:1680px){.link-typo{font-size:.9523809524vw;line-height:1.1071428571vw}}.close-popin-typo{font-weight:600;font-size:12px;line-height:14.4px;letter-spacing:-.026em}p+p{margin-top:1em}.link-arrow{text-transform:uppercase;transition:color .3s;display:flex;align-items:center}.link-arrow .arrow{align-items:center;border-radius:50%;display:inline-flex;height:30px;justify-content:center;margin-left:10px;overflow:hidden;position:relative;width:30px}.link-arrow .arrow:before{background:currentColor;border-radius:50%;transition:transform .3s cubic-bezier(.25,.46,.45,.94),opacity .3s cubic-bezier(.25,.46,.45,.94)}.link-arrow .arrow:after,.link-arrow .arrow:before{content:"";display:block;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}.link-arrow .arrow:after{border:1px solid;border-radius:50%}.link-arrow .arrow svg{fill:#3d293d}.link-arrow .arrow svg,.link-arrow .dark-arrow svg{position:relative;display:block;width:15px;z-index:1}.link-arrow .dark-arrow svg{fill:#fff}.link-arrow:hover{color:#fff}.link-arrow:hover svg{fill:#fff;-webkit-animation-name:arrowAnimation;animation-name:arrowAnimation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:.6s;animation-duration:.6s}.link-arrow:hover .arrow{color:#fff}.link-arrow:hover .arrow:before{opacity:0;transform:translate(-50%,-50%) scale(.2)}@-webkit-keyframes arrowAnimation{0%{transform:translateX(0)}50%{transform:translateX(100%)}50.0001%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes arrowAnimation{0%{transform:translateX(0)}50%{transform:translateX(100%)}50.0001%{transform:translateX(-100%)}to{transform:translateX(0)}}@media(min-width:768px){.link-arrow .arrow{height:30px;margin-left:10px;width:30px}.link-arrow .arrow svg{width:15px}}@media(min-width:1025px){.link-arrow .arrow{height:30px;margin-left:10px;width:30px}.link-arrow .arrow svg{width:15px}}@media(min-width:1280px){.link-arrow .arrow{height:30px;margin-left:10px;width:30px}.link-arrow .arrow svg{width:15px}}@media(min-width:1440px){.link-arrow .arrow{height:30px;margin-left:10px;width:30px}.link-arrow .arrow svg{width:15px}}@media(min-width:1680px){.link-arrow .arrow{height:1.7857142857vw;margin-left:.5952380952vw;width:1.7857142857vw}.link-arrow .arrow svg{width:.8928571429vw}}.bg{position:absolute;top:0;left:0;height:100vh}.bg,.c{width:100%}.c{height:100%;margin:0 auto;padding:0 20px;position:relative}@media(min-width:768px){.c{padding:0 40px}}@media(min-width:1025px){.c{padding:0 60px}}@media(min-width:1280px){.c{padding:0 60px}}@media(min-width:1440px){.c{padding:0 60px}}@media(min-width:1680px){.c{padding:0 3.5714285714vw}}.link{border-radius:50%;cursor:pointer;display:inline-block;font-style:normal;font-weight:400;height:18px;margin-left:10px;letter-spacing:0;line-height:1.4;position:relative;transition:opacity 2s cubic-bezier(.25,.46,.45,.94);width:18px;z-index:1}.link svg{display:block;stroke:currentColor;position:absolute;top:50%;left:50%;pointer-events:none;transform:translate(-50%,-50%);width:100%}.link .toolkit{position:absolute;left:25px;top:-1px;opacity:0}.link .toolkit small{border-radius:17px;font-size:8px;padding:1px 10px 2px;display:block;border:1px solid #fff;color:#fff}.link.copied .toolkit{opacity:1}@media(min-width:768px){.link{height:25px;width:25px}.link .toolkit{left:50px}.link .toolkit .toolkit-inner{padding:10px}}@media(min-width:1025px){.link{background:#3d293d;height:32px;width:32px;margin-left:0}.link svg{width:42%}.link .toolkit{display:none}}@media(min-width:1280px){.link{height:34px;width:34px}}@media(min-width:1440px){.link{height:42px;width:42px}}@media(min-width:1680px){.link{height:2.6785714286vw;width:2.6785714286vw}}.fig{display:flex;justify-content:space-between;align-items:flex-start}.fig small{display:block}.fig .number{line-height:.75}.background-manager,.button-data-container,.button-data-mobile,.button-data-mobile.isReady,.gradient-manager,.home-page,.insight-page .insight-content,.main-header,.main-header.isShown,.main-header.isShown.showBanner,.popin-container,canvas{transition:transform .7s cubic-bezier(.645,.045,.355,1),padding-top .7s cubic-bezier(.645,.045,.355,1);transform:none}.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transition:transform 1s cubic-bezier(.215,.61,.355,1);transform:translateY(75vh);transform:translateY(var(--nav-height))}@media(min-width:768px){.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transform:translateY(75vh);transform:translateY(var(--nav-height))}}@media(min-width:1025px){.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transform:translateY(630px)}}@media(min-width:1280px){.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transform:translateY(630px)}}@media(min-width:1440px){.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transform:translateY(630px)}}@media(min-width:1680px){.isNavOpen .background-manager,.isNavOpen .button-data-container,.isNavOpen .button-data-mobile,.isNavOpen .button-data-mobile.isReady,.isNavOpen .gradient-manager,.isNavOpen .home-page,.isNavOpen .insight-page .insight-content,.isNavOpen .main-header,.isNavOpen .main-header.isShown,.isNavOpen .main-header.isShown.showBanner,.isNavOpen .popin-container,.isNavOpen canvas{transform:translateY(37.5vw)}}.isNavOpen .popin{pointer-events:none}.insight-nav{transform:translateY(-101%)}.insight-nav,.insight-nav .insight-nav-container{transition:transform .7s cubic-bezier(.645,.045,.355,1)}.insight-nav .insight-nav-container{transform:translateY(50%)}.isNavOpen .insight-nav,.isNavOpen .insight-nav .insight-nav-container{transition:transform 1s cubic-bezier(.215,.61,.355,1);transform:translateY(0)}.mobile-view-data{width:70px;height:70px;display:flex;position:absolute;right:20px;align-items:center;justify-content:center;opacity:0;transform:translateY(-150%);transition:opacity .5s cubic-bezier(.25,.46,.45,.94)}.mobile-view-data .inner{transform:translateY(100%);transition:transform .5s cubic-bezier(.25,.46,.45,.94) .5s}.mobile-view-data .svg-container{display:block;position:absolute;transition:transform .5s cubic-bezier(.25,.46,.45,.94);top:50%;left:50%;height:50%;height:100%;width:100%;transform:translate(-50%,-50%) scale(.5)}.mobile-view-data .svg-container svg{display:block;width:100%;height:100%;fill:none;stroke-dasharray:3;stroke-dashoffset:1.5}.mobile-view-data small{display:block;color:#fff;font-size:8px;font-weight:700;text-transform:uppercase}.mobile-view-data.isReady{opacity:1}.mobile-view-data.isReady .svg-container{transform:translate(-50%,-50%) scale(1)}.mobile-view-data.isReady .svg-container svg{-webkit-animation-name:rotate;animation-name:rotate;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.mobile-view-data.isReady .inner{transform:translateY(0)}@media(min-width:768px){.mobile-view-data{right:40px}}@media(min-width:1025px){.mobile-view-data{right:60px}}@-webkit-keyframes rotate{0%{transform:rotate(0turn)}to{transform:rotate(1turn)}}@keyframes rotate{0%{transform:rotate(0turn)}to{transform:rotate(1turn)}}.popin .popin-background{display:flex;flex-direction:column;position:absolute;top:0;left:0;width:100%;height:100%}.popin .popin-background .row{flex-shrink:0;transform-origin:0 50%;width:100%;position:relative;flex:1}.popin .popin-background .row:before{background:currentColor;content:"";display:block;height:101%;position:absolute;width:100%}.popin .color-legend{display:flex;justify-content:flex-end;position:relative;margin-bottom:24px}.popin .color-legend .inner{justify-content:space-between;white-space:no-wrap}.popin .color-legend .inner,.popin .color-legend .inner span{display:flex;align-items:center}.popin .color-legend li+li{margin-top:10px}.popin .color-legend li svg{display:block;width:7px;margin-right:10px}.popin .color-legend span+span{margin-left:30px}@media(min-width:768px){.popin .color-legend{margin-bottom:40px}.popin .color-legend li svg{margin-right:10px;width:7px}.popin .color-legend li+li{margin-top:10px}}@media(min-width:1025px){.popin .color-legend{margin-bottom:40px}.popin .color-legend .nutrient-list-number{margin-left:30px}.popin .color-legend li svg{width:7px;margin-right:10px}.popin .color-legend li+li{margin-top:10px}}@media(min-width:1280px){.popin .color-legend{margin-bottom:40px}.popin .color-legend .nutrient-list-number{margin-left:30px}.popin .color-legend li svg{width:7px;margin-right:10px}.popin .color-legend li+li{margin-top:10px}}@media(min-width:1440px){.popin .color-legend{margin-bottom:40px}.popin .color-legend .nutrient-list-number{margin-left:30px}.popin .color-legend li svg{width:7px;margin-right:10px}.popin .color-legend li+li{margin-top:10px}}@media(min-width:1680px){.popin .color-legend{margin-bottom:2.380952381vw}.popin .color-legend .nutrient-list-number{margin-left:1.7857142857vw}.popin .color-legend li svg{width:.4166666667vw;margin-right:.5952380952vw}.popin .color-legend li+li{margin-top:.5952380952vw}}.popin .legend{display:flex;justify-content:flex-end;color:#3d293d;text-align:right;padding-top:40px}@media(min-width:768px){.popin .legend{padding-top:40px}}@media(min-width:1025px){.popin .legend{padding-top:40px}}@media(min-width:1280px){.popin .legend{padding-top:0;margin-top:40px}}@media(min-width:1440px){.popin .legend{margin-top:40px}}@media(min-width:1680px){.popin .legend{margin-top:2.380952381vw}}.nav-icon{width:50px;height:50px;padding:14px 16px;display:flex;overflow:hidden;justify-content:center;position:relative;transform:rotate(270deg)}.nav-icon span{background:currentColor;display:block;height:100%;width:3px;transform-origin:50% 100%}.nav-icon span+span{margin-left:2px}.nav-icon span:first-child{-webkit-animation-delay:.05s;animation-delay:.05s}.nav-icon:hover span{-webkit-animation-name:example;animation-name:example;-webkit-animation-timing-function:cubic-bezier(.455,.03,.515,.955);animation-timing-function:cubic-bezier(.455,.03,.515,.955);-webkit-animation-duration:.5s;animation-duration:.5s}.isNavOpen .nav-icon span{transform:scaleY(.2)}.isNavOpen .nav-icon:hover span{-webkit-animation-name:example1;animation-name:example1}@media(min-width:768px){.nav-icon{width:51px;height:50px;padding:14px 12px}.nav-icon span{width:3px}.nav-icon span+span{margin-left:4px}}@-webkit-keyframes example{0%{transform:scaleY(1)}40%{transform:scaleY(.1)}to{transform:scaleY(1)}}@keyframes example{0%{transform:scaleY(1)}40%{transform:scaleY(.1)}to{transform:scaleY(1)}}@-webkit-keyframes example1{0%{transform:scaleY(.2)}40%{transform:scaleY(1)}to{transform:scaleY(.2)}}@keyframes example1{0%{transform:scaleY(.2)}40%{transform:scaleY(1)}to{transform:scaleY(.2)}}.tag{color:#3d293d;display:inline-block;text-transform:uppercase;padding:8px}@media(min-width:768px){.tag{padding:8px}}@media(min-width:1025px){.tag{padding:8px}}@media(min-width:1280px){.tag{padding:8px}}@media(min-width:1440px){.tag{padding:8px}}@media(min-width:1680px){.tag{padding:.4761904762vw}}@media(max-width:767px){.show-above-small{display:none!important}}@media(max-width:1024px){.show-above-m{display:none!important}}@media(max-width:1279px){.show-above-l{display:none!important}}@media(max-width:1439px){.show-above-xl{display:none!important}}@media(min-width:1025px){.show-below-m{display:none!important}}@media(min-width:1280px){.show-below-l{display:none!important}}.w-160{width:160px}.w-160,.w-350{flex-shrink:0;position:relative}.w-350{width:350px}.w-560{flex-shrink:0;position:relative;width:560px;max-width:90vw}@media(min-width:768px){.w-160{width:160px}.w-350{width:350px}.w-560{width:190px}}@media(min-width:1025px){.w-160{width:90px}.w-350{width:350px}.w-560{width:320px}}@media(min-width:1280px){.w-160{width:120px}.w-350{width:350px}.w-560{width:480px}}@media(min-width:1440px){.w-160{width:120px}.w-350{width:350px}.w-560{width:480px}}@media(min-width:1680px){.w-160{width:9.5238095238vw}.w-350{width:20.8333333333vw}.w-560{width:33.3333333333vw}}html{background:#3d293d;color:#3d293d}body{height:100%;overflow:hidden}:root{--nav-height:75vh}*,:after,:before{box-sizing:border-box;margin:0}.no-scroll{overflow:hidden!important}.stroke{background:currentColor;display:block;height:1px;left:0;position:absolute;top:0;transform-origin:0 0;width:100%}.stroke.stroke-bottom{top:auto;bottom:-1px}.line{position:relative;overflow:hidden}.line,.line .inner{display:block}.flex{display:flex}#__nuxt{height:100%;overflow:hidden;position:relative;width:100%}#__nuxt #__layout{height:100%;width:100%;overflow-y:scroll}@media(min-width:1025px){#__nuxt{height:auto;width:auto;overflow:visible;overflow:initial}#__nuxt #__layout{height:auto;width:100%;overflow-y:visible;overflow-y:initial}}', ""]), t.exports = x
    }, , function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-bold.df1b604.woff2"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-bold.58c1ae7.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-book.5077fe2.woff2"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-book.0ca8ee0.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-medium.d1974f3.woff2"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-pro-medium.ba85c40.woff"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-black.c984000.woff2"
    }, function(t, e, n) {
        t.exports = n.p + "fonts/lineto-circular-black.fab790b.woff"
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e) {}, , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n(249)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".scene-canvas{height:100%;left:0;pointer-events:none;position:fixed;top:0;width:100%}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(250)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, "main{position:relative;width:100%;-webkit-tap-highlight-color:rgba(0,0,0,0)}main .site,main .site-container{min-height:150vh;position:relative}", ""]), t.exports = o
    }, , function(t, e, n) {
        "use strict";
        n(251)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".loader{color:#fc483a;position:fixed;z-index:20}.loader,.loader .loader-bg{height:100%;left:0;top:0;width:100%}.loader .loader-bg{background:linear-gradient(#343d53,#3d293d);position:absolute}.loader .line{overflow:hidden}.loader .loader-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:160px;z-index:1}.loader svg{display:block;width:100%}.loader .study{position:relative;overflow:hidden}.loader .fan-study{fill:#fc483a;opacity:0;transition:opacity 1s cubic-bezier(.215,.61,.355,1)}.loader .gradients{overflow:hidden;margin-top:5px}.loader .gradients path{transform:translate(-100%);transition:transform 1s cubic-bezier(.645,.045,.355,1)}.loader .gradients path:nth-child(2){transition:transform 1s cubic-bezier(.55,.055,.675,.19)}.loader .gradients path:nth-child(3){transition:transform .8s cubic-bezier(.25,.46,.45,.94)}.loader .gradients path:nth-child(4){transition:transform 1s cubic-bezier(.785,.135,.15,.86)}.loader .gradients path:nth-child(5){transition:transform .8s cubic-bezier(.55,.085,.68,.53)}.loader .gradients path:nth-child(6){transition:transform 1s cubic-bezier(.25,.46,.45,.94)}.loader .logo{fill:#fc483a;margin-top:10px;width:120px;transform:translate(-50%);opacity:0;transition:transform 1s cubic-bezier(.215,.61,.355,1) .7s,opacity 1s cubic-bezier(.215,.61,.355,1) .7s}.loader .animate .fan-study{opacity:1}.loader .animate .gradients path{transform:translate(0)}.loader .animate .logo{opacity:1;transform:translate(0)}.loader .animate.hide .fan-study{opacity:0;transform:translateY(100%);transition:transform .7s cubic-bezier(.215,.61,.355,1),opacity .7s cubic-bezier(.215,.61,.355,1)}.loader .animate.hide .gradients path{transform:translate(-100%);transition:transform .6s cubic-bezier(.645,.045,.355,1)}.loader .animate.hide .gradients path:nth-child(2){transition:transform .6s cubic-bezier(.55,.055,.675,.19)}.loader .animate.hide .gradients path:nth-child(3){transition:transform .6s cubic-bezier(.25,.46,.45,.94)}.loader .animate.hide .gradients path:nth-child(4){transition:transform .6s cubic-bezier(.785,.135,.15,.86)}.loader .animate.hide .gradients path:nth-child(5){transition:transform .6s cubic-bezier(.55,.085,.68,.53)}.loader .animate.hide .gradients path:nth-child(6){transition:transform .6s cubic-bezier(.25,.46,.45,.94)}.loader .animate.hide .logo{opacity:0;transition:opacity .7s cubic-bezier(.215,.61,.355,1)}@media(min-width:768px){.loader .loader-content{width:160px}.loader .gradients{margin-top:5px}.loader .logo{margin-top:10px;width:120px}}@media(min-width:1025px){.loader .loader-content{width:160px}.loader .gradients{margin-top:5px}.loader .logo{margin-top:10px;width:120px}}@media(min-width:1280px){.loader .loader-content{width:160px}.loader .gradients{margin-top:5px}.loader .logo{margin-top:10px;width:120px}}@media(min-width:1440px){.loader .loader-content{width:160px}.loader .gradients{margin-top:5px}.loader .logo{margin-top:10px;width:120px}}@media(min-width:1680px){.loader .loader-content{width:9.5238095238vw}.loader .gradients{margin-top:.2976190476vw}.loader .logo{margin-top:.5952380952vw;width:7.1428571429vw}}", ""]), t.exports = o
    }, , function(t, e, n) {
        "use strict";
        n(252)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, '.fragments-close-button{display:block;padding:20px;height:60px;width:60px;margin-right:-20px;position:relative;transition:opacity .34s cubic-bezier(.25,.46,.45,.94)}.fragments-close-button span{display:block;height:2px;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%) rotate(-45deg);width:25px}.fragments-close-button span:after{background:currentColor;content:"";display:block;height:100%;width:100%;transform-origin:0 0;transform:scaleX(0)}.fragments-close-button span+span{transform:translate(-50%,-50%) rotate(45deg)}.fragments-close-button.isReady span:after{transform:scaleX(1);transition:transform .7s cubic-bezier(.455,.03,.515,.955)}.fragments-close-button.isReady span+span:after{transition:transform .7s cubic-bezier(.455,.03,.515,.955) .3s}.fragments-close-button.isReady:hover span:after{-webkit-animation-name:growD;animation-name:growD;-webkit-animation-timing-function:cubic-bezier(.455,.03,.515,.955);animation-timing-function:cubic-bezier(.455,.03,.515,.955);-webkit-animation-duration:1s;animation-duration:1s;transform-origin:0 0}.fragments-close-button.isReady:hover span+span:after{-webkit-animation-delay:.2s;animation-delay:.2s}@media(min-width:768px){.fragments-close-button{padding:20px;margin-right:-20px}}@media(min-width:1025px){.fragments-close-button{padding:20px;margin-right:-20px}}@media(min-width:1280px){.fragments-close-button{padding:20px;margin-right:-20px}}@media(min-width:1440px){.fragments-close-button{padding:20px;margin-right:-20px}}@media(min-width:1680px){.fragments-close-button{padding:1.1904761905vw;margin-right:vwXXLw(-20)}}@-webkit-keyframes growD{0%{transform-origin:100% 100%;transform:scaleX(1)}40%{transform-origin:100% 100%;transform:scaleX(0)}40.001%{transform-origin:0 0;transform:scaleX(0)}to{transform-origin:0 0;transform:scaleX(1)}}@keyframes growD{0%{transform-origin:100% 100%;transform:scaleX(1)}40%{transform-origin:100% 100%;transform:scaleX(0)}40.001%{transform-origin:0 0;transform:scaleX(0)}to{transform-origin:0 0;transform:scaleX(1)}}', ""]), t.exports = o
    }, , , , , , function(t, e, n) {
        "use strict";
        n(253)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".nav-item{flex-shrink:0;position:relative;z-index:2;width:220px}.nav-item .isClicked{pointer-events:none}.nav-item .inner{overflow:hidden;position:relative;transition:transform .3s cubic-bezier(.25,.46,.45,.94);will-change:transform}.nav-item:hover .inner{transform:scale3d(1.03,1.03,1.03)}.nav-item.selected{pointer-events:none}.nav-item.selected .inner{opacity:.6}.nav-item+.nav-item{margin-left:30px}.nav-item figure{position:relative;overflow:hidden}.nav-item figure img{display:block;width:100%}.nav-item .nav-item-content{position:absolute;top:0;left:0;padding:15px 18px 18px;display:flex;align-items:flex-start;flex-direction:column;height:100%;width:100%;justify-content:flex-start}.nav-item .nav-item-top{display:flex;width:100%;align-items:center;justify-content:space-between}.nav-item h5{color:currentColor;word-break:break-all;-webkit-hyphens:auto;hyphens:auto;text-align:left;-ms-hyphens:auto;-moz-hyphens:auto;padding-top:80px;font-size:22px;line-height:22px}.nav-item h5.en{font-size:36px;line-height:36px}.nav-item h5.fr-FR{font-size:26px;line-height:26px}.nav-item h5.de-DE,.nav-item h5.it-IT{font-size:22px;line-height:22px}.nav-item h5.ko-KR{font-size:40px;line-height:40px}.nav-item h5.pt-BR{font-size:22px;line-height:22px}.nav-item h5.es-419{font-size:24px;line-height:24px}.nav-item .item-border{border-bottom:1px solid;height:1px;width:calc(100% - 36px);position:absolute;bottom:30px;left:18px}.nav-item .card-number{color:#3d293d;display:block}.nav-item.merch .card-number{color:currentColor}.nav-item .tag{display:inline-block}.nav-item a{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;display:block;font-size:0}@media(min-width:768px){.nav-item{width:295px}.nav-item+.nav-item{margin-left:60px}.nav-item .nav-item-content{padding:15px 25px 35px}.nav-item h5{width:100%;padding-top:100px;font-size:30px;line-height:32px}.nav-item h5.en{font-size:50px;line-height:50px}.nav-item h5.fr-FR{font-size:34px;line-height:34px}.nav-item h5.de-DE,.nav-item h5.it-IT{font-size:28px;line-height:28px}.nav-item h5.ko-KR{font-size:50px;line-height:50px}.nav-item h5.es-419,.nav-item h5.pt-BR{font-size:28px;line-height:28px}.nav-item .item-border{border-bottom:1px solid;height:1px;width:calc(100% - 50px);position:absolute;bottom:30px;left:25px}}@media(min-width:1025px){.nav-item{width:295px}.nav-item+.nav-item{margin-left:60px}.nav-item .nav-item-content{padding:15px 25px 35px}.nav-item h5{padding-top:80px;font-size:30px;line-height:32px}.nav-item h5.en{font-size:50px;line-height:50px}.nav-item h5.de-DE,.nav-item h5.fr-FR{font-size:30px;line-height:30px}.nav-item h5.it-IT{font-size:28px;line-height:28px}.nav-item h5.ko-KR{font-size:50px;line-height:50px}.nav-item h5.es-419,.nav-item h5.pt-BR{font-size:28px;line-height:28px}.nav-item .item-border{border-bottom:1px solid;height:1px;position:absolute;bottom:30px}}@media(min-width:1280px){.nav-item{width:295px}.nav-item+.nav-item{margin-left:60px}.nav-item .nav-item-content{padding:15px 25px 35px}.nav-item h5{padding-top:70px;font-size:30px;line-height:32px}.nav-item h5.en{font-size:50px;line-height:50px}.nav-item h5.fr-FR{font-size:35px;line-height:35px}.nav-item h5.de-DE,.nav-item h5.it-IT{font-size:30px;line-height:30px}.nav-item h5.ko-KR{font-size:50px;line-height:50px}.nav-item h5.es-419,.nav-item h5.pt-BR{font-size:30px;line-height:30px}.nav-item .item-border{border-bottom:1px solid;height:1px;width:calc(100% - 36px);position:absolute;bottom:30px;left:18px}}@media(min-width:1440px){.nav-item{width:295px}.nav-item+.nav-item{margin-left:60px}.nav-item .nav-item-content{padding:15px 25px 35px}.nav-item h5{padding-top:100px;font-size:30px;line-height:32px}.nav-item h5.en{font-size:50px;line-height:50px}.nav-item h5.fr-FR{font-size:35px;line-height:35px}.nav-item h5.de-DE,.nav-item h5.it-IT{font-size:30px;line-height:30px}.nav-item h5.ko-KR{font-size:50px;line-height:50px}.nav-item h5.es-419,.nav-item h5.pt-BR{font-size:30px;line-height:30px}.nav-item .item-border{border-bottom:1px solid;height:1px;width:calc(100% - 36px);position:absolute;bottom:30px;left:18px}}@media(min-width:1680px){.nav-item{width:17.5595238095vw}.nav-item+.nav-item{margin-left:3.5714285714vw}.nav-item .nav-item-content{padding:.8928571429vw 1.4880952381vw 2.0833333333vw}.nav-item h5{padding-top:6.5476190476vw;font-size:30px;line-height:32px}.nav-item h5.en{font-size:55px;line-height:55px}.nav-item h5.fr-FR{font-size:36px;line-height:36px}.nav-item h5.de-DE{font-size:30px;line-height:30px}.nav-item h5.it-IT{font-size:32px;line-height:32px}.nav-item h5.ko-KR{font-size:55px;line-height:55px}.nav-item h5.es-419,.nav-item h5.pt-BR{font-size:30px;line-height:30px}.nav-item .item-border{border-bottom:1px solid;height:1px;width:calc(100% - 36px);position:absolute;bottom:30px;left:18px}}", ""]), t.exports = o
    }, , , , , function(t, e, n) {
        "use strict";
        n(254)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".insight-nav{background:#3d293d;color:#fc483a;overflow:hidden;position:fixed;width:100%;height:var(--nav-height);top:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:5}.insight-nav .insight-nav-container{position:absolute;top:0;left:0;width:100%;height:100%}.insight-nav .scroller-container{margin-top:60px;position:relative;border-bottom:1px solid;height:2px;overflow:hidden}.insight-nav .scroller-container .scroller{position:absolute;height:100%;height:1px;background:currentColor}.insight-nav .flex{display:flex;margin-top:-50px;justify-content:center;flex-direction:column}.insight-nav .flex,.insight-nav .flex .flex-inner{height:100%;width:100%;position:relative}.insight-nav .close-container{z-index:1;position:relative;display:flex;justify-content:flex-end}.insight-nav .content{display:flex}@media(min-width:768px){.insight-nav{height:var(--nav-height)}.insight-nav .scroller-container{margin-top:60px}}@media(min-width:1025px){.insight-nav{height:630px}.insight-nav .scroller-container{margin-top:60px}}@media(min-width:1280px){.insight-nav{height:630px}.insight-nav .scroller-container{margin-top:60px}}@media(min-width:1440px){.insight-nav{height:630px}.insight-nav .scroller-container{margin-top:60px}}@media(min-width:1680px){.insight-nav{height:37.5vw}.insight-nav .scroller-container{margin-top:3.5714285714vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(255)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".nav-bg{cursor:pointer;height:100%;left:0;position:fixed;top:730px;width:100%;z-index:5}@media(min-width:1025px){.nav-bg{top:730px}}@media(min-width:1280px){.nav-bg{top:730px}}@media(min-width:1440px){.nav-bg{top:730px}}@media(min-width:1680px){.nav-bg{top:43.4523809524vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(256)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".gradient{height:100%;width:100%;position:absolute;top:0;left:0}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(257)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".gradient-manager{height:70px;left:0;position:fixed;top:0;width:100%;pointer-events:none;z-index:2;transition:transform .7s cubic-bezier(.645,.045,.355,1)}.showBanner .gradient-manager.isShown{transform:translateY(60px)}.gradient-manager .gradient-container{position:relative;transform:translateY(-100%);transition:transform .7s cubic-bezier(.645,.045,.355,1);width:100%;height:100%}.gradient-manager .gradient-container.isShown{transform:translateY(0)}@media(min-width:768px){.gradient-manager{height:120px}.showBanner .gradient-manager.isShown{transform:translateY(50px)}}@media(min-width:1025px){.gradient-manager{height:120px}}@media(min-width:1280px){.gradient-manager{height:120px}}@media(min-width:1440px){.gradient-manager{height:120px}}@media(min-width:1680px){.gradient-manager{height:7.1428571429vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(258)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".main-header{color:#3d293d;height:70px;position:fixed;transform:translateY(-19px);width:100%;z-index:5;--hover:#fb643f}.main-header.showBanner{transform:translateY(-79px)}@media(max-width:767px){.main-header{top:-1px;border-top:1px solid;padding:0;margin:0}.main-header .container{padding:0 0 0 20px}}.main-header .link-container{position:relative}.main-header.isShown,.main-header.isShown.showBanner{transform:translateY(-50)}.main-header.isShown .bar,.main-header.isShown.showBanner .bar{opacity:1}.main-header.showPopin{transform:translateY(-110%)}.main-header .banner{pointer-events:none;position:relative;height:0;background:linear-gradient(180deg,#5b8a7c,#567570);color:#c3f0c8;line-height:60px;font-size:16px;opacity:0;overflow:hidden;transition:opacity 0s cubic-bezier(.455,.03,.515,.955) .7s,height .7s cubic-bezier(.645,.045,.355,1)}.main-header .banner a{pointer-events:all}.main-header .banner a em{text-decoration:underline;font-style:normal}.main-header .banner-arrow-link{padding-left:6px;display:none}.main-header.showBanner .banner{pointer-events:all;height:60px;opacity:1}.main-header .banner .banner-content{position:relative;text-align:center;z-index:1;pointer-events:none}.main-header .banner-close-container{position:absolute;width:60px;height:60px;right:0;top:0;z-index:0}.main-header .close-banner{width:100%;height:100%;position:absolute;top:0;left:0}.main-header .close-banner span{background:#91b7a1;display:block;width:1px;height:15px;position:absolute;top:calc(50% - 7.5px);left:calc(50% - .5px)}.main-header .close-banner span:first-child{transform:rotate(45deg)}.main-header .close-banner span:last-child{transform:rotate(-45deg)}.main-header .container{position:relative;width:100%;height:100%}.main-header a.logo{display:flex;align-items:center;transition:color .3s cubic-bezier(.25,.46,.45,.94)}.main-header a.logo .separator{width:1px;background:currentColor;height:30px;margin:0 10px}.main-header a.logo svg.logo{display:block;width:170px;fill:currentColor}.no-touch .main-header a.logo:hover{color:var(--hover)}.main-header .end{justify-content:center;border-left:1px solid}.main-header .content,.main-header .end{display:flex;align-items:center;height:100%}.main-header .content{position:relative;justify-content:space-between;width:100%}.main-header nav{height:100%;position:relative}.main-header .scroller-container{position:absolute;bottom:0;width:100%;height:1px;left:0;transform-origin:0 0}.main-header .bar{height:100%;top:1px;transition:opacity .3s cubic-bezier(.455,.03,.515,.955);opacity:0}.main-header .bar,.main-header .scroller{position:absolute;background:currentColor;width:100%;left:0}.main-header .scroller{bottom:-1px;display:block;height:1px;transform-origin:0 100%;transition:transform .3s cubic-bezier(.25,.46,.45,.94)}.main-header .logo-header{width:28px;display:block;fill:currentColor}.main-header .button-container,.main-header .icon-container{display:flex;justify-content:flex-end}.main-header .button-container{align-items:center;padding:0 15px;border-left:1px solid;height:100%}.main-header .end{display:none}@media(min-width:768px){.main-header{height:82px;transform:translateY(-28px)}.main-header.showBanner{transform:translateY(-78px)}.main-header .banner{line-height:50px;width:calc(100% + 80px);margin-left:-40px}.main-header.showBanner .banner{height:50px}.main-header .banner-arrow-link{display:inline}.main-header .banner-close-container{width:50px;height:50px;right:21px}.main-header .button-container{justify-content:center;padding-right:0}.main-header .scroller{bottom:-1px}.main-header a.logo{display:block}.main-header .content{padding-bottom:2px}.main-header .end{border-left:0;display:flex;justify-content:flex-end;align-items:center}.main-header .fan-study{width:100px;display:block;fill:currentColor;margin-right:5px}.main-header .logo-header{width:28px}.main-header .button-container{border-left:0}}@media(min-width:1025px){.main-header{height:82px;transform:translateY(-28px)}.main-header.showBanner{transform:translateY(-78px)}.main-header .banner{width:calc(100% + 120px);margin-left:-60px}.main-header .banner-close-container{right:41px}.main-header a.logo svg{width:208px}.main-header .content{padding-bottom:2px}.main-header .scroller{height:2px}}@media(min-width:1280px){.main-header{height:82px;transform:translateY(-28px)}.main-header.showBanner{transform:translateY(-78px)}.main-header .banner{width:calc(100% + 120px);margin-left:-60px}.main-header .banner-close-container{right:41px}.main-header a.logo svg{width:208px}.main-header .content{padding-bottom:2px}.main-header .scroller{height:2px}}@media(min-width:1440px){.main-header{height:82px;transform:translateY(-28px)}.main-header.showBanner{transform:translateY(-78px)}.main-header .banner{width:calc(100% + 120px);margin-left:-60px}.main-header .banner-close-container{right:41px}.main-header a.logo svg{width:208px}.main-header .content{padding-bottom:2px}.main-header .scroller{height:2px}}@media(min-width:1680px){.main-header{height:4.880952381vw;transform:translateY(-1.6666666667vw)}.main-header.showBanner{transform:translateY(-4.6428571429vw)}.main-header .banner{width:calc(100% + 7.14286vw);margin-left:-3.5714285714vw}.main-header a.logo svg{width:12.380952381vw}.main-header .content{padding-bottom:.119047619vw}.main-header .scroller{height:2px}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(259)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".transition{position:fixed;top:0;left:0;width:100%;height:100%;z-index:8;pointer-events:none}.transition .link{opacity:0}.transition .container{position:fixed;top:0;left:0;width:100%}.transition .insight-preview a{display:none}.transition .bottom,.transition .top{position:absolute;left:0;width:100%;top:0}.transition .top{display:none;z-index:1;opacity:1}.transition .top .insight-preview{color:#3d293d!important}.transition .top .insight-preview .tag{background:#3d293d!important}.transition.isReady .link{display:inline-block;opacity:1;transition:opacity 1s}@media(min-width:1025px){.transition .stroke{display:none}.transition .top{display:block}}@media(max-width:1024px){.transition .insight-preview.reach .h2,.transition .insight-preview.reach h2{color:var(--reach)}.transition .insight-preview.engagement .h2,.transition .insight-preview.engagement h2{color:var(--engagement)}.transition .insight-preview.release .h2,.transition .insight-preview.release h2{color:var(--release)}.transition .insight-preview.merch .h2,.transition .insight-preview.merch h2{color:var(--merch)}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(260)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".tag{margin-right:12px}.edition-preview{position:relative}.no-touch .edition-preview{transition:color .5s cubic-bezier(.25,.46,.45,.94)}.edition-preview .flex{display:flex;align-items:flex-start;justify-content:space-between}.edition-preview .title{width:100%;padding-right:30px}.edition-preview .title h2{pointer-events:none}.edition-slug .edition-preview .title h2 .link{pointer-events:auto}.edition-preview .content{padding:50px 20px 30px;position:relative}.edition-preview .content>strong,.edition-preview a{position:absolute;top:0;left:0}.edition-preview a{height:100%;opacity:0;width:100%;z-index:1}.edition-preview a.clicked{pointer-events:none}.edition-preview .tag{transition:color .5s cubic-bezier(.25,.46,.45,.94);background:#3d293d}.edition-preview .number{display:flex;overflow:hidden;padding-right:5px;line-height:1;margin-top:-7px}.edition-preview .number span{display:block}.edition-preview.reach .tag{color:var(--reach)}.index.no-touch .edition-preview.reach:hover,.index.no-touch .edition-preview.reach:hover .tag{color:var(--reach-cta)}.edition-preview.engagement .tag{color:var(--engagement)}.index.no-touch .edition-preview.engagement:hover,.index.no-touch .edition-preview.engagement:hover .tag{color:var(--engagement-cta)}.edition-preview.release .tag{color:var(--release)}.index.no-touch .edition-preview.release:hover,.index.no-touch .edition-preview.release:hover .tag{color:var(--release-cta)}.edition-preview.merch .tag{color:var(--merch)}.index.no-touch .edition-preview.merch:hover,.index.no-touch .edition-preview.merch:hover .tag{color:var(--merch-cta)}@media(max-width:1024px){.edition-preview .w-560{flex-shrink:0;width:auto;display:flex}.edition-preview .title .h3{font-size:1.3em;line-height:1.1em}}@media(min-width:768px){.edition-preview .content>strong{left:40px}.edition-preview .title{width:100%;padding-right:50px}.edition-preview .content{padding:50px 40px 30px}}@media(min-width:1025px){.edition-preview{margin:0 60px}.edition-slug .edition-preview{color:#3d293d}.edition-preview .title{padding-right:50px;margin-top:-2px}.edition-preview .content{padding:50px 0 60px}.edition-preview .number{margin-right:auto;margin-top:-14px}.edition-preview .fig .total,.edition-preview .fig .w-160{padding-top:3px}.edition-preview .tag{margin-top:5px}}@media(min-width:1280px){.edition-preview{margin:0 60px}.edition-preview .title{padding-right:50px;margin-top:-3px}.edition-preview .content{padding:50px 0 60px}.edition-preview .number{margin-right:auto;margin-top:-14px}.edition-preview .fig .total,.edition-preview .fig .w-160{padding-top:3px}.edition-preview .tag{margin-top:5px}}@media(min-width:1440px){.edition-preview{margin:0 60px}.edition-preview .title{padding-right:50px;margin-top:-2px}.edition-preview .content{padding:50px 0 60px}.edition-preview .number{margin-top:-14px}.edition-preview .fig .total,.edition-preview .fig .w-160{padding-top:3px}.edition-preview .tag{margin-top:5px}}@media(min-width:1680px){.edition-preview{margin:0 3.5714285714vw}.edition-preview .title{padding-right:5.0595238095vw;margin-top:-3px}.edition-preview .content{padding:2.9761904762vw 0 3.5714285714vw}.edition-preview .number{margin-top:-22px}.edition-preview .fig .total,.edition-preview .fig .w-160{padding-top:.1785714286vw}.edition-preview .tag{margin-top:.2976190476vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(262)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".chapter-container{display:flex;flex-direction:row;justify-content:space-between}.chapter-title{padding-bottom:30px}.chapter-title h1{margin-left:-.06em;line-height:1;display:flex;flex-wrap:wrap}.chapter-title h1 span{display:block}.chapter-title h1 span:last-child{letter-spacing:0}.chapter-title small{display:block}.chapter-title .line span{display:flex;flex-wrap:wrap}@media(min-width:768px){.chapter-title{padding-bottom:30px}.chapter-title .line{font-size:55px;margin-top:-2px}}@media(min-width:1025px){.chapter-title{padding-bottom:40px}.chapter-title .line{font-size:90px;margin-top:-14px}}@media(min-width:1280px){.chapter-title{padding-bottom:40px}.chapter-title .line{font-size:80px;margin-top:-16px}}@media(min-width:1440px){.chapter-title{padding-bottom:50px}.chapter-title .line{font-size:110px}}@media(min-width:1680px){.chapter-title{padding-bottom:3.2738095238vw}.chapter-title .line{font-size:120px;margin-top:-16px}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(263)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".date-container{justify-content:flex-start}.chapter-introduction{position:relative;margin-bottom:40px}.chapter-introduction .flex{align-items:flex-start}.chapter-introduction .chapter-2-col{flex-direction:column-reverse;justify-content:flex-start}.chapter-introduction .content{padding-top:30px}.chapter-introduction .body-1{width:100%}.chapter-introduction .date{margin-left:0;margin-top:-2px;text-align:left;text-transform:unset}@media(min-width:768px){.chapter-introduction{margin-bottom:30px}.chapter-introduction .content{padding-top:30px}.chapter-introduction .body-1 .line+.line{margin-top:-.1em}}@media(min-width:1025px){.chapter-introduction{margin-bottom:40px}.chapter-introduction .date-container{justify-content:flex-end}.chapter-introduction .date{margin-right:0}.chapter-introduction .chapter-2-col{flex-direction:row;justify-content:space-between}.chapter-introduction .content{padding-top:40px}.chapter-introduction .body-1{padding-top:4px}}@media(min-width:1280px){.chapter-introduction{margin-bottom:50px}.chapter-introduction .date-container{justify-content:flex-start}.chapter-introduction .date{margin-top:7px}.chapter-introduction .content{padding-top:40px}.chapter-introduction .body-1{padding-top:4px;width:560px}}@media(min-width:1440px){.chapter-introduction{margin-bottom:50px}.chapter-introduction .content{padding-top:50px}.chapter-introduction .body-1{padding-top:4px;width:650px}}@media(min-width:1680px){.chapter-introduction{margin-bottom:2.9761904762vw}.chapter-introduction .content{padding-top:2.9761904762vw}.chapter-introduction .body-1{padding-top:.2380952381vw;width:38.6904761905vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(264)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".chapter-link .flex{align-items:flex-start}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(265)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".chapter{padding-top:70px;min-height:700px;padding-bottom:40px}.chapter,.chapter .chapter-content{position:relative}.chapter .chapter-content .insight-preview:nth-of-type(4) .stroke-bottom,.chapter.engagement .chapter-content .insight-preview:nth-of-type(3) .stroke-bottom{display:block}@media(min-width:768px){.chapter{padding-top:140px;padding-bottom:100px}}@media(min-width:1025px){.chapter{padding-top:100px;padding-bottom:100px}}@media(min-width:1280px){.chapter{padding-top:100px;padding-bottom:100px}}@media(min-width:1440px){.chapter{padding-top:100px;padding-bottom:100px}}@media(min-width:1680px){.chapter{padding-top:5.9523809524vw;padding-bottom:5.9523809524vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(266)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".reach-text{color:#a0c3d2}.engagement-text{color:#ffcdd2}.global-text,.release-text{color:#ffc864}.merch-2-text,.merch-text{color:#c3f0c8}.extra-padding-bottom{margin-bottom:148px}.insight-copy-container{display:flex;flex-direction:column;margin-top:24px}@media(min-width:1025px){.insight-copy-container{display:flex;flex-direction:column;margin-top:24px}}.cta-link{margin-top:48px;margin-left:0}.stroke-cta{margin-top:48px;margin-bottom:12px;background:#3d293d;display:block;height:1px;transform-origin:0 0;width:100%}.stroke-cta.reach{background:#a0c3d2}.stroke-cta.engagement{background:#ffcdd2}.stroke-cta.global,.stroke-cta.release{background:#ffc864}.stroke-cta.merch,.stroke-cta.merch-2{background:#c3f0c8}.insight-content{padding-top:110vw;padding-bottom:115px;position:relative;opacity:1;width:100%;transition:padding-top .7s cubic-bezier(.645,.045,.355,1)}.showBanner .insight-content{padding-top:calc(110vw + 60px)}.insight-content .content-container,.insight-content .insight-top{transition:opacity .3s cubic-bezier(.55,.085,.68,.53)}.insight-content.showPopin .content-container,.insight-content.showPopin .insight-top{transition:opacity .3s cubic-bezier(.25,.46,.45,.94);opacity:0}.insight-content .insight-preview .stroke-bottom{display:block}.insight-content .insight-preview .link{display:inline-block}.insight-content .insight-top{position:relative}.insight-content .content-container{justify-content:space-between;flex-direction:column-reverse;align-content:flex-start}.insight-content .content-container .w-560{transition:opacity .7s cubic-bezier(.25,.46,.45,.94)}.insight-content.hide .content-container .w-560{opacity:0}.insight-content .w-160{padding-bottom:10px}.insight-content .synopsis{padding-top:30px;position:relative}.insight-content .cta small,.insight-content .synopsis small{display:block;padding-top:2px}.insight-content .cta{margin-top:20px;padding-top:30px;position:relative}.insight-content .cta .cta-text{margin-bottom:30px}.insight-content .hover-shape{margin-top:-60px;margin-left:-20px;position:relative;width:100%;max-height:80vh;height:auto;opacity:0;background:red;min-height:100px;display:none}.insight-content .hover-shape-mobile{position:absolute;width:100%;height:110vw;top:0;left:0}.insight-content .hide-spacing{display:block}@media(max-width:1024px){.insight-content .hide-spacing{display:none}.insight-content.reach .insight-preview .h2,.insight-content.reach .insight-preview h2,.insight-content.reach .synopsis{color:var(--reach)}.insight-content.engagement .insight-preview .h2,.insight-content.engagement .insight-preview h2,.insight-content.engagement .synopsis{color:var(--engagement)}.insight-content.release .insight-preview .h2,.insight-content.release .insight-preview h2,.insight-content.release .synopsis{color:var(--release)}.insight-content.merch .insight-preview .h2,.insight-content.merch .insight-preview h2,.insight-content.merch .synopsis{color:var(--merch)}.insight-content .content-container{flex-direction:column-reverse}.insight-content .content-container .w-560{width:100%}}@media(min-width:768px){.insight-content .w-160{padding-bottom:0}.insight-content .synopsis{display:flex;padding-top:40px}.insight-content .cta{display:flex;padding-top:20px;margin-top:40px}.insight-content .cta .cta-text{margin-bottom:40px}}@media(min-width:1025px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-copy-container{display:flex;flex-direction:row;margin-top:24px}.insight-content .insight-preview .stroke{display:none}.insight-content .content-container .w-560{display:flex;min-height:70vh;flex-direction:column;justify-content:space-between}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape-mobile{display:none}.insight-content .hover-shape{display:block;margin-top:-60px;margin-left:-60px}}@media(min-width:1280px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape{margin-top:-60px;margin-left:-60px}}@media(min-width:1440px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape{margin-top:-60px;margin-left:-60px}}@media(min-width:1680px){.insight-content{padding-bottom:4.4642857143vw;padding-top:4.7619047619vw}.showBanner .insight-content{padding-top:7.7380952381vw}.insight-content .insight-top{min-height:14.880952381vw}.insight-content .synopsis{margin-top:-3.5714285714vw;padding-top:2.380952381vw}.insight-content .cta{padding-top:2.380952381vw;padding-bottom:7.7380952381vw}.insight-content .cta .cta-text{margin-bottom:2.9761904762vw}.insight-content .hover-shape{margin-top:-3.5714285714vw;margin-left:-3.5714285714vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(267)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".chapter{padding-top:130px;min-height:300px;padding-bottom:40px}.chapter,.chapter .chapter-content{position:relative}.chapter .chapter-content .insight-preview:nth-of-type(4) .stroke-bottom,.chapter.engagement .chapter-content .insight-preview:nth-of-type(3) .stroke-bottom{display:block}@media(min-width:768px){.chapter{padding-top:140px;padding-bottom:100px}}@media(min-width:1025px){.chapter{padding-top:160px;padding-bottom:160px}}@media(min-width:1280px){.chapter{padding-top:160px;padding-bottom:160px}}@media(min-width:1440px){.chapter{padding-top:160px;padding-bottom:160px}}@media(min-width:1680px){.chapter{padding-top:9.5238095238vw;padding-bottom:9.5238095238vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(268)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".popin-bg{top:0;left:0;height:100%;position:fixed;width:100%;z-index:11}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(269)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".edition-page{position:relative;width:100%}@media(max-width:767px){.edition-page .content-container{display:flex;flex-direction:column-reverse;justify-content:flex-start}.edition-page .content-container .edition-graph{width:100%;margin-top:48px;height:auto;-o-object-fit:contain;object-fit:contain}.edition-page .content-container .hide-spacing{display:none}}@media(min-width:768px){.edition-page .content-container{display:flex;flex-direction:row;justify-content:space-between}.edition-page .content-container .edition-graph{width:100%;height:auto;-o-object-fit:contain;object-fit:contain}.edition-page .content-container .hide-spacing{display:none}}@media(min-width:1025px){.edition-page .content-container .edition-graph{width:80%;height:auto;-o-object-fit:contain;object-fit:contain}.edition-page .content-container .hide-spacing{display:block}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(270)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".popin{bottom:0;height:100vh;overflow:auto;position:fixed;right:0;width:100%;z-index:11;overflow:hidden}.popin .popin-container{position:relative;width:100%;height:100%}.isTouch .popin .popin-container{overflow:scroll}.popin .popin-scroll{position:relative;width:100%;min-height:100%;display:flex;flex-direction:column;justify-content:space-between;z-index:0}.popin .close-data{border-bottom:1px solid;display:none;height:70px;line-height:70px;text-align:center;text-transform:uppercase;width:100%;opacity:0;position:fixed;top:0;z-index:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94);-webkit-appearance:none}.popin .nutrient svg{display:block;height:100%;width:100%}.popin ul.list li .inner,.popin ul.list li .inner>span{display:flex;align-items:baseline}.popin ul.list li .nutrient-list-number{display:block;margin-right:10px}.popin ul.list li .inner,.popin ul.list li .list-inner{display:flex;justify-content:space-between}.popin li+li{margin-top:16px}.popin strong{display:block;margin-bottom:24px}.popin .fragments-close-button{position:absolute;top:4px;right:24px;z-index:1}.popin .popin-content{position:relative;padding:24px 18px}.popin .fragments-close-button{display:none}.popin .close-data{display:block}.popin .popin-scroll{padding-top:70px}.popin .bottom{position:relative;overflow:hidden}.popin .bottom a{flex-shrink:0;margin-top:24px}.popin .bottom-inner{padding:40px 18px;background:#3d293d;position:relative;width:100%}@media(min-width:768px){.popin .close-data{height:70px}.popin .popin-scroll{padding-top:100px}.popin .popin-content{padding:24px 60px}.popin .bottom-inner{padding:60px;display:flex;align-items:center;justify-content:space-between}.popin .bottom-inner a{margin-top:0;margin-left:60px}.popin li+li{margin-top:16px}.popin strong{margin-bottom:60px}}@media(min-width:1025px){.popin{width:75%}.popin .bottom{position:fixed;bottom:0;right:0;width:75%}.popin .close-data{display:none}.popin .popin-scroll{padding-top:0}.popin .fragments-close-button{display:block}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1280px){.popin,.popin .bottom{max-width:900px;width:70%}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1440px){.popin,.popin .bottom{width:60%}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1680px){.popin.isListPopin,.popin.isListPopin .bottom{width:36.9047619048vw}.popin .popin-content{padding:5.9523809524vw 3.5714285714vw 7.1428571429vw}.popin .bottom-inner{padding:1.4285714286vw 3.5714285714vw}.popin .bottom-inner a{margin-left:3.5714285714vw}.popin strong{margin-bottom:3.5714285714vw}.popin li+li{margin-top:.9523809524vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(271)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".inline-span{display:inline}.inline-span span{display:inline;span-display:inline}.pre-footer{color:#fff;margin-top:115px;padding-bottom:115px;position:relative;width:100%}.pre-footer .content-container{justify-content:space-between;align-content:flex-start}.pre-footer .title{position:relative;width:100%}.pre-footer .title strong{text-transform:uppercase}.pre-footer .cta small{display:block;padding-top:2px}.pre-footer .h3{line-height:1.1!important}.pre-footer .h3 .line+.line{margin-top:-2px}.pre-footer .cta{padding-top:30px;position:relative}.pre-footer .cta .cta-text,.pre-footer .cta small{margin-bottom:30px}@media(max-width:1024px){.pre-footer .content-container{display:block}.pre-footer .content-container .w-560{width:100%}}@media(min-width:768px){.pre-footer .w-160{padding-bottom:0}.pre-footer .title{width:100%;padding-right:50px}.pre-footer .cta{display:flex;padding-top:20px}.pre-footer .cta .cta-text{margin-bottom:40px}.pre-footer .h3 .line+.line{margin-top:-4px}}@media(min-width:1025px){.pre-footer{padding-bottom:75px;margin-top:80px}.pre-footer .title{width:100%;padding-right:50px}.pre-footer .content-container .w-560{display:flex;flex-direction:column;justify-content:space-between}.pre-footer .insight-top{min-height:250px}.pre-footer .h3 .line+.line{margin-top:-6px}.pre-footer .cta{padding-top:40px;padding-bottom:130px}.pre-footer .cta .cta-text{margin-bottom:50px}}@media(min-width:1280px){.pre-footer{padding-bottom:75px;margin-top:80px}.pre-footer .title{width:100%;padding-right:50px}.pre-footer .cta{padding-top:40px;padding-bottom:130px}.pre-footer .cta .cta-text{margin-bottom:50px}.pre-footer .h3 .line+.line{margin-top:-6px}}@media(min-width:1440px){.pre-footer{padding-bottom:75px;margin-top:80px}.pre-footer .title{width:100%;padding-right:50px}.pre-footer .h3 .line+.line{margin-top:-6px}.pre-footer .cta{padding-top:40px;padding-bottom:130px}.pre-footer .cta .cta-text{margin-bottom:50px}}@media(min-width:1680px){.pre-footer{padding-bottom:4.4642857143vw;margin-top:4.7619047619vw}.pre-footer .title{width:100%;padding-right:2.9761904762vw}.pre-footer .h3 .line+.line{margin-top:-.5952380952vw}.pre-footer .cta{padding-top:2.380952381vw;padding-bottom:7.7380952381vw}.pre-footer .cta .cta-text{margin-bottom:2.9761904762vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(272)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".modal[data-v-66401a02]{overflow-x:hidden;overflow-y:auto;z-index:9;display:flex}.modal[data-v-66401a02],.modal__backdrop[data-v-66401a02]{position:fixed;top:0;right:0;bottom:0;left:0}.modal__backdrop[data-v-66401a02]{background-color:rgba(0,0,0,.3);z-index:1}.modal__dialog[data-v-66401a02]{background-color:#fff;position:relative;margin:auto;width:980px;display:flex;flex-direction:column;z-index:2}@media screen and (max-width:1025px){.modal__dialog[data-v-66401a02]{width:335px;min-height:90vh}}.modal__close[data-v-66401a02]{width:30px;height:30px;position:absolute;top:15px;right:15px}@media screen and (max-width:1025px){.modal__close[data-v-66401a02]{top:15px;right:15px}}.modal__close span[data-v-66401a02]{position:absolute;top:calc(50% - 7.5px);left:calc(50% - .5px);background:#3d293d;display:block;width:1.5px;height:22px}.modal__close span[data-v-66401a02]:first-child{transform:rotate(45deg)}.modal__close span[data-v-66401a02]:last-child{transform:rotate(-45deg)}.modal__header[data-v-66401a02]{padding:37px 40px;display:flex;align-items:flex-start;justify-content:space-between;position:reltaive}@media screen and (max-width:1025px){.modal__header[data-v-66401a02]{padding:30px 20px 0}}.modal__body[data-v-66401a02]{padding:0 40px 60px;overflow:auto;display:flex;flex-direction:column;align-items:stretch}@media screen and (max-width:1025px){.modal__body[data-v-66401a02]{padding:0 20px 30px}}.fade-enter-active[data-v-66401a02],.fade-leave-active[data-v-66401a02]{transition:opacity .2s}.fade-enter[data-v-66401a02],.fade-leave-to[data-v-66401a02]{opacity:0}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(273)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".show-below-s{display:block}.footer-container{align-content:center}.footer-below-m,.footer-container{display:flex;flex-direction:column;justify-content:center}.footer-below-m{align-items:center}.common-footer{padding:20px;background:#3d293d;position:relative}.common-footer nav{position:relative;color:#fff}.common-footer .socials{margin-bottom:20px}.common-footer .links,.common-footer .socials{display:flex;flex-direction:row;justify-content:center}.common-footer .links{margin-bottom:10px}.common-footer .lang-selector{display:flex;align-items:center;width:-webkit-max-content;width:-moz-max-content;width:max-content}.common-footer .lang-selector svg{margin-right:3px;transform:scale(.5);fill:#fff}.common-footer nav ul{display:flex;align-items:center}.common-footer nav ul li+li{margin-left:20px}.common-footer nav ul li.side-nav-link{font-weight:400;white-space:nowrap}.common-footer a,.common-footer button{text-transform:uppercase;display:block;font-weight:900;white-space:nowrap;transition:opacity .3s cubic-bezier(.25,.46,.45,.94)}.common-footer a:hover,.common-footer button:hover{opacity:.7}.common-footer svg{display:block;width:24px;height:24px}.common-footer #language-selector-title{font-size:24px}.common-footer .language-options-list{display:flex;flex-wrap:wrap}.common-footer .language-options-list a:hover{transition:none;opacity:1}.common-footer .language-option{width:295px;padding:20px}.common-footer .language-option.active-locale,.common-footer .language-option:hover{background-color:rgba(61,41,61,.1);cursor:pointer}.common-footer .language-option h4{font-size:14px;text-transform:uppercase;white-space:nowrap;line-height:14px}.common-footer .language-option span{font-size:14px;opacity:.6;text-transform:none;font-weight:400}@media(min-width:768px){.common-footer{padding:30px 40px}.common-footer .show-below-s{display:none}.common-footer .footer-container{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.common-footer .socials{margin-bottom:0;display:flex;flex-direction:row;justify-content:flex-start}.common-footer nav{justify-content:space-between;display:flex;align-items:flex-end}.common-footer nav ul li+li{margin-left:20px}}@media(min-width:1025px){.common-footer{padding:30px 60px}.common-footer .socials{margin-bottom:10px}.common-footer nav ul li+li{margin-left:20px}.common-footer #language-selector-title{font-size:36px}.common-footer .language-option{width:290px}}@media(min-width:1280px){.common-footer{padding:30px 60px}.common-footer .footer-below-m{display:unset;flex-direction:row;justify-content:center;align-items:center}.common-footer nav ul li+li{margin-left:20px}.common-footer .lang-selector{font-size:12px}}@media(min-width:1440px){.common-footer{padding:30px 60px}.common-footer nav ul li+li{margin-left:20px}}@media(min-width:1680px){.common-footer{padding:1.7857142857vw 3.5714285714vw}.common-footer nav ul li+li{margin-left:1.1904761905vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(274)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".mouse{pointer-events:none;top:0;left:0;position:fixed;z-index:20}.mouse .circle,.mouse .rotating{height:100%;top:0;left:0;position:absolute;width:100%}.mouse .rotating .circle{top:50%;left:50%;transition:transform .5s cubic-bezier(.55,.085,.68,.53),opacity .5s cubic-bezier(.55,.085,.68,.53);transform:translate(-50%,-50%) scale(.2)}.mouse .line{position:absolute;top:0;left:0;text-align:center;transform:translate(-50%,-50%);z-index:1}.mouse .inner{transform:translateY(110%);transition:transform .3s cubic-bezier(.55,.085,.68,.53)}.mouse .close-label,.mouse .drag-label{color:#fff}.mouse .close-label{cursor:pointer}.mouse .circle{display:block;opacity:0;transform:translate(-50%,-50%) scale(.2);transition:transform .3s cubic-bezier(.55,.085,.68,.53),opacity .3s cubic-bezier(.55,.085,.68,.53)}.mouse .copy-link{background:#fff;border-radius:2.6785714286vw;border:1px solid;color:#fff;height:2.6785714286vw;left:2.9761904762vw;position:absolute;overflow:hidden;top:0;transform:translateY(-50%);opacity:0;transition:opacity .5s cubic-bezier(.25,.46,.45,.94),background .5s cubic-bezier(.25,.46,.45,.94)}.mouse .copy-link span{position:relative;transition:transform .5s cubic-bezier(.25,.46,.45,.94) .5s}.mouse .copy-link small,.mouse .copy-link span{display:block;height:100%;white-space:nowrap}.mouse .copy-link small{color:#3d293d;line-height:2.6785714286vw;padding:0 .5952380952vw;position:relative;text-align:center;text-transform:uppercase}.mouse .copy-link small+small{color:#fff;left:0;position:absolute;top:0;width:100%;transform:translateY(100%)}.mouse .rotating{-webkit-animation-name:rotateCircle;animation-name:rotateCircle;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.mouse.copy .copy-link{opacity:1}.mouse.view .dashed,.mouse.view .filled{opacity:1;transform:translate(-50%,-50%) scale(1)}.mouse.view .view-label .inner{transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s;transform:translate(0)}.mouse.isButtonGrab .dashed,.mouse.isButtonGrab .filled{opacity:1;transform:translate(-50%,-50%) scale(1)}.mouse.isButtonGrab .view-data-label .inner{transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s;transform:translate(0)}.mouse.isLinkCopied .copy-link{opacity:1;background:transparent}.mouse.isLinkCopied .copy-link span{transform:translateY(-100%);transition:transform .5s cubic-bezier(.25,.46,.45,.94)}.mouse.copy.isHover .border-copy,.mouse.drag.isHover .border,.mouse.drag.isHover .dashed,.mouse.mouse-link.isHover .circle.border-sml{opacity:1;transform:translate(-50%,-50%) scale(1)}.mouse.drag.isHover .drag-label .inner{transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s;transform:translate(0)}.mouse.drag.isHover.isDragPressed .dashed{opacity:0}.mouse.drag.isHover.isDragPressed .border{opacity:1;transform:translate(-50%,-50%) scale(1)!important}.mouse.drag.isHover.isDragPressed .border circle{stroke-dashoffset:0!important}.mouse.popin-close{cursor:pointer}.mouse.popin-close .dashed{opacity:1;transform:translate(-50%,-50%) scale(1)!important}.mouse.popin-close .close-label .inner{transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s;transform:translate(0)}.mouse .border circle{transition:stroke-dashoffset .3s cubic-bezier(.55,.085,.68,.53)}@media(min-width:1025px){.mouse{height:104px;width:104px}.mouse .border-copy{height:32px;width:32px}.mouse .copy-link{border-radius:32px;height:32px;left:30px}.mouse .copy-link small{line-height:32px;padding:0 10px}}@media(min-width:1280px){.mouse{height:104px;width:104px}.mouse .border-copy{height:34px;width:34px}.mouse .copy-link{border-radius:34px;height:34px;left:30px}.mouse .copy-link small{line-height:34px;padding:0 10px}}@media(min-width:1440px){.mouse{height:104px;width:104px}.mouse .copy-link{border-radius:42px;height:42px;left:30px}.mouse .copy-link small{line-height:42px;padding:0 10px}.mouse .border-copy{height:42px;width:42px}}@media(min-width:1680px){.mouse{height:6.1904761905vw;width:6.1904761905vw}.mouse .border-copy{height:2.6785714286vw;width:2.6785714286vw}.mouse .copy-link{border-radius:2.6785714286vw;height:2.6785714286vw;left:1.7857142857vw}.mouse .copy-link small{line-height:2.6785714286vw;padding:0 .5952380952vw}}@-webkit-keyframes rotateCircle{0%{transform:translate(-50%,-50%) rotate(0turn)}to{transform:translate(-50%,-50%) rotate(1turn)}}@keyframes rotateCircle{0%{transform:translate(-50%,-50%) rotate(0turn)}to{transform:translate(-50%,-50%) rotate(1turn)}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(275)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".list-item .list-inner>span{display:flex!important;align-items:baseline;line-height:1.2}.list-item .list-inner>span .nutrient-list-number{margin-right:20px}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(276)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, '.select-list{position:absolute;top:0;left:0;margin-top:-30px;margin-left:-40px;overflow:hidden;transform:translateY(-100%)}.select-list,.select-list .select-content{transition:transform .4s cubic-bezier(.55,.085,.68,.53)}.select-list .select-content{background:#3d293d;position:relative;transform:translateY(100%)}.select-list button:hover{color:#fff}.select-list button{display:block;width:100%;text-align:left;padding:0 40px}.select-list ul{padding-bottom:30px}.select-list ul li{opacity:0;transform:translateY(30px);transition:transform .5s cubic-bezier(.25,.46,.45,.94),opacity .5s cubic-bezier(.25,.46,.45,.94)}.select-list .top{padding:30px 40px}.select-list .label{white-space:nowrap}.select-list .label:after{background:currentColor;bottom:0;content:"";display:block;height:2px;left:0;position:absolute;width:100%;transition:transform .5s cubic-bezier(.215,.61,.355,1);transform-origin:100% 50%;transform:scaleX(0)}.select-list .label span:after{display:none!important}.engagement .select-list{color:var(--engagement)}.reach .select-list{color:var(--reach)}.merch .select-list{color:var(--merch)}.release .select-list{color:var(--release)}.select-list.isReady,.select-list.isReady .select-content{transform:translateY(0);transition:transform .5s cubic-bezier(.25,.46,.45,.94)}.select-list.isReady li{transform:translateY(0);opacity:1}.select-list.isReady li:first-child{transition-delay:.05s}.select-list.isReady li:nth-child(2){transition-delay:.1s}.select-list.isReady li:nth-child(3){transition-delay:.15s}.select-list.isReady li:nth-child(4){transition-delay:.2s}.select-list.isReady li:nth-child(5){transition-delay:.25s}.select-list.isReady li:nth-child(6){transition-delay:.3s}.select-list.isReady li:nth-child(7){transition-delay:.35s}.select-list.isReady li:nth-child(8){transition-delay:.4s}.select-list.isReady li:nth-child(9){transition-delay:.45s}.select-list.isReady li:nth-child(10){transition-delay:.5s}.select-list.isReady li:nth-child(11){transition-delay:.55s}.select-list.isReady li:nth-child(12){transition-delay:.6s}.select-list.isReady li:nth-child(13){transition-delay:.65s}.select-list.isReady li:nth-child(14){transition-delay:.7s}.select-list.isReady .label:after{transition:transform .5s cubic-bezier(.215,.61,.355,1) .3s;transform:scaleX(1)}', ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(277)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, '.select-container{position:relative;margin:30px 0;z-index:1;display:flex}.select-container .select{position:relative}.select-container .select .label .inner{display:flex;align-items:center}.select-container .select button.open{display:block;position:absolute;top:0;left:0;width:100%;height:100%}.select-container .select label,.select-container .select span{display:flex;align-items:center;line-height:2}.select-container .select .label span{position:relative;margin-left:5px}.select-container .select .label span:after{background:currentColor;bottom:0;content:"";display:block;height:2px;left:0;position:absolute;width:100%}.select-container .select .label span svg{width:10px;margin-left:5px;display:block;fill:currentColor}.select-container select{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;border:none;outline:none;background:none;border-radius:0;color:#3d293d;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-appearance:none}@media(min-width:1025px){.select-container{margin:60px 0}}', ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(278)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".insight-bg{position:absolute;top:0;left:0;height:100%;width:100%}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(279)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".button-data-container{height:80px;right:20px;position:absolute;width:80px;transition:transform .5s cubic-bezier(.25,.46,.45,.94);transform:scale(.5);margin-top:-100px;z-index:2}.button-data-container.no-touch .button-data-container{pointer-events:none}.button-data-container small{color:#fff;display:block;font-weight:700;overflow:hidden;text-transform:uppercase}.button-data-container small span{display:block;transform:translateY(110%);text-align:center;transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s}.button-data-container .circle,.button-data-container .rotating,.button-data-container small{top:50%;left:50%;position:absolute;display:block;transform:translate(-50%,-50%);width:100%}.button-data-container .circle{transition:transform .5s cubic-bezier(.25,.46,.45,.94),opacity .5s cubic-bezier(.25,.46,.45,.94);opacity:0;transform:translate(-50%,-50%) scale(.5)}.button-data-container .rotating{-webkit-animation-name:rotateCircle;animation-name:rotateCircle;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.button-data-container.isReady{transform:scale(1)}.button-data-container.isReady .circle{opacity:1;transform:translate(-50%,-50%) scale(1)}.button-data-container.isReady small span{transform:translateY(0)}.button-data-container.isReady.isButtonGrab,.button-data-container.isReady.showPopin{transform:scale(.5)}.button-data-container.isReady.isButtonGrab .circle,.button-data-container.isReady.showPopin .circle{opacity:0;transform:translate(-50%,-50%) scale(.5)}.button-data-container.isReady.isButtonGrab small span,.button-data-container.isReady.showPopin small span{transform:translateY(110%);transition:transform .3s cubic-bezier(.55,.085,.68,.53)}@media(min-width:768px){.button-data-container{right:40px;height:80px;width:80px}}@media(min-width:1025px){.button-data-container{right:auto;margin-top:0;bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1280px){.button-data-container{bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1440px){.button-data-container{bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1680px){.button-data-container{bottom:12.0238095238vw;left:3.5714285714vw;height:4.7619047619vw;width:4.7619047619vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(280)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".insight-content{padding-top:110vw;padding-bottom:115px;position:relative;opacity:1;width:100%;transition:padding-top .7s cubic-bezier(.645,.045,.355,1)}.showBanner .insight-content{padding-top:calc(110vw + 60px)}.insight-content .content-container,.insight-content .insight-top{transition:opacity .3s cubic-bezier(.55,.085,.68,.53)}.insight-content.showPopin .content-container,.insight-content.showPopin .insight-top{transition:opacity .3s cubic-bezier(.25,.46,.45,.94);opacity:0}.insight-content .insight-preview .stroke-bottom{display:block}.insight-content .insight-preview .link{display:inline-block}.insight-content .insight-top{position:relative}.insight-content .content-container{justify-content:space-between;align-content:flex-start}.insight-content .content-container .w-560{transition:opacity .7s cubic-bezier(.25,.46,.45,.94)}.insight-content.hide .content-container .w-560{opacity:0}.insight-content .w-160{padding-bottom:10px}.insight-content .synopsis{padding-top:30px;position:relative}.insight-content .cta small,.insight-content .synopsis small{display:block;padding-top:2px}.insight-content .cta{margin-top:20px;padding-top:30px;position:relative}.insight-content .cta .cta-text{margin-bottom:30px}.insight-content .hover-shape{margin-top:-60px;margin-left:-20px;position:relative;width:100%;max-height:80vh;height:auto;opacity:0;background:red;min-height:100px;display:none}.insight-content .hover-shape-mobile{position:absolute;width:100%;height:110vw;top:0;left:0}@media(max-width:1024px){.insight-content.reach .insight-preview .h2,.insight-content.reach .insight-preview h2,.insight-content.reach .synopsis{color:var(--reach)}.insight-content.engagement .insight-preview .h2,.insight-content.engagement .insight-preview h2,.insight-content.engagement .synopsis{color:var(--engagement)}.insight-content.release .insight-preview .h2,.insight-content.release .insight-preview h2,.insight-content.release .synopsis{color:var(--release)}.insight-content.merch .insight-preview .h2,.insight-content.merch .insight-preview h2,.insight-content.merch .synopsis{color:var(--merch)}.insight-content .content-container .w-560{width:100%}}@media(min-width:768px){.insight-content .w-160{padding-bottom:0}.insight-content .synopsis{display:flex;padding-top:40px}.insight-content .cta{display:flex;padding-top:20px;margin-top:40px}.insight-content .cta .cta-text{margin-bottom:40px}}@media(min-width:1025px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-preview .stroke{display:none}.insight-content .content-container .w-560{display:flex;min-height:70vh;flex-direction:column;justify-content:space-between}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape-mobile{display:none}.insight-content .hover-shape{display:block;margin-top:-60px;margin-left:-60px}}@media(min-width:1280px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape{margin-top:-60px;margin-left:-60px}}@media(min-width:1440px){.insight-content{padding-bottom:75px;padding-top:80px}.showBanner .insight-content{padding-top:130px}.insight-content .insight-top{min-height:250px}.insight-content .synopsis{margin-top:-60px;padding-top:40px}.insight-content .cta{padding-top:40px;padding-bottom:130px}.insight-content .cta .cta-text{margin-bottom:50px}.insight-content .hover-shape{margin-top:-60px;margin-left:-60px}}@media(min-width:1680px){.insight-content{padding-bottom:4.4642857143vw;padding-top:4.7619047619vw}.showBanner .insight-content{padding-top:7.7380952381vw}.insight-content .insight-top{min-height:14.880952381vw}.insight-content .synopsis{margin-top:-3.5714285714vw;padding-top:2.380952381vw}.insight-content .cta{padding-top:2.380952381vw;padding-bottom:7.7380952381vw}.insight-content .cta .cta-text{margin-bottom:2.9761904762vw}.insight-content .hover-shape{margin-top:-3.5714285714vw;margin-left:-3.5714285714vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(281)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".insight-page{position:relative;width:100%}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(282)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".insight-bg{position:absolute;top:0;left:0;height:100%;width:100%}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(283)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".button-data-container{height:80px;right:20px;position:absolute;width:80px;transition:transform .5s cubic-bezier(.25,.46,.45,.94);transform:scale(.5);margin-top:-100px;z-index:2}.button-data-container.no-touch .button-data-container{pointer-events:none}.button-data-container small{color:#fff;display:block;font-weight:700;overflow:hidden;text-transform:uppercase}.button-data-container small span{display:block;transform:translateY(110%);text-align:center;transition:transform .3s cubic-bezier(.55,.085,.68,.53) .3s}.button-data-container .circle,.button-data-container .rotating,.button-data-container small{top:50%;left:50%;position:absolute;display:block;transform:translate(-50%,-50%);width:100%}.button-data-container .circle{transition:transform .5s cubic-bezier(.25,.46,.45,.94),opacity .5s cubic-bezier(.25,.46,.45,.94);opacity:0;transform:translate(-50%,-50%) scale(.5)}.button-data-container .rotating{-webkit-animation-name:rotateCircle;animation-name:rotateCircle;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-duration:10s;animation-duration:10s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.button-data-container.isReady{transform:scale(1)}.button-data-container.isReady .circle{opacity:1;transform:translate(-50%,-50%) scale(1)}.button-data-container.isReady small span{transform:translateY(0)}.button-data-container.isReady.isButtonGrab,.button-data-container.isReady.showPopin{transform:scale(.5)}.button-data-container.isReady.isButtonGrab .circle,.button-data-container.isReady.showPopin .circle{opacity:0;transform:translate(-50%,-50%) scale(.5)}.button-data-container.isReady.isButtonGrab small span,.button-data-container.isReady.showPopin small span{transform:translateY(110%);transition:transform .3s cubic-bezier(.55,.085,.68,.53)}@media(min-width:768px){.button-data-container{right:40px;height:80px;width:80px}}@media(min-width:1025px){.button-data-container{right:auto;margin-top:0;bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1280px){.button-data-container{bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1440px){.button-data-container{bottom:202px;left:60px;height:80px;width:80px}}@media(min-width:1680px){.button-data-container{bottom:12.0238095238vw;left:3.5714285714vw;height:4.7619047619vw;width:4.7619047619vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(284)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".popin-bg{top:0;left:0;height:100%;position:fixed;width:100%;z-index:11}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(285)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, ".popin{bottom:0;height:100vh;overflow:auto;position:fixed;right:0;width:100%;z-index:11;overflow:hidden}.popin .popin-container{position:relative;width:100%;height:100%}.isTouch .popin .popin-container{overflow:scroll}.popin .popin-scroll{position:relative;width:100%;min-height:100%;display:flex;flex-direction:column;justify-content:space-between;z-index:0}.popin .close-data{border-bottom:1px solid;display:none;height:70px;line-height:70px;text-align:center;text-transform:uppercase;width:100%;opacity:0;position:fixed;top:0;z-index:1;transition:opacity .5s cubic-bezier(.25,.46,.45,.94);-webkit-appearance:none}.popin .nutrient svg{display:block;height:100%;width:100%}.popin ul.list li .inner,.popin ul.list li .inner>span{display:flex;align-items:baseline}.popin ul.list li .nutrient-list-number{display:block;margin-right:10px}.popin ul.list li .inner,.popin ul.list li .list-inner{display:flex;justify-content:space-between}.popin li+li{margin-top:16px}.popin strong{display:block;margin-bottom:24px}.popin .fragments-close-button{position:absolute;top:4px;right:24px;z-index:1}.popin .popin-content{position:relative;padding:24px 18px}.popin .fragments-close-button{display:none}.popin .close-data{display:block}.popin .popin-scroll{padding-top:70px}.popin .bottom{position:relative;overflow:hidden}.popin .bottom a{flex-shrink:0;margin-top:24px}.popin .bottom-inner{padding:40px 18px;background:#3d293d;position:relative;width:100%}@media(min-width:768px){.popin .close-data{height:70px}.popin .popin-scroll{padding-top:100px}.popin .popin-content{padding:24px 60px}.popin .bottom-inner{padding:60px;display:flex;align-items:center;justify-content:space-between}.popin .bottom-inner a{margin-top:0;margin-left:60px}.popin li+li{margin-top:16px}.popin strong{margin-bottom:60px}}@media(min-width:1025px){.popin{width:75%}.popin .bottom{position:fixed;bottom:0;right:0;width:75%}.popin .close-data{display:none}.popin .popin-scroll{padding-top:0}.popin .fragments-close-button{display:block}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1280px){.popin,.popin .bottom{max-width:900px;width:70%}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1440px){.popin,.popin .bottom{width:60%}.popin .popin-content{padding:100px 60px 120px}.popin .bottom-inner{padding:24px 60px}.popin .bottom-inner a{margin-left:60px}.popin.isListPopin,.popin.isListPopin .bottom{width:620px}.popin strong{margin-bottom:60px}.popin li+li{margin-top:16px}}@media(min-width:1680px){.popin.isListPopin,.popin.isListPopin .bottom{width:36.9047619048vw}.popin .popin-content{padding:5.9523809524vw 3.5714285714vw 7.1428571429vw}.popin .bottom-inner{padding:1.4285714286vw 3.5714285714vw}.popin .bottom-inner a{margin-left:3.5714285714vw}.popin strong{margin-bottom:3.5714285714vw}.popin li+li{margin-top:.9523809524vw}}", ""]), t.exports = o
    }, function(t, e, n) {
        "use strict";
        n(286)
    }, function(t, e, n) {
        var o = n(18)(!1);
        o.push([t.i, '.home-header{color:#fc483a;padding-bottom:30px;padding-top:70px;position:relative;height:100vh;transition:padding-top .7s cubic-bezier(.645,.045,.355,1)}.showBanner .home-header{padding-top:130px}.home-header .body-header{padding-right:0}.home-header .flex{display:flex;justify-content:flex-start;flex-direction:column;height:100%;position:relative}.home-header .flex:after{content:"";background:currentColor;height:1px;width:100%;bottom:0;left:0;display:block;position:absolute;transform-origin:0 0;transform:scaleX(0);transition:transform 1s cubic-bezier(.25,.46,.45,.94) .4s}.home-header .text{flex:1;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start}.home-header .body-2{padding-right:30px}.home-header .button-container{display:flex;flex-shrink:0;margin-top:50px;padding-bottom:30px;justify-content:flex-end;opacity:0;transition:opacity .5s cubic-bezier(.25,.46,.45,.94) .5s}.home-header svg{margin-top:24px;margin-bottom:20px;width:44px;display:block}.home-header .button-container p{overflow:hidden}.home-header .button-container p .marquee{-webkit-animation-name:marqueeAnimation;animation-name:marqueeAnimation;-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.home-header .button-container p span{display:block;position:relative}.home-header .button-container p span+span{position:absolute;left:0;top:0;transform:translateY(100%)}.home-header .gradients{overflow:hidden}.home-header .gradients path{transform:translate(-100%);transition:transform 1.1s cubic-bezier(.645,.045,.355,1)}.home-header .gradients path:nth-child(2){transition:transform 1s cubic-bezier(.55,.055,.675,.19)}.home-header .gradients path:nth-child(3){transition:transform .8s cubic-bezier(.25,.46,.45,.94)}.home-header .gradients path:nth-child(4){transition:transform 1s cubic-bezier(.785,.135,.15,.86)}.home-header .gradients path:nth-child(5){transition:transform .8s cubic-bezier(.55,.085,.68,.53)}.home-header .gradients path:nth-child(6){transition:transform .9s cubic-bezier(.25,.46,.45,.94)}.home-header.animate .flex:after{transform:scaleX(1)}.home-header.animate .button-container{opacity:1}.home-header.animate .gradients path{transform:translate(0)}@-webkit-keyframes marqueeAnimation{0%{transform:translateY(0)}50%{transform:translateY(0)}to{transform:translateY(-100%)}}@keyframes marqueeAnimation{0%{transform:translateY(0)}50%{transform:translateY(0)}to{transform:translateY(-100%)}}@media(min-width:768px){.home-header{padding-bottom:60px;padding-top:130px;min-height:550px}.showBanner .home-header{padding-top:180px}.home-header .text{padding-bottom:40px}.home-header .text-bottom{display:flex;justify-content:space-between;align-items:flex-end;margin-top:20px;width:100%}.home-header .body-2{padding-right:30px}.home-header .button-container{margin-top:0;padding-bottom:0}.home-header svg{margin-top:0;margin-bottom:40px;width:80px}}@media(min-width:1025px){.home-header{padding-bottom:60px;padding-top:130px;min-height:700px}.home-header .body-header{padding-right:50px}.home-header .flex{flex-direction:row;align-items:flex-start}.home-header .flex,.home-header .text{justify-content:space-between;height:100%}.home-header .text{padding-bottom:40px;display:flex;flex-direction:column}.home-header .body-2{padding-right:30px}.home-header svg{margin-bottom:0;margin-top:10px;width:80px}}@media(min-width:1280px){.home-header{padding-bottom:60px;padding-top:130px;min-height:700px}.home-header .text{padding-bottom:40px}.home-header .body-2{padding-right:280px}.home-header svg{margin-top:10px;width:80px}}@media(min-width:1440px){.home-header{padding-bottom:60px;padding-top:130px;min-height:850px}.home-header .text{padding-bottom:40px}.home-header .body-2{padding-right:280px}.home-header svg{margin-top:10px;width:80px}}@media(min-width:1680px){.home-header{padding-bottom:3.5714285714vw;padding-top:7.7380952381vw;min-height:50.5952380952vw}.home-header .text{padding-bottom:2.380952381vw}.home-header svg{margin-top:.5952380952vw;width:4.7619047619vw}.home-header .body-2{padding-right:16.6666666667vw}}', ""]), t.exports = o
    }, , , , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        "use strict";
        n.r(e), n.d(e, "state", (function() {
            return r
        })), n.d(e, "mutations", (function() {
            return l
        })), n.d(e, "actions", (function() {
            return c
        })), n.d(e, "getters", (function() {
            return h
        }));
        n(38), n(52), n(14), n(326);
        var o = n(22),
            r = function() {
                return {
                    path: "https://nostalgic-shannon-d3c0db.netlify.app/",
                    allSections: [],
                    allInsights: [],
                    isDragPressed: !1,
                    isButtonGrab: !1,
                    showPopin: !1,
                    common: {},
                    slug: "",
                    isLinkCopied: !1,
                    isLoaderAnimationDone: !1,
                    isSeamlessTransition: !1,
                    currentSection: 0,
                    isPopinOutComplete: !0,
                    currentChapterSlug: "index",
                    isNavOpen: !1,
                    showBanner: !1,
                    insightSelected: null,
                    currentShapeId: -1
                }
            },
            l = {
                SET: function(t, e) {
                    t[e.property] = e.value
                },
                TOGGLE_NAV: function(t) {
                    t.isNavOpen = !t.isNavOpen
                },
                HIDE_BANNER: function(t) {
                    t.showBanner = !1
                }
            },
            c = {
                nuxtServerInit: function(t) {
                    var e = t.commit;
                    t.context;
                    return Object(o.a)("query commonQuery($locale: String!) {\n    footerLinkCollection(locale: $locale) {\n      items {\n        label\n        url\n      }\n    }\n    editionCollection(locale: $locale, order: publishDate_DESC) {\n      items {\n        title\n        slug\n        introduction\n        ctaColor\n        backgroundColor\n        titleColor\n      }\n    }\n    insightCollection(locale: $locale) {\n      items {\n        insight {\n          json\n        }\n        link\n        linkLabel\n        cta {\n          json\n        }\n        slug\n        title\n      }\n    }\n  }  \n", {
                        locale: this.$i18n.locale
                    }).then((function(data) {
                        data.insightCollection.items.map((function(element, i) {
                            element.position = i + 1, element = data.editionCollection.items.find((function(t) {
                                return t.slug === element.slug
                            }))
                        })), data.editionCollection.items.map((function(element, i) {
                            element.position = i + 1, element.insights = data.insightCollection.items.filter((function(t) {
                                return t.slug === element.slug
                            }))
                        })), e("SET", {
                            property: "common",
                            value: data.footerLinkCollection.items
                        }), e("SET", {
                            property: "allInsights",
                            value: data.insightCollection.items
                        }), e("SET", {
                            property: "allSections",
                            value: data.editionCollection.items
                        })
                    }))
                },
                set: function(t, e) {
                    (0, t.commit)("SET", e)
                },
                toggleNav: function(t, e) {
                    (0, t.commit)("TOGGLE_NAV", e)
                },
                hideBanner: function(t, e) {
                    (0, t.commit)("HIDE_BANNER", e)
                }
            },
            h = {
                section: function(t) {
                    return t.allInsights.find((function(e) {
                        return e.slug === t.route.params.slug
                    }))
                },
                insight: function(t) {
                    return t.allInsights.find((function(e) {
                        return e.slug === t.slug
                    }))
                },
                currentSectionId: function(t, e) {
                    return t.allSections.indexOf(e.section)
                },
                currentId: function(t) {
                    return t.allInsights.indexOf(t.allInsights.find((function(e) {
                        return e.slug === t.route.params.slug
                    })))
                },
                isTouch: function() {
                    try {
                        return document.createEvent("TouchEvent"), !0
                    } catch (t) {
                        return !1
                    }
                }
            }
    }]), [
        [327, 20, 16, 21]
    ]
]);