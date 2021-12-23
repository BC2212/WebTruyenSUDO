/*!For license information please see all.js.LICENSE.txt*/
(() => {
    var e = {
            23: (e, t, n) => {
                window.$ = window.jQuery = n(755), window.Popper = n(981), n(734), $(document).ready((function() {
                    if ("undefined" != typeof Storage && void 0 !== localStorage.theme) {
                        var e = $("body");
                        "light" === localStorage.theme ? (e.addClass("text-ui-light"), e.removeClass("text-ui-dark")) : (e.removeClass("text-ui-light"), e.addClass("text-ui-dark"))
                    }
                    $(".off-menu #menu-main-menu-1 > li > a").on("click", (function() {
                        $(this).parent().find("ul.dropdown-menu").slideToggle()
                    })), $("body").on("click", (function() {
                        $(".ui-menu").hide()
                    })), $(".ui-autocomplete-input").on("keypress", (function() {
                        $(this).val().length > 0 && $(".close-form-search").show()
                    })), $(".ui-autocomplete-input").on("focus", (function() {
                        $(".close-form-search").hide()
                    })), $(".close-form-search").on("click", (function() {
                        $(".ui-autocomplete-input").val("")
                    }));
                    var t = window.location.href;
                    t.indexOf("#signin") >= 0 && $("#form-login").modal("show"), t.indexOf("#signup") >= 0 && $("#form-sign-up").modal("show"), $(".mobile-icon").on("click", (function() {
                        $(".sub-nav_list").toggleClass("active")
                    })), $(".stars").mousemove((function(e) {
                        var t = $(this).find(".stars-ghost").offset().left,
                            n = e.pageX;
                        $(this).find(".stars-ghost").width(n - t)
                    }));
                    var n, i, r = $(".menu_icon__open"),
                        o = $(".menu_icon__close"),
                        s = $(".off-canvas"),
                        a = $(".mobile-menu .btn-active-modal");
                    if (r.on("click", (function() {
                            r.addClass("active"), s.addClass("active"), $("body").addClass("open_canvas")
                        })), o.on("click", (function(e) {
                            e.preventDefault(), r.removeClass("active"), s.removeClass("active"), $("body").removeClass("open_canvas")
                        })), a.on("click", (function(e) {
                            e.preventDefault(), r.removeClass("active"), s.removeClass("active"), $("body").removeClass("open_canvas")
                        })), $(".main-menu-search .open-search-main-menu").on("click", (function() {
                            var e, t = $(this);
                            t.hasClass("search-open") ? (t.parents(".c-header__top").find(".search-main-menu").removeClass("active"), setTimeout((function() {
                                t.parents(".c-header__top").find(".search-main-menu").find('input[type="text"]').blur()
                            }), 200), t.removeClass("search-open"), $("body").hasClass("mobile") && (e = $(".link-adv-search", $("#blog-post-search"))).length > 0 && e.remove()) : (t.parents(".c-header__top").find(".search-main-menu").addClass("active"), setTimeout((function() {
                                t.parents(".c-header__top").find(".search-main-menu").find('input[type="text"]').focus()
                            }), 200), t.addClass("search-open"), $("body").hasClass("mobile") && (e = $(".link-adv-search", t.closest(".widget-manga-search"))).length > 0 && $("#blog-post-search").append(e.clone()))
                        })), $(".manga-search-field").on("keyup", (function(e) {
                            var t = $(this).val();
                            e.preventDefault(), $.ajax({
                                url: base_url + "/suggest",
                                type: "GET",
                                data: {
                                    name: t
                                },
                                success: function(e) {
                                    $(".ui-menu").html(""), "" === e ? $(".ui-menu").append(label_button_no_more) : $(".ui-menu").append(e), $(".ui-menu").attr("style", "display: block")
                                },
                                complete: function(e, t) {}
                            })
                        })), $(".c-chapter-readmore").on("click", (function() {
                            $(".box-list-chapter").removeClass("limit-height"), $(this).addClass("d-none")
                        })), $(".history").length && "undefined" != typeof Storage && void 0 !== localStorage["visited-comics"] && (n = JSON.parse(localStorage["visited-comics"])).length > 0) {
                        for (var l = 0, u = $(".widget-content.history-content"), c = $(".widget-content.history-content span").html(), d = n.length - 1; d >= 0; d--) {
                            var h = n[d],
                                f = '<div class="popular-item-wrap t-item"><div class="popular-img widget-thumbnail c-image-hover"><a title="' + h.name + '" href="' + h.url + '"><img width="70" height="60" class="img-responsive" src="' + h.image + '" alt="' + h.name + '"> </a></a></div><div class="popular-content"><div class="widget-title line-3"><a title="' + h.name + '" href="' + h.url + '">' + h.name + '</a></div><div class="list-chapter"><div class="chapter-item "><span class="chapter font-meta"><a href="' + h.chapterUrl + '" class="btn-link">' + h.chapterName + '</a></span><span class="view pull-right"><a class="visited-remove" href="#" data-id="' + h.id + '"><i class="icon ion-md-close"></i> Del</a></span></div></div></div></div>';
                            if (u.append(f), ++l > 2) break
                        }
                        u.append('<a class="widget-view-more" href="' + c + '">' + show_more + "</a>")
                    }
                    if ($(".tab-item-history").length && "undefined" != typeof Storage && void 0 !== localStorage["visited-comics"] && (i = JSON.parse(localStorage["visited-comics"])).length > 0) {
                        for (var p = 0, g = $(".tab-item-history .row"), m = "", v = i.length - 1; v >= 0; v--) {
                            var y = i[v];
                            if (m += '<div class="col-md-4"><div class="history-content"><div class="item-thumb"> <a title="' + y.name + '" href="' + y.url + '"><img width="100" height="60" class="img-responsive" src="' + y.image + '" alt="' + y.name + '"></a></div><div class="item-infor"><div class="settings-title"><h3 class="line-2 font-16"><a title="' + y.name + '" href="' + y.url + '">' + y.name + '</a></h3></div><div class="chapter"><span class="chap"><a href="' + y.chapterUrl + '" class="btn-link">' + y.chapterName + '</a></span></div></div><div class="action"><span class="view pull-right"><a class="visited-remove" href="#" data-id="' + y.id + '"><i class="icon ion-ios-close"></i></a></span></div></div></div>', ++p > 10) break
                        }
                        g.append(m)
                    }
                    $(".visited-remove").on("click", (function(e) {
                        e.preventDefault(), console.log($(this).data("id"));
                        var t = JSON.parse(localStorage["visited-comics"]),
                            n = $(this).data("id");
                        if (console.log("i la " + n), t.length > 0) {
                            var i = t.map((function(e) {
                                return e.id
                            })).indexOf(n);
                            i > -1 && (t.splice(i, 1), localStorage["visited-comics"] = JSON.stringify(t))
                        }
                        $(this).parents(".t-item").remove(), $(this).parents(".col-md-4").remove()
                    }))
                }))
            },
            164: () => {
                $(document).ready((function() {
                    $("#slide-top").owlCarousel({
                        loop: !0,
                        margin: 40,
                        nav: !0,
                        autoplay: 5e3,
                        responsive: {
                            0: {
                                items: 1.5
                            },
                            600: {
                                items: 3
                            },
                            1e3: {
                                items: 4
                            }
                        },
                        navText: ['<i class="icon ion-md-arrow-dropleft"></i>', '<i class="icon ion-md-arrow-dropright"></i>']
                    }), $(".load-ajax-last-update").on("click", (function() {
                        var e = $(this).attr("data-offset");
                        $.ajax({
                            url: base_url + "/loadMoreLasteStory",
                            type: "POST",
                            data: {
                                _token: $("#token").val(),
                                offset: e
                            },
                            beforeSend: function() {
                                $(".load-ajax-last-update").find(".load-title").append('<img width="40" height="40" src="assets/images/loading.gif" class="img-loading" />')
                            },
                            success: function(t) {
                                1 == t.status && ($(".manga-content .list-item").append(t.html), $(".load-ajax-last-update").attr("data-offset", parseInt(e) + 20), $(".load-ajax-last-update").find(".img-loading").remove(), "" == t.html && ($(".load-ajax-last-update").off("click"), $(".load-ajax-last-update").html(label_button_no_more)))
                            },
                            complete: function(e, t) {}
                        })
                    })), $(".rateit").each((function(e) {
                        $(this).on("rated reset", (function(e) {
                            $(this).rateit("readonly", !0)
                        }))
                    }))
                }))
            },
            978: (e, t, n) => {
                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, i(e)
                }
                var r, o;
                e = n.nmd(e), r = "undefined" != typeof window ? window : {}, o = function(e, t, n) {
                    "use strict";
                    var i, r;
                    if (function() {
                            var t, n = {
                                lazyClass: "lazyload",
                                loadedClass: "lazyloaded",
                                loadingClass: "lazyloading",
                                preloadClass: "lazypreload",
                                errorClass: "lazyerror",
                                autosizesClass: "lazyautosizes",
                                fastLoadedClass: "ls-is-cached",
                                iframeLoadMode: 0,
                                srcAttr: "data-src",
                                srcsetAttr: "data-srcset",
                                sizesAttr: "data-sizes",
                                minSize: 40,
                                customMedia: {},
                                init: !0,
                                expFactor: 1.5,
                                hFac: .8,
                                loadMode: 2,
                                loadHidden: !0,
                                ricTimeout: 0,
                                throttleDelay: 125
                            };
                            for (t in r = e.lazySizesConfig || e.lazysizesConfig || {}, n) t in r || (r[t] = n[t])
                        }(), !t || !t.getElementsByClassName) return {
                        init: function() {},
                        cfg: r,
                        noSupport: !0
                    };
                    var o = t.documentElement,
                        s = e.HTMLPictureElement,
                        a = "addEventListener",
                        l = "getAttribute",
                        u = e[a].bind(e),
                        c = e.setTimeout,
                        d = e.requestAnimationFrame || c,
                        h = e.requestIdleCallback,
                        f = /^picture$/i,
                        p = ["load", "error", "lazyincluded", "_lazyloaded"],
                        g = {},
                        m = Array.prototype.forEach,
                        v = function(e, t) {
                            return g[t] || (g[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), g[t].test(e[l]("class") || "") && g[t]
                        },
                        y = function(e, t) {
                            v(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
                        },
                        _ = function(e, t) {
                            var n;
                            (n = v(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(n, " "))
                        },
                        w = function e(t, n, i) {
                            var r = i ? a : "removeEventListener";
                            i && e(t, n), p.forEach((function(e) {
                                t[r](e, n)
                            }))
                        },
                        b = function(e, n, r, o, s) {
                            var a = t.createEvent("Event");
                            return r || (r = {}), r.instance = i, a.initEvent(n, !o, !s), a.detail = r, e.dispatchEvent(a), a
                        },
                        x = function(t, n) {
                            var i;
                            !s && (i = e.picturefill || r.pf) ? (n && n.src && !t[l]("srcset") && t.setAttribute("srcset", n.src), i({
                                reevaluate: !0,
                                elements: [t]
                            })) : n && n.src && (t.src = n.src)
                        },
                        C = function(e, t) {
                            return (getComputedStyle(e, null) || {})[t]
                        },
                        E = function(e, t, n) {
                            for (n = n || e.offsetWidth; n < r.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                            return n
                        },
                        T = function() {
                            var e, n, i = [],
                                r = [],
                                o = i,
                                s = function() {
                                    var t = o;
                                    for (o = i.length ? r : i, e = !0, n = !1; t.length;) t.shift()();
                                    e = !1
                                },
                                a = function(i, r) {
                                    e && !r ? i.apply(this, arguments) : (o.push(i), n || (n = !0, (t.hidden ? c : d)(s)))
                                };
                            return a._lsFlush = s, a
                        }(),
                        S = function(e, t) {
                            return t ? function() {
                                T(e)
                            } : function() {
                                var t = this,
                                    n = arguments;
                                T((function() {
                                    e.apply(t, n)
                                }))
                            }
                        },
                        D = function(e) {
                            var t, i = 0,
                                o = r.throttleDelay,
                                s = r.ricTimeout,
                                a = function() {
                                    t = !1, i = n.now(), e()
                                },
                                l = h && s > 49 ? function() {
                                    h(a, {
                                        timeout: s
                                    }), s !== r.ricTimeout && (s = r.ricTimeout)
                                } : S((function() {
                                    c(a)
                                }), !0);
                            return function(e) {
                                var r;
                                (e = !0 === e) && (s = 33), t || (t = !0, (r = o - (n.now() - i)) < 0 && (r = 0), e || r < 9 ? l() : c(l, r))
                            }
                        },
                        k = function(e) {
                            var t, i, r = function() {
                                    t = null, e()
                                },
                                o = function e() {
                                    var t = n.now() - i;
                                    t < 99 ? c(e, 99 - t) : (h || r)(r)
                                };
                            return function() {
                                i = n.now(), t || (t = c(o, 99))
                            }
                        },
                        A = function() {
                            var s, h, p, g, E, A, j, O, L, I, $, P, z = /^img$/i,
                                H = /^iframe$/i,
                                M = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                                q = 0,
                                R = 0,
                                F = -1,
                                W = function(e) {
                                    R--, (!e || R < 0 || !e.target) && (R = 0)
                                },
                                B = function(e) {
                                    return null == P && (P = "hidden" == C(t.body, "visibility")), P || !("hidden" == C(e.parentNode, "visibility") && "hidden" == C(e, "visibility"))
                                },
                                U = function(e, n) {
                                    var i, r = e,
                                        s = B(e);
                                    for (O -= n, $ += n, L -= n, I += n; s && (r = r.offsetParent) && r != t.body && r != o;)(s = (C(r, "opacity") || 1) > 0) && "visible" != C(r, "overflow") && (i = r.getBoundingClientRect(), s = I > i.left && L < i.right && $ > i.top - 1 && O < i.bottom + 1);
                                    return s
                                },
                                Q = function() {
                                    var e, n, a, u, c, d, f, p, m, v, y, _, w = i.elements;
                                    if ((g = r.loadMode) && R < 8 && (e = w.length)) {
                                        for (n = 0, F++; n < e; n++)
                                            if (w[n] && !w[n]._lazyRace)
                                                if (!M || i.prematureUnveil && i.prematureUnveil(w[n])) Z(w[n]);
                                                else if ((p = w[n][l]("data-expand")) && (d = 1 * p) || (d = q), v || (v = !r.expand || r.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : r.expand, i._defEx = v, y = v * r.expFactor, _ = r.hFac, P = null, q < y && R < 1 && F > 2 && g > 2 && !t.hidden ? (q = y, F = 0) : q = g > 1 && F > 1 && R < 6 ? v : 0), m !== d && (A = innerWidth + d * _, j = innerHeight + d, f = -1 * d, m = d), a = w[n].getBoundingClientRect(), ($ = a.bottom) >= f && (O = a.top) <= j && (I = a.right) >= f * _ && (L = a.left) <= A && ($ || I || L || O) && (r.loadHidden || B(w[n])) && (h && R < 3 && !p && (g < 3 || F < 4) || U(w[n], d))) {
                                            if (Z(w[n]), c = !0, R > 9) break
                                        } else !c && h && !u && R < 4 && F < 4 && g > 2 && (s[0] || r.preloadAfterLoad) && (s[0] || !p && ($ || I || L || O || "auto" != w[n][l](r.sizesAttr))) && (u = s[0] || w[n]);
                                        u && !c && Z(u)
                                    }
                                },
                                V = D(Q),
                                X = function(e) {
                                    var t = e.target;
                                    t._lazyCache ? delete t._lazyCache : (W(e), y(t, r.loadedClass), _(t, r.loadingClass), w(t, K), b(t, "lazyloaded"))
                                },
                                Y = S(X),
                                K = function(e) {
                                    Y({
                                        target: e.target
                                    })
                                },
                                G = function(e) {
                                    var t, n = e[l](r.srcsetAttr);
                                    (t = r.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
                                },
                                J = S((function(e, t, n, i, o) {
                                    var s, a, u, d, h, g;
                                    (h = b(e, "lazybeforeunveil", t)).defaultPrevented || (i && (n ? y(e, r.autosizesClass) : e.setAttribute("sizes", i)), a = e[l](r.srcsetAttr), s = e[l](r.srcAttr), o && (d = (u = e.parentNode) && f.test(u.nodeName || "")), g = t.firesLoad || "src" in e && (a || s || d), h = {
                                        target: e
                                    }, y(e, r.loadingClass), g && (clearTimeout(p), p = c(W, 2500), w(e, K, !0)), d && m.call(u.getElementsByTagName("source"), G), a ? e.setAttribute("srcset", a) : s && !d && (H.test(e.nodeName) ? function(e, t) {
                                        var n = e.getAttribute("data-load-mode") || r.iframeLoadMode;
                                        0 == n ? e.contentWindow.location.replace(t) : 1 == n && (e.src = t)
                                    }(e, s) : e.src = s), o && (a || d) && x(e, {
                                        src: s
                                    })), e._lazyRace && delete e._lazyRace, _(e, r.lazyClass), T((function() {
                                        var t = e.complete && e.naturalWidth > 1;
                                        g && !t || (t && y(e, r.fastLoadedClass), X(h), e._lazyCache = !0, c((function() {
                                            "_lazyCache" in e && delete e._lazyCache
                                        }), 9)), "lazy" == e.loading && R--
                                    }), !0)
                                })),
                                Z = function(e) {
                                    if (!e._lazyRace) {
                                        var t, n = z.test(e.nodeName),
                                            i = n && (e[l](r.sizesAttr) || e[l]("sizes")),
                                            o = "auto" == i;
                                        (!o && h || !n || !e[l]("src") && !e.srcset || e.complete || v(e, r.errorClass) || !v(e, r.lazyClass)) && (t = b(e, "lazyunveilread").detail, o && N.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, R++, J(e, t, o, i, n))
                                    }
                                },
                                ee = k((function() {
                                    r.loadMode = 3, V()
                                })),
                                te = function() {
                                    3 == r.loadMode && (r.loadMode = 2), ee()
                                },
                                ne = function e() {
                                    h || (n.now() - E < 999 ? c(e, 999) : (h = !0, r.loadMode = 3, V(), u("scroll", te, !0)))
                                };
                            return {
                                _: function() {
                                    E = n.now(), i.elements = t.getElementsByClassName(r.lazyClass), s = t.getElementsByClassName(r.lazyClass + " " + r.preloadClass), u("scroll", V, !0), u("resize", V, !0), u("pageshow", (function(e) {
                                        if (e.persisted) {
                                            var n = t.querySelectorAll("." + r.loadingClass);
                                            n.length && n.forEach && d((function() {
                                                n.forEach((function(e) {
                                                    e.complete && Z(e)
                                                }))
                                            }))
                                        }
                                    })), e.MutationObserver ? new MutationObserver(V).observe(o, {
                                        childList: !0,
                                        subtree: !0,
                                        attributes: !0
                                    }) : (o[a]("DOMNodeInserted", V, !0), o[a]("DOMAttrModified", V, !0), setInterval(V, 999)), u("hashchange", V, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                        t[a](e, V, !0)
                                    })), /d$|^c/.test(t.readyState) ? ne() : (u("load", ne), t[a]("DOMContentLoaded", V), c(ne, 2e4)), i.elements.length ? (Q(), T._lsFlush()) : V()
                                },
                                checkElems: V,
                                unveil: Z,
                                _aLSL: te
                            }
                        }(),
                        N = function() {
                            var e, n = S((function(e, t, n, i) {
                                    var r, o, s;
                                    if (e._lazysizesWidth = i, i += "px", e.setAttribute("sizes", i), f.test(t.nodeName || ""))
                                        for (o = 0, s = (r = t.getElementsByTagName("source")).length; o < s; o++) r[o].setAttribute("sizes", i);
                                    n.detail.dataAttr || x(e, n.detail)
                                })),
                                i = function(e, t, i) {
                                    var r, o = e.parentNode;
                                    o && (i = E(e, o, i), r = b(e, "lazybeforesizes", {
                                        width: i,
                                        dataAttr: !!t
                                    }), r.defaultPrevented || (i = r.detail.width) && i !== e._lazysizesWidth && n(e, o, r, i))
                                },
                                o = k((function() {
                                    var t, n = e.length;
                                    if (n)
                                        for (t = 0; t < n; t++) i(e[t])
                                }));
                            return {
                                _: function() {
                                    e = t.getElementsByClassName(r.autosizesClass), u("resize", o)
                                },
                                checkElems: o,
                                updateElem: i
                            }
                        }(),
                        j = function e() {
                            !e.i && t.getElementsByClassName && (e.i = !0, N._(), A._())
                        };
                    return c((function() {
                        r.init && j()
                    })), i = {
                        cfg: r,
                        autoSizer: N,
                        loader: A,
                        init: j,
                        uP: x,
                        aC: y,
                        rC: _,
                        hC: v,
                        fire: b,
                        gW: E,
                        rAF: T
                    }
                }(r, r.document, Date), r.lazySizes = o, "object" == i(e) && e.exports && (e.exports = o)
            },
            707: () => {
                jQuery(document).ready((function(e) {
                    var t = {
                            messages: {
                                please_enter_username: "Please enter username",
                                please_enter_password: "Please enter password",
                                register_faile: "This email is already in use or this password is less than 5 characters. Please try again or use the forgot password feature",
                                invalid_username_or_password: "Invalid username or password, Please try again!",
                                server_error: "Server Error!",
                                username_or_email_cannot_be_empty: "Username or Email cannot be empty",
                                please_fill_all_fields: "Please fill in all password fields.",
                                password_cannot_less_than_12: "Password cannot has less than 12 characters",
                                password_doesnot_match: "Password doesn&#039;t match. Please  try again.",
                                username_cannot_empty: "Username cannot be empty",
                                email_cannot_empty: "Email cannot be empty",
                                password_cannot_empty: "Password cannot be empty"
                            }
                        },
                        n = '<div class="modal-loading-screen"><div class="fa-5x"><img width="40" height="40" src="assets/images/loading.gif" class="img-loading" /></div></div>';
                    e(".modal form").each((function() {
                        if (0 !== e(this).find(".g-recaptcha").length) {
                            var t = e(this).find('input[type="submit"]');
                            void 0 !== t && t.prop("disabled", !0)
                        }
                    })), e(document).on("click", 'form#registerform input[name="wp-submit"]', (function(i) {
                        i.preventDefault();
                        var r = e("#registerform input[name='user_sign-up']").val(),
                            o = e("#registerform input[name='pass_sign-up']").val(),
                            s = e("#registerform input[name='email_sign-up']").val(),
                            a = (e("#registerform .g-recaptcha-response").val(), e("#register_url").val()),
                            l = e("#token").val(),
                            u = e(".c-modal_item"),
                            c = e(this).parents(".modal-content");
                        return "" === r ? (e("p.message.register").text(t.messages.username_cannot_empty), !1) : "" === s ? (e("p.message.register").text(t.messages.email_cannot_empty), !1) : "" === o ? (e("p.message.sign-up").text(t.messages.password_cannot_empty), !1) : (jQuery.ajax({
                            url: a,
                            type: "POST",
                            data: {
                                name: r,
                                password: o,
                                email: s,
                                _token: l
                            },
                            beforeSend: function() {
                                c.append(n)
                            },
                            success: function(t) {
                                if (t.success) {
                                    if (e(".modal#form-sign-up").hide(), e(".modal-backdrop").hide(), e(document).trigger("manga-login-success"), e("body").addClass("logged-in"), 0 != u.length) u.html();
                                    u.empty(), u.append(t.data)
                                } else console.log("data"), e("p.message.register").html(t.data)
                            },
                            complete: function() {
                                var e = c.find(".modal-loading-screen");
                                void 0 !== e && e.remove()
                            },
                            error: function(n, i, r) {
                                e("p.message.register").text(t.messages.register_faile)
                            }
                        }), !1)
                    })), e(document).on("click", 'form#loginform input[name="wp-submit"]', (function(i) {
                        if (i.preventDefault(), !e("body").hasClass("logged-in")) {
                            var r = e("#loginform input[name='log']").val(),
                                o = e("#loginform input[name='pwd']").val(),
                                s = e("#loginform input[name='rememberme']").val(),
                                a = e(".c-modal_item"),
                                l = e("#login_url").val(),
                                u = e("#token").val();
                            console.log("login url = " + l);
                            var c = e(this).parents(".modal-content");
                            return "" == r ? (e("p.message.login").text(t.messages.email_cannot_empty), !1) : "" == o ? (e("p.message.login").text(t.messages.password_cannot_empty), !1) : (jQuery.ajax({
                                url: l,
                                type: "POST",
                                dataType: "json",
                                data: {
                                    email: r,
                                    password: o,
                                    remember: s,
                                    _token: u
                                },
                                beforeSend: function() {
                                    c.append(n)
                                },
                                success: function(t) {
                                    if (1 == t.success) {
                                        if (e(".modal#form-login").hide(), e(".modal-backdrop").hide(), e(document).trigger("manga-login-success"), e("body").addClass("logged-in"), 0 != a.length) a.html();
                                        a.empty(), a.append(t.data)
                                    }
                                },
                                complete: function(e, t) {
                                    var n = c.find(".modal-loading-screen");
                                    void 0 !== n && n.remove()
                                },
                                error: function(n, i, r) {
                                    e("p.message.login").text(t.messages.invalid_username_or_password)
                                }
                            }), !1)
                        }
                    })), e(document).on("click", 'form#resetform input[name="wp-submit"]', (function(i) {
                        i.preventDefault();
                        var r = e('input[name="user_reset"]').val(),
                            o = e("#token").val();
                        if ("" == r) return e("p.message.reset").text(t.messages.username_or_email_cannot_be_empty), !1;
                        var s = e("#reset_url").val(),
                            a = e(this).parents(".modal-content");
                        jQuery.ajax({
                            url: s,
                            type: "POST",
                            data: {
                                email: r,
                                _token: o
                            },
                            beforeSend: function() {
                                a.append(n)
                            },
                            success: function(t) {
                                console.log(t), t.success ? (e("form#resetform").fadeOut(), e("p.message.reset").text(t.data), setInterval((function() {
                                    e("form#resetform").fadeIn(), e("p.message.reset").text("")
                                }), 1e4)) : e("p.message.reset").html(t.data)
                            },
                            complete: function() {
                                var e = a.find(".modal-loading-screen");
                                void 0 !== e && e.remove()
                            }
                        })
                    })), e("#resetpasswordform").on("submit", (function(n) {
                        n.preventDefault();
                        var i = e(this),
                            r = i.find('input[name="pass_1"]').val(),
                            o = i.find('input[name="pass_2"]').val(),
                            s = i.find('input[name="user"]').val(),
                            a = i.find('input[name="key"]').val(),
                            l = e("#form-reset-password .message.reset-password"),
                            u = i.parents(".modal-content");
                        return "" == r || "" == o ? (l.text(t.messages.please_fill_all_fields), !1) : r.length < 12 ? (l.text(t.messages.password_cannot_less_than_12), !1) : r !== o ? (l.text(t.messages.password_doesnot_match), !1) : void e.ajax({
                            url: t.admin_ajax,
                            method: "POST",
                            data: {
                                action: "/admin/",
                                user: s,
                                new_password: window.btoa(r),
                                key: a
                            },
                            beforeSend: function() {
                                u.append('<div class="modal-loading-screen"><div class="fa-5x"><img width="40" height="40" src="assets/images/loading.gif" class="img-loading" /></div></div>')
                            },
                            success: function(e) {
                                e.success && (l.text(e.data.message), i.find("input").remove(), setInterval((function() {
                                    i.remove()
                                }), 5e3))
                            },
                            complete: function() {
                                u.find(".modal-loading-screen").remove()
                            }
                        })
                    })), e(document).on("click", ".to-login", (function(t) {
                        t.preventDefault(), e(".modal").hide(), setTimeout((function() {
                            e("#form-login").show()
                        }), 500)
                    })), e(document).on("click", ".to-reset", (function(t) {
                        t.preventDefault(), e(".modal#form-login").modal("hide"), setTimeout((function() {
                            e("#form-reset").modal("show")
                        }), 500)
                    })), e(document).on("click", ".backtoblog", (function(t) {
                        e(".modal").hide()
                    }))
                }))
            },
            822: () => {
                function e(t) {
                    return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, e(t)
                }
                var t, n, i;
                ! function(t, n, i, r) {
                    function o(e, n) {
                        this.settings = null, this.options = t.extend({}, o.Defaults, n), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                            time: null,
                            target: null,
                            pointer: null,
                            stage: {
                                start: null,
                                current: null
                            },
                            direction: null
                        }, this._states = {
                            current: {},
                            tags: {
                                initializing: ["busy"],
                                animating: ["busy"],
                                dragging: ["interacting"]
                            }
                        }, t.each(["onResize", "onThrottledResize"], t.proxy((function(e, n) {
                            this._handlers[n] = t.proxy(this[n], this)
                        }), this)), t.each(o.Plugins, t.proxy((function(e, t) {
                            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
                        }), this)), t.each(o.Workers, t.proxy((function(e, n) {
                            this._pipe.push({
                                filter: n.filter,
                                run: t.proxy(n.run, this)
                            })
                        }), this)), this.setup(), this.initialize()
                    }
                    o.Defaults = {
                        items: 3,
                        loop: !1,
                        center: !1,
                        rewind: !1,
                        checkVisibility: !0,
                        mouseDrag: !0,
                        touchDrag: !0,
                        pullDrag: !0,
                        freeDrag: !1,
                        margin: 0,
                        stagePadding: 0,
                        merge: !1,
                        mergeFit: !0,
                        autoWidth: !1,
                        startPosition: 0,
                        rtl: !1,
                        smartSpeed: 250,
                        fluidSpeed: !1,
                        dragEndSpeed: !1,
                        responsive: {},
                        responsiveRefreshRate: 200,
                        responsiveBaseElement: n,
                        fallbackEasing: "swing",
                        slideTransition: "",
                        info: !1,
                        nestedItemSelector: !1,
                        itemElement: "div",
                        stageElement: "div",
                        refreshClass: "owl-refresh",
                        loadedClass: "owl-loaded",
                        loadingClass: "owl-loading",
                        rtlClass: "owl-rtl",
                        responsiveClass: "owl-responsive",
                        dragClass: "owl-drag",
                        itemClass: "owl-item",
                        stageClass: "owl-stage",
                        stageOuterClass: "owl-stage-outer",
                        grabClass: "owl-grab"
                    }, o.Width = {
                        Default: "default",
                        Inner: "inner",
                        Outer: "outer"
                    }, o.Type = {
                        Event: "event",
                        State: "state"
                    }, o.Plugins = {}, o.Workers = [{
                        filter: ["width", "settings"],
                        run: function() {
                            this._width = this.$element.width()
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(e) {
                            e.current = this._items && this._items[this.relative(this._current)]
                        }
                    }, {
                        filter: ["items", "settings"],
                        run: function() {
                            this.$stage.children(".cloned").remove()
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(e) {
                            var t = this.settings.margin || "",
                                n = !this.settings.autoWidth,
                                i = this.settings.rtl,
                                r = {
                                    width: "auto",
                                    "margin-left": i ? t : "",
                                    "margin-right": i ? "" : t
                                };
                            !n && this.$stage.children().css(r), e.css = r
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(e) {
                            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                                n = null,
                                i = this._items.length,
                                r = !this.settings.autoWidth,
                                o = [];
                            for (e.items = {
                                    merge: !1,
                                    width: t
                                }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, e.items.merge = n > 1 || e.items.merge, o[i] = r ? t * n : this._items[i].width();
                            this._widths = o
                        }
                    }, {
                        filter: ["items", "settings"],
                        run: function() {
                            var e = [],
                                n = this._items,
                                i = this.settings,
                                r = Math.max(2 * i.items, 4),
                                o = 2 * Math.ceil(n.length / 2),
                                s = i.loop && n.length ? i.rewind ? r : Math.max(r, o) : 0,
                                a = "",
                                l = "";
                            for (s /= 2; s > 0;) e.push(this.normalize(e.length / 2, !0)), a += n[e[e.length - 1]][0].outerHTML, e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)), l = n[e[e.length - 1]][0].outerHTML + l, s -= 1;
                            this._clones = e, t(a).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function() {
                            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, n = -1, i = 0, r = 0, o = []; ++n < t;) i = o[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, o.push(i + r * e);
                            this._coordinates = o
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function() {
                            var e = this.settings.stagePadding,
                                t = this._coordinates,
                                n = {
                                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                                    "padding-left": e || "",
                                    "padding-right": e || ""
                                };
                            this.$stage.css(n)
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(e) {
                            var t = this._coordinates.length,
                                n = !this.settings.autoWidth,
                                i = this.$stage.children();
                            if (n && e.items.merge)
                                for (; t--;) e.css.width = this._widths[this.relative(t)], i.eq(t).css(e.css);
                            else n && (e.css.width = e.items.width, i.css(e.css))
                        }
                    }, {
                        filter: ["items"],
                        run: function() {
                            this._coordinates.length < 1 && this.$stage.removeAttr("style")
                        }
                    }, {
                        filter: ["width", "items", "settings"],
                        run: function(e) {
                            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
                        }
                    }, {
                        filter: ["position"],
                        run: function() {
                            this.animate(this.coordinates(this._current))
                        }
                    }, {
                        filter: ["width", "position", "items", "settings"],
                        run: function() {
                            var e, t, n, i, r = this.settings.rtl ? 1 : -1,
                                o = 2 * this.settings.stagePadding,
                                s = this.coordinates(this.current()) + o,
                                a = s + this.width() * r,
                                l = [];
                            for (n = 0, i = this._coordinates.length; n < i; n++) e = this._coordinates[n - 1] || 0, t = Math.abs(this._coordinates[n]) + o * r, (this.op(e, "<=", s) && this.op(e, ">", a) || this.op(t, "<", s) && this.op(t, ">", a)) && l.push(n);
                            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                        }
                    }], o.prototype.initializeStage = function() {
                        this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                            class: this.settings.stageClass
                        }).wrap(t("<div/>", {
                            class: this.settings.stageOuterClass
                        })), this.$element.append(this.$stage.parent()))
                    }, o.prototype.initializeItems = function() {
                        var e = this.$element.find(".owl-item");
                        if (e.length) return this._items = e.get().map((function(e) {
                            return t(e)
                        })), this._mergers = this._items.map((function() {
                            return 1
                        })), void this.refresh();
                        this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
                    }, o.prototype.initialize = function() {
                        var e, t, n;
                        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (e = this.$element.find("img"), t = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(t).width(), e.length && n <= 0 && this.preloadAutoWidthImages(e));
                        this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
                    }, o.prototype.isVisible = function() {
                        return !this.settings.checkVisibility || this.$element.is(":visible")
                    }, o.prototype.setup = function() {
                        var e = this.viewport(),
                            n = this.options.responsive,
                            i = -1,
                            r = null;
                        n ? (t.each(n, (function(t) {
                            t <= e && t > i && (i = Number(t))
                        })), "function" == typeof(r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : r = t.extend({}, this.options), this.trigger("change", {
                            property: {
                                name: "settings",
                                value: r
                            }
                        }), this._breakpoint = i, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
                            property: {
                                name: "settings",
                                value: this.settings
                            }
                        })
                    }, o.prototype.optionsLogic = function() {
                        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
                    }, o.prototype.prepare = function(e) {
                        var n = this.trigger("prepare", {
                            content: e
                        });
                        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                            content: n.data
                        }), n.data
                    }, o.prototype.update = function() {
                        for (var e = 0, n = this._pipe.length, i = t.proxy((function(e) {
                                return this[e]
                            }), this._invalidated), r = {}; e < n;)(this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r), e++;
                        this._invalidated = {}, !this.is("valid") && this.enter("valid")
                    }, o.prototype.width = function(e) {
                        switch (e = e || o.Width.Default) {
                            case o.Width.Inner:
                            case o.Width.Outer:
                                return this._width;
                            default:
                                return this._width - 2 * this.settings.stagePadding + this.settings.margin
                        }
                    }, o.prototype.refresh = function() {
                        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
                    }, o.prototype.onThrottledResize = function() {
                        n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
                    }, o.prototype.onResize = function() {
                        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
                    }, o.prototype.registerEventHandlers = function() {
                        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", (function() {
                            return !1
                        }))), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
                    }, o.prototype.onDragStart = function(e) {
                        var n = null;
                        3 !== e.which && (t.support.transform ? n = {
                            x: (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === n.length ? 12 : 4],
                            y: n[16 === n.length ? 13 : 5]
                        } : (n = this.$stage.position(), n = {
                            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
                            y: n.top
                        }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy((function(e) {
                            var n = this.difference(this._drag.pointer, this.pointer(e));
                            t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                        }), this)))
                    }, o.prototype.onDragMove = function(e) {
                        var t = null,
                            n = null,
                            i = null,
                            r = this.difference(this._drag.pointer, this.pointer(e)),
                            o = this.difference(this._drag.stage.start, r);
                        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - t, o.x = ((o.x - t) % n + n) % n + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * r.x / 5 : 0, o.x = Math.max(Math.min(o.x, t + i), n + i)), this._drag.stage.current = o, this.animate(o.x))
                    }, o.prototype.onDragEnd = function(e) {
                        var n = this.difference(this._drag.pointer, this.pointer(e)),
                            r = this._drag.stage.current,
                            o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
                        t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", (function() {
                            return !1
                        }))), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
                    }, o.prototype.closest = function(e, n) {
                        var i = -1,
                            o = this.width(),
                            s = this.coordinates();
                        return this.settings.freeDrag || t.each(s, t.proxy((function(t, a) {
                            return "left" === n && e > a - 30 && e < a + 30 ? i = t : "right" === n && e > a - o - 30 && e < a - o + 30 ? i = t + 1 : this.op(e, "<", a) && this.op(e, ">", s[t + 1] !== r ? s[t + 1] : a - o) && (i = "left" === n ? t + 1 : t), -1 === i
                        }), this)), this.settings.loop || (this.op(e, ">", s[this.minimum()]) ? i = e = this.minimum() : this.op(e, "<", s[this.maximum()]) && (i = e = this.maximum())), i
                    }, o.prototype.animate = function(e) {
                        var n = this.speed() > 0;
                        this.is("animating") && this.onTransitionEnd(), n && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                            transform: "translate3d(" + e + "px,0px,0px)",
                            transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                        }) : n ? this.$stage.animate({
                            left: e + "px"
                        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                            left: e + "px"
                        })
                    }, o.prototype.is = function(e) {
                        return this._states.current[e] && this._states.current[e] > 0
                    }, o.prototype.current = function(e) {
                        if (e === r) return this._current;
                        if (0 === this._items.length) return r;
                        if (e = this.normalize(e), this._current !== e) {
                            var t = this.trigger("change", {
                                property: {
                                    name: "position",
                                    value: e
                                }
                            });
                            t.data !== r && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                                property: {
                                    name: "position",
                                    value: this._current
                                }
                            })
                        }
                        return this._current
                    }, o.prototype.invalidate = function(e) {
                        return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, (function(e, t) {
                            return t
                        }))
                    }, o.prototype.reset = function(e) {
                        (e = this.normalize(e)) !== r && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
                    }, o.prototype.normalize = function(e, t) {
                        var n = this._items.length,
                            i = t ? 0 : this._clones.length;
                        return !this.isNumeric(e) || n < 1 ? e = r : (e < 0 || e >= n + i) && (e = ((e - i / 2) % n + n) % n + i / 2), e
                    }, o.prototype.relative = function(e) {
                        return e -= this._clones.length / 2, this.normalize(e, !0)
                    }, o.prototype.maximum = function(e) {
                        var t, n, i, r = this.settings,
                            o = this._coordinates.length;
                        if (r.loop) o = this._clones.length / 2 + this._items.length - 1;
                        else if (r.autoWidth || r.merge) {
                            if (t = this._items.length)
                                for (n = this._items[--t].width(), i = this.$element.width(); t-- && !((n += this._items[t].width() + this.settings.margin) > i););
                            o = t + 1
                        } else o = r.center ? this._items.length - 1 : this._items.length - r.items;
                        return e && (o -= this._clones.length / 2), Math.max(o, 0)
                    }, o.prototype.minimum = function(e) {
                        return e ? 0 : this._clones.length / 2
                    }, o.prototype.items = function(e) {
                        return e === r ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
                    }, o.prototype.mergers = function(e) {
                        return e === r ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
                    }, o.prototype.clones = function(e) {
                        var n = this._clones.length / 2,
                            i = n + this._items.length,
                            o = function(e) {
                                return e % 2 == 0 ? i + e / 2 : n - (e + 1) / 2
                            };
                        return e === r ? t.map(this._clones, (function(e, t) {
                            return o(t)
                        })) : t.map(this._clones, (function(t, n) {
                            return t === e ? o(n) : null
                        }))
                    }, o.prototype.speed = function(e) {
                        return e !== r && (this._speed = e), this._speed
                    }, o.prototype.coordinates = function(e) {
                        var n, i = 1,
                            o = e - 1;
                        return e === r ? t.map(this._coordinates, t.proxy((function(e, t) {
                            return this.coordinates(t)
                        }), this)) : (this.settings.center ? (this.settings.rtl && (i = -1, o = e + 1), n = this._coordinates[e], n += (this.width() - n + (this._coordinates[o] || 0)) / 2 * i) : n = this._coordinates[o] || 0, n = Math.ceil(n))
                    }, o.prototype.duration = function(e, t, n) {
                        return 0 === n ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(n || this.settings.smartSpeed)
                    }, o.prototype.to = function(e, t) {
                        var n = this.current(),
                            i = null,
                            r = e - this.relative(n),
                            o = (r > 0) - (r < 0),
                            s = this._items.length,
                            a = this.minimum(),
                            l = this.maximum();
                        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > s / 2 && (r += -1 * o * s), (i = (((e = n + r) - a) % s + s) % s + a) !== e && i - r <= l && i - r > 0 && (n = i - r, e = i, this.reset(n))) : this.settings.rewind ? e = (e % (l += 1) + l) % l : e = Math.max(a, Math.min(l, e)), this.speed(this.duration(n, e, t)), this.current(e), this.isVisible() && this.update()
                    }, o.prototype.next = function(e) {
                        e = e || !1, this.to(this.relative(this.current()) + 1, e)
                    }, o.prototype.prev = function(e) {
                        e = e || !1, this.to(this.relative(this.current()) - 1, e)
                    }, o.prototype.onTransitionEnd = function(e) {
                        if (e !== r && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0))) return !1;
                        this.leave("animating"), this.trigger("translated")
                    }, o.prototype.viewport = function() {
                        var e;
                        return this.options.responsiveBaseElement !== n ? e = t(this.options.responsiveBaseElement).width() : n.innerWidth ? e = n.innerWidth : i.documentElement && i.documentElement.clientWidth ? e = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
                    }, o.prototype.replace = function(e) {
                        this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter((function() {
                            return 1 === this.nodeType
                        })).each(t.proxy((function(e, t) {
                            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                        }), this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
                    }, o.prototype.add = function(e, n) {
                        var i = this.relative(this._current);
                        n = n === r ? this._items.length : this.normalize(n, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", {
                            content: e,
                            position: n
                        }), e = this.prepare(e), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[n - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e), this._items.splice(n, 0, e), this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
                            content: e,
                            position: n
                        })
                    }, o.prototype.remove = function(e) {
                        (e = this.normalize(e, !0)) !== r && (this.trigger("remove", {
                            content: this._items[e],
                            position: e
                        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
                            content: null,
                            position: e
                        }))
                    }, o.prototype.preloadAutoWidthImages = function(e) {
                        e.each(t.proxy((function(e, n) {
                            this.enter("pre-loading"), n = t(n), t(new Image).one("load", t.proxy((function(e) {
                                n.attr("src", e.target.src), n.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                            }), this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
                        }), this))
                    }, o.prototype.destroy = function() {
                        for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
                        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
                    }, o.prototype.op = function(e, t, n) {
                        var i = this.settings.rtl;
                        switch (t) {
                            case "<":
                                return i ? e > n : e < n;
                            case ">":
                                return i ? e < n : e > n;
                            case ">=":
                                return i ? e <= n : e >= n;
                            case "<=":
                                return i ? e >= n : e <= n
                        }
                    }, o.prototype.on = function(e, t, n, i) {
                        e.addEventListener ? e.addEventListener(t, n, i) : e.attachEvent && e.attachEvent("on" + t, n)
                    }, o.prototype.off = function(e, t, n, i) {
                        e.removeEventListener ? e.removeEventListener(t, n, i) : e.detachEvent && e.detachEvent("on" + t, n)
                    }, o.prototype.trigger = function(e, n, i, r, s) {
                        var a = {
                                item: {
                                    count: this._items.length,
                                    index: this.current()
                                }
                            },
                            l = t.camelCase(t.grep(["on", e, i], (function(e) {
                                return e
                            })).join("-").toLowerCase()),
                            u = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
                                relatedTarget: this
                            }, a, n));
                        return this._supress[e] || (t.each(this._plugins, (function(e, t) {
                            t.onTrigger && t.onTrigger(u)
                        })), this.register({
                            type: o.Type.Event,
                            name: e
                        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
                    }, o.prototype.enter = function(e) {
                        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(e, t) {
                            this._states.current[t] === r && (this._states.current[t] = 0), this._states.current[t]++
                        }), this))
                    }, o.prototype.leave = function(e) {
                        t.each([e].concat(this._states.tags[e] || []), t.proxy((function(e, t) {
                            this._states.current[t]--
                        }), this))
                    }, o.prototype.register = function(e) {
                        if (e.type === o.Type.Event) {
                            if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                                var n = t.event.special[e.name]._default;
                                t.event.special[e.name]._default = function(e) {
                                    return !n || !n.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                                }, t.event.special[e.name].owl = !0
                            }
                        } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy((function(n, i) {
                            return t.inArray(n, this._states.tags[e.name]) === i
                        }), this)))
                    }, o.prototype.suppress = function(e) {
                        t.each(e, t.proxy((function(e, t) {
                            this._supress[t] = !0
                        }), this))
                    }, o.prototype.release = function(e) {
                        t.each(e, t.proxy((function(e, t) {
                            delete this._supress[t]
                        }), this))
                    }, o.prototype.pointer = function(e) {
                        var t = {
                            x: null,
                            y: null
                        };
                        return (e = (e = e.originalEvent || e || n.event).touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e).pageX ? (t.x = e.pageX, t.y = e.pageY) : (t.x = e.clientX, t.y = e.clientY), t
                    }, o.prototype.isNumeric = function(e) {
                        return !isNaN(parseFloat(e))
                    }, o.prototype.difference = function(e, t) {
                        return {
                            x: e.x - t.x,
                            y: e.y - t.y
                        }
                    }, t.fn.owlCarousel = function(n) {
                        var i = Array.prototype.slice.call(arguments, 1);
                        return this.each((function() {
                            var r = t(this),
                                s = r.data("owl.carousel");
                            s || (s = new o(this, "object" == e(n) && n), r.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], (function(e, n) {
                                s.register({
                                    type: o.Type.Event,
                                    name: n
                                }), s.$element.on(n + ".owl.carousel.core", t.proxy((function(e) {
                                    e.namespace && e.relatedTarget !== this && (this.suppress([n]), s[n].apply(this, [].slice.call(arguments, 1)), this.release([n]))
                                }), s))
                            }))), "string" == typeof n && "_" !== n.charAt(0) && s[n].apply(s, i)
                        }))
                    }, t.fn.owlCarousel.Constructor = o
                }(window.Zepto || window.jQuery, window, document), t = window.Zepto || window.jQuery, n = window, document, i = function e(n) {
                        this._core = n, this._interval = null, this._visible = null, this._handlers = {
                            "initialized.owl.carousel": t.proxy((function(e) {
                                e.namespace && this._core.settings.autoRefresh && this.watch()
                            }), this)
                        }, this._core.options = t.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
                    }, i.Defaults = {
                        autoRefresh: !0,
                        autoRefreshInterval: 500
                    }, i.prototype.watch = function() {
                        this._interval || (this._visible = this._core.isVisible(), this._interval = n.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
                    }, i.prototype.refresh = function() {
                        this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
                    }, i.prototype.destroy = function() {
                        var e, t;
                        for (e in n.clearInterval(this._interval), this._handlers) this._core.$element.off(e, this._handlers[e]);
                        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                    }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i,
                    function(e, t, n, i) {
                        var r = function t(n) {
                            this._core = n, this._loaded = [], this._handlers = {
                                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy((function(t) {
                                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                                        var n = this._core.settings,
                                            i = n.center && Math.ceil(n.items / 2) || n.items,
                                            r = n.center && -1 * i || 0,
                                            o = (t.property && undefined !== t.property.value ? t.property.value : this._core.current()) + r,
                                            s = this._core.clones().length,
                                            a = e.proxy((function(e, t) {
                                                this.load(t)
                                            }), this);
                                        for (n.lazyLoadEager > 0 && (i += n.lazyLoadEager, n.loop && (o -= n.lazyLoadEager, i++)); r++ < i;) this.load(s / 2 + this._core.relative(o)), s && e.each(this._core.clones(this._core.relative(o)), a), o++
                                    }
                                }), this)
                            }, this._core.options = e.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers)
                        };
                        r.Defaults = {
                            lazyLoad: !1,
                            lazyLoadEager: 0
                        }, r.prototype.load = function(n) {
                            var i = this._core.$stage.children().eq(n),
                                r = i && i.find(".owl-lazy");
                            !r || e.inArray(i.get(0), this._loaded) > -1 || (r.each(e.proxy((function(n, i) {
                                var r, o = e(i),
                                    s = t.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                                this._core.trigger("load", {
                                    element: o,
                                    url: s
                                }, "lazy"), o.is("img") ? o.one("load.owl.lazy", e.proxy((function() {
                                    o.css("opacity", 1), this._core.trigger("loaded", {
                                        element: o,
                                        url: s
                                    }, "lazy")
                                }), this)).attr("src", s) : o.is("source") ? o.one("load.owl.lazy", e.proxy((function() {
                                    this._core.trigger("loaded", {
                                        element: o,
                                        url: s
                                    }, "lazy")
                                }), this)).attr("srcset", s) : ((r = new Image).onload = e.proxy((function() {
                                    o.css({
                                        "background-image": 'url("' + s + '")',
                                        opacity: "1"
                                    }), this._core.trigger("loaded", {
                                        element: o,
                                        url: s
                                    }, "lazy")
                                }), this), r.src = s)
                            }), this)), this._loaded.push(i.get(0)))
                        }, r.prototype.destroy = function() {
                            var e, t;
                            for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        var r = function n(i) {
                            this._core = i, this._previousHeight = null, this._handlers = {
                                "initialized.owl.carousel refreshed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.autoHeight && this.update()
                                }), this),
                                "changed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.autoHeight && "position" === e.property.name && this.update()
                                }), this),
                                "loaded.owl.lazy": e.proxy((function(e) {
                                    e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                                }), this)
                            }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                            var r = this;
                            e(t).on("load", (function() {
                                r._core.settings.autoHeight && r.update()
                            })), e(t).resize((function() {
                                r._core.settings.autoHeight && (null != r._intervalId && clearTimeout(r._intervalId), r._intervalId = setTimeout((function() {
                                    r.update()
                                }), 250))
                            }))
                        };
                        r.Defaults = {
                            autoHeight: !1,
                            autoHeightClass: "owl-height"
                        }, r.prototype.update = function() {
                            var t = this._core._current,
                                n = t + this._core.settings.items,
                                i = this._core.settings.lazyLoad,
                                r = this._core.$stage.children().toArray().slice(t, n),
                                o = [],
                                s = 0;
                            e.each(r, (function(t, n) {
                                o.push(e(n).height())
                            })), (s = Math.max.apply(null, o)) <= 1 && i && this._previousHeight && (s = this._previousHeight), this._previousHeight = s, this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
                        }, r.prototype.destroy = function() {
                            var e, t;
                            for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        var r = function t(n) {
                            this._core = n, this._videos = {}, this._playing = null, this._handlers = {
                                "initialized.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.register({
                                        type: "state",
                                        name: "playing",
                                        tags: ["interacting"]
                                    })
                                }), this),
                                "resize.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
                                }), this),
                                "refreshed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                                }), this),
                                "changed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && "position" === e.property.name && this._playing && this.stop()
                                }), this),
                                "prepared.owl.carousel": e.proxy((function(t) {
                                    if (t.namespace) {
                                        var n = e(t.content).find(".owl-video");
                                        n.length && (n.css("display", "none"), this.fetch(n, e(t.content)))
                                    }
                                }), this)
                            }, this._core.options = e.extend({}, t.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy((function(e) {
                                this.play(e)
                            }), this))
                        };
                        r.Defaults = {
                            video: !1,
                            videoHeight: !1,
                            videoWidth: !1
                        }, r.prototype.fetch = function(e, t) {
                            var n = e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube",
                                i = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
                                r = e.attr("data-width") || this._core.settings.videoWidth,
                                o = e.attr("data-height") || this._core.settings.videoHeight,
                                s = e.attr("href");
                            if (!s) throw new Error("Missing video URL.");
                            if ((i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) n = "youtube";
                            else if (i[3].indexOf("vimeo") > -1) n = "vimeo";
                            else {
                                if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                                n = "vzaar"
                            }
                            i = i[6], this._videos[s] = {
                                type: n,
                                id: i,
                                width: r,
                                height: o
                            }, t.attr("data-video", s), this.thumbnail(e, this._videos[s])
                        }, r.prototype.thumbnail = function(t, n) {
                            var i, r, o = n.width && n.height ? "width:" + n.width + "px;height:" + n.height + "px;" : "",
                                s = t.find("img"),
                                a = "src",
                                l = "",
                                u = this._core.settings,
                                c = function(n) {
                                    '<div class="owl-video-play-icon"></div>',
                                    i = u.lazyLoad ? e("<div/>", {
                                        class: "owl-video-tn " + l,
                                        srcType: n
                                    }) : e("<div/>", {
                                        class: "owl-video-tn",
                                        style: "opacity:1;background-image:url(" + n + ")"
                                    }),
                                    t.after(i),
                                    t.after('<div class="owl-video-play-icon"></div>')
                                };
                            if (t.wrap(e("<div/>", {
                                    class: "owl-video-wrapper",
                                    style: o
                                })), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return c(s.attr(a)), s.remove(), !1;
                            "youtube" === n.type ? (r = "//img.youtube.com/vi/" + n.id + "/hqdefault.jpg", c(r)) : "vimeo" === n.type ? e.ajax({
                                type: "GET",
                                url: "//vimeo.com/api/v2/video/" + n.id + ".json",
                                jsonp: "callback",
                                dataType: "jsonp",
                                success: function(e) {
                                    r = e[0].thumbnail_large, c(r)
                                }
                            }) : "vzaar" === n.type && e.ajax({
                                type: "GET",
                                url: "//vzaar.com/api/videos/" + n.id + ".json",
                                jsonp: "callback",
                                dataType: "jsonp",
                                success: function(e) {
                                    r = e.framegrab_url, c(r)
                                }
                            })
                        }, r.prototype.stop = function() {
                            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
                        }, r.prototype.play = function(t) {
                            var n, i = e(t.target).closest("." + this._core.settings.itemClass),
                                r = this._videos[i.attr("data-video")],
                                o = r.width || "100%",
                                s = r.height || this._core.$stage.height();
                            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), (n = e('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", s), n.attr("width", o), "youtube" === r.type ? n.attr("src", "//www.youtube.com/embed/" + r.id + "?autoplay=1&rel=0&v=" + r.id) : "vimeo" === r.type ? n.attr("src", "//player.vimeo.com/video/" + r.id + "?autoplay=1") : "vzaar" === r.type && n.attr("src", "//view.vzaar.com/" + r.id + "/player?autoplay=true"), e(n).wrap('<div class="owl-video-frame" />').insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
                        }, r.prototype.isInFullScreen = function() {
                            var t = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
                            return t && e(t).parent().hasClass("owl-video-frame")
                        }, r.prototype.destroy = function() {
                            var e, t;
                            for (e in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.Video = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        var r = function t(n) {
                            this.core = n, this.core.options = e.extend({}, t.Defaults, this.core.options), this.swapping = !0, this.previous = i, this.next = i, this.handlers = {
                                "change.owl.carousel": e.proxy((function(e) {
                                    e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
                                }), this),
                                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy((function(e) {
                                    e.namespace && (this.swapping = "translated" == e.type)
                                }), this),
                                "translate.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                                }), this)
                            }, this.core.$element.on(this.handlers)
                        };
                        r.Defaults = {
                            animateOut: !1,
                            animateIn: !1
                        }, r.prototype.swap = function() {
                            if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
                                this.core.speed(0);
                                var t, n = e.proxy(this.clear, this),
                                    i = this.core.$stage.children().eq(this.previous),
                                    r = this.core.$stage.children().eq(this.next),
                                    o = this.core.settings.animateIn,
                                    s = this.core.settings.animateOut;
                                this.core.current() !== this.previous && (s && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(e.support.animation.end, n).css({
                                    left: t + "px"
                                }).addClass("animated owl-animated-out").addClass(s)), o && r.one(e.support.animation.end, n).addClass("animated owl-animated-in").addClass(o))
                            }
                        }, r.prototype.clear = function(t) {
                            e(t.target).css({
                                left: ""
                            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
                        }, r.prototype.destroy = function() {
                            var e, t;
                            for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        var r = function t(n) {
                            this._core = n, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                                "changed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
                                }), this),
                                "initialized.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.autoplay && this.play()
                                }), this),
                                "play.owl.autoplay": e.proxy((function(e, t, n) {
                                    e.namespace && this.play(t, n)
                                }), this),
                                "stop.owl.autoplay": e.proxy((function(e) {
                                    e.namespace && this.stop()
                                }), this),
                                "mouseover.owl.autoplay": e.proxy((function() {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                                }), this),
                                "mouseleave.owl.autoplay": e.proxy((function() {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                                }), this),
                                "touchstart.owl.core": e.proxy((function() {
                                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                                }), this),
                                "touchend.owl.core": e.proxy((function() {
                                    this._core.settings.autoplayHoverPause && this.play()
                                }), this)
                            }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, t.Defaults, this._core.options)
                        };
                        r.Defaults = {
                            autoplay: !1,
                            autoplayTimeout: 5e3,
                            autoplayHoverPause: !1,
                            autoplaySpeed: !1
                        }, r.prototype._next = function(i) {
                            this._call = t.setTimeout(e.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
                        }, r.prototype.read = function() {
                            return (new Date).getTime() - this._time
                        }, r.prototype.play = function(n, i) {
                            var r;
                            this._core.is("rotating") || this._core.enter("rotating"), n = n || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || n), n), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % n - r, this._timeout = n, this._call = t.setTimeout(e.proxy(this._next, this, i), n - r)
                        }, r.prototype.stop = function() {
                            this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
                        }, r.prototype.pause = function() {
                            this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
                        }, r.prototype.destroy = function() {
                            var e, t;
                            for (e in this.stop(), this._handlers) this._core.$element.off(e, this._handlers[e]);
                            for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        "use strict";
                        var r = function t(n) {
                            this._core = n, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                                next: this._core.next,
                                prev: this._core.prev,
                                to: this._core.to
                            }, this._handlers = {
                                "prepared.owl.carousel": e.proxy((function(t) {
                                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                                }), this),
                                "added.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
                                }), this),
                                "remove.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
                                }), this),
                                "changed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && "position" == e.property.name && this.draw()
                                }), this),
                                "initialized.owl.carousel": e.proxy((function(e) {
                                    e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                                }), this),
                                "refreshed.owl.carousel": e.proxy((function(e) {
                                    e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                                }), this)
                            }, this._core.options = e.extend({}, t.Defaults, this._core.options), this.$element.on(this._handlers)
                        };
                        r.Defaults = {
                            nav: !1,
                            navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                            navSpeed: !1,
                            navElement: 'button type="button" role="presentation"',
                            navContainer: !1,
                            navContainerClass: "owl-nav",
                            navClass: ["owl-prev", "owl-next"],
                            slideBy: 1,
                            dotClass: "owl-dot",
                            dotsClass: "owl-dots",
                            dots: !0,
                            dotsEach: !1,
                            dotsData: !1,
                            dotsSpeed: !1,
                            dotsContainer: !1
                        }, r.prototype.initialize = function() {
                            var t, n = this._core.settings;
                            for (t in this._controls.$relative = (n.navContainer ? e(n.navContainer) : e("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy((function(e) {
                                    this.prev(n.navSpeed)
                                }), this)), this._controls.$next = e("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy((function(e) {
                                    this.next(n.navSpeed)
                                }), this)), n.dotsData || (this._templates = [e('<button role="button">').addClass(n.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? e(n.dotsContainer) : e("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy((function(t) {
                                    var i = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
                                    t.preventDefault(), this.to(i, n.dotsSpeed)
                                }), this)), this._overrides) this._core[t] = e.proxy(this[t], this)
                        }, r.prototype.destroy = function() {
                            var e, t, n, i, r;
                            for (e in r = this._core.settings, this._handlers) this.$element.off(e, this._handlers[e]);
                            for (t in this._controls) "$relative" === t && r.navContainer ? this._controls[t].html("") : this._controls[t].remove();
                            for (i in this.overides) this._core[i] = this._overrides[i];
                            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                        }, r.prototype.update = function() {
                            var e, t, n = this._core.clones().length / 2,
                                i = n + this._core.items().length,
                                r = this._core.maximum(!0),
                                o = this._core.settings,
                                s = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                            if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                                for (this._pages = [], e = n, t = 0, 0; e < i; e++) {
                                    if (t >= s || 0 === t) {
                                        if (this._pages.push({
                                                start: Math.min(r, e - n),
                                                end: e - n + s - 1
                                            }), Math.min(r, e - n) === r) break;
                                        t = 0
                                    }
                                    t += this._core.mergers(this._core.relative(e))
                                }
                        }, r.prototype.draw = function() {
                            var t, n = this._core.settings,
                                i = this._core.items().length <= n.items,
                                r = this._core.relative(this._core.current()),
                                o = n.loop || n.rewind;
                            this._controls.$relative.toggleClass("disabled", !n.nav || i), n.nav && (this._controls.$previous.toggleClass("disabled", !o && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !n.dots || i), n.dots && (t = this._pages.length - this._controls.$absolute.children().length, n.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
                        }, r.prototype.onTrigger = function(t) {
                            var n = this._core.settings;
                            t.page = {
                                index: e.inArray(this.current(), this._pages),
                                count: this._pages.length,
                                size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
                            }
                        }, r.prototype.current = function() {
                            var t = this._core.relative(this._core.current());
                            return e.grep(this._pages, e.proxy((function(e, n) {
                                return e.start <= t && e.end >= t
                            }), this)).pop()
                        }, r.prototype.getPosition = function(t) {
                            var n, i, r = this._core.settings;
                            return "page" == r.slideBy ? (n = e.inArray(this.current(), this._pages), i = this._pages.length, t ? ++n : --n, n = this._pages[(n % i + i) % i].start) : (n = this._core.relative(this._core.current()), i = this._core.items().length, t ? n += r.slideBy : n -= r.slideBy), n
                        }, r.prototype.next = function(t) {
                            e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
                        }, r.prototype.prev = function(t) {
                            e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
                        }, r.prototype.to = function(t, n, i) {
                            var r;
                            !i && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, n)) : e.proxy(this._overrides.to, this._core)(t, n)
                        }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        "use strict";
                        var r = function n(i) {
                            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                                "initialized.owl.carousel": e.proxy((function(n) {
                                    n.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
                                }), this),
                                "prepared.owl.carousel": e.proxy((function(t) {
                                    if (t.namespace) {
                                        var n = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                        if (!n) return;
                                        this._hashes[n] = t.content
                                    }
                                }), this),
                                "changed.owl.carousel": e.proxy((function(n) {
                                    if (n.namespace && "position" === n.property.name) {
                                        var i = this._core.items(this._core.relative(this._core.current())),
                                            r = e.map(this._hashes, (function(e, t) {
                                                return e === i ? t : null
                                            })).join();
                                        if (!r || t.location.hash.slice(1) === r) return;
                                        t.location.hash = r
                                    }
                                }), this)
                            }, this._core.options = e.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy((function(e) {
                                var n = t.location.hash.substring(1),
                                    i = this._core.$stage.children(),
                                    r = this._hashes[n] && i.index(this._hashes[n]);
                                undefined !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
                            }), this))
                        };
                        r.Defaults = {
                            URLhashListener: !1
                        }, r.prototype.destroy = function() {
                            var n, i;
                            for (n in e(t).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(n, this._handlers[n]);
                            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                        }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
                    }(window.Zepto || window.jQuery, window, document),
                    function(e, t, n, i) {
                        function r(t, n) {
                            var i = !1,
                                r = t.charAt(0).toUpperCase() + t.slice(1);
                            return e.each((t + " " + a.join(r + " ") + r).split(" "), (function(e, t) {
                                if (undefined !== s[t]) return i = !n || t, !1
                            })), i
                        }

                        function o(e) {
                            return r(e, !0)
                        }
                        var s = e("<support>").get(0).style,
                            a = "Webkit Moz O ms".split(" "),
                            l = {
                                transition: {
                                    end: {
                                        WebkitTransition: "webkitTransitionEnd",
                                        MozTransition: "transitionend",
                                        OTransition: "oTransitionEnd",
                                        transition: "transitionend"
                                    }
                                },
                                animation: {
                                    end: {
                                        WebkitAnimation: "webkitAnimationEnd",
                                        MozAnimation: "animationend",
                                        OAnimation: "oAnimationEnd",
                                        animation: "animationend"
                                    }
                                }
                            },
                            u = function() {
                                return !!r("transform")
                            },
                            c = function() {
                                return !!r("perspective")
                            },
                            d = function() {
                                return !!r("animation")
                            };
                        (function() {
                            return !!r("transition")
                        })() && (e.support.transition = new String(o("transition")), e.support.transition.end = l.transition.end[e.support.transition]), d() && (e.support.animation = new String(o("animation")), e.support.animation.end = l.animation.end[e.support.animation]), u() && (e.support.transform = new String(o("transform")), e.support.transform3d = c())
                    }(window.Zepto || window.jQuery, window, document)
            },
            734: function(e, t, n) {
                ! function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && "object" == typeof e && "default" in e ? e : {
                            default: e
                        }
                    }
                    var r = i(t),
                        o = i(n);

                    function s(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }

                    function a(e, t, n) {
                        return t && s(e.prototype, t), n && s(e, n), e
                    }

                    function l() {
                        return l = Object.assign || function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = arguments[t];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                            }
                            return e
                        }, l.apply(this, arguments)
                    }

                    function u(e, t) {
                        e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                    }
                    var c = "transitionend",
                        d = 1e6,
                        h = 1e3;

                    function f(e) {
                        return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
                    }

                    function p() {
                        return {
                            bindType: c,
                            delegateType: c,
                            handle: function(e) {
                                if (r.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                            }
                        }
                    }

                    function g(e) {
                        var t = this,
                            n = !1;
                        return r.default(this).one(v.TRANSITION_END, (function() {
                            n = !0
                        })), setTimeout((function() {
                            n || v.triggerTransitionEnd(t)
                        }), e), this
                    }

                    function m() {
                        r.default.fn.emulateTransitionEnd = g, r.default.event.special[v.TRANSITION_END] = p()
                    }
                    var v = {
                        TRANSITION_END: "bsTransitionEnd",
                        getUID: function(e) {
                            do {
                                e += ~~(Math.random() * d)
                            } while (document.getElementById(e));
                            return e
                        },
                        getSelectorFromElement: function(e) {
                            var t = e.getAttribute("data-target");
                            if (!t || "#" === t) {
                                var n = e.getAttribute("href");
                                t = n && "#" !== n ? n.trim() : ""
                            }
                            try {
                                return document.querySelector(t) ? t : null
                            } catch (e) {
                                return null
                            }
                        },
                        getTransitionDurationFromElement: function(e) {
                            if (!e) return 0;
                            var t = r.default(e).css("transition-duration"),
                                n = r.default(e).css("transition-delay"),
                                i = parseFloat(t),
                                o = parseFloat(n);
                            return i || o ? (t = t.split(",")[0], n = n.split(",")[0], (parseFloat(t) + parseFloat(n)) * h) : 0
                        },
                        reflow: function(e) {
                            return e.offsetHeight
                        },
                        triggerTransitionEnd: function(e) {
                            r.default(e).trigger(c)
                        },
                        supportsTransitionEnd: function() {
                            return Boolean(c)
                        },
                        isElement: function(e) {
                            return (e[0] || e).nodeType
                        },
                        typeCheckConfig: function(e, t, n) {
                            for (var i in n)
                                if (Object.prototype.hasOwnProperty.call(n, i)) {
                                    var r = n[i],
                                        o = t[i],
                                        s = o && v.isElement(o) ? "element" : f(o);
                                    if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                                }
                        },
                        findShadowRoot: function(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var t = e.getRootNode();
                                return t instanceof ShadowRoot ? t : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? v.findShadowRoot(e.parentNode) : null
                        },
                        jQueryDetection: function() {
                            if (void 0 === r.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                            var e = r.default.fn.jquery.split(" ")[0].split("."),
                                t = 1,
                                n = 2,
                                i = 9,
                                o = 1,
                                s = 4;
                            if (e[0] < n && e[1] < i || e[0] === t && e[1] === i && e[2] < o || e[0] >= s) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
                        }
                    };
                    v.jQueryDetection(), m();
                    var y = "alert",
                        _ = "4.6.0",
                        w = "bs.alert",
                        b = "." + w,
                        x = ".data-api",
                        C = r.default.fn[y],
                        E = '[data-dismiss="alert"]',
                        T = "close" + b,
                        S = "closed" + b,
                        D = "click" + b + x,
                        k = "alert",
                        A = "fade",
                        N = "show",
                        j = function() {
                            function e(e) {
                                this._element = e
                            }
                            var t = e.prototype;
                            return t.close = function(e) {
                                var t = this._element;
                                e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                            }, t.dispose = function() {
                                r.default.removeData(this._element, w), this._element = null
                            }, t._getRootElement = function(e) {
                                var t = v.getSelectorFromElement(e),
                                    n = !1;
                                return t && (n = document.querySelector(t)), n || (n = r.default(e).closest("." + k)[0]), n
                            }, t._triggerCloseEvent = function(e) {
                                var t = r.default.Event(T);
                                return r.default(e).trigger(t), t
                            }, t._removeElement = function(e) {
                                var t = this;
                                if (r.default(e).removeClass(N), r.default(e).hasClass(A)) {
                                    var n = v.getTransitionDurationFromElement(e);
                                    r.default(e).one(v.TRANSITION_END, (function(n) {
                                        return t._destroyElement(e, n)
                                    })).emulateTransitionEnd(n)
                                } else this._destroyElement(e)
                            }, t._destroyElement = function(e) {
                                r.default(e).detach().trigger(S).remove()
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this),
                                        i = n.data(w);
                                    i || (i = new e(this), n.data(w, i)), "close" === t && i[t](this)
                                }))
                            }, e._handleDismiss = function(e) {
                                return function(t) {
                                    t && t.preventDefault(), e.close(this)
                                }
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return _
                                }
                            }]), e
                        }();
                    r.default(document).on(D, E, j._handleDismiss(new j)), r.default.fn[y] = j._jQueryInterface, r.default.fn[y].Constructor = j, r.default.fn[y].noConflict = function() {
                        return r.default.fn[y] = C, j._jQueryInterface
                    };
                    var O = "button",
                        L = "4.6.0",
                        I = "bs.button",
                        $ = "." + I,
                        P = ".data-api",
                        z = r.default.fn[O],
                        H = "active",
                        M = "btn",
                        q = "focus",
                        R = '[data-toggle^="button"]',
                        F = '[data-toggle="buttons"]',
                        W = '[data-toggle="button"]',
                        B = '[data-toggle="buttons"] .btn',
                        U = 'input:not([type="hidden"])',
                        Q = ".active",
                        V = ".btn",
                        X = "click" + $ + P,
                        Y = "focus" + $ + P + " blur" + $ + P,
                        K = "load" + $ + P,
                        G = function() {
                            function e(e) {
                                this._element = e, this.shouldAvoidTriggerChange = !1
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                var e = !0,
                                    t = !0,
                                    n = r.default(this._element).closest(F)[0];
                                if (n) {
                                    var i = this._element.querySelector(U);
                                    if (i) {
                                        if ("radio" === i.type)
                                            if (i.checked && this._element.classList.contains(H)) e = !1;
                                            else {
                                                var o = n.querySelector(Q);
                                                o && r.default(o).removeClass(H)
                                            }
                                        e && ("checkbox" !== i.type && "radio" !== i.type || (i.checked = !this._element.classList.contains(H)), this.shouldAvoidTriggerChange || r.default(i).trigger("change")), i.focus(), t = !1
                                    }
                                }
                                this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains(H)), e && r.default(this._element).toggleClass(H))
                            }, t.dispose = function() {
                                r.default.removeData(this._element, I), this._element = null
                            }, e._jQueryInterface = function(t, n) {
                                return this.each((function() {
                                    var i = r.default(this),
                                        o = i.data(I);
                                    o || (o = new e(this), i.data(I, o)), o.shouldAvoidTriggerChange = n, "toggle" === t && o[t]()
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return L
                                }
                            }]), e
                        }();
                    r.default(document).on(X, R, (function(e) {
                        var t = e.target,
                            n = t;
                        if (r.default(t).hasClass(M) || (t = r.default(t).closest(V)[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
                        else {
                            var i = t.querySelector(U);
                            if (i && (i.hasAttribute("disabled") || i.classList.contains("disabled"))) return void e.preventDefault();
                            "INPUT" !== n.tagName && "LABEL" === t.tagName || G._jQueryInterface.call(r.default(t), "toggle", "INPUT" === n.tagName)
                        }
                    })).on(Y, R, (function(e) {
                        var t = r.default(e.target).closest(V)[0];
                        r.default(t).toggleClass(q, /^focus(in)?$/.test(e.type))
                    })), r.default(window).on(K, (function() {
                        for (var e = [].slice.call(document.querySelectorAll(B)), t = 0, n = e.length; t < n; t++) {
                            var i = e[t],
                                r = i.querySelector(U);
                            r.checked || r.hasAttribute("checked") ? i.classList.add(H) : i.classList.remove(H)
                        }
                        for (var o = 0, s = (e = [].slice.call(document.querySelectorAll(W))).length; o < s; o++) {
                            var a = e[o];
                            "true" === a.getAttribute("aria-pressed") ? a.classList.add(H) : a.classList.remove(H)
                        }
                    })), r.default.fn[O] = G._jQueryInterface, r.default.fn[O].Constructor = G, r.default.fn[O].noConflict = function() {
                        return r.default.fn[O] = z, G._jQueryInterface
                    };
                    var J = "carousel",
                        Z = "4.6.0",
                        ee = "bs.carousel",
                        te = "." + ee,
                        ne = ".data-api",
                        ie = r.default.fn[J],
                        re = 37,
                        oe = 39,
                        se = 500,
                        ae = 40,
                        le = {
                            interval: 5e3,
                            keyboard: !0,
                            slide: !1,
                            pause: "hover",
                            wrap: !0,
                            touch: !0
                        },
                        ue = {
                            interval: "(number|boolean)",
                            keyboard: "boolean",
                            slide: "(boolean|string)",
                            pause: "(string|boolean)",
                            wrap: "boolean",
                            touch: "boolean"
                        },
                        ce = "next",
                        de = "prev",
                        he = "left",
                        fe = "right",
                        pe = "slide" + te,
                        ge = "slid" + te,
                        me = "keydown" + te,
                        ve = "mouseenter" + te,
                        ye = "mouseleave" + te,
                        _e = "touchstart" + te,
                        we = "touchmove" + te,
                        be = "touchend" + te,
                        xe = "pointerdown" + te,
                        Ce = "pointerup" + te,
                        Ee = "dragstart" + te,
                        Te = "load" + te + ne,
                        Se = "click" + te + ne,
                        De = "carousel",
                        ke = "active",
                        Ae = "slide",
                        Ne = "carousel-item-right",
                        je = "carousel-item-left",
                        Oe = "carousel-item-next",
                        Le = "carousel-item-prev",
                        Ie = "pointer-event",
                        $e = ".active",
                        Pe = ".active.carousel-item",
                        ze = ".carousel-item",
                        He = ".carousel-item img",
                        Me = ".carousel-item-next, .carousel-item-prev",
                        qe = ".carousel-indicators",
                        Re = "[data-slide], [data-slide-to]",
                        Fe = '[data-ride="carousel"]',
                        We = {
                            TOUCH: "touch",
                            PEN: "pen"
                        },
                        Be = function() {
                            function e(e, t) {
                                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(qe), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
                            }
                            var t = e.prototype;
                            return t.next = function() {
                                this._isSliding || this._slide(ce)
                            }, t.nextWhenVisible = function() {
                                var e = r.default(this._element);
                                !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next()
                            }, t.prev = function() {
                                this._isSliding || this._slide(de)
                            }, t.pause = function(e) {
                                e || (this._isPaused = !0), this._element.querySelector(Me) && (v.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                            }, t.cycle = function(e) {
                                e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }, t.to = function(e) {
                                var t = this;
                                this._activeElement = this._element.querySelector(Pe);
                                var n = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || e < 0))
                                    if (this._isSliding) r.default(this._element).one(ge, (function() {
                                        return t.to(e)
                                    }));
                                    else {
                                        if (n === e) return this.pause(), void this.cycle();
                                        var i = e > n ? ce : de;
                                        this._slide(i, this._items[e])
                                    }
                            }, t.dispose = function() {
                                r.default(this._element).off(te), r.default.removeData(this._element, ee), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                            }, t._getConfig = function(e) {
                                return e = l({}, le, e), v.typeCheckConfig(J, e, ue), e
                            }, t._handleSwipe = function() {
                                var e = Math.abs(this.touchDeltaX);
                                if (!(e <= ae)) {
                                    var t = e / this.touchDeltaX;
                                    this.touchDeltaX = 0, t > 0 && this.prev(), t < 0 && this.next()
                                }
                            }, t._addEventListeners = function() {
                                var e = this;
                                this._config.keyboard && r.default(this._element).on(me, (function(t) {
                                    return e._keydown(t)
                                })), "hover" === this._config.pause && r.default(this._element).on(ve, (function(t) {
                                    return e.pause(t)
                                })).on(ye, (function(t) {
                                    return e.cycle(t)
                                })), this._config.touch && this._addTouchEventListeners()
                            }, t._addTouchEventListeners = function() {
                                var e = this;
                                if (this._touchSupported) {
                                    var t = function(t) {
                                            e._pointerEvent && We[t.originalEvent.pointerType.toUpperCase()] ? e.touchStartX = t.originalEvent.clientX : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX)
                                        },
                                        n = function(t) {
                                            t.originalEvent.touches && t.originalEvent.touches.length > 1 ? e.touchDeltaX = 0 : e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX
                                        },
                                        i = function(t) {
                                            e._pointerEvent && We[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX), e._handleSwipe(), "hover" === e._config.pause && (e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout((function(t) {
                                                return e.cycle(t)
                                            }), se + e._config.interval))
                                        };
                                    r.default(this._element.querySelectorAll(He)).on(Ee, (function(e) {
                                        return e.preventDefault()
                                    })), this._pointerEvent ? (r.default(this._element).on(xe, (function(e) {
                                        return t(e)
                                    })), r.default(this._element).on(Ce, (function(e) {
                                        return i(e)
                                    })), this._element.classList.add(Ie)) : (r.default(this._element).on(_e, (function(e) {
                                        return t(e)
                                    })), r.default(this._element).on(we, (function(e) {
                                        return n(e)
                                    })), r.default(this._element).on(be, (function(e) {
                                        return i(e)
                                    })))
                                }
                            }, t._keydown = function(e) {
                                if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                                    case re:
                                        e.preventDefault(), this.prev();
                                        break;
                                    case oe:
                                        e.preventDefault(), this.next()
                                }
                            }, t._getItemIndex = function(e) {
                                return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(ze)) : [], this._items.indexOf(e)
                            }, t._getItemByDirection = function(e, t) {
                                var n = e === ce,
                                    i = e === de,
                                    r = this._getItemIndex(t),
                                    o = this._items.length - 1;
                                if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
                                var s = (r + (e === de ? -1 : 1)) % this._items.length;
                                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
                            }, t._triggerSlideEvent = function(e, t) {
                                var n = this._getItemIndex(e),
                                    i = this._getItemIndex(this._element.querySelector(Pe)),
                                    o = r.default.Event(pe, {
                                        relatedTarget: e,
                                        direction: t,
                                        from: i,
                                        to: n
                                    });
                                return r.default(this._element).trigger(o), o
                            }, t._setActiveIndicatorElement = function(e) {
                                if (this._indicatorsElement) {
                                    var t = [].slice.call(this._indicatorsElement.querySelectorAll($e));
                                    r.default(t).removeClass(ke);
                                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                                    n && r.default(n).addClass(ke)
                                }
                            }, t._updateInterval = function() {
                                var e = this._activeElement || this._element.querySelector(Pe);
                                if (e) {
                                    var t = parseInt(e.getAttribute("data-interval"), 10);
                                    t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval
                                }
                            }, t._slide = function(e, t) {
                                var n, i, o, s = this,
                                    a = this._element.querySelector(Pe),
                                    l = this._getItemIndex(a),
                                    u = t || a && this._getItemByDirection(e, a),
                                    c = this._getItemIndex(u),
                                    d = Boolean(this._interval);
                                if (e === ce ? (n = je, i = Oe, o = he) : (n = Ne, i = Le, o = fe), u && r.default(u).hasClass(ke)) this._isSliding = !1;
                                else if (!this._triggerSlideEvent(u, o).isDefaultPrevented() && a && u) {
                                    this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), this._activeElement = u;
                                    var h = r.default.Event(ge, {
                                        relatedTarget: u,
                                        direction: o,
                                        from: l,
                                        to: c
                                    });
                                    if (r.default(this._element).hasClass(Ae)) {
                                        r.default(u).addClass(i), v.reflow(u), r.default(a).addClass(n), r.default(u).addClass(n);
                                        var f = v.getTransitionDurationFromElement(a);
                                        r.default(a).one(v.TRANSITION_END, (function() {
                                            r.default(u).removeClass(n + " " + i).addClass(ke), r.default(a).removeClass(ke + " " + i + " " + n), s._isSliding = !1, setTimeout((function() {
                                                return r.default(s._element).trigger(h)
                                            }), 0)
                                        })).emulateTransitionEnd(f)
                                    } else r.default(a).removeClass(ke), r.default(u).addClass(ke), this._isSliding = !1, r.default(this._element).trigger(h);
                                    d && this.cycle()
                                }
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this).data(ee),
                                        i = l({}, le, r.default(this).data());
                                    "object" == typeof t && (i = l({}, i, t));
                                    var o = "string" == typeof t ? t : i.slide;
                                    if (n || (n = new e(this, i), r.default(this).data(ee, n)), "number" == typeof t) n.to(t);
                                    else if ("string" == typeof o) {
                                        if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                                        n[o]()
                                    } else i.interval && i.ride && (n.pause(), n.cycle())
                                }))
                            }, e._dataApiClickHandler = function(t) {
                                var n = v.getSelectorFromElement(this);
                                if (n) {
                                    var i = r.default(n)[0];
                                    if (i && r.default(i).hasClass(De)) {
                                        var o = l({}, r.default(i).data(), r.default(this).data()),
                                            s = this.getAttribute("data-slide-to");
                                        s && (o.interval = !1), e._jQueryInterface.call(r.default(i), o), s && r.default(i).data(ee).to(s), t.preventDefault()
                                    }
                                }
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return Z
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return le
                                }
                            }]), e
                        }();
                    r.default(document).on(Se, Re, Be._dataApiClickHandler), r.default(window).on(Te, (function() {
                        for (var e = [].slice.call(document.querySelectorAll(Fe)), t = 0, n = e.length; t < n; t++) {
                            var i = r.default(e[t]);
                            Be._jQueryInterface.call(i, i.data())
                        }
                    })), r.default.fn[J] = Be._jQueryInterface, r.default.fn[J].Constructor = Be, r.default.fn[J].noConflict = function() {
                        return r.default.fn[J] = ie, Be._jQueryInterface
                    };
                    var Ue = "collapse",
                        Qe = "4.6.0",
                        Ve = "bs.collapse",
                        Xe = "." + Ve,
                        Ye = ".data-api",
                        Ke = r.default.fn[Ue],
                        Ge = {
                            toggle: !0,
                            parent: ""
                        },
                        Je = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        },
                        Ze = "show" + Xe,
                        et = "shown" + Xe,
                        tt = "hide" + Xe,
                        nt = "hidden" + Xe,
                        it = "click" + Xe + Ye,
                        rt = "show",
                        ot = "collapse",
                        st = "collapsing",
                        at = "collapsed",
                        lt = "width",
                        ut = "height",
                        ct = ".show, .collapsing",
                        dt = '[data-toggle="collapse"]',
                        ht = function() {
                            function e(e, t) {
                                this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                                for (var n = [].slice.call(document.querySelectorAll(dt)), i = 0, r = n.length; i < r; i++) {
                                    var o = n[i],
                                        s = v.getSelectorFromElement(o),
                                        a = [].slice.call(document.querySelectorAll(s)).filter((function(t) {
                                            return t === e
                                        }));
                                    null !== s && a.length > 0 && (this._selector = s, this._triggerArray.push(o))
                                }
                                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                r.default(this._element).hasClass(rt) ? this.hide() : this.show()
                            }, t.show = function() {
                                var t, n, i = this;
                                if (!(this._isTransitioning || r.default(this._element).hasClass(rt) || (this._parent && 0 === (t = [].slice.call(this._parent.querySelectorAll(ct)).filter((function(e) {
                                        return "string" == typeof i._config.parent ? e.getAttribute("data-parent") === i._config.parent : e.classList.contains(ot)
                                    }))).length && (t = null), t && (n = r.default(t).not(this._selector).data(Ve)) && n._isTransitioning))) {
                                    var o = r.default.Event(Ze);
                                    if (r.default(this._element).trigger(o), !o.isDefaultPrevented()) {
                                        t && (e._jQueryInterface.call(r.default(t).not(this._selector), "hide"), n || r.default(t).data(Ve, null));
                                        var s = this._getDimension();
                                        r.default(this._element).removeClass(ot).addClass(st), this._element.style[s] = 0, this._triggerArray.length && r.default(this._triggerArray).removeClass(at).attr("aria-expanded", !0), this.setTransitioning(!0);
                                        var a = function() {
                                                r.default(i._element).removeClass(st).addClass(ot + " " + rt), i._element.style[s] = "", i.setTransitioning(!1), r.default(i._element).trigger(et)
                                            },
                                            l = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                                            u = v.getTransitionDurationFromElement(this._element);
                                        r.default(this._element).one(v.TRANSITION_END, a).emulateTransitionEnd(u), this._element.style[s] = this._element[l] + "px"
                                    }
                                }
                            }, t.hide = function() {
                                var e = this;
                                if (!this._isTransitioning && r.default(this._element).hasClass(rt)) {
                                    var t = r.default.Event(tt);
                                    if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                        var n = this._getDimension();
                                        this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", v.reflow(this._element), r.default(this._element).addClass(st).removeClass(ot + " " + rt);
                                        var i = this._triggerArray.length;
                                        if (i > 0)
                                            for (var o = 0; o < i; o++) {
                                                var s = this._triggerArray[o],
                                                    a = v.getSelectorFromElement(s);
                                                null !== a && (r.default([].slice.call(document.querySelectorAll(a))).hasClass(rt) || r.default(s).addClass(at).attr("aria-expanded", !1))
                                            }
                                        this.setTransitioning(!0);
                                        var l = function() {
                                            e.setTransitioning(!1), r.default(e._element).removeClass(st).addClass(ot).trigger(nt)
                                        };
                                        this._element.style[n] = "";
                                        var u = v.getTransitionDurationFromElement(this._element);
                                        r.default(this._element).one(v.TRANSITION_END, l).emulateTransitionEnd(u)
                                    }
                                }
                            }, t.setTransitioning = function(e) {
                                this._isTransitioning = e
                            }, t.dispose = function() {
                                r.default.removeData(this._element, Ve), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                            }, t._getConfig = function(e) {
                                return (e = l({}, Ge, e)).toggle = Boolean(e.toggle), v.typeCheckConfig(Ue, e, Je), e
                            }, t._getDimension = function() {
                                return r.default(this._element).hasClass(lt) ? lt : ut
                            }, t._getParent = function() {
                                var t, n = this;
                                v.isElement(this._config.parent) ? (t = this._config.parent, void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : t = document.querySelector(this._config.parent);
                                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                                    o = [].slice.call(t.querySelectorAll(i));
                                return r.default(o).each((function(t, i) {
                                    n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i])
                                })), t
                            }, t._addAriaAndCollapsedClass = function(e, t) {
                                var n = r.default(e).hasClass(rt);
                                t.length && r.default(t).toggleClass(at, !n).attr("aria-expanded", n)
                            }, e._getTargetFromElement = function(e) {
                                var t = v.getSelectorFromElement(e);
                                return t ? document.querySelector(t) : null
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this),
                                        i = n.data(Ve),
                                        o = l({}, Ge, n.data(), "object" == typeof t && t ? t : {});
                                    if (!i && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), i || (i = new e(this, o), n.data(Ve, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t]()
                                    }
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return Qe
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Ge
                                }
                            }]), e
                        }();
                    r.default(document).on(it, dt, (function(e) {
                        "A" === e.currentTarget.tagName && e.preventDefault();
                        var t = r.default(this),
                            n = v.getSelectorFromElement(this),
                            i = [].slice.call(document.querySelectorAll(n));
                        r.default(i).each((function() {
                            var e = r.default(this),
                                n = e.data(Ve) ? "toggle" : t.data();
                            ht._jQueryInterface.call(e, n)
                        }))
                    })), r.default.fn[Ue] = ht._jQueryInterface, r.default.fn[Ue].Constructor = ht, r.default.fn[Ue].noConflict = function() {
                        return r.default.fn[Ue] = Ke, ht._jQueryInterface
                    };
                    var ft = "dropdown",
                        pt = "4.6.0",
                        gt = "bs.dropdown",
                        mt = "." + gt,
                        vt = ".data-api",
                        yt = r.default.fn[ft],
                        _t = 27,
                        wt = 32,
                        bt = 9,
                        xt = 38,
                        Ct = 40,
                        Et = 3,
                        Tt = new RegExp(xt + "|" + Ct + "|" + _t),
                        St = "hide" + mt,
                        Dt = "hidden" + mt,
                        kt = "show" + mt,
                        At = "shown" + mt,
                        Nt = "click" + mt,
                        jt = "click" + mt + vt,
                        Ot = "keydown" + mt + vt,
                        Lt = "keyup" + mt + vt,
                        It = "disabled",
                        $t = "show",
                        Pt = "dropup",
                        zt = "dropright",
                        Ht = "dropleft",
                        Mt = "dropdown-menu-right",
                        qt = "position-static",
                        Rt = '[data-toggle="dropdown"]',
                        Ft = ".dropdown form",
                        Wt = ".dropdown-menu",
                        Bt = ".navbar-nav",
                        Ut = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                        Qt = "top-start",
                        Vt = "top-end",
                        Xt = "bottom-start",
                        Yt = "bottom-end",
                        Kt = "right-start",
                        Gt = "left-start",
                        Jt = {
                            offset: 0,
                            flip: !0,
                            boundary: "scrollParent",
                            reference: "toggle",
                            display: "dynamic",
                            popperConfig: null
                        },
                        Zt = {
                            offset: "(number|string|function)",
                            flip: "boolean",
                            boundary: "(string|element)",
                            reference: "(string|element)",
                            display: "string",
                            popperConfig: "(null|object)"
                        },
                        en = function() {
                            function e(e, t) {
                                this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                            }
                            var t = e.prototype;
                            return t.toggle = function() {
                                if (!this._element.disabled && !r.default(this._element).hasClass(It)) {
                                    var t = r.default(this._menu).hasClass($t);
                                    e._clearMenus(), t || this.show(!0)
                                }
                            }, t.show = function(t) {
                                if (void 0 === t && (t = !1), !(this._element.disabled || r.default(this._element).hasClass(It) || r.default(this._menu).hasClass($t))) {
                                    var n = {
                                            relatedTarget: this._element
                                        },
                                        i = r.default.Event(kt, n),
                                        s = e._getParentFromElement(this._element);
                                    if (r.default(s).trigger(i), !i.isDefaultPrevented()) {
                                        if (!this._inNavbar && t) {
                                            if (void 0 === o.default) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                            var a = this._element;
                                            "parent" === this._config.reference ? a = s : v.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && r.default(s).addClass(qt), this._popper = new o.default(a, this._menu, this._getPopperConfig())
                                        }
                                        "ontouchstart" in document.documentElement && 0 === r.default(s).closest(Bt).length && r.default(document.body).children().on("mouseover", null, r.default.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), r.default(this._menu).toggleClass($t), r.default(s).toggleClass($t).trigger(r.default.Event(At, n))
                                    }
                                }
                            }, t.hide = function() {
                                if (!this._element.disabled && !r.default(this._element).hasClass(It) && r.default(this._menu).hasClass($t)) {
                                    var t = {
                                            relatedTarget: this._element
                                        },
                                        n = r.default.Event(St, t),
                                        i = e._getParentFromElement(this._element);
                                    r.default(i).trigger(n), n.isDefaultPrevented() || (this._popper && this._popper.destroy(), r.default(this._menu).toggleClass($t), r.default(i).toggleClass($t).trigger(r.default.Event(Dt, t)))
                                }
                            }, t.dispose = function() {
                                r.default.removeData(this._element, gt), r.default(this._element).off(mt), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                            }, t.update = function() {
                                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                            }, t._addEventListeners = function() {
                                var e = this;
                                r.default(this._element).on(Nt, (function(t) {
                                    t.preventDefault(), t.stopPropagation(), e.toggle()
                                }))
                            }, t._getConfig = function(e) {
                                return e = l({}, this.constructor.Default, r.default(this._element).data(), e), v.typeCheckConfig(ft, e, this.constructor.DefaultType), e
                            }, t._getMenuElement = function() {
                                if (!this._menu) {
                                    var t = e._getParentFromElement(this._element);
                                    t && (this._menu = t.querySelector(Wt))
                                }
                                return this._menu
                            }, t._getPlacement = function() {
                                var e = r.default(this._element.parentNode),
                                    t = Xt;
                                return e.hasClass(Pt) ? t = r.default(this._menu).hasClass(Mt) ? Vt : Qt : e.hasClass(zt) ? t = Kt : e.hasClass(Ht) ? t = Gt : r.default(this._menu).hasClass(Mt) && (t = Yt), t
                            }, t._detectNavbar = function() {
                                return r.default(this._element).closest(".navbar").length > 0
                            }, t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this._config.offset ? t.fn = function(t) {
                                    return t.offsets = l({}, t.offsets, e._config.offset(t.offsets, e._element) || {}), t
                                } : t.offset = this._config.offset, t
                            }, t._getPopperConfig = function() {
                                var e = {
                                    placement: this._getPlacement(),
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            enabled: this._config.flip
                                        },
                                        preventOverflow: {
                                            boundariesElement: this._config.boundary
                                        }
                                    }
                                };
                                return "static" === this._config.display && (e.modifiers.applyStyle = {
                                    enabled: !1
                                }), l({}, e, this._config.popperConfig)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this).data(gt);
                                    if (n || (n = new e(this, "object" == typeof t ? t : null), r.default(this).data(gt, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                        n[t]()
                                    }
                                }))
                            }, e._clearMenus = function(t) {
                                if (!t || t.which !== Et && ("keyup" !== t.type || t.which === bt))
                                    for (var n = [].slice.call(document.querySelectorAll(Rt)), i = 0, o = n.length; i < o; i++) {
                                        var s = e._getParentFromElement(n[i]),
                                            a = r.default(n[i]).data(gt),
                                            l = {
                                                relatedTarget: n[i]
                                            };
                                        if (t && "click" === t.type && (l.clickEvent = t), a) {
                                            var u = a._menu;
                                            if (r.default(s).hasClass($t) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && t.which === bt) && r.default.contains(s, t.target))) {
                                                var c = r.default.Event(St, l);
                                                r.default(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), n[i].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), r.default(u).removeClass($t), r.default(s).removeClass($t).trigger(r.default.Event(Dt, l)))
                                            }
                                        }
                                    }
                            }, e._getParentFromElement = function(e) {
                                var t, n = v.getSelectorFromElement(e);
                                return n && (t = document.querySelector(n)), t || e.parentNode
                            }, e._dataApiKeydownHandler = function(t) {
                                if (!(/input|textarea/i.test(t.target.tagName) ? t.which === wt || t.which !== _t && (t.which !== Ct && t.which !== xt || r.default(t.target).closest(Wt).length) : !Tt.test(t.which)) && !this.disabled && !r.default(this).hasClass(It)) {
                                    var n = e._getParentFromElement(this),
                                        i = r.default(n).hasClass($t);
                                    if (i || t.which !== _t) {
                                        if (t.preventDefault(), t.stopPropagation(), !i || t.which === _t || t.which === wt) return t.which === _t && r.default(n.querySelector(Rt)).trigger("focus"), void r.default(this).trigger("click");
                                        var o = [].slice.call(n.querySelectorAll(Ut)).filter((function(e) {
                                            return r.default(e).is(":visible")
                                        }));
                                        if (0 !== o.length) {
                                            var s = o.indexOf(t.target);
                                            t.which === xt && s > 0 && s--, t.which === Ct && s < o.length - 1 && s++, s < 0 && (s = 0), o[s].focus()
                                        }
                                    }
                                }
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return pt
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Jt
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Zt
                                }
                            }]), e
                        }();
                    r.default(document).on(Ot, Rt, en._dataApiKeydownHandler).on(Ot, Wt, en._dataApiKeydownHandler).on(jt + " " + Lt, en._clearMenus).on(jt, Rt, (function(e) {
                        e.preventDefault(), e.stopPropagation(), en._jQueryInterface.call(r.default(this), "toggle")
                    })).on(jt, Ft, (function(e) {
                        e.stopPropagation()
                    })), r.default.fn[ft] = en._jQueryInterface, r.default.fn[ft].Constructor = en, r.default.fn[ft].noConflict = function() {
                        return r.default.fn[ft] = yt, en._jQueryInterface
                    };
                    var tn = "modal",
                        nn = "4.6.0",
                        rn = "bs.modal",
                        on = "." + rn,
                        sn = ".data-api",
                        an = r.default.fn[tn],
                        ln = 27,
                        un = {
                            backdrop: !0,
                            keyboard: !0,
                            focus: !0,
                            show: !0
                        },
                        cn = {
                            backdrop: "(boolean|string)",
                            keyboard: "boolean",
                            focus: "boolean",
                            show: "boolean"
                        },
                        dn = "hide" + on,
                        hn = "hidePrevented" + on,
                        fn = "hidden" + on,
                        pn = "show" + on,
                        gn = "shown" + on,
                        mn = "focusin" + on,
                        vn = "resize" + on,
                        yn = "click.dismiss" + on,
                        _n = "keydown.dismiss" + on,
                        wn = "mouseup.dismiss" + on,
                        bn = "mousedown.dismiss" + on,
                        xn = "click" + on + sn,
                        Cn = "modal-dialog-scrollable",
                        En = "modal-scrollbar-measure",
                        Tn = "modal-backdrop",
                        Sn = "modal-open",
                        Dn = "fade",
                        kn = "show",
                        An = "modal-static",
                        Nn = ".modal-dialog",
                        jn = ".modal-body",
                        On = '[data-toggle="modal"]',
                        Ln = '[data-dismiss="modal"]',
                        In = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                        $n = ".sticky-top",
                        Pn = function() {
                            function e(e, t) {
                                this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(Nn), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
                            }
                            var t = e.prototype;
                            return t.toggle = function(e) {
                                return this._isShown ? this.hide() : this.show(e)
                            }, t.show = function(e) {
                                var t = this;
                                if (!this._isShown && !this._isTransitioning) {
                                    r.default(this._element).hasClass(Dn) && (this._isTransitioning = !0);
                                    var n = r.default.Event(pn, {
                                        relatedTarget: e
                                    });
                                    r.default(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), r.default(this._element).on(yn, Ln, (function(e) {
                                        return t.hide(e)
                                    })), r.default(this._dialog).on(bn, (function() {
                                        r.default(t._element).one(wn, (function(e) {
                                            r.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                        }))
                                    })), this._showBackdrop((function() {
                                        return t._showElement(e)
                                    })))
                                }
                            }, t.hide = function(e) {
                                var t = this;
                                if (e && e.preventDefault(), this._isShown && !this._isTransitioning) {
                                    var n = r.default.Event(dn);
                                    if (r.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                                        this._isShown = !1;
                                        var i = r.default(this._element).hasClass(Dn);
                                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r.default(document).off(mn), r.default(this._element).removeClass(kn), r.default(this._element).off(yn), r.default(this._dialog).off(bn), i) {
                                            var o = v.getTransitionDurationFromElement(this._element);
                                            r.default(this._element).one(v.TRANSITION_END, (function(e) {
                                                return t._hideModal(e)
                                            })).emulateTransitionEnd(o)
                                        } else this._hideModal()
                                    }
                                }
                            }, t.dispose = function() {
                                [window, this._element, this._dialog].forEach((function(e) {
                                    return r.default(e).off(on)
                                })), r.default(document).off(mn), r.default.removeData(this._element, rn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
                            }, t.handleUpdate = function() {
                                this._adjustDialog()
                            }, t._getConfig = function(e) {
                                return e = l({}, un, e), v.typeCheckConfig(tn, e, cn), e
                            }, t._triggerBackdropTransition = function() {
                                var e = this,
                                    t = r.default.Event(hn);
                                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                    var n = this._element.scrollHeight > document.documentElement.clientHeight;
                                    n || (this._element.style.overflowY = "hidden"), this._element.classList.add(An);
                                    var i = v.getTransitionDurationFromElement(this._dialog);
                                    r.default(this._element).off(v.TRANSITION_END), r.default(this._element).one(v.TRANSITION_END, (function() {
                                        e._element.classList.remove(An), n || r.default(e._element).one(v.TRANSITION_END, (function() {
                                            e._element.style.overflowY = ""
                                        })).emulateTransitionEnd(e._element, i)
                                    })).emulateTransitionEnd(i), this._element.focus()
                                }
                            }, t._showElement = function(e) {
                                var t = this,
                                    n = r.default(this._element).hasClass(Dn),
                                    i = this._dialog ? this._dialog.querySelector(jn) : null;
                                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), r.default(this._dialog).hasClass(Cn) && i ? i.scrollTop = 0 : this._element.scrollTop = 0, n && v.reflow(this._element), r.default(this._element).addClass(kn), this._config.focus && this._enforceFocus();
                                var o = r.default.Event(gn, {
                                        relatedTarget: e
                                    }),
                                    s = function() {
                                        t._config.focus && t._element.focus(), t._isTransitioning = !1, r.default(t._element).trigger(o)
                                    };
                                if (n) {
                                    var a = v.getTransitionDurationFromElement(this._dialog);
                                    r.default(this._dialog).one(v.TRANSITION_END, s).emulateTransitionEnd(a)
                                } else s()
                            }, t._enforceFocus = function() {
                                var e = this;
                                r.default(document).off(mn).on(mn, (function(t) {
                                    document !== t.target && e._element !== t.target && 0 === r.default(e._element).has(t.target).length && e._element.focus()
                                }))
                            }, t._setEscapeEvent = function() {
                                var e = this;
                                this._isShown ? r.default(this._element).on(_n, (function(t) {
                                    e._config.keyboard && t.which === ln ? (t.preventDefault(), e.hide()) : e._config.keyboard || t.which !== ln || e._triggerBackdropTransition()
                                })) : this._isShown || r.default(this._element).off(_n)
                            }, t._setResizeEvent = function() {
                                var e = this;
                                this._isShown ? r.default(window).on(vn, (function(t) {
                                    return e.handleUpdate(t)
                                })) : r.default(window).off(vn)
                            }, t._hideModal = function() {
                                var e = this;
                                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._showBackdrop((function() {
                                    r.default(document.body).removeClass(Sn), e._resetAdjustments(), e._resetScrollbar(), r.default(e._element).trigger(fn)
                                }))
                            }, t._removeBackdrop = function() {
                                this._backdrop && (r.default(this._backdrop).remove(), this._backdrop = null)
                            }, t._showBackdrop = function(e) {
                                var t = this,
                                    n = r.default(this._element).hasClass(Dn) ? Dn : "";
                                if (this._isShown && this._config.backdrop) {
                                    if (this._backdrop = document.createElement("div"), this._backdrop.className = Tn, n && this._backdrop.classList.add(n), r.default(this._backdrop).appendTo(document.body), r.default(this._element).on(yn, (function(e) {
                                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide())
                                        })), n && v.reflow(this._backdrop), r.default(this._backdrop).addClass(kn), !e) return;
                                    if (!n) return void e();
                                    var i = v.getTransitionDurationFromElement(this._backdrop);
                                    r.default(this._backdrop).one(v.TRANSITION_END, e).emulateTransitionEnd(i)
                                } else if (!this._isShown && this._backdrop) {
                                    r.default(this._backdrop).removeClass(kn);
                                    var o = function() {
                                        t._removeBackdrop(), e && e()
                                    };
                                    if (r.default(this._element).hasClass(Dn)) {
                                        var s = v.getTransitionDurationFromElement(this._backdrop);
                                        r.default(this._backdrop).one(v.TRANSITION_END, o).emulateTransitionEnd(s)
                                    } else o()
                                } else e && e()
                            }, t._adjustDialog = function() {
                                var e = this._element.scrollHeight > document.documentElement.clientHeight;
                                !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                            }, t._resetAdjustments = function() {
                                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                            }, t._checkScrollbar = function() {
                                var e = document.body.getBoundingClientRect();
                                this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                            }, t._setScrollbar = function() {
                                var e = this;
                                if (this._isBodyOverflowing) {
                                    var t = [].slice.call(document.querySelectorAll(In)),
                                        n = [].slice.call(document.querySelectorAll($n));
                                    r.default(t).each((function(t, n) {
                                        var i = n.style.paddingRight,
                                            o = r.default(n).css("padding-right");
                                        r.default(n).data("padding-right", i).css("padding-right", parseFloat(o) + e._scrollbarWidth + "px")
                                    })), r.default(n).each((function(t, n) {
                                        var i = n.style.marginRight,
                                            o = r.default(n).css("margin-right");
                                        r.default(n).data("margin-right", i).css("margin-right", parseFloat(o) - e._scrollbarWidth + "px")
                                    }));
                                    var i = document.body.style.paddingRight,
                                        o = r.default(document.body).css("padding-right");
                                    r.default(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                                }
                                r.default(document.body).addClass(Sn)
                            }, t._resetScrollbar = function() {
                                var e = [].slice.call(document.querySelectorAll(In));
                                r.default(e).each((function(e, t) {
                                    var n = r.default(t).data("padding-right");
                                    r.default(t).removeData("padding-right"), t.style.paddingRight = n || ""
                                }));
                                var t = [].slice.call(document.querySelectorAll("" + $n));
                                r.default(t).each((function(e, t) {
                                    var n = r.default(t).data("margin-right");
                                    void 0 !== n && r.default(t).css("margin-right", n).removeData("margin-right")
                                }));
                                var n = r.default(document.body).data("padding-right");
                                r.default(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
                            }, t._getScrollbarWidth = function() {
                                var e = document.createElement("div");
                                e.className = En, document.body.appendChild(e);
                                var t = e.getBoundingClientRect().width - e.clientWidth;
                                return document.body.removeChild(e), t
                            }, e._jQueryInterface = function(t, n) {
                                return this.each((function() {
                                    var i = r.default(this).data(rn),
                                        o = l({}, un, r.default(this).data(), "object" == typeof t && t ? t : {});
                                    if (i || (i = new e(this, o), r.default(this).data(rn, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t](n)
                                    } else o.show && i.show(n)
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return nn
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return un
                                }
                            }]), e
                        }();
                    r.default(document).on(xn, On, (function(e) {
                        var t, n = this,
                            i = v.getSelectorFromElement(this);
                        i && (t = document.querySelector(i));
                        var o = r.default(t).data(rn) ? "toggle" : l({}, r.default(t).data(), r.default(this).data());
                        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                        var s = r.default(t).one(pn, (function(e) {
                            e.isDefaultPrevented() || s.one(fn, (function() {
                                r.default(n).is(":visible") && n.focus()
                            }))
                        }));
                        Pn._jQueryInterface.call(r.default(t), o, this)
                    })), r.default.fn[tn] = Pn._jQueryInterface, r.default.fn[tn].Constructor = Pn, r.default.fn[tn].noConflict = function() {
                        return r.default.fn[tn] = an, Pn._jQueryInterface
                    };
                    var zn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
                        Hn = {
                            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                            a: ["target", "href", "title", "rel"],
                            area: [],
                            b: [],
                            br: [],
                            col: [],
                            code: [],
                            div: [],
                            em: [],
                            hr: [],
                            h1: [],
                            h2: [],
                            h3: [],
                            h4: [],
                            h5: [],
                            h6: [],
                            i: [],
                            img: ["src", "srcset", "alt", "title", "width", "height"],
                            li: [],
                            ol: [],
                            p: [],
                            pre: [],
                            s: [],
                            small: [],
                            span: [],
                            sub: [],
                            sup: [],
                            strong: [],
                            u: [],
                            ul: []
                        },
                        Mn = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
                        qn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;

                    function Rn(e, t) {
                        var n = e.nodeName.toLowerCase();
                        if (-1 !== t.indexOf(n)) return -1 === zn.indexOf(n) || Boolean(e.nodeValue.match(Mn) || e.nodeValue.match(qn));
                        for (var i = t.filter((function(e) {
                                return e instanceof RegExp
                            })), r = 0, o = i.length; r < o; r++)
                            if (n.match(i[r])) return !0;
                        return !1
                    }

                    function Fn(e, t, n) {
                        if (0 === e.length) return e;
                        if (n && "function" == typeof n) return n(e);
                        for (var i = (new window.DOMParser).parseFromString(e, "text/html"), r = Object.keys(t), o = [].slice.call(i.body.querySelectorAll("*")), s = function(e, n) {
                                var i = o[e],
                                    s = i.nodeName.toLowerCase();
                                if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                                var a = [].slice.call(i.attributes),
                                    l = [].concat(t["*"] || [], t[s] || []);
                                a.forEach((function(e) {
                                    Rn(e, l) || i.removeAttribute(e.nodeName)
                                }))
                            }, a = 0, l = o.length; a < l; a++) s(a);
                        return i.body.innerHTML
                    }
                    var Wn = "tooltip",
                        Bn = "4.6.0",
                        Un = "bs.tooltip",
                        Qn = "." + Un,
                        Vn = r.default.fn[Wn],
                        Xn = "bs-tooltip",
                        Yn = new RegExp("(^|\\s)" + Xn + "\\S+", "g"),
                        Kn = ["sanitize", "whiteList", "sanitizeFn"],
                        Gn = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string|function)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)",
                            boundary: "(string|element)",
                            customClass: "(string|function)",
                            sanitize: "boolean",
                            sanitizeFn: "(null|function)",
                            whiteList: "object",
                            popperConfig: "(null|object)"
                        },
                        Jn = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: "right",
                            BOTTOM: "bottom",
                            LEFT: "left"
                        },
                        Zn = {
                            animation: !0,
                            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                            trigger: "hover focus",
                            title: "",
                            delay: 0,
                            html: !1,
                            selector: !1,
                            placement: "top",
                            offset: 0,
                            container: !1,
                            fallbackPlacement: "flip",
                            boundary: "scrollParent",
                            customClass: "",
                            sanitize: !0,
                            sanitizeFn: null,
                            whiteList: Hn,
                            popperConfig: null
                        },
                        ei = "show",
                        ti = "out",
                        ni = {
                            HIDE: "hide" + Qn,
                            HIDDEN: "hidden" + Qn,
                            SHOW: "show" + Qn,
                            SHOWN: "shown" + Qn,
                            INSERTED: "inserted" + Qn,
                            CLICK: "click" + Qn,
                            FOCUSIN: "focusin" + Qn,
                            FOCUSOUT: "focusout" + Qn,
                            MOUSEENTER: "mouseenter" + Qn,
                            MOUSELEAVE: "mouseleave" + Qn
                        },
                        ii = "fade",
                        ri = "show",
                        oi = ".tooltip-inner",
                        si = ".arrow",
                        ai = "hover",
                        li = "focus",
                        ui = "click",
                        ci = "manual",
                        di = function() {
                            function e(e, t) {
                                if (void 0 === o.default) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                            }
                            var t = e.prototype;
                            return t.enable = function() {
                                this._isEnabled = !0
                            }, t.disable = function() {
                                this._isEnabled = !1
                            }, t.toggleEnabled = function() {
                                this._isEnabled = !this._isEnabled
                            }, t.toggle = function(e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var t = this.constructor.DATA_KEY,
                                            n = r.default(e.currentTarget).data(t);
                                        n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                                    } else {
                                        if (r.default(this.getTipElement()).hasClass(ri)) return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }, t.dispose = function() {
                                clearTimeout(this._timeout), r.default.removeData(this.element, this.constructor.DATA_KEY), r.default(this.element).off(this.constructor.EVENT_KEY), r.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && r.default(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                            }, t.show = function() {
                                var e = this;
                                if ("none" === r.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                                var t = r.default.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    r.default(this.element).trigger(t);
                                    var n = v.findShadowRoot(this.element),
                                        i = r.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                                    if (t.isDefaultPrevented() || !i) return;
                                    var s = this.getTipElement(),
                                        a = v.getUID(this.constructor.NAME);
                                    s.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && r.default(s).addClass(ii);
                                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                                        u = this._getAttachment(l);
                                    this.addAttachmentClass(u);
                                    var c = this._getContainer();
                                    r.default(s).data(this.constructor.DATA_KEY, this), r.default.contains(this.element.ownerDocument.documentElement, this.tip) || r.default(s).appendTo(c), r.default(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new o.default(this.element, s, this._getPopperConfig(u)), r.default(s).addClass(ri), r.default(s).addClass(this.config.customClass), "ontouchstart" in document.documentElement && r.default(document.body).children().on("mouseover", null, r.default.noop);
                                    var d = function() {
                                        e.config.animation && e._fixTransition();
                                        var t = e._hoverState;
                                        e._hoverState = null, r.default(e.element).trigger(e.constructor.Event.SHOWN), t === ti && e._leave(null, e)
                                    };
                                    if (r.default(this.tip).hasClass(ii)) {
                                        var h = v.getTransitionDurationFromElement(this.tip);
                                        r.default(this.tip).one(v.TRANSITION_END, d).emulateTransitionEnd(h)
                                    } else d()
                                }
                            }, t.hide = function(e) {
                                var t = this,
                                    n = this.getTipElement(),
                                    i = r.default.Event(this.constructor.Event.HIDE),
                                    o = function() {
                                        t._hoverState !== ei && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), r.default(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
                                    };
                                if (r.default(this.element).trigger(i), !i.isDefaultPrevented()) {
                                    if (r.default(n).removeClass(ri), "ontouchstart" in document.documentElement && r.default(document.body).children().off("mouseover", null, r.default.noop), this._activeTrigger[ui] = !1, this._activeTrigger[li] = !1, this._activeTrigger[ai] = !1, r.default(this.tip).hasClass(ii)) {
                                        var s = v.getTransitionDurationFromElement(n);
                                        r.default(n).one(v.TRANSITION_END, o).emulateTransitionEnd(s)
                                    } else o();
                                    this._hoverState = ""
                                }
                            }, t.update = function() {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }, t.isWithContent = function() {
                                return Boolean(this.getTitle())
                            }, t.addAttachmentClass = function(e) {
                                r.default(this.getTipElement()).addClass(Xn + "-" + e)
                            }, t.getTipElement = function() {
                                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
                            }, t.setContent = function() {
                                var e = this.getTipElement();
                                this.setElementContent(r.default(e.querySelectorAll(oi)), this.getTitle()), r.default(e).removeClass(ii + " " + ri)
                            }, t.setElementContent = function(e, t) {
                                "object" != typeof t || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Fn(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? r.default(t).parent().is(e) || e.empty().append(t) : e.text(r.default(t).text())
                            }, t.getTitle = function() {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                            }, t._getPopperConfig = function(e) {
                                var t = this;
                                return l({}, {
                                    placement: e,
                                    modifiers: {
                                        offset: this._getOffset(),
                                        flip: {
                                            behavior: this.config.fallbackPlacement
                                        },
                                        arrow: {
                                            element: si
                                        },
                                        preventOverflow: {
                                            boundariesElement: this.config.boundary
                                        }
                                    },
                                    onCreate: function(e) {
                                        e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                                    },
                                    onUpdate: function(e) {
                                        return t._handlePopperPlacementChange(e)
                                    }
                                }, this.config.popperConfig)
                            }, t._getOffset = function() {
                                var e = this,
                                    t = {};
                                return "function" == typeof this.config.offset ? t.fn = function(t) {
                                    return t.offsets = l({}, t.offsets, e.config.offset(t.offsets, e.element) || {}), t
                                } : t.offset = this.config.offset, t
                            }, t._getContainer = function() {
                                return !1 === this.config.container ? document.body : v.isElement(this.config.container) ? r.default(this.config.container) : r.default(document).find(this.config.container)
                            }, t._getAttachment = function(e) {
                                return Jn[e.toUpperCase()]
                            }, t._setListeners = function() {
                                var e = this;
                                this.config.trigger.split(" ").forEach((function(t) {
                                    if ("click" === t) r.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, (function(t) {
                                        return e.toggle(t)
                                    }));
                                    else if (t !== ci) {
                                        var n = t === ai ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                            i = t === ai ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        r.default(e.element).on(n, e.config.selector, (function(t) {
                                            return e._enter(t)
                                        })).on(i, e.config.selector, (function(t) {
                                            return e._leave(t)
                                        }))
                                    }
                                })), this._hideModalHandler = function() {
                                    e.element && e.hide()
                                }, r.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = l({}, this.config, {
                                    trigger: "manual",
                                    selector: ""
                                }) : this._fixTitle()
                            }, t._fixTitle = function() {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                            }, t._enter = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? li : ai] = !0), r.default(t.getTipElement()).hasClass(ri) || t._hoverState === ei ? t._hoverState = ei : (clearTimeout(t._timeout), t._hoverState = ei, t.config.delay && t.config.delay.show ? t._timeout = setTimeout((function() {
                                    t._hoverState === ei && t.show()
                                }), t.config.delay.show) : t.show())
                            }, t._leave = function(e, t) {
                                var n = this.constructor.DATA_KEY;
                                (t = t || r.default(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), r.default(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? li : ai] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = ti, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout((function() {
                                    t._hoverState === ti && t.hide()
                                }), t.config.delay.hide) : t.hide())
                            }, t._isWithActiveTrigger = function() {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e]) return !0;
                                return !1
                            }, t._getConfig = function(e) {
                                var t = r.default(this.element).data();
                                return Object.keys(t).forEach((function(e) {
                                    -1 !== Kn.indexOf(e) && delete t[e]
                                })), "number" == typeof(e = l({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), v.typeCheckConfig(Wn, e, this.constructor.DefaultType), e.sanitize && (e.template = Fn(e.template, e.whiteList, e.sanitizeFn)), e
                            }, t._getDelegateConfig = function() {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }, t._cleanTipClass = function() {
                                var e = r.default(this.getTipElement()),
                                    t = e.attr("class").match(Yn);
                                null !== t && t.length && e.removeClass(t.join(""))
                            }, t._handlePopperPlacementChange = function(e) {
                                this.tip = e.instance.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                            }, t._fixTransition = function() {
                                var e = this.getTipElement(),
                                    t = this.config.animation;
                                null === e.getAttribute("x-placement") && (r.default(e).removeClass(ii), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this),
                                        i = n.data(Un),
                                        o = "object" == typeof t && t;
                                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, o), n.data(Un, i)), "string" == typeof t)) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t]()
                                    }
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return Bn
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Zn
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return Wn
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return Un
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return ni
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return Qn
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return Gn
                                }
                            }]), e
                        }();
                    r.default.fn[Wn] = di._jQueryInterface, r.default.fn[Wn].Constructor = di, r.default.fn[Wn].noConflict = function() {
                        return r.default.fn[Wn] = Vn, di._jQueryInterface
                    };
                    var hi = "popover",
                        fi = "4.6.0",
                        pi = "bs.popover",
                        gi = "." + pi,
                        mi = r.default.fn[hi],
                        vi = "bs-popover",
                        yi = new RegExp("(^|\\s)" + vi + "\\S+", "g"),
                        _i = l({}, di.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                        }),
                        wi = l({}, di.DefaultType, {
                            content: "(string|element|function)"
                        }),
                        bi = "fade",
                        xi = "show",
                        Ci = ".popover-header",
                        Ei = ".popover-body",
                        Ti = {
                            HIDE: "hide" + gi,
                            HIDDEN: "hidden" + gi,
                            SHOW: "show" + gi,
                            SHOWN: "shown" + gi,
                            INSERTED: "inserted" + gi,
                            CLICK: "click" + gi,
                            FOCUSIN: "focusin" + gi,
                            FOCUSOUT: "focusout" + gi,
                            MOUSEENTER: "mouseenter" + gi,
                            MOUSELEAVE: "mouseleave" + gi
                        },
                        Si = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            u(t, e);
                            var n = t.prototype;
                            return n.isWithContent = function() {
                                return this.getTitle() || this._getContent()
                            }, n.addAttachmentClass = function(e) {
                                r.default(this.getTipElement()).addClass(vi + "-" + e)
                            }, n.getTipElement = function() {
                                return this.tip = this.tip || r.default(this.config.template)[0], this.tip
                            }, n.setContent = function() {
                                var e = r.default(this.getTipElement());
                                this.setElementContent(e.find(Ci), this.getTitle());
                                var t = this._getContent();
                                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(Ei), t), e.removeClass(bi + " " + xi)
                            }, n._getContent = function() {
                                return this.element.getAttribute("data-content") || this.config.content
                            }, n._cleanTipClass = function() {
                                var e = r.default(this.getTipElement()),
                                    t = e.attr("class").match(yi);
                                null !== t && t.length > 0 && e.removeClass(t.join(""))
                            }, t._jQueryInterface = function(e) {
                                return this.each((function() {
                                    var n = r.default(this).data(pi),
                                        i = "object" == typeof e ? e : null;
                                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i), r.default(this).data(pi, n)), "string" == typeof e)) {
                                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                                        n[e]()
                                    }
                                }))
                            }, a(t, null, [{
                                key: "VERSION",
                                get: function() {
                                    return fi
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return _i
                                }
                            }, {
                                key: "NAME",
                                get: function() {
                                    return hi
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function() {
                                    return pi
                                }
                            }, {
                                key: "Event",
                                get: function() {
                                    return Ti
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function() {
                                    return gi
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return wi
                                }
                            }]), t
                        }(di);
                    r.default.fn[hi] = Si._jQueryInterface, r.default.fn[hi].Constructor = Si, r.default.fn[hi].noConflict = function() {
                        return r.default.fn[hi] = mi, Si._jQueryInterface
                    };
                    var Di = "scrollspy",
                        ki = "4.6.0",
                        Ai = "bs.scrollspy",
                        Ni = "." + Ai,
                        ji = ".data-api",
                        Oi = r.default.fn[Di],
                        Li = {
                            offset: 10,
                            method: "auto",
                            target: ""
                        },
                        Ii = {
                            offset: "number",
                            method: "string",
                            target: "(string|element)"
                        },
                        $i = "activate" + Ni,
                        Pi = "scroll" + Ni,
                        zi = "load" + Ni + ji,
                        Hi = "dropdown-item",
                        Mi = "active",
                        qi = '[data-spy="scroll"]',
                        Ri = ".nav, .list-group",
                        Fi = ".nav-link",
                        Wi = ".nav-item",
                        Bi = ".list-group-item",
                        Ui = ".dropdown",
                        Qi = ".dropdown-item",
                        Vi = ".dropdown-toggle",
                        Xi = "offset",
                        Yi = "position",
                        Ki = function() {
                            function e(e, t) {
                                var n = this;
                                this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Fi + "," + this._config.target + " " + Bi + "," + this._config.target + " " + Qi, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, r.default(this._scrollElement).on(Pi, (function(e) {
                                    return n._process(e)
                                })), this.refresh(), this._process()
                            }
                            var t = e.prototype;
                            return t.refresh = function() {
                                var e = this,
                                    t = this._scrollElement === this._scrollElement.window ? Xi : Yi,
                                    n = "auto" === this._config.method ? t : this._config.method,
                                    i = n === Yi ? this._getScrollTop() : 0;
                                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map((function(e) {
                                    var t, o = v.getSelectorFromElement(e);
                                    if (o && (t = document.querySelector(o)), t) {
                                        var s = t.getBoundingClientRect();
                                        if (s.width || s.height) return [r.default(t)[n]().top + i, o]
                                    }
                                    return null
                                })).filter((function(e) {
                                    return e
                                })).sort((function(e, t) {
                                    return e[0] - t[0]
                                })).forEach((function(t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1])
                                }))
                            }, t.dispose = function() {
                                r.default.removeData(this._element, Ai), r.default(this._scrollElement).off(Ni), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                            }, t._getConfig = function(e) {
                                if ("string" != typeof(e = l({}, Li, "object" == typeof e && e ? e : {})).target && v.isElement(e.target)) {
                                    var t = r.default(e.target).attr("id");
                                    t || (t = v.getUID(Di), r.default(e.target).attr("id", t)), e.target = "#" + t
                                }
                                return v.typeCheckConfig(Di, e, Ii), e
                            }, t._getScrollTop = function() {
                                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                            }, t._getScrollHeight = function() {
                                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                            }, t._getOffsetHeight = function() {
                                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                            }, t._process = function() {
                                var e = this._getScrollTop() + this._config.offset,
                                    t = this._getScrollHeight(),
                                    n = this._config.offset + t - this._getOffsetHeight();
                                if (this._scrollHeight !== t && this.refresh(), e >= n) {
                                    var i = this._targets[this._targets.length - 1];
                                    this._activeTarget !== i && this._activate(i)
                                } else {
                                    if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                                    for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                                }
                            }, t._activate = function(e) {
                                this._activeTarget = e, this._clear();
                                var t = this._selector.split(",").map((function(t) {
                                        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                    })),
                                    n = r.default([].slice.call(document.querySelectorAll(t.join(","))));
                                n.hasClass(Hi) ? (n.closest(Ui).find(Vi).addClass(Mi), n.addClass(Mi)) : (n.addClass(Mi), n.parents(Ri).prev(Fi + ", " + Bi).addClass(Mi), n.parents(Ri).prev(Wi).children(Fi).addClass(Mi)), r.default(this._scrollElement).trigger($i, {
                                    relatedTarget: e
                                })
                            }, t._clear = function() {
                                [].slice.call(document.querySelectorAll(this._selector)).filter((function(e) {
                                    return e.classList.contains(Mi)
                                })).forEach((function(e) {
                                    return e.classList.remove(Mi)
                                }))
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this).data(Ai);
                                    if (n || (n = new e(this, "object" == typeof t && t), r.default(this).data(Ai, n)), "string" == typeof t) {
                                        if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                        n[t]()
                                    }
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return ki
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Li
                                }
                            }]), e
                        }();
                    r.default(window).on(zi, (function() {
                        for (var e = [].slice.call(document.querySelectorAll(qi)), t = e.length; t--;) {
                            var n = r.default(e[t]);
                            Ki._jQueryInterface.call(n, n.data())
                        }
                    })), r.default.fn[Di] = Ki._jQueryInterface, r.default.fn[Di].Constructor = Ki, r.default.fn[Di].noConflict = function() {
                        return r.default.fn[Di] = Oi, Ki._jQueryInterface
                    };
                    var Gi = "tab",
                        Ji = "4.6.0",
                        Zi = "bs.tab",
                        er = "." + Zi,
                        tr = ".data-api",
                        nr = r.default.fn[Gi],
                        ir = "hide" + er,
                        rr = "hidden" + er,
                        or = "show" + er,
                        sr = "shown" + er,
                        ar = "click" + er + tr,
                        lr = "dropdown-menu",
                        ur = "active",
                        cr = "disabled",
                        dr = "fade",
                        hr = "show",
                        fr = ".dropdown",
                        pr = ".nav, .list-group",
                        gr = ".active",
                        mr = "> li > .active",
                        vr = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                        yr = ".dropdown-toggle",
                        _r = "> .dropdown-menu .active",
                        wr = function() {
                            function e(e) {
                                this._element = e
                            }
                            var t = e.prototype;
                            return t.show = function() {
                                var e = this;
                                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && r.default(this._element).hasClass(ur) || r.default(this._element).hasClass(cr))) {
                                    var t, n, i = r.default(this._element).closest(pr)[0],
                                        o = v.getSelectorFromElement(this._element);
                                    if (i) {
                                        var s = "UL" === i.nodeName || "OL" === i.nodeName ? mr : gr;
                                        n = (n = r.default.makeArray(r.default(i).find(s)))[n.length - 1]
                                    }
                                    var a = r.default.Event(ir, {
                                            relatedTarget: this._element
                                        }),
                                        l = r.default.Event(or, {
                                            relatedTarget: n
                                        });
                                    if (n && r.default(n).trigger(a), r.default(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
                                        o && (t = document.querySelector(o)), this._activate(this._element, i);
                                        var u = function() {
                                            var t = r.default.Event(rr, {
                                                    relatedTarget: e._element
                                                }),
                                                i = r.default.Event(sr, {
                                                    relatedTarget: n
                                                });
                                            r.default(n).trigger(t), r.default(e._element).trigger(i)
                                        };
                                        t ? this._activate(t, t.parentNode, u) : u()
                                    }
                                }
                            }, t.dispose = function() {
                                r.default.removeData(this._element, Zi), this._element = null
                            }, t._activate = function(e, t, n) {
                                var i = this,
                                    o = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? r.default(t).children(gr) : r.default(t).find(mr))[0],
                                    s = n && o && r.default(o).hasClass(dr),
                                    a = function() {
                                        return i._transitionComplete(e, o, n)
                                    };
                                if (o && s) {
                                    var l = v.getTransitionDurationFromElement(o);
                                    r.default(o).removeClass(hr).one(v.TRANSITION_END, a).emulateTransitionEnd(l)
                                } else a()
                            }, t._transitionComplete = function(e, t, n) {
                                if (t) {
                                    r.default(t).removeClass(ur);
                                    var i = r.default(t.parentNode).find(_r)[0];
                                    i && r.default(i).removeClass(ur), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                                }
                                if (r.default(e).addClass(ur), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), v.reflow(e), e.classList.contains(dr) && e.classList.add(hr), e.parentNode && r.default(e.parentNode).hasClass(lr)) {
                                    var o = r.default(e).closest(fr)[0];
                                    if (o) {
                                        var s = [].slice.call(o.querySelectorAll(yr));
                                        r.default(s).addClass(ur)
                                    }
                                    e.setAttribute("aria-expanded", !0)
                                }
                                n && n()
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this),
                                        i = n.data(Zi);
                                    if (i || (i = new e(this), n.data(Zi, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t]()
                                    }
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return Ji
                                }
                            }]), e
                        }();
                    r.default(document).on(ar, vr, (function(e) {
                        e.preventDefault(), wr._jQueryInterface.call(r.default(this), "show")
                    })), r.default.fn[Gi] = wr._jQueryInterface, r.default.fn[Gi].Constructor = wr, r.default.fn[Gi].noConflict = function() {
                        return r.default.fn[Gi] = nr, wr._jQueryInterface
                    };
                    var br = "toast",
                        xr = "4.6.0",
                        Cr = "bs.toast",
                        Er = "." + Cr,
                        Tr = r.default.fn[br],
                        Sr = "click.dismiss" + Er,
                        Dr = "hide" + Er,
                        kr = "hidden" + Er,
                        Ar = "show" + Er,
                        Nr = "shown" + Er,
                        jr = "fade",
                        Or = "hide",
                        Lr = "show",
                        Ir = "showing",
                        $r = {
                            animation: "boolean",
                            autohide: "boolean",
                            delay: "number"
                        },
                        Pr = {
                            animation: !0,
                            autohide: !0,
                            delay: 500
                        },
                        zr = '[data-dismiss="toast"]',
                        Hr = function() {
                            function e(e, t) {
                                this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
                            }
                            var t = e.prototype;
                            return t.show = function() {
                                var e = this,
                                    t = r.default.Event(Ar);
                                if (r.default(this._element).trigger(t), !t.isDefaultPrevented()) {
                                    this._clearTimeout(), this._config.animation && this._element.classList.add(jr);
                                    var n = function() {
                                        e._element.classList.remove(Ir), e._element.classList.add(Lr), r.default(e._element).trigger(Nr), e._config.autohide && (e._timeout = setTimeout((function() {
                                            e.hide()
                                        }), e._config.delay))
                                    };
                                    if (this._element.classList.remove(Or), v.reflow(this._element), this._element.classList.add(Ir), this._config.animation) {
                                        var i = v.getTransitionDurationFromElement(this._element);
                                        r.default(this._element).one(v.TRANSITION_END, n).emulateTransitionEnd(i)
                                    } else n()
                                }
                            }, t.hide = function() {
                                if (this._element.classList.contains(Lr)) {
                                    var e = r.default.Event(Dr);
                                    r.default(this._element).trigger(e), e.isDefaultPrevented() || this._close()
                                }
                            }, t.dispose = function() {
                                this._clearTimeout(), this._element.classList.contains(Lr) && this._element.classList.remove(Lr), r.default(this._element).off(Sr), r.default.removeData(this._element, Cr), this._element = null, this._config = null
                            }, t._getConfig = function(e) {
                                return e = l({}, Pr, r.default(this._element).data(), "object" == typeof e && e ? e : {}), v.typeCheckConfig(br, e, this.constructor.DefaultType), e
                            }, t._setListeners = function() {
                                var e = this;
                                r.default(this._element).on(Sr, zr, (function() {
                                    return e.hide()
                                }))
                            }, t._close = function() {
                                var e = this,
                                    t = function() {
                                        e._element.classList.add(Or), r.default(e._element).trigger(kr)
                                    };
                                if (this._element.classList.remove(Lr), this._config.animation) {
                                    var n = v.getTransitionDurationFromElement(this._element);
                                    r.default(this._element).one(v.TRANSITION_END, t).emulateTransitionEnd(n)
                                } else t()
                            }, t._clearTimeout = function() {
                                clearTimeout(this._timeout), this._timeout = null
                            }, e._jQueryInterface = function(t) {
                                return this.each((function() {
                                    var n = r.default(this),
                                        i = n.data(Cr);
                                    if (i || (i = new e(this, "object" == typeof t && t), n.data(Cr, i)), "string" == typeof t) {
                                        if (void 0 === i[t]) throw new TypeError('No method named "' + t + '"');
                                        i[t](this)
                                    }
                                }))
                            }, a(e, null, [{
                                key: "VERSION",
                                get: function() {
                                    return xr
                                }
                            }, {
                                key: "DefaultType",
                                get: function() {
                                    return $r
                                }
                            }, {
                                key: "Default",
                                get: function() {
                                    return Pr
                                }
                            }]), e
                        }();
                    r.default.fn[br] = Hr._jQueryInterface, r.default.fn[br].Constructor = Hr, r.default.fn[br].noConflict = function() {
                        return r.default.fn[br] = Tr, Hr._jQueryInterface
                    }, e.Alert = j, e.Button = G, e.Carousel = Be, e.Collapse = ht, e.Dropdown = en, e.Modal = Pn, e.Popover = Si, e.Scrollspy = Ki, e.Tab = wr, e.Toast = Hr, e.Tooltip = di, e.Util = v, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }(t, n(755), n(981))
            },
            755: function(e, t) {
                var n;
                ! function(t, n) {
                    "use strict";
                    "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
                        if (!e.document) throw new Error("jQuery requires a window with a document");
                        return n(e)
                    } : n(t)
                }("undefined" != typeof window ? window : this, (function(i, r) {
                    "use strict";
                    var o = [],
                        s = Object.getPrototypeOf,
                        a = o.slice,
                        l = o.flat ? function(e) {
                            return o.flat.call(e)
                        } : function(e) {
                            return o.concat.apply([], e)
                        },
                        u = o.push,
                        c = o.indexOf,
                        d = {},
                        h = d.toString,
                        f = d.hasOwnProperty,
                        p = f.toString,
                        g = p.call(Object),
                        m = {},
                        v = function(e) {
                            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
                        },
                        y = function(e) {
                            return null != e && e === e.window
                        },
                        _ = i.document,
                        w = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function b(e, t, n) {
                        var i, r, o = (n = n || _).createElement("script");
                        if (o.text = e, t)
                            for (i in w)(r = t[i] || t.getAttribute && t.getAttribute(i)) && o.setAttribute(i, r);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function x(e) {
                        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e
                    }
                    var C = "3.6.0",
                        E = function(e, t) {
                            return new E.fn.init(e, t)
                        };

                    function T(e) {
                        var t = !!e && "length" in e && e.length,
                            n = x(e);
                        return !v(e) && !y(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
                    }
                    E.fn = E.prototype = {
                        jquery: C,
                        constructor: E,
                        length: 0,
                        toArray: function() {
                            return a.call(this)
                        },
                        get: function(e) {
                            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
                        },
                        pushStack: function(e) {
                            var t = E.merge(this.constructor(), e);
                            return t.prevObject = this, t
                        },
                        each: function(e) {
                            return E.each(this, e)
                        },
                        map: function(e) {
                            return this.pushStack(E.map(this, (function(t, n) {
                                return e.call(t, n, t)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(a.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(E.grep(this, (function(e, t) {
                                return (t + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(E.grep(this, (function(e, t) {
                                return t % 2
                            })))
                        },
                        eq: function(e) {
                            var t = this.length,
                                n = +e + (e < 0 ? t : 0);
                            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: u,
                        sort: o.sort,
                        splice: o.splice
                    }, E.extend = E.fn.extend = function() {
                        var e, t, n, i, r, o, s = arguments[0] || {},
                            a = 1,
                            l = arguments.length,
                            u = !1;
                        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || v(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
                            if (null != (e = arguments[a]))
                                for (t in e) i = e[t], "__proto__" !== t && s !== i && (u && i && (E.isPlainObject(i) || (r = Array.isArray(i))) ? (n = s[t], o = r && !Array.isArray(n) ? [] : r || E.isPlainObject(n) ? n : {}, r = !1, s[t] = E.extend(u, o, i)) : void 0 !== i && (s[t] = i));
                        return s
                    }, E.extend({
                        expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e)
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return !(!e || "[object Object]" !== h.call(e)) && (!(t = s(e)) || "function" == typeof(n = f.call(t, "constructor") && t.constructor) && p.call(n) === g)
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0
                        },
                        globalEval: function(e, t, n) {
                            b(e, {
                                nonce: t && t.nonce
                            }, n)
                        },
                        each: function(e, t) {
                            var n, i = 0;
                            if (T(e))
                                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                            else
                                for (i in e)
                                    if (!1 === t.call(e[i], i, e[i])) break;
                            return e
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return null != e && (T(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : c.call(t, e, n)
                        },
                        merge: function(e, t) {
                            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                            return e.length = r, e
                        },
                        grep: function(e, t, n) {
                            for (var i = [], r = 0, o = e.length, s = !n; r < o; r++) !t(e[r], r) !== s && i.push(e[r]);
                            return i
                        },
                        map: function(e, t, n) {
                            var i, r, o = 0,
                                s = [];
                            if (T(e))
                                for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && s.push(r);
                            else
                                for (o in e) null != (r = t(e[o], o, n)) && s.push(r);
                            return l(s)
                        },
                        guid: 1,
                        support: m
                    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = o[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(e, t) {
                        d["[object " + t + "]"] = t.toLowerCase()
                    }));
                    var S = function(e) {
                        var t, n, i, r, o, s, a, l, u, c, d, h, f, p, g, m, v, y, _, w = "sizzle" + 1 * new Date,
                            b = e.document,
                            x = 0,
                            C = 0,
                            E = le(),
                            T = le(),
                            S = le(),
                            D = le(),
                            k = function(e, t) {
                                return e === t && (d = !0), 0
                            },
                            A = {}.hasOwnProperty,
                            N = [],
                            j = N.pop,
                            O = N.push,
                            L = N.push,
                            I = N.slice,
                            $ = function(e, t) {
                                for (var n = 0, i = e.length; n < i; n++)
                                    if (e[n] === t) return n;
                                return -1
                            },
                            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            z = "[\\x20\\t\\r\\n\\f]",
                            H = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                            M = "\\[[\\x20\\t\\r\\n\\f]*(" + H + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + z + "*\\]",
                            q = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
                            R = new RegExp(z + "+", "g"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            W = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            B = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            U = new RegExp(z + "|>"),
                            Q = new RegExp(q),
                            V = new RegExp("^" + H + "$"),
                            X = {
                                ID: new RegExp("^#(" + H + ")"),
                                CLASS: new RegExp("^\\.(" + H + ")"),
                                TAG: new RegExp("^(" + H + "|[*])"),
                                ATTR: new RegExp("^" + M),
                                PSEUDO: new RegExp("^" + q),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + P + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            Y = /HTML$/i,
                            K = /^(?:input|select|textarea|button)$/i,
                            G = /^h\d$/i,
                            J = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                            ne = function(e, t) {
                                var n = "0x" + e.slice(1) - 65536;
                                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                            },
                            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            re = function(e, t) {
                                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
                            },
                            oe = function() {
                                h()
                            },
                            se = we((function(e) {
                                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                            }), {
                                dir: "parentNode",
                                next: "legend"
                            });
                        try {
                            L.apply(N = I.call(b.childNodes), b.childNodes), N[b.childNodes.length].nodeType
                        } catch (e) {
                            L = {
                                apply: N.length ? function(e, t) {
                                    O.apply(e, I.call(t))
                                } : function(e, t) {
                                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                                    e.length = n - 1
                                }
                            }
                        }

                        function ae(e, t, i, r) {
                            var o, a, u, c, d, p, v, y = t && t.ownerDocument,
                                b = t ? t.nodeType : 9;
                            if (i = i || [], "string" != typeof e || !e || 1 !== b && 9 !== b && 11 !== b) return i;
                            if (!r && (h(t), t = t || f, g)) {
                                if (11 !== b && (d = Z.exec(e)))
                                    if (o = d[1]) {
                                        if (9 === b) {
                                            if (!(u = t.getElementById(o))) return i;
                                            if (u.id === o) return i.push(u), i
                                        } else if (y && (u = y.getElementById(o)) && _(t, u) && u.id === o) return i.push(u), i
                                    } else {
                                        if (d[2]) return L.apply(i, t.getElementsByTagName(e)), i;
                                        if ((o = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return L.apply(i, t.getElementsByClassName(o)), i
                                    }
                                if (n.qsa && !D[e + " "] && (!m || !m.test(e)) && (1 !== b || "object" !== t.nodeName.toLowerCase())) {
                                    if (v = e, y = t, 1 === b && (U.test(e) || B.test(e))) {
                                        for ((y = ee.test(e) && ve(t.parentNode) || t) === t && n.scope || ((c = t.getAttribute("id")) ? c = c.replace(ie, re) : t.setAttribute("id", c = w)), a = (p = s(e)).length; a--;) p[a] = (c ? "#" + c : ":scope") + " " + _e(p[a]);
                                        v = p.join(",")
                                    }
                                    try {
                                        return L.apply(i, y.querySelectorAll(v)), i
                                    } catch (t) {
                                        D(e, !0)
                                    } finally {
                                        c === w && t.removeAttribute("id")
                                    }
                                }
                            }
                            return l(e.replace(F, "$1"), t, i, r)
                        }

                        function le() {
                            var e = [];
                            return function t(n, r) {
                                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], t[n + " "] = r
                            }
                        }

                        function ue(e) {
                            return e[w] = !0, e
                        }

                        function ce(e) {
                            var t = f.createElement("fieldset");
                            try {
                                return !!e(t)
                            } catch (e) {
                                return !1
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t), t = null
                            }
                        }

                        function de(e, t) {
                            for (var n = e.split("|"), r = n.length; r--;) i.attrHandle[n[r]] = t
                        }

                        function he(e, t) {
                            var n = t && e,
                                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                            if (i) return i;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === t) return -1;
                            return e ? 1 : -1
                        }

                        function fe(e) {
                            return function(t) {
                                return "input" === t.nodeName.toLowerCase() && t.type === e
                            }
                        }

                        function pe(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && t.type === e
                            }
                        }

                        function ge(e) {
                            return function(t) {
                                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && se(t) === e : t.disabled === e : "label" in t && t.disabled === e
                            }
                        }

                        function me(e) {
                            return ue((function(t) {
                                return t = +t, ue((function(n, i) {
                                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                                }))
                            }))
                        }

                        function ve(e) {
                            return e && void 0 !== e.getElementsByTagName && e
                        }
                        for (t in n = ae.support = {}, o = ae.isXML = function(e) {
                                var t = e && e.namespaceURI,
                                    n = e && (e.ownerDocument || e).documentElement;
                                return !Y.test(t || n && n.nodeName || "HTML")
                            }, h = ae.setDocument = function(e) {
                                var t, r, s = e ? e.ownerDocument || e : b;
                                return s != f && 9 === s.nodeType && s.documentElement ? (p = (f = s).documentElement, g = !o(f), b != f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)), n.scope = ce((function(e) {
                                    return p.appendChild(e).appendChild(f.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                                })), n.attributes = ce((function(e) {
                                    return e.className = "i", !e.getAttribute("className")
                                })), n.getElementsByTagName = ce((function(e) {
                                    return e.appendChild(f.createComment("")), !e.getElementsByTagName("*").length
                                })), n.getElementsByClassName = J.test(f.getElementsByClassName), n.getById = ce((function(e) {
                                    return p.appendChild(e).id = w, !f.getElementsByName || !f.getElementsByName(w).length
                                })), n.getById ? (i.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }, i.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n = t.getElementById(e);
                                        return n ? [n] : []
                                    }
                                }) : (i.filter.ID = function(e) {
                                    var t = e.replace(te, ne);
                                    return function(e) {
                                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                        return n && n.value === t
                                    }
                                }, i.find.ID = function(e, t) {
                                    if (void 0 !== t.getElementById && g) {
                                        var n, i, r, o = t.getElementById(e);
                                        if (o) {
                                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                            for (r = t.getElementsByName(e), i = 0; o = r[i++];)
                                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                                        }
                                        return []
                                    }
                                }), i.find.TAG = n.getElementsByTagName ? function(e, t) {
                                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
                                } : function(e, t) {
                                    var n, i = [],
                                        r = 0,
                                        o = t.getElementsByTagName(e);
                                    if ("*" === e) {
                                        for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                                        return i
                                    }
                                    return o
                                }, i.find.CLASS = n.getElementsByClassName && function(e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e)
                                }, v = [], m = [], (n.qsa = J.test(f.querySelectorAll)) && (ce((function(e) {
                                    var t;
                                    p.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), (t = f.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || m.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]"), e.querySelectorAll("\\\f"), m.push("[\\r\\n\\f]")
                                })), ce((function(e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = f.createElement("input");
                                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), p.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                                }))), (n.matchesSelector = J.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ce((function(e) {
                                    n.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), v.push("!=", q)
                                })), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = J.test(p.compareDocumentPosition), _ = t || J.test(p.contains) ? function(e, t) {
                                    var n = 9 === e.nodeType ? e.documentElement : e,
                                        i = t && t.parentNode;
                                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                                } : function(e, t) {
                                    if (t)
                                        for (; t = t.parentNode;)
                                            if (t === e) return !0;
                                    return !1
                                }, k = t ? function(e, t) {
                                    if (e === t) return d = !0, 0;
                                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                    return i || (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === i ? e == f || e.ownerDocument == b && _(b, e) ? -1 : t == f || t.ownerDocument == b && _(b, t) ? 1 : c ? $(c, e) - $(c, t) : 0 : 4 & i ? -1 : 1)
                                } : function(e, t) {
                                    if (e === t) return d = !0, 0;
                                    var n, i = 0,
                                        r = e.parentNode,
                                        o = t.parentNode,
                                        s = [e],
                                        a = [t];
                                    if (!r || !o) return e == f ? -1 : t == f ? 1 : r ? -1 : o ? 1 : c ? $(c, e) - $(c, t) : 0;
                                    if (r === o) return he(e, t);
                                    for (n = e; n = n.parentNode;) s.unshift(n);
                                    for (n = t; n = n.parentNode;) a.unshift(n);
                                    for (; s[i] === a[i];) i++;
                                    return i ? he(s[i], a[i]) : s[i] == b ? -1 : a[i] == b ? 1 : 0
                                }, f) : f
                            }, ae.matches = function(e, t) {
                                return ae(e, null, null, t)
                            }, ae.matchesSelector = function(e, t) {
                                if (h(e), n.matchesSelector && g && !D[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))) try {
                                    var i = y.call(e, t);
                                    if (i || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                                } catch (e) {
                                    D(t, !0)
                                }
                                return ae(t, f, null, [e]).length > 0
                            }, ae.contains = function(e, t) {
                                return (e.ownerDocument || e) != f && h(e), _(e, t)
                            }, ae.attr = function(e, t) {
                                (e.ownerDocument || e) != f && h(e);
                                var r = i.attrHandle[t.toLowerCase()],
                                    o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
                            }, ae.escape = function(e) {
                                return (e + "").replace(ie, re)
                            }, ae.error = function(e) {
                                throw new Error("Syntax error, unrecognized expression: " + e)
                            }, ae.uniqueSort = function(e) {
                                var t, i = [],
                                    r = 0,
                                    o = 0;
                                if (d = !n.detectDuplicates, c = !n.sortStable && e.slice(0), e.sort(k), d) {
                                    for (; t = e[o++];) t === e[o] && (r = i.push(o));
                                    for (; r--;) e.splice(i[r], 1)
                                }
                                return c = null, e
                            }, r = ae.getText = function(e) {
                                var t, n = "",
                                    i = 0,
                                    o = e.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof e.textContent) return e.textContent;
                                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                                    } else if (3 === o || 4 === o) return e.nodeValue
                                } else
                                    for (; t = e[i++];) n += r(t);
                                return n
                            }, i = ae.selectors = {
                                cacheLength: 50,
                                createPseudo: ue,
                                match: X,
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
                                    ATTR: function(e) {
                                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                                    },
                                    CHILD: function(e) {
                                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                                    },
                                    PSEUDO: function(e) {
                                        var t, n = !e[6] && e[2];
                                        return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Q.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(e) {
                                        var t = e.replace(te, ne).toLowerCase();
                                        return "*" === e ? function() {
                                            return !0
                                        } : function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                    },
                                    CLASS: function(e) {
                                        var t = E[e + " "];
                                        return t || (t = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + e + "(" + z + "|$)")) && E(e, (function(e) {
                                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(e, t, n) {
                                        return function(i) {
                                            var r = ae.attr(i, e);
                                            return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === n : "!=" === t ? r !== n : "^=" === t ? n && 0 === r.indexOf(n) : "*=" === t ? n && r.indexOf(n) > -1 : "$=" === t ? n && r.slice(-n.length) === n : "~=" === t ? (" " + r.replace(R, " ") + " ").indexOf(n) > -1 : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(e, t, n, i, r) {
                                        var o = "nth" !== e.slice(0, 3),
                                            s = "last" !== e.slice(-4),
                                            a = "of-type" === t;
                                        return 1 === i && 0 === r ? function(e) {
                                            return !!e.parentNode
                                        } : function(t, n, l) {
                                            var u, c, d, h, f, p, g = o !== s ? "nextSibling" : "previousSibling",
                                                m = t.parentNode,
                                                v = a && t.nodeName.toLowerCase(),
                                                y = !l && !a,
                                                _ = !1;
                                            if (m) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (h = t; h = h[g];)
                                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                        p = g = "only" === e && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [s ? m.firstChild : m.lastChild], s && y) {
                                                    for (_ = (f = (u = (c = (d = (h = m)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]) && u[2], h = f && m.childNodes[f]; h = ++f && h && h[g] || (_ = f = 0) || p.pop();)
                                                        if (1 === h.nodeType && ++_ && h === t) {
                                                            c[e] = [x, f, _];
                                                            break
                                                        }
                                                } else if (y && (_ = f = (u = (c = (d = (h = t)[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === x && u[1]), !1 === _)
                                                    for (;
                                                        (h = ++f && h && h[g] || (_ = f = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++_ || (y && ((c = (d = h[w] || (h[w] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [x, _]), h !== t)););
                                                return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(e, t) {
                                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                                        return r[w] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ue((function(e, n) {
                                            for (var i, o = r(e, t), s = o.length; s--;) e[i = $(e, o[s])] = !(n[i] = o[s])
                                        })) : function(e) {
                                            return r(e, 0, n)
                                        }) : r
                                    }
                                },
                                pseudos: {
                                    not: ue((function(e) {
                                        var t = [],
                                            n = [],
                                            i = a(e.replace(F, "$1"));
                                        return i[w] ? ue((function(e, t, n, r) {
                                            for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                                        })) : function(e, r, o) {
                                            return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                                        }
                                    })),
                                    has: ue((function(e) {
                                        return function(t) {
                                            return ae(e, t).length > 0
                                        }
                                    })),
                                    contains: ue((function(e) {
                                        return e = e.replace(te, ne),
                                            function(t) {
                                                return (t.textContent || r(t)).indexOf(e) > -1
                                            }
                                    })),
                                    lang: ue((function(e) {
                                        return V.test(e || "") || ae.error("unsupported lang: " + e), e = e.replace(te, ne).toLowerCase(),
                                            function(t) {
                                                var n;
                                                do {
                                                    if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(t) {
                                        var n = e.location && e.location.hash;
                                        return n && n.slice(1) === t.id
                                    },
                                    root: function(e) {
                                        return e === p
                                    },
                                    focus: function(e) {
                                        return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                                    },
                                    enabled: ge(!1),
                                    disabled: ge(!0),
                                    checked: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                                    },
                                    selected: function(e) {
                                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                                    },
                                    empty: function(e) {
                                        for (e = e.firstChild; e; e = e.nextSibling)
                                            if (e.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(e) {
                                        return !i.pseudos.empty(e)
                                    },
                                    header: function(e) {
                                        return G.test(e.nodeName)
                                    },
                                    input: function(e) {
                                        return K.test(e.nodeName)
                                    },
                                    button: function(e) {
                                        var t = e.nodeName.toLowerCase();
                                        return "input" === t && "button" === e.type || "button" === t
                                    },
                                    text: function(e) {
                                        var t;
                                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                                    },
                                    first: me((function() {
                                        return [0]
                                    })),
                                    last: me((function(e, t) {
                                        return [t - 1]
                                    })),
                                    eq: me((function(e, t, n) {
                                        return [n < 0 ? n + t : n]
                                    })),
                                    even: me((function(e, t) {
                                        for (var n = 0; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    odd: me((function(e, t) {
                                        for (var n = 1; n < t; n += 2) e.push(n);
                                        return e
                                    })),
                                    lt: me((function(e, t, n) {
                                        for (var i = n < 0 ? n + t : n > t ? t : n; --i >= 0;) e.push(i);
                                        return e
                                    })),
                                    gt: me((function(e, t, n) {
                                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                                        return e
                                    }))
                                }
                            }, i.pseudos.nth = i.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) i.pseudos[t] = fe(t);
                        for (t in {
                                submit: !0,
                                reset: !0
                            }) i.pseudos[t] = pe(t);

                        function ye() {}

                        function _e(e) {
                            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
                            return i
                        }

                        function we(e, t, n) {
                            var i = t.dir,
                                r = t.next,
                                o = r || i,
                                s = n && "parentNode" === o,
                                a = C++;
                            return t.first ? function(t, n, r) {
                                for (; t = t[i];)
                                    if (1 === t.nodeType || s) return e(t, n, r);
                                return !1
                            } : function(t, n, l) {
                                var u, c, d, h = [x, a];
                                if (l) {
                                    for (; t = t[i];)
                                        if ((1 === t.nodeType || s) && e(t, n, l)) return !0
                                } else
                                    for (; t = t[i];)
                                        if (1 === t.nodeType || s)
                                            if (c = (d = t[w] || (t[w] = {}))[t.uniqueID] || (d[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[i] || t;
                                            else {
                                                if ((u = c[o]) && u[0] === x && u[1] === a) return h[2] = u[2];
                                                if (c[o] = h, h[2] = e(t, n, l)) return !0
                                            } return !1
                            }
                        }

                        function be(e) {
                            return e.length > 1 ? function(t, n, i) {
                                for (var r = e.length; r--;)
                                    if (!e[r](t, n, i)) return !1;
                                return !0
                            } : e[0]
                        }

                        function xe(e, t, n, i, r) {
                            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)(o = e[a]) && (n && !n(o, i, r) || (s.push(o), u && t.push(a)));
                            return s
                        }

                        function Ce(e, t, n, i, r, o) {
                            return i && !i[w] && (i = Ce(i)), r && !r[w] && (r = Ce(r, o)), ue((function(o, s, a, l) {
                                var u, c, d, h = [],
                                    f = [],
                                    p = s.length,
                                    g = o || function(e, t, n) {
                                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                                        return n
                                    }(t || "*", a.nodeType ? [a] : a, []),
                                    m = !e || !o && t ? g : xe(g, h, e, a, l),
                                    v = n ? r || (o ? e : p || i) ? [] : s : m;
                                if (n && n(m, v, a, l), i)
                                    for (u = xe(v, f), i(u, [], a, l), c = u.length; c--;)(d = u[c]) && (v[f[c]] = !(m[f[c]] = d));
                                if (o) {
                                    if (r || e) {
                                        if (r) {
                                            for (u = [], c = v.length; c--;)(d = v[c]) && u.push(m[c] = d);
                                            r(null, v = [], u, l)
                                        }
                                        for (c = v.length; c--;)(d = v[c]) && (u = r ? $(o, d) : h[c]) > -1 && (o[u] = !(s[u] = d))
                                    }
                                } else v = xe(v === s ? v.splice(p, v.length) : v), r ? r(null, s, v, l) : L.apply(s, v)
                            }))
                        }

                        function Ee(e) {
                            for (var t, n, r, o = e.length, s = i.relative[e[0].type], a = s || i.relative[" "], l = s ? 1 : 0, c = we((function(e) {
                                    return e === t
                                }), a, !0), d = we((function(e) {
                                    return $(t, e) > -1
                                }), a, !0), h = [function(e, n, i) {
                                    var r = !s && (i || n !== u) || ((t = n).nodeType ? c(e, n, i) : d(e, n, i));
                                    return t = null, r
                                }]; l < o; l++)
                                if (n = i.relative[e[l].type]) h = [we(be(h), n)];
                                else {
                                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[w]) {
                                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                                        return Ce(l > 1 && be(h), l > 1 && _e(e.slice(0, l - 1).concat({
                                            value: " " === e[l - 2].type ? "*" : ""
                                        })).replace(F, "$1"), n, l < r && Ee(e.slice(l, r)), r < o && Ee(e = e.slice(r)), r < o && _e(e))
                                    }
                                    h.push(n)
                                }
                            return be(h)
                        }
                        return ye.prototype = i.filters = i.pseudos, i.setFilters = new ye, s = ae.tokenize = function(e, t) {
                            var n, r, o, s, a, l, u, c = T[e + " "];
                            if (c) return t ? 0 : c.slice(0);
                            for (a = e, l = [], u = i.preFilter; a;) {
                                for (s in n && !(r = W.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), n = !1, (r = B.exec(a)) && (n = r.shift(), o.push({
                                        value: n,
                                        type: r[0].replace(F, " ")
                                    }), a = a.slice(n.length)), i.filter) !(r = X[s].exec(a)) || u[s] && !(r = u[s](r)) || (n = r.shift(), o.push({
                                    value: n,
                                    type: s,
                                    matches: r
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return t ? a.length : a ? ae.error(e) : T(e, l).slice(0)
                        }, a = ae.compile = function(e, t) {
                            var n, r = [],
                                o = [],
                                a = S[e + " "];
                            if (!a) {
                                for (t || (t = s(e)), n = t.length; n--;)(a = Ee(t[n]))[w] ? r.push(a) : o.push(a);
                                a = S(e, function(e, t) {
                                    var n = t.length > 0,
                                        r = e.length > 0,
                                        o = function(o, s, a, l, c) {
                                            var d, p, m, v = 0,
                                                y = "0",
                                                _ = o && [],
                                                w = [],
                                                b = u,
                                                C = o || r && i.find.TAG("*", c),
                                                E = x += null == b ? 1 : Math.random() || .1,
                                                T = C.length;
                                            for (c && (u = s == f || s || c); y !== T && null != (d = C[y]); y++) {
                                                if (r && d) {
                                                    for (p = 0, s || d.ownerDocument == f || (h(d), a = !g); m = e[p++];)
                                                        if (m(d, s || f, a)) {
                                                            l.push(d);
                                                            break
                                                        }
                                                    c && (x = E)
                                                }
                                                n && ((d = !m && d) && v--, o && _.push(d))
                                            }
                                            if (v += y, n && y !== v) {
                                                for (p = 0; m = t[p++];) m(_, w, s, a);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; y--;) _[y] || w[y] || (w[y] = j.call(l));
                                                    w = xe(w)
                                                }
                                                L.apply(l, w), c && !o && w.length > 0 && v + t.length > 1 && ae.uniqueSort(l)
                                            }
                                            return c && (x = E, u = b), _
                                        };
                                    return n ? ue(o) : o
                                }(o, r)), a.selector = e
                            }
                            return a
                        }, l = ae.select = function(e, t, n, r) {
                            var o, l, u, c, d, h = "function" == typeof e && e,
                                f = !r && s(e = h.selector || e);
                            if (n = n || [], 1 === f.length) {
                                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = l[0]).type && 9 === t.nodeType && g && i.relative[l[1].type]) {
                                    if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                                    h && (t = t.parentNode), e = e.slice(l.shift().value.length)
                                }
                                for (o = X.needsContext.test(e) ? 0 : l.length; o-- && (u = l[o], !i.relative[c = u.type]);)
                                    if ((d = i.find[c]) && (r = d(u.matches[0].replace(te, ne), ee.test(l[0].type) && ve(t.parentNode) || t))) {
                                        if (l.splice(o, 1), !(e = r.length && _e(l))) return L.apply(n, r), n;
                                        break
                                    }
                            }
                            return (h || a(e, f))(r, t, !g, n, !t || ee.test(e) && ve(t.parentNode) || t), n
                        }, n.sortStable = w.split("").sort(k).join("") === w, n.detectDuplicates = !!d, h(), n.sortDetached = ce((function(e) {
                            return 1 & e.compareDocumentPosition(f.createElement("fieldset"))
                        })), ce((function(e) {
                            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
                        })) || de("type|href|height|width", (function(e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
                        })), n.attributes && ce((function(e) {
                            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
                        })) || de("value", (function(e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
                        })), ce((function(e) {
                            return null == e.getAttribute("disabled")
                        })) || de(P, (function(e, t, n) {
                            var i;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        })), ae
                    }(i);
                    E.find = S, E.expr = S.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = S.uniqueSort, E.text = S.getText, E.isXMLDoc = S.isXML, E.contains = S.contains, E.escapeSelector = S.escape;
                    var D = function(e, t, n) {
                            for (var i = [], r = void 0 !== n;
                                (e = e[t]) && 9 !== e.nodeType;)
                                if (1 === e.nodeType) {
                                    if (r && E(e).is(n)) break;
                                    i.push(e)
                                }
                            return i
                        },
                        k = function(e, t) {
                            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                            return n
                        },
                        A = E.expr.match.needsContext;

                    function N(e, t) {
                        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
                    }
                    var j = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function O(e, t, n) {
                        return v(t) ? E.grep(e, (function(e, i) {
                            return !!t.call(e, i, e) !== n
                        })) : t.nodeType ? E.grep(e, (function(e) {
                            return e === t !== n
                        })) : "string" != typeof t ? E.grep(e, (function(e) {
                            return c.call(t, e) > -1 !== n
                        })) : E.filter(t, e, n)
                    }
                    E.filter = function(e, t, n) {
                        var i = t[0];
                        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? E.find.matchesSelector(i, e) ? [i] : [] : E.find.matches(e, E.grep(t, (function(e) {
                            return 1 === e.nodeType
                        })))
                    }, E.fn.extend({
                        find: function(e) {
                            var t, n, i = this.length,
                                r = this;
                            if ("string" != typeof e) return this.pushStack(E(e).filter((function() {
                                for (t = 0; t < i; t++)
                                    if (E.contains(r[t], this)) return !0
                            })));
                            for (n = this.pushStack([]), t = 0; t < i; t++) E.find(e, r[t], n);
                            return i > 1 ? E.uniqueSort(n) : n
                        },
                        filter: function(e) {
                            return this.pushStack(O(this, e || [], !1))
                        },
                        not: function(e) {
                            return this.pushStack(O(this, e || [], !0))
                        },
                        is: function(e) {
                            return !!O(this, "string" == typeof e && A.test(e) ? E(e) : e || [], !1).length
                        }
                    });
                    var L, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (E.fn.init = function(e, t, n) {
                        var i, r;
                        if (!e) return this;
                        if (n = n || L, "string" == typeof e) {
                            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                            if (i[1]) {
                                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : _, !0)), j.test(i[1]) && E.isPlainObject(t))
                                    for (i in t) v(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                                return this
                            }
                            return (r = _.getElementById(i[2])) && (this[0] = r, this.length = 1), this
                        }
                        return e.nodeType ? (this[0] = e, this.length = 1, this) : v(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
                    }).prototype = E.fn, L = E(_);
                    var $ = /^(?:parents|prev(?:Until|All))/,
                        P = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function z(e, t) {
                        for (;
                            (e = e[t]) && 1 !== e.nodeType;);
                        return e
                    }
                    E.fn.extend({
                        has: function(e) {
                            var t = E(e, this),
                                n = t.length;
                            return this.filter((function() {
                                for (var e = 0; e < n; e++)
                                    if (E.contains(this, t[e])) return !0
                            }))
                        },
                        closest: function(e, t) {
                            var n, i = 0,
                                r = this.length,
                                o = [],
                                s = "string" != typeof e && E(e);
                            if (!A.test(e))
                                for (; i < r; i++)
                                    for (n = this[i]; n && n !== t; n = n.parentNode)
                                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                                            o.push(n);
                                            break
                                        }
                            return this.pushStack(o.length > 1 ? E.uniqueSort(o) : o)
                        },
                        index: function(e) {
                            return e ? "string" == typeof e ? c.call(E(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(e, t) {
                            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
                        },
                        addBack: function(e) {
                            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
                        }
                    }), E.each({
                        parent: function(e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null
                        },
                        parents: function(e) {
                            return D(e, "parentNode")
                        },
                        parentsUntil: function(e, t, n) {
                            return D(e, "parentNode", n)
                        },
                        next: function(e) {
                            return z(e, "nextSibling")
                        },
                        prev: function(e) {
                            return z(e, "previousSibling")
                        },
                        nextAll: function(e) {
                            return D(e, "nextSibling")
                        },
                        prevAll: function(e) {
                            return D(e, "previousSibling")
                        },
                        nextUntil: function(e, t, n) {
                            return D(e, "nextSibling", n)
                        },
                        prevUntil: function(e, t, n) {
                            return D(e, "previousSibling", n)
                        },
                        siblings: function(e) {
                            return k((e.parentNode || {}).firstChild, e)
                        },
                        children: function(e) {
                            return k(e.firstChild)
                        },
                        contents: function(e) {
                            return null != e.contentDocument && s(e.contentDocument) ? e.contentDocument : (N(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
                        }
                    }, (function(e, t) {
                        E.fn[e] = function(n, i) {
                            var r = E.map(this, t, n);
                            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = E.filter(i, r)), this.length > 1 && (P[e] || E.uniqueSort(r), $.test(e) && r.reverse()), this.pushStack(r)
                        }
                    }));
                    var H = /[^\x20\t\r\n\f]+/g;

                    function M(e) {
                        return e
                    }

                    function q(e) {
                        throw e
                    }

                    function R(e, t, n, i) {
                        var r;
                        try {
                            e && v(r = e.promise) ? r.call(e).done(t).fail(n) : e && v(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
                        } catch (e) {
                            n.apply(void 0, [e])
                        }
                    }
                    E.Callbacks = function(e) {
                        e = "string" == typeof e ? function(e) {
                            var t = {};
                            return E.each(e.match(H) || [], (function(e, n) {
                                t[n] = !0
                            })), t
                        }(e) : E.extend({}, e);
                        var t, n, i, r, o = [],
                            s = [],
                            a = -1,
                            l = function() {
                                for (r = r || e.once, i = t = !0; s.length; a = -1)
                                    for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, n = !1);
                                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
                            },
                            u = {
                                add: function() {
                                    return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                                        E.each(n, (function(n, i) {
                                            v(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== x(i) && t(i)
                                        }))
                                    }(arguments), n && !t && l()), this
                                },
                                remove: function() {
                                    return E.each(arguments, (function(e, t) {
                                        for (var n;
                                            (n = E.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                                    })), this
                                },
                                has: function(e) {
                                    return e ? E.inArray(e, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return r = s = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return r = s = [], n || t || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!r
                                },
                                fireWith: function(e, n) {
                                    return r || (n = [e, (n = n || []).slice ? n.slice() : n], s.push(n), t || l()), this
                                },
                                fire: function() {
                                    return u.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!i
                                }
                            };
                        return u
                    }, E.extend({
                        Deferred: function(e) {
                            var t = [
                                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                                ],
                                n = "pending",
                                r = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function(e) {
                                        return r.then(null, e)
                                    },
                                    pipe: function() {
                                        var e = arguments;
                                        return E.Deferred((function(n) {
                                            E.each(t, (function(t, i) {
                                                var r = v(e[i[4]]) && e[i[4]];
                                                o[i[1]]((function() {
                                                    var e = r && r.apply(this, arguments);
                                                    e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[i[0] + "With"](this, r ? [e] : arguments)
                                                }))
                                            })), e = null
                                        })).promise()
                                    },
                                    then: function(e, n, r) {
                                        var o = 0;

                                        function s(e, t, n, r) {
                                            return function() {
                                                var a = this,
                                                    l = arguments,
                                                    u = function() {
                                                        var i, u;
                                                        if (!(e < o)) {
                                                            if ((i = n.apply(a, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                            u = i && ("object" == typeof i || "function" == typeof i) && i.then, v(u) ? r ? u.call(i, s(o, t, M, r), s(o, t, q, r)) : (o++, u.call(i, s(o, t, M, r), s(o, t, q, r), s(o, t, M, t.notifyWith))) : (n !== M && (a = void 0, l = [i]), (r || t.resolveWith)(a, l))
                                                        }
                                                    },
                                                    c = r ? u : function() {
                                                        try {
                                                            u()
                                                        } catch (i) {
                                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, c.stackTrace), e + 1 >= o && (n !== q && (a = void 0, l = [i]), t.rejectWith(a, l))
                                                        }
                                                    };
                                                e ? c() : (E.Deferred.getStackHook && (c.stackTrace = E.Deferred.getStackHook()), i.setTimeout(c))
                                            }
                                        }
                                        return E.Deferred((function(i) {
                                            t[0][3].add(s(0, i, v(r) ? r : M, i.notifyWith)), t[1][3].add(s(0, i, v(e) ? e : M)), t[2][3].add(s(0, i, v(n) ? n : q))
                                        })).promise()
                                    },
                                    promise: function(e) {
                                        return null != e ? E.extend(e, r) : r
                                    }
                                },
                                o = {};
                            return E.each(t, (function(e, i) {
                                var s = i[2],
                                    a = i[5];
                                r[i[1]] = s.add, a && s.add((function() {
                                    n = a
                                }), t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), s.add(i[3].fire), o[i[0]] = function() {
                                    return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[i[0] + "With"] = s.fireWith
                            })), r.promise(o), e && e.call(o, o), o
                        },
                        when: function(e) {
                            var t = arguments.length,
                                n = t,
                                i = Array(n),
                                r = a.call(arguments),
                                o = E.Deferred(),
                                s = function(e) {
                                    return function(n) {
                                        i[e] = this, r[e] = arguments.length > 1 ? a.call(arguments) : n, --t || o.resolveWith(i, r)
                                    }
                                };
                            if (t <= 1 && (R(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || v(r[n] && r[n].then))) return o.then();
                            for (; n--;) R(r[n], s(n), o.reject);
                            return o.promise()
                        }
                    });
                    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    E.Deferred.exceptionHook = function(e, t) {
                        i.console && i.console.warn && e && F.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                    }, E.readyException = function(e) {
                        i.setTimeout((function() {
                            throw e
                        }))
                    };
                    var W = E.Deferred();

                    function B() {
                        _.removeEventListener("DOMContentLoaded", B), i.removeEventListener("load", B), E.ready()
                    }
                    E.fn.ready = function(e) {
                        return W.then(e).catch((function(e) {
                            E.readyException(e)
                        })), this
                    }, E.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || W.resolveWith(_, [E]))
                        }
                    }), E.ready.then = W.then, "complete" === _.readyState || "loading" !== _.readyState && !_.documentElement.doScroll ? i.setTimeout(E.ready) : (_.addEventListener("DOMContentLoaded", B), i.addEventListener("load", B));
                    var U = function(e, t, n, i, r, o, s) {
                            var a = 0,
                                l = e.length,
                                u = null == n;
                            if ("object" === x(n))
                                for (a in r = !0, n) U(e, t, a, n[a], !0, o, s);
                            else if (void 0 !== i && (r = !0, v(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, t = function(e, t, n) {
                                    return u.call(E(e), n)
                                })), t))
                                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
                            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o
                        },
                        Q = /^-ms-/,
                        V = /-([a-z])/g;

                    function X(e, t) {
                        return t.toUpperCase()
                    }

                    function Y(e) {
                        return e.replace(Q, "ms-").replace(V, X)
                    }
                    var K = function(e) {
                        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
                    };

                    function G() {
                        this.expando = E.expando + G.uid++
                    }
                    G.uid = 1, G.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return t || (t = {}, K(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                                value: t,
                                configurable: !0
                            }))), t
                        },
                        set: function(e, t, n) {
                            var i, r = this.cache(e);
                            if ("string" == typeof t) r[Y(t)] = n;
                            else
                                for (i in t) r[Y(i)] = t[i];
                            return r
                        },
                        get: function(e, t) {
                            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][Y(t)]
                        },
                        access: function(e, t, n) {
                            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
                        },
                        remove: function(e, t) {
                            var n, i = e[this.expando];
                            if (void 0 !== i) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t) ? t.map(Y) : (t = Y(t)) in i ? [t] : t.match(H) || []).length;
                                    for (; n--;) delete i[t[n]]
                                }(void 0 === t || E.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !E.isEmptyObject(t)
                        }
                    };
                    var J = new G,
                        Z = new G,
                        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        te = /[A-Z]/g;

                    function ne(e, t, n) {
                        var i;
                        if (void 0 === n && 1 === e.nodeType)
                            if (i = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                                try {
                                    n = function(e) {
                                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e)
                                    }(n)
                                } catch (e) {}
                                Z.set(e, t, n)
                            } else n = void 0;
                        return n
                    }
                    E.extend({
                        hasData: function(e) {
                            return Z.hasData(e) || J.hasData(e)
                        },
                        data: function(e, t, n) {
                            return Z.access(e, t, n)
                        },
                        removeData: function(e, t) {
                            Z.remove(e, t)
                        },
                        _data: function(e, t, n) {
                            return J.access(e, t, n)
                        },
                        _removeData: function(e, t) {
                            J.remove(e, t)
                        }
                    }), E.fn.extend({
                        data: function(e, t) {
                            var n, i, r, o = this[0],
                                s = o && o.attributes;
                            if (void 0 === e) {
                                if (this.length && (r = Z.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Y(i.slice(5)), ne(o, i, r[i]));
                                    J.set(o, "hasDataAttrs", !0)
                                }
                                return r
                            }
                            return "object" == typeof e ? this.each((function() {
                                Z.set(this, e)
                            })) : U(this, (function(t) {
                                var n;
                                if (o && void 0 === t) return void 0 !== (n = Z.get(o, e)) || void 0 !== (n = ne(o, e)) ? n : void 0;
                                this.each((function() {
                                    Z.set(this, e, t)
                                }))
                            }), null, t, arguments.length > 1, null, !0)
                        },
                        removeData: function(e) {
                            return this.each((function() {
                                Z.remove(this, e)
                            }))
                        }
                    }), E.extend({
                        queue: function(e, t, n) {
                            var i;
                            if (e) return t = (t || "fx") + "queue", i = J.get(e, t), n && (!i || Array.isArray(n) ? i = J.access(e, t, E.makeArray(n)) : i.push(n)), i || []
                        },
                        dequeue: function(e, t) {
                            t = t || "fx";
                            var n = E.queue(e, t),
                                i = n.length,
                                r = n.shift(),
                                o = E._queueHooks(e, t);
                            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, (function() {
                                E.dequeue(e, t)
                            }), o)), !i && o && o.empty.fire()
                        },
                        _queueHooks: function(e, t) {
                            var n = t + "queueHooks";
                            return J.get(e, n) || J.access(e, n, {
                                empty: E.Callbacks("once memory").add((function() {
                                    J.remove(e, [t + "queue", n])
                                }))
                            })
                        }
                    }), E.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? E.queue(this[0], e) : void 0 === t ? this : this.each((function() {
                                var n = E.queue(this, e, t);
                                E._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && E.dequeue(this, e)
                            }))
                        },
                        dequeue: function(e) {
                            return this.each((function() {
                                E.dequeue(this, e)
                            }))
                        },
                        clearQueue: function(e) {
                            return this.queue(e || "fx", [])
                        },
                        promise: function(e, t) {
                            var n, i = 1,
                                r = E.Deferred(),
                                o = this,
                                s = this.length,
                                a = function() {
                                    --i || r.resolveWith(o, [o])
                                };
                            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(n = J.get(o[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                            return a(), r.promise(t)
                        }
                    });
                    var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$", "i"),
                        oe = ["Top", "Right", "Bottom", "Left"],
                        se = _.documentElement,
                        ae = function(e) {
                            return E.contains(e.ownerDocument, e)
                        },
                        le = {
                            composed: !0
                        };
                    se.getRootNode && (ae = function(e) {
                        return E.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                    });
                    var ue = function(e, t) {
                        return "none" === (e = t || e).style.display || "" === e.style.display && ae(e) && "none" === E.css(e, "display")
                    };

                    function ce(e, t, n, i) {
                        var r, o, s = 20,
                            a = i ? function() {
                                return i.cur()
                            } : function() {
                                return E.css(e, t, "")
                            },
                            l = a(),
                            u = n && n[3] || (E.cssNumber[t] ? "" : "px"),
                            c = e.nodeType && (E.cssNumber[t] || "px" !== u && +l) && re.exec(E.css(e, t));
                        if (c && c[3] !== u) {
                            for (l /= 2, u = u || c[3], c = +l || 1; s--;) E.style(e, t, c + u), (1 - o) * (1 - (o = a() / l || .5)) <= 0 && (s = 0), c /= o;
                            c *= 2, E.style(e, t, c + u), n = n || []
                        }
                        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
                    }
                    var de = {};

                    function he(e) {
                        var t, n = e.ownerDocument,
                            i = e.nodeName,
                            r = de[i];
                        return r || (t = n.body.appendChild(n.createElement(i)), r = E.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), de[i] = r, r)
                    }

                    function fe(e, t) {
                        for (var n, i, r = [], o = 0, s = e.length; o < s; o++)(i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = J.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ue(i) && (r[o] = he(i))) : "none" !== n && (r[o] = "none", J.set(i, "display", n)));
                        for (o = 0; o < s; o++) null != r[o] && (e[o].style.display = r[o]);
                        return e
                    }
                    E.fn.extend({
                        show: function() {
                            return fe(this, !0)
                        },
                        hide: function() {
                            return fe(this)
                        },
                        toggle: function(e) {
                            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each((function() {
                                ue(this) ? E(this).show() : E(this).hide()
                            }))
                        }
                    });
                    var pe, ge, me = /^(?:checkbox|radio)$/i,
                        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        ye = /^$|^module$|\/(?:java|ecma)script/i;
                    pe = _.createDocumentFragment().appendChild(_.createElement("div")), (ge = _.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), pe.appendChild(ge), m.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue, pe.innerHTML = "<option></option>", m.option = !!pe.lastChild;
                    var _e = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function we(e, t) {
                        var n;
                        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? E.merge([e], n) : n
                    }

                    function be(e, t) {
                        for (var n = 0, i = e.length; n < i; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
                    }
                    _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead, _e.th = _e.td, m.option || (_e.optgroup = _e.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var xe = /<|&#?\w+;/;

                    function Ce(e, t, n, i, r) {
                        for (var o, s, a, l, u, c, d = t.createDocumentFragment(), h = [], f = 0, p = e.length; f < p; f++)
                            if ((o = e[f]) || 0 === o)
                                if ("object" === x(o)) E.merge(h, o.nodeType ? [o] : o);
                                else if (xe.test(o)) {
                            for (s = s || d.appendChild(t.createElement("div")), a = (ve.exec(o) || ["", ""])[1].toLowerCase(), l = _e[a] || _e._default, s.innerHTML = l[1] + E.htmlPrefilter(o) + l[2], c = l[0]; c--;) s = s.lastChild;
                            E.merge(h, s.childNodes), (s = d.firstChild).textContent = ""
                        } else h.push(t.createTextNode(o));
                        for (d.textContent = "", f = 0; o = h[f++];)
                            if (i && E.inArray(o, i) > -1) r && r.push(o);
                            else if (u = ae(o), s = we(d.appendChild(o), "script"), u && be(s), n)
                            for (c = 0; o = s[c++];) ye.test(o.type || "") && n.push(o);
                        return d
                    }
                    var Ee = /^([^.]*)(?:\.(.+)|)/;

                    function Te() {
                        return !0
                    }

                    function Se() {
                        return !1
                    }

                    function De(e, t) {
                        return e === function() {
                            try {
                                return _.activeElement
                            } catch (e) {}
                        }() == ("focus" === t)
                    }

                    function ke(e, t, n, i, r, o) {
                        var s, a;
                        if ("object" == typeof t) {
                            for (a in "string" != typeof n && (i = i || n, n = void 0), t) ke(e, a, n, i, t[a], o);
                            return e
                        }
                        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = Se;
                        else if (!r) return e;
                        return 1 === o && (s = r, r = function(e) {
                            return E().off(e), s.apply(this, arguments)
                        }, r.guid = s.guid || (s.guid = E.guid++)), e.each((function() {
                            E.event.add(this, t, r, i, n)
                        }))
                    }

                    function Ae(e, t, n) {
                        n ? (J.set(e, t, !1), E.event.add(e, t, {
                            namespace: !1,
                            handler: function(e) {
                                var i, r, o = J.get(this, t);
                                if (1 & e.isTrigger && this[t]) {
                                    if (o.length)(E.event.special[t] || {}).delegateType && e.stopPropagation();
                                    else if (o = a.call(arguments), J.set(this, t, o), i = n(this, t), this[t](), o !== (r = J.get(this, t)) || i ? J.set(this, t, !1) : r = {}, o !== r) return e.stopImmediatePropagation(), e.preventDefault(), r && r.value
                                } else o.length && (J.set(this, t, {
                                    value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                                }), e.stopImmediatePropagation())
                            }
                        })) : void 0 === J.get(e, t) && E.event.add(e, t, Te)
                    }
                    E.event = {
                        global: {},
                        add: function(e, t, n, i, r) {
                            var o, s, a, l, u, c, d, h, f, p, g, m = J.get(e);
                            if (K(e))
                                for (n.handler && (n = (o = n).handler, r = o.selector), r && E.find.matchesSelector(se, r), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
                                        return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0
                                    }), u = (t = (t || "").match(H) || [""]).length; u--;) f = g = (a = Ee.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f && (d = E.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = E.event.special[f] || {}, c = E.extend({
                                    type: f,
                                    origType: g,
                                    data: i,
                                    handler: n,
                                    guid: n.guid,
                                    selector: r,
                                    needsContext: r && E.expr.match.needsContext.test(r),
                                    namespace: p.join(".")
                                }, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(f, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), E.event.global[f] = !0)
                        },
                        remove: function(e, t, n, i, r) {
                            var o, s, a, l, u, c, d, h, f, p, g, m = J.hasData(e) && J.get(e);
                            if (m && (l = m.events)) {
                                for (u = (t = (t || "").match(H) || [""]).length; u--;)
                                    if (f = g = (a = Ee.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), f) {
                                        for (d = E.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
                                        s && !h.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || E.removeEvent(e, f, m.handle), delete l[f])
                                    } else
                                        for (f in l) E.event.remove(e, f + t[u], n, i, !0);
                                E.isEmptyObject(l) && J.remove(e, "handle events")
                            }
                        },
                        dispatch: function(e) {
                            var t, n, i, r, o, s, a = new Array(arguments.length),
                                l = E.event.fix(e),
                                u = (J.get(this, "events") || Object.create(null))[l.type] || [],
                                c = E.event.special[l.type] || {};
                            for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
                            if (l.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, l)) {
                                for (s = E.event.handlers.call(this, l, u), t = 0;
                                    (r = s[t++]) && !l.isPropagationStopped();)
                                    for (l.currentTarget = r.elem, n = 0;
                                        (o = r.handlers[n++]) && !l.isImmediatePropagationStopped();) l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace) || (l.handleObj = o, l.data = o.data, void 0 !== (i = ((E.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, l), l.result
                            }
                        },
                        handlers: function(e, t) {
                            var n, i, r, o, s, a = [],
                                l = t.delegateCount,
                                u = e.target;
                            if (l && u.nodeType && !("click" === e.type && e.button >= 1))
                                for (; u !== this; u = u.parentNode || this)
                                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                                        for (o = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? E(r, this).index(u) > -1 : E.find(r, this, null, [u]).length), s[r] && o.push(i);
                                        o.length && a.push({
                                            elem: u,
                                            handlers: o
                                        })
                                    }
                            return u = this, l < t.length && a.push({
                                elem: u,
                                handlers: t.slice(l)
                            }), a
                        },
                        addProp: function(e, t) {
                            Object.defineProperty(E.Event.prototype, e, {
                                enumerable: !0,
                                configurable: !0,
                                get: v(t) ? function() {
                                    if (this.originalEvent) return t(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[e]
                                },
                                set: function(t) {
                                    Object.defineProperty(this, e, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: t
                                    })
                                }
                            })
                        },
                        fix: function(e) {
                            return e[E.expando] ? e : new E.Event(e)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && N(t, "input") && Ae(t, "click", Te), !1
                                },
                                trigger: function(e) {
                                    var t = this || e;
                                    return me.test(t.type) && t.click && N(t, "input") && Ae(t, "click"), !0
                                },
                                _default: function(e) {
                                    var t = e.target;
                                    return me.test(t.type) && t.click && N(t, "input") && J.get(t, "click") || N(t, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(e) {
                                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                                }
                            }
                        }
                    }, E.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n)
                    }, E.Event = function(e, t) {
                        if (!(this instanceof E.Event)) return new E.Event(e, t);
                        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Te : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
                    }, E.Event.prototype = {
                        constructor: E.Event,
                        isDefaultPrevented: Se,
                        isPropagationStopped: Se,
                        isImmediatePropagationStopped: Se,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            this.isDefaultPrevented = Te, e && !this.isSimulated && e.preventDefault()
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            this.isPropagationStopped = Te, e && !this.isSimulated && e.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            this.isImmediatePropagationStopped = Te, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, E.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, E.event.addProp), E.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        E.event.special[e] = {
                            setup: function() {
                                return Ae(this, e, De), !1
                            },
                            trigger: function() {
                                return Ae(this, e), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: t
                        }
                    })), E.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(e, t) {
                        E.event.special[e] = {
                            delegateType: t,
                            bindType: t,
                            handle: function(e) {
                                var n, i = this,
                                    r = e.relatedTarget,
                                    o = e.handleObj;
                                return r && (r === i || E.contains(i, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                            }
                        }
                    })), E.fn.extend({
                        on: function(e, t, n, i) {
                            return ke(this, e, t, n, i)
                        },
                        one: function(e, t, n, i) {
                            return ke(this, e, t, n, i, 1)
                        },
                        off: function(e, t, n) {
                            var i, r;
                            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, E(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                            if ("object" == typeof e) {
                                for (r in e) this.off(r, t, e[r]);
                                return this
                            }
                            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each((function() {
                                E.event.remove(this, e, n, t)
                            }))
                        }
                    });
                    var Ne = /<script|<style|<link/i,
                        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function Le(e, t) {
                        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
                    }

                    function Ie(e) {
                        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
                    }

                    function $e(e) {
                        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
                    }

                    function Pe(e, t) {
                        var n, i, r, o, s, a;
                        if (1 === t.nodeType) {
                            if (J.hasData(e) && (a = J.get(e).events))
                                for (r in J.remove(t, "handle events"), a)
                                    for (n = 0, i = a[r].length; n < i; n++) E.event.add(t, r, a[r][n]);
                            Z.hasData(e) && (o = Z.access(e), s = E.extend({}, o), Z.set(t, s))
                        }
                    }

                    function ze(e, t) {
                        var n = t.nodeName.toLowerCase();
                        "input" === n && me.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
                    }

                    function He(e, t, n, i) {
                        t = l(t);
                        var r, o, s, a, u, c, d = 0,
                            h = e.length,
                            f = h - 1,
                            p = t[0],
                            g = v(p);
                        if (g || h > 1 && "string" == typeof p && !m.checkClone && je.test(p)) return e.each((function(r) {
                            var o = e.eq(r);
                            g && (t[0] = p.call(this, r, o.html())), He(o, t, n, i)
                        }));
                        if (h && (o = (r = Ce(t, e[0].ownerDocument, !1, e, i)).firstChild, 1 === r.childNodes.length && (r = o), o || i)) {
                            for (a = (s = E.map(we(r, "script"), Ie)).length; d < h; d++) u = r, d !== f && (u = E.clone(u, !0, !0), a && E.merge(s, we(u, "script"))), n.call(e[d], u, d);
                            if (a)
                                for (c = s[s.length - 1].ownerDocument, E.map(s, $e), d = 0; d < a; d++) u = s[d], ye.test(u.type || "") && !J.access(u, "globalEval") && E.contains(c, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                                    nonce: u.nonce || u.getAttribute("nonce")
                                }, c) : b(u.textContent.replace(Oe, ""), u, c))
                        }
                        return e
                    }

                    function Me(e, t, n) {
                        for (var i, r = t ? E.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || E.cleanData(we(i)), i.parentNode && (n && ae(i) && be(we(i, "script")), i.parentNode.removeChild(i));
                        return e
                    }
                    E.extend({
                        htmlPrefilter: function(e) {
                            return e
                        },
                        clone: function(e, t, n) {
                            var i, r, o, s, a = e.cloneNode(!0),
                                l = ae(e);
                            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                                for (s = we(a), i = 0, r = (o = we(e)).length; i < r; i++) ze(o[i], s[i]);
                            if (t)
                                if (n)
                                    for (o = o || we(e), s = s || we(a), i = 0, r = o.length; i < r; i++) Pe(o[i], s[i]);
                                else Pe(e, a);
                            return (s = we(a, "script")).length > 0 && be(s, !l && we(e, "script")), a
                        },
                        cleanData: function(e) {
                            for (var t, n, i, r = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                                if (K(n)) {
                                    if (t = n[J.expando]) {
                                        if (t.events)
                                            for (i in t.events) r[i] ? E.event.remove(n, i) : E.removeEvent(n, i, t.handle);
                                        n[J.expando] = void 0
                                    }
                                    n[Z.expando] && (n[Z.expando] = void 0)
                                }
                        }
                    }), E.fn.extend({
                        detach: function(e) {
                            return Me(this, e, !0)
                        },
                        remove: function(e) {
                            return Me(this, e)
                        },
                        text: function(e) {
                            return U(this, (function(e) {
                                return void 0 === e ? E.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                                }))
                            }), null, e, arguments.length)
                        },
                        append: function() {
                            return He(this, arguments, (function(e) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
                            }))
                        },
                        prepend: function() {
                            return He(this, arguments, (function(e) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var t = Le(this, e);
                                    t.insertBefore(e, t.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return He(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this)
                            }))
                        },
                        after: function() {
                            return He(this, arguments, (function(e) {
                                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(we(e, !1)), e.textContent = "");
                            return this
                        },
                        clone: function(e, t) {
                            return e = null != e && e, t = null == t ? e : t, this.map((function() {
                                return E.clone(this, e, t)
                            }))
                        },
                        html: function(e) {
                            return U(this, (function(e) {
                                var t = this[0] || {},
                                    n = 0,
                                    i = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Ne.test(e) && !_e[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = E.htmlPrefilter(e);
                                    try {
                                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(we(t, !1)), t.innerHTML = e);
                                        t = 0
                                    } catch (e) {}
                                }
                                t && this.empty().append(e)
                            }), null, e, arguments.length)
                        },
                        replaceWith: function() {
                            var e = [];
                            return He(this, arguments, (function(t) {
                                var n = this.parentNode;
                                E.inArray(this, e) < 0 && (E.cleanData(we(this)), n && n.replaceChild(t, this))
                            }), e)
                        }
                    }), E.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(e, t) {
                        E.fn[e] = function(e) {
                            for (var n, i = [], r = E(e), o = r.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), E(r[s])[t](n), u.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    }));
                    var qe = new RegExp("^(" + ie + ")(?!px)[a-z%]+$", "i"),
                        Re = function(e) {
                            var t = e.ownerDocument.defaultView;
                            return t && t.opener || (t = i), t.getComputedStyle(e)
                        },
                        Fe = function(e, t, n) {
                            var i, r, o = {};
                            for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                            for (r in i = n.call(e), t) e.style[r] = o[r];
                            return i
                        },
                        We = new RegExp(oe.join("|"), "i");

                    function Be(e, t, n) {
                        var i, r, o, s, a = e.style;
                        return (n = n || Re(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || ae(e) || (s = E.style(e, t)), !m.pixelBoxStyles() && qe.test(s) && We.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o)), void 0 !== s ? s + "" : s
                    }

                    function Ue(e, t) {
                        return {
                            get: function() {
                                if (!e()) return (this.get = t).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function e() {
                            if (c) {
                                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", se.appendChild(u).appendChild(c);
                                var e = i.getComputedStyle(c);
                                n = "1%" !== e.top, l = 12 === t(e.marginLeft), c.style.right = "60%", s = 36 === t(e.right), r = 36 === t(e.width), c.style.position = "absolute", o = 12 === t(c.offsetWidth / 3), se.removeChild(u), c = null
                            }
                        }

                        function t(e) {
                            return Math.round(parseFloat(e))
                        }
                        var n, r, o, s, a, l, u = _.createElement("div"),
                            c = _.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", m.clearCloneStyle = "content-box" === c.style.backgroundClip, E.extend(m, {
                            boxSizingReliable: function() {
                                return e(), r
                            },
                            pixelBoxStyles: function() {
                                return e(), s
                            },
                            pixelPosition: function() {
                                return e(), n
                            },
                            reliableMarginLeft: function() {
                                return e(), l
                            },
                            scrollboxSize: function() {
                                return e(), o
                            },
                            reliableTrDimensions: function() {
                                var e, t, n, r;
                                return null == a && (e = _.createElement("table"), t = _.createElement("tr"), n = _.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", se.appendChild(e).appendChild(t).appendChild(n), r = i.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, se.removeChild(e)), a
                            }
                        }))
                    }();
                    var Qe = ["Webkit", "Moz", "ms"],
                        Ve = _.createElement("div").style,
                        Xe = {};

                    function Ye(e) {
                        var t = E.cssProps[e] || Xe[e];
                        return t || (e in Ve ? e : Xe[e] = function(e) {
                            for (var t = e[0].toUpperCase() + e.slice(1), n = Qe.length; n--;)
                                if ((e = Qe[n] + t) in Ve) return e
                        }(e) || e)
                    }
                    var Ke = /^(none|table(?!-c[ea]).+)/,
                        Ge = /^--/,
                        Je = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Ze = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function et(e, t, n) {
                        var i = re.exec(t);
                        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
                    }

                    function tt(e, t, n, i, r, o) {
                        var s = "width" === t ? 1 : 0,
                            a = 0,
                            l = 0;
                        if (n === (i ? "border" : "content")) return 0;
                        for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + oe[s], !0, r)), i ? ("content" === n && (l -= E.css(e, "padding" + oe[s], !0, r)), "margin" !== n && (l -= E.css(e, "border" + oe[s] + "Width", !0, r))) : (l += E.css(e, "padding" + oe[s], !0, r), "padding" !== n ? l += E.css(e, "border" + oe[s] + "Width", !0, r) : a += E.css(e, "border" + oe[s] + "Width", !0, r));
                        return !i && o >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - a - .5)) || 0), l
                    }

                    function nt(e, t, n) {
                        var i = Re(e),
                            r = (!m.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                            o = r,
                            s = Be(e, t, i),
                            a = "offset" + t[0].toUpperCase() + t.slice(1);
                        if (qe.test(s)) {
                            if (!n) return s;
                            s = "auto"
                        }
                        return (!m.boxSizingReliable() && r || !m.reliableTrDimensions() && N(e, "tr") || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, i)) && e.getClientRects().length && (r = "border-box" === E.css(e, "boxSizing", !1, i), (o = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + tt(e, t, n || (r ? "border" : "content"), o, i, s) + "px"
                    }

                    function it(e, t, n, i, r) {
                        return new it.prototype.init(e, t, n, i, r)
                    }
                    E.extend({
                        cssHooks: {
                            opacity: {
                                get: function(e, t) {
                                    if (t) {
                                        var n = Be(e, "opacity");
                                        return "" === n ? "1" : n
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
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(e, t, n, i) {
                            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                                var r, o, s, a = Y(t),
                                    l = Ge.test(t),
                                    u = e.style;
                                if (l || (t = Ye(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t];
                                "string" === (o = typeof n) && (r = re.exec(n)) && r[1] && (n = ce(e, t, r), o = "number"), null != n && n == n && ("number" !== o || l || (n += r && r[3] || (E.cssNumber[a] ? "" : "px")), m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? u.setProperty(t, n) : u[t] = n))
                            }
                        },
                        css: function(e, t, n, i) {
                            var r, o, s, a = Y(t);
                            return Ge.test(t) || (t = Ye(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), void 0 === r && (r = Be(e, t, i)), "normal" === r && t in Ze && (r = Ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
                        }
                    }), E.each(["height", "width"], (function(e, t) {
                        E.cssHooks[t] = {
                            get: function(e, n, i) {
                                if (n) return !Ke.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? nt(e, t, i) : Fe(e, Je, (function() {
                                    return nt(e, t, i)
                                }))
                            },
                            set: function(e, n, i) {
                                var r, o = Re(e),
                                    s = !m.scrollboxSize() && "absolute" === o.position,
                                    a = (s || i) && "border-box" === E.css(e, "boxSizing", !1, o),
                                    l = i ? tt(e, t, i, a, o) : 0;
                                return a && s && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - tt(e, t, "border", !1, o) - .5)), l && (r = re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = E.css(e, t)), et(0, n, l)
                            }
                        }
                    })), E.cssHooks.marginLeft = Ue(m.reliableMarginLeft, (function(e, t) {
                        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Fe(e, {
                            marginLeft: 0
                        }, (function() {
                            return e.getBoundingClientRect().left
                        }))) + "px"
                    })), E.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(e, t) {
                        E.cssHooks[e + t] = {
                            expand: function(n) {
                                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + oe[i] + t] = o[i] || o[i - 2] || o[0];
                                return r
                            }
                        }, "margin" !== e && (E.cssHooks[e + t].set = et)
                    })), E.fn.extend({
                        css: function(e, t) {
                            return U(this, (function(e, t, n) {
                                var i, r, o = {},
                                    s = 0;
                                if (Array.isArray(t)) {
                                    for (i = Re(e), r = t.length; s < r; s++) o[t[s]] = E.css(e, t[s], !1, i);
                                    return o
                                }
                                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
                            }), e, t, arguments.length > 1)
                        }
                    }), E.Tween = it, it.prototype = {
                        constructor: it,
                        init: function(e, t, n, i, r, o) {
                            this.elem = e, this.prop = n, this.easing = r || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (E.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var e = it.propHooks[this.prop];
                            return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                        },
                        run: function(e) {
                            var t, n = it.propHooks[this.prop];
                            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : it.propHooks._default.set(this), this
                        }
                    }, it.prototype.init.prototype = it.prototype, it.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                            },
                            set: function(e) {
                                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ye(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
                            }
                        }
                    }, it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
                        }
                    }, E.easing = {
                        linear: function(e) {
                            return e
                        },
                        swing: function(e) {
                            return .5 - Math.cos(e * Math.PI) / 2
                        },
                        _default: "swing"
                    }, E.fx = it.prototype.init, E.fx.step = {};
                    var rt, ot, st = /^(?:toggle|show|hide)$/,
                        at = /queueHooks$/;

                    function lt() {
                        ot && (!1 === _.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(lt) : i.setTimeout(lt, E.fx.interval), E.fx.tick())
                    }

                    function ut() {
                        return i.setTimeout((function() {
                            rt = void 0
                        })), rt = Date.now()
                    }

                    function ct(e, t) {
                        var n, i = 0,
                            r = {
                                height: e
                            };
                        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = oe[i])] = r["padding" + n] = e;
                        return t && (r.opacity = r.width = e), r
                    }

                    function dt(e, t, n) {
                        for (var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), o = 0, s = r.length; o < s; o++)
                            if (i = r[o].call(n, t, e)) return i
                    }

                    function ht(e, t, n) {
                        var i, r, o = 0,
                            s = ht.prefilters.length,
                            a = E.Deferred().always((function() {
                                delete l.elem
                            })),
                            l = function() {
                                if (r) return !1;
                                for (var t = rt || ut(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                                return a.notifyWith(e, [u, i, n]), i < 1 && s ? n : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
                            },
                            u = a.promise({
                                elem: e,
                                props: E.extend({}, t),
                                opts: E.extend(!0, {
                                    specialEasing: {},
                                    easing: E.easing._default
                                }, n),
                                originalProperties: t,
                                originalOptions: n,
                                startTime: rt || ut(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(t, n) {
                                    var i = E.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                                    return u.tweens.push(i), i
                                },
                                stop: function(t) {
                                    var n = 0,
                                        i = t ? u.tweens.length : 0;
                                    if (r) return this;
                                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                                    return t ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]), this
                                }
                            }),
                            c = u.props;
                        for (! function(e, t) {
                                var n, i, r, o, s;
                                for (n in e)
                                    if (r = t[i = Y(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (s = E.cssHooks[i]) && "expand" in s)
                                        for (n in o = s.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                                    else t[i] = r
                            }(c, u.opts.specialEasing); o < s; o++)
                            if (i = ht.prefilters[o].call(u, e, c, u.opts)) return v(i.stop) && (E._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
                        return E.map(c, dt, u), v(u.opts.start) && u.opts.start.call(e, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), E.fx.timer(E.extend(l, {
                            elem: e,
                            anim: u,
                            queue: u.opts.queue
                        })), u
                    }
                    E.Animation = E.extend(ht, {
                            tweeners: {
                                "*": [function(e, t) {
                                    var n = this.createTween(e, t);
                                    return ce(n.elem, e, re.exec(t), n), n
                                }]
                            },
                            tweener: function(e, t) {
                                v(e) ? (t = e, e = ["*"]) : e = e.match(H);
                                for (var n, i = 0, r = e.length; i < r; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
                            },
                            prefilters: [function(e, t, n) {
                                var i, r, o, s, a, l, u, c, d = "width" in t || "height" in t,
                                    h = this,
                                    f = {},
                                    p = e.style,
                                    g = e.nodeType && ue(e),
                                    m = J.get(e, "fxshow");
                                for (i in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                                        s.unqueued || a()
                                    }), s.unqueued++, h.always((function() {
                                        h.always((function() {
                                            s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                                        }))
                                    }))), t)
                                    if (r = t[i], st.test(r)) {
                                        if (delete t[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                                            if ("show" !== r || !m || void 0 === m[i]) continue;
                                            g = !0
                                        }
                                        f[i] = m && m[i] || E.style(e, i)
                                    }
                                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(f))
                                    for (i in d && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = J.get(e, "display")), "none" === (c = E.css(e, "display")) && (u ? c = u : (fe([e], !0), u = e.style.display || u, c = E.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != u) && "none" === E.css(e, "float") && (l || (h.done((function() {
                                            p.display = u
                                        })), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always((function() {
                                            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                                        }))), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = J.access(e, "fxshow", {
                                        display: u
                                    }), o && (m.hidden = !g), g && fe([e], !0), h.done((function() {
                                        for (i in g || fe([e]), J.remove(e, "fxshow"), f) E.style(e, i, f[i])
                                    }))), l = dt(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
                            }],
                            prefilter: function(e, t) {
                                t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
                            }
                        }), E.speed = function(e, t, n) {
                            var i = e && "object" == typeof e ? E.extend({}, e) : {
                                complete: n || !n && t || v(e) && e,
                                duration: e,
                                easing: n && t || t && !v(t) && t
                            };
                            return E.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in E.fx.speeds ? i.duration = E.fx.speeds[i.duration] : i.duration = E.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                                v(i.old) && i.old.call(this), i.queue && E.dequeue(this, i.queue)
                            }, i
                        }, E.fn.extend({
                            fadeTo: function(e, t, n, i) {
                                return this.filter(ue).css("opacity", 0).show().end().animate({
                                    opacity: t
                                }, e, n, i)
                            },
                            animate: function(e, t, n, i) {
                                var r = E.isEmptyObject(e),
                                    o = E.speed(t, n, i),
                                    s = function() {
                                        var t = ht(this, E.extend({}, e), o);
                                        (r || J.get(this, "finish")) && t.stop(!0)
                                    };
                                return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                            },
                            stop: function(e, t, n) {
                                var i = function(e) {
                                    var t = e.stop;
                                    delete e.stop, t(n)
                                };
                                return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each((function() {
                                    var t = !0,
                                        r = null != e && e + "queueHooks",
                                        o = E.timers,
                                        s = J.get(this);
                                    if (r) s[r] && s[r].stop && i(s[r]);
                                    else
                                        for (r in s) s[r] && s[r].stop && at.test(r) && i(s[r]);
                                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                                    !t && n || E.dequeue(this, e)
                                }))
                            },
                            finish: function(e) {
                                return !1 !== e && (e = e || "fx"), this.each((function() {
                                    var t, n = J.get(this),
                                        i = n[e + "queue"],
                                        r = n[e + "queueHooks"],
                                        o = E.timers,
                                        s = i ? i.length : 0;
                                    for (n.finish = !0, E.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                                    for (t = 0; t < s; t++) i[t] && i[t].finish && i[t].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), E.each(["toggle", "show", "hide"], (function(e, t) {
                            var n = E.fn[t];
                            E.fn[t] = function(e, i, r) {
                                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ct(t, !0), e, i, r)
                            }
                        })), E.each({
                            slideDown: ct("show"),
                            slideUp: ct("hide"),
                            slideToggle: ct("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(e, t) {
                            E.fn[e] = function(e, n, i) {
                                return this.animate(t, e, n, i)
                            }
                        })), E.timers = [], E.fx.tick = function() {
                            var e, t = 0,
                                n = E.timers;
                            for (rt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
                            n.length || E.fx.stop(), rt = void 0
                        }, E.fx.timer = function(e) {
                            E.timers.push(e), E.fx.start()
                        }, E.fx.interval = 13, E.fx.start = function() {
                            ot || (ot = !0, lt())
                        }, E.fx.stop = function() {
                            ot = null
                        }, E.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, E.fn.delay = function(e, t) {
                            return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, (function(t, n) {
                                var r = i.setTimeout(t, e);
                                n.stop = function() {
                                    i.clearTimeout(r)
                                }
                            }))
                        },
                        function() {
                            var e = _.createElement("input"),
                                t = _.createElement("select").appendChild(_.createElement("option"));
                            e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = t.selected, (e = _.createElement("input")).value = "t", e.type = "radio", m.radioValue = "t" === e.value
                        }();
                    var ft, pt = E.expr.attrHandle;
                    E.fn.extend({
                        attr: function(e, t) {
                            return U(this, E.attr, e, t, arguments.length > 1)
                        },
                        removeAttr: function(e) {
                            return this.each((function() {
                                E.removeAttr(this, e)
                            }))
                        }
                    }), E.extend({
                        attr: function(e, t, n) {
                            var i, r, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = E.find.attr(e, t)) ? void 0 : i)
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (!m.radioValue && "radio" === t && N(e, "input")) {
                                        var n = e.value;
                                        return e.setAttribute("type", t), n && (e.value = n), t
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n, i = 0,
                                r = t && t.match(H);
                            if (r && 1 === e.nodeType)
                                for (; n = r[i++];) e.removeAttribute(n)
                        }
                    }), ft = {
                        set: function(e, t, n) {
                            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
                        }
                    }, E.each(E.expr.match.bool.source.match(/\w+/g), (function(e, t) {
                        var n = pt[t] || E.find.attr;
                        pt[t] = function(e, t, i) {
                            var r, o, s = t.toLowerCase();
                            return i || (o = pt[s], pt[s] = r, r = null != n(e, t, i) ? s : null, pt[s] = o), r
                        }
                    }));
                    var gt = /^(?:input|select|textarea|button)$/i,
                        mt = /^(?:a|area)$/i;

                    function vt(e) {
                        return (e.match(H) || []).join(" ")
                    }

                    function yt(e) {
                        return e.getAttribute && e.getAttribute("class") || ""
                    }

                    function _t(e) {
                        return Array.isArray(e) ? e : "string" == typeof e && e.match(H) || []
                    }
                    E.fn.extend({
                        prop: function(e, t) {
                            return U(this, E.prop, e, t, arguments.length > 1)
                        },
                        removeProp: function(e) {
                            return this.each((function() {
                                delete this[E.propFix[e] || e]
                            }))
                        }
                    }), E.extend({
                        prop: function(e, t, n) {
                            var i, r, o = e.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, r = E.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = E.find.attr(e, "tabindex");
                                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || mt.test(e.nodeName) && e.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), m.optSelected || (E.propHooks.selected = {
                        get: function(e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null
                        },
                        set: function(e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
                        }
                    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        E.propFix[this.toLowerCase()] = this
                    })), E.fn.extend({
                        addClass: function(e) {
                            var t, n, i, r, o, s, a, l = 0;
                            if (v(e)) return this.each((function(t) {
                                E(this).addClass(e.call(this, t, yt(this)))
                            }));
                            if ((t = _t(e)).length)
                                for (; n = this[l++];)
                                    if (r = yt(n), i = 1 === n.nodeType && " " + vt(r) + " ") {
                                        for (s = 0; o = t[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                                        r !== (a = vt(i)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        removeClass: function(e) {
                            var t, n, i, r, o, s, a, l = 0;
                            if (v(e)) return this.each((function(t) {
                                E(this).removeClass(e.call(this, t, yt(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((t = _t(e)).length)
                                for (; n = this[l++];)
                                    if (r = yt(n), i = 1 === n.nodeType && " " + vt(r) + " ") {
                                        for (s = 0; o = t[s++];)
                                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                                        r !== (a = vt(i)) && n.setAttribute("class", a)
                                    }
                            return this
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e,
                                i = "string" === n || Array.isArray(e);
                            return "boolean" == typeof t && i ? t ? this.addClass(e) : this.removeClass(e) : v(e) ? this.each((function(n) {
                                E(this).toggleClass(e.call(this, n, yt(this), t), t)
                            })) : this.each((function() {
                                var t, r, o, s;
                                if (i)
                                    for (r = 0, o = E(this), s = _t(e); t = s[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                                else void 0 !== e && "boolean" !== n || ((t = yt(this)) && J.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : J.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(e) {
                            var t, n, i = 0;
                            for (t = " " + e + " "; n = this[i++];)
                                if (1 === n.nodeType && (" " + vt(yt(n)) + " ").indexOf(t) > -1) return !0;
                            return !1
                        }
                    });
                    var wt = /\r/g;
                    E.fn.extend({
                        val: function(e) {
                            var t, n, i, r = this[0];
                            return arguments.length ? (i = v(e), this.each((function(n) {
                                var r;
                                1 === this.nodeType && (null == (r = i ? e.call(this, n, E(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = E.map(r, (function(e) {
                                    return null == e ? "" : e + ""
                                }))), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                            }))) : r ? (t = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof(n = r.value) ? n.replace(wt, "") : null == n ? "" : n : void 0
                        }
                    }), E.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = E.find.attr(e, "value");
                                    return null != t ? t : vt(E.text(e))
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t, n, i, r = e.options,
                                        o = e.selectedIndex,
                                        s = "select-one" === e.type,
                                        a = s ? null : [],
                                        l = s ? o + 1 : r.length;
                                    for (i = o < 0 ? l : s ? o : 0; i < l; i++)
                                        if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                                            if (t = E(n).val(), s) return t;
                                            a.push(t)
                                        }
                                    return a
                                },
                                set: function(e, t) {
                                    for (var n, i, r = e.options, o = E.makeArray(t), s = r.length; s--;)((i = r[s]).selected = E.inArray(E.valHooks.option.get(i), o) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), o
                                }
                            }
                        }
                    }), E.each(["radio", "checkbox"], (function() {
                        E.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1
                            }
                        }, m.checkOn || (E.valHooks[this].get = function(e) {
                            return null === e.getAttribute("value") ? "on" : e.value
                        })
                    })), m.focusin = "onfocusin" in i;
                    var bt = /^(?:focusinfocus|focusoutblur)$/,
                        xt = function(e) {
                            e.stopPropagation()
                        };
                    E.extend(E.event, {
                        trigger: function(e, t, n, r) {
                            var o, s, a, l, u, c, d, h, p = [n || _],
                                g = f.call(e, "type") ? e.type : e,
                                m = f.call(e, "namespace") ? e.namespace.split(".") : [];
                            if (s = h = a = n = n || _, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(g + E.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."), g = m.shift(), m.sort()), u = g.indexOf(":") < 0 && "on" + g, (e = e[E.expando] ? e : new E.Event(g, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = m.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), d = E.event.special[g] || {}, r || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                                if (!r && !d.noBubble && !y(n)) {
                                    for (l = d.delegateType || g, bt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                                    a === (n.ownerDocument || _) && p.push(a.defaultView || a.parentWindow || i)
                                }
                                for (o = 0;
                                    (s = p[o++]) && !e.isPropagationStopped();) h = s, e.type = o > 1 ? l : d.bindType || g, (c = (J.get(s, "events") || Object.create(null))[e.type] && J.get(s, "handle")) && c.apply(s, t), (c = u && s[u]) && c.apply && K(s) && (e.result = c.apply(s, t), !1 === e.result && e.preventDefault());
                                return e.type = g, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !K(n) || u && v(n[g]) && !y(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = g, e.isPropagationStopped() && h.addEventListener(g, xt), n[g](), e.isPropagationStopped() && h.removeEventListener(g, xt), E.event.triggered = void 0, a && (n[u] = a)), e.result
                            }
                        },
                        simulate: function(e, t, n) {
                            var i = E.extend(new E.Event, n, {
                                type: e,
                                isSimulated: !0
                            });
                            E.event.trigger(i, null, t)
                        }
                    }), E.fn.extend({
                        trigger: function(e, t) {
                            return this.each((function() {
                                E.event.trigger(e, t, this)
                            }))
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return E.event.trigger(e, t, n, !0)
                        }
                    }), m.focusin || E.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(e, t) {
                        var n = function(e) {
                            E.event.simulate(t, e.target, E.event.fix(e))
                        };
                        E.event.special[t] = {
                            setup: function() {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t);
                                r || i.addEventListener(e, n, !0), J.access(i, t, (r || 0) + 1)
                            },
                            teardown: function() {
                                var i = this.ownerDocument || this.document || this,
                                    r = J.access(i, t) - 1;
                                r ? J.access(i, t, r) : (i.removeEventListener(e, n, !0), J.remove(i, t))
                            }
                        }
                    }));
                    var Ct = i.location,
                        Et = {
                            guid: Date.now()
                        },
                        Tt = /\?/;
                    E.parseXML = function(e) {
                        var t, n;
                        if (!e || "string" != typeof e) return null;
                        try {
                            t = (new i.DOMParser).parseFromString(e, "text/xml")
                        } catch (e) {}
                        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, (function(e) {
                            return e.textContent
                        })).join("\n") : e)), t
                    };
                    var St = /\[\]$/,
                        Dt = /\r?\n/g,
                        kt = /^(?:submit|button|image|reset|file)$/i,
                        At = /^(?:input|select|textarea|keygen)/i;

                    function Nt(e, t, n, i) {
                        var r;
                        if (Array.isArray(t)) E.each(t, (function(t, r) {
                            n || St.test(e) ? i(e, r) : Nt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
                        }));
                        else if (n || "object" !== x(t)) i(e, t);
                        else
                            for (r in t) Nt(e + "[" + r + "]", t[r], n, i)
                    }
                    E.param = function(e, t) {
                        var n, i = [],
                            r = function(e, t) {
                                var n = v(t) ? t() : t;
                                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == e) return "";
                        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, (function() {
                            r(this.name, this.value)
                        }));
                        else
                            for (n in e) Nt(n, e[n], t, r);
                        return i.join("&")
                    }, E.fn.extend({
                        serialize: function() {
                            return E.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var e = E.prop(this, "elements");
                                return e ? E.makeArray(e) : this
                            })).filter((function() {
                                var e = this.type;
                                return this.name && !E(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !me.test(e))
                            })).map((function(e, t) {
                                var n = E(this).val();
                                return null == n ? null : Array.isArray(n) ? E.map(n, (function(e) {
                                    return {
                                        name: t.name,
                                        value: e.replace(Dt, "\r\n")
                                    }
                                })) : {
                                    name: t.name,
                                    value: n.replace(Dt, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var jt = /%20/g,
                        Ot = /#.*$/,
                        Lt = /([?&])_=[^&]*/,
                        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        $t = /^(?:GET|HEAD)$/,
                        Pt = /^\/\//,
                        zt = {},
                        Ht = {},
                        Mt = "*/".concat("*"),
                        qt = _.createElement("a");

                    function Rt(e) {
                        return function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var i, r = 0,
                                o = t.toLowerCase().match(H) || [];
                            if (v(n))
                                for (; i = o[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
                        }
                    }

                    function Ft(e, t, n, i) {
                        var r = {},
                            o = e === Ht;

                        function s(a) {
                            var l;
                            return r[a] = !0, E.each(e[a] || [], (function(e, a) {
                                var u = a(t, n, i);
                                return "string" != typeof u || o || r[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), s(u), !1)
                            })), l
                        }
                        return s(t.dataTypes[0]) || !r["*"] && s("*")
                    }

                    function Wt(e, t) {
                        var n, i, r = E.ajaxSettings.flatOptions || {};
                        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
                        return i && E.extend(!0, e, i), e
                    }
                    qt.href = Ct.href, E.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Ct.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": Mt,
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
                                "text json": JSON.parse,
                                "text xml": E.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(e, t) {
                            return t ? Wt(Wt(e, E.ajaxSettings), t) : Wt(E.ajaxSettings, e)
                        },
                        ajaxPrefilter: Rt(zt),
                        ajaxTransport: Rt(Ht),
                        ajax: function(e, t) {
                            "object" == typeof e && (t = e, e = void 0), t = t || {};
                            var n, r, o, s, a, l, u, c, d, h, f = E.ajaxSetup({}, t),
                                p = f.context || f,
                                g = f.context && (p.nodeType || p.jquery) ? E(p) : E.event,
                                m = E.Deferred(),
                                v = E.Callbacks("once memory"),
                                y = f.statusCode || {},
                                w = {},
                                b = {},
                                x = "canceled",
                                C = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (u) {
                                            if (!s)
                                                for (s = {}; t = It.exec(o);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                            t = s[e.toLowerCase() + " "]
                                        }
                                        return null == t ? null : t.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return u ? o : null
                                    },
                                    setRequestHeader: function(e, t) {
                                        return null == u && (e = b[e.toLowerCase()] = b[e.toLowerCase()] || e, w[e] = t), this
                                    },
                                    overrideMimeType: function(e) {
                                        return null == u && (f.mimeType = e), this
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (u) C.always(e[C.status]);
                                            else
                                                for (t in e) y[t] = [y[t], e[t]];
                                        return this
                                    },
                                    abort: function(e) {
                                        var t = e || x;
                                        return n && n.abort(t), T(0, t), this
                                    }
                                };
                            if (m.promise(C), f.url = ((e || f.url || Ct.href) + "").replace(Pt, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
                                l = _.createElement("a");
                                try {
                                    l.href = f.url, l.href = l.href, f.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host
                                } catch (e) {
                                    f.crossDomain = !0
                                }
                            }
                            if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Ft(zt, f, t, C), u) return C;
                            for (d in (c = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !$t.test(f.type), r = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(jt, "+")) : (h = f.url.slice(r.length), f.data && (f.processData || "string" == typeof f.data) && (r += (Tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (r = r.replace(Lt, "$1"), h = (Tt.test(r) ? "&" : "?") + "_=" + Et.guid++ + h), f.url = r + h), f.ifModified && (E.lastModified[r] && C.setRequestHeader("If-Modified-Since", E.lastModified[r]), E.etag[r] && C.setRequestHeader("If-None-Match", E.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || u)) return C.abort();
                            if (x = "abort", v.add(f.complete), C.done(f.success), C.fail(f.error), n = Ft(Ht, f, t, C)) {
                                if (C.readyState = 1, c && g.trigger("ajaxSend", [C, f]), u) return C;
                                f.async && f.timeout > 0 && (a = i.setTimeout((function() {
                                    C.abort("timeout")
                                }), f.timeout));
                                try {
                                    u = !1, n.send(w, T)
                                } catch (e) {
                                    if (u) throw e;
                                    T(-1, e)
                                }
                            } else T(-1, "No Transport");

                            function T(e, t, s, l) {
                                var d, h, _, w, b, x = t;
                                u || (u = !0, a && i.clearTimeout(a), n = void 0, o = l || "", C.readyState = e > 0 ? 4 : 0, d = e >= 200 && e < 300 || 304 === e, s && (w = function(e, t, n) {
                                    for (var i, r, o, s, a = e.contents, l = e.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                    if (i)
                                        for (r in a)
                                            if (a[r] && a[r].test(i)) {
                                                l.unshift(r);
                                                break
                                            }
                                    if (l[0] in n) o = l[0];
                                    else {
                                        for (r in n) {
                                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                                o = r;
                                                break
                                            }
                                            s || (s = r)
                                        }
                                        o = o || s
                                    }
                                    if (o) return o !== l[0] && l.unshift(o), n[o]
                                }(f, C, s)), !d && E.inArray("script", f.dataTypes) > -1 && E.inArray("json", f.dataTypes) < 0 && (f.converters["text script"] = function() {}), w = function(e, t, n, i) {
                                    var r, o, s, a, l, u = {},
                                        c = e.dataTypes.slice();
                                    if (c[1])
                                        for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                                    for (o = c.shift(); o;)
                                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                                            if ("*" === o) o = l;
                                            else if ("*" !== l && l !== o) {
                                        if (!(s = u[l + " " + o] || u["* " + o]))
                                            for (r in u)
                                                if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                                    !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else try {
                                                t = s(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? e : "No conversion from " + l + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: t
                                    }
                                }(f, w, C, d), d ? (f.ifModified && ((b = C.getResponseHeader("Last-Modified")) && (E.lastModified[r] = b), (b = C.getResponseHeader("etag")) && (E.etag[r] = b)), 204 === e || "HEAD" === f.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = w.state, h = w.data, d = !(_ = w.error))) : (_ = x, !e && x || (x = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || x) + "", d ? m.resolveWith(p, [h, x, C]) : m.rejectWith(p, [C, x, _]), C.statusCode(y), y = void 0, c && g.trigger(d ? "ajaxSuccess" : "ajaxError", [C, f, d ? h : _]), v.fireWith(p, [C, x]), c && (g.trigger("ajaxComplete", [C, f]), --E.active || E.event.trigger("ajaxStop")))
                            }
                            return C
                        },
                        getJSON: function(e, t, n) {
                            return E.get(e, t, n, "json")
                        },
                        getScript: function(e, t) {
                            return E.get(e, void 0, t, "script")
                        }
                    }), E.each(["get", "post"], (function(e, t) {
                        E[t] = function(e, n, i, r) {
                            return v(n) && (r = r || i, i = n, n = void 0), E.ajax(E.extend({
                                url: e,
                                type: t,
                                dataType: r,
                                data: n,
                                success: i
                            }, E.isPlainObject(e) && e))
                        }
                    })), E.ajaxPrefilter((function(e) {
                        var t;
                        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
                    })), E._evalUrl = function(e, t, n) {
                        return E.ajax({
                            url: e,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(e) {
                                E.globalEval(e, t, n)
                            }
                        })
                    }, E.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return this[0] && (v(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map((function() {
                                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                                return e
                            })).append(this)), this
                        },
                        wrapInner: function(e) {
                            return v(e) ? this.each((function(t) {
                                E(this).wrapInner(e.call(this, t))
                            })) : this.each((function() {
                                var t = E(this),
                                    n = t.contents();
                                n.length ? n.wrapAll(e) : t.append(e)
                            }))
                        },
                        wrap: function(e) {
                            var t = v(e);
                            return this.each((function(n) {
                                E(this).wrapAll(t ? e.call(this, n) : e)
                            }))
                        },
                        unwrap: function(e) {
                            return this.parent(e).not("body").each((function() {
                                E(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), E.expr.pseudos.hidden = function(e) {
                        return !E.expr.pseudos.visible(e)
                    }, E.expr.pseudos.visible = function(e) {
                        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
                    }, E.ajaxSettings.xhr = function() {
                        try {
                            return new i.XMLHttpRequest
                        } catch (e) {}
                    };
                    var Bt = {
                            0: 200,
                            1223: 204
                        },
                        Ut = E.ajaxSettings.xhr();
                    m.cors = !!Ut && "withCredentials" in Ut, m.ajax = Ut = !!Ut, E.ajaxTransport((function(e) {
                        var t, n;
                        if (m.cors || Ut && !e.crossDomain) return {
                            send: function(r, o) {
                                var s, a = e.xhr();
                                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                    for (s in e.xhrFields) a[s] = e.xhrFields[s];
                                for (s in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r) a.setRequestHeader(s, r[s]);
                                t = function(e) {
                                    return function() {
                                        t && (t = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Bt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                            binary: a.response
                                        } : {
                                            text: a.responseText
                                        }, a.getAllResponseHeaders()))
                                    }
                                }, a.onload = t(), n = a.onerror = a.ontimeout = t("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                                    4 === a.readyState && i.setTimeout((function() {
                                        t && n()
                                    }))
                                }, t = t("abort");
                                try {
                                    a.send(e.hasContent && e.data || null)
                                } catch (e) {
                                    if (t) throw e
                                }
                            },
                            abort: function() {
                                t && t()
                            }
                        }
                    })), E.ajaxPrefilter((function(e) {
                        e.crossDomain && (e.contents.script = !1)
                    })), E.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(e) {
                                return E.globalEval(e), e
                            }
                        }
                    }), E.ajaxPrefilter("script", (function(e) {
                        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
                    })), E.ajaxTransport("script", (function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs) return {
                            send: function(i, r) {
                                t = E("<script>").attr(e.scriptAttrs || {}).prop({
                                    charset: e.scriptCharset,
                                    src: e.url
                                }).on("load error", n = function(e) {
                                    t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                                }), _.head.appendChild(t[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var Qt, Vt = [],
                        Xt = /(=)\?(?=&|$)|\?\?/;
                    E.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var e = Vt.pop() || E.expando + "_" + Et.guid++;
                            return this[e] = !0, e
                        }
                    }), E.ajaxPrefilter("json jsonp", (function(e, t, n) {
                        var r, o, s, a = !1 !== e.jsonp && (Xt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Xt.test(e.data) && "data");
                        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = v(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Xt, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                            return s || E.error(r + " was not called"), s[0]
                        }, e.dataTypes[0] = "json", o = i[r], i[r] = function() {
                            s = arguments
                        }, n.always((function() {
                            void 0 === o ? E(i).removeProp(r) : i[r] = o, e[r] && (e.jsonpCallback = t.jsonpCallback, Vt.push(r)), s && v(o) && o(s[0]), s = o = void 0
                        })), "script"
                    })), m.createHTMLDocument = ((Qt = _.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Qt.childNodes.length), E.parseHTML = function(e, t, n) {
                        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (m.createHTMLDocument ? ((i = (t = _.implementation.createHTMLDocument("")).createElement("base")).href = _.location.href, t.head.appendChild(i)) : t = _), o = !n && [], (r = j.exec(e)) ? [t.createElement(r[1])] : (r = Ce([e], t, o), o && o.length && E(o).remove(), E.merge([], r.childNodes)));
                        var i, r, o
                    }, E.fn.load = function(e, t, n) {
                        var i, r, o, s = this,
                            a = e.indexOf(" ");
                        return a > -1 && (i = vt(e.slice(a)), e = e.slice(0, a)), v(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), s.length > 0 && E.ajax({
                            url: e,
                            type: r || "GET",
                            dataType: "html",
                            data: t
                        }).done((function(e) {
                            o = arguments, s.html(i ? E("<div>").append(E.parseHTML(e)).find(i) : e)
                        })).always(n && function(e, t) {
                            s.each((function() {
                                n.apply(this, o || [e.responseText, t, e])
                            }))
                        }), this
                    }, E.expr.pseudos.animated = function(e) {
                        return E.grep(E.timers, (function(t) {
                            return e === t.elem
                        })).length
                    }, E.offset = {
                        setOffset: function(e, t, n) {
                            var i, r, o, s, a, l, u = E.css(e, "position"),
                                c = E(e),
                                d = {};
                            "static" === u && (e.style.position = "relative"), a = c.offset(), o = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), v(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (d.top = t.top - a.top + s), null != t.left && (d.left = t.left - a.left + r), "using" in t ? t.using.call(e, d) : c.css(d)
                        }
                    }, E.fn.extend({
                        offset: function(e) {
                            if (arguments.length) return void 0 === e ? this : this.each((function(t) {
                                E.offset.setOffset(this, e, t)
                            }));
                            var t, n, i = this[0];
                            return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
                                top: t.top + n.pageYOffset,
                                left: t.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var e, t, n, i = this[0],
                                    r = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === E.css(i, "position")) t = i.getBoundingClientRect();
                                else {
                                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                                    e && e !== i && 1 === e.nodeType && ((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0), r.left += E.css(e, "borderLeftWidth", !0))
                                }
                                return {
                                    top: t.top - r.top - E.css(i, "marginTop", !0),
                                    left: t.left - r.left - E.css(i, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                                return e || se
                            }))
                        }
                    }), E.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(e, t) {
                        var n = "pageYOffset" === t;
                        E.fn[e] = function(i) {
                            return U(this, (function(e, i, r) {
                                var o;
                                if (y(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === r) return o ? o[t] : e[i];
                                o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r
                            }), e, i, arguments.length)
                        }
                    })), E.each(["top", "left"], (function(e, t) {
                        E.cssHooks[t] = Ue(m.pixelPosition, (function(e, n) {
                            if (n) return n = Be(e, t), qe.test(n) ? E(e).position()[t] + "px" : n
                        }))
                    })), E.each({
                        Height: "height",
                        Width: "width"
                    }, (function(e, t) {
                        E.each({
                            padding: "inner" + e,
                            content: t,
                            "": "outer" + e
                        }, (function(n, i) {
                            E.fn[i] = function(r, o) {
                                var s = arguments.length && (n || "boolean" != typeof r),
                                    a = n || (!0 === r || !0 === o ? "margin" : "border");
                                return U(this, (function(t, n, r) {
                                    var o;
                                    return y(t) ? 0 === i.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? E.css(t, n, a) : E.style(t, n, r, a)
                                }), t, s ? r : void 0, s)
                            }
                        }))
                    })), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(e, t) {
                        E.fn[t] = function(e) {
                            return this.on(t, e)
                        }
                    })), E.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n)
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t)
                        },
                        delegate: function(e, t, n, i) {
                            return this.on(t, e, n, i)
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
                        },
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e)
                        }
                    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(e, t) {
                        E.fn[t] = function(e, n) {
                            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
                        }
                    }));
                    var Yt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    E.proxy = function(e, t) {
                        var n, i, r;
                        if ("string" == typeof t && (n = e[t], t = e, e = n), v(e)) return i = a.call(arguments, 2), r = function() {
                            return e.apply(t || this, i.concat(a.call(arguments)))
                        }, r.guid = e.guid = e.guid || E.guid++, r
                    }, E.holdReady = function(e) {
                        e ? E.readyWait++ : E.ready(!0)
                    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = N, E.isFunction = v, E.isWindow = y, E.camelCase = Y, E.type = x, E.now = Date.now, E.isNumeric = function(e) {
                        var t = E.type(e);
                        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
                    }, E.trim = function(e) {
                        return null == e ? "" : (e + "").replace(Yt, "")
                    }, void 0 === (n = function() {
                        return E
                    }.apply(t, [])) || (e.exports = n);
                    var Kt = i.jQuery,
                        Gt = i.$;
                    return E.noConflict = function(e) {
                        return i.$ === E && (i.$ = Gt), e && i.jQuery === E && (i.jQuery = Kt), E
                    }, void 0 === r && (i.jQuery = i.$ = E), E
                }))
            },
            981: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    default: () => ce
                });
                var i = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
                    r = function() {
                        for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                            if (i && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                        return 0
                    }();
                var o = i && window.Promise ? function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, window.Promise.resolve().then((function() {
                            t = !1, e()
                        })))
                    }
                } : function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, setTimeout((function() {
                            t = !1, e()
                        }), r))
                    }
                };

                function s(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                }

                function a(e, t) {
                    if (1 !== e.nodeType) return [];
                    var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
                    return t ? n[t] : n
                }

                function l(e) {
                    return "HTML" === e.nodeName ? e : e.parentNode || e.host
                }

                function u(e) {
                    if (!e) return document.body;
                    switch (e.nodeName) {
                        case "HTML":
                        case "BODY":
                            return e.ownerDocument.body;
                        case "#document":
                            return e.body
                    }
                    var t = a(e),
                        n = t.overflow,
                        i = t.overflowX,
                        r = t.overflowY;
                    return /(auto|scroll|overlay)/.test(n + r + i) ? e : u(l(e))
                }

                function c(e) {
                    return e && e.referenceNode ? e.referenceNode : e
                }
                var d = i && !(!window.MSInputMethodContext || !document.documentMode),
                    h = i && /MSIE 10/.test(navigator.userAgent);

                function f(e) {
                    return 11 === e ? d : 10 === e ? h : d || h
                }

                function p(e) {
                    if (!e) return document.documentElement;
                    for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
                    var i = n && n.nodeName;
                    return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === a(n, "position") ? p(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
                }

                function g(e) {
                    return null !== e.parentNode ? g(e.parentNode) : e
                }

                function m(e, t) {
                    if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
                    var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                        i = n ? e : t,
                        r = n ? t : e,
                        o = document.createRange();
                    o.setStart(i, 0), o.setEnd(r, 0);
                    var s, a, l = o.commonAncestorContainer;
                    if (e !== l && t !== l || i.contains(r)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && p(s.firstElementChild) !== s ? p(l) : l;
                    var u = g(e);
                    return u.host ? m(u.host, t) : m(e, g(t).host)
                }

                function v(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        n = "top" === t ? "scrollTop" : "scrollLeft",
                        i = e.nodeName;
                    if ("BODY" === i || "HTML" === i) {
                        var r = e.ownerDocument.documentElement,
                            o = e.ownerDocument.scrollingElement || r;
                        return o[n]
                    }
                    return e[n]
                }

                function y(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = v(t, "top"),
                        r = v(t, "left"),
                        o = n ? -1 : 1;
                    return e.top += i * o, e.bottom += i * o, e.left += r * o, e.right += r * o, e
                }

                function _(e, t) {
                    var n = "x" === t ? "Left" : "Top",
                        i = "Left" === n ? "Right" : "Bottom";
                    return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"])
                }

                function w(e, t, n, i) {
                    return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
                }

                function b(e) {
                    var t = e.body,
                        n = e.documentElement,
                        i = f(10) && getComputedStyle(n);
                    return {
                        height: w("Height", t, n, i),
                        width: w("Width", t, n, i)
                    }
                }
                var x = function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    },
                    C = function() {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function(t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                    E = function(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    },
                    T = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    };

                function S(e) {
                    return T({}, e, {
                        right: e.left + e.width,
                        bottom: e.top + e.height
                    })
                }

                function D(e) {
                    var t = {};
                    try {
                        if (f(10)) {
                            t = e.getBoundingClientRect();
                            var n = v(e, "top"),
                                i = v(e, "left");
                            t.top += n, t.left += i, t.bottom += n, t.right += i
                        } else t = e.getBoundingClientRect()
                    } catch (e) {}
                    var r = {
                            left: t.left,
                            top: t.top,
                            width: t.right - t.left,
                            height: t.bottom - t.top
                        },
                        o = "HTML" === e.nodeName ? b(e.ownerDocument) : {},
                        s = o.width || e.clientWidth || r.width,
                        l = o.height || e.clientHeight || r.height,
                        u = e.offsetWidth - s,
                        c = e.offsetHeight - l;
                    if (u || c) {
                        var d = a(e);
                        u -= _(d, "x"), c -= _(d, "y"), r.width -= u, r.height -= c
                    }
                    return S(r)
                }

                function k(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        i = f(10),
                        r = "HTML" === t.nodeName,
                        o = D(e),
                        s = D(t),
                        l = u(e),
                        c = a(t),
                        d = parseFloat(c.borderTopWidth),
                        h = parseFloat(c.borderLeftWidth);
                    n && r && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
                    var p = S({
                        top: o.top - s.top - d,
                        left: o.left - s.left - h,
                        width: o.width,
                        height: o.height
                    });
                    if (p.marginTop = 0, p.marginLeft = 0, !i && r) {
                        var g = parseFloat(c.marginTop),
                            m = parseFloat(c.marginLeft);
                        p.top -= d - g, p.bottom -= d - g, p.left -= h - m, p.right -= h - m, p.marginTop = g, p.marginLeft = m
                    }
                    return (i && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = y(p, t)), p
                }

                function A(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = k(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        s = t ? 0 : v(n),
                        a = t ? 0 : v(n, "left"),
                        l = {
                            top: s - i.top + i.marginTop,
                            left: a - i.left + i.marginLeft,
                            width: r,
                            height: o
                        };
                    return S(l)
                }

                function N(e) {
                    var t = e.nodeName;
                    if ("BODY" === t || "HTML" === t) return !1;
                    if ("fixed" === a(e, "position")) return !0;
                    var n = l(e);
                    return !!n && N(n)
                }

                function j(e) {
                    if (!e || !e.parentElement || f()) return document.documentElement;
                    for (var t = e.parentElement; t && "none" === a(t, "transform");) t = t.parentElement;
                    return t || document.documentElement
                }

                function O(e, t, n, i) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                        o = {
                            top: 0,
                            left: 0
                        },
                        s = r ? j(e) : m(e, c(t));
                    if ("viewport" === i) o = A(s, r);
                    else {
                        var a = void 0;
                        "scrollParent" === i ? "BODY" === (a = u(l(t))).nodeName && (a = e.ownerDocument.documentElement) : a = "window" === i ? e.ownerDocument.documentElement : i;
                        var d = k(a, s, r);
                        if ("HTML" !== a.nodeName || N(s)) o = d;
                        else {
                            var h = b(e.ownerDocument),
                                f = h.height,
                                p = h.width;
                            o.top += d.top - d.marginTop, o.bottom = f + d.top, o.left += d.left - d.marginLeft, o.right = p + d.left
                        }
                    }
                    var g = "number" == typeof(n = n || 0);
                    return o.left += g ? n : n.left || 0, o.top += g ? n : n.top || 0, o.right -= g ? n : n.right || 0, o.bottom -= g ? n : n.bottom || 0, o
                }

                function L(e) {
                    return e.width * e.height
                }

                function I(e, t, n, i, r) {
                    var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                    if (-1 === e.indexOf("auto")) return e;
                    var s = O(n, i, o, r),
                        a = {
                            top: {
                                width: s.width,
                                height: t.top - s.top
                            },
                            right: {
                                width: s.right - t.right,
                                height: s.height
                            },
                            bottom: {
                                width: s.width,
                                height: s.bottom - t.bottom
                            },
                            left: {
                                width: t.left - s.left,
                                height: s.height
                            }
                        },
                        l = Object.keys(a).map((function(e) {
                            return T({
                                key: e
                            }, a[e], {
                                area: L(a[e])
                            })
                        })).sort((function(e, t) {
                            return t.area - e.area
                        })),
                        u = l.filter((function(e) {
                            var t = e.width,
                                i = e.height;
                            return t >= n.clientWidth && i >= n.clientHeight
                        })),
                        c = u.length > 0 ? u[0].key : l[0].key,
                        d = e.split("-")[1];
                    return c + (d ? "-" + d : "")
                }

                function $(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                        r = i ? j(t) : m(t, c(n));
                    return k(n, r, i)
                }

                function P(e) {
                    var t = e.ownerDocument.defaultView.getComputedStyle(e),
                        n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                        i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
                    return {
                        width: e.offsetWidth + i,
                        height: e.offsetHeight + n
                    }
                }

                function z(e) {
                    var t = {
                        left: "right",
                        right: "left",
                        bottom: "top",
                        top: "bottom"
                    };
                    return e.replace(/left|right|bottom|top/g, (function(e) {
                        return t[e]
                    }))
                }

                function H(e, t, n) {
                    n = n.split("-")[0];
                    var i = P(e),
                        r = {
                            width: i.width,
                            height: i.height
                        },
                        o = -1 !== ["right", "left"].indexOf(n),
                        s = o ? "top" : "left",
                        a = o ? "left" : "top",
                        l = o ? "height" : "width",
                        u = o ? "width" : "height";
                    return r[s] = t[s] + t[l] / 2 - i[l] / 2, r[a] = n === a ? t[a] - i[u] : t[z(a)], r
                }

                function M(e, t) {
                    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
                }

                function q(e, t, n) {
                    return (void 0 === n ? e : e.slice(0, function(e, t, n) {
                        if (Array.prototype.findIndex) return e.findIndex((function(e) {
                            return e[t] === n
                        }));
                        var i = M(e, (function(e) {
                            return e[t] === n
                        }));
                        return e.indexOf(i)
                    }(e, "name", n))).forEach((function(e) {
                        e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                        var n = e.function || e.fn;
                        e.enabled && s(n) && (t.offsets.popper = S(t.offsets.popper), t.offsets.reference = S(t.offsets.reference), t = n(t, e))
                    })), t
                }

                function R() {
                    if (!this.state.isDestroyed) {
                        var e = {
                            instance: this,
                            styles: {},
                            arrowStyles: {},
                            attributes: {},
                            flipped: !1,
                            offsets: {}
                        };
                        e.offsets.reference = $(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = I(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = H(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = q(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
                    }
                }

                function F(e, t) {
                    return e.some((function(e) {
                        var n = e.name;
                        return e.enabled && n === t
                    }))
                }

                function W(e) {
                    for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                        var r = t[i],
                            o = r ? "" + r + n : e;
                        if (void 0 !== document.body.style[o]) return o
                    }
                    return null
                }

                function B() {
                    return this.state.isDestroyed = !0, F(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[W("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }

                function U(e) {
                    var t = e.ownerDocument;
                    return t ? t.defaultView : window
                }

                function Q(e, t, n, i) {
                    var r = "BODY" === e.nodeName,
                        o = r ? e.ownerDocument.defaultView : e;
                    o.addEventListener(t, n, {
                        passive: !0
                    }), r || Q(u(o.parentNode), t, n, i), i.push(o)
                }

                function V(e, t, n, i) {
                    n.updateBound = i, U(e).addEventListener("resize", n.updateBound, {
                        passive: !0
                    });
                    var r = u(e);
                    return Q(r, "scroll", n.updateBound, n.scrollParents), n.scrollElement = r, n.eventsEnabled = !0, n
                }

                function X() {
                    this.state.eventsEnabled || (this.state = V(this.reference, this.options, this.state, this.scheduleUpdate))
                }

                function Y() {
                    var e, t;
                    this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, U(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach((function(e) {
                        e.removeEventListener("scroll", t.updateBound)
                    })), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
                }

                function K(e) {
                    return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
                }

                function G(e, t) {
                    Object.keys(t).forEach((function(n) {
                        var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && K(t[n]) && (i = "px"), e.style[n] = t[n] + i
                    }))
                }
                var J = i && /Firefox/i.test(navigator.userAgent);

                function Z(e, t, n) {
                    var i = M(e, (function(e) {
                            return e.name === t
                        })),
                        r = !!i && e.some((function(e) {
                            return e.name === n && e.enabled && e.order < i.order
                        }));
                    if (!r) {
                        var o = "`" + t + "`",
                            s = "`" + n + "`";
                        console.warn(s + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")
                    }
                    return r
                }
                var ee = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
                    te = ee.slice(3);

                function ne(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = te.indexOf(e),
                        i = te.slice(n + 1).concat(te.slice(0, n));
                    return t ? i.reverse() : i
                }
                var ie = "flip",
                    re = "clockwise",
                    oe = "counterclockwise";

                function se(e, t, n, i) {
                    var r = [0, 0],
                        o = -1 !== ["right", "left"].indexOf(i),
                        s = e.split(/(\+|\-)/).map((function(e) {
                            return e.trim()
                        })),
                        a = s.indexOf(M(s, (function(e) {
                            return -1 !== e.search(/,|\s/)
                        })));
                    s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                    var l = /\s*,\s*|\s+/,
                        u = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
                    return u = u.map((function(e, i) {
                        var r = (1 === i ? !o : o) ? "height" : "width",
                            s = !1;
                        return e.reduce((function(e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, s = !0, e) : s ? (e[e.length - 1] += t, s = !1, e) : e.concat(t)
                        }), []).map((function(e) {
                            return function(e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    s = r[2];
                                if (!o) return e;
                                if (0 === s.indexOf("%")) {
                                    return S("%p" === s ? n : i)[t] / 100 * o
                                }
                                if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * o;
                                return o
                            }(e, r, t, n)
                        }))
                    })), u.forEach((function(e, t) {
                        e.forEach((function(n, i) {
                            K(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1))
                        }))
                    })), r
                }
                var ae = {
                        shift: {
                            order: 100,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = t.split("-")[1];
                                if (i) {
                                    var r = e.offsets,
                                        o = r.reference,
                                        s = r.popper,
                                        a = -1 !== ["bottom", "top"].indexOf(n),
                                        l = a ? "left" : "top",
                                        u = a ? "width" : "height",
                                        c = {
                                            start: E({}, l, o[l]),
                                            end: E({}, l, o[l] + o[u] - s[u])
                                        };
                                    e.offsets.popper = T({}, s, c[i])
                                }
                                return e
                            }
                        },
                        offset: {
                            order: 200,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.offset,
                                    i = e.placement,
                                    r = e.offsets,
                                    o = r.popper,
                                    s = r.reference,
                                    a = i.split("-")[0],
                                    l = void 0;
                                return l = K(+n) ? [+n, 0] : se(n, o, s, a), "left" === a ? (o.top += l[0], o.left -= l[1]) : "right" === a ? (o.top += l[0], o.left += l[1]) : "top" === a ? (o.left += l[0], o.top -= l[1]) : "bottom" === a && (o.left += l[0], o.top += l[1]), e.popper = o, e
                            },
                            offset: 0
                        },
                        preventOverflow: {
                            order: 300,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.boundariesElement || p(e.instance.popper);
                                e.instance.reference === n && (n = p(n));
                                var i = W("transform"),
                                    r = e.instance.popper.style,
                                    o = r.top,
                                    s = r.left,
                                    a = r[i];
                                r.top = "", r.left = "", r[i] = "";
                                var l = O(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                                r.top = o, r.left = s, r[i] = a, t.boundaries = l;
                                var u = t.priority,
                                    c = e.offsets.popper,
                                    d = {
                                        primary: function(e) {
                                            var n = c[e];
                                            return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), E({}, e, n)
                                        },
                                        secondary: function(e) {
                                            var n = "right" === e ? "left" : "top",
                                                i = c[n];
                                            return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), E({}, n, i)
                                        }
                                    };
                                return u.forEach((function(e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    c = T({}, c, d[t](e))
                                })), e.offsets.popper = c, e
                            },
                            priority: ["left", "right", "top", "bottom"],
                            padding: 5,
                            boundariesElement: "scrollParent"
                        },
                        keepTogether: {
                            order: 400,
                            enabled: !0,
                            fn: function(e) {
                                var t = e.offsets,
                                    n = t.popper,
                                    i = t.reference,
                                    r = e.placement.split("-")[0],
                                    o = Math.floor,
                                    s = -1 !== ["top", "bottom"].indexOf(r),
                                    a = s ? "right" : "bottom",
                                    l = s ? "left" : "top",
                                    u = s ? "width" : "height";
                                return n[a] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[a]) && (e.offsets.popper[l] = o(i[a])), e
                            }
                        },
                        arrow: {
                            order: 500,
                            enabled: !0,
                            fn: function(e, t) {
                                var n;
                                if (!Z(e.instance.modifiers, "arrow", "keepTogether")) return e;
                                var i = t.element;
                                if ("string" == typeof i) {
                                    if (!(i = e.instance.popper.querySelector(i))) return e
                                } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                                var r = e.placement.split("-")[0],
                                    o = e.offsets,
                                    s = o.popper,
                                    l = o.reference,
                                    u = -1 !== ["left", "right"].indexOf(r),
                                    c = u ? "height" : "width",
                                    d = u ? "Top" : "Left",
                                    h = d.toLowerCase(),
                                    f = u ? "left" : "top",
                                    p = u ? "bottom" : "right",
                                    g = P(i)[c];
                                l[p] - g < s[h] && (e.offsets.popper[h] -= s[h] - (l[p] - g)), l[h] + g > s[p] && (e.offsets.popper[h] += l[h] + g - s[p]), e.offsets.popper = S(e.offsets.popper);
                                var m = l[h] + l[c] / 2 - g / 2,
                                    v = a(e.instance.popper),
                                    y = parseFloat(v["margin" + d]),
                                    _ = parseFloat(v["border" + d + "Width"]),
                                    w = m - e.offsets.popper[h] - y - _;
                                return w = Math.max(Math.min(s[c] - g, w), 0), e.arrowElement = i, e.offsets.arrow = (E(n = {}, h, Math.round(w)), E(n, f, ""), n), e
                            },
                            element: "[x-arrow]"
                        },
                        flip: {
                            order: 600,
                            enabled: !0,
                            fn: function(e, t) {
                                if (F(e.instance.modifiers, "inner")) return e;
                                if (e.flipped && e.placement === e.originalPlacement) return e;
                                var n = O(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                    i = e.placement.split("-")[0],
                                    r = z(i),
                                    o = e.placement.split("-")[1] || "",
                                    s = [];
                                switch (t.behavior) {
                                    case ie:
                                        s = [i, r];
                                        break;
                                    case re:
                                        s = ne(i);
                                        break;
                                    case oe:
                                        s = ne(i, !0);
                                        break;
                                    default:
                                        s = t.behavior
                                }
                                return s.forEach((function(a, l) {
                                    if (i !== a || s.length === l + 1) return e;
                                    i = e.placement.split("-")[0], r = z(i);
                                    var u = e.offsets.popper,
                                        c = e.offsets.reference,
                                        d = Math.floor,
                                        h = "left" === i && d(u.right) > d(c.left) || "right" === i && d(u.left) < d(c.right) || "top" === i && d(u.bottom) > d(c.top) || "bottom" === i && d(u.top) < d(c.bottom),
                                        f = d(u.left) < d(n.left),
                                        p = d(u.right) > d(n.right),
                                        g = d(u.top) < d(n.top),
                                        m = d(u.bottom) > d(n.bottom),
                                        v = "left" === i && f || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        _ = !!t.flipVariations && (y && "start" === o && f || y && "end" === o && p || !y && "start" === o && g || !y && "end" === o && m),
                                        w = !!t.flipVariationsByContent && (y && "start" === o && p || y && "end" === o && f || !y && "start" === o && m || !y && "end" === o && g),
                                        b = _ || w;
                                    (h || v || b) && (e.flipped = !0, (h || v) && (i = s[l + 1]), b && (o = function(e) {
                                        return "end" === e ? "start" : "start" === e ? "end" : e
                                    }(o)), e.placement = i + (o ? "-" + o : ""), e.offsets.popper = T({}, e.offsets.popper, H(e.instance.popper, e.offsets.reference, e.placement)), e = q(e.instance.modifiers, e, "flip"))
                                })), e
                            },
                            behavior: "flip",
                            padding: 5,
                            boundariesElement: "viewport",
                            flipVariations: !1,
                            flipVariationsByContent: !1
                        },
                        inner: {
                            order: 700,
                            enabled: !1,
                            fn: function(e) {
                                var t = e.placement,
                                    n = t.split("-")[0],
                                    i = e.offsets,
                                    r = i.popper,
                                    o = i.reference,
                                    s = -1 !== ["left", "right"].indexOf(n),
                                    a = -1 === ["top", "left"].indexOf(n);
                                return r[s ? "left" : "top"] = o[n] - (a ? r[s ? "width" : "height"] : 0), e.placement = z(t), e.offsets.popper = S(r), e
                            }
                        },
                        hide: {
                            order: 800,
                            enabled: !0,
                            fn: function(e) {
                                if (!Z(e.instance.modifiers, "hide", "preventOverflow")) return e;
                                var t = e.offsets.reference,
                                    n = M(e.instance.modifiers, (function(e) {
                                        return "preventOverflow" === e.name
                                    })).boundaries;
                                if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                    if (!0 === e.hide) return e;
                                    e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                                } else {
                                    if (!1 === e.hide) return e;
                                    e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                                }
                                return e
                            }
                        },
                        computeStyle: {
                            order: 850,
                            enabled: !0,
                            fn: function(e, t) {
                                var n = t.x,
                                    i = t.y,
                                    r = e.offsets.popper,
                                    o = M(e.instance.modifiers, (function(e) {
                                        return "applyStyle" === e.name
                                    })).gpuAcceleration;
                                void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                                var s = void 0 !== o ? o : t.gpuAcceleration,
                                    a = p(e.instance.popper),
                                    l = D(a),
                                    u = {
                                        position: r.position
                                    },
                                    c = function(e, t) {
                                        var n = e.offsets,
                                            i = n.popper,
                                            r = n.reference,
                                            o = Math.round,
                                            s = Math.floor,
                                            a = function(e) {
                                                return e
                                            },
                                            l = o(r.width),
                                            u = o(i.width),
                                            c = -1 !== ["left", "right"].indexOf(e.placement),
                                            d = -1 !== e.placement.indexOf("-"),
                                            h = t ? c || d || l % 2 == u % 2 ? o : s : a,
                                            f = t ? o : a;
                                        return {
                                            left: h(l % 2 == 1 && u % 2 == 1 && !d && t ? i.left - 1 : i.left),
                                            top: f(i.top),
                                            bottom: f(i.bottom),
                                            right: h(i.right)
                                        }
                                    }(e, window.devicePixelRatio < 2 || !J),
                                    d = "bottom" === n ? "top" : "bottom",
                                    h = "right" === i ? "left" : "right",
                                    f = W("transform"),
                                    g = void 0,
                                    m = void 0;
                                if (m = "bottom" === d ? "HTML" === a.nodeName ? -a.clientHeight + c.bottom : -l.height + c.bottom : c.top, g = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + c.right : -l.width + c.right : c.left, s && f) u[f] = "translate3d(" + g + "px, " + m + "px, 0)", u[d] = 0, u[h] = 0, u.willChange = "transform";
                                else {
                                    var v = "bottom" === d ? -1 : 1,
                                        y = "right" === h ? -1 : 1;
                                    u[d] = m * v, u[h] = g * y, u.willChange = d + ", " + h
                                }
                                var _ = {
                                    "x-placement": e.placement
                                };
                                return e.attributes = T({}, _, e.attributes), e.styles = T({}, u, e.styles), e.arrowStyles = T({}, e.offsets.arrow, e.arrowStyles), e
                            },
                            gpuAcceleration: !0,
                            x: "bottom",
                            y: "right"
                        },
                        applyStyle: {
                            order: 900,
                            enabled: !0,
                            fn: function(e) {
                                var t, n;
                                return G(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach((function(e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                                })), e.arrowElement && Object.keys(e.arrowStyles).length && G(e.arrowElement, e.arrowStyles), e
                            },
                            onLoad: function(e, t, n, i, r) {
                                var o = $(r, t, e, n.positionFixed),
                                    s = I(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                                return t.setAttribute("x-placement", s), G(t, {
                                    position: n.positionFixed ? "fixed" : "absolute"
                                }), n
                            },
                            gpuAcceleration: void 0
                        }
                    },
                    le = {
                        placement: "bottom",
                        positionFixed: !1,
                        eventsEnabled: !0,
                        removeOnDestroy: !1,
                        onCreate: function() {},
                        onUpdate: function() {},
                        modifiers: ae
                    },
                    ue = function() {
                        function e(t, n) {
                            var i = this,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            x(this, e), this.scheduleUpdate = function() {
                                return requestAnimationFrame(i.update)
                            }, this.update = o(this.update.bind(this)), this.options = T({}, e.Defaults, r), this.state = {
                                isDestroyed: !1,
                                isCreated: !1,
                                scrollParents: []
                            }, this.reference = t && t.jquery ? t[0] : t, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(T({}, e.Defaults.modifiers, r.modifiers)).forEach((function(t) {
                                i.options.modifiers[t] = T({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                            })), this.modifiers = Object.keys(this.options.modifiers).map((function(e) {
                                return T({
                                    name: e
                                }, i.options.modifiers[e])
                            })).sort((function(e, t) {
                                return e.order - t.order
                            })), this.modifiers.forEach((function(e) {
                                e.enabled && s(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                            })), this.update();
                            var a = this.options.eventsEnabled;
                            a && this.enableEventListeners(), this.state.eventsEnabled = a
                        }
                        return C(e, [{
                            key: "update",
                            value: function() {
                                return R.call(this)
                            }
                        }, {
                            key: "destroy",
                            value: function() {
                                return B.call(this)
                            }
                        }, {
                            key: "enableEventListeners",
                            value: function() {
                                return X.call(this)
                            }
                        }, {
                            key: "disableEventListeners",
                            value: function() {
                                return Y.call(this)
                            }
                        }]), e
                    }();
                ue.Utils = ("undefined" != typeof window ? window : n.g).PopperUtils, ue.placements = ee, ue.Defaults = le;
                const ce = ue
            }
        },
        t = {};

    function n(i) {
        var r = t[i];
        if (void 0 !== r) return r.exports;
        var o = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, n), o.loaded = !0, o.exports
    }
    n.d = (e, t) => {
        for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
            enumerable: !0,
            get: t[i]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.nmd = e => (e.paths = [], e.children || (e.children = []), e), n(23), n(822), n(164), n(707);
    n(978)
})();