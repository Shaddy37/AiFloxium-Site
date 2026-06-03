import FeaturedProduct from '@/components/sections/FeaturedProduct';
import { Pricing, Process, Trust } from '@/components/sections/HomeSections';

export function LazySections() {
  return (
    <>
      <Process />
      <FeaturedProduct />
      <Trust />
      <Pricing />
    </>
  );
}
