type Props = {
    stations: Station[]
}

export function HeroStation({ stations }: Props) {
    return (
        <section className="grid grid-cols-2 gap-7">
            {stations.map(station => (
                <div key={station._id} className="flex items-center rounded bg-[#2c2c2c]">
                    <img src={station.imgUrl} alt="" className="rounded-l w-20 h-20"/>
                    <h3>{station.name}</h3>
                </div>
            ))}
        </section>
    )
}