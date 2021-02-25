function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/components.component */
    "./src/app/components/components.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _pages_entrerios_entrerios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/entrerios/entrerios.component */
    "./src/app/pages/entrerios/entrerios.component.ts");
    /* harmony import */


    var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/news/news.component */
    "./src/app/pages/news/news.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_delsur_delsur_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/delsur/delsur.component */
    "./src/app/pages/delsur/delsur.component.ts");
    /* harmony import */


    var _pages_warnes_warnes_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/warnes/warnes.component */
    "./src/app/pages/warnes/warnes.component.ts");
    /* harmony import */


    var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/history/history.component */
    "./src/app/pages/history/history.component.ts");
    /* harmony import */


    var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/gallery/gallery.component */
    "./src/app/pages/gallery/gallery.component.ts");
    /* harmony import */


    var _pages_anualreport_anualreport_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/anualreport/anualreport.component */
    "./src/app/pages/anualreport/anualreport.component.ts");
    /* harmony import */


    var _pages_estructura_estructura_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/estructura/estructura.component */
    "./src/app/pages/estructura/estructura.component.ts");
    /* harmony import */


    var _pages_nopage_nopage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/nopage/nopage.component */
    "./src/app/pages/nopage/nopage.component.ts");
    /* harmony import */


    var _pages_tarifa_tarifa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/tarifa/tarifa.component */
    "./src/app/pages/tarifa/tarifa.component.ts");
    /* harmony import */


    var _pages_gestionsocial_gestionsocial_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/gestionsocial/gestionsocial.component */
    "./src/app/pages/gestionsocial/gestionsocial.component.ts");
    /* harmony import */


    var _pages_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/ficha/ficha.component */
    "./src/app/pages/ficha/ficha.component.ts");
    /* harmony import */


    var _pages_rrhh_rrhh_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/rrhh/rrhh.component */
    "./src/app/pages/rrhh/rrhh.component.ts");
    /* harmony import */


    var _pages_pestrategico_pestrategico_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/pestrategico/pestrategico.component */
    "./src/app/pages/pestrategico/pestrategico.component.ts");
    /* harmony import */


    var _pages_ccpteri_ccpteri_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/ccpteri/ccpteri.component */
    "./src/app/pages/ccpteri/ccpteri.component.ts");
    /* harmony import */


    var _pages_ccptsur_ccptsur_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/ccptsur/ccptsur.component */
    "./src/app/pages/ccptsur/ccptsur.component.ts");
    /* harmony import */


    var _pages_ccptwar_ccptwar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/ccptwar/ccptwar.component */
    "./src/app/pages/ccptwar/ccptwar.component.ts");
    /* harmony import */


    var _pages_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/ciclos/ciclos.component */
    "./src/app/pages/ciclos/ciclos.component.ts");
    /* harmony import */


    var _pages_poa_poa_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/poa/poa.component */
    "./src/app/pages/poa/poa.component.ts");
    /* harmony import */


    var _pages_presupuesto_presupuesto_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/presupuesto/presupuesto.component */
    "./src/app/pages/presupuesto/presupuesto.component.ts");
    /* harmony import */


    var _pages_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/proyecciones/proyecciones.component */
    "./src/app/pages/proyecciones/proyecciones.component.ts");
    /* harmony import */


    var _pages_denuncia_denuncia_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/denuncia/denuncia.component */
    "./src/app/pages/denuncia/denuncia.component.ts");
    /* harmony import */


    var _pages_solicitud_informacion_solicitud_informacion_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/solicitud-informacion/solicitud-informacion.component */
    "./src/app/pages/solicitud-informacion/solicitud-informacion.component.ts");
    /* harmony import */


    var _pages_convocatorias_convocatorias_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/convocatorias/convocatorias.component */
    "./src/app/pages/convocatorias/convocatorias.component.ts");
    /* harmony import */


    var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/new/new.component */
    "./src/app/pages/new/new.component.ts"); // import { VideotubeComponent } from './pages/videotube/videotube.component';


    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, // { path: '**', redirectTo: 'error404', pathMatch: 'full' },
    {
      path: 'home',
      component: _components_components_component__WEBPACK_IMPORTED_MODULE_2__["ComponentsComponent"]
    }, {
      path: 'about',
      component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'entrerios',
      component: _pages_entrerios_entrerios_component__WEBPACK_IMPORTED_MODULE_4__["EntreriosComponent"]
    }, {
      path: 'delsur',
      component: _pages_delsur_delsur_component__WEBPACK_IMPORTED_MODULE_7__["DelsurComponent"]
    }, {
      path: 'warnes',
      component: _pages_warnes_warnes_component__WEBPACK_IMPORTED_MODULE_8__["WarnesComponent"]
    }, {
      path: 'ccpteri',
      component: _pages_ccpteri_ccpteri_component__WEBPACK_IMPORTED_MODULE_19__["CcpteriComponent"]
    }, {
      path: 'ccptsur',
      component: _pages_ccptsur_ccptsur_component__WEBPACK_IMPORTED_MODULE_20__["CcptsurComponent"]
    }, {
      path: 'ccptwar',
      component: _pages_ccptwar_ccptwar_component__WEBPACK_IMPORTED_MODULE_21__["CcptwarComponent"]
    }, {
      path: 'ciclos',
      component: _pages_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_22__["CiclosComponent"]
    }, {
      path: 'news',
      component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_5__["NewsComponent"]
    }, {
      path: 'new/:id',
      component: _pages_new_new_component__WEBPACK_IMPORTED_MODULE_29__["NewComponent"]
    }, {
      path: 'contact',
      component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }, // { path: 'canal',  component: VideotubeComponent },
    {
      path: 'history',
      component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_9__["HistoryComponent"]
    }, {
      path: 'gallery',
      component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"]
    }, {
      path: 'reports',
      component: _pages_anualreport_anualreport_component__WEBPACK_IMPORTED_MODULE_11__["AnualreportComponent"]
    }, {
      path: 'estructura',
      component: _pages_estructura_estructura_component__WEBPACK_IMPORTED_MODULE_12__["EstructuraComponent"]
    }, {
      path: 'tarifa',
      component: _pages_tarifa_tarifa_component__WEBPACK_IMPORTED_MODULE_14__["TarifaComponent"]
    }, {
      path: 'ficha',
      component: _pages_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_16__["FichaComponent"]
    }, {
      path: 'rrhh',
      component: _pages_rrhh_rrhh_component__WEBPACK_IMPORTED_MODULE_17__["RrhhComponent"]
    }, {
      path: 'planestrategico',
      component: _pages_pestrategico_pestrategico_component__WEBPACK_IMPORTED_MODULE_18__["PestrategicoComponent"]
    }, {
      path: 'gestionsocial',
      component: _pages_gestionsocial_gestionsocial_component__WEBPACK_IMPORTED_MODULE_15__["GestionsocialComponent"]
    }, {
      path: 'poa',
      component: _pages_poa_poa_component__WEBPACK_IMPORTED_MODULE_23__["PoaComponent"]
    }, {
      path: 'presupuesto',
      component: _pages_presupuesto_presupuesto_component__WEBPACK_IMPORTED_MODULE_24__["PresupuestoComponent"]
    }, {
      path: 'proyecciones',
      component: _pages_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_25__["ProyeccionesComponent"]
    }, {
      path: 'denuncia',
      component: _pages_denuncia_denuncia_component__WEBPACK_IMPORTED_MODULE_26__["DenunciaComponent"]
    }, {
      path: 'solicitud',
      component: _pages_solicitud_informacion_solicitud_informacion_component__WEBPACK_IMPORTED_MODULE_27__["SolicitudInformacionComponent"]
    }, {
      path: 'convocatorias',
      component: _pages_convocatorias_convocatorias_component__WEBPACK_IMPORTED_MODULE_28__["ConvocatoriasComponent"]
    }, {
      path: 'error404',
      component: _pages_nopage_nopage_component__WEBPACK_IMPORTED_MODULE_13__["NopageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        initialNavigation: 'enabled',
        useHash: false,
        scrollPositionRestoration: 'enabled'
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            initialNavigation: 'enabled',
            useHash: false,
            scrollPositionRestoration: 'enabled'
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'sitioEnde';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeFooter",
        value: function removeFooter() {// var titlee = this.location.prepareExternalUrl(this.location.path());
          // titlee = titlee.slice( 1 );
          // if(titlee === 'signup' || titlee === 'nucleoicons'){
          //     return false;
          // }
          // else {
          //     return true;
          // }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [["id", "loader-wrapper"], ["id", "loader"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/footer/footer.component */
    "./src/app/shared/footer/footer.component.ts");
    /* harmony import */


    var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/navbar/navbar.component */
    "./src/app/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/components.component */
    "./src/app/components/components.component.ts");
    /* harmony import */


    var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/about/about.component */
    "./src/app/pages/about/about.component.ts");
    /* harmony import */


    var _components_carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/carrusel/carrusel.component */
    "./src/app/components/carrusel/carrusel.component.ts");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/partners/partners.component */
    "./src/app/components/partners/partners.component.ts");
    /* harmony import */


    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/slider/slider.component */
    "./src/app/components/slider/slider.component.ts");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/skills/skills.component */
    "./src/app/components/skills/skills.component.ts");
    /* harmony import */


    var _components_corp_corp_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/corp/corp.component */
    "./src/app/components/corp/corp.component.ts");
    /* harmony import */


    var _components_odometer_odometer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/odometer/odometer.component */
    "./src/app/components/odometer/odometer.component.ts");
    /* harmony import */


    var _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/testimonial/testimonial.component */
    "./src/app/components/testimonial/testimonial.component.ts");
    /* harmony import */


    var _components_team_team_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/team/team.component */
    "./src/app/components/team/team.component.ts");
    /* harmony import */


    var _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/proyects/proyects.component */
    "./src/app/components/proyects/proyects.component.ts");
    /* harmony import */


    var _pages_entrerios_entrerios_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/entrerios/entrerios.component */
    "./src/app/pages/entrerios/entrerios.component.ts");
    /* harmony import */


    var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/news/news.component */
    "./src/app/pages/news/news.component.ts");
    /* harmony import */


    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/contact/contact.component */
    "./src/app/pages/contact/contact.component.ts");
    /* harmony import */


    var _pages_delsur_delsur_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/delsur/delsur.component */
    "./src/app/pages/delsur/delsur.component.ts");
    /* harmony import */


    var _pages_warnes_warnes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/warnes/warnes.component */
    "./src/app/pages/warnes/warnes.component.ts");
    /* harmony import */


    var _pages_videotube_videotube_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/videotube/videotube.component */
    "./src/app/pages/videotube/videotube.component.ts");
    /* harmony import */


    var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/history/history.component */
    "./src/app/pages/history/history.component.ts");
    /* harmony import */


    var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/gallery/gallery.component */
    "./src/app/pages/gallery/gallery.component.ts");
    /* harmony import */


    var _pages_anualreport_anualreport_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/anualreport/anualreport.component */
    "./src/app/pages/anualreport/anualreport.component.ts");
    /* harmony import */


    var _pages_estructura_estructura_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/estructura/estructura.component */
    "./src/app/pages/estructura/estructura.component.ts");
    /* harmony import */


    var _pages_nopage_nopage_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/nopage/nopage.component */
    "./src/app/pages/nopage/nopage.component.ts");
    /* harmony import */


    var _pages_tarifa_tarifa_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/tarifa/tarifa.component */
    "./src/app/pages/tarifa/tarifa.component.ts");
    /* harmony import */


    var _pages_gestionsocial_gestionsocial_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/gestionsocial/gestionsocial.component */
    "./src/app/pages/gestionsocial/gestionsocial.component.ts");
    /* harmony import */


    var _pages_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/ficha/ficha.component */
    "./src/app/pages/ficha/ficha.component.ts");
    /* harmony import */


    var _pages_rrhh_rrhh_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/rrhh/rrhh.component */
    "./src/app/pages/rrhh/rrhh.component.ts");
    /* harmony import */


    var _pages_pestrategico_pestrategico_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./pages/pestrategico/pestrategico.component */
    "./src/app/pages/pestrategico/pestrategico.component.ts");
    /* harmony import */


    var _pages_ccpteri_ccpteri_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./pages/ccpteri/ccpteri.component */
    "./src/app/pages/ccpteri/ccpteri.component.ts");
    /* harmony import */


    var _pages_ccptsur_ccptsur_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./pages/ccptsur/ccptsur.component */
    "./src/app/pages/ccptsur/ccptsur.component.ts");
    /* harmony import */


    var _pages_ccptwar_ccptwar_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./pages/ccptwar/ccptwar.component */
    "./src/app/pages/ccptwar/ccptwar.component.ts");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _pages_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/ciclos/ciclos.component */
    "./src/app/pages/ciclos/ciclos.component.ts");
    /* harmony import */


    var _pages_poa_poa_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/poa/poa.component */
    "./src/app/pages/poa/poa.component.ts");
    /* harmony import */


    var _pages_presupuesto_presupuesto_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/presupuesto/presupuesto.component */
    "./src/app/pages/presupuesto/presupuesto.component.ts");
    /* harmony import */


    var _pages_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/proyecciones/proyecciones.component */
    "./src/app/pages/proyecciones/proyecciones.component.ts");
    /* harmony import */


    var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! chartjs-plugin-zoom */
    "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.js");
    /* harmony import */


    var chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_46___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_zoom__WEBPACK_IMPORTED_MODULE_46__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _pages_denuncia_denuncia_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pages/denuncia/denuncia.component */
    "./src/app/pages/denuncia/denuncia.component.ts");
    /* harmony import */


    var _pages_solicitud_informacion_solicitud_informacion_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./pages/solicitud-informacion/solicitud-informacion.component */
    "./src/app/pages/solicitud-informacion/solicitud-informacion.component.ts");
    /* harmony import */


    var _pages_adquisiciones_adquisiciones_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./pages/adquisiciones/adquisiciones.component */
    "./src/app/pages/adquisiciones/adquisiciones.component.ts");
    /* harmony import */


    var _pages_convocatorias_convocatorias_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./pages/convocatorias/convocatorias.component */
    "./src/app/pages/convocatorias/convocatorias.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _pages_new_new_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./pages/new/new.component */
    "./src/app/pages/new/new.component.ts");

    var DEFAULT_SWIPER_CONFIG = {
      direction: 'horizontal',
      slidesPerView: 'auto'
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SWIPER_CONFIG"],
        useValue: DEFAULT_SWIPER_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_53__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_47__["ChartsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_52__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _components_components_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _components_carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_11__["CarruselComponent"], _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_13__["PartnersComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["SliderComponent"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_23__["NewsComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"], _components_corp_corp_component__WEBPACK_IMPORTED_MODULE_17__["CorpComponent"], _components_odometer_odometer_component__WEBPACK_IMPORTED_MODULE_18__["OdometerComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_19__["TestimonialComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_20__["TeamComponent"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_21__["ProyectsComponent"], _pages_entrerios_entrerios_component__WEBPACK_IMPORTED_MODULE_22__["EntreriosComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"], _pages_delsur_delsur_component__WEBPACK_IMPORTED_MODULE_25__["DelsurComponent"], _pages_warnes_warnes_component__WEBPACK_IMPORTED_MODULE_26__["WarnesComponent"], _pages_videotube_videotube_component__WEBPACK_IMPORTED_MODULE_27__["VideotubeComponent"], _pages_history_history_component__WEBPACK_IMPORTED_MODULE_28__["HistoryComponent"], _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_29__["GalleryComponent"], _pages_anualreport_anualreport_component__WEBPACK_IMPORTED_MODULE_30__["AnualreportComponent"], _pages_estructura_estructura_component__WEBPACK_IMPORTED_MODULE_31__["EstructuraComponent"], _pages_nopage_nopage_component__WEBPACK_IMPORTED_MODULE_32__["NopageComponent"], _pages_tarifa_tarifa_component__WEBPACK_IMPORTED_MODULE_33__["TarifaComponent"], _pages_gestionsocial_gestionsocial_component__WEBPACK_IMPORTED_MODULE_34__["GestionsocialComponent"], _pages_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_35__["FichaComponent"], _pages_rrhh_rrhh_component__WEBPACK_IMPORTED_MODULE_36__["RrhhComponent"], _pages_pestrategico_pestrategico_component__WEBPACK_IMPORTED_MODULE_37__["PestrategicoComponent"], _pages_ccpteri_ccpteri_component__WEBPACK_IMPORTED_MODULE_38__["CcpteriComponent"], _pages_ccptsur_ccptsur_component__WEBPACK_IMPORTED_MODULE_39__["CcptsurComponent"], _pages_ccptwar_ccptwar_component__WEBPACK_IMPORTED_MODULE_40__["CcptwarComponent"], _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_41__["SubmenuComponent"], _pages_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_42__["CiclosComponent"], _pages_poa_poa_component__WEBPACK_IMPORTED_MODULE_43__["PoaComponent"], _pages_presupuesto_presupuesto_component__WEBPACK_IMPORTED_MODULE_44__["PresupuestoComponent"], _pages_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_45__["ProyeccionesComponent"], _pages_denuncia_denuncia_component__WEBPACK_IMPORTED_MODULE_48__["DenunciaComponent"], _pages_solicitud_informacion_solicitud_informacion_component__WEBPACK_IMPORTED_MODULE_49__["SolicitudInformacionComponent"], _pages_adquisiciones_adquisiciones_component__WEBPACK_IMPORTED_MODULE_50__["AdquisicionesComponent"], _pages_convocatorias_convocatorias_component__WEBPACK_IMPORTED_MODULE_51__["ConvocatoriasComponent"], _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_54__["ModalDialogComponent"], _pages_new_new_component__WEBPACK_IMPORTED_MODULE_55__["NewComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_53__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_47__["ChartsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_52__["PipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"], _components_components_component__WEBPACK_IMPORTED_MODULE_9__["ComponentsComponent"], _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"], _components_carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_11__["CarruselComponent"], _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_13__["PartnersComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_14__["SliderComponent"], _pages_news_news_component__WEBPACK_IMPORTED_MODULE_23__["NewsComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_16__["SkillsComponent"], _components_corp_corp_component__WEBPACK_IMPORTED_MODULE_17__["CorpComponent"], _components_odometer_odometer_component__WEBPACK_IMPORTED_MODULE_18__["OdometerComponent"], _components_testimonial_testimonial_component__WEBPACK_IMPORTED_MODULE_19__["TestimonialComponent"], _components_team_team_component__WEBPACK_IMPORTED_MODULE_20__["TeamComponent"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_21__["ProyectsComponent"], _pages_entrerios_entrerios_component__WEBPACK_IMPORTED_MODULE_22__["EntreriosComponent"], _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_24__["ContactComponent"], _pages_delsur_delsur_component__WEBPACK_IMPORTED_MODULE_25__["DelsurComponent"], _pages_warnes_warnes_component__WEBPACK_IMPORTED_MODULE_26__["WarnesComponent"], _pages_videotube_videotube_component__WEBPACK_IMPORTED_MODULE_27__["VideotubeComponent"], _pages_history_history_component__WEBPACK_IMPORTED_MODULE_28__["HistoryComponent"], _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_29__["GalleryComponent"], _pages_anualreport_anualreport_component__WEBPACK_IMPORTED_MODULE_30__["AnualreportComponent"], _pages_estructura_estructura_component__WEBPACK_IMPORTED_MODULE_31__["EstructuraComponent"], _pages_nopage_nopage_component__WEBPACK_IMPORTED_MODULE_32__["NopageComponent"], _pages_tarifa_tarifa_component__WEBPACK_IMPORTED_MODULE_33__["TarifaComponent"], _pages_gestionsocial_gestionsocial_component__WEBPACK_IMPORTED_MODULE_34__["GestionsocialComponent"], _pages_ficha_ficha_component__WEBPACK_IMPORTED_MODULE_35__["FichaComponent"], _pages_rrhh_rrhh_component__WEBPACK_IMPORTED_MODULE_36__["RrhhComponent"], _pages_pestrategico_pestrategico_component__WEBPACK_IMPORTED_MODULE_37__["PestrategicoComponent"], _pages_ccpteri_ccpteri_component__WEBPACK_IMPORTED_MODULE_38__["CcpteriComponent"], _pages_ccptsur_ccptsur_component__WEBPACK_IMPORTED_MODULE_39__["CcptsurComponent"], _pages_ccptwar_ccptwar_component__WEBPACK_IMPORTED_MODULE_40__["CcptwarComponent"], _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_41__["SubmenuComponent"], _pages_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_42__["CiclosComponent"], _pages_poa_poa_component__WEBPACK_IMPORTED_MODULE_43__["PoaComponent"], _pages_presupuesto_presupuesto_component__WEBPACK_IMPORTED_MODULE_44__["PresupuestoComponent"], _pages_proyecciones_proyecciones_component__WEBPACK_IMPORTED_MODULE_45__["ProyeccionesComponent"], _pages_denuncia_denuncia_component__WEBPACK_IMPORTED_MODULE_48__["DenunciaComponent"], _pages_solicitud_informacion_solicitud_informacion_component__WEBPACK_IMPORTED_MODULE_49__["SolicitudInformacionComponent"], _pages_adquisiciones_adquisiciones_component__WEBPACK_IMPORTED_MODULE_50__["AdquisicionesComponent"], _pages_convocatorias_convocatorias_component__WEBPACK_IMPORTED_MODULE_51__["ConvocatoriasComponent"], _components_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_54__["ModalDialogComponent"], _pages_new_new_component__WEBPACK_IMPORTED_MODULE_55__["NewComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_53__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SwiperModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_47__["ChartsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_52__["PipesModule"]],
          providers: [{
            provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_15__["SWIPER_CONFIG"],
            useValue: DEFAULT_SWIPER_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/carrusel/carrusel.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/carrusel/carrusel.component.ts ***!
    \***********************************************************/

  /*! exports provided: CarruselComponent */

  /***/
  function srcAppComponentsCarruselCarruselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarruselComponent", function () {
      return CarruselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var src_app_services_publications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/publications.service */
    "./src/app/services/publications.service.ts");
    /* harmony import */


    var src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/format-date.pipe */
    "./src/app/pipes/format-date.pipe.ts");
    /* harmony import */


    var _pipes_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/truncate-text.pipe */
    "./src/app/pipes/truncate-text.pipe.ts");
    /* harmony import */


    var _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../pipes/image.pipe */
    "./src/app/pipes/image.pipe.ts");

    function CarruselComponent_div_7_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r40.lnk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, slide_r40.image, "publication"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/new", a1];
    };

    function CarruselComponent_div_7_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, slide_r40._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, slide_r40.image, "publication"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarruselComponent_div_7_a_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leer m\xE1s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r40.lnk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function CarruselComponent_div_7_a_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leer m\xE1s");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, slide_r40._id));
      }
    }

    function CarruselComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarruselComponent_div_7_a_4_Template, 3, 5, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarruselComponent_div_7_a_5_Template, 3, 7, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "formatDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "formatDate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CarruselComponent_div_7_a_26_Template, 2, 1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CarruselComponent_div_7_a_27_Template, 2, 3, "a", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r40.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !slide_r40.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, slide_r40.date, "day"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 12, slide_r40.date, "month"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 15, slide_r40.title, 75));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r40.category.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 18, slide_r40.description, 180));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", slide_r40.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !slide_r40.lnk);
      }
    }

    var _c1 = function _c1() {
      return ["owl-theme", "row", "sliding"];
    };

    var CarruselComponent =
    /*#__PURE__*/
    function () {
      function CarruselComponent(publicationsService, categoriesService, router) {
        _classCallCheck(this, CarruselComponent);

        this.publicationsService = publicationsService;
        this.categoriesService = categoriesService;
        this.router = router;
        this.loading = true;
        this.publications = [];
        this.total = 0;
        this.to = 0;
        this.ruta = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices; // SlideOptions = { items: 1, dots: true, nav: true };
        // CarouselOptions = { items: 3, dots: true, nav: true };

        this.SlideOptions = {
          autoplay: false,
          smartSpeed: 100,
          margin: 0,
          loop: true,
          autoplayHoverPause: true,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            768: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
        };
      }

      _createClass(CarruselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPublications();
        }
      }, {
        key: "getPublications",
        value: function getPublications() {
          var _this = this;

          this.loading = true;
          this.publicationsService.getPublications(this.to).subscribe(function (result) {
            _this.publications = result; // this.publications.push(...result);

            _this.loading = false;
          });
        }
      }]);

      return CarruselComponent;
    }();

    CarruselComponent.ɵfac = function CarruselComponent_Factory(t) {
      return new (t || CarruselComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    CarruselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CarruselComponent,
      selectors: [["app-carrusel"]],
      decls: 8,
      vars: 5,
      consts: [[1, "container"], [1, "section-title"], [1, "news-carousel", "slider", "hover-effects", "image-hover", 3, "options", "items", "carouselClasses"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slide"], [1, "blog-preview"], [1, "thumbnail-box"], [1, "bp-thumbnail"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "post-date"], [1, "bp-caption"], [1, "social-interaction"], [1, "si-author"], ["target", "_blank", 3, "href"], ["alt", "", 3, "src"], [3, "routerLink"]],
      template: function CarruselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Noticias destacadas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Noticias de nuestra empresa as\xED como de sus proyectos y logros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "owl-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarruselComponent_div_7_Template, 28, 21, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.SlideOptions)("items", ctx.publications)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.publications);
        }
      },
      directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_pipes_format_date_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatDatePipe"], _pipes_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncateTextPipe"], _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagePipe"]],
      styles: ["img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 260px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9jb21wb25lbnRzL2NhcnJ1c2VsL2NhcnJ1c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NhcnJ1c2VsL2NhcnJ1c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jYXJydXNlbC9jYXJydXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNjBweCFpbXBvcnRhbnQ7XG59IiwiaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI2MHB4ICFpbXBvcnRhbnQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CarruselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-carrusel',
          templateUrl: './carrusel.component.html',
          styleUrls: ['./carrusel.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]
        }, {
          type: src_app_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/components.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/components/components.component.ts ***!
    \****************************************************/

  /*! exports provided: ComponentsComponent */

  /***/
  function srcAppComponentsComponentsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function () {
      return ComponentsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modal-dialog/modal-dialog.component */
    "./src/app/components/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _partners_partners_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./partners/partners.component */
    "./src/app/components/partners/partners.component.ts");
    /* harmony import */


    var _carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./carrusel/carrusel.component */
    "./src/app/components/carrusel/carrusel.component.ts");

    var _c0 = function _c0() {
      return ["/about"];
    };

    var _c1 = function _c1() {
      return ["/entrerios"];
    };

    var _c2 = function _c2() {
      return ["/delsur"];
    };

    var _c3 = function _c3() {
      return ["/warnes"];
    };

    var ComponentsComponent =
    /*#__PURE__*/
    function () {
      function ComponentsComponent(modalService) {
        _classCallCheck(this, ComponentsComponent);

        this.modalService = modalService;
      }

      _createClass(ComponentsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.open();
        }
      }, {
        key: "open",
        value: function open() {
          var modalRef = this.modalService.open(_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ModalDialogComponent"], {
            size: 'lg',
            scrollable: true
          });
          modalRef.componentInstance.modal_title = 'Audiencia rendición pública de cuentas Final 2020';
          modalRef.componentInstance.modal_content = '';
        }
      }]);

      return ComponentsComponent;
    }();

    ComponentsComponent.ɵfac = function ComponentsComponent_Factory(t) {
      return new (t || ComponentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]));
    };

    ComponentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ComponentsComponent,
      selectors: [["app-components"]],
      decls: 148,
      vars: 12,
      consts: [[1, "home-slider"], ["id", "carouselExampleIndicators", "data-ride", "carousel", 1, "carousel", "slide"], ["role", "listbox", 1, "carousel-inner"], [1, "carousel-item", "active", 2, "background-image", "url('assets/img/slider/slider2.jpg')"], [1, "container"], [1, "slider-caption"], [1, "display-4", "animated", "fadeInRight"], [1, "lead", "animated", "fadeInRight"], [1, "btn-more"], ["role", "button", 1, "btn", "btn-slider", 3, "routerLink"], [1, "carousel-item", 2, "background-image", "url('assets/img/slider/slider4.jpg')"], [1, "carousel-item", 2, "background-image", "url('assets/img/slider/slider3.jpg')"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["href", "#carouselExampleIndicators", "role", "button", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], [1, "container-fluid", "construction-wide-banner"], [1, "wide-banner-content"], [1, "container", "construction-services"], [1, "row", "hover-effects", "image-hover"], [1, "col-lg-4"], [1, "thumbnail-box-alt", 3, "routerLink"], [1, "tb-image"], ["src", "assets/img/imagenes/img-2.jpg", "alt", ""], [1, "tb-caption"], [1, "inner-caption"], [1, "ic-top"], [1, "ic-icon"], ["src", "assets/img/master/warning_bulb.svg", "alt", ""], [1, "col-lg-4", "center-box"], ["src", "assets/img/imagenes/img-4.jpg", "alt", ""], ["src", "assets/img/master/warning.svg", "alt", ""], ["src", "assets/img/imagenes/img-3.jpg", "alt", ""], ["src", "assets/img/master/battery.svg", "alt", ""], [1, "container-fluid", "wide-banner"], ["href", "assets/doc/MemoriaEndeAndina_2019.pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], [1, "container", "popup-video-section"], [1, "organic-pulsing-video"], ["src", "https://cdn.flipsnack.com/widget/v2/widget.html?hash=f13arselc", "width", "100%", "height", "480", "seamless", "seamless", "scrolling", "no", "frameBorder", "0", "allowFullScreen", ""], [1, "row"], [1, "col-lg-6"], [1, "about-info"], [1, "col-lg-6", "space-break"], [1, "about-img"], ["src", "assets/img/imagenes/corporacion.png", "alt", ""], [1, "section-divider"], [1, "container-fluid"], [1, "col-lg-4", "parallax-side", "construction-parallax"], [1, "col-lg-8", "content-side"], [1, "inner-content", 2, "width", "100%"], [1, "panel-title"], [1, "col-lg-6", "sp-space-break-alt"], ["data-href", "https://www.facebook.com/EndeAndina/", "data-tabs", "timeline", "data-width", "500", "data-height", "500", "data-small-header", "false", "data-adapt-container-width", "true", "data-hide-cover", "false", "data-show-facepile", "false", 1, "fb-page"], ["cite", "https://www.facebook.com/EndeAndina/", 1, "fb-xfbml-parse-ignore"], ["href", "https://www.facebook.com/EndeAndina/"], ["data-lang", "es", "data-width", "500", "data-height", "500", "data-theme", "light", "href", "https://twitter.com/EndeAndina?ref_src=twsrc%5Etfw", 1, "twitter-timeline"]],
      template: function ComponentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generaci\xF3n,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "interconexi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " comercializaci\xF3n, transmisi\xF3n, asociada a la generaci\xF3n, importaci\xF3n y exportaci\xF3n de electricidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Acerca de nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Plantas de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "generaci\xF3n de Energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Las actividades relacionadas a la generaci\xF3n termoel\xE9ctrica de energ\xEDa son: el dise\xF1o, construcci\xF3n, operaci\xF3n y el mantenimiento.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nuestras Plantas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Proyectos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ciclos Combinados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "El proyecto consiste en la ampliaci\xF3n de las Plantas Termoel\xE9ctricas, en base a bloques de ciclos combinados, manteniendo las instalaciones existentes en ciclo abierto..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ciclos combinados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nuestras Plantas de generaci\xF3n de energ\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "ENDE ANDINA S.A.M. cuenta con tres plantas termoel\xE9ctricas en operaci\xF3n ubicadas en tres departamentos estrat\xE9gicos de Bolivia: Cochabamba (Entre R\xEDos), Tarija (Yaguacua) y Santa Cruz (Warnes)..");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "figure", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Entre Rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Carretera nueva a Santa Cruz 1,7 km al este del centro de Entre R\xEDos. Cochabamba - Bolivia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "figure", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Carretera 9, Villamontes \u2013 Yacuiba 2,7 km al norte del centro de Yaguacua. Tarija - Bolivia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "figure", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Ubicada en inmediaciones del Parque Industrial Latinoamericano (PILAT). Santa Cruz - Bolivia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Transparencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Memoria Anual 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "iframe", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Sobre nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Somos parte de ENDE Corporaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " es una empresa filial de ENDE Corporaci\xF3n, cuya actividad principal es la generaci\xF3n de energ\xEDa el\xE9ctrica a trav\xE9s de plantas termoel\xE9ctricas, con presencia en los departamentos de Cochabamba, Tarija y Santa Cruz. La energ\xEDa generada es inyectada al Sistema Interconectado Nacional (SIN), en niveles de alta tensi\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Las actividades relacionadas a la generaci\xF3n termoel\xE9ctrica de energ\xEDa son: el dise\xF1o, construcci\xF3n, operaci\xF3n y el mantenimiento de las plantas de generaci\xF3n. Todo en cumplimiento de la Ley de Electricidad, sus reglamentos y resoluciones de la Autoridad de Fiscalizaci\xF3n de Electricidad y Tecnolog\xEDa Nuclear (AETN), as\xED como la normativa del Comit\xE9 Nacional de Despacho de Carga (C.N.D.C.).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "figure", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "hr", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "app-partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Comunicaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Redes Sociales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "blockquote", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "ENDE Andina SAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " Tweets por EndeAndina ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "app-carrusel");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _partners_partners_component__WEBPACK_IMPORTED_MODULE_4__["PartnersComponent"], _carrusel_carrusel_component__WEBPACK_IMPORTED_MODULE_5__["CarruselComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcG9uZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-components',
          templateUrl: './components.component.html',
          styleUrls: ['./components.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/corp/corp.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/corp/corp.component.ts ***!
    \***************************************************/

  /*! exports provided: CorpComponent */

  /***/
  function srcAppComponentsCorpCorpComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorpComponent", function () {
      return CorpComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CorpComponent =
    /*#__PURE__*/
    function () {
      function CorpComponent() {
        _classCallCheck(this, CorpComponent);
      }

      _createClass(CorpComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CorpComponent;
    }();

    CorpComponent.ɵfac = function CorpComponent_Factory(t) {
      return new (t || CorpComponent)();
    };

    CorpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CorpComponent,
      selectors: [["app-corp"]],
      decls: 42,
      vars: 0,
      consts: [[1, "about-us-section", "section-padding"], [1, "container"], [1, "row"], [1, "col", "col-md-6"], [1, "section-title"], [1, "details"], [1, "clearfix"], [1, "ti-check"], [1, "btns"], ["href", "#", 1, "theme-btn"], ["href", "#", 1, "theme-btn-s3"], [1, "right-col"], [1, "img-holder"], ["src", "assets/images/about.png", "alt", ""], [1, "video-holder"], ["href", "https://www.youtube.com/embed/QKj1YklCuDI?autoplay=1", "data-type", "iframe", "tabindex", "0", 1, "hero-video-btn", "video-btn"], [1, "fi", "flaticon-play-button"]],
      template: function CorpComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sobre nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Somos parte de ENDE Corporaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ENDE ANDINA S.A.M, es una empresa filial de ENDE Corporaci\xF3n, cuya actividad principal es la generaci\xF3n de energ\xEDa el\xE9ctrica a trav\xE9s de plantas termoel\xE9ctricas con presencia en los departamentos de Cochabamba, Tarija y Santa Cruz. La energ\xEDa generada es inyectada al Sistema Interconectado Nacional (SIN), en niveles de alta tensi\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Las actividades relacionadas a la generaci\xF3n termoel\xE9ctrica de energ\xEDa son: el dise\xF1o, construcci\xF3n, operaci\xF3n y el mantenimiento de las plantas de generaci\xF3n. Todo en cumplimiento de la Ley de Electricidad, sus reglamentos, resoluciones de la Autoridad de Fiscalizaci\xF3n y Control Social de Electricidad, as\xED como la normativa del Comit\xE9 Nacional de Despacho de Carga (C.N.D.C.).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " ENDE Transmisi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " ELFEC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ENDE Tecnolog\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CNDC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Servicios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contactarnos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ver video de presentaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29ycC9jb3JwLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CorpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-corp',
          templateUrl: './corp.component.html',
          styleUrls: ['./corp.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/modal-dialog/modal-dialog.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/modal-dialog/modal-dialog.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ModalDialogComponent */

  /***/
  function srcAppComponentsModalDialogModalDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function () {
      return ModalDialogComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var ModalDialogComponent = function ModalDialogComponent(activeModal) {
      _classCallCheck(this, ModalDialogComponent);

      this.activeModal = activeModal;
    };

    ModalDialogComponent.ɵfac = function ModalDialogComponent_Factory(t) {
      return new (t || ModalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]));
    };

    ModalDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModalDialogComponent,
      selectors: [["app-modal-dialog"]],
      inputs: {
        modal_title: "modal_title",
        modal_content: "modal_content"
      },
      decls: 11,
      vars: 2,
      consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "post-preview-img"], ["src", "../assets/doc/audiencia.jpeg", "alt", ""]],
      template: function ModalDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalDialogComponent_Template_button_click_3_listener() {
            return ctx.activeModal.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "figure", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modal_title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.modal_content, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modal-dialog',
          templateUrl: './modal-dialog.component.html',
          styleUrls: ['./modal-dialog.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]
        }];
      }, {
        modal_title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        modal_content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/odometer/odometer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/odometer/odometer.component.ts ***!
    \***********************************************************/

  /*! exports provided: OdometerComponent */

  /***/
  function srcAppComponentsOdometerOdometerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OdometerComponent", function () {
      return OdometerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var OdometerComponent =
    /*#__PURE__*/
    function () {
      function OdometerComponent() {
        _classCallCheck(this, OdometerComponent);
      }

      _createClass(OdometerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OdometerComponent;
    }();

    OdometerComponent.ɵfac = function OdometerComponent_Factory(t) {
      return new (t || OdometerComponent)();
    };

    OdometerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OdometerComponent,
      selectors: [["app-odometer"]],
      decls: 39,
      vars: 0,
      consts: [[1, "fun-fact-section"], [1, "container"], [1, "row"], [1, "col", "col-xs-12"], [1, "fun-fact-grids", "clearfix"], [1, "grid"], [1, "info"], [1, "fi", "flaticon-worker"], ["data-count", "1200", 1, "odometer"], [1, "fi", "flaticon-engineer"], ["data-count", "1370", 1, "odometer"], [1, "fi", "flaticon-trophy"], ["data-count", "80", 1, "odometer"], [1, "fi", "flaticon-like-1"], ["data-count", "100", 1, "odometer"]],
      template: function OdometerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Empleados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Potencia efectiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Plan estrat\xE9gico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2RvbWV0ZXIvb2RvbWV0ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OdometerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-odometer',
          templateUrl: './odometer.component.html',
          styleUrls: ['./odometer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/partners/partners.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/partners/partners.component.ts ***!
    \***********************************************************/

  /*! exports provided: PartnersComponent */

  /***/
  function srcAppComponentsPartnersPartnersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartnersComponent", function () {
      return PartnersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PartnersComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r51 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", slide_r51.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r51.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var PartnersComponent =
    /*#__PURE__*/
    function () {
      function PartnersComponent() {
        _classCallCheck(this, PartnersComponent);

        this.slides = [{
          number: '01.',
          image: '../../../assets/img/partners/img-1.png',
          url: 'http://www.ende.bo/'
        }, {
          number: '02.',
          image: '../../../assets/img/partners/elfec.png',
          url: 'http://www.elfec.com/'
        }, {
          number: '03.',
          image: '../../../assets/img/partners/endeLaPaz.png',
          url: 'https://www.delapaz.bo/'
        }, {
          number: '04.',
          image: '../../../assets/img/partners/endeCorani.png',
          url: 'http://www.endecorani.bo/'
        }, {
          number: '05.',
          image: '../../../assets/img/partners/cndc.png',
          url: 'https://www.cndc.bo/'
        }, {
          number: '06.',
          image: '../../../assets/img/partners/endeServicios.png',
          url: 'https://www.endesyc.bo/'
        }, {
          number: '07.',
          image: '../../../assets/img/partners/atn.png',
          url: 'https://www.aetn.gob.bo/web/'
        }]; // SlideOptions = { items: 1, dots: true, nav: true };
        // CarouselOptions = { items: 3, dots: true, nav: true };

        this.SlideOptions = {
          autoplay: true,
          smartSpeed: 300,
          margin: 30,
          loop: true,
          autoplayHoverPause: true,
          dots: false,
          responsive: {
            0: {
              items: 2
            },
            550: {
              items: 3
            },
            992: {
              items: 4
            },
            1200: {
              items: 5
            }
          }
        };
      }

      _createClass(PartnersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PartnersComponent;
    }();

    PartnersComponent.ɵfac = function PartnersComponent_Factory(t) {
      return new (t || PartnersComponent)();
    };

    PartnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartnersComponent,
      selectors: [["app-partners"]],
      decls: 4,
      vars: 2,
      consts: [[1, "container-fluid", "clients-wide-section"], [1, "container"], [1, "clients-carousel", "slider", 3, "options"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slide"], ["target", "_blank", 3, "href"], [1, "clients-logo"], ["alt", "", 3, "src"]],
      template: function PartnersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "owl-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PartnersComponent_div_3_Template, 4, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.SlideOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFydG5lcnMvcGFydG5lcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-partners',
          templateUrl: './partners.component.html',
          styleUrls: ['./partners.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/proyects/proyects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/proyects/proyects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProyectsComponent */

  /***/
  function srcAppComponentsProyectsProyectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyectsComponent", function () {
      return ProyectsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProyectsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProyectsComponent_div_7_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var slide_r57 = ctx.$implicit;

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.open(slide_r57.numbers - 1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r57.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r57.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r57.caption);
      }
    }

    var ProyectsComponent =
    /*#__PURE__*/
    function () {
      function ProyectsComponent(lightbox) {
        _classCallCheck(this, ProyectsComponent);

        this.lightbox = lightbox; // slides  = [
        //   { 
        //     numbers: '01.',
        //     image : '../../../assets/img/images/gallery-layer.jpg',
        //     title: 'Ciclos combinados 1',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '02.',
        //     image : '../../../assets/img/images/gallery-layer2.jpg',
        //     title: 'Ciclos combinados 2',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '03.',
        //     image : '../../../assets/img/images/gallery-layer3.jpg',
        //     title: 'Ciclos combinados 3',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '04.',
        //     image : '../../../assets/img/images/gallery-layer4.jpg',
        //     title: 'Ciclos combinados 4',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '05.',
        //     image : '../../../assets/img/images/gallery-layer5.jpg',
        //     title: 'Ciclos combinados 5',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '06.',
        //     image : '../../../assets/img/images/gallery-layer6.jpg',
        //     title: 'Ciclos combinados 6',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '07.',
        //     image : '../../../assets/img/images/gallery-layer7.jpg',
        //     title: 'Ciclos combinados 7',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   },
        //   {
        //     numbers: '08.',
        //     image : '../../../assets/img/images/gallery-layer8.jpg',
        //     title: 'Ciclos combinados 8',
        //     detail: 'There are many variations of passages',
        //     url: '#'
        //   }
        // ];

        this.ProyectOptions = {
          slidesToShow: 4,
          slidesToScroll: 1,
          smartSpeed: 300,
          autoplay: true,
          autoplaySpeed: 1500,
          arrows: false,
          loop: true,
          autoplayHoverPause: true,
          dots: false,
          pauseOnHover: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            768: {
              items: 3
            },
            1200: {
              items: 4
            }
          }
        };
      }

      _createClass(ProyectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(index) {
          console.log('index', index); // open lightbox

          this.lightbox.open(this.slides, index);
        }
      }, {
        key: "close",
        value: function close() {
          // close lightbox programmatically
          this.lightbox.close();
        }
      }]);

      return ProyectsComponent;
    }();

    ProyectsComponent.ɵfac = function ProyectsComponent_Factory(t) {
      return new (t || ProyectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]));
    };

    ProyectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProyectsComponent,
      selectors: [["app-proyects"]],
      inputs: {
        slides: "slides"
      },
      decls: 8,
      vars: 2,
      consts: [[1, "container-fluid", "fw-gallery-thumbnails", 2, "margin", "3rem auto 0rem auto"], [1, "fw-gallery-title"], [1, "gallery-carousel", 3, "options"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slide"], [1, "gallery-layer"], [1, "gl-thumbnail"], ["alt", "", 3, "src"], [1, "gl-caption"], [1, "gl-overlay", 3, "click"]],
      template: function ProyectsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Galeria de im\xE1genes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Colecci\xF3n de fotograf\xEDas que exponen nuestros diferentes ambientes de trabajo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "owl-carousel", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProyectsComponent_div_7_Template, 10, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.ProyectOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJveWVjdHMvcHJveWVjdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-proyects',
          templateUrl: './proyects.component.html',
          styleUrls: ['./proyects.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
        }];
      }, {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/skills/skills.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/skills/skills.component.ts ***!
    \*******************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppComponentsSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 38,
      vars: 0,
      consts: [[1, "why-choose-section", "section-padding", 2, "clear", "both"], [1, "container"], [1, "row"], [1, "col", "col-lg-6", "col-lg-offset-3", "col-md-8", "col-md-offset-2"], [1, "section-title-s3"], [1, "col", "col-xs-12"], [1, "why-choose-grids", "clearfix"], [1, "grid"], [1, "fi", "flaticon-network-1"], [1, "fi", "flaticon-circular-label-with-certified-stamp"], [1, "fi", "flaticon-chip"], [1, "fi", "flaticon-24-hours"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Acerca de nostros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nuestros Valores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nos esforzamos por incorporar la mejor tecnolog\xEDa y personal, mantener est\xE1ndares de calidad, como en innovar t\xE9cnicas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Responsabilidad y compromiso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cumplir nuestras labores con excelencia y en los plazos establecidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Innovaci\xF3n y calidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nos esforzamos por incorporar la mejor tecnolog\xEDa y personal, mantener est\xE1ndares de calidad, como en innovar t\xE9cnicas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Trabajo en equipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Generar mecanismos de comunicaci\xF3n y coordinaci\xF3n que otorguen un clima laboral que facilite el logro de resultados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Responsabilidad social empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Contribuir de forma activa y voluntaria al mejoramiento social, econ\xF3mico y ambiental");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/slider/slider.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/slider/slider.component.ts ***!
    \*******************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppComponentsSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-swiper-wrapper */
    "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SliderComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Servicios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Proyectos");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r53 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background: url('", slide_r53.image, "'); background-size: cover;\n                background-position: center;");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r53.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r53.detail);
      }
    }

    var SliderComponent =
    /*#__PURE__*/
    function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);

        this.slides = [{
          image: '../../../assets/images/slider/slide-5.jpg',
          title: 'Generación, interconexión.',
          detail: 'comercialización, transmisión, asociada a la generación, importación y exportación de electricidad.',
          url: '#'
        }, {
          image: '../../../assets/images/slider/slide-9.jpg',
          title: 'Plantas de generación de Energía',
          detail: 'Las actividades relacionadas a la generación termoeléctrica de energía son: el diseño, construcción, operación y el mantenimiento',
          url: '#'
        }];
        this.config = {
          loop: true,
          slidesPerView: 1,
          // spaceBetween: 30,
          speed: 1000,
          parallax: true,
          autoplay: {
            delay: 6500,
            disableOnInteraction: false
          },
          watchSlidesProgress: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        };
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onIndexChange",
        value: function onIndexChange(event) {}
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 33,
      vars: 2,
      consts: [[1, "hero-slider", "hero-style-2"], [1, "swiper-container", 2, "background-color", "slategrey", 3, "swiper"], [1, "swiper-wrapper"], ["class", "swiper-slide", 4, "ngFor", "ngForOf"], [1, "swiper-pagination"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "features-section"], [1, "container"], [1, "row"], [1, "col", "col-xs-12"], [1, "feature-grids", "clearfix"], [1, "grid"], [1, "icon"], [1, "fi", "flaticon-solar-energy"], [1, "count"], [1, "fi", "flaticon-worker"], [1, "fi", "flaticon-expansion"], [1, "swiper-slide"], [1, "slide-inner", "slide-bg-image"], ["data-swiper-parallax", "300", 1, "slide-title"], ["data-swiper-parallax", "400", 1, "slide-text"], [1, "clearfix"], ["data-swiper-parallax", "500", 1, "slide-btns"], ["href", "#", 1, "theme-btn"], ["href", "#", 1, "theme-btn-s2"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SliderComponent_div_3_Template, 15, 5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "01.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Generaci\xF3n termoel\xE9ctrica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "02.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mantenimiento continuo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "03.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Transmisi\xF3n de energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slides);
        }
      },
      directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_1__["SwiperDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n.hero-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh !important;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  z-index: 0;\n}\n@media (max-width: 991px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n@media (max-width: 767px) {\n  .hero-slider[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #fff;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.hero-slider[_ngcontent-%COMP%]   .slide-inner[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: left;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  background: transparent;\n  width: 55px;\n  height: 55px;\n  line-height: 53px;\n  margin-top: -30px;\n  text-align: center;\n  border: 2px solid #d4d3d3;\n  border-radius: 55px;\n}\n@media (max-width: 767px) {\n  .hero-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%] {\n  left: 25px;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-button-prev[_ngcontent-%COMP%]:before {\n  font-family: \"themify\";\n  content: \"\uE629\";\n  font-size: 15px;\n  color: #d4d3d3;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%] {\n  right: 25px;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-button-next[_ngcontent-%COMP%]:before {\n  font-family: \"themify\";\n  content: \"\uE628\";\n  font-size: 15px;\n  color: #d4d3d3;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-pagination-bullet[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  text-align: center;\n  line-height: 12px;\n  font-size: 12px;\n  color: #000;\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.2);\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-pagination-bullet-active[_ngcontent-%COMP%] {\n  color: #fff;\n  background: #95BD20;\n}\n.hero-slider[_ngcontent-%COMP%]   .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-pagination-custom[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-pagination-fraction[_ngcontent-%COMP%] {\n  bottom: 30px;\n}\n@media screen and (min-width: 992px) {\n  .hero-slider[_ngcontent-%COMP%]   .swiper-container-horizontal[_ngcontent-%COMP%]    > .swiper-pagination-bullets[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-pagination-custom[_ngcontent-%COMP%], .hero-slider[_ngcontent-%COMP%]   .swiper-pagination-fraction[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.hero-style-2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%] {\n  height: 100%;\n}\n@media (max-width: 991px) {\n  .hero-style-2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n@media (max-width: 767px) {\n  .hero-style-2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%] {\n    height: 80%;\n  }\n}\n@media screen and (min-width: 992px) {\n  .hero-style-2[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-top: -110px;\n  }\n}\n.hero-style-2[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%] {\n  max-width: 740px;\n}\n.hero-style-2[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%] {\n  max-width: 645px;\n}\n.hero-style-2[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 72px;\n  font-size: 4.5rem;\n  font-weight: bold;\n  color: #fff;\n  margin: 0 0 0.4em;\n  text-transform: capitalize;\n}\n@media (max-width: 1199px) {\n  .hero-style-2[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 58px;\n    font-size: 3.625rem;\n  }\n}\n@media (max-width: 991px) {\n  .hero-style-2[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    font-size: 3.125rem;\n  }\n}\n@media (max-width: 767px) {\n  .hero-style-2[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 35px;\n    font-size: 2.1875rem;\n  }\n}\n.hero-style-2[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-size: 1.125rem;\n  font-weight: 500;\n  color: #fff;\n  margin: 0 0 2em;\n}\n@media (max-width: 767px) {\n  .hero-style-2[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .hero-style-3[_ngcontent-%COMP%]   .slide-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-size: 1rem;\n    font-weight: normal;\n  }\n}\n.hero-style-2[_ngcontent-%COMP%]   .slide-btns[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child, .hero-style-3[_ngcontent-%COMP%]   .slide-btns[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:first-child {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9wcm95ZWN0b3MvRU5ERV9BTkRJTkEvU2l0ZV9FQS9zcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7OytEQUFBO0FBR0E7RUFDSSxXQUFBO0VBQ0Esd0JBQUE7RUFHQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QURDSjtBQ0VFO0VBQ0U7SUFDRSxhQUFBO0VEQ0o7QUFDRjtBQ0VFO0VBQ0U7SUFDRSxhQUFBO0VEQUo7QUFDRjtBQ0dFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0FEREo7QUNNRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBREhKO0FDTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUdBLGFBQUE7RUFHQSx1QkFBQTtFQUdBLG1CQUFBO0VBQ0EsZ0JBQUE7QURISjtBQ01FOztFQUVFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FESEo7QUNNRTtFQUNFOztJQUVFLGFBQUE7RURISjtBQUNGO0FDTUU7RUFDRSxVQUFBO0FESko7QUNPRTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FESko7QUNPRTtFQUNFLFdBQUE7QURKSjtBQ09FO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QURKSjtBQ09FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QURKSjtBQ09FO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0FESko7QUNPRTs7O0VBR0UsWUFBQTtBREpKO0FDT0U7RUFDRTs7O0lBR0UsYUFBQTtFREpKO0FBQ0Y7QUNRRTs7K0RBQUE7QUFHQTtFQUNFLFlBQUE7QUROSjtBQ1NFO0VBQ0U7SUFDRSxZQUFBO0VETko7QUFDRjtBQ1NFO0VBQ0U7SUFDRSxXQUFBO0VEUEo7QUFDRjtBQ1VFO0VBQ0U7SUFDRSxrQkFBQTtFRFJKO0FBQ0Y7QUNXRTtFQUNFLGdCQUFBO0FEVEo7QUNZRTtFQUNFLGdCQUFBO0FEVEo7QUNZRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QURUSjtBQ1lFO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RURUSjtBQUNGO0FDWUU7RUFDRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFRFZKO0FBQ0Y7QUNhRTtFQUNFO0lBQ0UsZUFBQTtJQUNBLG9CQUFBO0VEWEo7QUFDRjtBQ2NFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBRFpKO0FDZUU7RUFDRTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RURaSjtBQUNGO0FDZUU7RUFDRSxrQkFBQTtBRGJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuIzAuNFx0aGVybyBzbGlkZXJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5oZXJvLXNsaWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmhlcm8tc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlcm8tc2xpZGVyIHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICB9XG59XG4uaGVyby1zbGlkZXIgLnN3aXBlci1zbGlkZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaGVyby1zbGlkZXIgLnN3aXBlci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmhlcm8tc2xpZGVyIC5zbGlkZS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldixcbi5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiA1NXB4O1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA1M3B4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZDRkM2QzO1xuICBib3JkZXItcmFkaXVzOiA1NXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhlcm8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYsXG4uaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmhlcm8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICBsZWZ0OiAyNXB4O1xufVxuXG4uaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldjpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJ0aGVtaWZ5XCI7XG4gIGNvbnRlbnQ6IFwi7pipXCI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNkNGQzZDM7XG59XG5cbi5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0IHtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcInRoZW1pZnlcIjtcbiAgY29udGVudDogXCLumKhcIjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2Q0ZDNkMztcbn1cblxuLmhlcm8tc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwO1xuICBvcGFjaXR5OiAxO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjOTVCRDIwO1xufVxuXG4uaGVyby1zbGlkZXIgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLFxuLmhlcm8tc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uaGVyby1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uIHtcbiAgYm90dG9tOiAzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVyby1zbGlkZXIgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLFxuLmhlcm8tc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4uaGVyby1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uLWZyYWN0aW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgI2hlcm8tc3R5bGUtMlxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlcm8tc3R5bGUtMiwgLmhlcm8tc3R5bGUtMyB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZXJvLXN0eWxlLTIsIC5oZXJvLXN0eWxlLTMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5oZXJvLXN0eWxlLTIsIC5oZXJvLXN0eWxlLTMge1xuICAgIGhlaWdodDogODAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaGVyby1zdHlsZS0yIC5jb250YWluZXIsIC5oZXJvLXN0eWxlLTMgLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogLTExMHB4O1xuICB9XG59XG4uaGVyby1zdHlsZS0yIC5zbGlkZS10aXRsZSwgLmhlcm8tc3R5bGUtMyAuc2xpZGUtdGl0bGUge1xuICBtYXgtd2lkdGg6IDc0MHB4O1xufVxuXG4uaGVyby1zdHlsZS0yIC5zbGlkZS10ZXh0LCAuaGVyby1zdHlsZS0zIC5zbGlkZS10ZXh0IHtcbiAgbWF4LXdpZHRoOiA2NDVweDtcbn1cblxuLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGl0bGUgaDIsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRpdGxlIGgyIHtcbiAgZm9udC1zaXplOiA3MnB4O1xuICBmb250LXNpemU6IDQuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMCAwLjRlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGl0bGUgaDIsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDU4cHg7XG4gICAgZm9udC1zaXplOiAzLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5oZXJvLXN0eWxlLTIgLnNsaWRlLXRpdGxlIGgyLCAuaGVyby1zdHlsZS0zIC5zbGlkZS10aXRsZSBoMiB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMy4xMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVyby1zdHlsZS0yIC5zbGlkZS10aXRsZSBoMiwgLmhlcm8tc3R5bGUtMyAuc2xpZGUtdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXNpemU6IDIuMTg3NXJlbTtcbiAgfVxufVxuLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGV4dCBwLCAuaGVyby1zdHlsZS0zIC5zbGlkZS10ZXh0IHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDAgMCAyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuaGVyby1zdHlsZS0yIC5zbGlkZS10ZXh0IHAsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRleHQgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG4uaGVyby1zdHlsZS0yIC5zbGlkZS1idG5zID4gYTpmaXJzdC1jaGlsZCwgLmhlcm8tc3R5bGUtMyAuc2xpZGUtYnRucyA+IGE6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59IiwiXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4jMC40XHRoZXJvIHNsaWRlclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuLmhlcm8tc2xpZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDA7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5oZXJvLXNsaWRlciB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmhlcm8tc2xpZGVyIHtcbiAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgfVxuICB9XG4gIFxuICAuaGVyby1zbGlkZXIgLnN3aXBlci1zbGlkZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG5cbiAgXG4gIC5oZXJvLXNsaWRlciAuc3dpcGVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuICBcbiAgLmhlcm8tc2xpZGVyIC5zbGlkZS1pbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG4gIFxuICAuaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldixcbiAgLmhlcm8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiA1NXB4O1xuICAgIGhlaWdodDogNTVweDtcbiAgICBsaW5lLWhlaWdodDogNTNweDtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q0ZDNkMztcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tcHJldixcbiAgICAuaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8tc2xpZGVyIC5zd2lwZXItYnV0dG9uLXByZXYge1xuICAgIGxlZnQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1wcmV2OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwidGhlbWlmeVwiO1xuICAgIGNvbnRlbnQ6IFwiXFxlNjI5XCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjZDRkM2QzO1xuICB9XG4gIFxuICAuaGVyby1zbGlkZXIgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gICAgcmlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5oZXJvLXNsaWRlciAuc3dpcGVyLWJ1dHRvbi1uZXh0OmJlZm9yZSB7XG4gICAgZm9udC1mYW1pbHk6IFwidGhlbWlmeVwiO1xuICAgIGNvbnRlbnQ6IFwiXFxlNjI4XCI7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjZDRkM2QzO1xuICB9XG4gIFxuICAuaGVyby1zbGlkZXIgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMTJweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgXG4gIC5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZDogIzk1QkQyMDtcbiAgfVxuICBcbiAgLmhlcm8tc2xpZGVyIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyxcbiAgLmhlcm8tc2xpZGVyIC5zd2lwZXItcGFnaW5hdGlvbi1jdXN0b20sXG4gIC5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24ge1xuICAgIGJvdHRvbTogMzBweDtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAuaGVyby1zbGlkZXIgLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLFxuICAgIC5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuICAgIC5oZXJvLXNsaWRlciAuc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAjaGVyby1zdHlsZS0yXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmhlcm8tc3R5bGUtMiwgLmhlcm8tc3R5bGUtMyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAuaGVyby1zdHlsZS0yLCAuaGVyby1zdHlsZS0zIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5oZXJvLXN0eWxlLTIsIC5oZXJvLXN0eWxlLTMge1xuICAgICAgaGVpZ2h0OiA4MCU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAgIC5oZXJvLXN0eWxlLTIgLmNvbnRhaW5lciwgLmhlcm8tc3R5bGUtMyAuY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi10b3A6IC0xMTBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5oZXJvLXN0eWxlLTIgLnNsaWRlLXRpdGxlLCAuaGVyby1zdHlsZS0zIC5zbGlkZS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgfVxuICBcbiAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGV4dCwgLmhlcm8tc3R5bGUtMyAuc2xpZGUtdGV4dCB7XG4gICAgbWF4LXdpZHRoOiA2NDVweDtcbiAgfVxuICBcbiAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGl0bGUgaDIsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDcycHg7XG4gICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwIDAgMC40ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAuaGVyby1zdHlsZS0yIC5zbGlkZS10aXRsZSBoMiwgLmhlcm8tc3R5bGUtMyAuc2xpZGUtdGl0bGUgaDIge1xuICAgICAgZm9udC1zaXplOiA1OHB4O1xuICAgICAgZm9udC1zaXplOiAzLjYyNXJlbTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAgIC5oZXJvLXN0eWxlLTIgLnNsaWRlLXRpdGxlIGgyLCAuaGVyby1zdHlsZS0zIC5zbGlkZS10aXRsZSBoMiB7XG4gICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDMuMTI1cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGl0bGUgaDIsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRpdGxlIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGZvbnQtc2l6ZTogMi4xODc1cmVtO1xuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtdGV4dCBwLCAuaGVyby1zdHlsZS0zIC5zbGlkZS10ZXh0IHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luOiAwIDAgMmVtO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAuaGVyby1zdHlsZS0yIC5zbGlkZS10ZXh0IHAsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLXRleHQgcCB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIH1cbiAgfVxuICBcbiAgLmhlcm8tc3R5bGUtMiAuc2xpZGUtYnRucyA+IGE6Zmlyc3QtY2hpbGQsIC5oZXJvLXN0eWxlLTMgLnNsaWRlLWJ0bnMgPiBhOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gICJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/submenu/submenu.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/submenu/submenu.component.ts ***!
    \*********************************************************/

  /*! exports provided: SubmenuComponent */

  /***/
  function srcAppComponentsSubmenuSubmenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubmenuComponent", function () {
      return SubmenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        show: a0
      };
    };

    var _c1 = function _c1() {
      return ["/entrerios"];
    };

    var _c2 = function _c2() {
      return ["/delsur"];
    };

    var _c3 = function _c3() {
      return ["/warnes"];
    };

    var _c4 = function _c4() {
      return ["/ccpteri"];
    };

    var _c5 = function _c5() {
      return ["/ccptsur"];
    };

    var _c6 = function _c6() {
      return ["/ccptwar"];
    };

    var SubmenuComponent =
    /*#__PURE__*/
    function () {
      function SubmenuComponent() {
        _classCallCheck(this, SubmenuComponent);
      }

      _createClass(SubmenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.item = this.subMenu;
        }
      }]);

      return SubmenuComponent;
    }();

    SubmenuComponent.ɵfac = function SubmenuComponent_Factory(t) {
      return new (t || SubmenuComponent)();
    };

    SubmenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SubmenuComponent,
      selectors: [["app-submenu"]],
      inputs: {
        subMenu: "subMenu"
      },
      decls: 46,
      vars: 23,
      consts: [[1, "sidebar-list"], [1, "list-group"], ["id", "accordionTermo"], ["data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], [1, "badge"], [1, "fas", "fa-chevron-right"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionTermo", 1, "collapse", "contenido", 3, "ngClass"], ["routerLinkActive", "active", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "routerLink"], ["data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionTermo", 1, "collapse", "contenido", 3, "ngClass"], ["data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "list-group-item", "d-flex", "justify-content-between", "align-items-center"], ["id", "collapseThree", "aria-labelledby", "headingTwo", "data-parent", "#accordionTermo", 1, "collapse", "contenido", 3, "ngClass"]],
      template: function SubmenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Ejecutados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " PTERI (4 STG -700) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " PTSUR (4 SGT \u2013 800 v50) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " PTWAR (5 SGT \u2013 800 v50) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " En Ejecuci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Ciclos Combinados PTERI (Bloque 30, 40 y 50) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Ciclos Combinados PTSUR (Cierre Bloque 10 y 20 y Construcci\xF3n Bloque 30 y 40) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Termoel\xE9ctrica WarnesCiclos Combinados PTWAR (Cierre Bloque 10 y 20 y Construcci\xF3n Bloque 30 y 40) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " En Estudio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Proyectos en estudio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.item == 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.item == 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.item == 3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VibWVudS9zdWJtZW51LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubmenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-submenu',
          templateUrl: './submenu.component.html',
          styleUrls: ['./submenu.component.scss']
        }]
      }], function () {
        return [];
      }, {
        subMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/team/team.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/team/team.component.ts ***!
    \***************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TeamComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "figure", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", slide_r55.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r55.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](slide_r55.position);
      }
    }

    var TeamComponent =
    /*#__PURE__*/
    function () {
      function TeamComponent() {
        _classCallCheck(this, TeamComponent);

        this.team = [{
          id: '01.',
          image: '../../../assets/img/imagenes/team1.jpg',
          name: 'Ing. Gamal Serhan Jaldín',
          position: 'Gerente General',
          url: '#'
        }, {
          id: '02.',
          image: '../../../assets/img/imagenes/team2.jpg',
          name: 'Ing. Victor Luis Fernandez Fernandez',
          position: 'Gerente de planificación y proyectos',
          url: '#'
        }, {
          id: '03.',
          image: '../../../assets/img/imagenes/team3.jpg',
          name: 'Ing. Gonzalo Jaime De la Zerda Morales',
          position: 'Gerente comercial',
          url: '#'
        }, {
          id: '04.',
          image: '../../../assets/img/imagenes/team4.jpg',
          name: 'Ing. Renzo Mauricio Durán Bayón',
          position: 'Gerente de operaciones',
          url: '#'
        }, {
          id: '05.',
          image: '../../../assets/img/imagenes/headshot.jpg',
          name: 'Lic. Walter Vildozo Zamorano',
          position: 'Gerente Administrativo Financiero',
          url: '#'
        }]; // SlideOptions = { items: 1, dots: true, nav: true };
        // CarouselOptions = { items: 3, dots: true, nav: true };

        this.TeamOptions = {
          autoplay: false,
          smartSpeed: 100,
          margin: 0,
          loop: true,
          autoplayHoverPause: true,
          dots: false,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 2
            },
            768: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
        };
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)();
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 2,
      vars: 2,
      consts: [[1, "team-carousel-alt", "slider", "hover-effects", "image-hover", 3, "options"], ["class", "slide", 4, "ngFor", "ngForOf"], [1, "slide"], [1, "team-portrait"], [1, "tp-headshot"], ["alt", "", 3, "src"], [1, "tp-caption"], [1, "inner-tp-caption"], [1, "tp-social"], [1, "social-icon"], ["href", "mailto:contacto@endeandina.bo"], [1, "fab", "far", "fa-envelope"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TeamComponent_div_1_Template, 15, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.TeamOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.team);
        }
      },
      directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_1__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/testimonial/testimonial.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/testimonial/testimonial.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TestimonialComponent */

  /***/
  function srcAppComponentsTestimonialTestimonialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestimonialComponent", function () {
      return TestimonialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TestimonialComponent =
    /*#__PURE__*/
    function () {
      function TestimonialComponent() {
        _classCallCheck(this, TestimonialComponent);
      }

      _createClass(TestimonialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TestimonialComponent;
    }();

    TestimonialComponent.ɵfac = function TestimonialComponent_Factory(t) {
      return new (t || TestimonialComponent)();
    };

    TestimonialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestimonialComponent,
      selectors: [["app-testimonial"]],
      decls: 54,
      vars: 0,
      consts: [[1, "testimonials-section"], [1, "container"], [1, "row"], [1, "col", "col-lg-6", "col-lg-offset-3"], [1, "section-title-s4"], [1, "col", "col-md-4"], [1, "testimonial-left-img-holder"], ["src", "assets/images/testimonials/man.png", "alt", ""], [1, "col", "col-md-8"], [1, "testimonial-grids", "testimonial-slider", "clearfix"], [1, "grid"], [1, "quote"], [1, "fi", "flaticon-quote"], [1, "client-info"], [1, "img-holder"], ["src", "assets/images/testimonials/img-1.jpg", "alt", ""], [1, "details"], ["src", "assets/images/testimonials/img-2.jpg", "alt", ""], ["src", "assets/images/testimonials/img-3.jpg", "alt", ""]],
      template: function TestimonialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Testimonials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "What People say\u2019s About us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u201CRecently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look \u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Michel jhon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Manager of Automation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u201CRecently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look \u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Alaska");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Business Officer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\u201CRecently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look \u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Shain on");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Manager of Automation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdGltb25pYWwvdGVzdGltb25pYWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestimonialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-testimonial',
          templateUrl: './testimonial.component.html',
          styleUrls: ['./testimonial.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/config/global.service.ts":
  /*!******************************************!*\
    !*** ./src/app/config/global.service.ts ***!
    \******************************************/

  /*! exports provided: GLOBAL */

  /***/
  function srcAppConfigGlobalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GLOBAL", function () {
      return GLOBAL;
    });

    var GLOBAL = {
      urlServices: 'https://admin.endeandina.bo/api' // urlServices: 'http://localhost:3000/api'

    };
    /***/
  },

  /***/
  "./src/app/pages/about/about.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/about/about.component.ts ***!
    \************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppPagesAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lity */
    "./node_modules/lity/dist/lity.js");
    /* harmony import */


    var lity__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(lity__WEBPACK_IMPORTED_MODULE_1__);

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openVideo",
        value: function openVideo(video) {
          lity__WEBPACK_IMPORTED_MODULE_1___default()(video);
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 95,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "col-lg-6"], [1, "home-about"], [1, "ha-title"], [1, "strong"], [1, "col-lg-6", "space-break"], [1, "organic-pulsing-video"], [1, "youtube-popup"], [1, "popup-youtube", 3, "click"], [1, "video-image"], ["src", "assets/img/images/energy-img.jpg", "alt", ""], [1, "pulse-button"], [1, "alt-counter-parallax"], [1, "row", "cm-bottom"], [1, "mision-content"], [1, "mision-tittle"], [1, "vision-content"], [1, "vision-tittle"], [1, "container-wide-grid"], [1, "col-lg-6", "full-values-layer-text"], [1, "fc-content"], [1, "col-lg-6", "full-values-layer", "fojas"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sobre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ACERCA DE NOSOTROS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Somos ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\"Uniendo Bolivia con energ\xEDa\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Somos una empresa de econom\xEDa mixta, formada entre la Empresa Nacional de Electricidad (ENDE) del Estado Plurinacional de Bolivia y Petr\xF3leos de Venezuela Bolivia S.A (PDVSA Bolivia S.A), filial de PDVSA de la Rep\xFAblica Bolivariana de Venezuela, cuyo objeto es realizar actividades de generaci\xF3n de energ\xEDa el\xE9ctrica, interconexi\xF3n, comercializaci\xF3n y transmisi\xF3n asociada a la generaci\xF3n de energ\xEDa el\xE9ctrica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutComponent_Template_a_click_31_listener() {
            return ctx.openVideo("https://www.youtube.com/watch?v=KYLrtC6tpGg");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nuestra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Misi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\"ENDE ANDINA S.A.M es una empresa estrat\xE9gica de ENDE Corporaci\xF3n, que contribuye al suministro de electricidad a la poblaci\xF3n boliviana a trav\xE9s del Sistema Interconectado Nacional, logrando generar electricidad de manera continua, eficiente, segura y confiable, mediante inversiones importantes con gesti\xF3n auto-sostenible.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Nuestra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Visi\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\"Ser en 2020 una empresa de generaci\xF3n de electricidad de ENDE Corporaci\xF3n que abastece el mercado interno y externo, logrando la continuidad, seguridad y confiabilidad de sus operaciones a trav\xE9s de la especializaci\xF3n de sus recursos humanos, incorporaci\xF3n de tecnolog\xEDa, con una operaci\xF3n y administraci\xF3n eficiente de sus plantas, as\xED como ejecuci\xF3n de proyectos estrat\xE9gicos.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "PLANIFICACI\xD3N ESTRAT\xC9GICA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Nuestros Valores");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "ENDE ANDINA S.A.M. es una empresa filial de ENDE Corporaci\xF3n, cuyo objetivo es la Generaci\xF3n de la Energ\xEDa El\xE9ctrica (con sus tres Termoel\xE9ctricas en el Pa\xEDs) para el beneficio de la poblaci\xF3n boliviana con una gesti\xF3n transparente.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Tiene definido pol\xEDticas y lineamientos que permiten optimizar la generaci\xF3n de energ\xEDa el\xE9ctrica para el pa\xEDs y brindar mejores oportunidades de negociaci\xF3n con el mercado exterior.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Transparencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Nuestra gesti\xF3n es realizada de forma objetiva, clara y verificable.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Responsabilidad y compromiso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Cumplir nuestras labores con excelencia y en los plazos establecidos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Innovaci\xF3n y calidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Innovaci\xF3n y Calidad: \"Nos esforzamos por incorporar la mejor tecnolog\xEDa y personal, mantener est\xE1ndares de calidad, como tambi\xE9n innovar t\xE9cnicas para lograr los mejores resultados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Responsabilidad social empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Trabajamos para contribuir de forma activa y voluntaria al mejoramiento social, econ\xF3mico y ambiental");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Trabajo en Equipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Generar mecanismos de comunicaci\xF3n y coordinaci\xF3n combinando factores de contexto que otorguen un clima laboral que facilite el logro de resultados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".fojas[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: center;\n  position: absolute;\n  \n  left: 50%;\n  top: 50%;\n  margin-left: -125px;\n  margin-top: -180px;\n}\n\n.fojas[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], p[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: relative;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  background-color: #fefefe;\n  width: 250px;\n  height: 320px;\n  top: 0;\n  left: 0;\n  transform: rotate(10deg) skew(-60deg);\n  transform-origin: bottom center;\n  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);\n  transition: 0.4s;\n  z-index: -1;\n  overflow: hidden;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 10px;\n  background: #02242f;\n  background: linear-gradient(45deg, #478790 0%, #02242f 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#478790\", endColorstr=\"#02242F\",GradientType=1 );\n  transition: 0.5s;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  background: -webkit-linear-gradient(#02242F, #11505D);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin-top: 50px;\n  transition: 0.4s;\n  margin-bottom: 20px;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  display: block;\n  color: #999;\n  padding: 10px;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 10px 20px;\n  top: 40px;\n  border: 1px solid #fff;\n  transition: all 0.7s cubic-bezier(0.68, 0, 0.265, 1.55);\n  color: #fff;\n  text-decoration: none;\n  transform: scale(0);\n  position: relative;\n  overflow: hidden;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 0%;\n  transform-origin: center top;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 100% 0 0 0;\n  transition: all 0.6s linear;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]:hover:after {\n  height: 1000%;\n  width: 100%;\n  position: absolute;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: transparent;\n  transform: scale(1.2) !important;\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(20deg) skew(-20deg) translate(20px, 20px);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(20deg) skew(-20deg) translate(10px, 10px);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(20deg) skew(-20deg) translate(0px, 0px);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(20deg) skew(-20deg) translate(-10px, -10px);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(20deg) skew(-20deg) translate(-20px, -20px);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(40deg) skew(0) translate(170px, 0);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(20deg) skew(0) translate(100px, 0);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(0) skew(0);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(-20deg) skew(0) translate(-100px, 0);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(-40deg) skew(0) translate(-170px, 0);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover {\n  z-index: 9;\n  background-color: #11505D;\n  box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.5);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  top: 30px;\n  transform: scale(1);\n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover:after {\n  height: 100%;\n  \n}\n\n.fojas[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   li[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n  color: #fff;\n  background: -webkit-linear-gradient(#fff, #fff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSxVQUFBO0FDREo7O0FET0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDRix1Q0FBQTtFQUNFLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0pKOztBRE9FO0VBQ0UsVUFBQTtFQUNFLGtCQUFBO0FDSk47O0FEUUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRE9FO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBR0YsNERBQUE7RUFDQSxtSEFBQTtFQUNBLGdCQUFBO0FDSkY7O0FEUUU7RUFDRSxjQUFBO0VBQ0EscURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0pKOztBRE1FO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUNBLHVEQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDSEo7O0FES0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUNGSjs7QURJRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNESjs7QURHRTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURFRTtFQUNHLDJEQUFBO0FDQ0w7O0FEQ0U7RUFDRywyREFBQTtBQ0VMOztBREFFO0VBQ0cseURBQUE7QUNHTDs7QURBRTtFQUNHLDZEQUFBO0FDR0w7O0FEQUU7RUFDRyw2REFBQTtBQ0dMOztBRENFO0VBQ0csb0RBQUE7QUNFTDs7QURBRTtFQUNHLG9EQUFBO0FDR0w7O0FEREU7RUFDRyw0QkFBQTtBQ0lMOztBREZFO0VBQ0csc0RBQUE7QUNLTDs7QURIRTtFQUNHLHNEQUFBO0FDTUw7O0FESkU7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSw2Q0FBQTtBQ09KOztBREhFO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkU7RUFDRSxZQUFBO0VBQ0YsNkJBQUE7QUNPRjs7QURMRTtFQUNFLFdBQUE7RUFDRSwrQ0FBQTtFQUNGLDZCQUFBO0VBQ0Esb0NBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvamFzIHtcblxuICAgXG4gICAgei1pbmRleDogMTtcblxuICAgIFxuXG59XG5cbi5mb2phcyB1bCB7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLyogICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyAqL1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4O1xuICAgIG1hcmdpbi10b3A6IC0xODBweDtcbiAgICBcbiAgfVxuICAuZm9qYXMgaDEsIHAsIGEge1xuICAgIHotaW5kZXg6IDI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICBcbiAgLmZvamFzIHVsIGxpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06ICByb3RhdGUoMTBkZWcpIHNrZXcoLTYwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzoxMHB4IDEwcHggMzBweCByZ2JhKDAsMCwwLDAuMykgO1xuICAgIHRyYW5zaXRpb246LjRzO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgLmZvamFzIHVsIGxpOmFmdGVyIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyLCAzNiwgNDcpO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg3MSwgMTM1LCAxNDQpIDAlLCByZ2JhKDIsIDM2LCA0NykgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDcxLCAxMzUsIDE0NCkgMCUscmdiYSgyLCAzNiwgNDcpIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNzEsIDEzNSwgMTQ0KSAwJSxyZ2JhKDIsIDM2LCA0NykgMTAwJSk7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KCBzdGFydENvbG9yc3RyPScjNDc4NzkwJywgZW5kQ29sb3JzdHI9JyMwMjI0MkYnLEdyYWRpZW50VHlwZT0xICk7XG4gIHRyYW5zaXRpb246LjVzO1xuICBcbiAgfVxuICBcbiAgLmZvamFzIHVsIGxpIGgxIHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwMjI0MkYsICMxMTUwNUQpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRyYW5zaXRpb246LjRzO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmZvamFzIHVsIGxpID4gcCB7XG4gICAgZm9udC1zaXplOjAuNmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjOTk5O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cbiAgLmZvamFzIHVsIGxpICBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIHRvcDogNDBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIHRyYW5zaXRpb246IGFsbCAuN3MgY3ViaWMtYmV6aWVyKDAuNjgsIDAsIDAuMjY1LCAxLjU1KTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIC5mb2phcyB1bCBsaSBhOmFmdGVyIHtcbiAgICBjb250ZW50OlwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOjEwMCUgMCAwIDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgbGluZWFyO1xuICB9XG4gIC5mb2phcyB1bCBsaTpob3ZlciBhOmhvdmVyOmFmdGVyIHtcbiAgICBoZWlnaHQ6MTAwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC5mb2phcyB1bCBsaSBhOmhvdmVyIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmZvamFzIHVsIGxpOm50aC1jaGlsZCgxKSB7XG4gICAgIHRyYW5zZm9ybTogIHJvdGF0ZSgyMGRlZykgc2tldygtMjBkZWcpIHRyYW5zbGF0ZSgyMHB4LDIwcHgpOyBcbiAgfVxuICAuZm9qYXMgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgICAgdHJhbnNmb3JtOiAgcm90YXRlKDIwZGVnKSBza2V3KC0yMGRlZykgdHJhbnNsYXRlKDEwcHgsMTBweCk7IFxuICB9XG4gIC5mb2phcyB1bCBsaTpudGgtY2hpbGQoMykge1xuICAgICB0cmFuc2Zvcm06ICByb3RhdGUoMjBkZWcpIHNrZXcoLTIwZGVnKSB0cmFuc2xhdGUoMHB4LDBweCk7IFxuICB9XG4gIFxuICAuZm9qYXMgdWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgdHJhbnNmb3JtOiAgcm90YXRlKDIwZGVnKSBza2V3KC0yMGRlZykgdHJhbnNsYXRlKC0xMHB4LC0xMHB4KTsgXG4gIH1cbiAgXG4gIC5mb2phcyB1bCBsaTpudGgtY2hpbGQoNSkge1xuICAgICB0cmFuc2Zvcm06ICByb3RhdGUoMjBkZWcpIHNrZXcoLTIwZGVnKSB0cmFuc2xhdGUoLTIwcHgsLTIwcHgpOyBcbiAgfVxuICBcbiAgXG4gIC5mb2phcyB1bDpob3ZlciBsaTpudGgtY2hpbGQoMSkge1xuICAgICB0cmFuc2Zvcm06ICByb3RhdGUoNDBkZWcpIHNrZXcoMCkgdHJhbnNsYXRlKDE3MHB4LDApIDsgXG4gIH1cbiAgLmZvamFzIHVsOmhvdmVyIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgIHRyYW5zZm9ybTogIHJvdGF0ZSgyMGRlZykgc2tldygwKSAgdHJhbnNsYXRlKDEwMHB4LDApOyBcbiAgfVxuICAuZm9qYXMgdWw6aG92ZXIgbGk6bnRoLWNoaWxkKDMpIHtcbiAgICAgdHJhbnNmb3JtOiAgcm90YXRlKDApIHNrZXcoMCkgOyBcbiAgfVxuICAuZm9qYXMgdWw6aG92ZXIgbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgdHJhbnNmb3JtOiAgcm90YXRlKC0yMGRlZykgc2tldygwKSB0cmFuc2xhdGUoLTEwMHB4LDApIDsgXG4gIH1cbiAgLmZvamFzIHVsOmhvdmVyIGxpOm50aC1jaGlsZCg1KSB7XG4gICAgIHRyYW5zZm9ybTogIHJvdGF0ZSgtNDBkZWcpIHNrZXcoMCkgdHJhbnNsYXRlKC0xNzBweCwwKSA7IFxuICB9XG4gIC5mb2phcyB1bDpob3ZlciBsaTpob3ZlciB7XG4gICAgei1pbmRleDogOTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1MDVEO1xuICAgIGJveC1zaGFkb3c6MTBweCAxMHB4IDQwcHggcmdiYSgwLDAsMCwwLjUpIDtcbiAgICBcbiAgfSBcbiAgXG4gIC5mb2phcyB1bDpob3ZlciBsaTpob3ZlciBhIHtcbiAgICB0b3A6IDMwcHg7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICB9XG4gIC5mb2phcyB1bDpob3ZlciBsaTpob3ZlcjphZnRlciB7XG4gICAgaGVpZ2h0OjEwMCU7XG4gIC8qICAgdHJhbnNmb3JtOnNrZXcoMzBkZWcpOyAqL1xuICB9XG4gIC5mb2phcyB1bDpob3ZlciBsaTpob3ZlciAqIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfSIsIi5mb2phcyB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5mb2phcyB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKiAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7ICovXG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gIG1hcmdpbi10b3A6IC0xODBweDtcbn1cblxuLmZvamFzIGgxLCBwLCBhIHtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9qYXMgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMzIwcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHNrZXcoLTYwZGVnKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogYm90dG9tIGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICB6LWluZGV4OiAtMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvamFzIHVsIGxpOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMwMjI0MmY7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDc4NzkwIDAlLCAjMDIyNDJmIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgIzQ3ODc5MCAwJSwgIzAyMjQyZiAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjNDc4NzkwIDAlLCAjMDIyNDJmIDEwMCUpO1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj1cIiM0Nzg3OTBcIiwgZW5kQ29sb3JzdHI9XCIjMDIyNDJGXCIsR3JhZGllbnRUeXBlPTEgKTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmZvamFzIHVsIGxpIGgxIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCMwMjI0MkYsICMxMTUwNUQpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9qYXMgdWwgbGkgPiBwIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjOTk5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZm9qYXMgdWwgbGkgYSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0b3A6IDQwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHRyYW5zaXRpb246IGFsbCAwLjdzIGN1YmljLWJlemllcigwLjY4LCAwLCAwLjI2NSwgMS41NSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmZvamFzIHVsIGxpIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMCU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciB0b3A7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJSAwIDAgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgbGluZWFyO1xufVxuXG4uZm9qYXMgdWwgbGk6aG92ZXIgYTpob3ZlcjphZnRlciB7XG4gIGhlaWdodDogMTAwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5mb2phcyB1bCBsaSBhOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpICFpbXBvcnRhbnQ7XG59XG5cbi5mb2phcyB1bCBsaTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZykgc2tldygtMjBkZWcpIHRyYW5zbGF0ZSgyMHB4LCAyMHB4KTtcbn1cblxuLmZvamFzIHVsIGxpOm50aC1jaGlsZCgyKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKSBza2V3KC0yMGRlZykgdHJhbnNsYXRlKDEwcHgsIDEwcHgpO1xufVxuXG4uZm9qYXMgdWwgbGk6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNrZXcoLTIwZGVnKSB0cmFuc2xhdGUoMHB4LCAwcHgpO1xufVxuXG4uZm9qYXMgdWwgbGk6bnRoLWNoaWxkKDQpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNrZXcoLTIwZGVnKSB0cmFuc2xhdGUoLTEwcHgsIC0xMHB4KTtcbn1cblxuLmZvamFzIHVsIGxpOm50aC1jaGlsZCg1KSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKSBza2V3KC0yMGRlZykgdHJhbnNsYXRlKC0yMHB4LCAtMjBweCk7XG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0MGRlZykgc2tldygwKSB0cmFuc2xhdGUoMTcwcHgsIDApO1xufVxuXG4uZm9qYXMgdWw6aG92ZXIgbGk6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpIHNrZXcoMCkgdHJhbnNsYXRlKDEwMHB4LCAwKTtcbn1cblxuLmZvamFzIHVsOmhvdmVyIGxpOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDApIHNrZXcoMCk7XG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpudGgtY2hpbGQoNCkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHNrZXcoMCkgdHJhbnNsYXRlKC0xMDBweCwgMCk7XG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpudGgtY2hpbGQoNSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpIHNrZXcoMCkgdHJhbnNsYXRlKC0xNzBweCwgMCk7XG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpob3ZlciB7XG4gIHotaW5kZXg6IDk7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTUwNUQ7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZvamFzIHVsOmhvdmVyIGxpOmhvdmVyIGEge1xuICB0b3A6IDMwcHg7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpob3ZlcjphZnRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogICB0cmFuc2Zvcm06c2tldygzMGRlZyk7ICovXG59XG5cbi5mb2phcyB1bDpob3ZlciBsaTpob3ZlciAqIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCNmZmYsICNmZmYpO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/adquisiciones/adquisiciones.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/adquisiciones/adquisiciones.component.ts ***!
    \****************************************************************/

  /*! exports provided: AdquisicionesComponent */

  /***/
  function srcAppPagesAdquisicionesAdquisicionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdquisicionesComponent", function () {
      return AdquisicionesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AdquisicionesComponent =
    /*#__PURE__*/
    function () {
      function AdquisicionesComponent() {
        _classCallCheck(this, AdquisicionesComponent);
      }

      _createClass(AdquisicionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AdquisicionesComponent;
    }();

    AdquisicionesComponent.ɵfac = function AdquisicionesComponent_Factory(t) {
      return new (t || AdquisicionesComponent)();
    };

    AdquisicionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdquisicionesComponent,
      selectors: [["app-adquisiciones"]],
      decls: 130,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "row"], ["data-view", "list-view", 1, "download-cards"], [1, "download-card"], [1, "download-card__icon-box"], ["src", "../assets/img/pdf.png"], [1, "download-card__content-box"], [1, "content"], [1, "download-card__content-box__catagory"], [1, "download-card__content-box__title"], [1, "download-card__content-box__description"], [1, "btn-more"], ["href", "assets/doc/adquisiciones/TERMINOS_DE_REFERENCIA_2da_CONVOCATORIA_POZOS+PROFUNDOS_WARNES.pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/PLIEGO_DE_CONDICIONES_POZOS_PROFUNDOS_PTWAR_(2da_CONVOCATORIA).pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/PLANOS_PERFORACION_Y_CONSTRUCCIO\u0301N_DE_2 POZOS_PROFUNDOS.pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/Invitacion_006-2020_Pozos_Profundos_(2da Convocatoria).pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/FORMULARIOS_PROCESO_CONSTRUCCION_POZOS_PROFUNDOS.docx", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_GENERALES PERFORACION_Y_CONSTRUCCIO\u0301N_DE_2_POZOS_PROFUNDOS.pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"], ["href", "assets/doc/adquisiciones/ESPECIFICACIONES_TECNICAS_ESPECIALES_PERFORACION_Y_CONSTRUCCIO\u0301N_DE_2_POZOS_PROFUNDOS.pdf", "download", "", "role", "button", 1, "btn", "btn-hover-corner"]],
      template: function AdquisicionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gesti\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Convocatorias Vigentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "PERFORACION Y CONSTRUCCI\xD3N DE 2 POZOS PROFUNDOS PARA PRODUCCI\xD3N DE AGUA \u2013 CICLOS COMBINADOS PLANTA TERMOEL\xC9CTRICA WARNES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "SEGUNDA CONVOCATORIA N\xB0006/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Inicio de Proceso: 10/06/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Reuni\xF3n de Aclaracion: 16/06/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Fecha de presentaci\xF3n de Propuestas: 18/06/2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TERMINOS DE REFERENCIA 2da CONVOCATORIA POZOS PROFUNDOS WARNES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Terminos de referencia 2da convocatoria. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "PLIEGO DE CONDICIONES POZOS PROFUNDOS PTWAR (2da CONVOCATORIA)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pliego de condiciones. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "PLANOS PERFORACION Y CONSTRUCCIO\u0301N DE 2 POZOS PROFUNDOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Planos perforaci\xF3n y construcci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Invitacion 006-2020 Pozos Profundos (2da Convocatoria)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Invitaci\xF3n 006-2020 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "FORMULARIOS PROCESO CONSTRUCCION POZOS PROFUNDOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Formularios de porceso de construci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "ESPECIFICACIONES TECNICAS GENERALES PERFORACION Y CONSTRUCCIO\u0301N DE 2 POZOS PROFUNDOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Especificaciones t\xE9cnicas generales ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "article", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h3", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "ESPECIFICACIONES TECNICAS ESPECIALES PERFORACION Y CONSTRUCCIO\u0301N DE 2 POZOS PROFUNDOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Especificaciones t\xE9cnicas especiales de perforaci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Descargar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\nbody[_ngcontent-%COMP%] {\n  background-color: #e8e8e8;\n  font-family: \"proxima nova\";\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.clearfix[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 3em 1em;\n}\n.download-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.download-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: calc(100% - 2em);\n  background: #fbfbfb;\n  position: relative;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 2em;\n  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06);\n  border-bottom: 1px solid #d2d2d2;\n  border-left: 1px solid #dadada;\n  margin: 0 1em 2em 1em;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%] {\n    float: left;\n    width: calc( 50% - 2em );\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(3) {\n    clear: both;\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(4) {\n    clear: initial;\n  }\n}\n@media (min-width: 1000px) {\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%] {\n    width: calc( (100% / 3) - 2em );\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(3) {\n    clear: initial;\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(4) {\n    clear: both;\n  }\n}\n.download-card__icon-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #f1f1f1;\n  padding: 2em;\n  text-align: center;\n}\n@media (min-width: 700px) {\n  .download-card__icon-box[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.download-card__icon-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=list-view][_ngcontent-%COMP%]   .download-card__icon-box[_ngcontent-%COMP%] {\n    width: 200px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-right: 1px solid #e6e6e6;\n  }\n}\n.download-card__content-box[_ngcontent-%COMP%] {\n  padding: 2em 2em 3em;\n  flex: 1;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=list-view][_ngcontent-%COMP%]   .download-card__content-box[_ngcontent-%COMP%] {\n    padding-left: calc(200px + 2em);\n  }\n}\n.download-card__content-box__catagory[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 10px;\n  margin: 0 0 2em;\n}\n.download-card__content-box__catagory[_ngcontent-%COMP%]::before {\n  content: \"| \";\n  color: #ff4500;\n}\n.download-card__content-box__title[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin: 0 0 0.5em;\n  font-size: 18px;\n}\n.download-card__content-box__description[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding: 0;\n  margin: 0 0 1em;\n  clear: both;\n  color: #929292;\n  font-size: 16px;\n}\n.download-card__content-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2em;\n  margin: 0;\n  color: #ff4500;\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 13px;\n}\n.dc-view-switcher[_ngcontent-%COMP%] {\n  display: none;\n  margin: 1em;\n  text-align: right;\n}\n@media (min-width: 700px) {\n  .dc-view-switcher[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  font-family: \"fontAwesome\";\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5em;\n  vertical-align: middle;\n  color: gray;\n  opacity: 0.3;\n  outline: none;\n  transition: opacity 0.4s ease;\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger=list-view][_ngcontent-%COMP%]::before {\n  content: \"\uF00B\";\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger=grid-view][_ngcontent-%COMP%]::before {\n  content: \"\uF009\";\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger].active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRxdWlzaWNpb25lcy9hZHF1aXNpY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9wcm95ZWN0b3MvRU5ERV9BTkRJTkEvU2l0ZV9FQS9zcmMvYXBwL3BhZ2VzL2FkcXVpc2ljaW9uZXMvYWRxdWlzaWNpb25lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNlaEI7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0FEYkY7QUNnQkE7RUFBSSxzQkFBQTtBRFpKO0FDY0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QURYRjtBQ2NBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FEWEY7QUNjQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRFhGO0FDY0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RUFBQTtFQUNBLGdDQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtBRFhGO0FDaENFO0VBOENBO0lBR0ksV0FBQTtJQUNBLHdCQUFBO0VEYko7RUNjSTtJQUFnQixXQUFBO0VEWHBCO0VDWUk7SUFBZ0IsY0FBQTtFRFRwQjtBQUNGO0FDbERFO0VBb0RBO0lBVUksK0JBQUE7RURSSjtFQ1NJO0lBQWdCLGNBQUE7RUROcEI7RUNPSTtJQUFnQixXQUFBO0VESnBCO0FBQ0Y7QUNPRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FETEo7QUM5REU7RUE4REE7SUFPdUIsdUJBQUE7RURIdkI7QUFDRjtBQ0lJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBREZOO0FDeEVFO0VBOEVFO0lBRUksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLCtCQUFBO0VESk47QUFDRjtBQ1FFO0VBQ0Usb0JBQUE7RUFDQSxPQUFBO0FETko7QUN2RkU7RUFnR0U7SUFDdUIsK0JBQUE7RUROekI7QUFDRjtBQ1FJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FETk47QUNPTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FETFI7QUNTSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURQTjtBQ1NJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRFBOO0FDU0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRFBOO0FDYUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEVkY7QUNwSUU7RUEySUY7SUFNSSxjQUFBO0VEVEY7QUFDRjtBQ1dFO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtBRFRKO0FDV2tDO0VBQVksWUFBQTtBRFI5QztBQ1NrQztFQUFZLFlBQUE7QUROOUM7QUNPSTtFQUF5QixVQUFBO0FESjdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRxdWlzaWNpb25lcy9hZHF1aXNpY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtZmFtaWx5OiBcInByb3hpbWEgbm92YVwiO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNsZWFyZml4IHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogdGFibGU7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4uY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTE4MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogM2VtIDFlbTtcbn1cblxuLmRvd25sb2FkLWNhcmRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmRvd25sb2FkLWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgYmFja2dyb3VuZDogI2ZiZmJmYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMDUpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkMmQyZDI7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RhZGFkYTtcbiAgbWFyZ2luOiAwIDFlbSAyZW0gMWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGNhbGMoIDUwJSAtIDJlbSApO1xuICB9XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZDpudGgtY2hpbGQoMykge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZDpudGgtY2hpbGQoNCkge1xuICAgIGNsZWFyOiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMykgLSAyZW0gKTtcbiAgfVxuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWdyaWQtdmlld10gLmRvd25sb2FkLWNhcmQ6bnRoLWNoaWxkKDMpIHtcbiAgICBjbGVhcjogaW5pdGlhbDtcbiAgfVxuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWdyaWQtdmlld10gLmRvd25sb2FkLWNhcmQ6bnRoLWNoaWxkKDQpIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuLmRvd25sb2FkLWNhcmRfX2ljb24tYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZzogMmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLmRvd25sb2FkLWNhcmRfX2ljb24tYm94IHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuLmRvd25sb2FkLWNhcmRfX2ljb24tYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWxpc3Qtdmlld10gLmRvd25sb2FkLWNhcmRfX2ljb24tYm94IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlNmU2O1xuICB9XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3gge1xuICBwYWRkaW5nOiAyZW0gMmVtIDNlbTtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWxpc3Qtdmlld10gLmRvd25sb2FkLWNhcmRfX2NvbnRlbnQtYm94IHtcbiAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMjAwcHggKyAyZW0pO1xuICB9XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3hfX2NhdGFnb3J5IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDAgMCAyZW07XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3hfX2NhdGFnb3J5OjpiZWZvcmUge1xuICBjb250ZW50OiBcInwgXCI7XG4gIGNvbG9yOiAjZmY0NTAwO1xufVxuLmRvd25sb2FkLWNhcmRfX2NvbnRlbnQtYm94X190aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBtYXJnaW46IDAgMCAwLjVlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmRvd25sb2FkLWNhcmRfX2NvbnRlbnQtYm94X19kZXNjcmlwdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCAwIDFlbTtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbG9yOiAjOTI5MjkyO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3ggLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyZW07XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICNmZjQ1MDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmRjLXZpZXctc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgLmRjLXZpZXctc3dpdGNoZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4uZGMtdmlldy1zd2l0Y2hlciA+IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcImZvbnRBd2Vzb21lXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6IGdyYXk7XG4gIG9wYWNpdHk6IDAuMztcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGVhc2U7XG59XG4uZGMtdmlldy1zd2l0Y2hlciA+IGJ1dHRvbltkYXRhLXRyaWdnZXI9bGlzdC12aWV3XTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgItcIjtcbn1cbi5kYy12aWV3LXN3aXRjaGVyID4gYnV0dG9uW2RhdGEtdHJpZ2dlcj1ncmlkLXZpZXddOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+AiVwiO1xufVxuLmRjLXZpZXctc3dpdGNoZXIgPiBidXR0b25bZGF0YS10cmlnZ2VyXS5hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xufSIsIiRkZy1uYXJyb3c6IDcwMHB4O1xuJGRnLXdpZGU6IDEwMDBweDtcblxuQG1peGluIGRnLXdpZGUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGctd2lkZX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGctbmFycm93IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRnLW5hcnJvd30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5ib2R5IHsgXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGU4ZTg7XG4gIGZvbnQtZmFtaWx5OiAncHJveGltYSBub3ZhJztcbn1cblxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmNsZWFyZml4IHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuLmNvbnRhaW5lciB7IFxuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMTgwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzZW0gMWVtO1xufVxuXG4uZG93bmxvYWQtY2FyZHMge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZG93bmxvYWQtY2FyZCB7ICBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDJlbSk7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAyZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIG1hcmdpbjogMCAxZW0gMmVtIDFlbTtcbiAgXG4gIC8vIC0tIENhcmQgaW4gR3JpZCBWaWV3IFxuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PSdncmlkLXZpZXcnXSAmIHtcbiAgICBcbiAgICBAaW5jbHVkZSBkZy1uYXJyb3cgeyBcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IGNhbGMoIDUwJSAtIDJlbSApO1xuICAgICAgJjpudGgtY2hpbGQoMyl7IGNsZWFyOiBib3RoOyB9XG4gICAgICAmOm50aC1jaGlsZCg0KXsgY2xlYXI6IGluaXRpYWw7IH1cbiAgICB9XG4gICAgXG4gICAgQGluY2x1ZGUgZGctd2lkZSB7IFxuICAgICAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMykgLSAyZW0gKTtcbiAgICAgICY6bnRoLWNoaWxkKDMpeyBjbGVhcjogaW5pdGlhbDsgfVxuICAgICAgJjpudGgtY2hpbGQoNCl7IGNsZWFyOiBib3RoOyB9XG4gICAgfVxuICB9IC8vIC0tIEVuZCBHcmlkIFZpZXdcbiAgXG4gICZfX2ljb24tYm94IHsgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIEBpbmNsdWRlIGRnLW5hcnJvdyB7IGp1c3RpZnktY29udGVudCA6Y2VudGVyO31cbiAgICBcbiAgICBpbWcge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDMwMHB4OyAgIFxuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIFxuICAgIC8vIC0tLSBJY29uIEJveCBpbiBMaXN0IFZpZXcgXG4gICAgLmRvd25sb2FkLWNhcmRzW2RhdGEtdmlldz0nbGlzdC12aWV3J10gJiB7ICAgIFxuICAgICAgQGluY2x1ZGUgZGctbmFycm93IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7ICAgIFxuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICB9ICBcbiAgICB9IC8vIC0tLSBFbmQgSWNvbiBCb3ggaW4gTGlzdCBWaWV3ICAgXG4gIH1cbiBcbiAgJl9fY29udGVudC1ib3ggeyAgXG4gICAgcGFkZGluZzogMmVtIDJlbSAzZW07ICBcbiAgICBmbGV4OiAxO1xuICAgIFxuICAgIC8vIC0tIENvbnRlbnQgQm94IGluIExpc3QgVmlld1xuICAgIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9XCJsaXN0LXZpZXdcIl0gJiB7XG4gICAgICBAaW5jbHVkZSBkZy1uYXJyb3cgeyBwYWRkaW5nLWxlZnQ6IGNhbGMoMjAwcHggKyAyZW0pOyB9XG4gICAgfSAvLyAtLSBFbmQgQ29udGVudCBCb3ggaW4gTGlzdCBWaWV3XG4gICAgXG4gICAgJl9fY2F0YWdvcnkge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICBtYXJnaW46IDAgMCAyZW07ICAgXG4gICAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnfCAnO1xuICAgICAgICBjb2xvcjogI2ZmNDUwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIG1hcmdpbjogMCAwIC41ZW07XG4gICAgICBmb250LXNpemU6IDE4cHg7fVxuICAgIFxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwIDAgMWVtO1xuICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICBjb2xvcjogIzkyOTI5MjtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9IFxuICAgIC5idXR0b24ge1xuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgICBib3R0b206MmVtOyAgIFxuICAgICAgbWFyZ2luOjA7XG4gICAgICBjb2xvcjogI2ZmNDUwMDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICB9XG59XG5cblxuLmRjLXZpZXctc3dpdGNoZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIFxuICBAaW5jbHVkZSBkZy1uYXJyb3cge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9IFxuICBcbiAgJiA+IGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdmb250QXdlc29tZSc7ICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDsgXG4gICAgYm9yZGVyOiBub25lOyAgICBcbiAgICBjdXJzb3I6IHBvaW50ZXI7ICBcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHMgZWFzZTtcblxuICAgICZbZGF0YS10cmlnZ2VyPVwibGlzdC12aWV3XCJdIHsgJjo6YmVmb3JlIHsgY29udGVudDogXCJcXGYwMGJcIjsgfSB9XG4gICAgJltkYXRhLXRyaWdnZXI9XCJncmlkLXZpZXdcIl0geyAmOjpiZWZvcmUgeyBjb250ZW50OiBcIlxcZjAwOVwiOyB9IH1cbiAgICAmW2RhdGEtdHJpZ2dlcl0uYWN0aXZlIHsgb3BhY2l0eTogMTsgfVxuICBcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdquisicionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adquisiciones',
          templateUrl: './adquisiciones.component.html',
          styleUrls: ['./adquisiciones.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/anualreport/anualreport.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/anualreport/anualreport.component.ts ***!
    \************************************************************/

  /*! exports provided: AnualreportComponent */

  /***/
  function srcAppPagesAnualreportAnualreportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnualreportComponent", function () {
      return AnualreportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AnualreportComponent =
    /*#__PURE__*/
    function () {
      function AnualreportComponent() {
        _classCallCheck(this, AnualreportComponent);
      }

      _createClass(AnualreportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AnualreportComponent;
    }();

    AnualreportComponent.ɵfac = function AnualreportComponent_Factory(t) {
      return new (t || AnualreportComponent)();
    };

    AnualreportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnualreportComponent,
      selectors: [["app-anualreport"]],
      decls: 154,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-tittle-alt"], [1, "gallery-info", "service-alt"], [1, "row", "hover-effects", "image-hover"], [1, "col-md-6", "col-lg-4"], [1, "project-grid"], [1, "pg-thumbnail"], ["href", "assets/doc/MemoriaEndeAndina_2019.pdf", "download", ""], ["src", "assets/img/portadas/2019.jpg", "alt", ""], [1, "pg-caption"], ["href", "assets/doc/memorias/mem-2018.pdf", "download", ""], ["src", "assets/img/portadas/2018.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2017.pdf", "download", ""], ["src", "assets/img/portadas/2017.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2016.pdf", "download", ""], ["src", "assets/img/portadas/2016.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2015.pdf", "download", ""], ["src", "assets/img/portadas/2015.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2014.pdf", "download", ""], ["src", "assets/img/portadas/2014.jpg", "alt", ""], [1, "project-grid", "desktop-last-grid"], ["href", "assets/doc/memorias/mem-2013.pdf", "download", ""], ["src", "assets/img/portadas/2013.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2012.pdf", "download", ""], ["src", "assets/img/portadas/2012.jpg", "alt", ""], [1, "project-grid", "desktop-last-grid", "last-grid"], ["href", "assets/doc/memorias/mem-2011.pdf", "download", ""], ["src", "assets/img/portadas/2011.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2010.pdf", "download", ""], ["src", "assets/img/portadas/2010.jpg", "alt", ""], ["href", "assets/doc/memorias/mem-2009.pdf", "download", ""], ["src", "assets/img/portadas/2009.jpg", "alt", ""]],
      template: function AnualreportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ende Andina ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Memorias Anuales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Memorias Anuales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Memorias Anuales");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Documentos descagables de todas las memorias anuales presentadas por nuestra empresa en formato PDF.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Memoria Anual 2019");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Memoria Anual 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Memoria Anual 2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Memoria Anual 2016");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Memoria Anual 2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Memoria Anual 2014");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Memoria Anual 2013");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Memoria Anual 2012");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Memoria Anual 2011");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Memoria Anual 2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Documento PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Memoria Anual 2009");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Informe institucioanal anual del desarrollo comercial de la empresa .");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FudWFscmVwb3J0L2FudWFscmVwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnualreportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-anualreport',
          templateUrl: './anualreport.component.html',
          styleUrls: ['./anualreport.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ccpteri/ccpteri.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/ccpteri/ccpteri.component.ts ***!
    \****************************************************/

  /*! exports provided: CcpteriComponent */

  /***/
  function srcAppPagesCcpteriCcpteriComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CcpteriComponent", function () {
      return CcpteriComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/ciclos"];
    };

    var CcpteriComponent =
    /*#__PURE__*/
    function () {
      function CcpteriComponent() {
        _classCallCheck(this, CcpteriComponent);
      }

      _createClass(CcpteriComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CcpteriComponent;
    }();

    CcpteriComponent.ɵfac = function CcpteriComponent_Factory(t) {
      return new (t || CcpteriComponent)();
    };

    CcpteriComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CcpteriComponent,
      selectors: [["app-ccpteri"]],
      decls: 186,
      vars: 3,
      consts: [[1, "sections", "pter-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "co-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "brochures"], [1, "col-lg-12", "span-about"], [1, "sa-content", 2, "width", "100%", "padding", "2rem 0.5rem"], [1, "sa-tittle"], [1, "text"], [1, "btn", "btn-custom", 3, "routerLink"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-content", "ab-details"], [1, "col-lg-6"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/turbina.jpg", "alt", ""], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], ["width", "30%"]],
      template: function CcpteriComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciclos Combinados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Planta Termoel\xE9ctrica Entre Rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ciclos Combinados Termoel\xE9ctrica Entre Rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Proyectos en Ejecuci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ENDE ANDINA S.A.M. juega un papel muy importante en el Sector El\xE9ctrico y con el Gobierno de Transici\xF3n brindando estabilidad al pa\xEDs y con miras establecer precios m\xE1s bajos de energ\xEDa el\xE9ctrica para el consumidor final.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ciclos combinados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Que es un ciclo combinado?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Con el fin me mejorar la eficiencia en la generaci\xF3n, se aprovecha el calor en el escape de la turbina a gas para calentar agua y generar vapor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Saber m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Proyecto Ciclos Combinados PTERI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "El proyecto consiste en la ampliaci\xF3n de la Planta Termoel\xE9ctrica Entre R\xEDos (PTERI), con la implementaci\xF3n de ciclos combinados para incrementar la oferta de potencia y de esta manera generar excedentes para la exportaci\xF3n de energ\xEDa el\xE9ctrica. La PTER ha sido dise\xF1ada para alcanzar a su conclusi\xF3n una potencia instalada aproximada de 389,06 MW mediante tecnolog\xEDa de ciclo combinado. Ubicado en el Municipio Entre R\xEDos, provincia Carrasco dentro del departamento de Cochabamba.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "La implementaci\xF3n de mayor potencia en la Planta Termoel\xE9ctrica de Entre R\xEDos contribuir\xE1 a una mayor confiabilidad de suministro de energ\xEDa en el \xE1rea oriental en particular y tambi\xE9n en el pa\xEDs mediante el S.I.N.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "La firma del Contrato del Proyecto \u201CCiclos Combinados Planta Termoel\xE9ctrica Entre R\xEDos\u201D, fue realizada en el municipio de Entre R\xEDos el 5 de mayo de 2016.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Caracter\xEDsticas del Proyecto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "El objetivo general del proyecto es la ampliaci\xF3n de la Planta Termoel\xE9ctrica de Entre R\xEDos, que consta de la instalaci\xF3n de 6 turbinas a gas SGT 800 de 40 MW cada una y 3 ciclos combinados consistentes en tres turbinas a vapor de una potencia efectiva aproximada de 40 MW cada una.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Los objetivos espec\xEDficos del proyecto son:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Instalaci\xF3n de 6 turbinas a gas y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Instalaci\xF3n de 3 turbinas a vapor y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ejecuci\xF3n de obras civiles para el \xE1rea de generaci\xF3n y subestaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ejecuci\xF3n de obras civiles complementarias de acuerdo a requerimientos de ingenier\xEDa del proyecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Instalaci\xF3n de nueve transformadores de potencia y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Perforaci\xF3n de 5 pozos de agua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Obras de captaci\xF3n de agua R\xEDo Ichoa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "L\xEDnea de impulsi\xF3n R\xEDo Ichoa \u2013 PTER.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Avance F\xEDsico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Al 31 de diciembre de 2019, el avance f\xEDsico ponderado del proyecto Ciclos Combinados de la Planta Termoel\xE9ctrica Entre R\xEDos tiene una ejecuci\xF3n de 99,25%, de acuerdo al siguiente detalle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "thead", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "DETALLE DE EQUIPOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "EN PROCESO DE FABRICACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "EN TR\xC1NSITO MAR\xCDTIMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "EN TR\xC1NSITO TERRESTRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "EN SITIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Turbinas de Gas (6)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "TG31-32-41-42-51-52");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Turbinas de Vapor (3)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "TV30-TV40-TV50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Generadores (9)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "G31-32-30-40-41-42-50-51-52");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Tr\xE1nsformadores (9)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "TF30-31-32-40-41-42-50-51-52");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Calderos HRSG (6)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "HR5G31-32-41-42-51-52");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Torres de Refrigeraci\xF3n (3)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "TR30-40-50");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n\n.solution-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n  font-size: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9jY3B0ZXJpL2NjcHRlcmkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NjcHRlcmkvY2NwdGVyaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jY3B0ZXJpL2NjcHRlcmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuICAgXG59XG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59IiwiLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuXG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CcpteriComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ccpteri',
          templateUrl: './ccpteri.component.html',
          styleUrls: ['./ccpteri.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ccptsur/ccptsur.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/ccptsur/ccptsur.component.ts ***!
    \****************************************************/

  /*! exports provided: CcptsurComponent */

  /***/
  function srcAppPagesCcptsurCcptsurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CcptsurComponent", function () {
      return CcptsurComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/ciclos"];
    };

    var CcptsurComponent =
    /*#__PURE__*/
    function () {
      function CcptsurComponent() {
        _classCallCheck(this, CcptsurComponent);
      }

      _createClass(CcptsurComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CcptsurComponent;
    }();

    CcptsurComponent.ɵfac = function CcptsurComponent_Factory(t) {
      return new (t || CcptsurComponent)();
    };

    CcptsurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CcptsurComponent,
      selectors: [["app-ccptsur"]],
      decls: 190,
      vars: 3,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "brochures"], [1, "col-lg-12", "span-about"], [1, "sa-content", 2, "width", "100%", "padding", "2rem 0.5rem"], [1, "sa-tittle"], [1, "text"], [1, "btn", "btn-custom", 3, "routerLink"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-content", "ab-details"], [1, "col-lg-6"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/ccsur.jpg", "alt", ""], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], ["width", "30%"]],
      template: function CcptsurComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciclos Combinados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Planta Termoel\xE9ctrica Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ciclos Combinados Termoel\xE9ctrica Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Proyectos en Ejecuci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ENDE ANDINA S.A.M. juega un papel muy importante en el Sector El\xE9ctrico y con el Gobierno de Transici\xF3n brindando estabilidad al pa\xEDs y con miras establecer precios m\xE1s bajos de energ\xEDa el\xE9ctrica para el consumidor final.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ciclos combinados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Que es un ciclo combinado?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Con el fin me mejorar la eficiencia en la generaci\xF3n, se aprovecha el calor en el escape de la turbina a gas para calentar agua y generar vapor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Saber m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Proyecto Ciclos Combinados PTSUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "El proyecto consiste en la ampliaci\xF3n de la Planta Termoel\xE9ctrica del Sur (PTSUR), incrementando la oferta de potencia y poder generar excedentes para la exportaci\xF3n de energ\xEDa el\xE9ctrica. La PTSUR ha sido dise\xF1ada para alcanzar a su conclusi\xF3n una potencia instalada aproximada de 480 MW, mediante tecnolog\xEDa de ciclo combinado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Beneficio: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Incremento de la oferta de generaci\xF3n de energ\xEDa el\xE9ctrica para exportaci\xF3n y aportar al Sistema Interconectado Nacional aprox. 320 MW adicionales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "La planificaci\xF3n de la infraestructura de transmisi\xF3n est\xE1 contemplando el desarrollo de corredores de exportaci\xF3n mediante l\xEDneas de 230 y 500 kV al Paraguay y Argentina respectivamente, situaci\xF3n que posibilitar\xE1 la evacuaci\xF3n de energ\xEDa a los mercados de Argentina y Paraguay de modo que en el futuro la Termoel\xE9ctrica del Sur ser\xE1 un nodo de exportaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "La firma de Contrato del Proyecto \u201CCiclos Combinados Planta Termoel\xE9ctrica del Sur\u201D, se realiz\xF3 en el municipio de Yacuiba el 9 de mayo de 2016.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Considerando la ubicaci\xF3n de la Planta Termoel\xE9ctrica del Sur en el \xE1rea de Yacuiba, cerca de la frontera con Argentina y Paraguay, los excedentes de potencia y energ\xEDa permitir\xE1n capturar mercados de exportaci\xF3n de energ\xEDa el\xE9ctrica en el corto plazo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Caracter\xEDsticas del Proyecto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "El objetivo general del proyecto es la instalaci\xF3n del ciclo combinado basado en el cierre de las instalaciones actuales con 2 turbinas a vapor de una potencia efectiva aproximada de 40 MW cada una.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Instalaci\xF3n de 4 turbinas a gas SGT 800 de una potencia energ\xE9tica de 40 MW cada una y dos ciclos combinados consistente en 2 turbinas a vapor con una potencia efectiva aproximada de 40 MW cada una.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Los objetivos espec\xEDficos del proyecto son:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ejecuci\xF3n de obras civiles para el \xE1rea de generaci\xF3n y subestaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Ejecuci\xF3n de obras civiles para la construcci\xF3n de lagunas de almacenamiento y captaci\xF3n de agua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Ejecuci\xF3n de obras civiles complementarias de acuerdo a requerimientos de la ingenier\xEDa del proyecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Instalaci\xF3n de 4 turbinas a gas y componentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Instalaci\xF3n de 4 turbinas a vapor ciclo combinado y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Instalaci\xF3n de 8 transformadores de potencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Avance F\xEDsico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Al 31 de diciembre de 2019, el avance f\xEDsico ponderado del proyecto Ciclos Combinados de la Planta Termoel\xE9ctrica del Sur tiene una ejecuci\xF3n de 98.66%, de acuerdo al siguiente detalle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "thead", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "DETALLE DE EQUIPOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "EN PROCESO DE FABRICACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "EN TR\xC1NSITO MAR\xCDTIMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "EN TR\xC1NSITO TERRESTRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "EN SITIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Turbinas de Gas (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "TG31-32-41-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Turbinas de Vapor (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "TV30-40-10-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Generadores (8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "G30-31-32-41-42-40-10-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Tr\xE1nsformadores (8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "TF10-20-30-40-31-32-41-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Calderos HRSG (8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "HR5G31-32-42-41-14-13-11-12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "Aerocondensadores (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "AER 30-40-10-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n\n.solution-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n  font-size: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9jY3B0c3VyL2NjcHRzdXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NjcHRzdXIvY2NwdHN1ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jY3B0c3VyL2NjcHRzdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuICAgXG59XG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59IiwiLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuXG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CcptsurComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ccptsur',
          templateUrl: './ccptsur.component.html',
          styleUrls: ['./ccptsur.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ccptwar/ccptwar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/ccptwar/ccptwar.component.ts ***!
    \****************************************************/

  /*! exports provided: CcptwarComponent */

  /***/
  function srcAppPagesCcptwarCcptwarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CcptwarComponent", function () {
      return CcptwarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/ciclos"];
    };

    var CcptwarComponent =
    /*#__PURE__*/
    function () {
      function CcptwarComponent() {
        _classCallCheck(this, CcptwarComponent);
      }

      _createClass(CcptwarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CcptwarComponent;
    }();

    CcptwarComponent.ɵfac = function CcptwarComponent_Factory(t) {
      return new (t || CcptwarComponent)();
    };

    CcptwarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CcptwarComponent,
      selectors: [["app-ccptwar"]],
      decls: 188,
      vars: 3,
      consts: [[1, "sections", "ptwar-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "brochures"], [1, "col-lg-12", "span-about"], [1, "sa-content", 2, "width", "100%", "padding", "2rem 0.5rem"], [1, "sa-tittle"], [1, "text"], [1, "btn", "btn-custom", 3, "routerLink"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-content", "ab-details"], [1, "col-lg-6"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/ccwar.jpg", "alt", ""], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], ["width", "30%"]],
      template: function CcptwarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ciclos Combinados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Planta Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ciclos Combinados Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Proyectos en Ejecuci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ENDE ANDINA S.A.M. juega un papel muy importante en el Sector El\xE9ctrico y con el Gobierno de Transici\xF3n brindando estabilidad al pa\xEDs y con miras establecer precios m\xE1s bajos de energ\xEDa el\xE9ctrica para el consumidor final.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ciclos combinados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Que es un ciclo combinado?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Con el fin me mejorar la eficiencia en la generaci\xF3n, se aprovecha el calor en el escape de la turbina a gas para calentar agua y generar vapor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Saber m\xE1s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Proyecto Ciclos Combinados PTWAR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "El proyecto consiste en la ampliaci\xF3n de la Planta Termoel\xE9ctrica Warnes (PTWAR), a trav\xE9s de la implementaci\xF3n de ciclos combinados en las instalaciones actuales y la expansi\xF3n de la Planta, incrementando la oferta de potencia al SIN, generando excedentes para la exportaci\xF3n de energ\xEDa el\xE9ctrica. La PTWAR ha sido dise\xF1ada para alcanzar a su conclusi\xF3n una potencia instalada aproximada de 520 MW mediante uso de tecnolog\xEDa que implica un incremento de la potencia y energ\xEDa de la central, sin incrementar el consumo de combustible.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Incremento de la oferta de generaci\xF3n de energ\xEDa el\xE9ctrica para exportaci\xF3n y aportar al Sistema Interconectado Nacional aprox. 320 MW adicionales.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "A mediano plazo, Warnes ser\xE1 un nodo de exportaci\xF3n de excedentes y colectar\xE1 la energ\xEDa del proyecto hidroel\xE9ctrico de Rositas. Esta situaci\xF3n justifica la ampliaci\xF3n de la Planta Termoel\xE9ctrica Warnes para disponer de excedentes para la exportaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Adicionalmente, se considera el crecimiento de la demanda de energ\xEDa el\xE9ctrica en el departamento de Santa Cruz (presencia de importantes proyectos industriales). La implementaci\xF3n de mayor potencia en la Planta Termoel\xE9ctrica de Warnes, evitar\xE1 el congestionamiento de potencia en la planta de Guaracachi y tambi\xE9n dar\xE1 mayor confiabilidad de suministro de energ\xEDa en esta regi\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "La firma de Contrato del Proyecto \u201CCiclos Combinados Planta Termoel\xE9ctrica Warnes\u201D, se realiz\xF3 en la provincia Warnes el 28 de abril de 2016.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Caracter\xEDsticas del Proyecto:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "El objetivo general del proyecto es la instalaci\xF3n del ciclo combinado basado en el cierre de las instalaciones actuales con 2 turbinas a vapor de una potencia efectiva aproximada de 40 MW cada una.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Instalaci\xF3n de 4 turbinas a gas SGT 800 de una potencia energ\xE9tica de 40 MW cada una y dos 2 turbinas a vapor con una potencia efectiva aproximada de 40 MW cada una.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Ejecuci\xF3n de obras civiles para el \xE1rea de generaci\xF3n y subestaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Ejecuci\xF3n de obras civiles para la construcci\xF3n de tres lagunas de almacenamiento y captaci\xF3n de agua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Ejecuci\xF3n de obras civiles complementarias de acuerdo a requerimientos de la ingenier\xEDa del proyecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Instalaci\xF3n de 4 turbinas a vapor y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Instalaci\xF3n de 4 turbinas a gas y componentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Instalaci\xF3n de 8 transformadores de potencia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Perforaci\xF3n de 3 pozos de agua.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Avance F\xEDsico");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Al 31 de diciembre de 2019, la ejecuci\xF3n f\xEDsica ponderada del proyecto Ciclos Combinados de la Planta Termoel\xE9ctrica Warnes es de 98.94% de acuerdo al siguiente detalle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "table", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "thead", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "DETALLE DE EQUIPOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "EN PROCESO DE FABRICACI\xD3N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "EN TR\xC1NSITO MAR\xCDTIMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "EN TR\xC1NSITO TERRESTRE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "EN SITIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Turbinas de Gas (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "TG31-32-41-42");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Turbinas de Vapor (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "TTV20-30-40-10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Generadores (9)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "G31-32-30-40-41-42-10-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Tr\xE1nsformadores (8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "TF31-32-41-42-30-40-10-20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Calderos HRSG (8)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "HR5G41-42-31-32-11-12-13");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Torres de Refrigeraci\xF3n (4)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "TR10-20-30-40");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n\n.solution-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0rem;\n  font-size: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9jY3B0d2FyL2NjcHR3YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NjcHR3YXIvY2NwdHdhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jY3B0d2FyL2NjcHR3YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUgdGQsIC50YWJsZSB0aCB7XG4gICAgcGFkZGluZzogLjI1cmVtO1xuICAgXG59XG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcmVtO1xuICAgIGZvbnQtc2l6ZTogMC41ZW07XG59IiwiLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICBwYWRkaW5nOiAwLjI1cmVtO1xufVxuXG4uc29sdXRpb24tY29udGVudCB0YWJsZSBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHJlbTtcbiAgZm9udC1zaXplOiAwLjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CcptwarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ccptwar',
          templateUrl: './ccptwar.component.html',
          styleUrls: ['./ccptwar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ciclos/ciclos.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/ciclos/ciclos.component.ts ***!
    \**************************************************/

  /*! exports provided: CiclosComponent */

  /***/
  function srcAppPagesCiclosCiclosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CiclosComponent", function () {
      return CiclosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CiclosComponent =
    /*#__PURE__*/
    function () {
      function CiclosComponent() {
        _classCallCheck(this, CiclosComponent);
      }

      _createClass(CiclosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CiclosComponent;
    }();

    CiclosComponent.ɵfac = function CiclosComponent_Factory(t) {
      return new (t || CiclosComponent)();
    };

    CiclosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CiclosComponent,
      selectors: [["app-ciclos"]],
      decls: 82,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row", "project-col"], [1, "col-lg-6"], [1, "third-preview"], ["src", "assets/img/imagenes/cc2.jpg", "alt", ""], [1, "ab-details"], [1, "container-fluid", "alt-counter-parallax", "agriculture-parallax"], [1, "row"], [1, "col-lg-3"], [1, "counter-statistics"], [1, "counter"], ["src", "assets/img/imagenes/generador.jpg", "alt", ""]],
      template: function CiclosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyectos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ciclo Combinado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ciclo Combinado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\xBFQue es un Ciclo Combinado?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Con el fin me mejorar la eficiencia en la generaci\xF3n, se aprovecha el calor en el escape de la turbina a gas para calentar agua y generar vapor.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Este vapor es usado para hacer girar una turbina a vapor la cual transmite ese movimiento a un generador el\xE9ctrico. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Para optimizar la calidad y cantidad de vapor se utiliza una segunda turbina a gas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "La combinaci\xF3n de dos fuentes de generaci\xF3n (gas y vapor) la llamamos ciclo combinado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "320 Mw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TERMOEL\xC9CTRICA DEL SUR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Generaci\xF3n de energ\xEDa electrica de las planta con ciclos combinados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "320 Mw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "TERMOEL\xC9CTRICA WARNES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Generaci\xF3n de energ\xEDa electrica de las planta con ciclos combinados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "380 Mw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "TERMOEL\xC9CTRICA ENTRE RIOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Generaci\xF3n de energ\xEDa electrica de las planta con ciclos combinados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "1020 Mw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "TOTAL ENTREGADO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Generaci\xF3n de energ\xEDa el\xE9ctrica de las plantas con ciclos combinados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "\xBFQue es un Generador termoel\xE9ctrico?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Es un sistema que permite la conversi\xF3n de energ\xEDa calor\xEDfica, proporcionada en ese caso por el gas natural a energ\xEDa el\xE9ctrica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Para este fin se utiliza un turbina de tipo industrial, la cual transforma la energ\xEDa calor\xEDfica del gas en energ\xEDa mec\xE1nica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Generador el\xE9ctrico, es el encargado de convertir esta energ\xEDa mec\xE1nica a energ\xEDa el\xE9ctrica, usando el principio de el electromagnetismo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpY2xvcy9jaWNsb3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ciclos',
          templateUrl: './ciclos.component.html',
          styleUrls: ['./ciclos.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppPagesContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 67,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "col-lg-6"], [1, "contact-info"], [1, "span-contact"], [1, "contact-icon"], [1, "fas", "fa-phone"], [1, "fas", "fa-envelope"], [1, "fas", "fa-map"], [1, "col-lg-6", "space-break"], [1, "contact-form"], ["id", "contact-form", "method", "post", "action", "contact.php"], [1, "messages"], [1, "controls"], [1, "col-md-12"], [1, "form-group"], ["id", "form_name", "type", "text", "name", "name", "placeholder", "Nombre", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], [1, "help-block", "with-errors"], ["id", "form_email", "type", "email", "name", "email", "placeholder", "Correo electr\xF3nico", "required", "required", "data-error", "Es requerido un correo v\xE1lido.", 1, "form-control", "customize"], ["id", "form_phone", "type", "tel", "name", "phone", "placeholder", "Por favor, ingrese su tel\xE9fono", 1, "form-control", "customize"], ["id", "form_message", "name", "message", "placeholder", "Su mensaje", "rows", "5", "required", "required", "data-error", "Por favor, dejenos un mensaje.", 1, "form-control", "customize"], ["type", "submit", "value", "Enviar mensaje", 1, "btn", "btn-custom"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d60983.578827044614!2d-64.57796168039854!3d-17.195790127480052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-17.1989584!2d-64.5354748!4m3!3m2!1d-17.200236999999998!2d-64.51837139999999!5e1!3m2!1ses!2sbo!4v1518643880914", 1, "map-iframe"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ende Andina ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Contactar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contactar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contacta con nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nuestra empresa est\xE1 a tu servicio, env\xEDanos tus opiniones a trav\xE9s este formulario de contacto y responderemos tus preguntas y sugerencias.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\xA0(591-4) 466 4001 / 4123820 - Fax: 4664063");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contacto@endeandina.bo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Av. Ecol\xF3gica N\xB0 88, Pasaje Villa Gardenias N\xB0 40 - Tiquipaya");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/convocatorias/convocatorias.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/convocatorias/convocatorias.component.ts ***!
    \****************************************************************/

  /*! exports provided: ConvocatoriasComponent */

  /***/
  function srcAppPagesConvocatoriasConvocatoriasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvocatoriasComponent", function () {
      return ConvocatoriasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _pipes_conv_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../pipes/conv-filter.pipe */
    "./src/app/pipes/conv-filter.pipe.ts");
    /* harmony import */


    var _services_convocatorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/convocatorias.service */
    "./src/app/services/convocatorias.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/docs-filter.pipe */
    "./src/app/pipes/docs-filter.pipe.ts");

    function ConvocatoriasComponent_article_43_h2_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reuni\xF3n de Aclaracion:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConvocatoriasComponent_article_43_p_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, doc_r25.fecha_consultas), "");
      }
    }

    function ConvocatoriasComponent_article_43_h2_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Fecha de presentaci\xF3n de Propuestas:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ConvocatoriasComponent_article_43_p_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, doc_r25.fecha_presentacion), "");
      }
    }

    function ConvocatoriasComponent_article_43_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvocatoriasComponent_article_43_div_21_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var file_r33 = ctx.$implicit;

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.downloadPdf(file_r33.sfile, file_r33.titulo);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var file_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r33.titulo, " ");
      }
    }

    function ConvocatoriasComponent_article_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inicio de Proceso");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConvocatoriasComponent_article_43_h2_8_Template, 2, 0, "h2", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConvocatoriasComponent_article_43_p_9_Template, 3, 3, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConvocatoriasComponent_article_43_h2_10_Template, 2, 0, "h2", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConvocatoriasComponent_article_43_p_11_Template, 3, 3, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConvocatoriasComponent_article_43_div_21_Template, 4, 1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r25 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, doc_r25.fecha_invitacion), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r25.fecha_consultas > doc_r25.fecha_invitacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r25.fecha_consultas > doc_r25.fecha_invitacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r25.fecha_presentacion > doc_r25.fecha_invitacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", doc_r25.fecha_presentacion > doc_r25.fecha_invitacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r25.correo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r25.titulo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r25.estado);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", doc_r25.docs);
      }
    }

    function ConvocatoriasComponent_div_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No se encontraron documentos para esta secci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        active: a0
      };
    };

    var FileSaver = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");

    var ConvocatoriasComponent =
    /*#__PURE__*/
    function () {
      function ConvocatoriasComponent(convocatoriasService) {
        _classCallCheck(this, ConvocatoriasComponent);

        this.convocatoriasService = convocatoriasService;
        this.type = 'Vigente';
        this.title = 'Vigente';
        this.loading = true;
        this.documents = [];
        this.total = 0;
        this.to = 0;
        this.ruta = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices;
        this.filterConv = new _pipes_conv_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["ConvFilterPipe"]();
        this.getConvocatories();
      }

      _createClass(ConvocatoriasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // getdocuments() {
        //   this.loading = true;
        //   this.filterDocuments( this.to)
        //   .subscribe( (result: any) => {
        //     this.documents.push(...result);
        //     this.loading = false;
        //   });
        // }

      }, {
        key: "getConvocatories",
        value: function getConvocatories() {
          var _this2 = this;

          this.loading = true;
          this.convocatoriasService.getConvocatories().subscribe(function (result) {
            _this2.documents = result;
            _this2.loading = false;
          });
        }
      }, {
        key: "downloadPdf",
        value: function downloadPdf(pdfUrl, pdfName) {
          var url = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices + '/file/docs/' + pdfUrl;
          FileSaver.saveAs(url, pdfName);
        }
      }, {
        key: "showDocumets",
        value: function showDocumets(selType) {
          this.title = selType + 's';
          this.type = selType; // console.log('presiono', selType);
        }
      }]);

      return ConvocatoriasComponent;
    }();

    ConvocatoriasComponent.ɵfac = function ConvocatoriasComponent_Factory(t) {
      return new (t || ConvocatoriasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_convocatorias_service__WEBPACK_IMPORTED_MODULE_3__["ConvocatoriasService"]));
    };

    ConvocatoriasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConvocatoriasComponent,
      selectors: [["app-convocatorias"]],
      decls: 47,
      vars: 19,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [1, "form-group", "blog-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "sidebar-list"], [1, "list-group"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", 3, "ngClass", "click"], [1, "badge"], [1, "fas", "fa-chevron-right"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-content"], ["data-view", "list-view", 1, "download-cards"], ["class", "download-card", 4, "ngFor", "ngForOf"], ["class", "alert alert-warning", "role", "alert", 4, "ngIf"], [1, "download-card"], [1, "download-card__icon-box"], [1, "download-dates"], [1, "download-card__content-box__catagory"], [1, "download-card__content-box__description"], ["class", "download-card__content-box__catagory", 4, "ngIf"], ["class", "download-card__content-box__description", 4, "ngIf"], [1, "download-card__content-box"], [1, "content"], [1, "download-card__content-box__title"], [1, "lista-files"], ["class", "list-group", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "download", "", 1, "list-group-item", 3, "click"], [1, "fas", "fa-file-pdf"], ["role", "alert", 1, "alert", "alert-warning"]],
      template: function ConvocatoriasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gesti\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Filtrar convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ConvocatoriasComponent_Template_input_ngModelChange_23_listener($event) {
            return ctx.filterDoc = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvocatoriasComponent_Template_a_click_26_listener() {
            return ctx.showDocumets("Vigente");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Convocatorias Vigentes ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvocatoriasComponent_Template_a_click_30_listener() {
            return ctx.showDocumets("Adjudicado");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Convocatorias Adjudicados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConvocatoriasComponent_Template_a_click_34_listener() {
            return ctx.showDocumets("Desierto");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Convocatorias desiertos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ConvocatoriasComponent_article_43_Template, 22, 11, "article", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "docsFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "convFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ConvocatoriasComponent_div_46_Template, 3, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterDoc);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.type == "Vigente"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.type == "Adjudicado"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.type == "Desierto"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Convocatorias ", ctx.title, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 10, ctx.documents, ctx.type), ctx.filterDoc));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents == null);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      pipes: [_pipes_docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DocsFilterPipe"], _pipes_conv_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["ConvFilterPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.clearfix[_ngcontent-%COMP%] {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.download-cards[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.download-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  background: #fbfbfb;\n  position: relative;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 1em;\n  box-shadow: 0 1px 25px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06);\n  border-bottom: 1px solid #d2d2d2;\n  border-left: 1px solid #dadada;\n  min-height: 350px;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%] {\n    float: left;\n    width: calc( 50% - 2em );\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(3) {\n    clear: both;\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(4) {\n    clear: initial;\n  }\n}\n@media (min-width: 1000px) {\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%] {\n    width: calc( (100% / 3) - 2em );\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(3) {\n    clear: initial;\n  }\n  .download-cards[data-view=grid-view][_ngcontent-%COMP%]   .download-card[_ngcontent-%COMP%]:nth-child(4) {\n    clear: both;\n  }\n}\n.download-card__icon-box[_ngcontent-%COMP%] {\n  background: #f1f1f1;\n  padding: 1em;\n}\n@media (min-width: 700px) {\n  .download-card__icon-box[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.download-card__icon-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  max-width: 200px;\n  margin: 0 auto;\n}\n.download-card__icon-box[_ngcontent-%COMP%]   .download-dates[_ngcontent-%COMP%] {\n  margin-top: 2em;\n  text-align: right;\n  display: block;\n  clear: both;\n  width: 100%;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=list-view][_ngcontent-%COMP%]   .download-card__icon-box[_ngcontent-%COMP%] {\n    width: 170px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    border-right: 1px solid #e6e6e6;\n  }\n}\n.download-card__content-box[_ngcontent-%COMP%] {\n  padding: 2em 2em 3em;\n  flex: 1;\n}\n@media (min-width: 700px) {\n  .download-cards[data-view=list-view][_ngcontent-%COMP%]   .download-card__content-box[_ngcontent-%COMP%] {\n    padding-left: calc(160px + 2em);\n  }\n}\n.download-card__content-box__catagory[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: 10px;\n  margin: 0 0 2em;\n}\n.download-card__content-box__catagory[_ngcontent-%COMP%]::before {\n  content: \"| \";\n  color: #94bc20;\n}\n.download-card__content-box__title[_ngcontent-%COMP%] {\n  line-height: 1;\n  margin: 0 0 0.5em;\n  font-size: 18px;\n}\n.download-card__content-box__description[_ngcontent-%COMP%] {\n  line-height: 1.5;\n  padding: 0;\n  margin: 0 0 1em;\n  clear: both;\n  color: #929292;\n  font-size: 16px;\n}\n.download-card__content-box[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2em;\n  margin: 0;\n  color: #94bc20;\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 13px;\n}\n.dc-view-switcher[_ngcontent-%COMP%] {\n  display: none;\n  margin: 1em;\n  text-align: right;\n}\n@media (min-width: 700px) {\n  .dc-view-switcher[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  font-family: \"fontAwesome\";\n  background-color: transparent;\n  background-repeat: no-repeat;\n  background-position: 0px 0px;\n  border: none;\n  cursor: pointer;\n  font-size: 1.5em;\n  vertical-align: middle;\n  color: gray;\n  opacity: 0.3;\n  outline: none;\n  transition: opacity 0.4s ease;\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger=list-view][_ngcontent-%COMP%]::before {\n  content: \"\uF00B\";\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger=grid-view][_ngcontent-%COMP%]::before {\n  content: \"\uF009\";\n}\n.dc-view-switcher[_ngcontent-%COMP%]    > button[data-trigger].active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\ntable[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  width: 100%;\n  border-collapse: collapse;\n  margin: 10px auto;\n}\n.table-fixed[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%] {\n  height: 120px;\n  overflow-y: auto;\n  width: 100%;\n}\n\ntr[_ngcontent-%COMP%]:nth-of-type(odd) {\n  background: #eee;\n}\nth[_ngcontent-%COMP%] {\n  background: #11505d;\n  color: white;\n  font-weight: 500;\n}\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ccc;\n  text-align: left;\n  font-size: 15px;\n}\ntd[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  text-transform: capitalize;\n}\n\n@media only screen and (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {\n  table[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  \n  table[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  \n  thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    position: absolute;\n    top: -9999px;\n    left: -9999px;\n  }\n\n  tr[_ngcontent-%COMP%] {\n    border: 1px solid #ccc;\n  }\n\n  td[_ngcontent-%COMP%] {\n    \n    border: none;\n    border-bottom: 1px solid #eee;\n    position: relative;\n    padding-left: 50%;\n  }\n\n  td[_ngcontent-%COMP%]:before {\n    \n    position: absolute;\n    \n    top: 6px;\n    left: 6px;\n    width: 45%;\n    padding-right: 10px;\n    white-space: nowrap;\n    \n    content: attr(data-column);\n    color: #000;\n    font-weight: bold;\n  }\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px auto;\n  font-family: \"Poppins\", sans-serif;\n}\n.form-control[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n.input-group-append[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n}\n\n.has-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  padding-left: 2.375rem;\n}\n.has-search[_ngcontent-%COMP%]   .form-control-feedback[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: block;\n  width: 2.375rem;\n  height: 2.375rem;\n  line-height: 2.375rem;\n  text-align: center;\n  pointer-events: none;\n  color: #aaa;\n}\n.lista[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.lista[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n}\n.lista-files[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  padding: 10px 20px;\n  margin-bottom: -1px;\n  background-color: #F5F5F5;\n  border: none;\n  border-radius: 0px;\n  margin-bottom: 5px;\n  transition: 0.3s ease;\n  cursor: pointer;\n  text-align: left;\n  color: #333;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  font-size: 15px;\n}\n.lista-files[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover {\n  background-color: #11505d;\n  color: #FFF;\n}\n.lista-files[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.lista-files[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: #94bc20;\n  transition: 0.3s ease;\n}\n.lista-files[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover   .fas[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udm9jYXRvcmlhcy9jb252b2NhdG9yaWFzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9wcm95ZWN0b3MvRU5ERV9BTkRJTkEvU2l0ZV9FQS9zcmMvYXBwL3BhZ2VzL2NvbnZvY2F0b3JpYXMvY29udm9jYXRvcmlhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNpQmhCO0VBQUksc0JBQUE7QURkSjtBQ2dCQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBRGJGO0FDa0JBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FEZkY7QUNrQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlFQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FEaEJGO0FDcEJFO0VBd0NBO0lBR0ksV0FBQTtJQUNBLHdCQUFBO0VEbkJKO0VDb0JJO0lBQWdCLFdBQUE7RURqQnBCO0VDa0JJO0lBQWdCLGNBQUE7RURmcEI7QUFDRjtBQ3RDRTtFQThDQTtJQVVJLCtCQUFBO0VEZEo7RUNlSTtJQUFnQixjQUFBO0VEWnBCO0VDYUk7SUFBZ0IsV0FBQTtFRFZwQjtBQUNGO0FDYUU7RUFHRSxtQkFBQTtFQUNBLFlBQUE7QURiSjtBQy9DRTtFQXdEQTtJQU91Qix1QkFBQTtFRFp2QjtBQUNGO0FDYUk7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEWE47QUNjSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBRFpOO0FDaEVFO0VBZ0ZFO0lBRUksWUFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0lBQ0EsU0FBQTtJQUNBLCtCQUFBO0VEZE47QUFDRjtBQ2tCRTtFQUNFLG9CQUFBO0VBQ0EsT0FBQTtBRGhCSjtBQy9FRTtFQWtHRTtJQUN1QiwrQkFBQTtFRGhCekI7QUFDRjtBQ2tCSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBRGhCTjtBQ2lCTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FEZlI7QUNtQkk7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEakJOO0FDbUJJO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGpCTjtBQ21CSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FEakJOO0FDdUJBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBRHBCRjtBQzVIRTtFQTZJRjtJQU1JLGNBQUE7RURuQkY7QUFDRjtBQ3FCRTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QURuQko7QUNxQmtDO0VBQVksWUFBQTtBRGxCOUM7QUNtQmtDO0VBQVksWUFBQTtBRGhCOUM7QUNpQkk7RUFBeUIsVUFBQTtBRGQ3QjtBQ3VCQTtFQUNFLGtDQUFBO0VBQ0QsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QURwQkQ7QUN5Qkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FEdEJOO0FDNEJBLG1CQUFBO0FBQ0E7RUFDQyxnQkFBQTtBRHpCRDtBQzRCQTtFQUNDLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FEekJEO0FDNEJBO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEekJEO0FDNEJFO0VBQ0UsMEJBQUE7RUFDQSwwQkFBQTtBRHpCSjtBQzRCQTs7OztDQUFBO0FBS0E7RUFJQztJQUNHLFdBQUE7RUQ1QkY7O0VDK0JELDhDQUFBO0VBQ0E7SUFDQyxjQUFBO0VENUJBOztFQytCRCxtRUFBQTtFQUNBO0lBQ0Msa0JBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFRDVCQTs7RUMrQkQ7SUFBSyxzQkFBQTtFRDNCSjs7RUM2QkQ7SUFDQyx5QkFBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7RUQxQkE7O0VDNkJEO0lBQ0MsNEJBQUE7SUFDQSxrQkFBQTtJQUNBLGtDQUFBO0lBQ0EsUUFBQTtJQUNBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMEJBQUE7SUFFQSxXQUFBO0lBQ0EsaUJBQUE7RUQzQkE7QUFDRjtBQ2tDQSx1Q0FBQTtBQUVBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QURqQ0Y7QUNxQ0E7RUFDRSwwQkFBQTtBRGxDRjtBQ29DQTtFQUNFLDBCQUFBO0FEakNGO0FDbUNBLDRDQUFBO0FBRUE7RUFDRSxzQkFBQTtBRGpDRjtBQ29DQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEakNGO0FDdUNBO0VBQ0UsZ0JBQUE7QURwQ0Y7QUN1Q0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QURwQ0Y7QUN1Q0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FEcENGO0FDdUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FEcENGO0FDdUNBO0VBQ0UsZ0JBQUE7QURwQ0Y7QUN1Q0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBRHBDRjtBQ3VDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBRHBDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnZvY2F0b3JpYXMvY29udm9jYXRvcmlhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uY2xlYXJmaXgge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi5kb3dubG9hZC1jYXJkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5kb3dubG9hZC1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGNhbGMoIDUwJSAtIDJlbSApO1xuICB9XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZDpudGgtY2hpbGQoMykge1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZDpudGgtY2hpbGQoNCkge1xuICAgIGNsZWFyOiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9Z3JpZC12aWV3XSAuZG93bmxvYWQtY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoICgxMDAlIC8gMykgLSAyZW0gKTtcbiAgfVxuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWdyaWQtdmlld10gLmRvd25sb2FkLWNhcmQ6bnRoLWNoaWxkKDMpIHtcbiAgICBjbGVhcjogaW5pdGlhbDtcbiAgfVxuICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PWdyaWQtdmlld10gLmRvd25sb2FkLWNhcmQ6bnRoLWNoaWxkKDQpIHtcbiAgICBjbGVhcjogYm90aDtcbiAgfVxufVxuLmRvd25sb2FkLWNhcmRfX2ljb24tYm94IHtcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcbiAgcGFkZGluZzogMWVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkX19pY29uLWJveCB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5kb3dubG9hZC1jYXJkX19pY29uLWJveCBpbWcge1xuICB3aWR0aDogNTAlO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5kb3dubG9hZC1jYXJkX19pY29uLWJveCAuZG93bmxvYWQtZGF0ZXMge1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9bGlzdC12aWV3XSAuZG93bmxvYWQtY2FyZF9faWNvbi1ib3gge1xuICAgIHdpZHRoOiAxNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIH1cbn1cbi5kb3dubG9hZC1jYXJkX19jb250ZW50LWJveCB7XG4gIHBhZGRpbmc6IDJlbSAyZW0gM2VtO1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9bGlzdC12aWV3XSAuZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3gge1xuICAgIHBhZGRpbmctbGVmdDogY2FsYygxNjBweCArIDJlbSk7XG4gIH1cbn1cbi5kb3dubG9hZC1jYXJkX19jb250ZW50LWJveF9fY2F0YWdvcnkge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbn1cbi5kb3dubG9hZC1jYXJkX19jb250ZW50LWJveF9fY2F0YWdvcnk6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwifCBcIjtcbiAgY29sb3I6ICM5NGJjMjA7XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3hfX3RpdGxlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMCAwIDAuNWVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZG93bmxvYWQtY2FyZF9fY29udGVudC1ib3hfX2Rlc2NyaXB0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwIDAgMWVtO1xuICBjbGVhcjogYm90aDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5kb3dubG9hZC1jYXJkX19jb250ZW50LWJveCAuYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJlbTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzk0YmMyMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZGMtdmlldy1zd2l0Y2hlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG1hcmdpbjogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MDBweCkge1xuICAuZGMtdmlldy1zd2l0Y2hlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi5kYy12aWV3LXN3aXRjaGVyID4gYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiZm9udEF3ZXNvbWVcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEuNWVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogZ3JheTtcbiAgb3BhY2l0eTogMC4zO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZTtcbn1cbi5kYy12aWV3LXN3aXRjaGVyID4gYnV0dG9uW2RhdGEtdHJpZ2dlcj1saXN0LXZpZXddOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu+Ai1wiO1xufVxuLmRjLXZpZXctc3dpdGNoZXIgPiBidXR0b25bZGF0YS10cmlnZ2VyPWdyaWQtdmlld106OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CJXCI7XG59XG4uZGMtdmlldy1zd2l0Y2hlciA+IGJ1dHRvbltkYXRhLXRyaWdnZXJdLmFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbi50YWJsZS1maXhlZCB0Ym9keSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBaZWJyYSBzdHJpcGluZyAqL1xudHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZDogIzExNTA1ZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG50ZCwgdGgge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbnRkIGEuYnRuIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4vKiBcbk1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcblRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcbmFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cbiovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2MHB4KSwgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkge1xuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvKiBGb3JjZSB0YWJsZSB0byBub3QgYmUgbGlrZSB0YWJsZXMgYW55bW9yZSAqL1xuICB0YWJsZSwgdGhlYWQsIHRib2R5LCB0aCwgdGQsIHRyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8qIEhpZGUgdGFibGUgaGVhZGVycyAoYnV0IG5vdCBkaXNwbGF5OiBub25lOywgZm9yIGFjY2Vzc2liaWxpdHkpICovXG4gIHRoZWFkIHRyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtOTk5OXB4O1xuICAgIGxlZnQ6IC05OTk5cHg7XG4gIH1cblxuICB0ciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxuXG4gIHRkIHtcbiAgICAvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwJTtcbiAgfVxuXG4gIHRkOmJlZm9yZSB7XG4gICAgLyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cbiAgICB0b3A6IDZweDtcbiAgICBsZWZ0OiA2cHg7XG4gICAgd2lkdGg6IDQ1JTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLyogTGFiZWwgdGhlIGRhdGEgKi9cbiAgICBjb250ZW50OiBhdHRyKGRhdGEtY29sdW1uKTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuLyogU3R5bGVzIGZvciB3cmFwcGluZyB0aGUgc2VhcmNoIGJveCAqL1xuLm1haW4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1MHB4IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXQtZ3JvdXAtYXBwZW5kIGJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4vKiBCb290c3RyYXAgNCB0ZXh0IGlucHV0IHdpdGggc2VhcmNoIGljb24gKi9cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xufVxuXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuMzc1cmVtO1xuICBoZWlnaHQ6IDIuMzc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4zNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG4ubGlzdGEge1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubGlzdGEgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmxpc3RhLWZpbGVzIC5saXN0LWdyb3VwLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5saXN0YS1maWxlcyAubGlzdC1ncm91cC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTA1ZDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5saXN0YS1maWxlcyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5saXN0YS1maWxlcyAubGlzdC1ncm91cC1pdGVtIC5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjOTRiYzIwO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG59XG5cbi5saXN0YS1maWxlcyAubGlzdC1ncm91cC1pdGVtOmhvdmVyIC5mYXMge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjRkZGO1xufSIsIiRkZy1uYXJyb3c6IDcwMHB4O1xuJGRnLXdpZGU6IDEwMDBweDtcblxuQG1peGluIGRnLXdpZGUge1xuICBAbWVkaWEgKG1pbi13aWR0aDogI3skZGctd2lkZX0pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gZGctbmFycm93IHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGRnLW5hcnJvd30pIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5cblxuKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmNsZWFyZml4IHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBjbGVhcjogYm90aDtcbn1cblxuXG5cbi5kb3dubG9hZC1jYXJkcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5kb3dubG9hZC1jYXJkIHsgIFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICB3aWR0aDogY2FsYygxMDAlIC0gMmVtKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmYmZiZmI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDJkMmQyO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkYWRhZGE7XG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xuLy8gICBtYXJnaW46IDAgMWVtIDJlbSAxZW07XG4gIFxuICAvLyAtLSBDYXJkIGluIEdyaWQgVmlldyBcbiAgLmRvd25sb2FkLWNhcmRzW2RhdGEtdmlldz0nZ3JpZC12aWV3J10gJiB7XG4gICAgXG4gICAgQGluY2x1ZGUgZGctbmFycm93IHsgXG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiBjYWxjKCA1MCUgLSAyZW0gKTtcbiAgICAgICY6bnRoLWNoaWxkKDMpeyBjbGVhcjogYm90aDsgfVxuICAgICAgJjpudGgtY2hpbGQoNCl7IGNsZWFyOiBpbml0aWFsOyB9XG4gICAgfVxuICAgIFxuICAgIEBpbmNsdWRlIGRnLXdpZGUgeyBcbiAgICAgIHdpZHRoOiBjYWxjKCAoMTAwJSAvIDMpIC0gMmVtICk7XG4gICAgICAmOm50aC1jaGlsZCgzKXsgY2xlYXI6IGluaXRpYWw7IH1cbiAgICAgICY6bnRoLWNoaWxkKDQpeyBjbGVhcjogYm90aDsgfVxuICAgIH1cbiAgfSAvLyAtLSBFbmQgR3JpZCBWaWV3XG4gIFxuICAmX19pY29uLWJveCB7ICAgXG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBAaW5jbHVkZSBkZy1uYXJyb3cgeyBqdXN0aWZ5LWNvbnRlbnQgOmNlbnRlcjt9XG4gICAgXG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXgtd2lkdGg6IDIwMHB4OyAgIFxuICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLWRhdGVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjbGVhcjogYm90aDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvLyAtLS0gSWNvbiBCb3ggaW4gTGlzdCBWaWV3IFxuICAgIC5kb3dubG9hZC1jYXJkc1tkYXRhLXZpZXc9J2xpc3QtdmlldyddICYgeyAgICBcbiAgICAgIEBpbmNsdWRlIGRnLW5hcnJvdyB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyAgICBcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgfSAgXG4gICAgfSAvLyAtLS0gRW5kIEljb24gQm94IGluIExpc3QgVmlldyAgIFxuICB9XG4gXG4gICZfX2NvbnRlbnQtYm94IHsgIFxuICAgIHBhZGRpbmc6IDJlbSAyZW0gM2VtOyAgXG4gICAgZmxleDogMTtcbiAgICBcbiAgICAvLyAtLSBDb250ZW50IEJveCBpbiBMaXN0IFZpZXdcbiAgICAuZG93bmxvYWQtY2FyZHNbZGF0YS12aWV3PVwibGlzdC12aWV3XCJdICYge1xuICAgICAgQGluY2x1ZGUgZGctbmFycm93IHsgcGFkZGluZy1sZWZ0OiBjYWxjKDE2MHB4ICsgMmVtKTsgfVxuICAgIH0gLy8gLS0gRW5kIENvbnRlbnQgQm94IGluIExpc3QgVmlld1xuICAgIFxuICAgICZfX2NhdGFnb3J5IHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgbWFyZ2luOiAwIDAgMmVtOyAgIFxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ3wgJztcbiAgICAgICAgY29sb3I6ICM5NGJjMjA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBtYXJnaW46IDAgMCAuNWVtO1xuICAgICAgZm9udC1zaXplOiAxOHB4O31cbiAgICBcbiAgICAmX19kZXNjcmlwdGlvbiB7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMCAwIDFlbTtcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgY29sb3I6ICM5MjkyOTI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfSBcbiAgICAuYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgYm90dG9tOjJlbTsgICBcbiAgICAgIG1hcmdpbjowO1xuICAgICAgY29sb3I6ICM5NGJjMjA7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cbiAgfVxufVxuXG5cbi5kYy12aWV3LXN3aXRjaGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luOiAxZW07XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBcbiAgQGluY2x1ZGUgZGctbmFycm93IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfSBcbiAgXG4gICYgPiBidXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiAnZm9udEF3ZXNvbWUnOyAgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7IFxuICAgIGJvcmRlcjogbm9uZTsgICAgXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgXG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjRzIGVhc2U7XG5cbiAgICAmW2RhdGEtdHJpZ2dlcj1cImxpc3Qtdmlld1wiXSB7ICY6OmJlZm9yZSB7IGNvbnRlbnQ6IFwiXFxmMDBiXCI7IH0gfVxuICAgICZbZGF0YS10cmlnZ2VyPVwiZ3JpZC12aWV3XCJdIHsgJjo6YmVmb3JlIHsgY29udGVudDogXCJcXGYwMDlcIjsgfSB9XG4gICAgJltkYXRhLXRyaWdnZXJdLmFjdGl2ZSB7IG9wYWNpdHk6IDE7IH1cbiAgXG4gIH1cbn1cblxuXG5cbi8vdGFibGEgXG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcblx0d2lkdGg6IDEwMCU7IFxuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyBcblx0bWFyZ2luOjEwcHggYXV0bztcblx0fVxuXG4gIC50YWJsZS1maXhlZHtcbiBcbiAgICB0Ym9keXtcbiAgICAgIGhlaWdodDoxMjBweDtcbiAgICAgIG92ZXJmbG93LXk6YXV0bztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIFxuICAgIFxuICB9XG5cbi8qIFplYnJhIHN0cmlwaW5nICovXG50cjpudGgtb2YtdHlwZShvZGQpIHsgXG5cdGJhY2tncm91bmQ6ICNlZWU7IFxuXHR9XG5cbnRoIHsgXG5cdGJhY2tncm91bmQ6ICMxMTUwNWQ7IFxuXHRjb2xvcjogd2hpdGU7IFxuXHRmb250LXdlaWdodDogNTAwOyBcblx0fVxuXG50ZCwgdGggeyBcblx0cGFkZGluZzogMTBweDsgXG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuXHR0ZXh0LWFsaWduOiBsZWZ0OyBcblx0Zm9udC1zaXplOiAxNXB4O1xuICB9XG4gIFxuICB0ZCBhLmJ0biB7XG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgfVxuXG4vKiBcbk1heCB3aWR0aCBiZWZvcmUgdGhpcyBQQVJUSUNVTEFSIHRhYmxlIGdldHMgbmFzdHlcblRoaXMgcXVlcnkgd2lsbCB0YWtlIGVmZmVjdCBmb3IgYW55IHNjcmVlbiBzbWFsbGVyIHRoYW4gNzYwcHhcbmFuZCBhbHNvIGlQYWRzIHNwZWNpZmljYWxseS5cbiovXG5AbWVkaWEgXG5vbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzYwcHgpLFxuKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgIHtcblxuXHR0YWJsZSB7IFxuXHQgIFx0d2lkdGg6IDEwMCU7IFxuXHR9XG5cblx0LyogRm9yY2UgdGFibGUgdG8gbm90IGJlIGxpa2UgdGFibGVzIGFueW1vcmUgKi9cblx0dGFibGUsIHRoZWFkLCB0Ym9keSwgdGgsIHRkLCB0ciB7IFxuXHRcdGRpc3BsYXk6IGJsb2NrOyBcblx0fVxuXHRcblx0LyogSGlkZSB0YWJsZSBoZWFkZXJzIChidXQgbm90IGRpc3BsYXk6IG5vbmU7LCBmb3IgYWNjZXNzaWJpbGl0eSkgKi9cblx0dGhlYWQgdHIgeyBcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiAtOTk5OXB4O1xuXHRcdGxlZnQ6IC05OTk5cHg7XG5cdH1cblx0XG5cdHRyIHsgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgfVxuXHRcblx0dGQgeyBcblx0XHQvKiBCZWhhdmUgIGxpa2UgYSBcInJvd1wiICovXG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyBcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0cGFkZGluZy1sZWZ0OiA1MCU7IFxuXHR9XG5cblx0dGQ6YmVmb3JlIHsgXG5cdFx0LyogTm93IGxpa2UgYSB0YWJsZSBoZWFkZXIgKi9cblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0LyogVG9wL2xlZnQgdmFsdWVzIG1pbWljIHBhZGRpbmcgKi9cblx0XHR0b3A6IDZweDtcblx0XHRsZWZ0OiA2cHg7XG5cdFx0d2lkdGg6IDQ1JTsgXG5cdFx0cGFkZGluZy1yaWdodDogMTBweDsgXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0XHQvKiBMYWJlbCB0aGUgZGF0YSAqL1xuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS1jb2x1bW4pO1xuXG5cdFx0Y29sb3I6ICMwMDA7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdH1cblxufVxuXG5cbi8vIHNlYXJjaCBib3hcblxuLyogU3R5bGVzIGZvciB3cmFwcGluZyB0aGUgc2VhcmNoIGJveCAqL1xuXG4ubWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgXG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDE1cHghaW1wb3J0YW50O1xufVxuLmlucHV0LWdyb3VwLWFwcGVuZCBidXR0b24ge1xuICBmb250LXNpemU6IDE1cHghaW1wb3J0YW50O1xufVxuLyogQm9vdHN0cmFwIDQgdGV4dCBpbnB1dCB3aXRoIHNlYXJjaCBpY29uICovXG5cbi5oYXMtc2VhcmNoIC5mb3JtLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDIuMzc1cmVtO1xufVxuXG4uaGFzLXNlYXJjaCAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIuMzc1cmVtO1xuICBoZWlnaHQ6IDIuMzc1cmVtO1xuICBsaW5lLWhlaWdodDogMi4zNzVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjYWFhO1xufVxuXG5cbi8vIGxpc3RhXG5cbi5saXN0YXtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn0gICBcbiAgXG4ubGlzdGEgcHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS42O1xufVxuICBcbi5saXN0YS1maWxlcyAubGlzdC1ncm91cC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbiAgXG4ubGlzdGEtZmlsZXMgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTUwNWQ7XG4gIGNvbG9yOiAjRkZGO1xufSBcblxuLmxpc3RhLWZpbGVze1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuICBcbi5saXN0YS1maWxlcyAubGlzdC1ncm91cC1pdGVtIC5mYXN7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY29sb3I6ICM5NGJjMjA7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn0gICBcbiAgXG4ubGlzdGEtZmlsZXMgLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciAuZmFze1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjRkZGO1xufSBcblxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConvocatoriasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-convocatorias',
          templateUrl: './convocatorias.component.html',
          styleUrls: ['./convocatorias.component.scss']
        }]
      }], function () {
        return [{
          type: _services_convocatorias_service__WEBPACK_IMPORTED_MODULE_3__["ConvocatoriasService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/delsur/delsur.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/delsur/delsur.component.ts ***!
    \**************************************************/

  /*! exports provided: DelsurComponent */

  /***/
  function srcAppPagesDelsurDelsurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DelsurComponent", function () {
      return DelsurComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/proyects/proyects.component */
    "./src/app/components/proyects/proyects.component.ts");

    var DelsurComponent =
    /*#__PURE__*/
    function () {
      function DelsurComponent() {
        _classCallCheck(this, DelsurComponent);

        this.slides = [{
          numbers: 1,
          src: '../../../assets/img/gallery/ptsur/gallery1.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery1.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Ingreso a la planta termoeléctrica',
          url: '#'
        }, {
          numbers: 2,
          src: '../../../assets/img/gallery/ptsur/gallery2.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery2.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Áreas naturales de esparcimiento',
          url: '#'
        }, {
          numbers: 3,
          src: '../../../assets/img/gallery/ptsur/gallery3.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery3.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Ingreso a oficinas de RRHH',
          url: '#'
        }, {
          numbers: 4,
          src: '../../../assets/img/gallery/ptsur/gallery4.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery4.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Vista Lateral de las turbinas',
          url: '#'
        }, {
          numbers: 5,
          src: '../../../assets/img/gallery/ptsur/gallery5.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery5.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Ingreso a la termoeléctrica',
          url: '#'
        }, {
          numbers: 6,
          src: '../../../assets/img/gallery/ptsur/gallery6.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery6.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Pasillo de ingreso a la planta',
          url: '#'
        }, {
          numbers: 7,
          src: '../../../assets/img/gallery/ptsur/gallery7.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery7.jpg',
          title: 'Turbinas Del Sur',
          caption: 'Vista panorámica lateral de la planta',
          url: '#'
        }, {
          numbers: 8,
          src: '../../../assets/img/gallery/ptsur/gallery8.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery8.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Área habitacional',
          url: '#'
        }, {
          numbers: 9,
          src: '../../../assets/img/gallery/ptsur/gallery9.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery9.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Vista de subestación de la planta',
          url: '#'
        }, {
          numbers: 10,
          src: '../../../assets/img/gallery/ptsur/gallery10.jpg',
          thumb: '../../../assets/img/gallery/ptsur/gallery10.jpg',
          title: 'Termoeléctrica Del Sur',
          caption: 'Vista lateral de la planta',
          url: '#'
        }];
      }

      _createClass(DelsurComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DelsurComponent;
    }();

    DelsurComponent.ɵfac = function DelsurComponent_Factory(t) {
      return new (t || DelsurComponent)();
    };

    DelsurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DelsurComponent,
      selectors: [["app-delsur"]],
      decls: 100,
      vars: 2,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-pic"], ["src", "../assets/img/imagenes/ptsur.jpg", "alt", ""], [1, "solution-content", "ab-details"], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], [1, "grid-section"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/pesur.jpg", "alt", ""], [1, "col-lg-6", "layer-content"], [1, "lc-inner"], [1, "order-last", "order-md-6", "col-lg-6", "layer-content"], [1, "order-first", "order-md-6", "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/ptcsur.jpg", "alt", ""], [3, "slides"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d14827.98913389428!2d-63.5674869702347!3d-21.70282587019248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x940928155131de67%3A0x887166df71cc956a!2sYaguacua%2C+Tarija!3m2!1d-21.712583199999997!2d-63.5584809!4m3!3m2!1d-21.69265!2d-63.560399999999994!5e1!3m2!1ses!2sbo!4v1518711702614", 1, "map-iframe"]],
      template: function DelsurComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Planta Termoel\xE9ctrica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Termoel\xE9ctrica Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nuestra planta termoel\xE9ctrica Del Sur consta de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Planta de generaci\xF3n con 4 termogeneradoras marca SIEMENS cada una con una capacidad de 40 MV.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Subestaci\xF3n con 4 transformadores cada uno con una potencia de 50 MVA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gasoducto para suministro de gas a la planta Del Sur.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Campamento de interacci\xF3n social.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Disponibilidad de la Planta Termoel\xE9ctrica Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "En el periodo 2019, la Planta de Generaci\xF3n de Del Sur registr\xF3 los siguientes niveles de disponibilidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "thead", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Planta Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Primer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Segundo Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Tercer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cuarto Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Disponibilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "99,17%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "93,12%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "90,05%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "76,15%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Potencia Efectiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "La capacidad de generaci\xF3n termoel\xE9ctrica a la temperatura media anual del sitio (25\xB0C), reconocida por el CNDC para la Planta Termoel\xE9ctrica del Sur durante el 2019 fue de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "438.56 MW.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "P\xE9rdidas por transformaci\xF3n y consumo propio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Las p\xE9rdidas por transformaci\xF3n y consumo propio de la Planta Termoel\xE9ctrica del Sur para la gesti\xF3n 2019, estuvieron alrededor del 3.29%. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-proyects", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "iframe", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides);
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__["ProyectsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbHN1ci9kZWxzdXIuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DelsurComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-delsur',
          templateUrl: './delsur.component.html',
          styleUrls: ['./delsur.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/denuncia/denuncia.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/denuncia/denuncia.component.ts ***!
    \******************************************************/

  /*! exports provided: DenunciaComponent */

  /***/
  function srcAppPagesDenunciaDenunciaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DenunciaComponent", function () {
      return DenunciaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DenunciaComponent =
    /*#__PURE__*/
    function () {
      function DenunciaComponent() {
        _classCallCheck(this, DenunciaComponent);
      }

      _createClass(DenunciaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DenunciaComponent;
    }();

    DenunciaComponent.ɵfac = function DenunciaComponent_Factory(t) {
      return new (t || DenunciaComponent)();
    };

    DenunciaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DenunciaComponent,
      selectors: [["app-denuncia"]],
      decls: 73,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "col-lg-4"], [1, "contact-info"], [1, "col-lg-8", "space-break"], [1, "contact-form"], ["id", "contact-form", "method", "post", "action", "contact.php"], [1, "messages"], [1, "controls"], [1, "col-md-12"], [1, "form-group"], ["id", "form_name", "type", "text", "name", "name", "placeholder", "Nombres y Apellidos / Raz\xF3n Social / An\xF3nimo:", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], [1, "help-block", "with-errors"], [1, "col-md-6"], ["id", "form_name", "type", "number", "name", "ci", "placeholder", "Documento de identidad", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], ["id", "departamento", 1, "customizeSelect"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["id", "form_email", "type", "email", "name", "email", "placeholder", "Correo electr\xF3nico", "required", "required", "data-error", "Es requerido un correo v\xE1lido.", 1, "form-control", "customize"], ["id", "form_message", "name", "denuncia", "placeholder", "Denuncia", "rows", "5", "required", "required", "data-error", "Por favor, dejenos un mensaje.", 1, "form-control", "customize"], ["type", "submit", "value", "Enviar Denuncia", 1, "btn", "btn-custom"]],
      template: function DenunciaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transparencia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recepci\xF3n de denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recepci\xF3n de denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Formulario de denuncias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "El presente formulario sirve para registrar denuncias sobre irregularidades por parte de los servidores p\xFAblicos de ENDE ANDINA. Si quiere realizar denuncias o reclamos de otra \xEDndole, por ejemplo sobre servicios de genraci\xF3n de energ\xEDa el\xE9ctrica entre muchos otros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Elija un departamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Beni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cochabamaba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "La Paz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Santa cruz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Oruro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pando");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sucre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Potos\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tarija");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "textarea", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbnVuY2lhL2RlbnVuY2lhLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DenunciaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-denuncia',
          templateUrl: './denuncia.component.html',
          styleUrls: ['./denuncia.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/entrerios/entrerios.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/entrerios/entrerios.component.ts ***!
    \********************************************************/

  /*! exports provided: EntreriosComponent */

  /***/
  function srcAppPagesEntreriosEntreriosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EntreriosComponent", function () {
      return EntreriosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/proyects/proyects.component */
    "./src/app/components/proyects/proyects.component.ts");

    var EntreriosComponent =
    /*#__PURE__*/
    function () {
      function EntreriosComponent() {
        _classCallCheck(this, EntreriosComponent);

        this.slides = [{
          numbers: 1,
          src: '../../../assets/img/gallery/pter/gallery1.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery1.jpg',
          title: 'Planta Entre Ríos',
          caption: 'Vista Panorámica de la planta',
          url: '#'
        }, {
          numbers: 2,
          src: '../../../assets/img/gallery/pter/gallery2.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery2.jpg',
          title: 'Termoeléctrica Entre Rios',
          caption: 'Vista Turbinas Termoeléctricas',
          url: '#'
        }, {
          numbers: 3,
          src: '../../../assets/img/gallery/pter/gallery3.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery3.jpg',
          title: 'Termoeléctrica Entre Ríos',
          caption: 'Vista Tuberías Termoeléctricas',
          url: '#'
        }, {
          numbers: 4,
          src: '../../../assets/img/gallery/pter/gallery4.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery4.jpg',
          title: 'Termoeléctrica Entre Ríos',
          caption: 'Vista Lateral de la planta',
          url: '#'
        }, {
          numbers: 5,
          src: '../../../assets/img/gallery/pter/gallery5.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery5.jpg',
          title: 'Termoeléctrica Entre Ríos',
          caption: 'Vista Aérea de la Planta',
          url: '#'
        }, {
          numbers: 6,
          src: '../../../assets/img/gallery/pter/gallery6.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery6.jpg',
          title: 'Termoeléctrica Entre Ríos',
          caption: 'Vista panorámica de las torres de electricidad',
          url: '#'
        }, {
          numbers: 7,
          src: '../../../assets/img/gallery/pter/gallery7.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery7.jpg',
          title: 'Turbinas Entre Ríos',
          caption: 'Torres de electricidad',
          url: '#'
        }, {
          numbers: 8,
          src: '../../../assets/img/gallery/pter/gallery8.jpg',
          thumb: '../../../assets/img/gallery/pter/gallery8.jpg',
          title: 'Termoeléctrica Entre Ríos',
          caption: 'Vista Subestación de la planta',
          url: '#'
        }];
      }

      _createClass(EntreriosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EntreriosComponent;
    }();

    EntreriosComponent.ɵfac = function EntreriosComponent_Factory(t) {
      return new (t || EntreriosComponent)();
    };

    EntreriosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EntreriosComponent,
      selectors: [["app-entrerios"]],
      decls: 102,
      vars: 2,
      consts: [[1, "sections", "pter-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-pic"], ["src", "../assets/img/imagenes/pter.jpg", "alt", ""], [1, "solution-content", "ab-details"], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], [1, "grid-section"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/peer.jpg", "alt", ""], [1, "col-lg-6", "layer-content"], [1, "lc-inner"], [1, "order-last", "order-md-6", "col-lg-6", "layer-content"], [1, "order-first", "order-md-6", "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/ptcer.jpg", "alt", ""], [3, "slides"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d60983.578827044614!2d-64.57796168039854!3d-17.195790127480052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d-17.1989584!2d-64.5354748!4m3!3m2!1d-17.200236999999998!2d-64.51837139999999!5e1!3m2!1ses!2sbo!4v1518643880914", 1, "map-iframe"]],
      template: function EntreriosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Planta Termoel\xE9ctrica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Entre R\xEDos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Termoel\xE9ctrica Entre R\xEDos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nuestra planta termoel\xE9ctrica Entre R\xEDos consta de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Planta de generaci\xF3n con 4 termogeneradoras marca SIEMENS cada una con una capacidad de 29.06 MV.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Subestaci\xF3n con 4 transformadores cada uno con una potencia de 35 MVA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "L\xEDnea de transmisi\xF3n de 230 kV de 1,5 km de longitud conectado con subestaci\xF3n Carrasco.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Gasoducto para suministro de gas a la planta Entre R\xEDos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Campamento de interacci\xF3n social.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Disponibilidad de la Planta Termoel\xE9ctrica Entre R\xEDos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "En el periodo 2019, la Planta de Generaci\xF3n de Entre R\xEDos registr\xF3 los siguientes niveles de disponibilidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "thead", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Planta Entre R\xEDos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Primer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Segundo Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Tercer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Cuarto Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Disponibilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "95,92%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "49,99%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "58,47%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "78,88%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Potencia Efectiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "La capacidad de generaci\xF3n termoel\xE9ctrica a la temperatura media anual del sitio (26\xB0 C), reconocida por el CNDC para la Planta Termoel\xE9ctrica de Entre R\xEDos durante el 2019 fue de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "387.13 MW.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "P\xE9rdidas por transformaci\xF3n y consumo propio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Las p\xE9rdidas por transformaci\xF3n y consumo propio de la Planta Entre R\xEDos para la gesti\xF3n 2019, estuvieron alrededor del 3,36%. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "app-proyects", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "iframe", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides);
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__["ProyectsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VudHJlcmlvcy9lbnRyZXJpb3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntreriosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-entrerios',
          templateUrl: './entrerios.component.html',
          styleUrls: ['./entrerios.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/estructura/estructura.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/estructura/estructura.component.ts ***!
    \**********************************************************/

  /*! exports provided: EstructuraComponent */

  /***/
  function srcAppPagesEstructuraEstructuraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstructuraComponent", function () {
      return EstructuraComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EstructuraComponent =
    /*#__PURE__*/
    function () {
      function EstructuraComponent() {
        _classCallCheck(this, EstructuraComponent);
      }

      _createClass(EstructuraComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EstructuraComponent;
    }();

    EstructuraComponent.ɵfac = function EstructuraComponent_Factory(t) {
      return new (t || EstructuraComponent)();
    };

    EstructuraComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EstructuraComponent,
      selectors: [["app-estructura"]],
      decls: 24,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "row"], [1, "solution-pic"], ["src", "../assets/img/graphic/organigrama.png", "alt", ""]],
      template: function EstructuraComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Estructura Org\xE1nica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Estructura org\xE1nica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Estructura Org\xE1nica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Organigrama de nuestra empresa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["@charset \"UTF-8\";\n\nol.organizational-chart[_ngcontent-%COMP%], ol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], ol.organizational-chart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], ol.organizational-chart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n}\nol.organizational-chart[_ngcontent-%COMP%], ol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\nol.organizational-chart[_ngcontent-%COMP%] {\n  text-align: center;\n}\nol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  padding-top: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]:before, ol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]:after, ol.organizational-chart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before, ol.organizational-chart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n  background-color: #b7a6aa;\n  content: \"\";\n  position: absolute;\n}\nol.organizational-chart[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  padding: 1em 0 0 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]:before {\n  height: 1em;\n  left: 50%;\n  top: 0;\n  width: 3px;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]:after {\n  height: 3px;\n  left: 3px;\n  top: 1em;\n  width: 50%;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-of-type):before {\n  height: 3px;\n  left: 0;\n  top: 2em;\n  width: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:not(:last-of-type):after {\n  height: 100%;\n  left: 0;\n  top: 0;\n  width: 3px;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-of-type:before {\n  height: 3px;\n  left: 0;\n  top: 2em;\n  width: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-of-type:after {\n  height: 2em;\n  left: 0;\n  top: 0;\n  width: 3px;\n}\nol.organizational-chart[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 3px;\n  min-height: 2em;\n  padding: 0.5em;\n}\n\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #94bc20;\n  margin-right: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before {\n  bottom: 2em;\n  height: 3px;\n  right: -1em;\n  width: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:after {\n  bottom: 0;\n  height: 2em;\n  right: -1em;\n  width: 3px;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%] {\n  margin-top: 1em;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:after {\n  height: calc(100% + 1em);\n  right: -1em;\n  top: -1em;\n  width: 3px;\n}\n\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]:before {\n  left: inherit;\n  right: 0;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]:after {\n  left: 0;\n  width: 100%;\n}\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #11505d;\n}\n\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #00873d;\n}\n\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #fca858;\n}\n\nol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  background-color: #fddc32;\n}\n.organizational-chart[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 0.8rem;\n}\n\n@media only screen and (min-width: 64em) {\n  ol.organizational-chart[_ngcontent-%COMP%] {\n    margin-left: -1em;\n    margin-right: -1em;\n  }\n\n  \n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: inline-block;\n    float: none;\n    margin: 0 1em 1em 1em;\n    vertical-align: bottom;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:only-of-type {\n    margin-bottom: 0;\n    width: calc((100% / 1) - 2em - 4px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(2), ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(2)    ~ div[_ngcontent-%COMP%] {\n    width: calc((100% / 2) - 2em - 4px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(3), ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(3)    ~ div[_ngcontent-%COMP%] {\n    width: calc((100% / 3) - 2em - 4px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(4), ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(4)    ~ div[_ngcontent-%COMP%] {\n    width: calc((100% / 4) - 2em - 4px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(5), ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:nth-last-of-type(5)    ~ div[_ngcontent-%COMP%] {\n    width: calc((100% / 5) - 2em - 4px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n    bottom: -1em !important;\n    top: inherit !important;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before {\n    height: 1em !important;\n    left: 50% !important;\n    width: 3px !important;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:only-of-type:after {\n    display: none;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:not(:only-of-type):after, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type:not(:only-of-type):after {\n    bottom: -1em;\n    height: 3px;\n    width: calc(50% + 1em + 3px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-of-type:not(:only-of-type):after {\n    left: calc(50% + 3px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-of-type:not(:only-of-type):after {\n    left: calc(-1em - 3px);\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    + div[_ngcontent-%COMP%]:not(:last-of-type):after {\n    height: 3px;\n    left: -2em;\n    width: calc(100% + 4em);\n  }\n\n  \n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]:before, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before {\n    height: 1em !important;\n    left: 50% !important;\n    top: 0 !important;\n    width: 3px !important;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]:after {\n    display: none;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    flex-grow: 1;\n    padding-left: 1em;\n    padding-right: 1em;\n    padding-top: 1em;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:only-of-type {\n    padding-top: 0;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:only-of-type:before, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:only-of-type:after {\n    display: none;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-of-type:not(:only-of-type):after, ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-of-type:not(:only-of-type):after {\n    height: 3px;\n    top: 0;\n    width: 50%;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:first-of-type:not(:only-of-type):after {\n    left: 50%;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:last-of-type:not(:only-of-type):after {\n    left: 0;\n  }\n\n  ol.organizational-chart[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > ol[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%]:not(:last-of-type):after {\n    height: 3px;\n    left: 0;\n    top: 0;\n    width: 100%;\n  }\n}\n\n[aria-expanded=false][_ngcontent-%COMP%]   .menu__icon--open[_ngcontent-%COMP%] {\n  display: block;\n}\n[aria-expanded=false][_ngcontent-%COMP%]   .menu__icon--close[_ngcontent-%COMP%] {\n  display: none;\n}\n[aria-expanded=true][_ngcontent-%COMP%]   .menu__icon--open[_ngcontent-%COMP%] {\n  display: none;\n}\n[aria-expanded=true][_ngcontent-%COMP%]   .menu__icon--close[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXN0cnVjdHVyYS9lc3RydWN0dXJhLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL1NoYXJlZC9QcmV2aW91c2x5IFJlbG9jYXRlZCBJdGVtcy9TZWN1cml0eS9wcm95ZWN0b3MvRU5ERV9BTkRJTkEvU2l0ZV9FQS9zcmMvYXBwL3BhZ2VzL2VzdHJ1Y3R1cmEvZXN0cnVjdHVyYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsZ0hBQUE7QUFFQTs7OztFQUlFLGtCQUFBO0FEQ0Y7QUNFQTs7RUFFRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLGtCQUFBO0FEQ0Y7QUNFQTtFQUNFLGdCQUFBO0FEQ0Y7QUNFQTs7Ozs7O0VBTUUseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QURDRjtBQ0VBO0VBQ0Usb0JBQUE7QURDRjtBQ0VBO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QURDRjtBQ0VBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FEQ0Y7QUNFQSxnQkFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEQ0Y7QUNFQTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QURDRjtBQ0VBO0VBQ0UsZUFBQTtBRENGO0FDRUE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBRENGO0FDRUEsa0JBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FEQ0Y7QUNFQTtFQUNFLE9BQUE7RUFDQSxXQUFBO0FEQ0Y7QUNFQTtFQUNFLHlCQUFBO0FEQ0Y7QUNFQSxpQkFBQTtBQUNBO0VBQ0UseUJBQUE7QURDRjtBQ0VBLG1CQUFBO0FBQ0E7RUFDRSx5QkFBQTtBRENGO0FDRUEsZ0JBQUE7QUFDQTtFQUNFLHlCQUFBO0FEQ0Y7QUNHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBREFKO0FDRUEsMkhBQUE7QUFDQTtFQUNFO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtFRENGOztFQ0VBLFlBQUE7RUFDQTtJQUNFLHFCQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7RURDRjs7RUNFQTtJQUNFLGdCQUFBO0lBQ0EsbUNBQUE7RURDRjs7RUNFQTs7SUFFRSxtQ0FBQTtFRENGOztFQ0VBOztJQUVFLG1DQUFBO0VEQ0Y7O0VDRUE7O0lBRUUsbUNBQUE7RURDRjs7RUNFQTs7SUFFRSxtQ0FBQTtFRENGOztFQ0VBOztJQUVFLHVCQUFBO0lBQ0EsdUJBQUE7RURDRjs7RUNFQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtFRENGOztFQ0VBO0lBQ0UsYUFBQTtFRENGOztFQ0VBOztJQUVFLFlBQUE7SUFDQSxXQUFBO0lBQ0EsNEJBQUE7RURDRjs7RUNFQTtJQUNFLHFCQUFBO0VEQ0Y7O0VDRUE7SUFDRSxzQkFBQTtFRENGOztFQ0VBO0lBQ0UsV0FBQTtJQUNBLFVBQUE7SUFDQSx1QkFBQTtFRENGOztFQ0VBLGNBQUE7RUFDQTtJQUNFLGFBQUE7SUFDQSxpQkFBQTtFRENGOztFQ0VBOztJQUVFLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxpQkFBQTtJQUNBLHFCQUFBO0VEQ0Y7O0VDRUE7SUFDRSxhQUFBO0VEQ0Y7O0VDRUE7SUFDRSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGdCQUFBO0VEQ0Y7O0VDRUE7SUFDRSxjQUFBO0VEQ0Y7O0VDRUE7O0lBRUUsYUFBQTtFRENGOztFQ0VBOztJQUVFLFdBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtFRENGOztFQ0VBO0lBSUUsU0FBQTtFREZGOztFQ0tBO0lBQ0UsT0FBQTtFREZGOztFQ0tBO0lBQ0UsV0FBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsV0FBQTtFREZGO0FBQ0Y7QUNNQSxtTEFBQTtBQUNBO0VBQ0ksY0FBQTtBREpKO0FDT0E7RUFDSSxhQUFBO0FESko7QUNPQTtFQUNJLGFBQUE7QURKSjtBQ09BO0VBQ0ksY0FBQTtBREpKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXN0cnVjdHVyYS9lc3RydWN0dXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogT3JnQ2hhcnQgQ1NTIEJhc2U6IFJlZmVyZW5jZSBodHRwczovL3d3dy5jc3NzY3JpcHQuY29tL3Jlc3BvbnNpdmUtaGllcmFyY2hpY2FsLW9yZ2FuaXphdGlvbi1jaGFydC1wdXJlLWNzcy8gKi9cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0LFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgb2wsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBsaSxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IGxpID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IG9sIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgb2wge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBvbDpiZWZvcmUsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBvbDphZnRlcixcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IGxpOmJlZm9yZSxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IGxpOmFmdGVyLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpiZWZvcmUsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3YTZhYTtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBvbCA+IGxpIHtcbiAgcGFkZGluZzogMWVtIDAgMCAxZW07XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgb2w6YmVmb3JlIHtcbiAgaGVpZ2h0OiAxZW07XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiAwO1xuICB3aWR0aDogM3B4O1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sOmFmdGVyIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGxlZnQ6IDNweDtcbiAgdG9wOiAxZW07XG4gIHdpZHRoOiA1MCU7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgb2wgPiBsaTpub3QoOmxhc3Qtb2YtdHlwZSk6YmVmb3JlIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMmVtO1xuICB3aWR0aDogMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sID4gbGk6bm90KDpsYXN0LW9mLXR5cGUpOmFmdGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAzcHg7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgb2wgPiBsaTpsYXN0LW9mLXR5cGU6YmVmb3JlIHtcbiAgaGVpZ2h0OiAzcHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMmVtO1xuICB3aWR0aDogMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sID4gbGk6bGFzdC1vZi10eXBlOmFmdGVyIHtcbiAgaGVpZ2h0OiAyZW07XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDNweDtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgbGkgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1pbi1oZWlnaHQ6IDJlbTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi8qKiogUFJJTUFSWSAqKiovXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk0YmMyMDtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6YmVmb3JlIHtcbiAgYm90dG9tOiAyZW07XG4gIGhlaWdodDogM3B4O1xuICByaWdodDogLTFlbTtcbiAgd2lkdGg6IDFlbTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOmFmdGVyIHtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDJlbTtcbiAgcmlnaHQ6IC0xZW07XG4gIHdpZHRoOiAzcHg7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXYgKyBkaXYge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXYgKyBkaXY6YWZ0ZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSArIDFlbSk7XG4gIHJpZ2h0OiAtMWVtO1xuICB0b3A6IC0xZW07XG4gIHdpZHRoOiAzcHg7XG59XG5cbi8qKiogU0VDT05EQVJZICoqKi9cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbDpiZWZvcmUge1xuICBsZWZ0OiBpbmhlcml0O1xuICByaWdodDogMDtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sOmFmdGVyIHtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTA1ZDtcbn1cblxuLyoqKiBURVJUSUFSWSAqKiovXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaSA+IG9sID4gbGkgPiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4NzNkO1xufVxuXG4vKioqIFFVQVRFUk5BUlkgKioqL1xub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGkgPiBvbCA+IGxpID4gb2wgPiBsaSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2E4NTg7XG59XG5cbi8qKiogUVVJTkFSWSAqKiovXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaSA+IG9sID4gbGkgPiBvbCA+IGxpID4gb2wgPiBsaSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGRjMzI7XG59XG5cbi5vcmdhbml6YXRpb25hbC1jaGFydCBoMyB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbi8qIE9yZ0NoYXJ0IENTUyBSZXNwb25zZSBTY3JlZW46IFJlZmVyZW5jZSBodHRwczovL3d3dy5jc3NzY3JpcHQuY29tL3Jlc3BvbnNpdmUtaGllcmFyY2hpY2FsLW9yZ2FuaXphdGlvbi1jaGFydC1wdXJlLWNzcy8gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xuICB9XG5cbiAgLyogUFJJTUFSWSAqL1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFlbSAxZW0gMWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2Om9ubHktb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDEpIC0gMmVtIC0gNHB4KTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDIpLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm50aC1sYXN0LW9mLXR5cGUoMikgfiBkaXYge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMikgLSAyZW0gLSA0cHgpO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm50aC1sYXN0LW9mLXR5cGUoMyksXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bnRoLWxhc3Qtb2YtdHlwZSgzKSB+IGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAzKSAtIDJlbSAtIDRweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bnRoLWxhc3Qtb2YtdHlwZSg0KSxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDQpIH4gZGl2IHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDQpIC0gMmVtIC0gNHB4KTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDUpLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm50aC1sYXN0LW9mLXR5cGUoNSkgfiBkaXYge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gNSkgLSAyZW0gLSA0cHgpO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpiZWZvcmUsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmFmdGVyIHtcbiAgICBib3R0b206IC0xZW0gIWltcG9ydGFudDtcbiAgICB0b3A6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6b25seS1vZi10eXBlOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlcixcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgYm90dG9tOiAtMWVtO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiBjYWxjKDUwJSArIDFlbSArIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LW9mLXR5cGUpOmFmdGVyIHtcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2Omxhc3Qtb2YtdHlwZTpub3QoOm9ubHktb2YtdHlwZSk6YWZ0ZXIge1xuICAgIGxlZnQ6IGNhbGMoLTFlbSAtIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2ICsgZGl2Om5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgbGVmdDogLTJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNGVtKTtcbiAgfVxuXG4gIC8qIFNFQ09OREFSWSAqL1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2w6YmVmb3JlLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUwJSAhaW1wb3J0YW50O1xuICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAzcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbDphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpIHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpvbmx5LW9mLXR5cGUge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6b25seS1vZi10eXBlOmJlZm9yZSxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpOm9ubHktb2YtdHlwZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpOmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LW9mLXR5cGUpOmFmdGVyLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpmaXJzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpICsgbGk6bm90KDpsYXN0LW9mLXR5cGUpOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuLyogRm9yIENoYW5nZSBvcGVuL2Nsb3NlIGljb24gb24gQm9vdHN0cmFw4oCZcyBidXR0b24gY29sbGFwc2Ugd2l0aCBvbmx5IENTUywgUmVmZXJlbmNlOiBodHRwOi8vdHlwZWNvZGUuZGlnaXRhbC9jaGFuZ2Utb3BlbmNsb3NlLWljb24tb24tYm9vdHN0cmFwcy1idXR0b24tY29sbGFwc2Utd2l0aC1vbmx5LWNzcy8gKi9cblthcmlhLWV4cGFuZGVkPWZhbHNlXSAubWVudV9faWNvbi0tb3BlbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5bYXJpYS1leHBhbmRlZD1mYWxzZV0gLm1lbnVfX2ljb24tLWNsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuW2FyaWEtZXhwYW5kZWQ9dHJ1ZV0gLm1lbnVfX2ljb24tLW9wZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5bYXJpYS1leHBhbmRlZD10cnVlXSAubWVudV9faWNvbi0tY2xvc2Uge1xuICBkaXNwbGF5OiBibG9jaztcbn0iLCIvKiBPcmdDaGFydCBDU1MgQmFzZTogUmVmZXJlbmNlIGh0dHBzOi8vd3d3LmNzc3NjcmlwdC5jb20vcmVzcG9uc2l2ZS1oaWVyYXJjaGljYWwtb3JnYW5pemF0aW9uLWNoYXJ0LXB1cmUtY3NzLyAqL1xuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCxcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IG9sLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgbGksXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBsaSA+IGRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBvbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IG9sIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgb2w6YmVmb3JlLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgb2w6YWZ0ZXIsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBsaTpiZWZvcmUsXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCBsaTphZnRlcixcbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6YmVmb3JlLFxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2E2YWE7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgb2wgPiBsaSB7XG4gIHBhZGRpbmc6IDFlbSAwIDAgMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sOmJlZm9yZSB7XG4gIGhlaWdodDogMWVtO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDNweDtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSBvbDphZnRlciB7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAzcHg7XG4gIHRvcDogMWVtO1xuICB3aWR0aDogNTAlO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sID4gbGk6bm90KDpsYXN0LW9mLXR5cGUpOmJlZm9yZSB7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDJlbTtcbiAgd2lkdGg6IDFlbTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSBvbCA+IGxpOm5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogM3B4O1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpIG9sID4gbGk6bGFzdC1vZi10eXBlOmJlZm9yZSB7XG4gIGhlaWdodDogM3B4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDJlbTtcbiAgd2lkdGg6IDFlbTtcbn1cblxub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSBvbCA+IGxpOmxhc3Qtb2YtdHlwZTphZnRlciB7XG4gIGhlaWdodDogMmVtO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAzcHg7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtaW4taGVpZ2h0OiAyZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4vKioqIFBSSU1BUlkgKioqL1xub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGJjMjA7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmJlZm9yZSB7XG4gIGJvdHRvbTogMmVtO1xuICBoZWlnaHQ6IDNweDtcbiAgcmlnaHQ6IC0xZW07XG4gIHdpZHRoOiAxZW07XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAyZW07XG4gIHJpZ2h0OiAtMWVtO1xuICB3aWR0aDogM3B4O1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2ICsgZGl2IHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2ICsgZGl2OmFmdGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxZW0pO1xuICByaWdodDogLTFlbTtcbiAgdG9wOiAtMWVtO1xuICB3aWR0aDogM3B4O1xufVxuXG4vKioqIFNFQ09OREFSWSAqKiovXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2w6YmVmb3JlIHtcbiAgbGVmdDogaW5oZXJpdDtcbiAgcmlnaHQ6IDA7XG59XG5cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbDphZnRlciB7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaSA+IGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTUwNWQ7XG59XG5cbi8qKiogVEVSVElBUlkgKioqL1xub2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGkgPiBvbCA+IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogICMwMDg3M2Q7XG59XG5cbi8qKiogUVVBVEVSTkFSWSAqKiovXG5vbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaSA+IG9sID4gbGkgPiBvbCA+IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYTg1ODtcbn1cblxuLyoqKiBRVUlOQVJZICoqKi9cbm9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpID4gb2wgPiBsaSA+IG9sID4gbGkgPiBvbCA+IGxpID4gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZGMzMjtcbn1cblxuXG4ub3JnYW5pemF0aW9uYWwtY2hhcnQgaDMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi8qIE9yZ0NoYXJ0IENTUyBSZXNwb25zZSBTY3JlZW46IFJlZmVyZW5jZSBodHRwczovL3d3dy5jc3NzY3JpcHQuY29tL3Jlc3BvbnNpdmUtaGllcmFyY2hpY2FsLW9yZ2FuaXphdGlvbi1jaGFydC1wdXJlLWNzcy8gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjRlbSkge1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMWVtO1xuICB9XG5cbiAgLyogUFJJTUFSWSAqL1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luOiAwIDFlbSAxZW0gMWVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2Om9ubHktb2YtdHlwZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDEpIC0gMmVtIC0gNHB4KTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDIpLFxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bnRoLWxhc3Qtb2YtdHlwZSgyKSB+IGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLyAyKSAtIDJlbSAtIDRweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bnRoLWxhc3Qtb2YtdHlwZSgzKSxcbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm50aC1sYXN0LW9mLXR5cGUoMykgfiBkaXYge1xuICAgIHdpZHRoOiBjYWxjKCgxMDAlIC8gMykgLSAyZW0gLSA0cHgpO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjpmaXJzdC1vZi10eXBlOm50aC1sYXN0LW9mLXR5cGUoNCksXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDQpIH4gZGl2IHtcbiAgICB3aWR0aDogY2FsYygoMTAwJSAvIDQpIC0gMmVtIC0gNHB4KTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpudGgtbGFzdC1vZi10eXBlKDUpLFxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bnRoLWxhc3Qtb2YtdHlwZSg1KSB+IGRpdiB7XG4gICAgd2lkdGg6IGNhbGMoKDEwMCUgLyA1KSAtIDJlbSAtIDRweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmJlZm9yZSxcbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IGRpdjphZnRlciB7XG4gICAgYm90dG9tOiAtMWVtICFpbXBvcnRhbnQ7XG4gICAgdG9wOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAxZW0gIWltcG9ydGFudDtcbiAgICBsZWZ0OiA1MCUgIWltcG9ydGFudDtcbiAgICB3aWR0aDogM3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2Om9ubHktb2YtdHlwZTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6Zmlyc3Qtb2YtdHlwZTpub3QoOm9ubHktb2YtdHlwZSk6YWZ0ZXIsXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBkaXY6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgYm90dG9tOiAtMWVtO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiBjYWxjKDUwJSArIDFlbSArIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2OmZpcnN0LW9mLXR5cGU6bm90KDpvbmx5LW9mLXR5cGUpOmFmdGVyIHtcbiAgICBsZWZ0OiBjYWxjKDUwJSArIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2Omxhc3Qtb2YtdHlwZTpub3QoOm9ubHktb2YtdHlwZSk6YWZ0ZXIge1xuICAgIGxlZnQ6IGNhbGMoLTFlbSAtIDNweCk7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gZGl2ICsgZGl2Om5vdCg6bGFzdC1vZi10eXBlKTphZnRlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgbGVmdDogLTJlbTtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgNGVtKTtcbiAgfVxuXG4gIC8qIFNFQ09OREFSWSAqL1xuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2w6YmVmb3JlLFxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpiZWZvcmUge1xuICAgIGhlaWdodDogMWVtICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNTAlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGkge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgcGFkZGluZy10b3A6IDFlbTtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpOm9ubHktb2YtdHlwZSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpvbmx5LW9mLXR5cGU6YmVmb3JlLFxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpvbmx5LW9mLXR5cGU6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydCA+IGxpID4gb2wgPiBsaTpmaXJzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlcixcbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiA1MCU7XG4gIH1cblxuICBvbC5vcmdhbml6YXRpb25hbC1jaGFydFxuICAgID4gbGlcbiAgICA+IG9sXG4gICAgPiBsaTpmaXJzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgb2wub3JnYW5pemF0aW9uYWwtY2hhcnQgPiBsaSA+IG9sID4gbGk6bGFzdC1vZi10eXBlOm5vdCg6b25seS1vZi10eXBlKTphZnRlciB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIG9sLm9yZ2FuaXphdGlvbmFsLWNoYXJ0ID4gbGkgPiBvbCA+IGxpICsgbGk6bm90KDpsYXN0LW9mLXR5cGUpOmFmdGVyIHtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5cbi8qIEZvciBDaGFuZ2Ugb3Blbi9jbG9zZSBpY29uIG9uIEJvb3RzdHJhcOKAmXMgYnV0dG9uIGNvbGxhcHNlIHdpdGggb25seSBDU1MsIFJlZmVyZW5jZTogaHR0cDovL3R5cGVjb2RlLmRpZ2l0YWwvY2hhbmdlLW9wZW5jbG9zZS1pY29uLW9uLWJvb3RzdHJhcHMtYnV0dG9uLWNvbGxhcHNlLXdpdGgtb25seS1jc3MvICovXG5bYXJpYS1leHBhbmRlZD1cImZhbHNlXCJdIC5tZW51X19pY29uLS1vcGVuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuW2FyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXSAubWVudV9faWNvbi0tY2xvc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblthcmlhLWV4cGFuZGVkPVwidHJ1ZVwiXSAubWVudV9faWNvbi0tb3BlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIC5tZW51X19pY29uLS1jbG9zZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EstructuraComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-estructura',
          templateUrl: './estructura.component.html',
          styleUrls: ['./estructura.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ficha/ficha.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/ficha/ficha.component.ts ***!
    \************************************************/

  /*! exports provided: FichaComponent */

  /***/
  function srcAppPagesFichaFichaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FichaComponent", function () {
      return FichaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FichaComponent =
    /*#__PURE__*/
    function () {
      function FichaComponent() {
        _classCallCheck(this, FichaComponent);
      }

      _createClass(FichaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FichaComponent;
    }();

    FichaComponent.ɵfac = function FichaComponent_Factory(t) {
      return new (t || FichaComponent)();
    };

    FichaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FichaComponent,
      selectors: [["app-ficha"]],
      decls: 101,
      vars: 0,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "col-lg-6"], [1, "og-about"], [1, "logoFicha"], ["src", "assets/img/master/logo.png", "alt", ""], ["href", "https://www.facebook.com/EndeAndina/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/EndeAndina?ref_src=twsrc%5Etfw", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-twitter"], ["href", "https://www.youtube.com/channel/UCTO60otE9hhDtDXS5II9cSQ", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-youtube"], ["href", "https://www.linkedin.com/company/endeandina/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-linkedin"], ["href", "https://www.instagram.com/endeandinasam/", "target", "_blank"], ["aria-hidden", "true", 1, "fab", "fa-instagram"], [1, "og-info"], [1, "project-sidebar"], [1, "section-divider"], [1, "about-bar"], [1, "col-lg-4"], [1, "ab-box"], [1, "ab-icon"], ["src", "assets/img/master/innovation.svg", "alt", ""], [1, "ab-caption"], [1, "col-lg-4", "center-box"], ["src", "assets/img/master/close-envelope.svg", "alt", ""], ["src", "assets/img/master/engineer.svg", "alt", ""]],
      template: function FichaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ficha empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Ficha Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "figure", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Ficha Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Raz\xF3n social:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Actividad: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Generaci\xF3n, interconexi\xF3n, comercializaci\xF3n, transmisi\xF3n asociada a la generaci\xF3n, importaci\xF3n y exportaci\xF3n de electricidad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Fecha de Creaci\xF3n:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " 09 de agosto de 2007, mediante Decreto Supremo N\xBA 29224");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Cede central: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Av. Ecol\xF3gica - Pasaje Villa Gardenias No 40, Tiquipaya - Cochabamba.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Correo Electr\xF3nico::");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " correo@endeandina.bo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Tel\xE9fonos:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " + [591 4] 4664001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "FAX:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " + [591 4] 4664063");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "hr", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "figure", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Potencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "1.370 MW.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "figure", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Identificaci\xF3n Tributaria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "154262027.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "figure", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Fecha de Constituci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "24 de diciembre de 2007.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logoFicha[_ngcontent-%COMP%] {\n  line-height: 600px;\n  margin: 0px auto;\n  text-align: center;\n}\n\n.logoFicha[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\nul[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n  padding: 0;\n  display: flex;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 60px;\n  height: 60px;\n  display: block;\n  text-align: center;\n  margin: 0 10px;\n  border-radius: 50%;\n  padding: 6px;\n  padding-top: 10px;\n  box-sizing: border-box;\n  text-decoration: none;\n  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);\n  background: linear-gradient(0deg, #ddd, #fff);\n  transition: 0.5s;\n  color: #11505d;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n  background: linear-gradient(0deg, #fff, #ddd);\n  border-radius: 50%;\n  line-height: calc(60px - 12px);\n  font-size: 24px;\n  color: #262626;\n  transition: 0.5s;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   a[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   a[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%] {\n  color: #00aced;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   a[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%] {\n  color: #dd4b39;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4)   a[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%] {\n  color: #007bb6;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5)   a[_ngcontent-%COMP%]:hover   .fab[_ngcontent-%COMP%] {\n  color: #e4405f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9maWNoYS9maWNoYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmljaGEvZmljaGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNILGdCQUFBO0VBQ0Esa0JBQUE7QUNDRDs7QURHQTtFQUNJLHNCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBSjs7QURHRTtFQUNFLHdDQUFBO0FDQUo7O0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9maWNoYS9maWNoYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvRmljaGEge1xuICAgIGxpbmUtaGVpZ2h0OjYwMHB4O1xuXHRtYXJnaW46MHB4IGF1dG87XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiNDQ0NDQ0M7XG59XG5cbi5sb2dvRmljaGEgaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbnVsIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6NjAlO1xuICAgIGxlZnQ6NTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIG1hcmdpbjowO1xuICAgIHBhZGRpbmc6MDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gIH1cbiAgXG4gIHVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICB9XG4gIFxuICB1bCBsaSBhIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6NjBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBkaXNwbGF5OmJsb2NrO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIG1hcmdpbjowIDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2RkZCwgI2ZmZik7XG4gICAgdHJhbnNpdGlvbjogLjVzO1xuICAgIGNvbG9yOiAjMTE1MDVkO1xuICB9XG4gIFxuICB1bCBsaSBhOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xuICB9XG4gIFxuICB1bCBsaSBhIC5mYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OjEwMCU7XG4gICAgZGlzcGxheTpibG9jaztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgI2ZmZiwgI2RkZCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGxpbmUtaGVpZ2h0OiBjYWxjKDYwcHggLSAxMnB4KTtcbiAgICBmb250LXNpemU6MjRweDtcbiAgICBjb2xvcjogIzI2MjYyNjtcbiAgICB0cmFuc2l0aW9uOiAuNXM7XG4gIH1cbiAgXG4gIHVsIGxpOm50aC1jaGlsZCgxKSBhOmhvdmVyIC5mYWIge1xuICAgIGNvbG9yOiAjM2I1OTk4O1xuICB9XG4gIFxuICB1bCBsaTpudGgtY2hpbGQoMikgYTpob3ZlciAuZmFiIHtcbiAgICBjb2xvcjogIzAwYWNlZDtcbiAgfVxuICBcbiAgdWwgbGk6bnRoLWNoaWxkKDMpIGE6aG92ZXIgLmZhYiB7XG4gICAgY29sb3I6ICNkZDRiMzk7XG4gIH1cbiAgXG4gIHVsIGxpOm50aC1jaGlsZCg0KSBhOmhvdmVyIC5mYWIge1xuICAgIGNvbG9yOiAjMDA3YmI2O1xuICB9XG4gIFxuICB1bCBsaTpudGgtY2hpbGQoNSkgYTpob3ZlciAuZmFiIHtcbiAgICBjb2xvcjogI2U0NDA1ZjtcbiAgfSIsIi5sb2dvRmljaGEge1xuICBsaW5lLWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ29GaWNoYSBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG51bCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG51bCBsaSBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiA2cHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNkZGQsICNmZmYpO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBjb2xvcjogIzExNTA1ZDtcbn1cblxudWwgbGkgYTpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbnVsIGxpIGEgLmZhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmLCAjZGRkKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBsaW5lLWhlaWdodDogY2FsYyg2MHB4IC0gMTJweCk7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICMyNjI2MjY7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbnVsIGxpOm50aC1jaGlsZCgxKSBhOmhvdmVyIC5mYWIge1xuICBjb2xvcjogIzNiNTk5ODtcbn1cblxudWwgbGk6bnRoLWNoaWxkKDIpIGE6aG92ZXIgLmZhYiB7XG4gIGNvbG9yOiAjMDBhY2VkO1xufVxuXG51bCBsaTpudGgtY2hpbGQoMykgYTpob3ZlciAuZmFiIHtcbiAgY29sb3I6ICNkZDRiMzk7XG59XG5cbnVsIGxpOm50aC1jaGlsZCg0KSBhOmhvdmVyIC5mYWIge1xuICBjb2xvcjogIzAwN2JiNjtcbn1cblxudWwgbGk6bnRoLWNoaWxkKDUpIGE6aG92ZXIgLmZhYiB7XG4gIGNvbG9yOiAjZTQ0MDVmO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FichaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-ficha',
          templateUrl: './ficha.component.html',
          styleUrls: ['./ficha.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/gallery/gallery.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/gallery/gallery.component.ts ***!
    \****************************************************/

  /*! exports provided: GalleryComponent */

  /***/
  function srcAppPagesGalleryGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () {
      return GalleryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function GalleryComponent_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_div_27_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var i_r20 = ctx.index;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r21.open(i_r20);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r19.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r19.caption);
      }
    }

    var GalleryComponent =
    /*#__PURE__*/
    function () {
      function GalleryComponent(_lightbox) {
        _classCallCheck(this, GalleryComponent);

        // assets/img/images/service1.jpg
        this._lightbox = _lightbox;
        this._albums = [];

        for (var i = 1; i <= 8; i++) {
          var src = '../../../assets/img/gallery/pter/gallery' + i + '.jpg';
          var caption = 'Imagen ' + i + ' ';
          var thumb = '../../../assets/img/gallery/pter/gallery' + i + '.jpg';
          var album = {
            src: src,
            caption: caption,
            thumb: thumb
          };

          this._albums.push(album);
        }
      }

      _createClass(GalleryComponent, [{
        key: "open",
        value: function open(index) {
          // open lightbox
          this._lightbox.open(this._albums, index);
        }
      }, {
        key: "close",
        value: function close() {
          // close lightbox programmatically
          this._lightbox.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GalleryComponent;
    }();

    GalleryComponent.ɵfac = function GalleryComponent_Factory(t) {
      return new (t || GalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]));
    };

    GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GalleryComponent,
      selectors: [["app-gallery"]],
      decls: 28,
      vars: 1,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "services-tittle"], [1, "gallery-info"], ["id", "kehl-grid", 1, "grid"], [1, "row"], ["class", "col-3 grid-box chemical", 4, "ngFor", "ngForOf"], [1, "col-3", "grid-box", "chemical"], [1, "image-popup-vertical-fit", 3, "click"], [1, "image-mask"], ["alt", "", 3, "src"]],
      template: function GalleryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Multimedia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Banco de im\xE1genes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Banco de Im\xE1genes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Instagram");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Galer\xEDa de im\xE1genes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Im\xE1genes correspondientes al canal de Instgram.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, GalleryComponent_div_27_Template, 6, 2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._albums);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gallery',
          templateUrl: './gallery.component.html',
          styleUrls: ['./gallery.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
        }];
      }, null);
    })();

    var data = [{
      srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
      previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg'
    }, {
      srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
      previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg'
    }, {
      srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
      previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg'
    }, {
      srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
      previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg'
    }];
    /***/
  },

  /***/
  "./src/app/pages/gestionsocial/gestionsocial.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/gestionsocial/gestionsocial.component.ts ***!
    \****************************************************************/

  /*! exports provided: GestionsocialComponent */

  /***/
  function srcAppPagesGestionsocialGestionsocialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GestionsocialComponent", function () {
      return GestionsocialComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GestionsocialComponent =
    /*#__PURE__*/
    function () {
      function GestionsocialComponent() {
        _classCallCheck(this, GestionsocialComponent);
      }

      _createClass(GestionsocialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GestionsocialComponent;
    }();

    GestionsocialComponent.ɵfac = function GestionsocialComponent_Factory(t) {
      return new (t || GestionsocialComponent)();
    };

    GestionsocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GestionsocialComponent,
      selectors: [["app-gestionsocial"]],
      decls: 46,
      vars: 0,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "container-wide-grid"], [1, "row"], [1, "order-last", "order-md-12", "col-lg-6", "full-caption-layer"], [1, "fc-content", "fc-left-align"], [1, "span-checklist"], [1, "order-first", "order-md-12", "col-lg-6", "full-thumb-layer-alt"]],
      template: function GestionsocialComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Responsabilidad Social Empresarial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Gesti\xF3n Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Gesti\xF3n Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Responsabilidad Social Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Interacci\xF3n Social ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "con las comunidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Escuela de deportes ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Desde hace ocho a\xF1os, venimos fomentando la pr\xE1ctica deportiva en la ni\xF1ez y la adolescencia del municipio de Entre R\xEDos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Durante el 2019 se consolid\xF3 la participaci\xF3n de ni\xF1as, ni\xF1os y adolescentes en la Escuela de F\xFAtbol de Entre R\xEDos. Contando con la participaci\xF3n de 75 alumnos, quienes participaron con entusiasmo en las pr\xE1cticas y en los partidos amistosos programados con otras regiones del tr\xF3pico cochabambino. Se obtuvieron buenos resultados en todos los encuentros, demostrando de esta manera que el deporte en nuestro municipio va mejorando gracias a nuestro apoyo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Las categor\xEDas de la Escuela de F\xFAtbol se fortalecieron en esta gesti\xF3n, actualmente contamos con las siguientes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Categor\xEDa Sub 9 15 ni\xF1as y ni\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Categor\xEDa Sub 11 15 ni\xF1as y ni\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Categor\xEDa Sub 15 18 ni\xF1as y ni\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Categor\xEDa Sub 18 27 adolescentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total, inscritos 75 deportistas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlc3Rpb25zb2NpYWwvZ2VzdGlvbnNvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GestionsocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-gestionsocial',
          templateUrl: './gestionsocial.component.html',
          styleUrls: ['./gestionsocial.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/history/history.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/history/history.component.ts ***!
    \****************************************************/

  /*! exports provided: HistoryComponent */

  /***/
  function srcAppPagesHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_partners_partners_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/partners/partners.component */
    "./src/app/components/partners/partners.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/entrerios"];
    };

    var _c1 = function _c1() {
      return ["/delsur"];
    };

    var _c2 = function _c2() {
      return ["/warnes"];
    };

    var HistoryComponent =
    /*#__PURE__*/
    function () {
      function HistoryComponent() {
        _classCallCheck(this, HistoryComponent);
      }

      _createClass(HistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistoryComponent;
    }();

    HistoryComponent.ɵfac = function HistoryComponent_Factory(t) {
      return new (t || HistoryComponent)();
    };

    HistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoryComponent,
      selectors: [["app-history"]],
      decls: 158,
      vars: 6,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row", "project-col"], [1, "col-lg-8"], [1, "principal-preview"], ["src", "assets/img/imagenes/His-1.jpg", "alt", ""], [1, "col-lg-4"], [1, "second-preview"], ["src", "assets/img/imagenes/His-2.jpg", "alt", ""], [1, "third-preview"], ["src", "assets/img/imagenes/His-3.jpg", "alt", ""], [1, "about-project", "space-break"], [1, "row"], [1, "ab-details"], [1, "timeline"], [1, "timeline-badge"], [1, "timeline-panel", "animated", "slideInLeft"], [1, "timeline-heading"], [1, "timeline-title"], [1, "timeline-body"], [1, "timeline-inverted"], [1, "timeline-panel", "animated", "slideInRight"], ["src", "assets/img/imagenes/His-2.jpg", 1, "img-responsive"], [1, "clearfix", 2, "float", "none"], [1, "container-fluid"], [1, "col-lg-5", "parallax-side-alt-2"], [1, "col-lg-7", "content-side-alt"], [1, "inner-content-alt"], [1, "panel-title"], [2, "margin-bottom", "15px"], [1, "container", "related-projects"], [1, "section-title", 2, "width", "100%", "padding", "0rem 3rem 8rem"], [1, "container", "construction-services"], [1, "row", "hover-effects", "image-hover"], [1, "thumbnail-box-alt", 3, "routerLink"], [1, "tb-image"], ["src", "assets/img/imagenes/img-2.jpg", "alt", ""], [1, "tb-caption"], [1, "inner-caption"], [1, "ic-top"], [1, "ic-icon"], ["src", "assets/img/master/warning_bulb.svg", "alt", ""], [1, "col-lg-4", "center-box"], ["src", "assets/img/imagenes/img-4.jpg", "alt", ""], ["src", "assets/img/master/warning.svg", "alt", ""], ["src", "assets/img/imagenes/img-3.jpg", "alt", ""], ["src", "assets/img/master/battery.svg", "alt", ""]],
      template: function HistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuestra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Historia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Nuestra historia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "figure", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Fundaci\xF3n e Historia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2007");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ENDE ANDINA S.A.M., fue creada por el Decreto Supremo N\xB0 29224");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Promulgado en fecha 09 de agosto de 2007, el cual autoriza la conformaci\xF3n de una sociedad de econom\xEDa mixta conformada por la Empresa Nacional de Electricidad (ENDE), del Estado Plurinacional de Bolivia y la Empresa PDVSA BOLIVIA S.A., filial de PDVSA de la Rep\xFAblica Bolivariana de Venezuela, con una relaci\xF3n accionar\xEDa porcentual de 60/40, respectivamente, siendo el objeto realizar actividades de generaci\xF3n, interconexi\xF3n, comercializaci\xF3n, transmisi\xF3n asociada a la generaci\xF3n, importaci\xF3n y exportaci\xF3n de electricidad de acuerdo a Ley.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "En diciembre de 2007, se suscribi\xF3 el Acta de Fundaci\xF3n de la Empresa para posteriormente, realizar la inscripci\xF3n en los registros de escrituras p\xFAblicas, en la ciudad de Cochabamba - Bolivia.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\"Se inaugura la primera Planta de Generaci\xF3n Termoel\xE9ctrica\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\"Se inaugura la primera Planta de Generaci\xF3n Termoel\xE9ctrica de nuestra Empresa, la \"Planta Entre R\xEDos\" localizada en el Municipio del mismo nombre, en el Departamento de Cochabamba. Fue construida para cubrir el incremento en la demanda de energ\xEDa el\xE9ctrica en el pa\xEDs que comenz\xF3 el a\xF1o 2008.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Es importante resaltar el trabajo realizado tanto en la construcci\xF3n de las obras civiles como en el montaje electromec\xE1nico de los equipos, considerando que desde el inicio de las obras, en abril de 2009, hasta el ingreso en operaci\xF3n comercial de la primera unidad, en abril de 2010, pasaron solo 12 meses, un tiempo holgadamente menor al usualmente empleado en la implementaci\xF3n de proyectos similares.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "LA PLANTA FUE OFICIALMENTE INAUGURADA EL 22 DE JULIO DE 2010");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "El mes de octubre de 2011, a trav\xE9s de una Resoluci\xF3n Ministerial, refrendada en la Junta de Accionistas se tom\xF3 la decisi\xF3n de ejecutar el Proyecto \"Planta Termoel\xE9ctrica del Sur\", a ser construida entre los Municipios de Yacuiba y Villa Montes, con aportes del socio de la serie \"A\", ENDE. En 2012 se dio inicio a la construcci\xF3n de obras civiles y posterior montaje de cuatro turbinas. La Planta fue oficialmente inaugurada en septiembre de 2014.\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "2015");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Se inaugura la planta Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\"En el marco de la Agenda Patri\xF3tica, ENDE ANDINA S.A.M. inaugur\xF3 la Planta Termoel\xE9ctrica Warnes, ubicada en el Municipio del mismo nombre, en el Departamento de Santa Cruz. Este tercer proyecto fue ejecutado de acuerdo a la Resoluci\xF3n Ministerial N\xBA 336-12 del 14 de Noviembre de 2012, en la cual el entonces Ministerio de Hidrocarburos y Energ\xEDa determina que el Proyecto de Generaci\xF3n \"Termoel\xE9ctrica Warnes\" es de prioridad nacional y ser\xE1 ejecutado por ENDE ANDINA S.A.M. En este sentido, mediante Junta General Extraordinaria de fecha 30 de noviembre de 2012, los socios aprobaron que la sociedad ejecute este Proyecto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "2017");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Exportaci\xF3n de excedentes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\"Con la creaci\xF3n del Ministerio de Energ\xEDas en enero de 2017, se ratifica la importancia del sector el\xE9ctrico en Bolivia, la seguridad y el cambio de matriz energ\xE9tica, pero sobre todo la exportaci\xF3n de los excedentes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "En este marco, al recibir la responsabilidad para el cumplimiento de los plazos establecidos en la construcci\xF3n y puesta en marcha de nuestros Proyectos de Ciclos Combinados, se tiene como principal objetivo entregar estos proyectos y as\xED cumplir con el Plan de Desarrollo Econ\xF3mico y Social 2016 \u2013 2020 de nuestro gobierno.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "li", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Medio Ambiente");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Seguridad Industrial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Nuestra empresa est\xE1 comprometida con el respeto, calidad y conservaci\xF3n del medio ambiente, es as\xED que uno de sus principios b\xE1sicos es cumplir a cabalidad lo establecido en la Ley 1333 de Medio Ambiente y sus reglamentos detallados en la normativa boliviana. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "De igual manera, con la finalidad de velar por la seguridad y bienestar de sus trabajadores y poblaci\xF3n en general, se ha realizado el diagn\xF3stico corporativo de SYSO con el objetivo de adecuar y complementar los planes y procedimientos de seguridad industrial vigentes, a los lineamientos generales de ENDE Corporaci\xF3n y el D.L. 16998 Ley General de Higiene y Seguridad Ocupacional y Bienestar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Todos los proyectos de la empresa cuentan con Licencia Ambiental y son monitoreados constantemente por la Unidad de Medio Ambiente y Seguridad Industrial, la cual est\xE1 encargada de evaluar y reportar a la Gerencia General cualquier desviaci\xF3n en materia Ambiental o de Seguridad Industrial que pueda surgir en la ejecuci\xF3n de proyectos como en su Operaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "app-partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Nuestras Plantas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "ENDE ANDINA S.A.M. cuenta con tres plantas termoel\xE9ctricas en operaci\xF3n ubicadas en tres departamentos estrat\xE9gicos de Bolivia: Cochabamba (Entre R\xEDos), Tarija (Yaguacua) y Santa Cruz (Warnes).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "figure", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "figure", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Entre Rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Carretera nueva a Santa Cruz 1,7 km al este del centro de Entre R\xEDos. Cochabamba - Bolivia.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "figure", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "figure", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Carretera 9, Villamontes \u2013 Yacuiba 2,7 km al norte del centro de Yaguacua. Tarija - Bolivia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "figure", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "figure", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Ubicada en inmediaciones del Parque Industrial Latinoamericano (PILAT). Santa Cruz - Bolivia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_components_partners_partners_component__WEBPACK_IMPORTED_MODULE_1__["PartnersComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 15px;\n  padding: 20px 0 70px;\n  list-style: none;\n}\n\n.timeline[_ngcontent-%COMP%]:before {\n  top: 40px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 3px;\n  background-color: #eeeeee;\n  left: 25px;\n  margin-left: -1.5px;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  position: relative;\n  width: 100%;\n  float: left;\n  clear: left;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:before, .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:after {\n  clear: both;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  width: -webkit-calc(100% - 70px);\n  float: right;\n  background-color: #f4f4f4;\n  position: relative;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 26px;\n  right: auto;\n  left: -15px;\n  display: inline-block;\n  border-top: 15px solid transparent;\n  border-left: 0 solid #f4f4f4;\n  border-right: 15px solid #f4f4f4;\n  border-bottom: 15px solid transparent;\n  content: \" \";\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 27px;\n  left: -14px;\n  right: auto;\n  display: inline-block;\n  border-top: 14px solid transparent;\n  border-left: 0 solid #f4f4f4;\n  border-right: 14px solid #f4f4f4;\n  border-bottom: 14px solid transparent;\n  content: \" \";\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 50px;\n  height: 50px;\n  line-height: 50px;\n  font-size: 1.5rem;\n  text-align: center;\n  position: absolute;\n  top: 16px;\n  margin-left: 0;\n  background-color: orange;\n  z-index: 3;\n  border-top-right-radius: 50%;\n  border-top-left-radius: 50%;\n  border-bottom-right-radius: 50%;\n  border-bottom-left-radius: 50%;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  font-size: 0.8rem;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n  border-left-width: 0;\n  border-right-width: 15px;\n  left: -15px;\n  right: auto;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n  border-left-width: 0;\n  border-right-width: 14px;\n  left: -14px;\n  right: auto;\n}\n\n.timeline-title[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n}\n\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], .timeline-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n  padding: 0 20px 20px;\n  margin-bottom: 0;\n}\n\n.timeline-body[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]    + p[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.timeline-footer[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #e3e2e1;\n}\n\n.timeline-footer[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%] {\n  float: left;\n  clear: left;\n  margin-top: 0;\n}\n\n.timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(1)   .timeline-badge[_ngcontent-%COMP%] {\n  background-color: #11505d;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2)   .timeline-badge[_ngcontent-%COMP%] {\n  background-color: orange;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3)   .timeline-badge[_ngcontent-%COMP%] {\n  background-color: #94bc20;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4)   .timeline-badge[_ngcontent-%COMP%] {\n  background-color: #70a83b;\n}\n\n.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5)   .timeline-badge[_ngcontent-%COMP%] {\n  background-color: #00873d;\n}\n\n@media (min-width: 768px) {\n  ul.timeline[_ngcontent-%COMP%]:before {\n    left: 50%;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n    position: relative;\n    width: 50%;\n    float: left;\n    clear: left;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    right: 0;\n    margin-right: -35px;\n    width: 70px;\n    height: 70px;\n    line-height: 70px;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%]    > .timeline-badge[_ngcontent-%COMP%] {\n    left: -35px;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%] {\n    float: left;\n    margin-top: 10px;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:before {\n    border-left-width: 15px;\n    border-right-width: 0;\n    right: -15px;\n    left: auto;\n  }\n\n  ul.timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > .timeline-panel[_ngcontent-%COMP%]:after {\n    border-left-width: 14px;\n    border-right-width: 0;\n    right: -14px;\n    left: auto;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li.timeline-inverted[_ngcontent-%COMP%] {\n    float: right;\n    clear: right;\n    margin-top: 70px;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(2) {\n    margin-top: 105px;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(3) {\n    margin-top: 20px;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(4) {\n    margin-top: 70px;\n  }\n\n  .timeline[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:nth-child(5) {\n    margin-top: 70px;\n  }\n}\n\n.img-responsive[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEUUU7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0xKOztBRFFFO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0xKOztBRFFFOztFQUVFLFlBQUE7RUFDQSxjQUFBO0FDTEo7O0FEUUU7RUFDRSxXQUFBO0FDTEo7O0FEUUU7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7QUNMSjs7QURRRTtFQUNFLHdCQUFBO0VBRUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRFFFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFFO0VBQ0UsWUFBQTtBQ0xKOztBRFFFO0VBQ0Usb0JBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTEo7O0FEUUU7RUFDRSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNMSjs7QURRRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FEVUU7O0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVFO0VBQ0UsZUFBQTtBQ1BKOztBRFVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDUEo7O0FEVUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7QUNQSjs7QURVRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1BKOztBRFVFO0VBQ0UsT0FBQTtBQ1BKOztBRGNFO0VBQ0UseUJBQUE7QUNYSjs7QURjRTtFQUNFLHdCQUFBO0FDWEo7O0FEY0U7RUFDRSx5QkFBQTtBQ1hKOztBRGNFO0VBQ0UseUJBQUE7QUNYSjs7QURjRTtFQUNFLHlCQUFBO0FDWEo7O0FEYUU7RUFDRTtJQUNFLFNBQUE7RUNWSjs7RURhRTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7RUNWSjs7RURhRTtJQUNFLFFBQUE7SUFDQSxtQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUNWSjs7RURhRTtJQUNFLFdBQUE7RUNWSjs7RURhRTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQ1ZKOztFRGFFO0lBQ0UsdUJBQUE7SUFDQSxxQkFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VDVko7O0VEYUU7SUFDRSx1QkFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7RUNWSjs7RURhRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNWSjs7RURhRTtJQUNFLGlCQUFBO0VDVko7O0VEYUU7SUFDRSxnQkFBQTtFQ1ZKOztFRGFFO0lBQ0UsZ0JBQUE7RUNWSjs7RURhRTtJQUNFLGdCQUFBO0VDVko7QUFDRjs7QURhRTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUNYTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgcGFkZGluZzogMjBweCAwIDcwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAudGltZWxpbmUge1xuICAgIC8vICAgbWFyZ2luLXRvcDogMTA1cHg7XG4gICAgfVxuICB9XG4gIFxuIFxuICAudGltZWxpbmU6YmVmb3JlIHtcbiAgICB0b3A6IDQwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICB3aWR0aDogM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgbGVmdDogMjVweDtcbiAgICBtYXJnaW4tbGVmdDogLTEuNXB4O1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpOmJlZm9yZSxcbiAgLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpOmJlZm9yZSxcbiAgLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaTphZnRlciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgd2lkdGg6IC1tb3otY2FsYygxMDAlIC0gNzBweCk7XG4gICAgd2lkdGg6IC13ZWJraXQtY2FsYygxMDAlIC0gNzBweCk7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI2cHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gICAgbGVmdDogLTE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci10b3A6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWxlZnQ6IDAgc29saWQgI2Y0ZjRmNDtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgI2Y0ZjRmNDtcbiAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjdweDtcbiAgICBsZWZ0OiAtMTRweDtcbiAgICByaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItbGVmdDogMCBzb2xpZCAjZjRmNGY0O1xuICAgIGJvcmRlci1yaWdodDogMTRweCBzb2xpZCAjZjRmNGY0O1xuICAgIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCIgXCI7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE2cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MCU7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICBcbiAgLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgIGJvcmRlci1yaWdodC13aWR0aDogMTRweDtcbiAgICBsZWZ0OiAtMTRweDtcbiAgICByaWdodDogYXV0bztcbiAgfVxuICBcbiAgLnRpbWVsaW5lLXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBcbiAgfVxuICBcbiAgLnRpbWVsaW5lLWJvZHkgPiBwLFxuICAudGltZWxpbmUtYm9keSA+IHVsIHtcbiAgICBwYWRkaW5nOiAwIDIwcHggMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIFxuICAudGltZWxpbmUtYm9keSA+IHAgKyBwIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gIH1cbiAgXG4gIC50aW1lbGluZS1mb290ZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTJlMTtcbiAgfVxuICBcbiAgLnRpbWVsaW5lLWZvb3RlciA+IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjbGVhcjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuICBcbiAgLnRpbWVsaW5lLWhlYWRpbmcgaW1nIHtcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLnRpbWVsaW5lID4gbGk6bnRoLWNoaWxkKDEpIC50aW1lbGluZS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMTE1MDVkO1xuICB9XG5cbiAgLnRpbWVsaW5lID4gbGk6bnRoLWNoaWxkKDIpIC50aW1lbGluZS1iYWRnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICB9XG4gIFxuICAudGltZWxpbmUgPiBsaTpudGgtY2hpbGQoMykgLnRpbWVsaW5lLWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM5NGJjMjA7XG4gIH1cbiAgXG4gIC50aW1lbGluZSA+IGxpOm50aC1jaGlsZCg0KSAudGltZWxpbmUtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzcwYTgzYjtcbiAgfVxuXG4gIC50aW1lbGluZSA+IGxpOm50aC1jaGlsZCg1KSAudGltZWxpbmUtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwODczZDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICB1bC50aW1lbGluZTpiZWZvcmUge1xuICAgICAgbGVmdDogNTAlO1xuICAgIH1cbiAgXG4gICAgLnRpbWVsaW5lID4gbGkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGNsZWFyOiBsZWZ0O1xuICAgIH1cbiAgXG4gICAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gICAgICByaWdodDogMDtcbiAgICAgIG1hcmdpbi1yaWdodDogLTM1cHg7XG4gICAgICB3aWR0aDogNzBweDtcbiAgICAgIGhlaWdodDogNzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgIH1cbiAgXG4gICAgLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtYmFkZ2Uge1xuICAgICAgbGVmdDogLTM1cHg7XG4gICAgfVxuICBcbiAgICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG4gIFxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAxNXB4O1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgICAgcmlnaHQ6IC0xNXB4O1xuICAgICAgbGVmdDogYXV0bztcbiAgICB9XG4gIFxuICAgIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWw6YWZ0ZXIge1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDE0cHg7XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6IDA7XG4gICAgICByaWdodDogLTE0cHg7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgIH1cbiAgXG4gICAgLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgY2xlYXI6IHJpZ2h0O1xuICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB9XG4gIFxuICAgIC50aW1lbGluZSA+IGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxMDVweDtcbiAgICB9XG4gIFxuICAgIC50aW1lbGluZSA+IGxpOm50aC1jaGlsZCgzKSB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgXG4gICAgLnRpbWVsaW5lID4gbGk6bnRoLWNoaWxkKDQpIHtcbiAgICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gICAgfVxuICBcbiAgICAudGltZWxpbmUgPiBsaTpudGgtY2hpbGQoNSkge1xuICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICB9XG4gIH1cblxuICAuaW1nLXJlc3BvbnNpdmV7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBcbiAgfSIsIi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogMjBweCAwIDcwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50aW1lbGluZTpiZWZvcmUge1xuICB0b3A6IDQwcHg7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIiBcIjtcbiAgd2lkdGg6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgbGVmdDogMjVweDtcbiAgbWFyZ2luLWxlZnQ6IC0xLjVweDtcbn1cblxuLnRpbWVsaW5lID4gbGkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGxlZnQ7XG59XG5cbi50aW1lbGluZSA+IGxpOmJlZm9yZSxcbi50aW1lbGluZSA+IGxpOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUgPiBsaTpiZWZvcmUsXG4udGltZWxpbmUgPiBsaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gIHdpZHRoOiAtbW96LWNhbGMoMTAwJSAtIDcwcHgpO1xuICB3aWR0aDogLXdlYmtpdC1jYWxjKDEwMCUgLSA3MHB4KTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNnB4O1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXRvcDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgI2Y0ZjRmNDtcbiAgYm9yZGVyLXJpZ2h0OiAxNXB4IHNvbGlkICNmNGY0ZjQ7XG4gIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyN3B4O1xuICBsZWZ0OiAtMTRweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXRvcDogMTRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IDAgc29saWQgI2Y0ZjRmNDtcbiAgYm9yZGVyLXJpZ2h0OiAxNHB4IHNvbGlkICNmNGY0ZjQ7XG4gIGJvcmRlci1ib3R0b206IDE0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuXG4udGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1iYWRnZSB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIHotaW5kZXg6IDM7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTAlO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtcGFuZWw6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gIGJvcmRlci1yaWdodC13aWR0aDogMTVweDtcbiAgbGVmdDogLTE1cHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDE0cHg7XG4gIGxlZnQ6IC0xNHB4O1xuICByaWdodDogYXV0bztcbn1cblxuLnRpbWVsaW5lLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGltZWxpbmUtYm9keSA+IHAsXG4udGltZWxpbmUtYm9keSA+IHVsIHtcbiAgcGFkZGluZzogMCAyMHB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50aW1lbGluZS1ib2R5ID4gcCArIHAge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50aW1lbGluZS1mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNlMmUxO1xufVxuXG4udGltZWxpbmUtZm9vdGVyID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGltZWxpbmUgPiBsaS50aW1lbGluZS1pbnZlcnRlZCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjbGVhcjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQgPiAudGltZWxpbmUtYmFkZ2Uge1xuICBsZWZ0OiAwO1xufVxuXG4udGltZWxpbmUgPiBsaTpudGgtY2hpbGQoMSkgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTA1ZDtcbn1cblxuLnRpbWVsaW5lID4gbGk6bnRoLWNoaWxkKDIpIC50aW1lbGluZS1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbn1cblxuLnRpbWVsaW5lID4gbGk6bnRoLWNoaWxkKDMpIC50aW1lbGluZS1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NGJjMjA7XG59XG5cbi50aW1lbGluZSA+IGxpOm50aC1jaGlsZCg0KSAudGltZWxpbmUtYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzBhODNiO1xufVxuXG4udGltZWxpbmUgPiBsaTpudGgtY2hpbGQoNSkgLnRpbWVsaW5lLWJhZGdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODczZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHVsLnRpbWVsaW5lOmJlZm9yZSB7XG4gICAgbGVmdDogNTAlO1xuICB9XG5cbiAgLnRpbWVsaW5lID4gbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY2xlYXI6IGxlZnQ7XG4gIH1cblxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0zNXB4O1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgfVxuXG4gIC50aW1lbGluZSA+IGxpLnRpbWVsaW5lLWludmVydGVkID4gLnRpbWVsaW5lLWJhZGdlIHtcbiAgICBsZWZ0OiAtMzVweDtcbiAgfVxuXG4gIHVsLnRpbWVsaW5lID4gbGkgPiAudGltZWxpbmUtcGFuZWwge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gIH1cblxuICB1bC50aW1lbGluZSA+IGxpID4gLnRpbWVsaW5lLXBhbmVsOmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDE1cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgIHJpZ2h0OiAtMTVweDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgdWwudGltZWxpbmUgPiBsaSA+IC50aW1lbGluZS1wYW5lbDphZnRlciB7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDE0cHg7XG4gICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwO1xuICAgIHJpZ2h0OiAtMTRweDtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG5cbiAgLnRpbWVsaW5lID4gbGkudGltZWxpbmUtaW52ZXJ0ZWQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjbGVhcjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNzBweDtcbiAgfVxuXG4gIC50aW1lbGluZSA+IGxpOm50aC1jaGlsZCgyKSB7XG4gICAgbWFyZ2luLXRvcDogMTA1cHg7XG4gIH1cblxuICAudGltZWxpbmUgPiBsaTpudGgtY2hpbGQoMykge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cblxuICAudGltZWxpbmUgPiBsaTpudGgtY2hpbGQoNCkge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cblxuICAudGltZWxpbmUgPiBsaTpudGgtY2hpbGQoNSkge1xuICAgIG1hcmdpbi10b3A6IDcwcHg7XG4gIH1cbn1cbi5pbWctcmVzcG9uc2l2ZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HistoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-history',
          templateUrl: './history.component.html',
          styleUrls: ['./history.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/new/new.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/new/new.component.ts ***!
    \********************************************/

  /*! exports provided: NewComponent */

  /***/
  function srcAppPagesNewNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewComponent", function () {
      return NewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _services_publications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/publications.service */
    "./src/app/services/publications.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/image.pipe */
    "./src/app/pipes/image.pipe.ts");

    function NewComponent_figure_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r36.publication.image, "publication"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NewComponent_li_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r38.name);
      }
    }

    var NewComponent =
    /*#__PURE__*/
    function () {
      function NewComponent(publicationsService, categoriesService, router, activatedRoute) {
        var _this3 = this;

        _classCallCheck(this, NewComponent);

        this.publicationsService = publicationsService;
        this.categoriesService = categoriesService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loadingCat = true;
        this.categories = [];
        this.totalCat = 0;
        this.toCat = 0;
        this.ruta = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices;
        activatedRoute.params.subscribe(function (params) {
          var id = params.id;
          console.log('identificador ', id);

          _this3.getPublication(id);
        });
      }

      _createClass(NewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCategories();
        }
      }, {
        key: "getPublication",
        value: function getPublication(id) {
          var _this4 = this;

          this.publicationsService.getPublication(id).subscribe(function (publication) {
            _this4.publication = publication;
            _this4.publication.category = publication.category._id;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this5 = this;

          this.loadingCat = true;
          this.categoriesService.getCategories(this.toCat).subscribe(function (res) {
            var _this5$categories;

            // console.log('Llega al componente', res);
            (_this5$categories = _this5.categories).push.apply(_this5$categories, _toConsumableArray(res));

            _this5.loadingCat = false;
          });
        }
      }]);

      return NewComponent;
    }();

    NewComponent.ɵfac = function NewComponent_Factory(t) {
      return new (t || NewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    NewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewComponent,
      selectors: [["app-new"]],
      decls: 72,
      vars: 9,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "javascript:void(0)"], ["href", "#"], [1, "row"], [1, "col-lg-8", "col-xl-9"], [1, "post-preview"], ["class", "post-preview-img", 4, "ngIf"], [1, "pp-caption"], [1, "post"], [1, "pp-bottom"], [1, "about-author"], [1, "author-info"], [1, "post-social"], [1, "ps-social-icons"], ["href", "https://www.facebook.com/EndeAndina"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/EndeAndina"], [1, "fab", "fa-twitter"], ["href", "https://www.instagram.com/endeandinasam/"], [1, "fab", "fa-instagram"], [1, "col-lg-4", "col-xl-3", "space-break"], [1, "form-group", "blog-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Buscar", 1, "form-control"], [1, "aside-list-group"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "aside-tags"], ["href", "javascript:void(0)", "role", "button", 1, "btn", "btn-tags"], [1, "post-preview-img"], ["alt", "", 3, "src"], [1, "list-group-item"], [1, "badge", "badge-primary", "badge-pill"]],
      template: function NewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuestras ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Noticias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "detalle noticia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NewComponent_figure_19_Template, 3, 4, "figure", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Categor\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, NewComponent_li_56_Template, 5, 1, "li", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Termoel\xE9ctrica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Electricidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Planta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Gobierno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.publication.image);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.category.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.publication.category.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 7, ctx.publication.date));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_6__["ImagePipe"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new',
          templateUrl: './new.component.html',
          styles: []
        }]
      }], function () {
        return [{
          type: _services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]
        }, {
          type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/news/news.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/news/news.component.ts ***!
    \**********************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppPagesNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _services_publications_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/publications.service */
    "./src/app/services/publications.service.ts");
    /* harmony import */


    var _services_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/categories.service */
    "./src/app/services/categories.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _pipes_object_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../pipes/object-filter.pipe */
    "./src/app/pipes/object-filter.pipe.ts");
    /* harmony import */


    var _pipes_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../pipes/truncate-text.pipe */
    "./src/app/pipes/truncate-text.pipe.ts");
    /* harmony import */


    var _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../pipes/image.pipe */
    "./src/app/pipes/image.pipe.ts");

    function NewsComponent_div_18_figure_1_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", new_r2.lnk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, new_r2.image, "publication"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/new", a1];
    };

    function NewsComponent_div_18_figure_1_a_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "image");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, new_r2._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, new_r2.image, "publication"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NewsComponent_div_18_figure_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_18_figure_1_a_1_Template, 3, 5, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewsComponent_div_18_figure_1_a_2_Template, 3, 7, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !new_r2.lnk);
      }
    }

    function NewsComponent_div_18_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", new_r2.lnk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.title);
      }
    }

    function NewsComponent_div_18_a_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, new_r2._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.title);
      }
    }

    function NewsComponent_div_18_a_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leer noticia completa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", new_r2.lnk, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function NewsComponent_div_18_a_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Leer noticia completa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, new_r2._id));
      }
    }

    function NewsComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NewsComponent_div_18_figure_1_Template, 3, 2, "figure", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NewsComponent_div_18_a_4_Template, 2, 2, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsComponent_div_18_a_6_Template, 2, 4, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "truncateText");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NewsComponent_div_18_a_11_Template, 2, 1, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewsComponent_div_18_a_12_Template, 2, 3, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var new_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.image);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !new_r2.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, new_r2.description, 300));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", new_r2.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !new_r2.lnk);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.category.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](new_r2.category.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 12, new_r2.date));
      }
    }

    function NewsComponent_li_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cat_r17.name);
      }
    }

    var NewsComponent =
    /*#__PURE__*/
    function () {
      function NewsComponent(publicationsService, categoriesService, router) {
        _classCallCheck(this, NewsComponent);

        this.publicationsService = publicationsService;
        this.categoriesService = categoriesService;
        this.router = router;
        this.loadingCat = true;
        this.categories = [];
        this.totalCat = 0;
        this.toCat = 0;
        this.loading = true;
        this.publications = [];
        this.total = 0;
        this.to = 0;
        this.ruta = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices; // router.events.subscribe(s => { 
        //   if (s instanceof NavigationEnd) { 
        //   const tree = router.parseUrl(router.url); 
        //   if (tree.fragment) {
        //    const element = document.querySelector("#" + tree.fragment); 
        //    if (element) { element.scrollIntoView(true); } 
        //   }
        //   }
        //  });
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPublications();
          this.getCategories(); // console.log('Resultados de Noticias ', this.publications);
        }
      }, {
        key: "getPublications",
        value: function getPublications() {
          var _this6 = this;

          this.loading = true;
          this.publicationsService.getPublications(this.to).subscribe(function (result) {
            var _this6$publications;

            // console.log("REsultados publicaciones", result);
            (_this6$publications = _this6.publications).push.apply(_this6$publications, _toConsumableArray(result));

            _this6.loading = false;
          });
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var _this7 = this;

          this.loadingCat = true;
          this.categoriesService.getCategories(this.toCat).subscribe(function (res) {
            var _this7$categories;

            // console.log('Llega al componente', res);
            (_this7$categories = _this7.categories).push.apply(_this7$categories, _toConsumableArray(res));

            _this7.loadingCat = false;
          });
        }
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 45,
      vars: 6,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "javascript:void(0)"], ["href", "#"], [1, "row"], [1, "col-lg-8", "col-xl-9"], ["class", "post-preview", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-xl-3", "space-break"], [1, "form-group", "blog-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "aside-list-group"], [1, "list-group", "list-group-flush"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "aside-tags"], ["href", "javascript:void(0)", "role", "button", 1, "btn", "btn-tags"], [1, "post-preview"], ["class", "post-preview-img", 4, "ngIf"], [1, "pp-caption"], ["target", "_blank", 3, "href", 4, "ngIf"], [3, "routerLink", 4, "ngIf"], [1, "link"], [1, "post"], [1, "pp-bottom"], [1, "about-author"], [1, "author-info"], [1, "post-social"], [1, "ps-social-icons"], ["href", "https://www.facebook.com/EndeAndina"], [1, "fab", "fa-facebook-f"], ["href", "https://twitter.com/EndeAndina"], [1, "fab", "fa-twitter"], ["href", "https://www.instagram.com/endeandinasam/"], [1, "fab", "fa-instagram"], [1, "post-preview-img"], ["target", "_blank", 3, "href"], ["alt", "", 3, "src"], [3, "routerLink"], [1, "list-group-item"], [1, "badge", "badge-primary", "badge-pill"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuestras ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Noticias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Noticias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NewsComponent_div_18_Template, 34, 14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "objFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "aside");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewsComponent_Template_input_ngModelChange_24_listener($event) {
            return ctx.filterPost = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Categor\xEDas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, NewsComponent_li_29_Template, 5, 1, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tags");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Termoel\xE9ctrica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ende");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Electricidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Planta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Gobierno");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 3, ctx.publications, ctx.filterPost));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterPost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      pipes: [_pipes_object_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["ObjectFilterPipe"], _pipes_truncate_text_pipe__WEBPACK_IMPORTED_MODULE_8__["TruncateTextPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _pipes_image_pipe__WEBPACK_IMPORTED_MODULE_9__["ImagePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.scss']
        }]
      }], function () {
        return [{
          type: _services_publications_service__WEBPACK_IMPORTED_MODULE_2__["PublicationsService"]
        }, {
          type: _services_categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/nopage/nopage.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/nopage/nopage.component.ts ***!
    \**************************************************/

  /*! exports provided: NopageComponent */

  /***/
  function srcAppPagesNopageNopageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NopageComponent", function () {
      return NopageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NopageComponent =
    /*#__PURE__*/
    function () {
      function NopageComponent() {
        _classCallCheck(this, NopageComponent);
      }

      _createClass(NopageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NopageComponent;
    }();

    NopageComponent.ɵfac = function NopageComponent_Factory(t) {
      return new (t || NopageComponent)();
    };

    NopageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NopageComponent,
      selectors: [["app-nopage"]],
      decls: 8,
      vars: 0,
      consts: [[1, "error-page-container"], [1, "ep-content"]],
      template: function NopageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404 ERROR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Oops!Esta p\xE1gina no existe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Por favor, vuelve a buscar en el menu principal la pagina que estas buscando");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vcGFnZS9ub3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NopageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nopage',
          templateUrl: './nopage.component.html',
          styleUrls: ['./nopage.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pestrategico/pestrategico.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/pestrategico/pestrategico.component.ts ***!
    \**************************************************************/

  /*! exports provided: PestrategicoComponent */

  /***/
  function srcAppPagesPestrategicoPestrategicoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PestrategicoComponent", function () {
      return PestrategicoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PestrategicoComponent =
    /*#__PURE__*/
    function () {
      function PestrategicoComponent() {
        _classCallCheck(this, PestrategicoComponent);
      }

      _createClass(PestrategicoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PestrategicoComponent;
    }();

    PestrategicoComponent.ɵfac = function PestrategicoComponent_Factory(t) {
      return new (t || PestrategicoComponent)();
    };

    PestrategicoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PestrategicoComponent,
      selectors: [["app-pestrategico"]],
      decls: 100,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "row"], [1, "col-lg-12", "col-xl-12", "space-break"], [1, "solution-pic"], ["src", "../assets/img/graphic/map-objetivo-estrategicos.png", "alt", ""], [1, "container-wide-grid"], [1, "col-lg-6", "full-color-layer"], [1, "fc-content", "fc-left-align"], [1, "span-checklist", "foda-list"], [1, "col-lg-6", "full-caption-layer-foda"], [1, "fc-content"], [1, "order-last", "order-md-12", "col-lg-6", "full-caption-layer-foda"], [1, "order-first", "order-md-12", "col-lg-6", "full-color-layer-alt"]],
      template: function PestrategicoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Plan Estrat\xE9gico Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Plan Estrat\xE9gico Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Plan Estrat\xE9gico Empresarial - PEE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " El mapa estrat\xE9gico de ENDE ANDINA S.A.M. es la representaci\xF3n visual de la estrategia de la empresa, que describe el proceso de creaci\xF3n de valor mediante las relaciones causa efecto entre los objetivos, desde cuatro perspectivas de an\xE1lisis.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "figure", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "FODA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Debilidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Dependencia de los fabricantes de equipos en cuanto a tiempos de suministro, costos de repuestos y tiempos de respuesta oportunos de servicios especializados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Mecanismos internos de comunicaci\xF3n y coordinaci\xF3n entre \xE1reas, en proceso de ajuste y mejora.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Personal en proceso de formaci\xF3n en tecnolog\xEDa de Ciclos Combinados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "En proceso de implementaci\xF3n de pol\xEDticas, reglamentos, procesos y procedimientos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Monitoreo de Indicadores Clave de Proceso y reportes sobre los mismos, en proceso de ajuste y mejora en el marco de contratos de mantenimiento a largo plazo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "FODA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Fortalezas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Empresa de generaci\xF3n de energ\xEDa el\xE9ctrica con crecimiento sostenido y experiencia en gesti\xF3n de proyectos termoel\xE9ctricos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cumplimiento de los indicadores operativos respaldados por contratos de mantenimiento a largo plazo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Personal capacitado y con experiencia en el manejo de centrales de generaci\xF3n de Ciclo Abierto.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Empresa consolidada y con buena gesti\xF3n empresarial.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Aplicaci\xF3n de criterios de estandarizaci\xF3n con equipamiento de alta tecnolog\xEDa en plantas de generaci\xF3n de energ\xEDa y en nuevos proyectos.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "FODA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Amenazas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Incorporaci\xF3n al parque de generaci\xF3n el\xE9ctrica energ\xEDas renovables (Ej. e\xF3lica y solar) que incrementar\xE1n los fondos de estabilizaci\xF3n afectando la liquidez de las empresas el\xE9ctricas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Desplazamiento de la generaci\xF3n termoel\xE9ctrica por cambio de matriz energ\xE9tica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Baja rentabilidad debido a los bajos precios de mercado mayorista de energ\xEDa y potencia y al constante incremento de los costos de producci\xF3n (Ej. Peaje, beneficiarios tarifa dignidad, salarios).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Mayor burocratizaci\xF3n y elevaci\xF3n de costos administrativos y de personal, debido al incremento de instancias de control gubernamental (Unidades de Transparencia, Contralor\xEDa, COSEP, etc.) y a la aplicaci\xF3n de la Ley de Empresas P\xFAblicas y Reglamentaci\xF3n Corporativa asociada.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Ley de Electricidad vigente no adecuada a la realidad actual del mercado el\xE9ctrico Boliviano ni al marco de las nuevas pol\xEDticas sectoriales. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "FODA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Oportunidades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Proyecciones de inversi\xF3n del Gobierno Nacional, que impulsan el desarrollo del sistema el\xE9ctrico (mercado interno y externo).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Necesidad sectorial de contar con empresas especializadas en ejecuci\xF3n y operaci\xF3n de proyectos de generaci\xF3n el\xE9ctrica.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Capacitaci\xF3n especializada y continua en el marco de los Contratos de mantenimiento a largo plazo y contratos EPC de proyectos de Ciclo Combinado.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Participaci\xF3n en la ejecuci\xF3n de proyectos de generaci\xF3n el\xE9ctrica con energ\xEDas renovables.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Transferencia de experiencias y mejores pr\xE1cticas entre filiales de la Corporaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Blc3RyYXRlZ2ljby9wZXN0cmF0ZWdpY28uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PestrategicoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pestrategico',
          templateUrl: './pestrategico.component.html',
          styleUrls: ['./pestrategico.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/poa/poa.component.ts":
  /*!********************************************!*\
    !*** ./src/app/pages/poa/poa.component.ts ***!
    \********************************************/

  /*! exports provided: PoaComponent */

  /***/
  function srcAppPagesPoaPoaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PoaComponent", function () {
      return PoaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var PoaComponent =
    /*#__PURE__*/
    function () {
      function PoaComponent() {
        _classCallCheck(this, PoaComponent);

        this.lineChartData = [{
          data: [451516.99, 738330, 767215, 670566, 656649, 324201, 686160, 195520, 76250, 312450],
          label: 'PTERI'
        }, {
          data: [,,,, 328398, 1104884, 1280687.56, 1266871.58, 1220783, 1241732],
          label: 'PTSUR'
        }, {
          data: [,,,,, 610389, 1625099, 1558131.02, 1582895.33, 1285182.92],
          label: 'PTWAR'
        }];
        this.generacionData = [{
          data: [451516.99, 738330, 767215, 670566, 656649, 324201, 686160, 195520, 76250, 10710],
          label: 'PTERI CICLO ABIERTO'
        }, {
          data: [,,,, 328398, 1104884, 1280687.56, 1266871.58, 1220783, 450030],
          label: 'PTSUR CICLO ABIERTO'
        }, {
          data: [,,,,, 610389, 1625099, 1558131.02, 1582895.33, 1285182.92],
          label: 'PTWAR CICLO ABIERTO'
        }, {
          data: [,,,,,,,, 0, 18093],
          label: 'PTERI CICLO COMBINADO'
        }, {
          data: [,,,,,,,, 0, 791702],
          label: 'PTSUR CICLO COMBINADO'
        }, {
          data: [,,,,,,,, 0, 571474.48],
          label: 'PTWAR CICLO COMBINADO'
        }];
        this.utilidadData = [{
          data: [750244, 2366575, 6714122, 752442, 4601226, 9283171, 22161048, 42796665, 77320592, 60137372, 64717917],
          label: 'PTERI'
        }];
        this.proyectadaData = [{
          data: [135010557, 108304631, 78461532, 104375853],
          label: 'PTERI'
        }];
        this.proyectadaChartLabels = ['2020', '2021', '2022', '2023'];
        this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.lineChartOptions = {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [{
              id: 'y-axis-0',
              position: 'left'
            }]
          }
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,188,32,0)',
          borderColor: 'rgba(148,188,32,1)',
          pointBackgroundColor: 'rgba(148,188,32,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,188,32,0.8)'
        }, {
          backgroundColor: 'rgba(17,80,93,0)',
          borderColor: 'rgba(17,80,93,1)',
          pointBackgroundColor: 'rgba(17,80,93,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(17,80,93,1)'
        }, {
          backgroundColor: 'rgba(249,200,14,0)',
          borderColor: 'rgba(249,200,14,1)',
          pointBackgroundColor: 'rgba(249,200,14,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(249,200,14,0.8)'
        }, {
          backgroundColor: 'rgba(248,102,36,0)',
          borderColor: 'rgba(248,102,36,1)',
          pointBackgroundColor: 'rgba(248,102,36,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(248,102,36,0.8)'
        }, {
          backgroundColor: 'rgba(102,46,155,0)',
          borderColor: 'rgba(102,46,155,1)',
          pointBackgroundColor: 'rgba(102,46,155,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(102,46,155,0.8)'
        }, {
          backgroundColor: 'rgba(67,188,205,0)',
          borderColor: 'rgba(67,188,205,1)',
          pointBackgroundColor: 'rgba(67,188,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(67,188,205,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.barChartType = 'bar';
        this.barChartLegend = true; // this.getData();
      }

      _createClass(PoaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // events

      }, {
        key: "chartClicked",
        value: function chartClicked(_ref) {
          var event = _ref.event,
              active = _ref.active;
          console.log(event, active);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(_ref2) {
          var event = _ref2.event,
              active = _ref2.active;
          console.log(event, active);
        }
      }]);

      return PoaComponent;
    }();

    PoaComponent.ɵfac = function PoaComponent_Factory(t) {
      return new (t || PoaComponent)();
    };

    PoaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PoaComponent,
      selectors: [["app-poa"]],
      decls: 60,
      vars: 14,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "container-wide-grid"], [1, "row"], [1, "col-lg-6", "full-prod-layer"], [1, "fc-content", "fc-left-align"], [2, "color", "rgb(245, 197, 41)"], [1, "text-white"], [1, "col-lg-6", "full-caption-layer"], [1, "fc-content"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "plugins", "chartHover", "chartClick"], [1, "order-last", "order-md-12", "col-lg-6", "full-caption-layer"], [1, "order-first", "order-md-12", "col-lg-6", "full-prod-layer-alt"]],
      template: function PoaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gesti\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Programa Operativo Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Programa Operativo Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Programa Operativo Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "POA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Produccion bruta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "La producci\xF3n de energ\xEDa bruta para la gesti\xF3n 2019 en el Mercado El\xE9ctrico Mayorista (MEM) del pa\xEDs, fue de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "9.530.762 MWh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " , de los cuales ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "2.839.364,92 MWh");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " corresponden a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Producci\xF3n Bruta por planta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function PoaComponent_Template_canvas_chartHover_42_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function PoaComponent_Template_canvas_chartClick_42_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Generaci\xF3n por tipo de ciclo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function PoaComponent_Template_canvas_chartHover_48_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function PoaComponent_Template_canvas_chartClick_48_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "POA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Generaci\xF3n de energ\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Dentro de la generaci\xF3n termoel\xE9ctrica, ENDE ANDINA S.A.M. contribuy\xF3 al sistema con 2.843.728 MWh que representa el 47% respecto a la generaci\xF3n termoel\xE9ctrica total de energ\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " En la participaci\xF3n dentro del Sistema Interconectado Nacional, ENDE ANDINA S.A.M. contribuye con el 30% de la generaci\xF3n total de energ\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.lineChartData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.generacionData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BvYS9wb2EuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PoaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poa',
          templateUrl: './poa.component.html',
          styleUrls: ['./poa.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/presupuesto/presupuesto.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/presupuesto/presupuesto.component.ts ***!
    \************************************************************/

  /*! exports provided: PresupuestoComponent */

  /***/
  function srcAppPagesPresupuestoPresupuestoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresupuestoComponent", function () {
      return PresupuestoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var PresupuestoComponent =
    /*#__PURE__*/
    function () {
      function PresupuestoComponent() {
        _classCallCheck(this, PresupuestoComponent);

        this.lineChartData = [{
          data: [451516.99, 738330, 767215, 670566, 656649, 324201, 686160, 195520, 76250, 312450],
          label: 'PTERI'
        }, {
          data: [,,,, 328398, 1104884, 1280687.56, 1266871.58, 1220783, 1241732],
          label: 'PTSUR'
        }, {
          data: [,,,,, 610389, 1625099, 1558131.02, 1582895.33, 1285182.92],
          label: 'PTWAR'
        }];
        this.generacionData = [{
          data: [451516.99, 738330, 767215, 670566, 656649, 324201, 686160, 195520, 76250, 10710],
          label: 'PTERI CICLO ABIERTO'
        }, {
          data: [,,,, 328398, 1104884, 1280687.56, 1266871.58, 1220783, 450030],
          label: 'PTSUR CICLO ABIERTO'
        }, {
          data: [,,,,, 610389, 1625099, 1558131.02, 1582895.33, 1285182.92],
          label: 'PTWAR CICLO ABIERTO'
        }, {
          data: [,,,,,,,, 0, 18093],
          label: 'PTERI CICLO COMBINADO'
        }, {
          data: [,,,,,,,, 0, 791702],
          label: 'PTSUR CICLO COMBINADO'
        }, {
          data: [,,,,,,,, 0, 571474.48],
          label: 'PTWAR CICLO COMBINADO'
        }];
        this.utilidadData = [{
          data: [750244, 2366575, 6714122, 752442, 4601226, 9283171, 22161048, 42796665, 77320592, 60137372, 64717917],
          label: 'Utilidad de la empresa'
        }];
        this.proyectadaData = [{
          data: [135010557, 108304631, 78461532, 104375853],
          label: 'Utilidad de la empresa'
        }];
        this.proyectadaChartLabels = ['2020', '2021', '2022', '2023'];
        this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.lineChartOptions = {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [{
              id: 'y-axis-0',
              position: 'left'
            }]
          }
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,188,32,0.9)',
          borderColor: 'rgba(148,188,32,1)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.barChartType = 'bar';
        this.barChartLegend = true; // this.getData();
      }

      _createClass(PresupuestoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // events

      }, {
        key: "chartClicked",
        value: function chartClicked(_ref3) {
          var event = _ref3.event,
              active = _ref3.active;
          console.log(event, active);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(_ref4) {
          var event = _ref4.event,
              active = _ref4.active;
          console.log(event, active);
        }
      }]);

      return PresupuestoComponent;
    }();

    PresupuestoComponent.ɵfac = function PresupuestoComponent_Factory(t) {
      return new (t || PresupuestoComponent)();
    };

    PresupuestoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PresupuestoComponent,
      selectors: [["app-presupuesto"]],
      decls: 36,
      vars: 6,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "container-wide-grid"], [1, "row"], [1, "order-first", "order-md-12", "col-lg-6", "full-prod-layer-alt"], [1, "fc-content"], [2, "color", "rgb(245, 197, 41)"], [1, "text-white"], [1, "col-lg-6", "full-caption-layer"], [2, "display", "block"], ["baseChart", "", "height", "180", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"]],
      template: function PresupuestoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gesti\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Presupuesto Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Presupuesto Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Presupuesto Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Presupuesto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Utilidad de la Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "El cuadro presenta las cifras de utilidad que obtuvo la empresa cada a\xF1o desde su fundaci\xF3n, expresado en Bolivianos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Utilidad de la empresa (Bs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function PresupuestoComponent_Template_canvas_chartHover_35_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function PresupuestoComponent_Template_canvas_chartClick_35_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.utilidadData)("labels", ctx.lineChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.barChartType);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN1cHVlc3RvL3ByZXN1cHVlc3RvLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresupuestoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-presupuesto',
          templateUrl: './presupuesto.component.html',
          styleUrls: ['./presupuesto.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/proyecciones/proyecciones.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/proyecciones/proyecciones.component.ts ***!
    \**************************************************************/

  /*! exports provided: ProyeccionesComponent */

  /***/
  function srcAppPagesProyeccionesProyeccionesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProyeccionesComponent", function () {
      return ProyeccionesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! chartjs-plugin-annotation */
    "./node_modules/chartjs-plugin-annotation/src/index.js");
    /* harmony import */


    var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");

    var ProyeccionesComponent =
    /*#__PURE__*/
    function () {
      function ProyeccionesComponent() {
        _classCallCheck(this, ProyeccionesComponent);

        this.generacionData = [{
          data: [686160, 195520, 76250, 312450],
          label: 'PTERI'
        }, {
          data: [1280687.56, 1266871.58, 1220783, 1241732],
          label: 'PTSUR'
        }, {
          data: [1625099, 1558131.02, 1582895.33, 1285182.92],
          label: 'PTWAR'
        }];
        this.utilidadData = [{
          data: [750244, 2366575, 6714122, 752442, 4601226, 9283171, 22161048, 42796665, 77320592, 60137372, 64717917],
          label: 'PTERI'
        }];
        this.proyectadaData = [{
          data: [135010557, 108304631, 78461532, 104375853],
          label: 'Utilidad proyectada'
        }];
        this.proyectadaChartLabels = ['2020', '2021', '2022', '2023'];
        this.lineChartLabels = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
        this.lineChartOptions = {
          responsive: true,
          scales: {
            // We use this empty structure as a placeholder for dynamic theming.
            xAxes: [{}],
            yAxes: [{
              id: 'y-axis-0',
              position: 'left'
            }]
          }
        };
        this.barChartColors = [{
          backgroundColor: 'rgba(248,102,36,1)'
        }];
        this.lineChartColors = [{
          backgroundColor: 'rgba(148,188,32,0)',
          borderColor: 'rgba(148,188,32,1)',
          pointBackgroundColor: 'rgba(148,188,32,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(148,188,32,0.8)'
        }, {
          backgroundColor: 'rgba(248,102,36,0)',
          borderColor: 'rgba(248,102,36,1)',
          pointBackgroundColor: 'rgba(248,102,36,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(248,102,36,0.8)'
        }, {
          backgroundColor: 'rgba(249,200,14,0)',
          borderColor: 'rgba(249,200,14,1)',
          pointBackgroundColor: 'rgba(249,200,14,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(249,200,14,0.8)'
        }, {
          backgroundColor: 'rgba(17,80,93,0)',
          borderColor: 'rgba(17,80,93,1)',
          pointBackgroundColor: 'rgba(17,80,93,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(17,80,93,1)'
        }, {
          backgroundColor: 'rgba(102,46,155,0)',
          borderColor: 'rgba(102,46,155,1)',
          pointBackgroundColor: 'rgba(102,46,155,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(102,46,155,0.8)'
        }, {
          backgroundColor: 'rgba(67,188,205,0)',
          borderColor: 'rgba(67,188,205,1)',
          pointBackgroundColor: 'rgba(67,188,205,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(67,188,205,0.8)'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.barChartType = 'bar';
        this.barChartLegend = true; // this.getData();
      }

      _createClass(ProyeccionesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // events

      }, {
        key: "chartClicked",
        value: function chartClicked(_ref5) {
          var event = _ref5.event,
              active = _ref5.active;
          console.log(event, active);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(_ref6) {
          var event = _ref6.event,
              active = _ref6.active;
          console.log(event, active);
        }
      }]);

      return ProyeccionesComponent;
    }();

    ProyeccionesComponent.ɵfac = function ProyeccionesComponent_Factory(t) {
      return new (t || ProyeccionesComponent)();
    };

    ProyeccionesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProyeccionesComponent,
      selectors: [["app-proyecciones"]],
      decls: 51,
      vars: 12,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-title"], [1, "container-wide-grid"], [1, "row"], [1, "col-lg-6", "full-prod-layer"], [1, "fc-content", "fc-left-align"], [2, "color", "rgb(245, 197, 41)"], [1, "text-white"], [1, "col-lg-6", "full-caption-layer"], [1, "fc-content"], ["baseChart", "", 3, "datasets", "labels", "options", "colors", "legend", "chartType", "chartHover", "chartClick"], [1, "order-last", "order-md-12", "col-lg-6", "full-caption-layer"], [2, "display", "block"], [1, "order-first", "order-md-12", "col-lg-6", "full-prod-layer-alt"]],
      template: function ProyeccionesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gesti\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Generaci\xF3n inyectada por planta (MWh)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Generaci\xF3n de energ\xEDa proyecta para los siguientes 4 a\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Utilidad de la empresa (Bs)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ProyeccionesComponent_Template_canvas_chartHover_34_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function ProyeccionesComponent_Template_canvas_chartClick_34_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Energ\xEDa Inyectada (MWh)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("chartHover", function ProyeccionesComponent_Template_canvas_chartHover_41_listener($event) {
            return ctx.chartHovered($event);
          })("chartClick", function ProyeccionesComponent_Template_canvas_chartClick_41_listener($event) {
            return ctx.chartClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h5", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Utilidad proyectada");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "El Cuadro muestra las utilidades de la empresa los proximos 4 a\xF1os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.proyectadaData)("labels", ctx.proyectadaChartLabels)("options", ctx.lineChartOptions)("colors", ctx.barChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.barChartType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.generacionData)("labels", ctx.proyectadaChartLabels)("options", ctx.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType);
        }
      },
      directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3llY2Npb25lcy9wcm95ZWNjaW9uZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyeccionesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-proyecciones',
          templateUrl: './proyecciones.component.html',
          styleUrls: ['./proyecciones.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/rrhh/rrhh.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/rrhh/rrhh.component.ts ***!
    \**********************************************/

  /*! exports provided: RrhhComponent */

  /***/
  function srcAppPagesRrhhRrhhComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RrhhComponent", function () {
      return RrhhComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/entrerios"];
    };

    var _c1 = function _c1() {
      return ["/delsur"];
    };

    var _c2 = function _c2() {
      return ["/warnes"];
    };

    var RrhhComponent =
    /*#__PURE__*/
    function () {
      function RrhhComponent() {
        _classCallCheck(this, RrhhComponent);
      }

      _createClass(RrhhComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RrhhComponent;
    }();

    RrhhComponent.ɵfac = function RrhhComponent_Factory(t) {
      return new (t || RrhhComponent)();
    };

    RrhhComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RrhhComponent,
      selectors: [["app-rrhh"]],
      decls: 94,
      vars: 6,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row", "project-col"], [1, "col-lg-8"], [1, "ab-details"], [1, "bullets"], [1, "col-lg-4"], [1, "second-preview"], ["src", "assets/img/imagenes/rrhh5.jpg", "alt", ""], [1, "third-preview"], ["src", "assets/img/imagenes/rrhh3.jpg", "alt", ""], [1, "container", "related-projects"], [1, "section-title", 2, "width", "100%", "padding", "0rem 3rem 8rem"], [1, "container", "construction-services"], [1, "row", "hover-effects", "image-hover"], [1, "thumbnail-box-alt", 3, "routerLink"], [1, "tb-image"], ["src", "assets/img/imagenes/rrhh1.jpg", "alt", ""], [1, "tb-caption"], [1, "inner-caption"], [1, "ic-top"], [1, "ic-icon"], ["src", "assets/img/master/automobile-with-wrench.svg", "alt", ""], [1, "col-lg-4", "center-box"], ["src", "assets/img/imagenes/rrhh4.jpg", "alt", ""], ["src", "assets/img/imagenes/rrhh6.jpg", "alt", ""]],
      template: function RrhhComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nosotros ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Recursos Humanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recursos Humanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Capacitaci\xF3n del Personal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "En el mes de diciembre 2019, se realizaron capacitaciones de primeros auxilios a todo el personal de las Plantas Termoel\xE9ctricas: Entre R\xEDos, Del Sur y Warnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Las capacitaciones se realizaron a cargo de la empresa Cruz Roja filial Santa Cruzy tuvo una duraci\xF3n de 8 horas por planta. Se tocaron los siguientes temas::");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Evaluaci\xF3n Primaria");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Ventilaci\xF3n de Rescate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Reanimaci\xF3n cardiopulmonar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Atragamiento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Hemorragias y shock");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Quemaduras");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Mordeduras y picaduras");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Transporte de heridos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Capacitaciones en Planta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "ENDE ANDINA S.A.M. realiz\xF3 capacitaciones en sus ditintas plantas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "figure", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Termoel\xE9ctrica Entre R\xEDos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Una vez concluida la exposici\xF3n, se llev\xF3 a cabo un simulacro donde se evalu\xF3 la asimilaci\xF3n y la capacidad de respuesta del personal de planta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "figure", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Termoel\xE9ctrica Del Sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Una vez concluida la exposici\xF3n, se llev\xF3 a cabo un simulacro donde se evalu\xF3 la asimilaci\xF3n y la capacidad de respuesta del personal de planta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "figure", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "figure", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Una vez concluida la exposici\xF3n, se llev\xF3 a cabo un simulacro donde se evalu\xF3 la asimilaci\xF3n y la capacidad de respuesta del personal de planta.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["h3[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy9ycmhoL3JyaGguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JyaGgvcnJoaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ycmhoL3JyaGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn0iLCJoMyB7XG4gIGZvbnQtc2l6ZTogMC43ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RrhhComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-rrhh',
          templateUrl: './rrhh.component.html',
          styleUrls: ['./rrhh.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/solicitud-informacion/solicitud-informacion.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/solicitud-informacion/solicitud-informacion.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SolicitudInformacionComponent */

  /***/
  function srcAppPagesSolicitudInformacionSolicitudInformacionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SolicitudInformacionComponent", function () {
      return SolicitudInformacionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SolicitudInformacionComponent =
    /*#__PURE__*/
    function () {
      function SolicitudInformacionComponent() {
        _classCallCheck(this, SolicitudInformacionComponent);
      }

      _createClass(SolicitudInformacionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SolicitudInformacionComponent;
    }();

    SolicitudInformacionComponent.ɵfac = function SolicitudInformacionComponent_Factory(t) {
      return new (t || SolicitudInformacionComponent)();
    };

    SolicitudInformacionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SolicitudInformacionComponent,
      selectors: [["app-solicitud-informacion"]],
      decls: 113,
      vars: 0,
      consts: [[1, "sections"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "col-lg-4"], [1, "contact-info"], [1, "col-lg-8", "space-break"], [1, "contact-form"], ["id", "contact-form", "method", "post", "action", "contact.php"], [1, "messages"], [1, "controls"], [1, "col-md-12"], [1, "form-group"], ["id", "form_name", "type", "text", "name", "name", "placeholder", "Nombres y Apellidos / Raz\xF3n Social / An\xF3nimo:", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], [1, "help-block", "with-errors"], [1, "col-md-6"], ["id", "form_ci", "type", "number", "name", "ci", "placeholder", "Documento de identidad", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], ["id", "departamento", 1, "customizeSelect"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "8"], ["value", "9"], ["id", "form_direcc", "type", "text", "name", "direccion", "placeholder", "Domicilio", "required", "required", "data-error", "El domicilio es requerido.", 1, "form-control", "customize"], ["id", "form_nprov", "type", "text", "name", "provincia", "placeholder", "Provincia", "required", "required", "data-error", "El nombre es requerido.", 1, "form-control", "customize"], ["id", "form_phone", "type", "tel", "name", "phone", "placeholder", "Por favor, ingrese su tel\xE9fono", 1, "form-control", "customize"], ["id", "form_email", "type", "email", "name", "email", "placeholder", "Correo electr\xF3nico", "required", "required", "data-error", "Es requerido un correo v\xE1lido.", 1, "form-control", "customize"], ["id", "form_info", "type", "text", "name", "informacion", "placeholder", "Informaci\xF3n Solicitada", "required", "required", "data-error", "El titulo de la informaci\xF3n es requerido.", 1, "form-control", "customize"], ["id", "dependencia", 1, "customizeSelect"], ["id", "entrega", 1, "customizeSelect"], ["type", "submit", "value", "Enviar Solicitud", 1, "btn", "btn-custom"]],
      template: function SolicitudInformacionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Transparencia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Solicitud de Informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Solicitud de Informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Formulario de solicitud de informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Complete los datos del siguiente formulario para solicitar informaci\xF3n. Esta solicitud ser\xE1 atendida a la brevedad posible ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Elija un departamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Beni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Cochabamaba");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "La Paz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Santa cruz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Oruro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Pando");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Sucre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Potos\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tarija");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "select", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Dependencia de la cual Requiere la Informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Presidencia ejecutiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Vicepresidencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Unidad Jur\xEDdica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Unidad Auditor\xEDa Interna");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "select", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Entrega de la informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Copia Simple");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Carta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Otro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvbGljaXR1ZC1pbmZvcm1hY2lvbi9zb2xpY2l0dWQtaW5mb3JtYWNpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SolicitudInformacionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-solicitud-informacion',
          templateUrl: './solicitud-informacion.component.html',
          styleUrls: ['./solicitud-informacion.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tarifa/tarifa.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/tarifa/tarifa.component.ts ***!
    \**************************************************/

  /*! exports provided: TarifaComponent */

  /***/
  function srcAppPagesTarifaTarifaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TarifaComponent", function () {
      return TarifaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TarifaComponent = function TarifaComponent() {
      _classCallCheck(this, TarifaComponent);
    };

    TarifaComponent.ɵfac = function TarifaComponent_Factory(t) {
      return new (t || TarifaComponent)();
    };

    TarifaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TarifaComponent,
      selectors: [["app-tarifa"]],
      decls: 34,
      vars: 0,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "container-wide-grid"], [1, "row"], [1, "col-lg-6", "full-thumb-layer"], [1, "col-lg-6", "full-caption-layer"], [1, "fc-content"], [1, "order-last", "order-md-12", "col-lg-6", "full-caption-layer"], [1, "fc-content", "fc-left-align"], [1, "order-first", "order-md-12", "col-lg-6", "full-thumb-layer-alt"]],
      template: function TarifaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Responsabilidad Social Empresarial ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tarifa dignidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Tarifa Dignidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Responsabilidad Social Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Tarifa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dignidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "La Responsabilidad Social Empresarial no debe ce\xF1irse solamente a reparar los da\xF1os sociales y ambientales ocasionados por el accionar de las empresas, sino tambi\xE9n a la responsabilidad social de las empresas y el Gobierno Transitorio a adquirir una nueva dimensi\xF3n respecto a la interacci\xF3n con la comunidad; dentro la cual desenvuelve sus actividades. Las empresas trabajamos dentro, con y para las comunidades; por tanto, se debe contribuir activamente a su mejoramiento social, econ\xF3mico y ambiental.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Tomando en cuenta esta premisa, debemos recordar que la Tarifa Dignidad se encuentra normada y consiste en un descuento del 25% del importe total facturado por consumo mensual de electricidad, aplicado a todos los usuarios domiciliarios cuyo consumo es de hasta 70 kWh/mes. Dentro del marco jur\xEDdico donde opera y para el logro de un cierto equilibrio en el pago de los usuarios finales, este descuento es financiado con recursos de las empresas del sector el\xE9ctrico, en donde ENDE ANDINA S.A.M durante la gesti\xF3n 2019 aport\xF3 para la Tarifa Dignidad la suma de Bs13.366.869.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhcmlmYS90YXJpZmEuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TarifaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tarifa',
          templateUrl: './tarifa.component.html',
          styleUrls: ['./tarifa.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/videotube/videotube.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/videotube/videotube.component.ts ***!
    \********************************************************/

  /*! exports provided: VideotubeComponent */

  /***/
  function srcAppPagesVideotubeVideotubeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideotubeComponent", function () {
      return VideotubeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var lity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! lity */
    "./node_modules/lity/dist/lity.js");
    /* harmony import */


    var lity__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(lity__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _services_youtube_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/youtube.service */
    "./src/app/services/youtube.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../pipes/youtube.pipe */
    "./src/app/pipes/youtube.pipe.ts");

    function VideotubeComponent_div_25_button_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 25);
      }
    }

    function VideotubeComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideotubeComponent_div_25_Template_a_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r64);

          var video_r61 = ctx.$implicit;

          var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r63.openVideo(video_r61.id.videoId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "figure", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VideotubeComponent_div_25_button_6_Template, 1, 0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var video_r61 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", video_r61.snippet.thumbnails.high.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", video_r61.id.videoId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r61.snippet.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](video_r61.snippet.description);
      }
    }

    var VideotubeComponent =
    /*#__PURE__*/
    function () {
      function VideotubeComponent(youtube) {
        var _this8 = this;

        _classCallCheck(this, VideotubeComponent);

        this.youtube = youtube;
        this.listVideos = [];
        this.subscription = this.youtube.obtenerVideos().subscribe(function (resp) {
          // console.log(resp);
          _this8.listVideos = resp.items;
        });
      }

      _createClass(VideotubeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('La pagina se va  cerrar');
          this.subscription.unsubscribe();
        }
      }, {
        key: "detalleVideo",
        value: function detalleVideo(detalle) {
          // console.log(detalle);
          this.videoId = detalle;
          $('#exampleModal').modal();
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          this.videoId = null;
          $('#exampleModal').modal('hide');
        }
      }, {
        key: "openVideo",
        value: function openVideo(video) {
          if (video == null || video === '') {} else {
            lity__WEBPACK_IMPORTED_MODULE_1___default()('https://www.youtube.com/watch?v=' + video);
          }
        }
      }]);

      return VideotubeComponent;
    }();

    VideotubeComponent.ɵfac = function VideotubeComponent_Factory(t) {
      return new (t || VideotubeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"]));
    };

    VideotubeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideotubeComponent,
      selectors: [["app-videotube"]],
      decls: 36,
      vars: 4,
      consts: [[1, "sections", "ptsur-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "section-tittle-alt"], [1, "text-video-gallery"], ["href", "https://www.youtube.com/channel/UCTO60otE9hhDtDXS5II9cSQ"], [1, "row", "hover-effects", "image-hover"], ["class", "col-md-6 col-lg-4", 4, "ngFor", "ngForOf"], ["id", "exampleModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["width", "460", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "modal-footer"], [1, "btn-more"], ["role", "button", 1, "btn", "btn-hover-corner", 3, "click"], [1, "col-md-6", "col-lg-4"], [1, "organic-pulsing-video"], [1, "youtube-popup"], [1, "popup-youtube", 3, "click"], [1, "video-image"], ["alt", "", 3, "src"], ["class", "pulse-button", 4, "ngIf"], [1, "pg-caption"], [1, "pulse-button"]],
      template: function VideotubeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Multimedia ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Canal de Videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Canal de Videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Canal de videos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nuestros videos mas recientes desde nuestro ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Canal Oficial en Youtube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, VideotubeComponent_div_25_Template, 12, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "iframe", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "youtube");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VideotubeComponent_Template_a_click_34_listener() {
            return ctx.cerrarModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Cerrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listVideos);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 2, ctx.videoId), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_pipes_youtube_pipe__WEBPACK_IMPORTED_MODULE_4__["YoutubePipe"]],
      styles: [".videoDesc[_ngcontent-%COMP%] {\n  background-color: snow;\n  padding: 20px 10px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9wYWdlcy92aWRlb3R1YmUvdmlkZW90dWJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy92aWRlb3R1YmUvdmlkZW90dWJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aWRlb3R1YmUvdmlkZW90dWJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZGVvRGVzY3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xuICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufSIsIi52aWRlb0Rlc2Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbm93O1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideotubeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-videotube',
          templateUrl: './videotube.component.html',
          styleUrls: ['./videotube.component.scss']
        }]
      }], function () {
        return [{
          type: _services_youtube_service__WEBPACK_IMPORTED_MODULE_2__["YoutubeService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/warnes/warnes.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/pages/warnes/warnes.component.ts ***!
    \**************************************************/

  /*! exports provided: WarnesComponent */

  /***/
  function srcAppPagesWarnesWarnesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WarnesComponent", function () {
      return WarnesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/submenu/submenu.component */
    "./src/app/components/submenu/submenu.component.ts");
    /* harmony import */


    var _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../components/proyects/proyects.component */
    "./src/app/components/proyects/proyects.component.ts");

    var WarnesComponent =
    /*#__PURE__*/
    function () {
      function WarnesComponent() {
        _classCallCheck(this, WarnesComponent);

        this.slides = [{
          numbers: 1,
          src: '../../../assets/img/gallery/ptwar/gallery1.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery1.jpg',
          title: 'Planta Warnes',
          caption: 'Vista lateral nocturna de la planta',
          url: '#'
        }, {
          numbers: 2,
          src: '../../../assets/img/gallery/ptwar/gallery2.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery2.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista Panorámica de la planta',
          url: '#'
        }, {
          numbers: 3,
          src: '../../../assets/img/gallery/ptwar/gallery3.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery3.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista turbinas Termoeléctricas',
          url: '#'
        }, {
          numbers: 4,
          src: '../../../assets/img/gallery/ptwar/gallery4.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery4.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista frontal de la planta',
          url: '#'
        }, {
          numbers: 5,
          src: '../../../assets/img/gallery/ptwar/gallery5.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery5.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista lateral de la Planta',
          url: '#'
        }, {
          numbers: 6,
          src: '../../../assets/img/gallery/ptwar/gallery6.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery6.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista lateral de la planta',
          url: '#'
        }, {
          numbers: 7,
          src: '../../../assets/img/gallery/ptwar/gallery7.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery7.jpg',
          title: 'Turbinas Warnes',
          caption: 'Vista de Subestación de la planta',
          url: '#'
        }, {
          numbers: 8,
          src: '../../../assets/img/gallery/ptwar/gallery8.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery8.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista de Subestación de la planta',
          url: '#'
        }, {
          numbers: 9,
          src: '../../../assets/img/gallery/ptwar/gallery9.jpg',
          thumb: '../../../assets/img/gallery/ptwar/gallery9.jpg',
          title: 'Termoeléctrica Warnes',
          caption: 'Vista nocturna de turbinas',
          url: '#'
        }];
      }

      _createClass(WarnesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WarnesComponent;
    }();

    WarnesComponent.ɵfac = function WarnesComponent_Factory(t) {
      return new (t || WarnesComponent)();
    };

    WarnesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WarnesComponent,
      selectors: [["app-warnes"]],
      decls: 100,
      vars: 2,
      consts: [[1, "sections", "ptwar-bg"], [1, "container"], [1, "pages-title"], ["href", "#"], [1, "row"], [1, "order-last", "order-md-3", "col-lg-4", "col-xl-3", "space-break"], [3, "subMenu"], [1, "order-first", "order-md-9", "col-lg-8", "col-xl-9"], [1, "solution-pic"], ["src", "../assets/img/imagenes/ptwar.jpg", "alt", ""], [1, "solution-content", "ab-details"], [1, "bullets"], [1, "table", "table-bordered"], [1, "thead-light"], [1, "grid-section"], [1, "col-lg-6", "layer-image"], ["src", "../assets/img/imagenes/pewar.jpg", "alt", ""], [1, "col-lg-6", "layer-content"], [1, "lc-inner"], [1, "order-last", "order-md-6", "col-lg-6", "layer-content"], [1, "order-first", "order-md-6", "col-lg-6", "layer-image"], ["src", "../assets/img/images/img7.jpg", "alt", ""], [3, "slides"], [1, "map"], ["src", "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d121701.00623717599!2d-63.215639380380836!3d-17.595299114319037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x93f1e1120ba88f3d%3A0xb4bfa50d83c9003c!2sAeropuerto+Internacional+Viru+Viru%2C+Avenida+G77%2C+Santa+Cruz+de+la+Sierra!3m2!1d-17.6431198!2d-63.140756499999995!4m3!3m2!1d-17.533833299999998!2d-63.1445278!5e1!3m2!1ses!2sbo!4v1518713594706", 1, "map-iframe"]],
      template: function WarnesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Planta Termoel\xE9ctrica ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \xA0 > \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-submenu", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "figure", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Nuestra planta termoel\xE9ctrica Warnes consta de:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Planta de generaci\xF3n con 5 termogeneradoras marca SIEMENS cada una con una capacidad de 40 MV.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Subestaci\xF3n con 5 transformadores cada uno con una potencia de 50 MVA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gasoducto para suministro de gas a la planta Warnes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Campamento de interacci\xF3n social.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Disponibilidad de la Planta Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "En el periodo 2019, la Planta de Generaci\xF3n de Warnes registr\xF3 los siguientes niveles de disponibilidad:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "thead", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Planta Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Primer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Segundo Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Tercer Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Cuarto Trimestre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Disponibilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "88,32%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "80,14%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "87,68%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "78,24%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Potencia Efectiva");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "La capacidad de generaci\xF3n termoel\xE9ctrica a la temperatura media anual del sitio (26\xB0C), reconocida por el CNDC para la Planta Termoel\xE9ctrica Warnes durante el 2019 fue de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " 490.66 MW.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "P\xE9rdidas por transformaci\xF3n y consumo propio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Las p\xE9rdidas por transformaci\xF3n y consumo propio de la Planta Termoel\xE9ctrica Warnes para la gesti\xF3n 2019 estuvieron alrededor del 3.43%. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-proyects", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "iframe", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subMenu", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("slides", ctx.slides);
        }
      },
      directives: [_components_submenu_submenu_component__WEBPACK_IMPORTED_MODULE_1__["SubmenuComponent"], _components_proyects_proyects_component__WEBPACK_IMPORTED_MODULE_2__["ProyectsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dhcm5lcy93YXJuZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WarnesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-warnes',
          templateUrl: './warnes.component.html',
          styleUrls: ['./warnes.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/conv-filter.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/conv-filter.pipe.ts ***!
    \*******************************************/

  /*! exports provided: ConvFilterPipe */

  /***/
  function srcAppPipesConvFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvFilterPipe", function () {
      return ConvFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConvFilterPipe =
    /*#__PURE__*/
    function () {
      function ConvFilterPipe() {
        _classCallCheck(this, ConvFilterPipe);

        this.validConv = [];
      }

      _createClass(ConvFilterPipe, [{
        key: "transform",
        value: function transform(items, estado) {
          if (estado === 'all') {
            return items;
          }

          if (items != []) {
            return items.filter(function (item, index) {
              return item.estado === estado;
            });
          }
        }
      }]);

      return ConvFilterPipe;
    }();

    ConvFilterPipe.ɵfac = function ConvFilterPipe_Factory(t) {
      return new (t || ConvFilterPipe)();
    };

    ConvFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "convFilter",
      type: ConvFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConvFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'convFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/docs-filter.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/docs-filter.pipe.ts ***!
    \*******************************************/

  /*! exports provided: DocsFilterPipe */

  /***/
  function srcAppPipesDocsFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocsFilterPipe", function () {
      return DocsFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DocsFilterPipe =
    /*#__PURE__*/
    function () {
      function DocsFilterPipe() {
        _classCallCheck(this, DocsFilterPipe);
      }

      _createClass(DocsFilterPipe, [{
        key: "transform",
        value: function transform(items, param) {
          if (param === undefined) {
            return items;
          }

          if (param.length < 4) {
            return items;
          }

          param = param.toLowerCase();

          if (items) {
            return items.filter(function (item, index) {
              var find = item.titulo.toLowerCase().indexOf(param);
              return find === -1 ? false : true;
            });
          }
        }
      }]);

      return DocsFilterPipe;
    }();

    DocsFilterPipe.ɵfac = function DocsFilterPipe_Factory(t) {
      return new (t || DocsFilterPipe)();
    };

    DocsFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "docsFilter",
      type: DocsFilterPipe,
      pure: true
    });
    DocsFilterPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DocsFilterPipe,
      factory: DocsFilterPipe.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocsFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'docsFilter'
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/file.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/file.pipe.ts ***!
    \************************************/

  /*! exports provided: FilePipe */

  /***/
  function srcAppPipesFilePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilePipe", function () {
      return FilePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/global.service */
    "./src/app/config/global.service.ts");

    var FilePipe =
    /*#__PURE__*/
    function () {
      function FilePipe() {
        _classCallCheck(this, FilePipe);
      }

      _createClass(FilePipe, [{
        key: "transform",
        value: function transform(file) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'docs';
          var url = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices + '/file'; // if (!file) {return; }
          // if (image.indexOf('https') >= 0 ) {
          //     return image;
          // }

          console.log('ruta actual ', type);

          switch (type) {
            case 'docs':
              url += '/docs/' + file;
              break;

            default:
              console.log('Tipo de archivo no existe');
              url += '/docs/nofile';
              break;
          }

          return url;
        }
      }]);

      return FilePipe;
    }();

    FilePipe.ɵfac = function FilePipe_Factory(t) {
      return new (t || FilePipe)();
    };

    FilePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "file",
      type: FilePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'file'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/format-date.pipe.ts":
  /*!*******************************************!*\
    !*** ./src/app/pipes/format-date.pipe.ts ***!
    \*******************************************/

  /*! exports provided: FormatDatePipe */

  /***/
  function srcAppPipesFormatDatePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatDatePipe", function () {
      return FormatDatePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FormatDatePipe =
    /*#__PURE__*/
    function () {
      function FormatDatePipe() {
        _classCallCheck(this, FormatDatePipe);
      }

      _createClass(FormatDatePipe, [{
        key: "transform",
        value: function transform(date, args) {
          if (!date) {
            return '';
          }

          if (!args) {
            return date;
          }

          var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']; // console.log('argumento ', args);

          var date1 = new Date(date);
          var result;

          if (args === 'day') {
            result = date1.getDate();
          } else if (args === 'month') {
            result = months[date1.getMonth()];
          } else {
            result = date1.getFullYear();
          }

          return result;
        }
      }]);

      return FormatDatePipe;
    }();

    FormatDatePipe.ɵfac = function FormatDatePipe_Factory(t) {
      return new (t || FormatDatePipe)();
    };

    FormatDatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatDate",
      type: FormatDatePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatDatePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatDate'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/image.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/pipes/image.pipe.ts ***!
    \*************************************/

  /*! exports provided: ImagePipe */

  /***/
  function srcAppPipesImagePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagePipe", function () {
      return ImagePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../config/global.service */
    "./src/app/config/global.service.ts");

    var ImagePipe =
    /*#__PURE__*/
    function () {
      function ImagePipe() {
        _classCallCheck(this, ImagePipe);
      }

      _createClass(ImagePipe, [{
        key: "transform",
        value: function transform(image) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'user';
          var url = _config_global_service__WEBPACK_IMPORTED_MODULE_1__["GLOBAL"].urlServices + '/image'; // console.log('ruta actual ', image);

          if (!image) {
            console.log('estro');
            return url + '/users/noImage';
          } // if (image.indexOf('https') >= 0 ) {
          //     return image;
          // }


          switch (type) {
            case 'user':
              url += '/users/' + image;
              break;

            case 'publication':
              url += '/publications/' + image;
              break;

            case 'notification':
              url += '/notifications/' + image;
              break;

            default:
              console.log('Tipo de imagen no existe');
              url += '/users/noImage';
              break;
          }

          return url;
        }
      }]);

      return ImagePipe;
    }();

    ImagePipe.ɵfac = function ImagePipe_Factory(t) {
      return new (t || ImagePipe)();
    };

    ImagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "image",
      type: ImagePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'image'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/object-filter.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/object-filter.pipe.ts ***!
    \*********************************************/

  /*! exports provided: ObjectFilterPipe */

  /***/
  function srcAppPipesObjectFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ObjectFilterPipe", function () {
      return ObjectFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ObjectFilterPipe =
    /*#__PURE__*/
    function () {
      function ObjectFilterPipe() {
        _classCallCheck(this, ObjectFilterPipe);
      }

      _createClass(ObjectFilterPipe, [{
        key: "transform",
        value: function transform(items, arg) {
          if (!items) {
            return [];
          }

          if (!arg || arg.length < 3) {
            return items;
          }

          var resultPost = [];

          var _iterator = _createForOfIteratorHelper(items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var post = _step.value;

              if (post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
                resultPost.push(post);
              }
            } // items.filter((listing: any) => listing.type > 2);
            // console.log('recuperados ', items);

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return resultPost;
        }
      }]);

      return ObjectFilterPipe;
    }();

    ObjectFilterPipe.ɵfac = function ObjectFilterPipe_Factory(t) {
      return new (t || ObjectFilterPipe)();
    };

    ObjectFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "objFilter",
      type: ObjectFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObjectFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'objFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _image_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./image.pipe */
    "./src/app/pipes/image.pipe.ts");
    /* harmony import */


    var _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./youtube.pipe */
    "./src/app/pipes/youtube.pipe.ts");
    /* harmony import */


    var _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./truncate-text.pipe */
    "./src/app/pipes/truncate-text.pipe.ts");
    /* harmony import */


    var _object_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./object-filter.pipe */
    "./src/app/pipes/object-filter.pipe.ts");
    /* harmony import */


    var _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./format-date.pipe */
    "./src/app/pipes/format-date.pipe.ts");
    /* harmony import */


    var _docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./docs-filter.pipe */
    "./src/app/pipes/docs-filter.pipe.ts");
    /* harmony import */


    var _file_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./file.pipe */
    "./src/app/pipes/file.pipe.ts");
    /* harmony import */


    var _conv_filter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./conv-filter.pipe */
    "./src/app/pipes/conv-filter.pipe.ts");

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      },
      imports: [[]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_image_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagePipe"], _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__["YoutubePipe"], _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateTextPipe"], _object_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjectFilterPipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DocsFilterPipe"], _file_pipe__WEBPACK_IMPORTED_MODULE_7__["FilePipe"], _conv_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvFilterPipe"]],
        exports: [_image_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagePipe"], _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__["YoutubePipe"], _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateTextPipe"], _object_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjectFilterPipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DocsFilterPipe"], _file_pipe__WEBPACK_IMPORTED_MODULE_7__["FilePipe"], _conv_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvFilterPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [],
          declarations: [_image_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagePipe"], _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__["YoutubePipe"], _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateTextPipe"], _object_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjectFilterPipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DocsFilterPipe"], _file_pipe__WEBPACK_IMPORTED_MODULE_7__["FilePipe"], _conv_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvFilterPipe"]],
          exports: [_image_pipe__WEBPACK_IMPORTED_MODULE_1__["ImagePipe"], _youtube_pipe__WEBPACK_IMPORTED_MODULE_2__["YoutubePipe"], _truncate_text_pipe__WEBPACK_IMPORTED_MODULE_3__["TruncateTextPipe"], _object_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["ObjectFilterPipe"], _format_date_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatDatePipe"], _docs_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["DocsFilterPipe"], _file_pipe__WEBPACK_IMPORTED_MODULE_7__["FilePipe"], _conv_filter_pipe__WEBPACK_IMPORTED_MODULE_8__["ConvFilterPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/truncate-text.pipe.ts":
  /*!*********************************************!*\
    !*** ./src/app/pipes/truncate-text.pipe.ts ***!
    \*********************************************/

  /*! exports provided: TruncateTextPipe */

  /***/
  function srcAppPipesTruncateTextPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TruncateTextPipe", function () {
      return TruncateTextPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TruncateTextPipe =
    /*#__PURE__*/
    function () {
      function TruncateTextPipe() {
        _classCallCheck(this, TruncateTextPipe);
      }

      _createClass(TruncateTextPipe, [{
        key: "transform",
        value: function transform(value, length) {
          // https://en.wikipedia.org/wiki/Longest_word_in_English
          var biggestWord = 50;
          var elipses = '...';

          if (typeof value === 'undefined') {
            return value;
          }

          if (value.length <= length) {
            return value;
          } // .. truncate to about correct lenght


          var truncatedText = value.slice(0, length + biggestWord); // .. now nibble ends till correct length

          while (truncatedText.length > length - elipses.length) {
            var lastSpace = truncatedText.lastIndexOf(' ');

            if (lastSpace === -1) {
              break;
            }

            truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?]$/, '');
          } //  console.log((truncatedText + elipses).length);


          return truncatedText + elipses;
        }
      }]);

      return TruncateTextPipe;
    }();

    TruncateTextPipe.ɵfac = function TruncateTextPipe_Factory(t) {
      return new (t || TruncateTextPipe)();
    };

    TruncateTextPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "truncateText",
      type: TruncateTextPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TruncateTextPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'truncateText'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/youtube.pipe.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/youtube.pipe.ts ***!
    \***************************************/

  /*! exports provided: YoutubePipe */

  /***/
  function srcAppPipesYoutubePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubePipe", function () {
      return YoutubePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var YoutubePipe =
    /*#__PURE__*/
    function () {
      function YoutubePipe(_dom) {
        _classCallCheck(this, YoutubePipe);

        this._dom = _dom;
      }

      _createClass(YoutubePipe, [{
        key: "transform",
        value: function transform(value) {
          var url = 'https://www.youtube.com/embed/';
          return this._dom.bypassSecurityTrustResourceUrl(url + value);
        }
      }]);

      return YoutubePipe;
    }();

    YoutubePipe.ɵfac = function YoutubePipe_Factory(t) {
      return new (t || YoutubePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    YoutubePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "youtube",
      type: YoutubePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'youtube'
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/categories.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/categories.service.ts ***!
    \************************************************/

  /*! exports provided: CategoriesService */

  /***/
  function srcAppServicesCategoriesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
      return CategoriesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CategoriesService =
    /*#__PURE__*/
    function () {
      function CategoriesService(http, router) {
        _classCallCheck(this, CategoriesService);

        this.http = http;
        this.router = router;
        this.total = 0;
        this.uri = _config_global_service__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlServices;
      }

      _createClass(CategoriesService, [{
        key: "getCategories",
        value: function getCategories() {
          var _this9 = this;

          var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var url = this.uri + '/category?to=' + to;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            _this9.total = results['total'];
            return results['categories'];
          }));
        }
      }]);

      return CategoriesService;
    }();

    CategoriesService.ɵfac = function CategoriesService_Factory(t) {
      return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    CategoriesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CategoriesService,
      factory: CategoriesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/convocatorias.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/convocatorias.service.ts ***!
    \***************************************************/

  /*! exports provided: ConvocatoriasService */

  /***/
  function srcAppServicesConvocatoriasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConvocatoriasService", function () {
      return ConvocatoriasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ConvocatoriasService =
    /*#__PURE__*/
    function () {
      function ConvocatoriasService(http, router) {
        _classCallCheck(this, ConvocatoriasService);

        this.http = http;
        this.router = router;
        this.total = 0;
        this.uri = _config_global_service__WEBPACK_IMPORTED_MODULE_3__["GLOBAL"].urlServices;
      } // constructor( private http: HttpClient ) {
      // this.newData = this.getDocuments('vigentes');
      // console.log(this.newData);
      //  }
      // getDocuments(fl: string) {
      //   return this.data.filter( object => {
      //       return object['type'] == fl;
      //   });
      // }


      _createClass(ConvocatoriasService, [{
        key: "getConvocatories",
        value: function getConvocatories() {
          var _this10 = this;

          var url = this.uri + '/convocatory/web';
          var doc = []; // console.log('ruta', url);

          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            // console.log('resultado ', results);
            _this10.total = results.total; //   results.documents.sort((a, b) => {
            //     return a.fecha_invitacion > b.fecha_invitacion ? -1 : 1;
            //  });

            doc.push.apply(doc, _toConsumableArray(results.convocatories));
            return doc;
          }));
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(fileName) {
          var url = this.uri + '/file/docs/' + fileName;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers = headers.set('Accept', 'application/pdf');
          return this.http.get(url, {
            headers: headers,
            responseType: 'blob'
          });
        }
      }]);

      return ConvocatoriasService;
    }();

    ConvocatoriasService.ɵfac = function ConvocatoriasService_Factory(t) {
      return new (t || ConvocatoriasService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ConvocatoriasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConvocatoriasService,
      factory: ConvocatoriasService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConvocatoriasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/publications.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/publications.service.ts ***!
    \**************************************************/

  /*! exports provided: PublicationsService */

  /***/
  function srcAppServicesPublicationsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicationsService", function () {
      return PublicationsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_global_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../config/global.service */
    "./src/app/config/global.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PublicationsService =
    /*#__PURE__*/
    function () {
      function PublicationsService(http, router) {
        _classCallCheck(this, PublicationsService);

        this.http = http;
        this.router = router;
        this.total = 0;
        this.uri = _config_global_service__WEBPACK_IMPORTED_MODULE_2__["GLOBAL"].urlServices;
      }

      _createClass(PublicationsService, [{
        key: "getPublication",
        value: function getPublication(id) {
          var url = this.uri + '/publication/' + id;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            return resp.publication;
          }));
        }
      }, {
        key: "getPublications",
        value: function getPublications() {
          var _this11 = this;

          var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var url = this.uri + '/publication?to=' + to;
          return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            _this11.total = results.total;
            results.publications.sort(function (a, b) {
              return a.date > b.date ? -1 : 1;
            });
            return results.publications;
          }));
        }
      }]);

      return PublicationsService;
    }();

    PublicationsService.ɵfac = function PublicationsService_Factory(t) {
      return new (t || PublicationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    PublicationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PublicationsService,
      factory: PublicationsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/youtube.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/youtube.service.ts ***!
    \*********************************************/

  /*! exports provided: YoutubeService */

  /***/
  function srcAppServicesYoutubeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoutubeService", function () {
      return YoutubeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var YoutubeService =
    /*#__PURE__*/
    function () {
      function YoutubeService(http) {
        _classCallCheck(this, YoutubeService);

        this.http = http;
        this.url = 'https://www.googleapis.com/youtube/v3';
        this.apiKey = 'AIzaSyDRhuHPfsTrfVFs5nFT71HNkj5B5FDafao';
        this.canal = 'UCTO60otE9hhDtDXS5II9cSQ';
      }

      _createClass(YoutubeService, [{
        key: "obtenerVideos",
        value: function obtenerVideos() {
          var parametros = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('part', 'snippet').set('channelId', this.canal).set('maxResults', '20').set('key', this.apiKey);
          var vinculo = "".concat(this.url, "/search");
          return this.http.get(vinculo, {
            params: parametros
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (resp) {
            return resp;
          }));
        }
      }]);

      return YoutubeService;
    }();

    YoutubeService.ɵfac = function YoutubeService_Factory(t) {
      return new (t || YoutubeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    YoutubeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: YoutubeService,
      factory: YoutubeService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/footer/footer.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/footer/footer.component.ts ***!
    \***************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/news"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

    var _c2 = function _c2() {
      return ["/entrerios"];
    };

    var _c3 = function _c3() {
      return ["/reports"];
    };

    var _c4 = function _c4() {
      return ["/contact"];
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        router.events.subscribe(function (s) {
          if (s instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            var tree = router.parseUrl(router.url);

            if (tree.fragment) {
              var element = document.querySelector("#" + tree.fragment);

              if (element) {
                element.scrollIntoView(true);
              }
            }
          }
        });
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 108,
      vars: 14,
      consts: [[1, "container"], [1, "row"], [1, "col-lg-3"], [1, "footer-col"], [1, "footer-logo"], ["src", "assets/img/master/logo-footer.png", "alt", ""], [1, "footer-icon"], [1, "span-fi"], [1, "fi-fas"], [1, "fas", "fa-phone"], [1, "fi-caption"], [1, "fas", "fa-envelope"], [1, "media-post"], [1, "media-thumb"], [3, "routerLink"], ["src", "assets/img/images/media-thumb1.jpg", "alt", ""], [1, "media-caption"], [1, "divider"], ["src", "assets/img/images/media-thumb6.jpg", "alt", ""], [1, "popular-links"], ["fragment", "0", 1, "to-top", 3, "routerLink"], [1, "footer-col", "last-col"], [1, "footer-grid-box"], [1, "col-4", "col-sm-2", "col-md-2", "col-lg-4", "gb-photos"], ["href", "#"], ["src", "assets/img/images/media-thumb2.jpg", "alt", ""], ["src", "assets/img/images/media-thumb3.jpg", "alt", ""], ["src", "assets/img/images/media-thumb4.jpg", "alt", ""], ["src", "assets/img/images/media-thumb5.jpg", "alt", ""], ["src", "assets/img/images/media-thumb7.jpg", "alt", ""], [1, "footer-bottom"], [1, "fb-copyright"], [1, "fb-social"], [1, "span-fb-social"], ["href", "https://www.facebook.com/EndeAndina/", "target", "_blank"], [1, "fab", "fa-facebook-f"], ["href", "https://www.linkedin.com/company/endeandina/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://twitter.com/EndeAndina?ref_src=twsrc%5Etfw", "target", "_blank"], [1, "fab", "fa-twitter"], [1, "span-fb-social", "last-box"], ["href", "https://www.instagram.com/endeandinasam/", "target", "_blank"], [1, "fab", "fa-instagram"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "figure", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Empresa regulada por la Autoridad de Fiscalizaci\xF3n de Electricidad y Tecnolog\xEDa Nuclear (AETN).");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tel\xE9fono: (591-4) 466 4001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "contacto@endeandina.bo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "NOTICIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Ciclos Combinados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "24 Julio 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "figure", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contrato vias Brasil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "22 Julio 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "SECCIONES");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Nuestras plantas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Memoria anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Noticias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Contactos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "FOTOS EN INSTAGRAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "hr", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\xA9 2020 ENDE ANDINA S.A.M.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/navbar/navbar.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/navbar/navbar.component.ts ***!
    \***************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/home"];
    };

    var _c1 = function _c1() {
      return ["/about"];
    };

    var _c2 = function _c2() {
      return ["/ficha"];
    };

    var _c3 = function _c3() {
      return ["/estructura"];
    };

    var _c4 = function _c4() {
      return ["/history"];
    };

    var _c5 = function _c5() {
      return ["/rrhh"];
    };

    var _c6 = function _c6() {
      return ["/reports"];
    };

    var _c7 = function _c7() {
      return ["/entrerios"];
    };

    var _c8 = function _c8() {
      return ["/delsur"];
    };

    var _c9 = function _c9() {
      return ["/warnes"];
    };

    var _c10 = function _c10() {
      return ["/planestrategico"];
    };

    var _c11 = function _c11() {
      return ["/poa"];
    };

    var _c12 = function _c12() {
      return ["/presupuesto"];
    };

    var _c13 = function _c13() {
      return ["/proyecciones"];
    };

    var _c14 = function _c14() {
      return ["/convocatorias"];
    };

    var _c15 = function _c15() {
      return ["/tarifa"];
    };

    var _c16 = function _c16() {
      return ["/gestionsocial"];
    };

    var _c17 = function _c17() {
      return ["/news"];
    };

    var _c18 = function _c18() {
      return ["/gallery"];
    };

    var _c19 = function _c19() {
      return ["/solicitud"];
    };

    var _c20 = function _c20() {
      return ["/denuncia"];
    };

    var _c21 = function _c21() {
      return ["/contact"];
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent(router) {
        _classCallCheck(this, NavbarComponent);

        this.router = router;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          initMenu();
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          console.log('abre menu');
        }
      }, {
        key: "closeMenu",
        value: function closeMenu() {
          console.log('cierra menu');
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 126,
      vars: 44,
      consts: [[1, "top-header"], [1, "container"], [1, "header-left"], [1, "header-right"], [1, "ht-right-email"], [1, "ht-right-social"], ["href", "https://www.facebook.com/EndeAndina/", "target", "_blank"], [1, "fab", "fa-facebook-f"], ["href", "https://www.linkedin.com/company/endeandina/", "target", "_blank"], [1, "fab", "fa-linkedin"], ["href", "https://twitter.com/EndeAndina?ref_src=twsrc%5Etfw", "target", "_blank"], [1, "fab", "fa-twitter"], ["href", "https://www.instagram.com/endeandinasam/", "target", "_blank"], [1, "fab", "fa-instagram"], [1, "form-group", "has-search"], [1, "fa", "fa-search", "form-control-feedback"], ["type", "text", "placeholder", "Buscar", 1, "form-control"], ["id", "navbar", 1, "main-nav"], ["id", "navigation1", 1, "navigation"], [1, "nav-header"], ["href", "", 1, "nav-logo"], ["src", "assets/img/master/logo.png", "alt", "", 1, "white-logo"], [1, "nav-toggle"], [1, "nav-menus-wrapper"], [1, "nav-menu", "align-to-right"], [3, "routerLink"], ["href", "javascript:void(0)"], [1, "nav-dropdown"], ["routerLinkActive", "active", 3, "routerLink"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tel\xE9fono:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 591-4 466 4001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Contacto@endeandina.bo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "nav", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "INICIO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "NOSOTROS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Acerca de nosotros");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Ficha Empresarial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Estructura org\xE1nica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Historia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Recursos Humanos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Memoria Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "PLANTAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Termoel\xE9ctrica Entre Rios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Termoel\xE9ctrica del sur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Termoel\xE9ctrica Warnes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "GESTI\xD3N ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Plan Estrat\xE9gico Empresarial - PEE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Programa Operativo Anual \u2013 POA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Presupuesto Anual");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Proyecciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Convocatorias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "RSE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Tarifa Dignidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Gesti\xF3n Social");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "NOTICIAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Not\xEDcias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Banco de im\xE1genes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "TRANSPARENCIA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Solicitud de informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Recepci\xF3n de denuncia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "CONTACTOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](32, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](33, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c12));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c13));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](36, _c14));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](37, _c15));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](38, _c16));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](39, _c17));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](40, _c18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](41, _c19));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](42, _c20));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](43, _c21));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.dropdown-item[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  text-decoration: none;\n  font-size: 14px;\n  color: #333;\n  transition: color 0.3s, background 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9TaGFyZWQvUHJldmlvdXNseSBSZWxvY2F0ZWQgSXRlbXMvU2VjdXJpdHkvcHJveWVjdG9zL0VOREVfQU5ESU5BL1NpdGVfRUEvc3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXJ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmRyb3Bkb3duLWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcywgYmFja2dyb3VuZCAwLjNzO1xufSIsIi5uYXZiYXIge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzLCBiYWNrZ3JvdW5kIDAuM3M7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/Shared/Previously Relocated Items/Security/proyectos/ENDE_ANDINA/Site_EA/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map