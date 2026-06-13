import { Product, Category, Brand, Address, CartItem, WishlistItem, Order, Review } from "@/types";

const img = {
  hero: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&h=800&fit=crop",
  hero2: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&h=800&fit=crop",
  hero3: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=800&fit=crop",
  sofa1: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=1000&fit=crop",
  sofa2: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=1000&fit=crop",
  sofa3: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=1000&fit=crop",
  sofa4: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=800&h=1000&fit=crop",
  sofa5: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&h=1000&fit=crop",
  sofa6: "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?w=800&h=1000&fit=crop",
  bed1: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=1000&fit=crop",
  bed2: "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?w=800&h=1000&fit=crop",
  chair1: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&h=1000&fit=crop",
  chair2: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&h=1000&fit=crop",
  dining1: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=1000&fit=crop",
  dining2: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?w=800&h=1000&fit=crop",
  table1: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&h=1000&fit=crop",
  table2: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=800&h=1000&fit=crop",
  wardrobe1: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=1000&fit=crop",
  storage1: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&h=1000&fit=crop",
  decor1: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&h=1000&fit=crop",
  catLiving: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=400&h=400&fit=crop",
  catBed: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&h=400&fit=crop",
  catDining: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&h=400&fit=crop",
  catOffice: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=400&fit=crop",
  catStorage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop",
  catOutdoor: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=400&fit=crop",
  catDecor: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=400&fit=crop",
  catLighting: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
};

export const heroSlides = [
  {
    id: "1", image: img.hero,
    headline: "Premium Furniture.\nThoughtfully Crafted.\nFor Beautiful Living.",
    subtitle: "Discover designs that blend comfort, functionality and timeless aesthetics.",
    cta1: { label: "SHOP NOW", href: "/category/living-room" },
    cta2: { label: "EXPLORE COLLECTION", href: "/category/sofas-seating" },
  },
  {
    id: "2", image: img.hero2,
    headline: "Modern Living.\nElevated Design.\nCrafted For You.",
    subtitle: "Transform your space with our curated collection of contemporary furniture.",
    cta1: { label: "SHOP NOW", href: "/category/bedroom" },
    cta2: { label: "VIEW CATALOG", href: "/category/dining-room" },
  },
  {
    id: "3", image: img.hero3,
    headline: "Timeless Elegance.\nSuperior Comfort.\nBuilt To Last.",
    subtitle: "Premium materials, expert craftsmanship, and designs that stand the test of time.",
    cta1: { label: "SHOP NOW", href: "/category/office" },
    cta2: { label: "NEW ARRIVALS", href: "/category/outdoor" },
  },
];

export const categories: Category[] = [
  { id: "cat-1", name: "Living Room", slug: "living-room", image: img.catLiving, productCount: 342,
    subcategories: [
      { id: "sc-1", name: "Sofas & Seating", slug: "sofas-seating" },
      { id: "sc-2", name: "Coffee Tables", slug: "coffee-tables" },
      { id: "sc-3", name: "TV Units", slug: "tv-units" },
      { id: "sc-4", name: "Bookshelves", slug: "bookshelves" },
      { id: "sc-5", name: "Recliners", slug: "recliners" },
      { id: "sc-6", name: "Living Room Sets", slug: "living-room-sets" },
      { id: "sc-7", name: "Bean Bags", slug: "bean-bags" },
    ] },
  { id: "cat-2", name: "Bedroom", slug: "bedroom", image: img.catBed, productCount: 256,
    subcategories: [
      { id: "sc-8", name: "Beds & Bedroom", slug: "beds-bedroom" },
      { id: "sc-9", name: "Sofa Cum Beds", slug: "sofa-cum-beds" },
      { id: "sc-10", name: "Mattresses", slug: "mattresses" },
      { id: "sc-11", name: "Wardrobes", slug: "wardrobes" },
    ] },
  { id: "cat-3", name: "Dining Room", slug: "dining-room", image: img.catDining, productCount: 189,
    subcategories: [
      { id: "sc-12", name: "Dining Tables", slug: "dining-tables" },
      { id: "sc-13", name: "Dining Chairs", slug: "dining-chairs" },
      { id: "sc-14", name: "Dining Sets", slug: "dining-sets" },
    ] },
  { id: "cat-4", name: "Office Furniture", slug: "office", image: img.catOffice, productCount: 167,
    subcategories: [
      { id: "sc-15", name: "Office Chairs", slug: "office-chairs" },
      { id: "sc-16", name: "Office Desks", slug: "office-desks" },
    ] },
  { id: "cat-5", name: "Storage", slug: "storage", image: img.catStorage, productCount: 134 },
  { id: "cat-6", name: "Outdoor", slug: "outdoor", image: img.catOutdoor, productCount: 98 },
  { id: "cat-7", name: "Decor", slug: "decor", image: img.catDecor, productCount: 215 },
  { id: "cat-8", name: "Lighting", slug: "lighting", image: img.catLighting, productCount: 143 },
];

