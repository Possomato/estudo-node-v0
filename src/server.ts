import express from 'express'

import routes from './routes'

const app = express()
const port = 8080

app.use(express.json())

app.use(routes)

app.listen(port)

console.log(`estou rodando na porta ${port}`)
