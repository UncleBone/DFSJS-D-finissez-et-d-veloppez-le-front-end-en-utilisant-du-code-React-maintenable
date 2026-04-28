import olympicsData from '../data/olympicsData.ts'
import { useEffect, useState } from "react";
import type { Olympic } from '../models/types.tsx';

const useData = () => {
    const [loading,setLoading] = useState(true);
    const [data,setData] = useState<Array<Olympic>>([]);
    
    useEffect(() => {
        setTimeout(() => {
            setData(olympicsData)
            setLoading(false)
            }, 200)
        }
    )

    return { data, loading }
}

export default useData