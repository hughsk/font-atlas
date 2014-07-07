var atlas = require('./')

document.body.appendChild(atlas({
  family: 'Helvetica'
  , size: 21
  , shape: [512, 512]
  , step: [51, 51]
}))
