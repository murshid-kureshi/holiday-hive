import React, { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

const validateEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setSuccess("");
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = "Please enter your name.";
    if (!form.email.trim()) err.email = "Please enter your email.";
    else if (!validateEmail(form.email)) err.email = "Please enter a valid email.";
    if (!form.message.trim()) err.message = "Please enter a message.";
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }

    setSubmitting(true);
    // Simulate async submit (replace with real submit later)
    setTimeout(() => {
      setSubmitting(false);
      setSuccess("Message sent. We'll get back to you soon.");
      setForm(initialForm);
      setErrors({});
    }, 900);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <h2 className="section-title">Contact Us</h2>

        <div className="contact-grid">
          <form className="contact-card contact-left" onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className={`form-input ${errors.name ? "input-error" : ""}`}
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error-text">{errors.name}</div>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className={`form-input ${errors.email ? "input-error" : ""}`}
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error-text">{errors.email}</div>}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={`form-textarea ${errors.message ? "input-error" : ""}`}
              rows="6"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="error-text">{errors.message}</div>}

            <div style={{ marginTop: 12 }}>
              <button type="submit" className="btn-primary send-btn" disabled={submitting}>
                {submitting ? "Sending..." : "Send message"}
              </button>
            </div>

            {success && <div className="success-message">{success}</div>}
          </form>

          <div className="contact-card contact-right">
            <h3>Office</h3>
            <p>Palarivattom ,metro piller no 535 , Kochi, Kerala</p>
            <p>Phone: +91 90725-09975</p>
            <p>Email: villaversekochi@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
