import React, { useState } from 'react';

export const UserSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Tìm kiếm theo tên..."
        style={{ padding: '8px', width: '300px' }}
      />
      <button type="submit" style={{ padding: '8px 16px', marginLeft: '10px' }}>
        Tìm kiếm
      </button>
    </form>
  );
};

export default UserSearch
