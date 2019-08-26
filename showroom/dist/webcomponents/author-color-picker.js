// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.1.0 available at github.com/author-elements/color-picker
// Last Build: 8/25/2019, 5:22:36 PM
var AuthorColorPickerElement = (function () {
  'use strict';

  if (!window.hasOwnProperty('AuthorBaseElement')) {
              console.error('[ERROR] <author-color-picker> Required dependency "AuthorBaseElement" not found.');
              console.info('AuthorBaseElement is available at https://github.com/author-elements/base');
            }
          (function () {
            let missingDependencies = Array.from(new Set([])).filter(dep => !customElements.get(dep));
            if (missingDependencies.length > 0) {
              console.error(`[ERROR] <author-color-picker> Required dependenc${missingDependencies.length !== 1 ? 'ies' : 'y'} not found: ${missingDependencies.map(d => `<${d}>`).join(', ').replace(', ' + missingDependencies[missingDependencies.length - 1], ' and ' + missingDependencies[missingDependencies.length - 1])}`);
              missingDependencies.forEach((dep, i) => console.info(`${i+1}. <${dep}> is available at ${'https://github.com/author-elements/color-picker'.replace('color-picker', dep.replace('author-', ''))}`));
            }
          })();
          class AuthorColorPickerElement extends AuthorSliderElement {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host{contain:content;display:flex;flex-direction:column}:host *,:host :after,:host :before{box-sizing:border-box}:host ::slotted(*){position:absolute;z-index:1}:host,:host([mode=single-hue]){background:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}:host([mode=all-hues]){background:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}author-color-picker{contain:content;display:flex;flex-direction:column}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker *{position:absolute;z-index:1}author-color-picker,author-color-picker[mode=single-hue]{background:linear-gradient(to bottom,transparent 0,#000 100%),linear-gradient(to right,#fff 0,transparent 100%)}author-color-picker[mode=all-hues]{background:linear-gradient(to right,red 0,#ff0 calc(1 / 6 * 100%),#0f0 calc(1 / 3 * 100%),#0ff 50%,#00f calc(2 / 3 * 100%),#f0f calc(5 / 6 * 100%),red 100%)}</style><slot></slot></template>`);

      // Override AuthorSliderElement defaults
      this.PRIVATE.defaultAxis = '*';

      this.PRIVATE.pointerupHandler = evt => {
        let { generateColorObject, generatePositionObject, handles, pointermoveHandler, pointerupHandler } = this.PRIVATE;
        let reposition = true;

        // this.PRIVATE.previousColor = this.PRIVATE.selectedColor
        // this.PRIVATE.selectedColor = currentColor

        let position = null;

        if (handles.length > 1) {
          reposition = false;
        } else if (handles.length !== 0) {
          handles.item(0).position = position = generatePositionObject();
        }

        if (reposition) {
          this.emit('change', {
            // previous: this.previousColor,
            color: generateColorObject(),
            position: position || generatePositionObject()
          });
        }

        document.removeEventListener('pointermove', pointermoveHandler);
        document.removeEventListener('pointerup', pointerupHandler);
      };

      this.PRIVATE.pointermoveHandler = evt => {
        if (evt.buttons < 1) {
          return
        }

        document.addEventListener('pointerup', this.PRIVATE.pointerupHandler);

        let { getPercentageDecimal } = this.UTIL;
        let { generateColorObject, generatePositionObject, handles, position } = this.PRIVATE;
        let relative = this.PRIVATE.getRelativePosition(evt);

        if ((!this.position.x || relative.x !== position.x) || (!this.position.y || relative.y !== position.y)) {
          this.PRIVATE.setColor(relative);
          this.PRIVATE.position = relative;

          if (handles.length !== 0) {
            handles.item(0).position = this.position;
          }

          this.emit('slide', {
            color: generateColorObject(),
            position: generatePositionObject()
          });
        }
      };

      this.UTIL.defineProperties({
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

      this.UTIL.defineAttributes({
        mode: this.PRIVATE.defaultMode,
        orientation: this.PRIVATE.defaultOrientation
      });

      this.UTIL.definePrivateMethods({
        draw: () => {
          let { handles, hue, HSVToRGB, saturation, value } = this.PRIVATE;

          switch (this.mode) {
            case 'single-hue':
              return this.UTIL.setStyleProperty('bgColorRule', 'background-color', `rgba(${HSVToRGB(hue, 100, 100).join(', ')}, 1)`)
          }

          if (handles.length === 1) {
            handles.item(0).position = {
              x: { pct: saturation / 100 },
              y: { pct: 1 - (value / 100) }
            };
          }
        },

        generateColorObject: (h = this.PRIVATE.hue, s = this.PRIVATE.saturation, v = this.PRIVATE.value) => {
          let { alpha, HSVToRGB } = this.PRIVATE;

          let rgb = HSVToRGB(h, s, v);
          let r = rgb[0];
          let g = rgb[1];
          let b = rgb[2];

          return {
            hue: this.PRIVATE.hue,
            saturation: this.PRIVATE.saturation,
            value: this.PRIVATE.value,
            r,
            g,
            b,
            alpha,
            hex: `#${this.PRIVATE.RGBToHex(...rgb)}`,
            rgba: `rgba(${rgb.join(',')},${alpha / 100})`
          }
        },

        hexToRGB: hex => {
          let [ , short, long ] = String(hex).match(/^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i) || [];

          if (short) {
            return Array.from(short, s => Number.parseInt(s, 16)).map(n => (n << 4) | n)
          }

          let value = Number.parseInt(long, 16);
          return [ value >> 16, value >> 8 & 0xFF, value & 0xFF ]
        },

        HSVToRGB: (h, s, v) => {
          let r, g, b, i, f, p, q, t;

          h = Math.max(0, Math.min(360, h));
          s = Math.max(0, Math.min(100, s));
          v = Math.max(0, Math.min(100, v));

          s /= 100;
          v /= 100;

          if(s == 0) {
            r = g = b = v;

            return [
              Math.round(r * 255),
              Math.round(g * 255),
              Math.round(b * 255)
            ]
          }

          h /= 60;
          i = Math.floor(h);
          f = h - i;
          p = v * (1 - s);
          q = v * (1 - s * f);
          t = v * (1 - s * (1 - f));

          switch(i) {
            case 0:
              r = v;
              g = t;
              b = p;
              break

            case 1:
              r = q;
              g = v;
              b = p;
              break

            case 2:
              r = p;
              g = v;
              b = t;
              break

            case 3:
              r = p;
              g = q;
              b = v;
              break

            case 4:
              r = t;
              g = p;
              b = v;
              break

            default:
              r = v;
              g = p;
              b = q;
          }

          return [
            Math.round(r * 255),
            Math.round(g * 255),
            Math.round(b * 255)
          ]
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
        RGBToHSV: (red, green, blue) => {
          red /= 255;
          green /= 255;
          blue /= 255;

          let max = Math.max(red, green, blue);
          let min = Math.min(red, green, blue);
          let hue, saturation, value = max;

          let difference = max - min;
          saturation = max === 0 ? 0 : difference / max;

          if (max === min) {
            hue = 0;
          } else {
            switch (max) {
              case red:
                hue = (green - blue) / difference + (green < blue ? 6 : 0);
                break

              case green:
                hue = (blue - red) / difference + 2;
                break

              case blue:
                hue = (red - green) / difference + 4;
                break
            }

            hue /= 6;
          }

          return [hue, saturation, value]
        },

        RGBToHex: (r, g, b) => {
          let { unitToHex } = this.PRIVATE;
          return `${unitToHex(r)}${unitToHex(g)}${unitToHex(b)}`
        },

        unitToHex: unit => {
          let hex = Number(unit).toString(16);

          if (hex.length < 2) {
            hex = `0${hex}`;
          }

          return hex.toUpperCase()
        },

        setColor: (position, percentage = false) => {
          let { getPercentageDecimal } = this.UTIL;

          switch (this.mode) {
            case 'single-hue':
              this.PRIVATE.saturation = getPercentageDecimal(position.x, this.clientWidth) * 100;
              this.PRIVATE.value = 100 - (getPercentageDecimal(position.y, this.clientHeight) * 100);
              break

            case 'all-hues':
              this.PRIVATE.hue = this.orientation === 'horizontal'
                ? getPercentageDecimal(position.x, this.clientWidth) * 360
                : getPercentageDecimal(position.y, this.clientHeight) * 360;

              this.PRIVATE.saturation = 100;
              this.PRIVATE.value = 100;
              break
          }
        },

        setRGB: (r, g, b) => {
          let { generateColorObject, generatePositionObject, handles, RGBToHSV } = this.PRIVATE;
          let hsv = RGBToHSV(r, g, b);

          this.PRIVATE.hue = hsv[0] * 360;
          this.PRIVATE.saturation = hsv[1] * 100;
          this.PRIVATE.value = hsv[2] * 100;

          this.PRIVATE.draw();

          this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });
        }
      });

      this.UTIL.registerListeners(this, {
        'attribute.change': evt => {
          let { attribute, oldValue, newValue } = evt.detail;

          if (newValue === oldValue) {
            return
          }

          let { defaultMode, validModes } = this.PRIVATE;

          switch (attribute) {
            case 'mode':
              let arr = newValue.split(' ').filter(axis => validModes.includes(axis));

              if (!arr.length) {
                this.setAttribute('mode', defaultMode);

                return this.UTIL.throwError({
                  message: `Invalid mode "${newValue}". Valid values include: "${validModes.join('", "')}"`
                })
              }

              break
          }
        },

        connected: () => {
          // Remove default author-slider pointerdown handler
          this.removeEventListener('pointerdown', this.PRIVATE.pointerdownHandler);

          // Reset AuthorSliderElement defaults
          if (!this.hasAttribute('axis')) {
            this.axis = this.PRIVATE.defaultAxis;
          }

          this.UTIL.insertStyleRules({
            bgColorRule: ':host {}'
          });

          this.PRIVATE.draw();
        },

        pointerdown: evt => {
          this.PRIVATE.position = this.PRIVATE.getRelativePosition(evt);

          let { getPercentageDecimal } = this.UTIL;
          let { generateColorObject, generatePositionObject, handles, HSVToRGB, hue, pointermoveHandler, position } = this.PRIVATE;

          if (handles.length > 1) {
            return
          }

          this.PRIVATE.setColor(position);

          if (handles.length !== 0) {
            handles.item(0).position = this.position;
          }

          this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.addEventListener('pointermove', pointermoveHandler);
        }
      });
    }

    static get observedAttributes () {
      return [...AuthorSliderElement.observedAttributes, 'mode', 'orientation']
    }

    get hue () {
      return this.PRIVATE.hue
    }

    set hue (val) {
      val = Math.max(0, Math.min(360, val));
      this.PRIVATE.hue = val === 360 ? 0 : val;
      this.PRIVATE.draw();

      this.emit('change', {
        color: this.PRIVATE.generateColorObject(),
        position: this.PRIVATE.generatePositionObject()
      });
    }

    // set saturation (val) {
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

    set rgb ({r = 0, g = 0, b = 0}) {
      this.PRIVATE.setRGB(r, g, b);
    }

    // get hex () {
    //
    // }

    set hex (val) {
      this.PRIVATE.setRGB(...this.PRIVATE.hexToRGB(val));
    }

    // set alpha (val) {
    //   console.log(val)
    // }

    get position () {
      return this.PRIVATE.generatePositionObject()
    }

    // get previousColor () {
    //   return this.PRIVATE.generateColorObj(this.PRIVATE.previousColor)
    // }

    get selectedColor () {
      return this.PRIVATE.generateColorObject()
    }

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
  }

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.js.map
