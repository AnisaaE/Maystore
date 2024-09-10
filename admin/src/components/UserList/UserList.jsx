import React, { useState, useEffect } from 'react';

const AdminUserList = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:4000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `Bearer ${user.accessToken}`, 
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('You do not have access to this page.');
      }
    };

    fetchUsers();
  }, [user.accessToken]);

  const handleUserRoleChange = async (userId, currentRole) => {
    try {
      const isPromote = currentRole !== 'admin';
      const response = await fetch(`http://localhost:4000/users/${userId}/${isPromote ? 'promote' : 'revoke'}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': `Bearer ${user.accessToken}`, 
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to ${isPromote ? 'promote' : 'revoke'} user`);
      }

      setUsers(users.map(user => 
        user._id === userId ? { ...user, role: isPromote ? 'admin' : 'user' } : user
      ));
    } catch (error) {
      console.error(`Error ${isPromote ? 'promoting' : 'revoking'} user:`, error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User List</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {users.map(userC => (
              <li key={userC._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{userC.username}</strong> - <span className="text-muted">{userC.role}</span>
                </div>
                {userC.role !== 'superuser' && (
                  <button 
                    className={`btn btn-${userC.role === 'admin' ? 'danger' : 'primary'} btn-sm`}
                    onClick={() => handleUserRoleChange(userC._id, userC.role)}
                  >
                    {userC.role === 'admin' ? 'Revoke Admin Rights' : 'Promote to Admin'}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminUserList;
