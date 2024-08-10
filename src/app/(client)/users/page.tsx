import React from 'react';
import Link from "next/link";
import {userService} from "@/app/services/api.service";

const AllUsersPage = async () => {
    let allUsers = await userService.getAllUsers();
    return (
        <div>
            <h4>users all</h4>
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

export default AllUsersPage;