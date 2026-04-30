import olympicsData from '../data/olympicsData.ts'
import { useEffect, useState } from "react";
import type { Olympic } from '../models/types.tsx';

const useData = (countryId: string | undefined ) => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<Array<Olympic>>([]);
    
    useEffect(() => {
        setTimeout(() => {
            if(countryId && countryId !== "all"){
                const cDat = olympicsData.find((c: Olympic) => c.id === Number(countryId))
                setData(cDat === undefined ? [] : [cDat])
            }else{
                setData(olympicsData)
            }
            setLoading(false)
            }, 500)
        }
    )

    return { data, loading }
}

export default useData