import express from 'express'
import cors from 'cors'

import { addressRoutes } from './routes/Address.routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(addressRoutes)


export default app
