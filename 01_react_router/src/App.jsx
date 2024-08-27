import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
// by control space child component will import automatic

const App = () => {

  // // New way of React-Router
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />
  //   },
  //   {
  //     path: "/about",
  //     element: <About />
  //   },
  //   {
  //     path: "/movie",
  //     element: <Movie />
  //   },
  //   {
  //     path: "/contact",
  //     element: <Contact />
  //   },
  // ]);


  // Traditional (old) way of React-Router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/movie" element = {<Movie />} />
        <Route path="/contact" element = {<Contact />} />
      </Route>
    )
  )



  return <RouterProvider router={router} />
  // RouterProvider is a function and router is return to it

}

export default App;