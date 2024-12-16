export { middleware } from 'nextra/locales'

// TODO，public 也被重定向了

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest).*)'
  ]
}