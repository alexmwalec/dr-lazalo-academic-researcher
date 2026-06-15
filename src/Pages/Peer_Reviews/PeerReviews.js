import React from "react";
import Header from "../Header/Header";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import Footer from "../Footer/Footer";
import humanity from "../../Images/humanity.jpg";

const Peer_Reviews = () => {
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
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Peer Reviews & Editorial Roles
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
              My contributions to scholarly publishing, peer review, editorial
              work, and academic quality assurance.
            </p>

            <div className="space-y-6 sm:space-y-8">

              <div className="border-b border-gray-300 pb-5 sm:pb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Editorial Member – Malawi Journal of Science and Technology, University of Malawi
                </h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  <strong>Role:</strong> Editorial Member
                </p>
                <p className="text-gray-800 text-sm sm:text-base mt-1">
                  <strong>Period:</strong> February 2026 – Present
                </p>
              </div>

              <div className="border-b border-gray-300 pb-5 sm:pb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Peer Reviewer – Journal of Humanities, University of Malawi
                </h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  <strong>Year:</strong> 2025
                </p>
                <p className="text-gray-800 text-sm sm:text-base mt-1">
                  One manuscript reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-5 sm:pb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Peer Reviewer – Food Security Seminars, University of Malawi
                </h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  <strong>Year:</strong> 2024
                </p>
                <p className="text-gray-800 text-sm sm:text-base mt-1">
                  One manuscript and one abstract reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-5 sm:pb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Peer Reviewer – Food Studies Seminar, University of Malawi
                </h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  <strong>Year:</strong> 2024
                </p>
                <p className="text-gray-800 text-sm sm:text-base mt-1">
                  Two abstracts reviewed.
                </p>
              </div>

              <div className="border-b border-gray-300 pb-5 sm:pb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-[#b44343] mb-2 leading-snug">
                  Editor – Improving Secondary Education in Malawi (ISEM) Phase
                  I & II CPD Training Manual
                </h2>
                <p className="text-gray-800 text-sm sm:text-base">
                  <strong>Role:</strong> Editor
                </p>
                <p className="text-gray-800 text-sm sm:text-base mt-1">
                  <strong>Year:</strong> 2022
                </p>
              </div>

            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Peer_Reviews;