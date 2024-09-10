import React, { useState, useEffect } from 'react';

const AdminUserList = ({user}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log(user)
        const response = await fetch('http://localhost:4000/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `Bearer ${user.accessToken}`, // Увери се, че accessToken е зададен коректно
          },
        });

        const data = await response.json();
        console.log("",data);
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const promoteToAdmin = async (userId) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${userId}/promote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to promote user');
      }

      // Update the user's role in the state after a successful promotion
      setUsers(users.map(user => 
        user._id === userId ? { ...user, role: 'admin' } : user
      ));
    } catch (error) {
      console.error('Error promoting user:', error);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user._id}>
            {user.username} - {user.role}
            {user.role !== 'superuser' && (
              <button onClick={() => promoteToAdmin(user._id)}>Promote to Admin</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUserList;
