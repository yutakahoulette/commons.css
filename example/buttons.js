import h from 'snabbdom/h'

module.exports = _ =>    
  h('div', [
    h('h2', 'Buttons')
  , h('div', [
      h('button', 'Click Me')
    , h('pre.ml1.inline', '<button>')
    ])
  , h('div.mt3', [
      h('button.btn--main', 'Click Me')
    , h('pre.ml1.inline', "<button class='btn--main'>")
    ])
  , h('div.mt3', [
      h('button.btn--danger', 'Click Me')
    , h('pre.ml1.inline', "<button class='btn--danger'>")
    ])
  , h('div.mt3', [
      h('button.btn--edit', 'Click Me')
    , h('pre.ml1.inline', "<button class='btn--edit'>")
    ])
  , h('div.mt3', [
      h('button', {props: {disabled : true}}, 'Click Me')
    , h('pre.ml1.inline', '<button disabled>')
    ])
  , h('p.mt3', 'To change button styles, just add utility classes:')
  , h('div.mt3', [
      h('button.p2.h2', 'Click Me')
    , h('pre.ml1.inline', "<button class='p2 h2'>")
    ])
  , h('div.mt3', [
      h('button.small', 'Click Me')
    , h('pre.ml1.inline', "<button class='small'>")
    ])
  ])

