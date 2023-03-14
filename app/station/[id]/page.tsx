'use client'

import { useEffect, useState } from "react"
import { AppHeader } from "../../../cmps/app-header"
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
        <section className="px-2.5 md:px-7">
            {/* <AppHeader /> */}
            <div className="flex items-end pb-6 bg-[#b17269]">
                <img className="h-56 shadow shadow-black" src={station.imgUrl} alt="" />
                <div className="flex flex-col px-6 text-white">
                    <p className="mt-4">PLAYLIST</p>
                    <h1 className="font-bold text-7xl my-3">{station.name}</h1>
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