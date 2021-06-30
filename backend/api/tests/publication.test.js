const axios = require("axios");

describe("POST @ /publication/create endpoint", () => {
	it("should create a Publication and return an notice object", async () => {
		try {
			const res = axios.post("http://localhost:5000/publication/create", {
				topic: "JavaScript Short Circuiting",
				src: "https://cdn.scribbr.com/wp-content/uploads/2020/11/APA-7th-edition-template-student-version.docx",
				createdBy: "60d377cd3f275d860057d348",
                createdAt: "2021-06-01T08:23:29.757+00:00",
                isApproved: "approved",
                isPaid :"false"
            });
     
			expect(res.status).toEqual(201);
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /publication endpoint", () => {
	it("should return all publication and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/publication");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});


describe("GET @ /publication/approved endpoint", () => {
	it("should return all approved publication and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/publication/approved");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});