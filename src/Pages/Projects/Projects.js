import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";

const projects = [
  {
    id: 1,
    title: "Strengthening Malawi's ECD Management Information System (T4ECE)",
    role: "Co-Investigator",
    period: "February 2024 – December 2024",
    value: "$26,779.58",
    funder: "USAID – Together for Early Childhood Evidence (T4ECE), USA",
  },
  {
    id: 2,
    title: "Child-to-Child Learning Approach: Scaling Up Inclusive Play-Based Learning for Smooth Transition from Pre-Primary to Early Grades",
    role: "Co-Principal Investigator; later Project Lead for Malawi",
    period: "May 2022 – November 2023",
    value: "$94,755.43",
    funder: "International Development Research Centre (IDRC), Canada",
  },
  {
    id: 3,
    title: "Complementary Feeding Bowl Pilot Project: Integration of an Infant and Young Child Feeding (IYCF) Toolkit",
    role: "Co-Investigator; later Project Lead for Endline Evaluation",
    period: "November 2022 – November 2023",
    value: "$135,000",
    funder: "UNICEF, Malawi",
  },
  {
    id: 4,
    title: "Improving Secondary Education in Malawi (ISEM) Phase I & II – Continuous Professional Development (CPD)",
    role: "Expert Member and Manual Editor",
    period: "December 2022 – November 2023",
    value: "€36,409",
    funder: "European Union (EU)",
   
  },
  {
    id: 5,
    title: "Energy Provision in Developing Countries: Understanding Private Sector Challenges of Scaling Up Energy Access in Uganda, Tanzania, and Malawi",
    role: "Co-Investigator",
    period: "June 2020 – June 2021",
    value: "£5,000",
    funder: "Global Challenges Research Fund (GCRF), United Kingdom",
    
  },
  {
    id: 6,
    title: "Promoting Farmers' Rights and Collective Marketing for Sustainable Food Security (Pro-Farmer Project)",
    role: "Monitoring and Evaluation Manager",
    period: "June 2018 – June 2019",
    value: "$120,000",
    funder: "Open Society Initiative for Southern Africa (OSISA)",
  },
];

const Projects = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleViewDetails = (id) => {
    setSelectedItem(selectedItem === id ? null : id);
  };

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

           <Sidebar />

          {/* Main Content */}
          <main className="flex-1 py-6 lg:py-12">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Projects & Grants
            </h1>

            <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-10">
              Selected projects and grants undertaken through local and international collaborations and partnerships
            </p>

            <div className="space-y-8 sm:space-y-12 text-[#2b3b34]">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="sm:pl-6 border-b border-gray-200 pb-6 sm:pb-8 last:border-0"
                >
                  <h2 className="text-lg sm:text-2xl font-semibold text-[#b44343] mb-3 hover:text-rose-700 leading-snug">
                    {project.title}
                  </h2>

                  <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <p>
                      <strong>Role:</strong> {project.role}
                    </p>
                    <p>
                      <strong>Grant Period:</strong> {project.period}
                    </p>
                    <p>
                      <strong>Grant Value:</strong> {project.value}
                    </p>
                    <p>
                      <strong>Funder:</strong> {project.funder}
                    </p>
                  </div>

                  {/* View Details Button */}
                  <div className="flex items-center gap-4 sm:gap-6 mt-4 flex-wrap">
                    <button
                      onClick={() => handleViewDetails(project.id)}
                      className="text-amber-700 text-sm font-medium hover:text-amber-800"
                    >
                      {selectedItem === project.id ? "Hide Details" : "View Details"}
                    </button>
                  </div>                  
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

export default Projects;