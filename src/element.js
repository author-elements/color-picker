class AuthorColorPickerElement extends AuthorSliderElement {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

    // Override AuthorSliderElement defaults
    this.PRIVATE.defaultAxis = '*'

    this.PRIVATE.pointerupHandler = evt => {
      let { generateColorObject, generatePositionObject, handles, pointermoveHandler, pointerupHandler } = this.PRIVATE
      let reposition = true

      // this.PRIVATE.previousColor = this.PRIVATE.selectedColor
      // this.PRIVATE.selectedColor = currentColor

      let position = null

      if (handles.length > 1) {
        reposition = false
      } else if (handles.length !== 0) {
        handles.item(0).position = position = generatePositionObject()
      }

      if (reposition) {
        this.emit('change', {
          // previous: this.previousColor,
          color: generateColorObject(),
          position: position || generatePositionObject()
        })
      }

      document.removeEventListener('pointermove', pointermoveHandler)
      document.removeEventListener('pointerup', pointerupHandler)
    }

    this.PRIVATE.pointermoveHandler = evt => {
      if (evt.buttons < 1) {
        return
      }

      let { getPercentageDecimal } = this.UTIL
      let { generateColorObject, generatePositionObject, handles, position } = this.PRIVATE
      let relative = this.PRIVATE.getRelativePosition(evt)

      if ((!this.position.x || relative.x !== position.x) || (!this.position.y || relative.y !== position.y)) {
        this.PRIVATE.setSampledColor(relative)
        this.PRIVATE.position = relative

        if (handles.length !== 0) {
          handles.item(0).position = this.position
        }

        this.emit('slide', {
          color: generateColorObject(),
          position: generatePositionObject()
        })
      }
    }

    this.UTIL.defineProperties({
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
    })

    this.UTIL.defineAttributes({
      mode: this.PRIVATE.defaultMode,
      orientation: this.PRIVATE.defaultOrientation
    })

    this.UTIL.definePrivateMethods({
      update: () => {
        let { hue, saturation, value, HSVToRGB, setHandlePosition } = this.PRIVATE

        switch (this.mode) {
          case 'default':
            this.UTIL.setStyleProperty('bgColorRule', 'background-color', `rgba(${HSVToRGB(hue, 100, 100).join(', ')}, 1)`)

            return setHandlePosition({
              x: { pct: saturation / 100 },
              y: { pct: 1 - (value / 100) }
            })

          case 'hue': return setHandlePosition({
            x: { pct: hue / 360 }
          })
        }
      },

      setHandlePosition: position => {
        let { handles } = this.PRIVATE

        if (handles.length === 1) {
          handles.item(0).position = position
        }
      },

      generateColorObject: (h = this.PRIVATE.hue, s = this.PRIVATE.saturation, v = this.PRIVATE.value) => {
        let { alpha, HSVToRGB } = this.PRIVATE

        let rgb = HSVToRGB(h, s, v)
        let r = rgb[0]
        let g = rgb[1]
        let b = rgb[2]

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
        let [ , short, long ] = String(hex).match(/^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i) || []
        let rgb

        if (short) {
          return Array.from(short, s => Number.parseInt(s, 16)).map(n => (n << 4) | n)
        }

        let value = Number.parseInt(long, 16)
        return [ value >> 16, value >> 8 & 0xFF, value & 0xFF ]
      },

      HSVToRGB: (h = this.PRIVATE.hue, s = this.PRIVATE.saturation, v = this.PRIVATE.value) => {
        h = Math.max(0, Math.min(360, h))
        s = Math.max(0, Math.min(100, s)) / 100
        v = Math.max(0, Math.min(100, v)) / 100

        let f = n => {
          let k = (n + h / 60) % 6
          return v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
        }

        return [f(5) * 255, f(3) * 255, f(1) * 255]
      },

      RGBToHex: (r, g, b) => {
        let unitToHex = unit => {
          let hex = Number(unit).toString(16)

          if (hex.length < 2) {
            hex = `0${hex}`
          }

          return hex.toUpperCase()
        }

        return `${unitToHex(r)}${unitToHex(g)}${unitToHex(b)}`
      },

      RGBToHSV: (r, g, b) => {
        r /= 255, g /= 255, b /= 255

        let max = Math.max(r, g, b)
        let min = Math.min(r, g, b)

        let h, s, v = max
        let diff = max - min
        s = max === 0 ? 0 : diff / max

        if (max === min) {
          h = 0
        } else {
          switch (max) {
            case r:
              h = 60 * (0 + ((g - b) / diff))
              break

            case g:
              h = 60 * (2 + ((b - r) / diff))
              break

            case b:
              h = 60 * (4 + ((r - g) / diff))
              break
          }

          h = h < 0 ? h + 360 : h
        }

        return [h, s * 100, v * 100]
      },

      setSampledColor: (position, percentage = false) => {
        let { getPercentageDecimal } = this.UTIL

        switch (this.mode) {
          case 'default':
            this.PRIVATE.saturation = getPercentageDecimal(position.x, this.clientWidth) * 100
            this.PRIVATE.value = 100 - (getPercentageDecimal(position.y, this.clientHeight) * 100)
            break

          case 'hue':
            this.PRIVATE.hue = this.orientation === 'horizontal'
              ? getPercentageDecimal(position.x, this.clientWidth) * 360
              : getPercentageDecimal(position.y, this.clientHeight) * 360

            this.PRIVATE.saturation = 100
            this.PRIVATE.value = 100
            break
        }
      },

      setRGB: (r, g, b) => {
        let hsv = this.PRIVATE.RGBToHSV(r, g, b)

        this.PRIVATE.hue = hsv[0]
        this.PRIVATE.saturation = hsv[1]
        this.PRIVATE.value = hsv[2]

        this.PRIVATE.update()
      }
    })

    this.UTIL.registerListeners(this, {
      'attribute.change': evt => {
        let { attribute, oldValue, newValue } = evt.detail

        if (newValue === oldValue) {
          return
        }

        let { defaultMode, validModes } = this.PRIVATE

        switch (attribute) {
          case 'mode':
            let arr = newValue.split(' ').filter(mode => validModes.includes(mode))

            if (!arr.length) {
              this.setAttribute('mode', defaultMode)

              return this.UTIL.throwError({
                message: `Invalid mode "${newValue}". Valid values include: "${validModes.join('", "')}"`
              })
            }

            return this.PRIVATE.update()
        }
      },

      connected: () => {
        // Remove default author-slider pointerdown handler
        this.removeEventListener('pointerdown', this.PRIVATE.pointerdownHandler)

        // Reset AuthorSliderElement defaults
        if (!this.hasAttribute('axis')) {
          this.axis = this.PRIVATE.defaultAxis
        }

        this.UTIL.insertStyleRules({
          bgColorRule: ':host {}'
        })

        this.PRIVATE.update()
      },

      pointerdown: evt => {
        this.PRIVATE.position = this.PRIVATE.getRelativePosition(evt)

        let { getPercentageDecimal } = this.UTIL
        let { generateColorObject, generatePositionObject, handles, HSVToRGB, hue, pointermoveHandler, pointerupHandler, position } = this.PRIVATE

        if (handles.length > 1) {
          return
        }

        this.PRIVATE.setSampledColor(position)

        if (handles.length !== 0) {
          handles.item(0).position = this.position
        }

        this.emit('change', {
          color: generateColorObject(),
          position: generatePositionObject()
        })

        document.addEventListener('pointerup', pointerupHandler)
        document.addEventListener('pointermove', pointermoveHandler)
      }
    })
  }

  static get observedAttributes () {
    return [...AuthorSliderElement.observedAttributes, 'mode', 'orientation']
  }

  get position () {
    return this.PRIVATE.generatePositionObject()
  }

  get hue () {
    return this.PRIVATE.hue
  }

  set hue (val) {
    val = Math.max(0, Math.min(360, val))
    this.PRIVATE.hue = val === 360 ? 0 : val
    this.PRIVATE.update()
  }

  get rgb () {
    return this.PRIVATE.HSVToRGB()
  }

  set rgb ({r = 0, g = 0, b = 0}) {
    this.PRIVATE.setRGB(Math.min(r, 255), Math.min(g, 255), Math.min(b, 255))
  }

  set red (val) {
    let rgb = this.PRIVATE.HSVToRGB()
    this.PRIVATE.setRGB(Math.min(val, 255), ...rgb.slice(1))
  }

  set r (val) {
    this.red = val
  }

  set green (val) {
    let rgb = this.PRIVATE.HSVToRGB()
    this.PRIVATE.setRGB(rgb[0], Math.min(val, 255), rgb[2])
  }

  set g (val) {
    this.green = val
  }

  set blue (val) {
    let rgb = this.PRIVATE.HSVToRGB()
    this.PRIVATE.setRGB(...rgb.slice(-2), Math.min(val, 255))
  }

  set b (val) {
    this.blue = val
  }

  // set alpha (val) {
  //   console.log(val)
  // }

  // set a (val) {
  //   console.log(val)
  // }

  get hex () {
    return `#${this.PRIVATE.RGBToHex(...this.PRIVATE.HSVToRGB())}`
  }

  set hex (val) {
    this.PRIVATE.setRGB(...this.PRIVATE.hexToRGB(val))
  }

  set saturation (val) {
    this.PRIVATE.saturation = Math.max(0, Math.min(100, val))
    this.PRIVATE.update()
  }

  set s (val) {
    this.saturation = val
  }

  set value (val) {
    this.PRIVATE.value = Math.max(0, Math.min(100, val))
    this.PRIVATE.update()
  }

  set v (val) {
    this.value = val
  }

  set hsv ({ h, s, v }) {
    h = Math.max(0, Math.min(360, h))
    this.PRIVATE.hue = h === 360 ? 0 : h
    this.PRIVATE.saturation = Math.max(0, Math.min(100, s))
    this.PRIVATE.value = Math.max(0, Math.min(100, v))
    this.PRIVATE.update()

  }

  // set lightness (val) {
  //   console.log(val);
  // }

  // set hsl ({ h, s, l }) {
  //   console.log(h, s, l)
  // }
}

customElements.define('author-color-picker', AuthorColorPickerElement)

export default AuthorColorPickerElement
