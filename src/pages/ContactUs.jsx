import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // replace with EmailJS Service ID
        "YOUR_TEMPLATE_ID",  // replace with EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY"    // replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong ❌ " + error.text);
        }
      );
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-6 mt-8">
      <h2 className="text-center mb-4 text-3xl font-bold text-btndark dark:text-white">
        Get In Touch
      </h2>
      <p className="mx-auto text-center text-black dark:text-white md:w-4/5 lg:w-3/5 xl:w-[46%]">
        We are a one-stop shop real estate solution. We combine excellence and expertise in making
        land acquisition litigation-free, property construction and management, seamless and gratifying.
      </p>

      {/* Contact Info Cards */}
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12 mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-black dark:shadow-none text-center">
          <FaLocationDot className="mx-auto text-orange-500 text-3xl mb-3" />
          <h5 className="text-xl font-semibold text-black dark:text-white mb-2">Our Location</h5>
          <p>1st Floor of Friends Plaza, Tema Community 22</p>
          <p>GB-0325125</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-black dark:shadow-none text-center">
          <MdEmail className="mx-auto text-orange-500 text-3xl mb-3" />
          <h5 className="text-xl font-semibold text-black dark:text-white mb-2">Email Us</h5>
          <p>info@goliproperties.com</p>
          <p>www.goliproperties.com</p>
        </div>

        <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-black dark:shadow-none text-center">
          <MdCall className="mx-auto text-orange-500 text-3xl mb-3" />
          <h5 className="text-xl font-semibold text-black dark:text-white mb-2">Call Us</h5>
          <p>+233 0550511341</p>
          <p>+233 0500110032</p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Form */}
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-xl shadow-lg dark:bg-black dark:shadow-none space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full rounded-lg border p-3"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full rounded-lg border p-3"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full rounded-lg border p-3"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white hover:bg-orange-600"
          >
            Send Message
          </button>
        </form>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.271015172335!2d-0.02065!3d5.68244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDAnNTYuOCJOIDDCsDAxJzE0LjQiVw!5e0!3m2!1sen!2sgh!4v1695000000000"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-full min-h-[400px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
