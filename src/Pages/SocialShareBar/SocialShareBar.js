import React from "react";
import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const SocialShareBar = () => {
  const pageUrl = window.location.href;
  const title = "Mayeso Lazaro - Academic Portfolio";

  return (
    <div className="w-full py-10 mt-16">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-gray-600">

        <span className="text-xl font-light">
          Share
        </span>

        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            pageUrl
          )}&text=${encodeURIComponent(title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b44343] hover:opacity-75 transition"
        >
          <FaTwitter size={24} />
        </a>

        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            pageUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b44343] hover:opacity-75 transition"
        >
          <FaLinkedinIn size={24} />
        </a>

        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            pageUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b44343] hover:opacity-75 transition"
        >
          <FaFacebookF size={22} />
        </a>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(
            title + " " + pageUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#b44343] hover:opacity-75 transition"
        >
          <FaWhatsapp size={24} />
        </a>

        <a
          href={`mailto:?subject=${encodeURIComponent(
            title
          )}&body=${encodeURIComponent(pageUrl)}`}
          className="text-[#b44343] hover:opacity-75 transition"
        >
          <FaEnvelope size={24} />
        </a>

      </div>
    </div>
  );
};

export default SocialShareBar;