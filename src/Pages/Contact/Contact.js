import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");
  const statusTimeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const showStatus = (message, type, hideAfter = 4000) => {
  if (statusTimeoutRef.current) {
    clearTimeout(statusTimeoutRef.current);
  }

  setStatusMessage(message);
  setStatusType(type);

  if (hideAfter > 0) {
    statusTimeoutRef.current = setTimeout(() => {
      setStatusMessage("");
      setStatusType("");
    }, hideAfter);
  }
};

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.name.trim() ||
    !formData.email.trim() ||
    !formData.subject.trim() ||
    !formData.message.trim()
  ) {
    showStatus("Please fill in all fields", "error");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(formData.email)) {
    showStatus("Please enter a valid email address", "error");
    return;
  }

  setLoading(true);
  showStatus("Sending message...", "loading", 0);

  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: "Mayeso Lazaro",
    };

    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      showStatus("Message has been sent successfully!", "success", 4000);
    } else {
      showStatus("Failed to send message", "error", 4000);
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    showStatus(
      "Unable to send message at the moment. Please try again later.",
      "error",
      4000
    );
  } finally {
    setLoading(false);
  }
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
                {statusMessage && (
                  <p
                    className={`font-bold ${
                      statusType === "success"
                        ? "text-green-600"
                        : statusType === "error"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

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
