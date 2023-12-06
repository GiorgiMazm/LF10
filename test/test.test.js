import { describe, test, expect } from "vitest";
import { tester } from "../src/composables/test";

test("should insert form into collection", async () => {
  const number = tester();
  expect(number).toEqual(4);
});
