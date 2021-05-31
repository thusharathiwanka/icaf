const request = require('supertest');
const Route = require('../api/routes/presenter.routes')

describe("POST/presenter",() => {

    test("test save presenter", async () => {
        const data = {
            userName:"onella1",
            firstName:"Onella",
            lastName:"Natalie",
            password:"onella1",
            nic:"9574343443V",
            qualifications:[
                "Bsc in SE",
                "Bsc in IT"
            ],
            university:"SLIIT",
            department:"SE"
        }
        const respons = await  request(Route).post('/create').send(data)
        expect(respons.statusCode).toBe(200)
    })
})

describe("GET/presenter",() => {

    test("test get all presenters", async () => {        
        const respons = await  request(Route).get('/')
        expect(respons.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
})