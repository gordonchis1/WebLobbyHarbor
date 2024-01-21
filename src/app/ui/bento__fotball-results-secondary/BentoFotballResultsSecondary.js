import { getFotballResults } from '../../lib/server__acctions'
import BentoFotballResultsLegue from '../bento__football-results-legue/BentoFotballResultsLegue'

//! Add Live matches

export default async function BentoFotballResultsSecondary() {
  const getPremierLegue = await getFotballResults(
    'https://api.football-data.org/v4/competitions/PD/matches?status=SCHEDULED,LIVE'
  )

  return (
    <div className="rounded-xl border-2 border-slate-400/10 bg-[#37003db1] p-4 dark:bg-neutral-900 text-2xl text-black row-span-2 col-span-1 ">
      <BentoFotballResultsLegue
        data={getPremierLegue}
      ></BentoFotballResultsLegue>
    </div>
  )
}
