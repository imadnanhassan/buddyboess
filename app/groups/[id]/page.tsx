import { notFound } from 'next/navigation';

const groups = {
  coffee: {
    name: 'Coffee Addicts',
    description: 'A group for coffee lovers to share brews, beans, and tips.',
    cover: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop',
  },
  fitness: {
    name: 'Fitness Buddies',
    description: 'Workouts, nutrition, and accountability.',
    cover: 'https://images.unsplash.com/photo-1518310383301-5b409fa41aa3?q=80&w=1600&auto=format&fit=crop',
  },
  devs: {
    name: 'Web Dev Community',
    description: 'Discuss frontend, backend, tooling, and careers.',
    cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
};

export default function GroupDetail({ params }: { params: { id: string } }) {
  const g = (groups as any)[params.id];
  if (!g) return notFound();

  return (
    <div className="mx-auto max-w-[1000px] px-4 lg:px-8 py-6">
      <div className="rounded-xl overflow-hidden border border-neutral-200 bg-white">
        <img src={g.cover} alt="" className="h-40 w-full object-cover" />
        <div className="p-4">
          <h1 className="text-2xl font-semibold">{g.name}</h1>
          <p className="text-neutral-700 mt-1">{g.description}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-4">Group feed (placeholder)</div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">Create post composer (placeholder)</div>
        </div>
        <aside className="space-y-4">
          <div className="rounded-xl border border-neutral-200 bg-white p-4">Members (placeholder)</div>
          <div className="rounded-xl border border-neutral-200 bg-white p-4">About (placeholder)</div>
        </aside>
      </div>
    </div>
  );
}