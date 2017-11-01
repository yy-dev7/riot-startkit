import route from 'riot-route'

class Router {
  constructor() {
    this.currentView = null
    this.defaultView = 'home'
    this.views = ['home', 'page-one', 'page-two']

    route(this._handleRoute.bind(this))
    route.start(true)
  }

  _loadView(view) {
    if (this.currentView) {
      this.currentView.unmount(true)
    }

    this.currentView = riot.mount('#app', view)[0]
  }

  _handleRoute(view) {
    if (this.views.indexOf(view) === -1) {
      return route(this.defaultView)
    }

    return this._loadView(view)
  }
}

export default new Router()
