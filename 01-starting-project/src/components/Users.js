import { useState } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'кандай Раяна' },
  { id: 'u2', name: 'жакшыбы' },
  { id: 'u3', name: 'жок болуп кеттин го 😅😅😅' },
];

const Users = () => {
  const [showUsers, setShowUsers] = useState(false);

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? 'мени бас' : 'кайра бас'} 
      </button>
      {showUsers && usersList}
    </div>
  );
};

export default Users;
