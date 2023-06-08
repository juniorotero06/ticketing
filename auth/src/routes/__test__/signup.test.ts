import request from "supertest";
import { Server } from "../../server";

const server = Server.getInstance();
const app = server.getApp();

it("returns a 201 on successful signup", async () => {
  const response = await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "123456",
  });

  console.log(response.body); // Imprime la respuesta obtenida

  expect(response.status).toBe(201);
});

it("returns a 400 with an invalid email", async () => {
  const response = await request(app).post("/api/users/signup").send({
    email: "test",
    password: "123456",
  });

  console.log(response.body); // Imprime la respuesta obtenida

  expect(response.status).toBe(400);
});

it("returns a 400 with an invalid password", async () => {
  const response = await request(app).post("/api/users/signup").send({
    email: "test@test.com",
    password: "1",
  });

  console.log(response.body); // Imprime la respuesta obtenida

  expect(response.status).toBe(400);
});

it("returns a 400 with missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com" })
    .expect(400);

  await request(app)
    .post("/api/users/signup")
    .send({ password: "asdikasd" })
    .expect(400);
});

it("disallows duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(400);
});

it("sets a cookie after succesful singup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({
      email: "test@test.com",
      password: "123456",
    })
    .expect(201);

  expect(response.get("Set-Cookie")).toBeDefined();
});
