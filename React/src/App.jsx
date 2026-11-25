//Task 6: React Router

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Task6/Home'
import About from './Task6/About'
import Contact from './Task6/Contact'
import Login from './Task6/Login'
import Services from './Task6/Services'


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact">Contact</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/services">Services</Link>

      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


//Task 7

/* Task 7: Login and Protected Dashboard
Topics: Context API, useState, React Router and protected routes.
Requirements:
1. Create a login page.
2. Create a dashboard page.
3. Maintain login state.
4. Allow logged-in users to access the dashboard.
5. Redirect unauthenticated users to the login page.
6. Add a logout button.
For this beginner project, a simulated login can be used. Real authentication must be verified by a server. */

/* import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Login from './Task7/Login'
import Dashboard from './Task7/Dashboard'
import ProtectedRoute from './Task7/ProtectedRoute'
import { AuthProvider } from './Task7/AuthContext'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>

        <Link to="/login">Login</Link> |
        <Link to="/dashboard">Dashboard</Link>

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  )
}

export default App */