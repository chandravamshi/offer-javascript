// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/js/web.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// multiple load prevention

alert('a');
if (typeof preisMitRabatt == "undefined") {
  //===========================================================================================
  var initAcc = function initAcc(elem) {
    var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    document.addEventListener('click', function (e) {
      if (!e.target.matches(elem + ' .a-btn')) return;else {
        if (!e.target.parentElement.classList.contains('active')) {
          if (option == true) {
            var elementList = document.querySelectorAll(elem + ' .a-container');
            Array.prototype.forEach.call(elementList, function (e) {
              e.classList.remove('active');
            });
          }
          e.target.parentElement.classList.add('active');
        } else {
          e.target.parentElement.classList.remove('active');
        }
      }
    });
  };
  var _preisMitRabatt = document.getElementById("preis-mit-rabatt");
  var preisMitRabatt2 = document.getElementById("preis-mit-rabatt2");
  var preisNormal = document.getElementById("angebotspreis");
  var preisNormal2 = document.getElementById("angebotspreis2");
  var preisSparen = document.getElementById("sparen");
  var preisSparen2 = document.getElementById("sparen2");
  var page1 = document.getElementById("page1");
  var page2 = document.getElementById("page2");
  var monthSelect = document.getElementById("month");
  var expiration = document.getElementById("expiration-date");
  var headerData = tryParseJSONObject(typeof headerDataRaw !== 'undefined' ? headerDataRaw : "");
  var expired = false;
  var popup1 = document.getElementById("popup1");
  var popup2 = document.getElementById("popup2");
  var popup3 = document.getElementById("popup3");
  var swiper_s = document.createElement("script");
  swiper_s.src = "https://unpkg.com/swiper@8.1.4/swiper-bundle.min.js";
  swiper_s.defer = true;
  document.head.appendChild(swiper_s);
  swiper_s.addEventListener("load", function () {
    init();
  });
  var stringTable = [["Empf??ngerbereich", "recipient area"], ["Geheimratsecken klein", "receding hairline"], ["Geheimratsecken gro??", "receding hairline"], ["Geheimratsecken", "receding hairline"], ["Haarlinie", "receding hairline"], ["Tonsur", "Crown area"], ["Vorderer Bereich undicht", "Front area leaking"], ["Gro??e Tonsur", "large tonsure"], ["Leichte Glatze", "slight baldness"], ["Gro??e Glatze", "bald"], ["Undichte Haare", "thin hair"], ["Hohe Stirn", "receding hairline"], ["Bart", "Beard"], ["Bartl??cken", "beard gaps"], ["Augenbrauen", "eyebrows"], ["Zimmertyp", "room type"], ["??bernachtung", "overnight stay"], ["Einzelzimmer", "Single room"], ["Doppelzimmer", "Double room"], ["Doppelzimmer f??r zwei Patienten", "Double room for two patients"], ["Suite", "Suite"], ["4 Sterne Hotel", "4 star hotel"], ["Elithair Klinik", "Elithair Clinic"]];
  var init = function init() {
    var _document$querySelect;
    var editables = document.getElementsByClassName("editable-field");
    var _iterator = _createForOfIteratorHelper(editables),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        editable = _step.value;
        var editable_str = editable.textContent;
        if (editable_str && editable_str != "") {
          for (var _i = 0, _stringTable = stringTable; _i < _stringTable.length; _i++) {
            str = _stringTable[_i];
            editable_str = editable_str.replace(str[0], str[1]);
          }
        }
        editable.textContent = editable_str;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    new Swiper('.klinik-slider', {
      slidesPerView: "1",
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    new Swiper('.causes-slider', {
      slidesPerView: "1",
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    new Swiper('.stories-slider', {
      slidesPerView: "1",
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    new Swiper('.pre-system-slider', {
      slidesPerView: "1",
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    });
    monthSelect.selectedIndex = 0;
    monthSelect.options[0].setAttribute("selected", "");
    monthSelect.addEventListener('change', function (e) {
      document.querySelector('.last-warn').classList.add('active');
      document.querySelector('.last-warn p span').innerHTML = e.target.value;
    });
    document.querySelector('#setAppointment').addEventListener('click', function (e) {
      var oldp = document.querySelector('.chose-step');
      var newp = document.querySelector('.result-box');
      oldp.style.opacity = 0;
      newp.style.opacity = 0;
      var offerId = new URLSearchParams(window.location.search).get("id");
      var preferredDate = monthSelect.value;
      fetch(((headerData === null || headerData === void 0 ? void 0 : headerData.req_url) || "https://prod-api.elithair.tech/api/offers/") + 'accept-offer/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          offerId: offerId,
          acceptedDate: "today",
          preferredDate: preferredDate
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setTimeout(function () {
          oldp.style.display = "none";
          newp.style.display = "block";
          setTimeout(function () {
            newp.style.opacity = "100%";
          }, 100);
        }, 300);
      });
    });

    /**
     * EXPIRATION
     */
    var chunk1 = expiration.textContent.trim().split(" ");
    if (chunk1.length > 1) {
      var chunk2 = chunk1[chunk1.length - 1].split(".");
      var offerExpDate = new Date(parseInt(chunk2[2]), parseInt(chunk2[1]) - 1, parseInt(chunk2[0]), 23, 59, 59);
      var now = new Date();
      if (now && now > offerExpDate) {
        expired = true;
      }
    }
    if (expired) {
      document.querySelector('.offer-message').classList.add("active");
    }
    document.querySelector('.offer-message button').addEventListener('click', function (e) {
      document.querySelector('.offer-message').classList.remove('active');
    });

    /**
     * ALREADY ACCEPTED
     */
    if (headerData.isAccepted) {
      var _document$getElementB;
      (_document$getElementB = document.getElementById("acceptedMessage")) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.classList.add("active");
    }
    (_document$querySelect = document.querySelector('#acceptedMessage button')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.addEventListener('click', function (e) {
      document.getElementById("acceptedMessage").classList.remove('active');
    });

    /**
     * SECOND SESSION (Zweite Sitzung)
     */
    var zweite = document.getElementById("zwei_sitzungen");
    if (zweite && zweite.textContent == "true") {
      document.querySelector(".price-box").classList.add("zwei");
      var zweiterText = document.getElementById("zweiter-text");
      if (zweiterText) {
        zweiterText.textContent = zweiterText.getAttribute("data-yes-text");
      }
    }

    /**
     * OFFER WITHOUT ACCEPT CTA (Wie geht es weiter?)
     */
    var change_cta = document.getElementById("change_cta");
    var change_cta_content = document.getElementById("change_cta_content");
    if (change_cta && change_cta.textContent != "" && change_cta.textContent != "---") {
      document.querySelectorAll('.primary-cta').forEach(function (item) {
        item.textContent = change_cta_content.getAttribute("data-cta-text");
        item.addEventListener("click", function (e) {
          window.location = change_cta_content.getAttribute("data-cta-link");
        });
      });
    } else {
      /**
       * ACCEPT OFFER BUTTONS
       */
      document.querySelectorAll('.primary-cta').forEach(function (item) {
        item.addEventListener('click', function (e) {
          if (expired) {
            e.preventDefault();
            document.querySelector('.offer-message').classList.add('active');
          } else if (headerData.isAccepted) {
            e.preventDefault();
            document.getElementById("acceptedMessage").classList.add("active");
          } else {
            page1.style.opacity = 0;
            page2.style.opacity = 0;
            setTimeout(function () {
              page1.style.display = "none";
              page2.style.display = "block";
              document.body.classList.remove("landing-body");
              setTimeout(function () {
                page2.style.opacity = "100%";
              }, 100);
            }, 300);
          }
        });
      });
    }

    /**
     * PRICES
     */
    if (_preisMitRabatt.textContent == "---") {
      document.querySelector(".new").style.display = "none";
      document.querySelector(".old").classList.add("active");
    } else {
      preisSparen.textContent = parseInt(preisNormal.textContent) - parseInt(_preisMitRabatt.textContent);
    }
    if (preisMitRabatt2.textContent == "---") {
      document.querySelector(".new2").style.display = "none";
      document.querySelector(".old2").classList.add("active");
    } else {
      preisSparen2.textContent = parseInt(preisNormal2.textContent) - parseInt(preisMitRabatt2.textContent);
    }

    /**
     * ACCORDION
     */
    initAcc('.accordion');

    /**
     * POPUP
     */
    document.getElementById("neo-info").addEventListener('click', function (e) {
      popup1.classList.add("active");
    });
    document.getElementById("neo-close").addEventListener('click', function (e) {
      popup1.classList.remove("active");
    });
    document.getElementById("pre-test-info").addEventListener('click', function (e) {
      popup2.classList.add("active");
    });
    document.getElementById("pre-test-close").addEventListener('click', function (e) {
      popup2.classList.remove("active");
    });
    document.getElementById("sleep-info").addEventListener('click', function (e) {
      popup3.classList.add("active");
    });
    document.getElementById("sleep-close").addEventListener('click', function (e) {
      popup3.classList.remove("active");
    });
  };
}
function tryParseJSONObject(jsonString) {
  try {
    var o = JSON.parse(jsonString);
    if (o && _typeof(o) === "object") return o;
  } catch (e) {}
  return false;
}
;
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59201" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/js/web.js"], null)
//# sourceMappingURL=/web.15800e0c.js.map