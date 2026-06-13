"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, WishlistItem } from "@/types";

interface StoreState {
  // Cart
  cartItems: CartItem[];
  addToCart: (product: Product, color: string, material: string) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;

  // Wishlist
  wishlistItems: WishlistItem[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Mobile menu
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;

  // Search
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      // ─── Cart ─────────────────────────────────────
      cartItems: [],
      addToCart: (product, color, material) => {
        const { cartItems } = get();
        const existing = cartItems.find(
          (item) => item.product.id === product.id && item.selectedColor === color && item.selectedMaterial === material
        );
        if (existing) {
          set({
            cartItems: cartItems.map((item) =>
              item.id === existing.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({
            cartItems: [
              ...cartItems,
              {
                id: `cart-${Date.now()}`,
                product,
                quantity: 1,
                selectedColor: color,
                selectedMaterial: material,
              },
            ],
          });
        }
      },
      removeFromCart: (id) => set({ cartItems: get().cartItems.filter((item) => item.id !== id) }),
      updateQuantity: (id, quantity) => {
        if (quantity < 1) return;
        set({
          cartItems: get().cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)),
        });
      },
      clearCart: () => set({ cartItems: [] }),
      getCartTotal: () => get().cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      getCartCount: () => get().cartItems.reduce((sum, item) => sum + item.quantity, 0),

      // ─── Wishlist ─────────────────────────────────
      wishlistItems: [],
      addToWishlist: (product) => {
        const { wishlistItems } = get();
        if (wishlistItems.some((item) => item.product.id === product.id)) return;
        set({
          wishlistItems: [
            ...wishlistItems,
            { id: `wl-${Date.now()}`, product, addedAt: new Date().toISOString() },
          ],
        });
      },
      removeFromWishlist: (productId) =>
        set({ wishlistItems: get().wishlistItems.filter((item) => item.product.id !== productId) }),
      isInWishlist: (productId) => get().wishlistItems.some((item) => item.product.id === productId),

      // ─── UI State ─────────────────────────────────
      mobileMenuOpen: false,
      setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
      searchQuery: "",
      setSearchQuery: (query) => set({ searchQuery: query }),
    }),
    {
      name: "blitz-furniture-store",
      partialize: (state) => ({
        cartItems: state.cartItems,
        wishlistItems: state.wishlistItems,
      }),
    }
  )
);
