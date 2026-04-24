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

export type { Participation, Olympic, IndicatorValueColor }