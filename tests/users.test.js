import request from "supertest";
import app from "../app.js";

describe("Users Router", () => {
  it("GET /api/users should return an array", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
