function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js ***!
    \*****************************************************************/

  /*! exports provided: ion_modal */

  /***/
  function node_modulesIonicCoreDistEsmIonModalMdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_modal", function () {
      return Modal;
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


    var _cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cubic-bezier-1d592096.js */
    "./node_modules/@ionic/core/dist/esm/cubic-bezier-1d592096.js");
    /* harmony import */


    var _index_c38df685_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-c38df685.js */
    "./node_modules/@ionic/core/dist/esm/index-c38df685.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
    /* harmony import */


    var _hardware_back_button_1ed0083a_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./hardware-back-button-1ed0083a.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-1ed0083a.js");
    /* harmony import */


    var _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./overlays-e336664a.js */
    "./node_modules/@ionic/core/dist/esm/overlays-e336664a.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./framework-delegate-c2e2e1f4.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
    /* harmony import */


    var _index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./index-4e2fa3c6.js */
    "./node_modules/@ionic/core/dist/esm/index-4e2fa3c6.js"); // Defaults for the card swipe animation


    const SwipeToCloseDefaults = {
      MIN_PRESENTING_SCALE: 0.93
    };

    const createSwipeToCloseGesture = (el, animation, onDismiss) => {
      const height = el.offsetHeight;
      let isOpen = false;

      const canStart = detail => {
        const target = detail.event.target;

        if (target === null || !target.closest) {
          return true;
        }

        const content = target.closest('ion-content');

        if (content === null) {
          return true;
        } // Target is in the content so we don't start the gesture.
        // We could be more nuanced here and allow it for content that
        // does not need to scroll.


        return false;
      };

      const onStart = () => {
        animation.progressStart(true, isOpen ? 1 : 0);
      };

      const onMove = detail => {
        const step = detail.deltaY / height;

        if (step < 0) {
          return;
        }

        animation.progressStep(step);
      };

      const onEnd = detail => {
        const velocity = detail.velocityY;
        const step = detail.deltaY / height;

        if (step < 0) {
          return;
        }

        const threshold = (detail.deltaY + velocity * 1000) / height;
        const shouldComplete = threshold >= 0.5;
        let newStepValue = shouldComplete ? -0.001 : 0.001;

        if (!shouldComplete) {
          animation.easing('cubic-bezier(1, 0, 0.68, 0.28)');
          newStepValue += Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_4__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], step)[0];
        } else {
          animation.easing('cubic-bezier(0.32, 0.72, 0, 1)');
          newStepValue += Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_4__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], step)[0];
        }

        const duration = shouldComplete ? computeDuration(step * height, velocity) : computeDuration((1 - step) * height, velocity);
        isOpen = shouldComplete;
        gesture.enable(false);
        animation.onFinish(() => {
          if (!shouldComplete) {
            gesture.enable(true);
          }
        }).progressEnd(shouldComplete ? 1 : 0, newStepValue, duration);

        if (shouldComplete) {
          onDismiss();
        }
      };

      const gesture = Object(_index_c38df685_js__WEBPACK_IMPORTED_MODULE_5__["createGesture"])({
        el,
        gestureName: 'modalSwipeToClose',
        gesturePriority: 40,
        direction: 'y',
        threshold: 10,
        canStart,
        onStart,
        onMove,
        onEnd
      });
      return gesture;
    };

    const computeDuration = (remaining, velocity) => {
      return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(400, remaining / Math.abs(velocity * 1.1), 500);
    };
    /**
     * iOS Modal Enter Animation for the Card presentation style
     */


    const iosEnterAnimation = (baseEl, presentingEl) => {
      // The top translate Y for the presenting element
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl.querySelector('.modal-wrapper')).beforeStyles({
        'opacity': 1
      }).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(500).beforeAddClass('show-modal').addAnimation([backdropAnimation, wrapperAnimation]);

      if (presentingEl) {
        const modalTransform = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        const bodyEl = document.body;
        const toPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        const finalTransform = "translateY(".concat(modalTransform, ") scale(").concat(toPresentingScale, ")");
        const presentingAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().beforeStyles({
          'transform': 'translateY(0)',
          'transform-origin': 'top center',
          'overflow': 'hidden'
        }).afterStyles({
          'transform': finalTransform
        }).beforeAddWrite(() => bodyEl.style.setProperty('background-color', 'black')).addElement(presentingEl).keyframes([{
          offset: 0,
          filter: 'contrast(1)',
          transform: 'translateY(0px) scale(1)',
          borderRadius: '0px'
        }, {
          offset: 1,
          filter: 'contrast(0.85)',
          transform: finalTransform,
          borderRadius: '10px 10px 0 0'
        }]);
        baseAnimation.addAnimation(presentingAnimation);
      }

      return baseAnimation;
    };
    /**
     * iOS Modal Leave Animation
     */


    const iosLeaveAnimation = (baseEl, presentingEl, duration = 500) => {
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl.querySelector('.modal-wrapper')).beforeStyles({
        'opacity': 1
      }).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(baseEl).easing('cubic-bezier(0.32,0.72,0,1)').duration(duration).addAnimation([backdropAnimation, wrapperAnimation]);

      if (presentingEl) {
        const modalTransform = presentingEl.tagName === 'ION-MODAL' && presentingEl.presentingElement !== undefined ? '-10px' : 'max(30px, var(--ion-safe-area-top))';
        const bodyEl = document.body;
        const currentPresentingScale = SwipeToCloseDefaults.MIN_PRESENTING_SCALE;
        const presentingAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(presentingEl).beforeClearStyles(['transform']).afterClearStyles(['transform']).onFinish(currentStep => {
          // only reset background color if this is the last card-style modal
          if (currentStep !== 1) {
            return;
          }

          presentingEl.style.setProperty('overflow', '');
          const numModals = Array.from(bodyEl.querySelectorAll('ion-modal')).filter(m => m.presentingElement !== undefined).length;

          if (numModals <= 1) {
            bodyEl.style.setProperty('background-color', '');
          }
        }).keyframes([{
          offset: 0,
          filter: 'contrast(0.85)',
          transform: "translateY(".concat(modalTransform, ") scale(").concat(currentPresentingScale, ")"),
          borderRadius: '10px 10px 0 0'
        }, {
          offset: 1,
          filter: 'contrast(1)',
          transform: 'translateY(0px) scale(1)',
          borderRadius: '0px'
        }]);
        baseAnimation.addAnimation(presentingAnimation);
      }

      return baseAnimation;
    };
    /**
     * Md Modal Enter Animation
     */


    const mdEnterAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)');
      wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
        offset: 0,
        opacity: 0.01,
        transform: 'translateY(40px)'
      }, {
        offset: 1,
        opacity: 1,
        transform: 'translateY(0px)'
      }]);
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).beforeAddClass('show-modal').addAnimation([backdropAnimation, wrapperAnimation]);
    };
    /**
     * Md Modal Leave Animation
     */


    const mdLeaveAnimation = baseEl => {
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const backdropAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
      const wrapperEl = baseEl.querySelector('.modal-wrapper');
      backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0.0);
      wrapperAnimation.addElement(wrapperEl).keyframes([{
        offset: 0,
        opacity: 0.99,
        transform: 'translateY(0px)'
      }, {
        offset: 1,
        opacity: 0,
        transform: 'translateY(40px)'
      }]);
      return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
    };

    const Modal = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef); // Whether or not modal is being dismissed via gesture

        this.gestureAnimationDismissing = false;
        this.presented = false;
        this.mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */

        this.keyboardClose = true;
        /**
         * If `true`, the modal will be dismissed when the backdrop is clicked.
         */

        this.backdropDismiss = true;
        /**
         * If `true`, a backdrop will be displayed behind the modal.
         */

        this.showBackdrop = true;
        /**
         * If `true`, the modal will animate.
         */

        this.animated = true;
        /**
         * If `true`, the modal can be swiped to dismiss. Only applies in iOS mode.
         */

        this.swipeToClose = false;

        this.onBackdropTap = () => {
          this.dismiss(undefined, _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["B"]);
        };

        this.onDismiss = ev => {
          ev.stopPropagation();
          ev.preventDefault();
          this.dismiss();
        };

        this.onLifecycle = modalEvent => {
          const el = this.usersElement;
          const name = LIFECYCLE_MAP[modalEvent.type];

          if (el && name) {
            const ev = new CustomEvent(name, {
              bubbles: false,
              cancelable: false,
              detail: modalEvent.detail
            });
            el.dispatchEvent(ev);
          }
        };

        Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["d"])(this.el);
        this.didPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalDidPresent", 7);
        this.willPresent = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalWillPresent", 7);
        this.willDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalWillDismiss", 7);
        this.didDismiss = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionModalDidDismiss", 7);
      }
      /**
       * Present the modal overlay after it has been created.
       */


      present() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var container, componentProps, mode, animationBuilder, ani;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this.presented) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                container = _this.el.querySelector(".modal-wrapper");

                if (container) {
                  _context2.next = 5;
                  break;
                }

                throw new Error('container is undefined');

              case 5:
                componentProps = Object.assign(Object.assign({}, _this.componentProps), {
                  modal: _this.el
                });
                _context2.next = 8;
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_10__["a"])(_this.delegate, container, _this.component, ['ion-page'], componentProps);

              case 8:
                _this.usersElement = _context2.sent;
                _context2.next = 11;
                return Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_11__["d"])(_this.usersElement);

              case 11:
                _context2.next = 13;
                return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["e"])(_this, 'modalEnter', iosEnterAnimation, mdEnterAnimation, _this.presentingElement);

              case 13:
                mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_this);

                if (_this.swipeToClose && mode === 'ios') {
                  // All of the elements needed for the swipe gesture
                  // should be in the DOM and referenced by now, except
                  // for the presenting el
                  animationBuilder = _this.leaveAnimation || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('modalLeave', iosLeaveAnimation);
                  ani = _this.animation = animationBuilder(_this.el, _this.presentingElement);
                  _this.gesture = createSwipeToCloseGesture(_this.el, ani, () => {
                    /**
                     * While the gesture animation is finishing
                     * it is possible for a user to tap the backdrop.
                     * This would result in the dismiss animation
                     * being played again. Typically this is avoided
                     * by setting `presented = false` on the overlay
                     * component; however, we cannot do that here as
                     * that would prevent the element from being
                     * removed from the DOM.
                     */
                    _this.gestureAnimationDismissing = true;

                    _this.animation.onFinish( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _this.dismiss(undefined, 'gesture');

                          case 2:
                            _this.gestureAnimationDismissing = false;

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee);
                    })));
                  });

                  _this.gesture.enable(true);
                }

              case 15:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }
      /**
       * Dismiss the modal overlay after it has been presented.
       *
       * @param data Any data to emit in the dismiss events.
       * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
       */


      dismiss(data, role) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var enteringAnimation, dismissed;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this2.gestureAnimationDismissing && role !== 'gesture')) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", false);

              case 2:
                enteringAnimation = _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["h"].get(_this2) || [];
                _context3.next = 5;
                return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["f"])(_this2, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation, _this2.presentingElement);

              case 5:
                dismissed = _context3.sent;

                if (!dismissed) {
                  _context3.next = 11;
                  break;
                }

                _context3.next = 9;
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_10__["d"])(_this2.delegate, _this2.usersElement);

              case 9:
                if (_this2.animation) {
                  _this2.animation.destroy();
                }

                enteringAnimation.forEach(ani => ani.destroy());

              case 11:
                _this2.animation = undefined;
                return _context3.abrupt("return", dismissed);

              case 13:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }
      /**
       * Returns a promise that resolves when the modal did dismiss.
       */


      onDidDismiss() {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this.el, 'ionModalDidDismiss');
      }
      /**
       * Returns a promise that resolves when the modal will dismiss.
       */


      onWillDismiss() {
        return Object(_overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_8__["g"])(this.el, 'ionModalWillDismiss');
      }

      render() {
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          "no-router": true,
          "aria-modal": "true",
          class: Object.assign({
            [mode]: true,
            ["modal-card"]: this.presentingElement !== undefined && mode === 'ios'
          }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_9__["g"])(this.cssClass)),
          style: {
            zIndex: "".concat(20000 + this.overlayIndex)
          },
          onIonBackdropTap: this.onBackdropTap,
          onIonDismiss: this.onDismiss,
          onIonModalDidPresent: this.onLifecycle,
          onIonModalWillPresent: this.onLifecycle,
          onIonModalWillDismiss: this.onLifecycle,
          onIonModalDidDismiss: this.onLifecycle
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
          visible: this.showBackdrop,
          tappable: this.backdropDismiss
        }), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          role: "dialog",
          class: "modal-wrapper"
        }));
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h{--backdrop-opacity:var(--ion-backdrop-opacity,0.32)}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}";
      }

    };
    const LIFECYCLE_MAP = {
      'ionModalDidPresent': 'ionViewDidEnter',
      'ionModalWillPresent': 'ionViewWillEnter',
      'ionModalWillDismiss': 'ionViewWillLeave',
      'ionModalDidDismiss': 'ionViewDidLeave'
    };
    /***/
  }
}]);
//# sourceMappingURL=39-es5.js.map