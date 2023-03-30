export type Charts = Chart[]

export interface Chart {
    id: number
    kwh: number
    temp: number
    createdAt: string
    updatedAt: string
}