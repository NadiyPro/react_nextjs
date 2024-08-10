import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";
import UserComponent from "@/app/components/UserComponent";


const UserPageId = ({searchParams}: Params) => {
    let user = JSON.parse(searchParams.data);
    console.log(user);
    return (
        <div>
            <UserComponent key={user.id} user={user}/>
        </div>
    );
};

export default UserPageId;