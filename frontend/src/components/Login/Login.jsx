import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContex';

const Login = () => {
const {onSubmitLogin} = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    try {
      const response = await onSubmitLogin({ username, password });
      const data = await response.json();
      alert('Login successful!');
    } catch (error) {
      setError(error.message || 'An unexpected error occurred');
    }
  };

  return (
    <div className="container mt-5 justify-content-center align-items-center" style={{ height: '80vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow-lg border-0 mt-5">
            <div className="card-body p-4 ">
              <h2 className="text-center mb-4">Login</h2>
              {error && <div className="alert alert-danger text-center">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3 justify-content-center align-items-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Login</button>
              </form>
              <div className="text-center mt-3">
                <span>Нямате акаунт? </span>
                <Link to="/register" className="text-decoration-none">Регистрирай се тук</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
