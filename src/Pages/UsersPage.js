import UserCard from './UserCard';
import React, {use, useEffect, useState} from 'react';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect (()) =>
    fetch ('https://jsonplaceholder.typicode.com/users')

    .then (res => res.json())
    .then (data => setUsers(data))

    .catch (err => console.error("Error while fetching data", err));
} ); 

return (
    <div> 
        <UserCard = {user.id} user = {user} />      
        </div>
    
);

export default UsersPage;

    