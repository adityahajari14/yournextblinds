import Link from 'next/link';
import Image from 'next/image';

// Header - Main header with logo and action icons
const Header = () => {
  return (
    <div className="bg-white backdrop-blur-sm px-4 md:px-6 lg:px-20 py-4 md:py-5 lg:py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex gap-1.5 md:gap-2 items-center">
        <Image src="/icons/logo.svg" alt="Your Next Blinds" width={16} height={20} className="md:w-[19px] md:h-[23px]" />
        <span className="font-medium text-base md:text-lg lg:text-[23px] text-[#00473c] leading-tight">
          Your <span className="italic">Next </span>Blinds
        </span>
      </Link>
      
      {/* Action Icons */}
      <div className="flex gap-4 md:gap-5 lg:gap-6 items-center">
        <button aria-label="Search" className="hover:opacity-70 transition-opacity">
          <Image src="/icons/search.svg" alt="Search" width={20} height={20} className="md:w-6 md:h-6" />
        </button>
        <button aria-label="Account" className="hover:opacity-70 transition-opacity">
          <Image src="/icons/profile.svg" alt="Profile" width={20} height={20} className="md:w-6 md:h-6" />
        </button>
        <button aria-label="Cart" className="hover:opacity-70 transition-opacity relative">
          <Image src="/icons/cart.svg" alt="Cart" width={20} height={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
