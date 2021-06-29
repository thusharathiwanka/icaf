const axios = require("axios");

describe("POST @ /attendee endpoint", () => {
	it("should create a attendee and return an id", async () => {
		try {
			const res = axios.post("http://localhost:5000/attendee", {
				firstName: "Thushara",
				lastName: "Thiwanka",
				username: "thushara123",
				password: "thiwanka123",
				email: "thiwanka123@gmail.com",
				contactNumber: "0764343434",
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /attendee endpoint", () => {
	it("should return an array and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/attendee");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /attendee/my endpoint", () => {
	it("should return an attendee and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/attendee/my");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});
