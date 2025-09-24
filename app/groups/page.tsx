import Link from 'next/link';

export default function GroupsPage() {
  const groups = [
    { id: 'coffee', name: 'Coffee Addicts', members: 1240, cover: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop' },
    { id: 'fitness', name: 'Fitness Buddies', members: 980, cover: 'https://images.unsplash.com/photo-1518310383301-5b409fa41aa3?q=80&w=1600&auto=format&fit=crop' },
    { id: 'devs', name: 'Web Dev Community', members: 5230, cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop' },
  ];

  return (
    <div className="mx-auto max-w-[1000px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Groups</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <Link key={g.id} href={`/groups/${g.id}`} className="rounded-xl border border-neutral-200 overflow-hidden bg-white">
            <img src={g.cover} alt="" className="h-28 w-full object-cover" />
            <div className="p-4">
              <p className="font-semibold text-neutral-800">{g.name}</p>
              <p className="text-sm text-neutral-600">{g.members} members</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}