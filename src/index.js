const m = require('mithril');

const model = {
  count: 0
};

m.mount(document.body, {
  view: () => [
    m('p', model.count),
    m('button', {onclick: () => model.count++} ,'Increase counter'),
    m('button', {onclick: () => model.count--} ,'Decrease counter'),
    m('button', {onclick: () => model.count*=5} ,'Multiply by 5')
  ]
});
