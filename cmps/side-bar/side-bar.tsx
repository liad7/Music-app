import NavBar from "./nav-bar"

function SideBar() {
  return (
    <nav className="text-white w-64">
      <div className="fixed bg-[#000] w-64 h-screen">
        <div className="flex items-center mx-6 mt-6 pb-1">
          <img className="w-9" src="https://playlist-kqq9.onrender.com/static/media/logo-pic-white.0b8c5ac6eec4a813c1c2.png" />
          <h1 className="text-3xl ml-2.5">Musicly</h1>
        </div>
        <NavBar />
      </div>
    </nav>
  )
}

export default SideBar

