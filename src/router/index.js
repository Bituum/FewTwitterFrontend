import MainEnteringWindow from "@/components/Entering/MainEnteringWindow";
import Feed from "@/components/Feed/Feed";
import LK from "@/components/UserPage/LK"
import Comment from "@/components/Comment/Comment"

export const routes = [
    {path: "/", component: MainEnteringWindow, name: "index"},
    {path: "/feed", component: Feed, name: "feed"},
    {path: "/lk", component: LK, name: "lk"},
    {path: "/comment", component: Comment, name: "cmt"}
]