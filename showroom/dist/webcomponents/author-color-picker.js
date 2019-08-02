// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.0.7 available at github.com/author-elements/color-picker
// Last Build: 8/2/2019, 12:20:06 PM
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
          class AuthorColorPickerElement extends AuthorBaseElement(HTMLElement) {
    constructor () {
      super(`<template><style>@charset "UTF-8"; :host{contain:content;display:flex;flex-direction:column}:host *,:host :after,:host :before{box-sizing:border-box}:host .wrapper{position:relative;flex:1;display:flex;flex-direction:column}:host .canvas-wrapper{flex:1;display:flex;flex-direction:column}:host canvas{flex:1;display:block;width:100%;height:100%}:host ::slotted(*){position:absolute;z-index:1}author-color-picker{contain:content;display:flex;flex-direction:column}author-color-picker *,author-color-picker :after,author-color-picker :before{box-sizing:border-box}author-color-picker .wrapper{position:relative;flex:1;display:flex;flex-direction:column}author-color-picker .canvas-wrapper{flex:1;display:flex;flex-direction:column}author-color-picker canvas{flex:1;display:block;width:100%;height:100%}author-color-picker *{position:absolute;z-index:1}</style><div class="wrapper"><slot></slot><div class="canvas-wrapper"><canvas></canvas></div></div></template>`);

      this.UTIL.defineProperties({
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
          get: () => this.shadowRoot.querySelector('canvas')
        },

        context: {
          private: true,
          readonly: true,
          get: () => this.PRIVATE.canvas.getContext('2d')
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
          get: () => this.PRIVATE.canvas.getBoundingClientRect()
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

      this.UTIL.definePrivateMethods({
        draw: (width = this.PRIVATE.dimensions.width, height = this.PRIVATE.dimensions.height, hue = this.PRIVATE.hue) => {
          let { canvas, context, HSVToRGB } = this.PRIVATE;

          canvas.width = width;
          canvas.height = height;

          let rgb = HSVToRGB(hue, 100, 100);

          context.clearRect(0, 0, width, height);
          context.fillStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 1)`;
  				context.fillRect(0, 0, width, height);

          let gradient = {
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

        generateColorObject: (h = this.PRIVATE.hue, s = this.PRIVATE.saturation, v = this.PRIVATE.value) => {
          let { alpha, HSVToRGB } = this.PRIVATE;

          let rgb = HSVToRGB(h, s, v);
          let r = rgb[0];
          let g = rgb[1];
          let b = rgb[2];

          return {
            r,
            g,
            b,
            a: alpha,
            hex: `#${this.PRIVATE.RGBToHex(...rgb)}`,
            rgba: `rgba(${rgb.join(',')},${alpha / 100})`
          }
        },

        generatePositionObject: (position = this.PRIVATE.position) => ({
          x: {
            px: position.x,
            pct: this.UTIL.getPercentageDecimal(position.x, this.clientWidth)
          },

          y: {
            px: position.y,
            pct: this.UTIL.getPercentageDecimal(position.y, this.clientHeight)
          }
        }),

        getRelativePosition: evt => {
          let { top, left } = this.PRIVATE.dimensions;

          let offset = {
            x: evt.pageX - left - this.clientLeft,
            y: evt.pageY - top - this.clientTop
          };

          return {
            x: Math.min(Math.max(offset.x, 0), this.clientWidth),
            y: Math.min(Math.max(offset.y, 0), this.clientHeight)
          }
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

        pointermoveHandler: evt => {
          if (evt.buttons < 1) {
            return
          }

          document.addEventListener('pointerup', this.PRIVATE.pointerupHandler);

          let { getPercentageDecimal } = this.UTIL;
          let { generateColorObject, generatePositionObject, position } = this.PRIVATE;
          let relative = this.PRIVATE.getRelativePosition(evt);

          if (relative.x !== position.x || relative.y !== position.y) {
            this.PRIVATE.saturation = getPercentageDecimal(relative.x, this.clientWidth) * 100;
            this.PRIVATE.value = 100 - (getPercentageDecimal(relative.y, this.clientHeight) * 100);
            this.PRIVATE.position = relative;

            this.emit('sample', {
              color: generateColorObject(),
              position: generatePositionObject()
            });
          }
        },

        pointerupHandler: evt => {
          let { generateColorObject, generatePositionObject, pointermoveHandler, pointerupHandler } = this.PRIVATE;

          // this.PRIVATE.previousColor = this.PRIVATE.selectedColor
          // this.PRIVATE.selectedColor = currentColor

          this.emit('change', {
            // previous: this.previousColor,
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.removeEventListener('pointermove', pointermoveHandler);
          document.removeEventListener('pointerup', pointerupHandler);
        }
      });

      this.UTIL.registerListeners(this, {
        connected: () => {
          let { draw, initialWidth, initialHeight } = this.PRIVATE;
          draw(initialWidth, initialHeight);
        },

        pointerenter: evt => {
          let { dimensions, draw, initialWidth, initialHeight } = this.PRIVATE;

          if (initialWidth !== dimensions.width || initialHeight !== dimensions.height) {
            draw();
          }
        },

        pointerdown: evt => {
          this.PRIVATE.position = this.PRIVATE.getRelativePosition(evt);

          let { getPercentageDecimal } = this.UTIL;
          let { generateColorObject, generatePositionObject, HSVToRGB, hue, pointermoveHandler, position } = this.PRIVATE;

          this.PRIVATE.saturation = getPercentageDecimal(position.x, this.clientWidth) * 100;
          this.PRIVATE.value = 100 - (getPercentageDecimal(position.y, this.clientHeight) * 100);

          this.emit('change', {
            color: generateColorObject(),
            position: generatePositionObject()
          });

          document.addEventListener('pointermove', pointermoveHandler);
        }
      });
    }

    set hue (val) {
      this.PRIVATE.hue = Math.max(0, Math.min(360, val));
      this.PRIVATE.draw();
    }

    set saturation (val) {
      this.PRIVATE.saturation = Math.max(0, Math.min(100, val));
      console.log('REPOSITION TARGET');
    }

    set value (val) {
      this.PRIVATE.value = Math.max(0, Math.min(100, val));
      console.log('REPOSITION TARGET');
    }

    set hsv ({ h, s, v }) {
      console.log(h, s, v);
    }

    set lightness (val) {
      console.log(val);
    }

    set hsl ({ h, s, l }) {
      console.log(h, s, l);
    }

    set red (val) {
      console.log(val);
    }

    set g (val) {
      console.log(val);
    }

    set blue (val) {
      console.log(val);
    }

    set rgb ({ r, g, b }) {
      console.log(r, g, b);
    }

    get hex () {

    }

    set hex (val) {
      console.log(val);
    }

    set alpha (val) {
      console.log(val);
    }

    get position () {
      return this.PRIVATE.generatePositionObject()
    }

    // get previousColor () {
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
  }

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.js.map
