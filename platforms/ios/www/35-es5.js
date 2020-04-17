function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js ***!
    \*******************************************************************/

  /*! exports provided: ion_loading */

  /***/
  function node_modulesIonicCoreDistEsmIonLoadingMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_loading", function () {
      return Loading;
    });
    /* harmony import */


    var _core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-0a8d4d2e.js */
    "./node_modules/@ionic/core/dist/esm/core-0a8d4d2e.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-56279521.js */
    "./node_modules/@ionic/core/dist/esm/animation-56279521.js");
    /* harmony import */


    var _hardware_back_button_1ed0083a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./hardware-back-button-1ed0083a.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-1ed0083a.js");
    /* harmony import */


    var _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./overlays-e336664a.js */
    "./node_modules/@ionic/core/dist/esm/overlays-e336664a.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./index-3476b023.js */
    "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
    /**
     * iOS Loading Enter Animation
     */


    const iosEnterAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
      wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.01,
        transform: 'scale(1.1)'
      }, {
        offset: 1,
        opacity: 1,
        transform: 'scale(1)'
      }]);
      return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * iOS Loading Leave Animation
     */


    const iosLeaveAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.99,
        transform: 'scale(1)'
      }, {
        offset: 1,
        opacity: 0,
        transform: 'scale(0.9)'
      }]);
      return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * Md Loading Enter Animation
     */


    const mdEnterAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
      wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.01,
        transform: 'scale(1.1)'
      }, {
        offset: 1,
        opacity: 1,
        transform: 'scale(1)'
      }]);
      return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * Md Loading Leave Animation
     */


    const mdLeaveAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
      wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.99,
        transform: 'scale(1)'
      }, {
        offset: 1,
        opacity: 0,
        transform: 'scale(0.9)'
      }]);
      return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const Loading = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.presented = false;
        this.mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * Number of milliseconds to wait before dismissing the loading indicator.
         */

        this.duration = 0;
        /**
         * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = false;
        /**
         * If `true`, a backdrop will be displayed behind the loading indicator.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the loading indicator will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */

        this.translucent = false;
        /**
         * If `true`, the loading indicator will animate.
         */

        this.animated = true;

        this.onBackdropTap = () => {
          this.dismiss(undefined, _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["B"]);
        };

        Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this.el);
        this.didPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingDidPresent", 7);
        this.willPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingWillPresent", 7);
        this.willDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingWillDismiss", 7);
        this.didDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionLoadingDidDismiss", 7);
      }

      componentWillLoad() {
        if (this.spinner === undefined) {
          const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          this.spinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('loadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
        }
      }
      /**
       * Present the loading overlay after it has been created.
       */


      present() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["e"])(_this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);

              case 2:
                if (_this.duration > 0) {
                  _this.durationTimeout = setTimeout(() => _this.dismiss(), _this.duration + 10);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
      /**
       * Dismiss the loading overlay after it has been presented.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the loading.
       * This can be useful in a button handler for determining which button was
       * clicked to dismiss the loading.
       * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
       */


      dismiss(data, role) {
        if (this.durationTimeout) {
          clearTimeout(this.durationTimeout);
        }

        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
      }
      /**
       * Returns a promise that resolves when the loading did dismiss.
       */


      onDidDismiss() {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionLoadingDidDismiss');
      }
      /**
       * Returns a promise that resolves when the loading will dismiss.
       */


      onWillDismiss() {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.el, 'ionLoadingWillDismiss');
      }

      render() {
        const message = this.message,
              spinner = this.spinner;
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onIonBackdropTap: this.onBackdropTap,
          style: {
            zIndex: "".concat(40000 + this.overlayIndex)
          },
          class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["g"])(this.cssClass)), {
            [mode]: true,
            'loading-translucent': this.translucent
          })
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
          visible: this.showBackdrop,
          tappable: this.backdropDismiss
        }), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "loading-wrapper",
          role: "dialog"
        }, spinner && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "loading-spinner"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
          name: spinner
        })), message && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "loading-content",
          innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_7__["s"])(message)
        })));
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);--backdrop-opacity:var(--ion-backdrop-opacity,0.32);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=35-es5.js.map