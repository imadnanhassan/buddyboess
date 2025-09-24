export default function MessagesPage() {
  return (
    <div className="mx-auto max-w-[1000px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Messages</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <aside className="rounded-xl border border-neutral-200 bg-white p-4">
          <div className="space-y-2">
            <input className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm" placeholder="Search" />
            <div className="space-y-2 text-sm">
              <div className="rounded-lg p-2 hover:bg-neutral-100 cursor-pointer">John</div>
              <div className="rounded-lg p-2 hover:bg-neutral-100 cursor-pointer">Adele</div>
              <div className="rounded-lg p-2 hover:bg-neutral-100 cursor-pointer">Coffee Addicts Group</div>
            </div>
          </div>
        </aside>
        <main className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-4">
          <div className="h-64 overflow-y-auto space-y-2 text-sm">
            <div className="flex"><span className="rounded-lg bg-neutral-100 px-3 py-2">Hey there!</span></div>
            <div className="flex justify-end"><span className="rounded-lg bg-brand/10 px-3 py-2">Hello 👋</span></div>
          </div>
          <div className="mt-3 flex gap-2">
            <input className="flex-1 rounded-lg border border-neutral-300 px-3 py-2 text-sm" placeholder="Type a message..." />
            <button className="rounded-lg bg-neutral-800 text-white px-3 py-2 text-sm">Send</button>
          </div>
        </main>
      </div>
    </div>
  );
}