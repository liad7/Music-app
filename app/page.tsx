import { AppHeader } from "../cmps/app-header"
import { StationList } from "../cmps/station-list"

function HomePage() {
    return (
        <section className="text-white">
            <AppHeader />
            <div className="bg-[#535353]">
                <h1>Good evening</h1>
                <StationList />
            </div>
        </section>
    )
}

export default HomePage