export const products: Product[] = [
  {
    id: "prod-1", name: "Haven 3 Seater Sofa", slug: "haven-3-seater-sofa",
    description: "The Haven 3 Seater Sofa combines modern design with exceptional comfort. Crafted with a sturdy solid wood frame and premium fabric upholstery, it's perfect for contemporary homes.",
    brand: "Urbana", price: 24999, comparePrice: 40000, discount: 37,
    images: [img.sofa1, img.sofa2, img.sofa3, img.sofa4],
    colors: [{ name: "Beige", hex: "#C4A882" }, { name: "Charcoal", hex: "#36454F" }, { name: "Navy", hex: "#1B2A4A" }, { name: "Olive", hex: "#556B2F" }, { name: "Rust", hex: "#B7410E" }],
    materials: ["Fabric", "Leather"], rating: 4.6, reviewCount: 128,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "Ergonomic Design", description: "For maximum comfort" },
      { icon: "tree", title: "Solid Wood Frame", description: "Long lasting durability" },
      { icon: "fabric", title: "Premium Fabric", description: "Soft, durable & easy to clean" },
      { icon: "shield", title: "1 Year Warranty", description: "Assured support" },
    ],
    specifications: { "Dimensions": "200 x 85 x 80 cm", "Seating Capacity": "3", "Primary Material": "Solid Wood", "Upholstery Material": "Premium Fabric", "Weight": "45 kg" },
    isBestSeller: true, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-2", name: "Mora Fabric 3 Seater Sofa", slug: "mora-fabric-3-seater-sofa",
    description: "Elegant and comfortable, the Mora Fabric 3 Seater Sofa features a minimalist design with premium upholstery.",
    brand: "Duroflex", price: 21999, comparePrice: 34000, discount: 35,
    images: [img.sofa2, img.sofa1, img.sofa5],
    colors: [{ name: "Grey", hex: "#808080" }, { name: "Beige", hex: "#C4A882" }, { name: "Blue", hex: "#4A6FA5" }],
    materials: ["Fabric"], rating: 4.5, reviewCount: 96,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "Ergonomic Design", description: "For maximum comfort" },
      { icon: "tree", title: "Solid Wood Frame", description: "Long lasting durability" },
      { icon: "fabric", title: "Premium Fabric", description: "Soft, durable & easy to clean" },
      { icon: "shield", title: "1 Year Warranty", description: "Assured support" },
    ],
    specifications: { "Dimensions": "190 x 82 x 78 cm", "Seating Capacity": "3", "Primary Material": "Engineered Wood", "Upholstery Material": "Fabric", "Weight": "40 kg" },
    isBestSeller: true, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-3", name: "Luxe Leather 3 Seater Sofa", slug: "luxe-leather-3-seater-sofa",
    description: "Premium Italian-inspired leather sofa with a sophisticated design. Features genuine top-grain leather and solid teak wood frame.",
    brand: "Urbana", price: 45999, comparePrice: 71000, discount: 35,
    images: [img.sofa3, img.sofa1, img.sofa6],
    colors: [{ name: "Tan", hex: "#D2691E" }, { name: "Black", hex: "#1A1A1A" }, { name: "Dark Brown", hex: "#4A3728" }],
    materials: ["Leather"], rating: 4.6, reviewCount: 64,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "Italian Design", description: "Contemporary styling" },
      { icon: "tree", title: "Teak Wood Frame", description: "Premium durability" },
      { icon: "fabric", title: "Genuine Leather", description: "Top-grain leather" },
      { icon: "shield", title: "3 Year Warranty", description: "Extended coverage" },
    ],
    specifications: { "Dimensions": "210 x 90 x 82 cm", "Seating Capacity": "3", "Primary Material": "Teak Wood", "Upholstery Material": "Top-grain Leather", "Weight": "55 kg" },
    isBestSeller: false, isNewArrival: true, inStock: true,
  },
  {
    id: "prod-4", name: "Mason Bed King Size", slug: "mason-bed-king-size",
    description: "The Mason King Size Bed combines sturdy engineering with minimalist aesthetics. Built with premium sheesham wood and a natural finish.",
    brand: "Nilkamal", price: 28999, comparePrice: 45000, discount: 36,
    images: [img.bed1, img.bed2, img.sofa4],
    colors: [{ name: "Natural", hex: "#C4A882" }, { name: "Walnut", hex: "#5C4033" }, { name: "Honey", hex: "#EB9605" }],
    materials: ["Wood"], rating: 4.5, reviewCount: 210,
    categoryId: "cat-2", categoryName: "Bedroom",
    features: [
      { icon: "bed", title: "King Size", description: "78 x 72 inches" },
      { icon: "tree", title: "Sheesham Wood", description: "Solid hardwood" },
      { icon: "storage", title: "Under-bed Storage", description: "Hydraulic lift" },
      { icon: "shield", title: "5 Year Warranty", description: "Assured quality" },
    ],
    specifications: { "Dimensions": "198 x 183 x 100 cm", "Bed Size": "King (78 x 72 inches)", "Primary Material": "Sheesham Wood", "Finish": "Natural Polish", "Weight Capacity": "350 kg" },
    isBestSeller: true, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-5", name: "Ergo Office Chair", slug: "ergo-office-chair",
    description: "Designed for long working hours with adjustable lumbar support, breathable mesh back, and reclining mechanism.",
    brand: "Wakefit", price: 12499, comparePrice: 19000, discount: 34,
    images: [img.chair1, img.chair2, img.sofa5],
    colors: [{ name: "Black", hex: "#1A1A1A" }, { name: "Grey", hex: "#808080" }],
    materials: ["Mesh", "Fabric"], rating: 4.5, reviewCount: 89,
    categoryId: "cat-4", categoryName: "Office Furniture",
    features: [
      { icon: "sofa", title: "Ergonomic Design", description: "Lumbar support" },
      { icon: "settings", title: "Adjustable Height", description: "Gas lift mechanism" },
      { icon: "wind", title: "Breathable Mesh", description: "Cool & comfortable" },
      { icon: "shield", title: "2 Year Warranty", description: "Assured support" },
    ],
    specifications: { "Dimensions": "65 x 65 x 120 cm", "Seat Height": "42-52 cm (adjustable)", "Primary Material": "Metal Frame", "Back Material": "Breathable Mesh", "Weight Capacity": "120 kg" },
    isBestSeller: true, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-6", name: "Blake Dining Set (4 Seater)", slug: "blake-dining-set-4-seater",
    description: "A complete dining solution featuring a solid mango wood table with four matching chairs.",
    brand: "Godrej Interio", price: 16999, comparePrice: 26000, discount: 35,
    images: [img.dining1, img.dining2, img.table1],
    colors: [{ name: "Walnut", hex: "#5C4033" }, { name: "Natural", hex: "#C4A882" }],
    materials: ["Wood"], rating: 4.5, reviewCount: 83,
    categoryId: "cat-3", categoryName: "Dining Room",
    features: [
      { icon: "users", title: "4 Seater", description: "Compact dining" },
      { icon: "tree", title: "Mango Wood", description: "Solid hardwood" },
      { icon: "package", title: "Complete Set", description: "Table + 4 chairs" },
      { icon: "shield", title: "2 Year Warranty", description: "Quality assured" },
    ],
    specifications: { "Table Dimensions": "120 x 80 x 75 cm", "Chair Dimensions": "45 x 45 x 90 cm", "Seating Capacity": "4", "Primary Material": "Mango Wood" },
    isBestSeller: true, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-7", name: "Lorenzo 3 Door Wardrobe", slug: "lorenzo-3-door-wardrobe",
    description: "Generous storage with shelves, drawers, and hanging space. Crafted from engineered wood with premium laminate finish.",
    brand: "Hafele", price: 22999, comparePrice: 35000, discount: 34,
    images: [img.wardrobe1, img.storage1],
    colors: [{ name: "Walnut", hex: "#5C4033" }, { name: "White", hex: "#F5F5F5" }, { name: "Wenge", hex: "#3C2415" }],
    materials: ["Engineered Wood"], rating: 4.7, reviewCount: 72,
    categoryId: "cat-5", categoryName: "Storage",
    features: [
      { icon: "door", title: "3 Door Design", description: "Easy access" },
      { icon: "layers", title: "Multiple Sections", description: "Organized storage" },
      { icon: "lock", title: "Lock & Key", description: "Secure storage" },
      { icon: "shield", title: "2 Year Warranty", description: "Quality assured" },
    ],
    specifications: { "Dimensions": "150 x 60 x 200 cm", "Number of Doors": "3", "Primary Material": "Engineered Wood", "Finish": "Laminate", "Number of Shelves": "6" },
    isBestSeller: false, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-8", name: "Blake L Shape Sectional Sofa", slug: "blake-l-shape-sectional-sofa",
    description: "Spacious L-shaped sectional sofa with high-density foam cushions and reversible chaise.",
    brand: "Duroflex", price: 56999, comparePrice: 89000, discount: 36,
    images: [img.sofa4, img.sofa5, img.sofa6],
    colors: [{ name: "Grey", hex: "#808080" }, { name: "Beige", hex: "#C4A882" }],
    materials: ["Fabric", "Leather"], rating: 4.6, reviewCount: 80,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "L-Shape Design", description: "Spacious seating" },
      { icon: "move", title: "Reversible Chaise", description: "Flexible layout" },
      { icon: "layers", title: "HD Foam", description: "Premium comfort" },
      { icon: "shield", title: "3 Year Warranty", description: "Extended coverage" },
    ],
    specifications: { "Dimensions": "280 x 180 x 82 cm", "Seating Capacity": "6", "Primary Material": "Solid Wood + Metal", "Upholstery": "Premium Fabric", "Weight": "85 kg" },
    isBestSeller: false, isNewArrival: true, inStock: true,
  },
  {
    id: "prod-9", name: "Eden 2 Seater Sofa", slug: "eden-2-seater-sofa",
    description: "Compact and stylish, perfect for apartments and small living spaces.",
    brand: "Nilkamal", price: 18999, comparePrice: 30000, discount: 37,
    images: [img.sofa5, img.sofa2, img.sofa1],
    colors: [{ name: "Teal", hex: "#008080" }, { name: "Mustard", hex: "#E2A72E" }, { name: "Grey", hex: "#808080" }],
    materials: ["Fabric"], rating: 4.5, reviewCount: 112,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "Compact Design", description: "Space-saving" },
      { icon: "tree", title: "Solid Wood Frame", description: "Durable build" },
      { icon: "fabric", title: "Premium Fabric", description: "Easy maintenance" },
      { icon: "shield", title: "1 Year Warranty", description: "Assured support" },
    ],
    specifications: { "Dimensions": "145 x 80 x 78 cm", "Seating Capacity": "2", "Primary Material": "Solid Wood", "Upholstery Material": "Fabric", "Weight": "30 kg" },
    isBestSeller: false, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-10", name: "Harper Sofa Cum Bed", slug: "harper-sofa-cum-bed",
    description: "Versatile sofa that easily converts into a comfortable bed. Perfect for guests and small apartments.",
    brand: "Wakefit", price: 22999, comparePrice: 35000, discount: 34,
    images: [img.sofa6, img.sofa3, img.bed1],
    colors: [{ name: "Blue", hex: "#4A6FA5" }, { name: "Grey", hex: "#808080" }, { name: "Green", hex: "#556B2F" }],
    materials: ["Fabric"], rating: 4.5, reviewCount: 71,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "repeat", title: "Convertible", description: "Sofa to bed easily" },
      { icon: "storage", title: "Storage Space", description: "Under-seat storage" },
      { icon: "layers", title: "HD Foam", description: "Comfortable sleep" },
      { icon: "shield", title: "2 Year Warranty", description: "Quality assured" },
    ],
    specifications: { "Sofa Dimensions": "180 x 85 x 80 cm", "Bed Dimensions": "180 x 120 x 45 cm", "Seating Capacity": "3 (sofa) / 2 (bed)", "Primary Material": "Metal + Wood" },
    isBestSeller: false, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-11", name: "Blake Coffee Table", slug: "blake-coffee-table",
    description: "Sleek modern coffee table crafted from solid walnut wood with minimalist design.",
    brand: "Godrej Interio", price: 7999, comparePrice: 12000, discount: 33,
    images: [img.table1, img.table2],
    colors: [{ name: "Walnut", hex: "#5C4033" }, { name: "Natural", hex: "#C4A882" }],
    materials: ["Wood"], rating: 4.4, reviewCount: 56,
    categoryId: "cat-1", categoryName: "Living Room",
    features: [
      { icon: "box", title: "Solid Wood", description: "Walnut finish" },
      { icon: "minimize", title: "Minimalist", description: "Clean design" },
      { icon: "shield", title: "1 Year Warranty", description: "Quality assured" },
      { icon: "truck", title: "Easy Assembly", description: "15 min setup" },
    ],
    specifications: { "Dimensions": "100 x 60 x 45 cm", "Primary Material": "Solid Walnut Wood", "Shape": "Rectangular", "Weight": "15 kg" },
    isBestSeller: false, isNewArrival: false, inStock: true,
  },
  {
    id: "prod-12", name: "Mason 2 Seater Sofa", slug: "mason-2-seater-sofa",
    description: "A compact yet comfortable 2-seater sofa with a modern profile. Perfect for smaller living rooms.",
    brand: "Urbana", price: 18999, comparePrice: 28000, discount: 32,
    images: [img.sofa2, img.sofa4],
    colors: [{ name: "Beige", hex: "#C4A882" }, { name: "Charcoal", hex: "#36454F" }],
    materials: ["Fabric"], rating: 4.3, reviewCount: 45,
    categoryId: "cat-1", categoryName: "Sofas & Seating",
    features: [
      { icon: "sofa", title: "Compact Design", description: "Space efficient" },
      { icon: "tree", title: "Solid Wood", description: "Premium frame" },
      { icon: "fabric", title: "Premium Fabric", description: "Durable material" },
      { icon: "shield", title: "1 Year Warranty", description: "Assured support" },
    ],
    specifications: { "Dimensions": "140 x 78 x 76 cm", "Seating Capacity": "2", "Primary Material": "Solid Wood", "Upholstery": "Fabric", "Weight": "28 kg" },
    isBestSeller: false, isNewArrival: true, inStock: true,
  },
  {
    id: "prod-13", name: "Aria 6 Seater Dining Table", slug: "aria-6-seater-dining-table",
    description: "Elegant 6-seater dining table crafted from premium sheesham wood with rich walnut finish.",
    brand: "Urbana", price: 23999, comparePrice: 38000, discount: 37,
    images: [img.dining2, img.dining1],
    colors: [{ name: "Walnut", hex: "#5C4033" }, { name: "Honey", hex: "#EB9605" }],
    materials: ["Wood"], rating: 4.6, reviewCount: 67,
    categoryId: "cat-3", categoryName: "Dining Room",
    features: [
      { icon: "users", title: "6 Seater", description: "Family dining" },
      { icon: "tree", title: "Sheesham Wood", description: "Premium hardwood" },
      { icon: "shield", title: "3 Year Warranty", description: "Extended coverage" },
      { icon: "truck", title: "Free Delivery", description: "Pan India" },
    ],
    specifications: { "Dimensions": "180 x 90 x 76 cm", "Seating Capacity": "6", "Primary Material": "Sheesham Wood", "Finish": "Walnut Polish" },
    isBestSeller: false, isNewArrival: true, inStock: true,
  },
  {
    id: "prod-14", name: "Luna 6 Seater Dining Table", slug: "luna-6-seater-dining-table",
    description: "Modern dining table with marble top and brass-finished legs. A statement piece for luxury dining rooms.",
    brand: "Hafele", price: 29999, comparePrice: 48000, discount: 37,
    images: [img.dining1, img.table2],
    colors: [{ name: "White Marble", hex: "#F5F5F5" }, { name: "Black Marble", hex: "#2C2C2C" }],
    materials: ["Marble", "Metal"], rating: 4.5, reviewCount: 42,
    categoryId: "cat-3", categoryName: "Dining Room",
    features: [
      { icon: "users", title: "6 Seater", description: "Spacious dining" },
      { icon: "diamond", title: "Marble Top", description: "Genuine marble" },
      { icon: "shield", title: "5 Year Warranty", description: "Premium coverage" },
      { icon: "truck", title: "Free Assembly", description: "Expert installation" },
    ],
    specifications: { "Dimensions": "180 x 90 x 76 cm", "Seating Capacity": "6", "Table Top Material": "Marble", "Leg Material": "Brass-finished Metal" },
    isBestSeller: false, isNewArrival: false, inStock: true,
  },
];

