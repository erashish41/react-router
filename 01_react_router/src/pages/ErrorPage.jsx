//errorElement: <ErrorPage />,  
//This errorElement is given in App.js to display the error.
// useNavigate Hook 
import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  
  const error = useRouteError();  

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate( -1 );    
  }
  // -1 is used to get back on previous page

  if(error.status === 404){
  return (
    <section className="error-section">

      <div id="error-text">
        <figure>
          <img
            src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
            alt="404 page" >
          </img>
        </figure>

        <div className="text-center">
          <p className="p-a">The page you are looking could not be found</p>
          <p className="p-b"> ... Back to previous page</p>
        </div>
      </div>

      <button type="btn" onClick={handleGoBack}> Go Back </button>

      <NavLink to="/" className="btn">Go back to Home Page</NavLink>
    </section>
  );
};
  return <h1>404 error page</h1>
}