import { useState, useEffect } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'
import olympicsData from '../data/olympicsData.tsx'
import type { IndicatorProps, State, Olympic, Participation } from '../models/types.tsx'
import Header from '../components/Header.tsx'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
)

const Home = () => {
  const [data, setData] = useState<State>(null)

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

  // Anti-pattern 6 — Logique métier complexe directement dans le composant
  const calculateTotalMedals = (country: Olympic) => {
    return country.participations.reduce(
      (sum: number, p: Participation) => sum + p.medalsCount,
      0,
    )
  }

  const totalParticipatingCountries = data ? data.length : 0
  const totalGamesEditions = 5

  // Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
  if (!data) {
    return <div>Chargement...</div>
  }

  const chartData = {
    labels: data.map((d: Olympic) => d.name),
    datasets: [
      {
        label: 'Total des médailles',
        data: data.map((d: Olympic) => calculateTotalMedals(d)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  }

  const title: string = "Historique des Jeux Olympiques - TéléSport"
  const subtitle: string = "Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années."
  const indicators: Array<IndicatorProps> = [
    { title: "Pays participants", value: totalParticipatingCountries, valueColor: "blue" },
    { title: "Éditions des JO", value: totalGamesEditions, valueColor: "green" }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Header title={title} subtitle={subtitle} indicators={indicators} />

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: '400px' }}>
            <Pie data={chartData} options={chartOptions} />
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  )
}

export default Home