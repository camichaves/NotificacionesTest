function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_nav, ion_nav_link */

  /***/
  function node_modulesIonicCoreDistEsmIonNav_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav", function () {
      return Nav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_nav_link", function () {
      return NavLink;
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


    var _cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cubic-bezier-1d592096.js */
    "./node_modules/@ionic/core/dist/esm/cubic-bezier-1d592096.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");
    /* harmony import */


    var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./framework-delegate-c2e2e1f4.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");
    /* harmony import */


    var _index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index-4e2fa3c6.js */
    "./node_modules/@ionic/core/dist/esm/index-4e2fa3c6.js");

    const VIEW_STATE_NEW = 1;
    const VIEW_STATE_ATTACHED = 2;
    const VIEW_STATE_DESTROYED = 3;

    class ViewController {
      constructor(component, params) {
        this.component = component;
        this.params = params;
        this.state = VIEW_STATE_NEW;
      }

      init(container) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var component;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _this.state = VIEW_STATE_ATTACHED;

                if (_this.element) {
                  _context.next = 6;
                  break;
                }

                component = _this.component;
                _context.next = 5;
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_5__["a"])(_this.delegate, container, component, ['ion-page', 'ion-page-invisible'], _this.params);

              case 5:
                _this.element = _context.sent;

              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
      /**
       * DOM WRITE
       */


      _destroy() {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.state !== VIEW_STATE_DESTROYED, 'view state must be ATTACHED');
        const element = this.element;

        if (element) {
          if (this.delegate) {
            this.delegate.removeViewFromDom(element.parentElement, element);
          } else {
            element.remove();
          }
        }

        this.nav = undefined;
        this.state = VIEW_STATE_DESTROYED;
      }

    }

    const matches = (view, id, params) => {
      if (!view) {
        return false;
      }

      if (view.component !== id) {
        return false;
      }

      const currentParams = view.params;

      if (currentParams === params) {
        return true;
      }

      if (!currentParams && !params) {
        return true;
      }

      if (!currentParams || !params) {
        return false;
      }

      const keysA = Object.keys(currentParams);
      const keysB = Object.keys(params);

      if (keysA.length !== keysB.length) {
        return false;
      } // Test for A's keys different from B.


      for (var _i = 0, _keysA = keysA; _i < _keysA.length; _i++) {
        const key = _keysA[_i];

        if (currentParams[key] !== params[key]) {
          return false;
        }
      }

      return true;
    };

    const convertToView = (page, params) => {
      if (!page) {
        return null;
      }

      if (page instanceof ViewController) {
        return page;
      }

      return new ViewController(page, params);
    };

    const convertToViews = pages => {
      return pages.map(page => {
        if (page instanceof ViewController) {
          return page;
        }

        if ('page' in page) {
          return convertToView(page.page, page.params);
        }

        return convertToView(page, undefined);
      }).filter(v => v !== null);
    };

    const Nav = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transInstr = [];
        this.animationEnabled = true;
        this.useRouter = false;
        this.isTransitioning = false;
        this.destroyed = false;
        this.views = [];
        /**
         * If `true`, the nav should animate the transition of components.
         */

        this.animated = true;
        this.ionNavWillLoad = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavWillLoad", 7);
        this.ionNavWillChange = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavWillChange", 3);
        this.ionNavDidChange = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavDidChange", 3);
      }

      swipeGestureChanged() {
        if (this.gesture) {
          this.gesture.enable(this.swipeGesture === true);
        }
      }

      rootChanged() {
        if (this.root !== undefined) {
          if (!this.useRouter) {
            this.setRoot(this.root, this.rootParams);
          }
        }
      }

      componentWillLoad() {
        this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');

        if (this.swipeGesture === undefined) {
          const mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          this.swipeGesture = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('swipeBackEnabled', mode === 'ios');
        }

        this.ionNavWillLoad.emit();
      }

      componentDidLoad() {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _this2.rootChanged();

                _context2.next = 3;
                return __webpack_require__.e(
                /*! import() | swipe-back-d2cdbf9a-js */
                "swipe-back-d2cdbf9a-js").then(__webpack_require__.bind(null,
                /*! ./swipe-back-d2cdbf9a.js */
                "./node_modules/@ionic/core/dist/esm/swipe-back-d2cdbf9a.js"));

              case 3:
                _context2.t0 = _this2.el;
                _context2.t1 = _this2.canStart.bind(_this2);
                _context2.t2 = _this2.onStart.bind(_this2);
                _context2.t3 = _this2.onMove.bind(_this2);
                _context2.t4 = _this2.onEnd.bind(_this2);
                _this2.gesture = _context2.sent.createSwipeBackGesture(_context2.t0, _context2.t1, _context2.t2, _context2.t3, _context2.t4);

                _this2.swipeGestureChanged();

              case 10:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }))();
      }

      componentDidUnload() {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.views[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            const view = _step.value;
            Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);

            view._destroy();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (this.gesture) {
          this.gesture.destroy();
          this.gesture = undefined;
        } // release swipe back gesture and transition


        this.transInstr.length = this.views.length = 0;
        this.destroyed = true;
      }
      /**
       * Push a new component onto the current navigation stack. Pass any additional
       * information along as an object. This additional information is accessible
       * through NavParams.
       *
       * @param component The component to push onto the navigation stack.
       * @param componentProps Any properties of the component.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      push(component, componentProps, opts, done) {
        return this.queueTrns({
          insertStart: -1,
          insertViews: [{
            page: component,
            params: componentProps
          }],
          opts
        }, done);
      }
      /**
       * Inserts a component into the navigation stack at the specified index.
       * This is useful to add a component at any point in the navigation stack.
       *
       * @param insertIndex The index to insert the component at in the stack.
       * @param component The component to insert into the navigation stack.
       * @param componentProps Any properties of the component.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      insert(insertIndex, component, componentProps, opts, done) {
        return this.queueTrns({
          insertStart: insertIndex,
          insertViews: [{
            page: component,
            params: componentProps
          }],
          opts
        }, done);
      }
      /**
       * Inserts an array of components into the navigation stack at the specified index.
       * The last component in the array will become instantiated as a view, and animate
       * in to become the active view.
       *
       * @param insertIndex The index to insert the components at in the stack.
       * @param insertComponents The components to insert into the navigation stack.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      insertPages(insertIndex, insertComponents, opts, done) {
        return this.queueTrns({
          insertStart: insertIndex,
          insertViews: insertComponents,
          opts
        }, done);
      }
      /**
       * Pop a component off of the navigation stack. Navigates back from the current
       * component.
       *
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      pop(opts, done) {
        return this.queueTrns({
          removeStart: -1,
          removeCount: 1,
          opts
        }, done);
      }
      /**
       * Pop to a specific index in the navigation stack.
       *
       * @param indexOrViewCtrl The index or view controller to pop to.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      popTo(indexOrViewCtrl, opts, done) {
        const tiConfig = {
          removeStart: -1,
          removeCount: -1,
          opts
        };

        if (typeof indexOrViewCtrl === 'object' && indexOrViewCtrl.component) {
          tiConfig.removeView = indexOrViewCtrl;
          tiConfig.removeStart = 1;
        } else if (typeof indexOrViewCtrl === 'number') {
          tiConfig.removeStart = indexOrViewCtrl + 1;
        }

        return this.queueTrns(tiConfig, done);
      }
      /**
       * Navigate back to the root of the stack, no matter how far back that is.
       *
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      popToRoot(opts, done) {
        return this.queueTrns({
          removeStart: 1,
          removeCount: -1,
          opts
        }, done);
      }
      /**
       * Removes a component from the navigation stack at the specified index.
       *
       * @param startIndex The number to begin removal at.
       * @param removeCount The number of components to remove.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      removeIndex(startIndex, removeCount = 1, opts, done) {
        return this.queueTrns({
          removeStart: startIndex,
          removeCount,
          opts
        }, done);
      }
      /**
       * Set the root for the current navigation stack to a component.
       *
       * @param component The component to set as the root of the navigation stack.
       * @param componentProps Any properties of the component.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      setRoot(component, componentProps, opts, done) {
        return this.setPages([{
          page: component,
          params: componentProps
        }], opts, done);
      }
      /**
       * Set the views of the current navigation stack and navigate to the last view.
       * By default animations are disabled, but they can be enabled by passing options
       * to the navigation controller. Navigation parameters can also be passed to the
       * individual pages in the array.
       *
       * @param views The list of views to set as the navigation stack.
       * @param opts The navigation options.
       * @param done The transition complete function.
       */


      setPages(views, opts, done) {
        if (opts == null) {
          opts = {};
        } // if animation wasn't set to true then default it to NOT animate


        if (opts.animated !== true) {
          opts.animated = false;
        }

        return this.queueTrns({
          insertStart: 0,
          insertViews: views,
          removeStart: 0,
          removeCount: -1,
          opts
        }, done);
      }
      /** @internal */


      setRouteId(id, params, direction) {
        const active = this.getActiveSync();

        if (matches(active, id, params)) {
          return Promise.resolve({
            changed: false,
            element: active.element
          });
        }

        let resolve;
        const promise = new Promise(r => resolve = r);
        let finish;
        const commonOpts = {
          updateURL: false,
          viewIsReady: enteringEl => {
            let mark;
            const p = new Promise(r => mark = r);
            resolve({
              changed: true,
              element: enteringEl,
              markVisible: function () {
                var _markVisible = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        mark();
                        _context3.next = 3;
                        return finish;

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));

                function markVisible() {
                  return _markVisible.apply(this, arguments);
                }

                return markVisible;
              }()
            });
            return p;
          }
        };

        if (direction === 'root') {
          finish = this.setRoot(id, params, commonOpts);
        } else {
          const viewController = this.views.find(v => matches(v, id, params));

          if (viewController) {
            finish = this.popTo(viewController, Object.assign(Object.assign({}, commonOpts), {
              direction: 'back'
            }));
          } else if (direction === 'forward') {
            finish = this.push(id, params, commonOpts);
          } else if (direction === 'back') {
            finish = this.setRoot(id, params, Object.assign(Object.assign({}, commonOpts), {
              direction: 'back',
              animated: true
            }));
          }
        }

        return promise;
      }
      /** @internal */


      getRouteId() {
        var _this3 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
          var active;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                active = _this3.getActiveSync();
                return _context4.abrupt("return", active ? {
                  id: active.element.tagName,
                  params: active.params,
                  element: active.element
                } : undefined);

              case 2:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }))();
      }
      /**
       * Get the active view.
       */


      getActive() {
        return Promise.resolve(this.getActiveSync());
      }
      /**
       * Get the view at the specified index.
       *
       * @param index The index of the view.
       */


      getByIndex(index) {
        return Promise.resolve(this.views[index]);
      }
      /**
       * Returns `true` if the current view can go back.
       *
       * @param view The view to check.
       */


      canGoBack(view) {
        return Promise.resolve(this.canGoBackSync(view));
      }
      /**
       * Get the previous view.
       *
       * @param view The view to get.
       */


      getPrevious(view) {
        return Promise.resolve(this.getPreviousSync(view));
      }

      getLength() {
        return this.views.length;
      }

      getActiveSync() {
        return this.views[this.views.length - 1];
      }

      canGoBackSync(view = this.getActiveSync()) {
        return !!(view && this.getPreviousSync(view));
      }

      getPreviousSync(view = this.getActiveSync()) {
        if (!view) {
          return undefined;
        }

        const views = this.views;
        const index = views.indexOf(view);
        return index > 0 ? views[index - 1] : undefined;
      } // _queueTrns() adds a navigation stack change to the queue and schedules it to run:
      // 1. _nextTrns(): consumes the next transition in the queue
      // 2. _viewInit(): initializes enteringView if required
      // 3. _viewTest(): ensures canLeave/canEnter Returns `true`, so the operation can continue
      // 4. _postViewInit(): add/remove the views from the navigation stack
      // 5. _transitionInit(): initializes the visual transition if required and schedules it to run
      // 6. _viewAttachToDOM(): attaches the enteringView to the DOM
      // 7. _transitionStart(): called once the transition actually starts, it initializes the Animation underneath.
      // 8. _transitionFinish(): called once the transition finishes
      // 9. _cleanup(): syncs the navigation internal state with the DOM. For example it removes the pages from the DOM or hides/show them.


      queueTrns(ti, done) {
        if (this.isTransitioning && ti.opts != null && ti.opts.skipIfBusy) {
          return Promise.resolve(false);
        }

        const promise = new Promise((resolve, reject) => {
          ti.resolve = resolve;
          ti.reject = reject;
        });
        ti.done = done; // Normalize empty

        if (ti.insertViews && ti.insertViews.length === 0) {
          ti.insertViews = undefined;
        } // Enqueue transition instruction


        this.transInstr.push(ti); // if there isn't a transition already happening
        // then this will kick off this transition

        this.nextTrns();
        return promise;
      }

      success(result, ti) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', ti);
          return;
        }

        if (ti.done) {
          ti.done(result.hasCompleted, result.requiresTransition, result.enteringView, result.leavingView, result.direction);
        }

        ti.resolve(result.hasCompleted);

        if (ti.opts.updateURL !== false && this.useRouter) {
          const router = document.querySelector('ion-router');

          if (router) {
            const direction = result.direction === 'back' ? 'back' : 'forward';
            router.navChanged(direction);
          }
        }
      }

      failed(rejectReason, ti) {
        if (this.destroyed) {
          this.fireError('nav controller was destroyed', ti);
          return;
        }

        this.transInstr.length = 0;
        this.fireError(rejectReason, ti);
      }

      fireError(rejectReason, ti) {
        if (ti.done) {
          ti.done(false, false, rejectReason);
        }

        if (ti.reject && !this.destroyed) {
          ti.reject(rejectReason);
        } else {
          ti.resolve(false);
        }
      }

      nextTrns() {
        // this is the framework's bread 'n butta function
        // only one transition is allowed at any given time
        if (this.isTransitioning) {
          return false;
        } // there is no transition happening right now
        // get the next instruction


        const ti = this.transInstr.shift();

        if (!ti) {
          return false;
        }

        this.runTransition(ti);
        return true;
      }

      runTransition(ti) {
        var _this4 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
          var leavingView, enteringView, requiresTransition, result;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;

                // set that this nav is actively transitioning
                _this4.ionNavWillChange.emit();

                _this4.isTransitioning = true;

                _this4.prepareTI(ti);

                leavingView = _this4.getActiveSync();
                enteringView = _this4.getEnteringView(ti, leavingView);

                if (!(!leavingView && !enteringView)) {
                  _context5.next = 8;
                  break;
                }

                throw new Error('no views in the stack to be removed');

              case 8:
                if (!(enteringView && enteringView.state === VIEW_STATE_NEW)) {
                  _context5.next = 11;
                  break;
                }

                _context5.next = 11;
                return enteringView.init(_this4.el);

              case 11:
                _this4.postViewInit(enteringView, leavingView, ti); // Needs transition?


                requiresTransition = (ti.enteringRequiresTransition || ti.leavingRequiresTransition) && enteringView !== leavingView;

                if (!requiresTransition) {
                  _context5.next = 19;
                  break;
                }

                _context5.next = 16;
                return _this4.transition(enteringView, leavingView, ti);

              case 16:
                _context5.t0 = _context5.sent;
                _context5.next = 20;
                break;

              case 19:
                _context5.t0 = {
                  // transition is not required, so we are already done!
                  // they're inserting/removing the views somewhere in the middle or
                  // beginning, so visually nothing needs to animate/transition
                  // resolve immediately because there's no animation that's happening
                  hasCompleted: true,
                  requiresTransition: false
                };

              case 20:
                result = _context5.t0;

                _this4.success(result, ti);

                _this4.ionNavDidChange.emit();

                _context5.next = 28;
                break;

              case 25:
                _context5.prev = 25;
                _context5.t1 = _context5["catch"](0);

                _this4.failed(_context5.t1, ti);

              case 28:
                _this4.isTransitioning = false;

                _this4.nextTrns();

              case 30:
              case "end":
                return _context5.stop();
            }
          }, _callee5, null, [[0, 25]]);
        }))();
      }

      prepareTI(ti) {
        const viewsLength = this.views.length;
        ti.opts = ti.opts || {};

        if (ti.opts.delegate === undefined) {
          ti.opts.delegate = this.delegate;
        }

        if (ti.removeView !== undefined) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeStart !== undefined, 'removeView needs removeStart');
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.removeCount !== undefined, 'removeView needs removeCount');
          const index = this.views.indexOf(ti.removeView);

          if (index < 0) {
            throw new Error('removeView was not found');
          }

          ti.removeStart += index;
        }

        if (ti.removeStart !== undefined) {
          if (ti.removeStart < 0) {
            ti.removeStart = viewsLength - 1;
          }

          if (ti.removeCount < 0) {
            ti.removeCount = viewsLength - ti.removeStart;
          }

          ti.leavingRequiresTransition = ti.removeCount > 0 && ti.removeStart + ti.removeCount === viewsLength;
        }

        if (ti.insertViews) {
          // allow -1 to be passed in to auto push it on the end
          // and clean up the index if it's larger then the size of the stack
          if (ti.insertStart < 0 || ti.insertStart > viewsLength) {
            ti.insertStart = viewsLength;
          }

          ti.enteringRequiresTransition = ti.insertStart === viewsLength;
        }

        const insertViews = ti.insertViews;

        if (!insertViews) {
          return;
        }

        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(insertViews.length > 0, 'length can not be zero');
        const viewControllers = convertToViews(insertViews);

        if (viewControllers.length === 0) {
          throw new Error('invalid views to insert');
        } // Check all the inserted view are correct


        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = viewControllers[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            const view = _step2.value;
            view.delegate = ti.opts.delegate;
            const nav = view.nav;

            if (nav && nav !== this) {
              throw new Error('inserted view was already inserted');
            }

            if (view.state === VIEW_STATE_DESTROYED) {
              throw new Error('inserted view was already destroyed');
            }
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        ti.insertViews = viewControllers;
      }

      getEnteringView(ti, leavingView) {
        const insertViews = ti.insertViews;

        if (insertViews !== undefined) {
          // grab the very last view of the views to be inserted
          // and initialize it as the new entering view
          return insertViews[insertViews.length - 1];
        }

        const removeStart = ti.removeStart;

        if (removeStart !== undefined) {
          const views = this.views;
          const removeEnd = removeStart + ti.removeCount;

          for (let i = views.length - 1; i >= 0; i--) {
            const view = views[i];

            if ((i < removeStart || i >= removeEnd) && view !== leavingView) {
              return view;
            }
          }
        }

        return undefined;
      }

      postViewInit(enteringView, leavingView, ti) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(leavingView || enteringView, 'Both leavingView and enteringView are null');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.resolve, 'resolve must be valid');
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(ti.reject, 'reject must be valid');
        const opts = ti.opts;
        const insertViews = ti.insertViews;
        const removeStart = ti.removeStart;
        const removeCount = ti.removeCount;
        let destroyQueue; // there are views to remove

        if (removeStart !== undefined && removeCount !== undefined) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeStart >= 0, 'removeStart can not be negative');
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(removeCount >= 0, 'removeCount can not be negative');
          destroyQueue = [];

          for (let i = 0; i < removeCount; i++) {
            const view = this.views[i + removeStart];

            if (view && view !== enteringView && view !== leavingView) {
              destroyQueue.push(view);
            }
          } // default the direction to "back"


          opts.direction = opts.direction || 'back';
        }

        const finalBalance = this.views.length + (insertViews !== undefined ? insertViews.length : 0) - (removeCount !== undefined ? removeCount : 0);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(finalBalance >= 0, 'final balance can not be negative');

        if (finalBalance === 0) {
          console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.", this, this.el);
          throw new Error('navigation stack needs at least one root page');
        } // At this point the transition can not be rejected, any throw should be an error
        // there are views to insert


        if (insertViews) {
          // add the views to the
          let insertIndex = ti.insertStart;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = insertViews[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              const view = _step3.value;
              this.insertViewAt(view, insertIndex);
              insertIndex++;
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (ti.enteringRequiresTransition) {
            // default to forward if not already set
            opts.direction = opts.direction || 'forward';
          }
        } // if the views to be removed are in the beginning or middle
        // and there is not a view that needs to visually transition out
        // then just destroy them and don't transition anything
        // batch all of lifecycles together
        // let's make sure, callbacks are zoned


        if (destroyQueue && destroyQueue.length > 0) {
          var _iteratorNormalCompletion4 = true;
          var _didIteratorError4 = false;
          var _iteratorError4 = undefined;

          try {
            for (var _iterator4 = destroyQueue[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
              const view = _step4.value;
              Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["b"]);
              Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["c"]);
              Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["l"])(view.element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
            } // once all lifecycle events has been delivered, we can safely detroy the views

          } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                _iterator4.return();
              }
            } finally {
              if (_didIteratorError4) {
                throw _iteratorError4;
              }
            }
          }

          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = destroyQueue[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              const view = _step5.value;
              this.destroyView(view);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }

      transition(enteringView, leavingView, ti) {
        var _this5 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var opts, progressCallback, mode, enteringEl, leavingEl, animationOpts, _ref, hasCompleted;

          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                // we should animate (duration > 0) if the pushed page is not the first one (startup)
                // or if it is a portal (modal, actionsheet, etc.)
                opts = ti.opts;
                progressCallback = opts.progressAnimation ? ani => _this5.sbAni = ani : undefined;
                mode = Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["c"])(_this5);
                enteringEl = enteringView.element;
                leavingEl = leavingView && leavingView.element;
                animationOpts = Object.assign({
                  mode,
                  showGoBack: _this5.canGoBackSync(enteringView),
                  baseEl: _this5.el,
                  animationBuilder: _this5.animation || opts.animationBuilder || _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('navAnimation'),
                  progressCallback,
                  animated: _this5.animated && _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true),
                  enteringEl,
                  leavingEl
                }, opts);
                _context6.next = 8;
                return Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["t"])(animationOpts);

              case 8:
                _ref = _context6.sent;
                hasCompleted = _ref.hasCompleted;
                return _context6.abrupt("return", _this5.transitionFinish(hasCompleted, enteringView, leavingView, opts));

              case 11:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }))();
      }

      transitionFinish(hasCompleted, enteringView, leavingView, opts) {
        const cleanupView = hasCompleted ? enteringView : leavingView;

        if (cleanupView) {
          this.cleanup(cleanupView);
        }

        return {
          hasCompleted,
          requiresTransition: true,
          enteringView,
          leavingView,
          direction: opts.direction
        };
      }

      insertViewAt(view, index) {
        const views = this.views;
        const existingIndex = views.indexOf(view);

        if (existingIndex > -1) {
          // this view is already in the stack!!
          // move it to its new location
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.nav === this, 'view is not part of the nav');
          views.splice(index, 0, views.splice(existingIndex, 1)[0]);
        } else {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!view.nav, 'nav is used'); // this is a new view to add to the stack
          // create the new entering view

          view.nav = this; // insert the entering view into the correct index in the stack

          views.splice(index, 0, view);
        }
      }

      removeView(view) {
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(view.state === VIEW_STATE_ATTACHED || view.state === VIEW_STATE_DESTROYED, 'view state should be loaded or destroyed');
        const views = this.views;
        const index = views.indexOf(view);
        Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(index > -1, 'view must be part of the stack');

        if (index >= 0) {
          views.splice(index, 1);
        }
      }

      destroyView(view) {
        view._destroy();

        this.removeView(view);
      }
      /**
       * DOM WRITE
       */


      cleanup(activeView) {
        // ok, cleanup time!! Destroy all of the views that are
        // INACTIVE and come after the active view
        // only do this if the views exist, though
        if (this.destroyed) {
          return;
        }

        const views = this.views;
        const activeViewIndex = views.indexOf(activeView);

        for (let i = views.length - 1; i >= 0; i--) {
          const view = views[i];
          const element = view.element;

          if (i > activeViewIndex) {
            // this view comes after the active view
            // let's unload it
            Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["l"])(element, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_4__["d"]);
            this.destroyView(view);
          } else if (i < activeViewIndex) {
            // this view comes before the active view
            // and it is not a portal then ensure it is hidden
            Object(_index_4e2fa3c6_js__WEBPACK_IMPORTED_MODULE_6__["s"])(element, true);
          }
        }
      }

      canStart() {
        return !!this.swipeGesture && !this.isTransitioning && this.transInstr.length === 0 && this.animationEnabled && this.canGoBackSync();
      }

      onStart() {
        this.queueTrns({
          removeStart: -1,
          removeCount: 1,
          opts: {
            direction: 'back',
            progressAnimation: true
          }
        }, undefined);
      }

      onMove(stepValue) {
        if (this.sbAni) {
          this.sbAni.progressStep(stepValue);
        }
      }

      onEnd(shouldComplete, stepValue, dur) {
        if (this.sbAni) {
          this.animationEnabled = false;
          this.sbAni.onFinish(() => {
            this.animationEnabled = true;
          }, {
            oneTimeCallback: true
          }); // Account for rounding errors in JS

          let newStepValue = shouldComplete ? -0.001 : 0.001;
          /**
           * Animation will be reversed here, so need to
           * reverse the easing curve as well
           *
           * Additionally, we need to account for the time relative
           * to the new easing curve, as `stepValue` is going to be given
           * in terms of a linear curve.
           */

          if (!shouldComplete) {
            this.sbAni.easing('cubic-bezier(1, 0, 0.68, 0.28)');
            newStepValue += Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_3__["g"])([0, 0], [1, 0], [0.68, 0.28], [1, 1], stepValue)[0];
          } else {
            newStepValue += Object(_cubic_bezier_1d592096_js__WEBPACK_IMPORTED_MODULE_3__["g"])([0, 0], [0.32, 0.72], [0, 1], [1, 1], stepValue)[0];
          }

          this.sbAni.progressEnd(shouldComplete ? 1 : 0, newStepValue, dur);
        }
      }

      render() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null);
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

      static get watchers() {
        return {
          "swipeGesture": ["swipeGestureChanged"],
          "root": ["rootChanged"]
        };
      }

      static get style() {
        return ":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";
      }

    };

    const navLink = (el, routerDirection, component, componentProps) => {
      const nav = el.closest('ion-nav');

      if (nav) {
        if (routerDirection === 'forward') {
          if (component !== undefined) {
            return nav.push(component, componentProps, {
              skipIfBusy: true
            });
          }
        } else if (routerDirection === 'root') {
          if (component !== undefined) {
            return nav.setRoot(component, componentProps, {
              skipIfBusy: true
            });
          }
        } else if (routerDirection === 'back') {
          return nav.pop({
            skipIfBusy: true
          });
        }
      }

      return Promise.resolve(false);
    };

    const NavLink = class {
      constructor(hostRef) {
        Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * The transition direction when navigating to another page.
         */

        this.routerDirection = 'forward';

        this.onClick = () => {
          return navLink(this.el, this.routerDirection, this.component, this.componentProps);
        };
      }

      render() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
          onClick: this.onClick
        });
      }

      get el() {
        return Object(_core_0a8d4d2e_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
      }

    };
    /***/
  }
}]);
//# sourceMappingURL=40-es5.js.map