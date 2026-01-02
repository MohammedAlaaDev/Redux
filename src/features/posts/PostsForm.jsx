import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";
import { selectAllUsers } from "../users/usersSlice";

const PostsForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const canSave = Boolean(title) && Boolean(content);

    const handleSubmit = () => {
        if (canSave) {
            dispatch(addPost({ title, content, userId }));
            setTitle('');
            setContent('');
        }
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleOptionChange = (e) => {
        setUserId(e.target.value);
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