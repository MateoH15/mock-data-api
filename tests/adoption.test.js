import request from "supertest";
import app from "../app.js";

describe("Adoption Router", () => {
  it("GET /api/adoption should return adoption endpoint", async () => {
    const res = await request(app).get("/api/adoption");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Adoption endpoint");
  });
});
