"use client";

import React, { useState } from "react";
import HeadingCategory from "./HeadingCategory";

const ContantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center pt-10 relative overflow-hidden mb-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>

      <div className="flex flex-col w-full max-w-4xl relative z-10">
        <div className="flex justify-center text-center mb-12">
          <HeadingCategory title="Hello" subtitle="Throw me a challenge" />
        </div>

        {showSuccess && (
          <div className="mb-8 p-4 bg-green-500/20 border border-green-500 rounded-xl text-green-500 text-center">
            Message sent successfully! I&apos;ll get back to you soon. 🚀
          </div>
        )}

        {error && (
          <div className="mb-8 p-4 bg-red-500/20 border border-red-500 rounded-xl text-red-500 text-center">
            {error}
          </div>
        )}

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1">
          <div className="bg-black rounded-3xl p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <label htmlFor="Name" className="block group">
                  <span className="block text-xl font-mono mb-2 text-[#34d399] group-hover:text-[#3b82f6] transition-colors duration-300">
                    Name
                  </span>
                  <input
                    className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white 
                             focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:border-transparent
                             transition-all duration-300 hover:bg-gray-800/50"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    required
                  />
                </label>

                <label htmlFor="Email" className="block group">
                  <span className="block text-xl font-mono mb-2 text-[#34d399] group-hover:text-[#3b82f6] transition-colors duration-300">
                    Email
                  </span>
                  <input
                    className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white 
                             focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:border-transparent
                             transition-all duration-300 hover:bg-gray-800/50"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                  />
                </label>

                <label htmlFor="phone" className="block group">
                  <span className="block text-xl font-mono mb-2 text-[#34d399] group-hover:text-[#3b82f6] transition-colors duration-300">
                    Phone Number
                  </span>
                  <input
                    className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white 
                             focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:border-transparent
                             transition-all duration-300 hover:bg-gray-800/50"
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Your Phone No."
                  />
                </label>

                <label htmlFor="Message" className="block group">
                  <span className="block text-xl font-mono mb-2 text-[#34d399] group-hover:text-[#3b82f6] transition-colors duration-300">
                    Message
                  </span>
                  <textarea
                    className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-white 
                             focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:border-transparent
                             transition-all duration-300 hover:bg-gray-800/50 min-h-[150px]"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message...."
                    required
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-8 rounded-full bg-gradient-to-r from-[#34d399] to-[#3b82f6] 
                         text-white font-bold text-2xl transform transition-all duration-300
                         hover:from-[#3b82f6] hover:to-[#34d399] hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-[#34d399] focus:ring-offset-2 focus:ring-offset-black
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="block transform transition-transform duration-300 group-hover:scale-110">
                  {isSubmitting ? "Sending..." : "Challenge Accepted!"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContantForm;
