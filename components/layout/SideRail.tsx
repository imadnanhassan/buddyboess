'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const items = [
  { href: '/', label: 'Feed', emoji: '🏠' },
  { href: '/groups', label: 'Groups', emoji: '👥' },
  { href: '/messages', label: 'Messages', emoji: '💬' },
  { href: '/photos', label: 'Photos', emoji: '📸' },
  { href: '/documents', label: 'Documents', emoji: '📄' },
  { href: '/shop', label: 'Shop', emoji: '🛍️' },
  { href: '/blog', label: 'Blog', emoji: '📰' },
  { href: '/affiliates', label: 'Affiliates', emoji: '🤝' },
  { href: '/subscription', label: 'Subscription', emoji: '💎' },
  { href: '/admin', label: 'Admin', emoji: '🛠️' },
];

export function SideRail() {
  return (
    <aside className="fixed left-0 top-16 bottom-0 w-14 border-r border-neutral-200 bg-white hidden lg:flex flex-col items-center gap-3 py-3">
      {items.map((it) => (
        <Link key={it.href} href={it.href} className="w-full">
          <motion.div
            whileHover={{ backgroundColor: 'rgb(245 245 244)' }}
            whileTap={{ scale: 0.97 }}
            className="mx-2 flex h-10 items-center justify-center rounded-lg text-xl"
            title={it.label}
          >
            <span>{it.emoji}</span>
          </motion.div>
        </Link>
      ))}
    </aside>
  );
}