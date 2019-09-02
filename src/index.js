const m = require('mithril');

const model = {
  count: 0
};

const Button = {
  view: vnode => m('button', {
    onclick: () => {
      model.count++
    }
  }, 'Increase counter')
}

m.mount(document.body, {
  view: () => [
    m('p', model.count),
    m(Button, {name: 'Soham'})
  ]
});
