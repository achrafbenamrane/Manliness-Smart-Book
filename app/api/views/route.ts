import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const VIEWS_KEY = 'book_views';

// Initialize Redis with your Upstash credentials
// Using KV_REST_API_URL and KV_REST_API_TOKEN from environment
const redis = new Redis({
  url: process.env.KV_REST_API_URL || '',
  token: process.env.KV_REST_API_TOKEN || '',
});

// GET - Return current views
export async function GET() {
  try {
    const views = await redis.get<number>(VIEWS_KEY);
    return NextResponse.json({ views: views || 0 });
  } catch (error) {
    console.error('Error getting views:', error);
    return NextResponse.json({ views: 0 });
  }
}

// POST - Increment views
export async function POST() {
  try {
    const newViews = await redis.incr(VIEWS_KEY);
    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error('Error incrementing views:', error);
    return NextResponse.json({ views: 0 });
  }
}
