import { AppHeader } from "../cmps/app-header"
import { StationIndex } from "../cmps/station-index"

function HomePage() {
    return (
        <section className="text-white">
            <AppHeader />
            <div className="bg-gradient-to-b from-[#535353] px-2.5 md:px-7 pt-6">
                <h1 className="text-3xl font-bold mb-5">Good evening</h1>
                <StationIndex />
            </div>
        </section>
    )
}

export default HomePage