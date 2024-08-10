import React  from 'react';
import Link from "next/link";


const UserDetailPage = ({searchParams}) => {
    let user = JSON.parse(searchParams.data);
    console.log(user);
    return (
        <div>
            <h4>user detail</h4>
            id: {user.id} <br/> name: {user.name} <br/> email: {user.email} <br/>
            <button><Link href={{
                pathname: '/users/' + user.id + '/posts',
                query: {id: user.id}
            }}>posts detail</Link>
            </button>
        </div>
    );
};

export default UserDetailPage;