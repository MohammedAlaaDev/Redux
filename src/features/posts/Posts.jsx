import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";
import EmojiBtns from "./EmojiBtns";

const Posts = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor post={post} />
                <PostDate timeCreated={post.date} />
                <EmojiBtns post={post} />
            </p>
        </article>
    ));

    return (
        <section>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}

export default Posts