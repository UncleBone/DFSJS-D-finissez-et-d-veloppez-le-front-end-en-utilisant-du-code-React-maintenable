import type { IndicatorProps } from "../models/types"

const Indicator = ({ title, value, bottomMargin, valueColor }: IndicatorProps)  => {
    return (
        <div className={"bg-gray-800 p-6 rounded-lg shadow-lg text-center "+(bottomMargin ? "mb-2" : "")}>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className={"text-4xl font-bold text-"+valueColor+"-400"}>
                {value}
            </p>
        </div>
    )
}

export default Indicator