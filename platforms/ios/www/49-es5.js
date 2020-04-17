function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js ***!
    \************************************************************************/

  /*! exports provided: ion_refresher, ion_refresher_content */

  /***/
  function node_modulesIonicCoreDistEsmIonRefresher_2IosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_refresher", function () {
      return Refresher;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_refresher_content", function () {
      return RefresherContent;
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


    var _index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index.mjs */
    "./node_modules/@ionic/core/dist/esm/index.mjs");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
    /* harmony import */


    var _hardware_back_button_1ed0083a_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./hardware-back-button-1ed0083a.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-1ed0083a.js");
    /* harmony import */


    var _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./index-c58c7441.js */
    "./node_modules/@ionic/core/dist/esm/index-c58c7441.js");
    /* harmony import */


    var _overlays_e336664a_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./overlays-e336664a.js */
    "./node_modules/@ionic/core/dist/esm/overlays-e336664a.js");
    /* harmony import */


    var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./index-3476b023.js */
    "./node_modules/@ionic/core/dist/esm/index-3476b023.js");
    /* harmony import */


    var _spinner_configs_28520d80_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./spinner-configs-28520d80.js */
    "./node_modules/@ionic/core/dist/esm/spinner-configs-28520d80.js");

    const HapticEngine = {
      getEngine() {
        const win = window;
        return win.TapticEngine || win.Capacitor && win.Capacitor.Plugins.Haptics;
      },

      available() {
        return !!this.getEngine();
      },

      isCordova() {
        return !!window.TapticEngine;
      },

      isCapacitor() {
        const win = window;
        return !!win.Capacitor;
      },

      impact(options) {
        const engine = this.getEngine();

        if (!engine) {
          return;
        }

        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.impact({
          style
        });
      },

      notification(options) {
        const engine = this.getEngine();

        if (!engine) {
          return;
        }

        const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
        engine.notification({
          style
        });
      },

      selection() {
        this.impact({
          style: 'light'
        });
      },

      selectionStart() {
        const engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionStart();
        } else {
          engine.gestureSelectionStart();
        }
      },

      selectionChanged() {
        const engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      },

      selectionEnd() {
        const engine = this.getEngine();

        if (!engine) {
          return;
        }

        if (this.isCapacitor()) {
          engine.selectionChanged();
        } else {
          engine.gestureSelectionChanged();
        }
      }

    };
    /**
     * Use this to indicate success/failure/warning to the user.
     * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
     */

    const hapticImpact = options => {
      HapticEngine.impact(options);
    };

    const getRefresherAnimationType = contentEl => {
      const previousSibling = contentEl.previousElementSibling;
      const hasHeader = previousSibling !== null && previousSibling.tagName === 'ION-HEADER';
      return hasHeader ? 'translate' : 'scale';
    };

    const createPullingAnimation = (type, pullingSpinner) => {
      return type === 'scale' ? createScaleAnimation(pullingSpinner) : createTranslateAnimation(pullingSpinner);
    };

    const createBaseAnimation = pullingRefresherIcon => {
      const spinner = pullingRefresherIcon.querySelector('ion-spinner');
      const circle = spinner.shadowRoot.querySelector('circle');
      const spinnerArrowContainer = pullingRefresherIcon.querySelector('.spinner-arrow-container');
      const arrowContainer = pullingRefresherIcon.querySelector('.arrow-container');
      const arrow = arrowContainer ? arrowContainer.querySelector('ion-icon') : null;
      const baseAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().duration(1000).easing('ease-out');
      const spinnerArrowContainerAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(spinnerArrowContainer).keyframes([{
        offset: 0,
        opacity: '0.3'
      }, {
        offset: 0.45,
        opacity: '0.3'
      }, {
        offset: 0.55,
        opacity: '1'
      }, {
        offset: 1,
        opacity: '1'
      }]);
      const circleInnerAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(circle).keyframes([{
        offset: 0,
        strokeDasharray: '1px, 200px'
      }, {
        offset: 0.20,
        strokeDasharray: '1px, 200px'
      }, {
        offset: 0.55,
        strokeDasharray: '100px, 200px'
      }, {
        offset: 1,
        strokeDasharray: '100px, 200px'
      }]);
      const circleOuterAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(spinner).keyframes([{
        offset: 0,
        transform: 'rotate(-90deg)'
      }, {
        offset: 1,
        transform: 'rotate(210deg)'
      }]);
      /**
       * Only add arrow animation if present
       * this allows users to customize the spinners
       * without errors being thrown
       */

      if (arrowContainer && arrow) {
        const arrowContainerAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(arrowContainer).keyframes([{
          offset: 0,
          transform: 'rotate(0deg)'
        }, {
          offset: 0.30,
          transform: 'rotate(0deg)'
        }, {
          offset: 0.55,
          transform: 'rotate(280deg)'
        }, {
          offset: 1,
          transform: 'rotate(400deg)'
        }]);
        const arrowAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(arrow).keyframes([{
          offset: 0,
          transform: 'translateX(2px) scale(0)'
        }, {
          offset: 0.30,
          transform: 'translateX(2px) scale(0)'
        }, {
          offset: 0.55,
          transform: 'translateX(-1.5px) scale(1)'
        }, {
          offset: 1,
          transform: 'translateX(-1.5px) scale(1)'
        }]);
        baseAnimation.addAnimation([arrowContainerAnimation, arrowAnimation]);
      }

      return baseAnimation.addAnimation([spinnerArrowContainerAnimation, circleInnerAnimation, circleOuterAnimation]);
    };

    const createScaleAnimation = pullingRefresherIcon => {
      const height = pullingRefresherIcon.clientHeight;
      const spinnerAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(pullingRefresherIcon).keyframes([{
        offset: 0,
        transform: "scale(0) translateY(-".concat(height + 20, "px)")
      }, {
        offset: 1,
        transform: 'scale(1) translateY(100px)'
      }]);
      return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
    };

    const createTranslateAnimation = pullingRefresherIcon => {
      const height = pullingRefresherIcon.clientHeight;
      const spinnerAnimation = Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().addElement(pullingRefresherIcon).keyframes([{
        offset: 0,
        transform: "translateY(-".concat(height + 20, "px)")
      }, {
        offset: 1,
        transform: 'translateY(100px)'
      }]);
      return createBaseAnimation(pullingRefresherIcon).addAnimation([spinnerAnimation]);
    };

    const createSnapBackAnimation = pullingRefresherIcon => {
      return Object(_animation_56279521_js__WEBPACK_IMPORTED_MODULE_3__["c"])().duration(125).addElement(pullingRefresherIcon).fromTo('transform', 'translateY(var(--ion-pulling-refresher-translate, 100px))', 'translateY(0px)');
    }; // iOS Native Refresher
    // -----------------------------


    const setSpinnerOpacity = (spinner, opacity) => {
      spinner.style.setProperty('opacity', opacity.toString());
    };

    const handleScrollWhilePulling = (spinner, ticks, opacity, currentTickToShow) => {
      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
        setSpinnerOpacity(spinner, opacity);
        ticks.forEach((el, i) => el.style.setProperty('opacity', i <= currentTickToShow ? '0.99' : '0'));
      });
    };

    const handleScrollWhileRefreshing = (spinner, lastVelocityY) => {
      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
        // If user pulls down quickly, the spinner should spin faster
        spinner.style.setProperty('--refreshing-rotation-duration', lastVelocityY >= 1.0 ? '0.5s' : '2s');
        spinner.style.setProperty('opacity', '1');
      });
    };

    const translateElement = (el, value) => {
      if (!el) {
        return Promise.resolve();
      }

      const trans = transitionEndAsync(el);
      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
        el.style.setProperty('transition', '0.2s all ease-out');

        if (value === undefined) {
          el.style.removeProperty('transform');
        } else {
          el.style.setProperty('transform', "translate3d(0px, ".concat(value, ", 0px)"));
        }
      });
      return trans;
    }; // Utils
    // -----------------------------


    const shouldUseNativeRefresher = (referenceEl, mode) => {
      const pullingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
      const refreshingSpinner = referenceEl.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');
      return pullingSpinner !== null && refreshingSpinner !== null && (mode === 'ios' && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])('mobile') && referenceEl.style.webkitOverflowScrolling !== undefined || mode === 'md');
    };

    const transitionEndAsync = el => {
      return new Promise(resolve => {
        transitionEnd(el, resolve);
      });
    };

    const transitionEnd = (el, callback) => {
      let unRegTrans;
      const opts = {
        passive: true
      };

      const unregister = () => {
        if (unRegTrans) {
          unRegTrans();
        }
      };

      const onTransitionEnd = ev => {
        if (el === ev.target) {
          unregister();
          callback(ev);
        }
      };

      if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);

        unRegTrans = () => {
          el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
          el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
      }

      return unregister;
    };

    const Refresher = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.appliedStyles = false;
        this.didStart = false;
        this.progress = 0;
        this.pointerDown = false;
        this.needsCompletion = false;
        this.didRefresh = false;
        this.lastVelocityY = 0;
        this.animations = [];
        this.nativeRefresher = false;
        /**
         * The current state which the refresher is in. The refresher's states include:
         *
         * - `inactive` - The refresher is not being pulled down or refreshing and is currently hidden.
         * - `pulling` - The user is actively pulling down the refresher, but has not reached the point yet that if the user lets go, it'll refresh.
         * - `cancelling` - The user pulled down the refresher and let go, but did not pull down far enough to kick off the `refreshing` state. After letting go, the refresher is in the `cancelling` state while it is closing, and will go back to the `inactive` state once closed.
         * - `ready` - The user has pulled down the refresher far enough that if they let go, it'll begin the `refreshing` state.
         * - `refreshing` - The refresher is actively waiting on the async operation to end. Once the refresh handler calls `complete()` it will begin the `completing` state.
         * - `completing` - The `refreshing` state has finished and the refresher is in the way of closing itself. Once closed, the refresher will go back to the `inactive` state.
         */

        this.state = 1
        /* Inactive */
        ;
        /**
         * The minimum distance the user must pull down until the
         * refresher will go into the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */

        this.pullMin = 60;
        /**
         * The maximum distance of the pull until the refresher
         * will automatically go into the `refreshing` state.
         * Defaults to the result of `pullMin + 60`.
         * Does not apply when  the refresher content uses a spinner,
         * enabling the native refresher.
         */

        this.pullMax = this.pullMin + 60;
        /**
         * Time it takes to close the refresher.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */

        this.closeDuration = '280ms';
        /**
         * Time it takes the refresher to to snap back to the `refreshing` state.
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */

        this.snapbackDuration = '280ms';
        /**
         * How much to multiply the pull speed by. To slow the pull animation down,
         * pass a number less than `1`. To speed up the pull, pass a number greater
         * than `1`. The default value is `1` which is equal to the speed of the cursor.
         * If a negative value is passed in, the factor will be `1` instead.
         *
         * For example: If the value passed is `1.2` and the content is dragged by
         * `10` pixels, instead of `10` pixels the content will be pulled by `12` pixels
         * (an increase of 20 percent). If the value passed is `0.8`, the dragged amount
         * will be `8` pixels, less than the amount the cursor has moved.
         *
         * Does not apply when the refresher content uses a spinner,
         * enabling the native refresher.
         */

        this.pullFactor = 1;
        /**
         * If `true`, the refresher will be hidden.
         */

        this.disabled = false;
        this.ionRefresh = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionRefresh", 7);
        this.ionPull = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionPull", 7);
        this.ionStart = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStart", 7);
      }

      disabledChanged() {
        if (this.gesture) {
          this.gesture.enable(!this.disabled);
        }
      }

      checkNativeRefresher() {
        const useNativeRefresher = shouldUseNativeRefresher(this.el, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this));

        if (useNativeRefresher && !this.nativeRefresher) {
          const contentEl = this.el.closest('ion-content');
          this.setupNativeRefresher(contentEl);
        } else if (!useNativeRefresher) {
          this.destroyNativeRefresher();
        }
      }

      destroyNativeRefresher() {
        if (this.scrollEl && this.scrollListenerCallback) {
          this.scrollEl.removeEventListener('scroll', this.scrollListenerCallback);
          this.scrollListenerCallback = undefined;
        }

        this.nativeRefresher = false;
      }

      resetNativeRefresher(el, state) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.state = state;

                if (!(Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_this) === 'ios')) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return translateElement(el, undefined);

              case 4:
                _context.next = 8;
                break;

              case 6:
                _context.next = 8;
                return transitionEndAsync(_this.el.querySelector('.refresher-refreshing-icon'));

              case 8:
                _this.didRefresh = false;
                _this.needsCompletion = false;
                _this.pointerDown = false;

                _this.animations.forEach(ani => ani.destroy());

                _this.animations = [];
                _this.progress = 0;
                _this.state = 1
                /* Inactive */
                ;

              case 15:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      setupiOSNativeRefresher(pullingSpinner, refreshingSpinner) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var ticks, MAX_PULL, NUM_TICKS;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.elementToTransform = _this2.scrollEl;
                ticks = pullingSpinner.shadowRoot.querySelectorAll('svg');
                MAX_PULL = _this2.scrollEl.clientHeight * 0.16;
                NUM_TICKS = ticks.length;
                Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => ticks.forEach(el => el.style.setProperty('animation', 'none')));

                _this2.scrollListenerCallback = () => {
                  // If pointer is not on screen or refresher is not active, ignore scroll
                  if (!_this2.pointerDown && _this2.state === 1
                  /* Inactive */
                  ) {
                      return;
                    }

                  Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => {
                    // PTR should only be active when overflow scrolling at the top
                    const scrollTop = _this2.scrollEl.scrollTop;
                    const refresherHeight = _this2.el.clientHeight;

                    if (scrollTop > 0) {
                      /**
                       * If refresher is refreshing and user tries to scroll
                       * progressively fade refresher out/in
                       */
                      if (_this2.state === 8
                      /* Refreshing */
                      ) {
                          const ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, scrollTop / (refresherHeight * 0.5), 1);
                          Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => setSpinnerOpacity(refreshingSpinner, 1 - ratio));
                          return;
                        }

                      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => setSpinnerOpacity(pullingSpinner, 0));
                      return;
                    }

                    if (_this2.pointerDown) {
                      if (!_this2.didStart) {
                        _this2.didStart = true;

                        _this2.ionStart.emit();
                      } // emit "pulling" on every move


                      if (_this2.pointerDown) {
                        _this2.ionPull.emit();
                      }
                    } // delay showing the next tick marks until user has pulled 30px


                    const opacity = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, Math.abs(scrollTop) / refresherHeight, 0.99);
                    const pullAmount = _this2.progress = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, (Math.abs(scrollTop) - 30) / MAX_PULL, 1);
                    const currentTickToShow = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, Math.floor(pullAmount * NUM_TICKS), NUM_TICKS - 1);
                    const shouldShowRefreshingSpinner = _this2.state === 8
                    /* Refreshing */
                    || currentTickToShow === NUM_TICKS - 1;

                    if (shouldShowRefreshingSpinner) {
                      if (_this2.pointerDown) {
                        handleScrollWhileRefreshing(refreshingSpinner, _this2.lastVelocityY);
                      }

                      if (!_this2.didRefresh) {
                        _this2.beginRefresh();

                        _this2.didRefresh = true;
                        hapticImpact({
                          style: 'light'
                        });
                        /**
                         * Translate the content element otherwise when pointer is removed
                         * from screen the scroll content will bounce back over the refresher
                         */

                        if (!_this2.pointerDown) {
                          translateElement(_this2.elementToTransform, "".concat(refresherHeight, "px"));
                        }
                      }
                    } else {
                      _this2.state = 2
                      /* Pulling */
                      ;
                      handleScrollWhilePulling(pullingSpinner, ticks, opacity, currentTickToShow);
                    }
                  });
                };

                _this2.scrollEl.addEventListener('scroll', _this2.scrollListenerCallback);

                _context2.next = 9;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-c38df685.js */
                "./node_modules/@ionic/core/dist/esm/index-c38df685.js"));

              case 9:
                _context2.t0 = {
                  el: _this2.scrollEl,
                  gestureName: 'refresher',
                  gesturePriority: 10,
                  direction: 'y',
                  threshold: 5,
                  onStart: () => {
                    _this2.pointerDown = true;

                    if (!_this2.didRefresh) {
                      translateElement(_this2.elementToTransform, '0px');
                    }
                  },
                  onMove: ev => {
                    _this2.lastVelocityY = ev.velocityY;
                  },
                  onEnd: () => {
                    _this2.pointerDown = false;
                    _this2.didStart = false;

                    if (_this2.needsCompletion) {
                      _this2.resetNativeRefresher(_this2.elementToTransform, 32
                      /* Completing */
                      );

                      _this2.needsCompletion = false;
                    } else if (_this2.didRefresh) {
                      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["f"])(() => translateElement(_this2.elementToTransform, "".concat(_this2.el.clientHeight, "px")));
                    }
                  }
                };
                _this2.gesture = _context2.sent.createGesture(_context2.t0);

                _this2.disabledChanged();

              case 12:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var circle, pullingRefresherIcon, refreshingCircle;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                circle = pullingSpinner.shadowRoot.querySelector('circle');
                pullingRefresherIcon = _this3.el.querySelector('ion-refresher-content .refresher-pulling-icon');
                refreshingCircle = refreshingSpinner.shadowRoot.querySelector('circle');

                if (circle !== null && refreshingCircle !== null) {
                  Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                    circle.style.setProperty('animation', 'none'); // This lines up the animation on the refreshing spinner with the pulling spinner

                    refreshingSpinner.style.setProperty('animation-delay', '-655ms');
                    refreshingCircle.style.setProperty('animation-delay', '-655ms');
                  });
                }

                _context4.next = 6;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-c38df685.js */
                "./node_modules/@ionic/core/dist/esm/index-c38df685.js"));

              case 6:
                _context4.t0 = {
                  el: _this3.scrollEl,
                  gestureName: 'refresher',
                  gesturePriority: 10,
                  direction: 'y',
                  threshold: 5,
                  canStart: () => _this3.state !== 8
                  /* Refreshing */
                  && _this3.state !== 32
                  /* Completing */
                  && _this3.scrollEl.scrollTop === 0,
                  onStart: ev => {
                    ev.data = {
                      animation: undefined,
                      didStart: false,
                      cancelled: false
                    };
                  },
                  onMove: ev => {
                    if (ev.velocityY < 0 && _this3.progress === 0 && !ev.data.didStart || ev.data.cancelled) {
                      ev.data.cancelled = true;
                      return;
                    }

                    if (!ev.data.didStart) {
                      ev.data.didStart = true;
                      _this3.state = 2
                      /* Pulling */
                      ;
                      Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
                        const animationType = getRefresherAnimationType(contentEl);
                        const animation = createPullingAnimation(animationType, pullingRefresherIcon);
                        ev.data.animation = animation;

                        _this3.scrollEl.style.setProperty('--overflow', 'hidden');

                        animation.progressStart(false, 0);

                        _this3.ionStart.emit();

                        _this3.animations.push(animation);
                      });
                      return;
                    } // Since we are using an easing curve, slow the gesture tracking down a bit


                    _this3.progress = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, ev.deltaY / 180 * 0.5, 1);
                    ev.data.animation.progressStep(_this3.progress);

                    _this3.ionPull.emit();
                  },
                  onEnd: ev => {
                    if (!ev.data.didStart) {
                      return;
                    }

                    Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => _this3.scrollEl.style.removeProperty('--overflow'));

                    if (_this3.progress <= 0.4) {
                      _this3.gesture.enable(false);

                      ev.data.animation.progressEnd(0, _this3.progress, 500).onFinish(() => {
                        _this3.animations.forEach(ani => ani.destroy());

                        _this3.animations = [];

                        _this3.gesture.enable(true);

                        _this3.state = 1
                        /* Inactive */
                        ;
                      });
                      return;
                    }

                    const progress = Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_4__["g"])([0, 0], [0, 0], [1, 1], [1, 1], _this3.progress)[0];
                    const snapBackAnimation = createSnapBackAnimation(pullingRefresherIcon);

                    _this3.animations.push(snapBackAnimation);

                    Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            pullingRefresherIcon.style.setProperty('--ion-pulling-refresher-translate', "".concat(progress * 100, "px"));
                            ev.data.animation.progressEnd();
                            _context3.next = 4;
                            return snapBackAnimation.play();

                          case 4:
                            _this3.beginRefresh();

                            ev.data.animation.destroy();

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3);
                    })));
                  }
                };
                _this3.gesture = _context4.sent.createGesture(_context4.t0);

                _this3.disabledChanged();

              case 9:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }

      setupNativeRefresher(contentEl) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var pullingSpinner, refreshingSpinner;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!(_this4.scrollListenerCallback || !contentEl || _this4.nativeRefresher || !_this4.scrollEl)) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt("return");

              case 2:
                _this4.nativeRefresher = true;
                pullingSpinner = _this4.el.querySelector('ion-refresher-content .refresher-pulling ion-spinner');
                refreshingSpinner = _this4.el.querySelector('ion-refresher-content .refresher-refreshing ion-spinner');

                if (Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_this4) === 'ios') {
                  _this4.setupiOSNativeRefresher(pullingSpinner, refreshingSpinner);
                } else {
                  _this4.setupMDNativeRefresher(contentEl, pullingSpinner, refreshingSpinner);
                }

              case 6:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }

      componentDidUpdate() {
        this.checkNativeRefresher();
      }

      connectedCallback() {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var contentEl;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                if (!(_this5.el.getAttribute('slot') !== 'fixed')) {
                  _context6.next = 3;
                  break;
                }

                console.error('Make sure you use: <ion-refresher slot="fixed">');
                return _context6.abrupt("return");

              case 3:
                contentEl = _this5.el.closest('ion-content');

                if (contentEl) {
                  _context6.next = 7;
                  break;
                }

                console.error('<ion-refresher> must be used inside an <ion-content>');
                return _context6.abrupt("return");

              case 7:
                _context6.next = 9;
                return contentEl.getScrollElement();

              case 9:
                _this5.scrollEl = _context6.sent;
                _this5.backgroundContentEl = contentEl.shadowRoot.querySelector('#background-content');

                if (!shouldUseNativeRefresher(_this5.el, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_this5))) {
                  _context6.next = 15;
                  break;
                }

                _this5.setupNativeRefresher(contentEl);

                _context6.next = 20;
                break;

              case 15:
                _context6.next = 17;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-c38df685.js */
                "./node_modules/@ionic/core/dist/esm/index-c38df685.js"));

              case 17:
                _context6.t0 = {
                  el: contentEl,
                  gestureName: 'refresher',
                  gesturePriority: 10,
                  direction: 'y',
                  threshold: 20,
                  passive: false,
                  canStart: () => _this5.canStart(),
                  onStart: () => _this5.onStart(),
                  onMove: ev => _this5.onMove(ev),
                  onEnd: () => _this5.onEnd()
                };
                _this5.gesture = _context6.sent.createGesture(_context6.t0);

                _this5.disabledChanged();

              case 20:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

      disconnectedCallback() {
        this.destroyNativeRefresher();
        this.scrollEl = undefined;

        if (this.gesture) {
          this.gesture.destroy();
          this.gesture = undefined;
        }
      }
      /**
       * Call `complete()` when your async operation has completed.
       * For example, the `refreshing` state is while the app is performing
       * an asynchronous operation, such as receiving more data from an
       * AJAX request. Once the data has been received, you then call this
       * method to signify that the refreshing has completed and to close
       * the refresher. This method also changes the refresher's state from
       * `refreshing` to `completing`.
       */


      complete() {
        var _this6 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                if (_this6.nativeRefresher) {
                  _this6.needsCompletion = true; // Do not reset scroll el until user removes pointer from screen

                  if (!_this6.pointerDown) {
                    _this6.resetNativeRefresher(_this6.elementToTransform, 32
                    /* Completing */
                    );
                  }
                } else {
                  _this6.close(32
                  /* Completing */
                  , '120ms');
                }

              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }))();
      }
      /**
       * Changes the refresher's state from `refreshing` to `cancelling`.
       */


      cancel() {
        var _this7 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                if (_this7.nativeRefresher) {
                  // Do not reset scroll el until user removes pointer from screen
                  if (!_this7.pointerDown) {
                    _this7.resetNativeRefresher(_this7.elementToTransform, 16
                    /* Cancelling */
                    );
                  }
                } else {
                  _this7.close(16
                  /* Cancelling */
                  , '');
                }

              case 1:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }))();
      }
      /**
       * A number representing how far down the user has pulled.
       * The number `0` represents the user hasn't pulled down at all. The
       * number `1`, and anything greater than `1`, represents that the user
       * has pulled far enough down that when they let go then the refresh will
       * happen. If they let go and the number is less than `1`, then the
       * refresh will not happen, and the content will return to it's original
       * position.
       */


      getProgress() {
        return Promise.resolve(this.progress);
      }

      canStart() {
        if (!this.scrollEl) {
          return false;
        }

        if (this.state !== 1
        /* Inactive */
        ) {
            return false;
          } // if the scrollTop is greater than zero then it's
        // not possible to pull the content down yet


        if (this.scrollEl.scrollTop > 0) {
          return false;
        }

        return true;
      }

      onStart() {
        this.progress = 0;
        this.state = 1
        /* Inactive */
        ;
      }

      onMove(detail) {
        if (!this.scrollEl) {
          return;
        } // this method can get called like a bazillion times per second,
        // so it's built to be as efficient as possible, and does its
        // best to do any DOM read/writes only when absolutely necessary
        // if multi-touch then get out immediately


        const ev = detail.event;

        if (ev.touches && ev.touches.length > 1) {
          return;
        } // do nothing if it's actively refreshing
        // or it's in the way of closing
        // or this was never a startY


        if ((this.state & 56
        /* _BUSY_ */
        ) !== 0) {
          return;
        }

        const pullFactor = Number.isNaN(this.pullFactor) || this.pullFactor < 0 ? 1 : this.pullFactor;
        const deltaY = detail.deltaY * pullFactor; // don't bother if they're scrolling up
        // and have not already started dragging

        if (deltaY <= 0) {
          // the current Y is higher than the starting Y
          // so they scrolled up enough to be ignored
          this.progress = 0;
          this.state = 1
          /* Inactive */
          ;

          if (this.appliedStyles) {
            // reset the styles only if they were applied
            this.setCss(0, '', false, '');
            return;
          }

          return;
        }

        if (this.state === 1
        /* Inactive */
        ) {
            // this refresh is not already actively pulling down
            // get the content's scrollTop
            const scrollHostScrollTop = this.scrollEl.scrollTop; // if the scrollTop is greater than zero then it's
            // not possible to pull the content down yet

            if (scrollHostScrollTop > 0) {
              this.progress = 0;
              return;
            } // content scrolled all the way to the top, and dragging down


            this.state = 2
            /* Pulling */
            ;
          } // prevent native scroll events


        if (ev.cancelable) {
          ev.preventDefault();
        } // the refresher is actively pulling at this point
        // move the scroll element within the content element


        this.setCss(deltaY, '0ms', true, '');

        if (deltaY === 0) {
          // don't continue if there's no delta yet
          this.progress = 0;
          return;
        }

        const pullMin = this.pullMin; // set pull progress

        this.progress = deltaY / pullMin; // emit "start" if it hasn't started yet

        if (!this.didStart) {
          this.didStart = true;
          this.ionStart.emit();
        } // emit "pulling" on every move


        this.ionPull.emit(); // do nothing if the delta is less than the pull threshold

        if (deltaY < pullMin) {
          // ensure it stays in the pulling state, cuz its not ready yet
          this.state = 2
          /* Pulling */
          ;
          return;
        }

        if (deltaY > this.pullMax) {
          // they pulled farther than the max, so kick off the refresh
          this.beginRefresh();
          return;
        } // pulled farther than the pull min!!
        // it is now in the `ready` state!!
        // if they let go then it'll refresh, kerpow!!


        this.state = 4
        /* Ready */
        ;
        return;
      }

      onEnd() {
        // only run in a zone when absolutely necessary
        if (this.state === 4
        /* Ready */
        ) {
            // they pulled down far enough, so it's ready to refresh
            this.beginRefresh();
          } else if (this.state === 2
        /* Pulling */
        ) {
            // they were pulling down, but didn't pull down far enough
            // set the content back to it's original location
            // and close the refresher
            // set that the refresh is actively cancelling
            this.cancel();
          }
      }

      beginRefresh() {
        // assumes we're already back in a zone
        // they pulled down far enough, so it's ready to refresh
        this.state = 8
        /* Refreshing */
        ; // place the content in a hangout position while it thinks

        this.setCss(this.pullMin, this.snapbackDuration, true, ''); // emit "refresh" because it was pulled down far enough
        // and they let go to begin refreshing

        this.ionRefresh.emit({
          complete: this.complete.bind(this)
        });
      }

      close(state, delay) {
        // create fallback timer incase something goes wrong with transitionEnd event
        setTimeout(() => {
          this.state = 1
          /* Inactive */
          ;
          this.progress = 0;
          this.didStart = false;
          this.setCss(0, '0ms', false, '');
        }, 600); // reset set the styles on the scroll element
        // set that the refresh is actively cancelling/completing

        this.state = state;
        this.setCss(0, this.closeDuration, true, delay); // TODO: stop gesture
      }

      setCss(y, duration, overflowVisible, delay) {
        if (this.nativeRefresher) {
          return;
        }

        this.appliedStyles = y > 0;
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["w"])(() => {
          if (this.scrollEl && this.backgroundContentEl) {
            const scrollStyle = this.scrollEl.style;
            const backgroundStyle = this.backgroundContentEl.style;
            scrollStyle.transform = backgroundStyle.transform = y > 0 ? "translateY(".concat(y, "px) translateZ(0px)") : '';
            scrollStyle.transitionDuration = backgroundStyle.transitionDuration = duration;
            scrollStyle.transitionDelay = backgroundStyle.transitionDelay = delay;
            scrollStyle.overflow = overflowVisible ? 'hidden' : '';
          }
        });
      }

      render() {
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          slot: "fixed",
          class: {
            [mode]: true,
            // Used internally for styling
            ["refresher-".concat(mode)]: true,
            'refresher-native': this.nativeRefresher,
            'refresher-active': this.state !== 1
            /* Inactive */
            ,
            'refresher-pulling': this.state === 2
            /* Pulling */
            ,
            'refresher-ready': this.state === 4
            /* Ready */
            ,
            'refresher-refreshing': this.state === 8
            /* Refreshing */
            ,
            'refresher-cancelling': this.state === 16
            /* Cancelling */
            ,
            'refresher-completing': this.state === 32
            /* Completing */

          }
        });
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "disabled": ["disabledChanged"]
        };
      }

      static get style() {
        return "ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-refresher.refresher-native ion-spinner{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:refresher-pop .25s linear forwards;animation:refresher-pop .25s linear forwards}.refresher-native.refresher-completing .refresher-pulling ion-spinner,.refresher-native.refresher-refreshing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-completing .refresher-refreshing ion-spinner,.refresher-native.refresher-pulling .refresher-pulling ion-spinner,.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}\@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}to{-webkit-transform:scale(1);transform:scale(1)}}\@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}to{-webkit-transform:scale(1);transform:scale(1)}}\@-webkit-keyframes refresher-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}\@keyframes refresher-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";
      }

    };
    const RefresherContent = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      componentWillLoad() {
        if (this.pullingIcon === undefined) {
          const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          const overflowRefresher = this.el.style.webkitOverflowScrolling !== undefined ? 'lines' : 'arrow-down';
          this.pullingIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingIcon', mode === 'ios' && Object(_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["i"])('mobile') ? _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', overflowRefresher) : 'circular');
        }

        if (this.refreshingSpinner === undefined) {
          const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          this.refreshingSpinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('refreshingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('spinner', mode === 'ios' ? 'lines' : 'circular'));
        }
      }

      render() {
        const pullingIcon = this.pullingIcon;
        const hasSpinner = pullingIcon != null && _spinner_configs_28520d80_js__WEBPACK_IMPORTED_MODULE_12__["S"][pullingIcon] !== undefined;
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          class: mode
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-pulling"
        }, this.pullingIcon && hasSpinner && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-pulling-icon"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "spinner-arrow-container"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
          name: this.pullingIcon,
          paused: true
        }), mode === 'md' && this.pullingIcon === 'circular' && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "arrow-container"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          name: "caret-back-sharp"
        })))), this.pullingIcon && !hasSpinner && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-pulling-icon"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          icon: this.pullingIcon,
          lazy: false
        })), this.pullingText && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-pulling-text",
          innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_11__["s"])(this.pullingText)
        })), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-refreshing"
        }, this.refreshingSpinner && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-refreshing-icon"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-spinner", {
          name: this.refreshingSpinner
        })), this.refreshingText && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "refresher-refreshing-text",
          innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_11__["s"])(this.refreshingText)
        })));
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=49-es5.js.map