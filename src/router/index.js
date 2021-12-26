import MainEnteringWindow from "@/components/Entering/MainEnteringWindow";
import Feed from "@/components/Feed/Feed";

export const routes = [
    {path: "/", component: MainEnteringWindow, name: "index"},
    {path: "/feed", component: Feed, name: "feed"}
]