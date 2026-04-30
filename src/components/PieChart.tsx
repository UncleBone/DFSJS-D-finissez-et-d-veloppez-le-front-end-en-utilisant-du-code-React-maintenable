import { Pie } from 'react-chartjs-2'
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
import type { Olympic, Participation } from '../models/types'
import type { ChartEvent, ActiveElement } from 'chart.js'
import { useNavigate } from 'react-router-dom'
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

const calculateTotalMedals = (country: Olympic) => {
  return country.participations.reduce(
    (sum: number, p: Participation) => sum + p.medalsCount,
    0,
  )
}

const PieChart = ({ data } : { data: Array<Olympic> }) => {
    const navigate = useNavigate()

    const sortedData = data.sort((a: Olympic, b: Olympic) => calculateTotalMedals(b) - calculateTotalMedals(a))
    const nbTotalMedals: Array<number> = sortedData.map((d: Olympic) => calculateTotalMedals(d))
    const labels: Array<string> = sortedData.map((d: Olympic) => d.name)

    const chartData = {
    labels: labels,
    datasets: [
        {
            label: 'Total des médailles',
            data: nbTotalMedals,
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
                color: 'black',
                },
            },
        },
        onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
            if (elements.length > 0) {
                const index = elements[0].index
                const country = data[index]
                navigate("/country/"+country.id)
            }
        },
    }

    return (
        <>
            <div className="bg-white-800 p-8">
                <div style={{ height: '400px' }}>
                <Pie data={chartData} options={chartOptions} />
                </div>
            </div>

            <div className="text-sm text-black-400">
            <p>Cliquez sur un pays pour voir ses détails</p>
            </div>
        </>
    )
}

export default PieChart