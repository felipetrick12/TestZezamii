import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
  const userlist = props.users;
  return (
    <Card className={classes.users}>
      <li>
        {userlist.map((user) => (
          <ul>
            <h1>{user.name + user.age}</h1>
          </ul>
        ))}
      </li>
    </Card>
  );
};

export default UsersList;
