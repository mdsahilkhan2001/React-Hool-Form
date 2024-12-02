import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema with at least 3 characters for names and valid email
const schema = yup.object({
  firstName: yup
    .string()
    .min(3, "First name must be at least 3 characters")
    .required("First name is required"),
  middleName: yup
    .string()
    .nullable()
    .min(3, "Middle name must be at least 3 characters"),
  lastName: yup
    .string()
    .min(3, "Last name must be at least 3 characters")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
});

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Registration Form</h2>

      {/* First Name Field */}
      <div>
        <label>First Name:</label>
        <input {...register("firstName")} placeholder="Enter your first name" />
        {errors.firstName && <p style={{ color: "orange" }}>{errors.firstName.message}</p>}
      </div>

      {/* Middle Name Field */}
      <div>
        <label>Middle Name:</label>
        <input {...register("middleName")} placeholder="Enter your middle name (optional)" />
        {errors.middleName && <p style={{ color: "orange" }}>{errors.middleName.message}</p>}
      </div>

      {/* Last Name Field */}
      <div>
        <label>Last Name:</label>
        <input {...register("lastName")} placeholder="Enter your last name" />
        {errors.lastName && <p style={{ color: "orange" }}>{errors.lastName.message}</p>}
      </div>

      {/* Email Field */}
      <div>
        <label>Email:</label>
        <input type="email" {...register("email")} placeholder="Enter your email" />
        {errors.email && <p style={{ color: "orange" }}>{errors.email.message}</p>}
      </div>

      {/* Submit Button */}
      <button type="submit" style={{ marginTop: "20px" }}>Submit</button>
    </form>
  );
};

export default App;
