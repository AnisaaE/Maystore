import React from 'react'
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Admin from './pages/Admin/Admin'
import Login from './components/Login/Login';
function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <>
        <NavBar />
        <Admin user={user} />
       </>
      )}
    </>
  )
}

export default App