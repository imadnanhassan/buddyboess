'use client';
import { BellIcon, ShoppingCartIcon, Cog6ToothIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function Topbar() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-neutral-200">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-brand flex items-center justify-center text-white font-semibold">b</div>
          <span className="text-neutral-800 font-semibold">Online Communities</span>
        </div>
        <nav className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-4 text-neutral-600">
            <span className="cursor-pointer">🏠</span>
            <span className="cursor-pointer">👥</span>
            <span className="cursor-pointer">💬</span>
            <span className="cursor-pointer">📸</span>
            <span className="cursor-pointer">📄</span>
          </div>
          <div className="flex items-center gap-3">
            <MagnifyingGlassIcon className="h-6 w-6 text-neutral-600" />
            <BellIcon className="h-6 w-6 text-neutral-600" />
            <ShoppingCartIcon className="h-6 w-6 text-neutral-600" />
            <Cog6ToothIcon className="h-6 w-6 text-neutral-600" />
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John" className="h-8 w-8 rounded-full ring-1 ring-neutral-200" />
          </div>
        </nav>
      </div>
    </header>
  );
}