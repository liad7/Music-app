import { StationPreview } from "./station-preview"

type Props = {
    stations: Station[],
    tag: string
}

export function StationList({ stations, tag }: Props) {
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold my-7">{tag}</h1>
                <p className="font-thin text-xs hover:underline cursor-pointer text-[#b7b7b7]">SHOW ALL</p>
            </div>
            <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {stations.map(station => <StationPreview key={station._id} station={station} />)}
            </section>
        </>
    )
}