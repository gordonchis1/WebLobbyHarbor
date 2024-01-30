import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/sign-in',
    '/sign-up',
    '/api',
    '/api/user',
    '/api/webhooks(.*)',
    '/api/webhook',
    '/api/login/spotify',
    '/api/login',
    '/api/login/callback/twitch',
    '/api/login/callback/spotify',
    '/api/login/twitch'
  ]
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
}
