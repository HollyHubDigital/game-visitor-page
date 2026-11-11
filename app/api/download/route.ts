import { NextResponse } from 'next/server';

export async function GET() {
  const adminApiUrl = process.env.ADMIN_API_URL;
  if (!adminApiUrl) {
    return NextResponse.json(
      { ok: false, error: 'The download service is not configured.' },
      { status: 503 }
    );
  }

  let downloadEndpoint: URL;
  try {
    const adminUrl = new URL(adminApiUrl);
    const localHttpAllowed =
      adminUrl.protocol === 'http:' &&
      ['localhost', '127.0.0.1'].includes(adminUrl.hostname);
    if (
      (adminUrl.protocol !== 'https:' && !localHttpAllowed) ||
      adminUrl.username ||
      adminUrl.password
    ) {
      throw new Error('ADMIN_API_URL must use HTTPS.');
    }
    downloadEndpoint = new URL('/api/admin/download', adminUrl);
  } catch {
    return NextResponse.json(
      { ok: false, error: 'The download service is misconfigured.' },
      { status: 500 }
    );
  }

  let upstream: Response;
  try {
    upstream = await fetch(downloadEndpoint, { cache: 'no-store' });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'The download service could not be reached.' },
      { status: 502 }
    );
  }

  if (!upstream.ok) {
    return NextResponse.json(
      { ok: false, error: 'The download service could not provide a link.' },
      { status: 502 }
    );
  }

  const payload: unknown = await upstream.json().catch(() => null);
  if (
    typeof payload !== 'object' ||
    payload === null ||
    !('ok' in payload) ||
    payload.ok !== true ||
    !('downloadUrl' in payload) ||
    typeof payload.downloadUrl !== 'string'
  ) {
    return NextResponse.json(
      { ok: false, error: 'The download service returned an invalid response.' },
      { status: 502 }
    );
  }

  let downloadUrl: URL;
  try {
    downloadUrl = new URL(payload.downloadUrl);
  } catch {
    return NextResponse.json(
      { ok: false, error: 'The download link is invalid.' },
      { status: 502 }
    );
  }

  if (downloadUrl.protocol !== 'https:') {
    return NextResponse.json(
      { ok: false, error: 'The download link must use HTTPS.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true, downloadUrl: downloadUrl.toString() });
}
