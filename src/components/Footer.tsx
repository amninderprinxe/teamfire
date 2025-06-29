import React from 'react';
import { Leaf, Flame } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <Flame className="w-8 h-8 mr-3 text-orange-400" />
            <h3 className="text-2xl font-bold">Team Fire Eagles 64</h3>
            <Leaf className="w-8 h-8 ml-3 text-emerald-400" />
          </div>

          {/* Copyright */}
          <p className="text-gray-300 text-center mb-4">
            &copy; 2025 Team Fire Eagles 64. All Rights Reserved.
          </p>

          {/* Disclaimer */}
          <p className="text-gray-400 text-sm text-center max-w-3xl leading-relaxed">
            This is the official page for independent Forever Living distributors – Team Fire Eagles 64. 
            This site is not managed by Forever Living Products International, LLC. All earnings and success 
            stories are based on individual results and may vary.
          </p>

          {/* Decorative Elements */}
          <div className="mt-8 flex items-center space-x-4 text-emerald-400">
            <Leaf className="w-4 h-4" />
            <span className="text-sm">Natural • Healthy • Successful</span>
            <Leaf className="w-4 h-4" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;