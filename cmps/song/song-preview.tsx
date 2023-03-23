import { TrashIcon } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/outline"

type Props = {
    song: Song,
    idx: number
}
export function SongPreview({ song, idx }: Props) {
    const newDate = new Date(song.addedAt)

    const date = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(newDate)
    return (
        <section className="flex justify-between  sm-row md:row items-center hover:bg-[#2c2c2c]">
            <p className="mr-6 pl-3">{idx + 1}</p>
            <div className="w-12 h-12 overflow-hidden">
                <img className="w-24 h-16 -mt-2.5" src={song.imgUrl} alt="" />
            </div>
            <div className="overflow-hidden">
                <p className="text-white text-xs">{song.title}</p>
                <p className="text-sm">{song.channelTitle}</p>
            </div>
            <p>{date}</p>
            <div className="flex justify-end md:opacity-0">
                <HeartIcon className="w-5 h-5"/>
            </div>
            <p className="flex justify-end">time</p>
            <div className="flex justify-center md:opacity-0">
                <TrashIcon className="w-5 h-5"/>
            </div>
        </section>
    )
}