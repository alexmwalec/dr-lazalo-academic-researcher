import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";
import Footer from "../Footer/Footer";

const Teaching = () => {
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
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6">
              Teaching
            </h1>

            <p className="text-base sm:text-lg text-black leading-7 sm:leading-8 mb-6 sm:mb-8">
              I have been teaching at the University of Malawi since 2008, at
              both undergraduate and postgraduate levels, in a range of thematic
              areas that focus on family studies, community development, research
              methodologies, early childhood development, and ageing.
            </p>

            <div className="space-y-8 sm:space-y-10 text-black">

              {/* Teaching and Research Areas */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#b44343]">
                  Teaching and Research Areas
                </h2>
                <ol className="list-decimal ml-5 sm:ml-8 space-y-2 leading-7 sm:leading-8 text-sm sm:text-base">
                  <li>Children, youth, and family well-being</li>
                  <li>Early Childhood Development (ECD) and education policy and practice</li>
                  <li>Ageing, intergenerational relations, and social support systems</li>
                  <li>Gender, social protection, and community-based development</li>
                  <li>Qualitative and mixed-methods research design</li>
                </ol>
              </div>

              {/* Undergraduate Courses */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#b44343]">
                  Undergraduate Courses Taught
                </h2>
                <ol className="list-decimal ml-5 sm:ml-8 space-y-2 leading-7 sm:leading-8 text-sm sm:text-base">
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

              {/* Postgraduate Teaching */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#b44343]">
                  Postgraduate Teaching
                </h2>
                <p className="leading-7 sm:leading-8 text-sm sm:text-base">
                  At the postgraduate level, I have taught the{" "}
                  Household Environmental Management, Food Science and Nutrition Seminar, and Research Methodologies modules
                </p>
              </div>

            </div>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Teaching;