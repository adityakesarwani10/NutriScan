import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      setStatusMessage({ type: "error", text: "Please fill in all fields." });
      setLoading(false);
      return;
    }

    emailjs
      .sendForm(
        "your_service_id",      // Replace with your EmailJS service ID
        "your_template_id",     // Replace with your template ID
        form.current,
        "your_public_key"       // Replace with your public key
      )
      .then(
        () => {
          setStatusMessage({ type: "success", text: "Message sent successfully!" });
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatusMessage({ type: "error", text: "Failed to send. Try again later." });
          setLoading(false);
        }
      );
  };

  return (
    <div className="pt-24 px-6 min-h-screen bg-white/10 text-white">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Contact Us</h2>
      <div className="mx-auto w-16 h-1 bg-violet-500 rounded-full mb-10"></div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white/10 shadow-2xl rounded-2xl p-10 backdrop-blur-md border border-white/20"
      >
        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold text-gray-900">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-gray-800 border border-black/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold text-gray-900">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-gray-800 border border-black/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-lg font-semibold text-gray-900">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message"
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-gray-800 border border-black/25 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-violet-600 hover:bg-violet-700 transition-all duration-300 text-white py-3 rounded-xl text-lg font-bold"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {statusMessage && (
          <p
            className={`mt-4 text-center font-semibold ${
              statusMessage.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {statusMessage.text}
          </p>
        )}
      </form>

        <div className="mt-12 text-center text-gray-800 text-sm">
        Developed by Aditya Kesarwani | B.Tech 2023-2027 <br />
        Dr. A.P.J. Abdul Kalam Technical University
        <div className="mt-4 text-center text-gray-900 text-sm">
        <p>
          Email:{" "}
          <span
            className="text-gray-800 cursor-pointer hover:underline"
            onClick={() => navigator.clipboard.writeText("adityakearwani073@gmail.com")}
          >
            adityakesarwani073@gmail.com 📋
          </span>
        </p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
