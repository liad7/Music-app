'use client'

import { PlayIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

type Props = {
    station: Station
}

export function HeroStation({ station }: Props) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div key={station._id} className="flex items-center justify-between rounded bg-[#2c2c2c] hover:bg-[#333]"
            onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="flex items-center">
                <img src={station.imgUrl} alt="" className="rounded-l w-20 h-20" />
                <h3 className="ml-3.5">{station.name}</h3>
            </div>
            <button className={`flex justify-center items-center mr-2 rounded-full bg-[#1ed760] w-12 h-12 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                {/* <PlayIcon className="w-6 h-6"/> */}
                <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
            </button>
        </div>
    )
}