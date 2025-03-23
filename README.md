# Accessible Form Validation Toolkit

This is a **form validation toolkit** that aims to provide an accessible, user-friendly approach to form validation. The project was developed to deepen my understanding of form validation and to create a robust, accessible and customisable form validation library that I can use in my own projects and potentially share with others in the future.

## Features

- **Customisable Validation Rules**: Allows you to define rules such as required fields, email format, minlength and maxlength. More will be added as I continue working on this project.
- **Error Messages**: Customise error messages for each validation rule to give clear feedback to users.
- **Accessible**: Being developed with accessibility in mind to provide a better experience for users with disabilities.
- **Disable Browser Validation**: Option to disable browser's default form validation for a more consistent experience across browsers.

## Installation

### 1. Clone the Repository

First, clone or download this repository to your local machine.

```bash
git clone https://github.com/MuseOfCode/form-validation-toolkit.git
cd form-validation-toolkit
```
### 2. Install Dependencies

Run the following command to install any required dependencies.

```bash
npm install
```

### 3. Include the Script

#### In your HTML:
Add the following script tag to include the JavaScript file in your project.

```html
<script src="path/to/AccessibleFormValidator.js"></script>
```

#### Or in your JavaScript (if using a bundler like Webpack or Parcel):

```javascript
import { AccessibleFormValidator } from './path/to/AccessibleFormValidator.js';
```

## Usage

### Setting Up Form Validation

Here’s an example of how to use the **AccessibleFormValidator**, please keep in mind this is still a work in progress:

```javascript
const formValidator = new AccessibleFormValidator({
  form: 'form', // The form element (can be a CSS selector or DOM element)
  validations: {
    email: {
      rules: ['required', 'email'],
      errorMessages: {
        required: 'Email is required',
        email: 'Please enter a valid email address',
      }
    },
    password: {
      rules: [{ minlength: 8 }, 'maxlength'],
      errorMessages: {
        minlength: 'Password must be at least 8 characters long',
        maxlength: 'Password cannot exceed 20 characters',
      }
    }
  },
  disableBrowserValidation: true, // Optional: Disable browser's default validation
});
```

### Example HTML Form

Here’s an example form that uses the validation rules:

```html
<form id="myForm">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  <br>
  
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <br>
  
  <button type="submit">Submit</button>
</form>
```

### Accessibility Considerations 

- **Clear Error Messages**: All validation error messages are customisable and can be adapted to suit the needs of users with disabilities.
- **Keyboard Accessibility**: The form will be designed to be fully navigable using the keyboard, ensuring that it’s accessible for users who may rely on keyboard navigation.
- **Focus Management**: You can further enhance focus management to make sure that users are guided to the fields that need attention.

## Future Development

As this project evolves, I plan to:

- Expand the validation rules and features.
- Ensure compatibility with more form elements and dynamic form scenarios.
- Continuously improve accessibility to meet WCAG standards.
- Provide detailed documentation and examples.

Feel free to contribute or fork the project for your own use. If you want to check it out or try it in your projects, just clone and follow the steps above to install and use it.
