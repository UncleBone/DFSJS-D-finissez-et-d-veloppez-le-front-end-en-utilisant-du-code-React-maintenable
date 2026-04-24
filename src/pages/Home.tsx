import { useState, useEffect } from 'react'
import olympicsData from '../data/olympicsData.tsx'
import type { IndicatorProps, Olympic, Participation } from '../models/types.tsx'
import Header from '../components/Header.tsx'
import PieChart from '../components/PieChart.tsx'

const calculateTotalMedals = (country: Olympic) => {
  return country.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  )
}

const Home = () => {
  const [data, setData] = useState<Array<Olympic>>([])

  // Anti-pattern 4 — useEffect avec logique lourde dans le composant — idéalement : custom hook ou librairie de fetching de données (ex. react-query).
  // De plus en mode développement, le "strict mode" de React est activé, ce qui va éxecuter ce code 2
  // Pour aller plus loin : https://react.dev/learn/you-might-not-need-an-effect
  useEffect(() => {
    // Anti-pattern 5 — console.log à retirer.
    console.log('Loading data...')
    setTimeout(() => {
      setData(olympicsData)
      // Anti-pattern 5 — console.log à retirer.
      console.log('Data loaded:', olympicsData)
    }, 500)
  }, [])

  const nbTotalMedals = data.map((d: Olympic) => calculateTotalMedals(d))
  const labels = data.map((d: Olympic) => d.name)
  
  const totalParticipatingCountries = data.length
  const totalGamesEditions = 5

  // Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
  if (data.length === 0) {
    return <div>Chargement...</div>
  }

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