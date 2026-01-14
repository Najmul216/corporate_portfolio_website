"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaBehance } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BiSolidBusiness } from "react-icons/bi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mr-4 ml-4">
          {/* Brand Section */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center flex-col">
                <BiSolidBusiness className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold">FCCL</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div className="mt-auto">
              <p className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                Contact
              </p>
              <a
                href="mailto:hello@solid.com"
                className="text-white font-semibold hover:text-blue-400 transition-colors duration-200"
              >
                hello@fccl.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Product", "Careers", "Pricing"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-3">
              {["Company", "Press media", "Our Blog", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive future updates
            </p>
            <div className="flex items-center bg-slate-800 rounded-lg px-4 py-2 focus-within:ring-2 focus-within:ring-blue-500 transition-all duration-200">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent flex-1 text-white placeholder-gray-500 text-sm focus:outline-none"
              />
              <button className="text-blue-400 hover:text-blue-300 transition-colors duration-200">
                <TbSend className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mr-4 ml-4">
          {/* Copyright */}
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} FCCL @ All rights reserved
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              English
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              Support
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Behance"
            >
              <FaBehance className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
