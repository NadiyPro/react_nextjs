import React from 'react';
import {postService} from "@/app/services/api.service";

interface Params {
    searchParams: {
        id:string
    }
}

const Page = async ({searchParams}: Params) => {
    console.log(searchParams);
    let post = await postService.getById(searchParams.id)
    console.log(post);

    return (
        <div>
            {post.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    )};
export default Page;