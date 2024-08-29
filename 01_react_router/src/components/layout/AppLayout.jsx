import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

const AppLayout = () => {

    const navigation = useNavigation();
    console.log(navigation);
    // console.log will show --- [{state: 'idle', location: undefined, formMethod: undefined, formAction: undefined, formEncType: undefined, …}]
    

    if(navigation.state === "loading"){
        return <Loading />
    }

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