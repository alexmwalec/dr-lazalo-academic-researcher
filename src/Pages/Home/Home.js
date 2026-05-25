// Home.jsx
import React from "react";
import Header from "../Header/Header";

const Home = () => {
  // Social media links
  const socialLinks = [
    { name: 'Google Scholar', icon: 'fa-brands fa-google-scholar', url: 'https://scholar.google.com/' },
    { name: 'ResearchGate', icon: 'fa-brands fa-researchgate', url: 'https://www.researchgate.net/' },
    { name: 'ORCID', icon: 'fa-brands fa-orcid', url: 'https://orcid.org/' },
    { name: 'Twitter', icon: 'fa-brands fa-twitter', url: 'https://twitter.com/' },
    { name: 'LinkedIn', icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/' },
  ];

  // Consulting affiliations
  const consultingAffiliations = [
    { name: 'Nthanda Consulting', url: 'https://nthandaconsulting.com' },
    { name: 'Kula Consultants', url: 'https://kulaconsultants.com' },
    { name: 'CITS Uganda', url: 'https://www.citsug.org' },
    { name: 'Fructuous Consulting', url: 'https://fructuousconsulting.africa' },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#f5f3f0] font-['Inter',sans-serif]">
        <div className="max-w-7xl mx-auto py-8 px-4 md:px-6 lg:px-8">
          {/* Main Card - White background with rounded corners */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden flex flex-col md:flex-row">
            
            {/* LEFT SIDEBAR - Profile, Title, Email, Department, Socials */}
            <div className="md:w-[32%] bg-[#fefaf5] border-r border-[#eae3d9] p-6 md:p-8">
              {/* Name */}
              <h1 className="font-['Merriweather',serif] text-2xl md:text-3xl font-bold text-[#2c3e2f] mb-1 leading-tight">
                Dr. [Your Full Name]
              </h1>
              
              {/* Title */}
              <div className="text-xs md:text-sm font-semibold text-[#7e5e3c] uppercase tracking-wide mb-4 border-b-2 border-[#e0d3c4] inline-block pb-1">
                Senior Lecturer, Researcher & Evaluation Consultant
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-2 text-sm text-[#2c553c] font-medium mb-3 break-all">
                <i className="fa-regular fa-envelope w-5 text-[#9b7b5c]"></i>
                <span>your.email@unima.mw</span>
              </div>
              
              {/* Department */}
              <div className="text-xs md:text-sm text-[#5e6b6b] mb-5 pl-3 border-l-3 border-[#cfb797] italic">
                Department of Geography <br/>
                University of Malawi
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f0eae2] text-[#3c5e3a] w-9 h-9 rounded-full flex items-center justify-center hover:bg-[#dccfbf] hover:text-[#1f3b2c] transition-all duration-200 hover:-translate-y-0.5"
                    aria-label={social.name}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
              
              {/* Consulting Affiliations - Additional Links */}
              <div className="mt-6 pt-4 border-t border-[#ece1d6]">
                <p className="text-[0.7rem] font-semibold text-[#b39b7c] uppercase tracking-wide mb-2">
                  Affiliations
                </p>
                <div className="flex flex-col gap-1.5">
                  {consultingAffiliations.map((affil, idx) => (
                    <a
                      key={idx}
                      href={affil.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#5e6b6b] hover:text-[#2c553c] transition-colors flex items-center gap-1"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-magic text-[0.6rem]"></i>
                      {affil.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-6 text-[0.7rem] text-[#b39b7c]">
                <i className="fa-regular fa-gem mr-1"></i> Qualitative research | ECD | M&E
              </div>
            </div>
            
            {/* RIGHT CONTENT - Background Image + About Me + Experience */}
            <div className="md:w-[68%] p-6 md:p-8">
              {/* Background Image with Overlay - Academic/Field Research Style */}
              <div className="relative rounded-2xl overflow-hidden mb-7 shadow-sm h-44 md:h-52 bg-cover bg-center" 
                   style={{ 
                     backgroundImage: `url('https://images.unsplash.com/photo-1582213782179-e0d53f98f3b9?q=80&w=2070&auto=format&fit=crop')`,
                     backgroundPosition: 'center 35%'
                   }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-5 text-white">
                  <h3 className="font-['Merriweather',serif] text-xl md:text-2xl font-semibold drop-shadow-md">
                    Children, Youth & Families
                  </h3>
                  <p className="text-sm opacity-95 drop-shadow-sm">Qualitative research · ECD · Ageing</p>
                </div>
              </div>
              
              {/* About Me Section*/}
              <h2 className="font-['Merriweather',serif] text-2xl md:text-3xl font-semibold text-[#2c3e2f] mb-4 border-l-4 border-[#cfb797] pl-4">
                About me
              </h2>
              
              <div className="space-y-3 text-[#2b3b34] text-sm md:text-base leading-relaxed">
                <p>
                   I'm a Senior Lecturer, Researcher, and Evaluation Consultant at the <strong>University of Malawi</strong>, 
                  with over 15 years of academic and applied research and evaluation experience. I am also the 
                  <strong> Managing Director of Nthanda Consulting</strong> and <strong>Managing Partner at Kula Consultants</strong>. 
                  I serve as a Technical Associate at <strong>CITS Uganda</strong> and network team member of 
                  <strong> Fructuous Consulting, South Africa</strong>.
                </p>
                <p>
                  I hold an interdisciplinary <strong>PhD in Human Geography and Social Sciences</strong> (University of Hull, UK), 
                  an <strong>MSc in Family Ecology and Practice</strong> (University of Alberta, Canada), and a 
                  <strong>Bachelor of Education (Humanities)</strong> (University of Malawi). My teaching, research, consultancy 
                  and outreach focus on <strong>children, youth, families, older persons and ageing</strong>, with specialisation 
                  in <strong>qualitative research methodologies</strong>.
                </p>
                <p>
                  With over a decade of consultancy experience, I have served as Lead, Associate, and Local Evaluation Consultant 
                  on baseline, midline, and endline evaluations, as well as strategic planning in 
                  <strong> early childhood development (ECD)</strong>. I have worked with community, district and national stakeholders, 
                  government ministries, universities, and international NGOs including Save the Children, UNICEF, Ubongo International, 
                  ActionAid, Project Concern International, and BBC Media Action.
                </p>
                <p>
                  Recently I led or contributed to three externally funded projects at the University of Malawi in ECD: 
                  <strong> Strengthening Malawi's ECD Management Information System</strong> (USAID-funded); 
                  <strong> Scaling Up the Child-to-Child Play-Based Learning Approach</strong> (IDRC-funded); and 
                  <strong> the Complementary Feeding Bowl Pilot</strong> (UNICEF-funded). I also collaborated with the Government of Malawi 
                  and UNICEF on key ECD and nutrition initiatives, including the development of an ECD Nutrition Training Manual and 
                  Standard Operating Procedures (SOPs) for Nutrition Programmes during COVID-19.
                </p>
              </div>
              
              {/* Quick expertise badges */}
              <div className="flex flex-wrap gap-2 mt-6 pt-2 border-t border-[#ece1d6]">
                <span className="px-3 py-1 bg-[#f0eae2] text-[#4a6741] text-xs rounded-full">#QualitativeMethods</span>
                <span className="px-3 py-1 bg-[#f0eae2] text-[#4a6741] text-xs rounded-full">#EarlyChildhoodDevelopment</span>
                <span className="px-3 py-1 bg-[#f0eae2] text-[#4a6741] text-xs rounded-full">#MonitoringAndEvaluation</span>
                <span className="px-3 py-1 bg-[#f0eae2] text-[#4a6741] text-xs rounded-full">#SocialEpidemiology</span>
                <span className="px-3 py-1 bg-[#f0eae2] text-[#4a6741] text-xs rounded-full">#FamilyEcology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;