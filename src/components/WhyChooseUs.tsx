import { TrendingUp, MessageCircle, BookOpen, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Fast-Growing Global Team',
      description: 'Join a rapidly expanding network with presence in multiple countries'
    },
    {
      icon: <MessageCircle className="w-12 h-12" />,
      title: 'One-on-One Mentorship',
      description: 'Personal guidance from experienced leaders who care about your success'
    },
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: 'Exclusive Training Resources',
      description: 'Access to premium training materials and success strategies'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: 'Recognition & Rewards',
      description: 'Regular recognition programs and attractive reward systems'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Team Fire Eagles 64?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another team - we're your partners in success with proven strategies 
            and unwavering support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2"
            >
              <div className="text-emerald-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;