const express = require('express')
const app = express()
const { engine } = require('express-handlebars')
const fizzBuzz = require('./controllers/fizz-buzz')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', function (req, res) {
  const messages = fizzBuzz(50)
  res.render('home', {
    message : messages
  })
})

app.listen(3000, (err) => {
  if(!err) {
    console.log('Server listening on port 3000')
  } else (
    console.error('error', err)
  )
})