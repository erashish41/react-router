import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
// by control space child component will import automatic

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/movie",
      element: <Movie />
    },
    {
      path: "/contact",
      element: <Contact />
    },

  ]);

  return <RouterProvider router={router} />
  // RouterProvider is a function and router is return to it

}

export default App;