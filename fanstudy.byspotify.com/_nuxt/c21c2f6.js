(window.webpackJsonp = window.webpackJsonp || []).push([
    [18], {
        578: function(e, t, n) {
            "use strict";
            t.a = function(data) {
                var e = data.seoTitle,
                    t = void 0 === e ? "" : e,
                    n = data.seoDescription,
                    o = void 0 === n ? "" : n,
                    r = data.seoImage,
                    c = void 0 === r ? {} : r;
                return {
                    title: "".concat(t),
                    link: [{
                        rel: "icon shortcut",
                        href: "/icons/icon-index.png"
                    }],
                    meta: [{
                        hid: "description",
                        name: "description",
                        content: o
                    }, {
                        hid: "og:description",
                        property: "og:description",
                        content: o
                    }, {
                        hid: "twitter:description",
                        property: "twitter:description",
                        content: o
                    }, {
                        hid: "og:title",
                        property: "og:title",
                        content: "".concat(t)
                    }, {
                        hid: "og:image",
                        property: "og:image",
                        content: c.url
                    }, {
                        hid: "twitter:image",
                        property: "twitter:image",
                        content: c.url
                    }, {
                        hid: "apple-mobile-web-app-title",
                        property: "apple-mobile-web-app-title",
                        content: "".concat(t)
                    }, {
                        hid: "og:site_name",
                        property: "og:site_name",
                        content: "Spotify for Artists"
                    }]
                }
            }
        },
        579: function(e, t, n) {
            "use strict";
            t.a = "query homeContentQuery($locale: String!) {\n    homeContentCollection(locale: $locale) {\n      items {\n        title\n        introduction\n        color\n        footer {\n          json\n        }\n        seoTitle\n        seoDescription\n        seoImage {\n          url\n        }\n      }\n    }\n  }"
        },
        580: function(e, t, n) {
            var content = n(597);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(19).default)("2065e928", content, !0, {
                sourceMap: !1
            })
        },
        596: function(e, t, n) {
            "use strict";
            n(580)
        },
        597: function(e, t, n) {
            var o = n(18)(!1);
            o.push([e.i, ".home-page{position:relative}.home-page .insight-preview .link{pointer-events:none;opacity:0}.home-page .insight-preview .stroke-bottom{display:none}", ""]), e.exports = o
        },
        650: function(e, t, n) {
            "use strict";
            n.r(t);
            n(15), n(13), n(14), n(16), n(17);
            var o = n(34),
                r = n(5),
                c = n(10),
                l = (n(38), n(26), n(23), n(2)),
                h = n(579),
                f = n(22),
                d = n(8),
                m = n(578),
                y = n(20),
                v = n(121),
                header = n(203),
                w = n(99);

            function O(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }))), t.push.apply(t, n)
                }
                return t
            }

            function C(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? O(Object(source), !0).forEach((function(t) {
                        Object(r.a)(e, t, source[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : O(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }))
                }
                return e
            }
            var j = {
                    asyncData: function(e) {
                        return Object(c.a)(regeneratorRuntime.mark((function t() {
                            var n, o, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n = e.app.i18n.locale, t.next = 3, Object(f.a)(h.a, {
                                            locale: n
                                        });
                                    case 3:
                                        return o = t.sent, t.next = 6, Object(f.a)("query allEditionsQuery($locale: String!) {\n  editionCollection(locale: $locale, order: publishDate_DESC) {\n    total\n    items {\n      slug\n      title\n      introduction\n      backgroundColor\n      titleColor\n      ctaColor\n      publishDate\n      cover {\n        url\n      }\n      sys {\n        publishedAt\n      }\n    }\n  }\n}\n", {
                                            locale: n
                                        });
                                    case 6:
                                        return r = t.sent, t.abrupt("return", {
                                            homeContent: o.homeContentCollection,
                                            editionContent: Object(w.b)(r.editionCollection.items)
                                        });
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    head: function() {
                        var e = this.homeContent.items[0];
                        return Object(m.a)(e)
                    },
                    components: {
                        fragmentsChapter: v.default,
                        homeHeader: header.default
                    },
                    computed: C({}, Object(d.d)(["allSections"])),
                    methods: C(C({}, Object(d.b)(["set"])), {}, {
                        tick: function(e) {
                            if (e != this.scrollTop) {
                                var t = "index";
                                Object(o.a)(this.sectionsArray);
                                this.sectionsArray.forEach((function(element) {
                                    element.top < e && (t = element.slug)
                                })), this._currentChapter != t && (this._currentChapter = t, this.set({
                                    property: "currentChapterSlug",
                                    value: t
                                }))
                            }
                            this.scrollTop = e
                        },
                        resize: function(e, t) {
                            var n = this;
                            e && t && (this.w = e, this.h = t);
                            var o = this.w <= 768 ? this.h / 7 : this.h / 2;
                            this.sectionsArray.forEach((function(element, i) {
                                var e = Math.round(element.el.getBoundingClientRect().top + n.scrollTop);
                                element.top = e - o
                            })), this.$refs.header.resize(e, t), this.els.forEach((function(element) {
                                var e = element.el.getBoundingClientRect(),
                                    t = e.top,
                                    o = e.height;
                                element.top = t + n.scrollTop - 100, element.height = o
                            }))
                        },
                        show: function() {
                            var e, t;
                            l.a.fromTo(this.$el, {
                                opacity: 0
                            }, {
                                opacity: 1,
                                ease: "power3.out",
                                duration: 1
                            }), null === (e = this.$refs.header) || void 0 === e || e.show(), null === (t = this.$refs.chapters) || void 0 === t || t.forEach((function(e) {
                                return e.show()
                            }))
                        },
                        hide: function() {
                            l.a.to(this.$el, {
                                opacity: 0,
                                ease: "power3.in",
                                duration: .7
                            })
                        }
                    }),
                    watch: {},
                    beforeDestroy: function() {},
                    mounted: function() {
                        var e = this;
                        this.scrollTop = 0, this._currentChapter = "index", this.els = [], this.$refs.chapters.map((function(e) {
                            return e.$el
                        })).forEach((function(t) {
                            e.els.push({
                                el: t.querySelector(".chapter-title")
                            }), e.els.push({
                                el: t.querySelector(".chapter-introduction")
                            }), [].slice.call(e.$el.querySelectorAll(".edition-preview")).forEach((function(t) {
                                e.els.push({
                                    el: t
                                })
                            }))
                        })), this.sectionsArray = Object(o.a)(this.$refs.chapters.map((function(t, i) {
                            return {
                                el: t.$el,
                                slug: e.allSections[i].slug
                            }
                        }))), this.$nextTick((function() {
                            y.a.emit("PAGE:MOUNTED"), e.show()
                        })), this.set({
                            property: "isButtonGrab",
                            value: !1
                        }), this.set({
                            property: "currentChapterSlug",
                            value: "index"
                        })
                    }
                },
                $ = (n(596), n(7)),
                component = Object($.a)(j, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        staticClass: "home-page"
                    }, [n("home-header", {
                        ref: "header",
                        attrs: {
                            data: e.homeContent
                        }
                    }), e._v(" "), e._l(e.editionContent, (function(e) {
                        return n("fragments-chapter", {
                            key: e.slug,
                            ref: "chapters",
                            refInFor: !0,
                            attrs: {
                                data: e
                            }
                        })
                    }))], 2)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                HomeHeader: n(203).default,
                FragmentsChapter: n(121).default
            })
        }
    }
]);