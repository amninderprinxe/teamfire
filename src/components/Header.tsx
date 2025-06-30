import { Flame, Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 transform rotate-12">
          <Leaf className="w-24 h-24" />
        </div>
        <div className="absolute top-32 right-20 transform -rotate-12">
          <Flame className="w-32 h-32" />
        </div>
        <div className="absolute bottom-16 left-1/3 transform rotate-45">
          <Leaf className="w-20 h-20" />
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 py-20 text-center">
        <div className="flex items-center justify-center mb-6">
          <Flame className="w-12 h-12 mr-4 text-orange-400" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
            Team Fire Eagles 64
          </h1>
          <Flame className="w-12 h-12 ml-4 text-orange-400" />
        </div>
        <p className="text-xl md:text-2xl font-medium text-green-100 max-w-3xl mx-auto leading-relaxed">
          Empowering Lives with Forever Living Products
        </p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-green-200">
          <Leaf className="w-6 h-6" />
          <span className="text-lg">Natural • Healthy • Successful</span>
          <Leaf className="w-6 h-6" />
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="rgb(249 250 251)" />
        </svg>
      </div>
    </header>
  );
};

export default Header;