export const brands: Brand[] = [
  { id: "br-1", name: "Urbana", logo: "" },
  { id: "br-2", name: "Duroflex", logo: "" },
  { id: "br-3", name: "Nilkamal", logo: "" },
  { id: "br-4", name: "Godrej Interio", logo: "" },
  { id: "br-5", name: "Hafele", logo: "" },
  { id: "br-6", name: "Wakefit", logo: "" },
  { id: "br-7", name: "@home", logo: "" },
];

export const styles = ["Modern", "Contemporary", "Scandinavian", "Mid-Century", "Industrial", "Boho", "Traditional"];

export const navLinks = [
  { label: "All Categories", href: "#", hasDropdown: true, isSale: false },
];

export const mockUser = { id: "user-1", name: "John Doe", email: "john.doe@gmail.com", phone: "+91 98765 43210" };

export const mockAddresses: Address[] = [
  { id: "addr-1", label: "Home", name: "John Doe", street: "401, 5th Cross, Koramangala", city: "Bangalore", state: "Karnataka", pincode: "560095", phone: "+91 98765 43210", isDefault: true },
  { id: "addr-2", label: "Office", name: "John Doe", street: "Tower B, 3rd Floor, Whitefield", city: "Bangalore", state: "Karnataka", pincode: "560066", phone: "+91 98765 43210", isDefault: false },
];

