import { Phone, Mail, MapPin, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'WhatsApp',
      value: '+91 7973854503',
      link: 'https://wa.me/917973854503',
      primary: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'teamfire4364@gmail.com',
      link: 'mailto:teamfire4364@gmail.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'FIRST FLOOR , OVER KRISHNA COLLECTION , NEAR BLACK BIRD INSTITITE ,RAM BAAG ROAD , MANSA, Punjab India',
      link : 'https://maps.app.goo.gl/vXBhqhjgwd6uyHfa7'
    }
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      label: 'Instagram',
      url: 'https://www.instagram.com/gursewaksran0064/',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: 'Facebook',
      url: 'https://www.facebook.com/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      label: 'YouTube',
      url: 'https://www.youtube.com/@FOREVERLIVINGKNOWLEDGE',
      color: 'hover:text-red-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Have questions or ready to start your journey? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="text-emerald-600">
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{method.label}</div>
                    {method.link ? (
                      <a
                        href={method.link}
                        className={`text-emerald-600 hover:text-emerald-700 transition-colors ${
                          method.primary ? 'font-semibold' : ''
                        }`}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="text-gray-600">{method.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* Primary CTA */}
              <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-2xl p-6 text-white">
                <h4 className="text-xl font-bold mb-3">Ready to Start?</h4>
                <p className="mb-4 text-green-100">
                  Connect with us on WhatsApp for instant support and guidance.
                </p>
                <a
                  href="https://wa.me/917973854503"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat Now on WhatsApp
                </a>
              </div>
            </div>

            {/* Social Media & Additional Info */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105 ${social.color}`}
                  >
                    <div className="text-gray-600">
                      {social.icon}
                    </div>
                    <div className="font-semibold text-gray-900">{social.label}</div>
                  </a>
                ))}
              </div>

              {/* Additional Information */}
              <div className="bg-emerald-50 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-emerald-800 mb-3">Why Contact Us?</h4>
                <ul className="space-y-2 text-emerald-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Free consultation and career guidance
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Personalized business plan
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Product recommendations
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                    Success strategy sessions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
