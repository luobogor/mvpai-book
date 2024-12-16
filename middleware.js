export { middleware } from 'nextra/locales'

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!_next|_vercel|.*\\..*).*)',
  ]
}