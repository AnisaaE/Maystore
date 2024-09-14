import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContex';
import {
  validateEmail,
  validatePassword,
  validateMatchingPasswords,
  validateUsername,
} from '../../utils/validation';
const Register = () => {
  const navigate = useNavigate();
  const {onSubmitRegister, verifyEmail } = useContext(AuthContext)
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateUsername(username)) {
      setError('Потребителско име трябва да съдържа поне 3 символа');
      return;
    }

    if (!validateEmail(email)) {
      setError('Некоректен имейл адрес');
      return;
    }

    if (!validatePassword(password)) {
      setError('Паролата трябва да съдържа поне 5 символа');
      return;
    }

    if (!validateMatchingPasswords(password, repeatPassword)) {
      setError('Паролите не съвпадат');
      return;
    }

    try {
      await onSubmitRegister({ username, email, password });
      setIsVerified(true);
      alert('Проверете имейл адреса си за потвърждение');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await verifyEmail({ email, verificationCode: verificationCode });
      alert('Имейлът е потвърден успешно!');
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container pt-5 mb-4" style={{ height: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-3">{!isVerified ? 'Регистриране' : 'Потвърди имейл'}</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          {!isVerified ? (<>
            <form onSubmit={handleRegister} className="p-4 border rounded " style={{ backgroundColor: 'rgba(101, 6, 165, 0.128)', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)' }}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Потребителско име</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Имейл</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Парола</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="repeatPassword" className="form-label">Повторете паролата</label>
                <input
                  type="password"
                  className="form-control"
                  id="repeatPassword"
                  placeholder="Repeat password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Регистрирай се</button>
            </form>
            <div>Вече имате създаден акаунт? <Link to="/login">Влез тук</Link></div></>
          ) : (
            <form onSubmit={handleVerify} className="p-4 border rounded bg-light">
              <div className="mb-3">
                <label htmlFor="verificationCode" className="form-label">Код за потвърждение</label>
                <input
                  type="text"
                  className="form-control"
                  id="verificationCode"
                  placeholder="Enter verification code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-success w-100">Потвърди</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
