import CheckoutStepper from "@/components/checkout/CheckoutStepper";
import AddressCard from "@/components/checkout/AddressCard";
import DeliveryOptions from "@/components/checkout/DeliveryOptions";
import PaymentMethods from "@/components/checkout/PaymentMethods";
import CheckoutOrderSummary from "@/components/checkout/CheckoutOrderSummary";

export default function CheckoutPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Checkout</h1>
      
      <CheckoutStepper currentStep={2} />
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column: Address & Delivery */}
        <div className="flex-1 space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4">Delivery Address</h2>
            <AddressCard />
            <button className="w-full mt-4 py-3 border-2 border-dashed border-border rounded-xl text-sm font-medium hover:bg-muted transition-colors">
              + Add New Address
            </button>
          </section>

          <section>
            <DeliveryOptions />
          </section>
        </div>

        {/* Center Column: Payment */}
        <div className="flex-1">
          <PaymentMethods />
        </div>

        {/* Right Column: Order Summary */}
        <div className="w-full lg:w-[380px] xl:w-[420px]">
          <CheckoutOrderSummary />
        </div>
      </div>
    </div>
  );
}
