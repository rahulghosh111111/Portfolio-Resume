"use client";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add API call here to send form data to backend
  };

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-4xl playfair-display-font font-bold">Let&apos;s Connect</h1>
      </div>

      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3 p-3 my-5">
          {/* Name & Email (1st Line) */}
          <div className="flex flex-col md:flex-row md:space-x-3 space-y-3 md:space-y-0">
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              required 
              className="w-full md:w-1/2 p-2 border rounded-md text-base focus:ring focus:ring-blue-300"
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange}
              required 
              className="w-full md:w-1/2 p-2 border rounded-md text-base focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Subject (2nd Line) */}
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange}
            required 
            className="w-full p-2 border rounded-md text-base focus:ring focus:ring-blue-300"
          />

          {/* Message (3rd Line) */}
          <textarea 
            name="message" 
            rows={7}  // Corrected from string to number
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange}
            required 
            className="w-full p-2 border rounded-md text-base focus:ring focus:ring-blue-300 resize-none"
          />

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}
