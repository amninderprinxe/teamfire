import { CheckCircle, ExternalLink, Smartphone, Users, DollarSign, Clock } from 'lucide-react';

const JoinTeam = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Zero Experience Needed',
      description: 'We provide complete training from basics to advanced strategies'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Training & Mentorship',
      description: 'Personal guidance from successful team leaders'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: 'Work From Phone or Laptop',
      description: 'Complete flexibility to work from anywhere, anytime'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Weekly Earnings Potential',
      description: 'Start earning within your first week of joining'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedule',
      description: 'Perfect for students, homemakers, and professionals'
    }
  ];

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Join Our Elite Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Start your journey with Team Fire Eagles 64! Whether you're a student, homemaker, 
              or professional, this is your chance to earn from anywhere and build your future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-emerald-600 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Life?
              </h3>
              <p className="text-xl mb-8 text-green-100">
                Join thousands of successful team members who have already started their journey to financial freedom.
              </p>
              <a
                href="https://docs.google.com/forms/d/1kjGJdQtLMaWWsy0EXhlWZJx2vI0U9NE5hjJ9QTv9PoA/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-emerald-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-xl"
              >
                Apply Now - It's Free!
                <ExternalLink className="w-5 h-5 ml-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;