'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutUsPage = () => {
  return (
    <div className="w-full bg-white dark:bg-[#262626] transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-silver-100 to-white dark:from-[#2A2929] dark:to-[#262626] py-20 md:py-32 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-[-100px] blur-[80px] rounded-full bg-red-500 dark:bg-red-600 w-[300px] h-[300px] opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-10 right-[-100px] blur-[80px] rounded-full bg-crimson-200 dark:bg-pink-500 w-[400px] h-[400px] opacity-20 dark:opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 font-roboto">
              About <span className="text-crimson-200">Rajasthan</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dimgray dark:text-red-300 mb-8">
              Auto Distributors
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
              Your trusted partner in automotive excellence, delivering quality parts and exceptional service across Rajasthan for over two decades.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 dark:text-white text-lg leading-relaxed mb-6">
                Established in 1969, Rajasthan Auto Distributors has been at the forefront of automotive parts distribution in India. We specialize in providing high-quality, genuine automotive components for cars, trucks, and commercial vehicles.
              </p>
              <p className="text-gray-600 dark:text-white text-lg leading-relaxed mb-8">
                Our commitment to excellence and customer satisfaction has made us the preferred choice for mechanics, dealerships, and vehicle owners throughout the region. We pride ourselves on our extensive inventory, competitive pricing, and unmatched customer service.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-crimson-200 mb-2">55+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-crimson-200 mb-2">10k+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-crimson-200 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cities Served</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
                <Image
                src="/images/owner.jpg"
                alt="Rajasthan Auto Distributors Owner"
                width={400}
                height={250}
                className="w-full h-auto object-cover rounded-[12px] max-w-sm mx-auto"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-silver-100 dark:bg-[#2A2929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-[20px] p-8 text-center text-white shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 dark:bg-white/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/target 1.png"
                  alt="Mission"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-lg leading-relaxed opacity-90 text-white">
                To provide the highest quality automotive parts and exceptional customer service, ensuring every vehicle runs smoothly and safely on the roads.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-[20px] p-8 text-center text-white shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/20 dark:bg-white/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Image
                  src="/icons/premium-badge 1.png"
                  alt="Vision"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-lg leading-relaxed opacity-90 text-white">
                To become the leading automotive parts dealer in India, known for reliability, originality, and unwavering commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-white dark:bg-[#262626] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
          viewport={{ once: true }}
        >
        {/* Background decorative elements */}
        <div className="absolute top-20 left-[-50px] blur-[60px] rounded-full bg-crimson-200/20 dark:bg-red-600/10 w-[200px] h-[200px] opacity-50"></div>
        <div className="absolute bottom-20 right-[-50px] blur-[60px] rounded-full bg-red-400/20 dark:bg-pink-500/10 w-[250px] h-[250px] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our <span className="text-crimson-200">Story</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
              A journey of dedication, growth, and unwavering commitment to automotive excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-crimson-200 to-crimson-300 mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line - Hidden on Mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-crimson-200 via-crimson-300 to-crimson-200 h-full rounded-full opacity-30"></div>
            
            <div className="space-y-16 md:space-y-20">
              
              {/* Timeline Item 1 - The Beginning */}
              <motion.div className="flex flex-col md:flex-row items-center gap-8 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }}>
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 text-white px-8 py-4 rounded-[25px] text-center font-bold text-lg shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300 inline-block">
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src="/icons/premium-badge 1.png"
                        alt="Beginning"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      The Beginning
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-crimson-200 rounded-full border-4 border-white dark:border-[#262626] shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-[#2A2929] rounded-[20px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                      Started as a <span className="font-semibold text-crimson-200">small family business</span> by father Deen Dayal Kothari in Kashmere Gate Delhi. With just a small shop and warehouse, driven by the vision to be the best shop for <span className="font-semibold text-crimson-200">Mahindra and Mahindra spare parts</span>.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-crimson-200 rounded-full mr-2"></div>
                      Foundation in Delhi
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 2 - Expansion */}
              <motion.div className="flex flex-col md:flex-row-reverse items-center gap-8 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
                <div className="md:w-1/2 md:text-left md:pl-12">
                  <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 text-white px-8 py-4 rounded-[25px] text-center font-bold text-lg shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300 inline-block">
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src="/icons/target 1.png"
                        alt="Expansion"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      Expansion
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-crimson-200 rounded-full border-4 border-white dark:border-[#262626] shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white dark:bg-[#2A2929] rounded-[20px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                      Expanded operations to <span className="font-semibold text-crimson-200">major states across India</span>, especially first to Rajasthan and then to other states. Focused on networking to gain more and more connections throughout the automotive industry.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-crimson-200 rounded-full mr-2"></div>
                      National Growth
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 3 - Innovation */}
              <motion.div className="flex flex-col md:flex-row items-center gap-8 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                <div className="md:w-1/2 md:text-right md:pr-12">
                  <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 text-white px-8 py-4 rounded-[25px] text-center font-bold text-lg shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300 inline-block">
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src="/icons/car-repair 1.png"
                        alt="Innovation"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      Innovation
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-crimson-200 rounded-full border-4 border-white dark:border-[#262626] shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                
                <div className="md:w-1/2 md:pl-12">
                  <div className="bg-white dark:bg-[#2A2929] rounded-[20px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                      Introduced our <span className="font-semibold text-crimson-200">website</span> and started taking online queries and orders. Providing the best automotive parts for cars through digital innovation and enhanced customer service.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-crimson-200 rounded-full mr-2"></div>
                      Digital Transformation
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Timeline Item 4 - Today */}
              <motion.div className="flex flex-col md:flex-row-reverse items-center gap-8 group" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}>
                <div className="md:w-1/2 md:text-left md:pl-12">
                  <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 text-white px-8 py-4 rounded-[25px] text-center font-bold text-lg shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300 inline-block">
                    <div className="flex items-center justify-center gap-3">
                      <Image
                        src="/icons/money 1.png"
                        alt="Today"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                      Today
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-crimson-200 rounded-full border-4 border-white dark:border-[#262626] shadow-lg group-hover:scale-125 transition-transform duration-300 z-10"></div>
                
                <div className="md:w-1/2 md:pr-12">
                  <div className="bg-white dark:bg-[#2A2929] rounded-[20px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 border border-gray-100 dark:border-gray-700">
                    <p className="text-gray-600 dark:text-white text-lg leading-relaxed">
                      Currently <span className="font-semibold text-crimson-200">planning to start exporting</span> automotive parts to different countries all over the world. Expanding our global reach while maintaining our commitment to quality and customer satisfaction.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="w-2 h-2 bg-crimson-200 rounded-full mr-2"></div>
                      Global Expansion
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>


        </div>
        </motion.div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-20 bg-silver-100 dark:bg-[#2A2929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-white max-w-3xl mx-auto">
              The principles that guide everything we do at Rajasthan Auto Distributors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Value 1 */}
            <div className="bg-white dark:bg-[#262626] rounded-[15px] p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-crimson-200 dark:bg-crimson-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/premium-badge 1.png"
                  alt="Quality"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Quality</h3>
              <p className="text-gray-600 dark:text-white text-sm">
                We never compromise on quality, ensuring every part meets the highest standards.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white dark:bg-[#262626] rounded-[15px] p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-crimson-200 dark:bg-crimson-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/target 1.png"
                  alt="Reliability"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Reliability</h3>
              <p className="text-gray-600 dark:text-white text-sm">
                Our customers trust us to deliver on time, every time, without fail.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white dark:bg-[#262626] rounded-[15px] p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-crimson-200 dark:bg-crimson-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/money 1.png"
                  alt="Value"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Value</h3>
              <p className="text-gray-600 dark:text-white text-sm">
                We offer competitive pricing without compromising on quality or service.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white dark:bg-[#262626] rounded-[15px] p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="bg-crimson-200 dark:bg-crimson-200 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Image
                  src="/icons/car-repair 1.png"
                  alt="Innovation"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">Originality</h3>
              <p className="text-gray-600 dark:text-white text-sm">
                We continuously evolve our processes to serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who trust Rajasthan Auto Distributors for their automotive needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer" className="bg-white text-crimson-200 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center">
              Contact Us Today
            </a>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-crimson-200 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
              View Our Products
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUsPage; 