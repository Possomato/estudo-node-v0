import express from 'express'

const app = express()
const port = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world 2')
})

app.post('/product', (req, res) => {
  const product = (req.body)

  res.send(product)
})

app.listen(port)

console.log(`estou rodando na porta ${port}`)
