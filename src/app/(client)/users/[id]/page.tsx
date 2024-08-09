import React from 'react';
import {Params} from "next/dist/shared/lib/router/utils/route-matcher";


const UserPage = ({searchParams}: Params) => {
    let user = JSON.parse(searchParams.data);
    console.log(user);
    return (
        <div>
            {user.email}
        </div>
    );
};

export default UserPage;