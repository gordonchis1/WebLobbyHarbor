import BentoFotballResults from '../bento__football-results/BentoFootballRestults'
import BentoFotballResultsSecondary from '../bento__fotball-results-secondary/BentoFotballResultsSecondary'
import BentoWeather from '../bento__weather/BentoWeather'

export default async function Bento() {
  return (
    <div className="w-[55vw] h-[60vh] rounded grid auto-rows-[192px] grid-cols-3 gap-4 z-[5]">
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black">
        2
      </div>
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black">
        3
      </div>
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black">
        4
      </div>
      <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 flex justify-center items-center text-2xl text-black col-span-2">
        5
      </div>
      <BentoFotballResultsSecondary></BentoFotballResultsSecondary>
      <BentoFotballResults></BentoFotballResults>
      <BentoWeather></BentoWeather>
    </div>
  )
}
