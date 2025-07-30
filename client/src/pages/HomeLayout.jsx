import { Outlet } from "react-router-dom"

const HomeLayout = () => {
  return <div>
    <nav>Sample Navbar</nav>
    <Outlet />
  </div>
}

export default HomeLayout