import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-16 px-8 relative overflow-hidden">
      <div className="absolute -top-75 left-25 w-96 h-96 opacity-10 scale-300">
        <Image src="/images/path3.png" alt="" width={384} height={384} className="object-contain" />
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-32 h-32 relative">
                <Image
                  src="/images/logo1.png"
                  alt="Enat Bank Logo"
                  width={300}
                  height={300}
                  className="object-contain scale-250 absolute top-10 -left-8"
                />
              </div>
            </div>
          </div>

          {/* Product & Services */}
          <div className="md:col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Product & Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Loan</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Saving</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Women Financing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Digital Banking</a></li>
            </ul>
          </div>

          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-6">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">History</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Our Unique Approaches</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="text-gray-800 font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Branches</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Feedback</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-500 transition-colors">Contact Info</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-500 text-sm">
              © Copyright Enat Bank. Privacy & Legal | Sitemap
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
