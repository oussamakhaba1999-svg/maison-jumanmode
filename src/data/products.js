import bag1 from '../assets/images/bag1.jpg';
import bag2 from '../assets/images/bag2.jpg';
import bag3 from '../assets/images/bag3.jpg';
import bag4 from '../assets/images/bag4.jpg';
import bag5 from '../assets/images/bag5.jpg';
import bag6 from '../assets/images/bag6.jpg';

const products = [
  {
    id: 'noir-crystal-box',
    name: 'Noir Crystal Box Bag',
    price: 102,
    category: 'Statement',
    popularity: 97,
    featured: true,
    limitedEdition: true,
    stock: 3,
    rating: 5,
    reviewCount: 124,
    image: bag1,
    images: [bag1, bag2, bag3],
    description:
      'A structured black crystal beaded bag with couture lines, handcrafted for dramatic evening elegance.',
    materials: ['Crystal', 'Glass Beads', 'Agate Detail'],
  },
  {
    id: 'aurora-mini',
    name: 'Aurora Mini Clutch',
    price: 61,
    category: 'Mini',
    popularity: 93,
    featured: true,
    limitedEdition: false,
    stock: 7,
    rating: 5,
    reviewCount: 98,
    image: bag2,
    images: [bag2, bag1, bag4],
    description:
      'A compact handcrafted mini bag with reflective beadwork and refined feminine proportions.',
    materials: ['Crystal', 'Seed Beads', 'Agate Accent'],
  },
  {
    id: 'sahara-shoulder',
    name: 'Sahara Shoulder Bag',
    price: 107,
    category: 'Shoulder',
    popularity: 90,
    featured: true,
    limitedEdition: true,
    stock: 4,
    rating: 5,
    reviewCount: 87,
    image: bag3,
    images: [bag3, bag2, bag5],
    description:
      'An elegant shoulder silhouette finished with artisanal bead textures and hand-set agate elements.',
    materials: ['Agate Stone', 'Crystal Beads', 'Silk Lining'],
  },
  {
    id: 'lune-pouch',
    name: 'Lune Beaded Pouch',
    price: 85,
    category: 'Pouch',
    popularity: 86,
    featured: false,
    limitedEdition: false,
    stock: 10,
    rating: 4,
    reviewCount: 76,
    image: bag4,
    images: [bag4, bag1, bag6],
    description:
      'A soft evening pouch with luminous beading, designed for understated luxury styling.',
    materials: ['Crystal', 'Pearl Beads', 'Agate Clasp'],
  },
  {
    id: 'muse-hobo',
    name: 'Muse Soft Hobo',
    price: 79,
    category: 'Daily Luxury',
    popularity: 88,
    featured: false,
    limitedEdition: true,
    stock: 5,
    rating: 5,
    reviewCount: 68,
    image: bag5,
    images: [bag5, bag3, bag2],
    description:
      'A fluid hobo form with intricate handcrafted beading, blending contemporary ease and luxury detail.',
    materials: ['Seed Beads', 'Crystal', 'Agate Charm'],
  },
  {
    id: 'eclat-evening',
    name: 'Eclat Evening Clutch',
    price: 65,
    category: 'Evening',
    popularity: 95,
    featured: false,
    limitedEdition: false,
    stock: 6,
    rating: 5,
    reviewCount: 112,
    image: bag6,
    images: [bag6, bag5, bag1],
    description:
      'A high-shine evening clutch crafted with faceted crystals and precision hand-beading.',
    materials: ['Crystal', 'Agate Stone', 'Metal Frame'],
  },
];

export const categories = ['All', ...new Set(products.map((product) => product.category))];

export const galleryImages = [bag1, bag2, bag3, bag4, bag5, bag6, bag2, bag4];

export const heroImage = bag1;

export default products;
