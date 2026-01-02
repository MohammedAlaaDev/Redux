import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ post }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find((user) => user.id === post.userId)
    return (
        <span>By {author ? author.name : "Unknown Author"}</span>
    )
}

export default PostAuthor