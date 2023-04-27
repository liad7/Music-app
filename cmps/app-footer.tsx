'use client'

import { useCallback, useState } from "react"
import { useRecoilState } from "recoil"
import { currSongState } from "../atoms/song.atom"
import { SongPlayer } from "./song/song-player"
import { VolumeSlider } from "./volume-slider"

export function AppFooter() {
    const [volume, setVolume] = useState<number>(0.5)
    const [song, setSong] = useRecoilState(currSongState)

    const onHandleChange = useCallback(({ target }: MouseEvent) => {
        const value = target?.value
        setVolume(value)
    }, [])

    return (
        <section className="fixed bottom-0 w-full border-t-2 border-[#8080802b] bg-[#181818] px-2.5 md:px-7">
            <div className=" flex justify-between h-20 mt-2 bg-[#181818]  border-t-transparent text-white md:grid grid-cols-3 text-xs md:text-base px-4 md:px-8">
                {/* song preview */}
                <div className="flex items-center space-x-4">
                    <img className="h-16 w-24 md:h-20 md:w-24" src={song.imgUrl} alt="" />
                    <div>
                        <h3 className="hidden md:inline text-sm">{song.title}</h3>
                        <p className="text-xs">{song.channelTitle}</p>
                        <div className="opacity-0 false">
                            <svg width="20" height="20" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="#1db954"><g transform="matrix(1 0 0 -1 0 80)"><rect width="5" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="5" height="20" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="5" height="10" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="5" height="5" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="5" height="20" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect></g></svg>
                        </div>
                    </div>
                </div>

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