import { NextResponse } from 'next/server';
import type { NextRequest, NextMiddleware } from 'next/server';

export const middleware: NextMiddleware = (request: NextRequest) => {
    if (request.nextUrl.pathname.match(/^\/docs\/?$/)) {
        return NextResponse.redirect(new URL('/docs/discord-player?type=class&target=Player', request.url));
    }

    if (request.nextUrl.pathname.match(/^\/guide\/?$/) && !request.nextUrl.search) {
        return NextResponse.redirect(new URL('/guide?topic=Welcome&page=Welcome', request.url));
    }
};

export const config = {
    matcher: ['/docs', '/guide']
};
