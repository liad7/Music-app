type Props = {
    songs: Song[]
}
export function SongList({ songs }: Props) {
    return (
        <section className="text-[#ababab]">
            <div className="flex bg-[#848484]">
                <p>#</p>
                <p>TITLE</p>
                <p>DATE ADDED</p>
                <p>
                    <svg fill="white" role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"></path><path d="M8 3.25a.75.75 0 01.75.75v3.25H11a.75.75 0 010 1.5H7.25V4A.75.75 0 018 3.25z"></path></svg>
                </p>
            </div>
            {songs.map(song => 
                <SongPreview key={song.id} />
            )}
        </section>
    )
}