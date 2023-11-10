import { Outlet } from "react-router-dom"
import Header from "../_shared/Header/Header"

const Layout = ()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default Layout