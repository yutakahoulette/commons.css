const h = require('snabbdom/h')
const code = require('./code')

module.exports = 
  h('div', [
   code(
`.relative { position: relative }
.absolute { position: absolute }
.fixed    { position: fixed }

.top-0    { top: 0 }
.right-0  { right: 0 }
.bottom-0 { bottom: 0 }
.left-0   { left: 0 }

.z-1 { z-index: 1 }
.z-2 { z-index: 2 }
.z-3 { z-index: 3 }
.z-4 { z-index: 4 }

.fit-absolute {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}`, 'css')
  ])

