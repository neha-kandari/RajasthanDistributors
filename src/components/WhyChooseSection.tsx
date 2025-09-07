import Image from 'next/image';

const WhyChooseSection = () => {
  return (
    <section className="w-full bg-white dark:bg-[#262626] py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            WHY CHOOSE <span className="text-crimson-200">OUR PRODUCTS</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Original Products Card */}
          <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-[20px] p-8 text-center text-white shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 dark:bg-white/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Image
                src="/icons/premium-badge 1.png"
                alt="Original Products"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Original Products</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Only reliable parts from<br />
              trusted Rajasthan Autodistributors
            </p>
          </div>

          {/* Affordable Rates Card */}
          <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-[20px] p-8 text-center text-white shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 dark:bg-white/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Image
                src="/icons/money 1.png"
                alt="Affordable Rates"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Affordable Rates</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Only reliable parts from<br />
              trusted Rajasthan Autodistributors
            </p>
          </div>

          {/* Wide Variety Card */}
          <div className="bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 rounded-[20px] p-8 text-center text-white shadow-[0px_8px_32px_rgba(220,53,69,0.3)] hover:shadow-[0px_12px_40px_rgba(220,53,69,0.4)] transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 dark:bg-white/30 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Image
                src="/icons/target 1.png"
                alt="Wide Variety"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Wide Variety</h3>
            <p className="text-sm leading-relaxed opacity-90">
              Only reliable parts from<br />
              trusted Rajasthan Autodistributors
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection; 