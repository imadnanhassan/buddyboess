'use client';
import { EllipsisHorizontalIcon, GlobeAltIcon, HandThumbUpIcon, ChatBubbleLeftIcon, ArrowUturnRightIcon } from '@heroicons/react/24/outline';

export function PostCard({ post }: { post: any }) {
  return (
    <article className="rounded-xl border border-neutral-200 bg-white">
      {/* header */}
      <div className="p-4 flex items-start gap-3">
        <img src={post.author.avatar} alt="" className="h-9 w-9 rounded-full ring-1 ring-neutral-200 object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-neutral-800">{post.author.name} posted an update</p>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                <span>{post.timeAgo}{post.edited ? ' (edited)' : ''}</span>
                <GlobeAltIcon className="h-4 w-4" />
                <span>•</span>
              </div>
            </div>
            <button className="text-neutral-500 hover:text-neutral-800">
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* text */}
      {post.text && (
        <div className="px-4 pb-2">
          <p className="text-sm text-neutral-800">{post.text}</p>
        </div>
      )}

      {/* media */}
      {post.media?.type === 'video' && (
        <div className="px-4 pb-4">
          <div className="relative overflow-hidden rounded-lg border border-neutral-200">
            <video controls poster={post.media.poster} className="w-full h-full rounded-lg">
              <source src={post.media.src} />
            </video>
            <span className="absolute bottom-2 right-2 text-xs bg-black/70 text-white rounded px-1">{post.media.duration}</span>
          </div>
        </div>
      )}

      {/* reactions */}
      <div className="px-4 pb-2">
        <div className="flex items-center gap-2 text-sm text-neutral-700">
          <span className="select-none">👍❤️</span>
          <span>
            {post.reactions.whoReacted.join(' and ')} {post.reactions.likeCount ? `and ${post.reactions.likeCount} others` : ''} reacted
          </span>
        </div>
      </div>

      {/* actions */}
      <div className="border-t border-neutral-200 px-4 py-2 flex items-center justify-between text-neutral-600">
        <Action icon={<HandThumbUpIcon className="h-5 w-5" />} label="React" />
        <Action icon={<ChatBubbleLeftIcon className="h-5 w-5" />} label="Comment" />
        <Action icon={<ArrowUturnRightIcon className="h-5 w-5" />} label="Share" />
      </div>

      {/* comments footer */}
      <div className="px-4 pb-4">
        <button className="text-sm text-neutral-600 hover:text-neutral-800">{post.commentsCount} Comments</button>
      </div>
    </article>
  );
}

function Action({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-neutral-100">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
}