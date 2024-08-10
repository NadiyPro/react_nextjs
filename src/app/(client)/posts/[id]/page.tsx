import React from 'react';
import {postService} from "@/app/services/api.service";

interface Params {
    searchParams: {
       data:string;
    }
}

const PostPage = async ({searchParams}: Params) => {
    console.log(searchParams);
    let post = await postService.getById(+searchParams.data);
    console.log(post);

    return (
        <div>
            {post.map(value => <div key={}>{value.title}</div>)}
        </div>
    )};
export default PostPage;