import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function AppHeader() {
    return (
        <header className="h-16">
            {/* background div */}
            <div className="bg-[#af9d5c] h-full w-full">
                <nav className="flex justify-between items-center h-full w-full px-1 md:px-6">
                    <div className="flex items-center gap-4">
                        <div className="arrow-btn"><ChevronLeftIcon className="w-6 h-6 ml-1"/></div>
                        <div className="arrow-btn"><ChevronRightIcon className="w-6 h-6 ml-1.5"/></div>
                    </div>
                    <div className="flex font-bold">
                        <Link href={``} className="text-white login-sighup-btn">Sign up</Link>
                        <Link href={``} className="text-black rounded-3xl bg-white login-sighup-btn hover:scale-105">Log in</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}