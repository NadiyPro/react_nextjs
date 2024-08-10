import React, {FC} from 'react';
interface IProps{
    post:IPost
}
const PostComponent:FC<IProps>= ({post}) => {

    return (
        <div>
           id: {post.id} title:{post.title} <br/> {post.body} <br/>
        </div>
    );
};

export default PostComponent;