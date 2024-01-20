'use server'

import { ScrollShadow } from '@nextui-org/react'
import Image from 'next/image'

export default async function BentoFotballResultsLegue({ data }) {
  return (
    <>
      {data && (
        <ScrollShadow className="max-h-[100%] w-[100%] min-w-[100%] overflow-y-scroll overflow-x-hidden">
          <div className="flex text-lg items-center w-full justify-between bg-blur-bg px-2 py-1 rounded">
            <p>{data.competition.name}</p>
            <img src={data.competition.emblem} className="w-[40px] ml-2"></img>
          </div>
          <div>
            {data.matches.map((element) => {
              const date = new Date(element.utcDate)
              return (
                <div
                  key={element.id}
                  className="h-auto w-full flex flex-col mt-2 bg-slate-50 rounded p-2 "
                >
                  <div className="flex w-full justify-between ">
                    <div className="flex max-w-[182px] min-w-[182px] text-base text-center px-2">
                      <div className="flex w-full justify-between">
                        <img
                          src={element.homeTeam.crest}
                          className="w-[40px] h-[40px]"
                        ></img>
                        <p className="mr-2 truncate">
                          {element.homeTeam.shortName || 'to be defined'}
                        </p>
                        <p>{element.score.fullTime.home || '-'}</p>
                      </div>
                    </div>
                    <p>VS</p>
                    <div className="flex max-w-[182px] min-w-[182px] justify-end text-base px-2">
                      <div className="flex w-full justify-between">
                        <p>{element.score.fullTime.away || '-'}</p>
                        <p className="ml-2 truncate text-center">
                          {element.awayTeam.shortName || 'to be defined'}
                        </p>
                        <img
                          src={element.awayTeam.crest}
                          className="w-[40px] h-[40px]"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full h-auto justify-center items-center text-sm">
                    <p>{`${date.getDate()}/${
                      date.getUTCMonth() + 1
                    }/${date.getFullYear()}`}</p>
                    <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                    <p className="text-xs">{element.stage}</p>
                    <p className="text-xs">{element.status}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollShadow>
      )}
    </>
  )
}
