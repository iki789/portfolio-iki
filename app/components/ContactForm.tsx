"use client";
import React, { FormEvent, useState } from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import z from "zod";

const contactSchema = z.object({
  name: z
    .string({
      required_error: "Please enter your name.",
      invalid_type_error: "Enter a valid name.",
    })
    .min(3, "Enter a valid name.")
    .max(18, "Name is too long."),
  email: z
    .string({
      required_error: "Please enter your email.",
    })
    .email("Enter a valid email."),
  message: z
    .string({
      required_error: "Please enter your message.",
    })
    .min(20, "Please provide more details.")
    .max(500, "Message is too long."),
});

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [sentMessage, setSentMessage] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSentMessage(false);

    try {
      const formData = new FormData(event.currentTarget);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      };
      await contactSchema.parseAsync(payload);
      const request = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      if (!request.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const response = await request.json();

      if (!response.ok) {
        throw new Error("Failed to submit the data. Something went wrong!");
      }
      setSentMessage(true);
    } catch (error: unknown) {
      let errorMessage =
        error instanceof Error ? error.message : "An unexpected error occurred";
      if (error instanceof z.ZodError) {
        errorMessage = error.issues[0].message;
      }
      setError(errorMessage);
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
          name="name"
          placeholder="Name"
          className="mt-1 w-full rounded-lg border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-700 dark:text-gray-200"
          disabled={isLoading || sentMessage}
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
          disabled={isLoading || sentMessage}
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
          name="message"
          placeholder="Message..."
          disabled={isLoading || sentMessage}
        ></textarea>
      </div>
      <div className="flex flex-row-reverse justify-between align-end col-span-2 text-right">
        {!sentMessage ? (
          <button
            disabled={isLoading || sentMessage}
            className="from-violet-500 via-pink-500 to-rose-600 rounded-lg bg-gradient-to-r px-6 py-2 font-medium text-white"
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
        ) : null}
        {error ? <div className="text-red-500">{error}</div> : ""}
        {sentMessage ? (
          <div className="text-green-500">Sent message successfully!</div>
        ) : null}
      </div>
    </form>
  );
};

export default ContactForm;
