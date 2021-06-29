const axios = require("axios");

describe("POST @ /presenters endpoint", () => {
	it("should create a presenter and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/presenters", {
				username: "chamath123",
				firstName: "Chamath",
				email: "chamath@gmail.com",
				lastName: "Heshan",
				password: "chamath123",
				university: "SLIIT",
				department: "DS",
				contactNumber: "0777343434",
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /presenter endpoint", () => {
	it("should return an array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/presenter");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /presenter/my endpoint", () => {
	it("should return an presenter and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/presenter/my");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
