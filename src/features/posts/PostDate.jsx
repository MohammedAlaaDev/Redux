import { parseISO, formatDistanceToNow } from "date-fns"

const PostDate = ({ timeCreated }) => {
    let timeAgo = '';

    if (timeCreated) {
        const currentDateCreated = parseISO(timeCreated);
        const distance = formatDistanceToNow(currentDateCreated);
        timeAgo = `${distance} ago`;
    }

    return (
        <span>
            &nbsp;<i>({timeAgo})</i>
        </span>
    )
}

export default PostDate