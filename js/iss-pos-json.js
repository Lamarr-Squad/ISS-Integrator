// Version: 3.7.13
(function () {
    var r = !0, y = null, A = !1;

    function C() {
        return function () {
        }
    }

    window.JSON && window.JSON.stringify || function () {
        function a() {
            try {
                return this.valueOf()
            } catch (a) {
                return y
            }
        }

        function c(a) {
            e.lastIndex = 0;
            return e.test(a) ? '"' + a.replace(e, function (a) {
                var b = E[a];
                return "string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + a + '"'
        }

        function b(e, ba) {
            var J, g, N, u, G, E = f, s = ba[e];
            s && "object" === typeof s && (s = a.call(s));
            "function" === typeof q && (s = q.call(ba, e, s));
            switch (typeof s) {
                case "string":
                    return c(s);
                case "number":
                    return isFinite(s) ? String(s) : "null";
                case "boolean":
                case "null":
                    return String(s);
                case "object":
                    if (!s) return "null";
                    f += w;
                    G = [];
                    if ("[object Array]" === Object.prototype.toString.apply(s)) {
                        u = s.length;
                        for (J = 0; J < u; J += 1) G[J] = b(J, s) || "null";
                        N = 0 === G.length ? "[]" : f ? "[\n" + f + G.join(",\n" + f) + "\n" + E + "]" : "[" + G.join(",") + "]";
                        f = E;
                        return N
                    }
                    if (q && "object" === typeof q) {
                        u = q.length;
                        for (J = 0; J < u; J += 1) g = q[J], "string" === typeof g && (N = b(g, s)) && G.push(c(g) + (f ? ": " : ":") + N)
                    } else for (g in s) Object.hasOwnProperty.call(s, g) && (N = b(g, s)) && G.push(c(g) + (f ? ": " : ":") + N);
                    N = 0 ===
                    G.length ? "{}" : f ? "{\n" + f + G.join(",\n" + f) + "\n" + E + "}" : "{" + G.join(",") + "}";
                    f = E;
                    return N
            }
        }

        window.JSON || (window.JSON = {});
        var e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            f, w, E = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, q;
        "function" !== typeof JSON.stringify && (JSON.stringify = function (a, c, e) {
            var g;
            w = f = "";
            if ("number" === typeof e) for (g = 0; g < e; g += 1) w += " "; else "string" === typeof e && (w = e);
            if ((q = c) && "function" !==
                typeof c && ("object" !== typeof c || "number" !== typeof c.length)) throw Error("JSON.stringify");
            return b("", {"": a})
        });
        "function" !== typeof JSON.parse && (JSON.parse = function (a) {
            return eval("(" + a + ")")
        })
    }();
    var aa = 1, ca = A, da = [], ea = "-pnpres", F = 1E3, fa = "/", ia = "&", la = /{([\w\-]+)}/g;

    function ma() {
        return "x" + ++aa + "" + +new Date
    }

    function K() {
        return +new Date
    }

    var na, oa = Math.floor(20 * Math.random());
    na = function (a, c) {
        return 0 < a.indexOf("pubsub.") && a.replace("pubsub", "ps" + (c ? pa().split("-")[0] : 20 > ++oa ? oa : oa = 1)) || a
    };

    function qa(a, c) {
        var b = a.join(fa), e = [];
        if (!c) return b;
        $(c, function (a, b) {
            var c = "object" == typeof b ? JSON.stringify(b) : b;
            "undefined" != typeof b && (b != y && 0 < encodeURIComponent(c).length) && e.push(a + "=" + encodeURIComponent(c))
        });
        return b += "?" + e.join(ia)
    }

    function ra(a, c) {
        function b() {
            f + c > K() ? (clearTimeout(e), e = setTimeout(b, c)) : (f = K(), a())
        }

        var e, f = 0;
        return b
    }

    function ta(a, c) {
        var b = [];
        $(a || [], function (a) {
            c(a) && b.push(a)
        });
        return b
    }

    function ua(a, c) {
        return a.replace(la, function (a, e) {
            return c[e] || a
        })
    }

    function pa(a) {
        var c = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
            var c = 16 * Math.random() | 0;
            return ("x" == a ? c : c & 3 | 8).toString(16)
        });
        a && a(c);
        return c
    }

    function va(a) {
        return !!a && "string" !== typeof a && (Array.isArray && Array.isArray(a) || "number" === typeof a.length)
    }

    function $(a, c) {
        if (a && c) if (va(a)) for (var b = 0, e = a.length; b < e;) c.call(a[b], a[b], b++); else for (b in a) a.hasOwnProperty && a.hasOwnProperty(b) && c.call(a[b], b, a[b])
    }

    function wa(a, c) {
        var b = [];
        $(a || [], function (a, f) {
            b.push(c(a, f))
        });
        return b
    }

    function xa(a) {
        return encodeURIComponent(a).replace(/[!'()*~]/g, function (a) {
            return "%" + a.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function ya(a, c) {
        var b = [];
        $(a, function (a, f) {
            c ? 0 > a.search("-pnpres") && f.e && b.push(a) : f.e && b.push(a)
        });
        return b.sort()
    }

    function za(a, c) {
        var b = [];
        $(a, function (a, f) {
            c ? 0 > a.search("-pnpres") && f.e && b.push(a) : f.e && b.push(a)
        });
        return b.sort()
    }

    function Ha() {
        setTimeout(function () {
            ca || (ca = 1, $(da, function (a) {
                a()
            }))
        }, F)
    }

    function Ia() {
        function a(a) {
            a = a || {};
            a.hasOwnProperty("encryptKey") || (a.encryptKey = p.encryptKey);
            a.hasOwnProperty("keyEncoding") || (a.keyEncoding = p.keyEncoding);
            a.hasOwnProperty("keyLength") || (a.keyLength = p.keyLength);
            a.hasOwnProperty("mode") || (a.mode = p.mode);
            -1 == w.indexOf(a.keyEncoding.toLowerCase()) && (a.keyEncoding = p.keyEncoding);
            -1 == E.indexOf(parseInt(a.keyLength, 10)) && (a.keyLength = p.keyLength);
            -1 == q.indexOf(a.mode.toLowerCase()) && (a.mode = p.mode);
            return a
        }

        function c(a, b) {
            a = "base64" == b.keyEncoding ?
                CryptoJS.enc.Base64.parse(a) : "hex" == b.keyEncoding ? CryptoJS.enc.Hex.parse(a) : a;
            return b.encryptKey ? CryptoJS.enc.Utf8.parse(CryptoJS.SHA256(a).toString(CryptoJS.enc.Hex).slice(0, 32)) : a
        }

        function b(a) {
            return "ecb" == a.mode ? CryptoJS.mode.ECB : CryptoJS.mode.CBC
        }

        function e(a) {
            return "cbc" == a.mode ? CryptoJS.enc.Utf8.parse(f) : y
        }

        var f = "0123456789012345", w = ["hex", "utf8", "base64", "binary"], E = [128, 256], q = ["ecb", "cbc"],
            p = {encryptKey: r, keyEncoding: "utf8", keyLength: 256, mode: "cbc"};
        return {
            encrypt: function (f, q, g) {
                if (!q) return f;
                var g = a(g), p = e(g), w = b(g), q = c(q, g), g = JSON.stringify(f);
                return CryptoJS.AES.encrypt(g, q, {iv: p, mode: w}).ciphertext.toString(CryptoJS.enc.Base64) || f
            }, decrypt: function (f, q, g) {
                if (!q) return f;
                var g = a(g), p = e(g), w = b(g), q = c(q, g);
                try {
                    var G = CryptoJS.enc.Base64.parse(f),
                        E = CryptoJS.AES.decrypt({ciphertext: G}, q, {iv: p, mode: w}).toString(CryptoJS.enc.Utf8);
                    return JSON.parse(E)
                } catch (s) {
                }
            }
        }
    }

    if (!window.PUBNUB) {
        var Ja = function (a, c) {
            return CryptoJS.HmacSHA256(a, c).toString(CryptoJS.enc.Base64)
        }, Ma = function (a) {
            return document.getElementById(a)
        }, Na = function (a) {
            console.error(a)
        }, Ta = function (a, c) {
            var b = [];
            $(a.split(/\s+/), function (a) {
                $((c || document).getElementsByTagName(a), function (a) {
                    b.push(a)
                })
            });
            return b
        }, Ua = function (a, c, b) {
            $(a.split(","), function (a) {
                function f(a) {
                    a || (a = window.event);
                    b(a) || (a.cancelBubble = r, a.preventDefault && a.preventDefault(), a.stopPropagation && a.stopPropagation())
                }

                c.addEventListener ?
                    c.addEventListener(a, f, A) : c.attachEvent ? c.attachEvent("on" + a, f) : c["on" + a] = f
            })
        }, Va = function () {
            return Ta("head")[0]
        }, Wa = function (a, c, b) {
            if (b) a.setAttribute(c, b); else return a && a.getAttribute && a.getAttribute(c)
        }, Xa = function (a, c) {
            for (var b in c) if (c.hasOwnProperty(b)) try {
                a.style[b] = c[b] + (0 < "|width|height|top|left|".indexOf(b) && "number" == typeof c[b] ? "px" : "")
            } catch (e) {
            }
        }, Ya = function (a) {
            return document.createElement(a)
        }, cb = function () {
            return Za || $a() ? 0 : ma()
        }, db = function (a) {
            function c(a, b) {
                l || (l = 1, s.onerror =
                    y, clearTimeout(R), a || !b || Ka(b), setTimeout(function () {
                    a && La();
                    var b = Ma(B), c = b && b.parentNode;
                    c && c.removeChild(b)
                }, F))
            }

            if (Za || $a()) {
                a:{
                    var b, e, f = function () {
                        if (!E) {
                            E = 1;
                            clearTimeout(p);
                            try {
                                e = JSON.parse(b.responseText)
                            } catch (a) {
                                return u(1)
                            }
                            w = 1;
                            g(e)
                        }
                    }, w = 0, E = 0, q = a.timeout || 1E4, p = setTimeout(function () {
                        u(1, {message: "timeout"})
                    }, q), ba = a.b || C(), J = a.data || {}, g = a.c || C(), N = !a.h, u = function (a, c) {
                        w || (w = 1, clearTimeout(p), b && (b.onerror = b.onload = y, b.abort && b.abort(), b = y), a && ba(c))
                    };
                    try {
                        b = $a() || window.XDomainRequest &&
                            new XDomainRequest || new XMLHttpRequest;
                        b.onerror = b.onabort = function (a) {
                            u(1, a || b && b.responseText || {error: "Network Connection Error"})
                        };
                        b.onload = b.onloadend = f;
                        b.onreadystatechange = function () {
                            if (b && 4 == b.readyState) switch (b.status) {
                                case 200:
                                    break;
                                default:
                                    try {
                                        e = JSON.parse(b.responseText), u(1, e)
                                    } catch (a) {
                                        return u(1, {status: b.status, o: y, message: b.responseText})
                                    }
                            }
                        };
                        var G = qa(a.url, J);
                        b.open("GET", G, N);
                        N && (b.timeout = q);
                        b.send()
                    } catch (Ga) {
                        u(0);
                        Za = 0;
                        a = db(a);
                        break a
                    }
                    a = u
                }
                return a
            }
            var s = Ya("script"), f = a.a, B = ma(),
                l = 0, R = setTimeout(function () {
                    c(1, {message: "timeout"})
                }, a.timeout || 1E4), La = a.b || C(), q = a.data || {}, Ka = a.c || C();
            window[f] = function (a) {
                c(0, a)
            };
            a.h || (s[eb] = eb);
            s.onerror = function () {
                c(1)
            };
            s.src = qa(a.url, q);
            Wa(s, "id", B);
            Va().appendChild(s);
            return c
        }, fb = function () {
            if (!("onLine" in navigator)) return 1;
            try {
                return navigator.onLine
            } catch (a) {
                return r
            }
        }, $a = function () {
            if (!gb || !gb.get) return 0;
            var a = {
                id: $a.id++, send: C(), abort: function () {
                    a.id = {}
                }, open: function (c, b) {
                    $a[a.id] = a;
                    gb.get(a.id, b)
                }
            };
            return a
        }, eb = "async", mb =
            navigator.userAgent, Za = -1 == mb.indexOf("MSIE 6");
        window.console || (window.console = window.console || {});
        console.log || (console.log = console.error = (window.opera || {}).postError || C());
        var nb, ob = {}, pb = A;
        try {
            pb = window.localStorage
        } catch (qb) {
        }
        var rb = function (a) {
            return -1 == document.cookie.indexOf(a) ? y : ((document.cookie || "").match(RegExp(a + "=([^;]+)")) || [])[1] || y
        }, sb = function (a, c) {
            document.cookie = a + "=" + c + "; expires=Thu, 1 Aug 2030 20:00:00 UTC; path=/"
        }, tb;
        try {
            sb("pnctest", "1"), tb = "1" === rb("pnctest")
        } catch (ub) {
            tb =
                A
        }
        nb = {
            get: function (a) {
                try {
                    return pb ? pb.getItem(a) : tb ? rb(a) : ob[a]
                } catch (c) {
                    return ob[a]
                }
            }, set: function (a, c) {
                try {
                    if (pb) return pb.setItem(a, c) && 0;
                    tb && sb(a, c);
                    ob[a] = c
                } catch (b) {
                    ob[a] = c
                }
            }
        };
        var vb = {
            list: {}, unbind: function (a) {
                vb.list[a] = []
            }, bind: function (a, c) {
                (vb.list[a] = vb.list[a] || []).push(c)
            }, fire: function (a, c) {
                $(vb.list[a] || [], function (a) {
                    a(c)
                })
            }
        }, wb = Ma("pubnub") || 0, zb = function (a) {
            function c() {
            }

            function b(j, a) {
                function b(a) {
                    a && (Oa = K() - (a / 1E4 + (K() - d) / 2), j && j(Oa))
                }

                var d = K();
                a && b(a) || x.time(b)
            }

            function e(j,
                       a) {
                Aa && Aa(j, a);
                Aa = y;
                clearTimeout(X);
                clearTimeout(Y)
            }

            function f() {
                yb && x.time(function (j) {
                    b(C(), j);
                    j || e(1, {error: "Heartbeat failed to connect to Pubnub Servers.Please check your network settings."});
                    Y && clearTimeout(Y);
                    Y = setTimeout(f, ab)
                })
            }

            function w() {
                Ab() || e(1, {error: "Offline. Please check your network settings. "});
                X && clearTimeout(X);
                X = setTimeout(w, F)
            }

            function E(j, a, b, d) {
                var a = j.callback || a, c = j.error || m, v = M(), d = d || {};
                d.auth || (d.auth = j.auth_key || D);
                j = [O, "v1", "channel-registration", "sub-key", t];
                j.push.apply(j,
                    b);
                v && (d.callback = v);
                L({
                    a: v, data: B(d), c: function (j) {
                        p(j, a, c)
                    }, b: function (j) {
                        q(j, c)
                    }, url: j
                })
            }

            function q(j, a) {
                if ("object" == typeof j && j.error) {
                    var b = {};
                    j.message && (b.message = j.message);
                    j.payload && (b.payload = j.payload);
                    a && a(b)
                } else a && a(j)
            }

            function p(j, a, b) {
                if ("object" == typeof j) {
                    if (j.error) {
                        a = {};
                        j.message && (a.message = j.message);
                        j.payload && (a.payload = j.payload);
                        b && b(a);
                        return
                    }
                    if (j.payload) {
                        j.next_page ? a && a(j.payload, j.next_page) : a && a(j.payload);
                        return
                    }
                }
                a && a(j)
            }

            function ba(j) {
                var a = 0;
                $(ya(H), function (b) {
                    if (b =
                        H[b]) a++, (j || C())(b)
                });
                return a
            }

            function J(a) {
                var b = 0;
                $(za(S), function (c) {
                    if (c = S[c]) b++, (a || C())(c)
                })
            }

            function g(a) {
                if (Bb) {
                    if (!V.length) return
                } else {
                    a && (V.l = 0);
                    if (V.l || !V.length) return;
                    V.l = 1
                }
                L(V.shift())
            }

            function N() {
                !Pa && u()
            }

            function u() {
                clearTimeout(Ba);
                !P || 500 <= P || 1 > P || !ya(H, r).length && !za(S, r).length ? Pa = A : (Pa = r, x.presence_heartbeat({
                    callback: function () {
                        Ba = setTimeout(u, P * F)
                    }, error: function (a) {
                        m && m("Presence Heartbeat unable to reach Pubnub servers." + JSON.stringify(a));
                        Ba = setTimeout(u, P * F)
                    }
                }))
            }

            function G(a,
                       b) {
                return Ca.decrypt(a, b || ja) || Ca.decrypt(a, ja) || a
            }

            function Ga(a, b, c) {
                var d = A;
                if ("undefined" === typeof a) return b;
                if ("number" === typeof a) d = 5 < a || 0 == a ? A : r; else {
                    if ("boolean" === typeof a) return a ? 30 : 0;
                    d = r
                }
                return d ? (c && c("Presence Heartbeat value invalid. Valid range ( x > 5 or x = 0). Current Value : " + (b || 5)), b || 5) : a
            }

            function s(a) {
                var b = "", c = [];
                $(a, function (a) {
                    c.push(a)
                });
                var d = c.sort(), i;
                for (i in d) {
                    var v = d[i], b = b + (v + "=" + xa(a[v]));
                    i != d.length - 1 && (b += "&")
                }
                return b
            }

            function B(a) {
                a || (a = {});
                $(hb, function (b,
                                c) {
                    b in a || (a[b] = c)
                });
                return a
            }

            function l(a) {
                return zb(a)
            }

            Za = a.jsonp ? 0 : -1 == mb.indexOf("MSIE 6");
            var R = a.subscribe_key || "";
            a.uuid || nb.get(R + "uuid");
            var La = a.leave_on_unload || 0;
            a.xdr = db;
            a.db = nb;
            a.error = a.error || Na;
            a._is_online = fb;
            a.jsonp_cb = cb;
            a.hmac_SHA256 = Ja;
            a.crypto_obj = Ia();
            a.params = {pnsdk: "PubNub-JS-Web/3.7.13"};
            var Ka = +a.windowing || 10, xb = (+a.timeout || 310) * F, ab = (+a.keepalive || 60) * F,
                yb = a.timecheck || 0, bb = a.noleave || 0, Q = a.publish_key || "demo", t = a.subscribe_key || "demo",
                D = a.auth_key || "", Da = a.secret_key ||
                "", ib = a.hmac_SHA256, sa = a.ssl ? "s" : "",
                ka = "http" + sa + "://" + (a.origin || "pubsub.pubnub.com"), O = na(ka), jb = na(ka), V = [], Qa = r,
                Oa = 0, Ra = 0, kb = 0, Aa = 0, Ea = a.restore || 0, ga = 0, Sa = A, H = {}, S = {}, W = {}, Ba = y,
                T = Ga(a.heartbeat || a.pnexpires || 0, a.error), P = a.heartbeat_interval || T / 2 - 1, Pa = A,
                Bb = a.no_wait_for_pending, lb = a["compatible_3.5"] || A, L = a.xdr, hb = a.params || {},
                m = a.error || C(), Ab = a._is_online || function () {
                    return 1
                }, M = a.jsonp_cb || function () {
                    return 0
                }, ha = a.db || {get: C(), set: C()}, ja = a.cipher_key, I = a.uuid || !a.unique_uuid && ha && ha.get(t +
                "uuid") || "", Z = a.instance_id || A, U = "", X, Y;
            2 === T && (P = 1);
            var Ca = a.crypto_obj || {
                encrypt: function (a) {
                    return a
                }, decrypt: function (a) {
                    return a
                }
            }, x = {
                LEAVE: function (a, b, c, d, i) {
                    var c = {uuid: I, auth: c || D}, v = na(ka), d = d || C(), z = i || C(), i = M();
                    if (0 < a.indexOf(ea)) return r;
                    if (lb && (!sa || "0" == i) || bb) return A;
                    "0" != i && (c.callback = i);
                    Z && (c.instanceid = U);
                    L({
                        h: b || sa, timeout: 2E3, a: i, data: B(c), c: function (a) {
                            p(a, d, z)
                        }, b: function (a) {
                            q(a, z)
                        }, url: [v, "v2", "presence", "sub_key", t, "channel", encodeURIComponent(a), "leave"]
                    });
                    return r
                },
                LEAVE_GROUP: function (a,
                                       b, c, d, i) {
                    var c = {uuid: I, auth: c || D}, v = na(ka), d = d || C(), z = i || C(), i = M();
                    if (0 < a.indexOf(ea)) return r;
                    if (lb && (!sa || "0" == i) || bb) return A;
                    "0" != i && (c.callback = i);
                    a && 0 < a.length && (c["channel-group"] = a);
                    Z && (c.instanceid = U);
                    L({
                        h: b || sa, timeout: 5E3, a: i, data: B(c), c: function (a) {
                            p(a, d, z)
                        }, b: function (a) {
                            q(a, z)
                        }, url: [v, "v2", "presence", "sub_key", t, "channel", encodeURIComponent(","), "leave"]
                    });
                    return r
                },
                set_resumed: function (a) {
                    Sa = a
                },
                get_cipher_key: function () {
                    return ja
                },
                set_cipher_key: function (a) {
                    ja = a
                },
                raw_encrypt: function (a,
                                       b) {
                    return Ca.encrypt(a, b || ja) || a
                },
                raw_decrypt: function (a, b) {
                    return G(a, b)
                },
                get_heartbeat: function () {
                    return T
                },
                set_heartbeat: function (a, b) {
                    T = Ga(a, T, m);
                    P = b || T / 2 - 1;
                    2 == T && (P = 1);
                    c();
                    u()
                },
                get_heartbeat_interval: function () {
                    return P
                },
                set_heartbeat_interval: function (a) {
                    P = a;
                    u()
                },
                get_version: function () {
                    return "3.7.13"
                },
                getGcmMessageObject: function (a) {
                    return {data: a}
                },
                getApnsMessageObject: function (a) {
                    var b = {aps: {badge: 1, alert: ""}};
                    for (k in a) k[b] = a[k];
                    return b
                },
                newPnMessage: function () {
                    var a = {};
                    gcm && (a.pn_gcm = gcm);
                    apns && (a.pn_apns = apns);
                    for (k in n) a[k] = n[k];
                    return a
                },
                _add_param: function (a, b) {
                    hb[a] = b
                },
                channel_group: function (a, b) {
                    var c = a.channel_group, b = b || a.callback, d = a.channels || a.channel, i = a.cloak, v, z,
                        h = [], e = {}, f = a.mode || "add";
                    c && (c = c.split(":"), 1 < c.length ? (v = "*" === c[0] ? y : c[0], z = c[1]) : z = c[0]);
                    v && h.push("namespace") && h.push(encodeURIComponent(v));
                    h.push("channel-group");
                    z && "*" !== z && h.push(z);
                    d ? (va(d) && (d = d.join(",")), e[f] = d, e.cloak = Qa ? "true" : "false") : "remove" === f && h.push("remove");
                    "undefined" != typeof i && (e.cloak =
                        i ? "true" : "false");
                    E(a, b, h, e)
                },
                channel_group_list_groups: function (a, b) {
                    var c;
                    (c = a.namespace || a.ns || a.channel_group || y) && (a.channel_group = c + ":*");
                    x.channel_group(a, b)
                },
                channel_group_list_channels: function (a, b) {
                    if (!a.channel_group) return m("Missing Channel Group");
                    x.channel_group(a, b)
                },
                channel_group_remove_channel: function (a, b) {
                    if (!a.channel_group) return m("Missing Channel Group");
                    if (!a.channel && !a.channels) return m("Missing Channel");
                    a.mode = "remove";
                    x.channel_group(a, b)
                },
                channel_group_remove_group: function (a,
                                                      b) {
                    if (!a.channel_group) return m("Missing Channel Group");
                    if (a.channel) return m("Use channel_group_remove_channel if you want to remove a channel from a group.");
                    a.mode = "remove";
                    x.channel_group(a, b)
                },
                channel_group_add_channel: function (a, b) {
                    if (!a.channel_group) return m("Missing Channel Group");
                    if (!a.channel && !a.channels) return m("Missing Channel");
                    x.channel_group(a, b)
                },
                channel_group_cloak: function (a, b) {
                    "undefined" == typeof a.cloak ? b(Qa) : (Qa = a.cloak, x.channel_group(a, b))
                },
                channel_group_list_namespaces: function (a,
                                                         b) {
                    E(a, b, ["namespace"])
                },
                channel_group_remove_namespace: function (a, b) {
                    E(a, b, ["namespace", a.namespace, "remove"])
                },
                history: function (a, b) {
                    var b = a.callback || b, c = a.count || a.limit || 100, d = a.reverse || "false",
                        i = a.error || C(), v = a.auth_key || D, z = a.cipher_key, h = a.channel, e = a.channel_group,
                        f = a.start, g = a.end, s = a.include_token, p = {}, l = M();
                    if (!h && !e) return m("Missing Channel");
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    p.stringtoken = "true";
                    p.count = c;
                    p.reverse = d;
                    p.auth = v;
                    e && (p["channel-group"] =
                        e, h || (h = ","));
                    l && (p.callback = l);
                    f && (p.start = f);
                    g && (p.end = g);
                    s && (p.include_token = "true");
                    L({
                        a: l, data: B(p), c: function (a) {
                            if ("object" == typeof a && a.error) i({message: a.message, payload: a.payload}); else {
                                for (var j = a[0], c = [], d = 0; d < j.length; d++) {
                                    var h = G(j[d], z);
                                    try {
                                        c.push(JSON.parse(h))
                                    } catch (v) {
                                        c.push(h)
                                    }
                                }
                                b([c, a[1], a[2]])
                            }
                        }, b: function (a) {
                            q(a, i)
                        }, url: [O, "v2", "history", "sub-key", t, "channel", encodeURIComponent(h)]
                    })
                },
                replay: function (a, b) {
                    var b = b || a.callback || C(), c = a.auth_key || D, d = a.source, i = a.destination, v = a.stop,
                        z = a.start, h = a.end, e = a.reverse, f = a.limit, q = M(), g = {};
                    if (!d) return m("Missing Source Channel");
                    if (!i) return m("Missing Destination Channel");
                    if (!Q) return m("Missing Publish Key");
                    if (!t) return m("Missing Subscribe Key");
                    "0" != q && (g.callback = q);
                    v && (g.stop = "all");
                    e && (g.reverse = "true");
                    z && (g.start = z);
                    h && (g.end = h);
                    f && (g.count = f);
                    g.auth = c;
                    L({
                        a: q, c: function (a) {
                            p(a, b, err)
                        }, b: function () {
                            b([0, "Disconnected"])
                        }, url: [O, "v1", "replay", Q, t, d, i], data: B(g)
                    })
                },
                auth: function (a) {
                    D = a;
                    c()
                },
                time: function (a) {
                    var b = M(), c = {
                        uuid: I,
                        auth: D
                    };
                    Z && (c.instanceid = U);
                    L({
                        a: b, data: B(c), timeout: 5 * F, url: [O, "time", b], c: function (b) {
                            a(b[0])
                        }, b: function () {
                            a(0)
                        }
                    })
                },
                publish: function (a, b) {
                    var c = a.message;
                    if (!c) return m("Missing Message");
                    var b = b || a.callback || c.callback || C(), d = a.channel || c.channel, i = a.auth_key || D,
                        v = a.cipher_key, z = a.error || c.error || C(), h = a.post || A,
                        e = "store_in_history" in a ? a.store_in_history : r, f = M(), s = "push";
                    a.prepend && (s = "unshift");
                    if (!d) return m("Missing Channel");
                    if (!Q) return m("Missing Publish Key");
                    if (!t) return m("Missing Subscribe Key");
                    c.getPubnubMessage && (c = c.getPubnubMessage());
                    c = JSON.stringify(Ca.encrypt(c, v || ja) || c);
                    c = [O, "publish", Q, t, 0, encodeURIComponent(d), f, encodeURIComponent(c)];
                    i = {uuid: I, auth: i};
                    e || (i.store = "0");
                    Z && (i.instanceid = U);
                    V[s]({
                        a: f, timeout: 5 * F, url: c, data: B(i), b: function (a) {
                            q(a, z);
                            g(1)
                        }, c: function (a) {
                            p(a, b, z);
                            g(1)
                        }, mode: h ? "POST" : "GET"
                    });
                    g()
                },
                unsubscribe: function (a, b) {
                    var e = a.channel, d = a.channel_group, i = a.auth_key || D, b = b || a.callback || C(),
                        f = a.error || C();
                    ga = 0;
                    e && (e = wa((e.join ? e.join(",") : "" + e).split(","), function (a) {
                        if (H[a]) return a +
                            "," + a + ea
                    }).join(","), $(e.split(","), function (a) {
                        var c = r;
                        a && (H[a] = 0, a in W && delete W[a], ca && (c = x.LEAVE(a, 0, i, b, f)), c || b({action: "leave"}))
                    }));
                    d && (d = wa((d.join ? d.join(",") : "" + d).split(","), function (a) {
                        if (S[a]) return a + "," + a + ea
                    }).join(","), $(d.split(","), function (a) {
                        var c = r;
                        a && (S[a] = 0, a in W && delete W[a], ca && (c = x.LEAVE_GROUP(a, 0, i, b, f)), c || b({action: "leave"}))
                    }));
                    c()
                },
                subscribe: function (a, b) {
                    function f(a) {
                        a ? setTimeout(c, Q) : (O = na(ka, 1), jb = na(ka, 1), setTimeout(function () {
                            x.time(f)
                        }, F));
                        ba(function (b) {
                            if (a &&
                                b.d) return b.d = 0, b.k(b.name);
                            !a && !b.d && (b.d = 1, b.j(b.name))
                        });
                        J(function (b) {
                            if (a && b.d) return b.d = 0, b.k(b.name);
                            !a && !b.d && (b.d = 1, b.j(b.name))
                        })
                    }

                    function d() {
                        var a = M(), b = ya(H).join(","), j = za(S).join(",");
                        if (b || j) {
                            b || (b = ",");
                            e();
                            var i = B({uuid: I, auth: D});
                            j && (i["channel-group"] = j);
                            2 < JSON.stringify(W).length && (i.state = JSON.stringify(W));
                            T && (i.heartbeat = T);
                            Z && (i.instanceid = U);
                            N();
                            Aa = L({
                                timeout: P, a: a, b: function (a) {
                                    a && a.error && a.service ? (q(a, p), f(1)) : x.time(function (b) {
                                        !b && q(a, p);
                                        f(b)
                                    })
                                }, data: B(i), url: [jb,
                                    "subscribe", t, encodeURIComponent(b), a, ga], c: function (a) {
                                    if (!a || "object" == typeof a && "error" in a && a.error) return p(a.error), setTimeout(c, F);
                                    s(a[1]);
                                    ga = !ga && Ea && ha.get(t) || a[1];
                                    ba(function (a) {
                                        a.f || (a.f = 1, a.i(a.name))
                                    });
                                    J(function (a) {
                                        a.f || (a.f = 1, a.i(a.name))
                                    });
                                    if (Sa && !Ea) ga = 0, Sa = A, ha.set(t, 0); else {
                                        w && (ga = 1E4, w = 0);
                                        ha.set(t, a[1]);
                                        var b, j = "", i = "";
                                        3 < a.length ? (j = a[3], i = a[2]) : j = 2 < a.length ? a[2] : wa(ya(H), function (b) {
                                            return wa(Array(a[0].length).join(",").split(","), function () {
                                                return b
                                            })
                                        }).join(",");
                                        var e = j.split(","),
                                            f = i ? i.split(",") : [];
                                        b = function () {
                                            var a = e.shift() || kb, b = f.shift(), c = {};
                                            b ? (a && (0 <= a.indexOf("-pnpres") && 0 > b.indexOf("-pnpres")) && (b += "-pnpres"), c = S[b] || H[b] || {callback: C()}) : c = H[a];
                                            a = [c.a || Ra, a.split(ea)[0]];
                                            b && a.push(b.split(ea)[0]);
                                            return a
                                        };
                                        var h = K() - Oa - +a[1] / 1E4;
                                        $(a[0], function (c) {
                                            var j = b(), c = G(c, H[j[1]] ? H[j[1]].cipher_key : y);
                                            j[0] && j[0](c, a, j[2] || j[1], h, j[1])
                                        })
                                    }
                                    setTimeout(d, Q)
                                }
                            })
                        }
                    }

                    var i = a.channel, v = a.channel_group, b = (b = b || a.callback) || a.message,
                        z = a.connect || C(), h = a.reconnect || C(), g = a.disconnect ||
                        C(), p = a.error || p || C(), s = a.idle || C(), l = a.presence || 0, u = a.noheresync || 0,
                        w = a.backfill || 0, E = a.timetoken || 0, P = a.timeout || xb, Q = a.windowing || Ka,
                        R = a.state, V = a.heartbeat || a.pnexpires, X = a.heartbeat_interval, Y = a.restore || Ea;
                    D = a.auth_key || D;
                    Ea = Y;
                    ga = E;
                    if (!i && !v) return m("Missing Channel");
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    (V || 0 === V || X || 0 === X) && x.set_heartbeat(V, X);
                    i && $((i.join ? i.join(",") : "" + i).split(","), function (c) {
                        var d = H[c] || {};
                        H[kb = c] = {
                            name: c, f: d.f, d: d.d, e: 1, a: Ra =
                                b, cipher_key: a.cipher_key, i: z, j: g, k: h
                        };
                        R && (W[c] = c in R ? R[c] : R);
                        l && (x.subscribe({
                            channel: c + ea,
                            callback: l,
                            restore: Y
                        }), !d.e && !u && x.here_now({
                            channel: c, data: B({uuid: I, auth: D}), callback: function (a) {
                                $("uuids" in a ? a.uuids : [], function (b) {
                                    l({
                                        action: "join",
                                        uuid: b,
                                        timestamp: Math.floor(K() / 1E3),
                                        occupancy: a.occupancy || 1
                                    }, a, c)
                                })
                            }
                        }))
                    });
                    v && $((v.join ? v.join(",") : "" + v).split(","), function (c) {
                        var d = S[c] || {};
                        S[c] = {name: c, f: d.f, d: d.d, e: 1, a: Ra = b, cipher_key: a.cipher_key, i: z, j: g, k: h};
                        l && (x.subscribe({
                            channel_group: c + ea,
                            callback: l, restore: Y, auth_key: D
                        }), !d.e && !u && x.here_now({
                            channel_group: c,
                            data: B({uuid: I, auth: D}),
                            callback: function (a) {
                                $("uuids" in a ? a.uuids : [], function (b) {
                                    l({
                                        action: "join",
                                        uuid: b,
                                        timestamp: Math.floor(K() / 1E3),
                                        occupancy: a.occupancy || 1
                                    }, a, c)
                                })
                            }
                        }))
                    });
                    c = function () {
                        e();
                        setTimeout(d, Q)
                    };
                    if (!ca) return da.push(c);
                    c()
                },
                here_now: function (a, b) {
                    var b = a.callback || b, c = a.error || C(), d = a.auth_key || D, i = a.channel,
                        e = a.channel_group, f = M(), h = a.state, d = {uuid: I, auth: d};
                    if (!("uuids" in a ? a.uuids : 1)) d.disable_uuids = 1;
                    h && (d.state =
                        1);
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    h = [O, "v2", "presence", "sub_key", t];
                    i && h.push("channel") && h.push(encodeURIComponent(i));
                    "0" != f && (d.callback = f);
                    e && (d["channel-group"] = e, !i && h.push("channel") && h.push(","));
                    Z && (d.instanceid = U);
                    L({
                        a: f, data: B(d), c: function (a) {
                            p(a, b, c)
                        }, b: function (a) {
                            q(a, c)
                        }, url: h
                    })
                },
                where_now: function (a, b) {
                    var b = a.callback || b, c = a.error || C(), d = a.auth_key || D, i = M(), e = a.uuid || I,
                        d = {auth: d};
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    "0" != i && (d.callback = i);
                    Z && (d.instanceid = U);
                    L({
                        a: i, data: B(d), c: function (a) {
                            p(a, b, c)
                        }, b: function (a) {
                            q(a, c)
                        }, url: [O, "v2", "presence", "sub_key", t, "uuid", encodeURIComponent(e)]
                    })
                },
                state: function (a, b) {
                    var b = a.callback || b || C(), c = a.error || C(), d = a.auth_key || D, i = M(), e = a.state,
                        f = a.uuid || I, h = a.channel, g = a.channel_group, d = B({auth: d});
                    if (!t) return m("Missing Subscribe Key");
                    if (!f) return m("Missing UUID");
                    if (!h && !g) return m("Missing Channel");
                    "0" != i && (d.callback = i);
                    "undefined" != typeof h && H[h] && H[h].e && e && (W[h] = e);
                    "undefined" != typeof g && (S[g] && S[g].e) && (e && (W[g] = e), d["channel-group"] = g, h || (h = ","));
                    d.state = JSON.stringify(e);
                    Z && (d.instanceid = U);
                    e = e ? [O, "v2", "presence", "sub-key", t, "channel", h, "uuid", f, "data"] : [O, "v2", "presence", "sub-key", t, "channel", h, "uuid", encodeURIComponent(f)];
                    L({
                        a: i, data: B(d), c: function (a) {
                            p(a, b, c)
                        }, b: function (a) {
                            q(a, c)
                        }, url: e
                    })
                },
                grant: function (a, b) {
                    var b = a.callback || b, c = a.error || C(), d = a.channel || a.channels, e = a.channel_group,
                        f = M(), g = a.ttl, h = a.read ? "1" : "0", l = a.write ? "1" : "0", x = a.manage ? "1" :
                        "0", u = a.auth_key || a.auth_keys;
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    if (!Q) return m("Missing Publish Key");
                    if (!Da) return m("Missing Secret Key");
                    var w = t + "\n" + Q + "\ngrant\n",
                        h = {w: l, r: h, timestamp: Math.floor((new Date).getTime() / 1E3)};
                    a.manage && (h.m = x);
                    va(d) && (d = d.join(","));
                    va(u) && (u = u.join(","));
                    "undefined" != typeof d && (d != y && 0 < d.length) && (h.channel = d);
                    "undefined" != typeof e && (e != y && 0 < e.length) && (h["channel-group"] = e);
                    "0" != f && (h.callback = f);
                    if (g || 0 === g) h.ttl = g;
                    u && (h.auth =
                        u);
                    h = B(h);
                    u || delete h.auth;
                    w += s(h);
                    d = ib(w, Da);
                    d = d.replace(/\+/g, "-");
                    d = d.replace(/\//g, "_");
                    h.signature = d;
                    L({
                        a: f, data: h, c: function (a) {
                            p(a, b, c)
                        }, b: function (a) {
                            q(a, c)
                        }, url: [O, "v1", "auth", "grant", "sub-key", t]
                    })
                },
                mobile_gw_provision: function (a) {
                    var b = a.callback || C(), c = a.auth_key || D, d = a.error || C(), e = M(), f = a.channel,
                        g = a.op, h = a.gw_type, a = a.device_id;
                    if (!a) return m("Missing Device ID (device_id)");
                    if (!h) return m("Missing GW Type (gw_type: gcm or apns)");
                    if (!g) return m("Missing GW Operation (op: add or remove)");
                    if (!f) return m("Missing gw destination Channel (channel)");
                    if (!Q) return m("Missing Publish Key");
                    if (!t) return m("Missing Subscribe Key");
                    a = [O, "v1/push/sub-key", t, "devices", a];
                    c = {uuid: I, auth: c, type: h};
                    "add" == g ? c.add = f : "remove" == g && (c.remove = f);
                    Z && (data.instanceid = U);
                    L({
                        a: e, data: c, c: function (a) {
                            p(a, b, d)
                        }, b: function (a) {
                            q(a, d)
                        }, url: a
                    })
                },
                audit: function (a, b) {
                    var b = a.callback || b, c = a.error || C(), d = a.channel, e = a.channel_group, f = a.auth_key,
                        g = M();
                    if (!b) return m("Missing Callback");
                    if (!t) return m("Missing Subscribe Key");
                    if (!Q) return m("Missing Publish Key");
                    if (!Da) return m("Missing Secret Key");
                    var h = t + "\n" + Q + "\naudit\n", l = {timestamp: Math.floor((new Date).getTime() / 1E3)};
                    "0" != g && (l.callback = g);
                    "undefined" != typeof d && (d != y && 0 < d.length) && (l.channel = d);
                    "undefined" != typeof e && (e != y && 0 < e.length) && (l["channel-group"] = e);
                    f && (l.auth = f);
                    l = B(l);
                    f || delete l.auth;
                    h += s(l);
                    d = ib(h, Da);
                    d = d.replace(/\+/g, "-");
                    d = d.replace(/\//g, "_");
                    l.signature = d;
                    L({
                        a: g, data: l, c: function (a) {
                            p(a, b, c)
                        }, b: function (a) {
                            q(a, c)
                        }, url: [O, "v1", "auth", "audit",
                            "sub-key", t]
                    })
                },
                revoke: function (a, b) {
                    a.read = A;
                    a.write = A;
                    x.grant(a, b)
                },
                set_uuid: function (a) {
                    I = a;
                    c()
                },
                get_uuid: function () {
                    return I
                },
                isArray: function (a) {
                    return va(a)
                },
                get_subscibed_channels: function () {
                    return ya(H, r)
                },
                presence_heartbeat: function (a) {
                    var b = a.callback || C(), c = a.error || C(), a = M(), d = {uuid: I, auth: D};
                    2 < JSON.stringify(W).length && (d.state = JSON.stringify(W));
                    0 < T && 320 > T && (d.heartbeat = T);
                    "0" != a && (d.callback = a);
                    var e;
                    e = ya(H, r).join(",");
                    e = encodeURIComponent(e);
                    var f = za(S, r).join(",");
                    e || (e = ",");
                    f &&
                    (d["channel-group"] = f);
                    Z && (d.instanceid = U);
                    L({
                        a: a,
                        data: B(d),
                        timeout: 5 * F,
                        url: [O, "v2", "presence", "sub-key", t, "channel", e, "heartbeat"],
                        c: function (a) {
                            p(a, b, c)
                        },
                        b: function (a) {
                            q(a, c)
                        }
                    })
                },
                stop_timers: function () {
                    clearTimeout(X);
                    clearTimeout(Y)
                },
                xdr: L,
                ready: Ha,
                db: ha,
                uuid: pa,
                map: wa,
                each: $,
                "each-channel": ba,
                grep: ta,
                offline: function () {
                    e(1, {message: "Offline. Please check your network settings."})
                },
                supplant: ua,
                now: K,
                unique: ma,
                updater: ra
            };
            I || (I = x.uuid());
            U || (U = x.uuid());
            ha.set(t + "uuid", I);
            X = setTimeout(w, F);
            Y = setTimeout(f,
                ab);
            Ba = setTimeout(N, (P - 3) * F);
            b();
            var R = x, Fa;
            for (Fa in R) R.hasOwnProperty(Fa) && (l[Fa] = R[Fa]);
            l.css = Xa;
            l.$ = Ma;
            l.create = Ya;
            l.bind = Ua;
            l.head = Va;
            l.search = Ta;
            l.attr = Wa;
            l.events = vb;
            l.init = l;
            l.secure = l;
            l.crypto_obj = Ia();
            Ua("beforeunload", window, function () {
                if (La) l["each-channel"](function (a) {
                    l.LEAVE(a.name, 0)
                });
                return r
            });
            if (a.notest) return l;
            Ua("offline", window, l.offline);
            Ua("offline", document, l.offline);
            return l
        };
        zb.init = zb;
        zb.secure = zb;
        zb.crypto_obj = Ia();
        "complete" === document.readyState ? setTimeout(Ha, 0) :
            Ua("load", window, function () {
                setTimeout(Ha, 0)
            });
        var Cb = wb || {};
        PUBNUB = zb({
            notest: 1,
            publish_key: Wa(Cb, "pub-key"),
            subscribe_key: Wa(Cb, "sub-key"),
            ssl: !document.location.href.indexOf("https") || "on" == Wa(Cb, "ssl"),
            origin: Wa(Cb, "origin"),
            uuid: Wa(Cb, "uuid")
        });
        window.jQuery && (window.jQuery.PUBNUB = zb);
        "undefined" !== typeof module && (module.exports = PUBNUB) && Ha();
        var gb = Ma("pubnubs") || 0;
        if (wb) {
            Xa(wb, {position: "absolute", top: -F});
            if ("opera" in window || Wa(wb, "flash")) wb.innerHTML = "<object id=pubnubs data=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=movie value=https://pubnub.a.ssl.fastly.net/pubnub.swf><param name=allowscriptaccess value=always></object>";
            PUBNUB.rdx = function (a, c) {
                if (!c) return $a[a].onerror();
                $a[a].responseText = unescape(c);
                $a[a].onload()
            };
            $a.id = F
        }
    }
    var Db = PUBNUB.ws = function (a, c) {
        if (!(this instanceof Db)) return new Db(a, c);
        var b = this, a = b.url = a || "";
        b.protocol = c || "Sec-WebSocket-Protocol";
        var e = a.split("/"),
            e = {ssl: "wss:" === e[0], origin: e[2], publish_key: e[3], subscribe_key: e[4], channel: e[5]};
        b.CONNECTING = 0;
        b.OPEN = 1;
        b.CLOSING = 2;
        b.CLOSED = 3;
        b.CLOSE_NORMAL = 1E3;
        b.CLOSE_GOING_AWAY = 1001;
        b.CLOSE_PROTOCOL_ERROR = 1002;
        b.CLOSE_UNSUPPORTED = 1003;
        b.CLOSE_TOO_LARGE = 1004;
        b.CLOSE_NO_STATUS = 1005;
        b.CLOSE_ABNORMAL = 1006;
        b.onclose = b.onerror = b.onmessage = b.onopen = b.onsend =
            C();
        b.binaryType = "";
        b.extensions = "";
        b.bufferedAmount = 0;
        b.trasnmitting = A;
        b.buffer = [];
        b.readyState = b.CONNECTING;
        if (!a) return b.readyState = b.CLOSED, b.onclose({
            code: b.CLOSE_ABNORMAL,
            reason: "Missing URL",
            wasClean: r
        }), b;
        b.g = PUBNUB.init(e);
        b.g.n = e;
        b.n = e;
        b.g.subscribe({
            restore: A, channel: e.channel, disconnect: b.onerror, reconnect: b.onopen, error: function () {
                b.onclose({code: b.CLOSE_ABNORMAL, reason: "Missing URL", wasClean: A})
            }, callback: function (a) {
                b.onmessage({data: a})
            }, connect: function () {
                b.readyState = b.OPEN;
                b.onopen()
            }
        })
    };
    Db.prototype.send = function (a) {
        var c = this;
        c.g.publish({
            channel: c.g.n.channel, message: a, callback: function (a) {
                c.onsend({data: a})
            }
        })
    };
})();
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function (h, s) {
    var f = {}, g = f.lib = {}, q = function () {
        }, m = g.Base = {
            extend: function (a) {
                q.prototype = this;
                var c = new q;
                a && c.mixIn(a);
                c.hasOwnProperty("init") || (c.init = function () {
                    c.$super.init.apply(this, arguments)
                });
                c.init.prototype = c;
                c.$super = this;
                return c
            }, create: function () {
                var a = this.extend();
                a.init.apply(a, arguments);
                return a
            }, init: function () {
            }, mixIn: function (a) {
                for (var c in a) a.hasOwnProperty(c) && (this[c] = a[c]);
                a.hasOwnProperty("toString") && (this.toString = a.toString)
            }, clone: function () {
                return this.init.prototype.extend(this)
            }
        },
        r = g.WordArray = m.extend({
            init: function (a, c) {
                a = this.words = a || [];
                this.sigBytes = c != s ? c : 4 * a.length
            }, toString: function (a) {
                return (a || k).stringify(this)
            }, concat: function (a) {
                var c = this.words, d = a.words, b = this.sigBytes;
                a = a.sigBytes;
                this.clamp();
                if (b % 4) for (var e = 0; e < a; e++) c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4); else if (65535 < d.length) for (e = 0; e < a; e += 4) c[b + e >>> 2] = d[e >>> 2]; else c.push.apply(c, d);
                this.sigBytes += a;
                return this
            }, clamp: function () {
                var a = this.words, c = this.sigBytes;
                a[c >>> 2] &= 4294967295 <<
                    32 - 8 * (c % 4);
                a.length = h.ceil(c / 4)
            }, clone: function () {
                var a = m.clone.call(this);
                a.words = this.words.slice(0);
                return a
            }, random: function (a) {
                for (var c = [], d = 0; d < a; d += 4) c.push(4294967296 * h.random() | 0);
                return new r.init(c, a)
            }
        }), l = f.enc = {}, k = l.Hex = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) {
                    var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                    d.push((e >>> 4).toString(16));
                    d.push((e & 15).toString(16))
                }
                return d.join("")
            }, parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b += 2) d[b >>> 3] |= parseInt(a.substr(b,
                    2), 16) << 24 - 4 * (b % 8);
                return new r.init(d, c / 2)
            }
        }, n = l.Latin1 = {
            stringify: function (a) {
                var c = a.words;
                a = a.sigBytes;
                for (var d = [], b = 0; b < a; b++) d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
                return d.join("")
            }, parse: function (a) {
                for (var c = a.length, d = [], b = 0; b < c; b++) d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
                return new r.init(d, c)
            }
        }, j = l.Utf8 = {
            stringify: function (a) {
                try {
                    return decodeURIComponent(escape(n.stringify(a)))
                } catch (c) {
                    throw Error("Malformed UTF-8 data");
                }
            }, parse: function (a) {
                return n.parse(unescape(encodeURIComponent(a)))
            }
        },
        u = g.BufferedBlockAlgorithm = m.extend({
            reset: function () {
                this._data = new r.init;
                this._nDataBytes = 0
            }, _append: function (a) {
                "string" == typeof a && (a = j.parse(a));
                this._data.concat(a);
                this._nDataBytes += a.sigBytes
            }, _process: function (a) {
                var c = this._data, d = c.words, b = c.sigBytes, e = this.blockSize, f = b / (4 * e),
                    f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
                a = f * e;
                b = h.min(4 * a, b);
                if (a) {
                    for (var g = 0; g < a; g += e) this._doProcessBlock(d, g);
                    g = d.splice(0, a);
                    c.sigBytes -= b
                }
                return new r.init(g, b)
            }, clone: function () {
                var a = m.clone.call(this);
                a._data = this._data.clone();
                return a
            }, _minBufferSize: 0
        });
    g.Hasher = u.extend({
        cfg: m.extend(), init: function (a) {
            this.cfg = this.cfg.extend(a);
            this.reset()
        }, reset: function () {
            u.reset.call(this);
            this._doReset()
        }, update: function (a) {
            this._append(a);
            this._process();
            return this
        }, finalize: function (a) {
            a && this._append(a);
            return this._doFinalize()
        }, blockSize: 16, _createHelper: function (a) {
            return function (c, d) {
                return (new a.init(d)).finalize(c)
            }
        }, _createHmacHelper: function (a) {
            return function (c, d) {
                return (new t.HMAC.init(a,
                    d)).finalize(c)
            }
        }
    });
    var t = f.algo = {};
    return f
}(Math);

