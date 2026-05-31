import FeaturedProduct from '@/components/sections/FeaturedProduct';
import { Pricing, Process, Trust } from '@/components/sections/HomeSections';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';

export function LazySections() {
  return (
    <>
      <Process />
      <RuixenBentoCards />
      <FeaturedProduct />
      <Trust />
      <Pricing />
    </>
  );
}
