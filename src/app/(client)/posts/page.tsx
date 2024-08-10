import React from 'react';
import {postService} from "@/app/services/api.service";
import Link from "next/link";

const AllPostsPage = async () => {
    let allPosts =  await postService.getAllPosts();
    return (
        <div>
            <h4>posts all</h4>
            {
                allPosts.map(post => <div key={post.id}>
                    <p>userId:{post.userId} id: {post.id} <br/> title:{post.title}</p>
                    <button><Link href={{
                        pathname: '/posts/' + post.id + '/comments',
                        query: {id: post.id}
                    }}>comments detail</Link></button>
                </div>)
            }
        </div>
    )
};

export default AllPostsPage;