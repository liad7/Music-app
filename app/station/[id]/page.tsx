'use client'

import { useEffect, useState } from "react"
import { stationService } from "../../../services/station.service"

type Props = {
    params: {
        id: string
    }
}

export default function StationDetails({ params: { id } }: Props) {
    const [station, setStation] = useState([])

    useEffect(() => {
        loadStation()
    }, [])

    const loadStation = async () => {
        const station = await stationService.getById(id)
        setStation(station as never)
    }
    return (
        <section>
            <div className="flex">
                <img src={station.imgUrl} alt="" />
                <div className="flex flex-1 justify-items-end px-10 text-white">
                    <p>PLAYLIST</p>
                    <h1>{station.name}</h1>
                    <p>
                        <span>PLAYLIST</span>
                        • 
                        {station.songs?.length} songs
                    </p>
                </div>
            </div>
        </section>
    )
}