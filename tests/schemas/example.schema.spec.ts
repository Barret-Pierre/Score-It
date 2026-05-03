import { exampleSchema } from '@/schemas/example.schema';

describe('exampleSchema', () => {
  it('should validate the correct schema', () => {
    const result = exampleSchema.safeParse({ name: 'Alice', score: 85 });
    expect(result.success).toBe(true);
  });

  it('should prevent an empty name', () => {
    const result = exampleSchema.safeParse({ name: '', score: 85 });
    expect(result.success).toBe(false);
  });

  it('should prevent an out of bounds score', () => {
    const result = exampleSchema.safeParse({ name: 'Alice', score: 150 });
    expect(result.success).toBe(false);
  });
});
