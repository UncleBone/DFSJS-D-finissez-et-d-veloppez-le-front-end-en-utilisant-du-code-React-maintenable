import { Link, useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import type { Olympic, Participation, IndicatorProps } from '../models/types.tsx'
import Header from '../components/Header.tsx'
import useData from '../hooks/useData.ts'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Country = () => {
  const { id } = useParams()
  const {data,loading} = useData(id)
  
  if (loading) {
    return <div>Chargement...</div>
  }

  const country: Olympic = data[0]

  if(!country){
    return (<div>Erreur: l'identifiant n'est pas dans la base de donnée</div>)
  }

  const totalMedals = country.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  )
  const totalAthletes = country.participations.reduce(
    (sum: number, p: Participation) => sum + p.athleteCount,
    0,
  )
  const totalParticipations = country.participations.length

  const title = country.name
  const indicators: Array<IndicatorProps> = [
    { title: "Participations", value: totalParticipations, valueColor: "black" },
    { title: "Total médailles", value: totalMedals, valueColor: "black" },
    { title: "Total athlètes", value: totalAthletes, valueColor: "black" }
  ]

  // Anti-pattern 10 — Préparation des données du graphique dans le composant — extraire dans une fonction ou un hook pour séparer UI et logique. https://react.dev/learn/thinking-in-react
  const evolutionData = {
    labels: country.participations.map((p: Participation) => p.year.toString()),
    datasets: [
      {
        label: 'Nombre de médailles',
        data: country.participations.map((p: Participation) => p.medalsCount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  }

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <Header title={title} subtitle='' indicators={indicators} />

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
          <div style={{ height: '400px' }}>
            <Line data={evolutionData} options={evolutionOptions} />
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-4">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>

        <Link to="/" className="bg-(--green) text-white text-center rounded-lg px-4 py-2">Retour à l'accueil</Link>

      </div>
    </div>
  )
}

export default Country