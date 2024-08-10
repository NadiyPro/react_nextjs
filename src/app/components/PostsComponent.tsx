import React from 'react';
import {postService} from "@/app/services/api.service";
import Link from "next/link";
import PostComponent from "@/app/components/PostComponent";

const PostsComponent = async () => {
    let allPosts =  await postService.getAllPosts();
    return (
        <div>
            {
                allPosts.map(post => <div key={post.id}> <PostComponent key={post.id} post={post}/>
                    <button><Link href={{
                        pathname: '/posts/' + post.userId + '/comments',
                        query: {data: post.userId}
                    }}>comments</Link></button>
                </div>)
            }
        </div>
    );
};

export default PostsComponent;