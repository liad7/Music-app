'use client'

import Link from "next/link"
import { useState } from "react"

type Props = {
    station: Station
}

export function StationPreview({ station }: Props) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href={`/station/${station._id}`}>
            <section className="p-5 rounded-md bg-[#1a1a1a]"
                onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="relative mb-2">
                    <img className="absolute top-1 left-1 w-4" src="https://playlist-kqq9.onrender.com/static/media/logoLogin.f9fa6a511526d355c531.png" />
                    <img className="rounded" src={station.imgUrl} alt="" />
                    <button className={`play-btn bottom-2 right-0.5 absolute ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1.5'}`}>
                        <svg role="img" height="24" width="24" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg>
                    </button>
                </div>
                <h3 className="overflow-hidden font-bold pb-1 pt-2.5">{station.name}</h3>
                <p className="min-h-[3.5em] opacity-50"></p>
            </section>
        </Link>
    )
}