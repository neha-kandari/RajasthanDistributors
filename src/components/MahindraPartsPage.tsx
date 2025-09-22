'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

// Define interfaces for the vehicle models
interface VehicleModel {
  id: string;
  name: string;
  image: string;
  type: string;
}

const MahindraPartsPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Mahindra vehicle models
  const mahindraModels: VehicleModel[] = [
    {
      id: 'xuv700',
      name: 'XUV 700',
      image: '/cars/Mahindra XUV700.png',
      type: 'SUV'
    },
    {
      id: 'scorpio-n',
      name: 'Scorpio N',
      image: '/cars/Mahindra Scorpio N.png',
      type: 'SUV'
    },
    {
      id: 'scorpio',
      name: 'Scorpio',
      image: '/cars/Mahindra Scorpio.png',
      type: 'SUV'
    },
    {
      id: 'scorpio-classic',
      name: 'Scorpio Classic',
      image: '/cars/Scorpio 2006-2009.png',
      type: 'SUV'
    },
    {
      id: 'thar',
      name: 'Thar',
      image: '/cars/Mahindra Thar .png',
      type: 'SUV'
    },
    {
      id: 'thar-roxx',
      name: 'Thar ROXX',
      image: '/cars/Mahindra Thar ROXX SUV.png',
      type: 'SUV'
    },
    {
      id: 'xuv500',
      name: 'XUV 500',
      image: '/cars/Mahindra XUV500.png',
      type: 'SUV'
    },
    {
      id: 'xuv300',
      name: 'XUV 300',
      image: '/cars/MahindraXUV300.png',
      type: 'Compact SUV'
    },
    {
      id: 'bolero-neo',
      name: 'Bolero Neo',
      image: '/cars/Mahindra Bolero Neo.png',
      type: 'SUV'
    },
    {
      id: 'bolero-pickup',
      name: 'Bolero Pickup',
      image: '/cars/Mahindra Bolero pickup.png',
      type: 'Pickup Truck'
    },
    {
      id: 'marazzo',
      name: 'Marazzo',
      image: '/cars/Mahindra Marazzo.png',
      type: 'MPV'
    },
    {
      id: 'xylo',
      name: 'Xylo',
      image: '/cars/Mahindra Xylo.png',
      type: 'MPV'
    },
    {
      id: 'kuv100-nxt',
      name: 'KUV100 NXT',
      image: '/cars/Mahindra KUV100 NXT.png',
      type: 'Micro SUV'
    }
  ];

  return (
    <div className="w-full bg-white dark:bg-[#262626] transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-red-50 via-red-25 to-white dark:from-[#2A2929] dark:via-[#2F1B1B] dark:to-[#262626] py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute top-10 left-[-150px] blur-[120px] rounded-full bg-red-500 w-[400px] h-[400px] opacity-30"></div>
        <div className="absolute bottom-10 right-[-150px] blur-[120px] rounded-full bg-red-600 w-[500px] h-[500px] opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-[100px] rounded-full bg-red-400 w-[300px] h-[300px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <Image
                src="/companies/mahindra.png"
                alt="Mahindra Logo"
                width={200}
                height={100}
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Mahindra <span className="text-red-600">Auto Parts</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-600 dark:text-red-300 mb-8">
              Genuine Parts & Accessories
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of genuine Mahindra auto parts. From engine components to accessories, 
              we provide authentic parts to keep your Mahindra vehicle running at its best.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Vehicle Models Section */}
      <section className="py-16 bg-gray-50 dark:bg-[#2A2929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
              Mahindra <span className="text-red-600">Vehicle Models</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white">
              We provide parts for all popular Mahindra models
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {mahindraModels.map((model, index) => (
              <motion.div
                key={model.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-[#262626] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-red-500"
              >
                <div className="text-center">
                  <div className="w-full h-40 bg-gray-100 dark:bg-[#2A2929] rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                    <Image
                      src={model.image}
                      alt={model.name}
                      width={200}
                      height={120}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 dark:text-white">
                    {model.type}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-red-50 dark:bg-[#2A2929]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Need a Specific <span className="text-red-600">Part?</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-white mb-8">
              Can&apos;t find what you&apos;re looking for? Contact us directly and we&apos;ll help you find the right Mahindra part for your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919315933509"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Call: +91 9315933509
              </a>
              <a
                href="https://wa.me/919315933509"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-[#262626] border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MahindraPartsPage; 