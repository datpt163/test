import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TodoItem } from './TodoItem';

export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);      

  const API_URL = 'https://run.mocky.io/v3/b7fa8cc4-3bbb-481c-9ab1-e317dfdda71d';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API_URL);
      setUsers(response.data);
    } catch (err) {
      console.error('Error fetching users:', err);
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Danh sách người dùng</h2>

      <table border="1" cellPadding="10" cellSpacing="0" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Tên</th>
            <th>Active</th>
            <th>Giới tính</th>
            <th>Số điện thoại</th>
          </tr>
        </thead>
        <tbody>
        {users.length > 0 ? (
            users.map((user, index) => (
              <TodoItem key={index} user={user} />
            ))
          ) : (
            <tr>
              <td colSpan="5" align="center">Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};