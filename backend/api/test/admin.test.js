const axios = require('axios');

describe("GET @/get all pending notices",()=>{
    it('should resond json object', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/notice/pending")
            expect(res.status).toEqual(200)
            expect(res.headers['content-type']).toEqual(expect.stringContaining("json"))
        }catch(error){
            console.log(error);
        }
    });
})

describe("GET @/get attendee count",()=>{
    it('should resond with a 200 status code', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/attendeecount")
            expect(res.status).toEqual(200)
        }catch(error){
            console.log(error);
        }
    });
})

describe("GET @/get researchers count",()=>{
    it('should resond with a 200 status code', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/researcherscount")
            expect(res.status).toEqual(200)
        }catch(error){
            console.log(error);
        }
    });
})

describe("GET @/get presenters count",()=>{
    it('should resond with a 200 status code', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/presenterscount")
            expect(res.status).toEqual(200)
        }catch(error){
            console.log(error);
        }
    });
})

describe("PATCH @/change notice state to reject ",()=>{
    it('should resond with a 400 status code (wrong id)', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/reject/123")
            expect(res.status).toEqual(400)
        }catch(error){
            console.log(error);
        }
    });
})

describe("PATCH @/change notice state to approve ",()=>{
    it('should resond with a 400 status code (wrong id)', async()=>{
        try{
            const res = axios.get("http://localhost:5000/admin/accept/123")
            expect(res.status).toEqual(400)
        }catch(error){
            console.log(error);
        }
    });
})

