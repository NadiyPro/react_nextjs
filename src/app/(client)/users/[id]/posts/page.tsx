import React from 'react';
import {postService} from "@/app/services/api.service";
import Link from "next/link";

const UsersPostPage = async ({searchParams}) => {
    console.log(searchParams);
    let post = await postService.getById(searchParams.id)
    console.log(post);

    return (
        <div>
            <h4>posts of the selected user</h4>
            {post.map(value => <div key={value.id}><p>userId:{value.userId} id: {value.id} <br/> title:{value.title}</p>
                <button><Link href={{
                    pathname: '/posts/' + value.id + '/comments',
                    query: {id: value.id}
                }}>comments detail</Link></button>
            </div>)}
        </div>
    )
};
export default UsersPostPage;