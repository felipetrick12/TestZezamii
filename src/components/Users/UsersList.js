import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  const userlist = props.users;
  return (
    <Card className={classes.users}>
      <ul>
        {userlist.map((user) => (
          <li key={user.id}>{user.name + ' ' + user.age}</li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
