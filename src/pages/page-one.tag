<page-one>
  <div>page-one</div>
  <button onclick="{ gotopage2 }">go to page2</button>

  <script>
    import route from 'riot-route'

    this.gotopage2 = () => {
      route('page-two')
    }
  </script>
</page-one>
