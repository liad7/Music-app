import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { QueueListIcon } from "@heroicons/react/24/outline"

function NavBar() {
    return (
        <ul>
            <li className="px-2 h-10">
                <a href="" className="flex items-center gap-4 px-4">
                    <HomeIcon className="h-6 w-6"/>
                    <span className="text-sm">Home</span>
                </a>
            </li>
            <li className="px-2 h-10">
                <a href="" className="flex items-center gap-4 px-4">
                    <MagnifyingGlassIcon className="h-6 w-6"/>
                    <span className="text-sm">Search</span>
                </a>
            </li>
            <li className="px-2 h-10">
                <a href="" className="flex items-center gap-4 px-4">
                    <QueueListIcon className="h-6 w-6 rotate-90"/>
                    <span className="text-sm">Your Library</span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar