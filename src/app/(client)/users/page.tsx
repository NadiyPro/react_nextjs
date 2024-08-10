import React from 'react';
import Link from "next/link";
import {getAllUsers} from "@/app/services/api.service";

const UsersPage = async () => {

    let allUsers = await getAllUsers();

    return (
        <div>
            <ul>

                {
                    allUsers.map(value => <li key={value.id}>
                        <Link href={{pathname: '/users/' + value.id, query: {data: JSON.stringify(value)}}}>{value.username}</Link>
                    </li>)

                }
            </ul>
        </div>
    );
};

export default UsersPage;