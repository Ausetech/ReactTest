import React from 'react';

const UserCard =  ({user}) => {

    return (  
    
    <div style = {{border: '1px solid black', padding: '10px', margin: '10px'}}>

    <h3>{user.name}</h3>
    <P>Email : {user.email}</P>
    <P>Phone : {user.phone}</P>
    <P>Website : {user.website}</P>
    <P>Company name : {user.company.name}</P>


    </div>
    );
  
};

export default UserCard;