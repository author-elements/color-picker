const Demo = new NGNX.VIEW.Registry({
  selector: '.demo',
  namespace: 'demo.',

  references: {
    swatch: '.selected.color',
    preview: '.color.preview',
    picker: 'author-color-picker',
    target: 'author-color-picker .target'
  },

  init () {
    let { picker, preview, swatch, target } = this.ref
    window.cp = picker.element

    picker.on('sample', evt => {
      let { color, position } = evt.detail

      preview.style.background = color.rgb

      target.element.style.left = `${position.x.percentage * 100}%`
      target.element.style.top = `${position.y.percentage * 100}%`
    })

    picker.on('change', evt => {
      let { color, position } = evt.detail

      swatch.style.background = color.rgb

      target.element.style.left = `${position.x.percentage * 100}%`
      target.element.style.top = `${position.y.percentage * 100}%`
    })
  }
})
