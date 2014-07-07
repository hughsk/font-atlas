var defaultChars = [32, 126]

module.exports = atlas

function atlas(options) {
  options = options || {}

  var canvas = options.canvas || document.createElement('canvas')
  var family = options.family || 'monospace'
  var shape  = options.shape || [512, 512]
  var step   = options.step || [32, 32]
  var size   = options.size || 16
  var chars  = options.chars || defaultChars

  if (typeof size === 'number') {
    size = size + 'px'
  }

  if (!Array.isArray(chars)) {
    chars = String(chars).split('')
  } else
  if (chars.length === 2
    && typeof chars[0] === 'number'
    && typeof chars[1] === 'number'
  ) {
    var newchars = []

    for (var i = chars[0], j = 0; i <= chars[1]; i++) {
      newchars[j++] = String.fromCharCode(i)
    }

    chars = newchars
  }

  shape = shape.slice()
  canvas.width  = shape[0]
  canvas.height = shape[1]

  var ctx = canvas.getContext('2d')

  ctx.fillStyle = '#000'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.font = size + ' ' + family
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#fff'

  var x = step[0] / 2
  var y = step[1] / 2
  for (var i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], x, y)
    if ((x += step[0]) > shape[0] - step[0]/2) (x = step[0]/2), (y += step[1])
  }

  return canvas
}