export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  brand: string;
  price: number;
  comparePrice: number;
  discount: number;
  images: string[];
  colors: ProductColor[];
  materials: string[];
  rating: number;
  reviewCount: number;
  categoryId: string;
  categoryName: string;
  features: ProductFeature[];
  specifications: Record<string, string>;
  isBestSeller: boolean;
  isNewArrival: boolean;
  inStock: boolean;
}

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  description?: string;
  productCount: number;
  subcategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  slug: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedMaterial: string;
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: string;
}

export interface Address {
  id: string;
  label: string;
  name: string;
  street: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: OrderItem[];
  status: OrderStatus;
  total: number;
  deliveryCharges: number;
  assemblyCharges: number;
  address: Address;
  paymentMethod: string;
  deliveryType: string;
  createdAt: string;
  trackingSteps: TrackingStep[];
}

export interface OrderItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
  color: string;
  material: string;
}

export type OrderStatus = "confirmed" | "processing" | "packed" | "shipped" | "out_for_delivery" | "delivered" | "cancelled";

export interface TrackingStep {
  status: string;
  label: string;
  date: string;
  time: string;
  completed: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
}

export interface FilterState {
  categories: string[];
  priceRange: [number, number];
  brands: string[];
  colors: string[];
  materials: string[];
  rating: number | null;
  sortBy: string;
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified: boolean;
}
