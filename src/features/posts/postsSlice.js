import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
    {
        id: '1',
        title: 'First Post',
        content: 'Hello! This is the first post.',
        date: sub(new Date, { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Second Post',
        content: 'Hello! This is the second post.',
        date: sub(new Date, { minutes: 5 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            // @ts-ignore
            prepare({ title, content, userId }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        },
                        date: new Date().toISOString()
                    }
                }
            }
        },
        addReaction(state, action) {
            const { postId, reaction } = action.payload;
            const usedPost = state.find((post) => post.id === postId);
            usedPost.reactions[reaction]++;
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, addReaction } = postsSlice.actions;
export default postsSlice.reducer;