// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('viewengines', 'handlebars')

app.get('/', (req, res) => {
  res.send('<h1>test<\h1>')
})

//start and listen on Express server
app.listen(port, () => {
  console.log(`Express is listen on localhost:${port}`)
})

