import { Play, ExternalLink, Star } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      name: 'Jaspreet Singh',
      location: 'Rajpura',
      story: 'Joining Team Fire Eagles 64 changed my life — now I earn from home while helping people live healthier!',
      videoUrl: 'https://youtu.be/cPrmWgJgrkI?si=UB1oRIfTwU9MZDmq',
      achievement: 'Full-time Income from Home'
    },
    {
      name: 'Vishal Sodhi',
      location: 'Chandigarh',
      story: 'I was a student looking for side income. This business gave me confidence and cash flow! and i bought a red coloured Range Rover Evoque from this business',
      videoUrl: 'https://youtu.be/hTzsavsvIk0?si=DDro7pvsy2FjAHoO',
      achievement: 'Range Rover Evoque Owner'
    }
  ];

  return (
    <section id="success" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real people, real results. See how Team Fire Eagles 64 has transformed lives 
            and created financial freedom for our members.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stories.map((story, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {story.achievement}
                </span>
              </div>
              
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{story.story}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900 text-lg">{story.name}</div>
                  <div className="text-emerald-600 font-medium">{story.location}</div>
                </div>
                
                <a
                  href={story.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg group"
                >
                  <Play className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Watch Story
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Team Success Video */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <h3 className="text-3xl font-bold mb-4">
              The Complete Success Journey
            </h3>
            <p className="text-xl mb-8 text-green-100">
              Watch how Team Fire changed their life and helped them achieve their dreams at a very young age 
              featuring Mr. Laddi Singh, Mr. Vishal Sodhi, and Mr. Jaspreet Singh.
            </p>
            <a
              href="https://youtu.be/J07mEBp6f9c?si=wGzzWn8Z99jYFdqp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-xl group"
            >
              <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Watch How We Did It
              <ExternalLink className="w-5 h-5 ml-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;