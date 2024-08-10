import React, {FC} from 'react';
interface IProps{
    comment:IComment
}
const CommentComponent:FC<IProps> = ({comment}) => {
    return (
        <div>
            id: {comment.id} {comment.postId} {comment.body}
        </div>
    );
};

export default CommentComponent;