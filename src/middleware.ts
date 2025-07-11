import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['pt', 'en', 'es'],

  // Used when no locale matches
  defaultLocale: 'pt',

  // Map specific paths to locales
  pathnames: {
    '/us': '/en',
    '/es': '/es'
  }
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(pt|us|es)/:path*', '/us', '/es']
};