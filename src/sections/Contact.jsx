import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_3rk32gd",
        "template_44qdimk",
        {
          from_name: form.name,
          to_name: "Zafar",
          from_email: form.email,
          to_email: "hatamovzafar707@gmail.com",
          message: form.message,
        },
        "3QQaaqab2ByjmLBYh"
      );
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex flex-col justify-center items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container xl:pt-14">
          <h3 className="head-text">Let's talk</h3>
          <p className="text-white-600 text-lg mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            porro velit numquam nemo est quo dolores consectetur sapiente
            quibusdam deleniti.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-7 mt-12 flex flex-col"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                className="field-input"
                placeholder="John Doe"
                name="name"
                // value={form.name}
                required
                onChange={handleChange}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                className="field-input"
                placeholder="johndoe@gmail.com"
                name="email"
                // value={form.name}
                required
                onChange={handleChange}
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                name="message"
                cols="20"
                rows="5"
                className="field-input"
                placeholder="What's on your mind?"
                // value={form.name}
                required
                onChange={handleChange}
              ></textarea>
            </label>

            <button type="submit" className="field-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
