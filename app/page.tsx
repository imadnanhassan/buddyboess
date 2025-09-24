'use client';

import { HomeSidebar } from '@/components/home/HomeSidebar';
import { Topbar } from '@/components/home/Topbar';
import { Composer } from '@/components/home/Composer';
import { FeedFilters } from '@/components/home/FeedFilters';
import { PostCard } from '@/components/home/PostCard';
import { CompleteProfile } from '@/components/home/CompleteProfile';
import { LatestUpdates } from '@/components/home/LatestUpdates';

export default function HomePage() {
  // Mock data using external assets
  const posts = [
    {
      id: '1',
      author: { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
      timeAgo: '4 years ago',
      edited: true,
      visibility: 'Public',
      media: {
        type: 'video',
        src: 'https://cdn.jsdelivr.net/gh/zhazhahui/CDN-assets@main/video/beach.mp4',
        poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop',
        duration: '0:13',
      },
      text: 'Enjoying the beach!',
      reactions: { likeCount: 2, whoReacted: ['You', 'Jennifer'] },
      commentsCount: 2,
    },
  ];

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
            <LatestUpdates />
          </aside>
        </div>
      </div>
    </div>
  );
}