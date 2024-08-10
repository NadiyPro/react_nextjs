import React from 'react';
import {commentsService, postService} from "@/app/services/api.service";
import Link from "next/link";
import CommentComponent from "@/app/components/CommentComponent";

const CommentsComponent = async () => {
    let allComments =  await commentsService.getAll();

    return (
        <div>
            {
                allComments.map(comment => <div key={comment.id}> <CommentComponent key={comment.id} comment={comment}/>
                    <button><Link href={{
                        pathname: '/'
                    }}>back</Link></button>
                </div>)
            }
        </div>
    );
};

export default CommentsComponent;