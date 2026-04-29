import Indicator from '../components/Indicator.tsx'
import type { IndicatorProps } from '../models/types.tsx'

const Header = ({ title, subtitle, indicators }: { title: string, subtitle: string, indicators: Array<IndicatorProps>}) => {
    return (
        <>
        <div className="bg-(--green) text-white text-center rounded-lg p-2 mb-6">
            <h1 className="text-4xl font-bold">{title}</h1>

            { subtitle && (
                <div className="mt-2 mb-2">
                    <p className="text-lg">{subtitle}</p>
                </div>
                )
            }
        </div>

        <div className="mb-2 md:flex flex-row justify-around">
            {
                indicators.map((params,index) => (
                  <Indicator 
                  key={index+" "+params.title } title={params.title} value={params.value} 
                  bottomMargin={true} valueColor={params.valueColor} />
                ))
            }
        </div>
        </>
    )
}

export default Header