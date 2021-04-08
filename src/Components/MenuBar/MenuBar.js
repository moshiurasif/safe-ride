import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import './MenuBar.css';

const MenuBar = () => {
	const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          style={{ backgroundColor: "#7ac8ff" }}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <Link className="navbar-brand" to="/home">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4_3BUtrQiW_TpVzXInPN3_uJpFSv0-tW53A&usqp=CAU"
                className="img-fluid"
                alt="Logo"
                border="0"
              ></img>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    <span>Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/destination">
                    <span>Destination</span>
                  </Link>
                </li>
                <li className="nav-item login-btn">
                  <Link className="nav-link" to="/login">
                    <span>Login</span>
                  </Link>
                </li>
              </ul>

              <form className="d-flex">
                <Link className="navbar-brand" to="/home">
                  {/* <h3>{loggedInInfo?.name}</h3> */}
                  <h3 className="show-user">{loggedInUser.name}</h3>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default MenuBar;