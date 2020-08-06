describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/api");
    expect(response.statusCode).toBe(200);
  });
});