import { SongPreview } from "./song-preview"

type Props = {
    songs: Song[] | undefined
}

export function SongList({ songs }: Props) {
    return (
        <section className="text-[#ababab] pb-28">
            {songs?.map((song,idx) => 
                <SongPreview key={song.id} song={song} idx={idx}/>
            )}
        </section>
    )
}