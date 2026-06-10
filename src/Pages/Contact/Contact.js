import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
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
      const response = await fetch("http://localhost:5000/contact", {
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
    <div className="min-h-screen bg-slate-100">
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
     
               {/* Sidebar */}
               <aside className="w-full lg:w-[280px] lg:-mt-24 flex flex-col items-center lg:items-start">
     
                 {/* Profile Image */}
                 <div className="mt-[-60px] lg:mt-0">
                   <img
                     src="/profile.jpg"
                     alt="Mayeso Lazaro"
                     className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] lg:w-[220px] lg:h-[220px] rounded-full border-4 border-white shadow-lg object-cover"
                   />
                 </div>
     
                 <div className="mt-4 lg:mt-5 text-center lg:text-left w-full px-2 lg:px-0">
                   <h2 className="text-[18px] sm:text-[20px] lg:text-[22px] font-bold leading-tight">
                     Mayeso Chinseu Lazaro
                   </h2>
     
                   <p className="text-gray-700 mt-1 text-sm sm:text-base">
                     Senior Lecturer, Researcher and Evaluation Consultant
                   </p>
     
                   
                     <a href="mailto:mlazaro@unima.ac.mw"
                     className="block mt-4 lg:mt-8 text-[#b44343] underline text-sm sm:text-base break-all"
                   >
                     mlazaro@unima.ac.mw
                   </a>
     
                   <div className="mt-4 lg:mt-8 text-gray-700 font-semibold leading-relaxed text-sm sm:text-base">
                     Human Ecology and Agricultural Sciences Department
                     <br />
                     University of Malawi
                   </div>
     
                   {/* Social Links */}
                   <div className="mt-4 lg:mt-8 space-y-3 flex flex-col items-center lg:items-start">
       <div className="flex flex-col items-start">
     
         <a href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
           target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base"
         >
           <SiGooglescholar className="text-[#4285F4] text-lg flex-shrink-0 w-5" />
           Google Scholar
         </a>
     
         <a href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
           target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
         >
           <FaResearchgate className="text-[#00CCBB] text-lg flex-shrink-0 w-5" />
           ResearchGate
         </a>
     
         <a href="https://orcid.org/0000-0001-5314-0638"
           target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
         >
           <SiOrcid className="text-[#A6CE39] text-lg flex-shrink-0 w-5" />
           ORCID
         </a>
     
         <a href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
           target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
         >
           <FaLinkedinIn className="text-[#0A66C2] text-lg flex-shrink-0 w-5" />
           LinkedIn
         </a>
     
         <a href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
           target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
         >
           <FaGlobe className="text-[#34A853] text-lg flex-shrink-0 w-5" />
           Institutional Web Page
         </a>
     
       </div>
     
                 </div>
                 </div>
               </aside>

          {/* Main Content */}
          <main className="flex-1 py-6 lg:py-12">
            <div className="bg-white shadow-sm p-5 sm:p-8 rounded-xl">

              <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Contact
              </h1>

              <p className="text-gray-700 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                I welcome opportunities for collaborative research, consultancy
                assignments, conference presentations, supervision, grant
                partnerships, and academic engagements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

                <div>
                  <label className="block font-medium mb-2 text-sm sm:text-base">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-sm sm:text-base">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-sm sm:text-base">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2 text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#b44343]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#b44343] text-white px-8 py-3 rounded-lg hover:bg-[#993636] transition disabled:opacity-50 text-sm sm:text-base"
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