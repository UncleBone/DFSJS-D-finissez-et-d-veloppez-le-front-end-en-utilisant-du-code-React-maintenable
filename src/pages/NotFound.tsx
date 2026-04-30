import Header from '../components/Header.tsx'
import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
    <div className="min-h-screen bg-white max-w-6xl mx-auto p-4">
      <Header title="Erreur 404" subtitle="L'URL demandée n'existe pas" indicators={[]} />
      <Link to="/" className="bg-(--green) text-white text-center rounded-lg px-4 py-2">Retour à l'accueil</Link>
    </div>
  )
}

export default NotFound