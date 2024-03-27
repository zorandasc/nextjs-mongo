import React from 'react';


const UsersList = ({users}) => {
    return (
        <ul>
            {users.map(({_id,name, age})=><li key={_id}>Name: {name}, Age: {age}, Id: {_id}</li>)}
        </ul>
    );
};

export default UsersList;