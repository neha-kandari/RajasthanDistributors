import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#bdbdbd] dark:bg-[#232323] text-gray-800 dark:text-white py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 border-t border-white/20 dark:border-gray-600/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-20">
        {/* Logo, Brand, and Description */}
        <div className="flex flex-col items-start space-y-2 mb-4 lg:mb-0 min-w-[180px] w-full lg:w-auto">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logolight.png"
              alt="Logo Light"
              width={64}
              height={44}
              className="object-contain block dark:hidden"
            />
            <Image
              src="/images/Logo1.png"
              alt="Logo Dark"
              width={64}
              height={44}
              className="object-contain hidden dark:block"
            />
            <div className="font-roboto">
              <div className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-[#e53935]">RAJASTHAN</div>
              <div className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-[#ffffff] dark:text-white-300">AUTO DISTRIBUTORS</div>
            </div>
          </div>
          <p className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-white max-w-xs mt-2">
          Serving India with quality, reliability, originality and expertise with more than 55 years.
          </p>
        </div>
        
        {/* Navigation Links and Contact Details */}
        <div className="flex flex-col sm:flex-row gap-8 lg:gap-16 flex-1 w-full justify-start lg:justify-center items-start">
          {/* Navigation Links - vertical */}
          <nav className="flex flex-col gap-2 text-base md:text-lg lg:text-xl font-medium">
            <Link href="/" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Home</Link>
            <Link href="/about" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">About</Link>
            <Link href="/categories" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Categories</Link>
            <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Contact</a>
          </nav>
          
          {/* Contact Details */}
          <div className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-white space-y-2 w-full sm:w-auto sm:min-w-[280px]">
            <div className="font-semibold text-base md:text-lg lg:text-xl mb-2 text-gray-800 dark:text-white">Contact Details</div>
            
            {/* Phone */}
            <div className="flex items-start gap-2">
              <svg className="flex-shrink-0 mt-0.5" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Z" strokeWidth="2"/>
                <path d="M22 6 12 13 2 6" strokeWidth="2"/>
              </svg>
              <div>
                <span className="font-semibold">Phone:</span>
                <a href="tel:+919315933509" className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935] block sm:inline ml-1 break-all sm:break-normal">
                  +91 9315933509
                </a>
              </div>
            </div>
            
            {/* Email */}
            <div className="flex items-start gap-2">
              <svg className="flex-shrink-0 mt-0.5" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5" strokeWidth="2"/>
                <path d="M3.27 6.96 12 13.01l8.73-6.05A2 2 0 0 0 19 5H5a2 2 0 0 0-1.73 1.96Z" strokeWidth="2"/>
              </svg>
              <div className="flex-1 min-w-0">
                <span className="font-semibold">Email:</span>
                <a 
                  href="mailto:rajasthanautodistributors@gmail.com" 
                  className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935] block sm:inline ml-1 break-all sm:break-words"
                >
                  rajasthanautodistributors@gmail.com
                </a>
              </div>
            </div>
            
            {/* Address */}
            <div className="flex items-start gap-2">
              <svg className="flex-shrink-0 mt-0.5" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" strokeWidth="2"/>
              </svg>
              <div className="flex-1 min-w-0">
                <span className="font-semibold">Address:</span>
                <a 
                  href="https://www.google.com/maps/search/Rajasthan+Auto+distributors,+1073/5,+Bara+Bazar+Rd,+opposite+Gurunanak+Auto+main+Market,+Kashmere+Gate,+New+Delhi,+Delhi,+110006" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935] block sm:inline ml-1 break-words"
                >
                  Rajasthan Auto distributors, 1073/5, Bara Bazar Rd, opposite Gurunanak Auto main Market, Kashmere Gate, New Delhi, Delhi, 110006
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="flex flex-col items-start lg:items-end space-y-4 mt-4 lg:mt-0 min-w-[100px] w-full lg:w-auto">
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/rajasthan_auto_distributors?igsh=anhoeWJrcWtvbmZl" target="_blank" rel="noopener noreferrer" aria-label="Rajasthan Auto Distributors Instagram" className="hover:text-[#e53935] transition-colors duration-200 text-gray-700 dark:text-[#e53935]">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright and Developer Info */}
      <div className="mt-8 text-center text-sm md:text-base lg:text-lg text-gray-600 dark:text-white space-y-2">
        <div>
          &copy; {new Date().getFullYear()} Rajasthan Auto Distributors. All rights reserved.
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
          <span>Developed by</span>
          {/* <a 
            href="https://www.xpanix.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e53935] hover:text-red-700 dark:hover:text-red-400 font-semibold transition-colors duration-200"
          > */}
           Neha
          {/* </a> */}
          <span className="hidden sm:inline">•</span>
          <a 
            href="https://wa.me/918930005190" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[#e53935] hover:text-red-700 dark:hover:text-red-400 font-semibold transition-colors duration-200 flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            +91 9520100542
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
