'use client'

import { useCallback, useState } from "react"
import { SongPlayer } from "./song/song-player"
import { VolumeSlider } from "./volume-slider"

export function AppFooter() {
    const [volume, setVolume] = useState<number>(0.5)

    const onHandleChange = useCallback(({ target }: MouseEvent) => {
        const value = target?.value
        setVolume(value)
    }, [])

    return (
        <section className="fixed bottom-0 w-full border-t-2 border-[#8080802b] bg-[#181818] px-2.5 md:px-7">
            <div className=" flex justify-between h-20 mt-2 bg-[#181818]  border-t-transparent text-white md:grid grid-cols-3 text-xs md:text-base px-4 md:px-8">
                {/* song preview */}
                <div></div>

                {/* song player */}
                <SongPlayer />

                {/* audio control */}
                <div className="hidden md:flex items-center space-x-3 md:space-x-4 justify-end pr-5">
                    <VolumeSlider onHandleChange={onHandleChange} volume={volume} />
                </div>
            </div>
        </section>
    )
}