export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About RestoHub</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2015, RestoHub has been serving exceptional cuisine in the heart of the city. 
              Our passion for culinary excellence drives us to create unforgettable dining experiences.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in using only the freshest, locally sourced ingredients to craft dishes that 
              tell a story of tradition, innovation, and pure culinary artistry.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">8+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">50K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
                <div className="text-gray-600">Menu Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>

            <button className="bg-orange-400 hover:bg-orange-500 text-black px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              Learn More About Us
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/textures/DSC01420.jpg"
                  alt="Restaurant interior"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/textures/DSC01461.jpg"
                  alt="Chef preparing food"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/textures/DSC01489.jpg"
                  alt="Dining area"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src="/textures/DSC02031.jpg"
                  alt="Kitchen"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
