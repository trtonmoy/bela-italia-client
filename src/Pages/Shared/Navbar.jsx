import React, { useContext, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { FaBars } from "react-icons/fa";
import { HiX, HiMenuAlt2 } from "react-icons/hi";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import { Link, NavLink } from "react-router-dom";
import photo from "../../../public/bella-logo-6D39E2FA2C-seeklogo.com.svg";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, setLoading, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    setLoading(true);
    logOut();
  };

  return (
    <div className="bg-purple-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <FcPodiumWithSpeaker className="h-6 w-6 text-purple-500" />
          <span className="ml-2 text-2xl font-bold tracking-wide text-purple-900">
            Bella Italia
          </span>
          <div className="w-10 mx-2 rounded-full">
            <img src={photo} />
          </div>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center text-xl hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Log In
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Register
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <h6 id="userName" className="font-bold text-purple-800">
                  {user.displayName}
                </h6>
              </li>
              <li>
                <div className="w-10">
                  <img
                    id="userPhoto"
                    className="rounded-full"
                    src={user.photoURL}
                    alt=""
                  />
                  <Tooltip
                    anchorSelect="#userPhoto"
                    content={user.displayName}
                  ></Tooltip>
                </div>
              </li>
            </>
          )}
          <li>
            {user ? (
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <button onClick={handleLogOut}>Logout</button>
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                <button>Login</button>
              </NavLink>
            )}
          </li>
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <HiMenuAlt2 className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <FcPodiumWithSpeaker className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Bella Italia
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <HiX className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/login"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Register
                      </Link>
                    </li>
                    <li>
                      {user ? (
                        <NavLink
                          to="/register"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <button onClick={handleLogOut}>Logout</button>
                        </NavLink>
                      ) : (
                        <NavLink
                          to="/login"
                          className={({ isActive }) =>
                            isActive ? "active" : "default"
                          }
                        >
                          <button>Login</button>
                        </NavLink>
                      )}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
