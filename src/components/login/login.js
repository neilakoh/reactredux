import React from 'react';
import {Link} from 'react-router';

class Login extends React.Component {
  render() {
    return (
      <div className="loginWrapper">
        <h1>WELCOME TO LOGIN PAGE</h1>
        <Link to="/" className="login">Back to Main Page</Link>
      </div>
    );
  }
}

export default Login;
