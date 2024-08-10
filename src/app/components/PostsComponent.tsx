import React from 'react';
import {postService} from "@/app/services/api.service";

const PostsComponent = async () => {
    let allPosts =  await postService.getAllPosts()
    return (
        <div>
            {
                allPosts.map(post => <div key={post.id}>{post.id}</div>)
            }
        </div>
    );
}

export default PostsComponent;