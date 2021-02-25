import request from 'supertest'
import { app } from '../app'

import createConnection from '../database'


describe("Users", () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    it("Estou fazendo testes", async () => {
        const response = await request(app).post("/users").send({
            email: "user@exemplo.com",
            name: "user exemplo"
        })

        expect(response.status).toBe(201)  
    })

    it("Should not be able to create a user with exist email", async () => {
        const response = await request(app).post("/users").send({
            email: "user@exemplo.com",
            name: "user exemplo"
        })
     
        expect(response.status).toBe(400) 
    })
})

// beforeAll(async () => {
//     const connection = await createConnection()
//     await connection.runMigrations()
// })

// it("Should be able to create a new user", async () => {
//     const response = await request(app).post("/users").send({
//         email: "user@ec.com",
//         name: "exemplo"
//     })
//     expect(response.status).toBe(201)  
// })

// it("Should not be able to create a user with exist email", async () => {
//     const response = await request(app).post("/users").send({
//         email: "user@ec.com",
//         name: "exemplo"
//     })

//     expect(response.status).toBe(400) 
// })

