import type { IndicatorProps } from "../models/types"

const Indicator = ({ title, value, bottomMargin, valueColor }: IndicatorProps)  => {
    return (
        <div className={"bg-white p-6 rounded-lg shadow-lg text-center border-(--green) border-solid border-3 "+(bottomMargin ? "mb-2" : "")}>
            <h3 className="text-xl text-gray-500 font-semibold mb-2">{title}</h3>
            <p className={"text-4xl font-bold text-"+valueColor+"-400"}>
                {value}
            </p>
        </div>
    )
}

export default Indicator