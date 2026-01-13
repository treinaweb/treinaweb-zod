import z from "zod";

const jsonSchema = {
  type: "object",
  properties: {
    name: { type: "string"},
    age: { type: "number", minimun: 18 },
  },
  required: ["name"],
};

type FromJSONSchemaInput = Parameters<typeof z.fromJSONSchema>[0];

export const UserFromJson = z.fromJSONSchema(jsonSchema as FromJSONSchemaInput);

export type User2 = z.infer<typeof UserFromJson>; 