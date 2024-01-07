'use client'
import { useEffect } from 'react'
import { authSpotify } from '../../lib/authSpotify'

export default function GetSpotify({ searchParams }) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authSpotify(searchParams.code)
        localStorage.setItem('spotify', JSON.stringify(response))
      } catch (err) {
        console.error(err)
      }
    }
    if (searchParams.code && !localStorage.getItem('spotify')) {
      fetchData()
    }
  }, [searchParams.code])

  return ''
}
