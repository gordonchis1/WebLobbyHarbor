import { Image } from '@nextui-org/react'

export default function SuggestedSpotifyArtistsProfile({ response }) {
  console.log(response.artists)
  return (
    <div className={'overflow-x-scroll h-min'}>
      <div className="flex min-w-full grow w-fit justify-between h-fit">
        {response.artists.items.map((element) => {
          console.log(element)
          return (
            <div
              key={element.id}
              className={
                'flex flex-col w-full justify-center items-center h-fit aspect-square min-w-40'
              }
            >
              <Image
                src={element.images[1]?.url}
                alt="profile"
                width={140}
                className="w-full h-auto aspect-square"
                radius={'full'}
              ></Image>
              <p>{element.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
