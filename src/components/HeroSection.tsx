'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15 * i,
        duration: 0.7,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number], // cubic-bezier for easeOut
      },
    }),
  };

  return (
    <section className="w-full relative bg-white dark:bg-[#262626] h-[420px] sm:h-[640px] md:h-[860px] overflow-hidden font-roboto transition-colors duration-300">
      {/* Main car image - slide in from right */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.42, 0, 0.58, 1], delay: 0.3 }}
        className="absolute top-[150px] sm:top-[200px] md:top-[283px] left-[200px] sm:left-[250px] md:left-[594px] w-[300px] sm:w-[500px] md:w-[810px] h-[190px] sm:h-[320px] md:h-[519px] object-cover z-10"
      >
        <Image 
          width={802} 
          height={519} 
          alt="Red Car" 
          src="/car.png" 
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
      
      {/* Left background section with glass effect - matching products grid width */}
      <div className="absolute top-0 left-0 bg-silver-100/70 dark:bg-[#1B1A1A]/90 backdrop-blur-md w-1/2 h-full z-20 border-r border-white/30 dark:border-gray-600/30 shadow-2xl transition-colors duration-300" />
      
      {/* Left side - consistent red gradients */}
      <div className="absolute top-[60px] sm:top-[80px] md:top-[80px] left-[-100px] sm:left-[-200px] md:left-[-250px] blur-[60px] sm:blur-[100px] md:blur-[150px] rounded-full bg-red-500 dark:bg-red-600 w-[200px] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[350px] md:h-[500px] z-10 opacity-100 dark:opacity-90 transition-all duration-300" />
      <div className="absolute top-[30px] sm:top-[40px] md:top-[50px] left-[-80px] sm:left-[-150px] md:left-[-200px] blur-[50px] sm:blur-[80px] md:blur-[100px] rounded-full bg-crimson-200 dark:bg-pink-500 w-[150px] sm:w-[250px] md:w-[400px] h-[150px] sm:h-[250px] md:h-[400px] z-6 opacity-90 dark:opacity-80 transition-all duration-300" />
      
      {/* Right side - consistent pink gradients */}
      <div className="absolute top-[80px] sm:top-[120px] md:top-[150px] right-[-80px] sm:right-[-150px] md:right-[-200px] blur-[80px] sm:blur-[150px] md:blur-[200px] rounded-full bg-red-400 dark:bg-pink-600 w-[200px] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[350px] md:h-[500px] z-5 opacity-30 dark:opacity-20 transition-all duration-300" />
      <div className="absolute top-[50px] sm:top-[80px] md:top-[100px] right-[-40px] sm:right-[-80px] md:right-[-100px] blur-[60px] sm:blur-[100px] md:blur-[150px] rounded-full bg-red-300 dark:bg-pink-500 w-[200px] sm:w-[350px] md:w-[500px] h-[200px] sm:h-[350px] md:h-[500px] z-6 opacity-40 dark:opacity-30 transition-all duration-300" />
      
      {/* Secondary car image - slide in from left */}
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.42, 0, 0.58, 1], delay: 0.5 }}
        className="absolute top-[280px] sm:top-[400px] md:top-[520px] left-[-20px] sm:left-[-50px] md:left-[-70px] w-[180px] sm:w-[320px] md:w-[460px] h-[120px] sm:h-[220px] md:h-[320px] object-contain z-50"
      >
        <Image 
          width={380} 
          height={280} 
          alt="Red SUV" 
          src="/car2.png" 
          className="w-full h-full object-contain"
          priority
        />
      </motion.div>
      
      {/* Animated Hero Text Content */}
      <motion.div
        className="absolute top-[90px] sm:top-[140px] md:top-[183px] left-[15px] sm:left-[60px] md:left-[93px] text-gray-200 dark:text-white w-[200px] sm:w-[350px] md:w-[494px] z-30 transition-colors duration-300"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={1}
      >
        <h1 className="text-[24px] sm:text-[42px] md:text-[64px] font-bold leading-[1.1] m-0">
          <div>Rajasthan Auto </div>
          <div>Distributors</div>
        </h1>
      </motion.div>
      {/* Animated Subtitle and description */}
      <motion.div
        className="absolute top-[170px] sm:top-[260px] md:top-[342px] left-[7px] sm:left-[45px] md:left-[99px] text-[10px] sm:text-[14px] md:text-[18px] leading-[1.4] md:leading-[28px] w-[200px] sm:w-[400px] md:w-[606px] z-30 transition-colors duration-300"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={2}
      >
        <span className="font-bold text-[#e53935] bg-white dark:bg-[#d4d4d4] px-2 py-1 rounded-md mr-2 mb-2 inline-block">100% original Mahindra products</span><br />
        <span className="font-medium text-white dark:white">Your trusted partner for genuine automotive parts and accessories.</span>
        <span className="font-medium text-white dark:text-white"> Serving India with quality, reliability, originality and expertise with more than 55 years.</span>
      </motion.div>
      {/* Animated Button */}
      <motion.div
        className="absolute top-[260px] sm:top-[300px] md:top-[466px] left-[15px] sm:left-[65px] md:left-[100px] z-30"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        custom={3}
      >
        <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer">
        <div className="shadow-[0px_5px_6px_rgba(0,0,0,0.1)] dark:shadow-[0px_5px_6px_rgba(0,0,0,0.3)] rounded-full bg-gradient-to-r from-crimson-300 to-crimson-200 dark:from-pink-500 dark:to-pink-600 hover:from-crimson-400 hover:to-crimson-300 dark:hover:from-pink-400 dark:hover:to-pink-500 w-[120px] sm:w-[140px] md:w-[160px] h-[32px] sm:h-[40px] md:h-[48px] flex items-center justify-center transition-all duration-300 cursor-pointer">
          <span className="text-white text-[13px] sm:text-[15px] md:text-lg font-bold">Contact Us</span>
        </div>
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
