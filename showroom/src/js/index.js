const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  events: {
    'all-hue-picker': {
      change: hue => Demo.emit('single-hue-picker.change', hue),
      slide: hue => Demo.emit('single-hue-picker.change', hue)
    },

    'single-hue-picker': {
      change: hue => Demo.emit('single-hue-picker.change', hue)
    }
  }
})

const SingleHuePicker = new NGNX.VIEW.Registry({
  parent: Demo,
  selector: '.single-hue.picker',
  namespace: 'single-hue-picker.',

  references: {
    picker: 'author-color-picker',
    selectedSwatch: '.swatch .selected.color',
    previewSwatch: '.swatch .color.preview'
  },

  events: {
    change: hue => SingleHuePicker.ref.picker.element.hue = hue
  },

  init () {
    let { picker, previewSwatch, selectedSwatch } = this.ref
    window.cp1 = picker.element

    picker.on('slide', evt => {
      let { color, position } = evt.detail
      previewSwatch.style.background = color.rgba
    })

    picker.on('change', evt => {
      let { color, position } = evt.detail
      previewSwatch.style.background = color.rgba
      selectedSwatch.style.background = color.rgba
      this.emit('change', picker.element.hue)
    })
  }
})

const AllHuePicker = new NGNX.VIEW.Registry({
  parent: Demo,
  selector: '.all-hue.picker',
  namespace: 'all-hue-picker.',

  properties: {
    suppressEvents: {
      type: Boolean,
      default: false
    }
  },

  references: {
    picker: 'author-color-picker',
    selectedSwatch: '.selected.color',
    previewSwatch: '.color.preview'
  },

  events: {
    change: hue => {
      AllHuePicker.properties.suppressEvents = true
      AllHuePicker.ref.picker.element.hue = hue
    }
  },

  init () {
    let suppressEvents = false

    let { picker, previewSwatch, selectedSwatch } = this.ref
    window.cp2 = picker.element

    this.on({
      set: hue => {
        suppressEvents = true
        picker.element.hue = hue
      }
    })

    picker.on('slide', evt => {
      let { color, position } = evt.detail
      previewSwatch.style.background = color.rgba
      this.emit('slide', picker.element.hue)
    })

    picker.on('change', evt => {
      let { color, position } = evt.detail
      previewSwatch.style.background = color.rgba
      selectedSwatch.style.background = color.rgba

      if (!suppressEvents) {
        console.log('fire change event');
        // this.emit('change', picker.element.hue)
      }

      suppressEvents = false
    })
  }
})
