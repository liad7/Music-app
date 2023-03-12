'use client'

import { useEffect, useState } from "react"
import { stationService } from "../services/station.service"
import { HeroStation } from "./hero-station"
import { StationPreview } from "./station-preview"

export function StationList() {
    const [stations, setStations] = useState([])

    useEffect(() => {
        loadStations()
    }, [])

    const loadStations = async () => {
        const stations: Station[] = await stationService.query()
        setStations(stations as never[])
    }
    return (
        <section className="px-2.5 md:px-7 pt-20">
            {!stations ?
                <p>Loading...</p>
                :
                <>
                    <HeroStation stations={[...stations].splice(0,6)} />
                    {stations.map(station => <StationPreview key={station._id} station={station} />)}
                </>
            }
        </section>
    )
}