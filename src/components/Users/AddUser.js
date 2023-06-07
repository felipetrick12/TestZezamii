import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import UsersList from './UsersList';
import { v4 as uuidv4 } from 'uuid';

let usersList = [
  {
    id: uuidv4(),
    name: 'Robin',
    age: 12,
  },
  {
    id: uuidv4(),
    name: 'Dennis',
    age: 22,
  },
];

const AddUser = () => {
  const [List, setList] = useState(usersList);
  const [data, setData] = useState({
    name: '',
    age: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (data.name.length < 3) {
      alert('Please enter a valid name');
    } else if (data.age === 0) {
      alert('Please enter a valid age');
    } else {
      const FinalData = {
        id: uuidv4(),
        ...data,
      };
      setList([...List, FinalData]);
      console.log('List', List);
    }
  };

  const onChange = (e, property) => {
    const text = e.target.value;
    setData({
      ...data,
      [property]: text,
    });
  };

  return (
    <div>
      <Card className={classes.card}>
        <form onSubmit={onSubmit} className={classes.form}>
          <label htmlFor="username"> Username </label>{' '}
          <input
            id="username"
            type="text"
            value={data.name}
            onChange={(e) => onChange(e, 'name')}
          />
          <label htmlFor="age"> Age(Years) </label>{' '}
          <input
            id="age"
            type="number"
            value={data.age}
            onChange={(e) => onChange(e, 'age')}
          />{' '}
          <Button type="submit" className={classes.submit}>
            Add User{' '}
          </Button>{' '}
        </form>{' '}
      </Card>{' '}
      {List.length < 0 ? null : <UsersList users={List} />}
    </div>
  );
};

export default AddUser;
