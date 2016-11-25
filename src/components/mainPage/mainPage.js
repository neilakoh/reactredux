import React from 'react';
import {Link} from 'react-router';

class MainPage extends React.Component {
  render() {
    return (
      <div className="mainPageWrapper">
        <h1>MAIN TEMPLATE</h1>
        <Link to="/login" className="login">Login</Link>
      </div>
    );
  }
}

export default MainPage;
