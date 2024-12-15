export class Validator {
  // Validates an email
  static isEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Validates a phone number (supports international and US formats)
  static isPhoneNumber(phone: string): boolean {
    // Regex to validate international and US phone number formats
    const phoneRegex = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d*)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i

    // Strip non-numeric characters to validate the digit count
    const digitsOnly = phone.replace(/[^\d]/g, "");

    // Ensure the number contains at least 10 digits (for standard phone numbers)
    if (digitsOnly.length < 10) {
      return false;
    }

    // Validate the structure of the phone number using the regex
    return phoneRegex.test(phone);
  }

  // Validates a string against a custom regex pattern
  static matchesPattern(input: string, pattern: RegExp): boolean {
    return pattern.test(input);
  }
}
