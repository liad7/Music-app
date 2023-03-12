import { AppHeader } from "../cmps/app-header"

function HomePage() {
    return (
        <section className="text-white">
            <AppHeader />
            <div className="bg-[#535353]">
                <h1>Good evening</h1>
            </div>
        </section>
    )
}

export default HomePage