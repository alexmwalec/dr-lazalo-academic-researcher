import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
  FaLinkedinIn,
  FaTwitter,
  FaResearchgate,
  FaGoogleScholar,
  FaGlobe
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";

const supervisionData = [
  {
    year: "Current (2027 completion)",
    student:
      "Joshua Midian and Esther Phambana",
    title:
      "Association between housing quality and multi-dimensional wellbeing in rural and urban Zomba",
  },
  {
    year: "Current (2027 completion)",
    student: "Priscila Dula",
    title:
      "Investigating teacher perceptions on school lived experience of students from broken homes",
  },
  {
    year: "Current (2027 completion)",
    student:
      "Phillip Sungeni and Richard Khukhumba",
    title:
      "Vendor and consumer perceptions towards fried sweet potatoes in Chikwawa and Salima",
  },
  {
    year: "Current (2027 completion)",
    student:
      "Gomezgani Chilwa and Louis Chikanthu",
    title:
      "University of Malawi students' satisfaction with housing on and off campus",
  },
  {
    year: "Current (2027 completion)",
    student:
      "Daniel Mkumbwa and Wongani Muhone",
    title:
      "Financial literacy and saving behaviour of university students in Zomba",
  },
  {
    year: "Current (2027 completion)",
    student:
      "Nero Boston and Rafiq Daudi",
    title:
      "Impact of parenting styles on academic performance of secondary school students",
  },
  {
    year: "Current (2027 completion)",
    student:
      "Lenard Kantondo and Adam Adon",
    title:
      "Aspiration-reality gap in housing among informal settlement dwellers",
  },

  // 2025
  {
    year: "2025",
    student:
      "Davie Makwinja Kalitsiro and Carren Cathy Kananji",
    title:
      "Environmental sustainability in informal settlements of Zomba",
  },
  {
    year: "2025",
    student: "Ebenezer Genesis",
    title:
      "Co-residence of children and older persons and quality of life",
  },
  {
    year: "2025",
    student:
      "Hastings Kachale and Amos Chirwa",
    title:
      "Private student housing quality, affordability and safety in Zomba",
  },

  // 2024
  {
    year: "2024",
    student: "Chisomo Julius and Chisomo Kaira",
    title:
      "Socioeconomic status and consumer behaviour in Zomba",
  },
  {
    year: "2024",
    student: "Bryan Kalonga and Good Siyame",
    title:
      "Cultural norms and consumer decision-making in Zomba",
  },
  {
    year: "2024",
    student:
      "Yamikani Lizibowa and Wongani Mdumuka",
    title:
      "Financial literacy and family financial behaviour",
  },

  // EXTERNAL EXAMINATION
  {
    year: "External (2023)",
    student:
      "North-West University (South Africa)",
    title:
      "PhD Thesis examination in older persons and ageing studies",
  },
];

const Supervision = () => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 7;
  const totalPages = Math.ceil(
    supervisionData.length / itemsPerPage
  );

  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = supervisionData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#efefef]">
      <Header />

      {/* Banner */}
      <div
        className="h-[330px] bg-cover bg-center"
        style={{ backgroundImage: `url('/banner.jpg')` }}
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-16">

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

          {/* MAIN */}
          <main className="flex-1 py-12">
            <h1 className="text-3xl font-bold text-[#b44343] mb-4">
              Student Supervision
            </h1>

            <p className="text-gray-700 mb-10">
              Undergraduate, postgraduate supervision and external examination records.
            </p>

            {/* LIST */}
            <div className="space-y-4">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-5"
                >
                  <p className="text-sm text-gray-500">
                    {item.year}
                  </p>

                  <p className="text-gray-900 font-medium mt-1">
                    <span className="text-gray-800 font-semibold">
                      Student:
                    </span>{" "}
                    {item.student}
                  </p>

                  <p className="text-gray-900 mt-1">
                    <span className="text-gray-800 font-semibold">
                      Title:
                    </span>{" "}
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center items-center gap-2 mt-10">
              <button
                onClick={() =>
                  setPage(Math.max(page - 1, 1))
                }
                disabled={page === 1}
                className="px-4 py-2 border rounded bg-white disabled:opacity-50"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`px-4 py-2 border rounded ${
                    page === index + 1
                      ? "bg-[#b44343] text-white border-[#b44343]"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setPage(
                    Math.min(page + 1, totalPages)
                  )
                }
                disabled={page === totalPages}
                className="px-4 py-2 border rounded bg-white disabled:opacity-50"
              >
                Next
              </button>
            </div>

            <div className="text-center text-gray-600 mt-4">
              Page {page} of {totalPages}
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Supervision;