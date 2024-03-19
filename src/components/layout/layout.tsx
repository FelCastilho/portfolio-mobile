import { Header } from "../header";
import { Outlet } from "react-router-dom"

import '../layout/style.css';

export function Layout(){
    return(
        <>
            <Header/>
            <Outlet/>
        </>
    )
}