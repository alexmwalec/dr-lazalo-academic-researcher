import React, { useState, useEffect, useRef } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import humanity from "../../Images/humanity.jpg";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import cvFile from "../../Documents/Mayeso_Lazaro_CV.pdf";

// react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Home = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [containerWidth, setContainerWidth] = useState(800);
  const [showCV, setShowCV] = useState(false);
  const containerRef = useRef(null);

  // Disable right-click, print/save/devtools shortcuts on this page
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        (e.ctrlKey && (e.key === "p" || e.key === "s" || e.key === "u")) ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        e.key === "F12"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Responsive PDF page width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber((prev) => Math.max(prev - 1, 1));

  const goToNextPage = () =>
    setPageNumber((prev) => Math.min(prev + 1, numPages));

  // FIXED: Toggle CV visibility instead of just showing
  const toggleCV = () => {
    setShowCV(!showCV);
    // Reset page number when hiding
    if (showCV) {
      setPageNumber(1);
    }
  };

  // FIXED: Scroll to CV when showing, but only if becoming visible
  useEffect(() => {
    if (showCV) {
      setTimeout(() => {
        document.getElementById("cv-section")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showCV]);

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

              <a
                href="mailto:mlazaro@unima.ac.mw"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base"
                  >
                    <SiGooglescholar className="text-[#4285F4] text-lg flex-shrink-0 w-5" />
                    Google Scholar
                  </a>

                  <a href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
                  >
                    <FaResearchgate className="text-[#00CCBB] text-lg flex-shrink-0 w-5" />
                    ResearchGate
                  </a>

                  <a href="https://orcid.org/0000-0001-5314-0638"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
                  >
                    <SiOrcid className="text-[#A6CE39] text-lg flex-shrink-0 w-5" />
                    ORCID
                  </a>

                  <a href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base mt-3"
                  >
                    <FaLinkedinIn className="text-[#0A66C2] text-lg flex-shrink-0 w-5" />
                    LinkedIn
                  </a>

                  <a href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
                    target="_blank"
                    rel="noopener noreferrer"
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#222] mb-4 sm:mb-5">
              About me
            </h1>

            <div className="space-y-6 sm:space-y-8 text-[19px]  sm:text-[19px] leading-8 sm:leading-9 text-[#333] max-w-5xl">
              <p>
                Senior Lecturer, Researcher, and Evaluation Consultant at the{" "}
                <a href="https://www.unima.ac.mw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  University of Malawi
                </a>{" "}
                with over 15 years of academic and applied research and
                evaluation experience. I am also the Managing Director of
                Nthanda Consulting and Managing Partner at Kula Consultants. I
                am a Technical Associate at The Center for Institutional and
                Technical Support for Civil Society Organizations (CITS),
                Uganda{" "}
                <a href="https://www.citsug.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  citsug.org
                </a>
                . I am also a network team member of Fructuous Consulting,
                South Africa{" "}
                <a href="https://fructuousconsulting.africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  fructuousconsulting.africa
                </a>
              </p>

              <p>
                I hold an interdisciplinary PhD in Human Geography and Social
                Sciences (University of Hull, UK), an MSc in Family Ecology
                and Practice (University of Alberta, Canada), and a Bachelor
                of Education (Humanities) (University of Malawi). My teaching,
                research, consultancy and outreach activities focus on
                children, youth, and families, as well as older persons and
                aging, with specialisation in qualitative research
                methodologies.
              </p>

              <p>
                With over a decade of consultancy experience, I have served as
                Lead, Associate, and Local Evaluation Consultant on baseline,
                midline, and endline evaluations, as well as strategic
                planning in early childhood development (ECD). I have worked
                with community, district and national stakeholders, government
                ministries, universities, and international NGOs, such as
                Save the Children, UNICEF, Ubongo International, ActionAid,
                Project Concern International, and BBC Media Action. I have
                also worked as a Local Consultant for various consultancies
                for local and international firms such as Kadale Consultants
                (UK/Malawi), Syspons (Germany), Economic Sense
                (Germany/South Africa), and Fructuous Consulting (South
                Africa).
              </p>

              <p>
                Recently I have led or contributed to three externally funded
                projects at the University of Malawi in the area of early
                childhood development (ECD): 1) Strengthening Malawi's ECD
                Management Information System (USAID-funded); 2) Scaling Up
                the Child-to-Child Play-Based Learning Approach
                (IDRC-funded); and 3) the Complementary Feeding Bowl Pilot
                (UNICEF-funded). I have also collaborated with the Government
                of Malawi and UNICEF on key ECD and nutrition initiatives,
                including the development of an ECD Nutrition Training Manual
                and Standard Operating Procedures (SOPs) for Nutrition
                Programmes during COVID-19.
              </p>
               <div className="mt-10">
  <h3 className="text-2xl sm:text-3xl font-bold text-[#222] mb-6">
    Areas of Expertise
  </h3>

  <div className="border-gray-200 p-6">
    <ul className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Programme and project monitoring and evaluation (baselines, midlines,
          and endlines)
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Qualitative research: in-depth interviews (IDIs), key-informant
          interviews (KIIs), photovoice, drawing-elicited interviews, focus
          group discussions (FGDs), ethnographies, and stakeholder
          consultations
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>Qualitative data management and analysis</span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Research team training, field supervision, and leadership
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Stakeholder engagement and high-level consultation
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Evidence-based policy advising and report writing
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#b44343] font-bold">•</span>
        <span>
          Microsoft Office Suite and qualitative data analysis software (NVivo)
        </span>
      </li>
    </ul>
  </div>
