import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Profile from "../components/Profile";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Specialization from "../components/Specialization";
import { Outlet, Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mb-auto space-y-5 border-2 pb-10 rounded-xl">
        <div className="bg-gray-300 text-center text-xl rounded-b-md">
          CLI Curriculum Vitae
        </div>
        <Profile />
        <Skills />
        <Experience />
        <Education />
        <Specialization />
      </main>
      <Footer />
    </div>
  );
};

export default Details;
