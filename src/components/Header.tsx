import Indicator from '../components/Indicator.tsx'
import type { IndicatorProps } from '../models/types.tsx'

const Header = ({ title, subtitle, indicators }: { title: string, subtitle: string, indicators: Array<IndicatorProps>}) => {
    return (
        <>
        <h1 className="text-4xl font-bold mb-8">{title}</h1>

        { subtitle && (
            <div className="mb-8">
                <p className="text-lg">{subtitle}</p>
            </div>
            )
        }

        <div className="mb-2">
            {
                indicators.map((params,index) => (
                  <Indicator 
                  key={index+" "+params.title } title={params.title} value={params.value} 
                  bottomMargin={index < indicators.length - 1} valueColor={params.valueColor} />
                ))
            }
        </div>
        </>
    )
}

export default Header