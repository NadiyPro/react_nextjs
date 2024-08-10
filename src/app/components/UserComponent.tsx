import React, {FC} from 'react';
import Link from "next/link";
interface IProps{
    user:IUser
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
                id: {user.id} <br/> name: {user.name} <br/> email: {user.email} <br/>
                <button><Link href={{
                    pathname: '/users/' + user.id + '/posts',
                    query: {data: JSON.stringify(user.id)}
                }}>posts detail</Link>
                </button>
        </div>
    );
};

export default UserComponent;