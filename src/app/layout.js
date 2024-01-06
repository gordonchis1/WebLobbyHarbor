import { GeistSans } from 'geist/font/sans'
import { Providers } from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import('./globals.css')

export const metadata = {
  title: 'Home',
  description: 'Loading...'
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="light">
        <body className={`${GeistSans.className}`}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
