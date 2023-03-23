import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { QueueListIcon } from "@heroicons/react/24/outline"

function NavBar() {
    return (
        <ul className="font-bold mt-4 mb-6">
            <li className="flex items-center px-2 h-10">
                <a href="" className="nav-link">
                    <HomeIcon className="h-6 w-6"/>
                    <span className="text-sm">Home</span>
                </a>
            </li>
            <li className="flex items-center px-2 h-10">
                <a href="" className="nav-link">
                    <MagnifyingGlassIcon className="h-6 w-6"/>
                    <span className="text-sm">Search</span>
                </a>
            </li>
            <li className="flex items-center px-2 h-10">
                <a href="" className="nav-link">
                    <QueueListIcon className="h-6 w-6 rotate-90"/>
                    <span className="text-sm">Your Library</span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar