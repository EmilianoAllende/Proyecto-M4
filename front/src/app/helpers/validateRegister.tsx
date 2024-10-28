export const validateRegisterForm = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const errors = {
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  
    if (!data.name) {
      errors.nameError = "Name is required.";
    }
  
    if (!data.email) {
      errors.emailError = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.emailError = "Invalid email address.";
    }
  
    if (!data.password) {
      errors.passwordError = "Password is required.";
    } else if (data.password.length < 6) {
      errors.passwordError = "Password must be at least 6 characters long.";
    }
  
    if (data.password !== data.confirmPassword) {
      errors.confirmPasswordError = "Passwords do not match.";
    }
  
    return errors;
  };