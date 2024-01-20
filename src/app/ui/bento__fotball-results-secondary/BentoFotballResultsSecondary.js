import { getFotballResults } from '../../lib/server__acctions'
import BentoFotballResultsLegue from '../bento__football-results-legue/BentoFotballResultsLegue'

export default async function BentoFotballResultsSecondary() {
  const getChampionsLegue = await getFotballResults(
    'https://api.football-data.org/v4/competitions/PL/matches?status=LIVE,SCHEDULED'
  )

  return (
    <div className="rounded-xl border-2 border-slate-400/10 bg-[#37003db1] p-4 dark:bg-neutral-900 text-2xl text-black row-span-2 col-span-1 ">
      <BentoFotballResultsLegue
        data={getChampionsLegue}
      ></BentoFotballResultsLegue>
    </div>
  )
}
