import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://mayeso-lazalo-academic-researcher.vercel.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-['Arial',sans-serif]">
      <Header />

      {/* Banner */} 
      <div className="relative h-[200px] sm:h-[260px] md:h-[330px] w-full">
        <img
          src={humanity}
          alt="Academic Research Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 py-6 lg:py-12">
            <div className="bg-white shadow-sm p-5 sm:p-8 rounded-xl">

              <h1 className="text-3xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Contact
              </h1>

              <p className="text-gray-700 text-lg leading-7 mb-6 sm:mb-8">
                I welcome opportunities for collaborative research, consultancy
                assignments, conference presentations, supervision, grant
                partnerships, and academic engagements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                  <label className="block font-medium mb-2 text-lg">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-lg">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-lg">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-lg">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#b44343] text-white px-8 py-3 rounded-lg hover:bg-[#993636] transition disabled:opacity-50 text-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;