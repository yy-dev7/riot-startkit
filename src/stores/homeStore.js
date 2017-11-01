class HomeStore {
  constructor() {
    riot.observable(this)

    this.count = 0
  }

  increment() {
    this.count += 1
  }

  decrement() {
    this.count -= 1
  }
}

const instance = new HomeStore()

instance.on('increment', () => {
  instance.increment()
  instance.trigger('count_changed', instance.count)
})

instance.on('decrement', () => {
  instance.decrement()
  instance.trigger('count_changed', instance.count)
})

instance.on('count_init', () => {
  instance.count = 0
  instance.trigger('count_changed', 0)
})

riot.control.addStore(instance)

export default instance
