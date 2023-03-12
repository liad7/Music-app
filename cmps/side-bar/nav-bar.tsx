import { HomeIcon } from "../../svg/icon-lib"

function NavBar() {
    return (
        <ul>
            <li>
                <a href="">
                    <HomeIcon />
                    <span>Home</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Search</span>
                </a>
            </li>
            <li>
                <a href="">
                    <span>Your Library</span>
                </a>
            </li>
        </ul>
    )
}

export default NavBar