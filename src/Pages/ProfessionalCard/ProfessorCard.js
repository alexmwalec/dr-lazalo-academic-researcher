import {
  FaLinkedinIn,
  FaTwitter,
  FaResearchgate,
  FaGoogleScholar,
} from "react-icons/fa";
import { SiOrcid, SiGooglescholar } from "react-icons/si";

export default function ProfessorCard() {
  return (
    <div className="w-[250px]  pb-8">
      {/* Image */}
      <div className="p-2">
        <img
          src="/profile.jpg"
          alt="Mayeso Lazalo"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="px-2">
        <h1 className="text-[20px] font-bold text-gray-800 leading-tight">
          Mayeso Lazalo
        </h1>

        <p className="mt-1 text-[14px] text-gray-700">
            Senior Lecturer, Researcher and Evaluation Consultant
        </p>

        {/* Email */}
        <a
          href="mailto:mlazaro@unima.ac.mw"
          className="block mt-8 text-red-700 underline text-[14px] break-all"
        >
          mlazaro@unima.ac.mw
        </a>

        {/* Department */}
        <div className="mt-8 text-gray-700 text-[15px] leading-relaxed">
          Department of Human Ecology
          <br />
          University of Malawi
        </div>

        {/* Links */}
        <div className="mt-8 space-y-4">
          <a
            href="#"
            className="flex items-center gap-3 text-red-700 hover:underline"
          >
            <SiGooglescholar className="text-gray-500" />
            <span>Google Scholar</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-red-700 hover:underline"
          >
            <FaResearchgate className="text-gray-500" />
            <span>ResearchGate</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-red-700 hover:underline"
          >
            <SiOrcid className="text-gray-500" />
            <span>ORCID</span>
          </a>

          <a
           href="https://www.webofscience.com"
           target="_blank"
           rel="noopener noreferrer"
          className="flex items-center gap-3 text-red-700 hover:underline"
             >
          < div className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center text-[10px] font-bold text-gray-500">
                    W
                   </div> 
               <span>Web of Science</span>
            </a>
          <a
            href="#"
            className="flex items-center gap-3 text-red-700 hover:underline"
          >
            <FaTwitter className="text-gray-500" />
            <span>Twitter</span>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 text-red-700 hover:underline"
          >
            <FaLinkedinIn className="text-gray-500" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}