// Copyright (c) 2019 Author.io. MIT licensed.
// @author.io/element-color-picker v1.0.3 available at github.com/author-elements/color-picker
// Last Build: 7/31/2019, 8:22:40 PM
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

      this.UTIL.definePrivateMethods({
        draw: (width = this.PRIVATE.dimensions.width, height = this.PRIVATE.dimensions.height) => {
          let { canvas, context } = this.PRIVATE;

          canvas.width = width;
          canvas.height = height;
          context.clearRect(0, 0, width, height);

          let gradient = {
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

        generateColorObj: ({ r, g, b }) => {
          let hsl = this.PRIVATE.RGBToHSL({ r, g, b });
          let hue = hsl[0];
          let saturation = hsl[1];
          let lightness = hsl[2];

          return {
            red: r,
            green: g,
            blue: b,
            hex: `#${this.PRIVATE.RGBToHex({ r, g, b })}`,
            rgb: `rgb(${r},${g},${b})`,
            hsl: `hsl(${hue},${saturation * 100}%, ${lightness * 100}%)`,
            hue,
            saturation,
            lightness
          }
        },

        unitToHex: unit => {
          let hex = Number(unit).toString(16);

          if (hex.length < 2) {
            hex = `0${hex}`;
          }

          return hex.toUpperCase()
        },

        RGBToHex: ({ r = 255, g = 255, b = 255 }) => {
          let { unitToHex } = this.PRIVATE;
          return `${unitToHex(r)}${unitToHex(g)}${unitToHex(b)}`
        },

        RGBToHSL: ({ r, g, b }) => {
          r /= 255, g /= 255, b /= 255;

        	let min = Math.min(r, g, b);
        	let max = Math.max(r, g, b);
        	let difference = max - min;

          let hue, saturation;

          switch (max) {
            case min:
              hue = 0;
              saturation = 0;
              break

            case r:
              hue = (g - b) / difference;
              break

            case g:
              hue = 2 + (b - r) / difference;
              break

            case b:
              hue = 4 + (r - g) / difference;
              break
          }

        	hue = Math.min(hue * 60, 360);

        	if (hue < 0) {
        		hue += 360;
        	}

        	let lightness = (min + max) / 2;

        	if (lightness <= 0.5) {
        		saturation = difference / (max + min);
        	} else {
        		saturation = difference / (2 - max - min);
        	}

        	return [hue, saturation, lightness]
        },

        pointermoveHandler: evt => {
          if (evt.buttons < 1) {
            return
          }

          let { top, left, width, height } = this.PRIVATE.dimensions;
          let relative = this.PRIVATE.getRelativePosition(evt);

          if (relative.x !== this.position.x.px || relative.y !== this.position.y.px) {
            this.PRIVATE.currentColor = this.PRIVATE.getColor(relative);

            this.PRIVATE.position = relative;

            this.emit('sample', {
              color: this.PRIVATE.generateColorObj(this.PRIVATE.currentColor),
              position: this.position
            });

            document.addEventListener('pointerup', this.PRIVATE.pointerupHandler);
          }
        },

        getColor: ({ x, y }) => {
          let { data } = this.PRIVATE.context.getImageData(x, y, 1, 1);

          return {
            r: data[0],
            g: data[1],
            b: data[2]
          }
        },

        pointerupHandler: evt => {
          let { currentColor, pointermoveHandler, pointerupHandler } = this.PRIVATE;

          this.PRIVATE.previousColor = this.PRIVATE.selectedColor;
          this.PRIVATE.selectedColor = currentColor;

          this.emit('change', {
            previous: this.previousColor,
            color: this.selectedColor,
            position: this.position
          });

          document.removeEventListener('pointermove', pointermoveHandler);
          document.removeEventListener('pointerup', pointerupHandler);
        },

        getRelativePosition: evt => {
          let { top, left, width, height } = this.PRIVATE.dimensions;

          return {
            x: Math.min(Math.max(evt.pageX - left, 0), width - .1),
            y: Math.min(Math.max(evt.pageY - top, 0), height)
          }
        }
      });

      this.UTIL.registerListeners(this, {
        connected: () => {
          let { dimensions, draw } = this.PRIVATE;

          this.PRIVATE.initialWidth = dimensions.width;
          this.PRIVATE.initialHeight = dimensions.height;

          draw();
        },

        rendered: () => this.UTIL.registerListener(window, 'resize', evt => this.PRIVATE.draw())
      });

      this.UTIL.registerListeners(this, {
        pointerenter: evt => {
          let { dimensions, draw, initialWidth, initialHeight } = this.PRIVATE;

          if (initialWidth !== dimensions.width || initialHeight !== dimensions.height) {
            draw();
          }
        },

        pointerdown: evt => {
          this.PRIVATE.position = this.PRIVATE.getRelativePosition(evt);

          let { position, getColor, pointermoveHandler } = this.PRIVATE;

          this.PRIVATE.previousColor = this.PRIVATE.selectedColor;
          this.PRIVATE.selectedColor = getColor(position);

          this.emit('change', {
            previous: this.previousColor,
            color: this.selectedColor,
            position: this.position
          });

          document.addEventListener('pointermove', pointermoveHandler);
        }
      });
    }

    get position () {
      let { position, dimensions } = this.PRIVATE;

      return {
        x: {
          px: position.x,
          percentage: this.UTIL.getPercentageDecimal(position.x, dimensions.width)
        },

        y: {
          px: position.y,
          percentage: this.UTIL.getPercentageDecimal(position.y, dimensions.height)
        }
      }
    }

    get previousColor () {
      return this.PRIVATE.generateColorObj(this.PRIVATE.previousColor)
    }

    get selectedColor () {
      return this.PRIVATE.generateColorObj(this.PRIVATE.selectedColor)
    }
  }

  customElements.define('author-color-picker', AuthorColorPickerElement);

  return AuthorColorPickerElement;

}());
//# sourceMappingURL=author-color-picker.js.map
