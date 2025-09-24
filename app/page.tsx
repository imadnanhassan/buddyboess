'use client';

import { useEffect, useState } from 'react';
import { HomeSidebar } from '@/components/home/HomeSidebar';
import { Topbar } from '@/components/home/Topbar';
import { Composer } from '@/components/home/Composer';
import { FeedFilters } from '@/components/home/FeedFilters';
import { PostCard } from '@/components/home/PostCard';
import { CompleteProfile } from '@/components/home/CompleteProfile';
import { LatestUpdates } from '@/components/home/LatestUpdates';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { fetchPosts } from '@/lib/slices/feedSlice';

export default function HomePage() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((s) => s.feed.posts);
  const status = useAppSelector((s) => s.feed.status);

  const [updates, setUpdates] = useState<{ name: string; avatar: string; text: string; time: string }[]>([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
    // Fetch latest updates (mock)
    fetch('/api/updates')
      .then((r) => r.json())
      .then((d) => setUpdates(d.updates))
      .catch(() => setUpdates([]));
  }, [dispatch]); // load once

  return (
    <div className="min-h-screen bg-neutral-50">
      <Topbar />

      <div className="relative mx-auto max-w-[1400px] px-4 lg:px-8 pt-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left rail */}
          <aside className="lg:col-span-3 space-y-6">
            <HomeSidebar />
          </aside>

          {/* Center feed */}
          <main className="lg:col-span-6 space-y-6">
            <Composer />
            <FeedFilters />
            <div className="space-y-4">
              {posts.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </main>

          {/* Right rail */}
          <aside className="lg:col-span-3 space-y-6">
            <CompleteProfile />
            <LatestUpdates updates={updates} />
          </aside>
        </div>
      </div>
    </div>
  );
}