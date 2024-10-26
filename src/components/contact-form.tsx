"use client"; 
import { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setStatus("Sending...");
    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);
    const response = await fetch(
      "https://formspree.io/f/xbljjwjg", 
      {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }
    );

    if (response.ok) {
      setStatus("Sent!");
      form.reset();
    } else {
      setStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="my-4">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Contact Me
      </h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>   

        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">   

        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"   

          id="email"
          name="email"
          className="mt-1 p-2 border rounded-md w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium   
 text-gray-700"
        >
          Message
        </label>
        <textarea   

          id="message"
          name="message"
          className="mt-1 p-2 border rounded-md w-full"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
      {status && <p className="mt-2">{status}</p>}
    </form>
  );
};