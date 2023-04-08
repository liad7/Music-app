'use client' 

import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

type Props = {
    onHandleChange: any,
    volume: number
}

export function VolumeSlider({ onHandleChange, volume }: Props) {
    const [volumeColor, setVolumeColor] = useState<string>('#ffffff')

    function onToggleHover(ev: MouseEvent) {
        if (ev.type === 'mousemove') setVolumeColor('#1ed760')
        else setVolumeColor('#ffffff')
    }
    return (
        <>
            {volume !== 0 ? <SpeakerWaveIcon className="w-5 h-5" /> : <SpeakerXMarkIcon className="w-5 h-5" />}
            <input
                type="range"
                className="volume-range w-full"
                onChange={onHandleChange}
                value={volume}
                min={0}
                max={1}
                step={0.1}
                onMouseMove={onToggleHover}
                onMouseLeave={onToggleHover}
                style={{ background: `linear-gradient(to right, ${volumeColor} 0%, ${volumeColor} ${volume}%, #b3b3b3 ${volume}%, #b3b3b3 100%)` }}
            />
        </>
    )
}