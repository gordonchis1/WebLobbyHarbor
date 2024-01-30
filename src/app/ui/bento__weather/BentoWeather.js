'use client'
import { useEffect, useState } from 'react'
import BentoWeathcerContent from '../Bento__weather-content/BentoWeathcerContent'

// !este es un componente de lado cliente pero el que este solo va recuperar la lat y la long pero se lo va a pasar a un componente de el lado de el servidor
export default function BentoWeather() {
  const [weather, setWeather] = useState({
    lat: undefined,
    long: undefined
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const long = position.coords.longitude

      setWeather({ lat, long })
    })
  }, [])

  return (
    <div className="row-span-1 overflow-hidden rounded-xl border-2 border-slate-400/10 bg-gradient-to-r from-blue-200/[.70] to-cyan-200/[.70] p-4 flex justify-center items-center text-2xl text-black">
      {weather.lat ? (
        <BentoWeathcerContent
          lat={weather.lat}
          long={weather.long}
        ></BentoWeathcerContent>
      ) : (
        <p>Allows access to your location in order to use this widget</p>
      )}
    </div>
  )
}
