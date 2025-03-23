// main.js
import { AccessibleFormValidator } from "./validator.js";

const test = new AccessibleFormValidator({
  form: "form",
  validations: {
    password: {
      rules: [{ minlength: 2 }, "maxlength"],
      errorMessages: {
        minlength: "more than 2 characters",
        maxlength: "less than 20 characters",
      },
    },
  },
  //   disableBrowserValidation: true,
});

test.submit();
console.log(test.validations);
