import { ExternalLink, Leaf, Heart, Brain, Smile, Zap } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Aloe Vera Gel',
      description: 'Boost digestion and immunity with pure aloe vera',
      icon: <Leaf className="w-8 h-8" />,
      link: 'https://www.aloestoreindia.in/product-single/ALOE_VERA_GEL_1L',
      benefits: ['Digestive Health', 'Immune Support', 'Natural Detox']
    },
    {
      name: 'Forever Bright Toothgel',
      description: 'Natural fluoride-free oral care for healthy teeth',
      icon: <Smile className="w-8 h-8" />,
      link: 'https://www.aloestoreindia.in/product-single/FOREVER_BRIGHT_TOOTHGEL',
      benefits: ['Natural Formula', 'Fluoride-Free', 'Fresh Breath']
    },
    {
      name: 'Forever Arctic Sea',
      description: 'Omega-3 for optimal brain and heart health',
      icon: <Brain className="w-8 h-8" />,
      link: 'https://www.aloestoreindia.in/product-single/FOREVER_ARCTIC_SEA',
      benefits: ['Brain Health', 'Heart Support', 'Omega-3 Rich']
    },
    {
      name: 'Forever Bee Honey',
      description: 'Pure natural energy booster from nature\'s best',
      icon: <Zap className="w-8 h-8" />,
      link: 'https://www.aloestoreindia.in/product-single/FOREVER_BEE_HONEY',
      benefits: ['Natural Energy', 'Antioxidants', 'Pure Honey']
    },
    {
      name: 'Forever ARGI+',
      description: 'Convenient power pack of nutrition and performance',
      icon: <Heart className="w-8 h-8" />,
      link: 'https://www.aloestoreindia.in/product-single/FOREVER_ARGI%2B',
      benefits: ['Performance', 'Nutrition', 'Cardiovascular']
    }
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Premium Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of natural, scientifically-formulated products that have transformed 
            millions of lives worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-100"
            >
              <div className="text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {product.name}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 hover:scale-105 shadow-lg group"
              >
                Buy Now
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.aloestoreindia.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-emerald-600 to-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-green-700 transition-all duration-200 hover:scale-105 shadow-xl"
          >
            Shop All Products
            <ExternalLink className="w-5 h-5 ml-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
