'use client'

import { useMemo, useRef, useState } from "react"
import { GenreList } from "../../cmps/genre/genre-list"
import { utilService } from "../../services/util.service"
import { stationService } from "../../services/station.service"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { usePathname } from "next/navigation"
import { SearchResult } from "../../cmps/song/search-result"

export default function Search() {
    const [songs, setSongs] = useState<Song[]>([])
    const pathname = usePathname()
    const [searchValue, setSearchValue] = useState('')

    const loadSearchSongs = async (value: string) => {
        setSongs(await stationService.searchSongs(value))
    }
    const searchRef = useRef(utilService.debounce(loadSearchSongs, 500))

    const search = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(target.value)
        searchRef.current(target.value)
    }

    const isSearchPage = useMemo(() => pathname === '/search', [pathname])

    return <main className="page-padding">
        {isSearchPage &&
            <div className="bg-white rounded-full flex items-center pt-0 px-2 w-96 mt-3 absolute md:ml-32 max-md:top-20">
                <MagnifyingGlassIcon className="w-6 h-6" />
                <input className="py-2 px-1 flex-1 border-none outline-none"
                    type="text"
                    placeholder="What do you want to listen to?"
                    onChange={search}
                    value={searchValue}
                />
                <XMarkIcon className={`w-6 h-6 cursor-pointer opacity-${searchValue ? '1' : '0'}`}
                    onClick={() => setSearchValue('')} />
            </div>}
        {searchValue?
            <SearchResult songs={songs} />
            :
            <GenreList />
        }
    </main>
}
