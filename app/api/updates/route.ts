import { NextResponse } from 'next/server';
import { mockUpdates } from '@/lib/mock';

export async function GET() {
  return NextResponse.json({ updates: mockUpdates });
}