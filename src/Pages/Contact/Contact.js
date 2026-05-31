import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  FaLinkedinIn,
  FaResearchgate,
  FaGlobe,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import { SiOrcid, SiGooglescholar } from "react-icons/si";

import humanity from "../../Images/humanity.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#efefef]">
      <Header />

      <div className="relative h-[330px]">
  <img
    src={humanity}
    alt="Academic Research Banner"
    className="w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />
</div>

  {/* Content */}
  <div className="max-w-7xl mx-auto px-8">
    <div className="flex flex-col lg:flex-row gap-16">

      <aside className="w-full lg:w-[280px] -mt-24">
        <img
          src="/profile.jpg"
          alt="Mayeso Lazaro"
          className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-4 border-white shadow-lg object-cover mx-auto md:mx-0"
        />

          <div className="mt-5">
          <h2 className="text-[22px] font-bold leading-tight">
            Mayeso Lazaro
          </h2>

          <p className="text-gray-700 mt-1">
            Senior Lecturer, Researcher and Evaluation Consultant
          </p>

          <a
            href="mailto:mlazaro@unima.ac.mw"
            className="block mt-8 text-[#b44343] underline"
          >
            mlazaro@unima.ac.mw
          </a>

          <div className="mt-8 text-gray-700 leading-relaxed">
            Department of Human Ecology
            <br />
            University of Malawi
          </div>

              <div className="mt-10 space-y-3">

                <a
                  href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <SiGooglescholar />
                  Google Scholar
                </a>

                <a
                  href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaResearchgate />
                  ResearchGate
                </a>

                <a
                  href="https://orcid.org/0000-0001-5314-0638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <SiOrcid />
                  ORCID
                </a>

                <a
                  href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaLinkedinIn />
                  LinkedIn
                </a>

                <a
                  href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[#b44343] underline"
                >
                  <FaGlobe />
                  Institutional Web Page
                </a>

              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1 py-12">

            <div className="bg-white shadow-sm p-8 rounded-xl">

              <h2 className="text-3xl font-bold mb-6">
                Get in Touch
              </h2>

              <p className="text-gray-700 mb-8 leading-relaxed">
                I welcome opportunities for collaborative
                research, consultancy assignments, conference
                presentations, supervision, grant partnerships,
                and academic engagements.
              </p>

              <form className="space-y-6">

                <div>
                  <label className="block font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:border-[#b44343]
                    "
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:border-[#b44343]
                    "
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:border-[#b44343]
                    "
                  />
                </div>

                <div>
                  <label className="block font-medium mb-2">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-lg
                      px-4
                      py-3
                      focus:outline-none
                      focus:border-[#b44343]
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    bg-[#b44343]
                    text-white
                    px-8
                    py-3
                    rounded-lg
                    hover:bg-[#993636]
                    transition
                  "
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Research Interests */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Research Interests
              </h3>

              <div className="flex flex-wrap gap-3">

                {[
                  "Ageing",
                  "Human Ecology",
                  "Food Security",
                  "Early Childhood Development",
                  "Disability Studies",
                  "Climate Change",
                  "Social Policy",
                  "Education",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      bg-[#b44343]/10
                      text-[#b44343]
                      px-4
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;