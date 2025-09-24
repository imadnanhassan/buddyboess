import Link from 'next/link';

const links = [
  { href: '/admin/users', label: 'Users' },
  { href: '/admin/posts', label: 'Posts' },
  { href: '/admin/groups', label: 'Groups' },
  { href: '/admin/shop', label: 'Shop' },
  { href: '/admin/subscriptions', label: 'Subscriptions' },
  { href: '/admin/analytics', label: 'Analytics' },
  { href: '/admin/reports', label: 'Reports' },
];

export default function AdminHome() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="rounded-xl border border-neutral-200 bg-white p-6 hover:bg-neutral-50">
          {l.label}
        </Link>
      ))}
    </div>
  );
}