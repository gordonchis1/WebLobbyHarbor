import Link from 'next/link'

export default function SuggestedSpotifyArtists({ name, href }) {
  return (
    <Link
      href={href}
      className="text-sm text-left text-blue hover:underline decoration-2 "
    >
      {name}
    </Link>
  )
}
