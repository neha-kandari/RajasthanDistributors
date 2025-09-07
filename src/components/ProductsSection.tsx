import Image from 'next/image';

const ProductsSection = () => {
  return (
    <section className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Products Grid - maintain 2x2 grid on all screen sizes */}
      <div className="grid grid-cols-2 gap-0">
          
          {/* Car Side Light */}
          <div className="relative h-[180px] sm:h-[280px] md:h-[360px] bg-white dark:bg-[#2A2929] flex items-center justify-center px-2 sm:px-4 md:px-6 transition-colors duration-300 gap-2 sm:gap-4 md:gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-[10px] sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                CAR SIDE LIGHT
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/lights.png"
                alt="Car Side Light"
                width={180}
                height={140}
                className="object-contain drop-shadow-lg w-[60px] sm:w-[120px] md:w-[180px] h-[45px] sm:h-[90px] md:h-[140px]"
                priority
              />
            </div>
          </div>

          {/* Car Disk Brakers */}
          <div className="relative h-[180px] sm:h-[280px] md:h-[360px] bg-silver-100/70 dark:bg-[#1B1A1A] flex items-center justify-center px-2 sm:px-4 md:px-6 transition-colors duration-300 gap-2 sm:gap-4 md:gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-[10px] sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                CAR DISK BRAKERS
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/carDisk.png"
                alt="Car Disk Brakers"
                width={180}
                height={180}
                className="object-contain drop-shadow-lg w-[60px] sm:w-[120px] md:w-[180px] h-[60px] sm:h-[120px] md:h-[180px]"
                priority
              />
            </div>
          </div>

          {/* Car Tyre Ring */}
          <div className="relative h-[180px] sm:h-[280px] md:h-[360px] bg-silver-100/70 dark:bg-[#1B1A1A] flex items-center justify-center px-2 sm:px-4 md:px-6 transition-colors duration-300 gap-2 sm:gap-4 md:gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-[10px] sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                CAR TYRE RING
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/carTire.png"
                alt="Car Tyre Ring"
                width={180}
                height={180}
                className="object-contain drop-shadow-lg w-[60px] sm:w-[120px] md:w-[180px] h-[60px] sm:h-[120px] md:h-[180px]"
                priority
              />
            </div>
          </div>

          {/* Car Seat Covers */}
          <div className="relative h-[180px] sm:h-[280px] md:h-[360px] bg-white dark:bg-[#2A2929] flex items-center justify-center px-2 sm:px-4 md:px-6 transition-colors duration-300 gap-2 sm:gap-4 md:gap-8">
            <div className="flex flex-col justify-center">
              <h3 className="text-[10px] sm:text-lg md:text-2xl font-bold text-gray-800 dark:text-white tracking-wide">
                CAR SEAT COVERS
              </h3>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/seatcover.png"
                alt="Car Seat Covers"
                width={220}
                height={200}
                className="object-contain drop-shadow-lg w-[70px] sm:w-[140px] md:w-[220px] h-[65px] sm:h-[130px] md:h-[200px]"
                priority
              />
            </div>
          </div>

      </div>
    </section>
  );
};

export default ProductsSection; 