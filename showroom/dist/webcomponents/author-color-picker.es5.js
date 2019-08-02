// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.0.7 available at github.com/author-elements/color-picker
// Last Build: 8/2/2019, 12:20:06 PM
var AuthorColorPickerElement = (function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  if (!window.hasOwnProperty('AuthorBaseElement')) {
    console.error('[ERROR] <author-color-picker> Required dependency "AuthorBaseElement" not found.');
    console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
  }

  (function () {
    var missingDependencies = Array.from(new Set([])).filter(function (dep) {
      return !customElements.get(dep);
    });

    if (missingDependencies.length > 0) {
      console.error("[ERROR] <author-color-picker> Required dependenc".concat(missingDependencies.length !== 1 ? 'ies' : 'y', " not found: ").concat(missingDependencies.map(function (d) {
        return "<".concat(d, ">");
      }).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])));
      missingDependencies.forEach(function (dep, i) {
        return console.info("".concat(i + 1, ". <").concat(dep, "> is available at ").concat('https://github.com/author-elements/color-picker'.replace('color-picker', dep.replace('author-', ''))));
      });
    }
  })();

  var AuthorColorPickerElement =
  /*#__PURE__*/
  function (_AuthorBaseElement) {
    _inherits(AuthorColorPickerElement, _AuthorBaseElement);

    function AuthorColorPickerElement() {
      var _this;

      _classCallCheck(this, AuthorColorPickerElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorColorPickerElement).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column}:host *,:host :after,:host :before{box-sizing:border-box}:host .wrapper{position:relative;flex:1;display:flex;flex-direction:column}:host .canvas-wrapper{flex:1;display:flex;flex-direction:column}:host canvas{flex:1;display:block;width:100%;height:100%}:host ::slotted(*){position:absolute;z-index:1}author-color-picker{contain:content;display:flex;flex-direction:column}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker .wrapper{position:relative;flex:1;display:flex;flex-direction:column}author-color-picker .canvas-wrapper{flex:1;display:flex;flex-direction:column}author-color-picker canvas{flex:1;display:block;width:100%;height:100%}author-color-picker *{position:absolute;z-index:1}</style><div class=\"wrapper\"><slot></slot><div class=\"canvas-wrapper\"><canvas></canvas></div></div></template>"));

      _this.UTIL.defineProperties({
        hue: {
          private: true,
          default: 0
        },
        saturation: {
          private: true,
          default: 0
        },
        value: {
          private: true,
          default: 100
        },
        alpha: {
          private: true,
          default: 100
        },
        canvas: {
          private: true,
          readonly: true,
          get: function get() {
            return _this.shadowRoot.querySelector('canvas');
          }
        },
        context: {
          private: true,
          readonly: true,
          get: function get() {
            return _this.PRIVATE.canvas.getContext('2d');
          }
        },
        position: {
          private: true,
          default: {
            x: 0,
            y: 0
          }
        },
        dimensions: {
          private: true,
          readonly: true,
          get: function get() {
            return _this.PRIVATE.canvas.getBoundingClientRect();
          }
        },
        initialWidth: {
          private: true,
          default: 236
        },
        initialHeight: {
          private: true,
          default: 118
        }
      });

      _this.UTIL.definePrivateMethods({
        draw: function draw() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.dimensions.width;
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.PRIVATE.dimensions.height;
          var hue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.PRIVATE.hue;
          var _this$PRIVATE = _this.PRIVATE,
              canvas = _this$PRIVATE.canvas,
              context = _this$PRIVATE.context,
              HSVToRGB = _this$PRIVATE.HSVToRGB;
          canvas.width = width;
          canvas.height = height;
          var rgb = HSVToRGB(hue, 100, 100);
          context.clearRect(0, 0, width, height);
          context.fillStyle = "rgba(".concat(rgb[0], ", ").concat(rgb[1], ", ").concat(rgb[2], ", 1)");
          context.fillRect(0, 0, width, height);
          var gradient = {
            x: context.createLinearGradient(0, 0, width, 0),
            y: context.createLinearGradient(0, 0, 0, height)
          };
          gradient.x.addColorStop(0, 'rgba(255, 255, 255, 1)');
          gradient.x.addColorStop(1, 'rgba(255, 255, 255, 0)');
          context.fillStyle = gradient.x;
          context.fillRect(0, 0, width, height);
          gradient.y.addColorStop(0, 'rgba(0, 0, 0, 0)');
          gradient.y.addColorStop(1, 'rgba(0, 0, 0, 1)');
          context.fillStyle = gradient.y;
          context.fillRect(0, 0, width, height);
        },
        generateColorObject: function generateColorObject() {
          var _this$PRIVATE3;

          var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.hue;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.PRIVATE.saturation;
          var v = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.PRIVATE.value;
          var _this$PRIVATE2 = _this.PRIVATE,
              alpha = _this$PRIVATE2.alpha,
              HSVToRGB = _this$PRIVATE2.HSVToRGB;
          var rgb = HSVToRGB(h, s, v);
          var r = rgb[0];
          var g = rgb[1];
          var b = rgb[2];
          return {
            r: r,
            g: g,
            b: b,
            a: alpha,
            hex: "#".concat((_this$PRIVATE3 = _this.PRIVATE).RGBToHex.apply(_this$PRIVATE3, _toConsumableArray(rgb))),
            rgba: "rgba(".concat(rgb.join(','), ",").concat(alpha / 100, ")")
          };
        },
        generatePositionObject: function generatePositionObject() {
          var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.position;
          return {
            x: {
              px: position.x,
              pct: _this.UTIL.getPercentageDecimal(position.x, _this.clientWidth)
            },
            y: {
              px: position.y,
              pct: _this.UTIL.getPercentageDecimal(position.y, _this.clientHeight)
            }
          };
        },
        getRelativePosition: function getRelativePosition(evt) {
          var _this$PRIVATE$dimensi = _this.PRIVATE.dimensions,
              top = _this$PRIVATE$dimensi.top,
              left = _this$PRIVATE$dimensi.left;
          var offset = {
            x: evt.pageX - left - _this.clientLeft,
            y: evt.pageY - top - _this.clientTop
          };
          return {
            x: Math.min(Math.max(offset.x, 0), _this.clientWidth),
            y: Math.min(Math.max(offset.y, 0), _this.clientHeight)
          };
        },
        HSVToRGB: function HSVToRGB(h, s, v) {
          var r, g, b, i, f, p, q, t;
          h = Math.max(0, Math.min(360, h));
          s = Math.max(0, Math.min(100, s));
          v = Math.max(0, Math.min(100, v));
          s /= 100;
          v /= 100;

          if (s == 0) {
            r = g = b = v;
            return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
          }

          h /= 60;
          i = Math.floor(h);
          f = h - i;
          p = v * (1 - s);
          q = v * (1 - s * f);
          t = v * (1 - s * (1 - f));

          switch (i) {
            case 0:
              r = v;
              g = t;
              b = p;
              break;

            case 1:
              r = q;
              g = v;
              b = p;
              break;

            case 2:
              r = p;
              g = v;
              b = t;
              break;

            case 3:
              r = p;
              g = q;
              b = v;
              break;

            case 4:
              r = t;
              g = p;
              b = v;
              break;

            default:
              r = v;
              g = p;
              b = q;
          }

          return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
        },
        RGBToHex: function RGBToHex(r, g, b) {
          var unitToHex = _this.PRIVATE.unitToHex;
          return "".concat(unitToHex(r)).concat(unitToHex(g)).concat(unitToHex(b));
        },
        unitToHex: function unitToHex(unit) {
          var hex = Number(unit).toString(16);

          if (hex.length < 2) {
            hex = "0".concat(hex);
          }

          return hex.toUpperCase();
        },
        pointermoveHandler: function pointermoveHandler(evt) {
          if (evt.buttons < 1) {
            return;
          }

          document.addEventListener('pointerup', _this.PRIVATE.pointerupHandler);
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
          var _this$PRIVATE4 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE4.generateColorObject,
              generatePositionObject = _this$PRIVATE4.generatePositionObject,
              position = _this$PRIVATE4.position;

          var relative = _this.PRIVATE.getRelativePosition(evt);

          if (relative.x !== position.x || relative.y !== position.y) {
            _this.PRIVATE.saturation = getPercentageDecimal(relative.x, _this.clientWidth) * 100;
            _this.PRIVATE.value = 100 - getPercentageDecimal(relative.y, _this.clientHeight) * 100;
            _this.PRIVATE.position = relative;

            _this.emit('sample', {
              color: generateColorObject(),
              position: generatePositionObject()
            });
          }
        },
        pointerupHandler: function pointerupHandler(evt) {
          var _this$PRIVATE5 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE5.generateColorObject,
              generatePositionObject = _this$PRIVATE5.generatePositionObject,
              pointermoveHandler = _this$PRIVATE5.pointermoveHandler,
              pointerupHandler = _this$PRIVATE5.pointerupHandler; // this.PRIVATE.previousColor = this.PRIVATE.selectedColor
          // this.PRIVATE.selectedColor = currentColor

          _this.emit('change', {
            // previous: this.previousColor,
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.removeEventListener('pointermove', pointermoveHandler);
          document.removeEventListener('pointerup', pointerupHandler);
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        connected: function connected() {
          var _this$PRIVATE6 = _this.PRIVATE,
              draw = _this$PRIVATE6.draw,
              initialWidth = _this$PRIVATE6.initialWidth,
              initialHeight = _this$PRIVATE6.initialHeight;
          draw(initialWidth, initialHeight);
        },
        pointerenter: function pointerenter(evt) {
          var _this$PRIVATE7 = _this.PRIVATE,
              dimensions = _this$PRIVATE7.dimensions,
              draw = _this$PRIVATE7.draw,
              initialWidth = _this$PRIVATE7.initialWidth,
              initialHeight = _this$PRIVATE7.initialHeight;

          if (initialWidth !== dimensions.width || initialHeight !== dimensions.height) {
            draw();
          }
        },
        pointerdown: function pointerdown(evt) {
          _this.PRIVATE.position = _this.PRIVATE.getRelativePosition(evt);
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
          var _this$PRIVATE8 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE8.generateColorObject,
              generatePositionObject = _this$PRIVATE8.generatePositionObject,
              HSVToRGB = _this$PRIVATE8.HSVToRGB,
              hue = _this$PRIVATE8.hue,
              pointermoveHandler = _this$PRIVATE8.pointermoveHandler,
              position = _this$PRIVATE8.position;
          _this.PRIVATE.saturation = getPercentageDecimal(position.x, _this.clientWidth) * 100;
          _this.PRIVATE.value = 100 - getPercentageDecimal(position.y, _this.clientHeight) * 100;

          _this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.addEventListener('pointermove', pointermoveHandler);
        }
      });

      return _this;
    }

    _createClass(AuthorColorPickerElement, [{
      key: "hue",
      set: function set(val) {
        this.PRIVATE.hue = Math.max(0, Math.min(360, val));
        this.PRIVATE.draw();
      }
    }, {
      key: "saturation",
      set: function set(val) {
        this.PRIVATE.saturation = Math.max(0, Math.min(100, val));
        console.log('REPOSITION TARGET');
      }
    }, {
      key: "value",
      set: function set(val) {
        this.PRIVATE.value = Math.max(0, Math.min(100, val));
        console.log('REPOSITION TARGET');
      }
    }, {
      key: "hsv",
      set: function set(_ref) {
        var h = _ref.h,
            s = _ref.s,
            v = _ref.v;
        console.log(h, s, v);
      }
    }, {
      key: "lightness",
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "hsl",
      set: function set(_ref2) {
        var h = _ref2.h,
            s = _ref2.s,
            l = _ref2.l;
        console.log(h, s, l);
      }
    }, {
      key: "red",
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "g",
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "blue",
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "rgb",
      set: function set(_ref3) {
        var r = _ref3.r,
            g = _ref3.g,
            b = _ref3.b;
        console.log(r, g, b);
      }
    }, {
      key: "hex",
      get: function get() {},
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "alpha",
      set: function set(val) {
        console.log(val);
      }
    }, {
      key: "position",
      get: function get() {
        return this.PRIVATE.generatePositionObject();
      } // get previousColor () {
      //   return this.PRIVATE.generateColorObj(this.PRIVATE.previousColor)
      // }
      // get selectedColor () {
      //   return this.PRIVATE.HSVToRGB({
      //     h: this.PRIVATE.hue,
      //     s: this.UTIL.getPercentageDecimal(position.x, this.clientWidth) * 100,
      //     v: 100 - (this.UTIL.getPercentageDecimal(position.y, this.clientHeight) * 100)
      //   })
      //
      //   // return this.PRIVATE.generateColorObj(this.PRIVATE.selectedColor)
      // }
      // set selectedColor (color) {
      //   if (color.startsWith('#')) {
      //     return console.log('process hex')
      //   }
      //
      //   if (color.startsWith('rgb')) {
      //     return console.log('process rgb')
      //   }
      //
      //   if (color.startsWith('hsl')) {
      //     return console.log('process hsl')
      //   }
      // }

    }]);

    return AuthorColorPickerElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.es5.js.map
