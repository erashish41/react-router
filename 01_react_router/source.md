 <!-- R E A C T    R O U T E R -->
- React Router is a powerful library that enables navigation and routing in React.js applications. 
- Navigation is a critical aspect of web development, allowing users to move between different 
    views or pages within a single-page application (SPA) without reloading the entire page.

1.pages
    - Home.jsx
    - About.jsx
    - Movie.jsx
    - Contact.jsx

2.components
    - UI

    - layout
        - AppLayout.jsx
            - Header.jsx
            - Footer.jsx

- App.jsx: this is the new method to show the data on web page
 const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [  ]               // all the children component are wrap in children 
    }
 ]);
        

- In AppLayout.jsx, <Outlet /> is provided btw Header and Footer bcz to get the data 
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

- useRouteError: This hook allows you to access the current error state of the router.
- Inside of an errorElement, this hook returns anything thrown during an action, loader, or rendering.
- Bubbling: When a route does not have an errorElement, errors will bubble up through parent routes.
- If you do not provide an errorElement in your route tree to handle a given error, errors will
     bubble up and be handled by a default errorElement which will print the error message and 
    stack trace. 