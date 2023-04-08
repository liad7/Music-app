'use client'

import { useEffect, useState } from "react"
import { stationService } from "../services/station.service"
import { HeroStation } from "./hero-station"
import { StationList } from "./station-list"

export function StationIndex() {
    const [stations, setStations] = useState<Station[]>([])
    const tags = ['Made For you', 'Chill', 'Recently played']

    useEffect(() => {
        loadStations()
    }, [])

    const loadStations = async () => {
        const stations: Station[] = await stationService.query()
        setStations(stations as never[])
    }

    const getStationsByTag = (tag:string): Station[] => {
        return stations.filter(station => station?.tags?.includes(tag)).splice(0, 4)
    }
    return (
        <section>
            {!stations.length ?
                <p>Loading...</p>
                :
                <>
                    <section className="grid grid-cols-2 gap-7">
                        {[...stations].splice(0, 6).map(station => (
                            <HeroStation station={station} />
                        ))}
                    </section>
                    {tags.map(tag => (
                        <StationList key={tag} tag={tag} stations={getStationsByTag(tag)} />
                    ))}
                </>
            }
        </section>
    )
}