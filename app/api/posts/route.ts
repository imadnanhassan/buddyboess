import { NextResponse } from 'next/server';
import { mockPosts } from '@/lib/mock';

export async function GET() {
  return NextResponse.json({ posts: mockPosts });
}