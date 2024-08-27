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

- App.jsx: this is the method to show the data on web page
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