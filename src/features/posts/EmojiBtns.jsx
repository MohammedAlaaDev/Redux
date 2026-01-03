import { useDispatch } from "react-redux";
import { addReaction } from './postsSlice';

const emojiObject = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const EmojiBtns = ({ post }) => {

    const dispatch = useDispatch();
    const emojiUI = Object.entries(emojiObject).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() => {
                    dispatch(addReaction({ postId: post.id, reaction: name }));
                }}
            >
                {emoji} {post.reactions[name]}
            </button>
        )
    })

    return (
        <div>
            {emojiUI}
        </div>
    )
}

export default EmojiBtns