describe("GET @ /workshop endpoint", () => {
	it("should return all workshop and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/workshop");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

describe("POST @ /workshop/create endpoint", () => {
	it("should create a Publication and return an notice object", async () => {
		try {
			const res = axios.post("http://localhost:5000/workshop/create", {
				topic: "Object Oriented Programming",
				src: "https://firebasestorage.googleapis.com/v0/b/icaf-5ce6c.appspot.com/o/2021S1_REG_WD_07.pdf?alt=media&token=2e8a5df1-c60c-45b2-a1d6-70439ae0049d",
				createdBy: "60b5eaa7c7befb4ea034b3fd",
                createdAt: "2021-06-01T08:23:29.757+00:00",
                isApproved: "approved",
                dueDate :"2021-07-03T16:14:00.000+00:00"
            });
     expect(res.status).toEqual(201);
		} catch (error) {
			console.log(error);
		}
	});
});