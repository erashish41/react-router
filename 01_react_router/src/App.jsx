import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Movie } from "./pages/Movie";
import AppLayout from "./components/UI/layout/AppLayout";
// by control space child component will import automatic

const App = () => {

  // // Traditional (old) way of React-Router
  // const router = createBrowserRouter(
  //   createRoutesFromElements(               // createRoutesFromElements is helper function
  //     <Route>
  //       <Route path="/" element = {<Home />} />
  //       <Route path="/about" element = {<About />} />
  //       <Route path="/movie" element = {<Movie />} />
  //       <Route path="/contact" element = {<Contact />} />
  //     </Route>
  //   )
  // )

  // New way of React-Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [                 // all the children component are wrap in children 
        
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
        
      ]
    }
  ]);






  return <RouterProvider router={router} />
  // RouterProvider is a function and router is return to it

}

export default App;