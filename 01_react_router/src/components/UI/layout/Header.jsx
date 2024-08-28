import { NavLink } from "react-router-dom"

export const Header = () => {

    const getNavLinkStyle = ({isActive}) => {
        return {
            color: isActive ? "green" : "black",
        };
    };

    return (
        <>
            <header className="section-navbar">
                <section className="top_txt">
                    <div className="header container">
                        <div className="head_txt">
                            <p>Hello, get Netflix Membership for 30 days or refund guarantee</p>
                        </div>
                        <div className="sign_in_up">
                            <NavLink to= "#">SIGN IN</NavLink>
                            <NavLink to= "#">SIGN UP</NavLink>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <div className="navbar-brand">
                        <NavLink to= "index">
                            <p>User Flix</p>
                        </NavLink>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li className="nav-item">
                                <NavLink to= "/" className={({isActive}) => 
                                    isActive ? "nav-link active": "nav-link"}>
                                    Home
                                </NavLink>
                            </li>

                            <li className="item">
                                <NavLink to= "/about" style={({isActive}) => {
                                    return {
                                        color: isActive ? "red" : "black"
                                        }
                                }}>
                                    About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to= "movie" className="nav-link" style={getNavLinkStyle}>
                                    Movies
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="contact" className={({isActive}) => 
                                    isActive ? "nav-link active" : "nav-link" }>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}