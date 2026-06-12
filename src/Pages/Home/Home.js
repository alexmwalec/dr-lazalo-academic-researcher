import React from "react";
import Header from "../Header/Header";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import Footer from "../Footer/Footer";
import humanity from "../../Images/humanity.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

        {/* Banner */}
<div className="relative w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[16/5] overflow-hidden">
  <img
    src={humanity}
    alt="Academic Research Banner"
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-black/10" />
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
            <h1 className="text-2xl sm:text-3xl font-bold text-[#222] mb-4 sm:mb-5">
              About me
            </h1>

            <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-10 max-w-4xl">
              Senior Lecturer, Researcher, and Evaluation Consultant with
              extensive experience in teaching, research, consultancy and
              community engagement.
            </p>

            <div className="space-y-6 sm:space-y-8 text-[16px] sm:text-[18px] leading-8 sm:leading-9 text-[#333] max-w-5xl">
              <p>
                Senior Lecturer, Researcher, and Evaluation Consultant at the{" "}
                <strong>University of Malawi</strong>, with over 15 years of
                academic and applied research and evaluation experience. I am
                also the{" "}
                <strong>Managing Director of Nthanda Consulting</strong> and{" "}
                <strong>Managing Partner at Kula Consultants</strong>. I am a
                Technical Associate at The Center for Institutional and
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
                I hold an interdisciplinary{" "}
                <strong>PhD in Human Geography and Social Sciences</strong>{" "}
                (University of Hull, UK), an{" "}
                <strong>MSc in Family Ecology and Practice</strong> (University
                of Alberta, Canada), and a{" "}
                <strong>Bachelor of Education (Humanities)</strong> (University
                of Malawi). My teaching, research, consultancy and outreach
                activities focus on children, youth, and families, as well as
                older persons and aging, with specialisation in qualitative
                research methodologies.
              </p>

              <p>
                With over a decade of consultancy experience, I have served as
                Lead, Associate, and Local Evaluation Consultant on baseline,
                midline, and endline evaluations as well as strategic planning
                in <strong>early childhood development (ECD)</strong>.
              </p>

              <p>
                Recently I led or contributed to externally funded projects at
                the University of Malawi focused on ECD, nutrition and
                education systems strengthening in collaboration with UNICEF,
                USAID and other international partners.
              </p>

              <span className="block text-black font-bold">CV</span>
            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;