'use client';

import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import Link from 'next/link';
import { useState, useRef } from 'react';

// Define the Category interface to match CategoriesPage
interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  products: number;

  details: string;
  features: string[];
}

const CategoriesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Use the same categories data from CategoriesPage but with icons from public/icons
  const categories: Category[] = [
    {
      id: 'engine-parts',
      name: 'Engine Parts',
      icon: '/categories/carEngine.png',
      description: 'High-quality engine components for optimal performance and reliability',
      products: 25,
      details: 'Premium engine parts including pistons, valves, gaskets, and timing components. Compatible with all major car brands and models.',
      features: ['OEM Quality', 'Precision Engineered', 'Performance Tested', 'Long Lasting']
    },
    {
      id: 'suspension-parts',
      name: 'Suspension Parts',
      icon: '/categories/suspensionParts.png',
      description: 'Complete suspension systems and components for smooth ride quality',
      products: 18,
      details: 'Professional-grade suspension parts including shocks, struts, springs, and bushings for enhanced comfort and handling.',
      features: ['Enhanced Comfort', 'Improved Handling', 'Durable Materials', 'Easy Installation']
    },
    {
      id: 'clutch-sets',
      name: 'Clutch Sets',
      icon: '/categories/clutchSet.png',
      description: 'Complete clutch assemblies and replacement parts for manual transmissions',
      products: 15,
      details: 'High-quality clutch sets including pressure plates, discs, and release bearings designed for smooth operation.',
      features: ['Smooth Operation', 'Heat Resistant', 'Long Service Life', 'Complete Sets']
    },
    {
      id: 'body-parts',
      name: 'Body Parts',
      icon: '/categories/bodyparts.png',
      description: 'Exterior and interior body components for vehicle restoration and repair',
      products: 30,
      details: 'Wide range of body parts including panels, bumpers, doors, and trim pieces for comprehensive vehicle restoration.',
      features: ['Perfect Fit', 'Corrosion Resistant', 'Original Design', 'Multiple Options']
    },
    {
      id: 'brake-pads',
      name: 'Brake Pads',
      icon: '/categories/BreakPads.png',
      description: 'High-performance brake pads for superior stopping power and safety',
      products: 20,
      details: 'Premium brake pads manufactured to OEM specifications for optimal braking performance and vehicle safety.',
      features: ['Superior Stopping', 'Low Noise', 'Dust-Free Formula', 'Extended Life']
    },
    {
      id: 'head-lights',
      name: 'Head Lights',
      icon: '/categories/headlights.png',
      description: 'Advanced headlight systems and LED lighting solutions for enhanced visibility',
      products: 12,
      details: 'Modern headlight assemblies including halogen, xenon, and LED options for improved road visibility and safety.',
      features: ['Bright Illumination', 'Energy Efficient', 'Weather Resistant', 'Easy Replacement']
    },
    {
      id: 'mirror',
      name: 'Mirror',
      icon: '/categories/carMirror.png',
      description: 'Side mirrors and rearview mirrors for optimal visibility and safety',
      products: 8,
      details: 'Complete mirror assemblies including manual and electric options with heating and turn signal features.',
      features: ['Clear Reflection', 'Adjustable Design', 'Weather Proof', 'Safety Features']
    },
    {
      id: 'filters',
      name: 'Filters',
      icon: '/categories/filters.png',
      description: 'Air, oil, and fuel filters for engine protection and optimal performance',
      products: 22,
      details: 'High-efficiency filters including air, oil, fuel, and cabin filters to keep your engine running smoothly.',
      features: ['High Filtration', 'Long Lasting', 'Easy Installation', 'Multiple Types']
    },
    {
      id: 'air-conditioner',
      name: 'Air Conditioner',
      icon: '/categories/air conditioner.png',
      description: 'Complete AC systems and components for optimal cabin comfort',
      products: 18,
      details: 'High-performance air conditioning parts including compressors, condensers, evaporators, and refrigerants for all vehicle types.',
      features: ['Efficient Cooling', 'Energy Saving', 'Quiet Operation', 'Long Service Life']
    }
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  return (
    <section className="w-full py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            SEARCH BY <span className="text-red-600">CATEGORY</span>
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#2A2929] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#2A2929] rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-gray-600 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Scrollable Categories Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {categories.map((category) => (
              <div key={category.id} className="flex-shrink-0 w-[280px]">
                <Link href={`/categories#${category.id}`}>
          <Tilt glareEnable={true} glareMaxOpacity={0.15} glareColor="#fff" glarePosition="all" tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.04} transitionSpeed={700} className="w-full">
            <div className="cursor-pointer dark:p-[2px] dark:bg-gradient-to-r dark:from-red-500 dark:via-pink-500 dark:to-red-600">
              <div className="p-8 flex flex-col items-center justify-center text-center min-h-[320px] bg-[#898989] dark:bg-[#2A2929] shadow-[9px_12px_29.8px_#393939] dark:shadow-[9px_12px_29.8px_rgba(0,0,0,0.6)]">
                <div className="mb-6">
                  <Image
                            src={category.icon}
                            alt={category.name}
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                  />
                </div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                          {category.name}
                </h3>
              </div>
            </div>
          </Tilt>
                </Link>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection; 