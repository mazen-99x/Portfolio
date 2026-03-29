import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sending, setSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: data.user_name,
          user_last: data.user_last,
          user_email: data.user_email,
          phone_number: data.phone_number,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      alert("Message sent successfully ✅");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message ❌");
    } finally {
      setSending(false);
    }
  };

  const inputClass = (hasError) =>
    `w-full rounded-xl px-4 py-3 bg-transparent border outline-none transition ${
      hasError ? "border-red-500" : "border-(--primary-color)"
    } focus:border-(--primary-color)`;

  return (
    <section id="contact" className="pt-30 px-4 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-(--heading-color) sm:text-lg md:text-xl font-semibold">
          Get In Touch
        </p>

        <h3 className="text-[48px] md:text-[64px] text-(--heading-color) mb-6 font-bold leading-tight">
          Contact me
        </h3>

        <p className="text-lg md:text-xl text-(--body-color) max-w-2xl mx-auto">
          “Let’s connect! Drop a message below and I’ll reply soon.”
        </p>
      </div>

      {/* Form */}
      <form
        className="max-w-3xl mx-auto flex flex-col gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-(--heading-color) font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("user_name", { required: "Name is required" })}
              className={inputClass(errors.user_name)}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm">{errors.user_name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-(--heading-color) font-medium">
              Last Name{" "}
              <span className="text-(--primary-color) text-[12px]">{`(optinal)`}</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              {...register("Last Name")}
              className={inputClass(false)}
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-(--heading-color) font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("user_email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Enter a valid email",
                },
              })}
              className={inputClass(errors.user_email)}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm">
                {errors.user_email.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-(--heading-color) font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              {...register("phone_number", {
                required: "Phone number is required",
              })}
              className={inputClass(errors.phone_number)}
            />
            {errors.phone_number && (
              <p className="text-red-500 text-sm">
                {errors.phone_number.message}
              </p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-2">
          <label className="text-(--heading-color) font-medium">Subject</label>
          <input
            type="text"
            placeholder="Project / Collaboration"
            {...register("subject", { required: "Subject is required" })}
            className={inputClass(errors.subject)}
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="text-(--heading-color) font-medium">Message</label>
          <textarea
            rows="6"
            placeholder="Write your message..."
            {...register("message", {
              required: "Message is required",
              minLength: { value: 10, message: "Minimum 10 characters" },
            })}
            className={inputClass(errors.message) + " resize-none"}
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        {/* Button */}
        <div className="w-full mt-6 flex justify-center">
          <button
            type="submit"
            disabled={sending}
            className="bg-(--primary-color) border border-transparent transition duration-300 px-10 py-3 text-white rounded cursor-pointer hover:text-(--primary-color) hover:bg-transparent hover:border-(--primary-color) disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {sending ? "Sending..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
