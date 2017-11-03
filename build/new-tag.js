const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const args = process.argv.slice(2)

const type = args[0]
const name = args[1]

const dir = path.join(__dirname, '..', `src/${type}/${name}`)
const tag =
`<${name}>
  <link rel="stylesheet" href="./${name}.css">

  <script>
  </script>
</${name}>`

fs.mkdir(dir, 0777, function(err) {
  if (err) throw err

  fs.writeFile(`${dir}/${name}.css`, '', 'utf8', function(err) {
    if (err) throw err
  })

  fs.writeFile(`${dir}/${name}.tag`, tag, 'utf8', function(err) {
    if (err) throw err
  })

  console.log(chalk.cyan('  模版创建成功.\n'))
})
