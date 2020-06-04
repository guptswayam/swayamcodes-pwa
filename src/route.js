import signup from "./components/signup";
import homepage from "./components/homepage";

export const routes= [
    {path : "/", component: signup, name: "signup"},
    {path: "/home",component: homepage, name: "home"}
]