import { Link, useParams } from 'react-router-dom'
import type { Olympic, Participation, IndicatorProps } from '../models/types.tsx'
import Header from '../components/Header.tsx'
import useData from '../hooks/useData.ts'
import LineChart from '../components/LineChart.tsx'

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

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto p-4">
        <Header title={title} subtitle='' indicators={indicators} />

        <LineChart data={country} />
        
        <div className="text-sm text-gray-600 mb-4">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>

        <Link to="/" className="bg-(--green) text-white text-center rounded-lg px-4 py-2">Retour à l'accueil</Link>

      </div>
    </div>
  )
}

export default Country