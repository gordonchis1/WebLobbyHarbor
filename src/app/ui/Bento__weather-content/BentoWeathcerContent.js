import { useEffect, useState } from 'react'
import { getCurrentWeather } from '../../lib/server__acctions'
import { Chip } from '@nextui-org/react'

export default function BentoWeathcerContent({ lat, long }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCurrentWeather(lat, long)
        setWeather(response)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchData()
  }, [lat, long])

  return (
    <div className="">
      {weather && (
        <div className="flex items-center justify-center">
          <img
            className="w-[100px] h-[100px] mr-3"
            src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather.weather[0].icon}.svg`}
          ></img>
          <div className="flex flex-col">
            <div className="flex">
              <p>{weather.name}</p>
              <Chip className="ml-1 " color="primary" size="sm">
                {weather.sys.country}
              </Chip>
            </div>
            <p>{weather.main.temp.toString().split('.', 1)}°C</p>
          </div>
        </div>
      )}
    </div>
  )
}