export const mockCartItems: CartItem[] = [
  { id: "cart-1", product: products[0], quantity: 1, selectedColor: "Beige", selectedMaterial: "Fabric" },
  { id: "cart-2", product: products[10], quantity: 1, selectedColor: "Walnut", selectedMaterial: "Wood" },
  { id: "cart-3", product: products[4], quantity: 1, selectedColor: "Black", selectedMaterial: "Mesh" },
];

export const mockWishlistItems: WishlistItem[] = [
  { id: "wl-1", product: products[0], addedAt: "2024-05-10" },
  { id: "wl-2", product: products[10], addedAt: "2024-05-12" },
  { id: "wl-3", product: products[3], addedAt: "2024-05-14" },
  { id: "wl-4", product: products[4], addedAt: "2024-05-15" },
  { id: "wl-5", product: products[6], addedAt: "2024-05-16" },
];

export const mockOrders: Order[] = [
  {
    id: "FN123456789",
    items: [
      { id: "oi-1", product: products[0], quantity: 1, price: 24999, color: "Beige", material: "Fabric" },
      { id: "oi-2", product: products[10], quantity: 1, price: 7999, color: "Walnut", material: "Wood" },
      { id: "oi-3", product: products[4], quantity: 1, price: 12499, color: "Black", material: "Mesh" },
    ],
    status: "shipped", total: 46997, deliveryCharges: 0, assemblyCharges: 1500,
    address: mockAddresses[0], paymentMethod: "Credit / Debit Card", deliveryType: "Standard Delivery (Free)",
    createdAt: "2024-05-15",
    trackingSteps: [
      { status: "confirmed", label: "Order Confirmed", date: "15 May 2024", time: "10:30 AM", completed: true },
      { status: "processing", label: "Payment Successful", date: "15 May 2024", time: "10:32 AM", completed: true },
      { status: "packed", label: "Packed", date: "16 May 2024", time: "09:15 AM", completed: true },
      { status: "shipped", label: "Shipped", date: "17 May 2024", time: "11:40 AM", completed: true },
      { status: "out_for_delivery", label: "Out for Delivery", date: "19 May 2024", time: "08:30 AM", completed: false },
      { status: "delivered", label: "Delivered", date: "Expected by 20 May 2024", time: "", completed: false },
    ],
  },
];

