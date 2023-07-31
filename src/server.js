import express from 'express'
import 'dotenv/config'
import { userRoutes } from './routes/userRoutes.js'

const app = express()
const port = process.env.PORT || 8080

app.use("/user", userRoutes)

app.listen(port, () => console.log(`Running on port ${port}...`))