import request from "supertest";
import app from "../app.js";

describe("Pets Router", () => {
  it("GET /api/pets should return an array", async () => {
    const res = await request(app).get("/api/pets");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
