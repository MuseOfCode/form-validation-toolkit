export class AccessibleFormValidator {
  constructor(options) {
    this.form = document.querySelector(options.form);
    this.validations = options.validations || {};
    this.disableBrowserValidation = options.disableBrowserValidation || false;

    if (this.disableBrowserValidation) {
      console.log("off");
      this.form.setAttribute("novalidate", "");
    }
  }

  required(field) {
    return field.value.trim() !== "";
  }

  email(field) {
    return field.value.includes("@");
  }

  minlength(field, length = 8) {
    console.log(
      `minlength should be: ${field.value} requried length: ${length}`
    );
    return field.value.length >= length;
  }

  maxlength(field, length = 20) {
    return field.value.length <= length;
  }

  submit() {
    console.log("submit function called");
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    Object.keys(this.validations).forEach((id) => {
      const field = this.form.querySelector(`#${id}`);
      const fieldValidations = this.validations[id].rules;
      const errorMessages = this.validations[id].errorMessages;

      for (let validation of fieldValidations) {
        let ruleName, ruleValue;

        if (typeof validation === "object") {
          ruleName = Object.keys(validation)[0]; //name of the atr
          ruleValue = validation[ruleName]; //custom value
        } else {
          console.log("failed");
          ruleName = validation;
          ruleValue = null; // for no custom rule
        }

        if (typeof this[ruleName] === "function") {
          if (!this[ruleName](field, ruleValue)) {
            console.log(errorMessages[ruleName] || `Invalid ${id}`);
            return; // Stop if any rules fail
          }
        } else {
          console.log(`no validation found for rule ${id}`);
        }
      }

      console.log(`${id} is valid`); // only if all validation passes
    });
  }
}
