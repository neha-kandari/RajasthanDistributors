import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#bdbdbd] dark:bg-[#232323] text-gray-800 dark:text-white py-8 px-4 md:py-12 md:px-12 lg:py-16 lg:px-24 border-t border-white/20 dark:border-gray-600/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-20">
        {/* Logo, Brand, and Description */}
        <div className="flex flex-col items-start space-y-2 mb-4 md:mb-0 min-w-[180px]">
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
        {/* Navigation Links and Contact Details Side by Side */}
        <div className="flex flex-row gap-8 lg:gap-16 flex-1 w-full justify-center items-start">
          {/* Navigation Links - vertical */}
          <nav className="flex flex-col gap-2 text-base md:text-lg lg:text-xl font-medium">
            <Link href="/" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Home</Link>
            <Link href="/about" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">About</Link>
            <Link href="/categories" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Categories</Link>
            <a href="https://wa.me/919315933509" target="_blank" rel="noopener noreferrer" className="hover:text-[#e53935] transition-colors duration-200 text-Black dark:text-[#e53935]">Contact</a>
          </nav>
          {/* Contact Details - beside links */}
          <div className="text-sm md:text-base lg:text-lg text-gray-700 dark:text-white space-y-1 min-w-[220px]">
            <div className="font-semibold text-base md:text-lg lg:text-xl mb-1 text-gray-800 dark:text-white">Contact Details</div>
            <div><span className="font-semibold"><svg className="inline mr-1 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Z" strokeWidth="2"/><path d="M22 6 12 13 2 6" strokeWidth="2"/></svg>Phone:</span> <a href="tel:+919315933509" className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935]">+91 9315933509</a></div>
            <div><span className="font-semibold"><svg className="inline mr-1 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M21 8.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8.5" strokeWidth="2"/><path d="M3.27 6.96 12 13.01l8.73-6.05A2 2 0 0 0 19 5H5a2 2 0 0 0-1.73 1.96Z" strokeWidth="2"/></svg>Email:</span> <a href="mailto:rajasthanautodistributors@gmail.com" className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935]">rajasthanautodistributors@gmail.com</a></div>
            <div><span className="font-semibold"><svg className="inline mr-1 mb-1" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z" strokeWidth="2"/></svg>Address:</span> <a href="https://maps.google.com/?q=1073/5,+Bara+Bazar,+opp+G.N.+Auto+Market,+Main+Gate,+Kashmere+Gate,+Delhi-6" target="_blank" rel="noopener noreferrer" className="hover:text-[#e53935] transition-colors duration-200 text-gray-800 dark:text-[#e53935]">1073/5, Bara Bazar, opp G.N. Auto Market, Main Gate, Kashmere Gate, Delhi-6</a></div>
          </div>
        </div>
        {/* Social Media */}
        <div className="flex flex-col items-end space-y-4 mt-4 md:mt-0 min-w-[100px]">
          <div className="flex items-center space-x-4">
            <a href="https://www.instagram.com/rajasthan_auto_distributors?igsh=anhoeWJrcWtvbmZl" target="_blank" rel="noopener noreferrer" aria-label="Rajasthan Auto Distributors Instagram" className="hover:text-[#e53935] transition-colors duration-200 text-gray-700 dark:text-[#e53935]">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
                <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
              </svg>
            </a>
            {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#e53935] transition-colors duration-200 text-gray-700 dark:text-[#e53935]">
              <svg width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect width="20" height="20" x="2" y="2" rx="6" strokeWidth="2"/>
                <path d="M15 8h-2a1 1 0 0 0-1 1v2h3l-.5 3h-2.5v7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm md:text-base lg:text-lg text-gray-600 dark:text-white">
        &copy; {new Date().getFullYear()} Rajasthan Auto Distributors. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 