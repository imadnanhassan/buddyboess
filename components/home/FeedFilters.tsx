'use client';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export function FeedFilters() {
  const tags = ['All', 'Announcement', 'Health & Wellness', 'Food & Recipes', 'More'];
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              className={`rounded-lg px-3 py-1 text-sm ${t === 'All' ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm text-neutral-600">
          <button className="flex items-center gap-1 hover:text-neutral-800">
            <span>Show all updates</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 hover:text-neutral-800">
            <span>by new posts</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <MagnifyingGlassIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}