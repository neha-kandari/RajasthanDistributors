'use client';
import Image from 'next/image';

const CompaniesCarousel = () => {
  const companies = [
    { name: 'Luk', logo: '/companies/Luk.png', invertInDark: false }, // Don't invert white logos
    { name: 'Monorev', logo: '/companies/monorev.png', invertInDark: true },
    { name: 'Gates', logo: '/companies/gates.png', invertInDark: true },
    { name: 'Ijin', logo: '/companies/ijin.png', invertInDark: true },
    { name: 'Autokoi', logo: '/companies/Autokoi.png', invertInDark: true },
    { name: 'Unomida', logo: '/companies/unomida.png', invertInDark: true },
    { name: 'Rane', logo: '/companies/Rane.png', invertInDark: false }, // Don't invert white logos
    { name: 'TEL', logo: '/companies/TEL.png', invertInDark: true },
    { name: 'Behr', logo: '/companies/Behr.png', invertInDark: true },
    { name: 'Hanon', logo: '/companies/Hanon.png', invertInDark: true },
    { name: 'Borgwarner', logo: '/companies/Borgwarner.png', invertInDark: true },
    { name: 'Sach', logo: '/companies/sach.png', invertInDark: true },
    { name: 'Varroc', logo: '/companies/Varroc.png', invertInDark: true },
    { name: 'Bosch', logo: '/companies/Bosch.png', invertInDark: true },
    { name: 'Talbros', logo: '/companies/Talbros.png', invertInDark: true },
    { name: 'TVS', logo: '/companies/TVS.png', invertInDark: true },
    { name: 'Mahindra', logo: '/companies/mahindra.png', invertInDark: true },
    { name: 'Gabriel', logo: '/companies/gabriel.png', invertInDark: true },
    { name: 'TataToyo', logo: '/companies/TataToyo.png', invertInDark: true },
    { name: 'Sanden', logo: '/companies/sanden.png', invertInDark: true },
  ];

  return (
    <section className="w-full bg-white dark:bg-[#262626] py-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          We Deal with <span className="text-crimson-200">Companies</span>
        </h2>

        <div className="relative w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-gradient-to-r before:from-white before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:bg-gradient-to-l after:from-white after:to-transparent after:content-[''] dark:before:from-[#262626] dark:after:from-[#262626]">
          <div className="animate-infinite-scroll flex w-[calc(200px*38)] gap-8">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div 
                key={`${company.name}-1-${index}`}
                className="flex-shrink-0 w-40 h-28 bg-white dark:bg-[#2A2929] rounded-lg shadow-lg flex items-center justify-center p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={80}
                  className={`object-contain w-full h-full max-w-[120px] max-h-[80px] transition-all duration-300 ${company.invertInDark ? 'dark:invert dark:brightness-0' : ''}`}
                  priority
                />
              </div>
            ))}
            {/* Second set of logos */}
            {companies.map((company, index) => (
              <div 
                key={`${company.name}-2-${index}`}
                className="flex-shrink-0 w-40 h-28 bg-white dark:bg-[#2A2929] rounded-lg shadow-lg flex items-center justify-center p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={120}
                  height={80}
                  className={`object-contain w-full h-full max-w-[120px] max-h-[80px] transition-all duration-300 ${company.invertInDark ? 'dark:invert dark:brightness-0' : ''}`}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 60s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CompaniesCarousel;