import AddPostForm from "components/pages/posts/AddPostForm";
import PostsList from "components/pages/posts/PostsList";

const postRoute = {
    path: '/posts',
    element: (
        <>
            <AddPostForm />
            <PostsList />
        </>
    )
}

export default postRoute