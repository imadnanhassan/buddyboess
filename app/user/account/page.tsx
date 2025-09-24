export default function AccountPage() {
  return (
    <div className="mx-auto max-w-[800px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Account</h1>
      <div className="rounded-xl border border-neutral-200 bg-white p-6 space-y-3">
        <label className="block text-sm">
          <span className="text-neutral-700">Username</span>
          <input className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" defaultValue="john" />
        </label>
        <label className="block text-sm">
          <span className="text-neutral-700">Bio</span>
          <textarea className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2" defaultValue="Coffee and code." />
        </label>
        <button className="rounded-lg bg-neutral-800 text-white px-4 py-2 text-sm">Save</button>
      </div>
    </div>
  );
}