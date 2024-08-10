import React from 'react';
import Link from "next/link";

const UserComponent = ({user}) => {
    return (
        <div>
            <div>
                id: {user.id} <br/> name: {user.name} <br/> email: {user.email} <br/>
                <button><Link href={{
                    pathname: '/users/' + user.id + '/posts',
                    query: {data: JSON.stringify(user.id)}
                }}>posts detail</Link>
                </button>
            </div>
        </div>
    );
};

export default UserComponent;