import { StationPreview } from "./station-preview"

type Props = {
    stations: Station[],
    tag: string
}

export function StationList({ stations, tag }: Props) {
    return (
        <>
            <h1 className="text-3xl font-bold mb-5">{tag}</h1>
            <section className="px-7 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {stations.map(station => <StationPreview key={station._id} station={station} />)}
            </section>
        </>
    )
}