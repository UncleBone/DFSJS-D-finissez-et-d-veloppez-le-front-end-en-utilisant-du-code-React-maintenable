interface Participation {
    id: number,
    year: number, 
    city: string,
    medalsCount: number,
    athleteCount: number
}

interface Olympic {
    id: number;
    name: string;
    participations: Participation[];
}

type IndicatorValueColor = "blue" | "green" | "yellow"

interface IndicatorProps { 
    title: string; 
    value: number; 
    valueColor: IndicatorValueColor; 
    bottomMargin?: boolean; 
}

export type { Participation, Olympic, IndicatorProps }