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

  // Use the same categories data from CategoriesPage but with correct icon paths
  const categories: Category[] = [
    {
      id: 'engine-parts',
      name: 'Engine Parts',
      icon: '/categories/carEngine/carEngine.png',
      description: 'High-quality engine components for optimal performance and reliability',
      products: 25,
      details: 'Premium engine parts including pistons, valves, gaskets, and timing components. Compatible with all major car brands and models.',
      features: ['OEM Quality', 'Precision Engineered', 'Performance Tested', 'Long Lasting']
    },
    {
      id: 'suspension-parts',
      name: 'Suspension Parts',
      icon: '/categories/SuspensionParts/suspensionParts.png',
      description: 'Complete suspension systems and components for smooth ride quality',
      products: 18,
      details: 'Professional-grade suspension parts including shocks, struts, springs, and bushings for enhanced comfort and handling.',
      features: ['Enhanced Comfort', 'Improved Handling', 'Durable Materials', 'Easy Installation']
    },
    {
      id: 'clutch-sets',
      name: 'Clutch Sets',
      icon: '/categories/clutchSet/clutchSet.png',
      description: 'Complete clutch assemblies and replacement parts for manual transmissions',
      products: 15,
      details: 'High-quality clutch sets including pressure plates, discs, and release bearings designed for smooth operation.',
      features: ['Smooth Operation', 'Heat Resistant', 'Long Service Life', 'Complete Sets']
    },
    {
      id: 'body-parts',
      name: 'Body Parts',
      icon: '/categories/bodyparts/bodyparts.png',
      description: 'Exterior and interior body components for vehicle restoration and repair',
      products: 30,
      details: 'Wide range of body parts including panels, bumpers, doors, and trim pieces for comprehensive vehicle restoration.',
      features: ['Perfect Fit', 'Corrosion Resistant', 'Easy Installation', 'OEM Quality']
    },
    {
      id: 'brake-pads',
      name: 'Brake Pads',
      icon: '/categories/BreakPads/BreakPads.png',
      description: 'High-performance brake pads for superior stopping power and safety',
      products: 20,
      details: 'Premium brake pads designed for optimal stopping performance and safety across all vehicle types.',
      features: ['Superior Stopping Power', 'Low Noise', 'Extended Life', 'Dust-Free Formula']
    },
    {
      id: 'headlights',
      name: 'Headlights',
      icon: '/categories/headlights/headlights.png',
      description: 'Advanced headlight systems for enhanced visibility and safety',
      products: 12,
      details: 'Modern headlight assemblies including halogen, xenon, and LED options for improved road visibility.',
      features: ['Bright Illumination', 'Energy Efficient', 'Weather Resistant', 'Easy Installation']
    },
    {
      id: 'mirrors',
      name: 'Mirrors',
      icon: '/categories/carMirror/carMirror.png',
      description: 'Side mirrors and rearview mirrors for optimal visibility',
      products: 8,
      details: 'Complete mirror assemblies including manual and electric options with heating and turn signal features.',
      features: ['Clear Reflection', 'Adjustable Design', 'Weather Proof', 'Safety Features']
    },
    {
      id: 'filters',
      name: 'Filters',
      icon: '/categories/filters.png',
      description: 'High-quality filters for air, oil, and fuel filtration systems',
      products: 16,
      details: 'Premium filtration solutions including air, oil, fuel, and cabin filters for optimal vehicle performance.',
      features: ['Superior Filtration', 'Extended Life', 'Easy Replacement', 'Multi-Brand Compatibility']
    },
    {
      id: 'air-conditioner',
      name: 'Air Conditioner',
      icon: '/categories/air conditioner/air conditioner.png',
      description: 'Complete AC systems and components for optimal cabin comfort',
      products: 10,
      details: 'High-performance air conditioning parts including compressors, condensers, evaporators, and refrigerants for all vehicle types.',
      features: ['Efficient Cooling', 'Energy Saving', 'Quiet Operation', 'Long Service Life']
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

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

  return (
    <section className="w-full bg-white dark:bg-[#262626] py-16 md:py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our <span className="text-red-600">Categories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-white max-w-2xl mx-auto">
            Explore our comprehensive range of automotive parts and components
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#262626] shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-[#2A2929] transition-colors duration-200"
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
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-[#262626] shadow-lg rounded-full p-3 hover:bg-gray-50 dark:hover:bg-[#2A2929] transition-colors duration-200"
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
