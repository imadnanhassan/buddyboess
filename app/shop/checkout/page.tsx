export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-[700px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
      <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-4">
        <div className="flex items-center gap-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/320px-PayPal_logo.svg.png" alt="PayPal" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Stripe_Logo%2C_revised_2016.svg/320px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-8" />
        </div>
        <p className="text-neutral-700">Mock payment screen. Integrations will be wired later.</p>
        <button className="rounded-lg bg-neutral-800 text-white px-4 py-2 text-sm" disabled>Pay now (disabled)</button>
      </div>
    </div>
  );
}