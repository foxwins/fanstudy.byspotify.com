! function r(e, n, t) {
    function o(i, f) {
        if (!n[i]) {
            if (!e[i]) {
                var c = "function" == typeof require && require;
                if (!f && c) return c(i, !0);
                if (u) return u(i, !0);
                var a = new Error("Cannot find module '" + i + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            var p = n[i] = {
                exports: {}
            };
            e[i][0].call(p.exports, function(r) {
                return o(e[i][1][r] || r)
            }, p, p.exports, r, e, n, t)
        }
        return n[i].exports
    }
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
}({
    1: [function(require, module, exports) {
        var root, factory;
        root = this, factory = function() {
            var CryptoJS = CryptoJS || function(Math, undefined) {
                var create = Object.create || function() {
                        function F() {}
                        return function(obj) {
                            var subtype;
                            return F.prototype = obj, subtype = new F, F.prototype = null, subtype
                        }
                    }(),
                    C = {},
                    C_lib = C.lib = {},
                    Base = C_lib.Base = {
                        extend: function(overrides) {
                            var subtype = create(this);
                            return overrides && subtype.mixIn(overrides), subtype.hasOwnProperty("init") && this.init !== subtype.init || (subtype.init = function() {
                                subtype.$super.init.apply(this, arguments)
                            }), (subtype.init.prototype = subtype).$super = this, subtype
                        },
                        create: function() {
                            var instance = this.extend();
                            return instance.init.apply(instance, arguments), instance
                        },
                        init: function() {},
                        mixIn: function(properties) {
                            for (var propertyName in properties) properties.hasOwnProperty(propertyName) && (this[propertyName] = properties[propertyName]);
                            properties.hasOwnProperty("toString") && (this.toString = properties.toString)
                        },
                        clone: function() {
                            return this.init.prototype.extend(this)
                        }
                    },
                    WordArray = C_lib.WordArray = Base.extend({
                        init: function(words, sigBytes) {
                            words = this.words = words || [], this.sigBytes = null != sigBytes ? sigBytes : 4 * words.length
                        },
                        toString: function(encoder) {
                            return (encoder || Hex).stringify(this)
                        },
                        concat: function(wordArray) {
                            var thisWords = this.words,
                                thatWords = wordArray.words,
                                thisSigBytes = this.sigBytes,
                                thatSigBytes = wordArray.sigBytes;
                            if (this.clamp(), thisSigBytes % 4)
                                for (var i = 0; i < thatSigBytes; i++) {
                                    var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                    thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8
                                } else
                                    for (i = 0; i < thatSigBytes; i += 4) thisWords[thisSigBytes + i >>> 2] = thatWords[i >>> 2];
                            return this.sigBytes += thatSigBytes, this
                        },
                        clamp: function() {
                            var words = this.words,
                                sigBytes = this.sigBytes;
                            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8, words.length = Math.ceil(sigBytes / 4)
                        },
                        clone: function() {
                            var clone = Base.clone.call(this);
                            return clone.words = this.words.slice(0), clone
                        },
                        random: function(nBytes) {
                            for (var rcache, words = [], r = function(m_w) {
                                    m_w = m_w;
                                    var m_z = 987654321,
                                        mask = 4294967295;
                                    return function() {
                                        var result = ((m_z = 36969 * (65535 & m_z) + (m_z >> 16) & mask) << 16) + (m_w = 18e3 * (65535 & m_w) + (m_w >> 16) & mask) & mask;
                                        return result /= 4294967296, (result += .5) * (.5 < Math.random() ? 1 : -1)
                                    }
                                }, i = 0; i < nBytes; i += 4) {
                                var _r = r(4294967296 * (rcache || Math.random()));
                                rcache = 987654071 * _r(), words.push(4294967296 * _r() | 0)
                            }
                            return new WordArray.init(words, nBytes)
                        }
                    }),
                    C_enc = C.enc = {},
                    Hex = C_enc.Hex = {
                        stringify: function(wordArray) {
                            for (var words = wordArray.words, sigBytes = wordArray.sigBytes, hexChars = [], i = 0; i < sigBytes; i++) {
                                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                hexChars.push((bite >>> 4).toString(16)), hexChars.push((15 & bite).toString(16))
                            }
                            return hexChars.join("")
                        },
                        parse: function(hexStr) {
                            for (var hexStrLength = hexStr.length, words = [], i = 0; i < hexStrLength; i += 2) words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
                            return new WordArray.init(words, hexStrLength / 2)
                        }
                    },
                    Latin1 = C_enc.Latin1 = {
                        stringify: function(wordArray) {
                            for (var words = wordArray.words, sigBytes = wordArray.sigBytes, latin1Chars = [], i = 0; i < sigBytes; i++) {
                                var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                                latin1Chars.push(String.fromCharCode(bite))
                            }
                            return latin1Chars.join("")
                        },
                        parse: function(latin1Str) {
                            for (var latin1StrLength = latin1Str.length, words = [], i = 0; i < latin1StrLength; i++) words[i >>> 2] |= (255 & latin1Str.charCodeAt(i)) << 24 - i % 4 * 8;
                            return new WordArray.init(words, latin1StrLength)
                        }
                    },
                    Utf8 = C_enc.Utf8 = {
                        stringify: function(wordArray) {
                            try {
                                return decodeURIComponent(escape(Latin1.stringify(wordArray)))
                            } catch (e) {
                                throw new Error("Malformed UTF-8 data")
                            }
                        },
                        parse: function(utf8Str) {
                            return Latin1.parse(unescape(encodeURIComponent(utf8Str)))
                        }
                    },
                    BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
                        reset: function() {
                            this._data = new WordArray.init, this._nDataBytes = 0
                        },
                        _append: function(data) {
                            "string" == typeof data && (data = Utf8.parse(data)), this._data.concat(data), this._nDataBytes += data.sigBytes
                        },
                        _process: function(doFlush) {
                            var data = this._data,
                                dataWords = data.words,
                                dataSigBytes = data.sigBytes,
                                blockSize = this.blockSize,
                                nBlocksReady = dataSigBytes / (4 * blockSize),
                                nWordsReady = (nBlocksReady = doFlush ? Math.ceil(nBlocksReady) : Math.max((0 | nBlocksReady) - this._minBufferSize, 0)) * blockSize,
                                nBytesReady = Math.min(4 * nWordsReady, dataSigBytes);
                            if (nWordsReady) {
                                for (var offset = 0; offset < nWordsReady; offset += blockSize) this._doProcessBlock(dataWords, offset);
                                var processedWords = dataWords.splice(0, nWordsReady);
                                data.sigBytes -= nBytesReady
                            }
                            return new WordArray.init(processedWords, nBytesReady)
                        },
                        clone: function() {
                            var clone = Base.clone.call(this);
                            return clone._data = this._data.clone(), clone
                        },
                        _minBufferSize: 0
                    }),
                    C_algo = (C_lib.Hasher = BufferedBlockAlgorithm.extend({
                        cfg: Base.extend(),
                        init: function(cfg) {
                            this.cfg = this.cfg.extend(cfg), this.reset()
                        },
                        reset: function() {
                            BufferedBlockAlgorithm.reset.call(this), this._doReset()
                        },
                        update: function(messageUpdate) {
                            return this._append(messageUpdate), this._process(), this
                        },
                        finalize: function(messageUpdate) {
                            return messageUpdate && this._append(messageUpdate), this._doFinalize()
                        },
                        blockSize: 16,
                        _createHelper: function(hasher) {
                            return function(message, cfg) {
                                return new hasher.init(cfg).finalize(message)
                            }
                        },
                        _createHmacHelper: function(hasher) {
                            return function(message, key) {
                                return new C_algo.HMAC.init(hasher, key).finalize(message)
                            }
                        }
                    }), C.algo = {});
                return C
            }(Math);
            return CryptoJS
        }, "object" == typeof exports ? module.exports = exports = factory() : "function" == typeof define && define.amd ? define([], factory) : root.CryptoJS = factory()
    }, {}],
    2: [function(require, module, exports) {
        var root, factory;
        root = this, factory = function(CryptoJS) {
            return CryptoJS.enc.Hex
        }, "object" == typeof exports ? module.exports = exports = factory(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], factory) : factory(root.CryptoJS)
    }, {
        "./core": 1
    }],
    3: [function(require, module, exports) {
        var root, factory;
        root = this, factory = function(CryptoJS) {
            return function(Math) {
                var C = CryptoJS,
                    C_lib = C.lib,
                    WordArray = C_lib.WordArray,
                    Hasher = C_lib.Hasher,
                    C_algo = C.algo,
                    H = [],
                    K = [];
                ! function() {
                    function isPrime(n) {
                        for (var sqrtN = Math.sqrt(n), factor = 2; factor <= sqrtN; factor++)
                            if (!(n % factor)) return !1;
                        return !0
                    }

                    function getFractionalBits(n) {
                        return 4294967296 * (n - (0 | n)) | 0
                    }
                    for (var n = 2, nPrime = 0; nPrime < 64;) isPrime(n) && (nPrime < 8 && (H[nPrime] = getFractionalBits(Math.pow(n, .5))), K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3)), nPrime++), n++
                }();
                var W = [],
                    SHA256 = C_algo.SHA256 = Hasher.extend({
                        _doReset: function() {
                            this._hash = new WordArray.init(H.slice(0))
                        },
                        _doProcessBlock: function(M, offset) {
                            for (var H = this._hash.words, a = H[0], b = H[1], c = H[2], d = H[3], e = H[4], f = H[5], g = H[6], h = H[7], i = 0; i < 64; i++) {
                                if (i < 16) W[i] = 0 | M[offset + i];
                                else {
                                    var gamma0x = W[i - 15],
                                        gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3,
                                        gamma1x = W[i - 2],
                                        gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                                }
                                var maj = a & b ^ a & c ^ b & c,
                                    sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22),
                                    t1 = h + ((e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25)) + (e & f ^ ~e & g) + K[i] + W[i];
                                h = g, g = f, f = e, e = d + t1 | 0, d = c, c = b, b = a, a = t1 + (sigma0 + maj) | 0
                            }
                            H[0] = H[0] + a | 0, H[1] = H[1] + b | 0, H[2] = H[2] + c | 0, H[3] = H[3] + d | 0, H[4] = H[4] + e | 0, H[5] = H[5] + f | 0, H[6] = H[6] + g | 0, H[7] = H[7] + h | 0
                        },
                        _doFinalize: function() {
                            var data = this._data,
                                dataWords = data.words,
                                nBitsTotal = 8 * this._nDataBytes,
                                nBitsLeft = 8 * data.sigBytes;
                            return dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32, dataWords[14 + (nBitsLeft + 64 >>> 9 << 4)] = Math.floor(nBitsTotal / 4294967296), dataWords[15 + (nBitsLeft + 64 >>> 9 << 4)] = nBitsTotal, data.sigBytes = 4 * dataWords.length, this._process(), this._hash
                        },
                        clone: function() {
                            var clone = Hasher.clone.call(this);
                            return clone._hash = this._hash.clone(), clone
                        }
                    });
                C.SHA256 = Hasher._createHelper(SHA256), C.HmacSHA256 = Hasher._createHmacHelper(SHA256)
            }(Math), CryptoJS.SHA256
        }, "object" == typeof exports ? module.exports = exports = factory(require("./core")) : "function" == typeof define && define.amd ? define(["./core"], factory) : factory(root.CryptoJS)
    }, {
        "./core": 1
    }],
    4: [function(require, module, exports) {
        module.exports = {
            CLICK_ID_NAME: "rdt_cid",
            PIXEL_ENDPOINT: "https://alb.reddit.com/rp.gif",
            UNIX_EPOCH: "Thu, 01 Jan 1970 00:00:00 GMT",
            UUID_COOKIE_EXPIRATION_DAYS: 90,
            UUID_COOKIE_NAME_V2: "_rdt_uuid",
            METADATA_PREFIX: "m.",
            CUSTOM_EVENT_NAME_LIMIT: 64,
            CONVERSION_EVENTS: {
                PAGEVISIT: "PageVisit",
                VIEWCONTENT: "ViewContent",
                SEARCH: "Search",
                ADDTOCART: "AddToCart",
                ADDTOWISHLIST: "AddToWishlist",
                PURCHASE: "Purchase",
                LEAD: "Lead",
                SIGNUP: "SignUp",
                CUSTOM: "Custom"
            },
            CONVERSION_EVENTS_LIST: ["PageVisit", "ViewContent", "Search", "AddToCart", "AddToWishlist", "Purchase", "Lead", "SignUp", "Custom"],
            INTEGRATION_PROVIDERS: {
                REDDIT: "reddit",
                GTM: "gtm",
                NOSCRIPT: "noscript"
            },
            PIXEL_METHODS: {
                INIT: "init",
                ENABLE_FIRST_PARTY_COOKIES: "enableFirstPartyCookies",
                TRACK: "track",
                DISABLE_FIRST_PARTY_COOKIES: "disableFirstPartyCookies"
            },
            EVENT_METADATA: {
                ITEM_COUNT: "itemCount",
                VALUE: "value",
                VALUE_DECIMAL: "valueDecimal",
                CURRENCY: "currency",
                TRANSACTION_ID: "transactionId",
                CUSTOM_EVENT_NAME: "customEventName",
                PRODUCTS: "products"
            },
            EVENT_METADATA_LIST: ["itemCount", "value", "valueDecimal", "currency", "transactionId", "customEventName", "products"],
            REVENUE_METADATA_LIST: ["itemCount", "value", "valueDecimal", "currency", "transactionId"],
            DEFAULT_CURRENCY: "USD",
            REVENUE_EVENTS_LIST: ["AddToCart", "AddToWishlist", "Purchase", "Lead", "SignUp", "Custom"]
        }
    }, {}],
    5: [function(require, module, exports) {
        var CONSTANTS = require("./constants"),
            uuidv4 = require("./uuid"),
            strings = require("./strings"),
            addTimestampToCookie = function(uuid) {
                return (new Date).getTime() + "." + uuid
            };
        exports.addTimestampToCookie = addTimestampToCookie, exports.extractUuidFromCookieV2 = function(cookieValue) {
            var split = cookieValue.split(".");
            return split.length < 2 ? cookieValue : split[1]
        }, exports.createCookieV2 = function() {
            return addTimestampToCookie(uuidv4())
        }, exports.getCookieV2 = function() {
            for (var split = document.cookie.split(";"), oldestCookie = null, oldestTimestamp = 1 / 0, i = 0; i < split.length; i++) {
                var keyVal = split[i].split("=");
                if (1 < keyVal.length)
                    if (strings.trim(keyVal[0]) === CONSTANTS.UUID_COOKIE_NAME_V2) {
                        var valParts = keyVal[1].split(".");
                        if (1 < valParts.length) {
                            var timestamp = parseInt(valParts[0], 10);
                            !isNaN(timestamp) && timestamp < oldestTimestamp && (oldestTimestamp = timestamp, oldestCookie = keyVal[1])
                        }
                    }
            }
            return oldestCookie
        };
        var stringIsInteger = function(s) {
            return "" + Number(s) === s
        };
        exports.stringIsInteger = stringIsInteger;
        var setAndTestCookie = function(name, value, domain, expires) {
            var cookie = name + "=" + value + ";domain=." + domain + ";expires=" + expires + ";path=/;samesite=strict";
            return "https:" === window.location.protocol && (cookie += ";secure"), document.cookie = cookie, 0 <= document.cookie.indexOf(name)
        };
        exports.setAndTestCookie = setAndTestCookie, exports.setCookie = function(name, value, expiresDays) {
            var d = new Date,
                expiresInSeconds = 24 * expiresDays * 60 * 60;
            d.setTime(d.getTime() + 1e3 * expiresInSeconds);
            var expires = d.toUTCString(),
                domain = window.location.hostname;
            if (domain = "." == domain.slice(-1) ? domain.slice(0, -1) : domain, labels = domain.split("."), 1 == labels.length || stringIsInteger(labels[labels.length - 1])) return setAndTestCookie(name, value, domain, expires), domain;
            for (domain = labels.pop(), domain = labels.pop() + "." + domain; !setAndTestCookie(name, value, domain, expires) && labels.length;) domain = labels.pop() + "." + domain;
            return domain
        }, exports.deleteCookie = function(name, domain) {
            for (domain = domain || window.location.hostname, labels = domain.split("."); setAndTestCookie(name, "", labels.join("."), CONSTANTS.UNIX_EPOCH) && labels.length;) labels.shift();
            return labels.join(".")
        }
    }, {
        "./constants": 4,
        "./strings": 10,
        "./uuid": 11
    }],
    6: [function(require, module, exports) {
        exports.screenSize = function() {
            return pixelRatio = 1, width = window.screen.width * pixelRatio, height = window.screen.height * pixelRatio, {
                sh: Math.max(width, height),
                sw: Math.min(width, height)
            }
        }
    }, {}],
    7: [function(require, module, exports) {
        var console = window.console || {},
            result = {},
            prefixes = {
                error: "Reddit Pixel Error",
                warn: "Reddit Pixel Warning",
                info: "Reddit Pixel Info"
            },
            log = function(method) {
                return function(msg) {
                    method in console && method in prefixes && console[method](prefixes[method] + ":" + msg)
                }
            };
        result.error = log("error"), result.warn = log("warn"), result.info = log("info"), module.exports = result
    }, {}],
    8: [function(require, module, exports) {
        var slice = Array.prototype.slice,
            cookie = require("./cookie"),
            device = require("./device"),
            hasher = require("./validators/identityHasher"),
            logger = require("./logger"),
            integrations = require("./validators/integrations"),
            event = require("./validators/event"),
            CONSTANTS = require("./constants"),
            QueryString = require("./queryString"),
            QueryBuilder = QueryString.QueryBuilder,
            getQueryParameter = QueryString.getQueryParameter,
            rdt = window.rdt;
        rdt || logger.error("Pixel was not initialized.Please ensure you have included the correct pixel script in your head tag");
        var enableFirstPartyCookies = function() {
            var firstPartyCookie = cookie.getCookieV2() || cookie.createCookieV2();
            cookie.setCookie(CONSTANTS.UUID_COOKIE_NAME_V2, firstPartyCookie, CONSTANTS.UUID_COOKIE_EXPIRATION_DAYS), rdt.uuid = cookie.extractUuidFromCookieV2(firstPartyCookie);
            var clickId = getQueryParameter(window.location.search, CONSTANTS.CLICK_ID_NAME);
            clickId && !rdt.clickId && (rdt.clickId = clickId), rdt.enableFirstPartyCookies = !0
        };

        function sendEvent(method) {
            var path, query, args = slice.call(arguments),
                PIXEL_METHODS = CONSTANTS.PIXEL_METHODS;
            switch (method) {
                case PIXEL_METHODS.INIT:
                    return rdt.advertiserId ? void logger.warn("pixel has already been initialized") : (rdt.advertiserId = args[1], configArgs = args[2] || {}, screenSize = device.screenSize(), rdt.config = {
                        aaid: hasher.hashIfSet(configArgs.aaid, "aaid"),
                        em: hasher.hashIfSet(configArgs.email, "email"),
                        external_id: hasher.hashIfSet(configArgs.externalId, "externalId"),
                        idfa: hasher.hashIfSet(configArgs.idfa, "idfa"),
                        integration: integrations.getIntegrationProvider(configArgs.integration),
                        opt_out: configArgs.optOut ? 1 : 0,
                        sh: screenSize.sh,
                        sw: screenSize.sw,
                        v: "rdt_90e98f9f"
                    }, "useDecimalCurrencyValues" in configArgs ? rdt.useDecimalCurrencyValues = !!configArgs.useDecimalCurrencyValues : rdt.useDecimalCurrencyValues = !0, void enableFirstPartyCookies());
                case PIXEL_METHODS.ENABLE_FIRST_PARTY_COOKIES:
                    return void enableFirstPartyCookies();
                case PIXEL_METHODS.DISABLE_FIRST_PARTY_COOKIES:
                    return void(rdt.enableFirstPartyCookies = !1);
                case PIXEL_METHODS.TRACK:
                    var eventName = args[1];
                    if (!event.isValidEventType(eventName)) return void logger.error(eventName + " is not a valid pixel event please check the reddit pixel documentation for a list of valid pixel event types");
                    var metadataArgs = args[2] || {},
                        validatedMetadata = event.validateMetadata(eventName, metadataArgs),
                        q = (new QueryBuilder).addParams({
                            id: rdt.advertiserId,
                            event: eventName
                        }).addParams(validatedMetadata);
                    return rdt.enableFirstPartyCookies && (rdt.clickId && rdt.clickId.length && q.addParams({
                        click_id: rdt.clickId
                    }), rdt.uuid && rdt.uuid.length && q.addParams({
                        uuid: rdt.uuid
                    })), q.addParams(rdt.config), path = CONSTANTS.PIXEL_ENDPOINT, query = q.toQueryString(), void((new Image).src = path + query)
            }
        }
        for (rdt.sendEvent = sendEvent; rdt.callQueue.length;) sendEvent.apply(rdt, rdt.callQueue.shift())
    }, {
        "./constants": 4,
        "./cookie": 5,
        "./device": 6,
        "./logger": 7,
        "./queryString": 9,
        "./validators/event": 12,
        "./validators/identityHasher": 13,
        "./validators/integrations": 14
    }],
    9: [function(require, module, exports) {
        var CONSTANTS = require("../lib/constants"),
            QueryBuilder = function() {
                this.params = {}, this.params.ts = (new Date).valueOf()
            };
        QueryBuilder.prototype.addParams = function(params) {
            for (var key in params) this.isMetadata(key) ? this.params[CONSTANTS.METADATA_PREFIX + key] = params[key] : this.params[key] = params[key];
            return this
        }, QueryBuilder.prototype.isMetadata = function(param) {
            for (i = 0; i < CONSTANTS.EVENT_METADATA_LIST.length; i++)
                if (param === CONSTANTS.EVENT_METADATA_LIST[i]) return !0;
            return !1
        }, QueryBuilder.prototype.toQueryString = function() {
            var result = [];
            for (var key in this.params) {
                var val = this.params[key];
                result.push(encodeURIComponent(key) + "=" + encodeURIComponent(val))
            }
            return "?" + result.join("&")
        }, exports.QueryBuilder = QueryBuilder, exports.getQueryParameter = function(search, name) {
            if (!search) return "";
            for (var keyValues = search.slice(1).split("&"), i = 0; i < keyValues.length; i++) {
                var keyValue = keyValues[i].split("=");
                if (keyValue[0] === name) return keyValue[1]
            }
            return ""
        }
    }, {
        "../lib/constants": 4
    }],
    10: [function(require, module, exports) {
        var TRIM_REGEXP = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        exports.trim = function(str) {
            return str.replace(TRIM_REGEXP, "")
        }
    }, {}],
    11: [function(require, module, exports) {
        module.exports = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
                var r = 16 * Math.random() | 0;
                return ("x" === c ? r : 3 & r | 8).toString(16)
            })
        }
    }, {}],
    12: [function(require, module, exports) {
        var CONSTANTS = require("../constants"),
            hasher = require("./identityHasher");
        exports.validateMetadata = function(eventName, unvalidatedEvent) {
            var validatedEvent = {};
            if (isRevenueEventType(eventName)) {
                for (var i = 0; i < CONSTANTS.REVENUE_METADATA_LIST.length; i++) {
                    var field = CONSTANTS.REVENUE_METADATA_LIST[i];
                    field !== CONSTANTS.EVENT_METADATA.VALUE_DECIMAL && copyValidatedField(field, validatedEvent, unvalidatedEvent)
                }
                filterDependencies(validatedEvent)
            }
            return isCustomEventType(eventName) && copyValidatedField(CONSTANTS.EVENT_METADATA.CUSTOM_EVENT_NAME, validatedEvent, unvalidatedEvent), copyValidatedField(CONSTANTS.EVENT_METADATA.PRODUCTS, validatedEvent, unvalidatedEvent), normalizeMetadata(validatedEvent)
        };
        var arrayIncludes = function(item, array) {
            for (var i = 0; i < array.length; i++)
                if (item === array[i]) return !0;
            return !1
        };
        exports.arrayIncludes = arrayIncludes, exports.isValidEventType = function(eventName) {
            return arrayIncludes(eventName, CONSTANTS.CONVERSION_EVENTS_LIST)
        };
        var isRevenueEventType = function(eventName) {
            return arrayIncludes(eventName, CONSTANTS.REVENUE_EVENTS_LIST)
        };
        exports.isRevenueEventType = isRevenueEventType;
        var isCustomEventType = function(eventName) {
            return eventName === CONSTANTS.CONVERSION_EVENTS.CUSTOM
        };
        exports.isCustomEventType = isCustomEventType;
        var copyValidatedField = function(field, validatedEvent, unvalidatedEvent) {
                field in unvalidatedEvent && (getValidator(field)(unvalidatedEvent[field]) && (validatedEvent[field] = unvalidatedEvent[field]))
            },
            filterDependencies = function(validatedEvent) {
                CONSTANTS.EVENT_METADATA.CURRENCY in validatedEvent && !(CONSTANTS.EVENT_METADATA.VALUE in validatedEvent) && (validatedEvent[CONSTANTS.EVENT_METADATA.CURRENCY] = "")
            },
            normalizeMetadata = function(validatedEvent) {
                var hasCurrency = CONSTANTS.EVENT_METADATA.CURRENCY in validatedEvent,
                    hasValue = CONSTANTS.EVENT_METADATA.VALUE in validatedEvent;
                if (hasCurrency) {
                    var givenCurrency = validatedEvent[CONSTANTS.EVENT_METADATA.CURRENCY];
                    validatedEvent[CONSTANTS.EVENT_METADATA.CURRENCY] = givenCurrency.toUpperCase()
                }
                if (!hasCurrency && hasValue && (validatedEvent[CONSTANTS.EVENT_METADATA.CURRENCY] = CONSTANTS.DEFAULT_CURRENCY), hasValue) {
                    var givenValue = validatedEvent[CONSTANTS.EVENT_METADATA.VALUE],
                        valueFieldName = rdt.useDecimalCurrencyValues ? CONSTANTS.EVENT_METADATA.VALUE_DECIMAL : CONSTANTS.EVENT_METADATA.VALUE;
                    rdt.useDecimalCurrencyValues && delete validatedEvent[CONSTANTS.EVENT_METADATA.VALUE], validatedEvent[valueFieldName] = parseFloat(givenValue)
                }
                if (CONSTANTS.EVENT_METADATA.ITEM_COUNT in validatedEvent) {
                    var itemCount = validatedEvent[CONSTANTS.EVENT_METADATA.ITEM_COUNT];
                    validatedEvent[CONSTANTS.EVENT_METADATA.ITEM_COUNT] = parseFloat(itemCount)
                }
                CONSTANTS.EVENT_METADATA.TRANSACTION_ID in validatedEvent && (validatedEvent[CONSTANTS.EVENT_METADATA.TRANSACTION_ID] = hasher.hashIfSet(validatedEvent[CONSTANTS.EVENT_METADATA.TRANSACTION_ID], CONSTANTS.EVENT_METADATA.TRANSACTION_ID));
                var customEventField = CONSTANTS.EVENT_METADATA.CUSTOM_EVENT_NAME;
                validatedEvent[customEventField] = normalizeCustomEventName(validatedEvent[customEventField]);
                var productsField = CONSTANTS.EVENT_METADATA.PRODUCTS;
                validatedEvent[productsField] = normalizeProducts(validatedEvent[productsField]);
                for (var event = {}, i = 0; i < CONSTANTS.EVENT_METADATA_LIST.length; i++) {
                    var field = CONSTANTS.EVENT_METADATA_LIST[i];
                    event[field] = field in validatedEvent ? validatedEvent[field] : ""
                }
                return event
            },
            normalizeProducts = function(products) {
                if (!products) return "";
                "[object Array]" !== Object.prototype.toString.call(products) && (products = [products]);
                for (var normalizedProducts = [], i = 0; i < products.length; i++) {
                    var product = products[i],
                        normalizedProduct = {};
                    for (_field in product.id && (isNumber(product.id) ? normalizedProduct.id = product.id.toString() : isString(product.id) && (normalizedProduct.id = product.id)), product.name && isString(product.name) && (normalizedProduct.name = product.name), product.category && isString(product.category) && (normalizedProduct.category = product.category), normalizedProduct) {
                        normalizedProducts.push(normalizedProduct);
                        break
                    }
                }
                return 0 !== normalizedProducts.length ? JSON.stringify(normalizedProducts) : ""
            },
            normalizeCustomEventName = function(customEventName) {
                if (!customEventName) return "";
                for (var index = 0, lengthOut = 0, lengthIn = customEventName.length; index < lengthIn && lengthOut < CONSTANTS.CUSTOM_EVENT_NAME_LIMIT;) {
                    var value = customEventName.charCodeAt(index);
                    if (lengthOut += 1, index += 1, 55296 <= value && value <= 56319 && index < lengthIn) 56320 == (64512 & customEventName.charCodeAt(index)) && (index += 1)
                }
                return customEventName.slice(0, index)
            };
        exports.normalizeCustomEventName = normalizeCustomEventName;
        var getValidator = function(metadata) {
                return {
                    itemCount: isInteger,
                    value: rdt.useDecimalCurrencyValues ? isNumber : isInteger,
                    currency: isValidCurrency,
                    transactionId: isString,
                    customEventName: isString,
                    products: isObject
                }[metadata]
            },
            isValidCurrency = function(currency) {
                return "string" == typeof currency && 3 === currency.length
            },
            isNumber = function(value) {
                return "string" == typeof value && (value = parseFloat(value)), "number" == typeof value && !isNaN(value) && isFinite(value)
            },
            isString = function(s) {
                return "string" == typeof s
            },
            isInteger = function(value) {
                if (!isNumber(value)) return !1;
                var x = parseFloat(value);
                return (0 | x) === x
            },
            isObject = function(value) {
                return "object" == typeof value && null !== value
            };
        exports.isObject = isObject
    }, {
        "../constants": 4,
        "./identityHasher": 13
    }],
    13: [function(require, module, exports) {
        var sha256 = require("crypto-js/sha256"),
            hex = require("crypto-js/enc-hex"),
            replaceAll = function(s, char) {
                return s.split(char).join("")
            },
            isHex = function(s, len) {
                return s.length == len && !isNaN(Number("0x" + s))
            },
            isValidUuid = function(uuid) {
                return uuidDigits = replaceAll(uuid, "-"), isHex(uuidDigits, 32) && "00000000000000000000000000000000" !== uuidDigits
            },
            normalizeEmail = exports.normalizeEmail = function(email) {
                return localPartAndDomain = email.split("@"), 2 != localPartAndDomain.length ? "" : (localPart = localPartAndDomain[0], localPartAndDomain[0] = replaceAll(localPart, ".").split("+")[0], localPartAndDomain.join("@").toLowerCase())
            },
            normalizeNoOp = function(v) {
                return v
            },
            isValidAaid = exports.isValidAaid = function(aaid) {
                return isValidUuid(aaid)
            },
            validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
            isValidEmail = exports.isValidEmail = function(email) {
                return validEmailRegex.test(email)
            },
            isValidHash = exports.isValidHash = function(hash) {
                return isHex(hash, 64)
            },
            isValidIdfa = exports.isValidIdfa = function(idfa) {
                return isValidUuid(idfa)
            },
            isValidNoOp = exports.isValidNoOp = function(v) {
                return !0
            },
            valueTypes = ["aaid", "email", "externalId", "idfa", "transactionId"],
            normalizers = {
                aaid: function(aaid) {
                    return aaid.toLowerCase()
                },
                email: normalizeEmail,
                externalId: normalizeNoOp,
                idfa: function(idfa) {
                    return idfa.toUpperCase()
                },
                transactionId: normalizeNoOp
            },
            validators = {
                aaid: isValidAaid,
                email: isValidEmail,
                externalId: isValidNoOp,
                idfa: isValidIdfa,
                transactionId: isValidNoOp
            };
        exports.hashIfSet = function(value, valueType) {
            if (!value || "string" != typeof value || ! function(valueType) {
                    for (var i = 0; i < valueTypes.length; i++)
                        if (valueType === valueTypes[i]) return !0;
                    return !1
                }(valueType)) return "";
            if (isValidHash(value)) return value.toLowerCase();
            if (!(0, validators[valueType])(value)) return "email" === valueType ? "0000000000000000000000000000000000000000000000000000000000000000" : "";
            var normalizer = normalizers[valueType];
            return hex.stringify(sha256(normalizer(value)))
        }
    }, {
        "crypto-js/enc-hex": 2,
        "crypto-js/sha256": 3
    }],
    14: [function(require, module, exports) {
        var CONSTANTS = require("../constants");
        exports.getIntegrationProvider = function(integration) {
            switch (integration) {
                case CONSTANTS.INTEGRATION_PROVIDERS.GTM:
                    return CONSTANTS.INTEGRATION_PROVIDERS.GTM;
                default:
                    return CONSTANTS.INTEGRATION_PROVIDERS.REDDIT
            }
        }
    }, {
        "../constants": 4
    }]
}, {}, [8]);