import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setUser }) => {
  const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setError('');
      
      try {
        const response = await fetch('http://localhost:4000/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  if(response.status != 200){
    console.log("Статуса е грешен в  логин комп")
    throw new Error(response.message);
  }
        const data = await response.json();
        console.log("data",data)
        if(data.role == 'user'){
         throw new Error('Login failed');
        } 
        setUser(data); 
        console.log(data)
        navigate('/');
      } catch (error) {
        setError('Login failed: ' + error);
      }
    };
  
    return (
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
        <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Username</label>
                <input
                  type="username"
                  className="form-control"
                  id="username"
                  placeholder="Enter email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
  
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
  
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  };

export default Login;
