const axios = require("axios");

describe("POST @ /Notice endpoint", () => {
	it("should create a Notice and return an notice object", async () => {
		try {
			const res = axios.post("http://localhost:5000/notice", {
				createdBy: "60b00107e0a4e82e5810018f",
				isApproved: "Approved",
				topic: "Topic 01",
				content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi enim, luctus id velit eget, hendrerit sodales lectus. Mauris eleifend, justo a posuere auctor, risus massa malesuada leo, a feugiat nisl purus sed velit. Curabitur a diam facilisis, ultricies lectus ut, venenatis arcu. Cras tincidunt, est eu vulputate congue, erat felis suscipit lorem, et ultricies ligula nisl quis est. Nam at massa augue. Sed fermentum arcu at tortor tempus, quis posuere metus imperdiet. Sed euismod molestie nibh, porttitor ultrices massa maximus eget. Fusce malesuada accumsan diam, nec laoreet urna lobortis blandit.",
			});

			expect(res.status).toEqual(200);
		} catch (error) {
			console.log(error);
		}
	});
});

describe("GET @ /notice endpoint", () => {
	it("should return all notices and return status code 200", async () => {
		try {
			const res = axios.get("http://localhost:5000/notice");

			expect(res.status).toEqual(200);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});

describe("DELETE@/Delete a notice by id ", () => {
    it('should resond with a 409 status code (wrong id)', async () => {
        try {
            const res = axios.delete("http://localhost:5000/notice/3")
            expect(res.status).toEqual(409)
        } catch (error) {
            console.log(error);
        }
    });
});


describe("PUT@/ Update a notice by id ", () => {
    it('should resond with a 409 status code (wrong id)', async () => {
        try {
            const res = axios.put("http://localhost:5000/notice/4546")
            expect(res.status).toEqual(409)
        } catch (error) {
            console.log(error);
        }
    });
});


describe("GET @ /notice/approval/:isApproved endpoint", () => {
	it("should return all notices according to approval type and return status code 202", async () => {
		try {
			const res = axios.get("http://localhost:5000/notice/Approved");

			expect(res.status).toEqual(202);
			expect(typeof res.data).toEqual("Object");
		} catch (error) {
			console.log(error);
		}
	});
});