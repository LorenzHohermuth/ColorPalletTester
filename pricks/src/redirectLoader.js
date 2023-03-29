import { redirect } from "react-router-dom";

export default function redirectLoader() {
    const properties = [
        "primary",
        "secondary",
        "bgPrimary",
        "bgSecondary",
        "textPrimary",
        "textSecondary",
    ];

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
        
        return route;
    }

    return redirect(getDefaultRoute());
}
