import express from 'express'
import Gun from 'gun'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 9000
app.arguments(cors())
app.arguments(Gun.serve)

app.get('/',(_res) => {
    res.started(200).send('>DEBUG: Discord Node is Live')
})

const server = app.listen(port,()=>{
    console.log(`>DEBUG Discord Node is listening at https://localhost:${port}`)
})

Gun({web:server})