'use client'

import { useRef, useState } from "react"
import { GenreList } from "../../cmps/genre/genre-list"
import { utilService } from "../../services/util.service"
import { stationService } from "../../services/station.service"

export default function Search() {
    // const searchRef = useRef(utilService.debounce(stationService.query, 500))
    // const [searchValue, setSearchValue] = useState('')

    // const search = ({ target }: React.ChangeEvent<HTMLInputElement>):void => {
    //     setSearchValue(target.value)
    //     searchRef.current(target.value)
    // }
    
    return <main className="page-padding">
        {/* <div className="absolute h-16 w-full">
            <input type="text"
                placeholder="Search"
                onChange={search}
                value={searchValue}
            />
        </div> */}
        <GenreList />
    </main>
}
