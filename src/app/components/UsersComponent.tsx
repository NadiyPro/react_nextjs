import React from 'react';
import {userService} from "@/app/services/api.service";
import Link from "next/link";


const UsersComponent= async () => {
    let allUsers = await userService.getAllUsers();
    return (
        <div>
            {
                allUsers.map(user => <div key={user.id}><Link href={{
                        pathname: '/users/' + user.id,
                        query: {data: JSON.stringify(user)}
                    }}>name:{user.name}</Link>
                </div>)
            }
        </div>
    );
};

export default UsersComponent;