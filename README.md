# validator-util
Validator Utilities

```typescript
import { Validator } from "@lehidev/validator-util";

console.log(Validator.isEmail("test@example.com")); // true
console.log(Validator.isEmail("testexample.com")); // false
console.log(Validator.isPhoneNumber("+12345678901")); // true
console.log(Validator.isPhoneNumber("123456")); // false
console.log(Validator.matchesPattern("HELLO", /^[A-Z]+$/)); // true
console.log(Validator.matchesPattern("hello", /^[A-Z]+$/)); // false
```
