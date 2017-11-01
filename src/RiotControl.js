const _RiotControlApi = ['on', 'one', 'off', 'trigger']

const RiotControl = {
  _stores: [],

  addStore(store) {
    this._stores.push(store)
  },
}

_RiotControlApi.forEach((api) => {
  RiotControl[api] = function apiHandler(...args) {
    this._stores.forEach((el) => {
      // console.log(el[api])
      el[api].apply(null, args)
    })
  }
})

// console.log(RiotControl)
// since riot is auto loaded by ProvidePlugin, merge the control into the riot object
riot.control = RiotControl

// register global tag mixin for using RiotControl
riot.mixin('controlMixin', {
  onControl(signal, func) {
    riot.control.on(signal, func)
    this.on('unmount', () => riot.control.off(signal, func))
  },
})
