class AuthorColorPickerElement extends AuthorBaseElement(HTMLElement) {
  constructor () {
    super(`{{TEMPLATE-STRING}}`)

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

      coords: {
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
        default: null
      },

      selectedColor: {
        default: null
      }
    })

    this.UTIL.definePrivateMethods({
      draw: (width, height) => {
        let { canvas, context } = this.PRIVATE

        canvas.width = width
        canvas.height = height
        context.clearRect(0, 0, width, height)

        let gradient = {
          x: context.createLinearGradient(0, 0, width, 0),
          y: context.createLinearGradient(0, 0, 0, height)
        }

        gradient.x.addColorStop(0 / 6, 'red')
        gradient.x.addColorStop(1 / 6, 'fuchsia')
        gradient.x.addColorStop(2 / 6, 'blue')
        gradient.x.addColorStop(3 / 6, 'aqua')
        gradient.x.addColorStop(4 / 6, 'lime')
        gradient.x.addColorStop(5 / 6, 'yellow')
        gradient.x.addColorStop(6 / 6, 'red')

        context.fillStyle = gradient.x
				context.fillRect(0, 0, width, height)

        gradient.y.addColorStop(0 / 4, 'white')
        gradient.y.addColorStop(2 / 4, 'rgba(255,255,255,0)')
        gradient.y.addColorStop(2 / 4, 'rgba(0,0,0,0)')
        gradient.y.addColorStop(4 / 4, 'black')

				context.fillStyle = gradient.y
				context.fillRect(0, 0, width, height)
      }
    })

    this.UTIL.registerListeners(this, {
      connected: () => {
        let { coords, draw } = this.PRIVATE

        this.PRIVATE.initialWidth = coords.width
        this.PRIVATE.initialHeight = coords.height

        draw(coords.width, coords.height)
      }
    })

    this.UTIL.registerListeners(this.PRIVATE.canvas, {
      pointerenter: evt => {
        let { coords, draw, initialWidth, initialHeight } = this.PRIVATE

        if (initialWidth !== coords.width || initialHeight !== coords.height) {
          draw(coords.width, coords.height)
        }
      },

      pointermove: evt => {
        let { context } = this.PRIVATE
        let { data } = context.getImageData(evt.offsetX, evt.offsetY, 1, 1)
        this.PRIVATE.currentColor = `rgb(${data[0]},${data[1]},${data[2]})`
        console.log(this.currentColor);
      }
    })
  }

  get currentColor () {
    return this.PRIVATE.currentColor
  }
}

customElements.define('author-color-picker', AuthorColorPickerElement)

export default AuthorColorPickerElement
