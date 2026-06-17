import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";
import Footer from "../Footer/Footer";

const Awards = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Header />

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
            <h1 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">
              Education & Awards
            </h1>

            {/* Qualifications */}
            <section className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold text-[#b44343] mb-4 sm:mb-6">
                Qualifications
              </h2>

              <ol className="list-decimal ml-5 sm:ml-8 space-y-4 text-black leading-7 sm:leading-8 text-sm sm:text-base">
                <li>
                
                    Interdisciplinary Doctor of Philosophy (PhD)
                  
                  , Human Geography and Social Sciences, University of Hull,
                  United Kingdom, 2018.
                  <br />
    
                </li>

                <li>
                
                    Postgraduate Certificate in Research Training
                  
                  , University of Hull, United Kingdom, 2016.
                </li>

                <li>
                
                    Master of Science (MSc) in Family Ecology and Practice
                  
                  , University of Alberta, Canada, 2013.
                </li>

                <li>
                
                    Bachelor of Education Humanities (with Credit)
                  
                  , University of Malawi, Malawi, 2007.
                </li>
              </ol>
            </section>

            {/* Awards */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#b44343] mb-4 sm:mb-6">
                Awards
              </h2>

              <ol className="list-decimal ml-5 sm:ml-8 space-y-4 text-black leading-7 sm:leading-8 text-sm sm:text-base">
                <li>University of Hull Studentship,<span> International Fee Bursary ,</span> University of Hull, United Kingdom (2015–2018).
                </li>

                <li>
                Mary Louise Imrie Graduate Student Award,
                  University of Alberta, Canada (January 2012).
                </li>

                <li>
                Louise Davies Memorial Graduate Scholarship,
                  University of Alberta, Canada (September 2011).
                </li>

                <li>
                
                    Engberg Graduate Scholarship in International Home Economics
                  
                  , University of Alberta, Canada (September 2011).
                </li>

                <li>
                
                    University of Alberta Graduate Students' Association
                    Professional Development Grant
                  
                  , University of Alberta, Canada (December 21, 2012).
                </li>

                <li>
                
                    Malawi Government Scholarship for Junior Staff Development
                  {" "}
                  (July 2010 – August 2012).
                </li>
              </ol>
            </section>
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Awards;