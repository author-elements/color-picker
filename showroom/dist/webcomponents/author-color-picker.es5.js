// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.0.0 available at github.com/author-elements/color-picker
// Last Build: 7/29/2019, 8:01:57 PM
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

      _this = _possibleConstructorReturn(this, _getPrototypeOf(AuthorColorPickerElement).call(this, "<template><style>@charset \"UTF-8\"; :host{contain:content;display:block}:host *,:host :after,:host :before{box-sizing:border-box}:host canvas{display:block;width:100%;height:100%}author-color-picker{contain:content;display:block}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker canvas{display:block;width:100%;height:100%}</style><canvas></canvas></template>"));

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
        coords: {
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
          default: null
        },
        selectedColor: {
          default: null
        }
      });

      _this.UTIL.definePrivateMethods({
        draw: function draw(width, height) {
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
        }
      });

      _this.UTIL.registerListeners(_assertThisInitialized(_this), {
        connected: function connected() {
          var _this$PRIVATE2 = _this.PRIVATE,
              coords = _this$PRIVATE2.coords,
              draw = _this$PRIVATE2.draw;
          _this.PRIVATE.initialWidth = coords.width;
          _this.PRIVATE.initialHeight = coords.height;
          draw(coords.width, coords.height);
        }
      });

      _this.UTIL.registerListeners(_this.PRIVATE.canvas, {
        pointerenter: function pointerenter(evt) {
          var _this$PRIVATE3 = _this.PRIVATE,
              coords = _this$PRIVATE3.coords,
              draw = _this$PRIVATE3.draw,
              initialWidth = _this$PRIVATE3.initialWidth,
              initialHeight = _this$PRIVATE3.initialHeight;

          if (initialWidth !== coords.width || initialHeight !== coords.height) {
            draw(coords.width, coords.height);
          }
        },
        pointermove: function pointermove(evt) {
          var context = _this.PRIVATE.context;

          var _context$getImageData = context.getImageData(evt.offsetX, evt.offsetY, 1, 1),
              data = _context$getImageData.data;

          _this.PRIVATE.currentColor = "rgb(".concat(data[0], ",").concat(data[1], ",").concat(data[2], ")");
          console.log(_this.currentColor);
        }
      });

      return _this;
    }

    _createClass(AuthorColorPickerElement, [{
      key: "currentColor",
      get: function get() {
        return this.PRIVATE.currentColor;
      }
    }]);

    return AuthorColorPickerElement;
  }(AuthorBaseElement(HTMLElement));

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.es5.js.map
