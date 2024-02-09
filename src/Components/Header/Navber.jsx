import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast("Logout Succesfully");
      })
      .catch();
  };
  const navber = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="bg-base-100">
      <div className="navbar  w-10/12 mx-auto">
        <div className=" navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navber}
            </ul>
          </div>

          <img
            className="w-20 h-20 rounded-full"
            src="https://img.freepik.com/free-photo/female-business-executive-giving-speech_107420-63794.jpg?w=740&t=st=1707454761~exp=1707455361~hmac=9af43bb1450375e04bea6933ed88d62837d6b965e80e033149812d94c23a233f"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navber}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>{user.email}</p>
              <button onClick={handleLogOut} className="btn btn-primary">
                {" "}
                Log Out
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};
export default Navber;
