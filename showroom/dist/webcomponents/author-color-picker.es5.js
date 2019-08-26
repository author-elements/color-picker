// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.1.0 available at github.com/author-elements/color-picker
// Last Build: 8/25/2019, 5:22:36 PM
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

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
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

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
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
  function (_AuthorSliderElement) {
    _inherits(AuthorColorPickerElement, _AuthorSliderElement);

    function AuthorColorPickerElement() {
      var _this;

      _classCallCheck(this, AuthorColorPickerElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorColorPickerElement).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(*){position:absolute;z-index:1}:host,:host([mode=single-hue]){background:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}:host([mode=all-hues]){background:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}author-color-picker{contain:content;display:flex;flex-direction:column}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker *{position:absolute;z-index:1}author-color-picker,author-color-picker[mode=single-hue]{background:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}author-color-picker[mode=all-hues]{background:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}</style><slot></slot></template>")); // Override AuthorSliderElement defaults

      _this.PRIVATE.defaultAxis = '*';

      _this.PRIVATE.pointerupHandler = function (evt) {
        var _this$PRIVATE = _this.PRIVATE,
            generateColorObject = _this$PRIVATE.generateColorObject,
            generatePositionObject = _this$PRIVATE.generatePositionObject,
            handles = _this$PRIVATE.handles,
            pointermoveHandler = _this$PRIVATE.pointermoveHandler,
            pointerupHandler = _this$PRIVATE.pointerupHandler;
        var reposition = true; // this.PRIVATE.previousColor = this.PRIVATE.selectedColor
        // this.PRIVATE.selectedColor = currentColor

        var position = null;

        if (handles.length > 1) {
          reposition = false;
        } else if (handles.length !== 0) {
          handles.item(0).position = position = generatePositionObject();
        }

        if (reposition) {
          _this.emit('change', {
            // previous: this.previousColor,
            color: generateColorObject(),
            position: position || generatePositionObject()
          });
        }

        document.removeEventListener('pointermove', pointermoveHandler);
        document.removeEventListener('pointerup', pointerupHandler);
      };

      _this.PRIVATE.pointermoveHandler = function (evt) {
        if (evt.buttons < 1) {
          return;
        }

        document.addEventListener('pointerup', _this.PRIVATE.pointerupHandler);
        var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
        var _this$PRIVATE2 = _this.PRIVATE,
            generateColorObject = _this$PRIVATE2.generateColorObject,
            generatePositionObject = _this$PRIVATE2.generatePositionObject,
            handles = _this$PRIVATE2.handles,
            position = _this$PRIVATE2.position;

        var relative = _this.PRIVATE.getRelativePosition(evt);

        if (!_this.position.x || relative.x !== position.x || !_this.position.y || relative.y !== position.y) {
          _this.PRIVATE.setColor(relative);

          _this.PRIVATE.position = relative;

          if (handles.length !== 0) {
            handles.item(0).position = _this.position;
          }

          _this.emit('slide', {
            color: generateColorObject(),
            position: generatePositionObject()
          });
        }
      };

      _this.UTIL.defineProperties({
        defaultMode: {
          private: true,
          readonly: true,
          default: 'single-hue'
        },
        defaultOrientation: {
          private: true,
          readonly: true,
          default: 'horizontal'
        },
        validModes: {
          private: true,
          readonly: true,
          default: ['single-hue', 'all-hues', 'gradient']
        },
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
        }
      });

      _this.UTIL.defineAttributes({
        mode: _this.PRIVATE.defaultMode,
        orientation: _this.PRIVATE.defaultOrientation
      });

      _this.UTIL.definePrivateMethods({
        draw: function draw() {
          var _this$PRIVATE3 = _this.PRIVATE,
              handles = _this$PRIVATE3.handles,
              hue = _this$PRIVATE3.hue,
              HSVToRGB = _this$PRIVATE3.HSVToRGB,
              saturation = _this$PRIVATE3.saturation,
              value = _this$PRIVATE3.value;

          switch (_this.mode) {
            case 'single-hue':
              return _this.UTIL.setStyleProperty('bgColorRule', 'background-color', "rgba(".concat(HSVToRGB(hue, 100, 100).join(', '), ", 1)"));
          }

          if (handles.length === 1) {
            handles.item(0).position = {
              x: {
                pct: saturation / 100
              },
              y: {
                pct: 1 - value / 100
              }
            };
          }
        },
        generateColorObject: function generateColorObject() {
          var _this$PRIVATE5;

          var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.hue;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.PRIVATE.saturation;
          var v = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.PRIVATE.value;
          var _this$PRIVATE4 = _this.PRIVATE,
              alpha = _this$PRIVATE4.alpha,
              HSVToRGB = _this$PRIVATE4.HSVToRGB;
          var rgb = HSVToRGB(h, s, v);
          var r = rgb[0];
          var g = rgb[1];
          var b = rgb[2];
          return {
            hue: _this.PRIVATE.hue,
            saturation: _this.PRIVATE.saturation,
            value: _this.PRIVATE.value,
            r: r,
            g: g,
            b: b,
            alpha: alpha,
            hex: "#".concat((_this$PRIVATE5 = _this.PRIVATE).RGBToHex.apply(_this$PRIVATE5, _toConsumableArray(rgb))),
            rgba: "rgba(".concat(rgb.join(','), ",").concat(alpha / 100, ")")
          };
        },
        hexToRGB: function hexToRGB(hex) {
          var _ref = String(hex).match(/^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i) || [],
              _ref2 = _slicedToArray(_ref, 3),
              short = _ref2[1],
              long = _ref2[2];

          if (short) {
            return Array.from(short, function (s) {
              return Number.parseInt(s, 16);
            }).map(function (n) {
              return n << 4 | n;
            });
          }

          var value = Number.parseInt(long, 16);
          return [value >> 16, value >> 8 & 0xFF, value & 0xFF];
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

        /**
         * Converts an RGB color value to HSV. Conversion formula
         * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
         * Assumes r, g, and b are contained in the set [0, 255] and
         * returns h, s, and v in the set [0, 1].
         *
         * @param   Number  r       The red color value
         * @param   Number  g       The green color value
         * @param   Number  b       The blue color value
         * @return  Array           The HSV representation
         */
        RGBToHSV: function RGBToHSV(red, green, blue) {
          red /= 255;
          green /= 255;
          blue /= 255;
          var max = Math.max(red, green, blue);
          var min = Math.min(red, green, blue);
          var hue,
              saturation,
              value = max;
          var difference = max - min;
          saturation = max === 0 ? 0 : difference / max;

          if (max === min) {
            hue = 0;
          } else {
            switch (max) {
              case red:
                hue = (green - blue) / difference + (green < blue ? 6 : 0);
                break;

              case green:
                hue = (blue - red) / difference + 2;
                break;

              case blue:
                hue = (red - green) / difference + 4;
                break;
            }

            hue /= 6;
          }

          return [hue, saturation, value];
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
        setColor: function setColor(position) {
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;

          switch (_this.mode) {
            case 'single-hue':
              _this.PRIVATE.saturation = getPercentageDecimal(position.x, _this.clientWidth) * 100;
              _this.PRIVATE.value = 100 - getPercentageDecimal(position.y, _this.clientHeight) * 100;
              break;

            case 'all-hues':
              _this.PRIVATE.hue = _this.orientation === 'horizontal' ? getPercentageDecimal(position.x, _this.clientWidth) * 360 : getPercentageDecimal(position.y, _this.clientHeight) * 360;
              _this.PRIVATE.saturation = 100;
              _this.PRIVATE.value = 100;
              break;
          }
        },
        setRGB: function setRGB(r, g, b) {
          var _this$PRIVATE6 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE6.generateColorObject,
              generatePositionObject = _this$PRIVATE6.generatePositionObject,
              handles = _this$PRIVATE6.handles,
              RGBToHSV = _this$PRIVATE6.RGBToHSV;
          var hsv = RGBToHSV(r, g, b);
          _this.PRIVATE.hue = hsv[0] * 360;
          _this.PRIVATE.saturation = hsv[1] * 100;
          _this.PRIVATE.value = hsv[2] * 100;

          _this.PRIVATE.draw();

          _this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        'attribute.change': function attributeChange(evt) {
          var _evt$detail = evt.detail,
              attribute = _evt$detail.attribute,
              oldValue = _evt$detail.oldValue,
              newValue = _evt$detail.newValue;

          if (newValue === oldValue) {
            return;
          }

          var _this$PRIVATE7 = _this.PRIVATE,
              defaultMode = _this$PRIVATE7.defaultMode,
              validModes = _this$PRIVATE7.validModes;

          switch (attribute) {
            case 'mode':
              var arr = newValue.split(' ').filter(function (axis) {
                return validModes.includes(axis);
              });

              if (!arr.length) {
                _this.setAttribute('mode', defaultMode);

                return _this.UTIL.throwError({
                  message: "Invalid mode \"".concat(newValue, "\". Valid values include: \"").concat(validModes.join('", "'), "\"")
                });
              }

              break;
          }
        },
        connected: function connected() {
          // Remove default author-slider pointerdown handler
          _this.removeEventListener('pointerdown', _this.PRIVATE.pointerdownHandler); // Reset AuthorSliderElement defaults


          if (!_this.hasAttribute('axis')) {
            _this.axis = _this.PRIVATE.defaultAxis;
          }

          _this.UTIL.insertStyleRules({
            bgColorRule: ':host {}'
          });

          _this.PRIVATE.draw();
        },
        pointerdown: function pointerdown(evt) {
          _this.PRIVATE.position = _this.PRIVATE.getRelativePosition(evt);
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
          var _this$PRIVATE8 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE8.generateColorObject,
              generatePositionObject = _this$PRIVATE8.generatePositionObject,
              handles = _this$PRIVATE8.handles,
              HSVToRGB = _this$PRIVATE8.HSVToRGB,
              hue = _this$PRIVATE8.hue,
              pointermoveHandler = _this$PRIVATE8.pointermoveHandler,
              position = _this$PRIVATE8.position;

          if (handles.length > 1) {
            return;
          }

          _this.PRIVATE.setColor(position);

          if (handles.length !== 0) {
            handles.item(0).position = _this.position;
          }

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
      get: function get() {
        return this.PRIVATE.hue;
      },
      set: function set(val) {
        val = Math.max(0, Math.min(360, val));
        this.PRIVATE.hue = val === 360 ? 0 : val;
        this.PRIVATE.draw();
        this.emit('change', {
          color: this.PRIVATE.generateColorObject(),
          position: this.PRIVATE.generatePositionObject()
        });
      } // set saturation (val) {
      //   this.PRIVATE.saturation = Math.max(0, Math.min(100, val))
      //   console.log('REPOSITION TARGET')
      // }
      // set value (val) {
      //   this.PRIVATE.value = Math.max(0, Math.min(100, val))
      //   console.log('REPOSITION TARGET')
      // }
      // set hsv ({ h, s, v }) {
      //   console.log(h, s, v)
      // }
      // set lightness (val) {
      //   console.log(val);
      // }
      // set hsl ({ h, s, l }) {
      //   console.log(h, s, l)
      // }
      // set red (val) {
      //   console.log(val);
      // }
      // set g (val) {
      //   console.log(val);
      // }
      // set blue (val) {
      //   console.log(val);
      // }

    }, {
      key: "rgb",
      set: function set(_ref3) {
        var _ref3$r = _ref3.r,
            r = _ref3$r === void 0 ? 0 : _ref3$r,
            _ref3$g = _ref3.g,
            g = _ref3$g === void 0 ? 0 : _ref3$g,
            _ref3$b = _ref3.b,
            b = _ref3$b === void 0 ? 0 : _ref3$b;
        this.PRIVATE.setRGB(r, g, b);
      } // get hex () {
      //
      // }

    }, {
      key: "hex",
      set: function set(val) {
        var _this$PRIVATE9;

        (_this$PRIVATE9 = this.PRIVATE).setRGB.apply(_this$PRIVATE9, _toConsumableArray(this.PRIVATE.hexToRGB(val)));
      } // set alpha (val) {
      //   console.log(val)
      // }

    }, {
      key: "position",
      get: function get() {
        return this.PRIVATE.generatePositionObject();
      } // get previousColor () {
      //   return this.PRIVATE.generateColorObj(this.PRIVATE.previousColor)
      // }

    }, {
      key: "selectedColor",
      get: function get() {
        return this.PRIVATE.generateColorObject();
      } // set selectedColor (color) {
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

    }], [{
      key: "observedAttributes",
      get: function get() {
        return [].concat(_toConsumableArray(AuthorSliderElement.observedAttributes), ['mode', 'orientation']);
      }
    }]);

    return AuthorColorPickerElement;
  }(AuthorSliderElement);

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.es5.js.map
