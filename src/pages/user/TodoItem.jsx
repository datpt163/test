import React from 'react'

export const TodoItem = ({user}) => {
    return (
        <tr>
          <td>{user.email}</td>
          <td>{user.name}</td>
          <td>{user.active ? 'Yes' : 'No'}</td>
          <td>{user.gender}</td>
          <td>{user.phone}</td>
        </tr>
      );
}

export default TodoItem
