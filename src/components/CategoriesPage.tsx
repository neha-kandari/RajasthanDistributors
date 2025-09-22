'use client';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

// Define interfaces for our data types
interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  products: number;
  details: string;
  features: string[];
}

interface CategoryCardProps {
  category: Category;
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Carousel state for filters category
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Filter images for carousel
  const filterImages = [
    '/categories/filter/FILTER-1.png',
    '/categories/filter/FILTER2.png',
    '/categories/filter/FILTER3.png',
    '/categories/filter/FILTER4.png',
    '/categories/filter/FILTER5.png'
  ];

  // Headlight images for carousel
  const headlightImages = [
    '/categories/headlights/HEAD_LIGHT1.png',
    '/categories/headlights/HEAD_LIGHT2.png',
    '/categories/headlights/HEAD_LIGHT3.png',
    '/categories/headlights/HEAD_LIGHT4.png',
    '/categories/headlights/headlights.png'
  ];

  // Clutch set images for carousel
  const clutchSetImages = [
    '/categories/clutchSet/clutchSet1.png',
    '/categories/clutchSet/clutchSet2.png',
    '/categories/clutchSet/clutchSet.png'
  ];

  // Air conditioner images for carousel
  const airConditionerImages = [
    '/categories/air conditioner/AIR_CLEANER_ASSLY.png',
    '/categories/air conditioner/FAN_ASSLY.png',
    '/categories/air conditioner/RADIATOR_1.png',
    '/categories/air conditioner/RADIATOR.png',
    '/categories/air conditioner/air conditioner.png'
  ];

  // Engine parts images for carousel
  const enginePartsImages = [
    '/categories/carEngine/WATER_PUMP.png',
    '/categories/carEngine/OIL_PUMP_COVER_1.png',
    '/categories/carEngine/MANIFOLD.png',
    '/categories/carEngine/part.png',
    '/categories/carEngine/MANIFOLD_1.png',
    '/categories/carEngine/OIL_PUMP_COVER.png',
    '/categories/carEngine/carEngine.png'
  ];

  // Suspension parts images for carousel
  const suspensionPartsImages = [
    '/categories/SuspensionParts/part1.png',
    '/categories/SuspensionParts/part2.png',
    '/categories/SuspensionParts/part3.png',
    '/categories/SuspensionParts/part4.png',
    '/categories/SuspensionParts/suspensionParts.png'
  ];

  // Brake pads images for carousel
  const brakePadsImages = [
    '/categories/BreakPads/DISC_PAD-1.png',
    '/categories/BreakPads/DISC_PAD_.png',
    '/categories/BreakPads/BreakPads.png'
  ];

  // Body parts images for carousel
  const bodyPartsImages = [
    '/categories/bodyparts/BUMPER_1.png',
    '/categories/bodyparts/BUMPER_2.png',
    '/categories/bodyparts/BUMPER_3.png',
    '/categories/bodyparts/ENGINE_COVER.png',
    '/categories/bodyparts/ENGINE_COVER_1.png',
    '/categories/bodyparts/bodyparts.png'
  ];

  // Mirror images for carousel (updated to include all available images)
  const mirrorImages = [
    '/categories/carMirror/carMirror.png',
    '/categories/carMirror/MIRROR__1_-removebg-preview.png',
    '/categories/carMirror/MIRROR__2_.png',
    '/categories/carMirror/MIRROR__3.png'
  ];

  // Helper function to get images for current category
  const getImagesForCategory = useCallback((categoryId: string) => {
    switch (categoryId) {
      case 'filters': return filterImages;
      case 'headlights': return headlightImages;
      case 'clutch-sets': return clutchSetImages;
      case 'air-conditioner': return airConditionerImages;
      case 'engine-parts': return enginePartsImages;
      case 'suspension-parts': return suspensionPartsImages;
      case 'brake-pads': return brakePadsImages;
      case 'body-parts': return bodyPartsImages;
      case 'mirrors': return mirrorImages;
      default: return [];
    }
  }, [filterImages, headlightImages, clutchSetImages, airConditionerImages, enginePartsImages, suspensionPartsImages, brakePadsImages, bodyPartsImages, mirrorImages]);