export const mockReviews: Review[] = [
  { id: "rev-1", userName: "Priya S.", rating: 5, title: "Absolutely love it!", comment: "The sofa looks even better in person. Very comfortable and the fabric quality is excellent.", date: "2024-04-28", verified: true },
  { id: "rev-2", userName: "Rahul M.", rating: 4, title: "Great value for money", comment: "Solid build quality and comfortable seating. Delivery was on time.", date: "2024-04-15", verified: true },
  { id: "rev-3", userName: "Anita K.", rating: 5, title: "Perfect for our living room", comment: "We've been using this sofa for 2 months now and it's held up beautifully.", date: "2024-03-22", verified: true },
  { id: "rev-4", userName: "Vikram P.", rating: 4, title: "Good quality", comment: "Nice design and comfortable. Assembly took about 30 minutes.", date: "2024-03-10", verified: false },
];

export const filterBrands = [
  { name: "Urbana", count: 31 }, { name: "Duroflex", count: 18 }, { name: "Nilkamal", count: 22 },
  { name: "Godrej Interio", count: 15 }, { name: "Hafele", count: 19 }, { name: "Wakefit", count: 14 }, { name: "@home", count: 11 },
];

export const filterColors = [
  { name: "Beige", hex: "#C4A882" }, { name: "Grey", hex: "#808080" }, { name: "Brown", hex: "#5C4033" },
  { name: "Blue", hex: "#4A6FA5" }, { name: "Green", hex: "#556B2F" }, { name: "Black", hex: "#1A1A1A" },
];

export const filterMaterials = [
  { name: "Fabric", count: 135 }, { name: "Leather", count: 65 }, { name: "Wood", count: 51 },
  { name: "Metal", count: 38 }, { name: "Velvet", count: 19 }, { name: "Linen", count: 22 },
];

export const filterCategories = [
  { name: "Sofa Sets", count: 893 }, { name: "2 Seater Sofas", count: 101 }, { name: "3 Seater Sofas", count: 178 },
  { name: "Sectional Sofas", count: 32 }, { name: "Sofa Cum Beds", count: 76 },
];

export function formatPrice(price: number): string {
  return "₹" + price.toLocaleString("en-IN");
}
