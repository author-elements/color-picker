// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.0.3 available at github.com/author-elements/color-picker
// Last Build: 7/31/2019, 8:22:40 PM
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
          default: 0
        },
        initialheight: {
          private: true,
          default: 0
        },
        currentColor: {
          private: true,
          default: {
            r: 255,
            g: 255,
            b: 255
          }
        },
        selectedColor: {
          private: true,
          default: {
            r: 255,
            g: 255,
            b: 255
          }
        },
        previousColor: {
          private: true,
          default: {
            r: 255,
            g: 255,
            b: 255
          }
        }
      });

      _this.UTIL.definePrivateMethods({
        draw: function draw() {
          var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.PRIVATE.dimensions.width;
          var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.PRIVATE.dimensions.height;
          var _this$PRIVATE = _this.PRIVATE,
              canvas = _this$PRIVATE.canvas,
              context = _this$PRIVATE.context;
          canvas.width = width;
          canvas.height = height;
          context.clearRect(0, 0, width, height);
          var gradient = {
            x: context.createLinearGradient(0, 0, width, 0),
            y: context.createLinearGradient(0, 0, 0, height)
          };
          gradient.x.addColorStop(0 / 6, 'red');
          gradient.x.addColorStop(1 / 6, 'fuchsia');
          gradient.x.addColorStop(2 / 6, 'blue');
          gradient.x.addColorStop(3 / 6, 'aqua');
          gradient.x.addColorStop(4 / 6, 'lime');
          gradient.x.addColorStop(5 / 6, 'yellow');
          gradient.x.addColorStop(6 / 6, 'red');
          context.fillStyle = gradient.x;
          context.fillRect(0, 0, width, height);
          gradient.y.addColorStop(0 / 4, 'white');
          gradient.y.addColorStop(2 / 4, 'rgba(255,255,255,0)');
          gradient.y.addColorStop(2 / 4, 'rgba(0,0,0,0)');
          gradient.y.addColorStop(4 / 4, 'black');
          context.fillStyle = gradient.y;
          context.fillRect(0, 0, width, height);
        },
        generateColorObj: function generateColorObj(_ref) {
          var r = _ref.r,
              g = _ref.g,
              b = _ref.b;

          var hsl = _this.PRIVATE.RGBToHSL({
            r: r,
            g: g,
            b: b
          });

          var hue = hsl[0];
          var saturation = hsl[1];
          var lightness = hsl[2];
          return {
            red: r,
            green: g,
            blue: b,
            hex: "#".concat(_this.PRIVATE.RGBToHex({
              r: r,
              g: g,
              b: b
            })),
            rgb: "rgb(".concat(r, ",").concat(g, ",").concat(b, ")"),
            hsl: "hsl(".concat(hue, ",").concat(saturation * 100, "%, ").concat(lightness * 100, "%)"),
            hue: hue,
            saturation: saturation,
            lightness: lightness
          };
        },
        unitToHex: function unitToHex(unit) {
          var hex = Number(unit).toString(16);

          if (hex.length < 2) {
            hex = "0".concat(hex);
          }

          return hex.toUpperCase();
        },
        RGBToHex: function RGBToHex(_ref2) {
          var _ref2$r = _ref2.r,
              r = _ref2$r === void 0 ? 255 : _ref2$r,
              _ref2$g = _ref2.g,
              g = _ref2$g === void 0 ? 255 : _ref2$g,
              _ref2$b = _ref2.b,
              b = _ref2$b === void 0 ? 255 : _ref2$b;
          var unitToHex = _this.PRIVATE.unitToHex;
          return "".concat(unitToHex(r)).concat(unitToHex(g)).concat(unitToHex(b));
        },
        RGBToHSL: function RGBToHSL(_ref3) {
          var r = _ref3.r,
              g = _ref3.g,
              b = _ref3.b;
          r /= 255, g /= 255, b /= 255;
          var min = Math.min(r, g, b);
          var max = Math.max(r, g, b);
          var difference = max - min;
          var hue, saturation;

          switch (max) {
            case min:
              hue = 0;
              saturation = 0;
              break;

            case r:
              hue = (g - b) / difference;
              break;

            case g:
              hue = 2 + (b - r) / difference;
              break;

            case b:
              hue = 4 + (r - g) / difference;
              break;
          }

          hue = Math.min(hue * 60, 360);

          if (hue < 0) {
            hue += 360;
          }

          var lightness = (min + max) / 2;

          if (lightness <= 0.5) {
            saturation = difference / (max + min);
          } else {
            saturation = difference / (2 - max - min);
          }

          return [hue, saturation, lightness];
        },
        pointermoveHandler: function pointermoveHandler(evt) {
          if (evt.buttons < 1) {
            return;
          }

          var _this$PRIVATE$dimensi = _this.PRIVATE.dimensions,
              top = _this$PRIVATE$dimensi.top,
              left = _this$PRIVATE$dimensi.left,
              width = _this$PRIVATE$dimensi.width,
              height = _this$PRIVATE$dimensi.height;

          var relative = _this.PRIVATE.getRelativePosition(evt);

          if (relative.x !== _this.position.x.px || relative.y !== _this.position.y.px) {
            _this.PRIVATE.currentColor = _this.PRIVATE.getColor(relative);
            _this.PRIVATE.position = relative;

            _this.emit('sample', {
              color: _this.PRIVATE.generateColorObj(_this.PRIVATE.currentColor),
              position: _this.position
            });

            document.addEventListener('pointerup', _this.PRIVATE.pointerupHandler);
          }
        },
        getColor: function getColor(_ref4) {
          var x = _ref4.x,
              y = _ref4.y;

          var _this$PRIVATE$context = _this.PRIVATE.context.getImageData(x, y, 1, 1),
              data = _this$PRIVATE$context.data;

          return {
            r: data[0],
            g: data[1],
            b: data[2]
          };
        },
        pointerupHandler: function pointerupHandler(evt) {
          var _this$PRIVATE2 = _this.PRIVATE,
              currentColor = _this$PRIVATE2.currentColor,
              pointermoveHandler = _this$PRIVATE2.pointermoveHandler,
              pointerupHandler = _this$PRIVATE2.pointerupHandler;
          _this.PRIVATE.previousColor = _this.PRIVATE.selectedColor;
          _this.PRIVATE.selectedColor = currentColor;

          _this.emit('change', {
            previous: _this.previousColor,
            color: _this.selectedColor,
            position: _this.position
          });

          document.removeEventListener('pointermove', pointermoveHandler);
          document.removeEventListener('pointerup', pointerupHandler);
        },
        getRelativePosition: function getRelativePosition(evt) {
          var _this$PRIVATE$dimensi2 = _this.PRIVATE.dimensions,
              top = _this$PRIVATE$dimensi2.top,
              left = _this$PRIVATE$dimensi2.left,
              width = _this$PRIVATE$dimensi2.width,
              height = _this$PRIVATE$dimensi2.height;
          return {
            x: Math.min(Math.max(evt.pageX - left, 0), width - .1),
            y: Math.min(Math.max(evt.pageY - top, 0), height)
          };
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        connected: function connected() {
          var _this$PRIVATE3 = _this.PRIVATE,
              dimensions = _this$PRIVATE3.dimensions,
              draw = _this$PRIVATE3.draw;
          _this.PRIVATE.initialWidth = dimensions.width;
          _this.PRIVATE.initialHeight = dimensions.height;
          draw();
        },
        rendered: function rendered() {
          return _this.UTIL.registerListener(window, 'resize', function (evt) {
            return _this.PRIVATE.draw();
          });
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        pointerenter: function pointerenter(evt) {
          var _this$PRIVATE4 = _this.PRIVATE,
              dimensions = _this$PRIVATE4.dimensions,
              draw = _this$PRIVATE4.draw,
              initialWidth = _this$PRIVATE4.initialWidth,
              initialHeight = _this$PRIVATE4.initialHeight;

          if (initialWidth !== dimensions.width || initialHeight !== dimensions.height) {
            draw();
          }
        },
        pointerdown: function pointerdown(evt) {
          _this.PRIVATE.position = _this.PRIVATE.getRelativePosition(evt);
          var _this$PRIVATE5 = _this.PRIVATE,
              position = _this$PRIVATE5.position,
              getColor = _this$PRIVATE5.getColor,
              pointermoveHandler = _this$PRIVATE5.pointermoveHandler;
          _this.PRIVATE.previousColor = _this.PRIVATE.selectedColor;
          _this.PRIVATE.selectedColor = getColor(position);

          _this.emit('change', {
            previous: _this.previousColor,
            color: _this.selectedColor,
            position: _this.position
          });

          document.addEventListener('pointermove', pointermoveHandler);
        }
      });

      return _this;
    }

    _createClass(AuthorColorPickerElement, [{
      key: "position",
      get: function get() {
        var _this$PRIVATE6 = this.PRIVATE,
            position = _this$PRIVATE6.position,
            dimensions = _this$PRIVATE6.dimensions;
        return {
          x: {
            px: position.x,
            percentage: this.UTIL.getPercentageDecimal(position.x, dimensions.width)
          },
          y: {
            px: position.y,
            percentage: this.UTIL.getPercentageDecimal(position.y, dimensions.height)
          }
        };
      }
    }, {
      key: "previousColor",
      get: function get() {
        return this.PRIVATE.generateColorObj(this.PRIVATE.previousColor);
      }
    }, {
      key: "selectedColor",
      get: function get() {
        return this.PRIVATE.generateColorObj(this.PRIVATE.selectedColor);
      }
    }]);

    return AuthorColorPickerElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.es5.js.map
