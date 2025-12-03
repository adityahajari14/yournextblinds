'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarRating } from '@/components/product';

// Product data - linked to actual product pages
const products = [
  {
    id: 1,
    name: 'Vinyl Vertical Blinds',
    slug: 'vinyl-vertical-blinds',
    price: 234,
    originalPrice: 289,
    rating: 5,
    image: '/home/products/vertical-blinds-1.jpg',
  },
  {
    id: 2,
    name: 'Unity Polaris Thunder Roller Blind',
    slug: 'unity-polaris-thunder-roller-blind',
    price: 234,
    originalPrice: 289,
    rating: 5,
    image: '/home/products/vertical-blinds-2.jpg',
  },
  {
    id: 3,
    name: 'Roller Shades',
    slug: 'roller-shades',
    price: 234,
    originalPrice: 289,
    rating: 5,
    image: '/home/products/vertical-blinds-3.jpg',
  },
  {
    id: 4,
    name: 'Vinyl Vertical Blinds',
    slug: 'vinyl-vertical-blinds',
    price: 234,
    originalPrice: 289,
    rating: 5,
    image: '/home/products/vertical-blinds-4.jpg',
  },
  {
    id: 5,
    name: 'Unity Polaris Thunder Roller Blind',
    slug: 'unity-polaris-thunder-roller-blind',
    price: 234,
    originalPrice: 289,
    rating: 5,
    image: '/home/products/vertical-blinds-5.jpg',
  },
];

// ProductCard component
const ProductCard = ({ product }: { product: typeof products[0] }) => {
  return (
    <Link href={`/product/${product.slug}`} className="flex flex-col shrink-0 w-[250px] md:w-[280px] lg:w-[311px] group">
      {/* Image */}
      <div className="relative h-[220px] md:h-[250px] lg:h-[291px] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Info */}
      <div className="bg-white pt-3 md:pt-4 flex items-end justify-between gap-2">
        <div className="flex flex-col gap-1.5 md:gap-2 flex-1">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-base md:text-lg font-normal text-black capitalize line-clamp-2">
              {product.name}
            </h3>
            <div className="flex gap-2 md:gap-3 items-end">
              <span className="text-lg md:text-xl font-bold text-black">
                € {product.price}
              </span>
              <span className="text-sm md:text-base text-[#474747] line-through">
                € {product.originalPrice}
              </span>
            </div>
          </div>
          <StarRating rating={product.rating} size="sm" filledColor="text-[#00473c]" />
        </div>
        
        <button 
          onClick={(e) => e.preventDefault()}
          className="hidden md:block border border-black bg-white px-2.5 py-2.5 text-base text-black hover:bg-black hover:text-white transition-colors shrink-0"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

// BestSelling - Best selling products section with horizontal scroll
const BestSelling = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 327; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-24 overflow-hidden">
      <div className="flex flex-col gap-6 md:gap-6 lg:gap-8">
        {/* Header with Navigation */}
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-20">
          <h2 className="text-xl md:text-2xl lg:text-[32px] font-medium text-[#3a3a3a]">
            Best Selling Products
          </h2>
          <div className="hidden lg:flex gap-3">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:bg-[#00473c] hover:border-[#00473c] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-[#3a3a3a] flex items-center justify-center hover:bg-[#00473c] hover:border-[#00473c] hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Products Horizontal Scroll */}
        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pl-4 md:pl-6 lg:pl-20">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Spacer for right padding when scrolled to end */}
            <div className="shrink-0 w-4 md:w-6 lg:w-12 h-px" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
