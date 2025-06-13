import React, { useEffect, useState } from 'react';
import { TodoItem } from './TodoItem';
import { useApiService } from '../../api/userApiService';
import { UserSearch } from './UserSearch';
import Pagination from '../../components/Paginations/Pagination';
export const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { getUsers } = useApiService();
  const totalPages = 5;
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async (params = {}) => {
    setLoading(true);
    try {
      const data = await getUsers(params);
      setUsers(data);
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    const trimmedTerm = searchTerm.trim();  // loại bỏ khoảng trắng 2 đầu
    fetchUsers(trimmedTerm ? { username: trimmedTerm } : {}); // nếu không search thì load tất cả
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
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

      <UserSearch onSearch={handleSearch} />

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
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};
