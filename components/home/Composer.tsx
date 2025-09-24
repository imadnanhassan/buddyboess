'use client';
import { PhotoIcon, FilmIcon, GifIcon, FaceSmileIcon, MicrophoneIcon } from '@heroicons/react/24/outline';

export function Composer() {
  return (
    <section className="rounded-xl border border-neutral-200 bg-white">
      <div className="p-4 flex gap-3">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="h-9 w-9 rounded-full ring-1 ring-neutral-200" />
        <input
          className="flex-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-300"
          placeholder="Share what's on your mind, John..."
        />
      </div>
      <div className="border-t border-neutral-200 px-4 py-2 flex items-center gap-3">
        <Icon label="Photo"><PhotoIcon className="h-5 w-5" /></Icon>
        <Icon label="Video"><FilmIcon className="h-5 w-5" /></Icon>
        <Icon label="GIF"><GifIcon className="h-5 w-5" /></Icon>
        <Icon label="Emoji"><FaceSmileIcon className="h-5 w-5" /></Icon>
        <Icon label="Audio"><MicrophoneIcon className="h-5 w-5" /></Icon>
      </div>
    </section>
  );
}

function Icon({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-neutral-600 hover:text-neutral-800 cursor-pointer">
      {children}
      <span className="text-sm">{label}</span>
    </div>
  );
}