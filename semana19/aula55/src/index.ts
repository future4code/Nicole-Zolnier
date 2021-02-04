import express from 'express'
import cors from 'cors'
import { userRouter } from './controller/router/userRouter'
import { taskRouter } from './controller/router/taskRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/user', userRouter)
app.use('/task', taskRouter)

app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})