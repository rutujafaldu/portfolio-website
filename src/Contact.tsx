import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import siteConfig from "./utils/config";

type Props = {
  fadeIn: any;
};

export default function Contact({ fadeIn }: Props) {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_evc8e9p", // Replace with your EmailJS service ID
        "template_oj7qejb", // Replace with your EmailJS template ID
        form.current,
        "MCWBoZGl-vNv4_z7W" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSent(true);
          setIsError(false);
          form.current?.reset();
        },
        () => {
          setIsError(true);
        }
      );
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      id="contact"
      className="py-20 bg-gray-100 dark:bg-dark-900"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 border-l-4 pl-4 border-accent">
          Contact
        </h2>
        <p className="dark:text-muted text-gray-800">
          I'm open to job opportunities. Send me a message or email me directly.
        </p>

        <form
          className="mt-6 grid grid-cols-1 gap-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
              placeholder="Your name"
              name="from_name"
              id="from_name"
            />
            <input
              className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
              placeholder="Your email"
              name="from_email"
              id="from_email"
            />
          </div>
          <textarea
            className="p-3 rounded-lg dark:bg-gray-900 bg-white shadow-md placeholder:text-gray-500 focus:outline-accent"
            rows={6}
            placeholder="Message"
            name="message"
          />
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="px-5 py-3 rounded-lg bg-accent text-white font-semibold cursor-pointer"
            >
              Send Message
            </button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm dark:text-muted text-gray-800"
            >
              Or email: {siteConfig.email}
            </a>
          </div>
          {isSent && (
            <p className="text-green-600 dark:text-green-400 mt-3">
              ✅ Message sent successfully!
            </p>
          )}
          {isError && (
            <p className="text-red-600 dark:text-red-400 mt-3">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>

        {/* <div className="mt-8 flex gap-4">
          <a href="#" className="px-4 py-2 rounded-lg border">
            GitHub
          </a>
          <a href="#" className="px-4 py-2 rounded-lg border">
            LinkedIn
          </a>
        </div> */}
      </div>
    </motion.section>
  );
}
