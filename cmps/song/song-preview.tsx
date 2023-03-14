type Props = {
    song: Song,
    idx: number
}
export function SongPreview({ song, idx }: Props) {
    return (
        <section className="flex">
            <p>{idx}</p>
            <img src={song.imgUrl} alt="" />
            <div>
                <p className="text-white text-xs">{song.title}</p>
                <p className="text-sm">{song.channelTitle}</p>
            </div>
            <p>{song.addedAt}</p>
            <p>time</p>
        </section>
    )
}