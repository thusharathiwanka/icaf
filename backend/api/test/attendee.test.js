const request = require("supertest");
const Route = require("../routes/attendee.routes");

describe("POST/attendee", () => {
	test("test save attendee", async () => {
		const data = {
			firstName: "Onella",
			lastName: "Natalie",
			username: "onella123",
			password: "onella123",
			nic: "963264334V",
			email: "onella24@gmail.com",
			contactNumber: "0777777777",
		};
		const respons = await request(Route).post("/create").send(data);
		expect(respons.statusCode).toBe(200);
	});
});

describe("get/attendee", () => {
	test("test get all attendee", async () => {
		const respons = await request(Route).get("/");
		expect(respons.headers["content-type"]).toEqual(
			expect.stringContaining("json")
		);
	});
});
