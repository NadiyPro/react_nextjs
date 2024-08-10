import React from 'react';
import Link from "next/link";

const HeaderComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/'}>home</Link>
                </li>
                <li>
                    <Link href={'/users'}>users</Link>
                </li>
                <li>
                    <Link href={'/posts'}>posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent;