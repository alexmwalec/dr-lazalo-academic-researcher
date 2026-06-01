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

const Home = () => {
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

      {/* ABOUT SECTION */}
      <main className="flex-1 py-12">
        <h1 className="text-3xl font-bold text-[#222] mb-5">
          About me
        </h1>

        <p className="text-xl text-gray-700 mb-10 max-w-4xl">
          Senior Lecturer, Researcher, and Evaluation Consultant
          with extensive experience in teaching, research,
          consultancy and community engagement.
        </p>

        <div className="space-y-8 text-[18px] leading-9 text-[#333] max-w-5xl">
          <p>
  Senior Lecturer, Researcher, and Evaluation Consultant at the
  <strong> University of Malawi</strong>, with over 15 years of
  academic and applied research and evaluation experience. I am also the
  <strong> Managing Director of Nthanda Consulting</strong> and <strong> Managing Partner at Kula Consultants</strong>.

  {" "}I am a Technical Associate at The Center for Institutional and
  Technical Support for Civil Society Organizations (CITS), Uganda  <a
    href="https://www.citsug.org"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    citsug.org
  </a>
  

  {" "}I am also a network team member of Fructuous Consulting,
  South Africa  <a
    href="https://fructuousconsulting.africa"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    fructuousconsulting.africa
  </a>
  
</p>

          <p>
            I hold an interdisciplinary
            <strong> PhD in Human Geography and Social Sciences</strong>
            (University of Hull, UK), an
            <strong> MSc in Family Ecology and Practice</strong>
            (University of Alberta, Canada), and a
            <strong> Bachelor of Education (Humanities)</strong>
            (University of Malawi).My teaching, research, consultancy and outreach activities focus on children, youth, and families, as well as older persons and aging, with specialisation in qualitative research methodologies.
          </p>

          <p>
            With over a decade of consultancy experience, I have served as
            Lead, Associate, and Local Evaluation Consultant on baseline,
            midline, and endline evaluations as well as strategic planning in
            <strong> early childhood development (ECD)</strong>.
          </p>

          <p>
            Recently I led or contributed to externally funded projects at
            the University of Malawi focused on ECD, nutrition and education
            systems strengthening in collaboration with UNICEF, USAID and
            other international partners.
          </p>
          <br/>
          <span className=" text-black font-bold"> CV </span>
        </div>
      </main>
    </div>
   
  </div>
   <Footer />
</div>
  );
};

export default Home;