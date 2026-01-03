import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const PostsForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('idle');

    const handleTitleChange = e => setTitle(e.target.value);
    const handleContentChange = e => setContent(e.target.value);
    // @ts-ignore
    const handleOptionChange = e => setUserId(Number(e.target.value));

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

    const handleSubmit = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                // @ts-ignore
                dispatch(addNewPost({ title, body: content, userId })).unwrap();
                setTitle('');
                setContent('');
                setUserId('');
            } catch (err) {
                console.error('Failed to save the post: ', err);
            } finally {
                setAddRequestStatus('idle');
            }
        }
    }

    const userSelectUI = users.map(user => (
        <option
            key={user.id}
            value={user.id}
        >
            {user.name}
        </option>
    ))

    return (
        <section>
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={handleTitleChange}
                />
                <label htmlFor="selectUsers">Author:</label>
                <select onChange={handleOptionChange}>
                    <option />
                    {userSelectUI}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={handleContentChange}
                />
                <button
                    type="button"
                    disabled={!canSave}
                    onClick={() => {
                        handleSubmit();
                    }}
                >
                    Save Post
                </button>
            </form>
        </section>
    )
}

export default PostsForm