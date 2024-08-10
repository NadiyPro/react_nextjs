import React from 'react';
import PostPageId from "@/app/(client)/posts/[id]/comments/page";
interface IProps{
    comment:IComment
}
const UserPostPageId = () => {
    return (
        <div>
            <PostPageId/>
        </div>
    );
};

export default UserPostPageId;