export const validateRegisterForm = (data: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string,
    adress: string
  }) => {
    const errors = {
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
      adressError: "",
      phoneError: "",
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
    } else if (data.password.length < 8) {
      errors.passwordError = "Password must be at least 8 characters long.";
    }

    if (data.password !== data.confirmPassword) {
      errors.confirmPasswordError = "Password does not match.";
    }

    if (!data.adress) {
      errors.adressError = "Adress is required.";
    }

    if (!data.phone) {
      errors.phoneError = "Phone is required.";
    }

    return errors;
  };