import { createHello } from "../index";
test("test sample", () => {
  const sampleText = "Test";
  expect(createHello(sampleText)).toBe("Hello Test!");
});
