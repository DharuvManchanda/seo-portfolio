"use client";

import Link from "next/link";
import { FaInstagram, FaGoogle, FaMapMarkerAlt, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdCheckCircle } from "react-icons/md";

export const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=919779473602&text=Hello%2C%20I%20want%20to%20book%20you%20for%20an%20event%20";
  const reviewLink = "https://g.page/r/CWmTa1X8pfQLEBM/review";
  
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About & Social Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">HAIR & MAKEUP BY ANJALI</h3>
            <p className="text-neutral-400 leading-relaxed">
              Professional makeup artist specializing in Bridal, Party Makeup, and Hairstyling. 
              Offering premium on-location services in Chandigarh and Delhi.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-pink-500">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/hairandmakeupbyanjali/" target="_blank" className="text-pink-500 hover:text-pink-400 transition">
                <FaInstagram size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/hairandmakeupbyanjali/" target="_blank" className="text-pink-500 hover:text-pink-400 transition">
                <FaLinkedinIn size={20} />
              </Link>
              <Link href={reviewLink} target="_blank" className="text-pink-500 hover:text-pink-400 transition">
                <FaGoogle size={20} />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-pink-500">Our Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">Bridal Makeup (HD & Airbrush)</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">Party Makeup</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">Hairstyling & Draping</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">Fashion Shoots</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">Online Classes</span>
              </div>
              <div className="flex items-start space-x-2">
                <MdCheckCircle className="text-pink-500 flex-shrink-0 mt-1" size={16} />
                <span className="text-neutral-400">On-Site Services</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-pink-500">Book Your Session</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-pink-500 mt-1" size={16} />
              <div className="text-neutral-400">
                <p>Delhi, India</p>
                <p>Chandigarh, Punjab 148023</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-pink-500" size={16} />
              <Link href={whatsappLink} target="_blank" className="text-neutral-400 hover:text-pink-500 transition">
                Chat on WhatsApp
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <HiMail className="text-pink-500" size={16} />
              <Link href="mailto:bhutanianjali1945@gmail.com" className="text-neutral-400 hover:text-pink-500 transition">
                bhutanianjali1945@gmail.com
              </Link>
            </div>
            <div className="pt-4">
              <Link 
                href={reviewLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition-colors duration-200"
              >
                <FaGoogle className="mr-2" />
                Write a Review
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-neutral-800">
        <p className="text-center text-neutral-500">
          © {new Date().getFullYear()} Hair & Makeup by Anjali. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}; 