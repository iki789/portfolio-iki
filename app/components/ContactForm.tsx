"use client";
import React, { FormEvent, useState } from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import Form from "next/form";
import z from "zod";

const contactSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name.",
      invalid_type_error: "Enter a valid name.",
    })
    .min(3, "Enter a valid name."),
  email: z
    .string({
      required_error: "Please enter your email.",
    })
    .email("Enter a valid email."),
  message: z
    .string({
      required_error: "Please enter your message.",
    })
    .min(20, "Please provide more details."),
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/mail", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error: any) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="grid grid-cols-2 gap-4" method="POST" onSubmit={onSubmit}>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Name
        </label>

        <input
          type="text"
          id="name"
          name="email"
          placeholder="Name"
          className="mt-1 w-full rounded-lg border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className="mt-1 w-full rounded-lg border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200"
        />
      </div>

      <div className="col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          Message
        </label>

        <textarea
          id="message"
          className="mt-2 w-full rounded-lg border-gray-200 align-top shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          rows={4}
          placeholder="Message..."
        ></textarea>
      </div>
      <div className="align-end col-span-2 text-right">
        <button
          disabled={isLoading}
          className="from-violet-500 via-pink-500 to-rose-600 rounded-lg bg-gradient-to-r  px-6 py-2 font-medium text-white"
        >
          {isLoading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <FiCornerDownLeft size={16} className="inline-block" />
            </>
          )}
        </button>
        {error ? (
          <div className="text-red-500">Failed sending message.</div>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};

export default ContactForm;
