import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Awards from './Pages/Awards/awards';
import Publications from './Pages/Publications/Publications';
import Education from './Pages/Education/Education';
import Constultancy from "./Pages/Consultancy/Consultancy";
import Contact from './Pages/Contact/Contact';
import Grants from "./Pages/Grants/Grants"
import Projects from "./Pages/Projects/Projects";
import Outreach from "./Pages/Outreach/Outreach";
import Trainings from "./Pages/Trainings/Trainings";
import Research  from "./Pages/Publications/Research/Research";
import BoardMembership from "./Pages/BoardMembership/BoardMemberShip";
import Teaching from "./Pages/Teaching/Teaching";
import Role from  "./Pages/Role/Role";
import PeerReviews from "./Pages/Peer_Reviews/PeerReviews";
import Conference from "./Pages/Conference/Conference";
import Blogs from "./Pages/Blogs/Blogs";
import Supervision from './Pages/Supervision/Supervision';
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import  ProfessorCard from "./Pages/ProfessionalCard/ProfessorCard";
import SocialShareBar from "./Pages/SocialShareBar/SocialShareBar";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes > 
        <Route path="/" element={<Home/>} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/education" element={<Education />} />
        <Route path="/consultancy" element={<Constultancy />} />
        <Route path="/grants" element={<Grants />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/trainings" element={<Trainings />} />
        <Route path="/research" element={<Research />} />
        <Route path="/board-membership" element={<BoardMembership />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/role" element={<Role />} />
        <Route path='/peer-review' element={<PeerReviews />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/professor-card" element={<ProfessorCard />} />
        <Route path="/supervision" element={<Supervision />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/social-share" element={<SocialShareBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
