import { NextResponse } from 'next/server';
import connectDB from '../../../lib/db';
import Review from '../../../models/Review';

export const runtime = 'nodejs';

function requireApiKey(request) {
  const expected = process.env.REVIEWS_API_KEY;
  const provided = request.headers.get('x-api-key');

  if (!expected) {
    return NextResponse.json(
      { error: 'Server misconfigured: missing REVIEWS_API_KEY' },
      { status: 500 }
    );
  }

  if (!provided || provided !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  return null;
}

export async function GET() {
  try {
    await connectDB();
    const reviews = await Review.find({ isPublished: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ data: reviews });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const auth = requireApiKey(request);
  if (auth) return auth;

  try {
    await connectDB();
    const body = await request.json();

    const { name, rating, message, role, isPublished } = body ?? {};

    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'name is required' }, { status: 400 });
    }

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'message is required' },
        { status: 400 }
      );
    }

    if (rating !== undefined) {
      if (typeof rating !== 'number' || Number.isNaN(rating) || rating < 1 || rating > 5) {
        return NextResponse.json(
          { error: 'rating must be a number between 1 and 5' },
          { status: 400 }
        );
      }
    }

    if (isPublished !== undefined && typeof isPublished !== 'boolean') {
      return NextResponse.json(
        { error: 'isPublished must be a boolean' },
        { status: 400 }
      );
    }

    const created = await Review.create({
      name,
      rating,
      message,
      role,
      isPublished,
    });

    return NextResponse.json({ data: created }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to create review' },
      { status: 500 }
    );
  }
}
