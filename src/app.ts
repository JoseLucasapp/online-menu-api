import express from 'express'
import cors from 'cors'

import { addressRoutes } from './routes/Address.routes'
import { restaurantRoutes } from './routes/Restaurant.routes'

const app = express()

app.use(express.json())
app.use(cors())
app.use(addressRoutes)
app.use(restaurantRoutes)


export default app
