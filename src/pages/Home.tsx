import type { IndicatorProps, Olympic } from '../models/types.tsx'
import Header from '../components/Header.tsx'
import PieChart from '../components/PieChart.tsx'
import useData from '../hooks/useData.ts'

const Home = () => {
  const {data,loading} = useData("all")
  
  if (loading) {
    return <div>Chargement...</div>
  }
  
  const totalParticipatingCountries = data.length
  const totalGamesEditions = data.reduce(
    (max: number, country: Olympic) => max = Math.max(country.participations.length, max),
    0
  )

  const title = "Historique des Jeux Olympiques - TéléSport"
  const subtitle = "Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années."
  const indicators: Array<IndicatorProps> = [
    { title: "Pays participants", value: totalParticipatingCountries, valueColor: "black" },
    { title: "Éditions des JO", value: totalGamesEditions, valueColor: "black" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-4">
        <Header title={title} subtitle={subtitle} indicators={indicators} />
        <PieChart data={data} />
      </div>
    </div>
  )
}

export default Home