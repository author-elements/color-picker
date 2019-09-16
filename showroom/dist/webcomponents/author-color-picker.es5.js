// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.1.3 available at github.com/author-elements/color-picker
// Last Build: 9/15/2019, 10:01:54 PM
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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorColorPickerElement).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:flex;flex-direction:column}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(*){position:absolute;z-index:1}:host{background-image:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}:host([mode=hue]){background-image:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}author-color-picker{contain:content;display:flex;flex-direction:column}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker *{position:absolute;z-index:1}author-color-picker{background-image:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}author-color-picker[mode=hue]{background-image:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}</style><slot></slot></template>")); // Override AuthorSliderElement defaults

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

        var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
        var _this$PRIVATE2 = _this.PRIVATE,
            generateColorObject = _this$PRIVATE2.generateColorObject,
            generatePositionObject = _this$PRIVATE2.generatePositionObject,
            handles = _this$PRIVATE2.handles,
            position = _this$PRIVATE2.position;

        var relative = _this.PRIVATE.getRelativePosition(evt);

        if (!_this.position.x || relative.x !== position.x || !_this.position.y || relative.y !== position.y) {
          _this.PRIVATE.setSampledColor(relative);

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
          default: 'default'
        },
        defaultOrientation: {
          private: true,
          readonly: true,
          default: 'horizontal'
        },
        validModes: {
          private: true,
          readonly: true,
          default: ['default', 'hue', 'gradient']
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
        update: function update() {
          var _this$PRIVATE3 = _this.PRIVATE,
              hue = _this$PRIVATE3.hue,
              saturation = _this$PRIVATE3.saturation,
              value = _this$PRIVATE3.value,
              HSVToRGB = _this$PRIVATE3.HSVToRGB,
              setHandlePosition = _this$PRIVATE3.setHandlePosition;

          switch (_this.mode) {
            case 'default':
              _this.UTIL.setStyleProperty('bgColorRule', 'background-color', "rgba(".concat(HSVToRGB(hue, 100, 100).join(', '), ", 1)"));

              return setHandlePosition({
                x: {
                  pct: saturation / 100
                },
                y: {
                  pct: 1 - value / 100
                }
              });

            case 'hue':
              return setHandlePosition({
                x: {
                  pct: hue / 360
                }
              });
          }
        },
        setHandlePosition: function setHandlePosition(position) {
          var handles = _this.PRIVATE.handles;

          if (handles.length === 1) {
            handles.item(0).position = position;
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
        HSVToRGB: function HSVToRGB() {
          var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.hue;
          var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.PRIVATE.saturation;
          var v = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _this.PRIVATE.value;
          h = Math.max(0, Math.min(360, h));
          s = Math.max(0, Math.min(100, s)) / 100;
          v = Math.max(0, Math.min(100, v)) / 100;

          var f = function f(n) {
            var k = (n + h / 60) % 6;
            return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
          };

          return [f(5) * 255, f(3) * 255, f(1) * 255];
        },
        RGBToHex: function RGBToHex(r, g, b) {
          var unitToHex = function unitToHex(unit) {
            var hex = Number(unit).toString(16);

            if (hex.length < 2) {
              hex = "0".concat(hex);
            }

            return hex.toUpperCase();
          };

          return "".concat(unitToHex(r)).concat(unitToHex(g)).concat(unitToHex(b));
        },
        RGBToHSV: function RGBToHSV(r, g, b) {
          r /= 255, g /= 255, b /= 255;
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h,
              s,
              v = max;
          var diff = max - min;
          s = max === 0 ? 0 : diff / max;

          if (max === min) {
            h = 0;
          } else {
            switch (max) {
              case r:
                h = 60 * (0 + (g - b) / diff);
                break;

              case g:
                h = 60 * (2 + (b - r) / diff);
                break;

              case b:
                h = 60 * (4 + (r - g) / diff);
                break;
            }

            h = h < 0 ? h + 360 : h;
          }

          return [h, s * 100, v * 100];
        },
        setSampledColor: function setSampledColor(position) {
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;

          switch (_this.mode) {
            case 'default':
              _this.PRIVATE.saturation = getPercentageDecimal(position.x, _this.clientWidth) * 100;
              _this.PRIVATE.value = 100 - getPercentageDecimal(position.y, _this.clientHeight) * 100;
              break;

            case 'hue':
              _this.PRIVATE.hue = _this.orientation === 'horizontal' ? getPercentageDecimal(position.x, _this.clientWidth) * 360 : getPercentageDecimal(position.y, _this.clientHeight) * 360;
              _this.PRIVATE.saturation = 100;
              _this.PRIVATE.value = 100;
              break;
          }
        },
        setRGB: function setRGB(r, g, b) {
          var hsv = _this.PRIVATE.RGBToHSV(r, g, b);

          _this.PRIVATE.hue = hsv[0];
          _this.PRIVATE.saturation = hsv[1];
          _this.PRIVATE.value = hsv[2];

          _this.PRIVATE.update();
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

          var _this$PRIVATE6 = _this.PRIVATE,
              defaultMode = _this$PRIVATE6.defaultMode,
              validModes = _this$PRIVATE6.validModes;

          switch (attribute) {
            case 'mode':
              var arr = newValue.split(' ').filter(function (mode) {
                return validModes.includes(mode);
              });

              if (!arr.length) {
                _this.setAttribute('mode', defaultMode);

                return _this.UTIL.throwError({
                  message: "Invalid mode \"".concat(newValue, "\". Valid values include: \"").concat(validModes.join('", "'), "\"")
                });
              }

              return _this.PRIVATE.update();
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

          _this.PRIVATE.update();
        },
        pointerdown: function pointerdown(evt) {
          _this.PRIVATE.position = _this.PRIVATE.getRelativePosition(evt);
          var getPercentageDecimal = _this.UTIL.getPercentageDecimal;
          var _this$PRIVATE7 = _this.PRIVATE,
              generateColorObject = _this$PRIVATE7.generateColorObject,
              generatePositionObject = _this$PRIVATE7.generatePositionObject,
              handles = _this$PRIVATE7.handles,
              HSVToRGB = _this$PRIVATE7.HSVToRGB,
              hue = _this$PRIVATE7.hue,
              pointermoveHandler = _this$PRIVATE7.pointermoveHandler,
              pointerupHandler = _this$PRIVATE7.pointerupHandler,
              position = _this$PRIVATE7.position;

          if (handles.length > 1) {
            return;
          }

          _this.PRIVATE.setSampledColor(position);

          if (handles.length !== 0) {
            handles.item(0).position = _this.position;
          }

          _this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.addEventListener('pointerup', pointerupHandler);
          document.addEventListener('pointermove', pointermoveHandler);
        }
      });

      return _this;
    }

    _createClass(AuthorColorPickerElement, [{
      key: "position",
      get: function get() {
        return this.PRIVATE.generatePositionObject();
      }
    }, {
      key: "selectedColor",
      get: function get() {
        return this.PRIVATE.generateColorObject();
      }
    }, {
      key: "hue",
      get: function get() {
        return this.PRIVATE.hue;
      },
      set: function set(val) {
        val = Math.max(0, Math.min(360, val));
        this.PRIVATE.hue = val === 360 ? 0 : val;
        this.PRIVATE.update();
      }
    }, {
      key: "rgb",
      get: function get() {
        return this.PRIVATE.HSVToRGB();
      },
      set: function set(_ref3) {
        var _ref3$r = _ref3.r,
            r = _ref3$r === void 0 ? 0 : _ref3$r,
            _ref3$g = _ref3.g,
            g = _ref3$g === void 0 ? 0 : _ref3$g,
            _ref3$b = _ref3.b,
            b = _ref3$b === void 0 ? 0 : _ref3$b;
        this.PRIVATE.setRGB(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255));
      }
    }, {
      key: "red",
      set: function set(val) {
        var _this$PRIVATE8;

        var rgb = this.PRIVATE.HSVToRGB();

        (_this$PRIVATE8 = this.PRIVATE).setRGB.apply(_this$PRIVATE8, [Math.min(val, 255)].concat(_toConsumableArray(rgb.slice(1))));
      }
    }, {
      key: "r",
      set: function set(val) {
        this.red = val;
      }
    }, {
      key: "green",
      set: function set(val) {
        var rgb = this.PRIVATE.HSVToRGB();
        this.PRIVATE.setRGB(rgb[0], Math.min(val, 255), rgb[2]);
      }
    }, {
      key: "g",
      set: function set(val) {
        this.green = val;
      }
    }, {
      key: "blue",
      set: function set(val) {
        var _this$PRIVATE9;

        var rgb = this.PRIVATE.HSVToRGB();

        (_this$PRIVATE9 = this.PRIVATE).setRGB.apply(_this$PRIVATE9, _toConsumableArray(rgb.slice(-2)).concat([Math.min(val, 255)]));
      }
    }, {
      key: "b",
      set: function set(val) {
        this.blue = val;
      } // set alpha (val) {
      //   console.log(val)
      // }
      // set a (val) {
      //   console.log(val)
      // }

    }, {
      key: "hex",
      get: function get() {
        var _this$PRIVATE10;

        return "#".concat((_this$PRIVATE10 = this.PRIVATE).RGBToHex.apply(_this$PRIVATE10, _toConsumableArray(this.PRIVATE.HSVToRGB())));
      },
      set: function set(val) {
        var _this$PRIVATE11;

        (_this$PRIVATE11 = this.PRIVATE).setRGB.apply(_this$PRIVATE11, _toConsumableArray(this.PRIVATE.hexToRGB(val)));
      }
    }, {
      key: "saturation",
      set: function set(val) {
        this.PRIVATE.saturation = Math.max(0, Math.min(100, val));
        this.PRIVATE.update();
      }
    }, {
      key: "s",
      set: function set(val) {
        this.saturation = val;
      }
    }, {
      key: "value",
      set: function set(val) {
        this.PRIVATE.value = Math.max(0, Math.min(100, val));
        this.PRIVATE.update();
      }
    }, {
      key: "v",
      set: function set(val) {
        this.value = val;
      }
    }, {
      key: "hsv",
      set: function set(_ref4) {
        var h = _ref4.h,
            s = _ref4.s,
            v = _ref4.v;
        h = Math.max(0, Math.min(360, h));
        this.PRIVATE.hue = h === 360 ? 0 : h;
        this.PRIVATE.saturation = Math.max(0, Math.min(100, s));
        this.PRIVATE.value = Math.max(0, Math.min(100, v));
        this.PRIVATE.update();
      } // set lightness (val) {
      //   console.log(val);
      // }
      // set hsl ({ h, s, l }) {
      //   console.log(h, s, l)
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
