import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const VIEWS_KEY = 'book_views';

// GET - Return current views
export async function GET() {
  try {
    const views = await kv.get<number>(VIEWS_KEY) || 0;
    return NextResponse.json({ views });
  } catch (error) {
    console.error('Error getting views:', error);
    return NextResponse.json({ views: 0 });
  }
}

// POST - Increment views
export async function POST() {
  try {
    const newViews = await kv.incr(VIEWS_KEY);
    return NextResponse.json({ views: newViews });
  } catch (error) {
    console.error('Error incrementing views:', error);
    // Fallback response
    return NextResponse.json({ views: 0 });
  }
}
