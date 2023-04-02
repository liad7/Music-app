'use client'

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo, useRef, useState } from "react"
import { stationService } from "../services/station.service"
import { utilService } from "../services/util.service"

export function AppHeader() {
    const pathname = usePathname()
    
    const searchRef = useRef(utilService.debounce(stationService.query, 500))
    const [searchValue, setSearchValue] = useState('')

    const search = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(target.value)
        searchRef.current(target.value)
    }

    const isSearchPage = useMemo(() => pathname === '/search', [pathname])

    return (
        <header className="absolute h-16 w-full">
            {/* background div */}
            <div className="bg-[#af9d5c] h-full w-full">
                <nav className="flex justify-between items-center h-full w-full px-1 md:px-6">
                    <div className="flex items-center gap-4">
                        <div className="arrow-btn"><ChevronLeftIcon className="w-6 h-6 ml-1 text-white cursor-pointer" /></div>
                        <div className="arrow-btn"><ChevronRightIcon className="w-6 h-6 ml-1.5 text-white cursor-pointer" /></div>
                    </div>
                    {isSearchPage &&
                        <div className="">
                            <input type="text"
                                placeholder="Search"
                                onChange={search}
                                value={searchValue}
                            />
                        </div>}
                    <div className="flex font-bold">
                        <Link href={``} className="text-white login-sighup-btn">Sign up</Link>
                        <Link href={``} className="text-black rounded-3xl bg-white login-sighup-btn hover:scale-105">Log in</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}