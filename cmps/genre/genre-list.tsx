'use client'
import { utilService } from "../../services/util.service"
import { GenrePreview } from "./genre-preview"

export function GenreList() {
    return (
        <section className="pt-16">
            <h1 className="text-white text-3xl font-bold mb-5">Browse all</h1>
            <div className="genre-list">
                {genres.map(genre => <GenrePreview key={genre.id} genre={genre} />)}
            </div>
        </section>
    )
}
const genres = [
    {
        id: utilService.makeId(),
        name: 'pop',
        imgUrl: 'https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Pop_vwx3vt.png',
    },
    {
        id: utilService.makeId(),
        name: 'latin',
        imgUrl: 'https://res.cloudinary.com/damrhms1q/image/upload/v1674723860/Latin_ng4wub.png',
    },
    {
        id: utilService.makeId(),
        name: 'hip-hop',
        imgUrl: 'https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Hip-Hop_o8kiea.png',
    },
    {
        id: utilService.makeId(),
        name: 'made for you',
        imgUrl: 'https://res.cloudinary.com/damrhms1q/image/upload/v1674723847/Made_For_You_i1fiyc.png',
    },
    {
        id: utilService.makeId(),
        name: 'rock',
        imgUrl: 'https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/Rock_anpilw.png',
    },
    {
        id: utilService.makeId(),
        name: 'new releases',
        imgUrl: '	https://res.cloudinary.com/damrhms1q/image/upload/v1674723861/New_releases_vhuzn0.png',
    },
]