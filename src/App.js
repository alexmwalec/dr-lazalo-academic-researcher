import React from 'react';
import { BrowserRouter, Router, Routes,Route} from 'react-router-dom';
import Awards from './Pages/Awards/awards';
import Publications from './Pages/Publications/Publications';
import Education from './Pages/Education/Education';
import Constultancy from "./Pages/Consultancy/Consultancy";
import Grants from "./Pages/Grants/Grants"
import Projects from "./Pages/Projects/Projects";
import Outreach from "./Pages/Outreach/Outreach";
import Editorial from "./Pages/Editorial/Editorial";
import Research  from "./Pages/Research/Research";
import BoardMembership from "./Pages/BoardMembership/BoardMemberShip";
import Teaching from "./Pages/Teaching/Teaching";
import Role from  "./Pages/Role/Role";
import Peer_Reviews from "./Pages/Peer_Reviews/Peer_Reviews";
import Conference from "./Pages/Conference/Conference";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Header/Header";
import  Sidebar from "./Pages/Sidebar/Sidebar";
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
        <Route path="/outreach" element={<Outreach />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/research" element={<Research />} />
        <Route path="/board-membership" element={<BoardMembership />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/role" element={<Role />} />
        <Route path='/peer-review' element={<Peer_Reviews />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/header" element={<Header />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
