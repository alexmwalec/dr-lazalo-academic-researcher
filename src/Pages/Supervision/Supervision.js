import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import humanity from "../../Images/humanity.jpg";

const supervisionData = [
  // Current Supervisees (2027 Completion)
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Joshua Midian and Esther Phambana",
    title: "Association between housing quality and multi-dimensional wellbeing in rural and urban Zomba"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Priscila Dula",
    title: "Investigating teacher perceptions on school lived experience of students from broken homes: a case of girls and boys boarding schools in Zomba"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Phillip Sungeni and Richard Khukhumba",
    title: "Vendor and consumer perceptions towards fried sweet potatoes (mbalaga) in Chikwawa and Salima: Have sweet potatoes replaced Irish potatoes in trading centres?"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Gomezgani Chilwa and Louis Chikanthu",
    title: "Investigating University of Malawi students' satisfaction with their housing on and off campus"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Daniel Mkumbwa and Wongani Muhone",
    title: "Assessing the financial literacy and saving behaviour of university students in Zomba"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Lenard Kantondo and Adam Adon",
    title: "Investigating the aspiration-reality gap in housing among informal settlement dwellers in Zomba"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "John Nkata and Emmanuel Chinyama",
    title: "Assessing the impact of family cohesion on the socio-economic status of families in Thundu, Zomba"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Francis Nyalugwe and George Mwamadi",
    title: "An assessment of the adequacy of Higher Education Students' Loan and Grants Board upkeep allowance against the rising cost of living in Zomba: A case of University of Malawi students"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Mathews Doni and Harneck Sitolo",
    title: "The impact of private primary tuition on household resource management and nutrition security among families in Zomba: The case of The Learning Centre and MAT Academy"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "McDonald Muhone and Aonenji Mulenga",
    title: "Assessing the potential impact of the quality of housing on the health of households in Che Mbera, Balaka"
  },
  {
    year: "2027",
    status: "Expected to complete in 2027",
    student: "Precious Smart and Limbani Chomali",
    title: "Assessing the impact of food inflation on household food choices in Zomba"
  },

  // 2025 Supervisees
  {
    year: "2025",
    student: "Davie Makwinja Kalitsiro and Carren Cathy Kananji",
    title: "Evaluating the environmental sustainability in informal settlement of Mpondabwino, Zomba"
  },
  {
    year: "2025",
    student: "Ebenezer Genesis",
    title: "Assessing how children and older persons co-residence affect their quality of life"
  },
  {
    year: "2025",
    student: "Hastings Kachale and Amos Chirwa",
    title: "Assessing quality, affordability, and safety of privately-owned students housing in Chikanda, Zomba"
  },
  {
    year: "2025",
    student: "Jones Kamwendo and Hernim Namani",
    title: "The impact of incomplete dwelling structures on the well-being of women in female-headed households in Mangunda, Thyolo"
  },
  {
    year: "2025",
    student: "Laurent Shaba and Feston Mgomba",
    title: "Exploring the impact of financial literacy on family conflict in Chinamwali, Zomba"
  },
  {
    year: "2025",
    student: "Precious Mkalawa and Adam Mkandawire",
    title: "The impact of poor housing conditions on the wellbeing of University of Malawi students living in Chikanda, Zomba"
  },
  {
    year: "2025",
    student: "Fedson Ntentha and Tiyamike Ezekiel",
    title: "Understanding older persons abuse: forms, risk factors, protective factors, preventive measures, and their effectiveness"
  },
  {
    year: "2025",
    student: "Ulunji Shaba and Hernderson Mwale",
    title: "Exploring the perceptions of children, young people, and older persons on older persons care in Chikanda"
  },
  {
    year: "2025",
    student: "Wesley Chiphwanya and Feston Machemba",
    title: "Assessing effects of poor housing on quality of life of older persons in Jali, Zomba"
  },

  // 2024 Supervisees
  {
    year: "2024",
    student: "Chisomo Julius and Chisomo Kaira",
    title: "Exploring the influence of households' socioeconomic status on consumer behaviour in Zomba"
  },
  {
    year: "2024",
    student: "Bryan Kalonga and Good Siyame",
    title: "The influence of cultural norms and values on consumer decision-making and behaviour in Zomba"
  },
  {
    year: "2024",
    student: "Yamikani Lizibowa and Wongani Mdumuka",
    title: "An examination of the relationship between financial literacy and family financial behaviour in Zomba urban and rural"
  },
  {
    year: "2024",
    student: "Memory Kamwendo and Andrea Kishombe",
    title: "Investigating the impact of divorce on social interaction of preschool children in Zomba"
  },
  {
    year: "2024",
    student: "Grace Madondolo and Clement Madzidzi",
    title: "Exploring the impact of poor housing conditions on child development and well-being in Zomba rural and urban"
  },
  {
    year: "2024",
    student: "Lyness Kumwenda and Mphatso Batson",
    title: "Exploring how housing influences the well-being of older persons"
  },

  // External Examination
  {
    year: "2023",
    status: "External Examination",
    isExternal: true,
    title: "External Examination",
    description: "Dr Mayeso Chinseu Lazaro examined a PhD Thesis at the North-West University (NWU), South Africa (2023), in the area of older persons and ageing."
  }
];

