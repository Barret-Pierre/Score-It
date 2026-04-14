import { exampleSchema } from "@/schemas/example.schema";

describe("exampleSchema", () => {
  it("valide un objet correct", () => {
    const result = exampleSchema.safeParse({ name: "Alice", score: 85 });
    expect(result.success).toBe(true);
  });

  it("rejette un name vide", () => {
    const result = exampleSchema.safeParse({ name: "", score: 85 });
    expect(result.success).toBe(false);
  });

  it("rejette un score hors limites", () => {
    const result = exampleSchema.safeParse({ name: "Alice", score: 150 });
    expect(result.success).toBe(false);
  });
});
