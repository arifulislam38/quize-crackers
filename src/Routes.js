import { createBrowserRouter } from "react-router-dom";
import AllTopics from "./components/All-topics/AllTopics";
import Main from "./components/Main/Main";
import Root from "./components/Root/Root";
import Topic from "./components/Topic/Topic";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
                element: <Main></Main>
            },
            {
                path: 'topics',
                element: <AllTopics></AllTopics>
            },
            {
                path: '/topics/:id',
                loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
                element: <Topic></Topic>,
            }
        ],
    }
]);

export default routes;