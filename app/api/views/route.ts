import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const viewsFilePath = path.join(process.cwd(), 'data', 'views.json');

// Ensure data directory exists
function ensureDataDir() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Get current views
function getViews(): number {
  ensureDataDir();
  try {
    if (fs.existsSync(viewsFilePath)) {
      const data = fs.readFileSync(viewsFilePath, 'utf-8');
      const json = JSON.parse(data);
      return json.views || 0;
    }
  } catch (error) {
    console.error('Error reading views:', error);
  }
  return 0;
}

// Save views
function saveViews(views: number) {
  ensureDataDir();
  try {
    fs.writeFileSync(viewsFilePath, JSON.stringify({ views, lastUpdated: new Date().toISOString() }));
  } catch (error) {
    console.error('Error saving views:', error);
  }
}

// GET - Return current views
export async function GET() {
  const views = getViews();
  return NextResponse.json({ views });
}

// POST - Increment views
export async function POST() {
  const currentViews = getViews();
  const newViews = currentViews + 1;
  saveViews(newViews);
  return NextResponse.json({ views: newViews });
}
