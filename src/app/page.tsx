import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import QualitySection from '../components/QualitySection';
import CategoriesSection from '../components/CategoriesSection';
import WhyChooseSection from '../components/WhyChooseSection';
import CompaniesCarousel from '../components/CompaniesCarousel';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <ProductsSection />
      <QualitySection />
      <CategoriesSection />
      <WhyChooseSection />
      <CompaniesCarousel />
    </div>
  );
}
