import Auth from "@/components/screens/Auth/Auth";
import { IRoute } from "./navigation.types";
import Home from "@/components/screens/Home/Home";

export const routes: IRoute[] = [
    {
        name: "Auth",
        component: Auth
    },
    {
        name: "Home",
        component: Home
    }
]