import { ArrowRight, CheckCircle, Users, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your New
            <span className="block text-emerald-600">Journey of Success</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            We are a dedicated team of Forever Business Owners helping individuals lead healthier lives 
            and build a flexible income with world-class Aloe Vera-based products. Join us on a journey 
            of wellness, confidence, and success!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <Trophy className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Success Stories</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100%</h3>
              <p className="text-gray-600">Natural Products</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={() => document.querySelector('#join')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 hover:scale-105 shadow-lg border-2 border-emerald-600"
            >
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;