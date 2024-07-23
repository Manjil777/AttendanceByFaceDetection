// import React, { useState } from 'react';
// import './Login.css';
// import loginVideo from '../../Assets/video1.mp4'; // Replace with your video path

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Replace this with your actual fetch logic to your backend
//       const response = await fetch('/api/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         // Successful login - handle redirect, state updates, etc.
//         console.log('Login Successful!');
//       } else {
//         const data = await response.json();
//         setError(data.message || 'An error occurred during login.');
//       }
//     } catch (error) {
//       setError('Network error. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-content">
//         <div className="login-video">
//           <video autoPlay muted loop>
//             <source src={loginVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//         <div className="login-form">
//           <h2>Welcome Back</h2>
//           <p>Log in to access your account.</p>
//           {error && <div className="error-message">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 id="username"
//                 placeholder="Enter your username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="login-btn" disabled={isLoading}>
//               {isLoading ? 'Logging in...' : 'Log in'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css';
import loginVideo from '../../Assets/video1.mp4'; 

const Login = ({ onLogin }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simulated authentication
    if (username === 'admin' && password === '123') {
      onLogin('admin');
      navigate('/admin');
    } else if (username === 'teacher' && password === '123') {
      onLogin('teacher');
      navigate('/teacher');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-video">
          <video autoPlay muted loop>
            <source src={loginVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="login-form">
          <h2>Welcome Back</h2>
          <p>Log in to access your account.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-btn">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;