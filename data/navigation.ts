// Navigation Data Structure for Mega Menu
// This file contains all navigation items, dropdowns, and mega-menu configurations
import { getPrimaryTagSlug } from '@/lib/tagMapper';

export interface NavigationLink {
  label: string;
  href: string;
  icon?: string;
  badge?: 'trending' | 'new' | 'best-seller';
}

export interface MegaMenuColumn {
  title?: string;
  links: NavigationLink[];
  image?: {
    src: string;
    alt: string;
    href?: string;
  };
}

export interface ColorOption {
  name: string;
  color: string;
  href: string;
}

export interface RoomOption {
  name: string;
  image: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href?: string;
  megaMenu?: MegaMenuColumn[];
  colorMenu?: {
    colors: ColorOption[];
    woodFinish: ColorOption[];
    patterns: NavigationLink[];
  };
  roomMenu?: RoomOption[];
}

export const navigationData: NavigationItem[] = [
  {
    label: 'Shop by Blinds Types',
    megaMenu: [
      {
        links: [
          { label: 'Vertical Blinds', href: '/collections/vertical-blinds', icon: '/nav-icons/vertical-blinds.webp' },
          { label: 'Replacement Vertical Slats', href: '/collections/replacement-vertical-slats', icon: '/nav-icons/vertical-blinds.webp' },
          { label: 'Roller Blinds', href: '/collections/roller-blinds', icon: '/nav-icons/roller-blinds.webp' },
          { label: 'Motorized Blinds', href: '/collections/motorized-blinds', icon: '/nav-icons/roller-blinds.webp' },
          { label: 'Motorized Roller Blinds', href: '/collections/motorized-roller-blinds', icon: '/nav-icons/roller-blinds.webp' },
        ]
      },
      {
        links: [
          { label: 'Complete Blackout Blinds', href: '/collections/complete-blackout-blinds', icon: '/nav-icons/vertical-blinds.webp', badge: 'trending' },
          { label: 'Metal Venetian Blinds', href: '/collections/venetian-blinds', icon: '/nav-icons/venetian-blinds.webp' },
          { label: 'Roman Blinds', href: '/collections/roman-blinds', icon: '/nav-icons/roman-blinds.webp' },
          { label: 'No Drill Blinds', href: '/collections/no-drill-blinds', icon: '/nav-icons/day-night-blinds.webp' },
        ]
      },
      {
        links: [
          { label: 'Skylight Blinds', href: '/collections/skylight-blinds', icon: '/nav-icons/skylight-blinds.webp' },
          { label: 'Wooden Blinds', href: '/collections/wooden-blinds', icon: '/nav-icons/wooden-blinds.webp' },
          { label: 'Day and Night Blinds', href: '/collections/day-and-night-blinds', icon: '/nav-icons/day-night-blinds.webp' },
          { label: 'Blinds Accessories', href: '/collections/blinds-accessories', icon: '/nav-icons/day-night-blinds.webp' },
          { label: 'Motorized Day and Night Blinds', href: '/collections/motorized-day-and-night-blinds', icon: '/nav-icons/day-night-blinds.webp' },
        ]
      }
    ]
  },
  {
    label: 'Shop by Colours',
    colorMenu: {
      colors: [
        { name: 'White', color: '#FFFFFF', href: `/collections/${getPrimaryTagSlug('color', 'white')}` },
        { name: 'Black', color: '#292F36', href: `/collections/${getPrimaryTagSlug('color', 'black')}` },
        { name: 'Blue', color: '#30638E', href: `/collections/${getPrimaryTagSlug('color', 'blue')}` },
        { name: 'Yellow', color: '#DBD56E', href: `/collections/${getPrimaryTagSlug('color', 'yellow')}` },
        { name: 'Gold', color: '#FDF3D7', href: `/collections/${getPrimaryTagSlug('color', 'gold')}` },
        { name: 'Green', color: '#4AAD52', href: `/collections/${getPrimaryTagSlug('color', 'green')}` },
        { name: 'Grey / Silver', color: '#BABABA', href: `/collections/${getPrimaryTagSlug('color', 'grey')}` },
        { name: 'Purple', color: '#A23B72', href: `/collections/${getPrimaryTagSlug('color', 'purple')}` },
        { name: 'Orange', color: '#F18F01', href: `/collections/${getPrimaryTagSlug('color', 'orange')}` },
        { name: 'Red', color: '#CD533B', href: `/collections/${getPrimaryTagSlug('color', 'red')}` },
        { name: 'Pink', color: '#EAB8AE', href: `/collections/${getPrimaryTagSlug('color', 'pink')}` },
      ],
      woodFinish: [
        { name: 'Light Wood', color: '/nav-icons/light-wood.webp', href: `/collections/${getPrimaryTagSlug('pattern', 'light-wood')}` },
        { name: 'Medium Wood', color: '/nav-icons/medium-wood.webp', href: `/collections/${getPrimaryTagSlug('pattern', 'medium-wood')}` },
      ],
      patterns: [
        { label: 'Animal', href: `/collections/${getPrimaryTagSlug('pattern', 'animal')}`, icon: '/nav-icons/animal-pattern.webp' },
        { label: 'Floral', href: `/collections/${getPrimaryTagSlug('pattern', 'floral')}`, icon: '/nav-icons/floral-pattern.webp' },
        { label: 'Geometric', href: `/collections/${getPrimaryTagSlug('pattern', 'geometric')}`, icon: '/nav-icons/geometric-pattern.webp' },
        { label: 'Striped', href: `/collections/${getPrimaryTagSlug('pattern', 'striped')}`, icon: '/nav-icons/stripped-pattern.webp' },
        { label: 'Children', href: '/collections/children', icon: '/nav-icons/children-pattern.webp' },
      ]
    }
  },
  {
    label: 'Shop No Drill Blinds',
    megaMenu: [
      {
        links: [
          { label: 'Perfect Fit Shutter Blind', href: '/products/sierra-ice-white-perfect-fit-shutter-blind', icon: '/nav-icons/shutter-blind.webp', badge: 'best-seller' },
          { label: 'Perfect Fit - Pleated', href: '/collections/perfect-fit-pleated', icon: '/nav-icons/pleated-blind.webp' },
        ]
      },
      {
        links: [
          { label: 'No Drill Rollers', href: '/collections/no-drill-rollers', icon: '/nav-icons/no-drill-rollers.webp', badge: 'new' },
          { label: 'Perfect Fit - Wooden Blind', href: '/collections/perfect-fit-wooden', icon: '/nav-icons/vertical-blinds.webp' },
          { label: 'Perfect Fit - Metal Blind', href: '/collections/perfect-fit-metal', icon: '/nav-icons/metal-blinds.webp' },
        ]
      }
    ]
  },
  {
    label: 'Shop By Window Type',
    megaMenu: [
      {
        links: [
          { label: 'Bay Window', href: `/collections/${getPrimaryTagSlug('window', 'bay-window')}`, icon: '/nav-icons/bay-window.svg' },
          { label: 'Conservatory Window', href: `/collections/${getPrimaryTagSlug('window', 'conservatory-window')}`, icon: '/nav-icons/conservatory-window.svg' },
          { label: 'Roof Skylight', href: '/collections/skylight-blinds', icon: '/nav-icons/roof-skylight.svg' },
          { label: 'Tilt and Turn Window', href: `/collections/${getPrimaryTagSlug('window', 'tilt-and-turn-window')}`, icon: '/nav-icons/tilt-turn-window.svg' },
        ]
      },
      {
        links: [
          { label: 'Bi Fold Window', href: `/collections/${getPrimaryTagSlug('window', 'bi-fold-window')}`, icon: '/nav-icons/bi-fold-window.svg' },
          { label: 'French Doors', href: `/collections/${getPrimaryTagSlug('window', 'french-door')}`, icon: '/nav-icons/french-door.svg' },
          { label: 'Sliding Door', href: `/collections/${getPrimaryTagSlug('window', 'sliding-door')}`, icon: '/nav-icons/sliding-door.svg' },
        ]
      }
    ]
  },
  {
    label: 'Shop By Solution',
    megaMenu: [
      {
        links: [
          { label: 'Thermal Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'thermal-blinds')}`, icon: '/nav-icons/thermal-blinds.svg' },
          { label: 'Better Sleep Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'better-sleep-blinds')}`, icon: '/nav-icons/better-sleep-blinds.svg' },
        ]
      },
      {
        links: [
          { label: 'Cordless Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'cordless-blinds')}`, icon: '/nav-icons/cordless-blinds.svg' },
          { label: 'No Drill Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'no-drill-blinds')}`, icon: '/nav-icons/no-drill-blinds.svg' },
          { label: 'Blackout Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'blackout-blinds')}`, icon: '/nav-icons/blackout-blinds.svg' },
        ]
      },
      {
        links: [
          { label: 'Waterproof Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'waterproof-blinds')}`, icon: '/nav-icons/waterproof-blinds.svg' },
          { label: 'Easy Wipe Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'easy-wipe-blinds')}`, icon: '/nav-icons/easy-wipe-blinds.svg' },
          { label: 'Taped Blinds', href: `/collections/${getPrimaryTagSlug('solution', 'taped-blinds')}`, icon: '/nav-icons/taped-blinds.svg' },
        ]
      }
    ]
  },
  {
    label: 'Shop by Room',
    roomMenu: [
      { name: 'Conservatory', image: '/nav-icons/rooms-conservatory.webp', href: `/collections/${getPrimaryTagSlug('room', 'conservatory')}` },
      { name: 'Bedroom', image: '/nav-icons/rooms-bedroom.webp', href: `/collections/${getPrimaryTagSlug('room', 'bedroom')}` },
      { name: 'Kitchen', image: '/nav-icons/rooms-kitchen.webp', href: `/collections/${getPrimaryTagSlug('room', 'kitchen')}` },
      { name: 'Office', image: '/nav-icons/rooms-office.webp', href: `/collections/${getPrimaryTagSlug('room', 'office')}` },
      { name: 'Bathroom', image: '/nav-icons/rooms-bathroom.webp', href: `/collections/${getPrimaryTagSlug('room', 'bathroom')}` },
      { name: 'Living Room', image: '/nav-icons/rooms-livingroom.webp', href: `/collections/${getPrimaryTagSlug('room', 'living-room')}` },
      { name: 'Dining Room', image: '/nav-icons/rooms-diningroom.webp', href: `/collections/${getPrimaryTagSlug('room', 'dining-room')}` },
      { name: 'Children', image: '/nav-icons/rooms-children.webp', href: '/collections/children' },
    ]
  }
];
