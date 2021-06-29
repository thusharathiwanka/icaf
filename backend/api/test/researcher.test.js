const axios = require("axios");

describe("POST @ /researcher endpoint", () => {
	it("should create a researcher and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/researcher", {
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

describe("GET @ /researcher endpoint", () => {
	it("should return an array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/researcher");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /researcher/my endpoint", () => {
	it("should return an researcher and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/researcher/my");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
