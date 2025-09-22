import Image from 'next/image';

const QualitySection = () => {
  return (
    <section className="w-full bg-[#BFBFBF] dark:bg-[#2A2929] transition-colors duration-300 relative overflow-hidden">
      {/* Red blur effect background */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-red-500/30 rounded-full blur-[200px]"></div>
      
      <div className="flex flex-col lg:flex-row items-center min-h-[500px] relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 px-6 md:px-12 lg:px-16 py-12 lg:py-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Incomparable Product Quality and Technical Support
            </h2>
            
            <p className="text-gray-800 dark:text-white text-lg md:text-xl leading-relaxed mb-8">
              With over 55 years of experience in the automotive industry, Rajasthan Auto Distributors has established itself as a trusted name in Delhi&apos;s automotive parts distribution. We specialize in genuine Mahindra parts, engine components, suspension systems, and a comprehensive range of aftermarket automotive products. Our commitment to quality, reliability, and customer satisfaction has made us the preferred choice for automotive workshops, service centers, and individual vehicle owners across North India.
            </p>
            
            {/* Contact Us Button */}
            <div className="inline-flex items-center">
              <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-3 group">
                <span className="text-lg">Contact Us</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
          <div className="relative w-full max-w-2xl">
            <Image
              src="/images/automotive 1.png"
              alt="Automotive Parts Collection"
              width={600}
              height={400}
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default QualitySection; 