</div>
              {/* FIXED: Toggle button - shows "View CV" when hidden, "Hide CV" when shown */}
              <button
                onClick={toggleCV}
                className="inline-block text-[#b44343] font-bold underline text-base sm:text-lg hover:text-rose-700"
              >
                {showCV ? "Hide CV" : "View Dr Mayeso Chinseu Lazaro  CV"}
              </button>
            </div>

            {/* CV SECTION - FIXED: Added a close button inside */}
            {showCV && (
              <section 
                id="cv-section"
                className="mt-12 sm:mt-16 scroll-mt-24"
              >
                <div className="flex justify-between items-center mb-2 sm:mb-3">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#222]">
                    Curriculum Vitae
                  </h2>
                  {/* FIXED: Added close button for CV */}
                  <button
                    onClick={toggleCV}
                    className="text-gray-400 hover:text-[#b44343] transition-colors"
                    aria-label="Close CV"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div
                  ref={containerRef}
                  className="relative bg-white shadow-md rounded-lg p-2 sm:p-4 select-none"
                  style={{ userSelect: "none" }}
                  onCopy={(e) => e.preventDefault()}
                >
                  {/* Watermark overlay */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-10 overflow-hidden">
                    <div className="text-gray-400/20 text-2xl sm:text-4xl font-bold rotate-[-30deg] whitespace-nowrap select-none">
                      Mayeso Chinseu Lazaro &nbsp;•&nbsp; View Only &nbsp;•&nbsp;
                      Mayeso Chinseu Lazaro &nbsp;•&nbsp; View Only
                    </div>
                  </div>

                  <Document
                    file={cvFile}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={
                      <div className="text-center py-20 text-gray-500">
                        Loading CV...
                      </div>
                    }
                    error={
                      <div className="text-center py-20 text-red-500">
                        Failed to load CV.
                      </div>
                    }
                  >
                    <Page
                      pageNumber={pageNumber}
                      width={Math.min(containerWidth - 16, 900)}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>

                  {/* Navigation */}
                  {numPages && (
                    <div className="flex justify-center items-center gap-3 sm:gap-4 mt-4 sm:mt-6 flex-wrap">
                      <button
                        onClick={goToPrevPage}
                        disabled={pageNumber <= 1}
                        className="px-3 sm:px-4 py-2 border rounded-md bg-white disabled:opacity-50 text-sm hover:bg-gray-50 transition-colors"
                      >
                        Previous
                      </button>

                      <span className="text-sm sm:text-base text-gray-700">
                        Page {pageNumber} of {numPages}
                      </span>

                      <button
                        onClick={goToNextPage}
                        disabled={pageNumber >= numPages}
                        className="px-3 sm:px-4 py-2 border rounded-md bg-white disabled:opacity-50 text-sm hover:bg-gray-50 transition-colors"
                      >
                        Next
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}

          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;