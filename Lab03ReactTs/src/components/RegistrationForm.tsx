
import React, { useState } from "react";

// STEP 1: Define the form model
type FormValues = {
  name: string;
  email: string;
  message: string;
};

// Define the possible validation errors
type FormErrors = Partial<Record<keyof FormValues, string>>;

export function RegistrationForm() {
  // STEP 2: Store controlled form values
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    message: "",
  });

  // Store validation errors
  const [errors, setErrors] = useState<FormErrors>({});

  // Track successful submission
  const [submitted, setSubmitted] = useState(false);

  // Update input and textarea values
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Update the field that changed
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the previous error for this field
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    // Reset success status if the user edits the form
    setSubmitted(false);
  };

  // STEP 3: Validate and submit the form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the browser's default form submission
    e.preventDefault();

    const newErrors: FormErrors = {};

    // Validate required fields
    if (!values.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required.";
    }

    // Show errors if any validation rule fails
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    // Show the success panel only when all fields are valid
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "left",
      }}
    >
      <h2>Registration / Contact Form</h2>

      {/* STEP 2: Controlled fields and typed handlers */}
      <form onSubmit={handleSubmit} noValidate>
        {/* Name field */}
        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.name && (
            <p id="name-error" role="alert" style={{ color: "red" }}>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email field */}
        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.email && (
            <p id="email-error" role="alert" style={{ color: "red" }}>
              {errors.email}
            </p>
          )}
        </div>

        {/* Message field */}
        <div style={{ marginBottom: "18px" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows={4}
            style={{ display: "block", width: "100%", padding: "8px" }}
          />
          {errors.message && (
            <p id="message-error" role="alert" style={{ color: "red" }}>
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" style={{ padding: "10px 20px" }}>
          Submit
        </button>
      </form>

      {/* STEP 3: Success state */}
      {submitted && (
        <div
          role="status"
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#dcfce7",
            border: "1px solid #16a34a",
            borderRadius: "6px",
          }}
        >
          <h3>Form Submitted Successfully!</h3>
          <p>Thank you, {values.name}.</p>
          <p>Your message has been accepted.</p>
          <p>
            Your form values remain visible until you choose to edit them.
          </p>
        </div>
      )}
    </section>
  );
}