// SHA256
(function (h) {
    for (var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function (a) {
        return 4294967296 * (a - (a | 0)) | 0
    }, k = 2, n = 0; 64 > n;) {
        var j;
        a:{
            j = k;
            for (var u = h.sqrt(j), t = 2; t <= u; t++) if (!(j % t)) {
                j = !1;
                break a
            }
            j = !0
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++
    }
    var a = [], f = f.SHA256 = q.extend({
        _doReset: function () {
            this._hash = new g.init(m.slice(0))
        }, _doProcessBlock: function (c, d) {
            for (var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++) {
                if (16 > p) a[p] =
                    c[d + p] | 0; else {
                    var k = a[p - 15], l = a[p - 2];
                    a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16]
                }
                k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                q = n;
                n = m;
                m = h;
                h = j + k | 0;
                j = g;
                g = f;
                f = e;
                e = k + l | 0
            }
            b[0] = b[0] + e | 0;
            b[1] = b[1] + f | 0;
            b[2] = b[2] + g | 0;
            b[3] = b[3] + j | 0;
            b[4] = b[4] + h | 0;
            b[5] = b[5] + m | 0;
            b[6] = b[6] + n | 0;
            b[7] = b[7] + q | 0
        }, _doFinalize: function () {
            var a = this._data, d = a.words, b = 8 * this._nDataBytes, e = 8 * a.sigBytes;
            d[e >>> 5] |= 128 << 24 - e % 32;
            d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
            d[(e + 64 >>> 9 << 4) + 15] = b;
            a.sigBytes = 4 * d.length;
            this._process();
            return this._hash
        }, clone: function () {
            var a = q.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f)
})(Math);

// HMAC SHA256
(function () {
    var h = CryptoJS, s = h.enc.Utf8;
    h.algo.HMAC = h.lib.Base.extend({
        init: function (f, g) {
            f = this._hasher = new f.init;
            "string" == typeof g && (g = s.parse(g));
            var h = f.blockSize, m = 4 * h;
            g.sigBytes > m && (g = f.finalize(g));
            g.clamp();
            for (var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++) k[j] ^= 1549556828, n[j] ^= 909522486;
            r.sigBytes = l.sigBytes = m;
            this.reset()
        }, reset: function () {
            var f = this._hasher;
            f.reset();
            f.update(this._iKey)
        }, update: function (f) {
            this._hasher.update(f);
            return this
        }, finalize: function (f) {
            var g =
                this._hasher;
            f = g.finalize(f);
            g.reset();
            return g.finalize(this._oKey.clone().concat(f))
        }
    })
})();

// Base64
(function () {
    var u = CryptoJS, p = u.lib.WordArray;
    u.enc.Base64 = {
        stringify: function (d) {
            var l = d.words, p = d.sigBytes, t = this._map;
            d.clamp();
            d = [];
            for (var r = 0; r < p; r += 3) for (var w = (l[r >>> 2] >>> 24 - 8 * (r % 4) & 255) << 16 | (l[r + 1 >>> 2] >>> 24 - 8 * ((r + 1) % 4) & 255) << 8 | l[r + 2 >>> 2] >>> 24 - 8 * ((r + 2) % 4) & 255, v = 0; 4 > v && r + 0.75 * v < p; v++) d.push(t.charAt(w >>> 6 * (3 - v) & 63));
            if (l = t.charAt(64)) for (; d.length % 4;) d.push(l);
            return d.join("")
        }, parse: function (d) {
            var l = d.length, s = this._map, t = s.charAt(64);
            t && (t = d.indexOf(t), -1 != t && (l = t));
            for (var t = [], r = 0, w = 0; w <
            l; w++) if (w % 4) {
                var v = s.indexOf(d.charAt(w - 1)) << 2 * (w % 4), b = s.indexOf(d.charAt(w)) >>> 6 - 2 * (w % 4);
                t[r >>> 2] |= (v | b) << 24 - 8 * (r % 4);
                r++
            }
            return p.create(t, r)
        }, _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    }
})();

// BlockCipher
(function (u) {
    function p(b, n, a, c, e, j, k) {
        b = b + (n & a | ~n & c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function d(b, n, a, c, e, j, k) {
        b = b + (n & c | a & ~c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function l(b, n, a, c, e, j, k) {
        b = b + (n ^ a ^ c) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    function s(b, n, a, c, e, j, k) {
        b = b + (a ^ (n | ~c)) + e + k;
        return (b << j | b >>> 32 - j) + n
    }

    for (var t = CryptoJS, r = t.lib, w = r.WordArray, v = r.Hasher, r = t.algo, b = [], x = 0; 64 > x; x++) b[x] = 4294967296 * u.abs(u.sin(x + 1)) | 0;
    r = r.MD5 = v.extend({
        _doReset: function () {
            this._hash = new w.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function (q, n) {
            for (var a = 0; 16 > a; a++) {
                var c = n + a, e = q[c];
                q[c] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360
            }
            var a = this._hash.words, c = q[n + 0], e = q[n + 1], j = q[n + 2], k = q[n + 3], z = q[n + 4],
                r = q[n + 5], t = q[n + 6], w = q[n + 7], v = q[n + 8], A = q[n + 9], B = q[n + 10], C = q[n + 11],
                u = q[n + 12], D = q[n + 13], E = q[n + 14], x = q[n + 15], f = a[0], m = a[1], g = a[2], h = a[3],
                f = p(f, m, g, h, c, 7, b[0]), h = p(h, f, m, g, e, 12, b[1]), g = p(g, h, f, m, j, 17, b[2]),
                m = p(m, g, h, f, k, 22, b[3]), f = p(f, m, g, h, z, 7, b[4]), h = p(h, f, m, g, r, 12, b[5]),
                g = p(g, h, f, m, t, 17, b[6]), m = p(m, g, h, f, w, 22, b[7]),
                f = p(f, m, g, h, v, 7, b[8]), h = p(h, f, m, g, A, 12, b[9]), g = p(g, h, f, m, B, 17, b[10]),
                m = p(m, g, h, f, C, 22, b[11]), f = p(f, m, g, h, u, 7, b[12]), h = p(h, f, m, g, D, 12, b[13]),
                g = p(g, h, f, m, E, 17, b[14]), m = p(m, g, h, f, x, 22, b[15]), f = d(f, m, g, h, e, 5, b[16]),
                h = d(h, f, m, g, t, 9, b[17]), g = d(g, h, f, m, C, 14, b[18]), m = d(m, g, h, f, c, 20, b[19]),
                f = d(f, m, g, h, r, 5, b[20]), h = d(h, f, m, g, B, 9, b[21]), g = d(g, h, f, m, x, 14, b[22]),
                m = d(m, g, h, f, z, 20, b[23]), f = d(f, m, g, h, A, 5, b[24]), h = d(h, f, m, g, E, 9, b[25]),
                g = d(g, h, f, m, k, 14, b[26]), m = d(m, g, h, f, v, 20, b[27]), f = d(f, m, g, h, D, 5, b[28]),
                h = d(h, f,
                    m, g, j, 9, b[29]), g = d(g, h, f, m, w, 14, b[30]), m = d(m, g, h, f, u, 20, b[31]),
                f = l(f, m, g, h, r, 4, b[32]), h = l(h, f, m, g, v, 11, b[33]), g = l(g, h, f, m, C, 16, b[34]),
                m = l(m, g, h, f, E, 23, b[35]), f = l(f, m, g, h, e, 4, b[36]), h = l(h, f, m, g, z, 11, b[37]),
                g = l(g, h, f, m, w, 16, b[38]), m = l(m, g, h, f, B, 23, b[39]), f = l(f, m, g, h, D, 4, b[40]),
                h = l(h, f, m, g, c, 11, b[41]), g = l(g, h, f, m, k, 16, b[42]), m = l(m, g, h, f, t, 23, b[43]),
                f = l(f, m, g, h, A, 4, b[44]), h = l(h, f, m, g, u, 11, b[45]), g = l(g, h, f, m, x, 16, b[46]),
                m = l(m, g, h, f, j, 23, b[47]), f = s(f, m, g, h, c, 6, b[48]), h = s(h, f, m, g, w, 10, b[49]),
                g = s(g, h, f, m,
                    E, 15, b[50]), m = s(m, g, h, f, r, 21, b[51]), f = s(f, m, g, h, u, 6, b[52]),
                h = s(h, f, m, g, k, 10, b[53]), g = s(g, h, f, m, B, 15, b[54]), m = s(m, g, h, f, e, 21, b[55]),
                f = s(f, m, g, h, v, 6, b[56]), h = s(h, f, m, g, x, 10, b[57]), g = s(g, h, f, m, t, 15, b[58]),
                m = s(m, g, h, f, D, 21, b[59]), f = s(f, m, g, h, z, 6, b[60]), h = s(h, f, m, g, C, 10, b[61]),
                g = s(g, h, f, m, j, 15, b[62]), m = s(m, g, h, f, A, 21, b[63]);
            a[0] = a[0] + f | 0;
            a[1] = a[1] + m | 0;
            a[2] = a[2] + g | 0;
            a[3] = a[3] + h | 0
        }, _doFinalize: function () {
            var b = this._data, n = b.words, a = 8 * this._nDataBytes, c = 8 * b.sigBytes;
            n[c >>> 5] |= 128 << 24 - c % 32;
            var e = u.floor(a /
                4294967296);
            n[(c + 64 >>> 9 << 4) + 15] = (e << 8 | e >>> 24) & 16711935 | (e << 24 | e >>> 8) & 4278255360;
            n[(c + 64 >>> 9 << 4) + 14] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
            b.sigBytes = 4 * (n.length + 1);
            this._process();
            b = this._hash;
            n = b.words;
            for (a = 0; 4 > a; a++) c = n[a], n[a] = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
            return b
        }, clone: function () {
            var b = v.clone.call(this);
            b._hash = this._hash.clone();
            return b
        }
    });
    t.MD5 = v._createHelper(r);
    t.HmacMD5 = v._createHmacHelper(r)
})(Math);
(function () {
    var u = CryptoJS, p = u.lib, d = p.Base, l = p.WordArray, p = u.algo, s = p.EvpKDF = d.extend({
        cfg: d.extend({keySize: 4, hasher: p.MD5, iterations: 1}), init: function (d) {
            this.cfg = this.cfg.extend(d)
        }, compute: function (d, r) {
            for (var p = this.cfg, s = p.hasher.create(), b = l.create(), u = b.words, q = p.keySize, p = p.iterations; u.length < q;) {
                n && s.update(n);
                var n = s.update(d).finalize(r);
                s.reset();
                for (var a = 1; a < p; a++) n = s.finalize(n), s.reset();
                b.concat(n)
            }
            b.sigBytes = 4 * q;
            return b
        }
    });
    u.EvpKDF = function (d, l, p) {
        return s.create(p).compute(d,
            l)
    }
})();

// Cipher
CryptoJS.lib.Cipher || function (u) {
    var p = CryptoJS, d = p.lib, l = d.Base, s = d.WordArray, t = d.BufferedBlockAlgorithm, r = p.enc.Base64,
        w = p.algo.EvpKDF, v = d.Cipher = t.extend({
            cfg: l.extend(), createEncryptor: function (e, a) {
                return this.create(this._ENC_XFORM_MODE, e, a)
            }, createDecryptor: function (e, a) {
                return this.create(this._DEC_XFORM_MODE, e, a)
            }, init: function (e, a, b) {
                this.cfg = this.cfg.extend(b);
                this._xformMode = e;
                this._key = a;
                this.reset()
            }, reset: function () {
                t.reset.call(this);
                this._doReset()
            }, process: function (e) {
                this._append(e);
                return this._process()
            },
            finalize: function (e) {
                e && this._append(e);
                return this._doFinalize()
            }, keySize: 4, ivSize: 4, _ENC_XFORM_MODE: 1, _DEC_XFORM_MODE: 2, _createHelper: function (e) {
                return {
                    encrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).encrypt(e, b, k, d)
                    }, decrypt: function (b, k, d) {
                        return ("string" == typeof k ? c : a).decrypt(e, b, k, d)
                    }
                }
            }
        });
    d.StreamCipher = v.extend({
        _doFinalize: function () {
            return this._process(!0)
        }, blockSize: 1
    });
    var b = p.mode = {}, x = function (e, a, b) {
        var c = this._iv;
        c ? this._iv = u : c = this._prevBlock;
        for (var d = 0; d < b; d++) e[a + d] ^=
            c[d]
    }, q = (d.BlockCipherMode = l.extend({
        createEncryptor: function (e, a) {
            return this.Encryptor.create(e, a)
        }, createDecryptor: function (e, a) {
            return this.Decryptor.create(e, a)
        }, init: function (e, a) {
            this._cipher = e;
            this._iv = a
        }
    })).extend();
    q.Encryptor = q.extend({
        processBlock: function (e, a) {
            var b = this._cipher, c = b.blockSize;
            x.call(this, e, a, c);
            b.encryptBlock(e, a);
            this._prevBlock = e.slice(a, a + c)
        }
    });
    q.Decryptor = q.extend({
        processBlock: function (e, a) {
            var b = this._cipher, c = b.blockSize, d = e.slice(a, a + c);
            b.decryptBlock(e, a);
            x.call(this,
                e, a, c);
            this._prevBlock = d
        }
    });
    b = b.CBC = q;
    q = (p.pad = {}).Pkcs7 = {
        pad: function (a, b) {
            for (var c = 4 * b, c = c - a.sigBytes % c, d = c << 24 | c << 16 | c << 8 | c, l = [], n = 0; n < c; n += 4) l.push(d);
            c = s.create(l, c);
            a.concat(c)
        }, unpad: function (a) {
            a.sigBytes -= a.words[a.sigBytes - 1 >>> 2] & 255
        }
    };
    d.BlockCipher = v.extend({
        cfg: v.cfg.extend({mode: b, padding: q}), reset: function () {
            v.reset.call(this);
            var a = this.cfg, b = a.iv, a = a.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) var c = a.createEncryptor; else c = a.createDecryptor, this._minBufferSize = 1;
            this._mode = c.call(a,
                this, b && b.words)
        }, _doProcessBlock: function (a, b) {
            this._mode.processBlock(a, b)
        }, _doFinalize: function () {
            var a = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
                a.pad(this._data, this.blockSize);
                var b = this._process(!0)
            } else b = this._process(!0), a.unpad(b);
            return b
        }, blockSize: 4
    });
    var n = d.CipherParams = l.extend({
        init: function (a) {
            this.mixIn(a)
        }, toString: function (a) {
            return (a || this.formatter).stringify(this)
        }
    }), b = (p.format = {}).OpenSSL = {
        stringify: function (a) {
            var b = a.ciphertext;
            a = a.salt;
            return (a ? s.create([1398893684,
                1701076831]).concat(a).concat(b) : b).toString(r)
        }, parse: function (a) {
            a = r.parse(a);
            var b = a.words;
            if (1398893684 == b[0] && 1701076831 == b[1]) {
                var c = s.create(b.slice(2, 4));
                b.splice(0, 4);
                a.sigBytes -= 16
            }
            return n.create({ciphertext: a, salt: c})
        }
    }, a = d.SerializableCipher = l.extend({
        cfg: l.extend({format: b}), encrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            var l = a.createEncryptor(c, d);
            b = l.finalize(b);
            l = l.cfg;
            return n.create({
                ciphertext: b,
                key: c,
                iv: l.iv,
                algorithm: a,
                mode: l.mode,
                padding: l.padding,
                blockSize: a.blockSize,
                formatter: d.format
            })
        },
        decrypt: function (a, b, c, d) {
            d = this.cfg.extend(d);
            b = this._parse(b, d.format);
            return a.createDecryptor(c, d).finalize(b.ciphertext)
        }, _parse: function (a, b) {
            return "string" == typeof a ? b.parse(a, this) : a
        }
    }), p = (p.kdf = {}).OpenSSL = {
        execute: function (a, b, c, d) {
            d || (d = s.random(8));
            a = w.create({keySize: b + c}).compute(a, d);
            c = s.create(a.words.slice(b), 4 * c);
            a.sigBytes = 4 * b;
            return n.create({key: a, iv: c, salt: d})
        }
    }, c = d.PasswordBasedCipher = a.extend({
        cfg: a.cfg.extend({kdf: p}), encrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            d = l.kdf.execute(d,
                b.keySize, b.ivSize);
            l.iv = d.iv;
            b = a.encrypt.call(this, b, c, d.key, l);
            b.mixIn(d);
            return b
        }, decrypt: function (b, c, d, l) {
            l = this.cfg.extend(l);
            c = this._parse(c, l.format);
            d = l.kdf.execute(d, b.keySize, b.ivSize, c.salt);
            l.iv = d.iv;
            return a.decrypt.call(this, b, c, d.key, l)
        }
    })
}();

// AES
(function () {
    for (var u = CryptoJS, p = u.lib.BlockCipher, d = u.algo, l = [], s = [], t = [], r = [], w = [], v = [], b = [], x = [], q = [], n = [], a = [], c = 0; 256 > c; c++) a[c] = 128 > c ? c << 1 : c << 1 ^ 283;
    for (var e = 0, j = 0, c = 0; 256 > c; c++) {
        var k = j ^ j << 1 ^ j << 2 ^ j << 3 ^ j << 4, k = k >>> 8 ^ k & 255 ^ 99;
        l[e] = k;
        s[k] = e;
        var z = a[e], F = a[z], G = a[F], y = 257 * a[k] ^ 16843008 * k;
        t[e] = y << 24 | y >>> 8;
        r[e] = y << 16 | y >>> 16;
        w[e] = y << 8 | y >>> 24;
        v[e] = y;
        y = 16843009 * G ^ 65537 * F ^ 257 * z ^ 16843008 * e;
        b[k] = y << 24 | y >>> 8;
        x[k] = y << 16 | y >>> 16;
        q[k] = y << 8 | y >>> 24;
        n[k] = y;
        e ? (e = z ^ a[a[a[G ^ z]]], j ^= a[a[j]]) : e = j = 1
    }
    var H = [0, 1, 2, 4, 8,
        16, 32, 64, 128, 27, 54], d = d.AES = p.extend({
        _doReset: function () {
            for (var a = this._key, c = a.words, d = a.sigBytes / 4, a = 4 * ((this._nRounds = d + 6) + 1), e = this._keySchedule = [], j = 0; j < a; j++) if (j < d) e[j] = c[j]; else {
                var k = e[j - 1];
                j % d ? 6 < d && 4 == j % d && (k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255]) : (k = k << 8 | k >>> 24, k = l[k >>> 24] << 24 | l[k >>> 16 & 255] << 16 | l[k >>> 8 & 255] << 8 | l[k & 255], k ^= H[j / d | 0] << 24);
                e[j] = e[j - d] ^ k
            }
            c = this._invKeySchedule = [];
            for (d = 0; d < a; d++) j = a - d, k = d % 4 ? e[j] : e[j - 4], c[d] = 4 > d || 4 >= j ? k : b[l[k >>> 24]] ^ x[l[k >>> 16 & 255]] ^ q[l[k >>>
            8 & 255]] ^ n[l[k & 255]]
        }, encryptBlock: function (a, b) {
            this._doCryptBlock(a, b, this._keySchedule, t, r, w, v, l)
        }, decryptBlock: function (a, c) {
            var d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d;
            this._doCryptBlock(a, c, this._invKeySchedule, b, x, q, n, s);
            d = a[c + 1];
            a[c + 1] = a[c + 3];
            a[c + 3] = d
        }, _doCryptBlock: function (a, b, c, d, e, j, l, f) {
            for (var m = this._nRounds, g = a[b] ^ c[0], h = a[b + 1] ^ c[1], k = a[b + 2] ^ c[2], n = a[b + 3] ^ c[3], p = 4, r = 1; r < m; r++) var q = d[g >>> 24] ^ e[h >>> 16 & 255] ^ j[k >>> 8 & 255] ^ l[n & 255] ^ c[p++], s = d[h >>> 24] ^ e[k >>> 16 & 255] ^ j[n >>> 8 & 255] ^ l[g & 255] ^ c[p++], t =
                d[k >>> 24] ^ e[n >>> 16 & 255] ^ j[g >>> 8 & 255] ^ l[h & 255] ^ c[p++], n = d[n >>> 24] ^ e[g >>> 16 & 255] ^ j[h >>> 8 & 255] ^ l[k & 255] ^ c[p++], g = q, h = s, k = t;
            q = (f[g >>> 24] << 24 | f[h >>> 16 & 255] << 16 | f[k >>> 8 & 255] << 8 | f[n & 255]) ^ c[p++];
            s = (f[h >>> 24] << 24 | f[k >>> 16 & 255] << 16 | f[n >>> 8 & 255] << 8 | f[g & 255]) ^ c[p++];
            t = (f[k >>> 24] << 24 | f[n >>> 16 & 255] << 16 | f[g >>> 8 & 255] << 8 | f[h & 255]) ^ c[p++];
            n = (f[n >>> 24] << 24 | f[g >>> 16 & 255] << 16 | f[h >>> 8 & 255] << 8 | f[k & 255]) ^ c[p++];
            a[b] = q;
            a[b + 1] = s;
            a[b + 2] = t;
            a[b + 3] = n
        }, keySize: 8
    });
    u.AES = p._createHelper(d)
})();

// Mode ECB
CryptoJS.mode.ECB = (function () {
    var ECB = CryptoJS.lib.BlockCipherMode.extend();

    ECB.Encryptor = ECB.extend({
        processBlock: function (words, offset) {
            this._cipher.encryptBlock(words, offset);
        }
    });

    ECB.Decryptor = ECB.extend({
        processBlock: function (words, offset) {
            this._cipher.decryptBlock(words, offset);
        }
    });

    return ECB;
}());// Moved to hmac-sha-256.js