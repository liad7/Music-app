import { ArrowsRightLeftIcon, ArrowUturnLeftIcon, BackwardIcon, ForwardIcon, PlayIcon } from "@heroicons/react/24/solid"

export function SongPlayer() {
    return (
        <section className="flex flex-col justify-center">
            <div className="gap-2 flex items-center justify-evenly">
                <ArrowsRightLeftIcon className="w-6 h-6"/>
                <BackwardIcon className="w-6 h-6"/>
                <div className="rounded-full bg-white w-8 h-8 flex items-center justify-center">
                    <PlayIcon className="w-6 h-6 text-black"/>
                </div>
                <ForwardIcon  className="w-6 h-6"/>
                <ArrowUturnLeftIcon className="w-6 h-6"/>
            </div>

            <div className="flex items-center gap-2 w-full"></div>
        </section>
    )
}