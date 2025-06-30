import express from 'express'

const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('hello world 2')
})

app.listen(port)

console.log(`estou rodando na porta ${port}`)
