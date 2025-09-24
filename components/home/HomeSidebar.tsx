'use client';

export function HomeSidebar() {
  const blogItems = [
    { title: 'Tackle Your closest Spring cleaning', date: 'May 14, 2019', img: 'https://images.unsplash.com/photo-1520342868574-5fa0b4e90c76?q=80&amp;w=200&amp;auto=format&amp;fit=crop' },
    { title: 'The Truth About Business Blogging', date: 'May 14, 2019', img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=200&amp;auto=format&amp;fit=crop' },
    { title: '10 Tips to stay healthy when...', date: 'May 14, 2019', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=200&amp;auto=format&amp;fit=crop' },
    { title: 'Visiting Amsterdam on a Budget', date: 'May 8, 2019', img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&amp;w=200&amp;auto=format&amp;fit=crop' },
    { title: 'OMA completes renovation...', date: 'May 8, 2019', img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&amp;w=200&amp;auto=format&amp;fit=crop' },
  ];

  const following = Array.from({ length: 16 }).map((_, i) => `https://randomuser.me/api/portraits/${i % 2 ? 'women' : 'men'}/${10 + i}.jpg`);

  return (
    <div className="space-y-6">
      {/* Blog card */}
      <section className="rounded-xl border border-neutral-200 bg-white p-4">
        <h3 className="text-lg font-semibold text-neutral-800 mb-4">Blog</h3>
        <ul className="space-y-4">
          {blogItems.map((item, idx) => (
            <li key={idx} className="flex gap-3">
              <img src={item.img} alt="" className="h-12 w-12 rounded-md object-cover" />
              <div>
                <p className="text-sm font-medium text-neutral-800 line-clamp-1">{item.title}</p>
                <p className="text-xs text-neutral-500">{item.date}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full rounded-lg border border-neutral-300 py-2 text-sm text-neutral-700 hover:bg-neutral-50">See all</button>
      </section>

      {/* Following */}
      <section className="rounded-xl border border-neutral-200 bg-white p-4">
        <div className="flex items-baseline justify-between mb-3">
          <h3 className="text-lg font-semibold text-neutral-800">I’m Following</h3>
          <span className="text-sm text-neutral-500">{following.length}</span>
        </div>
        <div className="grid grid-cols-8 gap-2">
          {following.map((src, i) => (
            <img key={i} src={src} className="h-9 w-9 rounded-full object-cover ring-1 ring-neutral-200" alt="" />
          ))}
        </div>
      </section>
    </div>
  );
}