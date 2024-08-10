import React from 'react';
import {commentService} from "@/app/services/api.service";
import Link from "next/link";

const CommentsPage = async () => {
    let allComments = await commentService.getAllPosts();
    return (
        <div>
            <h4>comments all</h4>
            {
                allComments.map(comment => <div key={comment.id}>
                        <p>postId:{comment.postId} <br/> id:{comment.id} body:{comment.body} <br/> email:{comment.email}</p>
                        <button><Link href={{
                            pathname: '/'
                        }}>back</Link></button>
                    </div>
                )
            }
        </div>
    )
        ;
};

export default CommentsPage;