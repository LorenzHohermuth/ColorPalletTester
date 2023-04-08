import { redirect } from "react-router-dom";
import getProperties from "../functions/getProperties";

export default function redirectLoader() {
    const properties = getProperties()

    function getDefaultRoute() {
        let route = "/";

        properties.forEach(function (p) {
            const propertyVal = getComputedStyle(document.documentElement)
                .getPropertyValue("--" + p)
                .trim()
                .replaceAll("#", "");

            // If its the first element don't prepend "-"
            if (route === "/") {
                route += propertyVal;
            } else {
                route += "-" + propertyVal;
            }
        });
        
        route += '/'
        return route;
    }

    return redirect(getDefaultRoute());
}
