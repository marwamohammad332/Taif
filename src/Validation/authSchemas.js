
import * as yup from "yup";

export const registerSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),

  userName: yup
    .string()
    .trim()
    .required("User Name is required")
    .min(6, "User Name must be at least 6 characters")
    .matches(/^[A-Za-z0-9._]+$/, "Use English letters, numbers, . or _ only"),

  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email format")
    .matches(/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/, "Invalid email format"),

  phoneNumber: yup
    .string()
    .required("Mobile number is required")
    .test(
      "ps-mobile",
      "Enter a valid number, e.g. 59-823-4419",
      (v) => /^5[69]\d{7}$/.test((v || "").replace(/\D/g, "").replace(/^0+/, ""))
    ),

  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain an uppercase letter")
    .matches(/[a-z]/, "Must contain a lowercase letter")
    .matches(/\d/, "Must contain a number")
    .matches(/[^A-Za-z0-9\s]/, "Must contain a symbol (!@#...)"),

  terms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms to continue"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Invalid email format"),

  password: yup
    .string()
    .required("Password is required"),
});