import React from "react";
import Header from "../Header/Header";
import {
  FaLinkedinIn,
  FaResearchgate,
  FaGlobe
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";
import humanity from "../../Images/humanity.jpg";
import Footer from "../Footer/Footer";

const Teaching = () => {
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
            Mayeso Chinseu Lazaro
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
            <a href="https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#b44343] underline"
  >
    <SiGooglescholar className="text-[#4285F4]" />
    Google Scholar
  </a>

  
   <a href="https://www.researchgate.net/profile/Mayeso-Lazaro-2"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#b44343] underline"
  >
    <FaResearchgate className="text-[#00CCBB]" />
    ResearchGate
  </a>

  
    <a href="https://orcid.org/0000-0001-5314-0638"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#b44343] underline"
  >
    <SiOrcid className="text-[#A6CE39]" />
    ORCID
  </a>

  
   <a href="http://www.linkedin.com/in/mayeso-chinseu-lazaro"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#b44343] underline"
  >
    <FaLinkedinIn className="text-[#0A66C2]" />
    LinkedIn
  </a>

  
   <a href="https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 text-[#b44343] underline"
  >
    <FaGlobe className="text-[#34A853]" />
    Institutional Web Page
  </a>
          </div>
        </div>
      </aside>
  <main className="flex-1 py-12">
  <h1 className="text-3xl font-bold text-black mb-6">
    Teaching
  </h1>

  <p className="text-lg text-black leading-8 mb-8">
    I have been teaching at the University of Malawi since 2008, at both
    undergraduate and postgraduate levels, in a range of thematic areas that
    focus on family studies, community development, research methodologies,
    early childhood development, and ageing.
  </p>

  <div className="space-y-8 text-black">
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#b44343]">
        Teaching and Research Areas
      </h2>

      <ol className="list-decimal ml-8 space-y-2 leading-8">
        <li>Children, youth, and family well-being</li>
        <li>Early Childhood Development (ECD) and education policy and practice</li>
        <li>Ageing, intergenerational relations, and social support systems</li>
        <li>Gender, social protection, and community-based development</li>
        <li>Qualitative and mixed-methods research design</li>
      </ol>
    </div>

    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#b44343]">
        Undergraduate Courses Taught
      </h2>

      <ol className="list-decimal ml-8 space-y-2 leading-8">
        <li>Program Planning and Implementation (4th Year)</li>
        <li>Program Monitoring and Evaluation (4th Year)</li>
        <li>Entrepreneurship (4th Year)</li>
        <li>Family Dynamics and Gender (4th Year)</li>
        <li>Family Assessment and Interventions (4th Year)</li>
        <li>Fundamentals of Ageing (4th Year)</li>
        <li>Housing Policy and Economics (4th Year)</li>
        <li>Research Project (4th Year)</li>
        <li>Family Health and Wellness (3rd Year)</li>
        <li>Family Theories and Approaches (3rd Year)</li>
        <li>Research Methods (3rd Year)</li>
        <li>Housing and Environment (3rd Year)</li>
        <li>Family Economic Empowerment (2nd Year)</li>
        <li>Introduction to Gender and Family Relations (2nd Year)</li>
        <li>Family and Communication (2nd Year)</li>
        <li>Family Resilience and Diversity (2nd Year)</li>
        <li>Introduction to Family Studies (1st Year)</li>
        <li>Introduction to Family Economics (1st Year)</li>
        <li>Introduction to Entrepreneurship (1st Year)</li>
        <li>Introduction to Gerontology (1st Year)</li>
      </ol>
    </div>

    <div>
      <h2 className="text-2xl font-semibold mb-4 text-[#b44343]">
        Postgraduate Teaching
      </h2>

      <p className="leading-8">
        At the postgraduate level, I have taught the
        <strong> Household Environmental Management</strong> module and have
        supervised postgraduate research in areas related to family studies,
        ageing, community development, early childhood development, and
        qualitative research methodologies.
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

export default Teaching;