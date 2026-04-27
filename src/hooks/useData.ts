import olympicsData from '../data/olympicsData.tsx'
import { useEffect, useState } from "react";
import type { Olympic } from '../models/types.tsx';

const useData = () => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<Array<Olympic>>([]);
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setData(olympicsData)
            setLoading(false)
            }, 200)
        }
    )

    return { data, loading }
}

export default useData