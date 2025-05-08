# TypeScript Assignment

## Project Run Command

```bash
ts-node src/index.ts
```

### 1. Differences between `interface` and `type` in TypeScript

In TypeScript, both `interface` and `type` can be used to describe the shape of objects.

- `interface` supports declaration merging, but `type` does not.
- `type` can represent unions, intersections, tuples, and primitives, while `interface` is mainly used for object shapes.

--- b

### 2. Use of the `keyof` Keyword in TypeScript

The `keyof` keyword is a TypeScript operator that extracts the keys of a given object type and returns them as a union of string literal types.

- It helps build type-safe functions by restricting allowed property names.
- Ensures compile-time validation when accessing object properties.

---