const Supervision = () => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [page, setPage] = useState(1);

  // Get unique years from data
  const years = [
    'All',
    ...new Set(supervisionData.map((item) => item.year))
  ].sort((a, b) => {
    if (a === 'All') return -1;
    if (b === 'All') return 1;
    return b.localeCompare(a);
  });

  // Filter data by year
  const filteredData = selectedYear === 'All' 
    ? supervisionData 
    : supervisionData.filter((item) => item.year === selectedYear);

  // Pagination
  const itemsPerPage = 7;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Reset to page 1 when filter changes
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-['Arial',sans-serif]">
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
              Supervision
            </h1>

            <p className="text-lg text-gray-700 mb-6 sm:mb-8 leading-7 font-['Arial',sans-serif]">
              Undergraduate, postgraduate supervision and external examination records.
            </p>

            {/* Filter by Year */}
            <div className="mb-6 sm:mb-8">
              <label className="font-semibold mr-3 text-sm sm:text-base">
                Filter by Year:
              </label>
              <select
                value={selectedYear}
                onChange={handleYearChange}
                className="border border-gray-300 px-3 py-2 rounded-md bg-white text-sm sm:text-base mt-2 sm:mt-0"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            {/* List */}
            <div className="space-y-3">
              {currentItems.length === 0 ? (
                <div className="text-center py-10 text-gray-500 text-lg">
                  No supervision records found for {selectedYear}.
                </div>
              ) : (
                currentItems.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-300 pb-4"
                  >
                    {/* Status Badge - Different styling for different statuses */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">
                        {item.year}
                      </span>
                      <span className={`text-base px-2 py-0.5 rounded-full font-medium ${
                        item.isExternal 
                          ? ''
                          : item.status?.includes('Expected') 
                            ? 'text-base'
                            : 'text-base'
                      }`}>
                        {item.status}
                      </span>
                    </div>

                    {/* External Examination - Special Display */}
                    {item.isExternal ? (
                      <>
                        <h3 className="text-xl font-bold text-gray-900 mt-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mt-1 text-lg leading-7">
                          {item.description}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-gray-900 font-medium mt-1 text-lg leading-7">
                          <span className="text-gray-800 font-semibold">Student:</span>{" "}
                          {item.student}
                        </p>
                        <p className="text-gray-900 mt-1 text-lg leading-7">
                          <span className="text-gray-800 font-semibold">Title:</span>{" "}
                          {item.title}
                        </p>
                      </>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1 sm:gap-2 mt-6 sm:mt-8 flex-wrap">
                <button
                  onClick={() => setPage(Math.max(page - 1, 1))}
                  disabled={page === 1}
                  className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
                >
                  Previous
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setPage(index + 1)}
                    className={`px-3 sm:px-4 py-2 border rounded text-sm ${
                      page === index + 1
                        ? "bg-[#b44343] text-white border-[#b44343]"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setPage(Math.min(page + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-3 sm:px-4 py-2 border rounded bg-white disabled:opacity-50 text-sm"
                >
                  Next
                </button>
              </div>
            )}

            {filteredData.length > 0 && (
              <div className="text-center text-gray-600 mt-4 text-lg">
                Page {page} of {totalPages}
              </div>
            )}
          </main>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Supervision;