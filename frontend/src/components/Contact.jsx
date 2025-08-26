import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const errs = {};
      validation.error.errors.forEach((err) => {
        errs[err.path[0]] = err.message;
      });
      setErrors(errs);
      return;
    }

    setErrors({});

    console.log("SERVICE_ID:", import.meta.env.VITE_SERVICE_ID);
    console.log("TEMPLATE_ID:", import.meta.env.VITE_TEMPLATE_ID);
    console.log("PUBLIC_KEY:", import.meta.env.VITE_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("⚠️Something went wrong. Please try again.");
      });
  };

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-black to-gray-900 p-6">
      
      {/* Left side */}
      <div className="flex flex-col items-center md:items-start md:w-1/2 mt-[50px] text-white px-6 mb-10 md:mb-0">
        <div aria-label="Connect logo" className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 text-green-500 drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="text-4xl font-extrabold mb-4">
          Connect with <span className="text-green-600">JsonifyPDF</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-md">
          Have questions or need assistance? Reach out to our support team anytime. 
          We're here to help you integrate and use JsonifyPDF seamlessly.
        </p>
      </div>

      {/* Right side - form */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="bg-gray-900 p-10 rounded-xl shadow-lg max-w-lg w-full text-white flex flex-col"
        noValidate
      >
        <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
          Send a Message
        </h2>

        <label className="mb-4 block">
          <span className="text-green-400">Name</span>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`mt-1 px-3 py-2 w-full rounded-md bg-gray-800 border ${
              errors.name ? "border-red-600" : "border-gray-700"
            } text-white`}
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
        </label>

        <label className="mb-4 block">
          <span className="text-green-400">Email</span>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`mt-1 px-3 py-2 w-full rounded-md bg-gray-800 border ${
              errors.email ? "border-red-600" : "border-gray-700"
            } text-white`}
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
        </label>

        <label className="mb-6 block">
          <span className="text-green-400">Message</span>
          <textarea
            name="message"
            rows={4}
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className={`mt-1 px-3 py-2 w-full rounded-md bg-gray-800 border ${
              errors.message ? "border-red-600" : "border-gray-700"
            } text-white resize-none`}
          />
          {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
        </label>

        <button
          type="submit"
          disabled={!formData.name || !formData.email || !formData.message}
          className="bg-green-600 py-3 rounded-md font-semibold text-white hover:bg-green-500 transition disabled:opacity-50"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center mt-4 text-green-400 font-semibold" role="alert" aria-live="polite">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
