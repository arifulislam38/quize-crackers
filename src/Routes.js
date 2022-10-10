import { createBrowserRouter } from "react-router-dom";
import AllTopics from "./components/All-topics/AllTopics";
import Main from "./components/Main/Main";
import Root from "./components/Root/Root";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Main></Main>
            },
            {
                path: 'topics',
                element: <AllTopics></AllTopics>
            }
        ],
    }
]);

export default routes;