import * as express from 'express'
import * as dotenv from 'dotenv'

import * as mongodb from './databases/mongo'
import { routes } from './routes'

dotenv.config({ path: `${__dirname}/.env` })

const app: express.Application = express()
const port: number = Number(process.env.PORT)

mongodb.connect()

app.use('/', routes(express.Router()))

app.listen(port, () => {
  console.info(`G-Demo listening at http://localhost:${port}`)
})
