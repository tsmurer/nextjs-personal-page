import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const auth = request.headers.get('authorization');
  
  if (
    request.nextUrl.pathname.startsWith('/admin') &&
    auth !== `Basic ${btoa('admin:password')}`
  ) {
    return new NextResponse('Unauthorized', {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic' },
    });
  }
}
