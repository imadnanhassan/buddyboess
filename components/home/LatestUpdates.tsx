'use client';

export function LatestUpdates() {
  const updates = [
    { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update', time: '4 years ago' },
    { name: 'Adele', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', text: 'posted an update', time: '4 years ago' },
    { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update', time: '5 years ago' },
    { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update in the group ☕ Coffee Addicts', time: '5 years ago' },
  ];
  return (
    <section className="rounded-xl border border-neutral-200 bg-white p-4">
      <h3 className="text-lg font-semibold text-neutral-800 mb-3">Latest updates</h3>
      <ul className="space-y-3">
        {updates.map((u, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <img src={u.avatar} alt="" className="h-8 w-8 rounded-full ring-1 ring-neutral-200 object-cover" />
            <div>
              <p className="text-sm text-neutral-800"><span className="font-semibold">{u.name}</span> {u.text}</p>
              <p className="text-xs text-neutral-500">{u.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}