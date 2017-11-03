<home>
  <img src="{logo}" alt="">
  <hello></hello>
  <button onclick="{ increment }">+</button>
  <span>{ count }</span>
  <button onclick="{ decrement }">-</button>
  <button onclick="{ reset }">reset</button>
  <hr>
  <button onclick="{ go.bind(this, 'page-one') }">go page one</button>
  <button onclick="{ go.bind(this, 'page-two') }">go page two</button>
  <script type="es6">
    import '../components/hello.tag'
    import route from 'riot-route'

    this.logo = require('assets/logo.png')

    this.mixin('controlMixin')

    this.count = 0

    this.onControl('count_changed', (count) => {
      this.count = count
    })

    this.increment = () => {
      riot.control.trigger('increment')
    }

    this.decrement = () => {
      riot.control.trigger('decrement')
    }

    this.reset = () => {
      riot.control.trigger('count_init')
    }

    this.go = (routeName) => {
      route(routeName)
    }
  </script>
</home>