  // Auto-advance carousel for all categories with multiple images
  useEffect(() => {
    const images = getImagesForCategory(category.id);
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds
      
      return () => clearInterval(interval);
    }
  }, [category.id, getImagesForCategory]);



  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className="relative bg-white dark:bg-[#262626] rounded-[20px] p-8 shadow-[0px_8px_32px_rgba(0,0,0,0.15)] hover:shadow-[0px_12px_40px_rgba(0,0,0,0.2)] dark:shadow-[0px_8px_32px_rgba(255,255,255,0.1)] dark:hover:shadow-[0px_12px_40px_rgba(255,255,255,0.15)] transition-all duration-300 transform hover:scale-105 cursor-pointer border border-gray-100 dark:border-red-500/30"
      role="article"
      aria-labelledby={`category-${category.id}`}
    >

      {/* Large Category Image / Carousel */}
      <div className="w-full flex justify-center mb-6">
        <div className="relative w-[320px] h-[200px] md:w-[350px] md:h-[220px] flex items-center justify-center">
          {(() => {
            const images = getImagesForCategory(category.id);
            if (images.length > 0) {
              return (
                // Carousel for all categories with multiple images
                <div className="relative w-full h-full">
                  <div className="relative w-full h-full overflow-hidden rounded-lg">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={images[currentImageIndex]}
                          alt={`${category.name} ${currentImageIndex + 1}`}
                          width={350}
                          height={220}
                          className="w-full h-full object-contain drop-shadow-lg"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                  

                </div>
              );
            } else {
              return (
                // Regular image for categories without carousel images
                <Image
                  src={category.icon}
                  alt={category.name}
                  width={350}
                  height={220}
                  className="w-full h-full object-contain drop-shadow-lg"
                  priority
                />
              );
                        }
          })()}
          </div>
        </div>

      {/* Category Content */}
      <div className="text-center">
        <h3 id={`category-${category.id}`} className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
          {category.name}
        </h3>
        
        <p className="text-gray-600 dark:text-white text-lg leading-relaxed mb-6 min-h-[3rem]">
          {category.description}
        </p>

        {/* Product Count */}
        <div className="flex justify-center mb-6">
          <div className="bg-gradient-to-r from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400 text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
            {category.products}+ Products Available
          </div>
        </div>


      </div>
    </motion.div>
  );
};

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories: Category[] = [
    {
      id: 'engine-parts',
      name: 'Engine Parts',
      icon: '/categories/carEngine.png',
      description: 'High-quality engine components for optimal performance and reliability',
      products: 100,
      details: 'Premium engine parts including pistons, valves, gaskets, and timing components. Compatible with all major car brands and models.',
      features: ['OEM Quality', 'Precision Engineered', 'Performance Tested', 'Long Lasting']
    },
    {
      id: 'suspension-parts',
      name: 'Suspension Parts',
      icon: '/categories/suspensionParts.png',
      description: 'Complete suspension systems and components for smooth ride quality',
      products: 25,
      details: 'Professional-grade suspension parts including shocks, struts, springs, and bushings for enhanced comfort and handling.',
      features: ['Enhanced Comfort', 'Improved Handling', 'Durable Materials', 'Easy Installation']
    },
    {
      id: 'clutch-sets',
      name: 'Clutch Sets',
      icon: '/categories/clutchSet.png',
      description: 'Complete clutch assemblies and replacement parts for manual transmissions',
      products: 25,
      details: 'High-quality clutch sets including pressure plates, discs, and release bearings designed for smooth operation.',
      features: ['Smooth Operation', 'Heat Resistant', 'Long Service Life', 'Complete Sets']
    },
    {
      id: 'body-parts',
      name: 'Body Parts',
      icon: '/categories/bodyparts.png',
      description: 'Exterior and interior body components for vehicle restoration and repair',
      products: 150,
      details: 'Comprehensive body parts including panels, lights, mirrors, and interior components for vehicle restoration.',
      features: ['Perfect Fit', 'Corrosion Resistant', 'Easy Installation', 'OEM Quality']
    },
    {
      id: 'brake-pads',
      name: 'Brake Pads',
      icon: '/categories/BreakPads.png',
      description: 'High-performance brake pads for superior stopping power and safety',
      products: 100,
      details: 'Premium brake pads designed for optimal stopping performance and safety across all vehicle types.',
      features: ['Superior Stopping Power', 'Low Noise', 'Extended Life', 'Dust-Free Formula']
    },
    {
      id: 'headlights',
      name: 'Headlights',
      icon: '/categories/headlights.png',
      description: 'Advanced headlight systems for enhanced visibility and safety',
      products: 45,
      details: 'Modern headlight assemblies including halogen, xenon, and LED options for improved road visibility.',
      features: ['Bright Illumination', 'Energy Efficient', 'Weather Resistant', 'Easy Installation']
    },
    {
      id: 'mirrors',
      name: 'Mirrors',
      icon: '/categories/carMirror.png',
      description: 'Side mirrors and rearview mirrors for optimal visibility',
      products: 30,
      details: 'Complete mirror assemblies including manual and electric options with heating and turn signal features.',
      features: ['Clear Reflection', 'Adjustable Design', 'Weather Proof', 'Safety Features']
    },
    {
      id: 'filters',
      name: 'Filters',
      icon: '/categories/filters.png',
      description: 'High-quality filters for air, oil, and fuel filtration systems',
      products: 60,
      details: 'Premium filtration solutions including air, oil, fuel, and cabin filters for optimal vehicle performance.',
      features: ['Superior Filtration', 'Extended Life', 'Easy Replacement', 'Multi-Brand Compatibility']
    },
    {
      id: 'air-conditioner',
      name: 'Air Conditioner',
      icon: '/categories/air conditioner.png',
      description: 'Complete AC systems and components for optimal cabin comfort',
      products: 20,
      details: 'High-performance air conditioning parts including compressors, condensers, evaporators, and refrigerants for all vehicle types.',
      features: ['Efficient Cooling', 'Energy Saving', 'Quiet Operation', 'Long Service Life']
    }
  ];

  const sortCategories = (categoriesToSort: Category[]): Category[] => {
    return categoriesToSort.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  };

  const filteredCategories = sortCategories(
    categories.filter(category => {
      const matchesSearch = category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          category.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || 
                            category.id === selectedCategory;
      return matchesSearch && matchesCategory;
    })
  );

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="w-full bg-white dark:bg-[#262626] transition-colors duration-300">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-br from-silver-100 to-white dark:from-[#2A2929] dark:to-[#262626] py-20 md:py-32 overflow-hidden"
      >
        <div className="absolute top-10 left-[-100px] blur-[80px] rounded-full bg-red-500 dark:bg-red-600 w-[300px] h-[300px] opacity-20 dark:opacity-10"></div>
        <div className="absolute bottom-10 right-[-100px] blur-[80px] rounded-full bg-crimson-200 dark:bg-pink-500 w-[400px] h-[400px] opacity-20 dark:opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Auto Parts <span className="text-crimson-200">Categories</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-white max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of automotive parts and components. From engine parts to body components, 
              we have everything you need to keep your vehicle running smoothly.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Search and Filter Section */}
      {/* Removed sort and view controls section entirely */}

      {/* Categories Grid/List */}
      <section className="py-16 md:py-20 bg-silver-100 dark:bg-[#2A2929] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4"
            >
              {selectedCategory === 'all' ? 'All Categories' : 
               categories.find(c => c.id === selectedCategory)?.name || 'Categories'}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-white"
            >
              {filteredCategories.length} {filteredCategories.length === 1 ? 'category' : 'categories'} found
            </motion.p>
          </div>

          <AnimatePresence mode="wait">
            {filteredCategories.length > 0 ? (
              <motion.div
                key="categories"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredCategories.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  No categories found
                </h3>
                <p className="text-lg text-gray-600 dark:text-white mb-8">
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-crimson-200 hover:bg-crimson-300 text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
                >
                  Reset Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-crimson-200 to-crimson-300 dark:from-crimson-300 dark:to-crimson-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Our expert team is here to help you find the perfect automotive parts for your specific needs. Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919315933509"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-crimson-200 hover:bg-gray-100 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-crimson-300 inline-block text-center"
              >
                Contact Our Experts
              </a>
              <Link
                href="/quote"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-crimson-200 transition-all duration-300 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-crimson-300"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;