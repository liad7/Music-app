import { ArrowsRightLeftIcon, ArrowUturnLeftIcon, BackwardIcon, ForwardIcon } from "@heroicons/react/24/solid"

export function SongPlayer() {
    return (
        <section className="flex flex-col justify-center">
            <div className="gap-2 flex items-center justify-evenly">
                <ArrowsRightLeftIcon className="w-6 h-6"/>
                <BackwardIcon className="w-6 h-6"/>
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
                    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16" data-encore-id="icon" class="play-pause"><path d="M3 1.713a.7.7 0 011.05-.607l10.89 6.288a.7.7 0 010 1.212L4.05 14.894A.7.7 0 013 14.288V1.713z"></path></svg>
                </div>
                <ForwardIcon  className="w-6 h-6"/>
                <ArrowUturnLeftIcon className="w-6 h-6"/>
            </div>

            <div className="flex items-center gap-2 w-full"></div>
        </section>
    )
}