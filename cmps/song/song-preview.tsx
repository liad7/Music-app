import { TrashIcon } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/outline"
import { YoutubeService } from "../../services/youtube.service"
import { useEffect, useState } from "react"

type Props = {
    song: Song,
    idx: number
}

export function SongPreview({ song, idx }: Props) {
    const [duration, setDuration] = useState('--:--')
    useEffect(() => {
        loadSongDuration()
    }, [])

    const loadSongDuration = async () => {
        try {
            const duration = await YoutubeService.getSongDuration(song.id)
            setDuration(duration)
        } catch (err) {
            setDuration('--:--')
        }
    }

    return (
        <section className="flex justify-between cursor-pointer sm-row md:row items-center hover:bg-[#2c2c2c]"
        >
            <p className="mr-6 pl-3">{idx + 1}</p>
            <div className="w-12 h-12 overflow-hidden">
                <img className="w-24 h-16 -mt-2.5" src={song.imgUrl} alt="" />
            </div>
            <div className="overflow-hidden">
                <p className="text-white text-xs">{song.title}</p>
                <p className="text-sm text-gray-500">{song.channelTitle}</p>
            </div>
            <div className="flex justify-end md:opacity-0">
                <HeartIcon className="w-5 h-5" />
            </div>
            <p className="flex justify-end">{duration}</p>
            <div className="flex justify-center md:opacity-0">
                <TrashIcon className="w-5 h-5" />
            </div>
        </section>
    )
}