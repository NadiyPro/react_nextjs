import React from 'react';
import UsersComponent from "@/app/components/UsersComponent";

const UsersPage = async ({user}) => {

    return (
        <div>
            <UsersComponent user={user}/>
        </div>
    );
};

export default UsersPage;