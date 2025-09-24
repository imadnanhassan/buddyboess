export default function UserProfilePage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 lg:px-8 py-6">
      <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
        <img src="https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop" className="h-40 w-full object-cover" alt="" />
        <div className="p-4">
          <div className="flex items-center gap-3">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" className="h-16 w-16 rounded-full ring-2 ring-white -mt-10" alt="" />
            <div>
              <h1 className="text-xl font-semibold">John Doe</h1>
              <p className="text-sm text-neutral-600">@john</p>
            </div>
          </div>
          <p className="mt-3 text-neutral-700">Bio: Coffee and code.</p>
        </div>
      </div>
      <div className="mt-6 rounded-xl border border-neutral-200 bg-white p-6">Timeline (placeholder)</div>
    </div>
  );
}