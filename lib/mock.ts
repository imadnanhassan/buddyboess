export type Post = {
  id: string;
  author: { name: string; avatar: string };
  timeAgo: string;
  edited?: boolean;
  visibility?: 'Public' | 'Friends' | 'Private';
  media?: { type: 'video' | 'image'; src: string; poster?: string; duration?: string };
  text?: string;
  reactions: { likeCount?: number; whoReacted: string[] };
  commentsCount: number;
};

export const mockPosts: Post[] = [
  {
    id: '1',
    author: { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
    timeAgo: '4 years ago',
    edited: true,
    visibility: 'Public',
    media: {
      type: 'video',
      src: 'https://cdn.jsdelivr.net/gh/zhazhahui/CDN-assets@main/video/beach.mp4',
      poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop',
      duration: '0:13',
    },
    text: 'Enjoying the beach!',
    reactions: { likeCount: 2, whoReacted: ['You', 'Jennifer'] },
    commentsCount: 2,
  },
];

export const mockUpdates = [
  { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update', time: '4 years ago' },
  { name: 'Adele', avatar: 'https://randomuser.me/api/portraits/women/65.jpg', text: 'posted an update', time: '4 years ago' },
  { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update', time: '5 years ago' },
  { name: 'John', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'posted an update in the group ☕ Coffee Addicts', time: '5 years ago' },
];