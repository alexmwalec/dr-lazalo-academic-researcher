import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import humanity from "../../Images/humanity.jpg";

const supervisionData = [
  {
    year: "Current (2027 completion)",
    student: "Joshua Midian and Esther Phambana",
    title: "Association between housing quality and multi-dimensional wellbeing in rural and urban Zomba",
  },
  {
    year: "Current (2027 completion)",
    student: "Priscila Dula",
    title: "Investigating teacher perceptions on school lived experience of students from broken homes",
  },
  {
    year: "Current (2027 completion)",
    student: "Phillip Sungeni and Richard Khukhumba",
    title: "Vendor and consumer perceptions towards fried sweet potatoes in Chikwawa and Salima",
  },
  {
    year: "Current (2027 completion)",
    student: "Gomezgani Chilwa and Louis Chikanthu",
    title: "University of Malawi students' satisfaction with housing on and off campus",
  },
  {
    year: "Current (2027 completion)",
    student: "Daniel Mkumbwa and Wongani Muhone",
    title: "Financial literacy and saving behaviour of university students in Zomba",
  },
  {
    year: "Current (2027 completion)",
    student: "Nero Boston and Rafiq Daudi",
    title: "Impact of parenting styles on academic performance of secondary school students",
  },
  {
    year: "Current (2027 completion)",
    student: "Lenard Kantondo and Adam Adon",
    title: "Aspiration-reality gap in housing among informal settlement dwellers",
  },
  {
    year: "2025",
    student: "Davie Makwinja Kalitsiro and Carren Cathy Kananji",
    title: "Environmental sustainability in informal settlements of Zomba",
  },
  {
    year: "2025",
    student: "Ebenezer Genesis",
    title: "Co-residence of children and older persons and quality of life",
  },
  {
    year: "2025",
    student: "Hastings Kachale and Amos Chirwa",
    title: "Private student housing quality, affordability and safety in Zomba",
  },
  {
    year: "2024",
    student: "Chisomo Julius and Chisomo Kaira",
    title: "Socioeconomic status and consumer behaviour in Zomba",
  },
  {
    year: "2024",
    student: "Bryan Kalonga and Good Siyame",
    title: "Cultural norms and consumer decision-making in Zomba",
  },
  {
    year: "2024",
    student: "Yamikani Lizibowa and Wongani Mdumuka",
    title: "Financial literacy and family financial behaviour",
  },
  {
    year: "External (2023)",
    student: "North-West University (South Africa)",
    title: "PhD Thesis examination in older persons and ageing studies",
  },
];

const Supervision = () => {
  const [page, setPage] = useState(1);

  const itemsPerPage = 7;
  const totalPages = Math.ceil(supervisionData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = supervisionData.slice(startIndex, startIndex + itemsPerPage);

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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#b44343] mb-3 sm:mb-4">
              Student Supervision
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-10">
              Undergraduate, postgraduate supervision and external examination records.
            </p>

            {/* List */}
            <div className="space-y-4">
              {currentItems.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 pb-4 sm:pb-5"
                >
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.year}
                  </p>

                  <p className="text-gray-900 font-medium mt-1 text-sm sm:text-base">
                    <span className="text-gray-800 font-semibold">Student:</span>{" "}
                    {item.student}
                  </p>

                  <p className="text-gray-900 mt-1 text-sm sm:text-base">
                    <span className="text-gray-800 font-semibold">Title:</span>{" "}
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 sm:gap-2 mt-8 sm:mt-10 flex-wrap">
              <button
                onClick={() => setPage(Math.max(page - 1, 1))}
                disabled={page === 1}
                className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
              >
                Previous
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={`px-3 sm:px-4 py-2 border rounded text-sm ${
                    page === index + 1
                      ? "bg-[#b44343] text-white border-[#b44343]"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setPage(Math.min(page + 1, totalPages))}
                disabled={page === totalPages}
                className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
              >
                Next
              </button>
            </div>

            <div className="text-center text-gray-600 mt-4 text-sm sm:text-base">
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