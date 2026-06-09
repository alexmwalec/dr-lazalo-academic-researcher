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
import humanity from "../../Images/humanity.jpg";
import Footer from "../Footer/Footer";

const Awards = () => {
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

          <div className="mt-8 text-gray-700 font-semibold leading-relaxed">
            Human Ecology  and Agricultural Sciences  Department
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
  <h1 className="text-3xl font-bold text-black mb-8 text-[#b443">
    Education & Awards
  </h1>

  {/* Qualifications */}
  <section className="mb-12">
    <h2 className="text-2xl font-semibold text-black mb-6 text-[#b44343] text-rose-700">
      Qualifications
    </h2>

    <ol className="list-decimal ml-8 space-y-4 text-black leading-8">
      <li>
        <strong>Interdisciplinary Doctor of Philosophy (PhD)</strong>,
        Human Geography and Social Sciences, University of Hull,
        United Kingdom, 2018.
        <br />
        <span className="italic">
          Funded by the University of Hull Studentship – International Fee Bursary
        </span>
      </li>

      <li>
        <strong>Postgraduate Certificate in Research Training</strong>,
        University of Hull, United Kingdom, 2016.
      </li>

      <li>
        <strong>Master of Science (MSc) in Family Ecology and Practice</strong>,
        University of Alberta, Canada, 2013.
      </li>

      <li>
        <strong>Bachelor of Education Humanities (with Credit)</strong>,
        University of Malawi, Malawi, 2007.
      </li>
    </ol>
  </section>

  {/* Awards */}
  <section>
    <h2 className="text-2xl font-semibold text-black mb-6 text-[#b44343] text-rose-700">
      Awards
    </h2>

    <ol className="list-decimal ml-8 space-y-4 text-black leading-8">
      <li>
        <strong>University of Hull Studentship</strong>,
        University of Hull, United Kingdom (2015–2018).
      </li>

      <li>
        <strong>Mary Louise Imrie Graduate Student Award</strong>,
        University of Alberta, Canada (January 2012).
      </li>

      <li>
        <strong>Louise Davies Memorial Graduate Scholarship</strong>,
        University of Alberta, Canada (September 2011).
      </li>

      <li>
        <strong>Engberg Graduate Scholarship in International Home Economics</strong>,
        University of Alberta, Canada (September 2011).
      </li>

      <li>
        <strong>
          University of Alberta Graduate Students' Association Professional Development Grant
        </strong>,
        University of Alberta, Canada (December 21, 2012).
      </li>

      <li>
        <strong>
          Malawi Government Scholarship for Junior Staff Development
        </strong>
        (July 2010 – August 2012).
      </li>
    </ol>
  </section>
</main>     
    </div>
    </div>

    <Footer />
    </div>
  );
}

export default Awards;