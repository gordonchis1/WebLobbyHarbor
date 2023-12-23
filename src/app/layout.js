import './globals.css'
import { GeistSans } from 'geist/font/sans'

export const metadata = {
  title: 'Loading',
  description: 'Loading...'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}
