'use client'

import { useEffect, useState } from "react"
import { stationService } from "../services/station.service"
import { StationPreview } from "./station-preview"

export function StationList() {
    const [stations, setStations] = useState([])
    console.log('stations:', stations)

    useEffect(() => {
        loadStations()
    }, [])

    const loadStations = async () => {
        const stations: Station[] = await stationService.query()
        setStations(stations as never[])
    }
    return (
        <section>
            {!stations ?
                <p>Loading...</p>
                :
                <>
                    {stations.map(station => <StationPreview key={station._id} station={station} />)}
                </>
            }
        </section>
    )
}