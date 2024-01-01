interface Route {
    path: string;
    component: string;
    isExact?: boolean
}

const routes: ReadonlyArray<Route> = [
    { path: "/", component: "Home" },
    { path: "/about", component: "About" },
    { path: "/contact", component: "Contact" },
    {
        path: "/dashboard",
        component: "Dashboard",
        isExact: true
    }

];


// add new route witout mutating the original array
const newRoute = { path: "/login", component: "Login" };
const newRoutes = [...routes, newRoute];

// Accessing routes by not index but by path
const path = "/dashboard";
const route = routes.find(r => r.path === path); 

const routeIndex = routes.findIndex(r => r.path === path);
