import React from "react";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";

const Sidebar = () => {
  const socialLinks = [
    {
      name: "Google Scholar",
      icon: <SiGooglescholar className="text-[#4285F4] text-lg flex-shrink-0 w-5" />,
      url: "https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ",
    },
    {
      name: "ResearchGate",
      icon: <FaResearchgate className="text-[#00CCBB] text-lg flex-shrink-0 w-5" />,
      url: "https://www.researchgate.net/profile/Mayeso-Lazaro-2",
    },
    {
      name: "ORCID",
      icon: <SiOrcid className="text-[#A6CE39] text-lg flex-shrink-0 w-5" />,
      url: "https://orcid.org/0000-0001-5314-0638",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-[#0A66C2] text-lg flex-shrink-0 w-5" />,
      url: "http://www.linkedin.com/in/mayeso-chinseu-lazaro",
    },
    {
      name: "Institutional Web Page",
      icon: <FaGlobe className="text-[#34A853] text-lg flex-shrink-0 w-5" />,
      url: "https://unima.ac.mw/people/staff/search?staff=dr.+mayeso+chinseu+lazaro",
    },
  ];

  return (
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

         {/* Address Section - Clean Minimal */}
<div className="mt-4 lg:mt-8">
  <div className="space-y-0.5">
    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Institution</p>
    <p className="text-sm font-semibold text-[#2c3e2f]">University of Malawi</p>
    <p className="text-xl text-gray-500">School of Natural and Applied Sciences</p>
    <p className="text-xs text-gray-500">Human Ecology and Agricultural Sciences Department</p>
    <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-gray-100">
      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <span className="text-xs text-gray-500">P.O. Box 280, Zomba, Malawi</span>
    </div>
  </div>
</div>

        {/* Social Links */}
        <div className="mt-4 lg:mt-6 space-y-3 flex flex-col items-center lg:items-start">
          <div className="flex flex-col items-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-[#b44343] underline text-sm sm:text-base ${
                  index > 0 ? "mt-2" : ""
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;