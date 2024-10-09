import routerNames from "./routerNames";
import PageHome from "../pages/PageHome";
import PageNotFound from "../pages/PageNotFound";


const routerConfig = () => {
    const pageComponents = [
        PageHome,
        PageNotFound
    ];
    const routeKeys = Object.keys(routerNames);

    if (pageComponents.length !== routeKeys.length) {
        console.error("The number of routes and components do not match.");
        return [];
    }

    return pageComponents.map((pageComponent, index) => {
        const keyName = routeKeys[index];
        return {
            path: routerNames[keyName],
            component: pageComponent,
            id: index,
        }
    });
}

export default routerConfig;