import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";
import EmojiBtns from "./EmojiBtns";

const PostsExcerpt = ({ post }) => {
    return (
        <article>
            <h3>{post.title}</h3>
            <p>{post.body.substring(0, 100)}</p>
            <p className="postCredit">
                <PostAuthor post={post} />
                <PostDate timeCreated={post.date} />
            </p>
            <EmojiBtns post={post} />
        </article>
    )
}

export default PostsExcerpt