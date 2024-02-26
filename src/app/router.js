import { createBrowserRouter } from "react-router-dom";
import Counter from "../features/counter/Counter";
import PostsList from "../features/posts/PostsList";
import App from "../App";
import AddPostForm from "../features/posts/AddPostForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/counter',
        element: <Counter />
    },
    {
        path: '/posts',
        element: (
            <>
                <AddPostForm />
                <PostsList />
            </>
        )
    }
]);