import { createBrowserRouter } from "react-router-dom";

import APP from "../App";
import REGISTER from "../components/Register"
import LOGIN from "../components/Login"
import SETTING from "../components/Setting"
import ADMIN from "../admin/Admin"
import TEST from "../test/Test"

const router = createBrowserRouter([
    {
        path: "/pj-stress-counseling-chatbot",
        element: <APP/>
    },
    {
        path: "/pj-stress-counseling-chatbot/register",
        element: <REGISTER/>
    },
    {
        path: "/pj-stress-counseling-chatbot/login",
        element: <LOGIN/>
    },
    {
        path: "/pj-stress-counseling-chatbot/setting",
        element: <SETTING/>
    },
    {
        path: "/pj-stress-counseling-chatbot/admin",
        element: <ADMIN/>
    },
    {
        path: "/pj-stress-counseling-chatbot/test",
        element: <TEST/>
    }
])

export default router;