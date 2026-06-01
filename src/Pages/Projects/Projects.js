import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"
import { SiGooglescholar, SiOrcid } from "react-icons/si";
import { FaResearchgate, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import humanity from "../../Images/humanity.jpg";
import SocialShareBar from "../SocialShareBar/SocialShareBar";

const Projects = () => {
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

        <div className="mt-5 text-center md:text-left">
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
  <h1 className="text-3xl font-bold mb-4">
    Projects & Grants
  </h1>

  <p className="text-xl text-gray-700 mb-10">
    Selected funded research, evaluation, and development projects undertaken
    through academic, consultancy, and collaborative partnerships.
  </p>

  <div className="space-y-12 text-[#2b3b34]">

    {/* Project 1 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3 hover:text-rose-700">
        Strengthening Malawi's ECD Management Information System (T4ECE)
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Co-Investigator</p>
        <p><strong>Grant Period:</strong> February 2024 – December 2024</p>
        <p><strong>Grant Value:</strong> $26,779.58</p>
        <p><strong>Funder:</strong> USAID – Together for Early Childhood Evidence (T4ECE), USA</p>
      </div>
    </div>

    {/* Project 2 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3">
        Child-to-Child Learning Approach: Scaling Up Inclusive Play-Based Learning for Smooth Transition from Pre-Primary to Early Grades
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Co-Principal Investigator; Project Lead for Malawi</p>
        <p><strong>Grant Period:</strong> May 2022 – November 2023</p>
        <p><strong>Grant Value:</strong> $94,755.43</p>
        <p><strong>Funder:</strong> International Development Research Centre (IDRC), Canada</p>
      </div>
    </div>

    {/* Project 3 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3">
        Complementary Feeding Bowl Pilot Project: Integration of an Infant and Young Child Feeding (IYCF) Toolkit
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Co-Investigator; Project Lead for Endline Evaluation</p>
        <p><strong>Grant Period:</strong> November 2022 – November 2023</p>
        <p><strong>Grant Value:</strong> $135,000</p>
        <p><strong>Funder:</strong> UNICEF, Malawi</p>
      </div>
    </div>

    {/* Project 4 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3">
        Improving Secondary Education in Malawi (ISEM) Phase I & II – Continuous Professional Development (CPD)
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Expert Member and Manual Editor</p>
        <p><strong>Grant Period:</strong> December 2022 – November 2023</p>
        <p><strong>Grant Value:</strong> €36,409</p>
        <p><strong>Funder:</strong> European Union (EU)</p>
      </div>
    </div>

    {/* Project 5 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3">
        Energy Provision in Developing Countries: Understanding Private Sector Challenges of Scaling Up Energy Access in Uganda, Tanzania, and Malawi
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Co-Investigator</p>
        <p><strong>Grant Period:</strong> June 2020 – June 2021</p>
        <p><strong>Grant Value:</strong> £5,000</p>
        <p><strong>Funder:</strong> Global Challenges Research Fund (GCRF), United Kingdom</p>
      </div>
    </div>

    {/* Project 6 */}
    <div>
      <h2 className="text-2xl font-semibold text-[#b44343] mb-3">
        Promoting Farmers' Rights and Collective Marketing for Sustainable Food Security (Pro-Farmer Project)
      </h2>

      <div className="space-y-2">
        <p><strong>Role:</strong> Monitoring and Evaluation Manager</p>
        <p><strong>Grant Period:</strong> June 2018 – June 2019</p>
        <p><strong>Grant Value:</strong> $120,000</p>
        <p><strong>Funder:</strong> Open Society Initiative for Southern Africa (OSISA)</p>
      </div>
    </div>

  </div>
</main>
    </div>
    <SocialShareBar title="Projects & Grants - Mayeso Lazaro" />
  </div>
  <Footer/>
</div>
 
  );
};

export default Projects;