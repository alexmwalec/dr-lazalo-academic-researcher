// src/Pages/ConferencePresentations/Conference.jsx
import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { conferenceData } from "./conferenceData";

const Conference = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#efefef]">
      <Header />

      {/* Banner (same as BoardMembership style) */}
      <div
        className="h-[330px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/banner.jpg')`,
        }}
      />

      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* SIDEBAR (same structure as BoardMembership) */}
          <aside className="w-full lg:w-[280px] -mt-24">

            <img
              src="/profile.jpg"
              alt="Mayeso Lazaro"
              className="w-[220px] border-4 border-white shadow-sm"
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

                <a
                  href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  Google Scholar
                </a>

                <a
                  href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  ResearchGate
                </a>

                <a
                  href="https://orcid.org/0000-0001-5314-0638"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  ORCID
                </a>

                <a
                  href="https://www.webofscience.com/wos/author/record/PYY-0010-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  Web of Science
                </a>

                <a
                  href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  LinkedIn
                </a>

                <a
                  href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#b44343] underline block"
                >
                  Institutional Web Page
                </a>

              </div>
            </div>
          </aside>

          {/* MAIN CONTENT (UNCHANGED LOGIC) */}
          <main className="flex-1 py-12">

            <h1 className="text-3xl font-bold  mb-4">
              Conference Contributions
            </h1>

            <p className="text-lg text-gray-700 mb-10">
              International and regional presentations on ageing, family studies,
              childhood research, development studies, and social sciences.
            </p>

            <div className="space-y-8">
              {conferenceData.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-gray-100 pb-8 last:border-0"
                >
                  <div className="text-sm font-semibold text-amber-700 uppercase tracking-wide mb-2">
                    {item.year}
                  </div>

                  <h2 className="text-xl md:text-2xl font-serif underline font-medium text-[#b44343] mb-2">
                    {item.title}
                  </h2>

                  <div className="text-gray-900 text-ms mb-2">
                    {item.location}
                  </div>

                  <div className="text-gray-600 text-sm mb-3">
                    {item.authors}
                  </div>

                  <div className="flex items-center gap-6 mt-2">
                    <button
                      onClick={() => handleViewDetails(item.id)}
                      className="text-amber-700 text-sm font-medium hover:text-amber-800 flex items-center gap-1"
                    >
                      {selectedItem === item.id ? "Hide Details" : "View Details"}
                    </button>

                    <a
  href={item.pdfUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-[#b44343] font-medium hover:text-amber-800 flex items-center gap-1"
>
  View PDF
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                  </div>

                  {selectedItem === item.id && (
                    <div className="mt-6 pl-4 bg-amber-50/30 p-5 rounded-r-lg">
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-semibold text-black uppercase tracking-wide">
                            Conference
                          </span>
                          <p className="text-gray-700 text-sm mt-1">
                            {item.conference}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-black uppercase tracking-wide">
                            Date
                          </span>
                          <p className="text-gray-700 text-sm mt-1">
                            {item.date}
                          </p>
                        </div>

                        <div>
                          <span className="text-xs font-semibold text-black uppercase tracking-wide">
                            Full Citation
                          </span>
                          <p className="text-gray-600 text-sm italic mt-1 leading-relaxed">
                            {item.citation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Conference;