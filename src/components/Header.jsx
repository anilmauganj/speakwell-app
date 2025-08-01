"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* Header */}
      <header className="bg-blue-900 text-white fixed w-full z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">SpeakWell</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#courses" className="hover:text-yellow-300">Courses</a>
            <a href="#testimonials" className="hover:text-yellow-300">Testimonials</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>

          {/* Mobile Toggle Button */}
          <button onClick={toggleDrawer} className="md:hidden focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <nav className="space-y-4">
            <a href="#about" className="block hover:text-yellow-300" onClick={toggleDrawer}>About</a>
            <a href="#courses" className="block hover:text-yellow-300" onClick={toggleDrawer}>Courses</a>
            <a href="#testimonials" className="block hover:text-yellow-300" onClick={toggleDrawer}>Testimonials</a>
            <a href="#contact" className="block hover:text-yellow-300" onClick={toggleDrawer}>Contact</a>
          </nav>
        </div>
      </div>
    </>
  );
}
