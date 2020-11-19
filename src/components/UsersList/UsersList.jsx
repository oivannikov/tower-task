import React from 'react';

import '../UsersList/UsersList.scss'

export function UsersList({ users }) {
  return (
    <ul className="users">
    { users.map(user => (
      <li className="user">
        {user.name}
      </li>
    ))}
    </ul>
  );
}
