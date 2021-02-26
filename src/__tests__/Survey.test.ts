import request from 'supertest'
import {app} from '../app'

import createConnection from '../database'


describe("Survey", () => {
    beforeAll(async () => {
        const connection = await createConnection()
        await connection.runMigrations()
    })

    it("Estou fazendo testes em survey", async () => {
        const response = await request(app).post("/surveys").send({
            title: "Title exemplo",
            desciption: "Description exemplo"
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")  
    })

    
    it("Should be able to get all surveys", async () => {
        await request(app).post("/surveys").send({
            title: "Title exemplo2",
            desciption: "Description exemplo2"
        })

        const response = await request(app).get("/surveys")

        expect(response.body.length).toBe(2)
    })
})

