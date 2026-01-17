import { NextResponse } from 'next/server';
import connectDB from '../../../../lib/db';
import Review from '../../../../models/Review';

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

export async function PUT(request, { params }) {
  const auth = requireApiKey(request);
  if (auth) return auth;

  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const allowed = ['name', 'rating', 'message', 'role', 'isPublished'];
    const update = {};
    for (const key of allowed) {
      if (key in (body ?? {})) update[key] = body[key];
    }

    const updated = await Review.findByIdAndUpdate(id, update, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: updated });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to update review' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const auth = requireApiKey(request);
  if (auth) return auth;

  try {
    await connectDB();
    const { id } = await params;

    const deleted = await Review.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ data: { id } });
  } catch (err) {
    return NextResponse.json(
      { error: 'Failed to delete review' },
      { status: 500 }
    );
  }
}
