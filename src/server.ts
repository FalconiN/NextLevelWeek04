import express from 'express'

const app = express()

//http://localhost:3333/users
app.get("/", (req, res) => {
    return res.json({ message: "ola" })
})


app.post('/', (req, res) => {
    // recebeu os dados para salvar
    return res.json({ message: "os dados foram salvos"})
})

app.listen('3333', () => {
    console.log('server is running')
})