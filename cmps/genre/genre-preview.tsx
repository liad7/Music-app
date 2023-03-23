import Link from "next/link"

type Props = {
    genre: {
        id: string,
        name: string,
        imgUrl: string,
    }
}

export function GenrePreview({ genre }: Props) {
    return (
        <Link href={`search/${genre.id}`} className="rounded-lg">
            <img src={genre.imgUrl} alt="" className="rounded-lg w-full h-full"/>
        </Link>
    )
}