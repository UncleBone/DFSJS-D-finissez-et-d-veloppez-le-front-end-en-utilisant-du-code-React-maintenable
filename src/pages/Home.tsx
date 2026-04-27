import type { IndicatorProps, Olympic, Participation } from '../models/types.tsx'
import Header from '../components/Header.tsx'
import PieChart from '../components/PieChart.tsx'
import useData from '../hooks/useData.ts'

const calculateTotalMedals = (country: Olympic) => {
  return country.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  )
}

const Home = () => {
  const {data,loading} = useData()
  
  if (loading) {
    return <div>Chargement...</div>
  }

  const nbTotalMedals = data.map((d: Olympic) => calculateTotalMedals(d))
  const labels = data.map((d: Olympic) => d.name)
  
  const totalParticipatingCountries = data.length
  const totalGamesEditions = 5

  const title = "Historique des Jeux Olympiques - TéléSport"
  const subtitle = "Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années."
  const indicators: Array<IndicatorProps> = [
    { title: "Pays participants", value: totalParticipatingCountries, valueColor: "blue" },
    { title: "Éditions des JO", value: totalGamesEditions, valueColor: "green" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Header title={title} subtitle={subtitle} indicators={indicators} />
        <PieChart labels={labels} nbTotalMedals={nbTotalMedals} />
      </div>
    </div>
  )
}

export default Home