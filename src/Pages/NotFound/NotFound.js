import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/404.png'
const NotFound = () => {
    return (
        <div>
          <div>
          <Link to="/"> <button>Go Back</button></Link>
          </div>
            <img style={{width: "100%"}} src={error} alt="" />
        </div>
    );
};

export default NotFound;