 <!-- R E A C T    R O U T E R -->
- React Router is a powerful library that enables navigation and routing in React.js applications. 
- Navigation is a critical aspect of web development, allowing users to move between different 
    views or pages within a single-page application (SPA) without reloading the entire page.

1.pages
    - Home.jsx
    - About.jsx
    - Movie.jsx
    - Contact.jsx
    - ErrorPage.jsx

2.components
    - UI

    - layout
        - AppLayout.jsx
        - Header.jsx
        - Footer.jsx
        - Loading.jsx

3.api
    -GetAPIData.jsx

-App.jsx: this is the new method to show the data on web page
 const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [  ]               // all the children component are wrap in children 
    }
 ]);

-createBrowserRouter
- First, you create a router using createBrowserRouter. The router object holds all the routes 
    and their associated components.
- It replaces the older method of using BrowserRouter with nested Route components. 
- This is the recommended router for all React Router web projects. It uses the DOM History
     API to update the URL and manage the history stack.
- It also enables the v6.4 data APIs like loaders, actions, fetchers and more.
- The RouterProvider component is used to provide the router to your application. It takes the
     router object created by createBrowserRouter as a prop.
- RouterProvider is then used to provide this router object to your React component tree.
- It wraps your entire app (or the part of your app that needs routing), enabling the routing 
    system to work.
- Inside the RouterProvider, the router takes care of matching the current URL to the 
    appropriate route and rendering the corresponding component.
- RouterProvider is the core component that connects your routing configuration to your 
    React application.

-In AppLayout.jsx, 
- <Outlet /> is provided btw Header and Footer bcz to get the data 
- the <Outlet> component is used to render nested routes. 
- It's a placeholder that tells React Router where to render the child routes within a 
    parent route component.
- React Outlet:  is a component provided by React Router that serves as a placeholder for child 
    routes within a parent route. 
- It allows for the nesting of routes, enabling developers to create complex navigation structures 
    in their applications.

-Navbar
- A navbar is a crucial element of any website, as it provides users with a means to navigate 
    through different pages and sections.
- It serves as a navigation aid, providing links or buttons that allow users to access 
    different sections or pages within the website.
- React allows for the creation of reusable and modular components, making it an excellent 
    choice for building complex UIs like navbars.
- Accessibility should be a top priority when creating a navbar, ensuring that all users, 
    including those with disabilities, can effectively navigate your website.

-NavLink
- A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", 
    or "transitioning". This is useful in a few different scenarios

-Absolute Paths vs. Relative Paths
- Absolute Paths ("/about"): Always take you to the same place, starting from the root of 
    your application.
- Relative Paths ("about"): Take you to a path relative to your current location, which might 
    not always be what you intend.

-useRouteError Hook
- This hook allows you to access the current error state of the router.
- Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering.
- Bubbling: When a route does not have an errorElement, errors will bubble up through parent routes.
- If you do not provide an errorElement in your route tree to handle a given error, errors will
     bubble up and be handled by a default errorElement which will print the error message and 
    stack trace. 

-useNavigate Hook
- This hook returns a function that lets you navigate programmatically.
- To navigate back to previous pages we will use the React useNavigation Hook. 
- We will pass a numerical value to navigation and switch back to the previous page inside 
    the navigate, instance of the useNavigate hook, as a prop and call it when the defined 
    button is clicked.
- It's a replacement for the useHistory and useLocation hooks in previous versions of React Router

-API Fetch
- a. Fetch function is made getMovieData
- b. passing the function name as the value of loader property in that page route 
        {
            path: "/movie",
            element: <Movie />,
            loader: getMovieData,
          },
- c. get the data of API by using the useLoaderData();
- d. create Card.jsx in UI 

-useNavigation Hook
- This hook tells you everything you need to know about a page navigation to build pending 
    navigation indicators and optimistic UI on data mutations. 
- Things like:
    -Global loading indicators
    -Disabling forms while a mutation is happening
    -Adding busy indicators to submit buttons
    -Optimistically showing a new record while it's being created on the server
    -Optimistically showing the new state of a record while it's being updated

- navigation.state
a. idle - There is no navigation pending.
b. submitting - A route action is being called due to a form submission using POST, PUT, PATCH,
     or DELETE
c. loading - The loaders for the next routes are being called to render the next page

- Normal navigations and GET form submissions transition through these states:
                    idle → loading → idle
- Form submissions with POST, PUT, PATCH, or DELETE transition through these states:
                    idle → submitting → loading → idle

- navigation steps
1. go to AppLayout.jsx
 - define loading state in it 
                            const navigation = useNavigation();
                            console.log(navigation);

                                if(navigation.state === "loading"){
                                return <Loading />
                            }
- now make Loading.jsx file in layout component, so that to get the data from it