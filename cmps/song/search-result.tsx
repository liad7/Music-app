import { SongList } from "./song-list"

type Props = {
    songs: Song[]
}

export function SearchResult({ songs }: Props) {
    const firstSong = songs[0]
    return (
        <section className="text-white md:flex md:gap-5 max-md:pt-36">
            {/* top result  */}
            <div className="h-72 mb-10">
                <h2 className="mb-10 font-semibold text-xl">Top result</h2>
                <div className="bg-[#1a1a1a] rounded-md p-4">
                    <img className="rounded-md w-56" src={firstSong?.imgUrl} alt="" />
                    <h4 className="font-semibold text-xl">{firstSong?.title}</h4>
                    <p className="opacity-70">{firstSong?.channelTitle}</p>
                </div>
            </div>

            {/* song list  */}
            <div className="flex-1 h-72">
                <h2 className="mb-10 font-semibold text-xl">Songs</h2>
                <div className="bg-[#1a1a1a] rounded-md overflow-y-scroll">
                    <SongList songs={songs} />
                </div>
            </div>

        </section>
    )
}