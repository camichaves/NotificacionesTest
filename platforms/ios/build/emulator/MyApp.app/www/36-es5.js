function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js ***!
    \*******************************************************************/

  /*! exports provided: ion_menu, ion_menu_button, ion_menu_toggle */

  /***/
  function node_modulesIonicCoreDistEsmIonMenu_3IosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu", function () {
      return Menu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_button", function () {
      return MenuButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function () {
      return MenuToggle;
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


    var _hardware_back_button_1ed0083a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./hardware-back-button-1ed0083a.js */
    "./node_modules/@ionic/core/dist/esm/hardware-back-button-1ed0083a.js");
    /* harmony import */


    var _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./index-c58c7441.js */
    "./node_modules/@ionic/core/dist/esm/index-c58c7441.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    const iosEasing = 'cubic-bezier(0.32,0.72,0,1)';
    const mdEasing = 'cubic-bezier(0.0,0.0,0.2,1)';
    const iosEasingReverse = 'cubic-bezier(1, 0, 0.68, 0.28)';
    const mdEasingReverse = 'cubic-bezier(0.4, 0, 0.6, 1)';
    const Menu = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_c38df685_js__WEBPACK_IMPORTED_MODULE_5__["GESTURE_CONTROLLER"].createBlocker({
          disableScroll: true
        });
        this.mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        this.easing = this.mode === 'ios' ? iosEasing : mdEasing;
        this.easingReverse = this.mode === 'ios' ? iosEasingReverse : mdEasingReverse;
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */

        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */

        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */

        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */

        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionMenuChange", 7);
      }

      typeChanged(type, oldType) {
        const contentEl = this.contentEl;

        if (contentEl) {
          if (oldType !== undefined) {
            contentEl.classList.remove("menu-content-".concat(oldType));
          }

          contentEl.classList.add("menu-content-".concat(type));
          contentEl.removeAttribute('style');
        }

        if (this.menuInnerEl) {
          // Remove effects of previous animations
          this.menuInnerEl.removeAttribute('style');
        }

        this.animation = undefined;
      }

      disabledChanged() {
        this.updateState();
        this.ionMenuChange.emit({
          disabled: this.disabled,
          open: this._isOpen
        });
      }

      sideChanged() {
        this.isEndSide = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
      }

      swipeGestureChanged() {
        this.updateState();
      }

      connectedCallback() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var el, parent, content;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (_this.type === undefined) {
                  _this.type = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuType', 'overlay');
                }

                el = _this.el;
                parent = el.parentNode;

                if (_this.contentId === undefined) {
                  console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"main-content\"></ion-menu>\n  <div id=\"main-content\">...</div>\n");
                }

                content = _this.contentId !== undefined ? document.getElementById(_this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                if (!(!content || !content.tagName)) {
                  _context.next = 8;
                  break;
                }

                // requires content element
                console.error('Menu: must have a "content" element to listen for drag events on.');
                return _context.abrupt("return");

              case 8:
                _this.contentEl = content; // add menu's content classes

                content.classList.add('menu-content');

                _this.typeChanged(_this.type, undefined);

                _this.sideChanged(); // register this menu with the app's menu controller


                _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._register(_this);

                _context.next = 15;
                return Promise.resolve().then(__webpack_require__.bind(null,
                /*! ./index-c38df685.js */
                "./node_modules/@ionic/core/dist/esm/index-c38df685.js"));

              case 15:
                _context.t0 = {
                  el: document,
                  gestureName: 'menu-swipe',
                  gesturePriority: 30,
                  threshold: 10,
                  canStart: ev => _this.canStart(ev),
                  onWillStart: () => _this.onWillStart(),
                  onStart: () => _this.onStart(),
                  onMove: ev => _this.onMove(ev),
                  onEnd: ev => _this.onEnd(ev)
                };
                _this.gesture = _context.sent.createGesture(_context.t0);

                _this.updateState();

              case 18:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }

      componentDidLoad() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.ionMenuChange.emit({
                  disabled: _this2.disabled,
                  open: _this2._isOpen
                });

                _this2.updateState();

              case 2:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      disconnectedCallback() {
        this.blocker.destroy();

        _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._unregister(this);

        if (this.animation) {
          this.animation.destroy();
        }

        if (this.gesture) {
          this.gesture.destroy();
          this.gesture = undefined;
        }

        this.animation = undefined;
        this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
      }

      onSplitPaneChanged(ev) {
        this.isPaneVisible = ev.detail.isPane(this.el);
        this.updateState();
      }

      onBackdropClick(ev) {
        if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
          const shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

          if (shouldClose) {
            ev.preventDefault();
            ev.stopPropagation();
            this.close();
          }
        }
      }
      /**
       * Returns `true` is the menu is open.
       */


      isOpen() {
        return Promise.resolve(this._isOpen);
      }
      /**
       * Returns `true` is the menu is active.
       *
       * A menu is active when it can be opened or closed, meaning it's enabled
       * and it's not part of a `ion-split-pane`.
       */


      isActive() {
        return Promise.resolve(this._isActive());
      }
      /**
       * Opens the menu. If the menu is already open or it can't be opened,
       * it returns `false`.
       */


      open(animated = true) {
        return this.setOpen(true, animated);
      }
      /**
       * Closes the menu. If the menu is already closed or it can't be closed,
       * it returns `false`.
       */


      close(animated = true) {
        return this.setOpen(false, animated);
      }
      /**
       * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
       * If the operation can't be completed successfully, it returns `false`.
       */


      toggle(animated = true) {
        return this.setOpen(!this._isOpen, animated);
      }
      /**
       * Opens or closes the button.
       * If the operation can't be completed successfully, it returns `false`.
       */


      setOpen(shouldOpen, animated = true) {
        return _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._setOpen(this, shouldOpen, animated);
      }

      _setOpen(shouldOpen, animated = true) {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!(!_this3._isActive() || _this3.isAnimating || shouldOpen === _this3._isOpen)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", false);

              case 2:
                _this3.beforeAnimation(shouldOpen);

                _context3.next = 5;
                return _this3.loadAnimation();

              case 5:
                _context3.next = 7;
                return _this3.startAnimation(shouldOpen, animated);

              case 7:
                _this3.afterAnimation(shouldOpen);

                return _context3.abrupt("return", true);

              case 9:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }))();
      }

      loadAnimation() {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var width;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                // Menu swipe animation takes the menu's inner width as parameter,
                // If `offsetWidth` changes, we need to create a new animation.
                width = _this4.menuInnerEl.offsetWidth;

                if (!(width === _this4.width && _this4.animation !== undefined)) {
                  _context4.next = 3;
                  break;
                }

                return _context4.abrupt("return");

              case 3:
                _this4.width = width; // Destroy existing animation

                if (_this4.animation) {
                  _this4.animation.destroy();

                  _this4.animation = undefined;
                } // Create new animation


                _context4.next = 7;
                return _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._createAnimation(_this4.type, _this4);

              case 7:
                _this4.animation = _context4.sent;

                if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true)) {
                  _this4.animation.duration(0);
                }

                _this4.animation.fill('both');

              case 10:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }

      startAnimation(shouldOpen, animated) {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var isReversed, ani;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                isReversed = !shouldOpen;
                ani = _this5.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? _this5.easingReverse : _this5.easing).onFinish(() => {
                  if (ani.getDirection() === 'reverse') {
                    ani.direction('normal');
                  }
                });

                if (!animated) {
                  _context5.next = 7;
                  break;
                }

                _context5.next = 5;
                return ani.play();

              case 5:
                _context5.next = 8;
                break;

              case 7:
                ani.play({
                  sync: true
                });

              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }))();
      }

      _isActive() {
        return !this.disabled && !this.isPaneVisible;
      }

      canSwipe() {
        return this.swipeGesture && !this.isAnimating && this._isActive();
      }

      canStart(detail) {
        // Do not allow swipe gesture if a modal is open
        const isModalPresented = !!document.querySelector('ion-modal.show-modal');

        if (isModalPresented || !this.canSwipe()) {
          return false;
        }

        if (this._isOpen) {
          return true; // TODO error
        } else if (_index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._getOpenSync()) {
          return false;
        }

        return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
      }

      onWillStart() {
        this.beforeAnimation(!this._isOpen);
        return this.loadAnimation();
      }

      onStart() {
        if (!this.isAnimating || !this.animation) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
          return;
        } // the cloned animation should not use an easing curve during seek


        this.animation.progressStart(true, this._isOpen ? 1 : 0);
      }

      onMove(detail) {
        if (!this.isAnimating || !this.animation) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
          return;
        }

        const delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
        const stepValue = delta / this.width;
        this.animation.progressStep(this._isOpen ? 1 - stepValue : stepValue);
      }

      onEnd(detail) {
        if (!this.isAnimating || !this.animation) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
          return;
        }

        const isOpen = this._isOpen;
        const isEndSide = this.isEndSide;
        const delta = computeDelta(detail.deltaX, isOpen, isEndSide);
        const width = this.width;
        const stepValue = delta / width;
        const velocity = detail.velocityX;
        const z = width / 2.0;
        const shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
        const shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
        const shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
        let shouldOpen = !isOpen && shouldComplete;

        if (isOpen && !shouldComplete) {
          shouldOpen = true;
        }

        this.lastOnEnd = detail.currentTime; // Account for rounding errors in JS

        let newStepValue = shouldComplete ? 0.001 : -0.001;
        /**
         * TODO: stepValue can sometimes return a negative
         * value, but you can't have a negative time value
         * for the cubic bezier curve (at least with web animations)
         * Not sure if the negative step value is an error or not
         */

        const adjustedStepValue = stepValue < 0 ? 0.01 : stepValue;
        /**
         * Animation will be reversed here, so need to
         * reverse the easing curve as well
         *
         * Additionally, we need to account for the time relative
         * to the new easing curve, as `stepValue` is going to be given
         * in terms of a linear curve.
         */

        newStepValue += Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_4__["g"])([0, 0], [0.4, 0], [0.6, 1], [1, 1], Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, adjustedStepValue, 0.9999))[0] || 0;
        const playTo = this._isOpen ? !shouldComplete : shouldComplete;
        this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(() => this.afterAnimation(shouldOpen), {
          oneTimeCallback: true
        }).progressEnd(playTo ? 1 : 0, this._isOpen ? 1 - newStepValue : newStepValue, 300);
      }

      beforeAnimation(shouldOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
        // this css class doesn't actually kick off any animations

        this.el.classList.add(SHOW_MENU);

        if (this.backdropEl) {
          this.backdropEl.classList.add(SHOW_BACKDROP);
        }

        this.blocker.block();
        this.isAnimating = true;

        if (shouldOpen) {
          this.ionWillOpen.emit();
        } else {
          this.ionWillClose.emit();
        }
      }

      afterAnimation(isOpen) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
        // only add listeners/css if it's enabled and isOpen
        // and only remove listeners/css if it's not open
        // emit opened/closed events

        this._isOpen = isOpen;
        this.isAnimating = false;

        if (!this._isOpen) {
          this.blocker.unblock();
        }

        if (isOpen) {
          // add css class
          if (this.contentEl) {
            this.contentEl.classList.add(MENU_CONTENT_OPEN);
          } // emit open event


          this.ionDidOpen.emit();
        } else {
          // remove css classes
          this.el.classList.remove(SHOW_MENU);

          if (this.contentEl) {
            this.contentEl.classList.remove(MENU_CONTENT_OPEN);
          }

          if (this.backdropEl) {
            this.backdropEl.classList.remove(SHOW_BACKDROP);
          }

          if (this.animation) {
            this.animation.stop();
          } // emit close event


          this.ionDidClose.emit();
        }
      }

      updateState() {
        const isActive = this._isActive();

        if (this.gesture) {
          this.gesture.enable(isActive && this.swipeGesture);
        } // Close menu immediately


        if (!isActive && this._isOpen) {
          // close if this menu is open, and should not be enabled
          this.forceClosing();
        }

        if (!this.disabled) {
          _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"]._setActiveMenu(this);
        }

        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, 'can not be animating');
      }

      forceClosing() {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this._isOpen, 'menu cannot be closed');
        this.isAnimating = true;
        const ani = this.animation.direction('reverse');
        ani.play({
          sync: true
        });
        this.afterAnimation(false);
      }

      render() {
        const isEndSide = this.isEndSide,
              type = this.type,
              disabled = this.disabled,
              mode = this.mode,
              isPaneVisible = this.isPaneVisible;
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          role: "navigation",
          class: {
            [mode]: true,
            ["menu-type-".concat(type)]: true,
            'menu-enabled': !disabled,
            'menu-side-end': isEndSide,
            'menu-side-start': !isEndSide,
            'menu-pane-visible': isPaneVisible
          }
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          class: "menu-inner",
          ref: el => this.menuInnerEl = el
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
          ref: el => this.backdropEl = el,
          class: "menu-backdrop",
          tappable: false,
          stopPropagation: false
        }));
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "type": ["typeChanged"],
          "disabled": ["disabledChanged"],
          "side": ["sideChanged"],
          "swipeGesture": ["swipeGestureChanged"]
        };
      }

      static get style() {
        return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}";
      }

    };

    const computeDelta = (deltaX, isOpen, isEndSide) => {
      return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
    };

    const checkEdgeSide = (win, posX, isEndSide, maxEdgeStart) => {
      if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
      } else {
        return posX <= maxEdgeStart;
      }
    };

    const SHOW_MENU = 'show-menu';
    const SHOW_BACKDROP = 'show-backdrop';
    const MENU_CONTENT_OPEN = 'menu-content-open'; // Given a menu, return whether or not the menu toggle should be visible

    const updateVisibility = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(menu) {
        var menuEl;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"].get(menu);

            case 2:
              menuEl = _context6.sent;
              _context6.t0 = menuEl;

              if (!_context6.t0) {
                _context6.next = 8;
                break;
              }

              _context6.next = 7;
              return menuEl.isActive();

            case 7:
              _context6.t0 = _context6.sent;

            case 8:
              return _context6.abrupt("return", !!_context6.t0);

            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));

      return function updateVisibility(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    const MenuButton = class {
      constructor(hostRef) {
        var _this6 = this;

        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */

        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */

        this.autoHide = true;
        /**
         * The type of the button.
         */

        this.type = 'button';
        this.onClick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"].toggle(_this6.menu));

              case 1:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
      }

      componentDidLoad() {
        this.visibilityChanged();
      }

      visibilityChanged() {
        var _this7 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return updateVisibility(_this7.menu);

              case 2:
                _this7.visible = _context8.sent;

              case 3:
              case "end":
                return _context8.stop();
            }
          }, _callee8);
        }))();
      }

      render() {
        const color = this.color,
              disabled = this.disabled;
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);

        const menuIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuIcon', mode === 'ios' ? 'menu-outline' : 'menu-sharp');

        const hidden = this.autoHide && !this.visible;
        const attrs = {
          type: this.type
        };
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          "aria-disabled": disabled ? 'true' : null,
          "aria-hidden": hidden ? 'true' : null,
          class: Object.assign(Object.assign({
            [mode]: true
          }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["c"])(color)), {
            'button': true,
            'menu-button-hidden': hidden,
            'menu-button-disabled': disabled,
            'in-toolbar': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["h"])('ion-toolbar', this.el),
            'in-toolbar-color': Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["h"])('ion-toolbar[color]', this.el),
            'ion-activatable': true,
            'ion-focusable': true
          })
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, {
          disabled: disabled,
          class: "button-native"
        }), Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
          class: "button-inner"
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
          icon: menuIcon,
          mode: mode,
          lazy: false
        }))), mode === 'md' && Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
          type: "unbounded"
        })));
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get style() {
        return ":host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:\"\";opacity:0}\@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:.4}\@media (any-hover:hover){:host(:hover){opacity:.6}}";
      }

    };
    const MenuToggle = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */

        this.autoHide = true;

        this.onClick = () => {
          return _index_c58c7441_js__WEBPACK_IMPORTED_MODULE_7__["m"].toggle(this.menu);
        };
      }

      connectedCallback() {
        this.visibilityChanged();
      }

      visibilityChanged() {
        var _this8 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return updateVisibility(_this8.menu);

              case 2:
                _this8.visible = _context9.sent;

              case 3:
              case "end":
                return _context9.stop();
            }
          }, _callee9);
        }))();
      }

      render() {
        const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        const hidden = this.autoHide && !this.visible;
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick,
          "aria-hidden": hidden ? 'true' : null,
          class: {
            [mode]: true,
            'menu-toggle-hidden': hidden
          }
        }, Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
      }

      static get style() {
        return ":host(.menu-toggle-hidden){display:none}";
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=36-es5.js.map