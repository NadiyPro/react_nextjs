import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'Posts'
}

type Props = { children: React.ReactNode }

const PostsLayout= ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostsLayout;