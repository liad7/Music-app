type Props = {
    station: Station
}

export function StationPreview({ station }: Props) {
    return (
        <section className="p-4 rounded-md">
            <div>
                <img src={station.imgUrl} alt="" />
                <button></button>
            </div>

        </section>
    )
}