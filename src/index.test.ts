import { Validator } from "./index";

describe("Validator", () => {
  test("isEmail validates correct emails", () => {
    expect(Validator.isEmail("test@example.com")).toBe(true);
    expect(Validator.isEmail("invalid-email")).toBe(false);
  });

  test("isPhoneNumber validates phone numbers", () => {
    // Valid phone numbers
    expect(Validator.isPhoneNumber("+1448017791549")).toBe(true); // International format (fixed)
    expect(Validator.isPhoneNumber("123-456-7890")).toBe(true); // US style with dashes
    expect(Validator.isPhoneNumber("(123) 456-7890")).toBe(true); // US style with parentheses
    expect(Validator.isPhoneNumber("123 456 7890")).toBe(true); // US style with spaces
    expect(Validator.isPhoneNumber("123.456.7890")).toBe(true); // US style with dots

    // Invalid phone numbers
    expect(Validator.isPhoneNumber("12345")).toBe(false); // Too short
    expect(Validator.isPhoneNumber("abcdef")).toBe(false); // Not numeric
    expect(Validator.isPhoneNumber("+1-abc-1234567")).toBe(false); // Letters in number
    expect(Validator.isPhoneNumber("123-45-6789")).toBe(false); // Too short
    expect(Validator.isPhoneNumber("(123)456")).toBe(false); // Incomplete
  });

  test("matchesPattern validates custom patterns", () => {
    const pattern = /^[A-Z]+$/; // Only uppercase letters
    expect(Validator.matchesPattern("HELLO", pattern)).toBe(true);
    expect(Validator.matchesPattern("Hello", pattern)).toBe(false);
  });
});
