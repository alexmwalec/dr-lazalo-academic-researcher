import React from "react";
import { FaLinkedinIn, FaResearchgate, FaGlobe } from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";

const Sidebar = () => {
  const socialLinks = [
    {
      name: "Google Scholar",
      icon: <SiGooglescholar className="text-[#4285F4] text-xl flex-shrink-0 w-5" />,
      url: "https://scholar.google.com/citations?hl=en&user=5BMNX2sAAAAJ",
    },
    {
      name: "ResearchGate",
      icon: <FaResearchgate className="text-[#00CCBB] text-xl flex-shrink-0 w-5" />,
      url: "https://www.researchgate.net/profile/Mayeso-Lazaro-2",
    },
    {
      name: "ORCID",
      icon: <SiOrcid className="text-[#A6CE39] text-xl flex-shrink-0 w-5" />,
      url: "https://orcid.org/0000-0001-5314-0638",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn className="text-[#0A66C2] text-xl flex-shrink-0 w-5" />,
      url: "http://www.linkedin.com/in/mayeso-chinseu-lazaro",
    },
    {
      name: "Institutional Web Page",
      icon: <FaGlobe className="text-[#34A853] text-xl flex-shrink-0 w-5" />,
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
        <h2 className="text-xl sm:text-xl font-semibold  mb-3 leading-snug">
                  Mayeso Chinseu Lazaro
        </h2>

        <p className="text-gray-700 mt-2 text-base ">
          Senior Lecturer, Researcher and Evaluation Consultant
        </p>

        <a
          href="mailto:mlazaro@unima.ac.mw"
          className="block mt-4 lg:mt-6 text-[#b44343] underline text-base sm:text-lg break-all"
        >
          mlazaro@unima.ac.mw
        </a>

        {/* Address Section - Increased font size */}
        <div className="mt-4 lg:mt-6">
          <div>
            <div className="space-y-1 text-base  leading-7 text-[#333] max-w-5xl">
              <p className="text-gray-900">University of Malawi</p>
              <p className="text-gray-900">School of Natural and Applied Sciences</p>
              <p className="text-gray-900">Human Ecology and Agricultural Sciences Department</p>
              <p className="text-gray-900">P.O. Box 280</p>
              <p className="text-gray-900">Zomba</p>
              <p className="text-gray-900">Malawi</p>
            </div>
          </div>
        </div>

        {/* Social Links - Increased font size */}
        <div className="mt-4 lg:mt-6 space-y-3 flex flex-col items-center lg:items-start">
          <div className="flex flex-col items-start">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 text-[#b44343] underline text-base sm:text-lg ${
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