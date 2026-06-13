"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import ProductFeatures from "./ProductFeatures";

interface ProductTabsProps {
  description: string;
  specifications: Record<string, string>;
  reviewCount: number;
}

const mockReviews = [
  {
    id: 1,
    author: "Vikram S.",
    rating: 5,
    date: "May 12, 2026",
    title: "Exceeded expectations in terms of quality!",
    comment: "The craftsmanship is top-notch. It fits perfectly in my living room and the cushions are extremely comfortable. The assembly team was quick and professional."
  },
  {
    id: 2,
    author: "Priya R.",
    rating: 4,
    date: "April 28, 2026",
    title: "Very elegant design",
    comment: "The design is very modern and minimalist. The fabric feels premium. Only reason for 4 stars is that it took 2 days longer than expected to be delivered, but the customer support kept me informed."
  },
  {
    id: 3,
    author: "Anil K.",
    rating: 5,
    date: "April 15, 2026",
    title: "Worth every rupee",
    comment: "Extremely sturdy and well-built. I was skeptical about ordering furniture online, but this has exceeded my expectations. Delivery was smooth and assembly was completed in 15 minutes."
  }
];

const mockQA = [
  {
    q: "What is the warranty period for this furniture item?",
    a: "All our furniture items come with a standard 12-month warranty covering manufacturing defects, structure strength, and foam/cushioning."
  },
  {
    q: "Is assembly included with delivery?",
    a: "Yes, free professional assembly is provided at the time of delivery by our trained installation team."
  },
  {
    q: "Can I customize the fabric or wood finish?",
    a: "Currently, we only offer the finishes and colors shown on the product page. Customization options are available for bulk orders of 10 or more items."
  },
  {
    q: "How should I clean and maintain this product?",
    a: "We recommend dusting regularly with a clean, dry cloth. For spills, blot immediately with a damp cloth and mild soap. Avoid direct exposure to sunlight."
  }
];

export default function ProductTabs({ description, specifications, reviewCount }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: `Reviews (${reviewCount || mockReviews.length})` },
    { id: "qa", label: "Q&A" },
    { id: "delivery", label: "Delivery & Returns" },
  ];

  return (
    <div className="mt-16 border-t border-border pt-8 w-full">
      {/* Tab Headers - Centered */}
      <div className="flex justify-center overflow-x-auto scrollbar-hide border-b border-border mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
              activeTab === tab.id 
                ? "border-foreground text-foreground" 
                : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Centered */}
      <div className="max-w-3xl mx-auto">
        {activeTab === "description" && (
          <div className="space-y-8 animate-in fade-in">
            <p className="text-muted-foreground leading-relaxed text-center">
              {description}
            </p>
            <ProductFeatures />
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="animate-in fade-in">
            <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
              <tbody>
                {Object.entries(specifications).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? "bg-muted/50" : ""}>
                    <td className="py-3 px-6 font-medium text-muted-foreground w-1/3 border-b border-border">{key}</td>
                    <td className="py-3 px-6 text-foreground border-b border-border">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-6 animate-in fade-in">
            {mockReviews.map((rev) => (
              <div key={rev.id} className="p-6 border border-border rounded-xl text-left space-y-2 bg-card">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">{rev.author}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">Verified Buyer</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{rev.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span 
                      key={i} 
                      className={cn(
                        "text-sm", 
                        i < rev.rating ? "text-star" : "text-muted"
                      )}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h4 className="font-medium text-sm text-foreground">{rev.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{rev.comment}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "qa" && (
          <div className="space-y-6 animate-in fade-in">
            {mockQA.map((qa, i) => (
              <div key={i} className="p-6 border border-border rounded-xl text-left bg-card space-y-2">
                <h4 className="font-semibold text-sm text-foreground flex gap-2">
                  <span className="text-primary font-bold">Q:</span>
                  {qa.q}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed flex gap-2 pl-4">
                  <span className="text-muted-foreground font-bold">A:</span>
                  {qa.a}
                </p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "delivery" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in text-left">
            <div className="p-6 border border-border rounded-xl bg-card space-y-3">
              <span className="text-2xl">🚚</span>
              <h4 className="font-semibold text-sm text-foreground">Delivery Timeline</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dispatch within 2-4 business days. Delivered in 5-9 business days depending on location. Free delivery on orders above ₹25,000.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card space-y-3">
              <span className="text-2xl">🔧</span>
              <h4 className="font-semibold text-sm text-foreground">Free Assembly</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Free professional assembly is provided at the time of delivery by our trained installation partners.
              </p>
            </div>
            <div className="p-6 border border-border rounded-xl bg-card space-y-3">
              <span className="text-2xl">↩</span>
              <h4 className="font-semibold text-sm text-foreground">7-Day Returns</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                We offer a hassle-free 7-day return policy. If you receive a damaged, defective, or incorrect item, we will replace it or issue a full refund.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
