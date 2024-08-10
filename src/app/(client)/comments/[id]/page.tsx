import React from 'react';
import CommentsPage from "@/app/(client)/comments/page";import {postService} from "@/app/services/api.service";
interface Params {
    searchParams: {
        id:string
    }
}
const CommentPage = async ({searchParams}: Params) => {
    console.log(searchParams);
    let comment = await postService.getById(+JSON.parse(searchParams.id))
    console.log(comment);
    return (
        <div>

        </div>
    );
};

export default CommentPage;