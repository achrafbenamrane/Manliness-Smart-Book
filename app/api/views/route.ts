import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const VIEWS_KEY = 'book_views';

// Initialize Redis from environment variables
// Vercel will provide UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN
const redis = Redis.fromEnv();

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
