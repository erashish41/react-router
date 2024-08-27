import { Outlet } from "react-router-dom";
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout = () => {
    return(
        <>
            <Header />
            <Outlet />     
             {/*- the <Outlet> component is used to render nested routes. */}
            <Footer />
        </>
    )
};

export default AppLayout;