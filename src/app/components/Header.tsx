"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-[#00ff9d]">Rithik</span>
            <span className="text-white">Rajkumar</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff9d] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden menu-button text-white hover:text-[#00ff9d] transition-colors duration-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          } overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-md rounded-xl mt-2`}
        >
          <nav className="flex flex-col space-y-4 py-4 px-4">
            <Link
              href="/"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 py-2 text-lg font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Home
            </Link>
            <Link
              href="/#about"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 py-2 text-lg font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              About
            </Link>
            <Link
              href="/#projects"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 py-2 text-lg font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Projects
            </Link>
            <Link
              href="/#contact"
              className="text-white hover:text-[#00ff9d] transition-colors duration-300 py-2 text-lg font-medium flex items-center"
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 bg-[#00ff9d] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
