import Link from 'next/link';

export default function ShopPage() {
  const products = [
    { id: '1', name: 'Community Tee', price: 24.0, img: 'https://images.unsplash.com/photo-1520975602280-7aa7b5e6d0f0?q=80&w=800&auto=format&fit=crop' },
    { id: '2', name: 'Sticker Pack', price: 8.5, img: 'https://images.unsplash.com/photo-1536893828388-1996b6f9f54b?q=80&w=800&auto=format&fit=crop' },
    { id: '3', name: 'Mug', price: 14.5, img: 'https://images.unsplash.com/photo-1524594224088-47f28ff08cae?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="mx-auto max-w-[1000px] px-4 lg:px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Shop</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="rounded-xl border border-neutral-200 bg-white overflow-hidden">
            <img src={p.img} alt="" className="h-40 w-full object-cover" />
            <div className="p-4">
              <p className="font-semibold text-neutral-800">{p.name}</p>
              <p className="text-sm text-neutral-600">${p.price.toFixed(2)}</p>
              <Link href="/shop/checkout" className="mt-3 inline-block rounded-lg bg-neutral-800 text-white px-3 py-1 text-sm">Buy</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}