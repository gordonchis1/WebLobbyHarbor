import { getFotballResults } from '../../lib/server__acctions'
import BentoFotballResultsLegue from '../bento__football-results-legue/BentoFotballResultsLegue'
export default async function BentoFootallResults() {
  const getChampionsLegue = await getFotballResults(
    'https://api.football-data.org/v4/competitions/CL/matches?status=LIVE,SCHEDULED'
  )

  return (
    <div className="rounded-xl border-2 border-slate-400/10 bg-gradient-to-br from-[#17188dc0] to-[#8515c3c0] p-4 dark:bg-neutral-900 text-2xl text-black row-span-2 col-span-2 ">
      <BentoFotballResultsLegue
        data={getChampionsLegue}
      ></BentoFotballResultsLegue>
    </div>
  )
}
