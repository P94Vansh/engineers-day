"use client";
import React from "react";

const Footer = ({ id }) => {
  return (
    <footer id={id} className="bg-black text-white">
      <h2 className="text-center md:text-5xl text-3xl pt-4 font-bold ">Contact Us</h2>
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Faculty Coordinators */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center  ">
            Faculty Coordinators
          </h3>
          <ul className="space-y-2 text-center  ">
            <li>
              <span className="block text-lg">Dr. Madhu Kirola</span>
              <span className="text-gray-400 text-sm">(HOD, CSE)</span>
            </li>
            <li>
              <span className="block text-lg">Mr. Gaurav Thakur</span>
              <span className="text-gray-400 text-sm">(HOD, CE)</span>
            </li>
          </ul>
        </div>

        {/* Student Coordinator */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center  ">
            Student Coordinator
          </h3>
          <div className="text-center  ">
            <p className="text-lg">Ishu Mishra</p>
            <p className="text-gray-400 text-sm">(General Secretary, Core Committee UIT)</p>
            <a
              href="tel:+919193373770"
              className="block mt-1 text-blue-400 hover:underline"
            >
              +91 91933 73770
            </a>
          </div>
        </div>

        {/* Technical Support */}
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-4 text-center  ">
            Registration / Email Support
          </h3>
          <div className="text-center  ">
            <p className="text-lg">Vansh Gambhir</p>
            <span className="text-gray-400 text-sm">(Technical Head, Core Committee, UIT)</span>
            <a
              href="tel:+918979402739"
              className="block mt-1 text-blue-400 hover:underline"
            >
              +91 89794 02739
            </a>
          </div>
        </div>
      </div>

      {/* Event Queries */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-center  ">
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-3">
            For Technical Events Queries
          </h3>
          <p className="text-lg">Ankur Verma</p>
          <span className="text-gray-400 text-sm">(Deputy General Secretary, Core Committee, UIT)</span>
          <a
            href="tel:+917667222066"
            className="block mt-1 text-blue-400 hover:underline"
          >
            +91 76672 22066
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-500 mb-3">
            For Non-Technical Events Queries
          </h3>
          <p className="text-lg">Simran</p>
          <span className="text-gray-400 text-sm">(Executive Member, Core Committee, UIT)</span>
          <a
            href="tel:+919520354625"
            className="block mt-1 text-blue-400 hover:underline"
          >
            +91 95203 54625
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 pb-6 text-center text-sm text-gray-400">
        <p>&copy; 2025 Engineers&apos; Day. All rights reserved.</p>
        <p className="mt-2">
          Site Created by:{" "}
          <span className="text-white font-medium">Vansh Gambhir</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;