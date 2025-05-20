import React from 'react';

const UserCard =  ({user}) => {

    return (  
    
    <div style = {{border: '1px solid black', padding: '10px', margin: '10px'}}>

    <h3>{user.name}</h3>
    <p>Email : {user.email}</p>
    <p>Phone : {user.phone}</p>
    <p>Website : {user.website}</p>
    <p>Company name : {user.company.name}</p>


    </div>
    );
  
};

export default UserCard;