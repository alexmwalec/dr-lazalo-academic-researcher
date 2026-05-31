import React from "react";
import Header from "../Header/Header";
import {
  FaLinkedinIn,
  FaTwitter,
  FaResearchgate,
  FaGoogleScholar,
  FaGlobe
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import Footer from "../Footer/Footer";
import humanity from "../../Images/humanity.jpg";

const Peer_Reviews = () => {
  return (
   <div className="min-h-screen bg-slate-100">
  <Header />

  {/* Banner */}
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

      {/* LEFT SIDEBAR - CHANGED: Profile image now circular with white border and overlaps banner */}
      <aside className="w-full lg:w-[280px] -mt-24">
        {/* CHANGED: Added rounded-full for circular shape, object-cover, h-48 w-48, mx-auto on mobile */}
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

          <div className="mt-8 space-y-3">
            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <SiGooglescholar className="text-gray-400" />
              Google Scholar
            </a>

            {/* ResearchGate */}
            <a
              href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <FaResearchgate className="text-gray-400 "/>
              ResearchGate
            </a>

            {/* ORCID */}
            <a
              href="https://orcid.org/0000-0001-5314-0638"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <SiOrcid className="text-gray-400 " />
              ORCID
            </a>

            {/* Web of Science */}
            <a
              href="https://www.webofscience.com/wos/author/record/PYY-0010-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold text-gray-500">
                W
              </div>
              Web of Science
            </a>

            {/* LinkedIn */}
            <a
              href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <FaLinkedinIn className="text-gray-400 " />
              LinkedIn
            </a>

            {/* Website */}
            <a
              href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#b44343] underline"
            >
              <FaGlobe className="text-gray-400" />
              Institutional Web Page
            </a>
          </div>
        </div>
      </aside>
<main className="flex-1 py-12">
  <h1 className="text-3xl font-bold  mb-4">
    Peer Reviews & Editorial Roles
  </h1>

  <p className="text-lg text-gray-700 mb-10">
    My contributions to scholarly publishing, peer review,
    editorial work, and academic quality assurance.
  </p>

  <div className="space-y-8">

    <div className="border-b border-gray-300 pb-6">
      <h2 className="text-xl font-semibold text-[#b44343] mb-2">
        Editorial Member – Malawi Journal of Science and Technology
      </h2>

      <p className="text-gray-800">
        <strong>Role:</strong> Editorial Member
      </p>

      <p className="text-gray-800">
        <strong>Period:</strong> February 2026 – Present
      </p>
    </div>

    <div className="border-b border-gray-300 pb-6">
      <h2 className="text-xl font-semibold text-[#b44343] mb-2">
        Peer Reviewer – Journal of Humanities, University of Malawi
      </h2>

      <p className="text-gray-800">
        <strong>Year:</strong> 2025
      </p>

      <p className="text-gray-800">
        One manuscript reviewed.
      </p>
    </div>

    <div className="border-b border-gray-300 pb-6">
      <h2 className="text-xl font-semibold text-[#b44343] mb-2">
        Peer Reviewer – Food Security Seminars, University of Malawi
      </h2>

      <p className="text-gray-800">
        <strong>Year:</strong> 2024
      </p>

      <p className="text-gray-800">
        One manuscript and one abstract reviewed.
      </p>
    </div>

    <div className="border-b border-gray-300 pb-6">
      <h2 className="text-xl font-semibold text-[#b44343] mb-2">
        Peer Reviewer – Food Studies Seminar
      </h2>

      <p className="text-gray-800">
        <strong>Year:</strong> 2024
      </p>

      <p className="text-gray-800">
        Two abstracts reviewed.
      </p>
    </div>

    <div className="border-b border-gray-300 pb-6">
      <h2 className="text-xl font-semibold text-[#b44343] mb-2">
        Editor – Improving Secondary Education in Malawi (ISEM)
        Phase I & II CPD Training Manual
      </h2>

      <p className="text-gray-800">
        <strong>Role:</strong> Editor
      </p>

      <p className="text-gray-800">
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
}

export default Peer_Reviews;