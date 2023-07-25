const app = require('./app')
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello again!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
