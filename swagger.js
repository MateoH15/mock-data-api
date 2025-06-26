import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "Mock API", version: "1.0.0" },
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            first_name: { type: "string" },
            last_name: { type: "string" },
            email: { type: "string" },
            password: { type: "string" },
            role: { type: "string" },
            pets: { type: "array", items: { type: "string" } },
          },
        },
        Pet: {
          type: "object",
          properties: {
            name: { type: "string" },
            species: { type: "string" },
            age: { type: "integer" },
            adopted: { type: "boolean" },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
