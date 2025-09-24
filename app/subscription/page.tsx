export default function SubscriptionPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Subscription</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Free</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>Basic feed access</li>
            <li>Limited messages</li>
            <li>Join public groups</li>
          </ul>
          <button className="mt-4 rounded-lg border border-neutral-300 px-3 py-1 text-sm">Choose</button>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Premium</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            <li>Create groups</li>
            <li>Unlimited messages</li>
            <li>Advanced reactions</li>
          </ul>
          <button className="mt-4 rounded-lg bg-neutral-800 text-white px-3 py-1 text-sm">Upgrade</button>
        </div>
      </div>
    </div>
  );
}