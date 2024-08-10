import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import {commentService} from "@/app/services/api.service";
import Link from "next/link";

interface IProps{
    comment:IComment
}
const PostPageId = async ({searchParams}: Params) => {
    let comment = await commentService.getById(searchParams.id);
    console.log(comment);
    return (
        <div>
            <h4>comment on the selected post </h4>
            {comment.map(value => <div key={value.id}>
                <p>postId:{value.postId} <br/> id:{value.id} body:{value.body} <br/> email:{value.email}</p>
                <button><Link href={{
                    pathname: '/'
                }}>back</Link></button>
            </div>)}
        </div>
    );
};

export default PostPageId;